import { Q as QSkeleton } from "./QSkeleton.39737398.js";
import { _ as _export_sfc, n as resolveComponent, p as openBlock, V as createElementBlock, f as createVNode, F as Fragment, q as createBlock, t as withCtx, X as renderList, U as createBaseVNode, Y as QBtn, Z as toDisplayString, aA as createCommentVNode, a8 as QCard, a9 as QCardSection, aB as QDialog } from "./index.61ed5618.js";
import { S as Swiper, a as SwiperSlide } from "./swiper-slide.8a0c58df.js";
/* empty css                     */import { u as usePromoStore } from "./PromoStore.a9bf7bbf.js";
const _sfc_main = {
  name: "MerchantPromoSlide",
  props: ["merchant_id"],
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const PromoStore = usePromoStore();
    return { PromoStore };
  },
  data() {
    return {
      modal: false,
      selected_index: 0
    };
  },
  created() {
    this.PromoStore.loadPromo(this.merchant_id);
  },
  methods: {
    showDetails(index) {
      this.selected_index = index;
      this.modal = true;
    },
    refresh() {
      this.PromoStore.loadPromo(this.merchant_id);
    }
  }
};
const _hoisted_1 = {
  key: 0,
  class: "row q-gutter-sm q-mb-sm"
};
const _hoisted_2 = { class: "row fit items-center" };
const _hoisted_3 = { class: "col-2" };
const _hoisted_4 = { class: "col text-left" };
const _hoisted_5 = { class: "text-weight-bold no-margin line-normal ellipsis" };
const _hoisted_6 = { class: "text-grey ellipsis" };
const _hoisted_7 = {
  key: 0,
  class: "row items-center q-gutter-sm q-mb-sm q-pb-sm border-bottom"
};
const _hoisted_8 = { class: "text-weight-bold" };
const _hoisted_9 = { class: "text-weight-medium font12" };
const _hoisted_10 = { class: "text-grey font13" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_swiper = resolveComponent("swiper");
  return openBlock(), createElementBlock(Fragment, null, [
    $setup.PromoStore.loading ? (openBlock(), createElementBlock("div", _hoisted_1, [
      createVNode(QSkeleton, {
        height: "50px",
        square: "",
        class: "col-6 radius8"
      }),
      createVNode(QSkeleton, {
        height: "50px",
        square: "",
        class: "col-5 radius8"
      })
    ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
      $setup.PromoStore.data[$props.merchant_id] ? (openBlock(), createBlock(_component_swiper, {
        key: 0,
        "slides-per-view": 1.3,
        "space-between": 10,
        onSwiper: _ctx.onSwiper,
        onSlideChange: _ctx.onSlideChange,
        class: "q-mb-md"
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList($setup.PromoStore.data[$props.merchant_id], (items, index) => {
            return openBlock(), createBlock(_component_swiper_slide, {
              key: items,
              class: "row"
            }, {
              default: withCtx(() => [
                createVNode(QBtn, {
                  modelValue: _ctx.category,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.category = $event),
                  unelevated: "",
                  "no-caps": "",
                  color: _ctx.$q.dark.mode ? "grey600" : "mygrey",
                  "text-color": _ctx.$q.dark.mode ? "grey300" : "dark",
                  class: "radius8 fit q-pa-sm",
                  size: "sm",
                  onClick: ($event) => $options.showDetails(index)
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_2, [
                      createBaseVNode("div", _hoisted_3, [
                        createVNode(QBtn, {
                          round: "",
                          color: "secondary",
                          icon: items.promo_type == "voucher" ? "local_offer" : "las la-percent",
                          unelevated: "",
                          size: "xs",
                          class: "radius8"
                        }, null, 8, ["icon"])
                      ]),
                      createBaseVNode("div", _hoisted_4, [
                        createBaseVNode("div", _hoisted_5, toDisplayString(items.title), 1),
                        createBaseVNode("div", _hoisted_6, toDisplayString(items.valid_to), 1)
                      ])
                    ])
                  ]),
                  _: 2
                }, 1032, ["modelValue", "color", "text-color", "onClick"])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ]),
        _: 1
      }, 8, ["slides-per-view", "onSwiper", "onSlideChange"])) : createCommentVNode("", true)
    ], 64)),
    createVNode(QDialog, {
      modelValue: $data.modal,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.modal = $event),
      position: "bottom"
    }, {
      default: withCtx(() => [
        createVNode(QCard, null, {
          default: withCtx(() => [
            createVNode(QCardSection, { class: "q-pl-md" }, {
              default: withCtx(() => [
                $setup.PromoStore.data[$props.merchant_id][$data.selected_index] ? (openBlock(), createElementBlock("div", _hoisted_7, [
                  createVNode(QBtn, {
                    round: "",
                    color: "secondary",
                    icon: "las la-percent",
                    unelevated: "",
                    size: "xs",
                    class: "radius8"
                  }),
                  createBaseVNode("div", null, [
                    createBaseVNode("div", _hoisted_8, toDisplayString($setup.PromoStore.data[$props.merchant_id][$data.selected_index].title), 1),
                    createBaseVNode("div", _hoisted_9, toDisplayString($setup.PromoStore.data[$props.merchant_id][$data.selected_index].sub_title), 1)
                  ])
                ])) : createCommentVNode("", true),
                createBaseVNode("div", _hoisted_10, toDisplayString($setup.PromoStore.data[$props.merchant_id][$data.selected_index].valid_to), 1)
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
var MerchantPromoSlide = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "MerchantPromoSlide.vue"]]);
export { MerchantPromoSlide as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVyY2hhbnRQcm9tb1NsaWRlLjQzYjYyNjJlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9NZXJjaGFudFByb21vU2xpZGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHRlbXBsYXRlIHYtaWY9XCJQcm9tb1N0b3JlLmxvYWRpbmdcIj5cbiAgICA8ZGl2IGNsYXNzPVwicm93IHEtZ3V0dGVyLXNtIHEtbWItc21cIj5cbiAgICAgIDxxLXNrZWxldG9uIGhlaWdodD1cIjUwcHhcIiBzcXVhcmUgY2xhc3M9XCJjb2wtNiByYWRpdXM4XCIgLz5cbiAgICAgIDxxLXNrZWxldG9uIGhlaWdodD1cIjUwcHhcIiBzcXVhcmUgY2xhc3M9XCJjb2wtNSByYWRpdXM4XCIgLz5cbiAgICA8L2Rpdj5cbiAgPC90ZW1wbGF0ZT5cbiAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICA8c3dpcGVyXG4gICAgICB2LWlmPVwiUHJvbW9TdG9yZS5kYXRhW21lcmNoYW50X2lkXVwiXG4gICAgICA6c2xpZGVzLXBlci12aWV3PVwiMS4zXCJcbiAgICAgIDpzcGFjZS1iZXR3ZWVuPVwiMTBcIlxuICAgICAgQHN3aXBlcj1cIm9uU3dpcGVyXCJcbiAgICAgIEBzbGlkZUNoYW5nZT1cIm9uU2xpZGVDaGFuZ2VcIlxuICAgICAgY2xhc3M9XCJxLW1iLW1kXCJcbiAgICA+XG4gICAgICA8c3dpcGVyLXNsaWRlXG4gICAgICAgIHYtZm9yPVwiKGl0ZW1zLCBpbmRleCkgaW4gUHJvbW9TdG9yZS5kYXRhW21lcmNoYW50X2lkXVwiXG4gICAgICAgIDprZXk9XCJpdGVtc1wiXG4gICAgICAgIGNsYXNzPVwicm93XCJcbiAgICAgID5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgdi1tb2RlbD1cImNhdGVnb3J5XCJcbiAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgIDpjb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5NjAwJyA6ICdteWdyZXknXCJcbiAgICAgICAgICA6dGV4dC1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICdkYXJrJ1wiXG4gICAgICAgICAgY2xhc3M9XCJyYWRpdXM4IGZpdCBxLXBhLXNtXCJcbiAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgIEBjbGljaz1cInNob3dEZXRhaWxzKGluZGV4KVwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGZpdCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMlwiPlxuICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICByb3VuZFxuICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICA6aWNvbj1cIlxuICAgICAgICAgICAgICAgICAgaXRlbXMucHJvbW9fdHlwZSA9PSAndm91Y2hlcidcbiAgICAgICAgICAgICAgICAgICAgPyAnbG9jYWxfb2ZmZXInXG4gICAgICAgICAgICAgICAgICAgIDogJ2xhcyBsYS1wZXJjZW50J1xuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJyYWRpdXM4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGQgbm8tbWFyZ2luIGxpbmUtbm9ybWFsIGVsbGlwc2lzXCI+XG4gICAgICAgICAgICAgICAge3sgaXRlbXMudGl0bGUgfX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWdyZXkgZWxsaXBzaXNcIj5cbiAgICAgICAgICAgICAgICB7eyBpdGVtcy52YWxpZF90byB9fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3EtYnRuPlxuICAgICAgPC9zd2lwZXItc2xpZGU+XG4gICAgPC9zd2lwZXI+XG4gIDwvdGVtcGxhdGU+XG5cbiAgPHEtZGlhbG9nIHYtbW9kZWw9XCJtb2RhbFwiIHBvc2l0aW9uPVwiYm90dG9tXCI+XG4gICAgPHEtY2FyZD5cbiAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cInEtcGwtbWRcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHYtaWY9XCJQcm9tb1N0b3JlLmRhdGFbbWVyY2hhbnRfaWRdW3NlbGVjdGVkX2luZGV4XVwiXG4gICAgICAgICAgY2xhc3M9XCJyb3cgaXRlbXMtY2VudGVyIHEtZ3V0dGVyLXNtIHEtbWItc20gcS1wYi1zbSBib3JkZXItYm90dG9tXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgcm91bmRcbiAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIGljb249XCJsYXMgbGEtcGVyY2VudFwiXG4gICAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICAgICAgY2xhc3M9XCJyYWRpdXM4XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC13ZWlnaHQtYm9sZFwiPlxuICAgICAgICAgICAgICB7eyBQcm9tb1N0b3JlLmRhdGFbbWVyY2hhbnRfaWRdW3NlbGVjdGVkX2luZGV4XS50aXRsZSB9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC13ZWlnaHQtbWVkaXVtIGZvbnQxMlwiPlxuICAgICAgICAgICAgICB7eyBQcm9tb1N0b3JlLmRhdGFbbWVyY2hhbnRfaWRdW3NlbGVjdGVkX2luZGV4XS5zdWJfdGl0bGUgfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtZ3JleSBmb250MTNcIj5cbiAgICAgICAgICB7eyBQcm9tb1N0b3JlLmRhdGFbbWVyY2hhbnRfaWRdW3NlbGVjdGVkX2luZGV4XS52YWxpZF90byB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgPC9xLWNhcmQ+XG4gIDwvcS1kaWFsb2c+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gXCJzd2lwZXIvdnVlXCI7XG5pbXBvcnQgXCJzd2lwZXIvY3NzXCI7XG5pbXBvcnQgeyB1c2VQcm9tb1N0b3JlIH0gZnJvbSBcInN0b3Jlcy9Qcm9tb1N0b3JlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJNZXJjaGFudFByb21vU2xpZGVcIixcbiAgcHJvcHM6IFtcIm1lcmNoYW50X2lkXCJdLFxuICBjb21wb25lbnRzOiB7XG4gICAgU3dpcGVyLFxuICAgIFN3aXBlclNsaWRlLFxuICB9LFxuICBzZXR1cCgpIHtcbiAgICBjb25zdCBQcm9tb1N0b3JlID0gdXNlUHJvbW9TdG9yZSgpO1xuICAgIHJldHVybiB7IFByb21vU3RvcmUgfTtcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbW9kYWw6IGZhbHNlLFxuICAgICAgc2VsZWN0ZWRfaW5kZXg6IDAsXG4gICAgfTtcbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICAvLyBpZiAoT2JqZWN0LmtleXModGhpcy5Qcm9tb1N0b3JlLmRhdGEpLmxlbmd0aCA8PSAwKSB7XG4gICAgLy8gICB0aGlzLlByb21vU3RvcmUubG9hZFByb21vKHRoaXMubWVyY2hhbnRfaWQpO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICBpZiAoIXRoaXMuUHJvbW9TdG9yZS5kYXRhW3RoaXMubWVyY2hhbnRfaWRdKSB7XG4gICAgLy8gICAgIHRoaXMuUHJvbW9TdG9yZS5sb2FkUHJvbW8odGhpcy5tZXJjaGFudF9pZCk7XG4gICAgLy8gICB9XG4gICAgLy8gfVxuICAgIHRoaXMuUHJvbW9TdG9yZS5sb2FkUHJvbW8odGhpcy5tZXJjaGFudF9pZCk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBzaG93RGV0YWlscyhpbmRleCkge1xuICAgICAgdGhpcy5zZWxlY3RlZF9pbmRleCA9IGluZGV4O1xuICAgICAgdGhpcy5tb2RhbCA9IHRydWU7XG4gICAgfSxcbiAgICByZWZyZXNoKCkge1xuICAgICAgdGhpcy5Qcm9tb1N0b3JlLmxvYWRQcm9tbyh0aGlzLm1lcmNoYW50X2lkKTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbIl9vcGVuQmxvY2siLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX2NyZWF0ZVZOb2RlIiwiX0ZyYWdtZW50IiwiX2NyZWF0ZUJsb2NrIiwiX3JlbmRlckxpc3QiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFpR0EsTUFBSyxZQUFVO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixPQUFPLENBQUMsYUFBYTtBQUFBLEVBQ3JCLFlBQVk7QUFBQSxJQUNWO0FBQUEsSUFDQTtBQUFBLEVBQ0Q7QUFBQSxFQUNELFFBQVE7QUFDTixVQUFNLGFBQWE7QUFDbkIsV0FBTyxFQUFFO0VBQ1Y7QUFBQSxFQUNELE9BQU87QUFDTCxXQUFPO0FBQUEsTUFDTCxPQUFPO0FBQUEsTUFDUCxnQkFBZ0I7QUFBQTtFQUVuQjtBQUFBLEVBQ0QsVUFBVTtBQVFSLFNBQUssV0FBVyxVQUFVLEtBQUssV0FBVztBQUFBLEVBQzNDO0FBQUEsRUFDRCxTQUFTO0FBQUEsSUFDUCxZQUFZLE9BQU87QUFDakIsV0FBSyxpQkFBaUI7QUFDdEIsV0FBSyxRQUFRO0FBQUEsSUFDZDtBQUFBLElBQ0QsVUFBVTtBQUNSLFdBQUssV0FBVyxVQUFVLEtBQUssV0FBVztBQUFBLElBQzNDO0FBQUEsRUFDRjtBQUNIOzs7RUFuSVMsT0FBTTs7QUE2QkEsTUFBQSxhQUFBLEVBQUEsT0FBTSx1QkFBc0I7QUFDMUIsTUFBQSxhQUFBLEVBQUEsT0FBTSxRQUFPO0FBY2IsTUFBQSxhQUFBLEVBQUEsT0FBTSxnQkFBZTtBQUNuQixNQUFBLGFBQUEsRUFBQSxPQUFNLGtEQUFpRDtBQUd2RCxNQUFBLGFBQUEsRUFBQSxPQUFNLHFCQUFvQjs7O0VBZW5DLE9BQU07O0FBV0MsTUFBQSxhQUFBLEVBQUEsT0FBTSxtQkFBa0I7QUFHeEIsTUFBQSxhQUFBLEVBQUEsT0FBTSw0QkFBMkI7QUFLckMsTUFBQSxjQUFBLEVBQUEsT0FBTSxtQkFBa0I7Ozs7O0lBbkZuQixPQUFBLFdBQVcsV0FDekJBLGFBQUFDLG1CQUdNLE9BSE4sWUFHTTtBQUFBLE1BRkpDLFlBQXlELFdBQUE7QUFBQSxRQUE3QyxRQUFPO0FBQUEsUUFBTyxRQUFBO0FBQUEsUUFBTyxPQUFNO0FBQUE7TUFDdkNBLFlBQXlELFdBQUE7QUFBQSxRQUE3QyxRQUFPO0FBQUEsUUFBTyxRQUFBO0FBQUEsUUFBTyxPQUFNO0FBQUE7d0JBRzNDRCxtQkFtRFdFLFVBQUEsRUFBQSxLQUFBLEVBQUEsR0FBQTtBQUFBLE1BakRELE9BQVUsV0FBQyxLQUFLLE9BQVcsNkJBRG5DQyxZQWlEUyxtQkFBQTtBQUFBO1FBL0NOLG1CQUFpQjtBQUFBLFFBQ2pCLGlCQUFlO0FBQUEsUUFDZixVQUFRLEtBQVE7QUFBQSxRQUNoQixlQUFhLEtBQWE7QUFBQSxRQUMzQixPQUFNO0FBQUE7eUJBR0osTUFBc0Q7QUFBQSw0QkFEeERILG1CQXdDZUUsVUFBQSxNQUFBRSxXQXZDWSxrQkFBVyxLQUFLLE9BQVcsY0FBQSxDQUE1QyxPQUFPLFVBQUs7Z0NBRHRCRCxZQXdDZSx5QkFBQTtBQUFBLGNBdENaLEtBQUs7QUFBQSxjQUNOLE9BQU07QUFBQTsrQkFFTixNQWtDUTtBQUFBLGdCQWxDUkYsWUFrQ1EsTUFBQTtBQUFBLDhCQWpDRyxLQUFRO0FBQUEsK0VBQVIsS0FBUSxXQUFBO0FBQUEsa0JBQ2pCLFlBQUE7QUFBQSxrQkFDQSxXQUFBO0FBQUEsa0JBQ0MsT0FBTyxLQUFBLEdBQUcsS0FBSyxPQUFJLFlBQUE7QUFBQSxrQkFDbkIsY0FBWSxLQUFBLEdBQUcsS0FBSyxPQUFJLFlBQUE7QUFBQSxrQkFDekIsT0FBTTtBQUFBLGtCQUNOLE1BQUs7QUFBQSxrQkFDSixTQUFLLFlBQUUsU0FBVyxZQUFDLEtBQUs7QUFBQTttQ0FFekIsTUF1Qk07QUFBQSxvQkF2Qk5JLGdCQXVCTSxPQXZCTixZQXVCTTtBQUFBLHNCQXRCSkEsZ0JBYU0sT0FiTixZQWFNO0FBQUEsd0JBWkpKLFlBV0UsTUFBQTtBQUFBLDBCQVZBLE9BQUE7QUFBQSwwQkFDQSxPQUFNO0FBQUEsMEJBQ0wsTUFBeUIsTUFBTSxjQUFVOzBCQUsxQyxZQUFBO0FBQUEsMEJBQ0EsTUFBSztBQUFBLDBCQUNMLE9BQU07QUFBQTs7c0JBR1ZJLGdCQU9NLE9BUE4sWUFPTTtBQUFBLHdCQU5KQSxnQkFFTSxPQUZOLFlBQ0tDLGdCQUFBLE1BQU0sS0FBSyxHQUFBLENBQUE7QUFBQSx3QkFFaEJELGdCQUVNLE9BRk4sWUFDS0MsZ0JBQUEsTUFBTSxRQUFRLEdBQUEsQ0FBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0lBUy9CTCxZQTZCVyxTQUFBO0FBQUEsa0JBN0JRLE1BQUs7QUFBQSxtRUFBTCxNQUFLLFFBQUE7QUFBQSxNQUFFLFVBQVM7QUFBQTt1QkFDakMsTUEyQlM7QUFBQSxRQTNCVEEsWUEyQlMsT0FBQSxNQUFBO0FBQUEsMkJBMUJQLE1BeUJpQjtBQUFBLFlBekJqQkEsWUF5QmlCLGNBQUEsRUFBQSxPQUFBLFVBekJJLEdBQUM7QUFBQSwrQkFDcEIsTUFvQk07QUFBQSxnQkFuQkUsT0FBQSxXQUFXLEtBQUssT0FBQSxhQUFhLE1BQWMsbUJBRG5ERixhQUFBQyxtQkFvQk0sT0FwQk4sWUFvQk07QUFBQSxrQkFoQkpDLFlBT0UsTUFBQTtBQUFBLG9CQU5BLE9BQUE7QUFBQSxvQkFDQSxPQUFNO0FBQUEsb0JBQ04sTUFBSztBQUFBLG9CQUNMLFlBQUE7QUFBQSxvQkFDQSxNQUFLO0FBQUEsb0JBQ0wsT0FBTTtBQUFBO2tCQUVSSSxnQkFPTSxPQUFBLE1BQUE7QUFBQSxvQkFOSkEsZ0JBRU0sT0FGTixZQUVNQyxnQkFERCxPQUFVLFdBQUMsS0FBSyxPQUFXLGFBQUUsTUFBYyxnQkFBRSxLQUFLLEdBQUEsQ0FBQTtBQUFBLG9CQUV2REQsZ0JBRU0sT0FGTixZQUVNQyxnQkFERCxPQUFVLFdBQUMsS0FBSyxPQUFXLGFBQUUsTUFBYyxnQkFBRSxTQUFTLEdBQUEsQ0FBQTtBQUFBOztnQkFJL0RELGdCQUVNLE9BRk4sYUFFTUMsZ0JBREQsT0FBVSxXQUFDLEtBQUssT0FBVyxhQUFFLE1BQWMsZ0JBQUUsUUFBUSxHQUFBLENBQUE7QUFBQTs7Ozs7Ozs7Ozs7OzsifQ==
