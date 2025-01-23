import { _ as _export_sfc, l as defineAsyncComponent, m as APIinterface, n as resolveComponent, p as openBlock, q as createBlock, t as withCtx, f as createVNode, Y as QBtn, a6 as createTextVNode, Z as toDisplayString, a7 as normalizeClass, V as createElementBlock, U as createBaseVNode, a8 as QCard, a9 as QCardSection, F as Fragment, X as renderList, u as __vitePreload, a0 as Transition, aa as withDirectives, ab as Ripple, ac as QItem, ad as QItemSection, at as QIcon } from "./index.61ed5618.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QInnerLoading } from "./QInnerLoading.abe2afe6.js";
import { Q as QImg } from "./QImg.6c27044c.js";
import { Q as QList } from "./QList.b69a7e5b.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import { Q as QPullToRefresh } from "./QPullToRefresh.3d10c02d.js";
import { u as usePaymentStore } from "./PaymentStore.773648e1.js";
import "./QResizeObserver.d08dce3c.js";
import "./touch.96e0ae37.js";
import "./selection.50b4cb0c.js";
import "./format.7f7370d3.js";
const _sfc_main = {
  name: "PaymentNew",
  data() {
    return {
      params: ""
    };
  },
  setup() {
    const PaymentStore = usePaymentStore();
    return { PaymentStore };
  },
  components: {
    codComponents: defineAsyncComponent(
      () => __vitePreload(() => import("./codComponents.4b19fa54.js"), true ? ["assets/codComponents.4b19fa54.js","assets/QSpace.f164c087.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QToolbar.c8fc6962.js"] : void 0)
    ),
    ocrComponents: defineAsyncComponent(
      () => __vitePreload(() => import("./ocrComponents.f67c4b9a.js"), true ? ["assets/ocrComponents.f67c4b9a.js","assets/QSpace.f164c087.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QToolbar.c8fc6962.js","assets/QForm.7ded9d38.js"] : void 0)
    ),
    StripeComponents: defineAsyncComponent(
      () => __vitePreload(() => import("./StripeComponents.3f1aad72.js"), true ? ["assets/StripeComponents.3f1aad72.js","assets/QSpace.f164c087.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QToolbar.c8fc6962.js","assets/QInnerLoading.abe2afe6.js","assets/QForm.7ded9d38.js"] : void 0)
    ),
    PaypalComponents: defineAsyncComponent(
      () => __vitePreload(() => import("./PaypalComponents.d16b4f1c.js"), true ? ["assets/PaypalComponents.d16b4f1c.js","assets/QSpace.f164c087.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QToolbar.c8fc6962.js","assets/ClosePopup.9d17b53c.js","assets/index.d0b40bd3.js"] : void 0)
    ),
    RazorpayComponents: defineAsyncComponent(
      () => __vitePreload(() => import("./RazorpayComponents.fa2381c3.js"), true ? ["assets/RazorpayComponents.fa2381c3.js","assets/QSpace.f164c087.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QToolbar.c8fc6962.js","assets/index.d0b40bd3.js"] : void 0)
    ),
    MercadopagoComponents: defineAsyncComponent(
      () => __vitePreload(() => import("./MercadopagoComponents.392597c1.js"), true ? ["assets/MercadopagoComponents.392597c1.js","assets/QSpace.f164c087.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QToolbar.c8fc6962.js","assets/QSelect.311187d6.js","assets/QChip.f183a4f1.js","assets/QItemLabel.a9365c5b.js","assets/QMenu.8e482cd8.js","assets/selection.50b4cb0c.js","assets/rtl.f3ed811c.js","assets/format.7f7370d3.js","assets/QForm.7ded9d38.js","assets/ClosePopup.9d17b53c.js","assets/index.d0b40bd3.js"] : void 0)
    ),
    BankComponents: defineAsyncComponent(
      () => __vitePreload(() => import("./BankComponents.914e35aa.js"), true ? ["assets/BankComponents.914e35aa.js","assets/QSpace.f164c087.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QToolbar.c8fc6962.js"] : void 0)
    ),
    PaydeliveryComponents: defineAsyncComponent(
      () => __vitePreload(() => import("./PaydeliveryComponents.4c75cc79.js"), true ? ["assets/PaydeliveryComponents.4c75cc79.js","assets/QToolbarTitle.03eaf2d6.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QToolbar.c8fc6962.js","assets/QInnerLoading.abe2afe6.js","assets/QImg.6c27044c.js"] : void 0)
    )
  },
  created() {
    if (this.$route.query.redirect == "/checkout") {
      this.params = "cart_uuid=" + APIinterface.getStorage("cart_uuid");
    }
    this.PaymentStore.PaymentMethod(null, this.params);
  },
  methods: {
    refresh(done) {
      this.PaymentStore.PaymentMethod(done, this.params);
    },
    onchoosePayment(data) {
      try {
        this.$refs[data.payment_code].showPaymentForm();
      } catch (error) {
        APIinterface.notify("grey-8", error, "error_outline", this.$q);
      }
    },
    afterAddpayment() {
      if (this.$route.query.redirect == "/checkout") {
        this.$router.push("/checkout?refresh_payment=1");
      } else {
        this.$router.back();
      }
    }
  }
};
const _hoisted_1 = {
  key: 0,
  class: "min-height-inherit flex flex-center"
};
const _hoisted_2 = { class: "full-width text-center q-pb-xl" };
const _hoisted_3 = { class: "text-h5 text-weight-bold" };
const _hoisted_4 = { class: "text-grey font12" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_codComponents = resolveComponent("codComponents");
  const _component_ocrComponents = resolveComponent("ocrComponents");
  const _component_StripeComponents = resolveComponent("StripeComponents");
  const _component_PaypalComponents = resolveComponent("PaypalComponents");
  const _component_RazorpayComponents = resolveComponent("RazorpayComponents");
  const _component_MercadopagoComponents = resolveComponent("MercadopagoComponents");
  const _component_BankComponents = resolveComponent("BankComponents");
  const _component_PaydeliveryComponents = resolveComponent("PaydeliveryComponents");
  return openBlock(), createBlock(QPullToRefresh, { onRefresh: $options.refresh }, {
    default: withCtx(() => [
      createVNode(QHeader, {
        reveal: "",
        "reveal-offset": "50",
        class: normalizeClass({
          "bg-mydark text-white": _ctx.$q.dark.mode,
          "bg-grey-1 text-dark": !_ctx.$q.dark.mode
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
                  createTextVNode(toDisplayString(_ctx.$t("New Payment")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["class"]),
      createVNode(QPage, {
        class: normalizeClass(["q-pl-md q-pr-md", {
          "flex flex-center": !$setup.PaymentStore.hasData && !$setup.PaymentStore.loading2,
          "row items-stretch ": $setup.PaymentStore.hasData && !$setup.PaymentStore.loading2,
          "bg-mydark text-white": _ctx.$q.dark.mode,
          "bg-grey-1 text-dark": !_ctx.$q.dark.mode
        }])
      }, {
        default: withCtx(() => [
          !$setup.PaymentStore.hasData && !$setup.PaymentStore.loading2 ? (openBlock(), createElementBlock("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("div", _hoisted_3, toDisplayString(_ctx.$t("No Payment available")), 1),
              createBaseVNode("p", _hoisted_4, toDisplayString(_ctx.$t("There is no payment available")), 1)
            ])
          ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            $setup.PaymentStore.loading2 ? (openBlock(), createBlock(QInnerLoading, {
              key: 0,
              showing: true,
              color: "primary",
              size: "md",
              "label-class": "dark",
              class: "transparent"
            })) : (openBlock(), createBlock(QCard, {
              key: 1,
              flat: "",
              class: normalizeClass(["radius8 col-12", {
                "bg-mydark ": _ctx.$q.dark.mode,
                "bg-white ": !_ctx.$q.dark.mode
              }])
            }, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    createVNode(QList, null, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.PaymentStore.payment_list, (items) => {
                          return openBlock(), createBlock(Transition, {
                            key: items.payment_code,
                            appear: "",
                            "leave-active-class": "animated fadeOut"
                          }, {
                            default: withCtx(() => [
                              withDirectives((openBlock(), createBlock(QItem, {
                                onClick: ($event) => $options.onchoosePayment(items),
                                clickable: "",
                                class: "border-grey radius10 q-mb-sm"
                              }, {
                                default: withCtx(() => [
                                  createVNode(QItemSection, { avatar: "" }, {
                                    default: withCtx(() => [
                                      items.logo_type === "icon" ? (openBlock(), createBlock(QIcon, {
                                        key: 0,
                                        color: "warning",
                                        name: "credit_card"
                                      })) : (openBlock(), createBlock(QImg, {
                                        key: 1,
                                        src: items.logo_image,
                                        fit: "contain",
                                        style: { "height": "35px", "max-width": "35px" }
                                      }, null, 8, ["src"]))
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(QItemSection, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(items.payment_name), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["onClick"])), [
                                [Ripple]
                              ])
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["class"]))
          ], 64)),
          createVNode(_component_codComponents, {
            ref: "cod",
            payment_code: "cod",
            title: _ctx.$t("Add Cash On delivery"),
            label: {
              submit: this.$t("Add Cash"),
              notes: this.$t(
                "Cash on Delivery or COD is a payment method that allows pay for the items you have ordered only when it gets delivered."
              )
            },
            payment_credentials: $setup.PaymentStore.payment_credentials,
            onAfterAddpayment: $options.afterAddpayment
          }, null, 8, ["title", "label", "payment_credentials", "onAfterAddpayment"]),
          createVNode(_component_ocrComponents, {
            ref: "ocr",
            payment_code: "ocr",
            title: _ctx.$t("Add Credit card"),
            label: {
              submit: this.$t("Add Card"),
              notes: ""
            },
            payment_credentials: $setup.PaymentStore.payment_credentials,
            onAfterAddpayment: $options.afterAddpayment
          }, null, 8, ["title", "label", "payment_credentials", "onAfterAddpayment"]),
          createVNode(_component_StripeComponents, {
            ref: "stripe",
            payment_code: "stripe",
            title: _ctx.$t("Add Stripe"),
            label: {
              submit: this.$t("Add Stripe"),
              notes: this.$t("Add your card account")
            },
            payment_credentials: $setup.PaymentStore.payment_credentials,
            onAfterAddpayment: $options.afterAddpayment
          }, null, 8, ["title", "label", "payment_credentials", "onAfterAddpayment"]),
          createVNode(_component_PaypalComponents, {
            ref: "paypal",
            payment_code: "paypal",
            title: _ctx.$t("Add Paypal"),
            label: {
              submit: this.$t("Add Paypal"),
              notes: this.$t("Pay using your paypal account"),
              payment_title: this.$t("Pay using Paypal"),
              payment_subtitle: this.$t(
                "You will re-direct to paypal account to login to your account."
              )
            },
            payment_credentials: $setup.PaymentStore.payment_credentials,
            onAfterAddpayment: $options.afterAddpayment
          }, null, 8, ["title", "label", "payment_credentials", "onAfterAddpayment"]),
          createVNode(_component_RazorpayComponents, {
            ref: "razorpay",
            payment_code: "razorpay",
            title: _ctx.$t("Add Razorpay"),
            label: {
              submit: this.$t("Submit"),
              notes: this.$t("Pay using your Razorpay account")
            },
            payment_credentials: $setup.PaymentStore.payment_credentials,
            onAfterAddpayment: $options.afterAddpayment
          }, null, 8, ["title", "label", "payment_credentials", "onAfterAddpayment"]),
          createVNode(_component_MercadopagoComponents, {
            ref: "mercadopago",
            payment_code: "mercadopago",
            title: _ctx.$t("Add Mercadopago"),
            label: {
              submit: this.$t("Add Mercadopago"),
              notes: this.$t("Pay using your mercadopago account")
            },
            payment_credentials: $setup.PaymentStore.payment_credentials,
            onAfterAddpayment: $options.afterAddpayment
          }, null, 8, ["title", "label", "payment_credentials", "onAfterAddpayment"]),
          createVNode(_component_BankComponents, {
            ref: "bank",
            payment_code: "bank",
            title: _ctx.$t("Add Bank Transfer"),
            label: {
              submit: this.$t("Add Payment"),
              notes: this.$t("Pay using bank Transfer")
            },
            payment_credentials: $setup.PaymentStore.payment_credentials,
            onAfterAddpayment: $options.afterAddpayment
          }, null, 8, ["title", "label", "payment_credentials", "onAfterAddpayment"]),
          createVNode(_component_PaydeliveryComponents, {
            ref: "paydelivery",
            payment_code: "paydelivery",
            title: _ctx.$t("Add Payment"),
            label: {
              submit: this.$t("Saved"),
              notes: this.$t("Pay using different card")
            },
            payment_credentials: $setup.PaymentStore.payment_credentials,
            onAfterAddpayment: $options.afterAddpayment
          }, null, 8, ["title", "label", "payment_credentials", "onAfterAddpayment"])
        ]),
        _: 1
      }, 8, ["class"])
    ]),
    _: 1
  }, 8, ["onRefresh"]);
}
var PaymentNew = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "PaymentNew.vue"]]);
export { PaymentNew as default };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUEwTkEsTUFBSyxZQUFVO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQ0wsV0FBTztBQUFBLE1BQ0wsUUFBUTtBQUFBO0VBRVg7QUFBQSxFQUNELFFBQVE7QUFDTixVQUFNLGVBQWU7QUFDckIsV0FBTyxFQUFFO0VBQ1Y7QUFBQSxFQUNELFlBQVk7QUFBQSxJQUNWLGVBQWU7QUFBQSxNQUFxQixNQUNsQywyQkFBTyxnQ0FBOEI7QUFBQSxJQUN0QztBQUFBLElBQ0QsZUFBZTtBQUFBLE1BQXFCLE1BQ2xDLDJCQUFPLGdDQUE4QjtBQUFBLElBQ3RDO0FBQUEsSUFDRCxrQkFBa0I7QUFBQSxNQUFxQiwwQkFDckMsT0FBTyxtQ0FBaUM7QUFBQSxJQUN6QztBQUFBLElBQ0Qsa0JBQWtCO0FBQUEsTUFBcUIsMEJBQ3JDLE9BQU8sbUNBQWlDO0FBQUEsSUFDekM7QUFBQSxJQUNELG9CQUFvQjtBQUFBLE1BQXFCLDBCQUN2QyxPQUFPLHFDQUFtQztBQUFBLElBQzNDO0FBQUEsSUFDRCx1QkFBdUI7QUFBQSxNQUFxQiwwQkFDMUMsT0FBTyx3Q0FBc0M7QUFBQSxJQUM5QztBQUFBLElBQ0QsZ0JBQWdCO0FBQUEsTUFBcUIsTUFDbkMsMkJBQU8saUNBQStCO0FBQUEsSUFDdkM7QUFBQSxJQUNELHVCQUF1QjtBQUFBLE1BQXFCLDBCQUMxQyxPQUFPLHdDQUFzQztBQUFBLElBQzlDO0FBQUEsRUFFRjtBQUFBLEVBQ0QsVUFBVTtBQUNSLFFBQUksS0FBSyxPQUFPLE1BQU0sWUFBWSxhQUFhO0FBQzdDLFdBQUssU0FBUyxlQUFlLGFBQWEsV0FBVyxXQUFXO0FBQUEsSUFDbEU7QUFDQSxTQUFLLGFBQWEsY0FBYyxNQUFNLEtBQUssTUFBTTtBQUFBLEVBQ2xEO0FBQUEsRUFDRCxTQUFTO0FBQUEsSUFDUCxRQUFRLE1BQU07QUFDWixXQUFLLGFBQWEsY0FBYyxNQUFNLEtBQUssTUFBTTtBQUFBLElBQ2xEO0FBQUEsSUFDRCxnQkFBZ0IsTUFBTTtBQUNwQixVQUFJO0FBQ0YsYUFBSyxNQUFNLEtBQUssY0FBYyxnQkFBZTtBQUFBLE1BQzdDLFNBQU8sT0FBUDtBQUNBLHFCQUFhLE9BQU8sVUFBVSxPQUFPLGlCQUFpQixLQUFLLEVBQUU7QUFBQSxNQUMvRDtBQUFBLElBQ0Q7QUFBQSxJQUNELGtCQUFrQjtBQUNoQixVQUFJLEtBQUssT0FBTyxNQUFNLFlBQVksYUFBYTtBQUM3QyxhQUFLLFFBQVEsS0FBSyw2QkFBNkI7QUFBQSxhQUMxQztBQUNMLGFBQUssUUFBUTtNQUNmO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFDSDs7O0VBclBhLE9BQU07O0FBQ0osNEJBQU0saUNBQWdDO0FBQ3BDLDRCQUFNLDJCQUEwQjtBQUdsQyw0QkFBTSxtQkFBa0I7Ozs7Ozs7Ozs7c0JBeENyQ0EsWUFpTm9CLHNDQWpOTyxXQUFTO0FBQUEscUJBQ2xDLE1Bc0JXO0FBQUEsTUF0QlhDLFlBc0JXO0FBQUEsUUFyQlQ7QUFBQSxRQUNBLGlCQUFjO0FBQUEsUUFDYixPQUFLQztBQUFBLGtDQUFvQyxLQUFFLEdBQUMsS0FBSztBQUFBLGtDQUFzQyxLQUFFLEdBQUMsS0FBSztBQUFBOzt5QkFLaEcsTUFhWTtBQUFBLFVBYlpELFlBYVk7QUFBQSw2QkFaVixNQVFFO0FBQUEsY0FSRkEsWUFRRTtBQUFBLGdCQVBDLFNBQUssc0NBQUUsS0FBTyxRQUFDLEtBQUk7QUFBQSxnQkFDcEI7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0EsTUFBSztBQUFBLGdCQUNMLE9BQU07QUFBQSxnQkFDTCxPQUFPLFFBQUcsS0FBSyxPQUFJO0FBQUE7Y0FFdEJBLFlBRW9CLDJDQUZxQjtBQUFBLGlDQUFDLE1BRXhDO0FBQUEsa0RBREEsS0FBRTtBQUFBOzs7Ozs7Ozs7TUFLUkEsWUF1TFM7QUFBQSxRQXRMUCx1QkFBTSxtQkFBaUI7QUFBQSxVQUNnQix5Q0FBYSxXQUFZLHFCQUFhO0FBQUEsVUFBd0MsMENBQWEsV0FBWSxxQkFBYTtBQUFBLGtDQUEwQyxLQUFFLEdBQUMsS0FBSztBQUFBLGtDQUFzQyxLQUFFLEdBQUMsS0FBSztBQUFBOzt5QkFPM1AsTUFXVztBQUFBLFVBWE0scUJBQWEsV0FBWSxxQkFBYSxZQUNyREUsZ0NBU00sT0FUTixZQVNNO0FBQUEsWUFSSkMsZ0JBT00sT0FQTixZQU9NO0FBQUEsY0FOSkEsZ0JBRU0sT0FGTixZQUVNQyxnQkFERCxLQUFFO0FBQUEsY0FFUEQsZ0JBRUksS0FGSixZQUVJQyxnQkFEQyxLQUFFO0FBQUE7OEJBTWJDLG1CQW9EV0M7QUFBQSxZQWxERCxvQkFBYSx5QkFEckJQLFlBT0U7QUFBQTtjQUxDLFNBQVM7QUFBQSxjQUNWLE9BQU07QUFBQSxjQUNOLE1BQUs7QUFBQSxjQUNMLGVBQVk7QUFBQSxjQUNaLE9BQU07QUFBQSxnQ0FJTkEsWUF1Q1M7QUFBQTtjQXRDUDtBQUFBLGNBQ0EsdUJBQU0sa0JBQWdCO0FBQUEsOEJBQ2dCLEtBQUUsR0FBQyxLQUFLO0FBQUEsOEJBQWtDLEtBQUUsR0FBQyxLQUFLO0FBQUE7OytCQUt4RixNQThCaUI7QUFBQSxnQkE5QmpCQyxZQThCaUI7QUFBQSxtQ0E3QmYsTUE0QlM7QUFBQSxvQkE1QlRBLFlBNEJTO0FBQUEsdUNBMUJMLE1BQTBDO0FBQUEseUJBRDVDRSxvQ0EwQmFJLFVBekJLLHFDQUFhLGVBQXRCLFVBQUs7OENBRGRQLFlBMEJhUTtBQUFBLDRCQXhCVixLQUFLLE1BQU07QUFBQSw0QkFDWjtBQUFBLDRCQUNBLHNCQUFtQjtBQUFBOzZDQUVuQixNQW1CUztBQUFBLDJEQW5CVFIsWUFtQlM7QUFBQSxnQ0FsQk4sU0FBSyxZQUFFLFNBQWUsZ0JBQUMsS0FBSztBQUFBLGdDQUM3QjtBQUFBLGdDQUVBLE9BQU07QUFBQTtpREFFTixNQVdpQjtBQUFBLGtDQVhqQkMsWUFXaUIsOEJBWEs7QUFBQSxxREFDcEIsTUFFVztBQUFBLHNDQUZLLE1BQU0sY0FBUyx1QkFDN0JELFlBQTZDO0FBQUE7d0NBQXJDLE9BQU07QUFBQSx3Q0FBVSxNQUFLO0FBQUEsMERBRzdCQSxZQUlFO0FBQUE7d0NBSEMsS0FBSyxNQUFNO0FBQUEsd0NBQ1osS0FBSTtBQUFBLHdDQUNKLFNBQXFDO0FBQUE7Ozs7a0NBSTNDQyxZQUF5RDtBQUFBLHFEQUF6QyxNQUF3QjtBQUFBLHNDQUFyQlEsc0NBQU0sWUFBWTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBVW5EUixZQVlFO0FBQUEsWUFYQSxLQUFJO0FBQUEsWUFDSixjQUFhO0FBQUEsWUFDWixPQUFPLEtBQUU7QUFBQSxZQUNULE9BQUs7QUFBQSwyQkFBMkIsR0FBRTtBQUFBLDBCQUFvQztBQUFBOzs7WUFNdEUscUJBQXFCLE9BQVksYUFBQztBQUFBLFlBQ2xDLG1CQUFrQixTQUFlO0FBQUE7VUFHcENBLFlBVUU7QUFBQSxZQVRBLEtBQUk7QUFBQSxZQUNKLGNBQWE7QUFBQSxZQUNaLE9BQU8sS0FBRTtBQUFBLFlBQ1QsT0FBSztBQUFBLDJCQUEyQixHQUFFO0FBQUE7O1lBSWxDLHFCQUFxQixPQUFZLGFBQUM7QUFBQSxZQUNsQyxtQkFBa0IsU0FBZTtBQUFBO1VBR3BDQSxZQVVFO0FBQUEsWUFUQSxLQUFJO0FBQUEsWUFDSixjQUFhO0FBQUEsWUFDWixPQUFPLEtBQUU7QUFBQSxZQUNULE9BQUs7QUFBQSwyQkFBMkIsR0FBRTtBQUFBLDBCQUFzQyxHQUFFO0FBQUE7WUFJMUUscUJBQXFCLE9BQVksYUFBQztBQUFBLFlBQ2xDLG1CQUFrQixTQUFlO0FBQUE7VUFHcENBLFlBY0U7QUFBQSxZQWJBLEtBQUk7QUFBQSxZQUNKLGNBQWE7QUFBQSxZQUNaLE9BQU8sS0FBRTtBQUFBLFlBQ1QsT0FBSztBQUFBLDJCQUEyQixHQUFFO0FBQUEsMEJBQXNDLEdBQUU7QUFBQSxrQ0FBaUUsR0FBRTtBQUFBLHFDQUF1RDtBQUFBOzs7WUFRcE0scUJBQXFCLE9BQVksYUFBQztBQUFBLFlBQ2xDLG1CQUFrQixTQUFlO0FBQUE7VUFHcENBLFlBVUU7QUFBQSxZQVRBLEtBQUk7QUFBQSxZQUNKLGNBQWE7QUFBQSxZQUNaLE9BQU8sS0FBRTtBQUFBLFlBQ1QsT0FBSztBQUFBLDJCQUEyQixHQUFFO0FBQUEsMEJBQWtDLEdBQUU7QUFBQTtZQUl0RSxxQkFBcUIsT0FBWSxhQUFDO0FBQUEsWUFDbEMsbUJBQWtCLFNBQWU7QUFBQTtVQUdwQ0EsWUFVRTtBQUFBLFlBVEEsS0FBSTtBQUFBLFlBQ0osY0FBYTtBQUFBLFlBQ1osT0FBTyxLQUFFO0FBQUEsWUFDVCxPQUFLO0FBQUEsMkJBQTJCLEdBQUU7QUFBQSwwQkFBMkMsR0FBRTtBQUFBO1lBSS9FLHFCQUFxQixPQUFZLGFBQUM7QUFBQSxZQUNsQyxtQkFBa0IsU0FBZTtBQUFBO1VBR3BDQSxZQVVFO0FBQUEsWUFUQSxLQUFJO0FBQUEsWUFDSixjQUFhO0FBQUEsWUFDWixPQUFPLEtBQUU7QUFBQSxZQUNULE9BQUs7QUFBQSwyQkFBMkIsR0FBRTtBQUFBLDBCQUF1QyxHQUFFO0FBQUE7WUFJM0UscUJBQXFCLE9BQVksYUFBQztBQUFBLFlBQ2xDLG1CQUFrQixTQUFlO0FBQUE7VUFHcENBLFlBV3dCO0FBQUEsWUFWdEIsS0FBSTtBQUFBLFlBQ0osY0FBYTtBQUFBLFlBQ1osT0FBTyxLQUFFO0FBQUEsWUFDVCxPQUFLO0FBQUEsMkJBQTJCLEdBQUU7QUFBQSwwQkFBaUMsR0FBRTtBQUFBO1lBSXJFLHFCQUFxQixPQUFZLGFBQUM7QUFBQSxZQUNsQyxtQkFBa0IsU0FBZTtBQUFBIiwibmFtZXMiOlsiX2NyZWF0ZUJsb2NrIiwiX2NyZWF0ZVZOb2RlIiwiX25vcm1hbGl6ZUNsYXNzIiwiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9GcmFnbWVudCIsIl9UcmFuc2l0aW9uIiwiX2NyZWF0ZVRleHRWTm9kZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9BY2NvdW50L1BheW1lbnROZXcudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHEtcHVsbC10by1yZWZyZXNoIEByZWZyZXNoPVwicmVmcmVzaFwiPlxuICAgIDxxLWhlYWRlclxuICAgICAgcmV2ZWFsXG4gICAgICByZXZlYWwtb2Zmc2V0PVwiNTBcIlxuICAgICAgOmNsYXNzPVwie1xuICAgICAgICAnYmctbXlkYXJrIHRleHQtd2hpdGUnOiAkcS5kYXJrLm1vZGUsXG4gICAgICAgICdiZy1ncmV5LTEgdGV4dC1kYXJrJzogISRxLmRhcmsubW9kZSxcbiAgICAgIH1cIlxuICAgID5cbiAgICAgIDxxLXRvb2xiYXI+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIEBjbGljaz1cIiRyb3V0ZXIuYmFjaygpXCJcbiAgICAgICAgICBmbGF0XG4gICAgICAgICAgcm91bmRcbiAgICAgICAgICBkZW5zZVxuICAgICAgICAgIGljb249XCJsYXMgbGEtYW5nbGUtbGVmdFwiXG4gICAgICAgICAgY2xhc3M9XCJxLW1yLXNtXCJcbiAgICAgICAgICA6Y29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnd2hpdGUnIDogJ2RhcmsnXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHEtdG9vbGJhci10aXRsZSBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGRcIj57e1xuICAgICAgICAgICR0KFwiTmV3IFBheW1lbnRcIilcbiAgICAgICAgfX08L3EtdG9vbGJhci10aXRsZT5cbiAgICAgIDwvcS10b29sYmFyPlxuICAgIDwvcS1oZWFkZXI+XG5cbiAgICA8cS1wYWdlXG4gICAgICBjbGFzcz1cInEtcGwtbWQgcS1wci1tZFwiXG4gICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICdmbGV4IGZsZXgtY2VudGVyJzogIVBheW1lbnRTdG9yZS5oYXNEYXRhICYmICFQYXltZW50U3RvcmUubG9hZGluZzIsXG4gICAgICAgICdyb3cgaXRlbXMtc3RyZXRjaCAnOiBQYXltZW50U3RvcmUuaGFzRGF0YSAmJiAhUGF5bWVudFN0b3JlLmxvYWRpbmcyLFxuICAgICAgICAnYmctbXlkYXJrIHRleHQtd2hpdGUnOiAkcS5kYXJrLm1vZGUsXG4gICAgICAgICdiZy1ncmV5LTEgdGV4dC1kYXJrJzogISRxLmRhcmsubW9kZSxcbiAgICAgIH1cIlxuICAgID5cbiAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiIVBheW1lbnRTdG9yZS5oYXNEYXRhICYmICFQYXltZW50U3RvcmUubG9hZGluZzJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1pbi1oZWlnaHQtaW5oZXJpdCBmbGV4IGZsZXgtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZ1bGwtd2lkdGggdGV4dC1jZW50ZXIgcS1wYi14bFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDUgdGV4dC13ZWlnaHQtYm9sZFwiPlxuICAgICAgICAgICAgICB7eyAkdChcIk5vIFBheW1lbnQgYXZhaWxhYmxlXCIpIH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1ncmV5IGZvbnQxMlwiPlxuICAgICAgICAgICAgICB7eyAkdChcIlRoZXJlIGlzIG5vIHBheW1lbnQgYXZhaWxhYmxlXCIpIH19XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgPHEtaW5uZXItbG9hZGluZ1xuICAgICAgICAgIHYtaWY9XCJQYXltZW50U3RvcmUubG9hZGluZzJcIlxuICAgICAgICAgIDpzaG93aW5nPVwidHJ1ZVwiXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgIGxhYmVsLWNsYXNzPVwiZGFya1wiXG4gICAgICAgICAgY2xhc3M9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgIC8+XG4gICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICAgICAgPCEtLSA8cHJlPnt7IFBheW1lbnRTdG9yZS5wYXltZW50X2xpc3QgfX08L3ByZT4gLS0+XG4gICAgICAgICAgPHEtY2FyZFxuICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgY2xhc3M9XCJyYWRpdXM4IGNvbC0xMlwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICdiZy1teWRhcmsgJzogJHEuZGFyay5tb2RlLFxuICAgICAgICAgICAgICAnYmctd2hpdGUgJzogISRxLmRhcmsubW9kZSxcbiAgICAgICAgICAgIH1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgPHEtbGlzdD5cbiAgICAgICAgICAgICAgICA8dHJhbnNpdGlvblxuICAgICAgICAgICAgICAgICAgdi1mb3I9XCJpdGVtcyBpbiBQYXltZW50U3RvcmUucGF5bWVudF9saXN0XCJcbiAgICAgICAgICAgICAgICAgIDprZXk9XCJpdGVtcy5wYXltZW50X2NvZGVcIlxuICAgICAgICAgICAgICAgICAgYXBwZWFyXG4gICAgICAgICAgICAgICAgICBsZWF2ZS1hY3RpdmUtY2xhc3M9XCJhbmltYXRlZCBmYWRlT3V0XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIm9uY2hvb3NlUGF5bWVudChpdGVtcylcIlxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICAgICAgdi1yaXBwbGVcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJib3JkZXItZ3JleSByYWRpdXMxMCBxLW1iLXNtXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIml0ZW1zLmxvZ29fdHlwZSA9PT0gJ2ljb24nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cS1pY29uIGNvbG9yPVwid2FybmluZ1wiIG5hbWU9XCJjcmVkaXRfY2FyZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHEtaW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDpzcmM9XCJpdGVtcy5sb2dvX2ltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZml0PVwiY29udGFpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiAzNXB4OyBtYXgtd2lkdGg6IDM1cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+e3sgaXRlbXMucGF5bWVudF9uYW1lIH19PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgIDwvdHJhbnNpdGlvbj5cbiAgICAgICAgICAgICAgPC9xLWxpc3Q+XG4gICAgICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgIDwvcS1jYXJkPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgPCEtLSBQQVlNRU5UUyBDT01QT05FTlRTIC0tPlxuICAgICAgPGNvZENvbXBvbmVudHNcbiAgICAgICAgcmVmPVwiY29kXCJcbiAgICAgICAgcGF5bWVudF9jb2RlPVwiY29kXCJcbiAgICAgICAgOnRpdGxlPVwiJHQoJ0FkZCBDYXNoIE9uIGRlbGl2ZXJ5JylcIlxuICAgICAgICA6bGFiZWw9XCJ7XG4gICAgICAgICAgc3VibWl0OiB0aGlzLiR0KCdBZGQgQ2FzaCcpLFxuICAgICAgICAgIG5vdGVzOiB0aGlzLiR0KFxuICAgICAgICAgICAgJ0Nhc2ggb24gRGVsaXZlcnkgb3IgQ09EIGlzIGEgcGF5bWVudCBtZXRob2QgdGhhdCBhbGxvd3MgcGF5IGZvciB0aGUgaXRlbXMgeW91IGhhdmUgb3JkZXJlZCBvbmx5IHdoZW4gaXQgZ2V0cyBkZWxpdmVyZWQuJ1xuICAgICAgICAgICksXG4gICAgICAgIH1cIlxuICAgICAgICA6cGF5bWVudF9jcmVkZW50aWFscz1cIlBheW1lbnRTdG9yZS5wYXltZW50X2NyZWRlbnRpYWxzXCJcbiAgICAgICAgQGFmdGVyLWFkZHBheW1lbnQ9XCJhZnRlckFkZHBheW1lbnRcIlxuICAgICAgLz5cblxuICAgICAgPG9jckNvbXBvbmVudHNcbiAgICAgICAgcmVmPVwib2NyXCJcbiAgICAgICAgcGF5bWVudF9jb2RlPVwib2NyXCJcbiAgICAgICAgOnRpdGxlPVwiJHQoJ0FkZCBDcmVkaXQgY2FyZCcpXCJcbiAgICAgICAgOmxhYmVsPVwie1xuICAgICAgICAgIHN1Ym1pdDogdGhpcy4kdCgnQWRkIENhcmQnKSxcbiAgICAgICAgICBub3RlczogJycsXG4gICAgICAgIH1cIlxuICAgICAgICA6cGF5bWVudF9jcmVkZW50aWFscz1cIlBheW1lbnRTdG9yZS5wYXltZW50X2NyZWRlbnRpYWxzXCJcbiAgICAgICAgQGFmdGVyLWFkZHBheW1lbnQ9XCJhZnRlckFkZHBheW1lbnRcIlxuICAgICAgLz5cblxuICAgICAgPFN0cmlwZUNvbXBvbmVudHNcbiAgICAgICAgcmVmPVwic3RyaXBlXCJcbiAgICAgICAgcGF5bWVudF9jb2RlPVwic3RyaXBlXCJcbiAgICAgICAgOnRpdGxlPVwiJHQoJ0FkZCBTdHJpcGUnKVwiXG4gICAgICAgIDpsYWJlbD1cIntcbiAgICAgICAgICBzdWJtaXQ6IHRoaXMuJHQoJ0FkZCBTdHJpcGUnKSxcbiAgICAgICAgICBub3RlczogdGhpcy4kdCgnQWRkIHlvdXIgY2FyZCBhY2NvdW50JyksXG4gICAgICAgIH1cIlxuICAgICAgICA6cGF5bWVudF9jcmVkZW50aWFscz1cIlBheW1lbnRTdG9yZS5wYXltZW50X2NyZWRlbnRpYWxzXCJcbiAgICAgICAgQGFmdGVyLWFkZHBheW1lbnQ9XCJhZnRlckFkZHBheW1lbnRcIlxuICAgICAgLz5cblxuICAgICAgPFBheXBhbENvbXBvbmVudHNcbiAgICAgICAgcmVmPVwicGF5cGFsXCJcbiAgICAgICAgcGF5bWVudF9jb2RlPVwicGF5cGFsXCJcbiAgICAgICAgOnRpdGxlPVwiJHQoJ0FkZCBQYXlwYWwnKVwiXG4gICAgICAgIDpsYWJlbD1cIntcbiAgICAgICAgICBzdWJtaXQ6IHRoaXMuJHQoJ0FkZCBQYXlwYWwnKSxcbiAgICAgICAgICBub3RlczogdGhpcy4kdCgnUGF5IHVzaW5nIHlvdXIgcGF5cGFsIGFjY291bnQnKSxcbiAgICAgICAgICBwYXltZW50X3RpdGxlOiB0aGlzLiR0KCdQYXkgdXNpbmcgUGF5cGFsJyksXG4gICAgICAgICAgcGF5bWVudF9zdWJ0aXRsZTogdGhpcy4kdChcbiAgICAgICAgICAgICdZb3Ugd2lsbCByZS1kaXJlY3QgdG8gcGF5cGFsIGFjY291bnQgdG8gbG9naW4gdG8geW91ciBhY2NvdW50LidcbiAgICAgICAgICApLFxuICAgICAgICB9XCJcbiAgICAgICAgOnBheW1lbnRfY3JlZGVudGlhbHM9XCJQYXltZW50U3RvcmUucGF5bWVudF9jcmVkZW50aWFsc1wiXG4gICAgICAgIEBhZnRlci1hZGRwYXltZW50PVwiYWZ0ZXJBZGRwYXltZW50XCJcbiAgICAgIC8+XG5cbiAgICAgIDxSYXpvcnBheUNvbXBvbmVudHNcbiAgICAgICAgcmVmPVwicmF6b3JwYXlcIlxuICAgICAgICBwYXltZW50X2NvZGU9XCJyYXpvcnBheVwiXG4gICAgICAgIDp0aXRsZT1cIiR0KCdBZGQgUmF6b3JwYXknKVwiXG4gICAgICAgIDpsYWJlbD1cIntcbiAgICAgICAgICBzdWJtaXQ6IHRoaXMuJHQoJ1N1Ym1pdCcpLFxuICAgICAgICAgIG5vdGVzOiB0aGlzLiR0KCdQYXkgdXNpbmcgeW91ciBSYXpvcnBheSBhY2NvdW50JyksXG4gICAgICAgIH1cIlxuICAgICAgICA6cGF5bWVudF9jcmVkZW50aWFscz1cIlBheW1lbnRTdG9yZS5wYXltZW50X2NyZWRlbnRpYWxzXCJcbiAgICAgICAgQGFmdGVyLWFkZHBheW1lbnQ9XCJhZnRlckFkZHBheW1lbnRcIlxuICAgICAgLz5cblxuICAgICAgPE1lcmNhZG9wYWdvQ29tcG9uZW50c1xuICAgICAgICByZWY9XCJtZXJjYWRvcGFnb1wiXG4gICAgICAgIHBheW1lbnRfY29kZT1cIm1lcmNhZG9wYWdvXCJcbiAgICAgICAgOnRpdGxlPVwiJHQoJ0FkZCBNZXJjYWRvcGFnbycpXCJcbiAgICAgICAgOmxhYmVsPVwie1xuICAgICAgICAgIHN1Ym1pdDogdGhpcy4kdCgnQWRkIE1lcmNhZG9wYWdvJyksXG4gICAgICAgICAgbm90ZXM6IHRoaXMuJHQoJ1BheSB1c2luZyB5b3VyIG1lcmNhZG9wYWdvIGFjY291bnQnKSxcbiAgICAgICAgfVwiXG4gICAgICAgIDpwYXltZW50X2NyZWRlbnRpYWxzPVwiUGF5bWVudFN0b3JlLnBheW1lbnRfY3JlZGVudGlhbHNcIlxuICAgICAgICBAYWZ0ZXItYWRkcGF5bWVudD1cImFmdGVyQWRkcGF5bWVudFwiXG4gICAgICAvPlxuXG4gICAgICA8QmFua0NvbXBvbmVudHNcbiAgICAgICAgcmVmPVwiYmFua1wiXG4gICAgICAgIHBheW1lbnRfY29kZT1cImJhbmtcIlxuICAgICAgICA6dGl0bGU9XCIkdCgnQWRkIEJhbmsgVHJhbnNmZXInKVwiXG4gICAgICAgIDpsYWJlbD1cIntcbiAgICAgICAgICBzdWJtaXQ6IHRoaXMuJHQoJ0FkZCBQYXltZW50JyksXG4gICAgICAgICAgbm90ZXM6IHRoaXMuJHQoJ1BheSB1c2luZyBiYW5rIFRyYW5zZmVyJyksXG4gICAgICAgIH1cIlxuICAgICAgICA6cGF5bWVudF9jcmVkZW50aWFscz1cIlBheW1lbnRTdG9yZS5wYXltZW50X2NyZWRlbnRpYWxzXCJcbiAgICAgICAgQGFmdGVyLWFkZHBheW1lbnQ9XCJhZnRlckFkZHBheW1lbnRcIlxuICAgICAgLz5cblxuICAgICAgPFBheWRlbGl2ZXJ5Q29tcG9uZW50c1xuICAgICAgICByZWY9XCJwYXlkZWxpdmVyeVwiXG4gICAgICAgIHBheW1lbnRfY29kZT1cInBheWRlbGl2ZXJ5XCJcbiAgICAgICAgOnRpdGxlPVwiJHQoJ0FkZCBQYXltZW50JylcIlxuICAgICAgICA6bGFiZWw9XCJ7XG4gICAgICAgICAgc3VibWl0OiB0aGlzLiR0KCdTYXZlZCcpLFxuICAgICAgICAgIG5vdGVzOiB0aGlzLiR0KCdQYXkgdXNpbmcgZGlmZmVyZW50IGNhcmQnKSxcbiAgICAgICAgfVwiXG4gICAgICAgIDpwYXltZW50X2NyZWRlbnRpYWxzPVwiUGF5bWVudFN0b3JlLnBheW1lbnRfY3JlZGVudGlhbHNcIlxuICAgICAgICBAYWZ0ZXItYWRkcGF5bWVudD1cImFmdGVyQWRkcGF5bWVudFwiXG4gICAgICA+XG4gICAgICA8L1BheWRlbGl2ZXJ5Q29tcG9uZW50cz5cblxuXG5cbiAgICAgIDwhLS0gRU5EIFBBWU1FTlRTIENPTVBPTkVOVFMgLS0+XG4gICAgPC9xLXBhZ2U+XG4gIDwvcS1wdWxsLXRvLXJlZnJlc2g+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEFQSWludGVyZmFjZSBmcm9tIFwic3JjL2FwaS9BUElpbnRlcmZhY2VcIjtcbmltcG9ydCB7IGRlZmluZUFzeW5jQ29tcG9uZW50IH0gZnJvbSBcInZ1ZVwiO1xuaW1wb3J0IHsgdXNlUGF5bWVudFN0b3JlIH0gZnJvbSBcInN0b3Jlcy9QYXltZW50U3RvcmVcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIlBheW1lbnROZXdcIixcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFyYW1zOiBcIlwiLFxuICAgIH07XG4gIH0sXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IFBheW1lbnRTdG9yZSA9IHVzZVBheW1lbnRTdG9yZSgpO1xuICAgIHJldHVybiB7IFBheW1lbnRTdG9yZSB9O1xuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgY29kQ29tcG9uZW50czogZGVmaW5lQXN5bmNDb21wb25lbnQoKCkgPT5cbiAgICAgIGltcG9ydChcImNvbXBvbmVudHMvY29kQ29tcG9uZW50cy52dWVcIilcbiAgICApLFxuICAgIG9jckNvbXBvbmVudHM6IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+XG4gICAgICBpbXBvcnQoXCJjb21wb25lbnRzL29jckNvbXBvbmVudHMudnVlXCIpXG4gICAgKSxcbiAgICBTdHJpcGVDb21wb25lbnRzOiBkZWZpbmVBc3luY0NvbXBvbmVudCgoKSA9PlxuICAgICAgaW1wb3J0KFwiY29tcG9uZW50cy9TdHJpcGVDb21wb25lbnRzLnZ1ZVwiKVxuICAgICksXG4gICAgUGF5cGFsQ29tcG9uZW50czogZGVmaW5lQXN5bmNDb21wb25lbnQoKCkgPT5cbiAgICAgIGltcG9ydChcImNvbXBvbmVudHMvUGF5cGFsQ29tcG9uZW50cy52dWVcIilcbiAgICApLFxuICAgIFJhem9ycGF5Q29tcG9uZW50czogZGVmaW5lQXN5bmNDb21wb25lbnQoKCkgPT5cbiAgICAgIGltcG9ydChcImNvbXBvbmVudHMvUmF6b3JwYXlDb21wb25lbnRzLnZ1ZVwiKVxuICAgICksXG4gICAgTWVyY2Fkb3BhZ29Db21wb25lbnRzOiBkZWZpbmVBc3luY0NvbXBvbmVudCgoKSA9PlxuICAgICAgaW1wb3J0KFwiY29tcG9uZW50cy9NZXJjYWRvcGFnb0NvbXBvbmVudHMudnVlXCIpXG4gICAgKSxcbiAgICBCYW5rQ29tcG9uZW50czogZGVmaW5lQXN5bmNDb21wb25lbnQoKCkgPT5cbiAgICAgIGltcG9ydChcImNvbXBvbmVudHMvQmFua0NvbXBvbmVudHMudnVlXCIpXG4gICAgKSxcbiAgICBQYXlkZWxpdmVyeUNvbXBvbmVudHM6IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+XG4gICAgICBpbXBvcnQoXCJjb21wb25lbnRzL1BheWRlbGl2ZXJ5Q29tcG9uZW50cy52dWVcIilcbiAgICApLFxuICAgIC8vIGN1c3RvbSAgIFxuICB9LFxuICBjcmVhdGVkKCkge1xuICAgIGlmICh0aGlzLiRyb3V0ZS5xdWVyeS5yZWRpcmVjdCA9PSBcIi9jaGVja291dFwiKSB7XG4gICAgICB0aGlzLnBhcmFtcyA9IFwiY2FydF91dWlkPVwiICsgQVBJaW50ZXJmYWNlLmdldFN0b3JhZ2UoXCJjYXJ0X3V1aWRcIik7XG4gICAgfVxuICAgIHRoaXMuUGF5bWVudFN0b3JlLlBheW1lbnRNZXRob2QobnVsbCwgdGhpcy5wYXJhbXMpO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgcmVmcmVzaChkb25lKSB7XG4gICAgICB0aGlzLlBheW1lbnRTdG9yZS5QYXltZW50TWV0aG9kKGRvbmUsIHRoaXMucGFyYW1zKTtcbiAgICB9LFxuICAgIG9uY2hvb3NlUGF5bWVudChkYXRhKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLiRyZWZzW2RhdGEucGF5bWVudF9jb2RlXS5zaG93UGF5bWVudEZvcm0oKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJncmV5LThcIiwgZXJyb3IsIFwiZXJyb3Jfb3V0bGluZVwiLCB0aGlzLiRxKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFmdGVyQWRkcGF5bWVudCgpIHtcbiAgICAgIGlmICh0aGlzLiRyb3V0ZS5xdWVyeS5yZWRpcmVjdCA9PSBcIi9jaGVja291dFwiKSB7XG4gICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKFwiL2NoZWNrb3V0P3JlZnJlc2hfcGF5bWVudD0xXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4kcm91dGVyLmJhY2soKTtcbiAgICAgIH1cbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuIl0sImZpbGUiOiJhc3NldHMvUGF5bWVudE5ldy4xNDdlYjEzNS5qcyJ9
