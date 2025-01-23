import { Q as QImg } from "./QImg.6c27044c.js";
import { _ as _export_sfc, p as openBlock, q as createBlock, t as withCtx, f as createVNode, U as createBaseVNode, aY as QInput, bE as QCardActions, Y as QBtn, a8 as QCard } from "./index.61ed5618.js";
import { Q as QSpace } from "./QSpace.f164c087.js";
import { Q as QFooter } from "./QFooter.571ac042.js";
import "./QResizeObserver.d08dce3c.js";
const _sfc_main = {
  name: "VerificationPage",
  data() {
    return {
      code1: 1,
      code2: 7,
      code3: 3,
      code4: 6
    };
  }
};
const _hoisted_1 = { class: "text-center" };
const _hoisted_2 = { class: "w-75 margin-auto" };
const _hoisted_3 = { class: "row q-col-gutter-md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QFooter, { class: "transparent text-dark" }, {
    default: withCtx(() => [
      createVNode(QCard, { flat: "" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode(QImg, {
              src: "logo.jpg",
              style: { "height": "35", "max-width": "100px" },
              lazy: "",
              class: "q-mb-xl"
            }),
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("div", _hoisted_3, [
                createVNode(QInput, {
                  modelValue: $data.code1,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.code1 = $event),
                  mask: "#",
                  "input-class": "text-center text-weight-bold",
                  class: "col"
                }, null, 8, ["modelValue"]),
                createVNode(QInput, {
                  modelValue: $data.code2,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.code2 = $event),
                  mask: "#",
                  "input-class": "text-center text-weight-bold",
                  class: "col"
                }, null, 8, ["modelValue"]),
                createVNode(QInput, {
                  modelValue: $data.code3,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.code3 = $event),
                  mask: "#",
                  "input-class": "text-center text-weight-bold",
                  class: "col"
                }, null, 8, ["modelValue"]),
                createVNode(QInput, {
                  modelValue: $data.code4,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.code4 = $event),
                  mask: "#",
                  "input-class": "text-center text-weight-bold",
                  class: "col"
                }, null, 8, ["modelValue"])
              ]),
              createVNode(QSpace, { class: "q-pa-md" }),
              createVNode(QCardActions, {
                vertical: "",
                align: "center"
              }, {
                default: withCtx(() => [
                  createVNode(QBtn, {
                    label: "Verify Now",
                    unelevated: "",
                    color: "primary",
                    "text-color": "dark",
                    class: "full-width text-weight-bold"
                  })
                ]),
                _: 1
              }),
              createVNode(QSpace, { class: "q-pa-lg" }),
              createVNode(QSpace, { class: "q-pa-lg" }),
              createVNode(QSpace, { class: "q-pa-md" })
            ])
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
var VerificationPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "VerificationPage.vue"]]);
export { VerificationPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmVyaWZpY2F0aW9uUGFnZS5iOThhZDdmNi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhZ2VzL1VzZXIvVmVyaWZpY2F0aW9uUGFnZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXG4gIDxxLWZvb3RlciBjbGFzcz1cInRyYW5zcGFyZW50IHRleHQtZGFya1wiICA+XG5cbiAgICA8cS1jYXJkIGZsYXQ+XG4gICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCI+XG5cbiAgICAgIDxxLWltZ1xuICAgICAgICBzcmM9XCJsb2dvLmpwZ1wiXG4gICAgICAgIHN0eWxlPVwiaGVpZ2h0OiAzNTsgbWF4LXdpZHRoOiAxMDBweFwiXG4gICAgICAgIGxhenlcbiAgICAgICAgY2xhc3M9XCJxLW1iLXhsXCJcbiAgICAgIC8+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJ3LTc1IG1hcmdpbi1hdXRvXCI+XG5cbiAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcS1jb2wtZ3V0dGVyLW1kXCI+XG4gICAgICAgICAgIDxxLWlucHV0IHYtbW9kZWw9XCJjb2RlMVwiIG1hc2s9XCIjXCIgaW5wdXQtY2xhc3M9XCJ0ZXh0LWNlbnRlciB0ZXh0LXdlaWdodC1ib2xkXCIgY2xhc3M9XCJjb2xcIiAvPlxuICAgICAgICAgICA8cS1pbnB1dCB2LW1vZGVsPVwiY29kZTJcIiBtYXNrPVwiI1wiIGlucHV0LWNsYXNzPVwidGV4dC1jZW50ZXIgdGV4dC13ZWlnaHQtYm9sZFwiIGNsYXNzPVwiY29sXCIgLz5cbiAgICAgICAgICAgPHEtaW5wdXQgdi1tb2RlbD1cImNvZGUzXCIgbWFzaz1cIiNcIiBpbnB1dC1jbGFzcz1cInRleHQtY2VudGVyIHRleHQtd2VpZ2h0LWJvbGRcIiBjbGFzcz1cImNvbFwiLz5cbiAgICAgICAgICAgPHEtaW5wdXQgdi1tb2RlbD1cImNvZGU0XCIgbWFzaz1cIiNcIiBpbnB1dC1jbGFzcz1cInRleHQtY2VudGVyIHRleHQtd2VpZ2h0LWJvbGRcIiBjbGFzcz1cImNvbFwiIC8+XG4gICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgPHEtc3BhY2UgY2xhc3M9XCJxLXBhLW1kXCI+PC9xLXNwYWNlPlxuXG4gICAgICAgICA8cS1jYXJkLWFjdGlvbnMgdmVydGljYWwgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICA8cS1idG4gbGFiZWw9XCJWZXJpZnkgTm93XCIgdW5lbGV2YXRlZCBjb2xvcj1cInByaW1hcnlcIiB0ZXh0LWNvbG9yPVwiZGFya1wiIGNsYXNzPVwiZnVsbC13aWR0aCB0ZXh0LXdlaWdodC1ib2xkXCIgIC8+XG4gICAgICAgIDwvcS1jYXJkLWFjdGlvbnM+XG5cbiAgICAgICAgPHEtc3BhY2UgY2xhc3M9XCJxLXBhLWxnXCI+PC9xLXNwYWNlPlxuICAgICAgICA8cS1zcGFjZSBjbGFzcz1cInEtcGEtbGdcIj48L3Etc3BhY2U+XG4gICAgICAgIDxxLXNwYWNlIGNsYXNzPVwicS1wYS1tZFwiPjwvcS1zcGFjZT5cblxuICAgICAgPC9kaXY+XG4gICAgICA8IS0tIHcgNzUgLS0+XG5cbiAgICA8L2Rpdj5cbiAgICA8IS0tIGNlbnRlciAtLT5cbiAgICA8L3EtY2FyZD5cblxuICA8L3EtZm9vdGVyPlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnVmVyaWZpY2F0aW9uUGFnZScsXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb2RlMTogMSxcbiAgICAgIGNvZGUyOiA3LFxuICAgICAgY29kZTM6IDMsXG4gICAgICBjb2RlNDogNlxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX2NyZWF0ZUJsb2NrIiwiX2NyZWF0ZVZOb2RlIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUE2Q0EsTUFBSyxZQUFVO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixPQUFRO0FBQ04sV0FBTztBQUFBLE1BQ0wsT0FBTztBQUFBLE1BQ1AsT0FBTztBQUFBLE1BQ1AsT0FBTztBQUFBLE1BQ1AsT0FBTztBQUFBLElBQ1Q7QUFBQSxFQUNGO0FBQ0Y7QUFsRFMsTUFBQSxhQUFBLEVBQUEsT0FBTSxjQUFhO0FBU2pCLE1BQUEsYUFBQSxFQUFBLE9BQU0sbUJBQWtCO0FBRXJCLE1BQUEsYUFBQSxFQUFBLE9BQU0sc0JBQXFCOztzQkFkdkNBLFlBc0NXLFNBQUEsRUFBQSxPQUFBLDJCQXRDNEI7QUFBQSxxQkFFckMsTUFrQ1M7QUFBQSxNQWxDVEMsWUFrQ1MsT0FBQSxFQUFBLE1BQUEsR0FBQSxHQWxDRDtBQUFBLHlCQUNSLE1BK0JNO0FBQUEsVUEvQk5DLGdCQStCTSxPQS9CTixZQStCTTtBQUFBLFlBN0JKRCxZQUtFLE1BQUE7QUFBQSxjQUpBLEtBQUk7QUFBQSxjQUNKLE9BQUEsRUFBb0MsVUFBQSxNQUFBLGFBQUEsUUFBQTtBQUFBLGNBQ3BDLE1BQUE7QUFBQSxjQUNBLE9BQU07QUFBQTtZQUdSQyxnQkFtQk0sT0FuQk4sWUFtQk07QUFBQSxjQWpCSEEsZ0JBS00sT0FMTixZQUtNO0FBQUEsZ0JBSkpELFlBQTJGLFFBQUE7QUFBQSw4QkFBekUsTUFBSztBQUFBLCtFQUFMLE1BQUssUUFBQTtBQUFBLGtCQUFFLE1BQUs7QUFBQSxrQkFBSSxlQUFZO0FBQUEsa0JBQStCLE9BQU07QUFBQTtnQkFDbkZBLFlBQTJGLFFBQUE7QUFBQSw4QkFBekUsTUFBSztBQUFBLCtFQUFMLE1BQUssUUFBQTtBQUFBLGtCQUFFLE1BQUs7QUFBQSxrQkFBSSxlQUFZO0FBQUEsa0JBQStCLE9BQU07QUFBQTtnQkFDbkZBLFlBQTBGLFFBQUE7QUFBQSw4QkFBeEUsTUFBSztBQUFBLCtFQUFMLE1BQUssUUFBQTtBQUFBLGtCQUFFLE1BQUs7QUFBQSxrQkFBSSxlQUFZO0FBQUEsa0JBQStCLE9BQU07QUFBQTtnQkFDbkZBLFlBQTJGLFFBQUE7QUFBQSw4QkFBekUsTUFBSztBQUFBLCtFQUFMLE1BQUssUUFBQTtBQUFBLGtCQUFFLE1BQUs7QUFBQSxrQkFBSSxlQUFZO0FBQUEsa0JBQStCLE9BQU07QUFBQTs7Y0FHckZBLFlBQW1DLFFBQUEsRUFBQSxPQUFBLFVBQXJCLENBQUE7QUFBQSxjQUVkQSxZQUVnQixjQUFBO0FBQUEsZ0JBRkEsVUFBQTtBQUFBLGdCQUFTLE9BQU07QUFBQTtpQ0FDOUIsTUFBOEc7QUFBQSxrQkFBOUdBLFlBQThHLE1BQUE7QUFBQSxvQkFBdkcsT0FBTTtBQUFBLG9CQUFhLFlBQUE7QUFBQSxvQkFBVyxPQUFNO0FBQUEsb0JBQVUsY0FBVztBQUFBLG9CQUFPLE9BQU07QUFBQTs7OztjQUcvRUEsWUFBbUMsUUFBQSxFQUFBLE9BQUEsVUFBckIsQ0FBQTtBQUFBLGNBQ2RBLFlBQW1DLFFBQUEsRUFBQSxPQUFBLFVBQXJCLENBQUE7QUFBQSxjQUNkQSxZQUFtQyxRQUFBLEVBQUEsT0FBQSxVQUFyQixDQUFBO0FBQUE7Ozs7Ozs7Ozs7OyJ9
