import { _ as _export_sfc, R as useDataStore, p as openBlock, q as createBlock, t as withCtx, f as createVNode, Y as QBtn, a7 as normalizeClass, V as createElementBlock, U as createBaseVNode, Z as toDisplayString, F as Fragment, aA as createCommentVNode } from "./index.61ed5618.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QInnerLoading } from "./QInnerLoading.abe2afe6.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import { Q as QPullToRefresh } from "./QPullToRefresh.3d10c02d.js";
import "./QResizeObserver.d08dce3c.js";
import "./touch.96e0ae37.js";
import "./selection.50b4cb0c.js";
import "./format.7f7370d3.js";
const _sfc_main = {
  name: "PageRender",
  setup() {
    const DataStore = useDataStore();
    return { DataStore };
  },
  created() {
    this.DataStore.loading_page = true;
    this.DataStore.getPage(null, this.$route.params.page_id);
  },
  methods: {
    refresh(done) {
      this.DataStore.getPage(done, this.$route.params.page_id);
    }
  }
};
const _hoisted_1 = { class: "text-h5 text-weight-bold" };
const _hoisted_2 = ["innerHTML"];
const _hoisted_3 = {
  key: 1,
  class: "text-center full-width"
};
const _hoisted_4 = { class: "text-h5 text-weight-bold" };
const _hoisted_5 = { class: "text-grey font12" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QPullToRefresh, { onRefresh: $options.refresh }, {
    default: withCtx(() => [
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
              createVNode(QToolbarTitle, { class: "text-weight-bold" })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["class"]),
      createVNode(QPage, {
        class: normalizeClass(["q-pl-md q-pr-md", {
          "flex flex-center": !$setup.DataStore.hasPage && !$setup.DataStore.loading_page
        }])
      }, {
        default: withCtx(() => [
          !$setup.DataStore.loading_page ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createBaseVNode("div", _hoisted_1, toDisplayString($setup.DataStore.page_data.title), 1),
            createBaseVNode("div", {
              innerHTML: $setup.DataStore.page_data.long_content
            }, null, 8, _hoisted_2)
          ], 64)) : createCommentVNode("", true),
          !$setup.DataStore.hasPage && !$setup.DataStore.loading_page ? (openBlock(), createElementBlock("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, toDisplayString(_ctx.$t("No results")), 1),
            createBaseVNode("p", _hoisted_5, toDisplayString(_ctx.$t("This page is not available please come back later.")), 1)
          ])) : createCommentVNode("", true),
          createVNode(QInnerLoading, {
            showing: $setup.DataStore.loading_page,
            color: "primary",
            size: "md"
          }, null, 8, ["showing"])
        ]),
        _: 1
      }, 8, ["class"])
    ]),
    _: 1
  }, 8, ["onRefresh"]);
}
var PageRender = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "PageRender.vue"]]);
export { PageRender as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnZVJlbmRlci40YTExNzlkYS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhZ2VzL0xlZ2FsL1BhZ2VSZW5kZXIudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHEtcHVsbC10by1yZWZyZXNoIEByZWZyZXNoPVwicmVmcmVzaFwiPlxuICAgIDxxLWhlYWRlclxuICAgICAgcmV2ZWFsXG4gICAgICByZXZlYWwtb2Zmc2V0PVwiNTBcIlxuICAgICAgOmNsYXNzPVwie1xuICAgICAgICAnYmctbXlkYXJrIHRleHQtd2hpdGUnOiAkcS5kYXJrLm1vZGUsXG4gICAgICAgICdiZy13aGl0ZSB0ZXh0LWRhcmsnOiAhJHEuZGFyay5tb2RlLFxuICAgICAgfVwiXG4gICAgPlxuICAgICAgPHEtdG9vbGJhcj5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgQGNsaWNrPVwiJHJvdXRlci5iYWNrKClcIlxuICAgICAgICAgIGZsYXRcbiAgICAgICAgICByb3VuZFxuICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgaWNvbj1cImxhcyBsYS1hbmdsZS1sZWZ0XCJcbiAgICAgICAgICBjbGFzcz1cInEtbXItc21cIlxuICAgICAgICAgIDpjb2xvcj1cIiRxLmRhcmsubW9kZSA/ICd3aGl0ZScgOiAnZGFyaydcIlxuICAgICAgICAvPlxuICAgICAgICA8cS10b29sYmFyLXRpdGxlIGNsYXNzPVwidGV4dC13ZWlnaHQtYm9sZFwiPjwvcS10b29sYmFyLXRpdGxlPlxuICAgICAgPC9xLXRvb2xiYXI+XG4gICAgPC9xLWhlYWRlcj5cbiAgICA8cS1wYWdlXG4gICAgICBjbGFzcz1cInEtcGwtbWQgcS1wci1tZFwiXG4gICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICdmbGV4IGZsZXgtY2VudGVyJzogIURhdGFTdG9yZS5oYXNQYWdlICYmICFEYXRhU3RvcmUubG9hZGluZ19wYWdlLFxuICAgICAgfVwiXG4gICAgPlxuICAgICAgPHRlbXBsYXRlIHYtaWY9XCIhRGF0YVN0b3JlLmxvYWRpbmdfcGFnZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNSB0ZXh0LXdlaWdodC1ib2xkXCI+XG4gICAgICAgICAge3sgRGF0YVN0b3JlLnBhZ2VfZGF0YS50aXRsZSB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiB2LWh0bWw9XCJEYXRhU3RvcmUucGFnZV9kYXRhLmxvbmdfY29udGVudFwiPjwvZGl2PlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiIURhdGFTdG9yZS5oYXNQYWdlICYmICFEYXRhU3RvcmUubG9hZGluZ19wYWdlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBmdWxsLXdpZHRoXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDUgdGV4dC13ZWlnaHQtYm9sZFwiPnt7ICR0KFwiTm8gcmVzdWx0c1wiKSB9fTwvZGl2PlxuICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1ncmV5IGZvbnQxMlwiPlxuICAgICAgICAgICAge3sgJHQoXCJUaGlzIHBhZ2UgaXMgbm90IGF2YWlsYWJsZSBwbGVhc2UgY29tZSBiYWNrIGxhdGVyLlwiKSB9fVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPHEtaW5uZXItbG9hZGluZ1xuICAgICAgICA6c2hvd2luZz1cIkRhdGFTdG9yZS5sb2FkaW5nX3BhZ2VcIlxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICBzaXplPVwibWRcIlxuICAgICAgLz5cbiAgICA8L3EtcGFnZT5cbiAgPC9xLXB1bGwtdG8tcmVmcmVzaD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyB1c2VEYXRhU3RvcmUgfSBmcm9tIFwic3RvcmVzL0RhdGFTdG9yZVwiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIlBhZ2VSZW5kZXJcIixcbiAgc2V0dXAoKSB7XG4gICAgY29uc3QgRGF0YVN0b3JlID0gdXNlRGF0YVN0b3JlKCk7XG4gICAgcmV0dXJuIHsgRGF0YVN0b3JlIH07XG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5EYXRhU3RvcmUubG9hZGluZ19wYWdlID0gdHJ1ZTtcbiAgICB0aGlzLkRhdGFTdG9yZS5nZXRQYWdlKG51bGwsIHRoaXMuJHJvdXRlLnBhcmFtcy5wYWdlX2lkKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHJlZnJlc2goZG9uZSkge1xuICAgICAgdGhpcy5EYXRhU3RvcmUuZ2V0UGFnZShkb25lLCB0aGlzLiRyb3V0ZS5wYXJhbXMucGFnZV9pZCk7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfY3JlYXRlQmxvY2siLCJfY3JlYXRlVk5vZGUiLCJfbm9ybWFsaXplQ2xhc3MiLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX0ZyYWdtZW50IiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl90b0Rpc3BsYXlTdHJpbmciLCJfb3BlbkJsb2NrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQXNEQSxNQUFLLFlBQVU7QUFBQSxFQUNiLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFDTixVQUFNLFlBQVk7QUFDbEIsV0FBTyxFQUFFO0VBQ1Y7QUFBQSxFQUNELFVBQVU7QUFDUixTQUFLLFVBQVUsZUFBZTtBQUM5QixTQUFLLFVBQVUsUUFBUSxNQUFNLEtBQUssT0FBTyxPQUFPLE9BQU87QUFBQSxFQUN4RDtBQUFBLEVBQ0QsU0FBUztBQUFBLElBQ1AsUUFBUSxNQUFNO0FBQ1osV0FBSyxVQUFVLFFBQVEsTUFBTSxLQUFLLE9BQU8sT0FBTyxPQUFPO0FBQUEsSUFDeEQ7QUFBQSxFQUNGO0FBQ0g7QUF2Q2EsTUFBQSxhQUFBLEVBQUEsT0FBTSwyQkFBMEI7Ozs7RUFNaEMsT0FBTTs7QUFDSixNQUFBLGFBQUEsRUFBQSxPQUFNLDJCQUEwQjtBQUNsQyxNQUFBLGFBQUEsRUFBQSxPQUFNLG1CQUFrQjs7c0JBckNuQ0EsWUFnRG9CLGdCQUFBLEVBQUEsV0FBQSxTQWhETyxXQUFTO0FBQUEscUJBQ2xDLE1Bb0JXO0FBQUEsTUFwQlhDLFlBb0JXLFNBQUE7QUFBQSxRQW5CVCxRQUFBO0FBQUEsUUFDQSxpQkFBYztBQUFBLFFBQ2IsT0FBS0MsZUFBQTtBQUFBLGtDQUFvQyxLQUFFLEdBQUMsS0FBSztBQUFBLGlDQUFxQyxLQUFFLEdBQUMsS0FBSztBQUFBOzt5QkFLL0YsTUFXWTtBQUFBLFVBWFpELFlBV1ksVUFBQSxNQUFBO0FBQUEsNkJBVlYsTUFRRTtBQUFBLGNBUkZBLFlBUUUsTUFBQTtBQUFBLGdCQVBDLFNBQUssT0FBQSxPQUFBLE9BQUEsS0FBQSxZQUFFLEtBQU8sUUFBQyxLQUFJO0FBQUEsZ0JBQ3BCLE1BQUE7QUFBQSxnQkFDQSxPQUFBO0FBQUEsZ0JBQ0EsT0FBQTtBQUFBLGdCQUNBLE1BQUs7QUFBQSxnQkFDTCxPQUFNO0FBQUEsZ0JBQ0wsT0FBTyxLQUFBLEdBQUcsS0FBSyxPQUFJLFVBQUE7QUFBQTtjQUV0QkEsWUFBNEQsZUFBQSxFQUFBLE9BQUEsbUJBQW5CLENBQUE7QUFBQTs7Ozs7O01BRzdDQSxZQXlCUyxPQUFBO0FBQUEsUUF4QlAsdUJBQU0sbUJBQWlCO0FBQUEsVUFDZ0Isb0JBQUEsQ0FBQSxPQUFBLFVBQVUsV0FBWSxDQUFBLE9BQUEsVUFBVTtBQUFBOzt5QkFJdkUsTUFLVztBQUFBLFVBTE0sQ0FBQSxPQUFBLFVBQVUsNkJBQTNCRSxtQkFLV0MsVUFBQSxFQUFBLEtBQUEsRUFBQSxHQUFBO0FBQUEsWUFKVEMsZ0JBRU0sT0FGTixZQUVNQyxnQkFERCxpQkFBVSxVQUFVLEtBQUssR0FBQSxDQUFBO0FBQUEsWUFFOUJELGdCQUFxRCxPQUFBO0FBQUEsY0FBaEQsV0FBUSxPQUFBLFVBQVUsVUFBVTtBQUFBOztVQUVsQixDQUFBLE9BQUEsVUFBVSxXQUFZLENBQUEsT0FBQSxVQUFVLGdCQUMvQ0UsYUFBQUosbUJBS00sT0FMTixZQUtNO0FBQUEsWUFKSkUsZ0JBQWtFLE9BQWxFLFlBQWtFQyxnQkFBekIsS0FBRSxHQUFBLFlBQUEsQ0FBQSxHQUFBLENBQUE7QUFBQSxZQUMzQ0QsZ0JBRUksS0FGSixZQUVJQyxnQkFEQyxLQUFFLEdBQUEsb0RBQUEsQ0FBQSxHQUFBLENBQUE7QUFBQTtVQUlYTCxZQUlFLGVBQUE7QUFBQSxZQUhDLFNBQVMsT0FBUyxVQUFDO0FBQUEsWUFDcEIsT0FBTTtBQUFBLFlBQ04sTUFBSztBQUFBOzs7Ozs7Ozs7OyJ9
