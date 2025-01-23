import { Q as QSpace } from "./QSpace.f164c087.js";
import { _ as _export_sfc, m as APIinterface, p as openBlock, q as createBlock, t as withCtx, f as createVNode, Y as QBtn, a9 as QCardSection, U as createBaseVNode, Z as toDisplayString, V as createElementBlock, aA as createCommentVNode, aY as QInput, a8 as QCard, aB as QDialog } from "./index.61ed5618.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QForm } from "./QForm.7ded9d38.js";
import { Q as QInnerLoading } from "./QInnerLoading.abe2afe6.js";
const _sfc_main = {
  name: "StepsVerification",
  props: ["sent_message"],
  data() {
    return {
      show_modal: false,
      loading: false,
      visible: false,
      code: "",
      counter: 20,
      timer: void 0,
      sent_message2: ""
    };
  },
  computed: {
    hasCode() {
      if (!APIinterface.empty(this.code)) {
        return false;
      }
      return true;
    }
  },
  updated() {
    this.code = "";
  },
  watch: {
    counter(newval, oldval) {
      if (newval <= 0) {
        this.stopTimer();
      }
    },
    show_modal(newval, oldval) {
      if (newval) {
        this.startTimer();
      }
    },
    sent_message(newval, oldval) {
      this.sent_message2 = newval;
    }
  },
  methods: {
    onSubmit() {
      this.$emit("afterVerifycode", this.code);
    },
    stopTimer() {
      clearInterval(this.timer);
    },
    startTimer() {
      this.stopTimer();
      this.counter = 20;
      this.timer = setInterval(() => {
        this.counter--;
      }, 1e3);
    },
    resendCode() {
      this.loading = true;
      APIinterface.RequestEmailCode().then((data) => {
        this.sent_message2 = data.msg;
        this.startTimer();
      }).catch((error) => {
        APIinterface.notify("red-5", error, "error_outline", this.$q);
      }).then((data) => {
        this.loading = false;
      });
    }
  }
};
const _hoisted_1 = { class: "text-weight-bold q-mt-none" };
const _hoisted_2 = { class: "text-weight-medium line-normal" };
const _hoisted_3 = {
  key: 0,
  class: "text-weight-bold font11"
};
const _hoisted_4 = { class: "q-mb-sm text-center" };
const _hoisted_5 = {
  key: 1,
  class: "font11 q-ma-none"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QDialog, {
    modelValue: $data.show_modal,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.show_modal = $event),
    persistent: "",
    position: "bottom"
  }, {
    default: withCtx(() => [
      createVNode(QCard, null, {
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
              createVNode(QCardSection, { class: "text-center" }, {
                default: withCtx(() => [
                  createBaseVNode("h4", _hoisted_1, toDisplayString(_ctx.$t("2-Step Verification")), 1),
                  createBaseVNode("p", _hoisted_2, toDisplayString(_ctx.$t("For your security, we want to make sure it's really you.")), 1),
                  $data.sent_message2 ? (openBlock(), createElementBlock("p", _hoisted_3, toDisplayString($data.sent_message2), 1)) : createCommentVNode("", true),
                  createVNode(QInput, {
                    "bg-color": _ctx.$q.dark.mode ? "grey600" : "mygrey",
                    color: _ctx.$q.dark.mode ? "grey300" : "primary",
                    outlined: "",
                    modelValue: $data.code,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.code = $event),
                    label: _ctx.$t("Code"),
                    maxlength: "6",
                    "lazy-rules": "",
                    rules: [(val) => val && val.length > 0 || "Code is required"],
                    mask: "######"
                  }, null, 8, ["bg-color", "color", "modelValue", "label", "rules"]),
                  createVNode(QBtn, {
                    type: "submit",
                    unelevated: "",
                    "no-caps": "",
                    class: "full-width q-mb-md",
                    label: _ctx.$t("Submit"),
                    size: "lg",
                    disabled: $options.hasCode,
                    loading: $data.loading,
                    color: $options.hasCode == false ? "primary" : "grey-5",
                    "text-color": $options.hasCode == false ? "white" : "dark"
                  }, null, 8, ["label", "disabled", "loading", "color", "text-color"]),
                  createBaseVNode("div", _hoisted_4, [
                    $data.counter === 0 ? (openBlock(), createBlock(QBtn, {
                      key: 0,
                      onClick: $options.resendCode,
                      flat: "",
                      color: "blue",
                      "no-caps": "",
                      label: _ctx.$t("Resend"),
                      dense: "",
                      size: "sm"
                    }, null, 8, ["onClick", "label"])) : (openBlock(), createElementBlock("p", _hoisted_5, [
                      createBaseVNode("u", null, toDisplayString(_ctx.$t("Resend Code in")) + " " + toDisplayString($data.counter), 1)
                    ]))
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["onSubmit"]),
          createVNode(QInnerLoading, {
            showing: $data.visible,
            color: "primary",
            size: "md",
            "label-class": "dark"
          }, null, 8, ["showing"])
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["modelValue"]);
}
var StepsVerification = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "StepsVerification.vue"]]);
export { StepsVerification as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RlcHNWZXJpZmljYXRpb24uNjRmN2IyMjEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1N0ZXBzVmVyaWZpY2F0aW9uLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDwhLS0gPHEtZGlhbG9nIHYtbW9kZWw9XCJzaG93X21vZGFsXCIgcGVyc2lzdGVudCB0cmFuc2l0aW9uLXNob3c9XCJzY2FsZVwiIHRyYW5zaXRpb24taGlkZT1cInNjYWxlXCIgcG9zaXRpb249XCJib3R0b21cIiA+IC0tPlxuICA8cS1kaWFsb2cgdi1tb2RlbD1cInNob3dfbW9kYWxcIiBwZXJzaXN0ZW50IHBvc2l0aW9uPVwiYm90dG9tXCI+XG4gICAgPHEtY2FyZD5cbiAgICAgIDxxLXRvb2xiYXIgY2xhc3M9XCJ0ZXh0LXByaW1hcnkgdG9wLXRvb2xiYXIgcS1wbC1tZFwiIGRlbnNlPlxuICAgICAgICA8cS1zcGFjZT48L3Etc3BhY2U+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIEBjbGljaz1cInNob3dfbW9kYWwgPSAhdHJ1ZVwiXG4gICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgc3F1YXJlXG4gICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgIHRleHQtY29sb3I9XCJncmV5XCJcbiAgICAgICAgICBpY29uPVwibGFzIGxhLXRpbWVzXCJcbiAgICAgICAgICBkZW5zZVxuICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgIGNsYXNzPVwiYm9yZGVyLWdyZXkgcmFkaXVzOFwiXG4gICAgICAgIC8+XG4gICAgICA8L3EtdG9vbGJhcj5cblxuICAgICAgPHEtZm9ybSBAc3VibWl0PVwib25TdWJtaXRcIj5cbiAgICAgICAgPHEtY2FyZC1zZWN0aW9uIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8aDQgY2xhc3M9XCJ0ZXh0LXdlaWdodC1ib2xkIHEtbXQtbm9uZVwiPlxuICAgICAgICAgICAge3sgJHQoXCIyLVN0ZXAgVmVyaWZpY2F0aW9uXCIpIH19XG4gICAgICAgICAgPC9oND5cbiAgICAgICAgICA8cCBjbGFzcz1cInRleHQtd2VpZ2h0LW1lZGl1bSBsaW5lLW5vcm1hbFwiPlxuICAgICAgICAgICAge3sgJHQoXCJGb3IgeW91ciBzZWN1cml0eSwgd2Ugd2FudCB0byBtYWtlIHN1cmUgaXQncyByZWFsbHkgeW91LlwiKSB9fVxuICAgICAgICAgIDwvcD5cblxuICAgICAgICAgIDxwIHYtaWY9XCJzZW50X21lc3NhZ2UyXCIgY2xhc3M9XCJ0ZXh0LXdlaWdodC1ib2xkIGZvbnQxMVwiPlxuICAgICAgICAgICAge3sgc2VudF9tZXNzYWdlMiB9fVxuICAgICAgICAgIDwvcD5cblxuICAgICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgICA6YmctY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTYwMCcgOiAnbXlncmV5J1wiXG4gICAgICAgICAgICA6Y29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTMwMCcgOiAncHJpbWFyeSdcIlxuICAgICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICAgIHYtbW9kZWw9XCJjb2RlXCJcbiAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdDb2RlJylcIlxuICAgICAgICAgICAgbWF4bGVuZ3RoPVwiNlwiXG4gICAgICAgICAgICBsYXp5LXJ1bGVzXG4gICAgICAgICAgICA6cnVsZXM9XCJbKHZhbCkgPT4gKHZhbCAmJiB2YWwubGVuZ3RoID4gMCkgfHwgJ0NvZGUgaXMgcmVxdWlyZWQnXVwiXG4gICAgICAgICAgICBtYXNrPVwiIyMjIyMjXCJcbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICAgIGNsYXNzPVwiZnVsbC13aWR0aCBxLW1iLW1kXCJcbiAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdTdWJtaXQnKVwiXG4gICAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgICAgOmRpc2FibGVkPVwiaGFzQ29kZVwiXG4gICAgICAgICAgICA6bG9hZGluZz1cImxvYWRpbmdcIlxuICAgICAgICAgICAgOmNvbG9yPVwiaGFzQ29kZSA9PSBmYWxzZSA/ICdwcmltYXJ5JyA6ICdncmV5LTUnXCJcbiAgICAgICAgICAgIDp0ZXh0LWNvbG9yPVwiaGFzQ29kZSA9PSBmYWxzZSA/ICd3aGl0ZScgOiAnZGFyaydcIlxuICAgICAgICAgID5cbiAgICAgICAgICA8L3EtYnRuPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInEtbWItc20gdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICBAY2xpY2s9XCJyZXNlbmRDb2RlXCJcbiAgICAgICAgICAgICAgdi1pZj1cImNvdW50ZXIgPT09IDBcIlxuICAgICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICAgIGNvbG9yPVwiYmx1ZVwiXG4gICAgICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ1Jlc2VuZCcpXCJcbiAgICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cCB2LWVsc2UgY2xhc3M9XCJmb250MTEgcS1tYS1ub25lXCI+XG4gICAgICAgICAgICAgIDx1Pnt7ICR0KFwiUmVzZW5kIENvZGUgaW5cIikgfX0ge3sgY291bnRlciB9fTwvdT5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgIDwvcS1mb3JtPlxuXG4gICAgICA8cS1pbm5lci1sb2FkaW5nXG4gICAgICAgIDpzaG93aW5nPVwidmlzaWJsZVwiXG4gICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgIGxhYmVsLWNsYXNzPVwiZGFya1wiXG4gICAgICAvPlxuICAgIDwvcS1jYXJkPlxuICA8L3EtZGlhbG9nPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBBUElpbnRlcmZhY2UgZnJvbSBcInNyYy9hcGkvQVBJaW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJTdGVwc1ZlcmlmaWNhdGlvblwiLFxuICBwcm9wczogW1wic2VudF9tZXNzYWdlXCJdLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzaG93X21vZGFsOiBmYWxzZSxcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICBjb2RlOiBcIlwiLFxuICAgICAgY291bnRlcjogMjAsXG4gICAgICB0aW1lcjogdW5kZWZpbmVkLFxuICAgICAgc2VudF9tZXNzYWdlMjogXCJcIixcbiAgICB9O1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGhhc0NvZGUoKSB7XG4gICAgICBpZiAoIUFQSWludGVyZmFjZS5lbXB0eSh0aGlzLmNvZGUpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gIH0sXG4gIHVwZGF0ZWQoKSB7XG4gICAgdGhpcy5jb2RlID0gXCJcIjtcbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBjb3VudGVyKG5ld3ZhbCwgb2xkdmFsKSB7XG4gICAgICBpZiAobmV3dmFsIDw9IDApIHtcbiAgICAgICAgdGhpcy5zdG9wVGltZXIoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHNob3dfbW9kYWwobmV3dmFsLCBvbGR2YWwpIHtcbiAgICAgIGlmIChuZXd2YWwpIHtcbiAgICAgICAgdGhpcy5zdGFydFRpbWVyKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBzZW50X21lc3NhZ2UobmV3dmFsLCBvbGR2YWwpIHtcbiAgICAgIHRoaXMuc2VudF9tZXNzYWdlMiA9IG5ld3ZhbDtcbiAgICB9LFxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25TdWJtaXQoKSB7XG4gICAgICB0aGlzLiRlbWl0KFwiYWZ0ZXJWZXJpZnljb2RlXCIsIHRoaXMuY29kZSk7XG4gICAgfSxcbiAgICBzdG9wVGltZXIoKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuICAgIH0sXG4gICAgc3RhcnRUaW1lcigpIHtcbiAgICAgIHRoaXMuc3RvcFRpbWVyKCk7XG4gICAgICB0aGlzLmNvdW50ZXIgPSAyMDtcbiAgICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHRoaXMuY291bnRlci0tO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfSxcbiAgICByZXNlbmRDb2RlKCkge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIEFQSWludGVyZmFjZS5SZXF1ZXN0RW1haWxDb2RlKClcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLnNlbnRfbWVzc2FnZTIgPSBkYXRhLm1zZztcbiAgICAgICAgICB0aGlzLnN0YXJ0VGltZXIoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJyZWQtNVwiLCBlcnJvciwgXCJlcnJvcl9vdXRsaW5lXCIsIHRoaXMuJHEpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbIl9jcmVhdGVCbG9jayIsIl9jcmVhdGVWTm9kZSIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9vcGVuQmxvY2siXSwibWFwcGluZ3MiOiI7Ozs7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
