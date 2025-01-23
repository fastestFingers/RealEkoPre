import { v as createComponent, J as scrollTargetProp, r as ref, c as computed, w as watch, aI as onActivated, aJ as onDeactivated, K as onBeforeUnmount, o as onMounted, ag as hUniqueSlot, h, z as hSlot, N as listenOpts, aK as getScrollHeight, Q as nextTick, O as getVerticalScrollPosition, aL as setVerticalScrollPosition, M as getScrollTarget, aM as height, aN as debounce, g as getCurrentInstance } from "./index.61ed5618.js";
const { passive } = listenOpts;
var QInfiniteScroll = createComponent({
  name: "QInfiniteScroll",
  props: {
    offset: {
      type: Number,
      default: 500
    },
    debounce: {
      type: [String, Number],
      default: 100
    },
    scrollTarget: scrollTargetProp,
    initialIndex: {
      type: Number,
      default: 0
    },
    disable: Boolean,
    reverse: Boolean
  },
  emits: ["load"],
  setup(props, { slots, emit }) {
    const isFetching = ref(false);
    const isWorking = ref(true);
    const rootRef = ref(null);
    const loadingRef = ref(null);
    let index = props.initialIndex;
    let localScrollTarget, poll;
    const classes = computed(
      () => "q-infinite-scroll__loading" + (isFetching.value === true ? "" : " invisible")
    );
    function immediatePoll() {
      if (props.disable === true || isFetching.value === true || isWorking.value === false) {
        return;
      }
      const scrollHeight = getScrollHeight(localScrollTarget), scrollPosition = getVerticalScrollPosition(localScrollTarget), containerHeight = height(localScrollTarget);
      if (props.reverse === false) {
        if (Math.round(scrollPosition + containerHeight + props.offset) >= Math.round(scrollHeight)) {
          trigger();
        }
      } else if (Math.round(scrollPosition) <= props.offset) {
        trigger();
      }
    }
    function trigger() {
      if (props.disable === true || isFetching.value === true || isWorking.value === false) {
        return;
      }
      index++;
      isFetching.value = true;
      const heightBefore = getScrollHeight(localScrollTarget);
      emit("load", index, (isDone) => {
        if (isWorking.value === true) {
          isFetching.value = false;
          nextTick(() => {
            if (props.reverse === true) {
              const heightAfter = getScrollHeight(localScrollTarget), scrollPosition = getVerticalScrollPosition(localScrollTarget), heightDifference = heightAfter - heightBefore;
              setVerticalScrollPosition(localScrollTarget, scrollPosition + heightDifference);
            }
            if (isDone === true) {
              stop();
            } else if (rootRef.value) {
              rootRef.value.closest("body") && poll();
            }
          });
        }
      });
    }
    function reset() {
      index = 0;
    }
    function resume() {
      if (isWorking.value === false) {
        isWorking.value = true;
        localScrollTarget.addEventListener("scroll", poll, passive);
      }
      immediatePoll();
    }
    function stop() {
      if (isWorking.value === true) {
        isWorking.value = false;
        isFetching.value = false;
        localScrollTarget.removeEventListener("scroll", poll, passive);
        if (poll !== void 0 && poll.cancel !== void 0) {
          poll.cancel();
        }
      }
    }
    function updateScrollTarget() {
      if (localScrollTarget && isWorking.value === true) {
        localScrollTarget.removeEventListener("scroll", poll, passive);
      }
      localScrollTarget = getScrollTarget(rootRef.value, props.scrollTarget);
      if (isWorking.value === true) {
        localScrollTarget.addEventListener("scroll", poll, passive);
        if (props.reverse === true) {
          const scrollHeight = getScrollHeight(localScrollTarget), containerHeight = height(localScrollTarget);
          setVerticalScrollPosition(localScrollTarget, scrollHeight - containerHeight);
        }
        immediatePoll();
      }
    }
    function setIndex(newIndex) {
      index = newIndex;
    }
    function setDebounce(val) {
      val = parseInt(val, 10);
      const oldPoll = poll;
      poll = val <= 0 ? immediatePoll : debounce(immediatePoll, isNaN(val) === true ? 100 : val);
      if (localScrollTarget && isWorking.value === true) {
        if (oldPoll !== void 0) {
          localScrollTarget.removeEventListener("scroll", oldPoll, passive);
        }
        localScrollTarget.addEventListener("scroll", poll, passive);
      }
    }
    function updateSvgAnimations(isRetry) {
      if (renderLoadingSlot.value === true) {
        if (loadingRef.value === null) {
          isRetry !== true && nextTick(() => {
            updateSvgAnimations(true);
          });
          return;
        }
        const action = `${isFetching.value === true ? "un" : ""}pauseAnimations`;
        Array.from(loadingRef.value.getElementsByTagName("svg")).forEach((el) => {
          el[action]();
        });
      }
    }
    const renderLoadingSlot = computed(() => props.disable !== true && isWorking.value === true);
    watch([isFetching, renderLoadingSlot], () => {
      updateSvgAnimations();
    });
    watch(() => props.disable, (val) => {
      if (val === true) {
        stop();
      } else {
        resume();
      }
    });
    watch(() => props.reverse, () => {
      if (isFetching.value === false && isWorking.value === true) {
        immediatePoll();
      }
    });
    watch(() => props.scrollTarget, updateScrollTarget);
    watch(() => props.debounce, setDebounce);
    let scrollPos = false;
    onActivated(() => {
      if (scrollPos !== false && localScrollTarget) {
        setVerticalScrollPosition(localScrollTarget, scrollPos);
      }
    });
    onDeactivated(() => {
      scrollPos = localScrollTarget ? getVerticalScrollPosition(localScrollTarget) : false;
    });
    onBeforeUnmount(() => {
      if (isWorking.value === true) {
        localScrollTarget.removeEventListener("scroll", poll, passive);
      }
    });
    onMounted(() => {
      setDebounce(props.debounce);
      updateScrollTarget();
      isFetching.value === false && updateSvgAnimations();
    });
    const vm = getCurrentInstance();
    Object.assign(vm.proxy, {
      poll: () => {
        poll !== void 0 && poll();
      },
      trigger,
      stop,
      reset,
      resume,
      setIndex,
      updateScrollTarget
    });
    return () => {
      const child = hUniqueSlot(slots.default, []);
      if (renderLoadingSlot.value === true) {
        child[props.reverse === false ? "push" : "unshift"](
          h("div", { ref: loadingRef, class: classes.value }, hSlot(slots.loading))
        );
      }
      return h("div", {
        class: "q-infinite-scroll",
        ref: rootRef
      }, child);
    };
  }
});
export { QInfiniteScroll as Q };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUUluZmluaXRlU2Nyb2xsLjNlMTYwMjc3LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2luZmluaXRlLXNjcm9sbC9RSW5maW5pdGVTY3JvbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIG9uTW91bnRlZCwgb25BY3RpdmF0ZWQsIG9uRGVhY3RpdmF0ZWQsIG9uQmVmb3JlVW5tb3VudCwgbmV4dFRpY2ssIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJy4uLy4uL3V0aWxzL2RlYm91bmNlL2RlYm91bmNlLmpzJ1xuaW1wb3J0IHsgaGVpZ2h0IH0gZnJvbSAnLi4vLi4vdXRpbHMvZG9tL2RvbS5qcydcbmltcG9ydCB7IGdldFNjcm9sbFRhcmdldCwgZ2V0U2Nyb2xsSGVpZ2h0LCBnZXRWZXJ0aWNhbFNjcm9sbFBvc2l0aW9uLCBzZXRWZXJ0aWNhbFNjcm9sbFBvc2l0aW9uLCBzY3JvbGxUYXJnZXRQcm9wIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2Nyb2xsL3Njcm9sbC5qcydcbmltcG9ydCB7IGxpc3Rlbk9wdHMgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC9ldmVudC5qcydcbmltcG9ydCB7IGhTbG90LCBoVW5pcXVlU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUucmVuZGVyL3JlbmRlci5qcydcblxuY29uc3QgeyBwYXNzaXZlIH0gPSBsaXN0ZW5PcHRzXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRSW5maW5pdGVTY3JvbGwnLFxuXG4gIHByb3BzOiB7XG4gICAgb2Zmc2V0OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiA1MDBcbiAgICB9LFxuXG4gICAgZGVib3VuY2U6IHtcbiAgICAgIHR5cGU6IFsgU3RyaW5nLCBOdW1iZXIgXSxcbiAgICAgIGRlZmF1bHQ6IDEwMFxuICAgIH0sXG5cbiAgICBzY3JvbGxUYXJnZXQ6IHNjcm9sbFRhcmdldFByb3AsXG5cbiAgICBpbml0aWFsSW5kZXg6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDBcbiAgICB9LFxuXG4gICAgZGlzYWJsZTogQm9vbGVhbixcbiAgICByZXZlcnNlOiBCb29sZWFuXG4gIH0sXG5cbiAgZW1pdHM6IFsgJ2xvYWQnIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCBpc0ZldGNoaW5nID0gcmVmKGZhbHNlKVxuICAgIGNvbnN0IGlzV29ya2luZyA9IHJlZih0cnVlKVxuICAgIGNvbnN0IHJvb3RSZWYgPSByZWYobnVsbClcbiAgICBjb25zdCBsb2FkaW5nUmVmID0gcmVmKG51bGwpXG5cbiAgICBsZXQgaW5kZXggPSBwcm9wcy5pbml0aWFsSW5kZXhcbiAgICBsZXQgbG9jYWxTY3JvbGxUYXJnZXQsIHBvbGxcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtaW5maW5pdGUtc2Nyb2xsX19sb2FkaW5nJ1xuICAgICAgKyAoaXNGZXRjaGluZy52YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogJyBpbnZpc2libGUnKVxuICAgIClcblxuICAgIGZ1bmN0aW9uIGltbWVkaWF0ZVBvbGwgKCkge1xuICAgICAgaWYgKHByb3BzLmRpc2FibGUgPT09IHRydWUgfHwgaXNGZXRjaGluZy52YWx1ZSA9PT0gdHJ1ZSB8fCBpc1dvcmtpbmcudmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdFxuICAgICAgICBzY3JvbGxIZWlnaHQgPSBnZXRTY3JvbGxIZWlnaHQobG9jYWxTY3JvbGxUYXJnZXQpLFxuICAgICAgICBzY3JvbGxQb3NpdGlvbiA9IGdldFZlcnRpY2FsU2Nyb2xsUG9zaXRpb24obG9jYWxTY3JvbGxUYXJnZXQpLFxuICAgICAgICBjb250YWluZXJIZWlnaHQgPSBoZWlnaHQobG9jYWxTY3JvbGxUYXJnZXQpXG5cbiAgICAgIGlmIChwcm9wcy5yZXZlcnNlID09PSBmYWxzZSkge1xuICAgICAgICBpZiAoTWF0aC5yb3VuZChzY3JvbGxQb3NpdGlvbiArIGNvbnRhaW5lckhlaWdodCArIHByb3BzLm9mZnNldCkgPj0gTWF0aC5yb3VuZChzY3JvbGxIZWlnaHQpKSB7XG4gICAgICAgICAgdHJpZ2dlcigpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKE1hdGgucm91bmQoc2Nyb2xsUG9zaXRpb24pIDw9IHByb3BzLm9mZnNldCkge1xuICAgICAgICB0cmlnZ2VyKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmlnZ2VyICgpIHtcbiAgICAgIGlmIChwcm9wcy5kaXNhYmxlID09PSB0cnVlIHx8IGlzRmV0Y2hpbmcudmFsdWUgPT09IHRydWUgfHwgaXNXb3JraW5nLnZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaW5kZXgrK1xuICAgICAgaXNGZXRjaGluZy52YWx1ZSA9IHRydWVcblxuICAgICAgY29uc3QgaGVpZ2h0QmVmb3JlID0gZ2V0U2Nyb2xsSGVpZ2h0KGxvY2FsU2Nyb2xsVGFyZ2V0KVxuXG4gICAgICBlbWl0KCdsb2FkJywgaW5kZXgsIGlzRG9uZSA9PiB7XG4gICAgICAgIGlmIChpc1dvcmtpbmcudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICBpc0ZldGNoaW5nLnZhbHVlID0gZmFsc2VcbiAgICAgICAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICBpZiAocHJvcHMucmV2ZXJzZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBjb25zdFxuICAgICAgICAgICAgICAgIGhlaWdodEFmdGVyID0gZ2V0U2Nyb2xsSGVpZ2h0KGxvY2FsU2Nyb2xsVGFyZ2V0KSxcbiAgICAgICAgICAgICAgICBzY3JvbGxQb3NpdGlvbiA9IGdldFZlcnRpY2FsU2Nyb2xsUG9zaXRpb24obG9jYWxTY3JvbGxUYXJnZXQpLFxuICAgICAgICAgICAgICAgIGhlaWdodERpZmZlcmVuY2UgPSBoZWlnaHRBZnRlciAtIGhlaWdodEJlZm9yZVxuXG4gICAgICAgICAgICAgIHNldFZlcnRpY2FsU2Nyb2xsUG9zaXRpb24obG9jYWxTY3JvbGxUYXJnZXQsIHNjcm9sbFBvc2l0aW9uICsgaGVpZ2h0RGlmZmVyZW5jZSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGlzRG9uZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBzdG9wKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJvb3RSZWYudmFsdWUpIHtcbiAgICAgICAgICAgICAgcm9vdFJlZi52YWx1ZS5jbG9zZXN0KCdib2R5JykgJiYgcG9sbCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNldCAoKSB7XG4gICAgICBpbmRleCA9IDBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXN1bWUgKCkge1xuICAgICAgaWYgKGlzV29ya2luZy52YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgaXNXb3JraW5nLnZhbHVlID0gdHJ1ZVxuICAgICAgICBsb2NhbFNjcm9sbFRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBwb2xsLCBwYXNzaXZlKVxuICAgICAgfVxuXG4gICAgICBpbW1lZGlhdGVQb2xsKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdG9wICgpIHtcbiAgICAgIGlmIChpc1dvcmtpbmcudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgaXNXb3JraW5nLnZhbHVlID0gZmFsc2VcbiAgICAgICAgaXNGZXRjaGluZy52YWx1ZSA9IGZhbHNlXG4gICAgICAgIGxvY2FsU2Nyb2xsVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHBvbGwsIHBhc3NpdmUpXG4gICAgICAgIGlmIChwb2xsICE9PSB2b2lkIDAgJiYgcG9sbC5jYW5jZWwgIT09IHZvaWQgMCkge1xuICAgICAgICAgIHBvbGwuY2FuY2VsKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNjcm9sbFRhcmdldCAoKSB7XG4gICAgICBpZiAobG9jYWxTY3JvbGxUYXJnZXQgJiYgaXNXb3JraW5nLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGxvY2FsU2Nyb2xsVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHBvbGwsIHBhc3NpdmUpXG4gICAgICB9XG5cbiAgICAgIGxvY2FsU2Nyb2xsVGFyZ2V0ID0gZ2V0U2Nyb2xsVGFyZ2V0KHJvb3RSZWYudmFsdWUsIHByb3BzLnNjcm9sbFRhcmdldClcblxuICAgICAgaWYgKGlzV29ya2luZy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBsb2NhbFNjcm9sbFRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBwb2xsLCBwYXNzaXZlKVxuXG4gICAgICAgIGlmIChwcm9wcy5yZXZlcnNlID09PSB0cnVlKSB7XG4gICAgICAgICAgY29uc3RcbiAgICAgICAgICAgIHNjcm9sbEhlaWdodCA9IGdldFNjcm9sbEhlaWdodChsb2NhbFNjcm9sbFRhcmdldCksXG4gICAgICAgICAgICBjb250YWluZXJIZWlnaHQgPSBoZWlnaHQobG9jYWxTY3JvbGxUYXJnZXQpXG5cbiAgICAgICAgICBzZXRWZXJ0aWNhbFNjcm9sbFBvc2l0aW9uKGxvY2FsU2Nyb2xsVGFyZ2V0LCBzY3JvbGxIZWlnaHQgLSBjb250YWluZXJIZWlnaHQpXG4gICAgICAgIH1cblxuICAgICAgICBpbW1lZGlhdGVQb2xsKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRJbmRleCAobmV3SW5kZXgpIHtcbiAgICAgIGluZGV4ID0gbmV3SW5kZXhcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXREZWJvdW5jZSAodmFsKSB7XG4gICAgICB2YWwgPSBwYXJzZUludCh2YWwsIDEwKVxuXG4gICAgICBjb25zdCBvbGRQb2xsID0gcG9sbFxuXG4gICAgICBwb2xsID0gdmFsIDw9IDBcbiAgICAgICAgPyBpbW1lZGlhdGVQb2xsXG4gICAgICAgIDogZGVib3VuY2UoaW1tZWRpYXRlUG9sbCwgaXNOYU4odmFsKSA9PT0gdHJ1ZSA/IDEwMCA6IHZhbClcblxuICAgICAgaWYgKGxvY2FsU2Nyb2xsVGFyZ2V0ICYmIGlzV29ya2luZy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBpZiAob2xkUG9sbCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgbG9jYWxTY3JvbGxUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb2xkUG9sbCwgcGFzc2l2ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGxvY2FsU2Nyb2xsVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHBvbGwsIHBhc3NpdmUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlU3ZnQW5pbWF0aW9ucyAoaXNSZXRyeSkge1xuICAgICAgaWYgKHJlbmRlckxvYWRpbmdTbG90LnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGlmIChsb2FkaW5nUmVmLnZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgaXNSZXRyeSAhPT0gdHJ1ZSAmJiBuZXh0VGljaygoKSA9PiB7IHVwZGF0ZVN2Z0FuaW1hdGlvbnModHJ1ZSkgfSlcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHdlIG5lZWQgdG8gcGF1c2Ugc3ZnIGFuaW1hdGlvbnMgKGlmIGFueSkgd2hlbiBoaWRpbmdcbiAgICAgICAgLy8gb3RoZXJ3aXNlIHRoZSBicm93c2VyIHdpbGwga2VlcCBvbiByZWNhbGN1bGF0aW5nIHRoZSBzdHlsZVxuICAgICAgICBjb25zdCBhY3Rpb24gPSBgJHsgaXNGZXRjaGluZy52YWx1ZSA9PT0gdHJ1ZSA/ICd1bicgOiAnJyB9cGF1c2VBbmltYXRpb25zYFxuICAgICAgICBBcnJheS5mcm9tKGxvYWRpbmdSZWYudmFsdWUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3N2ZycpKS5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICBlbFsgYWN0aW9uIF0oKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlckxvYWRpbmdTbG90ID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMuZGlzYWJsZSAhPT0gdHJ1ZSAmJiBpc1dvcmtpbmcudmFsdWUgPT09IHRydWUpXG5cbiAgICB3YXRjaChbIGlzRmV0Y2hpbmcsIHJlbmRlckxvYWRpbmdTbG90IF0sICgpID0+IHsgdXBkYXRlU3ZnQW5pbWF0aW9ucygpIH0pXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5kaXNhYmxlLCB2YWwgPT4ge1xuICAgICAgaWYgKHZhbCA9PT0gdHJ1ZSkgeyBzdG9wKCkgfVxuICAgICAgZWxzZSB7IHJlc3VtZSgpIH1cbiAgICB9KVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMucmV2ZXJzZSwgKCkgPT4ge1xuICAgICAgaWYgKGlzRmV0Y2hpbmcudmFsdWUgPT09IGZhbHNlICYmIGlzV29ya2luZy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBpbW1lZGlhdGVQb2xsKClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMuc2Nyb2xsVGFyZ2V0LCB1cGRhdGVTY3JvbGxUYXJnZXQpXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMuZGVib3VuY2UsIHNldERlYm91bmNlKVxuXG4gICAgbGV0IHNjcm9sbFBvcyA9IGZhbHNlXG5cbiAgICBvbkFjdGl2YXRlZCgoKSA9PiB7XG4gICAgICBpZiAoc2Nyb2xsUG9zICE9PSBmYWxzZSAmJiBsb2NhbFNjcm9sbFRhcmdldCkge1xuICAgICAgICBzZXRWZXJ0aWNhbFNjcm9sbFBvc2l0aW9uKGxvY2FsU2Nyb2xsVGFyZ2V0LCBzY3JvbGxQb3MpXG4gICAgICB9XG4gICAgfSlcblxuICAgIG9uRGVhY3RpdmF0ZWQoKCkgPT4ge1xuICAgICAgc2Nyb2xsUG9zID0gbG9jYWxTY3JvbGxUYXJnZXRcbiAgICAgICAgPyBnZXRWZXJ0aWNhbFNjcm9sbFBvc2l0aW9uKGxvY2FsU2Nyb2xsVGFyZ2V0KVxuICAgICAgICA6IGZhbHNlXG4gICAgfSlcblxuICAgIG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgICBpZiAoaXNXb3JraW5nLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGxvY2FsU2Nyb2xsVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHBvbGwsIHBhc3NpdmUpXG4gICAgICB9XG4gICAgfSlcblxuICAgIG9uTW91bnRlZCgoKSA9PiB7XG4gICAgICBzZXREZWJvdW5jZShwcm9wcy5kZWJvdW5jZSlcbiAgICAgIHVwZGF0ZVNjcm9sbFRhcmdldCgpXG5cbiAgICAgIGlzRmV0Y2hpbmcudmFsdWUgPT09IGZhbHNlICYmIHVwZGF0ZVN2Z0FuaW1hdGlvbnMoKVxuICAgIH0pXG5cbiAgICAvLyBleHBvc2UgcHVibGljIG1ldGhvZHNcbiAgICBjb25zdCB2bSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gICAgT2JqZWN0LmFzc2lnbih2bS5wcm94eSwge1xuICAgICAgcG9sbDogKCkgPT4geyBwb2xsICE9PSB2b2lkIDAgJiYgcG9sbCgpIH0sXG4gICAgICB0cmlnZ2VyLCBzdG9wLCByZXNldCwgcmVzdW1lLCBzZXRJbmRleCwgdXBkYXRlU2Nyb2xsVGFyZ2V0XG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IGhVbmlxdWVTbG90KHNsb3RzLmRlZmF1bHQsIFtdKVxuXG4gICAgICBpZiAocmVuZGVyTG9hZGluZ1Nsb3QudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgY2hpbGRbIHByb3BzLnJldmVyc2UgPT09IGZhbHNlID8gJ3B1c2gnIDogJ3Vuc2hpZnQnIF0oXG4gICAgICAgICAgaCgnZGl2JywgeyByZWY6IGxvYWRpbmdSZWYsIGNsYXNzOiBjbGFzc2VzLnZhbHVlIH0sIGhTbG90KHNsb3RzLmxvYWRpbmcpKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiAncS1pbmZpbml0ZS1zY3JvbGwnLFxuICAgICAgICByZWY6IHJvb3RSZWZcbiAgICAgIH0sIGNoaWxkKVxuICAgIH1cbiAgfVxufSlcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBU0EsTUFBTSxFQUFFLFFBQVMsSUFBRztBQUVwQixJQUFBLGtCQUFlLGdCQUFnQjtBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUVOLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxJQUNWO0FBQUEsSUFFRCxVQUFVO0FBQUEsTUFDUixNQUFNLENBQUUsUUFBUSxNQUFRO0FBQUEsTUFDeEIsU0FBUztBQUFBLElBQ1Y7QUFBQSxJQUVELGNBQWM7QUFBQSxJQUVkLGNBQWM7QUFBQSxNQUNaLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxJQUNWO0FBQUEsSUFFRCxTQUFTO0FBQUEsSUFDVCxTQUFTO0FBQUEsRUFDVjtBQUFBLEVBRUQsT0FBTyxDQUFFLE1BQVE7QUFBQSxFQUVqQixNQUFPLE9BQU8sRUFBRSxPQUFPLEtBQUksR0FBSTtBQUM3QixVQUFNLGFBQWEsSUFBSSxLQUFLO0FBQzVCLFVBQU0sWUFBWSxJQUFJLElBQUk7QUFDMUIsVUFBTSxVQUFVLElBQUksSUFBSTtBQUN4QixVQUFNLGFBQWEsSUFBSSxJQUFJO0FBRTNCLFFBQUksUUFBUSxNQUFNO0FBQ2xCLFFBQUksbUJBQW1CO0FBRXZCLFVBQU0sVUFBVTtBQUFBLE1BQVMsTUFDdkIsZ0NBQ0csV0FB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
