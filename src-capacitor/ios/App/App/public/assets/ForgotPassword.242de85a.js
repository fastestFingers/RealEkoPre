import { _ as _export_sfc, m as APIinterface, p as openBlock, V as createElementBlock, f as createVNode, t as withCtx, a7 as normalizeClass, F as Fragment, Y as QBtn, a6 as createTextVNode, Z as toDisplayString, U as createBaseVNode, q as createBlock, aY as QInput } from "./index.61ed5618.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QForm } from "./QForm.7ded9d38.js";
import { Q as QSpace } from "./QSpace.f164c087.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import "./QResizeObserver.d08dce3c.js";
const _sfc_main = {
  name: "ForgotPassword",
  data() {
    return {
      loading: false,
      email: "",
      password: "",
      steps: 1,
      data: [],
      maxCounter: 20,
      counter: this.maxCounter,
      timer: void 0
    };
  },
  watch: {
    counter(newval, oldval) {
      if (newval <= 0) {
        this.stopTimer();
      }
    }
  },
  beforeUnmount() {
    this.stopTimer();
  },
  methods: {
    onSubmit() {
      this.loading = true;
      APIinterface.requestResetPassword(this.email).then((data) => {
        this.steps = 2;
        this.startTimer();
        this.data = data;
      }).catch((error) => {
        APIinterface.notify("negative", error, "error_outline", this.$q);
      }).then((data) => {
        this.loading = false;
      });
    },
    stopTimer() {
      clearInterval(this.timer);
    },
    startTimer() {
      this.stopTimer();
      this.counter = this.maxCounter;
      this.timer = setInterval(() => {
        this.counter--;
      }, 1e3);
    },
    resendEmail() {
      this.loading = true;
      APIinterface.resendResetEmail(this.data.details.uuid).then((data) => {
        this.steps = 2;
        this.startTimer();
      }).catch((error) => {
        APIinterface.notify("red-5", error, "error_outline", this.$q);
      }).then((data) => {
        this.loading = false;
      });
    }
  }
};
const _hoisted_1 = { class: "full-width q-pa-md" };
const _hoisted_2 = { class: "text-weight-bold" };
const _hoisted_3 = {
  key: 0,
  class: "text-weight-medium q-ma-none"
};
const _hoisted_4 = {
  key: 1,
  class: "rounded-borders border-green q-pa-sm"
};
const _hoisted_5 = { key: 3 };
const _hoisted_6 = {
  key: 1,
  class: "font11 q-ma-none"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(QHeader, {
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
                createTextVNode(toDisplayString(_ctx.$t("Forgot Password")), 1)
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
          createBaseVNode("h5", _hoisted_2, toDisplayString(_ctx.$t("Let's Get your account back")) + "!", 1),
          $data.steps == 1 ? (openBlock(), createElementBlock("p", _hoisted_3, toDisplayString(_ctx.$t(
            "Enter your email to receive instructions for resetting your password."
          )), 1)) : (openBlock(), createElementBlock("p", _hoisted_4, toDisplayString($data.data.msg), 1)),
          createVNode(QBtn, {
            flat: "",
            label: _ctx.$t("Already have an account?"),
            "no-caps": "",
            class: "q-pa-none text-weight-bold min-height q-mb-md",
            color: "secondary",
            to: "/user/login"
          }, null, 8, ["label"]),
          $data.steps == 1 ? (openBlock(), createBlock(QForm, {
            key: 2,
            onSubmit: $options.onSubmit
          }, {
            default: withCtx(() => [
              createVNode(QInput, {
                modelValue: $data.email,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.email = $event),
                label: _ctx.$t("Email"),
                rules: [
                  (val) => val && val.length > 0 || this.$t("This field is required")
                ],
                outlined: "",
                "lazy-rules": "",
                "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
                "label-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                borderless: "",
                class: "input-borderless"
              }, null, 8, ["modelValue", "label", "rules", "bg-color", "label-color"]),
              createVNode(QBtn, {
                loading: $data.loading,
                type: "submit",
                label: _ctx.$t("Reset Password"),
                unelevated: "",
                "no-caps": "",
                color: "primary text-white",
                class: "full-width text-weight-bold",
                size: "lg"
              }, null, 8, ["loading", "label"])
            ]),
            _: 1
          }, 8, ["onSubmit"])) : (openBlock(), createElementBlock("div", _hoisted_5, [
            createVNode(QSpace, { class: "q-pa-xs" }),
            $data.counter === 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createVNode(QBtn, {
                onClick: $options.resendEmail,
                flat: "",
                dense: "",
                color: "myblue",
                "no-caps": "",
                class: "font13 q-ma-none"
              }, {
                default: withCtx(() => [
                  createBaseVNode("u", null, toDisplayString(_ctx.$t("Resend reset email")), 1)
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(QBtn, {
                onClick: _cache[2] || (_cache[2] = ($event) => $data.steps = 1),
                flat: "",
                dense: "",
                color: "secondary",
                "no-caps": "",
                class: "font13 q-ma-none"
              }, {
                default: withCtx(() => [
                  createBaseVNode("u", null, toDisplayString(_ctx.$t("Enter email again")), 1)
                ]),
                _: 1
              })
            ], 64)) : (openBlock(), createElementBlock("p", _hoisted_6, [
              createBaseVNode("u", null, toDisplayString(_ctx.$t("Resend Code in")) + " " + toDisplayString($data.counter), 1)
            ]))
          ]))
        ])
      ]),
      _: 1
    })
  ], 64);
}
var ForgotPassword = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "ForgotPassword.vue"]]);
export { ForgotPassword as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9yZ290UGFzc3dvcmQuMjQyZGU4NWEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9Vc2VyL0ZvcmdvdFBhc3N3b3JkLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLWhlYWRlclxuICAgIDpjbGFzcz1cIntcbiAgICAgICdiZy1teWRhcmsgdGV4dC13aGl0ZSc6ICRxLmRhcmsubW9kZSxcbiAgICAgICdiZy13aGl0ZSB0ZXh0LWRhcmsnOiAhJHEuZGFyay5tb2RlLFxuICAgIH1cIlxuICA+XG4gICAgPHEtdG9vbGJhcj5cbiAgICAgIDxxLWJ0blxuICAgICAgICBAY2xpY2s9XCIkcm91dGVyLmJhY2soKVwiXG4gICAgICAgIGZsYXRcbiAgICAgICAgcm91bmRcbiAgICAgICAgZGVuc2VcbiAgICAgICAgaWNvbj1cImxhcyBsYS1hbmdsZS1sZWZ0XCJcbiAgICAgICAgY2xhc3M9XCJxLW1yLXNtXCJcbiAgICAgICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ3doaXRlJyA6ICdkYXJrJ1wiXG4gICAgICAvPlxuICAgICAgPHEtdG9vbGJhci10aXRsZSBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGRcIj57e1xuICAgICAgICAkdChcIkZvcmdvdCBQYXNzd29yZFwiKVxuICAgICAgfX08L3EtdG9vbGJhci10aXRsZT5cbiAgICA8L3EtdG9vbGJhcj5cbiAgPC9xLWhlYWRlcj5cbiAgPHEtcGFnZSBwYWRkaW5nIGNsYXNzPVwiZmxleCBmbGV4LWNlbnRlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJmdWxsLXdpZHRoIHEtcGEtbWRcIj5cbiAgICAgIDxoNSBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGRcIj57eyAkdChcIkxldCdzIEdldCB5b3VyIGFjY291bnQgYmFja1wiKSB9fSE8L2g1PlxuXG4gICAgICA8cCBjbGFzcz1cInRleHQtd2VpZ2h0LW1lZGl1bSBxLW1hLW5vbmVcIiB2LWlmPVwic3RlcHMgPT0gMVwiPlxuICAgICAgICB7e1xuICAgICAgICAgICR0KFxuICAgICAgICAgICAgXCJFbnRlciB5b3VyIGVtYWlsIHRvIHJlY2VpdmUgaW5zdHJ1Y3Rpb25zIGZvciByZXNldHRpbmcgeW91ciBwYXNzd29yZC5cIlxuICAgICAgICAgIClcbiAgICAgICAgfX1cbiAgICAgIDwvcD5cbiAgICAgIDxwIHYtZWxzZSBjbGFzcz1cInJvdW5kZWQtYm9yZGVycyBib3JkZXItZ3JlZW4gcS1wYS1zbVwiPlxuICAgICAgICB7eyBkYXRhLm1zZyB9fVxuICAgICAgPC9wPlxuICAgICAgPHEtYnRuXG4gICAgICAgIGZsYXRcbiAgICAgICAgOmxhYmVsPVwiJHQoJ0FscmVhZHkgaGF2ZSBhbiBhY2NvdW50PycpXCJcbiAgICAgICAgbm8tY2Fwc1xuICAgICAgICBjbGFzcz1cInEtcGEtbm9uZSB0ZXh0LXdlaWdodC1ib2xkIG1pbi1oZWlnaHQgcS1tYi1tZFwiXG4gICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgdG89XCIvdXNlci9sb2dpblwiXG4gICAgICAvPlxuXG4gICAgICA8cS1mb3JtIEBzdWJtaXQ9XCJvblN1Ym1pdFwiIHYtaWY9XCJzdGVwcyA9PSAxXCI+XG4gICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgdi1tb2RlbD1cImVtYWlsXCJcbiAgICAgICAgICA6bGFiZWw9XCIkdCgnRW1haWwnKVwiXG4gICAgICAgICAgOnJ1bGVzPVwiW1xuICAgICAgICAgICAgKHZhbCkgPT5cbiAgICAgICAgICAgICAgKHZhbCAmJiB2YWwubGVuZ3RoID4gMCkgfHwgdGhpcy4kdCgnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCcpLFxuICAgICAgICAgIF1cIlxuICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgbGF6eS1ydWxlc1xuICAgICAgICAgIDpiZy1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5NjAwJyA6ICdpbnB1dCdcIlxuICAgICAgICAgIDpsYWJlbC1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICdncmV5J1wiXG4gICAgICAgICAgYm9yZGVybGVzc1xuICAgICAgICAgIGNsYXNzPVwiaW5wdXQtYm9yZGVybGVzc1wiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgOmxvYWRpbmc9XCJsb2FkaW5nXCJcbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICA6bGFiZWw9XCIkdCgnUmVzZXQgUGFzc3dvcmQnKVwiXG4gICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnkgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgY2xhc3M9XCJmdWxsLXdpZHRoIHRleHQtd2VpZ2h0LWJvbGRcIlxuICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgIC8+XG4gICAgICA8L3EtZm9ybT5cblxuICAgICAgPGRpdiB2LWVsc2U+XG4gICAgICAgIDxxLXNwYWNlIGNsYXNzPVwicS1wYS14c1wiPjwvcS1zcGFjZT5cbiAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJjb3VudGVyID09PSAwXCI+XG4gICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICBAY2xpY2s9XCJyZXNlbmRFbWFpbFwiXG4gICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgY29sb3I9XCJteWJsdWVcIlxuICAgICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgICAgY2xhc3M9XCJmb250MTMgcS1tYS1ub25lXCJcbiAgICAgICAgICAgID48dT57eyAkdChcIlJlc2VuZCByZXNldCBlbWFpbFwiKSB9fTwvdT48L3EtYnRuXG4gICAgICAgICAgPlxuICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgQGNsaWNrPVwic3RlcHMgPSAxXCJcbiAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgICBjbGFzcz1cImZvbnQxMyBxLW1hLW5vbmVcIlxuICAgICAgICAgICAgPjx1Pnt7ICR0KFwiRW50ZXIgZW1haWwgYWdhaW5cIikgfX08L3U+PC9xLWJ0blxuICAgICAgICAgID5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPHAgdi1lbHNlIGNsYXNzPVwiZm9udDExIHEtbWEtbm9uZVwiPlxuICAgICAgICAgIDx1Pnt7ICR0KFwiUmVzZW5kIENvZGUgaW5cIikgfX0ge3sgY291bnRlciB9fTwvdT5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPCEtLSBmdWxsLXdpZHRoIC0tPlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgQVBJaW50ZXJmYWNlIGZyb20gXCJzcmMvYXBpL0FQSWludGVyZmFjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiRm9yZ290UGFzc3dvcmRcIixcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICBlbWFpbDogXCJcIixcbiAgICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgICAgc3RlcHM6IDEsXG4gICAgICBkYXRhOiBbXSxcbiAgICAgIG1heENvdW50ZXI6IDIwLFxuICAgICAgY291bnRlcjogdGhpcy5tYXhDb3VudGVyLFxuICAgICAgdGltZXI6IHVuZGVmaW5lZCxcbiAgICB9O1xuICB9LFxuICB3YXRjaDoge1xuICAgIGNvdW50ZXIobmV3dmFsLCBvbGR2YWwpIHtcbiAgICAgIGlmIChuZXd2YWwgPD0gMCkge1xuICAgICAgICB0aGlzLnN0b3BUaW1lcigpO1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG4gIGJlZm9yZVVubW91bnQoKSB7XG4gICAgdGhpcy5zdG9wVGltZXIoKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG9uU3VibWl0KCkge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIEFQSWludGVyZmFjZS5yZXF1ZXN0UmVzZXRQYXNzd29yZCh0aGlzLmVtYWlsKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuc3RlcHMgPSAyO1xuICAgICAgICAgIHRoaXMuc3RhcnRUaW1lcigpO1xuICAgICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBBUElpbnRlcmZhY2Uubm90aWZ5KFwibmVnYXRpdmVcIiwgZXJyb3IsIFwiZXJyb3Jfb3V0bGluZVwiLCB0aGlzLiRxKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBzdG9wVGltZXIoKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuICAgIH0sXG4gICAgc3RhcnRUaW1lcigpIHtcbiAgICAgIHRoaXMuc3RvcFRpbWVyKCk7XG4gICAgICB0aGlzLmNvdW50ZXIgPSB0aGlzLm1heENvdW50ZXI7XG4gICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICB0aGlzLmNvdW50ZXItLTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH0sXG4gICAgcmVzZW5kRW1haWwoKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgQVBJaW50ZXJmYWNlLnJlc2VuZFJlc2V0RW1haWwodGhpcy5kYXRhLmRldGFpbHMudXVpZClcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLnN0ZXBzID0gMjtcbiAgICAgICAgICB0aGlzLnN0YXJ0VGltZXIoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJyZWQtNVwiLCBlcnJvciwgXCJlcnJvcl9vdXRsaW5lXCIsIHRoaXMuJHEpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbIl9jcmVhdGVWTm9kZSIsIl9ub3JtYWxpemVDbGFzcyIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9vcGVuQmxvY2siLCJfY3JlYXRlQmxvY2siLCJfRnJhZ21lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBMkdBLE1BQUssWUFBVTtBQUFBLEVBQ2IsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUNMLFdBQU87QUFBQSxNQUNMLFNBQVM7QUFBQSxNQUNULE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxNQUNWLE9BQU87QUFBQSxNQUNQLE1BQU0sQ0FBRTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osU0FBUyxLQUFLO0FBQUEsTUFDZCxPQUFPO0FBQUE7RUFFVjtBQUFBLEVBQ0QsT0FBTztBQUFBLElBQ0wsUUFBUSxRQUFRLFFBQVE7QUFDdEIsVUFBSSxVQUFVLEdBQUc7QUFDZixhQUFLLFVBQVM7QUFBQSxNQUNoQjtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRCxnQkFBZ0I7QUFDZCxTQUFLLFVBQVM7QUFBQSxFQUNmO0FBQUEsRUFDRCxTQUFTO0FBQUEsSUFDUCxXQUFXO0FBQ1QsV0FBSyxVQUFVO0FBQ2YsbUJBQWEscUJBQXFCLEtBQUssS0FBSyxFQUN6QyxLQUFLLENBQUMsU0FBUztBQUNkLGFBQUssUUFBUTtBQUNiLGFBQUssV0FBVTtBQUNmLGFBQUssT0FBTztBQUFBLE9BQ2IsRUFDQSxNQUFNLENBQUMsVUFBVTtBQUNoQixxQkFBYSxPQUFPLFlBQVksT0FBTyxpQkFBaUIsS0FBSyxFQUFFO0FBQUEsT0FDaEUsRUFDQSxLQUFLLENBQUMsU0FBUztBQUNkLGFBQUssVUFBVTtBQUFBLE1BQ2pCLENBQUM7QUFBQSxJQUNKO0FBQUEsSUFDRCxZQUFZO0FBQ1Ysb0JBQWMsS0FBSyxLQUFLO0FBQUEsSUFDekI7QUFBQSxJQUNELGFBQWE7QUFDWCxXQUFLLFVBQVM7QUFDZCxXQUFLLFVBQVUsS0FBSztBQUNwQixXQUFLLFFBQVEsWUFBWSxNQUFNO0FBQzdCLGFBQUs7QUFBQSxNQUNOLEdBQUUsR0FBSTtBQUFBLElBQ1I7QUFBQSxJQUNELGNBQWM7QUFDWixXQUFLLFVBQVU7QUFDZixtQkFBYSxpQkFBaUIsS0FBSyxLQUFLLFFBQVEsSUFBSSxFQUNqRCxLQUFLLENBQUMsU0FBUztBQUNkLGFBQUssUUFBUTtBQUNiLGFBQUssV0FBVTtBQUFBLE9BQ2hCLEVBQ0EsTUFBTSxDQUFDLFVBQVU7QUFDaEIscUJBQWEsT0FBTyxTQUFTLE9BQU8saUJBQWlCLEtBQUssRUFBRTtBQUFBLE9BQzdELEVBQ0EsS0FBSyxDQUFDLFNBQVM7QUFDZCxhQUFLLFVBQVU7QUFBQSxNQUNqQixDQUFDO0FBQUEsSUFDSjtBQUFBLEVBQ0Y7QUFDSDtBQXJKUyxNQUFBLGFBQUEsRUFBQSxPQUFNLHFCQUFvQjtBQUN6QixNQUFBLGFBQUEsRUFBQSxPQUFNLG1CQUFrQjs7O0VBRXpCLE9BQU07Ozs7RUFPQyxPQUFNOzs7OztFQThESixPQUFNOzs7O0lBOUZ0QkEsWUFvQlcsU0FBQTtBQUFBLE1BbkJSLE9BQUtDLGVBQUE7QUFBQSxnQ0FBa0MsS0FBRSxHQUFDLEtBQUs7QUFBQSwrQkFBbUMsS0FBRSxHQUFDLEtBQUs7QUFBQTs7dUJBSzNGLE1BYVk7QUFBQSxRQWJaRCxZQWFZLFVBQUEsTUFBQTtBQUFBLDJCQVpWLE1BUUU7QUFBQSxZQVJGQSxZQVFFLE1BQUE7QUFBQSxjQVBDLFNBQUssT0FBQSxPQUFBLE9BQUEsS0FBQSxZQUFFLEtBQU8sUUFBQyxLQUFJO0FBQUEsY0FDcEIsTUFBQTtBQUFBLGNBQ0EsT0FBQTtBQUFBLGNBQ0EsT0FBQTtBQUFBLGNBQ0EsTUFBSztBQUFBLGNBQ0wsT0FBTTtBQUFBLGNBQ0wsT0FBTyxLQUFBLEdBQUcsS0FBSyxPQUFJLFVBQUE7QUFBQTtZQUV0QkEsWUFFb0IsZUFBQSxFQUFBLE9BQUEsbUJBRnFCLEdBQUE7QUFBQSwrQkFBQyxNQUV4QztBQUFBLGdEQURBLEtBQUUsR0FBQSxpQkFBQSxDQUFBLEdBQUEsQ0FBQTtBQUFBOzs7Ozs7Ozs7SUFJUkEsWUErRVMsT0FBQTtBQUFBLE1BL0VELFNBQUE7QUFBQSxNQUFRLE9BQU07QUFBQTt1QkFDcEIsTUE0RU07QUFBQSxRQTVFTkUsZ0JBNEVNLE9BNUVOLFlBNEVNO0FBQUEsVUEzRUpBLGdCQUEwRSxNQUExRSxZQUFnQ0MsZ0JBQUEsS0FBQSxxQ0FBb0MsS0FBQyxDQUFBO0FBQUEsVUFFdkIsTUFBSyxTQUFBLGtCQUFuREMsbUJBTUksS0FOSixZQU1JRCxnQkFKQSxLQUFFO0FBQUE7cUJBS05FLGFBQUFELG1CQUVJLEtBRkosWUFDS0QsZ0JBQUEsTUFBQSxLQUFLLEdBQUcsR0FBQSxDQUFBO0FBQUEsVUFFYkgsWUFPRSxNQUFBO0FBQUEsWUFOQSxNQUFBO0FBQUEsWUFDQyxPQUFPLEtBQUUsR0FBQSwwQkFBQTtBQUFBLFlBQ1YsV0FBQTtBQUFBLFlBQ0EsT0FBTTtBQUFBLFlBQ04sT0FBTTtBQUFBLFlBQ04sSUFBRztBQUFBO1VBRzRCLE1BQUssU0FBQSxrQkFBdENNLFlBMEJTLE9BQUE7QUFBQTtZQTFCQSxVQUFRLFNBQVE7QUFBQTs2QkFDdkIsTUFhRTtBQUFBLGNBYkZOLFlBYUUsUUFBQTtBQUFBLDRCQVpTLE1BQUs7QUFBQSw2RUFBTCxNQUFLLFFBQUE7QUFBQSxnQkFDYixPQUFPLEtBQUUsR0FBQSxPQUFBO0FBQUEsZ0JBQ1QsT0FBSztBQUFBLG1CQUFpQixRQUF1QixPQUFPLElBQUksbUJBQW9CLEdBQUUsd0JBQUE7QUFBQTtnQkFJL0UsVUFBQTtBQUFBLGdCQUNBLGNBQUE7QUFBQSxnQkFDQyxZQUFVLEtBQUEsR0FBRyxLQUFLLE9BQUksWUFBQTtBQUFBLGdCQUN0QixlQUFhLEtBQUEsR0FBRyxLQUFLLE9BQUksWUFBQTtBQUFBLGdCQUMxQixZQUFBO0FBQUEsZ0JBQ0EsT0FBTTtBQUFBO2NBR1JBLFlBU0UsTUFBQTtBQUFBLGdCQVJDLFNBQVMsTUFBTztBQUFBLGdCQUNqQixNQUFLO0FBQUEsZ0JBQ0osT0FBTyxLQUFFLEdBQUEsZ0JBQUE7QUFBQSxnQkFDVixZQUFBO0FBQUEsZ0JBQ0EsV0FBQTtBQUFBLGdCQUNBLE9BQU07QUFBQSxnQkFDTixPQUFNO0FBQUEsZ0JBQ04sTUFBSztBQUFBOzs7K0NBSVRJLG1CQXlCTSxPQUFBLFlBQUE7QUFBQSxZQXhCSkosWUFBbUMsUUFBQSxFQUFBLE9BQUEsVUFBckIsQ0FBQTtBQUFBLFlBQ0UsTUFBTyxZQUFBLGtCQUF2QkksbUJBbUJXRyxVQUFBLEVBQUEsS0FBQSxFQUFBLEdBQUE7QUFBQSxjQWxCVFAsWUFRQyxNQUFBO0FBQUEsZ0JBUEUsU0FBTyxTQUFXO0FBQUEsZ0JBQ25CLE1BQUE7QUFBQSxnQkFDQSxPQUFBO0FBQUEsZ0JBQ0EsT0FBTTtBQUFBLGdCQUNOLFdBQUE7QUFBQSxnQkFDQSxPQUFNO0FBQUE7aUNBQ0wsTUFBcUM7QUFBQSxrQkFBckNFLGdCQUFxQywyQkFBL0IsS0FBRSxHQUFBLG9CQUFBLENBQUEsR0FBQSxDQUFBO0FBQUE7OztjQUVYRixZQVFDLE1BQUE7QUFBQSxnQkFQRSwrQ0FBTyxNQUFLLFFBQUE7QUFBQSxnQkFDYixNQUFBO0FBQUEsZ0JBQ0EsT0FBQTtBQUFBLGdCQUNBLE9BQU07QUFBQSxnQkFDTixXQUFBO0FBQUEsZ0JBQ0EsT0FBTTtBQUFBO2lDQUNMLE1BQW9DO0FBQUEsa0JBQXBDRSxnQkFBb0MsMkJBQTlCLEtBQUUsR0FBQSxtQkFBQSxDQUFBLEdBQUEsQ0FBQTtBQUFBOzs7dUJBR2JHLGFBQUFELG1CQUVJLEtBRkosWUFFSTtBQUFBLGNBREZGLGdCQUErQyxLQUF6QyxNQUFBQyxnQkFBQSxLQUFBLEdBQXVCLGdCQUFBLENBQUEsSUFBQSxzQkFBSSxNQUFPLE9BQUEsR0FBQSxDQUFBO0FBQUE7Ozs7Ozs7Ozs7In0=
