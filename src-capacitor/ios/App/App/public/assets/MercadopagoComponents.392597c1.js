import { Q as QSpace } from "./QSpace.f164c087.js";
import { _ as _export_sfc, m as APIinterface, p as openBlock, V as createElementBlock, f as createVNode, t as withCtx, a8 as QCard, Y as QBtn, a9 as QCardSection, U as createBaseVNode, Z as toDisplayString, aY as QInput, b2 as QSeparator, bE as QCardActions, aB as QDialog, aa as withDirectives, F as Fragment } from "./index.61ed5618.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QSelect } from "./QSelect.311187d6.js";
import { Q as QForm } from "./QForm.7ded9d38.js";
import { C as ClosePopup } from "./ClosePopup.9d17b53c.js";
import { l as loadScript } from "./index.d0b40bd3.js";
import "./QChip.f183a4f1.js";
import "./QItemLabel.a9365c5b.js";
import "./QMenu.8e482cd8.js";
import "./selection.50b4cb0c.js";
import "./rtl.f3ed811c.js";
import "./format.7f7370d3.js";
let mp;
const _sfc_main = {
  name: "MercadopagoComponents",
  props: ["title", "label", "payment_code", "payment_credentials"],
  data() {
    return {
      show_modal: false,
      data: [],
      loading: false,
      credentials: [],
      identification_type_list: [],
      identification_type: "DNI",
      identification_number: "12334566",
      credit_card_number: "5031755734530604",
      expiry_date: "11/22",
      cvv: "123",
      card_name: "basti",
      customer_id: "",
      payment_uuid: "",
      order_uuid: "",
      modal_cvv: false,
      card_number: "",
      verify_cvv: "123",
      jwt_data: [],
      card_id: ""
    };
  },
  methods: {
    showPaymentForm() {
      this.show_modal = true;
      this.setCredentials();
      this.includeScript(true);
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
    includeScript(initFunc) {
      loadScript("https://sdk.mercadopago.com/js/v2").then(() => {
        if (initFunc) {
          this.initPayment();
          this.createCustomer();
        }
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
      mp = new MercadoPago(this.credentials.attr1);
      this.identification_type_list = [];
      mp.getIdentificationTypes().then((result) => {
        Object.entries(result).forEach(([key, items]) => {
          this.identification_type_list.push({
            label: items.name,
            value: items.id
          });
        });
      }).catch((e) => {
        APIinterface.notify("dark", e.message, "error", this.$q);
      });
    },
    createCustomer() {
      const $params = {
        payment_code: this.payment_code,
        merchant_id: this.credentials.merchant_id,
        merchant_type: this.credentials.merchant_type
      };
      this.loading = true;
      APIinterface.MercadopagoCustomer($params).then((data) => {
        this.customer_id = data.details.customer_id;
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data) => {
        this.loading = false;
      });
    },
    onSubmit() {
      var str = this.expiry_date;
      var expiry = str.split("/");
      var expiry_month = expiry[0];
      var expiry_year = expiry[1];
      const str_card = this.credit_card_number;
      const card_number = str_card.replace(/ /g, "");
      this.is_loading = true;
      mp.createCardToken({
        cardNumber: card_number,
        cardholderName: this.card_name,
        cardExpirationMonth: expiry_month,
        cardExpirationYear: expiry_year,
        securityCode: this.cvv,
        identificationType: this.identification_type,
        identificationNumber: this.identification_number
      }).then((result) => {
        this.AddCard(result);
      }).catch((error) => {
        this.is_loading = false;
        if (typeof error.message !== "undefined" && error.message !== null) {
          APIinterface.notify(
            "negative",
            error.message,
            "error_outline",
            this.$q
          );
        } else {
          let error2;
          error2.forEach((item, index) => {
            error2 += item.message;
          });
          APIinterface.notify("dark", error2, "error", this.$q);
        }
      });
    },
    AddCard(data) {
      let $params = {
        payment_code: this.payment_code,
        merchant_id: this.credentials.merchant_id,
        merchant_type: this.credentials.merchant_type,
        id: data.id,
        card_name: this.card_name,
        customer_id: this.customer_id
      };
      this.loading = true;
      APIinterface.MercadopagoAddcard($params).then((data2) => {
        this.close();
        this.$emit("afterAddpayment");
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data2) => {
        this.loading = false;
      });
    },
    PaymentRender(data) {
      this.payment_uuid = data.payment_uuid;
      this.order_uuid = data.order_uuid;
      let $data = {
        payment_uuid: this.payment_uuid
      };
      APIinterface.showLoadingBox(
        this.$t("Processing payment") + "<br/>" + this.$t("don't close this window"),
        this.$q
      );
      APIinterface.MercadopagoGetcard($data).then((data2) => {
        this.card_number = data2.details.card_number;
        this.card_id = data2.details.card_id;
        this.includeScript(false);
        this.setCredentials();
        this.modal_cvv = true;
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data2) => {
        APIinterface.hideLoadingBox(this.$q);
      });
    },
    SubmitPayment() {
      this.loading = true;
      mp = new MercadoPago(this.credentials.attr2);
      mp.createCardToken({
        cardId: this.card_id,
        securityCode: this.verify_cvv
      }).then((result) => {
        this.loading = false;
        if (!APIinterface.empty(this.jwt_data)) {
          this.processPayment(result.id);
        } else {
          this.capturePayment(result.id);
        }
      }).catch((error) => {
        this.loading = false;
        if (typeof error.message !== "undefined" && error.message !== null) {
          APIinterface.notify(
            "negative",
            error.message,
            "error_outline",
            this.$q
          );
        } else {
          let err;
          error.forEach((item, index) => {
            err += item.message;
          });
          APIinterface.notify("dark", err, "error", this.$q);
        }
      });
    },
    capturePayment(card_token) {
      var $params = {
        payment_code: this.payment_code,
        merchant_id: this.credentials.merchant_id,
        merchant_type: this.credentials.merchant_type,
        order_uuid: this.order_uuid,
        cart_uuid: APIinterface.getStorage("cart_uuid"),
        payment_uuid: this.payment_uuid,
        card_token
      };
      APIinterface.showLoadingBox(
        "Processing payment..<br/>don't close this window",
        this.$q
      );
      APIinterface.MercadopagoCapturePayment($params).then((data) => {
        this.$emit("afterPayment", data.details);
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data) => {
        APIinterface.hideLoadingBox(this.$q);
      });
    },
    Dopayment(data, datas) {
      this.jwt_data = data;
      APIinterface.showLoadingBox(
        this.$t("Processing payment") + "<br/>" + this.$t("don't close this window"),
        this.$q
      );
      APIinterface.fetchDataByTokenPostPayment("MercadopagoGetcardid", {
        payment_uuid: datas.payment_uuid
      }).then((data2) => {
        this.setCredentials();
        this.includeScript();
        this.card_number = data2.details.card_number;
        this.card_id = data2.details.card_id;
        this.error = [];
        this.$emit("closePayment");
        this.modal_cvv = true;
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data2) => {
        APIinterface.hideLoadingBox(this.$q);
      });
    },
    processPayment(card_token) {
      APIinterface.showLoadingBox(
        this.$t("Processing payment") + "<br/>" + this.$t("don't close this window"),
        this.$q
      );
      APIinterface.fetchDataByTokenPostPayment("MercadopagoProcesspayment", {
        card_token,
        data: this.jwt_data
      }).then((data) => {
        this.$emit("afterSuccessfulpayment", data.details);
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data) => {
        APIinterface.hideLoadingBox(this.$q);
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
const _hoisted_8 = { class: "row q-col-gutter-md" };
const _hoisted_9 = { class: "col-12" };
const _hoisted_10 = { class: "row q-col-gutter-md" };
const _hoisted_11 = { class: "col" };
const _hoisted_12 = { class: "col" };
const _hoisted_13 = { class: "text-weight-bold no-margin" };
const _hoisted_14 = { class: "q-ma-sm" };
const _hoisted_15 = { class: "font12" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(QDialog, {
      modelValue: $data.show_modal,
      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.show_modal = $event),
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
                          (val) => val && val.length > 0 || "this field is required"
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
                            (val) => val && val.length > 0 || "this field is required"
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
                            (val) => val && val.length > 0 || "this field is required"
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
                            (val) => val && val.length > 0 || "this field is required"
                          ]
                        }, null, 8, ["bg-color", "color", "modelValue", "label", "rules"])
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_10, [
                      createBaseVNode("div", _hoisted_11, [
                        createVNode(QSelect, {
                          modelValue: $data.identification_type,
                          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.identification_type = $event),
                          options: $data.identification_type_list,
                          label: _ctx.$t("Identitification Type"),
                          dense: "",
                          outlined: "",
                          "bg-color": _ctx.$q.dark.mode ? "grey600" : "mygrey",
                          color: _ctx.$q.dark.mode ? "grey300" : "primary"
                        }, null, 8, ["modelValue", "options", "label", "bg-color", "color"])
                      ]),
                      createBaseVNode("div", _hoisted_12, [
                        createVNode(QInput, {
                          dense: "",
                          "bg-color": _ctx.$q.dark.mode ? "grey600" : "mygrey",
                          color: _ctx.$q.dark.mode ? "grey300" : "primary",
                          outlined: "",
                          modelValue: $data.identification_number,
                          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.identification_number = $event),
                          label: _ctx.$t("Identification Number"),
                          class: "no-margin",
                          rules: [
                            (val) => val && val.length > 0 || "this field is required"
                          ],
                          mask: "####"
                        }, null, 8, ["bg-color", "color", "modelValue", "label", "rules"])
                      ])
                    ])
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
    }, 8, ["modelValue"]),
    createVNode(QDialog, {
      modelValue: $data.modal_cvv,
      "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $data.modal_cvv = $event),
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
                withDirectives(createVNode(QBtn, {
                  color: "white",
                  square: "",
                  unelevated: "",
                  "text-color": "grey",
                  icon: "las la-times",
                  dense: "",
                  "no-caps": "",
                  size: "sm",
                  class: "border-grey radius8"
                }, null, 512), [
                  [ClosePopup]
                ])
              ]),
              _: 1
            }),
            createVNode(QForm, { onSubmit: $options.SubmitPayment }, {
              default: withCtx(() => [
                createVNode(QCardSection, { class: "q-pa-md" }, {
                  default: withCtx(() => [
                    createBaseVNode("h5", _hoisted_13, toDisplayString(_ctx.$t("Verification")), 1),
                    createBaseVNode("div", _hoisted_14, [
                      createBaseVNode("p", _hoisted_15, toDisplayString(_ctx.$t("Enter CVV for card")) + " " + toDisplayString($data.card_number), 1)
                    ]),
                    createVNode(QInput, {
                      dense: "",
                      "bg-color": "mygrey",
                      color: "warning",
                      outlined: "",
                      modelValue: $data.verify_cvv,
                      "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $data.verify_cvv = $event),
                      label: _ctx.$t("Security Code"),
                      class: "no-margin",
                      rules: [
                        (val) => val && val.length > 0 || this.$t("this field is required")
                      ],
                      mask: "####"
                    }, null, 8, ["modelValue", "label", "rules"])
                  ]),
                  _: 1
                }),
                createVNode(QSeparator, { spaced: "" }),
                createVNode(QCardActions, null, {
                  default: withCtx(() => [
                    createVNode(QBtn, {
                      type: "submit",
                      label: $props.label.submit_form,
                      loading: $data.loading,
                      color: "primary",
                      "text-color": "white",
                      unelevated: "",
                      class: "fit",
                      "no-caps": "",
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
    }, 8, ["modelValue"])
  ], 64);
}
var MercadopagoComponents = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "MercadopagoComponents.vue"]]);
export { MercadopagoComponents as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVyY2Fkb3BhZ29Db21wb25lbnRzLjM5MjU5N2MxLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9NZXJjYWRvcGFnb0NvbXBvbmVudHMudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHEtZGlhbG9nXG4gICAgdi1tb2RlbD1cInNob3dfbW9kYWxcIlxuICAgIHBlcnNpc3RlbnRcbiAgICB0cmFuc2l0aW9uLXNob3c9XCJmYWRlXCJcbiAgICB0cmFuc2l0aW9uLWhpZGU9XCJmYWRlXCJcbiAgPlxuICAgIDxxLWNhcmQgc3R5bGU9XCJ3aWR0aDogNTAwcHg7IG1heC13aWR0aDogODB2d1wiPlxuICAgICAgPHEtdG9vbGJhciBjbGFzcz1cInRleHQtcHJpbWFyeSB0b3AtdG9vbGJhciBxLXBsLW1kXCIgZGVuc2U+XG4gICAgICAgIDxxLXNwYWNlPjwvcS1zcGFjZT5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgQGNsaWNrPVwic2hvd19tb2RhbCA9ICF0cnVlXCJcbiAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICBzcXVhcmVcbiAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgdGV4dC1jb2xvcj1cImdyZXlcIlxuICAgICAgICAgIGljb249XCJsYXMgbGEtdGltZXNcIlxuICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgY2xhc3M9XCJib3JkZXItZ3JleSByYWRpdXM4XCJcbiAgICAgICAgLz5cbiAgICAgIDwvcS10b29sYmFyPlxuXG4gICAgICA8cS1mb3JtIEBzdWJtaXQ9XCJvblN1Ym1pdFwiPlxuICAgICAgICA8cS1jYXJkLXNlY3Rpb24gY2xhc3M9XCJxLXBhLW1kXCI+XG4gICAgICAgICAgPGg1IGNsYXNzPVwidGV4dC13ZWlnaHQtYm9sZCBuby1tYXJnaW5cIj57eyB0aXRsZSB9fTwvaDU+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInEtbWEtc21cIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9udDEyXCI+e3sgbGFiZWwubm90ZXMgfX08L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIHEtY29sLWd1dHRlci1zbVwiPlxuICAgICAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgICAgOmJnLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXk2MDAnIDogJ215Z3JleSdcIlxuICAgICAgICAgICAgICA6Y29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTMwMCcgOiAncHJpbWFyeSdcIlxuICAgICAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgICAgICB2LW1vZGVsPVwiY3JlZGl0X2NhcmRfbnVtYmVyXCJcbiAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ0NhcmQgbnVtYmVyJylcIlxuICAgICAgICAgICAgICA6cnVsZXM9XCJbXG4gICAgICAgICAgICAgICAgKHZhbCkgPT4gKHZhbCAmJiB2YWwubGVuZ3RoID4gMCkgfHwgJ3RoaXMgZmllbGQgaXMgcmVxdWlyZWQnLFxuICAgICAgICAgICAgICBdXCJcbiAgICAgICAgICAgICAgbWFzaz1cIiMjIyMgIyMjIyAjIyMjICMjIyNcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcS1jb2wtZ3V0dGVyLW1kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgICAgICA6YmctY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTYwMCcgOiAnbXlncmV5J1wiXG4gICAgICAgICAgICAgICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXkzMDAnIDogJ3ByaW1hcnknXCJcbiAgICAgICAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJleHBpcnlfZGF0ZVwiXG4gICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ0V4cC4gZGF0ZScpXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm5vLW1hcmdpblwiXG4gICAgICAgICAgICAgICAgOnJ1bGVzPVwiW1xuICAgICAgICAgICAgICAgICAgKHZhbCkgPT4gKHZhbCAmJiB2YWwubGVuZ3RoID4gMCkgfHwgJ3RoaXMgZmllbGQgaXMgcmVxdWlyZWQnLFxuICAgICAgICAgICAgICAgIF1cIlxuICAgICAgICAgICAgICAgIG1hc2s9XCIjIy8jI1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICAgIDpiZy1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5NjAwJyA6ICdteWdyZXknXCJcbiAgICAgICAgICAgICAgICA6Y29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTMwMCcgOiAncHJpbWFyeSdcIlxuICAgICAgICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImN2dlwiXG4gICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ1NlY3VyaXR5IENvZGUnKVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJuby1tYXJnaW5cIlxuICAgICAgICAgICAgICAgIDpydWxlcz1cIltcbiAgICAgICAgICAgICAgICAgICh2YWwpID0+ICh2YWwgJiYgdmFsLmxlbmd0aCA+IDApIHx8ICd0aGlzIGZpZWxkIGlzIHJlcXVpcmVkJyxcbiAgICAgICAgICAgICAgICBdXCJcbiAgICAgICAgICAgICAgICBtYXNrPVwiIyMjI1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8IS0tIHJvdyAtLT5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcS1jb2wtZ3V0dGVyLW1kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgICAgICA6YmctY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTYwMCcgOiAnbXlncmV5J1wiXG4gICAgICAgICAgICAgICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXkzMDAnIDogJ3ByaW1hcnknXCJcbiAgICAgICAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJjYXJkX25hbWVcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwibm8tbWFyZ2luXCJcbiAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnQ2FyZCBuYW1lJylcIlxuICAgICAgICAgICAgICAgIDpydWxlcz1cIltcbiAgICAgICAgICAgICAgICAgICh2YWwpID0+ICh2YWwgJiYgdmFsLmxlbmd0aCA+IDApIHx8ICd0aGlzIGZpZWxkIGlzIHJlcXVpcmVkJyxcbiAgICAgICAgICAgICAgICBdXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwhLS0gcm93IC0tPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBxLWNvbC1ndXR0ZXItbWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgPHEtc2VsZWN0XG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImlkZW50aWZpY2F0aW9uX3R5cGVcIlxuICAgICAgICAgICAgICAgIDpvcHRpb25zPVwiaWRlbnRpZmljYXRpb25fdHlwZV9saXN0XCJcbiAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnSWRlbnRpdGlmaWNhdGlvbiBUeXBlJylcIlxuICAgICAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICAgICAgICA6YmctY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTYwMCcgOiAnbXlncmV5J1wiXG4gICAgICAgICAgICAgICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXkzMDAnIDogJ3ByaW1hcnknXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICA8cS1pbnB1dFxuICAgICAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICAgICAgOmJnLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXk2MDAnIDogJ215Z3JleSdcIlxuICAgICAgICAgICAgICAgIDpjb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICdwcmltYXJ5J1wiXG4gICAgICAgICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiaWRlbnRpZmljYXRpb25fbnVtYmVyXCJcbiAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnSWRlbnRpZmljYXRpb24gTnVtYmVyJylcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwibm8tbWFyZ2luXCJcbiAgICAgICAgICAgICAgICA6cnVsZXM9XCJbXG4gICAgICAgICAgICAgICAgICAodmFsKSA9PiAodmFsICYmIHZhbC5sZW5ndGggPiAwKSB8fCAndGhpcyBmaWVsZCBpcyByZXF1aXJlZCcsXG4gICAgICAgICAgICAgICAgXVwiXG4gICAgICAgICAgICAgICAgbWFzaz1cIiMjIyNcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPCEtLSByb3cgLS0+XG4gICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG5cbiAgICAgICAgPHEtc2VwYXJhdG9yIHNwYWNlZCAvPlxuICAgICAgICA8cS1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIDpsYWJlbD1cImxhYmVsLnN1Ym1pdFwiXG4gICAgICAgICAgICA6bG9hZGluZz1cImxvYWRpbmdcIlxuICAgICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5IHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgY2xhc3M9XCJmdWxsLXdpZHRoIHRleHQtd2VpZ2h0LWJvbGRcIlxuICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3EtY2FyZC1hY3Rpb25zPlxuICAgICAgPC9xLWZvcm0+XG4gICAgPC9xLWNhcmQ+XG4gIDwvcS1kaWFsb2c+XG5cbiAgPHEtZGlhbG9nXG4gICAgdi1tb2RlbD1cIm1vZGFsX2N2dlwiXG4gICAgcGVyc2lzdGVudFxuICAgIHRyYW5zaXRpb24tc2hvdz1cImZhZGVcIlxuICAgIHRyYW5zaXRpb24taGlkZT1cImZhZGVcIlxuICA+XG4gICAgPHEtY2FyZCBzdHlsZT1cIndpZHRoOiA1MDBweDsgbWF4LXdpZHRoOiA4MHZ3XCI+XG4gICAgICA8cS10b29sYmFyIGNsYXNzPVwidGV4dC1wcmltYXJ5IHRvcC10b29sYmFyIHEtcGwtbWRcIiBkZW5zZT5cbiAgICAgICAgPHEtc3BhY2U+PC9xLXNwYWNlPlxuICAgICAgICA8cS1idG5cbiAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgc3F1YXJlXG4gICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgIHRleHQtY29sb3I9XCJncmV5XCJcbiAgICAgICAgICBpY29uPVwibGFzIGxhLXRpbWVzXCJcbiAgICAgICAgICBkZW5zZVxuICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgIGNsYXNzPVwiYm9yZGVyLWdyZXkgcmFkaXVzOFwiXG4gICAgICAgIC8+XG4gICAgICA8L3EtdG9vbGJhcj5cblxuICAgICAgPHEtZm9ybSBAc3VibWl0PVwiU3VibWl0UGF5bWVudFwiPlxuICAgICAgICA8cS1jYXJkLXNlY3Rpb24gY2xhc3M9XCJxLXBhLW1kXCI+XG4gICAgICAgICAgPGg1IGNsYXNzPVwidGV4dC13ZWlnaHQtYm9sZCBuby1tYXJnaW5cIj57eyAkdChcIlZlcmlmaWNhdGlvblwiKSB9fTwvaDU+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInEtbWEtc21cIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9udDEyXCI+XG4gICAgICAgICAgICAgIHt7ICR0KFwiRW50ZXIgQ1ZWIGZvciBjYXJkXCIpIH19IHt7IGNhcmRfbnVtYmVyIH19XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8cS1pbnB1dFxuICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgIGJnLWNvbG9yPVwibXlncmV5XCJcbiAgICAgICAgICAgIGNvbG9yPVwid2FybmluZ1wiXG4gICAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgICAgdi1tb2RlbD1cInZlcmlmeV9jdnZcIlxuICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ1NlY3VyaXR5IENvZGUnKVwiXG4gICAgICAgICAgICBjbGFzcz1cIm5vLW1hcmdpblwiXG4gICAgICAgICAgICA6cnVsZXM9XCJbXG4gICAgICAgICAgICAgICh2YWwpID0+XG4gICAgICAgICAgICAgICAgKHZhbCAmJiB2YWwubGVuZ3RoID4gMCkgfHwgdGhpcy4kdCgndGhpcyBmaWVsZCBpcyByZXF1aXJlZCcpLFxuICAgICAgICAgICAgXVwiXG4gICAgICAgICAgICBtYXNrPVwiIyMjI1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cblxuICAgICAgICA8cS1zZXBhcmF0b3Igc3BhY2VkIC8+XG4gICAgICAgIDxxLWNhcmQtYWN0aW9ucz5cbiAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgOmxhYmVsPVwibGFiZWwuc3VibWl0X2Zvcm1cIlxuICAgICAgICAgICAgOmxvYWRpbmc9XCJsb2FkaW5nXCJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICB0ZXh0LWNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgICAgY2xhc3M9XCJmaXRcIlxuICAgICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3EtY2FyZC1hY3Rpb25zPlxuICAgICAgPC9xLWZvcm0+XG4gICAgPC9xLWNhcmQ+XG4gIDwvcS1kaWFsb2c+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEFQSWludGVyZmFjZSBmcm9tIFwic3JjL2FwaS9BUElpbnRlcmZhY2VcIjtcbmltcG9ydCB7IGxvYWRTY3JpcHQgfSBmcm9tIFwidnVlLXBsdWdpbi1sb2FkLXNjcmlwdFwiO1xuXG5sZXQgbXA7XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiTWVyY2Fkb3BhZ29Db21wb25lbnRzXCIsXG4gIHByb3BzOiBbXCJ0aXRsZVwiLCBcImxhYmVsXCIsIFwicGF5bWVudF9jb2RlXCIsIFwicGF5bWVudF9jcmVkZW50aWFsc1wiXSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2hvd19tb2RhbDogZmFsc2UsXG4gICAgICBkYXRhOiBbXSxcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgY3JlZGVudGlhbHM6IFtdLFxuICAgICAgaWRlbnRpZmljYXRpb25fdHlwZV9saXN0OiBbXSxcbiAgICAgIGlkZW50aWZpY2F0aW9uX3R5cGU6IFwiRE5JXCIsXG4gICAgICBpZGVudGlmaWNhdGlvbl9udW1iZXI6IFwiMTIzMzQ1NjZcIixcbiAgICAgIGNyZWRpdF9jYXJkX251bWJlcjogXCI1MDMxNzU1NzM0NTMwNjA0XCIsXG4gICAgICBleHBpcnlfZGF0ZTogXCIxMS8yMlwiLFxuICAgICAgY3Z2OiBcIjEyM1wiLFxuICAgICAgY2FyZF9uYW1lOiBcImJhc3RpXCIsXG4gICAgICBjdXN0b21lcl9pZDogXCJcIixcbiAgICAgIHBheW1lbnRfdXVpZDogXCJcIixcbiAgICAgIG9yZGVyX3V1aWQ6IFwiXCIsXG4gICAgICBtb2RhbF9jdnY6IGZhbHNlLFxuICAgICAgY2FyZF9udW1iZXI6IFwiXCIsXG4gICAgICB2ZXJpZnlfY3Z2OiBcIjEyM1wiLFxuICAgICAgand0X2RhdGE6IFtdLFxuICAgICAgY2FyZF9pZDogXCJcIixcbiAgICB9O1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgc2hvd1BheW1lbnRGb3JtKCkge1xuICAgICAgdGhpcy5zaG93X21vZGFsID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2V0Q3JlZGVudGlhbHMoKTtcbiAgICAgIHRoaXMuaW5jbHVkZVNjcmlwdCh0cnVlKTtcbiAgICB9LFxuICAgIGNsb3NlKCkge1xuICAgICAgdGhpcy5zaG93X21vZGFsID0gZmFsc2U7XG4gICAgfSxcbiAgICBjbG9zZVBheW1lbnQoKSB7XG4gICAgICB0aGlzLiRlbWl0KFwiYWZ0ZXJDYW5jZWxQYXltZW50XCIpO1xuICAgIH0sXG4gICAgc2V0Q3JlZGVudGlhbHMoKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiB0aGlzLnBheW1lbnRfY3JlZGVudGlhbHNbdGhpcy5wYXltZW50X2NvZGVdICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgIHRoaXMucGF5bWVudF9jcmVkZW50aWFsc1t0aGlzLnBheW1lbnRfY29kZV0gIT09IG51bGxcbiAgICAgICkge1xuICAgICAgICB0aGlzLmNyZWRlbnRpYWxzID0gdGhpcy5wYXltZW50X2NyZWRlbnRpYWxzW3RoaXMucGF5bWVudF9jb2RlXTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGluY2x1ZGVTY3JpcHQoaW5pdEZ1bmMpIHtcbiAgICAgIGxvYWRTY3JpcHQoXCJodHRwczovL3Nkay5tZXJjYWRvcGFnby5jb20vanMvdjJcIilcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGlmIChpbml0RnVuYykge1xuICAgICAgICAgICAgdGhpcy5pbml0UGF5bWVudCgpO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVDdXN0b21lcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICBBUElpbnRlcmZhY2Uubm90aWZ5KFxuICAgICAgICAgICAgXCJuZWdhdGl2ZVwiLFxuICAgICAgICAgICAgXCJmYWlsZWQgbG9hZGluZyBzY3JpcHRcIixcbiAgICAgICAgICAgIFwiZXJyb3Jfb3V0bGluZVwiLFxuICAgICAgICAgICAgdGhpcy4kcVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgaW5pdFBheW1lbnQoKSB7XG4gICAgICBtcCA9IG5ldyBNZXJjYWRvUGFnbyh0aGlzLmNyZWRlbnRpYWxzLmF0dHIxKTtcbiAgICAgIHRoaXMuaWRlbnRpZmljYXRpb25fdHlwZV9saXN0ID0gW107XG4gICAgICBtcC5nZXRJZGVudGlmaWNhdGlvblR5cGVzKClcbiAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHJlc3VsdCkuZm9yRWFjaCgoW2tleSwgaXRlbXNdKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlkZW50aWZpY2F0aW9uX3R5cGVfbGlzdC5wdXNoKHtcbiAgICAgICAgICAgICAgbGFiZWw6IGl0ZW1zLm5hbWUsXG4gICAgICAgICAgICAgIHZhbHVlOiBpdGVtcy5pZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICBBUElpbnRlcmZhY2Uubm90aWZ5KFwiZGFya1wiLCBlLm1lc3NhZ2UsIFwiZXJyb3JcIiwgdGhpcy4kcSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgY3JlYXRlQ3VzdG9tZXIoKSB7XG4gICAgICBjb25zdCAkcGFyYW1zID0ge1xuICAgICAgICBwYXltZW50X2NvZGU6IHRoaXMucGF5bWVudF9jb2RlLFxuICAgICAgICBtZXJjaGFudF9pZDogdGhpcy5jcmVkZW50aWFscy5tZXJjaGFudF9pZCxcbiAgICAgICAgbWVyY2hhbnRfdHlwZTogdGhpcy5jcmVkZW50aWFscy5tZXJjaGFudF90eXBlLFxuICAgICAgfTtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICBBUElpbnRlcmZhY2UuTWVyY2Fkb3BhZ29DdXN0b21lcigkcGFyYW1zKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuY3VzdG9tZXJfaWQgPSBkYXRhLmRldGFpbHMuY3VzdG9tZXJfaWQ7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBBUElpbnRlcmZhY2Uubm90aWZ5KFwiZGFya1wiLCBlcnJvciwgXCJlcnJvclwiLCB0aGlzLiRxKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBvblN1Ym1pdCgpIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlICovXG4gICAgICB2YXIgc3RyID0gdGhpcy5leHBpcnlfZGF0ZTtcbiAgICAgIHZhciBleHBpcnkgPSBzdHIuc3BsaXQoXCIvXCIpO1xuICAgICAgdmFyIGV4cGlyeV9tb250aCA9IGV4cGlyeVswXTtcbiAgICAgIHZhciBleHBpcnlfeWVhciA9IGV4cGlyeVsxXTtcblxuICAgICAgY29uc3Qgc3RyX2NhcmQgPSB0aGlzLmNyZWRpdF9jYXJkX251bWJlcjtcbiAgICAgIGNvbnN0IGNhcmRfbnVtYmVyID0gc3RyX2NhcmQucmVwbGFjZSgvIC9nLCBcIlwiKTtcblxuICAgICAgdGhpcy5pc19sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIG1wLmNyZWF0ZUNhcmRUb2tlbih7XG4gICAgICAgIGNhcmROdW1iZXI6IGNhcmRfbnVtYmVyLFxuICAgICAgICBjYXJkaG9sZGVyTmFtZTogdGhpcy5jYXJkX25hbWUsXG4gICAgICAgIGNhcmRFeHBpcmF0aW9uTW9udGg6IGV4cGlyeV9tb250aCxcbiAgICAgICAgY2FyZEV4cGlyYXRpb25ZZWFyOiBleHBpcnlfeWVhcixcbiAgICAgICAgc2VjdXJpdHlDb2RlOiB0aGlzLmN2dixcbiAgICAgICAgaWRlbnRpZmljYXRpb25UeXBlOiB0aGlzLmlkZW50aWZpY2F0aW9uX3R5cGUsXG4gICAgICAgIGlkZW50aWZpY2F0aW9uTnVtYmVyOiB0aGlzLmlkZW50aWZpY2F0aW9uX251bWJlcixcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICB0aGlzLkFkZENhcmQocmVzdWx0KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMuaXNfbG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIGlmICh0eXBlb2YgZXJyb3IubWVzc2FnZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBlcnJvci5tZXNzYWdlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBBUElpbnRlcmZhY2Uubm90aWZ5KFxuICAgICAgICAgICAgICBcIm5lZ2F0aXZlXCIsXG4gICAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgICAgIFwiZXJyb3Jfb3V0bGluZVwiLFxuICAgICAgICAgICAgICB0aGlzLiRxXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZXJyb3I7XG4gICAgICAgICAgICBlcnJvci5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBlcnJvciArPSBpdGVtLm1lc3NhZ2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJkYXJrXCIsIGVycm9yLCBcImVycm9yXCIsIHRoaXMuJHEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBBZGRDYXJkKGRhdGEpIHtcbiAgICAgIGxldCAkcGFyYW1zID0ge1xuICAgICAgICBwYXltZW50X2NvZGU6IHRoaXMucGF5bWVudF9jb2RlLFxuICAgICAgICBtZXJjaGFudF9pZDogdGhpcy5jcmVkZW50aWFscy5tZXJjaGFudF9pZCxcbiAgICAgICAgbWVyY2hhbnRfdHlwZTogdGhpcy5jcmVkZW50aWFscy5tZXJjaGFudF90eXBlLFxuICAgICAgICBpZDogZGF0YS5pZCxcbiAgICAgICAgY2FyZF9uYW1lOiB0aGlzLmNhcmRfbmFtZSxcbiAgICAgICAgY3VzdG9tZXJfaWQ6IHRoaXMuY3VzdG9tZXJfaWQsXG4gICAgICB9O1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIEFQSWludGVyZmFjZS5NZXJjYWRvcGFnb0FkZGNhcmQoJHBhcmFtcylcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgdGhpcy4kZW1pdChcImFmdGVyQWRkcGF5bWVudFwiKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJkYXJrXCIsIGVycm9yLCBcImVycm9yXCIsIHRoaXMuJHEpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIFBheW1lbnRSZW5kZXIoZGF0YSkge1xuICAgICAgdGhpcy5wYXltZW50X3V1aWQgPSBkYXRhLnBheW1lbnRfdXVpZDtcbiAgICAgIHRoaXMub3JkZXJfdXVpZCA9IGRhdGEub3JkZXJfdXVpZDtcbiAgICAgIGxldCAkZGF0YSA9IHtcbiAgICAgICAgcGF5bWVudF91dWlkOiB0aGlzLnBheW1lbnRfdXVpZCxcbiAgICAgIH07XG4gICAgICBBUElpbnRlcmZhY2Uuc2hvd0xvYWRpbmdCb3goXG4gICAgICAgIHRoaXMuJHQoXCJQcm9jZXNzaW5nIHBheW1lbnRcIikgK1xuICAgICAgICAgIFwiPGJyLz5cIiArXG4gICAgICAgICAgdGhpcy4kdChcImRvbid0IGNsb3NlIHRoaXMgd2luZG93XCIpLFxuICAgICAgICB0aGlzLiRxXG4gICAgICApO1xuICAgICAgQVBJaW50ZXJmYWNlLk1lcmNhZG9wYWdvR2V0Y2FyZCgkZGF0YSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmNhcmRfbnVtYmVyID0gZGF0YS5kZXRhaWxzLmNhcmRfbnVtYmVyO1xuICAgICAgICAgIHRoaXMuY2FyZF9pZCA9IGRhdGEuZGV0YWlscy5jYXJkX2lkO1xuICAgICAgICAgIHRoaXMuaW5jbHVkZVNjcmlwdChmYWxzZSk7XG4gICAgICAgICAgdGhpcy5zZXRDcmVkZW50aWFscygpO1xuICAgICAgICAgIHRoaXMubW9kYWxfY3Z2ID0gdHJ1ZTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJkYXJrXCIsIGVycm9yLCBcImVycm9yXCIsIHRoaXMuJHEpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5oaWRlTG9hZGluZ0JveCh0aGlzLiRxKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBTdWJtaXRQYXltZW50KCkge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIG1wID0gbmV3IE1lcmNhZG9QYWdvKHRoaXMuY3JlZGVudGlhbHMuYXR0cjIpO1xuICAgICAgbXAuY3JlYXRlQ2FyZFRva2VuKHtcbiAgICAgICAgY2FyZElkOiB0aGlzLmNhcmRfaWQsXG4gICAgICAgIHNlY3VyaXR5Q29kZTogdGhpcy52ZXJpZnlfY3Z2LFxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIGlmICghQVBJaW50ZXJmYWNlLmVtcHR5KHRoaXMuand0X2RhdGEpKSB7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NQYXltZW50KHJlc3VsdC5pZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2FwdHVyZVBheW1lbnQocmVzdWx0LmlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBpZiAodHlwZW9mIGVycm9yLm1lc3NhZ2UgIT09IFwidW5kZWZpbmVkXCIgJiYgZXJyb3IubWVzc2FnZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgQVBJaW50ZXJmYWNlLm5vdGlmeShcbiAgICAgICAgICAgICAgXCJuZWdhdGl2ZVwiLFxuICAgICAgICAgICAgICBlcnJvci5tZXNzYWdlLFxuICAgICAgICAgICAgICBcImVycm9yX291dGxpbmVcIixcbiAgICAgICAgICAgICAgdGhpcy4kcVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGVycjtcbiAgICAgICAgICAgIGVycm9yLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGVyciArPSBpdGVtLm1lc3NhZ2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJkYXJrXCIsIGVyciwgXCJlcnJvclwiLCB0aGlzLiRxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgY2FwdHVyZVBheW1lbnQoY2FyZF90b2tlbikge1xuICAgICAgdmFyICRwYXJhbXMgPSB7XG4gICAgICAgIHBheW1lbnRfY29kZTogdGhpcy5wYXltZW50X2NvZGUsXG4gICAgICAgIG1lcmNoYW50X2lkOiB0aGlzLmNyZWRlbnRpYWxzLm1lcmNoYW50X2lkLFxuICAgICAgICBtZXJjaGFudF90eXBlOiB0aGlzLmNyZWRlbnRpYWxzLm1lcmNoYW50X3R5cGUsXG4gICAgICAgIG9yZGVyX3V1aWQ6IHRoaXMub3JkZXJfdXVpZCxcbiAgICAgICAgY2FydF91dWlkOiBBUElpbnRlcmZhY2UuZ2V0U3RvcmFnZShcImNhcnRfdXVpZFwiKSxcbiAgICAgICAgcGF5bWVudF91dWlkOiB0aGlzLnBheW1lbnRfdXVpZCxcbiAgICAgICAgY2FyZF90b2tlbjogY2FyZF90b2tlbixcbiAgICAgIH07XG4gICAgICBBUElpbnRlcmZhY2Uuc2hvd0xvYWRpbmdCb3goXG4gICAgICAgIFwiUHJvY2Vzc2luZyBwYXltZW50Li48YnIvPmRvbid0IGNsb3NlIHRoaXMgd2luZG93XCIsXG4gICAgICAgIHRoaXMuJHFcbiAgICAgICk7XG4gICAgICBBUElpbnRlcmZhY2UuTWVyY2Fkb3BhZ29DYXB0dXJlUGF5bWVudCgkcGFyYW1zKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuJGVtaXQoXCJhZnRlclBheW1lbnRcIiwgZGF0YS5kZXRhaWxzKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJkYXJrXCIsIGVycm9yLCBcImVycm9yXCIsIHRoaXMuJHEpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5oaWRlTG9hZGluZ0JveCh0aGlzLiRxKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBEb3BheW1lbnQoZGF0YSwgZGF0YXMpIHtcbiAgICAgIHRoaXMuand0X2RhdGEgPSBkYXRhO1xuICAgICAgQVBJaW50ZXJmYWNlLnNob3dMb2FkaW5nQm94KFxuICAgICAgICB0aGlzLiR0KFwiUHJvY2Vzc2luZyBwYXltZW50XCIpICtcbiAgICAgICAgICBcIjxici8+XCIgK1xuICAgICAgICAgIHRoaXMuJHQoXCJkb24ndCBjbG9zZSB0aGlzIHdpbmRvd1wiKSxcbiAgICAgICAgdGhpcy4kcVxuICAgICAgKTtcbiAgICAgIEFQSWludGVyZmFjZS5mZXRjaERhdGFCeVRva2VuUG9zdFBheW1lbnQoXCJNZXJjYWRvcGFnb0dldGNhcmRpZFwiLCB7XG4gICAgICAgIHBheW1lbnRfdXVpZDogZGF0YXMucGF5bWVudF91dWlkLFxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLnNldENyZWRlbnRpYWxzKCk7XG4gICAgICAgICAgdGhpcy5pbmNsdWRlU2NyaXB0KCk7XG4gICAgICAgICAgdGhpcy5jYXJkX251bWJlciA9IGRhdGEuZGV0YWlscy5jYXJkX251bWJlcjtcbiAgICAgICAgICB0aGlzLmNhcmRfaWQgPSBkYXRhLmRldGFpbHMuY2FyZF9pZDtcbiAgICAgICAgICB0aGlzLmVycm9yID0gW107XG4gICAgICAgICAgdGhpcy4kZW1pdChcImNsb3NlUGF5bWVudFwiKTtcbiAgICAgICAgICB0aGlzLm1vZGFsX2N2diA9IHRydWU7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBBUElpbnRlcmZhY2Uubm90aWZ5KFwiZGFya1wiLCBlcnJvciwgXCJlcnJvclwiLCB0aGlzLiRxKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBBUElpbnRlcmZhY2UuaGlkZUxvYWRpbmdCb3godGhpcy4kcSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgcHJvY2Vzc1BheW1lbnQoY2FyZF90b2tlbikge1xuICAgICAgQVBJaW50ZXJmYWNlLnNob3dMb2FkaW5nQm94KFxuICAgICAgICB0aGlzLiR0KFwiUHJvY2Vzc2luZyBwYXltZW50XCIpICtcbiAgICAgICAgICBcIjxici8+XCIgK1xuICAgICAgICAgIHRoaXMuJHQoXCJkb24ndCBjbG9zZSB0aGlzIHdpbmRvd1wiKSxcbiAgICAgICAgdGhpcy4kcVxuICAgICAgKTtcbiAgICAgIEFQSWludGVyZmFjZS5mZXRjaERhdGFCeVRva2VuUG9zdFBheW1lbnQoXCJNZXJjYWRvcGFnb1Byb2Nlc3NwYXltZW50XCIsIHtcbiAgICAgICAgY2FyZF90b2tlbjogY2FyZF90b2tlbixcbiAgICAgICAgZGF0YTogdGhpcy5qd3RfZGF0YSxcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy4kZW1pdChcImFmdGVyU3VjY2Vzc2Z1bHBheW1lbnRcIiwgZGF0YS5kZXRhaWxzKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJkYXJrXCIsIGVycm9yLCBcImVycm9yXCIsIHRoaXMuJHEpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5oaWRlTG9hZGluZ0JveCh0aGlzLiRxKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICAvL1xuICB9LFxufTtcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbImVycm9yIiwiZGF0YSIsIl9jcmVhdGVWTm9kZSIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBeU5BLElBQUk7QUFDSixNQUFLLFlBQVU7QUFBQSxFQUNiLE1BQU07QUFBQSxFQUNOLE9BQU8sQ0FBQyxTQUFTLFNB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
