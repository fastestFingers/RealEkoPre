import { Q as QImg } from "./QImg.6c27044c.js";
import { _ as _export_sfc, p as openBlock, V as createElementBlock, f as createVNode, U as createBaseVNode, Z as toDisplayString, Y as QBtn } from "./index.61ed5618.js";
const _sfc_main = {
  name: "NoResults",
  props: ["message", "description"],
  setup() {
    return {};
  }
};
const _hoisted_1 = { class: "full-width text-center" };
const _hoisted_2 = { class: "text-h5 text-weight-bold" };
const _hoisted_3 = { class: "text-grey font12" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(QImg, {
      src: "cuttery.png",
      fit: "fill",
      "spinner-color": "primary",
      style: { "height": "160px", "max-width": "150px" }
    }),
    createBaseVNode("div", _hoisted_2, toDisplayString(_ctx.$t("No Results")), 1),
    createBaseVNode("p", _hoisted_3, toDisplayString(_ctx.$t("We're sorry. We were not able to find a match with your filters.")), 1),
    createVNode(QBtn, {
      label: _ctx.$t("Filter again"),
      unelevated: "",
      "no-caps": "",
      color: _ctx.$q.dark.mode ? "grey600" : "mygrey",
      "text-color": _ctx.$q.dark.mode ? "grey300" : "dark",
      class: "radius8 text-weight-medium",
      onClick: _cache[0] || (_cache[0] = ($event) => this.$emit("filterAgain"))
    }, null, 8, ["label", "color", "text-color"])
  ]);
}
var NoResults = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "NoResults.vue"]]);
export { NoResults as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm9SZXN1bHRzLmNkYTQyODJhLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Ob1Jlc3VsdHMudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImZ1bGwtd2lkdGggdGV4dC1jZW50ZXJcIj5cbiAgICA8cS1pbWdcbiAgICAgIHNyYz1cImN1dHRlcnkucG5nXCJcbiAgICAgIGZpdD1cImZpbGxcIlxuICAgICAgc3Bpbm5lci1jb2xvcj1cInByaW1hcnlcIlxuICAgICAgc3R5bGU9XCJoZWlnaHQ6IDE2MHB4OyBtYXgtd2lkdGg6IDE1MHB4XCJcbiAgICAvPlxuICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg1IHRleHQtd2VpZ2h0LWJvbGRcIj57eyAkdChcIk5vIFJlc3VsdHNcIikgfX08L2Rpdj5cbiAgICA8cCBjbGFzcz1cInRleHQtZ3JleSBmb250MTJcIj5cbiAgICAgIHt7XG4gICAgICAgICR0KFwiV2UncmUgc29ycnkuIFdlIHdlcmUgbm90IGFibGUgdG8gZmluZCBhIG1hdGNoIHdpdGggeW91ciBmaWx0ZXJzLlwiKVxuICAgICAgfX1cbiAgICA8L3A+XG4gICAgPHEtYnRuXG4gICAgICA6bGFiZWw9XCIkdCgnRmlsdGVyIGFnYWluJylcIlxuICAgICAgdW5lbGV2YXRlZFxuICAgICAgbm8tY2Fwc1xuICAgICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXk2MDAnIDogJ215Z3JleSdcIlxuICAgICAgOnRleHQtY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTMwMCcgOiAnZGFyaydcIlxuICAgICAgY2xhc3M9XCJyYWRpdXM4IHRleHQtd2VpZ2h0LW1lZGl1bVwiXG4gICAgICBAY2xpY2s9XCJ0aGlzLiRlbWl0KCdmaWx0ZXJBZ2FpbicpXCJcbiAgICAvPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiTm9SZXN1bHRzXCIsXG4gIHByb3BzOiBbXCJtZXNzYWdlXCIsIFwiZGVzY3JpcHRpb25cIl0sXG4gIHNldHVwKCkge1xuICAgIHJldHVybiB7fTtcbiAgfSxcbn07XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfb3BlbkJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9jcmVhdGVWTm9kZSIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIl0sIm1hcHBpbmdzIjoiOztBQTJCQSxNQUFLLFlBQVU7QUFBQSxFQUNiLE1BQU07QUFBQSxFQUNOLE9BQU8sQ0FBQyxXQUFXLGFBQWE7QUFBQSxFQUNoQyxRQUFRO0FBQ04sV0FBTztFQUNSO0FBQ0g7QUFoQ08sTUFBQSxhQUFBLEVBQUEsT0FBTSx5QkFBd0I7QUFPNUIsTUFBQSxhQUFBLEVBQUEsT0FBTSwyQkFBMEI7QUFDbEMsTUFBQSxhQUFBLEVBQUEsT0FBTSxtQkFBa0I7O0FBUjdCLFNBQUFBLFVBQUEsR0FBQUMsbUJBc0JNLE9BdEJOLFlBc0JNO0FBQUEsSUFyQkpDLFlBS0UsTUFBQTtBQUFBLE1BSkEsS0FBSTtBQUFBLE1BQ0osS0FBSTtBQUFBLE1BQ0osaUJBQWM7QUFBQSxNQUNkLE9BQUEsRUFBdUMsVUFBQSxTQUFBLGFBQUEsUUFBQTtBQUFBO0lBRXpDQyxnQkFBa0UsT0FBbEUsWUFBa0VDLGdCQUF6QixLQUFFLEdBQUEsWUFBQSxDQUFBLEdBQUEsQ0FBQTtBQUFBLElBQzNDRCxnQkFJSSxLQUpKLFlBSUlDLGdCQUZBLEtBQUUsR0FBQSxrRUFBQSxDQUFBLEdBQUEsQ0FBQTtBQUFBLElBR05GLFlBUUUsTUFBQTtBQUFBLE1BUEMsT0FBTyxLQUFFLEdBQUEsY0FBQTtBQUFBLE1BQ1YsWUFBQTtBQUFBLE1BQ0EsV0FBQTtBQUFBLE1BQ0MsT0FBTyxLQUFBLEdBQUcsS0FBSyxPQUFJLFlBQUE7QUFBQSxNQUNuQixjQUFZLEtBQUEsR0FBRyxLQUFLLE9BQUksWUFBQTtBQUFBLE1BQ3pCLE9BQU07QUFBQSxNQUNMLG9EQUFZLE1BQUssYUFBQTtBQUFBOzs7OzsifQ==
