import { _ as _export_sfc, l as defineAsyncComponent, u as __vitePreload, m as APIinterface, n as resolveComponent, p as openBlock, q as createBlock, t as withCtx, f as createVNode, V as createElementBlock, X as renderList, ac as QItem, ad as QItemSection, F as Fragment, U as createBaseVNode, Y as QBtn, a6 as createTextVNode, Z as toDisplayString, aA as createCommentVNode, a7 as normalizeClass } from "./index.61ed5618.js";
import { Q as QSkeleton } from "./QSkeleton.39737398.js";
import { Q as QList } from "./QList.b69a7e5b.js";
import { Q as QImg } from "./QImg.6c27044c.js";
import { Q as QItemLabel } from "./QItemLabel.a9365c5b.js";
import { Q as QSlideItem } from "./QSlideItem.7b72eeea.js";
import { u as useCartStore } from "./CartStore.484ff101.js";
import "./QPullToRefresh.3d10c02d.js";
import "./touch.96e0ae37.js";
import "./selection.50b4cb0c.js";
import "./format.7f7370d3.js";
import "./use-render-cache.b9e045af.js";
const _sfc_main = {
  name: "CartDetails",
  props: ["payload", "is_checkout", "page"],
  components: {
    FavsItem: defineAsyncComponent(() => __vitePreload(() => import("./FavsItem.341b44fd.js"), true ? ["assets/FavsItem.341b44fd.js","assets/index.61ed5618.js","assets/index.dbee30c0.css"] : void 0))
  },
  data() {
    return {
      loading: false,
      items_count: 0,
      cart_loading: true,
      cart_reloading: false,
      cart_uuid: "",
      cart_items: [],
      cart_summary: [],
      cart_merchant: [],
      cart_total: [],
      cart_subtotal: [],
      error: [],
      qty_options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      transaction_data: [],
      delivery_option: [],
      services_list: [],
      out_of_range: false,
      is_close_slide: false,
      data_slide: {}
    };
  },
  setup() {
    const CartStore = useCartStore();
    return { CartStore };
  },
  methods: {
    updateCartQty(Qty, itemQty, item) {
      let QtyTotal = itemQty + Qty;
      item.qty = QtyTotal;
      this.updateCartItems(QtyTotal, item);
    },
    updateCartItems(itemQty, item) {
      this.loading = true;
      APIinterface.updateCartItems(
        this.CartStore.cart_uuid,
        item.cart_row,
        itemQty
      ).then((data) => {
        this.CartStore.getCart(false, this.payload);
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data) => {
        this.loading = false;
      });
    },
    closeSlide(index) {
      console.log(index);
      if (this.data_slide[index]) {
        console.log(this.data_slide[index]);
        this.data_slide[index].reset();
      }
    },
    onRight(details, index) {
      this.data_slide[index] = details;
    },
    removeItem(items) {
      this.loading = true;
      APIinterface.removeCartItem(this.CartStore.cart_uuid, items.cart_row).then((data) => {
        this.CartStore.getCart(false, this.payload);
        this.$emit("afterRemoveitem");
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data) => {
        this.loading = false;
      });
    },
    clearCart() {
      this.loading = false;
      APIinterface.clearCart(APIinterface.getStorage("cart_uuid")).then((data) => {
        this.CartStore.getCart(false, this.payload);
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data) => {
        this.loading = false;
      });
    },
    afterSavefav(item) {
      this.removeItem(item);
    },
    lineItemTotal(qty, price) {
      console.log(qty + "x" + price);
      return parseFloat(price) * parseInt(qty);
    }
  }
};
const _hoisted_1 = { class: "row items-center inline q-gutter-md" };
const _hoisted_2 = { class: "text-subtitle2 text-weight-medium no-margin line-normal" };
const _hoisted_3 = ["innerHTML"];
const _hoisted_4 = { class: "text-grey ellipsis-2-linesx font13 line-normal" };
const _hoisted_5 = {
  key: 0,
  class: "text-dark"
};
const _hoisted_6 = { class: "row justify-between items-center" };
const _hoisted_7 = { class: "text-grey-7 font12 text-weight-medium" };
const _hoisted_8 = { class: "col-5" };
const _hoisted_9 = { class: "row items-center justify-center" };
const _hoisted_10 = { class: "col no-padding text-center" };
const _hoisted_11 = { class: "col no-padding text-center text-weight-medium" };
const _hoisted_12 = { class: "col no-padding text-center" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DIV = resolveComponent("DIV");
  const _component_FavsItem = resolveComponent("FavsItem");
  return $setup.CartStore.cart_loading ? (openBlock(), createBlock(_component_DIV, { key: 0 }, {
    default: withCtx(() => [
      createVNode(QList, null, {
        default: withCtx(() => [
          (openBlock(), createElementBlock(Fragment, null, renderList(10, (items) => {
            return createVNode(QItem, { key: items }, {
              default: withCtx(() => [
                createVNode(QItemSection, { avatar: "" }, {
                  default: withCtx(() => [
                    createVNode(QSkeleton, { type: "circle" })
                  ]),
                  _: 1
                }),
                createVNode(QItemSection, null, {
                  default: withCtx(() => [
                    createVNode(QSkeleton, {
                      type: "text",
                      style: { "width": "80%" }
                    }),
                    createVNode(QSkeleton, { type: "text" }),
                    createVNode(QSkeleton, {
                      type: "text",
                      style: { "width": "20%" }
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
      })
    ]),
    _: 1
  })) : (openBlock(), createBlock(_component_DIV, { key: 1 }, {
    default: withCtx(() => [
      $setup.CartStore.items_count > 0 ? (openBlock(), createBlock(QList, {
        key: 0,
        separator: "",
        dense: ""
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList($setup.CartStore.cart_items, (items, index) => {
            return openBlock(), createBlock(QSlideItem, {
              key: items.item_id,
              onRight: (opt) => $options.onRight(opt, index),
              "left-color": "white",
              "right-color": _ctx.$q.dark.mode ? "grey600" : "white"
            }, {
              right: withCtx(() => [
                createBaseVNode("div", _hoisted_1, [
                  createVNode(QBtn, {
                    round: "",
                    unelevated: "",
                    color: "lightprimary",
                    "text-color": "primary",
                    size: "sm",
                    icon: "las la-times",
                    onClick: ($event) => $options.closeSlide(index)
                  }, null, 8, ["onClick"]),
                  createVNode(_component_FavsItem, {
                    ref_for: true,
                    ref: "favs",
                    layout: 2,
                    item_token: items.item_token,
                    cat_id: items.cat_id,
                    active: false,
                    size: "md",
                    onAfterSavefav: ($event) => $options.afterSavefav(items)
                  }, null, 8, ["item_token", "cat_id", "onAfterSavefav"]),
                  createVNode(QBtn, {
                    round: "",
                    unelevated: "",
                    color: "lightprimary",
                    "text-color": "primary",
                    size: "sm",
                    icon: "las la-trash-alt",
                    onClick: ($event) => $options.removeItem(items)
                  }, null, 8, ["onClick"])
                ])
              ]),
              default: withCtx(() => [
                createVNode(QItem, {
                  class: normalizeClass({
                    "bg-mydark text-white": _ctx.$q.dark.mode,
                    "bg-white text-black": !_ctx.$q.dark.mode
                  })
                }, {
                  default: withCtx(() => [
                    createVNode(QItemSection, { avatar: "" }, {
                      default: withCtx(() => [
                        createVNode(QImg, {
                          src: items.url_image,
                          lazy: "",
                          fit: "cover",
                          style: { "height": "70px", "width": "70px" },
                          class: "radius8",
                          "spinner-color": "secondary",
                          "spinner-size": "sm",
                          "placeholder-src": "placeholder.png"
                        }, null, 8, ["src"])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(QItemSection, null, {
                      default: withCtx(() => [
                        createVNode(QItemLabel, null, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_2, [
                              createBaseVNode("span", {
                                innerHTML: items.item_name
                              }, null, 8, _hoisted_3),
                              items.price.size_name != "" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                                createTextVNode(" (" + toDisplayString(items.price.size_name) + ") ", 1)
                              ], 64)) : createCommentVNode("", true)
                            ]),
                            createBaseVNode("div", _hoisted_4, [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(items.attributes, (attributes) => {
                                return openBlock(), createElementBlock(Fragment, { key: attributes }, [
                                  (openBlock(true), createElementBlock(Fragment, null, renderList(attributes, (attributes_data) => {
                                    return openBlock(), createElementBlock("span", {
                                      key: attributes_data,
                                      class: "q-mr-xs"
                                    }, toDisplayString(attributes_data) + ",", 1);
                                  }), 128))
                                ], 64);
                              }), 128)),
                              (openBlock(true), createElementBlock(Fragment, null, renderList(items.addons, (addons) => {
                                return openBlock(), createElementBlock(Fragment, { key: addons }, [
                                  (openBlock(true), createElementBlock(Fragment, null, renderList(addons.addon_items, (addon_items) => {
                                    return openBlock(), createElementBlock("div", { key: addon_items }, toDisplayString(addon_items.sub_item_name) + " (+" + toDisplayString(addon_items.pretty_addons_total) + ") ", 1);
                                  }), 128))
                                ], 64);
                              }), 128)),
                              items.special_instructions != "" ? (openBlock(), createElementBlock("div", _hoisted_5, ' "' + toDisplayString(items.special_instructions) + '" ', 1)) : createCommentVNode("", true)
                            ]),
                            createBaseVNode("div", _hoisted_6, [
                              createBaseVNode("div", _hoisted_7, [
                                items.price.discount <= 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                                  createTextVNode(toDisplayString(items.price.pretty_total), 1)
                                ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                                  createTextVNode(toDisplayString(items.price.pretty_total_after_discount), 1)
                                ], 64))
                              ]),
                              createBaseVNode("div", _hoisted_8, [
                                createBaseVNode("div", _hoisted_9, [
                                  createBaseVNode("div", _hoisted_10, [
                                    items.qty == 1 ? (openBlock(), createBlock(QBtn, {
                                      key: 0,
                                      unelevated: "",
                                      dense: "",
                                      size: "11px",
                                      icon: "delete",
                                      color: "primary",
                                      class: "radius8",
                                      onClick: ($event) => $options.removeItem(items)
                                    }, null, 8, ["onClick"])) : (openBlock(), createBlock(QBtn, {
                                      key: 1,
                                      unelevated: "",
                                      dense: "",
                                      size: "11px",
                                      icon: "remove",
                                      color: "primary",
                                      class: "radius8",
                                      onClick: ($event) => $options.updateCartQty(-1, items.qty, items)
                                    }, null, 8, ["onClick"]))
                                  ]),
                                  createBaseVNode("div", _hoisted_11, toDisplayString(items.qty), 1),
                                  createBaseVNode("div", _hoisted_12, [
                                    createVNode(QBtn, {
                                      unelevated: "",
                                      dense: "",
                                      size: "11px",
                                      color: "primary",
                                      icon: "add",
                                      class: "radius8",
                                      onClick: ($event) => $options.updateCartQty(1, items.qty, items)
                                    }, null, 8, ["onClick"])
                                  ])
                                ])
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["class"])
              ]),
              _: 2
            }, 1032, ["onRight", "right-color"]);
          }), 128))
        ]),
        _: 1
      })) : createCommentVNode("", true)
    ]),
    _: 1
  }));
}
var CartDetails = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "CartDetails.vue"]]);
export { CartDetails as default };
//# sourceMappingURL=data:application/json;base64,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USxrQkFBcENILG1CQUVXQztBQUFBLGtFQUROLE1BQU0sTUFBTSxZQUFZO0FBQUEsd0RBRTdCRCxtQkFFV0M7QUFBQSxrRUFETixNQUFNLE1BQU0sMkJBQTJCO0FBQUE7OzhCQUc5Q0UsZ0JBMkNNLE9BM0NOLFlBMkNNO0FBQUEsZ0NBMUNKQSxnQkF5Q00sT0F6Q04sWUF5Q007QUFBQSxrQ0F4Q0pBLGdCQXNCTSxPQXRCTixhQXNCTTtBQUFBLG9DQXBCSSxNQUFNLE9BQUcsa0JBRGpCTCxZQVNFO0FBQUE7c0NBUEE7QUFBQSxzQ0FDQTtBQUFBLHNDQUNBLE1BQUs7QUFBQSxzQ0FDTCxNQUFLO0FBQUEsc0NBQ0wsT0FBTTtBQUFBLHNDQUNOLE9BQU07QUFBQSxzQ0FDTCxTQUFLLFlBQUUsU0FBVSxXQUFDLEtBQUs7QUFBQSw4RUFFMUJBLFlBU0U7QUFBQTtzQ0FQQTtBQUFBLHNDQUNBO0FBQUEsc0NBQ0EsTUFBSztBQUFBLHNDQUNMLE1BQUs7QUFBQSxzQ0FDTCxPQUFNO0FBQUEsc0NBQ04sT0FBTTtBQUFBLHNDQUNMLHFCQUFPLFNBQWEsa0JBQUssTUFBTSxLQUFLLEtBQUs7QUFBQTs7a0NBSTlDSyxnQkFJTSxPQUpOLGFBR0tHLHNCQUFNLEdBQUc7QUFBQSxrQ0FFZEgsZ0JBV00sT0FYTixhQVdNO0FBQUEsb0NBVkpKLFlBUUU7QUFBQSxzQ0FQQTtBQUFBLHNDQUNBO0FBQUEsc0NBQ0EsTUFBSztBQUFBLHNDQUNMLE9BQU07QUFBQSxzQ0FDTixNQUFLO0FBQUEsc0NBQ0wsT0FBTTtBQUFBLHNDQUNMLHFCQUFPLFNBQWEsaUJBQUksTUFBTSxLQUFLLEtBQUs7QUFBQSIsIm5hbWVzIjpbIl9jcmVhdGVCbG9jayIsIl9jcmVhdGVWTm9kZSIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfRnJhZ21lbnQiLCJfb3BlbkJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9ub3JtYWxpemVDbGFzcyIsIl9jcmVhdGVUZXh0Vk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQ2FydERldGFpbHMudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPCEtLSBMT0FESU5HIC0tPlxuICA8RElWIHYtaWY9XCJDYXJ0U3RvcmUuY2FydF9sb2FkaW5nXCI+XG4gICAgPHEtbGlzdD5cbiAgICAgIDxxLWl0ZW0gdi1mb3I9XCJpdGVtcyBpbiAxMFwiIDprZXk9XCJpdGVtc1wiPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgIDxxLXNrZWxldG9uIHR5cGU9XCJjaXJjbGVcIiAvPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtc2tlbGV0b24gdHlwZT1cInRleHRcIiBzdHlsZT1cIndpZHRoOiA4MCVcIiAvPlxuICAgICAgICAgIDxxLXNrZWxldG9uIHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICA8cS1za2VsZXRvbiB0eXBlPVwidGV4dFwiIHN0eWxlPVwid2lkdGg6IDIwJVwiIC8+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICA8L3EtaXRlbT5cbiAgICA8L3EtbGlzdD5cbiAgPC9ESVY+XG4gIDwhLS0gTE9BRElORyAtLT5cblxuICA8RElWIHYtZWxzZT5cbiAgICA8dGVtcGxhdGUgdi1pZj1cIkNhcnRTdG9yZS5pdGVtc19jb3VudCA+IDBcIj5cbiAgICAgIDxxLWxpc3Qgc2VwYXJhdG9yIGRlbnNlPlxuICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICB2LWZvcj1cIihpdGVtcywgaW5kZXgpIGluIENhcnRTdG9yZS5jYXJ0X2l0ZW1zXCJcbiAgICAgICAgICA6a2V5PVwiaXRlbXMuaXRlbV9pZFwiXG4gICAgICAgID5cbiAgICAgICAgICA8cS1zbGlkZS1pdGVtXG4gICAgICAgICAgICBAcmlnaHQ9XCIob3B0KSA9PiBvblJpZ2h0KG9wdCwgaW5kZXgpXCJcbiAgICAgICAgICAgIGxlZnQtY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICA6cmlnaHQtY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTYwMCcgOiAnd2hpdGUnXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OnJpZ2h0PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGl0ZW1zLWNlbnRlciBpbmxpbmUgcS1ndXR0ZXItbWRcIj5cbiAgICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cImxpZ2h0cHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICB0ZXh0LWNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgaWNvbj1cImxhcyBsYS10aW1lc1wiXG4gICAgICAgICAgICAgICAgICBAY2xpY2s9XCJjbG9zZVNsaWRlKGluZGV4KVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8RmF2c0l0ZW1cbiAgICAgICAgICAgICAgICAgIHJlZj1cImZhdnNcIlxuICAgICAgICAgICAgICAgICAgOmxheW91dD1cIjJcIlxuICAgICAgICAgICAgICAgICAgOml0ZW1fdG9rZW49XCJpdGVtcy5pdGVtX3Rva2VuXCJcbiAgICAgICAgICAgICAgICAgIDpjYXRfaWQ9XCJpdGVtcy5jYXRfaWRcIlxuICAgICAgICAgICAgICAgICAgOmFjdGl2ZT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgICAgICBAYWZ0ZXItc2F2ZWZhdj1cImFmdGVyU2F2ZWZhdihpdGVtcylcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgICByb3VuZFxuICAgICAgICAgICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJsaWdodHByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgdGV4dC1jb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgIGljb249XCJsYXMgbGEtdHJhc2gtYWx0XCJcbiAgICAgICAgICAgICAgICAgIEBjbGljaz1cInJlbW92ZUl0ZW0oaXRlbXMpXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmRlZmF1bHQ+XG4gICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICAgICAnYmctbXlkYXJrIHRleHQtd2hpdGUnOiAkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgICAgICAgICAnYmctd2hpdGUgdGV4dC1ibGFjayc6ICEkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgICAgICAgICAgPHEtaW1nXG4gICAgICAgICAgICAgICAgICAgIDpzcmM9XCJpdGVtcy51cmxfaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICBsYXp5XG4gICAgICAgICAgICAgICAgICAgIGZpdD1cImNvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDcwcHg7IHdpZHRoOiA3MHB4XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJyYWRpdXM4XCJcbiAgICAgICAgICAgICAgICAgICAgc3Bpbm5lci1jb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgIHNwaW5uZXItc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXItc3JjPVwicGxhY2Vob2xkZXIucG5nXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMiB0ZXh0LXdlaWdodC1tZWRpdW0gbm8tbWFyZ2luIGxpbmUtbm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaHRtbD1cIml0ZW1zLml0ZW1fbmFtZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIml0ZW1zLnByaWNlLnNpemVfbmFtZSAhPSAnJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgKHt7IGl0ZW1zLnByaWNlLnNpemVfbmFtZSB9fSlcbiAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIGRldGFpbHMgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWdyZXkgZWxsaXBzaXMtMi1saW5lc3ggZm9udDEzIGxpbmUtbm9ybWFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cImF0dHJpYnV0ZXMgaW4gaXRlbXMuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiYXR0cmlidXRlc19kYXRhIGluIGF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiYXR0cmlidXRlc19kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJxLW1yLXhzXCI+e3sgYXR0cmlidXRlc19kYXRhIH19LDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cImFkZG9ucyBpbiBpdGVtcy5hZGRvbnNcIiA6a2V5PVwiYWRkb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiYWRkb25faXRlbXMgaW4gYWRkb25zLmFkZG9uX2l0ZW1zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cImFkZG9uX2l0ZW1zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3sgYWRkb25faXRlbXMuc3ViX2l0ZW1fbmFtZSB9fSAoK3t7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkb25faXRlbXMucHJldHR5X2FkZG9uc190b3RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiaXRlbXMuc3BlY2lhbF9pbnN0cnVjdGlvbnMgIT0gJydcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWRhcmtcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIFwie3sgaXRlbXMuc3BlY2lhbF9pbnN0cnVjdGlvbnMgfX1cIlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBlbmQgZGV0YWlscyAtLT5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1ncmV5LTcgZm9udDEyIHRleHQtd2VpZ2h0LW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJpdGVtcy5wcmljZS5kaXNjb3VudCA8PSAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGl0ZW1zLnByaWNlLnByZXR0eV90b3RhbCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGl0ZW1zLnByaWNlLnByZXR0eV90b3RhbF9hZnRlcl9kaXNjb3VudCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgbm8tcGFkZGluZyB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIml0ZW1zLnF0eSA9PSAxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiMTFweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiZGVsZXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJhZGl1czhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwicmVtb3ZlSXRlbShpdGVtcylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiMTFweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwicmVtb3ZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJhZGl1czhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwidXBkYXRlQ2FydFF0eSgtMSwgaXRlbXMucXR5LCBpdGVtcylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBAY2xpY2s9XCJpdGVtcy5xdHkgPiAxID8gaXRlbXMucXR5LS0gOiAxXCIgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjb2wgbm8tcGFkZGluZyB0ZXh0LWNlbnRlciB0ZXh0LXdlaWdodC1tZWRpdW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgaXRlbXMucXR5IH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIG5vLXBhZGRpbmcgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiMTFweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImFkZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJhZGl1czhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwidXBkYXRlQ2FydFF0eSgxLCBpdGVtcy5xdHksIGl0ZW1zKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIEBjbGljaz1cIml0ZW1zLnF0eSsrXCIgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvcS1zbGlkZS1pdGVtPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9xLWxpc3Q+XG4gICAgPC90ZW1wbGF0ZT5cbiAgICA8IS0tIGVuZCBpdGVtcyBjb3VudCAtLT5cblxuICAgIDwhLS0gPHRlbXBsYXRlIHYtZWxzZT4gWW91IGRvbid0IGhhdmUgYW55IG9yZGVycyBoZXJlISA8L3RlbXBsYXRlPiAtLT5cbiAgPC9ESVY+XG4gIDwhLS0gZW5kIGxvYWRpbmcgY2FyZCAtLT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBkZWZpbmVBc3luY0NvbXBvbmVudCB9IGZyb20gXCJ2dWVcIjtcbmltcG9ydCBBUElpbnRlcmZhY2UgZnJvbSBcInNyYy9hcGkvQVBJaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyB1c2VDYXJ0U3RvcmUgfSBmcm9tIFwic3JjL3N0b3Jlcy9DYXJ0U3RvcmVcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIkNhcnREZXRhaWxzXCIsXG4gIHByb3BzOiBbXCJwYXlsb2FkXCIsIFwiaXNfY2hlY2tvdXRcIiwgXCJwYWdlXCJdLFxuICBjb21wb25lbnRzOiB7XG4gICAgRmF2c0l0ZW06IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+IGltcG9ydChcImNvbXBvbmVudHMvRmF2c0l0ZW0udnVlXCIpKSxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICBpdGVtc19jb3VudDogMCxcbiAgICAgIGNhcnRfbG9hZGluZzogdHJ1ZSxcbiAgICAgIGNhcnRfcmVsb2FkaW5nOiBmYWxzZSxcbiAgICAgIGNhcnRfdXVpZDogXCJcIixcbiAgICAgIGNhcnRfaXRlbXM6IFtdLFxuICAgICAgY2FydF9zdW1tYXJ5OiBbXSxcbiAgICAgIGNhcnRfbWVyY2hhbnQ6IFtdLFxuICAgICAgY2FydF90b3RhbDogW10sXG4gICAgICBjYXJ0X3N1YnRvdGFsOiBbXSxcbiAgICAgIGVycm9yOiBbXSxcbiAgICAgIHF0eV9vcHRpb25zOiBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOV0sXG4gICAgICB0cmFuc2FjdGlvbl9kYXRhOiBbXSxcbiAgICAgIGRlbGl2ZXJ5X29wdGlvbjogW10sXG4gICAgICBzZXJ2aWNlc19saXN0OiBbXSxcbiAgICAgIG91dF9vZl9yYW5nZTogZmFsc2UsXG4gICAgICBpc19jbG9zZV9zbGlkZTogZmFsc2UsXG4gICAgICBkYXRhX3NsaWRlOiB7fSxcbiAgICB9O1xuICB9LFxuICBzZXR1cCgpIHtcbiAgICBjb25zdCBDYXJ0U3RvcmUgPSB1c2VDYXJ0U3RvcmUoKTtcbiAgICByZXR1cm4geyBDYXJ0U3RvcmUgfTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHVwZGF0ZUNhcnRRdHkoUXR5LCBpdGVtUXR5LCBpdGVtKSB7XG4gICAgICBsZXQgUXR5VG90YWwgPSBpdGVtUXR5ICsgUXR5O1xuICAgICAgaXRlbS5xdHkgPSBRdHlUb3RhbDtcbiAgICAgIHRoaXMudXBkYXRlQ2FydEl0ZW1zKFF0eVRvdGFsLCBpdGVtKTtcbiAgICB9LFxuICAgIHVwZGF0ZUNhcnRJdGVtcyhpdGVtUXR5LCBpdGVtKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgQVBJaW50ZXJmYWNlLnVwZGF0ZUNhcnRJdGVtcyhcbiAgICAgICAgdGhpcy5DYXJ0U3RvcmUuY2FydF91dWlkLFxuICAgICAgICBpdGVtLmNhcnRfcm93LFxuICAgICAgICBpdGVtUXR5XG4gICAgICApXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5DYXJ0U3RvcmUuZ2V0Q2FydChmYWxzZSwgdGhpcy5wYXlsb2FkKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJkYXJrXCIsIGVycm9yLCBcImVycm9yXCIsIHRoaXMuJHEpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGNsb3NlU2xpZGUoaW5kZXgpIHtcbiAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICAgIGlmICh0aGlzLmRhdGFfc2xpZGVbaW5kZXhdKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YV9zbGlkZVtpbmRleF0pO1xuICAgICAgICB0aGlzLmRhdGFfc2xpZGVbaW5kZXhdLnJlc2V0KCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBvblJpZ2h0KGRldGFpbHMsIGluZGV4KSB7XG4gICAgICB0aGlzLmRhdGFfc2xpZGVbaW5kZXhdID0gZGV0YWlscztcbiAgICB9LFxuICAgIHJlbW92ZUl0ZW0oaXRlbXMpIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICBBUElpbnRlcmZhY2UucmVtb3ZlQ2FydEl0ZW0odGhpcy5DYXJ0U3RvcmUuY2FydF91dWlkLCBpdGVtcy5jYXJ0X3JvdylcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLkNhcnRTdG9yZS5nZXRDYXJ0KGZhbHNlLCB0aGlzLnBheWxvYWQpO1xuICAgICAgICAgIHRoaXMuJGVtaXQoXCJhZnRlclJlbW92ZWl0ZW1cIik7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBBUElpbnRlcmZhY2Uubm90aWZ5KFwiZGFya1wiLCBlcnJvciwgXCJlcnJvclwiLCB0aGlzLiRxKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBjbGVhckNhcnQoKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIEFQSWludGVyZmFjZS5jbGVhckNhcnQoQVBJaW50ZXJmYWNlLmdldFN0b3JhZ2UoXCJjYXJ0X3V1aWRcIikpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5DYXJ0U3RvcmUuZ2V0Q2FydChmYWxzZSwgdGhpcy5wYXlsb2FkKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJkYXJrXCIsIGVycm9yLCBcImVycm9yXCIsIHRoaXMuJHEpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGFmdGVyU2F2ZWZhdihpdGVtKSB7XG4gICAgICB0aGlzLnJlbW92ZUl0ZW0oaXRlbSk7XG4gICAgfSxcbiAgICBsaW5lSXRlbVRvdGFsKHF0eSwgcHJpY2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKHF0eSArIFwieFwiICsgcHJpY2UpO1xuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQocHJpY2UpICogcGFyc2VJbnQocXR5KTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuIl0sImZpbGUiOiJhc3NldHMvQ2FydERldGFpbHMuYmM3N2I0MzIuanMifQ==
