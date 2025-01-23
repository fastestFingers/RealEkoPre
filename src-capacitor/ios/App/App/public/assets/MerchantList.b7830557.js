import { _ as _export_sfc, l as defineAsyncComponent, u as __vitePreload, R as useDataStore, m as APIinterface, n as resolveComponent, p as openBlock, V as createElementBlock, q as createBlock, t as withCtx, F as Fragment, X as renderList, aa as withDirectives, ab as Ripple, ac as QItem, f as createVNode, a8 as QCard, a9 as QCardSection, U as createBaseVNode, Z as toDisplayString, bE as QCardActions, Y as QBtn, aB as QDialog } from "./index.61ed5618.js";
import { Q as QList } from "./QList.b69a7e5b.js";
import { Q as QImg } from "./QImg.6c27044c.js";
import { C as ClosePopup } from "./ClosePopup.9d17b53c.js";
const _sfc_main = {
  name: "MerchantList",
  props: ["list_type", "filters", "featured_id"],
  components: {
    MerchantListTpl: defineAsyncComponent(
      () => __vitePreload(() => import("./MerchantListTpl.ab0a2b4a.js"), true ? ["assets/MerchantListTpl.ab0a2b4a.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QImg.6c27044c.js","assets/QChip.f183a4f1.js"] : void 0)
    ),
    MerchantListSkeleton: defineAsyncComponent(
      () => __vitePreload(() => import("./MerchantListSkeleton.86acaa3d.js"), true ? ["assets/MerchantListSkeleton.86acaa3d.js","assets/QSkeleton.39737398.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QList.b69a7e5b.js"] : void 0)
    )
  },
  setup() {
    const DataStore = useDataStore();
    return { DataStore };
  },
  data() {
    return {
      data: [],
      cuisine: [],
      reviews: [],
      estimation: [],
      services: [],
      alert: false,
      loading: false,
      promos: []
    };
  },
  watch: {
    filters: {
      handler(newval, oldval) {
        console.log("merchant list new filters");
        this.getData();
      },
      deep: true
    }
  },
  mounted() {
    if (Object.keys(this.DataStore.list_data).length <= 0) {
      this.DataStore.list_featured_id = this.featured_id;
      this.getData();
    } else {
      if (this.featured_id === this.DataStore.list_featured_id)
        ;
      else {
        this.DataStore.list_featured_id = this.featured_id;
        this.getData();
      }
    }
  },
  methods: {
    getData() {
      const $params = {
        featured_id: this.featured_id,
        list_type: this.list_type,
        place_id: APIinterface.getStorage("place_id"),
        payload: ["cuisine", "reviews", "estimation", "services", "promo"],
        filters: this.filters
      };
      this.DataStore.getMerchantFeed($params);
    }
  }
};
const _hoisted_1 = { class: "text-grey" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MerchantListSkeleton = resolveComponent("MerchantListSkeleton");
  const _component_MerchantListTpl = resolveComponent("MerchantListTpl");
  return openBlock(), createElementBlock(Fragment, null, [
    $setup.DataStore.list_loading ? (openBlock(), createBlock(_component_MerchantListSkeleton, { key: 0 })) : (openBlock(), createBlock(QList, {
      key: 1,
      class: "qlist-no-padding"
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.DataStore.list_data, (items) => {
          return withDirectives((openBlock(), createBlock(QItem, {
            key: items.merchant_id,
            clickable: "",
            to: { name: "menu", params: { slug: items.restaurant_slug } }
          }, {
            default: withCtx(() => [
              createVNode(_component_MerchantListTpl, {
                items,
                cuisine: $setup.DataStore.list_cuisine,
                reviews: $setup.DataStore.list_reviews,
                estimation: $setup.DataStore.list_estimation,
                services: $setup.DataStore.list_services,
                promos: $setup.DataStore.promos
              }, null, 8, ["items", "cuisine", "reviews", "estimation", "services", "promos"])
            ]),
            _: 2
          }, 1032, ["to"])), [
            [Ripple]
          ]);
        }), 128))
      ]),
      _: 1
    })),
    createVNode(QDialog, {
      modelValue: $data.alert,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.alert = $event)
    }, {
      default: withCtx(() => [
        createVNode(QCard, null, {
          default: withCtx(() => [
            createVNode(QCardSection, { class: "text-center" }, {
              default: withCtx(() => [
                createVNode(QImg, {
                  src: "bankrupt.png",
                  style: { "height": "80px", "max-width": "80px" },
                  class: "q-mb-sm light-dimmed"
                }),
                createBaseVNode("p", _hoisted_1, toDisplayString(_ctx.$t(
                  "We're sorry. We were not able to find a match with your filters."
                )), 1)
              ]),
              _: 1
            }),
            createVNode(QCardActions, { align: "right" }, {
              default: withCtx(() => [
                withDirectives(createVNode(QBtn, {
                  unelevated: "",
                  label: "OK",
                  color: "primary"
                }, null, 512), [
                  [ClosePopup]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["modelValue"])
  ], 64);
}
var MerchantList = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "MerchantList.vue"]]);
export { MerchantList as default };
//# sourceMappingURL=data:application/json;base64,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QUFBLCtCQUE3REEsWUFBNkQ7QUFBQSxrQkFBdEQ7QUFBQSxrQkFBVyxPQUFNO0FBQUEsa0JBQUssT0FBTTtBQUFBIiwibmFtZXMiOlsiX2NyZWF0ZUJsb2NrIiwiX29wZW5CbG9jayIsIl9GcmFnbWVudCIsIl9jcmVhdGVWTm9kZSIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvTWVyY2hhbnRMaXN0LnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxNZXJjaGFudExpc3RTa2VsZXRvbiB2LWlmPVwiRGF0YVN0b3JlLmxpc3RfbG9hZGluZ1wiIC8+XG5cbiAgPHEtbGlzdCB2LWVsc2UgY2xhc3M9XCJxbGlzdC1uby1wYWRkaW5nXCI+XG4gICAgPHEtaXRlbVxuICAgICAgdi1mb3I9XCJpdGVtcyBpbiBEYXRhU3RvcmUubGlzdF9kYXRhXCJcbiAgICAgIDprZXk9XCJpdGVtcy5tZXJjaGFudF9pZFwiXG4gICAgICBjbGlja2FibGVcbiAgICAgIHYtcmlwcGxlXG4gICAgICA6dG89XCJ7IG5hbWU6ICdtZW51JywgcGFyYW1zOiB7IHNsdWc6IGl0ZW1zLnJlc3RhdXJhbnRfc2x1ZyB9IH1cIlxuICAgID5cbiAgICAgIDxNZXJjaGFudExpc3RUcGxcbiAgICAgICAgOml0ZW1zPVwiaXRlbXNcIlxuICAgICAgICA6Y3Vpc2luZT1cIkRhdGFTdG9yZS5saXN0X2N1aXNpbmVcIlxuICAgICAgICA6cmV2aWV3cz1cIkRhdGFTdG9yZS5saXN0X3Jldmlld3NcIlxuICAgICAgICA6ZXN0aW1hdGlvbj1cIkRhdGFTdG9yZS5saXN0X2VzdGltYXRpb25cIlxuICAgICAgICA6c2VydmljZXM9XCJEYXRhU3RvcmUubGlzdF9zZXJ2aWNlc1wiXG4gICAgICAgIDpwcm9tb3M9XCJEYXRhU3RvcmUucHJvbW9zXCJcbiAgICAgIC8+XG4gICAgPC9xLWl0ZW0+XG4gIDwvcS1saXN0PlxuXG4gIDxxLWRpYWxvZyB2LW1vZGVsPVwiYWxlcnRcIj5cbiAgICA8cS1jYXJkPlxuICAgICAgPHEtY2FyZC1zZWN0aW9uIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPHEtaW1nXG4gICAgICAgICAgc3JjPVwiYmFua3J1cHQucG5nXCJcbiAgICAgICAgICBzdHlsZT1cImhlaWdodDogODBweDsgbWF4LXdpZHRoOiA4MHB4XCJcbiAgICAgICAgICBjbGFzcz1cInEtbWItc20gbGlnaHQtZGltbWVkXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWdyZXlcIj5cbiAgICAgICAgICB7e1xuICAgICAgICAgICAgJHQoXG4gICAgICAgICAgICAgIFwiV2UncmUgc29ycnkuIFdlIHdlcmUgbm90IGFibGUgdG8gZmluZCBhIG1hdGNoIHdpdGggeW91ciBmaWx0ZXJzLlwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgfX1cbiAgICAgICAgPC9wPlxuICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cblxuICAgICAgPHEtY2FyZC1hY3Rpb25zIGFsaWduPVwicmlnaHRcIj5cbiAgICAgICAgPHEtYnRuIHVuZWxldmF0ZWQgbGFiZWw9XCJPS1wiIGNvbG9yPVwicHJpbWFyeVwiIHYtY2xvc2UtcG9wdXAgLz5cbiAgICAgIDwvcS1jYXJkLWFjdGlvbnM+XG4gICAgPC9xLWNhcmQ+XG4gIDwvcS1kaWFsb2c+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEFQSWludGVyZmFjZSBmcm9tIFwic3JjL2FwaS9BUElpbnRlcmZhY2VcIjtcbmltcG9ydCB7IGRlZmluZUFzeW5jQ29tcG9uZW50IH0gZnJvbSBcInZ1ZVwiO1xuaW1wb3J0IHsgdXNlRGF0YVN0b3JlIH0gZnJvbSBcInN0b3Jlcy9EYXRhU3RvcmVcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIk1lcmNoYW50TGlzdFwiLFxuICBwcm9wczogW1wibGlzdF90eXBlXCIsIFwiZmlsdGVyc1wiLCBcImZlYXR1cmVkX2lkXCJdLFxuICBjb21wb25lbnRzOiB7XG4gICAgTWVyY2hhbnRMaXN0VHBsOiBkZWZpbmVBc3luY0NvbXBvbmVudCgoKSA9PlxuICAgICAgaW1wb3J0KFwiY29tcG9uZW50cy9NZXJjaGFudExpc3RUcGwudnVlXCIpXG4gICAgKSxcbiAgICBNZXJjaGFudExpc3RTa2VsZXRvbjogZGVmaW5lQXN5bmNDb21wb25lbnQoKCkgPT5cbiAgICAgIGltcG9ydChcImNvbXBvbmVudHMvTWVyY2hhbnRMaXN0U2tlbGV0b24udnVlXCIpXG4gICAgKSxcbiAgfSxcbiAgc2V0dXAoKSB7XG4gICAgY29uc3QgRGF0YVN0b3JlID0gdXNlRGF0YVN0b3JlKCk7XG4gICAgcmV0dXJuIHsgRGF0YVN0b3JlIH07XG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IFtdLFxuICAgICAgY3Vpc2luZTogW10sXG4gICAgICByZXZpZXdzOiBbXSxcbiAgICAgIGVzdGltYXRpb246IFtdLFxuICAgICAgc2VydmljZXM6IFtdLFxuICAgICAgYWxlcnQ6IGZhbHNlLFxuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICBwcm9tb3M6IFtdLFxuICAgIH07XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgLy8gZmlsdGVycyhuZXd2YWwsIG9sZHZhbCkge1xuICAgIC8vICAgY29uc29sZS5sb2coXCJtZXJjaGFudCBsaXN0IG5ldyBmaWx0ZXJzXCIpO1xuICAgIC8vICAgdGhpcy5nZXREYXRhKCk7XG4gICAgLy8gfSxcbiAgICBmaWx0ZXJzOiB7XG4gICAgICBoYW5kbGVyKG5ld3ZhbCwgb2xkdmFsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibWVyY2hhbnQgbGlzdCBuZXcgZmlsdGVyc1wiKTtcbiAgICAgICAgdGhpcy5nZXREYXRhKCk7XG4gICAgICB9LFxuICAgICAgZGVlcDogdHJ1ZSxcbiAgICB9LFxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLkRhdGFTdG9yZS5saXN0X2RhdGEpLmxlbmd0aCA8PSAwKSB7XG4gICAgICB0aGlzLkRhdGFTdG9yZS5saXN0X2ZlYXR1cmVkX2lkID0gdGhpcy5mZWF0dXJlZF9pZDtcbiAgICAgIHRoaXMuZ2V0RGF0YSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5mZWF0dXJlZF9pZCA9PT0gdGhpcy5EYXRhU3RvcmUubGlzdF9mZWF0dXJlZF9pZCkge1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5EYXRhU3RvcmUubGlzdF9mZWF0dXJlZF9pZCA9IHRoaXMuZmVhdHVyZWRfaWQ7XG4gICAgICAgIHRoaXMuZ2V0RGF0YSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGdldERhdGEoKSB7XG4gICAgICBjb25zdCAkcGFyYW1zID0ge1xuICAgICAgICBmZWF0dXJlZF9pZDogdGhpcy5mZWF0dXJlZF9pZCxcbiAgICAgICAgbGlzdF90eXBlOiB0aGlzLmxpc3RfdHlwZSxcbiAgICAgICAgcGxhY2VfaWQ6IEFQSWludGVyZmFjZS5nZXRTdG9yYWdlKFwicGxhY2VfaWRcIiksXG4gICAgICAgIHBheWxvYWQ6IFtcImN1aXNpbmVcIiwgXCJyZXZpZXdzXCIsIFwiZXN0aW1hdGlvblwiLCBcInNlcnZpY2VzXCIsIFwicHJvbW9cIl0sXG4gICAgICAgIGZpbHRlcnM6IHRoaXMuZmlsdGVycyxcbiAgICAgIH07XG4gICAgICB0aGlzLkRhdGFTdG9yZS5nZXRNZXJjaGFudEZlZWQoJHBhcmFtcyk7XG4gICAgfSxcbiAgICAvLyBnZXRNZXJjaGFudEZlZWQoKSB7XG4gICAgLy8gICBjb25zb2xlLmRlYnVnKFwiZ2V0TWVyY2hhbnRGZWVkXCIpO1xuICAgIC8vICAgY29uc3QgJHBhcmFtcyA9IHtcbiAgICAvLyAgICAgZmVhdHVyZWRfaWQ6IHRoaXMuZmVhdHVyZWRfaWQsXG4gICAgLy8gICAgIGxpc3RfdHlwZTogdGhpcy5saXN0X3R5cGUsXG4gICAgLy8gICAgIHBsYWNlX2lkOiBBUElpbnRlcmZhY2UuZ2V0U3RvcmFnZShcInBsYWNlX2lkXCIpLFxuICAgIC8vICAgICBwYXlsb2FkOiBbXCJjdWlzaW5lXCIsIFwicmV2aWV3c1wiLCBcImVzdGltYXRpb25cIiwgXCJzZXJ2aWNlc1wiLCBcInByb21vXCJdLFxuICAgIC8vICAgICBmaWx0ZXJzOiB0aGlzLmZpbHRlcnMsXG4gICAgLy8gICB9O1xuICAgIC8vICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAvLyAgIEFQSWludGVyZmFjZS5nZXRNZXJjaGFudEZlZWQoJHBhcmFtcylcbiAgICAvLyAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAvLyAgICAgICB0aGlzLmRhdGEgPSBkYXRhLmRldGFpbHMuZGF0YTtcbiAgICAvLyAgICAgICB0aGlzLmN1aXNpbmUgPSBkYXRhLmRldGFpbHMuY3Vpc2luZTtcbiAgICAvLyAgICAgICB0aGlzLnJldmlld3MgPSBkYXRhLmRldGFpbHMucmV2aWV3cztcbiAgICAvLyAgICAgICB0aGlzLmVzdGltYXRpb24gPSBkYXRhLmRldGFpbHMuZXN0aW1hdGlvbjtcbiAgICAvLyAgICAgICB0aGlzLnNlcnZpY2VzID0gZGF0YS5kZXRhaWxzLnNlcnZpY2VzO1xuICAgIC8vICAgICAgIHRoaXMucHJvbW9zID0gZGF0YS5kZXRhaWxzLnByb21vcztcbiAgICAvLyAgICAgICB0aGlzLiRlbWl0KFwiYWZ0ZXJSZXN1bHRzXCIsIHRydWUpO1xuICAgIC8vICAgICB9KVxuICAgIC8vICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAvLyAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgIC8vICAgICAgIC8vdGhpcy5hbGVydCA9IHRydWU7XG4gICAgLy8gICAgICAgdGhpcy4kZW1pdChcImFmdGVyUmVzdWx0c1wiLCBmYWxzZSk7XG4gICAgLy8gICAgIH0pXG4gICAgLy8gICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgLy8gICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iXSwiZmlsZSI6ImFzc2V0cy9NZXJjaGFudExpc3QuYjc4MzA1NTcuanMifQ==
