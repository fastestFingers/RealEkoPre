import { _ as _export_sfc, R as useDataStore, m as APIinterface, aw as auth, p as openBlock, V as createElementBlock, f as createVNode, t as withCtx, a7 as normalizeClass, F as Fragment, Y as QBtn, a6 as createTextVNode, Z as toDisplayString, U as createBaseVNode, aY as QInput, ac as QItem, bg as normalizeProps, bh as guardReactiveProps, ad as QItemSection, at as QIcon } from "./index.61ed5618.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QSpace } from "./QSpace.f164c087.js";
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
  name: "GuestInformation",
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
      redirect: ""
    };
  },
  setup() {
    const DataStore = useDataStore();
    const ClientStore = useClientStore();
    return { DataStore, ClientStore };
  },
  created() {
    this.redirect = this.$route.query.redirect;
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
      APIinterface.fetchDataPost("registerGuestUser", $data).then((data) => {
        APIinterface.notify("light-green", data.msg, "check_circle", this.$q);
        if (typeof data.details.uuid !== "undefined" && data.details.uuid !== null) {
          this.$router.push({
            path: "/account/verify",
            query: { uuid: data.details.uuid, redirect: this.redirect }
          });
        } else {
          auth.setUser(data.details.user_data);
          auth.setToken(data.details.user_token);
          this.ClientStore.user_settings = data.details.user_settings;
          if (typeof this.redirect !== "undefined" && this.redirect !== null) {
            this.$router.push(this.redirect);
          } else {
            this.$router.push("/home");
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
const _hoisted_2 = { class: "text-weight-bold q-ma-none" };
const _hoisted_3 = { class: "text-weight-bold q-ma-none" };
const _hoisted_4 = { class: "text-caption" };
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
                createTextVNode(toDisplayString(_ctx.$t("Continue as guest")), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["class"]),
    createVNode(QPage, { class: "flex flex-center" }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("h5", _hoisted_2, toDisplayString(_ctx.$t("Guest information")), 1),
          createVNode(QSpace, { class: "q-pa-sm" }),
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
                modelValue: $data.mobile_number,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.mobile_number = $event),
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
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.mobile_prefix = $event),
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
              createBaseVNode("h5", _hoisted_3, [
                createTextVNode(toDisplayString(_ctx.$t("Create Account ")) + " ", 1),
                createBaseVNode("span", _hoisted_4, "(" + toDisplayString(_ctx.$t("optional")) + ")", 1)
              ]),
              createVNode(QSpace, { class: "q-pa-sm" }),
              createVNode(QInput, {
                modelValue: $data.email_address,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.email_address = $event),
                label: _ctx.$t("Email address"),
                outlined: "",
                "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
                "label-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                borderless: "",
                class: "input-borderless"
              }, null, 8, ["modelValue", "label", "bg-color", "label-color"]),
              createVNode(QSpace, { class: "q-pa-sm" }),
              createVNode(QInput, {
                modelValue: $data.password,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.password = $event),
                type: $data.field_type,
                label: _ctx.$t("Password"),
                outlined: "",
                "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
                "label-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                borderless: "",
                class: "input-borderless"
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
              }, 8, ["modelValue", "type", "label", "bg-color", "label-color"]),
              createVNode(QSpace, { class: "q-pa-sm" }),
              createVNode(QInput, {
                type: $data.field_type1,
                modelValue: $data.cpassword,
                "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $data.cpassword = $event),
                label: _ctx.$t("Confirm Password"),
                outlined: "",
                "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
                "label-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                borderless: "",
                class: "input-borderless"
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
              }, 8, ["type", "modelValue", "label", "bg-color", "label-color"]),
              createVNode(QSpace, { class: "q-pa-sm" }),
              createVNode(QBtn, {
                loading: $data.loading,
                type: "submit",
                label: _ctx.$t("Continue"),
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
var GuestInformation = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "GuestInformation.vue"]]);
export { GuestInformation as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3Vlc3RJbmZvcm1hdGlvbi45NmRmYTE3OC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhZ2VzL1VzZXIvR3Vlc3RJbmZvcm1hdGlvbi52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8cS1oZWFkZXJcbiAgICByZXZlYWxcbiAgICByZXZlYWwtb2Zmc2V0PVwiNTBcIlxuICAgIDpjbGFzcz1cIntcbiAgICAgICdiZy1teWRhcmsgdGV4dC13aGl0ZSc6ICRxLmRhcmsubW9kZSxcbiAgICAgICdiZy13aGl0ZSB0ZXh0LWRhcmsnOiAhJHEuZGFyay5tb2RlLFxuICAgIH1cIlxuICA+XG4gICAgPHEtdG9vbGJhcj5cbiAgICAgIDxxLWJ0blxuICAgICAgICBAY2xpY2s9XCIkcm91dGVyLmJhY2soKVwiXG4gICAgICAgIGZsYXRcbiAgICAgICAgcm91bmRcbiAgICAgICAgZGVuc2VcbiAgICAgICAgaWNvbj1cImxhcyBsYS1hbmdsZS1sZWZ0XCJcbiAgICAgICAgY2xhc3M9XCJxLW1yLXNtXCJcbiAgICAgICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ3doaXRlJyA6ICdkYXJrJ1wiXG4gICAgICAvPlxuICAgICAgPHEtdG9vbGJhci10aXRsZSBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGRcIj57e1xuICAgICAgICAkdChcIkNvbnRpbnVlIGFzIGd1ZXN0XCIpXG4gICAgICB9fTwvcS10b29sYmFyLXRpdGxlPlxuICAgIDwvcS10b29sYmFyPlxuICA8L3EtaGVhZGVyPlxuICA8cS1wYWdlIGNsYXNzPVwiZmxleCBmbGV4LWNlbnRlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJmdWxsLXdpZHRoIHEtcGEtbWRcIj5cbiAgICAgIDxoNSBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGQgcS1tYS1ub25lXCI+e3sgJHQoXCJHdWVzdCBpbmZvcm1hdGlvblwiKSB9fTwvaDU+XG4gICAgICA8cS1zcGFjZSBjbGFzcz1cInEtcGEtc21cIj48L3Etc3BhY2U+XG5cbiAgICAgIDxxLWZvcm0gQHN1Ym1pdD1cIm9uU3VibWl0XCI+XG4gICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgdi1tb2RlbD1cImZpcnN0X25hbWVcIlxuICAgICAgICAgIDpsYWJlbD1cIiR0KCdGaXJzdCBuYW1lJylcIlxuICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgbGF6eS1ydWxlc1xuICAgICAgICAgIDpiZy1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5NjAwJyA6ICdpbnB1dCdcIlxuICAgICAgICAgIDpsYWJlbC1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICdncmV5J1wiXG4gICAgICAgICAgYm9yZGVybGVzc1xuICAgICAgICAgIGNsYXNzPVwiaW5wdXQtYm9yZGVybGVzc1wiXG4gICAgICAgICAgOnJ1bGVzPVwiW1xuICAgICAgICAgICAgKHZhbCkgPT5cbiAgICAgICAgICAgICAgKHZhbCAmJiB2YWwubGVuZ3RoID4gMCkgfHwgdGhpcy4kdCgnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCcpLFxuICAgICAgICAgIF1cIlxuICAgICAgICAvPlxuICAgICAgICA8cS1pbnB1dFxuICAgICAgICAgIHYtbW9kZWw9XCJsYXN0X25hbWVcIlxuICAgICAgICAgIDpsYWJlbD1cIiR0KCdMYXN0IG5hbWUnKVwiXG4gICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICBsYXp5LXJ1bGVzXG4gICAgICAgICAgOmJnLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXk2MDAnIDogJ2lucHV0J1wiXG4gICAgICAgICAgOmxhYmVsLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXkzMDAnIDogJ2dyZXknXCJcbiAgICAgICAgICBib3JkZXJsZXNzXG4gICAgICAgICAgY2xhc3M9XCJpbnB1dC1ib3JkZXJsZXNzXCJcbiAgICAgICAgICA6cnVsZXM9XCJbXG4gICAgICAgICAgICAodmFsKSA9PlxuICAgICAgICAgICAgICAodmFsICYmIHZhbC5sZW5ndGggPiAwKSB8fCB0aGlzLiR0KCdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJyksXG4gICAgICAgICAgXVwiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICB2LW1vZGVsPVwibW9iaWxlX251bWJlclwiXG4gICAgICAgICAgbWFzaz1cIiMjIyMjIyMjIyMjIyMjXCJcbiAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgIGxhenktcnVsZXNcbiAgICAgICAgICA6YmctY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTYwMCcgOiAnaW5wdXQnXCJcbiAgICAgICAgICA6bGFiZWwtY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTMwMCcgOiAnZ3JleSdcIlxuICAgICAgICAgIGJvcmRlcmxlc3NcbiAgICAgICAgICBjbGFzcz1cImlucHV0LWJvcmRlcmxlc3NcIlxuICAgICAgICAgIDpydWxlcz1cIltcbiAgICAgICAgICAgICh2YWwpID0+XG4gICAgICAgICAgICAgICh2YWwgJiYgdmFsLmxlbmd0aCA+IDApIHx8IHRoaXMuJHQoJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnKSxcbiAgICAgICAgICBdXCJcbiAgICAgICAgPlxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6cHJlcGVuZD5cbiAgICAgICAgICAgIDxxLXNlbGVjdFxuICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICB2LW1vZGVsPVwibW9iaWxlX3ByZWZpeFwiXG4gICAgICAgICAgICAgIDpvcHRpb25zPVwiRGF0YVN0b3JlLnBob25lX3ByZWZpeF9kYXRhXCJcbiAgICAgICAgICAgICAgQGZpbHRlcj1cImZpbHRlckZuXCJcbiAgICAgICAgICAgICAgYmVoYXZpb3I9XCJkaWFsb2dcIlxuICAgICAgICAgICAgICBpbnB1dC1kZWJvdW5jZT1cIjcwMFwiXG4gICAgICAgICAgICAgIHN0eWxlPVwiYm9yZGVyOiBub25lXCJcbiAgICAgICAgICAgICAgZW1pdC12YWx1ZVxuICAgICAgICAgICAgICBib3JkZXJsZXNzeFxuICAgICAgICAgICAgICBjbGFzcz1cIm15cS1maWVsZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6b3B0aW9uPVwieyBpdGVtUHJvcHMsIG9wdCB9XCI+XG4gICAgICAgICAgICAgICAgPHEtaXRlbSB2LWJpbmQ9XCJpdGVtUHJvcHNcIj5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgIDxxLWltZ1xuICAgICAgICAgICAgICAgICAgICAgIDpzcmM9XCJvcHQuZmxhZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDE1cHg7IG1heC13aWR0aDogMjBweFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsPnt7IG9wdC5sYWJlbCB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpuby1vcHRpb24+XG4gICAgICAgICAgICAgICAgPHEtaXRlbT5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBjbGFzcz1cInRleHQtZ3JleVwiPlxuICAgICAgICAgICAgICAgICAgICB7eyAkdChcIk5vIHJlc3VsdHNcIikgfX1cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3Etc2VsZWN0PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvcS1pbnB1dD5cblxuICAgICAgICA8aDUgY2xhc3M9XCJ0ZXh0LXdlaWdodC1ib2xkIHEtbWEtbm9uZVwiPlxuICAgICAgICAgIHt7ICR0KFwiQ3JlYXRlIEFjY291bnQgXCIpIH19XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWNhcHRpb25cIj4oe3sgJHQoXCJvcHRpb25hbFwiKSB9fSk8L3NwYW4+XG4gICAgICAgIDwvaDU+XG5cbiAgICAgICAgPHEtc3BhY2UgY2xhc3M9XCJxLXBhLXNtXCI+PC9xLXNwYWNlPlxuXG4gICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgdi1tb2RlbD1cImVtYWlsX2FkZHJlc3NcIlxuICAgICAgICAgIDpsYWJlbD1cIiR0KCdFbWFpbCBhZGRyZXNzJylcIlxuICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgOmJnLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXk2MDAnIDogJ2lucHV0J1wiXG4gICAgICAgICAgOmxhYmVsLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXkzMDAnIDogJ2dyZXknXCJcbiAgICAgICAgICBib3JkZXJsZXNzXG4gICAgICAgICAgY2xhc3M9XCJpbnB1dC1ib3JkZXJsZXNzXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8cS1zcGFjZSBjbGFzcz1cInEtcGEtc21cIj48L3Etc3BhY2U+XG5cbiAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICB2LW1vZGVsPVwicGFzc3dvcmRcIlxuICAgICAgICAgIDp0eXBlPVwiZmllbGRfdHlwZVwiXG4gICAgICAgICAgOmxhYmVsPVwiJHQoJ1Bhc3N3b3JkJylcIlxuICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgOmJnLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXk2MDAnIDogJ2lucHV0J1wiXG4gICAgICAgICAgOmxhYmVsLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXkzMDAnIDogJ2dyZXknXCJcbiAgICAgICAgICBib3JkZXJsZXNzXG4gICAgICAgICAgY2xhc3M9XCJpbnB1dC1ib3JkZXJsZXNzXCJcbiAgICAgICAgPlxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6YXBwZW5kPlxuICAgICAgICAgICAgPHEtaWNvblxuICAgICAgICAgICAgICBAY2xpY2s9XCJcbiAgICAgICAgICAgICAgICBmaWVsZF90eXBlID0gZmllbGRfdHlwZSA9PSAncGFzc3dvcmQnID8gJ3RleHQnIDogJ3Bhc3N3b3JkJ1xuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICA6bmFtZT1cIkZpZWxkSWNvblwiXG4gICAgICAgICAgICAgIGNvbG9yPVwiZ3JleVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3EtaW5wdXQ+XG5cbiAgICAgICAgPHEtc3BhY2UgY2xhc3M9XCJxLXBhLXNtXCI+PC9xLXNwYWNlPlxuXG4gICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgOnR5cGU9XCJmaWVsZF90eXBlMVwiXG4gICAgICAgICAgdi1tb2RlbD1cImNwYXNzd29yZFwiXG4gICAgICAgICAgOmxhYmVsPVwiJHQoJ0NvbmZpcm0gUGFzc3dvcmQnKVwiXG4gICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICA6YmctY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTYwMCcgOiAnaW5wdXQnXCJcbiAgICAgICAgICA6bGFiZWwtY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTMwMCcgOiAnZ3JleSdcIlxuICAgICAgICAgIGJvcmRlcmxlc3NcbiAgICAgICAgICBjbGFzcz1cImlucHV0LWJvcmRlcmxlc3NcIlxuICAgICAgICA+XG4gICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDphcHBlbmQ+XG4gICAgICAgICAgICA8cS1pY29uXG4gICAgICAgICAgICAgIEBjbGljaz1cIlxuICAgICAgICAgICAgICAgIGZpZWxkX3R5cGUxID0gZmllbGRfdHlwZTEgPT0gJ3Bhc3N3b3JkJyA/ICd0ZXh0JyA6ICdwYXNzd29yZCdcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgOm5hbWU9XCJGaWVsZEljb24xXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJncmV5XCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvcS1pbnB1dD5cblxuICAgICAgICA8cS1zcGFjZSBjbGFzcz1cInEtcGEtc21cIj48L3Etc3BhY2U+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIDpsb2FkaW5nPVwibG9hZGluZ1wiXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgOmxhYmVsPVwiJHQoJ0NvbnRpbnVlJylcIlxuICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5IHRleHQtd2hpdGVcIlxuICAgICAgICAgIGNsYXNzPVwiZnVsbC13aWR0aCB0ZXh0LXdlaWdodC1ib2xkXCJcbiAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAvPlxuICAgICAgPC9xLWZvcm0+XG4gICAgPC9kaXY+XG4gIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBBUElpbnRlcmZhY2UgZnJvbSBcInNyYy9hcGkvQVBJaW50ZXJmYWNlXCI7XG5pbXBvcnQgYXV0aCBmcm9tIFwic3JjL2FwaS9hdXRoXCI7XG5pbXBvcnQgeyB1c2VEYXRhU3RvcmUgfSBmcm9tIFwic3RvcmVzL0RhdGFTdG9yZVwiO1xuaW1wb3J0IHsgdXNlQ2xpZW50U3RvcmUgfSBmcm9tIFwic3RvcmVzL0NsaWVudFN0b3JlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJHdWVzdEluZm9ybWF0aW9uXCIsXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgZmllbGRfdHlwZTogXCJwYXNzd29yZFwiLFxuICAgICAgZmllbGRfdHlwZTE6IFwicGFzc3dvcmRcIixcbiAgICAgIGZpcnN0X25hbWU6IFwiXCIsXG4gICAgICBsYXN0X25hbWU6IFwiXCIsXG4gICAgICBlbWFpbF9hZGRyZXNzOiBcIlwiLFxuICAgICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgICBjcGFzc3dvcmQ6IFwiXCIsXG4gICAgICBtb2JpbGVfbnVtYmVyOiBcIlwiLFxuICAgICAgbW9iaWxlX3ByZWZpeDogXCJcIixcbiAgICAgIG9wdGlvbnM6IFtdLFxuICAgICAgaW5uZXJfbG9hZGluZzogZmFsc2UsXG4gICAgICByZWRpcmVjdDogXCJcIixcbiAgICB9O1xuICB9LFxuICBzZXR1cCgpIHtcbiAgICBjb25zdCBEYXRhU3RvcmUgPSB1c2VEYXRhU3RvcmUoKTtcbiAgICBjb25zdCBDbGllbnRTdG9yZSA9IHVzZUNsaWVudFN0b3JlKCk7XG4gICAgcmV0dXJuIHsgRGF0YVN0b3JlLCBDbGllbnRTdG9yZSB9O1xuICB9LFxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMucmVkaXJlY3QgPSB0aGlzLiRyb3V0ZS5xdWVyeS5yZWRpcmVjdDtcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBGaWVsZEljb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5maWVsZF90eXBlID09PSBcInBhc3N3b3JkXCJcbiAgICAgICAgPyBcImV2YS1leWUtb3V0bGluZVwiXG4gICAgICAgIDogXCJldmEtZXllLW9mZi1vdXRsaW5lXCI7XG4gICAgfSxcbiAgICBGaWVsZEljb24xKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZmllbGRfdHlwZTEgPT09IFwicGFzc3dvcmRcIlxuICAgICAgICA/IFwiZXZhLWV5ZS1vdXRsaW5lXCJcbiAgICAgICAgOiBcImV2YS1leWUtb2ZmLW91dGxpbmVcIjtcbiAgICB9LFxuICB9LFxuICB3YXRjaDoge1xuICAgIERhdGFTdG9yZToge1xuICAgICAgaW1tZWRpYXRlOiB0cnVlLFxuICAgICAgZGVlcDogdHJ1ZSxcbiAgICAgIGhhbmRsZXIobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhuZXdWYWx1ZS5waG9uZV9kZWZhdWx0X2RhdGEpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0aGlzLm1vYmlsZV9wcmVmaXggPSBcIitcIiArIG5ld1ZhbHVlLnBob25lX2RlZmF1bHRfZGF0YS5waG9uZWNvZGU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG9uU3VibWl0KCkge1xuICAgICAgY29uc3QgJGRhdGEgPSB7XG4gICAgICAgIGZpcnN0X25hbWU6IHRoaXMuZmlyc3RfbmFtZSxcbiAgICAgICAgbGFzdF9uYW1lOiB0aGlzLmxhc3RfbmFtZSxcbiAgICAgICAgZW1haWxfYWRkcmVzczogdGhpcy5lbWFpbF9hZGRyZXNzLFxuICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZCxcbiAgICAgICAgY3Bhc3N3b3JkOiB0aGlzLmNwYXNzd29yZCxcbiAgICAgICAgbW9iaWxlX3ByZWZpeDogdGhpcy5tb2JpbGVfcHJlZml4LFxuICAgICAgICBtb2JpbGVfbnVtYmVyOiB0aGlzLm1vYmlsZV9udW1iZXIsXG4gICAgICAgIGxvY2FsX2lkOiBBUElpbnRlcmZhY2UuZ2V0U3RvcmFnZShcInBsYWNlX2lkXCIpLFxuICAgICAgfTtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICBBUElpbnRlcmZhY2UuZmV0Y2hEYXRhUG9zdChcInJlZ2lzdGVyR3Vlc3RVc2VyXCIsICRkYXRhKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJsaWdodC1ncmVlblwiLCBkYXRhLm1zZywgXCJjaGVja19jaXJjbGVcIiwgdGhpcy4kcSk7XG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0eXBlb2YgZGF0YS5kZXRhaWxzLnV1aWQgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgICAgIGRhdGEuZGV0YWlscy51dWlkICE9PSBudWxsXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICAgIHBhdGg6IFwiL2FjY291bnQvdmVyaWZ5XCIsXG4gICAgICAgICAgICAgIHF1ZXJ5OiB7IHV1aWQ6IGRhdGEuZGV0YWlscy51dWlkLCByZWRpcmVjdDogdGhpcy5yZWRpcmVjdCB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGF1dGguc2V0VXNlcihkYXRhLmRldGFpbHMudXNlcl9kYXRhKTtcbiAgICAgICAgICAgIGF1dGguc2V0VG9rZW4oZGF0YS5kZXRhaWxzLnVzZXJfdG9rZW4pO1xuICAgICAgICAgICAgdGhpcy5DbGllbnRTdG9yZS51c2VyX3NldHRpbmdzID0gZGF0YS5kZXRhaWxzLnVzZXJfc2V0dGluZ3M7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHR5cGVvZiB0aGlzLnJlZGlyZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgICAgICAgIHRoaXMucmVkaXJlY3QgIT09IG51bGxcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh0aGlzLnJlZGlyZWN0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKFwiL2hvbWVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgQVBJaW50ZXJmYWNlLm5vdGlmeShcImRhcmtcIiwgZXJyb3IsIG51bGwsIHRoaXMuJHEpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbIl9jcmVhdGVWTm9kZSIsIl9ub3JtYWxpemVDbGFzcyIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX3dpdGhDdHgiLCJfY3JlYXRlVGV4dFZOb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQXFNQSxNQUFLLFlBQVU7QUFBQSxFQUNiLE1BQU07QUFBQSxFQUNOLE9BQU87QUFDTCxXQUFPO0FBQUEsTUFDTCxTQUFTO0FBQUEsTUFDVCxZQUFZO0FBQUEsTUFDWixhQUFhO0FBQUEsTUFDYixZQUFZO0FBQUEsTUFDWixXQUFXO0FBQUEsTUFDWCxlQUFlO0FBQUEsTUFDZixVQUFVO0FBQUEsTUFDVixXQUFXO0FBQUEsTUFDWCxlQUFlO0FBQUEsTUFDZixlQUFlO0FBQUEsTUFDZixTQUFTLENBQUU7QUFBQSxNQUNYLGVBQWU7QUFBQSxNQUNmLFVBQVU7QUFBQTtFQUViO0FBQUEsRUFDRCxRQUFRO0FBQ04sVUFBTSxZQUFZO0FBQ2xCLFVBQU0sY0FBYztBQUNwQixXQUFPLEVBQUUsV0FBVztFQUNyQjtBQUFBLEVBQ0QsVUFBVTtBQUNSLFNBQUssV0FBVyxLQUFLLE9BQU8sTUFBTTtBQUFBLEVBQ25DO0FBQUEsRUFDRCxVQUFVO0FBQUEsSUFDUixZQUFZO0FBQ1YsYUFBTyxLQUFLLGVBQWUsYUFDdkIsb0JBQ0E7QUFBQSxJQUNMO0FBQUEsSUFDRCxhQUFhO0FBQ1gsYUFBTyxLQUFLLGdCQUFnQixhQUN4QixvQkFDQTtBQUFBLElBQ0w7QUFBQSxFQUNGO0FBQUEsRUFDRCxPQUFPO0FBQUEsSUFDTCxXQUFXO0FBQUEsTUFDVCxXQUFXO0FBQUEsTUFDWCxNQUFNO0FBQUEsTUFDTixRQUFRLFVBQVUsVUFBVTtBQUMxQixZQUFJLE9BQU8sS0FBSyxTQUFTLGtCQUFrQixFQUFFLFNBQVMsR0FBRztBQUN2RCxlQUFLLGdCQUFnQixNQUFNLFNBQVMs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
