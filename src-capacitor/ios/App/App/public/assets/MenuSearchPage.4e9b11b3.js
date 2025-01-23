import { _ as _export_sfc, l as defineAsyncComponent, m as APIinterface, n as resolveComponent, p as openBlock, V as createElementBlock, f as createVNode, t as withCtx, q as createBlock, aA as createCommentVNode, F as Fragment, Y as QBtn, aY as QInput, b8 as createSlots, at as QIcon, Z as toDisplayString, U as createBaseVNode, X as renderList, ae as QAvatar, a6 as createTextVNode, u as __vitePreload, aa as withDirectives, ab as Ripple, ac as QItem, ad as QItemSection, b2 as QSeparator } from "./index.61ed5618.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QSpace } from "./QSpace.f164c087.js";
import { Q as QImg } from "./QImg.6c27044c.js";
import { Q as QItemLabel } from "./QItemLabel.a9365c5b.js";
import { Q as QList } from "./QList.b69a7e5b.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import { Q as QFooter } from "./QFooter.571ac042.js";
import { u as useCartStore } from "./CartStore.484ff101.js";
import "./QResizeObserver.d08dce3c.js";
const _sfc_main = {
  name: "MenuSearchPage",
  data() {
    return {
      q: "",
      data: [],
      slug: "",
      loading: false,
      awaitingSearch: false,
      money_config: []
    };
  },
  setup() {
    const CartStore = useCartStore();
    return { CartStore };
  },
  components: {
    ItemDetails: defineAsyncComponent(
      () => __vitePreload(() => import("./ItemDetails.81a570cb.js"), true ? ["assets/ItemDetails.81a570cb.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QCircularProgress.996c3e2f.js","assets/format.7f7370d3.js","assets/QImg.6c27044c.js","assets/QChip.f183a4f1.js","assets/QBtnToggle.6ffa195b.js","assets/QBtnGroup.abc2d1c7.js","assets/QSelect.311187d6.js","assets/QItemLabel.a9365c5b.js","assets/QMenu.8e482cd8.js","assets/selection.50b4cb0c.js","assets/rtl.f3ed811c.js","assets/QSpace.f164c087.js","assets/CartStore.484ff101.js","assets/FavoriteStore.f91e6f21.js","assets/DeliverySched.4e9605bf.js"] : void 0)
    )
  },
  mounted() {
    this.slug = this.$route.params.slug;
    this.Focus();
    this.getMoneyConfig();
  },
  computed: {
    totalFound() {
      return Object.keys(this.data).length;
    },
    hasData() {
      if (Object.keys(this.data).length > 0) {
        return true;
      }
      return false;
    },
    isSearch() {
      if (!APIinterface.empty(this.q)) {
        return true;
      }
      return false;
    }
  },
  watch: {
    q(newdata, oldata) {
      if (!this.awaitingSearch) {
        if (typeof this.q === "undefined" || this.q === null || this.q === "" || this.q === "null" || this.q === "undefined") {
          this.data = [];
          return false;
        }
        setTimeout(() => {
          APIinterface.menuSearch(this.q, this.slug).then((data) => {
            this.data = data.details.data;
          }).catch((error) => {
            this.data = [];
          }).then((data) => {
            this.awaitingSearch = false;
          });
        }, 1e3);
      }
      this.awaitingSearch = true;
    }
  },
  methods: {
    Focus() {
      this.$refs.items.focus();
    },
    clearField() {
      this.q = "";
      this.Focus();
    },
    onSearch(loading) {
      this.loading = loading;
    },
    onClickitem(data) {
      const $params = {
        cat_id: data.cat_id,
        item_uuid: data.item_uuid
      };
      console.debug(data);
      this.$refs.item_details.showItem2($params, this.slug);
    },
    afterAdditems() {
      console.debug("afterAdditems");
      this.CartStore.getCartCount();
    },
    getMoneyConfig() {
      APIinterface.getMoneyConfig().then((data) => {
        this.money_config = data.details;
      }).catch((error) => {
      }).then((data) => {
      });
    }
  }
};
const _hoisted_1 = {
  key: 0,
  class: "q-pa-md"
};
const _hoisted_2 = {
  key: 0,
  class: "no-margin text-weight-bold q-pb-sm"
};
const _hoisted_3 = { class: "no-margin text-weight-bold" };
const _hoisted_4 = { class: "text-grey font13" };
const _hoisted_5 = {
  key: 0,
  class: "q-mr-sm"
};
const _hoisted_6 = {
  key: 1,
  class: "q-mr-sm"
};
const _hoisted_7 = { class: "row full-width items-center" };
const _hoisted_8 = { class: "col text-left" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("div", { class: "col text-weight-600" }, "View Order", -1);
const _hoisted_10 = { class: "col text-right text-weight-bold" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ItemDetails = resolveComponent("ItemDetails");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(QHeader, null, {
      default: withCtx(() => [
        createVNode(QToolbar, { class: "bg-white text-dark" }, {
          default: withCtx(() => [
            createVNode(QBtn, {
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$router.back()),
              color: "white",
              rounded: "",
              unelevated: "",
              "text-color": "dark",
              icon: "arrow_back",
              dense: "",
              "no-caps": ""
            }),
            createVNode(QInput, {
              modelValue: $data.q,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.q = $event),
              ref: "items",
              label: _ctx.$t("Search menu"),
              dense: "",
              outlined: "",
              color: "grey",
              "bg-color": "white",
              class: "full-width input-borderless",
              loading: $data.awaitingSearch
            }, createSlots({
              prepend: withCtx(() => [
                createVNode(QIcon, { name: "search" })
              ]),
              _: 2
            }, [
              !$data.awaitingSearch ? {
                name: "append",
                fn: withCtx(() => [
                  $options.isSearch ? (openBlock(), createBlock(QIcon, {
                    key: 0,
                    onClick: _cache[1] || (_cache[1] = ($event) => $options.clearField()),
                    class: "cursor-pointer",
                    name: "close"
                  })) : createCommentVNode("", true)
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["modelValue", "label", "loading"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    createVNode(QPage, null, {
      default: withCtx(() => [
        createVNode(QSpace, { class: "q-pa-xs bg-grey-2" }),
        !$data.awaitingSearch ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          $options.isSearch ? (openBlock(), createElementBlock("div", _hoisted_1, [
            $options.hasData ? (openBlock(), createElementBlock("h5", _hoisted_2, toDisplayString(_ctx.$t("Search results for")) + " \u201C" + toDisplayString($data.q) + "\u201D (" + toDisplayString($options.totalFound) + ") ", 1)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createBaseVNode("h5", _hoisted_3, toDisplayString(_ctx.$t("No results for")) + " \u201C" + toDisplayString($data.q) + "\u201D ", 1),
              createBaseVNode("p", _hoisted_4, toDisplayString(_ctx.$t(
                "Sorry, no product matched for your search. Please try again."
              )), 1)
            ], 64))
          ])) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true),
        !$data.awaitingSearch ? (openBlock(), createBlock(QList, { key: 1 }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList($data.data, (items) => {
              return openBlock(), createElementBlock(Fragment, { key: items }, [
                withDirectives((openBlock(), createBlock(QItem, {
                  clickable: "",
                  onClick: ($event) => $options.onClickitem(items)
                }, {
                  default: withCtx(() => [
                    createVNode(QItemSection, { avatar: "" }, {
                      default: withCtx(() => [
                        createVNode(QImg, {
                          src: items.url_image,
                          lazy: "",
                          fit: "cover",
                          style: { "height": "50px", "width": "50px" },
                          class: "rounded-borders",
                          "spinner-color": "amber",
                          "spinner-size": "20px"
                        }, null, 8, ["src"])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(QItemSection, null, {
                      default: withCtx(() => [
                        createVNode(QItemLabel, {
                          lines: "1",
                          class: "font12 text-weight-bold q-mb-sm"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(items.item_name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(QItemLabel, { class: "font12 text-weight-medium" }, {
                          default: withCtx(() => [
                            items.price[0] ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                              items.price[0].discount <= 0 ? (openBlock(), createElementBlock("span", _hoisted_5, toDisplayString(items.price[0].size_name) + " " + toDisplayString(items.price[0].pretty_price), 1)) : (openBlock(), createElementBlock("span", _hoisted_6, [
                                createTextVNode(toDisplayString(items.price[0].size_name) + " ", 1),
                                createBaseVNode("del", null, toDisplayString(items.price[0].pretty_price), 1),
                                createTextVNode(" " + toDisplayString(items.price[0].pretty_price_after_discount), 1)
                              ]))
                            ], 64)) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["onClick"])), [
                  [Ripple]
                ]),
                createVNode(QSeparator, { inset: "" })
              ], 64);
            }), 128))
          ]),
          _: 1
        })) : createCommentVNode("", true),
        createVNode(_component_ItemDetails, {
          ref: "item_details",
          slug: $data.slug,
          money_config: $data.money_config,
          onAfterAdditems: $options.afterAdditems
        }, null, 8, ["slug", "money_config", "onAfterAdditems"])
      ]),
      _: 1
    }),
    $setup.CartStore.hasData ? (openBlock(), createBlock(QFooter, {
      key: 0,
      reveal: "",
      class: "bg-white q-pl-md q-pr-md q-pb-sm q-pt-sm text-dark"
    }, {
      default: withCtx(() => [
        createVNode(QBtn, {
          to: "/cart",
          loading: $setup.CartStore.loading,
          unelevated: "",
          color: "primary",
          "text-color": "dark",
          "no-caps": "",
          class: "radius8 full-width"
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_7, [
              createBaseVNode("div", _hoisted_8, [
                createVNode(QAvatar, {
                  square: "",
                  size: "24px",
                  color: "amber-2",
                  "text-color": "dark",
                  class: "text-weight-bold rounded-borders"
                }, {
                  default: withCtx(() => [
                    $setup.CartStore.data ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      createTextVNode(toDisplayString($setup.CartStore.data.items_count), 1)
                    ], 64)) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ]),
              _hoisted_9,
              createBaseVNode("div", _hoisted_10, [
                $setup.CartStore.data ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  createTextVNode(toDisplayString($setup.CartStore.data.data.subtotal.value), 1)
                ], 64)) : createCommentVNode("", true)
              ])
            ])
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    })) : createCommentVNode("", true)
  ], 64);
}
var MenuSearchPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "MenuSearchPage.vue"]]);
export { MenuSearchPage as default };
//# sourceMappingURL=data:application/json;base64,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LHNCQUN6Q0Ysc0JBQU0sU0FBUywyQkFBMkI7QUFBQTs7Ozs7Ozs7Ozs7OztnQkFPekRMLFlBQWlDO0FBQUE7Ozs7O1FBSXJDQSxZQUtFO0FBQUEsVUFKQSxLQUFJO0FBQUEsVUFDSCxNQUFNLE1BQUk7QUFBQSxVQUNWLGNBQWMsTUFBWTtBQUFBLFVBQzFCLGlCQUFnQixTQUFhO0FBQUE7Ozs7SUFLMUIsaUJBQVUsd0JBRGxCQyxZQW9DVztBQUFBO01BbENUO0FBQUEsTUFDQSxPQUFNO0FBQUE7dUJBRU4sTUE4QlE7QUFBQSxRQTlCUkQsWUE4QlE7QUFBQSxVQTdCTixJQUFHO0FBQUEsVUFDRixTQUFTLE9BQVMsVUFBQztBQUFBLFVBQ3BCO0FBQUEsVUFDQSxPQUFNO0FBQUEsVUFDTixjQUFXO0FBQUEsVUFDWDtBQUFBLFVBQ0EsT0FBTTtBQUFBOzJCQUVOLE1Bb0JNO0FBQUEsWUFwQk5NLGdCQW9CTSxPQXBCTixZQW9CTTtBQUFBLGNBbkJKQSxnQkFZTSxPQVpOLFlBWU07QUFBQSxnQkFYSk4sWUFVVztBQUFBLGtCQVRUO0FBQUEsa0JBQ0EsTUFBSztBQUFBLGtCQUNMLE9BQU07QUFBQSxrQkFDTixjQUFXO0FBQUEsa0JBQ1gsT0FBTTtBQUFBO21DQUVOLE1BRVc7QUFBQSxvQkFGSyxpQkFBVSxxQkFBMUJFLG1CQUVXQztBQUFBLHNEQUROLE9BQVMsVUFBQyxLQUFLLFdBQVc7QUFBQTs7Ozs7Y0FJbkM7QUFBQSxjQUNBRyxnQkFJTSxPQUpOLGFBSU07QUFBQSxnQkFIWSxpQkFBVSxxQkFBMUJKLG1CQUVXQztBQUFBLGtCQUROSSxpREFBVSxLQUFLLEtBQUssU0FBUyxLQUFLO0FBQUEiLCJuYW1lcyI6WyJfY3JlYXRlVk5vZGUiLCJfY3JlYXRlQmxvY2siLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX0ZyYWdtZW50IiwiX29wZW5CbG9jayIsIl90b0Rpc3BsYXlTdHJpbmciLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX2NyZWF0ZVRleHRWTm9kZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9NZW51L01lbnVTZWFyY2hQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLWhlYWRlcj5cbiAgICA8cS10b29sYmFyIGNsYXNzPVwiYmctd2hpdGUgdGV4dC1kYXJrXCI+XG4gICAgICA8cS1idG5cbiAgICAgICAgQGNsaWNrPVwiJHJvdXRlci5iYWNrKClcIlxuICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgcm91bmRlZFxuICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgIHRleHQtY29sb3I9XCJkYXJrXCJcbiAgICAgICAgaWNvbj1cImFycm93X2JhY2tcIlxuICAgICAgICBkZW5zZVxuICAgICAgICBuby1jYXBzXG4gICAgICAvPlxuXG4gICAgICA8cS1pbnB1dFxuICAgICAgICB2LW1vZGVsPVwicVwiXG4gICAgICAgIHJlZj1cIml0ZW1zXCJcbiAgICAgICAgOmxhYmVsPVwiJHQoJ1NlYXJjaCBtZW51JylcIlxuICAgICAgICBkZW5zZVxuICAgICAgICBvdXRsaW5lZFxuICAgICAgICBjb2xvcj1cImdyZXlcIlxuICAgICAgICBiZy1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgY2xhc3M9XCJmdWxsLXdpZHRoIGlucHV0LWJvcmRlcmxlc3NcIlxuICAgICAgICA6bG9hZGluZz1cImF3YWl0aW5nU2VhcmNoXCJcbiAgICAgID5cbiAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpwcmVwZW5kPlxuICAgICAgICAgIDxxLWljb24gbmFtZT1cInNlYXJjaFwiIC8+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCIhYXdhaXRpbmdTZWFyY2hcIiB2LXNsb3Q6YXBwZW5kPlxuICAgICAgICAgIDxxLWljb25cbiAgICAgICAgICAgIHYtaWY9XCJpc1NlYXJjaFwiXG4gICAgICAgICAgICBAY2xpY2s9XCJjbGVhckZpZWxkKClcIlxuICAgICAgICAgICAgY2xhc3M9XCJjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICBuYW1lPVwiY2xvc2VcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3EtaW5wdXQ+XG4gICAgPC9xLXRvb2xiYXI+XG4gIDwvcS1oZWFkZXI+XG5cbiAgPHEtcGFnZT5cbiAgICA8cS1zcGFjZSBjbGFzcz1cInEtcGEteHMgYmctZ3JleS0yXCI+PC9xLXNwYWNlPlxuXG4gICAgPHRlbXBsYXRlIHYtaWY9XCIhYXdhaXRpbmdTZWFyY2hcIj5cbiAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiaXNTZWFyY2hcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInEtcGEtbWRcIj5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImhhc0RhdGFcIj5cbiAgICAgICAgICAgIDxoNSBjbGFzcz1cIm5vLW1hcmdpbiB0ZXh0LXdlaWdodC1ib2xkIHEtcGItc21cIj5cbiAgICAgICAgICAgICAge3sgJHQoXCJTZWFyY2ggcmVzdWx0cyBmb3JcIikgfX0g4oCce3sgcSB9feKAnSAoe3sgdG90YWxGb3VuZCB9fSlcbiAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICAgICAgPGg1IGNsYXNzPVwibm8tbWFyZ2luIHRleHQtd2VpZ2h0LWJvbGRcIj5cbiAgICAgICAgICAgICAge3sgJHQoXCJObyByZXN1bHRzIGZvclwiKSB9fSDigJx7eyBxIH194oCdXG4gICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWdyZXkgZm9udDEzXCI+XG4gICAgICAgICAgICAgIHt7XG4gICAgICAgICAgICAgICAgJHQoXG4gICAgICAgICAgICAgICAgICBcIlNvcnJ5LCBubyBwcm9kdWN0IG1hdGNoZWQgZm9yIHlvdXIgc2VhcmNoLiBQbGVhc2UgdHJ5IGFnYWluLlwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L3RlbXBsYXRlPlxuXG4gICAgPHEtbGlzdCB2LWlmPVwiIWF3YWl0aW5nU2VhcmNoXCI+XG4gICAgICA8dGVtcGxhdGUgdi1mb3I9XCJpdGVtcyBpbiBkYXRhXCIgOmtleT1cIml0ZW1zXCI+XG4gICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlIHYtcmlwcGxlIEBjbGljaz1cIm9uQ2xpY2tpdGVtKGl0ZW1zKVwiPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgICA8cS1pbWdcbiAgICAgICAgICAgICAgOnNyYz1cIml0ZW1zLnVybF9pbWFnZVwiXG4gICAgICAgICAgICAgIGxhenlcbiAgICAgICAgICAgICAgZml0PVwiY292ZXJcIlxuICAgICAgICAgICAgICBzdHlsZT1cImhlaWdodDogNTBweDsgd2lkdGg6IDUwcHhcIlxuICAgICAgICAgICAgICBjbGFzcz1cInJvdW5kZWQtYm9yZGVyc1wiXG4gICAgICAgICAgICAgIHNwaW5uZXItY29sb3I9XCJhbWJlclwiXG4gICAgICAgICAgICAgIHNwaW5uZXItc2l6ZT1cIjIwcHhcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgbGluZXM9XCIxXCIgY2xhc3M9XCJmb250MTIgdGV4dC13ZWlnaHQtYm9sZCBxLW1iLXNtXCI+XG4gICAgICAgICAgICAgIHt7IGl0ZW1zLml0ZW1fbmFtZSB9fVxuICAgICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNsYXNzPVwiZm9udDEyIHRleHQtd2VpZ2h0LW1lZGl1bVwiPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIml0ZW1zLnByaWNlWzBdXCI+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJpdGVtcy5wcmljZVswXS5kaXNjb3VudCA8PSAwXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInEtbXItc21cIlxuICAgICAgICAgICAgICAgICAgICA+e3sgaXRlbXMucHJpY2VbMF0uc2l6ZV9uYW1lIH19XG4gICAgICAgICAgICAgICAgICAgIHt7IGl0ZW1zLnByaWNlWzBdLnByZXR0eV9wcmljZSB9fTwvc3BhblxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicS1tci1zbVwiXG4gICAgICAgICAgICAgICAgICAgID57eyBpdGVtcy5wcmljZVswXS5zaXplX25hbWUgfX1cbiAgICAgICAgICAgICAgICAgICAgPGRlbD57eyBpdGVtcy5wcmljZVswXS5wcmV0dHlfcHJpY2UgfX08L2RlbD5cbiAgICAgICAgICAgICAgICAgICAge3sgaXRlbXMucHJpY2VbMF0ucHJldHR5X3ByaWNlX2FmdGVyX2Rpc2NvdW50IH19PC9zcGFuXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDwvcS1pdGVtPlxuICAgICAgICA8cS1zZXBhcmF0b3IgaW5zZXQ+PC9xLXNlcGFyYXRvcj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC9xLWxpc3Q+XG5cbiAgICA8SXRlbURldGFpbHNcbiAgICAgIHJlZj1cIml0ZW1fZGV0YWlsc1wiXG4gICAgICA6c2x1Zz1cInNsdWdcIlxuICAgICAgOm1vbmV5X2NvbmZpZz1cIm1vbmV5X2NvbmZpZ1wiXG4gICAgICBAYWZ0ZXItYWRkaXRlbXM9XCJhZnRlckFkZGl0ZW1zXCJcbiAgICAvPlxuICA8L3EtcGFnZT5cblxuICA8cS1mb290ZXJcbiAgICB2LWlmPVwiQ2FydFN0b3JlLmhhc0RhdGFcIlxuICAgIHJldmVhbFxuICAgIGNsYXNzPVwiYmctd2hpdGUgcS1wbC1tZCBxLXByLW1kIHEtcGItc20gcS1wdC1zbSB0ZXh0LWRhcmtcIlxuICA+XG4gICAgPHEtYnRuXG4gICAgICB0bz1cIi9jYXJ0XCJcbiAgICAgIDpsb2FkaW5nPVwiQ2FydFN0b3JlLmxvYWRpbmdcIlxuICAgICAgdW5lbGV2YXRlZFxuICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgIHRleHQtY29sb3I9XCJkYXJrXCJcbiAgICAgIG5vLWNhcHNcbiAgICAgIGNsYXNzPVwicmFkaXVzOCBmdWxsLXdpZHRoXCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93IGZ1bGwtd2lkdGggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdGV4dC1sZWZ0XCI+XG4gICAgICAgICAgPHEtYXZhdGFyXG4gICAgICAgICAgICBzcXVhcmVcbiAgICAgICAgICAgIHNpemU9XCIyNHB4XCJcbiAgICAgICAgICAgIGNvbG9yPVwiYW1iZXItMlwiXG4gICAgICAgICAgICB0ZXh0LWNvbG9yPVwiZGFya1wiXG4gICAgICAgICAgICBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGQgcm91bmRlZC1ib3JkZXJzXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIkNhcnRTdG9yZS5kYXRhXCI+XG4gICAgICAgICAgICAgIHt7IENhcnRTdG9yZS5kYXRhLml0ZW1zX2NvdW50IH19XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvcS1hdmF0YXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHRleHQtd2VpZ2h0LTYwMFwiPlZpZXcgT3JkZXI8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB0ZXh0LXJpZ2h0IHRleHQtd2VpZ2h0LWJvbGRcIj5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIkNhcnRTdG9yZS5kYXRhXCI+XG4gICAgICAgICAgICB7eyBDYXJ0U3RvcmUuZGF0YS5kYXRhLnN1YnRvdGFsLnZhbHVlIH19XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3EtYnRuPlxuICA8L3EtZm9vdGVyPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IGRlZmluZUFzeW5jQ29tcG9uZW50IH0gZnJvbSBcInZ1ZVwiO1xuaW1wb3J0IEFQSWludGVyZmFjZSBmcm9tIFwic3JjL2FwaS9BUElpbnRlcmZhY2VcIjtcbmltcG9ydCB7IHVzZUNhcnRTdG9yZSB9IGZyb20gXCJzdG9yZXMvQ2FydFN0b3JlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJNZW51U2VhcmNoUGFnZVwiLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBxOiBcIlwiLFxuICAgICAgZGF0YTogW10sXG4gICAgICBzbHVnOiBcIlwiLFxuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICBhd2FpdGluZ1NlYXJjaDogZmFsc2UsXG4gICAgICBtb25leV9jb25maWc6IFtdLFxuICAgIH07XG4gIH0sXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IENhcnRTdG9yZSA9IHVzZUNhcnRTdG9yZSgpO1xuICAgIHJldHVybiB7IENhcnRTdG9yZSB9O1xuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgSXRlbURldGFpbHM6IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+XG4gICAgICBpbXBvcnQoXCJjb21wb25lbnRzL0l0ZW1EZXRhaWxzLnZ1ZVwiKVxuICAgICksXG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5zbHVnID0gdGhpcy4kcm91dGUucGFyYW1zLnNsdWc7XG4gICAgdGhpcy5Gb2N1cygpO1xuICAgIHRoaXMuZ2V0TW9uZXlDb25maWcoKTtcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICB0b3RhbEZvdW5kKCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZGF0YSkubGVuZ3RoO1xuICAgIH0sXG4gICAgaGFzRGF0YSgpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmRhdGEpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICBpc1NlYXJjaCgpIHtcbiAgICAgIGlmICghQVBJaW50ZXJmYWNlLmVtcHR5KHRoaXMucSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBxKG5ld2RhdGEsIG9sZGF0YSkge1xuICAgICAgaWYgKCF0aGlzLmF3YWl0aW5nU2VhcmNoKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0eXBlb2YgdGhpcy5xID09PSBcInVuZGVmaW5lZFwiIHx8XG4gICAgICAgICAgdGhpcy5xID09PSBudWxsIHx8XG4gICAgICAgICAgdGhpcy5xID09PSBcIlwiIHx8XG4gICAgICAgICAgdGhpcy5xID09PSBcIm51bGxcIiB8fFxuICAgICAgICAgIHRoaXMucSA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgQVBJaW50ZXJmYWNlLm1lbnVTZWFyY2godGhpcy5xLCB0aGlzLnNsdWcpXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmRhdGEgPSBkYXRhLmRldGFpbHMuZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5kYXRhID0gW107XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5hd2FpdGluZ1NlYXJjaCA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIDEwMDApOyAvLyAxIHNlYyBkZWxheVxuICAgICAgfVxuICAgICAgdGhpcy5hd2FpdGluZ1NlYXJjaCA9IHRydWU7XG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIEZvY3VzKCkge1xuICAgICAgdGhpcy4kcmVmcy5pdGVtcy5mb2N1cygpO1xuICAgIH0sXG4gICAgY2xlYXJGaWVsZCgpIHtcbiAgICAgIHRoaXMucSA9IFwiXCI7XG4gICAgICB0aGlzLkZvY3VzKCk7XG4gICAgfSxcbiAgICBvblNlYXJjaChsb2FkaW5nKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSBsb2FkaW5nO1xuICAgIH0sXG4gICAgb25DbGlja2l0ZW0oZGF0YSkge1xuICAgICAgY29uc3QgJHBhcmFtcyA9IHtcbiAgICAgICAgY2F0X2lkOiBkYXRhLmNhdF9pZCxcbiAgICAgICAgaXRlbV91dWlkOiBkYXRhLml0ZW1fdXVpZCxcbiAgICAgIH07XG4gICAgICBjb25zb2xlLmRlYnVnKGRhdGEpO1xuICAgICAgdGhpcy4kcmVmcy5pdGVtX2RldGFpbHMuc2hvd0l0ZW0yKCRwYXJhbXMsIHRoaXMuc2x1Zyk7XG4gICAgfSxcbiAgICBhZnRlckFkZGl0ZW1zKCkge1xuICAgICAgY29uc29sZS5kZWJ1ZyhcImFmdGVyQWRkaXRlbXNcIik7XG4gICAgICB0aGlzLkNhcnRTdG9yZS5nZXRDYXJ0Q291bnQoKTtcbiAgICB9LFxuICAgIGdldE1vbmV5Q29uZmlnKCkge1xuICAgICAgQVBJaW50ZXJmYWNlLmdldE1vbmV5Q29uZmlnKClcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLm1vbmV5X2NvbmZpZyA9IGRhdGEuZGV0YWlscztcbiAgICAgICAgfSlcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHt9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge30pO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iXSwiZmlsZSI6ImFzc2V0cy9NZW51U2VhcmNoUGFnZS40ZTliMTFiMy5qcyJ9
