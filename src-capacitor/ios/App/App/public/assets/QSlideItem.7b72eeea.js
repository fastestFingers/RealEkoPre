import { T as TouchPan } from "./QPullToRefresh.3d10c02d.js";
import { v as createComponent, ah as useDarkProps, ai as useDark, r as ref, c as computed, a4 as onBeforeUpdate, K as onBeforeUnmount, h, z as hSlot, aa as withDirectives, g as getCurrentInstance } from "./index.61ed5618.js";
import { u as useRenderCache } from "./use-render-cache.b9e045af.js";
const slotsDef = [
  ["left", "center", "start", "width"],
  ["right", "center", "end", "width"],
  ["top", "start", "center", "height"],
  ["bottom", "end", "center", "height"]
];
var QSlideItem = createComponent({
  name: "QSlideItem",
  props: {
    ...useDarkProps,
    leftColor: String,
    rightColor: String,
    topColor: String,
    bottomColor: String,
    onSlide: Function
  },
  emits: ["action", "top", "right", "bottom", "left"],
  setup(props, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;
    const isDark = useDark(props, $q);
    const { getCache } = useRenderCache();
    const contentRef = ref(null);
    let timer = null, pan = {}, dirRefs = {}, dirContentRefs = {};
    const langDir = computed(() => $q.lang.rtl === true ? { left: "right", right: "left" } : { left: "left", right: "right" });
    const classes = computed(
      () => "q-slide-item q-item-type overflow-hidden" + (isDark.value === true ? " q-slide-item--dark q-dark" : "")
    );
    function reset() {
      contentRef.value.style.transform = "translate(0,0)";
    }
    function emitSlide(side, ratio, isReset) {
      props.onSlide !== void 0 && emit("slide", { side, ratio, isReset });
    }
    function onPan(evt) {
      const node = contentRef.value;
      if (evt.isFirst) {
        pan = {
          dir: null,
          size: { left: 0, right: 0, top: 0, bottom: 0 },
          scale: 0
        };
        node.classList.add("no-transition");
        slotsDef.forEach((slotName) => {
          if (slots[slotName[0]] !== void 0) {
            const node2 = dirContentRefs[slotName[0]];
            node2.style.transform = "scale(1)";
            pan.size[slotName[0]] = node2.getBoundingClientRect()[slotName[3]];
          }
        });
        pan.axis = evt.direction === "up" || evt.direction === "down" ? "Y" : "X";
      } else if (evt.isFinal) {
        node.classList.remove("no-transition");
        if (pan.scale === 1) {
          node.style.transform = `translate${pan.axis}(${pan.dir * 100}%)`;
          timer !== null && clearTimeout(timer);
          timer = setTimeout(() => {
            timer = null;
            emit(pan.showing, { reset });
            emit("action", { side: pan.showing, reset });
          }, 230);
        } else {
          node.style.transform = "translate(0,0)";
          emitSlide(pan.showing, 0, true);
        }
        return;
      } else {
        evt.direction = pan.axis === "X" ? evt.offset.x < 0 ? "left" : "right" : evt.offset.y < 0 ? "up" : "down";
      }
      if (slots.left === void 0 && evt.direction === langDir.value.right || slots.right === void 0 && evt.direction === langDir.value.left || slots.top === void 0 && evt.direction === "down" || slots.bottom === void 0 && evt.direction === "up") {
        node.style.transform = "translate(0,0)";
        return;
      }
      let showing, dir, dist;
      if (pan.axis === "X") {
        dir = evt.direction === "left" ? -1 : 1;
        showing = dir === 1 ? langDir.value.left : langDir.value.right;
        dist = evt.distance.x;
      } else {
        dir = evt.direction === "up" ? -2 : 2;
        showing = dir === 2 ? "top" : "bottom";
        dist = evt.distance.y;
      }
      if (pan.dir !== null && Math.abs(dir) !== Math.abs(pan.dir)) {
        return;
      }
      if (pan.dir !== dir) {
        ["left", "right", "top", "bottom"].forEach((d) => {
          if (dirRefs[d]) {
            dirRefs[d].style.visibility = showing === d ? "visible" : "hidden";
          }
        });
        pan.showing = showing;
        pan.dir = dir;
      }
      pan.scale = Math.max(0, Math.min(1, (dist - 40) / pan.size[showing]));
      node.style.transform = `translate${pan.axis}(${dist * dir / Math.abs(dir)}px)`;
      dirContentRefs[showing].style.transform = `scale(${pan.scale})`;
      emitSlide(showing, pan.scale, false);
    }
    onBeforeUpdate(() => {
      dirRefs = {};
      dirContentRefs = {};
    });
    onBeforeUnmount(() => {
      timer !== null && clearTimeout(timer);
    });
    Object.assign(proxy, { reset });
    return () => {
      const content = [], slotsList = {
        left: slots[langDir.value.right] !== void 0,
        right: slots[langDir.value.left] !== void 0,
        up: slots.bottom !== void 0,
        down: slots.top !== void 0
      }, dirs = Object.keys(slotsList).filter((key) => slotsList[key] === true);
      slotsDef.forEach((slotName) => {
        const dir = slotName[0];
        if (slots[dir] !== void 0) {
          content.push(
            h("div", {
              key: dir,
              ref: (el) => {
                dirRefs[dir] = el;
              },
              class: `q-slide-item__${dir} absolute-full row no-wrap items-${slotName[1]} justify-${slotName[2]}` + (props[dir + "Color"] !== void 0 ? ` bg-${props[dir + "Color"]}` : "")
            }, [
              h("div", { ref: (el) => {
                dirContentRefs[dir] = el;
              } }, slots[dir]())
            ])
          );
        }
      });
      const node = h("div", {
        key: `${dirs.length === 0 ? "only-" : ""} content`,
        ref: contentRef,
        class: "q-slide-item__content"
      }, hSlot(slots.default));
      if (dirs.length === 0) {
        content.push(node);
      } else {
        content.push(
          withDirectives(node, getCache("dir#" + dirs.join(""), () => {
            const modifiers = {
              prevent: true,
              stop: true,
              mouse: true
            };
            dirs.forEach((dir) => {
              modifiers[dir] = true;
            });
            return [[
              TouchPan,
              onPan,
              void 0,
              modifiers
            ]];
          }))
        );
      }
      return h("div", { class: classes.value }, content);
    };
  }
});
export { QSlideItem as Q };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUVNsaWRlSXRlbS43YjcyZWVlYS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9zbGlkZS1pdGVtL1FTbGlkZUl0ZW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgd2l0aERpcmVjdGl2ZXMsIG9uQmVmb3JlVW5tb3VudCwgb25CZWZvcmVVcGRhdGUsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFRvdWNoUGFuIGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvdG91Y2gtcGFuL1RvdWNoUGFuLmpzJ1xuXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlLnVzZS1kYXJrL3VzZS1kYXJrLmpzJ1xuaW1wb3J0IHVzZVJlbmRlckNhY2hlIGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3VzZS1yZW5kZXItY2FjaGUvdXNlLXJlbmRlci1jYWNoZS5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnJlbmRlci9yZW5kZXIuanMnXG5cbmNvbnN0IHNsb3RzRGVmID0gW1xuICBbICdsZWZ0JywgJ2NlbnRlcicsICdzdGFydCcsICd3aWR0aCcgXSxcbiAgWyAncmlnaHQnLCAnY2VudGVyJywgJ2VuZCcsICd3aWR0aCcgXSxcbiAgWyAndG9wJywgJ3N0YXJ0JywgJ2NlbnRlcicsICdoZWlnaHQnIF0sXG4gIFsgJ2JvdHRvbScsICdlbmQnLCAnY2VudGVyJywgJ2hlaWdodCcgXVxuXVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVNsaWRlSXRlbScsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VEYXJrUHJvcHMsXG5cbiAgICBsZWZ0Q29sb3I6IFN0cmluZyxcbiAgICByaWdodENvbG9yOiBTdHJpbmcsXG4gICAgdG9wQ29sb3I6IFN0cmluZyxcbiAgICBib3R0b21Db2xvcjogU3RyaW5nLFxuXG4gICAgb25TbGlkZTogRnVuY3Rpb25cbiAgfSxcblxuICBlbWl0czogWyAnYWN0aW9uJywgJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCcgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGNvbnN0IHsgcHJveHkgfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gICAgY29uc3QgeyAkcSB9ID0gcHJveHlcblxuICAgIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsICRxKVxuICAgIGNvbnN0IHsgZ2V0Q2FjaGUgfSA9IHVzZVJlbmRlckNhY2hlKClcblxuICAgIGNvbnN0IGNvbnRlbnRSZWYgPSByZWYobnVsbClcblxuICAgIGxldCB0aW1lciA9IG51bGwsIHBhbiA9IHt9LCBkaXJSZWZzID0ge30sIGRpckNvbnRlbnRSZWZzID0ge31cblxuICAgIGNvbnN0IGxhbmdEaXIgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZVxuICAgICAgICA/IHsgbGVmdDogJ3JpZ2h0JywgcmlnaHQ6ICdsZWZ0JyB9XG4gICAgICAgIDogeyBsZWZ0OiAnbGVmdCcsIHJpZ2h0OiAncmlnaHQnIH1cbiAgICApKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1zbGlkZS1pdGVtIHEtaXRlbS10eXBlIG92ZXJmbG93LWhpZGRlbidcbiAgICAgICsgKGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1zbGlkZS1pdGVtLS1kYXJrIHEtZGFyaycgOiAnJylcbiAgICApXG5cbiAgICBmdW5jdGlvbiByZXNldCAoKSB7XG4gICAgICBjb250ZW50UmVmLnZhbHVlLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoMCwwKSdcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbWl0U2xpZGUgKHNpZGUsIHJhdGlvLCBpc1Jlc2V0KSB7XG4gICAgICBwcm9wcy5vblNsaWRlICE9PSB2b2lkIDAgJiYgZW1pdCgnc2xpZGUnLCB7IHNpZGUsIHJhdGlvLCBpc1Jlc2V0IH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25QYW4gKGV2dCkge1xuICAgICAgY29uc3Qgbm9kZSA9IGNvbnRlbnRSZWYudmFsdWVcblxuICAgICAgaWYgKGV2dC5pc0ZpcnN0KSB7XG4gICAgICAgIHBhbiA9IHtcbiAgICAgICAgICBkaXI6IG51bGwsXG4gICAgICAgICAgc2l6ZTogeyBsZWZ0OiAwLCByaWdodDogMCwgdG9wOiAwLCBib3R0b206IDAgfSxcbiAgICAgICAgICBzY2FsZTogMFxuICAgICAgICB9XG5cbiAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKCduby10cmFuc2l0aW9uJylcblxuICAgICAgICBzbG90c0RlZi5mb3JFYWNoKHNsb3ROYW1lID0+IHtcbiAgICAgICAgICBpZiAoc2xvdHNbIHNsb3ROYW1lWyAwIF0gXSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gZGlyQ29udGVudFJlZnNbIHNsb3ROYW1lWyAwIF0gXVxuICAgICAgICAgICAgbm9kZS5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMSknXG4gICAgICAgICAgICBwYW4uc2l6ZVsgc2xvdE5hbWVbIDAgXSBdID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVsgc2xvdE5hbWVbIDMgXSBdXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHBhbi5heGlzID0gKGV2dC5kaXJlY3Rpb24gPT09ICd1cCcgfHwgZXZ0LmRpcmVjdGlvbiA9PT0gJ2Rvd24nKVxuICAgICAgICAgID8gJ1knXG4gICAgICAgICAgOiAnWCdcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGV2dC5pc0ZpbmFsKSB7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnbm8tdHJhbnNpdGlvbicpXG5cbiAgICAgICAgaWYgKHBhbi5zY2FsZSA9PT0gMSkge1xuICAgICAgICAgIG5vZGUuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSR7IHBhbi5heGlzIH0oJHsgcGFuLmRpciAqIDEwMCB9JSlgXG5cbiAgICAgICAgICB0aW1lciAhPT0gbnVsbCAmJiBjbGVhclRpbWVvdXQodGltZXIpXG4gICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRpbWVyID0gbnVsbFxuICAgICAgICAgICAgZW1pdChwYW4uc2hvd2luZywgeyByZXNldCB9KVxuICAgICAgICAgICAgZW1pdCgnYWN0aW9uJywgeyBzaWRlOiBwYW4uc2hvd2luZywgcmVzZXQgfSlcbiAgICAgICAgICB9LCAyMzApXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgbm9kZS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlKDAsMCknXG4gICAgICAgICAgZW1pdFNsaWRlKHBhbi5zaG93aW5nLCAwLCB0cnVlKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZXZ0LmRpcmVjdGlvbiA9IHBhbi5heGlzID09PSAnWCdcbiAgICAgICAgICA/IGV2dC5vZmZzZXQueCA8IDAgPyAnbGVmdCcgOiAncmlnaHQnXG4gICAgICAgICAgOiBldnQub2Zmc2V0LnkgPCAwID8gJ3VwJyA6ICdkb3duJ1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIChzbG90cy5sZWZ0ID09PSB2b2lkIDAgJiYgZXZ0LmRpcmVjdGlvbiA9PT0gbGFuZ0Rpci52YWx1ZS5yaWdodClcbiAgICAgICAgfHwgKHNsb3RzLnJpZ2h0ID09PSB2b2lkIDAgJiYgZXZ0LmRpcmVjdGlvbiA9PT0gbGFuZ0Rpci52YWx1ZS5sZWZ0KVxuICAgICAgICB8fCAoc2xvdHMudG9wID09PSB2b2lkIDAgJiYgZXZ0LmRpcmVjdGlvbiA9PT0gJ2Rvd24nKVxuICAgICAgICB8fCAoc2xvdHMuYm90dG9tID09PSB2b2lkIDAgJiYgZXZ0LmRpcmVjdGlvbiA9PT0gJ3VwJylcbiAgICAgICkge1xuICAgICAgICBub2RlLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoMCwwKSdcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGxldCBzaG93aW5nLCBkaXIsIGRpc3RcblxuICAgICAgaWYgKHBhbi5heGlzID09PSAnWCcpIHtcbiAgICAgICAgZGlyID0gZXZ0LmRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gLTEgOiAxXG4gICAgICAgIHNob3dpbmcgPSBkaXIgPT09IDEgPyBsYW5nRGlyLnZhbHVlLmxlZnQgOiBsYW5nRGlyLnZhbHVlLnJpZ2h0XG4gICAgICAgIGRpc3QgPSBldnQuZGlzdGFuY2UueFxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGRpciA9IGV2dC5kaXJlY3Rpb24gPT09ICd1cCcgPyAtMiA6IDJcbiAgICAgICAgc2hvd2luZyA9IGRpciA9PT0gMiA/ICd0b3AnIDogJ2JvdHRvbSdcbiAgICAgICAgZGlzdCA9IGV2dC5kaXN0YW5jZS55XG4gICAgICB9XG5cbiAgICAgIGlmIChwYW4uZGlyICE9PSBudWxsICYmIE1hdGguYWJzKGRpcikgIT09IE1hdGguYWJzKHBhbi5kaXIpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAocGFuLmRpciAhPT0gZGlyKSB7XG4gICAgICAgIFsgJ2xlZnQnLCAncmlnaHQnLCAndG9wJywgJ2JvdHRvbScgXS5mb3JFYWNoKGQgPT4ge1xuICAgICAgICAgIGlmIChkaXJSZWZzWyBkIF0pIHtcbiAgICAgICAgICAgIGRpclJlZnNbIGQgXS5zdHlsZS52aXNpYmlsaXR5ID0gc2hvd2luZyA9PT0gZFxuICAgICAgICAgICAgICA/ICd2aXNpYmxlJ1xuICAgICAgICAgICAgICA6ICdoaWRkZW4nXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBwYW4uc2hvd2luZyA9IHNob3dpbmdcbiAgICAgICAgcGFuLmRpciA9IGRpclxuICAgICAgfVxuXG4gICAgICBwYW4uc2NhbGUgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCAoZGlzdCAtIDQwKSAvIHBhbi5zaXplWyBzaG93aW5nIF0pKVxuXG4gICAgICBub2RlLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUkeyBwYW4uYXhpcyB9KCR7IGRpc3QgKiBkaXIgLyBNYXRoLmFicyhkaXIpIH1weClgXG4gICAgICBkaXJDb250ZW50UmVmc1sgc2hvd2luZyBdLnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZSgkeyBwYW4uc2NhbGUgfSlgXG5cbiAgICAgIGVtaXRTbGlkZShzaG93aW5nLCBwYW4uc2NhbGUsIGZhbHNlKVxuICAgIH1cblxuICAgIG9uQmVmb3JlVXBkYXRlKCgpID0+IHtcbiAgICAgIGRpclJlZnMgPSB7fVxuICAgICAgZGlyQ29udGVudFJlZnMgPSB7fVxuICAgIH0pXG5cbiAgICBvbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICAgICAgdGltZXIgIT09IG51bGwgJiYgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgIH0pXG5cbiAgICAvLyBleHBvc2UgcHVibGljIG1ldGhvZHNcbiAgICBPYmplY3QuYXNzaWduKHByb3h5LCB7IHJlc2V0IH0pXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3RcbiAgICAgICAgY29udGVudCA9IFtdLFxuICAgICAgICBzbG90c0xpc3QgPSB7XG4gICAgICAgICAgbGVmdDogc2xvdHNbIGxhbmdEaXIudmFsdWUucmlnaHQgXSAhPT0gdm9pZCAwLFxuICAgICAgICAgIHJpZ2h0OiBzbG90c1sgbGFuZ0Rpci52YWx1ZS5sZWZ0IF0gIT09IHZvaWQgMCxcbiAgICAgICAgICB1cDogc2xvdHMuYm90dG9tICE9PSB2b2lkIDAsXG4gICAgICAgICAgZG93bjogc2xvdHMudG9wICE9PSB2b2lkIDBcbiAgICAgICAgfSxcbiAgICAgICAgZGlycyA9IE9iamVjdC5rZXlzKHNsb3RzTGlzdCkuZmlsdGVyKGtleSA9PiBzbG90c0xpc3RbIGtleSBdID09PSB0cnVlKVxuXG4gICAgICBzbG90c0RlZi5mb3JFYWNoKHNsb3ROYW1lID0+IHtcbiAgICAgICAgY29uc3QgZGlyID0gc2xvdE5hbWVbIDAgXVxuXG4gICAgICAgIGlmIChzbG90c1sgZGlyIF0gIT09IHZvaWQgMCkge1xuICAgICAgICAgIGNvbnRlbnQucHVzaChcbiAgICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgICAga2V5OiBkaXIsXG4gICAgICAgICAgICAgIHJlZjogZWwgPT4geyBkaXJSZWZzWyBkaXIgXSA9IGVsIH0sXG4gICAgICAgICAgICAgIGNsYXNzOiBgcS1zbGlkZS1pdGVtX18keyBkaXIgfSBhYnNvbHV0ZS1mdWxsIHJvdyBuby13cmFwIGl0ZW1zLSR7IHNsb3ROYW1lWyAxIF0gfSBqdXN0aWZ5LSR7IHNsb3ROYW1lWyAyIF0gfWBcbiAgICAgICAgICAgICAgICArIChwcm9wc1sgZGlyICsgJ0NvbG9yJyBdICE9PSB2b2lkIDAgPyBgIGJnLSR7IHByb3BzWyBkaXIgKyAnQ29sb3InIF0gfWAgOiAnJylcbiAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgaCgnZGl2JywgeyByZWY6IGVsID0+IHsgZGlyQ29udGVudFJlZnNbIGRpciBdID0gZWwgfSB9LCBzbG90c1sgZGlyIF0oKSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBjb25zdCBub2RlID0gaCgnZGl2Jywge1xuICAgICAgICBrZXk6IGAkeyBkaXJzLmxlbmd0aCA9PT0gMCA/ICdvbmx5LScgOiAnJyB9IGNvbnRlbnRgLFxuICAgICAgICByZWY6IGNvbnRlbnRSZWYsXG4gICAgICAgIGNsYXNzOiAncS1zbGlkZS1pdGVtX19jb250ZW50J1xuICAgICAgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG5cbiAgICAgIGlmIChkaXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb250ZW50LnB1c2gobm9kZSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb250ZW50LnB1c2goXG4gICAgICAgICAgd2l0aERpcmVjdGl2ZXMobm9kZSwgZ2V0Q2FjaGUoJ2RpciMnICsgZGlycy5qb2luKCcnKSwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbW9kaWZpZXJzID0ge1xuICAgICAgICAgICAgICBwcmV2ZW50OiB0cnVlLFxuICAgICAgICAgICAgICBzdG9wOiB0cnVlLFxuICAgICAgICAgICAgICBtb3VzZTogdHJ1ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkaXJzLmZvckVhY2goZGlyID0+IHtcbiAgICAgICAgICAgICAgbW9kaWZpZXJzWyBkaXIgXSA9IHRydWVcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHJldHVybiBbIFtcbiAgICAgICAgICAgICAgVG91Y2hQYW4sXG4gICAgICAgICAgICAgIG9uUGFuLFxuICAgICAgICAgICAgICB2b2lkIDAsXG4gICAgICAgICAgICAgIG1vZGlmaWVyc1xuICAgICAgICAgICAgXSBdXG4gICAgICAgICAgfSkpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoJ2RpdicsIHsgY2xhc3M6IGNsYXNzZXMudmFsdWUgfSwgY29udGVudClcbiAgICB9XG4gIH1cbn0pXG4iXSwibmFtZXMiOlsibm9kZSJdLCJtYXBwaW5ncyI6Ijs7O0FBVUEsTUFBTSxXQUFXO0FBQUEsRUFDZixDQUFFLFFBQVEsVUFBVSxTQUFTLE9BQVM7QUFBQSxFQUN0QyxDQUFFLFNBQVMsVUFBVSxPQUFPLE9BQVM7QUFBQSxFQUNyQyxDQUFFLE9BQU8sU0FBUyxVQUFVLFFBQVU7QUFBQSxFQUN0QyxDQUFFLFVBQVUsT0FBTyxVQUFVLFFBQVU7QUFDekM7QUFFQSxJQUFBLGFBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVB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
