import { _ as _export_sfc, R as useDataStore, S as useDataStorePersisted, p as openBlock, q as createBlock, t as withCtx, f as createVNode, Y as QBtn, a6 as createTextVNode, Z as toDisplayString, a7 as normalizeClass, a8 as QCard, a9 as QCardSection, V as createElementBlock, X as renderList, F as Fragment, aa as withDirectives, ab as Ripple, ac as QItem, ad as QItemSection, af as QRadio } from "./index.61ed5618.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QItemLabel } from "./QItemLabel.a9365c5b.js";
import { Q as QList } from "./QList.b69a7e5b.js";
import { Q as QFooter } from "./QFooter.571ac042.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import { Q as QPullToRefresh } from "./QPullToRefresh.3d10c02d.js";
import "./QResizeObserver.d08dce3c.js";
import "./touch.96e0ae37.js";
import "./selection.50b4cb0c.js";
import "./format.7f7370d3.js";
const _sfc_main = {
  name: "CurrencyPage",
  setup() {
    const DataStore = useDataStore();
    const DataStorePersisted = useDataStorePersisted();
    return { DataStore, DataStorePersisted };
  },
  data() {
    return {
      currency_code: "",
      loading: false
    };
  },
  created() {
    this.currency_code = this.getCurrency();
  },
  methods: {
    refresh(done) {
      this.DataStore.getAttributes(done);
    },
    getCurrency() {
      if (Object.keys(this.DataStore.currency_list).length > 0) {
        let Currency = this.DataStorePersisted.use_currency_code ? this.DataStorePersisted.use_currency_code : this.DataStore.default_currency_code;
        return Currency;
      }
      return false;
    },
    setCurrency() {
      this.loading = true;
      this.DataStorePersisted.use_currency_code = this.currency_code;
      setTimeout(() => {
        this.$router.replace("/account-menu");
      }, 500);
    }
  }
};
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
                flat: "",
                round: "",
                dense: "",
                icon: "las la-angle-left",
                class: "q-mr-sm",
                color: _ctx.$q.dark.mode ? "white" : "dark"
              }, null, 8, ["color"]),
              createVNode(QToolbarTitle, { class: "text-weight-bold" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("Language")), 1)
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
        padding: "",
        class: normalizeClass(["q-pl-md q-pr-md row items-stretch", {
          "bg-mydark": _ctx.$q.dark.mode,
          "bg-grey-1": !_ctx.$q.dark.mode
        }])
      }, {
        default: withCtx(() => [
          createVNode(QCard, {
            flat: "",
            class: normalizeClass(["radius8 col-12", {
              "bg-mydark ": _ctx.$q.dark.mode,
              "bg-white ": !_ctx.$q.dark.mode
            }])
          }, {
            default: withCtx(() => [
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  createVNode(QList, null, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.DataStore.currency_list, (items, code) => {
                        return withDirectives((openBlock(), createBlock(QItem, {
                          key: items,
                          tag: "label",
                          clickable: "",
                          class: normalizeClass(["border-grey radius10 q-mb-sm", {
                            "bg-dark text-white": _ctx.$q.dark.mode,
                            "bg-white text-black": !_ctx.$q.dark.mode
                          }])
                        }, {
                          default: withCtx(() => [
                            createVNode(QItemSection, null, {
                              default: withCtx(() => [
                                createVNode(QItemLabel, { lines: "1" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(items), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(QItemSection, { side: "" }, {
                              default: withCtx(() => [
                                createVNode(QRadio, {
                                  modelValue: $data.currency_code,
                                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.currency_code = $event),
                                  val: code
                                }, null, 8, ["modelValue", "val"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1032, ["class"])), [
                          [Ripple]
                        ]);
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
                label: _ctx.$t("Save"),
                unelevated: "",
                "no-caps": "",
                color: "primary text-white",
                class: "full-width text-weight-bold",
                size: "lg",
                onClick: $options.setCurrency,
                loading: $data.loading
              }, null, 8, ["label", "onClick", "loading"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["class"])
    ]),
    _: 1
  }, 8, ["onRefresh"]);
}
var CurrencyPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "CurrencyPage.vue"]]);
export { CurrencyPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VycmVuY3lQYWdlLmM1MzZlOWJhLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvQWNjb3VudC9DdXJyZW5jeVBhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHEtcHVsbC10by1yZWZyZXNoIEByZWZyZXNoPVwicmVmcmVzaFwiPlxuICAgIDxxLWhlYWRlclxuICAgICAgcmV2ZWFsXG4gICAgICByZXZlYWwtb2Zmc2V0PVwiNTBcIlxuICAgICAgOmNsYXNzPVwie1xuICAgICAgICAnYmctbXlkYXJrIHRleHQtd2hpdGUnOiAkcS5kYXJrLm1vZGUsXG4gICAgICAgICdiZy1ncmV5LTEgdGV4dC1kYXJrJzogISRxLmRhcmsubW9kZSxcbiAgICAgIH1cIlxuICAgID5cbiAgICAgIDxxLXRvb2xiYXI+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIEBjbGljaz1cIiRyb3V0ZXIuYmFjaygpXCJcbiAgICAgICAgICBmbGF0XG4gICAgICAgICAgcm91bmRcbiAgICAgICAgICBkZW5zZVxuICAgICAgICAgIGljb249XCJsYXMgbGEtYW5nbGUtbGVmdFwiXG4gICAgICAgICAgY2xhc3M9XCJxLW1yLXNtXCJcbiAgICAgICAgICA6Y29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnd2hpdGUnIDogJ2RhcmsnXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHEtdG9vbGJhci10aXRsZSBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGRcIj57e1xuICAgICAgICAgICR0KFwiTGFuZ3VhZ2VcIilcbiAgICAgICAgfX08L3EtdG9vbGJhci10aXRsZT5cbiAgICAgIDwvcS10b29sYmFyPlxuICAgIDwvcS1oZWFkZXI+XG4gICAgPHEtcGFnZVxuICAgICAgcGFkZGluZ1xuICAgICAgY2xhc3M9XCJxLXBsLW1kIHEtcHItbWQgcm93IGl0ZW1zLXN0cmV0Y2hcIlxuICAgICAgOmNsYXNzPVwie1xuICAgICAgICAnYmctbXlkYXJrJzogJHEuZGFyay5tb2RlLFxuICAgICAgICAnYmctZ3JleS0xJzogISRxLmRhcmsubW9kZSxcbiAgICAgIH1cIlxuICAgID5cbiAgICAgIDxxLWNhcmRcbiAgICAgICAgZmxhdFxuICAgICAgICBjbGFzcz1cInJhZGl1czggY29sLTEyXCJcbiAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICdiZy1teWRhcmsgJzogJHEuZGFyay5tb2RlLFxuICAgICAgICAgICdiZy13aGl0ZSAnOiAhJHEuZGFyay5tb2RlLFxuICAgICAgICB9XCJcbiAgICAgID5cbiAgICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgIDxxLWxpc3Q+XG4gICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgIHYtZm9yPVwiKGl0ZW1zLCBjb2RlKSBpbiBEYXRhU3RvcmUuY3VycmVuY3lfbGlzdFwiXG4gICAgICAgICAgICAgIDprZXk9XCJpdGVtc1wiXG4gICAgICAgICAgICAgIHRhZz1cImxhYmVsXCJcbiAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgIHYtcmlwcGxlXG4gICAgICAgICAgICAgIGNsYXNzPVwiYm9yZGVyLWdyZXkgcmFkaXVzMTAgcS1tYi1zbVwiXG4gICAgICAgICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICAgICAnYmctZGFyayB0ZXh0LXdoaXRlJzogJHEuZGFyay5tb2RlLFxuICAgICAgICAgICAgICAgICdiZy13aGl0ZSB0ZXh0LWJsYWNrJzogISRxLmRhcmsubW9kZSxcbiAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGxpbmVzPVwiMVwiPnt7IGl0ZW1zIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlPlxuICAgICAgICAgICAgICAgIDxxLXJhZGlvIHYtbW9kZWw9XCJjdXJyZW5jeV9jb2RlXCIgOnZhbD1cImNvZGVcIiAvPlxuICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgPC9xLWxpc3Q+XG4gICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICA8L3EtY2FyZD5cblxuICAgICAgPHEtZm9vdGVyXG4gICAgICAgIHJldmVhbFxuICAgICAgICBjbGFzcz1cImJnLWdyZXktMSBxLXBsLW1kIHEtcHItbWQgcS1wYi1zbSBxLXB0LXNtIHRleHQtZGFya1wiXG4gICAgICA+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIDpsYWJlbD1cIiR0KCdTYXZlJylcIlxuICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5IHRleHQtd2hpdGVcIlxuICAgICAgICAgIGNsYXNzPVwiZnVsbC13aWR0aCB0ZXh0LXdlaWdodC1ib2xkXCJcbiAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgIEBjbGljaz1cInNldEN1cnJlbmN5XCJcbiAgICAgICAgICA6bG9hZGluZz1cImxvYWRpbmdcIlxuICAgICAgICAvPlxuICAgICAgPC9xLWZvb3Rlcj5cbiAgICA8L3EtcGFnZT5cbiAgPC9xLXB1bGwtdG8tcmVmcmVzaD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyB1c2VEYXRhU3RvcmUgfSBmcm9tIFwic3RvcmVzL0RhdGFTdG9yZVwiO1xuaW1wb3J0IHsgdXNlRGF0YVN0b3JlUGVyc2lzdGVkIH0gZnJvbSBcInN0b3Jlcy9EYXRhU3RvcmVQZXJzaXN0ZWRcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIkN1cnJlbmN5UGFnZVwiLFxuICBzZXR1cCgpIHtcbiAgICBjb25zdCBEYXRhU3RvcmUgPSB1c2VEYXRhU3RvcmUoKTtcbiAgICBjb25zdCBEYXRhU3RvcmVQZXJzaXN0ZWQgPSB1c2VEYXRhU3RvcmVQZXJzaXN0ZWQoKTtcbiAgICByZXR1cm4geyBEYXRhU3RvcmUsIERhdGFTdG9yZVBlcnNpc3RlZCB9O1xuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW5jeV9jb2RlOiBcIlwiLFxuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgfTtcbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLmN1cnJlbmN5X2NvZGUgPSB0aGlzLmdldEN1cnJlbmN5KCk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICByZWZyZXNoKGRvbmUpIHtcbiAgICAgIHRoaXMuRGF0YVN0b3JlLmdldEF0dHJpYnV0ZXMoZG9uZSk7XG4gICAgfSxcbiAgICBnZXRDdXJyZW5jeSgpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLkRhdGFTdG9yZS5jdXJyZW5jeV9saXN0KS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBDdXJyZW5jeSA9IHRoaXMuRGF0YVN0b3JlUGVyc2lzdGVkLnVzZV9jdXJyZW5jeV9jb2RlXG4gICAgICAgICAgPyB0aGlzLkRhdGFTdG9yZVBlcnNpc3RlZC51c2VfY3VycmVuY3lfY29kZVxuICAgICAgICAgIDogdGhpcy5EYXRhU3RvcmUuZGVmYXVsdF9jdXJyZW5jeV9jb2RlO1xuICAgICAgICByZXR1cm4gQ3VycmVuY3k7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICBzZXRDdXJyZW5jeSgpIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLkRhdGFTdG9yZVBlcnNpc3RlZC51c2VfY3VycmVuY3lfY29kZSA9IHRoaXMuY3VycmVuY3lfY29kZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLiRyb3V0ZXIucmVwbGFjZShcIi9hY2NvdW50LW1lbnVcIik7XG4gICAgICB9LCA1MDApO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX2NyZWF0ZUJsb2NrIiwiX2NyZWF0ZVZOb2RlIiwiX25vcm1hbGl6ZUNsYXNzIiwiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfRnJhZ21lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUF5RkEsTUFBSyxZQUFVO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixRQUFRO0FBQ04sVUFBTSxZQUFZO0FBQ2xCLFVBQU0scUJBQXFCO0FBQzNCLFdBQU8sRUFBRSxXQUFXO0VBQ3JCO0FBQUEsRUFDRCxPQUFPO0FBQ0wsV0FBTztBQUFBLE1BQ0wsZUFBZTtBQUFBLE1BQ2YsU0FBUztBQUFBO0VBRVo7QUFBQSxFQUNELFVBQVU7QUFDUixTQUFLLGdCQUFnQixLQUFLO0VBQzNCO0FBQUEsRUFDRCxTQUFTO0FBQUEsSUFDUCxRQUFRLE1BQU07QUFDWixXQUFLLFVBQVUsY0FBYyxJQUFJO0FBQUEsSUFDbEM7QUFBQSxJQUNELGNBQWM7QUFDWixVQUFJLE9BQU8sS0FBSyxLQUFLLFVBQVUsYUFBYSxFQUFFLFNBQVMsR0FBRztBQUN4RCxZQUFJLFdBQVcsS0FBSyxtQkFBbUIsb0JBQ25DLEtBQUssbUJBQW1CLG9CQUN4QixLQUFLLFVBQVU7QUFDbkIsZUFBTztBQUFBLE1BQ1Q7QUFDQSxhQUFPO0FBQUEsSUFDUjtBQUFBLElBQ0QsY0FBYztBQUNaLFdBQUssVUFBVTtBQUNmLFdBQUssbUJBQW1CLG9CQUFvQixLQUFLO0FBQ2pELGlCQUFXLE1BQU07QUFDZixhQUFLLFFBQVEsUUFBUSxlQUFlO0FBQUEsTUFDckMsR0FBRSxHQUFHO0FBQUEsSUFDUDtBQUFBLEVBQ0Y7QUFDSDs7c0JBN0hFQSxZQWlGb0IsZ0JBQUEsRUFBQSxXQUFBLFNBakZPLFdBQVM7QUFBQSxxQkFDbEMsTUFzQlc7QUFBQSxNQXRCWEMsWUFzQlcsU0FBQTtBQUFBLFFBckJULFFBQUE7QUFBQSxRQUNBLGlCQUFjO0FBQUEsUUFDYixPQUFLQyxlQUFBO0FBQUEsa0NBQW9DLEtBQUUsR0FBQyxLQUFLO0FBQUEsa0NBQXNDLEtB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
