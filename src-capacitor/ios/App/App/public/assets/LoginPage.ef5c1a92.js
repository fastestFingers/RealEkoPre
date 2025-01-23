import { _ as _export_sfc, S as useDataStorePersisted, R as useDataStore, l as defineAsyncComponent, bC as config, m as APIinterface, aw as auth, n as resolveComponent, p as openBlock, V as createElementBlock, f as createVNode, t as withCtx, a7 as normalizeClass, F as Fragment, Y as QBtn, a6 as createTextVNode, Z as toDisplayString, U as createBaseVNode, at as QIcon, bA as QToggle, aY as QInput, bD as QCheckbox, b2 as QSeparator, q as createBlock, aA as createCommentVNode, u as __vitePreload } from "./index.61ed5618.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QForm } from "./QForm.7ded9d38.js";
import { Q as QSpace } from "./QSpace.f164c087.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import { u as useClientStore } from "./ClientStore.327b1c8d.js";
import "./QResizeObserver.d08dce3c.js";
const _sfc_main = {
  name: "LoginPage",
  data() {
    return {
      username: "",
      password: "",
      field_type: "password",
      loading: false,
      redirect: "",
      google_client_id: "",
      facebook_app_id: "",
      remember: false,
      dont_have_account: this.$t("Don't have an account?"),
      rtl: false
    };
  },
  setup() {
    const ClientStore = useClientStore();
    const DataStorePersisted = useDataStorePersisted();
    const DataStore = useDataStore();
    return { ClientStore, DataStorePersisted, DataStore };
  },
  components: {
    GoogleLogin: defineAsyncComponent(
      () => __vitePreload(() => import("./GoogleLogin.e41602fe.js"), true ? ["assets/GoogleLogin.e41602fe.js","assets/index.61ed5618.js","assets/index.dbee30c0.css"] : void 0)
    ),
    FacebookLogin: defineAsyncComponent(
      () => __vitePreload(() => import("./FacebookLogin.ca35eb2f.js"), true ? ["assets/FacebookLogin.ca35eb2f.js","assets/index.61ed5618.js","assets/index.dbee30c0.css"] : void 0)
    )
  },
  created() {
    this.rtl = this.DataStorePersisted.rtl;
  },
  mounted() {
    this.redirect = this.$route.query.redirect;
    this.google_client_id = config.google_client_id;
    this.facebook_app_id = config.facebook_app_id;
  },
  watch: {
    rtl(newval, oldval) {
      this.DataStorePersisted.rtl = newval;
      this.$q.lang.set({ rtl: newval });
    }
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
    },
    getRTLMode() {
      if (this.rtl) {
        return "format_textdirection_l_to_r";
      }
      return "format_textdirection_r_to_l";
    }
  },
  methods: {
    onSubmit() {
      this.loading = true;
      APIinterface.userLogin({
        username: this.username,
        password: this.password,
        local_id: APIinterface.getStorage("place_id")
      }).then((data) => {
        APIinterface.notify("light-green", data.msg, "check_circle", this.$q);
        auth.setUser(data.details.user_data);
        auth.setToken(data.details.user_token);
        this.ClientStore.user_settings = data.details.user_settings;
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
    },
    afterLogin(data) {
      data.place_id = APIinterface.getStorage("place_id");
      APIinterface.socialRegistration(data).then((data2) => {
        let $completeRegistration = false;
        if (!APIinterface.empty(data2.details.complete_registration)) {
          $completeRegistration = data2.details.complete_registration;
        }
        if (data2.details.verification === "1") {
          this.$router.push({
            path: "/account/verify",
            query: { uuid: data2.details.uuid, msg: data2.msg }
          });
        } else {
          console.debug("=>" + $completeRegistration);
          if ($completeRegistration) {
            this.$router.push({
              path: "/account/complete-registration",
              query: { uuid: data2.details.uuid }
            });
          } else {
            APIinterface.notify("dark", data2.msg, "check_circle", this.$q);
            auth.setUser(data2.details.user_data);
            auth.setToken(data2.details.user_token);
            this.ClientStore.user_settings = data2.details.user_settings;
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
          }
        }
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data2) => {
      });
    }
  }
};
const _hoisted_1 = { class: "full-width q-pa-md" };
const _hoisted_2 = { class: "text-weight-bold" };
const _hoisted_3 = { class: "text-weight-medium q-ma-none" };
const _hoisted_4 = { class: "row" };
const _hoisted_5 = { class: "col" };
const _hoisted_6 = { class: "col text-right" };
const _hoisted_7 = { class: "text-center q-pt-md q-pb-sm" };
const _hoisted_8 = { class: "social-login" };
const _hoisted_9 = { class: "relative-position q-mb-lg q-mt-md" };
const _hoisted_10 = { class: "row justify-between full-width" };
const _hoisted_11 = { class: "col text-left text-white" };
const _hoisted_12 = { class: "col-1 text-right text-white" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FacebookLogin = resolveComponent("FacebookLogin");
  const _component_GoogleLogin = resolveComponent("GoogleLogin");
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
                createTextVNode(toDisplayString(_ctx.$t("Sigin In")), 1)
              ]),
              _: 1
            }),
            createBaseVNode("div", null, [
              createVNode(QIcon, {
                name: $options.getRTLMode,
                size: "sm"
              }, null, 8, ["name"]),
              createVNode(QToggle, {
                modelValue: $data.rtl,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.rtl = $event),
                color: "primary"
              }, null, 8, ["modelValue"])
            ]),
            createVNode(QBtn, {
              flat: "",
              round: "",
              dense: "",
              class: "q-mr-sm",
              color: _ctx.$q.dark.mode ? "white" : "dark",
              label: _ctx.$t("Skip"),
              "no-caps": "",
              to: "/home"
            }, null, 8, ["color", "label"])
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
          createBaseVNode("h5", _hoisted_2, toDisplayString(_ctx.$t("Let's Sign You In")), 1),
          createBaseVNode("p", _hoisted_3, toDisplayString(_ctx.$t("Enter your username and password for sigin.")), 1),
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
                modelValue: $data.username,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.username = $event),
                label: _ctx.$t("Email"),
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
              createBaseVNode("div", _hoisted_4, [
                createBaseVNode("div", _hoisted_5, [
                  createVNode(QCheckbox, {
                    dense: "",
                    modelValue: $data.remember,
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.remember = $event),
                    label: _ctx.$t("Remember Me"),
                    color: "primary"
                  }, null, 8, ["modelValue", "label"])
                ]),
                createBaseVNode("div", _hoisted_6, [
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
              createBaseVNode("div", _hoisted_7, [
                createVNode(QBtn, {
                  flat: "",
                  label: _ctx.$t("Continue as guest"),
                  "no-caps": "",
                  class: "q-pa-none text-weight-bold min-height",
                  color: "secondary",
                  to: { path: "/user/guest", query: { redirect: this.redirect } },
                  size: "md"
                }, null, 8, ["label", "to"])
              ])
            ]),
            _: 1
          }, 8, ["onSubmit"]),
          createBaseVNode("div", _hoisted_8, [
            createBaseVNode("div", _hoisted_9, [
              createVNode(QSeparator, {
                spaced: "",
                labe: ""
              }),
              createBaseVNode("div", {
                class: normalizeClass(["absolute-center q-pl-sm q-pr-sm", {
                  "bg-mydark text-grey300": _ctx.$q.dark.mode,
                  "bg-white text-black": !_ctx.$q.dark.mode
                }])
              }, toDisplayString(_ctx.$t("Or")), 3)
            ]),
            createVNode(QBtn, {
              unelevated: "",
              "no-caps": "",
              color: "primary",
              class: "full-width text-weight-bold",
              size: "lg",
              to: "/user/login-phone"
            }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_10, [
                  createBaseVNode("div", _hoisted_11, toDisplayString(_ctx.$t("Continue with Phone")), 1),
                  createBaseVNode("div", _hoisted_12, [
                    createVNode(QIcon, { name: "las la-phone" })
                  ])
                ])
              ]),
              _: 1
            }),
            createVNode(QSpace, { class: "q-pa-sm" }),
            $setup.DataStore.fb_flag ? (openBlock(), createBlock(_component_FacebookLogin, {
              key: 0,
              ref: "facebook_login",
              app_id: $data.facebook_app_id,
              onAfterLogin: $options.afterLogin
            }, null, 8, ["app_id", "onAfterLogin"])) : createCommentVNode("", true),
            createVNode(QSpace, { class: "q-pa-sm" }),
            $setup.DataStore.google_login_enabled ? (openBlock(), createBlock(_component_GoogleLogin, {
              key: 1,
              client_id: $data.google_client_id,
              ref: "google_login",
              onAfterLogin: $options.afterLogin
            }, null, 8, ["client_id", "onAfterLogin"])) : createCommentVNode("", true)
          ])
        ])
      ]),
      _: 1
    })
  ], 64);
}
var LoginPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "LoginPage.vue"]]);
export { LoginPage as default };
//# sourceMappingURL=data:application/json;base64,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QkFBTztBQUFBO2NBQ3BCRSxnQkFRTTtBQUFBLGdCQVBKLHVCQUFNLG1DQUFpQztBQUFBLDRDQUNXLEtBQUUsR0FBQyxLQUFLO0FBQUEsMENBQTRDLEtBQUUsR0FBQyxLQUFLO0FBQUE7aUNBSzNHLEtBQUU7QUFBQTtZQUlURixZQWdCUTtBQUFBLGNBZk47QUFBQSxjQUNBO0FBQUEsY0FDQSxPQUFNO0FBQUEsY0FDTixPQUFNO0FBQUEsY0FDTixNQUFLO0FBQUEsY0FDTCxJQUFHO0FBQUE7K0JBRUgsTUFPTTtBQUFBLGdCQVBORSxnQkFPTSxPQVBOLGFBT007QUFBQSxrQkFOSkEsZ0JBRU0sT0FGTixhQUVNQyxnQkFERCxLQUFFO0FBQUEsa0JBRVBELGdCQUVNLE9BRk4sYUFFTTtBQUFBLG9CQURKRixZQUE4Qiw4QkFBSDtBQUFBOzs7OztZQUlqQ0EsWUFBbUMsMkJBQXJCO0FBQUEsWUFFRSxpQkFBVSx3QkFDeEJJLFlBSUU7QUFBQTtjQUhBLEtBQUk7QUFBQSxjQUNILFFBQVEsTUFBZTtBQUFBLGNBQ3ZCLGNBQWEsU0FBVTtBQUFBO1lBRzVCSixZQUFtQywyQkFBckI7QUFBQSxZQUVFLGlCQUFVLHFDQUN4QkksWUFJRTtBQUFBO2NBSEMsV0FBVyxNQUFnQjtBQUFBLGNBQzVCLEtBQUk7QUFBQSxjQUNILGNBQWEsU0FBVTtBQUFBIiwibmFtZXMiOlsiZGF0YSIsIl9jcmVhdGVWTm9kZSIsIl9ub3JtYWxpemVDbGFzcyIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX2NyZWF0ZUJsb2NrIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhZ2VzL1VzZXIvTG9naW5QYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLWhlYWRlclxuICAgIHJldmVhbFxuICAgIHJldmVhbC1vZmZzZXQ9XCI1MFwiXG4gICAgOmNsYXNzPVwie1xuICAgICAgJ2JnLW15ZGFyayB0ZXh0LXdoaXRlJzogJHEuZGFyay5tb2RlLFxuICAgICAgJ2JnLXdoaXRlIHRleHQtZGFyayc6ICEkcS5kYXJrLm1vZGUsXG4gICAgfVwiXG4gID5cbiAgICA8cS10b29sYmFyPlxuICAgICAgPHEtYnRuXG4gICAgICAgIEBjbGljaz1cIiRyb3V0ZXIuYmFjaygpXCJcbiAgICAgICAgZmxhdFxuICAgICAgICByb3VuZFxuICAgICAgICBkZW5zZVxuICAgICAgICBpY29uPVwibGFzIGxhLWFuZ2xlLWxlZnRcIlxuICAgICAgICBjbGFzcz1cInEtbXItc21cIlxuICAgICAgICA6Y29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnd2hpdGUnIDogJ2RhcmsnXCJcbiAgICAgIC8+XG4gICAgICA8cS10b29sYmFyLXRpdGxlIGNsYXNzPVwidGV4dC13ZWlnaHQtYm9sZFwiPnt7XG4gICAgICAgICR0KFwiU2lnaW4gSW5cIilcbiAgICAgIH19PC9xLXRvb2xiYXItdGl0bGU+XG4gICAgICA8ZGl2PlxuICAgICAgICA8cS1pY29uIDpuYW1lPVwiZ2V0UlRMTW9kZVwiIHNpemU9XCJzbVwiIC8+XG4gICAgICAgIDxxLXRvZ2dsZSB2LW1vZGVsPVwicnRsXCIgY29sb3I9XCJwcmltYXJ5XCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHEtYnRuXG4gICAgICAgIGZsYXRcbiAgICAgICAgcm91bmRcbiAgICAgICAgZGVuc2VcbiAgICAgICAgY2xhc3M9XCJxLW1yLXNtXCJcbiAgICAgICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ3doaXRlJyA6ICdkYXJrJ1wiXG4gICAgICAgIDpsYWJlbD1cIiR0KCdTa2lwJylcIlxuICAgICAgICBuby1jYXBzXG4gICAgICAgIHRvPVwiL2hvbWVcIlxuICAgICAgLz5cbiAgICA8L3EtdG9vbGJhcj5cbiAgPC9xLWhlYWRlcj5cbiAgPHEtcGFnZSBwYWRkaW5nIGNsYXNzPVwiZmxleCBmbGV4LWNlbnRlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJmdWxsLXdpZHRoIHEtcGEtbWRcIj5cbiAgICAgIDxoNSBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGRcIj57eyAkdChcIkxldCdzIFNpZ24gWW91IEluXCIpIH19PC9oNT5cbiAgICAgIDxwIGNsYXNzPVwidGV4dC13ZWlnaHQtbWVkaXVtIHEtbWEtbm9uZVwiPlxuICAgICAgICB7eyAkdChcIkVudGVyIHlvdXIgdXNlcm5hbWUgYW5kIHBhc3N3b3JkIGZvciBzaWdpbi5cIikgfX1cbiAgICAgIDwvcD5cbiAgICAgIDxxLWJ0blxuICAgICAgICBmbGF0XG4gICAgICAgIDpsYWJlbD1cImRvbnRfaGF2ZV9hY2NvdW50XCJcbiAgICAgICAgbm8tY2Fwc1xuICAgICAgICBjbGFzcz1cInEtcGEtbm9uZSB0ZXh0LXdlaWdodC1ib2xkIG1pbi1oZWlnaHQgcS1tYi1tZFwiXG4gICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgdG89XCIvdXNlci9zaWdudXBcIlxuICAgICAgLz5cblxuICAgICAgPHEtZm9ybSBAc3VibWl0PVwib25TdWJtaXRcIj5cbiAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICB2LW1vZGVsPVwidXNlcm5hbWVcIlxuICAgICAgICAgIDpsYWJlbD1cIiR0KCdFbWFpbCcpXCJcbiAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgIGxhenktcnVsZXNcbiAgICAgICAgICA6YmctY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTYwMCcgOiAnaW5wdXQnXCJcbiAgICAgICAgICA6bGFiZWwtY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTMwMCcgOiAnZ3JleSdcIlxuICAgICAgICAgIGJvcmRlcmxlc3NcbiAgICAgICAgICBjbGFzcz1cImlucHV0LWJvcmRlcmxlc3NcIlxuICAgICAgICAgIDpydWxlcz1cIltcbiAgICAgICAgICAgICh2YWwpID0+XG4gICAgICAgICAgICAgICh2YWwgJiYgdmFsLmxlbmd0aCA+IDApIHx8IHRoaXMuJHQoJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnKSxcbiAgICAgICAgICBdXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8cS1pbnB1dFxuICAgICAgICAgIHYtbW9kZWw9XCJwYXNzd29yZFwiXG4gICAgICAgICAgOnR5cGU9XCJmaWVsZF90eXBlXCJcbiAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgIDpiZy1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5NjAwJyA6ICdpbnB1dCdcIlxuICAgICAgICAgIDpsYWJlbC1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICdncmV5J1wiXG4gICAgICAgICAgYm9yZGVybGVzc1xuICAgICAgICAgIGNsYXNzPVwiaW5wdXQtYm9yZGVybGVzc1wiXG4gICAgICAgICAgOmxhYmVsPVwiJHQoJ1Bhc3N3b3JkJylcIlxuICAgICAgICAgIGxhenktcnVsZXNcbiAgICAgICAgICA6cnVsZXM9XCJbXG4gICAgICAgICAgICAodmFsKSA9PlxuICAgICAgICAgICAgICAodmFsICYmIHZhbC5sZW5ndGggPiAwKSB8fCB0aGlzLiR0KCdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJyksXG4gICAgICAgICAgXVwiXG4gICAgICAgID5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmFwcGVuZD5cbiAgICAgICAgICAgIDxxLWljb25cbiAgICAgICAgICAgICAgQGNsaWNrPVwiXG4gICAgICAgICAgICAgICAgZmllbGRfdHlwZSA9IGZpZWxkX3R5cGUgPT0gJ3Bhc3N3b3JkJyA/ICd0ZXh0JyA6ICdwYXNzd29yZCdcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgOm5hbWU9XCJGaWVsZEljb25cIlxuICAgICAgICAgICAgICBjb2xvcj1cImdyZXlcIlxuICAgICAgICAgICAgICBjbGFzcz1cImN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9xLWlucHV0PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICA8cS1jaGVja2JveFxuICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICB2LW1vZGVsPVwicmVtZW1iZXJcIlxuICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnUmVtZW1iZXIgTWUnKVwiXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ0ZvcmdvdCBQYXNzd29yZD8nKVwiXG4gICAgICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICAgICAgY2xhc3M9XCJxLXBhLW5vbmUgdGV4dC13ZWlnaHQtYm9sZCBtaW4taGVpZ2h0IHEtbWItbWRcIlxuICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgIHRvPVwiL3VzZXIvZm9yZ290cGFzc1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPCEtLSByb3cgLS0+XG5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgOmxvYWRpbmc9XCJsb2FkaW5nXCJcbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICA6bGFiZWw9XCIkdCgnU2lnbiBJbicpXCJcbiAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeSB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICBjbGFzcz1cImZ1bGwtd2lkdGggdGV4dC13ZWlnaHQtYm9sZFwiXG4gICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIHEtcHQtbWQgcS1wYi1zbVwiPlxuICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ0NvbnRpbnVlIGFzIGd1ZXN0JylcIlxuICAgICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgICAgY2xhc3M9XCJxLXBhLW5vbmUgdGV4dC13ZWlnaHQtYm9sZCBtaW4taGVpZ2h0XCJcbiAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIDp0bz1cInsgcGF0aDogJy91c2VyL2d1ZXN0JywgcXVlcnk6IHsgcmVkaXJlY3Q6IHRoaXMucmVkaXJlY3QgfSB9XCJcbiAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3EtZm9ybT5cblxuICAgICAgPGRpdiBjbGFzcz1cInNvY2lhbC1sb2dpblwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicmVsYXRpdmUtcG9zaXRpb24gcS1tYi1sZyBxLW10LW1kXCI+XG4gICAgICAgICAgPHEtc2VwYXJhdG9yIHNwYWNlZCBsYWJlIC8+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJhYnNvbHV0ZS1jZW50ZXIgcS1wbC1zbSBxLXByLXNtXCJcbiAgICAgICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICAgJ2JnLW15ZGFyayB0ZXh0LWdyZXkzMDAnOiAkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgICAgICdiZy13aGl0ZSB0ZXh0LWJsYWNrJzogISRxLmRhcmsubW9kZSxcbiAgICAgICAgICAgIH1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt7ICR0KFwiT3JcIikgfX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIGNsYXNzPVwiZnVsbC13aWR0aCB0ZXh0LXdlaWdodC1ib2xkXCJcbiAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgIHRvPVwiL3VzZXIvbG9naW4tcGhvbmVcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBqdXN0aWZ5LWJldHdlZW4gZnVsbC13aWR0aFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB0ZXh0LWxlZnQgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICB7eyAkdChcIkNvbnRpbnVlIHdpdGggUGhvbmVcIikgfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xIHRleHQtcmlnaHQgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICA8cS1pY29uIG5hbWU9XCJsYXMgbGEtcGhvbmVcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvcS1idG4+XG4gICAgICAgIDxxLXNwYWNlIGNsYXNzPVwicS1wYS1zbVwiPjwvcS1zcGFjZT5cblxuICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIkRhdGFTdG9yZS5mYl9mbGFnXCI+XG4gICAgICAgICAgPEZhY2Vib29rTG9naW5cbiAgICAgICAgICAgIHJlZj1cImZhY2Vib29rX2xvZ2luXCJcbiAgICAgICAgICAgIDphcHBfaWQ9XCJmYWNlYm9va19hcHBfaWRcIlxuICAgICAgICAgICAgQGFmdGVyLWxvZ2luPVwiYWZ0ZXJMb2dpblwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPHEtc3BhY2UgY2xhc3M9XCJxLXBhLXNtXCI+PC9xLXNwYWNlPlxuXG4gICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiRGF0YVN0b3JlLmdvb2dsZV9sb2dpbl9lbmFibGVkXCI+XG4gICAgICAgICAgPEdvb2dsZUxvZ2luXG4gICAgICAgICAgICA6Y2xpZW50X2lkPVwiZ29vZ2xlX2NsaWVudF9pZFwiXG4gICAgICAgICAgICByZWY9XCJnb29nbGVfbG9naW5cIlxuICAgICAgICAgICAgQGFmdGVyLWxvZ2luPVwiYWZ0ZXJMb2dpblwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPCEtLSBzb2NpYWwtbG9naW4gLS0+XG4gICAgPC9kaXY+XG4gIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IGRlZmluZUFzeW5jQ29tcG9uZW50IH0gZnJvbSBcInZ1ZVwiO1xuaW1wb3J0IEFQSWludGVyZmFjZSBmcm9tIFwic3JjL2FwaS9BUElpbnRlcmZhY2VcIjtcbmltcG9ydCBhdXRoIGZyb20gXCJzcmMvYXBpL2F1dGhcIjtcbmltcG9ydCBjb25maWcgZnJvbSBcInNyYy9hcGkvY29uZmlnXCI7XG5pbXBvcnQgeyB1c2VDbGllbnRTdG9yZSB9IGZyb20gXCJzdG9yZXMvQ2xpZW50U3RvcmVcIjtcbmltcG9ydCB7IHVzZURhdGFTdG9yZVBlcnNpc3RlZCB9IGZyb20gXCJzdG9yZXMvRGF0YVN0b3JlUGVyc2lzdGVkXCI7XG5pbXBvcnQgeyB1c2VEYXRhU3RvcmUgfSBmcm9tIFwic3RvcmVzL0RhdGFTdG9yZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiTG9naW5QYWdlXCIsXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZXJuYW1lOiBcIlwiLFxuICAgICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgICBmaWVsZF90eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIHJlZGlyZWN0OiBcIlwiLFxuICAgICAgZ29vZ2xlX2NsaWVudF9pZDogXCJcIixcbiAgICAgIGZhY2Vib29rX2FwcF9pZDogXCJcIixcbiAgICAgIHJlbWVtYmVyOiBmYWxzZSxcbiAgICAgIGRvbnRfaGF2ZV9hY2NvdW50OiB0aGlzLiR0KFwiRG9uJ3QgaGF2ZSBhbiBhY2NvdW50P1wiKSxcbiAgICAgIHJ0bDogZmFsc2UsXG4gICAgfTtcbiAgfSxcbiAgc2V0dXAoKSB7XG4gICAgY29uc3QgQ2xpZW50U3RvcmUgPSB1c2VDbGllbnRTdG9yZSgpO1xuICAgIGNvbnN0IERhdGFTdG9yZVBlcnNpc3RlZCA9IHVzZURhdGFTdG9yZVBlcnNpc3RlZCgpO1xuICAgIGNvbnN0IERhdGFTdG9yZSA9IHVzZURhdGFTdG9yZSgpO1xuICAgIHJldHVybiB7IENsaWVudFN0b3JlLCBEYXRhU3RvcmVQZXJzaXN0ZWQsIERhdGFTdG9yZSB9O1xuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgR29vZ2xlTG9naW46IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+XG4gICAgICBpbXBvcnQoXCJjb21wb25lbnRzL0dvb2dsZUxvZ2luLnZ1ZVwiKVxuICAgICksXG4gICAgRmFjZWJvb2tMb2dpbjogZGVmaW5lQXN5bmNDb21wb25lbnQoKCkgPT5cbiAgICAgIGltcG9ydChcImNvbXBvbmVudHMvRmFjZWJvb2tMb2dpbi52dWVcIilcbiAgICApLFxuICB9LFxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMucnRsID0gdGhpcy5EYXRhU3RvcmVQZXJzaXN0ZWQucnRsO1xuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMucmVkaXJlY3QgPSB0aGlzLiRyb3V0ZS5xdWVyeS5yZWRpcmVjdDtcbiAgICB0aGlzLmdvb2dsZV9jbGllbnRfaWQgPSBjb25maWcuZ29vZ2xlX2NsaWVudF9pZDtcbiAgICB0aGlzLmZhY2Vib29rX2FwcF9pZCA9IGNvbmZpZy5mYWNlYm9va19hcHBfaWQ7XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgcnRsKG5ld3ZhbCwgb2xkdmFsKSB7XG4gICAgICB0aGlzLkRhdGFTdG9yZVBlcnNpc3RlZC5ydGwgPSBuZXd2YWw7XG4gICAgICB0aGlzLiRxLmxhbmcuc2V0KHsgcnRsOiBuZXd2YWwgfSk7XG4gICAgfSxcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBGaWVsZEljb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5maWVsZF90eXBlID09PSBcInBhc3N3b3JkXCJcbiAgICAgICAgPyBcImV2YS1leWUtb3V0bGluZVwiXG4gICAgICAgIDogXCJldmEtZXllLW9mZi1vdXRsaW5lXCI7XG4gICAgfSxcbiAgICBoYXNTb2NpYWxMb2dpbigpIHtcbiAgICAgIGlmICghQVBJaW50ZXJmYWNlLmVtcHR5KHRoaXMuZ29vZ2xlX2NsaWVudF9pZCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoIUFQSWludGVyZmFjZS5lbXB0eSh0aGlzLmZhY2Vib29rX2FwcF9pZCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICBnZXRSVExNb2RlKCkge1xuICAgICAgaWYgKHRoaXMucnRsKSB7XG4gICAgICAgIHJldHVybiBcImZvcm1hdF90ZXh0ZGlyZWN0aW9uX2xfdG9fclwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFwiZm9ybWF0X3RleHRkaXJlY3Rpb25fcl90b19sXCI7XG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG9uU3VibWl0KCkge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIEFQSWludGVyZmFjZS51c2VyTG9naW4oe1xuICAgICAgICB1c2VybmFtZTogdGhpcy51c2VybmFtZSxcbiAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsXG4gICAgICAgIGxvY2FsX2lkOiBBUElpbnRlcmZhY2UuZ2V0U3RvcmFnZShcInBsYWNlX2lkXCIpLFxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBBUElpbnRlcmZhY2Uubm90aWZ5KFwibGlnaHQtZ3JlZW5cIiwgZGF0YS5tc2csIFwiY2hlY2tfY2lyY2xlXCIsIHRoaXMuJHEpO1xuICAgICAgICAgIGF1dGguc2V0VXNlcihkYXRhLmRldGFpbHMudXNlcl9kYXRhKTtcbiAgICAgICAgICBhdXRoLnNldFRva2VuKGRhdGEuZGV0YWlscy51c2VyX3Rva2VuKTtcbiAgICAgICAgICB0aGlzLkNsaWVudFN0b3JlLnVzZXJfc2V0dGluZ3MgPSBkYXRhLmRldGFpbHMudXNlcl9zZXR0aW5ncztcblxuICAgICAgICAgIGNvbnN0ICRwbGFjZUlkID0gQVBJaW50ZXJmYWNlLmdldFN0b3JhZ2UoXCJwbGFjZV9pZFwiKTtcbiAgICAgICAgICBpZiAodHlwZW9mICRwbGFjZUlkICE9PSBcInVuZGVmaW5lZFwiICYmICRwbGFjZUlkICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHR5cGVvZiB0aGlzLnJlZGlyZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgICAgICAgIHRoaXMucmVkaXJlY3QgIT09IG51bGxcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh0aGlzLnJlZGlyZWN0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKFwiL2hvbWVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKFwiL2xvY2F0aW9uXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJkYXJrXCIsIGVycm9yLCBcImVycm9yXCIsIHRoaXMuJHEpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGFmdGVyTG9naW4oZGF0YSkge1xuICAgICAgZGF0YS5wbGFjZV9pZCA9IEFQSWludGVyZmFjZS5nZXRTdG9yYWdlKFwicGxhY2VfaWRcIik7XG4gICAgICBBUElpbnRlcmZhY2Uuc29jaWFsUmVnaXN0cmF0aW9uKGRhdGEpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgbGV0ICRjb21wbGV0ZVJlZ2lzdHJhdGlvbiA9IGZhbHNlO1xuICAgICAgICAgIGlmICghQVBJaW50ZXJmYWNlLmVtcHR5KGRhdGEuZGV0YWlscy5jb21wbGV0ZV9yZWdpc3RyYXRpb24pKSB7XG4gICAgICAgICAgICAkY29tcGxldGVSZWdpc3RyYXRpb24gPSBkYXRhLmRldGFpbHMuY29tcGxldGVfcmVnaXN0cmF0aW9uO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZGF0YS5kZXRhaWxzLnZlcmlmaWNhdGlvbiA9PT0gXCIxXCIpIHtcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgICAgcGF0aDogXCIvYWNjb3VudC92ZXJpZnlcIixcbiAgICAgICAgICAgICAgcXVlcnk6IHsgdXVpZDogZGF0YS5kZXRhaWxzLnV1aWQsIG1zZzogZGF0YS5tc2cgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiPT5cIiArICRjb21wbGV0ZVJlZ2lzdHJhdGlvbik7XG4gICAgICAgICAgICBpZiAoJGNvbXBsZXRlUmVnaXN0cmF0aW9uKSB7XG4gICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgICAgICBwYXRoOiBcIi9hY2NvdW50L2NvbXBsZXRlLXJlZ2lzdHJhdGlvblwiLFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IHV1aWQ6IGRhdGEuZGV0YWlscy51dWlkIH0sXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgQVBJaW50ZXJmYWNlLm5vdGlmeShcImRhcmtcIiwgZGF0YS5tc2csIFwiY2hlY2tfY2lyY2xlXCIsIHRoaXMuJHEpO1xuICAgICAgICAgICAgICBhdXRoLnNldFVzZXIoZGF0YS5kZXRhaWxzLnVzZXJfZGF0YSk7XG4gICAgICAgICAgICAgIGF1dGguc2V0VG9rZW4oZGF0YS5kZXRhaWxzLnVzZXJfdG9rZW4pO1xuICAgICAgICAgICAgICB0aGlzLkNsaWVudFN0b3JlLnVzZXJfc2V0dGluZ3MgPSBkYXRhLmRldGFpbHMudXNlcl9zZXR0aW5ncztcblxuICAgICAgICAgICAgICBjb25zdCAkcGxhY2VJZCA9IEFQSWludGVyZmFjZS5nZXRTdG9yYWdlKFwicGxhY2VfaWRcIik7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgJHBsYWNlSWQgIT09IFwidW5kZWZpbmVkXCIgJiYgJHBsYWNlSWQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICB0eXBlb2YgdGhpcy5yZWRpcmVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICAgICAgICAgICAgdGhpcy5yZWRpcmVjdCAhPT0gbnVsbFxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2godGhpcy5yZWRpcmVjdCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKFwiL2hvbWVcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKFwiL2xvY2F0aW9uXCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgQVBJaW50ZXJmYWNlLm5vdGlmeShcImRhcmtcIiwgZXJyb3IsIFwiZXJyb3JcIiwgdGhpcy4kcSk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7fSk7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiJdLCJmaWxlIjoiYXNzZXRzL0xvZ2luUGFnZS5lZjVjMWE5Mi5qcyJ9
