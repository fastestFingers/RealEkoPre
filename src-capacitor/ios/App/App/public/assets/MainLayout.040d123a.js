import { az as registerPlugin, u as __vitePreload, _ as _export_sfc, k as defineComponent, l as defineAsyncComponent, R as useDataStore, m as APIinterface, aw as auth, aP as FCM, n as resolveComponent, p as openBlock, q as createBlock, t as withCtx, f as createVNode, a7 as normalizeClass, Y as QBtn, U as createBaseVNode, at as QIcon, Z as toDisplayString, aA as createCommentVNode, a6 as createTextVNode } from "./index.61ed5618.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QRouteTab } from "./QRouteTab.3cd4e657.js";
import { Q as QBadge } from "./QBadge.6d32ed43.js";
import { Q as QTabs } from "./QTabs.2f5e29cb.js";
import { Q as QFooter } from "./QFooter.571ac042.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.517727c0.js";
import { u as usePlaceStore } from "./PlaceStore.ccc50efb.js";
import { u as useDeliveryschedStore } from "./DeliverySched.4e9605bf.js";
import { u as useCartStore } from "./CartStore.484ff101.js";
import { u as useClientStore } from "./ClientStore.327b1c8d.js";
import "./QResizeObserver.d08dce3c.js";
import "./rtl.f3ed811c.js";
import "./QScrollObserver.a3e1ec14.js";
const Device = registerPlugin("Device", {
  web: () => __vitePreload(() => import("./web.8ca00f8c.js"), true ? ["assets/web.8ca00f8c.js","assets/index.61ed5618.js","assets/index.dbee30c0.css"] : void 0).then((m) => new m.DeviceWeb())
});
const _sfc_main = defineComponent({
  name: "MainLayout",
  components: {
    DeliveryDetails: defineAsyncComponent(
      () => __vitePreload(() => import("./DeliveryDetails.2482085f.js"), true ? ["assets/DeliveryDetails.2482085f.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QBtnToggle.6ffa195b.js","assets/QBtnGroup.abc2d1c7.js","assets/QItemLabel.a9365c5b.js","assets/QList.b69a7e5b.js","assets/PlaceStore.ccc50efb.js","assets/DeliverySched.4e9605bf.js"] : void 0)
    ),
    DeliverySched: defineAsyncComponent(
      () => __vitePreload(() => import("./DeliverySched.9dd37b6e.js"), true ? ["assets/DeliverySched.9dd37b6e.js","assets/QBtnToggle.6ffa195b.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QBtnGroup.abc2d1c7.js","assets/QSelect.311187d6.js","assets/QChip.f183a4f1.js","assets/QItemLabel.a9365c5b.js","assets/QMenu.8e482cd8.js","assets/selection.50b4cb0c.js","assets/rtl.f3ed811c.js","assets/format.7f7370d3.js","assets/DeliverySched.4e9605bf.js"] : void 0)
    ),
    NotiButton: defineAsyncComponent(() => __vitePreload(() => import("./NotiButton.be9405d3.js"), true ? ["assets/NotiButton.be9405d3.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QBadge.6d32ed43.js"] : void 0)),
    QuickTrack: defineAsyncComponent(() => __vitePreload(() => import("./QuickTrack.d945092e.js"), true ? ["assets/QuickTrack.d945092e.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QBadge.6d32ed43.js","assets/QLinearProgress.95e9a35e.js"] : void 0)),
    PushDialog: defineAsyncComponent(() => __vitePreload(() => import("./PushDialog.8f523cd1.js"), true ? ["assets/PushDialog.8f523cd1.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QSpace.f164c087.js"] : void 0))
  },
  setup() {
    const PlaceStore = usePlaceStore();
    const deliveryschedStore = useDeliveryschedStore();
    const CartStore = useCartStore();
    const DataStore = useDataStore();
    const ClientStore = useClientStore();
    return {
      PlaceStore,
      deliveryschedStore,
      CartStore,
      DataStore,
      ClientStore
    };
  },
  data() {
    return {
      tab: "home",
      dialog_location: false,
      dialog_deliverytime: false,
      transaction_type: "delivery",
      location_options: "share_location",
      delivery_time_options: "",
      back_url: "/home?refresh=1"
    };
  },
  created() {
    if (this.$q.capacitor) {
      this.DeviceInit();
    }
  },
  mounted() {
    this.initData();
  },
  watch: {
    DataStore: {
      immediate: false,
      deep: true,
      handler(newValue, oldValue) {
        if (!APIinterface.empty(newValue.appversion_data)) {
          if (Object.keys(newValue.appversion_data).length > 0) {
            this.checkAppVersion();
          }
        }
      }
    }
  },
  methods: {
    initData() {
      this.PlaceStore.getPlace();
      this.deliveryschedStore.getDeliverySched(
        APIinterface.getStorage("cart_uuid"),
        0
      );
      if (!this.CartStore.hadItem()) {
        this.CartStore.getCount();
      }
    },
    showSched() {
      this.$refs.delivery_details.showModal(false);
      this.$refs.delivery_sched.showSched(true);
    },
    afterSavetrans() {
      console.log("afterSavetrans");
      this.deliveryschedStore.getDeliverySched(
        APIinterface.getStorage("cart_uuid"),
        0
      );
    },
    afterSavetranstype(data) {
      console.log("afterSavetranstype");
    },
    DeviceInit() {
      const $deviceToken = APIinterface.getSession("device_token");
      const $isRegistered = APIinterface.getSession("device_registered");
      const $isRegisteredAuth = APIinterface.getSession(
        "device_registered_auth"
      );
      if (auth.authenticated()) {
        if ($isRegisteredAuth !== 1) {
          Device.getId().then((data) => {
            Device.getInfo().then((Info) => {
              this.updateDevice($deviceToken, data.identifier, Info.platform);
            });
          });
        }
      } else {
        if ($isRegistered !== 1) {
          Device.getId().then((data) => {
            Device.getInfo().then((Info) => {
              this.registerDevice($deviceToken, data.identifier, Info.platform);
            });
          });
        }
      }
      this.subsribeDevice();
    },
    registerDevice(token, deviceUuid, platform) {
      APIinterface.registerDevice(token, deviceUuid, platform).then((data) => {
        APIinterface.setSession("device_registered", 1);
      });
    },
    updateDevice(token, deviceUuid, platform) {
      APIinterface.updateDevice(token, deviceUuid, platform).then((data) => {
        APIinterface.setSession("device_registered_auth", 1);
      });
    },
    revealStateChange(data) {
      this.deliveryschedStore.main_layout_header = data;
    },
    subsribeDevice() {
      let $user_data = auth.getUser();
      if ($user_data && !this.ClientStore.push_off) {
        FCM.subscribeTo({ topic: $user_data.client_uuid }).then((r) => {
          this.ClientStore.push_notifications = true;
        }).catch((error) => {
          this.ClientStore.push_notifications = false;
        });
      }
    },
    checkAppVersion() {
      if (this.$q.capacitor) {
        if (this.$q.platform.is.android && this.DataStore.appversion_data.mobile_app_version_android > 0) {
          if (this.DataStore.appversion_data.mobile_app_version_android > this.DataStore.app_version) {
            this.$router.replace("/update-app");
          }
        } else if (this.$q.platform.is.ios && this.DataStore.appversion_data.mobile_app_version_ios > 0) {
          if (this.DataStore.appversion_data.mobile_app_version_ios > this.DataStore.app_version) {
            this.$router.replace("/update-app");
          }
        }
      }
    }
  }
});
const _hoisted_1 = { class: "fit row items-center" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NotiButton = resolveComponent("NotiButton");
  const _component_router_view = resolveComponent("router-view");
  const _component_DeliveryDetails = resolveComponent("DeliveryDetails");
  const _component_DeliverySched = resolveComponent("DeliverySched");
  const _component_QuickTrack = resolveComponent("QuickTrack");
  const _component_PushDialog = resolveComponent("PushDialog");
  return openBlock(), createBlock(QLayout, { view: "lHh Lpr lFf" }, {
    default: withCtx(() => [
      createVNode(QHeader, {
        reveal: "",
        class: "bg-white",
        onReveal: _ctx.revealStateChange
      }, {
        default: withCtx(() => [
          createVNode(QToolbar, {
            class: normalizeClass(["top-toolbar row", {
              "bg-mydark text-white": _ctx.$q.dark.mode,
              "text-primary": !_ctx.$q.dark.mode
            }]),
            dense: ""
          }, {
            default: withCtx(() => [
              createVNode(QBtn, {
                to: "/account-menu",
                flat: "",
                dense: "",
                icon: "las la-bars",
                class: "q-mr-sm",
                color: _ctx.$q.dark.mode ? "white" : "dark"
              }, null, 8, ["color"]),
              createVNode(QBtn, {
                onClick: _cache[0] || (_cache[0] = ($event) => this.$refs.delivery_details.showModal(true)),
                unelevated: "",
                color: _ctx.$q.dark.mode ? "grey600" : "white",
                "text-color": _ctx.$q.dark.mode ? "grey300" : "dark",
                dense: "",
                "no-caps": "",
                class: normalizeClass({
                  "col-8": _ctx.DataStore.enabled_language,
                  "col-9": !_ctx.DataStore.enabled_language
                })
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_1, [
                    createVNode(QIcon, {
                      name: "las la-map-marker-alt",
                      color: "grey",
                      size: "15px"
                    }),
                    createBaseVNode("div", {
                      class: normalizeClass(["q-ml-xs font13 ellipsis col-10", {
                        "text-grey300": _ctx.$q.dark.mode,
                        "text-dark": !_ctx.$q.dark.mode
                      }])
                    }, toDisplayString(_ctx.PlaceStore.address), 3)
                  ])
                ]),
                _: 1
              }, 8, ["color", "text-color", "class"]),
              _ctx.DataStore.enabled_language ? (openBlock(), createBlock(QBtn, {
                key: 0,
                to: "/account/language",
                flat: "",
                round: "",
                dense: "",
                icon: "las la-globe",
                class: "q-mr-smx",
                color: _ctx.$q.dark.mode ? "white" : "grey"
              }, null, 8, ["color"])) : createCommentVNode("", true),
              createVNode(_component_NotiButton)
            ]),
            _: 1
          }, 8, ["class"])
        ]),
        _: 1
      }, 8, ["onReveal"]),
      createVNode(QFooter, {
        bordered: "",
        class: "bg-white text-dark"
      }, {
        default: withCtx(() => [
          createVNode(QTabs, {
            modelValue: _ctx.tab,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.tab = $event),
            dense: "",
            "indicator-color": "transparent",
            "active-color": "secondary",
            class: normalizeClass({
              "bg-mydark text-white": _ctx.$q.dark.mode,
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
                    color: "secondary",
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
      createVNode(_component_DeliveryDetails, {
        ref: "delivery_details",
        back_url: _ctx.back_url,
        onShowSched: _ctx.showSched,
        onAfterSavetrans: _ctx.afterSavetrans,
        onAfterSavetranstype: _ctx.afterSavetranstype
      }, null, 8, ["back_url", "onShowSched", "onAfterSavetrans", "onAfterSavetranstype"]),
      createVNode(_component_DeliverySched, {
        ref: "delivery_sched",
        slug: "0",
        onAfterSavetrans: _ctx.afterSavetrans
      }, null, 8, ["onAfterSavetrans"]),
      createVNode(_component_QuickTrack, { ref: "quick_track" }, null, 512),
      createVNode(_component_PushDialog, { ref: "push_dialog" }, null, 512)
    ]),
    _: 1
  });
}
var MainLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "MainLayout.vue"]]);
export { MainLayout as default };
//# sourceMappingURL=data:application/json;base64,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QSxnQkFDQSxJQUFHO0FBQUE7Y0FFTEEsWUFVYztBQUFBLGdCQVRaLE1BQUs7QUFBQSxnQkFDTCxNQUFLO0FBQUEsZ0JBQ0osT0FBTyxLQUFFO0FBQUEsZ0JBQ1Y7QUFBQSxnQkFDQSxJQUFHO0FBQUE7aUNBRUgsTUFFVTtBQUFBLGtCQUZLLGVBQVUsd0JBQXpCRCxZQUVVO0FBQUE7b0JBRndCLE9BQU07QUFBQSxvQkFBWTtBQUFBLG9CQUFTO0FBQUE7cUNBQzNELE1BQTJCO0FBQUEsc0JBQXhCSSwrQ0FBVSxXQUFXO0FBQUE7Ozs7OztjQUk1QkgsWUFNRTtBQUFBLGdCQUxBLE1BQUs7QUFBQSxnQkFDTCxNQUFLO0FBQUEsZ0JBQ0osT0FBTyxLQUFFO0FBQUEsZ0JBQ1Y7QUFBQSxnQkFDQSxJQUFHO0FBQUE7Ozs7Ozs7TUFLVEEsWUFFbUI7QUFBQSx5QkFEakIsTUFBZTtBQUFBLFVBQWZBLFlBQWU7QUFBQTs7O01BR2pCQSxZQU1FO0FBQUEsUUFMQSxLQUFJO0FBQUEsUUFDSCxVQUFVLEtBQVE7QUFBQSxRQUNsQixhQUFZLEtBQVM7QUFBQSxRQUNyQixrQkFBaUIsS0FBYztBQUFBLFFBQy9CLHNCQUFxQixLQUFrQjtBQUFBO01BRzFDQSxZQUlFO0FBQUEsUUFIQSxLQUFJO0FBQUEsUUFDSixNQUFLO0FBQUEsUUFDSixrQkFBaUIsS0FBYztBQUFBO01BR2xDQSxZQUFnQyx5QkFBcEIsS0FBSSxjQUFhO0FBQUEsTUFFN0JBLFlBQWdDLHlCQUFwQixLQUFJLGNBQWE7QUFBQSIsIm5hbWVzIjpbIl9jcmVhdGVCbG9jayIsIl9jcmVhdGVWTm9kZSIsIl9ub3JtYWxpemVDbGFzcyIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfY3JlYXRlVGV4dFZOb2RlIl0sInNvdXJjZXMiOlsiLi4vLi4vbm9kZV9tb2R1bGVzL0BjYXBhY2l0b3IvZGV2aWNlL2Rpc3QvZXNtL2luZGV4LmpzIiwiLi4vLi4vLi4vc3JjL2xheW91dHMvTWFpbkxheW91dC52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVnaXN0ZXJQbHVnaW4gfSBmcm9tICdAY2FwYWNpdG9yL2NvcmUnO1xuY29uc3QgRGV2aWNlID0gcmVnaXN0ZXJQbHVnaW4oJ0RldmljZScsIHtcbiAgICB3ZWI6ICgpID0+IGltcG9ydCgnLi93ZWInKS50aGVuKG0gPT4gbmV3IG0uRGV2aWNlV2ViKCkpLFxufSk7XG5leHBvcnQgKiBmcm9tICcuL2RlZmluaXRpb25zJztcbmV4cG9ydCB7IERldmljZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiPHRlbXBsYXRlPlxuICA8cS1sYXlvdXQgdmlldz1cImxIaCBMcHIgbEZmXCI+XG4gICAgPHEtaGVhZGVyIHJldmVhbCBjbGFzcz1cImJnLXdoaXRlXCIgQHJldmVhbD1cInJldmVhbFN0YXRlQ2hhbmdlXCI+XG4gICAgICA8cS10b29sYmFyXG4gICAgICAgIGNsYXNzPVwidG9wLXRvb2xiYXIgcm93XCJcbiAgICAgICAgZGVuc2VcbiAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICdiZy1teWRhcmsgdGV4dC13aGl0ZSc6ICRxLmRhcmsubW9kZSxcbiAgICAgICAgICAndGV4dC1wcmltYXJ5JzogISRxLmRhcmsubW9kZSxcbiAgICAgICAgfVwiXG4gICAgICA+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIHRvPVwiL2FjY291bnQtbWVudVwiXG4gICAgICAgICAgZmxhdFxuICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgaWNvbj1cImxhcyBsYS1iYXJzXCJcbiAgICAgICAgICBjbGFzcz1cInEtbXItc21cIlxuICAgICAgICAgIDpjb2xvcj1cIiRxLmRhcmsubW9kZSA/ICd3aGl0ZScgOiAnZGFyaydcIlxuICAgICAgICAvPlxuICAgICAgICA8cS1idG5cbiAgICAgICAgICBAY2xpY2s9XCJ0aGlzLiRyZWZzLmRlbGl2ZXJ5X2RldGFpbHMuc2hvd01vZGFsKHRydWUpXCJcbiAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXk2MDAnIDogJ3doaXRlJ1wiXG4gICAgICAgICAgOnRleHQtY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTMwMCcgOiAnZGFyaydcIlxuICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICdjb2wtOCc6IERhdGFTdG9yZS5lbmFibGVkX2xhbmd1YWdlLFxuICAgICAgICAgICAgJ2NvbC05JzogIURhdGFTdG9yZS5lbmFibGVkX2xhbmd1YWdlLFxuICAgICAgICAgIH1cIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZpdCByb3cgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8cS1pY29uIG5hbWU9XCJsYXMgbGEtbWFwLW1hcmtlci1hbHRcIiBjb2xvcj1cImdyZXlcIiBzaXplPVwiMTVweFwiIC8+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzPVwicS1tbC14cyBmb250MTMgZWxsaXBzaXMgY29sLTEwXCJcbiAgICAgICAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICAgICAgICd0ZXh0LWdyZXkzMDAnOiAkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgICAgICAgJ3RleHQtZGFyayc6ICEkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7eyBQbGFjZVN0b3JlLmFkZHJlc3MgfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3EtYnRuPlxuXG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIHYtaWY9XCJEYXRhU3RvcmUuZW5hYmxlZF9sYW5ndWFnZVwiXG4gICAgICAgICAgdG89XCIvYWNjb3VudC9sYW5ndWFnZVwiXG4gICAgICAgICAgZmxhdFxuICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgZGVuc2VcbiAgICAgICAgICBpY29uPVwibGFzIGxhLWdsb2JlXCJcbiAgICAgICAgICBjbGFzcz1cInEtbXItc214XCJcbiAgICAgICAgICA6Y29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnd2hpdGUnIDogJ2dyZXknXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8Tm90aUJ1dHRvbj48L05vdGlCdXR0b24+XG4gICAgICA8L3EtdG9vbGJhcj5cbiAgICA8L3EtaGVhZGVyPlxuXG4gICAgPHEtZm9vdGVyIGJvcmRlcmVkIGNsYXNzPVwiYmctd2hpdGUgdGV4dC1kYXJrXCI+XG4gICAgICA8cS10YWJzXG4gICAgICAgIHYtbW9kZWw9XCJ0YWJcIlxuICAgICAgICBkZW5zZVxuICAgICAgICBpbmRpY2F0b3ItY29sb3I9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgIGFjdGl2ZS1jb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAnYmctbXlkYXJrIHRleHQtd2hpdGUnOiAkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgJ3RleHQtZGFyayc6ICEkcS5kYXJrLm1vZGUsXG4gICAgICAgIH1cIlxuICAgICAgPlxuICAgICAgICA8cS1yb3V0ZS10YWJcbiAgICAgICAgICBuYW1lPVwiaG9tZVwiXG4gICAgICAgICAgaWNvbj1cImxhcyBsYS1ob21lXCJcbiAgICAgICAgICA6bGFiZWw9XCIkdCgnSG9tZScpXCJcbiAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgdG89XCIvaG9tZVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxxLXJvdXRlLXRhYlxuICAgICAgICAgIG5hbWU9XCJicm93c2VcIlxuICAgICAgICAgIGljb249XCJzZWFyY2hcIlxuICAgICAgICAgIDpsYWJlbD1cIiR0KCdTZWFyY2gnKVwiXG4gICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgIHRvPVwiL3NlYXJjaFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxxLXJvdXRlLXRhYlxuICAgICAgICAgIG5hbWU9XCJjYXJ0XCJcbiAgICAgICAgICBpY29uPVwibGFzIGxhLXNob3BwaW5nLWJhZ1wiXG4gICAgICAgICAgOmxhYmVsPVwiJHQoJ0NhcnQnKVwiXG4gICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgIHRvPVwiL2NhcnRcIlxuICAgICAgICA+XG4gICAgICAgICAgPHEtYmFkZ2Ugdi1pZj1cIkNhcnRTdG9yZS5oYXNJdGVtXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBmbG9hdGluZyByb3VuZGVkPlxuICAgICAgICAgICAge3sgQ2FydFN0b3JlLml0ZW1zX2NvdW50IH19XG4gICAgICAgICAgPC9xLWJhZGdlPlxuICAgICAgICA8L3Etcm91dGUtdGFiPlxuXG4gICAgICAgIDxxLXJvdXRlLXRhYlxuICAgICAgICAgIG5hbWU9XCJhY2NvdW50XCJcbiAgICAgICAgICBpY29uPVwibGFzIGxhLXVzZXItYWx0XCJcbiAgICAgICAgICA6bGFiZWw9XCIkdCgnQWNjb3VudCcpXCJcbiAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgdG89XCIvYWNjb3VudC1tZW51XCJcbiAgICAgICAgLz5cbiAgICAgIDwvcS10YWJzPlxuICAgIDwvcS1mb290ZXI+XG5cbiAgICA8cS1wYWdlLWNvbnRhaW5lcj5cbiAgICAgIDxyb3V0ZXItdmlldyAvPlxuICAgIDwvcS1wYWdlLWNvbnRhaW5lcj5cblxuICAgIDxEZWxpdmVyeURldGFpbHNcbiAgICAgIHJlZj1cImRlbGl2ZXJ5X2RldGFpbHNcIlxuICAgICAgOmJhY2tfdXJsPVwiYmFja191cmxcIlxuICAgICAgQHNob3ctc2NoZWQ9XCJzaG93U2NoZWRcIlxuICAgICAgQGFmdGVyLXNhdmV0cmFucz1cImFmdGVyU2F2ZXRyYW5zXCJcbiAgICAgIEBhZnRlci1zYXZldHJhbnN0eXBlPVwiYWZ0ZXJTYXZldHJhbnN0eXBlXCJcbiAgICAvPlxuXG4gICAgPERlbGl2ZXJ5U2NoZWRcbiAgICAgIHJlZj1cImRlbGl2ZXJ5X3NjaGVkXCJcbiAgICAgIHNsdWc9XCIwXCJcbiAgICAgIEBhZnRlci1zYXZldHJhbnM9XCJhZnRlclNhdmV0cmFuc1wiXG4gICAgLz5cblxuICAgIDxRdWlja1RyYWNrIHJlZj1cInF1aWNrX3RyYWNrXCIgLz5cblxuICAgIDxQdXNoRGlhbG9nIHJlZj1cInB1c2hfZGlhbG9nXCIgLz5cbiAgPC9xLWxheW91dD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBEZXZpY2UgfSBmcm9tIFwiQGNhcGFjaXRvci9kZXZpY2VcIjtcbmltcG9ydCB7IEZDTSB9IGZyb20gXCJAY2FwYWNpdG9yLWNvbW11bml0eS9mY21cIjtcbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgZGVmaW5lQXN5bmNDb21wb25lbnQgfSBmcm9tIFwidnVlXCI7XG5pbXBvcnQgQVBJaW50ZXJmYWNlIGZyb20gXCJzcmMvYXBpL0FQSWludGVyZmFjZVwiO1xuaW1wb3J0IHsgdXNlUGxhY2VTdG9yZSB9IGZyb20gXCJzdG9yZXMvUGxhY2VTdG9yZVwiO1xuaW1wb3J0IHsgdXNlRGVsaXZlcnlzY2hlZFN0b3JlIH0gZnJvbSBcInN0b3Jlcy9EZWxpdmVyeVNjaGVkXCI7XG5pbXBvcnQgeyB1c2VDYXJ0U3RvcmUgfSBmcm9tIFwic3RvcmVzL0NhcnRTdG9yZVwiO1xuaW1wb3J0IGF1dGggZnJvbSBcInNyYy9hcGkvYXV0aFwiO1xuaW1wb3J0IHsgdXNlRGF0YVN0b3JlIH0gZnJvbSBcInN0b3Jlcy9EYXRhU3RvcmVcIjtcbmltcG9ydCB7IHVzZUNsaWVudFN0b3JlIH0gZnJvbSBcInN0b3Jlcy9DbGllbnRTdG9yZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiBcIk1haW5MYXlvdXRcIixcbiAgY29tcG9uZW50czoge1xuICAgIERlbGl2ZXJ5RGV0YWlsczogZGVmaW5lQXN5bmNDb21wb25lbnQoKCkgPT5cbiAgICAgIGltcG9ydChcImNvbXBvbmVudHMvRGVsaXZlcnlEZXRhaWxzLnZ1ZVwiKVxuICAgICksXG4gICAgRGVsaXZlcnlTY2hlZDogZGVmaW5lQXN5bmNDb21wb25lbnQoKCkgPT5cbiAgICAgIGltcG9ydChcImNvbXBvbmVudHMvRGVsaXZlcnlTY2hlZC52dWVcIilcbiAgICApLFxuICAgIE5vdGlCdXR0b246IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+IGltcG9ydChcImNvbXBvbmVudHMvTm90aUJ1dHRvbi52dWVcIikpLFxuICAgIFF1aWNrVHJhY2s6IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+IGltcG9ydChcImNvbXBvbmVudHMvUXVpY2tUcmFjay52dWVcIikpLFxuICAgIFB1c2hEaWFsb2c6IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+IGltcG9ydChcImNvbXBvbmVudHMvUHVzaERpYWxvZy52dWVcIikpLFxuICB9LFxuICBzZXR1cCgpIHtcbiAgICBjb25zdCBQbGFjZVN0b3JlID0gdXNlUGxhY2VTdG9yZSgpO1xuICAgIGNvbnN0IGRlbGl2ZXJ5c2NoZWRTdG9yZSA9IHVzZURlbGl2ZXJ5c2NoZWRTdG9yZSgpO1xuICAgIGNvbnN0IENhcnRTdG9yZSA9IHVzZUNhcnRTdG9yZSgpO1xuICAgIGNvbnN0IERhdGFTdG9yZSA9IHVzZURhdGFTdG9yZSgpO1xuICAgIGNvbnN0IENsaWVudFN0b3JlID0gdXNlQ2xpZW50U3RvcmUoKTtcbiAgICByZXR1cm4ge1xuICAgICAgUGxhY2VTdG9yZSxcbiAgICAgIGRlbGl2ZXJ5c2NoZWRTdG9yZSxcbiAgICAgIENhcnRTdG9yZSxcbiAgICAgIERhdGFTdG9yZSxcbiAgICAgIENsaWVudFN0b3JlLFxuICAgIH07XG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRhYjogXCJob21lXCIsXG4gICAgICBkaWFsb2dfbG9jYXRpb246IGZhbHNlLFxuICAgICAgZGlhbG9nX2RlbGl2ZXJ5dGltZTogZmFsc2UsXG4gICAgICB0cmFuc2FjdGlvbl90eXBlOiBcImRlbGl2ZXJ5XCIsXG4gICAgICBsb2NhdGlvbl9vcHRpb25zOiBcInNoYXJlX2xvY2F0aW9uXCIsXG4gICAgICBkZWxpdmVyeV90aW1lX29wdGlvbnM6IFwiXCIsXG4gICAgICBiYWNrX3VybDogXCIvaG9tZT9yZWZyZXNoPTFcIixcbiAgICB9O1xuICB9LFxuICBjcmVhdGVkKCkge1xuICAgIGlmICh0aGlzLiRxLmNhcGFjaXRvcikge1xuICAgICAgdGhpcy5EZXZpY2VJbml0KCk7XG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuaW5pdERhdGEoKTtcbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBEYXRhU3RvcmU6IHtcbiAgICAgIGltbWVkaWF0ZTogZmFsc2UsXG4gICAgICBkZWVwOiB0cnVlLFxuICAgICAgaGFuZGxlcihuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKCFBUElpbnRlcmZhY2UuZW1wdHkobmV3VmFsdWUuYXBwdmVyc2lvbl9kYXRhKSkge1xuICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhuZXdWYWx1ZS5hcHB2ZXJzaW9uX2RhdGEpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tBcHBWZXJzaW9uKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBpbml0RGF0YSgpIHtcbiAgICAgIHRoaXMuUGxhY2VTdG9yZS5nZXRQbGFjZSgpO1xuXG4gICAgICB0aGlzLmRlbGl2ZXJ5c2NoZWRTdG9yZS5nZXREZWxpdmVyeVNjaGVkKFxuICAgICAgICBBUElpbnRlcmZhY2UuZ2V0U3RvcmFnZShcImNhcnRfdXVpZFwiKSxcbiAgICAgICAgMFxuICAgICAgKTtcblxuICAgICAgaWYgKCF0aGlzLkNhcnRTdG9yZS5oYWRJdGVtKCkpIHtcbiAgICAgICAgdGhpcy5DYXJ0U3RvcmUuZ2V0Q291bnQoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHNob3dTY2hlZCgpIHtcbiAgICAgIHRoaXMuJHJlZnMuZGVsaXZlcnlfZGV0YWlscy5zaG93TW9kYWwoZmFsc2UpO1xuICAgICAgdGhpcy4kcmVmcy5kZWxpdmVyeV9zY2hlZC5zaG93U2NoZWQodHJ1ZSk7XG4gICAgfSxcbiAgICBhZnRlclNhdmV0cmFucygpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiYWZ0ZXJTYXZldHJhbnNcIik7XG4gICAgICB0aGlzLmRlbGl2ZXJ5c2NoZWRTdG9yZS5nZXREZWxpdmVyeVNjaGVkKFxuICAgICAgICBBUElpbnRlcmZhY2UuZ2V0U3RvcmFnZShcImNhcnRfdXVpZFwiKSxcbiAgICAgICAgMFxuICAgICAgKTtcbiAgICB9LFxuICAgIGFmdGVyU2F2ZXRyYW5zdHlwZShkYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImFmdGVyU2F2ZXRyYW5zdHlwZVwiKTtcbiAgICB9LFxuICAgIERldmljZUluaXQoKSB7XG4gICAgICBjb25zdCAkZGV2aWNlVG9rZW4gPSBBUElpbnRlcmZhY2UuZ2V0U2Vzc2lvbihcImRldmljZV90b2tlblwiKTtcbiAgICAgIGNvbnN0ICRpc1JlZ2lzdGVyZWQgPSBBUElpbnRlcmZhY2UuZ2V0U2Vzc2lvbihcImRldmljZV9yZWdpc3RlcmVkXCIpO1xuICAgICAgY29uc3QgJGlzUmVnaXN0ZXJlZEF1dGggPSBBUElpbnRlcmZhY2UuZ2V0U2Vzc2lvbihcbiAgICAgICAgXCJkZXZpY2VfcmVnaXN0ZXJlZF9hdXRoXCJcbiAgICAgICk7XG5cbiAgICAgIGlmIChhdXRoLmF1dGhlbnRpY2F0ZWQoKSkge1xuICAgICAgICBpZiAoJGlzUmVnaXN0ZXJlZEF1dGggIT09IDEpIHtcbiAgICAgICAgICBEZXZpY2UuZ2V0SWQoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBEZXZpY2UuZ2V0SW5mbygpLnRoZW4oKEluZm8pID0+IHtcbiAgICAgICAgICAgICAgdGhpcy51cGRhdGVEZXZpY2UoJGRldmljZVRva2VuLCBkYXRhLmlkZW50aWZpZXIsIEluZm8ucGxhdGZvcm0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICgkaXNSZWdpc3RlcmVkICE9PSAxKSB7XG4gICAgICAgICAgRGV2aWNlLmdldElkKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgRGV2aWNlLmdldEluZm8oKS50aGVuKChJbmZvKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJEZXZpY2UoJGRldmljZVRva2VuLCBkYXRhLmlkZW50aWZpZXIsIEluZm8ucGxhdGZvcm0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5zdWJzcmliZURldmljZSgpO1xuICAgIH0sXG4gICAgcmVnaXN0ZXJEZXZpY2UodG9rZW4sIGRldmljZVV1aWQsIHBsYXRmb3JtKSB7XG4gICAgICBBUElpbnRlcmZhY2UucmVnaXN0ZXJEZXZpY2UodG9rZW4sIGRldmljZVV1aWQsIHBsYXRmb3JtKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIEFQSWludGVyZmFjZS5zZXRTZXNzaW9uKFwiZGV2aWNlX3JlZ2lzdGVyZWRcIiwgMSk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHVwZGF0ZURldmljZSh0b2tlbiwgZGV2aWNlVXVpZCwgcGxhdGZvcm0pIHtcbiAgICAgIEFQSWludGVyZmFjZS51cGRhdGVEZXZpY2UodG9rZW4sIGRldmljZVV1aWQsIHBsYXRmb3JtKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIEFQSWludGVyZmFjZS5zZXRTZXNzaW9uKFwiZGV2aWNlX3JlZ2lzdGVyZWRfYXV0aFwiLCAxKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgcmV2ZWFsU3RhdGVDaGFuZ2UoZGF0YSkge1xuICAgICAgdGhpcy5kZWxpdmVyeXNjaGVkU3RvcmUubWFpbl9sYXlvdXRfaGVhZGVyID0gZGF0YTtcbiAgICB9LFxuICAgIHN1YnNyaWJlRGV2aWNlKCkge1xuICAgICAgbGV0ICR1c2VyX2RhdGEgPSBhdXRoLmdldFVzZXIoKTtcbiAgICAgIGlmICgkdXNlcl9kYXRhICYmICF0aGlzLkNsaWVudFN0b3JlLnB1c2hfb2ZmKSB7XG4gICAgICAgIEZDTS5zdWJzY3JpYmVUbyh7IHRvcGljOiAkdXNlcl9kYXRhLmNsaWVudF91dWlkIH0pXG4gICAgICAgICAgLnRoZW4oKHIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuQ2xpZW50U3RvcmUucHVzaF9ub3RpZmljYXRpb25zID0gdHJ1ZTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHRoaXMuQ2xpZW50U3RvcmUucHVzaF9ub3RpZmljYXRpb25zID0gZmFsc2U7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBjaGVja0FwcFZlcnNpb24oKSB7XG4gICAgICBpZiAodGhpcy4kcS5jYXBhY2l0b3IpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMuJHEucGxhdGZvcm0uaXMuYW5kcm9pZCAmJlxuICAgICAgICAgIHRoaXMuRGF0YVN0b3JlLmFwcHZlcnNpb25fZGF0YS5tb2JpbGVfYXBwX3ZlcnNpb25fYW5kcm9pZCA+IDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5EYXRhU3RvcmUuYXBwdmVyc2lvbl9kYXRhLm1vYmlsZV9hcHBfdmVyc2lvbl9hbmRyb2lkID5cbiAgICAgICAgICAgIHRoaXMuRGF0YVN0b3JlLmFwcF92ZXJzaW9uXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLiRyb3V0ZXIucmVwbGFjZShcIi91cGRhdGUtYXBwXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICB0aGlzLiRxLnBsYXRmb3JtLmlzLmlvcyAmJlxuICAgICAgICAgIHRoaXMuRGF0YVN0b3JlLmFwcHZlcnNpb25fZGF0YS5tb2JpbGVfYXBwX3ZlcnNpb25faW9zID4gMFxuICAgICAgICApIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLkRhdGFTdG9yZS5hcHB2ZXJzaW9uX2RhdGEubW9iaWxlX2FwcF92ZXJzaW9uX2lvcyA+XG4gICAgICAgICAgICB0aGlzLkRhdGFTdG9yZS5hcHBfdmVyc2lvblxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy4kcm91dGVyLnJlcGxhY2UoXCIvdXBkYXRlLWFwcFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICB9LFxufSk7XG48L3NjcmlwdD5cbiJdLCJmaWxlIjoiYXNzZXRzL01haW5MYXlvdXQuMDQwZDEyM2EuanMifQ==
