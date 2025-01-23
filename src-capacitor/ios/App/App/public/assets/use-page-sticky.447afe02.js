import { i as inject, x as emptyRenderFn, c as computed, g as getCurrentInstance, B as layoutKey, z as hSlot, h } from "./index.61ed5618.js";
const usePageStickyProps = {
  position: {
    type: String,
    default: "bottom-right",
    validator: (v) => [
      "top-right",
      "top-left",
      "bottom-right",
      "bottom-left",
      "top",
      "right",
      "bottom",
      "left"
    ].includes(v)
  },
  offset: {
    type: Array,
    validator: (v) => v.length === 2
  },
  expand: Boolean
};
function usePageSticky() {
  const { props, proxy: { $q } } = getCurrentInstance();
  const $layout = inject(layoutKey, emptyRenderFn);
  if ($layout === emptyRenderFn) {
    console.error("QPageSticky needs to be child of QLayout");
    return emptyRenderFn;
  }
  const attach = computed(() => {
    const pos = props.position;
    return {
      top: pos.indexOf("top") !== -1,
      right: pos.indexOf("right") !== -1,
      bottom: pos.indexOf("bottom") !== -1,
      left: pos.indexOf("left") !== -1,
      vertical: pos === "top" || pos === "bottom",
      horizontal: pos === "left" || pos === "right"
    };
  });
  const top = computed(() => $layout.header.offset);
  const right = computed(() => $layout.right.offset);
  const bottom = computed(() => $layout.footer.offset);
  const left = computed(() => $layout.left.offset);
  const style = computed(() => {
    let posX = 0, posY = 0;
    const side = attach.value;
    const dir = $q.lang.rtl === true ? -1 : 1;
    if (side.top === true && top.value !== 0) {
      posY = `${top.value}px`;
    } else if (side.bottom === true && bottom.value !== 0) {
      posY = `${-bottom.value}px`;
    }
    if (side.left === true && left.value !== 0) {
      posX = `${dir * left.value}px`;
    } else if (side.right === true && right.value !== 0) {
      posX = `${-dir * right.value}px`;
    }
    const css = { transform: `translate(${posX}, ${posY})` };
    if (props.offset) {
      css.margin = `${props.offset[1]}px ${props.offset[0]}px`;
    }
    if (side.vertical === true) {
      if (left.value !== 0) {
        css[$q.lang.rtl === true ? "right" : "left"] = `${left.value}px`;
      }
      if (right.value !== 0) {
        css[$q.lang.rtl === true ? "left" : "right"] = `${right.value}px`;
      }
    } else if (side.horizontal === true) {
      if (top.value !== 0) {
        css.top = `${top.value}px`;
      }
      if (bottom.value !== 0) {
        css.bottom = `${bottom.value}px`;
      }
    }
    return css;
  });
  const classes = computed(
    () => `q-page-sticky row flex-center fixed-${props.position} q-page-sticky--${props.expand === true ? "expand" : "shrink"}`
  );
  function getStickyContent(slots) {
    const content = hSlot(slots.default);
    return h(
      "div",
      {
        class: classes.value,
        style: style.value
      },
      props.expand === true ? content : [h("div", content)]
    );
  }
  return {
    $layout,
    getStickyContent
  };
}
export { usePageSticky as a, usePageStickyProps as u };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLXBhZ2Utc3RpY2t5LjQ0N2FmZTAyLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3BhZ2Utc3RpY2t5L3VzZS1wYWdlLXN0aWNreS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCBjb21wdXRlZCwgaW5qZWN0LCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5yZW5kZXIvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgbGF5b3V0S2V5LCBlbXB0eVJlbmRlckZuIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5zeW1ib2xzL3N5bWJvbHMuanMnXG5cbmV4cG9ydCBjb25zdCB1c2VQYWdlU3RpY2t5UHJvcHMgPSB7XG4gIHBvc2l0aW9uOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICdib3R0b20tcmlnaHQnLFxuICAgIHZhbGlkYXRvcjogdiA9PiBbXG4gICAgICAndG9wLXJpZ2h0JywgJ3RvcC1sZWZ0JyxcbiAgICAgICdib3R0b20tcmlnaHQnLCAnYm90dG9tLWxlZnQnLFxuICAgICAgJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCdcbiAgICBdLmluY2x1ZGVzKHYpXG4gIH0sXG4gIG9mZnNldDoge1xuICAgIHR5cGU6IEFycmF5LFxuICAgIHZhbGlkYXRvcjogdiA9PiB2Lmxlbmd0aCA9PT0gMlxuICB9LFxuICBleHBhbmQ6IEJvb2xlYW5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICBjb25zdCB7IHByb3BzLCBwcm94eTogeyAkcSB9IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gIGNvbnN0ICRsYXlvdXQgPSBpbmplY3QobGF5b3V0S2V5LCBlbXB0eVJlbmRlckZuKVxuICBpZiAoJGxheW91dCA9PT0gZW1wdHlSZW5kZXJGbikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1FQYWdlU3RpY2t5IG5lZWRzIHRvIGJlIGNoaWxkIG9mIFFMYXlvdXQnKVxuICAgIHJldHVybiBlbXB0eVJlbmRlckZuXG4gIH1cblxuICBjb25zdCBhdHRhY2ggPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgcG9zID0gcHJvcHMucG9zaXRpb25cblxuICAgIHJldHVybiB7XG4gICAgICB0b3A6IHBvcy5pbmRleE9mKCd0b3AnKSAhPT0gLTEsXG4gICAgICByaWdodDogcG9zLmluZGV4T2YoJ3JpZ2h0JykgIT09IC0xLFxuICAgICAgYm90dG9tOiBwb3MuaW5kZXhPZignYm90dG9tJykgIT09IC0xLFxuICAgICAgbGVmdDogcG9zLmluZGV4T2YoJ2xlZnQnKSAhPT0gLTEsXG4gICAgICB2ZXJ0aWNhbDogcG9zID09PSAndG9wJyB8fCBwb3MgPT09ICdib3R0b20nLFxuICAgICAgaG9yaXpvbnRhbDogcG9zID09PSAnbGVmdCcgfHwgcG9zID09PSAncmlnaHQnXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IHRvcCA9IGNvbXB1dGVkKCgpID0+ICRsYXlvdXQuaGVhZGVyLm9mZnNldClcbiAgY29uc3QgcmlnaHQgPSBjb21wdXRlZCgoKSA9PiAkbGF5b3V0LnJpZ2h0Lm9mZnNldClcbiAgY29uc3QgYm90dG9tID0gY29tcHV0ZWQoKCkgPT4gJGxheW91dC5mb290ZXIub2Zmc2V0KVxuICBjb25zdCBsZWZ0ID0gY29tcHV0ZWQoKCkgPT4gJGxheW91dC5sZWZ0Lm9mZnNldClcblxuICBjb25zdCBzdHlsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBsZXQgcG9zWCA9IDAsIHBvc1kgPSAwXG5cbiAgICBjb25zdCBzaWRlID0gYXR0YWNoLnZhbHVlXG4gICAgY29uc3QgZGlyID0gJHEubGFuZy5ydGwgPT09IHRydWUgPyAtMSA6IDFcblxuICAgIGlmIChzaWRlLnRvcCA9PT0gdHJ1ZSAmJiB0b3AudmFsdWUgIT09IDApIHtcbiAgICAgIHBvc1kgPSBgJHsgdG9wLnZhbHVlIH1weGBcbiAgICB9XG4gICAgZWxzZSBpZiAoc2lkZS5ib3R0b20gPT09IHRydWUgJiYgYm90dG9tLnZhbHVlICE9PSAwKSB7XG4gICAgICBwb3NZID0gYCR7IC1ib3R0b20udmFsdWUgfXB4YFxuICAgIH1cblxuICAgIGlmIChzaWRlLmxlZnQgPT09IHRydWUgJiYgbGVmdC52YWx1ZSAhPT0gMCkge1xuICAgICAgcG9zWCA9IGAkeyBkaXIgKiBsZWZ0LnZhbHVlIH1weGBcbiAgICB9XG4gICAgZWxzZSBpZiAoc2lkZS5yaWdodCA9PT0gdHJ1ZSAmJiByaWdodC52YWx1ZSAhPT0gMCkge1xuICAgICAgcG9zWCA9IGAkeyAtZGlyICogcmlnaHQudmFsdWUgfXB4YFxuICAgIH1cblxuICAgIGNvbnN0IGNzcyA9IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7IHBvc1ggfSwgJHsgcG9zWSB9KWAgfVxuXG4gICAgaWYgKHByb3BzLm9mZnNldCkge1xuICAgICAgY3NzLm1hcmdpbiA9IGAkeyBwcm9wcy5vZmZzZXRbIDEgXSB9cHggJHsgcHJvcHMub2Zmc2V0WyAwIF0gfXB4YFxuICAgIH1cblxuICAgIGlmIChzaWRlLnZlcnRpY2FsID09PSB0cnVlKSB7XG4gICAgICBpZiAobGVmdC52YWx1ZSAhPT0gMCkge1xuICAgICAgICBjc3NbICRxLmxhbmcucnRsID09PSB0cnVlID8gJ3JpZ2h0JyA6ICdsZWZ0JyBdID0gYCR7IGxlZnQudmFsdWUgfXB4YFxuICAgICAgfVxuICAgICAgaWYgKHJpZ2h0LnZhbHVlICE9PSAwKSB7XG4gICAgICAgIGNzc1sgJHEubGFuZy5ydGwgPT09IHRydWUgPyAnbGVmdCcgOiAncmlnaHQnIF0gPSBgJHsgcmlnaHQudmFsdWUgfXB4YFxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChzaWRlLmhvcml6b250YWwgPT09IHRydWUpIHtcbiAgICAgIGlmICh0b3AudmFsdWUgIT09IDApIHtcbiAgICAgICAgY3NzLnRvcCA9IGAkeyB0b3AudmFsdWUgfXB4YFxuICAgICAgfVxuICAgICAgaWYgKGJvdHRvbS52YWx1ZSAhPT0gMCkge1xuICAgICAgICBjc3MuYm90dG9tID0gYCR7IGJvdHRvbS52YWx1ZSB9cHhgXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNzc1xuICB9KVxuXG4gIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgIGBxLXBhZ2Utc3RpY2t5IHJvdyBmbGV4LWNlbnRlciBmaXhlZC0keyBwcm9wcy5wb3NpdGlvbiB9YFxuICAgICsgYCBxLXBhZ2Utc3RpY2t5LS0keyBwcm9wcy5leHBhbmQgPT09IHRydWUgPyAnZXhwYW5kJyA6ICdzaHJpbmsnIH1gXG4gIClcblxuICBmdW5jdGlvbiBnZXRTdGlja3lDb250ZW50IChzbG90cykge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBoU2xvdChzbG90cy5kZWZhdWx0KVxuXG4gICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgc3R5bGU6IHN0eWxlLnZhbHVlXG4gICAgfSxcbiAgICBwcm9wcy5leHBhbmQgPT09IHRydWVcbiAgICAgID8gY29udGVudFxuICAgICAgOiBbIGgoJ2RpdicsIGNvbnRlbnQpIF1cbiAgICApXG4gIH1cblxuICByZXR1cm4ge1xuICAgICRsYXlvdXQsXG4gICAgZ2V0U3RpY2t5Q29udGVudFxuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUtZLE1BQUMscUJBQXFCO0FBQUEsRUFDaEMsVUFBVTtBQUFBLElBQ1IsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsV0FBVyxPQUFLO0FBQUEsTUFDZDtBQUFBLE1BQWE7QUFBQSxNQUNiO0FBQUEsTUFBZ0I7QUFBQSxNQUNoQjtBQUFBLE1BQU87QUFBQSxNQUFTO0FBQUEsTUFBVTtBQUFBLElBQ2hDLEVBQU0sU0FBUyxDQUFDO0FBQUEsRUFDYjtBQUFBLEVBQ0QsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sV0FBVyxPQUFLLEVBQUUs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
