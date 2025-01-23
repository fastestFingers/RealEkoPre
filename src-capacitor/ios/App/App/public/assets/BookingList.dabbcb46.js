import { _ as _export_sfc, R as useDataStore, m as APIinterface, p as openBlock, V as createElementBlock, f as createVNode, t as withCtx, aB as QDialog, F as Fragment, a7 as normalizeClass, Y as QBtn, a6 as createTextVNode, Z as toDisplayString, U as createBaseVNode, q as createBlock, at as QIcon, X as renderList, aA as createCommentVNode, a8 as QCard, a9 as QCardSection, aY as QInput, ac as QItem, ae as QAvatar, ad as QItemSection, b4 as normalizeStyle, b2 as QSeparator } from "./index.61ed5618.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QSkeleton } from "./QSkeleton.39737398.js";
import { Q as QTab } from "./QTab.8fcc65d0.js";
import { Q as QTabs } from "./QTabs.2f5e29cb.js";
import { Q as QSpace } from "./QSpace.f164c087.js";
import { Q as QImg } from "./QImg.6c27044c.js";
import { Q as QItemLabel } from "./QItemLabel.a9365c5b.js";
import { Q as QBadge } from "./QBadge.6d32ed43.js";
import { Q as QList } from "./QList.b69a7e5b.js";
import { Q as QInnerLoading } from "./QInnerLoading.abe2afe6.js";
import { Q as QSpinnerDots } from "./QSpinnerDots.a9d9851d.js";
import { Q as QInfiniteScroll } from "./QInfiniteScroll.3e160277.js";
import { Q as QPageScroller } from "./QPageScroller.2c709c91.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import { Q as QPullToRefresh } from "./QPullToRefresh.3d10c02d.js";
import { Q as QForm } from "./QForm.7ded9d38.js";
/* empty css                     */import { u as useBookingStore } from "./BookingStore.34c084df.js";
import "./QResizeObserver.d08dce3c.js";
import "./rtl.f3ed811c.js";
import "./use-page-sticky.447afe02.js";
import "./touch.96e0ae37.js";
import "./selection.50b4cb0c.js";
import "./format.7f7370d3.js";
const _sfc_main = {
  name: "BookingList",
  setup() {
    const DataStore = useDataStore();
    const BookingStore = useBookingStore();
    return { DataStore, BookingStore };
  },
  data() {
    return {
      dialog: false,
      loading: false,
      status: [],
      tabs: "all",
      data: [],
      merchant: [],
      table_list: [],
      page: 0,
      is_refresh: void 0,
      q: ""
    };
  },
  created() {
    this.BookingStore.getBookingSummary();
  },
  watch: {
    tabs(newval, oldval) {
      console.log(newval);
      this.resetPage();
    }
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
      this.resetPage();
      this.is_refresh = done;
    },
    resetPage() {
      this.resetPagination();
    },
    resetPagination() {
      this.page = 0;
      this.data = [];
      this.merchant = [];
      this.table_list = [];
      this.$refs.nscroll.reset();
      this.$refs.nscroll.resume();
      this.$refs.nscroll.trigger();
    },
    BookingList(index, done) {
      this.loading = true;
      this.page = index;
      APIinterface.fetchDataPostTable2(
        "BookingList",
        "page=" + index + "&status=" + this.tabs
      ).then((data) => {
        if (data.code == 1) {
          this.data.push(data.details.data);
          this.merchant = data.details.merchant;
          this.table_list = data.details.table_list;
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
    onSubmit() {
      this.$router.push({ path: "/booking/search", query: { q: this.q } });
    }
  }
};
const _hoisted_1 = { class: "q-pa-md bg-grey-1 q-mb-sm radius8" };
const _hoisted_2 = { class: "row items-center q-gutter-md" };
const _hoisted_3 = { class: "col" };
const _hoisted_4 = { class: "no-margin" };
const _hoisted_5 = /* @__PURE__ */ createTextVNode("0");
const _hoisted_6 = { class: "font12 no-margin" };
const _hoisted_7 = { class: "border-dark-grey radius28" };
const _hoisted_8 = {
  key: 0,
  class: "flex flex-center",
  style: { "min-height": "300px" }
};
const _hoisted_9 = { class: "text-grey" };
const _hoisted_10 = {
  key: 0,
  class: "q-pa-xl"
};
const _hoisted_11 = {
  key: 1,
  class: "row justify-center absolute-bottom"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(QPullToRefresh, { onRefresh: $options.refresh }, {
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
                    createTextVNode(toDisplayString(_ctx.$t("Bookings")), 1)
                  ]),
                  _: 1
                }),
                createVNode(QBtn, {
                  flat: "",
                  round: "",
                  dense: "",
                  icon: "search",
                  color: "grey",
                  onClick: _cache[1] || (_cache[1] = ($event) => $data.dialog = !$data.dialog)
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["class"]),
        createVNode(QPage, { class: "q-pl-md q-pr-md" }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_1, [
              createBaseVNode("div", _hoisted_2, [
                createBaseVNode("div", null, [
                  $setup.BookingStore.summary_loading ? (openBlock(), createBlock(QSkeleton, {
                    key: 0,
                    type: "QAvatar"
                  })) : (openBlock(), createBlock(QIcon, {
                    key: 1,
                    color: "grey-4",
                    name: "table_restaurant",
                    style: { "font-size": "60px" }
                  }))
                ]),
                createBaseVNode("div", _hoisted_3, [
                  $setup.BookingStore.summary_loading ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    createVNode(QSkeleton, {
                      type: "text",
                      class: "text-subtitle1"
                    }),
                    createVNode(QSkeleton, {
                      type: "text",
                      width: "50%",
                      class: "text-subtitle1"
                    })
                  ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    createBaseVNode("h4", _hoisted_4, [
                      $setup.BookingStore.getSummary.total_reservation ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                        createTextVNode(toDisplayString($setup.BookingStore.getSummary.total_reservation), 1)
                      ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                        _hoisted_5
                      ], 64))
                    ]),
                    createBaseVNode("p", _hoisted_6, toDisplayString(_ctx.$t("Total Bookings")), 1)
                  ], 64))
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_7, [
              createVNode(QTabs, {
                modelValue: $data.tabs,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.tabs = $event),
                class: "text-grey bigtabs",
                "active-color": "primary",
                "indicator-color": "primary",
                align: "justify",
                "narrow-indicator": "",
                "no-caps": ""
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList($setup.DataStore.getBookingStatusList, (items, index) => {
                    return openBlock(), createBlock(QTab, {
                      key: items,
                      name: index,
                      label: items
                    }, null, 8, ["name", "label"]);
                  }), 128))
                ]),
                _: 1
              }, 8, ["modelValue"])
            ]),
            createVNode(QSpace, { class: "q-pa-sm" }),
            !$options.hasData && !$data.loading ? (openBlock(), createElementBlock("div", _hoisted_8, [
              createBaseVNode("p", _hoisted_9, toDisplayString(_ctx.$t("No data available")), 1)
            ])) : createCommentVNode("", true),
            createVNode(QInfiniteScroll, {
              ref: "nscroll",
              onLoad: $options.BookingList,
              offset: 250
            }, {
              loading: withCtx(() => [
                $data.page <= 1 ? (openBlock(), createElementBlock("div", _hoisted_10, [
                  createVNode(QInnerLoading, {
                    showing: true,
                    color: "primary",
                    size: "md",
                    "label-class": "dark",
                    class: "transparent"
                  })
                ])) : $data.page > 2 ? (openBlock(), createElementBlock("div", _hoisted_11, [
                  createVNode(QSpinnerDots, {
                    color: "secondary",
                    size: "40px"
                  })
                ])) : createCommentVNode("", true)
              ]),
              default: withCtx(() => [
                createVNode(QList, null, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList($data.data, (datas) => {
                      return openBlock(), createElementBlock(Fragment, { key: datas }, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(datas, (items) => {
                          return openBlock(), createElementBlock(Fragment, {
                            key: items.reservation_id
                          }, [
                            createVNode(QItem, {
                              clickable: "",
                              to: {
                                path: "/booking/track",
                                query: {
                                  id: items.reservation_uuid
                                }
                              }
                            }, {
                              default: withCtx(() => [
                                $data.merchant[items.merchant_id] ? (openBlock(), createBlock(QItemSection, {
                                  key: 0,
                                  avatar: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(QAvatar, {
                                      square: "",
                                      class: "rounded-borders"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(QImg, {
                                          src: $data.merchant[items.merchant_id].url_logo,
                                          "spinner-size": "xs",
                                          "spinner-color": "primary",
                                          style: { "width": "80px", "height": "80px" },
                                          fit: "cover"
                                        }, null, 8, ["src"])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true),
                                createVNode(QItemSection, null, {
                                  default: withCtx(() => [
                                    $data.merchant[items.merchant_id] ? (openBlock(), createBlock(QItemLabel, { key: 0 }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString($data.merchant[items.merchant_id].restaurant_name), 1)
                                      ]),
                                      _: 2
                                    }, 1024)) : createCommentVNode("", true),
                                    createVNode(QItemLabel, { caption: "" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(items.booking_id), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(QItemLabel, {
                                      caption: "",
                                      class: "font11"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(items.reservation_date_raw), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(QItemSection, { side: "" }, {
                                  default: withCtx(() => [
                                    createVNode(QBadge, {
                                      rounded: "",
                                      label: items.status,
                                      style: normalizeStyle({
                                        "background-color": `${items.status_color.background}`,
                                        color: `${items.status_color.color}`
                                      })
                                    }, null, 8, ["label", "style"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["to"]),
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
                  color: "mygrey",
                  "text-color": "dark",
                  dense: "",
                  padding: "3px"
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["onRefresh"]),
    createVNode(QDialog, {
      modelValue: $data.dialog,
      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.dialog = $event),
      position: "top",
      "full-width": "",
      "transition-show": "fade",
      "transition-hide": "fade"
    }, {
      default: withCtx(() => [
        createVNode(QCard, null, {
          default: withCtx(() => [
            createVNode(QCardSection, null, {
              default: withCtx(() => [
                createVNode(QForm, { onSubmit: $options.onSubmit }, {
                  default: withCtx(() => [
                    createVNode(QInput, {
                      modelValue: $data.q,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.q = $event),
                      label: _ctx.$t("Search Booking"),
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
        })
      ]),
      _: 1
    }, 8, ["modelValue"])
  ], 64);
}
var BookingList = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "BookingList.vue"]]);
export { BookingList as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9va2luZ0xpc3QuZGFiYmNiNDYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9Cb29raW5nL0Jvb2tpbmdMaXN0LnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLXB1bGwtdG8tcmVmcmVzaCBAcmVmcmVzaD1cInJlZnJlc2hcIj5cbiAgICA8cS1oZWFkZXJcbiAgICAgIHJldmVhbFxuICAgICAgcmV2ZWFsLW9mZnNldD1cIjUwXCJcbiAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgJ2JnLW15ZGFyayB0ZXh0LXdoaXRlJzogJHEuZGFyay5tb2RlLFxuICAgICAgICAnYmctd2hpdGUgdGV4dC1kYXJrJzogISRxLmRhcmsubW9kZSxcbiAgICAgIH1cIlxuICAgID5cbiAgICAgIDxxLXRvb2xiYXI+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIEBjbGljaz1cIiRyb3V0ZXIuYmFjaygpXCJcbiAgICAgICAgICBmbGF0XG4gICAgICAgICAgcm91bmRcbiAgICAgICAgICBkZW5zZVxuICAgICAgICAgIGljb249XCJsYXMgbGEtYW5nbGUtbGVmdFwiXG4gICAgICAgICAgY2xhc3M9XCJxLW1yLXNtXCJcbiAgICAgICAgICA6Y29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnd2hpdGUnIDogJ2RhcmsnXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHEtdG9vbGJhci10aXRsZSBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGRcIj57e1xuICAgICAgICAgICR0KFwiQm9va2luZ3NcIilcbiAgICAgICAgfX08L3EtdG9vbGJhci10aXRsZT5cblxuICAgICAgICA8cS1idG5cbiAgICAgICAgICBmbGF0XG4gICAgICAgICAgcm91bmRcbiAgICAgICAgICBkZW5zZVxuICAgICAgICAgIGljb249XCJzZWFyY2hcIlxuICAgICAgICAgIGNvbG9yPVwiZ3JleVwiXG4gICAgICAgICAgQGNsaWNrPVwiZGlhbG9nID0gIWRpYWxvZ1wiXG4gICAgICAgIC8+XG4gICAgICA8L3EtdG9vbGJhcj5cbiAgICA8L3EtaGVhZGVyPlxuICAgIDxxLXBhZ2UgY2xhc3M9XCJxLXBsLW1kIHEtcHItbWRcIj5cbiAgICAgIDwhLS0gUE9JTlRTIEJBTEFOQ0UgLS0+XG4gICAgICA8ZGl2IGNsYXNzPVwicS1wYS1tZCBiZy1ncmV5LTEgcS1tYi1zbSByYWRpdXM4XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgaXRlbXMtY2VudGVyIHEtZ3V0dGVyLW1kXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxxLXNrZWxldG9uIHR5cGU9XCJRQXZhdGFyXCIgdi1pZj1cIkJvb2tpbmdTdG9yZS5zdW1tYXJ5X2xvYWRpbmdcIiAvPlxuICAgICAgICAgICAgPHEtaWNvblxuICAgICAgICAgICAgICB2LWVsc2VcbiAgICAgICAgICAgICAgY29sb3I9XCJncmV5LTRcIlxuICAgICAgICAgICAgICBuYW1lPVwidGFibGVfcmVzdGF1cmFudFwiXG4gICAgICAgICAgICAgIHN0eWxlPVwiZm9udC1zaXplOiA2MHB4XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJCb29raW5nU3RvcmUuc3VtbWFyeV9sb2FkaW5nXCI+XG4gICAgICAgICAgICAgIDxxLXNrZWxldG9uIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMVwiIC8+XG4gICAgICAgICAgICAgIDxxLXNrZWxldG9uIHR5cGU9XCJ0ZXh0XCIgd2lkdGg9XCI1MCVcIiBjbGFzcz1cInRleHQtc3VidGl0bGUxXCIgLz5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJuby1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIkJvb2tpbmdTdG9yZS5nZXRTdW1tYXJ5LnRvdGFsX3Jlc2VydmF0aW9uXCI+XG4gICAgICAgICAgICAgICAgICB7eyBCb29raW5nU3RvcmUuZ2V0U3VtbWFyeS50b3RhbF9yZXNlcnZhdGlvbiB9fVxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT4wPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmb250MTIgbm8tbWFyZ2luXCI+e3sgJHQoXCJUb3RhbCBCb29raW5nc1wiKSB9fTwvcD5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8IS0tIFBPSU5UUyBCQUxBTkNFIC0tPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiYm9yZGVyLWRhcmstZ3JleSByYWRpdXMyOFwiPlxuICAgICAgICA8cS10YWJzXG4gICAgICAgICAgdi1tb2RlbD1cInRhYnNcIlxuICAgICAgICAgIGNsYXNzPVwidGV4dC1ncmV5IGJpZ3RhYnNcIlxuICAgICAgICAgIGFjdGl2ZS1jb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIGluZGljYXRvci1jb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIGFsaWduPVwianVzdGlmeVwiXG4gICAgICAgICAgbmFycm93LWluZGljYXRvclxuICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgPlxuICAgICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgICAgdi1mb3I9XCIoaXRlbXMsIGluZGV4KSBpbiBEYXRhU3RvcmUuZ2V0Qm9va2luZ1N0YXR1c0xpc3RcIlxuICAgICAgICAgICAgOmtleT1cIml0ZW1zXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cS10YWIgOm5hbWU9XCJpbmRleFwiIDpsYWJlbD1cIml0ZW1zXCIgLz5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3EtdGFicz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8cS1zcGFjZSBjbGFzcz1cInEtcGEtc21cIj48L3Etc3BhY2U+XG5cbiAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiIWhhc0RhdGEgJiYgIWxvYWRpbmdcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jZW50ZXJcIiBzdHlsZT1cIm1pbi1oZWlnaHQ6IDMwMHB4XCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWdyZXlcIj57eyAkdChcIk5vIGRhdGEgYXZhaWxhYmxlXCIpIH19PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgIDxxLWluZmluaXRlLXNjcm9sbCByZWY9XCJuc2Nyb2xsXCIgQGxvYWQ9XCJCb29raW5nTGlzdFwiIDpvZmZzZXQ9XCIyNTBcIj5cbiAgICAgICAgPHEtbGlzdD5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJkYXRhcyBpbiBkYXRhXCIgOmtleT1cImRhdGFzXCI+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJpdGVtcyBpbiBkYXRhc1wiIDprZXk9XCJpdGVtcy5yZXNlcnZhdGlvbl9pZFwiPlxuICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgOnRvPVwie1xuICAgICAgICAgICAgICAgICAgcGF0aDogJy9ib29raW5nL3RyYWNrJyxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtcy5yZXNlcnZhdGlvbl91dWlkLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXIgdi1pZj1cIm1lcmNoYW50W2l0ZW1zLm1lcmNoYW50X2lkXVwiPlxuICAgICAgICAgICAgICAgICAgPHEtYXZhdGFyIHNxdWFyZSBjbGFzcz1cInJvdW5kZWQtYm9yZGVyc1wiPlxuICAgICAgICAgICAgICAgICAgICA8cS1pbWdcbiAgICAgICAgICAgICAgICAgICAgICA6c3JjPVwibWVyY2hhbnRbaXRlbXMubWVyY2hhbnRfaWRdLnVybF9sb2dvXCJcbiAgICAgICAgICAgICAgICAgICAgICBzcGlubmVyLXNpemU9XCJ4c1wiXG4gICAgICAgICAgICAgICAgICAgICAgc3Bpbm5lci1jb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDgwcHg7IGhlaWdodDogODBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgZml0PVwiY292ZXJcIlxuICAgICAgICAgICAgICAgICAgICA+PC9xLWltZz5cbiAgICAgICAgICAgICAgICAgIDwvcS1hdmF0YXI+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIHYtaWY9XCJtZXJjaGFudFtpdGVtcy5tZXJjaGFudF9pZF1cIj5cbiAgICAgICAgICAgICAgICAgICAge3sgbWVyY2hhbnRbaXRlbXMubWVyY2hhbnRfaWRdLnJlc3RhdXJhbnRfbmFtZSB9fVxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24+e3sgaXRlbXMuYm9va2luZ19pZCB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uIGNsYXNzPVwiZm9udDExXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IGl0ZW1zLnJlc2VydmF0aW9uX2RhdGVfcmF3IH19XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlPlxuICAgICAgICAgICAgICAgICAgPHEtYmFkZ2VcbiAgICAgICAgICAgICAgICAgICAgcm91bmRlZFxuICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCJpdGVtcy5zdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICA6c3R5bGU9XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiBgJHtpdGVtcy5zdGF0dXNfY29sb3IuYmFja2dyb3VuZH1gLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBgJHtpdGVtcy5zdGF0dXNfY29sb3IuY29sb3J9YCxcbiAgICAgICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICA8cS1zZXBhcmF0b3Igc3BhY2VkIGluc2V0IC8+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvcS1saXN0PlxuXG4gICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6bG9hZGluZz5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cInBhZ2UgPD0gMVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInEtcGEteGxcIj5cbiAgICAgICAgICAgICAgPHEtaW5uZXItbG9hZGluZ1xuICAgICAgICAgICAgICAgIDpzaG93aW5nPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgICAgICAgIGxhYmVsLWNsYXNzPVwiZGFya1wiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDxkaXYgdi1lbHNlLWlmPVwicGFnZSA+IDJcIiBjbGFzcz1cInJvdyBqdXN0aWZ5LWNlbnRlciBhYnNvbHV0ZS1ib3R0b21cIj5cbiAgICAgICAgICAgIDxxLXNwaW5uZXItZG90cyBjb2xvcj1cInNlY29uZGFyeVwiIHNpemU9XCI0MHB4XCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvcS1pbmZpbml0ZS1zY3JvbGw+XG5cbiAgICAgIDxxLXBhZ2Utc2Nyb2xsZXJcbiAgICAgICAgcG9zaXRpb249XCJib3R0b20tcmlnaHRcIlxuICAgICAgICA6c2Nyb2xsLW9mZnNldD1cIjE1MFwiXG4gICAgICAgIDpvZmZzZXQ9XCJbMTgsIDE4XVwiXG4gICAgICA+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIGZhYlxuICAgICAgICAgIGljb249XCJrZXlib2FyZF9hcnJvd191cFwiXG4gICAgICAgICAgY29sb3I9XCJteWdyZXlcIlxuICAgICAgICAgIHRleHQtY29sb3I9XCJkYXJrXCJcbiAgICAgICAgICBkZW5zZVxuICAgICAgICAgIHBhZGRpbmc9XCIzcHhcIlxuICAgICAgICAvPlxuICAgICAgPC9xLXBhZ2Utc2Nyb2xsZXI+XG4gICAgPC9xLXBhZ2U+XG4gIDwvcS1wdWxsLXRvLXJlZnJlc2g+XG5cbiAgPHEtZGlhbG9nXG4gICAgdi1tb2RlbD1cImRpYWxvZ1wiXG4gICAgcG9zaXRpb249XCJ0b3BcIlxuICAgIGZ1bGwtd2lkdGhcbiAgICB0cmFuc2l0aW9uLXNob3c9XCJmYWRlXCJcbiAgICB0cmFuc2l0aW9uLWhpZGU9XCJmYWRlXCJcbiAgPlxuICAgIDxxLWNhcmQ+XG4gICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDxxLWZvcm0gQHN1Ym1pdD1cIm9uU3VibWl0XCI+XG4gICAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICAgIHYtbW9kZWw9XCJxXCJcbiAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdTZWFyY2ggQm9va2luZycpXCJcbiAgICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgICBsYXp5LXJ1bGVzXG4gICAgICAgICAgICA6YmctY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTYwMCcgOiAnaW5wdXQnXCJcbiAgICAgICAgICAgIDpsYWJlbC1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICdncmV5J1wiXG4gICAgICAgICAgICBib3JkZXJsZXNzXG4gICAgICAgICAgICBjbGFzcz1cImlucHV0LWJvcmRlcmxlc3MgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6YXBwZW5kPlxuICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJvblN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgcm91bmRcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgICBpY29uPVwiZXZhLXNlYXJjaC1vdXRsaW5lXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9xLWlucHV0PlxuICAgICAgICA8L3EtZm9ybT5cbiAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgPC9xLWNhcmQ+XG4gIDwvcS1kaWFsb2c+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEFQSWludGVyZmFjZSBmcm9tIFwic3JjL2FwaS9BUElpbnRlcmZhY2VcIjtcbmltcG9ydCBcInN3aXBlci9jc3NcIjtcbmltcG9ydCB7IHVzZURhdGFTdG9yZSB9IGZyb20gXCJzdG9yZXMvRGF0YVN0b3JlXCI7XG5pbXBvcnQgeyB1c2VCb29raW5nU3RvcmUgfSBmcm9tIFwic3RvcmVzL0Jvb2tpbmdTdG9yZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiQm9va2luZ0xpc3RcIixcbiAgc2V0dXAoKSB7XG4gICAgY29uc3QgRGF0YVN0b3JlID0gdXNlRGF0YVN0b3JlKCk7XG4gICAgY29uc3QgQm9va2luZ1N0b3JlID0gdXNlQm9va2luZ1N0b3JlKCk7XG4gICAgcmV0dXJuIHsgRGF0YVN0b3JlLCBCb29raW5nU3RvcmUgfTtcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGlhbG9nOiBmYWxzZSxcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgc3RhdHVzOiBbXSxcbiAgICAgIHRhYnM6IFwiYWxsXCIsXG4gICAgICBkYXRhOiBbXSxcbiAgICAgIG1lcmNoYW50OiBbXSxcbiAgICAgIHRhYmxlX2xpc3Q6IFtdLFxuICAgICAgcGFnZTogMCxcbiAgICAgIGlzX3JlZnJlc2g6IHVuZGVmaW5lZCxcbiAgICAgIHE6IFwiXCIsXG4gICAgfTtcbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLkJvb2tpbmdTdG9yZS5nZXRCb29raW5nU3VtbWFyeSgpO1xuICB9LFxuICB3YXRjaDoge1xuICAgIHRhYnMobmV3dmFsLCBvbGR2YWwpIHtcbiAgICAgIGNvbnNvbGUubG9nKG5ld3ZhbCk7XG4gICAgICB0aGlzLnJlc2V0UGFnZSgpO1xuICAgIH0sXG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgaGFzRGF0YSgpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmRhdGEpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHJlZnJlc2goZG9uZSkge1xuICAgICAgdGhpcy5yZXNldFBhZ2UoKTtcbiAgICAgIHRoaXMuaXNfcmVmcmVzaCA9IGRvbmU7XG4gICAgfSxcbiAgICByZXNldFBhZ2UoKSB7XG4gICAgICB0aGlzLnJlc2V0UGFnaW5hdGlvbigpO1xuICAgIH0sXG4gICAgcmVzZXRQYWdpbmF0aW9uKCkge1xuICAgICAgdGhpcy5wYWdlID0gMDtcbiAgICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgICAgdGhpcy5tZXJjaGFudCA9IFtdO1xuICAgICAgdGhpcy50YWJsZV9saXN0ID0gW107XG4gICAgICB0aGlzLiRyZWZzLm5zY3JvbGwucmVzZXQoKTtcbiAgICAgIHRoaXMuJHJlZnMubnNjcm9sbC5yZXN1bWUoKTtcbiAgICAgIHRoaXMuJHJlZnMubnNjcm9sbC50cmlnZ2VyKCk7XG4gICAgfSxcbiAgICBCb29raW5nTGlzdChpbmRleCwgZG9uZSkge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMucGFnZSA9IGluZGV4O1xuICAgICAgQVBJaW50ZXJmYWNlLmZldGNoRGF0YVBvc3RUYWJsZTIoXG4gICAgICAgIFwiQm9va2luZ0xpc3RcIixcbiAgICAgICAgXCJwYWdlPVwiICsgaW5kZXggKyBcIiZzdGF0dXM9XCIgKyB0aGlzLnRhYnNcbiAgICAgIClcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YS5jb2RlID09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5wdXNoKGRhdGEuZGV0YWlscy5kYXRhKTtcbiAgICAgICAgICAgIHRoaXMubWVyY2hhbnQgPSBkYXRhLmRldGFpbHMubWVyY2hhbnQ7XG4gICAgICAgICAgICB0aGlzLnRhYmxlX2xpc3QgPSBkYXRhLmRldGFpbHMudGFibGVfbGlzdDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kcmVmcy5uc2Nyb2xsLnN0b3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy4kcmVmcy5uc2Nyb2xsKSB7XG4gICAgICAgICAgICB0aGlzLiRyZWZzLm5zY3JvbGwuc3RvcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBkb25lKCk7XG4gICAgICAgICAgaWYgKCFBUElpbnRlcmZhY2UuZW1wdHkodGhpcy5pc19yZWZyZXNoKSkge1xuICAgICAgICAgICAgdGhpcy5pc19yZWZyZXNoKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIG9uU3VibWl0KCkge1xuICAgICAgLy90aGlzLiRyb3V0ZXIucHVzaChcIi9ib29raW5nL3NlYXJjaFwiKTtcbiAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgcGF0aDogXCIvYm9va2luZy9zZWFyY2hcIiwgcXVlcnk6IHsgcTogdGhpcy5xIH0gfSk7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfY3JlYXRlVk5vZGUiLCJfbm9ybWFsaXplQ2xhc3MiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX2NyZWF0ZUJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9GcmFnbWVudCIsIl90b0Rpc3BsYXlTdHJpbmciLCJfb3BlbkJsb2NrIiwiX3JlbmRlckxpc3QiLCJfY3JlYXRlVGV4dFZOb2RlIiwiX25vcm1hbGl6ZVN0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyTkEsTUFBSyxZQUFVO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixRQUFRO0FBQ04sVUFBTSxZQUFZO0FBQ2xCLFVBQU0sZUFBZTtBQUNyQixXQUFPLEVBQUUsV0FBVztFQUNyQjtBQUFBLEVBQ0QsT0FBTztBQUNMLFdBQU87QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxNQUNULFFBQVEsQ0FBRTtBQUFBLE1BQ1YsTUFBTTtBQUFBLE1BQ04sTUFBTSxDQUFFO0FBQUEsTUFDUixVQUFVLENBQUU7QUFBQSxNQUNaLFlBQVksQ0FBRTtBQUFBLE1BQ2QsTUFBTTtBQUFBLE1BQ04sWUFBWTtBQUFBLE1BQ1osR0FBRztBQUFBO0VBRU47QUFBQSxFQUNELFVBQVU7QUFDUixTQUFLLGFBQWE7RUFDbkI7QUFBQSxFQUNELE9BQU87QUFBQSxJQUNMLEtBQUssUUFBUSxRQUFRO0FBQ25CLGNBQVEsSUFBSSxNQUFNO0FBQ2xCLFdBQUssVUFBUztBQUFBLElBQ2Y7QUFBQSxFQUNGO0FBQUEsRUFDRCxVQUFVO0FBQUEsSUFDUixVQUFVO0FBQ1IsVUFBSSxPQUFPLEtBQUssS0FBSyxJQUFJLEVBQUUsU0FBUyxHQUFHO0FBQ3JDLGVBQU87QUFBQSxNQUNUO0FBQ0EsYUFBTztBQUFBLElBQ1I7QUFBQSxFQUNGO0FBQUEsRUFDRCxTQUFTO0FBQUEsSUFDUCxRQUFRLE1BQU07QUFDWixXQUFLLFVBQVM7QUFDZCxXQUFLLGFBQWE7QUFBQSxJQUNuQjtBQUFBLElBQ0QsWUFBWTtBQUNWLFdBQUssZ0JBQWU7QUFBQSxJQUNyQjtBQUFBLElBQ0Qsa0JBQWtCO0FBQ2hCLFdBQUssT0FBTztBQUNaLFdBQUssT0FBTztBQUNaLFdBQUssV0FBVztBQUNoQixXQUFLLGFBQWE7QUFDbEIsV0FBSyxNQUFNLFFBQVE7QUFDbkIsV0FBSyxNQUFNLFFBQVE7QUFDbkIsV0FBSyxNQUFNLFFBQVE7SUFDcEI7QUFBQSxJQUNELFlBQVksT0FBTyxNQUFNO0FBQ3ZCLFdBQUssVUFBVTtBQUNmLFdBQUssT0FBTztBQUNaLG1CQUFhO0FBQUEsUUFDWDtBQUFBLFFBQ0EsVUFBVSxRQUFRLGFBQWEsS0FBSztBQUFBLE1BQ3RDLEVBQ0csS0FBSyxDQUFDLFNBQVM7QUFDZCxZQUFJLEtBQUssUUFBUSxHQUFHO0FBQ2xCLGVBQUssS0FBSyxLQUFLLEtBQUssUUFBUSxJQUFJO0FBQ2hDLGVBQUssV0FBVyxLQUFLLFFBQVE7QUFDN0IsZUFBSyxhQUFhLEtBQUssUUFBUTtBQUFBLGVBQzFCO0FBQ0wsZUFBSyxNQUFNLFFBQVE7UUFDckI7QUFBQSxPQUNELEVBQ0EsTUFBTSxDQUFDLFVBQVU7QUFDaEIsWUFBSSxLQUFLLE1BQU0sU0FBUztBQUN0QixlQUFLLE1BQU0sUUFBUTtRQUNyQjtBQUFBLE9BQ0QsRUFDQSxLQUFLLENBQUMsU0FBUztBQUNkLGFBQUssVUFBVTtBQUNmO0FBQ0EsWUFBSSxDQUFDLGFBQWEsTUFBTSxLQUFLLFVBQVUsR0FBRztBQUN4QyxlQUFLLFdBQVU7QUFBQSxRQUNqQjtBQUFBLE1BQ0YsQ0FBQztBQUFBLElBQ0o7QUFBQSxJQUNELFdBQVc7QUFFVCxXQUFLLFFBQVEsS0FBSyxFQUFFLE1BQU0sbUJBQW1CLE9BQU8sRUFBRSxHQUFHLEtBQUssRUFBQSxFQUFLLENBQUE7QUFBQSxJQUNwRTtBQUFBLEVBQ0Y7QUFDSDtBQWhSVyxNQUFBLGFBQUEsRUFBQSxPQUFNLG9DQUFtQztBQUN2QyxNQUFBLGFBQUEsRUFBQSxPQUFNLCtCQUE4QjtBQVVsQyxNQUFBLGFBQUEsRUFBQSxPQUFNLE1BQUs7QUFNUixNQUFBLGFBQUEsRUFBQSxPQUFNLFlBQVc7bURBSUYsR0FBQztBQUVqQixNQUFBLGFBQUEsRUFBQSxPQUFNLG1CQUFrQjtBQU85QixNQUFBLGFBQUEsRUFBQSxPQUFNLDRCQUEyQjs7O0VBc0IvQixPQUFNO0FBQUEsRUFBbUIsT0FBQSxFQUF5QixjQUFBLFFBQUE7O0FBQ2xELE1BQUEsYUFBQSxFQUFBLE9BQU0sWUFBVzs7O0VBdURiLE9BQU07Ozs7RUFVYSxPQUFNOzs7O0lBekp4Q0EsWUE4S29CLGdCQUFBLEVBQUEsV0FBQSxTQTlLTyxRQUFTLEdBQUE7QUFBQSx1QkFDbEMsTUErQlc7QUFBQSxRQS9CWEEsWUErQlcsU0FBQTtBQUFBLFVBOUJULFFBQUE7QUFBQSxVQUNBLGlCQUFjO0FBQUEsVUFDYixPQUFLQyxlQUFBO0FBQUEsb0NBQW9DLEtBQUUsR0FBQyxLQUFLO0FBQUEsbUNBQXFDLEtBQUUsR0FBQyxLQUFLO0FBQUE7OzJCQUsvRixNQXNCWTtBQUFBLFlBdEJaRCxZQXNCWSxVQUFBLE1BQUE7QUFBQSwrQkFyQlYsTUFRRTtBQUFBLGdCQVJGQSxZQVFFLE1BQUE7QUFBQSxrQkFQQyxTQUFLLE9BQUEsT0FBQSxPQUFBLEtBQUEsWUFBRSxLQUFPLFFBQUMsS0FBSTtBQUFBLGtCQUNwQixNQUFBO0FBQUEsa0JBQ0EsT0FBQTtBQUFBLGtCQUNBLE9BQUE7QUFBQSxrQkFDQSxNQUFLO0FBQUEsa0JBQ0wsT0FBTTtBQUFBLGtCQUNMLE9BQU8sS0FBQSxHQUFHLEtBQUssT0FBSSxVQUFBO0FBQUE7Z0JBRXRCQSxZQUVvQixlQUFBLEVBQUEsT0FBQSxtQkFGcUIsR0FBQTtBQUFBLG1DQUFDLE1BRXhDO0FBQUEsb0RBREEsS0FBRSxHQUFBLFVBQUEsQ0FBQSxHQUFBLENBQUE7QUFBQTs7O2dCQUdKQSxZQU9FLE1BQUE7QUFBQSxrQkFOQSxNQUFBO0FBQUEsa0JBQ0EsT0FBQTtBQUFBLGtCQUNBLE9BQUE7QUFBQSxrQkFDQSxNQUFLO0FBQUEsa0JBQ0wsT0FBTTtBQUFBLGtCQUNMLFNBQUssT0FBQSxPQUFBLE9BQUEsS0FBQSxZQUFFLE1BQU0sU0FBQSxDQUFJLE1BQU07QUFBQTs7Ozs7OztRQUk5QkEsWUE0SVMsT0FBQSxFQUFBLE9BQUEsa0JBNUlzQixHQUFBO0FBQUEsMkJBRTdCLE1BMkJNO0FBQUEsWUEzQk5FLGdCQTJCTSxPQTNCTixZQTJCTTtBQUFBLGNBMUJKQSxnQkF5Qk0sT0F6Qk4sWUF5Qk07QUFBQSxnQkF4QkpBLGdCQVFNLE9BQUEsTUFBQTtBQUFBLGtCQVA2QixPQUFBLGFBQWEsZ0NBQTlDQyxZQUFpRSxXQUFBO0FBQUE7b0JBQXJELE1BQUs7QUFBQSxzQ0FDakJBLFlBS0UsT0FBQTtBQUFBO29CQUhBLE9BQU07QUFBQSxvQkFDTixNQUFLO0FBQUEsb0JBQ0wsT0FBQSxFQUF1QixhQUFBLE9BQUE7QUFBQTs7Z0JBRzNCRCxnQkFjTSxPQWROLFlBY007QUFBQSxrQkFiWSxPQUFBLGFBQWEsZ0NBQTdCRSxtQkFHV0MsVUFBQSxFQUFBLEtBQUEsRUFBQSxHQUFBO0FBQUEsb0JBRlRMLFlBQWlELFdBQUE7QUFBQSxzQkFBckMsTUFBSztBQUFBLHNCQUFPLE9BQU07QUFBQTtvQkFDOUJBLFlBQTZELFdBQUE7QUFBQSxzQkFBakQsTUFBSztBQUFBLHNCQUFPLE9BQU07QUFBQSxzQkFBTSxPQUFNO0FBQUE7MENBRTVDSSxtQkFRV0MsVUFBQSxFQUFBLEtBQUEsRUFBQSxHQUFBO0FBQUEsb0JBUFRILGdCQUtLLE1BTEwsWUFLSztBQUFBLHNCQUphLE9BQVksYUFBQyxXQUFXLGtDQUF4Q0UsbUJBRVdDLFVBQUEsRUFBQSxLQUFBLEVBQUEsR0FBQTtBQUFBLHdEQUROLE9BQVksYUFBQyxXQUFXLGlCQUFpQixHQUFBLENBQUE7QUFBQSw4Q0FFOUNELG1CQUE2QkMsVUFBQSxFQUFBLEtBQUEsRUFBQSxHQUFBO0FBQUE7OztvQkFFL0JILGdCQUEwRCxLQUExRCxZQUEwREksZ0JBQTNCLEtBQUUsR0FBQSxnQkFBQSxDQUFBLEdBQUEsQ0FBQTtBQUFBOzs7O1lBT3pDSixnQkFpQk0sT0FqQk4sWUFpQk07QUFBQSxjQWhCSkYsWUFlUyxPQUFBO0FBQUEsNEJBZEUsTUFBSTtBQUFBLDZFQUFKLE1BQUksT0FBQTtBQUFBLGdCQUNiLE9BQU07QUFBQSxnQkFDTixnQkFBYTtBQUFBLGdCQUNiLG1CQUFnQjtBQUFBLGdCQUNoQixPQUFNO0FBQUEsZ0JBQ04sb0JBQUE7QUFBQSxnQkFDQSxXQUFBO0FBQUE7aUNBR0UsTUFBd0Q7QUFBQSxtQkFEMURPLFVBQUEsSUFBQSxHQUFBSCxtQkFLV0MsMkJBSmdCLE9BQVMsVUFBQyxzQkFBM0IsQ0FBQSxPQUFPLFVBQUs7d0NBR3BCRixZQUFzQyxNQUFBO0FBQUEsMkJBRmhDO0FBQUEsc0JBRUUsTUFBTTtBQUFBLHNCQUFRLE9BQU87QUFBQTs7Ozs7O1lBS25DSCxZQUFtQyxRQUFBLEVBQUEsT0FBQSxVQUFyQixDQUFBO0FBQUEsWUFFRyxDQUFBLFNBQUEsWUFBWSxNQUFPLFdBQ2xDTyxhQUFBSCxtQkFFTSxPQUZOLFlBRU07QUFBQSxjQURKRixnQkFBc0QsS0FBdEQsWUFBc0RJLGdCQUE5QixLQUFFLEdBQUEsbUJBQUEsQ0FBQSxHQUFBLENBQUE7QUFBQTtZQUk5Qk4sWUFpRW9CLGlCQUFBO0FBQUEsY0FqRUQsS0FBSTtBQUFBLGNBQVcsUUFBTSxTQUFXO0FBQUEsY0FBRyxRQUFRO0FBQUE7Y0FpRDNDLGlCQUNmLE1BVVc7QUFBQSxnQkFWSyxNQUFJLFFBQUEsS0FDbEJPLGFBQUFILG1CQVFNLE9BUk4sYUFRTTtBQUFBLGtCQVBKSixZQU1FLGVBQUE7QUFBQSxvQkFMQyxTQUFTO0FBQUEsb0JBQ1YsT0FBTTtBQUFBLG9CQUNOLE1BQUs7QUFBQSxvQkFDTCxlQUFZO0FBQUEsb0JBQ1osT0FBTTtBQUFBO3NCQUlJLE1BQUksT0FBQSxLQUFwQk8sYUFBQUgsbUJBRU0sT0FGTixhQUVNO0FBQUEsa0JBREpKLFlBQWdELGNBQUE7QUFBQSxvQkFBaEMsT0FBTTtBQUFBLG9CQUFZLE1BQUs7QUFBQTs7OytCQTdEM0MsTUE4Q1M7QUFBQSxnQkE5Q1RBLFlBOENTLE9BQUEsTUFBQTtBQUFBLG1DQTdDRyxNQUFxQjtBQUFBLHNDQUEvQkksbUJBNENXQyxVQUFBLE1BQUFHLFdBNUNlLE1BQUksTUFBQSxDQUFiLFVBQUs7OEVBQWdCLFNBQUs7QUFBQSwwQ0FDekNKLG1CQTBDV0MsVUFBQSxNQUFBRyxXQTFDZSxPQUFLLENBQWQsVUFBSzs7NEJBQWlCLEtBQUEsTUFBTTtBQUFBOzRCQUMzQ1IsWUF1Q1MsT0FBQTtBQUFBLDhCQXRDUCxXQUFBO0FBQUEsOEJBQ0MsSUFBRTtBQUFBOztrQ0FBaUcsSUFBQSxNQUFNO0FBQUE7OzsrQ0FPMUcsTUFVaUI7QUFBQSxnQ0FWWSxNQUFRLFNBQUMsTUFBTSw2QkFBNUNHLFlBVWlCLGNBQUE7QUFBQTtrQ0FWRCxRQUFBO0FBQUE7bURBQ2QsTUFRVztBQUFBLG9DQVJYSCxZQVFXLFNBQUE7QUFBQSxzQ0FSRCxRQUFBO0FBQUEsc0NBQU8sT0FBTTtBQUFBO3VEQUNyQixNQU1TO0FBQUEsd0NBTlRBLFlBTVMsTUFBQTtBQUFBLDBDQUxOLEtBQUssTUFBUSxTQUFDLE1BQU0sYUFBYTtBQUFBLDBDQUNsQyxnQkFBYTtBQUFBLDBDQUNiLGlCQUFjO0FBQUEsMENBQ2QsT0FBQSxFQUFpQyxTQUFBLFFBQUEsVUFBQSxPQUFBO0FBQUEsMENBQ2pDLEtBQUk7QUFBQTs7Ozs7OztnQ0FJVkEsWUFRaUIsY0FBQSxNQUFBO0FBQUEsbURBUGYsTUFFZTtBQUFBLG9DQUZLLE1BQVEsU0FBQyxNQUFNLDZCQUFuQ0csWUFFZSxZQUFBLEVBQUEsS0FBQSxFQUFBLEdBQUE7QUFBQSx1REFEYixNQUFpRDtBQUFBLHdDQUE5Q00sZ0JBQUFILGdCQUFBLE1BQUEsU0FBUyxNQUFNLGFBQWEsZUFBZSxHQUFBLENBQUE7QUFBQTs7O29DQUVoRE4sWUFBMkQsWUFBQSxFQUFBLFNBQUEsR0FBQSxHQUF0QztBQUFBLHVEQUFDLE1BQXNCO0FBQUEsd0NBQW5CUyxnQkFBQUgsZ0JBQUEsTUFBTSxVQUFVLEdBQUEsQ0FBQTtBQUFBOzs7b0NBQ3pDTixZQUVlLFlBQUE7QUFBQSxzQ0FGRCxTQUFBO0FBQUEsc0NBQVEsT0FBTTtBQUFBO3VEQUMxQixNQUFnQztBQUFBLHdDQUE3QlMsZ0JBQUFILGdCQUFBLE1BQU0sb0JBQW9CLEdBQUEsQ0FBQTtBQUFBOzs7Ozs7Z0NBR2pDTixZQVNpQixjQUFBLEVBQUEsTUFBQSxHQUFBLEdBQUE7QUFBQSxtREFSZixNQU9FO0FBQUEsb0NBUEZBLFlBT0UsUUFBQTtBQUFBLHNDQU5BLFNBQUE7QUFBQSxzQ0FDQyxPQUFPLE1BQU07QUFBQSxzQ0FDYixPQUFLVSxlQUFBO0FBQUEsK0RBQWlELE1BQU0sYUFBYTtBQUFBLGtEQUE4QyxNQUFNLGFBQWE7QUFBQTs7Ozs7Ozs7NEJBT2pKVixZQUE0QixZQUFBO0FBQUEsOEJBQWYsUUFBQTtBQUFBLDhCQUFPLE9BQUE7QUFBQTs7Ozs7Ozs7Ozs7WUF1QjVCQSxZQWFrQixlQUFBO0FBQUEsY0FaaEIsVUFBUztBQUFBLGNBQ1IsaUJBQWU7QUFBQSxjQUNmLFFBQVEsQ0FBUSxJQUFBLEVBQUE7QUFBQTsrQkFFakIsTUFPRTtBQUFBLGdCQVBGQSxZQU9FLE1BQUE7QUFBQSxrQkFOQSxLQUFBO0FBQUEsa0JBQ0EsTUFBSztBQUFBLGtCQUNMLE9BQU07QUFBQSxrQkFDTixjQUFXO0FBQUEsa0JBQ1gsT0FBQTtBQUFBLGtCQUNBLFNBQVE7QUFBQTs7Ozs7Ozs7OztJQU1oQkEsWUFpQ1csU0FBQTtBQUFBLGtCQWhDQSxNQUFNO0FBQUEsbUVBQU4sTUFBTSxTQUFBO0FBQUEsTUFDZixVQUFTO0FBQUEsTUFDVCxjQUFBO0FBQUEsTUFDQSxtQkFBZ0I7QUFBQSxNQUNoQixtQkFBZ0I7QUFBQTt1QkFFaEIsTUF5QlM7QUFBQSxRQXpCVEEsWUF5QlMsT0FBQSxNQUFBO0FBQUEsMkJBeEJQLE1BdUJpQjtBQUFBLFlBdkJqQkEsWUF1QmlCLGNBQUEsTUFBQTtBQUFBLCtCQXRCZixNQXFCUztBQUFBLGdCQXJCVEEsWUFxQlMsT0FBQSxFQUFBLFVBQUEsU0FyQk0sU0FBVSxHQUFBO0FBQUEsbUNBQ3ZCLE1BbUJVO0FBQUEsb0JBbkJWQSxZQW1CVSxRQUFBO0FBQUEsa0NBbEJDLE1BQUM7QUFBQSxtRkFBRCxNQUFDLElBQUE7QUFBQSxzQkFDVCxPQUFPLEtBQUUsR0FBQSxnQkFBQTtBQUFBLHNCQUNWLFVBQUE7QUFBQSxzQkFDQSxjQUFBO0FBQUEsc0JBQ0MsWUFBVSxLQUFBLEdBQUcsS0FBSyxPQUFJLFlBQUE7QUFBQSxzQkFDdEIsZUFBYSxLQUFBLEdBQUcsS0FBSyxPQUFJLFlBQUE7QUFBQSxzQkFDMUIsWUFBQTtBQUFBLHNCQUNBLE9BQU07QUFBQTtzQkFFVyxnQkFDZixNQU1FO0FBQUEsd0JBTkZBLFlBTUUsTUFBQTtBQUFBLDBCQUxDLFNBQU8sU0FBUTtBQUFBLDBCQUNoQixPQUFBO0FBQUEsMEJBQ0EsT0FBTTtBQUFBLDBCQUNOLE1BQUE7QUFBQSwwQkFDQSxNQUFLO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
