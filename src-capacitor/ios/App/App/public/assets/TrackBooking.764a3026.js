import { _ as _export_sfc, l as defineAsyncComponent, m as APIinterface, n as resolveComponent, p as openBlock, q as createBlock, t as withCtx, f as createVNode, Y as QBtn, a6 as createTextVNode, Z as toDisplayString, V as createElementBlock, aA as createCommentVNode, F as Fragment, a7 as normalizeClass, U as createBaseVNode, ac as QItem, ad as QItemSection, ae as QAvatar, u as __vitePreload } from "./index.61ed5618.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { a as QStepper, Q as QStep } from "./QStepper.90c3f5dd.js";
import { Q as QSpace } from "./QSpace.f164c087.js";
import { Q as QImg } from "./QImg.6c27044c.js";
import { Q as QItemLabel } from "./QItemLabel.a9365c5b.js";
import { Q as QList } from "./QList.b69a7e5b.js";
import { Q as QFooter } from "./QFooter.571ac042.js";
import { Q as QInnerLoading } from "./QInnerLoading.abe2afe6.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import { Q as QPullToRefresh } from "./QPullToRefresh.3d10c02d.js";
import { u as useBookingStore } from "./BookingStore.34c084df.js";
import "./QResizeObserver.d08dce3c.js";
import "./QSlideTransition.edc8ce9e.js";
import "./use-panel.225d73f4.js";
import "./touch.96e0ae37.js";
import "./selection.50b4cb0c.js";
import "./use-render-cache.b9e045af.js";
import "./format.7f7370d3.js";
const _sfc_main = {
  name: "TrackBooking",
  components: {
    ComponentsRealtime: defineAsyncComponent(
      () => __vitePreload(() => import("./ComponentsRealtime.d8c5a360.js"), true ? ["assets/ComponentsRealtime.d8c5a360.js","assets/index.d0b40bd3.js","assets/index.61ed5618.js","assets/index.dbee30c0.css"] : void 0)
    )
  },
  data() {
    return {
      reservation_uuid: "",
      steps: 1,
      slug: ""
    };
  },
  setup() {
    const BookingStore = useBookingStore();
    return { BookingStore };
  },
  created() {
    this.reservation_uuid = this.$route.query.id;
    this.slug = this.$route.query.slug;
    this.BookingDetails();
  },
  computed: {
    hasSlug() {
      if (APIinterface.empty(this.slug)) {
        return false;
      }
      return true;
    }
  },
  methods: {
    refresh(done) {
      this.BookingStore.getBookingDetails(this.reservation_uuid, done);
    },
    BookingDetails() {
      this.BookingStore.getBookingDetails(this.reservation_uuid, null);
    },
    afterReceive(data) {
      if (data.notification_type == "booking") {
        this.BookingDetails();
      }
    }
  }
};
const _hoisted_1 = { key: 0 };
const _hoisted_2 = {
  key: 0,
  class: "text-center"
};
const _hoisted_3 = { class: "q-pa-sm radius10" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ComponentsRealtime = resolveComponent("ComponentsRealtime");
  return openBlock(), createBlock(QPullToRefresh, { onRefresh: $options.refresh }, {
    default: withCtx(() => [
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
              $options.hasSlug ? (openBlock(), createBlock(QBtn, {
                key: 0,
                to: {
                  name: "menu",
                  params: { slug: this.slug }
                },
                flat: "",
                round: "",
                dense: "",
                icon: "las la-angle-left",
                class: "q-mr-sm",
                color: _ctx.$q.dark.mode ? "white" : "dark"
              }, null, 8, ["to", "color"])) : (openBlock(), createBlock(QBtn, {
                key: 1,
                onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$router.back()),
                flat: "",
                round: "",
                dense: "",
                icon: "las la-angle-left",
                class: "q-mr-sm",
                color: _ctx.$q.dark.mode ? "white" : "dark"
              }, null, 8, ["color"])),
              createVNode(QToolbarTitle, { class: "text-weight-bold" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("Track Booking")), 1)
                ]),
                _: 1
              }),
              $setup.BookingStore.hasBookingData ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                $setup.BookingStore.CanCancelReservation ? (openBlock(), createBlock(QBtn, {
                  key: 0,
                  dense: "",
                  flat: "",
                  unelevated: "",
                  color: "red-5",
                  round: "",
                  icon: "las la-trash",
                  class: "q-ml-md",
                  to: {
                    path: "/booking/cancel",
                    query: { id: this.reservation_uuid }
                  }
                }, null, 8, ["to"])) : createCommentVNode("", true)
              ], 64)) : createCommentVNode("", true)
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
          $setup.BookingStore.hasBookingData ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createBaseVNode("div", {
              class: normalizeClass(["q-pa-sm bg-mygreyx radius10", {
                "bg-grey600 ": _ctx.$q.dark.mode,
                "bg-mygrey ": !_ctx.$q.dark.mode
              }])
            }, [
              createVNode(QStepper, {
                modelValue: $data.steps,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.steps = $event),
                ref: "stepper",
                contracted: "",
                animated: "",
                flat: "",
                class: "bg-transparent",
                "done-color": "primary",
                "active-color": "primary",
                "inactive-color": _ctx.$q.dark.mode ? "grey300" : "white"
              }, {
                default: withCtx(() => [
                  createVNode(QStep, {
                    name: 1,
                    icon: "pending_actions",
                    "active-icon": "pending_actions",
                    "done-icon": "pending_actions",
                    "done-color": "green",
                    color: "grey300",
                    done: $setup.BookingStore.getBookingStatusSteps >= 1 || $setup.BookingStore.getBookingStatusSteps <= 0
                  }, null, 8, ["done"]),
                  createVNode(QStep, {
                    name: 2,
                    icon: "restaurant",
                    "active-icon": "restaurant",
                    "done-icon": "restaurant",
                    "done-color": $setup.BookingStore.getBookingStatusSteps >= 2 ? "primary" : "red",
                    color: "grey300",
                    done: $setup.BookingStore.getBookingStatusSteps >= 2 || $setup.BookingStore.getBookingStatusSteps <= 0
                  }, null, 8, ["done-color", "done"]),
                  createVNode(QStep, {
                    name: 3,
                    icon: "flag",
                    "active-icon": "flag",
                    "done-icon": "flag",
                    "done-color": $setup.BookingStore.getBookingStatusSteps >= 3 ? "primary" : "red",
                    color: "grey300",
                    done: $setup.BookingStore.getBookingStatusSteps >= 3 || $setup.BookingStore.getBookingStatusSteps <= 0
                  }, null, 8, ["done-color", "done"])
                ]),
                _: 1
              }, 8, ["modelValue", "inactive-color"])
            ], 2),
            $setup.BookingStore.getBookingStatusSteps <= 0 ? (openBlock(), createElementBlock("div", _hoisted_2, [
              createBaseVNode("div", {
                class: normalizeClass(["q-pa-sm", $setup.BookingStore.bookingStatusColor])
              }, toDisplayString($setup.BookingStore.booking_data.data.status_pretty), 3)
            ])) : (openBlock(), createBlock(QSpace, {
              key: 1,
              class: "q-pa-sm"
            })),
            createVNode(QList, null, {
              default: withCtx(() => [
                createVNode(QItem, null, {
                  default: withCtx(() => [
                    createVNode(QItemSection, { avatar: "" }, {
                      default: withCtx(() => [
                        createVNode(QAvatar, { rounded: "" }, {
                          default: withCtx(() => [
                            createVNode(QImg, {
                              src: $setup.BookingStore.getBooking.merchant.logo,
                              "spinner-size": "xs",
                              "spinner-color": "primary",
                              style: { "width": "80px", "height": "80px" },
                              fit: "cover"
                            }, null, 8, ["src"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, { top: "" }, {
                      default: withCtx(() => [
                        createVNode(QItemLabel, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString($setup.BookingStore.getBooking.merchant.restaurant_name), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(QItemLabel, { caption: "" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString($setup.BookingStore.getBooking.merchant.address), 1)
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
            }),
            createVNode(QSpace, { class: "q-pa-sm" }),
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("div", {
                class: normalizeClass(["text-weight-medium font15 q-pa-sm bg-mygreyx radius10", {
                  "bg-grey600 ": _ctx.$q.dark.mode,
                  "bg-mygrey ": !_ctx.$q.dark.mode
                }])
              }, toDisplayString(_ctx.$t("Reservation details")), 3),
              createVNode(QList, { separator: "" }, {
                default: withCtx(() => [
                  createVNode(QItem, { class: "q-pa-none" }, {
                    default: withCtx(() => [
                      createVNode(QItemSection, null, {
                        default: withCtx(() => [
                          createVNode(QItemLabel, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Reservation ID")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(QItemLabel, { caption: "" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString($setup.BookingStore.getBooking.data.reservation_id), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(QItem, { class: "q-pa-none" }, {
                    default: withCtx(() => [
                      createVNode(QItemSection, null, {
                        default: withCtx(() => [
                          createVNode(QItemLabel, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Guest")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(QItemLabel, { caption: "" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString($setup.BookingStore.getBooking.data.guest_number), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(QItem, { class: "q-pa-none" }, {
                    default: withCtx(() => [
                      createVNode(QItemSection, null, {
                        default: withCtx(() => [
                          createVNode(QItemLabel, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Date")) + " :", 1)
                            ]),
                            _: 1
                          }),
                          createVNode(QItemLabel, { caption: "" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString($setup.BookingStore.getBooking.data.reservation_date), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(QItem, { class: "q-pa-none" }, {
                    default: withCtx(() => [
                      createVNode(QItemSection, null, {
                        default: withCtx(() => [
                          createVNode(QItemLabel, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Time")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(QItemLabel, { caption: "" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString($setup.BookingStore.getBooking.data.reservation_time), 1)
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
              }),
              createVNode(QSpace, { class: "q-pa-sm" }),
              createBaseVNode("div", {
                class: normalizeClass(["text-weight-medium font15 q-pa-sm bg-mygreyx radius10", {
                  "bg-grey600 ": _ctx.$q.dark.mode,
                  "bg-mygrey ": !_ctx.$q.dark.mode
                }])
              }, toDisplayString(_ctx.$t("Your Details")), 3),
              createVNode(QList, { separator: "" }, {
                default: withCtx(() => [
                  createVNode(QItem, { class: "q-pa-none" }, {
                    default: withCtx(() => [
                      createVNode(QItemSection, null, {
                        default: withCtx(() => [
                          createVNode(QItemLabel, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Name")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(QItemLabel, { caption: "" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString($setup.BookingStore.getBooking.data.full_name), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(QItem, { class: "q-pa-none" }, {
                    default: withCtx(() => [
                      createVNode(QItemSection, null, {
                        default: withCtx(() => [
                          createVNode(QItemLabel, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Email address")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(QItemLabel, { caption: "" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString($setup.BookingStore.getBooking.data.email_address), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(QItem, { class: "q-pa-none" }, {
                    default: withCtx(() => [
                      createVNode(QItemSection, null, {
                        default: withCtx(() => [
                          createVNode(QItemLabel, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Contact number")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(QItemLabel, { caption: "" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString($setup.BookingStore.getBooking.data.contact_phone), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(QItem, { class: "q-pa-none" }, {
                    default: withCtx(() => [
                      createVNode(QItemSection, null, {
                        default: withCtx(() => [
                          createVNode(QItemLabel, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Special request")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(QItemLabel, { caption: "" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString($setup.BookingStore.getBooking.data.special_request), 1)
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
            $setup.BookingStore.CanCancelReservation ? (openBlock(), createBlock(QFooter, {
              key: 2,
              reveal: "",
              class: normalizeClass(["bg-primary text-dark", {
                "bg-mydark ": _ctx.$q.dark.mode,
                "bg-white ": !_ctx.$q.dark.mode
              }])
            }, {
              default: withCtx(() => [
                createVNode(QBtn, {
                  unelevated: "",
                  color: "primary",
                  label: _ctx.$t("Modify Reservation"),
                  class: "radius20 fit",
                  "no-caps": "",
                  size: "lg",
                  to: {
                    path: "/booking/update",
                    query: { id: this.reservation_uuid }
                  }
                }, null, 8, ["label", "to"])
              ]),
              _: 1
            }, 8, ["class"])) : createCommentVNode("", true)
          ], 64)) : createCommentVNode("", true),
          $setup.BookingStore.isLoading ? (openBlock(), createBlock(QInnerLoading, {
            key: 2,
            showing: true,
            color: _ctx.$q.dark.mode ? "grey300" : "primary"
          }, null, 8, ["color"])) : createCommentVNode("", true),
          createVNode(_component_ComponentsRealtime, {
            ref: "realtime",
            getevent: "notification_event",
            onAfterReceive: $options.afterReceive
          }, null, 8, ["onAfterReceive"])
        ]),
        _: 1
      }, 8, ["class"])
    ]),
    _: 1
  }, 8, ["onRefresh"]);
}
var TrackBooking = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "TrackBooking.vue"]]);
export { TrackBooking as default };
//# sourceMappingURL=data:application/json;base64,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Qlc7QUFBQTtjQXBCVDtBQUFBLGNBQ0EsdUJBQU0sd0JBQXNCO0FBQUEsOEJBQ1EsS0FBRSxHQUFDLEtBQUs7QUFBQSw4QkFBZ0MsS0FBRSxHQUFDLEtBQUs7QUFBQTs7K0JBTXBGLE1BV0U7QUFBQSxnQkFYRkMsWUFXRTtBQUFBLGtCQVZBO0FBQUEsa0JBQ0EsT0FBTTtBQUFBLGtCQUNMLE9BQU8sS0FBRTtBQUFBLGtCQUNWLE9BQU07QUFBQSxrQkFDTjtBQUFBLGtCQUNBLE1BQUs7QUFBQSxrQkFDSixJQUFFO0FBQUE7c0NBQTJFLGlCQUFnQjtBQUFBOzs7Ozs7VUFRcEYsb0JBQWEsMEJBQzNCRCxZQUdFO0FBQUE7WUFGQyxTQUFTO0FBQUEsWUFDVCxPQUFPLFFBQUcsS0FBSyxPQUFJO0FBQUE7VUFJeEJDLFlBSUU7QUFBQSxZQUhBLEtBQUk7QUFBQSxZQUNKLFVBQVM7QUFBQSxZQUNSLGdCQUFlLFNBQVk7QUFBQSIsIm5hbWVzIjpbIl9jcmVhdGVCbG9jayIsIl9jcmVhdGVWTm9kZSIsIl9ub3JtYWxpemVDbGFzcyIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfRnJhZ21lbnQiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX29wZW5CbG9jayIsIl9jcmVhdGVUZXh0Vk5vZGUiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvQm9va2luZy9UcmFja0Jvb2tpbmcudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHEtcHVsbC10by1yZWZyZXNoIEByZWZyZXNoPVwicmVmcmVzaFwiPlxuICAgIDxxLWhlYWRlclxuICAgICAgcmV2ZWFsXG4gICAgICByZXZlYWwtb2Zmc2V0PVwiMTBcIlxuICAgICAgOmNsYXNzPVwie1xuICAgICAgICAnYmctbXlkYXJrIHRleHQtd2hpdGUnOiAkcS5kYXJrLm1vZGUsXG4gICAgICAgICdiZy13aGl0ZSB0ZXh0LWJsYWNrJzogISRxLmRhcmsubW9kZSxcbiAgICAgIH1cIlxuICAgID5cbiAgICAgIDxxLXRvb2xiYXI+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIHYtaWY9XCJoYXNTbHVnXCJcbiAgICAgICAgICA6dG89XCJ7XG4gICAgICAgICAgICBuYW1lOiAnbWVudScsXG4gICAgICAgICAgICBwYXJhbXM6IHsgc2x1ZzogdGhpcy5zbHVnIH0sXG4gICAgICAgICAgfVwiXG4gICAgICAgICAgZmxhdFxuICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgZGVuc2VcbiAgICAgICAgICBpY29uPVwibGFzIGxhLWFuZ2xlLWxlZnRcIlxuICAgICAgICAgIGNsYXNzPVwicS1tci1zbVwiXG4gICAgICAgICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ3doaXRlJyA6ICdkYXJrJ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIHYtZWxzZVxuICAgICAgICAgIEBjbGljaz1cIiRyb3V0ZXIuYmFjaygpXCJcbiAgICAgICAgICBmbGF0XG4gICAgICAgICAgcm91bmRcbiAgICAgICAgICBkZW5zZVxuICAgICAgICAgIGljb249XCJsYXMgbGEtYW5nbGUtbGVmdFwiXG4gICAgICAgICAgY2xhc3M9XCJxLW1yLXNtXCJcbiAgICAgICAgICA6Y29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnd2hpdGUnIDogJ2RhcmsnXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHEtdG9vbGJhci10aXRsZSBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGRcIj57e1xuICAgICAgICAgICR0KFwiVHJhY2sgQm9va2luZ1wiKVxuICAgICAgICB9fTwvcS10b29sYmFyLXRpdGxlPlxuICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIkJvb2tpbmdTdG9yZS5oYXNCb29raW5nRGF0YVwiPlxuICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgdi1pZj1cIkJvb2tpbmdTdG9yZS5DYW5DYW5jZWxSZXNlcnZhdGlvblwiXG4gICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgICAgY29sb3I9XCJyZWQtNVwiXG4gICAgICAgICAgICByb3VuZFxuICAgICAgICAgICAgaWNvbj1cImxhcyBsYS10cmFzaFwiXG4gICAgICAgICAgICBjbGFzcz1cInEtbWwtbWRcIlxuICAgICAgICAgICAgOnRvPVwie1xuICAgICAgICAgICAgICBwYXRoOiAnL2Jvb2tpbmcvY2FuY2VsJyxcbiAgICAgICAgICAgICAgcXVlcnk6IHsgaWQ6IHRoaXMucmVzZXJ2YXRpb25fdXVpZCB9LFxuICAgICAgICAgICAgfVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvcS10b29sYmFyPlxuICAgIDwvcS1oZWFkZXI+XG4gICAgPHEtcGFnZVxuICAgICAgY2xhc3M9XCJxLXBsLW1kIHEtcHItbWRcIlxuICAgICAgOmNsYXNzPVwieyAnZmxleCBmbGV4LWNlbnRlcic6IEJvb2tpbmdTdG9yZS5nZXRFcnJvcnMgfVwiXG4gICAgPlxuICAgICAgPHRlbXBsYXRlIHYtaWY9XCJCb29raW5nU3RvcmUuZ2V0RXJyb3JzXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge3sgQm9va2luZ1N0b3JlLmdldEVycm9ycyB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgdi1pZj1cIkJvb2tpbmdTdG9yZS5oYXNCb29raW5nRGF0YVwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJxLXBhLXNtIGJnLW15Z3JleXggcmFkaXVzMTBcIlxuICAgICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICdiZy1ncmV5NjAwICc6ICRxLmRhcmsubW9kZSxcbiAgICAgICAgICAgICdiZy1teWdyZXkgJzogISRxLmRhcmsubW9kZSxcbiAgICAgICAgICB9XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxxLXN0ZXBwZXJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJzdGVwc1wiXG4gICAgICAgICAgICByZWY9XCJzdGVwcGVyXCJcbiAgICAgICAgICAgIGNvbnRyYWN0ZWRcbiAgICAgICAgICAgIGFuaW1hdGVkXG4gICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICBjbGFzcz1cImJnLXRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgIGRvbmUtY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIGFjdGl2ZS1jb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgOmluYWN0aXZlLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXkzMDAnIDogJ3doaXRlJ1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHEtc3RlcFxuICAgICAgICAgICAgICA6bmFtZT1cIjFcIlxuICAgICAgICAgICAgICBpY29uPVwicGVuZGluZ19hY3Rpb25zXCJcbiAgICAgICAgICAgICAgYWN0aXZlLWljb249XCJwZW5kaW5nX2FjdGlvbnNcIlxuICAgICAgICAgICAgICBkb25lLWljb249XCJwZW5kaW5nX2FjdGlvbnNcIlxuICAgICAgICAgICAgICBkb25lLWNvbG9yPVwiZ3JlZW5cIlxuICAgICAgICAgICAgICBjb2xvcj1cImdyZXkzMDBcIlxuICAgICAgICAgICAgICA6ZG9uZT1cIlxuICAgICAgICAgICAgICAgIEJvb2tpbmdTdG9yZS5nZXRCb29raW5nU3RhdHVzU3RlcHMgPj0gMSB8fFxuICAgICAgICAgICAgICAgIEJvb2tpbmdTdG9yZS5nZXRCb29raW5nU3RhdHVzU3RlcHMgPD0gMFxuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxxLXN0ZXBcbiAgICAgICAgICAgICAgOm5hbWU9XCIyXCJcbiAgICAgICAgICAgICAgaWNvbj1cInJlc3RhdXJhbnRcIlxuICAgICAgICAgICAgICBhY3RpdmUtaWNvbj1cInJlc3RhdXJhbnRcIlxuICAgICAgICAgICAgICBkb25lLWljb249XCJyZXN0YXVyYW50XCJcbiAgICAgICAgICAgICAgOmRvbmUtY29sb3I9XCJcbiAgICAgICAgICAgICAgICBCb29raW5nU3RvcmUuZ2V0Qm9va2luZ1N0YXR1c1N0ZXBzID49IDIgPyAncHJpbWFyeScgOiAncmVkJ1xuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICBjb2xvcj1cImdyZXkzMDBcIlxuICAgICAgICAgICAgICA6ZG9uZT1cIlxuICAgICAgICAgICAgICAgIEJvb2tpbmdTdG9yZS5nZXRCb29raW5nU3RhdHVzU3RlcHMgPj0gMiB8fFxuICAgICAgICAgICAgICAgIEJvb2tpbmdTdG9yZS5nZXRCb29raW5nU3RhdHVzU3RlcHMgPD0gMFxuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxxLXN0ZXBcbiAgICAgICAgICAgICAgOm5hbWU9XCIzXCJcbiAgICAgICAgICAgICAgaWNvbj1cImZsYWdcIlxuICAgICAgICAgICAgICBhY3RpdmUtaWNvbj1cImZsYWdcIlxuICAgICAgICAgICAgICBkb25lLWljb249XCJmbGFnXCJcbiAgICAgICAgICAgICAgOmRvbmUtY29sb3I9XCJcbiAgICAgICAgICAgICAgICBCb29raW5nU3RvcmUuZ2V0Qm9va2luZ1N0YXR1c1N0ZXBzID49IDMgPyAncHJpbWFyeScgOiAncmVkJ1xuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICBjb2xvcj1cImdyZXkzMDBcIlxuICAgICAgICAgICAgICA6ZG9uZT1cIlxuICAgICAgICAgICAgICAgIEJvb2tpbmdTdG9yZS5nZXRCb29raW5nU3RhdHVzU3RlcHMgPj0gMyB8fFxuICAgICAgICAgICAgICAgIEJvb2tpbmdTdG9yZS5nZXRCb29raW5nU3RhdHVzU3RlcHMgPD0gMFxuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3Etc3RlcHBlcj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJCb29raW5nU3RvcmUuZ2V0Qm9va2luZ1N0YXR1c1N0ZXBzIDw9IDBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJxLXBhLXNtXCIgOmNsYXNzPVwiQm9va2luZ1N0b3JlLmJvb2tpbmdTdGF0dXNDb2xvclwiPlxuICAgICAgICAgICAgICB7eyBCb29raW5nU3RvcmUuYm9va2luZ19kYXRhLmRhdGEuc3RhdHVzX3ByZXR0eSB9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICAgICAgPHEtc3BhY2UgY2xhc3M9XCJxLXBhLXNtXCI+PC9xLXNwYWNlPlxuICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgIDxxLWxpc3Q+XG4gICAgICAgICAgPHEtaXRlbT5cbiAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgICAgIDxxLWF2YXRhciByb3VuZGVkPlxuICAgICAgICAgICAgICAgIDxxLWltZ1xuICAgICAgICAgICAgICAgICAgOnNyYz1cIkJvb2tpbmdTdG9yZS5nZXRCb29raW5nLm1lcmNoYW50LmxvZ29cIlxuICAgICAgICAgICAgICAgICAgc3Bpbm5lci1zaXplPVwieHNcIlxuICAgICAgICAgICAgICAgICAgc3Bpbm5lci1jb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogODBweDsgaGVpZ2h0OiA4MHB4XCJcbiAgICAgICAgICAgICAgICAgIGZpdD1cImNvdmVyXCJcbiAgICAgICAgICAgICAgICA+PC9xLWltZz5cbiAgICAgICAgICAgICAgPC9xLWF2YXRhcj5cbiAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gdG9wPlxuICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsPnt7XG4gICAgICAgICAgICAgICAgQm9va2luZ1N0b3JlLmdldEJvb2tpbmcubWVyY2hhbnQucmVzdGF1cmFudF9uYW1lXG4gICAgICAgICAgICAgIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbj5cbiAgICAgICAgICAgICAgICB7eyBCb29raW5nU3RvcmUuZ2V0Qm9va2luZy5tZXJjaGFudC5hZGRyZXNzIH19XG4gICAgICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgPC9xLWxpc3Q+XG4gICAgICAgIDxxLXNwYWNlIGNsYXNzPVwicS1wYS1zbVwiPjwvcS1zcGFjZT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInEtcGEtc20gcmFkaXVzMTBcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cInRleHQtd2VpZ2h0LW1lZGl1bSBmb250MTUgcS1wYS1zbSBiZy1teWdyZXl4IHJhZGl1czEwXCJcbiAgICAgICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICAgJ2JnLWdyZXk2MDAgJzogJHEuZGFyay5tb2RlLFxuICAgICAgICAgICAgICAnYmctbXlncmV5ICc6ICEkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgICB9XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7eyAkdChcIlJlc2VydmF0aW9uIGRldGFpbHNcIikgfX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cS1saXN0IHNlcGFyYXRvcj5cbiAgICAgICAgICAgIDxxLWl0ZW0gY2xhc3M9XCJxLXBhLW5vbmVcIj5cbiAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+e3sgJHQoXCJSZXNlcnZhdGlvbiBJRFwiKSB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbj5cbiAgICAgICAgICAgICAgICAgIHt7IEJvb2tpbmdTdG9yZS5nZXRCb29raW5nLmRhdGEucmVzZXJ2YXRpb25faWQgfX1cbiAgICAgICAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgPHEtaXRlbSBjbGFzcz1cInEtcGEtbm9uZVwiPlxuICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbD57eyAkdChcIkd1ZXN0XCIpIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uPlxuICAgICAgICAgICAgICAgICAge3sgQm9va2luZ1N0b3JlLmdldEJvb2tpbmcuZGF0YS5ndWVzdF9udW1iZXIgfX1cbiAgICAgICAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgPHEtaXRlbSBjbGFzcz1cInEtcGEtbm9uZVwiPlxuICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbD57eyAkdChcIkRhdGVcIikgfX0gOjwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbj5cbiAgICAgICAgICAgICAgICAgIHt7IEJvb2tpbmdTdG9yZS5nZXRCb29raW5nLmRhdGEucmVzZXJ2YXRpb25fZGF0ZSB9fVxuICAgICAgICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICA8cS1pdGVtIGNsYXNzPVwicS1wYS1ub25lXCI+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsPnt7ICR0KFwiVGltZVwiKSB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbj5cbiAgICAgICAgICAgICAgICAgIHt7IEJvb2tpbmdTdG9yZS5nZXRCb29raW5nLmRhdGEucmVzZXJ2YXRpb25fdGltZSB9fVxuICAgICAgICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgPC9xLWxpc3Q+XG4gICAgICAgICAgPHEtc3BhY2UgY2xhc3M9XCJxLXBhLXNtXCI+PC9xLXNwYWNlPlxuXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LXdlaWdodC1tZWRpdW0gZm9udDE1IHEtcGEtc20gYmctbXlncmV5eCByYWRpdXMxMFwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICdiZy1ncmV5NjAwICc6ICRxLmRhcmsubW9kZSxcbiAgICAgICAgICAgICAgJ2JnLW15Z3JleSAnOiAhJHEuZGFyay5tb2RlLFxuICAgICAgICAgICAgfVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3sgJHQoXCJZb3VyIERldGFpbHNcIikgfX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cS1saXN0IHNlcGFyYXRvcj5cbiAgICAgICAgICAgIDxxLWl0ZW0gY2xhc3M9XCJxLXBhLW5vbmVcIj5cbiAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+e3sgJHQoXCJOYW1lXCIpIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uPlxuICAgICAgICAgICAgICAgICAge3sgQm9va2luZ1N0b3JlLmdldEJvb2tpbmcuZGF0YS5mdWxsX25hbWUgfX1cbiAgICAgICAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgPHEtaXRlbSBjbGFzcz1cInEtcGEtbm9uZVwiPlxuICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbD57eyAkdChcIkVtYWlsIGFkZHJlc3NcIikgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24+XG4gICAgICAgICAgICAgICAgICB7eyBCb29raW5nU3RvcmUuZ2V0Qm9va2luZy5kYXRhLmVtYWlsX2FkZHJlc3MgfX1cbiAgICAgICAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgPHEtaXRlbSBjbGFzcz1cInEtcGEtbm9uZVwiPlxuICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbD57eyAkdChcIkNvbnRhY3QgbnVtYmVyXCIpIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uPlxuICAgICAgICAgICAgICAgICAge3sgQm9va2luZ1N0b3JlLmdldEJvb2tpbmcuZGF0YS5jb250YWN0X3Bob25lIH19XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgIDxxLWl0ZW0gY2xhc3M9XCJxLXBhLW5vbmVcIj5cbiAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+e3sgJHQoXCJTcGVjaWFsIHJlcXVlc3RcIikgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24+XG4gICAgICAgICAgICAgICAgICB7eyBCb29raW5nU3RvcmUuZ2V0Qm9va2luZy5kYXRhLnNwZWNpYWxfcmVxdWVzdCB9fVxuICAgICAgICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgPC9xLWxpc3Q+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxxLWZvb3RlclxuICAgICAgICAgIHJldmVhbFxuICAgICAgICAgIGNsYXNzPVwiYmctcHJpbWFyeSB0ZXh0LWRhcmtcIlxuICAgICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICdiZy1teWRhcmsgJzogJHEuZGFyay5tb2RlLFxuICAgICAgICAgICAgJ2JnLXdoaXRlICc6ICEkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgfVwiXG4gICAgICAgICAgdi1pZj1cIkJvb2tpbmdTdG9yZS5DYW5DYW5jZWxSZXNlcnZhdGlvblwiXG4gICAgICAgID5cbiAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICA6bGFiZWw9XCIkdCgnTW9kaWZ5IFJlc2VydmF0aW9uJylcIlxuICAgICAgICAgICAgY2xhc3M9XCJyYWRpdXMyMCBmaXRcIlxuICAgICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAgIDp0bz1cIntcbiAgICAgICAgICAgICAgcGF0aDogJy9ib29raW5nL3VwZGF0ZScsXG4gICAgICAgICAgICAgIHF1ZXJ5OiB7IGlkOiB0aGlzLnJlc2VydmF0aW9uX3V1aWQgfSxcbiAgICAgICAgICAgIH1cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvcS1mb290ZXI+XG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICA8dGVtcGxhdGUgdi1pZj1cIkJvb2tpbmdTdG9yZS5pc0xvYWRpbmdcIj5cbiAgICAgICAgPHEtaW5uZXItbG9hZGluZ1xuICAgICAgICAgIDpzaG93aW5nPVwidHJ1ZVwiXG4gICAgICAgICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXkzMDAnIDogJ3ByaW1hcnknXCJcbiAgICAgICAgLz5cbiAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgIDxDb21wb25lbnRzUmVhbHRpbWVcbiAgICAgICAgcmVmPVwicmVhbHRpbWVcIlxuICAgICAgICBnZXRldmVudD1cIm5vdGlmaWNhdGlvbl9ldmVudFwiXG4gICAgICAgIEBhZnRlci1yZWNlaXZlPVwiYWZ0ZXJSZWNlaXZlXCJcbiAgICAgIC8+XG4gICAgPC9xLXBhZ2U+XG4gIDwvcS1wdWxsLXRvLXJlZnJlc2g+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgZGVmaW5lQXN5bmNDb21wb25lbnQgfSBmcm9tIFwidnVlXCI7XG5pbXBvcnQgeyB1c2VCb29raW5nU3RvcmUgfSBmcm9tIFwic3RvcmVzL0Jvb2tpbmdTdG9yZVwiO1xuaW1wb3J0IEFQSWludGVyZmFjZSBmcm9tIFwic3JjL2FwaS9BUElpbnRlcmZhY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIlRyYWNrQm9va2luZ1wiLFxuICBjb21wb25lbnRzOiB7XG4gICAgQ29tcG9uZW50c1JlYWx0aW1lOiBkZWZpbmVBc3luY0NvbXBvbmVudCgoKSA9PlxuICAgICAgaW1wb3J0KFwiY29tcG9uZW50cy9Db21wb25lbnRzUmVhbHRpbWUudnVlXCIpXG4gICAgKSxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzZXJ2YXRpb25fdXVpZDogXCJcIixcbiAgICAgIHN0ZXBzOiAxLFxuICAgICAgc2x1ZzogXCJcIixcbiAgICB9O1xuICB9LFxuICBzZXR1cCgpIHtcbiAgICBjb25zdCBCb29raW5nU3RvcmUgPSB1c2VCb29raW5nU3RvcmUoKTtcbiAgICByZXR1cm4geyBCb29raW5nU3RvcmUgfTtcbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLnJlc2VydmF0aW9uX3V1aWQgPSB0aGlzLiRyb3V0ZS5xdWVyeS5pZDtcbiAgICB0aGlzLnNsdWcgPSB0aGlzLiRyb3V0ZS5xdWVyeS5zbHVnO1xuICAgIHRoaXMuQm9va2luZ0RldGFpbHMoKTtcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBoYXNTbHVnKCkge1xuICAgICAgaWYgKEFQSWludGVyZmFjZS5lbXB0eSh0aGlzLnNsdWcpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICByZWZyZXNoKGRvbmUpIHtcbiAgICAgIHRoaXMuQm9va2luZ1N0b3JlLmdldEJvb2tpbmdEZXRhaWxzKHRoaXMucmVzZXJ2YXRpb25fdXVpZCwgZG9uZSk7XG4gICAgfSxcbiAgICBCb29raW5nRGV0YWlscygpIHtcbiAgICAgIHRoaXMuQm9va2luZ1N0b3JlLmdldEJvb2tpbmdEZXRhaWxzKHRoaXMucmVzZXJ2YXRpb25fdXVpZCwgbnVsbCk7XG4gICAgfSxcbiAgICBhZnRlclJlY2VpdmUoZGF0YSkge1xuICAgICAgaWYgKGRhdGEubm90aWZpY2F0aW9uX3R5cGUgPT0gXCJib29raW5nXCIpIHtcbiAgICAgICAgdGhpcy5Cb29raW5nRGV0YWlscygpO1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iXSwiZmlsZSI6ImFzc2V0cy9UcmFja0Jvb2tpbmcuNzY0YTMwMjYuanMifQ==
