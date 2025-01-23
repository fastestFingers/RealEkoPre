import { _ as _export_sfc, m as APIinterface, p as openBlock, q as createBlock, t as withCtx, f as createVNode, Y as QBtn, a6 as createTextVNode, Z as toDisplayString, a7 as normalizeClass, U as createBaseVNode, at as QIcon, V as createElementBlock, F as Fragment, aA as createCommentVNode, X as renderList, ac as QItem, ad as QItemSection, b2 as QSeparator } from "./index.61ed5618.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QSkeleton } from "./QSkeleton.39737398.js";
import { Q as QTab } from "./QTab.8fcc65d0.js";
import { Q as QTabs } from "./QTabs.2f5e29cb.js";
import { Q as QItemLabel } from "./QItemLabel.a9365c5b.js";
import { Q as QList } from "./QList.b69a7e5b.js";
import { Q as QInnerLoading } from "./QInnerLoading.abe2afe6.js";
import { Q as QSpinnerDots } from "./QSpinnerDots.a9d9851d.js";
import { Q as QInfiniteScroll } from "./QInfiniteScroll.3e160277.js";
import { Q as QTabPanels, a as QTabPanel } from "./QTabPanels.2a6730dc.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import { Q as QPullToRefresh } from "./QPullToRefresh.3d10c02d.js";
import "./QResizeObserver.d08dce3c.js";
import "./rtl.f3ed811c.js";
import "./use-panel.225d73f4.js";
import "./touch.96e0ae37.js";
import "./selection.50b4cb0c.js";
import "./use-render-cache.b9e045af.js";
import "./format.7f7370d3.js";
const _sfc_main = {
  name: "PointsPage",
  data() {
    return {
      tab: "transaction",
      loading: false,
      loading_balance: true,
      data: [],
      page: 0,
      is_refresh: void 0,
      merchant_refresh: void 0,
      balance: 0,
      loading_merchant: false,
      data_merchant: [],
      page_merchant: 0
    };
  },
  created() {
    this.getAvailablePoints();
  },
  computed: {
    hasData() {
      if (Object.keys(this.data).length > 0) {
        return true;
      }
      return false;
    },
    hasDataMerchant() {
      if (Object.keys(this.data_merchant).length > 0) {
        return true;
      }
      return false;
    }
  },
  methods: {
    tabChange(data) {
      if (data == "transaction") {
        this.data = [];
      } else {
        this.data_merchant = [];
      }
    },
    getAvailablePoints() {
      this.loading_balance = true;
      APIinterface.fetchDataByTokenPost("getAvailablePoints").then((data) => {
        if (data.code == 1) {
          this.balance = data.details.total;
        } else {
          this.balance = 0;
        }
      }).catch((error) => {
      }).then((data) => {
        this.loading_balance = false;
      });
    },
    getPointsTransaction(index, done) {
      this.loading = true;
      this.page = index;
      APIinterface.fetchDataByTokenPost("getPointsTransaction", "page=" + index).then((data) => {
        console.log(data);
        if (data.code == 1) {
          this.data.push(data.details.data);
        } else {
          this.$refs.nscroll.stop();
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
    refresh(done) {
      if (this.tab == "transaction") {
        this.resetPage();
        this.is_refresh = done;
        this.getAvailablePoints();
      } else {
        this.resetPagination2();
        this.merchant_refresh = done;
      }
    },
    resetPage() {
      this.resetPagination();
    },
    resetPagination() {
      this.page = 0;
      this.data = [];
      this.$refs.nscroll.reset();
      this.$refs.nscroll.resume();
      this.$refs.nscroll.trigger();
    },
    resetPagination2() {
      this.page_merchant = 0;
      this.data_merchant = [];
      this.$refs.merchantScroll.reset();
      this.$refs.merchantScroll.resume();
      this.$refs.merchantScroll.trigger();
    },
    getPointsTransactionMerchant(index, done) {
      this.loading_merchant = true;
      this.page_merchant = index;
      APIinterface.fetchDataByTokenPost(
        "getPointsTransactionMerchant",
        "page=" + index
      ).then((data) => {
        console.log(data);
        if (data.code == 1) {
          this.data_merchant.push(data.details.data);
        } else {
          this.$refs.merchantScroll.stop();
        }
      }).catch((error) => {
        if (this.$refs.merchantScroll) {
          this.$refs.merchantScroll.stop();
        }
      }).then((data) => {
        this.loading_merchant = false;
        done();
        if (!APIinterface.empty(this.merchant_refresh)) {
          this.merchant_refresh();
        }
      });
    }
  }
};
const _hoisted_1 = { class: "row items-center q-gutter-md" };
const _hoisted_2 = { class: "col" };
const _hoisted_3 = { class: "no-margin" };
const _hoisted_4 = { class: "font12 no-margin" };
const _hoisted_5 = {
  key: 0,
  class: "flex flex-center",
  style: { "min-height": "300px" }
};
const _hoisted_6 = { class: "text-grey" };
const _hoisted_7 = {
  key: 0,
  class: "q-pa-xl"
};
const _hoisted_8 = {
  key: 1,
  class: "row justify-center absolute-bottom"
};
const _hoisted_9 = {
  key: 0,
  class: "flex flex-center",
  style: { "min-height": "300px" }
};
const _hoisted_10 = { class: "text-grey" };
const _hoisted_11 = { class: "text-bold text-green" };
const _hoisted_12 = {
  key: 0,
  class: "q-pa-xl"
};
const _hoisted_13 = {
  key: 1,
  class: "row justify-center absolute-bottom"
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
                  createTextVNode(toDisplayString(_ctx.$t("Points")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["class"]),
      createVNode(QPage, { class: "q-pl-md q-pr-md" }, {
        default: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(["q-pa-md bg-grey-1x q-mb-sm radius8", {
              "bg-grey600 text-white": _ctx.$q.dark.mode,
              "bg-grey-1 text-black": !_ctx.$q.dark.mode
            }])
          }, [
            createBaseVNode("div", _hoisted_1, [
              createBaseVNode("div", null, [
                $data.loading_balance ? (openBlock(), createBlock(QSkeleton, {
                  key: 0,
                  type: "QAvatar"
                })) : (openBlock(), createBlock(QIcon, {
                  key: 1,
                  color: "grey-4",
                  name: "card_giftcard",
                  style: { "font-size": "60px" }
                }))
              ]),
              createBaseVNode("div", _hoisted_2, [
                $data.loading_balance ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  createVNode(QSkeleton, { type: "text" }),
                  createVNode(QSkeleton, { type: "text" })
                ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createBaseVNode("h4", _hoisted_3, toDisplayString($data.balance), 1),
                  createBaseVNode("p", _hoisted_4, toDisplayString(_ctx.$t("Available Points")), 1)
                ], 64))
              ])
            ])
          ], 2),
          createVNode(QTabs, {
            modelValue: $data.tab,
            "onUpdate:modelValue": [
              _cache[1] || (_cache[1] = ($event) => $data.tab = $event),
              $options.tabChange
            ],
            dense: "",
            "active-color": "primary",
            "indicator-color": "primary",
            align: "left",
            "narrow-indicator": "",
            "no-caps": "",
            class: normalizeClass({
              "text-grey300": _ctx.$q.dark.mode,
              "text-dark": !_ctx.$q.dark.mode
            }),
            breakpoint: 0
          }, {
            default: withCtx(() => [
              createVNode(QTab, {
                name: "transaction",
                label: _ctx.$t("Transactions"),
                "no-caps": "",
                "content-class": "text-weight-500 "
              }, null, 8, ["label"]),
              createVNode(QTab, {
                name: "points_merchant",
                label: _ctx.$t("Points by merchant"),
                "no-caps": "",
                "content-class": "text-weight-500 "
              }, null, 8, ["label"])
            ]),
            _: 1
          }, 8, ["modelValue", "class", "onUpdate:modelValue"]),
          createVNode(QTabPanels, {
            modelValue: $data.tab,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.tab = $event),
            animated: "",
            "transition-next": "fade",
            "transition-prev": "fade",
            class: normalizeClass({
              "bg-mydark ": _ctx.$q.dark.mode,
              "bg-white ": !_ctx.$q.dark.mode
            })
          }, {
            default: withCtx(() => [
              createVNode(QTabPanel, {
                name: "transaction",
                class: "q-pl-none q-pr-none",
                style: { "min-height": "300px" }
              }, {
                default: withCtx(() => [
                  createVNode(QInfiniteScroll, {
                    ref: "nscroll",
                    onLoad: $options.getPointsTransaction,
                    offset: 250
                  }, {
                    default: withCtx(() => [
                      !$options.hasData && !$data.loading ? (openBlock(), createElementBlock("div", _hoisted_5, [
                        createBaseVNode("p", _hoisted_6, toDisplayString(_ctx.$t("No data available")), 1)
                      ])) : createCommentVNode("", true),
                      createVNode(QList, null, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList($data.data, (datas) => {
                            return openBlock(), createElementBlock(Fragment, { key: datas }, [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(datas, (items) => {
                                return openBlock(), createElementBlock(Fragment, {
                                  key: items.transaction_date
                                }, [
                                  createVNode(QItem, null, {
                                    default: withCtx(() => [
                                      createVNode(QItemSection, null, {
                                        default: withCtx(() => [
                                          createVNode(QItemLabel, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(items.transaction_description), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(QItemLabel, { caption: "" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(items.transaction_date), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(QItemSection, { side: "" }, {
                                        default: withCtx(() => [
                                          createBaseVNode("div", {
                                            class: normalizeClass(["text-bold", {
                                              "text-green": items.transaction_type == "credit",
                                              "text-red": items.transaction_type == "debit"
                                            }])
                                          }, toDisplayString(items.transaction_amount), 3)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(QSeparator, {
                                    spaced: "",
                                    inset: ""
                                  })
                                ], 64);
                              }), 128))
                            ], 64);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ]),
                    loading: withCtx(() => [
                      $data.page <= 1 ? (openBlock(), createElementBlock("div", _hoisted_7, [
                        createVNode(QInnerLoading, {
                          showing: true,
                          color: "primary",
                          size: "md",
                          "label-class": "dark",
                          class: "transparent"
                        })
                      ])) : $data.page > 2 ? (openBlock(), createElementBlock("div", _hoisted_8, [
                        createVNode(QSpinnerDots, {
                          color: "secondary",
                          size: "40px"
                        })
                      ])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }, 8, ["onLoad"])
                ]),
                _: 1
              }),
              createVNode(QTabPanel, {
                name: "points_merchant",
                class: "q-pl-none q-pr-none",
                style: { "min-height": "300px" }
              }, {
                default: withCtx(() => [
                  createVNode(QInfiniteScroll, {
                    ref: "merchantScroll",
                    onLoad: $options.getPointsTransactionMerchant,
                    offset: 250
                  }, {
                    default: withCtx(() => [
                      !$options.hasDataMerchant && !$data.loading_merchant ? (openBlock(), createElementBlock("div", _hoisted_9, [
                        createBaseVNode("p", _hoisted_10, toDisplayString(_ctx.$t("No data available")), 1)
                      ])) : createCommentVNode("", true),
                      createVNode(QList, null, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList($data.data_merchant, (datas) => {
                            return openBlock(), createElementBlock(Fragment, { key: datas }, [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(datas, (items) => {
                                return openBlock(), createElementBlock(Fragment, {
                                  key: items.total_earning
                                }, [
                                  createVNode(QItem, null, {
                                    default: withCtx(() => [
                                      createVNode(QItemSection, null, {
                                        default: withCtx(() => [
                                          createVNode(QItemLabel, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(items.restaurant_name), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(QItemSection, { side: "" }, {
                                        default: withCtx(() => [
                                          createBaseVNode("div", _hoisted_11, toDisplayString(items.total_earning), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(QSeparator, {
                                    spaced: "",
                                    inset: ""
                                  })
                                ], 64);
                              }), 128))
                            ], 64);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ]),
                    loading: withCtx(() => [
                      $data.page_merchant <= 1 ? (openBlock(), createElementBlock("div", _hoisted_12, [
                        createVNode(QInnerLoading, {
                          showing: true,
                          color: "primary",
                          size: "md",
                          "label-class": "dark",
                          class: "transparent"
                        })
                      ])) : $data.page_merchant > 2 ? (openBlock(), createElementBlock("div", _hoisted_13, [
                        createVNode(QSpinnerDots, {
                          color: "secondary",
                          size: "40px"
                        })
                      ])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }, 8, ["onLoad"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue", "class"])
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["onRefresh"]);
}
var PointsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "PointsPage.vue"]]);
export { PointsPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9pbnRzUGFnZS45YjI2ODg4Yi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhZ2VzL0FjY291bnQvUG9pbnRzUGFnZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8cS1wdWxsLXRvLXJlZnJlc2ggQHJlZnJlc2g9XCJyZWZyZXNoXCI+XG4gICAgPHEtaGVhZGVyXG4gICAgICByZXZlYWxcbiAgICAgIHJldmVhbC1vZmZzZXQ9XCI1MFwiXG4gICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICdiZy1teWRhcmsgdGV4dC13aGl0ZSc6ICRxLmRhcmsubW9kZSxcbiAgICAgICAgJ2JnLXdoaXRlIHRleHQtZGFyayc6ICEkcS5kYXJrLm1vZGUsXG4gICAgICB9XCJcbiAgICA+XG4gICAgICA8cS10b29sYmFyPlxuICAgICAgICA8cS1idG5cbiAgICAgICAgICBAY2xpY2s9XCIkcm91dGVyLmJhY2soKVwiXG4gICAgICAgICAgZmxhdFxuICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgZGVuc2VcbiAgICAgICAgICBpY29uPVwibGFzIGxhLWFuZ2xlLWxlZnRcIlxuICAgICAgICAgIGNsYXNzPVwicS1tci1zbVwiXG4gICAgICAgICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ3doaXRlJyA6ICdkYXJrJ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxxLXRvb2xiYXItdGl0bGUgY2xhc3M9XCJ0ZXh0LXdlaWdodC1ib2xkXCI+e3tcbiAgICAgICAgICAkdChcIlBvaW50c1wiKVxuICAgICAgICB9fTwvcS10b29sYmFyLXRpdGxlPlxuICAgICAgPC9xLXRvb2xiYXI+XG4gICAgPC9xLWhlYWRlcj5cbiAgICA8cS1wYWdlIGNsYXNzPVwicS1wbC1tZCBxLXByLW1kXCI+XG4gICAgICA8IS0tIFBPSU5UUyBCQUxBTkNFIC0tPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cInEtcGEtbWQgYmctZ3JleS0xeCBxLW1iLXNtIHJhZGl1czhcIlxuICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgJ2JnLWdyZXk2MDAgdGV4dC13aGl0ZSc6ICRxLmRhcmsubW9kZSxcbiAgICAgICAgICAnYmctZ3JleS0xIHRleHQtYmxhY2snOiAhJHEuZGFyay5tb2RlLFxuICAgICAgICB9XCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBpdGVtcy1jZW50ZXIgcS1ndXR0ZXItbWRcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHEtc2tlbGV0b24gdHlwZT1cIlFBdmF0YXJcIiB2LWlmPVwibG9hZGluZ19iYWxhbmNlXCIgLz5cbiAgICAgICAgICAgIDxxLWljb25cbiAgICAgICAgICAgICAgdi1lbHNlXG4gICAgICAgICAgICAgIGNvbG9yPVwiZ3JleS00XCJcbiAgICAgICAgICAgICAgbmFtZT1cImNhcmRfZ2lmdGNhcmRcIlxuICAgICAgICAgICAgICBzdHlsZT1cImZvbnQtc2l6ZTogNjBweFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwibG9hZGluZ19iYWxhbmNlXCI+XG4gICAgICAgICAgICAgIDxxLXNrZWxldG9uIHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICAgICAgPHEtc2tlbGV0b24gdHlwZT1cInRleHRcIiAvPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICAgICAgICAgIDxoNCBjbGFzcz1cIm5vLW1hcmdpblwiPnt7IGJhbGFuY2UgfX08L2g0PlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImZvbnQxMiBuby1tYXJnaW5cIj57eyAkdChcIkF2YWlsYWJsZSBQb2ludHNcIikgfX08L3A+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPCEtLSBQT0lOVFMgQkFMQU5DRSAtLT5cblxuICAgICAgPHEtdGFic1xuICAgICAgICB2LW1vZGVsPVwidGFiXCJcbiAgICAgICAgZGVuc2VcbiAgICAgICAgYWN0aXZlLWNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgIGluZGljYXRvci1jb2xvcj1cInByaW1hcnlcIlxuICAgICAgICBhbGlnbj1cImxlZnRcIlxuICAgICAgICBuYXJyb3ctaW5kaWNhdG9yXG4gICAgICAgIG5vLWNhcHNcbiAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICd0ZXh0LWdyZXkzMDAnOiAkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgJ3RleHQtZGFyayc6ICEkcS5kYXJrLm1vZGUsXG4gICAgICAgIH1cIlxuICAgICAgICA6YnJlYWtwb2ludD1cIjBcIlxuICAgICAgICBAdXBkYXRlOm1vZGVsLXZhbHVlPVwidGFiQ2hhbmdlXCJcbiAgICAgID5cbiAgICAgICAgPHEtdGFiXG4gICAgICAgICAgbmFtZT1cInRyYW5zYWN0aW9uXCJcbiAgICAgICAgICA6bGFiZWw9XCIkdCgnVHJhbnNhY3Rpb25zJylcIlxuICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICBjb250ZW50LWNsYXNzPVwidGV4dC13ZWlnaHQtNTAwIFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxxLXRhYlxuICAgICAgICAgIG5hbWU9XCJwb2ludHNfbWVyY2hhbnRcIlxuICAgICAgICAgIDpsYWJlbD1cIiR0KCdQb2ludHMgYnkgbWVyY2hhbnQnKVwiXG4gICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgIGNvbnRlbnQtY2xhc3M9XCJ0ZXh0LXdlaWdodC01MDAgXCJcbiAgICAgICAgLz5cbiAgICAgIDwvcS10YWJzPlxuXG4gICAgICA8cS10YWItcGFuZWxzXG4gICAgICAgIHYtbW9kZWw9XCJ0YWJcIlxuICAgICAgICBhbmltYXRlZFxuICAgICAgICB0cmFuc2l0aW9uLW5leHQ9XCJmYWRlXCJcbiAgICAgICAgdHJhbnNpdGlvbi1wcmV2PVwiZmFkZVwiXG4gICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAnYmctbXlkYXJrICc6ICRxLmRhcmsubW9kZSxcbiAgICAgICAgICAnYmctd2hpdGUgJzogISRxLmRhcmsubW9kZSxcbiAgICAgICAgfVwiXG4gICAgICA+XG4gICAgICAgIDxxLXRhYi1wYW5lbFxuICAgICAgICAgIG5hbWU9XCJ0cmFuc2FjdGlvblwiXG4gICAgICAgICAgY2xhc3M9XCJxLXBsLW5vbmUgcS1wci1ub25lXCJcbiAgICAgICAgICBzdHlsZT1cIm1pbi1oZWlnaHQ6IDMwMHB4XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxxLWluZmluaXRlLXNjcm9sbFxuICAgICAgICAgICAgcmVmPVwibnNjcm9sbFwiXG4gICAgICAgICAgICBAbG9hZD1cImdldFBvaW50c1RyYW5zYWN0aW9uXCJcbiAgICAgICAgICAgIDpvZmZzZXQ9XCIyNTBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6ZGVmYXVsdD5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHYtaWY9XCIhaGFzRGF0YSAmJiAhbG9hZGluZ1wiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJmbGV4IGZsZXgtY2VudGVyXCJcbiAgICAgICAgICAgICAgICBzdHlsZT1cIm1pbi1oZWlnaHQ6IDMwMHB4XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1ncmV5XCI+e3sgJHQoXCJObyBkYXRhIGF2YWlsYWJsZVwiKSB9fTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxxLWxpc3Q+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiZGF0YXMgaW4gZGF0YVwiIDprZXk9XCJkYXRhc1wiPlxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiaXRlbXMgaW4gZGF0YXNcIlxuICAgICAgICAgICAgICAgICAgICA6a2V5PVwiaXRlbXMudHJhbnNhY3Rpb25fZGF0ZVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbD57e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy50cmFuc2FjdGlvbl9kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbj57e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy50cmFuc2FjdGlvbl9kYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1ib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWdyZWVuJzogaXRlbXMudHJhbnNhY3Rpb25fdHlwZSA9PSAnY3JlZGl0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1yZWQnOiBpdGVtcy50cmFuc2FjdGlvbl90eXBlID09ICdkZWJpdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBpdGVtcy50cmFuc2FjdGlvbl9hbW91bnQgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8cS1zZXBhcmF0b3Igc3BhY2VkIGluc2V0IC8+XG4gICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDwvcS1saXN0PlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpsb2FkaW5nPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cInBhZ2UgPD0gMVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJxLXBhLXhsXCI+XG4gICAgICAgICAgICAgICAgICA8cS1pbm5lci1sb2FkaW5nXG4gICAgICAgICAgICAgICAgICAgIDpzaG93aW5nPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLWNsYXNzPVwiZGFya1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHYtZWxzZS1pZj1cInBhZ2UgPiAyXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInJvdyBqdXN0aWZ5LWNlbnRlciBhYnNvbHV0ZS1ib3R0b21cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHEtc3Bpbm5lci1kb3RzIGNvbG9yPVwic2Vjb25kYXJ5XCIgc2l6ZT1cIjQwcHhcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9xLWluZmluaXRlLXNjcm9sbD5cbiAgICAgICAgPC9xLXRhYi1wYW5lbD5cblxuICAgICAgICA8IS0tIFBPSU5UUyBNRVJDSEFOVCAtLT5cbiAgICAgICAgPHEtdGFiLXBhbmVsXG4gICAgICAgICAgbmFtZT1cInBvaW50c19tZXJjaGFudFwiXG4gICAgICAgICAgY2xhc3M9XCJxLXBsLW5vbmUgcS1wci1ub25lXCJcbiAgICAgICAgICBzdHlsZT1cIm1pbi1oZWlnaHQ6IDMwMHB4XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxxLWluZmluaXRlLXNjcm9sbFxuICAgICAgICAgICAgcmVmPVwibWVyY2hhbnRTY3JvbGxcIlxuICAgICAgICAgICAgQGxvYWQ9XCJnZXRQb2ludHNUcmFuc2FjdGlvbk1lcmNoYW50XCJcbiAgICAgICAgICAgIDpvZmZzZXQ9XCIyNTBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6ZGVmYXVsdD5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHYtaWY9XCIhaGFzRGF0YU1lcmNoYW50ICYmICFsb2FkaW5nX21lcmNoYW50XCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImZsZXggZmxleC1jZW50ZXJcIlxuICAgICAgICAgICAgICAgIHN0eWxlPVwibWluLWhlaWdodDogMzAwcHhcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWdyZXlcIj57eyAkdChcIk5vIGRhdGEgYXZhaWxhYmxlXCIpIH19PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHEtbGlzdD5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJkYXRhcyBpbiBkYXRhX21lcmNoYW50XCIgOmtleT1cImRhdGFzXCI+XG4gICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJpdGVtcyBpbiBkYXRhc1wiIDprZXk9XCJpdGVtcy50b3RhbF9lYXJuaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbD57eyBpdGVtcy5yZXN0YXVyYW50X25hbWUgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtYm9sZCB0ZXh0LWdyZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGl0ZW1zLnRvdGFsX2Vhcm5pbmcgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8cS1zZXBhcmF0b3Igc3BhY2VkIGluc2V0IC8+XG4gICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDwvcS1saXN0PlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpsb2FkaW5nPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cInBhZ2VfbWVyY2hhbnQgPD0gMVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJxLXBhLXhsXCI+XG4gICAgICAgICAgICAgICAgICA8cS1pbm5lci1sb2FkaW5nXG4gICAgICAgICAgICAgICAgICAgIDpzaG93aW5nPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLWNsYXNzPVwiZGFya1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHYtZWxzZS1pZj1cInBhZ2VfbWVyY2hhbnQgPiAyXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInJvdyBqdXN0aWZ5LWNlbnRlciBhYnNvbHV0ZS1ib3R0b21cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHEtc3Bpbm5lci1kb3RzIGNvbG9yPVwic2Vjb25kYXJ5XCIgc2l6ZT1cIjQwcHhcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9xLWluZmluaXRlLXNjcm9sbD5cbiAgICAgICAgPC9xLXRhYi1wYW5lbD5cbiAgICAgIDwvcS10YWItcGFuZWxzPlxuICAgIDwvcS1wYWdlPlxuICA8L3EtcHVsbC10by1yZWZyZXNoPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBBUElpbnRlcmZhY2UgZnJvbSBcInNyYy9hcGkvQVBJaW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJQb2ludHNQYWdlXCIsXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRhYjogXCJ0cmFuc2FjdGlvblwiLFxuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICBsb2FkaW5nX2JhbGFuY2U6IHRydWUsXG4gICAgICBkYXRhOiBbXSxcbiAgICAgIHBhZ2U6IDAsXG4gICAgICBpc19yZWZyZXNoOiB1bmRlZmluZWQsXG4gICAgICBtZXJjaGFudF9yZWZyZXNoOiB1bmRlZmluZWQsXG4gICAgICBiYWxhbmNlOiAwLFxuICAgICAgbG9hZGluZ19tZXJjaGFudDogZmFsc2UsXG4gICAgICBkYXRhX21lcmNoYW50OiBbXSxcbiAgICAgIHBhZ2VfbWVyY2hhbnQ6IDAsXG4gICAgfTtcbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLmdldEF2YWlsYWJsZVBvaW50cygpO1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGhhc0RhdGEoKSB7XG4gICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5kYXRhKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgaGFzRGF0YU1lcmNoYW50KCkge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZGF0YV9tZXJjaGFudCkubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgdGFiQ2hhbmdlKGRhdGEpIHtcbiAgICAgIGlmIChkYXRhID09IFwidHJhbnNhY3Rpb25cIikge1xuICAgICAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGF0YV9tZXJjaGFudCA9IFtdO1xuICAgICAgfVxuICAgIH0sXG4gICAgZ2V0QXZhaWxhYmxlUG9pbnRzKCkge1xuICAgICAgdGhpcy5sb2FkaW5nX2JhbGFuY2UgPSB0cnVlO1xuICAgICAgQVBJaW50ZXJmYWNlLmZldGNoRGF0YUJ5VG9rZW5Qb3N0KFwiZ2V0QXZhaWxhYmxlUG9pbnRzXCIpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEuY29kZSA9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLmJhbGFuY2UgPSBkYXRhLmRldGFpbHMudG90YWw7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYmFsYW5jZSA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7fSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmdfYmFsYW5jZSA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGdldFBvaW50c1RyYW5zYWN0aW9uKGluZGV4LCBkb25lKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5wYWdlID0gaW5kZXg7XG5cbiAgICAgIEFQSWludGVyZmFjZS5mZXRjaERhdGFCeVRva2VuUG9zdChcImdldFBvaW50c1RyYW5zYWN0aW9uXCIsIFwicGFnZT1cIiArIGluZGV4KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgIGlmIChkYXRhLmNvZGUgPT0gMSkge1xuICAgICAgICAgICAgdGhpcy5kYXRhLnB1c2goZGF0YS5kZXRhaWxzLmRhdGEpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiRyZWZzLm5zY3JvbGwuc3RvcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLiRyZWZzLm5zY3JvbGwpIHtcbiAgICAgICAgICAgIHRoaXMuJHJlZnMubnNjcm9sbC5zdG9wKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgICBpZiAoIUFQSWludGVyZmFjZS5lbXB0eSh0aGlzLmlzX3JlZnJlc2gpKSB7XG4gICAgICAgICAgICB0aGlzLmlzX3JlZnJlc2goKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgcmVmcmVzaChkb25lKSB7XG4gICAgICBpZiAodGhpcy50YWIgPT0gXCJ0cmFuc2FjdGlvblwiKSB7XG4gICAgICAgIHRoaXMucmVzZXRQYWdlKCk7XG4gICAgICAgIHRoaXMuaXNfcmVmcmVzaCA9IGRvbmU7XG4gICAgICAgIHRoaXMuZ2V0QXZhaWxhYmxlUG9pbnRzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlc2V0UGFnaW5hdGlvbjIoKTtcbiAgICAgICAgdGhpcy5tZXJjaGFudF9yZWZyZXNoID0gZG9uZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHJlc2V0UGFnZSgpIHtcbiAgICAgIHRoaXMucmVzZXRQYWdpbmF0aW9uKCk7XG4gICAgfSxcbiAgICByZXNldFBhZ2luYXRpb24oKSB7XG4gICAgICB0aGlzLnBhZ2UgPSAwO1xuICAgICAgdGhpcy5kYXRhID0gW107XG4gICAgICB0aGlzLiRyZWZzLm5zY3JvbGwucmVzZXQoKTtcbiAgICAgIHRoaXMuJHJlZnMubnNjcm9sbC5yZXN1bWUoKTtcbiAgICAgIHRoaXMuJHJlZnMubnNjcm9sbC50cmlnZ2VyKCk7XG4gICAgfSxcbiAgICByZXNldFBhZ2luYXRpb24yKCkge1xuICAgICAgdGhpcy5wYWdlX21lcmNoYW50ID0gMDtcbiAgICAgIHRoaXMuZGF0YV9tZXJjaGFudCA9IFtdO1xuICAgICAgdGhpcy4kcmVmcy5tZXJjaGFudFNjcm9sbC5yZXNldCgpO1xuICAgICAgdGhpcy4kcmVmcy5tZXJjaGFudFNjcm9sbC5yZXN1bWUoKTtcbiAgICAgIHRoaXMuJHJlZnMubWVyY2hhbnRTY3JvbGwudHJpZ2dlcigpO1xuICAgIH0sXG4gICAgZ2V0UG9pbnRzVHJhbnNhY3Rpb25NZXJjaGFudChpbmRleCwgZG9uZSkge1xuICAgICAgdGhpcy5sb2FkaW5nX21lcmNoYW50ID0gdHJ1ZTtcbiAgICAgIHRoaXMucGFnZV9tZXJjaGFudCA9IGluZGV4O1xuXG4gICAgICBBUElpbnRlcmZhY2UuZmV0Y2hEYXRhQnlUb2tlblBvc3QoXG4gICAgICAgIFwiZ2V0UG9pbnRzVHJhbnNhY3Rpb25NZXJjaGFudFwiLFxuICAgICAgICBcInBhZ2U9XCIgKyBpbmRleFxuICAgICAgKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgIGlmIChkYXRhLmNvZGUgPT0gMSkge1xuICAgICAgICAgICAgdGhpcy5kYXRhX21lcmNoYW50LnB1c2goZGF0YS5kZXRhaWxzLmRhdGEpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiRyZWZzLm1lcmNoYW50U2Nyb2xsLnN0b3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy4kcmVmcy5tZXJjaGFudFNjcm9sbCkge1xuICAgICAgICAgICAgdGhpcy4kcmVmcy5tZXJjaGFudFNjcm9sbC5zdG9wKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZ19tZXJjaGFudCA9IGZhbHNlO1xuICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgICBpZiAoIUFQSWludGVyZmFjZS5lbXB0eSh0aGlzLm1lcmNoYW50X3JlZnJlc2gpKSB7XG4gICAgICAgICAgICB0aGlzLm1lcmNoYW50X3JlZnJlc2goKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX2NyZWF0ZUJsb2NrIiwiX2NyZWF0ZVZOb2RlIiwiX25vcm1hbGl6ZUNsYXNzIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfRnJhZ21lbnQiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX29wZW5CbG9jayIsIl9yZW5kZXJMaXN0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
