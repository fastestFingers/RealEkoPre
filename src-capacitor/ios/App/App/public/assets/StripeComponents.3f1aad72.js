import { Q as QSpace } from "./QSpace.f164c087.js";
import { _ as _export_sfc, m as APIinterface, p as openBlock, q as createBlock, t as withCtx, f as createVNode, Y as QBtn, a9 as QCardSection, U as createBaseVNode, Z as toDisplayString, aY as QInput, b2 as QSeparator, bE as QCardActions, a8 as QCard, aB as QDialog } from "./index.61ed5618.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QInnerLoading } from "./QInnerLoading.abe2afe6.js";
import { Q as QForm } from "./QForm.7ded9d38.js";
const _sfc_main = {
  name: "StripeComponents",
  props: ["title", "label", "payment_code", "payment_credentials"],
  data() {
    return {
      show_modal: false,
      data: [],
      loading: false,
      visible: false,
      client_secret: "",
      customer_id: "",
      publish_key: "",
      stripe: void 0,
      cardElement: void 0,
      cardholder_name: "",
      merchant_id: "",
      merchant_type: ""
    };
  },
  methods: {
    showPaymentForm() {
      this.show_modal = true;
      this.createCustomer();
    },
    close() {
      this.show_modal = false;
    },
    createCustomer() {
      if (typeof this.payment_credentials[this.payment_code] !== "undefined" && this.payment_credentials[this.payment_code] !== null) {
        this.merchant_id = this.payment_credentials[this.payment_code].merchant_id;
        this.merchant_type = this.payment_credentials[this.payment_code].merchant_type;
      }
      const $params = {
        merchant_id: this.merchant_id,
        payment_code: this.payment_code,
        merchant_type: this.merchant_type,
        reference: ""
      };
      this.loading = true;
      this.visible = true;
      APIinterface.StripeCreateCustomer($params).then((data) => {
        this.client_secret = data.details.client_secret;
        this.customer_id = data.details.customer_id;
        this.initStripe();
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data) => {
        this.loading = false;
        this.visible = false;
      });
    },
    initStripe() {
      if (window.Stripe == null) {
        new Promise((resolve) => {
          const doc = window.document;
          const scriptId = "stripe-script";
          const scriptTag = doc.createElement("script");
          scriptTag.id = scriptId;
          scriptTag.setAttribute("src", "https://js.stripe.com/v3/");
          doc.head.appendChild(scriptTag);
          scriptTag.onload = () => {
            resolve();
          };
        }).then(() => {
          this.renderCard();
        });
      } else {
        this.renderCard();
      }
    },
    renderCard() {
      const style = {
        base: {
          color: "#32325d",
          fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
          fontSmoothing: "antialiased",
          fontSize: "16px",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#fa755a",
          iconColor: "#fa755a"
        }
      };
      if (typeof this.payment_credentials[this.payment_code] !== "undefined" && this.payment_credentials[this.payment_code] !== null) {
        this.publish_key = this.payment_credentials[this.payment_code].attr2;
        this.stripe = Stripe(this.publish_key);
        const elements = this.stripe.elements();
        this.cardElement = elements.create("card", { style });
        setTimeout(() => {
          this.cardElement.mount(this.$refs.card_element);
        }, 500);
      } else {
        APIinterface.notify(
          "dark",
          "invalid payment credentials",
          "warning",
          this.$q
        );
      }
    },
    onSubmit() {
      this.loading = true;
      this.visible = true;
      this.stripe.confirmCardSetup(this.client_secret, {
        payment_method: {
          card: this.cardElement,
          billing_details: {
            name: this.cardholder_name
          }
        }
      }).then((result) => {
        this.loading = false;
        this.visible = false;
        if (result.error) {
          if (result.error.code === "setup_intent_unexpected_state") {
            this.createIntent();
          }
        } else {
          this.savePayment(result.setupIntent.payment_method);
        }
      });
    },
    savePayment(paymentMethodId) {
      this.loading = true;
      const $params = {
        payment_method_id: paymentMethodId,
        merchant_id: this.merchant_id,
        payment_code: this.payment_code,
        merchant_type: this.merchant_type,
        reference: this.reference
      };
      APIinterface.StripeSavePayment($params).then((data) => {
        this.close();
        this.$emit("afterAddpayment");
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data) => {
        this.loading = false;
      });
    },
    createIntent() {
      const $params = {
        customer_id: this.customer_id,
        merchant_id: this.merchant_id,
        payment_code: this.payment_code,
        merchant_type: this.merchant_type
      };
      APIinterface.StripeCreateIntent($params).then((data) => {
        this.close();
        this.$emit("afterAddpayment");
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data) => {
        this.loading = false;
      });
    },
    PaymentRender(data) {
      const params = {
        cart_uuid: data.cart_uuid,
        order_uuid: data.order_uuid,
        payment_uuid: data.payment_uuid,
        payment_code: data.payment_code
      };
      APIinterface.showLoadingBox(
        this.$t("Processing payment") + "<br/>" + this.$t("don't close this window"),
        this.$q
      );
      APIinterface.StripePaymentIntent(params).then((data2) => {
        this.$emit("afterPayment", data2.details);
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data2) => {
        APIinterface.hideLoadingBox(this.$q);
      });
    },
    Dopayment(data) {
      APIinterface.showLoadingBox(
        this.$t("Processing payment") + "<br/>" + this.$t("don't close this window"),
        this.$q
      );
      APIinterface.fetchDataByTokenPostPayment("StripeProcesspayment", {
        data
      }).then((data2) => {
        this.$emit("afterSuccessfulpayment", data2.details);
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data2) => {
        APIinterface.hideLoadingBox(this.$q);
      });
    }
  }
};
const _hoisted_1 = { class: "text-weight-bold no-margin" };
const _hoisted_2 = { class: "q-ma-sm" };
const _hoisted_3 = { class: "font12" };
const _hoisted_4 = {
  class: "q-mb-md",
  ref: "card_element"
};
const _hoisted_5 = { class: "font11" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QDialog, {
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
          createVNode(QForm, { onSubmit: $options.onSubmit }, {
            default: withCtx(() => [
              createVNode(QCardSection, {
                class: "q-pa-md",
                style: { "padding-bottom": "0px" }
              }, {
                default: withCtx(() => [
                  createBaseVNode("h5", _hoisted_1, toDisplayString($props.title), 1),
                  createBaseVNode("div", _hoisted_2, [
                    createBaseVNode("p", _hoisted_3, toDisplayString($props.label.notes), 1)
                  ]),
                  createVNode(QInput, {
                    dense: "",
                    "bg-color": _ctx.$q.dark.mode ? "grey600" : "mygrey",
                    color: _ctx.$q.dark.mode ? "grey300" : "primary",
                    outlined: "",
                    modelValue: $data.cardholder_name,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.cardholder_name = $event),
                    rules: [
                      (val) => val && val.length > 0 || "this field is required"
                    ],
                    label: _ctx.$t("Cardholder name")
                  }, null, 8, ["bg-color", "color", "modelValue", "rules", "label"]),
                  createBaseVNode("div", _hoisted_4, null, 512),
                  createBaseVNode("p", _hoisted_5, toDisplayString(_ctx.$t("I authorise to send instructions to the financial")) + " " + toDisplayString(_ctx.$t(
                    "institution that issued my card to take payments from my card"
                  )) + " " + toDisplayString(_ctx.$t("account in accordance with the terms of my agreement")), 1),
                  createVNode(QInnerLoading, {
                    showing: $data.visible,
                    "label-style": "font-size: 1.1em"
                  }, null, 8, ["showing"])
                ]),
                _: 1
              }),
              createVNode(QSeparator, { spaced: "" }),
              createVNode(QCardActions, null, {
                default: withCtx(() => [
                  createVNode(QBtn, {
                    type: "submit",
                    label: $props.label.submit,
                    loading: $data.loading,
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
          }, 8, ["onSubmit"])
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["modelValue"]);
}
var StripeComponents = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "StripeComponents.vue"]]);
export { StripeComponents as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RyaXBlQ29tcG9uZW50cy4zZjFhYWQ3Mi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvU3RyaXBlQ29tcG9uZW50cy52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8cS1kaWFsb2dcbiAgICB2LW1vZGVsPVwic2hvd19tb2RhbFwiXG4gICAgcGVyc2lzdGVudFxuICAgIHRyYW5zaXRpb24tc2hvdz1cImZhZGVcIlxuICAgIHRyYW5zaXRpb24taGlkZT1cImZhZGVcIlxuICA+XG4gICAgPHEtY2FyZCBzdHlsZT1cIndpZHRoOiA1MDBweDsgbWF4LXdpZHRoOiA4MHZ3XCI+XG4gICAgICA8cS10b29sYmFyIGNsYXNzPVwidGV4dC1wcmltYXJ5IHRvcC10b29sYmFyIHEtcGwtbWRcIiBkZW5zZT5cbiAgICAgICAgPHEtc3BhY2U+PC9xLXNwYWNlPlxuICAgICAgICA8cS1idG5cbiAgICAgICAgICBAY2xpY2s9XCJzaG93X21vZGFsID0gIXRydWVcIlxuICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgIHNxdWFyZVxuICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICB0ZXh0LWNvbG9yPVwiZ3JleVwiXG4gICAgICAgICAgaWNvbj1cImxhcyBsYS10aW1lc1wiXG4gICAgICAgICAgZGVuc2VcbiAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICBjbGFzcz1cImJvcmRlci1ncmV5IHJhZGl1czhcIlxuICAgICAgICAvPlxuICAgICAgPC9xLXRvb2xiYXI+XG5cbiAgICAgIDxxLWZvcm0gQHN1Ym1pdD1cIm9uU3VibWl0XCI+XG4gICAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cInEtcGEtbWRcIiBzdHlsZT1cInBhZGRpbmctYm90dG9tOiAwcHhcIj5cbiAgICAgICAgICA8aDUgY2xhc3M9XCJ0ZXh0LXdlaWdodC1ib2xkIG5vLW1hcmdpblwiPnt7IHRpdGxlIH19PC9oNT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicS1tYS1zbVwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJmb250MTJcIj57eyBsYWJlbC5ub3RlcyB9fTwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgOmJnLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXk2MDAnIDogJ215Z3JleSdcIlxuICAgICAgICAgICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXkzMDAnIDogJ3ByaW1hcnknXCJcbiAgICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgICB2LW1vZGVsPVwiY2FyZGhvbGRlcl9uYW1lXCJcbiAgICAgICAgICAgIDpydWxlcz1cIltcbiAgICAgICAgICAgICAgKHZhbCkgPT4gKHZhbCAmJiB2YWwubGVuZ3RoID4gMCkgfHwgJ3RoaXMgZmllbGQgaXMgcmVxdWlyZWQnLFxuICAgICAgICAgICAgXVwiXG4gICAgICAgICAgICA6bGFiZWw9XCIkdCgnQ2FyZGhvbGRlciBuYW1lJylcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInEtbWItbWRcIiByZWY9XCJjYXJkX2VsZW1lbnRcIj48L2Rpdj5cblxuICAgICAgICAgIDxwIGNsYXNzPVwiZm9udDExXCI+XG4gICAgICAgICAgICB7eyAkdChcIkkgYXV0aG9yaXNlIHRvIHNlbmQgaW5zdHJ1Y3Rpb25zIHRvIHRoZSBmaW5hbmNpYWxcIikgfX1cbiAgICAgICAgICAgIHt7XG4gICAgICAgICAgICAgICR0KFxuICAgICAgICAgICAgICAgIFwiaW5zdGl0dXRpb24gdGhhdCBpc3N1ZWQgbXkgY2FyZCB0byB0YWtlIHBheW1lbnRzIGZyb20gbXkgY2FyZFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB7eyAkdChcImFjY291bnQgaW4gYWNjb3JkYW5jZSB3aXRoIHRoZSB0ZXJtcyBvZiBteSBhZ3JlZW1lbnRcIikgfX1cbiAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICA8cS1pbm5lci1sb2FkaW5nIDpzaG93aW5nPVwidmlzaWJsZVwiIGxhYmVsLXN0eWxlPVwiZm9udC1zaXplOiAxLjFlbVwiIC8+XG4gICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG5cbiAgICAgICAgPHEtc2VwYXJhdG9yIHNwYWNlZCAvPlxuICAgICAgICA8cS1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIDpsYWJlbD1cImxhYmVsLnN1Ym1pdFwiXG4gICAgICAgICAgICA6bG9hZGluZz1cImxvYWRpbmdcIlxuICAgICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5IHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgY2xhc3M9XCJmdWxsLXdpZHRoIHRleHQtd2VpZ2h0LWJvbGRcIlxuICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3EtY2FyZC1hY3Rpb25zPlxuICAgICAgPC9xLWZvcm0+XG4gICAgPC9xLWNhcmQ+XG4gIDwvcS1kaWFsb2c+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEFQSWludGVyZmFjZSBmcm9tIFwic3JjL2FwaS9BUElpbnRlcmZhY2VcIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJTdHJpcGVDb21wb25lbnRzXCIsXG4gIHByb3BzOiBbXCJ0aXRsZVwiLCBcImxhYmVsXCIsIFwicGF5bWVudF9jb2RlXCIsIFwicGF5bWVudF9jcmVkZW50aWFsc1wiXSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2hvd19tb2RhbDogZmFsc2UsXG4gICAgICBkYXRhOiBbXSxcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICBjbGllbnRfc2VjcmV0OiBcIlwiLFxuICAgICAgY3VzdG9tZXJfaWQ6IFwiXCIsXG4gICAgICBwdWJsaXNoX2tleTogXCJcIixcbiAgICAgIHN0cmlwZTogdW5kZWZpbmVkLFxuICAgICAgY2FyZEVsZW1lbnQ6IHVuZGVmaW5lZCxcbiAgICAgIGNhcmRob2xkZXJfbmFtZTogXCJcIixcbiAgICAgIG1lcmNoYW50X2lkOiBcIlwiLFxuICAgICAgbWVyY2hhbnRfdHlwZTogXCJcIixcbiAgICB9O1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgc2hvd1BheW1lbnRGb3JtKCkge1xuICAgICAgdGhpcy5zaG93X21vZGFsID0gdHJ1ZTtcbiAgICAgIHRoaXMuY3JlYXRlQ3VzdG9tZXIoKTtcbiAgICB9LFxuICAgIGNsb3NlKCkge1xuICAgICAgdGhpcy5zaG93X21vZGFsID0gZmFsc2U7XG4gICAgfSxcbiAgICBjcmVhdGVDdXN0b21lcigpIHtcbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIHRoaXMucGF5bWVudF9jcmVkZW50aWFsc1t0aGlzLnBheW1lbnRfY29kZV0gIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgdGhpcy5wYXltZW50X2NyZWRlbnRpYWxzW3RoaXMucGF5bWVudF9jb2RlXSAhPT0gbnVsbFxuICAgICAgKSB7XG4gICAgICAgIHRoaXMubWVyY2hhbnRfaWQgPVxuICAgICAgICAgIHRoaXMucGF5bWVudF9jcmVkZW50aWFsc1t0aGlzLnBheW1lbnRfY29kZV0ubWVyY2hhbnRfaWQ7XG4gICAgICAgIHRoaXMubWVyY2hhbnRfdHlwZSA9XG4gICAgICAgICAgdGhpcy5wYXltZW50X2NyZWRlbnRpYWxzW3RoaXMucGF5bWVudF9jb2RlXS5tZXJjaGFudF90eXBlO1xuICAgICAgfVxuICAgICAgY29uc3QgJHBhcmFtcyA9IHtcbiAgICAgICAgbWVyY2hhbnRfaWQ6IHRoaXMubWVyY2hhbnRfaWQsXG4gICAgICAgIHBheW1lbnRfY29kZTogdGhpcy5wYXltZW50X2NvZGUsXG4gICAgICAgIG1lcmNoYW50X3R5cGU6IHRoaXMubWVyY2hhbnRfdHlwZSxcbiAgICAgICAgcmVmZXJlbmNlOiBcIlwiLFxuICAgICAgfTtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgICAgQVBJaW50ZXJmYWNlLlN0cmlwZUNyZWF0ZUN1c3RvbWVyKCRwYXJhbXMpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5jbGllbnRfc2VjcmV0ID0gZGF0YS5kZXRhaWxzLmNsaWVudF9zZWNyZXQ7XG4gICAgICAgICAgdGhpcy5jdXN0b21lcl9pZCA9IGRhdGEuZGV0YWlscy5jdXN0b21lcl9pZDtcbiAgICAgICAgICB0aGlzLmluaXRTdHJpcGUoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJkYXJrXCIsIGVycm9yLCBcImVycm9yXCIsIHRoaXMuJHEpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGluaXRTdHJpcGUoKSB7XG4gICAgICBpZiAod2luZG93LlN0cmlwZSA9PSBudWxsKSB7XG4gICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgY29uc3QgZG9jID0gd2luZG93LmRvY3VtZW50O1xuICAgICAgICAgIGNvbnN0IHNjcmlwdElkID0gXCJzdHJpcGUtc2NyaXB0XCI7XG4gICAgICAgICAgY29uc3Qgc2NyaXB0VGFnID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgc2NyaXB0VGFnLmlkID0gc2NyaXB0SWQ7XG4gICAgICAgICAgc2NyaXB0VGFnLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcImh0dHBzOi8vanMuc3RyaXBlLmNvbS92My9cIik7XG4gICAgICAgICAgZG9jLmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0VGFnKTtcbiAgICAgICAgICBzY3JpcHRUYWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMucmVuZGVyQ2FyZCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyQ2FyZCgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgcmVuZGVyQ2FyZCgpIHtcbiAgICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgICBiYXNlOiB7XG4gICAgICAgICAgY29sb3I6IFwiIzMyMzI1ZFwiLFxuICAgICAgICAgIGZvbnRGYW1pbHk6ICdcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZicsXG4gICAgICAgICAgZm9udFNtb290aGluZzogXCJhbnRpYWxpYXNlZFwiLFxuICAgICAgICAgIGZvbnRTaXplOiBcIjE2cHhcIixcbiAgICAgICAgICBcIjo6cGxhY2Vob2xkZXJcIjoge1xuICAgICAgICAgICAgY29sb3I6IFwiI2FhYjdjNFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGludmFsaWQ6IHtcbiAgICAgICAgICBjb2xvcjogXCIjZmE3NTVhXCIsXG4gICAgICAgICAgaWNvbkNvbG9yOiBcIiNmYTc1NWFcIixcbiAgICAgICAgfSxcbiAgICAgIH07XG5cbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIHRoaXMucGF5bWVudF9jcmVkZW50aWFsc1t0aGlzLnBheW1lbnRfY29kZV0gIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgdGhpcy5wYXltZW50X2NyZWRlbnRpYWxzW3RoaXMucGF5bWVudF9jb2RlXSAhPT0gbnVsbFxuICAgICAgKSB7XG4gICAgICAgIHRoaXMucHVibGlzaF9rZXkgPSB0aGlzLnBheW1lbnRfY3JlZGVudGlhbHNbdGhpcy5wYXltZW50X2NvZGVdLmF0dHIyO1xuXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB0aGlzLnN0cmlwZSA9IFN0cmlwZSh0aGlzLnB1Ymxpc2hfa2V5KTtcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLnN0cmlwZS5lbGVtZW50cygpO1xuICAgICAgICB0aGlzLmNhcmRFbGVtZW50ID0gZWxlbWVudHMuY3JlYXRlKFwiY2FyZFwiLCB7IHN0eWxlIH0pO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmNhcmRFbGVtZW50Lm1vdW50KHRoaXMuJHJlZnMuY2FyZF9lbGVtZW50KTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXG4gICAgICAgICAgXCJkYXJrXCIsXG4gICAgICAgICAgXCJpbnZhbGlkIHBheW1lbnQgY3JlZGVudGlhbHNcIixcbiAgICAgICAgICBcIndhcm5pbmdcIixcbiAgICAgICAgICB0aGlzLiRxXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSxcbiAgICBvblN1Ym1pdCgpIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgICAgdGhpcy5zdHJpcGVcbiAgICAgICAgLmNvbmZpcm1DYXJkU2V0dXAodGhpcy5jbGllbnRfc2VjcmV0LCB7XG4gICAgICAgICAgcGF5bWVudF9tZXRob2Q6IHtcbiAgICAgICAgICAgIGNhcmQ6IHRoaXMuY2FyZEVsZW1lbnQsXG4gICAgICAgICAgICBiaWxsaW5nX2RldGFpbHM6IHtcbiAgICAgICAgICAgICAgbmFtZTogdGhpcy5jYXJkaG9sZGVyX25hbWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB7XG4gICAgICAgICAgICAvLyB0aGlzLmVycm9yWzBdID0gcmVzdWx0LmVycm9yLm1lc3NhZ2VcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IuY29kZSA9PT0gXCJzZXR1cF9pbnRlbnRfdW5leHBlY3RlZF9zdGF0ZVwiKSB7XG4gICAgICAgICAgICAgIHRoaXMuY3JlYXRlSW50ZW50KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2F2ZVBheW1lbnQocmVzdWx0LnNldHVwSW50ZW50LnBheW1lbnRfbWV0aG9kKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgc2F2ZVBheW1lbnQocGF5bWVudE1ldGhvZElkKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgY29uc3QgJHBhcmFtcyA9IHtcbiAgICAgICAgcGF5bWVudF9tZXRob2RfaWQ6IHBheW1lbnRNZXRob2RJZCxcbiAgICAgICAgbWVyY2hhbnRfaWQ6IHRoaXMubWVyY2hhbnRfaWQsXG4gICAgICAgIHBheW1lbnRfY29kZTogdGhpcy5wYXltZW50X2NvZGUsXG4gICAgICAgIG1lcmNoYW50X3R5cGU6IHRoaXMubWVyY2hhbnRfdHlwZSxcbiAgICAgICAgcmVmZXJlbmNlOiB0aGlzLnJlZmVyZW5jZSxcbiAgICAgIH07XG4gICAgICBBUElpbnRlcmZhY2UuU3RyaXBlU2F2ZVBheW1lbnQoJHBhcmFtcylcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgdGhpcy4kZW1pdChcImFmdGVyQWRkcGF5bWVudFwiKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJkYXJrXCIsIGVycm9yLCBcImVycm9yXCIsIHRoaXMuJHEpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGNyZWF0ZUludGVudCgpIHtcbiAgICAgIGNvbnN0ICRwYXJhbXMgPSB7XG4gICAgICAgIGN1c3RvbWVyX2lkOiB0aGlzLmN1c3RvbWVyX2lkLFxuICAgICAgICBtZXJjaGFudF9pZDogdGhpcy5tZXJjaGFudF9pZCxcbiAgICAgICAgcGF5bWVudF9jb2RlOiB0aGlzLnBheW1lbnRfY29kZSxcbiAgICAgICAgbWVyY2hhbnRfdHlwZTogdGhpcy5tZXJjaGFudF90eXBlLFxuICAgICAgfTtcbiAgICAgIEFQSWludGVyZmFjZS5TdHJpcGVDcmVhdGVJbnRlbnQoJHBhcmFtcylcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgdGhpcy4kZW1pdChcImFmdGVyQWRkcGF5bWVudFwiKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJkYXJrXCIsIGVycm9yLCBcImVycm9yXCIsIHRoaXMuJHEpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIFBheW1lbnRSZW5kZXIoZGF0YSkge1xuICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICBjYXJ0X3V1aWQ6IGRhdGEuY2FydF91dWlkLFxuICAgICAgICBvcmRlcl91dWlkOiBkYXRhLm9yZGVyX3V1aWQsXG4gICAgICAgIHBheW1lbnRfdXVpZDogZGF0YS5wYXltZW50X3V1aWQsXG4gICAgICAgIHBheW1lbnRfY29kZTogZGF0YS5wYXltZW50X2NvZGUsXG4gICAgICB9O1xuICAgICAgQVBJaW50ZXJmYWNlLnNob3dMb2FkaW5nQm94KFxuICAgICAgICB0aGlzLiR0KFwiUHJvY2Vzc2luZyBwYXltZW50XCIpICtcbiAgICAgICAgICBcIjxici8+XCIgK1xuICAgICAgICAgIHRoaXMuJHQoXCJkb24ndCBjbG9zZSB0aGlzIHdpbmRvd1wiKSxcbiAgICAgICAgdGhpcy4kcVxuICAgICAgKTtcbiAgICAgIEFQSWludGVyZmFjZS5TdHJpcGVQYXltZW50SW50ZW50KHBhcmFtcylcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLiRlbWl0KFwiYWZ0ZXJQYXltZW50XCIsIGRhdGEuZGV0YWlscyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBBUElpbnRlcmZhY2Uubm90aWZ5KFwiZGFya1wiLCBlcnJvciwgXCJlcnJvclwiLCB0aGlzLiRxKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBBUElpbnRlcmZhY2UuaGlkZUxvYWRpbmdCb3godGhpcy4kcSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgRG9wYXltZW50KGRhdGEpIHtcbiAgICAgIEFQSWludGVyZmFjZS5zaG93TG9hZGluZ0JveChcbiAgICAgICAgdGhpcy4kdChcIlByb2Nlc3NpbmcgcGF5bWVudFwiKSArXG4gICAgICAgICAgXCI8YnIvPlwiICtcbiAgICAgICAgICB0aGlzLiR0KFwiZG9uJ3QgY2xvc2UgdGhpcyB3aW5kb3dcIiksXG4gICAgICAgIHRoaXMuJHFcbiAgICAgICk7XG4gICAgICBBUElpbnRlcmZhY2UuZmV0Y2hEYXRhQnlUb2tlblBvc3RQYXltZW50KFwiU3RyaXBlUHJvY2Vzc3BheW1lbnRcIiwge1xuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLiRlbWl0KFwiYWZ0ZXJTdWNjZXNzZnVscGF5bWVudFwiLCBkYXRhLmRldGFpbHMpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgQVBJaW50ZXJmYWNlLm5vdGlmeShcImRhcmtcIiwgZXJyb3IsIFwiZXJyb3JcIiwgdGhpcy4kcSk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgQVBJaW50ZXJmYWNlLmhpZGVMb2FkaW5nQm94KHRoaXMuJHEpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbImRhdGEiLCJfY3JlYXRlQmxvY2siLCJfY3JlYXRlVk5vZGUiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUE2RUEsTUFBSyxZQUFVO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixPQUFPLENBQUMsU0FBUyxTQUFTLGdCQUFnQixxQkFBcUI7QUFBQSxFQUMvRCxPQUFPO0FBQ0wsV0FBTztBQUFBLE1BQ0wsWUFBWTtBQUFBLE1BQ1osTUFBTSxDQUFFO0FBQUEsTUFDUixTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxlQUFlO0FBQUEsTUFDZixhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixRQUFRO0FBQUEsTUFDUixhQUFhO0FBQUEsTUFDYixpQkFBaUI7QUFBQSxNQUNqQixhQUFhO0FBQUEsTUFDYixlQUFlO0FBQUE7RUFFbEI7QUFBQSxFQUNELFNBQVM7QUFBQSxJQUNQLGtCQUFrQjtBQUNoQixXQUFLLGFBQWE7QUFDbEIsV0FBSyxlQUFjO0FBQUEsSUFDcEI7QUFBQSxJQUNELFFBQVE7QUFDTixXQUFLLGFBQWE7QUFBQSxJQUNuQjtBQUFBLElBQ0QsaUJBQWlCO0FBQ2YsVUFDRSxPQUFPLEtBQUssb0JB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
