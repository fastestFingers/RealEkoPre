import { _ as _export_sfc, R as useDataStore, m as APIinterface, p as openBlock, q as createBlock, t as withCtx, f as createVNode, U as createBaseVNode, aa as withDirectives, Y as QBtn, a7 as normalizeClass, a6 as createTextVNode, Z as toDisplayString, aA as createCommentVNode, aY as QInput, a8 as QCard, aB as QDialog } from "./index.61ed5618.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QSpace } from "./QSpace.f164c087.js";
import { Q as QSelect } from "./QSelect.311187d6.js";
import { Q as QBtnToggle } from "./QBtnToggle.6ffa195b.js";
import { Q as QFooter } from "./QFooter.571ac042.js";
import { Q as QForm } from "./QForm.7ded9d38.js";
import { C as ClosePopup } from "./ClosePopup.9d17b53c.js";
import "./QChip.f183a4f1.js";
import "./QItemLabel.a9365c5b.js";
import "./QMenu.8e482cd8.js";
import "./selection.50b4cb0c.js";
import "./rtl.f3ed811c.js";
import "./format.7f7370d3.js";
import "./QBtnGroup.abc2d1c7.js";
import "./QResizeObserver.d08dce3c.js";
const _sfc_main = {
  name: "AddressInformation",
  props: ["back_url"],
  data() {
    return {
      show_modal: false,
      loading: false,
      location_data: [],
      location_name: "",
      delivery_options: this.$t("Leave it at my door"),
      delivery_instructions: "",
      address_label: "Home",
      attributes: [],
      delivery_options_data: [],
      address_label_data: [],
      address1: "",
      formatted_address: "",
      latitude: "",
      longitude: "",
      place_id: ""
    };
  },
  setup() {
    const DataStore = useDataStore();
    return {
      DataStore
    };
  },
  created() {
    this.addressAtttibues();
  },
  methods: {
    show(data) {
      this.show_modal = true;
      this.address1 = data.address.formatted_address;
      this.formatted_address = data.address.address1;
      this.latitude = data.latitude;
      this.longitude = data.longitude;
      this.place_id = data.place_id;
    },
    addressAtttibues() {
      APIinterface.addressAtttibues().then((data) => {
        this.attributes = data.details;
        if (Object.keys(data.details.delivery_option).length > 0) {
          Object.entries(data.details.delivery_option).forEach(
            ([key, items]) => {
              this.delivery_options_data.push({ label: items, value: key });
            }
          );
        }
        if (Object.keys(data.details.address_label).length > 0) {
          Object.entries(data.details.address_label).forEach(
            ([key, items]) => {
              this.address_label_data.push({ label: items, value: key });
            }
          );
        }
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data) => {
      });
    },
    onSubmit() {
      this.loading = true;
      let params = "address1=" + this.address1;
      params += "&formatted_address=" + this.formatted_address;
      params += "&location_name=" + this.location_name;
      params += "&delivery_instructions=" + this.delivery_instructions;
      params += "&delivery_options=" + this.delivery_options;
      params += "&address_label=" + this.address_label;
      params += "&latitude=" + this.latitude;
      params += "&longitude=" + this.longitude;
      params += "&place_id=" + this.place_id;
      APIinterface.fetchDataByTokenPost("SaveAddress", params).then((data) => {
        this.backPage();
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data) => {
        this.loading = false;
      });
    },
    backPage() {
      if (!APIinterface.empty(this.back_url)) {
        this.$router.push(this.back_url);
      } else {
        this.$router.push("/home");
      }
    }
  }
};
const _hoisted_1 = { class: "col-12" };
const _hoisted_2 = { class: "q-pl-md q-pr-md" };
const _hoisted_3 = { class: "row items-center items-stretch" };
const _hoisted_4 = { class: "col-9" };
const _hoisted_5 = { class: "text-weight-bold" };
const _hoisted_6 = { class: "cursor-pointer font12 text-grey" };
const _hoisted_7 = { class: "q-gutter-sm" };
const _hoisted_8 = { class: "text-h6" };
const _hoisted_9 = { class: "text-h6" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QDialog, {
    modelValue: $data.show_modal,
    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.show_modal = $event),
    persistent: "",
    onBeforeShow: _ctx.beforeShow,
    maximized: true,
    "transition-show": "fade",
    "transition-hide": "fade"
  }, {
    default: withCtx(() => [
      createVNode(QCard, { class: "row items-stretch" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            !_ctx.adjust_pin ? (openBlock(), createBlock(QToolbar, { key: 0 }, {
              default: withCtx(() => [
                withDirectives(createVNode(QBtn, {
                  icon: "close",
                  flat: "",
                  round: "",
                  dense: "",
                  color: _ctx.$q.dark.mode ? "white" : "dark"
                }, null, 8, ["color"]), [
                  [ClosePopup]
                ]),
                createVNode(QToolbarTitle, {
                  class: normalizeClass(["text-weight-bold", {
                    "text-white": _ctx.$q.dark.mode,
                    "text-dark": !_ctx.$q.dark.mode
                  }])
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("Delivery details")), 1)
                  ]),
                  _: 1
                }, 8, ["class"])
              ]),
              _: 1
            })) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("div", _hoisted_4, [
                  createBaseVNode("div", _hoisted_5, toDisplayString($data.formatted_address), 1),
                  createBaseVNode("div", _hoisted_6, toDisplayString($data.address1), 1)
                ])
              ]),
              createVNode(QSpace, { class: "q-pa-sm" }),
              createVNode(QForm, { onSubmit: $options.onSubmit }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_7, [
                    createVNode(QInput, {
                      modelValue: $data.address1,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.address1 = $event),
                      label: _ctx.$t("Street name"),
                      outlined: "",
                      "lazy-rules": "",
                      "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
                      "label-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                      borderless: "",
                      class: "input-borderless"
                    }, null, 8, ["modelValue", "label", "bg-color", "label-color"]),
                    createVNode(QInput, {
                      modelValue: $data.formatted_address,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.formatted_address = $event),
                      label: _ctx.$t("Street number"),
                      outlined: "",
                      "lazy-rules": "",
                      "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
                      "label-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                      borderless: "",
                      class: "input-borderless"
                    }, null, 8, ["modelValue", "label", "bg-color", "label-color"]),
                    createVNode(QInput, {
                      modelValue: $data.location_name,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.location_name = $event),
                      label: _ctx.$t("Aparment, suite or floor"),
                      outlined: "",
                      "lazy-rules": "",
                      "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
                      "label-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                      borderless: "",
                      class: "input-borderless"
                    }, null, 8, ["modelValue", "label", "bg-color", "label-color"]),
                    createBaseVNode("div", _hoisted_8, toDisplayString(_ctx.$t("Delivery options")), 1),
                    createVNode(QSelect, {
                      modelValue: $data.delivery_options,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.delivery_options = $event),
                      options: $data.delivery_options_data,
                      "transition-show": "fade",
                      "transition-hide": "fade",
                      "emit-value": "",
                      outlined: "",
                      "lazy-rules": "",
                      "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
                      "label-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                      borderless: "",
                      class: "input-borderless"
                    }, null, 8, ["modelValue", "options", "bg-color", "label-color"]),
                    createVNode(QInput, {
                      modelValue: $data.delivery_instructions,
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.delivery_instructions = $event),
                      autogrow: "",
                      label: _ctx.$t("Add delivery instructions"),
                      outlined: "",
                      "lazy-rules": "",
                      "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
                      "label-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                      borderless: "",
                      class: "input-borderless"
                    }, null, 8, ["modelValue", "label", "bg-color", "label-color"]),
                    createBaseVNode("div", _hoisted_9, toDisplayString(_ctx.$t("Address label")), 1),
                    createVNode(QBtnToggle, {
                      modelValue: $data.address_label,
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.address_label = $event),
                      "toggle-color": "secondary",
                      color: _ctx.$q.dark.mode ? "grey600" : "mygrey",
                      "text-color": _ctx.$q.dark.mode ? "grey300" : "dark",
                      "no-caps": "",
                      "no-wrap": "",
                      unelevated: "",
                      options: $data.address_label_data,
                      class: "rounded-group2 text-weight-bold line-1"
                    }, null, 8, ["modelValue", "color", "text-color", "options"]),
                    createVNode(QSpace, { class: "q-pa-xl" }),
                    createVNode(QFooter, { class: "q-pl-md q-pr-md q-pt-sm q-pb-sm bg-white" }, {
                      default: withCtx(() => [
                        createVNode(QBtn, {
                          type: "submit",
                          loading: $data.loading,
                          label: _ctx.$t("Save"),
                          unelevated: "",
                          "no-caps": "",
                          color: "primary text-white",
                          class: "full-width text-weight-bold",
                          size: "lg"
                        }, null, 8, ["loading", "label"])
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }, 8, ["onSubmit"])
            ])
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["modelValue", "onBeforeShow"]);
}
var AddressInformation = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "AddressInformation.vue"]]);
export { AddressInformation as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkcmVzc0luZm9ybWF0aW9uLjJiYWIyOTE4LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9BZGRyZXNzSW5mb3JtYXRpb24udnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHEtZGlhbG9nXG4gICAgdi1tb2RlbD1cInNob3dfbW9kYWxcIlxuICAgIHBlcnNpc3RlbnRcbiAgICBAYmVmb3JlLXNob3c9XCJiZWZvcmVTaG93XCJcbiAgICA6bWF4aW1pemVkPVwidHJ1ZVwiXG4gICAgdHJhbnNpdGlvbi1zaG93PVwiZmFkZVwiXG4gICAgdHJhbnNpdGlvbi1oaWRlPVwiZmFkZVwiXG4gID5cbiAgICA8cS1jYXJkIGNsYXNzPVwicm93IGl0ZW1zLXN0cmV0Y2hcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgPHEtdG9vbGJhciB2LWlmPVwiIWFkanVzdF9waW5cIj5cbiAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgIGljb249XCJjbG9zZVwiXG4gICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICByb3VuZFxuICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICAgIDpjb2xvcj1cIiRxLmRhcmsubW9kZSA/ICd3aGl0ZScgOiAnZGFyaydcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHEtdG9vbGJhci10aXRsZVxuICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LXdlaWdodC1ib2xkXCJcbiAgICAgICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICAgJ3RleHQtd2hpdGUnOiAkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgICAgICd0ZXh0LWRhcmsnOiAhJHEuZGFyay5tb2RlLFxuICAgICAgICAgICAgfVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3sgJHQoXCJEZWxpdmVyeSBkZXRhaWxzXCIpIH19XG4gICAgICAgICAgPC9xLXRvb2xiYXItdGl0bGU+XG4gICAgICAgIDwvcS10b29sYmFyPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJxLXBsLW1kIHEtcHItbWRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGl0ZW1zLWNlbnRlciBpdGVtcy1zdHJldGNoXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTlcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGRcIj57eyBmb3JtYXR0ZWRfYWRkcmVzcyB9fTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3Vyc29yLXBvaW50ZXIgZm9udDEyIHRleHQtZ3JleVwiPlxuICAgICAgICAgICAgICAgIHt7IGFkZHJlc3MxIH19XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHEtc3BhY2UgY2xhc3M9XCJxLXBhLXNtXCI+PC9xLXNwYWNlPlxuICAgICAgICAgIDxxLWZvcm0gQHN1Ym1pdD1cIm9uU3VibWl0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicS1ndXR0ZXItc21cIj5cbiAgICAgICAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiYWRkcmVzczFcIlxuICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdTdHJlZXQgbmFtZScpXCJcbiAgICAgICAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgICAgICAgIGxhenktcnVsZXNcbiAgICAgICAgICAgICAgICA6YmctY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTYwMCcgOiAnaW5wdXQnXCJcbiAgICAgICAgICAgICAgICA6bGFiZWwtY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTMwMCcgOiAnZ3JleSdcIlxuICAgICAgICAgICAgICAgIGJvcmRlcmxlc3NcbiAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LWJvcmRlcmxlc3NcIlxuICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm1hdHRlZF9hZGRyZXNzXCJcbiAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnU3RyZWV0IG51bWJlcicpXCJcbiAgICAgICAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgICAgICAgIGxhenktcnVsZXNcbiAgICAgICAgICAgICAgICA6YmctY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTYwMCcgOiAnaW5wdXQnXCJcbiAgICAgICAgICAgICAgICA6bGFiZWwtY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTMwMCcgOiAnZ3JleSdcIlxuICAgICAgICAgICAgICAgIGJvcmRlcmxlc3NcbiAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LWJvcmRlcmxlc3NcIlxuICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImxvY2F0aW9uX25hbWVcIlxuICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdBcGFybWVudCwgc3VpdGUgb3IgZmxvb3InKVwiXG4gICAgICAgICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICAgICAgICBsYXp5LXJ1bGVzXG4gICAgICAgICAgICAgICAgOmJnLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXk2MDAnIDogJ2lucHV0J1wiXG4gICAgICAgICAgICAgICAgOmxhYmVsLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXkzMDAnIDogJ2dyZXknXCJcbiAgICAgICAgICAgICAgICBib3JkZXJsZXNzXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1ib3JkZXJsZXNzXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDZcIj57eyAkdChcIkRlbGl2ZXJ5IG9wdGlvbnNcIikgfX08L2Rpdj5cbiAgICAgICAgICAgICAgPHEtc2VsZWN0XG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImRlbGl2ZXJ5X29wdGlvbnNcIlxuICAgICAgICAgICAgICAgIDpvcHRpb25zPVwiZGVsaXZlcnlfb3B0aW9uc19kYXRhXCJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLXNob3c9XCJmYWRlXCJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLWhpZGU9XCJmYWRlXCJcbiAgICAgICAgICAgICAgICBlbWl0LXZhbHVlXG4gICAgICAgICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICAgICAgICBsYXp5LXJ1bGVzXG4gICAgICAgICAgICAgICAgOmJnLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXk2MDAnIDogJ2lucHV0J1wiXG4gICAgICAgICAgICAgICAgOmxhYmVsLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXkzMDAnIDogJ2dyZXknXCJcbiAgICAgICAgICAgICAgICBib3JkZXJsZXNzXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1ib3JkZXJsZXNzXCJcbiAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICA8cS1pbnB1dFxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJkZWxpdmVyeV9pbnN0cnVjdGlvbnNcIlxuICAgICAgICAgICAgICAgIGF1dG9ncm93XG4gICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ0FkZCBkZWxpdmVyeSBpbnN0cnVjdGlvbnMnKVwiXG4gICAgICAgICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICAgICAgICBsYXp5LXJ1bGVzXG4gICAgICAgICAgICAgICAgOmJnLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXk2MDAnIDogJ2lucHV0J1wiXG4gICAgICAgICAgICAgICAgOmxhYmVsLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXkzMDAnIDogJ2dyZXknXCJcbiAgICAgICAgICAgICAgICBib3JkZXJsZXNzXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1ib3JkZXJsZXNzXCJcbiAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNlwiPnt7ICR0KFwiQWRkcmVzcyBsYWJlbFwiKSB9fTwvZGl2PlxuICAgICAgICAgICAgICA8cS1idG4tdG9nZ2xlXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImFkZHJlc3NfbGFiZWxcIlxuICAgICAgICAgICAgICAgIHRvZ2dsZS1jb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXk2MDAnIDogJ215Z3JleSdcIlxuICAgICAgICAgICAgICAgIDp0ZXh0LWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXkzMDAnIDogJ2RhcmsnXCJcbiAgICAgICAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgICAgICAgbm8td3JhcFxuICAgICAgICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICAgICAgICA6b3B0aW9ucz1cImFkZHJlc3NfbGFiZWxfZGF0YVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJyb3VuZGVkLWdyb3VwMiB0ZXh0LXdlaWdodC1ib2xkIGxpbmUtMVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxxLXNwYWNlIGNsYXNzPVwicS1wYS14bFwiPjwvcS1zcGFjZT5cblxuICAgICAgICAgICAgICA8cS1mb290ZXIgY2xhc3M9XCJxLXBsLW1kIHEtcHItbWQgcS1wdC1zbSBxLXBiLXNtIGJnLXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgIDpsb2FkaW5nPVwibG9hZGluZ1wiXG4gICAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnU2F2ZScpXCJcbiAgICAgICAgICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeSB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZnVsbC13aWR0aCB0ZXh0LXdlaWdodC1ib2xkXCJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9xLWZvb3Rlcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvcS1mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvcS1jYXJkPlxuICA8L3EtZGlhbG9nPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBBUElpbnRlcmZhY2UgZnJvbSBcInNyYy9hcGkvQVBJaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyB1c2VEYXRhU3RvcmUgfSBmcm9tIFwic3RvcmVzL0RhdGFTdG9yZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiQWRkcmVzc0luZm9ybWF0aW9uXCIsXG4gIHByb3BzOiBbXCJiYWNrX3VybFwiXSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2hvd19tb2RhbDogZmFsc2UsXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIGxvY2F0aW9uX2RhdGE6IFtdLFxuICAgICAgbG9jYXRpb25fbmFtZTogXCJcIixcbiAgICAgIGRlbGl2ZXJ5X29wdGlvbnM6IHRoaXMuJHQoXCJMZWF2ZSBpdCBhdCBteSBkb29yXCIpLFxuICAgICAgZGVsaXZlcnlfaW5zdHJ1Y3Rpb25zOiBcIlwiLFxuICAgICAgYWRkcmVzc19sYWJlbDogXCJIb21lXCIsXG4gICAgICBhdHRyaWJ1dGVzOiBbXSxcbiAgICAgIGRlbGl2ZXJ5X29wdGlvbnNfZGF0YTogW10sXG4gICAgICBhZGRyZXNzX2xhYmVsX2RhdGE6IFtdLFxuICAgICAgYWRkcmVzczE6IFwiXCIsXG4gICAgICBmb3JtYXR0ZWRfYWRkcmVzczogXCJcIixcbiAgICAgIGxhdGl0dWRlOiBcIlwiLFxuICAgICAgbG9uZ2l0dWRlOiBcIlwiLFxuICAgICAgcGxhY2VfaWQ6IFwiXCIsXG4gICAgfTtcbiAgfSxcbiAgc2V0dXAoKSB7XG4gICAgY29uc3QgRGF0YVN0b3JlID0gdXNlRGF0YVN0b3JlKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIERhdGFTdG9yZSxcbiAgICB9O1xuICB9LFxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuYWRkcmVzc0F0dHRpYnVlcygpO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgc2hvdyhkYXRhKSB7XG4gICAgICB0aGlzLnNob3dfbW9kYWwgPSB0cnVlO1xuICAgICAgdGhpcy5hZGRyZXNzMSA9IGRhdGEuYWRkcmVzcy5mb3JtYXR0ZWRfYWRkcmVzcztcbiAgICAgIHRoaXMuZm9ybWF0dGVkX2FkZHJlc3MgPSBkYXRhLmFkZHJlc3MuYWRkcmVzczE7XG4gICAgICB0aGlzLmxhdGl0dWRlID0gZGF0YS5sYXRpdHVkZTtcbiAgICAgIHRoaXMubG9uZ2l0dWRlID0gZGF0YS5sb25naXR1ZGU7XG4gICAgICB0aGlzLnBsYWNlX2lkID0gZGF0YS5wbGFjZV9pZDtcbiAgICB9LFxuICAgIGFkZHJlc3NBdHR0aWJ1ZXMoKSB7XG4gICAgICBBUElpbnRlcmZhY2UuYWRkcmVzc0F0dHRpYnVlcygpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzID0gZGF0YS5kZXRhaWxzO1xuXG4gICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGRhdGEuZGV0YWlscy5kZWxpdmVyeV9vcHRpb24pLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGRhdGEuZGV0YWlscy5kZWxpdmVyeV9vcHRpb24pLmZvckVhY2goXG4gICAgICAgICAgICAgIChba2V5LCBpdGVtc10pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGl2ZXJ5X29wdGlvbnNfZGF0YS5wdXNoKHsgbGFiZWw6IGl0ZW1zLCB2YWx1ZToga2V5IH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhkYXRhLmRldGFpbHMuYWRkcmVzc19sYWJlbCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoZGF0YS5kZXRhaWxzLmFkZHJlc3NfbGFiZWwpLmZvckVhY2goXG4gICAgICAgICAgICAgIChba2V5LCBpdGVtc10pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZHJlc3NfbGFiZWxfZGF0YS5wdXNoKHsgbGFiZWw6IGl0ZW1zLCB2YWx1ZToga2V5IH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJkYXJrXCIsIGVycm9yLCBcImVycm9yXCIsIHRoaXMuJHEpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge30pO1xuICAgIH0sXG4gICAgb25TdWJtaXQoKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgbGV0IHBhcmFtcyA9IFwiYWRkcmVzczE9XCIgKyB0aGlzLmFkZHJlc3MxO1xuICAgICAgcGFyYW1zICs9IFwiJmZvcm1hdHRlZF9hZGRyZXNzPVwiICsgdGhpcy5mb3JtYXR0ZWRfYWRkcmVzcztcbiAgICAgIHBhcmFtcyArPSBcIiZsb2NhdGlvbl9uYW1lPVwiICsgdGhpcy5sb2NhdGlvbl9uYW1lO1xuICAgICAgcGFyYW1zICs9IFwiJmRlbGl2ZXJ5X2luc3RydWN0aW9ucz1cIiArIHRoaXMuZGVsaXZlcnlfaW5zdHJ1Y3Rpb25zO1xuICAgICAgcGFyYW1zICs9IFwiJmRlbGl2ZXJ5X29wdGlvbnM9XCIgKyB0aGlzLmRlbGl2ZXJ5X29wdGlvbnM7XG4gICAgICBwYXJhbXMgKz0gXCImYWRkcmVzc19sYWJlbD1cIiArIHRoaXMuYWRkcmVzc19sYWJlbDtcbiAgICAgIHBhcmFtcyArPSBcIiZsYXRpdHVkZT1cIiArIHRoaXMubGF0aXR1ZGU7XG4gICAgICBwYXJhbXMgKz0gXCImbG9uZ2l0dWRlPVwiICsgdGhpcy5sb25naXR1ZGU7XG4gICAgICBwYXJhbXMgKz0gXCImcGxhY2VfaWQ9XCIgKyB0aGlzLnBsYWNlX2lkO1xuXG4gICAgICBBUElpbnRlcmZhY2UuZmV0Y2hEYXRhQnlUb2tlblBvc3QoXCJTYXZlQWRkcmVzc1wiLCBwYXJhbXMpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5iYWNrUGFnZSgpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgQVBJaW50ZXJmYWNlLm5vdGlmeShcImRhcmtcIiwgZXJyb3IsIFwiZXJyb3JcIiwgdGhpcy4kcSk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgYmFja1BhZ2UoKSB7XG4gICAgICBpZiAoIUFQSWludGVyZmFjZS5lbXB0eSh0aGlzLmJhY2tfdXJsKSkge1xuICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh0aGlzLmJhY2tfdXJsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKFwiL2hvbWVcIik7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfY3JlYXRlQmxvY2siLCJfY3JlYXRlVk5vZGUiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0SUEsTUFBSyxZQUFVO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixPQUFPLENBQUMsVUFBVTtBQUFBLEVBQ2xCLE9BQU87QUFDTCxXQUFPO0FBQUEsTUFDTCxZQUFZO0FBQUEsTUFDWixTQUFTO0FBQUEsTUFDVCxlQUFlLENBQUU7QUFBQSxNQUNqQixlQUFlO0FBQUEsTUFDZixrQkFBa0IsS0FBSyxHQUFHLHFCQUFxQjtBQUFBLE1BQy9DLHVCQUF1QjtBQUFBLE1BQ3ZCLGVBQWU7QUFBQSxNQUNmLFlBQVksQ0FBRTtBQUFBLE1BQ2QsdUJBQXVCLENBQUU7QUFBQSxNQUN6QixvQkFBb0IsQ0FBRTtBQUFBLE1BQ3RCLFVBQVU7QUFBQSxNQUNWLG1CQUFtQjtBQUFBLE1BQ25CLFVBQVU7QUFBQSxNQUNWLFdBQVc7QUFBQSxNQUNYLFVBQVU7QUFBQTtFQUViO0FBQUEsRUFDRCxRQUFRO0FBQ04sVUFBTSxZQUFZO0FBQ2xCLFdBQU87QUFBQSxNQUNMO0FBQUE7RUFFSDtBQUFBLEVBQ0QsVUFBVTtBQUNSLFNBQUssaUJBQWdCO0FBQUEsRUFDdEI7QUFBQSxFQUNELFNBQVM7QUFBQSxJQUNQLEtBQUssTUFBTTtBQUNULFdBQUssYUFBYTtBQUNsQixXQUFLLFdBQVcsS0FBSyxRQUFRO0FBQzdCLFdBQUssb0JBQW9CLEtBQUssUUFBUTtBQUN0QyxXQUFLLFdBQVcsS0FBSztBQUNyQixXQUFLLFlBQVksS0FBSztBQUN0QixXQUFLLFdBQVcsS0FBSztBQUFBLElBQ3RCO0FBQUEsSUFDRCxtQkFBbUI7QUFDakIsbUJBQWEsaUJBQWlCLEVBQzNCLEtBQUssQ0FBQyxTQUFTO0FBQ2QsYUFBSyxhQUFhLEtBQUs7QUFFdkIsWUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLGVBQWUsRUFBRSxTQUFTLEdBQUc7QUFDeEQsaUJBQU8sUUFBUSxLQUFLLFFBQVEsZUFBZSxFQUFFO0FBQUEsWUFDM0MsQ0FBQyxDQUFDLEtBQUssS0FBSyxNQUFNO0FBQ2hCLG1CQUFLLHNCQUFzQixLQUFLLEVBQUUsT0FBTyxPQUFPLE9BQU8sSUFBSSxDQUFDO0FBQUEsWUFDOUQ7QUFBQTtRQUVKO0FBRUEsWUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLGFBQWEsRUFBRSxTQUFTLEdBQUc7QUFDdEQsaUJBQU8sUUFBUSxLQUFLLFFBQVEsYUFBYSxFQUFFO0FBQUEsWUFDekMsQ0FBQyxDQUFDLEtBQUssS0FBSyxNQUFNO0FBQ2hCLG1CQUFLLG1CQUFtQixLQUFLLEVBQUUsT0FBTyxPQUFPLE9BQU8sSUFBSSxDQUFDO0FBQUEsWUFDM0Q7QUFBQTtRQUVKO0FBQUEsT0FDRCxFQUNBLE1BQU0sQ0FBQyxVQUFVO0FBQ2hCLHFCQUFhLE9BQU8sUUFBUSxPQUFPLFNBQVMsS0FBSyxFQUFFO0FBQUEsT0FDcEQsRUFDQSxLQUFLLENBQUMsU0FBUztBQUFBLE1BQUEsQ0FBRTtBQUFBLElBQ3JCO0FBQUEsSUFDRCxXQUFXO0FBQ1QsV0FBSyxVQUFVO0FBQ2YsVUFBSSxTQUFTLGNBQWMsS0FBSztBQUNoQyxnQkFBVSx3QkFBd0IsS0FBSztBQUN2QyxnQkFBVSxvQkFBb0IsS0FBSztBQUNuQyxnQkFBVSw0QkFBNEIsS0FBSztBQUMzQyxnQkFBVSx1QkFBdUIsS0FBSztBQUN0QyxnQkFBVSxvQkFBb0IsS0FBSztBQUNuQyxnQkFBVSxlQUFlLEtBQUs7QUFDOUIsZ0JBQVUsZ0JBQWdCLEtBQUs7QUFDL0IsZ0JBQVUsZUFBZSxLQUFLO0FBRTlCLG1CQUFhLHFCQUFxQixlQUFlLE1BQU0sRUFDcEQsS0FBSyxDQUFDLFNBQVM7QUFDZCxhQUFLLFNBQVE7QUFBQSxPQUNkLEVBQ0EsTUFBTSxDQUFDLFVBQVU7QUFDaEIscUJBQWEsT0FBTyxRQUFRLE9BQU8sU0FBUyxLQUFLLEVBQUU7QUFBQSxPQUNwRCxFQUNBLEtBQUssQ0FBQyxTQUFTO0FBQ2QsYUFBSyxVQUFVO0FBQUEsTUFDakIsQ0FBQztBQUFBLElBQ0o7QUFBQSxJQUNELFdBQVc7QUFDVCxVQUFJLENBQUMsYUFBYSxNQUFNLEtBQUssUUFBUSxHQUFHO0FBQ3RDLGFBQUssUUFBUSxLQUFLLEtBQUssUUFBUTtBQUFBLGFBQzFCO0FBQ0wsYUFBSyxRQUFRLEtBQUssT0FBTztBQUFBLE1BQzNCO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFDSDtBQW5PVyxNQUFBLGFBQUEsRUFBQSxPQUFNLFNBQVE7QUFxQlosTUFBQSxhQUFBLEVBQUEsT0FBTSxrQkFBaUI7QUFDckIsTUFBQSxhQUFBLEVBQUEsT0FBTSxpQ0FBZ0M7QUFDcEMsTUFBQSxhQUFBLEVBQUEsT0FBTSxRQUFPO0FBQ1gsTUFBQSxhQUFBLEVBQUEsT0FBTSxtQkFBa0I7QUFDeEIsTUFBQSxhQUFBLEVBQUEsT0FBTSxrQ0FBaUM7QUFPekMsTUFBQSxhQUFBLEVBQUEsT0FBTSxjQUFhO0FBaUNqQixNQUFBLGFBQUEsRUFBQSxPQUFNLFVBQVM7QUEyQmYsTUFBQSxhQUFBLEVBQUEsT0FBTSxVQUFTOztzQkFyR2hDQSxZQW9JVyxTQUFBO0FBQUEsZ0JBbklBLE1BQVU7QUFBQSxpRUFBVixNQUFVLGFBQUE7QUFBQSxJQUNuQixZQUFBO0FBQUEsSUFDQyxjQUFhLEtBQVU7QUFBQSxJQUN2QixXQUFXO0FBQUEsSUFDWixtQkFBZ0I7QUFBQSxJQUNoQixtQkFBZ0I7QUFBQTtxQkFFaEIsTUEySFM7QUFBQSxNQTNIVEMsWUEySFMsT0FBQSxFQUFBLE9BQUEsb0JBM0h3QixHQUFBO0FBQUEseUJBQy9CLE1BeUhNO0FBQUEsVUF6SE5DLGdCQXlITSxPQXpITixZQXlITTtBQUFBLGFBeEhjLEtBQVUsMkJBQTVCRixZQWtCWSxVQUFBLEVBQUEsS0FBQSxFQUFBLEdBQUE7QUFBQSwrQkFqQlYsTUFPRTtBQUFBLCtCQVBGQyxZQU9FLE1BQUE7QUFBQSxrQkFOQSxNQUFLO0FBQUEsa0JBQ0wsTUFBQTtBQUFBLGtCQUNBLE9BQUE7QUFBQSxrQkFDQSxPQUFBO0FBQUEsa0JBRUMsT0FBTyxLQUFBLEdBQUcsS0FBSyxPQUFJLFVBQUE7QUFBQTs7O2dCQUV0QkEsWUFRa0IsZUFBQTtBQUFBLGtCQVBoQix1QkFBTSxvQkFBa0I7QUFBQSxrQ0FDYyxLQUFFLEdBQUMsS0FBSztBQUFBLGtDQUFrQyxLQUFFLEdBQUMsS0FBSztBQUFBOzttQ0FLeEYsTUFBNEI7QUFBQSxvREFBekIsS0FBRSxHQUFBLGtCQUFBLENBQUEsR0FBQSxDQUFBO0FBQUE7Ozs7OztZQUlUQyxnQkFtR00sT0FuR04sWUFtR007QUFBQSxjQWxHSkEsZ0JBT00sT0FQTixZQU9NO0FBQUEsZ0JBTkpBLGdCQUtNLE9BTE4sWUFLTTtBQUFBLGtCQUpKQSxnQkFBMkQsT0FBM0QsWUFBMkRDLGdCQUExQixNQUFpQixpQkFBQSxHQUFBLENBQUE7QUFBQSxrQkFDbERELGdCQUVNLE9BRk4sWUFFTUMsZ0JBREQsTUFBUSxRQUFBLEdBQUEsQ0FBQTtBQUFBOztjQUlqQkYsWUFBbUMsUUFBQSxFQUFBLE9BQUEsVUFBckIsQ0FBQTtBQUFBLGNBQ2RBLFlBd0ZTLE9BQUEsRUFBQSxVQUFBLFNBeEZNLFNBQVUsR0FBQTtBQUFBLGlDQUN2QixNQXNGTTtBQUFBLGtCQXRGTkMsZ0JBc0ZNLE9BdEZOLFlBc0ZNO0FBQUEsb0JBckZKRCxZQVNFLFFBQUE7QUFBQSxrQ0FSUyxNQUFRO0FBQUEsbUZBQVIsTUFBUSxXQUFBO0FBQUEsc0JBQ2hCLE9BQU8sS0FBRSxHQUFBLGFBQUE7QUFBQSxzQkFDVixVQUFBO0FBQUEsc0JBQ0EsY0FBQTtBQUFBLHNCQUNDLFlBQVUsS0FBQSxHQUFHLEtBQUssT0FBSSxZQUFBO0FBQUEsc0JBQ3RCLGVBQWEsS0FBQSxHQUFHLEtBQUssT0FBSSxZQUFBO0FBQUEsc0JBQzFCLFlBQUE7QUFBQSxzQkFDQSxPQUFNO0FBQUE7b0JBR1JBLFlBU0UsUUFBQTtBQUFBLGtDQVJTLE1BQWlCO0FBQUEsbUZBQWpCLE1BQWlCLG9CQUFBO0FBQUEsc0JBQ3pCLE9BQU8sS0FBRSxHQUFBLGVBQUE7QUFBQSxzQkFDVixVQUFBO0FBQUEsc0JBQ0EsY0FBQTtBQUFBLHNCQUNDLFlBQVUsS0FBQSxHQUFHLEtBQUssT0FBSSxZQUFBO0FBQUEsc0JBQ3RCLGVBQWEsS0FBQSxHQUFHLEtBQUssT0FBSSxZQUFBO0FBQUEsc0JBQzFCLFlBQUE7QUFBQSxzQkFDQSxPQUFNO0FBQUE7b0JBR1JBLFlBU0UsUUFBQTtBQUFBLGtDQVJTLE1BQWE7QUFBQSxtRkFBYixNQUFhLGdCQUFBO0FBQUEsc0JBQ3JCLE9BQU8sS0FBRSxHQUFBLDBCQUFBO0FBQUEsc0JBQ1YsVUFBQTtBQUFBLHNCQUNBLGNBQUE7QUFBQSxzQkFDQyxZQUFVLEtBQUEsR0FBRyxLQUFLLE9BQUksWUFBQTtBQUFBLHNCQUN0QixlQUFhLEtBQUEsR0FBRyxLQUFLLE9BQUksWUFBQTtBQUFBLHNCQUMxQixZQUFBO0FBQUEsc0JBQ0EsT0FBTTtBQUFBO29CQUVSQyxnQkFBdUQsT0FBdkQsWUFBdURDLGdCQUEvQixLQUFFLEdBQUEsa0JBQUEsQ0FBQSxHQUFBLENBQUE7QUFBQSxvQkFDMUJGLFlBWUUsU0FBQTtBQUFBLGtDQVhTLE1BQWdCO0FBQUEsbUZBQWhCLE1BQWdCLG1CQUFBO0FBQUEsc0JBQ3hCLFNBQVMsTUFBcUI7QUFBQSxzQkFDL0IsbUJBQWdCO0FBQUEsc0JBQ2hCLG1CQUFnQjtBQUFBLHNCQUNoQixjQUFBO0FBQUEsc0JBQ0EsVUFBQTtBQUFBLHNCQUNBLGNBQUE7QUFBQSxzQkFDQyxZQUFVLEtBQUEsR0FBRyxLQUFLLE9BQUksWUFBQTtBQUFBLHNCQUN0QixlQUFhLEtBQUEsR0FBRyxLQUFLLE9BQUksWUFBQTtBQUFBLHNCQUMxQixZQUFBO0FBQUEsc0JBQ0EsT0FBTTtBQUFBO29CQUdSQSxZQVVFLFFBQUE7QUFBQSxrQ0FUUyxNQUFxQjtBQUFBLG1GQUFyQixNQUFxQix3QkFBQTtBQUFBLHNCQUM5QixVQUFBO0FBQUEsc0JBQ0MsT0FBTyxLQUFFLEdBQUEsMkJBQUE7QUFBQSxzQkFDVixVQUFBO0FBQUEsc0JBQ0EsY0FBQTtBQUFBLHNCQUNDLFlBQVUsS0FBQSxHQUFHLEtBQUssT0FBSSxZQUFBO0FBQUEsc0JBQ3RCLGVBQWEsS0FBQSxHQUFHLEtBQUssT0FBSSxZQUFBO0FBQUEsc0JBQzFCLFlBQUE7QUFBQSxzQkFDQSxPQUFNO0FBQUE7b0JBR1JDLGdCQUFvRCxPQUFwRCxZQUFvREMsZ0JBQTVCLEtBQUUsR0FBQSxlQUFBLENBQUEsR0FBQSxDQUFBO0FBQUEsb0JBQzFCRixZQVVFLFlBQUE7QUFBQSxrQ0FUUyxNQUFhO0FBQUEsbUZBQWIsTUFBYSxnQkFBQTtBQUFBLHNCQUN0QixnQkFBYTtBQUFBLHNCQUNaLE9BQU8sS0FBQSxHQUFHLEtBQUssT0FBSSxZQUFBO0FBQUEsc0JBQ25CLGNBQVksS0FBQSxHQUFHLEtBQUssT0FBSSxZQUFBO0FBQUEsc0JBQ3pCLFdBQUE7QUFBQSxzQkFDQSxXQUFBO0FBQUEsc0JBQ0EsWUFBQTtBQUFBLHNCQUNDLFNBQVMsTUFBa0I7QUFBQSxzQkFDNUIsT0FBTTtBQUFBO29CQUVSQSxZQUFtQyxRQUFBLEVBQUEsT0FBQSxVQUFyQixDQUFBO0FBQUEsb0JBRWRBLFlBV1csU0FBQSxFQUFBLE9BQUEsMkNBWCtDLEdBQUE7QUFBQSx1Q0FDeEQsTUFTRTtBQUFBLHdCQVRGQSxZQVNFLE1BQUE7QUFBQSwwQkFSQSxNQUFLO0FBQUEsMEJBQ0osU0FBUyxNQUFPO0FBQUEsMEJBQ2hCLE9BQU8sS0FBRSxHQUFBLE1BQUE7QUFBQSwwQkFDVixZQUFBO0FBQUEsMEJBQ0EsV0FBQTtBQUFBLDBCQUNBLE9BQU07QUFBQSwwQkFDTixPQUFNO0FBQUEsMEJBQ04sTUFBSztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
