import { _ as _export_sfc, l as defineAsyncComponent, n as resolveComponent, p as openBlock, V as createElementBlock, f as createVNode, t as withCtx, F as Fragment, Y as QBtn, aY as QInput, at as QIcon, aB as QDialog, a8 as QCard, a9 as QCardSection, u as __vitePreload } from "./index.61ed5618.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QSpace } from "./QSpace.f164c087.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import "./QResizeObserver.d08dce3c.js";
const _sfc_main = {
  name: "CategoryPage",
  data() {
    return {
      q: "",
      loading: false,
      dialog: false
    };
  },
  components: {
    CuisineList: defineAsyncComponent(
      () => __vitePreload(() => import("./CuisineList.4292085c.js"), true ? ["assets/CuisineList.4292085c.js","assets/QSkeleton.39737398.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QImg.6c27044c.js"] : void 0)
    )
  },
  methods: {
    Focus() {
      this.$refs.category.focus();
    },
    onSearch(loading) {
      this.loading = loading;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CuisineList = resolveComponent("CuisineList");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(QHeader, {
      reveal: "",
      class: "bg-white"
    }, {
      default: withCtx(() => [
        createVNode(QToolbar, null, {
          default: withCtx(() => [
            createVNode(QBtn, {
              to: "/home",
              flat: "",
              round: "",
              dense: "",
              icon: "arrow_back",
              color: "dark"
            }),
            createVNode(QInput, {
              label: _ctx.$t("Search category"),
              dense: "",
              outlined: "",
              color: "grey",
              "bg-color": "white",
              class: "full-width input-borderless",
              onClick: _cache[0] || (_cache[0] = ($event) => $data.dialog = true),
              readonly: ""
            }, {
              prepend: withCtx(() => [
                createVNode(QIcon, { name: "search" })
              ]),
              _: 1
            }, 8, ["label"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    createVNode(QPage, {
      padding: "",
      class: "bg-grey-2"
    }, {
      default: withCtx(() => [
        createVNode(QSpace, { class: "q-pa-xs" }),
        createVNode(_component_CuisineList, {
          ref: "cuisine_list",
          q: $data.q,
          onOnSearch: $options.onSearch
        }, null, 8, ["q", "onOnSearch"]),
        createVNode(QSpace, { class: "q-mt-xl q-mb-xl" }),
        createVNode(QDialog, {
          modelValue: $data.dialog,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.dialog = $event),
          position: "top",
          "transition-show": "fade",
          onShow: _cache[3] || (_cache[3] = ($event) => $options.Focus())
        }, {
          default: withCtx(() => [
            createVNode(QCard, { class: "transparent no-shadow" }, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    createVNode(QInput, {
                      modelValue: $data.q,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.q = $event),
                      ref: "category",
                      label: _ctx.$t("Search category"),
                      dense: "",
                      outlined: "",
                      color: "grey",
                      "bg-color": "white",
                      class: "full-width input-borderless",
                      loading: $data.loading
                    }, {
                      prepend: withCtx(() => [
                        createVNode(QIcon, { name: "search" })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "label", "loading"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]),
      _: 1
    })
  ], 64);
}
var CategoryPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "CategoryPage.vue"]]);
export { CategoryPage as default };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBOERBLE1BQUssWUFBVTtBQUFBLEVBQ2IsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUNMLFdBQU87QUFBQSxNQUNMLEdBQUc7QUFBQSxNQUNILFNBQVM7QUFBQSxNQUNULFFBQVE7QUFBQTtFQUVYO0FBQUEsRUFDRCxZQUFZO0FBQUEsSUFDVixhQUFhO0FBQUEsTUFBcUIsTUFDaEMsMkJBQU8sOEJBQTRCO0FBQUEsSUFDcEM7QUFBQSxFQUNGO0FBQUEsRUFDRCxTQUFTO0FBQUEsSUFDUCxRQUFRO0FBQ04sV0FBSyxNQUFNLFNBQVM7SUFDckI7QUFBQSxJQUNELFNBQVMsU0FBUztBQUNoQixXQUFLLFVBQVU7QUFBQSxJQUNoQjtBQUFBLEVBQ0Y7QUFDSDs7OztJQW5GRUEsWUFtQlc7QUFBQSxNQW5CRDtBQUFBLE1BQU8sT0FBTTtBQUFBO3VCQUNyQixNQWlCWTtBQUFBLFFBakJaQSxZQWlCWTtBQUFBLDJCQWhCVixNQUFvRTtBQUFBLFlBQXBFQSxZQUFvRTtBQUFBLGNBQTdELElBQUc7QUFBQSxjQUFRO0FBQUEsY0FBSztBQUFBLGNBQU07QUFBQSxjQUFNLE1BQUs7QUFBQSxjQUFhLE9BQU07QUFBQTtZQUUzREEsWUFhVTtBQUFBLGNBWlAsT0FBTyxLQUFFO0FBQUEsY0FDVjtBQUFBLGNBQ0E7QUFBQSxjQUNBLE9BQU07QUFBQSxjQUNOLFlBQVM7QUFBQSxjQUNULE9BQU07QUFBQSxjQUNMLCtDQUFPLE1BQU07QUFBQSxjQUNkO0FBQUE7Y0FFaUIsaUJBQ2YsTUFBd0I7QUFBQSxnQkFBeEJBLFlBQXdCLHdCQUFaO0FBQUE7Ozs7Ozs7OztJQU9wQkEsWUFpQ1M7QUFBQSxNQWpDRDtBQUFBLE1BQVEsT0FBTTtBQUFBO3VCQUNwQixNQUFtQztBQUFBLFFBQW5DQSxZQUFtQywyQkFBckI7QUFBQSxRQUVkQSxZQUErRDtBQUFBLFVBQWxELEtBQUk7QUFBQSxVQUFnQixHQUFHLE1BQUM7QUFBQSxVQUFHLFlBQVcsU0FBUTtBQUFBO1FBRTNEQSxZQUEyQyxtQ0FBWDtBQUFBLFFBRWhDQSxZQXlCVztBQUFBLHNCQXhCQSxNQUFNO0FBQUEsdUVBQU4sTUFBTTtBQUFBLFVBQ2YsVUFBUztBQUFBLFVBQ1QsbUJBQWdCO0FBQUEsVUFDZiw4Q0FBTSxTQUFLO0FBQUE7MkJBRVosTUFrQlM7QUFBQSxZQWxCVEEsWUFrQlMsd0NBbEI0QjtBQUFBLCtCQUNuQyxNQWdCaUI7QUFBQSxnQkFoQmpCQSxZQWdCaUI7QUFBQSxtQ0FmZixNQWNVO0FBQUEsb0JBZFZBLFlBY1U7QUFBQSxrQ0FiQyxNQUFDO0FBQUEsbUZBQUQsTUFBQztBQUFBLHNCQUNWLEtBQUk7QUFBQSxzQkFDSCxPQUFPLEtBQUU7QUFBQSxzQkFDVjtBQUFBLHNCQUNBO0FBQUEsc0JBQ0EsT0FBTTtBQUFBLHNCQUNOLFlBQVM7QUFBQSxzQkFDVCxPQUFNO0FBQUEsc0JBQ0wsU0FBUyxNQUFPO0FBQUE7c0JBRUEsaUJBQ2YsTUFBd0I7QUFBQSx3QkFBeEJBLFlBQXdCLHdCQUFaO0FBQUEiLCJuYW1lcyI6WyJfY3JlYXRlVk5vZGUiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvQ2F0ZWdvcnkvQ2F0ZWdvcnlQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLWhlYWRlciByZXZlYWwgY2xhc3M9XCJiZy13aGl0ZVwiPlxuICAgIDxxLXRvb2xiYXI+XG4gICAgICA8cS1idG4gdG89XCIvaG9tZVwiIGZsYXQgcm91bmQgZGVuc2UgaWNvbj1cImFycm93X2JhY2tcIiBjb2xvcj1cImRhcmtcIiAvPlxuXG4gICAgICA8cS1pbnB1dFxuICAgICAgICA6bGFiZWw9XCIkdCgnU2VhcmNoIGNhdGVnb3J5JylcIlxuICAgICAgICBkZW5zZVxuICAgICAgICBvdXRsaW5lZFxuICAgICAgICBjb2xvcj1cImdyZXlcIlxuICAgICAgICBiZy1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgY2xhc3M9XCJmdWxsLXdpZHRoIGlucHV0LWJvcmRlcmxlc3NcIlxuICAgICAgICBAY2xpY2s9XCJkaWFsb2cgPSB0cnVlXCJcbiAgICAgICAgcmVhZG9ubHlcbiAgICAgID5cbiAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpwcmVwZW5kPlxuICAgICAgICAgIDxxLWljb24gbmFtZT1cInNlYXJjaFwiIC8+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3EtaW5wdXQ+XG4gICAgPC9xLXRvb2xiYXI+XG4gIDwvcS1oZWFkZXI+XG4gIDwhLS0gYmFubmVyIC0tPlxuXG4gIDxxLXBhZ2UgcGFkZGluZyBjbGFzcz1cImJnLWdyZXktMlwiPlxuICAgIDxxLXNwYWNlIGNsYXNzPVwicS1wYS14c1wiPjwvcS1zcGFjZT5cblxuICAgIDxDdWlzaW5lTGlzdCByZWY9XCJjdWlzaW5lX2xpc3RcIiA6cT1cInFcIiBAb24tc2VhcmNoPVwib25TZWFyY2hcIiAvPlxuXG4gICAgPHEtc3BhY2UgY2xhc3M9XCJxLW10LXhsIHEtbWIteGxcIj48L3Etc3BhY2U+XG5cbiAgICA8cS1kaWFsb2dcbiAgICAgIHYtbW9kZWw9XCJkaWFsb2dcIlxuICAgICAgcG9zaXRpb249XCJ0b3BcIlxuICAgICAgdHJhbnNpdGlvbi1zaG93PVwiZmFkZVwiXG4gICAgICBAc2hvdz1cIkZvY3VzKClcIlxuICAgID5cbiAgICAgIDxxLWNhcmQgY2xhc3M9XCJ0cmFuc3BhcmVudCBuby1zaGFkb3dcIj5cbiAgICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgICB2LW1vZGVsPVwicVwiXG4gICAgICAgICAgICByZWY9XCJjYXRlZ29yeVwiXG4gICAgICAgICAgICA6bGFiZWw9XCIkdCgnU2VhcmNoIGNhdGVnb3J5JylcIlxuICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgICBjb2xvcj1cImdyZXlcIlxuICAgICAgICAgICAgYmctY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICBjbGFzcz1cImZ1bGwtd2lkdGggaW5wdXQtYm9yZGVybGVzc1wiXG4gICAgICAgICAgICA6bG9hZGluZz1cImxvYWRpbmdcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6cHJlcGVuZD5cbiAgICAgICAgICAgICAgPHEtaWNvbiBuYW1lPVwic2VhcmNoXCIgLz5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9xLWlucHV0PlxuICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgPC9xLWNhcmQ+XG4gICAgPC9xLWRpYWxvZz5cbiAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgZGVmaW5lQXN5bmNDb21wb25lbnQgfSBmcm9tIFwidnVlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJDYXRlZ29yeVBhZ2VcIixcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcTogXCJcIixcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgZGlhbG9nOiBmYWxzZSxcbiAgICB9O1xuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgQ3Vpc2luZUxpc3Q6IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+XG4gICAgICBpbXBvcnQoXCJjb21wb25lbnRzL0N1aXNpbmVMaXN0LnZ1ZVwiKVxuICAgICksXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBGb2N1cygpIHtcbiAgICAgIHRoaXMuJHJlZnMuY2F0ZWdvcnkuZm9jdXMoKTtcbiAgICB9LFxuICAgIG9uU2VhcmNoKGxvYWRpbmcpIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IGxvYWRpbmc7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiJdLCJmaWxlIjoiYXNzZXRzL0NhdGVnb3J5UGFnZS5mNzc4MDcxOS5qcyJ9
