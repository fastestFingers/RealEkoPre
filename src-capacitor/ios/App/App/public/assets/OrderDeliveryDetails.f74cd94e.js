import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QSpace } from "./QSpace.f164c087.js";
import { v as createComponent, i as inject, x as emptyRenderFn, b_ as timelineKey, c as computed, ag as hUniqueSlot, h, at as QIcon, z as hSlot, ah as useDarkProps, ai as useDark, y as provide, g as getCurrentInstance, _ as _export_sfc, p as openBlock, q as createBlock, t as withCtx, f as createVNode, a7 as normalizeClass, a6 as createTextVNode, Z as toDisplayString, Y as QBtn, U as createBaseVNode, V as createElementBlock, X as renderList, F as Fragment, a8 as QCard, aB as QDialog } from "./index.61ed5618.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
var QTimelineEntry = createComponent({
  name: "QTimelineEntry",
  props: {
    heading: Boolean,
    tag: {
      type: String,
      default: "h3"
    },
    side: {
      type: String,
      default: "right",
      validator: (v) => ["left", "right"].includes(v)
    },
    icon: String,
    avatar: String,
    color: String,
    title: String,
    subtitle: String,
    body: String
  },
  setup(props, { slots }) {
    const $timeline = inject(timelineKey, emptyRenderFn);
    if ($timeline === emptyRenderFn) {
      console.error("QTimelineEntry needs to be child of QTimeline");
      return emptyRenderFn;
    }
    const classes = computed(
      () => `q-timeline__entry q-timeline__entry--${props.side}` + (props.icon !== void 0 || props.avatar !== void 0 ? " q-timeline__entry--icon" : "")
    );
    const dotClass = computed(
      () => `q-timeline__dot text-${props.color || $timeline.color}`
    );
    const reverse = computed(
      () => $timeline.layout === "comfortable" && $timeline.side === "left"
    );
    return () => {
      const child = hUniqueSlot(slots.default, []);
      if (props.body !== void 0) {
        child.unshift(props.body);
      }
      if (props.heading === true) {
        const content2 = [
          h("div"),
          h("div"),
          h(
            props.tag,
            { class: "q-timeline__heading-title" },
            child
          )
        ];
        return h("div", {
          class: "q-timeline__heading"
        }, reverse.value === true ? content2.reverse() : content2);
      }
      let dot;
      if (props.icon !== void 0) {
        dot = [
          h(QIcon, {
            class: "row items-center justify-center",
            name: props.icon
          })
        ];
      } else if (props.avatar !== void 0) {
        dot = [
          h("img", {
            class: "q-timeline__dot-img",
            src: props.avatar
          })
        ];
      }
      const content = [
        h("div", { class: "q-timeline__subtitle" }, [
          h("span", {}, hSlot(slots.subtitle, [props.subtitle]))
        ]),
        h("div", { class: dotClass.value }, dot),
        h("div", { class: "q-timeline__content" }, [
          h("h6", { class: "q-timeline__title" }, hSlot(slots.title, [props.title]))
        ].concat(child))
      ];
      return h("li", {
        class: classes.value
      }, reverse.value === true ? content.reverse() : content);
    };
  }
});
var QTimeline = createComponent({
  name: "QTimeline",
  props: {
    ...useDarkProps,
    color: {
      type: String,
      default: "primary"
    },
    side: {
      type: String,
      default: "right",
      validator: (v) => ["left", "right"].includes(v)
    },
    layout: {
      type: String,
      default: "dense",
      validator: (v) => ["dense", "comfortable", "loose"].includes(v)
    }
  },
  setup(props, { slots }) {
    const vm = getCurrentInstance();
    const isDark = useDark(props, vm.proxy.$q);
    provide(timelineKey, props);
    const classes = computed(
      () => `q-timeline q-timeline--${props.layout} q-timeline--${props.layout}--${props.side}` + (isDark.value === true ? " q-timeline--dark" : "")
    );
    return () => h("ul", { class: classes.value }, hSlot(slots.default));
  }
});
const _sfc_main = {
  name: "OrderDeliveryDetails",
  props: ["data", "order_status", "progress"],
  data() {
    return {
      dialog: false
    };
  },
  setup() {
    return {};
  }
};
const _hoisted_1 = { class: "q-pl-md q-pr-md q-pb-sm" };
const _hoisted_2 = { class: "text-weight-bold" };
const _hoisted_3 = { class: "timeline-modified q-pl-sm" };
const _hoisted_4 = { key: 1 };
const _hoisted_5 = { key: 1 };
const _hoisted_6 = { class: "text-grey" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QDialog, {
    onShow: _ctx.show,
    onHide: _ctx.hide,
    modelValue: $data.dialog,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.dialog = $event),
    position: "bottom"
  }, {
    default: withCtx(() => [
      createVNode(QCard, { class: "rounded-borders-top" }, {
        default: withCtx(() => [
          createVNode(QToolbar, {
            class: "text-primary top-toolbar q-pl-md",
            dense: ""
          }, {
            default: withCtx(() => [
              createVNode(QToolbarTitle, {
                class: normalizeClass(["text-weight-bold", {
                  "text-white": _ctx.$q.dark.mode,
                  "text-dark": !_ctx.$q.dark.mode
                }])
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("Delivery Details")), 1)
                ]),
                _: 1
              }, 8, ["class"]),
              createVNode(QSpace),
              createVNode(QBtn, {
                onClick: _cache[0] || (_cache[0] = ($event) => $data.dialog = false),
                color: "white",
                square: "",
                unelevated: "",
                "text-color": "grey",
                icon: "las la-times",
                dense: "",
                "no-caps": "",
                size: "sm",
                class: "border-grey radius8"
              })
            ]),
            _: 1
          }),
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", {
              class: normalizeClass(["q-pa-sm text-white radius8", {
                "bg-red": $props.progress.order_progress == 0,
                "bg-green": $props.progress.order_progress == 4,
                "bg-blue": $props.progress.order_progress > 0
              }])
            }, [
              createBaseVNode("div", _hoisted_2, toDisplayString($props.progress.order_status), 1),
              createBaseVNode("div", null, toDisplayString($props.progress.order_status_details), 1)
            ], 2),
            createBaseVNode("div", _hoisted_3, [
              createVNode(QTimeline, {
                color: _ctx.$q.dark.mode ? "grey600" : "primary"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList($props.data, (items, index) => {
                    return openBlock(), createElementBlock(Fragment, { key: items }, [
                      index == 0 ? (openBlock(), createBlock(QTimelineEntry, {
                        key: 0,
                        icon: "check"
                      }, {
                        title: withCtx(() => [
                          createTextVNode(toDisplayString(items.created_at), 1)
                        ]),
                        subtitle: withCtx(() => [
                          $props.order_status[items.status] ? (openBlock(), createElementBlock("span", {
                            key: 0,
                            class: normalizeClass({
                              "text-white": _ctx.$q.dark.mode,
                              "text-dark": !_ctx.$q.dark.mode
                            })
                          }, toDisplayString($props.order_status[items.status]), 3)) : (openBlock(), createElementBlock("span", _hoisted_4, " items.status "))
                        ]),
                        default: withCtx(() => [
                          createBaseVNode("div", null, toDisplayString(items.remarks), 1)
                        ]),
                        _: 2
                      }, 1024)) : (openBlock(), createBlock(QTimelineEntry, {
                        key: 1,
                        color: "mygrey"
                      }, {
                        title: withCtx(() => [
                          createTextVNode(toDisplayString(items.created_at), 1)
                        ]),
                        subtitle: withCtx(() => [
                          $props.order_status[items.status] ? (openBlock(), createElementBlock("span", {
                            key: 0,
                            class: normalizeClass({
                              "text-white": _ctx.$q.dark.mode,
                              "text-dark": !_ctx.$q.dark.mode
                            })
                          }, toDisplayString($props.order_status[items.status]), 3)) : (openBlock(), createElementBlock("span", _hoisted_5, " items.status "))
                        ]),
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_6, toDisplayString(items.remarks), 1)
                        ]),
                        _: 2
                      }, 1024))
                    ], 64);
                  }), 128))
                ]),
                _: 1
              }, 8, ["color"])
            ])
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["onShow", "onHide", "modelValue"]);
}
var OrderDeliveryDetails = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "OrderDeliveryDetails.vue"]]);
export { OrderDeliveryDetails as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3JkZXJEZWxpdmVyeURldGFpbHMuZjc0Y2Q5NGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdGltZWxpbmUvUVRpbWVsaW5lRW50cnkuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RpbWVsaW5lL1FUaW1lbGluZS5qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL09yZGVyRGVsaXZlcnlEZXRhaWxzLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCBjb21wdXRlZCwgaW5qZWN0IH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUUljb24gZnJvbSAnLi4vaWNvbi9RSWNvbi5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFNsb3QsIGhVbmlxdWVTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5yZW5kZXIvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgdGltZWxpbmVLZXksIGVtcHR5UmVuZGVyRm4gfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnN5bWJvbHMvc3ltYm9scy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FUaW1lbGluZUVudHJ5JyxcblxuICBwcm9wczoge1xuICAgIGhlYWRpbmc6IEJvb2xlYW4sXG4gICAgdGFnOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnaDMnXG4gICAgfSxcbiAgICBzaWRlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAncmlnaHQnLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IFsgJ2xlZnQnLCAncmlnaHQnIF0uaW5jbHVkZXModilcbiAgICB9LFxuXG4gICAgaWNvbjogU3RyaW5nLFxuICAgIGF2YXRhcjogU3RyaW5nLFxuXG4gICAgY29sb3I6IFN0cmluZyxcblxuICAgIHRpdGxlOiBTdHJpbmcsXG4gICAgc3VidGl0bGU6IFN0cmluZyxcbiAgICBib2R5OiBTdHJpbmdcbiAgfSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMgfSkge1xuICAgIGNvbnN0ICR0aW1lbGluZSA9IGluamVjdCh0aW1lbGluZUtleSwgZW1wdHlSZW5kZXJGbilcbiAgICBpZiAoJHRpbWVsaW5lID09PSBlbXB0eVJlbmRlckZuKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdRVGltZWxpbmVFbnRyeSBuZWVkcyB0byBiZSBjaGlsZCBvZiBRVGltZWxpbmUnKVxuICAgICAgcmV0dXJuIGVtcHR5UmVuZGVyRm5cbiAgICB9XG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIGBxLXRpbWVsaW5lX19lbnRyeSBxLXRpbWVsaW5lX19lbnRyeS0tJHsgcHJvcHMuc2lkZSB9YFxuICAgICAgKyAocHJvcHMuaWNvbiAhPT0gdm9pZCAwIHx8IHByb3BzLmF2YXRhciAhPT0gdm9pZCAwID8gJyBxLXRpbWVsaW5lX19lbnRyeS0taWNvbicgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCBkb3RDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBgcS10aW1lbGluZV9fZG90IHRleHQtJHsgcHJvcHMuY29sb3IgfHwgJHRpbWVsaW5lLmNvbG9yIH1gXG4gICAgKVxuXG4gICAgY29uc3QgcmV2ZXJzZSA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAkdGltZWxpbmUubGF5b3V0ID09PSAnY29tZm9ydGFibGUnICYmICR0aW1lbGluZS5zaWRlID09PSAnbGVmdCdcbiAgICApXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSBoVW5pcXVlU2xvdChzbG90cy5kZWZhdWx0LCBbXSlcblxuICAgICAgaWYgKHByb3BzLmJvZHkgIT09IHZvaWQgMCkge1xuICAgICAgICBjaGlsZC51bnNoaWZ0KHByb3BzLmJvZHkpXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5oZWFkaW5nID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBbXG4gICAgICAgICAgaCgnZGl2JyksXG4gICAgICAgICAgaCgnZGl2JyksXG4gICAgICAgICAgaChcbiAgICAgICAgICAgIHByb3BzLnRhZyxcbiAgICAgICAgICAgIHsgY2xhc3M6ICdxLXRpbWVsaW5lX19oZWFkaW5nLXRpdGxlJyB9LFxuICAgICAgICAgICAgY2hpbGRcbiAgICAgICAgICApXG4gICAgICAgIF1cblxuICAgICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiAncS10aW1lbGluZV9faGVhZGluZydcbiAgICAgICAgfSwgcmV2ZXJzZS52YWx1ZSA9PT0gdHJ1ZSA/IGNvbnRlbnQucmV2ZXJzZSgpIDogY29udGVudClcbiAgICAgIH1cblxuICAgICAgbGV0IGRvdFxuXG4gICAgICBpZiAocHJvcHMuaWNvbiAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGRvdCA9IFtcbiAgICAgICAgICBoKFFJY29uLCB7XG4gICAgICAgICAgICBjbGFzczogJ3JvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXInLFxuICAgICAgICAgICAgbmFtZTogcHJvcHMuaWNvblxuICAgICAgICAgIH0pXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHByb3BzLmF2YXRhciAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGRvdCA9IFtcbiAgICAgICAgICBoKCdpbWcnLCB7XG4gICAgICAgICAgICBjbGFzczogJ3EtdGltZWxpbmVfX2RvdC1pbWcnLFxuICAgICAgICAgICAgc3JjOiBwcm9wcy5hdmF0YXJcbiAgICAgICAgICB9KVxuICAgICAgICBdXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBbXG4gICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRpbWVsaW5lX19zdWJ0aXRsZScgfSwgW1xuICAgICAgICAgIGgoJ3NwYW4nLCB7fSwgaFNsb3Qoc2xvdHMuc3VidGl0bGUsIFsgcHJvcHMuc3VidGl0bGUgXSkpXG4gICAgICAgIF0pLFxuXG4gICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6IGRvdENsYXNzLnZhbHVlIH0sIGRvdCksXG5cbiAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtdGltZWxpbmVfX2NvbnRlbnQnIH0sIFtcbiAgICAgICAgICBoKCdoNicsIHsgY2xhc3M6ICdxLXRpbWVsaW5lX190aXRsZScgfSwgaFNsb3Qoc2xvdHMudGl0bGUsIFsgcHJvcHMudGl0bGUgXSkpXG4gICAgICAgIF0uY29uY2F0KGNoaWxkKSlcbiAgICAgIF1cblxuICAgICAgcmV0dXJuIGgoJ2xpJywge1xuICAgICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZVxuICAgICAgfSwgcmV2ZXJzZS52YWx1ZSA9PT0gdHJ1ZSA/IGNvbnRlbnQucmV2ZXJzZSgpIDogY29udGVudClcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCBjb21wdXRlZCwgcHJvdmlkZSwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlLnVzZS1kYXJrL3VzZS1kYXJrLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmNyZWF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUucmVuZGVyL3JlbmRlci5qcydcbmltcG9ydCB7IHRpbWVsaW5lS2V5IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5zeW1ib2xzL3N5bWJvbHMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRVGltZWxpbmUnLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlRGFya1Byb3BzLFxuXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdwcmltYXJ5J1xuICAgIH0sXG4gICAgc2lkZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3JpZ2h0JyxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiBbICdsZWZ0JywgJ3JpZ2h0JyBdLmluY2x1ZGVzKHYpXG4gICAgfSxcbiAgICBsYXlvdXQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdkZW5zZScsXG4gICAgICB2YWxpZGF0b3I6IHYgPT4gWyAnZGVuc2UnLCAnY29tZm9ydGFibGUnLCAnbG9vc2UnIF0uaW5jbHVkZXModilcbiAgICB9XG4gIH0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzIH0pIHtcbiAgICBjb25zdCB2bSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gICAgY29uc3QgaXNEYXJrID0gdXNlRGFyayhwcm9wcywgdm0ucHJveHkuJHEpXG5cbiAgICBwcm92aWRlKHRpbWVsaW5lS2V5LCBwcm9wcylcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgYHEtdGltZWxpbmUgcS10aW1lbGluZS0tJHsgcHJvcHMubGF5b3V0IH0gcS10aW1lbGluZS0tJHsgcHJvcHMubGF5b3V0IH0tLSR7IHByb3BzLnNpZGUgfWBcbiAgICAgICsgKGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS10aW1lbGluZS0tZGFyaycgOiAnJylcbiAgICApXG5cbiAgICByZXR1cm4gKCkgPT4gaCgndWwnLCB7IGNsYXNzOiBjbGFzc2VzLnZhbHVlIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICB9XG59KVxuIiwiPHRlbXBsYXRlPlxuICA8cS1kaWFsb2cgQHNob3c9XCJzaG93XCIgQGhpZGU9XCJoaWRlXCIgdi1tb2RlbD1cImRpYWxvZ1wiIHBvc2l0aW9uPVwiYm90dG9tXCI+XG4gICAgPHEtY2FyZCBjbGFzcz1cInJvdW5kZWQtYm9yZGVycy10b3BcIj5cbiAgICAgIDxxLXRvb2xiYXIgY2xhc3M9XCJ0ZXh0LXByaW1hcnkgdG9wLXRvb2xiYXIgcS1wbC1tZFwiIGRlbnNlPlxuICAgICAgICA8cS10b29sYmFyLXRpdGxlXG4gICAgICAgICAgY2xhc3M9XCJ0ZXh0LXdlaWdodC1ib2xkXCJcbiAgICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAndGV4dC13aGl0ZSc6ICRxLmRhcmsubW9kZSxcbiAgICAgICAgICAgICd0ZXh0LWRhcmsnOiAhJHEuZGFyay5tb2RlLFxuICAgICAgICAgIH1cIlxuICAgICAgICA+XG4gICAgICAgICAge3sgJHQoXCJEZWxpdmVyeSBEZXRhaWxzXCIpIH19XG4gICAgICAgIDwvcS10b29sYmFyLXRpdGxlPlxuICAgICAgICA8cS1zcGFjZT48L3Etc3BhY2U+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIEBjbGljaz1cImRpYWxvZyA9ICF0cnVlXCJcbiAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICBzcXVhcmVcbiAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgdGV4dC1jb2xvcj1cImdyZXlcIlxuICAgICAgICAgIGljb249XCJsYXMgbGEtdGltZXNcIlxuICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgY2xhc3M9XCJib3JkZXItZ3JleSByYWRpdXM4XCJcbiAgICAgICAgLz5cbiAgICAgIDwvcS10b29sYmFyPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwicS1wbC1tZCBxLXByLW1kIHEtcGItc21cIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwicS1wYS1zbSB0ZXh0LXdoaXRlIHJhZGl1czhcIlxuICAgICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICdiZy1yZWQnOiBwcm9ncmVzcy5vcmRlcl9wcm9ncmVzcyA9PSAwLFxuICAgICAgICAgICAgJ2JnLWdyZWVuJzogcHJvZ3Jlc3Mub3JkZXJfcHJvZ3Jlc3MgPT0gNCxcbiAgICAgICAgICAgICdiZy1ibHVlJzogcHJvZ3Jlc3Mub3JkZXJfcHJvZ3Jlc3MgPiAwLFxuICAgICAgICAgIH1cIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGRcIj57eyBwcm9ncmVzcy5vcmRlcl9zdGF0dXMgfX08L2Rpdj5cbiAgICAgICAgICA8ZGl2Pnt7IHByb2dyZXNzLm9yZGVyX3N0YXR1c19kZXRhaWxzIH19PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZS1tb2RpZmllZCBxLXBsLXNtXCI+XG4gICAgICAgICAgPHEtdGltZWxpbmUgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXk2MDAnIDogJ3ByaW1hcnknXCI+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCIoaXRlbXMsIGluZGV4KSBpbiBkYXRhXCIgOmtleT1cIml0ZW1zXCI+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiaW5kZXggPT0gMFwiPlxuICAgICAgICAgICAgICAgIDxxLXRpbWVsaW5lLWVudHJ5IGljb249XCJjaGVja1wiPlxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDp0aXRsZT4ge3sgaXRlbXMuY3JlYXRlZF9hdCB9fTwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OnN1YnRpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJvcmRlcl9zdGF0dXNbaXRlbXMuc3RhdHVzXVwiXG4gICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtd2hpdGUnOiAkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1kYXJrJzogISRxLmRhcmsubW9kZSxcbiAgICAgICAgICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHt7IG9yZGVyX3N0YXR1c1tpdGVtcy5zdGF0dXNdIH19XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlPiBpdGVtcy5zdGF0dXMgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgIDxkaXY+e3sgaXRlbXMucmVtYXJrcyB9fTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvcS10aW1lbGluZS1lbnRyeT5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgICAgICAgICA8cS10aW1lbGluZS1lbnRyeSBjb2xvcj1cIm15Z3JleVwiPlxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDp0aXRsZT4ge3sgaXRlbXMuY3JlYXRlZF9hdCB9fTwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OnN1YnRpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJvcmRlcl9zdGF0dXNbaXRlbXMuc3RhdHVzXVwiXG4gICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtd2hpdGUnOiAkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1kYXJrJzogISRxLmRhcmsubW9kZSxcbiAgICAgICAgICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHt7IG9yZGVyX3N0YXR1c1tpdGVtcy5zdGF0dXNdIH19XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlPiBpdGVtcy5zdGF0dXMgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWdyZXlcIj57eyBpdGVtcy5yZW1hcmtzIH19PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9xLXRpbWVsaW5lLWVudHJ5PlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L3EtdGltZWxpbmU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9xLWNhcmQ+XG4gIDwvcS1kaWFsb2c+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIk9yZGVyRGVsaXZlcnlEZXRhaWxzXCIsXG4gIHByb3BzOiBbXCJkYXRhXCIsIFwib3JkZXJfc3RhdHVzXCIsIFwicHJvZ3Jlc3NcIl0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRpYWxvZzogZmFsc2UsXG4gICAgfTtcbiAgfSxcbiAgc2V0dXAoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxufTtcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbImNvbnRlbnQiLCJfY3JlYXRlQmxvY2siLCJfY3JlYXRlVk5vZGUiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyIsIl9vcGVuQmxvY2siLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiLCJfY3JlYXRlVGV4dFZOb2RlIiwiX25vcm1hbGl6ZUNsYXNzIl0sIm1hcHBpbmdzIjoiOzs7O0FBUUEsSUFBQSxpQkFBZSxnQkFBZ0I7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFFTixPQUFPO0FBQUEsSUFDTCxTQUFTO0FBQUEsSUFDVCxLQUFLO0FBQUEsTUFD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
