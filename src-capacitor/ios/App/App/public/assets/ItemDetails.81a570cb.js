import { _ as _export_sfc, l as defineAsyncComponent, u as __vitePreload, m as APIinterface, n as resolveComponent, p as openBlock, q as createBlock, t as withCtx, f as createVNode, V as createElementBlock, U as createBaseVNode, Y as QBtn, Z as toDisplayString, aA as createCommentVNode, F as Fragment, X as renderList, a6 as createTextVNode, a8 as QCard, af as QRadio, ae as QAvatar, bD as QCheckbox, aY as QInput, a7 as normalizeClass, aB as QDialog } from "./index.61ed5618.js";
import { Q as QCircularProgress } from "./QCircularProgress.996c3e2f.js";
import { Q as QImg } from "./QImg.6c27044c.js";
import { Q as QChip } from "./QChip.f183a4f1.js";
import { Q as QBtnToggle } from "./QBtnToggle.6ffa195b.js";
import { Q as QBtnGroup } from "./QBtnGroup.abc2d1c7.js";
import { Q as QSelect } from "./QSelect.311187d6.js";
import { Q as QSpace } from "./QSpace.f164c087.js";
import { u as useCartStore } from "./CartStore.484ff101.js";
import { u as useFavoriteStore } from "./FavoriteStore.f91e6f21.js";
import { u as useDeliveryschedStore } from "./DeliverySched.4e9605bf.js";
import "./format.7f7370d3.js";
import "./QItemLabel.a9365c5b.js";
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
      image_featured: ""
    };
  },
  updated() {
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
                  color: this.items.ingredients_preselected ? "primary" : "mygrey",
                  text_color: this.items.ingredients_preselected ? "white" : "dark",
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
const _hoisted_2 = { class: "row items-start q-gutter-sm q-mb-sm" };
const _hoisted_3 = { class: "col-3" };
const _hoisted_4 = { class: "col" };
const _hoisted_5 = { class: "line-1 no-margin ellipsis-2-lines text-h6" };
const _hoisted_6 = ["innerHTML"];
const _hoisted_7 = { class: "text-grey ellipsis-2-lines text-grey text-body2 line-normal" };
const _hoisted_8 = ["innerHTML"];
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("span", { class: "text-weight-medium text-dark" }, "0.0", -1);
const _hoisted_10 = { class: "col-2 text-center row items-stretch" };
const _hoisted_11 = { class: "column items-center col-12" };
const _hoisted_12 = { class: "col q-mb-xs" };
const _hoisted_13 = { class: "col" };
const _hoisted_14 = { class: "q-mb-sm" };
const _hoisted_15 = { class: "font13 text-weight-bold no-margin line-normal q-pb-sm" };
const _hoisted_16 = {
  key: 0,
  class: "q-mb-sm"
};
const _hoisted_17 = { class: "font13 text-weight-bold no-margin line-normal" };
const _hoisted_18 = {
  key: 0,
  class: "text-red font12 text-weight-medium q-mb-sm"
};
const _hoisted_19 = {
  key: 1,
  class: "text-grey font12 text-weight-medium q-mb-sm"
};
const _hoisted_20 = {
  key: 1,
  class: "q-mb-sm"
};
const _hoisted_21 = { class: "font13 text-weight-bold no-margin line-normal" };
const _hoisted_22 = { class: "text-grey font12 text-weight-medium q-mb-sm" };
const _hoisted_23 = { class: "font13 text-weight-bold no-margin line-normal" };
const _hoisted_24 = { class: "text-grey font12 text-weight-medium q-mb-sm" };
const _hoisted_25 = {
  key: 3,
  class: "q-ml-sm text-red"
};
const _hoisted_26 = {
  key: 4,
  class: "q-ml-sm"
};
const _hoisted_27 = { class: "row q-gutter-none addon-carousel q-col-gutter-sm" };
const _hoisted_28 = { key: 1 };
const _hoisted_29 = { class: "font12 q-mb-none col ellipsis-2-lines line-normal q-pb-sm text-weight-medium" };
const _hoisted_30 = { class: "no-margin col font11 text-weight-medium" };
const _hoisted_31 = {
  key: 3,
  class: "col-auto w-75"
};
const _hoisted_32 = {
  key: 0,
  class: "row items-center justify-center"
};
const _hoisted_33 = { class: "col no-padding text-center" };
const _hoisted_34 = { class: "col no-padding text-center text-weight-medium" };
const _hoisted_35 = { class: "col no-padding text-center" };
const _hoisted_36 = { key: 1 };
const _hoisted_37 = { class: "text-weight-bold font13 q-mt-sm" };
const _hoisted_38 = { class: "text-weight-bold font13 q-mt-sm" };
const _hoisted_39 = { class: "col-5" };
const _hoisted_40 = { class: "col-7" };
const _hoisted_41 = { class: "row justify-between items-center fit" };
const _hoisted_42 = { class: "text-weight-medium font17" };
const _hoisted_43 = { class: "text-weight-bold font16" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FavsItem = resolveComponent("FavsItem");
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
          ])) : (openBlock(), createBlock(_component_DIV, {
            key: 1,
            class: "q-pl-md q-pr-md q-pb-sm q-pt-md"
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_2, [
                createBaseVNode("div", _hoisted_3, [
                  createVNode(QImg, {
                    src: this.image_featured ? this.image_featured : $data.items.url_image,
                    lazy: "",
                    fit: "cover",
                    style: { "height": "80px", "width": "80px" },
                    class: "radius8",
                    "spinner-color": "secondary",
                    "spinner-size": "sm"
                  }, null, 8, ["src"])
                ]),
                createBaseVNode("div", _hoisted_4, [
                  createBaseVNode("div", _hoisted_5, [
                    createBaseVNode("span", {
                      innerHTML: $data.items.item_name
                    }, null, 8, _hoisted_6)
                  ]),
                  createBaseVNode("div", _hoisted_7, [
                    createBaseVNode("span", {
                      innerHTML: $data.items.item_description
                    }, null, 8, _hoisted_8)
                  ]),
                  createVNode(QChip, {
                    size: "sm",
                    color: "secondary",
                    "text-color": "secondary",
                    icon: "star",
                    class: "no-padding transparent"
                  }, {
                    default: withCtx(() => [
                      _hoisted_9
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_10, [
                  createBaseVNode("div", _hoisted_11, [
                    createBaseVNode("div", _hoisted_12, [
                      createVNode(QBtn, {
                        onClick: _cache[0] || (_cache[0] = ($event) => $data.item_dialog = false),
                        color: "white",
                        square: "",
                        unelevated: "",
                        "text-color": "grey",
                        icon: "las la-times",
                        dense: "",
                        "no-caps": "",
                        size: "sm",
                        class: "border-grey radius8"
                      })
                    ]),
                    createBaseVNode("div", _hoisted_13, [
                      createVNode(_component_FavsItem, {
                        ref: "favs",
                        layout: 1,
                        item_token: $data.items.item_token,
                        cat_id: $data.items.cat_id,
                        active: $data.items.save_item,
                        onAfterSavefav: _cache[1] || (_cache[1] = ($event) => $options.afterSavefav($data.items))
                      }, null, 8, ["item_token", "cat_id", "active"])
                    ])
                  ])
                ])
              ]),
              createVNode(_component_ItemGallery, {
                item_gallery: $data.item_gallery,
                onAfterSelectimage: $options.afterSelectimage
              }, null, 8, ["item_gallery", "onAfterSelectimage"]),
              createBaseVNode("div", _hoisted_14, [
                createBaseVNode("div", _hoisted_15, toDisplayString(_ctx.$t("Size")), 1),
                createVNode(QBtnToggle, {
                  modelValue: $data.item_size_id,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.item_size_id = $event),
                  "toggle-color": "secondary",
                  color: "mygrey",
                  "text-color": "dark",
                  "no-caps": "",
                  "no-wrap": "",
                  unelevated: "",
                  options: $data.size_data,
                  class: "rounded-group2 small text-weight-bold line-1"
                }, null, 8, ["modelValue", "options"])
              ]),
              $data.cooking_data.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_16, [
                createBaseVNode("div", _hoisted_17, toDisplayString(_ctx.$t("Cooking Reference")), 1),
                $data.items.cooking_ref_required ? (openBlock(), createElementBlock("div", _hoisted_18, " (" + toDisplayString(_ctx.$t("Required")) + ") ", 1)) : (openBlock(), createElementBlock("div", _hoisted_19, toDisplayString(_ctx.$t("Optional")), 1)),
                createVNode(QBtnToggle, {
                  modelValue: $data.cooking_ref,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.cooking_ref = $event),
                  "toggle-color": "secondary",
                  color: "mygrey",
                  "text-color": "dark",
                  "no-caps": "",
                  "no-wrap": "",
                  unelevated: "",
                  options: $data.cooking_data,
                  class: "rounded-group2 small text-weight-bold line-1"
                }, null, 8, ["modelValue", "options"])
              ])) : createCommentVNode("", true),
              $data.ingredients_data.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_20, [
                createBaseVNode("div", _hoisted_21, toDisplayString(_ctx.$t("Ingredients")), 1),
                createBaseVNode("div", _hoisted_22, toDisplayString(_ctx.$t("Optional")), 1),
                createVNode(QBtnGroup, {
                  "no-caps": "",
                  "no-wrap": "",
                  unelevated: "",
                  class: "rounded-group2 text-weight-bold line-1"
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList($data.ingredients_data, (button, index) => {
                      return openBlock(), createBlock(QBtn, {
                        "no-caps": "",
                        key: index,
                        color: button.color,
                        "text-color": button.text_color,
                        label: button.label,
                        onClick: ($event) => $options.setActive(button, index)
                      }, null, 8, ["color", "text-color", "label", "onClick"]);
                    }), 128))
                  ]),
                  _: 1
                })
              ])) : createCommentVNode("", true),
              $data.addons[$data.item_size_id] ? (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList($data.addons[$data.item_size_id], (addons) => {
                return openBlock(), createBlock(_component_DIV, {
                  key: addons.subcat_id,
                  class: "q-mb-md"
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_23, toDisplayString(addons.subcategory_name), 1),
                    createBaseVNode("div", _hoisted_24, [
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
                      ], 64)) : createCommentVNode("", true),
                      addons.require_addon == 1 ? (openBlock(), createElementBlock("span", _hoisted_25, "(" + toDisplayString(_ctx.$t("Required")) + ")", 1)) : (openBlock(), createElementBlock("span", _hoisted_26, "(" + toDisplayString(_ctx.$t("Optional")) + ")", 1))
                    ]),
                    createBaseVNode("div", _hoisted_27, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(addons.sub_items, (sub_items) => {
                        return openBlock(), createElementBlock("div", {
                          key: sub_items.sub_item_id,
                          class: "col-lg-3 col-md-3 col-sm-6 col-xs-4 text-center"
                        }, [
                          createVNode(QCard, {
                            flat: "",
                            class: "column items-center full-height"
                          }, {
                            default: withCtx(() => [
                              addons.multi_option === "one" ? (openBlock(), createBlock(QRadio, {
                                key: 0,
                                modelValue: addons.sub_items_checked,
                                "onUpdate:modelValue": ($event) => addons.sub_items_checked = $event,
                                val: sub_items.sub_item_id,
                                label: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(QAvatar, {
                                    size: "50px",
                                    square: "",
                                    class: "col self-center"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(QImg, {
                                        fit: "contain",
                                        src: sub_items.hasimage ? sub_items.url_image : "default-addon.png",
                                        class: "no-margin",
                                        height: "50px",
                                        loading: "lazy",
                                        "placeholder-src": "placeholder.png",
                                        "spinner-color": "secondary",
                                        "spinner-size": "sm"
                                      }, null, 8, ["src"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["modelValue", "onUpdate:modelValue", "val"])) : addons.multi_option === "multiple" ? (openBlock(), createElementBlock("div", _hoisted_28, [
                                createVNode(QAvatar, {
                                  size: "50px",
                                  square: "",
                                  class: "col self-center"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(QImg, {
                                      fit: "contain",
                                      src: sub_items.hasimage ? sub_items.url_image : "default-addon.png",
                                      class: "no-margin",
                                      height: "50px",
                                      loading: "lazy",
                                      "placeholder-src": "placeholder.png",
                                      "spinner-color": "secondary",
                                      "spinner-size": "sm"
                                    }, null, 8, ["src"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ])) : addons.multi_option === "custom" ? (openBlock(), createBlock(QCheckbox, {
                                key: 2,
                                modelValue: sub_items.checked,
                                "onUpdate:modelValue": ($event) => sub_items.checked = $event,
                                val: sub_items.sub_item_id,
                                label: "",
                                disable: sub_items.disabled
                              }, {
                                default: withCtx(() => [
                                  createVNode(QAvatar, {
                                    size: "50px",
                                    square: "",
                                    class: "col self-center"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(QImg, {
                                        fit: "contain",
                                        src: sub_items.hasimage ? sub_items.url_image : "default-addon.png",
                                        class: "no-margin",
                                        height: "50px",
                                        loading: "lazy",
                                        "spinner-color": "secondary",
                                        "spinner-size": "sm",
                                        "placeholder-src": "placeholder.png"
                                      }, null, 8, ["src"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["modelValue", "onUpdate:modelValue", "val", "disable"])) : createCommentVNode("", true),
                              createBaseVNode("p", _hoisted_29, toDisplayString(sub_items.sub_item_name), 1),
                              createBaseVNode("p", _hoisted_30, toDisplayString(sub_items.pretty_price), 1),
                              addons.multi_option === "multiple" ? (openBlock(), createElementBlock("div", _hoisted_31, [
                                sub_items.checked == true ? (openBlock(), createElementBlock("div", _hoisted_32, [
                                  createBaseVNode("div", _hoisted_33, [
                                    createVNode(QBtn, {
                                      onClick: ($event) => sub_items.qty > 1 ? sub_items.qty-- : sub_items.checked = false,
                                      unelevated: "",
                                      dense: "",
                                      size: "11px",
                                      icon: "remove",
                                      color: "primary",
                                      class: "radius8"
                                    }, null, 8, ["onClick"])
                                  ]),
                                  createBaseVNode("div", _hoisted_34, toDisplayString(sub_items.qty), 1),
                                  createBaseVNode("div", _hoisted_35, [
                                    createVNode(QBtn, {
                                      onClick: ($event) => sub_items.qty++,
                                      unelevated: "",
                                      dense: "",
                                      size: "11px",
                                      color: "primary",
                                      icon: "add",
                                      class: "radius8",
                                      disable: sub_items.disabled
                                    }, null, 8, ["onClick", "disable"])
                                  ])
                                ])) : (openBlock(), createElementBlock("div", _hoisted_36, [
                                  createVNode(QBtn, {
                                    onClick: ($event) => sub_items.checked = true,
                                    unelevated: "",
                                    dense: "",
                                    size: "11px",
                                    icon: "add",
                                    color: "mygrey",
                                    "text-color": "dark",
                                    class: "radius8",
                                    disable: sub_items.disabled
                                  }, null, 8, ["onClick", "disable"])
                                ]))
                              ])) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024)
                        ]);
                      }), 128))
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128)) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_37, toDisplayString(_ctx.$t("Special Instructions")), 1),
              createVNode(QInput, {
                modelValue: $data.special_instructions,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.special_instructions = $event),
                autogrow: "",
                outlined: "",
                class: "q-pa-none"
              }, null, 8, ["modelValue"]),
              createBaseVNode("div", _hoisted_38, toDisplayString(_ctx.$t("If sold out")), 1),
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
                class: normalizeClass(["fixed-bottom q-pa-md border-grey-top row", {
                  "bg-dark": _ctx.$q.dark.mode,
                  "bg-white": !_ctx.$q.dark.mode
                }])
              }, [
                createBaseVNode("div", _hoisted_39, [
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
                createBaseVNode("div", _hoisted_40, [
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
                      createBaseVNode("div", _hoisted_41, [
                        createBaseVNode("div", _hoisted_42, [
                          $data.items.not_for_sale ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                            createTextVNode(toDisplayString(_ctx.$t("Not for sale")), 1)
                          ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                            createTextVNode(toDisplayString(_ctx.$t("Add to cart")), 1)
                          ], 64))
                        ]),
                        createBaseVNode("div", _hoisted_43, [
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
          }))
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["modelValue"]);
}
var ItemDetails = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "ItemDetails.vue"]]);
export { ItemDetails as default };
//# sourceMappingURL=data:application/json;base64,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QUFHLEtBQUssT0FBSTtBQUFBLHdCQUN6QixNQUFLO0FBQUEsd0JBQ0wsTUFBSztBQUFBLHdCQUNMO0FBQUEsd0JBQ0EsT0FBTTtBQUFBOzs7OztnQkFJWkUsZ0JBOEJNLE9BOUJOLGFBOEJNO0FBQUEsa0JBN0JKRixZQTRCUTtBQUFBLG9CQTNCTjtBQUFBLG9CQUNBLE9BQU07QUFBQSxvQkFDTixjQUFXO0FBQUEsb0JBQ1gsT0FBTTtBQUFBLG9CQUNOO0FBQUEsb0JBQ0MsU0FBTyxTQUFpQjtBQUFBLG9CQUN4QixTQUFTLE1BQWE7QUFBQSxvQkFDdEIsU0FBUyxNQUFXO0FBQUEsb0JBQ3JCLE1BQUs7QUFBQSxvQkFDTDtBQUFBO3FDQUVBLE1BZU07QUFBQSxzQkFmTkUsZ0JBZU0sT0FmTixhQWVNO0FBQUEsd0JBZEpBLGdCQU9NLE9BUE4sYUFPTTtBQUFBLDBCQU5ZLFlBQU0sNkJBQXRCRSxtQkFFV0M7QUFBQSw0REFETixLQUFFO0FBQUEsa0RBRVBELG1CQUVXQztBQUFBLDREQUROLEtBQUU7QUFBQTs7d0JBR1RILGdCQUtNLE9BTE4sYUFLTTtBQUFBLDBCQUpKRixZQUdnQjtBQUFBLDRCQUZiLFFBQVEsTUFBVTtBQUFBLDRCQUNsQixjQUFjLE9BQVk7QUFBQSIsIm5hbWVzIjpbImRhdGEiLCJfY3JlYXRlQmxvY2siLCJfY3JlYXRlVk5vZGUiLCJfb3BlbkJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl90b0Rpc3BsYXlTdHJpbmciLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX0ZyYWdtZW50IiwiX2NyZWF0ZVRleHRWTm9kZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0l0ZW1EZXRhaWxzLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLWRpYWxvZyB2LW1vZGVsPVwiaXRlbV9kaWFsb2dcIiBwb3NpdGlvbj1cImJvdHRvbVwiPlxuICAgIDxxLWNhcmQgY2xhc3M9XCJyb3VuZGVkLWJvcmRlcnMtdG9wXCI+XG4gICAgICA8dGVtcGxhdGUgdi1pZj1cImxvYWRpbmdcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIGZsZXggZmxleC1jZW50ZXJcIiBzdHlsZT1cImhlaWdodDogMjAwcHhcIj5cbiAgICAgICAgICA8cS1jaXJjdWxhci1wcm9ncmVzc1xuICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZVxuICAgICAgICAgICAgcm91bmRlZFxuICAgICAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIGNsYXNzPVwicS1tYS1tZFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPERJViB2LWVsc2UgY2xhc3M9XCJxLXBsLW1kIHEtcHItbWQgcS1wYi1zbSBxLXB0LW1kXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgaXRlbXMtc3RhcnQgcS1ndXR0ZXItc20gcS1tYi1zbVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtM1wiPlxuICAgICAgICAgICAgPHEtaW1nXG4gICAgICAgICAgICAgIDpzcmM9XCJ0aGlzLmltYWdlX2ZlYXR1cmVkID8gdGhpcy5pbWFnZV9mZWF0dXJlZCA6IGl0ZW1zLnVybF9pbWFnZVwiXG4gICAgICAgICAgICAgIGxhenlcbiAgICAgICAgICAgICAgZml0PVwiY292ZXJcIlxuICAgICAgICAgICAgICBzdHlsZT1cImhlaWdodDogODBweDsgd2lkdGg6IDgwcHhcIlxuICAgICAgICAgICAgICBjbGFzcz1cInJhZGl1czhcIlxuICAgICAgICAgICAgICBzcGlubmVyLWNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgc3Bpbm5lci1zaXplPVwic21cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGluZS0xIG5vLW1hcmdpbiBlbGxpcHNpcy0yLWxpbmVzIHRleHQtaDZcIj5cbiAgICAgICAgICAgICAgPHNwYW4gdi1odG1sPVwiaXRlbXMuaXRlbV9uYW1lXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1ncmV5IGVsbGlwc2lzLTItbGluZXMgdGV4dC1ncmV5IHRleHQtYm9keTIgbGluZS1ub3JtYWxcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhbiB2LWh0bWw9XCJpdGVtcy5pdGVtX2Rlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cS1jaGlwXG4gICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgdGV4dC1jb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgIGljb249XCJzdGFyXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJuby1wYWRkaW5nIHRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXdlaWdodC1tZWRpdW0gdGV4dC1kYXJrXCI+MC4wPC9zcGFuPlxuICAgICAgICAgICAgPC9xLWNoaXA+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0yIHRleHQtY2VudGVyIHJvdyBpdGVtcy1zdHJldGNoXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGl0ZW1zLWNlbnRlciBjb2wtMTJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBxLW1iLXhzXCI+XG4gICAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgICBAY2xpY2s9XCJpdGVtX2RpYWxvZyA9ICF0cnVlXCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgc3F1YXJlXG4gICAgICAgICAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgICAgICAgICB0ZXh0LWNvbG9yPVwiZ3JleVwiXG4gICAgICAgICAgICAgICAgICBpY29uPVwibGFzIGxhLXRpbWVzXCJcbiAgICAgICAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJib3JkZXItZ3JleSByYWRpdXM4XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxGYXZzSXRlbVxuICAgICAgICAgICAgICAgICAgcmVmPVwiZmF2c1wiXG4gICAgICAgICAgICAgICAgICA6bGF5b3V0PVwiMVwiXG4gICAgICAgICAgICAgICAgICA6aXRlbV90b2tlbj1cIml0ZW1zLml0ZW1fdG9rZW5cIlxuICAgICAgICAgICAgICAgICAgOmNhdF9pZD1cIml0ZW1zLmNhdF9pZFwiXG4gICAgICAgICAgICAgICAgICA6YWN0aXZlPVwiaXRlbXMuc2F2ZV9pdGVtXCJcbiAgICAgICAgICAgICAgICAgIEBhZnRlci1zYXZlZmF2PVwiYWZ0ZXJTYXZlZmF2KGl0ZW1zKVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPEl0ZW1HYWxsZXJ5XG4gICAgICAgICAgOml0ZW1fZ2FsbGVyeT1cIml0ZW1fZ2FsbGVyeVwiXG4gICAgICAgICAgQGFmdGVyLXNlbGVjdGltYWdlPVwiYWZ0ZXJTZWxlY3RpbWFnZVwiXG4gICAgICAgID48L0l0ZW1HYWxsZXJ5PlxuXG4gICAgICAgIDwhLS0gU0laRSAgLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJxLW1iLXNtXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnQxMyB0ZXh0LXdlaWdodC1ib2xkIG5vLW1hcmdpbiBsaW5lLW5vcm1hbCBxLXBiLXNtXCI+XG4gICAgICAgICAgICB7eyAkdChcIlNpemVcIikgfX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cS1idG4tdG9nZ2xlXG4gICAgICAgICAgICB2LW1vZGVsPVwiaXRlbV9zaXplX2lkXCJcbiAgICAgICAgICAgIHRvZ2dsZS1jb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBjb2xvcj1cIm15Z3JleVwiXG4gICAgICAgICAgICB0ZXh0LWNvbG9yPVwiZGFya1wiXG4gICAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgICBuby13cmFwXG4gICAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgICA6b3B0aW9ucz1cInNpemVfZGF0YVwiXG4gICAgICAgICAgICBjbGFzcz1cInJvdW5kZWQtZ3JvdXAyIHNtYWxsIHRleHQtd2VpZ2h0LWJvbGQgbGluZS0xXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPCEtLSBTSVpFICAtLT5cblxuICAgICAgICA8IS0tIENvb2tpbmcgUmVmZXJlbmNlICAtLT5cbiAgICAgICAgPGRpdiB2LWlmPVwiY29va2luZ19kYXRhLmxlbmd0aCA+IDBcIiBjbGFzcz1cInEtbWItc21cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udDEzIHRleHQtd2VpZ2h0LWJvbGQgbm8tbWFyZ2luIGxpbmUtbm9ybWFsXCI+XG4gICAgICAgICAgICB7eyAkdChcIkNvb2tpbmcgUmVmZXJlbmNlXCIpIH19XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgdi1pZj1cIml0ZW1zLmNvb2tpbmdfcmVmX3JlcXVpcmVkXCJcbiAgICAgICAgICAgIGNsYXNzPVwidGV4dC1yZWQgZm9udDEyIHRleHQtd2VpZ2h0LW1lZGl1bSBxLW1iLXNtXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICAoe3sgJHQoXCJSZXF1aXJlZFwiKSB9fSlcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cInRleHQtZ3JleSBmb250MTIgdGV4dC13ZWlnaHQtbWVkaXVtIHEtbWItc21cIj5cbiAgICAgICAgICAgIHt7ICR0KFwiT3B0aW9uYWxcIikgfX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cS1idG4tdG9nZ2xlXG4gICAgICAgICAgICB2LW1vZGVsPVwiY29va2luZ19yZWZcIlxuICAgICAgICAgICAgdG9nZ2xlLWNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIGNvbG9yPVwibXlncmV5XCJcbiAgICAgICAgICAgIHRleHQtY29sb3I9XCJkYXJrXCJcbiAgICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICAgIG5vLXdyYXBcbiAgICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICAgIDpvcHRpb25zPVwiY29va2luZ19kYXRhXCJcbiAgICAgICAgICAgIGNsYXNzPVwicm91bmRlZC1ncm91cDIgc21hbGwgdGV4dC13ZWlnaHQtYm9sZCBsaW5lLTFcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8IS0tIENvb2tpbmcgUmVmZXJlbmNlICAtLT5cblxuICAgICAgICA8IS0tIEluZ3JlZGllbnRzICAtLT5cbiAgICAgICAgPGRpdiB2LWlmPVwiaW5ncmVkaWVudHNfZGF0YS5sZW5ndGggPiAwXCIgY2xhc3M9XCJxLW1iLXNtXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnQxMyB0ZXh0LXdlaWdodC1ib2xkIG5vLW1hcmdpbiBsaW5lLW5vcm1hbFwiPlxuICAgICAgICAgICAge3sgJHQoXCJJbmdyZWRpZW50c1wiKSB9fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWdyZXkgZm9udDEyIHRleHQtd2VpZ2h0LW1lZGl1bSBxLW1iLXNtXCI+XG4gICAgICAgICAgICB7eyAkdChcIk9wdGlvbmFsXCIpIH19XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8cS1idG4tZ3JvdXBcbiAgICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICAgIG5vLXdyYXBcbiAgICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICAgIGNsYXNzPVwicm91bmRlZC1ncm91cDIgdGV4dC13ZWlnaHQtYm9sZCBsaW5lLTFcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgICAgIHYtZm9yPVwiKGJ1dHRvbiwgaW5kZXgpIGluIGluZ3JlZGllbnRzX2RhdGFcIlxuICAgICAgICAgICAgICA6a2V5PVwiaW5kZXhcIlxuICAgICAgICAgICAgICA6Y29sb3I9XCJidXR0b24uY29sb3JcIlxuICAgICAgICAgICAgICA6dGV4dC1jb2xvcj1cImJ1dHRvbi50ZXh0X2NvbG9yXCJcbiAgICAgICAgICAgICAgOmxhYmVsPVwiYnV0dG9uLmxhYmVsXCJcbiAgICAgICAgICAgICAgQGNsaWNrPVwic2V0QWN0aXZlKGJ1dHRvbiwgaW5kZXgpXCJcbiAgICAgICAgICAgID48L3EtYnRuPlxuICAgICAgICAgIDwvcS1idG4tZ3JvdXA+XG4gICAgICAgICAgPCEtLSA8cS1idG4tdG9nZ2xlXG4gICAgICAgICAgICB2LW1vZGVsPVwiaW5ncmVkaWVudHNcIlxuICAgICAgICAgICAgdG9nZ2xlLWNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIGNvbG9yPVwibXlncmV5XCJcbiAgICAgICAgICAgIHRleHQtY29sb3I9XCJkYXJrXCJcbiAgICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICAgIG5vLXdyYXBcbiAgICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICAgIDpvcHRpb25zPVwiaW5ncmVkaWVudHNfZGF0YVwiXG4gICAgICAgICAgICBjbGFzcz1cInJvdW5kZWQtZ3JvdXAyIHNtYWxsIHRleHQtd2VpZ2h0LWJvbGQgbGluZS0xXCJcbiAgICAgICAgICAvPiAtLT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwhLS0gSW5ncmVkaWVudHMgIC0tPlxuXG4gICAgICAgIDwhLS0gQURET05TIC0tPlxuICAgICAgICA8IS0tIDxwcmU+e3sgYWRkb25zIH19PC9wcmU+IC0tPlxuICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImFkZG9uc1tpdGVtX3NpemVfaWRdXCI+XG4gICAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgICB2LWZvcj1cImFkZG9ucyBpbiBhZGRvbnNbaXRlbV9zaXplX2lkXVwiXG4gICAgICAgICAgICA6a2V5PVwiYWRkb25zLnN1YmNhdF9pZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPERJViBjbGFzcz1cInEtbWItbWRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnQxMyB0ZXh0LXdlaWdodC1ib2xkIG5vLW1hcmdpbiBsaW5lLW5vcm1hbFwiPlxuICAgICAgICAgICAgICAgIHt7IGFkZG9ucy5zdWJjYXRlZ29yeV9uYW1lIH19XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1ncmV5IGZvbnQxMiB0ZXh0LXdlaWdodC1tZWRpdW0gcS1tYi1zbVwiPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiYWRkb25zLm11bHRpX29wdGlvbiA9PT0gJ29uZSdcIj5cbiAgICAgICAgICAgICAgICAgIHt7ICR0KFwiU2VsZWN0IDFcIikgfX1cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2UtaWY9XCJhZGRvbnMubXVsdGlfb3B0aW9uID09PSAnbXVsdGlwbGUnXCI+XG4gICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImFkZG9ucy5tdWx0aV9vcHRpb25fbWluID4gMFwiPlxuICAgICAgICAgICAgICAgICAgICB7e1xuICAgICAgICAgICAgICAgICAgICAgICR0KFwiU2VsZWN0IG1pbmltdW0ge21pbn0gdG8gbWF4aW11bSB7bWF4fVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW46IGFkZG9ucy5tdWx0aV9vcHRpb25fbWluLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiBhZGRvbnMubXVsdGlfb3B0aW9uX3ZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgICAge3sgJHQoXCJDaG9vc2UgdXAgdG9cIikgfX0ge3sgYWRkb25zLm11bHRpX29wdGlvbl92YWx1ZSB9fVxuICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2UtaWY9XCJhZGRvbnMubXVsdGlfb3B0aW9uID09PSAnY3VzdG9tJ1wiPlxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJhZGRvbnMubXVsdGlfb3B0aW9uX21pbiA+IDBcIj5cbiAgICAgICAgICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgICAgICAgICAkdChcIlNlbGVjdCBtaW5pbXVtIHttaW59IHRvIG1heGltdW0ge21heH1cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluOiBhZGRvbnMubXVsdGlfb3B0aW9uX21pbixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heDogYWRkb25zLm11bHRpX29wdGlvbl92YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICAgICAgICAgICAgICAgIHt7ICR0KFwiQ2hvb3NlIHVwIHRvXCIpIH19IHt7IGFkZG9ucy5tdWx0aV9vcHRpb25fdmFsdWUgfX1cbiAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImFkZG9ucy5yZXF1aXJlX2FkZG9uID09IDFcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicS1tbC1zbSB0ZXh0LXJlZFwiPih7eyAkdChcIlJlcXVpcmVkXCIpIH19KTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInEtbWwtc21cIj4oe3sgJHQoXCJPcHRpb25hbFwiKSB9fSk8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPCEtLSBhZGRvbnMgLS0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcS1ndXR0ZXItbm9uZSBhZGRvbi1jYXJvdXNlbCBxLWNvbC1ndXR0ZXItc21cIj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICB2LWZvcj1cInN1Yl9pdGVtcyBpbiBhZGRvbnMuc3ViX2l0ZW1zXCJcbiAgICAgICAgICAgICAgICAgIDprZXk9XCJzdWJfaXRlbXMuc3ViX2l0ZW1faWRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjb2wtbGctMyBjb2wtbWQtMyBjb2wtc20tNiBjb2wteHMtNCB0ZXh0LWNlbnRlclwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHEtY2FyZCBmbGF0IGNsYXNzPVwiY29sdW1uIGl0ZW1zLWNlbnRlciBmdWxsLWhlaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICA8IS0tID0+e3sgYWRkb25zLm11bHRpX29wdGlvbiB9fSAtLT5cbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJhZGRvbnMubXVsdGlfb3B0aW9uID09PSAnb25lJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLXJhZGlvXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiYWRkb25zLnN1Yl9pdGVtc19jaGVja2VkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp2YWw9XCJzdWJfaXRlbXMuc3ViX2l0ZW1faWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxxLWF2YXRhciBzaXplPVwiNTBweFwiIHNxdWFyZSBjbGFzcz1cImNvbCBzZWxmLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXQ9XCJjb250YWluXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3JjPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJfaXRlbXMuaGFzaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzdWJfaXRlbXMudXJsX2ltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2RlZmF1bHQtYWRkb24ucG5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJuby1tYXJnaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjUwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlci1zcmM9XCJwbGFjZWhvbGRlci5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwaW5uZXItY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwaW5uZXItc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1hdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgICAgPC9xLXJhZGlvPlxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2UtaWY9XCJhZGRvbnMubXVsdGlfb3B0aW9uID09PSAnbXVsdGlwbGUnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxxLWF2YXRhciBzaXplPVwiNTBweFwiIHNxdWFyZSBjbGFzcz1cImNvbCBzZWxmLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXQ9XCJjb250YWluXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3JjPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJfaXRlbXMuaGFzaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzdWJfaXRlbXMudXJsX2ltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2RlZmF1bHQtYWRkb24ucG5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJuby1tYXJnaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjUwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlci1zcmM9XCJwbGFjZWhvbGRlci5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwaW5uZXItY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwaW5uZXItc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1hdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZS1pZj1cImFkZG9ucy5tdWx0aV9vcHRpb24gPT09ICdjdXN0b20nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtY2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJzdWJfaXRlbXMuY2hlY2tlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6dmFsPVwic3ViX2l0ZW1zLnN1Yl9pdGVtX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlPVwic3ViX2l0ZW1zLmRpc2FibGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cS1hdmF0YXIgc2l6ZT1cIjUwcHhcIiBzcXVhcmUgY2xhc3M9XCJjb2wgc2VsZi1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZml0PVwiY29udGFpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNyYz1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViX2l0ZW1zLmhhc2ltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gc3ViX2l0ZW1zLnVybF9pbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdkZWZhdWx0LWFkZG9uLnBuZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibm8tbWFyZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI1MHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Bpbm5lci1jb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Bpbm5lci1zaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyLXNyYz1cInBsYWNlaG9sZGVyLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3EtYXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICAgIDwvcS1jaGVja2JveD5cbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9udDEyIHEtbWItbm9uZSBjb2wgZWxsaXBzaXMtMi1saW5lcyBsaW5lLW5vcm1hbCBxLXBiLXNtIHRleHQtd2VpZ2h0LW1lZGl1bVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7eyBzdWJfaXRlbXMuc3ViX2l0ZW1fbmFtZSB9fVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibm8tbWFyZ2luIGNvbCBmb250MTEgdGV4dC13ZWlnaHQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3sgc3ViX2l0ZW1zLnByZXR0eV9wcmljZSB9fVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBtdWx0aXBsZSBidXR0b24gLS0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiYWRkb25zLm11bHRpX29wdGlvbiA9PT0gJ211bHRpcGxlJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjb2wtYXV0byB3LTc1XCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJzdWJfaXRlbXMuY2hlY2tlZCA9PSB0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBuby1wYWRkaW5nIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViX2l0ZW1zLnF0eSA+IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzdWJfaXRlbXMucXR5LS1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoc3ViX2l0ZW1zLmNoZWNrZWQgPSBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCIxMXB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwicmVtb3ZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicmFkaXVzOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjb2wgbm8tcGFkZGluZyB0ZXh0LWNlbnRlciB0ZXh0LXdlaWdodC1tZWRpdW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBzdWJfaXRlbXMucXR5IH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgbm8tcGFkZGluZyB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJzdWJfaXRlbXMucXR5KytcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCIxMXB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJhZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicmFkaXVzOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRpc2FibGU9XCJzdWJfaXRlbXMuZGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWVsc2U+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwic3ViX2l0ZW1zLmNoZWNrZWQgPSB0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiMTFweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJhZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIm15Z3JleVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtY29sb3I9XCJkYXJrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJyYWRpdXM4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOmRpc2FibGU9XCJzdWJfaXRlbXMuZGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gbXVsdGlwbGUgYnV0dG9uIC0tPlxuICAgICAgICAgICAgICAgICAgPC9xLWNhcmQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPCEtLSBjb2wgLS0+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8IS0tIHJvdyAtLT5cblxuICAgICAgICAgICAgICA8IS0tIGVuZCBhZGRvbnMgLS0+XG4gICAgICAgICAgICA8L0RJVj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8IS0tIEFERE9OUyAtLT5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC13ZWlnaHQtYm9sZCBmb250MTMgcS1tdC1zbVwiPlxuICAgICAgICAgIHt7ICR0KFwiU3BlY2lhbCBJbnN0cnVjdGlvbnNcIikgfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgdi1tb2RlbD1cInNwZWNpYWxfaW5zdHJ1Y3Rpb25zXCJcbiAgICAgICAgICBhdXRvZ3Jvd1xuICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgY2xhc3M9XCJxLXBhLW5vbmVcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXdlaWdodC1ib2xkIGZvbnQxMyBxLW10LXNtXCI+XG4gICAgICAgICAge3sgJHQoXCJJZiBzb2xkIG91dFwiKSB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHEtc2VsZWN0XG4gICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICBkZW5zZVxuICAgICAgICAgIHYtbW9kZWw9XCJpZl9zb2xkX291dFwiXG4gICAgICAgICAgOm9wdGlvbnM9XCJzb2xkX291dF9vcHRpb25zXCJcbiAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgY2xhc3M9XCJxLW1iLW1kXCJcbiAgICAgICAgICB0cmFuc2l0aW9uLXNob3c9XCJzY2FsZVwiXG4gICAgICAgICAgdHJhbnNpdGlvbi1oaWRlPVwic2NhbGVcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxxLXNwYWNlIGNsYXNzPVwicS1wYS14bFwiPjwvcS1zcGFjZT5cblxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJmaXhlZC1ib3R0b20gcS1wYS1tZCBib3JkZXItZ3JleS10b3Agcm93XCJcbiAgICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAnYmctZGFyayc6ICRxLmRhcmsubW9kZSxcbiAgICAgICAgICAgICdiZy13aGl0ZSc6ICEkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgfVwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTVcIj5cbiAgICAgICAgICAgIDxxLWJ0bi1ncm91cCB1bmVsZXZhdGVkIGNsYXNzPVwicmFkaXVzOFwiPlxuICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJpdGVtX3F0eSA+IDEgPyBpdGVtX3F0eS0tIDogMVwiXG4gICAgICAgICAgICAgICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXk2MDAnIDogJ215Z3JleSdcIlxuICAgICAgICAgICAgICAgIDp0ZXh0LWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXkzMDAnIDogJ2dyZXknXCJcbiAgICAgICAgICAgICAgICBpY29uPVwib19yZW1vdmVcIlxuICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgICAgICBjbGFzcz1cInEtcGEtc21cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICA6Y29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTYwMCcgOiAnbXlncmV5J1wiXG4gICAgICAgICAgICAgICAgOnRleHQtY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTMwMCcgOiAnZGFyaydcIlxuICAgICAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICAgICAgOmxhYmVsPVwiaXRlbV9xdHlcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwibm8tcG9pbnRlci1ldmVudHMgdGV4dC13ZWlnaHQtbWVkaXVtXCJcbiAgICAgICAgICAgICAgICBzdHlsZT1cIm1pbi13aWR0aDogMzBweFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICAgIEBjbGljaz1cIml0ZW1fcXR5KytcIlxuICAgICAgICAgICAgICAgIDpjb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5NjAwJyA6ICdteWdyZXknXCJcbiAgICAgICAgICAgICAgICA6dGV4dC1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICdncmV5J1wiXG4gICAgICAgICAgICAgICAgaWNvbj1cIm9fYWRkXCJcbiAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJxLXBhLXNtXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvcS1idG4tZ3JvdXA+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC03XCI+XG4gICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICB0ZXh0LWNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICBjbGFzcz1cImZpdCByYWRpdXM4IHEtcGEtc21cIlxuICAgICAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgICAgIEBjbGljaz1cIkNoZWNrYWRkQ2FydEl0ZW1zXCJcbiAgICAgICAgICAgICAgOmRpc2FibGU9XCJkaXNhYmxlZF9jYXJ0XCJcbiAgICAgICAgICAgICAgOmxvYWRpbmc9XCJsb2FkaW5nX2FkZFwiXG4gICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBmaXRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC13ZWlnaHQtbWVkaXVtIGZvbnQxN1wiPlxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJpdGVtcy5ub3RfZm9yX3NhbGVcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgJHQoXCJOb3QgZm9yIHNhbGVcIikgfX1cbiAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICAgICAgICAgICAgICB7eyAkdChcIkFkZCB0byBjYXJ0XCIpIH19XG4gICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXdlaWdodC1ib2xkIGZvbnQxNlwiPlxuICAgICAgICAgICAgICAgICAgPE51bWJlckZvcm1hdFxuICAgICAgICAgICAgICAgICAgICA6YW1vdW50PVwiaXRlbV90b3RhbFwiXG4gICAgICAgICAgICAgICAgICAgIDptb25leV9jb25maWc9XCJtb25leV9jb25maWdcIlxuICAgICAgICAgICAgICAgICAgPjwvTnVtYmVyRm9ybWF0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvcS1idG4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9ESVY+XG4gICAgPC9xLWNhcmQ+XG4gIDwvcS1kaWFsb2c+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgZGVmaW5lQXN5bmNDb21wb25lbnQgfSBmcm9tIFwidnVlXCI7XG5pbXBvcnQgQVBJaW50ZXJmYWNlIGZyb20gXCJzcmMvYXBpL0FQSWludGVyZmFjZVwiO1xuLy9pbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwidi1tb25leTNcIjtcbmltcG9ydCB7IHVzZUNhcnRTdG9yZSB9IGZyb20gXCJzdG9yZXMvQ2FydFN0b3JlXCI7XG5pbXBvcnQgeyB1c2VGYXZvcml0ZVN0b3JlIH0gZnJvbSBcInN0b3Jlcy9GYXZvcml0ZVN0b3JlXCI7XG5pbXBvcnQgeyB1c2VEZWxpdmVyeXNjaGVkU3RvcmUgfSBmcm9tIFwic3RvcmVzL0RlbGl2ZXJ5U2NoZWRcIjtcblxuY29uc3QgZW1wdHkgPSBmdW5jdGlvbiAoZGF0YSkge1xuICBpZiAoXG4gICAgdHlwZW9mIGRhdGEgPT09IFwidW5kZWZpbmVkXCIgfHxcbiAgICBkYXRhID09PSBudWxsIHx8XG4gICAgZGF0YSA9PT0gXCJcIiB8fFxuICAgIGRhdGEgPT09IFwibnVsbFwiIHx8XG4gICAgZGF0YSA9PT0gXCJ1bmRlZmluZWRcIlxuICApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiSXRlbURldGFpbHNcIixcbiAgcHJvcHM6IFtcInNsdWdcIiwgXCJtb25leV9jb25maWdcIiwgXCJjdXJyZW5jeV9jb2RlXCJdLFxuICBjb21wb25lbnRzOiB7XG4gICAgRmF2c0l0ZW06IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+IGltcG9ydChcImNvbXBvbmVudHMvRmF2c0l0ZW0udnVlXCIpKSxcbiAgICBOdW1iZXJGb3JtYXQ6IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+XG4gICAgICBpbXBvcnQoXCJjb21wb25lbnRzL051bWJlckZvcm1hdC52dWVcIilcbiAgICApLFxuICAgIEl0ZW1HYWxsZXJ5OiBkZWZpbmVBc3luY0NvbXBvbmVudCgoKSA9PlxuICAgICAgaW1wb3J0KFwiY29tcG9uZW50cy9JdGVtR2FsbGVyeS52dWVcIilcbiAgICApLFxuICB9LFxuICBzZXR1cCgpIHtcbiAgICBjb25zdCBDYXJ0U3RvcmUgPSB1c2VDYXJ0U3RvcmUoKTtcbiAgICBjb25zdCBGYXZvcml0ZVN0b3JlID0gdXNlRmF2b3JpdGVTdG9yZSgpO1xuICAgIGNvbnN0IHNjaGVkU3RvcmUgPSB1c2VEZWxpdmVyeXNjaGVkU3RvcmUoKTtcbiAgICByZXR1cm4geyBDYXJ0U3RvcmUsIEZhdm9yaXRlU3RvcmUsIHNjaGVkU3RvcmUgfTtcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXRlbV9kaWFsb2c6IGZhbHNlLFxuICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgIGxvYWRpbmdfYWRkOiBmYWxzZSxcbiAgICAgIGl0ZW1fcXR5OiAxLFxuICAgICAgaXRlbXM6IFtdLFxuICAgICAgaXRlbV9zaXplX2lkOiAwLFxuICAgICAgc2l6ZV9kYXRhOiBbXSxcbiAgICAgIHNpemVfZGF0YXM6IFtdLFxuICAgICAgY29va2luZ19yZWY6IDAsXG4gICAgICBjb29raW5nX2RhdGE6IFtdLFxuICAgICAgaW5ncmVkaWVudHM6IFtdLFxuICAgICAgaW5ncmVkaWVudHNfZGF0YTogW10sXG4gICAgICBhZGRvbnM6IHt9LFxuICAgICAgc3BlY2lhbF9pbnN0cnVjdGlvbnM6IFwiXCIsXG4gICAgICB0cmFuc2FjdGlvbl90eXBlOiBcIlwiLFxuICAgICAgaWZfc29sZF9vdXQ6IFwiXCIsXG4gICAgICBzb2xkX291dF9vcHRpb25zOiBbXSxcbiAgICAgIGl0ZW1fdG90YWw6IDAsXG4gICAgICBkaXNhYmxlZF9jYXJ0OiB0cnVlLFxuICAgICAgc2xpZGVfaXRlbXM6IDAsXG4gICAgICBmYXZvcml0ZXM6IFtdLFxuICAgICAgLy8gY29uZmlnOiBbXSxcbiAgICAgIHJlc3RhdXJhbnRfbmFtZTogXCJcIixcbiAgICAgIG1lcmNoYW50X2lkOiBcIlwiLFxuICAgICAgZGF0YV9jYXRfaWQ6IFwiXCIsXG4gICAgICBkYXRhX2l0ZW1fdG9rZW46IFwiXCIsXG4gICAgICBtZXJjaGFudFNsdWc6IFwiXCIsXG4gICAgICBpdGVtX2dhbGxlcnk6IFtdLFxuICAgICAgaW1hZ2VfZmVhdHVyZWQ6IFwiXCIsXG4gICAgfTtcbiAgfSxcbiAgdXBkYXRlZCgpIHtcbiAgICAvLyB0aGlzLnJlc2V0RGF0YSgpXG4gICAgLy8gdGhpcy5tZXJjaGFudFNsdWcgPSB0aGlzLnNsdWdcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLm1lcmNoYW50U2x1ZyA9IHRoaXMuc2x1ZztcbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBhZGRvbnM6IHtcbiAgICAgIGhhbmRsZXIobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHRoaXMuSXRlbVN1bW1hcnkoKTtcbiAgICAgIH0sXG4gICAgICBkZWVwOiB0cnVlLFxuICAgIH0sXG4gICAgaXRlbV9zaXplX2lkKCkge1xuICAgICAgdGhpcy5JdGVtU3VtbWFyeSgpO1xuICAgIH0sXG4gICAgY29va2luZ19yZWYoKSB7XG4gICAgICB0aGlzLkl0ZW1TdW1tYXJ5KCk7XG4gICAgfSxcbiAgICBpbmdyZWRpZW50cygpIHtcbiAgICAgIHRoaXMuSXRlbVN1bW1hcnkoKTtcbiAgICB9LFxuICAgIGl0ZW1fcXR5KCkge1xuICAgICAgdGhpcy5JdGVtU3VtbWFyeSgpO1xuICAgIH0sXG4gICAgaW5ncmVkaWVudHNfZGF0YToge1xuICAgICAgaGFuZGxlcihuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgdGhpcy5pbmdyZWRpZW50cyA9IFtdO1xuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5pbmdyZWRpZW50c19kYXRhKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5pbmdyZWRpZW50c19kYXRhKS5mb3JFYWNoKChba2V5LCBpdGVtc10pID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtcy5vbk9mZikge1xuICAgICAgICAgICAgICB0aGlzLmluZ3JlZGllbnRzLnB1c2goaXRlbXMudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGVlcDogdHJ1ZSxcbiAgICB9LFxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgaXNDbGlja2FibGUoZGF0YSkge1xuICAgICAgaWYgKGRhdGEubXVsdGlfb3B0aW9uID09PSBcIm11bHRpcGxlXCIpIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gXCJsYWJlbFwiO1xuICAgIH0sXG4gICAgaXNSaXBwbGUoZGF0YSkge1xuICAgICAgaWYgKGRhdGEubXVsdGlfb3B0aW9uID09PSBcIm11bHRpcGxlXCIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICByZXNldERhdGEoKSB7XG4gICAgICB0aGlzLml0ZW1fcXR5ID0gMTtcbiAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICAgIHRoaXMuaXRlbV9zaXplX2lkID0gMDtcbiAgICAgIHRoaXMuc2l6ZV9kYXRhID0gW107XG4gICAgICB0aGlzLnNpemVfZGF0YXMgPSBbXTtcbiAgICAgIHRoaXMuY29va2luZ19yZWYgPSAwO1xuICAgICAgdGhpcy5jb29raW5nX2RhdGEgPSBbXTtcbiAgICAgIHRoaXMuaW5ncmVkaWVudHMgPSBbXTtcbiAgICAgIHRoaXMuaW5ncmVkaWVudHNfZGF0YSA9IFtdO1xuICAgICAgdGhpcy5hZGRvbnMgPSB7fTtcbiAgICAgIHRoaXMuc3BlY2lhbF9pbnN0cnVjdGlvbnMgPSBcIlwiO1xuICAgICAgdGhpcy50cmFuc2FjdGlvbl90eXBlID0gXCJcIjtcbiAgICAgIHRoaXMuaWZfc29sZF9vdXQgPSBcIlwiO1xuICAgICAgdGhpcy5zb2xkX291dF9vcHRpb25zID0gW107XG4gICAgICB0aGlzLml0ZW1fdG90YWwgPSAwO1xuICAgICAgdGhpcy5kaXNhYmxlZF9jYXJ0ID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2xpZGVfaXRlbXMgPSAwO1xuICAgICAgdGhpcy5kYXRhX2NhdF9pZCA9IFwiXCI7XG4gICAgICB0aGlzLmRhdGFfaXRlbV90b2tlbiA9IFwiXCI7XG4gICAgICB0aGlzLmltYWdlX2ZlYXR1cmVkID0gXCJcIjtcbiAgICB9LFxuICAgIHNob3dJdGVtMihkYXRhLCBzbHVnKSB7XG4gICAgICBpZiAodHlwZW9mIHNsdWcgIT09IFwidW5kZWZpbmVkXCIgJiYgc2x1ZyAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLm1lcmNoYW50U2x1ZyA9IHNsdWc7XG4gICAgICAgIHRoaXMuc2hvd0l0ZW0oZGF0YSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBzaG93SXRlbShkYXRhKSB7XG4gICAgICB0aGlzLnJlc2V0RGF0YSgpO1xuICAgICAgdGhpcy5pdGVtX2RpYWxvZyA9IHRydWU7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuXG4gICAgICB0aGlzLmRhdGFfY2F0X2lkID0gZGF0YS5jYXRfaWQ7XG4gICAgICB0aGlzLmRhdGFfaXRlbV90b2tlbiA9IGRhdGEuaXRlbV91dWlkO1xuXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiB0aGlzLm1lcmNoYW50U2x1ZyAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICB0aGlzLm1lcmNoYW50U2x1ZyAhPT0gbnVsbFxuICAgICAgKSB7XG4gICAgICAgIC8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIEFQSWludGVyZmFjZS5nZXRNZW51SXRlbShcbiAgICAgICAgZGF0YS5jYXRfaWQsXG4gICAgICAgIGRhdGEuaXRlbV91dWlkLFxuICAgICAgICB0aGlzLm1lcmNoYW50U2x1ZyxcbiAgICAgICAgdGhpcy5jdXJyZW5jeV9jb2RlXG4gICAgICApXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5tZXJjaGFudF9pZCA9IGRhdGEuZGV0YWlscy5tZXJjaGFudF9pZDtcbiAgICAgICAgICB0aGlzLnJlc3RhdXJhbnRfbmFtZSA9IGRhdGEuZGV0YWlscy5yZXN0YXVyYW50X25hbWU7XG4gICAgICAgICAgdGhpcy5pdGVtcyA9IGRhdGEuZGV0YWlscy5kYXRhLml0ZW1zO1xuICAgICAgICAgIHRoaXMuc2l6ZV9kYXRhcyA9IGRhdGEuZGV0YWlscy5kYXRhLml0ZW1zLnByaWNlO1xuICAgICAgICAgIGNvbnN0IHNvbGRPdXREYXRhID0gZGF0YS5kZXRhaWxzLnNvbGRfb3V0X29wdGlvbnM7XG5cbiAgICAgICAgICB0aGlzLmlmX3NvbGRfb3V0ID0gZGF0YS5kZXRhaWxzLmRlZmF1bHRfc29sZF9vdXRfb3B0aW9ucztcblxuICAgICAgICAgIGNvbnN0IHByaWNlcyA9IGRhdGEuZGV0YWlscy5kYXRhLml0ZW1zLnByaWNlO1xuICAgICAgICAgIGNvbnN0IG1ldGFDb29raW5nUmVmID0gZGF0YS5kZXRhaWxzLmRhdGEubWV0YVxuICAgICAgICAgICAgPyBkYXRhLmRldGFpbHMuZGF0YS5tZXRhLmNvb2tpbmdfcmVmXG4gICAgICAgICAgICA6IHt9O1xuICAgICAgICAgIGNvbnN0IG1ldGFDb29raW5nUmVmRGV0YWlscyA9IGRhdGEuZGV0YWlscy5kYXRhLm1ldGFcbiAgICAgICAgICAgID8gZGF0YS5kZXRhaWxzLmRhdGEubWV0YV9kZXRhaWxzLmNvb2tpbmdfcmVmXG4gICAgICAgICAgICA6IHt9O1xuXG4gICAgICAgICAgY29uc3QgbWV0YUluZ3JlZGllbnRzID0gZGF0YS5kZXRhaWxzLmRhdGEubWV0YVxuICAgICAgICAgICAgPyBkYXRhLmRldGFpbHMuZGF0YS5tZXRhLmluZ3JlZGllbnRzXG4gICAgICAgICAgICA6IHt9O1xuICAgICAgICAgIGNvbnN0IG1ldGFJbmdyZWRpZW50c0RldGFpbHMgPSBkYXRhLmRldGFpbHMuZGF0YS5tZXRhXG4gICAgICAgICAgICA/IGRhdGEuZGV0YWlscy5kYXRhLm1ldGFfZGV0YWlscy5pbmdyZWRpZW50c1xuICAgICAgICAgICAgOiB7fTtcblxuICAgICAgICAgIHRoaXMuaXRlbV9nYWxsZXJ5ID0gZGF0YS5kZXRhaWxzLmRhdGEubWV0YVxuICAgICAgICAgICAgPyBkYXRhLmRldGFpbHMuZGF0YS5tZXRhLml0ZW1fZ2FsbGVyeVxuICAgICAgICAgICAgOiB7fTtcblxuICAgICAgICAgIGNvbnN0IGFkZG9ucyA9IGRhdGEuZGV0YWlscy5kYXRhID8gZGF0YS5kZXRhaWxzLmRhdGEuYWRkb25zIDoge307XG4gICAgICAgICAgY29uc3QgYWRkb25JdGVtcyA9IGRhdGEuZGV0YWlscy5kYXRhXG4gICAgICAgICAgICA/IGRhdGEuZGV0YWlscy5kYXRhLmFkZG9uX2l0ZW1zXG4gICAgICAgICAgICA6IHt9O1xuXG4gICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHNvbGRPdXREYXRhKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhzb2xkT3V0RGF0YSkuZm9yRWFjaChcbiAgICAgICAgICAgICAgKFtpdGVtU29sZEtleSwgaXRlbXNTb2xkRGF0YV0pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNvbGRfb3V0X29wdGlvbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICBsYWJlbDogaXRlbXNTb2xkRGF0YSxcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBpdGVtU29sZEtleSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoT2JqZWN0LmtleXMocHJpY2VzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhwcmljZXMpLmZvckVhY2goKFtrZXksIGl0ZW1zXSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoaXRlbXMuZGlzY291bnQgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2l6ZV9kYXRhLnB1c2goe1xuICAgICAgICAgICAgICAgICAgbGFiZWw6IGl0ZW1zLnNpemVfbmFtZSArIFwiIFwiICsgaXRlbXMucHJldHR5X3ByaWNlLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IHBhcnNlSW50KGl0ZW1zLml0ZW1fc2l6ZV9pZCksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaXplX2RhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgICBsYWJlbDpcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMuc2l6ZV9uYW1lICsgXCIgXCIgKyBpdGVtcy5wcmV0dHlfcHJpY2VfYWZ0ZXJfZGlzY291bnQsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogcGFyc2VJbnQoaXRlbXMuaXRlbV9zaXplX2lkKSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLml0ZW1fc2l6ZV9pZCA9IHBhcnNlSW50KE9iamVjdC5rZXlzKHByaWNlcylbMF0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHR5cGVvZiBtZXRhQ29va2luZ1JlZiAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICAgICAgbWV0YUNvb2tpbmdSZWYgIT09IG51bGxcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGlmIChtZXRhQ29va2luZ1JlZi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKG1ldGFDb29raW5nUmVmKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvb2tpbmdfZGF0YS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBtZXRhQ29va2luZ1JlZkRldGFpbHNbdmFsdWVdLm1ldGFfbmFtZSxcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBtZXRhQ29va2luZ1JlZkRldGFpbHNbdmFsdWVdLm1ldGFfaWQsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHR5cGVvZiBtZXRhSW5ncmVkaWVudHMgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgICAgIG1ldGFJbmdyZWRpZW50cyAhPT0gbnVsbFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgaWYgKG1ldGFJbmdyZWRpZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKG1ldGFJbmdyZWRpZW50cykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG1ldGFJbmdyZWRpZW50c0RldGFpbHNbdmFsdWVdKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmluZ3JlZGllbnRzX2RhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBtZXRhSW5ncmVkaWVudHNEZXRhaWxzW3ZhbHVlXS5tZXRhX25hbWUsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBtZXRhSW5ncmVkaWVudHNEZXRhaWxzW3ZhbHVlXS5tZXRhX2lkLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhpcy5pdGVtcy5pbmdyZWRpZW50c19wcmVzZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgID8gXCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwibXlncmV5XCIsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfY29sb3I6IHRoaXMuaXRlbXMuaW5ncmVkaWVudHNfcHJlc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICA/IFwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCJkYXJrXCIsXG4gICAgICAgICAgICAgICAgICAgIG9uT2ZmOiB0aGlzLml0ZW1zLmluZ3JlZGllbnRzX3ByZXNlbGVjdGVkID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBhZGRvbnNcbiAgICAgICAgICAvLyBjb25zdCBhZGRvbnNEYXRhID0gW11cbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLml0ZW1zLml0ZW1fYWRkb25zKTtcbiAgICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5pdGVtcy5pdGVtX2FkZG9ucykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5pdGVtcy5pdGVtX2FkZG9ucykuZm9yRWFjaChcbiAgICAgICAgICAgICAgKFtzaXplSWQsIFN1YmNhdElEXSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFkZE9uc0FkZGVkID0gW107XG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoU3ViY2F0SUQpLmZvckVhY2goKFtrZXksIGNoaWxkXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKCFBUElpbnRlcmZhY2UuZW1wdHkoYWRkb25zW3NpemVJZF0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghQVBJaW50ZXJmYWNlLmVtcHR5KGFkZG9uc1tzaXplSWRdW2NoaWxkXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhZGRvbkRldGFpbHMgPSBhZGRvbnNbc2l6ZUlkXVtjaGlsZF07XG5cbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdWJJdGVtcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGFkZG9uRGV0YWlscy5zdWJfaXRlbXMpLmZvckVhY2goXG4gICAgICAgICAgICAgICAgICAgICAgICAoW2tleTIsIHN1Ykl0ZW1zSURdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhZGRvbkl0ZW1zW3N1Ykl0ZW1zSURdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ViSXRlbXNBZGQgPSBhZGRvbkl0ZW1zW3N1Ykl0ZW1zSURdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZG9uSXRlbXNbc3ViSXRlbXNJRF0uY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZG9uSXRlbXNbc3ViSXRlbXNJRF0uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRvbkl0ZW1zW3N1Ykl0ZW1zSURdLnF0eSA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViSXRlbXMucHVzaChzdWJJdGVtc0FkZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ViZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YmNhdF9pZDogYWRkb25EZXRhaWxzLnN1YmNhdF9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YmNhdGVnb3J5X25hbWU6IGFkZG9uRGV0YWlscy5zdWJjYXRlZ29yeV9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViY2F0ZWdvcnlfZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFkZG9uRGV0YWlscy5zdWJjYXRlZ29yeV9kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpX29wdGlvbjogYWRkb25EZXRhaWxzLm11bHRpX29wdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpX29wdGlvbl9taW46IGFkZG9uRGV0YWlscy5tdWx0aV9vcHRpb25fbWluLFxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlfb3B0aW9uX3ZhbHVlOiBhZGRvbkRldGFpbHMubXVsdGlfb3B0aW9uX3ZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZV9hZGRvbjogYWRkb25EZXRhaWxzLnJlcXVpcmVfYWRkb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVfc2VsZWN0ZWQ6IGFkZG9uRGV0YWlscy5wcmVfc2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJfaXRlbXNfY2hlY2tlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Yl9pdGVtczogc3ViSXRlbXMsXG4gICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICBhZGRPbnNBZGRlZC5wdXNoKHN1YmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRvbnNbc2l6ZUlkXSA9IGFkZE9uc0FkZGVkO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvL1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgQVBJaW50ZXJmYWNlLm5vdGlmeShcInJlZC01XCIsIGVycm9yLCBcImVycm9yX291dGxpbmVcIiwgdGhpcy4kcSk7XG4gICAgICAgICAgdGhpcy5pdGVtX2RpYWxvZyA9IGZhbHNlO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIEl0ZW1TdW1tYXJ5KCkge1xuICAgICAgbGV0ICRpdGVtVG90YWwgPSAwO1xuICAgICAgY29uc3QgJHJlcXVpcmVkQWRkb24gPSBbXTtcbiAgICAgIGNvbnN0ICRyZXF1aXJlZEFkZG9uQWRkZWQgPSBbXTtcbiAgICAgIGxldCAkbWluX2FkZG9uID0gW107XG4gICAgICBsZXQgJG1pbl9hZGRvbl9hZGRlZCA9IFtdO1xuXG4gICAgICBpZiAoIWVtcHR5KHRoaXMuc2l6ZV9kYXRhc1t0aGlzLml0ZW1fc2l6ZV9pZF0pKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLnNpemVfZGF0YXNbdGhpcy5pdGVtX3NpemVfaWRdO1xuICAgICAgICBpZiAoaXRlbS5kaXNjb3VudCA+IDApIHtcbiAgICAgICAgICAkaXRlbVRvdGFsICs9IHRoaXMuaXRlbV9xdHkgKiBwYXJzZUZsb2F0KGl0ZW0ucHJpY2VfYWZ0ZXJfZGlzY291bnQpO1xuICAgICAgICB9IGVsc2UgJGl0ZW1Ub3RhbCArPSB0aGlzLml0ZW1fcXR5ICogcGFyc2VGbG9hdChpdGVtLnByaWNlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFlbXB0eSh0aGlzLmFkZG9uc1t0aGlzLml0ZW1fc2l6ZV9pZF0pKSB7XG4gICAgICAgIHRoaXMuYWRkb25zW3RoaXMuaXRlbV9zaXplX2lkXS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGlmIChpdGVtLnJlcXVpcmVfYWRkb24gPT09IFwiMVwiKSB7XG4gICAgICAgICAgICAkcmVxdWlyZWRBZGRvbi5wdXNoKGl0ZW0uc3ViY2F0X2lkKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaXRlbS5tdWx0aV9vcHRpb24gPT09IFwiY3VzdG9tXCIpIHtcbiAgICAgICAgICAgIGxldCB0b3RhbENoZWNrID0gMDtcbiAgICAgICAgICAgIGNvbnN0IG11bHRpT3B0aW9uVmFsdWUgPSBpdGVtLm11bHRpX29wdGlvbl92YWx1ZTtcbiAgICAgICAgICAgIGxldCBtdWx0aV9vcHRpb25fbWluID0gaXRlbS5tdWx0aV9vcHRpb25fbWluO1xuXG4gICAgICAgICAgICBpZiAobXVsdGlPcHRpb25WYWx1ZSA+IDApIHtcbiAgICAgICAgICAgICAgJG1pbl9hZGRvbi5wdXNoKHtcbiAgICAgICAgICAgICAgICBzdWJjYXRfaWQ6IGl0ZW0uc3ViY2F0X2lkLFxuICAgICAgICAgICAgICAgIG1pbjogbXVsdGlfb3B0aW9uX21pbixcbiAgICAgICAgICAgICAgICBtYXg6IG11bHRpT3B0aW9uVmFsdWUsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBpdGVtSW5kZXggPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1JbmRleDIgPSBbXTtcbiAgICAgICAgICAgIGl0ZW0uc3ViX2l0ZW1zLmZvckVhY2goKGl0ZW0yLCBpbmRleDIpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGl0ZW0yLmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0b3RhbENoZWNrKys7XG4gICAgICAgICAgICAgICAgJGl0ZW1Ub3RhbCArPSB0aGlzLml0ZW1fcXR5ICogcGFyc2VGbG9hdChpdGVtMi5wcmljZSk7XG4gICAgICAgICAgICAgICAgJHJlcXVpcmVkQWRkb25BZGRlZC5wdXNoKGl0ZW0uc3ViY2F0X2lkKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGl0ZW1JbmRleC5wdXNoKGluZGV4Mik7XG5cbiAgICAgICAgICAgICAgaWYgKGl0ZW0yLmRpc2FibGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaXRlbUluZGV4Mi5wdXNoKGluZGV4Mik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkbWluX2FkZG9uX2FkZGVkW2l0ZW0uc3ViY2F0X2lkXSA9IHtcbiAgICAgICAgICAgICAgdG90YWw6IHRvdGFsQ2hlY2ssXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAodG90YWxDaGVjayA+PSBtdWx0aU9wdGlvblZhbHVlKSB7XG4gICAgICAgICAgICAgIGl0ZW1JbmRleC5mb3JFYWNoKChpdGVtMywgaW5kZXgzKSA9PiB7XG4gICAgICAgICAgICAgICAgaXRlbS5zdWJfaXRlbXNbaXRlbTNdLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpdGVtSW5kZXgyLmZvckVhY2goKGl0ZW0zLCBpbmRleDMpID0+IHtcbiAgICAgICAgICAgICAgICBpdGVtLnN1Yl9pdGVtc1tpdGVtM10uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChpdGVtLm11bHRpX29wdGlvbiA9PT0gXCJvbmVcIikge1xuICAgICAgICAgICAgaXRlbS5zdWJfaXRlbXMuZm9yRWFjaCgoaXRlbTIsIGluZGV4MikgPT4ge1xuICAgICAgICAgICAgICBpZiAoaXRlbTIuc3ViX2l0ZW1faWQgPT09IGl0ZW0uc3ViX2l0ZW1zX2NoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAkaXRlbVRvdGFsICs9IHRoaXMuaXRlbV9xdHkgKiBwYXJzZUZsb2F0KGl0ZW0yLnByaWNlKTtcbiAgICAgICAgICAgICAgICAkcmVxdWlyZWRBZGRvbkFkZGVkLnB1c2goaXRlbS5zdWJjYXRfaWQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0ubXVsdGlfb3B0aW9uID09PSBcIm11bHRpcGxlXCIpIHtcbiAgICAgICAgICAgIGxldCBtdWx0aV9vcHRpb25fbWluID0gaXRlbS5tdWx0aV9vcHRpb25fbWluO1xuICAgICAgICAgICAgY29uc3QgbXVsdGlPcHRpb25WYWx1ZSA9IGl0ZW0ubXVsdGlfb3B0aW9uX3ZhbHVlO1xuXG4gICAgICAgICAgICBpZiAobXVsdGlPcHRpb25WYWx1ZSA+IDApIHtcbiAgICAgICAgICAgICAgJG1pbl9hZGRvbi5wdXNoKHtcbiAgICAgICAgICAgICAgICBzdWJjYXRfaWQ6IGl0ZW0uc3ViY2F0X2lkLFxuICAgICAgICAgICAgICAgIG1pbjogbXVsdGlfb3B0aW9uX21pbixcbiAgICAgICAgICAgICAgICBtYXg6IG11bHRpT3B0aW9uVmFsdWUsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgVG90YWxNdWx0aVF0eSA9IDA7XG4gICAgICAgICAgICBjb25zdCBpdGVtSW5kZXggPSBbXTtcbiAgICAgICAgICAgIGl0ZW0uc3ViX2l0ZW1zLmZvckVhY2goKGl0ZW0yLCBpbmRleDIpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGl0ZW0yLmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAkaXRlbVRvdGFsICs9IGl0ZW0yLnF0eSAqIHBhcnNlRmxvYXQoaXRlbTIucHJpY2UpO1xuICAgICAgICAgICAgICAgIFRvdGFsTXVsdGlRdHkgKz0gaXRlbTIucXR5O1xuICAgICAgICAgICAgICAgICRyZXF1aXJlZEFkZG9uQWRkZWQucHVzaChpdGVtLnN1YmNhdF9pZCk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpdGVtSW5kZXgucHVzaChpbmRleDIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICRtaW5fYWRkb25fYWRkZWRbaXRlbS5zdWJjYXRfaWRdID0ge1xuICAgICAgICAgICAgICB0b3RhbDogVG90YWxNdWx0aVF0eSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVG90YWxNdWx0aVF0eT0+XCIgKyBUb3RhbE11bHRpUXR5KTtcbiAgICAgICAgICAgIGlmIChUb3RhbE11bHRpUXR5ID49IG11bHRpT3B0aW9uVmFsdWUpIHtcbiAgICAgICAgICAgICAgaXRlbS5zdWJfaXRlbXMuZm9yRWFjaCgoc3ViX2l0ZW1zMywgc3ViX2l0ZW1zX2luZGV4MykgPT4ge1xuICAgICAgICAgICAgICAgIHN1Yl9pdGVtczMuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGl0ZW0uc3ViX2l0ZW1zLmZvckVhY2goKHN1Yl9pdGVtczMsIHN1Yl9pdGVtc19pbmRleDMpID0+IHtcbiAgICAgICAgICAgICAgICBzdWJfaXRlbXMzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gLyogZW5kaWYgY3VzdG9tICovXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBlbmQgbG9vcCBhZGRvbnNcbiAgICAgIH1cblxuICAgICAgLy9pZiAoT2JqZWN0LmtleXModGhpcy5tb25leV9jb25maWcpLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuaXRlbV90b3RhbCA9ICRpdGVtVG90YWw7XG4gICAgICAvL31cblxuICAgICAgbGV0ICRyZXF1aXJlZE1lZXQgPSB0cnVlO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJyZXF1aXJlZEFkZG9uQWRkZWRcIik7XG4gICAgICAvLyBjb25zb2xlLmxvZygkcmVxdWlyZWRBZGRvbkFkZGVkKTtcbiAgICAgIGlmICgkcmVxdWlyZWRBZGRvbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICRyZXF1aXJlZEFkZG9uLmZvckVhY2goKHJlcXVpZWRJdGVtLCByZXF1aXJlZEluZGV4KSA9PiB7XG4gICAgICAgICAgaWYgKCRyZXF1aXJlZEFkZG9uQWRkZWQuaW5jbHVkZXMocmVxdWllZEl0ZW0pID09PSBmYWxzZSkge1xuICAgICAgICAgICAgJHJlcXVpcmVkTWVldCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIENIRUNLIENPT0tJTkcgUkVGXG4gICAgICBpZiAodGhpcy5pdGVtcy5jb29raW5nX3JlZl9yZXF1aXJlZCkge1xuICAgICAgICBpZiAodGhpcy5jb29raW5nX3JlZiA+IDApIHtcbiAgICAgICAgICAkcmVxdWlyZWRNZWV0ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkcmVxdWlyZWRNZWV0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQ0hFQ0sgQURET04gTUlOSU1VTSBBTkQgTUFYSU1VTVxuICAgICAgaWYgKE9iamVjdC5rZXlzKCRtaW5fYWRkb24pLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IG1pbl92YWx1ZSwgbWluX3NlbGVjdGVkO1xuICAgICAgICBPYmplY3QuZW50cmllcygkbWluX2FkZG9uKS5mb3JFYWNoKFxuICAgICAgICAgIChba2V5X21pbl9hZGRvbiwgaXRlbXNfbWluX2FkZG9uXSkgPT4ge1xuICAgICAgICAgICAgbWluX3ZhbHVlID0gcGFyc2VJbnQoaXRlbXNfbWluX2FkZG9uLm1pbik7XG4gICAgICAgICAgICBpZiAoJG1pbl9hZGRvbl9hZGRlZFtpdGVtc19taW5fYWRkb24uc3ViY2F0X2lkXSkge1xuICAgICAgICAgICAgICBtaW5fc2VsZWN0ZWQgPSBwYXJzZUludChcbiAgICAgICAgICAgICAgICAkbWluX2FkZG9uX2FkZGVkW2l0ZW1zX21pbl9hZGRvbi5zdWJjYXRfaWRdLnRvdGFsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobWluX3NlbGVjdGVkID4gMCkge1xuICAgICAgICAgICAgICBpZiAobWluX3ZhbHVlID4gbWluX3NlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgJHJlcXVpcmVkTWVldCA9IGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5pdGVtcy5ub3RfZm9yX3NhbGUpIHtcbiAgICAgICAgJHJlcXVpcmVkTWVldCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoJHJlcXVpcmVkTWVldCkge1xuICAgICAgICB0aGlzLmRpc2FibGVkX2NhcnQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB0aGlzLmRpc2FibGVkX2NhcnQgPSB0cnVlO1xuICAgIH0sXG4gICAgQ2hlY2thZGRDYXJ0SXRlbXMoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkNoZWNrYWRkQ2FydEl0ZW1zXCIpO1xuICAgICAgbGV0ICRjYXJ0TWVyY2hhbnRJRCA9IFwiXCI7XG4gICAgICBsZXQgJGNhcnRNZXJjaGFudE5hbWUgPSBcIlwiO1xuICAgICAgY29uc29sZS5sb2codGhpcy5DYXJ0U3RvcmUuY2FydF9tZXJjaGFudCk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLkNhcnRTdG9yZS5jYXJ0X21lcmNoYW50Lm1lcmNoYW50X2lkKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuQ2FydFN0b3JlLmNhcnRfbWVyY2hhbnQucmVzdGF1cmFudF9uYW1lKTtcblxuICAgICAgaWYgKCFBUElpbnRlcmZhY2UuZW1wdHkodGhpcy5DYXJ0U3RvcmUuY2FydF9tZXJjaGFudCkpIHtcbiAgICAgICAgJGNhcnRNZXJjaGFudElEID0gdGhpcy5DYXJ0U3RvcmUuY2FydF9tZXJjaGFudC5tZXJjaGFudF9pZDtcbiAgICAgICAgJGNhcnRNZXJjaGFudE5hbWUgPSB0aGlzLkNhcnRTdG9yZS5jYXJ0X21lcmNoYW50LnJlc3RhdXJhbnRfbmFtZTtcbiAgICAgIH1cblxuICAgICAgY29uc29sZS5sb2coJGNhcnRNZXJjaGFudElEICsgXCI9PlwiICsgdGhpcy5tZXJjaGFudF9pZCk7XG5cbiAgICAgIGlmICghQVBJaW50ZXJmYWNlLmVtcHR5KCRjYXJ0TWVyY2hhbnRJRCkpIHtcbiAgICAgICAgaWYgKCRjYXJ0TWVyY2hhbnRJRCAhPT0gdGhpcy5tZXJjaGFudF9pZCkge1xuICAgICAgICAgIGxldCAkbWVzc2FnZSA9IHRoaXMuJHQoXG4gICAgICAgICAgICBcIllvdXIgb3JkZXIgY29udGFpbnMgaXRlbXMgZnJvbSB7e3Jlc3RhdXJhbnRfbmFtZX19LiBDcmVhdGUgYSBuZXcgb3JkZXIgdG8gYWRkIGl0ZW1zLlwiXG4gICAgICAgICAgKTtcbiAgICAgICAgICAkbWVzc2FnZSA9ICRtZXNzYWdlLnJlcGxhY2UoXCJ7e3Jlc3RhdXJhbnRfbmFtZX19XCIsICRjYXJ0TWVyY2hhbnROYW1lKTtcbiAgICAgICAgICB0aGlzLiRxXG4gICAgICAgICAgICAuZGlhbG9nKHtcbiAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuJHQoXCJDcmVhdGUgbmV3IG9yZGVyP1wiKSxcbiAgICAgICAgICAgICAgbWVzc2FnZTogJG1lc3NhZ2UsXG4gICAgICAgICAgICAgIHBlcnNpc3RlbnQ6IHRydWUsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBcInN0YW5kYXJkXCIsXG4gICAgICAgICAgICAgIHRyYW5zaXRpb25TaG93OiBcImZhZGVcIixcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbkhpZGU6IFwiZmFkZVwiLFxuICAgICAgICAgICAgICBvazoge1xuICAgICAgICAgICAgICAgIHVuZWxldmF0ZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgY29sb3I6IFwicHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgIHJvdW5kZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwidGV4dC1jb2xvclwiOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgc2l6ZTogXCJtZFwiLFxuICAgICAgICAgICAgICAgIGxhYmVsOiB0aGlzLiR0KFwiTmV3IG9yZGVyXCIpLFxuICAgICAgICAgICAgICAgIFwibm8tY2Fwc1wiOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNsYXNzOiBcInJhZGl1czhcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY2FuY2VsOiB7XG4gICAgICAgICAgICAgICAgdW5lbGV2YXRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICByb3VuZGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJteWdyZXlcIixcbiAgICAgICAgICAgICAgICBcInRleHQtY29sb3JcIjogXCJibGFja1wiLFxuICAgICAgICAgICAgICAgIHNpemU6IFwibWRcIixcbiAgICAgICAgICAgICAgICBsYWJlbDogdGhpcy4kdChcIkNhbmNlbFwiKSxcbiAgICAgICAgICAgICAgICBcIm5vLWNhcHNcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjbGFzczogXCJyYWRpdXM4XCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uT2soKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmNsZWFyQ2FydCgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbkNhbmNlbCgoKSA9PiB7XG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCc+Pj4+IENhbmNlbCcpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uRGlzbWlzcygoKSA9PiB7XG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdJIGFtIHRyaWdnZXJlZCBvbiBib3RoIE9LIGFuZCBDYW5jZWwnKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5BZGRUb0NhcnQoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5BZGRUb0NhcnQoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNsZWFyQ2FydCgpIHtcbiAgICAgIGNvbnN0ICRjYXJ0VXVpZCA9IEFQSWludGVyZmFjZS5nZXRTdG9yYWdlKFwiY2FydF91dWlkXCIpO1xuICAgICAgQVBJaW50ZXJmYWNlLmNsZWFyQ2FydCgkY2FydFV1aWQpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5BZGRUb0NhcnQoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJyZWQtNVwiLCBlcnJvciwgXCJlcnJvcl9vdXRsaW5lXCIsIHRoaXMuJHEpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge30pO1xuICAgIH0sXG4gICAgQWRkVG9DYXJ0KCkge1xuICAgICAgY29uc3QgJGluZ3JlZGllbnRzID0gW107XG4gICAgICBpZiAodGhpcy5pbmdyZWRpZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuaW5ncmVkaWVudHMuZm9yRWFjaCgoaW5ncmVkaWVudHNJZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAkaW5ncmVkaWVudHMucHVzaCh7XG4gICAgICAgICAgICBtZXRhX2lkOiBpbmdyZWRpZW50c0lkLFxuICAgICAgICAgICAgY2hlY2tlZDogdHJ1ZSxcbiAgICAgICAgICAgIG1ldGFfbmFtZTogXCJcIixcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0ICRtZXRhID0ge1xuICAgICAgICBjb29raW5nX3JlZjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG1ldGFfaWQ6IHRoaXMuY29va2luZ19yZWYsXG4gICAgICAgICAgICBjaGVja2VkOiB0aGlzLmNvb2tpbmdfcmVmLFxuICAgICAgICAgICAgbWV0YV9uYW1lOiBcIlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGluZ3JlZGllbnRzOiAkaW5ncmVkaWVudHMsXG4gICAgICB9O1xuICAgICAgY29uc3QgJGNhcnRVdWlkID0gQVBJaW50ZXJmYWNlLmdldFN0b3JhZ2UoXCJjYXJ0X3V1aWRcIik7XG4gICAgICBjb25zdCAkZGF0YSA9IHtcbiAgICAgICAgc2x1ZzogdGhpcy5tZXJjaGFudFNsdWcsXG4gICAgICAgIGNhcnRfdXVpZDogJGNhcnRVdWlkLFxuICAgICAgICBjYXRfaWQ6IHRoaXMuZGF0YV9jYXRfaWQsXG4gICAgICAgIGl0ZW1fc2l6ZV9pZDogdGhpcy5pdGVtX3NpemVfaWQsXG4gICAgICAgIGl0ZW1fdG9rZW46IHRoaXMuZGF0YV9pdGVtX3Rva2VuLFxuICAgICAgICBpdGVtX3F0eTogdGhpcy5pdGVtX3F0eSxcbiAgICAgICAgc3BlY2lhbF9pbnN0cnVjdGlvbnM6IHRoaXMuc3BlY2lhbF9pbnN0cnVjdGlvbnMsXG4gICAgICAgIGlmX3NvbGRfb3V0OiB0aGlzLmlmX3NvbGRfb3V0LnZhbHVlLFxuICAgICAgICB0cmFuc2FjdGlvbl90eXBlOiB0aGlzLnNjaGVkU3RvcmUudHJhbnNhY3Rpb25fdHlwZSxcbiAgICAgICAgbWV0YTogJG1ldGEsXG4gICAgICAgIGl0ZW1fYWRkb25zOiAhZW1wdHkodGhpcy5hZGRvbnNbdGhpcy5pdGVtX3NpemVfaWRdKVxuICAgICAgICAgID8gdGhpcy5hZGRvbnNbdGhpcy5pdGVtX3NpemVfaWRdXG4gICAgICAgICAgOiBbXSxcbiAgICAgIH07XG5cbiAgICAgIHRoaXMubG9hZGluZ19hZGQgPSB0cnVlO1xuICAgICAgQVBJaW50ZXJmYWNlLkFkZFRvQ2FydCgkZGF0YSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoZW1wdHkoJGNhcnRVdWlkKSkge1xuICAgICAgICAgICAgQVBJaW50ZXJmYWNlLnNldFN0b3JhZ2UoXCJjYXJ0X3V1aWRcIiwgZGF0YS5kZXRhaWxzLmNhcnRfdXVpZCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuJGVtaXQoXCJhZnRlckFkZGl0ZW1zXCIpO1xuICAgICAgICAgIHRoaXMuaXRlbV9kaWFsb2cgPSBmYWxzZTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJuZWdhdGl2ZVwiLCBlcnJvciwgXCJlcnJvcl9vdXRsaW5lXCIsIHRoaXMuJHEpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZ19hZGQgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBhZnRlclNhdmVmYXYoaXRlbSkge1xuICAgICAgaXRlbS5zYXZlX2l0ZW0gPSAhaXRlbS5zYXZlX2l0ZW07XG4gICAgICB0aGlzLkZhdm9yaXRlU3RvcmUuZ2V0SXRlbUZhdm9yaXRlcyh0aGlzLnNsdWcpO1xuICAgIH0sXG4gICAgc2V0QWN0aXZlKGJ1dHRvbiwgaW5kZXgpIHtcbiAgICAgIGlmIChidXR0b24ub25PZmYpIHtcbiAgICAgICAgdGhpcy5pbmdyZWRpZW50c19kYXRhW2luZGV4XS5jb2xvciA9IFwibXlncmV5XCI7XG4gICAgICAgIHRoaXMuaW5ncmVkaWVudHNfZGF0YVtpbmRleF0udGV4dF9jb2xvciA9IFwiZGFya1wiO1xuICAgICAgICB0aGlzLmluZ3JlZGllbnRzX2RhdGFbaW5kZXhdLm9uT2ZmID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmluZ3JlZGllbnRzX2RhdGFbaW5kZXhdLmNvbG9yID0gXCJwcmltYXJ5XCI7XG4gICAgICAgIHRoaXMuaW5ncmVkaWVudHNfZGF0YVtpbmRleF0udGV4dF9jb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgdGhpcy5pbmdyZWRpZW50c19kYXRhW2luZGV4XS5vbk9mZiA9IHRydWU7XG4gICAgICB9XG4gICAgfSxcbiAgICBhZnRlclNlbGVjdGltYWdlKGRhdGEpIHtcbiAgICAgIHRoaXMuaW1hZ2VfZmVhdHVyZWQgPSBkYXRhO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iXSwiZmlsZSI6ImFzc2V0cy9JdGVtRGV0YWlscy44MWE1NzBjYi5qcyJ9
