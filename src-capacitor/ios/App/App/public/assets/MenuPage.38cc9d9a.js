import { I as defineStore, m as APIinterface, _ as _export_sfc, l as defineAsyncComponent, S as useDataStorePersisted, R as useDataStore, aw as auth, n as resolveComponent, p as openBlock, V as createElementBlock, f as createVNode, t as withCtx, q as createBlock, aA as createCommentVNode, F as Fragment, b3 as scroll, a7 as normalizeClass, Y as QBtn, a6 as createTextVNode, Z as toDisplayString, U as createBaseVNode, b4 as normalizeStyle, at as QIcon, b2 as QSeparator, aY as QInput, X as renderList, u as __vitePreload, ac as QItem, ad as QItemSection, aF as withModifiers, ae as QAvatar } from "./index.61ed5618.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QSpace } from "./QSpace.f164c087.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QScrollObserver } from "./QScrollObserver.a3e1ec14.js";
import { Q as QInnerLoading } from "./QInnerLoading.abe2afe6.js";
import { Q as QSkeleton } from "./QSkeleton.39737398.js";
import { Q as QChip } from "./QChip.f183a4f1.js";
import { Q as QItemLabel } from "./QItemLabel.a9365c5b.js";
import { Q as QList } from "./QList.b69a7e5b.js";
import { Q as QImg } from "./QImg.6c27044c.js";
import { Q as QPageScroller } from "./QPageScroller.2c709c91.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import { Q as QFooter } from "./QFooter.571ac042.js";
import { Q as QPullToRefresh } from "./QPullToRefresh.3d10c02d.js";
import { u as useCartStore } from "./CartStore.484ff101.js";
import { u as useMenuStore } from "./MenuStore.f3a21da3.js";
import { u as useFavoriteStore } from "./FavoriteStore.f91e6f21.js";
import { u as useDeliveryschedStore } from "./DeliverySched.4e9605bf.js";
import "./QResizeObserver.d08dce3c.js";
import "./use-page-sticky.447afe02.js";
import "./touch.96e0ae37.js";
import "./selection.50b4cb0c.js";
import "./format.7f7370d3.js";
const useStoreOpen = defineStore("store_open", {
  state: () => ({
    loading: true,
    message: [],
    store_close: false,
    next_opening: ""
  }),
  actions: {
    checkStoreOpen() {
      this.loading = true;
      const $cartUiid = APIinterface.getStorage("cart_uuid");
      APIinterface.checkStoreOpen($cartUiid).then((data) => {
        this.message = data.msg;
        if (data.details.merchant_open_status <= 0) {
          this.store_close = true;
        } else {
          this.store_close = true;
        }
      }).catch((error) => {
      }).then((data) => {
        this.loading = false;
      });
    },
    checkStoreOpen2(data) {
      this.loading = true;
      let ChoosenDelivery = APIinterface.getStorage("choosen_delivery");
      APIinterface.fetchData("checkStoreOpen2", {
        slug: data,
        choosen_delivery: ChoosenDelivery
      }).then((data2) => {
        this.message = data2.msg;
        this.next_opening = data2.details.next_opening;
        if (data2.details.merchant_open_status <= 0) {
          this.store_close = true;
        } else {
          this.store_close = false;
        }
        if (data2.details.time_already_passed) {
          APIinterface.setStorage("choosen_delivery", "");
        }
      }).catch((error) => {
        this.message = error;
        this.store_close = true;
        this.next_opening = "";
      }).then((data2) => {
        this.loading = false;
      });
    }
  }
});
const {
  getScrollTarget,
  setVerticalScrollPosition,
  getVerticalScrollPosition
} = scroll;
const _sfc_main = {
  name: "MenuPage",
  components: {
    ShareComponents: defineAsyncComponent(
      () => __vitePreload(() => import("./ShareComponents.832d2223.js"), true ? ["assets/ShareComponents.832d2223.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/index.cae99e37.js"] : void 0)
    ),
    FavsResto: defineAsyncComponent(() => __vitePreload(() => import("./FavsResto.c8d5167e.js"), true ? ["assets/FavsResto.c8d5167e.js","assets/index.61ed5618.js","assets/index.dbee30c0.css"] : void 0)),
    CategoriesModal: defineAsyncComponent(
      () => __vitePreload(() => import("./CategoriesModal.863c22cc.js"), true ? ["assets/CategoriesModal.863c22cc.js","assets/QToolbarTitle.03eaf2d6.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QSpace.f164c087.js","assets/QToolbar.c8fc6962.js","assets/QSkeleton.39737398.js","assets/QList.b69a7e5b.js","assets/MenuStore.f3a21da3.js"] : void 0)
    ),
    CategorySlide: defineAsyncComponent(
      () => __vitePreload(() => import("./CategorySlide.5ab6a6d4.js"), true ? ["assets/CategorySlide.5ab6a6d4.js","assets/QSkeleton.39737398.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/swiper-slide.8a0c58df.js","assets/MenuStore.f3a21da3.js"] : void 0)
    ),
    ItemDetails: defineAsyncComponent(
      () => __vitePreload(() => import("./ItemDetails.81a570cb.js"), true ? ["assets/ItemDetails.81a570cb.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QCircularProgress.996c3e2f.js","assets/format.7f7370d3.js","assets/QImg.6c27044c.js","assets/QChip.f183a4f1.js","assets/QBtnToggle.6ffa195b.js","assets/QBtnGroup.abc2d1c7.js","assets/QSelect.311187d6.js","assets/QItemLabel.a9365c5b.js","assets/QMenu.8e482cd8.js","assets/selection.50b4cb0c.js","assets/rtl.f3ed811c.js","assets/QSpace.f164c087.js","assets/CartStore.484ff101.js","assets/FavoriteStore.f91e6f21.js","assets/DeliverySched.4e9605bf.js"] : void 0)
    ),
    ItemDetailsCheckbox: defineAsyncComponent(
      () => __vitePreload(() => import("./ItemDetailsCheckbox.63e0acb1.js"), true ? ["assets/ItemDetailsCheckbox.63e0acb1.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QCircularProgress.996c3e2f.js","assets/format.7f7370d3.js","assets/QImg.6c27044c.js","assets/QItemLabel.a9365c5b.js","assets/QList.b69a7e5b.js","assets/QSelect.311187d6.js","assets/QChip.f183a4f1.js","assets/QMenu.8e482cd8.js","assets/selection.50b4cb0c.js","assets/rtl.f3ed811c.js","assets/QSpace.f164c087.js","assets/QBtnGroup.abc2d1c7.js","assets/ClosePopup.9d17b53c.js","assets/CartStore.484ff101.js","assets/FavoriteStore.f91e6f21.js","assets/DeliverySched.4e9605bf.js"] : void 0)
    ),
    FavsItem: defineAsyncComponent(() => __vitePreload(() => import("./FavsItem.341b44fd.js"), true ? ["assets/FavsItem.341b44fd.js","assets/index.61ed5618.js","assets/index.dbee30c0.css"] : void 0)),
    MerchantPromoSlide: defineAsyncComponent(
      () => __vitePreload(() => import("./MerchantPromoSlide.43b6262e.js"), true ? ["assets/MerchantPromoSlide.43b6262e.js","assets/swiper.min.5cdecd27.css","assets/QSkeleton.39737398.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/swiper-slide.8a0c58df.js","assets/PromoStore.a9bf7bbf.js"] : void 0)
    ),
    DeliverySched: defineAsyncComponent(
      () => __vitePreload(() => import("./DeliverySched.9dd37b6e.js"), true ? ["assets/DeliverySched.9dd37b6e.js","assets/QBtnToggle.6ffa195b.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QBtnGroup.abc2d1c7.js","assets/QSelect.311187d6.js","assets/QChip.f183a4f1.js","assets/QItemLabel.a9365c5b.js","assets/QMenu.8e482cd8.js","assets/selection.50b4cb0c.js","assets/rtl.f3ed811c.js","assets/format.7f7370d3.js","assets/DeliverySched.4e9605bf.js"] : void 0)
    ),
    AllergensInformation: defineAsyncComponent(
      () => __vitePreload(() => import("./AllergensInformation.cdb6751f.js"), true ? ["assets/AllergensInformation.cdb6751f.js","assets/QToolbarTitle.03eaf2d6.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QToolbar.c8fc6962.js","assets/QList.b69a7e5b.js","assets/QInnerLoading.abe2afe6.js","assets/ClosePopup.9d17b53c.js"] : void 0)
    ),
    ComponentsRealtime: defineAsyncComponent(
      () => __vitePreload(() => import("./ComponentsRealtime.d8c5a360.js"), true ? ["assets/ComponentsRealtime.d8c5a360.js","assets/index.d0b40bd3.js","assets/index.61ed5618.js","assets/index.dbee30c0.css"] : void 0)
    )
  },
  data() {
    return {
      slug: "",
      category: 1,
      headerChangeColor: false,
      isFixed: false,
      stickyPosition: 0,
      payload: [
        "items",
        "subtotal",
        "distance_local",
        "items_count",
        "merchant_info",
        "check_opening",
        "transaction_info"
      ]
    };
  },
  setup() {
    const CartStore = useCartStore();
    const MenuStore = useMenuStore();
    const StoreOpen = useStoreOpen();
    const FavoriteStore = useFavoriteStore();
    const DeliveryschedStore = useDeliveryschedStore();
    const DataStorePersisted = useDataStorePersisted();
    const DataStore = useDataStore();
    return {
      CartStore,
      MenuStore,
      StoreOpen,
      FavoriteStore,
      DeliveryschedStore,
      DataStorePersisted,
      DataStore
    };
  },
  mounted() {
    this.slug = this.$route.params.slug;
    this.MenuStore.restaurant_slug = this.slug;
    this.CartStore.getCart(true, this.payload);
    this.MenuStore.getMerchantInfo(
      this.slug,
      this.DataStorePersisted.use_currency_code
    );
    this.MenuStore.geStoreMenu(
      this.slug,
      this.DataStorePersisted.use_currency_code
    );
    this.StoreOpen.checkStoreOpen2(this.slug);
    if (auth.authenticated()) {
      if (Object.keys(this.FavoriteStore.items_data).length <= 0) {
        this.FavoriteStore.getItemFavorites(this.slug);
      } else {
        if (!this.FavoriteStore.items_data[this.slug]) {
          this.FavoriteStore.getItemFavorites(this.slug);
        }
      }
    }
    this.DeliveryschedStore.getDeliverySched(
      APIinterface.getStorage("cart_uuid"),
      this.slug,
      "slug"
    );
  },
  computed: {
    classObject() {
      let $class_name = "";
      if (this.headerChangeColor) {
        $class_name = this.$q.dark.mode ? "bg-mydark text-white" : "bg-white text-black";
      } else if (!this.headerChangeColor) {
        $class_name = "bg-transparent text-black";
      }
      return $class_name;
    },
    headerBackground() {
      let bg = "";
      if (this.MenuStore.data_info[this.slug] && !this.MenuStore.loadin_info) {
        let HeaderImage = this.MenuStore.data_info[this.slug].url_logo;
        if (this.MenuStore.data_info[this.slug].has_header) {
          HeaderImage = this.MenuStore.data_info[this.slug].url_header;
        }
        bg = "background-image:url(" + HeaderImage + ") !important; ;background-size:cover!important;";
        return bg;
      } else
        return "";
    },
    getEstimation() {
      let result = "";
      let prefix = "in";
      let mins = "min";
      let transactionType = this.DeliveryschedStore.transaction_type;
      if (this.DeliveryschedStore.whento_deliver == "schedule") {
        prefix = "from";
        mins = "";
        result = this.DeliveryschedStore.trans_data.delivery_time.pretty_time;
      } else {
        if (this.MenuStore.data_estimation[this.slug]) {
          if (this.MenuStore.data_estimation[this.slug][transactionType]) {
            if (this.MenuStore.data_estimation[this.slug][transactionType][this.MenuStore.data_charge_type[this.slug]]) {
              result = this.MenuStore.data_estimation[this.slug][transactionType][this.MenuStore.data_charge_type[this.slug]].estimation;
            }
          }
        }
      }
      if (!APIinterface.empty(result)) {
        return prefix + " " + result + " " + mins;
      }
      return "";
    }
  },
  methods: {
    afterCategoryselect(data) {
      this.$refs.categories_modal.modal = false;
      this.scrollToElement(data);
    },
    scrollToElement(id) {
      const ele = document.getElementById(id);
      const target = getScrollTarget(ele);
      const offset = ele.offsetTop;
      const duration = 500;
      setVerticalScrollPosition(target, offset - 50, duration);
    },
    goSearch() {
      this.$router.push({
        name: "items",
        query: { slug: this.slug }
      });
    },
    onScroll(info) {
      if (info.direction == "down") {
        if (info.position.top <= 140) {
          this.headerChangeColor = true;
        }
      } else {
        if (info.position.top <= 140) {
          this.headerChangeColor = false;
        }
      }
    },
    refresh(done) {
      done();
      this.MenuStore.data_info = {};
      this.CartStore.getCart(true, this.payload);
      this.MenuStore.getMerchantInfo(
        this.slug,
        this.DataStorePersisted.use_currency_code
      );
      this.MenuStore.geStoreMenu(
        this.slug,
        this.DataStorePersisted.use_currency_code
      );
      this.$refs.merchantPromoSlide.refresh();
      if (auth.authenticated()) {
        this.FavoriteStore.getItemFavorites(this.slug);
      }
    },
    showItemdetails(cat_id, item_uuid) {
      const params = { cat_id, item_uuid };
      if (this.DataStore.addons_use_checkbox) {
        this.$refs.item_details2.showItem2(params, this.slug);
      } else {
        this.$refs.item_details.showItem2(params, this.slug);
      }
    },
    afterAdditems() {
      APIinterface.setStorage("merchant_slug", this.slug);
      this.CartStore.getCart(true, this.payload);
    },
    afterSavefav(data, added) {
      data.saved_store = added;
    },
    itemsFav(item_id) {
      let saveItems = [];
      if (this.FavoriteStore.items_data[this.slug]) {
        saveItems = this.FavoriteStore.items_data[this.slug];
      }
      if (Object.keys(saveItems).length > 0) {
        if (saveItems.includes(item_id)) {
          return true;
        }
      }
      return false;
    },
    afterSavefavItem(data, items) {
      this.FavoriteStore.getItemFavorites(this.slug);
    },
    afterSavetrans() {
      this.DeliveryschedStore.getDeliverySched(
        APIinterface.getStorage("cart_uuid"),
        this.slug
      );
      this.StoreOpen.checkStoreOpen2(this.slug);
    },
    isItemAvailable(item_id, cat_id) {
      if (Object.keys(this.MenuStore.items_not_available).length > 0) {
        if (this.MenuStore.items_not_available.includes(parseInt(item_id))) {
          return false;
        }
      }
      if (Object.keys(this.MenuStore.category_not_available).length > 0) {
        if (this.MenuStore.category_not_available.includes(parseInt(cat_id))) {
          return false;
        }
      }
      return true;
    },
    showAllergens(merchant_id, item_id) {
      this.$refs.allergens.show(true, merchant_id, item_id);
    },
    afterReceive(data) {
      console.log("afterReceive");
      console.log(data);
      let message = JSON.parse(data.message);
      console.log(message);
      APIinterface.fetchDataPost(
        "validateCartItems",
        "item_id=" + message.item_id + "&cart_uuid=" + APIinterface.getStorage("cart_uuid")
      ).then((data2) => {
        this.$q.dialog({
          title: this.$t("Items"),
          message: data2.msg,
          persistent: true
        }).onOk(() => {
          this.CartStore.getCart(true, this.payload);
          this.MenuStore.geStoreMenu(
            this.slug,
            this.DataStorePersisted.use_currency_code
          );
        }).onCancel(() => {
        }).onDismiss(() => {
        });
      }).catch((error) => {
      }).then((data2) => {
      });
    }
  }
};
const _hoisted_1 = { key: 1 };
const _hoisted_2 = {
  key: 0,
  class: "absolute-top fit dimmed"
};
const _hoisted_3 = { class: "col" };
const _hoisted_4 = { class: "text-h6 text-weight-medium no-margin line-normal ellipsis" };
const _hoisted_5 = { class: "col-3" };
const _hoisted_6 = {
  key: 0,
  class: "font13 text-green text-weight-bold"
};
const _hoisted_7 = {
  key: 1,
  class: "font13 text-weight-bold text-green"
};
const _hoisted_8 = { class: "col-3 text-right" };
const _hoisted_9 = { class: "q-pl-md q-pr-md" };
const _hoisted_10 = { class: "row items-center font12 text-grey" };
const _hoisted_11 = { class: "text-grey" };
const _hoisted_12 = { class: "text-grey ellipsis fit" };
const _hoisted_13 = { class: "row items-center justify-between" };
const _hoisted_14 = { class: "text-weight-medium text-dark font12 text-grey" };
const _hoisted_15 = {
  key: 0,
  class: "text-weight-medium text-dark font12 text-grey line-normal"
};
const _hoisted_16 = {
  key: 1,
  class: "font12 text-grey line-normal col-4"
};
const _hoisted_17 = { class: "text-weight-medium text-dark font12 text-grey ellipsis fit" };
const _hoisted_18 = { class: "text-weight-medium text-h5 line-normal" };
const _hoisted_19 = { class: "font12" };
const _hoisted_20 = {
  key: 0,
  class: "row items-center justify-between q-mb-sm"
};
const _hoisted_21 = { class: "col-6" };
const _hoisted_22 = { class: "text-weight-medium font12" };
const _hoisted_23 = { class: "col-3 text-center" };
const _hoisted_24 = {
  key: 0,
  class: "col-3 text-right"
};
const _hoisted_25 = {
  key: 2,
  class: "row items-center q-gutter-x-sm"
};
const _hoisted_26 = {
  class: "col-3",
  style: { "max-width": "20%" }
};
const _hoisted_27 = { class: "col" };
const _hoisted_28 = {
  key: 3,
  class: "row items-center q-gutter-sm"
};
const _hoisted_29 = { class: "col" };
const _hoisted_30 = { class: "col-4" };
const _hoisted_31 = { class: "q-mr-xs" };
const _hoisted_32 = { class: "row items-center justify-between q-pl-md q-pr-mdx" };
const _hoisted_33 = ["id"];
const _hoisted_34 = { key: 0 };
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("div", { style: { "height": "5px" } }, null, -1);
const _hoisted_36 = { class: "row items-start q-col-gutter-md q-pl-md q-pr-md" };
const _hoisted_37 = {
  key: 0,
  class: "col-6"
};
const _hoisted_38 = { class: "border-greyx radius10 relative-position" };
const _hoisted_39 = ["onClick"];
const _hoisted_40 = { class: "absolute-top-left full-width q-pa-xs" };
const _hoisted_41 = ["src"];
const _hoisted_42 = { class: "absolute-bottom-right q-pa-sm" };
const _hoisted_43 = { class: "row q-mt-sm items-center" };
const _hoisted_44 = { class: "col" };
const _hoisted_45 = { class: "text-subtitle2 text-weight-medium no-margin line-normal ellipsis" };
const _hoisted_46 = ["innerHTML"];
const _hoisted_47 = {
  key: 0,
  class: "col-3"
};
const _hoisted_48 = { class: "text-grey ellipsis-2-lines text-body2 line-1" };
const _hoisted_49 = ["innerHTML"];
const _hoisted_50 = { class: "row items-center q-mt-sm" };
const _hoisted_51 = { class: "col-6 text-subtitle1 text-weight-bold" };
const _hoisted_52 = { class: "col text-right" };
const _hoisted_53 = { class: "text-subtitle2 text-weight-medium no-margin line-normal" };
const _hoisted_54 = ["innerHTML"];
const _hoisted_55 = { class: "text-grey ellipsis-2-lines text-body2 line-normal" };
const _hoisted_56 = ["innerHTML"];
const _hoisted_57 = {
  key: 0,
  class: "q-mt-xs q-mb-xs"
};
const _hoisted_58 = ["src"];
const _hoisted_59 = {
  key: 1,
  class: "text-grey-7 font12 text-weight-bold"
};
const _hoisted_60 = { class: "text-strike" };
const _hoisted_61 = /* @__PURE__ */ createBaseVNode("span", { class: "q-pr-sm" }, null, -1);
const _hoisted_62 = { class: "column items-center col-12 q-gutter-y-sm" };
const _hoisted_63 = { class: "col" };
const _hoisted_64 = {
  key: 0,
  class: "col"
};
const _hoisted_65 = { class: "col" };
const _hoisted_66 = { class: "row items-center justify-between fit" };
const _hoisted_67 = { class: "font17" };
const _hoisted_68 = { class: "text-weight-bold font16" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FavsResto = resolveComponent("FavsResto");
  const _component_ShareComponents = resolveComponent("ShareComponents");
  const _component_MerchantPromoSlide = resolveComponent("MerchantPromoSlide");
  const _component_CategorySlide = resolveComponent("CategorySlide");
  const _component_FavsItem = resolveComponent("FavsItem");
  const _component_CategoriesModal = resolveComponent("CategoriesModal");
  const _component_ItemDetails = resolveComponent("ItemDetails");
  const _component_ItemDetailsCheckbox = resolveComponent("ItemDetailsCheckbox");
  const _component_DeliverySched = resolveComponent("DeliverySched");
  const _component_AllergensInformation = resolveComponent("AllergensInformation");
  const _component_ComponentsRealtime = resolveComponent("ComponentsRealtime");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(QPullToRefresh, { onRefresh: $options.refresh }, {
      default: withCtx(() => [
        createVNode(QHeader, {
          class: normalizeClass($options.classObject)
        }, {
          default: withCtx(() => [
            createVNode(QToolbar, null, {
              default: withCtx(() => [
                createVNode(QBtn, {
                  onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$router.back()),
                  round: "",
                  dense: "",
                  icon: "las la-angle-left",
                  class: "q-mr-sm",
                  color: _ctx.$q.dark.mode ? "grey600" : "mygrey",
                  "text-color": _ctx.$q.dark.mode ? "grey300" : "dark",
                  size: "sm",
                  unelevated: ""
                }, null, 8, ["color", "text-color"]),
                $data.headerChangeColor ? (openBlock(), createBlock(QToolbarTitle, {
                  key: 0,
                  class: "text-weight-bold"
                }, {
                  default: withCtx(() => [
                    $setup.MenuStore.data_info[$data.slug] ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      createTextVNode(toDisplayString($setup.MenuStore.data_info[$data.slug].restaurant_name), 1)
                    ], 64)) : createCommentVNode("", true)
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                createVNode(QSpace),
                $setup.MenuStore.data_info[$data.slug] ? (openBlock(), createElementBlock("div", _hoisted_1, [
                  createVNode(_component_FavsResto, {
                    ref: "favs",
                    data: $setup.MenuStore.data_info[$data.slug],
                    active: $setup.MenuStore.data_info[$data.slug].saved_store,
                    merchant_id: $setup.MenuStore.data_info[$data.slug].merchant_id,
                    layout: 1,
                    size: "xs",
                    onAfterSavefav: $options.afterSavefav
                  }, null, 8, ["data", "active", "merchant_id", "onAfterSavefav"]),
                  $setup.MenuStore.data_info[$data.slug].share ? (openBlock(), createBlock(_component_ShareComponents, {
                    key: 0,
                    ref: "share",
                    title: $setup.MenuStore.data_info[$data.slug].share.title,
                    text: $setup.MenuStore.data_info[$data.slug].share.text,
                    url: $setup.MenuStore.data_info[$data.slug].share.url,
                    dialogTitle: $setup.MenuStore.data_info[$data.slug].share.dialogTitle
                  }, null, 8, ["title", "text", "url", "dialogTitle"])) : createCommentVNode("", true)
                ])) : createCommentVNode("", true)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["class"]),
        createVNode(QPage, null, {
          default: withCtx(() => [
            createVNode(QScrollObserver, { onScroll: $options.onScroll }, null, 8, ["onScroll"]),
            $setup.MenuStore.loadin_info ? (openBlock(), createBlock(QInnerLoading, {
              key: 0,
              showing: true,
              color: "primary",
              size: "md",
              "label-class": "dark"
            })) : createCommentVNode("", true),
            createBaseVNode("div", {
              style: normalizeStyle([{ "height": "170px" }, $options.headerBackground]),
              class: normalizeClass({
                "relative-position": _ctx.$q.dark.mode,
                "": !_ctx.$q.dark.mode
              })
            }, [
              this.$q.dark.mode ? (openBlock(), createElementBlock("div", _hoisted_2)) : createCommentVNode("", true)
            ], 6),
            $setup.MenuStore.data_info[$data.slug] ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createBaseVNode("div", {
                class: normalizeClass(["row items-center q-pl-md q-pr-md q-pt-sm curve2 relative-position", {
                  "bg-mydark text-white": _ctx.$q.dark.mode,
                  "bg-white text-dark": !_ctx.$q.dark.mode
                }]),
                style: { "margin-top": "-20px" }
              }, [
                createBaseVNode("div", _hoisted_3, [
                  createBaseVNode("div", _hoisted_4, toDisplayString($setup.MenuStore.data_info[$data.slug].restaurant_name), 1)
                ]),
                createBaseVNode("div", _hoisted_5, [
                  $setup.StoreOpen.loading ? (openBlock(), createBlock(QSkeleton, {
                    key: 0,
                    type: "text",
                    style: { "width": "40px" }
                  })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    $setup.StoreOpen.store_close ? (openBlock(), createElementBlock("span", _hoisted_6, toDisplayString(_ctx.$t("Close")), 1)) : (openBlock(), createElementBlock("span", _hoisted_7, toDisplayString(_ctx.$t("Open")), 1))
                  ], 64))
                ]),
                createBaseVNode("div", _hoisted_8, [
                  createVNode(QBtn, {
                    color: _ctx.$q.dark.mode ? "grey600" : "mygrey",
                    "text-color": _ctx.$q.dark.mode ? "grey300" : "dark",
                    "icon-right": "las la-angle-right",
                    label: _ctx.$t("INFO"),
                    size: "12px",
                    unelevated: "",
                    "no-caps": "",
                    dense: "",
                    class: "radius10 q-pl-sm",
                    to: {
                      name: "info",
                      query: {
                        slug: this.slug
                      }
                    }
                  }, null, 8, ["color", "text-color", "label", "to"])
                ])
              ], 2),
              createBaseVNode("div", _hoisted_9, [
                createBaseVNode("div", _hoisted_10, [
                  $setup.MenuStore.data_info[$data.slug].cuisine ? (openBlock(), createBlock(QChip, {
                    key: 0,
                    dense: "",
                    color: "transparent",
                    "text-color": _ctx.$q.dark.mode ? "secondary" : "grey-4",
                    class: "q-pa-none col-3",
                    "icon-right": "fiber_manual_record"
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("span", _hoisted_11, toDisplayString($setup.MenuStore.data_info[$data.slug].cuisine[0]), 1)
                    ]),
                    _: 1
                  }, 8, ["text-color"])) : createCommentVNode("", true),
                  createVNode(QChip, {
                    dense: "",
                    color: "transparent",
                    "text-color": "primary",
                    class: "q-pa-none col",
                    icon: "las la-map-marker-alt"
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("span", _hoisted_12, toDisplayString($setup.MenuStore.data_info[$data.slug].address), 1)
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_13, [
                  createBaseVNode("div", {
                    onClick: _cache[1] || (_cache[1] = ($event) => this.$router.push({
                      name: "storereview",
                      query: { slug: this.slug }
                    }))
                  }, [
                    createVNode(QChip, {
                      size: "sm",
                      color: "secondary",
                      "text-color": "secondary",
                      icon: "star",
                      class: "no-padding transparent cursor-pointer"
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("span", _hoisted_14, [
                          createBaseVNode("span", {
                            class: normalizeClass(["text-weight-bold", {
                              "text-grey300": _ctx.$q.dark.mode,
                              "text-dark": !_ctx.$q.dark.mode
                            }])
                          }, toDisplayString($setup.MenuStore.data_info[$data.slug].ratings), 3),
                          createTextVNode(" +" + toDisplayString($setup.MenuStore.data_info[$data.slug].review_count) + " " + toDisplayString(_ctx.$t("ratings")), 1)
                        ]),
                        createVNode(QIcon, {
                          name: "las la-angle-right",
                          color: "dark"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  $setup.MenuStore.data_charge_type[$data.slug] ? (openBlock(), createBlock(QChip, {
                    key: 0,
                    size: "sm",
                    color: "secondary",
                    "text-color": "secondary",
                    icon: "las la-clock",
                    class: "no-padding transparent cursor-pointer"
                  }, {
                    default: withCtx(() => [
                      $setup.MenuStore.data_estimation[$data.slug] ? (openBlock(), createElementBlock("span", _hoisted_15, [
                        $setup.MenuStore.data_estimation[$data.slug][$setup.DeliveryschedStore.transaction_type] ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                          $setup.MenuStore.data_estimation[$data.slug][$setup.DeliveryschedStore.transaction_type][$setup.MenuStore.data_charge_type[$data.slug]] ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                            createTextVNode(toDisplayString($setup.MenuStore.data_estimation[$data.slug][$setup.DeliveryschedStore.transaction_type][$setup.MenuStore.data_charge_type[$data.slug]].estimation) + " " + toDisplayString(_ctx.$t("min")), 1)
                          ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                            createTextVNode(toDisplayString(_ctx.$t("N/A")), 1)
                          ], 64))
                        ], 64)) : createCommentVNode("", true)
                      ])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  $setup.MenuStore.data_distance[$data.slug] ? (openBlock(), createElementBlock("div", _hoisted_16, [
                    createVNode(QChip, {
                      size: "sm",
                      color: "secondary",
                      "text-color": "secondary",
                      icon: "las la-map-marker",
                      class: "no-padding transparent cursor-pointer"
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("span", _hoisted_17, toDisplayString($setup.MenuStore.data_distance[$data.slug].label), 1)
                      ]),
                      _: 1
                    })
                  ])) : createCommentVNode("", true)
                ]),
                createVNode(QSeparator, { class: "q-mb-sm" }),
                $setup.StoreOpen.store_close ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(["q-pa-md text-center q-mb-sm radius8", {
                    "bg-grey600 text-grey300": _ctx.$q.dark.mode,
                    "bg-yellow": !_ctx.$q.dark.mode
                  }])
                }, [
                  createBaseVNode("div", _hoisted_18, toDisplayString(_ctx.$t("Store is close")), 1),
                  createBaseVNode("div", _hoisted_19, toDisplayString($setup.StoreOpen.message), 1),
                  createVNode(QBtn, {
                    flat: "",
                    color: _ctx.$q.dark.mode ? "secondary" : "blue",
                    "no-caps": "",
                    label: _ctx.$t("Schedule Order"),
                    dense: "",
                    size: "sm",
                    onClick: _cache[2] || (_cache[2] = ($event) => this.$refs.delivery_sched.showSched(true))
                  }, null, 8, ["color", "label"])
                ], 2)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  $setup.DeliveryschedStore.data[$setup.DeliveryschedStore.transaction_type] ? (openBlock(), createElementBlock("div", _hoisted_20, [
                    createBaseVNode("div", _hoisted_21, [
                      createTextVNode(toDisplayString($setup.DeliveryschedStore.data[$setup.DeliveryschedStore.transaction_type].service_name) + " ", 1),
                      createBaseVNode("span", _hoisted_22, toDisplayString($options.getEstimation), 1)
                    ]),
                    createBaseVNode("div", _hoisted_23, [
                      createVNode(QBtn, {
                        onClick: _cache[3] || (_cache[3] = ($event) => this.$refs.delivery_sched.showSched(true)),
                        label: _ctx.$t("Change"),
                        unelevated: "",
                        flat: "",
                        "no-caps": "",
                        color: "primary",
                        dense: ""
                      }, null, 8, ["label"])
                    ]),
                    $setup.MenuStore.isBookingEnabled ? (openBlock(), createElementBlock("div", _hoisted_24, [
                      createVNode(QBtn, {
                        color: _ctx.$q.dark.mode ? "grey600" : "green-5",
                        "text-color": _ctx.$q.dark.mode ? "grey300" : "white",
                        "icon-right": "las la-angle-right",
                        label: _ctx.$t("BOOKING"),
                        size: "sm",
                        unelevated: "",
                        "no-caps": "",
                        dense: "",
                        class: "radius10 q-pl-sm",
                        to: "/store/booking"
                      }, null, 8, ["color", "text-color", "label"])
                    ])) : createCommentVNode("", true)
                  ])) : createCommentVNode("", true)
                ], 64)),
                createVNode(_component_MerchantPromoSlide, {
                  ref: "merchantPromoSlide",
                  merchant_id: $setup.MenuStore.data_info[$data.slug].merchant_id
                }, null, 8, ["merchant_id"]),
                $setup.DataStore.category_use_slide ? (openBlock(), createElementBlock("div", _hoisted_25, [
                  createBaseVNode("div", _hoisted_26, [
                    createVNode(QBtn, {
                      outline: "",
                      color: "grey-5",
                      icon: "search",
                      size: "md",
                      onClick: $options.goSearch
                    }, null, 8, ["onClick"])
                  ]),
                  createBaseVNode("div", _hoisted_27, [
                    createVNode(_component_CategorySlide, {
                      slug: $data.slug,
                      ref: "category_slide",
                      onAfterCategoryselect: $options.afterCategoryselect
                    }, null, 8, ["slug", "onAfterCategoryselect"])
                  ])
                ])) : (openBlock(), createElementBlock("div", _hoisted_28, [
                  createBaseVNode("div", _hoisted_29, [
                    createVNode(QInput, {
                      modelValue: _ctx.q,
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.q = $event),
                      label: _ctx.$t("Search food and restaurants"),
                      outlined: "",
                      "lazy-rules": "",
                      "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
                      "label-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                      borderless: "",
                      class: "input-borderless",
                      dense: "",
                      readonly: "",
                      onClick: $options.goSearch
                    }, {
                      prepend: withCtx(() => [
                        createVNode(QIcon, {
                          name: "eva-search-outline",
                          size: "sm"
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "label", "bg-color", "label-color", "onClick"])
                  ]),
                  createBaseVNode("div", _hoisted_30, [
                    createVNode(QBtn, {
                      color: "secondary",
                      unelevated: "",
                      dense: "",
                      "no-caps": "",
                      class: "fit rows items-center",
                      flat: "",
                      onClick: _cache[5] || (_cache[5] = ($event) => this.$refs.categories_modal.modal = !this.$refs.categories_modal.modal)
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_31, toDisplayString(_ctx.$t("Categories")), 1),
                        createVNode(QIcon, {
                          name: "las la-angle-down",
                          color: "dark",
                          size: "14px"
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]))
              ]),
              createVNode(QSpace, { class: "q-ma-md" }),
              $setup.MenuStore.loading_menu ? (openBlock(), createBlock(QList, { key: 0 }, {
                default: withCtx(() => [
                  (openBlock(), createElementBlock(Fragment, null, renderList(4, (itemloading) => {
                    return createVNode(QItem, { key: itemloading }, {
                      default: withCtx(() => [
                        createVNode(QItemSection, { avatar: "" }, {
                          default: withCtx(() => [
                            createVNode(QSkeleton, {
                              width: "70px",
                              height: "70px"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(QItemSection, null, {
                          default: withCtx(() => [
                            createVNode(QItemLabel, { caption: "" }, {
                              default: withCtx(() => [
                                createVNode(QSkeleton, {
                                  type: "text",
                                  style: { "width": "50%" }
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(QItemLabel, null, {
                              default: withCtx(() => [
                                createVNode(QSkeleton, { type: "text" })
                              ]),
                              _: 1
                            }),
                            createVNode(QItemLabel, { caption: "" }, {
                              default: withCtx(() => [
                                createVNode(QSkeleton, { type: "text" })
                              ]),
                              _: 1
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
              })) : createCommentVNode("", true),
              $setup.MenuStore.data_category[$data.slug] ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList($setup.MenuStore.data_category[$data.slug], (category, index) => {
                return openBlock(), createElementBlock(Fragment, { key: category }, [
                  createBaseVNode("div", _hoisted_32, [
                    createBaseVNode("div", {
                      id: category.category_uiid,
                      class: "text-weight-medium text-h6 no-margin line-normal"
                    }, toDisplayString(category.category_name), 9, _hoisted_33),
                    index <= 0 ? (openBlock(), createElementBlock("div", _hoisted_34, [
                      createVNode(QBtn, {
                        flat: "",
                        color: "grey-5",
                        icon: $setup.DataStorePersisted.menu_list_type == "list" ? "grid_view" : "o_view_agenda",
                        onClick: _cache[6] || (_cache[6] = ($event) => $setup.DataStorePersisted.menu_list_type = $setup.DataStorePersisted.menu_list_type == "list" ? "grid" : "list")
                      }, null, 8, ["icon"])
                    ])) : createCommentVNode("", true)
                  ]),
                  $setup.DataStorePersisted.menu_list_type == "grid" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    _hoisted_35,
                    createBaseVNode("div", _hoisted_36, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(category.items, (items_id) => {
                        return openBlock(), createElementBlock(Fragment, { key: items_id }, [
                          $setup.MenuStore.data_items[$data.slug] ? (openBlock(), createElementBlock("div", _hoisted_37, [
                            createBaseVNode("div", _hoisted_38, [
                              !$options.isItemAvailable(items_id, category.cat_id) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                                createBaseVNode("div", {
                                  class: normalizeClass(["light-dimmedx absolute-top fit flex flex-center", {
                                    "dimmed ": _ctx.$q.dark.mode,
                                    "light-dimmed ": !_ctx.$q.dark.mode
                                  }]),
                                  style: { "z-index": "1" }
                                }, null, 2),
                                createBaseVNode("div", {
                                  class: normalizeClass(["text-dark absolute-top fit flex flex-center", {
                                    "text-white": _ctx.$q.dark.mode,
                                    "text-dark ": !_ctx.$q.dark.mode
                                  }]),
                                  style: { "z-index": "2" }
                                }, toDisplayString(_ctx.$t("Not available")), 3)
                              ], 64)) : createCommentVNode("", true),
                              createBaseVNode("div", {
                                class: "relative-position cursor-pointer",
                                onClick: withModifiers(($event) => $options.showItemdetails(
                                  category.cat_id,
                                  $setup.MenuStore.data_items[$data.slug][items_id].item_uuid
                                ), ["stop"])
                              }, [
                                createVNode(QImg, {
                                  src: $setup.MenuStore.data_items[$data.slug][items_id].url_image,
                                  "placeholder-src": "placeholder.png",
                                  lazy: "",
                                  fit: "cover",
                                  style: { "height": "100px", "width": "100%", "border-top-left-radius": "1rem", "border-top-right-radius": "1rem" },
                                  class: "radius8",
                                  "spinner-color": "secondary",
                                  "spinner-size": "sm"
                                }, null, 8, ["src"]),
                                createBaseVNode("div", _hoisted_40, [
                                  $setup.MenuStore.data_items[$data.slug][items_id].dish ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList($setup.MenuStore.data_items[$data.slug][items_id].dish, (dish_id) => {
                                    return openBlock(), createElementBlock(Fragment, { key: dish_id }, [
                                      $setup.MenuStore.dish[dish_id] ? (openBlock(), createBlock(QAvatar, {
                                        key: 0,
                                        size: "md",
                                        style: { "border": "2px solid white" },
                                        class: "bg-yellow-9"
                                      }, {
                                        default: withCtx(() => [
                                          createBaseVNode("img", {
                                            src: $setup.MenuStore.dish[dish_id].url_image
                                          }, null, 8, _hoisted_41)
                                        ]),
                                        _: 2
                                      }, 1024)) : createCommentVNode("", true)
                                    ], 64);
                                  }), 128)) : createCommentVNode("", true)
                                ]),
                                createBaseVNode("div", _hoisted_42, [
                                  createVNode(QBtn, {
                                    round: "",
                                    color: _ctx.$q.dark.mode ? "green-13" : "dark",
                                    icon: "add",
                                    unelevated: "",
                                    size: "sm",
                                    onClick: withModifiers(($event) => $options.showItemdetails(
                                      category.cat_id,
                                      $setup.MenuStore.data_items[$data.slug][items_id].item_uuid
                                    ), ["stop"]),
                                    disable: !$options.isItemAvailable(items_id, category.cat_id)
                                  }, null, 8, ["color", "onClick", "disable"])
                                ])
                              ], 8, _hoisted_39),
                              createBaseVNode("div", _hoisted_43, [
                                createBaseVNode("div", _hoisted_44, [
                                  createBaseVNode("div", _hoisted_45, [
                                    createBaseVNode("span", {
                                      innerHTML: $setup.MenuStore.data_items[$data.slug][items_id].item_name
                                    }, null, 8, _hoisted_46)
                                  ])
                                ]),
                                $setup.MenuStore.data_items[$data.slug][items_id].total_allergens ? (openBlock(), createElementBlock("div", _hoisted_47, [
                                  createVNode(QBtn, {
                                    round: "",
                                    unelevated: "",
                                    color: "mygrey",
                                    "text-color": "dark",
                                    size: "sm",
                                    icon: "o_info",
                                    onClick: withModifiers(($event) => $options.showAllergens(
                                      $setup.MenuStore.data_info[$data.slug].merchant_id,
                                      $setup.MenuStore.data_items[$data.slug][items_id].item_id
                                    ), ["stop"])
                                  }, null, 8, ["onClick"])
                                ])) : createCommentVNode("", true)
                              ]),
                              createBaseVNode("div", _hoisted_48, [
                                createBaseVNode("span", {
                                  innerHTML: $setup.MenuStore.data_items[$data.slug][items_id].item_description
                                }, null, 8, _hoisted_49)
                              ]),
                              createBaseVNode("div", _hoisted_50, [
                                createBaseVNode("div", _hoisted_51, [
                                  $setup.MenuStore.data_items[$data.slug][items_id].price ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                                    $setup.MenuStore.data_items[$data.slug][items_id].price[0] ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                                      $setup.MenuStore.data_items[$data.slug][items_id].price[0].discount > 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                                        createTextVNode(toDisplayString($setup.MenuStore.data_items[$data.slug][items_id].price[0].pretty_price_after_discount), 1)
                                      ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                                        createTextVNode(toDisplayString($setup.MenuStore.data_items[$data.slug][items_id].price[0].pretty_price), 1)
                                      ], 64))
                                    ], 64)) : createCommentVNode("", true)
                                  ], 64)) : createCommentVNode("", true)
                                ]),
                                createBaseVNode("div", _hoisted_52, [
                                  createVNode(_component_FavsItem, {
                                    ref_for: true,
                                    ref: "favs",
                                    layout: 3,
                                    item_token: $setup.MenuStore.data_items[$data.slug][items_id].item_uuid,
                                    cat_id: category.cat_id,
                                    active: $options.itemsFav(
                                      $setup.MenuStore.data_items[$data.slug][items_id].item_id
                                    ),
                                    onAfterSavefav: $options.afterSavefavItem
                                  }, null, 8, ["item_token", "cat_id", "active", "onAfterSavefav"])
                                ])
                              ])
                            ])
                          ])) : createCommentVNode("", true)
                        ], 64);
                      }), 128))
                    ])
                  ], 64)) : (openBlock(), createBlock(QList, { key: 1 }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(category.items, (items_id) => {
                        return openBlock(), createBlock(QItem, {
                          key: items_id,
                          clickable: "",
                          class: "relative-position"
                        }, {
                          default: withCtx(() => [
                            $setup.MenuStore.data_items[$data.slug] ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                              $setup.MenuStore.data_items[$data.slug][items_id] ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                                !$options.isItemAvailable(items_id, category.cat_id) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                                  createBaseVNode("div", {
                                    class: normalizeClass(["absolute-top fit flex flex-center", {
                                      "dimmed ": _ctx.$q.dark.mode,
                                      "light-dimmed ": !_ctx.$q.dark.mode
                                    }])
                                  }, null, 2),
                                  createBaseVNode("div", {
                                    class: normalizeClass(["text-dark absolute-center", {
                                      "text-white": _ctx.$q.dark.mode,
                                      "text-dark ": !_ctx.$q.dark.mode
                                    }])
                                  }, toDisplayString(_ctx.$t("Not available")), 3)
                                ], 64)) : createCommentVNode("", true),
                                createVNode(QItemSection, {
                                  avatar: "",
                                  onClick: withModifiers(($event) => $options.showItemdetails(
                                    category.cat_id,
                                    $setup.MenuStore.data_items[$data.slug][items_id].item_uuid
                                  ), ["stop"])
                                }, {
                                  default: withCtx(() => [
                                    createVNode(QImg, {
                                      src: $setup.MenuStore.data_items[$data.slug][items_id].url_image,
                                      "placeholder-src": "placeholder.png",
                                      lazy: "",
                                      fit: "cover",
                                      style: { "height": "80px", "width": "80px" },
                                      class: "radius8",
                                      "spinner-color": "secondary",
                                      "spinner-size": "sm"
                                    }, null, 8, ["src"])
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"]),
                                createVNode(QItemSection, {
                                  onClick: withModifiers(($event) => $options.showItemdetails(
                                    category.cat_id,
                                    $setup.MenuStore.data_items[$data.slug][items_id].item_uuid
                                  ), ["stop"])
                                }, {
                                  default: withCtx(() => [
                                    createVNode(QItemLabel, null, {
                                      default: withCtx(() => [
                                        createBaseVNode("div", _hoisted_53, [
                                          createBaseVNode("span", {
                                            innerHTML: $setup.MenuStore.data_items[$data.slug][items_id].item_name
                                          }, null, 8, _hoisted_54)
                                        ]),
                                        createBaseVNode("div", _hoisted_55, [
                                          createBaseVNode("span", {
                                            innerHTML: $setup.MenuStore.data_items[$data.slug][items_id].item_description
                                          }, null, 8, _hoisted_56)
                                        ]),
                                        $setup.MenuStore.data_items[$data.slug][items_id].dish ? (openBlock(), createElementBlock("div", _hoisted_57, [
                                          (openBlock(true), createElementBlock(Fragment, null, renderList($setup.MenuStore.data_items[$data.slug][items_id].dish, (dish_id) => {
                                            return openBlock(), createElementBlock(Fragment, { key: dish_id }, [
                                              $setup.MenuStore.dish[dish_id] ? (openBlock(), createBlock(QAvatar, {
                                                key: 0,
                                                size: "md",
                                                style: { "border": "2px solid white" },
                                                class: "bg-yellow-9"
                                              }, {
                                                default: withCtx(() => [
                                                  createBaseVNode("img", {
                                                    src: $setup.MenuStore.dish[dish_id].url_image
                                                  }, null, 8, _hoisted_58)
                                                ]),
                                                _: 2
                                              }, 1024)) : createCommentVNode("", true)
                                            ], 64);
                                          }), 128))
                                        ])) : createCommentVNode("", true),
                                        $setup.MenuStore.data_items[$data.slug][items_id].price ? (openBlock(), createElementBlock("div", _hoisted_59, [
                                          (openBlock(true), createElementBlock(Fragment, null, renderList($setup.MenuStore.data_items[$data.slug][items_id].price, (price) => {
                                            return openBlock(), createElementBlock(Fragment, { key: price }, [
                                              price.discount > 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                                                createTextVNode(toDisplayString(price.size_name) + " ", 1),
                                                createBaseVNode("span", _hoisted_60, toDisplayString(price.pretty_price), 1),
                                                createTextVNode(" " + toDisplayString(price.pretty_price_after_discount), 1)
                                              ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                                                createTextVNode(toDisplayString(price.size_name) + " " + toDisplayString(price.pretty_price), 1)
                                              ], 64)),
                                              _hoisted_61
                                            ], 64);
                                          }), 128))
                                        ])) : createCommentVNode("", true)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"]),
                                createVNode(QItemSection, {
                                  side: "",
                                  class: "row items-stretch"
                                }, {
                                  default: withCtx(() => [
                                    createBaseVNode("div", _hoisted_62, [
                                      createBaseVNode("div", _hoisted_63, [
                                        createVNode(_component_FavsItem, {
                                          ref_for: true,
                                          ref: "favs",
                                          layout: 3,
                                          item_token: $setup.MenuStore.data_items[$data.slug][items_id].item_uuid,
                                          cat_id: category.cat_id,
                                          active: $options.itemsFav(
                                            $setup.MenuStore.data_items[$data.slug][items_id].item_id
                                          ),
                                          onAfterSavefav: $options.afterSavefavItem
                                        }, null, 8, ["item_token", "cat_id", "active", "onAfterSavefav"])
                                      ]),
                                      $setup.MenuStore.data_items[$data.slug][items_id].total_allergens ? (openBlock(), createElementBlock("div", _hoisted_64, [
                                        createVNode(QBtn, {
                                          round: "",
                                          unelevated: "",
                                          color: "mygrey",
                                          "text-color": "dark",
                                          size: "sm",
                                          icon: "o_info",
                                          onClick: withModifiers(($event) => $options.showAllergens(
                                            $setup.MenuStore.data_info[$data.slug].merchant_id,
                                            $setup.MenuStore.data_items[$data.slug][items_id].item_id
                                          ), ["stop"])
                                        }, null, 8, ["onClick"])
                                      ])) : createCommentVNode("", true),
                                      createBaseVNode("div", _hoisted_65, [
                                        createVNode(QBtn, {
                                          round: "",
                                          unelevated: "",
                                          color: "primary",
                                          "text-color": "white",
                                          size: "sm",
                                          icon: "las la-plus",
                                          onClick: withModifiers(($event) => $options.showItemdetails(
                                            category.cat_id,
                                            $setup.MenuStore.data_items[$data.slug][items_id].item_uuid
                                          ), ["stop"]),
                                          disable: !$options.isItemAvailable(items_id, category.cat_id)
                                        }, null, 8, ["onClick", "disable"])
                                      ])
                                    ])
                                  ]),
                                  _: 2
                                }, 1024)
                              ], 64)) : createCommentVNode("", true)
                            ], 64)) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 2
                  }, 1024)),
                  createVNode(QSpace, { class: "q-pa-sm" })
                ], 64);
              }), 128)) : createCommentVNode("", true)
            ], 64)) : createCommentVNode("", true),
            createVNode(_component_CategoriesModal, {
              ref: "categories_modal",
              slug: $data.slug,
              onAfterCategoryselect: $options.afterCategoryselect
            }, null, 8, ["slug", "onAfterCategoryselect"]),
            createVNode(_component_ItemDetails, {
              ref: "item_details",
              slug: $data.slug,
              money_config: $setup.MenuStore.money_config,
              currency_code: $setup.DataStorePersisted.use_currency_code,
              onAfterAdditems: $options.afterAdditems
            }, null, 8, ["slug", "money_config", "currency_code", "onAfterAdditems"]),
            createVNode(_component_ItemDetailsCheckbox, {
              ref: "item_details2",
              slug: $data.slug,
              money_config: $setup.MenuStore.money_config,
              currency_code: $setup.DataStorePersisted.use_currency_code,
              onAfterAdditems: $options.afterAdditems
            }, null, 8, ["slug", "money_config", "currency_code", "onAfterAdditems"]),
            createVNode(QPageScroller, {
              position: "bottom-right",
              "scroll-offset": 150,
              offset: [18, 18]
            }, {
              default: withCtx(() => [
                createVNode(QBtn, {
                  fab: "",
                  icon: "keyboard_arrow_up",
                  color: _ctx.$q.dark.mode ? "grey600" : "mygrey",
                  "text-color": _ctx.$q.dark.mode ? "grey300" : "dark",
                  dense: "",
                  padding: "3px"
                }, null, 8, ["color", "text-color"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        $setup.CartStore.hasItem && !$setup.CartStore.cart_loading ? (openBlock(), createBlock(QFooter, {
          key: 0,
          reveal: "",
          class: "bg-primary q-pl-md q-pr-md q-pb-sm q-pt-sm text-dark"
        }, {
          default: withCtx(() => [
            createVNode(QBtn, {
              to: "/cart",
              loading: $setup.CartStore.cart_loading,
              disable: $setup.StoreOpen.store_close,
              unelevated: "",
              color: "primary",
              "text-color": "white",
              "no-caps": "",
              class: "radius10 fit"
            }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_66, [
                  createBaseVNode("div", _hoisted_67, toDisplayString(_ctx.$t("View Order")), 1),
                  createBaseVNode("div", _hoisted_68, toDisplayString($setup.CartStore.cart_subtotal.value), 1)
                ])
              ]),
              _: 1
            }, 8, ["loading", "disable"])
          ]),
          _: 1
        })) : createCommentVNode("", true)
      ]),
      _: 1
    }, 8, ["onRefresh"]),
    createVNode(_component_DeliverySched, {
      ref: "delivery_sched",
      slug: $data.slug,
      onAfterSavetrans: $options.afterSavetrans
    }, null, 8, ["slug", "onAfterSavetrans"]),
    createVNode(_component_AllergensInformation, { ref: "allergens" }, null, 512),
    $setup.MenuStore.data_info[$data.slug] ? (openBlock(), createBlock(_component_ComponentsRealtime, {
      key: 0,
      ref: "realtime",
      getevent: "cart",
      subscribe_to: $setup.MenuStore.data_info[$data.slug].merchant_uuid,
      onAfterReceive: $options.afterReceive
    }, null, 8, ["subscribe_to", "onAfterReceive"])) : createCommentVNode("", true)
  ], 64);
}
var MenuPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "MenuPage.vue"]]);
export { MenuPage as default };
//# sourceMappingURL=data:application/json;base64,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LGtCQUFVLDZCQUR4Q0MsWUFzQlc7QUFBQTtVQXBCVDtBQUFBLFVBQ0EsT0FBTTtBQUFBOzJCQUVOLE1BZ0JRO0FBQUEsWUFoQlJELFlBZ0JRO0FBQUEsY0FmTixJQUFHO0FBQUEsY0FDRixTQUFTLE9BQVMsVUFBQztBQUFBLGNBQ25CLFNBQVMsT0FBUyxVQUFDO0FBQUEsY0FDcEI7QUFBQSxjQUNBLE9BQU07QUFBQSxjQUNOLGNBQVc7QUFBQSxjQUNYO0FBQUEsY0FDQSxPQUFNO0FBQUE7K0JBRU4sTUFLTTtBQUFBLGdCQUxORCxnQkFLTSxPQUxOLGFBS007QUFBQSxrQkFKSkEsZ0JBQWdELE9BQWhELGFBQWdEUyxnQkFBekIsS0FBRTtBQUFBLGtCQUN6QlQsZ0JBRU0sT0FGTixhQUVNUyxnQkFERCxpQkFBVSxjQUFjLEtBQUs7QUFBQTs7Ozs7Ozs7OztJQU8xQ1IsWUFJRTtBQUFBLE1BSEEsS0FBSTtBQUFBLE1BQ0gsTUFBTSxNQUFJO0FBQUEsTUFDVixrQkFBaUIsU0FBYztBQUFBO0lBRWxDQSxZQUE2RCxtQ0FBdkMsS0FBSSxZQUFXO0FBQUEsSUFFckIsT0FBUyxVQUFDLFVBQVUsTUFBSSxzQkFDdENDLFlBTXFCO0FBQUE7TUFMbkIsS0FBSTtBQUFBLE1BQ0osVUFBUztBQUFBLE1BQ1IsY0FBYyxPQUFTLFVBQUMsVUFBVSxZQUFNO0FBQUEsTUFDeEMsZ0JBQWUsU0FBWTtBQUFBIiwibmFtZXMiOlsiZGF0YSIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfY3JlYXRlVk5vZGUiLCJfY3JlYXRlQmxvY2siLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX0ZyYWdtZW50IiwiX2NyZWF0ZVRleHRWTm9kZSIsIl9ub3JtYWxpemVTdHlsZSIsIl9ub3JtYWxpemVDbGFzcyIsIl9vcGVuQmxvY2siLCJfdG9EaXNwbGF5U3RyaW5nIiwiX3dpdGhNb2RpZmllcnMiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc3RvcmVzL1N0b3JlT3Blbi5qcyIsIi4uLy4uLy4uL3NyYy9wYWdlcy9NZW51L01lbnVQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWZpbmVTdG9yZSB9IGZyb20gXCJwaW5pYVwiO1xuaW1wb3J0IEFQSWludGVyZmFjZSBmcm9tIFwic3JjL2FwaS9BUElpbnRlcmZhY2VcIjtcblxuZXhwb3J0IGNvbnN0IHVzZVN0b3JlT3BlbiA9IGRlZmluZVN0b3JlKFwic3RvcmVfb3BlblwiLCB7XG4gIHN0YXRlOiAoKSA9PiAoe1xuICAgIGxvYWRpbmc6IHRydWUsXG4gICAgbWVzc2FnZTogW10sXG4gICAgc3RvcmVfY2xvc2U6IGZhbHNlLFxuICAgIG5leHRfb3BlbmluZzogXCJcIixcbiAgfSksXG4gIGFjdGlvbnM6IHtcbiAgICBjaGVja1N0b3JlT3BlbigpIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICBjb25zdCAkY2FydFVpaWQgPSBBUElpbnRlcmZhY2UuZ2V0U3RvcmFnZShcImNhcnRfdXVpZFwiKTtcbiAgICAgIEFQSWludGVyZmFjZS5jaGVja1N0b3JlT3BlbigkY2FydFVpaWQpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5tZXNzYWdlID0gZGF0YS5tc2c7XG4gICAgICAgICAgaWYgKGRhdGEuZGV0YWlscy5tZXJjaGFudF9vcGVuX3N0YXR1cyA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JlX2Nsb3NlID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdG9yZV9jbG9zZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge30pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgY2hlY2tTdG9yZU9wZW4yKGRhdGEpIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG5cbiAgICAgIGxldCBDaG9vc2VuRGVsaXZlcnkgPSBBUElpbnRlcmZhY2UuZ2V0U3RvcmFnZShcImNob29zZW5fZGVsaXZlcnlcIik7XG5cbiAgICAgIEFQSWludGVyZmFjZS5mZXRjaERhdGEoXCJjaGVja1N0b3JlT3BlbjJcIiwge1xuICAgICAgICBzbHVnOiBkYXRhLFxuICAgICAgICBjaG9vc2VuX2RlbGl2ZXJ5OiBDaG9vc2VuRGVsaXZlcnksXG4gICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMubWVzc2FnZSA9IGRhdGEubXNnO1xuXG4gICAgICAgICAgdGhpcy5uZXh0X29wZW5pbmcgPSBkYXRhLmRldGFpbHMubmV4dF9vcGVuaW5nO1xuICAgICAgICAgIGlmIChkYXRhLmRldGFpbHMubWVyY2hhbnRfb3Blbl9zdGF0dXMgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5zdG9yZV9jbG9zZSA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmVfY2xvc2UgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZGF0YS5kZXRhaWxzLnRpbWVfYWxyZWFkeV9wYXNzZWQpIHtcbiAgICAgICAgICAgIEFQSWludGVyZmFjZS5zZXRTdG9yYWdlKFwiY2hvb3Nlbl9kZWxpdmVyeVwiLCBcIlwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5tZXNzYWdlID0gZXJyb3I7XG4gICAgICAgICAgdGhpcy5zdG9yZV9jbG9zZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5uZXh0X29wZW5pbmcgPSBcIlwiO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuICB9LFxufSk7XG4iLCI8dGVtcGxhdGU+XG4gIDxxLXB1bGwtdG8tcmVmcmVzaCBAcmVmcmVzaD1cInJlZnJlc2hcIj5cbiAgICA8cS1oZWFkZXIgOmNsYXNzPVwiY2xhc3NPYmplY3RcIj5cbiAgICAgIDxxLXRvb2xiYXI+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIEBjbGljaz1cIiRyb3V0ZXIuYmFjaygpXCJcbiAgICAgICAgICByb3VuZFxuICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgaWNvbj1cImxhcyBsYS1hbmdsZS1sZWZ0XCJcbiAgICAgICAgICBjbGFzcz1cInEtbXItc21cIlxuICAgICAgICAgIDpjb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5NjAwJyA6ICdteWdyZXknXCJcbiAgICAgICAgICA6dGV4dC1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICdkYXJrJ1wiXG4gICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgIC8+XG4gICAgICAgIDxxLXRvb2xiYXItdGl0bGUgdi1pZj1cImhlYWRlckNoYW5nZUNvbG9yXCIgY2xhc3M9XCJ0ZXh0LXdlaWdodC1ib2xkXCI+XG4gICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJNZW51U3RvcmUuZGF0YV9pbmZvW3NsdWddXCI+XG4gICAgICAgICAgICB7eyBNZW51U3RvcmUuZGF0YV9pbmZvW3NsdWddLnJlc3RhdXJhbnRfbmFtZSB9fVxuICAgICAgICAgIDwvdGVtcGxhdGU+PC9xLXRvb2xiYXItdGl0bGVcbiAgICAgICAgPlxuICAgICAgICA8cS1zcGFjZT48L3Etc3BhY2U+XG4gICAgICAgIDxkaXYgdi1pZj1cIk1lbnVTdG9yZS5kYXRhX2luZm9bc2x1Z11cIj5cbiAgICAgICAgICA8RmF2c1Jlc3RvXG4gICAgICAgICAgICByZWY9XCJmYXZzXCJcbiAgICAgICAgICAgIDpkYXRhPVwiTWVudVN0b3JlLmRhdGFfaW5mb1tzbHVnXVwiXG4gICAgICAgICAgICA6YWN0aXZlPVwiTWVudVN0b3JlLmRhdGFfaW5mb1tzbHVnXS5zYXZlZF9zdG9yZVwiXG4gICAgICAgICAgICA6bWVyY2hhbnRfaWQ9XCJNZW51U3RvcmUuZGF0YV9pbmZvW3NsdWddLm1lcmNoYW50X2lkXCJcbiAgICAgICAgICAgIDpsYXlvdXQ9XCIxXCJcbiAgICAgICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgICAgICBAYWZ0ZXItc2F2ZWZhdj1cImFmdGVyU2F2ZWZhdlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8U2hhcmVDb21wb25lbnRzXG4gICAgICAgICAgICB2LWlmPVwiTWVudVN0b3JlLmRhdGFfaW5mb1tzbHVnXS5zaGFyZVwiXG4gICAgICAgICAgICByZWY9XCJzaGFyZVwiXG4gICAgICAgICAgICA6dGl0bGU9XCJNZW51U3RvcmUuZGF0YV9pbmZvW3NsdWddLnNoYXJlLnRpdGxlXCJcbiAgICAgICAgICAgIDp0ZXh0PVwiTWVudVN0b3JlLmRhdGFfaW5mb1tzbHVnXS5zaGFyZS50ZXh0XCJcbiAgICAgICAgICAgIDp1cmw9XCJNZW51U3RvcmUuZGF0YV9pbmZvW3NsdWddLnNoYXJlLnVybFwiXG4gICAgICAgICAgICA6ZGlhbG9nVGl0bGU9XCJNZW51U3RvcmUuZGF0YV9pbmZvW3NsdWddLnNoYXJlLmRpYWxvZ1RpdGxlXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvcS10b29sYmFyPlxuICAgIDwvcS1oZWFkZXI+XG4gICAgPHEtcGFnZT5cbiAgICAgIDxxLXNjcm9sbC1vYnNlcnZlciBAc2Nyb2xsPVwib25TY3JvbGxcIiAvPlxuXG4gICAgICA8dGVtcGxhdGUgdi1pZj1cIk1lbnVTdG9yZS5sb2FkaW5faW5mb1wiPlxuICAgICAgICA8cS1pbm5lci1sb2FkaW5nXG4gICAgICAgICAgOnNob3dpbmc9XCJ0cnVlXCJcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgbGFiZWwtY2xhc3M9XCJkYXJrXCJcbiAgICAgICAgLz5cbiAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDE3MHB4XCJcbiAgICAgICAgOnN0eWxlPVwiaGVhZGVyQmFja2dyb3VuZFwiXG4gICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAncmVsYXRpdmUtcG9zaXRpb24nOiAkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgJyc6ICEkcS5kYXJrLm1vZGUsXG4gICAgICAgIH1cIlxuICAgICAgPlxuICAgICAgICA8ZGl2IHYtaWY9XCJ0aGlzLiRxLmRhcmsubW9kZVwiIGNsYXNzPVwiYWJzb2x1dGUtdG9wIGZpdCBkaW1tZWRcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8dGVtcGxhdGUgdi1pZj1cIk1lbnVTdG9yZS5kYXRhX2luZm9bc2x1Z11cIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwicm93IGl0ZW1zLWNlbnRlciBxLXBsLW1kIHEtcHItbWQgcS1wdC1zbSBjdXJ2ZTIgcmVsYXRpdmUtcG9zaXRpb25cIlxuICAgICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICdiZy1teWRhcmsgdGV4dC13aGl0ZSc6ICRxLmRhcmsubW9kZSxcbiAgICAgICAgICAgICdiZy13aGl0ZSB0ZXh0LWRhcmsnOiAhJHEuZGFyay5tb2RlLFxuICAgICAgICAgIH1cIlxuICAgICAgICAgIHN0eWxlPVwibWFyZ2luLXRvcDogLTIwcHhcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzcz1cInRleHQtaDYgdGV4dC13ZWlnaHQtbWVkaXVtIG5vLW1hcmdpbiBsaW5lLW5vcm1hbCBlbGxpcHNpc1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt7IE1lbnVTdG9yZS5kYXRhX2luZm9bc2x1Z10ucmVzdGF1cmFudF9uYW1lIH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTNcIj5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiU3RvcmVPcGVuLmxvYWRpbmdcIj5cbiAgICAgICAgICAgICAgPHEtc2tlbGV0b24gdHlwZT1cInRleHRcIiBzdHlsZT1cIndpZHRoOiA0MHB4XCIgLz5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIHYtaWY9XCJTdG9yZU9wZW4uc3RvcmVfY2xvc2VcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9udDEzIHRleHQtZ3JlZW4gdGV4dC13ZWlnaHQtYm9sZFwiXG4gICAgICAgICAgICAgICAgPnt7ICR0KFwiQ2xvc2VcIikgfX08L3NwYW5cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhbiB2LWVsc2UgY2xhc3M9XCJmb250MTMgdGV4dC13ZWlnaHQtYm9sZCB0ZXh0LWdyZWVuXCI+e3tcbiAgICAgICAgICAgICAgICAkdChcIk9wZW5cIilcbiAgICAgICAgICAgICAgfX08L3NwYW4+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXk2MDAnIDogJ215Z3JleSdcIlxuICAgICAgICAgICAgICA6dGV4dC1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICdkYXJrJ1wiXG4gICAgICAgICAgICAgIGljb24tcmlnaHQ9XCJsYXMgbGEtYW5nbGUtcmlnaHRcIlxuICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnSU5GTycpXCJcbiAgICAgICAgICAgICAgc2l6ZT1cIjEycHhcIlxuICAgICAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgICAgY2xhc3M9XCJyYWRpdXMxMCBxLXBsLXNtXCJcbiAgICAgICAgICAgICAgOnRvPVwie1xuICAgICAgICAgICAgICAgIG5hbWU6ICdpbmZvJyxcbiAgICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgICAgc2x1ZzogdGhpcy5zbHVnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInEtcGwtbWQgcS1wci1tZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgaXRlbXMtY2VudGVyIGZvbnQxMiB0ZXh0LWdyZXlcIj5cbiAgICAgICAgICAgIDxxLWNoaXBcbiAgICAgICAgICAgICAgdi1pZj1cIk1lbnVTdG9yZS5kYXRhX2luZm9bc2x1Z10uY3Vpc2luZVwiXG4gICAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICAgIGNvbG9yPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgICA6dGV4dC1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdzZWNvbmRhcnknIDogJ2dyZXktNCdcIlxuICAgICAgICAgICAgICBjbGFzcz1cInEtcGEtbm9uZSBjb2wtM1wiXG4gICAgICAgICAgICAgIGljb24tcmlnaHQ9XCJmaWJlcl9tYW51YWxfcmVjb3JkXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWdyZXlcIj5cbiAgICAgICAgICAgICAgICB7eyBNZW51U3RvcmUuZGF0YV9pbmZvW3NsdWddLmN1aXNpbmVbMF0gfX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9xLWNoaXA+XG5cbiAgICAgICAgICAgIDxxLWNoaXBcbiAgICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgICAgY29sb3I9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgIHRleHQtY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJxLXBhLW5vbmUgY29sXCJcbiAgICAgICAgICAgICAgaWNvbj1cImxhcyBsYS1tYXAtbWFya2VyLWFsdFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1ncmV5IGVsbGlwc2lzIGZpdFwiPnt7XG4gICAgICAgICAgICAgICAgTWVudVN0b3JlLmRhdGFfaW5mb1tzbHVnXS5hZGRyZXNzXG4gICAgICAgICAgICAgIH19PC9zcGFuPlxuICAgICAgICAgICAgPC9xLWNoaXA+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPCEtLSByb3cgLS0+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgQGNsaWNrPVwiXG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgbmFtZTogJ3N0b3JlcmV2aWV3JyxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IHNsdWc6IHRoaXMuc2x1ZyB9LFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxxLWNoaXBcbiAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICB0ZXh0LWNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICBpY29uPVwic3RhclwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJuby1wYWRkaW5nIHRyYW5zcGFyZW50IGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC13ZWlnaHQtbWVkaXVtIHRleHQtZGFyayBmb250MTIgdGV4dC1ncmV5XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGRcIlxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgJ3RleHQtZ3JleTMwMCc6ICRxLmRhcmsubW9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAndGV4dC1kYXJrJzogISRxLmRhcmsubW9kZSxcbiAgICAgICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgICAgICAgID57eyBNZW51U3RvcmUuZGF0YV9pbmZvW3NsdWddLnJhdGluZ3MgfX08L3NwYW5cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICt7eyBNZW51U3RvcmUuZGF0YV9pbmZvW3NsdWddLnJldmlld19jb3VudCB9fVxuICAgICAgICAgICAgICAgICAge3sgJHQoXCJyYXRpbmdzXCIpIH19PC9zcGFuXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxxLWljb24gbmFtZT1cImxhcyBsYS1hbmdsZS1yaWdodFwiIGNvbG9yPVwiZGFya1wiIC8+XG4gICAgICAgICAgICAgIDwvcS1jaGlwPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxxLWNoaXBcbiAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICB0ZXh0LWNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgaWNvbj1cImxhcyBsYS1jbG9ja1wiXG4gICAgICAgICAgICAgIGNsYXNzPVwibm8tcGFkZGluZyB0cmFuc3BhcmVudCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgIHYtaWY9XCJNZW51U3RvcmUuZGF0YV9jaGFyZ2VfdHlwZVtzbHVnXVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LXdlaWdodC1tZWRpdW0gdGV4dC1kYXJrIGZvbnQxMiB0ZXh0LWdyZXkgbGluZS1ub3JtYWxcIlxuICAgICAgICAgICAgICAgIHYtaWY9XCJNZW51U3RvcmUuZGF0YV9lc3RpbWF0aW9uW3NsdWddXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgdi1pZj1cIlxuICAgICAgICAgICAgICAgICAgICBNZW51U3RvcmUuZGF0YV9lc3RpbWF0aW9uW3NsdWddW1xuICAgICAgICAgICAgICAgICAgICAgIERlbGl2ZXJ5c2NoZWRTdG9yZS50cmFuc2FjdGlvbl90eXBlXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICBNZW51U3RvcmUuZGF0YV9lc3RpbWF0aW9uW3NsdWddW1xuICAgICAgICAgICAgICAgICAgICAgICAgRGVsaXZlcnlzY2hlZFN0b3JlLnRyYW5zYWN0aW9uX3R5cGVcbiAgICAgICAgICAgICAgICAgICAgICBdW01lbnVTdG9yZS5kYXRhX2NoYXJnZV90eXBlW3NsdWddXVxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7e1xuICAgICAgICAgICAgICAgICAgICAgIE1lbnVTdG9yZS5kYXRhX2VzdGltYXRpb25bc2x1Z11bXG4gICAgICAgICAgICAgICAgICAgICAgICBEZWxpdmVyeXNjaGVkU3RvcmUudHJhbnNhY3Rpb25fdHlwZVxuICAgICAgICAgICAgICAgICAgICAgIF1bTWVudVN0b3JlLmRhdGFfY2hhcmdlX3R5cGVbc2x1Z11dLmVzdGltYXRpb25cbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAge3sgJHQoXCJtaW5cIikgfX1cbiAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPiB7eyAkdChcIk4vQVwiKSB9fSA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPCEtLSA8cS1pY29uIG5hbWU9XCJsYXMgbGEtYW5nbGUtcmlnaHRcIiBjb2xvcj1cImRhcmtcIiAvPiAtLT5cbiAgICAgICAgICAgIDwvcS1jaGlwPlxuXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHYtaWY9XCJNZW51U3RvcmUuZGF0YV9kaXN0YW5jZVtzbHVnXVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiZm9udDEyIHRleHQtZ3JleSBsaW5lLW5vcm1hbCBjb2wtNFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxxLWNoaXBcbiAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICB0ZXh0LWNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICBpY29uPVwibGFzIGxhLW1hcC1tYXJrZXJcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwibm8tcGFkZGluZyB0cmFuc3BhcmVudCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LXdlaWdodC1tZWRpdW0gdGV4dC1kYXJrIGZvbnQxMiB0ZXh0LWdyZXkgZWxsaXBzaXMgZml0XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7eyBNZW51U3RvcmUuZGF0YV9kaXN0YW5jZVtzbHVnXS5sYWJlbCB9fTwvc3BhblxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC9xLWNoaXA+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxxLXNlcGFyYXRvciBjbGFzcz1cInEtbWItc21cIj48L3Etc2VwYXJhdG9yPlxuXG4gICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJTdG9yZU9wZW4uc3RvcmVfY2xvc2VcIj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3M9XCJxLXBhLW1kIHRleHQtY2VudGVyIHEtbWItc20gcmFkaXVzOFwiXG4gICAgICAgICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICAgICAnYmctZ3JleTYwMCB0ZXh0LWdyZXkzMDAnOiAkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgICAgICAgJ2JnLXllbGxvdyc6ICEkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC13ZWlnaHQtbWVkaXVtIHRleHQtaDUgbGluZS1ub3JtYWxcIj5cbiAgICAgICAgICAgICAgICB7eyAkdChcIlN0b3JlIGlzIGNsb3NlXCIpIH19XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udDEyXCI+e3sgU3RvcmVPcGVuLm1lc3NhZ2UgfX08L2Rpdj5cbiAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICAgIDpjb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdzZWNvbmRhcnknIDogJ2JsdWUnXCJcbiAgICAgICAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ1NjaGVkdWxlIE9yZGVyJylcIlxuICAgICAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJ0aGlzLiRyZWZzLmRlbGl2ZXJ5X3NjaGVkLnNob3dTY2hlZCh0cnVlKVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgPCEtLSBDaGFuZ2UgdHJhbnNhY3Rpb24gYW5kIHRpbWUgLS0+XG4gICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgdi1pZj1cIlxuICAgICAgICAgICAgICAgIERlbGl2ZXJ5c2NoZWRTdG9yZS5kYXRhW0RlbGl2ZXJ5c2NoZWRTdG9yZS50cmFuc2FjdGlvbl90eXBlXVxuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICBjbGFzcz1cInJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHEtbWItc21cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIj5cbiAgICAgICAgICAgICAgICB7e1xuICAgICAgICAgICAgICAgICAgRGVsaXZlcnlzY2hlZFN0b3JlLmRhdGFbRGVsaXZlcnlzY2hlZFN0b3JlLnRyYW5zYWN0aW9uX3R5cGVdXG4gICAgICAgICAgICAgICAgICAgIC5zZXJ2aWNlX25hbWVcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC13ZWlnaHQtbWVkaXVtIGZvbnQxMlwiPlxuICAgICAgICAgICAgICAgICAgPCEtLSBpbiAyMCAtIDMwIG1pbiAtLT5cbiAgICAgICAgICAgICAgICAgIHt7IGdldEVzdGltYXRpb24gfX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICAgIEBjbGljaz1cInRoaXMuJHJlZnMuZGVsaXZlcnlfc2NoZWQuc2hvd1NjaGVkKHRydWUpXCJcbiAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdDaGFuZ2UnKVwiXG4gICAgICAgICAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiTWVudVN0b3JlLmlzQm9va2luZ0VuYWJsZWRcIiBjbGFzcz1cImNvbC0zIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICAgIDpjb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5NjAwJyA6ICdncmVlbi01J1wiXG4gICAgICAgICAgICAgICAgICA6dGV4dC1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICd3aGl0ZSdcIlxuICAgICAgICAgICAgICAgICAgaWNvbi1yaWdodD1cImxhcyBsYS1hbmdsZS1yaWdodFwiXG4gICAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnQk9PS0lORycpXCJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJyYWRpdXMxMCBxLXBsLXNtXCJcbiAgICAgICAgICAgICAgICAgIHRvPVwiL3N0b3JlL2Jvb2tpbmdcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgIDwhLS0gPHEtc2VwYXJhdG9yIGNsYXNzPVwicS1tYi1tZFwiPjwvcS1zZXBhcmF0b3I+IC0tPlxuXG4gICAgICAgICAgPE1lcmNoYW50UHJvbW9TbGlkZVxuICAgICAgICAgICAgcmVmPVwibWVyY2hhbnRQcm9tb1NsaWRlXCJcbiAgICAgICAgICAgIDptZXJjaGFudF9pZD1cIk1lbnVTdG9yZS5kYXRhX2luZm9bc2x1Z10ubWVyY2hhbnRfaWRcIlxuICAgICAgICAgID48L01lcmNoYW50UHJvbW9TbGlkZT5cblxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiRGF0YVN0b3JlLmNhdGVnb3J5X3VzZV9zbGlkZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBpdGVtcy1jZW50ZXIgcS1ndXR0ZXIteC1zbVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTNcIiBzdHlsZT1cIm1heC13aWR0aDogMjAlXCI+XG4gICAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgICBvdXRsaW5lXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cImdyZXktNVwiXG4gICAgICAgICAgICAgICAgICBpY29uPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgICAgICBAY2xpY2s9XCJnb1NlYXJjaFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8Q2F0ZWdvcnlTbGlkZVxuICAgICAgICAgICAgICAgICAgOnNsdWc9XCJzbHVnXCJcbiAgICAgICAgICAgICAgICAgIHJlZj1cImNhdGVnb3J5X3NsaWRlXCJcbiAgICAgICAgICAgICAgICAgIEBhZnRlci1jYXRlZ29yeXNlbGVjdD1cImFmdGVyQ2F0ZWdvcnlzZWxlY3RcIlxuICAgICAgICAgICAgICAgID48L0NhdGVnb3J5U2xpZGU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBpdGVtcy1jZW50ZXIgcS1ndXR0ZXItc21cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicVwiXG4gICAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnU2VhcmNoIGZvb2QgYW5kIHJlc3RhdXJhbnRzJylcIlxuICAgICAgICAgICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICAgICAgICAgIGxhenktcnVsZXNcbiAgICAgICAgICAgICAgICAgIDpiZy1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5NjAwJyA6ICdpbnB1dCdcIlxuICAgICAgICAgICAgICAgICAgOmxhYmVsLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXkzMDAnIDogJ2dyZXknXCJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcmxlc3NcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtYm9yZGVybGVzc1wiXG4gICAgICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICAgICAgcmVhZG9ubHlcbiAgICAgICAgICAgICAgICAgIEBjbGljaz1cImdvU2VhcmNoXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OnByZXBlbmQ+XG4gICAgICAgICAgICAgICAgICAgIDxxLWljb24gbmFtZT1cImV2YS1zZWFyY2gtb3V0bGluZVwiIHNpemU9XCJzbVwiIC8+XG4gICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvcS1pbnB1dD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNFwiPlxuICAgICAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZml0IHJvd3MgaXRlbXMtY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgICAgIEBjbGljaz1cIlxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLmNhdGVnb3JpZXNfbW9kYWwubW9kYWwgPVxuICAgICAgICAgICAgICAgICAgICAgICF0aGlzLiRyZWZzLmNhdGVnb3JpZXNfbW9kYWwubW9kYWxcbiAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInEtbXIteHNcIj57eyAkdChcIkNhdGVnb3JpZXNcIikgfX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxxLWljb24gbmFtZT1cImxhcyBsYS1hbmdsZS1kb3duXCIgY29sb3I9XCJkYXJrXCIgc2l6ZT1cIjE0cHhcIiAvPlxuICAgICAgICAgICAgICAgIDwvcS1idG4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8IS0tIHJvdyAtLT5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPCEtLSBwYWRkaW5nIC0tPlxuXG4gICAgICAgIDxxLXNwYWNlIGNsYXNzPVwicS1tYS1tZFwiPjwvcS1zcGFjZT5cblxuICAgICAgICA8IS0tIE1FTlUgU1RBUlRTIEhFUkUgLS0+XG4gICAgICAgIDwhLS0gPHByZT57eyBNZW51U3RvcmUubW9uZXlfY29uZmlnIH19PC9wcmU+IC0tPlxuXG4gICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiTWVudVN0b3JlLmxvYWRpbmdfbWVudVwiPlxuICAgICAgICAgIDxxLWxpc3Q+XG4gICAgICAgICAgICA8cS1pdGVtIHYtZm9yPVwiaXRlbWxvYWRpbmcgaW4gNFwiIDprZXk9XCJpdGVtbG9hZGluZ1wiPlxuICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgICAgICAgIDxxLXNrZWxldG9uIHdpZHRoPVwiNzBweFwiIGhlaWdodD1cIjcwcHhcIiAvPlxuICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uPlxuICAgICAgICAgICAgICAgICAgPHEtc2tlbGV0b24gdHlwZT1cInRleHRcIiBzdHlsZT1cIndpZHRoOiA1MCVcIiAvPlxuICAgICAgICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8cS1za2VsZXRvbiB0eXBlPVwidGV4dFwiIC8+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uPlxuICAgICAgICAgICAgICAgICAgPHEtc2tlbGV0b24gdHlwZT1cInRleHRcIiAvPlxuICAgICAgICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgPC9xLWxpc3Q+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJNZW51U3RvcmUuZGF0YV9jYXRlZ29yeVtzbHVnXVwiPlxuICAgICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgICAgdi1mb3I9XCIoY2F0ZWdvcnksIGluZGV4KSBpbiBNZW51U3RvcmUuZGF0YV9jYXRlZ29yeVtzbHVnXVwiXG4gICAgICAgICAgICA6a2V5PVwiY2F0ZWdvcnlcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBxLXBsLW1kIHEtcHItbWR4XCI+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICA6aWQ9XCJjYXRlZ29yeS5jYXRlZ29yeV91aWlkXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtd2VpZ2h0LW1lZGl1bSB0ZXh0LWg2IG5vLW1hcmdpbiBsaW5lLW5vcm1hbFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7eyBjYXRlZ29yeS5jYXRlZ29yeV9uYW1lIH19XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJpbmRleCA8PSAwXCI+XG4gICAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICAgICAgICBjb2xvcj1cImdyZXktNVwiXG4gICAgICAgICAgICAgICAgICA6aWNvbj1cIlxuICAgICAgICAgICAgICAgICAgICBEYXRhU3RvcmVQZXJzaXN0ZWQubWVudV9saXN0X3R5cGUgPT0gJ2xpc3QnXG4gICAgICAgICAgICAgICAgICAgICAgPyAnZ3JpZF92aWV3J1xuICAgICAgICAgICAgICAgICAgICAgIDogJ29fdmlld19hZ2VuZGEnXG4gICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiXG4gICAgICAgICAgICAgICAgICAgIERhdGFTdG9yZVBlcnNpc3RlZC5tZW51X2xpc3RfdHlwZSA9XG4gICAgICAgICAgICAgICAgICAgICAgRGF0YVN0b3JlUGVyc2lzdGVkLm1lbnVfbGlzdF90eXBlID09ICdsaXN0J1xuICAgICAgICAgICAgICAgICAgICAgICAgPyAnZ3JpZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJ2xpc3QnXG4gICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiRGF0YVN0b3JlUGVyc2lzdGVkLm1lbnVfbGlzdF90eXBlID09ICdncmlkJ1wiPlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiaGVpZ2h0OiA1cHhcIj48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBpdGVtcy1zdGFydCBxLWNvbC1ndXR0ZXItbWQgcS1wbC1tZCBxLXByLW1kXCI+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiaXRlbXNfaWQgaW4gY2F0ZWdvcnkuaXRlbXNcIiA6a2V5PVwiaXRlbXNfaWRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cIk1lbnVTdG9yZS5kYXRhX2l0ZW1zW3NsdWddXCIgY2xhc3M9XCJjb2wtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9yZGVyLWdyZXl4IHJhZGl1czEwIHJlbGF0aXZlLXBvc2l0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiIWlzSXRlbUF2YWlsYWJsZShpdGVtc19pZCwgY2F0ZWdvcnkuY2F0X2lkKVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxpZ2h0LWRpbW1lZHggYWJzb2x1dGUtdG9wIGZpdCBmbGV4IGZsZXgtY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJ6LWluZGV4OiAxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkaW1tZWQgJzogJHEuZGFyay5tb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdsaWdodC1kaW1tZWQgJzogISRxLmRhcmsubW9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1kYXJrIGFic29sdXRlLXRvcCBmaXQgZmxleCBmbGV4LWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiei1pbmRleDogMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC13aGl0ZSc6ICRxLmRhcmsubW9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1kYXJrICc6ICEkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAkdChcIk5vdCBhdmFpbGFibGVcIikgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJlbGF0aXZlLXBvc2l0aW9uIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljay5zdG9wPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dJdGVtZGV0YWlscyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeS5jYXRfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVudVN0b3JlLmRhdGFfaXRlbXNbc2x1Z11baXRlbXNfaWRdLml0ZW1fdXVpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxxLWltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICA6c3JjPVwiTWVudVN0b3JlLmRhdGFfaXRlbXNbc2x1Z11baXRlbXNfaWRdLnVybF9pbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyLXNyYz1cInBsYWNlaG9sZGVyLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhenlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZml0PVwiY292ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJyYWRpdXM4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3Bpbm5lci1jb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNwaW5uZXItc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhYnNvbHV0ZS10b3AtbGVmdCBmdWxsLXdpZHRoIHEtcGEteHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIk1lbnVTdG9yZS5kYXRhX2l0ZW1zW3NsdWddW2l0ZW1zX2lkXS5kaXNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCJkaXNoX2lkIGluIE1lbnVTdG9yZS5kYXRhX2l0ZW1zW3NsdWddW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtc19pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXS5kaXNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJkaXNoX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIk1lbnVTdG9yZS5kaXNoW2Rpc2hfaWRdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWF2YXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJib3JkZXI6IDJweCBzb2xpZCB3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJiZy15ZWxsb3ctOVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3JjPVwiTWVudVN0b3JlLmRpc2hbZGlzaF9pZF0udXJsX2ltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtYXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhYnNvbHV0ZS1ib3R0b20tcmlnaHQgcS1wYS1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3VuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmVlbi0xMycgOiAnZGFyaydcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJhZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljay5zdG9wPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93SXRlbWRldGFpbHMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5LmNhdF9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVudVN0b3JlLmRhdGFfaXRlbXNbc2x1Z11baXRlbXNfaWRdLml0ZW1fdXVpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRpc2FibGU9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpc0l0ZW1BdmFpbGFibGUoaXRlbXNfaWQsIGNhdGVnb3J5LmNhdF9pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBxLW10LXNtIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMiB0ZXh0LXdlaWdodC1tZWRpdW0gbm8tbWFyZ2luIGxpbmUtbm9ybWFsIGVsbGlwc2lzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWh0bWw9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVudVN0b3JlLmRhdGFfaXRlbXNbc2x1Z11baXRlbXNfaWRdLml0ZW1fbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNvbC0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lbnVTdG9yZS5kYXRhX2l0ZW1zW3NsdWddW2l0ZW1zX2lkXS50b3RhbF9hbGxlcmdlbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91bmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJteWdyZXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtY29sb3I9XCJkYXJrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJvX2luZm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljay5zdG9wPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93QWxsZXJnZW5zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZW51U3RvcmUuZGF0YV9pbmZvW3NsdWddLm1lcmNoYW50X2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZW51U3RvcmUuZGF0YV9pdGVtc1tzbHVnXVtpdGVtc19pZF0uaXRlbV9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8IS0tIHJvdyAtLT5cblxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWdyZXkgZWxsaXBzaXMtMi1saW5lcyB0ZXh0LWJvZHkyIGxpbmUtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdi1odG1sPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVudVN0b3JlLmRhdGFfaXRlbXNbc2x1Z11baXRlbXNfaWRdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaXRlbV9kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBpdGVtcy1jZW50ZXIgcS1tdC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02IHRleHQtc3VidGl0bGUxIHRleHQtd2VpZ2h0LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIk1lbnVTdG9yZS5kYXRhX2l0ZW1zW3NsdWddW2l0ZW1zX2lkXS5wcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVudVN0b3JlLmRhdGFfaXRlbXNbc2x1Z11baXRlbXNfaWRdLnByaWNlWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVudVN0b3JlLmRhdGFfaXRlbXNbc2x1Z11baXRlbXNfaWRdLnByaWNlWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGlzY291bnQgPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVudVN0b3JlLmRhdGFfaXRlbXNbc2x1Z11baXRlbXNfaWRdLnByaWNlWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucHJldHR5X3ByaWNlX2FmdGVyX2Rpc2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZW51U3RvcmUuZGF0YV9pdGVtc1tzbHVnXVtpdGVtc19pZF0ucHJpY2VbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wcmV0dHlfcHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGYXZzSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImZhdnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYXlvdXQ9XCIzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aXRlbV90b2tlbj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVudVN0b3JlLmRhdGFfaXRlbXNbc2x1Z11baXRlbXNfaWRdLml0ZW1fdXVpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNhdF9pZD1cImNhdGVnb3J5LmNhdF9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmFjdGl2ZT1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXNGYXYoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lbnVTdG9yZS5kYXRhX2l0ZW1zW3NsdWddW2l0ZW1zX2lkXS5pdGVtX2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAYWZ0ZXItc2F2ZWZhdj1cImFmdGVyU2F2ZWZhdkl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8IS0tIHJhZGl1czggLS0+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICAgICAgICAgIDxxLWxpc3Q+XG4gICAgICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICAgICAgdi1mb3I9XCJpdGVtc19pZCBpbiBjYXRlZ29yeS5pdGVtc1wiXG4gICAgICAgICAgICAgICAgICA6a2V5PVwiaXRlbXNfaWRcIlxuICAgICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cInJlbGF0aXZlLXBvc2l0aW9uXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIk1lbnVTdG9yZS5kYXRhX2l0ZW1zW3NsdWddXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiTWVudVN0b3JlLmRhdGFfaXRlbXNbc2x1Z11baXRlbXNfaWRdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiIWlzSXRlbUF2YWlsYWJsZShpdGVtc19pZCwgY2F0ZWdvcnkuY2F0X2lkKVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImFic29sdXRlLXRvcCBmaXQgZmxleCBmbGV4LWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGltbWVkICc6ICRxLmRhcmsubW9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbGlnaHQtZGltbWVkICc6ICEkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtZGFyayBhYnNvbHV0ZS1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtd2hpdGUnOiAkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtZGFyayAnOiAhJHEuZGFyay5tb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3sgJHQoXCJOb3QgYXZhaWxhYmxlXCIpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2suc3RvcD1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93SXRlbWRldGFpbHMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkuY2F0X2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lbnVTdG9yZS5kYXRhX2l0ZW1zW3NsdWddW2l0ZW1zX2lkXS5pdGVtX3V1aWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cS1pbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOnNyYz1cIk1lbnVTdG9yZS5kYXRhX2l0ZW1zW3NsdWddW2l0ZW1zX2lkXS51cmxfaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlci1zcmM9XCJwbGFjZWhvbGRlci5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYXp5XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpdD1cImNvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDgwcHg7IHdpZHRoOiA4MHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJyYWRpdXM4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3Bpbm5lci1jb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNwaW5uZXItc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cblxuICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrLnN0b3A9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0l0ZW1kZXRhaWxzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5LmNhdF9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZW51U3RvcmUuZGF0YV9pdGVtc1tzbHVnXVtpdGVtc19pZF0uaXRlbV91dWlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1zdWJ0aXRsZTIgdGV4dC13ZWlnaHQtbWVkaXVtIG5vLW1hcmdpbiBsaW5lLW5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1odG1sPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lbnVTdG9yZS5kYXRhX2l0ZW1zW3NsdWddW2l0ZW1zX2lkXS5pdGVtX25hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtZ3JleSBlbGxpcHNpcy0yLWxpbmVzIHRleHQtYm9keTIgbGluZS1ub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaHRtbD1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZW51U3RvcmUuZGF0YV9pdGVtc1tzbHVnXVtpdGVtc19pZF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaXRlbV9kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiTWVudVN0b3JlLmRhdGFfaXRlbXNbc2x1Z11baXRlbXNfaWRdLmRpc2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInEtbXQteHMgcS1tYi14c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiZGlzaF9pZCBpbiBNZW51U3RvcmUuZGF0YV9pdGVtc1tzbHVnXVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtc19pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLmRpc2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiZGlzaF9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiTWVudVN0b3JlLmRpc2hbZGlzaF9pZF1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1hdmF0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImJvcmRlcjogMnB4IHNvbGlkIHdoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYmcteWVsbG93LTlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNyYz1cIk1lbnVTdG9yZS5kaXNoW2Rpc2hfaWRdLnVybF9pbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1hdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gUFJJQ0UgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiTWVudVN0b3JlLmRhdGFfaXRlbXNbc2x1Z11baXRlbXNfaWRdLnByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtZ3JleS03IGZvbnQxMiB0ZXh0LXdlaWdodC1ib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCJwcmljZSBpbiBNZW51U3RvcmUuZGF0YV9pdGVtc1tzbHVnXVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXNfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0ucHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cInByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cInByaWNlLmRpc2NvdW50ID4gMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwcmljZS5zaXplX25hbWUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXN0cmlrZVwiPnt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UucHJldHR5X3ByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwcmljZS5wcmV0dHlfcHJpY2VfYWZ0ZXJfZGlzY291bnQgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwcmljZS5zaXplX25hbWUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcHJpY2UucHJldHR5X3ByaWNlIH19PC90ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxzcGFuIGNsYXNzPVwicS1wci1zbVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBQUklDRSAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGUgY2xhc3M9XCJyb3cgaXRlbXMtc3RyZXRjaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBpdGVtcy1jZW50ZXIgY29sLTEyIHEtZ3V0dGVyLXktc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYXZzSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiZmF2c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGF5b3V0PVwiM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aXRlbV90b2tlbj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZW51U3RvcmUuZGF0YV9pdGVtc1tzbHVnXVtpdGVtc19pZF0uaXRlbV91dWlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNhdF9pZD1cImNhdGVnb3J5LmNhdF9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6YWN0aXZlPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zRmF2KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lbnVTdG9yZS5kYXRhX2l0ZW1zW3NsdWddW2l0ZW1zX2lkXS5pdGVtX2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAYWZ0ZXItc2F2ZWZhdj1cImFmdGVyU2F2ZWZhdkl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVudVN0b3JlLmRhdGFfaXRlbXNbc2x1Z11baXRlbXNfaWRdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b3RhbF9hbGxlcmdlbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY29sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91bmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwibXlncmV5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtY29sb3I9XCJkYXJrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwib19pbmZvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljay5zdG9wPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dBbGxlcmdlbnMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVudVN0b3JlLmRhdGFfaW5mb1tzbHVnXS5tZXJjaGFudF9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZW51U3RvcmUuZGF0YV9pdGVtc1tzbHVnXVtpdGVtc19pZF0uaXRlbV9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3VuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImxhcyBsYS1wbHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljay5zdG9wPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dJdGVtZGV0YWlscyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeS5jYXRfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVudVN0b3JlLmRhdGFfaXRlbXNbc2x1Z11baXRlbXNfaWRdLml0ZW1fdXVpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRpc2FibGU9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWlzSXRlbUF2YWlsYWJsZShpdGVtc19pZCwgY2F0ZWdvcnkuY2F0X2lkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICA8L3EtbGlzdD5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8cS1zcGFjZSBjbGFzcz1cInEtcGEtc21cIj48L3Etc3BhY2U+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPCEtLSBlbmQgTWVudSBDYXRlZ29yeSAtLT5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8IS0tIGVuZCBNZW51U3RvcmUuZGF0YV9pbmZvW3NsdWddIC0tPlxuXG4gICAgICA8Q2F0ZWdvcmllc01vZGFsXG4gICAgICAgIHJlZj1cImNhdGVnb3JpZXNfbW9kYWxcIlxuICAgICAgICA6c2x1Zz1cInNsdWdcIlxuICAgICAgICBAYWZ0ZXItY2F0ZWdvcnlzZWxlY3Q9XCJhZnRlckNhdGVnb3J5c2VsZWN0XCJcbiAgICAgID48L0NhdGVnb3JpZXNNb2RhbD5cblxuICAgICAgPEl0ZW1EZXRhaWxzXG4gICAgICAgIHJlZj1cIml0ZW1fZGV0YWlsc1wiXG4gICAgICAgIDpzbHVnPVwic2x1Z1wiXG4gICAgICAgIDptb25leV9jb25maWc9XCJNZW51U3RvcmUubW9uZXlfY29uZmlnXCJcbiAgICAgICAgOmN1cnJlbmN5X2NvZGU9XCJEYXRhU3RvcmVQZXJzaXN0ZWQudXNlX2N1cnJlbmN5X2NvZGVcIlxuICAgICAgICBAYWZ0ZXItYWRkaXRlbXM9XCJhZnRlckFkZGl0ZW1zXCJcbiAgICAgIC8+XG5cbiAgICAgIDxJdGVtRGV0YWlsc0NoZWNrYm94XG4gICAgICAgIHJlZj1cIml0ZW1fZGV0YWlsczJcIlxuICAgICAgICA6c2x1Zz1cInNsdWdcIlxuICAgICAgICA6bW9uZXlfY29uZmlnPVwiTWVudVN0b3JlLm1vbmV5X2NvbmZpZ1wiXG4gICAgICAgIDpjdXJyZW5jeV9jb2RlPVwiRGF0YVN0b3JlUGVyc2lzdGVkLnVzZV9jdXJyZW5jeV9jb2RlXCJcbiAgICAgICAgQGFmdGVyLWFkZGl0ZW1zPVwiYWZ0ZXJBZGRpdGVtc1wiXG4gICAgICAvPlxuXG4gICAgICA8cS1wYWdlLXNjcm9sbGVyXG4gICAgICAgIHBvc2l0aW9uPVwiYm90dG9tLXJpZ2h0XCJcbiAgICAgICAgOnNjcm9sbC1vZmZzZXQ9XCIxNTBcIlxuICAgICAgICA6b2Zmc2V0PVwiWzE4LCAxOF1cIlxuICAgICAgPlxuICAgICAgICA8cS1idG5cbiAgICAgICAgICBmYWJcbiAgICAgICAgICBpY29uPVwia2V5Ym9hcmRfYXJyb3dfdXBcIlxuICAgICAgICAgIDpjb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5NjAwJyA6ICdteWdyZXknXCJcbiAgICAgICAgICA6dGV4dC1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICdkYXJrJ1wiXG4gICAgICAgICAgZGVuc2VcbiAgICAgICAgICBwYWRkaW5nPVwiM3B4XCJcbiAgICAgICAgLz5cbiAgICAgIDwvcS1wYWdlLXNjcm9sbGVyPlxuICAgIDwvcS1wYWdlPlxuXG4gICAgPHEtZm9vdGVyXG4gICAgICB2LWlmPVwiQ2FydFN0b3JlLmhhc0l0ZW0gJiYgIUNhcnRTdG9yZS5jYXJ0X2xvYWRpbmdcIlxuICAgICAgcmV2ZWFsXG4gICAgICBjbGFzcz1cImJnLXByaW1hcnkgcS1wbC1tZCBxLXByLW1kIHEtcGItc20gcS1wdC1zbSB0ZXh0LWRhcmtcIlxuICAgID5cbiAgICAgIDxxLWJ0blxuICAgICAgICB0bz1cIi9jYXJ0XCJcbiAgICAgICAgOmxvYWRpbmc9XCJDYXJ0U3RvcmUuY2FydF9sb2FkaW5nXCJcbiAgICAgICAgOmRpc2FibGU9XCJTdG9yZU9wZW4uc3RvcmVfY2xvc2VcIlxuICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgIHRleHQtY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgIG5vLWNhcHNcbiAgICAgICAgY2xhc3M9XCJyYWRpdXMxMCBmaXRcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZml0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnQxN1wiPnt7ICR0KFwiVmlldyBPcmRlclwiKSB9fTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXdlaWdodC1ib2xkIGZvbnQxNlwiPlxuICAgICAgICAgICAge3sgQ2FydFN0b3JlLmNhcnRfc3VidG90YWwudmFsdWUgfX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3EtYnRuPlxuICAgIDwvcS1mb290ZXI+XG4gIDwvcS1wdWxsLXRvLXJlZnJlc2g+XG5cbiAgPERlbGl2ZXJ5U2NoZWRcbiAgICByZWY9XCJkZWxpdmVyeV9zY2hlZFwiXG4gICAgOnNsdWc9XCJzbHVnXCJcbiAgICBAYWZ0ZXItc2F2ZXRyYW5zPVwiYWZ0ZXJTYXZldHJhbnNcIlxuICAvPlxuICA8QWxsZXJnZW5zSW5mb3JtYXRpb24gcmVmPVwiYWxsZXJnZW5zXCI+PC9BbGxlcmdlbnNJbmZvcm1hdGlvbj5cblxuICA8dGVtcGxhdGUgdi1pZj1cIk1lbnVTdG9yZS5kYXRhX2luZm9bc2x1Z11cIj5cbiAgICA8Q29tcG9uZW50c1JlYWx0aW1lXG4gICAgICByZWY9XCJyZWFsdGltZVwiXG4gICAgICBnZXRldmVudD1cImNhcnRcIlxuICAgICAgOnN1YnNjcmliZV90bz1cIk1lbnVTdG9yZS5kYXRhX2luZm9bc2x1Z10ubWVyY2hhbnRfdXVpZFwiXG4gICAgICBAYWZ0ZXItcmVjZWl2ZT1cImFmdGVyUmVjZWl2ZVwiXG4gICAgPlxuICAgIDwvQ29tcG9uZW50c1JlYWx0aW1lPlxuICA8L3RlbXBsYXRlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IGRlZmluZUFzeW5jQ29tcG9uZW50IH0gZnJvbSBcInZ1ZVwiO1xuaW1wb3J0IEFQSWludGVyZmFjZSBmcm9tIFwic3JjL2FwaS9BUElpbnRlcmZhY2VcIjtcbmltcG9ydCB7IHVzZUNhcnRTdG9yZSB9IGZyb20gXCJzdG9yZXMvQ2FydFN0b3JlXCI7XG5pbXBvcnQgeyB1c2VNZW51U3RvcmUgfSBmcm9tIFwic3RvcmVzL01lbnVTdG9yZVwiO1xuaW1wb3J0IHsgdXNlU3RvcmVPcGVuIH0gZnJvbSBcInN0b3Jlcy9TdG9yZU9wZW5cIjtcbmltcG9ydCB7IHVzZUZhdm9yaXRlU3RvcmUgfSBmcm9tIFwic3RvcmVzL0Zhdm9yaXRlU3RvcmVcIjtcbmltcG9ydCB7IHVzZURlbGl2ZXJ5c2NoZWRTdG9yZSB9IGZyb20gXCJzdG9yZXMvRGVsaXZlcnlTY2hlZFwiO1xuaW1wb3J0IHsgc2Nyb2xsIH0gZnJvbSBcInF1YXNhclwiO1xuaW1wb3J0IGF1dGggZnJvbSBcInNyYy9hcGkvYXV0aFwiO1xuaW1wb3J0IHsgdXNlRGF0YVN0b3JlUGVyc2lzdGVkIH0gZnJvbSBcInN0b3Jlcy9EYXRhU3RvcmVQZXJzaXN0ZWRcIjtcbmltcG9ydCB7IHVzZURhdGFTdG9yZSB9IGZyb20gXCJzdG9yZXMvRGF0YVN0b3JlXCI7XG5cbmNvbnN0IHtcbiAgZ2V0U2Nyb2xsVGFyZ2V0LFxuICBzZXRWZXJ0aWNhbFNjcm9sbFBvc2l0aW9uLFxuICBnZXRWZXJ0aWNhbFNjcm9sbFBvc2l0aW9uLFxufSA9IHNjcm9sbDtcbi8vIGltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tIFwic3dpcGVyL3Z1ZVwiO1xuLy8gaW1wb3J0IFwic3dpcGVyL2Nzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiTWVudVBhZ2VcIixcbiAgY29tcG9uZW50czoge1xuICAgIC8vIFN3aXBlcixcbiAgICAvLyBTd2lwZXJTbGlkZSxcbiAgICBTaGFyZUNvbXBvbmVudHM6IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+XG4gICAgICBpbXBvcnQoXCJjb21wb25lbnRzL1NoYXJlQ29tcG9uZW50cy52dWVcIilcbiAgICApLFxuICAgIEZhdnNSZXN0bzogZGVmaW5lQXN5bmNDb21wb25lbnQoKCkgPT4gaW1wb3J0KFwiY29tcG9uZW50cy9GYXZzUmVzdG8udnVlXCIpKSxcbiAgICBDYXRlZ29yaWVzTW9kYWw6IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+XG4gICAgICBpbXBvcnQoXCJjb21wb25lbnRzL0NhdGVnb3JpZXNNb2RhbC52dWVcIilcbiAgICApLFxuICAgIENhdGVnb3J5U2xpZGU6IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+XG4gICAgICBpbXBvcnQoXCJjb21wb25lbnRzL0NhdGVnb3J5U2xpZGUudnVlXCIpXG4gICAgKSxcbiAgICBJdGVtRGV0YWlsczogZGVmaW5lQXN5bmNDb21wb25lbnQoKCkgPT5cbiAgICAgIGltcG9ydChcImNvbXBvbmVudHMvSXRlbURldGFpbHMudnVlXCIpXG4gICAgKSxcbiAgICBJdGVtRGV0YWlsc0NoZWNrYm94OiBkZWZpbmVBc3luY0NvbXBvbmVudCgoKSA9PlxuICAgICAgaW1wb3J0KFwiY29tcG9uZW50cy9JdGVtRGV0YWlsc0NoZWNrYm94LnZ1ZVwiKVxuICAgICksXG4gICAgRmF2c0l0ZW06IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+IGltcG9ydChcImNvbXBvbmVudHMvRmF2c0l0ZW0udnVlXCIpKSxcbiAgICBNZXJjaGFudFByb21vU2xpZGU6IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+XG4gICAgICBpbXBvcnQoXCJjb21wb25lbnRzL01lcmNoYW50UHJvbW9TbGlkZS52dWVcIilcbiAgICApLFxuICAgIERlbGl2ZXJ5U2NoZWQ6IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+XG4gICAgICBpbXBvcnQoXCJjb21wb25lbnRzL0RlbGl2ZXJ5U2NoZWQudnVlXCIpXG4gICAgKSxcbiAgICBBbGxlcmdlbnNJbmZvcm1hdGlvbjogZGVmaW5lQXN5bmNDb21wb25lbnQoKCkgPT5cbiAgICAgIGltcG9ydChcImNvbXBvbmVudHMvQWxsZXJnZW5zSW5mb3JtYXRpb24udnVlXCIpXG4gICAgKSxcbiAgICBDb21wb25lbnRzUmVhbHRpbWU6IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+XG4gICAgICBpbXBvcnQoXCJjb21wb25lbnRzL0NvbXBvbmVudHNSZWFsdGltZS52dWVcIilcbiAgICApLFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzbHVnOiBcIlwiLFxuICAgICAgY2F0ZWdvcnk6IDEsXG4gICAgICAvL3RyYW5zYWN0aW9uVHlwZTogXCJcIixcbiAgICAgIGhlYWRlckNoYW5nZUNvbG9yOiBmYWxzZSxcbiAgICAgIGlzRml4ZWQ6IGZhbHNlLFxuICAgICAgc3RpY2t5UG9zaXRpb246IDAsXG4gICAgICBwYXlsb2FkOiBbXG4gICAgICAgIFwiaXRlbXNcIixcbiAgICAgICAgXCJzdWJ0b3RhbFwiLFxuICAgICAgICBcImRpc3RhbmNlX2xvY2FsXCIsXG4gICAgICAgIFwiaXRlbXNfY291bnRcIixcbiAgICAgICAgXCJtZXJjaGFudF9pbmZvXCIsXG4gICAgICAgIFwiY2hlY2tfb3BlbmluZ1wiLFxuICAgICAgICBcInRyYW5zYWN0aW9uX2luZm9cIixcbiAgICAgIF0sXG4gICAgfTtcbiAgfSxcbiAgc2V0dXAoKSB7XG4gICAgY29uc3QgQ2FydFN0b3JlID0gdXNlQ2FydFN0b3JlKCk7XG4gICAgY29uc3QgTWVudVN0b3JlID0gdXNlTWVudVN0b3JlKCk7XG4gICAgY29uc3QgU3RvcmVPcGVuID0gdXNlU3RvcmVPcGVuKCk7XG4gICAgY29uc3QgRmF2b3JpdGVTdG9yZSA9IHVzZUZhdm9yaXRlU3RvcmUoKTtcbiAgICBjb25zdCBEZWxpdmVyeXNjaGVkU3RvcmUgPSB1c2VEZWxpdmVyeXNjaGVkU3RvcmUoKTtcbiAgICBjb25zdCBEYXRhU3RvcmVQZXJzaXN0ZWQgPSB1c2VEYXRhU3RvcmVQZXJzaXN0ZWQoKTtcbiAgICBjb25zdCBEYXRhU3RvcmUgPSB1c2VEYXRhU3RvcmUoKTtcbiAgICByZXR1cm4ge1xuICAgICAgQ2FydFN0b3JlLFxuICAgICAgTWVudVN0b3JlLFxuICAgICAgU3RvcmVPcGVuLFxuICAgICAgRmF2b3JpdGVTdG9yZSxcbiAgICAgIERlbGl2ZXJ5c2NoZWRTdG9yZSxcbiAgICAgIERhdGFTdG9yZVBlcnNpc3RlZCxcbiAgICAgIERhdGFTdG9yZSxcbiAgICB9O1xuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuc2x1ZyA9IHRoaXMuJHJvdXRlLnBhcmFtcy5zbHVnO1xuICAgIHRoaXMuTWVudVN0b3JlLnJlc3RhdXJhbnRfc2x1ZyA9IHRoaXMuc2x1ZztcblxuICAgIC8vIGlmICghdGhpcy5DYXJ0U3RvcmUuaGFkRGF0YSgpKSB7XG4gICAgLy8gICB0aGlzLkNhcnRTdG9yZS5nZXRDYXJ0KHRydWUsIHRoaXMucGF5bG9hZCk7XG4gICAgLy8gfVxuICAgIHRoaXMuQ2FydFN0b3JlLmdldENhcnQodHJ1ZSwgdGhpcy5wYXlsb2FkKTtcblxuICAgIHRoaXMuTWVudVN0b3JlLmdldE1lcmNoYW50SW5mbyhcbiAgICAgIHRoaXMuc2x1ZyxcbiAgICAgIHRoaXMuRGF0YVN0b3JlUGVyc2lzdGVkLnVzZV9jdXJyZW5jeV9jb2RlXG4gICAgKTtcblxuICAgIHRoaXMuTWVudVN0b3JlLmdlU3RvcmVNZW51KFxuICAgICAgdGhpcy5zbHVnLFxuICAgICAgdGhpcy5EYXRhU3RvcmVQZXJzaXN0ZWQudXNlX2N1cnJlbmN5X2NvZGVcbiAgICApO1xuXG4gICAgdGhpcy5TdG9yZU9wZW4uY2hlY2tTdG9yZU9wZW4yKHRoaXMuc2x1Zyk7XG5cbiAgICBpZiAoYXV0aC5hdXRoZW50aWNhdGVkKCkpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLkZhdm9yaXRlU3RvcmUuaXRlbXNfZGF0YSkubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgdGhpcy5GYXZvcml0ZVN0b3JlLmdldEl0ZW1GYXZvcml0ZXModGhpcy5zbHVnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghdGhpcy5GYXZvcml0ZVN0b3JlLml0ZW1zX2RhdGFbdGhpcy5zbHVnXSkge1xuICAgICAgICAgIHRoaXMuRmF2b3JpdGVTdG9yZS5nZXRJdGVtRmF2b3JpdGVzKHRoaXMuc2x1Zyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLkRlbGl2ZXJ5c2NoZWRTdG9yZS5nZXREZWxpdmVyeVNjaGVkKFxuICAgICAgQVBJaW50ZXJmYWNlLmdldFN0b3JhZ2UoXCJjYXJ0X3V1aWRcIiksXG4gICAgICB0aGlzLnNsdWcsXG4gICAgICBcInNsdWdcIlxuICAgICk7XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NPYmplY3QoKSB7XG4gICAgICBsZXQgJGNsYXNzX25hbWUgPSBcIlwiO1xuICAgICAgaWYgKHRoaXMuaGVhZGVyQ2hhbmdlQ29sb3IpIHtcbiAgICAgICAgJGNsYXNzX25hbWUgPSB0aGlzLiRxLmRhcmsubW9kZVxuICAgICAgICAgID8gXCJiZy1teWRhcmsgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgOiBcImJnLXdoaXRlIHRleHQtYmxhY2tcIjtcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuaGVhZGVyQ2hhbmdlQ29sb3IpIHtcbiAgICAgICAgJGNsYXNzX25hbWUgPSBcImJnLXRyYW5zcGFyZW50IHRleHQtYmxhY2tcIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiAkY2xhc3NfbmFtZTtcbiAgICB9LFxuICAgIGhlYWRlckJhY2tncm91bmQoKSB7XG4gICAgICBsZXQgYmcgPSBcIlwiO1xuICAgICAgaWYgKHRoaXMuTWVudVN0b3JlLmRhdGFfaW5mb1t0aGlzLnNsdWddICYmICF0aGlzLk1lbnVTdG9yZS5sb2FkaW5faW5mbykge1xuICAgICAgICBsZXQgSGVhZGVySW1hZ2UgPSB0aGlzLk1lbnVTdG9yZS5kYXRhX2luZm9bdGhpcy5zbHVnXS51cmxfbG9nbztcbiAgICAgICAgaWYgKHRoaXMuTWVudVN0b3JlLmRhdGFfaW5mb1t0aGlzLnNsdWddLmhhc19oZWFkZXIpIHtcbiAgICAgICAgICBIZWFkZXJJbWFnZSA9IHRoaXMuTWVudVN0b3JlLmRhdGFfaW5mb1t0aGlzLnNsdWddLnVybF9oZWFkZXI7XG4gICAgICAgIH1cblxuICAgICAgICBiZyA9XG4gICAgICAgICAgXCJiYWNrZ3JvdW5kLWltYWdlOnVybChcIiArXG4gICAgICAgICAgSGVhZGVySW1hZ2UgK1xuICAgICAgICAgIFwiKSAhaW1wb3J0YW50OyA7YmFja2dyb3VuZC1zaXplOmNvdmVyIWltcG9ydGFudDtcIjtcbiAgICAgICAgcmV0dXJuIGJnO1xuICAgICAgfSBlbHNlIHJldHVybiBcIlwiO1xuICAgIH0sXG4gICAgZ2V0RXN0aW1hdGlvbigpIHtcbiAgICAgIGxldCByZXN1bHQgPSBcIlwiO1xuICAgICAgbGV0IHByZWZpeCA9IFwiaW5cIjtcbiAgICAgIGxldCBtaW5zID0gXCJtaW5cIjtcbiAgICAgIGxldCB0cmFuc2FjdGlvblR5cGUgPSB0aGlzLkRlbGl2ZXJ5c2NoZWRTdG9yZS50cmFuc2FjdGlvbl90eXBlO1xuXG4gICAgICBpZiAodGhpcy5EZWxpdmVyeXNjaGVkU3RvcmUud2hlbnRvX2RlbGl2ZXIgPT0gXCJzY2hlZHVsZVwiKSB7XG4gICAgICAgIHByZWZpeCA9IFwiZnJvbVwiO1xuICAgICAgICBtaW5zID0gXCJcIjtcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5EZWxpdmVyeXNjaGVkU3RvcmUudHJhbnNfZGF0YS5kZWxpdmVyeV90aW1lLnByZXR0eV90aW1lO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuTWVudVN0b3JlLmRhdGFfZXN0aW1hdGlvblt0aGlzLnNsdWddKSB7XG4gICAgICAgICAgaWYgKHRoaXMuTWVudVN0b3JlLmRhdGFfZXN0aW1hdGlvblt0aGlzLnNsdWddW3RyYW5zYWN0aW9uVHlwZV0pIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgdGhpcy5NZW51U3RvcmUuZGF0YV9lc3RpbWF0aW9uW3RoaXMuc2x1Z11bdHJhbnNhY3Rpb25UeXBlXVtcbiAgICAgICAgICAgICAgICB0aGlzLk1lbnVTdG9yZS5kYXRhX2NoYXJnZV90eXBlW3RoaXMuc2x1Z11cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHJlc3VsdCA9XG4gICAgICAgICAgICAgICAgdGhpcy5NZW51U3RvcmUuZGF0YV9lc3RpbWF0aW9uW3RoaXMuc2x1Z11bdHJhbnNhY3Rpb25UeXBlXVtcbiAgICAgICAgICAgICAgICAgIHRoaXMuTWVudVN0b3JlLmRhdGFfY2hhcmdlX3R5cGVbdGhpcy5zbHVnXVxuICAgICAgICAgICAgICAgIF0uZXN0aW1hdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFBUElpbnRlcmZhY2UuZW1wdHkocmVzdWx0KSkge1xuICAgICAgICByZXR1cm4gcHJlZml4ICsgXCIgXCIgKyByZXN1bHQgKyBcIiBcIiArIG1pbnM7XG4gICAgICB9XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9LFxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYWZ0ZXJDYXRlZ29yeXNlbGVjdChkYXRhKSB7XG4gICAgICB0aGlzLiRyZWZzLmNhdGVnb3JpZXNfbW9kYWwubW9kYWwgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2Nyb2xsVG9FbGVtZW50KGRhdGEpO1xuICAgIH0sXG4gICAgc2Nyb2xsVG9FbGVtZW50KGlkKSB7XG4gICAgICBjb25zdCBlbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICBjb25zdCB0YXJnZXQgPSBnZXRTY3JvbGxUYXJnZXQoZWxlKTtcbiAgICAgIGNvbnN0IG9mZnNldCA9IGVsZS5vZmZzZXRUb3A7XG4gICAgICBjb25zdCBkdXJhdGlvbiA9IDUwMDtcbiAgICAgIHNldFZlcnRpY2FsU2Nyb2xsUG9zaXRpb24odGFyZ2V0LCBvZmZzZXQgLSA1MCwgZHVyYXRpb24pO1xuICAgIH0sXG4gICAgZ29TZWFyY2goKSB7XG4gICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XG4gICAgICAgIG5hbWU6IFwiaXRlbXNcIixcbiAgICAgICAgcXVlcnk6IHsgc2x1ZzogdGhpcy5zbHVnIH0sXG4gICAgICB9KTtcbiAgICB9LFxuICAgIG9uU2Nyb2xsKGluZm8pIHtcbiAgICAgIGlmIChpbmZvLmRpcmVjdGlvbiA9PSBcImRvd25cIikge1xuICAgICAgICBpZiAoaW5mby5wb3NpdGlvbi50b3AgPD0gMTQwKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJDaGFuZ2VDb2xvciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChpbmZvLnBvc2l0aW9uLnRvcCA8PSAxNDApIHtcbiAgICAgICAgICB0aGlzLmhlYWRlckNoYW5nZUNvbG9yID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHJlZnJlc2goZG9uZSkge1xuICAgICAgZG9uZSgpO1xuICAgICAgdGhpcy5NZW51U3RvcmUuZGF0YV9pbmZvID0ge307XG4gICAgICB0aGlzLkNhcnRTdG9yZS5nZXRDYXJ0KHRydWUsIHRoaXMucGF5bG9hZCk7XG5cbiAgICAgIHRoaXMuTWVudVN0b3JlLmdldE1lcmNoYW50SW5mbyhcbiAgICAgICAgdGhpcy5zbHVnLFxuICAgICAgICB0aGlzLkRhdGFTdG9yZVBlcnNpc3RlZC51c2VfY3VycmVuY3lfY29kZVxuICAgICAgKTtcblxuICAgICAgdGhpcy5NZW51U3RvcmUuZ2VTdG9yZU1lbnUoXG4gICAgICAgIHRoaXMuc2x1ZyxcbiAgICAgICAgdGhpcy5EYXRhU3RvcmVQZXJzaXN0ZWQudXNlX2N1cnJlbmN5X2NvZGVcbiAgICAgICk7XG5cbiAgICAgIHRoaXMuJHJlZnMubWVyY2hhbnRQcm9tb1NsaWRlLnJlZnJlc2goKTtcbiAgICAgIGlmIChhdXRoLmF1dGhlbnRpY2F0ZWQoKSkge1xuICAgICAgICB0aGlzLkZhdm9yaXRlU3RvcmUuZ2V0SXRlbUZhdm9yaXRlcyh0aGlzLnNsdWcpO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2hvd0l0ZW1kZXRhaWxzKGNhdF9pZCwgaXRlbV91dWlkKSB7XG4gICAgICBjb25zdCBwYXJhbXMgPSB7IGNhdF9pZDogY2F0X2lkLCBpdGVtX3V1aWQ6IGl0ZW1fdXVpZCB9O1xuICAgICAgaWYgKHRoaXMuRGF0YVN0b3JlLmFkZG9uc191c2VfY2hlY2tib3gpIHtcbiAgICAgICAgdGhpcy4kcmVmcy5pdGVtX2RldGFpbHMyLnNob3dJdGVtMihwYXJhbXMsIHRoaXMuc2x1Zyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiRyZWZzLml0ZW1fZGV0YWlscy5zaG93SXRlbTIocGFyYW1zLCB0aGlzLnNsdWcpO1xuICAgICAgfVxuICAgIH0sXG4gICAgYWZ0ZXJBZGRpdGVtcygpIHtcbiAgICAgIEFQSWludGVyZmFjZS5zZXRTdG9yYWdlKFwibWVyY2hhbnRfc2x1Z1wiLCB0aGlzLnNsdWcpO1xuICAgICAgLy90aGlzLkNhcnRTdG9yZS5jYXJ0X2l0ZW1zID0gW107XG4gICAgICB0aGlzLkNhcnRTdG9yZS5nZXRDYXJ0KHRydWUsIHRoaXMucGF5bG9hZCk7XG4gICAgfSxcbiAgICAvLyBhZnRlclNhdmVmYXYoaXRlbSkge1xuICAgIC8vICAgaXRlbS5zYXZlZF9zdG9yZSA9ICFpdGVtLnNhdmVkX3N0b3JlO1xuICAgIC8vIH0sXG4gICAgYWZ0ZXJTYXZlZmF2KGRhdGEsIGFkZGVkKSB7XG4gICAgICBkYXRhLnNhdmVkX3N0b3JlID0gYWRkZWQ7XG4gICAgfSxcbiAgICBpdGVtc0ZhdihpdGVtX2lkKSB7XG4gICAgICBsZXQgc2F2ZUl0ZW1zID0gW107XG4gICAgICBpZiAodGhpcy5GYXZvcml0ZVN0b3JlLml0ZW1zX2RhdGFbdGhpcy5zbHVnXSkge1xuICAgICAgICBzYXZlSXRlbXMgPSB0aGlzLkZhdm9yaXRlU3RvcmUuaXRlbXNfZGF0YVt0aGlzLnNsdWddO1xuICAgICAgfVxuICAgICAgaWYgKE9iamVjdC5rZXlzKHNhdmVJdGVtcykubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAoc2F2ZUl0ZW1zLmluY2x1ZGVzKGl0ZW1faWQpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIGFmdGVyU2F2ZWZhdkl0ZW0oZGF0YSwgaXRlbXMpIHtcbiAgICAgIHRoaXMuRmF2b3JpdGVTdG9yZS5nZXRJdGVtRmF2b3JpdGVzKHRoaXMuc2x1Zyk7XG4gICAgfSxcbiAgICBhZnRlclNhdmV0cmFucygpIHtcbiAgICAgIHRoaXMuRGVsaXZlcnlzY2hlZFN0b3JlLmdldERlbGl2ZXJ5U2NoZWQoXG4gICAgICAgIEFQSWludGVyZmFjZS5nZXRTdG9yYWdlKFwiY2FydF91dWlkXCIpLFxuICAgICAgICB0aGlzLnNsdWdcbiAgICAgICk7XG4gICAgICB0aGlzLlN0b3JlT3Blbi5jaGVja1N0b3JlT3BlbjIodGhpcy5zbHVnKTtcbiAgICB9LFxuICAgIGlzSXRlbUF2YWlsYWJsZShpdGVtX2lkLCBjYXRfaWQpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLk1lbnVTdG9yZS5pdGVtc19ub3RfYXZhaWxhYmxlKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmICh0aGlzLk1lbnVTdG9yZS5pdGVtc19ub3RfYXZhaWxhYmxlLmluY2x1ZGVzKHBhcnNlSW50KGl0ZW1faWQpKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5NZW51U3RvcmUuY2F0ZWdvcnlfbm90X2F2YWlsYWJsZSkubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAodGhpcy5NZW51U3RvcmUuY2F0ZWdvcnlfbm90X2F2YWlsYWJsZS5pbmNsdWRlcyhwYXJzZUludChjYXRfaWQpKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBzaG93QWxsZXJnZW5zKG1lcmNoYW50X2lkLCBpdGVtX2lkKSB7XG4gICAgICB0aGlzLiRyZWZzLmFsbGVyZ2Vucy5zaG93KHRydWUsIG1lcmNoYW50X2lkLCBpdGVtX2lkKTtcbiAgICB9LFxuICAgIGFmdGVyUmVjZWl2ZShkYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImFmdGVyUmVjZWl2ZVwiKTtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgbGV0IG1lc3NhZ2UgPSBKU09OLnBhcnNlKGRhdGEubWVzc2FnZSk7XG4gICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICAgIEFQSWludGVyZmFjZS5mZXRjaERhdGFQb3N0KFxuICAgICAgICBcInZhbGlkYXRlQ2FydEl0ZW1zXCIsXG4gICAgICAgIFwiaXRlbV9pZD1cIiArXG4gICAgICAgICAgbWVzc2FnZS5pdGVtX2lkICtcbiAgICAgICAgICBcIiZjYXJ0X3V1aWQ9XCIgK1xuICAgICAgICAgIEFQSWludGVyZmFjZS5nZXRTdG9yYWdlKFwiY2FydF91dWlkXCIpXG4gICAgICApXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgLy9cbiAgICAgICAgICB0aGlzLiRxXG4gICAgICAgICAgICAuZGlhbG9nKHtcbiAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuJHQoXCJJdGVtc1wiKSxcbiAgICAgICAgICAgICAgbWVzc2FnZTogZGF0YS5tc2csXG4gICAgICAgICAgICAgIHBlcnNpc3RlbnQ6IHRydWUsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uT2soKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLkNhcnRTdG9yZS5nZXRDYXJ0KHRydWUsIHRoaXMucGF5bG9hZCk7XG4gICAgICAgICAgICAgIHRoaXMuTWVudVN0b3JlLmdlU3RvcmVNZW51KFxuICAgICAgICAgICAgICAgIHRoaXMuc2x1ZyxcbiAgICAgICAgICAgICAgICB0aGlzLkRhdGFTdG9yZVBlcnNpc3RlZC51c2VfY3VycmVuY3lfY29kZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbkNhbmNlbCgoKSA9PiB7XG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdDYW5jZWwnKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbkRpc21pc3MoKCkgPT4ge1xuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnSSBhbSB0cmlnZ2VyZWQgb24gYm90aCBPSyBhbmQgQ2FuY2VsJylcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIC8vXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAvL1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIC8vXG4gICAgICAgIH0pO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iXSwiZmlsZSI6ImFzc2V0cy9NZW51UGFnZS4zOGNjOWQ5YS5qcyJ9
