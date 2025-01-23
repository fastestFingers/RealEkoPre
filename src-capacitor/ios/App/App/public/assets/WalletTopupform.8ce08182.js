import { Q as QSpace } from "./QSpace.f164c087.js";
import { _ as _export_sfc, S as useDataStorePersisted, m as APIinterface, p as openBlock, q as createBlock, t as withCtx, f as createVNode, a9 as QCardSection, U as createBaseVNode, Z as toDisplayString, aa as withDirectives, Y as QBtn, V as createElementBlock, aY as QInput, F as Fragment, a8 as QCard, aB as QDialog } from "./index.61ed5618.js";
import { Q as QImg } from "./QImg.6c27044c.js";
import { Q as QForm } from "./QForm.7ded9d38.js";
import { C as ClosePopup } from "./ClosePopup.9d17b53c.js";
const _sfc_main = {
  name: "WalletTopupform",
  setup() {
    const DataStorePersisted = useDataStorePersisted();
    return { DataStorePersisted };
  },
  data() {
    return {
      dialog: false,
      amount: 1,
      loading: false,
      default_payment: []
    };
  },
  mounted() {
    this.getCustomerDefaultPayment();
  },
  computed: {
    hasPayment() {
      if (Object.keys(this.default_payment).length > 0) {
        return true;
      }
      return false;
    },
    getPayment() {
      return this.default_payment;
    }
  },
  methods: {
    getCustomerDefaultPayment() {
      this.loading = true;
      APIinterface.fetchDataByTokenPost("getCustomerDefaultPayment").then((data) => {
        this.default_payment = data.details.data;
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data) => {
        this.loading = false;
      });
    },
    onSubmit() {
      this.loading = true;
      APIinterface.fetchDataByTokenPost(
        "prepareAddFunds",
        "amount=" + this.amount + "&payment_code=" + this.default_payment.payment_code + "&payment_uuid=" + this.default_payment.payment_uuid + "&currency_code=" + this.DataStorePersisted.getUseCurrency()
      ).then((data) => {
        this.$emit("afterPreparepayment", data.details);
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data) => {
        this.loading = false;
      });
    }
  }
};
const _hoisted_1 = { class: "text-h6" };
const _hoisted_2 = { class: "text-body2 q-mb-md" };
const _hoisted_3 = { class: "text-h5 text-weight-bold" };
const _hoisted_4 = { class: "row q-mb-md items-center" };
const _hoisted_5 = { class: "col-2" };
const _hoisted_6 = { class: "col-3" };
const _hoisted_7 = { class: "text-body2 text-weight-medium" };
const _hoisted_8 = { class: "text-caption" };
const _hoisted_9 = { class: "col text-right" };
const _hoisted_10 = {
  key: 1,
  class: "q-gutter-y-sm"
};
const _hoisted_11 = { class: "text-body q-pa-sm bg-red-2 radius10 text-dark" };
const _hoisted_12 = { class: "text-body2" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QDialog, {
    modelValue: $data.dialog,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.dialog = $event),
    position: "bottom"
  }, {
    default: withCtx(() => [
      createVNode(QCard, null, {
        default: withCtx(() => [
          createVNode(QCardSection, { class: "row items-center q-pb-none" }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1, toDisplayString(_ctx.$t("Add Funds to Your Wallet")), 1),
              createVNode(QSpace),
              withDirectives(createVNode(QBtn, {
                icon: "close",
                flat: "",
                round: "",
                dense: ""
              }, null, 512), [
                [ClosePopup]
              ])
            ]),
            _: 1
          }),
          createVNode(QForm, { onSubmit: $options.onSubmit }, {
            default: withCtx(() => [
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_2, toDisplayString(_ctx.$t("topup_message")), 1),
                  createBaseVNode("div", _hoisted_3, toDisplayString(_ctx.$t("Payment Method")), 1),
                  $options.hasPayment ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    createBaseVNode("div", _hoisted_4, [
                      createBaseVNode("div", _hoisted_5, [
                        createVNode(QImg, {
                          src: $options.getPayment.logo_image,
                          "spinner-color": "primary",
                          "spinner-size": "sm",
                          style: { "height": "30px", "max-width": "50px" },
                          fit: "contain"
                        }, null, 8, ["src"])
                      ]),
                      createBaseVNode("div", _hoisted_6, [
                        createBaseVNode("div", _hoisted_7, toDisplayString($options.getPayment.attr1), 1),
                        createBaseVNode("div", _hoisted_8, toDisplayString($options.getPayment.attr2), 1)
                      ]),
                      createBaseVNode("div", _hoisted_9, [
                        createVNode(QBtn, {
                          flat: "",
                          label: _ctx.$t("Change"),
                          color: "primary",
                          "no-caps": "",
                          to: "/account/payments"
                        }, null, 8, ["label"])
                      ])
                    ]),
                    createVNode(QInput, {
                      modelValue: $data.amount,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.amount = $event),
                      label: _ctx.$t("Enter amount"),
                      outlined: "",
                      "lazy-rules": "",
                      "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
                      "label-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                      borderless: "",
                      class: "input-borderless",
                      type: "number",
                      rules: [
                        (val) => val > 0 || this.$t("Please enter valid amount")
                      ]
                    }, null, 8, ["modelValue", "label", "bg-color", "label-color", "rules"]),
                    createVNode(QBtn, {
                      type: "submit",
                      label: _ctx.$t("Add Funds"),
                      loading: $data.loading,
                      unelevated: "",
                      color: _ctx.$q.dark.mode ? "grey300" : "primary",
                      "text-color": "white",
                      "no-caps": "",
                      class: "full-width",
                      size: "lg"
                    }, null, 8, ["label", "loading", "color"])
                  ], 64)) : (openBlock(), createElementBlock("div", _hoisted_10, [
                    createBaseVNode("div", _hoisted_11, toDisplayString(_ctx.$t(
                      "We noticed you haven't added a default payment method yet"
                    )) + ". ", 1),
                    createBaseVNode("div", _hoisted_12, toDisplayString(_ctx.$t("topup_message1")), 1),
                    createVNode(QBtn, {
                      color: "primary",
                      label: _ctx.$t("Add online payment"),
                      class: "fit",
                      size: "lg",
                      "no-caps": "",
                      unelevated: "",
                      to: "/account/payments"
                    }, null, 8, ["label"])
                  ]))
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
var WalletTopupform = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "WalletTopupform.vue"]]);
export { WalletTopupform as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2FsbGV0VG9wdXBmb3JtLjhjZTA4MTgyLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9XYWxsZXRUb3B1cGZvcm0udnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHEtZGlhbG9nIHYtbW9kZWw9XCJkaWFsb2dcIiBwb3NpdGlvbj1cImJvdHRvbVwiPlxuICAgIDxxLWNhcmQ+XG4gICAgICA8cS1jYXJkLXNlY3Rpb24gY2xhc3M9XCJyb3cgaXRlbXMtY2VudGVyIHEtcGItbm9uZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNlwiPnt7ICR0KFwiQWRkIEZ1bmRzIHRvIFlvdXIgV2FsbGV0XCIpIH19PC9kaXY+XG4gICAgICAgIDxxLXNwYWNlIC8+XG4gICAgICAgIDxxLWJ0biBpY29uPVwiY2xvc2VcIiBmbGF0IHJvdW5kIGRlbnNlIHYtY2xvc2UtcG9wdXAgLz5cbiAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG5cbiAgICAgIDxxLWZvcm0gQHN1Ym1pdD1cIm9uU3VibWl0XCI+XG4gICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1ib2R5MiBxLW1iLW1kXCI+XG4gICAgICAgICAgICB7eyAkdChcInRvcHVwX21lc3NhZ2VcIikgfX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg1IHRleHQtd2VpZ2h0LWJvbGRcIj57eyAkdChcIlBheW1lbnQgTWV0aG9kXCIpIH19PC9kaXY+XG5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImhhc1BheW1lbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcS1tYi1tZCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0yXCI+XG4gICAgICAgICAgICAgICAgPHEtaW1nXG4gICAgICAgICAgICAgICAgICA6c3JjPVwiZ2V0UGF5bWVudC5sb2dvX2ltYWdlXCJcbiAgICAgICAgICAgICAgICAgIHNwaW5uZXItY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIHNwaW5uZXItc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiAzMHB4OyBtYXgtd2lkdGg6IDUwcHhcIlxuICAgICAgICAgICAgICAgICAgZml0PVwiY29udGFpblwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtM1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWJvZHkyIHRleHQtd2VpZ2h0LW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAge3sgZ2V0UGF5bWVudC5hdHRyMSB9fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNhcHRpb25cIj57eyBnZXRQYXltZW50LmF0dHIyIH19PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdDaGFuZ2UnKVwiXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgICAgICAgICAgdG89XCIvYWNjb3VudC9wYXltZW50c1wiXG4gICAgICAgICAgICAgICAgPjwvcS1idG4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJhbW91bnRcIlxuICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnRW50ZXIgYW1vdW50JylcIlxuICAgICAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgICAgICBsYXp5LXJ1bGVzXG4gICAgICAgICAgICAgIDpiZy1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5NjAwJyA6ICdpbnB1dCdcIlxuICAgICAgICAgICAgICA6bGFiZWwtY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTMwMCcgOiAnZ3JleSdcIlxuICAgICAgICAgICAgICBib3JkZXJsZXNzXG4gICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtYm9yZGVybGVzc1wiXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICA6cnVsZXM9XCJbXG4gICAgICAgICAgICAgICAgKHZhbCkgPT4gdmFsID4gMCB8fCB0aGlzLiR0KCdQbGVhc2UgZW50ZXIgdmFsaWQgYW1vdW50JyksXG4gICAgICAgICAgICAgIF1cIlxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnQWRkIEZ1bmRzJylcIlxuICAgICAgICAgICAgICA6bG9hZGluZz1cImxvYWRpbmdcIlxuICAgICAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgICAgIDpjb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICdwcmltYXJ5J1wiXG4gICAgICAgICAgICAgIHRleHQtY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICAgICAgY2xhc3M9XCJmdWxsLXdpZHRoXCJcbiAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicS1ndXR0ZXIteS1zbVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1ib2R5IHEtcGEtc20gYmctcmVkLTIgcmFkaXVzMTAgdGV4dC1kYXJrXCI+XG4gICAgICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgICAgICR0KFxuICAgICAgICAgICAgICAgICAgICBcIldlIG5vdGljZWQgeW91IGhhdmVuJ3QgYWRkZWQgYSBkZWZhdWx0IHBheW1lbnQgbWV0aG9kIHlldFwiXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfX0uXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1ib2R5MlwiPlxuICAgICAgICAgICAgICAgIHt7ICR0KFwidG9wdXBfbWVzc2FnZTFcIikgfX1cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnQWRkIG9ubGluZSBwYXltZW50JylcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZml0XCJcbiAgICAgICAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgICAgICAgdG89XCIvYWNjb3VudC9wYXltZW50c1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgPC9xLWZvcm0+XG4gICAgPC9xLWNhcmQ+XG4gIDwvcS1kaWFsb2c+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEFQSWludGVyZmFjZSBmcm9tIFwic3JjL2FwaS9BUElpbnRlcmZhY2VcIjtcbmltcG9ydCB7IHVzZURhdGFTdG9yZVBlcnNpc3RlZCB9IGZyb20gXCJzdG9yZXMvRGF0YVN0b3JlUGVyc2lzdGVkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJXYWxsZXRUb3B1cGZvcm1cIixcbiAgc2V0dXAoKSB7XG4gICAgY29uc3QgRGF0YVN0b3JlUGVyc2lzdGVkID0gdXNlRGF0YVN0b3JlUGVyc2lzdGVkKCk7XG4gICAgcmV0dXJuIHsgRGF0YVN0b3JlUGVyc2lzdGVkIH07XG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRpYWxvZzogZmFsc2UsXG4gICAgICBhbW91bnQ6IDEsXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIGRlZmF1bHRfcGF5bWVudDogW10sXG4gICAgfTtcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmdldEN1c3RvbWVyRGVmYXVsdFBheW1lbnQoKTtcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBoYXNQYXltZW50KCkge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZGVmYXVsdF9wYXltZW50KS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgZ2V0UGF5bWVudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRfcGF5bWVudDtcbiAgICB9LFxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZ2V0Q3VzdG9tZXJEZWZhdWx0UGF5bWVudCgpIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICBBUElpbnRlcmZhY2UuZmV0Y2hEYXRhQnlUb2tlblBvc3QoXCJnZXRDdXN0b21lckRlZmF1bHRQYXltZW50XCIpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5kZWZhdWx0X3BheW1lbnQgPSBkYXRhLmRldGFpbHMuZGF0YTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJkYXJrXCIsIGVycm9yLCBcImVycm9yXCIsIHRoaXMuJHEpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIG9uU3VibWl0KCkge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIEFQSWludGVyZmFjZS5mZXRjaERhdGFCeVRva2VuUG9zdChcbiAgICAgICAgXCJwcmVwYXJlQWRkRnVuZHNcIixcbiAgICAgICAgXCJhbW91bnQ9XCIgK1xuICAgICAgICAgIHRoaXMuYW1vdW50ICtcbiAgICAgICAgICBcIiZwYXltZW50X2NvZGU9XCIgK1xuICAgICAgICAgIHRoaXMuZGVmYXVsdF9wYXltZW50LnBheW1lbnRfY29kZSArXG4gICAgICAgICAgXCImcGF5bWVudF91dWlkPVwiICtcbiAgICAgICAgICB0aGlzLmRlZmF1bHRfcGF5bWVudC5wYXltZW50X3V1aWQgK1xuICAgICAgICAgIFwiJmN1cnJlbmN5X2NvZGU9XCIgK1xuICAgICAgICAgIHRoaXMuRGF0YVN0b3JlUGVyc2lzdGVkLmdldFVzZUN1cnJlbmN5KClcbiAgICAgIClcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLiRlbWl0KFwiYWZ0ZXJQcmVwYXJlcGF5bWVudFwiLCBkYXRhLmRldGFpbHMpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgQVBJaW50ZXJmYWNlLm5vdGlmeShcImRhcmtcIiwgZXJyb3IsIFwiZXJyb3JcIiwgdGhpcy4kcSk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX2NyZWF0ZUJsb2NrIiwiX2NyZWF0ZVZOb2RlIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl90b0Rpc3BsYXlTdHJpbmciLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX0ZyYWdtZW50IiwiX29wZW5CbG9jayJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUEyR0EsTUFBSyxZQUFVO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixRQUFRO0FBQ04sVUFBTSxxQkFBcUI7QUFDM0IsV0FBTyxFQUFFLG1CQUFpQjtBQUFBLEVBQzNCO0FBQUEsRUFDRCxPQUFPO0FBQ0wsV0FBTztBQUFBLE1BQ0wsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsU0FBUztBQUFBLE1BQ1QsaUJBQWlCLENBQUU7QUFBQTtFQUV0QjtBQUFBLEVBQ0QsVUFBVTtBQUNSLFNBQUssMEJBQXlCO0FBQUEsRUFDL0I7QUFBQSxFQUNELFVBQVU7QUFBQSxJQUNSLGFBQWE7QUFDWCxVQUFJLE9BQU8sS0FBSyxLQUFLLGVBQWUsRUFBRSxTQUFTLEdBQUc7QUFDaEQsZUFBTztBQUFBLE1BQ1Q7QUFDQSxhQUFPO0FBQUEsSUFDUjtBQUFBLElBQ0QsYUFBYTtBQUNYLGFBQU8sS0FBSztBQUFBLElBQ2I7QUFBQSxFQUNGO0FBQUEsRUFDRCxTQUFTO0FBQUEsSUFDUCw0QkFBNEI7QUFDMUIsV0FBSyxVQUFVO0FBQ2YsbUJBQWEscUJBQXFCLDJCQUEyQixFQUMxRCxLQUFLLENBQUMsU0FBUztBQUNkLGFBQUssa0JBQWtCLEtBQUssUUFBUTtBQUFBLE9BQ3JDLEVBQ0EsTUFBTSxDQUFDLFVBQVU7QUFDaEIscUJBQWEsT0FBTyxRQUFRLE9BQU8sU0FBUyxLQUFLLEVBQUU7QUFBQSxPQUNwRCxFQUNBLEtBQUssQ0FBQyxTQUFTO0FBQ2QsYUFBSyxVQUFVO0FBQUEsTUFDakIsQ0FBQztBQUFBLElBQ0o7QUFBQSxJQUNELFdBQVc7QUFDVCxXQUFLLFVBQVU7QUFDZixtQkFBYTtBQUFBLFFBQ1g7QUFBQSxRQUNBLFlBQ0UsS0FBSyxTQUNMLG1CQUNBLEtBQUssZ0JBQWdCLGVBQ3JCLG1CQUNBLEtBQUssZ0JBQWdCLGVB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
