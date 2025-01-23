import { _ as _export_sfc, k as defineComponent, l as defineAsyncComponent, n as resolveComponent, p as openBlock, q as createBlock, t as withCtx, f as createVNode, a7 as normalizeClass, a6 as createTextVNode, Z as toDisplayString, aA as createCommentVNode, u as __vitePreload } from "./index.61ed5618.js";
import { Q as QRouteTab } from "./QRouteTab.3cd4e657.js";
import { Q as QBadge } from "./QBadge.6d32ed43.js";
import { Q as QTabs } from "./QTabs.2f5e29cb.js";
import { Q as QFooter } from "./QFooter.571ac042.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.517727c0.js";
import { u as useCartStore } from "./CartStore.484ff101.js";
import "./QResizeObserver.d08dce3c.js";
import "./rtl.f3ed811c.js";
import "./QScrollObserver.a3e1ec14.js";
const _sfc_main = defineComponent({
  name: "NotopnavLayout",
  data() {
    return {
      tab: "home"
    };
  },
  components: {
    QuickTrack: defineAsyncComponent(() => __vitePreload(() => import("./QuickTrack.d945092e.js"), true ? ["assets/QuickTrack.d945092e.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QBadge.6d32ed43.js","assets/QLinearProgress.95e9a35e.js"] : void 0))
  },
  setup() {
    const CartStore = useCartStore();
    return { CartStore };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_view = resolveComponent("router-view");
  const _component_QuickTrack = resolveComponent("QuickTrack");
  return openBlock(), createBlock(QLayout, { view: "lHh Lpr lFf" }, {
    default: withCtx(() => [
      createVNode(QFooter, {
        bordered: "",
        class: "bg-white text-dark"
      }, {
        default: withCtx(() => [
          createVNode(QTabs, {
            modelValue: _ctx.tab,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.tab = $event),
            dense: "",
            "indicator-color": "transparent",
            "active-color": "secondary",
            class: normalizeClass({
              "bg-black text-white": _ctx.$q.dark.mode,
              "text-dark": !_ctx.$q.dark.mode
            })
          }, {
            default: withCtx(() => [
              createVNode(QRouteTab, {
                name: "home",
                icon: "las la-home",
                label: _ctx.$t("Home"),
                "no-caps": "",
                to: "/home"
              }, null, 8, ["label"]),
              createVNode(QRouteTab, {
                name: "browse",
                icon: "search",
                label: _ctx.$t("Search"),
                "no-caps": "",
                to: "/search"
              }, null, 8, ["label"]),
              createVNode(QRouteTab, {
                name: "cart",
                icon: "las la-shopping-bag",
                label: _ctx.$t("Cart"),
                "no-caps": "",
                to: "/cart"
              }, {
                default: withCtx(() => [
                  _ctx.CartStore.hasItem ? (openBlock(), createBlock(QBadge, {
                    key: 0,
                    color: "yellow-9",
                    floating: "",
                    rounded: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.CartStore.items_count), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["label"]),
              createVNode(QRouteTab, {
                name: "account",
                icon: "las la-user-alt",
                label: _ctx.$t("Account"),
                "no-caps": "",
                to: "/account-menu"
              }, null, 8, ["label"])
            ]),
            _: 1
          }, 8, ["modelValue", "class"])
        ]),
        _: 1
      }),
      createVNode(QPageContainer, null, {
        default: withCtx(() => [
          createVNode(_component_router_view)
        ]),
        _: 1
      }),
      createVNode(_component_QuickTrack, { ref: "quick_track" }, null, 512)
    ]),
    _: 1
  });
}
var NotopnavLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "NotopnavLayout.vue"]]);
export { NotopnavLayout as default };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQW1FQSxNQUFLLFlBQWEsZ0JBQWE7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQ0wsV0FBTztBQUFBLE1BQ0wsS0FBSztBQUFBO0VBRVI7QUFBQSxFQUNELFlBQVk7QUFBQSxJQUNWLFlBQVkscUJBQXFCLDBCQUFNLE9BQU8sNkJBQTJCLDBLQUFDO0FBQUEsRUFDM0U7QUFBQSxFQUNELFFBQVE7QUFDTixVQUFNLFlBQVk7QUFDbEIsV0FBTyxFQUFFO0VBQ1Y7QUFDSCxDQUFDOzs7O3NCQWhGQ0EsWUEyRFcsa0NBM0RpQjtBQUFBLHFCQUMxQixNQW1EVztBQUFBLE1BbkRYQyxZQW1EVztBQUFBLFFBbkREO0FBQUEsUUFBUyxPQUFNO0FBQUE7eUJBQ3ZCLE1BaURTO0FBQUEsVUFqRFRBLFlBaURTO0FBQUEsd0JBaERFLEtBQUc7QUFBQSx5RUFBSCxLQUFHO0FBQUEsWUFDWjtBQUFBLFlBQ0EsbUJBQWdCO0FBQUEsWUFDaEIsZ0JBQWE7QUFBQSxZQUNaLE9BQUtDO0FBQUEscUNBQXFDLEtBQUUsR0FBQyxLQUFLO0FBQUEsNEJBQThCLEtBQUUsR0FBQyxLQUFLO0FBQUE7OzZCQUt6RixNQU1FO0FBQUEsY0FORkQsWUFNRTtBQUFBLGdCQUxBLE1BQUs7QUFBQSxnQkFDTCxNQUFLO0FBQUEsZ0JBQ0osT0FBTyxLQUFFO0FBQUEsZ0JBQ1Y7QUFBQSxnQkFDQSxJQUFHO0FBQUE7Y0FFTEEsWUFNRTtBQUFBLGdCQUxBLE1BQUs7QUFBQSxnQkFDTCxNQUFLO0FBQUEsZ0JBQ0osT0FBTyxLQUFFO0FBQUEsZ0JBQ1Y7QUFBQSxnQkFDQSxJQUFHO0FBQUE7Y0FFTEEsWUFVYztBQUFBLGdCQVRaLE1BQUs7QUFBQSxnQkFDTCxNQUFLO0FBQUEsZ0JBQ0osT0FBTyxLQUFFO0FBQUEsZ0JBQ1Y7QUFBQSxnQkFDQSxJQUFHO0FBQUE7aUNBRUgsTUFFVTtBQUFBLGtCQUZLLGVBQVUsd0JBQXpCRCxZQUVVO0FBQUE7b0JBRndCLE9BQU07QUFBQSxvQkFBVztBQUFBLG9CQUFTO0FBQUE7cUNBQzFELE1BQTJCO0FBQUEsc0JBQXhCRywrQ0FBVSxXQUFXO0FBQUE7Ozs7OztjQVU1QkYsWUFNRTtBQUFBLGdCQUxBLE1BQUs7QUFBQSxnQkFDTCxNQUFLO0FBQUEsZ0JBQ0osT0FBTyxLQUFFO0FBQUEsZ0JBQ1Y7QUFBQSxnQkFDQSxJQUFHO0FBQUE7Ozs7Ozs7TUFLVEEsWUFFbUI7QUFBQSx5QkFEakIsTUFBZTtBQUFBLFVBQWZBLFlBQWU7QUFBQTs7O01BR2pCQSxZQUFnQyx5QkFBcEIsS0FBSSxjQUFhO0FBQUEiLCJuYW1lcyI6WyJfY3JlYXRlQmxvY2siLCJfY3JlYXRlVk5vZGUiLCJfbm9ybWFsaXplQ2xhc3MiLCJfY3JlYXRlVGV4dFZOb2RlIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xheW91dHMvTm90b3BuYXZMYXlvdXQudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHEtbGF5b3V0IHZpZXc9XCJsSGggTHByIGxGZlwiPlxuICAgIDxxLWZvb3RlciBib3JkZXJlZCBjbGFzcz1cImJnLXdoaXRlIHRleHQtZGFya1wiPlxuICAgICAgPHEtdGFic1xuICAgICAgICB2LW1vZGVsPVwidGFiXCJcbiAgICAgICAgZGVuc2VcbiAgICAgICAgaW5kaWNhdG9yLWNvbG9yPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICBhY3RpdmUtY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgJ2JnLWJsYWNrIHRleHQtd2hpdGUnOiAkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgJ3RleHQtZGFyayc6ICEkcS5kYXJrLm1vZGUsXG4gICAgICAgIH1cIlxuICAgICAgPlxuICAgICAgICA8cS1yb3V0ZS10YWJcbiAgICAgICAgICBuYW1lPVwiaG9tZVwiXG4gICAgICAgICAgaWNvbj1cImxhcyBsYS1ob21lXCJcbiAgICAgICAgICA6bGFiZWw9XCIkdCgnSG9tZScpXCJcbiAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgdG89XCIvaG9tZVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxxLXJvdXRlLXRhYlxuICAgICAgICAgIG5hbWU9XCJicm93c2VcIlxuICAgICAgICAgIGljb249XCJzZWFyY2hcIlxuICAgICAgICAgIDpsYWJlbD1cIiR0KCdTZWFyY2gnKVwiXG4gICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgIHRvPVwiL3NlYXJjaFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxxLXJvdXRlLXRhYlxuICAgICAgICAgIG5hbWU9XCJjYXJ0XCJcbiAgICAgICAgICBpY29uPVwibGFzIGxhLXNob3BwaW5nLWJhZ1wiXG4gICAgICAgICAgOmxhYmVsPVwiJHQoJ0NhcnQnKVwiXG4gICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgIHRvPVwiL2NhcnRcIlxuICAgICAgICA+XG4gICAgICAgICAgPHEtYmFkZ2Ugdi1pZj1cIkNhcnRTdG9yZS5oYXNJdGVtXCIgY29sb3I9XCJ5ZWxsb3ctOVwiIGZsb2F0aW5nIHJvdW5kZWQ+XG4gICAgICAgICAgICB7eyBDYXJ0U3RvcmUuaXRlbXNfY291bnQgfX1cbiAgICAgICAgICA8L3EtYmFkZ2U+XG4gICAgICAgIDwvcS1yb3V0ZS10YWI+XG4gICAgICAgIDwhLS0gPHEtcm91dGUtdGFiXG4gICAgICAgICAgbmFtZT1cIm9yZGVyc1wiXG4gICAgICAgICAgaWNvbj1cImxhcyBsYS1maWxlLWFsdFwiXG4gICAgICAgICAgbGFiZWw9XCJPcmRlcnNcIlxuICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICB0bz1cIi9vcmRlcnNcIlxuICAgICAgICAvPiAtLT5cbiAgICAgICAgPHEtcm91dGUtdGFiXG4gICAgICAgICAgbmFtZT1cImFjY291bnRcIlxuICAgICAgICAgIGljb249XCJsYXMgbGEtdXNlci1hbHRcIlxuICAgICAgICAgIDpsYWJlbD1cIiR0KCdBY2NvdW50JylcIlxuICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICB0bz1cIi9hY2NvdW50LW1lbnVcIlxuICAgICAgICAvPlxuICAgICAgPC9xLXRhYnM+XG4gICAgPC9xLWZvb3Rlcj5cblxuICAgIDxxLXBhZ2UtY29udGFpbmVyPlxuICAgICAgPHJvdXRlci12aWV3IC8+XG4gICAgPC9xLXBhZ2UtY29udGFpbmVyPlxuXG4gICAgPFF1aWNrVHJhY2sgcmVmPVwicXVpY2tfdHJhY2tcIiAvPlxuICA8L3EtbGF5b3V0PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgZGVmaW5lQXN5bmNDb21wb25lbnQgfSBmcm9tIFwidnVlXCI7XG5pbXBvcnQgeyB1c2VDYXJ0U3RvcmUgfSBmcm9tIFwic3RvcmVzL0NhcnRTdG9yZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiBcIk5vdG9wbmF2TGF5b3V0XCIsXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRhYjogXCJob21lXCIsXG4gICAgfTtcbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIFF1aWNrVHJhY2s6IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+IGltcG9ydChcImNvbXBvbmVudHMvUXVpY2tUcmFjay52dWVcIikpLFxuICB9LFxuICBzZXR1cCgpIHtcbiAgICBjb25zdCBDYXJ0U3RvcmUgPSB1c2VDYXJ0U3RvcmUoKTtcbiAgICByZXR1cm4geyBDYXJ0U3RvcmUgfTtcbiAgfSxcbn0pO1xuPC9zY3JpcHQ+XG4iXSwiZmlsZSI6ImFzc2V0cy9Ob3RvcG5hdkxheW91dC45ZDAxZTU4Ni5qcyJ9
