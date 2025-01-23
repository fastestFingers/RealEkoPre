import { Q as QSkeleton } from "./QSkeleton.39737398.js";
import { _ as _export_sfc, p as openBlock, q as createBlock, t as withCtx, V as createElementBlock, X as renderList, aa as withDirectives, ab as Ripple, f as createVNode, ad as QItemSection, U as createBaseVNode, ac as QItem, F as Fragment } from "./index.61ed5618.js";
import { Q as QList } from "./QList.b69a7e5b.js";
const _sfc_main = {
  name: "MerchantListSkeleton",
  setup() {
    return {};
  }
};
const _hoisted_1 = { class: "row q-mt-sm q-col-gutter-sm" };
const _hoisted_2 = { class: "col-3" };
const _hoisted_3 = { class: "col-4" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QList, { class: "qlist-no-padding" }, {
    default: withCtx(() => [
      (openBlock(), createElementBlock(Fragment, null, renderList(5, (i) => {
        return withDirectives(createVNode(QItem, {
          key: i,
          clickable: ""
        }, {
          default: withCtx(() => [
            createVNode(QItemSection, { side: "" }, {
              default: withCtx(() => [
                createVNode(QSkeleton, {
                  style: { "height": "80px", "width": "80px" },
                  square: ""
                })
              ]),
              _: 1
            }),
            createVNode(QItemSection, { top: "" }, {
              default: withCtx(() => [
                createVNode(QSkeleton, {
                  type: "text",
                  style: { "width": "40%" }
                }),
                createVNode(QSkeleton, { type: "text" }),
                createBaseVNode("div", _hoisted_1, [
                  createBaseVNode("div", _hoisted_2, [
                    createVNode(QSkeleton, { type: "text" })
                  ]),
                  createBaseVNode("div", _hoisted_3, [
                    createVNode(QSkeleton, { type: "text" })
                  ])
                ])
              ]),
              _: 1
            })
          ]),
          _: 2
        }, 1024), [
          [Ripple]
        ]);
      }), 64))
    ]),
    _: 1
  });
}
var MerchantListSkeleton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "MerchantListSkeleton.vue"]]);
export { MerchantListSkeleton as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVyY2hhbnRMaXN0U2tlbGV0b24uODZhY2FhM2QuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01lcmNoYW50TGlzdFNrZWxldG9uLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLWxpc3QgIGNsYXNzPVwicWxpc3Qtbm8tcGFkZGluZ1wiPlxuICAgICAgPHEtaXRlbSB2LWZvcj1cImkgaW4gNVwiIDprZXk9XCJpXCIgIGNsaWNrYWJsZSB2LXJpcHBsZT5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICAgICAgICA8cS1za2VsZXRvbiBzdHlsZT1cImhlaWdodDo4MHB4OyB3aWR0aDo4MHB4O1wiIHNxdWFyZSAvPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24gdG9wPlxuICAgICAgICAgICA8cS1za2VsZXRvbiAgdHlwZT1cInRleHRcIiBzdHlsZT1cIndpZHRoOjQwJVwiIC8+XG4gICAgICAgICAgIDxxLXNrZWxldG9uICB0eXBlPVwidGV4dFwiICAvPlxuICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHEtbXQtc20gcS1jb2wtZ3V0dGVyLXNtXCI+XG4gICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zXCI+PHEtc2tlbGV0b24gIHR5cGU9XCJ0ZXh0XCIgLz48L2Rpdj5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTRcIj48cS1za2VsZXRvbiAgdHlwZT1cInRleHRcIiAvPjwvZGl2PlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDwvcS1pdGVtPlxuICAgPC9xLWxpc3Q+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnTWVyY2hhbnRMaXN0U2tlbGV0b24nLFxuICBzZXR1cCAoKSB7XG4gICAgcmV0dXJuIHt9XG4gIH1cbn1cbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbIl9jcmVhdGVCbG9jayIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfRnJhZ21lbnQiLCJfcmVuZGVyTGlzdCIsIl9jcmVhdGVWTm9kZSIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiXSwibWFwcGluZ3MiOiI7OztBQW1CQSxNQUFLLFlBQVU7QUFBQSxFQUNiLE1BQU07QUFBQSxFQUNOLFFBQVM7QUFDUCxXQUFPLENBQUM7QUFBQSxFQUNWO0FBQ0Y7QUFmZ0IsTUFBQSxhQUFBLEVBQUEsT0FBTSw4QkFBNkI7QUFDakMsTUFBQSxhQUFBLEVBQUEsT0FBTSxRQUFPO0FBQ2IsTUFBQSxhQUFBLEVBQUEsT0FBTSxRQUFPOztzQkFWN0JBLFlBY1UsT0FBQSxFQUFBLE9BQUEsc0JBZHVCO0FBQUEscUJBQ3JCLE1BQWM7QUFBQSxvQkFBdEJDLG1CQVlTQyxVQUFBLE1BQUFDLFdBWlcsR0FBQyxDQUFOLE1BQUM7OEJBQWhCQyxZQVlTLE9BQUE7QUFBQSxVQVplLEtBQUs7QUFBQSxVQUFJLFdBQUE7QUFBQTsyQkFDL0IsTUFFaUI7QUFBQSxZQUZqQkEsWUFFaUIsY0FBQSxFQUFBLE1BQUEsR0FBQSxHQUFBO0FBQUEsK0JBRGIsTUFBc0Q7QUFBQSxnQkFBdERBLFlBQXNELFdBQUE7QUFBQSxrQkFBMUMsT0FBQSxFQUFnQyxVQUFBLFFBQUEsU0FBQSxPQUFBO0FBQUEsa0JBQUMsUUFBQTtBQUFBOzs7O1lBRWpEQSxZQU9pQixjQUFBLEVBQUEsS0FBQSxHQUFBLEdBQUE7QUFBQSwrQkFOZCxNQUE2QztBQUFBLGdCQUE3Q0EsWUFBNkMsV0FBQTtBQUFBLGtCQUFoQyxNQUFLO0FBQUEsa0JBQU8sT0FBQSxFQUFpQixTQUFBLE1BQUE7QUFBQTtnQkFDMUNBLFlBQTRCLFdBQUEsRUFBQSxNQUFBLE9BQWYsQ0FBSTtBQUFBLGdCQUNqQkMsZ0JBR00sT0FITixZQUdNO0FBQUEsa0JBRkpBLGdCQUFvRCxPQUFwRCxZQUFvRDtBQUFBLG9CQUFqQ0QsWUFBMkIsV0FBQSxFQUFBLE1BQUEsT0FBZCxDQUFJO0FBQUE7a0JBQ3BDQyxnQkFBb0QsT0FBcEQsWUFBb0Q7QUFBQSxvQkFBakNELFlBQTJCLFdBQUEsRUFBQSxNQUFBLE9BQWQsQ0FBSTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
