import { Q as QSkeleton } from "./QSkeleton.39737398.js";
import { Q as QChip } from "./QChip.f183a4f1.js";
import { S as Swiper, a as SwiperSlide } from "./swiper-slide.8a0c58df.js";
/* empty css                     */import { _ as _export_sfc, R as useDataStore, m as APIinterface, n as resolveComponent, p as openBlock, V as createElementBlock, F as Fragment, X as renderList, U as createBaseVNode, f as createVNode, q as createBlock, t as withCtx, b4 as normalizeStyle, aA as createCommentVNode, Z as toDisplayString, a6 as createTextVNode, a7 as normalizeClass } from "./index.61ed5618.js";
const _sfc_main = {
  props: ["list_type", "featured_id", "filters", "index"],
  name: "MerchantCarousel",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      loading: true,
      slide: 0,
      data: [],
      cuisine: [],
      reviews: [],
      estimation: [],
      services: [],
      items_min_max: []
    };
  },
  setup() {
    const DataStore = useDataStore();
    return { DataStore };
  },
  mounted() {
    if (APIinterface.empty(this.DataStore.car_data[this.index])) {
      this.getData(this.index);
    } else {
      if (Object.keys(this.DataStore.car_data[this.index]).length <= 0) {
        this.getData(this.index);
      }
    }
  },
  watch: {
    filters: {
      handler(newval, oldval) {
        console.log("carousel new filters");
        this.getData(this.index);
      },
      deep: true
    }
  },
  methods: {
    getData(index) {
      const params = {
        list_type: this.list_type,
        featured_id: this.featured_id,
        place_id: APIinterface.getStorage("place_id"),
        rows: 0,
        payload: [
          "cuisine",
          "reviews",
          "estimation",
          "services",
          "items_min_max"
        ],
        filters: this.filters
      };
      this.DataStore.getCarouselData(params, index);
    },
    getFeaturedMerchant() {
      const $params = {
        list_type: this.list_type,
        featured_id: this.featured_id,
        place_id: APIinterface.getStorage("place_id"),
        rows: 0,
        payload: [
          "cuisine",
          "reviews",
          "estimation",
          "services",
          "items_min_max"
        ],
        filters: this.filters
      };
      this.loading = true;
      APIinterface.getMerchantFeed($params).then((data) => {
        this.data = data.details.data;
        this.cuisine = data.details.cuisine;
        this.reviews = data.details.reviews;
        this.estimation = data.details.estimation;
        this.services = data.details.services;
        this.items_min_max = data.details.items_min_max;
      }).catch((error) => {
        this.data = [];
        this.cuisine = [];
        this.reviews = [];
        this.estimation = [];
        this.services = [];
        this.items_min_max = [];
      }).then((data) => {
        this.loading = false;
      });
    }
  }
};
const _hoisted_1 = {
  key: 0,
  class: "row q-gutter-sm items-center"
};
const _hoisted_2 = { class: "fit" };
const _hoisted_3 = {
  key: 0,
  class: "absolute-top fit light-dimmed"
};
const _hoisted_4 = { class: "text-left" };
const _hoisted_5 = { class: "ellipsis font13 text-weight-bold q-pt-xs" };
const _hoisted_6 = { class: "text-grey font12 line-1 ellipsis" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_swiper = resolveComponent("swiper");
  return $setup.DataStore.car_loading[$props.index] ? (openBlock(), createElementBlock("div", _hoisted_1, [
    (openBlock(), createElementBlock(Fragment, null, renderList(3, (i) => {
      return createBaseVNode("div", {
        key: i,
        class: "col"
      }, [
        createVNode(QSkeleton, {
          height: "90px",
          class: "full-width"
        }),
        createVNode(QSkeleton, {
          type: "text",
          class: "w-75"
        }),
        createVNode(QSkeleton, {
          type: "text",
          class: "w-100"
        })
      ]);
    }), 64))
  ])) : (openBlock(), createBlock(_component_swiper, {
    key: 1,
    slidesPerView: 2.3,
    spaceBetween: 10,
    loop: true,
    onSwiper: _ctx.onSwiper
  }, {
    default: withCtx(() => [
      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.DataStore.car_data[$props.index], (items) => {
        return openBlock(), createBlock(_component_swiper_slide, {
          key: items,
          class: "row"
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2, [
              createVNode(_component_router_link, {
                to: { name: "menu", params: { slug: items.restaurant_slug } }
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", {
                    class: "bg-grey-2 radius8 relative-position",
                    style: normalizeStyle([{ "height": "90px" }, `background-image: url(${items.url_logo}) !important;background-size:cover!important;min-height:100%;`])
                  }, [
                    items.open_status == 0 ? (openBlock(), createElementBlock("div", _hoisted_3)) : createCommentVNode("", true)
                  ], 4)
                ]),
                _: 2
              }, 1032, ["to"]),
              createBaseVNode("div", _hoisted_4, [
                createBaseVNode("div", _hoisted_5, toDisplayString(items.restaurant_name), 1),
                createBaseVNode("div", _hoisted_6, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(items.cuisine_group, (cuisine_index) => {
                    return openBlock(), createElementBlock(Fragment, { key: cuisine_index }, [
                      $data.cuisine[cuisine_index] ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                        createTextVNode(toDisplayString($data.cuisine[cuisine_index].name) + ", ", 1)
                      ], 64)) : createCommentVNode("", true)
                    ], 64);
                  }), 128))
                ]),
                createVNode(QChip, {
                  size: "sm",
                  "text-color": _ctx.$q.dark.mode ? "grey300" : "secondary",
                  icon: "star",
                  class: "no-padding transparent"
                }, {
                  default: withCtx(() => [
                    $setup.DataStore.car_reviews[$props.index][items.merchant_id] ? (openBlock(), createElementBlock("span", {
                      key: 0,
                      class: normalizeClass(["text-weight-medium", {
                        "text-white": _ctx.$q.dark.mode,
                        "text-dark": !_ctx.$q.dark.mode
                      }])
                    }, toDisplayString($setup.DataStore.car_reviews[$props.index][items.merchant_id].ratings), 3)) : (openBlock(), createElementBlock("span", {
                      key: 1,
                      class: normalizeClass(["text-weight-medium text-dark", {
                        "text-white": _ctx.$q.dark.mode,
                        "text-dark": !_ctx.$q.dark.mode
                      }])
                    }, "0", 2))
                  ]),
                  _: 2
                }, 1032, ["text-color"]),
                createVNode(QChip, {
                  size: "sm",
                  "text-color": _ctx.$q.dark.mode ? "grey300" : "secondary",
                  icon: "fiber_manual_record",
                  class: "no-padding transparent"
                }, {
                  default: withCtx(() => [
                    createBaseVNode("span", {
                      class: normalizeClass(["text-weight-medium", {
                        "text-white": _ctx.$q.dark.mode,
                        "text-dark": !_ctx.$q.dark.mode
                      }])
                    }, [
                      $setup.DataStore.car_estimation[$props.index][items.merchant_id] && $setup.DataStore.car_services[$props.index][items.merchant_id] ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList($setup.DataStore.car_services[$props.index][items.merchant_id], (service_name, index_service) => {
                        return openBlock(), createElementBlock(Fragment, null, [
                          index_service <= 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                            $setup.DataStore.car_estimation[$props.index][items.merchant_id][service_name][items.charge_type] ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                              createTextVNode(toDisplayString($setup.DataStore.car_estimation[$props.index][items.merchant_id][service_name][items.charge_type].estimation) + " " + toDisplayString(_ctx.$t("min")), 1)
                            ], 64)) : createCommentVNode("", true)
                          ], 64)) : createCommentVNode("", true)
                        ], 64);
                      }), 256)) : createCommentVNode("", true)
                    ], 2)
                  ]),
                  _: 2
                }, 1032, ["text-color"])
              ])
            ])
          ]),
          _: 2
        }, 1024);
      }), 128))
    ]),
    _: 1
  }, 8, ["slidesPerView", "onSwiper"]));
}
var MerchantCarousel = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "MerchantCarousel.vue"]]);
export { MerchantCarousel as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVyY2hhbnRDYXJvdXNlbC4xMWJkOWNlZC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvTWVyY2hhbnRDYXJvdXNlbC52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IHYtaWY9XCJEYXRhU3RvcmUuY2FyX2xvYWRpbmdbaW5kZXhdXCIgY2xhc3M9XCJyb3cgcS1ndXR0ZXItc20gaXRlbXMtY2VudGVyXCI+XG4gICAgPGRpdiB2LWZvcj1cImkgaW4gM1wiIDprZXk9XCJpXCIgY2xhc3M9XCJjb2xcIj5cbiAgICAgIDxxLXNrZWxldG9uIGhlaWdodD1cIjkwcHhcIiBjbGFzcz1cImZ1bGwtd2lkdGhcIiAvPlxuICAgICAgPHEtc2tlbGV0b24gdHlwZT1cInRleHRcIiBjbGFzcz1cInctNzVcIiAvPlxuICAgICAgPHEtc2tlbGV0b24gdHlwZT1cInRleHRcIiBjbGFzcz1cInctMTAwXCIgLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgPHN3aXBlclxuICAgICAgOnNsaWRlc1BlclZpZXc9XCIyLjNcIlxuICAgICAgOnNwYWNlQmV0d2Vlbj1cIjEwXCJcbiAgICAgIDpsb29wPVwidHJ1ZVwiXG4gICAgICBAc3dpcGVyPVwib25Td2lwZXJcIlxuICAgID5cbiAgICAgIDxzd2lwZXItc2xpZGVcbiAgICAgICAgdi1mb3I9XCJpdGVtcyBpbiBEYXRhU3RvcmUuY2FyX2RhdGFbaW5kZXhdXCJcbiAgICAgICAgOmtleT1cIml0ZW1zXCJcbiAgICAgICAgY2xhc3M9XCJyb3dcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZml0XCI+XG4gICAgICAgICAgPHJvdXRlci1saW5rXG4gICAgICAgICAgICA6dG89XCJ7IG5hbWU6ICdtZW51JywgcGFyYW1zOiB7IHNsdWc6IGl0ZW1zLnJlc3RhdXJhbnRfc2x1ZyB9IH1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3M9XCJiZy1ncmV5LTIgcmFkaXVzOCByZWxhdGl2ZS1wb3NpdGlvblwiXG4gICAgICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiA5MHB4XCJcbiAgICAgICAgICAgICAgOnN0eWxlPVwiYGJhY2tncm91bmQtaW1hZ2U6IHVybCgke2l0ZW1zLnVybF9sb2dvfSkgIWltcG9ydGFudDtiYWNrZ3JvdW5kLXNpemU6Y292ZXIhaW1wb3J0YW50O21pbi1oZWlnaHQ6MTAwJTtgXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHYtaWY9XCJpdGVtcy5vcGVuX3N0YXR1cyA9PSAwXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImFic29sdXRlLXRvcCBmaXQgbGlnaHQtZGltbWVkXCJcbiAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9yb3V0ZXItbGluaz5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbGxpcHNpcyBmb250MTMgdGV4dC13ZWlnaHQtYm9sZCBxLXB0LXhzXCI+XG4gICAgICAgICAgICAgIHt7IGl0ZW1zLnJlc3RhdXJhbnRfbmFtZSB9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1ncmV5IGZvbnQxMiBsaW5lLTEgZWxsaXBzaXNcIj5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgdi1mb3I9XCJjdWlzaW5lX2luZGV4IGluIGl0ZW1zLmN1aXNpbmVfZ3JvdXBcIlxuICAgICAgICAgICAgICAgIDprZXk9XCJjdWlzaW5lX2luZGV4XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiY3Vpc2luZVtjdWlzaW5lX2luZGV4XVwiXG4gICAgICAgICAgICAgICAgICA+e3sgY3Vpc2luZVtjdWlzaW5lX2luZGV4XS5uYW1lIH19LFxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxxLWNoaXBcbiAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgOnRleHQtY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTMwMCcgOiAnc2Vjb25kYXJ5J1wiXG4gICAgICAgICAgICAgIGljb249XCJzdGFyXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJuby1wYWRkaW5nIHRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICB2LWlmPVwiRGF0YVN0b3JlLmNhcl9yZXZpZXdzW2luZGV4XVtpdGVtcy5tZXJjaGFudF9pZF1cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC13ZWlnaHQtbWVkaXVtXCJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICAgICAndGV4dC13aGl0ZSc6ICRxLmRhcmsubW9kZSxcbiAgICAgICAgICAgICAgICAgICd0ZXh0LWRhcmsnOiAhJHEuZGFyay5tb2RlLFxuICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3sgRGF0YVN0b3JlLmNhcl9yZXZpZXdzW2luZGV4XVtpdGVtcy5tZXJjaGFudF9pZF0ucmF0aW5ncyB9fVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgdi1lbHNlXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LXdlaWdodC1tZWRpdW0gdGV4dC1kYXJrXCJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICAgICAndGV4dC13aGl0ZSc6ICRxLmRhcmsubW9kZSxcbiAgICAgICAgICAgICAgICAgICd0ZXh0LWRhcmsnOiAhJHEuZGFyay5tb2RlLFxuICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICAgID4wPC9zcGFuXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvcS1jaGlwPlxuXG4gICAgICAgICAgICA8cS1jaGlwXG4gICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgIDp0ZXh0LWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXkzMDAnIDogJ3NlY29uZGFyeSdcIlxuICAgICAgICAgICAgICBpY29uPVwiZmliZXJfbWFudWFsX3JlY29yZFwiXG4gICAgICAgICAgICAgIGNsYXNzPVwibm8tcGFkZGluZyB0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LXdlaWdodC1tZWRpdW1cIlxuICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICAgICAgICd0ZXh0LXdoaXRlJzogJHEuZGFyay5tb2RlLFxuICAgICAgICAgICAgICAgICAgJ3RleHQtZGFyayc6ICEkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgIHYtaWY9XCJcbiAgICAgICAgICAgICAgICAgICAgRGF0YVN0b3JlLmNhcl9lc3RpbWF0aW9uW2luZGV4XVtpdGVtcy5tZXJjaGFudF9pZF0gJiZcbiAgICAgICAgICAgICAgICAgICAgRGF0YVN0b3JlLmNhcl9zZXJ2aWNlc1tpbmRleF1baXRlbXMubWVyY2hhbnRfaWRdXG4gICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIihzZXJ2aWNlX25hbWUsIGluZGV4X3NlcnZpY2UpIGluIERhdGFTdG9yZVxuICAgICAgICAgICAgICAgICAgICAgIC5jYXJfc2VydmljZXNbaW5kZXhdW2l0ZW1zLm1lcmNoYW50X2lkXVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiaW5kZXhfc2VydmljZSA8PSAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIERhdGFTdG9yZS5jYXJfZXN0aW1hdGlvbltpbmRleF1baXRlbXMubWVyY2hhbnRfaWRdW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2VfbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdW2l0ZW1zLmNoYXJnZV90eXBlXVxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRhU3RvcmUuY2FyX2VzdGltYXRpb25baW5kZXhdW2l0ZW1zLm1lcmNoYW50X2lkXVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlX25hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVtpdGVtcy5jaGFyZ2VfdHlwZV0uZXN0aW1hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KFwibWluXCIpIH19XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9xLWNoaXA+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8IS0tIGZpdCAtLT5cbiAgICAgIDwvc3dpcGVyLXNsaWRlPlxuICAgIDwvc3dpcGVyPlxuICA8L3RlbXBsYXRlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tIFwic3dpcGVyL3Z1ZVwiO1xuaW1wb3J0IFwic3dpcGVyL2Nzc1wiO1xuaW1wb3J0IEFQSWludGVyZmFjZSBmcm9tIFwic3JjL2FwaS9BUElpbnRlcmZhY2VcIjtcbmltcG9ydCB7IHVzZURhdGFTdG9yZSB9IGZyb20gXCJzdG9yZXMvRGF0YVN0b3JlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IFtcImxpc3RfdHlwZVwiLCBcImZlYXR1cmVkX2lkXCIsIFwiZmlsdGVyc1wiLCBcImluZGV4XCJdLFxuICBuYW1lOiBcIk1lcmNoYW50Q2Fyb3VzZWxcIixcbiAgY29tcG9uZW50czoge1xuICAgIFN3aXBlcixcbiAgICBTd2lwZXJTbGlkZSxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgIHNsaWRlOiAwLFxuICAgICAgZGF0YTogW10sXG4gICAgICBjdWlzaW5lOiBbXSxcbiAgICAgIHJldmlld3M6IFtdLFxuICAgICAgZXN0aW1hdGlvbjogW10sXG4gICAgICBzZXJ2aWNlczogW10sXG4gICAgICBpdGVtc19taW5fbWF4OiBbXSxcbiAgICB9O1xuICB9LFxuICBzZXR1cCgpIHtcbiAgICBjb25zdCBEYXRhU3RvcmUgPSB1c2VEYXRhU3RvcmUoKTtcbiAgICByZXR1cm4geyBEYXRhU3RvcmUgfTtcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICBpZiAoQVBJaW50ZXJmYWNlLmVtcHR5KHRoaXMuRGF0YVN0b3JlLmNhcl9kYXRhW3RoaXMuaW5kZXhdKSkge1xuICAgICAgdGhpcy5nZXREYXRhKHRoaXMuaW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5EYXRhU3RvcmUuY2FyX2RhdGFbdGhpcy5pbmRleF0pLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgIHRoaXMuZ2V0RGF0YSh0aGlzLmluZGV4KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgLy8gZmlsdGVycyhuZXd2YWwsIG9sZHZhbCkge1xuICAgIC8vICAgY29uc29sZS5sb2coXCJjYXJvdXNlbCBuZXcgZmlsdGVyc1wiKTtcbiAgICAvLyAgIHRoaXMuZ2V0RGF0YSh0aGlzLmluZGV4KTtcbiAgICAvLyB9LFxuICAgIGZpbHRlcnM6IHtcbiAgICAgIGhhbmRsZXIobmV3dmFsLCBvbGR2YWwpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjYXJvdXNlbCBuZXcgZmlsdGVyc1wiKTtcbiAgICAgICAgdGhpcy5nZXREYXRhKHRoaXMuaW5kZXgpO1xuICAgICAgfSxcbiAgICAgIGRlZXA6IHRydWUsXG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGdldERhdGEoaW5kZXgpIHtcbiAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgbGlzdF90eXBlOiB0aGlzLmxpc3RfdHlwZSxcbiAgICAgICAgZmVhdHVyZWRfaWQ6IHRoaXMuZmVhdHVyZWRfaWQsXG4gICAgICAgIHBsYWNlX2lkOiBBUElpbnRlcmZhY2UuZ2V0U3RvcmFnZShcInBsYWNlX2lkXCIpLFxuICAgICAgICByb3dzOiAwLFxuICAgICAgICBwYXlsb2FkOiBbXG4gICAgICAgICAgXCJjdWlzaW5lXCIsXG4gICAgICAgICAgXCJyZXZpZXdzXCIsXG4gICAgICAgICAgXCJlc3RpbWF0aW9uXCIsXG4gICAgICAgICAgXCJzZXJ2aWNlc1wiLFxuICAgICAgICAgIFwiaXRlbXNfbWluX21heFwiLFxuICAgICAgICBdLFxuICAgICAgICBmaWx0ZXJzOiB0aGlzLmZpbHRlcnMsXG4gICAgICB9O1xuICAgICAgdGhpcy5EYXRhU3RvcmUuZ2V0Q2Fyb3VzZWxEYXRhKHBhcmFtcywgaW5kZXgpO1xuICAgIH0sXG4gICAgZ2V0RmVhdHVyZWRNZXJjaGFudCgpIHtcbiAgICAgIGNvbnN0ICRwYXJhbXMgPSB7XG4gICAgICAgIGxpc3RfdHlwZTogdGhpcy5saXN0X3R5cGUsXG4gICAgICAgIGZlYXR1cmVkX2lkOiB0aGlzLmZlYXR1cmVkX2lkLFxuICAgICAgICBwbGFjZV9pZDogQVBJaW50ZXJmYWNlLmdldFN0b3JhZ2UoXCJwbGFjZV9pZFwiKSxcbiAgICAgICAgcm93czogMCxcbiAgICAgICAgcGF5bG9hZDogW1xuICAgICAgICAgIFwiY3Vpc2luZVwiLFxuICAgICAgICAgIFwicmV2aWV3c1wiLFxuICAgICAgICAgIFwiZXN0aW1hdGlvblwiLFxuICAgICAgICAgIFwic2VydmljZXNcIixcbiAgICAgICAgICBcIml0ZW1zX21pbl9tYXhcIixcbiAgICAgICAgXSxcbiAgICAgICAgZmlsdGVyczogdGhpcy5maWx0ZXJzLFxuICAgICAgfTtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICBBUElpbnRlcmZhY2UuZ2V0TWVyY2hhbnRGZWVkKCRwYXJhbXMpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5kYXRhID0gZGF0YS5kZXRhaWxzLmRhdGE7XG4gICAgICAgICAgdGhpcy5jdWlzaW5lID0gZGF0YS5kZXRhaWxzLmN1aXNpbmU7XG4gICAgICAgICAgdGhpcy5yZXZpZXdzID0gZGF0YS5kZXRhaWxzLnJldmlld3M7XG4gICAgICAgICAgdGhpcy5lc3RpbWF0aW9uID0gZGF0YS5kZXRhaWxzLmVzdGltYXRpb247XG4gICAgICAgICAgdGhpcy5zZXJ2aWNlcyA9IGRhdGEuZGV0YWlscy5zZXJ2aWNlcztcbiAgICAgICAgICB0aGlzLml0ZW1zX21pbl9tYXggPSBkYXRhLmRldGFpbHMuaXRlbXNfbWluX21heDtcbiAgICAgICAgfSlcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICAgICAgICB0aGlzLmN1aXNpbmUgPSBbXTtcbiAgICAgICAgICB0aGlzLnJldmlld3MgPSBbXTtcbiAgICAgICAgICB0aGlzLmVzdGltYXRpb24gPSBbXTtcbiAgICAgICAgICB0aGlzLnNlcnZpY2VzID0gW107XG4gICAgICAgICAgdGhpcy5pdGVtc19taW5fbWF4ID0gW107XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfRnJhZ21lbnQiLCJfcmVuZGVyTGlzdCIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfY3JlYXRlVk5vZGUiLCJfY3JlYXRlQmxvY2siLCJfbm9ybWFsaXplU3R5bGUiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX2NyZWF0ZVRleHRWTm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFzSUEsTUFBSyxZQUFVO0FBQUEsRUFDYixPQUFPLENBQUMsYUFBYSxlQUFlLFdBQVcsT0FBTztBQUFBLEVBQ3RELE1BQU07QUFBQSxFQUNOLFlBQVk7QUFBQSxJQUNWO0FBQUEsSUFDQTtBQUFBLEVBQ0Q7QUFBQSxFQUNELE9BQU87QUFDTCxXQUFPO0FBQUEsTUFDTCxTQUFTO0FBQUEsTUFDVCxPQUFPO0FBQUEsTUFDUCxNQUFNLENBQUU7QUFBQSxNQUNSLFNBQVMsQ0FBRTtBQUFBLE1BQ1gsU0FBUyxDQUFFO0FBQUEsTUFDWCxZQUFZLENBQUU7QUFBQSxNQUNkLFVBQVUsQ0FBRTtBQUFBLE1BQ1osZUFBZSxDQUFFO0FBQUE7RUFFcEI7QUFBQSxFQUNELFFBQVE7QUFDTixVQUFNLFlBQVk7QUFDbEIsV0FBTyxFQUFFO0VBQ1Y7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
