import { Q as QSkeleton } from "./QSkeleton.39737398.js";
import { _ as _export_sfc, p as openBlock, q as createBlock, t as withCtx, V as createElementBlock, X as renderList, ac as QItem, f as createVNode, ad as QItemSection, F as Fragment } from "./index.61ed5618.js";
import { Q as QItemLabel } from "./QItemLabel.a9365c5b.js";
import { Q as QList } from "./QList.b69a7e5b.js";
const _sfc_main = {
  name: "ChatUserLoader",
  props: ["rows"],
  setup() {
    return {};
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QList, null, {
    default: withCtx(() => [
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.rows, (items) => {
        return openBlock(), createBlock(QItem, { key: items }, {
          default: withCtx(() => [
            createVNode(QItemSection, { avatar: "" }, {
              default: withCtx(() => [
                createVNode(QSkeleton, { type: "QAvatar" })
              ]),
              _: 1
            }),
            createVNode(QItemSection, null, {
              default: withCtx(() => [
                createVNode(QItemLabel, null, {
                  default: withCtx(() => [
                    createVNode(QSkeleton, { type: "text" })
                  ]),
                  _: 1
                }),
                createVNode(QItemLabel, { caption: "" }, {
                  default: withCtx(() => [
                    createVNode(QSkeleton, { type: "text" })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 2
        }, 1024);
      }), 128))
    ]),
    _: 1
  });
}
var ChatUserLoader = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "ChatUserLoader.vue"]]);
export { ChatUserLoader as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhdFVzZXJMb2FkZXIuNWJiMWIyYzUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NoYXRVc2VyTG9hZGVyLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLWxpc3Q+XG4gICAgPHEtaXRlbSB2LWZvcj1cIml0ZW1zIGluIHJvd3NcIiA6a2V5PVwiaXRlbXNcIj5cbiAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgIDxxLXNrZWxldG9uIHR5cGU9XCJRQXZhdGFyXCIgLz5cbiAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDxxLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgPHEtc2tlbGV0b24gdHlwZT1cInRleHRcIiAvPlxuICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uPlxuICAgICAgICAgIDxxLXNrZWxldG9uIHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgIDwvcS1pdGVtPlxuICA8L3EtbGlzdD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiQ2hhdFVzZXJMb2FkZXJcIixcbiAgcHJvcHM6IFtcInJvd3NcIl0sXG4gIHNldHVwKCkge1xuICAgIHJldHVybiB7fTtcbiAgfSxcbn07XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfY3JlYXRlQmxvY2siLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiLCJfY3JlYXRlVk5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7QUFtQkEsTUFBSyxZQUFVO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixPQUFPLENBQUMsTUFBTTtBQUFBLEVBQ2QsUUFBUTtBQUNOLFdBQU87RUFDUjtBQUNIOztzQkF4QkVBLFlBY1MsT0FBQSxNQUFBO0FBQUEscUJBYkMsTUFBcUI7QUFBQSx3QkFBN0JDLG1CQVlTQyxVQUFBLE1BQUFDLFdBWmUsT0FBSSxNQUFBLENBQWIsVUFBSzs0QkFBcEJILFlBWVMsT0FBQSxFQUFBLEtBQUEsU0FaeUI7QUFBQSwyQkFDaEMsTUFFaUI7QUFBQSxZQUZqQkksWUFFaUIsY0FBQSxFQUFBLFFBQUEsR0FBQSxHQUZLO0FBQUEsK0JBQ3BCLE1BQTZCO0FBQUEsZ0JBQTdCQSxZQUE2QixXQUFBLEVBQUEsTUFBQSxVQUFiLENBQUE7QUFBQTs7O1lBRWxCQSxZQU9pQixjQUFBLE1BQUE7QUFBQSwrQkFOZixNQUVlO0FBQUEsZ0JBRmZBLFlBRWUsWUFBQSxNQUFBO0FBQUEsbUNBRGIsTUFBMEI7QUFBQSxvQkFBMUJBLFlBQTBCLFdBQUEsRUFBQSxNQUFBLE9BQWQsQ0FBSTtBQUFBOzs7Z0JBRWxCQSxZQUVlLFlBQUEsRUFBQSxTQUFBLEdBQUEsR0FGTTtBQUFBLG1DQUNuQixNQUEwQjtBQUFBLG9CQUExQkEsWUFBMEIsV0FBQSxFQUFBLE1BQUEsT0FBZCxDQUFJO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
