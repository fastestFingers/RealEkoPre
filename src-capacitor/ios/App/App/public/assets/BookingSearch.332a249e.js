import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { _ as _export_sfc, m as APIinterface, p as openBlock, V as createElementBlock, q as createBlock, t as withCtx, a7 as normalizeClass, aA as createCommentVNode, f as createVNode, F as Fragment, a6 as createTextVNode, Z as toDisplayString, Y as QBtn, U as createBaseVNode, X as renderList, a8 as QCard, a9 as QCardSection, b4 as normalizeStyle, ac as QItem } from "./index.61ed5618.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QChip } from "./QChip.f183a4f1.js";
import { Q as QList } from "./QList.b69a7e5b.js";
import { Q as QInnerLoading } from "./QInnerLoading.abe2afe6.js";
import { Q as QPageScroller } from "./QPageScroller.2c709c91.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import "./QResizeObserver.d08dce3c.js";
import "./use-page-sticky.447afe02.js";
const _sfc_main = {
  name: "BookingSearch",
  data() {
    return {
      loading: false,
      data: [],
      q: "",
      merchant: [],
      table_list: []
    };
  },
  created() {
    this.q = this.$route.query.q;
    this.Search();
  },
  computed: {
    hasData() {
      if (Object.keys(this.data).length > 0) {
        return true;
      }
      return false;
    },
    getData() {
      return this.data;
    }
  },
  methods: {
    Search() {
      this.loading = true;
      APIinterface.fetchDataPostTable2("BookingSearch", "search=" + this.q).then((data) => {
        if (data.code == 1) {
          this.data = data.details.data;
          this.merchant = data.details.merchant;
          this.table_list = data.details.table_list;
        }
      }).catch((error) => {
      }).then((data) => {
        this.loading = false;
      });
    }
  }
};
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { class: "text-grey q-ma-none" };
const _hoisted_3 = { class: "row justify-between items-center" };
const _hoisted_4 = { class: "font13" };
const _hoisted_5 = { class: "text-secondary q-ml-sm text-weight-bold" };
const _hoisted_6 = { class: "row justify-between items-center" };
const _hoisted_7 = {
  key: 0,
  class: "font13 text-weight-bold"
};
const _hoisted_8 = {
  key: 1,
  class: "font13"
};
const _hoisted_9 = { class: "row justify-between items-center" };
const _hoisted_10 = { class: "font13" };
const _hoisted_11 = {
  key: 0,
  class: "font12"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    !$data.loading ? (openBlock(), createBlock(QHeader, {
      key: 0,
      reveal: "",
      "reveal-offset": "50",
      class: normalizeClass({
        "bg-mydark text-white": _ctx.$q.dark.mode,
        "bg-grey-1 text-black": !_ctx.$q.dark.mode
      })
    }, {
      default: withCtx(() => [
        createVNode(QToolbar, null, {
          default: withCtx(() => [
            createVNode(QToolbarTitle, { class: "text-weight-bold" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("Bookings")), 1)
              ]),
              _: 1
            }),
            createVNode(QBtn, {
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$router.back()),
              flat: "",
              round: "",
              dense: "",
              icon: "close",
              class: "q-mr-sm",
              color: _ctx.$q.dark.mode ? "white" : "dark"
            }, null, 8, ["color"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["class"])) : createCommentVNode("", true),
    createVNode(QPage, {
      class: normalizeClass({
        "bg-mydark": _ctx.$q.dark.mode,
        "bg-grey-1": !_ctx.$q.dark.mode,
        "flex flex-center": !$options.hasData && !$data.loading
      })
    }, {
      default: withCtx(() => [
        !$options.hasData && !$data.loading ? (openBlock(), createElementBlock("div", _hoisted_1, [
          createBaseVNode("p", _hoisted_2, toDisplayString(_ctx.$t("No data available")), 1)
        ])) : createCommentVNode("", true),
        createVNode(QList, null, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList($options.getData, (items) => {
              return openBlock(), createBlock(QItem, {
                key: items,
                clickable: "",
                to: {
                  path: "/booking/track",
                  query: {
                    id: items.reservation_uuid
                  }
                }
              }, {
                default: withCtx(() => [
                  createVNode(QCard, {
                    flat: "",
                    class: "fit radius8"
                  }, {
                    default: withCtx(() => [
                      createVNode(QCardSection, { class: "q-pl-md q-pr-md q-pt-sm q-pb-sm" }, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_3, [
                            createVNode(QChip, {
                              icon: "las la-calendar",
                              color: _ctx.$q.dark.mode ? "grey600" : "white",
                              "text-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                              size: "sm",
                              class: normalizeClass({
                                "": _ctx.$q.dark.mode,
                                "q-pl-none": !_ctx.$q.dark.mode
                              })
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(items.reservation_date_raw), 1)
                              ]),
                              _: 2
                            }, 1032, ["color", "text-color", "class"]),
                            createVNode(QChip, {
                              size: "sm",
                              style: normalizeStyle({
                                "background-color": `${items.status_color.background}`,
                                color: `${items.status_color.color}`
                              })
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(items.status), 1)
                              ]),
                              _: 2
                            }, 1032, ["style"])
                          ]),
                          createBaseVNode("div", _hoisted_4, [
                            createTextVNode(toDisplayString(_ctx.$t("Booking ID")), 1),
                            createBaseVNode("span", _hoisted_5, "#" + toDisplayString(items.reservation_id), 1)
                          ]),
                          createBaseVNode("div", _hoisted_6, [
                            $data.merchant[items.merchant_id] ? (openBlock(), createElementBlock("div", _hoisted_7, toDisplayString($data.merchant[items.merchant_id].restaurant_name), 1)) : createCommentVNode("", true),
                            $data.merchant[items.merchant_id] ? (openBlock(), createElementBlock("div", _hoisted_8, toDisplayString($data.merchant[items.merchant_id].merchant_address), 1)) : createCommentVNode("", true)
                          ]),
                          createBaseVNode("div", _hoisted_9, [
                            createBaseVNode("div", _hoisted_10, toDisplayString(_ctx.$t("Guest")) + " : " + toDisplayString(items.guest_number), 1),
                            $data.table_list[items.table_id] ? (openBlock(), createElementBlock("div", _hoisted_11, toDisplayString($data.table_list[items.table_id]), 1)) : createCommentVNode("", true)
                          ])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1032, ["to"]);
            }), 128))
          ]),
          _: 1
        }),
        createVNode(QInnerLoading, {
          showing: $data.loading,
          color: "primary",
          size: "md",
          "label-class": "dark",
          class: "transparent"
        }, null, 8, ["showing"]),
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
  ], 64);
}
var BookingSearch = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "BookingSearch.vue"]]);
export { BookingSearch as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9va2luZ1NlYXJjaC4zMzJhMjQ5ZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhZ2VzL0Jvb2tpbmcvQm9va2luZ1NlYXJjaC52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8dGVtcGxhdGUgdi1pZj1cIiFsb2FkaW5nXCI+XG4gICAgPHEtaGVhZGVyXG4gICAgICByZXZlYWxcbiAgICAgIHJldmVhbC1vZmZzZXQ9XCI1MFwiXG4gICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICdiZy1teWRhcmsgdGV4dC13aGl0ZSc6ICRxLmRhcmsubW9kZSxcbiAgICAgICAgJ2JnLWdyZXktMSB0ZXh0LWJsYWNrJzogISRxLmRhcmsubW9kZSxcbiAgICAgIH1cIlxuICAgID5cbiAgICAgIDxxLXRvb2xiYXI+XG4gICAgICAgIDxxLXRvb2xiYXItdGl0bGUgY2xhc3M9XCJ0ZXh0LXdlaWdodC1ib2xkXCI+e3tcbiAgICAgICAgICAkdChcIkJvb2tpbmdzXCIpXG4gICAgICAgIH19PC9xLXRvb2xiYXItdGl0bGU+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIEBjbGljaz1cIiRyb3V0ZXIuYmFjaygpXCJcbiAgICAgICAgICBmbGF0XG4gICAgICAgICAgcm91bmRcbiAgICAgICAgICBkZW5zZVxuICAgICAgICAgIGljb249XCJjbG9zZVwiXG4gICAgICAgICAgY2xhc3M9XCJxLW1yLXNtXCJcbiAgICAgICAgICA6Y29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnd2hpdGUnIDogJ2RhcmsnXCJcbiAgICAgICAgLz5cbiAgICAgIDwvcS10b29sYmFyPlxuICAgIDwvcS1oZWFkZXI+XG4gIDwvdGVtcGxhdGU+XG4gIDxxLXBhZ2VcbiAgICA6Y2xhc3M9XCJ7XG4gICAgICAnYmctbXlkYXJrJzogJHEuZGFyay5tb2RlLFxuICAgICAgJ2JnLWdyZXktMSc6ICEkcS5kYXJrLm1vZGUsXG4gICAgICAnZmxleCBmbGV4LWNlbnRlcic6ICFoYXNEYXRhICYmICFsb2FkaW5nLFxuICAgIH1cIlxuICA+XG4gICAgPGRpdiB2LWlmPVwiIWhhc0RhdGEgJiYgIWxvYWRpbmdcIj5cbiAgICAgIDxwIGNsYXNzPVwidGV4dC1ncmV5IHEtbWEtbm9uZVwiPnt7ICR0KFwiTm8gZGF0YSBhdmFpbGFibGVcIikgfX08L3A+XG4gICAgPC9kaXY+XG5cbiAgICA8cS1saXN0PlxuICAgICAgPHEtaXRlbVxuICAgICAgICB2LWZvcj1cIml0ZW1zIGluIGdldERhdGFcIlxuICAgICAgICA6a2V5PVwiaXRlbXNcIlxuICAgICAgICBjbGlja2FibGVcbiAgICAgICAgOnRvPVwie1xuICAgICAgICAgIHBhdGg6ICcvYm9va2luZy90cmFjaycsXG4gICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgIGlkOiBpdGVtcy5yZXNlcnZhdGlvbl91dWlkLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cIlxuICAgICAgPlxuICAgICAgICA8cS1jYXJkIGZsYXQgY2xhc3M9XCJmaXQgcmFkaXVzOFwiPlxuICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cInEtcGwtbWQgcS1wci1tZCBxLXB0LXNtIHEtcGItc21cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8cS1jaGlwXG4gICAgICAgICAgICAgICAgaWNvbj1cImxhcyBsYS1jYWxlbmRhclwiXG4gICAgICAgICAgICAgICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXk2MDAnIDogJ3doaXRlJ1wiXG4gICAgICAgICAgICAgICAgOnRleHQtY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTMwMCcgOiAnZ3JleSdcIlxuICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICAgICAgICAgJyc6ICRxLmRhcmsubW9kZSxcbiAgICAgICAgICAgICAgICAgICdxLXBsLW5vbmUnOiAhJHEuZGFyay5tb2RlLFxuICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICAgID57eyBpdGVtcy5yZXNlcnZhdGlvbl9kYXRlX3JhdyB9fTwvcS1jaGlwXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHEtY2hpcFxuICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgOnN0eWxlPVwie1xuICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiBgJHtpdGVtcy5zdGF0dXNfY29sb3IuYmFja2dyb3VuZH1gLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IGAke2l0ZW1zLnN0YXR1c19jb2xvci5jb2xvcn1gLFxuICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICAgID57eyBpdGVtcy5zdGF0dXMgfX08L3EtY2hpcFxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250MTNcIj5cbiAgICAgICAgICAgICAge3sgJHQoXCJCb29raW5nIElEXCIpXG4gICAgICAgICAgICAgIH19PHNwYW4gY2xhc3M9XCJ0ZXh0LXNlY29uZGFyeSBxLW1sLXNtIHRleHQtd2VpZ2h0LWJvbGRcIlxuICAgICAgICAgICAgICAgID4je3sgaXRlbXMucmVzZXJ2YXRpb25faWQgfX08L3NwYW5cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgdi1pZj1cIm1lcmNoYW50W2l0ZW1zLm1lcmNoYW50X2lkXVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJmb250MTMgdGV4dC13ZWlnaHQtYm9sZFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7eyBtZXJjaGFudFtpdGVtcy5tZXJjaGFudF9pZF0ucmVzdGF1cmFudF9uYW1lIH19XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJtZXJjaGFudFtpdGVtcy5tZXJjaGFudF9pZF1cIiBjbGFzcz1cImZvbnQxM1wiPlxuICAgICAgICAgICAgICAgIHt7IG1lcmNoYW50W2l0ZW1zLm1lcmNoYW50X2lkXS5tZXJjaGFudF9hZGRyZXNzIH19XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udDEzXCI+XG4gICAgICAgICAgICAgICAge3sgJHQoXCJHdWVzdFwiKSB9fSA6IHt7IGl0ZW1zLmd1ZXN0X251bWJlciB9fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiB2LWlmPVwidGFibGVfbGlzdFtpdGVtcy50YWJsZV9pZF1cIiBjbGFzcz1cImZvbnQxMlwiPlxuICAgICAgICAgICAgICAgIHt7IHRhYmxlX2xpc3RbaXRlbXMudGFibGVfaWRdIH19XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgPC9xLWNhcmQ+XG4gICAgICA8L3EtaXRlbT5cbiAgICA8L3EtbGlzdD5cblxuICAgIDxxLWlubmVyLWxvYWRpbmdcbiAgICAgIDpzaG93aW5nPVwibG9hZGluZ1wiXG4gICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgIGxhYmVsLWNsYXNzPVwiZGFya1wiXG4gICAgICBjbGFzcz1cInRyYW5zcGFyZW50XCJcbiAgICAvPlxuXG4gICAgPHEtcGFnZS1zY3JvbGxlclxuICAgICAgcG9zaXRpb249XCJib3R0b20tcmlnaHRcIlxuICAgICAgOnNjcm9sbC1vZmZzZXQ9XCIxNTBcIlxuICAgICAgOm9mZnNldD1cIlsxOCwgMThdXCJcbiAgICA+XG4gICAgICA8cS1idG5cbiAgICAgICAgZmFiXG4gICAgICAgIGljb249XCJrZXlib2FyZF9hcnJvd191cFwiXG4gICAgICAgIGNvbG9yPVwibXlncmV5XCJcbiAgICAgICAgdGV4dC1jb2xvcj1cImRhcmtcIlxuICAgICAgICBkZW5zZVxuICAgICAgICBwYWRkaW5nPVwiM3B4XCJcbiAgICAgIC8+XG4gICAgPC9xLXBhZ2Utc2Nyb2xsZXI+XG4gIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBBUElpbnRlcmZhY2UgZnJvbSBcInNyYy9hcGkvQVBJaW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJCb29raW5nU2VhcmNoXCIsXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgZGF0YTogW10sXG4gICAgICBxOiBcIlwiLFxuICAgICAgbWVyY2hhbnQ6IFtdLFxuICAgICAgdGFibGVfbGlzdDogW10sXG4gICAgfTtcbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLnEgPSB0aGlzLiRyb3V0ZS5xdWVyeS5xO1xuICAgIHRoaXMuU2VhcmNoKCk7XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgaGFzRGF0YSgpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmRhdGEpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICBnZXREYXRhKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgICB9LFxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgU2VhcmNoKCkge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIEFQSWludGVyZmFjZS5mZXRjaERhdGFQb3N0VGFibGUyKFwiQm9va2luZ1NlYXJjaFwiLCBcInNlYXJjaD1cIiArIHRoaXMucSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YS5jb2RlID09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IGRhdGEuZGV0YWlscy5kYXRhO1xuICAgICAgICAgICAgdGhpcy5tZXJjaGFudCA9IGRhdGEuZGV0YWlscy5tZXJjaGFudDtcbiAgICAgICAgICAgIHRoaXMudGFibGVfbGlzdCA9IGRhdGEuZGV0YWlscy50YWJsZV9saXN0O1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIC8vXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX2NyZWF0ZUJsb2NrIiwiX25vcm1hbGl6ZUNsYXNzIiwiX2NyZWF0ZVZOb2RlIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiLCJfY3JlYXRlVGV4dFZOb2RlIiwiX25vcm1hbGl6ZVN0eWxlIiwiX29wZW5CbG9jayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFvSUEsTUFBSyxZQUFVO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQ0wsV0FBTztBQUFBLE1BQ0wsU0FBUztBQUFBLE1BQ1QsTUFBTSxDQUFFO0FBQUEsTUFDUixHQUFHO0FBQUEsTUFDSCxVQUFVLENBQUU7QUFBQSxNQUNaLFlBQVksQ0FBRTtBQUFBO0VBRWpCO0FBQUEsRUFDRCxVQUFVO0FBQ1IsU0FBSyxJQUFJLEtBQUssT0FBTyxNQUFNO0FBQzNCLFNBQUssT0FBTTtBQUFBLEVBQ1o7QUFB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
