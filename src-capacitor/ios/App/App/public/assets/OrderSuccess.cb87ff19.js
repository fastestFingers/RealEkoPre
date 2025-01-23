import { _ as _export_sfc, m as APIinterface, p as openBlock, q as createBlock, t as withCtx, f as createVNode, Y as QBtn, a6 as createTextVNode, Z as toDisplayString, a7 as normalizeClass, V as createElementBlock, U as createBaseVNode, F as Fragment, aA as createCommentVNode, ad as QItemSection, X as renderList, ac as QItem } from "./index.61ed5618.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QInnerLoading } from "./QInnerLoading.abe2afe6.js";
import { Q as QSpace } from "./QSpace.f164c087.js";
import { Q as QImg } from "./QImg.6c27044c.js";
import { Q as QItemLabel } from "./QItemLabel.a9365c5b.js";
import { Q as QBadge } from "./QBadge.6d32ed43.js";
import { Q as QList } from "./QList.b69a7e5b.js";
import { Q as QExpansionItem } from "./QExpansionItem.6e46dae0.js";
import { Q as QFooter } from "./QFooter.571ac042.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import { Q as QPullToRefresh } from "./QPullToRefresh.3d10c02d.js";
import "./QResizeObserver.d08dce3c.js";
import "./QSlideTransition.edc8ce9e.js";
import "./touch.96e0ae37.js";
import "./selection.50b4cb0c.js";
import "./format.7f7370d3.js";
const _sfc_main = {
  name: "OrderSuccess",
  data() {
    return {
      order_uuid: "",
      loading: true,
      data: [],
      order_items: [],
      order_info: [],
      merchant: [],
      estimation: [],
      charge_type: "",
      payload: [
        "merchant_info",
        "items",
        "order_info",
        "estimation",
        "charge_type"
      ]
    };
  },
  created() {
    this.order_uuid = this.$route.query.order_uuid;
    this.orderDetails();
  },
  computed: {
    hasData() {
      if (Object.keys(this.data).length > 0) {
        return true;
      }
      return false;
    }
  },
  methods: {
    refresh(done) {
      this.orderDetails(done);
    },
    orderDetails(done) {
      this.loading = true;
      APIinterface.fetchDataByToken("orderDetails", {
        order_uuid: this.order_uuid,
        payload: this.payload
      }).then((data) => {
        this.data = data.details.data;
        this.order_items = data.details.data.items;
        this.order_info = data.details.data.order.order_info;
        this.merchant = data.details.data.merchant;
        this.estimation = data.details.data.estimation;
        this.charge_type = data.details.data.charge_type;
      }).catch((error) => {
        this.order_items = [];
        this.order_info = [];
        this.merchant = [];
        this.estimation = [];
      }).then((data) => {
        this.loading = false;
        if (!APIinterface.empty(done)) {
          done();
        }
      });
    },
    estimatedLabel(service_code) {
      if (service_code == "pickup") {
        return this.$t("Estimated Pickup Time");
      } else if (service_code == "dinein") {
        return this.$t("Estimated Dinein Time");
      }
      return this.$t("Estimated Delivery Time");
    }
  }
};
const _hoisted_1 = {
  key: 1,
  class: "text-center full-width"
};
const _hoisted_2 = { class: "text-h5 text-weight-bold" };
const _hoisted_3 = { class: "text-grey font12" };
const _hoisted_4 = { class: "text-center q-mb-md" };
const _hoisted_5 = { class: "text-grey text-weight-600" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "border-grey-top" }, null, -1);
const _hoisted_7 = { class: "text-h5 text-weight-bold" };
const _hoisted_8 = { class: "row items-start justify-between" };
const _hoisted_9 = { class: "text-grey" };
const _hoisted_10 = { class: "text-weight-bold" };
const _hoisted_11 = { class: "row items-start justify-between" };
const _hoisted_12 = { class: "text-grey" };
const _hoisted_13 = { class: "text-weight-bold" };
const _hoisted_14 = { class: "row items-start justify-between" };
const _hoisted_15 = { class: "text-grey col-2" };
const _hoisted_16 = { class: "col-8 text-right" };
const _hoisted_17 = { class: "row items-start justify-between" };
const _hoisted_18 = { class: "text-grey col text-weight-bold" };
const _hoisted_19 = { class: "col text-right text-weight-bold" };
const _hoisted_20 = { class: "text-weight-bold" };
const _hoisted_21 = { class: "text-grey font13 q-ml-sm" };
const _hoisted_22 = /* @__PURE__ */ createTextVNode(" )");
const _hoisted_23 = { class: "no-margin" };
const _hoisted_24 = { class: "m-0 text-grey" };
const _hoisted_25 = {
  key: 0,
  class: "no-margin"
};
const _hoisted_26 = {
  key: 1,
  class: "no-margin"
};
const _hoisted_27 = {
  key: 2,
  class: "no-margin"
};
const _hoisted_28 = /* @__PURE__ */ createTextVNode(", ");
const _hoisted_29 = {
  key: 0,
  class: "no-margin"
};
const _hoisted_30 = {
  key: 1,
  class: "no-margin"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QPullToRefresh, { onRefresh: $options.refresh }, {
    default: withCtx(() => [
      createVNode(QHeader, {
        reveal: "",
        "reveal-offset": "50",
        class: normalizeClass({
          "bg-mydark text-white": _ctx.$q.dark.mode,
          "bg-white text-dark": !_ctx.$q.dark.mode
        })
      }, {
        default: withCtx(() => [
          createVNode(QToolbar, null, {
            default: withCtx(() => [
              createVNode(QBtn, {
                flat: "",
                round: "",
                dense: "",
                icon: "las la-angle-left",
                class: "q-mr-sm",
                color: _ctx.$q.dark.mode ? "white" : "dark",
                to: "/home",
                replace: "true"
              }, null, 8, ["color"]),
              createVNode(QToolbarTitle, { class: "text-weight-bold" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("Your Order Successfully")) + "!", 1)
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
        padding: "",
        class: normalizeClass(["q-pl-md q-pr-md", { "flex flex-center": !$options.hasData && !$data.loading }])
      }, {
        default: withCtx(() => [
          $data.loading ? (openBlock(), createBlock(QInnerLoading, {
            key: 0,
            showing: true,
            color: "primary",
            size: "md",
            "label-class": "dark",
            class: "transparent"
          })) : !$data.loading && !$options.hasData ? (openBlock(), createElementBlock("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, toDisplayString(_ctx.$t("No results data")), 1),
            createBaseVNode("p", _hoisted_3, toDisplayString(_ctx.$t("Sorry we cannot find what your looking for.")), 1)
          ])) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, toDisplayString($options.estimatedLabel($data.order_info.service_code)), 1),
              createBaseVNode("div", {
                class: normalizeClass(["text-weight-bold text-h5", {
                  "text-white": _ctx.$q.dark.mode,
                  "text-dark": !_ctx.$q.dark.mode
                }])
              }, [
                $data.order_info.whento_deliver == "now" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  $data.estimation[$data.order_info.service_code] ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    $data.estimation[$data.order_info.service_code][$data.charge_type] ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      createTextVNode(toDisplayString($data.estimation[$data.order_info.service_code][$data.charge_type].estimation) + " " + toDisplayString(_ctx.$t("mins")), 1)
                    ], 64)) : createCommentVNode("", true)
                  ], 64)) : createCommentVNode("", true)
                ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString($data.order_info.delivery_date) + " " + toDisplayString($data.order_info.delivery_time), 1)
                ], 64))
              ], 2),
              createVNode(QSpace, { class: "q-pa-sm" }),
              createVNode(QImg, {
                src: "onboarding-3.png",
                "spinner-color": "primary",
                style: { "max-width": "100%", "height": "150px" },
                fit: "contain"
              })
            ]),
            _hoisted_6,
            createBaseVNode("div", _hoisted_7, toDisplayString(_ctx.$t("Order Details")), 1),
            createBaseVNode("div", _hoisted_8, [
              createBaseVNode("div", _hoisted_9, toDisplayString(_ctx.$t("Order #")), 1),
              createBaseVNode("div", _hoisted_10, toDisplayString($data.order_info.order_id), 1)
            ]),
            createBaseVNode("div", _hoisted_11, [
              createBaseVNode("div", _hoisted_12, toDisplayString(_ctx.$t("Order from")), 1),
              createBaseVNode("div", _hoisted_13, toDisplayString($data.merchant.restaurant_name), 1)
            ]),
            createBaseVNode("div", _hoisted_14, [
              createBaseVNode("div", _hoisted_15, toDisplayString(_ctx.$t("Delivery")), 1),
              createBaseVNode("div", _hoisted_16, toDisplayString($data.order_info.delivery_address), 1)
            ]),
            createBaseVNode("div", _hoisted_17, [
              createBaseVNode("div", _hoisted_18, toDisplayString(_ctx.$t("Total")), 1),
              createBaseVNode("div", _hoisted_19, toDisplayString($data.order_info.total_from_used_currency_to_based_currency_pretty), 1)
            ]),
            createVNode(QSpace, { class: "q-pa-sm" }),
            createVNode(QList, { class: "qlist-no-padding border-grey-top border-bottom q-mb-md" }, {
              default: withCtx(() => [
                createVNode(QExpansionItem, { "expand-separator": "" }, {
                  header: withCtx(() => [
                    createVNode(QItemSection, null, {
                      default: withCtx(() => [
                        createVNode(QItemLabel, null, {
                          default: withCtx(() => [
                            createBaseVNode("span", _hoisted_20, toDisplayString(_ctx.$t("View Details")), 1),
                            createBaseVNode("span", _hoisted_21, [
                              createTextVNode("(" + toDisplayString($data.order_items.length) + " ", 1),
                              $data.order_items.length > 2 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                                createTextVNode(toDisplayString(_ctx.$t("items")), 1)
                              ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                                createTextVNode(toDisplayString(_ctx.$t("item")), 1)
                              ], 64)),
                              _hoisted_22
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  default: withCtx(() => [
                    createVNode(QList, null, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList($data.order_items, (items) => {
                          return openBlock(), createBlock(QItem, { key: items }, {
                            default: withCtx(() => [
                              createVNode(QItemSection, {
                                avatar: "",
                                top: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(QImg, {
                                    src: items.url_image,
                                    lazy: "",
                                    fit: "cover",
                                    style: { "height": "50px", "width": "50px" },
                                    class: "rounded-borders"
                                  }, null, 8, ["src"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(QItemSection, null, {
                                default: withCtx(() => [
                                  createVNode(QItemLabel, { class: "text-weight-bold q-mb-xs font12" }, {
                                    default: withCtx(() => [
                                      createBaseVNode("p", _hoisted_23, [
                                        createTextVNode(toDisplayString(items.qty) + " x " + toDisplayString(items.item_name) + " ", 1),
                                        items.price.size_name != "" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                                          createTextVNode(" (" + toDisplayString(items.price.size_name) + ") ", 1)
                                        ], 64)) : createCommentVNode("", true),
                                        items.item_changes == "replacement" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                                          createBaseVNode("div", _hoisted_24, toDisplayString(_ctx.$t("Replace")) + ' "' + toDisplayString(items.item_name_replace) + '" ', 1),
                                          createVNode(QBadge, {
                                            color: "primary",
                                            "text-color": "white",
                                            label: "Replacement"
                                          })
                                        ], 64)) : createCommentVNode("", true)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(QItemLabel, {
                                    caption: "",
                                    class: "text-weight-medium font12"
                                  }, {
                                    default: withCtx(() => [
                                      items.price.discount > 0 ? (openBlock(), createElementBlock("p", _hoisted_25, [
                                        createBaseVNode("del", null, toDisplayString(items.price.pretty_price), 1),
                                        createTextVNode(" " + toDisplayString(items.price.pretty_price_after_discount), 1)
                                      ])) : (openBlock(), createElementBlock("p", _hoisted_26, toDisplayString(items.price.pretty_price), 1)),
                                      items.special_instructions != "" ? (openBlock(), createElementBlock("p", _hoisted_27, toDisplayString(items.special_instructions), 1)) : createCommentVNode("", true),
                                      items.attributes != "" ? (openBlock(true), createElementBlock(Fragment, { key: 3 }, renderList(items.attributes, (attributes) => {
                                        return openBlock(), createElementBlock("p", {
                                          key: attributes,
                                          class: "no-margin"
                                        }, [
                                          (openBlock(true), createElementBlock(Fragment, null, renderList(attributes, (attributes_data, attributes_index) => {
                                            return openBlock(), createElementBlock(Fragment, null, [
                                              createTextVNode(toDisplayString(attributes_data), 1),
                                              attributes_index < attributes.length - 1 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                                                _hoisted_28
                                              ], 64)) : createCommentVNode("", true)
                                            ], 64);
                                          }), 256))
                                        ]);
                                      }), 128)) : createCommentVNode("", true)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(QItemSection, {
                                side: "",
                                top: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(QItemLabel, {
                                    caption: "",
                                    class: "text-weight-bold font12"
                                  }, {
                                    default: withCtx(() => [
                                      items.price.discount <= 0 ? (openBlock(), createElementBlock("p", _hoisted_29, toDisplayString(items.price.pretty_total), 1)) : (openBlock(), createElementBlock("p", _hoisted_30, toDisplayString(items.price.pretty_total_after_discount), 1))
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(QFooter, {
              reveal: "",
              class: "q-pl-md q-pr-md q-pb-sm q-pt-sm text-dark bg-white"
            }, {
              default: withCtx(() => [
                createVNode(QBtn, {
                  unelevated: "",
                  "no-caps": "",
                  size: "lg",
                  label: _ctx.$t("Track your order"),
                  color: "primary",
                  "text-color": "white",
                  class: "full-width",
                  to: {
                    path: "/account/trackorder",
                    query: {
                      order_uuid: $data.order_info.order_uuid
                    }
                  }
                }, null, 8, ["label", "to"])
              ]),
              _: 1
            })
          ], 64))
        ]),
        _: 1
      }, 8, ["class"])
    ]),
    _: 1
  }, 8, ["onRefresh"]);
}
var OrderSuccess = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "OrderSuccess.vue"]]);
export { OrderSuccess as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3JkZXJTdWNjZXNzLmNiODdmZjE5LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvT3JkZXIvT3JkZXJTdWNjZXNzLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLXB1bGwtdG8tcmVmcmVzaCBAcmVmcmVzaD1cInJlZnJlc2hcIj5cbiAgICA8cS1oZWFkZXJcbiAgICAgIHJldmVhbFxuICAgICAgcmV2ZWFsLW9mZnNldD1cIjUwXCJcbiAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgJ2JnLW15ZGFyayB0ZXh0LXdoaXRlJzogJHEuZGFyay5tb2RlLFxuICAgICAgICAnYmctd2hpdGUgdGV4dC1kYXJrJzogISRxLmRhcmsubW9kZSxcbiAgICAgIH1cIlxuICAgID5cbiAgICAgIDxxLXRvb2xiYXI+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIGZsYXRcbiAgICAgICAgICByb3VuZFxuICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgaWNvbj1cImxhcyBsYS1hbmdsZS1sZWZ0XCJcbiAgICAgICAgICBjbGFzcz1cInEtbXItc21cIlxuICAgICAgICAgIDpjb2xvcj1cIiRxLmRhcmsubW9kZSA/ICd3aGl0ZScgOiAnZGFyaydcIlxuICAgICAgICAgIHRvPVwiL2hvbWVcIlxuICAgICAgICAgIHJlcGxhY2U9XCJ0cnVlXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHEtdG9vbGJhci10aXRsZSBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGRcIlxuICAgICAgICAgID57eyAkdChcIllvdXIgT3JkZXIgU3VjY2Vzc2Z1bGx5XCIpIH19ITwvcS10b29sYmFyLXRpdGxlXG4gICAgICAgID5cbiAgICAgIDwvcS10b29sYmFyPlxuICAgIDwvcS1oZWFkZXI+XG4gICAgPHEtcGFnZVxuICAgICAgcGFkZGluZ1xuICAgICAgY2xhc3M9XCJxLXBsLW1kIHEtcHItbWRcIlxuICAgICAgOmNsYXNzPVwieyAnZmxleCBmbGV4LWNlbnRlcic6ICFoYXNEYXRhICYmICFsb2FkaW5nIH1cIlxuICAgID5cbiAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwibG9hZGluZ1wiPlxuICAgICAgICA8cS1pbm5lci1sb2FkaW5nXG4gICAgICAgICAgOnNob3dpbmc9XCJ0cnVlXCJcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgbGFiZWwtY2xhc3M9XCJkYXJrXCJcbiAgICAgICAgICBjbGFzcz1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgLz5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgdi1lbHNlLWlmPVwiIWxvYWRpbmcgJiYgIWhhc0RhdGFcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIGZ1bGwtd2lkdGhcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNSB0ZXh0LXdlaWdodC1ib2xkXCI+XG4gICAgICAgICAgICB7eyAkdChcIk5vIHJlc3VsdHMgZGF0YVwiKSB9fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1ncmV5IGZvbnQxMlwiPlxuICAgICAgICAgICAge3sgJHQoXCJTb3JyeSB3ZSBjYW5ub3QgZmluZCB3aGF0IHlvdXIgbG9va2luZyBmb3IuXCIpIH19XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgcS1tYi1tZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWdyZXkgdGV4dC13ZWlnaHQtNjAwXCI+XG4gICAgICAgICAgICB7eyBlc3RpbWF0ZWRMYWJlbChvcmRlcl9pbmZvLnNlcnZpY2VfY29kZSkgfX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGQgdGV4dC1oNVwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICd0ZXh0LXdoaXRlJzogJHEuZGFyay5tb2RlLFxuICAgICAgICAgICAgICAndGV4dC1kYXJrJzogISRxLmRhcmsubW9kZSxcbiAgICAgICAgICAgIH1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwib3JkZXJfaW5mby53aGVudG9fZGVsaXZlciA9PSAnbm93J1wiPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImVzdGltYXRpb25bb3JkZXJfaW5mby5zZXJ2aWNlX2NvZGVdXCI+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICB2LWlmPVwiZXN0aW1hdGlvbltvcmRlcl9pbmZvLnNlcnZpY2VfY29kZV1bY2hhcmdlX3R5cGVdXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7e1xuICAgICAgICAgICAgICAgICAgICBlc3RpbWF0aW9uW29yZGVyX2luZm8uc2VydmljZV9jb2RlXVtjaGFyZ2VfdHlwZV0uZXN0aW1hdGlvblxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIHt7ICR0KFwibWluc1wiKSB9fVxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgICAgICAge3sgb3JkZXJfaW5mby5kZWxpdmVyeV9kYXRlIH19IHt7IG9yZGVyX2luZm8uZGVsaXZlcnlfdGltZSB9fVxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cS1zcGFjZSBjbGFzcz1cInEtcGEtc21cIj48L3Etc3BhY2U+XG4gICAgICAgICAgPHEtaW1nXG4gICAgICAgICAgICBzcmM9XCJvbmJvYXJkaW5nLTMucG5nXCJcbiAgICAgICAgICAgIHNwaW5uZXItY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIHN0eWxlPVwibWF4LXdpZHRoOiAxMDAlOyBoZWlnaHQ6IDE1MHB4XCJcbiAgICAgICAgICAgIGZpdD1cImNvbnRhaW5cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm9yZGVyLWdyZXktdG9wXCI+PC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDUgdGV4dC13ZWlnaHQtYm9sZFwiPnt7ICR0KFwiT3JkZXIgRGV0YWlsc1wiKSB9fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWdyZXlcIj57eyAkdChcIk9yZGVyICNcIikgfX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC13ZWlnaHQtYm9sZFwiPnt7IG9yZGVyX2luZm8ub3JkZXJfaWQgfX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgaXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtZ3JleVwiPnt7ICR0KFwiT3JkZXIgZnJvbVwiKSB9fTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXdlaWdodC1ib2xkXCI+e3sgbWVyY2hhbnQucmVzdGF1cmFudF9uYW1lIH19PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWdyZXkgY29sLTJcIj57eyAkdChcIkRlbGl2ZXJ5XCIpIH19PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC04IHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgIHt7IG9yZGVyX2luZm8uZGVsaXZlcnlfYWRkcmVzcyB9fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBpdGVtcy1zdGFydCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1ncmV5IGNvbCB0ZXh0LXdlaWdodC1ib2xkXCI+e3sgJHQoXCJUb3RhbFwiKSB9fTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdGV4dC1yaWdodCB0ZXh0LXdlaWdodC1ib2xkXCI+XG4gICAgICAgICAgICB7eyBvcmRlcl9pbmZvLnRvdGFsX2Zyb21fdXNlZF9jdXJyZW5jeV90b19iYXNlZF9jdXJyZW5jeV9wcmV0dHkgfX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHEtc3BhY2UgY2xhc3M9XCJxLXBhLXNtXCI+PC9xLXNwYWNlPlxuXG4gICAgICAgIDxxLWxpc3QgY2xhc3M9XCJxbGlzdC1uby1wYWRkaW5nIGJvcmRlci1ncmV5LXRvcCBib3JkZXItYm90dG9tIHEtbWItbWRcIj5cbiAgICAgICAgICA8cS1leHBhbnNpb24taXRlbSBleHBhbmQtc2VwYXJhdG9yPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpoZWFkZXI+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXdlaWdodC1ib2xkXCI+e3sgJHQoXCJWaWV3IERldGFpbHNcIikgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtZ3JleSBmb250MTMgcS1tbC1zbVwiXG4gICAgICAgICAgICAgICAgICAgID4oe3sgb3JkZXJfaXRlbXMubGVuZ3RoIH19XG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwib3JkZXJfaXRlbXMubGVuZ3RoID4gMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KFwiaXRlbXNcIikgfX1cbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT4ge3sgJHQoXCJpdGVtXCIpIH19IDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICk8L3NwYW5cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmRlZmF1bHQ+XG4gICAgICAgICAgICAgIDxxLWxpc3Q+XG4gICAgICAgICAgICAgICAgPHEtaXRlbSB2LWZvcj1cIml0ZW1zIGluIG9yZGVyX2l0ZW1zXCIgOmtleT1cIml0ZW1zXCI+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyIHRvcD5cbiAgICAgICAgICAgICAgICAgICAgPHEtaW1nXG4gICAgICAgICAgICAgICAgICAgICAgOnNyYz1cIml0ZW1zLnVybF9pbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgbGF6eVxuICAgICAgICAgICAgICAgICAgICAgIGZpdD1cImNvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImhlaWdodDogNTBweDsgd2lkdGg6IDUwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicm91bmRlZC1ib3JkZXJzXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2xhc3M9XCJ0ZXh0LXdlaWdodC1ib2xkIHEtbWIteHMgZm9udDEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJuby1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IGl0ZW1zLnF0eSB9fSB4XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBpdGVtcy5pdGVtX25hbWUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiaXRlbXMucHJpY2Uuc2l6ZV9uYW1lICE9ICcnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICh7eyBpdGVtcy5wcmljZS5zaXplX25hbWUgfX0pXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIml0ZW1zLml0ZW1fY2hhbmdlcyA9PSAncmVwbGFjZW1lbnQnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtLTAgdGV4dC1ncmV5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgJHQoXCJSZXBsYWNlXCIpIH19IFwie3sgaXRlbXMuaXRlbV9uYW1lX3JlcGxhY2UgfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtYmFkZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJSZXBsYWNlbWVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPjwvcFxuICAgICAgICAgICAgICAgICAgICA+PC9xLWl0ZW0tbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uIGNsYXNzPVwidGV4dC13ZWlnaHQtbWVkaXVtIGZvbnQxMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiaXRlbXMucHJpY2UuZGlzY291bnQgPiAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm5vLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGVsPnt7IGl0ZW1zLnByaWNlLnByZXR0eV9wcmljZSB9fTwvZGVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBpdGVtcy5wcmljZS5wcmV0dHlfcHJpY2VfYWZ0ZXJfZGlzY291bnQgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm5vLW1hcmdpblwiPnt7IGl0ZW1zLnByaWNlLnByZXR0eV9wcmljZSB9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibm8tbWFyZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJpdGVtcy5zcGVjaWFsX2luc3RydWN0aW9ucyAhPSAnJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgaXRlbXMuc3BlY2lhbF9pbnN0cnVjdGlvbnMgfX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIml0ZW1zLmF0dHJpYnV0ZXMgIT0gJydcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cImF0dHJpYnV0ZXMgaW4gaXRlbXMuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJhdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJuby1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzX2RhdGEsIGF0dHJpYnV0ZXNfaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgaW4gYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgYXR0cmlidXRlc19kYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTx0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiYXR0cmlidXRlc19pbmRleCA8IGF0dHJpYnV0ZXMubGVuZ3RoIC0gMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuXG4gICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZSB0b3A+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbiBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGQgZm9udDEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJpdGVtcy5wcmljZS5kaXNjb3VudCA8PSAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm5vLW1hcmdpblwiPnt7IGl0ZW1zLnByaWNlLnByZXR0eV90b3RhbCB9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm5vLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBpdGVtcy5wcmljZS5wcmV0dHlfdG90YWxfYWZ0ZXJfZGlzY291bnQgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgIDwvcS1saXN0PlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L3EtZXhwYW5zaW9uLWl0ZW0+XG4gICAgICAgIDwvcS1saXN0PlxuXG4gICAgICAgIDxxLWZvb3RlclxuICAgICAgICAgIHJldmVhbFxuICAgICAgICAgIGNsYXNzPVwicS1wbC1tZCBxLXByLW1kIHEtcGItc20gcS1wdC1zbSB0ZXh0LWRhcmsgYmctd2hpdGVcIlxuICAgICAgICA+XG4gICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ1RyYWNrIHlvdXIgb3JkZXInKVwiXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgdGV4dC1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgIGNsYXNzPVwiZnVsbC13aWR0aFwiXG4gICAgICAgICAgICA6dG89XCJ7XG4gICAgICAgICAgICAgIHBhdGg6ICcvYWNjb3VudC90cmFja29yZGVyJyxcbiAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICBvcmRlcl91dWlkOiBvcmRlcl9pbmZvLm9yZGVyX3V1aWQsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XCJcbiAgICAgICAgICA+PC9xLWJ0bj5cbiAgICAgICAgPC9xLWZvb3Rlcj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC9xLXBhZ2U+XG4gIDwvcS1wdWxsLXRvLXJlZnJlc2g+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEFQSWludGVyZmFjZSBmcm9tIFwic3JjL2FwaS9BUElpbnRlcmZhY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIk9yZGVyU3VjY2Vzc1wiLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBvcmRlcl91dWlkOiBcIlwiLFxuICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgIGRhdGE6IFtdLFxuICAgICAgb3JkZXJfaXRlbXM6IFtdLFxuICAgICAgb3JkZXJfaW5mbzogW10sXG4gICAgICBtZXJjaGFudDogW10sXG4gICAgICBlc3RpbWF0aW9uOiBbXSxcbiAgICAgIGNoYXJnZV90eXBlOiBcIlwiLFxuICAgICAgcGF5bG9hZDogW1xuICAgICAgICBcIm1lcmNoYW50X2luZm9cIixcbiAgICAgICAgXCJpdGVtc1wiLFxuICAgICAgICBcIm9yZGVyX2luZm9cIixcbiAgICAgICAgXCJlc3RpbWF0aW9uXCIsXG4gICAgICAgIFwiY2hhcmdlX3R5cGVcIixcbiAgICAgIF0sXG4gICAgfTtcbiAgfSxcbiAgLy8gYmVmb3JlUm91dGVMZWF2ZSh0bywgZnJvbSwgbmV4dCkge1xuICAvLyAgIGNvbnNvbGUubG9nKG5leHQpO1xuICAvLyB9LFxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMub3JkZXJfdXVpZCA9IHRoaXMuJHJvdXRlLnF1ZXJ5Lm9yZGVyX3V1aWQ7XG4gICAgdGhpcy5vcmRlckRldGFpbHMoKTtcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBoYXNEYXRhKCkge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZGF0YSkubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgcmVmcmVzaChkb25lKSB7XG4gICAgICB0aGlzLm9yZGVyRGV0YWlscyhkb25lKTtcbiAgICB9LFxuICAgIG9yZGVyRGV0YWlscyhkb25lKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgQVBJaW50ZXJmYWNlLmZldGNoRGF0YUJ5VG9rZW4oXCJvcmRlckRldGFpbHNcIiwge1xuICAgICAgICBvcmRlcl91dWlkOiB0aGlzLm9yZGVyX3V1aWQsXG4gICAgICAgIHBheWxvYWQ6IHRoaXMucGF5bG9hZCxcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5kYXRhID0gZGF0YS5kZXRhaWxzLmRhdGE7XG4gICAgICAgICAgdGhpcy5vcmRlcl9pdGVtcyA9IGRhdGEuZGV0YWlscy5kYXRhLml0ZW1zO1xuICAgICAgICAgIHRoaXMub3JkZXJfaW5mbyA9IGRhdGEuZGV0YWlscy5kYXRhLm9yZGVyLm9yZGVyX2luZm87XG4gICAgICAgICAgdGhpcy5tZXJjaGFudCA9IGRhdGEuZGV0YWlscy5kYXRhLm1lcmNoYW50O1xuICAgICAgICAgIHRoaXMuZXN0aW1hdGlvbiA9IGRhdGEuZGV0YWlscy5kYXRhLmVzdGltYXRpb247XG4gICAgICAgICAgdGhpcy5jaGFyZ2VfdHlwZSA9IGRhdGEuZGV0YWlscy5kYXRhLmNoYXJnZV90eXBlO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5vcmRlcl9pdGVtcyA9IFtdO1xuICAgICAgICAgIHRoaXMub3JkZXJfaW5mbyA9IFtdO1xuICAgICAgICAgIHRoaXMubWVyY2hhbnQgPSBbXTtcbiAgICAgICAgICB0aGlzLmVzdGltYXRpb24gPSBbXTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBpZiAoIUFQSWludGVyZmFjZS5lbXB0eShkb25lKSkge1xuICAgICAgICAgICAgZG9uZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBlc3RpbWF0ZWRMYWJlbChzZXJ2aWNlX2NvZGUpIHtcbiAgICAgIGlmIChzZXJ2aWNlX2NvZGUgPT0gXCJwaWNrdXBcIikge1xuICAgICAgICByZXR1cm4gdGhpcy4kdChcIkVzdGltYXRlZCBQaWNrdXAgVGltZVwiKTtcbiAgICAgIH0gZWxzZSBpZiAoc2VydmljZV9jb2RlID09IFwiZGluZWluXCIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHQoXCJFc3RpbWF0ZWQgRGluZWluIFRpbWVcIik7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy4kdChcIkVzdGltYXRlZCBEZWxpdmVyeSBUaW1lXCIpO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9jcmVhdGVCbG9jayIsIl9jcmVhdGVWTm9kZSIsIl9ub3JtYWxpemVDbGFzcyIsIl9jcmVhdGVUZXh0Vk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfRnJhZ21lbnQiLCJfcmVuZGVyTGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlQQSxNQUFLLFlBQVU7QUFBQSxFQUNiLE1BQU07QUFBQSxFQUNOLE9BQU87QUFDTCxXQUFPO0FBQUEsTUFDTCxZQUFZO0FBQUEsTUFDWixTQUFTO0FBQUEsTUFDVCxNQUFNLENBQUU7QUFBQSxNQUNSLGFBQWEsQ0FBRTtBQUFBLE1BQ2YsWUFBWSxDQUFFO0FBQUEsTUFDZCxVQUFVLENBQUU7QUFBQSxNQUNaLFlBQVksQ0FBRTtBQUFBLE1BQ2QsYUFBYTtBQUFBLE1BQ2IsU0FBUztBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRDtBQUFBO0VBRUo7QUFBQSxFQUlELFVBQVU7QUFDUixTQUFLLGFBQWEsS0FBSyxPQUFPLE1BQU07QUFDcEMsU0FBSyxhQUFZO0FBQUEsRUFDbEI7QUFBQSxFQUNELFVBQVU7QUFBQSxJQUNSLFVBQVU7QUFDUixVQUFJLE9BQU8sS0FBSyxLQUFLLElBQUksRUFBRSxTQUFTLEdBQUc7QUFDckMsZUFBTztBQUFBLE1BQ1Q7QUFDQSxhQUFPO0FBQUEsSUFDUjtBQUFBLEVBQ0Y7QUFBQSxFQUNELFNBQVM7QUFBQSxJQUNQLFFBQVEsTUFBTTtBQUNaLFdBQUssYUFBYSxJQUFJO0FBQUEsSUFDdkI7QUFBQSxJQUNELGFBQWEsTUFBTTtBQUNqQixXQUFLLFVBQVU7QUFDZixtQkFBYSxpQkFBaUIsZ0JBQWdCO0FBQUEsUUFDNUMsWUFBWSxLQUFLO0FBQUEsUUFDakIsU0FBUyxLQUFLO0FBQUEsT0FDZixFQUNFLEtBQUssQ0FBQyxTQUFTO0FBQ2QsYUFBSyxPQUFPLEtBQUssUUFBUTtBQUN6QixhQUFLLGNBQWMsS0FBSyxRQUFRLEtBQUs7QUFDckMsYUFBSyxhQUFhLEtBQUssUUFBUSxLQUFLLE1BQU07QUFDMUMsYUFBSyxXQUFXLEtBQUssUUFBUSxL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
