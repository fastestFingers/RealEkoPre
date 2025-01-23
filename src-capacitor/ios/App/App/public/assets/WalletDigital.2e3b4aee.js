import { _ as _export_sfc, l as defineAsyncComponent, R as useDataStore, m as APIinterface, n as resolveComponent, p as openBlock, q as createBlock, t as withCtx, f as createVNode, Y as QBtn, a6 as createTextVNode, Z as toDisplayString, a7 as normalizeClass, U as createBaseVNode, at as QIcon, V as createElementBlock, F as Fragment, aA as createCommentVNode, X as renderList, u as __vitePreload, ac as QItem, ad as QItemSection, b2 as QSeparator } from "./index.61ed5618.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QSkeleton } from "./QSkeleton.39737398.js";
import { Q as QTab } from "./QTab.8fcc65d0.js";
import { Q as QTabs } from "./QTabs.2f5e29cb.js";
import { Q as QItemLabel } from "./QItemLabel.a9365c5b.js";
import { Q as QList } from "./QList.b69a7e5b.js";
import { Q as QInnerLoading } from "./QInnerLoading.abe2afe6.js";
import { Q as QSpinnerDots } from "./QSpinnerDots.a9d9851d.js";
import { Q as QInfiniteScroll } from "./QInfiniteScroll.3e160277.js";
import { Q as QTabPanels, a as QTabPanel } from "./QTabPanels.2a6730dc.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import { Q as QPullToRefresh } from "./QPullToRefresh.3d10c02d.js";
import { u as usePaymentStore } from "./PaymentStore.773648e1.js";
import "./QResizeObserver.d08dce3c.js";
import "./rtl.f3ed811c.js";
import "./use-panel.225d73f4.js";
import "./touch.96e0ae37.js";
import "./selection.50b4cb0c.js";
import "./use-render-cache.b9e045af.js";
import "./format.7f7370d3.js";
const _sfc_main = {
  name: "WalletDigital",
  components: {
    WalletBunos: defineAsyncComponent(
      () => __vitePreload(() => import("./WalletBunos.d6fba48a.js"), true ? ["assets/WalletBunos.d6fba48a.js","assets/swiper.min.5cdecd27.css","assets/QSkeleton.39737398.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/swiper-slide.8a0c58df.js"] : void 0)
    ),
    WalletTopupform: defineAsyncComponent(
      () => __vitePreload(() => import("./WalletTopupform.8ce08182.js"), true ? ["assets/WalletTopupform.8ce08182.js","assets/QSpace.f164c087.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QImg.6c27044c.js","assets/QForm.7ded9d38.js","assets/ClosePopup.9d17b53c.js"] : void 0)
    ),
    WalletTopupreceipt: defineAsyncComponent(
      () => __vitePreload(() => import("./WalletTopupreceipt.d84de689.js"), true ? ["assets/WalletTopupreceipt.d84de689.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QItemLabel.a9365c5b.js","assets/QList.b69a7e5b.js"] : void 0)
    ),
    StripeComponents: defineAsyncComponent(
      () => __vitePreload(() => import("./StripeComponents.3f1aad72.js"), true ? ["assets/StripeComponents.3f1aad72.js","assets/QSpace.f164c087.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QToolbar.c8fc6962.js","assets/QInnerLoading.abe2afe6.js","assets/QForm.7ded9d38.js"] : void 0)
    ),
    RazorpayComponents: defineAsyncComponent(
      () => __vitePreload(() => import("./RazorpayComponents.fa2381c3.js"), true ? ["assets/RazorpayComponents.fa2381c3.js","assets/QSpace.f164c087.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QToolbar.c8fc6962.js","assets/index.d0b40bd3.js"] : void 0)
    ),
    PaypalComponents: defineAsyncComponent(
      () => __vitePreload(() => import("./PaypalComponents.d16b4f1c.js"), true ? ["assets/PaypalComponents.d16b4f1c.js","assets/QSpace.f164c087.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QToolbar.c8fc6962.js","assets/ClosePopup.9d17b53c.js","assets/index.d0b40bd3.js"] : void 0)
    ),
    MercadopagoComponents: defineAsyncComponent(
      () => __vitePreload(() => import("./MercadopagoComponents.392597c1.js"), true ? ["assets/MercadopagoComponents.392597c1.js","assets/QSpace.f164c087.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QToolbar.c8fc6962.js","assets/QSelect.311187d6.js","assets/QChip.f183a4f1.js","assets/QItemLabel.a9365c5b.js","assets/QMenu.8e482cd8.js","assets/selection.50b4cb0c.js","assets/rtl.f3ed811c.js","assets/format.7f7370d3.js","assets/QForm.7ded9d38.js","assets/ClosePopup.9d17b53c.js","assets/index.d0b40bd3.js"] : void 0)
    )
  },
  setup() {
    const PaymentStore = usePaymentStore();
    const DataStore = useDataStore();
    return { PaymentStore, DataStore };
  },
  data() {
    return {
      loading_balance: false,
      balance: 0,
      credentials: [],
      receipt_data: [],
      data: [],
      page: 0,
      is_refresh: void 0,
      tab: "all",
      tabs: [
        {
          name: "all",
          label: this.$t("All")
        },
        {
          name: "order",
          label: this.$t("Orders")
        },
        {
          name: "refund",
          label: this.$t("Refunds")
        },
        {
          name: "topup",
          label: this.$t("Top-ups")
        },
        {
          name: "cashback",
          label: this.$t("Cashbacks")
        },
        {
          name: "adjustment",
          label: this.$t("Adjustment")
        }
      ]
    };
  },
  mounted() {
    this.getWalletBalance();
    this.getPaymentCredentials();
  },
  computed: {
    hasData() {
      if (Object.keys(this.data).length > 0) {
        return true;
      }
      return false;
    }
  },
  methods: {
    refresh(done) {
      this.is_refresh = done;
      this.resetPage();
      this.getWalletBalance();
      this.$refs.bunos.getDiscount();
    },
    getPaymentCredentials() {
      APIinterface.fetchDataByTokenPost("getPaymentCredentials").then((data) => {
        this.credentials = data.details;
      }).catch((error) => {
      }).then((data) => {
      });
    },
    getWalletBalance() {
      this.loading_balance = true;
      APIinterface.fetchDataByTokenPost("getWalletBalance").then((data) => {
        if (data.code == 1) {
          this.balance = data.details.total;
        } else {
          this.balance = 0;
        }
      }).catch((error) => {
      }).then((data) => {
        this.loading_balance = false;
      });
    },
    resetPage() {
      this.resetPagination();
    },
    resetPagination() {
      this.page = 0;
      this.data = [];
      this.$refs.nscroll[0].reset();
      this.$refs.nscroll[0].resume();
      this.$refs.nscroll[0].trigger();
    },
    tabChange(value) {
      this.page = 0;
      this.data = [];
    },
    getWalletTransaction(index, done) {
      this.loading = true;
      this.page = index;
      APIinterface.fetchDataByTokenPost(
        "getWalletTransaction",
        "page=" + index + "&transaction_type=" + this.tab
      ).then((data) => {
        if (data.code == 1) {
          this.data.push(data.details.data);
        } else {
          this.$refs.nscroll[0].stop();
        }
      }).catch((error) => {
        this.loading = false;
        if (this.$refs.nscroll) {
          this.$refs.nscroll[0].stop();
        }
      }).then((data) => {
        this.loading = false;
        done();
        if (!APIinterface.empty(this.is_refresh)) {
          this.is_refresh();
        }
      });
    },
    afterPreparepayment(data) {
      try {
        this.$refs[data.payment_code].Dopayment(data.data, data);
      } catch (error) {
        APIinterface.notify("dark", error, "error", this.$q);
      }
    },
    afterSuccessfulpayment(data) {
      this.receipt_data = data;
      this.$refs.topup.dialog = false;
      this.$refs.receipt.dialog = true;
    },
    afterReceiptclose() {
      this.getWalletBalance();
      this.resetPage();
    },
    afterCancelPayment(data) {
      console.log("afterCancelPayment");
      console.log(data);
      if (!APIinterface.empty(data)) {
        APIinterface.notify("dark", data, "error", this.$q);
      }
    },
    closePayment() {
      this.$refs.topup.dialog = false;
    }
  }
};
const _hoisted_1 = { class: "row items-center q-gutter-md" };
const _hoisted_2 = { class: "col" };
const _hoisted_3 = { class: "no-margin" };
const _hoisted_4 = { class: "font12 no-margin" };
const _hoisted_5 = { class: "q-mt-sm q-mb-sm" };
const _hoisted_6 = {
  key: 0,
  class: "flex flex-center",
  style: { "min-height": "calc(40vh)" }
};
const _hoisted_7 = { class: "text-grey" };
const _hoisted_8 = {
  key: 0,
  class: "q-pa-xl"
};
const _hoisted_9 = {
  key: 1,
  class: "row justify-center absolute-bottom"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_WalletBunos = resolveComponent("WalletBunos");
  const _component_WalletTopupform = resolveComponent("WalletTopupform");
  const _component_WalletTopupreceipt = resolveComponent("WalletTopupreceipt");
  const _component_StripeComponents = resolveComponent("StripeComponents");
  const _component_RazorpayComponents = resolveComponent("RazorpayComponents");
  const _component_PaypalComponents = resolveComponent("PaypalComponents");
  const _component_MercadopagoComponents = resolveComponent("MercadopagoComponents");
  return openBlock(), createBlock(QPullToRefresh, { onRefresh: $options.refresh }, {
    default: withCtx(() => [
      createVNode(QHeader, {
        reveal: "",
        "reveal-offset": "20",
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
                  createTextVNode(toDisplayString(_ctx.$t("Wallet")), 1)
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
          createBaseVNode("div", {
            class: normalizeClass(["q-pa-md q-mb-sm radius8", {
              "bg-grey600 text-white": _ctx.$q.dark.mode,
              "bg-grey-1 text-black": !_ctx.$q.dark.mode
            }])
          }, [
            createBaseVNode("div", _hoisted_1, [
              createBaseVNode("div", null, [
                $data.loading_balance ? (openBlock(), createBlock(QSkeleton, {
                  key: 0,
                  type: "QAvatar"
                })) : (openBlock(), createBlock(QIcon, {
                  key: 1,
                  color: "grey-4",
                  name: "o_account_balance_wallet",
                  style: { "font-size": "60px" }
                }))
              ]),
              createBaseVNode("div", _hoisted_2, [
                $data.loading_balance ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  createVNode(QSkeleton, { type: "text" }),
                  createVNode(QSkeleton, { type: "text" })
                ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createBaseVNode("h4", _hoisted_3, toDisplayString($data.balance), 1),
                  createBaseVNode("p", _hoisted_4, toDisplayString(_ctx.$t("Available Balance")), 1)
                ], 64))
              ]),
              createBaseVNode("div", null, [
                $data.loading_balance ? (openBlock(), createBlock(QSkeleton, {
                  key: 0,
                  type: "circle"
                })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  $setup.DataStore.digitalwallet_enabled_topup ? (openBlock(), createBlock(QBtn, {
                    key: 0,
                    round: "",
                    color: _ctx.$q.dark.mode ? "grey300" : "primary",
                    icon: "add",
                    onClick: _cache[1] || (_cache[1] = ($event) => this.$refs.topup.dialog = true)
                  }, null, 8, ["color"])) : createCommentVNode("", true)
                ], 64))
              ])
            ])
          ], 2),
          createBaseVNode("div", _hoisted_5, [
            createVNode(_component_WalletBunos, { ref: "bunos" }, null, 512)
          ]),
          createVNode(QTabs, {
            modelValue: $data.tab,
            "onUpdate:modelValue": [
              _cache[2] || (_cache[2] = ($event) => $data.tab = $event),
              $options.tabChange
            ],
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
              (openBlock(true), createElementBlock(Fragment, null, renderList($data.tabs, (items) => {
                return openBlock(), createBlock(QTab, {
                  key: items,
                  name: items.name,
                  label: items.label,
                  "no-caps": "",
                  "content-class": "text-weight-500 "
                }, null, 8, ["name", "label"]);
              }), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "class", "onUpdate:modelValue"]),
          createVNode(QTabPanels, {
            modelValue: $data.tab,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.tab = $event),
            animated: "",
            "transition-next": "fade",
            "transition-prev": "fade",
            class: normalizeClass({
              "bg-mydark ": _ctx.$q.dark.mode,
              "bg-white ": !_ctx.$q.dark.mode
            })
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList($data.tabs, (items) => {
                return openBlock(), createBlock(QTabPanel, {
                  key: items,
                  name: items.name,
                  class: "q-pl-none q-pr-none",
                  style: { "min-height": "300px" }
                }, {
                  default: withCtx(() => [
                    createVNode(QInfiniteScroll, {
                      ref_for: true,
                      ref: "nscroll",
                      onLoad: $options.getWalletTransaction,
                      offset: 250
                    }, {
                      default: withCtx(() => [
                        !$options.hasData && !_ctx.loading ? (openBlock(), createElementBlock("div", _hoisted_6, [
                          createBaseVNode("p", _hoisted_7, toDisplayString(_ctx.$t("No data available")), 1)
                        ])) : createCommentVNode("", true),
                        createVNode(QList, null, {
                          default: withCtx(() => [
                            (openBlock(true), createElementBlock(Fragment, null, renderList($data.data, (datas) => {
                              return openBlock(), createElementBlock(Fragment, { key: datas }, [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(datas, (items2) => {
                                  return openBlock(), createElementBlock(Fragment, {
                                    key: items2.transaction_date
                                  }, [
                                    createVNode(QItem, null, {
                                      default: withCtx(() => [
                                        createVNode(QItemSection, null, {
                                          default: withCtx(() => [
                                            createVNode(QItemLabel, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(items2.transaction_description), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(QItemLabel, { caption: "" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(items2.transaction_date), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(QItemSection, { side: "" }, {
                                          default: withCtx(() => [
                                            createBaseVNode("div", {
                                              class: normalizeClass(["text-bold", {
                                                "text-green": items2.transaction_type == "credit",
                                                "text-red": items2.transaction_type == "debit"
                                              }])
                                            }, toDisplayString(items2.transaction_amount), 3)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(QSeparator, {
                                      spaced: "",
                                      inset: ""
                                    })
                                  ], 64);
                                }), 128))
                              ], 64);
                            }), 128))
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      loading: withCtx(() => [
                        $data.page <= 1 ? (openBlock(), createElementBlock("div", _hoisted_8, [
                          createVNode(QInnerLoading, {
                            showing: true,
                            color: "primary",
                            size: "md",
                            "label-class": "dark",
                            class: "transparent"
                          })
                        ])) : $data.page > 2 ? (openBlock(), createElementBlock("div", _hoisted_9, [
                          createVNode(QSpinnerDots, {
                            color: "secondary",
                            size: "40px"
                          })
                        ])) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1032, ["onLoad"])
                  ]),
                  _: 2
                }, 1032, ["name"]);
              }), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "class"]),
          createVNode(_component_WalletTopupform, {
            ref: "topup",
            onAfterPreparepayment: $options.afterPreparepayment
          }, null, 8, ["onAfterPreparepayment"]),
          createVNode(_component_WalletTopupreceipt, {
            ref: "receipt",
            data: $data.receipt_data,
            onAfterReceiptclose: $options.afterReceiptclose
          }, null, 8, ["data", "onAfterReceiptclose"]),
          createVNode(_component_StripeComponents, {
            ref: "stripe",
            payment_code: "stripe",
            title: "Add Stripe",
            label: {
              submit: this.$t("Add Stripe"),
              notes: this.$t("Add your card account")
            },
            payment_credentials: $data.credentials,
            onAfterAddpayment: _ctx.afterAddpayment,
            onAfterPayment: _ctx.afterPayment,
            onAfterCancelPayment: _ctx.AfterCancelPayment,
            onAfterSuccessfulpayment: $options.afterSuccessfulpayment,
            onAfterFailedpayment: _ctx.afterFailedpayment,
            onClosePayment: $options.closePayment
          }, null, 8, ["label", "payment_credentials", "onAfterAddpayment", "onAfterPayment", "onAfterCancelPayment", "onAfterSuccessfulpayment", "onAfterFailedpayment", "onClosePayment"]),
          createVNode(_component_RazorpayComponents, {
            ref: "razorpay",
            payment_code: "razorpay",
            title: "Add Razorpay",
            label: {
              submit: this.$t("Submit"),
              notes: this.$t("Pay using your Razorpay account")
            },
            payment_credentials: $data.credentials,
            onAfterAddpayment: _ctx.afterAddpayment,
            onAfterPayment: _ctx.afterPayment,
            onAfterCancelPayment: _ctx.AfterCancelPayment,
            onAfterSuccessfulpayment: $options.afterSuccessfulpayment,
            onAfterFailedpayment: _ctx.afterFailedpayment,
            onClosePayment: $options.closePayment
          }, null, 8, ["label", "payment_credentials", "onAfterAddpayment", "onAfterPayment", "onAfterCancelPayment", "onAfterSuccessfulpayment", "onAfterFailedpayment", "onClosePayment"]),
          createVNode(_component_PaypalComponents, {
            ref: "paypal",
            payment_code: "paypal",
            title: "Add Paypal",
            label: {
              submit: this.$t("Add Paypal"),
              notes: this.$t("Pay using your paypal account"),
              payment_title: this.$t("Pay using Paypal"),
              payment_subtitle: this.$t(
                "You will re-direct to paypal account to login to your account."
              )
            },
            payment_credentials: $data.credentials,
            onAfterAddpayment: _ctx.afterAddpayment,
            onAfterPayment: _ctx.afterPayment,
            onAfterCancelPayment: _ctx.AfterCancelPayment,
            onAfterSuccessfulpayment: $options.afterSuccessfulpayment,
            onAfterFailedpayment: _ctx.afterFailedpayment,
            onClosePayment: $options.closePayment
          }, null, 8, ["label", "payment_credentials", "onAfterAddpayment", "onAfterPayment", "onAfterCancelPayment", "onAfterSuccessfulpayment", "onAfterFailedpayment", "onClosePayment"]),
          createVNode(_component_MercadopagoComponents, {
            ref: "mercadopago",
            payment_code: "mercadopago",
            title: "Add Mercadopago",
            label: {
              submit: this.$t("Add Mercadopago"),
              submit_form: this.$t("Submit"),
              notes: this.$t("Pay using your mercadopago account")
            },
            payment_credentials: $data.credentials,
            onAfterAddpayment: _ctx.afterAddpayment,
            onAfterPayment: _ctx.afterPayment,
            onAfterCancelPayment: _ctx.AfterCancelPayment,
            onAfterSuccessfulpayment: $options.afterSuccessfulpayment,
            onAfterFailedpayment: _ctx.afterFailedpayment,
            onClosePayment: $options.closePayment
          }, null, 8, ["label", "payment_credentials", "onAfterAddpayment", "onAfterPayment", "onAfterCancelPayment", "onAfterSuccessfulpayment", "onAfterFailedpayment", "onClosePayment"])
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["onRefresh"]);
}
var WalletDigital = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "WalletDigital.vue"]]);
export { WalletDigital as default };
//# sourceMappingURL=data:application/json;base64,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TUFBVztBQUFBLFlBQ2hDLG1CQUFrQixLQUFlO0FBQUEsWUFDakMsZ0JBQWUsS0FBWTtBQUFBLFlBQzNCLHNCQUFzQixLQUFrQjtBQUFBLFlBQ3hDLDBCQUF5QixTQUFzQjtBQUFBLFlBQy9DLHNCQUFxQixLQUFrQjtBQUFBLFlBQ3ZDLGdCQUFlLFNBQVk7QUFBQTtVQUc5QkEsWUFnQkU7QUFBQSxZQWZBLEtBQUk7QUFBQSxZQUNKLGNBQWE7QUFBQSxZQUNiLE9BQU07QUFBQSxZQUNMLE9BQUs7QUFBQSwyQkFBMkIsR0FBRTtBQUFBLGdDQUFpRCxHQUFFO0FBQUEsMEJBQWtDLEdBQUU7QUFBQTtZQUt6SCxxQkFBcUIsTUFBVztBQUFBLFlBQ2hDLG1CQUFrQixLQUFlO0FBQUEsWUFDakMsZ0JBQWUsS0FBWTtBQUFBLFlBQzNCLHNCQUFzQixLQUFrQjtBQUFBLFlBQ3hDLDBCQUF5QixTQUFzQjtBQUFBLFlBQy9DLHNCQUFxQixLQUFrQjtBQUFBLFlBQ3ZDLGdCQUFlLFNBQVk7QUFBQSIsIm5hbWVzIjpbIl9jcmVhdGVCbG9jayIsIl9jcmVhdGVWTm9kZSIsIl9ub3JtYWxpemVDbGFzcyIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX0ZyYWdtZW50IiwiX3RvRGlzcGxheVN0cmluZyIsIl9vcGVuQmxvY2siLCJpdGVtcyIsIl9jcmVhdGVUZXh0Vk5vZGUiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvQWNjb3VudC9XYWxsZXREaWdpdGFsLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLXB1bGwtdG8tcmVmcmVzaCBAcmVmcmVzaD1cInJlZnJlc2hcIj5cbiAgICA8cS1oZWFkZXJcbiAgICAgIHJldmVhbFxuICAgICAgcmV2ZWFsLW9mZnNldD1cIjIwXCJcbiAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgJ2JnLW15ZGFyayB0ZXh0LXdoaXRlJzogJHEuZGFyay5tb2RlLFxuICAgICAgICAnYmctd2hpdGUgdGV4dC1kYXJrJzogISRxLmRhcmsubW9kZSxcbiAgICAgIH1cIlxuICAgID5cbiAgICAgIDxxLXRvb2xiYXI+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIEBjbGljaz1cIiRyb3V0ZXIuYmFjaygpXCJcbiAgICAgICAgICBmbGF0XG4gICAgICAgICAgcm91bmRcbiAgICAgICAgICBkZW5zZVxuICAgICAgICAgIGljb249XCJsYXMgbGEtYW5nbGUtbGVmdFwiXG4gICAgICAgICAgY2xhc3M9XCJxLW1yLXNtXCJcbiAgICAgICAgICA6Y29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnd2hpdGUnIDogJ2RhcmsnXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHEtdG9vbGJhci10aXRsZSBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGRcIj57e1xuICAgICAgICAgICR0KFwiV2FsbGV0XCIpXG4gICAgICAgIH19PC9xLXRvb2xiYXItdGl0bGU+XG4gICAgICA8L3EtdG9vbGJhcj5cbiAgICA8L3EtaGVhZGVyPlxuICAgIDxxLXBhZ2UgY2xhc3M9XCJxLXBsLW1kIHEtcHItbWRcIj5cbiAgICAgIDwhLS0gUE9JTlRTIEJBTEFOQ0UgLS0+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwicS1wYS1tZCBxLW1iLXNtIHJhZGl1czhcIlxuICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgJ2JnLWdyZXk2MDAgdGV4dC13aGl0ZSc6ICRxLmRhcmsubW9kZSxcbiAgICAgICAgICAnYmctZ3JleS0xIHRleHQtYmxhY2snOiAhJHEuZGFyay5tb2RlLFxuICAgICAgICB9XCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBpdGVtcy1jZW50ZXIgcS1ndXR0ZXItbWRcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHEtc2tlbGV0b24gdHlwZT1cIlFBdmF0YXJcIiB2LWlmPVwibG9hZGluZ19iYWxhbmNlXCIgLz5cbiAgICAgICAgICAgIDxxLWljb25cbiAgICAgICAgICAgICAgdi1lbHNlXG4gICAgICAgICAgICAgIGNvbG9yPVwiZ3JleS00XCJcbiAgICAgICAgICAgICAgbmFtZT1cIm9fYWNjb3VudF9iYWxhbmNlX3dhbGxldFwiXG4gICAgICAgICAgICAgIHN0eWxlPVwiZm9udC1zaXplOiA2MHB4XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJsb2FkaW5nX2JhbGFuY2VcIj5cbiAgICAgICAgICAgICAgPHEtc2tlbGV0b24gdHlwZT1cInRleHRcIiAvPlxuICAgICAgICAgICAgICA8cS1za2VsZXRvbiB0eXBlPVwidGV4dFwiIC8+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgICAgICAgPGg0IGNsYXNzPVwibm8tbWFyZ2luXCI+e3sgYmFsYW5jZSB9fTwvaDQ+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9udDEyIG5vLW1hcmdpblwiPnt7ICR0KFwiQXZhaWxhYmxlIEJhbGFuY2VcIikgfX08L3A+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cS1za2VsZXRvbiB0eXBlPVwiY2lyY2xlXCIgdi1pZj1cImxvYWRpbmdfYmFsYW5jZVwiIC8+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICB2LWlmPVwiRGF0YVN0b3JlLmRpZ2l0YWx3YWxsZXRfZW5hYmxlZF90b3B1cFwiXG4gICAgICAgICAgICAgICAgcm91bmRcbiAgICAgICAgICAgICAgICA6Y29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTMwMCcgOiAncHJpbWFyeSdcIlxuICAgICAgICAgICAgICAgIGljb249XCJhZGRcIlxuICAgICAgICAgICAgICAgIEBjbGljaz1cInRoaXMuJHJlZnMudG9wdXAuZGlhbG9nID0gdHJ1ZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPCEtLSBQT0lOVFMgQkFMQU5DRSAtLT5cblxuICAgICAgPGRpdiBjbGFzcz1cInEtbXQtc20gcS1tYi1zbVwiPlxuICAgICAgICA8V2FsbGV0QnVub3MgcmVmPVwiYnVub3NcIj48L1dhbGxldEJ1bm9zPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxxLXRhYnNcbiAgICAgICAgdi1tb2RlbD1cInRhYlwiXG4gICAgICAgIGRlbnNlXG4gICAgICAgIGFjdGl2ZS1jb2xvcj1cInByaW1hcnlcIlxuICAgICAgICBpbmRpY2F0b3ItY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgYWxpZ249XCJsZWZ0XCJcbiAgICAgICAgbmFycm93LWluZGljYXRvclxuICAgICAgICBuby1jYXBzXG4gICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAndGV4dC1ncmV5MzAwJzogJHEuZGFyay5tb2RlLFxuICAgICAgICAgICd0ZXh0LWRhcmsnOiAhJHEuZGFyay5tb2RlLFxuICAgICAgICB9XCJcbiAgICAgICAgOmJyZWFrcG9pbnQ9XCIwXCJcbiAgICAgICAgQHVwZGF0ZTptb2RlbC12YWx1ZT1cInRhYkNoYW5nZVwiXG4gICAgICA+XG4gICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIml0ZW1zIGluIHRhYnNcIiA6a2V5PVwiaXRlbXNcIj5cbiAgICAgICAgICA8cS10YWJcbiAgICAgICAgICAgIDpuYW1lPVwiaXRlbXMubmFtZVwiXG4gICAgICAgICAgICA6bGFiZWw9XCJpdGVtcy5sYWJlbFwiXG4gICAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgICBjb250ZW50LWNsYXNzPVwidGV4dC13ZWlnaHQtNTAwIFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvcS10YWJzPlxuXG4gICAgICA8cS10YWItcGFuZWxzXG4gICAgICAgIHYtbW9kZWw9XCJ0YWJcIlxuICAgICAgICBhbmltYXRlZFxuICAgICAgICB0cmFuc2l0aW9uLW5leHQ9XCJmYWRlXCJcbiAgICAgICAgdHJhbnNpdGlvbi1wcmV2PVwiZmFkZVwiXG4gICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAnYmctbXlkYXJrICc6ICRxLmRhcmsubW9kZSxcbiAgICAgICAgICAnYmctd2hpdGUgJzogISRxLmRhcmsubW9kZSxcbiAgICAgICAgfVwiXG4gICAgICA+XG4gICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIml0ZW1zIGluIHRhYnNcIiA6a2V5PVwiaXRlbXNcIj5cbiAgICAgICAgICA8cS10YWItcGFuZWxcbiAgICAgICAgICAgIDpuYW1lPVwiaXRlbXMubmFtZVwiXG4gICAgICAgICAgICBjbGFzcz1cInEtcGwtbm9uZSBxLXByLW5vbmVcIlxuICAgICAgICAgICAgc3R5bGU9XCJtaW4taGVpZ2h0OiAzMDBweFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPCEtLSB0YWIgLS0+XG5cbiAgICAgICAgICAgIDxxLWluZmluaXRlLXNjcm9sbFxuICAgICAgICAgICAgICByZWY9XCJuc2Nyb2xsXCJcbiAgICAgICAgICAgICAgQGxvYWQ9XCJnZXRXYWxsZXRUcmFuc2FjdGlvblwiXG4gICAgICAgICAgICAgIDpvZmZzZXQ9XCIyNTBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmRlZmF1bHQ+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgdi1pZj1cIiFoYXNEYXRhICYmICFsb2FkaW5nXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmxleCBmbGV4LWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT1cIm1pbi1oZWlnaHQ6IGNhbGMoNDB2aClcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1ncmV5XCI+e3sgJHQoXCJObyBkYXRhIGF2YWlsYWJsZVwiKSB9fTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cS1saXN0PlxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiZGF0YXMgaW4gZGF0YVwiIDprZXk9XCJkYXRhc1wiPlxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIml0ZW1zIGluIGRhdGFzXCJcbiAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiaXRlbXMudHJhbnNhY3Rpb25fZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsPnt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMudHJhbnNhY3Rpb25fZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uPnt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMudHJhbnNhY3Rpb25fZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWJvbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWdyZWVuJzogaXRlbXMudHJhbnNhY3Rpb25fdHlwZSA9PSAnY3JlZGl0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LXJlZCc6IGl0ZW1zLnRyYW5zYWN0aW9uX3R5cGUgPT0gJ2RlYml0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGl0ZW1zLnRyYW5zYWN0aW9uX2Ftb3VudCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtc2VwYXJhdG9yIHNwYWNlZCBpbnNldCAvPlxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L3EtbGlzdD5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmxvYWRpbmc+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJwYWdlIDw9IDFcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJxLXBhLXhsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxxLWlubmVyLWxvYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgICA6c2hvd2luZz1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbC1jbGFzcz1cImRhcmtcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICB2LWVsc2UtaWY9XCJwYWdlID4gMlwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cInJvdyBqdXN0aWZ5LWNlbnRlciBhYnNvbHV0ZS1ib3R0b21cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxxLXNwaW5uZXItZG90cyBjb2xvcj1cInNlY29uZGFyeVwiIHNpemU9XCI0MHB4XCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvcS1pbmZpbml0ZS1zY3JvbGw+XG5cbiAgICAgICAgICAgIDwhLS0gZW5kIHRhYiAtLT5cbiAgICAgICAgICA8L3EtdGFiLXBhbmVsPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9xLXRhYi1wYW5lbHM+XG5cbiAgICAgIDxXYWxsZXRUb3B1cGZvcm1cbiAgICAgICAgcmVmPVwidG9wdXBcIlxuICAgICAgICBAYWZ0ZXItcHJlcGFyZXBheW1lbnQ9XCJhZnRlclByZXBhcmVwYXltZW50XCJcbiAgICAgID48L1dhbGxldFRvcHVwZm9ybT5cblxuICAgICAgPFdhbGxldFRvcHVwcmVjZWlwdFxuICAgICAgICByZWY9XCJyZWNlaXB0XCJcbiAgICAgICAgOmRhdGE9XCJyZWNlaXB0X2RhdGFcIlxuICAgICAgICBAYWZ0ZXItcmVjZWlwdGNsb3NlPVwiYWZ0ZXJSZWNlaXB0Y2xvc2VcIlxuICAgICAgPlxuICAgICAgPC9XYWxsZXRUb3B1cHJlY2VpcHQ+XG5cbiAgICAgIDwhLS0gUEFZTUVOVFMgQ09NUE9ORU5UUyAtLT5cblxuICAgICAgPFN0cmlwZUNvbXBvbmVudHNcbiAgICAgICAgcmVmPVwic3RyaXBlXCJcbiAgICAgICAgcGF5bWVudF9jb2RlPVwic3RyaXBlXCJcbiAgICAgICAgdGl0bGU9XCJBZGQgU3RyaXBlXCJcbiAgICAgICAgOmxhYmVsPVwie1xuICAgICAgICAgIHN1Ym1pdDogdGhpcy4kdCgnQWRkIFN0cmlwZScpLFxuICAgICAgICAgIG5vdGVzOiB0aGlzLiR0KCdBZGQgeW91ciBjYXJkIGFjY291bnQnKSxcbiAgICAgICAgfVwiXG4gICAgICAgIDpwYXltZW50X2NyZWRlbnRpYWxzPVwiY3JlZGVudGlhbHNcIlxuICAgICAgICBAYWZ0ZXItYWRkcGF5bWVudD1cImFmdGVyQWRkcGF5bWVudFwiXG4gICAgICAgIEBhZnRlci1wYXltZW50PVwiYWZ0ZXJQYXltZW50XCJcbiAgICAgICAgQGFmdGVyLWNhbmNlbC1wYXltZW50PVwiQWZ0ZXJDYW5jZWxQYXltZW50XCJcbiAgICAgICAgQGFmdGVyLXN1Y2Nlc3NmdWxwYXltZW50PVwiYWZ0ZXJTdWNjZXNzZnVscGF5bWVudFwiXG4gICAgICAgIEBhZnRlci1mYWlsZWRwYXltZW50PVwiYWZ0ZXJGYWlsZWRwYXltZW50XCJcbiAgICAgICAgQGNsb3NlLXBheW1lbnQ9XCJjbG9zZVBheW1lbnRcIlxuICAgICAgLz5cblxuICAgICAgPFJhem9ycGF5Q29tcG9uZW50c1xuICAgICAgICByZWY9XCJyYXpvcnBheVwiXG4gICAgICAgIHBheW1lbnRfY29kZT1cInJhem9ycGF5XCJcbiAgICAgICAgdGl0bGU9XCJBZGQgUmF6b3JwYXlcIlxuICAgICAgICA6bGFiZWw9XCJ7XG4gICAgICAgICAgc3VibWl0OiB0aGlzLiR0KCdTdWJtaXQnKSxcbiAgICAgICAgICBub3RlczogdGhpcy4kdCgnUGF5IHVzaW5nIHlvdXIgUmF6b3JwYXkgYWNjb3VudCcpLFxuICAgICAgICB9XCJcbiAgICAgICAgOnBheW1lbnRfY3JlZGVudGlhbHM9XCJjcmVkZW50aWFsc1wiXG4gICAgICAgIEBhZnRlci1hZGRwYXltZW50PVwiYWZ0ZXJBZGRwYXltZW50XCJcbiAgICAgICAgQGFmdGVyLXBheW1lbnQ9XCJhZnRlclBheW1lbnRcIlxuICAgICAgICBAYWZ0ZXItY2FuY2VsLXBheW1lbnQ9XCJBZnRlckNhbmNlbFBheW1lbnRcIlxuICAgICAgICBAYWZ0ZXItc3VjY2Vzc2Z1bHBheW1lbnQ9XCJhZnRlclN1Y2Nlc3NmdWxwYXltZW50XCJcbiAgICAgICAgQGFmdGVyLWZhaWxlZHBheW1lbnQ9XCJhZnRlckZhaWxlZHBheW1lbnRcIlxuICAgICAgICBAY2xvc2UtcGF5bWVudD1cImNsb3NlUGF5bWVudFwiXG4gICAgICAvPlxuXG4gICAgICA8UGF5cGFsQ29tcG9uZW50c1xuICAgICAgICByZWY9XCJwYXlwYWxcIlxuICAgICAgICBwYXltZW50X2NvZGU9XCJwYXlwYWxcIlxuICAgICAgICB0aXRsZT1cIkFkZCBQYXlwYWxcIlxuICAgICAgICA6bGFiZWw9XCJ7XG4gICAgICAgICAgc3VibWl0OiB0aGlzLiR0KCdBZGQgUGF5cGFsJyksXG4gICAgICAgICAgbm90ZXM6IHRoaXMuJHQoJ1BheSB1c2luZyB5b3VyIHBheXBhbCBhY2NvdW50JyksXG4gICAgICAgICAgcGF5bWVudF90aXRsZTogdGhpcy4kdCgnUGF5IHVzaW5nIFBheXBhbCcpLFxuICAgICAgICAgIHBheW1lbnRfc3VidGl0bGU6IHRoaXMuJHQoXG4gICAgICAgICAgICAnWW91IHdpbGwgcmUtZGlyZWN0IHRvIHBheXBhbCBhY2NvdW50IHRvIGxvZ2luIHRvIHlvdXIgYWNjb3VudC4nXG4gICAgICAgICAgKSxcbiAgICAgICAgfVwiXG4gICAgICAgIDpwYXltZW50X2NyZWRlbnRpYWxzPVwiY3JlZGVudGlhbHNcIlxuICAgICAgICBAYWZ0ZXItYWRkcGF5bWVudD1cImFmdGVyQWRkcGF5bWVudFwiXG4gICAgICAgIEBhZnRlci1wYXltZW50PVwiYWZ0ZXJQYXltZW50XCJcbiAgICAgICAgQGFmdGVyLWNhbmNlbC1wYXltZW50PVwiQWZ0ZXJDYW5jZWxQYXltZW50XCJcbiAgICAgICAgQGFmdGVyLXN1Y2Nlc3NmdWxwYXltZW50PVwiYWZ0ZXJTdWNjZXNzZnVscGF5bWVudFwiXG4gICAgICAgIEBhZnRlci1mYWlsZWRwYXltZW50PVwiYWZ0ZXJGYWlsZWRwYXltZW50XCJcbiAgICAgICAgQGNsb3NlLXBheW1lbnQ9XCJjbG9zZVBheW1lbnRcIlxuICAgICAgLz5cblxuICAgICAgPE1lcmNhZG9wYWdvQ29tcG9uZW50c1xuICAgICAgICByZWY9XCJtZXJjYWRvcGFnb1wiXG4gICAgICAgIHBheW1lbnRfY29kZT1cIm1lcmNhZG9wYWdvXCJcbiAgICAgICAgdGl0bGU9XCJBZGQgTWVyY2Fkb3BhZ29cIlxuICAgICAgICA6bGFiZWw9XCJ7XG4gICAgICAgICAgc3VibWl0OiB0aGlzLiR0KCdBZGQgTWVyY2Fkb3BhZ28nKSxcbiAgICAgICAgICBzdWJtaXRfZm9ybTogdGhpcy4kdCgnU3VibWl0JyksXG4gICAgICAgICAgbm90ZXM6IHRoaXMuJHQoJ1BheSB1c2luZyB5b3VyIG1lcmNhZG9wYWdvIGFjY291bnQnKSxcbiAgICAgICAgfVwiXG4gICAgICAgIDpwYXltZW50X2NyZWRlbnRpYWxzPVwiY3JlZGVudGlhbHNcIlxuICAgICAgICBAYWZ0ZXItYWRkcGF5bWVudD1cImFmdGVyQWRkcGF5bWVudFwiXG4gICAgICAgIEBhZnRlci1wYXltZW50PVwiYWZ0ZXJQYXltZW50XCJcbiAgICAgICAgQGFmdGVyLWNhbmNlbC1wYXltZW50PVwiQWZ0ZXJDYW5jZWxQYXltZW50XCJcbiAgICAgICAgQGFmdGVyLXN1Y2Nlc3NmdWxwYXltZW50PVwiYWZ0ZXJTdWNjZXNzZnVscGF5bWVudFwiXG4gICAgICAgIEBhZnRlci1mYWlsZWRwYXltZW50PVwiYWZ0ZXJGYWlsZWRwYXltZW50XCJcbiAgICAgICAgQGNsb3NlLXBheW1lbnQ9XCJjbG9zZVBheW1lbnRcIlxuICAgICAgLz5cblxuICAgICAgPCEtLSBQQVlNRU5UUyBDT01QT05FTlRTIC0tPlxuICAgIDwvcS1wYWdlPlxuICA8L3EtcHVsbC10by1yZWZyZXNoPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IGRlZmluZUFzeW5jQ29tcG9uZW50IH0gZnJvbSBcInZ1ZVwiO1xuaW1wb3J0IEFQSWludGVyZmFjZSBmcm9tIFwic3JjL2FwaS9BUElpbnRlcmZhY2VcIjtcbmltcG9ydCB7IHVzZVBheW1lbnRTdG9yZSB9IGZyb20gXCJzdG9yZXMvUGF5bWVudFN0b3JlXCI7XG5pbXBvcnQgeyB1c2VEYXRhU3RvcmUgfSBmcm9tIFwic3RvcmVzL0RhdGFTdG9yZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiV2FsbGV0RGlnaXRhbFwiLFxuICBjb21wb25lbnRzOiB7XG4gICAgV2FsbGV0QnVub3M6IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+XG4gICAgICBpbXBvcnQoXCJjb21wb25lbnRzL1dhbGxldEJ1bm9zLnZ1ZVwiKVxuICAgICksXG4gICAgV2FsbGV0VG9wdXBmb3JtOiBkZWZpbmVBc3luY0NvbXBvbmVudCgoKSA9PlxuICAgICAgaW1wb3J0KFwiY29tcG9uZW50cy9XYWxsZXRUb3B1cGZvcm0udnVlXCIpXG4gICAgKSxcbiAgICBXYWxsZXRUb3B1cHJlY2VpcHQ6IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+XG4gICAgICBpbXBvcnQoXCJjb21wb25lbnRzL1dhbGxldFRvcHVwcmVjZWlwdC52dWVcIilcbiAgICApLFxuICAgIC8vIFBBWU1FTlQgQ09NUE9ORU5UU1xuICAgIFN0cmlwZUNvbXBvbmVudHM6IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+XG4gICAgICBpbXBvcnQoXCJjb21wb25lbnRzL1N0cmlwZUNvbXBvbmVudHMudnVlXCIpXG4gICAgKSxcbiAgICBSYXpvcnBheUNvbXBvbmVudHM6IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+XG4gICAgICBpbXBvcnQoXCJjb21wb25lbnRzL1Jhem9ycGF5Q29tcG9uZW50cy52dWVcIilcbiAgICApLFxuICAgIFBheXBhbENvbXBvbmVudHM6IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+XG4gICAgICBpbXBvcnQoXCJjb21wb25lbnRzL1BheXBhbENvbXBvbmVudHMudnVlXCIpXG4gICAgKSxcbiAgICBNZXJjYWRvcGFnb0NvbXBvbmVudHM6IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+XG4gICAgICBpbXBvcnQoXCJjb21wb25lbnRzL01lcmNhZG9wYWdvQ29tcG9uZW50cy52dWVcIilcbiAgICApLFxuICB9LFxuICBzZXR1cCgpIHtcbiAgICBjb25zdCBQYXltZW50U3RvcmUgPSB1c2VQYXltZW50U3RvcmUoKTtcbiAgICBjb25zdCBEYXRhU3RvcmUgPSB1c2VEYXRhU3RvcmUoKTtcbiAgICByZXR1cm4geyBQYXltZW50U3RvcmUsIERhdGFTdG9yZSB9O1xuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsb2FkaW5nX2JhbGFuY2U6IGZhbHNlLFxuICAgICAgYmFsYW5jZTogMCxcbiAgICAgIGNyZWRlbnRpYWxzOiBbXSxcbiAgICAgIHJlY2VpcHRfZGF0YTogW10sXG4gICAgICBkYXRhOiBbXSxcbiAgICAgIHBhZ2U6IDAsXG4gICAgICBpc19yZWZyZXNoOiB1bmRlZmluZWQsXG4gICAgICB0YWI6IFwiYWxsXCIsXG4gICAgICB0YWJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcImFsbFwiLFxuICAgICAgICAgIGxhYmVsOiB0aGlzLiR0KFwiQWxsXCIpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJvcmRlclwiLFxuICAgICAgICAgIGxhYmVsOiB0aGlzLiR0KFwiT3JkZXJzXCIpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJyZWZ1bmRcIixcbiAgICAgICAgICBsYWJlbDogdGhpcy4kdChcIlJlZnVuZHNcIiksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcInRvcHVwXCIsXG4gICAgICAgICAgbGFiZWw6IHRoaXMuJHQoXCJUb3AtdXBzXCIpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJjYXNoYmFja1wiLFxuICAgICAgICAgIGxhYmVsOiB0aGlzLiR0KFwiQ2FzaGJhY2tzXCIpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJhZGp1c3RtZW50XCIsXG4gICAgICAgICAgbGFiZWw6IHRoaXMuJHQoXCJBZGp1c3RtZW50XCIpLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuZ2V0V2FsbGV0QmFsYW5jZSgpO1xuICAgIHRoaXMuZ2V0UGF5bWVudENyZWRlbnRpYWxzKCk7XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgaGFzRGF0YSgpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmRhdGEpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHJlZnJlc2goZG9uZSkge1xuICAgICAgdGhpcy5pc19yZWZyZXNoID0gZG9uZTtcbiAgICAgIHRoaXMucmVzZXRQYWdlKCk7XG4gICAgICB0aGlzLmdldFdhbGxldEJhbGFuY2UoKTtcbiAgICAgIHRoaXMuJHJlZnMuYnVub3MuZ2V0RGlzY291bnQoKTtcbiAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gICB0aGlzLmdldFdhbGxldEJhbGFuY2UoKTtcbiAgICAgIC8vIH0sIDEwMCk7XG4gICAgfSxcbiAgICBnZXRQYXltZW50Q3JlZGVudGlhbHMoKSB7XG4gICAgICBBUElpbnRlcmZhY2UuZmV0Y2hEYXRhQnlUb2tlblBvc3QoXCJnZXRQYXltZW50Q3JlZGVudGlhbHNcIilcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmNyZWRlbnRpYWxzID0gZGF0YS5kZXRhaWxzO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7fSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHt9KTtcbiAgICB9LFxuICAgIGdldFdhbGxldEJhbGFuY2UoKSB7XG4gICAgICB0aGlzLmxvYWRpbmdfYmFsYW5jZSA9IHRydWU7XG4gICAgICBBUElpbnRlcmZhY2UuZmV0Y2hEYXRhQnlUb2tlblBvc3QoXCJnZXRXYWxsZXRCYWxhbmNlXCIpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEuY29kZSA9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLmJhbGFuY2UgPSBkYXRhLmRldGFpbHMudG90YWw7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYmFsYW5jZSA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7fSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmdfYmFsYW5jZSA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHJlc2V0UGFnZSgpIHtcbiAgICAgIHRoaXMucmVzZXRQYWdpbmF0aW9uKCk7XG4gICAgfSxcbiAgICByZXNldFBhZ2luYXRpb24oKSB7XG4gICAgICB0aGlzLnBhZ2UgPSAwO1xuICAgICAgdGhpcy5kYXRhID0gW107XG4gICAgICB0aGlzLiRyZWZzLm5zY3JvbGxbMF0ucmVzZXQoKTtcbiAgICAgIHRoaXMuJHJlZnMubnNjcm9sbFswXS5yZXN1bWUoKTtcbiAgICAgIHRoaXMuJHJlZnMubnNjcm9sbFswXS50cmlnZ2VyKCk7XG4gICAgfSxcbiAgICB0YWJDaGFuZ2UodmFsdWUpIHtcbiAgICAgIHRoaXMucGFnZSA9IDA7XG4gICAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICB9LFxuICAgIGdldFdhbGxldFRyYW5zYWN0aW9uKGluZGV4LCBkb25lKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5wYWdlID0gaW5kZXg7XG4gICAgICBBUElpbnRlcmZhY2UuZmV0Y2hEYXRhQnlUb2tlblBvc3QoXG4gICAgICAgIFwiZ2V0V2FsbGV0VHJhbnNhY3Rpb25cIixcbiAgICAgICAgXCJwYWdlPVwiICsgaW5kZXggKyBcIiZ0cmFuc2FjdGlvbl90eXBlPVwiICsgdGhpcy50YWJcbiAgICAgIClcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YS5jb2RlID09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5wdXNoKGRhdGEuZGV0YWlscy5kYXRhKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kcmVmcy5uc2Nyb2xsWzBdLnN0b3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBpZiAodGhpcy4kcmVmcy5uc2Nyb2xsKSB7XG4gICAgICAgICAgICB0aGlzLiRyZWZzLm5zY3JvbGxbMF0uc3RvcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBkb25lKCk7XG4gICAgICAgICAgaWYgKCFBUElpbnRlcmZhY2UuZW1wdHkodGhpcy5pc19yZWZyZXNoKSkge1xuICAgICAgICAgICAgdGhpcy5pc19yZWZyZXNoKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGFmdGVyUHJlcGFyZXBheW1lbnQoZGF0YSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy4kcmVmc1tkYXRhLnBheW1lbnRfY29kZV0uRG9wYXltZW50KGRhdGEuZGF0YSwgZGF0YSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBBUElpbnRlcmZhY2Uubm90aWZ5KFwiZGFya1wiLCBlcnJvciwgXCJlcnJvclwiLCB0aGlzLiRxKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFmdGVyU3VjY2Vzc2Z1bHBheW1lbnQoZGF0YSkge1xuICAgICAgdGhpcy5yZWNlaXB0X2RhdGEgPSBkYXRhO1xuICAgICAgdGhpcy4kcmVmcy50b3B1cC5kaWFsb2cgPSBmYWxzZTtcbiAgICAgIHRoaXMuJHJlZnMucmVjZWlwdC5kaWFsb2cgPSB0cnVlO1xuICAgIH0sXG4gICAgYWZ0ZXJSZWNlaXB0Y2xvc2UoKSB7XG4gICAgICB0aGlzLmdldFdhbGxldEJhbGFuY2UoKTtcbiAgICAgIHRoaXMucmVzZXRQYWdlKCk7XG4gICAgfSxcbiAgICBhZnRlckNhbmNlbFBheW1lbnQoZGF0YSkge1xuICAgICAgY29uc29sZS5sb2coXCJhZnRlckNhbmNlbFBheW1lbnRcIik7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgIGlmICghQVBJaW50ZXJmYWNlLmVtcHR5KGRhdGEpKSB7XG4gICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJkYXJrXCIsIGRhdGEsIFwiZXJyb3JcIiwgdGhpcy4kcSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBjbG9zZVBheW1lbnQoKSB7XG4gICAgICB0aGlzLiRyZWZzLnRvcHVwLmRpYWxvZyA9IGZhbHNlO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iXSwiZmlsZSI6ImFzc2V0cy9XYWxsZXREaWdpdGFsLjJlM2I0YWVlLmpzIn0=
