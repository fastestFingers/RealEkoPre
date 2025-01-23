import { v as createComponent, _ as _export_sfc, l as defineAsyncComponent, m as APIinterface, R as useDataStore, r as ref, aX as useRouter, w as watch, o as onMounted, aw as auth, n as resolveComponent, p as openBlock, q as createBlock, t as withCtx, f as createVNode, V as createElementBlock, a7 as normalizeClass, aY as QInput, at as QIcon, aA as createCommentVNode, U as createBaseVNode, a6 as createTextVNode, Z as toDisplayString, Y as QBtn, F as Fragment, X as renderList, u as __vitePreload } from "./index.61ed5618.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { u as usePageStickyProps, a as usePageSticky } from "./use-page-sticky.447afe02.js";
import { Q as QSpace } from "./QSpace.f164c087.js";
import { Q as QSkeleton } from "./QSkeleton.39737398.js";
import { Q as QTab } from "./QTab.8fcc65d0.js";
import { Q as QTabs } from "./QTabs.2f5e29cb.js";
import { Q as QTabPanels, a as QTabPanel } from "./QTabPanels.2a6730dc.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import { Q as QPullToRefresh } from "./QPullToRefresh.3d10c02d.js";
import { u as useDeliveryschedStore } from "./DeliverySched.4e9605bf.js";
import { u as usePlaceStore } from "./PlaceStore.ccc50efb.js";
import "./QResizeObserver.d08dce3c.js";
import "./rtl.f3ed811c.js";
import "./use-panel.225d73f4.js";
import "./touch.96e0ae37.js";
import "./selection.50b4cb0c.js";
import "./use-render-cache.b9e045af.js";
import "./format.7f7370d3.js";
var QPageSticky = createComponent({
  name: "QPageSticky",
  props: usePageStickyProps,
  setup(_, { slots }) {
    const { getStickyContent } = usePageSticky();
    return () => getStickyContent(slots);
  }
});
const _sfc_main = {
  name: "HomePage",
  components: {
    HomeBanner: defineAsyncComponent(() => __vitePreload(() => import("./HomeBanner.53dc328c.js"), true ? ["assets/HomeBanner.53dc328c.js","assets/swiper.min.5cdecd27.css","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QSkeleton.39737398.js","assets/QImg.6c27044c.js","assets/swiper-slide.8a0c58df.js","assets/CartStore.484ff101.js"] : void 0)),
    CuisineCarousel: defineAsyncComponent(
      () => __vitePreload(() => import("./CuisineCarousel.6558095f.js"), true ? ["assets/CuisineCarousel.6558095f.js","assets/swiper.min.5cdecd27.css","assets/QSkeleton.39737398.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/swiper-slide.8a0c58df.js"] : void 0)
    ),
    BrowseCuisine: defineAsyncComponent(
      () => __vitePreload(() => import("./BrowseCuisine.c0558879.js"), true ? ["assets/BrowseCuisine.c0558879.js","assets/QToolbarTitle.03eaf2d6.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QSpace.f164c087.js","assets/QToolbar.c8fc6962.js"] : void 0)
    ),
    MerchantCarousel: defineAsyncComponent(
      () => __vitePreload(() => import("./MerchantCarousel.11bd9ced.js"), true ? ["assets/MerchantCarousel.11bd9ced.js","assets/swiper.min.5cdecd27.css","assets/QSkeleton.39737398.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QChip.f183a4f1.js","assets/swiper-slide.8a0c58df.js"] : void 0)
    ),
    MerchantList: defineAsyncComponent(
      () => __vitePreload(() => import("./MerchantList.b7830557.js"), true ? ["assets/MerchantList.b7830557.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QList.b69a7e5b.js","assets/QImg.6c27044c.js","assets/ClosePopup.9d17b53c.js"] : void 0)
    ),
    MerchantFilter: defineAsyncComponent(
      () => __vitePreload(() => import("./MerchantFilter.dba432b5.js"), true ? ["assets/MerchantFilter.dba432b5.js","assets/QToolbarTitle.03eaf2d6.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QSpace.f164c087.js","assets/QToolbar.c8fc6962.js","assets/QBtnToggle.6ffa195b.js","assets/QBtnGroup.abc2d1c7.js","assets/QPullToRefresh.3d10c02d.js","assets/touch.96e0ae37.js","assets/selection.50b4cb0c.js","assets/format.7f7370d3.js","assets/QFooter.571ac042.js","assets/QResizeObserver.d08dce3c.js","assets/DeliverySched.4e9605bf.js"] : void 0)
    ),
    NoResults: defineAsyncComponent(() => __vitePreload(() => import("./NoResults.cda4282a.js"), true ? ["assets/NoResults.cda4282a.js","assets/QImg.6c27044c.js","assets/index.61ed5618.js","assets/index.dbee30c0.css"] : void 0))
  },
  setup() {
    const transactionType = APIinterface.getStorage("transaction_type");
    const DataStore = useDataStore();
    const filters = ref({
      transaction_type: transactionType
    });
    const topResto = ref("popular");
    const featuredTab = ref("all");
    const featured = ref([]);
    const q = ref("");
    const slide = ref(1);
    const cuisineList = ref([]);
    const $router = useRouter();
    const hasResult = ref(true);
    const merchant_filter = ref(void 0);
    const merchantList = ref(null);
    const merchantRefCarousel = ref(null);
    const merchantRefCarousel2 = ref(null);
    const userData = ref([]);
    const isSticky = ref(false);
    const DeliveryschedStore = useDeliveryschedStore();
    watch(
      () => DeliveryschedStore.new_transaction_type,
      (newValue, oldValue) => {
        console.log("DeliveryschedStore=>" + newValue);
        DeliveryschedStore.filters.transaction_type = newValue;
        applyFilter(DeliveryschedStore.filters);
      }
    );
    watch(
      () => DeliveryschedStore.main_layout_header,
      (newValue, oldValue) => {
        isSticky.value = !newValue;
      }
    );
    const PlaceStore = usePlaceStore();
    watch(
      () => PlaceStore.data,
      (newValue, oldValue) => {
        DataStore.filters.place_id = newValue.place_id;
        applyFilter(DataStore.filters);
      }
    );
    watch(
      () => DataStore.list_loading_handle,
      (newValue, oldValue) => {
        if (featuredTab.value == "all") {
          if (Object.keys(DataStore.list_data).length > 0) {
            hasResult.value = true;
          } else {
            hasResult.value = false;
          }
        }
      }
    );
    onMounted(() => {
      if (auth.authenticated()) {
        userData.value = auth.getUser();
      } else {
        userData.value = false;
      }
      if (Object.keys(DataStore.filters).length <= 0) {
        applyFilter({
          transaction_type: transactionType
        });
      }
      if (Object.keys(DataStore.featured_data).length <= 0) {
        DataStore.getFeaturedList();
      }
    });
    const afterGetdata = (data) => {
      cuisineList.value = data;
    };
    const applyFilter = (data) => {
      hasResult.value = true;
      DataStore.filters = data;
    };
    const goSearch = () => {
      $router.push("/search");
    };
    const runFilter = () => {
      console.debug("runFilter");
    };
    const afterResults = (data) => {
      console.log("afterResults =>" + data);
      hasResult.value = data;
    };
    const filterAgain = () => {
      console.log("filterAgain");
      merchant_filter.value.filter = true;
    };
    const refresh = (done) => {
      DataStore.getBanner();
      DataStore.CuisineList();
      DataStore.getFeaturedList();
      applyFilter({
        transaction_type: transactionType
      });
      setTimeout(() => {
        done();
      }, 1e3);
    };
    return {
      filters,
      topResto,
      q,
      slide,
      cuisineList,
      afterGetdata,
      applyFilter,
      goSearch,
      runFilter,
      merchantList,
      merchantRefCarousel,
      merchantRefCarousel2,
      featuredTab,
      featured,
      afterResults,
      hasResult,
      DataStore,
      userData,
      filterAgain,
      merchant_filter,
      refresh,
      isSticky,
      PlaceStore
    };
  }
};
const _hoisted_1 = { class: "text-weight-bold q-ma-none" };
const _hoisted_2 = {
  key: 0,
  class: "text-secondary"
};
const _hoisted_3 = {
  key: 1,
  class: "text-secondary"
};
const _hoisted_4 = { class: "text-weight-medium q-ma-none" };
const _hoisted_5 = { class: "q-mt-md" };
const _hoisted_6 = {
  key: 0,
  class: "row justify-between"
};
const _hoisted_7 = {
  key: 1,
  class: "row"
};
const _hoisted_8 = { class: "col" };
const _hoisted_9 = { class: "text-h5 text-weight-medium" };
const _hoisted_10 = { class: "col text-right" };
const _hoisted_11 = { class: "q-mt-sm q-mb-xs" };
const _hoisted_12 = {
  key: 0,
  class: "row justify-between"
};
const _hoisted_13 = {
  key: 0,
  class: "row"
};
const _hoisted_14 = { class: "col" };
const _hoisted_15 = { class: "text-h5 text-weight-medium" };
const _hoisted_16 = { class: "col text-right" };
const _hoisted_17 = { class: "q-mt-sm q-mb-xs" };
const _hoisted_18 = {
  key: 0,
  class: "row justify-between"
};
const _hoisted_19 = {
  key: 0,
  class: "row"
};
const _hoisted_20 = { class: "col" };
const _hoisted_21 = { class: "text-h5 text-weight-medium" };
const _hoisted_22 = { class: "col text-right" };
const _hoisted_23 = { class: "text-center q-pa-sm" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HomeBanner = resolveComponent("HomeBanner");
  const _component_CuisineCarousel = resolveComponent("CuisineCarousel");
  const _component_MerchantCarousel = resolveComponent("MerchantCarousel");
  const _component_MerchantList = resolveComponent("MerchantList");
  const _component_NoResults = resolveComponent("NoResults");
  const _component_MerchantFilter = resolveComponent("MerchantFilter");
  const _component_BrowseCuisine = resolveComponent("BrowseCuisine");
  return openBlock(), createBlock(QPullToRefresh, { onRefresh: $setup.refresh }, {
    default: withCtx(() => [
      createVNode(QPage, {
        padding: "",
        class: normalizeClass(["q-pl-md q-pr-md", { "flex flex-center": !$setup.hasResult }])
      }, {
        default: withCtx(() => [
          $setup.hasResult ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            $setup.isSticky ? (openBlock(), createBlock(QPageSticky, {
              key: 0,
              expand: "",
              position: "top",
              class: "z-top"
            }, {
              default: withCtx(() => [
                createVNode(QToolbar, {
                  class: normalizeClass(["text-dark q-pl-md q-pr-md q-pt-sm q-pb-sm", {
                    "bg-mydark": _ctx.$q.dark.mode,
                    "bg-white": !_ctx.$q.dark.mode
                  }])
                }, {
                  default: withCtx(() => [
                    createVNode(QInput, {
                      modelValue: $setup.q,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.q = $event),
                      label: _ctx.$t("Search desired food and restaurants"),
                      onClick: $setup.goSearch,
                      readonly: "",
                      outlined: "",
                      "lazy-rules": "",
                      "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
                      "label-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                      borderless: "",
                      class: "input-borderless fit",
                      dense: ""
                    }, {
                      prepend: withCtx(() => [
                        createVNode(QIcon, {
                          name: "eva-search-outline",
                          size: "sm"
                        })
                      ]),
                      append: withCtx(() => [
                        createVNode(QIcon, {
                          name: "tune",
                          class: "cursor-pointer",
                          onClick: _cache[0] || (_cache[0] = ($event) => this.$refs.merchant_filter.filter = true),
                          size: "sm"
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "label", "onClick", "bg-color", "label-color"])
                  ]),
                  _: 1
                }, 8, ["class"])
              ]),
              _: 1
            })) : createCommentVNode("", true),
            createBaseVNode("h5", _hoisted_1, [
              createTextVNode(toDisplayString(_ctx.$t("Hello")) + ", ", 1),
              $setup.userData ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString($setup.userData.first_name), 1)) : (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(_ctx.$t("Guest")), 1))
            ]),
            createBaseVNode("p", _hoisted_4, toDisplayString(_ctx.$t("Find your delicious dish")), 1),
            createVNode(QSpace, { class: "q-pa-xs" }),
            createVNode(QInput, {
              modelValue: $setup.q,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.q = $event),
              label: _ctx.$t("Search desired food and restaurants"),
              onClick: $setup.goSearch,
              readonly: "",
              outlined: "",
              "lazy-rules": "",
              "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
              "label-color": _ctx.$q.dark.mode ? "grey300" : "grey",
              borderless: "",
              class: "input-borderless"
            }, {
              prepend: withCtx(() => [
                createVNode(QIcon, {
                  name: "eva-search-outline",
                  size: "sm"
                })
              ]),
              append: withCtx(() => [
                createVNode(QIcon, {
                  name: "tune",
                  class: "cursor-pointer",
                  onClick: _cache[2] || (_cache[2] = ($event) => this.$refs.merchant_filter.filter = true),
                  size: "sm"
                })
              ]),
              _: 1
            }, 8, ["modelValue", "label", "onClick", "bg-color", "label-color"]),
            createVNode(QSpace, { class: "q-pa-sm" }),
            createVNode(_component_HomeBanner, { ref: "home_banner" }, null, 512),
            createBaseVNode("div", _hoisted_5, [
              $setup.DataStore.loading_cuisine ? (openBlock(), createElementBlock("div", _hoisted_6, [
                createVNode(QSkeleton, {
                  type: "text",
                  style: { "width": "100px" }
                }),
                createVNode(QSkeleton, {
                  type: "text",
                  style: { "width": "50px" }
                })
              ])) : (openBlock(), createElementBlock("div", _hoisted_7, [
                createBaseVNode("div", _hoisted_8, [
                  createBaseVNode("div", _hoisted_9, toDisplayString(_ctx.$t("Explore Cuisine")), 1)
                ]),
                createBaseVNode("div", _hoisted_10, [
                  createVNode(QBtn, {
                    flat: "",
                    color: _ctx.$q.dark.mode ? "grey300" : "secondary",
                    label: _ctx.$t("Show All"),
                    "no-caps": "",
                    class: "text-weight-600",
                    dense: "",
                    onClick: _cache[4] || (_cache[4] = ($event) => this.$refs.browse_cuisine.modal = !this.$refs.browse_cuisine.modal)
                  }, null, 8, ["color", "label"])
                ])
              ]))
            ]),
            createVNode(_component_CuisineCarousel, {
              ref: "cuisine_carousel",
              design: 1,
              onAfterGetdata: $setup.afterGetdata,
              class: "q-pt-sm q-pb-md"
            }, null, 8, ["onAfterGetdata"]),
            createBaseVNode("div", _hoisted_11, [
              $setup.DataStore.car_loading[0] ? (openBlock(), createElementBlock("div", _hoisted_12, [
                createVNode(QSkeleton, {
                  type: "text",
                  style: { "width": "100px" }
                }),
                createVNode(QSkeleton, {
                  type: "text",
                  style: { "width": "50px" }
                })
              ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                $setup.DataStore.hasCarData(0) ? (openBlock(), createElementBlock("div", _hoisted_13, [
                  createBaseVNode("div", _hoisted_14, [
                    createBaseVNode("div", _hoisted_15, toDisplayString(_ctx.$t("Popular")), 1)
                  ]),
                  createBaseVNode("div", _hoisted_16, [
                    createVNode(QBtn, {
                      to: {
                        name: "feed",
                        query: { query: "featured", featured_id: $setup.topResto }
                      },
                      flat: "",
                      color: _ctx.$q.dark.mode ? "grey300" : "secondary",
                      label: _ctx.$t("Show All"),
                      "no-caps": "",
                      class: "text-weight-600",
                      dense: ""
                    }, null, 8, ["to", "color", "label"])
                  ])
                ])) : createCommentVNode("", true)
              ], 64))
            ]),
            createVNode(_component_MerchantCarousel, {
              ref: "merchantRefCarousel",
              list_type: "featured",
              featured_id: $setup.topResto,
              filters: $setup.DataStore.filters,
              index: 0
            }, null, 8, ["featured_id", "filters"]),
            createBaseVNode("div", _hoisted_17, [
              $setup.DataStore.car_loading[1] ? (openBlock(), createElementBlock("div", _hoisted_18, [
                createVNode(QSkeleton, {
                  type: "text",
                  style: { "width": "100px" }
                }),
                createVNode(QSkeleton, {
                  type: "text",
                  style: { "width": "50px" }
                })
              ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                $setup.DataStore.hasCarData(1) ? (openBlock(), createElementBlock("div", _hoisted_19, [
                  createBaseVNode("div", _hoisted_20, [
                    createBaseVNode("div", _hoisted_21, toDisplayString(_ctx.$t("Recommended")), 1)
                  ]),
                  createBaseVNode("div", _hoisted_22, [
                    createVNode(QBtn, {
                      to: {
                        name: "feed",
                        query: { query: "featured", featured_id: "recommended" }
                      },
                      flat: "",
                      color: _ctx.$q.dark.mode ? "grey300" : "secondary",
                      label: _ctx.$t("Show All"),
                      "no-caps": "",
                      class: "text-weight-600",
                      dense: ""
                    }, null, 8, ["color", "label"])
                  ])
                ])) : createCommentVNode("", true)
              ], 64))
            ]),
            createVNode(_component_MerchantCarousel, {
              ref: "merchantRefCarousel",
              list_type: "featured",
              featured_id: "recommended",
              filters: $setup.DataStore.filters,
              index: 1
            }, null, 8, ["filters"]),
            createVNode(QSpace, { class: "q-pa-xs" }),
            createVNode(QTabs, {
              modelValue: $setup.featuredTab,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.featuredTab = $event),
              dense: "",
              "active-color": "primary",
              "indicator-color": "primary",
              align: "left",
              "narrow-indicator": "",
              "no-caps": "",
              class: normalizeClass({
                "text-grey300": _ctx.$q.dark.mode,
                "text-dark": !_ctx.$q.dark.mode
              }),
              breakpoint: 0
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList($setup.DataStore.featured_data, (tabname, tabkey) => {
                  return openBlock(), createBlock(QTab, {
                    key: tabname,
                    name: tabkey,
                    label: tabname,
                    "content-class": "text-weight-500 "
                  }, null, 8, ["name", "label"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["modelValue", "class"]),
            createVNode(QTabPanels, {
              modelValue: $setup.featuredTab,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.featuredTab = $event),
              animated: "",
              class: normalizeClass({
                "bg-mydark text-white": _ctx.$q.dark.mode,
                "bg-white text-black": !_ctx.$q.dark.mode
              })
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList($setup.DataStore.featured_data, (tabname, tabkey) => {
                  return openBlock(), createBlock(QTabPanel, {
                    key: tabname,
                    name: tabkey,
                    label: tabname,
                    class: "q-pa-sm"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_MerchantList, {
                        ref_for: true,
                        ref: "merchantList",
                        list_type: "featured",
                        featured_id: tabkey,
                        filters: $setup.DataStore.filters,
                        onAfterResults: $setup.afterResults
                      }, null, 8, ["featured_id", "filters", "onAfterResults"]),
                      createBaseVNode("div", _hoisted_23, [
                        $setup.DataStore.hasFeed ? (openBlock(), createBlock(QBtn, {
                          key: 0,
                          color: _ctx.$q.dark.mode ? "grey300" : "secondary",
                          to: {
                            path: "feed",
                            query: {
                              query: "featured",
                              featured_id: tabkey
                            }
                          },
                          unelevated: "",
                          "no-caps": "",
                          flat: "",
                          dense: "",
                          label: _ctx.$t("Show All")
                        }, null, 8, ["color", "to", "label"])) : (openBlock(), createElementBlock("div", {
                          key: 1,
                          class: normalizeClass(["font12 q-pa-md", {
                            "text-grey300": _ctx.$q.dark.mode,
                            "text-dark": !_ctx.$q.dark.mode
                          }])
                        }, toDisplayString(_ctx.$t("No Results")), 3))
                      ])
                    ]),
                    _: 2
                  }, 1032, ["name", "label"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["modelValue", "class"])
          ], 64)) : (openBlock(), createBlock(_component_NoResults, {
            key: 1,
            onFilterAgain: $setup.filterAgain
          }, null, 8, ["onFilterAgain"])),
          createVNode(_component_MerchantFilter, {
            ref: "merchant_filter",
            cuisine_data: $setup.DataStore.cuisine,
            onApplyFilter: $setup.applyFilter,
            onRunFilter: $setup.runFilter
          }, null, 8, ["cuisine_data", "onApplyFilter", "onRunFilter"]),
          createVNode(_component_BrowseCuisine, { ref: "browse_cuisine" }, null, 512)
        ]),
        _: 1
      }, 8, ["class"])
    ]),
    _: 1
  }, 8, ["onRefresh"]);
}
var HomePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "HomePage.vue"]]);
export { HomePage as default };
//# sourceMappingURL=data:application/json;base64,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QSx3QkFDbkIsZ0JBQWUsT0FBWTtBQUFBO3NCQUU5QkksZ0JBNkJNLE9BN0JOLGFBNkJNO0FBQUEsd0JBNUJZLGlCQUFVLHdCQUN4QkwsWUFjUztBQUFBOzBCQWJOLE9BQU8sUUFBRyxLQUFLLE9BQUk7QUFBQSwwQkFDbkIsSUFBRTtBQUFBOzs7MkNBQStJO0FBQUE7OzBCQU9sSjtBQUFBLDBCQUNBO0FBQUEsMEJBQ0E7QUFBQSwwQkFDQTtBQUFBLDBCQUNDLE9BQU8sS0FBRTtBQUFBLCtFQUlaRyxtQkFRTTtBQUFBOzBCQVBKLHVCQUFNLGtCQUFnQjtBQUFBLDRDQUN3QixLQUFFLEdBQUMsS0FBSztBQUFBLDBDQUF3QyxLQUFFLEdBQUMsS0FBSztBQUFBOzJDQUtuRyxLQUFFO0FBQUE7Ozs7Ozs7O2tDQVFmSCxZQUFtRDtBQUFBO1lBQXZDLGVBQWMsT0FBVztBQUFBO1VBSXZDQyxZQUtFO0FBQUEsWUFKQSxLQUFJO0FBQUEsWUFDSCxjQUFjLE9BQVMsVUFBQztBQUFBLFlBQ3hCLGVBQWMsT0FBVztBQUFBLFlBQ3pCLGFBQVksT0FBUztBQUFBO1VBR3hCQSxZQUFxRCw0QkFBdEMsS0FBSSxpQkFBZ0I7QUFBQSIsIm5hbWVzIjpbIl9jcmVhdGVCbG9jayIsIl9jcmVhdGVWTm9kZSIsIl9ub3JtYWxpemVDbGFzcyIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfRnJhZ21lbnQiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX2NyZWF0ZVRleHRWTm9kZSIsIl9vcGVuQmxvY2siLCJfdG9EaXNwbGF5U3RyaW5nIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9wYWdlLXN0aWNreS9RUGFnZVN0aWNreS5qcyIsIi4uLy4uLy4uL3NyYy9wYWdlcy9Ib21lL0hvbWVQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmNyZWF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgdXNlUGFnZVN0aWNreSwgeyB1c2VQYWdlU3RpY2t5UHJvcHMgfSBmcm9tICcuL3VzZS1wYWdlLXN0aWNreS5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FQYWdlU3RpY2t5JyxcblxuICBwcm9wczogdXNlUGFnZVN0aWNreVByb3BzLFxuXG4gIHNldHVwIChfLCB7IHNsb3RzIH0pIHtcbiAgICBjb25zdCB7IGdldFN0aWNreUNvbnRlbnQgfSA9IHVzZVBhZ2VTdGlja3koKVxuICAgIHJldHVybiAoKSA9PiBnZXRTdGlja3lDb250ZW50KHNsb3RzKVxuICB9XG59KVxuIiwiPHRlbXBsYXRlPlxuICA8cS1wdWxsLXRvLXJlZnJlc2ggQHJlZnJlc2g9XCJyZWZyZXNoXCI+XG4gICAgPHEtcGFnZVxuICAgICAgcGFkZGluZ1xuICAgICAgY2xhc3M9XCJxLXBsLW1kIHEtcHItbWRcIlxuICAgICAgOmNsYXNzPVwieyAnZmxleCBmbGV4LWNlbnRlcic6ICFoYXNSZXN1bHQgfVwiXG4gICAgPlxuICAgICAgPCEtLSA8cS1zY3JvbGwtb2JzZXJ2ZXIgQHNjcm9sbD1cIm9uU2Nyb2xsXCIgLz4gLS0+XG4gICAgICA8dGVtcGxhdGUgdi1pZj1cImhhc1Jlc3VsdFwiPlxuICAgICAgICA8cS1wYWdlLXN0aWNreSBleHBhbmQgcG9zaXRpb249XCJ0b3BcIiBjbGFzcz1cInotdG9wXCIgdi1pZj1cImlzU3RpY2t5XCI+XG4gICAgICAgICAgPHEtdG9vbGJhclxuICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWRhcmsgcS1wbC1tZCBxLXByLW1kIHEtcHQtc20gcS1wYi1zbVwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICdiZy1teWRhcmsnOiAkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgICAgICdiZy13aGl0ZSc6ICEkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgICB9XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cS1pbnB1dFxuICAgICAgICAgICAgICB2LW1vZGVsPVwicVwiXG4gICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdTZWFyY2ggZGVzaXJlZCBmb29kIGFuZCByZXN0YXVyYW50cycpXCJcbiAgICAgICAgICAgICAgQGNsaWNrPVwiZ29TZWFyY2hcIlxuICAgICAgICAgICAgICByZWFkb25seVxuICAgICAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgICAgICBsYXp5LXJ1bGVzXG4gICAgICAgICAgICAgIDpiZy1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5NjAwJyA6ICdpbnB1dCdcIlxuICAgICAgICAgICAgICA6bGFiZWwtY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTMwMCcgOiAnZ3JleSdcIlxuICAgICAgICAgICAgICBib3JkZXJsZXNzXG4gICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtYm9yZGVybGVzcyBmaXRcIlxuICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OnByZXBlbmQ+XG4gICAgICAgICAgICAgICAgPHEtaWNvbiBuYW1lPVwiZXZhLXNlYXJjaC1vdXRsaW5lXCIgc2l6ZT1cInNtXCIgLz5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDphcHBlbmQ+XG4gICAgICAgICAgICAgICAgPHEtaWNvblxuICAgICAgICAgICAgICAgICAgbmFtZT1cInR1bmVcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICBAY2xpY2s9XCJ0aGlzLiRyZWZzLm1lcmNoYW50X2ZpbHRlci5maWx0ZXIgPSB0cnVlXCJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvcS1pbnB1dD5cbiAgICAgICAgICA8L3EtdG9vbGJhcj5cbiAgICAgICAgPC9xLXBhZ2Utc3RpY2t5PlxuXG4gICAgICAgIDxoNSBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGQgcS1tYS1ub25lXCI+XG4gICAgICAgICAge3sgJHQoXCJIZWxsb1wiKSB9fSxcbiAgICAgICAgICA8c3BhbiB2LWlmPVwidXNlckRhdGFcIiBjbGFzcz1cInRleHQtc2Vjb25kYXJ5XCI+e3tcbiAgICAgICAgICAgIHVzZXJEYXRhLmZpcnN0X25hbWVcbiAgICAgICAgICB9fTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiB2LWVsc2UgY2xhc3M9XCJ0ZXh0LXNlY29uZGFyeVwiPnt7ICR0KFwiR3Vlc3RcIikgfX08L3NwYW4+XG4gICAgICAgIDwvaDU+XG4gICAgICAgIDxwIGNsYXNzPVwidGV4dC13ZWlnaHQtbWVkaXVtIHEtbWEtbm9uZVwiPlxuICAgICAgICAgIHt7ICR0KFwiRmluZCB5b3VyIGRlbGljaW91cyBkaXNoXCIpIH19XG4gICAgICAgIDwvcD5cblxuICAgICAgICA8cS1zcGFjZSBjbGFzcz1cInEtcGEteHNcIj48L3Etc3BhY2U+XG5cbiAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICB2LW1vZGVsPVwicVwiXG4gICAgICAgICAgOmxhYmVsPVwiJHQoJ1NlYXJjaCBkZXNpcmVkIGZvb2QgYW5kIHJlc3RhdXJhbnRzJylcIlxuICAgICAgICAgIEBjbGljaz1cImdvU2VhcmNoXCJcbiAgICAgICAgICByZWFkb25seVxuICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgbGF6eS1ydWxlc1xuICAgICAgICAgIDpiZy1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5NjAwJyA6ICdpbnB1dCdcIlxuICAgICAgICAgIDpsYWJlbC1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICdncmV5J1wiXG4gICAgICAgICAgYm9yZGVybGVzc1xuICAgICAgICAgIGNsYXNzPVwiaW5wdXQtYm9yZGVybGVzc1wiXG4gICAgICAgID5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OnByZXBlbmQ+XG4gICAgICAgICAgICA8cS1pY29uIG5hbWU9XCJldmEtc2VhcmNoLW91dGxpbmVcIiBzaXplPVwic21cIiAvPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDphcHBlbmQ+XG4gICAgICAgICAgICA8cS1pY29uXG4gICAgICAgICAgICAgIG5hbWU9XCJ0dW5lXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgIEBjbGljaz1cInRoaXMuJHJlZnMubWVyY2hhbnRfZmlsdGVyLmZpbHRlciA9IHRydWVcIlxuICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3EtaW5wdXQ+XG5cbiAgICAgICAgPHEtc3BhY2UgY2xhc3M9XCJxLXBhLXNtXCI+PC9xLXNwYWNlPlxuXG4gICAgICAgIDxIb21lQmFubmVyIHJlZj1cImhvbWVfYmFubmVyXCIgLz5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicS1tdC1tZFwiPlxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiRGF0YVN0b3JlLmxvYWRpbmdfY3Vpc2luZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgPHEtc2tlbGV0b24gdHlwZT1cInRleHRcIiBzdHlsZT1cIndpZHRoOiAxMDBweFwiIC8+XG4gICAgICAgICAgICAgIDxxLXNrZWxldG9uIHR5cGU9XCJ0ZXh0XCIgc3R5bGU9XCJ3aWR0aDogNTBweFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDxkaXYgdi1lbHNlIGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg1IHRleHQtd2VpZ2h0LW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgIHt7ICR0KFwiRXhwbG9yZSBDdWlzaW5lXCIpIH19XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICAgIDpjb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICdzZWNvbmRhcnknXCJcbiAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnU2hvdyBBbGwnKVwiXG4gICAgICAgICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC13ZWlnaHQtNjAwXCJcbiAgICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICAgIEBjbGljaz1cIlxuICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5icm93c2VfY3Vpc2luZS5tb2RhbCA9XG4gICAgICAgICAgICAgICAgICAgICF0aGlzLiRyZWZzLmJyb3dzZV9jdWlzaW5lLm1vZGFsXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8Q3Vpc2luZUNhcm91c2VsXG4gICAgICAgICAgcmVmPVwiY3Vpc2luZV9jYXJvdXNlbFwiXG4gICAgICAgICAgOmRlc2lnbj1cIjFcIlxuICAgICAgICAgIEBhZnRlci1nZXRkYXRhPVwiYWZ0ZXJHZXRkYXRhXCJcbiAgICAgICAgICBjbGFzcz1cInEtcHQtc20gcS1wYi1tZFwiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInEtbXQtc20gcS1tYi14c1wiPlxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiRGF0YVN0b3JlLmNhcl9sb2FkaW5nWzBdXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICA8cS1za2VsZXRvbiB0eXBlPVwidGV4dFwiIHN0eWxlPVwid2lkdGg6IDEwMHB4XCIgLz5cbiAgICAgICAgICAgICAgPHEtc2tlbGV0b24gdHlwZT1cInRleHRcIiBzdHlsZT1cIndpZHRoOiA1MHB4XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgICAgIDxkaXYgdi1pZj1cIkRhdGFTdG9yZS5oYXNDYXJEYXRhKDApXCIgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg1IHRleHQtd2VpZ2h0LW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAge3sgJHQoXCJQb3B1bGFyXCIpIH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICAgIDp0bz1cIntcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2ZlZWQnLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogeyBxdWVyeTogJ2ZlYXR1cmVkJywgZmVhdHVyZWRfaWQ6IHRvcFJlc3RvIH0sXG4gICAgICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgICAgIDpjb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICdzZWNvbmRhcnknXCJcbiAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdTaG93IEFsbCcpXCJcbiAgICAgICAgICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC13ZWlnaHQtNjAwXCJcbiAgICAgICAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8TWVyY2hhbnRDYXJvdXNlbFxuICAgICAgICAgIHJlZj1cIm1lcmNoYW50UmVmQ2Fyb3VzZWxcIlxuICAgICAgICAgIGxpc3RfdHlwZT1cImZlYXR1cmVkXCJcbiAgICAgICAgICA6ZmVhdHVyZWRfaWQ9XCJ0b3BSZXN0b1wiXG4gICAgICAgICAgOmZpbHRlcnM9XCJEYXRhU3RvcmUuZmlsdGVyc1wiXG4gICAgICAgICAgOmluZGV4PVwiMFwiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInEtbXQtc20gcS1tYi14c1wiPlxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiRGF0YVN0b3JlLmNhcl9sb2FkaW5nWzFdXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICA8cS1za2VsZXRvbiB0eXBlPVwidGV4dFwiIHN0eWxlPVwid2lkdGg6IDEwMHB4XCIgLz5cbiAgICAgICAgICAgICAgPHEtc2tlbGV0b24gdHlwZT1cInRleHRcIiBzdHlsZT1cIndpZHRoOiA1MHB4XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgICAgIDxkaXYgdi1pZj1cIkRhdGFTdG9yZS5oYXNDYXJEYXRhKDEpXCIgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg1IHRleHQtd2VpZ2h0LW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAge3sgJHQoXCJSZWNvbW1lbmRlZFwiKSB9fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgICA6dG89XCJ7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmZWVkJyxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHsgcXVlcnk6ICdmZWF0dXJlZCcsIGZlYXR1cmVkX2lkOiAncmVjb21tZW5kZWQnIH0sXG4gICAgICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgICAgIDpjb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICdzZWNvbmRhcnknXCJcbiAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdTaG93IEFsbCcpXCJcbiAgICAgICAgICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC13ZWlnaHQtNjAwXCJcbiAgICAgICAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8TWVyY2hhbnRDYXJvdXNlbFxuICAgICAgICAgIHJlZj1cIm1lcmNoYW50UmVmQ2Fyb3VzZWxcIlxuICAgICAgICAgIGxpc3RfdHlwZT1cImZlYXR1cmVkXCJcbiAgICAgICAgICBmZWF0dXJlZF9pZD1cInJlY29tbWVuZGVkXCJcbiAgICAgICAgICA6ZmlsdGVycz1cIkRhdGFTdG9yZS5maWx0ZXJzXCJcbiAgICAgICAgICA6aW5kZXg9XCIxXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8cS1zcGFjZSBjbGFzcz1cInEtcGEteHNcIj48L3Etc3BhY2U+XG5cbiAgICAgICAgPHEtdGFic1xuICAgICAgICAgIHYtbW9kZWw9XCJmZWF0dXJlZFRhYlwiXG4gICAgICAgICAgZGVuc2VcbiAgICAgICAgICBhY3RpdmUtY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICBpbmRpY2F0b3ItY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICBhbGlnbj1cImxlZnRcIlxuICAgICAgICAgIG5hcnJvdy1pbmRpY2F0b3JcbiAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICAgJ3RleHQtZ3JleTMwMCc6ICRxLmRhcmsubW9kZSxcbiAgICAgICAgICAgICd0ZXh0LWRhcmsnOiAhJHEuZGFyay5tb2RlLFxuICAgICAgICAgIH1cIlxuICAgICAgICAgIDpicmVha3BvaW50PVwiMFwiXG4gICAgICAgID5cbiAgICAgICAgICA8cS10YWJcbiAgICAgICAgICAgIHYtZm9yPVwiKHRhYm5hbWUsIHRhYmtleSkgaW4gRGF0YVN0b3JlLmZlYXR1cmVkX2RhdGFcIlxuICAgICAgICAgICAgOmtleT1cInRhYm5hbWVcIlxuICAgICAgICAgICAgOm5hbWU9XCJ0YWJrZXlcIlxuICAgICAgICAgICAgOmxhYmVsPVwidGFibmFtZVwiXG4gICAgICAgICAgICBjb250ZW50LWNsYXNzPVwidGV4dC13ZWlnaHQtNTAwIFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9xLXRhYnM+XG5cbiAgICAgICAgPHEtdGFiLXBhbmVsc1xuICAgICAgICAgIHYtbW9kZWw9XCJmZWF0dXJlZFRhYlwiXG4gICAgICAgICAgYW5pbWF0ZWRcbiAgICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAnYmctbXlkYXJrIHRleHQtd2hpdGUnOiAkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgICAnYmctd2hpdGUgdGV4dC1ibGFjayc6ICEkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgfVwiXG4gICAgICAgID5cbiAgICAgICAgICA8cS10YWItcGFuZWxcbiAgICAgICAgICAgIHYtZm9yPVwiKHRhYm5hbWUsIHRhYmtleSkgaW4gRGF0YVN0b3JlLmZlYXR1cmVkX2RhdGFcIlxuICAgICAgICAgICAgOmtleT1cInRhYm5hbWVcIlxuICAgICAgICAgICAgOm5hbWU9XCJ0YWJrZXlcIlxuICAgICAgICAgICAgOmxhYmVsPVwidGFibmFtZVwiXG4gICAgICAgICAgICBjbGFzcz1cInEtcGEtc21cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxNZXJjaGFudExpc3RcbiAgICAgICAgICAgICAgcmVmPVwibWVyY2hhbnRMaXN0XCJcbiAgICAgICAgICAgICAgbGlzdF90eXBlPVwiZmVhdHVyZWRcIlxuICAgICAgICAgICAgICA6ZmVhdHVyZWRfaWQ9XCJ0YWJrZXlcIlxuICAgICAgICAgICAgICA6ZmlsdGVycz1cIkRhdGFTdG9yZS5maWx0ZXJzXCJcbiAgICAgICAgICAgICAgQGFmdGVyLXJlc3VsdHM9XCJhZnRlclJlc3VsdHNcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBxLXBhLXNtXCI+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiRGF0YVN0b3JlLmhhc0ZlZWRcIj5cbiAgICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICAgIDpjb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICdzZWNvbmRhcnknXCJcbiAgICAgICAgICAgICAgICAgIDp0bz1cIntcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogJ2ZlZWQnLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiAnZmVhdHVyZWQnLFxuICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmVkX2lkOiB0YWJrZXksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnU2hvdyBBbGwnKVwiXG4gICAgICAgICAgICAgICAgPjwvcS1idG4+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb250MTIgcS1wYS1tZFwiXG4gICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICAgICAgICd0ZXh0LWdyZXkzMDAnOiAkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgICAgICAgICAgICd0ZXh0LWRhcmsnOiAhJHEuZGFyay5tb2RlLFxuICAgICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3sgJHQoXCJObyBSZXN1bHRzXCIpIH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3EtdGFiLXBhbmVsPlxuICAgICAgICA8L3EtdGFiLXBhbmVscz5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICA8Tm9SZXN1bHRzIEBmaWx0ZXItYWdhaW49XCJmaWx0ZXJBZ2FpblwiPjwvTm9SZXN1bHRzPlxuICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgPCEtLSA6Y3Vpc2luZV9kYXRhPVwiY3Vpc2luZUxpc3RcIiAtLT5cbiAgICAgIDxNZXJjaGFudEZpbHRlclxuICAgICAgICByZWY9XCJtZXJjaGFudF9maWx0ZXJcIlxuICAgICAgICA6Y3Vpc2luZV9kYXRhPVwiRGF0YVN0b3JlLmN1aXNpbmVcIlxuICAgICAgICBAYXBwbHktZmlsdGVyPVwiYXBwbHlGaWx0ZXJcIlxuICAgICAgICBAcnVuLWZpbHRlcj1cInJ1bkZpbHRlclwiXG4gICAgICAvPlxuXG4gICAgICA8QnJvd3NlQ3Vpc2luZSByZWY9XCJicm93c2VfY3Vpc2luZVwiPiA8L0Jyb3dzZUN1aXNpbmU+XG5cbiAgICAgIDwhLS0gPHEtc3BhY2UgY2xhc3M9XCJxLXBhLXhzXCI+PC9xLXNwYWNlPiAtLT5cbiAgICA8L3EtcGFnZT5cbiAgPC9xLXB1bGwtdG8tcmVmcmVzaD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBkZWZpbmVBc3luY0NvbXBvbmVudCwgcmVmLCBvbk1vdW50ZWQsIHdhdGNoIH0gZnJvbSBcInZ1ZVwiO1xuaW1wb3J0IEFQSWludGVyZmFjZSBmcm9tIFwic3JjL2FwaS9BUElpbnRlcmZhY2VcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJ2dWUtcm91dGVyXCI7XG5pbXBvcnQgYXV0aCBmcm9tIFwic3JjL2FwaS9hdXRoXCI7XG4vL2ltcG9ydCB7IHVzZVRyYW5zYWN0aW9uU3RvcmUgfSBmcm9tIFwic3RvcmVzL1RyYW5zYWN0aW9uXCI7XG5pbXBvcnQgeyB1c2VEYXRhU3RvcmUgfSBmcm9tIFwic3RvcmVzL0RhdGFTdG9yZVwiO1xuaW1wb3J0IHsgdXNlRGVsaXZlcnlzY2hlZFN0b3JlIH0gZnJvbSBcInN0b3Jlcy9EZWxpdmVyeVNjaGVkXCI7XG5pbXBvcnQgeyB1c2VQbGFjZVN0b3JlIH0gZnJvbSBcInN0b3Jlcy9QbGFjZVN0b3JlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJIb21lUGFnZVwiLFxuICBjb21wb25lbnRzOiB7XG4gICAgSG9tZUJhbm5lcjogZGVmaW5lQXN5bmNDb21wb25lbnQoKCkgPT4gaW1wb3J0KFwiY29tcG9uZW50cy9Ib21lQmFubmVyLnZ1ZVwiKSksXG4gICAgQ3Vpc2luZUNhcm91c2VsOiBkZWZpbmVBc3luY0NvbXBvbmVudCgoKSA9PlxuICAgICAgaW1wb3J0KFwiY29tcG9uZW50cy9DdWlzaW5lQ2Fyb3VzZWwudnVlXCIpXG4gICAgKSxcbiAgICBCcm93c2VDdWlzaW5lOiBkZWZpbmVBc3luY0NvbXBvbmVudCgoKSA9PlxuICAgICAgaW1wb3J0KFwiY29tcG9uZW50cy9Ccm93c2VDdWlzaW5lLnZ1ZVwiKVxuICAgICksXG4gICAgTWVyY2hhbnRDYXJvdXNlbDogZGVmaW5lQXN5bmNDb21wb25lbnQoKCkgPT5cbiAgICAgIGltcG9ydChcImNvbXBvbmVudHMvTWVyY2hhbnRDYXJvdXNlbC52dWVcIilcbiAgICApLFxuICAgIE1lcmNoYW50TGlzdDogZGVmaW5lQXN5bmNDb21wb25lbnQoKCkgPT5cbiAgICAgIGltcG9ydChcImNvbXBvbmVudHMvTWVyY2hhbnRMaXN0LnZ1ZVwiKVxuICAgICksXG4gICAgTWVyY2hhbnRGaWx0ZXI6IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+XG4gICAgICBpbXBvcnQoXCJjb21wb25lbnRzL01lcmNoYW50RmlsdGVyLnZ1ZVwiKVxuICAgICksXG4gICAgTm9SZXN1bHRzOiBkZWZpbmVBc3luY0NvbXBvbmVudCgoKSA9PiBpbXBvcnQoXCJjb21wb25lbnRzL05vUmVzdWx0cy52dWVcIikpLFxuICB9LFxuICBzZXR1cCgpIHtcbiAgICBjb25zdCB0cmFuc2FjdGlvblR5cGUgPSBBUElpbnRlcmZhY2UuZ2V0U3RvcmFnZShcInRyYW5zYWN0aW9uX3R5cGVcIik7XG4gICAgY29uc3QgRGF0YVN0b3JlID0gdXNlRGF0YVN0b3JlKCk7XG4gICAgY29uc3QgZmlsdGVycyA9IHJlZih7XG4gICAgICB0cmFuc2FjdGlvbl90eXBlOiB0cmFuc2FjdGlvblR5cGUsXG4gICAgfSk7XG4gICAgY29uc3QgdG9wUmVzdG8gPSByZWYoXCJwb3B1bGFyXCIpO1xuICAgIGNvbnN0IGZlYXR1cmVkVGFiID0gcmVmKFwiYWxsXCIpO1xuICAgIGNvbnN0IGZlYXR1cmVkID0gcmVmKFtdKTtcbiAgICBjb25zdCBxID0gcmVmKFwiXCIpO1xuICAgIGNvbnN0IHNsaWRlID0gcmVmKDEpO1xuICAgIGNvbnN0IGN1aXNpbmVMaXN0ID0gcmVmKFtdKTtcbiAgICBjb25zdCAkcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgaGFzUmVzdWx0ID0gcmVmKHRydWUpO1xuICAgIGNvbnN0IG1lcmNoYW50X2ZpbHRlciA9IHJlZih1bmRlZmluZWQpO1xuXG4gICAgY29uc3QgbWVyY2hhbnRMaXN0ID0gcmVmKG51bGwpO1xuICAgIGNvbnN0IG1lcmNoYW50UmVmQ2Fyb3VzZWwgPSByZWYobnVsbCk7XG4gICAgY29uc3QgbWVyY2hhbnRSZWZDYXJvdXNlbDIgPSByZWYobnVsbCk7XG4gICAgY29uc3QgdXNlckRhdGEgPSByZWYoW10pO1xuICAgIGNvbnN0IGlzU3RpY2t5ID0gcmVmKGZhbHNlKTtcblxuICAgIGNvbnN0IERlbGl2ZXJ5c2NoZWRTdG9yZSA9IHVzZURlbGl2ZXJ5c2NoZWRTdG9yZSgpO1xuXG4gICAgd2F0Y2goXG4gICAgICAoKSA9PiBEZWxpdmVyeXNjaGVkU3RvcmUubmV3X3RyYW5zYWN0aW9uX3R5cGUsXG4gICAgICAobmV3VmFsdWUsIG9sZFZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGVsaXZlcnlzY2hlZFN0b3JlPT5cIiArIG5ld1ZhbHVlKTtcbiAgICAgICAgRGVsaXZlcnlzY2hlZFN0b3JlLmZpbHRlcnMudHJhbnNhY3Rpb25fdHlwZSA9IG5ld1ZhbHVlO1xuICAgICAgICBhcHBseUZpbHRlcihEZWxpdmVyeXNjaGVkU3RvcmUuZmlsdGVycyk7XG4gICAgICB9XG4gICAgKTtcblxuICAgIHdhdGNoKFxuICAgICAgKCkgPT4gRGVsaXZlcnlzY2hlZFN0b3JlLm1haW5fbGF5b3V0X2hlYWRlcixcbiAgICAgIChuZXdWYWx1ZSwgb2xkVmFsdWUpID0+IHtcbiAgICAgICAgaXNTdGlja3kudmFsdWUgPSAhbmV3VmFsdWU7XG4gICAgICB9XG4gICAgKTtcblxuICAgIGNvbnN0IFBsYWNlU3RvcmUgPSB1c2VQbGFjZVN0b3JlKCk7XG4gICAgd2F0Y2goXG4gICAgICAoKSA9PiBQbGFjZVN0b3JlLmRhdGEsXG4gICAgICAobmV3VmFsdWUsIG9sZFZhbHVlKSA9PiB7XG4gICAgICAgIERhdGFTdG9yZS5maWx0ZXJzLnBsYWNlX2lkID0gbmV3VmFsdWUucGxhY2VfaWQ7XG4gICAgICAgIGFwcGx5RmlsdGVyKERhdGFTdG9yZS5maWx0ZXJzKTtcbiAgICAgIH1cbiAgICAgIC8veyBkZWVwOiB0cnVlIH1cbiAgICApO1xuXG4gICAgd2F0Y2goXG4gICAgICAoKSA9PiBEYXRhU3RvcmUubGlzdF9sb2FkaW5nX2hhbmRsZSxcbiAgICAgIChuZXdWYWx1ZSwgb2xkVmFsdWUpID0+IHtcbiAgICAgICAgaWYgKGZlYXR1cmVkVGFiLnZhbHVlID09IFwiYWxsXCIpIHtcbiAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoRGF0YVN0b3JlLmxpc3RfZGF0YSkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaGFzUmVzdWx0LnZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaGFzUmVzdWx0LnZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcblxuICAgIG9uTW91bnRlZCgoKSA9PiB7XG4gICAgICAvL0FQSWludGVyZmFjZS5zZXRTZXNzaW9uKFwiZmlyc3RMb2FkXCIsIHRydWUpO1xuICAgICAgaWYgKGF1dGguYXV0aGVudGljYXRlZCgpKSB7XG4gICAgICAgIHVzZXJEYXRhLnZhbHVlID0gYXV0aC5nZXRVc2VyKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1c2VyRGF0YS52YWx1ZSA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoT2JqZWN0LmtleXMoRGF0YVN0b3JlLmZpbHRlcnMpLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgIGFwcGx5RmlsdGVyKHtcbiAgICAgICAgICB0cmFuc2FjdGlvbl90eXBlOiB0cmFuc2FjdGlvblR5cGUsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoT2JqZWN0LmtleXMoRGF0YVN0b3JlLmZlYXR1cmVkX2RhdGEpLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgIERhdGFTdG9yZS5nZXRGZWF0dXJlZExpc3QoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGFmdGVyR2V0ZGF0YSA9IChkYXRhKSA9PiB7XG4gICAgICBjdWlzaW5lTGlzdC52YWx1ZSA9IGRhdGE7XG4gICAgfTtcblxuICAgIGNvbnN0IGFwcGx5RmlsdGVyID0gKGRhdGEpID0+IHtcbiAgICAgIGhhc1Jlc3VsdC52YWx1ZSA9IHRydWU7XG4gICAgICBEYXRhU3RvcmUuZmlsdGVycyA9IGRhdGE7XG4gICAgfTtcblxuICAgIGNvbnN0IGdvU2VhcmNoID0gKCkgPT4ge1xuICAgICAgJHJvdXRlci5wdXNoKFwiL3NlYXJjaFwiKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcnVuRmlsdGVyID0gKCkgPT4ge1xuICAgICAgY29uc29sZS5kZWJ1ZyhcInJ1bkZpbHRlclwiKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0RmVhdHVyZWRMaXN0ID0gKCkgPT4ge1xuICAgICAgQVBJaW50ZXJmYWNlLmdldEZlYXR1cmVkTGlzdCgpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgZmVhdHVyZWQudmFsdWUgPSBkYXRhLmRldGFpbHMuZGF0YTtcbiAgICAgICAgfSlcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHt9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge30pO1xuICAgIH07XG5cbiAgICBjb25zdCBhZnRlclJlc3VsdHMgPSAoZGF0YSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJhZnRlclJlc3VsdHMgPT5cIiArIGRhdGEpO1xuICAgICAgaGFzUmVzdWx0LnZhbHVlID0gZGF0YTtcbiAgICB9O1xuXG4gICAgY29uc3QgZmlsdGVyQWdhaW4gPSAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcImZpbHRlckFnYWluXCIpO1xuICAgICAgbWVyY2hhbnRfZmlsdGVyLnZhbHVlLmZpbHRlciA9IHRydWU7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlZnJlc2ggPSAoZG9uZSkgPT4ge1xuICAgICAgRGF0YVN0b3JlLmdldEJhbm5lcigpO1xuICAgICAgRGF0YVN0b3JlLkN1aXNpbmVMaXN0KCk7XG4gICAgICBEYXRhU3RvcmUuZ2V0RmVhdHVyZWRMaXN0KCk7XG5cbiAgICAgIGFwcGx5RmlsdGVyKHtcbiAgICAgICAgdHJhbnNhY3Rpb25fdHlwZTogdHJhbnNhY3Rpb25UeXBlLFxuICAgICAgfSk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkb25lKCk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGZpbHRlcnMsXG4gICAgICB0b3BSZXN0byxcbiAgICAgIHEsXG4gICAgICBzbGlkZSxcbiAgICAgIGN1aXNpbmVMaXN0LFxuICAgICAgYWZ0ZXJHZXRkYXRhLFxuICAgICAgYXBwbHlGaWx0ZXIsXG4gICAgICBnb1NlYXJjaCxcbiAgICAgIHJ1bkZpbHRlcixcbiAgICAgIG1lcmNoYW50TGlzdCxcbiAgICAgIG1lcmNoYW50UmVmQ2Fyb3VzZWwsXG4gICAgICBtZXJjaGFudFJlZkNhcm91c2VsMixcbiAgICAgIGZlYXR1cmVkVGFiLFxuICAgICAgZmVhdHVyZWQsXG4gICAgICBhZnRlclJlc3VsdHMsXG4gICAgICBoYXNSZXN1bHQsXG4gICAgICBEYXRhU3RvcmUsXG4gICAgICB1c2VyRGF0YSxcbiAgICAgIGZpbHRlckFnYWluLFxuICAgICAgbWVyY2hhbnRfZmlsdGVyLFxuICAgICAgcmVmcmVzaCxcbiAgICAgIGlzU3RpY2t5LFxuICAgICAgUGxhY2VTdG9yZSxcbiAgICB9O1xuICB9LFxufTtcbjwvc2NyaXB0PlxuIl0sImZpbGUiOiJhc3NldHMvSG9tZVBhZ2UuYTJhNWVmNGIuanMifQ==
