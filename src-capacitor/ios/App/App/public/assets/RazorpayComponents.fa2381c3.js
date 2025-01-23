import { Q as QSpace } from "./QSpace.f164c087.js";
import { _ as _export_sfc, m as APIinterface, p as openBlock, q as createBlock, t as withCtx, f as createVNode, Y as QBtn, a9 as QCardSection, U as createBaseVNode, Z as toDisplayString, b2 as QSeparator, bE as QCardActions, a8 as QCard, aB as QDialog } from "./index.61ed5618.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { l as loadScript } from "./index.d0b40bd3.js";
const _sfc_main = {
  name: "RazorpayComponents",
  props: ["title", "label", "payment_code", "payment_credentials"],
  data() {
    return {
      show_modal: false,
      data: [],
      loading: false,
      credentials: [],
      orders: [],
      jwt_data: [],
      force_amount: 0,
      force_currency: ""
    };
  },
  methods: {
    showPaymentForm() {
      this.show_modal = true;
      this.setCredentials();
    },
    close() {
      this.show_modal = false;
    },
    closePayment() {
      this.$emit("afterCancelPayment");
    },
    setCredentials() {
      if (typeof this.payment_credentials[this.payment_code] !== "undefined" && this.payment_credentials[this.payment_code] !== null) {
        this.credentials = this.payment_credentials[this.payment_code];
      }
    },
    onSubmit() {
      const $data = {
        payment_code: this.payment_code,
        merchant_id: this.credentials.merchant_id,
        merchant_type: this.credentials.merchant_type
      };
      this.loading = true;
      APIinterface.RazorpayCreateCustomer($data).then((data) => {
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
      const $data = {
        cart_uuid: data.cart_uuid,
        order_uuid: data.order_uuid,
        payment_code: data.payment_code,
        merchant_id: this.credentials.merchant_id,
        merchant_type: this.credentials.merchant_type
      };
      APIinterface.showLoadingBox(
        "Getting payment information..<br/>don't close this window",
        this.$q
      );
      APIinterface.RazorpayCreateOrder($data).then((data2) => {
        this.orders = data2.details;
        this.initRazorPay();
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data2) => {
        APIinterface.hideLoadingBox(this.$q);
      });
    },
    initRazorPay() {
      loadScript("https://checkout.razorpay.com/v1/checkout.js").then(() => {
        this.initPayment();
      }).catch(() => {
        APIinterface.notify(
          "negative",
          "failed loading script",
          "error_outline",
          this.$q
        );
      });
    },
    initPayment() {
      try {
        const options = {
          key: this.credentials.attr2,
          amount: this.orders.amount,
          currency: this.orders.currency,
          name: this.orders.name,
          description: this.orders.description,
          order_id: this.orders.order_id,
          customer_id: this.orders.customer_id,
          handler: (response) => {
            this.verifyPayment(response);
          },
          theme: {
            color: "#3399cc"
          },
          modal: {
            ondismiss: (data) => {
              this.closePayment();
            }
          }
        };
        const rzr_handle = new Razorpay(options);
        rzr_handle.on("payment.failed", (response) => {
        });
        rzr_handle.open();
      } catch (err) {
        APIinterface.notify("dark", err, "error", this.$q);
      }
    },
    verifyPayment(data) {
      this.setCredentials();
      var $params = {
        cart_uuid: this.data.cart_uuid,
        order_uuid: this.data.order_uuid,
        payment_code: this.data.payment_code,
        merchant_id: this.credentials.merchant_id,
        merchant_type: this.credentials.merchant_type,
        razorpay_payment_id: data.razorpay_payment_id,
        razorpay_order_id: data.razorpay_order_id,
        razorpay_signature: data.razorpay_signature
      };
      APIinterface.showLoadingBox(
        "Processing payment..<br/>don't close this window",
        this.$q
      );
      APIinterface.RazorpayVerifyPayment($params).then((data2) => {
        this.$emit("afterPayment", data2.details);
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data2) => {
        APIinterface.hideLoadingBox(this.$q);
      });
    },
    Dopayment(data, datas) {
      this.jwt_data = data;
      this.force_amount = datas.amount;
      this.force_currency = datas.currency_code;
      this.setCredentials();
      APIinterface.showLoadingBox(
        this.$t("Processing payment") + "<br/>" + this.$t("don't close this window"),
        this.$q
      );
      APIinterface.fetchDataByTokenPostPayment("Razorpaycreateneworder", {
        data
      }).then((data2) => {
        this.orders = data2.details;
        this.RazorPayinit();
      }).catch((error) => {
        this.$emit("afterCancelPayment", error);
      }).then((data2) => {
        APIinterface.hideLoadingBox(this.$q);
      });
    },
    RazorPayinit() {
      loadScript("https://checkout.razorpay.com/v1/checkout.js").then(() => {
        this.Paymentinit();
      }).catch(() => {
        APIinterface.notify(
          "negative",
          "failed loading script",
          "error_outline",
          this.$q
        );
      });
    },
    Paymentinit() {
      try {
        let options = {
          key: this.credentials.attr2,
          amount: this.orders.amount,
          currency: this.orders.currency,
          name: this.orders.name,
          description: this.orders.description,
          order_id: this.orders.order_id,
          customer_id: this.orders.customer_id,
          handler: (response) => {
            this.processPayment(response);
          },
          theme: {
            color: "#3399cc"
          },
          modal: {
            ondismiss: (data) => {
              this.closePayment();
            }
          }
        };
        var rzr_handle = new Razorpay(options);
        rzr_handle.on("payment.failed", (response) => {
        });
        this.$emit("closeLoader");
        rzr_handle.open();
      } catch (err) {
        this.$emit("afterCancelPayment", err.message);
      }
    },
    processPayment(data) {
      APIinterface.showLoadingBox(
        this.$t("Processing payment") + "<br/>" + this.$t("don't close this window"),
        this.$q
      );
      APIinterface.fetchDataByTokenPostPayment("Razorpayprocesspayment", {
        data: this.jwt_data,
        razorpay_payment_id: data.razorpay_payment_id,
        razorpay_order_id: data.razorpay_order_id,
        razorpay_signature: data.razorpay_signature
      }).then((data2) => {
        this.$emit("afterSuccessfulpayment", data2.details);
      }).catch((error) => {
        this.$emit("afterCancelPayment", error);
      }).then((data2) => {
        APIinterface.hideLoadingBox(this.$q);
      });
    }
  }
};
const _hoisted_1 = { class: "text-weight-bold no-margin" };
const _hoisted_2 = { class: "q-ma-sm" };
const _hoisted_3 = { class: "font12" };
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
  }, 8, ["modelValue"]);
}
var RazorpayComponents = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "RazorpayComponents.vue"]]);
export { RazorpayComponents as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmF6b3JwYXlDb21wb25lbnRzLmZhMjM4MWMzLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9SYXpvcnBheUNvbXBvbmVudHMudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHEtZGlhbG9nXG4gICAgdi1tb2RlbD1cInNob3dfbW9kYWxcIlxuICAgIHBlcnNpc3RlbnRcbiAgICB0cmFuc2l0aW9uLXNob3c9XCJmYWRlXCJcbiAgICB0cmFuc2l0aW9uLWhpZGU9XCJmYWRlXCJcbiAgPlxuICAgIDxxLWNhcmQgc3R5bGU9XCJ3aWR0aDogNTAwcHg7IG1heC13aWR0aDogODB2d1wiPlxuICAgICAgPHEtdG9vbGJhciBjbGFzcz1cInRleHQtcHJpbWFyeSB0b3AtdG9vbGJhciBxLXBsLW1kXCIgZGVuc2U+XG4gICAgICAgIDxxLXNwYWNlPjwvcS1zcGFjZT5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgQGNsaWNrPVwic2hvd19tb2RhbCA9ICF0cnVlXCJcbiAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICBzcXVhcmVcbiAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgdGV4dC1jb2xvcj1cImdyZXlcIlxuICAgICAgICAgIGljb249XCJsYXMgbGEtdGltZXNcIlxuICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgY2xhc3M9XCJib3JkZXItZ3JleSByYWRpdXM4XCJcbiAgICAgICAgLz5cbiAgICAgIDwvcS10b29sYmFyPlxuXG4gICAgICA8cS1jYXJkLXNlY3Rpb24gY2xhc3M9XCJxLXBhLW1kXCI+XG4gICAgICAgIDxoNSBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGQgbm8tbWFyZ2luXCI+e3sgdGl0bGUgfX08L2g1PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicS1tYS1zbVwiPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZm9udDEyXCI+e3sgbGFiZWwubm90ZXMgfX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cblxuICAgICAgPHEtc2VwYXJhdG9yIHNwYWNlZCAvPlxuICAgICAgPHEtY2FyZC1hY3Rpb25zPlxuICAgICAgICA8cS1idG5cbiAgICAgICAgICA6bGFiZWw9XCJsYWJlbC5zdWJtaXRcIlxuICAgICAgICAgIDpsb2FkaW5nPVwibG9hZGluZ1wiXG4gICAgICAgICAgQGNsaWNrPVwib25TdWJtaXQoKVwiXG4gICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnkgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgY2xhc3M9XCJmdWxsLXdpZHRoIHRleHQtd2VpZ2h0LWJvbGRcIlxuICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgIC8+XG4gICAgICA8L3EtY2FyZC1hY3Rpb25zPlxuICAgIDwvcS1jYXJkPlxuICA8L3EtZGlhbG9nPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBBUElpbnRlcmZhY2UgZnJvbSBcInNyYy9hcGkvQVBJaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBsb2FkU2NyaXB0IH0gZnJvbSBcInZ1ZS1wbHVnaW4tbG9hZC1zY3JpcHRcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIlJhem9ycGF5Q29tcG9uZW50c1wiLFxuICBwcm9wczogW1widGl0bGVcIiwgXCJsYWJlbFwiLCBcInBheW1lbnRfY29kZVwiLCBcInBheW1lbnRfY3JlZGVudGlhbHNcIl0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNob3dfbW9kYWw6IGZhbHNlLFxuICAgICAgZGF0YTogW10sXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIGNyZWRlbnRpYWxzOiBbXSxcbiAgICAgIG9yZGVyczogW10sXG4gICAgICBqd3RfZGF0YTogW10sXG4gICAgICBmb3JjZV9hbW91bnQ6IDAsXG4gICAgICBmb3JjZV9jdXJyZW5jeTogXCJcIixcbiAgICB9O1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgc2hvd1BheW1lbnRGb3JtKCkge1xuICAgICAgdGhpcy5zaG93X21vZGFsID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2V0Q3JlZGVudGlhbHMoKTtcbiAgICB9LFxuICAgIGNsb3NlKCkge1xuICAgICAgdGhpcy5zaG93X21vZGFsID0gZmFsc2U7XG4gICAgfSxcbiAgICBjbG9zZVBheW1lbnQoKSB7XG4gICAgICB0aGlzLiRlbWl0KFwiYWZ0ZXJDYW5jZWxQYXltZW50XCIpO1xuICAgIH0sXG4gICAgc2V0Q3JlZGVudGlhbHMoKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiB0aGlzLnBheW1lbnRfY3JlZGVudGlhbHNbdGhpcy5wYXltZW50X2NvZGVdICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgIHRoaXMucGF5bWVudF9jcmVkZW50aWFsc1t0aGlzLnBheW1lbnRfY29kZV0gIT09IG51bGxcbiAgICAgICkge1xuICAgICAgICB0aGlzLmNyZWRlbnRpYWxzID0gdGhpcy5wYXltZW50X2NyZWRlbnRpYWxzW3RoaXMucGF5bWVudF9jb2RlXTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uU3VibWl0KCkge1xuICAgICAgY29uc3QgJGRhdGEgPSB7XG4gICAgICAgIHBheW1lbnRfY29kZTogdGhpcy5wYXltZW50X2NvZGUsXG4gICAgICAgIG1lcmNoYW50X2lkOiB0aGlzLmNyZWRlbnRpYWxzLm1lcmNoYW50X2lkLFxuICAgICAgICBtZXJjaGFudF90eXBlOiB0aGlzLmNyZWRlbnRpYWxzLm1lcmNoYW50X3R5cGUsXG4gICAgICB9O1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIEFQSWludGVyZmFjZS5SYXpvcnBheUNyZWF0ZUN1c3RvbWVyKCRkYXRhKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICB0aGlzLiRlbWl0KFwiYWZ0ZXJBZGRwYXltZW50XCIpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgQVBJaW50ZXJmYWNlLm5vdGlmeShcImRhcmtcIiwgZXJyb3IsIFwiZXJyb3JcIiwgdGhpcy4kcSk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgUGF5bWVudFJlbmRlcihkYXRhKSB7XG4gICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgY29uc3QgJGRhdGEgPSB7XG4gICAgICAgIGNhcnRfdXVpZDogZGF0YS5jYXJ0X3V1aWQsXG4gICAgICAgIG9yZGVyX3V1aWQ6IGRhdGEub3JkZXJfdXVpZCxcbiAgICAgICAgcGF5bWVudF9jb2RlOiBkYXRhLnBheW1lbnRfY29kZSxcbiAgICAgICAgbWVyY2hhbnRfaWQ6IHRoaXMuY3JlZGVudGlhbHMubWVyY2hhbnRfaWQsXG4gICAgICAgIG1lcmNoYW50X3R5cGU6IHRoaXMuY3JlZGVudGlhbHMubWVyY2hhbnRfdHlwZSxcbiAgICAgIH07XG4gICAgICBBUElpbnRlcmZhY2Uuc2hvd0xvYWRpbmdCb3goXG4gICAgICAgIFwiR2V0dGluZyBwYXltZW50IGluZm9ybWF0aW9uLi48YnIvPmRvbid0IGNsb3NlIHRoaXMgd2luZG93XCIsXG4gICAgICAgIHRoaXMuJHFcbiAgICAgICk7XG4gICAgICBBUElpbnRlcmZhY2UuUmF6b3JwYXlDcmVhdGVPcmRlcigkZGF0YSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLm9yZGVycyA9IGRhdGEuZGV0YWlscztcbiAgICAgICAgICB0aGlzLmluaXRSYXpvclBheSgpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgQVBJaW50ZXJmYWNlLm5vdGlmeShcImRhcmtcIiwgZXJyb3IsIFwiZXJyb3JcIiwgdGhpcy4kcSk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgQVBJaW50ZXJmYWNlLmhpZGVMb2FkaW5nQm94KHRoaXMuJHEpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGluaXRSYXpvclBheSgpIHtcbiAgICAgIGxvYWRTY3JpcHQoXCJodHRwczovL2NoZWNrb3V0LnJhem9ycGF5LmNvbS92MS9jaGVja291dC5qc1wiKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pbml0UGF5bWVudCgpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXG4gICAgICAgICAgICBcIm5lZ2F0aXZlXCIsXG4gICAgICAgICAgICBcImZhaWxlZCBsb2FkaW5nIHNjcmlwdFwiLFxuICAgICAgICAgICAgXCJlcnJvcl9vdXRsaW5lXCIsXG4gICAgICAgICAgICB0aGlzLiRxXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBpbml0UGF5bWVudCgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAga2V5OiB0aGlzLmNyZWRlbnRpYWxzLmF0dHIyLFxuICAgICAgICAgIGFtb3VudDogdGhpcy5vcmRlcnMuYW1vdW50LFxuICAgICAgICAgIGN1cnJlbmN5OiB0aGlzLm9yZGVycy5jdXJyZW5jeSxcbiAgICAgICAgICBuYW1lOiB0aGlzLm9yZGVycy5uYW1lLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLm9yZGVycy5kZXNjcmlwdGlvbixcbiAgICAgICAgICBvcmRlcl9pZDogdGhpcy5vcmRlcnMub3JkZXJfaWQsXG4gICAgICAgICAgY3VzdG9tZXJfaWQ6IHRoaXMub3JkZXJzLmN1c3RvbWVyX2lkLFxuICAgICAgICAgIGhhbmRsZXI6IChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy52ZXJpZnlQYXltZW50KHJlc3BvbnNlKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRoZW1lOiB7XG4gICAgICAgICAgICBjb2xvcjogXCIjMzM5OWNjXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtb2RhbDoge1xuICAgICAgICAgICAgb25kaXNtaXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmNsb3NlUGF5bWVudCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICAgICAgICBjb25zdCByenJfaGFuZGxlID0gbmV3IFJhem9ycGF5KG9wdGlvbnMpO1xuICAgICAgICByenJfaGFuZGxlLm9uKFwicGF5bWVudC5mYWlsZWRcIiwgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgLy8gdGhpcy4kZW1pdCgnYWxlcnQnLCByZXNwb25zZS5lcnJvci5kZXNjcmlwdGlvbiApO1xuICAgICAgICB9KTtcbiAgICAgICAgcnpyX2hhbmRsZS5vcGVuKCk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgQVBJaW50ZXJmYWNlLm5vdGlmeShcImRhcmtcIiwgZXJyLCBcImVycm9yXCIsIHRoaXMuJHEpO1xuICAgICAgfVxuICAgIH0sXG4gICAgdmVyaWZ5UGF5bWVudChkYXRhKSB7XG4gICAgICB0aGlzLnNldENyZWRlbnRpYWxzKCk7XG4gICAgICB2YXIgJHBhcmFtcyA9IHtcbiAgICAgICAgY2FydF91dWlkOiB0aGlzLmRhdGEuY2FydF91dWlkLFxuICAgICAgICBvcmRlcl91dWlkOiB0aGlzLmRhdGEub3JkZXJfdXVpZCxcbiAgICAgICAgcGF5bWVudF9jb2RlOiB0aGlzLmRhdGEucGF5bWVudF9jb2RlLFxuICAgICAgICBtZXJjaGFudF9pZDogdGhpcy5jcmVkZW50aWFscy5tZXJjaGFudF9pZCxcbiAgICAgICAgbWVyY2hhbnRfdHlwZTogdGhpcy5jcmVkZW50aWFscy5tZXJjaGFudF90eXBlLFxuICAgICAgICByYXpvcnBheV9wYXltZW50X2lkOiBkYXRhLnJhem9ycGF5X3BheW1lbnRfaWQsXG4gICAgICAgIHJhem9ycGF5X29yZGVyX2lkOiBkYXRhLnJhem9ycGF5X29yZGVyX2lkLFxuICAgICAgICByYXpvcnBheV9zaWduYXR1cmU6IGRhdGEucmF6b3JwYXlfc2lnbmF0dXJlLFxuICAgICAgfTtcbiAgICAgIEFQSWludGVyZmFjZS5zaG93TG9hZGluZ0JveChcbiAgICAgICAgXCJQcm9jZXNzaW5nIHBheW1lbnQuLjxici8+ZG9uJ3QgY2xvc2UgdGhpcyB3aW5kb3dcIixcbiAgICAgICAgdGhpcy4kcVxuICAgICAgKTtcbiAgICAgIEFQSWludGVyZmFjZS5SYXpvcnBheVZlcmlmeVBheW1lbnQoJHBhcmFtcylcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLiRlbWl0KFwiYWZ0ZXJQYXltZW50XCIsIGRhdGEuZGV0YWlscyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBBUElpbnRlcmZhY2Uubm90aWZ5KFwiZGFya1wiLCBlcnJvciwgXCJlcnJvclwiLCB0aGlzLiRxKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBBUElpbnRlcmZhY2UuaGlkZUxvYWRpbmdCb3godGhpcy4kcSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgRG9wYXltZW50KGRhdGEsIGRhdGFzKSB7XG4gICAgICB0aGlzLmp3dF9kYXRhID0gZGF0YTtcbiAgICAgIHRoaXMuZm9yY2VfYW1vdW50ID0gZGF0YXMuYW1vdW50O1xuICAgICAgdGhpcy5mb3JjZV9jdXJyZW5jeSA9IGRhdGFzLmN1cnJlbmN5X2NvZGU7XG5cbiAgICAgIHRoaXMuc2V0Q3JlZGVudGlhbHMoKTtcblxuICAgICAgQVBJaW50ZXJmYWNlLnNob3dMb2FkaW5nQm94KFxuICAgICAgICB0aGlzLiR0KFwiUHJvY2Vzc2luZyBwYXltZW50XCIpICtcbiAgICAgICAgICBcIjxici8+XCIgK1xuICAgICAgICAgIHRoaXMuJHQoXCJkb24ndCBjbG9zZSB0aGlzIHdpbmRvd1wiKSxcbiAgICAgICAgdGhpcy4kcVxuICAgICAgKTtcbiAgICAgIEFQSWludGVyZmFjZS5mZXRjaERhdGFCeVRva2VuUG9zdFBheW1lbnQoXCJSYXpvcnBheWNyZWF0ZW5ld29yZGVyXCIsIHtcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5vcmRlcnMgPSBkYXRhLmRldGFpbHM7XG4gICAgICAgICAgdGhpcy5SYXpvclBheWluaXQoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMuJGVtaXQoXCJhZnRlckNhbmNlbFBheW1lbnRcIiwgZXJyb3IpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5oaWRlTG9hZGluZ0JveCh0aGlzLiRxKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBSYXpvclBheWluaXQoKSB7XG4gICAgICBsb2FkU2NyaXB0KFwiaHR0cHM6Ly9jaGVja291dC5yYXpvcnBheS5jb20vdjEvY2hlY2tvdXQuanNcIilcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuUGF5bWVudGluaXQoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICBBUElpbnRlcmZhY2Uubm90aWZ5KFxuICAgICAgICAgICAgXCJuZWdhdGl2ZVwiLFxuICAgICAgICAgICAgXCJmYWlsZWQgbG9hZGluZyBzY3JpcHRcIixcbiAgICAgICAgICAgIFwiZXJyb3Jfb3V0bGluZVwiLFxuICAgICAgICAgICAgdGhpcy4kcVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgUGF5bWVudGluaXQoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICBrZXk6IHRoaXMuY3JlZGVudGlhbHMuYXR0cjIsXG4gICAgICAgICAgYW1vdW50OiB0aGlzLm9yZGVycy5hbW91bnQsXG4gICAgICAgICAgY3VycmVuY3k6IHRoaXMub3JkZXJzLmN1cnJlbmN5LFxuICAgICAgICAgIG5hbWU6IHRoaXMub3JkZXJzLm5hbWUsXG4gICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMub3JkZXJzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgIG9yZGVyX2lkOiB0aGlzLm9yZGVycy5vcmRlcl9pZCxcbiAgICAgICAgICBjdXN0b21lcl9pZDogdGhpcy5vcmRlcnMuY3VzdG9tZXJfaWQsXG4gICAgICAgICAgaGFuZGxlcjogKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NQYXltZW50KHJlc3BvbnNlKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRoZW1lOiB7XG4gICAgICAgICAgICBjb2xvcjogXCIjMzM5OWNjXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtb2RhbDoge1xuICAgICAgICAgICAgb25kaXNtaXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmNsb3NlUGF5bWVudCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICB2YXIgcnpyX2hhbmRsZSA9IG5ldyBSYXpvcnBheShvcHRpb25zKTtcbiAgICAgICAgcnpyX2hhbmRsZS5vbihcInBheW1lbnQuZmFpbGVkXCIsIChyZXNwb25zZSkgPT4ge30pO1xuICAgICAgICB0aGlzLiRlbWl0KFwiY2xvc2VMb2FkZXJcIik7XG4gICAgICAgIHJ6cl9oYW5kbGUub3BlbigpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHRoaXMuJGVtaXQoXCJhZnRlckNhbmNlbFBheW1lbnRcIiwgZXJyLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH0sXG4gICAgcHJvY2Vzc1BheW1lbnQoZGF0YSkge1xuICAgICAgQVBJaW50ZXJmYWNlLnNob3dMb2FkaW5nQm94KFxuICAgICAgICB0aGlzLiR0KFwiUHJvY2Vzc2luZyBwYXltZW50XCIpICtcbiAgICAgICAgICBcIjxici8+XCIgK1xuICAgICAgICAgIHRoaXMuJHQoXCJkb24ndCBjbG9zZSB0aGlzIHdpbmRvd1wiKSxcbiAgICAgICAgdGhpcy4kcVxuICAgICAgKTtcbiAgICAgIEFQSWludGVyZmFjZS5mZXRjaERhdGFCeVRva2VuUG9zdFBheW1lbnQoXCJSYXpvcnBheXByb2Nlc3NwYXltZW50XCIsIHtcbiAgICAgICAgZGF0YTogdGhpcy5qd3RfZGF0YSxcbiAgICAgICAgcmF6b3JwYXlfcGF5bWVudF9pZDogZGF0YS5yYXpvcnBheV9wYXltZW50X2lkLFxuICAgICAgICByYXpvcnBheV9vcmRlcl9pZDogZGF0YS5yYXpvcnBheV9vcmRlcl9pZCxcbiAgICAgICAgcmF6b3JwYXlfc2lnbmF0dXJlOiBkYXRhLnJhem9ycGF5X3NpZ25hdHVyZSxcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy4kZW1pdChcImFmdGVyU3VjY2Vzc2Z1bHBheW1lbnRcIiwgZGF0YS5kZXRhaWxzKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMuJGVtaXQoXCJhZnRlckNhbmNlbFBheW1lbnRcIiwgZXJyb3IpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5oaWRlTG9hZGluZ0JveCh0aGlzLiRxKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICAvL1xuICB9LFxufTtcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbImRhdGEiLCJfY3JlYXRl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
