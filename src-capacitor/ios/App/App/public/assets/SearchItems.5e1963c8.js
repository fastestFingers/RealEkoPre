import { _ as _export_sfc, l as defineAsyncComponent, R as useDataStore, m as APIinterface, n as resolveComponent, p as openBlock, V as createElementBlock, f as createVNode, t as withCtx, a7 as normalizeClass, q as createBlock, aA as createCommentVNode, F as Fragment, Y as QBtn, a6 as createTextVNode, Z as toDisplayString, U as createBaseVNode, aY as QInput, at as QIcon, X as renderList, u as __vitePreload, ac as QItem, ad as QItemSection } from "./index.61ed5618.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QList } from "./QList.b69a7e5b.js";
import { Q as QSkeleton } from "./QSkeleton.39737398.js";
import { Q as QImg } from "./QImg.6c27044c.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import { Q as QFooter } from "./QFooter.571ac042.js";
import { u as useMenuStore } from "./MenuStore.f3a21da3.js";
import { u as useCartStore } from "./CartStore.484ff101.js";
import "./QResizeObserver.d08dce3c.js";
const _sfc_main = {
  name: "SearchItems",
  components: {
    SearchListFood: defineAsyncComponent(
      () => __vitePreload(() => import("./SearchListFood.826cec05.js"), true ? ["assets/SearchListFood.826cec05.js","assets/QImg.6c27044c.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QChip.f183a4f1.js","assets/QItemLabel.a9365c5b.js"] : void 0)
    ),
    ItemDetails: defineAsyncComponent(
      () => __vitePreload(() => import("./ItemDetails.81a570cb.js"), true ? ["assets/ItemDetails.81a570cb.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QCircularProgress.996c3e2f.js","assets/format.7f7370d3.js","assets/QImg.6c27044c.js","assets/QChip.f183a4f1.js","assets/QBtnToggle.6ffa195b.js","assets/QBtnGroup.abc2d1c7.js","assets/QSelect.311187d6.js","assets/QItemLabel.a9365c5b.js","assets/QMenu.8e482cd8.js","assets/selection.50b4cb0c.js","assets/rtl.f3ed811c.js","assets/QSpace.f164c087.js","assets/CartStore.484ff101.js","assets/FavoriteStore.f91e6f21.js","assets/DeliverySched.4e9605bf.js"] : void 0)
    ),
    ItemDetailsCheckbox: defineAsyncComponent(
      () => __vitePreload(() => import("./ItemDetailsCheckbox.63e0acb1.js"), true ? ["assets/ItemDetailsCheckbox.63e0acb1.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QCircularProgress.996c3e2f.js","assets/format.7f7370d3.js","assets/QImg.6c27044c.js","assets/QItemLabel.a9365c5b.js","assets/QList.b69a7e5b.js","assets/QSelect.311187d6.js","assets/QChip.f183a4f1.js","assets/QMenu.8e482cd8.js","assets/selection.50b4cb0c.js","assets/rtl.f3ed811c.js","assets/QSpace.f164c087.js","assets/QBtnGroup.abc2d1c7.js","assets/ClosePopup.9d17b53c.js","assets/CartStore.484ff101.js","assets/FavoriteStore.f91e6f21.js","assets/DeliverySched.4e9605bf.js"] : void 0)
    )
  },
  data() {
    return {
      slug: "",
      q: "",
      food_list: [],
      awaitingSearch: false,
      item_added: false
    };
  },
  setup() {
    const MenuStore = useMenuStore();
    const CartStore = useCartStore();
    const DataStore = useDataStore();
    return { MenuStore, CartStore, DataStore };
  },
  created() {
    this.slug = this.$route.query.slug;
  },
  watch: {
    q(newdata, oldata) {
      if (!this.awaitingSearch) {
        if (typeof this.q === "undefined" || this.q === null || this.q === "" || this.q === "null" || this.q === "undefined") {
          return false;
        }
        setTimeout(() => {
          APIinterface.fetchDataPost(
            "searchItems",
            "q=" + this.q + "&slug=" + this.slug
          ).then((data) => {
            console.debug(data);
            this.food_list = data.details.data;
          }).catch((error) => {
            this.food_list = [];
          }).then((data) => {
            this.awaitingSearch = false;
          });
        }, 1e3);
      }
      this.awaitingSearch = true;
    }
  },
  computed: {
    hasFilter() {
      if (!APIinterface.empty(this.q)) {
        return true;
      }
      return false;
    },
    hasResults() {
      if (Object.keys(this.food_list).length > 0) {
        return true;
      }
      return false;
    }
  },
  methods: {
    onClickitem(data) {
      this.item_added = false;
      const $params = {
        cat_id: data.cat_id,
        item_uuid: data.item_uuid
      };
      if (this.DataStore.addons_use_checkbox) {
        this.$refs.refItem2.showItem2($params, this.slug);
      } else {
        this.$refs.refItem.showItem2($params, this.slug);
      }
    },
    afterAdditems() {
      this.item_added = true;
      this.CartStore.getCart(false, this.CartStore.cart_payload);
    }
  }
};
const _hoisted_1 = { class: "col-12" };
const _hoisted_2 = {
  key: 2,
  class: "flex flex-center",
  style: { "min-height": "89%" }
};
const _hoisted_3 = { class: "text-center full-width" };
const _hoisted_4 = { class: "text-h5 text-weight-bold" };
const _hoisted_5 = { class: "text-grey font12" };
const _hoisted_6 = { class: "text-h5 text-weight-bold" };
const _hoisted_7 = { class: "text-grey font12" };
const _hoisted_8 = { class: "row items-center justify-between fit" };
const _hoisted_9 = { class: "text-weight-bold font17" };
const _hoisted_10 = { class: "text-weight-bold font16" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SearchListFood = resolveComponent("SearchListFood");
  const _component_ItemDetails = resolveComponent("ItemDetails");
  const _component_ItemDetailsCheckbox = resolveComponent("ItemDetailsCheckbox");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(QHeader, {
      reveal: "",
      "reveal-offset": "10",
      class: normalizeClass({
        "bg-mydark text-white": _ctx.$q.dark.mode,
        "bg-white text-black": !_ctx.$q.dark.mode
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
                createTextVNode(toDisplayString(_ctx.$t("Search menu items")), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["class"]),
    createVNode(QPage, { class: "q-pl-md q-pr-md row items-stretch" }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_1, [
          createVNode(QInput, {
            modelValue: $data.q,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.q = $event),
            label: _ctx.$t("Search"),
            outlined: "",
            "lazy-rules": "",
            "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
            "label-color": "grey",
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
                onClick: _cache[1] || (_cache[1] = ($event) => this.q = "")
              })) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["modelValue", "label", "bg-color"]),
          $options.hasResults && $options.hasFilter && !$data.awaitingSearch ? (openBlock(), createBlock(QList, {
            key: 0,
            separator: ""
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList($data.food_list, (items) => {
                return openBlock(), createBlock(QItem, {
                  key: items,
                  onClick: ($event) => $options.onClickitem(items),
                  clickable: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_SearchListFood, {
                      items,
                      merchant_list: _ctx.merchant_list
                    }, null, 8, ["items", "merchant_list"])
                  ]),
                  _: 2
                }, 1032, ["onClick"]);
              }), 128))
            ]),
            _: 1
          })) : $options.hasFilter && $data.awaitingSearch ? (openBlock(), createBlock(QList, { key: 1 }, {
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
          })) : (openBlock(), createElementBlock("div", _hoisted_2, [
            createBaseVNode("div", _hoisted_3, [
              $options.hasFilter && !$data.awaitingSearch ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createBaseVNode("div", _hoisted_4, toDisplayString(_ctx.$t("No items found")), 1),
                createBaseVNode("p", _hoisted_5, toDisplayString(_ctx.$t("Sorry, we couldn't find any results")), 1)
              ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createVNode(QImg, {
                  src: "search.png",
                  fit: "fill",
                  "spinner-color": "primary",
                  style: { "height": "80px", "max-width": "80px" }
                }),
                createBaseVNode("div", _hoisted_6, toDisplayString(_ctx.$t("Search Items")), 1),
                createBaseVNode("p", _hoisted_7, [
                  createTextVNode(toDisplayString(_ctx.$t("Search items from")) + " ", 1),
                  $setup.MenuStore.data_info[$data.slug] ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    createTextVNode(toDisplayString($setup.MenuStore.data_info[$data.slug].restaurant_name), 1)
                  ], 64)) : createCommentVNode("", true)
                ])
              ], 64))
            ])
          ]))
        ]),
        createVNode(_component_ItemDetails, {
          ref: "refItem",
          slug: $data.slug,
          onAfterAdditems: $options.afterAdditems
        }, null, 8, ["slug", "onAfterAdditems"]),
        createVNode(_component_ItemDetailsCheckbox, {
          ref: "refItem2",
          slug: $data.slug,
          onAfterAdditems: $options.afterAdditems
        }, null, 8, ["slug", "onAfterAdditems"])
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
            createBaseVNode("div", _hoisted_8, [
              createBaseVNode("div", _hoisted_9, toDisplayString(_ctx.$t("Checkout")), 1),
              createBaseVNode("div", _hoisted_10, toDisplayString($setup.CartStore.cart_subtotal.value), 1)
            ])
          ]),
          _: 1
        }, 8, ["loading", "disable", "color"])
      ]),
      _: 1
    }, 8, ["class"])) : createCommentVNode("", true)
  ], 64);
}
var SearchItems = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "SearchItems.vue"]]);
export { SearchItems as default };
//# sourceMappingURL=data:application/json;base64,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ZUJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9GcmFnbWVudCIsIl9vcGVuQmxvY2siLCJfdG9EaXNwbGF5U3RyaW5nIiwiX2NyZWF0ZVRleHRWTm9kZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9TZWFyY2gvU2VhcmNoSXRlbXMudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHEtaGVhZGVyXG4gICAgcmV2ZWFsXG4gICAgcmV2ZWFsLW9mZnNldD1cIjEwXCJcbiAgICA6Y2xhc3M9XCJ7XG4gICAgICAnYmctbXlkYXJrIHRleHQtd2hpdGUnOiAkcS5kYXJrLm1vZGUsXG4gICAgICAnYmctd2hpdGUgdGV4dC1ibGFjayc6ICEkcS5kYXJrLm1vZGUsXG4gICAgfVwiXG4gID5cbiAgICA8cS10b29sYmFyPlxuICAgICAgPHEtYnRuXG4gICAgICAgIEBjbGljaz1cIiRyb3V0ZXIuYmFjaygpXCJcbiAgICAgICAgZmxhdFxuICAgICAgICByb3VuZFxuICAgICAgICBkZW5zZVxuICAgICAgICBpY29uPVwibGFzIGxhLWFuZ2xlLWxlZnRcIlxuICAgICAgICBjbGFzcz1cInEtbXItc21cIlxuICAgICAgICA6Y29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnd2hpdGUnIDogJ2RhcmsnXCJcbiAgICAgIC8+XG4gICAgICA8cS10b29sYmFyLXRpdGxlIGNsYXNzPVwidGV4dC13ZWlnaHQtYm9sZFwiPnt7XG4gICAgICAgICR0KFwiU2VhcmNoIG1lbnUgaXRlbXNcIilcbiAgICAgIH19PC9xLXRvb2xiYXItdGl0bGU+XG4gICAgPC9xLXRvb2xiYXI+XG4gIDwvcS1oZWFkZXI+XG4gIDxxLXBhZ2UgY2xhc3M9XCJxLXBsLW1kIHEtcHItbWQgcm93IGl0ZW1zLXN0cmV0Y2hcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICA8cS1pbnB1dFxuICAgICAgICB2LW1vZGVsPVwicVwiXG4gICAgICAgIDpsYWJlbD1cIiR0KCdTZWFyY2gnKVwiXG4gICAgICAgIG91dGxpbmVkXG4gICAgICAgIGxhenktcnVsZXNcbiAgICAgICAgOmJnLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXk2MDAnIDogJ2lucHV0J1wiXG4gICAgICAgIGxhYmVsLWNvbG9yPVwiZ3JleVwiXG4gICAgICAgIGJvcmRlcmxlc3NcbiAgICAgICAgY2xhc3M9XCJpbnB1dC1ib3JkZXJsZXNzXCJcbiAgICAgID5cbiAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpwcmVwZW5kPlxuICAgICAgICAgIDxxLWljb24gbmFtZT1cImV2YS1zZWFyY2gtb3V0bGluZVwiIHNpemU9XCJzbVwiIC8+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6YXBwZW5kPlxuICAgICAgICAgIDxxLWljb25cbiAgICAgICAgICAgIHYtaWY9XCJoYXNGaWx0ZXJcIlxuICAgICAgICAgICAgY2xhc3M9XCJjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICBuYW1lPVwiY2xvc2VcIlxuICAgICAgICAgICAgY29sb3I9XCJncmV5XCJcbiAgICAgICAgICAgIEBjbGljaz1cInRoaXMucSA9ICcnXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9xLWlucHV0PlxuXG4gICAgICA8dGVtcGxhdGUgdi1pZj1cImhhc1Jlc3VsdHMgJiYgaGFzRmlsdGVyICYmICFhd2FpdGluZ1NlYXJjaFwiPlxuICAgICAgICA8cS1saXN0IHNlcGFyYXRvcj5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJpdGVtcyBpbiBmb29kX2xpc3RcIiA6a2V5PVwiaXRlbXNcIj5cbiAgICAgICAgICAgIDxxLWl0ZW0gQGNsaWNrPVwib25DbGlja2l0ZW0oaXRlbXMpXCIgY2xpY2thYmxlPlxuICAgICAgICAgICAgICA8U2VhcmNoTGlzdEZvb2RcbiAgICAgICAgICAgICAgICA6aXRlbXM9XCJpdGVtc1wiXG4gICAgICAgICAgICAgICAgOm1lcmNoYW50X2xpc3Q9XCJtZXJjaGFudF9saXN0XCJcbiAgICAgICAgICAgICAgPjwvU2VhcmNoTGlzdEZvb2Q+XG4gICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3EtbGlzdD5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgdi1lbHNlLWlmPVwiaGFzRmlsdGVyICYmIGF3YWl0aW5nU2VhcmNoXCI+XG4gICAgICAgIDxxLWxpc3Q+XG4gICAgICAgICAgPHEtaXRlbSB2LWZvcj1cImkgaW4gOFwiIDprZXk9XCJpXCI+XG4gICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgICAgICA8cS1za2VsZXRvbiB3aWR0aD1cIjgwcHhcIiBoZWlnaHQ9XCI4MHB4XCIgLz5cbiAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgIDxxLXNrZWxldG9uIHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICAgICAgPHEtc2tlbGV0b24gdHlwZT1cInRleHRcIiBjbGFzcz1cInctNTBcIiAvPlxuICAgICAgICAgICAgICA8cS1za2VsZXRvbiB0eXBlPVwidGV4dFwiIGNsYXNzPVwidy03MFwiIC8+XG4gICAgICAgICAgICAgIDxxLXNrZWxldG9uIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJ3LTI1XCIgLz5cbiAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgIDwvcS1saXN0PlxuICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jZW50ZXJcIiBzdHlsZT1cIm1pbi1oZWlnaHQ6IDg5JVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBmdWxsLXdpZHRoXCI+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImhhc0ZpbHRlciAmJiAhYXdhaXRpbmdTZWFyY2hcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDUgdGV4dC13ZWlnaHQtYm9sZFwiPlxuICAgICAgICAgICAgICAgIHt7ICR0KFwiTm8gaXRlbXMgZm91bmRcIikgfX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1ncmV5IGZvbnQxMlwiPlxuICAgICAgICAgICAgICAgIHt7ICR0KFwiU29ycnksIHdlIGNvdWxkbid0IGZpbmQgYW55IHJlc3VsdHNcIikgfX1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICAgICAgICAgIDxxLWltZ1xuICAgICAgICAgICAgICAgIHNyYz1cInNlYXJjaC5wbmdcIlxuICAgICAgICAgICAgICAgIGZpdD1cImZpbGxcIlxuICAgICAgICAgICAgICAgIHNwaW5uZXItY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICBzdHlsZT1cImhlaWdodDogODBweDsgbWF4LXdpZHRoOiA4MHB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDUgdGV4dC13ZWlnaHQtYm9sZFwiPlxuICAgICAgICAgICAgICAgIHt7ICR0KFwiU2VhcmNoIEl0ZW1zXCIpIH19XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtZ3JleSBmb250MTJcIj5cbiAgICAgICAgICAgICAgICB7eyAkdChcIlNlYXJjaCBpdGVtcyBmcm9tXCIpIH19XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJNZW51U3RvcmUuZGF0YV9pbmZvW3NsdWddXCI+XG4gICAgICAgICAgICAgICAgICB7eyBNZW51U3RvcmUuZGF0YV9pbmZvW3NsdWddLnJlc3RhdXJhbnRfbmFtZSB9fVxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L2Rpdj5cbiAgICA8IS0tIGNvbC0xMiAtLT5cblxuICAgIDxJdGVtRGV0YWlscyByZWY9XCJyZWZJdGVtXCIgOnNsdWc9XCJzbHVnXCIgQGFmdGVyLWFkZGl0ZW1zPVwiYWZ0ZXJBZGRpdGVtc1wiIC8+XG4gICAgPEl0ZW1EZXRhaWxzQ2hlY2tib3hcbiAgICAgIHJlZj1cInJlZkl0ZW0yXCJcbiAgICAgIDpzbHVnPVwic2x1Z1wiXG4gICAgICBAYWZ0ZXItYWRkaXRlbXM9XCJhZnRlckFkZGl0ZW1zXCJcbiAgICAvPlxuICA8L3EtcGFnZT5cblxuICA8cS1mb290ZXJcbiAgICB2LWlmPVwiQ2FydFN0b3JlLml0ZW1zX2NvdW50ID4gMCAmJiBpdGVtX2FkZGVkID09IHRydWVcIlxuICAgIHJldmVhbFxuICAgIGNsYXNzPVwicS1wbC1tZCBxLXByLW1kIHEtcGItc20gcS1wdC1zbSB0ZXh0LWRhcmtcIlxuICAgIDpjbGFzcz1cIntcbiAgICAgICdiZy1wcmltYXJ5JzogIUNhcnRTdG9yZS5jYXJ0X3JlbG9hZGluZyxcbiAgICAgICdiZy1ncmV5LTUnOiBDYXJ0U3RvcmUuY2FydF9yZWxvYWRpbmcsXG4gICAgfVwiXG4gID5cbiAgICA8cS1idG5cbiAgICAgIHRvPVwiL2NoZWNrb3V0XCJcbiAgICAgIDpsb2FkaW5nPVwiQ2FydFN0b3JlLmNhcnRfbG9hZGluZ1wiXG4gICAgICA6ZGlzYWJsZT1cIiFDYXJ0U3RvcmUuY2FuUHJvY2VlZFwiXG4gICAgICB1bmVsZXZhdGVkXG4gICAgICB0ZXh0LWNvbG9yPVwid2hpdGVcIlxuICAgICAgbm8tY2Fwc1xuICAgICAgY2xhc3M9XCJyYWRpdXMxMCBmaXRcIlxuICAgICAgOmNvbG9yPVwie1xuICAgICAgICBwcmltYXJ5OiAhQ2FydFN0b3JlLmNhcnRfcmVsb2FkaW5nLFxuICAgICAgICAnZ3JleS01JzogQ2FydFN0b3JlLmNhcnRfcmVsb2FkaW5nLFxuICAgICAgfVwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzcz1cInJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGZpdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC13ZWlnaHQtYm9sZCBmb250MTdcIj57eyAkdChcIkNoZWNrb3V0XCIpIH19PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXdlaWdodC1ib2xkIGZvbnQxNlwiPlxuICAgICAgICAgIHt7IENhcnRTdG9yZS5jYXJ0X3N1YnRvdGFsLnZhbHVlIH19XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9xLWJ0bj5cbiAgPC9xLWZvb3Rlcj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBkZWZpbmVBc3luY0NvbXBvbmVudCB9IGZyb20gXCJ2dWVcIjtcbmltcG9ydCBBUElpbnRlcmZhY2UgZnJvbSBcInNyYy9hcGkvQVBJaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyB1c2VNZW51U3RvcmUgfSBmcm9tIFwic3RvcmVzL01lbnVTdG9yZVwiO1xuaW1wb3J0IHsgdXNlQ2FydFN0b3JlIH0gZnJvbSBcInNyYy9zdG9yZXMvQ2FydFN0b3JlXCI7XG5pbXBvcnQgeyB1c2VEYXRhU3RvcmUgfSBmcm9tIFwic3RvcmVzL0RhdGFTdG9yZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiU2VhcmNoSXRlbXNcIixcbiAgY29tcG9uZW50czoge1xuICAgIFNlYXJjaExpc3RGb29kOiBkZWZpbmVBc3luY0NvbXBvbmVudCgoKSA9PlxuICAgICAgaW1wb3J0KFwiY29tcG9uZW50cy9TZWFyY2hMaXN0Rm9vZC52dWVcIilcbiAgICApLFxuICAgIEl0ZW1EZXRhaWxzOiBkZWZpbmVBc3luY0NvbXBvbmVudCgoKSA9PlxuICAgICAgaW1wb3J0KFwiY29tcG9uZW50cy9JdGVtRGV0YWlscy52dWVcIilcbiAgICApLFxuICAgIEl0ZW1EZXRhaWxzQ2hlY2tib3g6IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+XG4gICAgICBpbXBvcnQoXCJjb21wb25lbnRzL0l0ZW1EZXRhaWxzQ2hlY2tib3gudnVlXCIpXG4gICAgKSxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2x1ZzogXCJcIixcbiAgICAgIHE6IFwiXCIsXG4gICAgICBmb29kX2xpc3Q6IFtdLFxuICAgICAgYXdhaXRpbmdTZWFyY2g6IGZhbHNlLFxuICAgICAgaXRlbV9hZGRlZDogZmFsc2UsXG4gICAgfTtcbiAgfSxcbiAgc2V0dXAoKSB7XG4gICAgY29uc3QgTWVudVN0b3JlID0gdXNlTWVudVN0b3JlKCk7XG4gICAgY29uc3QgQ2FydFN0b3JlID0gdXNlQ2FydFN0b3JlKCk7XG4gICAgY29uc3QgRGF0YVN0b3JlID0gdXNlRGF0YVN0b3JlKCk7XG4gICAgcmV0dXJuIHsgTWVudVN0b3JlLCBDYXJ0U3RvcmUsIERhdGFTdG9yZSB9O1xuICB9LFxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuc2x1ZyA9IHRoaXMuJHJvdXRlLnF1ZXJ5LnNsdWc7XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgcShuZXdkYXRhLCBvbGRhdGEpIHtcbiAgICAgIGlmICghdGhpcy5hd2FpdGluZ1NlYXJjaCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdHlwZW9mIHRoaXMucSA9PT0gXCJ1bmRlZmluZWRcIiB8fFxuICAgICAgICAgIHRoaXMucSA9PT0gbnVsbCB8fFxuICAgICAgICAgIHRoaXMucSA9PT0gXCJcIiB8fFxuICAgICAgICAgIHRoaXMucSA9PT0gXCJudWxsXCIgfHxcbiAgICAgICAgICB0aGlzLnEgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5mZXRjaERhdGFQb3N0KFxuICAgICAgICAgICAgXCJzZWFyY2hJdGVtc1wiLFxuICAgICAgICAgICAgXCJxPVwiICsgdGhpcy5xICsgXCImc2x1Zz1cIiArIHRoaXMuc2x1Z1xuICAgICAgICAgIClcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoZGF0YSk7XG4gICAgICAgICAgICAgIHRoaXMuZm9vZF9saXN0ID0gZGF0YS5kZXRhaWxzLmRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZm9vZF9saXN0ID0gW107XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5hd2FpdGluZ1NlYXJjaCA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIDEwMDApOyAvLyAxIHNlYyBkZWxheVxuICAgICAgfVxuICAgICAgdGhpcy5hd2FpdGluZ1NlYXJjaCA9IHRydWU7XG4gICAgfSxcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBoYXNGaWx0ZXIoKSB7XG4gICAgICBpZiAoIUFQSWludGVyZmFjZS5lbXB0eSh0aGlzLnEpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgaGFzUmVzdWx0cygpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmZvb2RfbGlzdCkubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25DbGlja2l0ZW0oZGF0YSkge1xuICAgICAgdGhpcy5pdGVtX2FkZGVkID0gZmFsc2U7XG4gICAgICBjb25zdCAkcGFyYW1zID0ge1xuICAgICAgICBjYXRfaWQ6IGRhdGEuY2F0X2lkLFxuICAgICAgICBpdGVtX3V1aWQ6IGRhdGEuaXRlbV91dWlkLFxuICAgICAgfTtcbiAgICAgIGlmICh0aGlzLkRhdGFTdG9yZS5hZGRvbnNfdXNlX2NoZWNrYm94KSB7XG4gICAgICAgIHRoaXMuJHJlZnMucmVmSXRlbTIuc2hvd0l0ZW0yKCRwYXJhbXMsIHRoaXMuc2x1Zyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiRyZWZzLnJlZkl0ZW0uc2hvd0l0ZW0yKCRwYXJhbXMsIHRoaXMuc2x1Zyk7XG4gICAgICB9XG4gICAgfSxcbiAgICBhZnRlckFkZGl0ZW1zKCkge1xuICAgICAgdGhpcy5pdGVtX2FkZGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuQ2FydFN0b3JlLmdldENhcnQoZmFsc2UsIHRoaXMuQ2FydFN0b3JlLmNhcnRfcGF5bG9hZCk7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiJdLCJmaWxlIjoiYXNzZXRzL1NlYXJjaEl0ZW1zLjVlMTk2M2M4LmpzIn0=
