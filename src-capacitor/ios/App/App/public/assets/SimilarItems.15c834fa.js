import { _ as _export_sfc, l as defineAsyncComponent, u as __vitePreload, r as ref, R as useDataStore, o as onMounted, n as resolveComponent, p as openBlock, V as createElementBlock, F as Fragment, f as createVNode, U as createBaseVNode, Z as toDisplayString, t as withCtx, X as renderList, q as createBlock, Y as QBtn, a6 as createTextVNode, aA as createCommentVNode, m as APIinterface } from "./index.61ed5618.js";
import { Q as QSkeleton } from "./QSkeleton.39737398.js";
import { Q as QImg } from "./QImg.6c27044c.js";
import { u as useCartStore } from "./CartStore.484ff101.js";
import { u as useMenuStore } from "./MenuStore.f3a21da3.js";
import { S as Swiper, a as SwiperSlide } from "./swiper-slide.8a0c58df.js";
/* empty css                     */const _sfc_main = {
  name: "SimilarItems",
  props: ["title", "bg", "merchant_id"],
  components: {
    Swiper,
    SwiperSlide,
    ItemDetails: defineAsyncComponent(
      () => __vitePreload(() => import("./ItemDetails.81a570cb.js"), true ? ["assets/ItemDetails.81a570cb.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QCircularProgress.996c3e2f.js","assets/format.7f7370d3.js","assets/QImg.6c27044c.js","assets/QChip.f183a4f1.js","assets/QBtnToggle.6ffa195b.js","assets/QBtnGroup.abc2d1c7.js","assets/QSelect.311187d6.js","assets/QItemLabel.a9365c5b.js","assets/QMenu.8e482cd8.js","assets/selection.50b4cb0c.js","assets/rtl.f3ed811c.js","assets/QSpace.f164c087.js","assets/CartStore.484ff101.js","assets/FavoriteStore.f91e6f21.js","assets/DeliverySched.4e9605bf.js"] : void 0)
    ),
    ItemDetailsCheckbox: defineAsyncComponent(
      () => __vitePreload(() => import("./ItemDetailsCheckbox.63e0acb1.js"), true ? ["assets/ItemDetailsCheckbox.63e0acb1.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QCircularProgress.996c3e2f.js","assets/format.7f7370d3.js","assets/QImg.6c27044c.js","assets/QItemLabel.a9365c5b.js","assets/QList.b69a7e5b.js","assets/QSelect.311187d6.js","assets/QChip.f183a4f1.js","assets/QMenu.8e482cd8.js","assets/selection.50b4cb0c.js","assets/rtl.f3ed811c.js","assets/QSpace.f164c087.js","assets/QBtnGroup.abc2d1c7.js","assets/ClosePopup.9d17b53c.js","assets/CartStore.484ff101.js","assets/FavoriteStore.f91e6f21.js","assets/DeliverySched.4e9605bf.js"] : void 0)
    )
  },
  setup(props) {
    const slide = ref(0);
    const loading = ref(false);
    const data = ref([]);
    const rows = ref(2);
    const moneyConfig = ref([]);
    const refItem = ref(null);
    const refItem2 = ref(null);
    const payload = ref([
      "items",
      "subtotal",
      "distance_local",
      "items_count",
      "merchant_info",
      "check_opening",
      "transaction_info"
    ]);
    const CartStore = useCartStore();
    const MenuStore = useMenuStore();
    const DataStore = useDataStore();
    onMounted(() => {
      if (Object.keys(MenuStore.data_similar_items).length <= 0) {
        MenuStore.getSimilarItems(props.merchant_id);
      } else {
        if (!MenuStore.data_similar_items[props.merchant_id]) {
          MenuStore.getSimilarItems(props.merchant_id);
        }
      }
    });
    const getSimilarItems = () => {
      loading.value = true;
      APIinterface.SimilarItems(
        APIinterface.getStorage("cart_uuid"),
        rows.value
      ).then((results) => {
        data.value = results.details;
      }).catch((error) => {
        console.debug(error);
      }).then((data2) => {
        loading.value = false;
      });
    };
    const onClickitem = (data2) => {
      const $params = {
        cat_id: data2.cat_id,
        item_uuid: data2.item_uuid
      };
      if (DataStore.addons_use_checkbox) {
        refItem2.value.showItem2($params, CartStore.cart_merchant.slug);
      } else {
        refItem.value.showItem2($params, CartStore.cart_merchant.slug);
      }
    };
    const afterAdditems = (data2) => {
      CartStore.getCart(false, payload.value);
    };
    const getMoneyConfig = () => {
      APIinterface.getMoneyConfig().then((data2) => {
        moneyConfig.value = data2.details;
      }).catch((error) => {
      }).then((data2) => {
      });
    };
    return {
      slide,
      loading,
      data,
      getSimilarItems,
      onClickitem,
      getMoneyConfig,
      moneyConfig,
      CartStore,
      afterAdditems,
      refItem,
      refItem2,
      MenuStore
    };
  }
};
const _hoisted_1 = { class: "row q-gutter-sm" };
const _hoisted_2 = { class: "col-9" };
const _hoisted_3 = { class: "col-2" };
const _hoisted_4 = { class: "text-h6 text-weight-boldx q-mb-xs" };
const _hoisted_5 = ["onClick"];
const _hoisted_6 = { class: "relative-position" };
const _hoisted_7 = { class: "absolute-bottom-right q-pa-sm" };
const _hoisted_8 = { class: "q-pt-sm" };
const _hoisted_9 = {
  key: 0,
  class: "text-weight-bold text-h5"
};
const _hoisted_10 = { class: "line-normal text-body2" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("div", { class: "q-pa-sm" }, null, -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_swiper = resolveComponent("swiper");
  const _component_ItemDetails = resolveComponent("ItemDetails");
  const _component_ItemDetailsCheckbox = resolveComponent("ItemDetailsCheckbox");
  return openBlock(), createElementBlock(Fragment, null, [
    $setup.MenuStore.loading_similar_items ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
      createVNode(QSkeleton, {
        type: "text",
        style: { "width": "80px" }
      }),
      createBaseVNode("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(QSkeleton, {
            height: "60px",
            square: "",
            class: "radius8"
          })
        ]),
        createBaseVNode("div", _hoisted_3, [
          createVNode(QSkeleton, {
            height: "60px",
            square: "",
            class: "radius8"
          })
        ])
      ])
    ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
      createBaseVNode("div", _hoisted_4, toDisplayString($props.title), 1),
      createVNode(_component_swiper, {
        "slides-per-view": 2.5,
        "space-between": 10
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList($setup.MenuStore.data_similar_items[$props.merchant_id], (items) => {
            return openBlock(), createBlock(_component_swiper_slide, { key: items }, {
              default: withCtx(() => [
                createBaseVNode("div", {
                  class: "font12 cursor-pointer",
                  onClick: ($event) => $setup.onClickitem(items)
                }, [
                  createBaseVNode("div", _hoisted_6, [
                    createVNode(QImg, {
                      src: items.url_image,
                      style: { "max-width": "100%", "height": "100px" },
                      "spinner-color": "primary",
                      "spinner-size": "sm",
                      "placeholder-src": "placeholder.png",
                      class: "radius10"
                    }, null, 8, ["src"]),
                    createBaseVNode("div", _hoisted_7, [
                      createVNode(QBtn, {
                        round: "",
                        color: "dark",
                        icon: "add",
                        unelevated: "",
                        size: "sm"
                      })
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_8, [
                    items.price ? (openBlock(), createElementBlock("div", _hoisted_9, [
                      items.price[0] ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                        items.price[0].discount > 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                          createTextVNode(toDisplayString(items.price[0].pretty_price_after_discount), 1)
                        ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                          createTextVNode(toDisplayString(items.price[0].pretty_price), 1)
                        ], 64))
                      ], 64)) : createCommentVNode("", true)
                    ])) : createCommentVNode("", true),
                    createBaseVNode("div", _hoisted_10, toDisplayString(items.item_name), 1)
                  ])
                ], 8, _hoisted_5)
              ]),
              _: 2
            }, 1024);
          }), 128))
        ]),
        _: 1
      }, 8, ["slides-per-view"])
    ], 64)),
    createVNode(_component_ItemDetails, {
      ref: "refItem",
      slug: $setup.CartStore.cart_merchant.slug,
      money_config: $setup.MenuStore.money_config,
      onAfterAdditems: $setup.afterAdditems
    }, null, 8, ["slug", "money_config", "onAfterAdditems"]),
    createVNode(_component_ItemDetailsCheckbox, {
      ref: "refItem2",
      slug: $setup.CartStore.cart_merchant.slug,
      money_config: $setup.MenuStore.money_config,
      onAfterAdditems: $setup.afterAdditems
    }, null, 8, ["slug", "money_config", "onAfterAdditems"]),
    _hoisted_11
  ], 64);
}
var SimilarItems = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "SimilarItems.vue"]]);
export { SimilarItems as default };
//# sourceMappingURL=data:application/json;base64,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eUJBRTNDLE1BQTBEO0FBQUEsV0FENURHLG9DQXFDV0QsMkJBcENPLE9BQVM7QUFHekI7QUFGVywrQkFHVCxNQThCTTtBQUFBLGdCQTlCTkgsZ0JBOEJNO0FBQUEsa0JBOUJELE9BQU07QUFBQSxrQkFBeUI7QUFBd0I7a0JBQzFEQSxnQkFZTTtBQUFBLG9CQVhKQyxZQU9TO0FBQUEsc0JBTk4sS0FBSyxNQUFNO0FBQUEsc0JBQ1osU0FBc0M7QUFBQSxzQkFDdEMsaUJBQWM7QUFBQSxzQkFDZCxnQkFBYTtBQUFBLHNCQUNiO0FBQWdCLHNCQUNoQixPQUFNO0FBQUE7b0JBRVJELGdCQUVNO0FBQUEsc0JBREpDLFlBQTREO0FBQUEsd0JBQXJEO0FBQUEsd0JBQU0sT0FBTTtBQUFBLHdCQUFPLE1BQUs7QUFBQSx3QkFBTTtBQUFBLHdCQUFXO0FBQUs7OztrQkFJekRELGdCQWNNLE9BZE4sWUFjTTtBQUFBLG9CQWJ3QyxNQUFNLFNBQWxESSxnQ0FTTSxPQVROLFlBU007QUFBQSxzQkFSWSxNQUFNLE1BQUssbUJBQTNCRixtQkFPV0M7QUFBQSx3QkFOTyxNQUFNLE1BQUssR0FBSSxXQUFRLGtCQUF2Q0QsbUJBRVdDO0FBQUEsMERBRE4sTUFBTSxNQUFLLEdBQUk7QUFBMkIsZ0RBRS9DRCxtQkFFV0M7QUFBQTtBQURxQjs7O29CQUlwQ0g7QUFDb0I7Ozs7Ozs7Ozs7SUFTaENDLFlBS0U7QUFBQSxNQUpBLEtBQUk7QUFBQSxNQUNILE1BQU0saUJBQVUsY0FBYztBQUFBLE1BQzlCLGNBQWMsT0FBUyxVQUFDO0FBQUEsTUFDeEIsaUJBQWdCLE9BQWE7QUFBQTtJQUdoQ0EsWUFLRTtBQUFBLE1BSkEsS0FBSTtBQUFBLE1BQ0gsTUFBTSxpQkFBVSxjQUFjO0FBQUEsTUFDOUIsY0FBYyxPQUFTLFVBQUM7QUFBQSxNQUN4QixpQkFBZ0IsT0FBYTtBQUFBO0lBR2hDO0FBQUEiLCJuYW1lcyI6WyJkYXRhIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9jcmVhdGVWTm9kZSIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfRnJhZ21lbnQiLCJfb3BlbkJsb2NrIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvU2ltaWxhckl0ZW1zLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDx0ZW1wbGF0ZSB2LWlmPVwiTWVudVN0b3JlLmxvYWRpbmdfc2ltaWxhcl9pdGVtc1wiPlxuICAgIDxxLXNrZWxldG9uIHR5cGU9XCJ0ZXh0XCIgc3R5bGU9XCJ3aWR0aDogODBweFwiIC8+XG4gICAgPGRpdiBjbGFzcz1cInJvdyBxLWd1dHRlci1zbVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC05XCI+XG4gICAgICAgIDxxLXNrZWxldG9uIGhlaWdodD1cIjYwcHhcIiBzcXVhcmUgY2xhc3M9XCJyYWRpdXM4XCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC0yXCI+XG4gICAgICAgIDxxLXNrZWxldG9uIGhlaWdodD1cIjYwcHhcIiBzcXVhcmUgY2xhc3M9XCJyYWRpdXM4XCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L3RlbXBsYXRlPlxuICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg2IHRleHQtd2VpZ2h0LWJvbGR4IHEtbWIteHNcIj57eyB0aXRsZSB9fTwvZGl2PlxuICAgIDxzd2lwZXIgOnNsaWRlcy1wZXItdmlldz1cIjIuNVwiIDpzcGFjZS1iZXR3ZWVuPVwiMTBcIj5cbiAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICB2LWZvcj1cIml0ZW1zIGluIE1lbnVTdG9yZS5kYXRhX3NpbWlsYXJfaXRlbXNbbWVyY2hhbnRfaWRdXCJcbiAgICAgICAgOmtleT1cIml0ZW1zXCJcbiAgICAgID5cbiAgICAgICAgPHN3aXBlci1zbGlkZT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udDEyIGN1cnNvci1wb2ludGVyXCIgQGNsaWNrPVwib25DbGlja2l0ZW0oaXRlbXMpXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVsYXRpdmUtcG9zaXRpb25cIj5cbiAgICAgICAgICAgICAgPHEtaW1nXG4gICAgICAgICAgICAgICAgOnNyYz1cIml0ZW1zLnVybF9pbWFnZVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJtYXgtd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwcHhcIlxuICAgICAgICAgICAgICAgIHNwaW5uZXItY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICBzcGlubmVyLXNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXItc3JjPVwicGxhY2Vob2xkZXIucG5nXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInJhZGl1czEwXCJcbiAgICAgICAgICAgICAgPjwvcS1pbWc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhYnNvbHV0ZS1ib3R0b20tcmlnaHQgcS1wYS1zbVwiPlxuICAgICAgICAgICAgICAgIDxxLWJ0biByb3VuZCBjb2xvcj1cImRhcmtcIiBpY29uPVwiYWRkXCIgdW5lbGV2YXRlZCBzaXplPVwic21cIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicS1wdC1zbVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC13ZWlnaHQtYm9sZCB0ZXh0LWg1XCIgdi1pZj1cIml0ZW1zLnByaWNlXCI+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJpdGVtcy5wcmljZVswXVwiPlxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJpdGVtcy5wcmljZVswXS5kaXNjb3VudCA+IDBcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgaXRlbXMucHJpY2VbMF0ucHJldHR5X3ByaWNlX2FmdGVyX2Rpc2NvdW50IH19XG4gICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgICAge3sgaXRlbXMucHJpY2VbMF0ucHJldHR5X3ByaWNlIH19XG4gICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGluZS1ub3JtYWwgdGV4dC1ib2R5MlwiPlxuICAgICAgICAgICAgICAgIHt7IGl0ZW1zLml0ZW1fbmFtZSB9fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3N3aXBlci1zbGlkZT5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC9zd2lwZXI+XG4gIDwvdGVtcGxhdGU+XG5cbiAgPEl0ZW1EZXRhaWxzXG4gICAgcmVmPVwicmVmSXRlbVwiXG4gICAgOnNsdWc9XCJDYXJ0U3RvcmUuY2FydF9tZXJjaGFudC5zbHVnXCJcbiAgICA6bW9uZXlfY29uZmlnPVwiTWVudVN0b3JlLm1vbmV5X2NvbmZpZ1wiXG4gICAgQGFmdGVyLWFkZGl0ZW1zPVwiYWZ0ZXJBZGRpdGVtc1wiXG4gIC8+XG5cbiAgPEl0ZW1EZXRhaWxzQ2hlY2tib3hcbiAgICByZWY9XCJyZWZJdGVtMlwiXG4gICAgOnNsdWc9XCJDYXJ0U3RvcmUuY2FydF9tZXJjaGFudC5zbHVnXCJcbiAgICA6bW9uZXlfY29uZmlnPVwiTWVudVN0b3JlLm1vbmV5X2NvbmZpZ1wiXG4gICAgQGFmdGVyLWFkZGl0ZW1zPVwiYWZ0ZXJBZGRpdGVtc1wiXG4gIC8+XG5cbiAgPGRpdiBjbGFzcz1cInEtcGEtc21cIj48L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBkZWZpbmVBc3luY0NvbXBvbmVudCwgcmVmLCBvbk1vdW50ZWQgfSBmcm9tIFwidnVlXCI7XG5pbXBvcnQgQVBJaW50ZXJmYWNlIGZyb20gXCJzcmMvYXBpL0FQSWludGVyZmFjZVwiO1xuaW1wb3J0IHsgdXNlQ2FydFN0b3JlIH0gZnJvbSBcInNyYy9zdG9yZXMvQ2FydFN0b3JlXCI7XG5pbXBvcnQgeyB1c2VNZW51U3RvcmUgfSBmcm9tIFwic3JjL3N0b3Jlcy9NZW51U3RvcmVcIjtcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tIFwic3dpcGVyL3Z1ZVwiO1xuaW1wb3J0IFwic3dpcGVyL2Nzc1wiO1xuaW1wb3J0IHsgdXNlRGF0YVN0b3JlIH0gZnJvbSBcInN0b3Jlcy9EYXRhU3RvcmVcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIlNpbWlsYXJJdGVtc1wiLFxuICBwcm9wczogW1widGl0bGVcIiwgXCJiZ1wiLCBcIm1lcmNoYW50X2lkXCJdLFxuICBjb21wb25lbnRzOiB7XG4gICAgU3dpcGVyLFxuICAgIFN3aXBlclNsaWRlLFxuICAgIEl0ZW1EZXRhaWxzOiBkZWZpbmVBc3luY0NvbXBvbmVudCgoKSA9PlxuICAgICAgaW1wb3J0KFwiY29tcG9uZW50cy9JdGVtRGV0YWlscy52dWVcIilcbiAgICApLFxuICAgIEl0ZW1EZXRhaWxzQ2hlY2tib3g6IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+XG4gICAgICBpbXBvcnQoXCJjb21wb25lbnRzL0l0ZW1EZXRhaWxzQ2hlY2tib3gudnVlXCIpXG4gICAgKSxcbiAgfSxcbiAgc2V0dXAocHJvcHMpIHtcbiAgICBjb25zdCBzbGlkZSA9IHJlZigwKTtcbiAgICBjb25zdCBsb2FkaW5nID0gcmVmKGZhbHNlKTtcbiAgICBjb25zdCBkYXRhID0gcmVmKFtdKTtcbiAgICBjb25zdCByb3dzID0gcmVmKDIpO1xuICAgIGNvbnN0IG1vbmV5Q29uZmlnID0gcmVmKFtdKTtcbiAgICBjb25zdCByZWZJdGVtID0gcmVmKG51bGwpO1xuICAgIGNvbnN0IHJlZkl0ZW0yID0gcmVmKG51bGwpO1xuICAgIGNvbnN0IHBheWxvYWQgPSByZWYoW1xuICAgICAgXCJpdGVtc1wiLFxuICAgICAgXCJzdWJ0b3RhbFwiLFxuICAgICAgXCJkaXN0YW5jZV9sb2NhbFwiLFxuICAgICAgXCJpdGVtc19jb3VudFwiLFxuICAgICAgXCJtZXJjaGFudF9pbmZvXCIsXG4gICAgICBcImNoZWNrX29wZW5pbmdcIixcbiAgICAgIFwidHJhbnNhY3Rpb25faW5mb1wiLFxuICAgIF0pO1xuXG4gICAgY29uc3QgQ2FydFN0b3JlID0gdXNlQ2FydFN0b3JlKCk7XG4gICAgY29uc3QgTWVudVN0b3JlID0gdXNlTWVudVN0b3JlKCk7XG4gICAgY29uc3QgRGF0YVN0b3JlID0gdXNlRGF0YVN0b3JlKCk7XG5cbiAgICBvbk1vdW50ZWQoKCkgPT4ge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKE1lbnVTdG9yZS5kYXRhX3NpbWlsYXJfaXRlbXMpLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgIE1lbnVTdG9yZS5nZXRTaW1pbGFySXRlbXMocHJvcHMubWVyY2hhbnRfaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFNZW51U3RvcmUuZGF0YV9zaW1pbGFyX2l0ZW1zW3Byb3BzLm1lcmNoYW50X2lkXSkge1xuICAgICAgICAgIE1lbnVTdG9yZS5nZXRTaW1pbGFySXRlbXMocHJvcHMubWVyY2hhbnRfaWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBnZXRTaW1pbGFySXRlbXMgPSAoKSA9PiB7XG4gICAgICBsb2FkaW5nLnZhbHVlID0gdHJ1ZTtcbiAgICAgIEFQSWludGVyZmFjZS5TaW1pbGFySXRlbXMoXG4gICAgICAgIEFQSWludGVyZmFjZS5nZXRTdG9yYWdlKFwiY2FydF91dWlkXCIpLFxuICAgICAgICByb3dzLnZhbHVlXG4gICAgICApXG4gICAgICAgIC50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgICAgZGF0YS52YWx1ZSA9IHJlc3VsdHMuZGV0YWlscztcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZGVidWcoZXJyb3IpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGxvYWRpbmcudmFsdWUgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9uQ2xpY2tpdGVtID0gKGRhdGEpID0+IHtcbiAgICAgIGNvbnN0ICRwYXJhbXMgPSB7XG4gICAgICAgIGNhdF9pZDogZGF0YS5jYXRfaWQsXG4gICAgICAgIGl0ZW1fdXVpZDogZGF0YS5pdGVtX3V1aWQsXG4gICAgICB9O1xuICAgICAgaWYgKERhdGFTdG9yZS5hZGRvbnNfdXNlX2NoZWNrYm94KSB7XG4gICAgICAgIHJlZkl0ZW0yLnZhbHVlLnNob3dJdGVtMigkcGFyYW1zLCBDYXJ0U3RvcmUuY2FydF9tZXJjaGFudC5zbHVnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlZkl0ZW0udmFsdWUuc2hvd0l0ZW0yKCRwYXJhbXMsIENhcnRTdG9yZS5jYXJ0X21lcmNoYW50LnNsdWcpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBhZnRlckFkZGl0ZW1zID0gKGRhdGEpID0+IHtcbiAgICAgIENhcnRTdG9yZS5nZXRDYXJ0KGZhbHNlLCBwYXlsb2FkLnZhbHVlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0TW9uZXlDb25maWcgPSAoKSA9PiB7XG4gICAgICBBUElpbnRlcmZhY2UuZ2V0TW9uZXlDb25maWcoKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIG1vbmV5Q29uZmlnLnZhbHVlID0gZGF0YS5kZXRhaWxzO1xuICAgICAgICB9KVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge30pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7fSk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICBzbGlkZSxcbiAgICAgIGxvYWRpbmcsXG4gICAgICBkYXRhLFxuICAgICAgZ2V0U2ltaWxhckl0ZW1zLFxuICAgICAgb25DbGlja2l0ZW0sXG4gICAgICBnZXRNb25leUNvbmZpZyxcbiAgICAgIG1vbmV5Q29uZmlnLFxuICAgICAgQ2FydFN0b3JlLFxuICAgICAgYWZ0ZXJBZGRpdGVtcyxcbiAgICAgIHJlZkl0ZW0sXG4gICAgICByZWZJdGVtMixcbiAgICAgIE1lbnVTdG9yZSxcbiAgICB9O1xuICB9LFxufTtcbjwvc2NyaXB0PlxuIl0sImZpbGUiOiJhc3NldHMvU2ltaWxhckl0ZW1zLjE1YzgzNGZhLmpzIn0=
