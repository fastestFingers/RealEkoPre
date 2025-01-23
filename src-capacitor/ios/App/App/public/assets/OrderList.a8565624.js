import { _ as _export_sfc, l as defineAsyncComponent, m as APIinterface, n as resolveComponent, p as openBlock, V as createElementBlock, f as createVNode, t as withCtx, aB as QDialog, F as Fragment, a7 as normalizeClass, Y as QBtn, a6 as createTextVNode, Z as toDisplayString, q as createBlock, U as createBaseVNode, aA as createCommentVNode, X as renderList, a8 as QCard, a9 as QCardSection, aY as QInput, u as __vitePreload, aF as withModifiers, b4 as normalizeStyle, b2 as QSeparator, at as QIcon, ac as QItem, ad as QItemSection } from "./index.61ed5618.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QChip } from "./QChip.f183a4f1.js";
import { Q as QItemLabel } from "./QItemLabel.a9365c5b.js";
import { Q as QRating } from "./QRating.f65cc24e.js";
import { Q as QList } from "./QList.b69a7e5b.js";
import { Q as QInnerLoading } from "./QInnerLoading.abe2afe6.js";
import { Q as QSpinnerDots } from "./QSpinnerDots.a9d9851d.js";
import { Q as QInfiniteScroll } from "./QInfiniteScroll.3e160277.js";
import { Q as QPageScroller } from "./QPageScroller.2c709c91.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import { Q as QPullToRefresh } from "./QPullToRefresh.3d10c02d.js";
import { Q as QForm } from "./QForm.7ded9d38.js";
import { S as Swiper, a as SwiperSlide } from "./swiper-slide.8a0c58df.js";
/* empty css                     */import "./QResizeObserver.d08dce3c.js";
import "./format.7f7370d3.js";
import "./use-page-sticky.447afe02.js";
import "./touch.96e0ae37.js";
import "./selection.50b4cb0c.js";
var OrderList_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  name: "OrderList",
  components: {
    Swiper,
    SwiperSlide,
    OrderPreview: defineAsyncComponent(
      () => __vitePreload(() => import("./OrderPreview.185825cf.js"), true ? ["assets/OrderPreview.185825cf.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QToolbarTitle.03eaf2d6.js","assets/QSpace.f164c087.js","assets/QToolbar.c8fc6962.js","assets/QImg.6c27044c.js","assets/QItemLabel.a9365c5b.js","assets/QList.b69a7e5b.js"] : void 0)
    )
  },
  data() {
    return {
      q: "",
      data: [],
      loading: false,
      load_more: false,
      page: 0,
      merchants: [],
      services: [],
      payment_list: [],
      payment_status: [],
      status_list: [],
      order_tab: "all",
      modal_search: false,
      is_search: false,
      is_refresh: void 0,
      order_items: [],
      items: {},
      status_allowed_review: [],
      reviews: [],
      rate_value: [],
      orderTabs: [
        {
          label: this.$t("All"),
          value: "all"
        },
        {
          label: this.$t("Active"),
          value: "active"
        },
        {
          label: this.$t("Past Order"),
          value: "past_order"
        },
        {
          label: this.$t("Cancel Order"),
          value: "cancel_order"
        }
      ]
    };
  },
  watch: {
    order_tab(newval, oldval) {
      this.resetPage();
    }
  },
  computed: {
    hasData() {
      if (this.data.length > 0) {
        return true;
      }
      return false;
    },
    NodataMessage() {
      if (this.is_search) {
        return "No results found";
      } else {
        if (this.order_tab == "all") {
          return "You don't have any orders here!";
        } else {
          return "No results";
        }
      }
    },
    NodataMessage2() {
      if (this.is_search) {
        return "Sorry, we couldn't find any results";
      } else {
        if (this.order_tab == "all") {
          return "Let's change that";
        } else {
          return "no current order with this status";
        }
      }
    }
  },
  methods: {
    refresh(done) {
      this.resetPage();
      this.is_refresh = done;
    },
    orderHistory(index, done) {
      this.loading = true;
      this.page = index;
      APIinterface.fetchDataByTokenPost(
        "orderHistory",
        "page=" + index + "&q=" + this.q + "&order_tab=" + this.order_tab
      ).then((data) => {
        if (data.details.show_next_page == false && index > 1) {
          this.$refs.nscroll.stop();
        } else {
          this.data.push(data.details.data.data);
          Object.entries(data.details.data.merchants).forEach(
            ([key, merchant]) => {
              this.merchants[key] = merchant;
            }
          );
          this.services = data.details.data.services;
          this.payment_list = data.details.payment_list;
          this.status_list = data.details.data.status;
          this.payment_status = data.details.payment_status;
          this.status_allowed_review = data.details.data.status_allowed_review;
          this.reviews = data.details.data.reviews;
          Object.entries(data.details.data.items2).forEach(
            ([item_id, food]) => {
              this.items[item_id] = food;
            }
          );
        }
      }).catch((error) => {
        if (this.$refs.nscroll) {
          this.$refs.nscroll.stop();
        }
      }).then((data) => {
        this.loading = false;
        done();
        if (!APIinterface.empty(this.is_refresh)) {
          this.is_refresh();
        }
      });
    },
    onSubmit() {
      console.log("onSubmit");
      this.modal_search = false;
      this.is_search = true;
      this.resetPagination();
    },
    resetPage() {
      this.q = "";
      this.resetPagination();
      this.is_search = false;
    },
    resetPagination() {
      this.page = 0;
      this.data = [];
      this.services = [];
      this.payment_list = [];
      this.status_list = [];
      this.$refs.nscroll.reset();
      this.$refs.nscroll.resume();
      this.$refs.nscroll.trigger();
    },
    showQuickDetails(data) {
      this.order_items = data;
      this.$refs.OrderPreview.dialog = !this.$refs.OrderPreview.dialog;
    },
    setRateValue(data, order_uuid, order_id) {
      this.$router.push({
        path: "/order/write-review",
        query: {
          order_uuid,
          rate: data,
          order_id,
          back_url: "/account/allorder"
        }
      });
    }
  }
};
const _hoisted_1 = { class: "q-pl-md q-pr-md text-center q-pt-sm" };
const _hoisted_2 = {
  key: 0,
  class: "text-h5 text-weight-bold"
};
const _hoisted_3 = {
  key: 0,
  class: "flex flex-center",
  style: { "min-height": "300px" }
};
const _hoisted_4 = { class: "text-center full-width" };
const _hoisted_5 = { class: "text-h5 text-weight-bold" };
const _hoisted_6 = { class: "text-grey font12" };
const _hoisted_7 = { class: "row justify-between items-center" };
const _hoisted_8 = { class: "font13" };
const _hoisted_9 = { class: "text-secondary q-ml-sm text-weight-bold" };
const _hoisted_10 = { class: "row justify-between items-center" };
const _hoisted_11 = {
  key: 0,
  class: "font13"
};
const _hoisted_12 = { class: "text-weight-bold font13" };
const _hoisted_13 = { class: "row justify-between items-center" };
const _hoisted_14 = { class: "font13" };
const _hoisted_15 = {
  key: 0,
  class: "font12"
};
const _hoisted_16 = { class: "row items-center" };
const _hoisted_17 = {
  key: 0,
  class: "q-pa-sm flex flex-center text-caption text-grey"
};
const _hoisted_18 = { class: "text-weight-bold" };
const _hoisted_19 = {
  key: 1,
  class: "row justify-center absolute-bottom"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_swiper = resolveComponent("swiper");
  const _component_OrderPreview = resolveComponent("OrderPreview");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(QPullToRefresh, { onRefresh: $options.refresh }, {
      default: withCtx(() => [
        createVNode(QHeader, {
          reveal: "",
          "reveal-offset": "10",
          class: normalizeClass({
            "bg-mydark text-white": _ctx.$q.dark.mode,
            "bg-grey-1 text-black": !_ctx.$q.dark.mode
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
                    createTextVNode(toDisplayString(_ctx.$t("Orders")), 1)
                  ]),
                  _: 1
                }),
                $data.is_search ? (openBlock(), createBlock(QBtn, {
                  key: 0,
                  flat: "",
                  round: "",
                  dense: "",
                  icon: "close",
                  onClick: $options.resetPage
                }, null, 8, ["onClick"])) : (openBlock(), createBlock(QBtn, {
                  key: 1,
                  onClick: _cache[1] || (_cache[1] = ($event) => $data.modal_search = !$data.modal_search),
                  flat: "",
                  round: "",
                  dense: "",
                  icon: "search"
                }))
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["class"]),
        createVNode(QPage, {
          class: normalizeClass({
            "bg-mydark": _ctx.$q.dark.mode,
            "bg-grey-1": !_ctx.$q.dark.mode
          })
        }, {
          default: withCtx(() => [
            createVNode(QInfiniteScroll, {
              ref: "nscroll",
              onLoad: $options.orderHistory,
              offset: 250
            }, {
              loading: withCtx(() => [
                $data.page <= 1 ? (openBlock(), createBlock(QInnerLoading, {
                  key: 0,
                  showing: true,
                  color: "primary",
                  size: "md",
                  "label-class": "dark",
                  class: "transparent"
                })) : (openBlock(), createElementBlock("div", _hoisted_19, [
                  createVNode(QSpinnerDots, {
                    color: "secondary",
                    size: "40px"
                  })
                ]))
              ]),
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_1, [
                  $data.is_search ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    $options.hasData ? (openBlock(), createElementBlock("div", _hoisted_2, toDisplayString(_ctx.$t("Search result")), 1)) : createCommentVNode("", true)
                  ], 64)) : (openBlock(), createBlock(_component_swiper, {
                    key: 1,
                    slidesPerView: 2.3,
                    spaceBetween: 10,
                    class: "q-mb-md"
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList($data.orderTabs, (items) => {
                        return openBlock(), createBlock(_component_swiper_slide, {
                          key: items,
                          class: "row"
                        }, {
                          default: withCtx(() => [
                            createVNode(QBtn, {
                              unelevated: "",
                              "no-caps": "",
                              class: "radius8 fit",
                              size: "md",
                              label: items.label,
                              onClick: ($event) => $data.order_tab = items.value,
                              color: $data.order_tab == items.value ? "primary" : _ctx.$q.dark.mode ? "grey600" : "mygrey",
                              "text-color": $data.order_tab == items.value ? "white" : _ctx.$q.dark.mode ? "grey300" : "dark"
                            }, null, 8, ["label", "onClick", "color", "text-color"])
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["slidesPerView"]))
                ]),
                !$options.hasData && !$data.loading ? (openBlock(), createElementBlock("div", _hoisted_3, [
                  createBaseVNode("div", _hoisted_4, [
                    createBaseVNode("div", _hoisted_5, toDisplayString($options.NodataMessage), 1),
                    createBaseVNode("p", _hoisted_6, toDisplayString($options.NodataMessage2), 1)
                  ])
                ])) : createCommentVNode("", true),
                createVNode(QList, null, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList($data.data, (datas) => {
                      return openBlock(), createElementBlock(Fragment, { key: datas }, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(datas, (order) => {
                          return openBlock(), createBlock(QItem, {
                            key: order.order_id_raw,
                            clickable: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(QCard, {
                                flat: "",
                                class: "fit radius8"
                              }, {
                                default: withCtx(() => [
                                  createVNode(QCardSection, {
                                    class: "q-pl-md q-pr-md q-pt-sm q-pb-sm",
                                    onClick: withModifiers(($event) => $options.showQuickDetails(order), ["stop"])
                                  }, {
                                    default: withCtx(() => [
                                      createBaseVNode("div", _hoisted_7, [
                                        createVNode(QChip, {
                                          icon: "las la-calendar",
                                          color: _ctx.$q.dark.mode ? "grey600" : "white",
                                          "text-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                                          size: "sm",
                                          class: normalizeClass({
                                            "": _ctx.$q.dark.mode,
                                            "q-pl-none": !_ctx.$q.dark.mode
                                          })
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(order.date_created), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["color", "text-color", "class"]),
                                        $data.status_list[order.status] ? (openBlock(), createBlock(QChip, {
                                          key: 0,
                                          color: "mygrey",
                                          "text-color": "dark",
                                          size: "sm",
                                          style: normalizeStyle(`color:${$data.status_list[order.status].font_color_hex} !important; background-color:${$data.status_list[order.status].background_color_hex} !important; `)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString($data.status_list[order.status].status), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["style"])) : createCommentVNode("", true)
                                      ]),
                                      createBaseVNode("div", _hoisted_8, [
                                        createTextVNode(toDisplayString(_ctx.$t("Order ID")), 1),
                                        createBaseVNode("span", _hoisted_9, "#" + toDisplayString(order.order_id_raw), 1)
                                      ]),
                                      createBaseVNode("div", _hoisted_10, [
                                        $data.merchants[order.merchant_id] ? (openBlock(), createElementBlock("div", _hoisted_11, toDisplayString($data.merchants[order.merchant_id].restaurant_name), 1)) : createCommentVNode("", true),
                                        createBaseVNode("div", _hoisted_12, toDisplayString(order.total), 1)
                                      ]),
                                      createBaseVNode("div", _hoisted_13, [
                                        createBaseVNode("div", _hoisted_14, toDisplayString(_ctx.$t("Payment")), 1),
                                        $data.payment_list[order.payment_code] ? (openBlock(), createElementBlock("div", _hoisted_15, toDisplayString($data.payment_list[order.payment_code]), 1)) : createCommentVNode("", true)
                                      ]),
                                      createBaseVNode("div", _hoisted_16, [
                                        createVNode(QChip, {
                                          color: _ctx.$q.dark.mode ? "grey600" : "mygrey",
                                          "text-color": _ctx.$q.dark.mode ? "grey300" : "dark",
                                          size: "sm"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(order.total_items), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["color", "text-color"]),
                                        $data.services[order.service_code] ? (openBlock(), createBlock(QChip, {
                                          key: 0,
                                          color: _ctx.$q.dark.mode ? "grey600" : "mygrey",
                                          "text-color": _ctx.$q.dark.mode ? "grey300" : "dark",
                                          size: "sm"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString($data.services[order.service_code].service_name), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["color", "text-color"])) : createCommentVNode("", true),
                                        $data.payment_status[order.payment_status] ? (openBlock(), createBlock(QChip, {
                                          key: 1,
                                          color: _ctx.$q.dark.mode ? "grey600" : "mygrey",
                                          "text-color": _ctx.$q.dark.mode ? "grey300" : "dark",
                                          size: "sm"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString($data.payment_status[order.payment_status].title), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["color", "text-color"])) : createCommentVNode("", true)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"]),
                                  $data.status_allowed_review.includes(order.status) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                                    createVNode(QSeparator),
                                    $data.reviews[order.order_id_raw] ? (openBlock(), createElementBlock("div", _hoisted_17, [
                                      createTextVNode(toDisplayString(_ctx.$t("You have rated this")) + " ", 1),
                                      createVNode(QIcon, {
                                        name: "star",
                                        size: "2em",
                                        color: "yellow-9"
                                      }),
                                      createBaseVNode("span", _hoisted_18, toDisplayString($data.reviews[order.order_id_raw]), 1)
                                    ])) : (openBlock(), createBlock(QItem, { key: 1 }, {
                                      default: withCtx(() => [
                                        createVNode(QItemSection, { avatar: "" }, {
                                          default: withCtx(() => [
                                            createVNode(QItemLabel, { caption: "" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(_ctx.$t("Tap to rate")), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(QItemSection, null, {
                                          default: withCtx(() => [
                                            createVNode(QRating, {
                                              "model-value": $data.rate_value[order.order_uuid],
                                              size: "2em",
                                              max: 5,
                                              color: "grey-5",
                                              "color-selected": "warning",
                                              class: "q-mb-xs",
                                              "onUpdate:modelValue": (v) => $options.setRateValue(
                                                v,
                                                order.order_uuid,
                                                order.order_id_raw
                                              )
                                            }, null, 8, ["model-value", "onUpdate:modelValue"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(QItemSection, { side: "" })
                                      ]),
                                      _: 2
                                    }, 1024))
                                  ], 64)) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ], 64);
                    }), 128))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["onLoad"]),
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
        }, 8, ["class"])
      ]),
      _: 1
    }, 8, ["onRefresh"]),
    createVNode(QDialog, {
      modelValue: $data.modal_search,
      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.modal_search = $event),
      position: "top",
      "transition-show": "fade",
      "transition-hide": "fade"
    }, {
      default: withCtx(() => [
        createVNode(QCard, {
          class: normalizeClass(["no-shadow q-pt-md q-pb-sm", {
            "text-dark": _ctx.$q.dark.mode,
            "bg-white": !_ctx.$q.dark.mode
          }])
        }, {
          default: withCtx(() => [
            createVNode(QCardSection, null, {
              default: withCtx(() => [
                createVNode(QForm, { onSubmit: $options.onSubmit }, {
                  default: withCtx(() => [
                    createVNode(QInput, {
                      modelValue: $data.q,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.q = $event),
                      label: _ctx.$t("Search order"),
                      outlined: "",
                      "lazy-rules": "",
                      "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
                      "label-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                      borderless: "",
                      class: "input-borderless cursor-pointer"
                    }, {
                      append: withCtx(() => [
                        createVNode(QBtn, {
                          onClick: $options.onSubmit,
                          round: "",
                          color: "primary",
                          flat: "",
                          icon: "eva-search-outline"
                        }, null, 8, ["onClick"])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "label", "bg-color", "label-color"])
                  ]),
                  _: 1
                }, 8, ["onSubmit"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["class"])
      ]),
      _: 1
    }, 8, ["modelValue"]),
    createVNode(_component_OrderPreview, {
      ref: "OrderPreview",
      data: $data.order_items,
      items_details: $data.items
    }, null, 8, ["data", "items_details"])
  ], 64);
}
var OrderList = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "OrderList.vue"]]);
export { OrderList as default };
//# sourceMappingURL=data:application/json;base64,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QUNBLE9BQU07QUFBQSwwQkFDTjtBQUFBLDBCQUNBLE1BQUs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztJQVNuQkEsWUFJZ0I7QUFBQSxNQUhkLEtBQUk7QUFBQSxNQUNILE1BQU0sTUFBVztBQUFBLE1BQ2pCLGVBQWUsTUFBSztBQUFBIiwibmFtZXMiOlsiX2NyZWF0ZVZOb2RlIiwiX25vcm1hbGl6ZUNsYXNzIiwiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX0ZyYWdtZW50IiwiX3RvRGlzcGxheVN0cmluZyIsIl9jcmVhdGVCbG9jayIsIl9jcmVhdGVUZXh0Vk5vZGUiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvT3JkZXIvT3JkZXJMaXN0LnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLXB1bGwtdG8tcmVmcmVzaCBAcmVmcmVzaD1cInJlZnJlc2hcIj5cbiAgICA8cS1oZWFkZXJcbiAgICAgIHJldmVhbFxuICAgICAgcmV2ZWFsLW9mZnNldD1cIjEwXCJcbiAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgJ2JnLW15ZGFyayB0ZXh0LXdoaXRlJzogJHEuZGFyay5tb2RlLFxuICAgICAgICAnYmctZ3JleS0xIHRleHQtYmxhY2snOiAhJHEuZGFyay5tb2RlLFxuICAgICAgfVwiXG4gICAgPlxuICAgICAgPHEtdG9vbGJhcj5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgQGNsaWNrPVwiJHJvdXRlci5iYWNrKClcIlxuICAgICAgICAgIGZsYXRcbiAgICAgICAgICByb3VuZFxuICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgaWNvbj1cImxhcyBsYS1hbmdsZS1sZWZ0XCJcbiAgICAgICAgICBjbGFzcz1cInEtbXItc21cIlxuICAgICAgICAgIDpjb2xvcj1cIiRxLmRhcmsubW9kZSA/ICd3aGl0ZScgOiAnZGFyaydcIlxuICAgICAgICAvPlxuICAgICAgICA8cS10b29sYmFyLXRpdGxlIGNsYXNzPVwidGV4dC13ZWlnaHQtYm9sZFwiPnt7XG4gICAgICAgICAgJHQoXCJPcmRlcnNcIilcbiAgICAgICAgfX08L3EtdG9vbGJhci10aXRsZT5cblxuICAgICAgICA8cS1idG5cbiAgICAgICAgICB2LWlmPVwiaXNfc2VhcmNoXCJcbiAgICAgICAgICBmbGF0XG4gICAgICAgICAgcm91bmRcbiAgICAgICAgICBkZW5zZVxuICAgICAgICAgIGljb249XCJjbG9zZVwiXG4gICAgICAgICAgQGNsaWNrPVwicmVzZXRQYWdlXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8cS1idG5cbiAgICAgICAgICB2LWVsc2VcbiAgICAgICAgICBAY2xpY2s9XCJtb2RhbF9zZWFyY2ggPSAhbW9kYWxfc2VhcmNoXCJcbiAgICAgICAgICBmbGF0XG4gICAgICAgICAgcm91bmRcbiAgICAgICAgICBkZW5zZVxuICAgICAgICAgIGljb249XCJzZWFyY2hcIlxuICAgICAgICAvPlxuICAgICAgPC9xLXRvb2xiYXI+XG4gICAgPC9xLWhlYWRlcj5cbiAgICA8cS1wYWdlXG4gICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICdiZy1teWRhcmsnOiAkcS5kYXJrLm1vZGUsXG4gICAgICAgICdiZy1ncmV5LTEnOiAhJHEuZGFyay5tb2RlLFxuICAgICAgfVwiXG4gICAgPlxuICAgICAgPHEtaW5maW5pdGUtc2Nyb2xsIHJlZj1cIm5zY3JvbGxcIiBAbG9hZD1cIm9yZGVySGlzdG9yeVwiIDpvZmZzZXQ9XCIyNTBcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInEtcGwtbWQgcS1wci1tZCB0ZXh0LWNlbnRlciBxLXB0LXNtXCI+XG4gICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJpc19zZWFyY2hcIj5cbiAgICAgICAgICAgIDxkaXYgdi1pZj1cImhhc0RhdGFcIiBjbGFzcz1cInRleHQtaDUgdGV4dC13ZWlnaHQtYm9sZFwiPlxuICAgICAgICAgICAgICB7eyAkdChcIlNlYXJjaCByZXN1bHRcIikgfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgICAgIDxzd2lwZXIgOnNsaWRlc1BlclZpZXc9XCIyLjNcIiA6c3BhY2VCZXR3ZWVuPVwiMTBcIiBjbGFzcz1cInEtbWItbWRcIj5cbiAgICAgICAgICAgICAgPHN3aXBlci1zbGlkZSB2LWZvcj1cIml0ZW1zIGluIG9yZGVyVGFic1wiIDprZXk9XCJpdGVtc1wiIGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cInJhZGl1czggZml0XCJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgICAgICA6bGFiZWw9XCJpdGVtcy5sYWJlbFwiXG4gICAgICAgICAgICAgICAgICBAY2xpY2s9XCJvcmRlcl90YWIgPSBpdGVtcy52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICA6Y29sb3I9XCJcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJfdGFiID09IGl0ZW1zLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgPyAncHJpbWFyeSdcbiAgICAgICAgICAgICAgICAgICAgICA6ICRxLmRhcmsubW9kZVxuICAgICAgICAgICAgICAgICAgICAgID8gJ2dyZXk2MDAnXG4gICAgICAgICAgICAgICAgICAgICAgOiAnbXlncmV5J1xuICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgIDp0ZXh0LWNvbG9yPVwiXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyX3RhYiA9PSBpdGVtcy52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgID8gJ3doaXRlJ1xuICAgICAgICAgICAgICAgICAgICAgIDogJHEuZGFyay5tb2RlXG4gICAgICAgICAgICAgICAgICAgICAgPyAnZ3JleTMwMCdcbiAgICAgICAgICAgICAgICAgICAgICA6ICdkYXJrJ1xuICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPC9xLWJ0bj5cbiAgICAgICAgICAgICAgPC9zd2lwZXItc2xpZGU+XG4gICAgICAgICAgICA8L3N3aXBlcj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2XG4gICAgICAgICAgdi1pZj1cIiFoYXNEYXRhICYmICFsb2FkaW5nXCJcbiAgICAgICAgICBjbGFzcz1cImZsZXggZmxleC1jZW50ZXJcIlxuICAgICAgICAgIHN0eWxlPVwibWluLWhlaWdodDogMzAwcHhcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIGZ1bGwtd2lkdGhcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg1IHRleHQtd2VpZ2h0LWJvbGRcIj5cbiAgICAgICAgICAgICAge3sgTm9kYXRhTWVzc2FnZSB9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtZ3JleSBmb250MTJcIj57eyBOb2RhdGFNZXNzYWdlMiB9fTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHEtbGlzdD5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJkYXRhcyBpbiBkYXRhXCIgOmtleT1cImRhdGFzXCI+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJvcmRlciBpbiBkYXRhc1wiIDprZXk9XCJvcmRlci5vcmRlcl9pZF9yYXdcIj5cbiAgICAgICAgICAgICAgPHEtaXRlbSBjbGlja2FibGU+XG4gICAgICAgICAgICAgICAgPHEtY2FyZCBmbGF0IGNsYXNzPVwiZml0IHJhZGl1czhcIj5cbiAgICAgICAgICAgICAgICAgIDxxLWNhcmQtc2VjdGlvblxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInEtcGwtbWQgcS1wci1tZCBxLXB0LXNtIHEtcGItc21cIlxuICAgICAgICAgICAgICAgICAgICBAY2xpY2suc3RvcD1cInNob3dRdWlja0RldGFpbHMob3JkZXIpXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtY2hpcFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImxhcyBsYS1jYWxlbmRhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6Y29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTYwMCcgOiAnd2hpdGUnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp0ZXh0LWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXkzMDAnIDogJ2dyZXknXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICcnOiAkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdxLXBsLW5vbmUnOiAhJHEuZGFyay5tb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+e3sgb3JkZXIuZGF0ZV9jcmVhdGVkIH19PC9xLWNoaXBcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtY2hpcFxuICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cInN0YXR1c19saXN0W29yZGVyLnN0YXR1c11cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJteWdyZXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1jb2xvcj1cImRhcmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpzdHlsZT1cImBjb2xvcjoke1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNfbGlzdFtvcmRlci5zdGF0dXNdLmZvbnRfY29sb3JfaGV4XG4gICAgICAgICAgICAgICAgICAgICAgICB9ICFpbXBvcnRhbnQ7IGJhY2tncm91bmQtY29sb3I6JHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzX2xpc3Rbb3JkZXIuc3RhdHVzXS5iYWNrZ3JvdW5kX2NvbG9yX2hleFxuICAgICAgICAgICAgICAgICAgICAgICAgfSAhaW1wb3J0YW50OyBgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID57eyBzdGF0dXNfbGlzdFtvcmRlci5zdGF0dXNdLnN0YXR1cyB9fTwvcS1jaGlwXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udDEzXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3sgJHQoXCJPcmRlciBJRFwiKVxuICAgICAgICAgICAgICAgICAgICAgIH19PHNwYW4gY2xhc3M9XCJ0ZXh0LXNlY29uZGFyeSBxLW1sLXNtIHRleHQtd2VpZ2h0LWJvbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPiN7eyBvcmRlci5vcmRlcl9pZF9yYXcgfX08L3NwYW5cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250MTNcIiB2LWlmPVwibWVyY2hhbnRzW29yZGVyLm1lcmNoYW50X2lkXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgbWVyY2hhbnRzW29yZGVyLm1lcmNoYW50X2lkXS5yZXN0YXVyYW50X25hbWUgfX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC13ZWlnaHQtYm9sZCBmb250MTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IG9yZGVyLnRvdGFsIH19XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udDEzXCI+e3sgJHQoXCJQYXltZW50XCIpIH19PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb250MTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cInBheW1lbnRfbGlzdFtvcmRlci5wYXltZW50X2NvZGVdXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBwYXltZW50X2xpc3Rbb3JkZXIucGF5bWVudF9jb2RlXSB9fVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWNoaXBcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5NjAwJyA6ICdteWdyZXknXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp0ZXh0LWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXkzMDAnIDogJ2RhcmsnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+e3sgb3JkZXIudG90YWxfaXRlbXMgfX08L3EtY2hpcFxuICAgICAgICAgICAgICAgICAgICAgID5cblxuICAgICAgICAgICAgICAgICAgICAgIDxxLWNoaXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJzZXJ2aWNlc1tvcmRlci5zZXJ2aWNlX2NvZGVdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5NjAwJyA6ICdteWdyZXknXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp0ZXh0LWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXkzMDAnIDogJ2RhcmsnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+e3sgc2VydmljZXNbb3JkZXIuc2VydmljZV9jb2RlXS5zZXJ2aWNlX25hbWUgfX08L3EtY2hpcFxuICAgICAgICAgICAgICAgICAgICAgID5cblxuICAgICAgICAgICAgICAgICAgICAgIDxxLWNoaXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJwYXltZW50X3N0YXR1c1tvcmRlci5wYXltZW50X3N0YXR1c11cIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXk2MDAnIDogJ215Z3JleSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnRleHQtY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTMwMCcgOiAnZGFyaydcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID57e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50X3N0YXR1c1tvcmRlci5wYXltZW50X3N0YXR1c10udGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PC9xLWNoaXBcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cblxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJzdGF0dXNfYWxsb3dlZF9yZXZpZXcuaW5jbHVkZXMob3JkZXIuc3RhdHVzKVwiPlxuICAgICAgICAgICAgICAgICAgICA8cS1zZXBhcmF0b3I+PC9xLXNlcGFyYXRvcj5cbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJyZXZpZXdzW29yZGVyLm9yZGVyX2lkX3Jhd11cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInEtcGEtc20gZmxleCBmbGV4LWNlbnRlciB0ZXh0LWNhcHRpb24gdGV4dC1ncmV5XCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyAkdChcIllvdSBoYXZlIHJhdGVkIHRoaXNcIikgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxxLWljb24gbmFtZT1cInN0YXJcIiBzaXplPVwiMmVtXCIgY29sb3I9XCJ5ZWxsb3ctOVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGRcIj57e1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXZpZXdzW29yZGVyLm9yZGVyX2lkX3Jhd11cbiAgICAgICAgICAgICAgICAgICAgICAgIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24+e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdChcIlRhcCB0byByYXRlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1yYXRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bW9kZWwtdmFsdWU9XCJyYXRlX3ZhbHVlW29yZGVyLm9yZGVyX3V1aWRdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiMmVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bWF4PVwiNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJncmV5LTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yLXNlbGVjdGVkPVwid2FybmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJxLW1iLXhzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAdXBkYXRlOm1vZGVsLXZhbHVlPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodikgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmF0ZVZhbHVlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIub3JkZXJfdXVpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlci5vcmRlcl9pZF9yYXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC9xLWNhcmQ+XG4gICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3EtbGlzdD5cbiAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpsb2FkaW5nPlxuICAgICAgICAgIDxxLWlubmVyLWxvYWRpbmdcbiAgICAgICAgICAgIHYtaWY9XCJwYWdlIDw9IDFcIlxuICAgICAgICAgICAgOnNob3dpbmc9XCJ0cnVlXCJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgICAgbGFiZWwtY2xhc3M9XCJkYXJrXCJcbiAgICAgICAgICAgIGNsYXNzPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiB2LWVsc2UgY2xhc3M9XCJyb3cganVzdGlmeS1jZW50ZXIgYWJzb2x1dGUtYm90dG9tXCI+XG4gICAgICAgICAgICA8cS1zcGlubmVyLWRvdHMgY29sb3I9XCJzZWNvbmRhcnlcIiBzaXplPVwiNDBweFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3EtaW5maW5pdGUtc2Nyb2xsPlxuXG4gICAgICA8cS1wYWdlLXNjcm9sbGVyXG4gICAgICAgIHBvc2l0aW9uPVwiYm90dG9tLXJpZ2h0XCJcbiAgICAgICAgOnNjcm9sbC1vZmZzZXQ9XCIxNTBcIlxuICAgICAgICA6b2Zmc2V0PVwiWzE4LCAxOF1cIlxuICAgICAgPlxuICAgICAgICA8cS1idG5cbiAgICAgICAgICBmYWJcbiAgICAgICAgICBpY29uPVwia2V5Ym9hcmRfYXJyb3dfdXBcIlxuICAgICAgICAgIDpjb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5NjAwJyA6ICdteWdyZXknXCJcbiAgICAgICAgICA6dGV4dC1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICdkYXJrJ1wiXG4gICAgICAgICAgZGVuc2VcbiAgICAgICAgICBwYWRkaW5nPVwiM3B4XCJcbiAgICAgICAgLz5cbiAgICAgIDwvcS1wYWdlLXNjcm9sbGVyPlxuICAgIDwvcS1wYWdlPlxuICA8L3EtcHVsbC10by1yZWZyZXNoPlxuXG4gIDxxLWRpYWxvZ1xuICAgIHYtbW9kZWw9XCJtb2RhbF9zZWFyY2hcIlxuICAgIHBvc2l0aW9uPVwidG9wXCJcbiAgICB0cmFuc2l0aW9uLXNob3c9XCJmYWRlXCJcbiAgICB0cmFuc2l0aW9uLWhpZGU9XCJmYWRlXCJcbiAgPlxuICAgIDxxLWNhcmRcbiAgICAgIGNsYXNzPVwibm8tc2hhZG93IHEtcHQtbWQgcS1wYi1zbVwiXG4gICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICd0ZXh0LWRhcmsnOiAkcS5kYXJrLm1vZGUsXG4gICAgICAgICdiZy13aGl0ZSc6ICEkcS5kYXJrLm1vZGUsXG4gICAgICB9XCJcbiAgICA+XG4gICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDxxLWZvcm0gQHN1Ym1pdD1cIm9uU3VibWl0XCI+XG4gICAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICAgIHYtbW9kZWw9XCJxXCJcbiAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdTZWFyY2ggb3JkZXInKVwiXG4gICAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgICAgbGF6eS1ydWxlc1xuICAgICAgICAgICAgOmJnLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXk2MDAnIDogJ2lucHV0J1wiXG4gICAgICAgICAgICA6bGFiZWwtY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTMwMCcgOiAnZ3JleSdcIlxuICAgICAgICAgICAgYm9yZGVybGVzc1xuICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1ib3JkZXJsZXNzIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmFwcGVuZD5cbiAgICAgICAgICAgICAgPCEtLSA8cS1pY29uIG5hbWU9XCJldmEtc2VhcmNoLW91dGxpbmVcIiBzaXplPVwic21cIiAvPiAtLT5cbiAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwib25TdWJtaXRcIlxuICAgICAgICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICAgICAgaWNvbj1cImV2YS1zZWFyY2gtb3V0bGluZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvcS1pbnB1dD5cbiAgICAgICAgPC9xLWZvcm0+XG4gICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgIDwvcS1jYXJkPlxuICA8L3EtZGlhbG9nPlxuXG4gIDxPcmRlclByZXZpZXdcbiAgICByZWY9XCJPcmRlclByZXZpZXdcIlxuICAgIDpkYXRhPVwib3JkZXJfaXRlbXNcIlxuICAgIDppdGVtc19kZXRhaWxzPVwiaXRlbXNcIlxuICA+PC9PcmRlclByZXZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEFQSWludGVyZmFjZSBmcm9tIFwic3JjL2FwaS9BUElpbnRlcmZhY2VcIjtcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tIFwic3dpcGVyL3Z1ZVwiO1xuaW1wb3J0IFwic3dpcGVyL2Nzc1wiO1xuaW1wb3J0IHsgZGVmaW5lQXN5bmNDb21wb25lbnQgfSBmcm9tIFwiQHZ1ZS9ydW50aW1lLWNvcmVcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIk9yZGVyTGlzdFwiLFxuICBjb21wb25lbnRzOiB7XG4gICAgU3dpcGVyLFxuICAgIFN3aXBlclNsaWRlLFxuICAgIE9yZGVyUHJldmlldzogZGVmaW5lQXN5bmNDb21wb25lbnQoKCkgPT5cbiAgICAgIGltcG9ydChcImNvbXBvbmVudHMvT3JkZXJQcmV2aWV3LnZ1ZVwiKVxuICAgICksXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHE6IFwiXCIsXG4gICAgICBkYXRhOiBbXSxcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgbG9hZF9tb3JlOiBmYWxzZSxcbiAgICAgIHBhZ2U6IDAsXG4gICAgICBtZXJjaGFudHM6IFtdLFxuICAgICAgc2VydmljZXM6IFtdLFxuICAgICAgcGF5bWVudF9saXN0OiBbXSxcbiAgICAgIHBheW1lbnRfc3RhdHVzOiBbXSxcbiAgICAgIHN0YXR1c19saXN0OiBbXSxcbiAgICAgIG9yZGVyX3RhYjogXCJhbGxcIixcbiAgICAgIG1vZGFsX3NlYXJjaDogZmFsc2UsXG4gICAgICBpc19zZWFyY2g6IGZhbHNlLFxuICAgICAgaXNfcmVmcmVzaDogdW5kZWZpbmVkLFxuICAgICAgb3JkZXJfaXRlbXM6IFtdLFxuICAgICAgaXRlbXM6IHt9LFxuICAgICAgc3RhdHVzX2FsbG93ZWRfcmV2aWV3OiBbXSxcbiAgICAgIHJldmlld3M6IFtdLFxuICAgICAgcmF0ZV92YWx1ZTogW10sXG4gICAgICBvcmRlclRhYnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiB0aGlzLiR0KFwiQWxsXCIpLFxuICAgICAgICAgIHZhbHVlOiBcImFsbFwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IHRoaXMuJHQoXCJBY3RpdmVcIiksXG4gICAgICAgICAgdmFsdWU6IFwiYWN0aXZlXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogdGhpcy4kdChcIlBhc3QgT3JkZXJcIiksXG4gICAgICAgICAgdmFsdWU6IFwicGFzdF9vcmRlclwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IHRoaXMuJHQoXCJDYW5jZWwgT3JkZXJcIiksXG4gICAgICAgICAgdmFsdWU6IFwiY2FuY2VsX29yZGVyXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgb3JkZXJfdGFiKG5ld3ZhbCwgb2xkdmFsKSB7XG4gICAgICB0aGlzLnJlc2V0UGFnZSgpO1xuICAgIH0sXG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgaGFzRGF0YSgpIHtcbiAgICAgIGlmICh0aGlzLmRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIE5vZGF0YU1lc3NhZ2UoKSB7XG4gICAgICBpZiAodGhpcy5pc19zZWFyY2gpIHtcbiAgICAgICAgcmV0dXJuIFwiTm8gcmVzdWx0cyBmb3VuZFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMub3JkZXJfdGFiID09IFwiYWxsXCIpIHtcbiAgICAgICAgICByZXR1cm4gXCJZb3UgZG9uJ3QgaGF2ZSBhbnkgb3JkZXJzIGhlcmUhXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFwiTm8gcmVzdWx0c1wiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBOb2RhdGFNZXNzYWdlMigpIHtcbiAgICAgIGlmICh0aGlzLmlzX3NlYXJjaCkge1xuICAgICAgICByZXR1cm4gXCJTb3JyeSwgd2UgY291bGRuJ3QgZmluZCBhbnkgcmVzdWx0c1wiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMub3JkZXJfdGFiID09IFwiYWxsXCIpIHtcbiAgICAgICAgICByZXR1cm4gXCJMZXQncyBjaGFuZ2UgdGhhdFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBcIm5vIGN1cnJlbnQgb3JkZXIgd2l0aCB0aGlzIHN0YXR1c1wiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHJlZnJlc2goZG9uZSkge1xuICAgICAgdGhpcy5yZXNldFBhZ2UoKTtcbiAgICAgIHRoaXMuaXNfcmVmcmVzaCA9IGRvbmU7XG4gICAgfSxcbiAgICBvcmRlckhpc3RvcnkoaW5kZXgsIGRvbmUpIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLnBhZ2UgPSBpbmRleDtcbiAgICAgIC8vQVBJaW50ZXJmYWNlLm9yZGVySGlzdG9yeShpbmRleCwgdGhpcy5xKVxuICAgICAgQVBJaW50ZXJmYWNlLmZldGNoRGF0YUJ5VG9rZW5Qb3N0KFxuICAgICAgICBcIm9yZGVySGlzdG9yeVwiLFxuICAgICAgICBcInBhZ2U9XCIgKyBpbmRleCArIFwiJnE9XCIgKyB0aGlzLnEgKyBcIiZvcmRlcl90YWI9XCIgKyB0aGlzLm9yZGVyX3RhYlxuICAgICAgKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLmRldGFpbHMuc2hvd19uZXh0X3BhZ2UgPT0gZmFsc2UgJiYgaW5kZXggPiAxKSB7XG4gICAgICAgICAgICB0aGlzLiRyZWZzLm5zY3JvbGwuc3RvcCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRhdGEucHVzaChkYXRhLmRldGFpbHMuZGF0YS5kYXRhKTtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGRhdGEuZGV0YWlscy5kYXRhLm1lcmNoYW50cykuZm9yRWFjaChcbiAgICAgICAgICAgICAgKFtrZXksIG1lcmNoYW50XSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubWVyY2hhbnRzW2tleV0gPSBtZXJjaGFudDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlcyA9IGRhdGEuZGV0YWlscy5kYXRhLnNlcnZpY2VzO1xuICAgICAgICAgICAgdGhpcy5wYXltZW50X2xpc3QgPSBkYXRhLmRldGFpbHMucGF5bWVudF9saXN0O1xuICAgICAgICAgICAgdGhpcy5zdGF0dXNfbGlzdCA9IGRhdGEuZGV0YWlscy5kYXRhLnN0YXR1cztcbiAgICAgICAgICAgIHRoaXMucGF5bWVudF9zdGF0dXMgPSBkYXRhLmRldGFpbHMucGF5bWVudF9zdGF0dXM7XG4gICAgICAgICAgICB0aGlzLnN0YXR1c19hbGxvd2VkX3JldmlldyA9XG4gICAgICAgICAgICAgIGRhdGEuZGV0YWlscy5kYXRhLnN0YXR1c19hbGxvd2VkX3JldmlldztcblxuICAgICAgICAgICAgdGhpcy5yZXZpZXdzID0gZGF0YS5kZXRhaWxzLmRhdGEucmV2aWV3cztcblxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoZGF0YS5kZXRhaWxzLmRhdGEuaXRlbXMyKS5mb3JFYWNoKFxuICAgICAgICAgICAgICAoW2l0ZW1faWQsIGZvb2RdKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtc1tpdGVtX2lkXSA9IGZvb2Q7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuJHJlZnMubnNjcm9sbCkge1xuICAgICAgICAgICAgdGhpcy4kcmVmcy5uc2Nyb2xsLnN0b3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgZG9uZSgpO1xuICAgICAgICAgIGlmICghQVBJaW50ZXJmYWNlLmVtcHR5KHRoaXMuaXNfcmVmcmVzaCkpIHtcbiAgICAgICAgICAgIHRoaXMuaXNfcmVmcmVzaCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBvblN1Ym1pdCgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwib25TdWJtaXRcIik7XG4gICAgICB0aGlzLm1vZGFsX3NlYXJjaCA9IGZhbHNlO1xuICAgICAgdGhpcy5pc19zZWFyY2ggPSB0cnVlO1xuICAgICAgdGhpcy5yZXNldFBhZ2luYXRpb24oKTtcbiAgICB9LFxuICAgIHJlc2V0UGFnZSgpIHtcbiAgICAgIHRoaXMucSA9IFwiXCI7XG4gICAgICB0aGlzLnJlc2V0UGFnaW5hdGlvbigpO1xuICAgICAgdGhpcy5pc19zZWFyY2ggPSBmYWxzZTtcbiAgICB9LFxuICAgIHJlc2V0UGFnaW5hdGlvbigpIHtcbiAgICAgIHRoaXMucGFnZSA9IDA7XG4gICAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICAgIHRoaXMuc2VydmljZXMgPSBbXTtcbiAgICAgIHRoaXMucGF5bWVudF9saXN0ID0gW107XG4gICAgICB0aGlzLnN0YXR1c19saXN0ID0gW107XG4gICAgICB0aGlzLiRyZWZzLm5zY3JvbGwucmVzZXQoKTtcbiAgICAgIHRoaXMuJHJlZnMubnNjcm9sbC5yZXN1bWUoKTtcbiAgICAgIHRoaXMuJHJlZnMubnNjcm9sbC50cmlnZ2VyKCk7XG4gICAgfSxcbiAgICBzaG93UXVpY2tEZXRhaWxzKGRhdGEpIHtcbiAgICAgIHRoaXMub3JkZXJfaXRlbXMgPSBkYXRhO1xuICAgICAgdGhpcy4kcmVmcy5PcmRlclByZXZpZXcuZGlhbG9nID0gIXRoaXMuJHJlZnMuT3JkZXJQcmV2aWV3LmRpYWxvZztcbiAgICB9LFxuICAgIHNldFJhdGVWYWx1ZShkYXRhLCBvcmRlcl91dWlkLCBvcmRlcl9pZCkge1xuICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xuICAgICAgICBwYXRoOiBcIi9vcmRlci93cml0ZS1yZXZpZXdcIixcbiAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICBvcmRlcl91dWlkOiBvcmRlcl91dWlkLFxuICAgICAgICAgIHJhdGU6IGRhdGEsXG4gICAgICAgICAgb3JkZXJfaWQ6IG9yZGVyX2lkLFxuICAgICAgICAgIGJhY2tfdXJsOiBcIi9hY2NvdW50L2FsbG9yZGVyXCIsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi5xLWZvY3VzLWhlbHBlciB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbjwvc3R5bGU+XG4iXSwiZmlsZSI6ImFzc2V0cy9PcmRlckxpc3QuYTg1NjU2MjQuanMifQ==
