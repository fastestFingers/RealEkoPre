import { Q as QItemLabel } from "./QItemLabel.a9365c5b.js";
import { _ as _export_sfc, p as openBlock, q as createBlock, t as withCtx, a6 as createTextVNode, Z as toDisplayString, aA as createCommentVNode, V as createElementBlock, X as renderList, F as Fragment, f as createVNode, ad as QItemSection, ae as QAvatar, U as createBaseVNode, ac as QItem, b2 as QSeparator } from "./index.61ed5618.js";
import { Q as QList } from "./QList.b69a7e5b.js";
const _sfc_main = {
  name: "ChatUserList",
  props: ["data", "headerTitle"],
  setup() {
    return {};
  }
};
const _hoisted_1 = ["src"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QList, null, {
    default: withCtx(() => [
      $props.headerTitle ? (openBlock(), createBlock(QItemLabel, {
        key: 0,
        header: ""
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString($props.headerTitle), 1)
        ]),
        _: 1
      })) : createCommentVNode("", true),
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.data, (items) => {
        return openBlock(), createElementBlock(Fragment, { key: items }, [
          createVNode(QItem, {
            clickable: "",
            onClick: ($event) => _ctx.$emit("onChatuser", items.client_uuid)
          }, {
            default: withCtx(() => [
              createVNode(QItemSection, { avatar: "" }, {
                default: withCtx(() => [
                  createVNode(QAvatar, null, {
                    default: withCtx(() => [
                      createBaseVNode("img", {
                        src: items.photo_url
                      }, null, 8, _hoisted_1)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              createVNode(QItemSection, null, {
                default: withCtx(() => [
                  createVNode(QItemLabel, { class: "text-weight-bold" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(items.first_name), 1)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(QItemLabel, { caption: "" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(items.user_type), 1)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1032, ["onClick"]),
          createVNode(QSeparator, { inset: "item" })
        ], 64);
      }), 128))
    ]),
    _: 1
  });
}
var ChatUserList = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "ChatUserList.vue"]]);
export { ChatUserList as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhdFVzZXJMaXN0LjRjZTI4YmU2LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9DaGF0VXNlckxpc3QudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHEtbGlzdD5cbiAgICA8cS1pdGVtLWxhYmVsIHYtaWY9XCJoZWFkZXJUaXRsZVwiIGhlYWRlcj57eyBoZWFkZXJUaXRsZSB9fTwvcS1pdGVtLWxhYmVsPlxuICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIml0ZW1zIGluIGRhdGFcIiA6a2V5PVwiaXRlbXNcIj5cbiAgICAgIDxxLWl0ZW0gY2xpY2thYmxlIEBjbGljaz1cIiRlbWl0KCdvbkNoYXR1c2VyJywgaXRlbXMuY2xpZW50X3V1aWQpXCI+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgPHEtYXZhdGFyPlxuICAgICAgICAgICAgPGltZyA6c3JjPVwiaXRlbXMucGhvdG9fdXJsXCIgLz5cbiAgICAgICAgICA8L3EtYXZhdGFyPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1sYWJlbCBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGRcIj5cbiAgICAgICAgICAgIHt7IGl0ZW1zLmZpcnN0X25hbWUgfX1cbiAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24+XG4gICAgICAgICAgICB7eyBpdGVtcy51c2VyX3R5cGUgfX1cbiAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDwvcS1pdGVtPlxuICAgICAgPHEtc2VwYXJhdG9yIGluc2V0PVwiaXRlbVwiIC8+XG4gICAgPC90ZW1wbGF0ZT5cbiAgPC9xLWxpc3Q+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIkNoYXRVc2VyTGlzdFwiLFxuICBwcm9wczogW1wiZGF0YVwiLCBcImhlYWRlclRpdGxlXCJdLFxuICBzZXR1cCgpIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX2NyZWF0ZUJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9GcmFnbWVudCIsIl9yZW5kZXJMaXN0IiwiX2NyZWF0ZVZOb2RlIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9jcmVhdGVUZXh0Vk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7QUF5QkEsTUFBSyxZQUFVO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixPQUFPLENBQUMsUUFBUSxhQUFhO0FBQUEsRUFDN0IsUUFBUTtBQUNOLFdBQU87RUFDUjtBQUNIOzs7c0JBOUJFQSxZQW9CUyxPQUFBLE1BQUE7QUFBQSxxQkFuQlAsTUFBd0U7QUFBQSxNQUFwRCxPQUFXLDRCQUEvQkEsWUFBd0UsWUFBQTtBQUFBO1FBQXZDLFFBQUE7QUFBQTt5QkFBTyxNQUFpQjtBQUFBLDBDQUFkLE9BQVcsV0FBQSxHQUFBLENBQUE7QUFBQTs7O3dCQUN0REMsbUJBaUJXQyxVQUFBLE1BQUFDLFdBakJlLE9BQUksTUFBQSxDQUFiLFVBQUs7Z0VBQWdCLFNBQUs7QUFBQSxVQUN6Q0MsWUFjUyxPQUFBO0FBQUEsWUFkRCxXQUFBO0FBQUEsWUFBVyxTQUFPLFlBQUEsS0FBQSxNQUFvQixjQUFBLE1BQU0sV0FBVztBQUFBOzZCQUM3RCxNQUlpQjtBQUFBLGNBSmpCQSxZQUlpQixjQUFBLEVBQUEsUUFBQSxHQUFBLEdBSks7QUFBQSxpQ0FDcEIsTUFFVztBQUFBLGtCQUZYQSxZQUVXLFNBQUEsTUFBQTtBQUFBLHFDQURULE1BQThCO0FBQUEsc0JBQTlCQyxnQkFBOEIsT0FBQTtBQUFBLHdCQUF4QixLQUFLLE1BQU07QUFBQTs7Ozs7OztjQUdyQkQsWUFPaUIsY0FBQSxNQUFBO0FBQUEsaUNBTmYsTUFFZTtBQUFBLGtCQUZmQSxZQUVlLFlBQUEsRUFBQSxPQUFBLG1CQUZ1QixHQUFBO0FBQUEscUNBQ3BDLE1BQXNCO0FBQUEsc0JBQW5CRSxnQkFBQUMsZ0JBQUEsTUFBTSxVQUFVLEdBQUEsQ0FBQTtBQUFBOzs7a0JBRXJCSCxZQUVlLFlBQUEsRUFBQSxTQUFBLEdBQUEsR0FGTTtBQUFBLHFDQUNuQixNQUFxQjtBQUFBLHNCQUFsQkUsZ0JBQUFDLGdCQUFBLE1BQU0sU0FBUyxHQUFBLENBQUE7QUFBQTs7Ozs7Ozs7O1VBSXhCSCxZQUE0QixZQUFBLEVBQUEsT0FBQSxPQUFWLENBQUE7QUFBQTs7Ozs7Ozs7In0=
