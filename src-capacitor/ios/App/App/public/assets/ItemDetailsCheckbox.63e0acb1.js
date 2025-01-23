import { _ as _export_sfc, l as defineAsyncComponent, u as __vitePreload, bC as config, m as APIinterface, n as resolveComponent, p as openBlock, q as createBlock, t as withCtx, f as createVNode, V as createElementBlock, a8 as QCard, a9 as QCardSection, a7 as normalizeClass, U as createBaseVNode, aa as withDirectives, Y as QBtn, Z as toDisplayString, bV as QOptionGroup, aA as createCommentVNode, X as renderList, F as Fragment, a6 as createTextVNode, ab as Ripple, ac as QItem, ad as QItemSection, af as QRadio, bD as QCheckbox, aY as QInput, aB as QDialog } from "./index.61ed5618.js";
import { Q as QCircularProgress } from "./QCircularProgress.996c3e2f.js";
import { Q as QImg } from "./QImg.6c27044c.js";
import { Q as QItemLabel } from "./QItemLabel.a9365c5b.js";
import { Q as QList } from "./QList.b69a7e5b.js";
import { Q as QSelect } from "./QSelect.311187d6.js";
import { Q as QSpace } from "./QSpace.f164c087.js";
import { Q as QBtnGroup } from "./QBtnGroup.abc2d1c7.js";
import { C as ClosePopup } from "./ClosePopup.9d17b53c.js";
import { u as useCartStore } from "./CartStore.484ff101.js";
import { u as useFavoriteStore } from "./FavoriteStore.f91e6f21.js";
import { u as useDeliveryschedStore } from "./DeliverySched.4e9605bf.js";
import "./format.7f7370d3.js";
import "./QChip.f183a4f1.js";
import "./QMenu.8e482cd8.js";
import "./selection.50b4cb0c.js";
import "./rtl.f3ed811c.js";
const empty = function(data) {
  if (typeof data === "undefined" || data === null || data === "" || data === "null" || data === "undefined") {
    return true;
  }
  return false;
};
const _sfc_main = {
  name: "ItemDetails",
  props: ["slug", "money_config", "currency_code"],
  components: {
    FavsItem: defineAsyncComponent(() => __vitePreload(() => import("./FavsItem.341b44fd.js"), true ? ["assets/FavsItem.341b44fd.js","assets/index.61ed5618.js","assets/index.dbee30c0.css"] : void 0)),
    NumberFormat: defineAsyncComponent(
      () => __vitePreload(() => import("./NumberFormat.12e2c187.js"), true ? ["assets/NumberFormat.12e2c187.js","assets/index.61ed5618.js","assets/index.dbee30c0.css"] : void 0)
    ),
    ItemGallery: defineAsyncComponent(
      () => __vitePreload(() => import("./ItemGallery.4c14db46.js"), true ? ["assets/ItemGallery.4c14db46.js","assets/swiper.min.5cdecd27.css","assets/QImg.6c27044c.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/swiper-slide.8a0c58df.js"] : void 0)
    ),
    ShareComponents: defineAsyncComponent(
      () => __vitePreload(() => import("./ShareComponents.832d2223.js"), true ? ["assets/ShareComponents.832d2223.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/index.cae99e37.js"] : void 0)
    )
  },
  setup() {
    const CartStore = useCartStore();
    const FavoriteStore = useFavoriteStore();
    const schedStore = useDeliveryschedStore();
    return { CartStore, FavoriteStore, schedStore };
  },
  data() {
    return {
      item_dialog: false,
      loading: true,
      loading_add: false,
      item_qty: 1,
      items: [],
      item_size_id: 0,
      size_data: [],
      size_datas: [],
      cooking_ref: 0,
      cooking_data: [],
      ingredients: [],
      ingredients_data: [],
      addons: {},
      special_instructions: "",
      transaction_type: "",
      if_sold_out: "",
      sold_out_options: [],
      item_total: 0,
      disabled_cart: true,
      slide_items: 0,
      favorites: [],
      restaurant_name: "",
      merchant_id: "",
      data_cat_id: "",
      data_item_token: "",
      merchantSlug: "",
      item_gallery: [],
      image_featured: "",
      deep_link: ""
    };
  },
  created() {
    this.deep_link = config.api_base_url;
  },
  mounted() {
    this.merchantSlug = this.slug;
  },
  watch: {
    addons: {
      handler(newValue, oldValue) {
        this.ItemSummary();
      },
      deep: true
    },
    item_size_id() {
      this.ItemSummary();
    },
    cooking_ref() {
      this.ItemSummary();
    },
    ingredients() {
      this.ItemSummary();
    },
    item_qty() {
      this.ItemSummary();
    },
    ingredients_data: {
      handler(newValue, oldValue) {
        this.ingredients = [];
        if (Object.keys(this.ingredients_data).length > 0) {
          Object.entries(this.ingredients_data).forEach(([key, items]) => {
            if (items.onOff) {
              this.ingredients.push(items.value);
            }
          });
        }
      },
      deep: true
    }
  },
  methods: {
    isClickable(data) {
      if (data.multi_option === "multiple") {
        return "";
      }
      return "label";
    },
    isRipple(data) {
      if (data.multi_option === "multiple") {
        return false;
      }
      return true;
    },
    resetData() {
      this.item_qty = 1;
      this.items = [];
      this.item_size_id = 0;
      this.size_data = [];
      this.size_datas = [];
      this.cooking_ref = 0;
      this.cooking_data = [];
      this.ingredients = [];
      this.ingredients_data = [];
      this.addons = {};
      this.special_instructions = "";
      this.transaction_type = "";
      this.if_sold_out = "";
      this.sold_out_options = [];
      this.item_total = 0;
      this.disabled_cart = true;
      this.slide_items = 0;
      this.data_cat_id = "";
      this.data_item_token = "";
      this.image_featured = "";
    },
    showItem2(data, slug) {
      if (typeof slug !== "undefined" && slug !== null) {
        this.merchantSlug = slug;
        this.showItem(data);
      }
    },
    showItem(data) {
      this.resetData();
      this.item_dialog = true;
      this.loading = true;
      this.data_cat_id = data.cat_id;
      this.data_item_token = data.item_uuid;
      if (typeof this.merchantSlug !== "undefined" && this.merchantSlug !== null)
        ;
      else {
        return;
      }
      APIinterface.getMenuItem(
        data.cat_id,
        data.item_uuid,
        this.merchantSlug,
        this.currency_code
      ).then((data2) => {
        this.merchant_id = data2.details.merchant_id;
        this.restaurant_name = data2.details.restaurant_name;
        this.items = data2.details.data.items;
        this.size_datas = data2.details.data.items.price;
        const soldOutData = data2.details.sold_out_options;
        this.if_sold_out = data2.details.default_sold_out_options;
        const prices = data2.details.data.items.price;
        const metaCookingRef = data2.details.data.meta ? data2.details.data.meta.cooking_ref : {};
        const metaCookingRefDetails = data2.details.data.meta ? data2.details.data.meta_details.cooking_ref : {};
        const metaIngredients = data2.details.data.meta ? data2.details.data.meta.ingredients : {};
        const metaIngredientsDetails = data2.details.data.meta ? data2.details.data.meta_details.ingredients : {};
        this.item_gallery = data2.details.data.meta ? data2.details.data.meta.item_gallery : {};
        const addons = data2.details.data ? data2.details.data.addons : {};
        const addonItems = data2.details.data ? data2.details.data.addon_items : {};
        if (Object.keys(soldOutData).length > 0) {
          Object.entries(soldOutData).forEach(
            ([itemSoldKey, itemsSoldData]) => {
              this.sold_out_options.push({
                label: itemsSoldData,
                value: itemSoldKey
              });
            }
          );
        }
        if (Object.keys(prices).length > 0) {
          Object.entries(prices).forEach(([key, items]) => {
            if (items.discount <= 0) {
              this.size_data.push({
                label: items.size_name + " " + items.pretty_price,
                value: parseInt(items.item_size_id)
              });
            } else {
              this.size_data.push({
                label: items.size_name + " " + items.pretty_price_after_discount,
                value: parseInt(items.item_size_id)
              });
            }
          });
          this.item_size_id = parseInt(Object.keys(prices)[0]);
        }
        if (typeof metaCookingRef !== "undefined" && metaCookingRef !== null) {
          if (metaCookingRef.length > 0) {
            Object.entries(metaCookingRef).forEach(([key, value]) => {
              this.cooking_data.push({
                label: metaCookingRefDetails[value].meta_name,
                value: metaCookingRefDetails[value].meta_id
              });
            });
          }
        }
        if (typeof metaIngredients !== "undefined" && metaIngredients !== null) {
          if (metaIngredients.length > 0) {
            Object.entries(metaIngredients).forEach(([key, value]) => {
              if (metaIngredientsDetails[value]) {
                this.ingredients_data.push({
                  label: metaIngredientsDetails[value].meta_name,
                  value: metaIngredientsDetails[value].meta_id,
                  onOff: this.items.ingredients_preselected ? true : false
                });
              }
            });
          }
        }
        console.log(this.items.item_addons);
        if (Object.keys(this.items.item_addons).length > 0) {
          Object.entries(this.items.item_addons).forEach(
            ([sizeId, SubcatID]) => {
              const addOnsAdded = [];
              Object.entries(SubcatID).forEach(([key, child]) => {
                if (!APIinterface.empty(addons[sizeId])) {
                  if (!APIinterface.empty(addons[sizeId][child])) {
                    const addonDetails = addons[sizeId][child];
                    const subItems = [];
                    Object.entries(addonDetails.sub_items).forEach(
                      ([key2, subItemsID]) => {
                        if (addonItems[subItemsID]) {
                          const subItemsAdd = addonItems[subItemsID];
                          addonItems[subItemsID].checked = false;
                          addonItems[subItemsID].disabled = false;
                          addonItems[subItemsID].qty = 1;
                          subItems.push(subItemsAdd);
                        }
                      }
                    );
                    const subdata = {
                      subcat_id: addonDetails.subcat_id,
                      subcategory_name: addonDetails.subcategory_name,
                      subcategory_description: addonDetails.subcategory_description,
                      multi_option: addonDetails.multi_option,
                      multi_option_min: addonDetails.multi_option_min,
                      multi_option_value: addonDetails.multi_option_value,
                      require_addon: addonDetails.require_addon,
                      pre_selected: addonDetails.pre_selected,
                      sub_items_checked: "",
                      sub_items: subItems
                    };
                    addOnsAdded.push(subdata);
                  }
                }
              });
              this.addons[sizeId] = addOnsAdded;
            }
          );
        }
      }).catch((error) => {
        APIinterface.notify("red-5", error, "error_outline", this.$q);
        this.item_dialog = false;
      }).then((data2) => {
        this.loading = false;
      });
    },
    ItemSummary() {
      let $itemTotal = 0;
      const $requiredAddon = [];
      const $requiredAddonAdded = [];
      let $min_addon = [];
      let $min_addon_added = [];
      if (!empty(this.size_datas[this.item_size_id])) {
        const item = this.size_datas[this.item_size_id];
        if (item.discount > 0) {
          $itemTotal += this.item_qty * parseFloat(item.price_after_discount);
        } else
          $itemTotal += this.item_qty * parseFloat(item.price);
      }
      if (!empty(this.addons[this.item_size_id])) {
        this.addons[this.item_size_id].forEach((item, index) => {
          if (item.require_addon === "1") {
            $requiredAddon.push(item.subcat_id);
          }
          if (item.multi_option === "custom") {
            let totalCheck = 0;
            const multiOptionValue = item.multi_option_value;
            let multi_option_min = item.multi_option_min;
            if (multiOptionValue > 0) {
              $min_addon.push({
                subcat_id: item.subcat_id,
                min: multi_option_min,
                max: multiOptionValue
              });
            }
            const itemIndex = [];
            const itemIndex2 = [];
            item.sub_items.forEach((item2, index2) => {
              if (item2.checked === true) {
                totalCheck++;
                $itemTotal += this.item_qty * parseFloat(item2.price);
                $requiredAddonAdded.push(item.subcat_id);
              } else
                itemIndex.push(index2);
              if (item2.disabled === true) {
                itemIndex2.push(index2);
              }
            });
            $min_addon_added[item.subcat_id] = {
              total: totalCheck
            };
            if (totalCheck >= multiOptionValue) {
              itemIndex.forEach((item3, index3) => {
                item.sub_items[item3].disabled = true;
              });
            } else {
              itemIndex2.forEach((item3, index3) => {
                item.sub_items[item3].disabled = false;
              });
            }
          } else if (item.multi_option === "one") {
            item.sub_items.forEach((item2, index2) => {
              if (item2.sub_item_id === item.sub_items_checked) {
                $itemTotal += this.item_qty * parseFloat(item2.price);
                $requiredAddonAdded.push(item.subcat_id);
              }
            });
          } else if (item.multi_option === "multiple") {
            let multi_option_min = item.multi_option_min;
            const multiOptionValue = item.multi_option_value;
            if (multiOptionValue > 0) {
              $min_addon.push({
                subcat_id: item.subcat_id,
                min: multi_option_min,
                max: multiOptionValue
              });
            }
            let TotalMultiQty = 0;
            item.sub_items.forEach((item2, index2) => {
              if (item2.checked === true) {
                $itemTotal += item2.qty * parseFloat(item2.price);
                TotalMultiQty += item2.qty;
                $requiredAddonAdded.push(item.subcat_id);
              }
            });
            $min_addon_added[item.subcat_id] = {
              total: TotalMultiQty
            };
            console.log("TotalMultiQty=>" + TotalMultiQty);
            if (TotalMultiQty >= multiOptionValue) {
              item.sub_items.forEach((sub_items3, sub_items_index3) => {
                sub_items3.disabled = true;
              });
            } else {
              item.sub_items.forEach((sub_items3, sub_items_index3) => {
                sub_items3.disabled = false;
              });
            }
          }
        });
      }
      this.item_total = $itemTotal;
      let $requiredMeet = true;
      if ($requiredAddon.length > 0) {
        $requiredAddon.forEach((requiedItem, requiredIndex) => {
          if ($requiredAddonAdded.includes(requiedItem) === false) {
            $requiredMeet = false;
            return false;
          }
        });
      }
      if (this.items.cooking_ref_required) {
        if (this.cooking_ref > 0) {
          $requiredMeet = true;
        } else {
          $requiredMeet = false;
        }
      }
      if (Object.keys($min_addon).length > 0) {
        let min_value, min_selected;
        Object.entries($min_addon).forEach(
          ([key_min_addon, items_min_addon]) => {
            min_value = parseInt(items_min_addon.min);
            if ($min_addon_added[items_min_addon.subcat_id]) {
              min_selected = parseInt(
                $min_addon_added[items_min_addon.subcat_id].total
              );
            }
            if (min_selected > 0) {
              if (min_value > min_selected) {
                $requiredMeet = false;
              }
            }
          }
        );
      }
      if (this.items.not_for_sale) {
        $requiredMeet = false;
      }
      if ($requiredMeet) {
        this.disabled_cart = false;
      } else
        this.disabled_cart = true;
    },
    CheckaddCartItems() {
      console.log("CheckaddCartItems");
      let $cartMerchantID = "";
      let $cartMerchantName = "";
      console.log(this.CartStore.cart_merchant);
      console.log(this.CartStore.cart_merchant.merchant_id);
      console.log(this.CartStore.cart_merchant.restaurant_name);
      if (!APIinterface.empty(this.CartStore.cart_merchant)) {
        $cartMerchantID = this.CartStore.cart_merchant.merchant_id;
        $cartMerchantName = this.CartStore.cart_merchant.restaurant_name;
      }
      console.log($cartMerchantID + "=>" + this.merchant_id);
      if (!APIinterface.empty($cartMerchantID)) {
        if ($cartMerchantID !== this.merchant_id) {
          let $message = this.$t(
            "Your order contains items from {{restaurant_name}}. Create a new order to add items."
          );
          $message = $message.replace("{{restaurant_name}}", $cartMerchantName);
          this.$q.dialog({
            title: this.$t("Create new order?"),
            message: $message,
            persistent: true,
            position: "standard",
            transitionShow: "fade",
            transitionHide: "fade",
            ok: {
              unelevated: true,
              color: "primary",
              rounded: false,
              "text-color": "white",
              size: "md",
              label: this.$t("New order"),
              "no-caps": true,
              class: "radius8"
            },
            cancel: {
              unelevated: true,
              rounded: false,
              color: "mygrey",
              "text-color": "black",
              size: "md",
              label: this.$t("Cancel"),
              "no-caps": true,
              class: "radius8"
            }
          }).onOk(() => {
            this.clearCart();
          }).onCancel(() => {
          }).onDismiss(() => {
          });
        } else {
          this.AddToCart();
        }
      } else {
        this.AddToCart();
      }
    },
    clearCart() {
      const $cartUuid = APIinterface.getStorage("cart_uuid");
      APIinterface.clearCart($cartUuid).then((data) => {
        this.AddToCart();
      }).catch((error) => {
        APIinterface.notify("red-5", error, "error_outline", this.$q);
      }).then((data) => {
      });
    },
    AddToCart() {
      const $ingredients = [];
      if (this.ingredients.length > 0) {
        this.ingredients.forEach((ingredientsId, index) => {
          $ingredients.push({
            meta_id: ingredientsId,
            checked: true,
            meta_name: ""
          });
        });
      }
      const $meta = {
        cooking_ref: [
          {
            meta_id: this.cooking_ref,
            checked: this.cooking_ref,
            meta_name: ""
          }
        ],
        ingredients: $ingredients
      };
      const $cartUuid = APIinterface.getStorage("cart_uuid");
      const $data = {
        slug: this.merchantSlug,
        cart_uuid: $cartUuid,
        cat_id: this.data_cat_id,
        item_size_id: this.item_size_id,
        item_token: this.data_item_token,
        item_qty: this.item_qty,
        special_instructions: this.special_instructions,
        if_sold_out: this.if_sold_out.value,
        transaction_type: this.schedStore.transaction_type,
        meta: $meta,
        item_addons: !empty(this.addons[this.item_size_id]) ? this.addons[this.item_size_id] : []
      };
      this.loading_add = true;
      APIinterface.AddToCart($data).then((data) => {
        if (empty($cartUuid)) {
          APIinterface.setStorage("cart_uuid", data.details.cart_uuid);
        }
        this.$emit("afterAdditems");
        this.item_dialog = false;
      }).catch((error) => {
        APIinterface.notify("negative", error, "error_outline", this.$q);
      }).then((data) => {
        this.loading_add = false;
      });
    },
    afterSavefav(item) {
      item.save_item = !item.save_item;
      this.FavoriteStore.getItemFavorites(this.slug);
    },
    setActive(button, index) {
      if (button.onOff) {
        this.ingredients_data[index].color = "mygrey";
        this.ingredients_data[index].text_color = "dark";
        this.ingredients_data[index].onOff = false;
      } else {
        this.ingredients_data[index].color = "primary";
        this.ingredients_data[index].text_color = "white";
        this.ingredients_data[index].onOff = true;
      }
    },
    afterSelectimage(data) {
      this.image_featured = data;
    }
  }
};
const _hoisted_1 = {
  key: 0,
  class: "text-center flex flex-center",
  style: { "height": "200px" }
};
const _hoisted_2 = { class: "q-pa-sm absolute-top-right" };
const _hoisted_3 = { class: "row items-center q-mb-sm" };
const _hoisted_4 = { class: "col" };
const _hoisted_5 = { class: "line-normal ellipsis-2-lines text-h6" };
const _hoisted_6 = ["innerHTML"];
const _hoisted_7 = { class: "text-right col-5 q-gutter-sm" };
const _hoisted_8 = { class: "ellipsis-3-lines text-grey text-body2 line-normal" };
const _hoisted_9 = ["innerHTML"];
const _hoisted_10 = { class: "q-mb-sm" };
const _hoisted_11 = { class: "font13 text-weight-bold no-margin line-normal q-pb-sm" };
const _hoisted_12 = {
  key: 0,
  class: "q-mb-sm"
};
const _hoisted_13 = { class: "font13 text-weight-bold no-margin line-normal" };
const _hoisted_14 = {
  key: 0,
  class: "text-red font12 text-weight-medium q-mb-sm"
};
const _hoisted_15 = {
  key: 1,
  class: "text-grey font12 text-weight-medium q-mb-sm"
};
const _hoisted_16 = {
  key: 1,
  class: "q-mb-sm"
};
const _hoisted_17 = { class: "font13 text-weight-bold no-margin line-normal" };
const _hoisted_18 = { class: "text-grey font12 text-weight-medium q-mb-sm" };
const _hoisted_19 = { class: "text-weight-bold" };
const _hoisted_20 = { class: "" };
const _hoisted_21 = {
  key: 0,
  class: "q-ml-sm text-red"
};
const _hoisted_22 = {
  key: 1,
  class: "q-ml-sm"
};
const _hoisted_23 = {
  key: 0,
  class: "row items-center justify-center"
};
const _hoisted_24 = { class: "col no-padding text-center" };
const _hoisted_25 = { class: "col no-padding text-center" };
const _hoisted_26 = { class: "col no-padding text-center" };
const _hoisted_27 = { key: 1 };
const _hoisted_28 = { class: "text-weight-bold font13 q-mt-sm" };
const _hoisted_29 = { class: "text-weight-bold font13 q-mt-sm" };
const _hoisted_30 = { class: "col-5" };
const _hoisted_31 = { class: "col-7" };
const _hoisted_32 = { class: "row justify-between items-center fit" };
const _hoisted_33 = { class: "text-weight-medium font17" };
const _hoisted_34 = { class: "text-weight-bold font16" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FavsItem = resolveComponent("FavsItem");
  const _component_ShareComponents = resolveComponent("ShareComponents");
  const _component_ItemGallery = resolveComponent("ItemGallery");
  const _component_DIV = resolveComponent("DIV");
  const _component_NumberFormat = resolveComponent("NumberFormat");
  return openBlock(), createBlock(QDialog, {
    modelValue: $data.item_dialog,
    "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $data.item_dialog = $event),
    position: "bottom"
  }, {
    default: withCtx(() => [
      createVNode(QCard, { class: "rounded-borders-top" }, {
        default: withCtx(() => [
          $data.loading ? (openBlock(), createElementBlock("div", _hoisted_1, [
            createVNode(QCircularProgress, {
              indeterminate: "",
              rounded: "",
              size: "md",
              color: "secondary",
              class: "q-ma-md"
            })
          ])) : (openBlock(), createBlock(_component_DIV, { key: 1 }, {
            default: withCtx(() => [
              createVNode(QCard, { class: "no-shadow" }, {
                default: withCtx(() => [
                  createVNode(QCardSection, {
                    class: normalizeClass(["no-wrap q-pa-none bg-mygreyx relative-position bn", {
                      "bg-grey600 ": _ctx.$q.dark.mode,
                      "bg-mygrey ": !_ctx.$q.dark.mode
                    }]),
                    style: { "border-bottom-right-radius": "25px", "border-bottom-left-radius": "25px" }
                  }, {
                    default: withCtx(() => [
                      createVNode(QImg, {
                        src: this.image_featured ? this.image_featured : $data.items.url_image,
                        "placeholder-src": "placeholder.png",
                        style: { "height": "180px" },
                        fit: "cover",
                        "spinner-color": "primary",
                        "spinner-size": "xs"
                      }, null, 8, ["src"]),
                      createBaseVNode("div", _hoisted_2, [
                        withDirectives(createVNode(QBtn, {
                          icon: "close",
                          color: _ctx.$q.dark.mode ? "primary" : "grey",
                          flat: "",
                          round: "",
                          dense: ""
                        }, null, 8, ["color"]), [
                          [ClosePopup]
                        ])
                      ])
                    ]),
                    _: 1
                  }, 8, ["class"]),
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_3, [
                        createBaseVNode("div", _hoisted_4, [
                          createBaseVNode("div", _hoisted_5, [
                            createBaseVNode("span", {
                              innerHTML: $data.items.item_name
                            }, null, 8, _hoisted_6)
                          ])
                        ]),
                        createBaseVNode("div", _hoisted_7, [
                          createVNode(_component_FavsItem, {
                            ref: "favs",
                            layout: 1,
                            item_token: $data.items.item_token,
                            cat_id: $data.items.cat_id,
                            active: $data.items.save_item,
                            onAfterSavefav: _cache[0] || (_cache[0] = ($event) => $options.afterSavefav($data.items))
                          }, null, 8, ["item_token", "cat_id", "active"]),
                          createVNode(_component_ShareComponents, {
                            title: $data.items.item_name,
                            text: $data.items.item_description,
                            dialogTitle: _ctx.$t("Share"),
                            url: $data.deep_link + "/item/" + $data.items.item_token,
                            layout: 2
                          }, null, 8, ["title", "text", "dialogTitle", "url"])
                        ])
                      ]),
                      createBaseVNode("p", _hoisted_8, [
                        createBaseVNode("span", {
                          innerHTML: $data.items.item_description
                        }, null, 8, _hoisted_9)
                      ]),
                      createVNode(_component_ItemGallery, {
                        item_gallery: $data.item_gallery,
                        onAfterSelectimage: $options.afterSelectimage
                      }, null, 8, ["item_gallery", "onAfterSelectimage"]),
                      createBaseVNode("div", _hoisted_10, [
                        createBaseVNode("div", _hoisted_11, toDisplayString(_ctx.$t("Size")), 1),
                        createVNode(QOptionGroup, {
                          modelValue: $data.item_size_id,
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.item_size_id = $event),
                          options: $data.size_data,
                          inline: ""
                        }, null, 8, ["modelValue", "options"])
                      ]),
                      $data.cooking_data.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_12, [
                        createBaseVNode("div", _hoisted_13, toDisplayString(_ctx.$t("Cooking Reference")), 1),
                        $data.items.cooking_ref_required ? (openBlock(), createElementBlock("div", _hoisted_14, " (" + toDisplayString(_ctx.$t("Required")) + ") ", 1)) : (openBlock(), createElementBlock("div", _hoisted_15, toDisplayString(_ctx.$t("Optional")), 1)),
                        createVNode(QOptionGroup, {
                          modelValue: $data.cooking_ref,
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.cooking_ref = $event),
                          options: $data.cooking_data,
                          inline: ""
                        }, null, 8, ["modelValue", "options"])
                      ])) : createCommentVNode("", true),
                      $data.ingredients_data.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_16, [
                        createBaseVNode("div", _hoisted_17, toDisplayString(_ctx.$t("Ingredients")), 1),
                        createBaseVNode("div", _hoisted_18, toDisplayString(_ctx.$t("Optional")), 1),
                        createVNode(QOptionGroup, {
                          modelValue: $data.ingredients,
                          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.ingredients = $event),
                          options: $data.ingredients_data,
                          inline: "",
                          type: "checkbox",
                          "checked-icon": "check_box",
                          "unchecked-icon": "square"
                        }, null, 8, ["modelValue", "options"])
                      ])) : createCommentVNode("", true),
                      $data.addons[$data.item_size_id] ? (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList($data.addons[$data.item_size_id], (addons) => {
                        return openBlock(), createBlock(_component_DIV, {
                          key: addons.subcat_id,
                          class: "q-mb-md"
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("div", {
                              class: normalizeClass(["row justify-between items-center font13 no-margin line-normal q-pa-sm", {
                                "bg-grey600 ": _ctx.$q.dark.mode,
                                "bg-mygrey ": !_ctx.$q.dark.mode
                              }])
                            }, [
                              createBaseVNode("div", null, [
                                createBaseVNode("div", _hoisted_19, toDisplayString(addons.subcategory_name), 1),
                                addons.multi_option === "one" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                                  createTextVNode(toDisplayString(_ctx.$t("Select 1")), 1)
                                ], 64)) : addons.multi_option === "multiple" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                                  addons.multi_option_min > 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                                    createTextVNode(toDisplayString(_ctx.$t("Select minimum {min} to maximum {max}", {
                                      min: addons.multi_option_min,
                                      max: addons.multi_option_value
                                    })), 1)
                                  ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                                    createTextVNode(toDisplayString(_ctx.$t("Choose up to")) + " " + toDisplayString(addons.multi_option_value), 1)
                                  ], 64))
                                ], 64)) : addons.multi_option === "custom" ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                                  addons.multi_option_min > 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                                    createTextVNode(toDisplayString(_ctx.$t("Select minimum {min} to maximum {max}", {
                                      min: addons.multi_option_min,
                                      max: addons.multi_option_value
                                    })), 1)
                                  ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                                    createTextVNode(toDisplayString(_ctx.$t("Choose up to")) + " " + toDisplayString(addons.multi_option_value), 1)
                                  ], 64))
                                ], 64)) : createCommentVNode("", true)
                              ]),
                              createBaseVNode("div", _hoisted_20, [
                                addons.require_addon == 1 ? (openBlock(), createElementBlock("span", _hoisted_21, "(" + toDisplayString(_ctx.$t("Required")) + ")", 1)) : (openBlock(), createElementBlock("span", _hoisted_22, "(" + toDisplayString(_ctx.$t("Optional")) + ")", 1))
                              ])
                            ], 2),
                            createVNode(QList, null, {
                              default: withCtx(() => [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(addons.sub_items, (sub_items) => {
                                  return withDirectives((openBlock(), createBlock(QItem, {
                                    key: sub_items.sub_item_id,
                                    tag: addons.multi_option === "multiple" ? "div" : "label"
                                  }, {
                                    default: withCtx(() => [
                                      addons.multi_option === "one" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                                        createVNode(QItemSection, { avatar: "" }, {
                                          default: withCtx(() => [
                                            createVNode(QRadio, {
                                              modelValue: addons.sub_items_checked,
                                              "onUpdate:modelValue": ($event) => addons.sub_items_checked = $event,
                                              val: sub_items.sub_item_id,
                                              color: "primary",
                                              size: "md"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "val"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(QItemSection, null, {
                                          default: withCtx(() => [
                                            createVNode(QItemLabel, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(sub_items.sub_item_name), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(QItemSection, { side: "" }, {
                                          default: withCtx(() => [
                                            createVNode(QItemLabel, { caption: "" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(sub_items.pretty_price), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ], 64)) : addons.multi_option === "custom" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                                        createVNode(QItemSection, { avatar: "" }, {
                                          default: withCtx(() => [
                                            createVNode(QCheckbox, {
                                              modelValue: sub_items.checked,
                                              "onUpdate:modelValue": ($event) => sub_items.checked = $event,
                                              val: sub_items.sub_item_id,
                                              label: "",
                                              disable: sub_items.disabled,
                                              color: "primary",
                                              size: "md"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "val", "disable"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(QItemSection, null, {
                                          default: withCtx(() => [
                                            createVNode(QItemLabel, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(sub_items.sub_item_name), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(QItemSection, { side: "" }, {
                                          default: withCtx(() => [
                                            createVNode(QItemLabel, { caption: "" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(sub_items.pretty_price), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ], 64)) : addons.multi_option === "multiple" ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                                        createVNode(QItemSection, {
                                          side: !sub_items.checked
                                        }, {
                                          default: withCtx(() => [
                                            sub_items.checked == true ? (openBlock(), createElementBlock("div", _hoisted_23, [
                                              createBaseVNode("div", _hoisted_24, [
                                                createVNode(QBtn, {
                                                  onClick: ($event) => sub_items.qty > 1 ? sub_items.qty-- : sub_items.checked = false,
                                                  round: "",
                                                  unelevated: "",
                                                  dense: "",
                                                  size: "11px",
                                                  color: "primary",
                                                  icon: "remove"
                                                }, null, 8, ["onClick"])
                                              ]),
                                              createBaseVNode("div", _hoisted_25, toDisplayString(sub_items.qty), 1),
                                              createBaseVNode("div", _hoisted_26, [
                                                createVNode(QBtn, {
                                                  onClick: ($event) => sub_items.qty++,
                                                  round: "",
                                                  unelevated: "",
                                                  dense: "",
                                                  size: "11px",
                                                  color: "primary",
                                                  icon: "add",
                                                  disabled: sub_items.disabled
                                                }, null, 8, ["onClick", "disabled"])
                                              ])
                                            ])) : (openBlock(), createElementBlock("div", _hoisted_27, [
                                              createVNode(QBtn, {
                                                onClick: ($event) => sub_items.checked = true,
                                                round: "",
                                                unelevated: "",
                                                dense: "",
                                                size: "11px",
                                                color: "grey-4",
                                                icon: "add",
                                                disabled: sub_items.disabled
                                              }, null, 8, ["onClick", "disabled"])
                                            ]))
                                          ]),
                                          _: 2
                                        }, 1032, ["side"]),
                                        createVNode(QItemSection, null, {
                                          default: withCtx(() => [
                                            createVNode(QItemLabel, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(sub_items.sub_item_name), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(QItemSection, { side: "" }, {
                                          default: withCtx(() => [
                                            createVNode(QItemLabel, { caption: "" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(sub_items.pretty_price), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ], 64)) : createCommentVNode("", true)
                                    ]),
                                    _: 2
                                  }, 1032, ["tag"])), [
                                    [Ripple]
                                  ]);
                                }), 128))
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128)) : createCommentVNode("", true),
                      createBaseVNode("div", _hoisted_28, toDisplayString(_ctx.$t("Special Instructions")), 1),
                      createVNode(QInput, {
                        modelValue: $data.special_instructions,
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.special_instructions = $event),
                        autogrow: "",
                        outlined: "",
                        class: "q-pa-none"
                      }, null, 8, ["modelValue"]),
                      createBaseVNode("div", _hoisted_29, toDisplayString(_ctx.$t("If sold out")), 1),
                      createVNode(QSelect, {
                        outlined: "",
                        dense: "",
                        modelValue: $data.if_sold_out,
                        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.if_sold_out = $event),
                        options: $data.sold_out_options,
                        color: "secondary",
                        class: "q-mb-md",
                        "transition-show": "scale",
                        "transition-hide": "scale"
                      }, null, 8, ["modelValue", "options"]),
                      createVNode(QSpace, { class: "q-pa-xl" }),
                      createBaseVNode("div", {
                        class: normalizeClass(["fixed-bottom q-pa-sm border-grey-top row", {
                          "bg-dark": _ctx.$q.dark.mode,
                          "bg-white": !_ctx.$q.dark.mode
                        }])
                      }, [
                        createBaseVNode("div", _hoisted_30, [
                          createVNode(QBtnGroup, {
                            unelevated: "",
                            class: "radius8"
                          }, {
                            default: withCtx(() => [
                              createVNode(QBtn, {
                                onClick: _cache[6] || (_cache[6] = ($event) => $data.item_qty > 1 ? $data.item_qty-- : 1),
                                color: _ctx.$q.dark.mode ? "grey600" : "mygrey",
                                "text-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                                icon: "o_remove",
                                size: "md",
                                dense: "",
                                class: "q-pa-sm"
                              }, null, 8, ["color", "text-color"]),
                              createVNode(QBtn, {
                                color: _ctx.$q.dark.mode ? "grey600" : "mygrey",
                                "text-color": _ctx.$q.dark.mode ? "grey300" : "dark",
                                dense: "",
                                label: $data.item_qty,
                                class: "no-pointer-events text-weight-medium",
                                style: { "min-width": "30px" }
                              }, null, 8, ["color", "text-color", "label"]),
                              createVNode(QBtn, {
                                onClick: _cache[7] || (_cache[7] = ($event) => $data.item_qty++),
                                color: _ctx.$q.dark.mode ? "grey600" : "mygrey",
                                "text-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                                icon: "o_add",
                                size: "md",
                                dense: "",
                                class: "q-pa-sm"
                              }, null, 8, ["color", "text-color"])
                            ]),
                            _: 1
                          })
                        ]),
                        createBaseVNode("div", _hoisted_31, [
                          createVNode(QBtn, {
                            unelevated: "",
                            color: "primary",
                            "text-color": "white",
                            class: "fit radius8 q-pa-sm",
                            "no-caps": "",
                            onClick: $options.CheckaddCartItems,
                            disable: $data.disabled_cart,
                            loading: $data.loading_add,
                            size: "md",
                            dense: ""
                          }, {
                            default: withCtx(() => [
                              createBaseVNode("div", _hoisted_32, [
                                createBaseVNode("div", _hoisted_33, [
                                  $data.items.not_for_sale ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                                    createTextVNode(toDisplayString(_ctx.$t("Not for sale")), 1)
                                  ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                                    createTextVNode(toDisplayString(_ctx.$t("Add to cart")), 1)
                                  ], 64))
                                ]),
                                createBaseVNode("div", _hoisted_34, [
                                  createVNode(_component_NumberFormat, {
                                    amount: $data.item_total,
                                    money_config: $props.money_config
                                  }, null, 8, ["amount", "money_config"])
                                ])
                              ])
                            ]),
                            _: 1
                          }, 8, ["onClick", "disable", "loading"])
                        ])
                      ], 2)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }))
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["modelValue"]);
}
var ItemDetailsCheckbox = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "ItemDetailsCheckbox.vue"]]);
export { ItemDetailsCheckbox as default };
//# sourceMappingURL=data:application/json;base64,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LFlBQU0sNkJBQXRCRSxtQkFFV0M7QUFBQSxvRUFETixLQUFFO0FBQUEsMERBRVBELG1CQUVXQztBQUFBLG9FQUROLEtBQUU7QUFBQTs7Z0NBR1RILGdCQUtNLE9BTE4sYUFLTTtBQUFBLGtDQUpKRixZQUdnQjtBQUFBLG9DQUZiLFFBQVEsTUFBVTtBQUFBLG9DQUNsQixjQUFjLE9BQVk7QUFBQSIsIm5hbWVzIjpbImRhdGEiLCJfY3JlYXRlQmxvY2siLCJfY3JlYXRlVk5vZGUiLCJfb3BlbkJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl90b0Rpc3BsYXlTdHJpbmciLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX0ZyYWdtZW50IiwiX2NyZWF0ZVRleHRWTm9kZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0l0ZW1EZXRhaWxzQ2hlY2tib3gudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHEtZGlhbG9nIHYtbW9kZWw9XCJpdGVtX2RpYWxvZ1wiIHBvc2l0aW9uPVwiYm90dG9tXCI+XG4gICAgPHEtY2FyZCBjbGFzcz1cInJvdW5kZWQtYm9yZGVycy10b3BcIj5cbiAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwibG9hZGluZ1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgZmxleCBmbGV4LWNlbnRlclwiIHN0eWxlPVwiaGVpZ2h0OiAyMDBweFwiPlxuICAgICAgICAgIDxxLWNpcmN1bGFyLXByb2dyZXNzXG4gICAgICAgICAgICBpbmRldGVybWluYXRlXG4gICAgICAgICAgICByb3VuZGVkXG4gICAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgY2xhc3M9XCJxLW1hLW1kXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8RElWIHYtZWxzZT5cbiAgICAgICAgPHEtY2FyZCBjbGFzcz1cIm5vLXNoYWRvd1wiPlxuICAgICAgICAgIDxxLWNhcmQtc2VjdGlvblxuICAgICAgICAgICAgY2xhc3M9XCJuby13cmFwIHEtcGEtbm9uZSBiZy1teWdyZXl4IHJlbGF0aXZlLXBvc2l0aW9uIGJuXCJcbiAgICAgICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICAgJ2JnLWdyZXk2MDAgJzogJHEuZGFyay5tb2RlLFxuICAgICAgICAgICAgICAnYmctbXlncmV5ICc6ICEkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgICB9XCJcbiAgICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyNXB4O1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyNXB4O1xuICAgICAgICAgICAgXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cS1pbWdcbiAgICAgICAgICAgICAgOnNyYz1cInRoaXMuaW1hZ2VfZmVhdHVyZWQgPyB0aGlzLmltYWdlX2ZlYXR1cmVkIDogaXRlbXMudXJsX2ltYWdlXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXItc3JjPVwicGxhY2Vob2xkZXIucG5nXCJcbiAgICAgICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDE4MHB4XCJcbiAgICAgICAgICAgICAgZml0PVwiY292ZXJcIlxuICAgICAgICAgICAgICBzcGlubmVyLWNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgIHNwaW5uZXItc2l6ZT1cInhzXCJcbiAgICAgICAgICAgID48L3EtaW1nPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInEtcGEtc20gYWJzb2x1dGUtdG9wLXJpZ2h0XCI+XG4gICAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICAgIGljb249XCJjbG9zZVwiXG4gICAgICAgICAgICAgICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ3ByaW1hcnknIDogJ2dyZXknXCJcbiAgICAgICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICAgICAgcm91bmRcbiAgICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBpdGVtcy1jZW50ZXIgcS1tYi1zbVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpbmUtbm9ybWFsIGVsbGlwc2lzLTItbGluZXMgdGV4dC1oNlwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gdi1odG1sPVwiaXRlbXMuaXRlbV9uYW1lXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtcmlnaHQgY29sLTUgcS1ndXR0ZXItc21cIj5cbiAgICAgICAgICAgICAgICA8RmF2c0l0ZW1cbiAgICAgICAgICAgICAgICAgIHJlZj1cImZhdnNcIlxuICAgICAgICAgICAgICAgICAgOmxheW91dD1cIjFcIlxuICAgICAgICAgICAgICAgICAgOml0ZW1fdG9rZW49XCJpdGVtcy5pdGVtX3Rva2VuXCJcbiAgICAgICAgICAgICAgICAgIDpjYXRfaWQ9XCJpdGVtcy5jYXRfaWRcIlxuICAgICAgICAgICAgICAgICAgOmFjdGl2ZT1cIml0ZW1zLnNhdmVfaXRlbVwiXG4gICAgICAgICAgICAgICAgICBAYWZ0ZXItc2F2ZWZhdj1cImFmdGVyU2F2ZWZhdihpdGVtcylcIlxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8U2hhcmVDb21wb25lbnRzXG4gICAgICAgICAgICAgICAgICA6dGl0bGU9XCJpdGVtcy5pdGVtX25hbWVcIlxuICAgICAgICAgICAgICAgICAgOnRleHQ9XCJpdGVtcy5pdGVtX2Rlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgIDpkaWFsb2dUaXRsZT1cIiR0KCdTaGFyZScpXCJcbiAgICAgICAgICAgICAgICAgIDp1cmw9XCJkZWVwX2xpbmsgKyAnL2l0ZW0vJyArIGl0ZW1zLml0ZW1fdG9rZW5cIlxuICAgICAgICAgICAgICAgICAgOmxheW91dD1cIjJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L1NoYXJlQ29tcG9uZW50cz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiZWxsaXBzaXMtMy1saW5lcyB0ZXh0LWdyZXkgdGV4dC1ib2R5MiBsaW5lLW5vcm1hbFwiPlxuICAgICAgICAgICAgICA8c3BhbiB2LWh0bWw9XCJpdGVtcy5pdGVtX2Rlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICA8SXRlbUdhbGxlcnlcbiAgICAgICAgICAgICAgOml0ZW1fZ2FsbGVyeT1cIml0ZW1fZ2FsbGVyeVwiXG4gICAgICAgICAgICAgIEBhZnRlci1zZWxlY3RpbWFnZT1cImFmdGVyU2VsZWN0aW1hZ2VcIlxuICAgICAgICAgICAgPjwvSXRlbUdhbGxlcnk+XG5cbiAgICAgICAgICAgIDwhLS0gU0laRSAgLS0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicS1tYi1zbVwiPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJmb250MTMgdGV4dC13ZWlnaHQtYm9sZCBuby1tYXJnaW4gbGluZS1ub3JtYWwgcS1wYi1zbVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7eyAkdChcIlNpemVcIikgfX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxxLW9wdGlvbi1ncm91cFxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJpdGVtX3NpemVfaWRcIlxuICAgICAgICAgICAgICAgIDpvcHRpb25zPVwic2l6ZV9kYXRhXCJcbiAgICAgICAgICAgICAgICBpbmxpbmVcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPCEtLSBTSVpFICAtLT5cblxuICAgICAgICAgICAgPCEtLSBDb29raW5nIFJlZmVyZW5jZSAgLS0+XG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCJjb29raW5nX2RhdGEubGVuZ3RoID4gMFwiIGNsYXNzPVwicS1tYi1zbVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udDEzIHRleHQtd2VpZ2h0LWJvbGQgbm8tbWFyZ2luIGxpbmUtbm9ybWFsXCI+XG4gICAgICAgICAgICAgICAge3sgJHQoXCJDb29raW5nIFJlZmVyZW5jZVwiKSB9fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHYtaWY9XCJpdGVtcy5jb29raW5nX3JlZl9yZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LXJlZCBmb250MTIgdGV4dC13ZWlnaHQtbWVkaXVtIHEtbWItc21cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgKHt7ICR0KFwiUmVxdWlyZWRcIikgfX0pXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cInRleHQtZ3JleSBmb250MTIgdGV4dC13ZWlnaHQtbWVkaXVtIHEtbWItc21cIj5cbiAgICAgICAgICAgICAgICB7eyAkdChcIk9wdGlvbmFsXCIpIH19XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8cS1vcHRpb24tZ3JvdXBcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiY29va2luZ19yZWZcIlxuICAgICAgICAgICAgICAgIDpvcHRpb25zPVwiY29va2luZ19kYXRhXCJcbiAgICAgICAgICAgICAgICBpbmxpbmVcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPCEtLSBDb29raW5nIFJlZmVyZW5jZSAgLS0+XG5cbiAgICAgICAgICAgIDwhLS0gSW5ncmVkaWVudHMgIC0tPlxuICAgICAgICAgICAgPGRpdiB2LWlmPVwiaW5ncmVkaWVudHNfZGF0YS5sZW5ndGggPiAwXCIgY2xhc3M9XCJxLW1iLXNtXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250MTMgdGV4dC13ZWlnaHQtYm9sZCBuby1tYXJnaW4gbGluZS1ub3JtYWxcIj5cbiAgICAgICAgICAgICAgICB7eyAkdChcIkluZ3JlZGllbnRzXCIpIH19XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1ncmV5IGZvbnQxMiB0ZXh0LXdlaWdodC1tZWRpdW0gcS1tYi1zbVwiPlxuICAgICAgICAgICAgICAgIHt7ICR0KFwiT3B0aW9uYWxcIikgfX1cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPHEtb3B0aW9uLWdyb3VwXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImluZ3JlZGllbnRzXCJcbiAgICAgICAgICAgICAgICA6b3B0aW9ucz1cImluZ3JlZGllbnRzX2RhdGFcIlxuICAgICAgICAgICAgICAgIGlubGluZVxuICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgY2hlY2tlZC1pY29uPVwiY2hlY2tfYm94XCJcbiAgICAgICAgICAgICAgICB1bmNoZWNrZWQtaWNvbj1cInNxdWFyZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwhLS0gSW5ncmVkaWVudHMgIC0tPlxuXG4gICAgICAgICAgICA8IS0tIEFERE9OUyAtLT5cbiAgICAgICAgICAgIDwhLS0gPHByZT57eyBhZGRvbnMgfX08L3ByZT4gLS0+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImFkZG9uc1tpdGVtX3NpemVfaWRdXCI+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgIHYtZm9yPVwiYWRkb25zIGluIGFkZG9uc1tpdGVtX3NpemVfaWRdXCJcbiAgICAgICAgICAgICAgICA6a2V5PVwiYWRkb25zLnN1YmNhdF9pZFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8RElWIGNsYXNzPVwicS1tYi1tZFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGZvbnQxMyBuby1tYXJnaW4gbGluZS1ub3JtYWwgcS1wYS1zbVwiXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICAgICAgICAgICAnYmctZ3JleTYwMCAnOiAkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgJ2JnLW15Z3JleSAnOiAhJHEuZGFyay5tb2RlLFxuICAgICAgICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC13ZWlnaHQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgYWRkb25zLnN1YmNhdGVnb3J5X25hbWUgfX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImFkZG9ucy5tdWx0aV9vcHRpb24gPT09ICdvbmUnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyAkdChcIlNlbGVjdCAxXCIpIH19XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlLWlmPVwiYWRkb25zLm11bHRpX29wdGlvbiA9PT0gJ211bHRpcGxlJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJhZGRvbnMubXVsdGlfb3B0aW9uX21pbiA+IDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdChcIlNlbGVjdCBtaW5pbXVtIHttaW59IHRvIG1heGltdW0ge21heH1cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluOiBhZGRvbnMubXVsdGlfb3B0aW9uX21pbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heDogYWRkb25zLm11bHRpX29wdGlvbl92YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KFwiQ2hvb3NlIHVwIHRvXCIpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGFkZG9ucy5tdWx0aV9vcHRpb25fdmFsdWUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlLWlmPVwiYWRkb25zLm11bHRpX29wdGlvbiA9PT0gJ2N1c3RvbSdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiYWRkb25zLm11bHRpX29wdGlvbl9taW4gPiAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHQoXCJTZWxlY3QgbWluaW11bSB7bWlufSB0byBtYXhpbXVtIHttYXh9XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogYWRkb25zLm11bHRpX29wdGlvbl9taW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg6IGFkZG9ucy5tdWx0aV9vcHRpb25fdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAkdChcIkNob29zZSB1cCB0b1wiKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBhZGRvbnMubXVsdGlfb3B0aW9uX3ZhbHVlIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJhZGRvbnMucmVxdWlyZV9hZGRvbiA9PSAxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInEtbWwtc20gdGV4dC1yZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+KHt7ICR0KFwiUmVxdWlyZWRcIikgfX0pPC9zcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJxLW1sLXNtXCI+KHt7ICR0KFwiT3B0aW9uYWxcIikgfX0pPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8IS0tIGFkZG9ucyAtLT5cbiAgICAgICAgICAgICAgICAgIDxxLWxpc3Q+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cInN1Yl9pdGVtcyBpbiBhZGRvbnMuc3ViX2l0ZW1zXCJcbiAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwic3ViX2l0ZW1zLnN1Yl9pdGVtX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICB2LXJpcHBsZVxuICAgICAgICAgICAgICAgICAgICAgIDp0YWc9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZG9ucy5tdWx0aV9vcHRpb24gPT09ICdtdWx0aXBsZScgPyAnZGl2JyA6ICdsYWJlbCdcbiAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJhZGRvbnMubXVsdGlfb3B0aW9uID09PSAnb25lJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtcmFkaW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiYWRkb25zLnN1Yl9pdGVtc19jaGVja2VkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dmFsPVwic3ViX2l0ZW1zLnN1Yl9pdGVtX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsPnt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViX2l0ZW1zLnN1Yl9pdGVtX25hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uPnt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViX2l0ZW1zLnByZXR0eV9wcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZS1pZj1cImFkZG9ucy5tdWx0aV9vcHRpb24gPT09ICdjdXN0b20nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1jaGVja2JveFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJzdWJfaXRlbXMuY2hlY2tlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOnZhbD1cInN1Yl9pdGVtcy5zdWJfaXRlbV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlPVwic3ViX2l0ZW1zLmRpc2FibGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWNoZWNrYm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbD57e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Yl9pdGVtcy5zdWJfaXRlbV9uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbj57e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Yl9pdGVtcy5wcmV0dHlfcHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2UtaWY9XCJhZGRvbnMubXVsdGlfb3B0aW9uID09PSAnbXVsdGlwbGUnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gOnNpZGU9XCIhc3ViX2l0ZW1zLmNoZWNrZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJzdWJfaXRlbXMuY2hlY2tlZCA9PSB0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBuby1wYWRkaW5nIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViX2l0ZW1zLnF0eSA+IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gc3ViX2l0ZW1zLnF0eS0tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChzdWJfaXRlbXMuY2hlY2tlZCA9IGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3VuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCIxMXB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInJlbW92ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgbm8tcGFkZGluZyB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgc3ViX2l0ZW1zLnF0eSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgbm8tcGFkZGluZyB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInN1Yl9pdGVtcy5xdHkrK1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjExcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiYWRkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVwic3ViX2l0ZW1zLmRpc2FibGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInN1Yl9pdGVtcy5jaGVja2VkID0gdHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3VuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCIxMXB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiZ3JleS00XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJhZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVwic3ViX2l0ZW1zLmRpc2FibGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJfaXRlbXMuc3ViX2l0ZW1fbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24+e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJfaXRlbXMucHJldHR5X3ByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgPC9xLWxpc3Q+XG4gICAgICAgICAgICAgICAgICA8IS0tIGVuZCBhZGRvbnMgLS0+XG4gICAgICAgICAgICAgICAgPC9ESVY+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPCEtLSBBRERPTlMgLS0+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXdlaWdodC1ib2xkIGZvbnQxMyBxLW10LXNtXCI+XG4gICAgICAgICAgICAgIHt7ICR0KFwiU3BlY2lhbCBJbnN0cnVjdGlvbnNcIikgfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICAgICAgdi1tb2RlbD1cInNwZWNpYWxfaW5zdHJ1Y3Rpb25zXCJcbiAgICAgICAgICAgICAgYXV0b2dyb3dcbiAgICAgICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICAgICAgY2xhc3M9XCJxLXBhLW5vbmVcIlxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGQgZm9udDEzIHEtbXQtc21cIj5cbiAgICAgICAgICAgICAge3sgJHQoXCJJZiBzb2xkIG91dFwiKSB9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cS1zZWxlY3RcbiAgICAgICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgICAgdi1tb2RlbD1cImlmX3NvbGRfb3V0XCJcbiAgICAgICAgICAgICAgOm9wdGlvbnM9XCJzb2xkX291dF9vcHRpb25zXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICBjbGFzcz1cInEtbWItbWRcIlxuICAgICAgICAgICAgICB0cmFuc2l0aW9uLXNob3c9XCJzY2FsZVwiXG4gICAgICAgICAgICAgIHRyYW5zaXRpb24taGlkZT1cInNjYWxlXCJcbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxxLXNwYWNlIGNsYXNzPVwicS1wYS14bFwiPjwvcS1zcGFjZT5cblxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzcz1cImZpeGVkLWJvdHRvbSBxLXBhLXNtIGJvcmRlci1ncmV5LXRvcCByb3dcIlxuICAgICAgICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICAgJ2JnLWRhcmsnOiAkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgICAgICAgJ2JnLXdoaXRlJzogISRxLmRhcmsubW9kZSxcbiAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNVwiPlxuICAgICAgICAgICAgICAgIDxxLWJ0bi1ncm91cCB1bmVsZXZhdGVkIGNsYXNzPVwicmFkaXVzOFwiPlxuICAgICAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIml0ZW1fcXR5ID4gMSA/IGl0ZW1fcXR5LS0gOiAxXCJcbiAgICAgICAgICAgICAgICAgICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXk2MDAnIDogJ215Z3JleSdcIlxuICAgICAgICAgICAgICAgICAgICA6dGV4dC1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICdncmV5J1wiXG4gICAgICAgICAgICAgICAgICAgIGljb249XCJvX3JlbW92ZVwiXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicS1wYS1zbVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgICAgIDpjb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5NjAwJyA6ICdteWdyZXknXCJcbiAgICAgICAgICAgICAgICAgICAgOnRleHQtY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTMwMCcgOiAnZGFyaydcIlxuICAgICAgICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCJpdGVtX3F0eVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibm8tcG9pbnRlci1ldmVudHMgdGV4dC13ZWlnaHQtbWVkaXVtXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJtaW4td2lkdGg6IDMwcHhcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJpdGVtX3F0eSsrXCJcbiAgICAgICAgICAgICAgICAgICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXk2MDAnIDogJ215Z3JleSdcIlxuICAgICAgICAgICAgICAgICAgICA6dGV4dC1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICdncmV5J1wiXG4gICAgICAgICAgICAgICAgICAgIGljb249XCJvX2FkZFwiXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicS1wYS1zbVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvcS1idG4tZ3JvdXA+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTdcIj5cbiAgICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICB0ZXh0LWNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmaXQgcmFkaXVzOCBxLXBhLXNtXCJcbiAgICAgICAgICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICAgICAgICAgIEBjbGljaz1cIkNoZWNrYWRkQ2FydEl0ZW1zXCJcbiAgICAgICAgICAgICAgICAgIDpkaXNhYmxlPVwiZGlzYWJsZWRfY2FydFwiXG4gICAgICAgICAgICAgICAgICA6bG9hZGluZz1cImxvYWRpbmdfYWRkXCJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBmaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtd2VpZ2h0LW1lZGl1bSBmb250MTdcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIml0ZW1zLm5vdF9mb3Jfc2FsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgJHQoXCJOb3QgZm9yIHNhbGVcIikgfX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyAkdChcIkFkZCB0byBjYXJ0XCIpIH19XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXdlaWdodC1ib2xkIGZvbnQxNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxOdW1iZXJGb3JtYXRcbiAgICAgICAgICAgICAgICAgICAgICAgIDphbW91bnQ9XCJpdGVtX3RvdGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDptb25leV9jb25maWc9XCJtb25leV9jb25maWdcIlxuICAgICAgICAgICAgICAgICAgICAgID48L051bWJlckZvcm1hdD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3EtYnRuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDwvcS1jYXJkPlxuICAgICAgPC9ESVY+XG4gICAgPC9xLWNhcmQ+XG4gIDwvcS1kaWFsb2c+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgZGVmaW5lQXN5bmNDb21wb25lbnQgfSBmcm9tIFwidnVlXCI7XG5pbXBvcnQgQVBJaW50ZXJmYWNlIGZyb20gXCJzcmMvYXBpL0FQSWludGVyZmFjZVwiO1xuaW1wb3J0IHsgdXNlQ2FydFN0b3JlIH0gZnJvbSBcInN0b3Jlcy9DYXJ0U3RvcmVcIjtcbmltcG9ydCB7IHVzZUZhdm9yaXRlU3RvcmUgfSBmcm9tIFwic3RvcmVzL0Zhdm9yaXRlU3RvcmVcIjtcbmltcG9ydCB7IHVzZURlbGl2ZXJ5c2NoZWRTdG9yZSB9IGZyb20gXCJzdG9yZXMvRGVsaXZlcnlTY2hlZFwiO1xuaW1wb3J0IGNvbmZpZyBmcm9tIFwic3JjL2FwaS9jb25maWdcIjtcblxuY29uc3QgZW1wdHkgPSBmdW5jdGlvbiAoZGF0YSkge1xuICBpZiAoXG4gICAgdHlwZW9mIGRhdGEgPT09IFwidW5kZWZpbmVkXCIgfHxcbiAgICBkYXRhID09PSBudWxsIHx8XG4gICAgZGF0YSA9PT0gXCJcIiB8fFxuICAgIGRhdGEgPT09IFwibnVsbFwiIHx8XG4gICAgZGF0YSA9PT0gXCJ1bmRlZmluZWRcIlxuICApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiSXRlbURldGFpbHNcIixcbiAgcHJvcHM6IFtcInNsdWdcIiwgXCJtb25leV9jb25maWdcIiwgXCJjdXJyZW5jeV9jb2RlXCJdLFxuICBjb21wb25lbnRzOiB7XG4gICAgRmF2c0l0ZW06IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+IGltcG9ydChcImNvbXBvbmVudHMvRmF2c0l0ZW0udnVlXCIpKSxcbiAgICBOdW1iZXJGb3JtYXQ6IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+XG4gICAgICBpbXBvcnQoXCJjb21wb25lbnRzL051bWJlckZvcm1hdC52dWVcIilcbiAgICApLFxuICAgIEl0ZW1HYWxsZXJ5OiBkZWZpbmVBc3luY0NvbXBvbmVudCgoKSA9PlxuICAgICAgaW1wb3J0KFwiY29tcG9uZW50cy9JdGVtR2FsbGVyeS52dWVcIilcbiAgICApLFxuICAgIFNoYXJlQ29tcG9uZW50czogZGVmaW5lQXN5bmNDb21wb25lbnQoKCkgPT5cbiAgICAgIGltcG9ydChcInNyYy9jb21wb25lbnRzL1NoYXJlQ29tcG9uZW50cy52dWVcIilcbiAgICApLFxuICB9LFxuICBzZXR1cCgpIHtcbiAgICBjb25zdCBDYXJ0U3RvcmUgPSB1c2VDYXJ0U3RvcmUoKTtcbiAgICBjb25zdCBGYXZvcml0ZVN0b3JlID0gdXNlRmF2b3JpdGVTdG9yZSgpO1xuICAgIGNvbnN0IHNjaGVkU3RvcmUgPSB1c2VEZWxpdmVyeXNjaGVkU3RvcmUoKTtcbiAgICByZXR1cm4geyBDYXJ0U3RvcmUsIEZhdm9yaXRlU3RvcmUsIHNjaGVkU3RvcmUgfTtcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXRlbV9kaWFsb2c6IGZhbHNlLFxuICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgIGxvYWRpbmdfYWRkOiBmYWxzZSxcbiAgICAgIGl0ZW1fcXR5OiAxLFxuICAgICAgaXRlbXM6IFtdLFxuICAgICAgaXRlbV9zaXplX2lkOiAwLFxuICAgICAgc2l6ZV9kYXRhOiBbXSxcbiAgICAgIHNpemVfZGF0YXM6IFtdLFxuICAgICAgY29va2luZ19yZWY6IDAsXG4gICAgICBjb29raW5nX2RhdGE6IFtdLFxuICAgICAgaW5ncmVkaWVudHM6IFtdLFxuICAgICAgaW5ncmVkaWVudHNfZGF0YTogW10sXG4gICAgICBhZGRvbnM6IHt9LFxuICAgICAgc3BlY2lhbF9pbnN0cnVjdGlvbnM6IFwiXCIsXG4gICAgICB0cmFuc2FjdGlvbl90eXBlOiBcIlwiLFxuICAgICAgaWZfc29sZF9vdXQ6IFwiXCIsXG4gICAgICBzb2xkX291dF9vcHRpb25zOiBbXSxcbiAgICAgIGl0ZW1fdG90YWw6IDAsXG4gICAgICBkaXNhYmxlZF9jYXJ0OiB0cnVlLFxuICAgICAgc2xpZGVfaXRlbXM6IDAsXG4gICAgICBmYXZvcml0ZXM6IFtdLFxuICAgICAgLy8gY29uZmlnOiBbXSxcbiAgICAgIHJlc3RhdXJhbnRfbmFtZTogXCJcIixcbiAgICAgIG1lcmNoYW50X2lkOiBcIlwiLFxuICAgICAgZGF0YV9jYXRfaWQ6IFwiXCIsXG4gICAgICBkYXRhX2l0ZW1fdG9rZW46IFwiXCIsXG4gICAgICBtZXJjaGFudFNsdWc6IFwiXCIsXG4gICAgICBpdGVtX2dhbGxlcnk6IFtdLFxuICAgICAgaW1hZ2VfZmVhdHVyZWQ6IFwiXCIsXG4gICAgICBkZWVwX2xpbms6IFwiXCIsXG4gICAgfTtcbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLmRlZXBfbGluayA9IGNvbmZpZy5hcGlfYmFzZV91cmw7XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5tZXJjaGFudFNsdWcgPSB0aGlzLnNsdWc7XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgYWRkb25zOiB7XG4gICAgICBoYW5kbGVyKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB0aGlzLkl0ZW1TdW1tYXJ5KCk7XG4gICAgICB9LFxuICAgICAgZGVlcDogdHJ1ZSxcbiAgICB9LFxuICAgIGl0ZW1fc2l6ZV9pZCgpIHtcbiAgICAgIHRoaXMuSXRlbVN1bW1hcnkoKTtcbiAgICB9LFxuICAgIGNvb2tpbmdfcmVmKCkge1xuICAgICAgdGhpcy5JdGVtU3VtbWFyeSgpO1xuICAgIH0sXG4gICAgaW5ncmVkaWVudHMoKSB7XG4gICAgICB0aGlzLkl0ZW1TdW1tYXJ5KCk7XG4gICAgfSxcbiAgICBpdGVtX3F0eSgpIHtcbiAgICAgIHRoaXMuSXRlbVN1bW1hcnkoKTtcbiAgICB9LFxuICAgIGluZ3JlZGllbnRzX2RhdGE6IHtcbiAgICAgIGhhbmRsZXIobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHRoaXMuaW5ncmVkaWVudHMgPSBbXTtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuaW5ncmVkaWVudHNfZGF0YSkubGVuZ3RoID4gMCkge1xuICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMuaW5ncmVkaWVudHNfZGF0YSkuZm9yRWFjaCgoW2tleSwgaXRlbXNdKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbXMub25PZmYpIHtcbiAgICAgICAgICAgICAgdGhpcy5pbmdyZWRpZW50cy5wdXNoKGl0ZW1zLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRlZXA6IHRydWUsXG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGlzQ2xpY2thYmxlKGRhdGEpIHtcbiAgICAgIGlmIChkYXRhLm11bHRpX29wdGlvbiA9PT0gXCJtdWx0aXBsZVwiKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFwibGFiZWxcIjtcbiAgICB9LFxuICAgIGlzUmlwcGxlKGRhdGEpIHtcbiAgICAgIGlmIChkYXRhLm11bHRpX29wdGlvbiA9PT0gXCJtdWx0aXBsZVwiKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgcmVzZXREYXRhKCkge1xuICAgICAgdGhpcy5pdGVtX3F0eSA9IDE7XG4gICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgICB0aGlzLml0ZW1fc2l6ZV9pZCA9IDA7XG4gICAgICB0aGlzLnNpemVfZGF0YSA9IFtdO1xuICAgICAgdGhpcy5zaXplX2RhdGFzID0gW107XG4gICAgICB0aGlzLmNvb2tpbmdfcmVmID0gMDtcbiAgICAgIHRoaXMuY29va2luZ19kYXRhID0gW107XG4gICAgICB0aGlzLmluZ3JlZGllbnRzID0gW107XG4gICAgICB0aGlzLmluZ3JlZGllbnRzX2RhdGEgPSBbXTtcbiAgICAgIHRoaXMuYWRkb25zID0ge307XG4gICAgICB0aGlzLnNwZWNpYWxfaW5zdHJ1Y3Rpb25zID0gXCJcIjtcbiAgICAgIHRoaXMudHJhbnNhY3Rpb25fdHlwZSA9IFwiXCI7XG4gICAgICB0aGlzLmlmX3NvbGRfb3V0ID0gXCJcIjtcbiAgICAgIHRoaXMuc29sZF9vdXRfb3B0aW9ucyA9IFtdO1xuICAgICAgdGhpcy5pdGVtX3RvdGFsID0gMDtcbiAgICAgIHRoaXMuZGlzYWJsZWRfY2FydCA9IHRydWU7XG4gICAgICB0aGlzLnNsaWRlX2l0ZW1zID0gMDtcbiAgICAgIHRoaXMuZGF0YV9jYXRfaWQgPSBcIlwiO1xuICAgICAgdGhpcy5kYXRhX2l0ZW1fdG9rZW4gPSBcIlwiO1xuICAgICAgdGhpcy5pbWFnZV9mZWF0dXJlZCA9IFwiXCI7XG4gICAgfSxcbiAgICBzaG93SXRlbTIoZGF0YSwgc2x1Zykge1xuICAgICAgaWYgKHR5cGVvZiBzbHVnICE9PSBcInVuZGVmaW5lZFwiICYmIHNsdWcgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5tZXJjaGFudFNsdWcgPSBzbHVnO1xuICAgICAgICB0aGlzLnNob3dJdGVtKGRhdGEpO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2hvd0l0ZW0oZGF0YSkge1xuICAgICAgdGhpcy5yZXNldERhdGEoKTtcbiAgICAgIHRoaXMuaXRlbV9kaWFsb2cgPSB0cnVlO1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgdGhpcy5kYXRhX2NhdF9pZCA9IGRhdGEuY2F0X2lkO1xuICAgICAgdGhpcy5kYXRhX2l0ZW1fdG9rZW4gPSBkYXRhLml0ZW1fdXVpZDtcblxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgdGhpcy5tZXJjaGFudFNsdWcgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgdGhpcy5tZXJjaGFudFNsdWcgIT09IG51bGxcbiAgICAgICkge1xuICAgICAgICAvL1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBBUElpbnRlcmZhY2UuZ2V0TWVudUl0ZW0oXG4gICAgICAgIGRhdGEuY2F0X2lkLFxuICAgICAgICBkYXRhLml0ZW1fdXVpZCxcbiAgICAgICAgdGhpcy5tZXJjaGFudFNsdWcsXG4gICAgICAgIHRoaXMuY3VycmVuY3lfY29kZVxuICAgICAgKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMubWVyY2hhbnRfaWQgPSBkYXRhLmRldGFpbHMubWVyY2hhbnRfaWQ7XG4gICAgICAgICAgdGhpcy5yZXN0YXVyYW50X25hbWUgPSBkYXRhLmRldGFpbHMucmVzdGF1cmFudF9uYW1lO1xuICAgICAgICAgIHRoaXMuaXRlbXMgPSBkYXRhLmRldGFpbHMuZGF0YS5pdGVtcztcbiAgICAgICAgICB0aGlzLnNpemVfZGF0YXMgPSBkYXRhLmRldGFpbHMuZGF0YS5pdGVtcy5wcmljZTtcbiAgICAgICAgICBjb25zdCBzb2xkT3V0RGF0YSA9IGRhdGEuZGV0YWlscy5zb2xkX291dF9vcHRpb25zO1xuXG4gICAgICAgICAgdGhpcy5pZl9zb2xkX291dCA9IGRhdGEuZGV0YWlscy5kZWZhdWx0X3NvbGRfb3V0X29wdGlvbnM7XG5cbiAgICAgICAgICBjb25zdCBwcmljZXMgPSBkYXRhLmRldGFpbHMuZGF0YS5pdGVtcy5wcmljZTtcbiAgICAgICAgICBjb25zdCBtZXRhQ29va2luZ1JlZiA9IGRhdGEuZGV0YWlscy5kYXRhLm1ldGFcbiAgICAgICAgICAgID8gZGF0YS5kZXRhaWxzLmRhdGEubWV0YS5jb29raW5nX3JlZlxuICAgICAgICAgICAgOiB7fTtcbiAgICAgICAgICBjb25zdCBtZXRhQ29va2luZ1JlZkRldGFpbHMgPSBkYXRhLmRldGFpbHMuZGF0YS5tZXRhXG4gICAgICAgICAgICA/IGRhdGEuZGV0YWlscy5kYXRhLm1ldGFfZGV0YWlscy5jb29raW5nX3JlZlxuICAgICAgICAgICAgOiB7fTtcblxuICAgICAgICAgIGNvbnN0IG1ldGFJbmdyZWRpZW50cyA9IGRhdGEuZGV0YWlscy5kYXRhLm1ldGFcbiAgICAgICAgICAgID8gZGF0YS5kZXRhaWxzLmRhdGEubWV0YS5pbmdyZWRpZW50c1xuICAgICAgICAgICAgOiB7fTtcbiAgICAgICAgICBjb25zdCBtZXRhSW5ncmVkaWVudHNEZXRhaWxzID0gZGF0YS5kZXRhaWxzLmRhdGEubWV0YVxuICAgICAgICAgICAgPyBkYXRhLmRldGFpbHMuZGF0YS5tZXRhX2RldGFpbHMuaW5ncmVkaWVudHNcbiAgICAgICAgICAgIDoge307XG5cbiAgICAgICAgICB0aGlzLml0ZW1fZ2FsbGVyeSA9IGRhdGEuZGV0YWlscy5kYXRhLm1ldGFcbiAgICAgICAgICAgID8gZGF0YS5kZXRhaWxzLmRhdGEubWV0YS5pdGVtX2dhbGxlcnlcbiAgICAgICAgICAgIDoge307XG5cbiAgICAgICAgICBjb25zdCBhZGRvbnMgPSBkYXRhLmRldGFpbHMuZGF0YSA/IGRhdGEuZGV0YWlscy5kYXRhLmFkZG9ucyA6IHt9O1xuICAgICAgICAgIGNvbnN0IGFkZG9uSXRlbXMgPSBkYXRhLmRldGFpbHMuZGF0YVxuICAgICAgICAgICAgPyBkYXRhLmRldGFpbHMuZGF0YS5hZGRvbl9pdGVtc1xuICAgICAgICAgICAgOiB7fTtcblxuICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhzb2xkT3V0RGF0YSkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoc29sZE91dERhdGEpLmZvckVhY2goXG4gICAgICAgICAgICAgIChbaXRlbVNvbGRLZXksIGl0ZW1zU29sZERhdGFdKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zb2xkX291dF9vcHRpb25zLnB1c2goe1xuICAgICAgICAgICAgICAgICAgbGFiZWw6IGl0ZW1zU29sZERhdGEsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbVNvbGRLZXksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHByaWNlcykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMocHJpY2VzKS5mb3JFYWNoKChba2V5LCBpdGVtc10pID0+IHtcbiAgICAgICAgICAgICAgaWYgKGl0ZW1zLmRpc2NvdW50IDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNpemVfZGF0YS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBpdGVtcy5zaXplX25hbWUgKyBcIiBcIiArIGl0ZW1zLnByZXR0eV9wcmljZSxcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBwYXJzZUludChpdGVtcy5pdGVtX3NpemVfaWQpLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2l6ZV9kYXRhLnB1c2goe1xuICAgICAgICAgICAgICAgICAgbGFiZWw6XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zLnNpemVfbmFtZSArIFwiIFwiICsgaXRlbXMucHJldHR5X3ByaWNlX2FmdGVyX2Rpc2NvdW50LFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IHBhcnNlSW50KGl0ZW1zLml0ZW1fc2l6ZV9pZCksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5pdGVtX3NpemVfaWQgPSBwYXJzZUludChPYmplY3Qua2V5cyhwcmljZXMpWzBdKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0eXBlb2YgbWV0YUNvb2tpbmdSZWYgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgICAgIG1ldGFDb29raW5nUmVmICE9PSBudWxsXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAobWV0YUNvb2tpbmdSZWYubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhtZXRhQ29va2luZ1JlZikuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb29raW5nX2RhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgICBsYWJlbDogbWV0YUNvb2tpbmdSZWZEZXRhaWxzW3ZhbHVlXS5tZXRhX25hbWUsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogbWV0YUNvb2tpbmdSZWZEZXRhaWxzW3ZhbHVlXS5tZXRhX2lkLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0eXBlb2YgbWV0YUluZ3JlZGllbnRzICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgICAgICBtZXRhSW5ncmVkaWVudHMgIT09IG51bGxcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGlmIChtZXRhSW5ncmVkaWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhtZXRhSW5ncmVkaWVudHMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChtZXRhSW5ncmVkaWVudHNEZXRhaWxzW3ZhbHVlXSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5pbmdyZWRpZW50c19kYXRhLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogbWV0YUluZ3JlZGllbnRzRGV0YWlsc1t2YWx1ZV0ubWV0YV9uYW1lLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbWV0YUluZ3JlZGllbnRzRGV0YWlsc1t2YWx1ZV0ubWV0YV9pZCxcbiAgICAgICAgICAgICAgICAgICAgLy8gY29sb3I6IHRoaXMuaXRlbXMuaW5ncmVkaWVudHNfcHJlc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gICA/IFwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIC8vICAgOiBcIm15Z3JleVwiLFxuICAgICAgICAgICAgICAgICAgICAvLyB0ZXh0X2NvbG9yOiB0aGlzLml0ZW1zLmluZ3JlZGllbnRzX3ByZXNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgIC8vICAgPyBcIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgLy8gICA6IFwiZGFya1wiLFxuICAgICAgICAgICAgICAgICAgICBvbk9mZjogdGhpcy5pdGVtcy5pbmdyZWRpZW50c19wcmVzZWxlY3RlZCA/IHRydWUgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gYWRkb25zXG4gICAgICAgICAgLy8gY29uc3QgYWRkb25zRGF0YSA9IFtdXG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5pdGVtcy5pdGVtX2FkZG9ucyk7XG4gICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuaXRlbXMuaXRlbV9hZGRvbnMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMuaXRlbXMuaXRlbV9hZGRvbnMpLmZvckVhY2goXG4gICAgICAgICAgICAgIChbc2l6ZUlkLCBTdWJjYXRJRF0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhZGRPbnNBZGRlZCA9IFtdO1xuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKFN1YmNhdElEKS5mb3JFYWNoKChba2V5LCBjaGlsZF0pID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmICghQVBJaW50ZXJmYWNlLmVtcHR5KGFkZG9uc1tzaXplSWRdKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIUFQSWludGVyZmFjZS5lbXB0eShhZGRvbnNbc2l6ZUlkXVtjaGlsZF0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWRkb25EZXRhaWxzID0gYWRkb25zW3NpemVJZF1bY2hpbGRdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ViSXRlbXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhhZGRvbkRldGFpbHMuc3ViX2l0ZW1zKS5mb3JFYWNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgKFtrZXkyLCBzdWJJdGVtc0lEXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWRkb25JdGVtc1tzdWJJdGVtc0lEXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1Ykl0ZW1zQWRkID0gYWRkb25JdGVtc1tzdWJJdGVtc0lEXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRvbkl0ZW1zW3N1Ykl0ZW1zSURdLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRvbkl0ZW1zW3N1Ykl0ZW1zSURdLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkb25JdGVtc1tzdWJJdGVtc0lEXS5xdHkgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ykl0ZW1zLnB1c2goc3ViSXRlbXNBZGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1YmRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJjYXRfaWQ6IGFkZG9uRGV0YWlscy5zdWJjYXRfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJjYXRlZ29yeV9uYW1lOiBhZGRvbkRldGFpbHMuc3ViY2F0ZWdvcnlfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YmNhdGVnb3J5X2Rlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRvbkRldGFpbHMuc3ViY2F0ZWdvcnlfZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aV9vcHRpb246IGFkZG9uRGV0YWlscy5tdWx0aV9vcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aV9vcHRpb25fbWluOiBhZGRvbkRldGFpbHMubXVsdGlfb3B0aW9uX21pbixcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpX29wdGlvbl92YWx1ZTogYWRkb25EZXRhaWxzLm11bHRpX29wdGlvbl92YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVfYWRkb246IGFkZG9uRGV0YWlscy5yZXF1aXJlX2FkZG9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlX3NlbGVjdGVkOiBhZGRvbkRldGFpbHMucHJlX3NlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViX2l0ZW1zX2NoZWNrZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJfaXRlbXM6IHN1Ykl0ZW1zLFxuICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgYWRkT25zQWRkZWQucHVzaChzdWJkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkb25zW3NpemVJZF0gPSBhZGRPbnNBZGRlZDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy9cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJyZWQtNVwiLCBlcnJvciwgXCJlcnJvcl9vdXRsaW5lXCIsIHRoaXMuJHEpO1xuICAgICAgICAgIHRoaXMuaXRlbV9kaWFsb2cgPSBmYWxzZTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBJdGVtU3VtbWFyeSgpIHtcbiAgICAgIGxldCAkaXRlbVRvdGFsID0gMDtcbiAgICAgIGNvbnN0ICRyZXF1aXJlZEFkZG9uID0gW107XG4gICAgICBjb25zdCAkcmVxdWlyZWRBZGRvbkFkZGVkID0gW107XG4gICAgICBsZXQgJG1pbl9hZGRvbiA9IFtdO1xuICAgICAgbGV0ICRtaW5fYWRkb25fYWRkZWQgPSBbXTtcblxuICAgICAgaWYgKCFlbXB0eSh0aGlzLnNpemVfZGF0YXNbdGhpcy5pdGVtX3NpemVfaWRdKSkge1xuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5zaXplX2RhdGFzW3RoaXMuaXRlbV9zaXplX2lkXTtcbiAgICAgICAgaWYgKGl0ZW0uZGlzY291bnQgPiAwKSB7XG4gICAgICAgICAgJGl0ZW1Ub3RhbCArPSB0aGlzLml0ZW1fcXR5ICogcGFyc2VGbG9hdChpdGVtLnByaWNlX2FmdGVyX2Rpc2NvdW50KTtcbiAgICAgICAgfSBlbHNlICRpdGVtVG90YWwgKz0gdGhpcy5pdGVtX3F0eSAqIHBhcnNlRmxvYXQoaXRlbS5wcmljZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghZW1wdHkodGhpcy5hZGRvbnNbdGhpcy5pdGVtX3NpemVfaWRdKSkge1xuICAgICAgICB0aGlzLmFkZG9uc1t0aGlzLml0ZW1fc2l6ZV9pZF0uZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAoaXRlbS5yZXF1aXJlX2FkZG9uID09PSBcIjFcIikge1xuICAgICAgICAgICAgJHJlcXVpcmVkQWRkb24ucHVzaChpdGVtLnN1YmNhdF9pZCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGl0ZW0ubXVsdGlfb3B0aW9uID09PSBcImN1c3RvbVwiKSB7XG4gICAgICAgICAgICBsZXQgdG90YWxDaGVjayA9IDA7XG4gICAgICAgICAgICBjb25zdCBtdWx0aU9wdGlvblZhbHVlID0gaXRlbS5tdWx0aV9vcHRpb25fdmFsdWU7XG4gICAgICAgICAgICBsZXQgbXVsdGlfb3B0aW9uX21pbiA9IGl0ZW0ubXVsdGlfb3B0aW9uX21pbjtcblxuICAgICAgICAgICAgaWYgKG11bHRpT3B0aW9uVmFsdWUgPiAwKSB7XG4gICAgICAgICAgICAgICRtaW5fYWRkb24ucHVzaCh7XG4gICAgICAgICAgICAgICAgc3ViY2F0X2lkOiBpdGVtLnN1YmNhdF9pZCxcbiAgICAgICAgICAgICAgICBtaW46IG11bHRpX29wdGlvbl9taW4sXG4gICAgICAgICAgICAgICAgbWF4OiBtdWx0aU9wdGlvblZhbHVlLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgaXRlbUluZGV4ID0gW107XG4gICAgICAgICAgICBjb25zdCBpdGVtSW5kZXgyID0gW107XG4gICAgICAgICAgICBpdGVtLnN1Yl9pdGVtcy5mb3JFYWNoKChpdGVtMiwgaW5kZXgyKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChpdGVtMi5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdG90YWxDaGVjaysrO1xuICAgICAgICAgICAgICAgICRpdGVtVG90YWwgKz0gdGhpcy5pdGVtX3F0eSAqIHBhcnNlRmxvYXQoaXRlbTIucHJpY2UpO1xuICAgICAgICAgICAgICAgICRyZXF1aXJlZEFkZG9uQWRkZWQucHVzaChpdGVtLnN1YmNhdF9pZCk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpdGVtSW5kZXgucHVzaChpbmRleDIpO1xuXG4gICAgICAgICAgICAgIGlmIChpdGVtMi5kaXNhYmxlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGl0ZW1JbmRleDIucHVzaChpbmRleDIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJG1pbl9hZGRvbl9hZGRlZFtpdGVtLnN1YmNhdF9pZF0gPSB7XG4gICAgICAgICAgICAgIHRvdGFsOiB0b3RhbENoZWNrLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKHRvdGFsQ2hlY2sgPj0gbXVsdGlPcHRpb25WYWx1ZSkge1xuICAgICAgICAgICAgICBpdGVtSW5kZXguZm9yRWFjaCgoaXRlbTMsIGluZGV4MykgPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW0uc3ViX2l0ZW1zW2l0ZW0zXS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaXRlbUluZGV4Mi5mb3JFYWNoKChpdGVtMywgaW5kZXgzKSA9PiB7XG4gICAgICAgICAgICAgICAgaXRlbS5zdWJfaXRlbXNbaXRlbTNdLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS5tdWx0aV9vcHRpb24gPT09IFwib25lXCIpIHtcbiAgICAgICAgICAgIGl0ZW0uc3ViX2l0ZW1zLmZvckVhY2goKGl0ZW0yLCBpbmRleDIpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGl0ZW0yLnN1Yl9pdGVtX2lkID09PSBpdGVtLnN1Yl9pdGVtc19jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgJGl0ZW1Ub3RhbCArPSB0aGlzLml0ZW1fcXR5ICogcGFyc2VGbG9hdChpdGVtMi5wcmljZSk7XG4gICAgICAgICAgICAgICAgJHJlcXVpcmVkQWRkb25BZGRlZC5wdXNoKGl0ZW0uc3ViY2F0X2lkKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChpdGVtLm11bHRpX29wdGlvbiA9PT0gXCJtdWx0aXBsZVwiKSB7XG4gICAgICAgICAgICBsZXQgbXVsdGlfb3B0aW9uX21pbiA9IGl0ZW0ubXVsdGlfb3B0aW9uX21pbjtcbiAgICAgICAgICAgIGNvbnN0IG11bHRpT3B0aW9uVmFsdWUgPSBpdGVtLm11bHRpX29wdGlvbl92YWx1ZTtcblxuICAgICAgICAgICAgaWYgKG11bHRpT3B0aW9uVmFsdWUgPiAwKSB7XG4gICAgICAgICAgICAgICRtaW5fYWRkb24ucHVzaCh7XG4gICAgICAgICAgICAgICAgc3ViY2F0X2lkOiBpdGVtLnN1YmNhdF9pZCxcbiAgICAgICAgICAgICAgICBtaW46IG11bHRpX29wdGlvbl9taW4sXG4gICAgICAgICAgICAgICAgbWF4OiBtdWx0aU9wdGlvblZhbHVlLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IFRvdGFsTXVsdGlRdHkgPSAwO1xuICAgICAgICAgICAgY29uc3QgaXRlbUluZGV4ID0gW107XG4gICAgICAgICAgICBpdGVtLnN1Yl9pdGVtcy5mb3JFYWNoKChpdGVtMiwgaW5kZXgyKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChpdGVtMi5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgJGl0ZW1Ub3RhbCArPSBpdGVtMi5xdHkgKiBwYXJzZUZsb2F0KGl0ZW0yLnByaWNlKTtcbiAgICAgICAgICAgICAgICBUb3RhbE11bHRpUXR5ICs9IGl0ZW0yLnF0eTtcbiAgICAgICAgICAgICAgICAkcmVxdWlyZWRBZGRvbkFkZGVkLnB1c2goaXRlbS5zdWJjYXRfaWQpO1xuICAgICAgICAgICAgICB9IGVsc2UgaXRlbUluZGV4LnB1c2goaW5kZXgyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkbWluX2FkZG9uX2FkZGVkW2l0ZW0uc3ViY2F0X2lkXSA9IHtcbiAgICAgICAgICAgICAgdG90YWw6IFRvdGFsTXVsdGlRdHksXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRvdGFsTXVsdGlRdHk9PlwiICsgVG90YWxNdWx0aVF0eSk7XG4gICAgICAgICAgICBpZiAoVG90YWxNdWx0aVF0eSA+PSBtdWx0aU9wdGlvblZhbHVlKSB7XG4gICAgICAgICAgICAgIGl0ZW0uc3ViX2l0ZW1zLmZvckVhY2goKHN1Yl9pdGVtczMsIHN1Yl9pdGVtc19pbmRleDMpID0+IHtcbiAgICAgICAgICAgICAgICBzdWJfaXRlbXMzLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpdGVtLnN1Yl9pdGVtcy5mb3JFYWNoKChzdWJfaXRlbXMzLCBzdWJfaXRlbXNfaW5kZXgzKSA9PiB7XG4gICAgICAgICAgICAgICAgc3ViX2l0ZW1zMy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IC8qIGVuZGlmIGN1c3RvbSAqL1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gZW5kIGxvb3AgYWRkb25zXG4gICAgICB9XG5cbiAgICAgIC8vaWYgKE9iamVjdC5rZXlzKHRoaXMubW9uZXlfY29uZmlnKS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLml0ZW1fdG90YWwgPSAkaXRlbVRvdGFsO1xuICAgICAgLy99XG5cbiAgICAgIGxldCAkcmVxdWlyZWRNZWV0ID0gdHJ1ZTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwicmVxdWlyZWRBZGRvbkFkZGVkXCIpO1xuICAgICAgLy8gY29uc29sZS5sb2coJHJlcXVpcmVkQWRkb25BZGRlZCk7XG4gICAgICBpZiAoJHJlcXVpcmVkQWRkb24ubGVuZ3RoID4gMCkge1xuICAgICAgICAkcmVxdWlyZWRBZGRvbi5mb3JFYWNoKChyZXF1aWVkSXRlbSwgcmVxdWlyZWRJbmRleCkgPT4ge1xuICAgICAgICAgIGlmICgkcmVxdWlyZWRBZGRvbkFkZGVkLmluY2x1ZGVzKHJlcXVpZWRJdGVtKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICRyZXF1aXJlZE1lZXQgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBDSEVDSyBDT09LSU5HIFJFRlxuICAgICAgaWYgKHRoaXMuaXRlbXMuY29va2luZ19yZWZfcmVxdWlyZWQpIHtcbiAgICAgICAgaWYgKHRoaXMuY29va2luZ19yZWYgPiAwKSB7XG4gICAgICAgICAgJHJlcXVpcmVkTWVldCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJHJlcXVpcmVkTWVldCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIENIRUNLIEFERE9OIE1JTklNVU0gQU5EIE1BWElNVU1cbiAgICAgIGlmIChPYmplY3Qua2V5cygkbWluX2FkZG9uKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBtaW5fdmFsdWUsIG1pbl9zZWxlY3RlZDtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoJG1pbl9hZGRvbikuZm9yRWFjaChcbiAgICAgICAgICAoW2tleV9taW5fYWRkb24sIGl0ZW1zX21pbl9hZGRvbl0pID0+IHtcbiAgICAgICAgICAgIG1pbl92YWx1ZSA9IHBhcnNlSW50KGl0ZW1zX21pbl9hZGRvbi5taW4pO1xuICAgICAgICAgICAgaWYgKCRtaW5fYWRkb25fYWRkZWRbaXRlbXNfbWluX2FkZG9uLnN1YmNhdF9pZF0pIHtcbiAgICAgICAgICAgICAgbWluX3NlbGVjdGVkID0gcGFyc2VJbnQoXG4gICAgICAgICAgICAgICAgJG1pbl9hZGRvbl9hZGRlZFtpdGVtc19taW5fYWRkb24uc3ViY2F0X2lkXS50b3RhbFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1pbl9zZWxlY3RlZCA+IDApIHtcbiAgICAgICAgICAgICAgaWYgKG1pbl92YWx1ZSA+IG1pbl9zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICRyZXF1aXJlZE1lZXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuaXRlbXMubm90X2Zvcl9zYWxlKSB7XG4gICAgICAgICRyZXF1aXJlZE1lZXQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCRyZXF1aXJlZE1lZXQpIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZF9jYXJ0ID0gZmFsc2U7XG4gICAgICB9IGVsc2UgdGhpcy5kaXNhYmxlZF9jYXJ0ID0gdHJ1ZTtcbiAgICB9LFxuICAgIENoZWNrYWRkQ2FydEl0ZW1zKCkge1xuICAgICAgY29uc29sZS5sb2coXCJDaGVja2FkZENhcnRJdGVtc1wiKTtcbiAgICAgIGxldCAkY2FydE1lcmNoYW50SUQgPSBcIlwiO1xuICAgICAgbGV0ICRjYXJ0TWVyY2hhbnROYW1lID0gXCJcIjtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuQ2FydFN0b3JlLmNhcnRfbWVyY2hhbnQpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5DYXJ0U3RvcmUuY2FydF9tZXJjaGFudC5tZXJjaGFudF9pZCk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLkNhcnRTdG9yZS5jYXJ0X21lcmNoYW50LnJlc3RhdXJhbnRfbmFtZSk7XG5cbiAgICAgIGlmICghQVBJaW50ZXJmYWNlLmVtcHR5KHRoaXMuQ2FydFN0b3JlLmNhcnRfbWVyY2hhbnQpKSB7XG4gICAgICAgICRjYXJ0TWVyY2hhbnRJRCA9IHRoaXMuQ2FydFN0b3JlLmNhcnRfbWVyY2hhbnQubWVyY2hhbnRfaWQ7XG4gICAgICAgICRjYXJ0TWVyY2hhbnROYW1lID0gdGhpcy5DYXJ0U3RvcmUuY2FydF9tZXJjaGFudC5yZXN0YXVyYW50X25hbWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUubG9nKCRjYXJ0TWVyY2hhbnRJRCArIFwiPT5cIiArIHRoaXMubWVyY2hhbnRfaWQpO1xuXG4gICAgICBpZiAoIUFQSWludGVyZmFjZS5lbXB0eSgkY2FydE1lcmNoYW50SUQpKSB7XG4gICAgICAgIGlmICgkY2FydE1lcmNoYW50SUQgIT09IHRoaXMubWVyY2hhbnRfaWQpIHtcbiAgICAgICAgICBsZXQgJG1lc3NhZ2UgPSB0aGlzLiR0KFxuICAgICAgICAgICAgXCJZb3VyIG9yZGVyIGNvbnRhaW5zIGl0ZW1zIGZyb20ge3tyZXN0YXVyYW50X25hbWV9fS4gQ3JlYXRlIGEgbmV3IG9yZGVyIHRvIGFkZCBpdGVtcy5cIlxuICAgICAgICAgICk7XG4gICAgICAgICAgJG1lc3NhZ2UgPSAkbWVzc2FnZS5yZXBsYWNlKFwie3tyZXN0YXVyYW50X25hbWV9fVwiLCAkY2FydE1lcmNoYW50TmFtZSk7XG4gICAgICAgICAgdGhpcy4kcVxuICAgICAgICAgICAgLmRpYWxvZyh7XG4gICAgICAgICAgICAgIHRpdGxlOiB0aGlzLiR0KFwiQ3JlYXRlIG5ldyBvcmRlcj9cIiksXG4gICAgICAgICAgICAgIG1lc3NhZ2U6ICRtZXNzYWdlLFxuICAgICAgICAgICAgICBwZXJzaXN0ZW50OiB0cnVlLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogXCJzdGFuZGFyZFwiLFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uU2hvdzogXCJmYWRlXCIsXG4gICAgICAgICAgICAgIHRyYW5zaXRpb25IaWRlOiBcImZhZGVcIixcbiAgICAgICAgICAgICAgb2s6IHtcbiAgICAgICAgICAgICAgICB1bmVsZXZhdGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBcInByaW1hcnlcIixcbiAgICAgICAgICAgICAgICByb3VuZGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcInRleHQtY29sb3JcIjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgIHNpemU6IFwibWRcIixcbiAgICAgICAgICAgICAgICBsYWJlbDogdGhpcy4kdChcIk5ldyBvcmRlclwiKSxcbiAgICAgICAgICAgICAgICBcIm5vLWNhcHNcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjbGFzczogXCJyYWRpdXM4XCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNhbmNlbDoge1xuICAgICAgICAgICAgICAgIHVuZWxldmF0ZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgcm91bmRlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29sb3I6IFwibXlncmV5XCIsXG4gICAgICAgICAgICAgICAgXCJ0ZXh0LWNvbG9yXCI6IFwiYmxhY2tcIixcbiAgICAgICAgICAgICAgICBzaXplOiBcIm1kXCIsXG4gICAgICAgICAgICAgICAgbGFiZWw6IHRoaXMuJHQoXCJDYW5jZWxcIiksXG4gICAgICAgICAgICAgICAgXCJuby1jYXBzXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgY2xhc3M6IFwicmFkaXVzOFwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbk9rKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5jbGVhckNhcnQoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub25DYW5jZWwoKCkgPT4ge1xuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnPj4+PiBDYW5jZWwnKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbkRpc21pc3MoKCkgPT4ge1xuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnSSBhbSB0cmlnZ2VyZWQgb24gYm90aCBPSyBhbmQgQ2FuY2VsJylcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuQWRkVG9DYXJ0KCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuQWRkVG9DYXJ0KCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBjbGVhckNhcnQoKSB7XG4gICAgICBjb25zdCAkY2FydFV1aWQgPSBBUElpbnRlcmZhY2UuZ2V0U3RvcmFnZShcImNhcnRfdXVpZFwiKTtcbiAgICAgIEFQSWludGVyZmFjZS5jbGVhckNhcnQoJGNhcnRVdWlkKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuQWRkVG9DYXJ0KCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBBUElpbnRlcmZhY2Uubm90aWZ5KFwicmVkLTVcIiwgZXJyb3IsIFwiZXJyb3Jfb3V0bGluZVwiLCB0aGlzLiRxKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHt9KTtcbiAgICB9LFxuICAgIEFkZFRvQ2FydCgpIHtcbiAgICAgIGNvbnN0ICRpbmdyZWRpZW50cyA9IFtdO1xuICAgICAgaWYgKHRoaXMuaW5ncmVkaWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLmluZ3JlZGllbnRzLmZvckVhY2goKGluZ3JlZGllbnRzSWQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgJGluZ3JlZGllbnRzLnB1c2goe1xuICAgICAgICAgICAgbWV0YV9pZDogaW5ncmVkaWVudHNJZCxcbiAgICAgICAgICAgIGNoZWNrZWQ6IHRydWUsXG4gICAgICAgICAgICBtZXRhX25hbWU6IFwiXCIsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCAkbWV0YSA9IHtcbiAgICAgICAgY29va2luZ19yZWY6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBtZXRhX2lkOiB0aGlzLmNvb2tpbmdfcmVmLFxuICAgICAgICAgICAgY2hlY2tlZDogdGhpcy5jb29raW5nX3JlZixcbiAgICAgICAgICAgIG1ldGFfbmFtZTogXCJcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBpbmdyZWRpZW50czogJGluZ3JlZGllbnRzLFxuICAgICAgfTtcbiAgICAgIGNvbnN0ICRjYXJ0VXVpZCA9IEFQSWludGVyZmFjZS5nZXRTdG9yYWdlKFwiY2FydF91dWlkXCIpO1xuICAgICAgY29uc3QgJGRhdGEgPSB7XG4gICAgICAgIHNsdWc6IHRoaXMubWVyY2hhbnRTbHVnLFxuICAgICAgICBjYXJ0X3V1aWQ6ICRjYXJ0VXVpZCxcbiAgICAgICAgY2F0X2lkOiB0aGlzLmRhdGFfY2F0X2lkLFxuICAgICAgICBpdGVtX3NpemVfaWQ6IHRoaXMuaXRlbV9zaXplX2lkLFxuICAgICAgICBpdGVtX3Rva2VuOiB0aGlzLmRhdGFfaXRlbV90b2tlbixcbiAgICAgICAgaXRlbV9xdHk6IHRoaXMuaXRlbV9xdHksXG4gICAgICAgIHNwZWNpYWxfaW5zdHJ1Y3Rpb25zOiB0aGlzLnNwZWNpYWxfaW5zdHJ1Y3Rpb25zLFxuICAgICAgICBpZl9zb2xkX291dDogdGhpcy5pZl9zb2xkX291dC52YWx1ZSxcbiAgICAgICAgdHJhbnNhY3Rpb25fdHlwZTogdGhpcy5zY2hlZFN0b3JlLnRyYW5zYWN0aW9uX3R5cGUsXG4gICAgICAgIG1ldGE6ICRtZXRhLFxuICAgICAgICBpdGVtX2FkZG9uczogIWVtcHR5KHRoaXMuYWRkb25zW3RoaXMuaXRlbV9zaXplX2lkXSlcbiAgICAgICAgICA/IHRoaXMuYWRkb25zW3RoaXMuaXRlbV9zaXplX2lkXVxuICAgICAgICAgIDogW10sXG4gICAgICB9O1xuXG4gICAgICB0aGlzLmxvYWRpbmdfYWRkID0gdHJ1ZTtcbiAgICAgIEFQSWludGVyZmFjZS5BZGRUb0NhcnQoJGRhdGEpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKGVtcHR5KCRjYXJ0VXVpZCkpIHtcbiAgICAgICAgICAgIEFQSWludGVyZmFjZS5zZXRTdG9yYWdlKFwiY2FydF91dWlkXCIsIGRhdGEuZGV0YWlscy5jYXJ0X3V1aWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLiRlbWl0KFwiYWZ0ZXJBZGRpdGVtc1wiKTtcbiAgICAgICAgICB0aGlzLml0ZW1fZGlhbG9nID0gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBBUElpbnRlcmZhY2Uubm90aWZ5KFwibmVnYXRpdmVcIiwgZXJyb3IsIFwiZXJyb3Jfb3V0bGluZVwiLCB0aGlzLiRxKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmdfYWRkID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgYWZ0ZXJTYXZlZmF2KGl0ZW0pIHtcbiAgICAgIGl0ZW0uc2F2ZV9pdGVtID0gIWl0ZW0uc2F2ZV9pdGVtO1xuICAgICAgdGhpcy5GYXZvcml0ZVN0b3JlLmdldEl0ZW1GYXZvcml0ZXModGhpcy5zbHVnKTtcbiAgICB9LFxuICAgIHNldEFjdGl2ZShidXR0b24sIGluZGV4KSB7XG4gICAgICBpZiAoYnV0dG9uLm9uT2ZmKSB7XG4gICAgICAgIHRoaXMuaW5ncmVkaWVudHNfZGF0YVtpbmRleF0uY29sb3IgPSBcIm15Z3JleVwiO1xuICAgICAgICB0aGlzLmluZ3JlZGllbnRzX2RhdGFbaW5kZXhdLnRleHRfY29sb3IgPSBcImRhcmtcIjtcbiAgICAgICAgdGhpcy5pbmdyZWRpZW50c19kYXRhW2luZGV4XS5vbk9mZiA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pbmdyZWRpZW50c19kYXRhW2luZGV4XS5jb2xvciA9IFwicHJpbWFyeVwiO1xuICAgICAgICB0aGlzLmluZ3JlZGllbnRzX2RhdGFbaW5kZXhdLnRleHRfY29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgIHRoaXMuaW5ncmVkaWVudHNfZGF0YVtpbmRleF0ub25PZmYgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sXG4gICAgYWZ0ZXJTZWxlY3RpbWFnZShkYXRhKSB7XG4gICAgICB0aGlzLmltYWdlX2ZlYXR1cmVkID0gZGF0YTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuIl0sImZpbGUiOiJhc3NldHMvSXRlbURldGFpbHNDaGVja2JveC42M2UwYWNiMS5qcyJ9
