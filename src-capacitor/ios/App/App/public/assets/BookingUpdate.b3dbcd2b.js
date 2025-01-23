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
  name: "BookingUpdate",
  components: {
    componentsRecaptcha: defineAsyncComponent(
      () => __vitePreload(() => import("./componentsRecaptcha.5b3a38bd.js"), true ? ["assets/componentsRecaptcha.5b3a38bd.js","assets/index.61ed5618.js","assets/index.dbee30c0.css"] : void 0)
    )
  },
  data() {
    return {
      loading: false,
      recaptcha_response: "",
      success_data: [],
      reservation_uuid: ""
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
    this.reservation_uuid = this.$route.query.id;
    this.Getbookingattributes();
  },
  methods: {
    Getbookingattributes() {
      this.reservation_uuid = this.$route.query.id;
      this.BookingStore.Getbookingdetails(this.reservation_uuid);
    },
    SetBooking() {
      this.BookingStore.SetBooking(
        this.BookingStore.merchant_uuid,
        this.reservation_uuid,
        this.$q
      );
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
      let $params = "merchant_uuid=" + this.BookingStore.merchant_uuid;
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
      $params += "&id=" + this.reservation_uuid;
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
const _hoisted_1 = { key: 0 };
const _hoisted_2 = {
  key: 0,
  class: "row q-gutter-sm"
};
const _hoisted_3 = { class: "text-weight-bold font15 q-mt-md" };
const _hoisted_4 = ["innerHTML"];
const _hoisted_5 = { class: "q-mt-sm text-weight-bold font15" };
const _hoisted_6 = { class: "text-grey" };
const _hoisted_7 = { class: "q-mt-sm text-weight-bold font15" };
const _hoisted_8 = { class: "q-mt-sm text-weight-medium font15" };
const _hoisted_9 = { class: "text-grey q-mt-md q-mb-md" };
const _hoisted_10 = { class: "text-center q-pa-xl" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("svg", {
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
const _hoisted_12 = {
  key: 0,
  class: "font16 q-mb-none"
};
const _hoisted_13 = ["innerHTML"];
const _hoisted_14 = { class: "font16 q-mb-none" };
const _hoisted_15 = { class: "text-grey" };
const _hoisted_16 = { class: "font15 line-normal q-mb-none" };
const _hoisted_17 = { class: "text-grey" };
const _hoisted_18 = { class: "text-success" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_componentsRecaptcha = resolveComponent("componentsRecaptcha");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(QHeader, {
      class: normalizeClass(["bg-whitex", {
        "bg-mydark text-white": _ctx.$q.dark.mode,
        "bg-white text-dark": !_ctx.$q.dark.mode
      }]),
      reveal: ""
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
              class: "text-weight-bold text-darkx"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("Update Reservation")), 1)
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["class"]),
    createVNode(QPage, {
      class: normalizeClass(["q-pl-md q-pr-md", { "flex flex-center": $setup.BookingStore.getErrors }])
    }, {
      default: withCtx(() => [
        $setup.BookingStore.getErrors ? (openBlock(), createElementBlock("div", _hoisted_1, toDisplayString($setup.BookingStore.getErrors), 1)) : createCommentVNode("", true),
        $setup.BookingStore.hasData ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
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
              disable: "",
              outlined: "",
              "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
              "label-color": _ctx.$q.dark.mode ? "grey300" : "grey"
            }, null, 8, ["modelValue", "label", "bg-color", "label-color"]),
            createVNode(QSpace, { class: "q-pa-sm" }),
            $setup.BookingStore.hasTimeSlot ? (openBlock(), createElementBlock("div", _hoisted_2, [
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
              createBaseVNode("div", _hoisted_3, toDisplayString(_ctx.$t("Restaurant Terms & Conditions")), 1),
              createBaseVNode("div", {
                class: "text-grey",
                innerHTML: $setup.MenuStore.getBookingTc
              }, null, 8, _hoisted_4)
            ], 64)) : createCommentVNode("", true),
            createVNode(QSpace, { class: "q-pa-md" }),
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
              createBaseVNode("div", _hoisted_5, toDisplayString(_ctx.$t("Reservation details")), 1),
              createBaseVNode("div", _hoisted_6, [
                createBaseVNode("div", null, toDisplayString($setup.BookingStore.reservation_info.full_time), 1),
                createBaseVNode("div", null, toDisplayString($setup.BookingStore.reservation_info.guest), 1)
              ]),
              createBaseVNode("div", _hoisted_7, toDisplayString(_ctx.$t("Personal details")), 1),
              createVNode(QInput, {
                modelValue: $setup.BookingStore.first_name,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.BookingStore.first_name = $event),
                label: _ctx.$t("First name"),
                outlined: "",
                "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
                "label-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                "lazy-rules": "",
                rules: [
                  (val) => val && val.length > 0 || _ctx.$t("This field is required")
                ]
              }, null, 8, ["modelValue", "label", "bg-color", "label-color", "rules"]),
              createVNode(QInput, {
                modelValue: $setup.BookingStore.last_name,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.BookingStore.last_name = $event),
                label: _ctx.$t("Last name"),
                outlined: "",
                "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
                "label-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                "lazy-rules": "",
                rules: [
                  (val) => val && val.length > 0 || _ctx.$t("This field is required")
                ]
              }, null, 8, ["modelValue", "label", "bg-color", "label-color", "rules"]),
              createVNode(QInput, {
                modelValue: $setup.BookingStore.email_address,
                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.BookingStore.email_address = $event),
                label: _ctx.$t("Email address"),
                outlined: "",
                "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
                "label-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                "lazy-rules": "",
                rules: [
                  (val, rules) => rules.email(val) || _ctx.$t("Please enter a valid email address")
                ]
              }, null, 8, ["modelValue", "label", "bg-color", "label-color", "rules"]),
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
              createBaseVNode("div", _hoisted_8, toDisplayString(_ctx.$t("Special request")), 1),
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
              createBaseVNode("p", _hoisted_9, toDisplayString(_ctx.$t(
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
            createBaseVNode("div", _hoisted_10, [
              _hoisted_11,
              $setup.MenuStore.getBookingCustomMessage ? (openBlock(), createElementBlock("h4", _hoisted_12, [
                createBaseVNode("span", {
                  innerHTML: $setup.MenuStore.getBookingCustomMessage
                }, null, 8, _hoisted_13)
              ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createBaseVNode("h4", _hoisted_14, toDisplayString(_ctx.$t("Your reservation successfully placed")) + ". ", 1),
                createBaseVNode("p", _hoisted_15, toDisplayString(_ctx.$t(
                  "You will receive another email once your reservation is confirm"
                )) + ". ", 1)
              ], 64)),
              createBaseVNode("h5", _hoisted_16, toDisplayString($data.success_data.full_time), 1),
              createBaseVNode("div", _hoisted_17, [
                createBaseVNode("div", null, toDisplayString($data.success_data.guest), 1),
                createBaseVNode("div", null, [
                  createTextVNode(toDisplayString(_ctx.$t("Reservation ID")) + "# ", 1),
                  createBaseVNode("span", _hoisted_18, toDisplayString($data.success_data.reservation_id), 1)
                ])
              ]),
              createVNode(QSpace, { class: "q-pa-md" })
            ]),
            createVNode(QFooter, {
              class: normalizeClass(["bg-primary text-dark", {
                "bg-mydark ": _ctx.$q.dark.mode,
                "bg-white ": !_ctx.$q.dark.mode
              }])
            }, {
              default: withCtx(() => [
                createVNode(QBtn, {
                  color: _ctx.$q.dark.mode ? "grey300" : "primary",
                  size: "lg",
                  unelevated: "",
                  "no-caps": "",
                  onClick: _cache[15] || (_cache[15] = ($event) => _ctx.$router.back()),
                  class: "fit"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("Done")), 1)
                  ]),
                  _: 1
                }, 8, ["color"])
              ]),
              _: 1
            }, 8, ["class"])
          ], 64)) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true),
        $setup.BookingStore.loading ? (openBlock(), createBlock(QInnerLoading, {
          key: 2,
          showing: true,
          color: _ctx.$q.dark.mode ? "grey300" : "primary"
        }, null, 8, ["color"])) : createCommentVNode("", true)
      ]),
      _: 1
    }, 8, ["class"])
  ], 64);
}
var BookingUpdate = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "BookingUpdate.vue"]]);
export { BookingUpdate as default };
//# sourceMappingURL=data:application/json;base64,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LEtBQUssT0FBSTtBQUFBLGtCQUNwQixNQUFLO0FBQUEsa0JBQ0w7QUFBQSxrQkFDQTtBQUFBLGtCQUNDLFNBQUssd0NBQUUsS0FBTyxRQUFDLEtBQUk7QUFBQSxrQkFDcEIsT0FBTTtBQUFBO21DQUNMLE1BQWdCO0FBQUEsb0RBQWIsS0FBRTtBQUFBOzs7Ozs7OztRQVFFLG9CQUFhLHdCQUMzQkMsWUFHRTtBQUFBO1VBRkMsU0FBUztBQUFBLFVBQ1QsT0FBTyxRQUFHLEtBQUssT0FBSTtBQUFBIiwibmFtZXMiOlsiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9jcmVhdGVWTm9kZSIsIl9jcmVhdGVCbG9jayIsIl9ub3JtYWxpemVDbGFzcyIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfRnJhZ21lbnQiLCJfb3BlbkJsb2NrIiwiX3RvRGlzcGxheVN0cmluZyIsIl93aXRoQ3R4IiwiX2NyZWF0ZVRleHRWTm9kZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9Cb29raW5nL0Jvb2tpbmdVcGRhdGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHEtaGVhZGVyXG4gICAgY2xhc3M9XCJiZy13aGl0ZXhcIlxuICAgIHJldmVhbFxuICAgIDpjbGFzcz1cIntcbiAgICAgICdiZy1teWRhcmsgdGV4dC13aGl0ZSc6ICRxLmRhcmsubW9kZSxcbiAgICAgICdiZy13aGl0ZSB0ZXh0LWRhcmsnOiAhJHEuZGFyay5tb2RlLFxuICAgIH1cIlxuICA+XG4gICAgPHEtdG9vbGJhcj5cbiAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiQm9va2luZ1N0b3JlLnN0ZXBzICE9IDNcIj5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgQGNsaWNrPVwiXG4gICAgICAgICAgICBCb29raW5nU3RvcmUuc3RlcHMgPT0gMSA/ICRyb3V0ZXIuYmFjaygpIDogKEJvb2tpbmdTdG9yZS5zdGVwcyA9IDEpXG4gICAgICAgICAgXCJcbiAgICAgICAgICBmbGF0XG4gICAgICAgICAgcm91bmRcbiAgICAgICAgICBkZW5zZVxuICAgICAgICAgIGljb249XCJsYXMgbGEtYW5nbGUtbGVmdFwiXG4gICAgICAgICAgY2xhc3M9XCJxLW1yLXNtXCJcbiAgICAgICAgICA6Y29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnd2hpdGUnIDogJ2RhcmsnXCJcbiAgICAgICAgLz5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8cS10b29sYmFyLXRpdGxlXG4gICAgICAgIHYtaWY9XCJCb29raW5nU3RvcmUuc3RlcHMgIT0gM1wiXG4gICAgICAgIGNsYXNzPVwidGV4dC13ZWlnaHQtYm9sZCB0ZXh0LWRhcmt4XCJcbiAgICAgICAgPnt7ICR0KFwiVXBkYXRlIFJlc2VydmF0aW9uXCIpIH19PC9xLXRvb2xiYXItdGl0bGVcbiAgICAgID5cbiAgICA8L3EtdG9vbGJhcj5cbiAgPC9xLWhlYWRlcj5cbiAgPHEtcGFnZVxuICAgIGNsYXNzPVwicS1wbC1tZCBxLXByLW1kXCJcbiAgICA6Y2xhc3M9XCJ7ICdmbGV4IGZsZXgtY2VudGVyJzogQm9va2luZ1N0b3JlLmdldEVycm9ycyB9XCJcbiAgPlxuICAgIDx0ZW1wbGF0ZSB2LWlmPVwiQm9va2luZ1N0b3JlLmdldEVycm9yc1wiPlxuICAgICAgPGRpdj5cbiAgICAgICAge3sgQm9va2luZ1N0b3JlLmdldEVycm9ycyB9fVxuICAgICAgPC9kaXY+XG4gICAgPC90ZW1wbGF0ZT5cblxuICAgIDx0ZW1wbGF0ZSB2LWlmPVwiQm9va2luZ1N0b3JlLmhhc0RhdGFcIj5cbiAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiQm9va2luZ1N0b3JlLmdldFN0ZXBzID09IDFcIj5cbiAgICAgICAgPHEtc2VsZWN0XG4gICAgICAgICAgdi1tb2RlbD1cIkJvb2tpbmdTdG9yZS5ndWVzdFwiXG4gICAgICAgICAgOm9wdGlvbnM9XCJCb29raW5nU3RvcmUuZ3Vlc3RfbGlzdFwiXG4gICAgICAgICAgQHVwZGF0ZTptb2RlbC12YWx1ZT1cIlxuICAgICAgICAgICAgQm9va2luZ1N0b3JlLmdldFRpbWVzbG90KE1lbnVTdG9yZS5tZXJjaGFudF91dWlkKVxuICAgICAgICAgIFwiXG4gICAgICAgICAgOmxhYmVsPVwiJHQoJ0d1ZXN0JylcIlxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgY2xhc3M9XCJxLW1iLW1kIGNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTRcIlxuICAgICAgICAgIHRyYW5zaXRpb24tc2hvdz1cInNjYWxlXCJcbiAgICAgICAgICB0cmFuc2l0aW9uLWhpZGU9XCJzY2FsZVwiXG4gICAgICAgICAgZW1pdC12YWx1ZVxuICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgOmJnLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXk2MDAnIDogJ2lucHV0J1wiXG4gICAgICAgICAgOmxhYmVsLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXkzMDAnIDogJ2dyZXknXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8cS1zZWxlY3RcbiAgICAgICAgICB2LW1vZGVsPVwiQm9va2luZ1N0b3JlLnJlc2VydmF0aW9uX2RhdGVcIlxuICAgICAgICAgIDpvcHRpb25zPVwiQm9va2luZ1N0b3JlLmRhdGVfbGlzdFwiXG4gICAgICAgICAgQHVwZGF0ZTptb2RlbC12YWx1ZT1cIlxuICAgICAgICAgICAgQm9va2luZ1N0b3JlLmdldFRpbWVzbG90KE1lbnVTdG9yZS5tZXJjaGFudF91dWlkKVxuICAgICAgICAgIFwiXG4gICAgICAgICAgOmxhYmVsPVwiJHQoJ0RhdGUnKVwiXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICBjbGFzcz1cInEtbWItbWQgY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNFwiXG4gICAgICAgICAgdHJhbnNpdGlvbi1zaG93PVwic2NhbGVcIlxuICAgICAgICAgIHRyYW5zaXRpb24taGlkZT1cInNjYWxlXCJcbiAgICAgICAgICBlbWl0LXZhbHVlXG4gICAgICAgICAgbWFwLW9wdGlvbnNcbiAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgIDpiZy1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5NjAwJyA6ICdpbnB1dCdcIlxuICAgICAgICAgIDpsYWJlbC1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICdncmV5J1wiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICB2LW1vZGVsPVwiQm9va2luZ1N0b3JlLnJlc2VydmF0aW9uX3RpbWVcIlxuICAgICAgICAgIDpsYWJlbD1cIiR0KCdUaW1lJylcIlxuICAgICAgICAgIGRpc2FibGVcbiAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgIDpiZy1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5NjAwJyA6ICdpbnB1dCdcIlxuICAgICAgICAgIDpsYWJlbC1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICdncmV5J1wiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPHEtc3BhY2UgY2xhc3M9XCJxLXBhLXNtXCI+PC9xLXNwYWNlPlxuXG4gICAgICAgIDxkaXYgdi1pZj1cIkJvb2tpbmdTdG9yZS5oYXNUaW1lU2xvdFwiIGNsYXNzPVwicm93IHEtZ3V0dGVyLXNtXCI+XG4gICAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiaXRlbXMgaW4gQm9va2luZ1N0b3JlLmdldFRpbWVMaXN0XCIgOmtleT1cIml0ZW1zXCI+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIGl0ZW1zXCIgOmtleT1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0yIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgICAgICAgICA6bGFiZWw9XCJpdGVtXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZnVsbC13aWR0aFwiXG4gICAgICAgICAgICAgICAgICA6b3V0bGluZT1cIkJvb2tpbmdTdG9yZS5pc1NlbGVjdGVkKGluZGV4KSA/IGZhbHNlIDogdHJ1ZVwiXG4gICAgICAgICAgICAgICAgICA6Y29sb3I9XCJcbiAgICAgICAgICAgICAgICAgICAgQm9va2luZ1N0b3JlLmlzU2VsZWN0ZWQoaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgPyAkcS5kYXJrLm1vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ2dyZXkzMDAnXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICdwcmltYXJ5J1xuICAgICAgICAgICAgICAgICAgICAgIDogQm9va2luZ1N0b3JlLmlzTm90YXZhaWxhYmxlKGluZGV4KVxuICAgICAgICAgICAgICAgICAgICAgID8gJ2dyZXknXG4gICAgICAgICAgICAgICAgICAgICAgOiAkcS5kYXJrLm1vZGVcbiAgICAgICAgICAgICAgICAgICAgICA/ICdncmV5MzAwJ1xuICAgICAgICAgICAgICAgICAgICAgIDogJ2JsYWNrJ1xuICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgIEBjbGljaz1cIkJvb2tpbmdTdG9yZS5yZXNlcnZhdGlvbl90aW1lID0gaW5kZXhcIlxuICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiQm9va2luZ1N0b3JlLmlzTm90YXZhaWxhYmxlKGluZGV4KVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiTWVudVN0b3JlLmdldEJvb2tpbmdUY1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXdlaWdodC1ib2xkIGZvbnQxNSBxLW10LW1kXCI+XG4gICAgICAgICAgICB7eyAkdChcIlJlc3RhdXJhbnQgVGVybXMgJiBDb25kaXRpb25zXCIpIH19XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtZ3JleVwiIHYtaHRtbD1cIk1lbnVTdG9yZS5nZXRCb29raW5nVGNcIj48L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICA8cS1zcGFjZSBjbGFzcz1cInEtcGEtbWRcIj48L3Etc3BhY2U+XG4gICAgICAgIDxxLWZvb3RlciByZXZlYWwgY2xhc3M9XCJiZy1wcmltYXJ5IHRleHQtZGFya1wiPlxuICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgICAgY2xhc3M9XCJmaXRcIlxuICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAgIDpkaXNhYmxlZD1cIiFCb29raW5nU3RvcmUuYm9va2luZ1ZhbGlkXCJcbiAgICAgICAgICAgIDpsb2FkaW5nPVwiQm9va2luZ1N0b3JlLmxvYWRpbmdcIlxuICAgICAgICAgICAgQGNsaWNrPVwiU2V0Qm9va2luZ1wiXG4gICAgICAgICAgICA+e3sgJHQoXCJDb250aW51ZVwiKSB9fTwvcS1idG5cbiAgICAgICAgICA+XG4gICAgICAgIDwvcS1mb290ZXI+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPCEtLSBlbmQgc3RlcHMgMSAtLT5cblxuICAgICAgPHRlbXBsYXRlIHYtaWY9XCJCb29raW5nU3RvcmUuZ2V0U3RlcHMgPT0gMlwiPlxuICAgICAgICA8cS1mb3JtIEBzdWJtaXQ9XCJvblN1Ym1pdFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJxLW10LXNtIHRleHQtd2VpZ2h0LWJvbGQgZm9udDE1XCI+XG4gICAgICAgICAgICB7eyAkdChcIlJlc2VydmF0aW9uIGRldGFpbHNcIikgfX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1ncmV5XCI+XG4gICAgICAgICAgICA8ZGl2Pnt7IEJvb2tpbmdTdG9yZS5yZXNlcnZhdGlvbl9pbmZvLmZ1bGxfdGltZSB9fTwvZGl2PlxuICAgICAgICAgICAgPGRpdj57eyBCb29raW5nU3RvcmUucmVzZXJ2YXRpb25faW5mby5ndWVzdCB9fTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInEtbXQtc20gdGV4dC13ZWlnaHQtYm9sZCBmb250MTVcIj5cbiAgICAgICAgICAgIHt7ICR0KFwiUGVyc29uYWwgZGV0YWlsc1wiKSB9fVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICAgIHYtbW9kZWw9XCJCb29raW5nU3RvcmUuZmlyc3RfbmFtZVwiXG4gICAgICAgICAgICA6bGFiZWw9XCIkdCgnRmlyc3QgbmFtZScpXCJcbiAgICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgICA6YmctY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTYwMCcgOiAnaW5wdXQnXCJcbiAgICAgICAgICAgIDpsYWJlbC1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICdncmV5J1wiXG4gICAgICAgICAgICBsYXp5LXJ1bGVzXG4gICAgICAgICAgICA6cnVsZXM9XCJbXG4gICAgICAgICAgICAgICh2YWwpID0+ICh2YWwgJiYgdmFsLmxlbmd0aCA+IDApIHx8ICR0KCdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJyksXG4gICAgICAgICAgICBdXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgICB2LW1vZGVsPVwiQm9va2luZ1N0b3JlLmxhc3RfbmFtZVwiXG4gICAgICAgICAgICA6bGFiZWw9XCIkdCgnTGFzdCBuYW1lJylcIlxuICAgICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICAgIDpiZy1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5NjAwJyA6ICdpbnB1dCdcIlxuICAgICAgICAgICAgOmxhYmVsLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXkzMDAnIDogJ2dyZXknXCJcbiAgICAgICAgICAgIGxhenktcnVsZXNcbiAgICAgICAgICAgIDpydWxlcz1cIltcbiAgICAgICAgICAgICAgKHZhbCkgPT4gKHZhbCAmJiB2YWwubGVuZ3RoID4gMCkgfHwgJHQoJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnKSxcbiAgICAgICAgICAgIF1cIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICAgIHYtbW9kZWw9XCJCb29raW5nU3RvcmUuZW1haWxfYWRkcmVzc1wiXG4gICAgICAgICAgICA6bGFiZWw9XCIkdCgnRW1haWwgYWRkcmVzcycpXCJcbiAgICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgICA6YmctY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTYwMCcgOiAnaW5wdXQnXCJcbiAgICAgICAgICAgIDpsYWJlbC1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICdncmV5J1wiXG4gICAgICAgICAgICBsYXp5LXJ1bGVzXG4gICAgICAgICAgICA6cnVsZXM9XCJbXG4gICAgICAgICAgICAgICh2YWwsIHJ1bGVzKSA9PlxuICAgICAgICAgICAgICAgIHJ1bGVzLmVtYWlsKHZhbCkgfHwgJHQoJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MnKSxcbiAgICAgICAgICAgIF1cIlxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8cS1pbnB1dFxuICAgICAgICAgICAgdi1tb2RlbD1cIkJvb2tpbmdTdG9yZS5tb2JpbGVfbnVtYmVyXCJcbiAgICAgICAgICAgIG1hc2s9XCIjIyMjIyMjIyMjIyMjI1wiXG4gICAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgICAgbGF6eS1ydWxlc1xuICAgICAgICAgICAgOmJnLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXk2MDAnIDogJ2lucHV0J1wiXG4gICAgICAgICAgICA6bGFiZWwtY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTMwMCcgOiAnZ3JleSdcIlxuICAgICAgICAgICAgYm9yZGVybGVzc1xuICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1ib3JkZXJsZXNzXCJcbiAgICAgICAgICAgIDpydWxlcz1cIltcbiAgICAgICAgICAgICAgKHZhbCkgPT5cbiAgICAgICAgICAgICAgICAodmFsICYmIHZhbC5sZW5ndGggPiAwKSB8fCB0aGlzLiR0KCdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJyksXG4gICAgICAgICAgICBdXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OnByZXBlbmQ+XG4gICAgICAgICAgICAgIDxxLXNlbGVjdFxuICAgICAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cIkJvb2tpbmdTdG9yZS5tb2JpbGVfcHJlZml4XCJcbiAgICAgICAgICAgICAgICA6b3B0aW9ucz1cIkRhdGFTdG9yZS5waG9uZV9wcmVmaXhfZGF0YVwiXG4gICAgICAgICAgICAgICAgQGZpbHRlcj1cImZpbHRlckZuXCJcbiAgICAgICAgICAgICAgICBiZWhhdmlvcj1cImRpYWxvZ1wiXG4gICAgICAgICAgICAgICAgaW5wdXQtZGVib3VuY2U9XCI3MDBcIlxuICAgICAgICAgICAgICAgIHN0eWxlPVwiYm9yZGVyOiBub25lXCJcbiAgICAgICAgICAgICAgICBlbWl0LXZhbHVlXG4gICAgICAgICAgICAgICAgYm9yZGVybGVzc3hcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm15cS1maWVsZFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90Om9wdGlvbj1cInsgaXRlbVByb3BzLCBvcHQgfVwiPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbSB2LWJpbmQ9XCJpdGVtUHJvcHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1pbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIDpzcmM9XCJvcHQuZmxhZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImhlaWdodDogMTVweDsgbWF4LXdpZHRoOiAyMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbD57eyBvcHQubGFiZWwgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpuby1vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gY2xhc3M9XCJ0ZXh0LWdyZXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7eyAkdChcIk5vIHJlc3VsdHNcIikgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDwvcS1zZWxlY3Q+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvcS1pbnB1dD5cblxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiTWVudVN0b3JlLmFsbG93Q2hvb3NlVGFibGVcIj5cbiAgICAgICAgICAgIDxxLXNlbGVjdFxuICAgICAgICAgICAgICB2LW1vZGVsPVwiQm9va2luZ1N0b3JlLnJvb21fdXVpZFwiXG4gICAgICAgICAgICAgIDpvcHRpb25zPVwiQm9va2luZ1N0b3JlLnJvb21fbGlzdFwiXG4gICAgICAgICAgICAgIEB1cGRhdGU6bW9kZWwtdmFsdWU9XCJCb29raW5nU3RvcmUudGFibGVfdXVpZCA9ICcnXCJcbiAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ1Jvb20gbmFtZScpXCJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1zaG93PVwic2NhbGVcIlxuICAgICAgICAgICAgICB0cmFuc2l0aW9uLWhpZGU9XCJzY2FsZVwiXG4gICAgICAgICAgICAgIGVtaXQtdmFsdWVcbiAgICAgICAgICAgICAgbWFwLW9wdGlvbnNcbiAgICAgICAgICAgICAgOnJ1bGVzPVwiW1xuICAgICAgICAgICAgICAgICh2YWwpID0+XG4gICAgICAgICAgICAgICAgICAodmFsICYmIHZhbC5sZW5ndGggPiAwKSB8fCAkdCgnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCcpLFxuICAgICAgICAgICAgICBdXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cS1zZWxlY3RcbiAgICAgICAgICAgICAgdi1tb2RlbD1cIkJvb2tpbmdTdG9yZS50YWJsZV91dWlkXCJcbiAgICAgICAgICAgICAgOm9wdGlvbnM9XCJCb29raW5nU3RvcmUudGFibGVfbGlzdFtCb29raW5nU3RvcmUucm9vbV91dWlkXVwiXG4gICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdUYWJsZSBuYW1lJylcIlxuICAgICAgICAgICAgICB0cmFuc2l0aW9uLXNob3c9XCJzY2FsZVwiXG4gICAgICAgICAgICAgIHRyYW5zaXRpb24taGlkZT1cInNjYWxlXCJcbiAgICAgICAgICAgICAgZW1pdC12YWx1ZVxuICAgICAgICAgICAgICBtYXAtb3B0aW9uc1xuICAgICAgICAgICAgICA6cnVsZXM9XCJbXG4gICAgICAgICAgICAgICAgKHZhbCkgPT5cbiAgICAgICAgICAgICAgICAgICh2YWwgJiYgdmFsLmxlbmd0aCA+IDApIHx8ICR0KCdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJyksXG4gICAgICAgICAgICAgIF1cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInEtbXQtc20gdGV4dC13ZWlnaHQtbWVkaXVtIGZvbnQxNVwiPlxuICAgICAgICAgICAge3sgJHQoXCJTcGVjaWFsIHJlcXVlc3RcIikgfX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgICB2LW1vZGVsPVwiQm9va2luZ1N0b3JlLnNwZWNpYWxfcmVxdWVzdFwiXG4gICAgICAgICAgICBhdXRvZ3Jvd1xuICAgICAgICAgICAgY29sb3I9XCJ3YXJuaW5nXCJcbiAgICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgICA6YmctY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTYwMCcgOiAnaW5wdXQnXCJcbiAgICAgICAgICAgIDpsYWJlbC1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICdncmV5J1wiXG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiTWVudVN0b3JlLmlzQm9va2luZ0NhcHRjaGFcIj5cbiAgICAgICAgICAgIDxxLXNwYWNlIGNsYXNzPVwicS1wYS1zbVwiPjwvcS1zcGFjZT5cbiAgICAgICAgICAgIDxjb21wb25lbnRzUmVjYXB0Y2hhXG4gICAgICAgICAgICAgIHJlZj1cInJlY2FwY2hhXCJcbiAgICAgICAgICAgICAgaXNfZW5hYmxlZD1cIjFcIlxuICAgICAgICAgICAgICBzaXplPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgdGhlbWU9XCJsaWdodFwiXG4gICAgICAgICAgICAgIDp0YWJpbmRleD1cIjBcIlxuICAgICAgICAgICAgICA6c2l0ZWtleT1cIkRhdGFTdG9yZS5nZXRCb29raW5nU2V0dGluZ3Muc2l0ZV9rZXlcIlxuICAgICAgICAgICAgICA6bGFuZ3VhZ2VfY29kZT1cIkRhdGFTdG9yZS5nZXRCb29raW5nU2V0dGluZ3MubGFuZ3VhZ2VcIlxuICAgICAgICAgICAgICBAdmVyaWZ5PVwicmVjYXB0Y2hhVmVyaWZpZWRcIlxuICAgICAgICAgICAgICBAZXhwaXJlPVwicmVjYXB0Y2hhRXhwaXJlZFwiXG4gICAgICAgICAgICAgIEBmYWlsPVwicmVjYXB0Y2hhRmFpbGVkXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1ncmV5IHEtbXQtbWQgcS1tYi1tZFwiPlxuICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgJHQoXG4gICAgICAgICAgICAgICAgXCJCeSBjb250aW51aW5nLCB5b3UgYWdyZWUgdG8gVGVybXMgb2YgU2VydmljZSBhbmQgUHJpdmFjeSBQb2xpY3lcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9fS5cbiAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICA8cS1mb290ZXIgcmV2ZWFsIGNsYXNzPVwiYmctcHJpbWFyeSB0ZXh0LWRhcmtcIj5cbiAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgICAgIGNsYXNzPVwiZml0XCJcbiAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAgICAgOmxvYWRpbmc9XCJsb2FkaW5nXCJcbiAgICAgICAgICAgICAgPnt7ICR0KFwiUmVzZXJ2ZVwiKSB9fTwvcS1idG5cbiAgICAgICAgICAgID5cbiAgICAgICAgICA8L3EtZm9vdGVyPlxuICAgICAgICA8L3EtZm9ybT5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8IS0tIEVORCBTVEVQUyAyIC0tPlxuXG4gICAgICA8dGVtcGxhdGUgdi1pZj1cIkJvb2tpbmdTdG9yZS5nZXRTdGVwcyA9PSAzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBxLXBhLXhsXCI+XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgY2xhc3M9XCJjaGVja21hcmtcIlxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDUyIDUyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICAgIGNsYXNzPVwiY2hlY2ttYXJrX19jaXJjbGVcIlxuICAgICAgICAgICAgICBjeD1cIjI2XCJcbiAgICAgICAgICAgICAgY3k9XCIyNlwiXG4gICAgICAgICAgICAgIHI9XCIyNVwiXG4gICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBjbGFzcz1cImNoZWNrbWFya19fY2hlY2tcIlxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgIGQ9XCJNMTQuMSAyNy4ybDcuMSA3LjIgMTYuNy0xNi44XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9zdmc+XG5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIk1lbnVTdG9yZS5nZXRCb29raW5nQ3VzdG9tTWVzc2FnZVwiPlxuICAgICAgICAgICAgPGg0IGNsYXNzPVwiZm9udDE2IHEtbWItbm9uZVwiPlxuICAgICAgICAgICAgICA8c3BhbiB2LWh0bWw9XCJNZW51U3RvcmUuZ2V0Qm9va2luZ0N1c3RvbU1lc3NhZ2VcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2g0PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgICAgIDxoNCBjbGFzcz1cImZvbnQxNiBxLW1iLW5vbmVcIj5cbiAgICAgICAgICAgICAge3sgJHQoXCJZb3VyIHJlc2VydmF0aW9uIHN1Y2Nlc3NmdWxseSBwbGFjZWRcIikgfX0uXG4gICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWdyZXlcIj5cbiAgICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgICAkdChcbiAgICAgICAgICAgICAgICAgIFwiWW91IHdpbGwgcmVjZWl2ZSBhbm90aGVyIGVtYWlsIG9uY2UgeW91ciByZXNlcnZhdGlvbiBpcyBjb25maXJtXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH19LlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPGg1IGNsYXNzPVwiZm9udDE1IGxpbmUtbm9ybWFsIHEtbWItbm9uZVwiPlxuICAgICAgICAgICAge3sgc3VjY2Vzc19kYXRhLmZ1bGxfdGltZSB9fVxuICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtZ3JleVwiPlxuICAgICAgICAgICAgPGRpdj57eyBzdWNjZXNzX2RhdGEuZ3Vlc3QgfX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIHt7ICR0KFwiUmVzZXJ2YXRpb24gSURcIikgfX0jXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1zdWNjZXNzXCI+e3tcbiAgICAgICAgICAgICAgICBzdWNjZXNzX2RhdGEucmVzZXJ2YXRpb25faWRcbiAgICAgICAgICAgICAgfX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxxLXNwYWNlIGNsYXNzPVwicS1wYS1tZFwiPjwvcS1zcGFjZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxxLWZvb3RlclxuICAgICAgICAgIGNsYXNzPVwiYmctcHJpbWFyeSB0ZXh0LWRhcmtcIlxuICAgICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICdiZy1teWRhcmsgJzogJHEuZGFyay5tb2RlLFxuICAgICAgICAgICAgJ2JnLXdoaXRlICc6ICEkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgfVwiXG4gICAgICAgID5cbiAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgIDpjb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICdwcmltYXJ5J1wiXG4gICAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgICAgQGNsaWNrPVwiJHJvdXRlci5iYWNrKClcIlxuICAgICAgICAgICAgY2xhc3M9XCJmaXRcIlxuICAgICAgICAgICAgPnt7ICR0KFwiRG9uZVwiKSB9fTwvcS1idG5cbiAgICAgICAgICA+XG4gICAgICAgIDwvcS1mb290ZXI+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPCEtLSBFTkQgU1RFUFMgMyAtLT5cbiAgICA8L3RlbXBsYXRlPlxuICAgIDwhLS0gZW5kIGhhcyBib29raW5nIGRhdGEgLS0+XG5cbiAgICA8dGVtcGxhdGUgdi1pZj1cIkJvb2tpbmdTdG9yZS5sb2FkaW5nXCI+XG4gICAgICA8cS1pbm5lci1sb2FkaW5nXG4gICAgICAgIDpzaG93aW5nPVwidHJ1ZVwiXG4gICAgICAgIDpjb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICdwcmltYXJ5J1wiXG4gICAgICAvPlxuICAgIDwvdGVtcGxhdGU+XG4gIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IGRlZmluZUFzeW5jQ29tcG9uZW50IH0gZnJvbSBcInZ1ZVwiO1xuaW1wb3J0IHsgdXNlTWVudVN0b3JlIH0gZnJvbSBcInN0b3Jlcy9NZW51U3RvcmVcIjtcbmltcG9ydCB7IHVzZUJvb2tpbmdTdG9yZSB9IGZyb20gXCJzdG9yZXMvQm9va2luZ1N0b3JlXCI7XG5pbXBvcnQgeyB1c2VEYXRhU3RvcmUgfSBmcm9tIFwic3RvcmVzL0RhdGFTdG9yZVwiO1xuaW1wb3J0IEFQSWludGVyZmFjZSBmcm9tIFwic3JjL2FwaS9BUElpbnRlcmZhY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIkJvb2tpbmdVcGRhdGVcIixcbiAgY29tcG9uZW50czoge1xuICAgIGNvbXBvbmVudHNSZWNhcHRjaGE6IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+XG4gICAgICBpbXBvcnQoXCJjb21wb25lbnRzL2NvbXBvbmVudHNSZWNhcHRjaGEudnVlXCIpXG4gICAgKSxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICByZWNhcHRjaGFfcmVzcG9uc2U6IFwiXCIsXG4gICAgICBzdWNjZXNzX2RhdGE6IFtdLFxuICAgICAgcmVzZXJ2YXRpb25fdXVpZDogXCJcIixcbiAgICB9O1xuICB9LFxuICBzZXR1cCgpIHtcbiAgICBjb25zdCBCb29raW5nU3RvcmUgPSB1c2VCb29raW5nU3RvcmUoKTtcbiAgICBjb25zdCBNZW51U3RvcmUgPSB1c2VNZW51U3RvcmUoKTtcbiAgICBjb25zdCBEYXRhU3RvcmUgPSB1c2VEYXRhU3RvcmUoKTtcbiAgICByZXR1cm4ge1xuICAgICAgTWVudVN0b3JlLFxuICAgICAgQm9va2luZ1N0b3JlLFxuICAgICAgRGF0YVN0b3JlLFxuICAgIH07XG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5Cb29raW5nU3RvcmUuc3RlcHMgPSAxO1xuICAgIHRoaXMucmVzZXJ2YXRpb25fdXVpZCA9IHRoaXMuJHJvdXRlLnF1ZXJ5LmlkO1xuICAgIHRoaXMuR2V0Ym9va2luZ2F0dHJpYnV0ZXMoKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIEdldGJvb2tpbmdhdHRyaWJ1dGVzKCkge1xuICAgICAgdGhpcy5yZXNlcnZhdGlvbl91dWlkID0gdGhpcy4kcm91dGUucXVlcnkuaWQ7XG4gICAgICB0aGlzLkJvb2tpbmdTdG9yZS5HZXRib29raW5nZGV0YWlscyh0aGlzLnJlc2VydmF0aW9uX3V1aWQpO1xuICAgIH0sXG4gICAgU2V0Qm9va2luZygpIHtcbiAgICAgIHRoaXMuQm9va2luZ1N0b3JlLlNldEJvb2tpbmcoXG4gICAgICAgIHRoaXMuQm9va2luZ1N0b3JlLm1lcmNoYW50X3V1aWQsXG4gICAgICAgIHRoaXMucmVzZXJ2YXRpb25fdXVpZCxcbiAgICAgICAgdGhpcy4kcVxuICAgICAgKTtcbiAgICB9LFxuICAgIHJlY2FwdGNoYUV4cGlyZWQoKSB7XG4gICAgICBpZiAoQVBJaW50ZXJmYWNlLmVtcHR5KHRoaXMuJHJlZnMucmVjYXBjaGEpKSB7XG4gICAgICAgIHRoaXMuJHJlZnMucmVjYXBjaGEucmVzZXQoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHJlY2FwdGNoYUZhaWxlZCgpIHt9LFxuICAgIHJlY2FwdGNoYVZlcmlmaWVkKHJlc3BvbnNlKSB7XG4gICAgICB0aGlzLnJlY2FwdGNoYV9yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgIH0sXG4gICAgb25TdWJtaXQoKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgbGV0ICRwYXJhbXMgPSBcIm1lcmNoYW50X3V1aWQ9XCIgKyB0aGlzLkJvb2tpbmdTdG9yZS5tZXJjaGFudF91dWlkO1xuICAgICAgJHBhcmFtcyArPSBcIiZyZXNlcnZhdGlvbl9kYXRlPVwiICsgdGhpcy5Cb29raW5nU3RvcmUucmVzZXJ2YXRpb25fZGF0ZTtcbiAgICAgICRwYXJhbXMgKz0gXCImcmVzZXJ2YXRpb25fdGltZT1cIiArIHRoaXMuQm9va2luZ1N0b3JlLnJlc2VydmF0aW9uX3RpbWU7XG4gICAgICAkcGFyYW1zICs9IFwiJmd1ZXN0PVwiICsgdGhpcy5Cb29raW5nU3RvcmUuZ3Vlc3Q7XG4gICAgICAkcGFyYW1zICs9IFwiJmZpcnN0X25hbWU9XCIgKyB0aGlzLkJvb2tpbmdTdG9yZS5maXJzdF9uYW1lO1xuICAgICAgJHBhcmFtcyArPSBcIiZsYXN0X25hbWU9XCIgKyB0aGlzLkJvb2tpbmdTdG9yZS5sYXN0X25hbWU7XG4gICAgICAkcGFyYW1zICs9IFwiJmVtYWlsX2FkZHJlc3M9XCIgKyB0aGlzLkJvb2tpbmdTdG9yZS5lbWFpbF9hZGRyZXNzO1xuICAgICAgJHBhcmFtcyArPSBcIiZtb2JpbGVfcHJlZml4PVwiICsgdGhpcy5Cb29raW5nU3RvcmUubW9iaWxlX3ByZWZpeDtcbiAgICAgICRwYXJhbXMgKz0gXCImbW9iaWxlX251bWJlcj1cIiArIHRoaXMuQm9va2luZ1N0b3JlLm1vYmlsZV9udW1iZXI7XG4gICAgICAkcGFyYW1zICs9IFwiJnJvb21fdXVpZD1cIiArIHRoaXMuQm9va2luZ1N0b3JlLnJvb21fdXVpZDtcbiAgICAgICRwYXJhbXMgKz0gXCImdGFibGVfdXVpZD1cIiArIHRoaXMuQm9va2luZ1N0b3JlLnRhYmxlX3V1aWQ7XG4gICAgICAkcGFyYW1zICs9IFwiJnNwZWNpYWxfcmVxdWVzdD1cIiArIHRoaXMuQm9va2luZ1N0b3JlLnNwZWNpYWxfcmVxdWVzdDtcbiAgICAgICRwYXJhbXMgKz0gXCImcmVjYXB0Y2hhX3Jlc3BvbnNlPVwiICsgdGhpcy5yZWNhcHRjaGFfcmVzcG9uc2U7XG4gICAgICAkcGFyYW1zICs9IFwiJmlkPVwiICsgdGhpcy5yZXNlcnZhdGlvbl91dWlkO1xuXG4gICAgICBBUElpbnRlcmZhY2UuZmV0Y2hEYXRhUG9zdFRhYmxlMihcIlJlc2VydmVUYWJsZVwiLCAkcGFyYW1zKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICB0aGlzLnN1Y2Nlc3NfZGF0YSA9IHJlc3BvbnNlLmRldGFpbHM7XG4gICAgICAgICAgdGhpcy5Cb29raW5nU3RvcmUuc3RlcHMgPSAzO1xuICAgICAgICAgIHRoaXMuQm9va2luZ1N0b3JlLnJvb21fdXVpZCA9IFwiXCI7XG4gICAgICAgICAgdGhpcy5Cb29raW5nU3RvcmUudGFibGVfdXVpZCA9IFwiXCI7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLnN1Y2Nlc3NfZGF0YSA9IFtdO1xuICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJkYXJrXCIsIGVycm9yLCBcImVycm9yX291dGxpbmVcIiwgdGhpcy4kcSk7XG4gICAgICAgICAgdGhpcy5yZWNhcHRjaGFFeHBpcmVkKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iXSwiZmlsZSI6ImFzc2V0cy9Cb29raW5nVXBkYXRlLmIzZGJjZDJiLmpzIn0=
