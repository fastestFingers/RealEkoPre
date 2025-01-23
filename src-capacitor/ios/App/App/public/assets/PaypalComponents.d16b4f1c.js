import { Q as QSpace } from "./QSpace.f164c087.js";
import { _ as _export_sfc, m as APIinterface, p as openBlock, V as createElementBlock, f as createVNode, t as withCtx, a8 as QCard, Y as QBtn, a9 as QCardSection, U as createBaseVNode, Z as toDisplayString, b2 as QSeparator, bE as QCardActions, aB as QDialog, aa as withDirectives, F as Fragment } from "./index.61ed5618.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { C as ClosePopup } from "./ClosePopup.9d17b53c.js";
import { l as loadScript } from "./index.d0b40bd3.js";
let paypalHandle;
const _sfc_main = {
  name: "PaypalComponents",
  props: ["title", "label", "payment_code", "payment_credentials"],
  data() {
    return {
      show_modal: false,
      data: [],
      loading: false,
      payment_modal: false,
      client_id: "",
      force_currency: "",
      force_amount: 0,
      jwt_data: [],
      enabled_force: false
    };
  },
  methods: {
    showPaymentForm() {
      this.show_modal = true;
    },
    close() {
      this.show_modal = false;
    },
    onSubmit() {
      let merchantId = 0;
      if (typeof this.payment_credentials[this.payment_code] !== "undefined" && this.payment_credentials[this.payment_code] !== null) {
        merchantId = this.payment_credentials[this.payment_code].merchant_id;
      }
      const $data = {
        merchant_id: merchantId,
        payment_code: this.payment_code
      };
      this.loading = true;
      APIinterface.SavedPaymentProvider($data).then((data) => {
        this.close();
        this.$emit("afterAddpayment");
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data) => {
        this.loading = false;
      });
    },
    PaymentRender(data) {
      this.data = data;
      this.payment_modal = true;
      if (typeof this.payment_credentials[data.payment_code] !== "undefined" && this.payment_credentials[data.payment_code] !== null) {
        this.client_id = this.payment_credentials[data.payment_code].attr2;
      }
      if (data.force_payment_data) {
        if (data.force_payment_data.enabled_force) {
          this.enabled_force = true;
          this.force_currency = data.force_payment_data.use_currency_code;
          this.force_amount = data.force_payment_data.total_exchange;
        }
      }
      this.initPaypal();
    },
    initPaypal() {
      let currencyCode = this.data.currency;
      if (this.enabled_force) {
        currencyCode = this.force_currency;
      }
      loadScript(
        "https://www.paypal.com/sdk/js?client-id=" + this.client_id + "&currency=" + currencyCode + "&disable-funding=credit,card"
      ).then(() => {
        this.renderPaypal();
      }).catch(() => {
        APIinterface.notify(
          "negative",
          "failed loading script",
          "error_outline",
          this.$q
        );
      });
    },
    renderPaypal() {
      let Amount = this.data.total;
      if (this.enabled_force) {
        Amount = this.force_amount;
      }
      paypalHandle = paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: Amount
                }
              }
            ]
          });
        },
        onCancel: (data) => {
        },
        onError: (error) => {
          APIinterface.notify("dark", error, "error", this.$q);
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then((orderData) => {
            const transaction = orderData.purchase_units[0].payments.captures[0];
            this.CompletePaymentRequest(
              transaction.status,
              transaction.id,
              orderData.id
            );
          });
        }
      });
      paypalHandle.render(this.$refs.paypal_button);
    },
    CompletePaymentRequest(status, transaction_id, order_id) {
      let $params = {
        transaction_id,
        order_id,
        order_uuid: this.data.order_uuid,
        cart_uuid: this.data.cart_uuid
      };
      APIinterface.showLoadingBox(
        "Processing payment..<br/>don't close this window",
        this.$q
      );
      APIinterface.PaypalVerifyPayment($params).then((data) => {
        this.$emit("afterPayment", data.details);
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data) => {
        APIinterface.hideLoadingBox(this.$q);
      });
    },
    Dopayment(data, datas) {
      this.jwt_data = data;
      this.force_amount = datas.amount;
      this.force_currency = datas.currency_code;
      if (typeof this.payment_credentials[datas.payment_code] !== "undefined" && this.payment_credentials[datas.payment_code] !== null) {
        this.client_id = this.payment_credentials[datas.payment_code].attr2;
      }
      this.PaypalInit();
    },
    PaypalInit() {
      loadScript(
        "https://www.paypal.com/sdk/js?client-id=" + this.client_id + "&currency=" + this.force_currency + "&disable-funding=credit,card"
      ).then(() => {
        this.renderPayment();
      }).catch(() => {
        APIinterface.notify(
          "negative",
          "failed loading script",
          "error_outline",
          this.$q
        );
      });
    },
    renderPayment() {
      this.$emit("closePayment");
      let Amount = this.force_amount;
      this.payment_modal = true;
      paypalHandle = paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: parseFloat(Amount)
                }
              }
            ]
          });
        },
        onCancel: (data) => {
        },
        onError: (err) => {
          this.error[0] = this.on_error.error;
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then((orderData) => {
            var transaction = orderData.purchase_units[0].payments.captures[0];
            this.processPayment(
              transaction.status,
              transaction.id,
              orderData.id
            );
          });
        }
      });
      setTimeout(() => {
        paypalHandle.render(this.$refs.paypal_button);
      }, 500);
    },
    processPayment(status, transaction_id, order_id) {
      this.payment_modal = false;
      APIinterface.showLoadingBox(
        this.$t("Processing payment") + "<br/>" + this.$t("don't close this window"),
        this.$q
      );
      APIinterface.fetchDataByTokenPostPayment("Paypalprocesspayment", {
        data: this.jwt_data,
        transaction_id,
        order_id
      }).then((data) => {
        this.$emit("afterSuccessfulpayment", data.details);
      }).catch((error) => {
        this.$emit("afterCancelPayment", error);
      }).then((data) => {
        APIinterface.hideLoadingBox(this.$q);
      });
    }
  }
};
const _hoisted_1 = { class: "text-weight-bold no-margin" };
const _hoisted_2 = { class: "q-ma-sm" };
const _hoisted_3 = { class: "font12" };
const _hoisted_4 = { class: "text-weight-bold no-margin" };
const _hoisted_5 = { class: "q-ma-sm" };
const _hoisted_6 = { class: "font12" };
const _hoisted_7 = {
  ref: "paypal_button",
  class: "margin-auto full-width"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(QDialog, {
      modelValue: $data.show_modal,
      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.show_modal = $event),
      persistent: "",
      "transition-show": "fade",
      "transition-hide": "fade"
    }, {
      default: withCtx(() => [
        createVNode(QCard, { style: { "width": "500px", "max-width": "80vw" } }, {
          default: withCtx(() => [
            createVNode(QToolbar, {
              class: "text-primary top-toolbar q-pl-md",
              dense: ""
            }, {
              default: withCtx(() => [
                createVNode(QSpace),
                createVNode(QBtn, {
                  onClick: _cache[0] || (_cache[0] = ($event) => $data.show_modal = false),
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
            createVNode(QCardSection, { class: "q-pa-md" }, {
              default: withCtx(() => [
                createBaseVNode("h5", _hoisted_1, toDisplayString($props.title), 1),
                createBaseVNode("div", _hoisted_2, [
                  createBaseVNode("p", _hoisted_3, toDisplayString($props.label.notes), 1)
                ])
              ]),
              _: 1
            }),
            createVNode(QSeparator, { spaced: "" }),
            createVNode(QCardActions, null, {
              default: withCtx(() => [
                createVNode(QBtn, {
                  label: $props.label.submit,
                  loading: $data.loading,
                  onClick: _cache[1] || (_cache[1] = ($event) => $options.onSubmit()),
                  unelevated: "",
                  "no-caps": "",
                  color: "primary text-white",
                  class: "full-width text-weight-bold",
                  size: "lg"
                }, null, 8, ["label", "loading"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["modelValue"]),
    createVNode(QDialog, {
      modelValue: $data.payment_modal,
      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.payment_modal = $event),
      persistent: "",
      "transition-show": "scale",
      "transition-hide": "scale"
    }, {
      default: withCtx(() => [
        createVNode(QCard, { style: { "width": "500px", "max-width": "80vw" } }, {
          default: withCtx(() => [
            createVNode(QCardSection, { class: "row items-center q-pb-none q-pa-none" }, {
              default: withCtx(() => [
                createVNode(QSpace),
                withDirectives(createVNode(QBtn, {
                  icon: "eva-close-outline",
                  flat: "",
                  round: "",
                  dense: ""
                }, null, 512), [
                  [ClosePopup]
                ])
              ]),
              _: 1
            }),
            createVNode(QCardSection, { class: "q-pa-md" }, {
              default: withCtx(() => [
                createBaseVNode("h5", _hoisted_4, toDisplayString($props.label.payment_title), 1),
                createBaseVNode("div", _hoisted_5, [
                  createBaseVNode("p", _hoisted_6, toDisplayString($props.label.payment_subtitle), 1)
                ])
              ]),
              _: 1
            }),
            createVNode(QSeparator, { spaced: "" }),
            createVNode(QCardActions, null, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_7, null, 512)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["modelValue"])
  ], 64);
}
var PaypalComponents = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "PaypalComponents.vue"]]);
export { PaypalComponents as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF5cGFsQ29tcG9uZW50cy5kMTZiNGYxYy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvUGF5cGFsQ29tcG9uZW50cy52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8cS1kaWFsb2dcbiAgICB2LW1vZGVsPVwic2hvd19tb2RhbFwiXG4gICAgcGVyc2lzdGVudFxuICAgIHRyYW5zaXRpb24tc2hvdz1cImZhZGVcIlxuICAgIHRyYW5zaXRpb24taGlkZT1cImZhZGVcIlxuICA+XG4gICAgPHEtY2FyZCBzdHlsZT1cIndpZHRoOiA1MDBweDsgbWF4LXdpZHRoOiA4MHZ3XCI+XG4gICAgICA8cS10b29sYmFyIGNsYXNzPVwidGV4dC1wcmltYXJ5IHRvcC10b29sYmFyIHEtcGwtbWRcIiBkZW5zZT5cbiAgICAgICAgPHEtc3BhY2U+PC9xLXNwYWNlPlxuICAgICAgICA8cS1idG5cbiAgICAgICAgICBAY2xpY2s9XCJzaG93X21vZGFsID0gIXRydWVcIlxuICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgIHNxdWFyZVxuICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICB0ZXh0LWNvbG9yPVwiZ3JleVwiXG4gICAgICAgICAgaWNvbj1cImxhcyBsYS10aW1lc1wiXG4gICAgICAgICAgZGVuc2VcbiAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICBjbGFzcz1cImJvcmRlci1ncmV5IHJhZGl1czhcIlxuICAgICAgICAvPlxuICAgICAgPC9xLXRvb2xiYXI+XG5cbiAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cInEtcGEtbWRcIj5cbiAgICAgICAgPGg1IGNsYXNzPVwidGV4dC13ZWlnaHQtYm9sZCBuby1tYXJnaW5cIj57eyB0aXRsZSB9fTwvaDU+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJxLW1hLXNtXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJmb250MTJcIj57eyBsYWJlbC5ub3RlcyB9fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuXG4gICAgICA8cS1zZXBhcmF0b3Igc3BhY2VkIC8+XG4gICAgICA8cS1jYXJkLWFjdGlvbnM+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIDpsYWJlbD1cImxhYmVsLnN1Ym1pdFwiXG4gICAgICAgICAgOmxvYWRpbmc9XCJsb2FkaW5nXCJcbiAgICAgICAgICBAY2xpY2s9XCJvblN1Ym1pdCgpXCJcbiAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeSB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICBjbGFzcz1cImZ1bGwtd2lkdGggdGV4dC13ZWlnaHQtYm9sZFwiXG4gICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgLz5cbiAgICAgIDwvcS1jYXJkLWFjdGlvbnM+XG4gICAgPC9xLWNhcmQ+XG4gIDwvcS1kaWFsb2c+XG5cbiAgPHEtZGlhbG9nXG4gICAgdi1tb2RlbD1cInBheW1lbnRfbW9kYWxcIlxuICAgIHBlcnNpc3RlbnRcbiAgICB0cmFuc2l0aW9uLXNob3c9XCJzY2FsZVwiXG4gICAgdHJhbnNpdGlvbi1oaWRlPVwic2NhbGVcIlxuICA+XG4gICAgPHEtY2FyZCBzdHlsZT1cIndpZHRoOiA1MDBweDsgbWF4LXdpZHRoOiA4MHZ3XCI+XG4gICAgICA8cS1jYXJkLXNlY3Rpb24gY2xhc3M9XCJyb3cgaXRlbXMtY2VudGVyIHEtcGItbm9uZSBxLXBhLW5vbmVcIj5cbiAgICAgICAgPHEtc3BhY2UgLz5cbiAgICAgICAgPHEtYnRuIGljb249XCJldmEtY2xvc2Utb3V0bGluZVwiIGZsYXQgcm91bmQgZGVuc2Ugdi1jbG9zZS1wb3B1cCAvPlxuICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cblxuICAgICAgPHEtY2FyZC1zZWN0aW9uIGNsYXNzPVwicS1wYS1tZFwiPlxuICAgICAgICA8aDUgY2xhc3M9XCJ0ZXh0LXdlaWdodC1ib2xkIG5vLW1hcmdpblwiPnt7IGxhYmVsLnBheW1lbnRfdGl0bGUgfX08L2g1PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicS1tYS1zbVwiPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZm9udDEyXCI+e3sgbGFiZWwucGF5bWVudF9zdWJ0aXRsZSB9fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuXG4gICAgICA8cS1zZXBhcmF0b3Igc3BhY2VkIC8+XG4gICAgICA8cS1jYXJkLWFjdGlvbnM+XG4gICAgICAgIDxkaXYgcmVmPVwicGF5cGFsX2J1dHRvblwiIGNsYXNzPVwibWFyZ2luLWF1dG8gZnVsbC13aWR0aFwiIC8+XG4gICAgICA8L3EtY2FyZC1hY3Rpb25zPlxuICAgIDwvcS1jYXJkPlxuICA8L3EtZGlhbG9nPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBBUElpbnRlcmZhY2UgZnJvbSBcInNyYy9hcGkvQVBJaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBsb2FkU2NyaXB0IH0gZnJvbSBcInZ1ZS1wbHVnaW4tbG9hZC1zY3JpcHRcIjtcblxubGV0IHBheXBhbEhhbmRsZTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJQYXlwYWxDb21wb25lbnRzXCIsXG4gIHByb3BzOiBbXCJ0aXRsZVwiLCBcImxhYmVsXCIsIFwicGF5bWVudF9jb2RlXCIsIFwicGF5bWVudF9jcmVkZW50aWFsc1wiXSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2hvd19tb2RhbDogZmFsc2UsXG4gICAgICBkYXRhOiBbXSxcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgcGF5bWVudF9tb2RhbDogZmFsc2UsXG4gICAgICBjbGllbnRfaWQ6IFwiXCIsXG4gICAgICBmb3JjZV9jdXJyZW5jeTogXCJcIixcbiAgICAgIGZvcmNlX2Ftb3VudDogMCxcbiAgICAgIGp3dF9kYXRhOiBbXSxcbiAgICAgIGVuYWJsZWRfZm9yY2U6IGZhbHNlLFxuICAgIH07XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBzaG93UGF5bWVudEZvcm0oKSB7XG4gICAgICB0aGlzLnNob3dfbW9kYWwgPSB0cnVlO1xuICAgIH0sXG4gICAgY2xvc2UoKSB7XG4gICAgICB0aGlzLnNob3dfbW9kYWwgPSBmYWxzZTtcbiAgICB9LFxuICAgIG9uU3VibWl0KCkge1xuICAgICAgbGV0IG1lcmNoYW50SWQgPSAwO1xuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgdGhpcy5wYXltZW50X2NyZWRlbnRpYWxzW3RoaXMucGF5bWVudF9jb2RlXSAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICB0aGlzLnBheW1lbnRfY3JlZGVudGlhbHNbdGhpcy5wYXltZW50X2NvZGVdICE9PSBudWxsXG4gICAgICApIHtcbiAgICAgICAgbWVyY2hhbnRJZCA9IHRoaXMucGF5bWVudF9jcmVkZW50aWFsc1t0aGlzLnBheW1lbnRfY29kZV0ubWVyY2hhbnRfaWQ7XG4gICAgICB9XG4gICAgICBjb25zdCAkZGF0YSA9IHtcbiAgICAgICAgbWVyY2hhbnRfaWQ6IG1lcmNoYW50SWQsXG4gICAgICAgIHBheW1lbnRfY29kZTogdGhpcy5wYXltZW50X2NvZGUsXG4gICAgICB9O1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIEFQSWludGVyZmFjZS5TYXZlZFBheW1lbnRQcm92aWRlcigkZGF0YSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgdGhpcy4kZW1pdChcImFmdGVyQWRkcGF5bWVudFwiKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJkYXJrXCIsIGVycm9yLCBcImVycm9yXCIsIHRoaXMuJHEpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIFBheW1lbnRSZW5kZXIoZGF0YSkge1xuICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgIHRoaXMucGF5bWVudF9tb2RhbCA9IHRydWU7XG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiB0aGlzLnBheW1lbnRfY3JlZGVudGlhbHNbZGF0YS5wYXltZW50X2NvZGVdICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgIHRoaXMucGF5bWVudF9jcmVkZW50aWFsc1tkYXRhLnBheW1lbnRfY29kZV0gIT09IG51bGxcbiAgICAgICkge1xuICAgICAgICB0aGlzLmNsaWVudF9pZCA9IHRoaXMucGF5bWVudF9jcmVkZW50aWFsc1tkYXRhLnBheW1lbnRfY29kZV0uYXR0cjI7XG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhLmZvcmNlX3BheW1lbnRfZGF0YSkge1xuICAgICAgICBpZiAoZGF0YS5mb3JjZV9wYXltZW50X2RhdGEuZW5hYmxlZF9mb3JjZSkge1xuICAgICAgICAgIHRoaXMuZW5hYmxlZF9mb3JjZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5mb3JjZV9jdXJyZW5jeSA9IGRhdGEuZm9yY2VfcGF5bWVudF9kYXRhLnVzZV9jdXJyZW5jeV9jb2RlO1xuICAgICAgICAgIHRoaXMuZm9yY2VfYW1vdW50ID0gZGF0YS5mb3JjZV9wYXltZW50X2RhdGEudG90YWxfZXhjaGFuZ2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5pbml0UGF5cGFsKCk7XG4gICAgfSxcbiAgICBpbml0UGF5cGFsKCkge1xuICAgICAgbGV0IGN1cnJlbmN5Q29kZSA9IHRoaXMuZGF0YS5jdXJyZW5jeTtcbiAgICAgIGlmICh0aGlzLmVuYWJsZWRfZm9yY2UpIHtcbiAgICAgICAgY3VycmVuY3lDb2RlID0gdGhpcy5mb3JjZV9jdXJyZW5jeTtcbiAgICAgIH1cblxuICAgICAgbG9hZFNjcmlwdChcbiAgICAgICAgXCJodHRwczovL3d3dy5wYXlwYWwuY29tL3Nkay9qcz9jbGllbnQtaWQ9XCIgK1xuICAgICAgICAgIHRoaXMuY2xpZW50X2lkICtcbiAgICAgICAgICBcIiZjdXJyZW5jeT1cIiArXG4gICAgICAgICAgY3VycmVuY3lDb2RlICtcbiAgICAgICAgICBcIiZkaXNhYmxlLWZ1bmRpbmc9Y3JlZGl0LGNhcmRcIlxuICAgICAgKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJQYXlwYWwoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICBBUElpbnRlcmZhY2Uubm90aWZ5KFxuICAgICAgICAgICAgXCJuZWdhdGl2ZVwiLFxuICAgICAgICAgICAgXCJmYWlsZWQgbG9hZGluZyBzY3JpcHRcIixcbiAgICAgICAgICAgIFwiZXJyb3Jfb3V0bGluZVwiLFxuICAgICAgICAgICAgdGhpcy4kcVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgcmVuZGVyUGF5cGFsKCkge1xuICAgICAgbGV0IEFtb3VudCA9IHRoaXMuZGF0YS50b3RhbDtcbiAgICAgIGlmICh0aGlzLmVuYWJsZWRfZm9yY2UpIHtcbiAgICAgICAgQW1vdW50ID0gdGhpcy5mb3JjZV9hbW91bnQ7XG4gICAgICB9XG5cbiAgICAgIHBheXBhbEhhbmRsZSA9IHBheXBhbC5CdXR0b25zKHtcbiAgICAgICAgY3JlYXRlT3JkZXI6IChkYXRhLCBhY3Rpb25zKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGFjdGlvbnMub3JkZXIuY3JlYXRlKHtcbiAgICAgICAgICAgIHB1cmNoYXNlX3VuaXRzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhbW91bnQ6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBBbW91bnQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2FuY2VsOiAoZGF0YSkgPT4ge1xuICAgICAgICAgIC8vXG4gICAgICAgIH0sXG4gICAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJkYXJrXCIsIGVycm9yLCBcImVycm9yXCIsIHRoaXMuJHEpO1xuICAgICAgICB9LFxuICAgICAgICBvbkFwcHJvdmU6IChkYXRhLCBhY3Rpb25zKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGFjdGlvbnMub3JkZXIuY2FwdHVyZSgpLnRoZW4oKG9yZGVyRGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPVxuICAgICAgICAgICAgICBvcmRlckRhdGEucHVyY2hhc2VfdW5pdHNbMF0ucGF5bWVudHMuY2FwdHVyZXNbMF07XG4gICAgICAgICAgICB0aGlzLkNvbXBsZXRlUGF5bWVudFJlcXVlc3QoXG4gICAgICAgICAgICAgIHRyYW5zYWN0aW9uLnN0YXR1cyxcbiAgICAgICAgICAgICAgdHJhbnNhY3Rpb24uaWQsXG4gICAgICAgICAgICAgIG9yZGVyRGF0YS5pZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgcGF5cGFsSGFuZGxlLnJlbmRlcih0aGlzLiRyZWZzLnBheXBhbF9idXR0b24pO1xuICAgIH0sXG4gICAgQ29tcGxldGVQYXltZW50UmVxdWVzdChzdGF0dXMsIHRyYW5zYWN0aW9uX2lkLCBvcmRlcl9pZCkge1xuICAgICAgbGV0ICRwYXJhbXMgPSB7XG4gICAgICAgIHRyYW5zYWN0aW9uX2lkOiB0cmFuc2FjdGlvbl9pZCxcbiAgICAgICAgb3JkZXJfaWQ6IG9yZGVyX2lkLFxuICAgICAgICBvcmRlcl91dWlkOiB0aGlzLmRhdGEub3JkZXJfdXVpZCxcbiAgICAgICAgY2FydF91dWlkOiB0aGlzLmRhdGEuY2FydF91dWlkLFxuICAgICAgfTtcbiAgICAgIEFQSWludGVyZmFjZS5zaG93TG9hZGluZ0JveChcbiAgICAgICAgXCJQcm9jZXNzaW5nIHBheW1lbnQuLjxici8+ZG9uJ3QgY2xvc2UgdGhpcyB3aW5kb3dcIixcbiAgICAgICAgdGhpcy4kcVxuICAgICAgKTtcbiAgICAgIEFQSWludGVyZmFjZS5QYXlwYWxWZXJpZnlQYXltZW50KCRwYXJhbXMpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy4kZW1pdChcImFmdGVyUGF5bWVudFwiLCBkYXRhLmRldGFpbHMpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgQVBJaW50ZXJmYWNlLm5vdGlmeShcImRhcmtcIiwgZXJyb3IsIFwiZXJyb3JcIiwgdGhpcy4kcSk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgQVBJaW50ZXJmYWNlLmhpZGVMb2FkaW5nQm94KHRoaXMuJHEpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIERvcGF5bWVudChkYXRhLCBkYXRhcykge1xuICAgICAgdGhpcy5qd3RfZGF0YSA9IGRhdGE7XG4gICAgICB0aGlzLmZvcmNlX2Ftb3VudCA9IGRhdGFzLmFtb3VudDtcbiAgICAgIHRoaXMuZm9yY2VfY3VycmVuY3kgPSBkYXRhcy5jdXJyZW5jeV9jb2RlO1xuXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiB0aGlzLnBheW1lbnRfY3JlZGVudGlhbHNbZGF0YXMucGF5bWVudF9jb2RlXSAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICB0aGlzLnBheW1lbnRfY3JlZGVudGlhbHNbZGF0YXMucGF5bWVudF9jb2RlXSAhPT0gbnVsbFxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuY2xpZW50X2lkID0gdGhpcy5wYXltZW50X2NyZWRlbnRpYWxzW2RhdGFzLnBheW1lbnRfY29kZV0uYXR0cjI7XG4gICAgICB9XG4gICAgICB0aGlzLlBheXBhbEluaXQoKTtcbiAgICB9LFxuICAgIFBheXBhbEluaXQoKSB7XG4gICAgICBsb2FkU2NyaXB0KFxuICAgICAgICBcImh0dHBzOi8vd3d3LnBheXBhbC5jb20vc2RrL2pzP2NsaWVudC1pZD1cIiArXG4gICAgICAgICAgdGhpcy5jbGllbnRfaWQgK1xuICAgICAgICAgIFwiJmN1cnJlbmN5PVwiICtcbiAgICAgICAgICB0aGlzLmZvcmNlX2N1cnJlbmN5ICtcbiAgICAgICAgICBcIiZkaXNhYmxlLWZ1bmRpbmc9Y3JlZGl0LGNhcmRcIlxuICAgICAgKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJQYXltZW50KCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgQVBJaW50ZXJmYWNlLm5vdGlmeShcbiAgICAgICAgICAgIFwibmVnYXRpdmVcIixcbiAgICAgICAgICAgIFwiZmFpbGVkIGxvYWRpbmcgc2NyaXB0XCIsXG4gICAgICAgICAgICBcImVycm9yX291dGxpbmVcIixcbiAgICAgICAgICAgIHRoaXMuJHFcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHJlbmRlclBheW1lbnQoKSB7XG4gICAgICB0aGlzLiRlbWl0KFwiY2xvc2VQYXltZW50XCIpO1xuICAgICAgbGV0IEFtb3VudCA9IHRoaXMuZm9yY2VfYW1vdW50O1xuXG4gICAgICB0aGlzLnBheW1lbnRfbW9kYWwgPSB0cnVlO1xuXG4gICAgICBwYXlwYWxIYW5kbGUgPSBwYXlwYWwuQnV0dG9ucyh7XG4gICAgICAgIGNyZWF0ZU9yZGVyOiAoZGF0YSwgYWN0aW9ucykgPT4ge1xuICAgICAgICAgIHJldHVybiBhY3Rpb25zLm9yZGVyLmNyZWF0ZSh7XG4gICAgICAgICAgICBwdXJjaGFzZV91bml0czogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYW1vdW50OiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogcGFyc2VGbG9hdChBbW91bnQpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvbkNhbmNlbDogKGRhdGEpID0+IHtcbiAgICAgICAgICAvL1xuICAgICAgICB9LFxuICAgICAgICBvbkVycm9yOiAoZXJyKSA9PiB7XG4gICAgICAgICAgdGhpcy5lcnJvclswXSA9IHRoaXMub25fZXJyb3IuZXJyb3I7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQXBwcm92ZTogKGRhdGEsIGFjdGlvbnMpID0+IHtcbiAgICAgICAgICByZXR1cm4gYWN0aW9ucy5vcmRlci5jYXB0dXJlKCkudGhlbigob3JkZXJEYXRhKSA9PiB7XG4gICAgICAgICAgICB2YXIgdHJhbnNhY3Rpb24gPSBvcmRlckRhdGEucHVyY2hhc2VfdW5pdHNbMF0ucGF5bWVudHMuY2FwdHVyZXNbMF07XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NQYXltZW50KFxuICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5zdGF0dXMsXG4gICAgICAgICAgICAgIHRyYW5zYWN0aW9uLmlkLFxuICAgICAgICAgICAgICBvcmRlckRhdGEuaWRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHBheXBhbEhhbmRsZS5yZW5kZXIodGhpcy4kcmVmcy5wYXlwYWxfYnV0dG9uKTtcbiAgICAgIH0sIDUwMCk7XG4gICAgfSxcbiAgICBwcm9jZXNzUGF5bWVudChzdGF0dXMsIHRyYW5zYWN0aW9uX2lkLCBvcmRlcl9pZCkge1xuICAgICAgdGhpcy5wYXltZW50X21vZGFsID0gZmFsc2U7XG4gICAgICBBUElpbnRlcmZhY2Uuc2hvd0xvYWRpbmdCb3goXG4gICAgICAgIHRoaXMuJHQoXCJQcm9jZXNzaW5nIHBheW1lbnRcIikgK1xuICAgICAgICAgIFwiPGJyLz5cIiArXG4gICAgICAgICAgdGhpcy4kdChcImRvbid0IGNsb3NlIHRoaXMgd2luZG93XCIpLFxuICAgICAgICB0aGlzLiRxXG4gICAgICApO1xuICAgICAgQVBJaW50ZXJmYWNlLmZldGNoRGF0YUJ5VG9rZW5Qb3N0UGF5bWVudChcIlBheXBhbHByb2Nlc3NwYXltZW50XCIsIHtcbiAgICAgICAgZGF0YTogdGhpcy5qd3RfZGF0YSxcbiAgICAgICAgdHJhbnNhY3Rpb25faWQ6IHRyYW5zYWN0aW9uX2lkLFxuICAgICAgICBvcmRlcl9pZDogb3JkZXJfaWQsXG4gICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuJGVtaXQoXCJhZnRlclN1Y2Nlc3NmdWxwYXltZW50XCIsIGRhdGEuZGV0YWlscyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLiRlbWl0KFwiYWZ0ZXJDYW5jZWxQYXltZW50XCIsIGVycm9yKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBBUElpbnRlcmZhY2UuaGlkZUxvYWRpbmdCb3godGhpcy4kcSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgLy9cbiAgfSxcbn07XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfY3JlYXRlVk5vZGUiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUE4RUEsSUFBSTtBQUNKLE1BQUssWUFBVTtBQUFBLEVBQ2IsTUFBTTtBQUFBLEVBQ04sT0FBTyxDQUFDLFNBQVMsU0FBUyxnQkFBZ0IscUJBQXFCO0FBQUEsRUFDL0QsT0FBTztBQUNMLFdBQU87QUFBQSxNQUNMLFlBQVk7QUFBQSxNQUNaLE1BQU0sQ0FBRTtBQUFBLE1BQ1IsU0FBUztBQUFBLE1BQ1QsZUFBZTtBQUFBLE1BQ2YsV0FBVztBQUFBLE1BQ1gsZ0JBQWdCO0FBQUEsTUFDaEIsY0FBYztBQUFB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
