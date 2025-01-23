import { v as createComponent, r as ref, c as computed, w as watch, K as onBeforeUnmount, h, a0 as Transition, g as getCurrentInstance, M as getScrollTarget, aL as setVerticalScrollPosition } from "./index.61ed5618.js";
import { u as usePageStickyProps, a as usePageSticky } from "./use-page-sticky.447afe02.js";
var QPageScroller = createComponent({
  name: "QPageScroller",
  props: {
    ...usePageStickyProps,
    scrollOffset: {
      type: Number,
      default: 1e3
    },
    reverse: Boolean,
    duration: {
      type: Number,
      default: 300
    },
    offset: {
      ...usePageStickyProps.offset,
      default: () => [18, 18]
    }
  },
  emits: ["click"],
  setup(props, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const { $layout, getStickyContent } = usePageSticky();
    const rootRef = ref(null);
    let heightWatcher;
    const scrollHeight = computed(() => $layout.height.value - ($layout.isContainer.value === true ? $layout.containerHeight.value : $q.screen.height));
    function isVisible() {
      return props.reverse === true ? scrollHeight.value - $layout.scroll.value.position > props.scrollOffset : $layout.scroll.value.position > props.scrollOffset;
    }
    const showing = ref(isVisible());
    function updateVisibility() {
      const newVal = isVisible();
      if (showing.value !== newVal) {
        showing.value = newVal;
      }
    }
    function updateReverse() {
      if (props.reverse === true) {
        if (heightWatcher === void 0) {
          heightWatcher = watch(scrollHeight, updateVisibility);
        }
      } else {
        cleanup();
      }
    }
    watch($layout.scroll, updateVisibility);
    watch(() => props.reverse, updateReverse);
    function cleanup() {
      if (heightWatcher !== void 0) {
        heightWatcher();
        heightWatcher = void 0;
      }
    }
    function onClick(e) {
      const target = getScrollTarget(
        $layout.isContainer.value === true ? rootRef.value : $layout.rootRef.value
      );
      setVerticalScrollPosition(
        target,
        props.reverse === true ? $layout.height.value : 0,
        props.duration
      );
      emit("click", e);
    }
    function getContent() {
      return showing.value === true ? h("div", {
        ref: rootRef,
        class: "q-page-scroller",
        onClick
      }, getStickyContent(slots)) : null;
    }
    updateReverse();
    onBeforeUnmount(cleanup);
    return () => h(
      Transition,
      { name: "q-transition--fade" },
      getContent
    );
  }
});
export { QPageScroller as Q };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUVBhZ2VTY3JvbGxlci4yYzcwOWM5MS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9wYWdlLXNjcm9sbGVyL1FQYWdlU2Nyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIG9uQmVmb3JlVW5tb3VudCwgZ2V0Q3VycmVudEluc3RhbmNlLCBUcmFuc2l0aW9uIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdXNlUGFnZVN0aWNreSwgeyB1c2VQYWdlU3RpY2t5UHJvcHMgfSBmcm9tICcuLi9wYWdlLXN0aWNreS91c2UtcGFnZS1zdGlja3kuanMnXG5pbXBvcnQgeyBnZXRTY3JvbGxUYXJnZXQsIHNldFZlcnRpY2FsU2Nyb2xsUG9zaXRpb24gfSBmcm9tICcuLi8uLi91dGlscy9zY3JvbGwvc2Nyb2xsLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmNyZWF0ZS9jcmVhdGUuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRUGFnZVNjcm9sbGVyJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZVBhZ2VTdGlja3lQcm9wcyxcblxuICAgIHNjcm9sbE9mZnNldDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMTAwMFxuICAgIH0sXG5cbiAgICByZXZlcnNlOiBCb29sZWFuLFxuXG4gICAgZHVyYXRpb246IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDMwMFxuICAgIH0sXG5cbiAgICBvZmZzZXQ6IHtcbiAgICAgIC4uLnVzZVBhZ2VTdGlja3lQcm9wcy5vZmZzZXQsXG4gICAgICBkZWZhdWx0OiAoKSA9PiBbIDE4LCAxOCBdXG4gICAgfVxuICB9LFxuXG4gIGVtaXRzOiBbICdjbGljaycgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGNvbnN0IHsgcHJveHk6IHsgJHEgfSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCB7ICRsYXlvdXQsIGdldFN0aWNreUNvbnRlbnQgfSA9IHVzZVBhZ2VTdGlja3koKVxuICAgIGNvbnN0IHJvb3RSZWYgPSByZWYobnVsbClcblxuICAgIGxldCBoZWlnaHRXYXRjaGVyXG5cbiAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSBjb21wdXRlZCgoKSA9PiAkbGF5b3V0LmhlaWdodC52YWx1ZSAtIChcbiAgICAgICRsYXlvdXQuaXNDb250YWluZXIudmFsdWUgPT09IHRydWVcbiAgICAgICAgPyAkbGF5b3V0LmNvbnRhaW5lckhlaWdodC52YWx1ZVxuICAgICAgICA6ICRxLnNjcmVlbi5oZWlnaHRcbiAgICApKVxuXG4gICAgZnVuY3Rpb24gaXNWaXNpYmxlICgpIHtcbiAgICAgIHJldHVybiBwcm9wcy5yZXZlcnNlID09PSB0cnVlXG4gICAgICAgID8gc2Nyb2xsSGVpZ2h0LnZhbHVlIC0gJGxheW91dC5zY3JvbGwudmFsdWUucG9zaXRpb24gPiBwcm9wcy5zY3JvbGxPZmZzZXRcbiAgICAgICAgOiAkbGF5b3V0LnNjcm9sbC52YWx1ZS5wb3NpdGlvbiA+IHByb3BzLnNjcm9sbE9mZnNldFxuICAgIH1cblxuICAgIGNvbnN0IHNob3dpbmcgPSByZWYoaXNWaXNpYmxlKCkpXG5cbiAgICBmdW5jdGlvbiB1cGRhdGVWaXNpYmlsaXR5ICgpIHtcbiAgICAgIGNvbnN0IG5ld1ZhbCA9IGlzVmlzaWJsZSgpXG4gICAgICBpZiAoc2hvd2luZy52YWx1ZSAhPT0gbmV3VmFsKSB7XG4gICAgICAgIHNob3dpbmcudmFsdWUgPSBuZXdWYWxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVSZXZlcnNlICgpIHtcbiAgICAgIGlmIChwcm9wcy5yZXZlcnNlID09PSB0cnVlKSB7XG4gICAgICAgIGlmIChoZWlnaHRXYXRjaGVyID09PSB2b2lkIDApIHtcbiAgICAgICAgICBoZWlnaHRXYXRjaGVyID0gd2F0Y2goc2Nyb2xsSGVpZ2h0LCB1cGRhdGVWaXNpYmlsaXR5KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY2xlYW51cCgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgd2F0Y2goJGxheW91dC5zY3JvbGwsIHVwZGF0ZVZpc2liaWxpdHkpXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMucmV2ZXJzZSwgdXBkYXRlUmV2ZXJzZSlcblxuICAgIGZ1bmN0aW9uIGNsZWFudXAgKCkge1xuICAgICAgaWYgKGhlaWdodFdhdGNoZXIgIT09IHZvaWQgMCkge1xuICAgICAgICBoZWlnaHRXYXRjaGVyKClcbiAgICAgICAgaGVpZ2h0V2F0Y2hlciA9IHZvaWQgMFxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uQ2xpY2sgKGUpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGdldFNjcm9sbFRhcmdldChcbiAgICAgICAgJGxheW91dC5pc0NvbnRhaW5lci52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICAgID8gcm9vdFJlZi52YWx1ZVxuICAgICAgICAgIDogJGxheW91dC5yb290UmVmLnZhbHVlXG4gICAgICApXG5cbiAgICAgIHNldFZlcnRpY2FsU2Nyb2xsUG9zaXRpb24oXG4gICAgICAgIHRhcmdldCxcbiAgICAgICAgcHJvcHMucmV2ZXJzZSA9PT0gdHJ1ZSA/ICRsYXlvdXQuaGVpZ2h0LnZhbHVlIDogMCxcbiAgICAgICAgcHJvcHMuZHVyYXRpb25cbiAgICAgIClcblxuICAgICAgZW1pdCgnY2xpY2snLCBlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldENvbnRlbnQgKCkge1xuICAgICAgcmV0dXJuIHNob3dpbmcudmFsdWUgPT09IHRydWVcbiAgICAgICAgPyBoKCdkaXYnLCB7XG4gICAgICAgICAgcmVmOiByb290UmVmLFxuICAgICAgICAgIGNsYXNzOiAncS1wYWdlLXNjcm9sbGVyJyxcbiAgICAgICAgICBvbkNsaWNrXG4gICAgICAgIH0sIGdldFN0aWNreUNvbnRlbnQoc2xvdHMpKVxuICAgICAgICA6IG51bGxcbiAgICB9XG5cbiAgICB1cGRhdGVSZXZlcnNlKClcblxuICAgIG9uQmVmb3JlVW5tb3VudChjbGVhbnVwKVxuXG4gICAgcmV0dXJuICgpID0+IGgoXG4gICAgICBUcmFuc2l0aW9uLFxuICAgICAgeyBuYW1lOiAncS10cmFuc2l0aW9uLS1mYWRlJyB9LFxuICAgICAgZ2V0Q29udGVudFxuICAgIClcbiAgfVxufSlcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU9BLElBQUEsZ0JBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBRU4sT0FBTztBQUFBLElBQ0wsR0FBRztBQUFBLElBRUgsY0FBYztBQUFBLE1BQ1osTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLElBQ1Y7QUFBQSxJQUVELFNBQVM7QUFBQSxJQUVULFVBQVU7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxJQUNWO0FBQUEsSUFFRCxRQUFRO0FBQUEsTUFDTixHQUFHLG1CQUFtQjtBQUFBLE1BQ3RCLFNBQVMsTUFBTSxDQUFFLElBQUksRUFBSTtBQUFBLElBQzFCO0FBQUEsRUFDRjtBQUFBLEVBRUQsT0FBTyxDQUFFLE9BQVM7QUFBQSxFQUVsQixNQUFPLE9BQU8sRUFBRSxPQUFPLEtBQUksR0FBSTtBQUM3QixVQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUksRUFBQSxJQUFLLG1CQUFvQjtBQUM5QyxVQUFNLEVBQUUsU0FBUyxpQkFBa0IsSUFBRyxjQUFlO0FBQ3JELFVBQU0sVUFBVSxJQUFJLElBQUk7QUFFeEIsUUFBSTtBQUVKLFVBQU0sZUFBZSxTQUFTLE1BQU0sUUFBUSxPQUFPLFNBQ2pELFFBQVEsWUFBWSxVQUFVLE9BQzFCLFFBQVEsZ0JBQWdCLFFBQ3hCLEdBQUcsT0FBTyxPQUNmO0FBRUQsYUFBUyxZQUFhO0FBQ3BCLGFBQU8sTUFBTSxZQUFZLE9BQ3JCLGFBQWEsUUFBUSxRQUFRLE9BQU8sTUFBTSxXQUFXLE1BQU0sZUFDM0QsUUFBUSxPQUFPLE1BQU0sV0FBVyxNQUFNO0FBQUEsSUFDM0M7QUFFRCxVQUFNLFVBQVUsSUFBSSxXQUFXO0FBRS9CLGFBQVMsbUJBQW9CO0FBQzNCLFlBQU0sU0FBUyxVQUFXO0FBQzFCLFVBQUksUUFBUSxVQUFVLFFBQVE7QUFDNUIsZ0JBQVEsUUFBUTtBQUFBLE1BQ2pCO0FBQUEsSUFDRjtBQUVELGFBQVMsZ0JBQWlCO0FBQ3hCLFVBQUksTUFBTSxZQUFZLE1BQU07QUFDMUIsWUFBSSxrQkFBa0IsUUFBUTtBQUM1QiwwQkFBZ0IsTUFBTSxjQUFjLGdCQUFnQjtBQUFBLFFBQ3JEO0FBQUEsTUFDRixPQUNJO0FBQ0gsZ0JBQVM7QUFBQSxNQUNWO0FBQUEsSUFDRjtBQUVELFVBQU0sUUFBUSxRQUFRLGdCQUFnQjtBQUN0QyxVQUFNLE1BQU0sTUFBTSxTQUFTLGFBQWE7QUFFeEMsYUFBUyxVQUFXO0FBQ2xCLFVBQUksa0JBQWtCLFFBQVE7QUFDNUIsc0JBQWU7QUFDZix3QkFBZ0I7QUFBQSxNQUNqQjtBQUFBLElBQ0Y7QUFFRCxhQUFTLFFBQVMsR0FBRztBQUNuQixZQUFNLFNBQVM7QUFBQSxRQUNiLFFBQVEsWUFBWSxVQUFVLE9BQzFCLFFBQVEsUUFDUixRQUFRLFFBQVE7QUFBQSxNQUNyQjtBQUVEO0FBQUEsUUFDRTtBQUFBLFFBQ0EsTUFBTSxZQUFZLE9BQU8sUUFBUSxPQUFPLFFBQVE7QUFBQSxRQUNoRCxNQUFNO0FBQUEsTUFDUDtBQUVELFdBQUssU0FBUyxDQUFDO0FBQUEsSUFDaEI7QUFFRCxhQUFTLGFBQWM7QUFDckIsYUFBTyxRQUFRLFVBQVUsT0FDckIsRUFBRSxPQUFPO0FBQUEsUUFDVCxLQUFLO0FBQUEsUUFDTCxPQUFPO0FBQUEsUUFDUDtBQUFBLE1BQ1YsR0FBVyxpQkFBaUIsS0FBSyxDQUFDLElBQ3hCO0FBQUEsSUFDTDtBQUVELGtCQUFlO0FBRWYsb0JBQWdCLE9BQU87QUFFdkIsV0FBTyxNQUFNO0FBQUEsTUFDWDtBQUFBLE1BQ0EsRUFBRSxNQUFNLHFCQUFzQjtBQUFBLE1BQzlCO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFDSCxDQUFDOzsifQ==
