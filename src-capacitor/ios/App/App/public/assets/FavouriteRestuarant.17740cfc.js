import { _ as _export_sfc, l as defineAsyncComponent, u as __vitePreload, m as APIinterface, n as resolveComponent, p as openBlock, V as createElementBlock, U as createBaseVNode, f as createVNode, Z as toDisplayString, F as Fragment, X as renderList, aF as withModifiers, t as withCtx, a7 as normalizeClass, ac as QItem, ad as QItemSection, a6 as createTextVNode, q as createBlock, aA as createCommentVNode, a8 as QCard } from "./index.61ed5618.js";
import { Q as QInnerLoading } from "./QInnerLoading.abe2afe6.js";
import { Q as QImg } from "./QImg.6c27044c.js";
import { Q as QItemLabel } from "./QItemLabel.a9365c5b.js";
import { Q as QChip } from "./QChip.f183a4f1.js";
import { Q as QList } from "./QList.b69a7e5b.js";
const _sfc_main = {
  name: "FavouriteRestuarant",
  props: ["is_done"],
  data() {
    return {
      loading: true,
      data: [],
      estimation: [],
      services: []
    };
  },
  components: {
    FavsResto: defineAsyncComponent(() => __vitePreload(() => import("./FavsResto.c8d5167e.js"), true ? ["assets/FavsResto.c8d5167e.js","assets/index.61ed5618.js","assets/index.dbee30c0.css"] : void 0))
  },
  computed: {
    hasData() {
      if (this.data.length > 0) {
        return true;
      }
      return false;
    }
  },
  mounted() {
    this.saveStoreList();
  },
  watch: {
    is_done(newval, oldval) {
      this.saveStoreList();
    }
  },
  methods: {
    saveStoreList() {
      if (APIinterface.empty(this.is_done)) {
        this.loading = true;
      }
      APIinterface.saveStoreList().then((data) => {
        this.data = data.details.data;
        this.estimation = data.details.estimation;
        this.services = data.details.services;
      }).catch((error) => {
        this.data = [];
        this.estimation = [];
        this.services = [];
      }).then((data) => {
        this.loading = false;
        if (!APIinterface.empty(this.is_done)) {
          this.is_done();
        }
      });
    },
    afterSavefav(data, added) {
      data.saved_store = added;
    }
  }
};
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { class: "fit q-pa-xl" };
const _hoisted_3 = {
  key: 1,
  class: "flex flex-center q-pt-xl q-pb-xl"
};
const _hoisted_4 = { class: "text-h5 text-weight-bold line-normal" };
const _hoisted_5 = { class: "text-grey font12" };
const _hoisted_6 = {
  key: 2,
  class: "row items-center q-col-gutter-sm q-mb-sm"
};
const _hoisted_7 = ["onClick"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FavsResto = resolveComponent("FavsResto");
  return $data.loading ? (openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createVNode(QInnerLoading, {
        showing: true,
        color: "primary",
        size: "md",
        "label-class": "dark"
      })
    ])
  ])) : !$data.loading && !$options.hasData ? (openBlock(), createElementBlock("div", _hoisted_3, [
    createVNode(QImg, {
      src: "cuttery.png",
      fit: "fill",
      "spinner-color": "primary",
      style: { "height": "160px", "max-width": "150px" }
    }),
    createBaseVNode("div", _hoisted_4, toDisplayString(_ctx.$t("You don't have any save stores here!")), 1),
    createBaseVNode("p", _hoisted_5, toDisplayString(_ctx.$t("Let's change that!")), 1)
  ])) : (openBlock(), createElementBlock("div", _hoisted_6, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($data.data, (items) => {
      return openBlock(), createElementBlock("div", {
        class: "col-6 cursor-pointer",
        key: items.merchant_id,
        onClick: withModifiers(($event) => this.$router.push({
          name: "menu",
          params: {
            slug: items.restaurant_slug
          }
        }), ["stop"])
      }, [
        createVNode(QCard, {
          flat: "",
          class: "radius8 q-pa-sm rounded-borders border-greyx"
        }, {
          default: withCtx(() => [
            createVNode(QImg, {
              src: items.url_logo,
              style: { "height": "100px" },
              lazy: "",
              fit: "cover",
              class: normalizeClass(["radius8 q-mb-sm", { "light-dimmed": items.saved_store === false }])
            }, null, 8, ["src", "class"]),
            createVNode(QList, {
              dense: "",
              class: "qlist-small"
            }, {
              default: withCtx(() => [
                createVNode(QItem, null, {
                  default: withCtx(() => [
                    createVNode(QItemSection, null, {
                      default: withCtx(() => [
                        createVNode(QItemLabel, {
                          lines: "1",
                          class: normalizeClass([{ "text-grey": items.saved_store === false }, "font17"])
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(items.restaurant_name), 1)
                          ]),
                          _: 2
                        }, 1032, ["class"])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(QItemSection, { side: "" }, {
                      default: withCtx(() => [
                        createVNode(_component_FavsResto, {
                          ref_for: true,
                          ref: "favs",
                          data: items,
                          active: items.saved_store,
                          merchant_id: items.merchant_id,
                          layout: 2,
                          size: "xs",
                          onAfterSavefav: $options.afterSavefav
                        }, null, 8, ["data", "active", "merchant_id", "onAfterSavefav"])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024),
                createVNode(QItem, null, {
                  default: withCtx(() => [
                    items.cuisine_name ? (openBlock(), createBlock(QItemSection, { key: 0 }, {
                      default: withCtx(() => [
                        createVNode(QItemLabel, {
                          caption: "",
                          lines: "1",
                          class: normalizeClass(["text-body2", { "text-grey": items.saved_store === false }])
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(items.cuisine_name, (cuisine) => {
                              return openBlock(), createElementBlock("span", {
                                key: cuisine,
                                class: "q-mr-xs"
                              }, toDisplayString(cuisine.cuisine_name) + ",", 1);
                            }), 128))
                          ]),
                          _: 2
                        }, 1032, ["class"])
                      ]),
                      _: 2
                    }, 1024)) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1024),
                createVNode(QItem, null, {
                  default: withCtx(() => [
                    createVNode(QItemSection, null, {
                      default: withCtx(() => [
                        createVNode(QItemLabel, null, {
                          default: withCtx(() => [
                            createVNode(QChip, {
                              size: "sm",
                              color: "white",
                              "text-color": items.saved_store === false ? "grey" : "secondary",
                              icon: "star",
                              class: "no-padding transparent"
                            }, {
                              default: withCtx(() => [
                                createBaseVNode("span", {
                                  class: normalizeClass(["text-weight-medium text-dark", {
                                    "text-grey": items.saved_store === false,
                                    "text-white": _ctx.$q.dark.mode
                                  }])
                                }, toDisplayString(items.ratings.rating), 3)
                              ]),
                              _: 2
                            }, 1032, ["text-color"])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(QItemSection, { side: "" }, {
                      default: withCtx(() => [
                        createVNode(QItemLabel, null, {
                          default: withCtx(() => [
                            $data.estimation[items.merchant_id] ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                              $data.services[items.merchant_id] ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList($data.services[items.merchant_id], (service_name, index_service) => {
                                return openBlock(), createElementBlock(Fragment, null, [
                                  index_service <= 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                                    service_name == "delivery" ? (openBlock(), createBlock(QChip, {
                                      key: 0,
                                      size: "sm",
                                      icon: "fiber_manual_record",
                                      class: "no-padding transparent",
                                      "text-color": items.saved_store === false ? "grey" : "mygrey"
                                    }, {
                                      default: withCtx(() => [
                                        createBaseVNode("span", {
                                          class: normalizeClass(["text-weight-medium", {
                                            "text-grey300": _ctx.$q.dark.mode,
                                            "text-dark": !_ctx.$q.dark.mode
                                          }])
                                        }, [
                                          $data.estimation[items.merchant_id][service_name][items.charge_type] ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                                            createTextVNode(toDisplayString($data.estimation[items.merchant_id][service_name][items.charge_type].estimation) + " " + toDisplayString(_ctx.$t("min")), 1)
                                          ], 64)) : createCommentVNode("", true)
                                        ], 2)
                                      ]),
                                      _: 2
                                    }, 1032, ["text-color"])) : createCommentVNode("", true)
                                  ], 64)) : createCommentVNode("", true)
                                ], 64);
                              }), 256)) : createCommentVNode("", true)
                            ], 64)) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1024)
      ], 8, _hoisted_7);
    }), 128))
  ]));
}
var FavouriteRestuarant = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "FavouriteRestuarant.vue"]]);
export { FavouriteRestuarant as default };
//# sourceMappingURL=data:application/json;base64,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LE1BQUs7QUFBQSw4QkFDTCxPQUFNO0FBQUE7K0NBRU4sTUFPQztBQUFBLGdDQVBERCxnQkFPQztBQUFBLGtDQU5DLHVCQUFNLGdDQUE4QjtBQUFBLG9DQUNTLG1CQUFNLGdCQUFXO0FBQUEsa0RBQWdELEtBQUUsR0FBQyxLQUFLO0FBQUE7bURBSWxILE1BQU0sUUFBUSxNQUFNO0FBQUE7Ozs7Ozs7OztvQkFLaENDLFlBZ0RpQjtBQUFBLHVDQS9DZixNQThDZTtBQUFBLHdCQTlDZkEsWUE4Q2U7QUFBQSwyQ0E3Q2IsTUE0Q1c7QUFBQSw0QkE1Q0ssTUFBVSxXQUFDLE1BQU0sNkJBQWpDRixtQkE0Q1dLO0FBQUEsOEJBM0NPLE1BQVEsU0FBQyxNQUFNLGdCQUM3QkYsb0NBd0NXRSxpQ0F2QytCLE1BQVEsU0FBMEIsTUFBTSxjQUF4RSxlQUFjLGtCQUFhOztrQ0FJbkIsaUJBQWEsa0JBQTdCTCxtQkFrQ1dLO0FBQUEsb0NBL0JELGdCQUFZLDJCQURwQkksWUErQlM7QUFBQTtzQ0E3QlAsTUFBSztBQUFBLHNDQUNMLE1BQUs7QUFBQSxzQ0FDTCxPQUFNO0FBQUEsc0NBQ0wsY0FBeUMsTUFBTSxnQkFBVztBQUFBO3VEQUkzRCxNQXFCTztBQUFBLHdDQXJCUFIsZ0JBcUJPO0FBQUEsMENBcEJMLHVCQUFNLHNCQUFvQjtBQUFBLDREQUM4QixLQUFFLEdBQUMsS0FBSztBQUFBLDBEQUFrRCxLQUFFLEdBQUMsS0FBSztBQUFBOzswQ0FNakYsaUJBQVcsTUFBTSxhQUFhLGNBQWlELE1BQU0sNkJBRDlIRCxtQkFhV0s7QUFBQSw0Q0FMUEcsaURBQVcsTUFBTSxhQUFhLGNBQWlELE1BQU0sYUFBOEMsVUFBVSxJQUc3SSxNQUNGSixnQkFBRyxLQUFFO0FBQUEiLCJuYW1lcyI6WyJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9jcmVhdGVWTm9kZSIsIl9vcGVuQmxvY2siLCJfdG9EaXNwbGF5U3RyaW5nIiwiX0ZyYWdtZW50IiwiX3dpdGhNb2RpZmllcnMiLCJfbm9ybWFsaXplQ2xhc3MiLCJfY3JlYXRlVGV4dFZOb2RlIiwiX2NyZWF0ZUJsb2NrIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvRmF2b3VyaXRlUmVzdHVhcmFudC52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IHYtaWY9XCJsb2FkaW5nXCI+XG4gICAgPGRpdiBjbGFzcz1cImZpdCBxLXBhLXhsXCI+XG4gICAgICA8cS1pbm5lci1sb2FkaW5nXG4gICAgICAgIDpzaG93aW5nPVwidHJ1ZVwiXG4gICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgIGxhYmVsLWNsYXNzPVwiZGFya1wiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8dGVtcGxhdGUgdi1lbHNlLWlmPVwiIWxvYWRpbmcgJiYgIWhhc0RhdGFcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNlbnRlciBxLXB0LXhsIHEtcGIteGxcIj5cbiAgICAgIDxxLWltZ1xuICAgICAgICBzcmM9XCJjdXR0ZXJ5LnBuZ1wiXG4gICAgICAgIGZpdD1cImZpbGxcIlxuICAgICAgICBzcGlubmVyLWNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgIHN0eWxlPVwiaGVpZ2h0OiAxNjBweDsgbWF4LXdpZHRoOiAxNTBweFwiXG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDUgdGV4dC13ZWlnaHQtYm9sZCBsaW5lLW5vcm1hbFwiPlxuICAgICAgICB7eyAkdChcIllvdSBkb24ndCBoYXZlIGFueSBzYXZlIHN0b3JlcyBoZXJlIVwiKSB9fVxuICAgICAgPC9kaXY+XG4gICAgICA8cCBjbGFzcz1cInRleHQtZ3JleSBmb250MTJcIj57eyAkdChcIkxldCdzIGNoYW5nZSB0aGF0IVwiKSB9fTwvcD5cbiAgICA8L2Rpdj5cbiAgPC90ZW1wbGF0ZT5cblxuICA8ZGl2IHYtZWxzZSBjbGFzcz1cInJvdyBpdGVtcy1jZW50ZXIgcS1jb2wtZ3V0dGVyLXNtIHEtbWItc21cIj5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cImNvbC02IGN1cnNvci1wb2ludGVyXCJcbiAgICAgIHYtZm9yPVwiaXRlbXMgaW4gZGF0YVwiXG4gICAgICA6a2V5PVwiaXRlbXMubWVyY2hhbnRfaWRcIlxuICAgICAgQGNsaWNrLnN0b3A9XCJcbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xuICAgICAgICAgIG5hbWU6ICdtZW51JyxcbiAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIHNsdWc6IGl0ZW1zLnJlc3RhdXJhbnRfc2x1ZyxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgXCJcbiAgICA+XG4gICAgICA8cS1jYXJkIGZsYXQgY2xhc3M9XCJyYWRpdXM4IHEtcGEtc20gcm91bmRlZC1ib3JkZXJzIGJvcmRlci1ncmV5eFwiPlxuICAgICAgICA8cS1pbWdcbiAgICAgICAgICA6c3JjPVwiaXRlbXMudXJsX2xvZ29cIlxuICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiAxMDBweFwiXG4gICAgICAgICAgbGF6eVxuICAgICAgICAgIGZpdD1cImNvdmVyXCJcbiAgICAgICAgICBjbGFzcz1cInJhZGl1czggcS1tYi1zbVwiXG4gICAgICAgICAgOmNsYXNzPVwieyAnbGlnaHQtZGltbWVkJzogaXRlbXMuc2F2ZWRfc3RvcmUgPT09IGZhbHNlIH1cIlxuICAgICAgICAvPlxuICAgICAgICA8cS1saXN0IGRlbnNlIGNsYXNzPVwicWxpc3Qtc21hbGxcIj5cbiAgICAgICAgICA8cS1pdGVtPlxuICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsXG4gICAgICAgICAgICAgICAgbGluZXM9XCIxXCJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICd0ZXh0LWdyZXknOiBpdGVtcy5zYXZlZF9zdG9yZSA9PT0gZmFsc2UgfVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJmb250MTdcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3sgaXRlbXMucmVzdGF1cmFudF9uYW1lIH19XG4gICAgICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlPlxuICAgICAgICAgICAgICA8RmF2c1Jlc3RvXG4gICAgICAgICAgICAgICAgcmVmPVwiZmF2c1wiXG4gICAgICAgICAgICAgICAgOmRhdGE9XCJpdGVtc1wiXG4gICAgICAgICAgICAgICAgOmFjdGl2ZT1cIml0ZW1zLnNhdmVkX3N0b3JlXCJcbiAgICAgICAgICAgICAgICA6bWVyY2hhbnRfaWQ9XCJpdGVtcy5tZXJjaGFudF9pZFwiXG4gICAgICAgICAgICAgICAgOmxheW91dD1cIjJcIlxuICAgICAgICAgICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgICAgICAgICAgQGFmdGVyLXNhdmVmYXY9XCJhZnRlclNhdmVmYXZcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICA8cS1pdGVtPlxuICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHYtaWY9XCJpdGVtcy5jdWlzaW5lX25hbWVcIj5cbiAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbFxuICAgICAgICAgICAgICAgIGNhcHRpb25cbiAgICAgICAgICAgICAgICBsaW5lcz1cIjFcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1ib2R5MlwiXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwieyAndGV4dC1ncmV5JzogaXRlbXMuc2F2ZWRfc3RvcmUgPT09IGZhbHNlIH1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiY3Vpc2luZSBpbiBpdGVtcy5jdWlzaW5lX25hbWVcIiA6a2V5PVwiY3Vpc2luZVwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJxLW1yLXhzXCI+e3sgY3Vpc2luZS5jdWlzaW5lX25hbWUgfX0sPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICA8cS1pdGVtPlxuICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgIDxxLWNoaXBcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgIDp0ZXh0LWNvbG9yPVwiXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zLnNhdmVkX3N0b3JlID09PSBmYWxzZSA/ICdncmV5JyA6ICdzZWNvbmRhcnknXG4gICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgaWNvbj1cInN0YXJcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJuby1wYWRkaW5nIHRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtd2VpZ2h0LW1lZGl1bSB0ZXh0LWRhcmtcIlxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgJ3RleHQtZ3JleSc6IGl0ZW1zLnNhdmVkX3N0b3JlID09PSBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAndGV4dC13aGl0ZSc6ICRxLmRhcmsubW9kZSxcbiAgICAgICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgICAgICAgID57eyBpdGVtcy5yYXRpbmdzLnJhdGluZyB9fTwvc3BhblxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDwvcS1jaGlwPlxuICAgICAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZT5cbiAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImVzdGltYXRpb25baXRlbXMubWVyY2hhbnRfaWRdXCI+XG4gICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cInNlcnZpY2VzW2l0ZW1zLm1lcmNoYW50X2lkXVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIihzZXJ2aWNlX25hbWUsIGluZGV4X3NlcnZpY2UpIGluIHNlcnZpY2VzW1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMubWVyY2hhbnRfaWRcbiAgICAgICAgICAgICAgICAgICAgICBdXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiaW5kZXhfc2VydmljZSA8PSAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxxLWNoaXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cInNlcnZpY2VfbmFtZSA9PSAnZGVsaXZlcnknXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImZpYmVyX21hbnVhbF9yZWNvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm5vLXBhZGRpbmcgdHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6dGV4dC1jb2xvcj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zLnNhdmVkX3N0b3JlID09PSBmYWxzZSA/ICdncmV5JyA6ICdteWdyZXknXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LXdlaWdodC1tZWRpdW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWdyZXkzMDAnOiAkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1kYXJrJzogISRxLmRhcmsubW9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlc3RpbWF0aW9uW2l0ZW1zLm1lcmNoYW50X2lkXVtzZXJ2aWNlX25hbWVdW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zLmNoYXJnZV90eXBlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXN0aW1hdGlvbltpdGVtcy5tZXJjaGFudF9pZF1bc2VydmljZV9uYW1lXVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5jaGFyZ2VfdHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLmVzdGltYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAkdChcIm1pblwiKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1jaGlwPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgPC9xLWxpc3Q+XG4gICAgICA8L3EtY2FyZD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgZGVmaW5lQXN5bmNDb21wb25lbnQgfSBmcm9tIFwidnVlXCI7XG5pbXBvcnQgQVBJaW50ZXJmYWNlIGZyb20gXCJzcmMvYXBpL0FQSWludGVyZmFjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiRmF2b3VyaXRlUmVzdHVhcmFudFwiLFxuICBwcm9wczogW1wiaXNfZG9uZVwiXSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgIGRhdGE6IFtdLFxuICAgICAgZXN0aW1hdGlvbjogW10sXG4gICAgICBzZXJ2aWNlczogW10sXG4gICAgfTtcbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIEZhdnNSZXN0bzogZGVmaW5lQXN5bmNDb21wb25lbnQoKCkgPT4gaW1wb3J0KFwiY29tcG9uZW50cy9GYXZzUmVzdG8udnVlXCIpKSxcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBoYXNEYXRhKCkge1xuICAgICAgaWYgKHRoaXMuZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5zYXZlU3RvcmVMaXN0KCk7XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgaXNfZG9uZShuZXd2YWwsIG9sZHZhbCkge1xuICAgICAgdGhpcy5zYXZlU3RvcmVMaXN0KCk7XG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHNhdmVTdG9yZUxpc3QoKSB7XG4gICAgICBpZiAoQVBJaW50ZXJmYWNlLmVtcHR5KHRoaXMuaXNfZG9uZSkpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIEFQSWludGVyZmFjZS5zYXZlU3RvcmVMaXN0KClcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmRhdGEgPSBkYXRhLmRldGFpbHMuZGF0YTtcbiAgICAgICAgICB0aGlzLmVzdGltYXRpb24gPSBkYXRhLmRldGFpbHMuZXN0aW1hdGlvbjtcbiAgICAgICAgICB0aGlzLnNlcnZpY2VzID0gZGF0YS5kZXRhaWxzLnNlcnZpY2VzO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5kYXRhID0gW107XG4gICAgICAgICAgdGhpcy5lc3RpbWF0aW9uID0gW107XG4gICAgICAgICAgdGhpcy5zZXJ2aWNlcyA9IFtdO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIGlmICghQVBJaW50ZXJmYWNlLmVtcHR5KHRoaXMuaXNfZG9uZSkpIHtcbiAgICAgICAgICAgIHRoaXMuaXNfZG9uZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBhZnRlclNhdmVmYXYoZGF0YSwgYWRkZWQpIHtcbiAgICAgIGRhdGEuc2F2ZWRfc3RvcmUgPSBhZGRlZDtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuIl0sImZpbGUiOiJhc3NldHMvRmF2b3VyaXRlUmVzdHVhcmFudC4xNzc0MGNmYy5qcyJ9
