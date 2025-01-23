import { _ as _export_sfc, m as APIinterface, aw as auth, p as openBlock, V as createElementBlock, f as createVNode, t as withCtx, F as Fragment, Y as QBtn, a8 as QCard, U as createBaseVNode, aY as QInput, ac as QItem, bg as normalizeProps, bh as guardReactiveProps, ad as QItemSection, a6 as createTextVNode, Z as toDisplayString, at as QIcon, bE as QCardActions } from "./index.61ed5618.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QInnerLoading } from "./QInnerLoading.abe2afe6.js";
import { Q as QImg } from "./QImg.6c27044c.js";
import { Q as QItemLabel } from "./QItemLabel.a9365c5b.js";
import { Q as QSelect } from "./QSelect.311187d6.js";
import { Q as QSpace } from "./QSpace.f164c087.js";
import { Q as QForm } from "./QForm.7ded9d38.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import { u as useClientStore } from "./ClientStore.327b1c8d.js";
import "./QResizeObserver.d08dce3c.js";
import "./QChip.f183a4f1.js";
import "./QMenu.8e482cd8.js";
import "./selection.50b4cb0c.js";
import "./rtl.f3ed811c.js";
import "./format.7f7370d3.js";
const _sfc_main = {
  name: "CompleteRegistration",
  data() {
    return {
      loading: false,
      field_type: "password",
      field_type1: "password",
      first_name: "",
      last_name: "",
      email_address: "",
      password: "",
      cpassword: "",
      mobile_number: "",
      mobile_prefix: "",
      options: [],
      inner_loading: false,
      client_uuid: ""
    };
  },
  setup() {
    const ClientStore = useClientStore();
    return { ClientStore };
  },
  computed: {
    FieldIcon() {
      return this.field_type === "password" ? "eva-eye-outline" : "eva-eye-off-outline";
    },
    FieldIcon1() {
      return this.field_type1 === "password" ? "eva-eye-outline" : "eva-eye-off-outline";
    }
  },
  mounted() {
    this.client_uuid = this.$route.query.uuid;
    this.getCustomerInfo();
  },
  methods: {
    getCustomerInfo() {
      this.inner_loading = true;
      APIinterface.getCustomerInfo(this.client_uuid).then((data) => {
        this.first_name = data.details.first_name;
        this.last_name = data.details.last_name;
        this.email_address = data.details.email_address;
        this.mobile_prefix = "+" + data.details.default_data.phonecode;
        if (Object.keys(data.details.data).length > 0) {
          Object.entries(data.details.data).forEach(([key, items]) => {
            this.options.push({
              label: "+" + items.phonecode + " " + items.country_name,
              value: "+" + items.phonecode,
              flag: items.flag
            });
          });
        }
      }).catch((error) => {
        APIinterface.notify("red-5", error, "error_outline", this.$q);
      }).then((data) => {
        this.inner_loading = false;
      });
    },
    onSubmit() {
      const $data = {
        client_uuid: this.client_uuid,
        first_name: this.first_name,
        last_name: this.last_name,
        password: this.password,
        cpassword: this.cpassword,
        mobile_prefix: this.mobile_prefix,
        mobile_number: this.mobile_number,
        local_id: APIinterface.getStorage("place_id")
      };
      this.loading = true;
      APIinterface.completeSocialSignup($data).then((data) => {
        auth.setUser(data.details.user_data);
        auth.setToken(data.details.user_token);
        this.ClientStore.user_settings = data.details.user_settings;
        const $placeId = APIinterface.getStorage("place_id");
        console.debug("=>" + $placeId);
        if (typeof $placeId !== "undefined" && $placeId !== null) {
          this.$router.push("/home");
        } else {
          this.$router.push("/location");
        }
      }).catch((error) => {
        APIinterface.notify("red-5", error, null, this.$q);
      }).then((data) => {
        this.loading = false;
      });
    }
  }
};
const _hoisted_1 = { class: "text-center" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h5", { class: "text-weight-bold q-mb-lg" }, "Fill your information", -1);
const _hoisted_3 = { class: "w-75 margin-auto" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(QHeader, {
      reveal: "",
      "reveal-offset": "50",
      class: "bg-white"
    }, {
      default: withCtx(() => [
        createVNode(QToolbar, null, {
          default: withCtx(() => [
            createVNode(QBtn, {
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$router.back()),
              flat: "",
              round: "",
              dense: "",
              icon: "arrow_back",
              class: "q-mr-sm",
              color: "dark"
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    createVNode(QPage, { padding: "" }, {
      default: withCtx(() => [
        createVNode(QCard, { flat: "" }, {
          default: withCtx(() => [
            createVNode(QInnerLoading, {
              showing: $data.inner_loading,
              color: "primary",
              size: "md"
            }, null, 8, ["showing"]),
            createBaseVNode("div", _hoisted_1, [
              createVNode(QForm, {
                onSubmit: $options.onSubmit,
                class: "q-gutter-md"
              }, {
                default: withCtx(() => [
                  _hoisted_2,
                  createBaseVNode("div", _hoisted_3, [
                    createVNode(QInput, {
                      modelValue: $data.first_name,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.first_name = $event),
                      label: _ctx.$t("First name"),
                      "lazy-rules": "",
                      rules: [
                        (val) => val && val.length > 0 || "This field is required"
                      ]
                    }, null, 8, ["modelValue", "label", "rules"]),
                    createVNode(QInput, {
                      modelValue: $data.last_name,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.last_name = $event),
                      label: _ctx.$t("Last name"),
                      "lazy-rules": "",
                      rules: [
                        (val) => val && val.length > 0 || "This field is required"
                      ]
                    }, null, 8, ["modelValue", "label", "rules"]),
                    createVNode(QInput, {
                      modelValue: $data.email_address,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.email_address = $event),
                      label: "Email address",
                      disable: "",
                      "lazy-rules": "",
                      rules: [
                        (val) => val && val.length > 0 || "This field is required"
                      ]
                    }, null, 8, ["modelValue", "rules"]),
                    createVNode(QInput, {
                      modelValue: $data.mobile_number,
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.mobile_number = $event),
                      dense: "",
                      mask: "##############",
                      "lazy-rules": "",
                      rules: [
                        (val) => val && val.length > 0 || "This field is required"
                      ]
                    }, {
                      prepend: withCtx(() => [
                        createVNode(QSelect, {
                          dense: "",
                          modelValue: $data.mobile_prefix,
                          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.mobile_prefix = $event),
                          options: $data.options,
                          onFilter: _ctx.filterFn,
                          behavior: "dialog",
                          "input-debounce": "700",
                          style: { "border": "none" },
                          "emit-value": "",
                          borderless: ""
                        }, {
                          option: withCtx(({ itemProps, opt }) => [
                            createVNode(QItem, normalizeProps(guardReactiveProps(itemProps)), {
                              default: withCtx(() => [
                                createVNode(QItemSection, { avatar: "" }, {
                                  default: withCtx(() => [
                                    createVNode(QImg, {
                                      src: opt.flag,
                                      style: { "height": "15px", "max-width": "20px" }
                                    }, null, 8, ["src"])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(QItemSection, null, {
                                  default: withCtx(() => [
                                    createVNode(QItemLabel, {
                                      innerHTML: opt.label
                                    }, null, 8, ["innerHTML"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1040)
                          ]),
                          "no-option": withCtx(() => [
                            createVNode(QItem, null, {
                              default: withCtx(() => [
                                createVNode(QItemSection, { class: "text-grey" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.$t("No results")), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "options", "onFilter"])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "rules"]),
                    createVNode(QInput, {
                      modelValue: $data.password,
                      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.password = $event),
                      type: $data.field_type,
                      label: _ctx.$t("Password"),
                      "lazy-rules": "",
                      rules: [
                        (val) => val && val.length > 0 || "This field is required"
                      ]
                    }, {
                      append: withCtx(() => [
                        createVNode(QIcon, {
                          onClick: _cache[6] || (_cache[6] = ($event) => $data.field_type = $data.field_type == "password" ? "text" : "password"),
                          name: $options.FieldIcon,
                          color: "grey",
                          class: "cursor-pointer"
                        }, null, 8, ["name"])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "type", "label", "rules"]),
                    createVNode(QInput, {
                      type: $data.field_type1,
                      modelValue: $data.cpassword,
                      "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $data.cpassword = $event),
                      label: _ctx.$t("Confirm Password"),
                      "lazy-rules": "",
                      rules: [
                        (val) => val && val.length > 0 || "This field is required"
                      ]
                    }, {
                      append: withCtx(() => [
                        createVNode(QIcon, {
                          onClick: _cache[8] || (_cache[8] = ($event) => $data.field_type1 = $data.field_type1 == "password" ? "text" : "password"),
                          name: $options.FieldIcon1,
                          color: "grey",
                          class: "cursor-pointer"
                        }, null, 8, ["name"])
                      ]),
                      _: 1
                    }, 8, ["type", "modelValue", "label", "rules"]),
                    createVNode(QSpace, { class: "q-pa-md" }),
                    createVNode(QCardActions, {
                      vertical: "",
                      align: "center"
                    }, {
                      default: withCtx(() => [
                        createVNode(QBtn, {
                          loading: $data.loading,
                          type: "submit",
                          label: _ctx.$t("Submit"),
                          unelevated: "",
                          color: "primary",
                          "text-color": "white",
                          class: "full-width text-weight-bold",
                          size: "lg"
                        }, null, 8, ["loading", "label"])
                      ]),
                      _: 1
                    }),
                    createVNode(QSpace, { class: "q-pa-md" })
                  ])
                ]),
                _: 1
              }, 8, ["onSubmit"])
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ], 64);
}
var CompleteRegistration = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "CompleteRegistration.vue"]]);
export { CompleteRegistration as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcGxldGVSZWdpc3RyYXRpb24uZjgzYmIxODkuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9BY2NvdW50L0NvbXBsZXRlUmVnaXN0cmF0aW9uLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLWhlYWRlciByZXZlYWwgcmV2ZWFsLW9mZnNldD1cIjUwXCIgY2xhc3M9XCJiZy13aGl0ZVwiPlxuICAgIDxxLXRvb2xiYXI+XG4gICAgICA8cS1idG5cbiAgICAgICAgQGNsaWNrPVwiJHJvdXRlci5iYWNrKClcIlxuICAgICAgICBmbGF0XG4gICAgICAgIHJvdW5kXG4gICAgICAgIGRlbnNlXG4gICAgICAgIGljb249XCJhcnJvd19iYWNrXCJcbiAgICAgICAgY2xhc3M9XCJxLW1yLXNtXCJcbiAgICAgICAgY29sb3I9XCJkYXJrXCJcbiAgICAgIC8+XG4gICAgPC9xLXRvb2xiYXI+XG4gIDwvcS1oZWFkZXI+XG5cbiAgPHEtcGFnZSBwYWRkaW5nPlxuICAgIDxxLWNhcmQgZmxhdD5cbiAgICAgIDxxLWlubmVyLWxvYWRpbmcgOnNob3dpbmc9XCJpbm5lcl9sb2FkaW5nXCIgY29sb3I9XCJwcmltYXJ5XCIgc2l6ZT1cIm1kXCIgLz5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8cS1mb3JtIEBzdWJtaXQ9XCJvblN1Ym1pdFwiIGNsYXNzPVwicS1ndXR0ZXItbWRcIj5cbiAgICAgICAgICA8aDUgY2xhc3M9XCJ0ZXh0LXdlaWdodC1ib2xkIHEtbWItbGdcIj5GaWxsIHlvdXIgaW5mb3JtYXRpb248L2g1PlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInctNzUgbWFyZ2luLWF1dG9cIj5cbiAgICAgICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJmaXJzdF9uYW1lXCJcbiAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ0ZpcnN0IG5hbWUnKVwiXG4gICAgICAgICAgICAgIGxhenktcnVsZXNcbiAgICAgICAgICAgICAgOnJ1bGVzPVwiW1xuICAgICAgICAgICAgICAgICh2YWwpID0+ICh2YWwgJiYgdmFsLmxlbmd0aCA+IDApIHx8ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJyxcbiAgICAgICAgICAgICAgXVwiXG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8cS1pbnB1dFxuICAgICAgICAgICAgICB2LW1vZGVsPVwibGFzdF9uYW1lXCJcbiAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ0xhc3QgbmFtZScpXCJcbiAgICAgICAgICAgICAgbGF6eS1ydWxlc1xuICAgICAgICAgICAgICA6cnVsZXM9XCJbXG4gICAgICAgICAgICAgICAgKHZhbCkgPT4gKHZhbCAmJiB2YWwubGVuZ3RoID4gMCkgfHwgJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnLFxuICAgICAgICAgICAgICBdXCJcbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJlbWFpbF9hZGRyZXNzXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbCBhZGRyZXNzXCJcbiAgICAgICAgICAgICAgZGlzYWJsZVxuICAgICAgICAgICAgICBsYXp5LXJ1bGVzXG4gICAgICAgICAgICAgIDpydWxlcz1cIltcbiAgICAgICAgICAgICAgICAodmFsKSA9PiAodmFsICYmIHZhbC5sZW5ndGggPiAwKSB8fCAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCcsXG4gICAgICAgICAgICAgIF1cIlxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICAgICAgdi1tb2RlbD1cIm1vYmlsZV9udW1iZXJcIlxuICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICBtYXNrPVwiIyMjIyMjIyMjIyMjIyNcIlxuICAgICAgICAgICAgICBsYXp5LXJ1bGVzXG4gICAgICAgICAgICAgIDpydWxlcz1cIltcbiAgICAgICAgICAgICAgICAodmFsKSA9PiAodmFsICYmIHZhbC5sZW5ndGggPiAwKSB8fCAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCcsXG4gICAgICAgICAgICAgIF1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OnByZXBlbmQ+XG4gICAgICAgICAgICAgICAgPHEtc2VsZWN0XG4gICAgICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cIm1vYmlsZV9wcmVmaXhcIlxuICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJvcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgIEBmaWx0ZXI9XCJmaWx0ZXJGblwiXG4gICAgICAgICAgICAgICAgICBiZWhhdmlvcj1cImRpYWxvZ1wiXG4gICAgICAgICAgICAgICAgICBpbnB1dC1kZWJvdW5jZT1cIjcwMFwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT1cImJvcmRlcjogbm9uZVwiXG4gICAgICAgICAgICAgICAgICBlbWl0LXZhbHVlXG4gICAgICAgICAgICAgICAgICBib3JkZXJsZXNzXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpvcHRpb249XCJ7IGl0ZW1Qcm9wcywgb3B0IH1cIj5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbSB2LWJpbmQ9XCJpdGVtUHJvcHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHEtaW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDpzcmM9XCJvcHQuZmxhZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiAxNXB4OyBtYXgtd2lkdGg6IDIwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgdi1odG1sPVwib3B0LmxhYmVsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90Om5vLW9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gY2xhc3M9XCJ0ZXh0LWdyZXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KFwiTm8gcmVzdWx0c1wiKSB9fVxuICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L3Etc2VsZWN0PlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC9xLWlucHV0PlxuXG4gICAgICAgICAgICA8cS1pbnB1dFxuICAgICAgICAgICAgICB2LW1vZGVsPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICA6dHlwZT1cImZpZWxkX3R5cGVcIlxuICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnUGFzc3dvcmQnKVwiXG4gICAgICAgICAgICAgIGxhenktcnVsZXNcbiAgICAgICAgICAgICAgOnJ1bGVzPVwiW1xuICAgICAgICAgICAgICAgICh2YWwpID0+ICh2YWwgJiYgdmFsLmxlbmd0aCA+IDApIHx8ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJyxcbiAgICAgICAgICAgICAgXVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6YXBwZW5kPlxuICAgICAgICAgICAgICAgIDxxLWljb25cbiAgICAgICAgICAgICAgICAgIEBjbGljaz1cIlxuICAgICAgICAgICAgICAgICAgICBmaWVsZF90eXBlID0gZmllbGRfdHlwZSA9PSAncGFzc3dvcmQnID8gJ3RleHQnIDogJ3Bhc3N3b3JkJ1xuICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgIDpuYW1lPVwiRmllbGRJY29uXCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwiZ3JleVwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC9xLWlucHV0PlxuXG4gICAgICAgICAgICA8cS1pbnB1dFxuICAgICAgICAgICAgICA6dHlwZT1cImZpZWxkX3R5cGUxXCJcbiAgICAgICAgICAgICAgdi1tb2RlbD1cImNwYXNzd29yZFwiXG4gICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdDb25maXJtIFBhc3N3b3JkJylcIlxuICAgICAgICAgICAgICBsYXp5LXJ1bGVzXG4gICAgICAgICAgICAgIDpydWxlcz1cIltcbiAgICAgICAgICAgICAgICAodmFsKSA9PiAodmFsICYmIHZhbC5sZW5ndGggPiAwKSB8fCAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCcsXG4gICAgICAgICAgICAgIF1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmFwcGVuZD5cbiAgICAgICAgICAgICAgICA8cS1pY29uXG4gICAgICAgICAgICAgICAgICBAY2xpY2s9XCJcbiAgICAgICAgICAgICAgICAgICAgZmllbGRfdHlwZTEgPVxuICAgICAgICAgICAgICAgICAgICAgIGZpZWxkX3R5cGUxID09ICdwYXNzd29yZCcgPyAndGV4dCcgOiAncGFzc3dvcmQnXG4gICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgOm5hbWU9XCJGaWVsZEljb24xXCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwiZ3JleVwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC9xLWlucHV0PlxuXG4gICAgICAgICAgICA8cS1zcGFjZSBjbGFzcz1cInEtcGEtbWRcIj48L3Etc3BhY2U+XG5cbiAgICAgICAgICAgIDxxLWNhcmQtYWN0aW9ucyB2ZXJ0aWNhbCBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICA6bG9hZGluZz1cImxvYWRpbmdcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdTdWJtaXQnKVwiXG4gICAgICAgICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgdGV4dC1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImZ1bGwtd2lkdGggdGV4dC13ZWlnaHQtYm9sZFwiXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvcS1jYXJkLWFjdGlvbnM+XG5cbiAgICAgICAgICAgIDxxLXNwYWNlIGNsYXNzPVwicS1wYS1tZFwiPjwvcS1zcGFjZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8IS0tIHctNzUgLS0+XG4gICAgICAgIDwvcS1mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgICA8IS0tIHRleHQtY2VudGVyIC0tPlxuICAgIDwvcS1jYXJkPlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgQVBJaW50ZXJmYWNlIGZyb20gXCJzcmMvYXBpL0FQSWludGVyZmFjZVwiO1xuaW1wb3J0IGF1dGggZnJvbSBcInNyYy9hcGkvYXV0aFwiO1xuaW1wb3J0IHsgdXNlQ2xpZW50U3RvcmUgfSBmcm9tIFwic3RvcmVzL0NsaWVudFN0b3JlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJDb21wbGV0ZVJlZ2lzdHJhdGlvblwiLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIGZpZWxkX3R5cGU6IFwicGFzc3dvcmRcIixcbiAgICAgIGZpZWxkX3R5cGUxOiBcInBhc3N3b3JkXCIsXG4gICAgICBmaXJzdF9uYW1lOiBcIlwiLFxuICAgICAgbGFzdF9uYW1lOiBcIlwiLFxuICAgICAgZW1haWxfYWRkcmVzczogXCJcIixcbiAgICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgICAgY3Bhc3N3b3JkOiBcIlwiLFxuICAgICAgbW9iaWxlX251bWJlcjogXCJcIixcbiAgICAgIG1vYmlsZV9wcmVmaXg6IFwiXCIsXG4gICAgICBvcHRpb25zOiBbXSxcbiAgICAgIGlubmVyX2xvYWRpbmc6IGZhbHNlLFxuICAgICAgY2xpZW50X3V1aWQ6IFwiXCIsXG4gICAgfTtcbiAgfSxcbiAgc2V0dXAoKSB7XG4gICAgY29uc3QgQ2xpZW50U3RvcmUgPSB1c2VDbGllbnRTdG9yZSgpO1xuICAgIHJldHVybiB7IENsaWVudFN0b3JlIH07XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgRmllbGRJY29uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZmllbGRfdHlwZSA9PT0gXCJwYXNzd29yZFwiXG4gICAgICAgID8gXCJldmEtZXllLW91dGxpbmVcIlxuICAgICAgICA6IFwiZXZhLWV5ZS1vZmYtb3V0bGluZVwiO1xuICAgIH0sXG4gICAgRmllbGRJY29uMSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmZpZWxkX3R5cGUxID09PSBcInBhc3N3b3JkXCJcbiAgICAgICAgPyBcImV2YS1leWUtb3V0bGluZVwiXG4gICAgICAgIDogXCJldmEtZXllLW9mZi1vdXRsaW5lXCI7XG4gICAgfSxcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmNsaWVudF91dWlkID0gdGhpcy4kcm91dGUucXVlcnkudXVpZDtcbiAgICB0aGlzLmdldEN1c3RvbWVySW5mbygpO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZ2V0Q3VzdG9tZXJJbmZvKCkge1xuICAgICAgdGhpcy5pbm5lcl9sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIEFQSWludGVyZmFjZS5nZXRDdXN0b21lckluZm8odGhpcy5jbGllbnRfdXVpZClcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmZpcnN0X25hbWUgPSBkYXRhLmRldGFpbHMuZmlyc3RfbmFtZTtcbiAgICAgICAgICB0aGlzLmxhc3RfbmFtZSA9IGRhdGEuZGV0YWlscy5sYXN0X25hbWU7XG4gICAgICAgICAgdGhpcy5lbWFpbF9hZGRyZXNzID0gZGF0YS5kZXRhaWxzLmVtYWlsX2FkZHJlc3M7XG5cbiAgICAgICAgICB0aGlzLm1vYmlsZV9wcmVmaXggPSBcIitcIiArIGRhdGEuZGV0YWlscy5kZWZhdWx0X2RhdGEucGhvbmVjb2RlO1xuICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhkYXRhLmRldGFpbHMuZGF0YSkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoZGF0YS5kZXRhaWxzLmRhdGEpLmZvckVhY2goKFtrZXksIGl0ZW1zXSkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiK1wiICsgaXRlbXMucGhvbmVjb2RlICsgXCIgXCIgKyBpdGVtcy5jb3VudHJ5X25hbWUsXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiK1wiICsgaXRlbXMucGhvbmVjb2RlLFxuICAgICAgICAgICAgICAgIGZsYWc6IGl0ZW1zLmZsYWcsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgQVBJaW50ZXJmYWNlLm5vdGlmeShcInJlZC01XCIsIGVycm9yLCBcImVycm9yX291dGxpbmVcIiwgdGhpcy4kcSk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5pbm5lcl9sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgb25TdWJtaXQoKSB7XG4gICAgICBjb25zdCAkZGF0YSA9IHtcbiAgICAgICAgY2xpZW50X3V1aWQ6IHRoaXMuY2xpZW50X3V1aWQsXG4gICAgICAgIGZpcnN0X25hbWU6IHRoaXMuZmlyc3RfbmFtZSxcbiAgICAgICAgbGFzdF9uYW1lOiB0aGlzLmxhc3RfbmFtZSxcbiAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsXG4gICAgICAgIGNwYXNzd29yZDogdGhpcy5jcGFzc3dvcmQsXG4gICAgICAgIG1vYmlsZV9wcmVmaXg6IHRoaXMubW9iaWxlX3ByZWZpeCxcbiAgICAgICAgbW9iaWxlX251bWJlcjogdGhpcy5tb2JpbGVfbnVtYmVyLFxuICAgICAgICBsb2NhbF9pZDogQVBJaW50ZXJmYWNlLmdldFN0b3JhZ2UoXCJwbGFjZV9pZFwiKSxcbiAgICAgIH07XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgQVBJaW50ZXJmYWNlLmNvbXBsZXRlU29jaWFsU2lnbnVwKCRkYXRhKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGF1dGguc2V0VXNlcihkYXRhLmRldGFpbHMudXNlcl9kYXRhKTtcbiAgICAgICAgICBhdXRoLnNldFRva2VuKGRhdGEuZGV0YWlscy51c2VyX3Rva2VuKTtcbiAgICAgICAgICB0aGlzLkNsaWVudFN0b3JlLnVzZXJfc2V0dGluZ3MgPSBkYXRhLmRldGFpbHMudXNlcl9zZXR0aW5ncztcblxuICAgICAgICAgIGNvbnN0ICRwbGFjZUlkID0gQVBJaW50ZXJmYWNlLmdldFN0b3JhZ2UoXCJwbGFjZV9pZFwiKTtcbiAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiPT5cIiArICRwbGFjZUlkKTtcbiAgICAgICAgICBpZiAodHlwZW9mICRwbGFjZUlkICE9PSBcInVuZGVmaW5lZFwiICYmICRwbGFjZUlkICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaChcIi9ob21lXCIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaChcIi9sb2NhdGlvblwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBBUElpbnRlcmZhY2Uubm90aWZ5KFwicmVkLTVcIiwgZXJyb3IsIG51bGwsIHRoaXMuJHEpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfY3JlYXRlVk5vZGUiLCJfd2l0aEN0eCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5S0EsTUFBSyxZQUFVO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQ0wsV0FBTztBQUFBLE1BQ0wsU0FBUztBQUFBLE1BQ1QsWUFBWTtBQUFBLE1BQ1osYUFBYTtBQUFBLE1BQ2IsWUFBWTtBQUFBLE1BQ1osV0FBVztBQUFBLE1BQ1gsZUFBZTtBQUFBLE1BQ2YsVUFBVTtBQUFBLE1BQ1YsV0FBVztBQUFBLE1BQ1gsZUFBZTtBQUFBLE1BQ2YsZUFBZTtBQUFBLE1BQ2YsU0FBUyxDQUFFO0FBQUEsTUFDWCxlQUFlO0FBQUEsTUFDZixhQUFhO0FBQUE7RUFFaEI7QUFBQSxFQUNELFFBQVE7QUFDTixVQUFNLGNBQWM7QUFDcEIsV0FBTyxFQUFFO0VBQ1Y7QUFBQSxFQUNELFVBQVU7QUFBQSxJQUNSLFlBQVk7QUFDVixhQUFPLEtBQUssZUFBZSxhQUN2QixvQkFDQTtBQUFBLElBQ0w7QUFBQSxJQUNELGFBQWE7QUFDWCxhQUFPLEtBQUssZ0JBQWdCLGFBQ3hCLG9CQUNBO0FBQUEsSUFDTDtBQUFBLEVBQ0Y7QUFBQSxFQUNELFVBQVU7QUFDUixTQUFLLGNBQWMsS0FBSyxPQUFPLE1BQU07QUFDckMsU0FBSyxnQkFBZTtBQUFBLEVBQ3JCO0FBQUEsRUFDRCxTQUFTO0FBQUEsSUFDUCxrQkFBa0I7QUFDaEIsV0FBSyxnQkFBZ0I7QUFDckIsbUJBQWEsZ0JBQWdCLEtBQUssV0FBVyxFQUMxQyxLQUFLLENBQUMsU0FBUztBQUNkLGFBQUssYUFBYSxLQUFLLFFBQVE7QUFDL0IsYUFBSyxZQUFZLEtBQUssUUFBUTtBQUM5QixhQUFLLGdCQUFnQixLQUFLLFFBQVE7QUFFbEMsYUFBSyxnQkFBZ0IsTUFBTSxLQUFLLFFBQVEsYUFBYTtBQUNyRCxZQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxFQUFFLFNBQVMsR0FBRztBQUM3QyxpQkFBTyxRQUFRLEtBQUssUUFBUSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUMsS0FBSyxLQUFLLE1BQU07QUFDMUQsaUJBQUssUUFBUSxLQUFLO0FBQUEsY0FDaEIsT0FBTyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU07QUFBQSxjQUMzQyxPQUFPLE1BQU0sTUFBTTtBQUFBLGNBQ25CLE1BQU0sTUFBTTtBQUFBLFlBQ2QsQ0FBQztBQUFBLFVBQ0gsQ0FBQztBQUFBLFFBQ0g7QUFBQSxPQUNELEVBQ0EsTUFBTSxDQUFDLFVBQVU7QUFDaEIscUJBQWEsT0FBTyxTQUFTLE9BQU8saUJBQWlCLEtBQUssRUFBRTtBQUFBLE9BQzdELEVBQ0EsS0FBSyxDQUFDLFNBQVM7QUFDZCxhQUFLLGdCQUFnQjtBQUFBLE1BQ3ZCLENBQUM7QUFBQSxJQUNKO0FBQUEsSUFDRCxXQUFXO0FBQ1QsWUFBTSxRQUFRO0FBQUEsUUFDWixhQUFhLEtBQUs7QUFBQSxRQUNsQixZQUFZLEtBQUs7QUFBQSxRQUNqQixXQUFXLEtBQUs7QUFBQSxRQUNoQixVQUFVLEtBQUs7QUFBQSxRQUNmLFdBQVcsS0FBSztBQUFBLFFBQ2hCLGVBQWUsS0FBSztBQUFBLFFBQ3BCLGVBQWUsS0FBSztBQUFBLFFBQ3BCLFVBQVUsYUFBYSxXQUFXLFVBQVU7QUFBQTtBQUU5QyxXQUFLLFVBQVU7QUFDZixtQkFBYSxxQkFBcUIsS0FBSyxFQUNwQyxLQUFLLENBQUMsU0FBUztBQUNkLGFBQUssUUFBUSxLQUFLLFFBQVEsU0FBUztBQUNuQyxhQUFLLFNBQVMsS0FBSyxRQUFRLFVBQVU7QUFDckMsYUFBSyxZQUFZLGdCQUFnQixLQUFLLFFBQVE7QUFFOUMsY0FBTSxXQUFXLGFBQWEsV0FBVyxVQUFVO0FBQ25ELGdCQUFRLE1BQU0sT0FBTyxRQUFRO0FBQzdCLFlBQUksT0FBTyxhQUFhLGVBQWUsYUFBYSxNQUFNO0FBQ3hELGVBQUssUUFBUSxLQUFLLE9BQU87QUFBQSxlQUNwQjtBQUNMLGVBQUssUUFBUSxLQUFLLFdBQVc7QUFBQSxRQUMvQjtBQUFBLE9BQ0QsRUFDQSxNQUFNLENBQUMsVUFBVTtBQUNoQixxQkFBYSxPQUFPLFNBQVMsT0FBTyxNQUFNLEtBQUssRUFBRTtBQUFBLE9BQ2xELEVBQ0EsS0FBSyxDQUFDLFNBQVM7QUFDZCxhQUFLLFVBQVU7QUFBQSxNQUNqQixDQUFDO0FBQUEsSUFDSjtBQUFBLEVBQ0Y7QUFDSDtBQTNQVyxNQUFBLGFBQUEsRUFBQSxPQUFNLGNBQWE7QUFFcEIsTUFBQSxhQUFBQSxnQ0FBK0QsTUFBM0QsRUFBQSxPQUFNLDhCQUEyQix5QkFBcUIsRUFBQTtBQUVyRCxNQUFBLGFBQUEsRUFBQSxPQUFNLG1CQUFrQjs7O0lBckJyQ0MsWUFZVyxTQUFBO0FBQUEsTUFaRCxRQUFBO0FBQUEsTUFBTyxpQkFBYztBQUFBLE1BQUssT0FBTTtBQUFBO3VCQUN4QyxNQVVZO0FBQUEsUUFWWkEsWUFVWSxVQUFBLE1BQUE7QUFBQSwyQkFUVixNQVFFO0FBQUEsWUFSRkEsWUFRRSxNQUFBO0FBQUEsY0FQQyxTQUFLLE9BQUEsT0FBQSxPQUFBLEtBQUEsWUFBRSxLQUFPLFFBQUMsS0FBSTtBQUFBLGNBQ3BCLE1BQUE7QUFBQSxjQUNBLE9BQUE7QUFBQSxjQUNBLE9BQUE7QUFBQSxjQUNBLE1BQUs7QUFBQSxjQUNMLE9BQU07QUFBQSxjQUNOLE9BQU07QUFBQTs7Ozs7OztJQUtaQSxZQWtKUyxPQUFBLEVBQUEsU0FBQSxHQUFBLEdBbEpNO0FBQUEsdUJBQ2IsTUFnSlM7QUFBQSxRQWhKVEEsWUFnSlMsT0FBQSxFQUFBLE1BQUEsR0FBQSxHQWhKRDtBQUFBLDJCQUNOLE1BQXNFO0FBQUEsWUFBdEVBLFlBQXNFLGVBQUE7QUFBQSxjQUFwRCxTQUFTLE1BQWE7QUFBQSxjQUFFLE9BQU07QUFBQSxjQUFVLE1BQUs7QUFBQTtZQUMvREQsZ0JBNElNLE9BNUlOLFlBNElNO0FBQUEsY0EzSUpDLFlBMElTLE9BQUE7QUFBQSxnQkExSUEsVUFBUSxTQUFRO0FBQUEsZ0JBQUUsT0FBTTtBQUFBO2lDQUMvQixNQUErRDtBQUFBLGtCQUEvRDtBQUFBLGtCQUVBRCxnQkFxSU0sT0FySU4sWUFxSU07QUFBQSxvQkFwSUpDLFlBT0UsUUFBQTtBQUFBLGtDQU5TLE1BQVU7QUFBQSxtRkFBVixNQUFVLGFBQUE7QUFBQSxzQkFDbEIsT0FBTyxLQUFFLEdBQUEsWUFBQTtBQUFBLHNCQUNWLGNBQUE7QUFBQSxzQkFDQyxPQUFLO0FBQUEsd0JBQXFCLENBQUEsUUFBUyxPQUFPLElBQUksU0FBTSxLQUFBO0FBQUE7O29CQUt2REEsWUFPRSxRQUFBO0FBQUEsa0NBTlMsTUFBUztBQUFBLG1GQUFULE1BQVMsWUFBQTtBQUFBLHNCQUNqQixPQUFPLEtBQUUsR0FBQSxXQUFBO0FBQUEsc0JBQ1YsY0FBQTtBQUFBLHNCQUNDLE9BQUs7QUFBQSx3QkFBcUIsQ0FBQSxRQUFTLE9BQU8sSUFBSSxTQUFNLEtBQUE7QUFBQTs7b0JBS3ZEQSxZQVFFLFFBQUE7QUFBQSxrQ0FQUyxNQUFhO0FBQUEsbUZBQWIsTUFBYSxnQkFBQTtBQUFBLHNCQUN0QixPQUFNO0FBQUEsc0JBQ04sU0FBQTtBQUFBLHNCQUNBLGNBQUE7QUFBQSxzQkFDQyxPQUFLO0FBQUEsd0JBQXFCLENBQUEsUUFBUyxPQUFPLElBQUksU0FBTSxLQUFBO0FBQUE7O29CQUt2REEsWUEyQ1UsUUFBQTtBQUFBLGtDQTFDQyxNQUFhO0FBQUEsbUZBQWIsTUFBYSxnQkFBQTtBQUFBLHNCQUN0QixPQUFBO0FBQUEsc0JBQ0EsTUFBSztBQUFBLHNCQUNMLGNBQUE7QUFBQSxzQkFDQyxPQUFLO0FBQUEsd0JBQXFCLENBQUEsUUFBUyxPQUFPLElBQUksU0FBTSxLQUFBO0FBQUE7O3NCQUlwQyxpQkFDZixNQStCVztBQUFBLHdCQS9CWEEsWUErQlcsU0FBQTtBQUFBLDBCQTlCVCxPQUFBO0FBQUEsc0NBQ1MsTUFBYTtBQUFBLHVGQUFiLE1BQWEsZ0JBQUE7QUFBQSwwQkFDckIsU0FBUyxNQUFPO0FBQUEsMEJBQ2hCLFVBQVEsS0FBUTtBQUFBLDBCQUNqQixVQUFTO0FBQUEsMEJBQ1Qsa0JBQWU7QUFBQSwwQkFDZixPQUFBLEVBQW9CLFVBQUEsT0FBQTtBQUFBLDBCQUNwQixjQUFBO0FBQUEsMEJBQ0EsWUFBQTtBQUFBOzBCQUVpQixRQUNmQyxRQUFBLENBVVMsRUFYZ0IsV0FBVyxJQUFHLE1BQUE7QUFBQSw0QkFDdkNELFlBVVMsc0RBVmdCO0FBQUEsK0NBQ3ZCLE1BS2lCO0FBQUEsZ0NBTGpCQSxZQUtpQixjQUFBLEVBQUEsUUFBQSxHQUFBLEdBTEs7QUFBQSxtREFDcEIsTUFHRTtBQUFBLG9DQUhGQSxZQUdFLE1BQUE7QUFBQSxzQ0FGQyxLQUFLLElBQUk7QUFBQSxzQ0FDVixPQUFBLEVBQXFDLFVBQUEsUUFBQSxhQUFBLE9BQUE7QUFBQTs7OztnQ0FHekNBLFlBRWlCLGNBQUEsTUFBQTtBQUFBLG1EQURmLE1BQW1DO0FBQUEsb0NBQW5DQSxZQUFtQyxZQUFBO0FBQUEsc0NBQXJCLFdBQVEsSUFBSTtBQUFBOzs7Ozs7OzswQkFJZixxQkFDZixNQUlTO0FBQUEsNEJBSlRBLFlBSVMsT0FBQSxNQUFBO0FBQUEsK0NBSFAsTUFFaUI7QUFBQSxnQ0FGakJBLFlBRWlCLGNBQUEsRUFBQSxPQUFBLFlBRkksR0FBWTtBQUFBLG1EQUMvQixNQUFzQjtBQUFBLG9FQUFuQixLQUFFLEdBQUEsWUFBQSxDQUFBLEdBQUEsQ0FBQTtBQUFBOzs7Ozs7Ozs7Ozs7b0JBUWpCQSxZQW1CVSxRQUFBO0FBQUEsa0NBbEJDLE1BQVE7QUFBQSxtRkFBUixNQUFRLFdBQUE7QUFBQSxzQkFDaEIsTUFBTSxNQUFVO0FBQUEsc0JBQ2hCLE9BQU8sS0FBRSxHQUFBLFVBQUE7QUFBQSxzQkFDVixjQUFBO0FBQUEsc0JBQ0MsT0FBSztBQUFBLHdCQUFxQixDQUFBLFFBQVMsT0FBTyxJQUFJLFNBQU0sS0FBQTtBQUFBOztzQkFJcEMsZ0JBQ2YsTUFPRTtBQUFBLHdCQVBGQSxZQU9FLE9BQUE7QUFBQSwwQkFOQyxTQUFLLE9BQUEsT0FBQSxPQUFBLEtBQUEsWUFBdUIsTUFBQSxhQUFhLE1BQVUsY0FBQSxhQUFBLFNBQUE7QUFBQSwwQkFHbkQsTUFBTSxTQUFTO0FBQUEsMEJBQ2hCLE9BQU07QUFBQSwwQkFDTixPQUFNO0FBQUE7Ozs7b0JBS1pBLFlBb0JVLFFBQUE7QUFBQSxzQkFuQlAsTUFBTSxNQUFXO0FBQUEsa0NBQ1QsTUFBUztBQUFBLG1GQUFULE1BQVMsWUFBQTtBQUFBLHNCQUNqQixPQUFPLEtBQUUsR0FBQSxrQkFBQTtBQUFBLHNCQUNWLGNBQUE7QUFBQSxzQkFDQyxPQUFLO0FBQUEsd0JBQXFCLENBQUEsUUFBUyxPQUFPLElBQUksU0FBTSxLQUFBO0FBQUE7O3NCQUlwQyxnQkFDZixNQVFFO0FBQUEsd0JBUkZBLFlBUUUsT0FBQTtBQUFBLDBCQVBDLFNBQUssT0FBQSxPQUFBLE9BQUEsS0FBQSxZQUF1QixNQUFXLGNBQXlCLE1BQVcsZUFBQSxhQUFBLFNBQUE7QUFBQSwwQkFJM0UsTUFBTSxTQUFVO0FBQUEsMEJBQ2pCLE9BQU07QUFBQSwwQkFDTixPQUFNO0FBQUE7Ozs7b0JBS1pBLFlBQW1DLFFBQUEsRUFBQSxPQUFBLFVBQXJCLENBQUE7QUFBQSxvQkFFZEEsWUFXaUIsY0FBQTtBQUFBLHNCQVhELFVBQUE7QUFBQSxzQkFBUyxPQUFNO0FBQUE7dUNBQzdCLE1BU0U7QUFBQSx3QkFURkEsWUFTRSxNQUFBO0FBQUEsMEJBUkMsU0FBUyxNQUFPO0FBQUEsMEJBQ2pCLE1BQUs7QUFBQSwwQkFDSixPQUFPLEtBQUUsR0FBQSxRQUFBO0FBQUEsMEJBQ1YsWUFBQTtBQUFBLDBCQUNBLE9BQU07QUFBQSwwQkFDTixjQUFXO0FBQUEsMEJBQ1gsT0FBTTtBQUFBLDBCQUNOLE1BQUs7QUFBQTs7OztvQkFJVEEsWUFBbUMsUUFBQSxFQUFBLE9BQUEsVUFBckIsQ0FBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7In0=
