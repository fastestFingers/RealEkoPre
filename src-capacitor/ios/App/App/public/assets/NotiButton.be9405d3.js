import { _ as _export_sfc, l as defineAsyncComponent, u as __vitePreload, n as resolveComponent, p as openBlock, V as createElementBlock, f as createVNode, t as withCtx, q as createBlock, a0 as Transition, aA as createCommentVNode, Y as QBtn, F as Fragment } from "./index.61ed5618.js";
import { Q as QBadge } from "./QBadge.6d32ed43.js";
const _sfc_main = {
  name: "NotiButton",
  components: {
    ComponentsRealtime: defineAsyncComponent(
      () => __vitePreload(() => import("./ComponentsRealtime.d8c5a360.js"), true ? ["assets/ComponentsRealtime.d8c5a360.js","assets/index.d0b40bd3.js","assets/index.61ed5618.js","assets/index.dbee30c0.css"] : void 0)
    )
  },
  data() {
    return {
      data: []
    };
  },
  computed: {
    hasData() {
      if (Object.keys(this.data).length > 0) {
        return true;
      }
      return false;
    }
  },
  methods: {
    afterReceive(data) {
      this.data = data;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ComponentsRealtime = resolveComponent("ComponentsRealtime");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(QBtn, {
      to: "/account/notifications",
      flat: "",
      round: "",
      dense: "",
      icon: "las la-bell",
      class: "q-mr-smx",
      color: _ctx.$q.dark.mode ? "white" : "dark"
    }, {
      default: withCtx(() => [
        $options.hasData ? (openBlock(), createBlock(Transition, {
          key: 0,
          appear: "",
          "enter-active-class": "animated zoomIn",
          "leave-active-class": "animated zoomOut"
        }, {
          default: withCtx(() => [
            createVNode(QBadge, {
              floating: "",
              color: "primary2",
              rounded: "",
              style: { "top": "2px" }
            })
          ]),
          _: 1
        })) : createCommentVNode("", true)
      ]),
      _: 1
    }, 8, ["color"]),
    createVNode(_component_ComponentsRealtime, {
      ref: "realtime",
      getevent: "notification_event",
      onAfterReceive: $options.afterReceive
    }, null, 8, ["onAfterReceive"])
  ], 64);
}
var NotiButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "NotiButton.vue"]]);
export { NotiButton as default };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7QUE4QkEsTUFBSyxZQUFVO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixZQUFZO0FBQUEsSUFDVixvQkFBb0I7QUFBQSxNQUFxQiwwQkFDdkMsT0FBTyxxQ0FBbUM7QUFBQSxJQUMzQztBQUFBLEVBQ0Y7QUFBQSxFQUNELE9BQU87QUFDTCxXQUFPO0FBQUEsTUFDTCxNQUFNLENBQUU7QUFBQTtFQUVYO0FBQUEsRUFDRCxVQUFVO0FBQUEsSUFDUixVQUFVO0FBQ1IsVUFBSSxPQUFPLEtBQUssS0FBSyxJQUFJLEVBQUUsU0FBUyxHQUFHO0FBQ3JDLGVBQU87QUFBQSxNQUNUO0FBQ0EsYUFBTztBQUFBLElBQ1I7QUFBQSxFQUNGO0FBQUEsRUFDRCxTQUFTO0FBQUEsSUFDUCxhQUFhLE1BQU07QUFDakIsV0FBSyxPQUFPO0FBQUEsSUFDYjtBQUFBLEVBQ0Y7QUFDSDs7OztJQXRERUEsWUFpQlE7QUFBQSxNQWhCTixJQUFHO0FBQUEsTUFDSDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQSxNQUFLO0FBQUEsTUFDTCxPQUFNO0FBQUEsTUFDTCxPQUFPLFFBQUcsS0FBSyxPQUFJO0FBQUE7dUJBRXBCLE1BT2E7QUFBQSxRQU5MLFNBQU8sd0JBRGZDLFlBT2FDO0FBQUE7VUFMWDtBQUFBLFVBQ0Esc0JBQW1CO0FBQUEsVUFDbkIsc0JBQW1CO0FBQUE7MkJBRW5CLE1BQThEO0FBQUEsWUFBOURGLFlBQThEO0FBQUEsY0FBckQ7QUFBQSxjQUFTLE9BQU07QUFBQSxjQUFXO0FBQUEsY0FBUSxTQUFnQjtBQUFBOzs7Ozs7O0lBSS9EQSxZQUlFO0FBQUEsTUFIQSxLQUFJO0FBQUEsTUFDSixVQUFTO0FBQUEsTUFDUixnQkFBZSxTQUFZO0FBQUEiLCJuYW1lcyI6WyJfY3JlYXRlVk5vZGUiLCJfY3JlYXRlQmxvY2siLCJfVHJhbnNpdGlvbiJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL05vdGlCdXR0b24udnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHEtYnRuXG4gICAgdG89XCIvYWNjb3VudC9ub3RpZmljYXRpb25zXCJcbiAgICBmbGF0XG4gICAgcm91bmRcbiAgICBkZW5zZVxuICAgIGljb249XCJsYXMgbGEtYmVsbFwiXG4gICAgY2xhc3M9XCJxLW1yLXNteFwiXG4gICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ3doaXRlJyA6ICdkYXJrJ1wiXG4gID5cbiAgICA8dHJhbnNpdGlvblxuICAgICAgdi1pZj1cImhhc0RhdGFcIlxuICAgICAgYXBwZWFyXG4gICAgICBlbnRlci1hY3RpdmUtY2xhc3M9XCJhbmltYXRlZCB6b29tSW5cIlxuICAgICAgbGVhdmUtYWN0aXZlLWNsYXNzPVwiYW5pbWF0ZWQgem9vbU91dFwiXG4gICAgPlxuICAgICAgPHEtYmFkZ2UgZmxvYXRpbmcgY29sb3I9XCJwcmltYXJ5MlwiIHJvdW5kZWQgc3R5bGU9XCJ0b3A6IDJweFwiIC8+XG4gICAgPC90cmFuc2l0aW9uPlxuICA8L3EtYnRuPlxuXG4gIDxDb21wb25lbnRzUmVhbHRpbWVcbiAgICByZWY9XCJyZWFsdGltZVwiXG4gICAgZ2V0ZXZlbnQ9XCJub3RpZmljYXRpb25fZXZlbnRcIlxuICAgIEBhZnRlci1yZWNlaXZlPVwiYWZ0ZXJSZWNlaXZlXCJcbiAgLz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBkZWZpbmVBc3luY0NvbXBvbmVudCB9IGZyb20gXCJ2dWVcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIk5vdGlCdXR0b25cIixcbiAgY29tcG9uZW50czoge1xuICAgIENvbXBvbmVudHNSZWFsdGltZTogZGVmaW5lQXN5bmNDb21wb25lbnQoKCkgPT5cbiAgICAgIGltcG9ydChcImNvbXBvbmVudHMvQ29tcG9uZW50c1JlYWx0aW1lLnZ1ZVwiKVxuICAgICksXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IFtdLFxuICAgIH07XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgaGFzRGF0YSgpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmRhdGEpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGFmdGVyUmVjZWl2ZShkYXRhKSB7XG4gICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iXSwiZmlsZSI6ImFzc2V0cy9Ob3RpQnV0dG9uLmJlOTQwNWQzLmpzIn0=
