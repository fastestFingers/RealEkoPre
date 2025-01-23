import { _ as _export_sfc, m as APIinterface, p as openBlock, q as createBlock, t as withCtx, f as createVNode, Y as QBtn, a6 as createTextVNode, Z as toDisplayString, a7 as normalizeClass, V as createElementBlock, U as createBaseVNode, F as Fragment, a8 as QCard, a9 as QCardSection, X as renderList, a0 as Transition, aa as withDirectives, ab as Ripple, ac as QItem, aF as withModifiers, ad as QItemSection, af as QRadio, at as QIcon } from "./index.61ed5618.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QInnerLoading } from "./QInnerLoading.abe2afe6.js";
import { Q as QImg } from "./QImg.6c27044c.js";
import { Q as QItemLabel } from "./QItemLabel.a9365c5b.js";
import { Q as QSlideItem } from "./QSlideItem.7b72eeea.js";
import { Q as QList } from "./QList.b69a7e5b.js";
import { Q as QFooter } from "./QFooter.571ac042.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import { Q as QPullToRefresh } from "./QPullToRefresh.3d10c02d.js";
import "./QResizeObserver.d08dce3c.js";
import "./use-render-cache.b9e045af.js";
import "./touch.96e0ae37.js";
import "./selection.50b4cb0c.js";
import "./format.7f7370d3.js";
const _sfc_main = {
  name: "MyPayment",
  data() {
    return {
      data: [],
      loading: false,
      inner_loading: false,
      payment_data: [],
      payment_uuid: ""
    };
  },
  mounted() {
    this.MyPayments();
  },
  computed: {
    hasData() {
      if (this.data.length > 0) {
        return true;
      }
      return false;
    }
  },
  methods: {
    refresh(done) {
      this.MyPayments(done);
    },
    MyPayments(done) {
      if (APIinterface.empty(done)) {
        this.loading = true;
      }
      APIinterface.MyPayments().then((data) => {
        this.payment_uuid = data.details.default_payment_uuid;
        this.data = data.details.data;
      }).catch((error) => {
        this.data = [];
      }).then((data) => {
        if (!APIinterface.empty(done)) {
          done();
        } else {
          this.loading = false;
        }
      });
    },
    deletePayment(index, data) {
      this.inner_loading = true;
      APIinterface.deletePayment(data.payment_uuid).then((data2) => {
        this.data.splice(index, 1);
      }).catch((error) => {
        APIinterface.notify("red-5", error, "error_outline", this.$q);
      }).then((data2) => {
        this.inner_loading = false;
      });
    },
    setDefault(paymentUuid) {
      APIinterface.showLoadingBox("", this.$q);
      APIinterface.setDefaultPayment(paymentUuid).then((data) => {
        this.payment_uuid = paymentUuid;
      }).catch((error) => {
        APIinterface.notify("red-5", error, "error_outline", this.$q);
      }).then((data) => {
        APIinterface.hideLoadingBox(this.$q);
      });
    }
  }
};
const _hoisted_1 = {
  key: 0,
  class: "min-height-inherit flex flex-center"
};
const _hoisted_2 = { class: "full-width text-center q-pb-xl" };
const _hoisted_3 = { class: "text-h5 text-weight-bold" };
const _hoisted_4 = { class: "text-grey font12" };
const _hoisted_5 = { class: "text-weight-medium" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QPullToRefresh, { onRefresh: $options.refresh }, {
    default: withCtx(() => [
      createVNode(QHeader, {
        reveal: "",
        "reveal-offset": "50",
        class: normalizeClass({
          "bg-mydark text-white": _ctx.$q.dark.mode,
          "bg-grey-1 text-dark": !_ctx.$q.dark.mode
        })
      }, {
        default: withCtx(() => [
          createVNode(QToolbar, null, {
            default: withCtx(() => [
              createVNode(QBtn, {
                onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$router.back()),
                dense: "",
                icon: "las la-angle-left",
                class: "q-mr-sm",
                "text-color": _ctx.$q.dark.mode ? "white" : "dark",
                unelevated: ""
              }, null, 8, ["text-color"]),
              createVNode(QToolbarTitle, { class: "text-weight-bold" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("Payment")), 1)
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
        class: normalizeClass({
          "flex flex-center": !$options.hasData && !$data.loading,
          "row items-stretch ": $options.hasData && !$data.loading,
          "bg-mydark": _ctx.$q.dark.mode,
          "bg-grey-1": !_ctx.$q.dark.mode
        })
      }, {
        default: withCtx(() => [
          !$options.hasData && !$data.loading ? (openBlock(), createElementBlock("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("div", _hoisted_3, toDisplayString(_ctx.$t("No Payment available")), 1),
              createBaseVNode("p", _hoisted_4, toDisplayString(_ctx.$t("you have not added payment yet")), 1),
              createVNode(QBtn, {
                flat: "",
                color: "blue",
                "no-caps": "",
                label: _ctx.$t("Add new payment"),
                dense: "",
                size: "sm",
                to: "/account/payments/new"
              }, null, 8, ["label"])
            ])
          ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            $data.loading ? (openBlock(), createBlock(QInnerLoading, {
              key: 0,
              showing: true,
              color: "primary",
              size: "md",
              "label-class": "dark",
              class: "transparent"
            })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createVNode(QCard, {
                flat: "",
                class: normalizeClass(["radius8 full-width", {
                  "bg-mydark text-white": _ctx.$q.dark.mode,
                  "bg-white text-black": !_ctx.$q.dark.mode
                }])
              }, {
                default: withCtx(() => [
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      createVNode(QList, null, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList($data.data, (items, index) => {
                            return openBlock(), createBlock(Transition, {
                              key: items.payment_uuid,
                              appear: "",
                              "leave-active-class": "animated fadeOut",
                              class: normalizeClass({
                                "bg-mydark ": _ctx.$q.dark.mode,
                                "bg-white ": !_ctx.$q.dark.mode
                              })
                            }, {
                              default: withCtx(() => [
                                createVNode(QSlideItem, {
                                  onAction: ($event) => $options.deletePayment(index, items),
                                  "right-color": _ctx.$q.dark.mode ? "mydark" : "white"
                                }, {
                                  right: withCtx(() => [
                                    createVNode(QBtn, {
                                      unelevated: "",
                                      round: "",
                                      color: "red-5",
                                      "text-color": "white",
                                      icon: "eva-trash-outline",
                                      dense: ""
                                    })
                                  ]),
                                  default: withCtx(() => [
                                    withDirectives((openBlock(), createBlock(QItem, {
                                      onClick: withModifiers(($event) => $options.setDefault(items.payment_uuid), ["stop"]),
                                      tag: "label",
                                      clickable: "",
                                      class: normalizeClass(["border-grey radius10 q-mb-sm", {
                                        "bg-dark text-white": _ctx.$q.dark.mode,
                                        "bg-white text-black": !_ctx.$q.dark.mode
                                      }])
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(QItemSection, { avatar: "" }, {
                                          default: withCtx(() => [
                                            createVNode(QRadio, {
                                              modelValue: $data.payment_uuid,
                                              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.payment_uuid = $event),
                                              val: items.payment_uuid,
                                              color: "primary",
                                              class: "hidden"
                                            }, null, 8, ["modelValue", "val"]),
                                            items.logo_type === "icon" ? (openBlock(), createBlock(QIcon, {
                                              key: 0,
                                              color: "warning",
                                              name: "credit_card"
                                            })) : (openBlock(), createBlock(QImg, {
                                              key: 1,
                                              src: items.logo_image,
                                              fit: "contain",
                                              style: { "height": "30px", "max-width": "30px" }
                                            }, null, 8, ["src"]))
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(QItemSection, null, {
                                          default: withCtx(() => [
                                            createVNode(QItemLabel, { lines: "1" }, {
                                              default: withCtx(() => [
                                                createBaseVNode("span", _hoisted_5, toDisplayString(items.payment_name), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(QItemLabel, {
                                              caption: "",
                                              lines: "1"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(items.attr2), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(QItemSection, { side: "" }, {
                                          default: withCtx(() => [
                                            createVNode(QRadio, {
                                              modelValue: $data.payment_uuid,
                                              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.payment_uuid = $event),
                                              val: items.payment_uuid,
                                              onClick: withModifiers(($event) => $options.setDefault(items.payment_uuid), ["stop"])
                                            }, null, 8, ["modelValue", "val", "onClick"])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick", "class"])), [
                                      [Ripple]
                                    ])
                                  ]),
                                  _: 2
                                }, 1032, ["onAction", "right-color"])
                              ]),
                              _: 2
                            }, 1032, ["class"]);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["class"]),
              createVNode(QFooter, {
                reveal: "",
                class: "bg-grey-1 q-pl-md q-pr-md q-pb-sm q-pt-sm text-dark"
              }, {
                default: withCtx(() => [
                  createVNode(QBtn, {
                    type: "submit",
                    label: _ctx.$t("Add new payment"),
                    unelevated: "",
                    "no-caps": "",
                    color: _ctx.$q.dark.mode ? "grey300" : "primary",
                    class: "full-width text-weight-bold",
                    size: "lg",
                    to: "/account/payments/new",
                    loading: $data.loading
                  }, null, 8, ["label", "color", "loading"])
                ]),
                _: 1
              })
            ], 64))
          ], 64))
        ]),
        _: 1
      }, 8, ["class"])
    ]),
    _: 1
  }, 8, ["onRefresh"]);
}
var MyPayment = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "MyPayment.vue"]]);
export { MyPayment as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXlQYXltZW50LmFlNGQxZjEzLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvQWNjb3VudC9NeVBheW1lbnQudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHEtcHVsbC10by1yZWZyZXNoIEByZWZyZXNoPVwicmVmcmVzaFwiPlxuICAgIDxxLWhlYWRlclxuICAgICAgcmV2ZWFsXG4gICAgICByZXZlYWwtb2Zmc2V0PVwiNTBcIlxuICAgICAgOmNsYXNzPVwie1xuICAgICAgICAnYmctbXlkYXJrIHRleHQtd2hpdGUnOiAkcS5kYXJrLm1vZGUsXG4gICAgICAgICdiZy1ncmV5LTEgdGV4dC1kYXJrJzogISRxLmRhcmsubW9kZSxcbiAgICAgIH1cIlxuICAgID5cbiAgICAgIDxxLXRvb2xiYXI+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIEBjbGljaz1cIiRyb3V0ZXIuYmFjaygpXCJcbiAgICAgICAgICBkZW5zZVxuICAgICAgICAgIGljb249XCJsYXMgbGEtYW5nbGUtbGVmdFwiXG4gICAgICAgICAgY2xhc3M9XCJxLW1yLXNtXCJcbiAgICAgICAgICA6dGV4dC1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICd3aGl0ZScgOiAnZGFyaydcIlxuICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgLz5cbiAgICAgICAgPHEtdG9vbGJhci10aXRsZSBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGRcIj57e1xuICAgICAgICAgICR0KFwiUGF5bWVudFwiKVxuICAgICAgICB9fTwvcS10b29sYmFyLXRpdGxlPlxuICAgICAgPC9xLXRvb2xiYXI+XG4gICAgPC9xLWhlYWRlcj5cbiAgICA8cS1wYWdlXG4gICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICdmbGV4IGZsZXgtY2VudGVyJzogIWhhc0RhdGEgJiYgIWxvYWRpbmcsXG4gICAgICAgICdyb3cgaXRlbXMtc3RyZXRjaCAnOiBoYXNEYXRhICYmICFsb2FkaW5nLFxuICAgICAgICAnYmctbXlkYXJrJzogJHEuZGFyay5tb2RlLFxuICAgICAgICAnYmctZ3JleS0xJzogISRxLmRhcmsubW9kZSxcbiAgICAgIH1cIlxuICAgID5cbiAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiIWhhc0RhdGEgJiYgIWxvYWRpbmdcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1pbi1oZWlnaHQtaW5oZXJpdCBmbGV4IGZsZXgtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZ1bGwtd2lkdGggdGV4dC1jZW50ZXIgcS1wYi14bFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDUgdGV4dC13ZWlnaHQtYm9sZFwiPlxuICAgICAgICAgICAgICB7eyAkdChcIk5vIFBheW1lbnQgYXZhaWxhYmxlXCIpIH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1ncmV5IGZvbnQxMlwiPlxuICAgICAgICAgICAgICB7eyAkdChcInlvdSBoYXZlIG5vdCBhZGRlZCBwYXltZW50IHlldFwiKSB9fVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgY29sb3I9XCJibHVlXCJcbiAgICAgICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnQWRkIG5ldyBwYXltZW50JylcIlxuICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICB0bz1cIi9hY2NvdW50L3BheW1lbnRzL25ld1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICA8cS1pbm5lci1sb2FkaW5nXG4gICAgICAgICAgdi1pZj1cImxvYWRpbmdcIlxuICAgICAgICAgIDpzaG93aW5nPVwidHJ1ZVwiXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgIGxhYmVsLWNsYXNzPVwiZGFya1wiXG4gICAgICAgICAgY2xhc3M9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgICA8cS1jYXJkXG4gICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICBjbGFzcz1cInJhZGl1czggZnVsbC13aWR0aFwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICdiZy1teWRhcmsgdGV4dC13aGl0ZSc6ICRxLmRhcmsubW9kZSxcbiAgICAgICAgICAgICAgJ2JnLXdoaXRlIHRleHQtYmxhY2snOiAhJHEuZGFyay5tb2RlLFxuICAgICAgICAgICAgfVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAgICA8cS1saXN0PlxuICAgICAgICAgICAgICAgIDx0cmFuc2l0aW9uXG4gICAgICAgICAgICAgICAgICB2LWZvcj1cIihpdGVtcywgaW5kZXgpIGluIGRhdGFcIlxuICAgICAgICAgICAgICAgICAgOmtleT1cIml0ZW1zLnBheW1lbnRfdXVpZFwiXG4gICAgICAgICAgICAgICAgICBhcHBlYXJcbiAgICAgICAgICAgICAgICAgIGxlYXZlLWFjdGl2ZS1jbGFzcz1cImFuaW1hdGVkIGZhZGVPdXRcIlxuICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICAgICAgICAgICAnYmctbXlkYXJrICc6ICRxLmRhcmsubW9kZSxcbiAgICAgICAgICAgICAgICAgICAgJ2JnLXdoaXRlICc6ICEkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cS1zbGlkZS1pdGVtXG4gICAgICAgICAgICAgICAgICAgIEBhY3Rpb249XCJkZWxldGVQYXltZW50KGluZGV4LCBpdGVtcylcIlxuICAgICAgICAgICAgICAgICAgICA6cmlnaHQtY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnbXlkYXJrJyA6ICd3aGl0ZSdcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OnJpZ2h0PlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICAgICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgcm91bmRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicmVkLTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJldmEtdHJhc2gtb3V0bGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICBAY2xpY2suc3RvcD1cInNldERlZmF1bHQoaXRlbXMucGF5bWVudF91dWlkKVwiXG4gICAgICAgICAgICAgICAgICAgICAgdGFnPVwibGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgICAgICAgIHYtcmlwcGxlXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJib3JkZXItZ3JleSByYWRpdXMxMCBxLW1iLXNtXCJcbiAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAnYmctZGFyayB0ZXh0LXdoaXRlJzogJHEuZGFyay5tb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JnLXdoaXRlIHRleHQtYmxhY2snOiAhJHEuZGFyay5tb2RlLFxuICAgICAgICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxxLXJhZGlvXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwYXltZW50X3V1aWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6dmFsPVwiaXRlbXMucGF5bWVudF91dWlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiaXRlbXMubG9nb190eXBlID09PSAnaWNvbidcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaWNvbiBjb2xvcj1cIndhcm5pbmdcIiBuYW1lPVwiY3JlZGl0X2NhcmRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzcmM9XCJpdGVtcy5sb2dvX2ltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXQ9XCJjb250YWluXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImhlaWdodDogMzBweDsgbWF4LXdpZHRoOiAzMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cblxuICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgbGluZXM9XCIxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC13ZWlnaHQtbWVkaXVtXCI+e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5wYXltZW50X25hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbiBsaW5lcz1cIjFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3sgaXRlbXMuYXR0cjIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cS1yYWRpb1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicGF5bWVudF91dWlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOnZhbD1cIml0ZW1zLnBheW1lbnRfdXVpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljay5zdG9wPVwic2V0RGVmYXVsdChpdGVtcy5wYXltZW50X3V1aWQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICA8L3Etc2xpZGUtaXRlbT5cbiAgICAgICAgICAgICAgICA8L3RyYW5zaXRpb24+XG4gICAgICAgICAgICAgIDwvcS1saXN0PlxuICAgICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICA8L3EtY2FyZD5cblxuICAgICAgICAgIDxxLWZvb3RlclxuICAgICAgICAgICAgcmV2ZWFsXG4gICAgICAgICAgICBjbGFzcz1cImJnLWdyZXktMSBxLXBsLW1kIHEtcHItbWQgcS1wYi1zbSBxLXB0LXNtIHRleHQtZGFya1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnQWRkIG5ldyBwYXltZW50JylcIlxuICAgICAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICAgICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXkzMDAnIDogJ3ByaW1hcnknXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJmdWxsLXdpZHRoIHRleHQtd2VpZ2h0LWJvbGRcIlxuICAgICAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgICAgICB0bz1cIi9hY2NvdW50L3BheW1lbnRzL25ld1wiXG4gICAgICAgICAgICAgIDpsb2FkaW5nPVwibG9hZGluZ1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvcS1mb290ZXI+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvcS1wYWdlPlxuICA8L3EtcHVsbC10by1yZWZyZXNoPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBBUElpbnRlcmZhY2UgZnJvbSBcInNyYy9hcGkvQVBJaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBkZWZpbmVBc3luY0NvbXBvbmVudCB9IGZyb20gXCJ2dWVcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIk15UGF5bWVudFwiLFxuICAvLyBjb21wb25lbnRzOiB7XG4gIC8vICAgTm90aUJ1dHRvbjogZGVmaW5lQXN5bmNDb21wb25lbnQoKCkgPT4gaW1wb3J0KFwiY29tcG9uZW50cy9Ob3RpQnV0dG9uXCIpKSxcbiAgLy8gfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogW10sXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIGlubmVyX2xvYWRpbmc6IGZhbHNlLFxuICAgICAgcGF5bWVudF9kYXRhOiBbXSxcbiAgICAgIHBheW1lbnRfdXVpZDogXCJcIixcbiAgICB9O1xuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuTXlQYXltZW50cygpO1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGhhc0RhdGEoKSB7XG4gICAgICBpZiAodGhpcy5kYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHJlZnJlc2goZG9uZSkge1xuICAgICAgdGhpcy5NeVBheW1lbnRzKGRvbmUpO1xuICAgIH0sXG4gICAgTXlQYXltZW50cyhkb25lKSB7XG4gICAgICBpZiAoQVBJaW50ZXJmYWNlLmVtcHR5KGRvbmUpKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICB9XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICAgICAgQVBJaW50ZXJmYWNlLk15UGF5bWVudHMoKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMucGF5bWVudF91dWlkID0gZGF0YS5kZXRhaWxzLmRlZmF1bHRfcGF5bWVudF91dWlkO1xuICAgICAgICAgIHRoaXMuZGF0YSA9IGRhdGEuZGV0YWlscy5kYXRhO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5kYXRhID0gW107XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKCFBUElpbnRlcmZhY2UuZW1wdHkoZG9uZSkpIHtcbiAgICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGRlbGV0ZVBheW1lbnQoaW5kZXgsIGRhdGEpIHtcbiAgICAgIHRoaXMuaW5uZXJfbG9hZGluZyA9IHRydWU7XG4gICAgICBBUElpbnRlcmZhY2UuZGVsZXRlUGF5bWVudChkYXRhLnBheW1lbnRfdXVpZClcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmRhdGEuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJyZWQtNVwiLCBlcnJvciwgXCJlcnJvcl9vdXRsaW5lXCIsIHRoaXMuJHEpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuaW5uZXJfbG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHNldERlZmF1bHQocGF5bWVudFV1aWQpIHtcbiAgICAgIEFQSWludGVyZmFjZS5zaG93TG9hZGluZ0JveChcIlwiLCB0aGlzLiRxKTtcbiAgICAgIEFQSWludGVyZmFjZS5zZXREZWZhdWx0UGF5bWVudChwYXltZW50VXVpZClcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLnBheW1lbnRfdXVpZCA9IHBheW1lbnRVdWlkO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgQVBJaW50ZXJmYWNlLm5vdGlmeShcInJlZC01XCIsIGVycm9yLCBcImVycm9yX291dGxpbmVcIiwgdGhpcy4kcSk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgQVBJaW50ZXJmYWNlLmhpZGVMb2FkaW5nQm94KHRoaXMuJHEpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbImRhdGEiLCJfY3JlYXRlQmxvY2siLCJfY3JlYXRlVk5vZGUiLCJfbm9ybWFsaXplQ2xhc3MiLCJfb3BlbkJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiLCJfVHJhbnNpdGlvbiIsIl93aXRoTW9kaWZpZXJzIiwiX2NyZWF0ZVRleHRWTm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrTEEsTUFBSyxZQUFVO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFJTixPQUFPO0FBQ0wsV0FBTztBQUFBLE1BQ0wsTUFBTSxDQUFFO0FBQUEsTUFDUixTQUFTO0FBQUEsTUFDVCxlQUFlO0FBQUEsTUFDZixjQUFjLENBQUU7QUFBQSxNQUNoQixjQUFjO0FBQUE7RUFFakI7QUFBQSxFQUNELFVBQVU7QUFDUixTQUFLLFdBQVU7QUFBQSxFQUNoQjtBQUFBLEVBQ0QsVUFBVTtBQUFBLElBQ1IsVUFBVTtBQUNSLFVBQUksS0FBSyxLQUFLLFNBQVMsR0FBRztBQUN4QixlQUFPO0FBQUEsTUFDVDtBQUNBLGFBQU87QUFBQSxJQUNSO0FBQUEsRUFDRjtBQUFBLEVBQ0QsU0FBUztBQUFBLElBQ1AsUUFBUSxNQUFNO0FBQ1osV0FBSyxXQUFXLElBQUk7QUFBQSxJQUNyQjtBQUFBLElBQ0QsV0FBVyxNQUFNO0FBQ2YsVUFBSSxhQUFhLE1BQU0sSUFBSSxHQUFHO0FBQzVCLGFBQUssVUFBVTtBQUFBLE1BQ2pCO0FBRUEsbUJBQWEsV0FBVyxFQUNyQixLQUFLLENBQUMsU0FBUztBQUNkLGFBQUssZUFBZSxLQUFLLFFBQVE7QUFDakMsYUFBSyxPQUFPLEtBQUss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
