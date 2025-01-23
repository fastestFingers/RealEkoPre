import { _ as _export_sfc, m as APIinterface, p as openBlock, V as createElementBlock, f as createVNode, t as withCtx, a7 as normalizeClass, F as Fragment, Y as QBtn, a6 as createTextVNode, Z as toDisplayString, U as createBaseVNode, X as renderList, q as createBlock, aA as createCommentVNode, ad as QItemSection, af as QRadio, ac as QItem } from "./index.61ed5618.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QSpace } from "./QSpace.f164c087.js";
import { Q as QList } from "./QList.b69a7e5b.js";
import { Q as QFooter } from "./QFooter.571ac042.js";
import { Q as QInnerLoading } from "./QInnerLoading.abe2afe6.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import { u as useBookingStore } from "./BookingStore.34c084df.js";
import "./QResizeObserver.d08dce3c.js";
const _sfc_main = {
  name: "BookingCancel",
  setup() {
    const BookingStore = useBookingStore();
    return { BookingStore };
  },
  data() {
    return {
      reservation_uuid: "",
      reason: "",
      loading: false
    };
  },
  computed: {
    hasReason() {
      if (!APIinterface.empty(this.reason)) {
        return true;
      }
      return false;
    }
  },
  created() {
    this.reservation_uuid = this.$route.query.id;
    this.getCancelreason(null);
  },
  methods: {
    refresh(done) {
      this.getCancelreason(this.reservation_uuid, done);
    },
    getCancelreason(done) {
      this.BookingStore.getCancelreason(this.reservation_uuid, done);
    },
    ConfirmcancelReservation() {
      this.$q.dialog({
        title: this.$t("Cancel reservation"),
        message: this.$t("Are you sure to continue?"),
        cancel: true,
        persistent: true,
        ok: {
          unelevated: true,
          color: "primary",
          rounded: true,
          "text-color": "white",
          size: "md",
          label: this.$t("Yes"),
          "no-caps": true
        },
        cancel: {
          unelevated: true,
          rounded: true,
          color: "grey-3",
          "text-color": "black",
          size: "md",
          label: this.$t("Cancel"),
          "no-caps": true
        }
      }).onOk(() => {
        this.CancelReservation();
      }).onOk(() => {
      }).onCancel(() => {
      }).onDismiss(() => {
      });
    },
    CancelReservation() {
      this.loading = true;
      APIinterface.fetchDataPostTable2(
        "CancelReservation",
        "id=" + this.reservation_uuid + "&reason=" + this.reason
      ).then((data) => {
        APIinterface.notify("light-green", data.msg, "check", this.$q);
        setTimeout(() => {
          this.$router.replace({
            path: "/booking/track",
            query: { id: this.reservation_uuid }
          });
        }, 500);
      }).catch((error) => {
        APIinterface.notify("dark", error, "error_outline", this.$q);
      }).then((data) => {
        this.loading = false;
      });
    }
  }
};
const _hoisted_1 = { class: "text-weight-bold font16 line-normal" };
const _hoisted_2 = { class: "text-grey" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
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
            createVNode(QBtn, {
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$router.back()),
              flat: "",
              round: "",
              dense: "",
              icon: "las la-angle-left",
              class: "q-mr-sm",
              color: _ctx.$q.dark.mode ? "white" : "dark"
            }, null, 8, ["color"]),
            createVNode(QToolbarTitle, { class: "text-weight-bold text-darkx" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("Cancel Booking")), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["class"]),
    createVNode(QPage, { class: "q-pa-md" }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_1, toDisplayString(_ctx.$t("cancel_your_reservation")) + ". ", 1),
        createBaseVNode("div", _hoisted_2, toDisplayString(_ctx.$t("cancel_your_reservation")) + "?", 1),
        createVNode(QSpace, { class: "q-pa-sm" }),
        createVNode(QList, { class: "q-list-small" }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList($setup.BookingStore.getCancelReasonData, (items) => {
              return openBlock(), createBlock(QItem, {
                key: items,
                tag: "label",
                class: normalizeClass(["bg-mygreyx radius10 q-mb-sm", {
                  "bg-grey600 text-grey300": _ctx.$q.dark.mode,
                  "bg-mygrey text-dark": !_ctx.$q.dark.mode
                }]),
                clickable: ""
              }, {
                default: withCtx(() => [
                  createVNode(QItemSection, { side: "" }, {
                    default: withCtx(() => [
                      createVNode(QRadio, {
                        modelValue: $data.reason,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.reason = $event),
                        val: items,
                        size: "xs",
                        "checked-icon": "fiber_manual_record",
                        "unchecked-icon": "fiber_manual_record"
                      }, null, 8, ["modelValue", "val"])
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(QItemSection, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(items), 1)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1032, ["class"]);
            }), 128))
          ]),
          _: 1
        }),
        createVNode(QFooter, {
          class: normalizeClass(["bg-whitex q-pa-md text-dark row items-center q-gutter-sm", {
            "bg-mydark ": _ctx.$q.dark.mode,
            "bg-white ": !_ctx.$q.dark.mode
          }])
        }, {
          default: withCtx(() => [
            createVNode(QBtn, {
              color: _ctx.$q.dark.mode ? "grey300" : "dark",
              size: "lg",
              unelevated: "",
              "no-caps": "",
              flat: "",
              onClick: _cache[2] || (_cache[2] = ($event) => _ctx.$router.back()),
              class: "col"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("Back")), 1)
              ]),
              _: 1
            }, 8, ["color"]),
            createVNode(QBtn, {
              unelevated: "",
              color: "primary",
              label: _ctx.$t("Continue"),
              "no-caps": "",
              size: "lg",
              disable: !$options.hasReason,
              loading: $data.loading,
              onClick: $options.ConfirmcancelReservation,
              class: "col"
            }, null, 8, ["label", "disable", "loading", "onClick"])
          ]),
          _: 1
        }, 8, ["class"]),
        $setup.BookingStore.isLoading ? (openBlock(), createBlock(QInnerLoading, {
          key: 0,
          showing: true,
          color: _ctx.$q.dark.mode ? "grey300" : "primary"
        }, null, 8, ["color"])) : createCommentVNode("", true)
      ]),
      _: 1
    })
  ], 64);
}
var BookingCancel = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "BookingCancel.vue"]]);
export { BookingCancel as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9va2luZ0NhbmNlbC4xYzgwODU1Yi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhZ2VzL0Jvb2tpbmcvQm9va2luZ0NhbmNlbC52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8cS1oZWFkZXJcbiAgICBjbGFzcz1cImJnLXdoaXRleFwiXG4gICAgcmV2ZWFsXG4gICAgOmNsYXNzPVwie1xuICAgICAgJ2JnLW15ZGFyayB0ZXh0LXdoaXRlJzogJHEuZGFyay5tb2RlLFxuICAgICAgJ2JnLXdoaXRlIHRleHQtZGFyayc6ICEkcS5kYXJrLm1vZGUsXG4gICAgfVwiXG4gID5cbiAgICA8cS10b29sYmFyPlxuICAgICAgPHEtYnRuXG4gICAgICAgIEBjbGljaz1cIiRyb3V0ZXIuYmFjaygpXCJcbiAgICAgICAgZmxhdFxuICAgICAgICByb3VuZFxuICAgICAgICBkZW5zZVxuICAgICAgICBpY29uPVwibGFzIGxhLWFuZ2xlLWxlZnRcIlxuICAgICAgICBjbGFzcz1cInEtbXItc21cIlxuICAgICAgICA6Y29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnd2hpdGUnIDogJ2RhcmsnXCJcbiAgICAgIC8+XG4gICAgICA8cS10b29sYmFyLXRpdGxlIGNsYXNzPVwidGV4dC13ZWlnaHQtYm9sZCB0ZXh0LWRhcmt4XCI+e3tcbiAgICAgICAgJHQoXCJDYW5jZWwgQm9va2luZ1wiKVxuICAgICAgfX08L3EtdG9vbGJhci10aXRsZT5cbiAgICA8L3EtdG9vbGJhcj5cbiAgPC9xLWhlYWRlcj5cbiAgPHEtcGFnZSBjbGFzcz1cInEtcGEtbWRcIj5cbiAgICA8ZGl2IGNsYXNzPVwidGV4dC13ZWlnaHQtYm9sZCBmb250MTYgbGluZS1ub3JtYWxcIj5cbiAgICAgIHt7ICR0KFwiY2FuY2VsX3lvdXJfcmVzZXJ2YXRpb25cIikgfX0uXG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInRleHQtZ3JleVwiPnt7ICR0KFwiY2FuY2VsX3lvdXJfcmVzZXJ2YXRpb25cIikgfX0/PC9kaXY+XG4gICAgPHEtc3BhY2UgY2xhc3M9XCJxLXBhLXNtXCI+PC9xLXNwYWNlPlxuXG4gICAgPHEtbGlzdCBjbGFzcz1cInEtbGlzdC1zbWFsbFwiPlxuICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiaXRlbXMgaW4gQm9va2luZ1N0b3JlLmdldENhbmNlbFJlYXNvbkRhdGFcIiA6a2V5PVwiaXRlbXNcIj5cbiAgICAgICAgPHEtaXRlbVxuICAgICAgICAgIHRhZz1cImxhYmVsXCJcbiAgICAgICAgICBjbGFzcz1cImJnLW15Z3JleXggcmFkaXVzMTAgcS1tYi1zbVwiXG4gICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICAgJ2JnLWdyZXk2MDAgdGV4dC1ncmV5MzAwJzogJHEuZGFyay5tb2RlLFxuICAgICAgICAgICAgJ2JnLW15Z3JleSB0ZXh0LWRhcmsnOiAhJHEuZGFyay5tb2RlLFxuICAgICAgICAgIH1cIlxuICAgICAgICA+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICAgICAgICA8cS1yYWRpb1xuICAgICAgICAgICAgICB2LW1vZGVsPVwicmVhc29uXCJcbiAgICAgICAgICAgICAgOnZhbD1cIml0ZW1zXCJcbiAgICAgICAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgICAgICAgY2hlY2tlZC1pY29uPVwiZmliZXJfbWFudWFsX3JlY29yZFwiXG4gICAgICAgICAgICAgIHVuY2hlY2tlZC1pY29uPVwiZmliZXJfbWFudWFsX3JlY29yZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPnt7IGl0ZW1zIH19PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPC9xLWl0ZW0+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvcS1saXN0PlxuXG4gICAgPHEtZm9vdGVyXG4gICAgICBjbGFzcz1cImJnLXdoaXRleCBxLXBhLW1kIHRleHQtZGFyayByb3cgaXRlbXMtY2VudGVyIHEtZ3V0dGVyLXNtXCJcbiAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgJ2JnLW15ZGFyayAnOiAkcS5kYXJrLm1vZGUsXG4gICAgICAgICdiZy13aGl0ZSAnOiAhJHEuZGFyay5tb2RlLFxuICAgICAgfVwiXG4gICAgPlxuICAgICAgPHEtYnRuXG4gICAgICAgIDpjb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICdkYXJrJ1wiXG4gICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgbm8tY2Fwc1xuICAgICAgICBmbGF0XG4gICAgICAgIEBjbGljaz1cIiRyb3V0ZXIuYmFjaygpXCJcbiAgICAgICAgY2xhc3M9XCJjb2xcIlxuICAgICAgICA+e3sgJHQoXCJCYWNrXCIpIH19PC9xLWJ0blxuICAgICAgPlxuICAgICAgPHEtYnRuXG4gICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgOmxhYmVsPVwiJHQoJ0NvbnRpbnVlJylcIlxuICAgICAgICBuby1jYXBzXG4gICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgIDpkaXNhYmxlPVwiIWhhc1JlYXNvblwiXG4gICAgICAgIDpsb2FkaW5nPVwibG9hZGluZ1wiXG4gICAgICAgIEBjbGljaz1cIkNvbmZpcm1jYW5jZWxSZXNlcnZhdGlvblwiXG4gICAgICAgIGNsYXNzPVwiY29sXCJcbiAgICAgIC8+XG4gICAgPC9xLWZvb3Rlcj5cblxuICAgIDx0ZW1wbGF0ZSB2LWlmPVwiQm9va2luZ1N0b3JlLmlzTG9hZGluZ1wiPlxuICAgICAgPHEtaW5uZXItbG9hZGluZ1xuICAgICAgICA6c2hvd2luZz1cInRydWVcIlxuICAgICAgICA6Y29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTMwMCcgOiAncHJpbWFyeSdcIlxuICAgICAgLz5cbiAgICA8L3RlbXBsYXRlPlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyB1c2VCb29raW5nU3RvcmUgfSBmcm9tIFwic3RvcmVzL0Jvb2tpbmdTdG9yZVwiO1xuaW1wb3J0IEFQSWludGVyZmFjZSBmcm9tIFwic3JjL2FwaS9BUElpbnRlcmZhY2VcIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJCb29raW5nQ2FuY2VsXCIsXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IEJvb2tpbmdTdG9yZSA9IHVzZUJvb2tpbmdTdG9yZSgpO1xuICAgIHJldHVybiB7IEJvb2tpbmdTdG9yZSB9O1xuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICByZXNlcnZhdGlvbl91dWlkOiBcIlwiLFxuICAgICAgcmVhc29uOiBcIlwiLFxuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgfTtcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBoYXNSZWFzb24oKSB7XG4gICAgICBpZiAoIUFQSWludGVyZmFjZS5lbXB0eSh0aGlzLnJlYXNvbikpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLnJlc2VydmF0aW9uX3V1aWQgPSB0aGlzLiRyb3V0ZS5xdWVyeS5pZDtcbiAgICB0aGlzLmdldENhbmNlbHJlYXNvbihudWxsKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHJlZnJlc2goZG9uZSkge1xuICAgICAgdGhpcy5nZXRDYW5jZWxyZWFzb24odGhpcy5yZXNlcnZhdGlvbl91dWlkLCBkb25lKTtcbiAgICB9LFxuICAgIGdldENhbmNlbHJlYXNvbihkb25lKSB7XG4gICAgICB0aGlzLkJvb2tpbmdTdG9yZS5nZXRDYW5jZWxyZWFzb24odGhpcy5yZXNlcnZhdGlvbl91dWlkLCBkb25lKTtcbiAgICB9LFxuICAgIENvbmZpcm1jYW5jZWxSZXNlcnZhdGlvbigpIHtcbiAgICAgIHRoaXMuJHFcbiAgICAgICAgLmRpYWxvZyh7XG4gICAgICAgICAgdGl0bGU6IHRoaXMuJHQoXCJDYW5jZWwgcmVzZXJ2YXRpb25cIiksXG4gICAgICAgICAgbWVzc2FnZTogdGhpcy4kdChcIkFyZSB5b3Ugc3VyZSB0byBjb250aW51ZT9cIiksXG4gICAgICAgICAgY2FuY2VsOiB0cnVlLFxuICAgICAgICAgIHBlcnNpc3RlbnQ6IHRydWUsXG4gICAgICAgICAgb2s6IHtcbiAgICAgICAgICAgIHVuZWxldmF0ZWQ6IHRydWUsXG4gICAgICAgICAgICBjb2xvcjogXCJwcmltYXJ5XCIsXG4gICAgICAgICAgICByb3VuZGVkOiB0cnVlLFxuICAgICAgICAgICAgXCJ0ZXh0LWNvbG9yXCI6IFwid2hpdGVcIixcbiAgICAgICAgICAgIHNpemU6IFwibWRcIixcbiAgICAgICAgICAgIGxhYmVsOiB0aGlzLiR0KFwiWWVzXCIpLFxuICAgICAgICAgICAgXCJuby1jYXBzXCI6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjYW5jZWw6IHtcbiAgICAgICAgICAgIHVuZWxldmF0ZWQ6IHRydWUsXG4gICAgICAgICAgICByb3VuZGVkOiB0cnVlLFxuICAgICAgICAgICAgY29sb3I6IFwiZ3JleS0zXCIsXG4gICAgICAgICAgICBcInRleHQtY29sb3JcIjogXCJibGFja1wiLFxuICAgICAgICAgICAgc2l6ZTogXCJtZFwiLFxuICAgICAgICAgICAgbGFiZWw6IHRoaXMuJHQoXCJDYW5jZWxcIiksXG4gICAgICAgICAgICBcIm5vLWNhcHNcIjogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICAub25PaygoKSA9PiB7XG4gICAgICAgICAgdGhpcy5DYW5jZWxSZXNlcnZhdGlvbigpO1xuICAgICAgICB9KVxuICAgICAgICAub25PaygoKSA9PiB7fSlcbiAgICAgICAgLm9uQ2FuY2VsKCgpID0+IHt9KVxuICAgICAgICAub25EaXNtaXNzKCgpID0+IHt9KTtcbiAgICB9LFxuICAgIENhbmNlbFJlc2VydmF0aW9uKCkge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIEFQSWludGVyZmFjZS5mZXRjaERhdGFQb3N0VGFibGUyKFxuICAgICAgICBcIkNhbmNlbFJlc2VydmF0aW9uXCIsXG4gICAgICAgIFwiaWQ9XCIgKyB0aGlzLnJlc2VydmF0aW9uX3V1aWQgKyBcIiZyZWFzb249XCIgKyB0aGlzLnJlYXNvblxuICAgICAgKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJsaWdodC1ncmVlblwiLCBkYXRhLm1zZywgXCJjaGVja1wiLCB0aGlzLiRxKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5yZXBsYWNlKHtcbiAgICAgICAgICAgICAgcGF0aDogXCIvYm9va2luZy90cmFja1wiLFxuICAgICAgICAgICAgICBxdWVyeTogeyBpZDogdGhpcy5yZXNlcnZhdGlvbl91dWlkIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgQVBJaW50ZXJmYWNlLm5vdGlmeShcImRhcmtcIiwgZXJyb3IsIFwiZXJyb3Jfb3V0bGluZVwiLCB0aGlzLiRxKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfY3JlYXRlVk5vZGUiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyIsIl9vcGVuQmxvY2siLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiLCJfY3JlYXRlQmxvY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBa0dBLE1BQUss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
