import { _ as _export_sfc, m as APIinterface, aw as auth, p as openBlock, V as createElementBlock, f as createVNode, t as withCtx, a7 as normalizeClass, F as Fragment, Y as QBtn, U as createBaseVNode, a8 as QCard, Z as toDisplayString, aY as QInput, q as createBlock, a6 as createTextVNode, bE as QCardActions } from "./index.61ed5618.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QSpace } from "./QSpace.f164c087.js";
import { Q as QForm } from "./QForm.7ded9d38.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import { u as useClientStore } from "./ClientStore.327b1c8d.js";
import "./QResizeObserver.d08dce3c.js";
const _sfc_main = {
  name: "VerifyAccount",
  data() {
    return {
      loading: false,
      code1: "",
      code2: "",
      code3: "",
      code4: "",
      client_uuid: "",
      sent_message: "",
      code: "",
      counter: 5,
      timer: void 0,
      settings: [],
      data: [],
      signup_resend_counter: 5
    };
  },
  setup() {
    const ClientStore = useClientStore();
    return { ClientStore };
  },
  watch: {
    counter(newval, oldval) {
      if (newval <= 0) {
        this.stopTimer();
      }
    },
    code1(newval, oldval) {
      if (!APIinterface.empty(newval)) {
        this.$refs.code2.focus();
      } else {
        this.$refs.code1.focus();
      }
    },
    code2(newval, oldval) {
      if (!APIinterface.empty(newval)) {
        this.$refs.code3.focus();
      } else {
        this.$refs.code1.focus();
      }
    },
    code3(newval, oldval) {
      if (!APIinterface.empty(newval)) {
        this.$refs.code4.focus();
      } else {
        this.$refs.code2.focus();
      }
    },
    code4(newval, oldval) {
      if (!APIinterface.empty(newval)) {
        this.$refs.code4.focus();
      } else {
        this.$refs.code3.focus();
      }
    }
  },
  mounted() {
    this.$refs.code1.focus();
    this.startTimer();
    this.getAccountStatus();
    this.client_uuid = this.$route.query.uuid;
  },
  methods: {
    getAccountStatus() {
      this.loading = true;
      APIinterface.getAccountStatus(this.$route.query.uuid).then((data) => {
        this.sent_message = data.msg;
        this.data = data.details.data;
        this.settings = data.details.settings;
        this.counter = data.details.settings.signup_resend_counter;
        this.signup_resend_counter = this.counter;
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data) => {
        this.loading = false;
      });
    },
    onSubmit() {
      let $autoLogin = true;
      if (this.settings.enabled_verification === "1" && this.data.social_strategy === "google") {
        $autoLogin = false;
      }
      if (this.settings.enabled_verification === "1" && this.data.social_strategy === "facebook") {
        $autoLogin = false;
      }
      const params = {
        auto_login: $autoLogin,
        client_uuid: this.$route.query.uuid,
        verification_code: this.code1 + this.code2 + this.code3 + this.code4,
        local_id: APIinterface.getStorage("local_id")
      };
      this.loading = true;
      APIinterface.verifyCodeSignup(params).then((data) => {
        if ($autoLogin) {
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
        } else {
          this.$router.push({
            path: "/account/complete-registration",
            query: { uuid: this.$route.query.uuid }
          });
        }
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data) => {
        this.loading = false;
      });
    },
    startTimer() {
      this.stopTimer();
      this.timer = setInterval(() => {
        this.counter--;
      }, 1e3);
    },
    stopTimer() {
      clearInterval(this.timer);
    },
    resendCode() {
      APIinterface.requestCode(this.client_uuid).then((data) => {
        this.counter = this.signup_resend_counter;
        this.startTimer();
        APIinterface.notify("green", data.msg, "check", this.$q);
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data) => {
      });
    }
  }
};
const _hoisted_1 = { class: "full-width" };
const _hoisted_2 = { class: "text-center" };
const _hoisted_3 = { class: "w-75 margin-auto" };
const _hoisted_4 = { class: "line-normal text-left" };
const _hoisted_5 = { class: "row items-center q-col-gutter-md" };
const _hoisted_6 = { class: "col" };
const _hoisted_7 = { class: "col" };
const _hoisted_8 = { class: "col" };
const _hoisted_9 = { class: "col" };
const _hoisted_10 = {
  key: 1,
  class: "q-ma-none no-margin"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(QHeader, {
      class: normalizeClass({
        "bg-mydark text-white": _ctx.$q.dark.mode,
        "bg-white text-black": !_ctx.$q.dark.mode
      })
    }, {
      default: withCtx(() => [
        createVNode(QToolbar, null, {
          default: withCtx(() => [
            createVNode(QBtn, {
              to: "/user/login",
              flat: "",
              round: "",
              dense: "",
              icon: "arrow_back",
              class: "q-mr-sm",
              color: _ctx.$q.dark.mode ? "white" : "dark"
            }, null, 8, ["color"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["class"]),
    createVNode(QPage, { class: "flex flex-center" }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_1, [
          createVNode(QCard, { flat: "" }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_2, [
                createVNode(QForm, {
                  onSubmit: $options.onSubmit,
                  class: "q-gutter-md"
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_3, [
                      createBaseVNode("p", _hoisted_4, toDisplayString($data.sent_message), 1),
                      createBaseVNode("div", _hoisted_5, [
                        createBaseVNode("div", _hoisted_6, [
                          createVNode(QInput, {
                            modelValue: $data.code1,
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.code1 = $event),
                            ref: "code1",
                            outlined: "",
                            mask: "#",
                            "input-class": "text-center text-h5 text-weight-bold"
                          }, null, 8, ["modelValue"])
                        ]),
                        createBaseVNode("div", _hoisted_7, [
                          createVNode(QInput, {
                            modelValue: $data.code2,
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.code2 = $event),
                            ref: "code2",
                            mask: "#",
                            outlined: "",
                            "input-class": "text-center text-h5 text-weight-bold"
                          }, null, 8, ["modelValue"])
                        ]),
                        createBaseVNode("div", _hoisted_8, [
                          createVNode(QInput, {
                            modelValue: $data.code3,
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.code3 = $event),
                            ref: "code3",
                            mask: "#",
                            outlined: "",
                            "input-class": "text-center text-h5 text-weight-bold"
                          }, null, 8, ["modelValue"])
                        ]),
                        createBaseVNode("div", _hoisted_9, [
                          createVNode(QInput, {
                            modelValue: $data.code4,
                            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.code4 = $event),
                            ref: "code4",
                            mask: "#",
                            outlined: "",
                            "input-class": "text-center text-h5 text-weight-bold"
                          }, null, 8, ["modelValue"])
                        ])
                      ]),
                      createVNode(QSpace, { class: "q-pa-sm" }),
                      $data.counter === 0 ? (openBlock(), createBlock(QBtn, {
                        key: 0,
                        onClick: $options.resendCode,
                        dense: "",
                        "no-caps": "",
                        flat: "",
                        "text-color": "text=dark"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("Resend Code")), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"])) : (openBlock(), createElementBlock("p", _hoisted_10, [
                        createBaseVNode("u", null, toDisplayString(_ctx.$t("Resend Code in")) + " " + toDisplayString($data.counter), 1)
                      ])),
                      createVNode(QSpace, { class: "q-pa-sm" }),
                      createVNode(QCardActions, {
                        vertical: "",
                        align: "center"
                      }, {
                        default: withCtx(() => [
                          createVNode(QBtn, {
                            type: "submit",
                            label: _ctx.$t("Verify Now"),
                            unelevated: "",
                            color: "primary",
                            "text-color": "white",
                            class: "full-width text-weight-bold",
                            loading: $data.loading,
                            size: "lg",
                            "no-caps": ""
                          }, null, 8, ["label", "loading"])
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
        ])
      ]),
      _: 1
    })
  ], 64);
}
var VerifyAccount = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "VerifyAccount.vue"]]);
export { VerifyAccount as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmVyaWZ5QWNjb3VudC5hZjc3MDVjNC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhZ2VzL0FjY291bnQvVmVyaWZ5QWNjb3VudC52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8cS1oZWFkZXJcbiAgICA6Y2xhc3M9XCJ7XG4gICAgICAnYmctbXlkYXJrIHRleHQtd2hpdGUnOiAkcS5kYXJrLm1vZGUsXG4gICAgICAnYmctd2hpdGUgdGV4dC1ibGFjayc6ICEkcS5kYXJrLm1vZGUsXG4gICAgfVwiXG4gID5cbiAgICA8cS10b29sYmFyPlxuICAgICAgPHEtYnRuXG4gICAgICAgIHRvPVwiL3VzZXIvbG9naW5cIlxuICAgICAgICBmbGF0XG4gICAgICAgIHJvdW5kXG4gICAgICAgIGRlbnNlXG4gICAgICAgIGljb249XCJhcnJvd19iYWNrXCJcbiAgICAgICAgY2xhc3M9XCJxLW1yLXNtXCJcbiAgICAgICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ3doaXRlJyA6ICdkYXJrJ1wiXG4gICAgICAvPlxuICAgIDwvcS10b29sYmFyPlxuICA8L3EtaGVhZGVyPlxuXG4gIDwhLS0gPHEtZm9vdGVyIGNsYXNzPVwidHJhbnNwYXJlbnQgdGV4dC1kYXJrXCI+IC0tPlxuICA8cS1wYWdlIGNsYXNzPVwiZmxleCBmbGV4LWNlbnRlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJmdWxsLXdpZHRoXCI+XG4gICAgICA8cS1jYXJkIGZsYXQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxxLWZvcm0gQHN1Ym1pdD1cIm9uU3VibWl0XCIgY2xhc3M9XCJxLWd1dHRlci1tZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctNzUgbWFyZ2luLWF1dG9cIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsaW5lLW5vcm1hbCB0ZXh0LWxlZnRcIj57eyBzZW50X21lc3NhZ2UgfX08L3A+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBpdGVtcy1jZW50ZXIgcS1jb2wtZ3V0dGVyLW1kXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImNvZGUxXCJcbiAgICAgICAgICAgICAgICAgICAgcmVmPVwiY29kZTFcIlxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICBtYXNrPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgIGlucHV0LWNsYXNzPVwidGV4dC1jZW50ZXIgdGV4dC1oNSB0ZXh0LXdlaWdodC1ib2xkXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImNvZGUyXCJcbiAgICAgICAgICAgICAgICAgICAgcmVmPVwiY29kZTJcIlxuICAgICAgICAgICAgICAgICAgICBtYXNrPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgIGlucHV0LWNsYXNzPVwidGV4dC1jZW50ZXIgdGV4dC1oNSB0ZXh0LXdlaWdodC1ib2xkXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImNvZGUzXCJcbiAgICAgICAgICAgICAgICAgICAgcmVmPVwiY29kZTNcIlxuICAgICAgICAgICAgICAgICAgICBtYXNrPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgIGlucHV0LWNsYXNzPVwidGV4dC1jZW50ZXIgdGV4dC1oNSB0ZXh0LXdlaWdodC1ib2xkXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImNvZGU0XCJcbiAgICAgICAgICAgICAgICAgICAgcmVmPVwiY29kZTRcIlxuICAgICAgICAgICAgICAgICAgICBtYXNrPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgIGlucHV0LWNsYXNzPVwidGV4dC1jZW50ZXIgdGV4dC1oNSB0ZXh0LXdlaWdodC1ib2xkXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8IS0tIHJvdyAtLT5cblxuICAgICAgICAgICAgICA8cS1zcGFjZSBjbGFzcz1cInEtcGEtc21cIj48L3Etc3BhY2U+XG5cbiAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwicmVzZW5kQ29kZVwiXG4gICAgICAgICAgICAgICAgdi1pZj1cImNvdW50ZXIgPT09IDBcIlxuICAgICAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgICB0ZXh0LWNvbG9yPVwidGV4dD1kYXJrXCJcbiAgICAgICAgICAgICAgICA+e3sgJHQoXCJSZXNlbmQgQ29kZVwiKSB9fTwvcS1idG5cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cCB2LWVsc2UgY2xhc3M9XCJxLW1hLW5vbmUgbm8tbWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgPHU+e3sgJHQoXCJSZXNlbmQgQ29kZSBpblwiKSB9fSB7eyBjb3VudGVyIH19PC91PlxuICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgPHEtc3BhY2UgY2xhc3M9XCJxLXBhLXNtXCI+PC9xLXNwYWNlPlxuXG4gICAgICAgICAgICAgIDxxLWNhcmQtYWN0aW9ucyB2ZXJ0aWNhbCBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnVmVyaWZ5IE5vdycpXCJcbiAgICAgICAgICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICB0ZXh0LWNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmdWxsLXdpZHRoIHRleHQtd2VpZ2h0LWJvbGRcIlxuICAgICAgICAgICAgICAgICAgOmxvYWRpbmc9XCJsb2FkaW5nXCJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9xLWNhcmQtYWN0aW9ucz5cblxuICAgICAgICAgICAgICA8cS1zcGFjZSBjbGFzcz1cInEtcGEtbWRcIj48L3Etc3BhY2U+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwhLS0gdyA3NSAtLT5cbiAgICAgICAgICA8L3EtZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwhLS0gY2VudGVyIC0tPlxuICAgICAgPC9xLWNhcmQ+XG4gICAgPC9kaXY+XG4gIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBBUElpbnRlcmZhY2UgZnJvbSBcInNyYy9hcGkvQVBJaW50ZXJmYWNlXCI7XG5pbXBvcnQgYXV0aCBmcm9tIFwic3JjL2FwaS9hdXRoXCI7XG5pbXBvcnQgeyB1c2VDbGllbnRTdG9yZSB9IGZyb20gXCJzdG9yZXMvQ2xpZW50U3RvcmVcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIlZlcmlmeUFjY291bnRcIixcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICBjb2RlMTogXCJcIixcbiAgICAgIGNvZGUyOiBcIlwiLFxuICAgICAgY29kZTM6IFwiXCIsXG4gICAgICBjb2RlNDogXCJcIixcbiAgICAgIGNsaWVudF91dWlkOiBcIlwiLFxuICAgICAgc2VudF9tZXNzYWdlOiBcIlwiLFxuICAgICAgY29kZTogXCJcIixcbiAgICAgIGNvdW50ZXI6IDUsXG4gICAgICB0aW1lcjogdW5kZWZpbmVkLFxuICAgICAgc2V0dGluZ3M6IFtdLFxuICAgICAgZGF0YTogW10sXG4gICAgICBzaWdudXBfcmVzZW5kX2NvdW50ZXI6IDUsXG4gICAgfTtcbiAgfSxcbiAgc2V0dXAoKSB7XG4gICAgY29uc3QgQ2xpZW50U3RvcmUgPSB1c2VDbGllbnRTdG9yZSgpO1xuICAgIHJldHVybiB7IENsaWVudFN0b3JlIH07XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgY291bnRlcihuZXd2YWwsIG9sZHZhbCkge1xuICAgICAgaWYgKG5ld3ZhbCA8PSAwKSB7XG4gICAgICAgIHRoaXMuc3RvcFRpbWVyKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBjb2RlMShuZXd2YWwsIG9sZHZhbCkge1xuICAgICAgaWYgKCFBUElpbnRlcmZhY2UuZW1wdHkobmV3dmFsKSkge1xuICAgICAgICB0aGlzLiRyZWZzLmNvZGUyLmZvY3VzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiRyZWZzLmNvZGUxLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBjb2RlMihuZXd2YWwsIG9sZHZhbCkge1xuICAgICAgaWYgKCFBUElpbnRlcmZhY2UuZW1wdHkobmV3dmFsKSkge1xuICAgICAgICB0aGlzLiRyZWZzLmNvZGUzLmZvY3VzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiRyZWZzLmNvZGUxLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBjb2RlMyhuZXd2YWwsIG9sZHZhbCkge1xuICAgICAgaWYgKCFBUElpbnRlcmZhY2UuZW1wdHkobmV3dmFsKSkge1xuICAgICAgICB0aGlzLiRyZWZzLmNvZGU0LmZvY3VzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiRyZWZzLmNvZGUyLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBjb2RlNChuZXd2YWwsIG9sZHZhbCkge1xuICAgICAgaWYgKCFBUElpbnRlcmZhY2UuZW1wdHkobmV3dmFsKSkge1xuICAgICAgICB0aGlzLiRyZWZzLmNvZGU0LmZvY3VzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiRyZWZzLmNvZGUzLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLiRyZWZzLmNvZGUxLmZvY3VzKCk7XG4gICAgdGhpcy5zdGFydFRpbWVyKCk7XG4gICAgdGhpcy5nZXRBY2NvdW50U3RhdHVzKCk7XG4gICAgdGhpcy5jbGllbnRfdXVpZCA9IHRoaXMuJHJvdXRlLnF1ZXJ5LnV1aWQ7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBnZXRBY2NvdW50U3RhdHVzKCkge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIEFQSWludGVyZmFjZS5nZXRBY2NvdW50U3RhdHVzKHRoaXMuJHJvdXRlLnF1ZXJ5LnV1aWQpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZW50X21lc3NhZ2UgPSBkYXRhLm1zZztcbiAgICAgICAgICB0aGlzLmRhdGEgPSBkYXRhLmRldGFpbHMuZGF0YTtcbiAgICAgICAgICB0aGlzLnNldHRpbmdzID0gZGF0YS5kZXRhaWxzLnNldHRpbmdzO1xuICAgICAgICAgIHRoaXMuY291bnRlciA9IGRhdGEuZGV0YWlscy5zZXR0aW5ncy5zaWdudXBfcmVzZW5kX2NvdW50ZXI7XG4gICAgICAgICAgdGhpcy5zaWdudXBfcmVzZW5kX2NvdW50ZXIgPSB0aGlzLmNvdW50ZXI7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBBUElpbnRlcmZhY2Uubm90aWZ5KFwiZGFya1wiLCBlcnJvciwgXCJlcnJvclwiLCB0aGlzLiRxKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBvblN1Ym1pdCgpIHtcbiAgICAgIGxldCAkYXV0b0xvZ2luID0gdHJ1ZTtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5lbmFibGVkX3ZlcmlmaWNhdGlvbiA9PT0gXCIxXCIgJiZcbiAgICAgICAgdGhpcy5kYXRhLnNvY2lhbF9zdHJhdGVneSA9PT0gXCJnb29nbGVcIlxuICAgICAgKSB7XG4gICAgICAgICRhdXRvTG9naW4gPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5lbmFibGVkX3ZlcmlmaWNhdGlvbiA9PT0gXCIxXCIgJiZcbiAgICAgICAgdGhpcy5kYXRhLnNvY2lhbF9zdHJhdGVneSA9PT0gXCJmYWNlYm9va1wiXG4gICAgICApIHtcbiAgICAgICAgJGF1dG9Mb2dpbiA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICBhdXRvX2xvZ2luOiAkYXV0b0xvZ2luLFxuICAgICAgICBjbGllbnRfdXVpZDogdGhpcy4kcm91dGUucXVlcnkudXVpZCxcbiAgICAgICAgdmVyaWZpY2F0aW9uX2NvZGU6IHRoaXMuY29kZTEgKyB0aGlzLmNvZGUyICsgdGhpcy5jb2RlMyArIHRoaXMuY29kZTQsXG4gICAgICAgIGxvY2FsX2lkOiBBUElpbnRlcmZhY2UuZ2V0U3RvcmFnZShcImxvY2FsX2lkXCIpLFxuICAgICAgfTtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICBBUElpbnRlcmZhY2UudmVyaWZ5Q29kZVNpZ251cChwYXJhbXMpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKCRhdXRvTG9naW4pIHtcbiAgICAgICAgICAgIGF1dGguc2V0VXNlcihkYXRhLmRldGFpbHMudXNlcl9kYXRhKTtcbiAgICAgICAgICAgIGF1dGguc2V0VG9rZW4oZGF0YS5kZXRhaWxzLnVzZXJfdG9rZW4pO1xuICAgICAgICAgICAgdGhpcy5DbGllbnRTdG9yZS51c2VyX3NldHRpbmdzID0gZGF0YS5kZXRhaWxzLnVzZXJfc2V0dGluZ3M7XG5cbiAgICAgICAgICAgIGNvbnN0ICRwbGFjZUlkID0gQVBJaW50ZXJmYWNlLmdldFN0b3JhZ2UoXCJwbGFjZV9pZFwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCI9PlwiICsgJHBsYWNlSWQpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiAkcGxhY2VJZCAhPT0gXCJ1bmRlZmluZWRcIiAmJiAkcGxhY2VJZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaChcIi9ob21lXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goXCIvbG9jYXRpb25cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgICAgcGF0aDogXCIvYWNjb3VudC9jb21wbGV0ZS1yZWdpc3RyYXRpb25cIixcbiAgICAgICAgICAgICAgcXVlcnk6IHsgdXVpZDogdGhpcy4kcm91dGUucXVlcnkudXVpZCB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgQVBJaW50ZXJmYWNlLm5vdGlmeShcImRhcmtcIiwgZXJyb3IsIFwiZXJyb3JcIiwgdGhpcy4kcSk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgc3RhcnRUaW1lcigpIHtcbiAgICAgIHRoaXMuc3RvcFRpbWVyKCk7XG4gICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICB0aGlzLmNvdW50ZXItLTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH0sXG4gICAgc3RvcFRpbWVyKCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcbiAgICB9LFxuICAgIHJlc2VuZENvZGUoKSB7XG4gICAgICBBUElpbnRlcmZhY2UucmVxdWVzdENvZGUodGhpcy5jbGllbnRfdXVpZClcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmNvdW50ZXIgPSB0aGlzLnNpZ251cF9yZXNlbmRfY291bnRlcjtcbiAgICAgICAgICB0aGlzLnN0YXJ0VGltZXIoKTtcbiAgICAgICAgICBBUElpbnRlcmZhY2Uubm90aWZ5KFwiZ3JlZW5cIiwgZGF0YS5tc2csIFwiY2hlY2tcIiwgdGhpcy4kcSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBBUElpbnRlcmZhY2Uubm90aWZ5KFwiZGFya1wiLCBlcnJvciwgXCJlcnJvclwiLCB0aGlzLiRxKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHt9KTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbIl9jcmVhdGVWTm9kZSIsIl9ub3JtYWxpemVDbGFzcyIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX2NyZWF0ZUJsb2NrIiwiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50QmxvY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBb0hBLE1BQUssWUFBVTtBQUFBLEVBQ2IsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUNMLFdBQU87QUFBQSxNQUNMLFNBQVM7QUFBQSxNQUNULE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLGFBQWE7QUFBQSxNQUNiLGNBQWM7QUFBQSxNQUNkLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULE9BQU87QUFBQSxNQUNQLFVBQVUsQ0FBRTtBQUFBLE1BQ1osTUFBTSxDQUFFO0FBQUEsTUFDUix1QkFBdUI7QUFBQTtFQUUxQjtBQUFBLEVBQ0QsUUFBUTtBQUNOLFVBQU0sY0FBYztBQUNwQixXQUFPLEVBQUU7RUFDVjtBQUFBLEVBQ0QsT0FBTztBQUFBLElBQ0wsUUFBUSxRQUFRLFFBQVE7QUFDdEIsVUFBSSxVQUFVLEdBQUc7QUFDZixhQUFLLFVBQVM7QUFBQSxNQUNoQjtBQUFBLElBQ0Q7QUFBQSxJQUNELE1BQU0sUUFBUSxRQUFRO0FBQ3BCLFVBQUksQ0FBQyxhQUFhLE1BQU0sTUFBTSxHQUFHO0FBQy9CLGFBQUssTUFBTSxNQUFNO2FBQ1o7QUFDTCxhQUFLLE1BQU0sTUFBTTtNQUNuQjtBQUFBLElBQ0Q7QUFBQSxJQUNELE1BQU0sUUFBUSxRQUFRO0FBQ3BCLFVBQUksQ0FBQyxhQUFhLE1BQU0sTUFBTSxHQUFHO0FBQy9CLGFBQUssTUFBTSxNQUFNO2FBQ1o7QUFDTCxhQUFLLE1BQU0sTUFBTTtNQUNuQjtBQUFBLElBQ0Q7QUFBQSxJQUNELE1BQU0sUUFBUSxRQUFRO0FBQ3BCLFVBQUksQ0FBQyxhQUFhLE1BQU0sTUFBTSxHQUFHO0FBQy9CLGFBQUssTUFBTSxNQUFNO2FBQ1o7QUFDTCxhQUFLLE1BQU0sTUFBTTtNQUNuQjtBQUFBLElBQ0Q7QUFBQSxJQUNELE1BQU0s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
