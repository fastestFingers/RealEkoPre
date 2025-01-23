import { _ as _export_sfc, l as defineAsyncComponent, R as useDataStore, m as APIinterface, aw as auth, n as resolveComponent, p as openBlock, q as createBlock, t as withCtx, f as createVNode, Y as QBtn, V as createElementBlock, a6 as createTextVNode, Z as toDisplayString, F as Fragment, aA as createCommentVNode, a7 as normalizeClass, U as createBaseVNode, at as QIcon, X as renderList, u as __vitePreload, aa as withDirectives, ab as Ripple, ac as QItem, aF as withModifiers } from "./index.61ed5618.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QSkeleton } from "./QSkeleton.39737398.js";
import { Q as QList } from "./QList.b69a7e5b.js";
import { Q as QSpinnerDots } from "./QSpinnerDots.a9d9851d.js";
import { Q as QInfiniteScroll } from "./QInfiniteScroll.3e160277.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import { Q as QPullToRefresh } from "./QPullToRefresh.3d10c02d.js";
import { u as useCartStore } from "./CartStore.484ff101.js";
import "./QResizeObserver.d08dce3c.js";
import "./touch.96e0ae37.js";
import "./selection.50b4cb0c.js";
import "./format.7f7370d3.js";
const _sfc_main = {
  name: "FeedPage",
  components: {
    MerchantListInline: defineAsyncComponent(
      () => __vitePreload(() => import("./MerchantListInline.d7e88ed0.js"), true ? ["assets/MerchantListInline.d7e88ed0.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QImg.6c27044c.js","assets/QChip.f183a4f1.js","assets/QItemLabel.a9365c5b.js"] : void 0)
    ),
    MerchantListTpl: defineAsyncComponent(
      () => __vitePreload(() => import("./MerchantListTpl.ab0a2b4a.js"), true ? ["assets/MerchantListTpl.ab0a2b4a.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QImg.6c27044c.js","assets/QChip.f183a4f1.js"] : void 0)
    ),
    MerchantListSkeleton: defineAsyncComponent(
      () => __vitePreload(() => import("./MerchantListSkeleton.86acaa3d.js"), true ? ["assets/MerchantListSkeleton.86acaa3d.js","assets/QSkeleton.39737398.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QList.b69a7e5b.js"] : void 0)
    ),
    SortList: defineAsyncComponent(() => __vitePreload(() => import("./SortList.bd5c198d.js"), true ? ["assets/SortList.bd5c198d.js","assets/QItemLabel.a9365c5b.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QList.b69a7e5b.js"] : void 0)),
    MerchantFilter: defineAsyncComponent(
      () => __vitePreload(() => import("./MerchantFilter.dba432b5.js"), true ? ["assets/MerchantFilter.dba432b5.js","assets/QToolbarTitle.03eaf2d6.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QSpace.f164c087.js","assets/QToolbar.c8fc6962.js","assets/QBtnToggle.6ffa195b.js","assets/QBtnGroup.abc2d1c7.js","assets/QPullToRefresh.3d10c02d.js","assets/touch.96e0ae37.js","assets/selection.50b4cb0c.js","assets/format.7f7370d3.js","assets/QFooter.571ac042.js","assets/QResizeObserver.d08dce3c.js","assets/DeliverySched.4e9605bf.js"] : void 0)
    ),
    NoResults: defineAsyncComponent(() => __vitePreload(() => import("./NoResults.cda4282a.js"), true ? ["assets/NoResults.cda4282a.js","assets/QImg.6c27044c.js","assets/index.61ed5618.js","assets/index.dbee30c0.css"] : void 0))
  },
  data() {
    return {
      loading: true,
      list_type: "",
      featured_id: "",
      data: [],
      cuisine: [],
      reviews: [],
      estimation: [],
      services: [],
      items_min_max: [],
      title: "",
      page: 0,
      sort_by: "",
      total_found: 0,
      filters: [],
      transactionType: "",
      menu_type: "column",
      cuisine_id: "",
      cuisine_name: "",
      page_title: "",
      promos: [],
      payload: [
        "cuisine",
        "reviews",
        "estimation",
        "services",
        "items_min_max",
        "offers",
        "promo"
      ]
    };
  },
  setup() {
    const CartStore = useCartStore();
    const DataStore = useDataStore();
    return { CartStore, DataStore };
  },
  watch: {
    menu_type(newval, oldval) {
      console.log(newval);
      APIinterface.setStorage("listType", newval);
    }
  },
  created() {
    this.transactionType = APIinterface.getStorage("transaction_type");
    this.list_type = this.$route.query.query;
    this.featured_id = this.$route.query.featured_id;
    this.cuisine_id = this.$route.query.cuisine_id;
    this.cuisine_name = this.$route.query.cuisine_name;
    this.page_title = this.$route.query.page_title;
    if (this.cuisine_id > 0) {
      this.filters = {
        cuisine: [this.cuisine_id]
      };
    }
    let listType = APIinterface.getStorage("listType");
    if (!APIinterface.empty(listType)) {
      this.menu_type = listType;
    }
    if (Object.keys(this.DataStore.featured_data).length <= 0) {
      this.DataStore.getFeaturedList();
    }
    if (!this.DataStore.hasDataCuisine()) {
      this.DataStore.CuisineList();
    }
  },
  computed: {
    hasData() {
      if (this.data.length > 0) {
        return true;
      }
      return false;
    },
    switchIconList() {
      if (this.menu_type == "list") {
        return "grid_view";
      } else {
        return "reorder";
      }
    }
  },
  methods: {
    refresh(done) {
      done();
      this.resetPagination();
    },
    getMerchantFeed(index, done) {
      const $params = {
        list_type: this.list_type,
        featured_id: this.featured_id,
        place_id: APIinterface.getStorage("place_id"),
        payload: this.payload,
        page: index,
        sort_by: this.sort_by,
        filters: this.filters
      };
      if (this.list_type === "featured") {
        $params.featured_id = this.featured_id;
      }
      this.loading = true;
      if (auth.authenticated()) {
        APIinterface.fetchDataByToken("getMerchantFeed2", $params).then((data) => {
          this.page = index;
          if (data.code == 1) {
            this.data.push(data.details.data);
            this.cuisine = data.details.cuisine;
            this.reviews = data.details.reviews;
            this.estimation = data.details.estimation;
            this.services = data.details.services;
            this.items_min_max = data.details.items_min_max;
            this.total_found = data.details.total_found;
            this.promos = data.details.promos;
          } else {
            this.total_found = data.details.total_found;
            if (this.$refs.nscroll) {
              this.$refs.nscroll.stop();
            }
          }
        }).catch((error) => {
          if (this.$refs.nscroll) {
            this.$refs.nscroll.stop();
          }
          this.total_found = 0;
        }).then((data) => {
          this.loading = false;
          done();
        });
      } else {
        APIinterface.getMerchantFeed($params).then((data) => {
          this.page = index;
          if (data.code == 1) {
            this.data.push(data.details.data);
            this.cuisine = data.details.cuisine;
            this.reviews = data.details.reviews;
            this.estimation = data.details.estimation;
            this.services = data.details.services;
            this.items_min_max = data.details.items_min_max;
            this.total_found = data.details.total_found;
            this.promos = data.details.promos;
          } else {
            this.total_found = data.details.total_found;
            if (this.$refs.nscroll) {
              this.$refs.nscroll.stop();
            }
          }
        }).catch((error) => {
          if (this.$refs.nscroll) {
            this.$refs.nscroll.stop();
          }
          this.total_found = 0;
        }).then((data) => {
          this.loading = false;
          done();
        });
      }
    },
    afterSelectsort(data) {
      console.log("afterSelectsort=>" + data);
      this.sort_by = data;
      this.resetPagination();
      this.page = 0;
    },
    applyFilter(data) {
      this.filters = data;
      this.filters.transaction_type = this.transactionType;
      this.resetPagination();
      this.page = 0;
    },
    resetPagination() {
      this.page = 0;
      this.data = [];
      this.$refs.nscroll.reset();
      this.$refs.nscroll.resume();
      this.$refs.nscroll.trigger();
    },
    filterAgain() {
      console.log("filterAgain");
      this.$refs.merchant_filter.filter = true;
    }
  }
};
const _hoisted_1 = { class: "row items-center justify-between no-wrap" };
const _hoisted_2 = { class: "row items-center no-wrap full-width" };
const _hoisted_3 = { class: "text-center q-pr-sm" };
const _hoisted_4 = {
  key: 0,
  class: "text-grey q-pt-sm q-pb-xs"
};
const _hoisted_5 = {
  key: 1,
  class: "row justify-center absolute-bottom"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NoResults = resolveComponent("NoResults");
  const _component_DIV = resolveComponent("DIV");
  const _component_MerchantListInline = resolveComponent("MerchantListInline");
  const _component_MerchantListTpl = resolveComponent("MerchantListTpl");
  const _component_MerchantListSkeleton = resolveComponent("MerchantListSkeleton");
  const _component_SortList = resolveComponent("SortList");
  const _component_MerchantFilter = resolveComponent("MerchantFilter");
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
              createVNode(QToolbarTitle, { class: "text-weight-bold" }, {
                default: withCtx(() => [
                  $setup.DataStore.featured_data[this.featured_id] ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    createTextVNode(toDisplayString($setup.DataStore.featured_data[this.featured_id]), 1)
                  ], 64)) : $data.cuisine_name ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    createTextVNode(toDisplayString($data.cuisine_name), 1)
                  ], 64)) : $data.page_title ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                    createTextVNode(toDisplayString($data.page_title), 1)
                  ], 64)) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["class"]),
      createVNode(QPage, { padding: "" }, {
        default: withCtx(() => [
          createVNode(_component_DIV, { class: "q-pl-md q-pr-md" }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                createVNode(QBtn, {
                  color: _ctx.$q.dark.mode ? "grey600" : "mygrey",
                  "text-color": _ctx.$q.dark.mode ? "grey300" : "dark",
                  "icon-size": "11px",
                  unelevated: "",
                  "no-caps": "",
                  size: "md",
                  class: "radius10",
                  onClick: _cache[1] || (_cache[1] = ($event) => this.$refs.sort_list.show_modal = true)
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_2, [
                      createBaseVNode("div", _hoisted_3, [
                        $setup.DataStore.sort_list[$data.sort_by] ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                          createTextVNode(toDisplayString($setup.DataStore.sort_list[$data.sort_by]), 1)
                        ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                          createTextVNode(toDisplayString(_ctx.$t("Sort")), 1)
                        ], 64))
                      ]),
                      createVNode(QIcon, {
                        name: "las la-angle-down",
                        size: "15px"
                      })
                    ])
                  ]),
                  _: 1
                }, 8, ["color", "text-color"]),
                createBaseVNode("div", null, [
                  createVNode(QBtn, {
                    color: _ctx.$q.dark.mode ? "grey600" : "mygrey",
                    "text-color": _ctx.$q.dark.mode ? "grey300" : "dark",
                    unelevated: "",
                    "no-caps": "",
                    round: "",
                    size: "12px",
                    class: "q-mr-sm",
                    onClick: _cache[2] || (_cache[2] = ($event) => this.menu_type = this.menu_type == "list" ? "column" : "list")
                  }, {
                    default: withCtx(() => [
                      createVNode(QIcon, { name: $options.switchIconList }, null, 8, ["name"])
                    ]),
                    _: 1
                  }, 8, ["color", "text-color"]),
                  createVNode(QBtn, {
                    color: _ctx.$q.dark.mode ? "grey600" : "mygrey",
                    "text-color": _ctx.$q.dark.mode ? "grey300" : "dark",
                    unelevated: "",
                    "no-caps": "",
                    round: "",
                    size: "12px",
                    onClick: _cache[3] || (_cache[3] = ($event) => this.$refs.merchant_filter.filter = true)
                  }, {
                    default: withCtx(() => [
                      createVNode(QIcon, { name: "tune" })
                    ]),
                    _: 1
                  }, 8, ["color", "text-color"])
                ])
              ]),
              $data.loading && $data.page <= 0 ? (openBlock(), createElementBlock("div", _hoisted_4, [
                createVNode(QSkeleton, {
                  type: "text",
                  style: { "width": "100px" }
                })
              ])) : (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(["text-grey q-pt-sm q-pb-xs", { "min-height-inherit flex flex-center q-pa-none": !$options.hasData }])
              }, [
                $options.hasData ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  createTextVNode(toDisplayString($data.total_found) + " " + toDisplayString(_ctx.$t("restaurant")), 1)
                ], 64)) : (openBlock(), createBlock(_component_NoResults, {
                  key: 1,
                  onFilterAgain: $options.filterAgain
                }, null, 8, ["onFilterAgain"]))
              ], 2))
            ]),
            _: 1
          }),
          createVNode(QInfiniteScroll, {
            ref: "nscroll",
            onLoad: $options.getMerchantFeed,
            offset: 250
          }, {
            loading: withCtx(() => [
              $data.page <= 0 ? (openBlock(), createBlock(_component_MerchantListSkeleton, { key: 0 })) : (openBlock(), createElementBlock("div", _hoisted_5, [
                createVNode(QSpinnerDots, {
                  color: "secondary",
                  size: "40px"
                })
              ]))
            ]),
            default: withCtx(() => [
              createVNode(QList, { class: "no-wrap" }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList($data.data, (itemsdata) => {
                    return openBlock(), createElementBlock(Fragment, { key: itemsdata }, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(itemsdata, (items) => {
                        return withDirectives((openBlock(), createBlock(QItem, {
                          key: items.merchant_id,
                          clickable: "",
                          onClick: withModifiers(($event) => this.$router.push({
                            name: "menu",
                            params: {
                              slug: items.restaurant_slug
                            }
                          }), ["stop"])
                        }, {
                          default: withCtx(() => [
                            $data.menu_type === "list" ? (openBlock(), createBlock(_component_MerchantListInline, {
                              key: 0,
                              items,
                              cuisine: $data.cuisine,
                              reviews: $data.reviews,
                              estimation: $data.estimation,
                              services: $data.services,
                              items_min_max: $data.items_min_max,
                              promos: $data.promos
                            }, null, 8, ["items", "cuisine", "reviews", "estimation", "services", "items_min_max", "promos"])) : (openBlock(), createBlock(_component_MerchantListTpl, {
                              key: 1,
                              items,
                              cuisine: $data.cuisine,
                              reviews: $data.reviews,
                              estimation: $data.estimation,
                              services: $data.services,
                              items_min_max: $data.items_min_max,
                              promos: $data.promos
                            }, null, 8, ["items", "cuisine", "reviews", "estimation", "services", "items_min_max", "promos"]))
                          ]),
                          _: 2
                        }, 1032, ["onClick"])), [
                          [Ripple]
                        ]);
                      }), 128))
                    ], 64);
                  }), 128))
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["onLoad"]),
          createVNode(_component_SortList, {
            ref: "sort_list",
            onAfterSelectsort: $options.afterSelectsort
          }, null, 8, ["onAfterSelectsort"]),
          createVNode(_component_MerchantFilter, {
            ref: "merchant_filter",
            cuisine_data: $setup.DataStore.cuisine,
            onApplyFilter: $options.applyFilter,
            onRunFilter: _ctx.runFilter
          }, null, 8, ["cuisine_data", "onApplyFilter", "onRunFilter"])
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["onRefresh"]);
}
var FeedPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "FeedPage.vue"]]);
export { FeedPage as default };
//# sourceMappingURL=data:application/json;base64,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QUFBLDhCQUNoQixTQUFTLE1BQU87QUFBQSw4QkFDaEIsWUFBWSxNQUFVO0FBQUEsOEJBQ3RCLFVBQVUsTUFBUTtBQUFBLDhCQUNsQixlQUFlLE1BQWE7QUFBQSw4QkFDNUIsUUFBUSxNQUFNO0FBQUEsK0lBRWpCQSxZQVNFO0FBQUE7OEJBUEM7QUFBQSw4QkFDQSxTQUFTLE1BQU87QUFBQSw4QkFDaEIsU0FBUyxNQUFPO0FBQUEsOEJBQ2hCLFlBQVksTUFBVTtBQUFBLDhCQUN0QixVQUFVLE1BQVE7QUFBQSw4QkFDbEIsZUFBZSxNQUFhO0FBQUEsOEJBQzVCLFFBQVEsTUFBTTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7VUFjekJDLFlBQXlFO0FBQUEsWUFBL0QsS0FBSTtBQUFBLFlBQWEsbUJBQWtCLFNBQWU7QUFBQTtVQUU1REEsWUFLRTtBQUFBLFlBSkEsS0FBSTtBQUFBLFlBQ0gsY0FBYyxPQUFTLFVBQUM7QUFBQSxZQUN4QixlQUFjLFNBQVc7QUFBQSxZQUN6QixhQUFZLEtBQVM7QUFBQSIsIm5hbWVzIjpbIl9jcmVhdGVCbG9jayIsIl9jcmVhdGVWTm9kZSIsIl9ub3JtYWxpemVDbGFzcyIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfRnJhZ21lbnQiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX29wZW5CbG9jayIsIl90b0Rpc3BsYXlTdHJpbmciLCJfd2l0aE1vZGlmaWVycyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9GZWVkL0ZlZWRQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLXB1bGwtdG8tcmVmcmVzaCBAcmVmcmVzaD1cInJlZnJlc2hcIj5cbiAgICA8cS1oZWFkZXJcbiAgICAgIHJldmVhbFxuICAgICAgcmV2ZWFsLW9mZnNldD1cIjUwXCJcbiAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgJ2JnLW15ZGFyayB0ZXh0LXdoaXRlJzogJHEuZGFyay5tb2RlLFxuICAgICAgICAnYmctd2hpdGUgdGV4dC1kYXJrJzogISRxLmRhcmsubW9kZSxcbiAgICAgIH1cIlxuICAgID5cbiAgICAgIDxxLXRvb2xiYXI+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIEBjbGljaz1cIiRyb3V0ZXIuYmFjaygpXCJcbiAgICAgICAgICBmbGF0XG4gICAgICAgICAgcm91bmRcbiAgICAgICAgICBkZW5zZVxuICAgICAgICAgIGljb249XCJsYXMgbGEtYW5nbGUtbGVmdFwiXG4gICAgICAgICAgY2xhc3M9XCJxLW1yLXNtXCJcbiAgICAgICAgICA6Y29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnd2hpdGUnIDogJ2RhcmsnXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHEtdG9vbGJhci10aXRsZSBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGRcIj5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIkRhdGFTdG9yZS5mZWF0dXJlZF9kYXRhW3RoaXMuZmVhdHVyZWRfaWRdXCI+XG4gICAgICAgICAgICB7eyBEYXRhU3RvcmUuZmVhdHVyZWRfZGF0YVt0aGlzLmZlYXR1cmVkX2lkXSB9fVxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZS1pZj1cImN1aXNpbmVfbmFtZVwiPlxuICAgICAgICAgICAge3sgY3Vpc2luZV9uYW1lIH19XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlLWlmPVwicGFnZV90aXRsZVwiPlxuICAgICAgICAgICAge3sgcGFnZV90aXRsZSB9fVxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvcS10b29sYmFyLXRpdGxlPlxuICAgICAgPC9xLXRvb2xiYXI+XG4gICAgPC9xLWhlYWRlcj5cblxuICAgIDxxLXBhZ2UgcGFkZGluZz5cbiAgICAgIDxESVYgY2xhc3M9XCJxLXBsLW1kIHEtcHItbWRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG5vLXdyYXBcIj5cbiAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgIDpjb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5NjAwJyA6ICdteWdyZXknXCJcbiAgICAgICAgICAgIDp0ZXh0LWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXkzMDAnIDogJ2RhcmsnXCJcbiAgICAgICAgICAgIGljb24tc2l6ZT1cIjExcHhcIlxuICAgICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgICAgIGNsYXNzPVwicmFkaXVzMTBcIlxuICAgICAgICAgICAgQGNsaWNrPVwidGhpcy4kcmVmcy5zb3J0X2xpc3Quc2hvd19tb2RhbCA9IHRydWVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgaXRlbXMtY2VudGVyIG5vLXdyYXAgZnVsbC13aWR0aFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgcS1wci1zbVwiPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiRGF0YVN0b3JlLnNvcnRfbGlzdFtzb3J0X2J5XVwiPlxuICAgICAgICAgICAgICAgICAge3sgRGF0YVN0b3JlLnNvcnRfbGlzdFtzb3J0X2J5XSB9fVxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT4ge3sgJHQoXCJTb3J0XCIpIH19IDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8cS1pY29uIG5hbWU9XCJsYXMgbGEtYW5nbGUtZG93blwiIHNpemU9XCIxNXB4XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvcS1idG4+XG5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgIDpjb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5NjAwJyA6ICdteWdyZXknXCJcbiAgICAgICAgICAgICAgOnRleHQtY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTMwMCcgOiAnZGFyaydcIlxuICAgICAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICAgICAgcm91bmRcbiAgICAgICAgICAgICAgc2l6ZT1cIjEycHhcIlxuICAgICAgICAgICAgICBjbGFzcz1cInEtbXItc21cIlxuICAgICAgICAgICAgICBAY2xpY2s9XCJcbiAgICAgICAgICAgICAgICB0aGlzLm1lbnVfdHlwZSA9IHRoaXMubWVudV90eXBlID09ICdsaXN0JyA/ICdjb2x1bW4nIDogJ2xpc3QnXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxxLWljb24gOm5hbWU9XCJzd2l0Y2hJY29uTGlzdFwiIC8+XG4gICAgICAgICAgICA8L3EtYnRuPlxuICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgIDpjb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5NjAwJyA6ICdteWdyZXknXCJcbiAgICAgICAgICAgICAgOnRleHQtY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTMwMCcgOiAnZGFyaydcIlxuICAgICAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICAgICAgcm91bmRcbiAgICAgICAgICAgICAgc2l6ZT1cIjEycHhcIlxuICAgICAgICAgICAgICBAY2xpY2s9XCJ0aGlzLiRyZWZzLm1lcmNoYW50X2ZpbHRlci5maWx0ZXIgPSB0cnVlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHEtaWNvbiBuYW1lPVwidHVuZVwiIC8+XG4gICAgICAgICAgICA8L3EtYnRuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPCEtLSByb3cgLS0+XG5cbiAgICAgICAgPGRpdiB2LWlmPVwibG9hZGluZyAmJiBwYWdlIDw9IDBcIiBjbGFzcz1cInRleHQtZ3JleSBxLXB0LXNtIHEtcGIteHNcIj5cbiAgICAgICAgICA8cS1za2VsZXRvbiB0eXBlPVwidGV4dFwiIHN0eWxlPVwid2lkdGg6IDEwMHB4XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICB2LWVsc2VcbiAgICAgICAgICBjbGFzcz1cInRleHQtZ3JleSBxLXB0LXNtIHEtcGIteHNcIlxuICAgICAgICAgIDpjbGFzcz1cInsgJ21pbi1oZWlnaHQtaW5oZXJpdCBmbGV4IGZsZXgtY2VudGVyIHEtcGEtbm9uZSc6ICFoYXNEYXRhIH1cIlxuICAgICAgICA+XG4gICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJoYXNEYXRhXCI+XG4gICAgICAgICAgICB7eyB0b3RhbF9mb3VuZCB9fSB7eyAkdChcInJlc3RhdXJhbnRcIikgfX1cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICAgICAgICA8Tm9SZXN1bHRzIEBmaWx0ZXItYWdhaW49XCJmaWx0ZXJBZ2FpblwiPjwvTm9SZXN1bHRzPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9ESVY+XG5cbiAgICAgIDxxLWluZmluaXRlLXNjcm9sbCByZWY9XCJuc2Nyb2xsXCIgQGxvYWQ9XCJnZXRNZXJjaGFudEZlZWRcIiA6b2Zmc2V0PVwiMjUwXCI+XG4gICAgICAgIDxxLWxpc3QgY2xhc3M9XCJuby13cmFwXCI+XG4gICAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiaXRlbXNkYXRhIGluIGRhdGFcIiA6a2V5PVwiaXRlbXNkYXRhXCI+XG4gICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgIHYtZm9yPVwiaXRlbXMgaW4gaXRlbXNkYXRhXCJcbiAgICAgICAgICAgICAgOmtleT1cIml0ZW1zLm1lcmNoYW50X2lkXCJcbiAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgIHYtcmlwcGxlXG4gICAgICAgICAgICAgIEBjbGljay5zdG9wPVwiXG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgbmFtZTogJ21lbnUnLFxuICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIHNsdWc6IGl0ZW1zLnJlc3RhdXJhbnRfc2x1ZyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPCEtLSA6dG89XCJ7IG5hbWU6ICdtZW51JywgcGFyYW1zOiB7IHNsdWc6IGl0ZW1zLnJlc3RhdXJhbnRfc2x1ZyB9IH1cIiAtLT5cbiAgICAgICAgICAgICAgPE1lcmNoYW50TGlzdElubGluZVxuICAgICAgICAgICAgICAgIHYtaWY9XCJtZW51X3R5cGUgPT09ICdsaXN0J1wiXG4gICAgICAgICAgICAgICAgOml0ZW1zPVwiaXRlbXNcIlxuICAgICAgICAgICAgICAgIDpjdWlzaW5lPVwiY3Vpc2luZVwiXG4gICAgICAgICAgICAgICAgOnJldmlld3M9XCJyZXZpZXdzXCJcbiAgICAgICAgICAgICAgICA6ZXN0aW1hdGlvbj1cImVzdGltYXRpb25cIlxuICAgICAgICAgICAgICAgIDpzZXJ2aWNlcz1cInNlcnZpY2VzXCJcbiAgICAgICAgICAgICAgICA6aXRlbXNfbWluX21heD1cIml0ZW1zX21pbl9tYXhcIlxuICAgICAgICAgICAgICAgIDpwcm9tb3M9XCJwcm9tb3NcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8TWVyY2hhbnRMaXN0VHBsXG4gICAgICAgICAgICAgICAgdi1lbHNlXG4gICAgICAgICAgICAgICAgOml0ZW1zPVwiaXRlbXNcIlxuICAgICAgICAgICAgICAgIDpjdWlzaW5lPVwiY3Vpc2luZVwiXG4gICAgICAgICAgICAgICAgOnJldmlld3M9XCJyZXZpZXdzXCJcbiAgICAgICAgICAgICAgICA6ZXN0aW1hdGlvbj1cImVzdGltYXRpb25cIlxuICAgICAgICAgICAgICAgIDpzZXJ2aWNlcz1cInNlcnZpY2VzXCJcbiAgICAgICAgICAgICAgICA6aXRlbXNfbWluX21heD1cIml0ZW1zX21pbl9tYXhcIlxuICAgICAgICAgICAgICAgIDpwcm9tb3M9XCJwcm9tb3NcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9xLWxpc3Q+XG5cbiAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpsb2FkaW5nPlxuICAgICAgICAgIDxNZXJjaGFudExpc3RTa2VsZXRvbiB2LWlmPVwicGFnZSA8PSAwXCIgLz5cbiAgICAgICAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cInJvdyBqdXN0aWZ5LWNlbnRlciBhYnNvbHV0ZS1ib3R0b21cIj5cbiAgICAgICAgICAgIDxxLXNwaW5uZXItZG90cyBjb2xvcj1cInNlY29uZGFyeVwiIHNpemU9XCI0MHB4XCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvcS1pbmZpbml0ZS1zY3JvbGw+XG5cbiAgICAgIDxTb3J0TGlzdCByZWY9XCJzb3J0X2xpc3RcIiBAYWZ0ZXItc2VsZWN0c29ydD1cImFmdGVyU2VsZWN0c29ydFwiPjwvU29ydExpc3Q+XG5cbiAgICAgIDxNZXJjaGFudEZpbHRlclxuICAgICAgICByZWY9XCJtZXJjaGFudF9maWx0ZXJcIlxuICAgICAgICA6Y3Vpc2luZV9kYXRhPVwiRGF0YVN0b3JlLmN1aXNpbmVcIlxuICAgICAgICBAYXBwbHktZmlsdGVyPVwiYXBwbHlGaWx0ZXJcIlxuICAgICAgICBAcnVuLWZpbHRlcj1cInJ1bkZpbHRlclwiXG4gICAgICAvPlxuICAgIDwvcS1wYWdlPlxuICA8L3EtcHVsbC10by1yZWZyZXNoPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBBUElpbnRlcmZhY2UgZnJvbSBcInNyYy9hcGkvQVBJaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBkZWZpbmVBc3luY0NvbXBvbmVudCwgcmVmIH0gZnJvbSBcInZ1ZVwiO1xuaW1wb3J0IHsgdXNlQ2FydFN0b3JlIH0gZnJvbSBcInN0b3Jlcy9DYXJ0U3RvcmVcIjtcbmltcG9ydCB7IHVzZURhdGFTdG9yZSB9IGZyb20gXCJzdG9yZXMvRGF0YVN0b3JlXCI7XG5pbXBvcnQgYXV0aCBmcm9tIFwic3JjL2FwaS9hdXRoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJGZWVkUGFnZVwiLFxuICBjb21wb25lbnRzOiB7XG4gICAgTWVyY2hhbnRMaXN0SW5saW5lOiBkZWZpbmVBc3luY0NvbXBvbmVudCgoKSA9PlxuICAgICAgaW1wb3J0KFwiY29tcG9uZW50cy9NZXJjaGFudExpc3RJbmxpbmUudnVlXCIpXG4gICAgKSxcbiAgICBNZXJjaGFudExpc3RUcGw6IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+XG4gICAgICBpbXBvcnQoXCJjb21wb25lbnRzL01lcmNoYW50TGlzdFRwbC52dWVcIilcbiAgICApLFxuICAgIE1lcmNoYW50TGlzdFNrZWxldG9uOiBkZWZpbmVBc3luY0NvbXBvbmVudCgoKSA9PlxuICAgICAgaW1wb3J0KFwiY29tcG9uZW50cy9NZXJjaGFudExpc3RTa2VsZXRvbi52dWVcIilcbiAgICApLFxuICAgIFNvcnRMaXN0OiBkZWZpbmVBc3luY0NvbXBvbmVudCgoKSA9PiBpbXBvcnQoXCJjb21wb25lbnRzL1NvcnRMaXN0LnZ1ZVwiKSksXG4gICAgTWVyY2hhbnRGaWx0ZXI6IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+XG4gICAgICBpbXBvcnQoXCJjb21wb25lbnRzL01lcmNoYW50RmlsdGVyLnZ1ZVwiKVxuICAgICksXG4gICAgTm9SZXN1bHRzOiBkZWZpbmVBc3luY0NvbXBvbmVudCgoKSA9PiBpbXBvcnQoXCJjb21wb25lbnRzL05vUmVzdWx0cy52dWVcIikpLFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgbGlzdF90eXBlOiBcIlwiLFxuICAgICAgZmVhdHVyZWRfaWQ6IFwiXCIsXG4gICAgICBkYXRhOiBbXSxcbiAgICAgIGN1aXNpbmU6IFtdLFxuICAgICAgcmV2aWV3czogW10sXG4gICAgICBlc3RpbWF0aW9uOiBbXSxcbiAgICAgIHNlcnZpY2VzOiBbXSxcbiAgICAgIGl0ZW1zX21pbl9tYXg6IFtdLFxuICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICBwYWdlOiAwLFxuICAgICAgc29ydF9ieTogXCJcIixcbiAgICAgIHRvdGFsX2ZvdW5kOiAwLFxuICAgICAgZmlsdGVyczogW10sXG4gICAgICB0cmFuc2FjdGlvblR5cGU6IFwiXCIsXG4gICAgICBtZW51X3R5cGU6IFwiY29sdW1uXCIsXG4gICAgICBjdWlzaW5lX2lkOiBcIlwiLFxuICAgICAgY3Vpc2luZV9uYW1lOiBcIlwiLFxuICAgICAgcGFnZV90aXRsZTogXCJcIixcbiAgICAgIHByb21vczogW10sXG4gICAgICBwYXlsb2FkOiBbXG4gICAgICAgIFwiY3Vpc2luZVwiLFxuICAgICAgICBcInJldmlld3NcIixcbiAgICAgICAgXCJlc3RpbWF0aW9uXCIsXG4gICAgICAgIFwic2VydmljZXNcIixcbiAgICAgICAgXCJpdGVtc19taW5fbWF4XCIsXG4gICAgICAgIFwib2ZmZXJzXCIsXG4gICAgICAgIFwicHJvbW9cIixcbiAgICAgIF0sXG4gICAgfTtcbiAgfSxcbiAgc2V0dXAoKSB7XG4gICAgY29uc3QgQ2FydFN0b3JlID0gdXNlQ2FydFN0b3JlKCk7XG4gICAgY29uc3QgRGF0YVN0b3JlID0gdXNlRGF0YVN0b3JlKCk7XG4gICAgcmV0dXJuIHsgQ2FydFN0b3JlLCBEYXRhU3RvcmUgfTtcbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBtZW51X3R5cGUobmV3dmFsLCBvbGR2YWwpIHtcbiAgICAgIGNvbnNvbGUubG9nKG5ld3ZhbCk7XG4gICAgICBBUElpbnRlcmZhY2Uuc2V0U3RvcmFnZShcImxpc3RUeXBlXCIsIG5ld3ZhbCk7XG4gICAgfSxcbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLnRyYW5zYWN0aW9uVHlwZSA9IEFQSWludGVyZmFjZS5nZXRTdG9yYWdlKFwidHJhbnNhY3Rpb25fdHlwZVwiKTtcbiAgICB0aGlzLmxpc3RfdHlwZSA9IHRoaXMuJHJvdXRlLnF1ZXJ5LnF1ZXJ5O1xuICAgIHRoaXMuZmVhdHVyZWRfaWQgPSB0aGlzLiRyb3V0ZS5xdWVyeS5mZWF0dXJlZF9pZDtcbiAgICB0aGlzLmN1aXNpbmVfaWQgPSB0aGlzLiRyb3V0ZS5xdWVyeS5jdWlzaW5lX2lkO1xuICAgIHRoaXMuY3Vpc2luZV9uYW1lID0gdGhpcy4kcm91dGUucXVlcnkuY3Vpc2luZV9uYW1lO1xuICAgIHRoaXMucGFnZV90aXRsZSA9IHRoaXMuJHJvdXRlLnF1ZXJ5LnBhZ2VfdGl0bGU7XG5cbiAgICBpZiAodGhpcy5jdWlzaW5lX2lkID4gMCkge1xuICAgICAgdGhpcy5maWx0ZXJzID0ge1xuICAgICAgICBjdWlzaW5lOiBbdGhpcy5jdWlzaW5lX2lkXSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgbGV0IGxpc3RUeXBlID0gQVBJaW50ZXJmYWNlLmdldFN0b3JhZ2UoXCJsaXN0VHlwZVwiKTtcbiAgICBpZiAoIUFQSWludGVyZmFjZS5lbXB0eShsaXN0VHlwZSkpIHtcbiAgICAgIHRoaXMubWVudV90eXBlID0gbGlzdFR5cGU7XG4gICAgfVxuXG4gICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuRGF0YVN0b3JlLmZlYXR1cmVkX2RhdGEpLmxlbmd0aCA8PSAwKSB7XG4gICAgICB0aGlzLkRhdGFTdG9yZS5nZXRGZWF0dXJlZExpc3QoKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuRGF0YVN0b3JlLmhhc0RhdGFDdWlzaW5lKCkpIHtcbiAgICAgIHRoaXMuRGF0YVN0b3JlLkN1aXNpbmVMaXN0KCk7XG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGhhc0RhdGEoKSB7XG4gICAgICBpZiAodGhpcy5kYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICBzd2l0Y2hJY29uTGlzdCgpIHtcbiAgICAgIGlmICh0aGlzLm1lbnVfdHlwZSA9PSBcImxpc3RcIikge1xuICAgICAgICByZXR1cm4gXCJncmlkX3ZpZXdcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBcInJlb3JkZXJcIjtcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgcmVmcmVzaChkb25lKSB7XG4gICAgICBkb25lKCk7XG4gICAgICB0aGlzLnJlc2V0UGFnaW5hdGlvbigpO1xuICAgIH0sXG4gICAgZ2V0TWVyY2hhbnRGZWVkKGluZGV4LCBkb25lKSB7XG4gICAgICBjb25zdCAkcGFyYW1zID0ge1xuICAgICAgICBsaXN0X3R5cGU6IHRoaXMubGlzdF90eXBlLFxuICAgICAgICBmZWF0dXJlZF9pZDogdGhpcy5mZWF0dXJlZF9pZCxcbiAgICAgICAgcGxhY2VfaWQ6IEFQSWludGVyZmFjZS5nZXRTdG9yYWdlKFwicGxhY2VfaWRcIiksXG4gICAgICAgIHBheWxvYWQ6IHRoaXMucGF5bG9hZCxcbiAgICAgICAgcGFnZTogaW5kZXgsXG4gICAgICAgIHNvcnRfYnk6IHRoaXMuc29ydF9ieSxcbiAgICAgICAgZmlsdGVyczogdGhpcy5maWx0ZXJzLFxuICAgICAgfTtcbiAgICAgIGlmICh0aGlzLmxpc3RfdHlwZSA9PT0gXCJmZWF0dXJlZFwiKSB7XG4gICAgICAgICRwYXJhbXMuZmVhdHVyZWRfaWQgPSB0aGlzLmZlYXR1cmVkX2lkO1xuICAgICAgfVxuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgaWYgKGF1dGguYXV0aGVudGljYXRlZCgpKSB7XG4gICAgICAgIEFQSWludGVyZmFjZS5mZXRjaERhdGFCeVRva2VuKFwiZ2V0TWVyY2hhbnRGZWVkMlwiLCAkcGFyYW1zKVxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBhZ2UgPSBpbmRleDtcbiAgICAgICAgICAgIGlmIChkYXRhLmNvZGUgPT0gMSkge1xuICAgICAgICAgICAgICB0aGlzLmRhdGEucHVzaChkYXRhLmRldGFpbHMuZGF0YSk7XG4gICAgICAgICAgICAgIHRoaXMuY3Vpc2luZSA9IGRhdGEuZGV0YWlscy5jdWlzaW5lO1xuICAgICAgICAgICAgICB0aGlzLnJldmlld3MgPSBkYXRhLmRldGFpbHMucmV2aWV3cztcbiAgICAgICAgICAgICAgdGhpcy5lc3RpbWF0aW9uID0gZGF0YS5kZXRhaWxzLmVzdGltYXRpb247XG4gICAgICAgICAgICAgIHRoaXMuc2VydmljZXMgPSBkYXRhLmRldGFpbHMuc2VydmljZXM7XG4gICAgICAgICAgICAgIHRoaXMuaXRlbXNfbWluX21heCA9IGRhdGEuZGV0YWlscy5pdGVtc19taW5fbWF4O1xuICAgICAgICAgICAgICB0aGlzLnRvdGFsX2ZvdW5kID0gZGF0YS5kZXRhaWxzLnRvdGFsX2ZvdW5kO1xuICAgICAgICAgICAgICB0aGlzLnByb21vcyA9IGRhdGEuZGV0YWlscy5wcm9tb3M7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnRvdGFsX2ZvdW5kID0gZGF0YS5kZXRhaWxzLnRvdGFsX2ZvdW5kO1xuICAgICAgICAgICAgICBpZiAodGhpcy4kcmVmcy5uc2Nyb2xsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5uc2Nyb2xsLnN0b3AoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuJHJlZnMubnNjcm9sbCkge1xuICAgICAgICAgICAgICB0aGlzLiRyZWZzLm5zY3JvbGwuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50b3RhbF9mb3VuZCA9IDA7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBkb25lKCk7XG4gICAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBBUElpbnRlcmZhY2UuZ2V0TWVyY2hhbnRGZWVkKCRwYXJhbXMpXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGFnZSA9IGluZGV4O1xuICAgICAgICAgICAgaWYgKGRhdGEuY29kZSA9PSAxKSB7XG4gICAgICAgICAgICAgIHRoaXMuZGF0YS5wdXNoKGRhdGEuZGV0YWlscy5kYXRhKTtcbiAgICAgICAgICAgICAgdGhpcy5jdWlzaW5lID0gZGF0YS5kZXRhaWxzLmN1aXNpbmU7XG4gICAgICAgICAgICAgIHRoaXMucmV2aWV3cyA9IGRhdGEuZGV0YWlscy5yZXZpZXdzO1xuICAgICAgICAgICAgICB0aGlzLmVzdGltYXRpb24gPSBkYXRhLmRldGFpbHMuZXN0aW1hdGlvbjtcbiAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlcyA9IGRhdGEuZGV0YWlscy5zZXJ2aWNlcztcbiAgICAgICAgICAgICAgdGhpcy5pdGVtc19taW5fbWF4ID0gZGF0YS5kZXRhaWxzLml0ZW1zX21pbl9tYXg7XG4gICAgICAgICAgICAgIHRoaXMudG90YWxfZm91bmQgPSBkYXRhLmRldGFpbHMudG90YWxfZm91bmQ7XG4gICAgICAgICAgICAgIHRoaXMucHJvbW9zID0gZGF0YS5kZXRhaWxzLnByb21vcztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMudG90YWxfZm91bmQgPSBkYXRhLmRldGFpbHMudG90YWxfZm91bmQ7XG4gICAgICAgICAgICAgIGlmICh0aGlzLiRyZWZzLm5zY3JvbGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLm5zY3JvbGwuc3RvcCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy4kcmVmcy5uc2Nyb2xsKSB7XG4gICAgICAgICAgICAgIHRoaXMuJHJlZnMubnNjcm9sbC5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRvdGFsX2ZvdW5kID0gMDtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFmdGVyU2VsZWN0c29ydChkYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImFmdGVyU2VsZWN0c29ydD0+XCIgKyBkYXRhKTtcbiAgICAgIHRoaXMuc29ydF9ieSA9IGRhdGE7XG4gICAgICB0aGlzLnJlc2V0UGFnaW5hdGlvbigpO1xuICAgICAgdGhpcy5wYWdlID0gMDtcbiAgICB9LFxuICAgIGFwcGx5RmlsdGVyKGRhdGEpIHtcbiAgICAgIHRoaXMuZmlsdGVycyA9IGRhdGE7XG4gICAgICB0aGlzLmZpbHRlcnMudHJhbnNhY3Rpb25fdHlwZSA9IHRoaXMudHJhbnNhY3Rpb25UeXBlO1xuICAgICAgdGhpcy5yZXNldFBhZ2luYXRpb24oKTtcbiAgICAgIHRoaXMucGFnZSA9IDA7XG4gICAgfSxcbiAgICByZXNldFBhZ2luYXRpb24oKSB7XG4gICAgICB0aGlzLnBhZ2UgPSAwO1xuICAgICAgdGhpcy5kYXRhID0gW107XG4gICAgICB0aGlzLiRyZWZzLm5zY3JvbGwucmVzZXQoKTtcbiAgICAgIHRoaXMuJHJlZnMubnNjcm9sbC5yZXN1bWUoKTtcbiAgICAgIHRoaXMuJHJlZnMubnNjcm9sbC50cmlnZ2VyKCk7XG4gICAgfSxcbiAgICBmaWx0ZXJBZ2FpbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZmlsdGVyQWdhaW5cIik7XG4gICAgICB0aGlzLiRyZWZzLm1lcmNoYW50X2ZpbHRlci5maWx0ZXIgPSB0cnVlO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iXSwiZmlsZSI6ImFzc2V0cy9GZWVkUGFnZS4yOWQxZGZkOS5qcyJ9
