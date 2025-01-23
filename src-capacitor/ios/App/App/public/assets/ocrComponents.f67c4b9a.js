import { Q as QSpace } from "./QSpace.f164c087.js";
import { _ as _export_sfc, m as APIinterface, p as openBlock, q as createBlock, t as withCtx, f as createVNode, Y as QBtn, a9 as QCardSection, U as createBaseVNode, Z as toDisplayString, aY as QInput, b2 as QSeparator, bE as QCardActions, a8 as QCard, aB as QDialog } from "./index.61ed5618.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QForm } from "./QForm.7ded9d38.js";
const _sfc_main = {
  name: "ocrComponents",
  props: ["title", "label", "payment_code", "payment_credentials"],
  setup() {
    return {};
  },
  data() {
    return {
      show_modal: false,
      data: [],
      loading: false,
      credit_card_number: "",
      expiry_date: "",
      cvv: "",
      card_name: "",
      billing_address: ""
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
      this.loading = true;
      let merchantId = 0;
      if (typeof this.payment_credentials[this.payment_code] !== "undefined" && this.payment_credentials[this.payment_code] !== null) {
        merchantId = this.payment_credentials[this.payment_code].merchant_id;
      }
      const $params = {
        credit_card_number: this.credit_card_number,
        expiry_date: this.expiry_date,
        cvv: this.cvv,
        card_name: this.card_name,
        billing_address: this.billing_address,
        merchant_id: merchantId,
        payment_code: this.payment_code
      };
      APIinterface.savedCards($params).then((data) => {
        this.close();
        this.$emit("afterAddpayment");
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data) => {
        this.loading = false;
      });
    }
  }
};
const _hoisted_1 = { class: "text-weight-bold no-margin" };
const _hoisted_2 = { class: "q-ma-sm" };
const _hoisted_3 = { class: "font12" };
const _hoisted_4 = { class: "column q-col-gutter-sm" };
const _hoisted_5 = { class: "row q-col-gutter-md" };
const _hoisted_6 = { class: "col" };
const _hoisted_7 = { class: "col" };
const _hoisted_8 = { class: "column" };
const _hoisted_9 = { class: "col" };
const _hoisted_10 = { class: "col" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QDialog, {
    modelValue: $data.show_modal,
    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.show_modal = $event),
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
              createVNode(QCardSection, { class: "q-pa-md" }, {
                default: withCtx(() => [
                  createBaseVNode("h5", _hoisted_1, toDisplayString($props.title), 1),
                  createBaseVNode("div", _hoisted_2, [
                    createBaseVNode("p", _hoisted_3, toDisplayString($props.label.notes), 1)
                  ]),
                  createBaseVNode("div", _hoisted_4, [
                    createVNode(QInput, {
                      dense: "",
                      "bg-color": _ctx.$q.dark.mode ? "grey600" : "mygrey",
                      color: _ctx.$q.dark.mode ? "grey300" : "primary",
                      outlined: "",
                      modelValue: $data.credit_card_number,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.credit_card_number = $event),
                      label: _ctx.$t("Card number"),
                      rules: [
                        (val) => val && val.length > 0 || this.$t("this field is required")
                      ],
                      mask: "#### #### #### ####"
                    }, null, 8, ["bg-color", "color", "modelValue", "label", "rules"])
                  ]),
                  createBaseVNode("div", _hoisted_5, [
                    createBaseVNode("div", _hoisted_6, [
                      createVNode(QInput, {
                        dense: "",
                        "bg-color": _ctx.$q.dark.mode ? "grey600" : "mygrey",
                        color: _ctx.$q.dark.mode ? "grey300" : "primary",
                        outlined: "",
                        modelValue: $data.expiry_date,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.expiry_date = $event),
                        label: _ctx.$t("Exp. date"),
                        class: "no-margin",
                        rules: [
                          (val) => val && val.length > 0 || this.$t("this field is required")
                        ],
                        mask: "##/##"
                      }, null, 8, ["bg-color", "color", "modelValue", "label", "rules"])
                    ]),
                    createBaseVNode("div", _hoisted_7, [
                      createVNode(QInput, {
                        dense: "",
                        "bg-color": _ctx.$q.dark.mode ? "grey600" : "mygrey",
                        color: _ctx.$q.dark.mode ? "grey300" : "primary",
                        outlined: "",
                        modelValue: $data.cvv,
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.cvv = $event),
                        label: _ctx.$t("Security Code"),
                        class: "no-margin",
                        rules: [
                          (val) => val && val.length > 0 || this.$t("this field is required")
                        ],
                        mask: "####"
                      }, null, 8, ["bg-color", "color", "modelValue", "label", "rules"])
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_8, [
                    createBaseVNode("div", _hoisted_9, [
                      createVNode(QInput, {
                        dense: "",
                        "bg-color": _ctx.$q.dark.mode ? "grey600" : "mygrey",
                        color: _ctx.$q.dark.mode ? "grey300" : "primary",
                        outlined: "",
                        modelValue: $data.card_name,
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.card_name = $event),
                        class: "no-margin",
                        label: _ctx.$t("Card name"),
                        rules: [
                          (val) => val && val.length > 0 || this.$t("this field is required")
                        ]
                      }, null, 8, ["bg-color", "color", "modelValue", "label", "rules"])
                    ]),
                    createBaseVNode("div", _hoisted_10, [
                      createVNode(QInput, {
                        dense: "",
                        "bg-color": _ctx.$q.dark.mode ? "grey600" : "mygrey",
                        color: _ctx.$q.dark.mode ? "grey300" : "primary",
                        outlined: "",
                        modelValue: $data.billing_address,
                        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.billing_address = $event),
                        class: "no-margin",
                        label: _ctx.$t("Billing address"),
                        rules: [
                          (val) => val && val.length > 0 || this.$t("this field is required")
                        ]
                      }, null, 8, ["bg-color", "color", "modelValue", "label", "rules"])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(QSeparator, {
                spaced: "",
                class: "q-pt-none"
              }),
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
var ocrComponents = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "ocrComponents.vue"]]);
export { ocrComponents as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NyQ29tcG9uZW50cy5mNjdjNGI5YS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvb2NyQ29tcG9uZW50cy52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8cS1kaWFsb2dcbiAgICB2LW1vZGVsPVwic2hvd19tb2RhbFwiXG4gICAgcGVyc2lzdGVudFxuICAgIHRyYW5zaXRpb24tc2hvdz1cImZhZGVcIlxuICAgIHRyYW5zaXRpb24taGlkZT1cImZhZGVcIlxuICA+XG4gICAgPHEtY2FyZCBzdHlsZT1cIndpZHRoOiA1MDBweDsgbWF4LXdpZHRoOiA4MHZ3XCI+XG4gICAgICA8cS10b29sYmFyIGNsYXNzPVwidGV4dC1wcmltYXJ5IHRvcC10b29sYmFyIHEtcGwtbWRcIiBkZW5zZT5cbiAgICAgICAgPHEtc3BhY2U+PC9xLXNwYWNlPlxuICAgICAgICA8cS1idG5cbiAgICAgICAgICBAY2xpY2s9XCJzaG93X21vZGFsID0gIXRydWVcIlxuICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgIHNxdWFyZVxuICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICB0ZXh0LWNvbG9yPVwiZ3JleVwiXG4gICAgICAgICAgaWNvbj1cImxhcyBsYS10aW1lc1wiXG4gICAgICAgICAgZGVuc2VcbiAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICBjbGFzcz1cImJvcmRlci1ncmV5IHJhZGl1czhcIlxuICAgICAgICAvPlxuICAgICAgPC9xLXRvb2xiYXI+XG5cbiAgICAgIDxxLWZvcm0gQHN1Ym1pdD1cIm9uU3VibWl0XCI+XG4gICAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cInEtcGEtbWRcIj5cbiAgICAgICAgICA8aDUgY2xhc3M9XCJ0ZXh0LXdlaWdodC1ib2xkIG5vLW1hcmdpblwiPnt7IHRpdGxlIH19PC9oNT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicS1tYS1zbVwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJmb250MTJcIj57eyBsYWJlbC5ub3RlcyB9fTwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gcS1jb2wtZ3V0dGVyLXNtXCI+XG4gICAgICAgICAgICA8cS1pbnB1dFxuICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICA6YmctY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTYwMCcgOiAnbXlncmV5J1wiXG4gICAgICAgICAgICAgIDpjb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICdwcmltYXJ5J1wiXG4gICAgICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJjcmVkaXRfY2FyZF9udW1iZXJcIlxuICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnQ2FyZCBudW1iZXInKVwiXG4gICAgICAgICAgICAgIDpydWxlcz1cIltcbiAgICAgICAgICAgICAgICAodmFsKSA9PlxuICAgICAgICAgICAgICAgICAgKHZhbCAmJiB2YWwubGVuZ3RoID4gMCkgfHwgdGhpcy4kdCgndGhpcyBmaWVsZCBpcyByZXF1aXJlZCcpLFxuICAgICAgICAgICAgICBdXCJcbiAgICAgICAgICAgICAgbWFzaz1cIiMjIyMgIyMjIyAjIyMjICMjIyNcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcS1jb2wtZ3V0dGVyLW1kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgICAgICA6YmctY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTYwMCcgOiAnbXlncmV5J1wiXG4gICAgICAgICAgICAgICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXkzMDAnIDogJ3ByaW1hcnknXCJcbiAgICAgICAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJleHBpcnlfZGF0ZVwiXG4gICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ0V4cC4gZGF0ZScpXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm5vLW1hcmdpblwiXG4gICAgICAgICAgICAgICAgOnJ1bGVzPVwiW1xuICAgICAgICAgICAgICAgICAgKHZhbCkgPT5cbiAgICAgICAgICAgICAgICAgICAgKHZhbCAmJiB2YWwubGVuZ3RoID4gMCkgfHxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kdCgndGhpcyBmaWVsZCBpcyByZXF1aXJlZCcpLFxuICAgICAgICAgICAgICAgIF1cIlxuICAgICAgICAgICAgICAgIG1hc2s9XCIjIy8jI1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICAgIDpiZy1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5NjAwJyA6ICdteWdyZXknXCJcbiAgICAgICAgICAgICAgICA6Y29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTMwMCcgOiAncHJpbWFyeSdcIlxuICAgICAgICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImN2dlwiXG4gICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ1NlY3VyaXR5IENvZGUnKVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJuby1tYXJnaW5cIlxuICAgICAgICAgICAgICAgIDpydWxlcz1cIltcbiAgICAgICAgICAgICAgICAgICh2YWwpID0+XG4gICAgICAgICAgICAgICAgICAgICh2YWwgJiYgdmFsLmxlbmd0aCA+IDApIHx8XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHQoJ3RoaXMgZmllbGQgaXMgcmVxdWlyZWQnKSxcbiAgICAgICAgICAgICAgICBdXCJcbiAgICAgICAgICAgICAgICBtYXNrPVwiIyMjI1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8IS0tIHJvdyAtLT5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICAgIDpiZy1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5NjAwJyA6ICdteWdyZXknXCJcbiAgICAgICAgICAgICAgICA6Y29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTMwMCcgOiAncHJpbWFyeSdcIlxuICAgICAgICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImNhcmRfbmFtZVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJuby1tYXJnaW5cIlxuICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdDYXJkIG5hbWUnKVwiXG4gICAgICAgICAgICAgICAgOnJ1bGVzPVwiW1xuICAgICAgICAgICAgICAgICAgKHZhbCkgPT5cbiAgICAgICAgICAgICAgICAgICAgKHZhbCAmJiB2YWwubGVuZ3RoID4gMCkgfHxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kdCgndGhpcyBmaWVsZCBpcyByZXF1aXJlZCcpLFxuICAgICAgICAgICAgICAgIF1cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgICAgICA6YmctY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTYwMCcgOiAnbXlncmV5J1wiXG4gICAgICAgICAgICAgICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXkzMDAnIDogJ3ByaW1hcnknXCJcbiAgICAgICAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJiaWxsaW5nX2FkZHJlc3NcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwibm8tbWFyZ2luXCJcbiAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnQmlsbGluZyBhZGRyZXNzJylcIlxuICAgICAgICAgICAgICAgIDpydWxlcz1cIltcbiAgICAgICAgICAgICAgICAgICh2YWwpID0+XG4gICAgICAgICAgICAgICAgICAgICh2YWwgJiYgdmFsLmxlbmd0aCA+IDApIHx8XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHQoJ3RoaXMgZmllbGQgaXMgcmVxdWlyZWQnKSxcbiAgICAgICAgICAgICAgICBdXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwhLS0gcm93IC0tPlxuICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuXG4gICAgICAgIDxxLXNlcGFyYXRvciBzcGFjZWQgY2xhc3M9XCJxLXB0LW5vbmVcIiAvPlxuICAgICAgICA8cS1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIDpsYWJlbD1cImxhYmVsLnN1Ym1pdFwiXG4gICAgICAgICAgICA6bG9hZGluZz1cImxvYWRpbmdcIlxuICAgICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5IHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgY2xhc3M9XCJmdWxsLXdpZHRoIHRleHQtd2VpZ2h0LWJvbGRcIlxuICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3EtY2FyZC1hY3Rpb25zPlxuICAgICAgPC9xLWZvcm0+XG4gICAgPC9xLWNhcmQ+XG4gIDwvcS1kaWFsb2c+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEFQSWludGVyZmFjZSBmcm9tIFwic3JjL2FwaS9BUElpbnRlcmZhY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIm9jckNvbXBvbmVudHNcIixcbiAgcHJvcHM6IFtcInRpdGxlXCIsIFwibGFiZWxcIiwgXCJwYXltZW50X2NvZGVcIiwgXCJwYXltZW50X2NyZWRlbnRpYWxzXCJdLFxuICBzZXR1cCgpIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNob3dfbW9kYWw6IGZhbHNlLFxuICAgICAgZGF0YTogW10sXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIGNyZWRpdF9jYXJkX251bWJlcjogXCJcIixcbiAgICAgIGV4cGlyeV9kYXRlOiBcIlwiLFxuICAgICAgY3Z2OiBcIlwiLFxuICAgICAgY2FyZF9uYW1lOiBcIlwiLFxuICAgICAgYmlsbGluZ19hZGRyZXNzOiBcIlwiLFxuICAgIH07XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBzaG93UGF5bWVudEZvcm0oKSB7XG4gICAgICB0aGlzLnNob3dfbW9kYWwgPSB0cnVlO1xuICAgIH0sXG4gICAgY2xvc2UoKSB7XG4gICAgICB0aGlzLnNob3dfbW9kYWwgPSBmYWxzZTtcbiAgICB9LFxuICAgIG9uU3VibWl0KCkge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIGxldCBtZXJjaGFudElkID0gMDtcbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIHRoaXMucGF5bWVudF9jcmVkZW50aWFsc1t0aGlzLnBheW1lbnRfY29kZV0gIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgdGhpcy5wYXltZW50X2NyZWRlbnRpYWxzW3RoaXMucGF5bWVudF9jb2RlXSAhPT0gbnVsbFxuICAgICAgKSB7XG4gICAgICAgIG1lcmNoYW50SWQgPSB0aGlzLnBheW1lbnRfY3JlZGVudGlhbHNbdGhpcy5wYXltZW50X2NvZGVdLm1lcmNoYW50X2lkO1xuICAgICAgfVxuICAgICAgY29uc3QgJHBhcmFtcyA9IHtcbiAgICAgICAgY3JlZGl0X2NhcmRfbnVtYmVyOiB0aGlzLmNyZWRpdF9jYXJkX251bWJlcixcbiAgICAgICAgZXhwaXJ5X2RhdGU6IHRoaXMuZXhwaXJ5X2RhdGUsXG4gICAgICAgIGN2djogdGhpcy5jdnYsXG4gICAgICAgIGNhcmRfbmFtZTogdGhpcy5jYXJkX25hbWUsXG4gICAgICAgIGJpbGxpbmdfYWRkcmVzczogdGhpcy5iaWxsaW5nX2FkZHJlc3MsXG4gICAgICAgIG1lcmNoYW50X2lkOiBtZXJjaGFudElkLFxuICAgICAgICBwYXltZW50X2NvZGU6IHRoaXMucGF5bWVudF9jb2RlLFxuICAgICAgfTtcbiAgICAgIEFQSWludGVyZmFjZS5zYXZlZENhcmRzKCRwYXJhbXMpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgIHRoaXMuJGVtaXQoXCJhZnRlckFkZHBheW1lbnRcIik7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBBUElpbnRlcmZhY2Uubm90aWZ5KFwiZGFya1wiLCBlcnJvciwgXCJlcnJvclwiLCB0aGlzLiRxKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfY3JlYXRlQmxvY2siLCJfY3JlYXRlVk5vZGUiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7OztBQStJQSxNQUFL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
