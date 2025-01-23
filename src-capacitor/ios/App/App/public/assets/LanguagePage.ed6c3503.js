import { _ as _export_sfc, R as useDataStore, S as useDataStorePersisted, a5 as api, p as openBlock, q as createBlock, t as withCtx, f as createVNode, Y as QBtn, a6 as createTextVNode, Z as toDisplayString, a7 as normalizeClass, a8 as QCard, a9 as QCardSection, V as createElementBlock, X as renderList, F as Fragment, aa as withDirectives, ab as Ripple, ac as QItem, ad as QItemSection, ae as QAvatar, af as QRadio } from "./index.61ed5618.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QImg } from "./QImg.6c27044c.js";
import { Q as QItemLabel } from "./QItemLabel.a9365c5b.js";
import { Q as QList } from "./QList.b69a7e5b.js";
import { Q as QFooter } from "./QFooter.571ac042.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import { Q as QPullToRefresh } from "./QPullToRefresh.3d10c02d.js";
import { u as useMenuStore } from "./MenuStore.f3a21da3.js";
import "./QResizeObserver.d08dce3c.js";
import "./touch.96e0ae37.js";
import "./selection.50b4cb0c.js";
import "./format.7f7370d3.js";
const _sfc_main = {
  name: "LanguagePage",
  setup() {
    const DataStore = useDataStore();
    const DataStorePersisted = useDataStorePersisted();
    const MenuStore = useMenuStore();
    return { DataStore, DataStorePersisted, MenuStore };
  },
  data() {
    return {
      language: "",
      loading: false
    };
  },
  created() {
    this.language = this.DataStorePersisted.app_language;
  },
  methods: {
    setLanguage() {
      this.DataStorePersisted.app_language = this.language;
      this.$i18n.locale = this.language;
      api.defaults.params = {};
      api.defaults.params["language"] = this.$i18n.locale;
      this.setRTL();
      this.DataStore.getAttributes();
      this.MenuStore.data_info = [];
      this.MenuStore.data_category = [];
      this.$router.replace("/home");
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
                                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.language = $event),
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
                onClick: $options.setLanguage,
                loading: $setup.DataStore.loading
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
var LanguagePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "LanguagePage.vue"]]);
export { LanguagePage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGFuZ3VhZ2VQYWdlLmVkNmMzNTAzLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvQWNjb3VudC9MYW5ndWFnZVBhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHEtcHVsbC10by1yZWZyZXNoIEByZWZyZXNoPVwicmVmcmVzaFwiPlxuICAgIDxxLWhlYWRlclxuICAgICAgcmV2ZWFsXG4gICAgICByZXZlYWwtb2Zmc2V0PVwiNTBcIlxuICAgICAgOmNsYXNzPVwie1xuICAgICAgICAnYmctbXlkYXJrIHRleHQtd2hpdGUnOiAkcS5kYXJrLm1vZGUsXG4gICAgICAgICdiZy1ncmV5LTEgdGV4dC1kYXJrJzogISRxLmRhcmsubW9kZSxcbiAgICAgIH1cIlxuICAgID5cbiAgICAgIDxxLXRvb2xiYXI+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIEBjbGljaz1cIiRyb3V0ZXIuYmFjaygpXCJcbiAgICAgICAgICBmbGF0XG4gICAgICAgICAgcm91bmRcbiAgICAgICAgICBkZW5zZVxuICAgICAgICAgIGljb249XCJsYXMgbGEtYW5nbGUtbGVmdFwiXG4gICAgICAgICAgY2xhc3M9XCJxLW1yLXNtXCJcbiAgICAgICAgICA6Y29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnd2hpdGUnIDogJ2RhcmsnXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHEtdG9vbGJhci10aXRsZSBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGRcIj57e1xuICAgICAgICAgICR0KFwiTGFuZ3VhZ2VcIilcbiAgICAgICAgfX08L3EtdG9vbGJhci10aXRsZT5cbiAgICAgIDwvcS10b29sYmFyPlxuICAgIDwvcS1oZWFkZXI+XG4gICAgPHEtcGFnZVxuICAgICAgcGFkZGluZ1xuICAgICAgY2xhc3M9XCJxLXBsLW1kIHEtcHItbWQgcm93IGl0ZW1zLXN0cmV0Y2hcIlxuICAgICAgOmNsYXNzPVwie1xuICAgICAgICAnYmctbXlkYXJrJzogJHEuZGFyay5tb2RlLFxuICAgICAgICAnYmctZ3JleS0xJzogISRxLmRhcmsubW9kZSxcbiAgICAgIH1cIlxuICAgID5cbiAgICAgIDxxLWNhcmRcbiAgICAgICAgZmxhdFxuICAgICAgICBjbGFzcz1cInJhZGl1czggY29sLTEyXCJcbiAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICdiZy1teWRhcmsgJzogJHEuZGFyay5tb2RlLFxuICAgICAgICAgICdiZy13aGl0ZSAnOiAhJHEuZGFyay5tb2RlLFxuICAgICAgICB9XCJcbiAgICAgID5cbiAgICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgIDxxLWxpc3Q+XG4gICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgIHYtZm9yPVwiaXRlbXMgaW4gRGF0YVN0b3JlLmxhbmd1YWdlX2RhdGEuZGF0YVwiXG4gICAgICAgICAgICAgIDprZXk9XCJpdGVtc1wiXG4gICAgICAgICAgICAgIHRhZz1cImxhYmVsXCJcbiAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgIHYtcmlwcGxlXG4gICAgICAgICAgICAgIGNsYXNzPVwiYm9yZGVyLWdyZXkgcmFkaXVzMTAgcS1tYi1zbVwiXG4gICAgICAgICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICAgICAnYmctZGFyayB0ZXh0LXdoaXRlJzogJHEuZGFyay5tb2RlLFxuICAgICAgICAgICAgICAgICdiZy13aGl0ZSB0ZXh0LWJsYWNrJzogISRxLmRhcmsubW9kZSxcbiAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgICAgICAgPHEtYXZhdGFyIHNxdWFyZT5cbiAgICAgICAgICAgICAgICAgIDxxLWltZ1xuICAgICAgICAgICAgICAgICAgICA6c3JjPVwiaXRlbXMuZmxhZ1wiXG4gICAgICAgICAgICAgICAgICAgIHNwaW5uZXItY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImhlaWdodDogMjVweDsgbWF4LXdpZHRoOiA0MHB4XCJcbiAgICAgICAgICAgICAgICAgICAgc3Bpbm5lci1zaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3EtYXZhdGFyPlxuICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBsaW5lcz1cIjFcIj57eyBpdGVtcy50aXRsZSB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgbGluZXM9XCIxXCIgY2FwdGlvbj57e1xuICAgICAgICAgICAgICAgICAgaXRlbXMuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZT5cbiAgICAgICAgICAgICAgICA8cS1yYWRpbyB2LW1vZGVsPVwibGFuZ3VhZ2VcIiA6dmFsPVwiaXRlbXMuY29kZVwiIC8+XG4gICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICA8L3EtbGlzdD5cbiAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgIDwvcS1jYXJkPlxuXG4gICAgICA8cS1mb290ZXJcbiAgICAgICAgcmV2ZWFsXG4gICAgICAgIGNsYXNzPVwiYmctZ3JleS0xIHEtcGwtbWQgcS1wci1tZCBxLXBiLXNtIHEtcHQtc20gdGV4dC1kYXJrXCJcbiAgICAgID5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgOmxhYmVsPVwiJHQoJ1NhdmUnKVwiXG4gICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnkgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgY2xhc3M9XCJmdWxsLXdpZHRoIHRleHQtd2VpZ2h0LWJvbGRcIlxuICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgQGNsaWNrPVwic2V0TGFuZ3VhZ2VcIlxuICAgICAgICAgIDpsb2FkaW5nPVwiRGF0YVN0b3JlLmxvYWRpbmdcIlxuICAgICAgICAvPlxuICAgICAgPC9xLWZvb3Rlcj5cbiAgICA8L3EtcGFnZT5cbiAgPC9xLXB1bGwtdG8tcmVmcmVzaD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyB1c2VEYXRhU3RvcmUgfSBmcm9tIFwic3RvcmVzL0RhdGFTdG9yZVwiO1xuaW1wb3J0IHsgdXNlRGF0YVN0b3JlUGVyc2lzdGVkIH0gZnJvbSBcInN0b3Jlcy9EYXRhU3RvcmVQZXJzaXN0ZWRcIjtcbmltcG9ydCB7IHVzZU1lbnVTdG9yZSB9IGZyb20gXCJzdG9yZXMvTWVudVN0b3JlXCI7XG5pbXBvcnQgeyB1c2VJMThuIH0gZnJvbSBcInZ1ZS1pMThuXCI7XG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiYm9vdC9heGlvc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiTGFuZ3VhZ2VQYWdlXCIsXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IERhdGFTdG9yZSA9IHVzZURhdGFTdG9yZSgpO1xuICAgIGNvbnN0IERhdGFTdG9yZVBlcnNpc3RlZCA9IHVzZURhdGFTdG9yZVBlcnNpc3RlZCgpO1xuICAgIGNvbnN0IE1lbnVTdG9yZSA9IHVzZU1lbnVTdG9yZSgpO1xuICAgIHJldHVybiB7IERhdGFTdG9yZSwgRGF0YVN0b3JlUGVyc2lzdGVkLCBNZW51U3RvcmUgfTtcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGFuZ3VhZ2U6IFwiXCIsXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICB9O1xuICB9LFxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMubGFuZ3VhZ2UgPSB0aGlzLkRhdGFTdG9yZVBlcnNpc3RlZC5hcHBfbGFuZ3VhZ2U7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBzZXRMYW5ndWFnZSgpIHtcbiAgICAgIHRoaXMuRGF0YVN0b3JlUGVyc2lzdGVkLmFwcF9sYW5ndWFnZSA9IHRoaXMubGFuZ3VhZ2U7XG4gICAgICB0aGlzLiRpMThuLmxvY2FsZSA9IHRoaXMubGFuZ3VhZ2U7XG4gICAgICBhcGkuZGVmYXVsdHMucGFyYW1zID0ge307XG4gICAgICBhcGkuZGVmYXVsdHMucGFyYW1zW1wibGFuZ3VhZ2VcIl0gPSB0aGlzLiRpMThuLmxvY2FsZTtcblxuICAgICAgdGhpcy5zZXRSVEwoKTtcbiAgICAgIHRoaXMuRGF0YVN0b3JlLmdldEF0dHJpYnV0ZXMoKTtcblxuICAgICAgLy8gQ2xlYXIgbWVudSBkYXRhXG4gICAgICB0aGlzLk1lbnVTdG9yZS5kYXRhX2luZm8gPSBbXTtcbiAgICAgIHRoaXMuTWVudVN0b3JlLmRhdGFfY2F0ZWdvcnkgPSBbXTtcblxuICAgICAgdGhpcy4kcm91dGVyLnJlcGxhY2UoXCIvaG9tZVwiKTtcbiAgICB9LFxuICAgIHJlZnJlc2goZG9uZSkge1xuICAgICAgdGhpcy5EYXRhU3RvcmUuZ2V0QXR0cmlidXRlcyhkb25lKTtcbiAgICB9LFxuICAgIHNldFJUTCgpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLkRhdGFTdG9yZS5sYW5ndWFnZV9kYXRhKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMuRGF0YVN0b3JlLmxhbmd1YWdlX2RhdGEuZGF0YSkuZm9yRWFjaChcbiAgICAgICAgICAoW2tleSwgaXRlbXNdKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5sYW5ndWFnZSA9PSBpdGVtcy5jb2RlKSB7XG4gICAgICAgICAgICAgIGlmIChpdGVtcy5ydGwgPT0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHEubGFuZy5zZXQoeyBydGw6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5EYXRhU3RvcmVQZXJzaXN0ZWQucnRsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRxLmxhbmcuc2V0KHsgcnRsOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLkRhdGFTdG9yZVBlcnNpc3RlZC5ydGwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbIl9jcmVhdGVCbG9jayIsIl9jcmVhdGVWTm9kZSIsIl9ub3JtYWxpemVDbGFzcyIsIl9vcGVuQmxvY2siLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX0ZyYWdtZW50IiwiX2NyZWF0ZVRleHRWTm9kZSIsIl90b0Rpc3BsYXlTdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQXlHQSxNQUFLLFlBQVU7QUFBQSxFQUNiLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFDTixVQUFNLFlBQVk7QUFDbEIsVUFBTSxxQkFBcUI7QUFDM0IsVUFBTSxZQUFZO0FBQ2xCLFdBQU8sRUFBRSxXQUFXLG9CQUFvQjtFQUN6QztBQUFBLEVBQ0QsT0FBTztBQUNMLFdBQU87QUFBQSxNQUNMLFVBQVU7QUFBQSxNQUNWLFNBQVM7QUFBQTtFQUVaO0FBQUEsRUFDRCxVQUFVO0FBQ1IsU0FBSyxXQUFXLEtBQUssbUJBQW1CO0FBQUEsRUFDekM7QUFBQSxFQUNELFNBQVM7QUFBQSxJQUNQLGNBQWM7QUFDWixXQUFLLG1CQUFtQixlQUFlLEtBQUs7QUFDNUMsV0FBSyxNQUFNLFNBQVMsS0FBSztBQUN6QixVQUFJLFNBQVMsU0FBUztBQUN0QixVQUFJLFNBQVMsT0FBTyxjQUFjLEtBQUssTUFBTTtBQUU3QyxXQUFLLE9BQU07QUFDWCxXQUFLLFVBQVU7QUFHZixXQUFLLFVBQVUsWUFBWTtBQUMzQixXQUFLLFVBQVUsZ0JBQWdCO0FBRS9CLFdB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
