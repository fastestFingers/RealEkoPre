import { _ as _export_sfc, l as defineAsyncComponent, n as resolveComponent, p as openBlock, q as createBlock, t as withCtx, f as createVNode, Y as QBtn, a6 as createTextVNode, Z as toDisplayString, a7 as normalizeClass, U as createBaseVNode, aA as createCommentVNode, u as __vitePreload } from "./index.61ed5618.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QTab } from "./QTab.8fcc65d0.js";
import { Q as QTabs } from "./QTabs.2f5e29cb.js";
import { Q as QTabPanels, a as QTabPanel } from "./QTabPanels.2a6730dc.js";
import { Q as QFooter } from "./QFooter.571ac042.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import { Q as QPullToRefresh } from "./QPullToRefresh.3d10c02d.js";
import { u as useCartStore } from "./CartStore.484ff101.js";
import "./QResizeObserver.d08dce3c.js";
import "./rtl.f3ed811c.js";
import "./use-panel.225d73f4.js";
import "./touch.96e0ae37.js";
import "./selection.50b4cb0c.js";
import "./use-render-cache.b9e045af.js";
import "./format.7f7370d3.js";
const _sfc_main = {
  name: "FavouritesPage",
  data() {
    return {
      tab: "restaurant",
      is_done: void 0
    };
  },
  setup(props) {
    const CartStore = useCartStore();
    return { CartStore };
  },
  components: {
    FavouriteRestuarant: defineAsyncComponent(
      () => __vitePreload(() => import("./FavouriteRestuarant.17740cfc.js"), true ? ["assets/FavouriteRestuarant.17740cfc.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QInnerLoading.abe2afe6.js","assets/QImg.6c27044c.js","assets/QItemLabel.a9365c5b.js","assets/QChip.f183a4f1.js","assets/QList.b69a7e5b.js"] : void 0)
    ),
    FavouriteItems: defineAsyncComponent(
      () => __vitePreload(() => import("./FavouriteItems.785f36d6.js"), true ? ["assets/FavouriteItems.785f36d6.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QInnerLoading.abe2afe6.js","assets/QImg.6c27044c.js","assets/MenuStore.f3a21da3.js"] : void 0)
    )
  },
  created() {
    this.CartStore.getCart(false, this.CartStore.cart_payload);
  },
  methods: {
    refresh(done) {
      this.is_done = done;
    },
    afterAdditems() {
      this.CartStore.getCart(false, this.CartStore.cart_payload);
    }
  }
};
const _hoisted_1 = { class: "row items-center justify-between fit" };
const _hoisted_2 = { class: "text-weight-bold font17" };
const _hoisted_3 = { class: "text-weight-bold font16" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FavouriteRestuarant = resolveComponent("FavouriteRestuarant");
  const _component_FavouriteItems = resolveComponent("FavouriteItems");
  return openBlock(), createBlock(QPullToRefresh, { onRefresh: $options.refresh }, {
    default: withCtx(() => [
      createVNode(QHeader, {
        reveal: "",
        "reveal-offset": "50",
        class: normalizeClass({
          "bg-mydark text-white": _ctx.$q.dark.mode,
          "bg-white text-dark": !_ctx.$q.dark.mode
        })
      }, {
        default: withCtx(() => [
          createVNode(QToolbar, null, {
            default: withCtx(() => [
              createVNode(QBtn, {
                onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$router.back()),
                flat: "",
                round: "",
                dense: "",
                icon: "las la-angle-left",
                class: "q-mr-sm",
                color: _ctx.$q.dark.mode ? "white" : "dark"
              }, null, 8, ["color"]),
              createVNode(QToolbarTitle, { class: "text-weight-bold" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("Favourites")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["class"]),
      createVNode(QPage, { class: "q-pl-md q-pr-md" }, {
        default: withCtx(() => [
          createVNode(QTabs, {
            modelValue: $data.tab,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.tab = $event),
            dense: "",
            "active-color": "primary",
            "indicator-color": "primary",
            align: "left",
            "narrow-indicator": "",
            "no-caps": "",
            class: normalizeClass({
              "text-grey300": _ctx.$q.dark.mode,
              "text-dark": !_ctx.$q.dark.mode
            }),
            breakpoint: 0
          }, {
            default: withCtx(() => [
              createVNode(QTab, {
                name: "restaurant",
                label: _ctx.$t("Restaurants"),
                "no-caps": "",
                "content-class": "text-weight-500 "
              }, null, 8, ["label"]),
              createVNode(QTab, {
                name: "food",
                label: _ctx.$t("Items"),
                "no-caps": "",
                "content-class": "text-weight-500 "
              }, null, 8, ["label"])
            ]),
            _: 1
          }, 8, ["modelValue", "class"]),
          createVNode(QTabPanels, {
            modelValue: $data.tab,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.tab = $event),
            animated: "",
            "transition-next": "fade",
            "transition-prev": "fade",
            class: normalizeClass({
              "bg-mydark ": _ctx.$q.dark.mode,
              "bg-white ": !_ctx.$q.dark.mode
            })
          }, {
            default: withCtx(() => [
              createVNode(QTabPanel, {
                name: "restaurant",
                class: "q-pl-none q-pr-none"
              }, {
                default: withCtx(() => [
                  createVNode(_component_FavouriteRestuarant, {
                    ref: "fav_resto",
                    is_done: $data.is_done
                  }, null, 8, ["is_done"])
                ]),
                _: 1
              }),
              createVNode(QTabPanel, {
                name: "food",
                class: "q-pl-none q-pr-none"
              }, {
                default: withCtx(() => [
                  createVNode(_component_FavouriteItems, {
                    ref: "fav_items",
                    is_done: $data.is_done,
                    onAfterAdditems: $options.afterAdditems
                  }, null, 8, ["is_done", "onAfterAdditems"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue", "class"]),
          $setup.CartStore.items_count > 0 ? (openBlock(), createBlock(QFooter, {
            key: 0,
            reveal: "",
            class: normalizeClass(["q-pl-md q-pr-md q-pb-sm q-pt-sm text-dark", {
              "bg-primary": !$setup.CartStore.cart_reloading,
              "bg-grey-5": $setup.CartStore.cart_reloading
            }])
          }, {
            default: withCtx(() => [
              createVNode(QBtn, {
                to: "/checkout",
                loading: $setup.CartStore.cart_loading,
                disable: !$setup.CartStore.canProceed,
                unelevated: "",
                "text-color": "white",
                "no-caps": "",
                class: "radius10 fit",
                color: {
                  primary: !$setup.CartStore.cart_reloading,
                  "grey-5": $setup.CartStore.cart_reloading
                }
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_1, [
                    createBaseVNode("div", _hoisted_2, toDisplayString(_ctx.$t("Checkout")), 1),
                    createBaseVNode("div", _hoisted_3, toDisplayString($setup.CartStore.cart_subtotal.value), 1)
                  ])
                ]),
                _: 1
              }, 8, ["loading", "disable", "color"])
            ]),
            _: 1
          }, 8, ["class"])) : createCommentVNode("", true)
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["onRefresh"]);
}
var FavouritesPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "FavouritesPage.vue"]]);
export { FavouritesPage as default };
//# sourceMappingURL=data:application/json;base64,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O0FBQUEsZ0JBTkQsTUFBSztBQUFBLGdCQUFPLE9BQU07QUFBQTtpQ0FDN0IsTUFJRTtBQUFBLGtCQUpGQSxZQUlFO0FBQUEsb0JBSEEsS0FBSTtBQUFBLG9CQUNILFNBQVMsTUFBTztBQUFBLG9CQUNoQixpQkFBZ0IsU0FBYTtBQUFBOzs7Ozs7O1VBTTVCLGlCQUFVLGNBQVcsa0JBRDdCRCxZQTZCVztBQUFBO1lBM0JUO0FBQUEsWUFDQSx1QkFBTSw2Q0FBMkM7QUFBQSxjQUNkLGdDQUFVO0FBQUEsY0FBdUMsOEJBQVU7QUFBQTs7NkJBSzlGLE1BbUJRO0FBQUEsY0FuQlJDLFlBbUJRO0FBQUEsZ0JBbEJOLElBQUc7QUFBQSxnQkFDRixTQUFTLE9BQVMsVUFBQztBQUFBLGdCQUNuQixTQUFPLENBQUcsT0FBUyxVQUFDO0FBQUEsZ0JBQ3JCO0FBQUEsZ0JBQ0EsY0FBVztBQUFBLGdCQUNYO0FBQUEsZ0JBQ0EsT0FBTTtBQUFBLGdCQUNMLE9BQUs7QUFBQSxrQkFBMEIsMkJBQVU7QUFBQSxrQkFBc0MsMkJBQVU7QUFBQTs7aUNBSzFGLE1BS007QUFBQSxrQkFMTkUsZ0JBS00sT0FMTixZQUtNO0FBQUEsb0JBSkpBLGdCQUErRCxPQUEvRCxZQUErREMsZ0JBQXZCLEtBQUU7QUFBQSxvQkFDMUNELGdCQUVNLE9BRk4sWUFFTUMsZ0JBREQsaUJBQVUsY0FBYyxLQUFLO0FBQUEiLCJuYW1lcyI6WyJfY3JlYXRlQmxvY2siLCJfY3JlYXRlVk5vZGUiLCJfbm9ybWFsaXplQ2xhc3MiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9BY2NvdW50L0Zhdm91cml0ZXNQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLXB1bGwtdG8tcmVmcmVzaCBAcmVmcmVzaD1cInJlZnJlc2hcIj5cbiAgICA8cS1oZWFkZXJcbiAgICAgIHJldmVhbFxuICAgICAgcmV2ZWFsLW9mZnNldD1cIjUwXCJcbiAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgJ2JnLW15ZGFyayB0ZXh0LXdoaXRlJzogJHEuZGFyay5tb2RlLFxuICAgICAgICAnYmctd2hpdGUgdGV4dC1kYXJrJzogISRxLmRhcmsubW9kZSxcbiAgICAgIH1cIlxuICAgID5cbiAgICAgIDxxLXRvb2xiYXI+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIEBjbGljaz1cIiRyb3V0ZXIuYmFjaygpXCJcbiAgICAgICAgICBmbGF0XG4gICAgICAgICAgcm91bmRcbiAgICAgICAgICBkZW5zZVxuICAgICAgICAgIGljb249XCJsYXMgbGEtYW5nbGUtbGVmdFwiXG4gICAgICAgICAgY2xhc3M9XCJxLW1yLXNtXCJcbiAgICAgICAgICA6Y29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnd2hpdGUnIDogJ2RhcmsnXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHEtdG9vbGJhci10aXRsZSBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGRcIj57e1xuICAgICAgICAgICR0KFwiRmF2b3VyaXRlc1wiKVxuICAgICAgICB9fTwvcS10b29sYmFyLXRpdGxlPlxuICAgICAgPC9xLXRvb2xiYXI+XG4gICAgPC9xLWhlYWRlcj5cblxuICAgIDxxLXBhZ2UgY2xhc3M9XCJxLXBsLW1kIHEtcHItbWRcIj5cbiAgICAgIDxxLXRhYnNcbiAgICAgICAgdi1tb2RlbD1cInRhYlwiXG4gICAgICAgIGRlbnNlXG4gICAgICAgIGFjdGl2ZS1jb2xvcj1cInByaW1hcnlcIlxuICAgICAgICBpbmRpY2F0b3ItY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgYWxpZ249XCJsZWZ0XCJcbiAgICAgICAgbmFycm93LWluZGljYXRvclxuICAgICAgICBuby1jYXBzXG4gICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAndGV4dC1ncmV5MzAwJzogJHEuZGFyay5tb2RlLFxuICAgICAgICAgICd0ZXh0LWRhcmsnOiAhJHEuZGFyay5tb2RlLFxuICAgICAgICB9XCJcbiAgICAgICAgOmJyZWFrcG9pbnQ9XCIwXCJcbiAgICAgID5cbiAgICAgICAgPHEtdGFiXG4gICAgICAgICAgbmFtZT1cInJlc3RhdXJhbnRcIlxuICAgICAgICAgIDpsYWJlbD1cIiR0KCdSZXN0YXVyYW50cycpXCJcbiAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgY29udGVudC1jbGFzcz1cInRleHQtd2VpZ2h0LTUwMCBcIlxuICAgICAgICAvPlxuICAgICAgICA8cS10YWJcbiAgICAgICAgICBuYW1lPVwiZm9vZFwiXG4gICAgICAgICAgOmxhYmVsPVwiJHQoJ0l0ZW1zJylcIlxuICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICBjb250ZW50LWNsYXNzPVwidGV4dC13ZWlnaHQtNTAwIFwiXG4gICAgICAgIC8+XG4gICAgICA8L3EtdGFicz5cblxuICAgICAgPHEtdGFiLXBhbmVsc1xuICAgICAgICB2LW1vZGVsPVwidGFiXCJcbiAgICAgICAgYW5pbWF0ZWRcbiAgICAgICAgdHJhbnNpdGlvbi1uZXh0PVwiZmFkZVwiXG4gICAgICAgIHRyYW5zaXRpb24tcHJldj1cImZhZGVcIlxuICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgJ2JnLW15ZGFyayAnOiAkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgJ2JnLXdoaXRlICc6ICEkcS5kYXJrLm1vZGUsXG4gICAgICAgIH1cIlxuICAgICAgPlxuICAgICAgICA8cS10YWItcGFuZWwgbmFtZT1cInJlc3RhdXJhbnRcIiBjbGFzcz1cInEtcGwtbm9uZSBxLXByLW5vbmVcIj5cbiAgICAgICAgICA8RmF2b3VyaXRlUmVzdHVhcmFudCByZWY9XCJmYXZfcmVzdG9cIiA6aXNfZG9uZT1cImlzX2RvbmVcIiAvPlxuICAgICAgICA8L3EtdGFiLXBhbmVsPlxuICAgICAgICA8cS10YWItcGFuZWwgbmFtZT1cImZvb2RcIiBjbGFzcz1cInEtcGwtbm9uZSBxLXByLW5vbmVcIj5cbiAgICAgICAgICA8RmF2b3VyaXRlSXRlbXNcbiAgICAgICAgICAgIHJlZj1cImZhdl9pdGVtc1wiXG4gICAgICAgICAgICA6aXNfZG9uZT1cImlzX2RvbmVcIlxuICAgICAgICAgICAgQGFmdGVyLWFkZGl0ZW1zPVwiYWZ0ZXJBZGRpdGVtc1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9xLXRhYi1wYW5lbD5cbiAgICAgIDwvcS10YWItcGFuZWxzPlxuXG4gICAgICA8cS1mb290ZXJcbiAgICAgICAgdi1pZj1cIkNhcnRTdG9yZS5pdGVtc19jb3VudCA+IDBcIlxuICAgICAgICByZXZlYWxcbiAgICAgICAgY2xhc3M9XCJxLXBsLW1kIHEtcHItbWQgcS1wYi1zbSBxLXB0LXNtIHRleHQtZGFya1wiXG4gICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAnYmctcHJpbWFyeSc6ICFDYXJ0U3RvcmUuY2FydF9yZWxvYWRpbmcsXG4gICAgICAgICAgJ2JnLWdyZXktNSc6IENhcnRTdG9yZS5jYXJ0X3JlbG9hZGluZyxcbiAgICAgICAgfVwiXG4gICAgICA+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIHRvPVwiL2NoZWNrb3V0XCJcbiAgICAgICAgICA6bG9hZGluZz1cIkNhcnRTdG9yZS5jYXJ0X2xvYWRpbmdcIlxuICAgICAgICAgIDpkaXNhYmxlPVwiIUNhcnRTdG9yZS5jYW5Qcm9jZWVkXCJcbiAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgdGV4dC1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgY2xhc3M9XCJyYWRpdXMxMCBmaXRcIlxuICAgICAgICAgIDpjb2xvcj1cIntcbiAgICAgICAgICAgIHByaW1hcnk6ICFDYXJ0U3RvcmUuY2FydF9yZWxvYWRpbmcsXG4gICAgICAgICAgICAnZ3JleS01JzogQ2FydFN0b3JlLmNhcnRfcmVsb2FkaW5nLFxuICAgICAgICAgIH1cIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGZpdFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGQgZm9udDE3XCI+e3sgJHQoXCJDaGVja291dFwiKSB9fTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGQgZm9udDE2XCI+XG4gICAgICAgICAgICAgIHt7IENhcnRTdG9yZS5jYXJ0X3N1YnRvdGFsLnZhbHVlIH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9xLWJ0bj5cbiAgICAgIDwvcS1mb290ZXI+XG4gICAgPC9xLXBhZ2U+XG4gIDwvcS1wdWxsLXRvLXJlZnJlc2g+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgZGVmaW5lQXN5bmNDb21wb25lbnQgfSBmcm9tIFwidnVlXCI7XG5pbXBvcnQgeyB1c2VDYXJ0U3RvcmUgfSBmcm9tIFwic3JjL3N0b3Jlcy9DYXJ0U3RvcmVcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIkZhdm91cml0ZXNQYWdlXCIsXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRhYjogXCJyZXN0YXVyYW50XCIsXG4gICAgICBpc19kb25lOiB1bmRlZmluZWQsXG4gICAgfTtcbiAgfSxcbiAgc2V0dXAocHJvcHMpIHtcbiAgICBjb25zdCBDYXJ0U3RvcmUgPSB1c2VDYXJ0U3RvcmUoKTtcbiAgICByZXR1cm4geyBDYXJ0U3RvcmUgfTtcbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIEZhdm91cml0ZVJlc3R1YXJhbnQ6IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+XG4gICAgICBpbXBvcnQoXCJjb21wb25lbnRzL0Zhdm91cml0ZVJlc3R1YXJhbnQudnVlXCIpXG4gICAgKSxcbiAgICBGYXZvdXJpdGVJdGVtczogZGVmaW5lQXN5bmNDb21wb25lbnQoKCkgPT5cbiAgICAgIGltcG9ydChcImNvbXBvbmVudHMvRmF2b3VyaXRlSXRlbXMudnVlXCIpXG4gICAgKSxcbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLkNhcnRTdG9yZS5nZXRDYXJ0KGZhbHNlLCB0aGlzLkNhcnRTdG9yZS5jYXJ0X3BheWxvYWQpO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgcmVmcmVzaChkb25lKSB7XG4gICAgICB0aGlzLmlzX2RvbmUgPSBkb25lO1xuICAgIH0sXG4gICAgYWZ0ZXJBZGRpdGVtcygpIHtcbiAgICAgIHRoaXMuQ2FydFN0b3JlLmdldENhcnQoZmFsc2UsIHRoaXMuQ2FydFN0b3JlLmNhcnRfcGF5bG9hZCk7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiJdLCJmaWxlIjoiYXNzZXRzL0Zhdm91cml0ZXNQYWdlLjRlZTQ2ODQ3LmpzIn0=
