import { Q as QImg } from "./QImg.6c27044c.js";
import { _ as _export_sfc, p as openBlock, V as createElementBlock, f as createVNode, t as withCtx, ad as QItemSection, U as createBaseVNode, Z as toDisplayString, F as Fragment, X as renderList, a6 as createTextVNode, aA as createCommentVNode } from "./index.61ed5618.js";
import { Q as QChip } from "./QChip.f183a4f1.js";
import { Q as QItemLabel } from "./QItemLabel.a9365c5b.js";
const _sfc_main = {
  name: "SearchListFood",
  props: ["items", "merchant_list", "money_config"],
  setup() {
    return {};
  }
};
const _hoisted_1 = { class: "font13 text-weight-bold no-margin line-normal" };
const _hoisted_2 = { class: "text-grey ellipsis-2-lines font12 line-normal" };
const _hoisted_3 = ["innerHTML"];
const _hoisted_4 = {
  key: 0,
  class: "text-grey-7 font12 text-weight-medium"
};
const _hoisted_5 = { class: "text-strike" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("span", { class: "q-pr-sm" }, null, -1);
const _hoisted_7 = { class: "row items-center justify-between" };
const _hoisted_8 = { class: "text-dark" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(QItemSection, { avatar: "" }, {
      default: withCtx(() => [
        createVNode(QImg, {
          src: $props.items.url_image,
          lazy: "",
          fit: "cover",
          style: { "height": "80px", "width": "80px" },
          class: "radius8",
          "spinner-color": "secondary",
          "spinner-size": "sm",
          "placeholder-src": "placeholder.png"
        }, null, 8, ["src"])
      ]),
      _: 1
    }),
    createVNode(QItemSection, null, {
      default: withCtx(() => [
        createVNode(QItemLabel, null, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_1, toDisplayString($props.items.item_name), 1),
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("span", {
                innerHTML: $props.items.item_description
              }, null, 8, _hoisted_3)
            ]),
            $props.items.price ? (openBlock(), createElementBlock("div", _hoisted_4, [
              (openBlock(true), createElementBlock(Fragment, null, renderList($props.items.price, (price) => {
                return openBlock(), createElementBlock(Fragment, { key: price }, [
                  price.discount > 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    createTextVNode(toDisplayString(price.size_name) + " ", 1),
                    createBaseVNode("span", _hoisted_5, toDisplayString(price.pretty_price), 1),
                    createTextVNode(" " + toDisplayString(price.pretty_price_after_discount), 1)
                  ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    createTextVNode(toDisplayString(price.size_name) + " " + toDisplayString(price.pretty_price), 1)
                  ], 64)),
                  _hoisted_6
                ], 64);
              }), 128))
            ])) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_7, [
              createVNode(QChip, {
                size: "sm",
                color: "mygrey"
              }, {
                default: withCtx(() => [
                  createBaseVNode("span", _hoisted_8, toDisplayString(_ctx.$t("Food")), 1)
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ], 64);
}
var SearchListFood = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "SearchListFood.vue"]]);
export { SearchListFood as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoTGlzdEZvb2QuODI2Y2VjMDUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaExpc3RGb29kLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDwhLS0gPHByZT57eyBpdGVtcyB9fTwvcHJlPiAtLT5cbiAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICA8cS1pbWdcbiAgICAgIDpzcmM9XCJpdGVtcy51cmxfaW1hZ2VcIlxuICAgICAgbGF6eVxuICAgICAgZml0PVwiY292ZXJcIlxuICAgICAgc3R5bGU9XCJoZWlnaHQ6IDgwcHg7IHdpZHRoOiA4MHB4XCJcbiAgICAgIGNsYXNzPVwicmFkaXVzOFwiXG4gICAgICBzcGlubmVyLWNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgIHNwaW5uZXItc2l6ZT1cInNtXCJcbiAgICAgIHBsYWNlaG9sZGVyLXNyYz1cInBsYWNlaG9sZGVyLnBuZ1wiXG4gICAgLz5cbiAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgPHEtaXRlbS1zZWN0aW9uPlxuICAgIDxxLWl0ZW0tbGFiZWw+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9udDEzIHRleHQtd2VpZ2h0LWJvbGQgbm8tbWFyZ2luIGxpbmUtbm9ybWFsXCI+XG4gICAgICAgIHt7IGl0ZW1zLml0ZW1fbmFtZSB9fVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dC1ncmV5IGVsbGlwc2lzLTItbGluZXMgZm9udDEyIGxpbmUtbm9ybWFsXCI+XG4gICAgICAgIDxzcGFuIHYtaHRtbD1cIml0ZW1zLml0ZW1fZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgdi1pZj1cIml0ZW1zLnByaWNlXCIgY2xhc3M9XCJ0ZXh0LWdyZXktNyBmb250MTIgdGV4dC13ZWlnaHQtbWVkaXVtXCI+XG4gICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cInByaWNlIGluIGl0ZW1zLnByaWNlXCIgOmtleT1cInByaWNlXCI+XG4gICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJwcmljZS5kaXNjb3VudCA+IDBcIj5cbiAgICAgICAgICAgIHt7IHByaWNlLnNpemVfbmFtZSB9fVxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXN0cmlrZVwiPnt7IHByaWNlLnByZXR0eV9wcmljZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgIHt7IHByaWNlLnByZXR0eV9wcmljZV9hZnRlcl9kaXNjb3VudCB9fVxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgICAgIHt7IHByaWNlLnNpemVfbmFtZSB9fSB7eyBwcmljZS5wcmV0dHlfcHJpY2UgfX08L3RlbXBsYXRlXG4gICAgICAgICAgPjxzcGFuIGNsYXNzPVwicS1wci1zbVwiPjwvc3Bhbj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwicm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgPHEtY2hpcCBzaXplPVwic21cIiBjb2xvcj1cIm15Z3JleVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYXJrXCI+e3sgJHQoXCJGb29kXCIpIH19PC9zcGFuPlxuICAgICAgICA8L3EtY2hpcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvcS1pdGVtLWxhYmVsPlxuICA8L3EtaXRlbS1zZWN0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJTZWFyY2hMaXN0Rm9vZFwiLFxuICBwcm9wczogW1wiaXRlbXNcIiwgXCJtZXJjaGFudF9saXN0XCIsIFwibW9uZXlfY29uZmlnXCJdLFxuICBzZXR1cCgpIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9jcmVhdGVWTm9kZSIsIl90b0Rpc3BsYXlTdHJpbmciLCJfb3BlbkJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9GcmFnbWVudCIsIl9yZW5kZXJMaXN0IiwiX2NyZWF0ZVRleHRWTm9kZSJdLCJtYXBwaW5ncyI6Ijs7OztBQTZDQSxNQUFLLFlBQVU7QUFBQSxFQUNiLE1BQU07QUFBQSxFQUNOLE9BQU8sQ0FBQyxTQUFTLGlCQUFpQixjQUFjO0FBQUEsRUFDaEQsUUFBUTtBQUNOLFdBQU87RUFDUjtBQUNIO0FBbkNXLE1BQUEsYUFBQSxFQUFBLE9BQU0sZ0RBQStDO0FBR3JELE1BQUEsYUFBQSxFQUFBLE9BQU0sZ0RBQStDOzs7O0VBR2xDLE9BQU07O0FBSWxCLE1BQUEsYUFBQSxFQUFBLE9BQU0sY0FBYTttQkFLMUJBLGdDQUE2QixRQUFBLEVBQXZCLE9BQU0sYUFBUyxNQUFBLEVBQUE7QUFJckIsTUFBQSxhQUFBLEVBQUEsT0FBTSxtQ0FBa0M7QUFFbkMsTUFBQSxhQUFBLEVBQUEsT0FBTSxZQUFXOzs7SUFuQy9CQyxZQVdpQixjQUFBLEVBQUEsUUFBQSxHQUFBLEdBWEs7QUFBQSx1QkFDcEIsTUFTRTtBQUFBLFFBVEZBLFlBU0UsTUFBQTtBQUFBLFVBUkMsS0FBSyxPQUFLLE1BQUM7QUFBQSxVQUNaLE1BQUE7QUFBQSxVQUNBLEtBQUk7QUFBQSxVQUNKLE9BQUEsRUFBaUMsVUFBQSxRQUFBLFNBQUEsT0FBQTtBQUFBLFVBQ2pDLE9BQU07QUFBQSxVQUNOLGlCQUFjO0FBQUEsVUFDZCxnQkFBYTtBQUFBLFVBQ2IsbUJBQWdCO0FBQUE7Ozs7SUFHcEJBLFlBMkJpQixjQUFBLE1BQUE7QUFBQSx1QkExQmYsTUF5QmU7QUFBQSxRQXpCZkEsWUF5QmUsWUFBQSxNQUFBO0FBQUEsMkJBeEJiLE1BRU07QUFBQSxZQUZORCxnQkFFTSxPQUZOLFlBQ0tFLGdCQUFBLE9BQUEsTUFBTSxTQUFTLEdBQUEsQ0FBQTtBQUFBLFlBRXBCRixnQkFFTSxPQUZOLFlBRU07QUFBQSxjQURKQSxnQkFBNkMsUUFBQTtBQUFBLGdCQUF2QyxXQUFRLE9BQUssTUFBQztBQUFBOztZQUVYLE9BQUEsTUFBTSxTQUFqQkcsYUFBQUMsbUJBV00sT0FYTixZQVdNO0FBQUEsZUFWSkQsVUFBQSxJQUFBLEdBQUFDLG1CQVNXQyxVQVRlLE1BQUFDLFdBQUEsT0FBQSxNQUFNLFFBQWYsVUFBSzt3RUFBdUIsU0FBSztBQUFBLGtCQUNoQyxNQUFNLFdBQVEsa0JBQTlCRixtQkFJV0MsVUFBQSxFQUFBLEtBQUEsRUFBQSxHQUFBO0FBQUEsb0RBSE4sTUFBTSxTQUFTLElBQUcsS0FDckIsQ0FBQTtBQUFBLG9CQUFBTCxnQkFBeUQsUUFBekQsWUFBNkJFLGdCQUFBLE1BQU0sWUFBWSxHQUFBLENBQUE7QUFBQSxvQ0FBVSxNQUN6REEsZ0JBQUcsTUFBTSwyQkFBMkIsR0FBQSxDQUFBO0FBQUEsMENBRXRDRSxtQkFFQ0MsVUFBQSxFQUFBLEtBQUEsRUFBQSxHQUFBO0FBQUEsb0JBRElFLGdCQUFBTCxnQkFBQSxNQUFNLFNBQVMsSUFBRyxNQUFJQSxnQkFBQSxNQUFNLFlBQVksR0FBQSxDQUFBO0FBQUE7a0JBQzVDO0FBQUE7OztZQUlMRixnQkFJTSxPQUpOLFlBSU07QUFBQSxjQUhKQyxZQUVTLE9BQUE7QUFBQSxnQkFGRCxNQUFLO0FBQUEsZ0JBQUssT0FBTTtBQUFBO2lDQUN0QixNQUErQztBQUFBLGtCQUEvQ0QsZ0JBQStDLFFBQS9DLFlBQStDRSxnQkFBcEIsS0FBRSxHQUFBLE1BQUEsQ0FBQSxHQUFBLENBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7In0=
