import { aj as createDirective, ak as client, L as noop, al as leftClick, am as addEvt, aq as position, ar as cleanEvt, as as stopAndPrevent, _ as _export_sfc, m as APIinterface, p as openBlock, V as createElementBlock, f as createVNode, t as withCtx, q as createBlock, aA as createCommentVNode, F as Fragment, a7 as normalizeClass, Y as QBtn, a6 as createTextVNode, Z as toDisplayString, X as renderList, U as createBaseVNode, aa as withDirectives, ac as QItem, ad as QItemSection, bD as QCheckbox, ae as QAvatar } from "./index.61ed5618.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QItemLabel } from "./QItemLabel.a9365c5b.js";
import { Q as QBadge } from "./QBadge.6d32ed43.js";
import { Q as QSlideItem } from "./QSlideItem.7b72eeea.js";
import { Q as QList } from "./QList.b69a7e5b.js";
import { Q as QInnerLoading } from "./QInnerLoading.abe2afe6.js";
import { Q as QSpinnerDots } from "./QSpinnerDots.a9d9851d.js";
import { Q as QInfiniteScroll } from "./QInfiniteScroll.3e160277.js";
import { Q as QImg } from "./QImg.6c27044c.js";
import { Q as QPageScroller } from "./QPageScroller.2c709c91.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import { Q as QPullToRefresh } from "./QPullToRefresh.3d10c02d.js";
import { Q as QTab } from "./QTab.8fcc65d0.js";
import { Q as QTabs } from "./QTabs.2f5e29cb.js";
import { Q as QFooter } from "./QFooter.571ac042.js";
import { c as clearSelection } from "./selection.50b4cb0c.js";
import { u as useCartStore } from "./CartStore.484ff101.js";
import "./QResizeObserver.d08dce3c.js";
import "./use-render-cache.b9e045af.js";
import "./use-page-sticky.447afe02.js";
import "./touch.96e0ae37.js";
import "./format.7f7370d3.js";
import "./rtl.f3ed811c.js";
var TouchHold = createDirective(
  {
    name: "touch-hold",
    beforeMount(el, binding) {
      const { modifiers } = binding;
      if (modifiers.mouse !== true && client.has.touch !== true) {
        return;
      }
      const ctx = {
        handler: binding.value,
        noop,
        mouseStart(evt) {
          if (typeof ctx.handler === "function" && leftClick(evt) === true) {
            addEvt(ctx, "temp", [
              [document, "mousemove", "move", "passiveCapture"],
              [document, "click", "end", "notPassiveCapture"]
            ]);
            ctx.start(evt, true);
          }
        },
        touchStart(evt) {
          if (evt.target !== void 0 && typeof ctx.handler === "function") {
            const target = evt.target;
            addEvt(ctx, "temp", [
              [target, "touchmove", "move", "passiveCapture"],
              [target, "touchcancel", "end", "notPassiveCapture"],
              [target, "touchend", "end", "notPassiveCapture"]
            ]);
            ctx.start(evt);
          }
        },
        start(evt, mouseEvent) {
          ctx.origin = position(evt);
          const startTime = Date.now();
          if (client.is.mobile === true) {
            document.body.classList.add("non-selectable");
            clearSelection();
            ctx.styleCleanup = (withDelay) => {
              ctx.styleCleanup = void 0;
              const remove = () => {
                document.body.classList.remove("non-selectable");
              };
              if (withDelay === true) {
                clearSelection();
                setTimeout(remove, 10);
              } else {
                remove();
              }
            };
          }
          ctx.triggered = false;
          ctx.sensitivity = mouseEvent === true ? ctx.mouseSensitivity : ctx.touchSensitivity;
          ctx.timer = setTimeout(() => {
            ctx.timer = void 0;
            clearSelection();
            ctx.triggered = true;
            ctx.handler({
              evt,
              touch: mouseEvent !== true,
              mouse: mouseEvent === true,
              position: ctx.origin,
              duration: Date.now() - startTime
            });
          }, ctx.duration);
        },
        move(evt) {
          const { top, left } = position(evt);
          if (ctx.timer !== void 0 && (Math.abs(left - ctx.origin.left) >= ctx.sensitivity || Math.abs(top - ctx.origin.top) >= ctx.sensitivity)) {
            clearTimeout(ctx.timer);
            ctx.timer = void 0;
          }
        },
        end(evt) {
          cleanEvt(ctx, "temp");
          ctx.styleCleanup !== void 0 && ctx.styleCleanup(ctx.triggered);
          if (ctx.triggered === true) {
            evt !== void 0 && stopAndPrevent(evt);
          } else if (ctx.timer !== void 0) {
            clearTimeout(ctx.timer);
            ctx.timer = void 0;
          }
        }
      };
      const data = [600, 5, 7];
      if (typeof binding.arg === "string" && binding.arg.length !== 0) {
        binding.arg.split(":").forEach((val, index) => {
          const v = parseInt(val, 10);
          v && (data[index] = v);
        });
      }
      [ctx.duration, ctx.touchSensitivity, ctx.mouseSensitivity] = data;
      el.__qtouchhold = ctx;
      if (modifiers.mouse === true) {
        const capture = modifiers.mouseCapture === true || modifiers.mousecapture === true ? "Capture" : "";
        addEvt(ctx, "main", [
          [el, "mousedown", "mouseStart", `passive${capture}`]
        ]);
      }
      client.has.touch === true && addEvt(ctx, "main", [
        [el, "touchstart", "touchStart", `passive${modifiers.capture === true ? "Capture" : ""}`],
        [el, "touchend", "noop", "notPassiveCapture"]
      ]);
    },
    updated(el, binding) {
      const ctx = el.__qtouchhold;
      if (ctx !== void 0 && binding.oldValue !== binding.value) {
        typeof binding.value !== "function" && ctx.end();
        ctx.handler = binding.value;
      }
    },
    beforeUnmount(el) {
      const ctx = el.__qtouchhold;
      if (ctx !== void 0) {
        cleanEvt(ctx, "main");
        cleanEvt(ctx, "temp");
        ctx.timer !== void 0 && clearTimeout(ctx.timer);
        ctx.styleCleanup !== void 0 && ctx.styleCleanup();
        delete el.__qtouchhold;
      }
    }
  }
);
const _sfc_main = {
  name: "NotificationsPage",
  data() {
    return {
      loading: true,
      data: [],
      page: 0,
      data_done: false,
      is_refresh: void 0,
      hold: false,
      notification_uuids: [],
      tab: "delete"
    };
  },
  setup() {
    const CartStore = useCartStore();
    return { CartStore };
  },
  watch: {
    hold(newval, oldval) {
      if (!newval) {
        this.notification_uuids = [];
      }
    }
  },
  computed: {
    hasData() {
      if (Object.keys(this.data).length > 0) {
        return true;
      }
      return false;
    },
    itemToDelete() {
      return Object.keys(this.notification_uuids).length;
    }
  },
  methods: {
    refresh(done) {
      this.resetPagination();
      this.is_refresh = done;
    },
    getNotifications(index, done) {
      this.loading = true;
      APIinterface.getNotification(index).then((data) => {
        this.page = index;
        this.data.push(data.details.data);
        console.log(this.data);
      }).catch((error) => {
        this.data_done = true;
        this.$refs.nscroll.stop();
      }).then((data) => {
        done();
        this.loading = false;
        if (!APIinterface.empty(this.is_refresh)) {
          this.is_refresh();
        }
      });
    },
    resetPagination() {
      this.page = 0;
      this.data = [];
      this.$refs.nscroll.reset();
      this.$refs.nscroll.resume();
      this.$refs.nscroll.trigger();
    },
    deleteNotification(index1, index2, items) {
      this.data[index1].splice(index2, 1);
      APIinterface.deleteNotification(items.notification_uuid).then((data) => {
      });
    },
    handleHold(event) {
      this.hold = true;
    },
    resetHold() {
      this.hold = false;
      this.notification_uuids = [];
    },
    deleteAllNotification() {
      APIinterface.fetchDataByToken("deleteAllNotification", {
        notification_uuids: this.notification_uuids
      }).then((data) => {
        this.hold = false;
        this.resetPagination();
      }).catch((error) => {
      }).then((data) => {
      });
    },
    deleteAll() {
      this.$q.dialog({
        title: this.$t("Delete all"),
        message: this.$t("Are you sure want to delete all notifications?"),
        transitionShow: "fade",
        transitionHide: "fade",
        ok: {
          unelevated: true,
          color: "primary",
          rounded: false,
          "text-color": "white",
          size: "md",
          label: this.$t("Okay"),
          "no-caps": true
        }
      }).onOk(() => {
        APIinterface.fetchDataByToken("deleteNotifications", {}).then((data) => {
          this.hold = false;
          this.resetPagination();
        }).catch((error) => {
        }).then((data) => {
        });
      }).onCancel(() => {
      }).onDismiss(() => {
      });
    }
  }
};
const _hoisted_1 = ["src"];
const _hoisted_2 = {
  key: 1,
  class: "row justify-center q-my-md"
};
const _hoisted_3 = {
  key: 0,
  class: "row justify-center q-my-sm"
};
const _hoisted_4 = { class: "font12 text-grey" };
const _hoisted_5 = {
  key: 1,
  class: "full-width text-center"
};
const _hoisted_6 = { class: "text-h5 text-weight-bold" };
const _hoisted_7 = { class: "text-grey font12" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(QPullToRefresh, { onRefresh: $options.refresh }, {
      default: withCtx(() => [
        createVNode(QHeader, {
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
                    $data.hold ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      createTextVNode(toDisplayString($options.itemToDelete) + " " + toDisplayString(_ctx.$t("selected")), 1)
                    ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                      createTextVNode(toDisplayString(_ctx.$t("Notifications")), 1)
                    ], 64))
                  ]),
                  _: 1
                }),
                $data.hold ? (openBlock(), createBlock(QBtn, {
                  key: 0,
                  onClick: _cache[1] || (_cache[1] = ($event) => $data.hold = false),
                  flat: "",
                  round: "",
                  dense: "",
                  icon: "close",
                  color: _ctx.$q.dark.mode ? "white" : "dark"
                }, null, 8, ["color"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  $options.hasData ? (openBlock(), createBlock(QBtn, {
                    key: 0,
                    onClick: $options.deleteAll,
                    flat: "",
                    round: "",
                    dense: "",
                    icon: "las la-trash",
                    color: _ctx.$q.dark.mode ? "white" : "dark"
                  }, null, 8, ["onClick", "color"])) : createCommentVNode("", true)
                ], 64))
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["class"]),
        createVNode(QPage, {
          class: normalizeClass(["bg-transparent", { "flex flex-center": !$options.hasData && !$data.loading }])
        }, {
          default: withCtx(() => [
            createVNode(QInfiniteScroll, {
              ref: "nscroll",
              onLoad: $options.getNotifications,
              offset: 250
            }, {
              loading: withCtx(() => [
                $data.page <= 0 ? (openBlock(), createBlock(QInnerLoading, {
                  key: 0,
                  showing: true,
                  color: "primary",
                  size: "md"
                })) : (openBlock(), createElementBlock("div", _hoisted_2, [
                  createVNode(QSpinnerDots, {
                    color: "primary",
                    size: "40px"
                  })
                ]))
              ]),
              default: withCtx(() => [
                createVNode(QList, null, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList($data.data, (item, index1) => {
                      return openBlock(), createElementBlock(Fragment, { key: item }, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(item, (items, index2) => {
                          return openBlock(), createBlock(QSlideItem, {
                            key: items,
                            onAction: ($event) => $options.deleteNotification(index1, index2, items),
                            "right-color": _ctx.$q.dark.mode ? "grey600" : "mygrey"
                          }, {
                            right: withCtx(() => [
                              createVNode(QBtn, {
                                round: "",
                                color: "lightprimary",
                                "text-color": "primary",
                                icon: "las la-trash",
                                unelevated: "",
                                size: "sm"
                              })
                            ]),
                            default: withCtx(() => [
                              withDirectives((openBlock(), createBlock(QItem, {
                                tag: "label",
                                class: normalizeClass({
                                  "bg-mydark ": _ctx.$q.dark.mode,
                                  "bg-white ": !_ctx.$q.dark.mode
                                })
                              }, {
                                default: withCtx(() => [
                                  createVNode(QItemSection, { avatar: "" }, {
                                    default: withCtx(() => [
                                      $data.hold ? (openBlock(), createBlock(QCheckbox, {
                                        key: 0,
                                        modelValue: $data.notification_uuids,
                                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.notification_uuids = $event),
                                        val: items.notification_uuid
                                      }, null, 8, ["modelValue", "val"])) : (openBlock(), createBlock(QAvatar, { key: 1 }, {
                                        default: withCtx(() => [
                                          items.image_type == "image" ? (openBlock(), createElementBlock("img", {
                                            key: 0,
                                            src: items.image
                                          }, null, 8, _hoisted_1)) : (openBlock(), createBlock(QAvatar, {
                                            key: 1,
                                            color: "primary",
                                            "text-color": "white",
                                            icon: "notifications",
                                            size: "md"
                                          }))
                                        ]),
                                        _: 2
                                      }, 1024))
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(QItemSection, null, {
                                    default: withCtx(() => [
                                      createVNode(QItemLabel, {
                                        lines: "2",
                                        class: "text-weight-medium font13"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(items.message), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(QItemLabel, {
                                        caption: "",
                                        class: "font11"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(items.date), 1)
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
                                        color: "mygrey"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 2
                              }, 1032, ["class"])), [
                                [
                                  TouchHold,
                                  $options.handleHold,
                                  void 0,
                                  { mouse: true }
                                ]
                              ])
                            ]),
                            _: 2
                          }, 1032, ["onAction", "right-color"]);
                        }), 128))
                      ], 64);
                    }), 128))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["onLoad"]),
            !$data.loading ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              $options.hasData ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                $data.data_done && $data.data.length >= 10 ? (openBlock(), createElementBlock("div", _hoisted_3, [
                  createBaseVNode("p", _hoisted_4, toDisplayString(_ctx.$t("end of results")), 1)
                ])) : createCommentVNode("", true)
              ], 64)) : (openBlock(), createElementBlock("div", _hoisted_5, [
                createVNode(QImg, {
                  src: "no-notification.png",
                  fit: "fill",
                  "spinner-color": "primary",
                  style: { "height": "150px", "max-width": "200px" }
                }),
                createBaseVNode("div", _hoisted_6, toDisplayString(_ctx.$t("No notifications")), 1),
                createBaseVNode("p", _hoisted_7, toDisplayString(_ctx.$t("If there is notification it will show here")), 1)
              ]))
            ], 64)) : createCommentVNode("", true),
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
        }, 8, ["class"])
      ]),
      _: 1
    }, 8, ["onRefresh"]),
    $data.hold && $options.itemToDelete > 0 ? (openBlock(), createBlock(QFooter, {
      key: 0,
      class: "bg-lightprimary"
    }, {
      default: withCtx(() => [
        createVNode(QTabs, {
          modelValue: $data.tab,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.tab = $event),
          class: "text-grey-8",
          "no-caps": "",
          dense: "",
          shrink: "",
          "narrow-indicator": "",
          stretch: "",
          align: "left",
          breakpoint: 0,
          "indicator-color": "lightprimary"
        }, {
          default: withCtx(() => [
            createVNode(QTab, {
              name: "delete",
              icon: "las la-trash",
              label: _ctx.$t("Delete"),
              onClick: $options.deleteAllNotification
            }, null, 8, ["label", "onClick"])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]),
      _: 1
    })) : createCommentVNode("", true)
  ], 64);
}
var NotificationsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "NotificationsPage.vue"]]);
export { NotificationsPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90aWZpY2F0aW9uc1BhZ2UuOWYzYjM1ZDEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2RpcmVjdGl2ZXMvdG91Y2gtaG9sZC9Ub3VjaEhvbGQuanMiLCIuLi8uLi8uLi9zcmMvcGFnZXMvQWNjb3VudC9Ob3RpZmljYXRpb25zUGFnZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xpZW50IH0gZnJvbSAnLi4vLi4vcGx1Z2lucy9wbGF0Zm9ybS9QbGF0Zm9ybS5qcydcblxuaW1wb3J0IHsgY3JlYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgYWRkRXZ0LCBjbGVhbkV2dCwgcG9zaXRpb24sIGxlZnRDbGljaywgc3RvcEFuZFByZXZlbnQsIG5vb3AgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC9ldmVudC5qcydcbmltcG9ydCB7IGNsZWFyU2VsZWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5zZWxlY3Rpb24vc2VsZWN0aW9uLmpzJ1xuaW1wb3J0IGdldFNTUlByb3BzIGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUubm9vcC1zc3ItZGlyZWN0aXZlLXRyYW5zZm9ybS9ub29wLXNzci1kaXJlY3RpdmUtdHJhbnNmb3JtLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVEaXJlY3RpdmUoX19RVUFTQVJfU1NSX1NFUlZFUl9fXG4gID8geyBuYW1lOiAndG91Y2gtaG9sZCcsIGdldFNTUlByb3BzIH1cbiAgOiB7XG4gICAgICBuYW1lOiAndG91Y2gtaG9sZCcsXG5cbiAgICAgIGJlZm9yZU1vdW50IChlbCwgYmluZGluZykge1xuICAgICAgICBjb25zdCB7IG1vZGlmaWVycyB9ID0gYmluZGluZ1xuXG4gICAgICAgIC8vIGVhcmx5IHJldHVybiwgd2UgZG9uJ3QgbmVlZCB0byBkbyBhbnl0aGluZ1xuICAgICAgICBpZiAobW9kaWZpZXJzLm1vdXNlICE9PSB0cnVlICYmIGNsaWVudC5oYXMudG91Y2ggIT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN0eCA9IHtcbiAgICAgICAgICBoYW5kbGVyOiBiaW5kaW5nLnZhbHVlLFxuICAgICAgICAgIG5vb3AsXG5cbiAgICAgICAgICBtb3VzZVN0YXJ0IChldnQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY3R4LmhhbmRsZXIgPT09ICdmdW5jdGlvbicgJiYgbGVmdENsaWNrKGV2dCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgYWRkRXZ0KGN0eCwgJ3RlbXAnLCBbXG4gICAgICAgICAgICAgICAgWyBkb2N1bWVudCwgJ21vdXNlbW92ZScsICdtb3ZlJywgJ3Bhc3NpdmVDYXB0dXJlJyBdLFxuICAgICAgICAgICAgICAgIFsgZG9jdW1lbnQsICdjbGljaycsICdlbmQnLCAnbm90UGFzc2l2ZUNhcHR1cmUnIF1cbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgY3R4LnN0YXJ0KGV2dCwgdHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgdG91Y2hTdGFydCAoZXZ0KSB7XG4gICAgICAgICAgICBpZiAoZXZ0LnRhcmdldCAhPT0gdm9pZCAwICYmIHR5cGVvZiBjdHguaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldnQudGFyZ2V0XG4gICAgICAgICAgICAgIGFkZEV2dChjdHgsICd0ZW1wJywgW1xuICAgICAgICAgICAgICAgIFsgdGFyZ2V0LCAndG91Y2htb3ZlJywgJ21vdmUnLCAncGFzc2l2ZUNhcHR1cmUnIF0sXG4gICAgICAgICAgICAgICAgWyB0YXJnZXQsICd0b3VjaGNhbmNlbCcsICdlbmQnLCAnbm90UGFzc2l2ZUNhcHR1cmUnIF0sXG4gICAgICAgICAgICAgICAgWyB0YXJnZXQsICd0b3VjaGVuZCcsICdlbmQnLCAnbm90UGFzc2l2ZUNhcHR1cmUnIF1cbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgY3R4LnN0YXJ0KGV2dClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgc3RhcnQgKGV2dCwgbW91c2VFdmVudCkge1xuICAgICAgICAgICAgY3R4Lm9yaWdpbiA9IHBvc2l0aW9uKGV2dClcblxuICAgICAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gRGF0ZS5ub3coKVxuXG4gICAgICAgICAgICBpZiAoY2xpZW50LmlzLm1vYmlsZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ25vbi1zZWxlY3RhYmxlJylcbiAgICAgICAgICAgICAgY2xlYXJTZWxlY3Rpb24oKVxuXG4gICAgICAgICAgICAgIGN0eC5zdHlsZUNsZWFudXAgPSB3aXRoRGVsYXkgPT4ge1xuICAgICAgICAgICAgICAgIGN0eC5zdHlsZUNsZWFudXAgPSB2b2lkIDBcblxuICAgICAgICAgICAgICAgIGNvbnN0IHJlbW92ZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm9uLXNlbGVjdGFibGUnKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh3aXRoRGVsYXkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgIGNsZWFyU2VsZWN0aW9uKClcbiAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQocmVtb3ZlLCAxMClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7IHJlbW92ZSgpIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjdHgudHJpZ2dlcmVkID0gZmFsc2VcbiAgICAgICAgICAgIGN0eC5zZW5zaXRpdml0eSA9IG1vdXNlRXZlbnQgPT09IHRydWVcbiAgICAgICAgICAgICAgPyBjdHgubW91c2VTZW5zaXRpdml0eVxuICAgICAgICAgICAgICA6IGN0eC50b3VjaFNlbnNpdGl2aXR5XG5cbiAgICAgICAgICAgIGN0eC50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjdHgudGltZXIgPSB2b2lkIDBcbiAgICAgICAgICAgICAgY2xlYXJTZWxlY3Rpb24oKVxuICAgICAgICAgICAgICBjdHgudHJpZ2dlcmVkID0gdHJ1ZVxuXG4gICAgICAgICAgICAgIGN0eC5oYW5kbGVyKHtcbiAgICAgICAgICAgICAgICBldnQsXG4gICAgICAgICAgICAgICAgdG91Y2g6IG1vdXNlRXZlbnQgIT09IHRydWUsXG4gICAgICAgICAgICAgICAgbW91c2U6IG1vdXNlRXZlbnQgPT09IHRydWUsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGN0eC5vcmlnaW4sXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IERhdGUubm93KCkgLSBzdGFydFRpbWVcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sIGN0eC5kdXJhdGlvbilcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgbW92ZSAoZXZ0KSB7XG4gICAgICAgICAgICBjb25zdCB7IHRvcCwgbGVmdCB9ID0gcG9zaXRpb24oZXZ0KVxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBjdHgudGltZXIgIT09IHZvaWQgMCAmJiAoXG4gICAgICAgICAgICAgICAgTWF0aC5hYnMobGVmdCAtIGN0eC5vcmlnaW4ubGVmdCkgPj0gY3R4LnNlbnNpdGl2aXR5XG4gICAgICAgICAgICAgICAgfHwgTWF0aC5hYnModG9wIC0gY3R4Lm9yaWdpbi50b3ApID49IGN0eC5zZW5zaXRpdml0eVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGN0eC50aW1lcilcbiAgICAgICAgICAgICAgY3R4LnRpbWVyID0gdm9pZCAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGVuZCAoZXZ0KSB7XG4gICAgICAgICAgICBjbGVhbkV2dChjdHgsICd0ZW1wJylcblxuICAgICAgICAgICAgLy8gZGVsYXkgbmVlZGVkIG90aGVyd2lzZSBzZWxlY3Rpb24gc3RpbGwgb2NjdXJzXG4gICAgICAgICAgICBjdHguc3R5bGVDbGVhbnVwICE9PSB2b2lkIDAgJiYgY3R4LnN0eWxlQ2xlYW51cChjdHgudHJpZ2dlcmVkKVxuXG4gICAgICAgICAgICBpZiAoY3R4LnRyaWdnZXJlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBldnQgIT09IHZvaWQgMCAmJiBzdG9wQW5kUHJldmVudChldnQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjdHgudGltZXIgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoY3R4LnRpbWVyKVxuICAgICAgICAgICAgICBjdHgudGltZXIgPSB2b2lkIDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBkdXJhdGlvbiBpbiBtcywgdG91Y2ggaW4gcGl4ZWxzLCBtb3VzZSBpbiBwaXhlbHNcbiAgICAgICAgY29uc3QgZGF0YSA9IFsgNjAwLCA1LCA3IF1cblxuICAgICAgICBpZiAodHlwZW9mIGJpbmRpbmcuYXJnID09PSAnc3RyaW5nJyAmJiBiaW5kaW5nLmFyZy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICBiaW5kaW5nLmFyZy5zcGxpdCgnOicpLmZvckVhY2goKHZhbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBwYXJzZUludCh2YWwsIDEwKVxuICAgICAgICAgICAgdiAmJiAoZGF0YVsgaW5kZXggXSA9IHYpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIFsgY3R4LmR1cmF0aW9uLCBjdHgudG91Y2hTZW5zaXRpdml0eSwgY3R4Lm1vdXNlU2Vuc2l0aXZpdHkgXSA9IGRhdGFcblxuICAgICAgICBlbC5fX3F0b3VjaGhvbGQgPSBjdHhcblxuICAgICAgICBpZiAobW9kaWZpZXJzLm1vdXNlID09PSB0cnVlKSB7XG4gICAgICAgICAgLy8gYWNjb3VudCBmb3IgVU1EIHRvbyB3aGVyZSBtb2RpZmllcnMgd2lsbCBiZSBsb3dlcmNhc2VkIHRvIHdvcmtcbiAgICAgICAgICBjb25zdCBjYXB0dXJlID0gbW9kaWZpZXJzLm1vdXNlQ2FwdHVyZSA9PT0gdHJ1ZSB8fCBtb2RpZmllcnMubW91c2VjYXB0dXJlID09PSB0cnVlXG4gICAgICAgICAgICA/ICdDYXB0dXJlJ1xuICAgICAgICAgICAgOiAnJ1xuXG4gICAgICAgICAgYWRkRXZ0KGN0eCwgJ21haW4nLCBbXG4gICAgICAgICAgICBbIGVsLCAnbW91c2Vkb3duJywgJ21vdXNlU3RhcnQnLCBgcGFzc2l2ZSR7IGNhcHR1cmUgfWAgXVxuICAgICAgICAgIF0pXG4gICAgICAgIH1cblxuICAgICAgICBjbGllbnQuaGFzLnRvdWNoID09PSB0cnVlICYmIGFkZEV2dChjdHgsICdtYWluJywgW1xuICAgICAgICAgIFsgZWwsICd0b3VjaHN0YXJ0JywgJ3RvdWNoU3RhcnQnLCBgcGFzc2l2ZSR7IG1vZGlmaWVycy5jYXB0dXJlID09PSB0cnVlID8gJ0NhcHR1cmUnIDogJycgfWAgXSxcbiAgICAgICAgICBbIGVsLCAndG91Y2hlbmQnLCAnbm9vcCcsICdub3RQYXNzaXZlQ2FwdHVyZScgXVxuICAgICAgICBdKVxuICAgICAgfSxcblxuICAgICAgdXBkYXRlZCAoZWwsIGJpbmRpbmcpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gZWwuX19xdG91Y2hob2xkXG5cbiAgICAgICAgaWYgKGN0eCAhPT0gdm9pZCAwICYmIGJpbmRpbmcub2xkVmFsdWUgIT09IGJpbmRpbmcudmFsdWUpIHtcbiAgICAgICAgICB0eXBlb2YgYmluZGluZy52YWx1ZSAhPT0gJ2Z1bmN0aW9uJyAmJiBjdHguZW5kKClcbiAgICAgICAgICBjdHguaGFuZGxlciA9IGJpbmRpbmcudmFsdWVcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgYmVmb3JlVW5tb3VudCAoZWwpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gZWwuX19xdG91Y2hob2xkXG5cbiAgICAgICAgaWYgKGN0eCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgY2xlYW5FdnQoY3R4LCAnbWFpbicpXG4gICAgICAgICAgY2xlYW5FdnQoY3R4LCAndGVtcCcpXG5cbiAgICAgICAgICBjdHgudGltZXIgIT09IHZvaWQgMCAmJiBjbGVhclRpbWVvdXQoY3R4LnRpbWVyKVxuICAgICAgICAgIGN0eC5zdHlsZUNsZWFudXAgIT09IHZvaWQgMCAmJiBjdHguc3R5bGVDbGVhbnVwKClcblxuICAgICAgICAgIGRlbGV0ZSBlbC5fX3F0b3VjaGhvbGRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbilcbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtcHVsbC10by1yZWZyZXNoIEByZWZyZXNoPVwicmVmcmVzaFwiPlxuICAgIDxxLWhlYWRlclxuICAgICAgOmNsYXNzPVwie1xuICAgICAgICAnYmctbXlkYXJrIHRleHQtd2hpdGUnOiAkcS5kYXJrLm1vZGUsXG4gICAgICAgICdiZy13aGl0ZSB0ZXh0LWRhcmsnOiAhJHEuZGFyay5tb2RlLFxuICAgICAgfVwiXG4gICAgPlxuICAgICAgPHEtdG9vbGJhcj5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgQGNsaWNrPVwiJHJvdXRlci5iYWNrKClcIlxuICAgICAgICAgIGZsYXRcbiAgICAgICAgICByb3VuZFxuICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgaWNvbj1cImxhcyBsYS1hbmdsZS1sZWZ0XCJcbiAgICAgICAgICBjbGFzcz1cInEtbXItc21cIlxuICAgICAgICAgIDpjb2xvcj1cIiRxLmRhcmsubW9kZSA/ICd3aGl0ZScgOiAnZGFyaydcIlxuICAgICAgICAvPlxuICAgICAgICA8cS10b29sYmFyLXRpdGxlIGNsYXNzPVwidGV4dC13ZWlnaHQtYm9sZFwiPlxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiaG9sZFwiXG4gICAgICAgICAgICA+e3sgaXRlbVRvRGVsZXRlIH19IHt7ICR0KFwic2VsZWN0ZWRcIikgfX08L3RlbXBsYXRlXG4gICAgICAgICAgPlxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+e3sgJHQoXCJOb3RpZmljYXRpb25zXCIpIH19PC90ZW1wbGF0ZT5cbiAgICAgICAgPC9xLXRvb2xiYXItdGl0bGU+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIHYtaWY9XCJob2xkXCJcbiAgICAgICAgICBAY2xpY2s9XCJob2xkID0gZmFsc2VcIlxuICAgICAgICAgIGZsYXRcbiAgICAgICAgICByb3VuZFxuICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgaWNvbj1cImNsb3NlXCJcbiAgICAgICAgICA6Y29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnd2hpdGUnIDogJ2RhcmsnXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgIHYtaWY9XCJoYXNEYXRhXCJcbiAgICAgICAgICAgIEBjbGljaz1cImRlbGV0ZUFsbFwiXG4gICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICByb3VuZFxuICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgIGljb249XCJsYXMgbGEtdHJhc2hcIlxuICAgICAgICAgICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ3doaXRlJyA6ICdkYXJrJ1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvcS10b29sYmFyPlxuICAgIDwvcS1oZWFkZXI+XG5cbiAgICA8cS1wYWdlXG4gICAgICBjbGFzcz1cImJnLXRyYW5zcGFyZW50XCJcbiAgICAgIDpjbGFzcz1cInsgJ2ZsZXggZmxleC1jZW50ZXInOiAhaGFzRGF0YSAmJiAhbG9hZGluZyB9XCJcbiAgICA+XG4gICAgICA8cS1pbmZpbml0ZS1zY3JvbGwgcmVmPVwibnNjcm9sbFwiIEBsb2FkPVwiZ2V0Tm90aWZpY2F0aW9uc1wiIDpvZmZzZXQ9XCIyNTBcIj5cbiAgICAgICAgPHEtbGlzdD5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCIoaXRlbSwgaW5kZXgxKSBpbiBkYXRhXCIgOmtleT1cIml0ZW1cIj5cbiAgICAgICAgICAgIDxxLXNsaWRlLWl0ZW1cbiAgICAgICAgICAgICAgdi1mb3I9XCIoaXRlbXMsIGluZGV4MikgaW4gaXRlbVwiXG4gICAgICAgICAgICAgIDprZXk9XCJpdGVtc1wiXG4gICAgICAgICAgICAgIEBhY3Rpb249XCJkZWxldGVOb3RpZmljYXRpb24oaW5kZXgxLCBpbmRleDIsIGl0ZW1zKVwiXG4gICAgICAgICAgICAgIDpyaWdodC1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5NjAwJyA6ICdteWdyZXknXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpyaWdodD5cbiAgICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cImxpZ2h0cHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICB0ZXh0LWNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICBpY29uPVwibGFzIGxhLXRyYXNoXCJcbiAgICAgICAgICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICAgIHYtdG91Y2gtaG9sZC5tb3VzZT1cImhhbmRsZUhvbGRcIlxuICAgICAgICAgICAgICAgIHRhZz1cImxhYmVsXCJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICAgICAnYmctbXlkYXJrICc6ICRxLmRhcmsubW9kZSxcbiAgICAgICAgICAgICAgICAgICdiZy13aGl0ZSAnOiAhJHEuZGFyay5tb2RlLFxuICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiaG9sZFwiPlxuICAgICAgICAgICAgICAgICAgICA8cS1jaGVja2JveFxuICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJub3RpZmljYXRpb25fdXVpZHNcIlxuICAgICAgICAgICAgICAgICAgICAgIDp2YWw9XCJpdGVtcy5ub3RpZmljYXRpb25fdXVpZFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgICAgPHEtYXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJpdGVtcy5pbWFnZV90eXBlID09ICdpbWFnZSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnNyYz1cIml0ZW1zLmltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWF2YXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgdi1lbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJub3RpZmljYXRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWF2YXRhcj5cbiAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGxpbmVzPVwiMlwiIGNsYXNzPVwidGV4dC13ZWlnaHQtbWVkaXVtIGZvbnQxM1wiPlxuICAgICAgICAgICAgICAgICAgICB7eyBpdGVtcy5tZXNzYWdlIH19XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbiBjbGFzcz1cImZvbnQxMVwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBpdGVtcy5kYXRlIH19XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlPlxuICAgICAgICAgICAgICAgICAgPHEtYmFkZ2Ugcm91bmRlZCBjb2xvcj1cIm15Z3JleVwiIC8+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICA8L3Etc2xpZGUtaXRlbT5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3EtbGlzdD5cblxuICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmxvYWRpbmc+XG4gICAgICAgICAgPHEtaW5uZXItbG9hZGluZ1xuICAgICAgICAgICAgdi1pZj1cInBhZ2UgPD0gMFwiXG4gICAgICAgICAgICA6c2hvd2luZz1cInRydWVcIlxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cInJvdyBqdXN0aWZ5LWNlbnRlciBxLW15LW1kXCI+XG4gICAgICAgICAgICA8cS1zcGlubmVyLWRvdHMgY29sb3I9XCJwcmltYXJ5XCIgc2l6ZT1cIjQwcHhcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9xLWluZmluaXRlLXNjcm9sbD5cblxuICAgICAgPHRlbXBsYXRlIHYtaWY9XCIhbG9hZGluZ1wiPlxuICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImhhc0RhdGFcIj5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImRhdGFfZG9uZSAmJiBkYXRhLmxlbmd0aCA+PSAxMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBqdXN0aWZ5LWNlbnRlciBxLW15LXNtXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9udDEyIHRleHQtZ3JleVwiPnt7ICR0KFwiZW5kIG9mIHJlc3VsdHNcIikgfX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmdWxsLXdpZHRoIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8cS1pbWdcbiAgICAgICAgICAgICAgc3JjPVwibm8tbm90aWZpY2F0aW9uLnBuZ1wiXG4gICAgICAgICAgICAgIGZpdD1cImZpbGxcIlxuICAgICAgICAgICAgICBzcGlubmVyLWNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiAxNTBweDsgbWF4LXdpZHRoOiAyMDBweFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDUgdGV4dC13ZWlnaHQtYm9sZFwiPlxuICAgICAgICAgICAgICB7eyAkdChcIk5vIG5vdGlmaWNhdGlvbnNcIikgfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWdyZXkgZm9udDEyXCI+XG4gICAgICAgICAgICAgIHt7ICR0KFwiSWYgdGhlcmUgaXMgbm90aWZpY2F0aW9uIGl0IHdpbGwgc2hvdyBoZXJlXCIpIH19XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICA8cS1wYWdlLXNjcm9sbGVyXG4gICAgICAgIHBvc2l0aW9uPVwiYm90dG9tLXJpZ2h0XCJcbiAgICAgICAgOnNjcm9sbC1vZmZzZXQ9XCIxNTBcIlxuICAgICAgICA6b2Zmc2V0PVwiWzE4LCAxOF1cIlxuICAgICAgPlxuICAgICAgICA8cS1idG5cbiAgICAgICAgICBmYWJcbiAgICAgICAgICBpY29uPVwia2V5Ym9hcmRfYXJyb3dfdXBcIlxuICAgICAgICAgIGNvbG9yPVwibXlncmV5XCJcbiAgICAgICAgICB0ZXh0LWNvbG9yPVwiZGFya1wiXG4gICAgICAgICAgZGVuc2VcbiAgICAgICAgICBwYWRkaW5nPVwiM3B4XCJcbiAgICAgICAgLz5cbiAgICAgIDwvcS1wYWdlLXNjcm9sbGVyPlxuICAgIDwvcS1wYWdlPlxuICA8L3EtcHVsbC10by1yZWZyZXNoPlxuXG4gIDxxLWZvb3RlciB2LWlmPVwiaG9sZCAmJiBpdGVtVG9EZWxldGUgPiAwXCIgY2xhc3M9XCJiZy1saWdodHByaW1hcnlcIj5cbiAgICA8cS10YWJzXG4gICAgICB2LW1vZGVsPVwidGFiXCJcbiAgICAgIGNsYXNzPVwidGV4dC1ncmV5LThcIlxuICAgICAgbm8tY2Fwc1xuICAgICAgZGVuc2VcbiAgICAgIHNocmlua1xuICAgICAgbmFycm93LWluZGljYXRvclxuICAgICAgc3RyZXRjaFxuICAgICAgYWxpZ249XCJsZWZ0XCJcbiAgICAgIDpicmVha3BvaW50PVwiMFwiXG4gICAgICBpbmRpY2F0b3ItY29sb3I9XCJsaWdodHByaW1hcnlcIlxuICAgID5cbiAgICAgIDxxLXRhYlxuICAgICAgICBuYW1lPVwiZGVsZXRlXCJcbiAgICAgICAgaWNvbj1cImxhcyBsYS10cmFzaFwiXG4gICAgICAgIDpsYWJlbD1cIiR0KCdEZWxldGUnKVwiXG4gICAgICAgIEBjbGljaz1cImRlbGV0ZUFsbE5vdGlmaWNhdGlvblwiXG4gICAgICAvPlxuICAgIDwvcS10YWJzPlxuICA8L3EtZm9vdGVyPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBBUElpbnRlcmZhY2UgZnJvbSBcInNyYy9hcGkvQVBJaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyB1c2VDYXJ0U3RvcmUgfSBmcm9tIFwic3RvcmVzL0NhcnRTdG9yZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiTm90aWZpY2F0aW9uc1BhZ2VcIixcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgIGRhdGE6IFtdLFxuICAgICAgcGFnZTogMCxcbiAgICAgIGRhdGFfZG9uZTogZmFsc2UsXG4gICAgICBpc19yZWZyZXNoOiB1bmRlZmluZWQsXG4gICAgICBob2xkOiBmYWxzZSxcbiAgICAgIG5vdGlmaWNhdGlvbl91dWlkczogW10sXG4gICAgICB0YWI6IFwiZGVsZXRlXCIsXG4gICAgfTtcbiAgfSxcbiAgc2V0dXAoKSB7XG4gICAgY29uc3QgQ2FydFN0b3JlID0gdXNlQ2FydFN0b3JlKCk7XG4gICAgcmV0dXJuIHsgQ2FydFN0b3JlIH07XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgaG9sZChuZXd2YWwsIG9sZHZhbCkge1xuICAgICAgaWYgKCFuZXd2YWwpIHtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25fdXVpZHMgPSBbXTtcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGhhc0RhdGEoKSB7XG4gICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5kYXRhKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgaXRlbVRvRGVsZXRlKCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMubm90aWZpY2F0aW9uX3V1aWRzKS5sZW5ndGg7XG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHJlZnJlc2goZG9uZSkge1xuICAgICAgdGhpcy5yZXNldFBhZ2luYXRpb24oKTtcbiAgICAgIHRoaXMuaXNfcmVmcmVzaCA9IGRvbmU7XG4gICAgfSxcbiAgICBnZXROb3RpZmljYXRpb25zKGluZGV4LCBkb25lKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgQVBJaW50ZXJmYWNlLmdldE5vdGlmaWNhdGlvbihpbmRleClcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLnBhZ2UgPSBpbmRleDtcbiAgICAgICAgICB0aGlzLmRhdGEucHVzaChkYXRhLmRldGFpbHMuZGF0YSk7XG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5kYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMuZGF0YV9kb25lID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLiRyZWZzLm5zY3JvbGwuc3RvcCgpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBpZiAoIUFQSWludGVyZmFjZS5lbXB0eSh0aGlzLmlzX3JlZnJlc2gpKSB7XG4gICAgICAgICAgICB0aGlzLmlzX3JlZnJlc2goKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgcmVzZXRQYWdpbmF0aW9uKCkge1xuICAgICAgdGhpcy5wYWdlID0gMDtcbiAgICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgICAgdGhpcy4kcmVmcy5uc2Nyb2xsLnJlc2V0KCk7XG4gICAgICB0aGlzLiRyZWZzLm5zY3JvbGwucmVzdW1lKCk7XG4gICAgICB0aGlzLiRyZWZzLm5zY3JvbGwudHJpZ2dlcigpO1xuICAgIH0sXG4gICAgZGVsZXRlTm90aWZpY2F0aW9uKGluZGV4MSwgaW5kZXgyLCBpdGVtcykge1xuICAgICAgdGhpcy5kYXRhW2luZGV4MV0uc3BsaWNlKGluZGV4MiwgMSk7XG4gICAgICBBUElpbnRlcmZhY2UuZGVsZXRlTm90aWZpY2F0aW9uKGl0ZW1zLm5vdGlmaWNhdGlvbl91dWlkKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIC8vXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGhhbmRsZUhvbGQoZXZlbnQpIHtcbiAgICAgIHRoaXMuaG9sZCA9IHRydWU7XG4gICAgfSxcbiAgICByZXNldEhvbGQoKSB7XG4gICAgICB0aGlzLmhvbGQgPSBmYWxzZTtcbiAgICAgIHRoaXMubm90aWZpY2F0aW9uX3V1aWRzID0gW107XG4gICAgfSxcbiAgICBkZWxldGVBbGxOb3RpZmljYXRpb24oKSB7XG4gICAgICBBUElpbnRlcmZhY2UuZmV0Y2hEYXRhQnlUb2tlbihcImRlbGV0ZUFsbE5vdGlmaWNhdGlvblwiLCB7XG4gICAgICAgIG5vdGlmaWNhdGlvbl91dWlkczogdGhpcy5ub3RpZmljYXRpb25fdXVpZHMsXG4gICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuaG9sZCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMucmVzZXRQYWdpbmF0aW9uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHt9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge30pO1xuICAgIH0sXG4gICAgZGVsZXRlQWxsKCkge1xuICAgICAgdGhpcy4kcVxuICAgICAgICAuZGlhbG9nKHtcbiAgICAgICAgICB0aXRsZTogdGhpcy4kdChcIkRlbGV0ZSBhbGxcIiksXG4gICAgICAgICAgbWVzc2FnZTogdGhpcy4kdChcIkFyZSB5b3Ugc3VyZSB3YW50IHRvIGRlbGV0ZSBhbGwgbm90aWZpY2F0aW9ucz9cIiksXG4gICAgICAgICAgdHJhbnNpdGlvblNob3c6IFwiZmFkZVwiLFxuICAgICAgICAgIHRyYW5zaXRpb25IaWRlOiBcImZhZGVcIixcbiAgICAgICAgICBvazoge1xuICAgICAgICAgICAgdW5lbGV2YXRlZDogdHJ1ZSxcbiAgICAgICAgICAgIGNvbG9yOiBcInByaW1hcnlcIixcbiAgICAgICAgICAgIHJvdW5kZWQ6IGZhbHNlLFxuICAgICAgICAgICAgXCJ0ZXh0LWNvbG9yXCI6IFwid2hpdGVcIixcbiAgICAgICAgICAgIHNpemU6IFwibWRcIixcbiAgICAgICAgICAgIGxhYmVsOiB0aGlzLiR0KFwiT2theVwiKSxcbiAgICAgICAgICAgIFwibm8tY2Fwc1wiOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIC5vbk9rKCgpID0+IHtcbiAgICAgICAgICBBUElpbnRlcmZhY2UuZmV0Y2hEYXRhQnlUb2tlbihcImRlbGV0ZU5vdGlmaWNhdGlvbnNcIiwge30pXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmhvbGQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgdGhpcy5yZXNldFBhZ2luYXRpb24oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7fSlcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7fSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbkNhbmNlbCgoKSA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ0NhbmNlbCcpXG4gICAgICAgIH0pXG4gICAgICAgIC5vbkRpc21pc3MoKCkgPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdJIGFtIHRyaWdnZXJlZCBvbiBib3RoIE9LIGFuZCBDYW5jZWwnKVxuICAgICAgICB9KTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbIl9jcmVhdGVWTm9kZSIsIl9ub3JtYWxpemVDbGFzcyIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfRnJhZ21lbnQiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX2NyZWF0ZUJsb2NrIiwiX29wZW5CbG9jayIsIl9yZW5kZXJMaXN0IiwiX2NyZWF0ZVRleHRWTm9kZSIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0EsSUFBQSxZQUFlO0FBQUEsRUFFWDtBQUFBLElBQ0UsTUFBTTtBQUFBLElBRU4sWUFBYSxJQUFJLFNBQVM7QUFDeEIsWUFBTSxFQUFFLFVBQVMsSUFBSztBQUd0QixVQUFJLFVBQVUsVUFBVSxRQUFRLE9BQU8sSUFBSSxVQUFVLE1BQU07QUFDekQ7QUFBQSxNQUNEO0FBRUQsWUFBTSxNQUFNO0FBQUEsUUFDVixTQUFTLFFBQVE7QUFBQSxRQUNqQjtBQUFBLFFBRUEsV0FBWSxLQUFLO0FBQ2YsY0FBSSxPQUFPLElBQUksWUFBWSxjQUFjLFVBQVUsR0FBRyxNQUFNLE1BQU07QUFDaEUsbUJBQU8sS0FBSyxRQUFRO0FBQUEsY0FDbEIsQ0FBRSxVQUFVLGFBQWEsUUFBUSxnQkFBa0I7QUFBQSxjQUNuRCxDQUFFLFVBQVUsU0FBUyxPQUFPLG1CQUFxQjtBQUFBLFlBQ2pFLENBQWU7QUFDRCxnQkFBSSxNQUFNLEtBQUssSUFBSTtBQUFBLFVBQ3BCO0FBQUEsUUFDRjtBQUFBLFFBRUQsV0FBWSxLQUFLO0FBQ2YsY0FBSSxJQUFJLFdBQVcsVUFBVSxPQUFPLElBQUksWUFBWSxZQUFZO0FBQzlELGtCQUFNLFNBQVMsSUFBSTtBQUNuQixtQkFBTyxLQUFLLFFBQVE7QUFBQSxjQUNsQixDQUFFLFFBQVEsYUFBYSxRQUFRLGdCQUFrQjtBQUFBLGNBQ2pELENBQUUsUUFBUSxlQUFlLE9BQU8sbUJBQXFCO0FBQUEsY0FDckQsQ0FBRSxRQUFRLFlBQVksT0FBTyxtQkFBcUI7QUFBQSxZQUNsRSxDQUFlO0FBQ0QsZ0JBQUksTUFBTSxH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
