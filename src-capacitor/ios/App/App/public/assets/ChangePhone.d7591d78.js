import { _ as _export_sfc, l as defineAsyncComponent, u as __vitePreload, m as APIinterface, n as resolveComponent, p as openBlock, V as createElementBlock, f as createVNode, t as withCtx, a8 as QCard, a7 as normalizeClass, a6 as createTextVNode, Z as toDisplayString, Y as QBtn, a9 as QCardSection, U as createBaseVNode, aY as QInput, ac as QItem, ad as QItemSection, bE as QCardActions, aB as QDialog, F as Fragment } from "./index.61ed5618.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QSpace } from "./QSpace.f164c087.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QSelect } from "./QSelect.311187d6.js";
import { Q as QForm } from "./QForm.7ded9d38.js";
import "./QChip.f183a4f1.js";
import "./QItemLabel.a9365c5b.js";
import "./QMenu.8e482cd8.js";
import "./selection.50b4cb0c.js";
import "./rtl.f3ed811c.js";
import "./format.7f7370d3.js";
const _sfc_main = {
  name: "ChangePhone",
  props: ["prefixes", "phone_prefix_orig", "contact_number_orig"],
  components: {
    StepsVerification: defineAsyncComponent(
      () => __vitePreload(() => import("./StepsVerification.64f7b221.js"), true ? ["assets/StepsVerification.64f7b221.js","assets/QSpace.f164c087.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QToolbar.c8fc6962.js","assets/QForm.7ded9d38.js","assets/QInnerLoading.abe2afe6.js"] : void 0)
    )
  },
  data() {
    return {
      show_modal: false,
      loading: false,
      phone_prefix: "",
      phone_number: "",
      sent_message: ""
    };
  },
  computed: {
    hasChangePhone() {
      if (this.phone_prefix_orig !== this.phone_prefix) {
        return false;
      }
      if (this.contact_number_orig !== this.phone_number) {
        return false;
      }
      return true;
    }
  },
  updated() {
    if (APIinterface.empty(this.phone_prefix)) {
      this.phone_prefix = this.phone_prefix_orig;
    }
    if (APIinterface.empty(this.phone_number)) {
      this.phone_number = this.contact_number_orig;
    }
  },
  watch: {
    phone_prefix_orig(newval, oldval) {
      this.phone_prefix = newval;
    },
    contact_number_orig(newval, oldval) {
      this.phone_number = newval;
    }
  },
  methods: {
    showModal(data) {
      this.show_modal = data;
    },
    beforeSubmit() {
      this.loading = true;
      APIinterface.RequestEmailCode().then((data) => {
        this.sent_message = data.msg;
        this.show_modal = false;
        this.$refs.steps_verification.show_modal = true;
      }).catch((error) => {
        APIinterface.notify("grey-8", error, "error_outline", this.$q);
      }).then((data) => {
        this.loading = false;
      });
    },
    afterVerifycode(code) {
      this.$refs.steps_verification.visible = true;
      const $data = {
        code,
        phone_prefix: this.phone_prefix,
        phone_number: this.phone_number,
        cart_uuid: APIinterface.getStorage("cart_uuid")
      };
      APIinterface.ChangePhone($data).then((data) => {
        this.$refs.steps_verification.show_modal = false;
        APIinterface.notify("dark", data.msg, "done", this.$q);
        this.$emit("afterChangephone", data.details);
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data) => {
        this.$refs.steps_verification.visible = false;
      });
    }
  }
};
const _hoisted_1 = { class: "font12" };
const _hoisted_2 = { class: "radius8 q-pa-sm border-grey" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_StepsVerification = resolveComponent("StepsVerification");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(QDialog, {
      modelValue: $data.show_modal,
      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.show_modal = $event),
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
                createVNode(QToolbarTitle, {
                  class: normalizeClass(["text-weight-bold", {
                    "text-white": _ctx.$q.dark.mode,
                    "text-dark": !_ctx.$q.dark.mode
                  }])
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("Your phone number")), 1)
                  ]),
                  _: 1
                }, 8, ["class"]),
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
            createVNode(QForm, { onSubmit: $options.beforeSubmit }, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_1, toDisplayString(_ctx.$t(
                      "A 6 digit OTP will be sent via SMS to verify your mobile number"
                    )), 1),
                    createBaseVNode("div", _hoisted_2, [
                      createVNode(QInput, {
                        modelValue: $data.phone_number,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.phone_number = $event),
                        dense: "",
                        mask: "####################",
                        color: _ctx.$q.dark.mode ? "grey300" : "dark",
                        "bg-color": _ctx.$q.dark.mode ? "grey600" : "white",
                        borderless: "",
                        size: "lg"
                      }, {
                        prepend: withCtx(() => [
                          createVNode(QSelect, {
                            dense: "",
                            modelValue: $data.phone_prefix,
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.phone_prefix = $event),
                            options: $props.prefixes,
                            behavior: "dialog",
                            "input-debounce": "700",
                            style: { "border": "none" },
                            "emit-value": "",
                            borderless: ""
                          }, {
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
                          }, 8, ["modelValue", "options"])
                        ]),
                        _: 1
                      }, 8, ["modelValue", "color", "bg-color"])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(QCardActions, {
                  vertical: "",
                  align: "center",
                  class: "q-pa-md"
                }, {
                  default: withCtx(() => [
                    createVNode(QBtn, {
                      disabled: $options.hasChangePhone,
                      loading: $data.loading,
                      type: "submit",
                      label: _ctx.$t("Save"),
                      unelevated: "",
                      color: $options.hasChangePhone == false ? "primary" : "grey-5",
                      "text-color": $options.hasChangePhone == false ? "white" : "dark",
                      "no-caps": "",
                      class: "full-width",
                      size: "lg"
                    }, null, 8, ["disabled", "loading", "label", "color", "text-color"])
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
    createVNode(_component_StepsVerification, {
      ref: "steps_verification",
      sent_message: $data.sent_message,
      phone_prefix: $data.phone_prefix,
      phone_number: $data.phone_number,
      onAfterVerifycode: $options.afterVerifycode
    }, null, 8, ["sent_message", "phone_prefix", "phone_number", "onAfterVerifycode"])
  ], 64);
}
var ChangePhone = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "ChangePhone.vue"]]);
export { ChangePhone as default };
//# sourceMappingURL=data:application/json;base64,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aUIsbUNBRkksR0FBWTtBQUFBLHFEQUMvQixNQUFzQjtBQUFBLHNFQUFuQixLQUFFO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBVXJCQSxZQWFpQjtBQUFBLGtCQWJEO0FBQUEsa0JBQVMsT0FBTTtBQUFBLGtCQUFTLE9BQU07QUFBQTttQ0FDNUMsTUFXRTtBQUFBLG9CQVhGQSxZQVdFO0FBQUEsc0JBVkMsVUFBVSxTQUFjO0FBQUEsc0JBQ3hCLFNBQVMsTUFBTztBQUFBLHNCQUNqQixNQUFLO0FBQUEsc0JBQ0osT0FBTyxLQUFFO0FBQUEsc0JBQ1Y7QUFBQSxzQkFDQyxPQUFPLFNBQWM7QUFBQSxzQkFDckIsY0FBWSxTQUFjO0FBQUEsc0JBQzNCO0FBQUEsc0JBQ0EsT0FBTTtBQUFBLHNCQUNOLE1BQUs7QUFBQTs7Ozs7Ozs7Ozs7OztJQU9mQSxZQU1FO0FBQUEsTUFMQSxLQUFJO0FBQUEsTUFDSCxjQUFjLE1BQVk7QUFBQSxNQUMxQixjQUFjLE1BQVk7QUFBQSxNQUMxQixjQUFjLE1BQVk7QUFBQSxNQUMxQixtQkFBa0IsU0FBZTtBQUFBIiwibmFtZXMiOlsiX2NyZWF0ZVZOb2RlIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl90b0Rpc3BsYXlTdHJpbmciXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9DaGFuZ2VQaG9uZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8cS1kaWFsb2cgdi1tb2RlbD1cInNob3dfbW9kYWxcIiBwb3NpdGlvbj1cImJvdHRvbVwiPlxuICAgIDxxLWNhcmQ+XG4gICAgICA8cS10b29sYmFyIGNsYXNzPVwidGV4dC1wcmltYXJ5IHRvcC10b29sYmFyIHEtcGwtbWRcIiBkZW5zZT5cbiAgICAgICAgPHEtdG9vbGJhci10aXRsZVxuICAgICAgICAgIGNsYXNzPVwidGV4dC13ZWlnaHQtYm9sZFwiXG4gICAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICAgJ3RleHQtd2hpdGUnOiAkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgICAndGV4dC1kYXJrJzogISRxLmRhcmsubW9kZSxcbiAgICAgICAgICB9XCJcbiAgICAgICAgPlxuICAgICAgICAgIHt7ICR0KFwiWW91ciBwaG9uZSBudW1iZXJcIikgfX1cbiAgICAgICAgPC9xLXRvb2xiYXItdGl0bGU+XG4gICAgICAgIDxxLXNwYWNlPjwvcS1zcGFjZT5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgQGNsaWNrPVwic2hvd19tb2RhbCA9ICF0cnVlXCJcbiAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICBzcXVhcmVcbiAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgdGV4dC1jb2xvcj1cImdyZXlcIlxuICAgICAgICAgIGljb249XCJsYXMgbGEtdGltZXNcIlxuICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgY2xhc3M9XCJib3JkZXItZ3JleSByYWRpdXM4XCJcbiAgICAgICAgLz5cbiAgICAgIDwvcS10b29sYmFyPlxuICAgICAgPHEtZm9ybSBAc3VibWl0PVwiYmVmb3JlU3VibWl0XCI+XG4gICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XCJ0ZXh0LWg1IHRleHQtd2VpZ2h0LWJvbGQgY29sXCI+UGhvbmUgTnVtYmVyPC9kaXY+IC0tPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250MTJcIj5cbiAgICAgICAgICAgIHt7XG4gICAgICAgICAgICAgICR0KFxuICAgICAgICAgICAgICAgIFwiQSA2IGRpZ2l0IE9UUCB3aWxsIGJlIHNlbnQgdmlhIFNNUyB0byB2ZXJpZnkgeW91ciBtb2JpbGUgbnVtYmVyXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyYWRpdXM4IHEtcGEtc20gYm9yZGVyLWdyZXlcIj5cbiAgICAgICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJwaG9uZV9udW1iZXJcIlxuICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICBtYXNrPVwiIyMjIyMjIyMjIyMjIyMjIyMjIyNcIlxuICAgICAgICAgICAgICA6Y29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTMwMCcgOiAnZGFyaydcIlxuICAgICAgICAgICAgICA6YmctY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTYwMCcgOiAnd2hpdGUnXCJcbiAgICAgICAgICAgICAgYm9yZGVybGVzc1xuICAgICAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OnByZXBlbmQ+XG4gICAgICAgICAgICAgICAgPHEtc2VsZWN0XG4gICAgICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInBob25lX3ByZWZpeFwiXG4gICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cInByZWZpeGVzXCJcbiAgICAgICAgICAgICAgICAgIGJlaGF2aW9yPVwiZGlhbG9nXCJcbiAgICAgICAgICAgICAgICAgIGlucHV0LWRlYm91bmNlPVwiNzAwXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPVwiYm9yZGVyOiBub25lXCJcbiAgICAgICAgICAgICAgICAgIGVtaXQtdmFsdWVcbiAgICAgICAgICAgICAgICAgIGJvcmRlcmxlc3NcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90Om5vLW9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gY2xhc3M9XCJ0ZXh0LWdyZXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KFwiTm8gcmVzdWx0c1wiKSB9fVxuICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L3Etc2VsZWN0PlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC9xLWlucHV0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuXG4gICAgICAgIDxxLWNhcmQtYWN0aW9ucyB2ZXJ0aWNhbCBhbGlnbj1cImNlbnRlclwiIGNsYXNzPVwicS1wYS1tZFwiPlxuICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgOmRpc2FibGVkPVwiaGFzQ2hhbmdlUGhvbmVcIlxuICAgICAgICAgICAgOmxvYWRpbmc9XCJsb2FkaW5nXCJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ1NhdmUnKVwiXG4gICAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgICA6Y29sb3I9XCJoYXNDaGFuZ2VQaG9uZSA9PSBmYWxzZSA/ICdwcmltYXJ5JyA6ICdncmV5LTUnXCJcbiAgICAgICAgICAgIDp0ZXh0LWNvbG9yPVwiaGFzQ2hhbmdlUGhvbmUgPT0gZmFsc2UgPyAnd2hpdGUnIDogJ2RhcmsnXCJcbiAgICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICAgIGNsYXNzPVwiZnVsbC13aWR0aFwiXG4gICAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvcS1jYXJkLWFjdGlvbnM+XG4gICAgICA8L3EtZm9ybT5cbiAgICA8L3EtY2FyZD5cbiAgPC9xLWRpYWxvZz5cblxuICA8U3RlcHNWZXJpZmljYXRpb25cbiAgICByZWY9XCJzdGVwc192ZXJpZmljYXRpb25cIlxuICAgIDpzZW50X21lc3NhZ2U9XCJzZW50X21lc3NhZ2VcIlxuICAgIDpwaG9uZV9wcmVmaXg9XCJwaG9uZV9wcmVmaXhcIlxuICAgIDpwaG9uZV9udW1iZXI9XCJwaG9uZV9udW1iZXJcIlxuICAgIEBhZnRlci12ZXJpZnljb2RlPVwiYWZ0ZXJWZXJpZnljb2RlXCJcbiAgLz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBkZWZpbmVBc3luY0NvbXBvbmVudCB9IGZyb20gXCJ2dWVcIjtcbmltcG9ydCBBUElpbnRlcmZhY2UgZnJvbSBcInNyYy9hcGkvQVBJaW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJDaGFuZ2VQaG9uZVwiLFxuICBwcm9wczogW1wicHJlZml4ZXNcIiwgXCJwaG9uZV9wcmVmaXhfb3JpZ1wiLCBcImNvbnRhY3RfbnVtYmVyX29yaWdcIl0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBTdGVwc1ZlcmlmaWNhdGlvbjogZGVmaW5lQXN5bmNDb21wb25lbnQoKCkgPT5cbiAgICAgIGltcG9ydChcImNvbXBvbmVudHMvU3RlcHNWZXJpZmljYXRpb24udnVlXCIpXG4gICAgKSxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2hvd19tb2RhbDogZmFsc2UsXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIHBob25lX3ByZWZpeDogXCJcIixcbiAgICAgIHBob25lX251bWJlcjogXCJcIixcbiAgICAgIHNlbnRfbWVzc2FnZTogXCJcIixcbiAgICB9O1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGhhc0NoYW5nZVBob25lKCkge1xuICAgICAgaWYgKHRoaXMucGhvbmVfcHJlZml4X29yaWcgIT09IHRoaXMucGhvbmVfcHJlZml4KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmNvbnRhY3RfbnVtYmVyX29yaWcgIT09IHRoaXMucGhvbmVfbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gIH0sXG4gIHVwZGF0ZWQoKSB7XG4gICAgaWYgKEFQSWludGVyZmFjZS5lbXB0eSh0aGlzLnBob25lX3ByZWZpeCkpIHtcbiAgICAgIHRoaXMucGhvbmVfcHJlZml4ID0gdGhpcy5waG9uZV9wcmVmaXhfb3JpZztcbiAgICB9XG4gICAgaWYgKEFQSWludGVyZmFjZS5lbXB0eSh0aGlzLnBob25lX251bWJlcikpIHtcbiAgICAgIHRoaXMucGhvbmVfbnVtYmVyID0gdGhpcy5jb250YWN0X251bWJlcl9vcmlnO1xuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBwaG9uZV9wcmVmaXhfb3JpZyhuZXd2YWwsIG9sZHZhbCkge1xuICAgICAgdGhpcy5waG9uZV9wcmVmaXggPSBuZXd2YWw7XG4gICAgfSxcbiAgICBjb250YWN0X251bWJlcl9vcmlnKG5ld3ZhbCwgb2xkdmFsKSB7XG4gICAgICB0aGlzLnBob25lX251bWJlciA9IG5ld3ZhbDtcbiAgICB9LFxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgc2hvd01vZGFsKGRhdGEpIHtcbiAgICAgIHRoaXMuc2hvd19tb2RhbCA9IGRhdGE7XG4gICAgfSxcbiAgICBiZWZvcmVTdWJtaXQoKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgQVBJaW50ZXJmYWNlLlJlcXVlc3RFbWFpbENvZGUoKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuc2VudF9tZXNzYWdlID0gZGF0YS5tc2c7XG4gICAgICAgICAgdGhpcy5zaG93X21vZGFsID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy4kcmVmcy5zdGVwc192ZXJpZmljYXRpb24uc2hvd19tb2RhbCA9IHRydWU7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBBUElpbnRlcmZhY2Uubm90aWZ5KFwiZ3JleS04XCIsIGVycm9yLCBcImVycm9yX291dGxpbmVcIiwgdGhpcy4kcSk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgYWZ0ZXJWZXJpZnljb2RlKGNvZGUpIHtcbiAgICAgIHRoaXMuJHJlZnMuc3RlcHNfdmVyaWZpY2F0aW9uLnZpc2libGUgPSB0cnVlO1xuICAgICAgY29uc3QgJGRhdGEgPSB7XG4gICAgICAgIGNvZGUsXG4gICAgICAgIHBob25lX3ByZWZpeDogdGhpcy5waG9uZV9wcmVmaXgsXG4gICAgICAgIHBob25lX251bWJlcjogdGhpcy5waG9uZV9udW1iZXIsXG4gICAgICAgIGNhcnRfdXVpZDogQVBJaW50ZXJmYWNlLmdldFN0b3JhZ2UoXCJjYXJ0X3V1aWRcIiksXG4gICAgICB9O1xuICAgICAgQVBJaW50ZXJmYWNlLkNoYW5nZVBob25lKCRkYXRhKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuJHJlZnMuc3RlcHNfdmVyaWZpY2F0aW9uLnNob3dfbW9kYWwgPSBmYWxzZTtcbiAgICAgICAgICBBUElpbnRlcmZhY2Uubm90aWZ5KFwiZGFya1wiLCBkYXRhLm1zZywgXCJkb25lXCIsIHRoaXMuJHEpO1xuICAgICAgICAgIHRoaXMuJGVtaXQoXCJhZnRlckNoYW5nZXBob25lXCIsIGRhdGEuZGV0YWlscyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBBUElpbnRlcmZhY2Uubm90aWZ5KFwiZGFya1wiLCBlcnJvciwgXCJlcnJvclwiLCB0aGlzLiRxKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLiRyZWZzLnN0ZXBzX3ZlcmlmaWNhdGlvbi52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iXSwiZmlsZSI6ImFzc2V0cy9DaGFuZ2VQaG9uZS5kNzU5MWQ3OC5qcyJ9
