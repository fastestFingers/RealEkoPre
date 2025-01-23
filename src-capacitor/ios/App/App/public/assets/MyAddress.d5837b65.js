import { _ as _export_sfc, l as defineAsyncComponent, R as useDataStore, m as APIinterface, n as resolveComponent, p as openBlock, q as createBlock, t as withCtx, f as createVNode, Y as QBtn, a6 as createTextVNode, Z as toDisplayString, a7 as normalizeClass, V as createElementBlock, U as createBaseVNode, a8 as QCard, a9 as QCardSection, F as Fragment, X as renderList, u as __vitePreload, a0 as Transition, aa as withDirectives, ab as Ripple, ac as QItem, ad as QItemSection, aA as createCommentVNode } from "./index.61ed5618.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QInnerLoading } from "./QInnerLoading.abe2afe6.js";
import { Q as QItemLabel } from "./QItemLabel.a9365c5b.js";
import { Q as QSlideItem } from "./QSlideItem.7b72eeea.js";
import { Q as QList } from "./QList.b69a7e5b.js";
import { Q as QFooter } from "./QFooter.571ac042.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import { Q as QPullToRefresh } from "./QPullToRefresh.3d10c02d.js";
import { u as useClientStore } from "./ClientStore.327b1c8d.js";
import "./QResizeObserver.d08dce3c.js";
import "./use-render-cache.b9e045af.js";
import "./touch.96e0ae37.js";
import "./selection.50b4cb0c.js";
import "./format.7f7370d3.js";
const _sfc_main = {
  name: "MyAddress",
  components: {
    AddressDetails: defineAsyncComponent(
      () => __vitePreload(() => import("./AddressDetails.8b9f6538.js"), true ? ["assets/AddressDetails.8b9f6538.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QToolbarTitle.03eaf2d6.js","assets/QToolbar.c8fc6962.js","assets/QSpace.f164c087.js","assets/QSelect.311187d6.js","assets/QChip.f183a4f1.js","assets/QItemLabel.a9365c5b.js","assets/QMenu.8e482cd8.js","assets/selection.50b4cb0c.js","assets/rtl.f3ed811c.js","assets/format.7f7370d3.js","assets/QBtnToggle.6ffa195b.js","assets/QBtnGroup.abc2d1c7.js","assets/QFooter.571ac042.js","assets/QResizeObserver.d08dce3c.js","assets/QForm.7ded9d38.js","assets/ClosePopup.9d17b53c.js","assets/MapStore.fcd8f5ff.js"] : void 0)
    )
  },
  data() {
    return {
      data: [],
      loading: false,
      inner_loading: false,
      location_data: []
    };
  },
  setup() {
    const DataStore = useDataStore();
    const ClientStore = useClientStore();
    return { DataStore, ClientStore };
  },
  computed: {
    hasData() {
      if (this.data.length > 0) {
        return true;
      }
      return false;
    }
  },
  created() {
    this.getAddresses();
  },
  methods: {
    deleteAdress(index, data) {
      this.deleteAddress(data.address_uuid, index);
    },
    refresh(done) {
      this.getAddresses(done);
    },
    getAddresses(done) {
      if (APIinterface.empty(done)) {
        this.loading = true;
      }
      APIinterface.getAddresses().then((data) => {
        this.data = data.details.data;
      }).catch((error) => {
        this.data = [];
      }).then((data) => {
        this.loading = false;
        if (!APIinterface.empty(done)) {
          done();
        }
      });
    },
    deleteAddress(addressUuid, index) {
      this.inner_loading = true;
      APIinterface.deleteAddress(addressUuid).then((data) => {
        this.data.splice(index, 1);
        this.ClientStore.getAddress();
      }).catch((error) => {
        APIinterface.notify("negative", error, "error_outline", this.$q);
      }).then((data) => {
        this.inner_loading = false;
      });
    },
    editAddress(data) {
      console.debug(data);
      this.$refs.address_details.location_data = data;
      this.$refs.address_details.showModal();
    },
    afterSaveaddress() {
      console.debug("afterSaveaddress");
      this.getAddresses();
    }
  }
};
const _hoisted_1 = {
  key: 1,
  class: "full-width text-center"
};
const _hoisted_2 = { class: "text-h5 text-weight-bold line-normal" };
const _hoisted_3 = { class: "text-grey font12 no-margin" };
const _hoisted_4 = { class: "text-weight-medium" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AddressDetails = resolveComponent("AddressDetails");
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
                  createTextVNode(toDisplayString(_ctx.$t("Address")), 1)
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
        class: normalizeClass(["q-pl-md q-pr-md", {
          "flex flex-center": !$options.hasData && !$data.loading,
          "row items-stretch ": $options.hasData && !$data.loading,
          "bg-mydark text-white": _ctx.$q.dark.mode,
          "bg-grey-1 text-dark": !_ctx.$q.dark.mode
        }])
      }, {
        default: withCtx(() => [
          $data.loading ? (openBlock(), createBlock(QInnerLoading, {
            key: 0,
            showing: true,
            color: "primary",
            size: "md",
            "label-class": "dark",
            class: "transparent"
          })) : !$options.hasData && !$data.loading ? (openBlock(), createElementBlock("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, toDisplayString(_ctx.$t("You don't have address added yet")), 1),
            createBaseVNode("p", _hoisted_3, toDisplayString(_ctx.$t("Let's change that")) + "! ", 1),
            createVNode(QBtn, {
              flat: "",
              color: "blue",
              "no-caps": "",
              label: _ctx.$t("Add new address"),
              dense: "",
              size: "sm",
              to: {
                path: "/location/map",
                query: { url: "/account/my-address" }
              }
            }, null, 8, ["label"])
          ])) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
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
                        (openBlock(true), createElementBlock(Fragment, null, renderList($data.data, (items, index) => {
                          return openBlock(), createBlock(Transition, {
                            key: items.address_uuid,
                            appear: "",
                            "leave-active-class": "animated fadeOut"
                          }, {
                            default: withCtx(() => [
                              createVNode(QSlideItem, {
                                onAction: ($event) => $options.deleteAdress(index, items),
                                "right-color": _ctx.$q.dark.mode ? "mydark" : "white",
                                class: normalizeClass({
                                  "bg-mydark ": _ctx.$q.dark.mode,
                                  "bg-white ": !_ctx.$q.dark.mode
                                })
                              }, {
                                right: withCtx(() => [
                                  createVNode(QBtn, {
                                    unelevated: "",
                                    round: "",
                                    color: "lightprimary",
                                    "text-color": "primary",
                                    icon: "las la-trash",
                                    dense: ""
                                  })
                                ]),
                                default: withCtx(() => [
                                  withDirectives((openBlock(), createBlock(QItem, {
                                    onClick: ($event) => $options.editAddress(items),
                                    clickable: "",
                                    class: normalizeClass(["radius10 q-mb-sm", {
                                      "border-grey300 ": _ctx.$q.dark.mode,
                                      "border-grey": !_ctx.$q.dark.mode
                                    }])
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(QItemSection, { top: "" }, {
                                        default: withCtx(() => [
                                          createVNode(QItemLabel, { lines: "1" }, {
                                            default: withCtx(() => [
                                              createBaseVNode("span", _hoisted_4, toDisplayString(items.attributes.address_label), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(QItemLabel, {
                                            caption: "",
                                            lines: "1"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(items.address.address1), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(QItemLabel, {
                                            caption: "",
                                            lines: "1"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(items.address.formatted_address), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          items.attributes.location_name ? (openBlock(), createBlock(QItemLabel, {
                                            key: 0,
                                            caption: "",
                                            lines: "1"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(items.attributes.location_name), 1)
                                            ]),
                                            _: 2
                                          }, 1024)) : createCommentVNode("", true)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick", "class"])), [
                                    [Ripple]
                                  ])
                                ]),
                                _: 2
                              }, 1032, ["onAction", "right-color", "class"])
                            ]),
                            _: 2
                          }, 1024);
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
                  loading: $data.loading,
                  to: {
                    path: "/location/map",
                    query: { url: "/account/my-address" }
                  },
                  label: _ctx.$t("Add new address"),
                  unelevated: "",
                  "no-caps": "",
                  color: "primary text-white",
                  class: "full-width text-weight-bold",
                  size: "lg"
                }, null, 8, ["loading", "label"])
              ]),
              _: 1
            })
          ], 64)),
          createVNode(_component_AddressDetails, {
            ref: "address_details",
            maps_config: $setup.DataStore.maps_config,
            onAfterSaveaddress: $options.afterSaveaddress
          }, null, 8, ["maps_config", "onAfterSaveaddress"])
        ]),
        _: 1
      }, 8, ["class"])
    ]),
    _: 1
  }, 8, ["onRefresh"]);
}
var MyAddress = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "MyAddress.vue"]]);
export { MyAddress as default };
//# sourceMappingURL=data:application/json;base64,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QztBQUFBLDhFQUFqQyxNQUFNLFdBQVcsYUFBYTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVakRDLFlBaUJXO0FBQUEsY0FoQlQ7QUFBQSxjQUNBLE9BQU07QUFBQTsrQkFFTixNQVlFO0FBQUEsZ0JBWkZBLFlBWUU7QUFBQSxrQkFYQyxTQUFTLE1BQU87QUFBQSxrQkFDaEIsSUFBSTtBQUFBOztrQkFHSjtBQUFBLGtCQUNBLE9BQU8sS0FBRTtBQUFBLGtCQUNWO0FBQUEsa0JBQ0E7QUFBQSxrQkFDQSxPQUFNO0FBQUEsa0JBQ04sT0FBTTtBQUFBLGtCQUNOLE1BQUs7QUFBQTs7Ozs7VUFJWEEsWUFJRTtBQUFBLFlBSEEsS0FBSTtBQUFBLFlBQ0gsYUFBYSxPQUFTLFVBQUM7QUFBQSxZQUN2QixvQkFBbUIsU0FBZ0I7QUFBQSIsIm5hbWVzIjpbIl9jcmVhdGVCbG9jayIsIl9jcmVhdGVWTm9kZSIsIl9ub3JtYWxpemVDbGFzcyIsIl9vcGVuQmxvY2siLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfRnJhZ21lbnQiLCJfVHJhbnNpdGlvbiJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9BY2NvdW50L015QWRkcmVzcy52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8cS1wdWxsLXRvLXJlZnJlc2ggQHJlZnJlc2g9XCJyZWZyZXNoXCI+XG4gICAgPHEtaGVhZGVyXG4gICAgICByZXZlYWxcbiAgICAgIHJldmVhbC1vZmZzZXQ9XCI1MFwiXG4gICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICdiZy1teWRhcmsgdGV4dC13aGl0ZSc6ICRxLmRhcmsubW9kZSxcbiAgICAgICAgJ2JnLWdyZXktMSB0ZXh0LWRhcmsnOiAhJHEuZGFyay5tb2RlLFxuICAgICAgfVwiXG4gICAgPlxuICAgICAgPHEtdG9vbGJhcj5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgQGNsaWNrPVwiJHJvdXRlci5iYWNrKClcIlxuICAgICAgICAgIGZsYXRcbiAgICAgICAgICByb3VuZFxuICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgaWNvbj1cImxhcyBsYS1hbmdsZS1sZWZ0XCJcbiAgICAgICAgICBjbGFzcz1cInEtbXItc21cIlxuICAgICAgICAgIDpjb2xvcj1cIiRxLmRhcmsubW9kZSA/ICd3aGl0ZScgOiAnZGFyaydcIlxuICAgICAgICAvPlxuICAgICAgICA8cS10b29sYmFyLXRpdGxlIGNsYXNzPVwidGV4dC13ZWlnaHQtYm9sZFwiPnt7XG4gICAgICAgICAgJHQoXCJBZGRyZXNzXCIpXG4gICAgICAgIH19PC9xLXRvb2xiYXItdGl0bGU+XG4gICAgICA8L3EtdG9vbGJhcj5cbiAgICA8L3EtaGVhZGVyPlxuXG4gICAgPHEtcGFnZVxuICAgICAgcGFkZGluZ1xuICAgICAgY2xhc3M9XCJxLXBsLW1kIHEtcHItbWRcIlxuICAgICAgOmNsYXNzPVwie1xuICAgICAgICAnZmxleCBmbGV4LWNlbnRlcic6ICFoYXNEYXRhICYmICFsb2FkaW5nLFxuICAgICAgICAncm93IGl0ZW1zLXN0cmV0Y2ggJzogaGFzRGF0YSAmJiAhbG9hZGluZyxcbiAgICAgICAgJ2JnLW15ZGFyayB0ZXh0LXdoaXRlJzogJHEuZGFyay5tb2RlLFxuICAgICAgICAnYmctZ3JleS0xIHRleHQtZGFyayc6ICEkcS5kYXJrLm1vZGUsXG4gICAgICB9XCJcbiAgICA+XG4gICAgICA8dGVtcGxhdGUgdi1pZj1cImxvYWRpbmdcIj5cbiAgICAgICAgPHEtaW5uZXItbG9hZGluZ1xuICAgICAgICAgIDpzaG93aW5nPVwidHJ1ZVwiXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgIGxhYmVsLWNsYXNzPVwiZGFya1wiXG4gICAgICAgICAgY2xhc3M9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgIC8+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPHRlbXBsYXRlIHYtZWxzZS1pZj1cIiFoYXNEYXRhICYmICFsb2FkaW5nXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmdWxsLXdpZHRoIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDUgdGV4dC13ZWlnaHQtYm9sZCBsaW5lLW5vcm1hbFwiPlxuICAgICAgICAgICAge3sgJHQoXCJZb3UgZG9uJ3QgaGF2ZSBhZGRyZXNzIGFkZGVkIHlldFwiKSB9fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1ncmV5IGZvbnQxMiBuby1tYXJnaW5cIj5cbiAgICAgICAgICAgIHt7ICR0KFwiTGV0J3MgY2hhbmdlIHRoYXRcIikgfX0hXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgY29sb3I9XCJibHVlXCJcbiAgICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdBZGQgbmV3IGFkZHJlc3MnKVwiXG4gICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgIDp0bz1cIntcbiAgICAgICAgICAgICAgcGF0aDogJy9sb2NhdGlvbi9tYXAnLFxuICAgICAgICAgICAgICBxdWVyeTogeyB1cmw6ICcvYWNjb3VudC9teS1hZGRyZXNzJyB9LFxuICAgICAgICAgICAgfVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICA8cS1jYXJkXG4gICAgICAgICAgZmxhdFxuICAgICAgICAgIGNsYXNzPVwicmFkaXVzOCBjb2wtMTJcIlxuICAgICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICdiZy1teWRhcmsgJzogJHEuZGFyay5tb2RlLFxuICAgICAgICAgICAgJ2JnLXdoaXRlICc6ICEkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgfVwiXG4gICAgICAgID5cbiAgICAgICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICA8cS1saXN0PlxuICAgICAgICAgICAgICA8dHJhbnNpdGlvblxuICAgICAgICAgICAgICAgIHYtZm9yPVwiKGl0ZW1zLCBpbmRleCkgaW4gZGF0YVwiXG4gICAgICAgICAgICAgICAgOmtleT1cIml0ZW1zLmFkZHJlc3NfdXVpZFwiXG4gICAgICAgICAgICAgICAgYXBwZWFyXG4gICAgICAgICAgICAgICAgbGVhdmUtYWN0aXZlLWNsYXNzPVwiYW5pbWF0ZWQgZmFkZU91dFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cS1zbGlkZS1pdGVtXG4gICAgICAgICAgICAgICAgICBAYWN0aW9uPVwiZGVsZXRlQWRyZXNzKGluZGV4LCBpdGVtcylcIlxuICAgICAgICAgICAgICAgICAgOnJpZ2h0LWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ215ZGFyaycgOiAnd2hpdGUnXCJcbiAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICAgICAgICAgJ2JnLW15ZGFyayAnOiAkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgICAgICAgICAgICdiZy13aGl0ZSAnOiAhJHEuZGFyay5tb2RlLFxuICAgICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpyaWdodD5cbiAgICAgICAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgICAgICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJsaWdodHByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgIHRleHQtY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICBpY29uPVwibGFzIGxhLXRyYXNoXCJcbiAgICAgICAgICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZWRpdEFkZHJlc3MoaXRlbXMpXCJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgICAgIHYtcmlwcGxlXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicmFkaXVzMTAgcS1tYi1zbVwiXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICAgICAgICAgICAnYm9yZGVyLWdyZXkzMDAgJzogJHEuZGFyay5tb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICdib3JkZXItZ3JleSc6ICEkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gdG9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgbGluZXM9XCIxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtd2VpZ2h0LW1lZGl1bVwiPnt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zLmF0dHJpYnV0ZXMuYWRkcmVzc19sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uIGxpbmVzPVwiMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgaXRlbXMuYWRkcmVzcy5hZGRyZXNzMSB9fVxuICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbiBsaW5lcz1cIjFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IGl0ZW1zLmFkZHJlc3MuZm9ybWF0dGVkX2FkZHJlc3MgfX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lcz1cIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIml0ZW1zLmF0dHJpYnV0ZXMubG9jYXRpb25fbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgaXRlbXMuYXR0cmlidXRlcy5sb2NhdGlvbl9uYW1lIH19XG4gICAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICA8L3Etc2xpZGUtaXRlbT5cbiAgICAgICAgICAgICAgPC90cmFuc2l0aW9uPlxuICAgICAgICAgICAgPC9xLWxpc3Q+XG4gICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgPC9xLWNhcmQ+XG5cbiAgICAgICAgPHEtZm9vdGVyXG4gICAgICAgICAgcmV2ZWFsXG4gICAgICAgICAgY2xhc3M9XCJiZy1ncmV5LTEgcS1wbC1tZCBxLXByLW1kIHEtcGItc20gcS1wdC1zbSB0ZXh0LWRhcmtcIlxuICAgICAgICA+XG4gICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICA6bG9hZGluZz1cImxvYWRpbmdcIlxuICAgICAgICAgICAgOnRvPVwie1xuICAgICAgICAgICAgICBwYXRoOiAnL2xvY2F0aW9uL21hcCcsXG4gICAgICAgICAgICAgIHF1ZXJ5OiB7IHVybDogJy9hY2NvdW50L215LWFkZHJlc3MnIH0sXG4gICAgICAgICAgICB9XCJcbiAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdBZGQgbmV3IGFkZHJlc3MnKVwiXG4gICAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnkgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICBjbGFzcz1cImZ1bGwtd2lkdGggdGV4dC13ZWlnaHQtYm9sZFwiXG4gICAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvcS1mb290ZXI+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPEFkZHJlc3NEZXRhaWxzXG4gICAgICAgIHJlZj1cImFkZHJlc3NfZGV0YWlsc1wiXG4gICAgICAgIDptYXBzX2NvbmZpZz1cIkRhdGFTdG9yZS5tYXBzX2NvbmZpZ1wiXG4gICAgICAgIEBhZnRlci1zYXZlYWRkcmVzcz1cImFmdGVyU2F2ZWFkZHJlc3NcIlxuICAgICAgLz5cbiAgICA8L3EtcGFnZT5cbiAgPC9xLXB1bGwtdG8tcmVmcmVzaD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBkZWZpbmVBc3luY0NvbXBvbmVudCB9IGZyb20gXCJ2dWVcIjtcbmltcG9ydCBBUElpbnRlcmZhY2UgZnJvbSBcInNyYy9hcGkvQVBJaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyB1c2VEYXRhU3RvcmUgfSBmcm9tIFwic3RvcmVzL0RhdGFTdG9yZVwiO1xuaW1wb3J0IHsgdXNlQ2xpZW50U3RvcmUgfSBmcm9tIFwic3RvcmVzL0NsaWVudFN0b3JlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJNeUFkZHJlc3NcIixcbiAgY29tcG9uZW50czoge1xuICAgIEFkZHJlc3NEZXRhaWxzOiBkZWZpbmVBc3luY0NvbXBvbmVudCgoKSA9PlxuICAgICAgaW1wb3J0KFwiY29tcG9uZW50cy9BZGRyZXNzRGV0YWlscy52dWVcIilcbiAgICApLFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiBbXSxcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgaW5uZXJfbG9hZGluZzogZmFsc2UsXG4gICAgICBsb2NhdGlvbl9kYXRhOiBbXSxcbiAgICB9O1xuICB9LFxuICBzZXR1cCgpIHtcbiAgICBjb25zdCBEYXRhU3RvcmUgPSB1c2VEYXRhU3RvcmUoKTtcbiAgICBjb25zdCBDbGllbnRTdG9yZSA9IHVzZUNsaWVudFN0b3JlKCk7XG4gICAgcmV0dXJuIHsgRGF0YVN0b3JlLCBDbGllbnRTdG9yZSB9O1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGhhc0RhdGEoKSB7XG4gICAgICBpZiAodGhpcy5kYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLmdldEFkZHJlc3NlcygpO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZGVsZXRlQWRyZXNzKGluZGV4LCBkYXRhKSB7XG4gICAgICB0aGlzLmRlbGV0ZUFkZHJlc3MoZGF0YS5hZGRyZXNzX3V1aWQsIGluZGV4KTtcbiAgICB9LFxuICAgIHJlZnJlc2goZG9uZSkge1xuICAgICAgdGhpcy5nZXRBZGRyZXNzZXMoZG9uZSk7XG4gICAgfSxcbiAgICBnZXRBZGRyZXNzZXMoZG9uZSkge1xuICAgICAgaWYgKEFQSWludGVyZmFjZS5lbXB0eShkb25lKSkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBBUElpbnRlcmZhY2UuZ2V0QWRkcmVzc2VzKClcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmRhdGEgPSBkYXRhLmRldGFpbHMuZGF0YTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIGlmICghQVBJaW50ZXJmYWNlLmVtcHR5KGRvbmUpKSB7XG4gICAgICAgICAgICBkb25lKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGRlbGV0ZUFkZHJlc3MoYWRkcmVzc1V1aWQsIGluZGV4KSB7XG4gICAgICB0aGlzLmlubmVyX2xvYWRpbmcgPSB0cnVlO1xuICAgICAgQVBJaW50ZXJmYWNlLmRlbGV0ZUFkZHJlc3MoYWRkcmVzc1V1aWQpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5kYXRhLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgdGhpcy5DbGllbnRTdG9yZS5nZXRBZGRyZXNzKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBBUElpbnRlcmZhY2Uubm90aWZ5KFwibmVnYXRpdmVcIiwgZXJyb3IsIFwiZXJyb3Jfb3V0bGluZVwiLCB0aGlzLiRxKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmlubmVyX2xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBlZGl0QWRkcmVzcyhkYXRhKSB7XG4gICAgICBjb25zb2xlLmRlYnVnKGRhdGEpO1xuICAgICAgdGhpcy4kcmVmcy5hZGRyZXNzX2RldGFpbHMubG9jYXRpb25fZGF0YSA9IGRhdGE7XG4gICAgICB0aGlzLiRyZWZzLmFkZHJlc3NfZGV0YWlscy5zaG93TW9kYWwoKTtcbiAgICB9LFxuICAgIGFmdGVyU2F2ZWFkZHJlc3MoKSB7XG4gICAgICBjb25zb2xlLmRlYnVnKFwiYWZ0ZXJTYXZlYWRkcmVzc1wiKTtcbiAgICAgIHRoaXMuZ2V0QWRkcmVzc2VzKCk7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiJdLCJmaWxlIjoiYXNzZXRzL015QWRkcmVzcy5kNTgzN2I2NS5qcyJ9
