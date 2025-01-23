import { _ as _export_sfc, p as openBlock, q as createBlock, t as withCtx, f as createVNode, at as QIcon, aY as QInput, b2 as QSeparator, V as createElementBlock, X as renderList, F as Fragment, a6 as createTextVNode, aa as withDirectives, ab as Ripple, ac as QItem, ad as QItemSection, ae as QAvatar, U as createBaseVNode } from "./index.61ed5618.js";
import { Q as QTab } from "./QTab.8fcc65d0.js";
import { Q as QTabs } from "./QTabs.2f5e29cb.js";
import { Q as QItemLabel } from "./QItemLabel.a9365c5b.js";
import { Q as QImg } from "./QImg.6c27044c.js";
import { Q as QList } from "./QList.b69a7e5b.js";
import { a as QTabPanel, Q as QTabPanels } from "./QTabPanels.2a6730dc.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import "./QResizeObserver.d08dce3c.js";
import "./rtl.f3ed811c.js";
import "./use-panel.225d73f4.js";
import "./touch.96e0ae37.js";
import "./selection.50b4cb0c.js";
import "./use-render-cache.b9e045af.js";
const _sfc_main = {
  name: "QuickSearchResultsPage",
  data() {
    return {
      tab: "all"
    };
  }
};
const _hoisted_1 = /* @__PURE__ */ createTextVNode("Mexican");
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "font12 text-weight-medium q-mb-xs" }, "Chipotle Mexican Grill", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", { class: "font11 text-grey height-normal no-margin ellipsis-2-lines" }, "Chinese, american, italian \u2022 $$", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QPage, { padding: "" }, {
    default: withCtx(() => [
      createVNode(QInput, {
        modelValue: _ctx.q,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.q = $event),
        label: "Food, groceries, drinks etc",
        rounded: "",
        dense: "",
        outlined: "",
        color: "grey",
        "bg-color": "grey-1",
        borderless: "",
        class: "full-width font12 input-borderless q-mb-md"
      }, {
        prepend: withCtx(() => [
          createVNode(QIcon, { name: "search" })
        ]),
        _: 1
      }, 8, ["modelValue"]),
      createVNode(QTabs, {
        modelValue: $data.tab,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.tab = $event),
        dense: "",
        class: "text-grey",
        "active-color": "dark",
        "indicator-color": "dark",
        align: "justify",
        "narrow-indicator": ""
      }, {
        default: withCtx(() => [
          createVNode(QTab, {
            name: "all",
            label: "All",
            "no-caps": ""
          }),
          createVNode(QTab, {
            name: "restaurant",
            label: "Restaurants",
            "no-caps": ""
          }),
          createVNode(QTab, {
            name: "food",
            label: "Food",
            "no-caps": ""
          })
        ]),
        _: 1
      }, 8, ["modelValue"]),
      createVNode(QSeparator),
      createVNode(QTabPanels, {
        modelValue: $data.tab,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.tab = $event),
        animated: "",
        "transition-next": "fade",
        "transition-prev": "fade"
      }, {
        default: withCtx(() => [
          createVNode(QTabPanel, {
            name: "all",
            class: "q-pl-none q-pr-none"
          }, {
            default: withCtx(() => [
              createVNode(QList, {
                dense: "",
                class: ""
              }, {
                default: withCtx(() => [
                  createVNode(QItemLabel, { header: "" }, {
                    default: withCtx(() => [
                      _hoisted_1
                    ]),
                    _: 1
                  }),
                  (openBlock(), createElementBlock(Fragment, null, renderList(2, (i) => {
                    return openBlock(), createElementBlock(Fragment, { key: i }, [
                      withDirectives((openBlock(), createBlock(QItem, { clickable: "" }, {
                        default: withCtx(() => [
                          createVNode(QItemSection, { avatar: "" }, {
                            default: withCtx(() => [
                              createVNode(QAvatar, { square: "" }, {
                                default: withCtx(() => [
                                  createVNode(QImg, {
                                    src: "food1.png",
                                    fit: "contain",
                                    loading: "lazy"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(QItemSection, { class: "font12" }, {
                            default: withCtx(() => [
                              _hoisted_2,
                              _hoisted_3
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })), [
                        [Ripple]
                      ]),
                      createVNode(QSeparator, {
                        spaced: "",
                        inset: "item"
                      })
                    ], 64);
                  }), 64))
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(QTabPanel, { name: "restaurant" }),
          createVNode(QTabPanel, { name: "food" })
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]),
    _: 1
  });
}
var QuickSearchResultsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "QuickSearchResultsPage.vue"]]);
export { QuickSearchResultsPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVpY2tTZWFyY2hSZXN1bHRzUGFnZS45N2MzMjM2Mi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhZ2VzL1NlYXJjaC9RdWlja1NlYXJjaFJlc3VsdHNQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLXBhZ2UgcGFkZGluZz5cbiAgICAgPHEtaW5wdXRcbiAgICAgIHYtbW9kZWw9XCJxXCJcbiAgICAgIGxhYmVsPVwiRm9vZCwgZ3JvY2VyaWVzLCBkcmlua3MgZXRjXCJcbiAgICAgIHJvdW5kZWRcbiAgICAgIGRlbnNlXG4gICAgICBvdXRsaW5lZFxuICAgICAgY29sb3I9XCJncmV5XCJcbiAgICAgIGJnLWNvbG9yPVwiZ3JleS0xXCJcbiAgICAgIGJvcmRlcmxlc3NcbiAgICAgIGNsYXNzPVwiZnVsbC13aWR0aCBmb250MTIgaW5wdXQtYm9yZGVybGVzcyBxLW1iLW1kXCJcbiAgICAgID5cbiAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6cHJlcGVuZD5cbiAgICAgICAgICA8cS1pY29uIG5hbWU9XCJzZWFyY2hcIiAvPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L3EtaW5wdXQ+XG5cbiAgICAgPHEtdGFic1xuICAgICAgdi1tb2RlbD1cInRhYlwiXG4gICAgICBkZW5zZVxuICAgICAgY2xhc3M9XCJ0ZXh0LWdyZXlcIlxuICAgICAgYWN0aXZlLWNvbG9yPVwiZGFya1wiXG4gICAgICBpbmRpY2F0b3ItY29sb3I9XCJkYXJrXCJcbiAgICAgIGFsaWduPVwianVzdGlmeVwiXG4gICAgICBuYXJyb3ctaW5kaWNhdG9yXG4gICAgPlxuICAgICAgPHEtdGFiIG5hbWU9XCJhbGxcIiBsYWJlbD1cIkFsbFwiIG5vLWNhcHMgLz5cbiAgICAgIDxxLXRhYiBuYW1lPVwicmVzdGF1cmFudFwiIGxhYmVsPVwiUmVzdGF1cmFudHNcIiBuby1jYXBzIC8+XG4gICAgICA8cS10YWIgbmFtZT1cImZvb2RcIiBsYWJlbD1cIkZvb2RcIiBuby1jYXBzIC8+XG4gICAgPC9xLXRhYnM+XG4gICAgIDxxLXNlcGFyYXRvciAvPlxuXG4gICAgIDxxLXRhYi1wYW5lbHMgdi1tb2RlbD1cInRhYlwiIGFuaW1hdGVkIHRyYW5zaXRpb24tbmV4dD1cImZhZGVcIiB0cmFuc2l0aW9uLXByZXY9XCJmYWRlXCI+XG4gICAgICAgPHEtdGFiLXBhbmVsIG5hbWU9XCJhbGxcIiBjbGFzcz1cInEtcGwtbm9uZSBxLXByLW5vbmVcIj5cbiAgICAgICAgICA8cS1saXN0IGRlbnNlIGNsYXNzPVwiXCI+XG4gICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGhlYWRlcj5NZXhpY2FuPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJpIGluIDJcIiA6a2V5PVwiaVwiID5cbiAgICAgICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlIHYtcmlwcGxlPlxuICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyID5cbiAgICAgICAgICAgICAgICA8cS1hdmF0YXIgc3F1YXJlPlxuICAgICAgICAgICAgICAgICAgIDxxLWltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9XCJmb29kMS5wbmdcIlxuICAgICAgICAgICAgICAgICAgICBmaXQ9XCJjb250YWluXCJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3EtYXZhdGFyPlxuICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gY2xhc3M9XCJmb250MTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udDEyIHRleHQtd2VpZ2h0LW1lZGl1bSBxLW1iLXhzXCI+Q2hpcG90bGUgTWV4aWNhbiBHcmlsbDwvZGl2PlxuICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZvbnQxMSB0ZXh0LWdyZXkgaGVpZ2h0LW5vcm1hbCBuby1tYXJnaW4gZWxsaXBzaXMtMi1saW5lc1wiPkNoaW5lc2UsIGFtZXJpY2FuLCBpdGFsaWFuICZidWxsOyAkJDwvcD5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgPHEtc2VwYXJhdG9yIHNwYWNlZCBpbnNldD1cIml0ZW1cIiAvPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgIDwvcS1saXN0PlxuICAgICAgIDwvcS10YWItcGFuZWw+XG4gICAgICAgPHEtdGFiLXBhbmVsIG5hbWU9XCJyZXN0YXVyYW50XCI+XG5cbiAgICAgICA8L3EtdGFiLXBhbmVsPlxuICAgICAgIDxxLXRhYi1wYW5lbCBuYW1lPVwiZm9vZFwiPlxuXG4gICAgICAgPC9xLXRhYi1wYW5lbD5cbiAgICAgPC9xLXRhYi1wYW5lbHM+XG5cbiAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnUXVpY2tTZWFyY2hSZXN1bHRzUGFnZScsXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0YWI6ICdhbGwnXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX2NyZWF0ZUJsb2NrIiwiX2NyZWF0ZVZOb2RlIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9GcmFnbWVudCIsIl9yZW5kZXJMaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQXNFQSxNQUFLLFlBQVU7QUFBQSxFQUNiLE1BQU07QUFBQSxFQUNOLE9BQVE7QUFDTixXQUFPO0FBQUEsTUFDTCxLQUFLO0FBQUEsSUFDUDtBQUFBLEVBQ0Y7QUFDRjttREF6Q2lDLFNBQU87QUFheEIsTUFBQSxhQUFBQSxnQ0FBMkUsT0FBdEUsRUFBQSxPQUFNLHVDQUFvQywwQkFBc0IsRUFBQTtBQUNwRSxNQUFBLGFBQUFBLGdDQUE2RyxLQUEx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
