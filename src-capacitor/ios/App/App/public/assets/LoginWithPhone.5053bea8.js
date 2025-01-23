import { _ as _export_sfc, R as useDataStore, bC as config, m as APIinterface, aw as auth, p as openBlock, V as createElementBlock, f as createVNode, t as withCtx, a7 as normalizeClass, F as Fragment, Y as QBtn, U as createBaseVNode, Z as toDisplayString, aY as QInput, ac as QItem, bg as normalizeProps, bh as guardReactiveProps, ad as QItemSection, a6 as createTextVNode, at as QIcon, bD as QCheckbox } from "./index.61ed5618.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QImg } from "./QImg.6c27044c.js";
import { Q as QItemLabel } from "./QItemLabel.a9365c5b.js";
import { Q as QSelect } from "./QSelect.311187d6.js";
import { Q as QForm } from "./QForm.7ded9d38.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import "./QResizeObserver.d08dce3c.js";
import "./QChip.f183a4f1.js";
import "./QMenu.8e482cd8.js";
import "./selection.50b4cb0c.js";
import "./rtl.f3ed811c.js";
import "./format.7f7370d3.js";
const _sfc_main = {
  name: "LoginPage",
  data() {
    return {
      mobile_number: "",
      mobile_prefix: "",
      password: "",
      field_type: "password",
      loading: false,
      redirect: "",
      google_client_id: "",
      facebook_app_id: "",
      remember: false,
      dont_have_account: this.$t("Don't have an account?")
    };
  },
  components: {},
  setup() {
    const DataStore = useDataStore();
    return { DataStore };
  },
  mounted() {
    this.redirect = this.$route.query.redirect;
    this.google_client_id = config.google_client_id;
    this.facebook_app_id = config.facebook_app_id;
  },
  computed: {
    FieldIcon() {
      return this.field_type === "password" ? "eva-eye-outline" : "eva-eye-off-outline";
    },
    hasSocialLogin() {
      if (!APIinterface.empty(this.google_client_id)) {
        return true;
      }
      if (!APIinterface.empty(this.facebook_app_id)) {
        return true;
      }
      return false;
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
      this.loading = true;
      APIinterface.fetchData("userLoginPhone", {
        mobile_prefix: this.mobile_prefix,
        mobile_number: this.mobile_number,
        password: this.password,
        local_id: APIinterface.getStorage("place_id")
      }).then((data) => {
        APIinterface.notify("light-green", data.msg, "check_circle", this.$q);
        auth.setUser(data.details.user_data);
        auth.setToken(data.details.user_token);
        auth.setStorage("user_settings", data.details.user_settings);
        const $placeId = APIinterface.getStorage("place_id");
        if (typeof $placeId !== "undefined" && $placeId !== null) {
          if (typeof this.redirect !== "undefined" && this.redirect !== null) {
            this.$router.push(this.redirect);
          } else {
            this.$router.push("/home");
          }
        } else {
          this.$router.push("/location");
        }
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data) => {
        this.loading = false;
      });
    }
  }
};
const _hoisted_1 = /* @__PURE__ */ createTextVNode("Sigin With Phone");
const _hoisted_2 = { class: "full-width q-pa-md" };
const _hoisted_3 = { class: "text-weight-bold" };
const _hoisted_4 = { class: "text-weight-medium q-ma-none" };
const _hoisted_5 = { class: "row" };
const _hoisted_6 = { class: "col" };
const _hoisted_7 = { class: "col text-right" };
const _hoisted_8 = { class: "text-center q-pa-sm" };
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
                _hoisted_1
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
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("h5", _hoisted_3, toDisplayString(_ctx.$t("Let's Sign You In")), 1),
          createBaseVNode("p", _hoisted_4, toDisplayString(_ctx.$t("Enter your phone number and password for sigin.")), 1),
          createVNode(QBtn, {
            flat: "",
            label: $data.dont_have_account,
            "no-caps": "",
            class: "q-pa-none text-weight-bold min-height q-mb-md",
            color: "secondary",
            to: "/user/signup"
          }, null, 8, ["label"]),
          createVNode(QForm, { onSubmit: $options.onSubmit }, {
            default: withCtx(() => [
              createVNode(QInput, {
                modelValue: $data.mobile_number,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.mobile_number = $event),
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
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.mobile_prefix = $event),
                    options: $setup.DataStore.phone_prefix_data,
                    onFilter: _ctx.filterFn,
                    behavior: "dialog",
                    "input-debounce": "700",
                    style: { "border": "none" },
                    "emit-value": "",
                    borderless: "",
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
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.password = $event),
                type: $data.field_type,
                outlined: "",
                "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
                "label-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                borderless: "",
                class: "input-borderless",
                label: _ctx.$t("Password"),
                "lazy-rules": "",
                rules: [
                  (val) => val && val.length > 0 || this.$t("This field is required")
                ]
              }, {
                append: withCtx(() => [
                  createVNode(QIcon, {
                    onClick: _cache[3] || (_cache[3] = ($event) => $data.field_type = $data.field_type == "password" ? "text" : "password"),
                    name: $options.FieldIcon,
                    color: "grey",
                    class: "cursor-pointer"
                  }, null, 8, ["name"])
                ]),
                _: 1
              }, 8, ["modelValue", "type", "bg-color", "label-color", "label", "rules"]),
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("div", _hoisted_6, [
                  createVNode(QCheckbox, {
                    dense: "",
                    modelValue: $data.remember,
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.remember = $event),
                    label: _ctx.$t("Remember Me"),
                    color: "primary"
                  }, null, 8, ["modelValue", "label"])
                ]),
                createBaseVNode("div", _hoisted_7, [
                  createVNode(QBtn, {
                    flat: "",
                    label: _ctx.$t("Forgot Password?"),
                    "no-caps": "",
                    class: "q-pa-none text-weight-bold min-height q-mb-md",
                    color: "secondary",
                    to: "/user/forgotpass"
                  }, null, 8, ["label"])
                ])
              ]),
              createVNode(QBtn, {
                loading: $data.loading,
                type: "submit",
                label: _ctx.$t("Sign In"),
                unelevated: "",
                "no-caps": "",
                color: "primary text-white",
                class: "full-width text-weight-bold",
                size: "lg"
              }, null, 8, ["loading", "label"]),
              createBaseVNode("div", _hoisted_8, [
                createVNode(QBtn, {
                  flat: "",
                  label: _ctx.$t("Continue as guest"),
                  "no-caps": "",
                  class: "q-pa-none text-weight-bold min-height",
                  color: "secondary",
                  to: "/home",
                  replace: ""
                }, null, 8, ["label"])
              ])
            ]),
            _: 1
          }, 8, ["onSubmit"])
        ])
      ]),
      _: 1
    })
  ], 64);
}
var LoginWithPhone = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "LoginWithPhone.vue"]]);
export { LoginWithPhone as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5XaXRoUGhvbmUuNTA1M2JlYTguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9Vc2VyL0xvZ2luV2l0aFBob25lLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLWhlYWRlclxuICAgIHJldmVhbFxuICAgIHJldmVhbC1vZmZzZXQ9XCI1MFwiXG4gICAgOmNsYXNzPVwie1xuICAgICAgJ2JnLW15ZGFyayB0ZXh0LXdoaXRlJzogJHEuZGFyay5tb2RlLFxuICAgICAgJ2JnLXdoaXRlIHRleHQtZGFyayc6ICEkcS5kYXJrLm1vZGUsXG4gICAgfVwiXG4gID5cbiAgICA8cS10b29sYmFyPlxuICAgICAgPHEtYnRuXG4gICAgICAgIEBjbGljaz1cIiRyb3V0ZXIuYmFjaygpXCJcbiAgICAgICAgZmxhdFxuICAgICAgICByb3VuZFxuICAgICAgICBkZW5zZVxuICAgICAgICBpY29uPVwibGFzIGxhLWFuZ2xlLWxlZnRcIlxuICAgICAgICBjbGFzcz1cInEtbXItc21cIlxuICAgICAgICA6Y29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnd2hpdGUnIDogJ2RhcmsnXCJcbiAgICAgIC8+XG4gICAgICA8cS10b29sYmFyLXRpdGxlIGNsYXNzPVwidGV4dC13ZWlnaHQtYm9sZFwiXG4gICAgICAgID5TaWdpbiBXaXRoIFBob25lPC9xLXRvb2xiYXItdGl0bGVcbiAgICAgID5cbiAgICA8L3EtdG9vbGJhcj5cbiAgPC9xLWhlYWRlcj5cbiAgPHEtcGFnZSBwYWRkaW5nIGNsYXNzPVwiZmxleCBmbGV4LWNlbnRlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJmdWxsLXdpZHRoIHEtcGEtbWRcIj5cbiAgICAgIDxoNSBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGRcIj57eyAkdChcIkxldCdzIFNpZ24gWW91IEluXCIpIH19PC9oNT5cbiAgICAgIDxwIGNsYXNzPVwidGV4dC13ZWlnaHQtbWVkaXVtIHEtbWEtbm9uZVwiPlxuICAgICAgICB7eyAkdChcIkVudGVyIHlvdXIgcGhvbmUgbnVtYmVyIGFuZCBwYXNzd29yZCBmb3Igc2lnaW4uXCIpIH19XG4gICAgICA8L3A+XG4gICAgICA8cS1idG5cbiAgICAgICAgZmxhdFxuICAgICAgICA6bGFiZWw9XCJkb250X2hhdmVfYWNjb3VudFwiXG4gICAgICAgIG5vLWNhcHNcbiAgICAgICAgY2xhc3M9XCJxLXBhLW5vbmUgdGV4dC13ZWlnaHQtYm9sZCBtaW4taGVpZ2h0IHEtbWItbWRcIlxuICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgIHRvPVwiL3VzZXIvc2lnbnVwXCJcbiAgICAgIC8+XG5cbiAgICAgIDxxLWZvcm0gQHN1Ym1pdD1cIm9uU3VibWl0XCI+XG4gICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgdi1tb2RlbD1cIm1vYmlsZV9udW1iZXJcIlxuICAgICAgICAgIG1hc2s9XCIjIyMjIyMjIyMjIyMjI1wiXG4gICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICBsYXp5LXJ1bGVzXG4gICAgICAgICAgOmJnLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXk2MDAnIDogJ2lucHV0J1wiXG4gICAgICAgICAgOmxhYmVsLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXkzMDAnIDogJ2dyZXknXCJcbiAgICAgICAgICBib3JkZXJsZXNzXG4gICAgICAgICAgY2xhc3M9XCJpbnB1dC1ib3JkZXJsZXNzXCJcbiAgICAgICAgICA6cnVsZXM9XCJbXG4gICAgICAgICAgICAodmFsKSA9PlxuICAgICAgICAgICAgICAodmFsICYmIHZhbC5sZW5ndGggPiAwKSB8fCB0aGlzLiR0KCdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJyksXG4gICAgICAgICAgXVwiXG4gICAgICAgID5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OnByZXBlbmQ+XG4gICAgICAgICAgICA8cS1zZWxlY3RcbiAgICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgICAgdi1tb2RlbD1cIm1vYmlsZV9wcmVmaXhcIlxuICAgICAgICAgICAgICA6b3B0aW9ucz1cIkRhdGFTdG9yZS5waG9uZV9wcmVmaXhfZGF0YVwiXG4gICAgICAgICAgICAgIEBmaWx0ZXI9XCJmaWx0ZXJGblwiXG4gICAgICAgICAgICAgIGJlaGF2aW9yPVwiZGlhbG9nXCJcbiAgICAgICAgICAgICAgaW5wdXQtZGVib3VuY2U9XCI3MDBcIlxuICAgICAgICAgICAgICBzdHlsZT1cImJvcmRlcjogbm9uZVwiXG4gICAgICAgICAgICAgIGVtaXQtdmFsdWVcbiAgICAgICAgICAgICAgYm9yZGVybGVzc1xuICAgICAgICAgICAgICBjbGFzcz1cIm15cS1maWVsZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6b3B0aW9uPVwieyBpdGVtUHJvcHMsIG9wdCB9XCI+XG4gICAgICAgICAgICAgICAgPHEtaXRlbSB2LWJpbmQ9XCJpdGVtUHJvcHNcIj5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgIDxxLWltZ1xuICAgICAgICAgICAgICAgICAgICAgIDpzcmM9XCJvcHQuZmxhZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDE1cHg7IG1heC13aWR0aDogMjBweFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsPnt7IG9wdC5sYWJlbCB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpuby1vcHRpb24+XG4gICAgICAgICAgICAgICAgPHEtaXRlbT5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBjbGFzcz1cInRleHQtZ3JleVwiPlxuICAgICAgICAgICAgICAgICAgICB7eyAkdChcIk5vIHJlc3VsdHNcIikgfX1cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3Etc2VsZWN0PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvcS1pbnB1dD5cblxuICAgICAgICA8cS1pbnB1dFxuICAgICAgICAgIHYtbW9kZWw9XCJwYXNzd29yZFwiXG4gICAgICAgICAgOnR5cGU9XCJmaWVsZF90eXBlXCJcbiAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgIDpiZy1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5NjAwJyA6ICdpbnB1dCdcIlxuICAgICAgICAgIDpsYWJlbC1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICdncmV5J1wiXG4gICAgICAgICAgYm9yZGVybGVzc1xuICAgICAgICAgIGNsYXNzPVwiaW5wdXQtYm9yZGVybGVzc1wiXG4gICAgICAgICAgOmxhYmVsPVwiJHQoJ1Bhc3N3b3JkJylcIlxuICAgICAgICAgIGxhenktcnVsZXNcbiAgICAgICAgICA6cnVsZXM9XCJbXG4gICAgICAgICAgICAodmFsKSA9PlxuICAgICAgICAgICAgICAodmFsICYmIHZhbC5sZW5ndGggPiAwKSB8fCB0aGlzLiR0KCdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJyksXG4gICAgICAgICAgXVwiXG4gICAgICAgID5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmFwcGVuZD5cbiAgICAgICAgICAgIDxxLWljb25cbiAgICAgICAgICAgICAgQGNsaWNrPVwiXG4gICAgICAgICAgICAgICAgZmllbGRfdHlwZSA9IGZpZWxkX3R5cGUgPT0gJ3Bhc3N3b3JkJyA/ICd0ZXh0JyA6ICdwYXNzd29yZCdcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgOm5hbWU9XCJGaWVsZEljb25cIlxuICAgICAgICAgICAgICBjb2xvcj1cImdyZXlcIlxuICAgICAgICAgICAgICBjbGFzcz1cImN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9xLWlucHV0PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICA8cS1jaGVja2JveFxuICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICB2LW1vZGVsPVwicmVtZW1iZXJcIlxuICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnUmVtZW1iZXIgTWUnKVwiXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ0ZvcmdvdCBQYXNzd29yZD8nKVwiXG4gICAgICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICAgICAgY2xhc3M9XCJxLXBhLW5vbmUgdGV4dC13ZWlnaHQtYm9sZCBtaW4taGVpZ2h0IHEtbWItbWRcIlxuICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgIHRvPVwiL3VzZXIvZm9yZ290cGFzc1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPCEtLSByb3cgLS0+XG5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgOmxvYWRpbmc9XCJsb2FkaW5nXCJcbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICA6bGFiZWw9XCIkdCgnU2lnbiBJbicpXCJcbiAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeSB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICBjbGFzcz1cImZ1bGwtd2lkdGggdGV4dC13ZWlnaHQtYm9sZFwiXG4gICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIHEtcGEtc21cIj5cbiAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdDb250aW51ZSBhcyBndWVzdCcpXCJcbiAgICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICAgIGNsYXNzPVwicS1wYS1ub25lIHRleHQtd2VpZ2h0LWJvbGQgbWluLWhlaWdodFwiXG4gICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICB0bz1cIi9ob21lXCJcbiAgICAgICAgICAgIHJlcGxhY2VcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvcS1mb3JtPlxuICAgIDwvZGl2PlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBkZWZpbmVBc3luY0NvbXBvbmVudCB9IGZyb20gXCJ2dWVcIjtcbmltcG9ydCBBUElpbnRlcmZhY2UgZnJvbSBcInNyYy9hcGkvQVBJaW50ZXJmYWNlXCI7XG5pbXBvcnQgYXV0aCBmcm9tIFwic3JjL2FwaS9hdXRoXCI7XG5pbXBvcnQgY29uZmlnIGZyb20gXCJzcmMvYXBpL2NvbmZpZ1wiO1xuaW1wb3J0IHsgdXNlRGF0YVN0b3JlIH0gZnJvbSBcInN0b3Jlcy9EYXRhU3RvcmVcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIkxvZ2luUGFnZVwiLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBtb2JpbGVfbnVtYmVyOiBcIlwiLFxuICAgICAgbW9iaWxlX3ByZWZpeDogXCJcIixcbiAgICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgICAgZmllbGRfdHlwZTogXCJwYXNzd29yZFwiLFxuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICByZWRpcmVjdDogXCJcIixcbiAgICAgIGdvb2dsZV9jbGllbnRfaWQ6IFwiXCIsXG4gICAgICBmYWNlYm9va19hcHBfaWQ6IFwiXCIsXG4gICAgICByZW1lbWJlcjogZmFsc2UsXG4gICAgICBkb250X2hhdmVfYWNjb3VudDogdGhpcy4kdChcIkRvbid0IGhhdmUgYW4gYWNjb3VudD9cIiksXG4gICAgfTtcbiAgfSxcbiAgY29tcG9uZW50czoge30sXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IERhdGFTdG9yZSA9IHVzZURhdGFTdG9yZSgpO1xuICAgIHJldHVybiB7IERhdGFTdG9yZSB9O1xuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMucmVkaXJlY3QgPSB0aGlzLiRyb3V0ZS5xdWVyeS5yZWRpcmVjdDtcbiAgICB0aGlzLmdvb2dsZV9jbGllbnRfaWQgPSBjb25maWcuZ29vZ2xlX2NsaWVudF9pZDtcbiAgICB0aGlzLmZhY2Vib29rX2FwcF9pZCA9IGNvbmZpZy5mYWNlYm9va19hcHBfaWQ7XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgRmllbGRJY29uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZmllbGRfdHlwZSA9PT0gXCJwYXNzd29yZFwiXG4gICAgICAgID8gXCJldmEtZXllLW91dGxpbmVcIlxuICAgICAgICA6IFwiZXZhLWV5ZS1vZmYtb3V0bGluZVwiO1xuICAgIH0sXG4gICAgaGFzU29jaWFsTG9naW4oKSB7XG4gICAgICBpZiAoIUFQSWludGVyZmFjZS5lbXB0eSh0aGlzLmdvb2dsZV9jbGllbnRfaWQpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKCFBUElpbnRlcmZhY2UuZW1wdHkodGhpcy5mYWNlYm9va19hcHBfaWQpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgRGF0YVN0b3JlOiB7XG4gICAgICBpbW1lZGlhdGU6IHRydWUsXG4gICAgICBkZWVwOiB0cnVlLFxuICAgICAgaGFuZGxlcihuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKG5ld1ZhbHVlLnBob25lX2RlZmF1bHRfZGF0YSkubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRoaXMubW9iaWxlX3ByZWZpeCA9IFwiK1wiICsgbmV3VmFsdWUucGhvbmVfZGVmYXVsdF9kYXRhLnBob25lY29kZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25TdWJtaXQoKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgQVBJaW50ZXJmYWNlLmZldGNoRGF0YShcInVzZXJMb2dpblBob25lXCIsIHtcbiAgICAgICAgbW9iaWxlX3ByZWZpeDogdGhpcy5tb2JpbGVfcHJlZml4LFxuICAgICAgICBtb2JpbGVfbnVtYmVyOiB0aGlzLm1vYmlsZV9udW1iZXIsXG4gICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkLFxuICAgICAgICBsb2NhbF9pZDogQVBJaW50ZXJmYWNlLmdldFN0b3JhZ2UoXCJwbGFjZV9pZFwiKSxcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgQVBJaW50ZXJmYWNlLm5vdGlmeShcImxpZ2h0LWdyZWVuXCIsIGRhdGEubXNnLCBcImNoZWNrX2NpcmNsZVwiLCB0aGlzLiRxKTtcbiAgICAgICAgICBhdXRoLnNldFVzZXIoZGF0YS5kZXRhaWxzLnVzZXJfZGF0YSk7XG4gICAgICAgICAgYXV0aC5zZXRUb2tlbihkYXRhLmRldGFpbHMudXNlcl90b2tlbik7XG4gICAgICAgICAgYXV0aC5zZXRTdG9yYWdlKFwidXNlcl9zZXR0aW5nc1wiLCBkYXRhLmRldGFpbHMudXNlcl9zZXR0aW5ncyk7XG5cbiAgICAgICAgICBjb25zdCAkcGxhY2VJZCA9IEFQSWludGVyZmFjZS5nZXRTdG9yYWdlKFwicGxhY2VfaWRcIik7XG4gICAgICAgICAgaWYgKHR5cGVvZiAkcGxhY2VJZCAhPT0gXCJ1bmRlZmluZWRcIiAmJiAkcGxhY2VJZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICB0eXBlb2YgdGhpcy5yZWRpcmVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICAgICAgICB0aGlzLnJlZGlyZWN0ICE9PSBudWxsXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2godGhpcy5yZWRpcmVjdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaChcIi9ob21lXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaChcIi9sb2NhdGlvblwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBBUElpbnRlcmZhY2Uubm90aWZ5KFwiZGFya1wiLCBlcnJvciwgXCJlcnJvclwiLCB0aGlzLiRxKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfY3JlYXRlVk5vZGUiLCJfbm9ybWFsaXplQ2xhc3MiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyIsIl93aXRoQ3R4IiwiX2NyZWF0ZVRleHRWTm9k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
