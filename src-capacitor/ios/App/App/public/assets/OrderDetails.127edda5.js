import { _ as _export_sfc, l as defineAsyncComponent, m as APIinterface, n as resolveComponent, p as openBlock, q as createBlock, t as withCtx, f as createVNode, Y as QBtn, a6 as createTextVNode, Z as toDisplayString, a7 as normalizeClass, V as createElementBlock, ac as QItem, ad as QItemSection, U as createBaseVNode, b4 as normalizeStyle, at as QIcon, aA as createCommentVNode, F as Fragment, X as renderList, a8 as QCard, b2 as QSeparator, bE as QCardActions, u as __vitePreload } from "./index.61ed5618.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QInnerLoading } from "./QInnerLoading.abe2afe6.js";
import { Q as QItemLabel } from "./QItemLabel.a9365c5b.js";
import { Q as QChip } from "./QChip.f183a4f1.js";
import { Q as QList } from "./QList.b69a7e5b.js";
import { Q as QExpansionItem } from "./QExpansionItem.6e46dae0.js";
import { Q as QImg } from "./QImg.6c27044c.js";
import { Q as QBadge } from "./QBadge.6d32ed43.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import { Q as QFooter } from "./QFooter.571ac042.js";
import { Q as QPullToRefresh } from "./QPullToRefresh.3d10c02d.js";
import { u as useDeliveryschedStore } from "./DeliverySched.4e9605bf.js";
import "./QResizeObserver.d08dce3c.js";
import "./QSlideTransition.edc8ce9e.js";
import "./touch.96e0ae37.js";
import "./selection.50b4cb0c.js";
import "./format.7f7370d3.js";
var OrderDetails_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  name: "OrderDetails",
  components: {
    CancelOrder: defineAsyncComponent(
      () => __vitePreload(() => import("./CancelOrder.24ab3b02.js"), true ? ["assets/CancelOrder.24ab3b02.js","assets/QSpace.f164c087.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/ClosePopup.9d17b53c.js"] : void 0)
    ),
    OrderDeliveryDetails: defineAsyncComponent(
      () => __vitePreload(() => import("./OrderDeliveryDetails.f74cd94e.js"), true ? ["assets/OrderDeliveryDetails.f74cd94e.js","assets/QToolbarTitle.03eaf2d6.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QSpace.f164c087.js","assets/QToolbar.c8fc6962.js"] : void 0)
    )
  },
  setup() {
    const DeliveryschedStore = useDeliveryschedStore();
    return { DeliveryschedStore };
  },
  data() {
    return {
      order_uuid: "",
      order_data: [],
      loading: false,
      order_items: [],
      order_summary: [],
      order_info: [],
      order_label: [],
      refund_transaction: [],
      order_status: [],
      order_services: [],
      merchant: [],
      progress: 0,
      data_progress: [],
      progress_order_status: "",
      progress_order_status_details: "",
      allowed_to_cancel: false,
      pdf_link: "",
      delivery_timeline: [],
      order_delivery_status: [],
      allowed_to_review: false,
      payload: [
        "merchant_info",
        "items",
        "summary",
        "order_info",
        "progress",
        "refund_transaction",
        "status_allowed_cancelled",
        "pdf_link",
        "delivery_timeline",
        "order_delivery_status",
        "allowed_to_review"
      ],
      order_table_data: []
    };
  },
  created() {
    this.order_uuid = this.$route.query.order_uuid;
    this.orderDetails();
  },
  computed: {
    hasRefund() {
      if (this.refund_transaction.length > 0) {
        return true;
      }
      return false;
    },
    hasTableInfo() {
      if (Object.keys(this.order_table_data).length > 0) {
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
        this.order_data = data.details;
        this.merchant = data.details.data.merchant;
        this.order_items = data.details.data.items;
        this.order_summary = data.details.data.summary;
        this.order_info = data.details.data.order.order_info;
        this.order_label = data.details.data.label;
        this.refund_transaction = data.details.data.refund_transaction;
        this.order_status = data.details.data.order.status;
        this.order_services = data.details.data.order.services;
        this.data_progress = data.details.data.progress;
        this.progress = data.details.data.progress.order_progress;
        this.allowed_to_cancel = data.details.data.allowed_to_cancel;
        this.pdf_link = data.details.data.pdf_link;
        this.delivery_timeline = data.details.data.delivery_timeline;
        this.order_delivery_status = data.details.data.order_delivery_status;
        this.allowed_to_review = data.details.data.allowed_to_review;
        this.order_table_data = data.details.data.order_table_data;
        this.progress_order_status = data.details.data.progress.order_status;
        this.progress_order_status_details = data.details.data.progress.order_status_details;
        this.order_services = this.order_services[this.order_info.service_code];
        this.order_status = this.order_status[this.order_info.status];
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data) => {
        this.loading = false;
        if (!APIinterface.empty(done)) {
          done();
        }
      });
    },
    afterReceive(data) {
      if (data.order_id !== this.order_info.order_id) {
        return false;
      }
      if (data.order_progress === 0) {
        this.progress = data.order_progress;
        this.progress_order_status = data.order_status;
        this.progress_order_status_details = data.order_status_details;
      } else if (data.order_progress === -1)
        ;
      else {
        this.progress = data.order_progress;
        this.progress_order_status = data.order_status;
        this.progress_order_status_details = data.order_status_details;
      }
    },
    defineColors(data) {
      if (this.progress <= 0) {
        return "grey-8";
      } else {
        return this.progress > data ? "primary" : "grey-4";
      }
    },
    copyClipboard(text) {
      navigator.clipboard.writeText(text);
      APIinterface.notify("light-green", "Copied", "check_circle", this.$q);
    },
    Buyagain() {
      const $params = {
        cart_uuid: APIinterface.getStorage("cart_uuid"),
        order_uuid: this.order_uuid
      };
      APIinterface.showLoadingBox("", this.$q);
      APIinterface.orderBuyAgain($params).then((data) => {
        this.DeliveryschedStore.transaction_type = data.details.restaurant_slug;
        APIinterface.setStorage("cart_uuid", data.details.cart_uuid);
        this.$router.push("/cart");
      }).catch((error) => {
        APIinterface.notify("grey-8", error, "error_outline", this.$q);
      }).then((data) => {
        APIinterface.hideLoadingBox(this.$q);
      });
    },
    afterCancelorder() {
      console.debug("afterCancelorder");
      this.$refs.cancel_order.show_modal = false;
      this.orderDetails();
    }
  }
};
const _hoisted_1 = { class: "q-mr-sm text-weight-bold" };
const _hoisted_2 = { class: "text-weight-bold" };
const _hoisted_3 = { class: "text-weight-light font11" };
const _hoisted_4 = { class: "text-weight-bold" };
const _hoisted_5 = { class: "text-weight-light font11" };
const _hoisted_6 = { class: "text-weight-bold" };
const _hoisted_7 = { class: "text-weight-light font11" };
const _hoisted_8 = { class: "text-weight-bold text-blue" };
const _hoisted_9 = { class: "text-weight-bold" };
const _hoisted_10 = { class: "text-weight-light" };
const _hoisted_11 = { class: "text-weight-light" };
const _hoisted_12 = { class: "text-weight-light" };
const _hoisted_13 = { class: "no-margin" };
const _hoisted_14 = ["innerHTML"];
const _hoisted_15 = { class: "m-0 text-grey" };
const _hoisted_16 = {
  key: 0,
  class: "no-margin"
};
const _hoisted_17 = {
  key: 1,
  class: "no-margin"
};
const _hoisted_18 = {
  key: 2,
  class: "no-margin"
};
const _hoisted_19 = /* @__PURE__ */ createTextVNode(", ");
const _hoisted_20 = {
  key: 0,
  class: "no-margin"
};
const _hoisted_21 = {
  key: 1,
  class: "no-margin"
};
const _hoisted_22 = { class: "no-margin font12 text-weight-bold" };
const _hoisted_23 = { class: "row full-width items-center text-center" };
const _hoisted_24 = { class: "col" };
const _hoisted_25 = { class: "col" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CancelOrder = resolveComponent("CancelOrder");
  const _component_OrderDeliveryDetails = resolveComponent("OrderDeliveryDetails");
  return openBlock(), createBlock(QPullToRefresh, { onRefresh: $options.refresh }, {
    default: withCtx(() => [
      createVNode(QHeader, {
        reveal: "",
        "reveal-offset": "50",
        class: normalizeClass(["", {
          "bg-mydark text-white": _ctx.$q.dark.mode,
          "bg-grey-1 text-dark": !_ctx.$q.dark.mode
        }])
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
                  createTextVNode(toDisplayString(_ctx.$t("Orders Details")), 1)
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
        class: normalizeClass(["b q-pl-md q-pr-md q-pb-md", {
          "bg-mydark text-white": _ctx.$q.dark.mode,
          "bg-grey-1 text-dark": !_ctx.$q.dark.mode
        }])
      }, {
        default: withCtx(() => [
          $data.loading ? (openBlock(), createBlock(QInnerLoading, {
            key: 0,
            showing: true,
            color: "primary",
            size: "md",
            "label-class": "dark",
            class: "transparent"
          })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createVNode(QList, null, {
              default: withCtx(() => [
                createVNode(QItem, { class: "q-pl-none q-pr-none" }, {
                  default: withCtx(() => [
                    createVNode(QItemSection, null, {
                      default: withCtx(() => [
                        createVNode(QItemLabel, { class: "text-dark text-weight-bold" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("Order ID")), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(QItemLabel, {
                          caption: "",
                          class: "font12"
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("span", _hoisted_1, "#" + toDisplayString($data.order_info.order_id), 1),
                            createVNode(QChip, {
                              color: _ctx.$q.dark.mode ? "grey600" : "mygrey",
                              "text-color": _ctx.$q.dark.mode ? "grey300" : "dark",
                              size: "sm",
                              class: "q-ma-none"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString($data.order_services.service_name), 1)
                              ]),
                              _: 1
                            }, 8, ["color", "text-color"])
                          ]),
                          _: 1
                        }),
                        createVNode(QItemLabel, {
                          caption: "",
                          class: "font12"
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_2, toDisplayString($data.order_info.payment_name), 1),
                            createBaseVNode("div", _hoisted_3, toDisplayString($data.order_info.place_on), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, {
                      side: "",
                      top: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(QChip, {
                          color: "mygrey",
                          "text-color": "dark",
                          size: "sm",
                          style: normalizeStyle(`color:${$data.order_status.font_color_hex} !important; background-color:${$data.order_status.background_color_hex} !important; `),
                          class: "q-ma-none"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString($data.order_status.status), 1)
                          ]),
                          _: 1
                        }, 8, ["style"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(QItem, {
                  onClick: _cache[1] || (_cache[1] = ($event) => this.$refs.OrderDeliveryDetails.dialog = true),
                  clickable: "",
                  class: "q-pl-none q-pr-none q-pt-none"
                }, {
                  default: withCtx(() => [
                    createVNode(QItemSection, null, {
                      default: withCtx(() => [
                        createVNode(QItemLabel, {
                          caption: "",
                          class: "font12"
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_4, toDisplayString($data.progress_order_status), 1),
                            createBaseVNode("div", _hoisted_5, toDisplayString($data.progress_order_status_details), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, { avatar: "" }, {
                      default: withCtx(() => [
                        createVNode(QIcon, {
                          color: "grey",
                          size: "15px",
                          name: "las la-angle-right"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                $data.allowed_to_review ? (openBlock(), createBlock(QItem, {
                  key: 0,
                  to: {
                    path: "/order/write-review",
                    query: {
                      order_uuid: $data.order_info.order_uuid,
                      back_url: "/orders",
                      order_id: $data.order_info.order_id
                    }
                  },
                  clickable: "",
                  class: "q-pl-none q-pr-none q-pt-none"
                }, {
                  default: withCtx(() => [
                    createVNode(QItemSection, null, {
                      default: withCtx(() => [
                        createVNode(QItemLabel, {
                          caption: "",
                          class: "font12"
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_6, toDisplayString(_ctx.$t("Write Review")), 1),
                            createBaseVNode("div", _hoisted_7, toDisplayString(_ctx.$t("Rate your order")) + "! ", 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, { avatar: "" }, {
                      default: withCtx(() => [
                        createVNode(QIcon, {
                          color: "grey",
                          size: "15px",
                          name: "las la-angle-right"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["to"])) : createCommentVNode("", true),
                $data.order_info.upload_deposit_link ? (openBlock(), createBlock(QItem, {
                  key: 1,
                  to: {
                    path: "/account/upload-deposit",
                    query: { order_uuid: this.order_uuid }
                  },
                  clickable: "",
                  class: "q-pl-none q-pr-none q-pt-none"
                }, {
                  default: withCtx(() => [
                    createVNode(QItemSection, {
                      caption: "",
                      class: "font12"
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_8, toDisplayString(_ctx.$t("Upload bank deposit")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, { avatar: "" }, {
                      default: withCtx(() => [
                        createVNode(QIcon, {
                          color: "grey",
                          size: "15px",
                          name: "las la-angle-right"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["to"])) : createCommentVNode("", true)
              ]),
              _: 1
            }),
            $options.hasRefund ? (openBlock(), createBlock(QList, {
              key: 0,
              class: "qlist-no-padding"
            }, {
              default: withCtx(() => [
                createVNode(QExpansionItem, {
                  "expand-separator": "",
                  label: "Refund Issued"
                }, {
                  default: withCtx(() => [
                    createVNode(QList, null, {
                      default: withCtx(() => [
                        createVNode(QItem, null, {
                          default: withCtx(() => [
                            createVNode(QItemSection, null, {
                              default: withCtx(() => [
                                (openBlock(true), createElementBlock(Fragment, null, renderList($data.refund_transaction, (refund) => {
                                  return openBlock(), createElementBlock(Fragment, { key: refund }, [
                                    createVNode(QItemLabel, {
                                      caption: "",
                                      class: "font12"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(_ctx.$t("Description")) + ": " + toDisplayString(refund.description), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(QItemLabel, {
                                      caption: "",
                                      class: "font12"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(_ctx.$t("Amount")) + ": " + toDisplayString(refund.trans_amount), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(QItemLabel, {
                                      caption: "",
                                      class: "font12"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(_ctx.$t("Issued to")) + ": " + toDisplayString(refund.used_card), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(QItemLabel, {
                                      caption: "",
                                      class: "font12"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(_ctx.$t("Date issued")) + ": " + toDisplayString(refund.date), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ], 64);
                                }), 128))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : createCommentVNode("", true),
            $options.hasTableInfo ? (openBlock(), createBlock(QList, { key: 1 }, {
              default: withCtx(() => [
                createVNode(QItem, { class: "q-pl-none q-pr-none q-pt-none" }, {
                  default: withCtx(() => [
                    createVNode(QItemLabel, {
                      caption: "",
                      class: "font12"
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_9, toDisplayString(_ctx.$t("Table information")), 1),
                        createBaseVNode("div", _hoisted_10, toDisplayString(_ctx.$t("Guest")) + " : " + toDisplayString($data.order_table_data.guest_number), 1),
                        createBaseVNode("div", _hoisted_11, toDisplayString(_ctx.$t("Room name")) + " : " + toDisplayString($data.order_table_data.room_name), 1),
                        createBaseVNode("div", _hoisted_12, toDisplayString(_ctx.$t("Table name")) + " : " + toDisplayString($data.order_table_data.table_name), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : createCommentVNode("", true),
            createVNode(QCard, {
              flat: "",
              class: "radius8"
            }, {
              default: withCtx(() => [
                createVNode(QList, { class: "q-pb-md" }, {
                  default: withCtx(() => [
                    createVNode(QItem, null, {
                      default: withCtx(() => [
                        createVNode(QItemSection, null, {
                          default: withCtx(() => [
                            createVNode(QItemLabel, {
                              lines: "1",
                              class: "text-weight-medium text-grey font13"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString($data.order_label.your_order_from) + " :", 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(QItemSection, { side: "" }, {
                          default: withCtx(() => [
                            createVNode(QItemLabel, {
                              lines: "1",
                              class: "text-weight-bold font13"
                            }, {
                              default: withCtx(() => [
                                createVNode(QBtn, {
                                  flat: "",
                                  unelevated: "",
                                  "no-caps": "",
                                  class: "q-pa-none min-height",
                                  to: {
                                    name: "menu",
                                    params: { slug: $data.merchant.restaurant_slug }
                                  }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString($data.merchant.restaurant_name), 1)
                                  ]),
                                  _: 1
                                }, 8, ["to"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    (openBlock(true), createElementBlock(Fragment, null, renderList($data.order_items, (items) => {
                      return openBlock(), createElementBlock(Fragment, {
                        key: items.item_id
                      }, [
                        createVNode(QItem, null, {
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
                                    createBaseVNode("p", _hoisted_13, [
                                      createTextVNode(toDisplayString(items.qty) + " x ", 1),
                                      createBaseVNode("span", {
                                        innerHTML: items.item_name
                                      }, null, 8, _hoisted_14),
                                      items.price.size_name != "" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                                        createTextVNode(" (" + toDisplayString(items.price.size_name) + ") ", 1)
                                      ], 64)) : createCommentVNode("", true),
                                      items.item_changes == "replacement" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                                        createBaseVNode("div", _hoisted_15, toDisplayString(_ctx.$t("Replace")) + ' "' + toDisplayString(items.item_name_replace) + '" ', 1),
                                        createVNode(QBadge, {
                                          color: "primary",
                                          "text-color": "white",
                                          label: _ctx.$t("Replacement")
                                        }, null, 8, ["label"])
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
                                    items.price.discount > 0 ? (openBlock(), createElementBlock("p", _hoisted_16, [
                                      createBaseVNode("del", null, toDisplayString(items.price.pretty_price), 1),
                                      createTextVNode(" " + toDisplayString(items.price.pretty_price_after_discount), 1)
                                    ])) : (openBlock(), createElementBlock("p", _hoisted_17, toDisplayString(items.price.pretty_price), 1)),
                                    items.special_instructions != "" ? (openBlock(), createElementBlock("p", _hoisted_18, toDisplayString(items.special_instructions), 1)) : createCommentVNode("", true),
                                    items.attributes != "" ? (openBlock(true), createElementBlock(Fragment, { key: 3 }, renderList(items.attributes, (attributes) => {
                                      return openBlock(), createElementBlock("p", {
                                        key: attributes,
                                        class: "no-margin"
                                      }, [
                                        (openBlock(true), createElementBlock(Fragment, null, renderList(attributes, (attributes_data, attributes_index) => {
                                          return openBlock(), createElementBlock(Fragment, null, [
                                            createTextVNode(toDisplayString(attributes_data), 1),
                                            attributes_index < attributes.length - 1 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                                              _hoisted_19
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
                                    items.price.discount <= 0 ? (openBlock(), createElementBlock("p", _hoisted_20, toDisplayString(items.price.pretty_total), 1)) : (openBlock(), createElementBlock("p", _hoisted_21, toDisplayString(items.price.pretty_total_after_discount), 1))
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024),
                        (openBlock(true), createElementBlock(Fragment, null, renderList(items.addons, (addons) => {
                          return openBlock(), createElementBlock(Fragment, { key: addons }, [
                            createVNode(QItem, { class: "q-item-small" }, {
                              default: withCtx(() => [
                                createVNode(QItemSection, { avatar: "" }),
                                createVNode(QItemSection, null, {
                                  default: withCtx(() => [
                                    createVNode(QItemLabel, { class: "text-weight-bold font12" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(addons.subcategory_name), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(QItemSection, {
                                  side: "",
                                  top: ""
                                })
                              ]),
                              _: 2
                            }, 1024),
                            (openBlock(true), createElementBlock(Fragment, null, renderList(addons.addon_items, (addon_items) => {
                              return openBlock(), createBlock(QItem, {
                                key: addon_items,
                                class: "q-item-small"
                              }, {
                                default: withCtx(() => [
                                  createVNode(QItemSection, { avatar: "" }),
                                  createVNode(QItemSection, null, {
                                    default: withCtx(() => [
                                      createVNode(QItemLabel, {
                                        lines: "1",
                                        class: "font12 text-weight-medium"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(addon_items.qty) + " x " + toDisplayString(addon_items.pretty_price) + " " + toDisplayString(addon_items.sub_item_name), 1)
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
                                      createBaseVNode("p", _hoisted_22, toDisplayString(addon_items.pretty_addons_total), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ], 64);
                        }), 128)),
                        createVNode(QSeparator, { inset: "" })
                      ], 64);
                    }), 128)),
                    createVNode(QItem, {
                      class: "q-pb-none",
                      style: { "min-height": "auto" }
                    }, {
                      default: withCtx(() => [
                        createVNode(QItemSection, { class: "text-weight-medium font13" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("Summary")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    (openBlock(true), createElementBlock(Fragment, null, renderList($data.order_summary, (summary) => {
                      return openBlock(), createElementBlock(Fragment, {
                        key: summary.name
                      }, [
                        summary.type == "total" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                          createVNode(QSeparator, {
                            spaced: "",
                            inset: ""
                          }),
                          createVNode(QItem, {
                            dense: "",
                            class: "q-pb-none",
                            style: { "min-height": "auto" }
                          }, {
                            default: withCtx(() => [
                              createVNode(QItemSection, { class: "font13 text-weight-medium" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(summary.name), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(QItemSection, {
                                side: "",
                                class: "font13 text-weight-medium"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(summary.value), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ], 64)) : (openBlock(), createBlock(QItem, {
                          key: 1,
                          dense: "",
                          class: "q-pb-none",
                          style: { "min-height": "auto" }
                        }, {
                          default: withCtx(() => [
                            createVNode(QItemSection, { class: "font13 text-weight-medium" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(summary.name), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(QItemSection, {
                              side: "",
                              class: "font13 text-weight-medium"
                            }, {
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
                createVNode(QSeparator),
                createVNode(QCardActions, null, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_23, [
                      createBaseVNode("div", _hoisted_24, [
                        createVNode(QBtn, {
                          flat: "",
                          "no-caps": "",
                          class: "q-pa-none text-weight-bold line-1 min-height",
                          color: "secondary",
                          disable: !$data.allowed_to_cancel,
                          onClick: _cache[2] || (_cache[2] = ($event) => this.$refs.cancel_order.showModal(this.order_uuid))
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("div", null, toDisplayString(_ctx.$t("Cancel")), 1),
                            createVNode(QIcon, {
                              right: "",
                              name: "las la-angle-right",
                              size: "15px",
                              class: "text-grey q-ml-sm"
                            })
                          ]),
                          _: 1
                        }, 8, ["disable"])
                      ]),
                      createBaseVNode("div", _hoisted_25, [
                        createVNode(QBtn, {
                          flat: "",
                          "no-caps": "",
                          class: "q-pa-none text-weight-bold line-1 min-height",
                          color: "grey",
                          href: $data.pdf_link,
                          target: "_blank"
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("div", null, toDisplayString(_ctx.$t("Download PDF")), 1),
                            createVNode(QIcon, {
                              right: "",
                              name: "las la-angle-right",
                              size: "15px",
                              class: "text-grey q-ml-sm"
                            })
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ])
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ], 64))
        ]),
        _: 1
      }, 8, ["class"]),
      createVNode(_component_CancelOrder, {
        ref: "cancel_order",
        onAfterCancelorder: $options.afterCancelorder
      }, null, 8, ["onAfterCancelorder"]),
      createVNode(_component_OrderDeliveryDetails, {
        ref: "OrderDeliveryDetails",
        data: $data.delivery_timeline,
        order_status: $data.order_delivery_status,
        progress: $data.data_progress
      }, null, 8, ["data", "order_status", "progress"]),
      !$data.loading ? (openBlock(), createBlock(QFooter, {
        key: 0,
        class: "bg-grey-1 row q-gutter-md q-pl-md q-pr-md q-pb-sm"
      }, {
        default: withCtx(() => [
          createVNode(QBtn, {
            label: $data.order_label.buy_again,
            unelevated: "",
            "no-caps": "",
            color: "mygrey",
            "text-color": "dark",
            class: "col",
            onClick: _cache[3] || (_cache[3] = ($event) => $options.Buyagain()),
            size: "lg"
          }, null, 8, ["label"]),
          createVNode(QBtn, {
            to: {
              path: "/account/trackorder",
              query: { order_uuid: this.order_uuid, back_url: 1 }
            },
            label: $data.order_label.track,
            unelevated: "",
            "no-caps": "",
            color: "primary text-white",
            class: "col",
            size: "lg"
          }, null, 8, ["to", "label"])
        ]),
        _: 1
      })) : createCommentVNode("", true)
    ]),
    _: 1
  }, 8, ["onRefresh"]);
}
var OrderDetails = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "OrderDetails.vue"]]);
export { OrderDetails as default };
//# sourceMappingURL=data:application/json;base64,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QUFBQSxRQUFnQixvQkFBbUIsU0FBZ0I7QUFBQTtNQUNwRUEsWUFLd0I7QUFBQSxRQUp0QixLQUFJO0FBQUEsUUFDSCxNQUFNLE1BQWlCO0FBQUEsUUFDdkIsY0FBYyxNQUFxQjtBQUFBLFFBQ25DLFVBQVUsTUFBYTtBQUFBO09BSWpCLE1BQU8sd0JBRGhCRCxZQTBCVztBQUFBO1FBeEJULE9BQU07QUFBQTt5QkFFTixNQVNFO0FBQUEsVUFURkMsWUFTRTtBQUFBLFlBUkMsT0FBTyxNQUFXLFlBQUM7QUFBQSxZQUNwQjtBQUFBLFlBQ0E7QUFBQSxZQUNBLE9BQU07QUFBQSxZQUNOLGNBQVc7QUFBQSxZQUNYLE9BQU07QUFBQSxZQUNMLCtDQUFPLFNBQVE7QUFBQSxZQUNoQixNQUFLO0FBQUE7VUFFUEEsWUFXRTtBQUFBLFlBVkMsSUFBRTtBQUFBO3dDQUErRSxZQUFVO0FBQUE7WUFJM0YsT0FBTyxNQUFXLFlBQUM7QUFBQSxZQUNwQjtBQUFBLFlBQ0E7QUFBQSxZQUNBLE9BQU07QUFBQSxZQUNOLE9BQU07QUFBQSxZQUNOLE1BQUs7QUFBQSIsIm5hbWVzIjpbIl9jcmVhdGVCbG9jayIsIl9jcmVhdGVWTm9kZSIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfRnJhZ21lbnQiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyIsIl9jcmVhdGVUZXh0Vk5vZGUiLCJfb3BlbkJsb2NrIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhZ2VzL0FjY291bnQvT3JkZXJEZXRhaWxzLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLXB1bGwtdG8tcmVmcmVzaCBAcmVmcmVzaD1cInJlZnJlc2hcIj5cbiAgICA8cS1oZWFkZXJcbiAgICAgIHJldmVhbFxuICAgICAgcmV2ZWFsLW9mZnNldD1cIjUwXCJcbiAgICAgIGNsYXNzPVwiXCJcbiAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgJ2JnLW15ZGFyayB0ZXh0LXdoaXRlJzogJHEuZGFyay5tb2RlLFxuICAgICAgICAnYmctZ3JleS0xIHRleHQtZGFyayc6ICEkcS5kYXJrLm1vZGUsXG4gICAgICB9XCJcbiAgICA+XG4gICAgICA8cS10b29sYmFyPlxuICAgICAgICA8cS1idG5cbiAgICAgICAgICBAY2xpY2s9XCIkcm91dGVyLmJhY2soKVwiXG4gICAgICAgICAgZmxhdFxuICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgZGVuc2VcbiAgICAgICAgICBpY29uPVwibGFzIGxhLWFuZ2xlLWxlZnRcIlxuICAgICAgICAgIGNsYXNzPVwicS1tci1zbVwiXG4gICAgICAgICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ3doaXRlJyA6ICdkYXJrJ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxxLXRvb2xiYXItdGl0bGUgY2xhc3M9XCJ0ZXh0LXdlaWdodC1ib2xkXCI+e3tcbiAgICAgICAgICAkdChcIk9yZGVycyBEZXRhaWxzXCIpXG4gICAgICAgIH19PC9xLXRvb2xiYXItdGl0bGU+XG4gICAgICA8L3EtdG9vbGJhcj5cbiAgICA8L3EtaGVhZGVyPlxuXG4gICAgPHEtcGFnZVxuICAgICAgY2xhc3M9XCJiIHEtcGwtbWQgcS1wci1tZCBxLXBiLW1kXCJcbiAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgJ2JnLW15ZGFyayB0ZXh0LXdoaXRlJzogJHEuZGFyay5tb2RlLFxuICAgICAgICAnYmctZ3JleS0xIHRleHQtZGFyayc6ICEkcS5kYXJrLm1vZGUsXG4gICAgICB9XCJcbiAgICA+XG4gICAgICA8dGVtcGxhdGUgdi1pZj1cImxvYWRpbmdcIj5cbiAgICAgICAgPHEtaW5uZXItbG9hZGluZ1xuICAgICAgICAgIDpzaG93aW5nPVwidHJ1ZVwiXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgIGxhYmVsLWNsYXNzPVwiZGFya1wiXG4gICAgICAgICAgY2xhc3M9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgIC8+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgPHEtbGlzdD5cbiAgICAgICAgICA8cS1pdGVtIGNsYXNzPVwicS1wbC1ub25lIHEtcHItbm9uZVwiPlxuICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNsYXNzPVwidGV4dC1kYXJrIHRleHQtd2VpZ2h0LWJvbGRcIj57e1xuICAgICAgICAgICAgICAgICR0KFwiT3JkZXIgSURcIilcbiAgICAgICAgICAgICAgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uIGNsYXNzPVwiZm9udDEyXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJxLW1yLXNtIHRleHQtd2VpZ2h0LWJvbGRcIlxuICAgICAgICAgICAgICAgICAgPiN7eyBvcmRlcl9pbmZvLm9yZGVyX2lkIH19PC9zcGFuXG4gICAgICAgICAgICAgICAgPlxuXG4gICAgICAgICAgICAgICAgPHEtY2hpcFxuICAgICAgICAgICAgICAgICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXk2MDAnIDogJ215Z3JleSdcIlxuICAgICAgICAgICAgICAgICAgOnRleHQtY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTMwMCcgOiAnZGFyaydcIlxuICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwicS1tYS1ub25lXCJcbiAgICAgICAgICAgICAgICAgID57eyBvcmRlcl9zZXJ2aWNlcy5zZXJ2aWNlX25hbWUgfX08L3EtY2hpcFxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbiBjbGFzcz1cImZvbnQxMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXdlaWdodC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICB7eyBvcmRlcl9pbmZvLnBheW1lbnRfbmFtZSB9fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXdlaWdodC1saWdodCBmb250MTFcIj5cbiAgICAgICAgICAgICAgICAgIHt7IG9yZGVyX2luZm8ucGxhY2Vfb24gfX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGUgdG9wPlxuICAgICAgICAgICAgICA8cS1jaGlwXG4gICAgICAgICAgICAgICAgY29sb3I9XCJteWdyZXlcIlxuICAgICAgICAgICAgICAgIHRleHQtY29sb3I9XCJkYXJrXCJcbiAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgIDpzdHlsZT1cImBjb2xvcjoke29yZGVyX3N0YXR1cy5mb250X2NvbG9yX2hleH0gIWltcG9ydGFudDsgYmFja2dyb3VuZC1jb2xvcjoke29yZGVyX3N0YXR1cy5iYWNrZ3JvdW5kX2NvbG9yX2hleH0gIWltcG9ydGFudDsgYFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJxLW1hLW5vbmVcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3sgb3JkZXJfc3RhdHVzLnN0YXR1cyB9fVxuICAgICAgICAgICAgICA8L3EtY2hpcD5cbiAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPC9xLWl0ZW0+XG5cbiAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICBAY2xpY2s9XCJ0aGlzLiRyZWZzLk9yZGVyRGVsaXZlcnlEZXRhaWxzLmRpYWxvZyA9IHRydWVcIlxuICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICBjbGFzcz1cInEtcGwtbm9uZSBxLXByLW5vbmUgcS1wdC1ub25lXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbiBjbGFzcz1cImZvbnQxMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXdlaWdodC1ib2xkXCI+e3sgcHJvZ3Jlc3Nfb3JkZXJfc3RhdHVzIH19PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtd2VpZ2h0LWxpZ2h0IGZvbnQxMVwiPlxuICAgICAgICAgICAgICAgICAge3sgcHJvZ3Jlc3Nfb3JkZXJfc3RhdHVzX2RldGFpbHMgfX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICAgICAgPHEtaWNvbiBjb2xvcj1cImdyZXlcIiBzaXplPVwiMTVweFwiIG5hbWU9XCJsYXMgbGEtYW5nbGUtcmlnaHRcIiAvPlxuICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8L3EtaXRlbT5cblxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiYWxsb3dlZF90b19yZXZpZXdcIj5cbiAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgOnRvPVwie1xuICAgICAgICAgICAgICAgIHBhdGg6ICcvb3JkZXIvd3JpdGUtcmV2aWV3JyxcbiAgICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgICAgb3JkZXJfdXVpZDogb3JkZXJfaW5mby5vcmRlcl91dWlkLFxuICAgICAgICAgICAgICAgICAgYmFja191cmw6ICcvb3JkZXJzJyxcbiAgICAgICAgICAgICAgICAgIG9yZGVyX2lkOiBvcmRlcl9pbmZvLm9yZGVyX2lkLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgY2xhc3M9XCJxLXBsLW5vbmUgcS1wci1ub25lIHEtcHQtbm9uZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24gY2xhc3M9XCJmb250MTJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXdlaWdodC1ib2xkXCI+e3sgJHQoXCJXcml0ZSBSZXZpZXdcIikgfX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXdlaWdodC1saWdodCBmb250MTFcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgJHQoXCJSYXRlIHlvdXIgb3JkZXJcIikgfX0hXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICAgICAgICA8cS1pY29uIGNvbG9yPVwiZ3JleVwiIHNpemU9XCIxNXB4XCIgbmFtZT1cImxhcyBsYS1hbmdsZS1yaWdodFwiIC8+XG4gICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgdi1pZj1cIm9yZGVyX2luZm8udXBsb2FkX2RlcG9zaXRfbGlua1wiXG4gICAgICAgICAgICA6dG89XCJ7XG4gICAgICAgICAgICAgIHBhdGg6ICcvYWNjb3VudC91cGxvYWQtZGVwb3NpdCcsXG4gICAgICAgICAgICAgIHF1ZXJ5OiB7IG9yZGVyX3V1aWQ6IHRoaXMub3JkZXJfdXVpZCB9LFxuICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgIGNsYXNzPVwicS1wbC1ub25lIHEtcHItbm9uZSBxLXB0LW5vbmVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBjYXB0aW9uIGNsYXNzPVwiZm9udDEyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXdlaWdodC1ib2xkIHRleHQtYmx1ZVwiPlxuICAgICAgICAgICAgICAgIHt7ICR0KFwiVXBsb2FkIGJhbmsgZGVwb3NpdFwiKSB9fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgICAgICA8cS1pY29uIGNvbG9yPVwiZ3JleVwiIHNpemU9XCIxNXB4XCIgbmFtZT1cImxhcyBsYS1hbmdsZS1yaWdodFwiIC8+XG4gICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICA8L3EtbGlzdD5cblxuICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImhhc1JlZnVuZFwiPlxuICAgICAgICAgIDxxLWxpc3QgY2xhc3M9XCJxbGlzdC1uby1wYWRkaW5nXCI+XG4gICAgICAgICAgICA8cS1leHBhbnNpb24taXRlbSBleHBhbmQtc2VwYXJhdG9yIGxhYmVsPVwiUmVmdW5kIElzc3VlZFwiPlxuICAgICAgICAgICAgICA8cS1saXN0PlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwicmVmdW5kIGluIHJlZnVuZF90cmFuc2FjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgOmtleT1cInJlZnVuZFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24gY2xhc3M9XCJmb250MTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPnt7ICR0KFwiRGVzY3JpcHRpb25cIikgfX06XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyByZWZ1bmQuZGVzY3JpcHRpb24gfX08L3EtaXRlbS1sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24gY2xhc3M9XCJmb250MTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPnt7ICR0KFwiQW1vdW50XCIpIH19OlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgcmVmdW5kLnRyYW5zX2Ftb3VudCB9fTwvcS1pdGVtLWxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbiBjbGFzcz1cImZvbnQxMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+e3sgJHQoXCJJc3N1ZWQgdG9cIikgfX06XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyByZWZ1bmQudXNlZF9jYXJkIH19PC9xLWl0ZW0tbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uIGNsYXNzPVwiZm9udDEyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID57eyAkdChcIkRhdGUgaXNzdWVkXCIpIH19OlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgcmVmdW5kLmRhdGUgfX08L3EtaXRlbS1sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgIDwvcS1saXN0PlxuICAgICAgICAgICAgPC9xLWV4cGFuc2lvbi1pdGVtPlxuICAgICAgICAgIDwvcS1saXN0PlxuICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgIDxxLWxpc3Qgdi1pZj1cImhhc1RhYmxlSW5mb1wiPlxuICAgICAgICAgIDxxLWl0ZW0gY2xhc3M9XCJxLXBsLW5vbmUgcS1wci1ub25lIHEtcHQtbm9uZVwiPlxuICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uIGNsYXNzPVwiZm9udDEyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXdlaWdodC1ib2xkXCI+e3sgJHQoXCJUYWJsZSBpbmZvcm1hdGlvblwiKSB9fTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC13ZWlnaHQtbGlnaHRcIj5cbiAgICAgICAgICAgICAgICB7eyAkdChcIkd1ZXN0XCIpIH19IDoge3sgb3JkZXJfdGFibGVfZGF0YS5ndWVzdF9udW1iZXIgfX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXdlaWdodC1saWdodFwiPlxuICAgICAgICAgICAgICAgIHt7ICR0KFwiUm9vbSBuYW1lXCIpIH19IDoge3sgb3JkZXJfdGFibGVfZGF0YS5yb29tX25hbWUgfX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXdlaWdodC1saWdodFwiPlxuICAgICAgICAgICAgICAgIHt7ICR0KFwiVGFibGUgbmFtZVwiKSB9fSA6IHt7IG9yZGVyX3RhYmxlX2RhdGEudGFibGVfbmFtZSB9fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICA8L3EtbGlzdD5cblxuICAgICAgICA8cS1jYXJkIGZsYXQgY2xhc3M9XCJyYWRpdXM4XCI+XG4gICAgICAgICAgPHEtbGlzdCBjbGFzcz1cInEtcGItbWRcIj5cbiAgICAgICAgICAgIDxxLWl0ZW0+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsXG4gICAgICAgICAgICAgICAgICBsaW5lcz1cIjFcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LXdlaWdodC1tZWRpdW0gdGV4dC1ncmV5IGZvbnQxM1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3sgb3JkZXJfbGFiZWwueW91cl9vcmRlcl9mcm9tIH19IDo8L3EtaXRlbS1sYWJlbFxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBsaW5lcz1cIjFcIiBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGQgZm9udDEzXCI+XG4gICAgICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJxLXBhLW5vbmUgbWluLWhlaWdodFwiXG4gICAgICAgICAgICAgICAgICAgIDp0bz1cIntcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbWVudScsXG4gICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7IHNsdWc6IG1lcmNoYW50LnJlc3RhdXJhbnRfc2x1ZyB9LFxuICAgICAgICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgICAgICAgICAgPnt7IG1lcmNoYW50LnJlc3RhdXJhbnRfbmFtZSB9fTwvcS1idG5cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDwvcS1pdGVtPlxuXG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJpdGVtcyBpbiBvcmRlcl9pdGVtc1wiIDprZXk9XCJpdGVtcy5pdGVtX2lkXCI+XG4gICAgICAgICAgICAgIDxxLWl0ZW0+XG4gICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhciB0b3A+XG4gICAgICAgICAgICAgICAgICA8cS1pbWdcbiAgICAgICAgICAgICAgICAgICAgOnNyYz1cIml0ZW1zLnVybF9pbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgIGxhenlcbiAgICAgICAgICAgICAgICAgICAgZml0PVwiY292ZXJcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImhlaWdodDogNTBweDsgd2lkdGg6IDUwcHhcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJvdW5kZWQtYm9yZGVyc1wiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGQgcS1tYi14cyBmb250MTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJuby1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICB7eyBpdGVtcy5xdHkgfX0geFxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaHRtbD1cIml0ZW1zLml0ZW1fbmFtZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIml0ZW1zLnByaWNlLnNpemVfbmFtZSAhPSAnJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgKHt7IGl0ZW1zLnByaWNlLnNpemVfbmFtZSB9fSlcbiAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJpdGVtcy5pdGVtX2NoYW5nZXMgPT0gJ3JlcGxhY2VtZW50J1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm0tMCB0ZXh0LWdyZXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3sgJHQoXCJSZXBsYWNlXCIpIH19IFwie3sgaXRlbXMuaXRlbV9uYW1lX3JlcGxhY2UgfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cS1iYWRnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnUmVwbGFjZW1lbnQnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uIGNsYXNzPVwidGV4dC13ZWlnaHQtbWVkaXVtIGZvbnQxMlwiPlxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIml0ZW1zLnByaWNlLmRpc2NvdW50ID4gMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibm8tbWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGVsPnt7IGl0ZW1zLnByaWNlLnByZXR0eV9wcmljZSB9fTwvZGVsPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgaXRlbXMucHJpY2UucHJldHR5X3ByaWNlX2FmdGVyX2Rpc2NvdW50IH19XG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibm8tbWFyZ2luXCI+e3sgaXRlbXMucHJpY2UucHJldHR5X3ByaWNlIH19PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJuby1tYXJnaW5cIlxuICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJpdGVtcy5zcGVjaWFsX2luc3RydWN0aW9ucyAhPSAnJ1wiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7eyBpdGVtcy5zcGVjaWFsX2luc3RydWN0aW9ucyB9fVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJpdGVtcy5hdHRyaWJ1dGVzICE9ICcnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cImF0dHJpYnV0ZXMgaW4gaXRlbXMuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJuby1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzX2RhdGEsIGF0dHJpYnV0ZXNfaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIGluIGF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgYXR0cmlidXRlc19kYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08dGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJhdHRyaWJ1dGVzX2luZGV4IDwgYXR0cmlidXRlcy5sZW5ndGggLSAxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZSB0b3A+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24gY2xhc3M9XCJ0ZXh0LXdlaWdodC1ib2xkIGZvbnQxMlwiPlxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIml0ZW1zLnByaWNlLmRpc2NvdW50IDw9IDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm5vLW1hcmdpblwiPnt7IGl0ZW1zLnByaWNlLnByZXR0eV90b3RhbCB9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm5vLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgaXRlbXMucHJpY2UucHJldHR5X3RvdGFsX2FmdGVyX2Rpc2NvdW50IH19XG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0+XG5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiYWRkb25zIGluIGl0ZW1zLmFkZG9uc1wiIDprZXk9XCJhZGRvbnNcIj5cbiAgICAgICAgICAgICAgICA8cS1pdGVtIGNsYXNzPVwicS1pdGVtLXNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPjwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2xhc3M9XCJ0ZXh0LXdlaWdodC1ib2xkIGZvbnQxMlwiPnt7XG4gICAgICAgICAgICAgICAgICAgICAgYWRkb25zLnN1YmNhdGVnb3J5X25hbWVcbiAgICAgICAgICAgICAgICAgICAgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZSB0b3A+PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L3EtaXRlbT5cblxuICAgICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICAgIHYtZm9yPVwiYWRkb25faXRlbXMgaW4gYWRkb25zLmFkZG9uX2l0ZW1zXCJcbiAgICAgICAgICAgICAgICAgIDprZXk9XCJhZGRvbl9pdGVtc1wiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cInEtaXRlbS1zbWFsbFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj48L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGxpbmVzPVwiMVwiIGNsYXNzPVwiZm9udDEyIHRleHQtd2VpZ2h0LW1lZGl1bVwiXG4gICAgICAgICAgICAgICAgICAgICAgPnt7IGFkZG9uX2l0ZW1zLnF0eSB9fSB4IHt7IGFkZG9uX2l0ZW1zLnByZXR0eV9wcmljZSB9fVxuICAgICAgICAgICAgICAgICAgICAgIHt7IGFkZG9uX2l0ZW1zLnN1Yl9pdGVtX25hbWUgfX08L3EtaXRlbS1sYWJlbFxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGUgdG9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm5vLW1hcmdpbiBmb250MTIgdGV4dC13ZWlnaHQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHt7IGFkZG9uX2l0ZW1zLnByZXR0eV9hZGRvbnNfdG90YWwgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPCEtLSBhZGRvbnMgLS0+XG4gICAgICAgICAgICAgIDxxLXNlcGFyYXRvciBpbnNldCAvPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwhLS0gZW5kIGl0ZW1zIC0tPlxuXG4gICAgICAgICAgICA8cS1pdGVtIGNsYXNzPVwicS1wYi1ub25lXCIgc3R5bGU9XCJtaW4taGVpZ2h0OiBhdXRvXCI+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBjbGFzcz1cInRleHQtd2VpZ2h0LW1lZGl1bSBmb250MTNcIj5cbiAgICAgICAgICAgICAgICB7eyAkdChcIlN1bW1hcnlcIikgfX1cbiAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDwvcS1pdGVtPlxuXG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJzdW1tYXJ5IGluIG9yZGVyX3N1bW1hcnlcIiA6a2V5PVwic3VtbWFyeS5uYW1lXCI+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwic3VtbWFyeS50eXBlID09ICd0b3RhbCdcIj5cbiAgICAgICAgICAgICAgICA8cS1zZXBhcmF0b3Igc3BhY2VkIGluc2V0IC8+XG4gICAgICAgICAgICAgICAgPHEtaXRlbSBkZW5zZSBjbGFzcz1cInEtcGItbm9uZVwiIHN0eWxlPVwibWluLWhlaWdodDogYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGNsYXNzPVwiZm9udDEzIHRleHQtd2VpZ2h0LW1lZGl1bVwiPnt7XG4gICAgICAgICAgICAgICAgICAgIHN1bW1hcnkubmFtZVxuICAgICAgICAgICAgICAgICAgfX08L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGUgY2xhc3M9XCJmb250MTMgdGV4dC13ZWlnaHQtbWVkaXVtXCI+e3tcbiAgICAgICAgICAgICAgICAgICAgc3VtbWFyeS52YWx1ZVxuICAgICAgICAgICAgICAgICAgfX08L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0gZGVuc2UgY2xhc3M9XCJxLXBiLW5vbmVcIiBzdHlsZT1cIm1pbi1oZWlnaHQ6IGF1dG9cIj5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBjbGFzcz1cImZvbnQxMyB0ZXh0LXdlaWdodC1tZWRpdW1cIj57e1xuICAgICAgICAgICAgICAgICAgICBzdW1tYXJ5Lm5hbWVcbiAgICAgICAgICAgICAgICAgIH19PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlIGNsYXNzPVwiZm9udDEzIHRleHQtd2VpZ2h0LW1lZGl1bVwiPnt7XG4gICAgICAgICAgICAgICAgICAgIHN1bW1hcnkudmFsdWVcbiAgICAgICAgICAgICAgICAgIH19PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9xLWxpc3Q+XG5cbiAgICAgICAgICA8cS1zZXBhcmF0b3IgLz5cbiAgICAgICAgICA8cS1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGZ1bGwtd2lkdGggaXRlbXMtY2VudGVyIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwicS1wYS1ub25lIHRleHQtd2VpZ2h0LWJvbGQgbGluZS0xIG1pbi1oZWlnaHRcIlxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgOmRpc2FibGU9XCIhYWxsb3dlZF90b19jYW5jZWxcIlxuICAgICAgICAgICAgICAgICAgQGNsaWNrPVwidGhpcy4kcmVmcy5jYW5jZWxfb3JkZXIuc2hvd01vZGFsKHRoaXMub3JkZXJfdXVpZClcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXY+e3sgJHQoXCJDYW5jZWxcIikgfX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxxLWljb25cbiAgICAgICAgICAgICAgICAgICAgcmlnaHRcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhcyBsYS1hbmdsZS1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCIxNXB4XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWdyZXkgcS1tbC1zbVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvcS1idG4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cInEtcGEtbm9uZSB0ZXh0LXdlaWdodC1ib2xkIGxpbmUtMSBtaW4taGVpZ2h0XCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwiZ3JleVwiXG4gICAgICAgICAgICAgICAgICA6aHJlZj1cInBkZl9saW5rXCJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdj57eyAkdChcIkRvd25sb2FkIFBERlwiKSB9fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHEtaWNvblxuICAgICAgICAgICAgICAgICAgICByaWdodFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGFzIGxhLWFuZ2xlLXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjE1cHhcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtZ3JleSBxLW1sLXNtXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9xLWJ0bj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3EtY2FyZC1hY3Rpb25zPlxuICAgICAgICA8L3EtY2FyZD5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC9xLXBhZ2U+XG5cbiAgICA8Q2FuY2VsT3JkZXIgcmVmPVwiY2FuY2VsX29yZGVyXCIgQGFmdGVyLWNhbmNlbG9yZGVyPVwiYWZ0ZXJDYW5jZWxvcmRlclwiIC8+XG4gICAgPE9yZGVyRGVsaXZlcnlEZXRhaWxzXG4gICAgICByZWY9XCJPcmRlckRlbGl2ZXJ5RGV0YWlsc1wiXG4gICAgICA6ZGF0YT1cImRlbGl2ZXJ5X3RpbWVsaW5lXCJcbiAgICAgIDpvcmRlcl9zdGF0dXM9XCJvcmRlcl9kZWxpdmVyeV9zdGF0dXNcIlxuICAgICAgOnByb2dyZXNzPVwiZGF0YV9wcm9ncmVzc1wiXG4gICAgPjwvT3JkZXJEZWxpdmVyeURldGFpbHM+XG5cbiAgICA8cS1mb290ZXJcbiAgICAgIHYtaWY9XCIhbG9hZGluZ1wiXG4gICAgICBjbGFzcz1cImJnLWdyZXktMSByb3cgcS1ndXR0ZXItbWQgcS1wbC1tZCBxLXByLW1kIHEtcGItc21cIlxuICAgID5cbiAgICAgIDxxLWJ0blxuICAgICAgICA6bGFiZWw9XCJvcmRlcl9sYWJlbC5idXlfYWdhaW5cIlxuICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgIG5vLWNhcHNcbiAgICAgICAgY29sb3I9XCJteWdyZXlcIlxuICAgICAgICB0ZXh0LWNvbG9yPVwiZGFya1wiXG4gICAgICAgIGNsYXNzPVwiY29sXCJcbiAgICAgICAgQGNsaWNrPVwiQnV5YWdhaW4oKVwiXG4gICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAvPlxuICAgICAgPHEtYnRuXG4gICAgICAgIDp0bz1cIntcbiAgICAgICAgICBwYXRoOiAnL2FjY291bnQvdHJhY2tvcmRlcicsXG4gICAgICAgICAgcXVlcnk6IHsgb3JkZXJfdXVpZDogdGhpcy5vcmRlcl91dWlkLCBiYWNrX3VybDogMSB9LFxuICAgICAgICB9XCJcbiAgICAgICAgOmxhYmVsPVwib3JkZXJfbGFiZWwudHJhY2tcIlxuICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgIG5vLWNhcHNcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5IHRleHQtd2hpdGVcIlxuICAgICAgICBjbGFzcz1cImNvbFwiXG4gICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAvPlxuICAgIDwvcS1mb290ZXI+XG4gIDwvcS1wdWxsLXRvLXJlZnJlc2g+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgZGVmaW5lQXN5bmNDb21wb25lbnQgfSBmcm9tIFwidnVlXCI7XG5pbXBvcnQgQVBJaW50ZXJmYWNlIGZyb20gXCJzcmMvYXBpL0FQSWludGVyZmFjZVwiO1xuaW1wb3J0IHsgdXNlRGVsaXZlcnlzY2hlZFN0b3JlIH0gZnJvbSBcInN0b3Jlcy9EZWxpdmVyeVNjaGVkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJPcmRlckRldGFpbHNcIixcbiAgY29tcG9uZW50czoge1xuICAgIENhbmNlbE9yZGVyOiBkZWZpbmVBc3luY0NvbXBvbmVudCgoKSA9PlxuICAgICAgaW1wb3J0KFwiY29tcG9uZW50cy9DYW5jZWxPcmRlci52dWVcIilcbiAgICApLFxuICAgIE9yZGVyRGVsaXZlcnlEZXRhaWxzOiBkZWZpbmVBc3luY0NvbXBvbmVudCgoKSA9PlxuICAgICAgaW1wb3J0KFwiY29tcG9uZW50cy9PcmRlckRlbGl2ZXJ5RGV0YWlscy52dWVcIilcbiAgICApLFxuICB9LFxuICBzZXR1cCgpIHtcbiAgICBjb25zdCBEZWxpdmVyeXNjaGVkU3RvcmUgPSB1c2VEZWxpdmVyeXNjaGVkU3RvcmUoKTtcbiAgICByZXR1cm4geyBEZWxpdmVyeXNjaGVkU3RvcmUgfTtcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb3JkZXJfdXVpZDogXCJcIixcbiAgICAgIG9yZGVyX2RhdGE6IFtdLFxuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICBvcmRlcl9pdGVtczogW10sXG4gICAgICBvcmRlcl9zdW1tYXJ5OiBbXSxcbiAgICAgIG9yZGVyX2luZm86IFtdLFxuICAgICAgb3JkZXJfbGFiZWw6IFtdLFxuICAgICAgcmVmdW5kX3RyYW5zYWN0aW9uOiBbXSxcbiAgICAgIG9yZGVyX3N0YXR1czogW10sXG4gICAgICBvcmRlcl9zZXJ2aWNlczogW10sXG4gICAgICBtZXJjaGFudDogW10sXG4gICAgICBwcm9ncmVzczogMCxcbiAgICAgIGRhdGFfcHJvZ3Jlc3M6IFtdLFxuICAgICAgcHJvZ3Jlc3Nfb3JkZXJfc3RhdHVzOiBcIlwiLFxuICAgICAgcHJvZ3Jlc3Nfb3JkZXJfc3RhdHVzX2RldGFpbHM6IFwiXCIsXG4gICAgICBhbGxvd2VkX3RvX2NhbmNlbDogZmFsc2UsXG4gICAgICBwZGZfbGluazogXCJcIixcbiAgICAgIGRlbGl2ZXJ5X3RpbWVsaW5lOiBbXSxcbiAgICAgIG9yZGVyX2RlbGl2ZXJ5X3N0YXR1czogW10sXG4gICAgICBhbGxvd2VkX3RvX3JldmlldzogZmFsc2UsXG4gICAgICBwYXlsb2FkOiBbXG4gICAgICAgIFwibWVyY2hhbnRfaW5mb1wiLFxuICAgICAgICBcIml0ZW1zXCIsXG4gICAgICAgIFwic3VtbWFyeVwiLFxuICAgICAgICBcIm9yZGVyX2luZm9cIixcbiAgICAgICAgXCJwcm9ncmVzc1wiLFxuICAgICAgICBcInJlZnVuZF90cmFuc2FjdGlvblwiLFxuICAgICAgICBcInN0YXR1c19hbGxvd2VkX2NhbmNlbGxlZFwiLFxuICAgICAgICBcInBkZl9saW5rXCIsXG4gICAgICAgIFwiZGVsaXZlcnlfdGltZWxpbmVcIixcbiAgICAgICAgXCJvcmRlcl9kZWxpdmVyeV9zdGF0dXNcIixcbiAgICAgICAgXCJhbGxvd2VkX3RvX3Jldmlld1wiLFxuICAgICAgXSxcbiAgICAgIG9yZGVyX3RhYmxlX2RhdGE6IFtdLFxuICAgIH07XG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5vcmRlcl91dWlkID0gdGhpcy4kcm91dGUucXVlcnkub3JkZXJfdXVpZDtcbiAgICB0aGlzLm9yZGVyRGV0YWlscygpO1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGhhc1JlZnVuZCgpIHtcbiAgICAgIGlmICh0aGlzLnJlZnVuZF90cmFuc2FjdGlvbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgaGFzVGFibGVJbmZvKCkge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMub3JkZXJfdGFibGVfZGF0YSkubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgcmVmcmVzaChkb25lKSB7XG4gICAgICB0aGlzLm9yZGVyRGV0YWlscyhkb25lKTtcbiAgICB9LFxuICAgIG9yZGVyRGV0YWlscyhkb25lKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgLy90aGlzLm9yZGVyX3V1aWRcbiAgICAgIEFQSWludGVyZmFjZS5mZXRjaERhdGFCeVRva2VuKFwib3JkZXJEZXRhaWxzXCIsIHtcbiAgICAgICAgb3JkZXJfdXVpZDogdGhpcy5vcmRlcl91dWlkLFxuICAgICAgICBwYXlsb2FkOiB0aGlzLnBheWxvYWQsXG4gICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMub3JkZXJfZGF0YSA9IGRhdGEuZGV0YWlscztcbiAgICAgICAgICB0aGlzLm1lcmNoYW50ID0gZGF0YS5kZXRhaWxzLmRhdGEubWVyY2hhbnQ7XG4gICAgICAgICAgdGhpcy5vcmRlcl9pdGVtcyA9IGRhdGEuZGV0YWlscy5kYXRhLml0ZW1zO1xuICAgICAgICAgIHRoaXMub3JkZXJfc3VtbWFyeSA9IGRhdGEuZGV0YWlscy5kYXRhLnN1bW1hcnk7XG4gICAgICAgICAgdGhpcy5vcmRlcl9pbmZvID0gZGF0YS5kZXRhaWxzLmRhdGEub3JkZXIub3JkZXJfaW5mbztcbiAgICAgICAgICB0aGlzLm9yZGVyX2xhYmVsID0gZGF0YS5kZXRhaWxzLmRhdGEubGFiZWw7XG4gICAgICAgICAgdGhpcy5yZWZ1bmRfdHJhbnNhY3Rpb24gPSBkYXRhLmRldGFpbHMuZGF0YS5yZWZ1bmRfdHJhbnNhY3Rpb247XG4gICAgICAgICAgdGhpcy5vcmRlcl9zdGF0dXMgPSBkYXRhLmRldGFpbHMuZGF0YS5vcmRlci5zdGF0dXM7XG4gICAgICAgICAgdGhpcy5vcmRlcl9zZXJ2aWNlcyA9IGRhdGEuZGV0YWlscy5kYXRhLm9yZGVyLnNlcnZpY2VzO1xuICAgICAgICAgIHRoaXMuZGF0YV9wcm9ncmVzcyA9IGRhdGEuZGV0YWlscy5kYXRhLnByb2dyZXNzO1xuICAgICAgICAgIHRoaXMucHJvZ3Jlc3MgPSBkYXRhLmRldGFpbHMuZGF0YS5wcm9ncmVzcy5vcmRlcl9wcm9ncmVzcztcbiAgICAgICAgICB0aGlzLmFsbG93ZWRfdG9fY2FuY2VsID0gZGF0YS5kZXRhaWxzLmRhdGEuYWxsb3dlZF90b19jYW5jZWw7XG4gICAgICAgICAgdGhpcy5wZGZfbGluayA9IGRhdGEuZGV0YWlscy5kYXRhLnBkZl9saW5rO1xuICAgICAgICAgIHRoaXMuZGVsaXZlcnlfdGltZWxpbmUgPSBkYXRhLmRldGFpbHMuZGF0YS5kZWxpdmVyeV90aW1lbGluZTtcbiAgICAgICAgICB0aGlzLm9yZGVyX2RlbGl2ZXJ5X3N0YXR1cyA9IGRhdGEuZGV0YWlscy5kYXRhLm9yZGVyX2RlbGl2ZXJ5X3N0YXR1cztcbiAgICAgICAgICB0aGlzLmFsbG93ZWRfdG9fcmV2aWV3ID0gZGF0YS5kZXRhaWxzLmRhdGEuYWxsb3dlZF90b19yZXZpZXc7XG5cbiAgICAgICAgICB0aGlzLm9yZGVyX3RhYmxlX2RhdGEgPSBkYXRhLmRldGFpbHMuZGF0YS5vcmRlcl90YWJsZV9kYXRhO1xuXG4gICAgICAgICAgdGhpcy5wcm9ncmVzc19vcmRlcl9zdGF0dXMgPSBkYXRhLmRldGFpbHMuZGF0YS5wcm9ncmVzcy5vcmRlcl9zdGF0dXM7XG4gICAgICAgICAgdGhpcy5wcm9ncmVzc19vcmRlcl9zdGF0dXNfZGV0YWlscyA9XG4gICAgICAgICAgICBkYXRhLmRldGFpbHMuZGF0YS5wcm9ncmVzcy5vcmRlcl9zdGF0dXNfZGV0YWlscztcblxuICAgICAgICAgIHRoaXMub3JkZXJfc2VydmljZXMgPVxuICAgICAgICAgICAgdGhpcy5vcmRlcl9zZXJ2aWNlc1t0aGlzLm9yZGVyX2luZm8uc2VydmljZV9jb2RlXTtcbiAgICAgICAgICB0aGlzLm9yZGVyX3N0YXR1cyA9IHRoaXMub3JkZXJfc3RhdHVzW3RoaXMub3JkZXJfaW5mby5zdGF0dXNdO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgQVBJaW50ZXJmYWNlLm5vdGlmeShcImRhcmtcIiwgZXJyb3IsIFwiZXJyb3JcIiwgdGhpcy4kcSk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgaWYgKCFBUElpbnRlcmZhY2UuZW1wdHkoZG9uZSkpIHtcbiAgICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgYWZ0ZXJSZWNlaXZlKGRhdGEpIHtcbiAgICAgIGlmIChkYXRhLm9yZGVyX2lkICE9PSB0aGlzLm9yZGVyX2luZm8ub3JkZXJfaWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGRhdGEub3JkZXJfcHJvZ3Jlc3MgPT09IDApIHtcbiAgICAgICAgdGhpcy5wcm9ncmVzcyA9IGRhdGEub3JkZXJfcHJvZ3Jlc3M7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3Nfb3JkZXJfc3RhdHVzID0gZGF0YS5vcmRlcl9zdGF0dXM7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3Nfb3JkZXJfc3RhdHVzX2RldGFpbHMgPSBkYXRhLm9yZGVyX3N0YXR1c19kZXRhaWxzO1xuICAgICAgfSBlbHNlIGlmIChkYXRhLm9yZGVyX3Byb2dyZXNzID09PSAtMSkge1xuICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnByb2dyZXNzID0gZGF0YS5vcmRlcl9wcm9ncmVzcztcbiAgICAgICAgdGhpcy5wcm9ncmVzc19vcmRlcl9zdGF0dXMgPSBkYXRhLm9yZGVyX3N0YXR1cztcbiAgICAgICAgdGhpcy5wcm9ncmVzc19vcmRlcl9zdGF0dXNfZGV0YWlscyA9IGRhdGEub3JkZXJfc3RhdHVzX2RldGFpbHM7XG4gICAgICB9XG4gICAgfSxcbiAgICBkZWZpbmVDb2xvcnMoZGF0YSkge1xuICAgICAgaWYgKHRoaXMucHJvZ3Jlc3MgPD0gMCkge1xuICAgICAgICByZXR1cm4gXCJncmV5LThcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2dyZXNzID4gZGF0YSA/IFwicHJpbWFyeVwiIDogXCJncmV5LTRcIjtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvcHlDbGlwYm9hcmQodGV4dCkge1xuICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dCk7XG4gICAgICBBUElpbnRlcmZhY2Uubm90aWZ5KFwibGlnaHQtZ3JlZW5cIiwgXCJDb3BpZWRcIiwgXCJjaGVja19jaXJjbGVcIiwgdGhpcy4kcSk7XG4gICAgfSxcbiAgICBCdXlhZ2FpbigpIHtcbiAgICAgIGNvbnN0ICRwYXJhbXMgPSB7XG4gICAgICAgIGNhcnRfdXVpZDogQVBJaW50ZXJmYWNlLmdldFN0b3JhZ2UoXCJjYXJ0X3V1aWRcIiksXG4gICAgICAgIG9yZGVyX3V1aWQ6IHRoaXMub3JkZXJfdXVpZCxcbiAgICAgIH07XG4gICAgICBBUElpbnRlcmZhY2Uuc2hvd0xvYWRpbmdCb3goXCJcIiwgdGhpcy4kcSk7XG4gICAgICBBUElpbnRlcmZhY2Uub3JkZXJCdXlBZ2FpbigkcGFyYW1zKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuRGVsaXZlcnlzY2hlZFN0b3JlLnRyYW5zYWN0aW9uX3R5cGUgPVxuICAgICAgICAgICAgZGF0YS5kZXRhaWxzLnJlc3RhdXJhbnRfc2x1ZztcbiAgICAgICAgICBBUElpbnRlcmZhY2Uuc2V0U3RvcmFnZShcImNhcnRfdXVpZFwiLCBkYXRhLmRldGFpbHMuY2FydF91dWlkKTtcbiAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaChcIi9jYXJ0XCIpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgQVBJaW50ZXJmYWNlLm5vdGlmeShcImdyZXktOFwiLCBlcnJvciwgXCJlcnJvcl9vdXRsaW5lXCIsIHRoaXMuJHEpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5oaWRlTG9hZGluZ0JveCh0aGlzLiRxKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBhZnRlckNhbmNlbG9yZGVyKCkge1xuICAgICAgY29uc29sZS5kZWJ1ZyhcImFmdGVyQ2FuY2Vsb3JkZXJcIik7XG4gICAgICB0aGlzLiRyZWZzLmNhbmNlbF9vcmRlci5zaG93X21vZGFsID0gZmFsc2U7XG4gICAgICB0aGlzLm9yZGVyRGV0YWlscygpO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLnEtZm9jdXMtaGVscGVyIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuPC9zdHlsZT5cbiJdLCJmaWxlIjoiYXNzZXRzL09yZGVyRGV0YWlscy4xMjdlZGRhNS5qcyJ9
