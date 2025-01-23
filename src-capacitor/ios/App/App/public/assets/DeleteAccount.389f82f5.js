import { _ as _export_sfc, l as defineAsyncComponent, m as APIinterface, aw as auth, n as resolveComponent, p as openBlock, V as createElementBlock, f as createVNode, t as withCtx, a7 as normalizeClass, F as Fragment, Y as QBtn, a6 as createTextVNode, Z as toDisplayString, a8 as QCard, a9 as QCardSection, U as createBaseVNode, u as __vitePreload } from "./index.61ed5618.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QSpace } from "./QSpace.f164c087.js";
import { Q as QFooter } from "./QFooter.571ac042.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import "./QResizeObserver.d08dce3c.js";
const _sfc_main = {
  name: "DeleteAccount",
  components: {
    StepsVerification: defineAsyncComponent(
      () => __vitePreload(() => import("./StepsVerification.64f7b221.js"), true ? ["assets/StepsVerification.64f7b221.js","assets/QSpace.f164c087.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QToolbar.c8fc6962.js","assets/QForm.7ded9d38.js","assets/QInnerLoading.abe2afe6.js"] : void 0)
    )
  },
  data() {
    return {
      loading: false,
      sent_message: ""
    };
  },
  methods: {
    RequestEmailCode() {
      this.loading = true;
      APIinterface.RequestEmailCode().then((data) => {
        this.sent_message = data.msg;
        this.show_modal = false;
        this.$refs.steps_verification.show_modal = true;
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data) => {
        this.loading = false;
      });
    },
    afterVerifycode(code) {
      this.loading = true;
      APIinterface.showLoadingBox("", this.$q);
      APIinterface.fetchDataByTokenPost("deleteAccount", "code=" + code).then((data) => {
        this.$refs.steps_verification.show_modal = false;
        auth.logout();
        this.$router.push("/home");
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data) => {
        this.loading = false;
        APIinterface.hideLoadingBox(this.$q);
      });
    }
  }
};
const _hoisted_1 = { class: "text-weight-bold q-ma-none" };
const _hoisted_2 = { class: "text-weight-medium q-ma-none" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_StepsVerification = resolveComponent("StepsVerification");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(QHeader, {
      reveal: "",
      "reveal-offset": "50",
      class: normalizeClass({
        "bg-mydark text-white": _ctx.$q.dark.mode,
        "bg-grey-1 text-dark": !_ctx.$q.dark.mode
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
                createTextVNode(toDisplayString(_ctx.$t("Delete Account")), 1)
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
      class: normalizeClass(["q-pl-md q-pr-md row items-stretch", {
        "bg-grey-dark": _ctx.$q.dark.mode,
        "bg-grey-1": !_ctx.$q.dark.mode
      }])
    }, {
      default: withCtx(() => [
        createVNode(QCard, {
          flat: "",
          class: normalizeClass(["col-12", {
            "bg-mydark ": _ctx.$q.dark.mode,
            "bg-white ": !_ctx.$q.dark.mode
          }])
        }, {
          default: withCtx(() => [
            createVNode(QCardSection, null, {
              default: withCtx(() => [
                createBaseVNode("h5", _hoisted_1, toDisplayString(_ctx.$t(
                  "You are requesting to have your account deleted and personal information removed"
                )) + ". ", 1),
                createVNode(QSpace, { class: "q-pa-sm" }),
                createBaseVNode("p", _hoisted_2, toDisplayString(_ctx.$t(
                  "You will permanently lose all your orders, reviews,favorites and profile information, there is no turning back"
                )) + ". ", 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["class"]),
        createVNode(QFooter, {
          reveal: "",
          class: "bg-grey-1 q-pl-md q-pr-md q-pb-sm q-pt-sm text-dark"
        }, {
          default: withCtx(() => [
            createVNode(QBtn, {
              label: _ctx.$t("Confirm Deletion"),
              unelevated: "",
              "no-caps": "",
              color: "primary text-white",
              class: "full-width text-weight-bold",
              size: "lg",
              loading: $data.loading,
              onClick: $options.RequestEmailCode
            }, null, 8, ["label", "loading", "onClick"])
          ]),
          _: 1
        }),
        createVNode(_component_StepsVerification, {
          ref: "steps_verification",
          sent_message: $data.sent_message,
          onAfterVerifycode: $options.afterVerifycode
        }, null, 8, ["sent_message", "onAfterVerifycode"])
      ]),
      _: 1
    }, 8, ["class"])
  ], 64);
}
var DeleteAccount = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "DeleteAccount.vue"]]);
export { DeleteAccount as default };
//# sourceMappingURL=data:application/json;base64,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QUEsY0FSQyxPQUFPLEtBQUU7QUFBQSxjQUNWO0FBQUEsY0FDQTtBQUFBLGNBQ0EsT0FBTTtBQUFBLGNBQ04sT0FBTTtBQUFBLGNBQ04sTUFBSztBQUFBLGNBQ0osU0FBUyxNQUFPO0FBQUEsY0FDaEIsU0FBTyxTQUFnQjtBQUFBOzs7O1FBSTVCQSxZQUlFO0FBQUEsVUFIQSxLQUFJO0FBQUEsVUFDSCxjQUFjLE1BQVk7QUFBQSxVQUMxQixtQkFBa0IsU0FBZTtBQUFBIiwibmFtZXMiOlsiX2NyZWF0ZVZOb2RlIiwiX25vcm1hbGl6ZUNsYXNzIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl90b0Rpc3BsYXlTdHJpbmciXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvQWNjb3VudC9EZWxldGVBY2NvdW50LnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLWhlYWRlclxuICAgIHJldmVhbFxuICAgIHJldmVhbC1vZmZzZXQ9XCI1MFwiXG4gICAgOmNsYXNzPVwie1xuICAgICAgJ2JnLW15ZGFyayB0ZXh0LXdoaXRlJzogJHEuZGFyay5tb2RlLFxuICAgICAgJ2JnLWdyZXktMSB0ZXh0LWRhcmsnOiAhJHEuZGFyay5tb2RlLFxuICAgIH1cIlxuICA+XG4gICAgPHEtdG9vbGJhcj5cbiAgICAgIDxxLWJ0blxuICAgICAgICBAY2xpY2s9XCIkcm91dGVyLmJhY2soKVwiXG4gICAgICAgIGZsYXRcbiAgICAgICAgcm91bmRcbiAgICAgICAgZGVuc2VcbiAgICAgICAgaWNvbj1cImxhcyBsYS1hbmdsZS1sZWZ0XCJcbiAgICAgICAgY2xhc3M9XCJxLW1yLXNtXCJcbiAgICAgICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ3doaXRlJyA6ICdkYXJrJ1wiXG4gICAgICAvPlxuICAgICAgPHEtdG9vbGJhci10aXRsZSBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGRcIj57e1xuICAgICAgICAkdChcIkRlbGV0ZSBBY2NvdW50XCIpXG4gICAgICB9fTwvcS10b29sYmFyLXRpdGxlPlxuICAgIDwvcS10b29sYmFyPlxuICA8L3EtaGVhZGVyPlxuICA8cS1wYWdlXG4gICAgcGFkZGluZ1xuICAgIGNsYXNzPVwicS1wbC1tZCBxLXByLW1kIHJvdyBpdGVtcy1zdHJldGNoXCJcbiAgICA6Y2xhc3M9XCJ7XG4gICAgICAnYmctZ3JleS1kYXJrJzogJHEuZGFyay5tb2RlLFxuICAgICAgJ2JnLWdyZXktMSc6ICEkcS5kYXJrLm1vZGUsXG4gICAgfVwiXG4gID5cbiAgICA8cS1jYXJkXG4gICAgICBmbGF0XG4gICAgICBjbGFzcz1cImNvbC0xMlwiXG4gICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICdiZy1teWRhcmsgJzogJHEuZGFyay5tb2RlLFxuICAgICAgICAnYmctd2hpdGUgJzogISRxLmRhcmsubW9kZSxcbiAgICAgIH1cIlxuICAgID5cbiAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgPGg1IGNsYXNzPVwidGV4dC13ZWlnaHQtYm9sZCBxLW1hLW5vbmVcIj5cbiAgICAgICAgICB7e1xuICAgICAgICAgICAgJHQoXG4gICAgICAgICAgICAgIFwiWW91IGFyZSByZXF1ZXN0aW5nIHRvIGhhdmUgeW91ciBhY2NvdW50IGRlbGV0ZWQgYW5kIHBlcnNvbmFsIGluZm9ybWF0aW9uIHJlbW92ZWRcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH19LlxuICAgICAgICA8L2g1PlxuICAgICAgICA8cS1zcGFjZSBjbGFzcz1cInEtcGEtc21cIj48L3Etc3BhY2U+XG4gICAgICAgIDxwIGNsYXNzPVwidGV4dC13ZWlnaHQtbWVkaXVtIHEtbWEtbm9uZVwiPlxuICAgICAgICAgIHt7XG4gICAgICAgICAgICAkdChcbiAgICAgICAgICAgICAgXCJZb3Ugd2lsbCBwZXJtYW5lbnRseSBsb3NlIGFsbCB5b3VyIG9yZGVycywgcmV2aWV3cyxmYXZvcml0ZXMgYW5kIHByb2ZpbGUgaW5mb3JtYXRpb24sIHRoZXJlIGlzIG5vIHR1cm5pbmcgYmFja1wiXG4gICAgICAgICAgICApXG4gICAgICAgICAgfX0uXG4gICAgICAgIDwvcD5cbiAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgPC9xLWNhcmQ+XG5cbiAgICA8cS1mb290ZXJcbiAgICAgIHJldmVhbFxuICAgICAgY2xhc3M9XCJiZy1ncmV5LTEgcS1wbC1tZCBxLXByLW1kIHEtcGItc20gcS1wdC1zbSB0ZXh0LWRhcmtcIlxuICAgID5cbiAgICAgIDxxLWJ0blxuICAgICAgICA6bGFiZWw9XCIkdCgnQ29uZmlybSBEZWxldGlvbicpXCJcbiAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICBuby1jYXBzXG4gICAgICAgIGNvbG9yPVwicHJpbWFyeSB0ZXh0LXdoaXRlXCJcbiAgICAgICAgY2xhc3M9XCJmdWxsLXdpZHRoIHRleHQtd2VpZ2h0LWJvbGRcIlxuICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICA6bG9hZGluZz1cImxvYWRpbmdcIlxuICAgICAgICBAY2xpY2s9XCJSZXF1ZXN0RW1haWxDb2RlXCJcbiAgICAgIC8+XG4gICAgPC9xLWZvb3Rlcj5cblxuICAgIDxTdGVwc1ZlcmlmaWNhdGlvblxuICAgICAgcmVmPVwic3RlcHNfdmVyaWZpY2F0aW9uXCJcbiAgICAgIDpzZW50X21lc3NhZ2U9XCJzZW50X21lc3NhZ2VcIlxuICAgICAgQGFmdGVyLXZlcmlmeWNvZGU9XCJhZnRlclZlcmlmeWNvZGVcIlxuICAgIC8+XG4gIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IGRlZmluZUFzeW5jQ29tcG9uZW50IH0gZnJvbSBcInZ1ZVwiO1xuaW1wb3J0IEFQSWludGVyZmFjZSBmcm9tIFwic3JjL2FwaS9BUElpbnRlcmZhY2VcIjtcbmltcG9ydCBhdXRoIGZyb20gXCJzcmMvYXBpL2F1dGhcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIkRlbGV0ZUFjY291bnRcIixcbiAgY29tcG9uZW50czoge1xuICAgIFN0ZXBzVmVyaWZpY2F0aW9uOiBkZWZpbmVBc3luY0NvbXBvbmVudCgoKSA9PlxuICAgICAgaW1wb3J0KFwiY29tcG9uZW50cy9TdGVwc1ZlcmlmaWNhdGlvbi52dWVcIilcbiAgICApLFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIHNlbnRfbWVzc2FnZTogXCJcIixcbiAgICB9O1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgUmVxdWVzdEVtYWlsQ29kZSgpIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICBBUElpbnRlcmZhY2UuUmVxdWVzdEVtYWlsQ29kZSgpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZW50X21lc3NhZ2UgPSBkYXRhLm1zZztcbiAgICAgICAgICB0aGlzLnNob3dfbW9kYWwgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLiRyZWZzLnN0ZXBzX3ZlcmlmaWNhdGlvbi5zaG93X21vZGFsID0gdHJ1ZTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJkYXJrXCIsIGVycm9yLCBcImVycm9yXCIsIHRoaXMuJHEpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGFmdGVyVmVyaWZ5Y29kZShjb2RlKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgQVBJaW50ZXJmYWNlLnNob3dMb2FkaW5nQm94KFwiXCIsIHRoaXMuJHEpO1xuICAgICAgQVBJaW50ZXJmYWNlLmZldGNoRGF0YUJ5VG9rZW5Qb3N0KFwiZGVsZXRlQWNjb3VudFwiLCBcImNvZGU9XCIgKyBjb2RlKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuJHJlZnMuc3RlcHNfdmVyaWZpY2F0aW9uLnNob3dfbW9kYWwgPSBmYWxzZTtcbiAgICAgICAgICBhdXRoLmxvZ291dCgpO1xuICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKFwiL2hvbWVcIik7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBBUElpbnRlcmZhY2Uubm90aWZ5KFwiZGFya1wiLCBlcnJvciwgXCJlcnJvclwiLCB0aGlzLiRxKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBBUElpbnRlcmZhY2UuaGlkZUxvYWRpbmdCb3godGhpcy4kcSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iXSwiZmlsZSI6ImFzc2V0cy9EZWxldGVBY2NvdW50LjM4OWY4MmY1LmpzIn0=
