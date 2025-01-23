import { Q as QInnerLoading } from "./QInnerLoading.abe2afe6.js";
import { _ as _export_sfc, m as APIinterface, p as openBlock, V as createElementBlock, U as createBaseVNode, Z as toDisplayString, f as createVNode, t as withCtx, ac as QItem, aF as withModifiers, ad as QItemSection, ae as QAvatar, at as QIcon, q as createBlock, a6 as createTextVNode, F as Fragment, aA as createCommentVNode, Y as QBtn, a8 as QCard, a7 as normalizeClass, a9 as QCardSection, a1 as QSpinner, X as renderList, aY as QInput, aB as QDialog } from "./index.61ed5618.js";
import { Q as QItemLabel } from "./QItemLabel.a9365c5b.js";
import { Q as QList } from "./QList.b69a7e5b.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QSpace } from "./QSpace.f164c087.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QLinearProgress } from "./QLinearProgress.95e9a35e.js";
import { Q as QTab } from "./QTab.8fcc65d0.js";
import { Q as QTabs } from "./QTabs.2f5e29cb.js";
import { Q as QForm } from "./QForm.7ded9d38.js";
import "./QResizeObserver.d08dce3c.js";
import "./rtl.f3ed811c.js";
const _sfc_main = {
  props: ["currency_code", "use_thresholds"],
  name: "PointsCart",
  data() {
    return {
      loading: false,
      loading_apply: false,
      loading_remove: false,
      data: [],
      dialog: false,
      points: 0,
      loading_points: false,
      points_tab: 0,
      data_points: [],
      balance: 0,
      points_id: 0
    };
  },
  mounted() {
    this.getCartpoints();
  },
  computed: {
    getData() {
      if (Object.keys(this.data).length > 0) {
        return this.data;
      }
      return false;
    }
  },
  methods: {
    showDialog() {
      if (this.use_thresholds) {
        this.getPointsthresholds();
      }
      this.dialog = !this.dialog;
    },
    getCartpoints() {
      this.loading = true;
      APIinterface.fetchDataByTokenPost(
        "getCartpoints",
        "cart_uuid=" + APIinterface.getStorage("cart_uuid") + "&currency_code=" + this.currency_code
      ).then((data) => {
        this.data = data.details;
      }).catch((error) => {
        this.data = [];
      }).then((data) => {
        this.loading = false;
      });
    },
    applyPoints() {
      this.loading_apply = true;
      APIinterface.fetchDataByTokenPost(
        "applyPoints",
        "cart_uuid=" + APIinterface.getStorage("cart_uuid") + "&currency_code=" + this.currency_code + "&points=" + this.points + "&points_id=" + this.points_id
      ).then((data) => {
        this.dialog = false;
        this.$emit("afterApplypoints");
        this.getCartpoints();
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data) => {
        this.loading_apply = false;
      });
    },
    removePoints() {
      this.loading_remove = true;
      APIinterface.fetchDataByTokenPost(
        "removePoints",
        "cart_uuid=" + APIinterface.getStorage("cart_uuid")
      ).then((data) => {
        this.$emit("afterApplypoints");
        this.getCartpoints();
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data) => {
        this.loading_remove = false;
      });
    },
    getPointsthresholds() {
      this.loading_points = true;
      APIinterface.fetchDataByTokenPost(
        "getPointsthresholds",
        "cart_uuid=" + APIinterface.getStorage("cart_uuid") + "&currency_code=" + this.currency_code
      ).then((data) => {
        this.data_points = data.details.data;
        this.balance = data.details.balance;
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data) => {
        this.loading_points = false;
      });
    },
    setPoints() {
      this.points = this.points_tab.points;
      this.points_id = this.points_tab.id;
    }
  }
};
const _hoisted_1 = {
  key: 0,
  class: "relative-position"
};
const _hoisted_2 = { class: "q-pl-md q-pr-md q-mt-sm ellipsis font13 text-weight-bold q-pt-xs border-grey-top" };
const _hoisted_3 = { class: "font13" };
const _hoisted_4 = {
  key: 0,
  class: "text-center q-pa-sm"
};
const _hoisted_5 = { class: "text-caption" };
const _hoisted_6 = { class: "text-subtitle2 q-mb-sm" };
const _hoisted_7 = {
  key: 0,
  class: "absolute-full flex flex-center"
};
const _hoisted_8 = { class: "text-white font12 text-weight-bold" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    $options.getData ? (openBlock(), createElementBlock("div", _hoisted_1, [
      createBaseVNode("div", _hoisted_2, [
        createBaseVNode("div", _hoisted_3, toDisplayString(_ctx.$t("Points discount")), 1)
      ]),
      createVNode(QInnerLoading, {
        showing: $data.loading,
        color: "primary",
        size: "md"
      }, null, 8, ["showing"]),
      createVNode(QList, null, {
        default: withCtx(() => [
          createVNode(QItem, {
            clickable: "",
            onClick: withModifiers($options.showDialog, ["stop"])
          }, {
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
                        name: "card_giftcard",
                        size: "21px"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              $props.use_thresholds ? (openBlock(), createBlock(QItemSection, { key: 0 }, {
                default: withCtx(() => [
                  createVNode(QItemLabel, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("Add Points")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : (openBlock(), createBlock(QItemSection, { key: 1 }, {
                default: withCtx(() => [
                  createVNode(QItemLabel, null, {
                    default: withCtx(() => [
                      $data.data.discount > 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                        createTextVNode(toDisplayString($data.data.discount_label), 1)
                      ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                        createTextVNode(toDisplayString($data.data.redeem_discount), 1)
                      ], 64))
                    ]),
                    _: 1
                  }),
                  $data.data.discount <= 0 ? (openBlock(), createBlock(QItemLabel, {
                    key: 0,
                    caption: "",
                    lines: "2"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString($data.data.redeem_label), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              })),
              createVNode(QItemSection, { side: "" }, {
                default: withCtx(() => [
                  $data.data.discount > 0 ? (openBlock(), createBlock(QBtn, {
                    key: 0,
                    onClick: withModifiers($options.removePoints, ["stop"]),
                    flat: "",
                    color: _ctx.$q.dark.mode ? "secondary" : "blue",
                    "no-caps": "",
                    label: _ctx.$t("Remove"),
                    dense: "",
                    size: "md",
                    loading: $data.loading_remove
                  }, null, 8, ["onClick", "color", "label", "loading"])) : (openBlock(), createBlock(QIcon, {
                    key: 1,
                    name: "navigate_next"
                  }))
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["onClick"])
        ]),
        _: 1
      })
    ])) : createCommentVNode("", true),
    createVNode(QDialog, {
      modelValue: $data.dialog,
      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.dialog = $event),
      position: "bottom"
    }, {
      default: withCtx(() => [
        createVNode(QCard, null, {
          default: withCtx(() => [
            createVNode(QToolbar, {
              class: "text-primary top-toolbar q-pl-md",
              dense: ""
            }, {
              default: withCtx(() => [
                createVNode(QToolbarTitle, {
                  class: normalizeClass(["text-weight-bold", {
                    "text-white": _ctx.$q.dark.mode,
                    "text-dark": !_ctx.$q.dark.mode
                  }])
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("Apply discount")), 1)
                  ]),
                  _: 1
                }, 8, ["class"]),
                createVNode(QSpace),
                createVNode(QBtn, {
                  onClick: _cache[0] || (_cache[0] = ($event) => $data.dialog = false),
                  color: "white",
                  square: "",
                  unelevated: "",
                  "text-color": "grey",
                  icon: "las la-times",
                  dense: "",
                  "no-caps": "",
                  size: "sm",
                  class: "border-grey radius8"
                })
              ]),
              _: 1
            }),
            createVNode(QCardSection, null, {
              default: withCtx(() => [
                createVNode(QForm, {
                  onSubmit: $options.applyPoints,
                  class: "q-gutter-sm"
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", null, [
                      $props.use_thresholds ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                        $data.loading_points ? (openBlock(), createElementBlock("div", _hoisted_4, [
                          createVNode(QSpinner, {
                            color: "primary",
                            size: "2em"
                          })
                        ])) : (openBlock(), createBlock(QTabs, {
                          key: 1,
                          modelValue: $data.points_tab,
                          "onUpdate:modelValue": [
                            _cache[1] || (_cache[1] = ($event) => $data.points_tab = $event),
                            $options.setPoints
                          ],
                          class: "text-dark q-mb-lg",
                          "no-caps": "",
                          "active-color": "white",
                          "active-bg-color": "blue",
                          "indicator-color": "blue"
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createElementBlock(Fragment, null, renderList($data.data_points, (items) => {
                              return openBlock(), createBlock(QTab, {
                                key: items,
                                name: items,
                                disable: $data.balance > items.points ? false : true
                              }, {
                                default: withCtx(() => [
                                  createBaseVNode("div", _hoisted_5, toDisplayString(items.label), 1),
                                  createBaseVNode("div", _hoisted_6, toDisplayString(items.amount), 1),
                                  createVNode(QLinearProgress, {
                                    size: "18px",
                                    value: $data.balance / items.points,
                                    style: { "min-width": "70px" },
                                    class: "radius28",
                                    color: $data.balance >= items.points ? "green" : "blue"
                                  }, {
                                    default: withCtx(() => [
                                      $data.balance >= items.points ? (openBlock(), createElementBlock("div", _hoisted_7, [
                                        createBaseVNode("span", _hoisted_8, toDisplayString(_ctx.$t("REDEEM")), 1)
                                      ])) : createCommentVNode("", true)
                                    ]),
                                    _: 2
                                  }, 1032, ["value", "color"])
                                ]),
                                _: 2
                              }, 1032, ["name", "disable"]);
                            }), 128))
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"]))
                      ], 64)) : (openBlock(), createBlock(QInput, {
                        key: 1,
                        modelValue: $data.points,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.points = $event),
                        label: _ctx.$t("Enter points to convert to discount"),
                        outlined: "",
                        "lazy-rules": "",
                        "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
                        "label-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                        borderless: "",
                        class: "input-borderless"
                      }, null, 8, ["modelValue", "label", "bg-color", "label-color"]))
                    ]),
                    createBaseVNode("div", null, [
                      createVNode(QBtn, {
                        loading: $data.loading_apply,
                        disable: $data.points > 0 ? false : true,
                        type: "submit",
                        unelevated: "",
                        color: "primary",
                        "text-color": "white",
                        "no-caps": "",
                        class: "full-width",
                        label: _ctx.$t("Apply"),
                        size: "lg"
                      }, null, 8, ["loading", "disable", "label"])
                    ])
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
var PointsCart = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "PointsCart.vue"]]);
export { PointsCart as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9pbnRzQ2FydC5mZmVmOGE3Zi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvUG9pbnRzQ2FydC52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8dGVtcGxhdGUgdi1pZj1cImdldERhdGFcIj5cbiAgICA8ZGl2IGNsYXNzPVwicmVsYXRpdmUtcG9zaXRpb25cIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJxLXBsLW1kIHEtcHItbWQgcS1tdC1zbSBlbGxpcHNpcyBmb250MTMgdGV4dC13ZWlnaHQtYm9sZCBxLXB0LXhzIGJvcmRlci1ncmV5LXRvcFwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb250MTNcIj57eyAkdChcIlBvaW50cyBkaXNjb3VudFwiKSB9fTwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxxLWlubmVyLWxvYWRpbmcgOnNob3dpbmc9XCJsb2FkaW5nXCIgY29sb3I9XCJwcmltYXJ5XCIgc2l6ZT1cIm1kXCIgLz5cbiAgICAgIDxxLWxpc3Q+XG4gICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlIEBjbGljay5zdG9wPVwic2hvd0RpYWxvZ1wiPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgICA8cS1hdmF0YXIgY29sb3I9XCJzZWNvbmRhcnlcIiBzaXplPVwibWRcIiB0ZXh0LWNvbG9yPVwid2hpdGVcIj5cbiAgICAgICAgICAgICAgPHEtaWNvbiBuYW1lPVwiY2FyZF9naWZ0Y2FyZFwiIHNpemU9XCIyMXB4XCI+PC9xLWljb24+XG4gICAgICAgICAgICA8L3EtYXZhdGFyPlxuICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gdi1pZj1cInVzZV90aHJlc2hvbGRzXCI+XG4gICAgICAgICAgICA8cS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICB7eyAkdChcIkFkZCBQb2ludHNcIikgfX1cbiAgICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gdi1lbHNlPlxuICAgICAgICAgICAgPHEtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJkYXRhLmRpc2NvdW50ID4gMFwiPlxuICAgICAgICAgICAgICAgIHt7IGRhdGEuZGlzY291bnRfbGFiZWwgfX1cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgICAgICAgICB7eyBkYXRhLnJlZGVlbV9kaXNjb3VudCB9fVxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24gbGluZXM9XCIyXCIgdi1pZj1cImRhdGEuZGlzY291bnQgPD0gMFwiPlxuICAgICAgICAgICAgICB7eyBkYXRhLnJlZGVlbV9sYWJlbCB9fVxuICAgICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cblxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlPlxuICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgIHYtaWY9XCJkYXRhLmRpc2NvdW50ID4gMFwiXG4gICAgICAgICAgICAgIEBjbGljay5zdG9wPVwicmVtb3ZlUG9pbnRzXCJcbiAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICA6Y29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnc2Vjb25kYXJ5JyA6ICdibHVlJ1wiXG4gICAgICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ1JlbW92ZScpXCJcbiAgICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgICAgICAgOmxvYWRpbmc9XCJsb2FkaW5nX3JlbW92ZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHEtaWNvbiB2LWVsc2UgbmFtZT1cIm5hdmlnYXRlX25leHRcIiAvPlxuICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDwvcS1pdGVtPlxuICAgICAgPC9xLWxpc3Q+XG4gICAgPC9kaXY+XG4gIDwvdGVtcGxhdGU+XG5cbiAgPHEtZGlhbG9nIHYtbW9kZWw9XCJkaWFsb2dcIiBwb3NpdGlvbj1cImJvdHRvbVwiPlxuICAgIDxxLWNhcmQ+XG4gICAgICA8cS10b29sYmFyIGNsYXNzPVwidGV4dC1wcmltYXJ5IHRvcC10b29sYmFyIHEtcGwtbWRcIiBkZW5zZT5cbiAgICAgICAgPHEtdG9vbGJhci10aXRsZVxuICAgICAgICAgIGNsYXNzPVwidGV4dC13ZWlnaHQtYm9sZFwiXG4gICAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICAgJ3RleHQtd2hpdGUnOiAkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgICAndGV4dC1kYXJrJzogISRxLmRhcmsubW9kZSxcbiAgICAgICAgICB9XCJcbiAgICAgICAgPlxuICAgICAgICAgIHt7ICR0KFwiQXBwbHkgZGlzY291bnRcIikgfX1cbiAgICAgICAgPC9xLXRvb2xiYXItdGl0bGU+XG4gICAgICAgIDxxLXNwYWNlPjwvcS1zcGFjZT5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgQGNsaWNrPVwiZGlhbG9nID0gIXRydWVcIlxuICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgIHNxdWFyZVxuICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICB0ZXh0LWNvbG9yPVwiZ3JleVwiXG4gICAgICAgICAgaWNvbj1cImxhcyBsYS10aW1lc1wiXG4gICAgICAgICAgZGVuc2VcbiAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICBjbGFzcz1cImJvcmRlci1ncmV5IHJhZGl1czhcIlxuICAgICAgICAvPlxuICAgICAgPC9xLXRvb2xiYXI+XG4gICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDxxLWZvcm0gQHN1Ym1pdD1cImFwcGx5UG9pbnRzXCIgY2xhc3M9XCJxLWd1dHRlci1zbVwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cInVzZV90aHJlc2hvbGRzXCI+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwibG9hZGluZ19wb2ludHNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgcS1wYS1zbVwiPlxuICAgICAgICAgICAgICAgICAgPHEtc3Bpbm5lciBjb2xvcj1cInByaW1hcnlcIiBzaXplPVwiMmVtXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgICAgICAgICA8cS10YWJzXG4gICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicG9pbnRzX3RhYlwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtZGFyayBxLW1iLWxnXCJcbiAgICAgICAgICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICAgICAgICAgIGFjdGl2ZS1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgIGFjdGl2ZS1iZy1jb2xvcj1cImJsdWVcIlxuICAgICAgICAgICAgICAgICAgaW5kaWNhdG9yLWNvbG9yPVwiYmx1ZVwiXG4gICAgICAgICAgICAgICAgICBAdXBkYXRlOm1vZGVsLXZhbHVlPVwic2V0UG9pbnRzXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJpdGVtcyBpbiBkYXRhX3BvaW50c1wiIDprZXk9XCJpdGVtc1wiPlxuICAgICAgICAgICAgICAgICAgICA8cS10YWJcbiAgICAgICAgICAgICAgICAgICAgICA6bmFtZT1cIml0ZW1zXCJcbiAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZT1cImJhbGFuY2UgPiBpdGVtcy5wb2ludHMgPyBmYWxzZSA6IHRydWVcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2FwdGlvblwiPnt7IGl0ZW1zLmxhYmVsIH19PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc3VidGl0bGUyIHEtbWItc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IGl0ZW1zLmFtb3VudCB9fVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWxpbmVhci1wcm9ncmVzc1xuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjE4cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwiYmFsYW5jZSAvIGl0ZW1zLnBvaW50c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIm1pbi13aWR0aDogNzBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJhZGl1czI4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjb2xvcj1cImJhbGFuY2UgPj0gaXRlbXMucG9pbnRzID8gJ2dyZWVuJyA6ICdibHVlJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiYmFsYW5jZSA+PSBpdGVtcy5wb2ludHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImFic29sdXRlLWZ1bGwgZmxleCBmbGV4LWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC13aGl0ZSBmb250MTIgdGV4dC13ZWlnaHQtYm9sZFwiPnt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHQoXCJSRURFRU1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3EtbGluZWFyLXByb2dyZXNzPlxuICAgICAgICAgICAgICAgICAgICA8L3EtdGFiPlxuICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L3EtdGFicz5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICAgICAgICA8cS1pbnB1dFxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwb2ludHNcIlxuICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdFbnRlciBwb2ludHMgdG8gY29udmVydCB0byBkaXNjb3VudCcpXCJcbiAgICAgICAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgICAgICAgIGxhenktcnVsZXNcbiAgICAgICAgICAgICAgICA6YmctY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTYwMCcgOiAnaW5wdXQnXCJcbiAgICAgICAgICAgICAgICA6bGFiZWwtY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTMwMCcgOiAnZ3JleSdcIlxuICAgICAgICAgICAgICAgIGJvcmRlcmxlc3NcbiAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LWJvcmRlcmxlc3NcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgIDpsb2FkaW5nPVwibG9hZGluZ19hcHBseVwiXG4gICAgICAgICAgICAgIDpkaXNhYmxlPVwicG9pbnRzID4gMCA/IGZhbHNlIDogdHJ1ZVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgIHRleHQtY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICAgICAgY2xhc3M9XCJmdWxsLXdpZHRoXCJcbiAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ0FwcGx5JylcIlxuICAgICAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9xLWZvcm0+XG4gICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgIDwvcS1jYXJkPlxuICA8L3EtZGlhbG9nPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBBUElpbnRlcmZhY2UgZnJvbSBcInNyYy9hcGkvQVBJaW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IFtcImN1cnJlbmN5X2NvZGVcIiwgXCJ1c2VfdGhyZXNob2xkc1wiXSxcbiAgbmFtZTogXCJQb2ludHNDYXJ0XCIsXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgbG9hZGluZ19hcHBseTogZmFsc2UsXG4gICAgICBsb2FkaW5nX3JlbW92ZTogZmFsc2UsXG4gICAgICBkYXRhOiBbXSxcbiAgICAgIGRpYWxvZzogZmFsc2UsXG4gICAgICBwb2ludHM6IDAsXG4gICAgICBsb2FkaW5nX3BvaW50czogZmFsc2UsXG4gICAgICBwb2ludHNfdGFiOiAwLFxuICAgICAgZGF0YV9wb2ludHM6IFtdLFxuICAgICAgYmFsYW5jZTogMCxcbiAgICAgIHBvaW50c19pZDogMCxcbiAgICB9O1xuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuZ2V0Q2FydHBvaW50cygpO1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGdldERhdGEoKSB7XG4gICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5kYXRhKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHNob3dEaWFsb2coKSB7XG4gICAgICBpZiAodGhpcy51c2VfdGhyZXNob2xkcykge1xuICAgICAgICB0aGlzLmdldFBvaW50c3RocmVzaG9sZHMoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGlhbG9nID0gIXRoaXMuZGlhbG9nO1xuICAgIH0sXG4gICAgZ2V0Q2FydHBvaW50cygpIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICBBUElpbnRlcmZhY2UuZmV0Y2hEYXRhQnlUb2tlblBvc3QoXG4gICAgICAgIFwiZ2V0Q2FydHBvaW50c1wiLFxuICAgICAgICBcImNhcnRfdXVpZD1cIiArXG4gICAgICAgICAgQVBJaW50ZXJmYWNlLmdldFN0b3JhZ2UoXCJjYXJ0X3V1aWRcIikgK1xuICAgICAgICAgIFwiJmN1cnJlbmN5X2NvZGU9XCIgK1xuICAgICAgICAgIHRoaXMuY3VycmVuY3lfY29kZVxuICAgICAgKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuZGF0YSA9IGRhdGEuZGV0YWlscztcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGFwcGx5UG9pbnRzKCkge1xuICAgICAgdGhpcy5sb2FkaW5nX2FwcGx5ID0gdHJ1ZTtcbiAgICAgIEFQSWludGVyZmFjZS5mZXRjaERhdGFCeVRva2VuUG9zdChcbiAgICAgICAgXCJhcHBseVBvaW50c1wiLFxuICAgICAgICBcImNhcnRfdXVpZD1cIiArXG4gICAgICAgICAgQVBJaW50ZXJmYWNlLmdldFN0b3JhZ2UoXCJjYXJ0X3V1aWRcIikgK1xuICAgICAgICAgIFwiJmN1cnJlbmN5X2NvZGU9XCIgK1xuICAgICAgICAgIHRoaXMuY3VycmVuY3lfY29kZSArXG4gICAgICAgICAgXCImcG9pbnRzPVwiICtcbiAgICAgICAgICB0aGlzLnBvaW50cyArXG4gICAgICAgICAgXCImcG9pbnRzX2lkPVwiICtcbiAgICAgICAgICB0aGlzLnBvaW50c19pZFxuICAgICAgKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuZGlhbG9nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy4kZW1pdChcImFmdGVyQXBwbHlwb2ludHNcIik7XG4gICAgICAgICAgdGhpcy5nZXRDYXJ0cG9pbnRzKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBBUElpbnRlcmZhY2Uubm90aWZ5KFwiZGFya1wiLCBlcnJvciwgXCJlcnJvclwiLCB0aGlzLiRxKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmdfYXBwbHkgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICByZW1vdmVQb2ludHMoKSB7XG4gICAgICB0aGlzLmxvYWRpbmdfcmVtb3ZlID0gdHJ1ZTtcbiAgICAgIEFQSWludGVyZmFjZS5mZXRjaERhdGFCeVRva2VuUG9zdChcbiAgICAgICAgXCJyZW1vdmVQb2ludHNcIixcbiAgICAgICAgXCJjYXJ0X3V1aWQ9XCIgKyBBUElpbnRlcmZhY2UuZ2V0U3RvcmFnZShcImNhcnRfdXVpZFwiKVxuICAgICAgKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuJGVtaXQoXCJhZnRlckFwcGx5cG9pbnRzXCIpO1xuICAgICAgICAgIHRoaXMuZ2V0Q2FydHBvaW50cygpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgQVBJaW50ZXJmYWNlLm5vdGlmeShcImRhcmtcIiwgZXJyb3IsIFwiZXJyb3JcIiwgdGhpcy4kcSk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nX3JlbW92ZSA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGdldFBvaW50c3RocmVzaG9sZHMoKSB7XG4gICAgICB0aGlzLmxvYWRpbmdfcG9pbnRzID0gdHJ1ZTtcbiAgICAgIEFQSWludGVyZmFjZS5mZXRjaERhdGFCeVRva2VuUG9zdChcbiAgICAgICAgXCJnZXRQb2ludHN0aHJlc2hvbGRzXCIsXG4gICAgICAgIFwiY2FydF91dWlkPVwiICtcbiAgICAgICAgICBBUElpbnRlcmZhY2UuZ2V0U3RvcmFnZShcImNhcnRfdXVpZFwiKSArXG4gICAgICAgICAgXCImY3VycmVuY3lfY29kZT1cIiArXG4gICAgICAgICAgdGhpcy5jdXJyZW5jeV9jb2RlXG4gICAgICApXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5kYXRhX3BvaW50cyA9IGRhdGEuZGV0YWlscy5kYXRhO1xuICAgICAgICAgIHRoaXMuYmFsYW5jZSA9IGRhdGEuZGV0YWlscy5iYWxhbmNlO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgQVBJaW50ZXJmYWNlLm5vdGlmeShcImRhcmtcIiwgZXJyb3IsIFwiZXJyb3JcIiwgdGhpcy4kcSk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nX3BvaW50cyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHNldFBvaW50cygpIHtcbiAgICAgIHRoaXMucG9pbnRzID0gdGhpcy5wb2ludHNfdGFiLnBvaW50cztcbiAgICAgIHRoaXMucG9pbnRzX2lkID0gdGhpcy5wb2ludHNfdGFiLmlkO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyIsIl9jcmVhdGVWTm9kZSIsIl9jcmVhdGVCbG9jayIsIl9GcmFnbWVudCIsIl9jcmVhdGVUZXh0Vk5vZGUiLCJfcmVuZGVyTGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQXdLQSxNQUFLLFlBQVU7QUFBQSxFQUNiLE9BQU8sQ0FBQyxpQkFBaUIsZ0JBQWdCO0FBQUEsRUFDekMsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUNMLFdBQU87QUFBQSxNQUNMLFNBQVM7QUFBQSxNQUNULGVBQWU7QUFBQSxNQUNmLGdCQUFnQjtBQUFBLE1BQ2hCLE1BQU0sQ0FBRTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsZ0JBQWdCO0FBQUEsTUFDaEIsWUFBWTtBQUFBLE1BQ1osYUFBYSxDQUFFO0FBQUEsTUFDZixTQUFTO0FBQUEsTUFDVCxXQUFXO0FBQUE7RUFFZDtBQUFBLEVBQ0QsVUFBVTtBQUNSLFNBQUssY0FBYTtBQUFBLEVBQ25CO0FBQUEsRUFDRCxVQUFVO0FBQUEsSUFDUixVQUFVO0FBQ1IsVUFBSSxPQUFPLEtBQUssS0FBSyxJQUFJLEVBQUUsU0FBUyxHQUFHO0FBQ3JDLGVBQU8sS0FBSztBQUFBLE1BQ2Q7QUFDQSxhQUFPO0FBQUEsSUFDUjtBQUFBLEVBQ0Y7QUFBQSxFQUNELFNBQVM7QUFBQSxJQUNQLGFBQWE7QUFDWCxVQUFJLEtBQUssZ0JBQWdCO0FBQ3ZCLGFBQUssb0JBQW1CO0FBQUEsTUFDMUI7QUFDQSxXQUFLLFNBQVMsQ0FBQyxLQUFLO0FBQUEsSUFDckI7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
