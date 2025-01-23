import { Q as QImg } from "./QImg.6c27044c.js";
import { Q as QSpace } from "./QSpace.f164c087.js";
import { _ as _export_sfc, m as APIinterface, bS as Network, p as openBlock, q as createBlock, t as withCtx, U as createBaseVNode, f as createVNode, Y as QBtn } from "./index.61ed5618.js";
import { Q as QPage } from "./QPage.0e88d376.js";
const _sfc_main = {
  name: "NetworkError",
  methods: {
    async CheckNetwork() {
      APIinterface.showLoadingBox("", this.$q);
      const status = await Network.getStatus();
      if (status.connected === true) {
        APIinterface.hideLoadingBox(this.$q);
        this.$router.push("/home");
      } else {
        APIinterface.hideLoadingBox(this.$q);
      }
    }
  }
};
const _hoisted_1 = { class: "full-width text-center" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h5 text-weight-bold" }, "We're having trouble loading", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "text-grey font12" }, " xPlease check your Network connectivity and try again ", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QPage, { class: "q-pl-md q-pr-md flex flex-center" }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode(QImg, {
          src: "network-error.png",
          fit: "fill",
          "spinner-color": "primary",
          style: { "max-width": "150px" }
        }),
        createVNode(QSpace, { class: "q-pa-sm" }),
        _hoisted_2,
        _hoisted_3,
        createVNode(QSpace, { class: "q-pa-sm" }),
        createVNode(QBtn, {
          onClick: $options.CheckNetwork,
          outline: "",
          style: { "color": "dark" },
          label: "Try Again",
          "no-caps": ""
        }, null, 8, ["onClick"])
      ])
    ]),
    _: 1
  });
}
var NetworkError = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "NetworkError.vue"]]);
export { NetworkError as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmV0d29ya0Vycm9yLjA4ZjVmODdlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvTmV0d29ya0Vycm9yLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLXBhZ2UgY2xhc3M9XCJxLXBsLW1kIHEtcHItbWQgZmxleCBmbGV4LWNlbnRlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJmdWxsLXdpZHRoIHRleHQtY2VudGVyXCI+XG4gICAgICA8cS1pbWdcbiAgICAgICAgc3JjPVwibmV0d29yay1lcnJvci5wbmdcIlxuICAgICAgICBmaXQ9XCJmaWxsXCJcbiAgICAgICAgc3Bpbm5lci1jb2xvcj1cInByaW1hcnlcIlxuICAgICAgICBzdHlsZT1cIm1heC13aWR0aDogMTUwcHhcIlxuICAgICAgLz5cbiAgICAgIDxxLXNwYWNlIGNsYXNzPVwicS1wYS1zbVwiPjwvcS1zcGFjZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg1IHRleHQtd2VpZ2h0LWJvbGRcIj5XZSdyZSBoYXZpbmcgdHJvdWJsZSBsb2FkaW5nPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dC1ncmV5IGZvbnQxMlwiPlxuICAgICAgICB4UGxlYXNlIGNoZWNrIHlvdXIgTmV0d29yayBjb25uZWN0aXZpdHkgYW5kIHRyeSBhZ2FpblxuICAgICAgPC9kaXY+XG4gICAgICA8cS1zcGFjZSBjbGFzcz1cInEtcGEtc21cIj48L3Etc3BhY2U+XG4gICAgICA8cS1idG5cbiAgICAgICAgQGNsaWNrPVwiQ2hlY2tOZXR3b3JrXCJcbiAgICAgICAgb3V0bGluZVxuICAgICAgICBzdHlsZT1cImNvbG9yOiBkYXJrXCJcbiAgICAgICAgbGFiZWw9XCJUcnkgQWdhaW5cIlxuICAgICAgICBuby1jYXBzXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBOZXR3b3JrIH0gZnJvbSBcIkBjYXBhY2l0b3IvbmV0d29ya1wiO1xuaW1wb3J0IEFQSWludGVyZmFjZSBmcm9tIFwic3JjL2FwaS9BUElpbnRlcmZhY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIk5ldHdvcmtFcnJvclwiLFxuICBtZXRob2RzOiB7XG4gICAgYXN5bmMgQ2hlY2tOZXR3b3JrKCkge1xuICAgICAgQVBJaW50ZXJmYWNlLnNob3dMb2FkaW5nQm94KFwiXCIsIHRoaXMuJHEpO1xuICAgICAgY29uc3Qgc3RhdHVzID0gYXdhaXQgTmV0d29yay5nZXRTdGF0dXMoKTtcbiAgICAgIGlmIChzdGF0dXMuY29ubmVjdGVkID09PSB0cnVlKSB7XG4gICAgICAgIEFQSWludGVyZmFjZS5oaWRlTG9hZGluZ0JveCh0aGlzLiRxKTtcbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goXCIvaG9tZVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEFQSWludGVyZmFjZS5oaWRlTG9hZGluZ0JveCh0aGlzLiRxKTtcbiAgICAgIH1cbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfY3JlYXRlQmxvY2siLCJfY3JlYXRlVk5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7QUE4QkEsTUFBSyxZQUFVO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsSUFDUCxNQUFNLGVBQWU7QUFDbkIsbUJBQWEsZUFBZSxJQUFJLEtBQUssRUFBRTtBQUN2QyxZQUFNLFNBQVMsTUFBTSxRQUFRO0FBQzdCLFVBQUksT0FBTyxjQUFjLE1BQU07QUFDN0IscUJBQWEsZUFBZSxLQUFLLEVBQUU7QUFDbkMsYUFBSyxRQUFRLEtBQUssT0FBTztBQUFBLGFBQ3BCO0FBQ0wscUJBQWEsZUFBZSxLQUFLLEVBQUU7QUFBQSxNQUNyQztBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQ0g7QUExQ1MsTUFBQSxhQUFBLEVBQUEsT0FBTSx5QkFBd0I7QUFRakMsTUFBQSxhQUFBQSxnQ0FBd0UsT0FBbkUsRUFBQSxPQUFNLDhCQUEyQixnQ0FBNEIsRUFBQTtBQUNsRSxNQUFBLGFBQUFBLGdDQUVNLE9BRkQsRUFBQSxPQUFNLHNCQUFtQiwyREFFOUIsRUFBQTs7c0JBWkpDLFlBc0JTLE9BQUEsRUFBQSxPQUFBLHNDQXRCdUM7QUFBQSxxQkFDOUMsTUFvQk07QUFBQSxNQXBCTkQsZ0JBb0JNLE9BcEJOLFlBb0JNO0FBQUEsUUFuQkpFLFlBS0UsTUFBQTtBQUFBLFVBSkEsS0FBSTtBQUFBLFVBQ0osS0FBSTtBQUFBLFVBQ0osaUJBQWM7QUFBQSxVQUNkLE9BQUEsRUFBd0IsYUFBQSxRQUFBO0FBQUE7UUFFMUJBLFlBQW1DLFFBQUEsRUFBQSxPQUFBLFVBQXJCLENBQUE7QUFBQSxRQUNkO0FBQUEsUUFDQTtBQUFBLFFBR0FBLFlBQW1DLFFBQUEsRUFBQSxPQUFBLFVBQXJCLENBQUE7QUFBQSxRQUNkQSxZQU1FLE1BQUE7QUFBQSxVQUxDLFNBQU8sU0FBWTtBQUFBLFVBQ3BCLFNBQUE7QUFBQSxVQUNBLE9BQUEsRUFBbUIsU0FBQSxPQUFBO0FBQUEsVUFDbkIsT0FBTTtBQUFBLFVBQ04sV0FBQTtBQUFBOzs7Ozs7OzsifQ==
