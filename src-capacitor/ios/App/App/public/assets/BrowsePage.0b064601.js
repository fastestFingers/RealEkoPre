import { _ as _export_sfc, m as APIinterface, p as openBlock, q as createBlock, t as withCtx, f as createVNode, at as QIcon, aY as QInput, U as createBaseVNode, Z as toDisplayString } from "./index.61ed5618.js";
import { Q as QSpace } from "./QSpace.f164c087.js";
import { Q as QBtnToggle } from "./QBtnToggle.6ffa195b.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import "./QBtnGroup.abc2d1c7.js";
const _sfc_main = {
  name: "BrowsePage",
  components: {},
  mounted() {
  },
  data() {
    return {
      featured: [],
      recently_search: "",
      cuisine: ""
    };
  },
  methods: {
    getFeaturedList() {
      APIinterface.getFeaturedList().then((data) => {
        this.featured = data.details.data;
      }).catch((error) => {
      }).then((data) => {
      });
    }
  }
};
const _hoisted_1 = { class: "font13 text-weight-bold text-h5" };
const _hoisted_2 = { class: "font13 text-weight-bold text-h5" };
const _hoisted_3 = { class: "font13 text-weight-bold text-h5" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QPage, {
    padding: "",
    class: "q-pl-md q-pr-md"
  }, {
    default: withCtx(() => [
      createVNode(QInput, {
        modelValue: _ctx.q,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.q = $event),
        label: "Search food and restaurants",
        outlined: "",
        "lazy-rules": "",
        "bg-color": "input",
        "label-color": "grey",
        borderless: "",
        readonly: "",
        class: "input-borderless"
      }, {
        prepend: withCtx(() => [
          createVNode(QIcon, {
            name: "eva-search-outline",
            size: "sm"
          })
        ]),
        _: 1
      }, 8, ["modelValue"]),
      createVNode(QSpace, { class: "q-pa-xs" }),
      createBaseVNode("div", _hoisted_1, toDisplayString(_ctx.$t("Recently Search")), 1),
      createVNode(QBtnToggle, {
        modelValue: $data.recently_search,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.recently_search = $event),
        "toggle-color": "secondary",
        color: "mygrey",
        "text-color": "dark",
        "no-caps": "",
        "no-wrap": "",
        unelevated: "",
        class: "rounded-group2 text-weight-bold line-1",
        options: [
          { label: "One", value: "one" },
          { label: "Two", value: "two" },
          { label: "Three", value: "three" }
        ]
      }, null, 8, ["modelValue"]),
      createBaseVNode("div", _hoisted_2, toDisplayString(_ctx.$t("Popular Cuisines")), 1),
      createVNode(QBtnToggle, {
        modelValue: $data.cuisine,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.cuisine = $event),
        "toggle-color": "secondary",
        color: "mygrey",
        "text-color": "dark",
        "no-caps": "",
        "no-wrap": "",
        unelevated: "",
        class: "rounded-group2 text-weight-bold line-1",
        options: [
          { label: "One", value: "one" },
          { label: "Two", value: "two" },
          { label: "Three", value: "three" }
        ]
      }, null, 8, ["modelValue"]),
      createBaseVNode("div", _hoisted_3, toDisplayString(_ctx.$t("Popular Items Near You")), 1)
    ]),
    _: 1
  });
}
var BrowsePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "BrowsePage.vue"]]);
export { BrowsePage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJvd3NlUGFnZS4wYjA2NDYwMS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhZ2VzL0hvbWUvQnJvd3NlUGFnZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8cS1wYWdlIHBhZGRpbmcgY2xhc3M9XCJxLXBsLW1kIHEtcHItbWRcIj5cbiAgICA8cS1pbnB1dFxuICAgICAgdi1tb2RlbD1cInFcIlxuICAgICAgbGFiZWw9XCJTZWFyY2ggZm9vZCBhbmQgcmVzdGF1cmFudHNcIlxuICAgICAgb3V0bGluZWRcbiAgICAgIGxhenktcnVsZXNcbiAgICAgIGJnLWNvbG9yPVwiaW5wdXRcIlxuICAgICAgbGFiZWwtY29sb3I9XCJncmV5XCJcbiAgICAgIGJvcmRlcmxlc3NcbiAgICAgIHJlYWRvbmx5XG4gICAgICBjbGFzcz1cImlucHV0LWJvcmRlcmxlc3NcIlxuICAgID5cbiAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6cHJlcGVuZD5cbiAgICAgICAgPHEtaWNvbiBuYW1lPVwiZXZhLXNlYXJjaC1vdXRsaW5lXCIgc2l6ZT1cInNtXCIgLz5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC9xLWlucHV0PlxuXG4gICAgPHEtc3BhY2UgY2xhc3M9XCJxLXBhLXhzXCI+PC9xLXNwYWNlPlxuXG4gICAgPGRpdiBjbGFzcz1cImZvbnQxMyB0ZXh0LXdlaWdodC1ib2xkIHRleHQtaDVcIj5cbiAgICAgIHt7ICR0KFwiUmVjZW50bHkgU2VhcmNoXCIpIH19XG4gICAgPC9kaXY+XG5cbiAgICA8cS1idG4tdG9nZ2xlXG4gICAgICB2LW1vZGVsPVwicmVjZW50bHlfc2VhcmNoXCJcbiAgICAgIHRvZ2dsZS1jb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICBjb2xvcj1cIm15Z3JleVwiXG4gICAgICB0ZXh0LWNvbG9yPVwiZGFya1wiXG4gICAgICBuby1jYXBzXG4gICAgICBuby13cmFwXG4gICAgICB1bmVsZXZhdGVkXG4gICAgICBjbGFzcz1cInJvdW5kZWQtZ3JvdXAyIHRleHQtd2VpZ2h0LWJvbGQgbGluZS0xXCJcbiAgICAgIDpvcHRpb25zPVwiW1xuICAgICAgICB7IGxhYmVsOiAnT25lJywgdmFsdWU6ICdvbmUnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdUd28nLCB2YWx1ZTogJ3R3bycgfSxcbiAgICAgICAgeyBsYWJlbDogJ1RocmVlJywgdmFsdWU6ICd0aHJlZScgfSxcbiAgICAgIF1cIlxuICAgIC8+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZm9udDEzIHRleHQtd2VpZ2h0LWJvbGQgdGV4dC1oNVwiPlxuICAgICAge3sgJHQoXCJQb3B1bGFyIEN1aXNpbmVzXCIpIH19XG4gICAgPC9kaXY+XG5cbiAgICA8cS1idG4tdG9nZ2xlXG4gICAgICB2LW1vZGVsPVwiY3Vpc2luZVwiXG4gICAgICB0b2dnbGUtY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgY29sb3I9XCJteWdyZXlcIlxuICAgICAgdGV4dC1jb2xvcj1cImRhcmtcIlxuICAgICAgbm8tY2Fwc1xuICAgICAgbm8td3JhcFxuICAgICAgdW5lbGV2YXRlZFxuICAgICAgY2xhc3M9XCJyb3VuZGVkLWdyb3VwMiB0ZXh0LXdlaWdodC1ib2xkIGxpbmUtMVwiXG4gICAgICA6b3B0aW9ucz1cIltcbiAgICAgICAgeyBsYWJlbDogJ09uZScsIHZhbHVlOiAnb25lJyB9LFxuICAgICAgICB7IGxhYmVsOiAnVHdvJywgdmFsdWU6ICd0d28nIH0sXG4gICAgICAgIHsgbGFiZWw6ICdUaHJlZScsIHZhbHVlOiAndGhyZWUnIH0sXG4gICAgICBdXCJcbiAgICAvPlxuXG4gICAgPGRpdiBjbGFzcz1cImZvbnQxMyB0ZXh0LXdlaWdodC1ib2xkIHRleHQtaDVcIj5cbiAgICAgIHt7ICR0KFwiUG9wdWxhciBJdGVtcyBOZWFyIFlvdVwiKSB9fVxuICAgIDwvZGl2PlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgQVBJaW50ZXJmYWNlIGZyb20gXCJzcmMvYXBpL0FQSWludGVyZmFjZVwiO1xuaW1wb3J0IHsgZGVmaW5lQXN5bmNDb21wb25lbnQgfSBmcm9tIFwidnVlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJCcm93c2VQYWdlXCIsXG4gIGNvbXBvbmVudHM6IHtcbiAgICAvLyBNZXJjaGFudENhcm91c2VsOiBkZWZpbmVBc3luY0NvbXBvbmVudCgoKSA9PlxuICAgIC8vICAgaW1wb3J0KFwiY29tcG9uZW50cy9NZXJjaGFudENhcm91c2VsLnZ1ZVwiKVxuICAgIC8vICksXG4gICAgLy8gQ3Vpc2luZUNhcm91c2VsOiBkZWZpbmVBc3luY0NvbXBvbmVudCgoKSA9PlxuICAgIC8vICAgaW1wb3J0KFwiY29tcG9uZW50cy9DdWlzaW5lQ2Fyb3VzZWwudnVlXCIpXG4gICAgLy8gKSxcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICAvL3RoaXMuZ2V0RmVhdHVyZWRMaXN0KCk7XG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZlYXR1cmVkOiBbXSxcbiAgICAgIHJlY2VudGx5X3NlYXJjaDogXCJcIixcbiAgICAgIGN1aXNpbmU6IFwiXCIsXG4gICAgICAvLyBmZWF0dXJlZDoge1xuICAgICAgLy8gICBuZXc6ICdOZXcgUmVzdGF1cmFudCcsXG4gICAgICAvLyAgIHBvcHVsYXI6ICdQb3B1bGFyJyxcbiAgICAgIC8vICAgYmVzdF9zZWxsZXI6ICdCZXN0IFNlbGxlcicsXG4gICAgICAvLyAgIHJlY29tbWVuZGVkOiAnUmVjb21tZW5kZWQnXG4gICAgICAvLyB9XG4gICAgfTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGdldEZlYXR1cmVkTGlzdCgpIHtcbiAgICAgIEFQSWludGVyZmFjZS5nZXRGZWF0dXJlZExpc3QoKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuZmVhdHVyZWQgPSBkYXRhLmRldGFpbHMuZGF0YTtcbiAgICAgICAgfSlcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHt9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge30pO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX2NyZWF0ZUJsb2NrIiwiX2NyZWF0ZVZOb2RlIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl90b0Rpc3BsYXlTdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7O0FBc0VBLE1BQUssWUFBVTtBQUFBLEVBQ2IsTUFBTTtBQUFBLEVBQ04sWUFBWSxDQU9YO0FBQUEsRUFDRCxVQUFVO0FBQUEsRUFFVDtBQUFBLEVBQ0QsT0FBTztBQUNMLFdBQU87QUFBQSxNQUNMLFVBQVUsQ0FBRTtBQUFBLE1BQ1osaUJBQWlCO0FBQUEsTUFDakIsU0FBUztBQUFBO0VBUVo7QUFBQSxFQUNELFNBQVM7QUFBQSxJQUNQLGtCQUFrQjtBQUNoQixtQkFBYSxnQkFBZ0IsRUFDMUIsS0FBSyxDQUFDLFNBQVM7QUFDZCxhQUFLLFdBQVcsS0FBSyxRQUFRO0FBQUEsT0FDOUIsRUFFQSxNQUFNLENBQUMsVUFBVTtBQUFBLE9BQUUsRUFDbkIsS0FBSyxDQUFDLFNBQVM7QUFBQSxNQUFBLENBQUU7QUFBQSxJQUNyQjtBQUFBLEVBQ0Y7QUFDSDtBQXZGUyxNQUFBLGFBQUEsRUFBQSxPQUFNLGtDQUFpQztBQW9CdkMsTUFBQSxhQUFBLEVBQUEsT0FBTSxrQ0FBaUM7QUFvQnZDLE1BQUEsYUFBQSxFQUFBLE9BQU0sa0NBQWlDOztzQkEzRDlDQSxZQThEUyxPQUFBO0FBQUEsSUE5REQsU0FBQTtBQUFBLElBQVEsT0FBTTtBQUFBO3FCQUNwQixNQWNVO0FBQUEsTUFkVkMsWUFjVSxRQUFBO0FBQUEsb0JBYkMsS0FBQztBQUFBLHFFQUFELEtBQUMsSUFBQTtBQUFBLFFBQ1YsT0FBTTtBQUFBLFFBQ04sVUFBQTtBQUFBLFFBQ0EsY0FBQTtBQUFBLFFBQ0EsWUFBUztBQUFBLFFBQ1QsZUFBWTtBQUFBLFFBQ1osWUFBQTtBQUFBLFFBQ0EsVUFBQTtBQUFBLFFBQ0EsT0FBTTtBQUFBO1FBRVcsaUJBQ2YsTUFBOEM7QUFBQSxVQUE5Q0EsWUFBOEMsT0FBQTtBQUFBLFlBQXRDLE1BQUs7QUFBQSxZQUFxQixNQUFLO0FBQUE7Ozs7TUFJM0NBLFlBQW1DLFFBQUEsRUFBQSxPQUFBLFVBQXJCLENBQUE7QUFBQSxNQUVkQyxnQkFFTSxPQUZOLFlBRU1DLGdCQURELEtBQUUsR0FBQSxpQkFBQSxDQUFBLEdBQUEsQ0FBQTtBQUFBLE1BR1BGLFlBY0UsWUFBQTtBQUFBLG9CQWJTLE1BQWU7QUFBQSxxRUFBZixNQUFlLGtCQUFBO0FBQUEsUUFDeEIsZ0JBQWE7QUFBQSxRQUNiLE9BQU07QUFBQSxRQUNOLGNBQVc7QUFBQSxRQUNYLFdBQUE7QUFBQSxRQUNBLFdBQUE7QUFBQSxRQUNBLFlBQUE7QUFBQSxRQUNBLE9BQU07QUFBQSxRQUNMLFNBQVM7QUFBQTs7O1FBSVQ7QUFBQTtNQUdIQyxnQkFFTSxPQUZOLFlBRU1DLGdCQURELEtBQUUsR0FBQSxrQkFBQSxDQUFBLEdBQUEsQ0FBQTtBQUFBLE1BR1BGLFlBY0UsWUFBQTtBQUFBLG9CQWJTLE1BQU87QUFBQSxxRUFBUCxNQUFPLFVBQUE7QUFBQSxRQUNoQixnQkFBYTtBQUFBLFFBQ2IsT0FBTTtBQUFBLFFBQ04sY0FBVztBQUFBLFFBQ1gsV0FBQTtBQUFBLFFBQ0EsV0FBQTtBQUFBLFFBQ0EsWUFBQTtBQUFBLFFBQ0EsT0FBTTtBQUFBLFFBQ0wsU0FBUztBQUFBOzs7UUFJVDtBQUFBO01BR0hDLGdCQUVNLE9BRk4sWUFFTUMsZ0JBREQsS0FBRSxHQUFBLHdCQUFBLENBQUEsR0FBQSxDQUFBO0FBQUE7Ozs7OzsifQ==
