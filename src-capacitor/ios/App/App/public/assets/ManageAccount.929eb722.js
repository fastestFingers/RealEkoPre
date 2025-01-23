import { _ as _export_sfc, l as defineAsyncComponent, m as APIinterface, aw as auth, n as resolveComponent, p as openBlock, V as createElementBlock, f as createVNode, t as withCtx, F as Fragment, Y as QBtn, a8 as QCard, a9 as QCardSection, b2 as QSeparator, u as __vitePreload, a6 as createTextVNode, U as createBaseVNode } from "./index.61ed5618.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QSpace } from "./QSpace.f164c087.js";
import { Q as QInnerLoading } from "./QInnerLoading.abe2afe6.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import "./QResizeObserver.d08dce3c.js";
const _sfc_main = {
  name: "ManageAccount",
  components: {
    StepsVerification: defineAsyncComponent(
      () => __vitePreload(() => import("./StepsVerification.64f7b221.js"), true ? ["assets/StepsVerification.64f7b221.js","assets/QSpace.f164c087.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QToolbar.c8fc6962.js","assets/QForm.7ded9d38.js","assets/QInnerLoading.abe2afe6.js"] : void 0)
    )
  },
  data() {
    return {
      loading: false,
      code: "",
      account_deleted: false
    };
  },
  methods: {
    requestData() {
      APIinterface.requestData().then((data) => {
      }).catch((error) => {
        APIinterface.notify("red-5", error, "error_outline", this.$q);
      }).then((data) => {
      });
    },
    beforeDelete() {
      this.loading = true;
      this.code = "";
      APIinterface.RequestEmailCode().then((data) => {
        this.sent_message = data.msg;
        this.show_modal = false;
        this.$refs.steps_verification.show_modal = true;
      }).catch((error) => {
        APIinterface.notify("negative", error, "error_outline", this.$q);
      }).then((data) => {
        this.loading = false;
      });
    },
    afterVerifycode(code) {
      this.code = code;
      APIinterface.verifyAccountDelete(code).then((data) => {
        this.$refs.steps_verification.show_modal = false;
        this.confirmDeletion();
      }).catch((error) => {
        APIinterface.notify("red-5", error, "error_outline", this.$q);
      }).then((data) => {
        this.loading = false;
      });
    },
    confirmDeletion() {
      this.$q.dialog({
        title: "Confirm account deletion",
        message: "Are you sure you want to delete your account and customer data? \n  This action is permanent and cannot be undone.",
        persistent: true,
        position: "bottom",
        ok: {
          unelevated: true,
          color: "warning",
          rounded: false,
          "text-color": "black",
          size: "md",
          label: "Yes delete my account",
          "no-caps": true
        },
        cancel: {
          unelevated: true,
          rounded: false,
          color: "grey-3",
          "text-color": "black",
          size: "md",
          label: "Cancel",
          "no-caps": true
        }
      }).onOk(() => {
        this.deleteAccount();
      }).onOk(() => {
      }).onCancel(() => {
      }).onDismiss(() => {
      });
    },
    deleteAccount() {
      this.loading = true;
      APIinterface.deleteAccount(this.code).then((data) => {
        this.account_deleted = true;
        setTimeout(() => {
          auth.logout();
          this.$router.push("/home");
        }, 5e3);
      }).catch((error) => {
        APIinterface.notify("red-5", error, "error_outline", this.$q);
      }).then((data) => {
        this.loading = false;
      });
    }
  }
};
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" Manage Account ");
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", null, null, -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6 text-weight-bold" }, " Your account is being deleted ", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("p", { class: "font12" }, " You will be automatically logged out. Your account will be deleted in the next few minutes. ", -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("p", { class: "font12" }, " Note: We may retain some information when permitted by law. ", -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6" }, "Account Data", -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("p", { class: "font12" }, " You can request an archive of your personal information. We'll notify you when it's ready to download. ", -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6" }, "Delete Account", -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("p", { class: "font12" }, " You can request to have your account deleted and personal information removed. If you have both a karenderia and Caviar account, then the information associated with both will be affected to the extent we can identify that the accounts are owned by the same user. ", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_StepsVerification = resolveComponent("StepsVerification");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(QHeader, { class: "bg-white" }, {
      default: withCtx(() => [
        createVNode(QToolbar, null, {
          default: withCtx(() => [
            createVNode(QBtn, {
              to: "/account/profile",
              flat: "",
              round: "",
              dense: "",
              icon: "arrow_back",
              color: "dark",
              disable: $data.account_deleted
            }, null, 8, ["disable"]),
            createVNode(QToolbarTitle, { class: "text-dark text-center text-weight-bold" }, {
              default: withCtx(() => [
                _hoisted_1
              ]),
              _: 1
            }),
            _hoisted_2
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    createVNode(QPage, {
      padding: "",
      class: "bg-grey-2"
    }, {
      default: withCtx(() => [
        createVNode(QSpace, { class: "q-pa-xs" }),
        createVNode(QCard, {
          flat: "",
          class: "radius8"
        }, {
          default: withCtx(() => [
            createVNode(QCardSection, { class: "q-pa-md" }, {
              default: withCtx(() => [
                $data.account_deleted ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  _hoisted_3,
                  _hoisted_4,
                  _hoisted_5
                ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  _hoisted_6,
                  _hoisted_7,
                  createVNode(QBtn, {
                    onClick: $options.requestData,
                    label: "Request Archive",
                    size: "md",
                    flat: "",
                    dense: "",
                    "text-color": "primary",
                    "no-caps": ""
                  }, null, 8, ["onClick"]),
                  createVNode(QSeparator, { spaced: "" }),
                  _hoisted_8,
                  _hoisted_9,
                  createVNode(QBtn, {
                    onClick: $options.beforeDelete,
                    label: "Request Delete Account",
                    size: "md",
                    flat: "",
                    dense: "",
                    "text-color": "primary",
                    "no-caps": ""
                  }, null, 8, ["onClick"])
                ], 64))
              ]),
              _: 1
            }),
            createVNode(QInnerLoading, {
              showing: $data.loading,
              color: "primary",
              size: "md"
            }, null, 8, ["showing"])
          ]),
          _: 1
        }),
        createVNode(_component_StepsVerification, {
          ref: "steps_verification",
          sent_message: _ctx.sent_message,
          phone_prefix: _ctx.phone_prefix,
          phone_number: _ctx.phone_number,
          onAfterVerifycode: $options.afterVerifycode
        }, null, 8, ["sent_message", "phone_prefix", "phone_number", "onAfterVerifycode"])
      ]),
      _: 1
    })
  ], 64);
}
var ManageAccount = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "ManageAccount.vue"]]);
export { ManageAccount as default };
//# sourceMappingURL=data:application/json;base64,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QUEsb0JBQ04sTUFBSztBQUFBLG9CQUNMO0FBQUEsb0JBQ0E7QUFBQSxvQkFDQSxjQUFXO0FBQUEsb0JBQ1g7QUFBQTtrQkFFRkEsWUFBa0MsMEJBQXJCO0FBQUEsa0JBQ2I7QUFBQSxrQkFDQTtBQUFBLGtCQU9BQSxZQVFFO0FBQUEsb0JBUEMsU0FBTyxTQUFZO0FBQUEsb0JBQ3BCLE9BQU07QUFBQSxvQkFDTixNQUFLO0FBQUEsb0JBQ0w7QUFBQSxvQkFDQTtBQUFBLG9CQUNBLGNBQVc7QUFBQSxvQkFDWDtBQUFBOzs7OztZQUtOQSxZQUFnRTtBQUFBLGNBQTlDLFNBQVMsTUFBTztBQUFBLGNBQUUsT0FBTTtBQUFBLGNBQVUsTUFBSztBQUFBOzs7O1FBRzNEQSxZQU1FO0FBQUEsVUFMQSxLQUFJO0FBQUEsVUFDSCxjQUFjLEtBQVk7QUFBQSxVQUMxQixjQUFjLEtBQVk7QUFBQSxVQUMxQixjQUFjLEtBQVk7QUFBQSxVQUMxQixtQkFBa0IsU0FBZTtBQUFBIiwibmFtZXMiOlsiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9jcmVhdGVWTm9kZSIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfRnJhZ21lbnQiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvQWNjb3VudC9NYW5hZ2VBY2NvdW50LnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLWhlYWRlciBjbGFzcz1cImJnLXdoaXRlXCI+XG4gICAgPHEtdG9vbGJhcj5cbiAgICAgIDxxLWJ0blxuICAgICAgICB0bz1cIi9hY2NvdW50L3Byb2ZpbGVcIlxuICAgICAgICBmbGF0XG4gICAgICAgIHJvdW5kXG4gICAgICAgIGRlbnNlXG4gICAgICAgIGljb249XCJhcnJvd19iYWNrXCJcbiAgICAgICAgY29sb3I9XCJkYXJrXCJcbiAgICAgICAgOmRpc2FibGU9XCJhY2NvdW50X2RlbGV0ZWRcIlxuICAgICAgLz5cbiAgICAgIDxxLXRvb2xiYXItdGl0bGUgY2xhc3M9XCJ0ZXh0LWRhcmsgdGV4dC1jZW50ZXIgdGV4dC13ZWlnaHQtYm9sZFwiPlxuICAgICAgICBNYW5hZ2UgQWNjb3VudFxuICAgICAgPC9xLXRvb2xiYXItdGl0bGU+XG4gICAgICA8ZGl2PjwvZGl2PlxuICAgIDwvcS10b29sYmFyPlxuICA8L3EtaGVhZGVyPlxuXG4gIDxxLXBhZ2UgcGFkZGluZyBjbGFzcz1cImJnLWdyZXktMlwiPlxuICAgIDxxLXNwYWNlIGNsYXNzPVwicS1wYS14c1wiPjwvcS1zcGFjZT5cbiAgICA8cS1jYXJkIGZsYXQgY2xhc3M9XCJyYWRpdXM4XCI+XG4gICAgICA8cS1jYXJkLXNlY3Rpb24gY2xhc3M9XCJxLXBhLW1kXCI+XG4gICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiYWNjb3VudF9kZWxldGVkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDYgdGV4dC13ZWlnaHQtYm9sZFwiPlxuICAgICAgICAgICAgWW91ciBhY2NvdW50IGlzIGJlaW5nIGRlbGV0ZWRcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cCBjbGFzcz1cImZvbnQxMlwiPlxuICAgICAgICAgICAgWW91IHdpbGwgYmUgYXV0b21hdGljYWxseSBsb2dnZWQgb3V0LiBZb3VyIGFjY291bnQgd2lsbCBiZSBkZWxldGVkXG4gICAgICAgICAgICBpbiB0aGUgbmV4dCBmZXcgbWludXRlcy5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJmb250MTJcIj5cbiAgICAgICAgICAgIE5vdGU6IFdlIG1heSByZXRhaW4gc29tZSBpbmZvcm1hdGlvbiB3aGVuIHBlcm1pdHRlZCBieSBsYXcuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDZcIj5BY2NvdW50IERhdGE8L2Rpdj5cbiAgICAgICAgICA8cCBjbGFzcz1cImZvbnQxMlwiPlxuICAgICAgICAgICAgWW91IGNhbiByZXF1ZXN0IGFuIGFyY2hpdmUgb2YgeW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbi4gV2UnbGxcbiAgICAgICAgICAgIG5vdGlmeSB5b3Ugd2hlbiBpdCdzIHJlYWR5IHRvIGRvd25sb2FkLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgIEBjbGljaz1cInJlcXVlc3REYXRhXCJcbiAgICAgICAgICAgIGxhYmVsPVwiUmVxdWVzdCBBcmNoaXZlXCJcbiAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgdGV4dC1jb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgIC8+XG4gICAgICAgICAgPHEtc2VwYXJhdG9yIHNwYWNlZD48L3Etc2VwYXJhdG9yPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg2XCI+RGVsZXRlIEFjY291bnQ8L2Rpdj5cbiAgICAgICAgICA8cCBjbGFzcz1cImZvbnQxMlwiPlxuICAgICAgICAgICAgWW91IGNhbiByZXF1ZXN0IHRvIGhhdmUgeW91ciBhY2NvdW50IGRlbGV0ZWQgYW5kIHBlcnNvbmFsXG4gICAgICAgICAgICBpbmZvcm1hdGlvbiByZW1vdmVkLiBJZiB5b3UgaGF2ZSBib3RoIGEga2FyZW5kZXJpYSBhbmQgQ2F2aWFyXG4gICAgICAgICAgICBhY2NvdW50LCB0aGVuIHRoZSBpbmZvcm1hdGlvbiBhc3NvY2lhdGVkIHdpdGggYm90aCB3aWxsIGJlIGFmZmVjdGVkXG4gICAgICAgICAgICB0byB0aGUgZXh0ZW50IHdlIGNhbiBpZGVudGlmeSB0aGF0IHRoZSBhY2NvdW50cyBhcmUgb3duZWQgYnkgdGhlXG4gICAgICAgICAgICBzYW1lIHVzZXIuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgQGNsaWNrPVwiYmVmb3JlRGVsZXRlXCJcbiAgICAgICAgICAgIGxhYmVsPVwiUmVxdWVzdCBEZWxldGUgQWNjb3VudFwiXG4gICAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgIHRleHQtY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICAvPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cblxuICAgICAgPHEtaW5uZXItbG9hZGluZyA6c2hvd2luZz1cImxvYWRpbmdcIiBjb2xvcj1cInByaW1hcnlcIiBzaXplPVwibWRcIiAvPlxuICAgIDwvcS1jYXJkPlxuXG4gICAgPFN0ZXBzVmVyaWZpY2F0aW9uXG4gICAgICByZWY9XCJzdGVwc192ZXJpZmljYXRpb25cIlxuICAgICAgOnNlbnRfbWVzc2FnZT1cInNlbnRfbWVzc2FnZVwiXG4gICAgICA6cGhvbmVfcHJlZml4PVwicGhvbmVfcHJlZml4XCJcbiAgICAgIDpwaG9uZV9udW1iZXI9XCJwaG9uZV9udW1iZXJcIlxuICAgICAgQGFmdGVyLXZlcmlmeWNvZGU9XCJhZnRlclZlcmlmeWNvZGVcIlxuICAgIC8+XG4gIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IGRlZmluZUFzeW5jQ29tcG9uZW50IH0gZnJvbSBcInZ1ZVwiO1xuaW1wb3J0IEFQSWludGVyZmFjZSBmcm9tIFwic3JjL2FwaS9BUElpbnRlcmZhY2VcIjtcbmltcG9ydCBhdXRoIGZyb20gXCJzcmMvYXBpL2F1dGhcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIk1hbmFnZUFjY291bnRcIixcbiAgY29tcG9uZW50czoge1xuICAgIFN0ZXBzVmVyaWZpY2F0aW9uOiBkZWZpbmVBc3luY0NvbXBvbmVudCgoKSA9PlxuICAgICAgaW1wb3J0KFwiY29tcG9uZW50cy9TdGVwc1ZlcmlmaWNhdGlvbi52dWVcIilcbiAgICApLFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIGNvZGU6IFwiXCIsXG4gICAgICBhY2NvdW50X2RlbGV0ZWQ6IGZhbHNlLFxuICAgIH07XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICByZXF1ZXN0RGF0YSgpIHtcbiAgICAgIEFQSWludGVyZmFjZS5yZXF1ZXN0RGF0YSgpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgLy9cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJyZWQtNVwiLCBlcnJvciwgXCJlcnJvcl9vdXRsaW5lXCIsIHRoaXMuJHEpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge30pO1xuICAgIH0sXG4gICAgYmVmb3JlRGVsZXRlKCkge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuY29kZSA9IFwiXCI7XG4gICAgICBBUElpbnRlcmZhY2UuUmVxdWVzdEVtYWlsQ29kZSgpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZW50X21lc3NhZ2UgPSBkYXRhLm1zZztcbiAgICAgICAgICB0aGlzLnNob3dfbW9kYWwgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLiRyZWZzLnN0ZXBzX3ZlcmlmaWNhdGlvbi5zaG93X21vZGFsID0gdHJ1ZTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJuZWdhdGl2ZVwiLCBlcnJvciwgXCJlcnJvcl9vdXRsaW5lXCIsIHRoaXMuJHEpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGFmdGVyVmVyaWZ5Y29kZShjb2RlKSB7XG4gICAgICB0aGlzLmNvZGUgPSBjb2RlO1xuICAgICAgQVBJaW50ZXJmYWNlLnZlcmlmeUFjY291bnREZWxldGUoY29kZSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLiRyZWZzLnN0ZXBzX3ZlcmlmaWNhdGlvbi5zaG93X21vZGFsID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5jb25maXJtRGVsZXRpb24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJyZWQtNVwiLCBlcnJvciwgXCJlcnJvcl9vdXRsaW5lXCIsIHRoaXMuJHEpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGNvbmZpcm1EZWxldGlvbigpIHtcbiAgICAgIHRoaXMuJHFcbiAgICAgICAgLmRpYWxvZyh7XG4gICAgICAgICAgdGl0bGU6IFwiQ29uZmlybSBhY2NvdW50IGRlbGV0aW9uXCIsXG4gICAgICAgICAgbWVzc2FnZTpcbiAgICAgICAgICAgIFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB5b3VyIGFjY291bnQgYW5kIGN1c3RvbWVyIGRhdGE/IFxcbiAgVGhpcyBhY3Rpb24gaXMgcGVybWFuZW50IGFuZCBjYW5ub3QgYmUgdW5kb25lLlwiLFxuICAgICAgICAgIHBlcnNpc3RlbnQ6IHRydWUsXG4gICAgICAgICAgcG9zaXRpb246IFwiYm90dG9tXCIsXG4gICAgICAgICAgb2s6IHtcbiAgICAgICAgICAgIHVuZWxldmF0ZWQ6IHRydWUsXG4gICAgICAgICAgICBjb2xvcjogXCJ3YXJuaW5nXCIsXG4gICAgICAgICAgICByb3VuZGVkOiBmYWxzZSxcbiAgICAgICAgICAgIFwidGV4dC1jb2xvclwiOiBcImJsYWNrXCIsXG4gICAgICAgICAgICBzaXplOiBcIm1kXCIsXG4gICAgICAgICAgICBsYWJlbDogXCJZZXMgZGVsZXRlIG15IGFjY291bnRcIixcbiAgICAgICAgICAgIFwibm8tY2Fwc1wiOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY2FuY2VsOiB7XG4gICAgICAgICAgICB1bmVsZXZhdGVkOiB0cnVlLFxuICAgICAgICAgICAgcm91bmRlZDogZmFsc2UsXG4gICAgICAgICAgICBjb2xvcjogXCJncmV5LTNcIixcbiAgICAgICAgICAgIFwidGV4dC1jb2xvclwiOiBcImJsYWNrXCIsXG4gICAgICAgICAgICBzaXplOiBcIm1kXCIsXG4gICAgICAgICAgICBsYWJlbDogXCJDYW5jZWxcIixcbiAgICAgICAgICAgIFwibm8tY2Fwc1wiOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIC5vbk9rKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmRlbGV0ZUFjY291bnQoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uT2soKCkgPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCc+Pj4+IHNlY29uZCBPSyBjYXRjaGVyJylcbiAgICAgICAgfSlcbiAgICAgICAgLm9uQ2FuY2VsKCgpID0+IHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnPj4+PiBDYW5jZWwnKVxuICAgICAgICB9KVxuICAgICAgICAub25EaXNtaXNzKCgpID0+IHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnSSBhbSB0cmlnZ2VyZWQgb24gYm90aCBPSyBhbmQgQ2FuY2VsJylcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBkZWxldGVBY2NvdW50KCkge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIEFQSWludGVyZmFjZS5kZWxldGVBY2NvdW50KHRoaXMuY29kZSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmFjY291bnRfZGVsZXRlZCA9IHRydWU7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBhdXRoLmxvZ291dCgpO1xuICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goXCIvaG9tZVwiKTtcbiAgICAgICAgICB9LCA1MDAwKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJyZWQtNVwiLCBlcnJvciwgXCJlcnJvcl9vdXRsaW5lXCIsIHRoaXMuJHEpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuIl0sImZpbGUiOiJhc3NldHMvTWFuYWdlQWNjb3VudC45MjllYjcyMi5qcyJ9
