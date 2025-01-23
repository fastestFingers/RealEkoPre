import { _ as _export_sfc, m as APIinterface, p as openBlock, V as createElementBlock, f as createVNode, a1 as QSpinner, q as createBlock, t as withCtx, F as Fragment, X as renderList, ac as QItem, ad as QItemSection, at as QIcon, a6 as createTextVNode, Z as toDisplayString, aA as createCommentVNode, af as QRadio } from "./index.61ed5618.js";
import { Q as QImg } from "./QImg.6c27044c.js";
import { Q as QItemLabel } from "./QItemLabel.a9365c5b.js";
import { Q as QList } from "./QList.b69a7e5b.js";
import { u as usePaymentStore } from "./PaymentStore.773648e1.js";
const _sfc_main = {
  name: "PaymentListSaved",
  props: ["merchant_id", "wallet_data"],
  data() {
    return {
      payment_uuid: "",
      loading: false,
      data: [],
      credentials: [],
      inner_loading: false
    };
  },
  setup(props, { emit }) {
    const PaymentStore = usePaymentStore();
    return { PaymentStore };
  },
  created() {
    this.PaymentStore.SavedPaymentList(this.merchant_id);
  },
  watch: {
    payment_uuid(newval, oldval) {
      this.$emit("setPaymentuuid", newval);
    },
    PaymentStore: {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        if (!APIinterface.empty(this.PaymentStore.payment_uuid[this.merchant_id])) {
          this.payment_uuid = this.PaymentStore.payment_uuid[this.merchant_id];
        }
      }
    }
  },
  computed: {
    hasSavedPayment() {
      if (this.PaymentStore.data[this.merchant_id]) {
        if (Object.keys(this.PaymentStore.data[this.merchant_id]).length > 0) {
          return true;
        }
      }
      return false;
    },
    getPayment() {
      if (this.PaymentStore.data[this.merchant_id]) {
        if (Object.keys(this.PaymentStore.data[this.merchant_id]).length > 0) {
          return this.PaymentStore.data[this.merchant_id];
        }
      }
      return false;
    },
    isWalletFullPayment() {
      if (Object.keys(this.wallet_data).length > 0) {
        if (this.wallet_data.use_wallet && this.wallet_data.amount_due_raw <= 0) {
          return true;
        }
      }
      return false;
    },
    usePartialPayment() {
      if (Object.keys(this.wallet_data).length > 0) {
        if (this.wallet_data.use_wallet && this.wallet_data.amount_due_raw > 0) {
          return true;
        }
      }
      return false;
    },
    getPayRemaining() {
      if (Object.keys(this.wallet_data).length > 0) {
        if (this.wallet_data.use_wallet) {
          return this.wallet_data.pay_remaining;
        }
      }
      return false;
    }
  },
  methods: {
    setPayment(data) {
      this.$emit("setPayment", data);
    }
  }
};
const _hoisted_1 = {
  key: 0,
  class: "text-center"
};
const _hoisted_2 = {
  key: 0,
  class: "q-pa-sm bg-red-2 text-dark q-ml-md q-mr-md radius10"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.PaymentStore.loading ? (openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(QSpinner, {
      color: "primary",
      size: "sm"
    })
  ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
    $options.hasSavedPayment && !$options.isWalletFullPayment ? (openBlock(), createBlock(QList, { key: 0 }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList($options.getPayment, (items) => {
          return openBlock(), createBlock(QItem, {
            key: items,
            tag: "label"
          }, {
            default: withCtx(() => [
              items.logo_type == "image" ? (openBlock(), createBlock(QItemSection, {
                key: 0,
                avatar: ""
              }, {
                default: withCtx(() => [
                  createVNode(QImg, {
                    src: items.logo_image,
                    fit: "contain",
                    style: { "height": "30px", "width": "40px" }
                  }, null, 8, ["src"])
                ]),
                _: 2
              }, 1024)) : (openBlock(), createBlock(QItemSection, {
                key: 1,
                avatar: ""
              }, {
                default: withCtx(() => [
                  createVNode(QIcon, {
                    color: "secondary",
                    name: "las la-credit-card"
                  })
                ]),
                _: 1
              })),
              createVNode(QItemSection, null, {
                default: withCtx(() => [
                  createVNode(QItemLabel, { lines: "2" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(items.payment_name) + " ", 1),
                      items.card_fee_percent && items.card_fee_fixed ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                        createTextVNode(" (" + toDisplayString(items.card_fee_percent) + "% + " + toDisplayString(items.card_fee_fixed) + ") ", 1)
                      ], 64)) : items.card_fee_percent ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                        createTextVNode(" (" + toDisplayString(items.card_fee_percent) + "% ) ", 1)
                      ], 64)) : items.card_fee_fixed ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                        createTextVNode(" (" + toDisplayString(items.card_fee_fixed) + ") ", 1)
                      ], 64)) : createCommentVNode("", true)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(QItemLabel, {
                    lines: "2",
                    caption: "",
                    class: "font11"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(items.attr2), 1)
                    ]),
                    _: 2
                  }, 1024),
                  $options.usePartialPayment ? (openBlock(), createBlock(QItemLabel, {
                    key: 0,
                    caption: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString($options.getPayRemaining), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                _: 2
              }, 1024),
              createVNode(QItemSection, { side: "" }, {
                default: withCtx(() => [
                  createVNode(QRadio, {
                    modelValue: $data.payment_uuid,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.payment_uuid = $event),
                    val: items.payment_uuid,
                    color: "secondary",
                    onClick: ($event) => $options.setPayment(items)
                  }, null, 8, ["modelValue", "val", "onClick"])
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1024);
        }), 128))
      ]),
      _: 1
    })) : createCommentVNode("", true),
    !$setup.PaymentStore.data[$props.merchant_id] && !$setup.PaymentStore.loading ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
      !$options.isWalletFullPayment ? (openBlock(), createElementBlock("div", _hoisted_2, toDisplayString(_ctx.$t("You don't have payment saved yet")) + ". ", 1)) : createCommentVNode("", true)
    ], 64)) : createCommentVNode("", true)
  ], 64));
}
var PaymentListSaved = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "PaymentListSaved.vue"]]);
export { PaymentListSaved as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF5bWVudExpc3RTYXZlZC41ZTVkZjgzZC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvUGF5bWVudExpc3RTYXZlZC52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8dGVtcGxhdGUgdi1pZj1cIlBheW1lbnRTdG9yZS5sb2FkaW5nXCI+XG4gICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCI+XG4gICAgICA8cS1zcGlubmVyIGNvbG9yPVwicHJpbWFyeVwiIHNpemU9XCJzbVwiIC8+XG4gICAgPC9kaXY+XG4gIDwvdGVtcGxhdGU+XG4gIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgPHRlbXBsYXRlIHYtaWY9XCJoYXNTYXZlZFBheW1lbnQgJiYgIWlzV2FsbGV0RnVsbFBheW1lbnRcIj5cbiAgICAgIDxxLWxpc3Q+XG4gICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIml0ZW1zIGluIGdldFBheW1lbnRcIiA6a2V5PVwiaXRlbXNcIj5cbiAgICAgICAgICA8cS1pdGVtIHRhZz1cImxhYmVsXCI+XG4gICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gdi1pZj1cIml0ZW1zLmxvZ29fdHlwZSA9PSAnaW1hZ2UnXCIgYXZhdGFyPlxuICAgICAgICAgICAgICA8cS1pbWdcbiAgICAgICAgICAgICAgICA6c3JjPVwiaXRlbXMubG9nb19pbWFnZVwiXG4gICAgICAgICAgICAgICAgZml0PVwiY29udGFpblwiXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDMwcHg7IHdpZHRoOiA0MHB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gdi1lbHNlIGF2YXRhcj5cbiAgICAgICAgICAgICAgPHEtaWNvbiBjb2xvcj1cInNlY29uZGFyeVwiIG5hbWU9XCJsYXMgbGEtY3JlZGl0LWNhcmRcIiAvPlxuICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBsaW5lcz1cIjJcIj5cbiAgICAgICAgICAgICAgICB7eyBpdGVtcy5wYXltZW50X25hbWUgfX1cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIml0ZW1zLmNhcmRfZmVlX3BlcmNlbnQgJiYgaXRlbXMuY2FyZF9mZWVfZml4ZWRcIj5cbiAgICAgICAgICAgICAgICAgICh7eyBpdGVtcy5jYXJkX2ZlZV9wZXJjZW50IH19JSArIHt7IGl0ZW1zLmNhcmRfZmVlX2ZpeGVkIH19KVxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZS1pZj1cIml0ZW1zLmNhcmRfZmVlX3BlcmNlbnRcIj5cbiAgICAgICAgICAgICAgICAgICh7eyBpdGVtcy5jYXJkX2ZlZV9wZXJjZW50IH19JSApXG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlLWlmPVwiaXRlbXMuY2FyZF9mZWVfZml4ZWRcIj5cbiAgICAgICAgICAgICAgICAgICh7eyBpdGVtcy5jYXJkX2ZlZV9maXhlZCB9fSlcbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBsaW5lcz1cIjJcIiBjYXB0aW9uIGNsYXNzPVwiZm9udDExXCI+XG4gICAgICAgICAgICAgICAge3sgaXRlbXMuYXR0cjIgfX1cbiAgICAgICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgdi1pZj1cInVzZVBhcnRpYWxQYXltZW50XCIgY2FwdGlvbj5cbiAgICAgICAgICAgICAgICB7eyBnZXRQYXlSZW1haW5pbmcgfX1cbiAgICAgICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICAgICAgICAgIDxxLXJhZGlvXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cInBheW1lbnRfdXVpZFwiXG4gICAgICAgICAgICAgICAgOnZhbD1cIml0ZW1zLnBheW1lbnRfdXVpZFwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgIEBjbGljaz1cInNldFBheW1lbnQoaXRlbXMpXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3EtbGlzdD5cbiAgICA8L3RlbXBsYXRlPlxuXG4gICAgPHRlbXBsYXRlIHYtaWY9XCIhUGF5bWVudFN0b3JlLmRhdGFbbWVyY2hhbnRfaWRdICYmICFQYXltZW50U3RvcmUubG9hZGluZ1wiPlxuICAgICAgPGRpdlxuICAgICAgICB2LWlmPVwiIWlzV2FsbGV0RnVsbFBheW1lbnRcIlxuICAgICAgICBjbGFzcz1cInEtcGEtc20gYmctcmVkLTIgdGV4dC1kYXJrIHEtbWwtbWQgcS1tci1tZCByYWRpdXMxMFwiXG4gICAgICA+XG4gICAgICAgIHt7ICR0KFwiWW91IGRvbid0IGhhdmUgcGF5bWVudCBzYXZlZCB5ZXRcIikgfX0uXG4gICAgICA8L2Rpdj5cbiAgICA8L3RlbXBsYXRlPlxuICA8L3RlbXBsYXRlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IHVzZVBheW1lbnRTdG9yZSB9IGZyb20gXCJzdG9yZXMvUGF5bWVudFN0b3JlXCI7XG5pbXBvcnQgQVBJaW50ZXJmYWNlIGZyb20gXCJzcmMvYXBpL0FQSWludGVyZmFjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiUGF5bWVudExpc3RTYXZlZFwiLFxuICBwcm9wczogW1wibWVyY2hhbnRfaWRcIiwgXCJ3YWxsZXRfZGF0YVwiXSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGF5bWVudF91dWlkOiBcIlwiLFxuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICBkYXRhOiBbXSxcbiAgICAgIGNyZWRlbnRpYWxzOiBbXSxcbiAgICAgIGlubmVyX2xvYWRpbmc6IGZhbHNlLFxuICAgIH07XG4gIH0sXG4gIHNldHVwKHByb3BzLCB7IGVtaXQgfSkge1xuICAgIGNvbnN0IFBheW1lbnRTdG9yZSA9IHVzZVBheW1lbnRTdG9yZSgpO1xuICAgIHJldHVybiB7IFBheW1lbnRTdG9yZSB9O1xuICB9LFxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuUGF5bWVudFN0b3JlLlNhdmVkUGF5bWVudExpc3QodGhpcy5tZXJjaGFudF9pZCk7XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgcGF5bWVudF91dWlkKG5ld3ZhbCwgb2xkdmFsKSB7XG4gICAgICB0aGlzLiRlbWl0KFwic2V0UGF5bWVudHV1aWRcIiwgbmV3dmFsKTtcbiAgICB9LFxuICAgIFBheW1lbnRTdG9yZToge1xuICAgICAgaW1tZWRpYXRlOiB0cnVlLFxuICAgICAgZGVlcDogdHJ1ZSxcbiAgICAgIGhhbmRsZXIobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhQVBJaW50ZXJmYWNlLmVtcHR5KHRoaXMuUGF5bWVudFN0b3JlLnBheW1lbnRfdXVpZFt0aGlzLm1lcmNoYW50X2lkXSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5wYXltZW50X3V1aWQgPSB0aGlzLlBheW1lbnRTdG9yZS5wYXltZW50X3V1aWRbdGhpcy5tZXJjaGFudF9pZF07XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBoYXNTYXZlZFBheW1lbnQoKSB7XG4gICAgICBpZiAodGhpcy5QYXltZW50U3RvcmUuZGF0YVt0aGlzLm1lcmNoYW50X2lkXSkge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5QYXltZW50U3RvcmUuZGF0YVt0aGlzLm1lcmNoYW50X2lkXSkubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICBnZXRQYXltZW50KCkge1xuICAgICAgaWYgKHRoaXMuUGF5bWVudFN0b3JlLmRhdGFbdGhpcy5tZXJjaGFudF9pZF0pIHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuUGF5bWVudFN0b3JlLmRhdGFbdGhpcy5tZXJjaGFudF9pZF0pLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5QYXltZW50U3RvcmUuZGF0YVt0aGlzLm1lcmNoYW50X2lkXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgaXNXYWxsZXRGdWxsUGF5bWVudCgpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLndhbGxldF9kYXRhKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLndhbGxldF9kYXRhLnVzZV93YWxsZXQgJiZcbiAgICAgICAgICB0aGlzLndhbGxldF9kYXRhLmFtb3VudF9kdWVfcmF3IDw9IDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIHVzZVBhcnRpYWxQYXltZW50KCkge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMud2FsbGV0X2RhdGEpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMud2FsbGV0X2RhdGEudXNlX3dhbGxldCAmJlxuICAgICAgICAgIHRoaXMud2FsbGV0X2RhdGEuYW1vdW50X2R1ZV9yYXcgPiAwXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICBnZXRQYXlSZW1haW5pbmcoKSB7XG4gICAgICBpZiAoT2JqZWN0LmtleXModGhpcy53YWxsZXRfZGF0YSkubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAodGhpcy53YWxsZXRfZGF0YS51c2Vfd2FsbGV0KSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMud2FsbGV0X2RhdGEucGF5X3JlbWFpbmluZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBzZXRQYXltZW50KGRhdGEpIHtcbiAgICAgIHRoaXMuJGVtaXQoXCJzZXRQYXltZW50XCIsIGRhdGEpO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfY3JlYXRlVk5vZGUiLCJfRnJhZ21lbnQiLCJfY3JlYXRlQmxvY2siLCJfcmVuZGVyTGlzdCIsIl90b0Rpc3BsYXlTdHJpbmciLCJfY3JlYXRlVGV4dFZOb2RlIl0sIm1hcHBpbmdzIjoiOzs7OztBQXFFQSxNQUFLLFlBQVU7QUFBQSxFQUNiLE1BQU07QUFBQSxFQUNOLE9BQU8sQ0FBQyxlQUFlLGFBQWE7QUFBQSxFQUNwQyxPQUFPO0FBQ0wsV0FBTztBQUFBLE1BQ0wsY0FBYztBQUFBLE1BQ2QsU0FBUztBQUFBLE1BQ1QsTUFBTSxDQUFFO0FBQUEsTUFDUixhQUFhLENBQUU7QUFBQSxNQUNmLGVBQWU7QUFBQTtFQUVsQjtBQUFBLEVBQ0QsTUFBTSxPQUFPLEVBQUUsUUFBUTtBQUNyQixVQUFNLGVBQWU7QUFDckIsV0FBTyxFQUFFO0VBQ1Y7QUFBQSxFQUNELFVBQVU7QUFDUixTQUFLLGFBQWEsaUJBQWlCLEtBQUssV0FBVztBQUFBLEVBQ3BEO0FBQUEsRUFDRCxPQUFP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
