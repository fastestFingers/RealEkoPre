import { b as boot, j as createPinia } from "./index.61ed5618.js";
function isObject(v) {
  return typeof v === "object" && v !== null;
}
function normalizeOptions(options, factoryOptions) {
  options = isObject(options) ? options : /* @__PURE__ */ Object.create(null);
  return new Proxy(options, {
    get(target, key, receiver) {
      return Reflect.get(target, key, receiver) || Reflect.get(factoryOptions, key, receiver);
    }
  });
}
function isObject2(value) {
  return value !== null && typeof value === "object";
}
function merge(destination, source) {
  const mergingArrays = Array.isArray(destination) && Array.isArray(source);
  const mergingObjects = isObject2(destination) && isObject2(source);
  if (!mergingArrays && !mergingObjects) {
    throw new Error("Can only merge object with object or array with array");
  }
  const result = mergingArrays ? [] : {};
  const keys = [...Object.keys(destination), ...Object.keys(source)];
  keys.forEach((key) => {
    if (Array.isArray(destination[key]) && Array.isArray(source[key])) {
      result[key] = [
        ...Object.values(
          merge(destination[key], source[key])
        )
      ];
    } else if (source[key] !== null && typeof source[key] === "object" && typeof destination[key] === "object") {
      result[key] = merge(
        destination[key],
        source[key]
      );
    } else if (destination[key] !== void 0 && source[key] === void 0) {
      result[key] = destination[key];
    } else if (destination[key] === void 0 && source[key] !== void 0) {
      result[key] = source[key];
    }
  });
  return result;
}
function get(state, path) {
  return path.reduce((obj, p) => {
    if (p === "[]" && Array.isArray(obj))
      return obj;
    return obj == null ? void 0 : obj[p];
  }, state);
}
function set(state, path, val) {
  const modifiedState = path.slice(0, -1).reduce((obj, p) => {
    if (!/^(__proto__)$/.test(p))
      return obj[p] = obj[p] || {};
    else
      return {};
  }, state);
  if (Array.isArray(modifiedState[path[path.length - 1]]) && Array.isArray(val)) {
    const merged = modifiedState[path[path.length - 1]].map(
      (item, index) => {
        if (Array.isArray(item) && typeof item !== "object") {
          return [...item, ...val[index]];
        }
        if (typeof item === "object" && item !== null && Object.keys(item).some((key) => Array.isArray(item[key]))) {
          return merge(item, val[index]);
        }
        return {
          ...item,
          ...val[index]
        };
      }
    );
    modifiedState[path[path.length - 1]] = merged;
  } else if (path[path.length - 1] === void 0 && Array.isArray(modifiedState) && Array.isArray(val)) {
    modifiedState.push(...val);
  } else {
    modifiedState[path[path.length - 1]] = val;
  }
  return state;
}
function pick(baseState, paths) {
  return paths.reduce(
    (substate, path) => {
      const pathArray = path.split(".");
      if (!pathArray.includes("[]")) {
        return set(substate, pathArray, get(baseState, pathArray));
      }
      const arrayIndex = pathArray.indexOf("[]");
      const pathArrayBeforeArray = pathArray.slice(0, arrayIndex);
      const pathArrayUntilArray = pathArray.slice(0, arrayIndex + 1);
      const pathArrayAfterArray = pathArray.slice(arrayIndex + 1);
      const referencedArray = get(
        baseState,
        pathArrayUntilArray
      );
      const referencedArraySubstate = [];
      for (const item of referencedArray) {
        if (pathArrayAfterArray.length !== 0 && (Array.isArray(item) || typeof item === "object")) {
          referencedArraySubstate.push(
            pick(item, [pathArrayAfterArray.join(".")])
          );
        } else {
          referencedArraySubstate.push(item);
        }
      }
      return set(substate, pathArrayBeforeArray, referencedArraySubstate);
    },
    Array.isArray(baseState) ? [] : {}
  );
}
function hydrateStore(store, storage, serializer, key, debug) {
  try {
    const fromStorage = storage == null ? void 0 : storage.getItem(key);
    if (fromStorage)
      store.$patch(serializer == null ? void 0 : serializer.deserialize(fromStorage));
  } catch (error) {
    if (debug)
      console.error(error);
  }
}
function createPersistedState(factoryOptions = {}) {
  return (context) => {
    const {
      options: { persist },
      store
    } = context;
    if (!persist)
      return;
    const persistences = (Array.isArray(persist) ? persist.map((p) => normalizeOptions(p, factoryOptions)) : [normalizeOptions(persist, factoryOptions)]).map(
      ({
        storage = localStorage,
        beforeRestore = null,
        afterRestore = null,
        serializer = {
          serialize: JSON.stringify,
          deserialize: JSON.parse
        },
        key = store.$id,
        paths = null,
        debug = false
      }) => ({
        storage,
        beforeRestore,
        afterRestore,
        serializer,
        key,
        paths,
        debug
      })
    );
    persistences.forEach((persistence) => {
      const {
        storage,
        serializer,
        key,
        paths,
        beforeRestore,
        afterRestore,
        debug
      } = persistence;
      beforeRestore == null ? void 0 : beforeRestore(context);
      hydrateStore(store, storage, serializer, key, debug);
      afterRestore == null ? void 0 : afterRestore(context);
      store.$subscribe(
        (_mutation, state) => {
          try {
            const toStore = Array.isArray(paths) ? pick(state, paths) : state;
            storage.setItem(key, serializer.serialize(toStore));
          } catch (error) {
            if (debug)
              console.error(error);
          }
        },
        {
          detached: true
        }
      );
    });
    store.$hydrate = ({ runHooks = true } = {}) => {
      persistences.forEach((persistence) => {
        const { beforeRestore, afterRestore, storage, serializer, key, debug } = persistence;
        if (runHooks)
          beforeRestore == null ? void 0 : beforeRestore(context);
        hydrateStore(store, storage, serializer, key, debug);
        if (runHooks)
          afterRestore == null ? void 0 : afterRestore(context);
      });
    };
  };
}
var src_default = createPersistedState();
var PiniaPlugin = boot(({ app }) => {
  const pinia = createPinia();
  pinia.use(src_default);
  app.use(pinia);
});
export { PiniaPlugin as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGluaWFQbHVnaW4uMTQ5ZDA0ZWMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9waW5pYS1wbHVnaW4tcGVyc2lzdGVkc3RhdGUvZGlzdC9jaHVuay01NEw0M1hKQS5tanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcGluaWEtcGx1Z2luLXBlcnNpc3RlZHN0YXRlL2Rpc3QvaW5kZXgubWpzIiwiLi4vLi4vLi4vc3JjL2Jvb3QvUGluaWFQbHVnaW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL2NvcmUvbm9ybWFsaXplLnRzXG5mdW5jdGlvbiBpc09iamVjdCh2KSB7XG4gIHJldHVybiB0eXBlb2YgdiA9PT0gXCJvYmplY3RcIiAmJiB2ICE9PSBudWxsO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplT3B0aW9ucyhvcHRpb25zLCBmYWN0b3J5T3B0aW9ucykge1xuICBvcHRpb25zID0gaXNPYmplY3Qob3B0aW9ucykgPyBvcHRpb25zIDogLyogQF9fUFVSRV9fICovIE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHJldHVybiBuZXcgUHJveHkob3B0aW9ucywge1xuICAgIGdldCh0YXJnZXQsIGtleSwgcmVjZWl2ZXIpIHtcbiAgICAgIHJldHVybiBSZWZsZWN0LmdldCh0YXJnZXQsIGtleSwgcmVjZWl2ZXIpIHx8IFJlZmxlY3QuZ2V0KGZhY3RvcnlPcHRpb25zLCBrZXksIHJlY2VpdmVyKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vLyBzcmMvY29yZS9waWNrLnRzXG5mdW5jdGlvbiBpc09iamVjdDIodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIjtcbn1cbmZ1bmN0aW9uIG1lcmdlKGRlc3RpbmF0aW9uLCBzb3VyY2UpIHtcbiAgY29uc3QgbWVyZ2luZ0FycmF5cyA9IEFycmF5LmlzQXJyYXkoZGVzdGluYXRpb24pICYmIEFycmF5LmlzQXJyYXkoc291cmNlKTtcbiAgY29uc3QgbWVyZ2luZ09iamVjdHMgPSBpc09iamVjdDIoZGVzdGluYXRpb24pICYmIGlzT2JqZWN0Mihzb3VyY2UpO1xuICBpZiAoIW1lcmdpbmdBcnJheXMgJiYgIW1lcmdpbmdPYmplY3RzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuIG9ubHkgbWVyZ2Ugb2JqZWN0IHdpdGggb2JqZWN0IG9yIGFycmF5IHdpdGggYXJyYXlcIik7XG4gIH1cbiAgY29uc3QgcmVzdWx0ID0gbWVyZ2luZ0FycmF5cyA/IFtdIDoge307XG4gIGNvbnN0IGtleXMgPSBbLi4uT2JqZWN0LmtleXMoZGVzdGluYXRpb24pLCAuLi5PYmplY3Qua2V5cyhzb3VyY2UpXTtcbiAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShkZXN0aW5hdGlvbltrZXldKSAmJiBBcnJheS5pc0FycmF5KHNvdXJjZVtrZXldKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSBbXG4gICAgICAgIC4uLk9iamVjdC52YWx1ZXMoXG4gICAgICAgICAgbWVyZ2UoZGVzdGluYXRpb25ba2V5XSwgc291cmNlW2tleV0pXG4gICAgICAgIClcbiAgICAgIF07XG4gICAgfSBlbHNlIGlmIChzb3VyY2Vba2V5XSAhPT0gbnVsbCAmJiB0eXBlb2Ygc291cmNlW2tleV0gPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIGRlc3RpbmF0aW9uW2tleV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2UoXG4gICAgICAgIGRlc3RpbmF0aW9uW2tleV0sXG4gICAgICAgIHNvdXJjZVtrZXldXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoZGVzdGluYXRpb25ba2V5XSAhPT0gdm9pZCAwICYmIHNvdXJjZVtrZXldID09PSB2b2lkIDApIHtcbiAgICAgIHJlc3VsdFtrZXldID0gZGVzdGluYXRpb25ba2V5XTtcbiAgICB9IGVsc2UgaWYgKGRlc3RpbmF0aW9uW2tleV0gPT09IHZvaWQgMCAmJiBzb3VyY2Vba2V5XSAhPT0gdm9pZCAwKSB7XG4gICAgICByZXN1bHRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBnZXQoc3RhdGUsIHBhdGgpIHtcbiAgcmV0dXJuIHBhdGgucmVkdWNlKChvYmosIHApID0+IHtcbiAgICBpZiAocCA9PT0gXCJbXVwiICYmIEFycmF5LmlzQXJyYXkob2JqKSlcbiAgICAgIHJldHVybiBvYmo7XG4gICAgcmV0dXJuIG9iaiA9PSBudWxsID8gdm9pZCAwIDogb2JqW3BdO1xuICB9LCBzdGF0ZSk7XG59XG5mdW5jdGlvbiBzZXQoc3RhdGUsIHBhdGgsIHZhbCkge1xuICBjb25zdCBtb2RpZmllZFN0YXRlID0gcGF0aC5zbGljZSgwLCAtMSkucmVkdWNlKChvYmosIHApID0+IHtcbiAgICBpZiAoIS9eKF9fcHJvdG9fXykkLy50ZXN0KHApKVxuICAgICAgcmV0dXJuIG9ialtwXSA9IG9ialtwXSB8fCB7fTtcbiAgICBlbHNlXG4gICAgICByZXR1cm4ge307XG4gIH0sIHN0YXRlKTtcbiAgaWYgKEFycmF5LmlzQXJyYXkobW9kaWZpZWRTdGF0ZVtwYXRoW3BhdGgubGVuZ3RoIC0gMV1dKSAmJiBBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICBjb25zdCBtZXJnZWQgPSBtb2RpZmllZFN0YXRlW3BhdGhbcGF0aC5sZW5ndGggLSAxXV0ubWFwKFxuICAgICAgKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW0pICYmIHR5cGVvZiBpdGVtICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgcmV0dXJuIFsuLi5pdGVtLCAuLi52YWxbaW5kZXhdXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGl0ZW0gPT09IFwib2JqZWN0XCIgJiYgaXRlbSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyhpdGVtKS5zb21lKChrZXkpID0+IEFycmF5LmlzQXJyYXkoaXRlbVtrZXldKSkpIHtcbiAgICAgICAgICByZXR1cm4gbWVyZ2UoaXRlbSwgdmFsW2luZGV4XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5pdGVtLFxuICAgICAgICAgIC4uLnZhbFtpbmRleF1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICApO1xuICAgIG1vZGlmaWVkU3RhdGVbcGF0aFtwYXRoLmxlbmd0aCAtIDFdXSA9IG1lcmdlZDtcbiAgfSBlbHNlIGlmIChwYXRoW3BhdGgubGVuZ3RoIC0gMV0gPT09IHZvaWQgMCAmJiBBcnJheS5pc0FycmF5KG1vZGlmaWVkU3RhdGUpICYmIEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgIG1vZGlmaWVkU3RhdGUucHVzaCguLi52YWwpO1xuICB9IGVsc2Uge1xuICAgIG1vZGlmaWVkU3RhdGVbcGF0aFtwYXRoLmxlbmd0aCAtIDFdXSA9IHZhbDtcbiAgfVxuICByZXR1cm4gc3RhdGU7XG59XG5mdW5jdGlvbiBwaWNrKGJhc2VTdGF0ZSwgcGF0aHMpIHtcbiAgcmV0dXJuIHBhdGhzLnJlZHVjZShcbiAgICAoc3Vic3RhdGUsIHBhdGgpID0+IHtcbiAgICAgIGNvbnN0IHBhdGhBcnJheSA9IHBhdGguc3BsaXQoXCIuXCIpO1xuICAgICAgaWYgKCFwYXRoQXJyYXkuaW5jbHVkZXMoXCJbXVwiKSkge1xuICAgICAgICByZXR1cm4gc2V0KHN1YnN0YXRlLCBwYXRoQXJyYXksIGdldChiYXNlU3RhdGUsIHBhdGhBcnJheSkpO1xuICAgICAgfVxuICAgICAgY29uc3QgYXJyYXlJbmRleCA9IHBhdGhBcnJheS5pbmRleE9mKFwiW11cIik7XG4gICAgICBjb25zdCBwYXRoQXJyYXlCZWZvcmVBcnJheSA9IHBhdGhBcnJheS5zbGljZSgwLCBhcnJheUluZGV4KTtcbiAgICAgIGNvbnN0IHBhdGhBcnJheVVudGlsQXJyYXkgPSBwYXRoQXJyYXkuc2xpY2UoMCwgYXJyYXlJbmRleCArIDEpO1xuICAgICAgY29uc3QgcGF0aEFycmF5QWZ0ZXJBcnJheSA9IHBhdGhBcnJheS5zbGljZShhcnJheUluZGV4ICsgMSk7XG4gICAgICBjb25zdCByZWZlcmVuY2VkQXJyYXkgPSBnZXQoXG4gICAgICAgIGJhc2VTdGF0ZSxcbiAgICAgICAgcGF0aEFycmF5VW50aWxBcnJheVxuICAgICAgKTtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZWRBcnJheVN1YnN0YXRlID0gW107XG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgcmVmZXJlbmNlZEFycmF5KSB7XG4gICAgICAgIGlmIChwYXRoQXJyYXlBZnRlckFycmF5Lmxlbmd0aCAhPT0gMCAmJiAoQXJyYXkuaXNBcnJheShpdGVtKSB8fCB0eXBlb2YgaXRlbSA9PT0gXCJvYmplY3RcIikpIHtcbiAgICAgICAgICByZWZlcmVuY2VkQXJyYXlTdWJzdGF0ZS5wdXNoKFxuICAgICAgICAgICAgcGljayhpdGVtLCBbcGF0aEFycmF5QWZ0ZXJBcnJheS5qb2luKFwiLlwiKV0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWZlcmVuY2VkQXJyYXlTdWJzdGF0ZS5wdXNoKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gc2V0KHN1YnN0YXRlLCBwYXRoQXJyYXlCZWZvcmVBcnJheSwgcmVmZXJlbmNlZEFycmF5U3Vic3RhdGUpO1xuICAgIH0sXG4gICAgQXJyYXkuaXNBcnJheShiYXNlU3RhdGUpID8gW10gOiB7fVxuICApO1xufVxuXG4vLyBzcmMvY29yZS9wbHVnaW4udHNcbmZ1bmN0aW9uIGh5ZHJhdGVTdG9yZShzdG9yZSwgc3RvcmFnZSwgc2VyaWFsaXplciwga2V5LCBkZWJ1Zykge1xuICB0cnkge1xuICAgIGNvbnN0IGZyb21TdG9yYWdlID0gc3RvcmFnZSA9PSBudWxsID8gdm9pZCAwIDogc3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgaWYgKGZyb21TdG9yYWdlKVxuICAgICAgc3RvcmUuJHBhdGNoKHNlcmlhbGl6ZXIgPT0gbnVsbCA/IHZvaWQgMCA6IHNlcmlhbGl6ZXIuZGVzZXJpYWxpemUoZnJvbVN0b3JhZ2UpKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZGVidWcpXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgfVxufVxuZnVuY3Rpb24gY3JlYXRlUGVyc2lzdGVkU3RhdGUoZmFjdG9yeU9wdGlvbnMgPSB7fSkge1xuICByZXR1cm4gKGNvbnRleHQpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBvcHRpb25zOiB7IHBlcnNpc3QgfSxcbiAgICAgIHN0b3JlXG4gICAgfSA9IGNvbnRleHQ7XG4gICAgaWYgKCFwZXJzaXN0KVxuICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IHBlcnNpc3RlbmNlcyA9IChBcnJheS5pc0FycmF5KHBlcnNpc3QpID8gcGVyc2lzdC5tYXAoKHApID0+IG5vcm1hbGl6ZU9wdGlvbnMocCwgZmFjdG9yeU9wdGlvbnMpKSA6IFtub3JtYWxpemVPcHRpb25zKHBlcnNpc3QsIGZhY3RvcnlPcHRpb25zKV0pLm1hcChcbiAgICAgICh7XG4gICAgICAgIHN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UsXG4gICAgICAgIGJlZm9yZVJlc3RvcmUgPSBudWxsLFxuICAgICAgICBhZnRlclJlc3RvcmUgPSBudWxsLFxuICAgICAgICBzZXJpYWxpemVyID0ge1xuICAgICAgICAgIHNlcmlhbGl6ZTogSlNPTi5zdHJpbmdpZnksXG4gICAgICAgICAgZGVzZXJpYWxpemU6IEpTT04ucGFyc2VcbiAgICAgICAgfSxcbiAgICAgICAga2V5ID0gc3RvcmUuJGlkLFxuICAgICAgICBwYXRocyA9IG51bGwsXG4gICAgICAgIGRlYnVnID0gZmFsc2VcbiAgICAgIH0pID0+ICh7XG4gICAgICAgIHN0b3JhZ2UsXG4gICAgICAgIGJlZm9yZVJlc3RvcmUsXG4gICAgICAgIGFmdGVyUmVzdG9yZSxcbiAgICAgICAgc2VyaWFsaXplcixcbiAgICAgICAga2V5LFxuICAgICAgICBwYXRocyxcbiAgICAgICAgZGVidWdcbiAgICAgIH0pXG4gICAgKTtcbiAgICBwZXJzaXN0ZW5jZXMuZm9yRWFjaCgocGVyc2lzdGVuY2UpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgc3RvcmFnZSxcbiAgICAgICAgc2VyaWFsaXplcixcbiAgICAgICAga2V5LFxuICAgICAgICBwYXRocyxcbiAgICAgICAgYmVmb3JlUmVzdG9yZSxcbiAgICAgICAgYWZ0ZXJSZXN0b3JlLFxuICAgICAgICBkZWJ1Z1xuICAgICAgfSA9IHBlcnNpc3RlbmNlO1xuICAgICAgYmVmb3JlUmVzdG9yZSA9PSBudWxsID8gdm9pZCAwIDogYmVmb3JlUmVzdG9yZShjb250ZXh0KTtcbiAgICAgIGh5ZHJhdGVTdG9yZShzdG9yZSwgc3RvcmFnZSwgc2VyaWFsaXplciwga2V5LCBkZWJ1Zyk7XG4gICAgICBhZnRlclJlc3RvcmUgPT0gbnVsbCA/IHZvaWQgMCA6IGFmdGVyUmVzdG9yZShjb250ZXh0KTtcbiAgICAgIHN0b3JlLiRzdWJzY3JpYmUoXG4gICAgICAgIChfbXV0YXRpb24sIHN0YXRlKSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHRvU3RvcmUgPSBBcnJheS5pc0FycmF5KHBhdGhzKSA/IHBpY2soc3RhdGUsIHBhdGhzKSA6IHN0YXRlO1xuICAgICAgICAgICAgc3RvcmFnZS5zZXRJdGVtKGtleSwgc2VyaWFsaXplci5zZXJpYWxpemUodG9TdG9yZSkpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZGVidWcpXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGRldGFjaGVkOiB0cnVlXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSk7XG4gICAgc3RvcmUuJGh5ZHJhdGUgPSAoeyBydW5Ib29rcyA9IHRydWUgfSA9IHt9KSA9PiB7XG4gICAgICBwZXJzaXN0ZW5jZXMuZm9yRWFjaCgocGVyc2lzdGVuY2UpID0+IHtcbiAgICAgICAgY29uc3QgeyBiZWZvcmVSZXN0b3JlLCBhZnRlclJlc3RvcmUsIHN0b3JhZ2UsIHNlcmlhbGl6ZXIsIGtleSwgZGVidWcgfSA9IHBlcnNpc3RlbmNlO1xuICAgICAgICBpZiAocnVuSG9va3MpXG4gICAgICAgICAgYmVmb3JlUmVzdG9yZSA9PSBudWxsID8gdm9pZCAwIDogYmVmb3JlUmVzdG9yZShjb250ZXh0KTtcbiAgICAgICAgaHlkcmF0ZVN0b3JlKHN0b3JlLCBzdG9yYWdlLCBzZXJpYWxpemVyLCBrZXksIGRlYnVnKTtcbiAgICAgICAgaWYgKHJ1bkhvb2tzKVxuICAgICAgICAgIGFmdGVyUmVzdG9yZSA9PSBudWxsID8gdm9pZCAwIDogYWZ0ZXJSZXN0b3JlKGNvbnRleHQpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IHtcbiAgY3JlYXRlUGVyc2lzdGVkU3RhdGVcbn07XG4iLCJpbXBvcnQge1xuICBjcmVhdGVQZXJzaXN0ZWRTdGF0ZVxufSBmcm9tIFwiLi9jaHVuay01NEw0M1hKQS5tanNcIjtcblxuLy8gc3JjL2luZGV4LnRzXG52YXIgc3JjX2RlZmF1bHQgPSBjcmVhdGVQZXJzaXN0ZWRTdGF0ZSgpO1xuZXhwb3J0IHtcbiAgY3JlYXRlUGVyc2lzdGVkU3RhdGUsXG4gIHNyY19kZWZhdWx0IGFzIGRlZmF1bHRcbn07XG4iLCJpbXBvcnQgeyBib290IH0gZnJvbSBcInF1YXNhci93cmFwcGVyc1wiO1xuaW1wb3J0IHsgY3JlYXRlUGluaWEgfSBmcm9tIFwicGluaWFcIjtcbmltcG9ydCBwaW5pYVBsdWdpblBlcnNpc3RlZHN0YXRlIGZyb20gXCJwaW5pYS1wbHVnaW4tcGVyc2lzdGVkc3RhdGVcIjtcblxuLy8gXCJhc3luY1wiIGlzIG9wdGlvbmFsO1xuLy8gbW9yZSBpbmZvIG9uIHBhcmFtczogaHR0cHM6Ly92Mi5xdWFzYXIuZGV2L3F1YXNhci1jbGkvYm9vdC1maWxlc1xuLy8gZXhwb3J0IGRlZmF1bHQgYm9vdChhc3luYyAoLyogeyBhcHAsIHJvdXRlciwgLi4uIH0gKi8pID0+IHtcblxuLy8gfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGJvb3QoKHsgYXBwIH0pID0+IHtcbiAgY29uc3QgcGluaWEgPSBjcmVhdGVQaW5pYSgpO1xuICBwaW5pYS51c2UocGluaWFQbHVnaW5QZXJzaXN0ZWRzdGF0ZSk7XG4gIGFwcC51c2UocGluaWEpO1xufSk7XG4iXSwibmFtZXMiOlsicGluaWFQbHVnaW5QZXJzaXN0ZWRzdGF0ZSJdLCJtYXBwaW5ncyI6IjtBQUNBLFNBQVMsU0FBUyxHQUFHO0FBQ25CLFNBQU8sT0FBTyxNQUFNLFlBQVksTUFBTTtBQUN4QztBQUNBLFNBQVMsaUJBQWlCLFNBQVMsZ0JBQWdCO0FBQ2pELFlBQVUsU0FBUyxPQUFPLElBQUksVUFBMEIsdUJBQU8sT0FBTyxJQUFJO0FBQzFFLFNBQU8sSUFBSSxNQUFNLFNBQVM7QUFBQSxJQUN4QixJQUFJLFFBQVEsS0FBSyxVQUFVO0FBQ3pCLGFBQU8sUUFBUSxJQUFJLFFBQVEsS0FBSyxRQUFRLEtBQUssUUFBUSxJQUFJLGdCQUFnQixLQUFLLFFBQVE7QUFBQSxJQUN2RjtBQUFBLEVBQ0wsQ0FBRztBQUNIO0FBR0EsU0FBUyxVQUFVLE9BQU87QUFDeEIsU0FBTyxVQUFVLFFBQVEsT0FBTyxVQUFVO0FBQzVDO0FBQ0EsU0FBUyxNQUFNLGFBQWEsUUFBUTtBQUNsQyxRQUFNLGdCQUFnQixNQUFNLFFBQVEsV0FBVyxLQUFLLE1BQU0sUUFBUSxNQUFNO0FBQ3hFLFFBQU0saUJBQWlCLFVBQVUsV0FBVyxLQUFLLFVBQVUsTUFBTTtBQUNqRSxNQUFJLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCO0FBQ3JDLFVBQU0sSUFBSSxNQUFNLHVEQUF1RDtBQUFBLEVBQ3hFO0FBQ0QsUUFBTSxTQUFTLGdCQUFnQixDQUFFLElBQUc7QUFDcEMsUUFBTSxPQUFPLENBQUMsR0FBRyxPQUFPLEtBQUssV0FBVyxHQUFHLEdBQUcsT0FBTyxLQUFLLE1BQU0sQ0FBQztBQUNqRSxPQUFLLFFBQVEs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
