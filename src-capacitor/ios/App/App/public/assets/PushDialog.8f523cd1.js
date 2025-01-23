import { _ as _export_sfc, bU as usePushStore, p as openBlock, q as createBlock, t as withCtx, f as createVNode, a9 as QCardSection, U as createBaseVNode, Z as toDisplayString, Y as QBtn, a8 as QCard, aB as QDialog } from "./index.61ed5618.js";
import { Q as QSpace } from "./QSpace.f164c087.js";
const _sfc_main = {
  name: "PushDialog",
  setup() {
    const PushStore = usePushStore();
    return { PushStore };
  }
};
const _hoisted_1 = { class: "row items-center fit" };
const _hoisted_2 = { class: "col" };
const _hoisted_3 = { class: "text-weight-bold" };
const _hoisted_4 = { class: "col-2 text-right" };
const _hoisted_5 = { class: "font11 text-weight-medium" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QDialog, {
    modelValue: $setup.PushStore.push_modal,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.PushStore.push_modal = $event),
    position: "top",
    seamless: true
  }, {
    default: withCtx(() => [
      createVNode(QCard, { style: { "width": "75% !important", "margin-top": "20px" } }, {
        default: withCtx(() => [
          createVNode(QCardSection, { class: "q-pa-sm" }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                createBaseVNode("div", _hoisted_2, [
                  createBaseVNode("div", _hoisted_3, toDisplayString($setup.PushStore.push_message.title), 1)
                ]),
                createBaseVNode("div", _hoisted_4, [
                  createVNode(QBtn, {
                    onClick: _cache[0] || (_cache[0] = ($event) => $setup.PushStore.push_modal = false),
                    round: "",
                    color: "grey",
                    icon: "close",
                    size: "7px",
                    unelevated: ""
                  })
                ])
              ]),
              createVNode(QSpace, { class: "q-pa-sm" }),
              createBaseVNode("div", _hoisted_5, toDisplayString($setup.PushStore.push_message.body), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["modelValue"]);
}
var PushDialog = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "PushDialog.vue"]]);
export { PushDialog as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHVzaERpYWxvZy44ZjUyM2NkMS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvUHVzaERpYWxvZy52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8cS1kaWFsb2cgdi1tb2RlbD1cIlB1c2hTdG9yZS5wdXNoX21vZGFsXCIgcG9zaXRpb249XCJ0b3BcIiA6c2VhbWxlc3M9XCJ0cnVlXCI+XG4gICAgPHEtY2FyZCBzdHlsZT1cIndpZHRoOiA3NSUgIWltcG9ydGFudDsgbWFyZ2luLXRvcDogMjBweFwiPlxuICAgICAgPHEtY2FyZC1zZWN0aW9uIGNsYXNzPVwicS1wYS1zbVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGl0ZW1zLWNlbnRlciBmaXRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC13ZWlnaHQtYm9sZFwiPlxuICAgICAgICAgICAgICB7eyBQdXNoU3RvcmUucHVzaF9tZXNzYWdlLnRpdGxlIH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTIgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgIEBjbGljaz1cIlB1c2hTdG9yZS5wdXNoX21vZGFsID0gZmFsc2VcIlxuICAgICAgICAgICAgICByb3VuZFxuICAgICAgICAgICAgICBjb2xvcj1cImdyZXlcIlxuICAgICAgICAgICAgICBpY29uPVwiY2xvc2VcIlxuICAgICAgICAgICAgICBzaXplPVwiN3B4XCJcbiAgICAgICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxxLXNwYWNlIGNsYXNzPVwicS1wYS1zbVwiPjwvcS1zcGFjZT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvbnQxMSB0ZXh0LXdlaWdodC1tZWRpdW1cIj5cbiAgICAgICAgICB7eyBQdXNoU3RvcmUucHVzaF9tZXNzYWdlLmJvZHkgfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgIDwvcS1jYXJkPlxuICA8L3EtZGlhbG9nPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IHVzZVB1c2hTdG9yZSB9IGZyb20gXCJzdG9yZXMvUHVzaFN0b3JlXCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiUHVzaERpYWxvZ1wiLFxuICBzZXR1cCgpIHtcbiAgICBjb25zdCBQdXNoU3RvcmUgPSB1c2VQdXNoU3RvcmUoKTtcbiAgICByZXR1cm4geyBQdXNoU3RvcmUgfTtcbiAgfSxcbn07XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfY3JlYXRlQmxvY2siLCJfY3JlYXRlVk5vZGUiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7QUFnQ0EsTUFBSyxZQUFVO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixRQUFRO0FBQ04sVUFBTSxZQUFZO0FBQ2xCLFdBQU8sRUFBRTtFQUNWO0FBQ0g7QUFsQ2EsTUFBQSxhQUFBLEVBQUEsT0FBTSx1QkFBc0I7QUFDMUIsTUFBQSxhQUFBLEVBQUEsT0FBTSxNQUFLO0FBQ1QsTUFBQSxhQUFBLEVBQUEsT0FBTSxtQkFBa0I7QUFJMUIsTUFBQSxhQUFBLEVBQUEsT0FBTSxtQkFBa0I7QUFZMUIsTUFBQSxhQUFBLEVBQUEsT0FBTSw0QkFBMkI7O3NCQXJCNUNBLFlBMEJXLFNBQUE7QUFBQSxJQTFCUSxZQUFBLE9BQUEsVUFBVTtBQUFBLElBQVYsdUJBQUEsT0FBQSxPQUFBLE9BQUEsS0FBQSxZQUFBLE9BQUEsVUFBVSxhQUFVO0FBQUEsSUFBRSxVQUFTO0FBQUEsSUFBTyxVQUFVO0FBQUE7cUJBQ2pFLE1Bd0JTO0FBQUEsTUF4QlRDLFlBd0JTLE9BQUEsRUFBQSxPQUFBLEVBQUEsU0F4QjhDLGtCQUFBLGNBQUEsT0FBQSxLQUFBO0FBQUEseUJBQ3JELE1Bc0JpQjtBQUFBLFVBdEJqQkEsWUFzQmlCLGNBQUEsRUFBQSxPQUFBLFVBdEJJLEdBQUM7QUFBQSw2QkFDcEIsTUFnQk07QUFBQSxjQWhCTkMsZ0JBZ0JNLE9BaEJOLFlBZ0JNO0FBQUEsZ0JBZkpBLGdCQUlNLE9BSk4sWUFJTTtBQUFBLGtCQUhKQSxnQkFFTSxPQUZOLFlBRU1DLGdCQURELGlCQUFVLGFBQWEsS0FBSyxHQUFBLENBQUE7QUFBQTtnQkFHbkNELGdCQVNNLE9BVE4sWUFTTTtBQUFBLGtCQVJKRCxZQU9FLE1BQUE7QUFBQSxvQkFOQyxTQUFLLE9BQUEsT0FBQSxPQUFBLEtBQUEsWUFBRSxPQUFTLFVBQUMsYUFBVTtBQUFBLG9CQUM1QixPQUFBO0FBQUEsb0JBQ0EsT0FBTTtBQUFBLG9CQUNOLE1BQUs7QUFBQSxvQkFDTCxNQUFLO0FBQUEsb0JBQ0wsWUFBQTtBQUFBOzs7Y0FJTkEsWUFBbUMsUUFBQSxFQUFBLE9BQUEsVUFBckIsQ0FBQTtBQUFBLGNBQ2RDLGdCQUVNLE9BRk4sWUFFTUMsZ0JBREQsaUJBQVUsYUFBYSxJQUFJLEdBQUEsQ0FBQTtBQUFBOzs7Ozs7Ozs7Ozs7In0=
