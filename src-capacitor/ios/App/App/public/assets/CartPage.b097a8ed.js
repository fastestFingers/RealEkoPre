import { _ as _export_sfc, l as defineAsyncComponent, R as useDataStore, m as APIinterface, n as resolveComponent, p as openBlock, V as createElementBlock, f as createVNode, t as withCtx, q as createBlock, a7 as normalizeClass, aA as createCommentVNode, F as Fragment, Y as QBtn, a6 as createTextVNode, Z as toDisplayString, U as createBaseVNode, ac as QItem, ad as QItemSection, bA as QToggle, at as QIcon, u as __vitePreload } from "./index.61ed5618.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QImg } from "./QImg.6c27044c.js";
import { Q as QList } from "./QList.b69a7e5b.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import { Q as QPullToRefresh } from "./QPullToRefresh.3d10c02d.js";
import { Q as QInnerLoading } from "./QInnerLoading.abe2afe6.js";
import { Q as QFooter } from "./QFooter.571ac042.js";
import { u as useCartStore } from "./CartStore.484ff101.js";
import { u as useDeliveryschedStore } from "./DeliverySched.4e9605bf.js";
import "./QResizeObserver.d08dce3c.js";
import "./touch.96e0ae37.js";
import "./selection.50b4cb0c.js";
import "./format.7f7370d3.js";
const _sfc_main = {
  name: "CartPage",
  components: {
    CartMerchantInfo: defineAsyncComponent(
      () => __vitePreload(() => import("./CartMerchantInfo.a60b5181.js"), true ? ["assets/CartMerchantInfo.a60b5181.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QImg.6c27044c.js","assets/CartStore.484ff101.js"] : void 0)
    ),
    CartDetails: defineAsyncComponent(
      () => __vitePreload(() => import("./CartDetails.bc77b432.js"), true ? ["assets/CartDetails.bc77b432.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QSkeleton.39737398.js","assets/QList.b69a7e5b.js","assets/QImg.6c27044c.js","assets/QItemLabel.a9365c5b.js","assets/QSlideItem.7b72eeea.js","assets/QPullToRefresh.3d10c02d.js","assets/touch.96e0ae37.js","assets/selection.50b4cb0c.js","assets/format.7f7370d3.js","assets/use-render-cache.b9e045af.js","assets/CartStore.484ff101.js"] : void 0)
    ),
    DeliveryDetails: defineAsyncComponent(
      () => __vitePreload(() => import("./DeliveryDetails.2482085f.js"), true ? ["assets/DeliveryDetails.2482085f.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QBtnToggle.6ffa195b.js","assets/QBtnGroup.abc2d1c7.js","assets/QItemLabel.a9365c5b.js","assets/QList.b69a7e5b.js","assets/PlaceStore.ccc50efb.js","assets/DeliverySched.4e9605bf.js"] : void 0)
    ),
    DeliverySched: defineAsyncComponent(
      () => __vitePreload(() => import("./DeliverySched.9dd37b6e.js"), true ? ["assets/DeliverySched.9dd37b6e.js","assets/QBtnToggle.6ffa195b.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QBtnGroup.abc2d1c7.js","assets/QSelect.311187d6.js","assets/QChip.f183a4f1.js","assets/QItemLabel.a9365c5b.js","assets/QMenu.8e482cd8.js","assets/selection.50b4cb0c.js","assets/rtl.f3ed811c.js","assets/format.7f7370d3.js","assets/DeliverySched.4e9605bf.js"] : void 0)
    ),
    SimilarItems: defineAsyncComponent(
      () => __vitePreload(() => import("./SimilarItems.15c834fa.js"), true ? ["assets/SimilarItems.15c834fa.js","assets/swiper.min.5cdecd27.css","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QSkeleton.39737398.js","assets/QImg.6c27044c.js","assets/CartStore.484ff101.js","assets/MenuStore.f3a21da3.js","assets/swiper-slide.8a0c58df.js"] : void 0)
    ),
    ComponentsRealtime: defineAsyncComponent(
      () => __vitePreload(() => import("./ComponentsRealtime.d8c5a360.js"), true ? ["assets/ComponentsRealtime.d8c5a360.js","assets/index.d0b40bd3.js","assets/index.61ed5618.js","assets/index.dbee30c0.css"] : void 0)
    )
  },
  data() {
    return {
      payload: [
        "items",
        "subtotal",
        "distance_local",
        "items_count",
        "merchant_info",
        "check_opening",
        "transaction_info"
      ],
      back_url: "/cart?refresh=1",
      lastPath: "",
      data_slide: {},
      include_utensils: false
    };
  },
  setup() {
    const CartStore = useCartStore();
    const DeliveryschedStore = useDeliveryschedStore();
    const DataStore = useDataStore();
    return { CartStore, DeliveryschedStore, DataStore };
  },
  created() {
    this.CartStore.getCart(true, this.payload);
    const includeUtensils = APIinterface.getStorage("include_utensils");
    if (!APIinterface.empty(includeUtensils)) {
      this.include_utensils = includeUtensils;
    }
    this.DeliveryschedStore.getDeliverySched(
      APIinterface.getStorage("cart_uuid"),
      APIinterface.getStorage("merchant_slug"),
      "cart"
    );
  },
  mounted() {
    this.lastPath = this.$router.options.history.state.back;
  },
  computed: {
    getMerchantUUID() {
      if (Object.keys(this.CartStore.cart_merchant).length > 0) {
        return this.CartStore.cart_merchant.merchant_uuid;
      }
      return false;
    }
  },
  methods: {
    backPage() {
      const $find = this.lastPath.search("map");
      if ($find > 0) {
        this.$router.push({
          name: "menu",
          params: { slug: this.CartStore.cart_merchant.slug }
        });
      } else {
        this.$router.back();
      }
    },
    afterSavetrans() {
      this.CartStore.getCart(false, this.payload);
      console.log("afterSavetrans");
      this.DeliveryschedStore.getDeliverySched(
        APIinterface.getStorage("cart_uuid"),
        APIinterface.getStorage("merchant_slug")
      );
    },
    afterSavetranstype() {
      this.CartStore.getCart(false, this.payload);
    },
    onClickchange() {
      this.$refs.delivery_details.showModal(true);
    },
    showSched() {
      this.$refs.delivery_details.showModal(false);
      this.$refs.delivery_sched.showSched(true);
    },
    onRight(details, index) {
      this.data_slide[index] = details;
    },
    closeSlide(index) {
      if (this.data_slide[index]) {
        this.data_slide[index].reset();
      }
    },
    setUtensil(value) {
      APIinterface.setStorage("include_utensils", value);
    },
    refresh(done) {
      this.CartStore.getCart(false, this.payload);
      done();
    },
    checkBeforeCheckout() {
      console.log(this.CartStore.transaction_info.whento_deliver);
      if (this.CartStore.transaction_info.whento_deliver == "schedule") {
        let $message = "You are placing and order for {date} at {time}. Would you like to continue?";
        $message = $message.replace(
          "{date}",
          this.CartStore.transaction_info.delivery_date_pretty
        );
        $message = $message.replace(
          "{time}",
          this.CartStore.transaction_info.delivery_time.pretty_time
        );
        this.$q.dialog({
          title: "Ordering for later?",
          message: $message,
          persistent: true,
          position: "standard",
          transitionShow: "fade",
          transitionHide: "fade",
          ok: {
            unelevated: true,
            color: "primary",
            rounded: false,
            "text-color": "white",
            size: "md",
            label: "Continue",
            "no-caps": true
          },
          cancel: {
            unelevated: true,
            rounded: false,
            color: "grey-3",
            "text-color": "black",
            size: "md",
            label: "Cancel",
            "no-caps": true
          }
        }).onOk(() => {
          this.$router.push("/checkout");
        }).onOk(() => {
        }).onCancel(() => {
        }).onDismiss(() => {
        });
      } else {
        this.$router.push("/checkout");
      }
    },
    afterSetplaceid() {
      this.CartStore.getCart(true, this.payload);
    },
    afterReceive(data) {
      console.log("afterReceive");
      console.log(data);
      let message = JSON.parse(data.message);
      console.log(message);
      APIinterface.fetchDataPost(
        "validateCartItems",
        "item_id=" + message.item_id + "&cart_uuid=" + APIinterface.getStorage("cart_uuid")
      ).then((data2) => {
        this.$q.dialog({
          title: this.$t("Items"),
          message: data2.msg,
          persistent: true
        }).onOk(() => {
          this.CartStore.getCart(true, this.payload);
        }).onCancel(() => {
        }).onDismiss(() => {
        });
      }).catch((error) => {
      }).then((data2) => {
      });
    }
  }
};
const _hoisted_1 = {
  key: 0,
  class: "text-center full-width"
};
const _hoisted_2 = { class: "text-h5 text-weight-bold" };
const _hoisted_3 = { class: "text-grey font12" };
const _hoisted_4 = {
  key: 0,
  class: "q-pl-md q-pr-md"
};
const _hoisted_5 = { class: "text-weight-bold font16" };
const _hoisted_6 = { class: "text-grey" };
const _hoisted_7 = { class: "row justify-end" };
const _hoisted_8 = { class: "q-pl-sm" };
const _hoisted_9 = { class: "row items-center justify-between fit" };
const _hoisted_10 = { class: "text-weight-bold font17" };
const _hoisted_11 = { class: "text-weight-bold font16" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CartMerchantInfo = resolveComponent("CartMerchantInfo");
  const _component_CartDetails = resolveComponent("CartDetails");
  const _component_SimilarItems = resolveComponent("SimilarItems");
  const _component_DIV = resolveComponent("DIV");
  const _component_DeliveryDetails = resolveComponent("DeliveryDetails");
  const _component_DeliverySched = resolveComponent("DeliverySched");
  const _component_ComponentsRealtime = resolveComponent("ComponentsRealtime");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(QPullToRefresh, { onRefresh: $options.refresh }, {
      default: withCtx(() => [
        createVNode(QHeader, {
          reveal: "",
          "reveal-offset": "10",
          class: normalizeClass({
            "bg-mydark text-white": _ctx.$q.dark.mode,
            "bg-white text-black": !_ctx.$q.dark.mode
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
                    createTextVNode(toDisplayString(_ctx.$t("Your Order")), 1)
                  ]),
                  _: 1
                }),
                $setup.CartStore.hasItem ? (openBlock(), createBlock(QBtn, {
                  key: 0,
                  onClick: _cache[1] || (_cache[1] = ($event) => this.$refs.cart_details.clearCart()),
                  flat: "",
                  round: "",
                  dense: "",
                  icon: "las la-trash-alt",
                  color: "secondary"
                })) : createCommentVNode("", true)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["class"]),
        createVNode(QPage, null, {
          default: withCtx(() => [
            !$setup.CartStore.hasItem && !$setup.CartStore.cart_loading ? (openBlock(), createElementBlock("div", _hoisted_1, [
              createVNode(QImg, {
                src: "cart-empty.png",
                fit: "fill",
                "spinner-color": "primary",
                style: { "height": "80px", "max-width": "80px" }
              }),
              createBaseVNode("div", _hoisted_2, toDisplayString(_ctx.$t("Your cart is empty")), 1),
              createBaseVNode("p", _hoisted_3, toDisplayString(_ctx.$t("You don't have any orders here! let's change that!")), 1)
            ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createVNode(_component_CartMerchantInfo, {
                ref: "cart_merchantinfo",
                show_transinfo: true,
                onOnClickchange: $options.onClickchange
              }, null, 8, ["onOnClickchange"]),
              !$setup.CartStore.canProceed && !$setup.CartStore.cart_loading ? (openBlock(), createElementBlock("div", _hoisted_4, [
                createBaseVNode("div", {
                  class: normalizeClass(["q-pa-md radius8 font12", {
                    "bg-grey600 text-grey300": _ctx.$q.dark.mode,
                    "bg-yellow text-dark": !_ctx.$q.dark.mode
                  }]),
                  style: { "bottom": "51px" }
                }, toDisplayString($setup.CartStore.getErrorMsg), 3)
              ])) : createCommentVNode("", true),
              createVNode(_component_CartDetails, {
                ref: "cart_details",
                is_checkout: true,
                payload: $data.payload
              }, null, 8, ["payload"]),
              !$setup.CartStore.cart_loading && $setup.DataStore.enabled_include_utensils ? (openBlock(), createBlock(QList, {
                key: 1,
                class: "border-grey-top"
              }, {
                default: withCtx(() => [
                  createVNode(QItem, null, {
                    default: withCtx(() => [
                      createVNode(QItemSection, null, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_5, toDisplayString(_ctx.$t("Cutlery")), 1),
                          createBaseVNode("div", _hoisted_6, toDisplayString(_ctx.$t("Include utensils, napkins, etc.")), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(QItemSection, { side: "" }, {
                        default: withCtx(() => [
                          createVNode(QToggle, {
                            modelValue: $data.include_utensils,
                            "onUpdate:modelValue": [
                              _cache[2] || (_cache[2] = ($event) => $data.include_utensils = $event),
                              $options.setUtensil
                            ]
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true),
              $setup.CartStore.hasItem ? (openBlock(), createBlock(_component_DIV, {
                key: 2,
                class: "q-pl-md q-pr-md border-grey-top"
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_7, [
                    createVNode(QBtn, {
                      unelevated: "",
                      color: _ctx.$q.dark.mode ? "grey600" : "mygrey",
                      "text-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                      "no-caps": "",
                      size: "md",
                      class: "radius8 q-mt-sm q-mb-md",
                      to: {
                        name: "menu",
                        params: { slug: $setup.CartStore.cart_merchant.slug }
                      }
                    }, {
                      default: withCtx(() => [
                        createVNode(QIcon, {
                          name: "las la-plus",
                          size: "15px"
                        }),
                        createBaseVNode("div", _hoisted_8, toDisplayString(_ctx.$t("Add more items")), 1)
                      ]),
                      _: 1
                    }, 8, ["color", "text-color", "to"])
                  ]),
                  $setup.CartStore.cart_merchant.merchant_id ? (openBlock(), createBlock(_component_SimilarItems, {
                    key: 0,
                    ref: "similar_items",
                    title: _ctx.$t("Most Ordered Items"),
                    merchant_id: $setup.CartStore.cart_merchant.merchant_id
                  }, null, 8, ["title", "merchant_id"])) : createCommentVNode("", true)
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ], 64))
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["onRefresh"]),
    createVNode(QInnerLoading, {
      showing: $setup.CartStore.cart_reloading,
      color: "primary",
      size: "md",
      "label-class": "dark"
    }, null, 8, ["showing"]),
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
          onClick: $options.checkBeforeCheckout,
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
            createBaseVNode("div", _hoisted_9, [
              createBaseVNode("div", _hoisted_10, toDisplayString(_ctx.$t("Checkout")), 1),
              createBaseVNode("div", _hoisted_11, toDisplayString($setup.CartStore.cart_subtotal.value), 1)
            ])
          ]),
          _: 1
        }, 8, ["onClick", "loading", "disable", "color"])
      ]),
      _: 1
    }, 8, ["class"])) : createCommentVNode("", true),
    createVNode(_component_DeliveryDetails, {
      ref: "delivery_details",
      back_url: $data.back_url,
      onShowSched: $options.showSched,
      onAfterSavetrans: $options.afterSavetrans,
      onAfterSavetranstype: $options.afterSavetranstype,
      onAfterSetplaceid: $options.afterSetplaceid
    }, null, 8, ["back_url", "onShowSched", "onAfterSavetrans", "onAfterSavetranstype", "onAfterSetplaceid"]),
    createVNode(_component_DeliverySched, {
      ref: "delivery_sched",
      slug: $setup.CartStore.cart_merchant.slug,
      onAfterSavetrans: $options.afterSavetrans
    }, null, 8, ["slug", "onAfterSavetrans"]),
    $options.getMerchantUUID ? (openBlock(), createBlock(_component_ComponentsRealtime, {
      key: 1,
      ref: "realtime",
      getevent: "cart",
      subscribe_to: $options.getMerchantUUID,
      onAfterReceive: $options.afterReceive
    }, null, 8, ["subscribe_to", "onAfterReceive"])) : createCommentVNode("", true)
  ], 64);
}
var CartPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "CartPage.vue"]]);
export { CartPage as default };
//# sourceMappingURL=data:application/json;base64,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QUEsTUFDbEIsYUFBWSxTQUFTO0FBQUEsTUFDckIsa0JBQWlCLFNBQWM7QUFBQSxNQUMvQixzQkFBcUIsU0FBa0I7QUFBQSxNQUN2QyxtQkFBa0IsU0FBZTtBQUFBO0lBRXBDQSxZQUlFO0FBQUEsTUFIQSxLQUFJO0FBQUEsTUFDSCxNQUFNLGlCQUFVLGNBQWM7QUFBQSxNQUM5QixrQkFBaUIsU0FBYztBQUFBO0lBR2xCLFNBQWUsZ0NBQzdCRSxZQU1xQjtBQUFBO01BTG5CLEtBQUk7QUFBQSxNQUNKLFVBQVM7QUFBQSxNQUNSLGNBQWMsU0FBZTtBQUFBLE1BQzdCLGdCQUFlLFNBQVk7QUFBQSIsIm5hbWVzIjpbImRhdGEiLCJfY3JlYXRlVk5vZGUiLCJfbm9ybWFsaXplQ2xhc3MiLCJfY3JlYXRlQmxvY2siLCJfb3BlbkJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl90b0Rpc3BsYXlTdHJpbmciLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX0ZyYWdtZW50Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhZ2VzL0NhcnQvQ2FydFBhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHEtcHVsbC10by1yZWZyZXNoIEByZWZyZXNoPVwicmVmcmVzaFwiPlxuICAgIDxxLWhlYWRlclxuICAgICAgcmV2ZWFsXG4gICAgICByZXZlYWwtb2Zmc2V0PVwiMTBcIlxuICAgICAgOmNsYXNzPVwie1xuICAgICAgICAnYmctbXlkYXJrIHRleHQtd2hpdGUnOiAkcS5kYXJrLm1vZGUsXG4gICAgICAgICdiZy13aGl0ZSB0ZXh0LWJsYWNrJzogISRxLmRhcmsubW9kZSxcbiAgICAgIH1cIlxuICAgID5cbiAgICAgIDxxLXRvb2xiYXI+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIEBjbGljaz1cIiRyb3V0ZXIuYmFjaygpXCJcbiAgICAgICAgICBmbGF0XG4gICAgICAgICAgcm91bmRcbiAgICAgICAgICBkZW5zZVxuICAgICAgICAgIGljb249XCJsYXMgbGEtYW5nbGUtbGVmdFwiXG4gICAgICAgICAgY2xhc3M9XCJxLW1yLXNtXCJcbiAgICAgICAgICA6Y29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnd2hpdGUnIDogJ2RhcmsnXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHEtdG9vbGJhci10aXRsZSBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGRcIj57e1xuICAgICAgICAgICR0KFwiWW91ciBPcmRlclwiKVxuICAgICAgICB9fTwvcS10b29sYmFyLXRpdGxlPlxuICAgICAgICA8cS1idG5cbiAgICAgICAgICB2LWlmPVwiQ2FydFN0b3JlLmhhc0l0ZW1cIlxuICAgICAgICAgIEBjbGljaz1cInRoaXMuJHJlZnMuY2FydF9kZXRhaWxzLmNsZWFyQ2FydCgpXCJcbiAgICAgICAgICBmbGF0XG4gICAgICAgICAgcm91bmRcbiAgICAgICAgICBkZW5zZVxuICAgICAgICAgIGljb249XCJsYXMgbGEtdHJhc2gtYWx0XCJcbiAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgIC8+XG4gICAgICA8L3EtdG9vbGJhcj5cbiAgICA8L3EtaGVhZGVyPlxuICAgIDxxLXBhZ2U+XG4gICAgICA8dGVtcGxhdGUgdi1pZj1cIiFDYXJ0U3RvcmUuaGFzSXRlbSAmJiAhQ2FydFN0b3JlLmNhcnRfbG9hZGluZ1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgZnVsbC13aWR0aFwiPlxuICAgICAgICAgIDxxLWltZ1xuICAgICAgICAgICAgc3JjPVwiY2FydC1lbXB0eS5wbmdcIlxuICAgICAgICAgICAgZml0PVwiZmlsbFwiXG4gICAgICAgICAgICBzcGlubmVyLWNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBzdHlsZT1cImhlaWdodDogODBweDsgbWF4LXdpZHRoOiA4MHB4XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg1IHRleHQtd2VpZ2h0LWJvbGRcIj5cbiAgICAgICAgICAgIHt7ICR0KFwiWW91ciBjYXJ0IGlzIGVtcHR5XCIpIH19XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWdyZXkgZm9udDEyXCI+XG4gICAgICAgICAgICB7eyAkdChcIllvdSBkb24ndCBoYXZlIGFueSBvcmRlcnMgaGVyZSEgbGV0J3MgY2hhbmdlIHRoYXQhXCIpIH19XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICAgIDxDYXJ0TWVyY2hhbnRJbmZvXG4gICAgICAgICAgcmVmPVwiY2FydF9tZXJjaGFudGluZm9cIlxuICAgICAgICAgIDpzaG93X3RyYW5zaW5mbz1cInRydWVcIlxuICAgICAgICAgIEBvbi1jbGlja2NoYW5nZT1cIm9uQ2xpY2tjaGFuZ2VcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxkaXZcbiAgICAgICAgICB2LWlmPVwiIUNhcnRTdG9yZS5jYW5Qcm9jZWVkICYmICFDYXJ0U3RvcmUuY2FydF9sb2FkaW5nXCJcbiAgICAgICAgICBjbGFzcz1cInEtcGwtbWQgcS1wci1tZFwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cInEtcGEtbWQgcmFkaXVzOCBmb250MTJcIlxuICAgICAgICAgICAgc3R5bGU9XCJib3R0b206IDUxcHhcIlxuICAgICAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICAgICAnYmctZ3JleTYwMCB0ZXh0LWdyZXkzMDAnOiAkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgICAgICdiZy15ZWxsb3cgdGV4dC1kYXJrJzogISRxLmRhcmsubW9kZSxcbiAgICAgICAgICAgIH1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt7IENhcnRTdG9yZS5nZXRFcnJvck1zZyB9fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8Q2FydERldGFpbHNcbiAgICAgICAgICByZWY9XCJjYXJ0X2RldGFpbHNcIlxuICAgICAgICAgIDppc19jaGVja291dD1cInRydWVcIlxuICAgICAgICAgIDpwYXlsb2FkPVwicGF5bG9hZFwiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPHEtbGlzdFxuICAgICAgICAgIHYtaWY9XCIhQ2FydFN0b3JlLmNhcnRfbG9hZGluZyAmJiBEYXRhU3RvcmUuZW5hYmxlZF9pbmNsdWRlX3V0ZW5zaWxzXCJcbiAgICAgICAgICBjbGFzcz1cImJvcmRlci1ncmV5LXRvcFwiXG4gICAgICAgID5cbiAgICAgICAgICA8cS1pdGVtPlxuICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC13ZWlnaHQtYm9sZCBmb250MTZcIj57eyAkdChcIkN1dGxlcnlcIikgfX08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtZ3JleVwiPlxuICAgICAgICAgICAgICAgIHt7ICR0KFwiSW5jbHVkZSB1dGVuc2lscywgbmFwa2lucywgZXRjLlwiKSB9fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZT5cbiAgICAgICAgICAgICAgPHEtdG9nZ2xlXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImluY2x1ZGVfdXRlbnNpbHNcIlxuICAgICAgICAgICAgICAgIEB1cGRhdGU6bW9kZWwtdmFsdWU9XCJzZXRVdGVuc2lsXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgIDwvcS1saXN0PlxuXG4gICAgICAgIDxESVYgdi1pZj1cIkNhcnRTdG9yZS5oYXNJdGVtXCIgY2xhc3M9XCJxLXBsLW1kIHEtcHItbWQgYm9yZGVyLWdyZXktdG9wXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBqdXN0aWZ5LWVuZFwiPlxuICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICAgICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXk2MDAnIDogJ215Z3JleSdcIlxuICAgICAgICAgICAgICA6dGV4dC1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICdncmV5J1wiXG4gICAgICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJyYWRpdXM4IHEtbXQtc20gcS1tYi1tZFwiXG4gICAgICAgICAgICAgIDp0bz1cIntcbiAgICAgICAgICAgICAgICBuYW1lOiAnbWVudScsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7IHNsdWc6IENhcnRTdG9yZS5jYXJ0X21lcmNoYW50LnNsdWcgfSxcbiAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxxLWljb24gbmFtZT1cImxhcyBsYS1wbHVzXCIgc2l6ZT1cIjE1cHhcIj48L3EtaWNvbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInEtcGwtc21cIj57eyAkdChcIkFkZCBtb3JlIGl0ZW1zXCIpIH19PC9kaXY+XG4gICAgICAgICAgICA8L3EtYnRuPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPFNpbWlsYXJJdGVtc1xuICAgICAgICAgICAgdi1pZj1cIkNhcnRTdG9yZS5jYXJ0X21lcmNoYW50Lm1lcmNoYW50X2lkXCJcbiAgICAgICAgICAgIHJlZj1cInNpbWlsYXJfaXRlbXNcIlxuICAgICAgICAgICAgOnRpdGxlPVwiJHQoJ01vc3QgT3JkZXIgSXRlbXMnKVwiXG4gICAgICAgICAgICA6bWVyY2hhbnRfaWQ9XCJDYXJ0U3RvcmUuY2FydF9tZXJjaGFudC5tZXJjaGFudF9pZFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9ESVY+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvcS1wYWdlPlxuICA8L3EtcHVsbC10by1yZWZyZXNoPlxuXG4gIDxxLWlubmVyLWxvYWRpbmdcbiAgICA6c2hvd2luZz1cIkNhcnRTdG9yZS5jYXJ0X3JlbG9hZGluZ1wiXG4gICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICBzaXplPVwibWRcIlxuICAgIGxhYmVsLWNsYXNzPVwiZGFya1wiXG4gIC8+XG5cbiAgPHEtZm9vdGVyXG4gICAgdi1pZj1cIkNhcnRTdG9yZS5pdGVtc19jb3VudCA+IDBcIlxuICAgIHJldmVhbFxuICAgIGNsYXNzPVwicS1wbC1tZCBxLXByLW1kIHEtcGItc20gcS1wdC1zbSB0ZXh0LWRhcmtcIlxuICAgIDpjbGFzcz1cIntcbiAgICAgICdiZy1wcmltYXJ5JzogIUNhcnRTdG9yZS5jYXJ0X3JlbG9hZGluZyxcbiAgICAgICdiZy1ncmV5LTUnOiBDYXJ0U3RvcmUuY2FydF9yZWxvYWRpbmcsXG4gICAgfVwiXG4gID5cbiAgICA8cS1idG5cbiAgICAgIEBjbGljaz1cImNoZWNrQmVmb3JlQ2hlY2tvdXRcIlxuICAgICAgOmxvYWRpbmc9XCJDYXJ0U3RvcmUuY2FydF9sb2FkaW5nXCJcbiAgICAgIDpkaXNhYmxlPVwiIUNhcnRTdG9yZS5jYW5Qcm9jZWVkXCJcbiAgICAgIHVuZWxldmF0ZWRcbiAgICAgIHRleHQtY29sb3I9XCJ3aGl0ZVwiXG4gICAgICBuby1jYXBzXG4gICAgICBjbGFzcz1cInJhZGl1czEwIGZpdFwiXG4gICAgICA6Y29sb3I9XCJ7XG4gICAgICAgIHByaW1hcnk6ICFDYXJ0U3RvcmUuY2FydF9yZWxvYWRpbmcsXG4gICAgICAgICdncmV5LTUnOiBDYXJ0U3RvcmUuY2FydF9yZWxvYWRpbmcsXG4gICAgICB9XCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZml0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXdlaWdodC1ib2xkIGZvbnQxN1wiPnt7ICR0KFwiQ2hlY2tvdXRcIikgfX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGQgZm9udDE2XCI+XG4gICAgICAgICAge3sgQ2FydFN0b3JlLmNhcnRfc3VidG90YWwudmFsdWUgfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3EtYnRuPlxuICA8L3EtZm9vdGVyPlxuXG4gIDxEZWxpdmVyeURldGFpbHNcbiAgICByZWY9XCJkZWxpdmVyeV9kZXRhaWxzXCJcbiAgICA6YmFja191cmw9XCJiYWNrX3VybFwiXG4gICAgQHNob3ctc2NoZWQ9XCJzaG93U2NoZWRcIlxuICAgIEBhZnRlci1zYXZldHJhbnM9XCJhZnRlclNhdmV0cmFuc1wiXG4gICAgQGFmdGVyLXNhdmV0cmFuc3R5cGU9XCJhZnRlclNhdmV0cmFuc3R5cGVcIlxuICAgIEBhZnRlci1zZXRwbGFjZWlkPVwiYWZ0ZXJTZXRwbGFjZWlkXCJcbiAgLz5cbiAgPERlbGl2ZXJ5U2NoZWRcbiAgICByZWY9XCJkZWxpdmVyeV9zY2hlZFwiXG4gICAgOnNsdWc9XCJDYXJ0U3RvcmUuY2FydF9tZXJjaGFudC5zbHVnXCJcbiAgICBAYWZ0ZXItc2F2ZXRyYW5zPVwiYWZ0ZXJTYXZldHJhbnNcIlxuICAvPlxuXG4gIDx0ZW1wbGF0ZSB2LWlmPVwiZ2V0TWVyY2hhbnRVVUlEXCI+XG4gICAgPENvbXBvbmVudHNSZWFsdGltZVxuICAgICAgcmVmPVwicmVhbHRpbWVcIlxuICAgICAgZ2V0ZXZlbnQ9XCJjYXJ0XCJcbiAgICAgIDpzdWJzY3JpYmVfdG89XCJnZXRNZXJjaGFudFVVSURcIlxuICAgICAgQGFmdGVyLXJlY2VpdmU9XCJhZnRlclJlY2VpdmVcIlxuICAgID5cbiAgICA8L0NvbXBvbmVudHNSZWFsdGltZT5cbiAgPC90ZW1wbGF0ZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBkZWZpbmVBc3luY0NvbXBvbmVudCB9IGZyb20gXCJ2dWVcIjtcbmltcG9ydCB7IHVzZUNhcnRTdG9yZSB9IGZyb20gXCJzdG9yZXMvQ2FydFN0b3JlXCI7XG4vL2ltcG9ydCB7IHVzZVRyYW5zYWN0aW9uU3RvcmUgfSBmcm9tIFwic3RvcmVzL1RyYW5zYWN0aW9uLmpzXCI7XG5pbXBvcnQgQVBJaW50ZXJmYWNlIGZyb20gXCJzcmMvYXBpL0FQSWludGVyZmFjZVwiO1xuaW1wb3J0IHsgdXNlRGVsaXZlcnlzY2hlZFN0b3JlIH0gZnJvbSBcInN0b3Jlcy9EZWxpdmVyeVNjaGVkXCI7XG5pbXBvcnQgeyB1c2VEYXRhU3RvcmUgfSBmcm9tIFwic3RvcmVzL0RhdGFTdG9yZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiQ2FydFBhZ2VcIixcbiAgY29tcG9uZW50czoge1xuICAgIENhcnRNZXJjaGFudEluZm86IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+XG4gICAgICBpbXBvcnQoXCJjb21wb25lbnRzL0NhcnRNZXJjaGFudEluZm8udnVlXCIpXG4gICAgKSxcbiAgICBDYXJ0RGV0YWlsczogZGVmaW5lQXN5bmNDb21wb25lbnQoKCkgPT5cbiAgICAgIGltcG9ydChcImNvbXBvbmVudHMvQ2FydERldGFpbHMudnVlXCIpXG4gICAgKSxcbiAgICBEZWxpdmVyeURldGFpbHM6IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+XG4gICAgICBpbXBvcnQoXCJjb21wb25lbnRzL0RlbGl2ZXJ5RGV0YWlscy52dWVcIilcbiAgICApLFxuICAgIERlbGl2ZXJ5U2NoZWQ6IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+XG4gICAgICBpbXBvcnQoXCJjb21wb25lbnRzL0RlbGl2ZXJ5U2NoZWQudnVlXCIpXG4gICAgKSxcbiAgICBTaW1pbGFySXRlbXM6IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+XG4gICAgICBpbXBvcnQoXCJjb21wb25lbnRzL1NpbWlsYXJJdGVtcy52dWVcIilcbiAgICApLFxuICAgIENvbXBvbmVudHNSZWFsdGltZTogZGVmaW5lQXN5bmNDb21wb25lbnQoKCkgPT5cbiAgICAgIGltcG9ydChcImNvbXBvbmVudHMvQ29tcG9uZW50c1JlYWx0aW1lLnZ1ZVwiKVxuICAgICksXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBheWxvYWQ6IFtcbiAgICAgICAgXCJpdGVtc1wiLFxuICAgICAgICBcInN1YnRvdGFsXCIsXG4gICAgICAgIFwiZGlzdGFuY2VfbG9jYWxcIixcbiAgICAgICAgXCJpdGVtc19jb3VudFwiLFxuICAgICAgICBcIm1lcmNoYW50X2luZm9cIixcbiAgICAgICAgXCJjaGVja19vcGVuaW5nXCIsXG4gICAgICAgIFwidHJhbnNhY3Rpb25faW5mb1wiLFxuICAgICAgXSxcbiAgICAgIGJhY2tfdXJsOiBcIi9jYXJ0P3JlZnJlc2g9MVwiLFxuICAgICAgbGFzdFBhdGg6IFwiXCIsXG4gICAgICBkYXRhX3NsaWRlOiB7fSxcbiAgICAgIGluY2x1ZGVfdXRlbnNpbHM6IGZhbHNlLFxuICAgIH07XG4gIH0sXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IENhcnRTdG9yZSA9IHVzZUNhcnRTdG9yZSgpO1xuICAgIGNvbnN0IERlbGl2ZXJ5c2NoZWRTdG9yZSA9IHVzZURlbGl2ZXJ5c2NoZWRTdG9yZSgpO1xuICAgIGNvbnN0IERhdGFTdG9yZSA9IHVzZURhdGFTdG9yZSgpO1xuICAgIHJldHVybiB7IENhcnRTdG9yZSwgRGVsaXZlcnlzY2hlZFN0b3JlLCBEYXRhU3RvcmUgfTtcbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLkNhcnRTdG9yZS5nZXRDYXJ0KHRydWUsIHRoaXMucGF5bG9hZCk7XG5cbiAgICBjb25zdCBpbmNsdWRlVXRlbnNpbHMgPSBBUElpbnRlcmZhY2UuZ2V0U3RvcmFnZShcImluY2x1ZGVfdXRlbnNpbHNcIik7XG4gICAgaWYgKCFBUElpbnRlcmZhY2UuZW1wdHkoaW5jbHVkZVV0ZW5zaWxzKSkge1xuICAgICAgdGhpcy5pbmNsdWRlX3V0ZW5zaWxzID0gaW5jbHVkZVV0ZW5zaWxzO1xuICAgIH1cblxuICAgIHRoaXMuRGVsaXZlcnlzY2hlZFN0b3JlLmdldERlbGl2ZXJ5U2NoZWQoXG4gICAgICBBUElpbnRlcmZhY2UuZ2V0U3RvcmFnZShcImNhcnRfdXVpZFwiKSxcbiAgICAgIEFQSWludGVyZmFjZS5nZXRTdG9yYWdlKFwibWVyY2hhbnRfc2x1Z1wiKSxcbiAgICAgIFwiY2FydFwiXG4gICAgKTtcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmxhc3RQYXRoID0gdGhpcy4kcm91dGVyLm9wdGlvbnMuaGlzdG9yeS5zdGF0ZS5iYWNrO1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGdldE1lcmNoYW50VVVJRCgpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLkNhcnRTdG9yZS5jYXJ0X21lcmNoYW50KS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLkNhcnRTdG9yZS5jYXJ0X21lcmNoYW50Lm1lcmNoYW50X3V1aWQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGJhY2tQYWdlKCkge1xuICAgICAgY29uc3QgJGZpbmQgPSB0aGlzLmxhc3RQYXRoLnNlYXJjaChcIm1hcFwiKTtcbiAgICAgIGlmICgkZmluZCA+IDApIHtcbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwibWVudVwiLFxuICAgICAgICAgIHBhcmFtczogeyBzbHVnOiB0aGlzLkNhcnRTdG9yZS5jYXJ0X21lcmNoYW50LnNsdWcgfSxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiRyb3V0ZXIuYmFjaygpO1xuICAgICAgfVxuICAgIH0sXG4gICAgYWZ0ZXJTYXZldHJhbnMoKSB7XG4gICAgICB0aGlzLkNhcnRTdG9yZS5nZXRDYXJ0KGZhbHNlLCB0aGlzLnBheWxvYWQpO1xuICAgICAgY29uc29sZS5sb2coXCJhZnRlclNhdmV0cmFuc1wiKTtcbiAgICAgIHRoaXMuRGVsaXZlcnlzY2hlZFN0b3JlLmdldERlbGl2ZXJ5U2NoZWQoXG4gICAgICAgIEFQSWludGVyZmFjZS5nZXRTdG9yYWdlKFwiY2FydF91dWlkXCIpLFxuICAgICAgICBBUElpbnRlcmZhY2UuZ2V0U3RvcmFnZShcIm1lcmNoYW50X3NsdWdcIilcbiAgICAgICk7XG4gICAgfSxcbiAgICBhZnRlclNhdmV0cmFuc3R5cGUoKSB7XG4gICAgICB0aGlzLkNhcnRTdG9yZS5nZXRDYXJ0KGZhbHNlLCB0aGlzLnBheWxvYWQpO1xuICAgIH0sXG4gICAgb25DbGlja2NoYW5nZSgpIHtcbiAgICAgIHRoaXMuJHJlZnMuZGVsaXZlcnlfZGV0YWlscy5zaG93TW9kYWwodHJ1ZSk7XG4gICAgfSxcbiAgICBzaG93U2NoZWQoKSB7XG4gICAgICB0aGlzLiRyZWZzLmRlbGl2ZXJ5X2RldGFpbHMuc2hvd01vZGFsKGZhbHNlKTtcbiAgICAgIHRoaXMuJHJlZnMuZGVsaXZlcnlfc2NoZWQuc2hvd1NjaGVkKHRydWUpO1xuICAgIH0sXG4gICAgb25SaWdodChkZXRhaWxzLCBpbmRleCkge1xuICAgICAgdGhpcy5kYXRhX3NsaWRlW2luZGV4XSA9IGRldGFpbHM7XG4gICAgfSxcbiAgICBjbG9zZVNsaWRlKGluZGV4KSB7XG4gICAgICBpZiAodGhpcy5kYXRhX3NsaWRlW2luZGV4XSkge1xuICAgICAgICB0aGlzLmRhdGFfc2xpZGVbaW5kZXhdLnJlc2V0KCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBzZXRVdGVuc2lsKHZhbHVlKSB7XG4gICAgICBBUElpbnRlcmZhY2Uuc2V0U3RvcmFnZShcImluY2x1ZGVfdXRlbnNpbHNcIiwgdmFsdWUpO1xuICAgIH0sXG4gICAgcmVmcmVzaChkb25lKSB7XG4gICAgICB0aGlzLkNhcnRTdG9yZS5nZXRDYXJ0KGZhbHNlLCB0aGlzLnBheWxvYWQpO1xuICAgICAgZG9uZSgpO1xuICAgIH0sXG4gICAgY2hlY2tCZWZvcmVDaGVja291dCgpIHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuQ2FydFN0b3JlLnRyYW5zYWN0aW9uX2luZm8ud2hlbnRvX2RlbGl2ZXIpO1xuICAgICAgaWYgKHRoaXMuQ2FydFN0b3JlLnRyYW5zYWN0aW9uX2luZm8ud2hlbnRvX2RlbGl2ZXIgPT0gXCJzY2hlZHVsZVwiKSB7XG4gICAgICAgIGxldCAkbWVzc2FnZSA9XG4gICAgICAgICAgXCJZb3UgYXJlIHBsYWNpbmcgYW5kIG9yZGVyIGZvciB7ZGF0ZX0gYXQge3RpbWV9LiBXb3VsZCB5b3UgbGlrZSB0byBjb250aW51ZT9cIjtcblxuICAgICAgICAkbWVzc2FnZSA9ICRtZXNzYWdlLnJlcGxhY2UoXG4gICAgICAgICAgXCJ7ZGF0ZX1cIixcbiAgICAgICAgICB0aGlzLkNhcnRTdG9yZS50cmFuc2FjdGlvbl9pbmZvLmRlbGl2ZXJ5X2RhdGVfcHJldHR5XG4gICAgICAgICk7XG4gICAgICAgICRtZXNzYWdlID0gJG1lc3NhZ2UucmVwbGFjZShcbiAgICAgICAgICBcInt0aW1lfVwiLFxuICAgICAgICAgIHRoaXMuQ2FydFN0b3JlLnRyYW5zYWN0aW9uX2luZm8uZGVsaXZlcnlfdGltZS5wcmV0dHlfdGltZVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuJHFcbiAgICAgICAgICAuZGlhbG9nKHtcbiAgICAgICAgICAgIHRpdGxlOiBcIk9yZGVyaW5nIGZvciBsYXRlcj9cIixcbiAgICAgICAgICAgIG1lc3NhZ2U6ICRtZXNzYWdlLFxuICAgICAgICAgICAgcGVyc2lzdGVudDogdHJ1ZSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcInN0YW5kYXJkXCIsXG4gICAgICAgICAgICB0cmFuc2l0aW9uU2hvdzogXCJmYWRlXCIsXG4gICAgICAgICAgICB0cmFuc2l0aW9uSGlkZTogXCJmYWRlXCIsXG4gICAgICAgICAgICBvazoge1xuICAgICAgICAgICAgICB1bmVsZXZhdGVkOiB0cnVlLFxuICAgICAgICAgICAgICBjb2xvcjogXCJwcmltYXJ5XCIsXG4gICAgICAgICAgICAgIHJvdW5kZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICBcInRleHQtY29sb3JcIjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICBzaXplOiBcIm1kXCIsXG4gICAgICAgICAgICAgIGxhYmVsOiBcIkNvbnRpbnVlXCIsXG4gICAgICAgICAgICAgIFwibm8tY2Fwc1wiOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhbmNlbDoge1xuICAgICAgICAgICAgICB1bmVsZXZhdGVkOiB0cnVlLFxuICAgICAgICAgICAgICByb3VuZGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgY29sb3I6IFwiZ3JleS0zXCIsXG4gICAgICAgICAgICAgIFwidGV4dC1jb2xvclwiOiBcImJsYWNrXCIsXG4gICAgICAgICAgICAgIHNpemU6IFwibWRcIixcbiAgICAgICAgICAgICAgbGFiZWw6IFwiQ2FuY2VsXCIsXG4gICAgICAgICAgICAgIFwibm8tY2Fwc1wiOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5vbk9rKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKFwiL2NoZWNrb3V0XCIpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLm9uT2soKCkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJz4+Pj4gc2Vjb25kIE9LIGNhdGNoZXInKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLm9uQ2FuY2VsKCgpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCc+Pj4+IENhbmNlbCcpXG4gICAgICAgICAgfSlcbiAgICAgICAgICAub25EaXNtaXNzKCgpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdJIGFtIHRyaWdnZXJlZCBvbiBib3RoIE9LIGFuZCBDYW5jZWwnKVxuICAgICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goXCIvY2hlY2tvdXRcIik7XG4gICAgICB9XG4gICAgfSxcbiAgICBhZnRlclNldHBsYWNlaWQoKSB7XG4gICAgICB0aGlzLkNhcnRTdG9yZS5nZXRDYXJ0KHRydWUsIHRoaXMucGF5bG9hZCk7XG4gICAgfSxcbiAgICBhZnRlclJlY2VpdmUoZGF0YSkge1xuICAgICAgY29uc29sZS5sb2coXCJhZnRlclJlY2VpdmVcIik7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgIGxldCBtZXNzYWdlID0gSlNPTi5wYXJzZShkYXRhLm1lc3NhZ2UpO1xuICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgICBBUElpbnRlcmZhY2UuZmV0Y2hEYXRhUG9zdChcbiAgICAgICAgXCJ2YWxpZGF0ZUNhcnRJdGVtc1wiLFxuICAgICAgICBcIml0ZW1faWQ9XCIgK1xuICAgICAgICAgIG1lc3NhZ2UuaXRlbV9pZCArXG4gICAgICAgICAgXCImY2FydF91dWlkPVwiICtcbiAgICAgICAgICBBUElpbnRlcmZhY2UuZ2V0U3RvcmFnZShcImNhcnRfdXVpZFwiKVxuICAgICAgKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIC8vXG4gICAgICAgICAgdGhpcy4kcVxuICAgICAgICAgICAgLmRpYWxvZyh7XG4gICAgICAgICAgICAgIHRpdGxlOiB0aGlzLiR0KFwiSXRlbXNcIiksXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IGRhdGEubXNnLFxuICAgICAgICAgICAgICBwZXJzaXN0ZW50OiB0cnVlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbk9rKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5DYXJ0U3RvcmUuZ2V0Q2FydCh0cnVlLCB0aGlzLnBheWxvYWQpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbkNhbmNlbCgoKSA9PiB7XG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdDYW5jZWwnKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbkRpc21pc3MoKCkgPT4ge1xuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnSSBhbSB0cmlnZ2VyZWQgb24gYm90aCBPSyBhbmQgQ2FuY2VsJylcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIC8vXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAvL1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIC8vXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgLy9cbiAgfSxcbn07XG48L3NjcmlwdD5cbiJdLCJmaWxlIjoiYXNzZXRzL0NhcnRQYWdlLmIwOTdhOGVkLmpzIn0=
