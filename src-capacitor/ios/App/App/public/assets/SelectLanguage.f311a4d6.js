import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QImg } from "./QImg.6c27044c.js";
import { _ as _export_sfc, R as useDataStore, S as useDataStorePersisted, a5 as api, p as openBlock, q as createBlock, t as withCtx, f as createVNode, a6 as createTextVNode, Z as toDisplayString, a7 as normalizeClass, a8 as QCard, a9 as QCardSection, V as createElementBlock, X as renderList, F as Fragment, Y as QBtn, aa as withDirectives, ab as Ripple, ac as QItem, ad as QItemSection, ae as QAvatar, af as QRadio } from "./index.61ed5618.js";
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
  name: "LanguagePage",
  setup() {
    const DataStore = useDataStore();
    const DataStorePersisted = useDataStorePersisted();
    return { DataStore, DataStorePersisted };
  },
  data() {
    return {
      language: ""
    };
  },
  created() {
    this.language = this.DataStorePersisted.app_language;
  },
  methods: {
    setLanguage() {
      this.DataStorePersisted.choose_language = true;
      this.DataStorePersisted.app_language = this.language;
      this.$i18n.locale = this.language;
      api.defaults.params = {};
      api.defaults.params["language"] = this.$i18n.locale;
      this.DataStore.getAttributes();
      this.$router.replace("/home");
      this.setRTL();
    },
    refresh(done) {
      this.DataStore.getAttributes(done);
    },
    setRTL() {
      if (Object.keys(this.DataStore.language_data).length > 0) {
        Object.entries(this.DataStore.language_data.data).forEach(
          ([key, items]) => {
            if (this.language == items.code) {
              if (items.rtl == 1) {
                this.$q.lang.set({ rtl: true });
                this.DataStorePersisted.rtl = true;
              } else {
                this.$q.lang.set({ rtl: false });
                this.DataStorePersisted.rtl = false;
              }
            }
          }
        );
      }
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
              createVNode(QToolbarTitle, { class: "text-weight-bold" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("Select Language")), 1)
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
                      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.DataStore.language_data.data, (items) => {
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
                            createVNode(QItemSection, { avatar: "" }, {
                              default: withCtx(() => [
                                createVNode(QAvatar, { square: "" }, {
                                  default: withCtx(() => [
                                    createVNode(QImg, {
                                      src: items.flag,
                                      "spinner-color": "secondary",
                                      style: { "height": "25px", "max-width": "40px" },
                                      "spinner-size": "sm"
                                    }, null, 8, ["src"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(QItemSection, null, {
                              default: withCtx(() => [
                                createVNode(QItemLabel, { lines: "1" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(items.title), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(QItemLabel, {
                                  lines: "1",
                                  caption: ""
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(items.description), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(QItemSection, { side: "" }, {
                              default: withCtx(() => [
                                createVNode(QRadio, {
                                  modelValue: $data.language,
                                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.language = $event),
                                  val: items.code
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
            class: "bg-grey-1 row q-gutter-sm q-pa-md"
          }, {
            default: withCtx(() => [
              createVNode(QBtn, {
                color: "dark",
                size: "lg",
                rounded: "",
                unelevated: "",
                "no-caps": "",
                flat: "",
                class: "col",
                to: "/home"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("Skip")), 1)
                ]),
                _: 1
              }),
              createVNode(QBtn, {
                color: "primary",
                size: "lg",
                rounded: "",
                unelevated: "",
                "no-caps": "",
                class: "col",
                onClick: $options.setLanguage,
                loading: $setup.DataStore.loading
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("Save")), 1)
                ]),
                _: 1
              }, 8, ["onClick", "loading"])
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
var SelectLanguage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "SelectLanguage.vue"]]);
export { SelectLanguage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VsZWN0TGFuZ3VhZ2UuZjMxMWE0ZDYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9JbnRyby9TZWxlY3RMYW5ndWFnZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8cS1wdWxsLXRvLXJlZnJlc2ggQHJlZnJlc2g9XCJyZWZyZXNoXCI+XG4gICAgPHEtaGVhZGVyXG4gICAgICByZXZlYWxcbiAgICAgIHJldmVhbC1vZmZzZXQ9XCI1MFwiXG4gICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICdiZy1teWRhcmsgdGV4dC13aGl0ZSc6ICRxLmRhcmsubW9kZSxcbiAgICAgICAgJ2JnLWdyZXktMSB0ZXh0LWRhcmsnOiAhJHEuZGFyay5tb2RlLFxuICAgICAgfVwiXG4gICAgPlxuICAgICAgPHEtdG9vbGJhcj5cbiAgICAgICAgPHEtdG9vbGJhci10aXRsZSBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGRcIj57e1xuICAgICAgICAgICR0KFwiU2VsZWN0IExhbmd1YWdlXCIpXG4gICAgICAgIH19PC9xLXRvb2xiYXItdGl0bGU+XG4gICAgICA8L3EtdG9vbGJhcj5cbiAgICA8L3EtaGVhZGVyPlxuICAgIDxxLXBhZ2VcbiAgICAgIHBhZGRpbmdcbiAgICAgIGNsYXNzPVwicS1wbC1tZCBxLXByLW1kIHJvdyBpdGVtcy1zdHJldGNoXCJcbiAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgJ2JnLW15ZGFyayc6ICRxLmRhcmsubW9kZSxcbiAgICAgICAgJ2JnLWdyZXktMSc6ICEkcS5kYXJrLm1vZGUsXG4gICAgICB9XCJcbiAgICA+XG4gICAgICA8cS1jYXJkXG4gICAgICAgIGZsYXRcbiAgICAgICAgY2xhc3M9XCJyYWRpdXM4IGNvbC0xMlwiXG4gICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAnYmctbXlkYXJrICc6ICRxLmRhcmsubW9kZSxcbiAgICAgICAgICAnYmctd2hpdGUgJzogISRxLmRhcmsubW9kZSxcbiAgICAgICAgfVwiXG4gICAgICA+XG4gICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICA8cS1saXN0PlxuICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICB2LWZvcj1cIml0ZW1zIGluIERhdGFTdG9yZS5sYW5ndWFnZV9kYXRhLmRhdGFcIlxuICAgICAgICAgICAgICA6a2V5PVwiaXRlbXNcIlxuICAgICAgICAgICAgICB0YWc9XCJsYWJlbFwiXG4gICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICB2LXJpcHBsZVxuICAgICAgICAgICAgICBjbGFzcz1cImJvcmRlci1ncmV5IHJhZGl1czEwIHEtbWItc21cIlxuICAgICAgICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICAgJ2JnLWRhcmsgdGV4dC13aGl0ZSc6ICRxLmRhcmsubW9kZSxcbiAgICAgICAgICAgICAgICAnYmctd2hpdGUgdGV4dC1ibGFjayc6ICEkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgICAgICAgIDxxLWF2YXRhciBzcXVhcmU+XG4gICAgICAgICAgICAgICAgICA8cS1pbWdcbiAgICAgICAgICAgICAgICAgICAgOnNyYz1cIml0ZW1zLmZsYWdcIlxuICAgICAgICAgICAgICAgICAgICBzcGlubmVyLWNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDI1cHg7IG1heC13aWR0aDogNDBweFwiXG4gICAgICAgICAgICAgICAgICAgIHNwaW5uZXItc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9xLWF2YXRhcj5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgbGluZXM9XCIxXCI+e3sgaXRlbXMudGl0bGUgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGxpbmVzPVwiMVwiIGNhcHRpb24+e3tcbiAgICAgICAgICAgICAgICAgIGl0ZW1zLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICAgICAgICAgICAgPHEtcmFkaW8gdi1tb2RlbD1cImxhbmd1YWdlXCIgOnZhbD1cIml0ZW1zLmNvZGVcIiAvPlxuICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgPC9xLWxpc3Q+XG4gICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICA8L3EtY2FyZD5cblxuICAgICAgPHEtZm9vdGVyIHJldmVhbCBjbGFzcz1cImJnLWdyZXktMSByb3cgcS1ndXR0ZXItc20gcS1wYS1tZFwiPlxuICAgICAgICA8cS1idG5cbiAgICAgICAgICBjb2xvcj1cImRhcmtcIlxuICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgcm91bmRlZFxuICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgZmxhdFxuICAgICAgICAgIGNsYXNzPVwiY29sXCJcbiAgICAgICAgICB0bz1cIi9ob21lXCJcbiAgICAgICAgICA+e3sgJHQoXCJTa2lwXCIpIH19PC9xLWJ0blxuICAgICAgICA+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICByb3VuZGVkXG4gICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICBjbGFzcz1cImNvbFwiXG4gICAgICAgICAgQGNsaWNrPVwic2V0TGFuZ3VhZ2VcIlxuICAgICAgICAgIDpsb2FkaW5nPVwiRGF0YVN0b3JlLmxvYWRpbmdcIlxuICAgICAgICAgID57eyAkdChcIlNhdmVcIikgfX08L3EtYnRuXG4gICAgICAgID5cbiAgICAgIDwvcS1mb290ZXI+XG4gICAgPC9xLXBhZ2U+XG4gIDwvcS1wdWxsLXRvLXJlZnJlc2g+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgdXNlRGF0YVN0b3JlIH0gZnJvbSBcInN0b3Jlcy9EYXRhU3RvcmVcIjtcbmltcG9ydCB7IHVzZURhdGFTdG9yZVBlcnNpc3RlZCB9IGZyb20gXCJzdG9yZXMvRGF0YVN0b3JlUGVyc2lzdGVkXCI7XG5pbXBvcnQgeyB1c2VJMThuIH0gZnJvbSBcInZ1ZS1pMThuXCI7XG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiYm9vdC9heGlvc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiTGFuZ3VhZ2VQYWdlXCIsXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IERhdGFTdG9yZSA9IHVzZURhdGFTdG9yZSgpO1xuICAgIGNvbnN0IERhdGFTdG9yZVBlcnNpc3RlZCA9IHVzZURhdGFTdG9yZVBlcnNpc3RlZCgpO1xuICAgIHJldHVybiB7IERhdGFTdG9yZSwgRGF0YVN0b3JlUGVyc2lzdGVkIH07XG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhbmd1YWdlOiBcIlwiLFxuICAgIH07XG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5sYW5ndWFnZSA9IHRoaXMuRGF0YVN0b3JlUGVyc2lzdGVkLmFwcF9sYW5ndWFnZTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHNldExhbmd1YWdlKCkge1xuICAgICAgdGhpcy5EYXRhU3RvcmVQZXJzaXN0ZWQuY2hvb3NlX2xhbmd1YWdlID0gdHJ1ZTtcbiAgICAgIHRoaXMuRGF0YVN0b3JlUGVyc2lzdGVkLmFwcF9sYW5ndWFnZSA9IHRoaXMubGFuZ3VhZ2U7XG4gICAgICB0aGlzLiRpMThuLmxvY2FsZSA9IHRoaXMubGFuZ3VhZ2U7XG4gICAgICBhcGkuZGVmYXVsdHMucGFyYW1zID0ge307XG4gICAgICBhcGkuZGVmYXVsdHMucGFyYW1zW1wibGFuZ3VhZ2VcIl0gPSB0aGlzLiRpMThuLmxvY2FsZTtcblxuICAgICAgdGhpcy5EYXRhU3RvcmUuZ2V0QXR0cmlidXRlcygpO1xuICAgICAgdGhpcy4kcm91dGVyLnJlcGxhY2UoXCIvaG9tZVwiKTtcbiAgICAgIHRoaXMuc2V0UlRMKCk7XG4gICAgfSxcbiAgICByZWZyZXNoKGRvbmUpIHtcbiAgICAgIHRoaXMuRGF0YVN0b3JlLmdldEF0dHJpYnV0ZXMoZG9uZSk7XG4gICAgfSxcbiAgICBzZXRSVEwoKSB7XG4gICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5EYXRhU3RvcmUubGFuZ3VhZ2VfZGF0YSkubGVuZ3RoID4gMCkge1xuICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLkRhdGFTdG9yZS5sYW5ndWFnZV9kYXRhLmRhdGEpLmZvckVhY2goXG4gICAgICAgICAgKFtrZXksIGl0ZW1zXSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMubGFuZ3VhZ2UgPT0gaXRlbXMuY29kZSkge1xuICAgICAgICAgICAgICBpZiAoaXRlbXMucnRsID09IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRxLmxhbmcuc2V0KHsgcnRsOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuRGF0YVN0b3JlUGVyc2lzdGVkLnJ0bCA9IHRydWU7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kcS5sYW5nLnNldCh7IHJ0bDogZmFsc2UgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5EYXRhU3RvcmVQZXJzaXN0ZWQucnRsID0gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfY3JlYXRlQmxvY2siLCJfY3JlYXRlVk5vZGUiLCJfbm9ybWFsaXplQ2xhc3MiLCJfb3BlbkJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9GcmFnbWVudCIsIl9jcmVhdGVUZXh0Vk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQXdHQSxNQUFLLFlBQVU7QUFBQSxFQUNiLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFDTixVQUFNLFlBQVk7QUFDbEIsVUFBTSxxQkFBcUI7QUFDM0IsV0FBTyxFQUFFLFdBQVc7RUFDckI7QUFBQSxFQUNELE9BQU87QUFDTCxXQUFPO0FBQUEsTUFDTCxVQUFVO0FBQUE7RUFFYjtBQUFBLEVBQ0QsVUFBVTtBQUNSLFNBQUssV0FBVyxLQUFLLG1CQUFtQjtBQUFBLEVBQ3pDO0FBQUEsRUFDRCxTQUFTO0FBQUEsSUFDUCxjQUFjO0FBQ1osV0FBSyxtQkFBbUIsa0JBQWtCO0FBQzFDLFdBQUssbUJBQW1CLGVBQWUsS0FBSztBQUM1QyxXQUFLLE1BQU0sU0FBUyxLQUFLO0FBQ3pCLFVBQUksU0FBUyxTQUFTO0FBQ3RCLFVBQUksU0FBUyxPQUFPLGNBQWMsS0FBSyxNQUFNO0FBRTdDLFdBQUssVUFBVTtBQUNmLFdBQUssUUFBUSxRQUFRLE9BQU87QUFDNUIsV0FBSyxPQUFNO0FBQUEsSUFDWjtBQUFBLElBQ0QsUUFBUSxNQUFNO0FBQ1osV0FBSyxVQUFVLGNBQWMsSUFBSTtBQUFBLElBQ2xDO0FBQUEsSUFDRCxTQUFTO0FBQ1AsVUFBSSxPQUFPLEtBQUssS0FBSyxVQUFVLGFBQWEsRUFBRSxTQUFTLEdBQUc7QUFDeEQsZUFBTyxRQUFRLEtBQUssVUFBVSxjQUFjLElBQUksRUFBRTtBQUFBLFVBQ2hELENBQUMsQ0FBQyxLQUFLLEtBQUssTUFBTTtBQUNoQixnQkFBSSxLQUFLLFlBQVksTUFBTSxNQUFNO0FBQy9CLGtCQUFJLE1BQU0sT0FBTyxHQUFHO0FBQ2xCLHFCQUFLLEdBQUcsS0FBSyxJQUFJLEVBQUUsS0FBSyxLQUFLLENBQUM7QUFDOUIscUJBQUssbUJBQW1CLE1BQU07QUFBQSxxQkFDekI7QUFDTCxxQkFBSyxHQUFHLEtBQUssSUFBSSxFQUFFLEtBQUssTUFBTSxDQUFDO0FBQy9CLHFCQUFLLG1CQUFtQixNQUFNO0FBQUEsY0FDaEM7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBO01BRUo7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUNIOztzQkF2SkVBLFlBOEZvQixnQkFBQSxFQUFBLFdBQUEsU0E5Rk8sV0FBUztBQUFBLHFCQUNsQyxNQWFXO0FBQUEsTUFiWEMsWUFhVyxTQUFBO0FBQUEsUUFaVCxRQUFBO0FBQUEsUUFDQSxpQkFBYztBQUFBLFFBQ2IsT0FBS0MsZUFBQTtBQUFBLGtDQUFvQyxLQUFFLEdBQUMsS0FBSztBQUFBLGtDQUFzQyxLQUFFLEdBQUMsS0FBSztBQUFBOzt5QkFLaEcsTUFJWTtBQUFBLFVBSlpELFlBSVksVUFBQSxNQUFBO0FBQUEsNkJBSFYsTUFFb0I7QUFBQSxjQUZwQkEsWUFFb0IsZUFBQSxFQUFBLE9BQUEsbUJBRnFCLEdBQUE7QUFBQSxpQ0FBQyxNQUV4QztBQUFBLGtEQURBLEtBQUUsR0FBQSxpQkFBQSxDQUFBLEdBQUEsQ0FBQTtBQUFBOzs7Ozs7Ozs7TUFJUkEsWUE4RVMsT0FBQTtBQUFBLFFBN0VQLFNBQUE7QUFBQSxRQUNBLHVCQUFNLHFDQUFtQztBQUFBLHVCQUNWLEtBQUUsR0FBQyxLQUFLO0FBQUEsd0JBQTRCLEtBQUUsR0FBQyxLQUFLO0FBQUE7O3lCQUszRSxNQTRDUztBQUFBLFVBNUNUQSxZQTRDUyxPQUFBO0FBQUEsWUEzQ1AsTUFBQTtBQUFBLFlBQ0EsdUJBQU0sa0JBQWdCO0FBQUEsNEJBQ1ksS0FBRSxHQUFDLEtBQUs7QUFBQSw0QkFBOEIsS0FBRSxHQUFDLEtBQUs7QUFBQTs7NkJBS2hGLE1BbUNpQjtBQUFBLGNBbkNqQkEsWUFtQ2lCLGNBQUEsTUFBQTtBQUFBLGlDQWxDZixNQWlDUztBQUFBLGtCQWpDVEEsWUFpQ1MsT0FBQSxNQUFBO0FBQUEscUNBL0JMLE1BQTZDO0FBQUEsdUJBRC9DRSxVQUFBLElBQUEsR0FBQUMsbUJBK0JTQywyQkE5QlMsT0FBUyxVQUFDLGNBQWMsT0FBakMsVUFBSzs0REFEZEwsWUErQlMsT0FBQTtBQUFBLDBCQTdCTixLQUFLO0FBQUEsMEJBQ04sS0FBSTtBQUFBLDBCQUNKLFdBQUE7QUFBQSwwQkFFQSx1QkFBTSxnQ0FBOEI7QUFBQSxrREFDWSxLQUFFLEdBQUMsS0FBSztBQUFBLG9EQUE4QyxLQUFFLEdBQUMsS0FBSztBQUFBOzsyQ0FLOUcsTUFTaUI7QUFBQSw0QkFUakJDLFlBU2lCLGNBQUEsRUFBQSxRQUFBLEdBQUEsR0FUSztBQUFBLCtDQUNwQixNQU9XO0FBQUEsZ0NBUFhBLFlBT1csU0FBQSxFQUFBLFFBQUEsR0FBQSxHQVBLO0FBQUEsbURBQ2QsTUFLRTtBQUFBLG9DQUxGQSxZQUtFLE1BQUE7QUFBQSxzQ0FKQyxLQUFLLE1BQU07QUFBQSxzQ0FDWixpQkFBYztBQUFBLHNDQUNkLE9BQUEsRUFBcUMsVUFBQSxRQUFBLGFBQUEsT0FBQTtBQUFBLHNDQUNyQyxnQkFBYTtBQUFBOzs7Ozs7OzRCQUluQkEsWUFLaUIsY0FBQSxNQUFBO0FBQUEsK0NBSmYsTUFBd0Q7QUFBQSxnQ0FBeERBLFlBQXdELFlBQUEsRUFBQSxPQUFBLElBQUEsR0FBckM7QUFBQSxtREFBSyxNQUFpQjtBQUFBLG9DQUFkSyxnQkFBQUMsZ0JBQUEsTUFBTSxLQUFLLEdBQUEsQ0FBQTtBQUFBOzs7Z0NBQ3RDTixZQUVpQixZQUFBO0FBQUEsa0NBRkgsT0FBTTtBQUFBLGtDQUFJLFNBQUE7QUFBQTttREFBUSxNQUU5QjtBQUFBLG9DQURBSyxnQkFBQUMsZ0JBQUEsTUFBTSxXQUFXLEdBQUEsQ0FBQTtBQUFBOzs7Ozs7NEJBR3JCTixZQUVpQixjQUFBLEVBQUEsTUFBQSxHQUFBLEdBQUE7QUFBQSwrQ0FEZixNQUFnRDtBQUFBLGdDQUFoREEsWUFBZ0QsUUFBQTtBQUFBLDhDQUE5QixNQUFRO0FBQUEsK0ZBQVIsTUFBUSxXQUFBO0FBQUEsa0NBQUcsS0FBSyxNQUFNO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFPbERBLFlBdUJXLFNBQUE7QUFBQSxZQXZCRCxRQUFBO0FBQUEsWUFBTyxPQUFNO0FBQUE7NkJBQ3JCLE1BVUM7QUFBQSxjQVZEQSxZQVVDLE1BQUE7QUFBQSxnQkFUQyxPQUFNO0FBQUEsZ0JBQ04sTUFBSztBQUFBLGdCQUNMLFNBQUE7QUFBQSxnQkFDQSxZQUFBO0FBQUEsZ0JBQ0EsV0FBQTtBQUFBLGdCQUNBLE1BQUE7QUFBQSxnQkFDQSxPQUFNO0FBQUEsZ0JBQ04sSUFBRztBQUFBO2lDQUNGLE1BQWdCO0FBQUEsa0RBQWIsS0FBRSxHQUFBLE1BQUEsQ0FBQSxHQUFBLENBQUE7QUFBQTs7O2NBRVJBLFlBVUMsTUFBQTtBQUFBLGdCQVRDLE9BQU07QUFBQSxnQkFDTixNQUFLO0FBQUEsZ0JBQ0wsU0FBQTtBQUFBLGdCQUNBLFlBQUE7QUFBQSxnQkFDQSxXQUFBO0FBQUEsZ0JBQ0EsT0FBTTtBQUFBLGdCQUNMLFNBQU8sU0FBVztBQUFBLGdCQUNsQixTQUFTLE9BQVMsVUFBQztBQUFBO2lDQUNuQixNQUFnQjtBQUFBLGtEQUFiLEtBQUUsR0FBQSxNQUFBLENBQUEsR0FBQSxDQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7OzsifQ==
