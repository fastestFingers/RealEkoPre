import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QSpace } from "./QSpace.f164c087.js";
import { _ as _export_sfc, m as APIinterface, aw as auth, p as openBlock, q as createBlock, t as withCtx, f as createVNode, a7 as normalizeClass, a6 as createTextVNode, Z as toDisplayString, Y as QBtn, a9 as QCardSection, V as createElementBlock, X as renderList, ac as QItem, aF as withModifiers, ad as QItemSection, at as QIcon, af as QRadio, F as Fragment, U as createBaseVNode, a8 as QCard, aB as QDialog } from "./index.61ed5618.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QInnerLoading } from "./QInnerLoading.abe2afe6.js";
import { Q as QItemLabel } from "./QItemLabel.a9365c5b.js";
import { Q as QList } from "./QList.b69a7e5b.js";
import { u as useClientStore } from "./ClientStore.327b1c8d.js";
const _sfc_main = {
  name: "ClientAddress",
  props: ["redirect"],
  data() {
    return {
      show_modal: false,
      loading: false,
      data: [],
      place_id: APIinterface.getStorage("place_id")
    };
  },
  setup() {
    const ClientStore = useClientStore();
    return { ClientStore };
  },
  methods: {
    onShow() {
      if (auth.authenticated()) {
        this.ClientStore.getAddress();
      }
    },
    showModal(data) {
      this.show_modal = data;
    },
    setPlaceID(data) {
      this.place_id = data.place_id;
      APIinterface.setStorage("place_data", data);
      APIinterface.setStorage("place_id", data.place_id);
      this.show_modal = false;
      this.$emit("afterSetplaceid");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QDialog, {
    modelValue: $data.show_modal,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.show_modal = $event),
    position: "bottom",
    onShow: $options.onShow
  }, {
    default: withCtx(() => [
      createVNode(QCard, null, {
        default: withCtx(() => [
          createVNode(QToolbar, {
            class: "text-primary top-toolbar q-pl-md",
            dense: ""
          }, {
            default: withCtx(() => [
              createVNode(QToolbarTitle, {
                class: normalizeClass(["text-weight-bold", {
                  "text-white": _ctx.$q.dark.mode,
                  "text-dark": !_ctx.$q.dark.mode
                }])
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("Address")), 1)
                ]),
                _: 1
              }, 8, ["class"]),
              createVNode(QSpace),
              createVNode(QBtn, {
                onClick: _cache[0] || (_cache[0] = ($event) => $data.show_modal = false),
                color: "white",
                square: "",
                unelevated: "",
                "text-color": "grey",
                icon: "las la-times",
                dense: "",
                "no-caps": "",
                size: "sm",
                class: "border-grey radius8"
              })
            ]),
            _: 1
          }),
          createVNode(QCardSection, {
            style: { "max-height": "50vh" },
            class: "scroll"
          }, {
            default: withCtx(() => [
              createVNode(QInnerLoading, {
                showing: $setup.ClientStore.loading,
                color: "primary"
              }, null, 8, ["showing"]),
              createVNode(QList, null, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList($setup.ClientStore.data, (items) => {
                    return openBlock(), createBlock(QItem, {
                      key: items,
                      onClick: withModifiers(($event) => $options.setPlaceID(items), ["stop"]),
                      tag: "label"
                    }, {
                      default: withCtx(() => [
                        createVNode(QItemSection, {
                          avatar: "",
                          class: "qlist-item-min2"
                        }, {
                          default: withCtx(() => [
                            createVNode(QIcon, {
                              name: "las la-map-marker",
                              color: "grey-5"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(QItemSection, null, {
                          default: withCtx(() => [
                            items.address.address1 ? (openBlock(), createBlock(QItemLabel, {
                              key: 0,
                              lines: "2"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(items.address.address1), 1)
                              ]),
                              _: 2
                            }, 1024)) : (openBlock(), createBlock(QItemLabel, {
                              key: 1,
                              lines: "2"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(items.address.address2), 1)
                              ]),
                              _: 2
                            }, 1024)),
                            createVNode(QItemLabel, {
                              lines: "2",
                              caption: "",
                              class: "font11"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(items.address.formatted_address), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(QItemSection, { side: "" }, {
                          default: withCtx(() => [
                            createVNode(QRadio, {
                              modelValue: $data.place_id,
                              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.place_id = $event),
                              val: items.place_id,
                              color: "secondary"
                            }, null, 8, ["modelValue", "val"])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1032, ["onClick"]);
                  }), 128))
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(QBtn, {
            class: "row items-start full-width border-grey-top",
            unelevated: "",
            "no-caps": "",
            "text-color": "primary",
            size: "lg",
            to: { name: "map", query: { url: this.redirect } }
          }, {
            default: withCtx(() => [
              createVNode(QIcon, {
                name: "o_add",
                color: "primary",
                class: "q-mr-md"
              }),
              createBaseVNode("div", null, toDisplayString(_ctx.$t("Add a new address")), 1)
            ]),
            _: 1
          }, 8, ["to"])
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["modelValue", "onShow"]);
}
var ClientAddress = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "ClientAddress.vue"]]);
export { ClientAddress as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xpZW50QWRkcmVzcy4zN2EzN2U0Yi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQ2xpZW50QWRkcmVzcy52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8cS1kaWFsb2cgdi1tb2RlbD1cInNob3dfbW9kYWxcIiBwb3NpdGlvbj1cImJvdHRvbVwiIEBzaG93PVwib25TaG93XCI+XG4gICAgPHEtY2FyZD5cbiAgICAgIDxxLXRvb2xiYXIgY2xhc3M9XCJ0ZXh0LXByaW1hcnkgdG9wLXRvb2xiYXIgcS1wbC1tZFwiIGRlbnNlPlxuICAgICAgICA8cS10b29sYmFyLXRpdGxlXG4gICAgICAgICAgY2xhc3M9XCJ0ZXh0LXdlaWdodC1ib2xkXCJcbiAgICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAndGV4dC13aGl0ZSc6ICRxLmRhcmsubW9kZSxcbiAgICAgICAgICAgICd0ZXh0LWRhcmsnOiAhJHEuZGFyay5tb2RlLFxuICAgICAgICAgIH1cIlxuICAgICAgICA+XG4gICAgICAgICAge3sgJHQoXCJBZGRyZXNzXCIpIH19XG4gICAgICAgIDwvcS10b29sYmFyLXRpdGxlPlxuICAgICAgICA8cS1zcGFjZT48L3Etc3BhY2U+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIEBjbGljaz1cInNob3dfbW9kYWwgPSAhdHJ1ZVwiXG4gICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgc3F1YXJlXG4gICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgIHRleHQtY29sb3I9XCJncmV5XCJcbiAgICAgICAgICBpY29uPVwibGFzIGxhLXRpbWVzXCJcbiAgICAgICAgICBkZW5zZVxuICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgIGNsYXNzPVwiYm9yZGVyLWdyZXkgcmFkaXVzOFwiXG4gICAgICAgIC8+XG4gICAgICA8L3EtdG9vbGJhcj5cbiAgICAgIDxxLWNhcmQtc2VjdGlvbiBzdHlsZT1cIm1heC1oZWlnaHQ6IDUwdmhcIiBjbGFzcz1cInNjcm9sbFwiPlxuICAgICAgICA8cS1pbm5lci1sb2FkaW5nIDpzaG93aW5nPVwiQ2xpZW50U3RvcmUubG9hZGluZ1wiIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICA8L3EtaW5uZXItbG9hZGluZz5cblxuICAgICAgICA8cS1saXN0PlxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIml0ZW1zIGluIENsaWVudFN0b3JlLmRhdGFcIiA6a2V5PVwiaXRlbXNcIj5cbiAgICAgICAgICAgIDxxLWl0ZW0gQGNsaWNrLnN0b3A9XCJzZXRQbGFjZUlEKGl0ZW1zKVwiIHRhZz1cImxhYmVsXCI+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXIgY2xhc3M9XCJxbGlzdC1pdGVtLW1pbjJcIj5cbiAgICAgICAgICAgICAgICA8cS1pY29uIG5hbWU9XCJsYXMgbGEtbWFwLW1hcmtlclwiIGNvbG9yPVwiZ3JleS01XCIgLz5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgbGluZXM9XCIyXCIgdi1pZj1cIml0ZW1zLmFkZHJlc3MuYWRkcmVzczFcIj57e1xuICAgICAgICAgICAgICAgICAgaXRlbXMuYWRkcmVzcy5hZGRyZXNzMVxuICAgICAgICAgICAgICAgIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBsaW5lcz1cIjJcIiB2LWVsc2U+e3tcbiAgICAgICAgICAgICAgICAgIGl0ZW1zLmFkZHJlc3MuYWRkcmVzczJcbiAgICAgICAgICAgICAgICB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgbGluZXM9XCIyXCIgY2FwdGlvbiBjbGFzcz1cImZvbnQxMVwiPnt7XG4gICAgICAgICAgICAgICAgICBpdGVtcy5hZGRyZXNzLmZvcm1hdHRlZF9hZGRyZXNzXG4gICAgICAgICAgICAgICAgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICAgICAgICAgICAgPHEtcmFkaW9cbiAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwbGFjZV9pZFwiXG4gICAgICAgICAgICAgICAgICA6dmFsPVwiaXRlbXMucGxhY2VfaWRcIlxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3EtbGlzdD5cbiAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICA8cS1idG5cbiAgICAgICAgY2xhc3M9XCJyb3cgaXRlbXMtc3RhcnQgZnVsbC13aWR0aCBib3JkZXItZ3JleS10b3BcIlxuICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgIG5vLWNhcHNcbiAgICAgICAgdGV4dC1jb2xvcj1cInByaW1hcnlcIlxuICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICA6dG89XCJ7IG5hbWU6ICdtYXAnLCBxdWVyeTogeyB1cmw6IHRoaXMucmVkaXJlY3QgfSB9XCJcbiAgICAgID5cbiAgICAgICAgPHEtaWNvbiBuYW1lPVwib19hZGRcIiBjb2xvcj1cInByaW1hcnlcIiBjbGFzcz1cInEtbXItbWRcIiAvPlxuICAgICAgICA8ZGl2Pnt7ICR0KFwiQWRkIGEgbmV3IGFkZHJlc3NcIikgfX08L2Rpdj5cbiAgICAgIDwvcS1idG4+XG4gICAgPC9xLWNhcmQ+XG4gIDwvcS1kaWFsb2c+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEFQSWludGVyZmFjZSBmcm9tIFwic3JjL2FwaS9BUElpbnRlcmZhY2VcIjtcbmltcG9ydCB7IHVzZUNsaWVudFN0b3JlIH0gZnJvbSBcInN0b3Jlcy9DbGllbnRTdG9yZVwiO1xuaW1wb3J0IGF1dGggZnJvbSBcInNyYy9hcGkvYXV0aFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiQ2xpZW50QWRkcmVzc1wiLFxuICBwcm9wczogW1wicmVkaXJlY3RcIl0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNob3dfbW9kYWw6IGZhbHNlLFxuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICBkYXRhOiBbXSxcbiAgICAgIHBsYWNlX2lkOiBBUElpbnRlcmZhY2UuZ2V0U3RvcmFnZShcInBsYWNlX2lkXCIpLFxuICAgIH07XG4gIH0sXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IENsaWVudFN0b3JlID0gdXNlQ2xpZW50U3RvcmUoKTtcbiAgICByZXR1cm4geyBDbGllbnRTdG9yZSB9O1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25TaG93KCkge1xuICAgICAgaWYgKGF1dGguYXV0aGVudGljYXRlZCgpKSB7XG4gICAgICAgIHRoaXMuQ2xpZW50U3RvcmUuZ2V0QWRkcmVzcygpO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2hvd01vZGFsKGRhdGEpIHtcbiAgICAgIHRoaXMuc2hvd19tb2RhbCA9IGRhdGE7XG4gICAgfSxcbiAgICBzZXRQbGFjZUlEKGRhdGEpIHtcbiAgICAgIHRoaXMucGxhY2VfaWQgPSBkYXRhLnBsYWNlX2lkO1xuICAgICAgQVBJaW50ZXJmYWNlLnNldFN0b3JhZ2UoXCJwbGFjZV9kYXRhXCIsIGRhdGEpO1xuICAgICAgQVBJaW50ZXJmYWNlLnNldFN0b3JhZ2UoXCJwbGFjZV9pZFwiLCBkYXRhLnBsYWNlX2lkKTtcbiAgICAgIHRoaXMuc2hvd19tb2RhbCA9IGZhbHNlO1xuICAgICAgdGhpcy4kZW1pdChcImFmdGVyU2V0cGxhY2VpZFwiKTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbIl9jcmVhdGVCbG9jayIsIl9jcmVhdGVWTm9kZSIsIl9vcGVuQmxvY2siLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiLCJfd2l0aE1vZGlmaWVycyIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBK0VBLE1BQUssWUFBVTtBQUFBLEVBQ2IsTUFBTTtBQUFBLEVBQ04sT0FBTyxDQUFDLFVBQVU7QUFBQSxFQUNsQixPQUFPO0FBQ0wsV0FBTztBQUFBLE1BQ0wsWUFBWTtBQUFBLE1BQ1osU0FBUztBQUFBLE1BQ1QsTUFBTSxDQUFFO0FBQUEsTUFDUixVQUFVLGFBQWEsV0FBVyxVQUFVO0FBQUE7RUFFL0M7QUFBQSxFQUNELFFBQVE7QUFDTixVQUFNLGNBQWM7QUFDcEIsV0FBTyxFQUFFO0VBQ1Y7QUFBQSxFQUNELFNBQVM7QUFBQSxJQUNQLFNBQVM7QUFDUCxVQUFJLEtBQUssaUJBQWlCO0FBQ3hCLGFBQUssWUFBWTtNQUNuQjtBQUFBLElBQ0Q7QUFBQSxJQUNELFVBQVUsTUFBTTtBQUNkLFdBQUssYUFBYTtBQUFBLElBQ25CO0FBQUEsSUFDRCxXQUFXLE1BQU07QUFDZixXQUFLLFdBQVcsS0FBSztBQUNyQixtQkFBYSxXQUFXLGNBQWMsSUFBSTtBQUMxQyxtQkFBYSxXQUFXLFlBQVksS0FBSyxRQUFRO0FBQ2pELFdBQUssYUFBYTtBQUNsQixXQUFLLE1BQU0saUJBQWlCO0FBQUEsSUFDN0I7QUFBQSxFQUNGO0FBQ0g7O3NCQTlHRUEsWUFzRVcsU0FBQTtBQUFBLGdCQXRFUSxNQUFVO0FBQUEsaUVBQVYsTUFBVSxhQUFBO0FBQUEsSUFBRSxVQUFTO0FBQUEsSUFBVSxRQUFNLFNBQU07QUFBQTtxQkFDNUQsTUFvRVM7QUFBQSxNQXBFVEMsWUFvRVMsT0FBQSxNQUFBO0FBQUEseUJBbkVQLE1BdUJZO0FBQUEsVUF2QlpBLFlBdUJZLFVBQUE7QUFBQSxZQXZCRCxPQUFNO0FBQUEsWUFBbUMsT0FBQTtBQUFB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
