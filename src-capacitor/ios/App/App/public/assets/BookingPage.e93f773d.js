import { _ as _export_sfc, l as defineAsyncComponent, R as useDataStore, m as APIinterface, n as resolveComponent, p as openBlock, V as createElementBlock, f as createVNode, t as withCtx, a7 as normalizeClass, F as Fragment, q as createBlock, Y as QBtn, aA as createCommentVNode, a6 as createTextVNode, Z as toDisplayString, aY as QInput, X as renderList, U as createBaseVNode, ac as QItem, bg as normalizeProps, bh as guardReactiveProps, ad as QItemSection, u as __vitePreload } from "./index.61ed5618.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QSelect } from "./QSelect.311187d6.js";
import { Q as QSpace } from "./QSpace.f164c087.js";
import { Q as QFooter } from "./QFooter.571ac042.js";
import { Q as QImg } from "./QImg.6c27044c.js";
import { Q as QItemLabel } from "./QItemLabel.a9365c5b.js";
import { Q as QForm } from "./QForm.7ded9d38.js";
import { Q as QInnerLoading } from "./QInnerLoading.abe2afe6.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import { u as useMenuStore } from "./MenuStore.f3a21da3.js";
import { u as useBookingStore } from "./BookingStore.34c084df.js";
import "./QResizeObserver.d08dce3c.js";
import "./QChip.f183a4f1.js";
import "./QMenu.8e482cd8.js";
import "./selection.50b4cb0c.js";
import "./rtl.f3ed811c.js";
import "./format.7f7370d3.js";
const _sfc_main = {
  name: "BookingPage",
  components: {
    componentsRecaptcha: defineAsyncComponent(
      () => __vitePreload(() => import("./componentsRecaptcha.5b3a38bd.js"), true ? ["assets/componentsRecaptcha.5b3a38bd.js","assets/index.61ed5618.js","assets/index.dbee30c0.css"] : void 0)
    )
  },
  data() {
    return {
      loading: false,
      recaptcha_response: "",
      success_data: []
    };
  },
  setup() {
    const BookingStore = useBookingStore();
    const MenuStore = useMenuStore();
    const DataStore = useDataStore();
    return {
      MenuStore,
      BookingStore,
      DataStore
    };
  },
  created() {
    this.BookingStore.steps = 1;
    this.BookingStore.reservation_date = "";
    this.BookingStore.reservation_time = "";
    this.Getbookingattributes();
  },
  watch: {
    DataStore: {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        if (Object.keys(newValue.phone_default_data).length > 0) {
          this.BookingStore.mobile_prefix = "+" + newValue.phone_default_data.phonecode;
        }
      }
    }
  },
  methods: {
    Getbookingattributes() {
      this.BookingStore.Getbookingattributes(this.MenuStore.merchant_uuid, "");
    },
    SetBooking() {
      this.BookingStore.SetBooking(this.MenuStore.merchant_uuid, "", this.$q);
    },
    recaptchaExpired() {
      if (APIinterface.empty(this.$refs.recapcha)) {
        this.$refs.recapcha.reset();
      }
    },
    recaptchaFailed() {
    },
    recaptchaVerified(response) {
      this.recaptcha_response = response;
    },
    onSubmit() {
      this.loading = true;
      let $params = "merchant_uuid=" + this.MenuStore.merchant_uuid;
      $params += "&reservation_date=" + this.BookingStore.reservation_date;
      $params += "&reservation_time=" + this.BookingStore.reservation_time;
      $params += "&guest=" + this.BookingStore.guest;
      $params += "&first_name=" + this.BookingStore.first_name;
      $params += "&last_name=" + this.BookingStore.last_name;
      $params += "&email_address=" + this.BookingStore.email_address;
      $params += "&mobile_prefix=" + this.BookingStore.mobile_prefix;
      $params += "&mobile_number=" + this.BookingStore.mobile_number;
      $params += "&room_uuid=" + this.BookingStore.room_uuid;
      $params += "&table_uuid=" + this.BookingStore.table_uuid;
      $params += "&special_request=" + this.BookingStore.special_request;
      $params += "&recaptcha_response=" + this.recaptcha_response;
      $params += "&id=" + this.BookingStore.reservation_uuid;
      APIinterface.fetchDataPostTable2("ReserveTable", $params).then((response) => {
        this.success_data = response.details;
        this.BookingStore.steps = 3;
        this.BookingStore.room_uuid = "";
        this.BookingStore.table_uuid = "";
      }).catch((error) => {
        this.success_data = [];
        APIinterface.notify("dark", error, "error_outline", this.$q);
        this.recaptchaExpired();
      }).then((data) => {
        this.loading = false;
      });
    }
  }
};
const _hoisted_1 = {
  key: 0,
  class: "row q-gutter-sm"
};
const _hoisted_2 = { class: "text-weight-bold font15 q-mt-md" };
const _hoisted_3 = ["innerHTML"];
const _hoisted_4 = { class: "q-mt-sm text-weight-bold font15" };
const _hoisted_5 = { class: "text-grey" };
const _hoisted_6 = { class: "q-mt-sm text-weight-bold font15" };
const _hoisted_7 = { class: "q-mt-sm text-weight-medium font15" };
const _hoisted_8 = { class: "text-grey q-mt-md q-mb-md" };
const _hoisted_9 = { class: "text-center q-pa-xl" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("svg", {
  class: "checkmark",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 52 52"
}, [
  /* @__PURE__ */ createBaseVNode("circle", {
    class: "checkmark__circle",
    cx: "26",
    cy: "26",
    r: "25",
    fill: "none"
  }),
  /* @__PURE__ */ createBaseVNode("path", {
    class: "checkmark__check",
    fill: "none",
    d: "M14.1 27.2l7.1 7.2 16.7-16.8"
  })
], -1);
const _hoisted_11 = {
  key: 0,
  class: "font16 q-mb-none"
};
const _hoisted_12 = ["innerHTML"];
const _hoisted_13 = { class: "font16 q-mb-none" };
const _hoisted_14 = { class: "text-grey" };
const _hoisted_15 = { class: "font15 line-normal q-mb-none" };
const _hoisted_16 = { class: "text-grey" };
const _hoisted_17 = { class: "text-success" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_componentsRecaptcha = resolveComponent("componentsRecaptcha");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(QHeader, {
      reveal: "",
      "reveal-offset": "10",
      class: normalizeClass({
        "bg-mydark text-white": _ctx.$q.dark.mode,
        "bg-white text-black": !_ctx.$q.dark.mode
      })
    }, {
      default: withCtx(() => [
        createVNode(QToolbar, null, {
          default: withCtx(() => [
            $setup.BookingStore.steps != 3 ? (openBlock(), createBlock(QBtn, {
              key: 0,
              onClick: _cache[0] || (_cache[0] = ($event) => $setup.BookingStore.steps == 1 ? _ctx.$router.back() : $setup.BookingStore.steps = 1),
              flat: "",
              round: "",
              dense: "",
              icon: "las la-angle-left",
              class: "q-mr-sm",
              color: _ctx.$q.dark.mode ? "white" : "dark"
            }, null, 8, ["color"])) : createCommentVNode("", true),
            $setup.BookingStore.steps != 3 ? (openBlock(), createBlock(QToolbarTitle, {
              key: 1,
              class: "text-weight-bold"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("Table Booking")), 1)
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["class"]),
    createVNode(QPage, { class: "q-pl-md q-pr-md" }, {
      default: withCtx(() => [
        $setup.BookingStore.hasData ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          $setup.BookingStore.getSteps == 1 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createVNode(QSelect, {
              modelValue: $setup.BookingStore.guest,
              "onUpdate:modelValue": [
                _cache[1] || (_cache[1] = ($event) => $setup.BookingStore.guest = $event),
                _cache[2] || (_cache[2] = ($event) => $setup.BookingStore.getTimeslot($setup.MenuStore.merchant_uuid))
              ],
              options: $setup.BookingStore.guest_list,
              label: _ctx.$t("Guest"),
              color: "primary",
              class: "q-mb-md col-xs-12 col-sm-12 col-md-4",
              "transition-show": "scale",
              "transition-hide": "scale",
              "emit-value": "",
              outlined: "",
              "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
              "label-color": _ctx.$q.dark.mode ? "grey300" : "grey"
            }, null, 8, ["modelValue", "options", "label", "bg-color", "label-color"]),
            createVNode(QSelect, {
              modelValue: $setup.BookingStore.reservation_date,
              "onUpdate:modelValue": [
                _cache[3] || (_cache[3] = ($event) => $setup.BookingStore.reservation_date = $event),
                _cache[4] || (_cache[4] = ($event) => $setup.BookingStore.getTimeslot($setup.MenuStore.merchant_uuid))
              ],
              options: $setup.BookingStore.date_list,
              label: _ctx.$t("Date"),
              color: "primary",
              class: "q-mb-md col-xs-12 col-sm-12 col-md-4",
              "transition-show": "scale",
              "transition-hide": "scale",
              "emit-value": "",
              "map-options": "",
              outlined: "",
              "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
              "label-color": _ctx.$q.dark.mode ? "grey300" : "grey"
            }, null, 8, ["modelValue", "options", "label", "bg-color", "label-color"]),
            createVNode(QInput, {
              modelValue: $setup.BookingStore.reservation_time,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.BookingStore.reservation_time = $event),
              label: _ctx.$t("Time"),
              outlined: "",
              "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
              "label-color": _ctx.$q.dark.mode ? "grey300" : "grey",
              disable: ""
            }, null, 8, ["modelValue", "label", "bg-color", "label-color"]),
            createVNode(QSpace, { class: "q-pa-sm" }),
            $setup.BookingStore.hasTimeSlot ? (openBlock(), createElementBlock("div", _hoisted_1, [
              (openBlock(true), createElementBlock(Fragment, null, renderList($setup.BookingStore.getTimeList, (items) => {
                return openBlock(), createElementBlock(Fragment, { key: items }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(items, (item, index) => {
                    return openBlock(), createElementBlock("div", {
                      key: item,
                      class: "col-2 text-center"
                    }, [
                      createVNode(QBtn, {
                        unelevated: "",
                        label: item,
                        class: "full-width",
                        outline: $setup.BookingStore.isSelected(index) ? false : true,
                        color: $setup.BookingStore.isSelected(index) ? _ctx.$q.dark.mode ? "grey300" : "primary" : $setup.BookingStore.isNotavailable(index) ? "grey" : _ctx.$q.dark.mode ? "grey300" : "black",
                        onClick: ($event) => $setup.BookingStore.reservation_time = index,
                        disabled: $setup.BookingStore.isNotavailable(index)
                      }, null, 8, ["label", "outline", "color", "onClick", "disabled"])
                    ]);
                  }), 128))
                ], 64);
              }), 128))
            ])) : createCommentVNode("", true),
            $setup.MenuStore.getBookingTc ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createBaseVNode("div", _hoisted_2, toDisplayString(_ctx.$t("Restaurant Terms & Conditions")), 1),
              createBaseVNode("div", {
                class: "text-grey",
                innerHTML: $setup.MenuStore.getBookingTc
              }, null, 8, _hoisted_3)
            ], 64)) : createCommentVNode("", true),
            createVNode(QSpace, { class: "q-pa-md" }),
            createVNode(QFooter, {
              reveal: "",
              class: "bg-primary text-dark"
            }, {
              default: withCtx(() => [
                createVNode(QBtn, {
                  color: "primary",
                  unelevated: "",
                  "no-caps": "",
                  class: "fit",
                  size: "lg",
                  disabled: !$setup.BookingStore.bookingValid,
                  loading: $setup.BookingStore.loading,
                  onClick: $options.SetBooking
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("Continue")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled", "loading", "onClick"])
              ]),
              _: 1
            })
          ], 64)) : createCommentVNode("", true),
          $setup.BookingStore.getSteps == 2 ? (openBlock(), createBlock(QForm, {
            key: 1,
            onSubmit: $options.onSubmit
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_4, toDisplayString(_ctx.$t("Reservation details")), 1),
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("div", null, toDisplayString($setup.BookingStore.reservation_info.full_time), 1),
                createBaseVNode("div", null, toDisplayString($setup.BookingStore.reservation_info.guest), 1)
              ]),
              createBaseVNode("div", _hoisted_6, toDisplayString(_ctx.$t("Personal details")), 1),
              createVNode(QInput, {
                modelValue: $setup.BookingStore.first_name,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.BookingStore.first_name = $event),
                label: _ctx.$t("First name"),
                "lazy-rules": "",
                rules: [
                  (val) => val && val.length > 0 || _ctx.$t("This field is required")
                ],
                outlined: "",
                "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
                "label-color": _ctx.$q.dark.mode ? "grey300" : "grey"
              }, null, 8, ["modelValue", "label", "rules", "bg-color", "label-color"]),
              createVNode(QInput, {
                modelValue: $setup.BookingStore.last_name,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.BookingStore.last_name = $event),
                label: _ctx.$t("Last name"),
                "lazy-rules": "",
                rules: [
                  (val) => val && val.length > 0 || _ctx.$t("This field is required")
                ],
                outlined: "",
                "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
                "label-color": _ctx.$q.dark.mode ? "grey300" : "grey"
              }, null, 8, ["modelValue", "label", "rules", "bg-color", "label-color"]),
              createVNode(QInput, {
                modelValue: $setup.BookingStore.email_address,
                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.BookingStore.email_address = $event),
                label: _ctx.$t("Email address"),
                "lazy-rules": "",
                rules: [
                  (val, rules) => rules.email(val) || _ctx.$t("Please enter a valid email address")
                ],
                outlined: "",
                "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
                "label-color": _ctx.$q.dark.mode ? "grey300" : "grey"
              }, null, 8, ["modelValue", "label", "rules", "bg-color", "label-color"]),
              createVNode(QInput, {
                modelValue: $setup.BookingStore.mobile_number,
                "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $setup.BookingStore.mobile_number = $event),
                mask: "##############",
                outlined: "",
                "lazy-rules": "",
                "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
                "label-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                borderless: "",
                class: "input-borderless",
                rules: [
                  (val) => val && val.length > 0 || this.$t("This field is required")
                ]
              }, {
                prepend: withCtx(() => [
                  createVNode(QSelect, {
                    dense: "",
                    modelValue: $setup.BookingStore.mobile_prefix,
                    "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $setup.BookingStore.mobile_prefix = $event),
                    options: $setup.DataStore.phone_prefix_data,
                    onFilter: _ctx.filterFn,
                    behavior: "dialog",
                    "input-debounce": "700",
                    style: { "border": "none" },
                    "emit-value": "",
                    borderlessx: "",
                    class: "myq-field"
                  }, {
                    option: withCtx(({ itemProps, opt }) => [
                      createVNode(QItem, normalizeProps(guardReactiveProps(itemProps)), {
                        default: withCtx(() => [
                          createVNode(QItemSection, { avatar: "" }, {
                            default: withCtx(() => [
                              createVNode(QImg, {
                                src: opt.flag,
                                style: { "height": "15px", "max-width": "20px" }
                              }, null, 8, ["src"])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(QItemSection, null, {
                            default: withCtx(() => [
                              createVNode(QItemLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(opt.label), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1040)
                    ]),
                    "no-option": withCtx(() => [
                      createVNode(QItem, null, {
                        default: withCtx(() => [
                          createVNode(QItemSection, { class: "text-grey" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("No results")), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "options", "onFilter"])
                ]),
                _: 1
              }, 8, ["modelValue", "bg-color", "label-color", "rules"]),
              $setup.MenuStore.allowChooseTable ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createVNode(QSelect, {
                  modelValue: $setup.BookingStore.room_uuid,
                  "onUpdate:modelValue": [
                    _cache[11] || (_cache[11] = ($event) => $setup.BookingStore.room_uuid = $event),
                    _cache[12] || (_cache[12] = ($event) => $setup.BookingStore.table_uuid = "")
                  ],
                  options: $setup.BookingStore.room_list,
                  label: _ctx.$t("Room name"),
                  "transition-show": "scale",
                  "transition-hide": "scale",
                  "emit-value": "",
                  "map-options": "",
                  rules: [
                    (val) => val && val.length > 0 || _ctx.$t("This field is required")
                  ]
                }, null, 8, ["modelValue", "options", "label", "rules"]),
                createVNode(QSelect, {
                  modelValue: $setup.BookingStore.table_uuid,
                  "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => $setup.BookingStore.table_uuid = $event),
                  options: $setup.BookingStore.table_list[$setup.BookingStore.room_uuid],
                  label: _ctx.$t("Table name"),
                  "transition-show": "scale",
                  "transition-hide": "scale",
                  "emit-value": "",
                  "map-options": "",
                  rules: [
                    (val) => val && val.length > 0 || _ctx.$t("This field is required")
                  ]
                }, null, 8, ["modelValue", "options", "label", "rules"])
              ], 64)) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_7, toDisplayString(_ctx.$t("Special request")), 1),
              createVNode(QInput, {
                modelValue: $setup.BookingStore.special_request,
                "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => $setup.BookingStore.special_request = $event),
                autogrow: "",
                color: "warning",
                outlined: "",
                "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
                "label-color": _ctx.$q.dark.mode ? "grey300" : "grey"
              }, null, 8, ["modelValue", "bg-color", "label-color"]),
              $setup.MenuStore.isBookingCaptcha ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createVNode(QSpace, { class: "q-pa-sm" }),
                createVNode(_component_componentsRecaptcha, {
                  ref: "recapcha",
                  is_enabled: "1",
                  size: "normal",
                  theme: "light",
                  tabindex: 0,
                  sitekey: $setup.DataStore.getBookingSettings.site_key,
                  language_code: $setup.DataStore.getBookingSettings.language,
                  onVerify: $options.recaptchaVerified,
                  onExpire: $options.recaptchaExpired,
                  onFail: $options.recaptchaFailed
                }, null, 8, ["sitekey", "language_code", "onVerify", "onExpire", "onFail"])
              ], 64)) : createCommentVNode("", true),
              createBaseVNode("p", _hoisted_8, toDisplayString(_ctx.$t(
                "By continuing, you agree to Terms of Service and Privacy Policy"
              )) + ". ", 1),
              createVNode(QFooter, {
                reveal: "",
                class: "bg-primary text-dark"
              }, {
                default: withCtx(() => [
                  createVNode(QBtn, {
                    type: "submit",
                    color: "primary",
                    unelevated: "",
                    "no-caps": "",
                    class: "fit",
                    size: "lg",
                    loading: $data.loading
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("Reserve")), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["onSubmit"])) : createCommentVNode("", true),
          $setup.BookingStore.getSteps == 3 ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
            createBaseVNode("div", _hoisted_9, [
              _hoisted_10,
              $setup.MenuStore.getBookingCustomMessage ? (openBlock(), createElementBlock("h4", _hoisted_11, [
                createBaseVNode("span", {
                  innerHTML: $setup.MenuStore.getBookingCustomMessage
                }, null, 8, _hoisted_12)
              ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createBaseVNode("h4", _hoisted_13, toDisplayString(_ctx.$t("Your reservation successfully placed")) + ". ", 1),
                createBaseVNode("p", _hoisted_14, toDisplayString(_ctx.$t(
                  "You will receive another email once your reservation is confirm"
                )) + ". ", 1)
              ], 64)),
              createBaseVNode("h5", _hoisted_15, toDisplayString($data.success_data.full_time), 1),
              createBaseVNode("div", _hoisted_16, [
                createBaseVNode("div", null, toDisplayString($data.success_data.guest), 1),
                createBaseVNode("div", null, [
                  createTextVNode(toDisplayString(_ctx.$t("Reservation ID")) + "# ", 1),
                  createBaseVNode("span", _hoisted_17, toDisplayString($data.success_data.reservation_id), 1)
                ])
              ]),
              createVNode(QSpace, { class: "q-pa-md" }),
              createVNode(QBtn, {
                type: "submit",
                color: "blue",
                unelevated: "",
                "no-caps": "",
                flat: "",
                to: {
                  name: "menu",
                  params: { slug: $setup.MenuStore.restaurant_slug }
                }
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("Reserved again")), 1)
                ]),
                _: 1
              }, 8, ["to"]),
              createVNode(QSpace, { class: "q-pa-md" })
            ]),
            createVNode(QFooter, {
              reveal: "",
              class: "bg-primary text-dark"
            }, {
              default: withCtx(() => [
                createVNode(QBtn, {
                  color: "primary",
                  unelevated: "",
                  "no-caps": "",
                  class: "fit",
                  size: "lg",
                  to: {
                    path: "/booking/track",
                    query: {
                      id: $data.success_data.reservation_uuid,
                      slug: $setup.MenuStore.restaurant_slug
                    }
                  },
                  replace: "true"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("Track")), 1)
                  ]),
                  _: 1
                }, 8, ["to"])
              ]),
              _: 1
            })
          ], 64)) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true),
        $setup.BookingStore.loading ? (openBlock(), createBlock(QInnerLoading, {
          key: 1,
          showing: true,
          color: _ctx.$q.dark.mode ? "grey300" : "primary"
        }, null, 8, ["color"])) : createCommentVNode("", true)
      ]),
      _: 1
    })
  ], 64);
}
var BookingPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "BookingPage.vue"]]);
export { BookingPage as default };
//# sourceMappingURL=data:application/json;base64,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QUNOO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNDLElBQUU7QUFBQTtrQkFBOEQsaUNBQVUsZ0JBQWU7QUFBQTs7aUNBSXpGLE1BQTBCO0FBQUEsa0RBQXZCLEtBQUU7QUFBQTs7O2NBR1JBLFlBQW1DLDJCQUFyQjtBQUFBO1lBRWhCQSxZQWlCVztBQUFBLGNBakJEO0FBQUEsY0FBTyxPQUFNO0FBQUE7K0JBQ3JCLE1BZUM7QUFBQSxnQkFmREEsWUFlQztBQUFBLGtCQWRDLE9BQU07QUFBQSxrQkFDTjtBQUFBLGtCQUNBO0FBQUEsa0JBQ0EsT0FBTTtBQUFBLGtCQUNOLE1BQUs7QUFBQSxrQkFDSixJQUFFO0FBQUE7O3NCQUFxRix1QkFBYTtBQUFBLHNCQUF3Qyx1QkFBVTtBQUFBOztrQkFPdkosU0FBUTtBQUFBO21DQUNQLE1BQWlCO0FBQUEsb0RBQWQsS0FBRTtBQUFBOzs7Ozs7OztRQVFFLG9CQUFhLHdCQUMzQkUsWUFHRTtBQUFBO1VBRkMsU0FBUztBQUFBLFVBQ1QsT0FBTyxRQUFHLEtBQUssT0FBSTtBQUFBIiwibmFtZXMiOlsiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9jcmVhdGVWTm9kZSIsIl9ub3JtYWxpemVDbGFzcyIsIl9jcmVhdGVCbG9jayIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfRnJhZ21lbnQiLCJfb3BlbkJsb2NrIiwiX3RvRGlzcGxheVN0cmluZyIsIl93aXRoQ3R4IiwiX2NyZWF0ZVRleHRWTm9kZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9Cb29raW5nL0Jvb2tpbmdQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLWhlYWRlclxuICAgIHJldmVhbFxuICAgIHJldmVhbC1vZmZzZXQ9XCIxMFwiXG4gICAgOmNsYXNzPVwie1xuICAgICAgJ2JnLW15ZGFyayB0ZXh0LXdoaXRlJzogJHEuZGFyay5tb2RlLFxuICAgICAgJ2JnLXdoaXRlIHRleHQtYmxhY2snOiAhJHEuZGFyay5tb2RlLFxuICAgIH1cIlxuICA+XG4gICAgPHEtdG9vbGJhcj5cbiAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiQm9va2luZ1N0b3JlLnN0ZXBzICE9IDNcIj5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgQGNsaWNrPVwiXG4gICAgICAgICAgICBCb29raW5nU3RvcmUuc3RlcHMgPT0gMSA/ICRyb3V0ZXIuYmFjaygpIDogKEJvb2tpbmdTdG9yZS5zdGVwcyA9IDEpXG4gICAgICAgICAgXCJcbiAgICAgICAgICBmbGF0XG4gICAgICAgICAgcm91bmRcbiAgICAgICAgICBkZW5zZVxuICAgICAgICAgIGljb249XCJsYXMgbGEtYW5nbGUtbGVmdFwiXG4gICAgICAgICAgY2xhc3M9XCJxLW1yLXNtXCJcbiAgICAgICAgICA6Y29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnd2hpdGUnIDogJ2RhcmsnXCJcbiAgICAgICAgLz5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8cS10b29sYmFyLXRpdGxlXG4gICAgICAgIHYtaWY9XCJCb29raW5nU3RvcmUuc3RlcHMgIT0gM1wiXG4gICAgICAgIGNsYXNzPVwidGV4dC13ZWlnaHQtYm9sZFwiXG4gICAgICAgID57eyAkdChcIlRhYmxlIEJvb2tpbmdcIikgfX08L3EtdG9vbGJhci10aXRsZVxuICAgICAgPlxuICAgIDwvcS10b29sYmFyPlxuICA8L3EtaGVhZGVyPlxuICA8cS1wYWdlIGNsYXNzPVwicS1wbC1tZCBxLXByLW1kXCI+XG4gICAgPHRlbXBsYXRlIHYtaWY9XCJCb29raW5nU3RvcmUuaGFzRGF0YVwiPlxuICAgICAgPHRlbXBsYXRlIHYtaWY9XCJCb29raW5nU3RvcmUuZ2V0U3RlcHMgPT0gMVwiPlxuICAgICAgICA8cS1zZWxlY3RcbiAgICAgICAgICB2LW1vZGVsPVwiQm9va2luZ1N0b3JlLmd1ZXN0XCJcbiAgICAgICAgICA6b3B0aW9ucz1cIkJvb2tpbmdTdG9yZS5ndWVzdF9saXN0XCJcbiAgICAgICAgICBAdXBkYXRlOm1vZGVsLXZhbHVlPVwiXG4gICAgICAgICAgICBCb29raW5nU3RvcmUuZ2V0VGltZXNsb3QoTWVudVN0b3JlLm1lcmNoYW50X3V1aWQpXG4gICAgICAgICAgXCJcbiAgICAgICAgICA6bGFiZWw9XCIkdCgnR3Vlc3QnKVwiXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICBjbGFzcz1cInEtbWItbWQgY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNFwiXG4gICAgICAgICAgdHJhbnNpdGlvbi1zaG93PVwic2NhbGVcIlxuICAgICAgICAgIHRyYW5zaXRpb24taGlkZT1cInNjYWxlXCJcbiAgICAgICAgICBlbWl0LXZhbHVlXG4gICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICA6YmctY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTYwMCcgOiAnaW5wdXQnXCJcbiAgICAgICAgICA6bGFiZWwtY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTMwMCcgOiAnZ3JleSdcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxxLXNlbGVjdFxuICAgICAgICAgIHYtbW9kZWw9XCJCb29raW5nU3RvcmUucmVzZXJ2YXRpb25fZGF0ZVwiXG4gICAgICAgICAgOm9wdGlvbnM9XCJCb29raW5nU3RvcmUuZGF0ZV9saXN0XCJcbiAgICAgICAgICBAdXBkYXRlOm1vZGVsLXZhbHVlPVwiXG4gICAgICAgICAgICBCb29raW5nU3RvcmUuZ2V0VGltZXNsb3QoTWVudVN0b3JlLm1lcmNoYW50X3V1aWQpXG4gICAgICAgICAgXCJcbiAgICAgICAgICA6bGFiZWw9XCIkdCgnRGF0ZScpXCJcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIGNsYXNzPVwicS1tYi1tZCBjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC00XCJcbiAgICAgICAgICB0cmFuc2l0aW9uLXNob3c9XCJzY2FsZVwiXG4gICAgICAgICAgdHJhbnNpdGlvbi1oaWRlPVwic2NhbGVcIlxuICAgICAgICAgIGVtaXQtdmFsdWVcbiAgICAgICAgICBtYXAtb3B0aW9uc1xuICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgOmJnLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXk2MDAnIDogJ2lucHV0J1wiXG4gICAgICAgICAgOmxhYmVsLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXkzMDAnIDogJ2dyZXknXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8cS1pbnB1dFxuICAgICAgICAgIHYtbW9kZWw9XCJCb29raW5nU3RvcmUucmVzZXJ2YXRpb25fdGltZVwiXG4gICAgICAgICAgOmxhYmVsPVwiJHQoJ1RpbWUnKVwiXG4gICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICA6YmctY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTYwMCcgOiAnaW5wdXQnXCJcbiAgICAgICAgICA6bGFiZWwtY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTMwMCcgOiAnZ3JleSdcIlxuICAgICAgICAgIGRpc2FibGVcbiAgICAgICAgLz5cblxuICAgICAgICA8cS1zcGFjZSBjbGFzcz1cInEtcGEtc21cIj48L3Etc3BhY2U+XG5cbiAgICAgICAgPGRpdiB2LWlmPVwiQm9va2luZ1N0b3JlLmhhc1RpbWVTbG90XCIgY2xhc3M9XCJyb3cgcS1ndXR0ZXItc21cIj5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJpdGVtcyBpbiBCb29raW5nU3RvcmUuZ2V0VGltZUxpc3RcIiA6a2V5PVwiaXRlbXNcIj5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gaXRlbXNcIiA6a2V5PVwiaXRlbVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIml0ZW1cIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmdWxsLXdpZHRoXCJcbiAgICAgICAgICAgICAgICAgIDpvdXRsaW5lPVwiQm9va2luZ1N0b3JlLmlzU2VsZWN0ZWQoaW5kZXgpID8gZmFsc2UgOiB0cnVlXCJcbiAgICAgICAgICAgICAgICAgIDpjb2xvcj1cIlxuICAgICAgICAgICAgICAgICAgICBCb29raW5nU3RvcmUuaXNTZWxlY3RlZChpbmRleClcbiAgICAgICAgICAgICAgICAgICAgICA/ICRxLmRhcmsubW9kZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyAnZ3JleTMwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJ3ByaW1hcnknXG4gICAgICAgICAgICAgICAgICAgICAgOiBCb29raW5nU3RvcmUuaXNOb3RhdmFpbGFibGUoaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgPyAnZ3JleSdcbiAgICAgICAgICAgICAgICAgICAgICA6ICRxLmRhcmsubW9kZVxuICAgICAgICAgICAgICAgICAgICAgID8gJ2dyZXkzMDAnXG4gICAgICAgICAgICAgICAgICAgICAgOiAnYmxhY2snXG4gICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiQm9va2luZ1N0b3JlLnJlc2VydmF0aW9uX3RpbWUgPSBpbmRleFwiXG4gICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJCb29raW5nU3RvcmUuaXNOb3RhdmFpbGFibGUoaW5kZXgpXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJNZW51U3RvcmUuZ2V0Qm9va2luZ1RjXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGQgZm9udDE1IHEtbXQtbWRcIj5cbiAgICAgICAgICAgIHt7ICR0KFwiUmVzdGF1cmFudCBUZXJtcyAmIENvbmRpdGlvbnNcIikgfX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1ncmV5XCIgdi1odG1sPVwiTWVudVN0b3JlLmdldEJvb2tpbmdUY1wiPjwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgIDxxLXNwYWNlIGNsYXNzPVwicS1wYS1tZFwiPjwvcS1zcGFjZT5cbiAgICAgICAgPHEtZm9vdGVyIHJldmVhbCBjbGFzcz1cImJnLXByaW1hcnkgdGV4dC1kYXJrXCI+XG4gICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgICAgY2xhc3M9XCJmaXRcIlxuICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAgIDpkaXNhYmxlZD1cIiFCb29raW5nU3RvcmUuYm9va2luZ1ZhbGlkXCJcbiAgICAgICAgICAgIDpsb2FkaW5nPVwiQm9va2luZ1N0b3JlLmxvYWRpbmdcIlxuICAgICAgICAgICAgQGNsaWNrPVwiU2V0Qm9va2luZ1wiXG4gICAgICAgICAgICA+e3sgJHQoXCJDb250aW51ZVwiKSB9fTwvcS1idG5cbiAgICAgICAgICA+XG4gICAgICAgIDwvcS1mb290ZXI+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPCEtLSBlbmQgc3RlcHMgMSAtLT5cblxuICAgICAgPHRlbXBsYXRlIHYtaWY9XCJCb29raW5nU3RvcmUuZ2V0U3RlcHMgPT0gMlwiPlxuICAgICAgICA8cS1mb3JtIEBzdWJtaXQ9XCJvblN1Ym1pdFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJxLW10LXNtIHRleHQtd2VpZ2h0LWJvbGQgZm9udDE1XCI+XG4gICAgICAgICAgICB7eyAkdChcIlJlc2VydmF0aW9uIGRldGFpbHNcIikgfX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1ncmV5XCI+XG4gICAgICAgICAgICA8ZGl2Pnt7IEJvb2tpbmdTdG9yZS5yZXNlcnZhdGlvbl9pbmZvLmZ1bGxfdGltZSB9fTwvZGl2PlxuICAgICAgICAgICAgPGRpdj57eyBCb29raW5nU3RvcmUucmVzZXJ2YXRpb25faW5mby5ndWVzdCB9fTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInEtbXQtc20gdGV4dC13ZWlnaHQtYm9sZCBmb250MTVcIj5cbiAgICAgICAgICAgIHt7ICR0KFwiUGVyc29uYWwgZGV0YWlsc1wiKSB9fVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICAgIHYtbW9kZWw9XCJCb29raW5nU3RvcmUuZmlyc3RfbmFtZVwiXG4gICAgICAgICAgICA6bGFiZWw9XCIkdCgnRmlyc3QgbmFtZScpXCJcbiAgICAgICAgICAgIGxhenktcnVsZXNcbiAgICAgICAgICAgIDpydWxlcz1cIltcbiAgICAgICAgICAgICAgKHZhbCkgPT4gKHZhbCAmJiB2YWwubGVuZ3RoID4gMCkgfHwgJHQoJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnKSxcbiAgICAgICAgICAgIF1cIlxuICAgICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICAgIDpiZy1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5NjAwJyA6ICdpbnB1dCdcIlxuICAgICAgICAgICAgOmxhYmVsLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXkzMDAnIDogJ2dyZXknXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgICB2LW1vZGVsPVwiQm9va2luZ1N0b3JlLmxhc3RfbmFtZVwiXG4gICAgICAgICAgICA6bGFiZWw9XCIkdCgnTGFzdCBuYW1lJylcIlxuICAgICAgICAgICAgbGF6eS1ydWxlc1xuICAgICAgICAgICAgOnJ1bGVzPVwiW1xuICAgICAgICAgICAgICAodmFsKSA9PiAodmFsICYmIHZhbC5sZW5ndGggPiAwKSB8fCAkdCgnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCcpLFxuICAgICAgICAgICAgXVwiXG4gICAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgICAgOmJnLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXk2MDAnIDogJ2lucHV0J1wiXG4gICAgICAgICAgICA6bGFiZWwtY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTMwMCcgOiAnZ3JleSdcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICAgIHYtbW9kZWw9XCJCb29raW5nU3RvcmUuZW1haWxfYWRkcmVzc1wiXG4gICAgICAgICAgICA6bGFiZWw9XCIkdCgnRW1haWwgYWRkcmVzcycpXCJcbiAgICAgICAgICAgIGxhenktcnVsZXNcbiAgICAgICAgICAgIDpydWxlcz1cIltcbiAgICAgICAgICAgICAgKHZhbCwgcnVsZXMpID0+XG4gICAgICAgICAgICAgICAgcnVsZXMuZW1haWwodmFsKSB8fCAkdCgnUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcycpLFxuICAgICAgICAgICAgXVwiXG4gICAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgICAgOmJnLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXk2MDAnIDogJ2lucHV0J1wiXG4gICAgICAgICAgICA6bGFiZWwtY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTMwMCcgOiAnZ3JleSdcIlxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8cS1pbnB1dFxuICAgICAgICAgICAgdi1tb2RlbD1cIkJvb2tpbmdTdG9yZS5tb2JpbGVfbnVtYmVyXCJcbiAgICAgICAgICAgIG1hc2s9XCIjIyMjIyMjIyMjIyMjI1wiXG4gICAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgICAgbGF6eS1ydWxlc1xuICAgICAgICAgICAgOmJnLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXk2MDAnIDogJ2lucHV0J1wiXG4gICAgICAgICAgICA6bGFiZWwtY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTMwMCcgOiAnZ3JleSdcIlxuICAgICAgICAgICAgYm9yZGVybGVzc1xuICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1ib3JkZXJsZXNzXCJcbiAgICAgICAgICAgIDpydWxlcz1cIltcbiAgICAgICAgICAgICAgKHZhbCkgPT5cbiAgICAgICAgICAgICAgICAodmFsICYmIHZhbC5sZW5ndGggPiAwKSB8fCB0aGlzLiR0KCdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJyksXG4gICAgICAgICAgICBdXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OnByZXBlbmQ+XG4gICAgICAgICAgICAgIDxxLXNlbGVjdFxuICAgICAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cIkJvb2tpbmdTdG9yZS5tb2JpbGVfcHJlZml4XCJcbiAgICAgICAgICAgICAgICA6b3B0aW9ucz1cIkRhdGFTdG9yZS5waG9uZV9wcmVmaXhfZGF0YVwiXG4gICAgICAgICAgICAgICAgQGZpbHRlcj1cImZpbHRlckZuXCJcbiAgICAgICAgICAgICAgICBiZWhhdmlvcj1cImRpYWxvZ1wiXG4gICAgICAgICAgICAgICAgaW5wdXQtZGVib3VuY2U9XCI3MDBcIlxuICAgICAgICAgICAgICAgIHN0eWxlPVwiYm9yZGVyOiBub25lXCJcbiAgICAgICAgICAgICAgICBlbWl0LXZhbHVlXG4gICAgICAgICAgICAgICAgYm9yZGVybGVzc3hcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm15cS1maWVsZFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90Om9wdGlvbj1cInsgaXRlbVByb3BzLCBvcHQgfVwiPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbSB2LWJpbmQ9XCJpdGVtUHJvcHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1pbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIDpzcmM9XCJvcHQuZmxhZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImhlaWdodDogMTVweDsgbWF4LXdpZHRoOiAyMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbD57eyBvcHQubGFiZWwgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpuby1vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gY2xhc3M9XCJ0ZXh0LWdyZXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7eyAkdChcIk5vIHJlc3VsdHNcIikgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDwvcS1zZWxlY3Q+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvcS1pbnB1dD5cblxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiTWVudVN0b3JlLmFsbG93Q2hvb3NlVGFibGVcIj5cbiAgICAgICAgICAgIDxxLXNlbGVjdFxuICAgICAgICAgICAgICB2LW1vZGVsPVwiQm9va2luZ1N0b3JlLnJvb21fdXVpZFwiXG4gICAgICAgICAgICAgIDpvcHRpb25zPVwiQm9va2luZ1N0b3JlLnJvb21fbGlzdFwiXG4gICAgICAgICAgICAgIEB1cGRhdGU6bW9kZWwtdmFsdWU9XCJCb29raW5nU3RvcmUudGFibGVfdXVpZCA9ICcnXCJcbiAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ1Jvb20gbmFtZScpXCJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1zaG93PVwic2NhbGVcIlxuICAgICAgICAgICAgICB0cmFuc2l0aW9uLWhpZGU9XCJzY2FsZVwiXG4gICAgICAgICAgICAgIGVtaXQtdmFsdWVcbiAgICAgICAgICAgICAgbWFwLW9wdGlvbnNcbiAgICAgICAgICAgICAgOnJ1bGVzPVwiW1xuICAgICAgICAgICAgICAgICh2YWwpID0+XG4gICAgICAgICAgICAgICAgICAodmFsICYmIHZhbC5sZW5ndGggPiAwKSB8fCAkdCgnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCcpLFxuICAgICAgICAgICAgICBdXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cS1zZWxlY3RcbiAgICAgICAgICAgICAgdi1tb2RlbD1cIkJvb2tpbmdTdG9yZS50YWJsZV91dWlkXCJcbiAgICAgICAgICAgICAgOm9wdGlvbnM9XCJCb29raW5nU3RvcmUudGFibGVfbGlzdFtCb29raW5nU3RvcmUucm9vbV91dWlkXVwiXG4gICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdUYWJsZSBuYW1lJylcIlxuICAgICAgICAgICAgICB0cmFuc2l0aW9uLXNob3c9XCJzY2FsZVwiXG4gICAgICAgICAgICAgIHRyYW5zaXRpb24taGlkZT1cInNjYWxlXCJcbiAgICAgICAgICAgICAgZW1pdC12YWx1ZVxuICAgICAgICAgICAgICBtYXAtb3B0aW9uc1xuICAgICAgICAgICAgICA6cnVsZXM9XCJbXG4gICAgICAgICAgICAgICAgKHZhbCkgPT5cbiAgICAgICAgICAgICAgICAgICh2YWwgJiYgdmFsLmxlbmd0aCA+IDApIHx8ICR0KCdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJyksXG4gICAgICAgICAgICAgIF1cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInEtbXQtc20gdGV4dC13ZWlnaHQtbWVkaXVtIGZvbnQxNVwiPlxuICAgICAgICAgICAge3sgJHQoXCJTcGVjaWFsIHJlcXVlc3RcIikgfX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgICB2LW1vZGVsPVwiQm9va2luZ1N0b3JlLnNwZWNpYWxfcmVxdWVzdFwiXG4gICAgICAgICAgICBhdXRvZ3Jvd1xuICAgICAgICAgICAgY29sb3I9XCJ3YXJuaW5nXCJcbiAgICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgICA6YmctY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTYwMCcgOiAnaW5wdXQnXCJcbiAgICAgICAgICAgIDpsYWJlbC1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICdncmV5J1wiXG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiTWVudVN0b3JlLmlzQm9va2luZ0NhcHRjaGFcIj5cbiAgICAgICAgICAgIDxxLXNwYWNlIGNsYXNzPVwicS1wYS1zbVwiPjwvcS1zcGFjZT5cbiAgICAgICAgICAgIDxjb21wb25lbnRzUmVjYXB0Y2hhXG4gICAgICAgICAgICAgIHJlZj1cInJlY2FwY2hhXCJcbiAgICAgICAgICAgICAgaXNfZW5hYmxlZD1cIjFcIlxuICAgICAgICAgICAgICBzaXplPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgdGhlbWU9XCJsaWdodFwiXG4gICAgICAgICAgICAgIDp0YWJpbmRleD1cIjBcIlxuICAgICAgICAgICAgICA6c2l0ZWtleT1cIkRhdGFTdG9yZS5nZXRCb29raW5nU2V0dGluZ3Muc2l0ZV9rZXlcIlxuICAgICAgICAgICAgICA6bGFuZ3VhZ2VfY29kZT1cIkRhdGFTdG9yZS5nZXRCb29raW5nU2V0dGluZ3MubGFuZ3VhZ2VcIlxuICAgICAgICAgICAgICBAdmVyaWZ5PVwicmVjYXB0Y2hhVmVyaWZpZWRcIlxuICAgICAgICAgICAgICBAZXhwaXJlPVwicmVjYXB0Y2hhRXhwaXJlZFwiXG4gICAgICAgICAgICAgIEBmYWlsPVwicmVjYXB0Y2hhRmFpbGVkXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1ncmV5IHEtbXQtbWQgcS1tYi1tZFwiPlxuICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgJHQoXG4gICAgICAgICAgICAgICAgXCJCeSBjb250aW51aW5nLCB5b3UgYWdyZWUgdG8gVGVybXMgb2YgU2VydmljZSBhbmQgUHJpdmFjeSBQb2xpY3lcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9fS5cbiAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICA8cS1mb290ZXIgcmV2ZWFsIGNsYXNzPVwiYmctcHJpbWFyeSB0ZXh0LWRhcmtcIj5cbiAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgICAgIGNsYXNzPVwiZml0XCJcbiAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAgICAgOmxvYWRpbmc9XCJsb2FkaW5nXCJcbiAgICAgICAgICAgICAgPnt7ICR0KFwiUmVzZXJ2ZVwiKSB9fTwvcS1idG5cbiAgICAgICAgICAgID5cbiAgICAgICAgICA8L3EtZm9vdGVyPlxuICAgICAgICA8L3EtZm9ybT5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8IS0tIEVORCBTVEVQUyAyIC0tPlxuXG4gICAgICA8dGVtcGxhdGUgdi1pZj1cIkJvb2tpbmdTdG9yZS5nZXRTdGVwcyA9PSAzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBxLXBhLXhsXCI+XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgY2xhc3M9XCJjaGVja21hcmtcIlxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDUyIDUyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICAgIGNsYXNzPVwiY2hlY2ttYXJrX19jaXJjbGVcIlxuICAgICAgICAgICAgICBjeD1cIjI2XCJcbiAgICAgICAgICAgICAgY3k9XCIyNlwiXG4gICAgICAgICAgICAgIHI9XCIyNVwiXG4gICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBjbGFzcz1cImNoZWNrbWFya19fY2hlY2tcIlxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgIGQ9XCJNMTQuMSAyNy4ybDcuMSA3LjIgMTYuNy0xNi44XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9zdmc+XG5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIk1lbnVTdG9yZS5nZXRCb29raW5nQ3VzdG9tTWVzc2FnZVwiPlxuICAgICAgICAgICAgPGg0IGNsYXNzPVwiZm9udDE2IHEtbWItbm9uZVwiPlxuICAgICAgICAgICAgICA8c3BhbiB2LWh0bWw9XCJNZW51U3RvcmUuZ2V0Qm9va2luZ0N1c3RvbU1lc3NhZ2VcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2g0PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgICAgIDxoNCBjbGFzcz1cImZvbnQxNiBxLW1iLW5vbmVcIj5cbiAgICAgICAgICAgICAge3sgJHQoXCJZb3VyIHJlc2VydmF0aW9uIHN1Y2Nlc3NmdWxseSBwbGFjZWRcIikgfX0uXG4gICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWdyZXlcIj5cbiAgICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgICAkdChcbiAgICAgICAgICAgICAgICAgIFwiWW91IHdpbGwgcmVjZWl2ZSBhbm90aGVyIGVtYWlsIG9uY2UgeW91ciByZXNlcnZhdGlvbiBpcyBjb25maXJtXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH19LlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPGg1IGNsYXNzPVwiZm9udDE1IGxpbmUtbm9ybWFsIHEtbWItbm9uZVwiPlxuICAgICAgICAgICAge3sgc3VjY2Vzc19kYXRhLmZ1bGxfdGltZSB9fVxuICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtZ3JleVwiPlxuICAgICAgICAgICAgPGRpdj57eyBzdWNjZXNzX2RhdGEuZ3Vlc3QgfX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIHt7ICR0KFwiUmVzZXJ2YXRpb24gSURcIikgfX0jXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1zdWNjZXNzXCI+e3tcbiAgICAgICAgICAgICAgICBzdWNjZXNzX2RhdGEucmVzZXJ2YXRpb25faWRcbiAgICAgICAgICAgICAgfX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxxLXNwYWNlIGNsYXNzPVwicS1wYS1tZFwiPjwvcS1zcGFjZT5cbiAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgY29sb3I9XCJibHVlXCJcbiAgICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgIDp0bz1cIntcbiAgICAgICAgICAgICAgbmFtZTogJ21lbnUnLFxuICAgICAgICAgICAgICBwYXJhbXM6IHsgc2x1ZzogTWVudVN0b3JlLnJlc3RhdXJhbnRfc2x1ZyB9LFxuICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICA+e3sgJHQoXCJSZXNlcnZlZCBhZ2FpblwiKSB9fTwvcS1idG5cbiAgICAgICAgICA+XG5cbiAgICAgICAgICA8cS1zcGFjZSBjbGFzcz1cInEtcGEtbWRcIj48L3Etc3BhY2U+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cS1mb290ZXIgcmV2ZWFsIGNsYXNzPVwiYmctcHJpbWFyeSB0ZXh0LWRhcmtcIj5cbiAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgICBjbGFzcz1cImZpdFwiXG4gICAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgICAgOnRvPVwie1xuICAgICAgICAgICAgICBwYXRoOiAnL2Jvb2tpbmcvdHJhY2snLFxuICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgIGlkOiBzdWNjZXNzX2RhdGEucmVzZXJ2YXRpb25fdXVpZCxcbiAgICAgICAgICAgICAgICBzbHVnOiBNZW51U3RvcmUucmVzdGF1cmFudF9zbHVnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICByZXBsYWNlPVwidHJ1ZVwiXG4gICAgICAgICAgICA+e3sgJHQoXCJUcmFja1wiKSB9fTwvcS1idG5cbiAgICAgICAgICA+XG4gICAgICAgIDwvcS1mb290ZXI+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPCEtLSBFTkQgU1RFUFMgMyAtLT5cbiAgICA8L3RlbXBsYXRlPlxuICAgIDwhLS0gZW5kIGhhcyBib29raW5nIGRhdGEgLS0+XG5cbiAgICA8dGVtcGxhdGUgdi1pZj1cIkJvb2tpbmdTdG9yZS5sb2FkaW5nXCI+XG4gICAgICA8cS1pbm5lci1sb2FkaW5nXG4gICAgICAgIDpzaG93aW5nPVwidHJ1ZVwiXG4gICAgICAgIDpjb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICdwcmltYXJ5J1wiXG4gICAgICAvPlxuICAgIDwvdGVtcGxhdGU+XG4gIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IGRlZmluZUFzeW5jQ29tcG9uZW50IH0gZnJvbSBcInZ1ZVwiO1xuaW1wb3J0IHsgdXNlTWVudVN0b3JlIH0gZnJvbSBcInN0b3Jlcy9NZW51U3RvcmVcIjtcbmltcG9ydCB7IHVzZUJvb2tpbmdTdG9yZSB9IGZyb20gXCJzdG9yZXMvQm9va2luZ1N0b3JlXCI7XG5pbXBvcnQgeyB1c2VEYXRhU3RvcmUgfSBmcm9tIFwic3RvcmVzL0RhdGFTdG9yZVwiO1xuaW1wb3J0IEFQSWludGVyZmFjZSBmcm9tIFwic3JjL2FwaS9BUElpbnRlcmZhY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIkJvb2tpbmdQYWdlXCIsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBjb21wb25lbnRzUmVjYXB0Y2hhOiBkZWZpbmVBc3luY0NvbXBvbmVudCgoKSA9PlxuICAgICAgaW1wb3J0KFwiY29tcG9uZW50cy9jb21wb25lbnRzUmVjYXB0Y2hhLnZ1ZVwiKVxuICAgICksXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgcmVjYXB0Y2hhX3Jlc3BvbnNlOiBcIlwiLFxuICAgICAgc3VjY2Vzc19kYXRhOiBbXSxcbiAgICB9O1xuICB9LFxuICBzZXR1cCgpIHtcbiAgICBjb25zdCBCb29raW5nU3RvcmUgPSB1c2VCb29raW5nU3RvcmUoKTtcbiAgICBjb25zdCBNZW51U3RvcmUgPSB1c2VNZW51U3RvcmUoKTtcbiAgICBjb25zdCBEYXRhU3RvcmUgPSB1c2VEYXRhU3RvcmUoKTtcbiAgICByZXR1cm4ge1xuICAgICAgTWVudVN0b3JlLFxuICAgICAgQm9va2luZ1N0b3JlLFxuICAgICAgRGF0YVN0b3JlLFxuICAgIH07XG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5Cb29raW5nU3RvcmUuc3RlcHMgPSAxO1xuICAgIHRoaXMuQm9va2luZ1N0b3JlLnJlc2VydmF0aW9uX2RhdGUgPSBcIlwiO1xuICAgIHRoaXMuQm9va2luZ1N0b3JlLnJlc2VydmF0aW9uX3RpbWUgPSBcIlwiO1xuICAgIHRoaXMuR2V0Ym9va2luZ2F0dHJpYnV0ZXMoKTtcbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBEYXRhU3RvcmU6IHtcbiAgICAgIGltbWVkaWF0ZTogdHJ1ZSxcbiAgICAgIGRlZXA6IHRydWUsXG4gICAgICBoYW5kbGVyKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMobmV3VmFsdWUucGhvbmVfZGVmYXVsdF9kYXRhKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhpcy5Cb29raW5nU3RvcmUubW9iaWxlX3ByZWZpeCA9XG4gICAgICAgICAgICBcIitcIiArIG5ld1ZhbHVlLnBob25lX2RlZmF1bHRfZGF0YS5waG9uZWNvZGU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIEdldGJvb2tpbmdhdHRyaWJ1dGVzKCkge1xuICAgICAgdGhpcy5Cb29raW5nU3RvcmUuR2V0Ym9va2luZ2F0dHJpYnV0ZXModGhpcy5NZW51U3RvcmUubWVyY2hhbnRfdXVpZCwgXCJcIik7XG4gICAgfSxcbiAgICBTZXRCb29raW5nKCkge1xuICAgICAgdGhpcy5Cb29raW5nU3RvcmUuU2V0Qm9va2luZyh0aGlzLk1lbnVTdG9yZS5tZXJjaGFudF91dWlkLCBcIlwiLCB0aGlzLiRxKTtcbiAgICB9LFxuICAgIHJlY2FwdGNoYUV4cGlyZWQoKSB7XG4gICAgICBpZiAoQVBJaW50ZXJmYWNlLmVtcHR5KHRoaXMuJHJlZnMucmVjYXBjaGEpKSB7XG4gICAgICAgIHRoaXMuJHJlZnMucmVjYXBjaGEucmVzZXQoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHJlY2FwdGNoYUZhaWxlZCgpIHt9LFxuICAgIHJlY2FwdGNoYVZlcmlmaWVkKHJlc3BvbnNlKSB7XG4gICAgICB0aGlzLnJlY2FwdGNoYV9yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgIH0sXG4gICAgb25TdWJtaXQoKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgbGV0ICRwYXJhbXMgPSBcIm1lcmNoYW50X3V1aWQ9XCIgKyB0aGlzLk1lbnVTdG9yZS5tZXJjaGFudF91dWlkO1xuICAgICAgJHBhcmFtcyArPSBcIiZyZXNlcnZhdGlvbl9kYXRlPVwiICsgdGhpcy5Cb29raW5nU3RvcmUucmVzZXJ2YXRpb25fZGF0ZTtcbiAgICAgICRwYXJhbXMgKz0gXCImcmVzZXJ2YXRpb25fdGltZT1cIiArIHRoaXMuQm9va2luZ1N0b3JlLnJlc2VydmF0aW9uX3RpbWU7XG4gICAgICAkcGFyYW1zICs9IFwiJmd1ZXN0PVwiICsgdGhpcy5Cb29raW5nU3RvcmUuZ3Vlc3Q7XG4gICAgICAkcGFyYW1zICs9IFwiJmZpcnN0X25hbWU9XCIgKyB0aGlzLkJvb2tpbmdTdG9yZS5maXJzdF9uYW1lO1xuICAgICAgJHBhcmFtcyArPSBcIiZsYXN0X25hbWU9XCIgKyB0aGlzLkJvb2tpbmdTdG9yZS5sYXN0X25hbWU7XG4gICAgICAkcGFyYW1zICs9IFwiJmVtYWlsX2FkZHJlc3M9XCIgKyB0aGlzLkJvb2tpbmdTdG9yZS5lbWFpbF9hZGRyZXNzO1xuICAgICAgJHBhcmFtcyArPSBcIiZtb2JpbGVfcHJlZml4PVwiICsgdGhpcy5Cb29raW5nU3RvcmUubW9iaWxlX3ByZWZpeDtcbiAgICAgICRwYXJhbXMgKz0gXCImbW9iaWxlX251bWJlcj1cIiArIHRoaXMuQm9va2luZ1N0b3JlLm1vYmlsZV9udW1iZXI7XG4gICAgICAkcGFyYW1zICs9IFwiJnJvb21fdXVpZD1cIiArIHRoaXMuQm9va2luZ1N0b3JlLnJvb21fdXVpZDtcbiAgICAgICRwYXJhbXMgKz0gXCImdGFibGVfdXVpZD1cIiArIHRoaXMuQm9va2luZ1N0b3JlLnRhYmxlX3V1aWQ7XG4gICAgICAkcGFyYW1zICs9IFwiJnNwZWNpYWxfcmVxdWVzdD1cIiArIHRoaXMuQm9va2luZ1N0b3JlLnNwZWNpYWxfcmVxdWVzdDtcbiAgICAgICRwYXJhbXMgKz0gXCImcmVjYXB0Y2hhX3Jlc3BvbnNlPVwiICsgdGhpcy5yZWNhcHRjaGFfcmVzcG9uc2U7XG4gICAgICAkcGFyYW1zICs9IFwiJmlkPVwiICsgdGhpcy5Cb29raW5nU3RvcmUucmVzZXJ2YXRpb25fdXVpZDtcblxuICAgICAgQVBJaW50ZXJmYWNlLmZldGNoRGF0YVBvc3RUYWJsZTIoXCJSZXNlcnZlVGFibGVcIiwgJHBhcmFtcylcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgdGhpcy5zdWNjZXNzX2RhdGEgPSByZXNwb25zZS5kZXRhaWxzO1xuICAgICAgICAgIHRoaXMuQm9va2luZ1N0b3JlLnN0ZXBzID0gMztcbiAgICAgICAgICB0aGlzLkJvb2tpbmdTdG9yZS5yb29tX3V1aWQgPSBcIlwiO1xuICAgICAgICAgIHRoaXMuQm9va2luZ1N0b3JlLnRhYmxlX3V1aWQgPSBcIlwiO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5zdWNjZXNzX2RhdGEgPSBbXTtcbiAgICAgICAgICBBUElpbnRlcmZhY2Uubm90aWZ5KFwiZGFya1wiLCBlcnJvciwgXCJlcnJvcl9vdXRsaW5lXCIsIHRoaXMuJHEpO1xuICAgICAgICAgIHRoaXMucmVjYXB0Y2hhRXhwaXJlZCgpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuIl0sImZpbGUiOiJhc3NldHMvQm9va2luZ1BhZ2UuZTkzZjc3M2QuanMifQ==
