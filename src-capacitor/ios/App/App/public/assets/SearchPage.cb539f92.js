import { _ as _export_sfc, S as useDataStorePersisted, l as defineAsyncComponent, m as APIinterface, n as resolveComponent, p as openBlock, V as createElementBlock, f as createVNode, t as withCtx, q as createBlock, a7 as normalizeClass, aA as createCommentVNode, F as Fragment, Y as QBtn, a6 as createTextVNode, Z as toDisplayString, U as createBaseVNode, aY as QInput, at as QIcon, X as renderList, u as __vitePreload, ac as QItem, ad as QItemSection } from "./index.61ed5618.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QSpace } from "./QSpace.f164c087.js";
import { Q as QTab } from "./QTab.8fcc65d0.js";
import { Q as QTabs } from "./QTabs.2f5e29cb.js";
import { Q as QList } from "./QList.b69a7e5b.js";
import { Q as QTabPanels, a as QTabPanel } from "./QTabPanels.2a6730dc.js";
import { Q as QSkeleton } from "./QSkeleton.39737398.js";
import { Q as QBtnToggle } from "./QBtnToggle.6ffa195b.js";
import { Q as QImg } from "./QImg.6c27044c.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import { Q as QFooter } from "./QFooter.571ac042.js";
import { u as useCartStore } from "./CartStore.484ff101.js";
import "./QResizeObserver.d08dce3c.js";
import "./rtl.f3ed811c.js";
import "./use-panel.225d73f4.js";
import "./touch.96e0ae37.js";
import "./selection.50b4cb0c.js";
import "./use-render-cache.b9e045af.js";
import "./QBtnGroup.abc2d1c7.js";
const _sfc_main = {
  name: "QuickSearchResultsPage",
  data() {
    return {
      tab: "all",
      q: "",
      merchant_data: [],
      cuisine: [],
      food_list: [],
      merchant_list: [],
      money_config: [],
      loading: false,
      awaitingSearch: false,
      data_recent: [],
      search_history: [],
      all_data: [],
      slug: "",
      item_added: false
    };
  },
  setup() {
    const CartStore = useCartStore();
    const DataStorePersisted = useDataStorePersisted();
    return { CartStore, DataStorePersisted };
  },
  components: {
    SearchListMerchant: defineAsyncComponent(
      () => __vitePreload(() => import("./SearchListMerchant.341c1ef0.js"), true ? ["assets/SearchListMerchant.341c1ef0.js","assets/QImg.6c27044c.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QChip.f183a4f1.js","assets/QItemLabel.a9365c5b.js"] : void 0)
    ),
    SearchListFood: defineAsyncComponent(
      () => __vitePreload(() => import("./SearchListFood.826cec05.js"), true ? ["assets/SearchListFood.826cec05.js","assets/QImg.6c27044c.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QChip.f183a4f1.js","assets/QItemLabel.a9365c5b.js"] : void 0)
    ),
    ItemDetails: defineAsyncComponent(
      () => __vitePreload(() => import("./ItemDetails.81a570cb.js"), true ? ["assets/ItemDetails.81a570cb.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QCircularProgress.996c3e2f.js","assets/format.7f7370d3.js","assets/QImg.6c27044c.js","assets/QChip.f183a4f1.js","assets/QBtnToggle.6ffa195b.js","assets/QBtnGroup.abc2d1c7.js","assets/QSelect.311187d6.js","assets/QItemLabel.a9365c5b.js","assets/QMenu.8e482cd8.js","assets/selection.50b4cb0c.js","assets/rtl.f3ed811c.js","assets/QSpace.f164c087.js","assets/CartStore.484ff101.js","assets/FavoriteStore.f91e6f21.js","assets/DeliverySched.4e9605bf.js"] : void 0)
    )
  },
  created() {
    this.getSearchHistory();
  },
  computed: {
    hasHistory() {
      if (Object.keys(this.data_recent).length > 0) {
        return true;
      }
      return false;
    },
    hasFilter() {
      if (!APIinterface.empty(this.q)) {
        return true;
      }
      return false;
    },
    hasResults() {
      if (Object.keys(this.all_data).length > 0) {
        return true;
      }
      return false;
    }
  },
  watch: {
    q(newdata, oldata) {
      if (!this.awaitingSearch) {
        if (typeof this.q === "undefined" || this.q === null || this.q === "" || this.q === "null" || this.q === "undefined") {
          return false;
        }
        setTimeout(() => {
          this.saveHistory();
          this.tab = "all";
          APIinterface.Search(
            this.q,
            APIinterface.getStorage("place_id"),
            this.DataStorePersisted.use_currency_code
          ).then((data) => {
            console.debug(data);
            this.merchant_data = data.details.merchant_data;
            this.cuisine = data.details.cuisine;
            this.food_list = data.details.food_list;
            this.merchant_list = data.details.merchant_list;
            this.all_data = this.merchant_data.concat(this.food_list);
          }).catch((error) => {
            this.merchant_data = [];
            this.cuisine = [];
            this.food_list = [];
            this.merchant_list = [];
          }).then((data) => {
            this.awaitingSearch = false;
          });
        }, 1e3);
      }
      this.awaitingSearch = true;
    }
  },
  methods: {
    clearField() {
      this.q = "";
      this.Focus();
    },
    getSearchHistory() {
      const history = APIinterface.getStorage("search_history");
      if (!APIinterface.empty(history)) {
        let dataRecent = JSON.parse(history);
        if (Object.keys(dataRecent).length > 0) {
          this.data_recent = [];
          Object.entries(dataRecent).forEach(([key, items]) => {
            this.data_recent.push({
              label: items,
              value: items
            });
          });
        }
      }
    },
    saveHistory() {
      console.log("saveHistory");
      const history = APIinterface.getStorage("search_history");
      let historyJson = [];
      let historyCount = 0;
      if (!APIinterface.empty(history)) {
        historyJson = JSON.parse(history);
        historyCount = historyJson.length;
        console.log(historyJson);
        if (historyCount > 4) {
          historyJson.splice(0, 1);
        }
        if (!historyJson.includes(this.q)) {
          historyJson.push(this.q);
          APIinterface.setStorage(
            "search_history",
            JSON.stringify(historyJson)
          );
        }
        this.getSearchHistory();
      } else {
        historyJson.push(this.q);
        APIinterface.setStorage("search_history", JSON.stringify(historyJson));
      }
    },
    removeHistory() {
      this.data_recent = [];
      APIinterface.setStorage(
        "search_history",
        JSON.stringify(this.data_recent)
      );
    },
    onClickResult(data) {
      if (data.restaurant_name) {
        this.$router.push({
          name: "menu",
          params: { slug: data.restaurant_slug }
        });
      } else {
        this.item_added = false;
        this.slug = data.slug;
        const $params = {
          cat_id: data.cat_id,
          item_uuid: data.item_uuid
        };
        this.money_config = data.money_config;
        this.$refs.refItem.showItem2($params, this.slug);
      }
    },
    afterAdditems() {
      console.log("afterAdditems");
      this.item_added = true;
      this.CartStore.getCart(false, this.CartStore.cart_payload);
    }
  }
};
const _hoisted_1 = { class: "q-pl-md q-pr-md" };
const _hoisted_2 = {
  key: 0,
  class: "min-height-inherit flex flex-center"
};
const _hoisted_3 = { class: "full-width text-center q-pb-xl" };
const _hoisted_4 = { class: "text-h5 text-weight-bold" };
const _hoisted_5 = { class: "text-grey font12" };
const _hoisted_6 = {
  key: 1,
  class: "q-pl-md q-pr-md"
};
const _hoisted_7 = { class: "row item-center justify-between" };
const _hoisted_8 = { class: "font13 text-weight-bold text-h5" };
const _hoisted_9 = { key: 0 };
const _hoisted_10 = {
  class: "flex flex-center",
  style: { "min-height": "300px" }
};
const _hoisted_11 = { class: "full-width text-center" };
const _hoisted_12 = { class: "text-h5 text-weight-bold" };
const _hoisted_13 = { class: "text-grey font12" };
const _hoisted_14 = { class: "row items-center justify-between fit" };
const _hoisted_15 = { class: "text-weight-bold" };
const _hoisted_16 = { class: "text-weight-bold" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NotiButton = resolveComponent("NotiButton");
  const _component_SearchListMerchant = resolveComponent("SearchListMerchant");
  const _component_SearchListFood = resolveComponent("SearchListFood");
  const _component_ItemDetails = resolveComponent("ItemDetails");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(QHeader, {
      reveal: "",
      "reveal-offset": "50",
      class: "bg-transparent text-dark"
    }, {
      default: withCtx(() => [
        createVNode(QToolbar, null, {
          default: withCtx(() => [
            createVNode(QBtn, {
              to: "/home",
              flat: "",
              round: "",
              dense: "",
              icon: "las la-angle-left",
              class: "q-mr-sm",
              color: _ctx.$q.dark.mode ? "white" : "dark"
            }, null, 8, ["color"]),
            createVNode(QToolbarTitle, {
              class: normalizeClass(["text-weight-bold", {
                "text-white": _ctx.$q.dark.mode,
                "text-dark": !_ctx.$q.dark.mode
              }])
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("Search")), 1)
              ]),
              _: 1
            }, 8, ["class"]),
            createVNode(_component_NotiButton)
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    createVNode(QPage, null, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_1, [
          createVNode(QInput, {
            modelValue: $data.q,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.q = $event),
            label: _ctx.$t("Search food and restaurants"),
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
              $options.hasFilter ? (openBlock(), createBlock(QIcon, {
                key: 0,
                class: "cursor-pointer",
                name: "close",
                color: "grey",
                onClick: _cache[0] || (_cache[0] = ($event) => this.q = "")
              })) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["modelValue", "label", "bg-color", "label-color"])
        ]),
        createVNode(QSpace, { class: "q-pa-xs" }),
        $options.hasResults && $options.hasFilter && !$data.awaitingSearch ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createVNode(QTabs, {
            modelValue: $data.tab,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.tab = $event),
            dense: "",
            "active-color": "red",
            "indicator-color": "white",
            align: "justify",
            "narrow-indicator": "",
            shrink: "",
            "switch-indicator": "false",
            class: "text-grey"
          }, {
            default: withCtx(() => [
              createVNode(QTab, {
                name: "all",
                "no-caps": "",
                class: "no-wrap q-pa-none"
              }, {
                default: withCtx(() => [
                  createVNode(QBtn, {
                    label: _ctx.$t("All"),
                    unelevated: "",
                    "no-caps": "",
                    color: $data.tab == "all" ? "primary" : "mygrey",
                    "text-color": $data.tab == "all" ? "white" : "dark",
                    class: "radius28"
                  }, null, 8, ["label", "color", "text-color"])
                ]),
                _: 1
              }),
              createVNode(QTab, {
                name: "restaurant",
                "no-caps": "",
                class: "q-pa-none"
              }, {
                default: withCtx(() => [
                  createVNode(QBtn, {
                    label: _ctx.$t("Restaurants"),
                    unelevated: "",
                    "no-caps": "",
                    color: $data.tab == "restaurant" ? "primary" : "mygrey",
                    "text-color": $data.tab == "restaurant" ? "white" : "dark",
                    class: "radius28"
                  }, null, 8, ["label", "color", "text-color"])
                ]),
                _: 1
              }),
              createVNode(QTab, {
                name: "food",
                "no-caps": "",
                class: "q-pa-none"
              }, {
                default: withCtx(() => [
                  createVNode(QBtn, {
                    label: _ctx.$t("Food"),
                    unelevated: "",
                    "no-caps": "",
                    color: $data.tab == "food" ? "primary" : "mygrey",
                    "text-color": $data.tab == "food" ? "white" : "dark",
                    class: "radius28"
                  }, null, 8, ["label", "color", "text-color"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"]),
          createVNode(QTabPanels, {
            modelValue: $data.tab,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.tab = $event),
            animated: "",
            "transition-next": "fade",
            "transition-prev": "fade",
            class: normalizeClass({
              "bg-mydark ": _ctx.$q.dark.mode,
              "bg-white ": !_ctx.$q.dark.mode
            })
          }, {
            default: withCtx(() => [
              createVNode(QTabPanel, {
                name: "all",
                class: "q-pa-none"
              }, {
                default: withCtx(() => [
                  createVNode(QList, { separator: "" }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList($data.all_data, (items) => {
                        return openBlock(), createBlock(QItem, {
                          key: items,
                          onClick: ($event) => $options.onClickResult(items),
                          clickable: ""
                        }, {
                          default: withCtx(() => [
                            items.restaurant_name ? (openBlock(), createBlock(_component_SearchListMerchant, {
                              key: 0,
                              items,
                              cuisine: $data.cuisine
                            }, null, 8, ["items", "cuisine"])) : (openBlock(), createBlock(_component_SearchListFood, {
                              key: 1,
                              items,
                              merchant_list: $data.merchant_list,
                              money_config: $data.money_config
                            }, null, 8, ["items", "merchant_list", "money_config"]))
                          ]),
                          _: 2
                        }, 1032, ["onClick"]);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(QTabPanel, {
                name: "restaurant",
                class: "q-pa-none"
              }, {
                default: withCtx(() => [
                  createVNode(QList, { separator: "" }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList($data.merchant_data, (items) => {
                        return openBlock(), createBlock(QItem, {
                          key: items,
                          onClick: ($event) => $options.onClickResult(items),
                          clickable: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_SearchListMerchant, {
                              items,
                              cuisine: $data.cuisine
                            }, null, 8, ["items", "cuisine"])
                          ]),
                          _: 2
                        }, 1032, ["onClick"]);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(QTabPanel, {
                name: "food",
                class: "q-pa-none"
              }, {
                default: withCtx(() => [
                  createVNode(QList, { separator: "" }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList($data.food_list, (items) => {
                        return openBlock(), createBlock(QItem, {
                          key: items,
                          onClick: ($event) => $options.onClickResult(items),
                          clickable: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_SearchListFood, {
                              items,
                              merchant_list: $data.merchant_list,
                              money_config: $data.money_config
                            }, null, 8, ["items", "merchant_list", "money_config"])
                          ]),
                          _: 2
                        }, 1032, ["onClick"]);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue", "class"])
        ], 64)) : $options.hasFilter && $data.awaitingSearch ? (openBlock(), createBlock(QList, { key: 1 }, {
          default: withCtx(() => [
            (openBlock(), createElementBlock(Fragment, null, renderList(8, (i) => {
              return createVNode(QItem, { key: i }, {
                default: withCtx(() => [
                  createVNode(QItemSection, { avatar: "" }, {
                    default: withCtx(() => [
                      createVNode(QSkeleton, {
                        width: "80px",
                        height: "80px"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(QItemSection, null, {
                    default: withCtx(() => [
                      createVNode(QSkeleton, { type: "text" }),
                      createVNode(QSkeleton, {
                        type: "text",
                        class: "w-50"
                      }),
                      createVNode(QSkeleton, {
                        type: "text",
                        class: "w-70"
                      }),
                      createVNode(QSkeleton, {
                        type: "text",
                        class: "w-25"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 2
              }, 1024);
            }), 64))
          ]),
          _: 1
        })) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
          $options.hasFilter && !$data.awaitingSearch ? (openBlock(), createElementBlock("div", _hoisted_2, [
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("div", _hoisted_4, toDisplayString(_ctx.$t("No Restaurants found")) + ". ", 1),
              createBaseVNode("p", _hoisted_5, toDisplayString(_ctx.$t("Sorry, we couldn't find any results")), 1)
            ])
          ])) : (openBlock(), createElementBlock("div", _hoisted_6, [
            createBaseVNode("div", _hoisted_7, [
              createBaseVNode("div", _hoisted_8, toDisplayString(_ctx.$t("Recently Search")), 1),
              $options.hasHistory ? (openBlock(), createElementBlock("div", _hoisted_9, [
                createVNode(QBtn, {
                  onClick: $options.removeHistory,
                  round: "",
                  color: "grey",
                  icon: "las la-times",
                  size: "xs",
                  flat: ""
                }, null, 8, ["onClick"])
              ])) : createCommentVNode("", true)
            ]),
            createVNode(QBtnToggle, {
              modelValue: $data.search_history,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.search_history = $event),
              "toggle-color": "secondary",
              color: _ctx.$q.dark.mode ? "grey600" : "mygrey",
              "text-color": _ctx.$q.dark.mode ? "grey300" : "dark",
              "no-caps": "",
              "no-wrap": "",
              unelevated: "",
              class: "rounded-group2 text-weight-bold line-1",
              options: $data.data_recent,
              onClick: _cache[5] || (_cache[5] = ($event) => this.q = this.search_history)
            }, null, 8, ["modelValue", "color", "text-color", "options"]),
            createBaseVNode("div", _hoisted_10, [
              createBaseVNode("div", _hoisted_11, [
                createVNode(QImg, {
                  src: "cuttery.png",
                  fit: "fill",
                  "spinner-color": "primary",
                  style: { "height": "150px", "max-width": "130px" }
                }),
                createBaseVNode("div", _hoisted_12, toDisplayString(_ctx.$t("Search Restaurants")), 1),
                createBaseVNode("p", _hoisted_13, toDisplayString(_ctx.$t("Search your favourite cuisine and restaurants")), 1)
              ])
            ])
          ]))
        ], 64)),
        createVNode(_component_ItemDetails, {
          ref: "refItem",
          slug: $data.slug,
          money_config: $data.money_config,
          onAfterAdditems: $options.afterAdditems,
          currency_code: $setup.DataStorePersisted.getUseCurrency()
        }, null, 8, ["slug", "money_config", "onAfterAdditems", "currency_code"])
      ]),
      _: 1
    }),
    $setup.CartStore.items_count > 0 && $data.item_added == true ? (openBlock(), createBlock(QFooter, {
      key: 0,
      reveal: "",
      class: normalizeClass(["q-pl-md q-pr-md q-pb-sm q-pt-sm text-dark", {
        "bg-primary": !$setup.CartStore.cart_reloading,
        "bg-grey-5": $setup.CartStore.cart_reloading
      }])
    }, {
      default: withCtx(() => [
        createVNode(QBtn, {
          to: "/checkout",
          loading: $setup.CartStore.cart_loading,
          disable: !$setup.CartStore.canProceed,
          unelevated: "",
          "text-color": "white",
          "no-caps": "",
          class: "radius10 fit",
          color: {
            primary: !$setup.CartStore.cart_reloading,
            "grey-5": $setup.CartStore.cart_reloading
          }
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_14, [
              createBaseVNode("div", _hoisted_15, toDisplayString(_ctx.$t("Checkout")), 1),
              createBaseVNode("div", _hoisted_16, toDisplayString($setup.CartStore.cart_subtotal.value), 1)
            ])
          ]),
          _: 1
        }, 8, ["loading", "disable", "color"])
      ]),
      _: 1
    }, 8, ["class"])) : createCommentVNode("", true)
  ], 64);
}
var SearchPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "SearchPage.vue"]]);
export { SearchPage as default };
//# sourceMappingURL=data:application/json;base64,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QUFBLFVBQ0wsT0FBSztBQUFBLFlBQXNCLDJCQUFVO0FBQUEsWUFBa0MsMkJBQVU7QUFBQTs7MkJBS2xGLE1BS007QUFBQSxZQUxOQyxnQkFLTSxPQUxOLGFBS007QUFBQSxjQUpKQSxnQkFBd0QsT0FBeEQsYUFBd0RNLGdCQUF2QixLQUFFO0FBQUEsY0FDbkNOLGdCQUVNLE9BRk4sYUFFTU0sZ0JBREQsaUJBQVUsY0FBYyxLQUFLO0FBQUEiLCJuYW1lcyI6WyJfY3JlYXRlVk5vZGUiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX2NyZWF0ZUJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9GcmFnbWVudCIsIl9ub3JtYWxpemVDbGFzcyIsIl9vcGVuQmxvY2siLCJfdG9EaXNwbGF5U3RyaW5nIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhZ2VzL1NlYXJjaC9TZWFyY2hQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLWhlYWRlciByZXZlYWwgcmV2ZWFsLW9mZnNldD1cIjUwXCIgY2xhc3M9XCJiZy10cmFuc3BhcmVudCB0ZXh0LWRhcmtcIj5cbiAgICA8cS10b29sYmFyPlxuICAgICAgPHEtYnRuXG4gICAgICAgIHRvPVwiL2hvbWVcIlxuICAgICAgICBmbGF0XG4gICAgICAgIHJvdW5kXG4gICAgICAgIGRlbnNlXG4gICAgICAgIGljb249XCJsYXMgbGEtYW5nbGUtbGVmdFwiXG4gICAgICAgIGNsYXNzPVwicS1tci1zbVwiXG4gICAgICAgIDpjb2xvcj1cIiRxLmRhcmsubW9kZSA/ICd3aGl0ZScgOiAnZGFyaydcIlxuICAgICAgLz5cbiAgICAgIDxxLXRvb2xiYXItdGl0bGVcbiAgICAgICAgY2xhc3M9XCJ0ZXh0LXdlaWdodC1ib2xkXCJcbiAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICd0ZXh0LXdoaXRlJzogJHEuZGFyay5tb2RlLFxuICAgICAgICAgICd0ZXh0LWRhcmsnOiAhJHEuZGFyay5tb2RlLFxuICAgICAgICB9XCJcbiAgICAgICAgPnt7ICR0KFwiU2VhcmNoXCIpIH19PC9xLXRvb2xiYXItdGl0bGVcbiAgICAgID5cbiAgICAgIDxOb3RpQnV0dG9uPjwvTm90aUJ1dHRvbj5cbiAgICA8L3EtdG9vbGJhcj5cbiAgPC9xLWhlYWRlcj5cbiAgPHEtcGFnZT5cbiAgICA8ZGl2IGNsYXNzPVwicS1wbC1tZCBxLXByLW1kXCI+XG4gICAgICA8cS1pbnB1dFxuICAgICAgICB2LW1vZGVsPVwicVwiXG4gICAgICAgIDpsYWJlbD1cIiR0KCdTZWFyY2ggZm9vZCBhbmQgcmVzdGF1cmFudHMnKVwiXG4gICAgICAgIG91dGxpbmVkXG4gICAgICAgIGxhenktcnVsZXNcbiAgICAgICAgOmJnLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXk2MDAnIDogJ2lucHV0J1wiXG4gICAgICAgIDpsYWJlbC1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICdncmV5J1wiXG4gICAgICAgIGJvcmRlcmxlc3NcbiAgICAgICAgY2xhc3M9XCJpbnB1dC1ib3JkZXJsZXNzXCJcbiAgICAgID5cbiAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpwcmVwZW5kPlxuICAgICAgICAgIDxxLWljb24gbmFtZT1cImV2YS1zZWFyY2gtb3V0bGluZVwiIHNpemU9XCJzbVwiIC8+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6YXBwZW5kPlxuICAgICAgICAgIDxxLWljb25cbiAgICAgICAgICAgIHYtaWY9XCJoYXNGaWx0ZXJcIlxuICAgICAgICAgICAgY2xhc3M9XCJjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICBuYW1lPVwiY2xvc2VcIlxuICAgICAgICAgICAgY29sb3I9XCJncmV5XCJcbiAgICAgICAgICAgIEBjbGljaz1cInRoaXMucSA9ICcnXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9xLWlucHV0PlxuICAgIDwvZGl2PlxuXG4gICAgPHEtc3BhY2UgY2xhc3M9XCJxLXBhLXhzXCI+PC9xLXNwYWNlPlxuXG4gICAgPHRlbXBsYXRlIHYtaWY9XCJoYXNSZXN1bHRzICYmIGhhc0ZpbHRlciAmJiAhYXdhaXRpbmdTZWFyY2hcIj5cbiAgICAgIDxxLXRhYnNcbiAgICAgICAgdi1tb2RlbD1cInRhYlwiXG4gICAgICAgIGRlbnNlXG4gICAgICAgIGFjdGl2ZS1jb2xvcj1cInJlZFwiXG4gICAgICAgIGluZGljYXRvci1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgYWxpZ249XCJqdXN0aWZ5XCJcbiAgICAgICAgbmFycm93LWluZGljYXRvclxuICAgICAgICBzaHJpbmtcbiAgICAgICAgc3dpdGNoLWluZGljYXRvcj1cImZhbHNlXCJcbiAgICAgICAgY2xhc3M9XCJ0ZXh0LWdyZXlcIlxuICAgICAgPlxuICAgICAgICA8cS10YWIgbmFtZT1cImFsbFwiIG5vLWNhcHMgY2xhc3M9XCJuby13cmFwIHEtcGEtbm9uZVwiPlxuICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ0FsbCcpXCJcbiAgICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICAgIDpjb2xvcj1cInRhYiA9PSAnYWxsJyA/ICdwcmltYXJ5JyA6ICdteWdyZXknXCJcbiAgICAgICAgICAgIDp0ZXh0LWNvbG9yPVwidGFiID09ICdhbGwnID8gJ3doaXRlJyA6ICdkYXJrJ1wiXG4gICAgICAgICAgICBjbGFzcz1cInJhZGl1czI4XCJcbiAgICAgICAgICA+PC9xLWJ0bj5cbiAgICAgICAgPC9xLXRhYj5cbiAgICAgICAgPHEtdGFiIG5hbWU9XCJyZXN0YXVyYW50XCIgbm8tY2FwcyBjbGFzcz1cInEtcGEtbm9uZVwiPlxuICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ1Jlc3RhdXJhbnRzJylcIlxuICAgICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgICAgOmNvbG9yPVwidGFiID09ICdyZXN0YXVyYW50JyA/ICdwcmltYXJ5JyA6ICdteWdyZXknXCJcbiAgICAgICAgICAgIDp0ZXh0LWNvbG9yPVwidGFiID09ICdyZXN0YXVyYW50JyA/ICd3aGl0ZScgOiAnZGFyaydcIlxuICAgICAgICAgICAgY2xhc3M9XCJyYWRpdXMyOFwiXG4gICAgICAgICAgPjwvcS1idG4+XG4gICAgICAgIDwvcS10YWI+XG4gICAgICAgIDxxLXRhYiBuYW1lPVwiZm9vZFwiIG5vLWNhcHMgY2xhc3M9XCJxLXBhLW5vbmVcIj5cbiAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdGb29kJylcIlxuICAgICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgICAgOmNvbG9yPVwidGFiID09ICdmb29kJyA/ICdwcmltYXJ5JyA6ICdteWdyZXknXCJcbiAgICAgICAgICAgIDp0ZXh0LWNvbG9yPVwidGFiID09ICdmb29kJyA/ICd3aGl0ZScgOiAnZGFyaydcIlxuICAgICAgICAgICAgY2xhc3M9XCJyYWRpdXMyOFwiXG4gICAgICAgICAgPjwvcS1idG4+XG4gICAgICAgIDwvcS10YWI+XG4gICAgICA8L3EtdGFicz5cblxuICAgICAgPHEtdGFiLXBhbmVsc1xuICAgICAgICB2LW1vZGVsPVwidGFiXCJcbiAgICAgICAgYW5pbWF0ZWRcbiAgICAgICAgdHJhbnNpdGlvbi1uZXh0PVwiZmFkZVwiXG4gICAgICAgIHRyYW5zaXRpb24tcHJldj1cImZhZGVcIlxuICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgJ2JnLW15ZGFyayAnOiAkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgJ2JnLXdoaXRlICc6ICEkcS5kYXJrLm1vZGUsXG4gICAgICAgIH1cIlxuICAgICAgPlxuICAgICAgICA8cS10YWItcGFuZWwgbmFtZT1cImFsbFwiIGNsYXNzPVwicS1wYS1ub25lXCI+XG4gICAgICAgICAgPHEtbGlzdCBzZXBhcmF0b3I+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJpdGVtcyBpbiBhbGxfZGF0YVwiIDprZXk9XCJpdGVtc1wiPlxuICAgICAgICAgICAgICA8cS1pdGVtIEBjbGljaz1cIm9uQ2xpY2tSZXN1bHQoaXRlbXMpXCIgY2xpY2thYmxlPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiaXRlbXMucmVzdGF1cmFudF9uYW1lXCI+XG4gICAgICAgICAgICAgICAgICA8U2VhcmNoTGlzdE1lcmNoYW50XG4gICAgICAgICAgICAgICAgICAgIDppdGVtcz1cIml0ZW1zXCJcbiAgICAgICAgICAgICAgICAgICAgOmN1aXNpbmU9XCJjdWlzaW5lXCJcbiAgICAgICAgICAgICAgICAgID48L1NlYXJjaExpc3RNZXJjaGFudD5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICAgICAgICAgICAgICA8U2VhcmNoTGlzdEZvb2RcbiAgICAgICAgICAgICAgICAgICAgOml0ZW1zPVwiaXRlbXNcIlxuICAgICAgICAgICAgICAgICAgICA6bWVyY2hhbnRfbGlzdD1cIm1lcmNoYW50X2xpc3RcIlxuICAgICAgICAgICAgICAgICAgICA6bW9uZXlfY29uZmlnPVwibW9uZXlfY29uZmlnXCJcbiAgICAgICAgICAgICAgICAgID48L1NlYXJjaExpc3RGb29kPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L3EtbGlzdD5cbiAgICAgICAgPC9xLXRhYi1wYW5lbD5cbiAgICAgICAgPHEtdGFiLXBhbmVsIG5hbWU9XCJyZXN0YXVyYW50XCIgY2xhc3M9XCJxLXBhLW5vbmVcIj5cbiAgICAgICAgICA8cS1saXN0IHNlcGFyYXRvcj5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIml0ZW1zIGluIG1lcmNoYW50X2RhdGFcIiA6a2V5PVwiaXRlbXNcIj5cbiAgICAgICAgICAgICAgPHEtaXRlbSBAY2xpY2s9XCJvbkNsaWNrUmVzdWx0KGl0ZW1zKVwiIGNsaWNrYWJsZT5cbiAgICAgICAgICAgICAgICA8U2VhcmNoTGlzdE1lcmNoYW50XG4gICAgICAgICAgICAgICAgICA6aXRlbXM9XCJpdGVtc1wiXG4gICAgICAgICAgICAgICAgICA6Y3Vpc2luZT1cImN1aXNpbmVcIlxuICAgICAgICAgICAgICAgID48L1NlYXJjaExpc3RNZXJjaGFudD5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvcS1saXN0PlxuICAgICAgICA8L3EtdGFiLXBhbmVsPlxuICAgICAgICA8cS10YWItcGFuZWwgbmFtZT1cImZvb2RcIiBjbGFzcz1cInEtcGEtbm9uZVwiPlxuICAgICAgICAgIDxxLWxpc3Qgc2VwYXJhdG9yPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiaXRlbXMgaW4gZm9vZF9saXN0XCIgOmtleT1cIml0ZW1zXCI+XG4gICAgICAgICAgICAgIDxxLWl0ZW0gQGNsaWNrPVwib25DbGlja1Jlc3VsdChpdGVtcylcIiBjbGlja2FibGU+XG4gICAgICAgICAgICAgICAgPFNlYXJjaExpc3RGb29kXG4gICAgICAgICAgICAgICAgICA6aXRlbXM9XCJpdGVtc1wiXG4gICAgICAgICAgICAgICAgICA6bWVyY2hhbnRfbGlzdD1cIm1lcmNoYW50X2xpc3RcIlxuICAgICAgICAgICAgICAgICAgOm1vbmV5X2NvbmZpZz1cIm1vbmV5X2NvbmZpZ1wiXG4gICAgICAgICAgICAgICAgPjwvU2VhcmNoTGlzdEZvb2Q+XG4gICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L3EtbGlzdD5cbiAgICAgICAgPC9xLXRhYi1wYW5lbD5cbiAgICAgIDwvcS10YWItcGFuZWxzPlxuICAgIDwvdGVtcGxhdGU+XG5cbiAgICA8dGVtcGxhdGUgdi1lbHNlLWlmPVwiaGFzRmlsdGVyICYmIGF3YWl0aW5nU2VhcmNoXCI+XG4gICAgICA8cS1saXN0PlxuICAgICAgICA8cS1pdGVtIHYtZm9yPVwiaSBpbiA4XCIgOmtleT1cImlcIj5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgICAgPHEtc2tlbGV0b24gd2lkdGg9XCI4MHB4XCIgaGVpZ2h0PVwiODBweFwiIC8+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8cS1za2VsZXRvbiB0eXBlPVwidGV4dFwiIC8+XG4gICAgICAgICAgICA8cS1za2VsZXRvbiB0eXBlPVwidGV4dFwiIGNsYXNzPVwidy01MFwiIC8+XG4gICAgICAgICAgICA8cS1za2VsZXRvbiB0eXBlPVwidGV4dFwiIGNsYXNzPVwidy03MFwiIC8+XG4gICAgICAgICAgICA8cS1za2VsZXRvbiB0eXBlPVwidGV4dFwiIGNsYXNzPVwidy0yNVwiIC8+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPC9xLWl0ZW0+XG4gICAgICA8L3EtbGlzdD5cbiAgICA8L3RlbXBsYXRlPlxuXG4gICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiaGFzRmlsdGVyICYmICFhd2FpdGluZ1NlYXJjaFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWluLWhlaWdodC1pbmhlcml0IGZsZXggZmxleC1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZnVsbC13aWR0aCB0ZXh0LWNlbnRlciBxLXBiLXhsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNSB0ZXh0LXdlaWdodC1ib2xkXCI+XG4gICAgICAgICAgICAgIHt7ICR0KFwiTm8gUmVzdGF1cmFudHMgZm91bmRcIikgfX0uXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1ncmV5IGZvbnQxMlwiPlxuICAgICAgICAgICAgICB7eyAkdChcIlNvcnJ5LCB3ZSBjb3VsZG4ndCBmaW5kIGFueSByZXN1bHRzXCIpIH19XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJxLXBsLW1kIHEtcHItbWRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGl0ZW0tY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnQxMyB0ZXh0LXdlaWdodC1ib2xkIHRleHQtaDVcIj5cbiAgICAgICAgICAgICAge3sgJHQoXCJSZWNlbnRseSBTZWFyY2hcIikgfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiB2LWlmPVwiaGFzSGlzdG9yeVwiPlxuICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJyZW1vdmVIaXN0b3J5XCJcbiAgICAgICAgICAgICAgICByb3VuZFxuICAgICAgICAgICAgICAgIGNvbG9yPVwiZ3JleVwiXG4gICAgICAgICAgICAgICAgaWNvbj1cImxhcyBsYS10aW1lc1wiXG4gICAgICAgICAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxxLWJ0bi10b2dnbGVcbiAgICAgICAgICAgIHYtbW9kZWw9XCJzZWFyY2hfaGlzdG9yeVwiXG4gICAgICAgICAgICB0b2dnbGUtY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXk2MDAnIDogJ215Z3JleSdcIlxuICAgICAgICAgICAgOnRleHQtY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTMwMCcgOiAnZGFyaydcIlxuICAgICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgICAgbm8td3JhcFxuICAgICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgICAgY2xhc3M9XCJyb3VuZGVkLWdyb3VwMiB0ZXh0LXdlaWdodC1ib2xkIGxpbmUtMVwiXG4gICAgICAgICAgICA6b3B0aW9ucz1cImRhdGFfcmVjZW50XCJcbiAgICAgICAgICAgIEBjbGljaz1cInRoaXMucSA9IHRoaXMuc2VhcmNoX2hpc3RvcnlcIlxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNlbnRlclwiIHN0eWxlPVwibWluLWhlaWdodDogMzAwcHhcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmdWxsLXdpZHRoIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxxLWltZ1xuICAgICAgICAgICAgICAgIHNyYz1cImN1dHRlcnkucG5nXCJcbiAgICAgICAgICAgICAgICBmaXQ9XCJmaWxsXCJcbiAgICAgICAgICAgICAgICBzcGlubmVyLWNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDE1MHB4OyBtYXgtd2lkdGg6IDEzMHB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDUgdGV4dC13ZWlnaHQtYm9sZFwiPlxuICAgICAgICAgICAgICAgIHt7ICR0KFwiU2VhcmNoIFJlc3RhdXJhbnRzXCIpIH19XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtZ3JleSBmb250MTJcIj5cbiAgICAgICAgICAgICAgICB7eyAkdChcIlNlYXJjaCB5b3VyIGZhdm91cml0ZSBjdWlzaW5lIGFuZCByZXN0YXVyYW50c1wiKSB9fVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPCEtLSBlbmQgLS0+XG4gICAgPC90ZW1wbGF0ZT5cblxuICAgIDxJdGVtRGV0YWlsc1xuICAgICAgcmVmPVwicmVmSXRlbVwiXG4gICAgICA6c2x1Zz1cInNsdWdcIlxuICAgICAgOm1vbmV5X2NvbmZpZz1cIm1vbmV5X2NvbmZpZ1wiXG4gICAgICBAYWZ0ZXItYWRkaXRlbXM9XCJhZnRlckFkZGl0ZW1zXCJcbiAgICAgIDpjdXJyZW5jeV9jb2RlPVwiRGF0YVN0b3JlUGVyc2lzdGVkLmdldFVzZUN1cnJlbmN5KClcIlxuICAgIC8+XG4gIDwvcS1wYWdlPlxuXG4gIDxxLWZvb3RlclxuICAgIHYtaWY9XCJDYXJ0U3RvcmUuaXRlbXNfY291bnQgPiAwICYmIGl0ZW1fYWRkZWQgPT0gdHJ1ZVwiXG4gICAgcmV2ZWFsXG4gICAgY2xhc3M9XCJxLXBsLW1kIHEtcHItbWQgcS1wYi1zbSBxLXB0LXNtIHRleHQtZGFya1wiXG4gICAgOmNsYXNzPVwie1xuICAgICAgJ2JnLXByaW1hcnknOiAhQ2FydFN0b3JlLmNhcnRfcmVsb2FkaW5nLFxuICAgICAgJ2JnLWdyZXktNSc6IENhcnRTdG9yZS5jYXJ0X3JlbG9hZGluZyxcbiAgICB9XCJcbiAgPlxuICAgIDxxLWJ0blxuICAgICAgdG89XCIvY2hlY2tvdXRcIlxuICAgICAgOmxvYWRpbmc9XCJDYXJ0U3RvcmUuY2FydF9sb2FkaW5nXCJcbiAgICAgIDpkaXNhYmxlPVwiIUNhcnRTdG9yZS5jYW5Qcm9jZWVkXCJcbiAgICAgIHVuZWxldmF0ZWRcbiAgICAgIHRleHQtY29sb3I9XCJ3aGl0ZVwiXG4gICAgICBuby1jYXBzXG4gICAgICBjbGFzcz1cInJhZGl1czEwIGZpdFwiXG4gICAgICA6Y29sb3I9XCJ7XG4gICAgICAgIHByaW1hcnk6ICFDYXJ0U3RvcmUuY2FydF9yZWxvYWRpbmcsXG4gICAgICAgICdncmV5LTUnOiBDYXJ0U3RvcmUuY2FydF9yZWxvYWRpbmcsXG4gICAgICB9XCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZml0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXdlaWdodC1ib2xkXCI+e3sgJHQoXCJDaGVja291dFwiKSB9fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC13ZWlnaHQtYm9sZFwiPlxuICAgICAgICAgIHt7IENhcnRTdG9yZS5jYXJ0X3N1YnRvdGFsLnZhbHVlIH19XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9xLWJ0bj5cbiAgPC9xLWZvb3Rlcj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBkZWZpbmVBc3luY0NvbXBvbmVudCB9IGZyb20gXCJ2dWVcIjtcbmltcG9ydCBBUElpbnRlcmZhY2UgZnJvbSBcInNyYy9hcGkvQVBJaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyB1c2VDYXJ0U3RvcmUgfSBmcm9tIFwic3JjL3N0b3Jlcy9DYXJ0U3RvcmVcIjtcbmltcG9ydCB7IHVzZURhdGFTdG9yZVBlcnNpc3RlZCB9IGZyb20gXCJzdG9yZXMvRGF0YVN0b3JlUGVyc2lzdGVkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJRdWlja1NlYXJjaFJlc3VsdHNQYWdlXCIsXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRhYjogXCJhbGxcIixcbiAgICAgIHE6IFwiXCIsXG4gICAgICBtZXJjaGFudF9kYXRhOiBbXSxcbiAgICAgIGN1aXNpbmU6IFtdLFxuICAgICAgZm9vZF9saXN0OiBbXSxcbiAgICAgIG1lcmNoYW50X2xpc3Q6IFtdLFxuICAgICAgbW9uZXlfY29uZmlnOiBbXSxcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgYXdhaXRpbmdTZWFyY2g6IGZhbHNlLFxuICAgICAgZGF0YV9yZWNlbnQ6IFtdLFxuICAgICAgc2VhcmNoX2hpc3Rvcnk6IFtdLFxuICAgICAgYWxsX2RhdGE6IFtdLFxuICAgICAgc2x1ZzogXCJcIixcbiAgICAgIGl0ZW1fYWRkZWQ6IGZhbHNlLFxuICAgIH07XG4gIH0sXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IENhcnRTdG9yZSA9IHVzZUNhcnRTdG9yZSgpO1xuICAgIGNvbnN0IERhdGFTdG9yZVBlcnNpc3RlZCA9IHVzZURhdGFTdG9yZVBlcnNpc3RlZCgpO1xuICAgIHJldHVybiB7IENhcnRTdG9yZSwgRGF0YVN0b3JlUGVyc2lzdGVkIH07XG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBTZWFyY2hMaXN0TWVyY2hhbnQ6IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+XG4gICAgICBpbXBvcnQoXCJjb21wb25lbnRzL1NlYXJjaExpc3RNZXJjaGFudC52dWVcIilcbiAgICApLFxuICAgIFNlYXJjaExpc3RGb29kOiBkZWZpbmVBc3luY0NvbXBvbmVudCgoKSA9PlxuICAgICAgaW1wb3J0KFwiY29tcG9uZW50cy9TZWFyY2hMaXN0Rm9vZC52dWVcIilcbiAgICApLFxuICAgIEl0ZW1EZXRhaWxzOiBkZWZpbmVBc3luY0NvbXBvbmVudCgoKSA9PlxuICAgICAgaW1wb3J0KFwiY29tcG9uZW50cy9JdGVtRGV0YWlscy52dWVcIilcbiAgICApLFxuICB9LFxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuZ2V0U2VhcmNoSGlzdG9yeSgpO1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGhhc0hpc3RvcnkoKSB7XG4gICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5kYXRhX3JlY2VudCkubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIGhhc0ZpbHRlcigpIHtcbiAgICAgIGlmICghQVBJaW50ZXJmYWNlLmVtcHR5KHRoaXMucSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICBoYXNSZXN1bHRzKCkge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuYWxsX2RhdGEpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICAvLyBzZWFyY2hfaGlzdG9yeShuZXd2YWwsIG9sZHZhbCkge1xuICAgIC8vICAgdGhpcy5xID0gbmV3dmFsO1xuICAgIC8vIH0sXG4gICAgcShuZXdkYXRhLCBvbGRhdGEpIHtcbiAgICAgIGlmICghdGhpcy5hd2FpdGluZ1NlYXJjaCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdHlwZW9mIHRoaXMucSA9PT0gXCJ1bmRlZmluZWRcIiB8fFxuICAgICAgICAgIHRoaXMucSA9PT0gbnVsbCB8fFxuICAgICAgICAgIHRoaXMucSA9PT0gXCJcIiB8fFxuICAgICAgICAgIHRoaXMucSA9PT0gXCJudWxsXCIgfHxcbiAgICAgICAgICB0aGlzLnEgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2F2ZUhpc3RvcnkoKTtcbiAgICAgICAgICB0aGlzLnRhYiA9IFwiYWxsXCI7XG4gICAgICAgICAgQVBJaW50ZXJmYWNlLlNlYXJjaChcbiAgICAgICAgICAgIHRoaXMucSxcbiAgICAgICAgICAgIEFQSWludGVyZmFjZS5nZXRTdG9yYWdlKFwicGxhY2VfaWRcIiksXG4gICAgICAgICAgICB0aGlzLkRhdGFTdG9yZVBlcnNpc3RlZC51c2VfY3VycmVuY3lfY29kZVxuICAgICAgICAgIClcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoZGF0YSk7XG4gICAgICAgICAgICAgIHRoaXMubWVyY2hhbnRfZGF0YSA9IGRhdGEuZGV0YWlscy5tZXJjaGFudF9kYXRhO1xuICAgICAgICAgICAgICB0aGlzLmN1aXNpbmUgPSBkYXRhLmRldGFpbHMuY3Vpc2luZTtcbiAgICAgICAgICAgICAgdGhpcy5mb29kX2xpc3QgPSBkYXRhLmRldGFpbHMuZm9vZF9saXN0O1xuICAgICAgICAgICAgICB0aGlzLm1lcmNoYW50X2xpc3QgPSBkYXRhLmRldGFpbHMubWVyY2hhbnRfbGlzdDtcbiAgICAgICAgICAgICAgLy90aGlzLm1vbmV5X2NvbmZpZyA9IGRhdGEuZGV0YWlscy5tb25leV9jb25maWc7XG4gICAgICAgICAgICAgIHRoaXMuYWxsX2RhdGEgPSB0aGlzLm1lcmNoYW50X2RhdGEuY29uY2F0KHRoaXMuZm9vZF9saXN0KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5tZXJjaGFudF9kYXRhID0gW107XG4gICAgICAgICAgICAgIHRoaXMuY3Vpc2luZSA9IFtdO1xuICAgICAgICAgICAgICB0aGlzLmZvb2RfbGlzdCA9IFtdO1xuICAgICAgICAgICAgICB0aGlzLm1lcmNoYW50X2xpc3QgPSBbXTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmF3YWl0aW5nU2VhcmNoID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMTAwMCk7IC8vIDEgc2VjIGRlbGF5XG4gICAgICB9XG4gICAgICB0aGlzLmF3YWl0aW5nU2VhcmNoID0gdHJ1ZTtcbiAgICB9LFxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgY2xlYXJGaWVsZCgpIHtcbiAgICAgIHRoaXMucSA9IFwiXCI7XG4gICAgICB0aGlzLkZvY3VzKCk7XG4gICAgfSxcbiAgICBnZXRTZWFyY2hIaXN0b3J5KCkge1xuICAgICAgY29uc3QgaGlzdG9yeSA9IEFQSWludGVyZmFjZS5nZXRTdG9yYWdlKFwic2VhcmNoX2hpc3RvcnlcIik7XG4gICAgICBpZiAoIUFQSWludGVyZmFjZS5lbXB0eShoaXN0b3J5KSkge1xuICAgICAgICBsZXQgZGF0YVJlY2VudCA9IEpTT04ucGFyc2UoaGlzdG9yeSk7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhkYXRhUmVjZW50KS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhpcy5kYXRhX3JlY2VudCA9IFtdO1xuICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGRhdGFSZWNlbnQpLmZvckVhY2goKFtrZXksIGl0ZW1zXSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kYXRhX3JlY2VudC5wdXNoKHtcbiAgICAgICAgICAgICAgbGFiZWw6IGl0ZW1zLFxuICAgICAgICAgICAgICB2YWx1ZTogaXRlbXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgc2F2ZUhpc3RvcnkoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInNhdmVIaXN0b3J5XCIpO1xuICAgICAgY29uc3QgaGlzdG9yeSA9IEFQSWludGVyZmFjZS5nZXRTdG9yYWdlKFwic2VhcmNoX2hpc3RvcnlcIik7XG4gICAgICBsZXQgaGlzdG9yeUpzb24gPSBbXTtcbiAgICAgIGxldCBoaXN0b3J5Q291bnQgPSAwO1xuICAgICAgaWYgKCFBUElpbnRlcmZhY2UuZW1wdHkoaGlzdG9yeSkpIHtcbiAgICAgICAgaGlzdG9yeUpzb24gPSBKU09OLnBhcnNlKGhpc3RvcnkpO1xuICAgICAgICBoaXN0b3J5Q291bnQgPSBoaXN0b3J5SnNvbi5sZW5ndGg7XG4gICAgICAgIGNvbnNvbGUubG9nKGhpc3RvcnlKc29uKTtcbiAgICAgICAgaWYgKGhpc3RvcnlDb3VudCA+IDQpIHtcbiAgICAgICAgICBoaXN0b3J5SnNvbi5zcGxpY2UoMCwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWhpc3RvcnlKc29uLmluY2x1ZGVzKHRoaXMucSkpIHtcbiAgICAgICAgICBoaXN0b3J5SnNvbi5wdXNoKHRoaXMucSk7XG4gICAgICAgICAgQVBJaW50ZXJmYWNlLnNldFN0b3JhZ2UoXG4gICAgICAgICAgICBcInNlYXJjaF9oaXN0b3J5XCIsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShoaXN0b3J5SnNvbilcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2V0U2VhcmNoSGlzdG9yeSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGlzdG9yeUpzb24ucHVzaCh0aGlzLnEpO1xuICAgICAgICBBUElpbnRlcmZhY2Uuc2V0U3RvcmFnZShcInNlYXJjaF9oaXN0b3J5XCIsIEpTT04uc3RyaW5naWZ5KGhpc3RvcnlKc29uKSk7XG4gICAgICB9XG4gICAgfSxcbiAgICByZW1vdmVIaXN0b3J5KCkge1xuICAgICAgdGhpcy5kYXRhX3JlY2VudCA9IFtdO1xuICAgICAgQVBJaW50ZXJmYWNlLnNldFN0b3JhZ2UoXG4gICAgICAgIFwic2VhcmNoX2hpc3RvcnlcIixcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhX3JlY2VudClcbiAgICAgICk7XG4gICAgfSxcbiAgICBvbkNsaWNrUmVzdWx0KGRhdGEpIHtcbiAgICAgIGlmIChkYXRhLnJlc3RhdXJhbnRfbmFtZSkge1xuICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJtZW51XCIsXG4gICAgICAgICAgcGFyYW1zOiB7IHNsdWc6IGRhdGEucmVzdGF1cmFudF9zbHVnIH0sXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pdGVtX2FkZGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2x1ZyA9IGRhdGEuc2x1ZztcbiAgICAgICAgY29uc3QgJHBhcmFtcyA9IHtcbiAgICAgICAgICBjYXRfaWQ6IGRhdGEuY2F0X2lkLFxuICAgICAgICAgIGl0ZW1fdXVpZDogZGF0YS5pdGVtX3V1aWQsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubW9uZXlfY29uZmlnID0gZGF0YS5tb25leV9jb25maWc7XG4gICAgICAgIHRoaXMuJHJlZnMucmVmSXRlbS5zaG93SXRlbTIoJHBhcmFtcywgdGhpcy5zbHVnKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFmdGVyQWRkaXRlbXMoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImFmdGVyQWRkaXRlbXNcIik7XG4gICAgICB0aGlzLml0ZW1fYWRkZWQgPSB0cnVlO1xuICAgICAgdGhpcy5DYXJ0U3RvcmUuZ2V0Q2FydChmYWxzZSwgdGhpcy5DYXJ0U3RvcmUuY2FydF9wYXlsb2FkKTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuIl0sImZpbGUiOiJhc3NldHMvU2VhcmNoUGFnZS5jYjUzOWY5Mi5qcyJ9
