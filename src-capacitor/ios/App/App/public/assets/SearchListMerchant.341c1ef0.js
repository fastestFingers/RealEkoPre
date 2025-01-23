import { Q as QImg } from "./QImg.6c27044c.js";
import { _ as _export_sfc, p as openBlock, V as createElementBlock, f as createVNode, t as withCtx, ad as QItemSection, U as createBaseVNode, Z as toDisplayString, F as Fragment, X as renderList, a6 as createTextVNode, aA as createCommentVNode, a7 as normalizeClass } from "./index.61ed5618.js";
import { Q as QChip } from "./QChip.f183a4f1.js";
import { Q as QItemLabel } from "./QItemLabel.a9365c5b.js";
const _sfc_main = {
  name: "SearchListMerchant",
  props: ["items", "cuisine"],
  setup() {
    return {};
  }
};
const _hoisted_1 = { class: "font13 text-weight-bold no-margin line-normal" };
const _hoisted_2 = { class: "text-grey ellipsis-2-lines font12 line-normal" };
const _hoisted_3 = { class: "row items-center justify-between" };
const _hoisted_4 = { class: "text-dark" };
const _hoisted_5 = { class: "font11 text-grey" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(QItemSection, { avatar: "" }, {
      default: withCtx(() => [
        createVNode(QImg, {
          src: $props.items.url_logo,
          lazy: "",
          fit: "cover",
          style: { "height": "80px", "width": "80px" },
          class: "radius8",
          "spinner-color": "amber",
          "spinner-size": "sm"
        }, null, 8, ["src"])
      ]),
      _: 1
    }),
    createVNode(QItemSection, null, {
      default: withCtx(() => [
        createVNode(QItemLabel, null, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_1, toDisplayString($props.items.restaurant_name), 1),
            createBaseVNode("div", _hoisted_2, [
              (openBlock(true), createElementBlock(Fragment, null, renderList($props.items.cuisine_group, (cuisine_index) => {
                return openBlock(), createElementBlock(Fragment, { key: cuisine_index }, [
                  $props.cuisine[cuisine_index] ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    createTextVNode(toDisplayString($props.cuisine[cuisine_index].name) + ", ", 1)
                  ], 64)) : createCommentVNode("", true)
                ], 64);
              }), 128))
            ]),
            createBaseVNode("div", _hoisted_3, [
              createVNode(QChip, {
                size: "sm",
                color: "mygrey"
              }, {
                default: withCtx(() => [
                  createBaseVNode("span", _hoisted_4, toDisplayString(_ctx.$t("Restaurant")), 1)
                ]),
                _: 1
              }),
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("span", {
                  class: normalizeClass({
                    "text-white": _ctx.$q.dark.mode,
                    "text-dark": !_ctx.$q.dark.mode
                  })
                }, toDisplayString($props.items.distance_pretty), 3)
              ])
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ], 64);
}
var SearchListMerchant = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "SearchListMerchant.vue"]]);
export { SearchListMerchant as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoTGlzdE1lcmNoYW50LjM0MWMxZWYwLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9TZWFyY2hMaXN0TWVyY2hhbnQudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICA8cS1pbWdcbiAgICAgIDpzcmM9XCJpdGVtcy51cmxfbG9nb1wiXG4gICAgICBsYXp5XG4gICAgICBmaXQ9XCJjb3ZlclwiXG4gICAgICBzdHlsZT1cImhlaWdodDogODBweDsgd2lkdGg6IDgwcHhcIlxuICAgICAgY2xhc3M9XCJyYWRpdXM4XCJcbiAgICAgIHNwaW5uZXItY29sb3I9XCJhbWJlclwiXG4gICAgICBzcGlubmVyLXNpemU9XCJzbVwiXG4gICAgLz5cbiAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgPHEtaXRlbS1zZWN0aW9uPlxuICAgIDxxLWl0ZW0tbGFiZWw+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9udDEzIHRleHQtd2VpZ2h0LWJvbGQgbm8tbWFyZ2luIGxpbmUtbm9ybWFsXCI+XG4gICAgICAgIHt7IGl0ZW1zLnJlc3RhdXJhbnRfbmFtZSB9fVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dC1ncmV5IGVsbGlwc2lzLTItbGluZXMgZm9udDEyIGxpbmUtbm9ybWFsXCI+XG4gICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgIHYtZm9yPVwiY3Vpc2luZV9pbmRleCBpbiBpdGVtcy5jdWlzaW5lX2dyb3VwXCJcbiAgICAgICAgICA6a2V5PVwiY3Vpc2luZV9pbmRleFwiXG4gICAgICAgID5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImN1aXNpbmVbY3Vpc2luZV9pbmRleF1cIlxuICAgICAgICAgICAgPnt7IGN1aXNpbmVbY3Vpc2luZV9pbmRleF0ubmFtZSB9fSxcbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgPHEtY2hpcCBzaXplPVwic21cIiBjb2xvcj1cIm15Z3JleVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYXJrXCI+e3sgJHQoXCJSZXN0YXVyYW50XCIpIH19PC9zcGFuPlxuICAgICAgICA8L3EtY2hpcD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvbnQxMSB0ZXh0LWdyZXlcIj5cbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICAgICAndGV4dC13aGl0ZSc6ICRxLmRhcmsubW9kZSxcbiAgICAgICAgICAgICAgJ3RleHQtZGFyayc6ICEkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgICB9XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7eyBpdGVtcy5kaXN0YW5jZV9wcmV0dHkgfX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9xLWl0ZW0tbGFiZWw+XG4gIDwvcS1pdGVtLXNlY3Rpb24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIlNlYXJjaExpc3RNZXJjaGFudFwiLFxuICBwcm9wczogW1wiaXRlbXNcIiwgXCJjdWlzaW5lXCJdLFxuICBzZXR1cCgpIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX2NyZWF0ZVZOb2RlIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl90b0Rpc3BsYXlTdHJpbmciLCJfb3BlbkJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9GcmFnbWVudCIsIl9yZW5kZXJMaXN0IiwiX2NyZWF0ZVRleHRWTm9kZSIsIl9ub3JtYWxpemVDbGFzcyJdLCJtYXBwaW5ncyI6Ijs7OztBQStDQSxNQUFLLFlBQVU7QUFBQSxFQUNiLE1BQU07QUFBQSxFQUNOLE9BQU8sQ0FBQyxTQUFTLFNBQVM7QUFBQSxFQUMxQixRQUFRO0FBQ04sV0FBTztFQUNSO0FBQ0g7QUF2Q1csTUFBQSxhQUFBLEVBQUEsT0FBTSxnREFBK0M7QUFHckQsTUFBQSxhQUFBLEVBQUEsT0FBTSxnREFBK0M7QUFVckQsTUFBQSxhQUFBLEVBQUEsT0FBTSxtQ0FBa0M7QUFFbkMsTUFBQSxhQUFBLEVBQUEsT0FBTSxZQUFXO0FBRXBCLE1BQUEsYUFBQSxFQUFBLE9BQU0sbUJBQWtCOzs7SUE5Qm5DQSxZQVVpQixjQUFBLEVBQUEsUUFBQSxHQUFBLEdBVks7QUFBQSx1QkFDcEIsTUFRRTtBQUFBLFFBUkZBLFlBUUUsTUFBQTtBQUFBLFVBUEMsS0FBSyxPQUFLLE1BQUM7QUFBQSxVQUNaLE1BQUE7QUFBQSxVQUNBLEtBQUk7QUFBQSxVQUNKLE9BQUEsRUFBaUMsVUFBQSxRQUFBLFNBQUEsT0FBQTtBQUFBLFVBQ2pDLE9BQU07QUFBQSxVQUNOLGlCQUFjO0FBQUEsVUFDZCxnQkFBYTtBQUFBOzs7O0lBR2pCQSxZQStCaUIsY0FBQSxNQUFBO0FBQUEsdUJBOUJmLE1BNkJlO0FBQUEsUUE3QmZBLFlBNkJlLFlBQUEsTUFBQTtBQUFBLDJCQTVCYixNQUVNO0FBQUEsWUFGTkMsZ0JBRU0sT0FGTixZQUNLQyxnQkFBQSxPQUFBLE1BQU0sZUFBZSxHQUFBLENBQUE7QUFBQSxZQUUxQkQsZ0JBU00sT0FUTixZQVNNO0FBQUEsZUFSSkUsVUFBQSxJQUFBLEdBQUFDLG1CQU9XQyxVQU5lLE1BQUFDLFdBQUEsT0FBQSxNQUFNLGdCQUF2QixrQkFBYTt3RUFDZCxpQkFBYTtBQUFBLGtCQUVILE9BQUEsUUFBUSwrQkFBeEJGLG1CQUVXQyxVQUFBLEVBQUEsS0FBQSxFQUFBLEdBQUE7QUFBQSxvQkFETEUsZ0JBQUFMLGdCQUFBLE9BQUEsUUFBUSxlQUFlLElBQUksSUFBRyxNQUNwQyxDQUFBO0FBQUE7Ozs7WUFHSkQsZ0JBY00sT0FkTixZQWNNO0FBQUEsY0FiSkQsWUFFUyxPQUFBO0FBQUEsZ0JBRkQsTUFBSztBQUFBLGdCQUFLLE9BQU07QUFBQTtpQ0FDdEIsTUFBcUQ7QUFBQSxrQkFBckRDLGdCQUFxRCxRQUFyRCxZQUFxREMsZ0JBQTFCLEtBQUUsR0FBQSxZQUFBLENBQUEsR0FBQSxDQUFBO0FBQUE7OztjQUUvQkQsZ0JBU00sT0FUTixZQVNNO0FBQUEsZ0JBUkpBLGdCQU9PLFFBQUE7QUFBQSxrQkFOSixPQUFLTyxlQUFBO0FBQUEsa0NBQWdDLEtBQUUsR0FBQyxLQUFLO0FBQUEsa0NBQWtDLEtBQUUsR0FBQyxLQUFLO0FBQUE7Z0JBS3JGLEdBQUFOLGdCQUFBLE9BQUEsTUFBTSxlQUFlLEdBQUEsQ0FBQTtBQUFBOzs7Ozs7Ozs7Ozs7In0=
