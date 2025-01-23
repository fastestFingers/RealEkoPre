import { I as defineStore, m as APIinterface, bB as o, _ as _export_sfc, l as defineAsyncComponent, R as useDataStore, S as useDataStorePersisted, n as resolveComponent, p as openBlock, V as createElementBlock, f as createVNode, t as withCtx, q as createBlock, a7 as normalizeClass, aA as createCommentVNode, F as Fragment, Y as QBtn, a6 as createTextVNode, Z as toDisplayString, U as createBaseVNode, at as QIcon, ac as QItem, ad as QItemSection, ae as QAvatar, bA as QToggle, X as renderList, u as __vitePreload, aY as QInput } from "./index.61ed5618.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QInnerLoading } from "./QInnerLoading.abe2afe6.js";
import { Q as QImg } from "./QImg.6c27044c.js";
import { Q as QItemLabel } from "./QItemLabel.a9365c5b.js";
import { Q as QList } from "./QList.b69a7e5b.js";
import { Q as QExpansionItem } from "./QExpansionItem.6e46dae0.js";
import { Q as QSkeleton } from "./QSkeleton.39737398.js";
import { Q as QSpace } from "./QSpace.f164c087.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import { Q as QPullToRefresh } from "./QPullToRefresh.3d10c02d.js";
import { Q as QFooter } from "./QFooter.571ac042.js";
import { u as useCartStore } from "./CartStore.484ff101.js";
import { u as usePromoStore } from "./PromoStore.a9bf7bbf.js";
import { u as usePaymentStore } from "./PaymentStore.773648e1.js";
import { u as useDeliveryschedStore } from "./DeliverySched.4e9605bf.js";
import "./QResizeObserver.d08dce3c.js";
import "./QSlideTransition.edc8ce9e.js";
import "./touch.96e0ae37.js";
import "./selection.50b4cb0c.js";
import "./format.7f7370d3.js";
const useMapsStore = defineStore("maps_store", {
  state: () => ({
    loading: false,
    maps_config: [],
    marker_position: []
  }),
  actions: {
    getMapconfig() {
      this.loading = true;
      APIinterface.getMapconfig().then((data) => {
        this.maps_config = o(data.details);
        this.marker_position = { lat: parseFloat(this.maps_config.default_lat), lng: parseFloat(this.maps_config.default_lng) };
      }).catch((error) => {
      }).then((data) => {
        this.loading = false;
      });
    }
  }
});
const _sfc_main = {
  name: "CheckoutPage",
  components: {
    CartDetails: defineAsyncComponent(
      () => __vitePreload(() => import("./CartDetails.bc77b432.js"), true ? ["assets/CartDetails.bc77b432.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QSkeleton.39737398.js","assets/QList.b69a7e5b.js","assets/QImg.6c27044c.js","assets/QItemLabel.a9365c5b.js","assets/QSlideItem.7b72eeea.js","assets/QPullToRefresh.3d10c02d.js","assets/touch.96e0ae37.js","assets/selection.50b4cb0c.js","assets/format.7f7370d3.js","assets/use-render-cache.b9e045af.js","assets/CartStore.484ff101.js"] : void 0)
    ),
    ClientAddress: defineAsyncComponent(
      () => __vitePreload(() => import("./ClientAddress.37a37e4b.js"), true ? ["assets/ClientAddress.37a37e4b.js","assets/QToolbarTitle.03eaf2d6.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QSpace.f164c087.js","assets/QToolbar.c8fc6962.js","assets/QInnerLoading.abe2afe6.js","assets/QItemLabel.a9365c5b.js","assets/QList.b69a7e5b.js","assets/ClientStore.327b1c8d.js"] : void 0)
    ),
    ChangePhone: defineAsyncComponent(
      () => __vitePreload(() => import("./ChangePhone.d7591d78.js"), true ? ["assets/ChangePhone.d7591d78.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QToolbarTitle.03eaf2d6.js","assets/QSpace.f164c087.js","assets/QToolbar.c8fc6962.js","assets/QSelect.311187d6.js","assets/QChip.f183a4f1.js","assets/QItemLabel.a9365c5b.js","assets/QMenu.8e482cd8.js","assets/selection.50b4cb0c.js","assets/rtl.f3ed811c.js","assets/format.7f7370d3.js","assets/QForm.7ded9d38.js"] : void 0)
    ),
    DeliverySched: defineAsyncComponent(
      () => __vitePreload(() => import("./DeliverySched.9dd37b6e.js"), true ? ["assets/DeliverySched.9dd37b6e.js","assets/QBtnToggle.6ffa195b.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QBtnGroup.abc2d1c7.js","assets/QSelect.311187d6.js","assets/QChip.f183a4f1.js","assets/QItemLabel.a9365c5b.js","assets/QMenu.8e482cd8.js","assets/selection.50b4cb0c.js","assets/rtl.f3ed811c.js","assets/format.7f7370d3.js","assets/DeliverySched.4e9605bf.js"] : void 0)
    ),
    PromoList: defineAsyncComponent(() => __vitePreload(() => import("./PromoList.65fa1714.js"), true ? ["assets/PromoList.65fa1714.js","assets/QToolbarTitle.03eaf2d6.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QSpace.f164c087.js","assets/QToolbar.c8fc6962.js","assets/QForm.7ded9d38.js","assets/QItemLabel.a9365c5b.js","assets/QList.b69a7e5b.js","assets/PromoStore.a9bf7bbf.js"] : void 0)),
    TipsList: defineAsyncComponent(() => __vitePreload(() => import("./TipsList.f66337be.js"), true ? ["assets/TipsList.f66337be.js","assets/QBtnToggle.6ffa195b.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QBtnGroup.abc2d1c7.js","assets/QToolbarTitle.03eaf2d6.js","assets/QSpace.f164c087.js","assets/QToolbar.c8fc6962.js","assets/QForm.7ded9d38.js"] : void 0)),
    CheckoutBooking: defineAsyncComponent(
      () => __vitePreload(() => import("./CheckoutBooking.0a794123.js"), true ? ["assets/CheckoutBooking.0a794123.js","assets/QCircularProgress.996c3e2f.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/format.7f7370d3.js","assets/QBtnGroup.abc2d1c7.js","assets/QSelect.311187d6.js","assets/QChip.f183a4f1.js","assets/QItemLabel.a9365c5b.js","assets/QMenu.8e482cd8.js","assets/selection.50b4cb0c.js","assets/rtl.f3ed811c.js","assets/MenuStore.f3a21da3.js"] : void 0)
    ),
    PaymentListSaved: defineAsyncComponent(
      () => __vitePreload(() => import("./PaymentListSaved.5e5df83d.js"), true ? ["assets/PaymentListSaved.5e5df83d.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QImg.6c27044c.js","assets/QItemLabel.a9365c5b.js","assets/QList.b69a7e5b.js","assets/PaymentStore.773648e1.js"] : void 0)
    ),
    PointsCart: defineAsyncComponent(() => __vitePreload(() => import("./PointsCart.ffef8a7f.js"), true ? ["assets/PointsCart.ffef8a7f.js","assets/QInnerLoading.abe2afe6.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QItemLabel.a9365c5b.js","assets/QList.b69a7e5b.js","assets/QToolbarTitle.03eaf2d6.js","assets/QSpace.f164c087.js","assets/QToolbar.c8fc6962.js","assets/QLinearProgress.95e9a35e.js","assets/QTab.8fcc65d0.js","assets/QTabs.2f5e29cb.js","assets/QResizeObserver.d08dce3c.js","assets/rtl.f3ed811c.js","assets/QForm.7ded9d38.js"] : void 0)),
    StripeComponents: defineAsyncComponent(
      () => __vitePreload(() => import("./StripeComponents.3f1aad72.js"), true ? ["assets/StripeComponents.3f1aad72.js","assets/QSpace.f164c087.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QToolbar.c8fc6962.js","assets/QInnerLoading.abe2afe6.js","assets/QForm.7ded9d38.js"] : void 0)
    ),
    PaypalComponents: defineAsyncComponent(
      () => __vitePreload(() => import("./PaypalComponents.d16b4f1c.js"), true ? ["assets/PaypalComponents.d16b4f1c.js","assets/QSpace.f164c087.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QToolbar.c8fc6962.js","assets/ClosePopup.9d17b53c.js","assets/index.d0b40bd3.js"] : void 0)
    ),
    RazorpayComponents: defineAsyncComponent(
      () => __vitePreload(() => import("./RazorpayComponents.fa2381c3.js"), true ? ["assets/RazorpayComponents.fa2381c3.js","assets/QSpace.f164c087.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QToolbar.c8fc6962.js","assets/index.d0b40bd3.js"] : void 0)
    ),
    MercadopagoComponents: defineAsyncComponent(
      () => __vitePreload(() => import("./MercadopagoComponents.392597c1.js"), true ? ["assets/MercadopagoComponents.392597c1.js","assets/QSpace.f164c087.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QToolbar.c8fc6962.js","assets/QSelect.311187d6.js","assets/QChip.f183a4f1.js","assets/QItemLabel.a9365c5b.js","assets/QMenu.8e482cd8.js","assets/selection.50b4cb0c.js","assets/rtl.f3ed811c.js","assets/format.7f7370d3.js","assets/QForm.7ded9d38.js","assets/ClosePopup.9d17b53c.js","assets/index.d0b40bd3.js"] : void 0)
    ),
    ComponentsRealtime: defineAsyncComponent(
      () => __vitePreload(() => import("./ComponentsRealtime.d8c5a360.js"), true ? ["assets/ComponentsRealtime.d8c5a360.js","assets/index.d0b40bd3.js","assets/index.61ed5618.js","assets/index.dbee30c0.css"] : void 0)
    ),
    WalletComponents: defineAsyncComponent(
      () => __vitePreload(() => import("./WalletComponents.2a62db52.js"), true ? ["assets/WalletComponents.2a62db52.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QItemLabel.a9365c5b.js","assets/QList.b69a7e5b.js","assets/QInnerLoading.abe2afe6.js","assets/CartStore.484ff101.js"] : void 0)
    )
  },
  setup() {
    const CartStore = useCartStore();
    const PromoStore = usePromoStore();
    const MapsStore = useMapsStore();
    const DataStore = useDataStore();
    const PaymentStore = usePaymentStore();
    const DeliveryschedStore = useDeliveryschedStore();
    const DataStorePersisted = useDataStorePersisted();
    return {
      CartStore,
      PromoStore,
      MapsStore,
      DataStore,
      PaymentStore,
      DeliveryschedStore,
      DataStorePersisted
    };
  },
  data() {
    return {
      include_utensils: false,
      modal_paymentlist: false,
      payment_credentials: [],
      payment_uuid: "",
      payload: [
        "items",
        "merchant_info",
        "service_fee",
        "delivery_fee",
        "packaging",
        "tax",
        "tips",
        "checkout",
        "discount",
        "distance_local",
        "summary",
        "subtotal",
        "total",
        "items_count",
        "check_opening",
        "transaction_info",
        "card_fee",
        "points",
        "points_discount"
      ],
      loading: false,
      loading_promo_rm: false,
      loading_tip_rm: false,
      tips_list: [],
      payment_change: 0,
      wallet_data: []
    };
  },
  created() {
    this.CartStore.getCart(true, this.payload);
    const includeUtensils = APIinterface.getStorage("include_utensils");
    if (!APIinterface.empty(includeUtensils)) {
      this.include_utensils = includeUtensils;
    }
    this.DeliveryschedStore.getDeliverySched(
      APIinterface.getStorage("cart_uuid"),
      APIinterface.getStorage("merchant_slug")
    );
  },
  mounted() {
    this.loadTips();
  },
  computed: {
    getUseCurrency() {
      return this.DataStorePersisted.getUseCurrency();
    },
    hasAddress() {
      if (Object.keys(this.CartStore.address_component).length > 0) {
        return true;
      }
      return false;
    },
    getMerchantUUID() {
      if (Object.keys(this.CartStore.cart_merchant).length > 0) {
        return this.CartStore.cart_merchant.merchant_uuid;
      }
      return false;
    }
  },
  methods: {
    refresh(done) {
      this.CartStore.getCart(true, this.payload);
      setTimeout(() => {
        done();
      }, 1e3);
    },
    setUtensil(value) {
      APIinterface.setStorage("include_utensils", value);
    },
    afterSetplaceid() {
      console.log("afterSetplaceid");
      this.CartStore.getCart(false, this.payload);
    },
    fillAddress(data) {
      this.$refs.client_address.showModal(false);
      this.$refs.address_details.location_data = data;
      this.$refs.address_details.showModal();
    },
    afterSaveaddress() {
      this.CartStore.getCart(false, this.payload);
    },
    afterSavetrans() {
      this.afterSaveaddress();
    },
    afterChangephone(data) {
      this.CartStore.getCart(false, this.payload);
    },
    afterApplypromo() {
      this.CartStore.getCart(false, this.payload);
    },
    afterRemovepromo() {
      this.CartStore.getCart(false, this.payload);
    },
    afterApplytips() {
      console.log("afterApplytips");
      this.CartStore.getCart(false, this.payload);
    },
    setPaymentcredentials(data) {
      console.log("setPaymentcredentials");
      this.payment_credentials = data;
    },
    afterLoadpaymentlist(data) {
      if (data) {
        this.payment_credentials = data;
      } else {
        this.payment_credentials = [];
      }
    },
    setPaymentuuid(data) {
      this.payment_uuid = data;
    },
    setPayment(data) {
    },
    setDefault(paymentUuid) {
      APIinterface.showLoadingBox("", this.$q);
      APIinterface.setDefaultPayment(paymentUuid).then((data) => {
        this.CartStore.getCart(false, this.payload);
      }).catch((error) => {
        APIinterface.notify("red-5", error, "error_outline", this.$q);
      }).then((data) => {
        APIinterface.hideLoadingBox(this.$q);
      });
    },
    onchoosePayment(data) {
      try {
        this.$refs[data.payment_code].showPaymentForm();
      } catch (error) {
        APIinterface.notify("dark", error, "error", this.$q);
      }
    },
    afterAddpayment() {
      this.modal_paymentlist = false;
    },
    afterPayment(data) {
      this.CartStore.getCart(true, this.payload);
      this.$router.push({
        path: "/order/successful",
        query: { order_uuid: data.order_uuid }
      });
    },
    onPlaceorder() {
      const $params = {
        cart_uuid: APIinterface.getStorage("cart_uuid"),
        local_id: APIinterface.getStorage("place_id"),
        include_utensils: this.include_utensils,
        payment_uuid: this.payment_uuid,
        currency_code: this.DataStorePersisted.getUseCurrency(),
        payment_change: this.payment_change,
        guest_number: this.$refs.checkout_booking ? this.$refs.checkout_booking.guest_number : "",
        room_uuid: this.$refs.checkout_booking ? this.$refs.checkout_booking.room_uuid : "",
        table_uuid: this.$refs.checkout_booking ? this.$refs.checkout_booking.table_uuid : "",
        use_digital_wallet: this.$refs.digital_wallet ? this.$refs.digital_wallet.use_wallet : ""
      };
      this.loading = true;
      APIinterface.PlaceOrder($params).then((data) => {
        if (data.details.payment_instructions.method === "offline") {
          this.CartStore.getCart(true, this.payload);
          this.$router.replace({
            path: "/order/successful",
            query: { order_uuid: data.details.order_uuid }
          });
        } else {
          this.doPayment(data.details);
        }
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data) => {
        this.loading = false;
      });
    },
    doPayment(data) {
      console.log(data.payment_code);
      this.$refs[data.payment_code].PaymentRender(data);
    },
    transactionText(data) {
      if (data === "delivery") {
        return "Delivery to";
      } else if (data === "pickup") {
        return "Pickup to";
      } else if (data === "dinein") {
        return "Go to";
      }
    },
    removePromo(merchantID, data) {
      this.loading_promo_rm = true;
      const $params = {
        cart_uuid: APIinterface.getStorage("cart_uuid"),
        promo_id: data.promo_id,
        promo_type: data.promo_type
      };
      APIinterface.removePromo($params).then((data2) => {
        this.PromoStore.promo_selected[merchantID] = [];
        this.CartStore.getCart(false, this.payload);
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data2) => {
        this.loading_promo_rm = false;
      });
    },
    removeTips() {
      this.loading_tip_rm = true;
      APIinterface.fetchDataPost(
        "removeTips",
        "cart_uuid=" + APIinterface.getStorage("cart_uuid")
      ).then((data) => {
        this.CartStore.getCart(false, this.payload);
      }).catch((error) => {
      }).then((data) => {
        this.loading_tip_rm = false;
      });
    },
    loadTips() {
      APIinterface.fetchDataPost(
        "loadTips",
        "cart_uuid=" + APIinterface.getStorage("cart_uuid") + "&currency_code=" + this.DataStorePersisted.getUseCurrency()
      ).then((data) => {
        this.tips_list = data.details.data;
      }).catch((error) => {
      }).then((data) => {
      });
    },
    afterApplypoints() {
      console.log("afterApplypoints");
      this.CartStore.getCart(false, this.payload);
    },
    afterRemoveitem() {
      console.log("afterRemoveitem");
      this.$refs.cart_points.getCartpoints();
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
        }).onCancel(() => {
        }).onDismiss(() => {
        });
      }).catch((error) => {
      }).then((data2) => {
      });
    },
    afterApplywallet(data) {
      this.wallet_data = data;
    }
  }
};
const _hoisted_1 = {
  key: 1,
  class: "text-center full-width"
};
const _hoisted_2 = { class: "text-h5 text-weight-bold" };
const _hoisted_3 = { class: "text-grey font12" };
const _hoisted_4 = { class: "q-pl-md q-pr-md q-mb-sm" };
const _hoisted_5 = { class: "text-h6 text-weight-boldx line-normal" };
const _hoisted_6 = { class: "row q-gutter-sm" };
const _hoisted_7 = { class: "col-8" };
const _hoisted_8 = { class: "font13 text-weight-bold" };
const _hoisted_9 = /* @__PURE__ */ createTextVNode(" , ");
const _hoisted_10 = { class: "text-capitalize" };
const _hoisted_11 = {
  key: 0,
  class: "font13 text-weight-light text-weight-medium"
};
const _hoisted_12 = {
  key: 1,
  class: "font13 text-weight-light"
};
const _hoisted_13 = { class: "font11 text-weight-light ellipsis" };
const _hoisted_14 = {
  key: 0,
  class: "q-pl-md q-pr-md"
};
const _hoisted_15 = { class: "q-pl-md q-pr-md q-mb-sm ellipsis font13 text-weight-bold q-pt-xs" };
const _hoisted_16 = { class: "text-capitalize" };
const _hoisted_17 = { class: "row justify-end" };
const _hoisted_18 = { class: "q-pl-sm" };
const _hoisted_19 = { class: "q-pl-md q-pr-md q-mb-sm font13 text-weight-bold q-pt-xs" };
const _hoisted_20 = {
  key: 2,
  class: "q-pl-md q-pr-md row q-gutter-sm items-center"
};
const _hoisted_21 = { class: "col-2" };
const _hoisted_22 = { class: "col" };
const _hoisted_23 = { class: "col-3" };
const _hoisted_24 = { class: "q-pl-md q-pr-md q-mt-sm ellipsis font13 text-weight-bold q-pt-xs border-grey-top" };
const _hoisted_25 = {
  key: 5,
  class: "q-pl-md q-pr-md q-mb-sm q-pt-xs"
};
const _hoisted_26 = { class: "row items-center q-mb-sm justify-between" };
const _hoisted_27 = { class: "font13 text-weight-bold" };
const _hoisted_28 = {
  key: 6,
  class: "q-pl-md q-pr-md q-pt-xs border-grey-top"
};
const _hoisted_29 = { class: "row items-center" };
const _hoisted_30 = { class: "q-mr-sm font12" };
const _hoisted_31 = { class: "font12 q-mt-xs" };
const _hoisted_32 = { class: "q-pl-md q-pr-md q-mt-sm q-pt-xs border-grey-top" };
const _hoisted_33 = { class: "row items-center justify-between" };
const _hoisted_34 = { class: "font13 text-weight-bold" };
const _hoisted_35 = { class: "q-pl-md q-pr-md q-pt-xs" };
const _hoisted_36 = { class: "row items-center justify-between fit" };
const _hoisted_37 = { class: "text-weight-bold font17" };
const _hoisted_38 = {
  key: 0,
  class: "text-weight-bold font16"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CheckoutBooking = resolveComponent("CheckoutBooking");
  const _component_CartDetails = resolveComponent("CartDetails");
  const _component_DIV = resolveComponent("DIV");
  const _component_PointsCart = resolveComponent("PointsCart");
  const _component_TipsList = resolveComponent("TipsList");
  const _component_WalletComponents = resolveComponent("WalletComponents");
  const _component_PaymentListSaved = resolveComponent("PaymentListSaved");
  const _component_DeliverySched = resolveComponent("DeliverySched");
  const _component_ChangePhone = resolveComponent("ChangePhone");
  const _component_ClientAddress = resolveComponent("ClientAddress");
  const _component_PromoList = resolveComponent("PromoList");
  const _component_StripeComponents = resolveComponent("StripeComponents");
  const _component_PaypalComponents = resolveComponent("PaypalComponents");
  const _component_RazorpayComponents = resolveComponent("RazorpayComponents");
  const _component_MercadopagoComponents = resolveComponent("MercadopagoComponents");
  const _component_ComponentsRealtime = resolveComponent("ComponentsRealtime");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(QPullToRefresh, { onRefresh: $options.refresh }, {
      default: withCtx(() => [
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
                    createTextVNode(toDisplayString(_ctx.$t("Order Confirmation")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["class"]),
        createVNode(QPage, {
          class: normalizeClass({
            "flex flex-center": !$setup.CartStore.hasItem && !$setup.CartStore.cart_loading
          })
        }, {
          default: withCtx(() => [
            $setup.CartStore.cart_loading ? (openBlock(), createBlock(QInnerLoading, {
              key: 0,
              showing: true,
              color: "primary",
              size: "md",
              "label-class": "dark"
            })) : !$setup.CartStore.hasItem && !$setup.CartStore.cart_loading ? (openBlock(), createElementBlock("div", _hoisted_1, [
              createVNode(QImg, {
                src: "cart-empty.png",
                fit: "fill",
                "spinner-color": "primary",
                style: { "height": "80px", "max-width": "80px" }
              }),
              createBaseVNode("div", _hoisted_2, toDisplayString(_ctx.$t("Your cart is empty")), 1),
              createBaseVNode("p", _hoisted_3, toDisplayString(_ctx.$t("You don't have any orders here! let's change that!")), 1)
            ])) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
              createBaseVNode("div", _hoisted_4, [
                createVNode(QBtn, {
                  "no-caps": "",
                  unelevated: "",
                  flat: "",
                  class: "q-pa-none",
                  to: {
                    name: "menu",
                    params: { slug: $setup.CartStore.cart_merchant.slug }
                  }
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_5, toDisplayString($setup.CartStore.cart_merchant.restaurant_name), 1),
                    createVNode(QIcon, {
                      name: "las la-angle-right",
                      color: "grey",
                      size: "15px"
                    })
                  ]),
                  _: 1
                }, 8, ["to"]),
                createBaseVNode("div", _hoisted_6, [
                  createVNode(QImg, {
                    src: $setup.CartStore.cart_merchant.logo,
                    lazy: "",
                    fit: "cover",
                    style: { "height": "70px", "width": "70px" },
                    class: "radius8",
                    "spinner-color": "amber",
                    "spinner-size": "sm"
                  }, null, 8, ["src"]),
                  createBaseVNode("div", _hoisted_7, [
                    createBaseVNode("div", _hoisted_8, [
                      $setup.CartStore.data_transaction[$setup.CartStore.transaction_info.transaction_type] ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                        createTextVNode(toDisplayString($setup.CartStore.data_transaction[$setup.CartStore.transaction_info.transaction_type].service_name), 1)
                      ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                        createTextVNode(toDisplayString($setup.CartStore.transaction_info.transaction_type), 1)
                      ], 64)),
                      _hoisted_9,
                      createBaseVNode("span", _hoisted_10, toDisplayString($setup.CartStore.transaction_info.whento_deliver) + ",", 1)
                    ]),
                    $setup.CartStore.transaction_info.whento_deliver == "schedule" ? (openBlock(), createElementBlock("div", _hoisted_11, toDisplayString($setup.CartStore.transaction_info.delivery_date_pretty) + " " + toDisplayString($setup.CartStore.transaction_info.delivery_time.pretty_time), 1)) : (openBlock(), createElementBlock("div", _hoisted_12, [
                      $setup.CartStore.data_transaction[$setup.CartStore.transaction_info.transaction_type] ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                        createTextVNode(toDisplayString($setup.CartStore.data_transaction[$setup.CartStore.transaction_info.transaction_type].service_name) + " " + toDisplayString(_ctx.$t("in")) + " " + toDisplayString($setup.CartStore.transaction_info.estimation) + ", " + toDisplayString(_ctx.$t("mins")), 1)
                      ], 64)) : createCommentVNode("", true)
                    ])),
                    createBaseVNode("div", _hoisted_13, toDisplayString($setup.CartStore.cart_merchant.address), 1),
                    createVNode(QBtn, {
                      flat: "",
                      color: _ctx.$q.dark.mode ? "secondary" : "blue",
                      "no-caps": "",
                      label: _ctx.$t("Change order settings"),
                      dense: "",
                      size: "md",
                      class: "q-pt-none",
                      onClick: _cache[1] || (_cache[1] = ($event) => this.$refs.delivery_sched.showSched(true))
                    }, null, 8, ["color", "label"])
                  ])
                ])
              ]),
              !$setup.CartStore.canProceed && !$setup.CartStore.cart_loading ? (openBlock(), createElementBlock("div", _hoisted_14, [
                createBaseVNode("div", {
                  class: normalizeClass(["q-pa-md radius8 font12", {
                    "bg-grey600 text-grey300": _ctx.$q.dark.mode,
                    "bg-yellow text-dark": !_ctx.$q.dark.mode
                  }]),
                  style: { "bottom": "51px" }
                }, toDisplayString($setup.CartStore.getErrorMsg), 3)
              ])) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_15, [
                createBaseVNode("span", _hoisted_16, toDisplayString($setup.CartStore.transaction_info.transaction_type), 1),
                createTextVNode(" " + toDisplayString(_ctx.$t("Details")), 1)
              ]),
              createVNode(QList, { dense: "" }, {
                default: withCtx(() => [
                  createVNode(QItem, null, {
                    default: withCtx(() => [
                      createVNode(QItemSection, { avatar: "" }, {
                        default: withCtx(() => [
                          createVNode(QAvatar, {
                            color: "secondary",
                            size: "md",
                            "text-color": "white"
                          }, {
                            default: withCtx(() => [
                              createVNode(QIcon, {
                                name: "las la-phone",
                                size: "23px"
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(QItemSection, null, {
                        default: withCtx(() => [
                          $setup.CartStore.phone_details.default_prefix ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                            createTextVNode(" (" + toDisplayString($setup.CartStore.phone_details.default_prefix) + ") ", 1)
                          ], 64)) : createCommentVNode("", true),
                          createTextVNode(" " + toDisplayString($setup.CartStore.phone_details.contact_number), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(QItemSection, { side: "" }, {
                        default: withCtx(() => [
                          createVNode(QBtn, {
                            onClick: _cache[2] || (_cache[2] = ($event) => this.$refs.change_phone.showModal(true)),
                            flat: "",
                            color: _ctx.$q.dark.mode ? "secondary" : "blue",
                            "no-caps": "",
                            label: _ctx.$t("Change"),
                            dense: "",
                            size: "md"
                          }, null, 8, ["color", "label"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  $setup.CartStore.transaction_info.transaction_type == "delivery" ? (openBlock(), createBlock(QItem, { key: 0 }, {
                    default: withCtx(() => [
                      createVNode(QItemSection, { avatar: "" }, {
                        default: withCtx(() => [
                          createVNode(QAvatar, {
                            color: "secondary",
                            size: "md",
                            "text-color": "white"
                          }, {
                            default: withCtx(() => [
                              createVNode(QIcon, {
                                name: "las la-map-marker-alt",
                                size: "23px"
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(QItemSection, null, {
                        default: withCtx(() => [
                          createVNode(QItemLabel, { lines: "2" }, {
                            default: withCtx(() => [
                              !$options.hasAddress ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                                createTextVNode(toDisplayString(_ctx.$t("Select your address")), 1)
                              ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                                createTextVNode(toDisplayString($setup.CartStore.address_component.formatted_address), 1)
                              ], 64))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(QItemSection, { side: "" }, {
                        default: withCtx(() => [
                          createVNode(QBtn, {
                            flat: "",
                            color: _ctx.$q.dark.mode ? "secondary" : "blue",
                            "no-caps": "",
                            label: _ctx.$t("Change"),
                            dense: "",
                            size: "md",
                            onClick: _cache[3] || (_cache[3] = ($event) => this.$refs.client_address.showModal(true))
                          }, null, 8, ["color", "label"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : (openBlock(), createBlock(QItem, { key: 1 }, {
                    default: withCtx(() => [
                      createVNode(QItemSection, { avatar: "" }, {
                        default: withCtx(() => [
                          createVNode(QAvatar, {
                            color: "secondary",
                            size: "md",
                            "text-color": "white"
                          }, {
                            default: withCtx(() => [
                              createVNode(QIcon, {
                                name: "las la-utensils",
                                size: "23px"
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(QItemSection, null, {
                        default: withCtx(() => [
                          createVNode(QItemLabel, { lines: "2" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString($setup.CartStore.cart_merchant.address), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(QItemSection, { side: "" }, {
                        default: withCtx(() => [
                          $setup.CartStore.transaction_info.transaction_type == "delivery" ? (openBlock(), createBlock(QBtn, {
                            key: 0,
                            flat: "",
                            color: _ctx.$q.dark.mode ? "secondary" : "blue",
                            "no-caps": "",
                            label: _ctx.$t("Change"),
                            dense: "",
                            size: "md"
                          }, null, 8, ["color", "label"])) : createCommentVNode("", true)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })),
                  $setup.DataStore.enabled_include_utensils ? (openBlock(), createBlock(QItem, { key: 2 }, {
                    default: withCtx(() => [
                      createVNode(QItemSection, { avatar: "" }, {
                        default: withCtx(() => [
                          createVNode(QAvatar, {
                            color: "secondary",
                            size: "md",
                            "text-color": "white"
                          }, {
                            default: withCtx(() => [
                              createVNode(QIcon, {
                                name: "las la-utensils",
                                size: "23px"
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(QItemSection, null, {
                        default: withCtx(() => [
                          createVNode(QItemLabel, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Cutlery")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(QItemLabel, { caption: "" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Include utensils, napkins, etc.")), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(QItemSection, { side: "" }, {
                        default: withCtx(() => [
                          createVNode(QToggle, {
                            modelValue: $data.include_utensils,
                            "onUpdate:modelValue": [
                              _cache[4] || (_cache[4] = ($event) => $data.include_utensils = $event),
                              $options.setUtensil
                            ]
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              $setup.CartStore.transaction_info.transaction_type == "dinein" ? (openBlock(), createBlock(_component_CheckoutBooking, {
                key: 1,
                ref: "checkout_booking",
                transaction_type: $setup.CartStore.transaction_info.transaction_type
              }, null, 8, ["transaction_type"])) : createCommentVNode("", true),
              createVNode(QList, { bordered: "" }, {
                default: withCtx(() => [
                  createVNode(QExpansionItem, {
                    "expand-separator": "",
                    label: _ctx.$t("Order Details"),
                    class: "text-weight-boldx",
                    caption: $setup.CartStore.items_count > 0 ? `${$setup.CartStore.items_count} ` + _ctx.$t("Items") : `${$setup.CartStore.items_count} ` + _ctx.$t("item")
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_CartDetails, {
                        ref: "cart_details",
                        is_checkout: false,
                        payload: $data.payload,
                        onAfterRemoveitem: $options.afterRemoveitem
                      }, null, 8, ["payload", "onAfterRemoveitem"]),
                      $setup.CartStore.hasItem ? (openBlock(), createBlock(_component_DIV, {
                        key: 0,
                        class: "q-pl-md q-pr-md border-grey-top"
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_17, [
                            createVNode(QBtn, {
                              unelevated: "",
                              color: _ctx.$q.dark.mode ? "grey600" : "mygrey",
                              "text-color": _ctx.$q.dark.mode ? "grey300" : "dark",
                              "no-caps": "",
                              size: "md",
                              class: "radius8 q-mt-sm q-mb-md",
                              to: {
                                name: "menu",
                                params: { slug: $setup.CartStore.cart_merchant.slug }
                              }
                            }, {
                              default: withCtx(() => [
                                createVNode(QIcon, {
                                  name: "las la-plus",
                                  size: "15px"
                                }),
                                createBaseVNode("div", _hoisted_18, toDisplayString(_ctx.$t("Add more items")), 1)
                              ]),
                              _: 1
                            }, 8, ["color", "text-color", "to"])
                          ])
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }, 8, ["label", "caption"])
                ]),
                _: 1
              }),
              createBaseVNode("div", _hoisted_19, toDisplayString(_ctx.$t("Discount")), 1),
              $setup.PromoStore.loading ? (openBlock(), createElementBlock("div", _hoisted_20, [
                createBaseVNode("div", _hoisted_21, [
                  createVNode(QSkeleton, { type: "QCheckbox" })
                ]),
                createBaseVNode("div", _hoisted_22, [
                  createVNode(QSkeleton, { type: "rect" })
                ]),
                createBaseVNode("div", _hoisted_23, [
                  createVNode(QSkeleton, { type: "rect" })
                ])
              ])) : (openBlock(), createBlock(QList, {
                key: 3,
                class: "q-mb-sm"
              }, {
                default: withCtx(() => [
                  createVNode(QItem, null, {
                    default: withCtx(() => [
                      createVNode(QItemSection, { avatar: "" }, {
                        default: withCtx(() => [
                          createVNode(QAvatar, {
                            color: "secondary",
                            size: "md",
                            "text-color": "white"
                          }, {
                            default: withCtx(() => [
                              createVNode(QIcon, {
                                name: "local_offer",
                                size: "21px"
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(QItemSection, null, {
                        default: withCtx(() => [
                          $setup.PromoStore.promo_selected[$setup.CartStore.cart_merchant.merchant_id] && $setup.PromoStore.promo_selected[$setup.CartStore.cart_merchant.merchant_id].promo_id ? (openBlock(), createElementBlock("span", {
                            key: 0,
                            class: normalizeClass(["", {
                              "text-grey300": _ctx.$q.dark.mode,
                              "text-grey-8": !_ctx.$q.dark.mode
                            }])
                          }, toDisplayString($setup.PromoStore.promo_selected[$setup.CartStore.cart_merchant.merchant_id].savings), 3)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                            createTextVNode(toDisplayString(_ctx.$t("Add a promo")), 1)
                          ], 64))
                        ]),
                        _: 1
                      }),
                      createVNode(QItemSection, { side: "" }, {
                        default: withCtx(() => [
                          $setup.PromoStore.promo_selected[$setup.CartStore.cart_merchant.merchant_id] && $setup.PromoStore.promo_selected[$setup.CartStore.cart_merchant.merchant_id].promo_id ? (openBlock(), createBlock(QBtn, {
                            key: 0,
                            onClick: _cache[5] || (_cache[5] = ($event) => $options.removePromo(
                              $setup.CartStore.cart_merchant.merchant_id,
                              $setup.PromoStore.promo_selected[$setup.CartStore.cart_merchant.merchant_id]
                            )),
                            loading: $data.loading_promo_rm,
                            flat: "",
                            color: _ctx.$q.dark.mode ? "secondary" : "blue",
                            "no-caps": "",
                            label: "Remove",
                            dense: "",
                            size: "md"
                          }, null, 8, ["loading", "color"])) : (openBlock(), createBlock(QBtn, {
                            key: 1,
                            onClick: _cache[6] || (_cache[6] = ($event) => this.$refs.promo_list.showModal(true)),
                            flat: "",
                            color: _ctx.$q.dark.mode ? "secondary" : "blue",
                            "no-caps": "",
                            label: _ctx.$t("Add"),
                            dense: "",
                            size: "md"
                          }, null, 8, ["color", "label"]))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })),
              $setup.DataStore.points_enabled && $setup.CartStore.points_data.points_activated ? (openBlock(), createBlock(_component_PointsCart, {
                key: 4,
                ref: "cart_points",
                currency_code: $options.getUseCurrency,
                onAfterApplypoints: $options.afterApplypoints,
                use_thresholds: $setup.DataStore.use_thresholds
              }, null, 8, ["currency_code", "onAfterApplypoints", "use_thresholds"])) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_24, toDisplayString(_ctx.$t("Summary")), 1),
              createVNode(QList, {
                dense: "",
                class: "text-grey qlist-min-height text-weight-medium"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList($setup.CartStore.cart_summary, (summary) => {
                    return openBlock(), createElementBlock(Fragment, { key: summary }, [
                      summary.type == "total" ? (openBlock(), createBlock(QItem, {
                        key: 0,
                        class: "text-weight-bold font16 text-dark hidden"
                      }, {
                        default: withCtx(() => [
                          createVNode(QItemSection, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(summary.name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(QItemSection, { side: "" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(summary.value), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)) : (openBlock(), createBlock(QItem, { key: 1 }, {
                        default: withCtx(() => [
                          createVNode(QItemSection, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(summary.name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(QItemSection, { side: "" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(summary.value), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024))
                    ], 64);
                  }), 128))
                ]),
                _: 1
              }),
              $setup.DataStore.tips_data && !$setup.CartStore.cart_loading && $setup.CartStore.enabled_tip == 1 ? (openBlock(), createElementBlock("div", _hoisted_25, [
                createBaseVNode("div", _hoisted_26, [
                  createBaseVNode("div", _hoisted_27, toDisplayString(_ctx.$t("Tips")), 1),
                  $setup.CartStore.tips_data.tips > 0 ? (openBlock(), createBlock(QBtn, {
                    key: 0,
                    flat: "",
                    color: _ctx.$q.dark.mode ? "secondary" : "blue",
                    "no-caps": "",
                    label: _ctx.$t("Remove tips"),
                    dense: "",
                    size: "md",
                    onClick: $options.removeTips,
                    loading: $data.loading_tip_rm
                  }, null, 8, ["color", "label", "onClick", "loading"])) : createCommentVNode("", true)
                ]),
                $setup.CartStore.enabled_tip == 1 ? (openBlock(), createBlock(_component_TipsList, {
                  key: 0,
                  ref: "tips",
                  onAfterApplytips: $options.afterApplytips,
                  tips_data: $data.tips_list,
                  tips_value: $setup.CartStore.tips_data
                }, null, 8, ["onAfterApplytips", "tips_data", "tips_value"])) : createCommentVNode("", true)
              ])) : createCommentVNode("", true),
              !$setup.CartStore.cart_loading && $setup.CartStore.points_data.points_enabled && $setup.CartStore.points_data.points_activated && $setup.CartStore.points_data.points_to_earn > 0 ? (openBlock(), createElementBlock("div", _hoisted_28, [
                createBaseVNode("div", _hoisted_29, [
                  createBaseVNode("div", _hoisted_30, [
                    createVNode(QIcon, {
                      name: "card_giftcard",
                      class: "font16 text-primary"
                    })
                  ]),
                  createBaseVNode("div", null, [
                    createBaseVNode("div", _hoisted_31, toDisplayString($setup.CartStore.points_data.points_label), 1)
                  ])
                ])
              ])) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_32, [
                createBaseVNode("div", _hoisted_33, [
                  createBaseVNode("div", _hoisted_34, toDisplayString(_ctx.$t("Payment")), 1),
                  createVNode(QBtn, {
                    flat: "",
                    color: _ctx.$q.dark.mode ? "secondary" : "blue",
                    "no-caps": "",
                    label: _ctx.$t("Add"),
                    dense: "",
                    size: "md",
                    to: "/account/payments/new?redirect=/checkout"
                  }, null, 8, ["color", "label"])
                ])
              ]),
              $setup.DataStore.digitalwallet_enabled ? (openBlock(), createBlock(_component_WalletComponents, {
                key: 7,
                ref: "digital_wallet",
                cart_updated: $setup.CartStore.cart_reloading,
                onAfterApplywallet: $options.afterApplywallet
              }, null, 8, ["cart_updated", "onAfterApplywallet"])) : createCommentVNode("", true),
              $setup.CartStore.cart_merchant.merchant_id ? (openBlock(), createBlock(_component_PaymentListSaved, {
                key: 8,
                ref: "saved_payment",
                onSetPaymentuuid: $options.setPaymentuuid,
                onSetPayment: $options.setPayment,
                onAfterLoadpaymentlist: $options.afterLoadpaymentlist,
                merchant_id: $setup.CartStore.cart_merchant.merchant_id,
                wallet_data: $data.wallet_data
              }, null, 8, ["onSetPaymentuuid", "onSetPayment", "onAfterLoadpaymentlist", "merchant_id", "wallet_data"])) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_35, [
                (openBlock(true), createElementBlock(Fragment, null, renderList($setup.PaymentStore.getPaymentList, (payment_item) => {
                  return openBlock(), createElementBlock(Fragment, { key: payment_item }, [
                    payment_item.payment_uuid == $data.payment_uuid && payment_item.attr_required == 1 ? (openBlock(), createBlock(QInput, {
                      key: 0,
                      modelValue: $data.payment_change,
                      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.payment_change = $event),
                      type: "number",
                      label: _ctx.$t("Change for how much?"),
                      outlined: "",
                      "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
                      "label-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                      borderless: "",
                      class: "input-borderless"
                    }, null, 8, ["modelValue", "label", "bg-color", "label-color"])) : createCommentVNode("", true)
                  ], 64);
                }), 128))
              ]),
              createVNode(QSpace, { class: "q-pa-md" })
            ], 64))
          ]),
          _: 1
        }, 8, ["class"])
      ]),
      _: 1
    }, 8, ["onRefresh"]),
    createVNode(QInnerLoading, {
      showing: $setup.CartStore.cart_reloading,
      color: "primary",
      size: "md",
      "label-class": "dark"
    }, null, 8, ["showing"]),
    $setup.CartStore.items_count > 0 && !$setup.CartStore.cart_loading ? (openBlock(), createBlock(QFooter, {
      key: 0,
      reveal: "",
      class: normalizeClass(["q-pl-md q-pr-md q-pb-sm q-pt-sm text-dark", {
        "bg-primary": !$setup.CartStore.cart_reloading,
        "bg-grey-5": $setup.CartStore.cart_reloading
      }])
    }, {
      default: withCtx(() => [
        createVNode(QBtn, {
          onClick: $options.onPlaceorder,
          loading: $data.loading,
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
            createBaseVNode("div", _hoisted_36, [
              createBaseVNode("div", _hoisted_37, toDisplayString(_ctx.$t("Place Order")), 1),
              $setup.CartStore.cart_total ? (openBlock(), createElementBlock("div", _hoisted_38, toDisplayString($setup.CartStore.cart_total.value), 1)) : createCommentVNode("", true)
            ])
          ]),
          _: 1
        }, 8, ["onClick", "loading", "disable", "color"])
      ]),
      _: 1
    }, 8, ["class"])) : createCommentVNode("", true),
    createVNode(_component_DeliverySched, {
      ref: "delivery_sched",
      slug: $setup.CartStore.cart_merchant.slug,
      onAfterSavetrans: $options.afterSavetrans
    }, null, 8, ["slug", "onAfterSavetrans"]),
    createVNode(_component_ChangePhone, {
      ref: "change_phone",
      onAfterChangephone: $options.afterChangephone,
      prefixes: $setup.DataStore.phone_prefix_data,
      phone_prefix_orig: $setup.CartStore.phone_details.default_prefix,
      contact_number_orig: $setup.CartStore.phone_details.contact_number
    }, null, 8, ["onAfterChangephone", "prefixes", "phone_prefix_orig", "contact_number_orig"]),
    createVNode(_component_ClientAddress, {
      ref: "client_address",
      redirect: this.$route.path,
      onAfterSetplaceid: $options.afterSetplaceid,
      onFillAddress: $options.fillAddress
    }, null, 8, ["redirect", "onAfterSetplaceid", "onFillAddress"]),
    $setup.CartStore.cart_merchant.merchant_id ? (openBlock(), createBlock(_component_PromoList, {
      key: 1,
      ref: "promo_list",
      enabled_voucher: $setup.CartStore.enabled_voucher,
      onAfterApplypromo: $options.afterApplypromo,
      onAfterRemovepromo: $options.afterRemovepromo,
      merchant_id: $setup.CartStore.cart_merchant.merchant_id
    }, null, 8, ["enabled_voucher", "onAfterApplypromo", "onAfterRemovepromo", "merchant_id"])) : createCommentVNode("", true),
    createVNode(_component_StripeComponents, {
      ref: "stripe",
      payment_code: "stripe",
      title: "Add Stripe",
      label: {
        submit: this.$t("Add Stripe"),
        notes: this.$t("Add your card account")
      },
      payment_credentials: $setup.PaymentStore.credentials[$setup.CartStore.cart_merchant.merchant_id],
      onAfterAddpayment: $options.afterAddpayment,
      onAfterPayment: $options.afterPayment
    }, null, 8, ["label", "payment_credentials", "onAfterAddpayment", "onAfterPayment"]),
    createVNode(_component_PaypalComponents, {
      ref: "paypal",
      payment_code: "paypal",
      title: "Add Paypal",
      label: {
        submit: this.$t("Add Paypal"),
        notes: this.$t("Pay using your paypal account"),
        payment_title: this.$t("Pay using Paypal"),
        payment_subtitle: this.$t(
          "You will re-direct to paypal account to login to your account."
        )
      },
      payment_credentials: $setup.PaymentStore.credentials[$setup.CartStore.cart_merchant.merchant_id],
      onAfterAddpayment: $options.afterAddpayment,
      onAfterPayment: $options.afterPayment
    }, null, 8, ["label", "payment_credentials", "onAfterAddpayment", "onAfterPayment"]),
    createVNode(_component_RazorpayComponents, {
      ref: "razorpay",
      payment_code: "razorpay",
      title: "Add Razorpay",
      label: {
        submit: this.$t("Submit"),
        notes: this.$t("Pay using your Razorpay account")
      },
      payment_credentials: $setup.PaymentStore.credentials[$setup.CartStore.cart_merchant.merchant_id],
      onAfterAddpayment: $options.afterAddpayment,
      onAfterPayment: $options.afterPayment
    }, null, 8, ["label", "payment_credentials", "onAfterAddpayment", "onAfterPayment"]),
    createVNode(_component_MercadopagoComponents, {
      ref: "mercadopago",
      payment_code: "mercadopago",
      title: "Add Mercadopago",
      label: {
        submit: this.$t("Add Mercadopago"),
        submit_form: this.$t("Submit"),
        notes: this.$t("Pay using your mercadopago account")
      },
      payment_credentials: $setup.PaymentStore.credentials[$setup.CartStore.cart_merchant.merchant_id],
      onAfterAddpayment: $options.afterAddpayment,
      onAfterPayment: $options.afterPayment
    }, null, 8, ["label", "payment_credentials", "onAfterAddpayment", "onAfterPayment"]),
    $options.getMerchantUUID ? (openBlock(), createBlock(_component_ComponentsRealtime, {
      key: 2,
      ref: "realtime",
      getevent: "cart",
      subscribe_to: $options.getMerchantUUID,
      onAfterReceive: $options.afterReceive
    }, null, 8, ["subscribe_to", "onAfterReceive"])) : createCommentVNode("", true)
  ], 64);
}
var CheckoutPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "CheckoutPage.vue"]]);
export { CheckoutPage as default };
//# sourceMappingURL=data:application/json;base64,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QkEsS0FBSTtBQUFBLE1BQ0osY0FBYTtBQUFBLE1BQ2IsT0FBTTtBQUFBLE1BQ0wsT0FBSztBQUFBLHFCQUF1QixHQUFFO0FBQUEsb0JBQWtDLEdBQUU7QUFBQSw0QkFBNkQsR0FBRTtBQUFBLCtCQUFtRDtBQUFBOzs7TUFRcEwscUJBQTRCLG9CQUFhLFlBQVksaUJBQVUsY0FBYztBQUFBLE1BRzdFLG1CQUFrQixTQUFlO0FBQUEsTUFDakMsZ0JBQWUsU0FBWTtBQUFBO0lBRzlCQSxZQWFFO0FBQUEsTUFaQSxLQUFJO0FBQUEsTUFDSixjQUFhO0FBQUEsTUFDYixPQUFNO0FBQUEsTUFDTCxPQUFLO0FBQUEscUJBQXVCLEdBQUU7QUFBQSxvQkFBOEIsR0FBRTtBQUFBO01BSTlELHFCQUE0QixvQkFBYSxZQUFZLGlCQUFVLGNBQWM7QUFBQSxNQUc3RSxtQkFBa0IsU0FBZTtBQUFBLE1BQ2pDLGdCQUFlLFNBQVk7QUFBQTtJQUc5QkEsWUFjRTtBQUFBLE1BYkEsS0FBSTtBQUFBLE1BQ0osY0FBYTtBQUFBLE1BQ2IsT0FBTTtBQUFBLE1BQ0wsT0FBSztBQUFBLHFCQUF1QixHQUFFO0FBQUEsMEJBQTZDLEdBQUU7QUFBQSxvQkFBOEIsR0FBRTtBQUFBO01BSzdHLHFCQUE0QixvQkFBYSxZQUFZLGlCQUFVLGNBQWM7QUFBQSxNQUc3RSxtQkFBa0IsU0FBZTtBQUFBLE1BQ2pDLGdCQUFlLFNBQVk7QUFBQTtJQUdkLFNBQWUsZ0NBQzdCRSxZQU1xQjtBQUFBO01BTG5CLEtBQUk7QUFBQSxNQUNKLFVBQVM7QUFBQSxNQUNSLGNBQWMsU0FBZTtBQUFBLE1BQzdCLGdCQUFlLFNBQVk7QUFBQSIsIm5hbWVzIjpbImp3dF9kZWNvZGUiLCJkYXRhIiwiX2NyZWF0ZVZOb2RlIiwiX25vcm1hbGl6ZUNsYXNzIiwiX2NyZWF0ZUJsb2NrIiwiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9GcmFnbWVudCIsIl9jcmVhdGVUZXh0Vk5vZGUiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc3RvcmVzL1N0b3JlTWFwcy5qcyIsIi4uLy4uLy4uL3NyYy9wYWdlcy9DYXJ0L0NoZWNrb3V0UGFnZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVmaW5lU3RvcmUgfSBmcm9tICdwaW5pYSdcbmltcG9ydCBBUElpbnRlcmZhY2UgZnJvbSAnc3JjL2FwaS9BUElpbnRlcmZhY2UnXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCBqd3RfZGVjb2RlIGZyb20gJ2p3dC1kZWNvZGUnXG5cbmV4cG9ydCBjb25zdCB1c2VNYXBzU3RvcmUgPSBkZWZpbmVTdG9yZSgnbWFwc19zdG9yZScsIHtcbiAgc3RhdGU6ICgpID0+ICh7XG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgbWFwc19jb25maWc6IFtdLFxuICAgIG1hcmtlcl9wb3NpdGlvbjogW11cbiAgfSksXG4gIGFjdGlvbnM6IHtcbiAgICBnZXRNYXBjb25maWcgKCkge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxuICAgICAgQVBJaW50ZXJmYWNlLmdldE1hcGNvbmZpZygpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgIHRoaXMubWFwc19jb25maWcgPSBqd3RfZGVjb2RlKGRhdGEuZGV0YWlscylcbiAgICAgICAgICB0aGlzLm1hcmtlcl9wb3NpdGlvbiA9IHsgbGF0OiBwYXJzZUZsb2F0KHRoaXMubWFwc19jb25maWcuZGVmYXVsdF9sYXQpLCBsbmc6IHBhcnNlRmxvYXQodGhpcy5tYXBzX2NvbmZpZy5kZWZhdWx0X2xuZykgfVxuICAgICAgICB9KVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgICAgfSlcbiAgICB9XG4gIH1cbn0pXG4iLCI8dGVtcGxhdGU+XG4gIDxxLXB1bGwtdG8tcmVmcmVzaCBAcmVmcmVzaD1cInJlZnJlc2hcIj5cbiAgICA8cS1oZWFkZXJcbiAgICAgIHJldmVhbFxuICAgICAgcmV2ZWFsLW9mZnNldD1cIjEwXCJcbiAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgJ2JnLW15ZGFyayB0ZXh0LXdoaXRlJzogJHEuZGFyay5tb2RlLFxuICAgICAgICAnYmctd2hpdGUgdGV4dC1ibGFjayc6ICEkcS5kYXJrLm1vZGUsXG4gICAgICB9XCJcbiAgICA+XG4gICAgICA8cS10b29sYmFyPlxuICAgICAgICA8cS1idG5cbiAgICAgICAgICBAY2xpY2s9XCIkcm91dGVyLmJhY2soKVwiXG4gICAgICAgICAgZmxhdFxuICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgZGVuc2VcbiAgICAgICAgICBpY29uPVwibGFzIGxhLWFuZ2xlLWxlZnRcIlxuICAgICAgICAgIGNsYXNzPVwicS1tci1zbVwiXG4gICAgICAgICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ3doaXRlJyA6ICdkYXJrJ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxxLXRvb2xiYXItdGl0bGUgY2xhc3M9XCJ0ZXh0LXdlaWdodC1ib2xkXCI+e3tcbiAgICAgICAgICAkdChcIk9yZGVyIENvbmZpcm1hdGlvblwiKVxuICAgICAgICB9fTwvcS10b29sYmFyLXRpdGxlPlxuICAgICAgPC9xLXRvb2xiYXI+XG4gICAgPC9xLWhlYWRlcj5cbiAgICA8cS1wYWdlXG4gICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICdmbGV4IGZsZXgtY2VudGVyJzogIUNhcnRTdG9yZS5oYXNJdGVtICYmICFDYXJ0U3RvcmUuY2FydF9sb2FkaW5nLFxuICAgICAgfVwiXG4gICAgPlxuICAgICAgPHRlbXBsYXRlIHYtaWY9XCJDYXJ0U3RvcmUuY2FydF9sb2FkaW5nXCI+XG4gICAgICAgIDxxLWlubmVyLWxvYWRpbmdcbiAgICAgICAgICA6c2hvd2luZz1cInRydWVcIlxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgICBsYWJlbC1jbGFzcz1cImRhcmtcIlxuICAgICAgLz48L3RlbXBsYXRlPlxuXG4gICAgICA8dGVtcGxhdGUgdi1lbHNlLWlmPVwiIUNhcnRTdG9yZS5oYXNJdGVtICYmICFDYXJ0U3RvcmUuY2FydF9sb2FkaW5nXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBmdWxsLXdpZHRoXCI+XG4gICAgICAgICAgPHEtaW1nXG4gICAgICAgICAgICBzcmM9XCJjYXJ0LWVtcHR5LnBuZ1wiXG4gICAgICAgICAgICBmaXQ9XCJmaWxsXCJcbiAgICAgICAgICAgIHNwaW5uZXItY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiA4MHB4OyBtYXgtd2lkdGg6IDgwcHhcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDUgdGV4dC13ZWlnaHQtYm9sZFwiPlxuICAgICAgICAgICAge3sgJHQoXCJZb3VyIGNhcnQgaXMgZW1wdHlcIikgfX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cCBjbGFzcz1cInRleHQtZ3JleSBmb250MTJcIj5cbiAgICAgICAgICAgIHt7ICR0KFwiWW91IGRvbid0IGhhdmUgYW55IG9yZGVycyBoZXJlISBsZXQncyBjaGFuZ2UgdGhhdCFcIikgfX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgPCEtLSBpbmZvIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicS1wbC1tZCBxLXByLW1kIHEtbWItc21cIj5cbiAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgIGNsYXNzPVwicS1wYS1ub25lXCJcbiAgICAgICAgICAgIDp0bz1cIntcbiAgICAgICAgICAgICAgbmFtZTogJ21lbnUnLFxuICAgICAgICAgICAgICBwYXJhbXM6IHsgc2x1ZzogQ2FydFN0b3JlLmNhcnRfbWVyY2hhbnQuc2x1ZyB9LFxuICAgICAgICAgICAgfVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDYgdGV4dC13ZWlnaHQtYm9sZHggbGluZS1ub3JtYWxcIj5cbiAgICAgICAgICAgICAge3sgQ2FydFN0b3JlLmNhcnRfbWVyY2hhbnQucmVzdGF1cmFudF9uYW1lIH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxxLWljb24gbmFtZT1cImxhcyBsYS1hbmdsZS1yaWdodFwiIGNvbG9yPVwiZ3JleVwiIHNpemU9XCIxNXB4XCI+PC9xLWljb24+XG4gICAgICAgICAgPC9xLWJ0bj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHEtZ3V0dGVyLXNtXCI+XG4gICAgICAgICAgICA8cS1pbWdcbiAgICAgICAgICAgICAgOnNyYz1cIkNhcnRTdG9yZS5jYXJ0X21lcmNoYW50LmxvZ29cIlxuICAgICAgICAgICAgICBsYXp5XG4gICAgICAgICAgICAgIGZpdD1cImNvdmVyXCJcbiAgICAgICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDcwcHg7IHdpZHRoOiA3MHB4XCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJyYWRpdXM4XCJcbiAgICAgICAgICAgICAgc3Bpbm5lci1jb2xvcj1cImFtYmVyXCJcbiAgICAgICAgICAgICAgc3Bpbm5lci1zaXplPVwic21cIlxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC04XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250MTMgdGV4dC13ZWlnaHQtYm9sZFwiPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgdi1pZj1cIlxuICAgICAgICAgICAgICAgICAgICBDYXJ0U3RvcmUuZGF0YV90cmFuc2FjdGlvbltcbiAgICAgICAgICAgICAgICAgICAgICBDYXJ0U3RvcmUudHJhbnNhY3Rpb25faW5mby50cmFuc2FjdGlvbl90eXBlXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgICAgICAgQ2FydFN0b3JlLmRhdGFfdHJhbnNhY3Rpb25bXG4gICAgICAgICAgICAgICAgICAgICAgQ2FydFN0b3JlLnRyYW5zYWN0aW9uX2luZm8udHJhbnNhY3Rpb25fdHlwZVxuICAgICAgICAgICAgICAgICAgICBdLnNlcnZpY2VfbmFtZVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICAgICAgICAgICAgICB7eyBDYXJ0U3RvcmUudHJhbnNhY3Rpb25faW5mby50cmFuc2FjdGlvbl90eXBlIH19XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAsXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWNhcGl0YWxpemVcIlxuICAgICAgICAgICAgICAgICAgPnt7IENhcnRTdG9yZS50cmFuc2FjdGlvbl9pbmZvLndoZW50b19kZWxpdmVyIH19LDwvc3BhblxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHYtaWY9XCJDYXJ0U3RvcmUudHJhbnNhY3Rpb25faW5mby53aGVudG9fZGVsaXZlciA9PSAnc2NoZWR1bGUnXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImZvbnQxMyB0ZXh0LXdlaWdodC1saWdodCB0ZXh0LXdlaWdodC1tZWRpdW1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3sgQ2FydFN0b3JlLnRyYW5zYWN0aW9uX2luZm8uZGVsaXZlcnlfZGF0ZV9wcmV0dHkgfX1cbiAgICAgICAgICAgICAgICB7eyBDYXJ0U3RvcmUudHJhbnNhY3Rpb25faW5mby5kZWxpdmVyeV90aW1lLnByZXR0eV90aW1lIH19XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgdi1lbHNlIGNsYXNzPVwiZm9udDEzIHRleHQtd2VpZ2h0LWxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICB2LWlmPVwiXG4gICAgICAgICAgICAgICAgICAgIENhcnRTdG9yZS5kYXRhX3RyYW5zYWN0aW9uW1xuICAgICAgICAgICAgICAgICAgICAgIENhcnRTdG9yZS50cmFuc2FjdGlvbl9pbmZvLnRyYW5zYWN0aW9uX3R5cGVcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7e1xuICAgICAgICAgICAgICAgICAgICBDYXJ0U3RvcmUuZGF0YV90cmFuc2FjdGlvbltcbiAgICAgICAgICAgICAgICAgICAgICBDYXJ0U3RvcmUudHJhbnNhY3Rpb25faW5mby50cmFuc2FjdGlvbl90eXBlXG4gICAgICAgICAgICAgICAgICAgIF0uc2VydmljZV9uYW1lXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAge3sgJHQoXCJpblwiKSB9fSB7eyBDYXJ0U3RvcmUudHJhbnNhY3Rpb25faW5mby5lc3RpbWF0aW9uIH19LFxuICAgICAgICAgICAgICAgICAge3sgJHQoXCJtaW5zXCIpIH19XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnQxMSB0ZXh0LXdlaWdodC1saWdodCBlbGxpcHNpc1wiPlxuICAgICAgICAgICAgICAgIHt7IENhcnRTdG9yZS5jYXJ0X21lcmNoYW50LmFkZHJlc3MgfX1cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICAgIDpjb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdzZWNvbmRhcnknIDogJ2JsdWUnXCJcbiAgICAgICAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ0NoYW5nZSBvcmRlciBzZXR0aW5ncycpXCJcbiAgICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJxLXB0LW5vbmVcIlxuICAgICAgICAgICAgICAgIEBjbGljaz1cInRoaXMuJHJlZnMuZGVsaXZlcnlfc2NoZWQuc2hvd1NjaGVkKHRydWUpXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPCEtLSBlbmQgaW5mbyAtLT5cblxuICAgICAgICA8ZGl2XG4gICAgICAgICAgdi1pZj1cIiFDYXJ0U3RvcmUuY2FuUHJvY2VlZCAmJiAhQ2FydFN0b3JlLmNhcnRfbG9hZGluZ1wiXG4gICAgICAgICAgY2xhc3M9XCJxLXBsLW1kIHEtcHItbWRcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJxLXBhLW1kIHJhZGl1czggZm9udDEyXCJcbiAgICAgICAgICAgIHN0eWxlPVwiYm90dG9tOiA1MXB4XCJcbiAgICAgICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICAgJ2JnLWdyZXk2MDAgdGV4dC1ncmV5MzAwJzogJHEuZGFyay5tb2RlLFxuICAgICAgICAgICAgICAnYmcteWVsbG93IHRleHQtZGFyayc6ICEkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgICB9XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7eyBDYXJ0U3RvcmUuZ2V0RXJyb3JNc2cgfX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwicS1wbC1tZCBxLXByLW1kIHEtbWItc20gZWxsaXBzaXMgZm9udDEzIHRleHQtd2VpZ2h0LWJvbGQgcS1wdC14c1wiXG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtY2FwaXRhbGl6ZVwiPnt7XG4gICAgICAgICAgICBDYXJ0U3RvcmUudHJhbnNhY3Rpb25faW5mby50cmFuc2FjdGlvbl90eXBlXG4gICAgICAgICAgfX08L3NwYW4+XG4gICAgICAgICAge3sgJHQoXCJEZXRhaWxzXCIpIH19XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxxLWxpc3QgZGVuc2U+XG4gICAgICAgICAgPHEtaXRlbT5cbiAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgICAgIDxxLWF2YXRhciBjb2xvcj1cInNlY29uZGFyeVwiIHNpemU9XCJtZFwiIHRleHQtY29sb3I9XCJ3aGl0ZVwiPlxuICAgICAgICAgICAgICAgIDxxLWljb24gbmFtZT1cImxhcyBsYS1waG9uZVwiIHNpemU9XCIyM3B4XCI+PC9xLWljb24+XG4gICAgICAgICAgICAgIDwvcS1hdmF0YXI+XG4gICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIkNhcnRTdG9yZS5waG9uZV9kZXRhaWxzLmRlZmF1bHRfcHJlZml4XCI+XG4gICAgICAgICAgICAgICAgKHt7IENhcnRTdG9yZS5waG9uZV9kZXRhaWxzLmRlZmF1bHRfcHJlZml4IH19KVxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICB7eyBDYXJ0U3RvcmUucGhvbmVfZGV0YWlscy5jb250YWN0X251bWJlciB9fVxuICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlPlxuICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJ0aGlzLiRyZWZzLmNoYW5nZV9waG9uZS5zaG93TW9kYWwodHJ1ZSlcIlxuICAgICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgICA6Y29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnc2Vjb25kYXJ5JyA6ICdibHVlJ1wiXG4gICAgICAgICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdDaGFuZ2UnKVwiXG4gICAgICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICB2LWlmPVwiQ2FydFN0b3JlLnRyYW5zYWN0aW9uX2luZm8udHJhbnNhY3Rpb25fdHlwZSA9PSAnZGVsaXZlcnknXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgICAgICA8cS1hdmF0YXIgY29sb3I9XCJzZWNvbmRhcnlcIiBzaXplPVwibWRcIiB0ZXh0LWNvbG9yPVwid2hpdGVcIj5cbiAgICAgICAgICAgICAgICA8cS1pY29uIG5hbWU9XCJsYXMgbGEtbWFwLW1hcmtlci1hbHRcIiBzaXplPVwiMjNweFwiPjwvcS1pY29uPlxuICAgICAgICAgICAgICA8L3EtYXZhdGFyPlxuICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBsaW5lcz1cIjJcIj5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIiFoYXNBZGRyZXNzXCI+XG4gICAgICAgICAgICAgICAgICB7eyAkdChcIlNlbGVjdCB5b3VyIGFkZHJlc3NcIikgfX1cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICAgICAgICAgICAgICB7eyBDYXJ0U3RvcmUuYWRkcmVzc19jb21wb25lbnQuZm9ybWF0dGVkX2FkZHJlc3MgfX1cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZT5cbiAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICAgIDpjb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdzZWNvbmRhcnknIDogJ2JsdWUnXCJcbiAgICAgICAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ0NoYW5nZScpXCJcbiAgICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwidGhpcy4kcmVmcy5jbGllbnRfYWRkcmVzcy5zaG93TW9kYWwodHJ1ZSlcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8L3EtaXRlbT5cblxuICAgICAgICAgIDxxLWl0ZW0gdi1lbHNlPlxuICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICAgICAgPHEtYXZhdGFyIGNvbG9yPVwic2Vjb25kYXJ5XCIgc2l6ZT1cIm1kXCIgdGV4dC1jb2xvcj1cIndoaXRlXCI+XG4gICAgICAgICAgICAgICAgPHEtaWNvbiBuYW1lPVwibGFzIGxhLXV0ZW5zaWxzXCIgc2l6ZT1cIjIzcHhcIj48L3EtaWNvbj5cbiAgICAgICAgICAgICAgPC9xLWF2YXRhcj5cbiAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgbGluZXM9XCIyXCI+e3tcbiAgICAgICAgICAgICAgICBDYXJ0U3RvcmUuY2FydF9tZXJjaGFudC5hZGRyZXNzXG4gICAgICAgICAgICAgIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICAgIHYtaWY9XCJDYXJ0U3RvcmUudHJhbnNhY3Rpb25faW5mby50cmFuc2FjdGlvbl90eXBlID09ICdkZWxpdmVyeSdcIlxuICAgICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgICA6Y29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnc2Vjb25kYXJ5JyA6ICdibHVlJ1wiXG4gICAgICAgICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdDaGFuZ2UnKVwiXG4gICAgICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8L3EtaXRlbT5cblxuICAgICAgICAgIDxxLWl0ZW0gdi1pZj1cIkRhdGFTdG9yZS5lbmFibGVkX2luY2x1ZGVfdXRlbnNpbHNcIj5cbiAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgICAgIDxxLWF2YXRhciBjb2xvcj1cInNlY29uZGFyeVwiIHNpemU9XCJtZFwiIHRleHQtY29sb3I9XCJ3aGl0ZVwiPlxuICAgICAgICAgICAgICAgIDxxLWljb24gbmFtZT1cImxhcyBsYS11dGVuc2lsc1wiIHNpemU9XCIyM3B4XCI+PC9xLWljb24+XG4gICAgICAgICAgICAgIDwvcS1hdmF0YXI+XG4gICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsPnt7ICR0KFwiQ3V0bGVyeVwiKSB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24+e3tcbiAgICAgICAgICAgICAgICAkdChcIkluY2x1ZGUgdXRlbnNpbHMsIG5hcGtpbnMsIGV0Yy5cIilcbiAgICAgICAgICAgICAgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZT5cbiAgICAgICAgICAgICAgPHEtdG9nZ2xlXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImluY2x1ZGVfdXRlbnNpbHNcIlxuICAgICAgICAgICAgICAgIEB1cGRhdGU6bW9kZWwtdmFsdWU9XCJzZXRVdGVuc2lsXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgIDwvcS1saXN0PlxuXG4gICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgIHYtaWY9XCJDYXJ0U3RvcmUudHJhbnNhY3Rpb25faW5mby50cmFuc2FjdGlvbl90eXBlID09ICdkaW5laW4nXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxDaGVja291dEJvb2tpbmdcbiAgICAgICAgICAgIHJlZj1cImNoZWNrb3V0X2Jvb2tpbmdcIlxuICAgICAgICAgICAgOnRyYW5zYWN0aW9uX3R5cGU9XCJDYXJ0U3RvcmUudHJhbnNhY3Rpb25faW5mby50cmFuc2FjdGlvbl90eXBlXCJcbiAgICAgICAgICA+PC9DaGVja291dEJvb2tpbmc+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPHEtbGlzdCBib3JkZXJlZD5cbiAgICAgICAgICA8cS1leHBhbnNpb24taXRlbVxuICAgICAgICAgICAgZXhwYW5kLXNlcGFyYXRvclxuICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ09yZGVyIERldGFpbHMnKVwiXG4gICAgICAgICAgICBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGR4XCJcbiAgICAgICAgICAgIDpjYXB0aW9uPVwiXG4gICAgICAgICAgICAgIENhcnRTdG9yZS5pdGVtc19jb3VudCA+IDBcbiAgICAgICAgICAgICAgICA/IGAke0NhcnRTdG9yZS5pdGVtc19jb3VudH0gYCArICR0KCdJdGVtcycpXG4gICAgICAgICAgICAgICAgOiBgJHtDYXJ0U3RvcmUuaXRlbXNfY291bnR9IGAgKyAkdCgnaXRlbScpXG4gICAgICAgICAgICBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDYXJ0RGV0YWlsc1xuICAgICAgICAgICAgICByZWY9XCJjYXJ0X2RldGFpbHNcIlxuICAgICAgICAgICAgICA6aXNfY2hlY2tvdXQ9XCJmYWxzZVwiXG4gICAgICAgICAgICAgIDpwYXlsb2FkPVwicGF5bG9hZFwiXG4gICAgICAgICAgICAgIEBhZnRlci1yZW1vdmVpdGVtPVwiYWZ0ZXJSZW1vdmVpdGVtXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RElWXG4gICAgICAgICAgICAgIHYtaWY9XCJDYXJ0U3RvcmUuaGFzSXRlbVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwicS1wbC1tZCBxLXByLW1kIGJvcmRlci1ncmV5LXRvcFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cganVzdGlmeS1lbmRcIj5cbiAgICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICAgICAgICAgIDpjb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5NjAwJyA6ICdteWdyZXknXCJcbiAgICAgICAgICAgICAgICAgIDp0ZXh0LWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXkzMDAnIDogJ2RhcmsnXCJcbiAgICAgICAgICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cInJhZGl1czggcS1tdC1zbSBxLW1iLW1kXCJcbiAgICAgICAgICAgICAgICAgIDp0bz1cIntcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ21lbnUnLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHsgc2x1ZzogQ2FydFN0b3JlLmNhcnRfbWVyY2hhbnQuc2x1ZyB9LFxuICAgICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHEtaWNvbiBuYW1lPVwibGFzIGxhLXBsdXNcIiBzaXplPVwiMTVweFwiPjwvcS1pY29uPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInEtcGwtc21cIj57eyAkdChcIkFkZCBtb3JlIGl0ZW1zXCIpIH19PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9xLWJ0bj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0RJVj5cbiAgICAgICAgICA8L3EtZXhwYW5zaW9uLWl0ZW0+XG4gICAgICAgIDwvcS1saXN0PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJxLXBsLW1kIHEtcHItbWQgcS1tYi1zbSBmb250MTMgdGV4dC13ZWlnaHQtYm9sZCBxLXB0LXhzXCI+XG4gICAgICAgICAge3sgJHQoXCJEaXNjb3VudFwiKSB9fVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIlByb21vU3RvcmUubG9hZGluZ1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJxLXBsLW1kIHEtcHItbWQgcm93IHEtZ3V0dGVyLXNtIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0yXCI+PHEtc2tlbGV0b24gdHlwZT1cIlFDaGVja2JveFwiIC8+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+PHEtc2tlbGV0b24gdHlwZT1cInJlY3RcIiAvPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zXCI+PHEtc2tlbGV0b24gdHlwZT1cInJlY3RcIiAvPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICAgIDxxLWxpc3QgY2xhc3M9XCJxLW1iLXNtXCI+XG4gICAgICAgICAgICA8cS1pdGVtPlxuICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgICAgICAgIDxxLWF2YXRhciBjb2xvcj1cInNlY29uZGFyeVwiIHNpemU9XCJtZFwiIHRleHQtY29sb3I9XCJ3aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgPHEtaWNvbiBuYW1lPVwibG9jYWxfb2ZmZXJcIiBzaXplPVwiMjFweFwiPjwvcS1pY29uPlxuICAgICAgICAgICAgICAgIDwvcS1hdmF0YXI+XG4gICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgIHYtaWY9XCJcbiAgICAgICAgICAgICAgICAgICAgUHJvbW9TdG9yZS5wcm9tb19zZWxlY3RlZFtcbiAgICAgICAgICAgICAgICAgICAgICBDYXJ0U3RvcmUuY2FydF9tZXJjaGFudC5tZXJjaGFudF9pZFxuICAgICAgICAgICAgICAgICAgICBdICYmXG4gICAgICAgICAgICAgICAgICAgIFByb21vU3RvcmUucHJvbW9fc2VsZWN0ZWRbXG4gICAgICAgICAgICAgICAgICAgICAgQ2FydFN0b3JlLmNhcnRfbWVyY2hhbnQubWVyY2hhbnRfaWRcbiAgICAgICAgICAgICAgICAgICAgXS5wcm9tb19pZFxuICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIlwiXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICAgICAgICAgICAndGV4dC1ncmV5MzAwJzogJHEuZGFyay5tb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWdyZXktOCc6ICEkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7e1xuICAgICAgICAgICAgICAgICAgICAgIFByb21vU3RvcmUucHJvbW9fc2VsZWN0ZWRbXG4gICAgICAgICAgICAgICAgICAgICAgICBDYXJ0U3RvcmUuY2FydF9tZXJjaGFudC5tZXJjaGFudF9pZFxuICAgICAgICAgICAgICAgICAgICAgIF0uc2F2aW5nc1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT4ge3sgJHQoXCJBZGQgYSBwcm9tb1wiKSB9fSA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZT5cbiAgICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICAgIHYtaWY9XCJcbiAgICAgICAgICAgICAgICAgICAgUHJvbW9TdG9yZS5wcm9tb19zZWxlY3RlZFtcbiAgICAgICAgICAgICAgICAgICAgICBDYXJ0U3RvcmUuY2FydF9tZXJjaGFudC5tZXJjaGFudF9pZFxuICAgICAgICAgICAgICAgICAgICBdICYmXG4gICAgICAgICAgICAgICAgICAgIFByb21vU3RvcmUucHJvbW9fc2VsZWN0ZWRbXG4gICAgICAgICAgICAgICAgICAgICAgQ2FydFN0b3JlLmNhcnRfbWVyY2hhbnQubWVyY2hhbnRfaWRcbiAgICAgICAgICAgICAgICAgICAgXS5wcm9tb19pZFxuICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgIEBjbGljaz1cIlxuICAgICAgICAgICAgICAgICAgICByZW1vdmVQcm9tbyhcbiAgICAgICAgICAgICAgICAgICAgICBDYXJ0U3RvcmUuY2FydF9tZXJjaGFudC5tZXJjaGFudF9pZCxcbiAgICAgICAgICAgICAgICAgICAgICBQcm9tb1N0b3JlLnByb21vX3NlbGVjdGVkW1xuICAgICAgICAgICAgICAgICAgICAgICAgQ2FydFN0b3JlLmNhcnRfbWVyY2hhbnQubWVyY2hhbnRfaWRcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICA6bG9hZGluZz1cImxvYWRpbmdfcHJvbW9fcm1cIlxuICAgICAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICAgICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ3NlY29uZGFyeScgOiAnYmx1ZSdcIlxuICAgICAgICAgICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJSZW1vdmVcIlxuICAgICAgICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICAgIHYtZWxzZVxuICAgICAgICAgICAgICAgICAgQGNsaWNrPVwidGhpcy4kcmVmcy5wcm9tb19saXN0LnNob3dNb2RhbCh0cnVlKVwiXG4gICAgICAgICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICAgICAgICA6Y29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnc2Vjb25kYXJ5JyA6ICdibHVlJ1wiXG4gICAgICAgICAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnQWRkJylcIlxuICAgICAgICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgIDwvcS1saXN0PlxuICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgIHYtaWY9XCJcbiAgICAgICAgICAgIERhdGFTdG9yZS5wb2ludHNfZW5hYmxlZCAmJiBDYXJ0U3RvcmUucG9pbnRzX2RhdGEucG9pbnRzX2FjdGl2YXRlZFxuICAgICAgICAgIFwiXG4gICAgICAgID5cbiAgICAgICAgICA8UG9pbnRzQ2FydFxuICAgICAgICAgICAgcmVmPVwiY2FydF9wb2ludHNcIlxuICAgICAgICAgICAgOmN1cnJlbmN5X2NvZGU9XCJnZXRVc2VDdXJyZW5jeVwiXG4gICAgICAgICAgICBAYWZ0ZXItYXBwbHlwb2ludHM9XCJhZnRlckFwcGx5cG9pbnRzXCJcbiAgICAgICAgICAgIDp1c2VfdGhyZXNob2xkcz1cIkRhdGFTdG9yZS51c2VfdGhyZXNob2xkc1wiXG4gICAgICAgICAgPlxuICAgICAgICAgIDwvUG9pbnRzQ2FydD5cbiAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJxLXBsLW1kIHEtcHItbWQgcS1tdC1zbSBlbGxpcHNpcyBmb250MTMgdGV4dC13ZWlnaHQtYm9sZCBxLXB0LXhzIGJvcmRlci1ncmV5LXRvcFwiXG4gICAgICAgID5cbiAgICAgICAgICB7eyAkdChcIlN1bW1hcnlcIikgfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxxLWxpc3QgZGVuc2UgY2xhc3M9XCJ0ZXh0LWdyZXkgcWxpc3QtbWluLWhlaWdodCB0ZXh0LXdlaWdodC1tZWRpdW1cIj5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJzdW1tYXJ5IGluIENhcnRTdG9yZS5jYXJ0X3N1bW1hcnlcIiA6a2V5PVwic3VtbWFyeVwiPlxuICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICB2LWlmPVwic3VtbWFyeS50eXBlID09ICd0b3RhbCdcIlxuICAgICAgICAgICAgICBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGQgZm9udDE2IHRleHQtZGFyayBoaWRkZW5cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+e3sgc3VtbWFyeS5uYW1lIH19PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+e3sgc3VtbWFyeS52YWx1ZSB9fTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgIDxxLWl0ZW0gdi1lbHNlPlxuICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+e3sgc3VtbWFyeS5uYW1lIH19PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+e3sgc3VtbWFyeS52YWx1ZSB9fTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3EtbGlzdD5cblxuICAgICAgICA8ZGl2XG4gICAgICAgICAgdi1pZj1cIlxuICAgICAgICAgICAgRGF0YVN0b3JlLnRpcHNfZGF0YSAmJlxuICAgICAgICAgICAgIUNhcnRTdG9yZS5jYXJ0X2xvYWRpbmcgJiZcbiAgICAgICAgICAgIENhcnRTdG9yZS5lbmFibGVkX3RpcCA9PSAxXG4gICAgICAgICAgXCJcbiAgICAgICAgICBjbGFzcz1cInEtcGwtbWQgcS1wci1tZCBxLW1iLXNtIHEtcHQteHNcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBpdGVtcy1jZW50ZXIgcS1tYi1zbSBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250MTMgdGV4dC13ZWlnaHQtYm9sZFwiPnt7ICR0KFwiVGlwc1wiKSB9fTwvZGl2PlxuICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgIHYtaWY9XCJDYXJ0U3RvcmUudGlwc19kYXRhLnRpcHMgPiAwXCJcbiAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICA6Y29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnc2Vjb25kYXJ5JyA6ICdibHVlJ1wiXG4gICAgICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ1JlbW92ZSB0aXBzJylcIlxuICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgICAgICBAY2xpY2s9XCJyZW1vdmVUaXBzXCJcbiAgICAgICAgICAgICAgOmxvYWRpbmc9XCJsb2FkaW5nX3RpcF9ybVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJDYXJ0U3RvcmUuZW5hYmxlZF90aXAgPT0gMVwiPlxuICAgICAgICAgICAgPFRpcHNMaXN0XG4gICAgICAgICAgICAgIHJlZj1cInRpcHNcIlxuICAgICAgICAgICAgICBAYWZ0ZXItYXBwbHl0aXBzPVwiYWZ0ZXJBcHBseXRpcHNcIlxuICAgICAgICAgICAgICA6dGlwc19kYXRhPVwidGlwc19saXN0XCJcbiAgICAgICAgICAgICAgOnRpcHNfdmFsdWU9XCJDYXJ0U3RvcmUudGlwc19kYXRhXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgdi1pZj1cIlxuICAgICAgICAgICAgIUNhcnRTdG9yZS5jYXJ0X2xvYWRpbmcgJiZcbiAgICAgICAgICAgIENhcnRTdG9yZS5wb2ludHNfZGF0YS5wb2ludHNfZW5hYmxlZCAmJlxuICAgICAgICAgICAgQ2FydFN0b3JlLnBvaW50c19kYXRhLnBvaW50c19hY3RpdmF0ZWQgJiZcbiAgICAgICAgICAgIENhcnRTdG9yZS5wb2ludHNfZGF0YS5wb2ludHNfdG9fZWFybiA+IDBcbiAgICAgICAgICBcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInEtcGwtbWQgcS1wci1tZCBxLXB0LXhzIGJvcmRlci1ncmV5LXRvcFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInEtbXItc20gZm9udDEyXCI+XG4gICAgICAgICAgICAgICAgPHEtaWNvbiBuYW1lPVwiY2FyZF9naWZ0Y2FyZFwiIGNsYXNzPVwiZm9udDE2IHRleHQtcHJpbWFyeVwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250MTIgcS1tdC14c1wiPlxuICAgICAgICAgICAgICAgICAge3sgQ2FydFN0b3JlLnBvaW50c19kYXRhLnBvaW50c19sYWJlbCB9fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJxLXBsLW1kIHEtcHItbWQgcS1tdC1zbSBxLXB0LXhzIGJvcmRlci1ncmV5LXRvcFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnQxMyB0ZXh0LXdlaWdodC1ib2xkXCI+e3sgJHQoXCJQYXltZW50XCIpIH19PC9kaXY+XG4gICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICA6Y29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnc2Vjb25kYXJ5JyA6ICdibHVlJ1wiXG4gICAgICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ0FkZCcpXCJcbiAgICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgICAgICAgdG89XCIvYWNjb3VudC9wYXltZW50cy9uZXc/cmVkaXJlY3Q9L2NoZWNrb3V0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiRGF0YVN0b3JlLmRpZ2l0YWx3YWxsZXRfZW5hYmxlZFwiPlxuICAgICAgICAgIDxXYWxsZXRDb21wb25lbnRzXG4gICAgICAgICAgICByZWY9XCJkaWdpdGFsX3dhbGxldFwiXG4gICAgICAgICAgICA6Y2FydF91cGRhdGVkPVwiQ2FydFN0b3JlLmNhcnRfcmVsb2FkaW5nXCJcbiAgICAgICAgICAgIEBhZnRlci1hcHBseXdhbGxldD1cImFmdGVyQXBwbHl3YWxsZXRcIlxuICAgICAgICAgID48L1dhbGxldENvbXBvbmVudHM+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPFBheW1lbnRMaXN0U2F2ZWRcbiAgICAgICAgICByZWY9XCJzYXZlZF9wYXltZW50XCJcbiAgICAgICAgICB2LWlmPVwiQ2FydFN0b3JlLmNhcnRfbWVyY2hhbnQubWVyY2hhbnRfaWRcIlxuICAgICAgICAgIEBzZXQtcGF5bWVudHV1aWQ9XCJzZXRQYXltZW50dXVpZFwiXG4gICAgICAgICAgQHNldC1wYXltZW50PVwic2V0UGF5bWVudFwiXG4gICAgICAgICAgQGFmdGVyLWxvYWRwYXltZW50bGlzdD1cImFmdGVyTG9hZHBheW1lbnRsaXN0XCJcbiAgICAgICAgICA6bWVyY2hhbnRfaWQ9XCJDYXJ0U3RvcmUuY2FydF9tZXJjaGFudC5tZXJjaGFudF9pZFwiXG4gICAgICAgICAgOndhbGxldF9kYXRhPVwid2FsbGV0X2RhdGFcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJxLXBsLW1kIHEtcHItbWQgcS1wdC14c1wiPlxuICAgICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgICAgdi1mb3I9XCJwYXltZW50X2l0ZW0gaW4gUGF5bWVudFN0b3JlLmdldFBheW1lbnRMaXN0XCJcbiAgICAgICAgICAgIDprZXk9XCJwYXltZW50X2l0ZW1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgICAgICB2LWlmPVwiXG4gICAgICAgICAgICAgICAgcGF5bWVudF9pdGVtLnBheW1lbnRfdXVpZCA9PSBwYXltZW50X3V1aWQgJiZcbiAgICAgICAgICAgICAgICBwYXltZW50X2l0ZW0uYXR0cl9yZXF1aXJlZCA9PSAxXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cInBheW1lbnRfY2hhbmdlXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnQ2hhbmdlIGZvciBob3cgbXVjaD8nKVwiXG4gICAgICAgICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICAgICAgICA6YmctY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTYwMCcgOiAnaW5wdXQnXCJcbiAgICAgICAgICAgICAgICA6bGFiZWwtY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTMwMCcgOiAnZ3JleSdcIlxuICAgICAgICAgICAgICAgIGJvcmRlcmxlc3NcbiAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LWJvcmRlcmxlc3NcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8cS1zcGFjZSBjbGFzcz1cInEtcGEtbWRcIj48L3Etc3BhY2U+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvcS1wYWdlPlxuICA8L3EtcHVsbC10by1yZWZyZXNoPlxuXG4gIDxxLWlubmVyLWxvYWRpbmdcbiAgICA6c2hvd2luZz1cIkNhcnRTdG9yZS5jYXJ0X3JlbG9hZGluZ1wiXG4gICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICBzaXplPVwibWRcIlxuICAgIGxhYmVsLWNsYXNzPVwiZGFya1wiXG4gIC8+XG5cbiAgPHEtZm9vdGVyXG4gICAgdi1pZj1cIkNhcnRTdG9yZS5pdGVtc19jb3VudCA+IDAgJiYgIUNhcnRTdG9yZS5jYXJ0X2xvYWRpbmdcIlxuICAgIHJldmVhbFxuICAgIGNsYXNzPVwicS1wbC1tZCBxLXByLW1kIHEtcGItc20gcS1wdC1zbSB0ZXh0LWRhcmtcIlxuICAgIDpjbGFzcz1cIntcbiAgICAgICdiZy1wcmltYXJ5JzogIUNhcnRTdG9yZS5jYXJ0X3JlbG9hZGluZyxcbiAgICAgICdiZy1ncmV5LTUnOiBDYXJ0U3RvcmUuY2FydF9yZWxvYWRpbmcsXG4gICAgfVwiXG4gID5cbiAgICA8cS1idG5cbiAgICAgIEBjbGljaz1cIm9uUGxhY2VvcmRlclwiXG4gICAgICA6bG9hZGluZz1cImxvYWRpbmdcIlxuICAgICAgOmRpc2FibGU9XCIhQ2FydFN0b3JlLmNhblByb2NlZWRcIlxuICAgICAgdW5lbGV2YXRlZFxuICAgICAgdGV4dC1jb2xvcj1cIndoaXRlXCJcbiAgICAgIG5vLWNhcHNcbiAgICAgIGNsYXNzPVwicmFkaXVzMTAgZml0XCJcbiAgICAgIDpjb2xvcj1cIntcbiAgICAgICAgcHJpbWFyeTogIUNhcnRTdG9yZS5jYXJ0X3JlbG9hZGluZyxcbiAgICAgICAgJ2dyZXktNSc6IENhcnRTdG9yZS5jYXJ0X3JlbG9hZGluZyxcbiAgICAgIH1cIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBmaXRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGQgZm9udDE3XCI+e3sgJHQoXCJQbGFjZSBPcmRlclwiKSB9fTwvZGl2PlxuICAgICAgICA8ZGl2IHYtaWY9XCJDYXJ0U3RvcmUuY2FydF90b3RhbFwiIGNsYXNzPVwidGV4dC13ZWlnaHQtYm9sZCBmb250MTZcIj5cbiAgICAgICAgICB7eyBDYXJ0U3RvcmUuY2FydF90b3RhbC52YWx1ZSB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvcS1idG4+XG4gIDwvcS1mb290ZXI+XG5cbiAgPERlbGl2ZXJ5U2NoZWRcbiAgICByZWY9XCJkZWxpdmVyeV9zY2hlZFwiXG4gICAgOnNsdWc9XCJDYXJ0U3RvcmUuY2FydF9tZXJjaGFudC5zbHVnXCJcbiAgICBAYWZ0ZXItc2F2ZXRyYW5zPVwiYWZ0ZXJTYXZldHJhbnNcIlxuICAvPlxuXG4gIDxDaGFuZ2VQaG9uZVxuICAgIHJlZj1cImNoYW5nZV9waG9uZVwiXG4gICAgQGFmdGVyLWNoYW5nZXBob25lPVwiYWZ0ZXJDaGFuZ2VwaG9uZVwiXG4gICAgOnByZWZpeGVzPVwiRGF0YVN0b3JlLnBob25lX3ByZWZpeF9kYXRhXCJcbiAgICA6cGhvbmVfcHJlZml4X29yaWc9XCJDYXJ0U3RvcmUucGhvbmVfZGV0YWlscy5kZWZhdWx0X3ByZWZpeFwiXG4gICAgOmNvbnRhY3RfbnVtYmVyX29yaWc9XCJDYXJ0U3RvcmUucGhvbmVfZGV0YWlscy5jb250YWN0X251bWJlclwiXG4gIC8+XG4gIDxDbGllbnRBZGRyZXNzXG4gICAgcmVmPVwiY2xpZW50X2FkZHJlc3NcIlxuICAgIDpyZWRpcmVjdD1cInRoaXMuJHJvdXRlLnBhdGhcIlxuICAgIEBhZnRlci1zZXRwbGFjZWlkPVwiYWZ0ZXJTZXRwbGFjZWlkXCJcbiAgICBAZmlsbC1hZGRyZXNzPVwiZmlsbEFkZHJlc3NcIlxuICAvPlxuXG4gIDxQcm9tb0xpc3RcbiAgICB2LWlmPVwiQ2FydFN0b3JlLmNhcnRfbWVyY2hhbnQubWVyY2hhbnRfaWRcIlxuICAgIHJlZj1cInByb21vX2xpc3RcIlxuICAgIDplbmFibGVkX3ZvdWNoZXI9XCJDYXJ0U3RvcmUuZW5hYmxlZF92b3VjaGVyXCJcbiAgICBAYWZ0ZXItYXBwbHlwcm9tbz1cImFmdGVyQXBwbHlwcm9tb1wiXG4gICAgQGFmdGVyLXJlbW92ZXByb21vPVwiYWZ0ZXJSZW1vdmVwcm9tb1wiXG4gICAgOm1lcmNoYW50X2lkPVwiQ2FydFN0b3JlLmNhcnRfbWVyY2hhbnQubWVyY2hhbnRfaWRcIlxuICAvPlxuXG4gIDwhLS0gUEFZTUVOVFMgQ09NUE9ORU5UUyAtLT5cbiAgPFN0cmlwZUNvbXBvbmVudHNcbiAgICByZWY9XCJzdHJpcGVcIlxuICAgIHBheW1lbnRfY29kZT1cInN0cmlwZVwiXG4gICAgdGl0bGU9XCJBZGQgU3RyaXBlXCJcbiAgICA6bGFiZWw9XCJ7XG4gICAgICBzdWJtaXQ6IHRoaXMuJHQoJ0FkZCBTdHJpcGUnKSxcbiAgICAgIG5vdGVzOiB0aGlzLiR0KCdBZGQgeW91ciBjYXJkIGFjY291bnQnKSxcbiAgICB9XCJcbiAgICA6cGF5bWVudF9jcmVkZW50aWFscz1cIlxuICAgICAgUGF5bWVudFN0b3JlLmNyZWRlbnRpYWxzW0NhcnRTdG9yZS5jYXJ0X21lcmNoYW50Lm1lcmNoYW50X2lkXVxuICAgIFwiXG4gICAgQGFmdGVyLWFkZHBheW1lbnQ9XCJhZnRlckFkZHBheW1lbnRcIlxuICAgIEBhZnRlci1wYXltZW50PVwiYWZ0ZXJQYXltZW50XCJcbiAgLz5cblxuICA8UGF5cGFsQ29tcG9uZW50c1xuICAgIHJlZj1cInBheXBhbFwiXG4gICAgcGF5bWVudF9jb2RlPVwicGF5cGFsXCJcbiAgICB0aXRsZT1cIkFkZCBQYXlwYWxcIlxuICAgIDpsYWJlbD1cIntcbiAgICAgIHN1Ym1pdDogdGhpcy4kdCgnQWRkIFBheXBhbCcpLFxuICAgICAgbm90ZXM6IHRoaXMuJHQoJ1BheSB1c2luZyB5b3VyIHBheXBhbCBhY2NvdW50JyksXG4gICAgICBwYXltZW50X3RpdGxlOiB0aGlzLiR0KCdQYXkgdXNpbmcgUGF5cGFsJyksXG4gICAgICBwYXltZW50X3N1YnRpdGxlOiB0aGlzLiR0KFxuICAgICAgICAnWW91IHdpbGwgcmUtZGlyZWN0IHRvIHBheXBhbCBhY2NvdW50IHRvIGxvZ2luIHRvIHlvdXIgYWNjb3VudC4nXG4gICAgICApLFxuICAgIH1cIlxuICAgIDpwYXltZW50X2NyZWRlbnRpYWxzPVwiXG4gICAgICBQYXltZW50U3RvcmUuY3JlZGVudGlhbHNbQ2FydFN0b3JlLmNhcnRfbWVyY2hhbnQubWVyY2hhbnRfaWRdXG4gICAgXCJcbiAgICBAYWZ0ZXItYWRkcGF5bWVudD1cImFmdGVyQWRkcGF5bWVudFwiXG4gICAgQGFmdGVyLXBheW1lbnQ9XCJhZnRlclBheW1lbnRcIlxuICAvPlxuXG4gIDxSYXpvcnBheUNvbXBvbmVudHNcbiAgICByZWY9XCJyYXpvcnBheVwiXG4gICAgcGF5bWVudF9jb2RlPVwicmF6b3JwYXlcIlxuICAgIHRpdGxlPVwiQWRkIFJhem9ycGF5XCJcbiAgICA6bGFiZWw9XCJ7XG4gICAgICBzdWJtaXQ6IHRoaXMuJHQoJ1N1Ym1pdCcpLFxuICAgICAgbm90ZXM6IHRoaXMuJHQoJ1BheSB1c2luZyB5b3VyIFJhem9ycGF5IGFjY291bnQnKSxcbiAgICB9XCJcbiAgICA6cGF5bWVudF9jcmVkZW50aWFscz1cIlxuICAgICAgUGF5bWVudFN0b3JlLmNyZWRlbnRpYWxzW0NhcnRTdG9yZS5jYXJ0X21lcmNoYW50Lm1lcmNoYW50X2lkXVxuICAgIFwiXG4gICAgQGFmdGVyLWFkZHBheW1lbnQ9XCJhZnRlckFkZHBheW1lbnRcIlxuICAgIEBhZnRlci1wYXltZW50PVwiYWZ0ZXJQYXltZW50XCJcbiAgLz5cblxuICA8TWVyY2Fkb3BhZ29Db21wb25lbnRzXG4gICAgcmVmPVwibWVyY2Fkb3BhZ29cIlxuICAgIHBheW1lbnRfY29kZT1cIm1lcmNhZG9wYWdvXCJcbiAgICB0aXRsZT1cIkFkZCBNZXJjYWRvcGFnb1wiXG4gICAgOmxhYmVsPVwie1xuICAgICAgc3VibWl0OiB0aGlzLiR0KCdBZGQgTWVyY2Fkb3BhZ28nKSxcbiAgICAgIHN1Ym1pdF9mb3JtOiB0aGlzLiR0KCdTdWJtaXQnKSxcbiAgICAgIG5vdGVzOiB0aGlzLiR0KCdQYXkgdXNpbmcgeW91ciBtZXJjYWRvcGFnbyBhY2NvdW50JyksXG4gICAgfVwiXG4gICAgOnBheW1lbnRfY3JlZGVudGlhbHM9XCJcbiAgICAgIFBheW1lbnRTdG9yZS5jcmVkZW50aWFsc1tDYXJ0U3RvcmUuY2FydF9tZXJjaGFudC5tZXJjaGFudF9pZF1cbiAgICBcIlxuICAgIEBhZnRlci1hZGRwYXltZW50PVwiYWZ0ZXJBZGRwYXltZW50XCJcbiAgICBAYWZ0ZXItcGF5bWVudD1cImFmdGVyUGF5bWVudFwiXG4gIC8+XG5cbiAgPHRlbXBsYXRlIHYtaWY9XCJnZXRNZXJjaGFudFVVSURcIj5cbiAgICA8Q29tcG9uZW50c1JlYWx0aW1lXG4gICAgICByZWY9XCJyZWFsdGltZVwiXG4gICAgICBnZXRldmVudD1cImNhcnRcIlxuICAgICAgOnN1YnNjcmliZV90bz1cImdldE1lcmNoYW50VVVJRFwiXG4gICAgICBAYWZ0ZXItcmVjZWl2ZT1cImFmdGVyUmVjZWl2ZVwiXG4gICAgPlxuICAgIDwvQ29tcG9uZW50c1JlYWx0aW1lPlxuICA8L3RlbXBsYXRlPlxuXG4gIDwhLS0gQ1VTVE9NIENPREUgLS0+XG5cblxuICA8IS0tIEVORCBQQVlNRU5UUyBDT01QT05FTlRTIC0tPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IGRlZmluZUFzeW5jQ29tcG9uZW50IH0gZnJvbSBcInZ1ZVwiO1xuaW1wb3J0IEFQSWludGVyZmFjZSBmcm9tIFwic3JjL2FwaS9BUElpbnRlcmZhY2VcIjtcbmltcG9ydCB7IHVzZUNhcnRTdG9yZSB9IGZyb20gXCJzdG9yZXMvQ2FydFN0b3JlXCI7XG5pbXBvcnQgeyB1c2VQcm9tb1N0b3JlIH0gZnJvbSBcInN0b3Jlcy9Qcm9tb1N0b3JlXCI7XG5pbXBvcnQgeyB1c2VNYXBzU3RvcmUgfSBmcm9tIFwic3RvcmVzL1N0b3JlTWFwc1wiO1xuaW1wb3J0IHsgdXNlRGF0YVN0b3JlIH0gZnJvbSBcInN0b3Jlcy9EYXRhU3RvcmVcIjtcbmltcG9ydCB7IHVzZVBheW1lbnRTdG9yZSB9IGZyb20gXCJzdG9yZXMvUGF5bWVudFN0b3JlXCI7XG5pbXBvcnQgeyB1c2VEZWxpdmVyeXNjaGVkU3RvcmUgfSBmcm9tIFwic3RvcmVzL0RlbGl2ZXJ5U2NoZWRcIjtcbmltcG9ydCB7IHVzZURhdGFTdG9yZVBlcnNpc3RlZCB9IGZyb20gXCJzdG9yZXMvRGF0YVN0b3JlUGVyc2lzdGVkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJDaGVja291dFBhZ2VcIixcbiAgY29tcG9uZW50czoge1xuICAgIENhcnREZXRhaWxzOiBkZWZpbmVBc3luY0NvbXBvbmVudCgoKSA9PlxuICAgICAgaW1wb3J0KFwiY29tcG9uZW50cy9DYXJ0RGV0YWlscy52dWVcIilcbiAgICApLFxuICAgIENsaWVudEFkZHJlc3M6IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+XG4gICAgICBpbXBvcnQoXCJjb21wb25lbnRzL0NsaWVudEFkZHJlc3MudnVlXCIpXG4gICAgKSxcbiAgICBDaGFuZ2VQaG9uZTogZGVmaW5lQXN5bmNDb21wb25lbnQoKCkgPT5cbiAgICAgIGltcG9ydChcImNvbXBvbmVudHMvQ2hhbmdlUGhvbmUudnVlXCIpXG4gICAgKSxcbiAgICBEZWxpdmVyeVNjaGVkOiBkZWZpbmVBc3luY0NvbXBvbmVudCgoKSA9PlxuICAgICAgaW1wb3J0KFwiY29tcG9uZW50cy9EZWxpdmVyeVNjaGVkLnZ1ZVwiKVxuICAgICksXG4gICAgUHJvbW9MaXN0OiBkZWZpbmVBc3luY0NvbXBvbmVudCgoKSA9PiBpbXBvcnQoXCJjb21wb25lbnRzL1Byb21vTGlzdC52dWVcIikpLFxuICAgIFRpcHNMaXN0OiBkZWZpbmVBc3luY0NvbXBvbmVudCgoKSA9PiBpbXBvcnQoXCJjb21wb25lbnRzL1RpcHNMaXN0LnZ1ZVwiKSksXG5cbiAgICBDaGVja291dEJvb2tpbmc6IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+XG4gICAgICBpbXBvcnQoXCJjb21wb25lbnRzL0NoZWNrb3V0Qm9va2luZy52dWVcIilcbiAgICApLFxuXG4gICAgUGF5bWVudExpc3RTYXZlZDogZGVmaW5lQXN5bmNDb21wb25lbnQoKCkgPT5cbiAgICAgIGltcG9ydChcImNvbXBvbmVudHMvUGF5bWVudExpc3RTYXZlZC52dWVcIilcbiAgICApLFxuICAgIFBvaW50c0NhcnQ6IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+IGltcG9ydChcImNvbXBvbmVudHMvUG9pbnRzQ2FydC52dWVcIikpLFxuICAgIFN0cmlwZUNvbXBvbmVudHM6IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+XG4gICAgICBpbXBvcnQoXCJjb21wb25lbnRzL1N0cmlwZUNvbXBvbmVudHMudnVlXCIpXG4gICAgKSxcbiAgICBQYXlwYWxDb21wb25lbnRzOiBkZWZpbmVBc3luY0NvbXBvbmVudCgoKSA9PlxuICAgICAgaW1wb3J0KFwiY29tcG9uZW50cy9QYXlwYWxDb21wb25lbnRzLnZ1ZVwiKVxuICAgICksXG4gICAgUmF6b3JwYXlDb21wb25lbnRzOiBkZWZpbmVBc3luY0NvbXBvbmVudCgoKSA9PlxuICAgICAgaW1wb3J0KFwiY29tcG9uZW50cy9SYXpvcnBheUNvbXBvbmVudHMudnVlXCIpXG4gICAgKSxcbiAgICBNZXJjYWRvcGFnb0NvbXBvbmVudHM6IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+XG4gICAgICBpbXBvcnQoXCJjb21wb25lbnRzL01lcmNhZG9wYWdvQ29tcG9uZW50cy52dWVcIilcbiAgICApLFxuICAgIENvbXBvbmVudHNSZWFsdGltZTogZGVmaW5lQXN5bmNDb21wb25lbnQoKCkgPT5cbiAgICAgIGltcG9ydChcImNvbXBvbmVudHMvQ29tcG9uZW50c1JlYWx0aW1lLnZ1ZVwiKVxuICAgICksXG4gICAgV2FsbGV0Q29tcG9uZW50czogZGVmaW5lQXN5bmNDb21wb25lbnQoKCkgPT5cbiAgICAgIGltcG9ydChcImNvbXBvbmVudHMvV2FsbGV0Q29tcG9uZW50cy52dWVcIilcbiAgICApLFxuXG4gICAgLy8gQ1VTVE9NIFBBWU1FTlQgICAgICAgXG4gIH0sXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IENhcnRTdG9yZSA9IHVzZUNhcnRTdG9yZSgpO1xuICAgIGNvbnN0IFByb21vU3RvcmUgPSB1c2VQcm9tb1N0b3JlKCk7XG4gICAgY29uc3QgTWFwc1N0b3JlID0gdXNlTWFwc1N0b3JlKCk7XG4gICAgY29uc3QgRGF0YVN0b3JlID0gdXNlRGF0YVN0b3JlKCk7XG4gICAgY29uc3QgUGF5bWVudFN0b3JlID0gdXNlUGF5bWVudFN0b3JlKCk7XG4gICAgY29uc3QgRGVsaXZlcnlzY2hlZFN0b3JlID0gdXNlRGVsaXZlcnlzY2hlZFN0b3JlKCk7XG4gICAgY29uc3QgRGF0YVN0b3JlUGVyc2lzdGVkID0gdXNlRGF0YVN0b3JlUGVyc2lzdGVkKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIENhcnRTdG9yZSxcbiAgICAgIFByb21vU3RvcmUsXG4gICAgICBNYXBzU3RvcmUsXG4gICAgICBEYXRhU3RvcmUsXG4gICAgICBQYXltZW50U3RvcmUsXG4gICAgICBEZWxpdmVyeXNjaGVkU3RvcmUsXG4gICAgICBEYXRhU3RvcmVQZXJzaXN0ZWQsXG4gICAgfTtcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaW5jbHVkZV91dGVuc2lsczogZmFsc2UsXG4gICAgICBtb2RhbF9wYXltZW50bGlzdDogZmFsc2UsXG4gICAgICBwYXltZW50X2NyZWRlbnRpYWxzOiBbXSxcbiAgICAgIHBheW1lbnRfdXVpZDogXCJcIixcbiAgICAgIHBheWxvYWQ6IFtcbiAgICAgICAgXCJpdGVtc1wiLFxuICAgICAgICBcIm1lcmNoYW50X2luZm9cIixcbiAgICAgICAgXCJzZXJ2aWNlX2ZlZVwiLFxuICAgICAgICBcImRlbGl2ZXJ5X2ZlZVwiLFxuICAgICAgICBcInBhY2thZ2luZ1wiLFxuICAgICAgICBcInRheFwiLFxuICAgICAgICBcInRpcHNcIixcbiAgICAgICAgXCJjaGVja291dFwiLFxuICAgICAgICBcImRpc2NvdW50XCIsXG4gICAgICAgIFwiZGlzdGFuY2VfbG9jYWxcIixcbiAgICAgICAgXCJzdW1tYXJ5XCIsXG4gICAgICAgIFwic3VidG90YWxcIixcbiAgICAgICAgXCJ0b3RhbFwiLFxuICAgICAgICBcIml0ZW1zX2NvdW50XCIsXG4gICAgICAgIFwiY2hlY2tfb3BlbmluZ1wiLFxuICAgICAgICBcInRyYW5zYWN0aW9uX2luZm9cIixcbiAgICAgICAgXCJjYXJkX2ZlZVwiLFxuICAgICAgICBcInBvaW50c1wiLFxuICAgICAgICBcInBvaW50c19kaXNjb3VudFwiLFxuICAgICAgXSxcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgbG9hZGluZ19wcm9tb19ybTogZmFsc2UsXG4gICAgICBsb2FkaW5nX3RpcF9ybTogZmFsc2UsXG4gICAgICB0aXBzX2xpc3Q6IFtdLFxuICAgICAgcGF5bWVudF9jaGFuZ2U6IDAsXG4gICAgICB3YWxsZXRfZGF0YTogW10sXG4gICAgfTtcbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLkNhcnRTdG9yZS5nZXRDYXJ0KHRydWUsIHRoaXMucGF5bG9hZCk7XG5cbiAgICBcbiAgICBjb25zdCBpbmNsdWRlVXRlbnNpbHMgPSBBUElpbnRlcmZhY2UuZ2V0U3RvcmFnZShcImluY2x1ZGVfdXRlbnNpbHNcIik7XG4gICAgaWYgKCFBUElpbnRlcmZhY2UuZW1wdHkoaW5jbHVkZVV0ZW5zaWxzKSkge1xuICAgICAgdGhpcy5pbmNsdWRlX3V0ZW5zaWxzID0gaW5jbHVkZVV0ZW5zaWxzO1xuICAgIH1cblxuICAgIHRoaXMuRGVsaXZlcnlzY2hlZFN0b3JlLmdldERlbGl2ZXJ5U2NoZWQoXG4gICAgICBBUElpbnRlcmZhY2UuZ2V0U3RvcmFnZShcImNhcnRfdXVpZFwiKSxcbiAgICAgIEFQSWludGVyZmFjZS5nZXRTdG9yYWdlKFwibWVyY2hhbnRfc2x1Z1wiKVxuICAgICk7XG4gIH0sXG5cbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmxvYWRUaXBzKCk7XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBnZXRVc2VDdXJyZW5jeSgpIHtcbiAgICAgIHJldHVybiB0aGlzLkRhdGFTdG9yZVBlcnNpc3RlZC5nZXRVc2VDdXJyZW5jeSgpO1xuICAgIH0sXG4gICAgaGFzQWRkcmVzcygpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLkNhcnRTdG9yZS5hZGRyZXNzX2NvbXBvbmVudCkubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIGdldE1lcmNoYW50VVVJRCgpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLkNhcnRTdG9yZS5jYXJ0X21lcmNoYW50KS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLkNhcnRTdG9yZS5jYXJ0X21lcmNoYW50Lm1lcmNoYW50X3V1aWQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgcmVmcmVzaChkb25lKSB7XG4gICAgICB0aGlzLkNhcnRTdG9yZS5nZXRDYXJ0KHRydWUsIHRoaXMucGF5bG9hZCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfSxcbiAgICBzZXRVdGVuc2lsKHZhbHVlKSB7XG4gICAgICBBUElpbnRlcmZhY2Uuc2V0U3RvcmFnZShcImluY2x1ZGVfdXRlbnNpbHNcIiwgdmFsdWUpO1xuICAgIH0sXG4gICAgYWZ0ZXJTZXRwbGFjZWlkKCkge1xuICAgICAgY29uc29sZS5sb2coXCJhZnRlclNldHBsYWNlaWRcIik7XG4gICAgICB0aGlzLkNhcnRTdG9yZS5nZXRDYXJ0KGZhbHNlLCB0aGlzLnBheWxvYWQpO1xuICAgIH0sXG4gICAgZmlsbEFkZHJlc3MoZGF0YSkge1xuICAgICAgdGhpcy4kcmVmcy5jbGllbnRfYWRkcmVzcy5zaG93TW9kYWwoZmFsc2UpO1xuICAgICAgdGhpcy4kcmVmcy5hZGRyZXNzX2RldGFpbHMubG9jYXRpb25fZGF0YSA9IGRhdGE7XG4gICAgICB0aGlzLiRyZWZzLmFkZHJlc3NfZGV0YWlscy5zaG93TW9kYWwoKTtcbiAgICB9LFxuICAgIGFmdGVyU2F2ZWFkZHJlc3MoKSB7XG4gICAgICAvLyB0aGlzLlRyYW5zYWN0aW9uU3RvcmUuVHJhbnNhY3Rpb25JbmZvKCk7XG4gICAgICAvLyB0aGlzLiRyZWZzLmNhcnRfZGV0YWlscy5nZXRDYXJ0KGZhbHNlKTtcbiAgICAgIC8vdGhpcy5UcmFuc2FjdGlvblN0b3JlLlRyYW5zYWN0aW9uSW5mbygpO1xuICAgICAgdGhpcy5DYXJ0U3RvcmUuZ2V0Q2FydChmYWxzZSwgdGhpcy5wYXlsb2FkKTtcbiAgICB9LFxuICAgIGFmdGVyU2F2ZXRyYW5zKCkge1xuICAgICAgdGhpcy5hZnRlclNhdmVhZGRyZXNzKCk7XG4gICAgfSxcbiAgICBhZnRlckNoYW5nZXBob25lKGRhdGEpIHtcbiAgICAgIHRoaXMuQ2FydFN0b3JlLmdldENhcnQoZmFsc2UsIHRoaXMucGF5bG9hZCk7XG4gICAgfSxcbiAgICBhZnRlckFwcGx5cHJvbW8oKSB7XG4gICAgICB0aGlzLkNhcnRTdG9yZS5nZXRDYXJ0KGZhbHNlLCB0aGlzLnBheWxvYWQpO1xuICAgIH0sXG4gICAgYWZ0ZXJSZW1vdmVwcm9tbygpIHtcbiAgICAgIHRoaXMuQ2FydFN0b3JlLmdldENhcnQoZmFsc2UsIHRoaXMucGF5bG9hZCk7XG4gICAgfSxcbiAgICBhZnRlckFwcGx5dGlwcygpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiYWZ0ZXJBcHBseXRpcHNcIik7XG4gICAgICB0aGlzLkNhcnRTdG9yZS5nZXRDYXJ0KGZhbHNlLCB0aGlzLnBheWxvYWQpO1xuICAgIH0sXG4gICAgc2V0UGF5bWVudGNyZWRlbnRpYWxzKGRhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwic2V0UGF5bWVudGNyZWRlbnRpYWxzXCIpO1xuICAgICAgdGhpcy5wYXltZW50X2NyZWRlbnRpYWxzID0gZGF0YTtcbiAgICB9LFxuICAgIGFmdGVyTG9hZHBheW1lbnRsaXN0KGRhdGEpIHtcbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIHRoaXMucGF5bWVudF9jcmVkZW50aWFscyA9IGRhdGE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBheW1lbnRfY3JlZGVudGlhbHMgPSBbXTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHNldFBheW1lbnR1dWlkKGRhdGEpIHtcbiAgICAgIHRoaXMucGF5bWVudF91dWlkID0gZGF0YTtcbiAgICB9LFxuICAgIHNldFBheW1lbnQoZGF0YSkge1xuICAgICAgLy8gdW5jb21tZW50IHRoaXMgd2hlbiBjYXJkIGZlZSBpcyBhcHBsaWVkXG4gICAgICAvL3RoaXMuc2V0RGVmYXVsdChkYXRhLnBheW1lbnRfdXVpZCk7XG4gICAgfSxcbiAgICBzZXREZWZhdWx0KHBheW1lbnRVdWlkKSB7XG4gICAgICBBUElpbnRlcmZhY2Uuc2hvd0xvYWRpbmdCb3goXCJcIiwgdGhpcy4kcSk7XG4gICAgICBBUElpbnRlcmZhY2Uuc2V0RGVmYXVsdFBheW1lbnQocGF5bWVudFV1aWQpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5DYXJ0U3RvcmUuZ2V0Q2FydChmYWxzZSwgdGhpcy5wYXlsb2FkKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJyZWQtNVwiLCBlcnJvciwgXCJlcnJvcl9vdXRsaW5lXCIsIHRoaXMuJHEpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5oaWRlTG9hZGluZ0JveCh0aGlzLiRxKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBvbmNob29zZVBheW1lbnQoZGF0YSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy4kcmVmc1tkYXRhLnBheW1lbnRfY29kZV0uc2hvd1BheW1lbnRGb3JtKCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBBUElpbnRlcmZhY2Uubm90aWZ5KFwiZGFya1wiLCBlcnJvciwgXCJlcnJvclwiLCB0aGlzLiRxKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFmdGVyQWRkcGF5bWVudCgpIHtcbiAgICAgIHRoaXMubW9kYWxfcGF5bWVudGxpc3QgPSBmYWxzZTtcbiAgICB9LFxuICAgIGFmdGVyUGF5bWVudChkYXRhKSB7XG4gICAgICB0aGlzLkNhcnRTdG9yZS5nZXRDYXJ0KHRydWUsIHRoaXMucGF5bG9hZCk7XG4gICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XG4gICAgICAgIHBhdGg6IFwiL29yZGVyL3N1Y2Nlc3NmdWxcIixcbiAgICAgICAgcXVlcnk6IHsgb3JkZXJfdXVpZDogZGF0YS5vcmRlcl91dWlkIH0sXG4gICAgICB9KTtcbiAgICB9LFxuICAgIG9uUGxhY2VvcmRlcigpIHtcbiAgICAgIGNvbnN0ICRwYXJhbXMgPSB7XG4gICAgICAgIGNhcnRfdXVpZDogQVBJaW50ZXJmYWNlLmdldFN0b3JhZ2UoXCJjYXJ0X3V1aWRcIiksXG4gICAgICAgIGxvY2FsX2lkOiBBUElpbnRlcmZhY2UuZ2V0U3RvcmFnZShcInBsYWNlX2lkXCIpLFxuICAgICAgICBpbmNsdWRlX3V0ZW5zaWxzOiB0aGlzLmluY2x1ZGVfdXRlbnNpbHMsXG4gICAgICAgIHBheW1lbnRfdXVpZDogdGhpcy5wYXltZW50X3V1aWQsXG4gICAgICAgIGN1cnJlbmN5X2NvZGU6IHRoaXMuRGF0YVN0b3JlUGVyc2lzdGVkLmdldFVzZUN1cnJlbmN5KCksXG4gICAgICAgIHBheW1lbnRfY2hhbmdlOiB0aGlzLnBheW1lbnRfY2hhbmdlLFxuICAgICAgICBndWVzdF9udW1iZXI6IHRoaXMuJHJlZnMuY2hlY2tvdXRfYm9va2luZ1xuICAgICAgICAgID8gdGhpcy4kcmVmcy5jaGVja291dF9ib29raW5nLmd1ZXN0X251bWJlclxuICAgICAgICAgIDogXCJcIixcbiAgICAgICAgcm9vbV91dWlkOiB0aGlzLiRyZWZzLmNoZWNrb3V0X2Jvb2tpbmdcbiAgICAgICAgICA/IHRoaXMuJHJlZnMuY2hlY2tvdXRfYm9va2luZy5yb29tX3V1aWRcbiAgICAgICAgICA6IFwiXCIsXG4gICAgICAgIHRhYmxlX3V1aWQ6IHRoaXMuJHJlZnMuY2hlY2tvdXRfYm9va2luZ1xuICAgICAgICAgID8gdGhpcy4kcmVmcy5jaGVja291dF9ib29raW5nLnRhYmxlX3V1aWRcbiAgICAgICAgICA6IFwiXCIsXG4gICAgICAgIHVzZV9kaWdpdGFsX3dhbGxldDogdGhpcy4kcmVmcy5kaWdpdGFsX3dhbGxldFxuICAgICAgICAgID8gdGhpcy4kcmVmcy5kaWdpdGFsX3dhbGxldC51c2Vfd2FsbGV0XG4gICAgICAgICAgOiBcIlwiLFxuICAgICAgfTtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICBBUElpbnRlcmZhY2UuUGxhY2VPcmRlcigkcGFyYW1zKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLmRldGFpbHMucGF5bWVudF9pbnN0cnVjdGlvbnMubWV0aG9kID09PSBcIm9mZmxpbmVcIikge1xuICAgICAgICAgICAgdGhpcy5DYXJ0U3RvcmUuZ2V0Q2FydCh0cnVlLCB0aGlzLnBheWxvYWQpO1xuICAgICAgICAgICAgdGhpcy4kcm91dGVyLnJlcGxhY2Uoe1xuICAgICAgICAgICAgICBwYXRoOiBcIi9vcmRlci9zdWNjZXNzZnVsXCIsXG4gICAgICAgICAgICAgIHF1ZXJ5OiB7IG9yZGVyX3V1aWQ6IGRhdGEuZGV0YWlscy5vcmRlcl91dWlkIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kb1BheW1lbnQoZGF0YS5kZXRhaWxzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBBUElpbnRlcmZhY2Uubm90aWZ5KFwiZGFya1wiLCBlcnJvciwgXCJlcnJvclwiLCB0aGlzLiRxKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBkb1BheW1lbnQoZGF0YSkge1xuICAgICAgY29uc29sZS5sb2coZGF0YS5wYXltZW50X2NvZGUpO1xuICAgICAgdGhpcy4kcmVmc1tkYXRhLnBheW1lbnRfY29kZV0uUGF5bWVudFJlbmRlcihkYXRhKTtcbiAgICB9LFxuICAgIHRyYW5zYWN0aW9uVGV4dChkYXRhKSB7XG4gICAgICBpZiAoZGF0YSA9PT0gXCJkZWxpdmVyeVwiKSB7XG4gICAgICAgIHJldHVybiBcIkRlbGl2ZXJ5IHRvXCI7XG4gICAgICB9IGVsc2UgaWYgKGRhdGEgPT09IFwicGlja3VwXCIpIHtcbiAgICAgICAgcmV0dXJuIFwiUGlja3VwIHRvXCI7XG4gICAgICB9IGVsc2UgaWYgKGRhdGEgPT09IFwiZGluZWluXCIpIHtcbiAgICAgICAgcmV0dXJuIFwiR28gdG9cIjtcbiAgICAgIH1cbiAgICB9LFxuICAgIHJlbW92ZVByb21vKG1lcmNoYW50SUQsIGRhdGEpIHtcbiAgICAgIHRoaXMubG9hZGluZ19wcm9tb19ybSA9IHRydWU7XG4gICAgICBjb25zdCAkcGFyYW1zID0ge1xuICAgICAgICBjYXJ0X3V1aWQ6IEFQSWludGVyZmFjZS5nZXRTdG9yYWdlKFwiY2FydF91dWlkXCIpLFxuICAgICAgICBwcm9tb19pZDogZGF0YS5wcm9tb19pZCxcbiAgICAgICAgcHJvbW9fdHlwZTogZGF0YS5wcm9tb190eXBlLFxuICAgICAgfTtcbiAgICAgIEFQSWludGVyZmFjZS5yZW1vdmVQcm9tbygkcGFyYW1zKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuUHJvbW9TdG9yZS5wcm9tb19zZWxlY3RlZFttZXJjaGFudElEXSA9IFtdO1xuICAgICAgICAgIHRoaXMuQ2FydFN0b3JlLmdldENhcnQoZmFsc2UsIHRoaXMucGF5bG9hZCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBBUElpbnRlcmZhY2Uubm90aWZ5KFwiZGFya1wiLCBlcnJvciwgXCJlcnJvclwiLCB0aGlzLiRxKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmdfcHJvbW9fcm0gPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICByZW1vdmVUaXBzKCkge1xuICAgICAgdGhpcy5sb2FkaW5nX3RpcF9ybSA9IHRydWU7XG4gICAgICBBUElpbnRlcmZhY2UuZmV0Y2hEYXRhUG9zdChcbiAgICAgICAgXCJyZW1vdmVUaXBzXCIsXG4gICAgICAgIFwiY2FydF91dWlkPVwiICsgQVBJaW50ZXJmYWNlLmdldFN0b3JhZ2UoXCJjYXJ0X3V1aWRcIilcbiAgICAgIClcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLkNhcnRTdG9yZS5nZXRDYXJ0KGZhbHNlLCB0aGlzLnBheWxvYWQpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7fSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmdfdGlwX3JtID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgbG9hZFRpcHMoKSB7XG4gICAgICBBUElpbnRlcmZhY2UuZmV0Y2hEYXRhUG9zdChcbiAgICAgICAgXCJsb2FkVGlwc1wiLFxuICAgICAgICBcImNhcnRfdXVpZD1cIiArXG4gICAgICAgICAgQVBJaW50ZXJmYWNlLmdldFN0b3JhZ2UoXCJjYXJ0X3V1aWRcIikgK1xuICAgICAgICAgIFwiJmN1cnJlbmN5X2NvZGU9XCIgK1xuICAgICAgICAgIHRoaXMuRGF0YVN0b3JlUGVyc2lzdGVkLmdldFVzZUN1cnJlbmN5KClcbiAgICAgIClcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLnRpcHNfbGlzdCA9IGRhdGEuZGV0YWlscy5kYXRhO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7fSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHt9KTtcbiAgICB9LFxuICAgIGFmdGVyQXBwbHlwb2ludHMoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImFmdGVyQXBwbHlwb2ludHNcIik7XG4gICAgICB0aGlzLkNhcnRTdG9yZS5nZXRDYXJ0KGZhbHNlLCB0aGlzLnBheWxvYWQpO1xuICAgIH0sXG4gICAgYWZ0ZXJSZW1vdmVpdGVtKCkge1xuICAgICAgY29uc29sZS5sb2coXCJhZnRlclJlbW92ZWl0ZW1cIik7XG4gICAgICB0aGlzLiRyZWZzLmNhcnRfcG9pbnRzLmdldENhcnRwb2ludHMoKTtcbiAgICB9LFxuICAgIGFmdGVyUmVjZWl2ZShkYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImFmdGVyUmVjZWl2ZVwiKTtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgbGV0IG1lc3NhZ2UgPSBKU09OLnBhcnNlKGRhdGEubWVzc2FnZSk7XG4gICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICAgIEFQSWludGVyZmFjZS5mZXRjaERhdGFQb3N0KFxuICAgICAgICBcInZhbGlkYXRlQ2FydEl0ZW1zXCIsXG4gICAgICAgIFwiaXRlbV9pZD1cIiArXG4gICAgICAgICAgbWVzc2FnZS5pdGVtX2lkICtcbiAgICAgICAgICBcIiZjYXJ0X3V1aWQ9XCIgK1xuICAgICAgICAgIEFQSWludGVyZmFjZS5nZXRTdG9yYWdlKFwiY2FydF91dWlkXCIpXG4gICAgICApXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgLy9cbiAgICAgICAgICB0aGlzLiRxXG4gICAgICAgICAgICAuZGlhbG9nKHtcbiAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuJHQoXCJJdGVtc1wiKSxcbiAgICAgICAgICAgICAgbWVzc2FnZTogZGF0YS5tc2csXG4gICAgICAgICAgICAgIHBlcnNpc3RlbnQ6IHRydWUsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uT2soKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLkNhcnRTdG9yZS5nZXRDYXJ0KHRydWUsIHRoaXMucGF5bG9hZCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uQ2FuY2VsKCgpID0+IHtcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0NhbmNlbCcpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uRGlzbWlzcygoKSA9PiB7XG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdJIGFtIHRyaWdnZXJlZCBvbiBib3RoIE9LIGFuZCBDYW5jZWwnKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgLy9cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIC8vXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgLy9cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBhZnRlckFwcGx5d2FsbGV0KGRhdGEpIHtcbiAgICAgIHRoaXMud2FsbGV0X2RhdGEgPSBkYXRhO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iXSwiZmlsZSI6ImFzc2V0cy9DaGVja291dFBhZ2UuODFlYzJiNzguanMifQ==
