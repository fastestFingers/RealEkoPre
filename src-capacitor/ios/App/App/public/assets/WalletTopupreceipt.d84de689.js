import { _ as _export_sfc, p as openBlock, q as createBlock, t as withCtx, f as createVNode, a9 as QCardSection, U as createBaseVNode, Z as toDisplayString, a6 as createTextVNode, ac as QItem, ad as QItemSection, bE as QCardActions, Y as QBtn, a8 as QCard, aB as QDialog } from "./index.61ed5618.js";
import { Q as QItemLabel } from "./QItemLabel.a9365c5b.js";
import { Q as QList } from "./QList.b69a7e5b.js";
const _sfc_main = {
  name: "WalletTopupreceipt",
  props: ["data"],
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    beforeHide() {
      this.$emit("afterReceiptclose");
    }
  }
};
const _hoisted_1 = { class: "text-center" };
const _hoisted_2 = { class: "text-h4" };
const _hoisted_3 = { class: "text-body2" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QDialog, {
    modelValue: $data.dialog,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.dialog = $event),
    "full-width": "",
    persistent: "",
    onBeforeHide: $options.beforeHide
  }, {
    default: withCtx(() => [
      createVNode(QCard, null, {
        default: withCtx(() => [
          createVNode(QCardSection, null, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                createBaseVNode("div", _hoisted_2, toDisplayString(_ctx.$t("Congratulations")) + "!", 1),
                createBaseVNode("div", _hoisted_3, toDisplayString(_ctx.$t("Your digital wallet has been successfully loaded")) + ". ", 1)
              ])
            ]),
            _: 1
          }),
          createVNode(QList, { separator: "" }, {
            default: withCtx(() => [
              createVNode(QItemLabel, {
                header: "",
                class: "text-dark text text-weight-bold"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("Transaction Details")) + "!", 1)
                ]),
                _: 1
              }),
              createVNode(QItem, null, {
                default: withCtx(() => [
                  createVNode(QItemSection, null, {
                    default: withCtx(() => [
                      createVNode(QItemLabel, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("Amount Loaded")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(QItemSection, { side: "" }, {
                    default: withCtx(() => [
                      createVNode(QItemLabel, { caption: "" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString($props.data.amount), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(QItem, null, {
                default: withCtx(() => [
                  createVNode(QItemSection, null, {
                    default: withCtx(() => [
                      createVNode(QItemLabel, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("Payment Method")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(QItemSection, { side: "" }, {
                    default: withCtx(() => [
                      createVNode(QItemLabel, { caption: "" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString($props.data.payment_name), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(QItem, null, {
                default: withCtx(() => [
                  createVNode(QItemSection, null, {
                    default: withCtx(() => [
                      createVNode(QItemLabel, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("Transaction ID")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(QItemSection, { side: "" }, {
                    default: withCtx(() => [
                      createVNode(QItemLabel, { caption: "" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString($props.data.transaction_id), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(QItem, null, {
                default: withCtx(() => [
                  createVNode(QItemSection, null, {
                    default: withCtx(() => [
                      createVNode(QItemLabel, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("Date and Time")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(QItemSection, { side: "" }, {
                    default: withCtx(() => [
                      createVNode(QItemLabel, { caption: "" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString($props.data.transaction_date), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(QCardActions, null, {
            default: withCtx(() => [
              createVNode(QBtn, {
                color: _ctx.$q.dark.mode ? "grey300" : "primary",
                label: _ctx.$t("Close"),
                class: "fit",
                size: "lg",
                "no-caps": "",
                unelevated: "",
                onClick: _cache[0] || (_cache[0] = ($event) => $data.dialog = !$data.dialog)
              }, null, 8, ["color", "label"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["modelValue", "onBeforeHide"]);
}
var WalletTopupreceipt = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "WalletTopupreceipt.vue"]]);
export { WalletTopupreceipt as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2FsbGV0VG9wdXByZWNlaXB0LmQ4NGRlNjg5LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9XYWxsZXRUb3B1cHJlY2VpcHQudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHEtZGlhbG9nIHYtbW9kZWw9XCJkaWFsb2dcIiBmdWxsLXdpZHRoIHBlcnNpc3RlbnQgQGJlZm9yZS1oaWRlPVwiYmVmb3JlSGlkZVwiPlxuICAgIDxxLWNhcmQ+XG4gICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg0XCI+e3sgJHQoXCJDb25ncmF0dWxhdGlvbnNcIikgfX0hPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtYm9keTJcIj5cbiAgICAgICAgICAgIHt7ICR0KFwiWW91ciBkaWdpdGFsIHdhbGxldCBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgbG9hZGVkXCIpIH19LlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG5cbiAgICAgIDxxLWxpc3Qgc2VwYXJhdG9yPlxuICAgICAgICA8cS1pdGVtLWxhYmVsIGhlYWRlciBjbGFzcz1cInRleHQtZGFyayB0ZXh0IHRleHQtd2VpZ2h0LWJvbGRcIlxuICAgICAgICAgID57eyAkdChcIlRyYW5zYWN0aW9uIERldGFpbHNcIikgfX0hPC9xLWl0ZW0tbGFiZWxcbiAgICAgICAgPlxuICAgICAgICA8cS1pdGVtPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+e3sgJHQoXCJBbW91bnQgTG9hZGVkXCIpIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZT5cbiAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbj57eyBkYXRhLmFtb3VudCB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDwvcS1pdGVtPlxuICAgICAgICA8cS1pdGVtPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+e3sgJHQoXCJQYXltZW50IE1ldGhvZFwiKSB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24+e3sgZGF0YS5wYXltZW50X25hbWUgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgPHEtaXRlbT5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8cS1pdGVtLWxhYmVsPnt7ICR0KFwiVHJhbnNhY3Rpb24gSURcIikgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlPlxuICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uPnt7IGRhdGEudHJhbnNhY3Rpb25faWQgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgPHEtaXRlbT5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8cS1pdGVtLWxhYmVsPnt7ICR0KFwiRGF0ZSBhbmQgVGltZVwiKSB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24+e3sgZGF0YS50cmFuc2FjdGlvbl9kYXRlIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPC9xLWl0ZW0+XG4gICAgICA8L3EtbGlzdD5cblxuICAgICAgPHEtY2FyZC1hY3Rpb25zPlxuICAgICAgICA8cS1idG5cbiAgICAgICAgICA6Y29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTMwMCcgOiAncHJpbWFyeSdcIlxuICAgICAgICAgIDpsYWJlbD1cIiR0KCdDbG9zZScpXCJcbiAgICAgICAgICBjbGFzcz1cImZpdFwiXG4gICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgIEBjbGljaz1cImRpYWxvZyA9ICFkaWFsb2dcIlxuICAgICAgICAvPlxuICAgICAgPC9xLWNhcmQtYWN0aW9ucz5cbiAgICA8L3EtY2FyZD5cbiAgPC9xLWRpYWxvZz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiV2FsbGV0VG9wdXByZWNlaXB0XCIsXG4gIHByb3BzOiBbXCJkYXRhXCJdLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkaWFsb2c6IGZhbHNlLFxuICAgIH07XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBiZWZvcmVIaWRlKCkge1xuICAgICAgdGhpcy4kZW1pdChcImFmdGVyUmVjZWlwdGNsb3NlXCIpO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX2NyZWF0ZUJsb2NrIiwiX2NyZWF0ZVZOb2RlIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl90b0Rpc3BsYXlTdHJpbmciLCJfY3JlYXRlVGV4dFZOb2RlIl0sIm1hcHBpbmdzIjoiOzs7QUFrRUEsTUFBSyxZQUFVO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixPQUFPLENB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
