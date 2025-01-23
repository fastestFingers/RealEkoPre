import { _ as _export_sfc, R as useDataStore, p as openBlock, V as createElementBlock, f as createVNode, t as withCtx, a7 as normalizeClass, F as Fragment, Y as QBtn, a6 as createTextVNode, Z as toDisplayString, X as renderList, q as createBlock, ad as QItemSection, ac as QItem } from "./index.61ed5618.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QItemLabel } from "./QItemLabel.a9365c5b.js";
import { Q as QList } from "./QList.b69a7e5b.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import "./QResizeObserver.d08dce3c.js";
const _sfc_main = {
  name: "LegalMenu",
  setup() {
    const DataStore = useDataStore();
    return { DataStore };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(QHeader, {
      reveal: "",
      "reveal-offset": "50",
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
                createTextVNode(toDisplayString(_ctx.$t("Legal")), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["class"]),
    createVNode(QPage, { padding: "" }, {
      default: withCtx(() => [
        createVNode(QList, { separator: "" }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList($setup.DataStore.legal_menu, (items, index) => {
              return openBlock(), createBlock(QItem, {
                key: items,
                clickable: "",
                to: {
                  name: "page",
                  params: {
                    page_id: index
                  }
                }
              }, {
                default: withCtx(() => [
                  createVNode(QItemSection, null, {
                    default: withCtx(() => [
                      createVNode(QItemLabel, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t(items)), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1032, ["to"]);
            }), 128))
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ], 64);
}
var LegalMenu = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "LegalMenu.vue"]]);
export { LegalMenu as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGVnYWxNZW51LjdlMzRlZDA3LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvTGVnYWwvTGVnYWxNZW51LnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLWhlYWRlclxuICAgIHJldmVhbFxuICAgIHJldmVhbC1vZmZzZXQ9XCI1MFwiXG4gICAgOmNsYXNzPVwie1xuICAgICAgJ2JnLW15ZGFyayB0ZXh0LXdoaXRlJzogJHEuZGFyay5tb2RlLFxuICAgICAgJ2JnLXdoaXRlIHRleHQtZGFyayc6ICEkcS5kYXJrLm1vZGUsXG4gICAgfVwiXG4gID5cbiAgICA8cS10b29sYmFyPlxuICAgICAgPHEtYnRuXG4gICAgICAgIEBjbGljaz1cIiRyb3V0ZXIuYmFjaygpXCJcbiAgICAgICAgZmxhdFxuICAgICAgICByb3VuZFxuICAgICAgICBkZW5zZVxuICAgICAgICBpY29uPVwibGFzIGxhLWFuZ2xlLWxlZnRcIlxuICAgICAgICBjbGFzcz1cInEtbXItc21cIlxuICAgICAgICA6Y29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnd2hpdGUnIDogJ2RhcmsnXCJcbiAgICAgIC8+XG4gICAgICA8cS10b29sYmFyLXRpdGxlIGNsYXNzPVwidGV4dC13ZWlnaHQtYm9sZFwiPnt7XG4gICAgICAgICR0KFwiTGVnYWxcIilcbiAgICAgIH19PC9xLXRvb2xiYXItdGl0bGU+XG4gICAgPC9xLXRvb2xiYXI+XG4gIDwvcS1oZWFkZXI+XG4gIDxxLXBhZ2UgcGFkZGluZz5cbiAgICA8cS1saXN0IHNlcGFyYXRvcj5cbiAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIihpdGVtcywgaW5kZXgpIGluIERhdGFTdG9yZS5sZWdhbF9tZW51XCIgOmtleT1cIml0ZW1zXCI+XG4gICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICA6dG89XCJ7XG4gICAgICAgICAgICBuYW1lOiAncGFnZScsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgcGFnZV9pZDogaW5kZXgsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH1cIlxuICAgICAgICA+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgPHEtaXRlbS1sYWJlbD57eyAkdChpdGVtcykgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8L3EtaXRlbT5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC9xLWxpc3Q+XG4gIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IHVzZURhdGFTdG9yZSB9IGZyb20gXCJzdG9yZXMvRGF0YVN0b3JlXCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiTGVnYWxNZW51XCIsXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IERhdGFTdG9yZSA9IHVzZURhdGFTdG9yZSgpO1xuICAgIHJldHVybiB7IERhdGFTdG9yZSB9O1xuICB9LFxufTtcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbIl9jcmVhdGVWTm9kZSIsIl9ub3JtYWxpemVDbGFzcyIsIl9vcGVuQmxvY2siLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX0ZyYWdtZW50IiwiX2NyZWF0ZUJsb2NrIiwiX2NyZWF0ZVRleHRWTm9kZSIsIl90b0Rpc3BsYXlTdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBK0NBLE1BQUssWUFBVTtBQUFBLEVBQ2IsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUNOLFVBQU0sWUFBWTtBQUNsQixXQUFPLEVBQUU7RUFDVjtBQUNIOzs7SUFwREVBLFlBc0JXLFNBQUE7QUFBQSxNQXJCVCxRQUFBO0FBQUEsTUFDQSxpQkFBYztBQUFBLE1BQ2IsT0FBS0MsZUFBQTtBQUFBLGdDQUFrQyxLQUFFLEdBQUMsS0FBSztBQUFBLCtCQUFtQyxLQUFFLEdBQUMsS0FBSztBQUFBOzt1QkFLM0YsTUFhWTtBQUFBLFFBYlpELFlBYVksVUFBQSxNQUFBO0FBQUEsMkJBWlYsTUFRRTtBQUFBLFlBUkZBLFlBUUUsTUFBQTtBQUFBLGNBUEMsU0FBSyxPQUFBLE9BQUEsT0FBQSxLQUFBLFlBQUUsS0FBTyxRQUFDLEtBQUk7QUFBQSxjQUNwQixNQUFBO0FBQUEsY0FDQSxPQUFBO0FBQUEsY0FDQSxPQUFBO0FBQUEsY0FDQSxNQUFLO0FBQUEsY0FDTCxPQUFNO0FBQUEsY0FDTCxPQUFPLEtBQUEsR0FBRyxLQUFLLE9BQUksVUFBQTtBQUFBO1lBRXRCQSxZQUVvQixlQUFBLEVBQUEsT0FBQSxtQkFGcUIsR0FBQTtBQUFBLCtCQUFDLE1BRXhDO0FBQUEsZ0RBREEsS0FBRSxHQUFBLE9BQUEsQ0FBQSxHQUFBLENBQUE7QUFBQTs7Ozs7Ozs7O0lBSVJBLFlBa0JTLE9BQUEsRUFBQSxTQUFBLEdBQUEsR0FsQk07QUFBQSx1QkFDYixNQWdCUztBQUFBLFFBaEJUQSxZQWdCUyxPQUFBLEVBQUEsV0FBQSxHQWhCUSxHQUFBO0FBQUEsMkJBQ0wsTUFBOEM7QUFBQSxhQUF4REUsVUFBQSxJQUFBLEdBQUFDLG1CQWNXQywyQkFkd0IsT0FBUyxVQUFDLFlBQTNCLENBQUEsT0FBTyxVQUFLO2tDQUM1QkMsWUFZUyxPQUFBO0FBQUEscUJBYm9EO0FBQUEsZ0JBRTNELFdBQUE7QUFBQSxnQkFDQyxJQUFFO0FBQUE7OzZCQUEyRTtBQUFBOzs7aUNBTzlFLE1BRWlCO0FBQUEsa0JBRmpCTCxZQUVpQixjQUFBLE1BQUE7QUFBQSxxQ0FEZixNQUE0QztBQUFBLHNCQUE1Q0EsWUFBNEMsWUFBQSxNQUFBO0FBQUEseUNBQTlCLE1BQWU7QUFBQSwwQkFBWk0sZ0JBQUFDLGdCQUFBLEtBQUEsR0FBRyxLQUFLLENBQUEsR0FBQSxDQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
