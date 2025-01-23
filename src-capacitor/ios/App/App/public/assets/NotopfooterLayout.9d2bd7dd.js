import { _ as _export_sfc, k as defineComponent, l as defineAsyncComponent, m as APIinterface, n as resolveComponent, p as openBlock, q as createBlock, t as withCtx, f as createVNode, u as __vitePreload } from "./index.61ed5618.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.517727c0.js";
import { u as useDeliveryschedStore } from "./DeliverySched.4e9605bf.js";
import "./QScrollObserver.a3e1ec14.js";
import "./QResizeObserver.d08dce3c.js";
const _sfc_main = defineComponent({
  name: "NotopfooterLayout",
  components: {
    PushDialog: defineAsyncComponent(() => __vitePreload(() => import("./PushDialog.8f523cd1.js"), true ? ["assets/PushDialog.8f523cd1.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QSpace.f164c087.js"] : void 0))
  },
  setup() {
    const deliveryschedStore = useDeliveryschedStore();
    return { deliveryschedStore };
  },
  created() {
    let $continue = true;
    if (this.$route.fullPath == "/cart" || this.$route.fullPath == "/checkout") {
      $continue = false;
    }
    if (!this.deliveryschedStore.hadTransactionList() && $continue) {
      this.deliveryschedStore.getDeliverySched(
        APIinterface.getStorage("cart_uuid"),
        0
      );
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_view = resolveComponent("router-view");
  const _component_PushDialog = resolveComponent("PushDialog");
  return openBlock(), createBlock(QLayout, { view: "lHh Lpr lFf" }, {
    default: withCtx(() => [
      createVNode(QPageContainer, null, {
        default: withCtx(() => [
          createVNode(_component_router_view)
        ]),
        _: 1
      }),
      createVNode(_component_PushDialog, { ref: "push_dialog" }, null, 512)
    ]),
    _: 1
  });
}
var NotopfooterLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "NotopfooterLayout.vue"]]);
export { NotopfooterLayout as default };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7QUFlQSxNQUFLLFlBQWEsZ0JBQWE7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFDTixZQUFZO0FBQUEsSUFDVixZQUFZLHFCQUFxQiwwQkFBTSxPQUFPLDZCQUEyQixxSUFBQztBQUFBLEVBQzNFO0FBQUEsRUFDRCxRQUFRO0FBQ04sVUFBTSxxQkFBcUI7QUFDM0IsV0FBTyxFQUFFLG1CQUFpQjtBQUFBLEVBQzNCO0FBQUEsRUFDRCxVQUFVO0FBSVIsUUFBSSxZQUFZO0FBQ2hCLFFBQ0UsS0FBSyxPQUFPLFlBQVksV0FDeEIsS0FBSyxPQUFPLFlBQVksYUFDeEI7QUFDQSxrQkFBWTtBQUFBLElBQ2Q7QUFFQSxRQUFJLENBQUMsS0FBSyxtQkFBbUIsbUJBQWtCLEtBQU0sV0FBVztBQUM5RCxXQUFLLG1CQUFtQjtBQUFBLFFBQ3RCLGFBQWEsV0FBVyxXQUFXO0FBQUEsUUFDbkM7QUFBQTtJQUVKO0FBQUEsRUFDRDtBQUNILENBQUM7Ozs7c0JBMUNDQSxZQU1XLGtDQU5pQjtBQUFBLHFCQUMxQixNQUVtQjtBQUFBLE1BRm5CQyxZQUVtQjtBQUFBLHlCQURqQixNQUFlO0FBQUEsVUFBZkEsWUFBZTtBQUFBOzs7TUFHakJBLFlBQWdDLHlCQUFwQixLQUFJLGNBQWE7QUFBQSIsIm5hbWVzIjpbIl9jcmVhdGVCbG9jayIsIl9jcmVhdGVWTm9kZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXlvdXRzL05vdG9wZm9vdGVyTGF5b3V0LnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLWxheW91dCB2aWV3PVwibEhoIExwciBsRmZcIj5cbiAgICA8cS1wYWdlLWNvbnRhaW5lcj5cbiAgICAgIDxyb3V0ZXItdmlldyAvPlxuICAgIDwvcS1wYWdlLWNvbnRhaW5lcj5cblxuICAgIDxQdXNoRGlhbG9nIHJlZj1cInB1c2hfZGlhbG9nXCIgLz5cbiAgPC9xLWxheW91dD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIGRlZmluZUFzeW5jQ29tcG9uZW50IH0gZnJvbSBcInZ1ZVwiO1xuaW1wb3J0IEFQSWludGVyZmFjZSBmcm9tIFwic3JjL2FwaS9BUElpbnRlcmZhY2VcIjtcbmltcG9ydCB7IHVzZURlbGl2ZXJ5c2NoZWRTdG9yZSB9IGZyb20gXCJzdG9yZXMvRGVsaXZlcnlTY2hlZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiBcIk5vdG9wZm9vdGVyTGF5b3V0XCIsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBQdXNoRGlhbG9nOiBkZWZpbmVBc3luY0NvbXBvbmVudCgoKSA9PiBpbXBvcnQoXCJjb21wb25lbnRzL1B1c2hEaWFsb2cudnVlXCIpKSxcbiAgfSxcbiAgc2V0dXAoKSB7XG4gICAgY29uc3QgZGVsaXZlcnlzY2hlZFN0b3JlID0gdXNlRGVsaXZlcnlzY2hlZFN0b3JlKCk7XG4gICAgcmV0dXJuIHsgZGVsaXZlcnlzY2hlZFN0b3JlIH07XG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy4kcm91dGUuZnVsbFBhdGgpO1xuICAgIC8vIHRoaXMuJHJvdXRlLmZ1bGxQYXRoICE9IFwiL2NoZWNrb3V0XCJcblxuICAgIGxldCAkY29udGludWUgPSB0cnVlO1xuICAgIGlmIChcbiAgICAgIHRoaXMuJHJvdXRlLmZ1bGxQYXRoID09IFwiL2NhcnRcIiB8fFxuICAgICAgdGhpcy4kcm91dGUuZnVsbFBhdGggPT0gXCIvY2hlY2tvdXRcIlxuICAgICkge1xuICAgICAgJGNvbnRpbnVlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmRlbGl2ZXJ5c2NoZWRTdG9yZS5oYWRUcmFuc2FjdGlvbkxpc3QoKSAmJiAkY29udGludWUpIHtcbiAgICAgIHRoaXMuZGVsaXZlcnlzY2hlZFN0b3JlLmdldERlbGl2ZXJ5U2NoZWQoXG4gICAgICAgIEFQSWludGVyZmFjZS5nZXRTdG9yYWdlKFwiY2FydF91dWlkXCIpLFxuICAgICAgICAwXG4gICAgICApO1xuICAgIH1cbiAgfSxcbn0pO1xuPC9zY3JpcHQ+XG4iXSwiZmlsZSI6ImFzc2V0cy9Ob3RvcGZvb3RlckxheW91dC45ZDJiZDdkZC5qcyJ9
