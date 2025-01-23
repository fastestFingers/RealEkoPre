import { _ as _export_sfc, R as useDataStore, m as APIinterface, aw as auth, p as openBlock, V as createElementBlock, f as createVNode, t as withCtx, a7 as normalizeClass, F as Fragment, Y as QBtn, a6 as createTextVNode, Z as toDisplayString, U as createBaseVNode, aY as QInput, ac as QItem, bg as normalizeProps, bh as guardReactiveProps, ad as QItemSection, at as QIcon } from "./index.61ed5618.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QImg } from "./QImg.6c27044c.js";
import { Q as QItemLabel } from "./QItemLabel.a9365c5b.js";
import { Q as QSelect } from "./QSelect.311187d6.js";
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
  name: "SignupPage",
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
      inner_loading: false
    };
  },
  setup() {
    const DataStore = useDataStore();
    const ClientStore = useClientStore();
    return { DataStore, ClientStore };
  },
  computed: {
    FieldIcon() {
      return this.field_type === "password" ? "eva-eye-outline" : "eva-eye-off-outline";
    },
    FieldIcon1() {
      return this.field_type1 === "password" ? "eva-eye-outline" : "eva-eye-off-outline";
    }
  },
  watch: {
    DataStore: {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        if (Object.keys(newValue.phone_default_data).length > 0) {
          this.mobile_prefix = "+" + newValue.phone_default_data.phonecode;
        }
      }
    }
  },
  methods: {
    onSubmit() {
      const $data = {
        first_name: this.first_name,
        last_name: this.last_name,
        email_address: this.email_address,
        password: this.password,
        cpassword: this.cpassword,
        mobile_prefix: this.mobile_prefix,
        mobile_number: this.mobile_number,
        local_id: APIinterface.getStorage("place_id")
      };
      this.loading = true;
      APIinterface.registerUser($data).then((data) => {
        if (data.details.verify) {
          this.$router.push({
            path: "/account/verify",
            query: { uuid: data.details.uuid, msg: data.msg }
          });
        } else {
          auth.setUser(data.details.user_data);
          auth.setToken(data.details.user_token);
          this.ClientStore.user_settings = data.details.user_settings;
          const $placeId = APIinterface.getStorage("place_id");
          if (typeof $placeId !== "undefined" && $placeId !== null) {
            this.$router.push("/home");
          } else {
            this.$router.push("/location");
          }
        }
      }).catch((error) => {
        APIinterface.notify("dark", error, null, this.$q);
      }).then((data) => {
        this.loading = false;
      });
    }
  }
};
const _hoisted_1 = { class: "full-width q-pa-md" };
const _hoisted_2 = { class: "text-weight-bold" };
const _hoisted_3 = { class: "text-weight-medium q-ma-none" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(QHeader, {
      reveal: "",
      "reveal-offset": "50",
      class: normalizeClass({
        "bg-mydark text-white": _ctx.$q.dark.mode,
        "bg-white text-dark": !_ctx.$q.dark.mode
      })
    }, {
      default: withCtx(() => [
        createVNode(QToolbar, null, {
          default: withCtx(() => [
            createVNode(QBtn, {
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$router.back()),
              flat: "",
              round: "",
              dense: "",
              icon: "las la-angle-left",
              class: "q-mr-sm",
              color: _ctx.$q.dark.mode ? "white" : "dark"
            }, null, 8, ["color"]),
            createVNode(QToolbarTitle, { class: "text-weight-bold" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("Sigin Up")), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["class"]),
    createVNode(QPage, {
      padding: "",
      class: "flex flex-center"
    }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("h5", _hoisted_2, toDisplayString(_ctx.$t("Create Account")), 1),
          createBaseVNode("p", _hoisted_3, toDisplayString(_ctx.$t("Enter your name, email and password for signup")) + ". ", 1),
          createVNode(QBtn, {
            flat: "",
            label: _ctx.$t("Already have an account?"),
            "no-caps": "",
            class: "q-pa-none text-weight-bold min-height q-mb-md",
            color: "secondary",
            to: "/user/login"
          }, null, 8, ["label"]),
          createVNode(QForm, { onSubmit: $options.onSubmit }, {
            default: withCtx(() => [
              createVNode(QInput, {
                modelValue: $data.first_name,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.first_name = $event),
                label: _ctx.$t("First name"),
                outlined: "",
                "lazy-rules": "",
                "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
                "label-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                borderless: "",
                class: "input-borderless",
                rules: [
                  (val) => val && val.length > 0 || this.$t("This field is required")
                ]
              }, null, 8, ["modelValue", "label", "bg-color", "label-color", "rules"]),
              createVNode(QInput, {
                modelValue: $data.last_name,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.last_name = $event),
                label: _ctx.$t("Last name"),
                outlined: "",
                "lazy-rules": "",
                "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
                "label-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                borderless: "",
                class: "input-borderless",
                rules: [
                  (val) => val && val.length > 0 || this.$t("This field is required")
                ]
              }, null, 8, ["modelValue", "label", "bg-color", "label-color", "rules"]),
              createVNode(QInput, {
                modelValue: $data.email_address,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.email_address = $event),
                label: _ctx.$t("Email address"),
                outlined: "",
                "lazy-rules": "",
                "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
                "label-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                borderless: "",
                class: "input-borderless",
                rules: [
                  (val) => val && val.length > 0 || this.$t("This field is required")
                ]
              }, null, 8, ["modelValue", "label", "bg-color", "label-color", "rules"]),
              createVNode(QInput, {
                modelValue: $data.mobile_number,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.mobile_number = $event),
                mask: "##############",
                outlined: "",
                "lazy-rules": "",
                "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
                "label-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                borderless: "",
                class: "input-borderless",
                rules: [
                  (val) => val && val.length > 0 || this.$t("This field is required")
                ]
              }, {
                prepend: withCtx(() => [
                  createVNode(QSelect, {
                    dense: "",
                    modelValue: $data.mobile_prefix,
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.mobile_prefix = $event),
                    options: $setup.DataStore.phone_prefix_data,
                    onFilter: _ctx.filterFn,
                    behavior: "dialog",
                    "input-debounce": "700",
                    style: { "border": "none" },
                    "emit-value": "",
                    borderlessx: "",
                    class: "myq-field"
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
                              createVNode(QItemLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(opt.label), 1)
                                ]),
                                _: 2
                              }, 1024)
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
              }, 8, ["modelValue", "bg-color", "label-color", "rules"]),
              createVNode(QInput, {
                modelValue: $data.password,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.password = $event),
                type: $data.field_type,
                label: _ctx.$t("Password"),
                outlined: "",
                "lazy-rules": "",
                "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
                "label-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                borderless: "",
                class: "input-borderless",
                rules: [
                  (val) => val && val.length > 0 || this.$t("This field is required")
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
              }, 8, ["modelValue", "type", "label", "bg-color", "label-color", "rules"]),
              createVNode(QInput, {
                type: $data.field_type1,
                modelValue: $data.cpassword,
                "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $data.cpassword = $event),
                label: _ctx.$t("Confirm Password"),
                outlined: "",
                "lazy-rules": "",
                "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
                "label-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                borderless: "",
                class: "input-borderless",
                rules: [
                  (val) => val && val.length > 0 || this.$t("This field is required")
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
              }, 8, ["type", "modelValue", "label", "bg-color", "label-color", "rules"]),
              createVNode(QBtn, {
                loading: $data.loading,
                type: "submit",
                label: _ctx.$t("Sign Up"),
                unelevated: "",
                "no-caps": "",
                color: "primary text-white",
                class: "full-width text-weight-bold",
                size: "lg"
              }, null, 8, ["loading", "label"])
            ]),
            _: 1
          }, 8, ["onSubmit"])
        ])
      ]),
      _: 1
    })
  ], 64);
}
var SignupPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "SignupPage.vue"]]);
export { SignupPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2lnbnVwUGFnZS5iM2ViZTdhMS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhZ2VzL1VzZXIvU2lnbnVwUGFnZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8cS1oZWFkZXJcbiAgICByZXZlYWxcbiAgICByZXZlYWwtb2Zmc2V0PVwiNTBcIlxuICAgIDpjbGFzcz1cIntcbiAgICAgICdiZy1teWRhcmsgdGV4dC13aGl0ZSc6ICRxLmRhcmsubW9kZSxcbiAgICAgICdiZy13aGl0ZSB0ZXh0LWRhcmsnOiAhJHEuZGFyay5tb2RlLFxuICAgIH1cIlxuICA+XG4gICAgPHEtdG9vbGJhcj5cbiAgICAgIDxxLWJ0blxuICAgICAgICBAY2xpY2s9XCIkcm91dGVyLmJhY2soKVwiXG4gICAgICAgIGZsYXRcbiAgICAgICAgcm91bmRcbiAgICAgICAgZGVuc2VcbiAgICAgICAgaWNvbj1cImxhcyBsYS1hbmdsZS1sZWZ0XCJcbiAgICAgICAgY2xhc3M9XCJxLW1yLXNtXCJcbiAgICAgICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ3doaXRlJyA6ICdkYXJrJ1wiXG4gICAgICAvPlxuICAgICAgPHEtdG9vbGJhci10aXRsZSBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGRcIj57e1xuICAgICAgICAkdChcIlNpZ2luIFVwXCIpXG4gICAgICB9fTwvcS10b29sYmFyLXRpdGxlPlxuICAgIDwvcS10b29sYmFyPlxuICA8L3EtaGVhZGVyPlxuICA8cS1wYWdlIHBhZGRpbmcgY2xhc3M9XCJmbGV4IGZsZXgtY2VudGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImZ1bGwtd2lkdGggcS1wYS1tZFwiPlxuICAgICAgPGg1IGNsYXNzPVwidGV4dC13ZWlnaHQtYm9sZFwiPnt7ICR0KFwiQ3JlYXRlIEFjY291bnRcIikgfX08L2g1PlxuICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXdlaWdodC1tZWRpdW0gcS1tYS1ub25lXCI+XG4gICAgICAgIHt7ICR0KFwiRW50ZXIgeW91ciBuYW1lLCBlbWFpbCBhbmQgcGFzc3dvcmQgZm9yIHNpZ251cFwiKSB9fS5cbiAgICAgIDwvcD5cbiAgICAgIDxxLWJ0blxuICAgICAgICBmbGF0XG4gICAgICAgIDpsYWJlbD1cIiR0KCdBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD8nKVwiXG4gICAgICAgIG5vLWNhcHNcbiAgICAgICAgY2xhc3M9XCJxLXBhLW5vbmUgdGV4dC13ZWlnaHQtYm9sZCBtaW4taGVpZ2h0IHEtbWItbWRcIlxuICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgIHRvPVwiL3VzZXIvbG9naW5cIlxuICAgICAgLz5cblxuICAgICAgPHEtZm9ybSBAc3VibWl0PVwib25TdWJtaXRcIj5cbiAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICB2LW1vZGVsPVwiZmlyc3RfbmFtZVwiXG4gICAgICAgICAgOmxhYmVsPVwiJHQoJ0ZpcnN0IG5hbWUnKVwiXG4gICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICBsYXp5LXJ1bGVzXG4gICAgICAgICAgOmJnLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXk2MDAnIDogJ2lucHV0J1wiXG4gICAgICAgICAgOmxhYmVsLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXkzMDAnIDogJ2dyZXknXCJcbiAgICAgICAgICBib3JkZXJsZXNzXG4gICAgICAgICAgY2xhc3M9XCJpbnB1dC1ib3JkZXJsZXNzXCJcbiAgICAgICAgICA6cnVsZXM9XCJbXG4gICAgICAgICAgICAodmFsKSA9PlxuICAgICAgICAgICAgICAodmFsICYmIHZhbC5sZW5ndGggPiAwKSB8fCB0aGlzLiR0KCdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJyksXG4gICAgICAgICAgXVwiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICB2LW1vZGVsPVwibGFzdF9uYW1lXCJcbiAgICAgICAgICA6bGFiZWw9XCIkdCgnTGFzdCBuYW1lJylcIlxuICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgbGF6eS1ydWxlc1xuICAgICAgICAgIDpiZy1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5NjAwJyA6ICdpbnB1dCdcIlxuICAgICAgICAgIDpsYWJlbC1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICdncmV5J1wiXG4gICAgICAgICAgYm9yZGVybGVzc1xuICAgICAgICAgIGNsYXNzPVwiaW5wdXQtYm9yZGVybGVzc1wiXG4gICAgICAgICAgOnJ1bGVzPVwiW1xuICAgICAgICAgICAgKHZhbCkgPT5cbiAgICAgICAgICAgICAgKHZhbCAmJiB2YWwubGVuZ3RoID4gMCkgfHwgdGhpcy4kdCgnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCcpLFxuICAgICAgICAgIF1cIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgdi1tb2RlbD1cImVtYWlsX2FkZHJlc3NcIlxuICAgICAgICAgIDpsYWJlbD1cIiR0KCdFbWFpbCBhZGRyZXNzJylcIlxuICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgbGF6eS1ydWxlc1xuICAgICAgICAgIDpiZy1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5NjAwJyA6ICdpbnB1dCdcIlxuICAgICAgICAgIDpsYWJlbC1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICdncmV5J1wiXG4gICAgICAgICAgYm9yZGVybGVzc1xuICAgICAgICAgIGNsYXNzPVwiaW5wdXQtYm9yZGVybGVzc1wiXG4gICAgICAgICAgOnJ1bGVzPVwiW1xuICAgICAgICAgICAgKHZhbCkgPT5cbiAgICAgICAgICAgICAgKHZhbCAmJiB2YWwubGVuZ3RoID4gMCkgfHwgdGhpcy4kdCgnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCcpLFxuICAgICAgICAgIF1cIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgdi1tb2RlbD1cIm1vYmlsZV9udW1iZXJcIlxuICAgICAgICAgIG1hc2s9XCIjIyMjIyMjIyMjIyMjI1wiXG4gICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICBsYXp5LXJ1bGVzXG4gICAgICAgICAgOmJnLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXk2MDAnIDogJ2lucHV0J1wiXG4gICAgICAgICAgOmxhYmVsLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXkzMDAnIDogJ2dyZXknXCJcbiAgICAgICAgICBib3JkZXJsZXNzXG4gICAgICAgICAgY2xhc3M9XCJpbnB1dC1ib3JkZXJsZXNzXCJcbiAgICAgICAgICA6cnVsZXM9XCJbXG4gICAgICAgICAgICAodmFsKSA9PlxuICAgICAgICAgICAgICAodmFsICYmIHZhbC5sZW5ndGggPiAwKSB8fCB0aGlzLiR0KCdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJyksXG4gICAgICAgICAgXVwiXG4gICAgICAgID5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OnByZXBlbmQ+XG4gICAgICAgICAgICA8cS1zZWxlY3RcbiAgICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgICAgdi1tb2RlbD1cIm1vYmlsZV9wcmVmaXhcIlxuICAgICAgICAgICAgICA6b3B0aW9ucz1cIkRhdGFTdG9yZS5waG9uZV9wcmVmaXhfZGF0YVwiXG4gICAgICAgICAgICAgIEBmaWx0ZXI9XCJmaWx0ZXJGblwiXG4gICAgICAgICAgICAgIGJlaGF2aW9yPVwiZGlhbG9nXCJcbiAgICAgICAgICAgICAgaW5wdXQtZGVib3VuY2U9XCI3MDBcIlxuICAgICAgICAgICAgICBzdHlsZT1cImJvcmRlcjogbm9uZVwiXG4gICAgICAgICAgICAgIGVtaXQtdmFsdWVcbiAgICAgICAgICAgICAgYm9yZGVybGVzc3hcbiAgICAgICAgICAgICAgY2xhc3M9XCJteXEtZmllbGRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90Om9wdGlvbj1cInsgaXRlbVByb3BzLCBvcHQgfVwiPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0gdi1iaW5kPVwiaXRlbVByb3BzXCI+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICA8cS1pbWdcbiAgICAgICAgICAgICAgICAgICAgICA6c3JjPVwib3B0LmZsYWdcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiAxNXB4OyBtYXgtd2lkdGg6IDIwcHhcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbD57eyBvcHQubGFiZWwgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6bm8tb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gY2xhc3M9XCJ0ZXh0LWdyZXlcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgJHQoXCJObyByZXN1bHRzXCIpIH19XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC9xLXNlbGVjdD5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3EtaW5wdXQ+XG5cbiAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICB2LW1vZGVsPVwicGFzc3dvcmRcIlxuICAgICAgICAgIDp0eXBlPVwiZmllbGRfdHlwZVwiXG4gICAgICAgICAgOmxhYmVsPVwiJHQoJ1Bhc3N3b3JkJylcIlxuICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgbGF6eS1ydWxlc1xuICAgICAgICAgIDpiZy1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5NjAwJyA6ICdpbnB1dCdcIlxuICAgICAgICAgIDpsYWJlbC1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICdncmV5J1wiXG4gICAgICAgICAgYm9yZGVybGVzc1xuICAgICAgICAgIGNsYXNzPVwiaW5wdXQtYm9yZGVybGVzc1wiXG4gICAgICAgICAgOnJ1bGVzPVwiW1xuICAgICAgICAgICAgKHZhbCkgPT5cbiAgICAgICAgICAgICAgKHZhbCAmJiB2YWwubGVuZ3RoID4gMCkgfHwgdGhpcy4kdCgnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCcpLFxuICAgICAgICAgIF1cIlxuICAgICAgICA+XG4gICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDphcHBlbmQ+XG4gICAgICAgICAgICA8cS1pY29uXG4gICAgICAgICAgICAgIEBjbGljaz1cIlxuICAgICAgICAgICAgICAgIGZpZWxkX3R5cGUgPSBmaWVsZF90eXBlID09ICdwYXNzd29yZCcgPyAndGV4dCcgOiAncGFzc3dvcmQnXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIDpuYW1lPVwiRmllbGRJY29uXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJncmV5XCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvcS1pbnB1dD5cblxuICAgICAgICA8cS1pbnB1dFxuICAgICAgICAgIDp0eXBlPVwiZmllbGRfdHlwZTFcIlxuICAgICAgICAgIHYtbW9kZWw9XCJjcGFzc3dvcmRcIlxuICAgICAgICAgIDpsYWJlbD1cIiR0KCdDb25maXJtIFBhc3N3b3JkJylcIlxuICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgbGF6eS1ydWxlc1xuICAgICAgICAgIDpiZy1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5NjAwJyA6ICdpbnB1dCdcIlxuICAgICAgICAgIDpsYWJlbC1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICdncmV5J1wiXG4gICAgICAgICAgYm9yZGVybGVzc1xuICAgICAgICAgIGNsYXNzPVwiaW5wdXQtYm9yZGVybGVzc1wiXG4gICAgICAgICAgOnJ1bGVzPVwiW1xuICAgICAgICAgICAgKHZhbCkgPT5cbiAgICAgICAgICAgICAgKHZhbCAmJiB2YWwubGVuZ3RoID4gMCkgfHwgdGhpcy4kdCgnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCcpLFxuICAgICAgICAgIF1cIlxuICAgICAgICA+XG4gICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDphcHBlbmQ+XG4gICAgICAgICAgICA8cS1pY29uXG4gICAgICAgICAgICAgIEBjbGljaz1cIlxuICAgICAgICAgICAgICAgIGZpZWxkX3R5cGUxID0gZmllbGRfdHlwZTEgPT0gJ3Bhc3N3b3JkJyA/ICd0ZXh0JyA6ICdwYXNzd29yZCdcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgOm5hbWU9XCJGaWVsZEljb24xXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJncmV5XCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvcS1pbnB1dD5cblxuICAgICAgICA8cS1idG5cbiAgICAgICAgICA6bG9hZGluZz1cImxvYWRpbmdcIlxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgIDpsYWJlbD1cIiR0KCdTaWduIFVwJylcIlxuICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5IHRleHQtd2hpdGVcIlxuICAgICAgICAgIGNsYXNzPVwiZnVsbC13aWR0aCB0ZXh0LXdlaWdodC1ib2xkXCJcbiAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAvPlxuICAgICAgPC9xLWZvcm0+XG4gICAgPC9kaXY+XG4gICAgPCEtLSBmdWxsIHdpZHRoIC0tPlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgQVBJaW50ZXJmYWNlIGZyb20gXCJzcmMvYXBpL0FQSWludGVyZmFjZVwiO1xuaW1wb3J0IGF1dGggZnJvbSBcInNyYy9hcGkvYXV0aFwiO1xuaW1wb3J0IHsgdXNlRGF0YVN0b3JlIH0gZnJvbSBcInN0b3Jlcy9EYXRhU3RvcmVcIjtcbmltcG9ydCB7IHVzZUNsaWVudFN0b3JlIH0gZnJvbSBcInN0b3Jlcy9DbGllbnRTdG9yZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiU2lnbnVwUGFnZVwiLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIGZpZWxkX3R5cGU6IFwicGFzc3dvcmRcIixcbiAgICAgIGZpZWxkX3R5cGUxOiBcInBhc3N3b3JkXCIsXG4gICAgICBmaXJzdF9uYW1lOiBcIlwiLFxuICAgICAgbGFzdF9uYW1lOiBcIlwiLFxuICAgICAgZW1haWxfYWRkcmVzczogXCJcIixcbiAgICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgICAgY3Bhc3N3b3JkOiBcIlwiLFxuICAgICAgbW9iaWxlX251bWJlcjogXCJcIixcbiAgICAgIG1vYmlsZV9wcmVmaXg6IFwiXCIsXG4gICAgICBvcHRpb25zOiBbXSxcbiAgICAgIGlubmVyX2xvYWRpbmc6IGZhbHNlLFxuICAgIH07XG4gIH0sXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IERhdGFTdG9yZSA9IHVzZURhdGFTdG9yZSgpO1xuICAgIGNvbnN0IENsaWVudFN0b3JlID0gdXNlQ2xpZW50U3RvcmUoKTtcbiAgICByZXR1cm4geyBEYXRhU3RvcmUsIENsaWVudFN0b3JlIH07XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgRmllbGRJY29uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZmllbGRfdHlwZSA9PT0gXCJwYXNzd29yZFwiXG4gICAgICAgID8gXCJldmEtZXllLW91dGxpbmVcIlxuICAgICAgICA6IFwiZXZhLWV5ZS1vZmYtb3V0bGluZVwiO1xuICAgIH0sXG4gICAgRmllbGRJY29uMSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmZpZWxkX3R5cGUxID09PSBcInBhc3N3b3JkXCJcbiAgICAgICAgPyBcImV2YS1leWUtb3V0bGluZVwiXG4gICAgICAgIDogXCJldmEtZXllLW9mZi1vdXRsaW5lXCI7XG4gICAgfSxcbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBEYXRhU3RvcmU6IHtcbiAgICAgIGltbWVkaWF0ZTogdHJ1ZSxcbiAgICAgIGRlZXA6IHRydWUsXG4gICAgICBoYW5kbGVyKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMobmV3VmFsdWUucGhvbmVfZGVmYXVsdF9kYXRhKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhpcy5tb2JpbGVfcHJlZml4ID0gXCIrXCIgKyBuZXdWYWx1ZS5waG9uZV9kZWZhdWx0X2RhdGEucGhvbmVjb2RlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvblN1Ym1pdCgpIHtcbiAgICAgIGNvbnN0ICRkYXRhID0ge1xuICAgICAgICBmaXJzdF9uYW1lOiB0aGlzLmZpcnN0X25hbWUsXG4gICAgICAgIGxhc3RfbmFtZTogdGhpcy5sYXN0X25hbWUsXG4gICAgICAgIGVtYWlsX2FkZHJlc3M6IHRoaXMuZW1haWxfYWRkcmVzcyxcbiAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsXG4gICAgICAgIGNwYXNzd29yZDogdGhpcy5jcGFzc3dvcmQsXG4gICAgICAgIG1vYmlsZV9wcmVmaXg6IHRoaXMubW9iaWxlX3ByZWZpeCxcbiAgICAgICAgbW9iaWxlX251bWJlcjogdGhpcy5tb2JpbGVfbnVtYmVyLFxuICAgICAgICBsb2NhbF9pZDogQVBJaW50ZXJmYWNlLmdldFN0b3JhZ2UoXCJwbGFjZV9pZFwiKSxcbiAgICAgIH07XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgQVBJaW50ZXJmYWNlLnJlZ2lzdGVyVXNlcigkZGF0YSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YS5kZXRhaWxzLnZlcmlmeSkge1xuICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xuICAgICAgICAgICAgICBwYXRoOiBcIi9hY2NvdW50L3ZlcmlmeVwiLFxuICAgICAgICAgICAgICBxdWVyeTogeyB1dWlkOiBkYXRhLmRldGFpbHMudXVpZCwgbXNnOiBkYXRhLm1zZyB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGF1dGguc2V0VXNlcihkYXRhLmRldGFpbHMudXNlcl9kYXRhKTtcbiAgICAgICAgICAgIGF1dGguc2V0VG9rZW4oZGF0YS5kZXRhaWxzLnVzZXJfdG9rZW4pO1xuICAgICAgICAgICAgdGhpcy5DbGllbnRTdG9yZS51c2VyX3NldHRpbmdzID0gZGF0YS5kZXRhaWxzLnVzZXJfc2V0dGluZ3M7XG5cbiAgICAgICAgICAgIGNvbnN0ICRwbGFjZUlkID0gQVBJaW50ZXJmYWNlLmdldFN0b3JhZ2UoXCJwbGFjZV9pZFwiKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgJHBsYWNlSWQgIT09IFwidW5kZWZpbmVkXCIgJiYgJHBsYWNlSWQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goXCIvaG9tZVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKFwiL2xvY2F0aW9uXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJkYXJrXCIsIGVycm9yLCBudWxsLCB0aGlzLiRxKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfY3JlYXRlVk5vZGUiLCJfbm9ybWFsaXplQ2xhc3MiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyIsIl93aXRoQ3R4IiwiX2NyZWF0ZVRleHRWTm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQW9OQSxNQUFLLFlBQVU7QUFBQSxFQUNiLE1BQU07QUFBQSxFQUNOLE9BQU87QUFDTCxXQUFPO0FBQUEsTUFDTCxTQUFTO0FBQUEsTUFDVCxZQUFZO0FBQUEsTUFDWixhQUFhO0FBQUEsTUFDYixZQUFZO0FBQUEsTUFDWixXQUFXO0FBQUEsTUFDWCxlQUFlO0FBQUEsTUFDZixVQUFVO0FBQUEsTUFDVixXQUFXO0FBQUEsTUFDWCxlQUFlO0FBQUEsTUFDZixlQUFlO0FBQUEsTUFDZixTQUFTLENBQUU7QUFBQSxNQUNYLGVBQWU7QUFBQTtFQUVsQjtBQUFBLEVBQ0QsUUFBUTtBQUNOLFVBQU0sWUFBWTtBQUNsQixVQUFNLGNBQWM7QUFDcEIsV0FBTyxFQUFFLFdBQVc7RUFDckI7QUFBQSxFQUNELFVBQVU7QUFBQSxJQUNSLFlBQVk7QUFDVixhQUFPLEtBQUssZUFBZSxhQUN2QixvQkFDQTtBQUFBLElBQ0w7QUFBQSxJQUNELGFBQWE7QUFDWCxhQUFPLEtBQUssZ0JBQWdCLGFBQ3hCLG9CQUNBO0FBQUEsSUFDTDtBQUFBLEVBQ0Y7QUFBQSxFQUNELE9BQU87QUFBQSxJQUNMLFdBQVc7QUFBQSxNQUNULFdBQVc7QUFBQSxNQUNYLE1BQU07QUFBQSxNQUNOLFFBQVEsVUFBVSxVQUFVO0FBQzFCLFlBQUksT0FBTyxLQUFLLFNBQVMsa0JB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
