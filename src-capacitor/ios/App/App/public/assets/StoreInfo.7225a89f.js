import { _ as _export_sfc, l as defineAsyncComponent, n as resolveComponent, p as openBlock, V as createElementBlock, f as createVNode, t as withCtx, a7 as normalizeClass, F as Fragment, Y as QBtn, a6 as createTextVNode, Z as toDisplayString, U as createBaseVNode, b2 as QSeparator, q as createBlock, a8 as QCard, a9 as QCardSection, X as renderList, aA as createCommentVNode, u as __vitePreload, ac as QItem, ad as QItemSection } from "./index.61ed5618.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QChip } from "./QChip.f183a4f1.js";
import { Q as QList } from "./QList.b69a7e5b.js";
import { Q as QExpansionItem } from "./QExpansionItem.6e46dae0.js";
import { Q as QImg } from "./QImg.6c27044c.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import { u as useMenuStore } from "./MenuStore.f3a21da3.js";
import "./QResizeObserver.d08dce3c.js";
import "./QItemLabel.a9365c5b.js";
import "./QSlideTransition.edc8ce9e.js";
const _sfc_main = {
  name: "Menu/StoreInfo",
  components: {
    ImagePreview: defineAsyncComponent(
      () => __vitePreload(() => import("./ImagePreview.c7742ddf.js"), true ? ["assets/ImagePreview.c7742ddf.js","assets/QToolbarTitle.03eaf2d6.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QSpace.f164c087.js","assets/QToolbar.c8fc6962.js","assets/use-panel.225d73f4.js","assets/touch.96e0ae37.js","assets/selection.50b4cb0c.js","assets/use-render-cache.b9e045af.js"] : void 0)
    )
  },
  data() {
    return {
      slug: ""
    };
  },
  setup() {
    const MenuStore = useMenuStore();
    return { MenuStore };
  },
  computed: {
    hasGallery() {
      if (Object.keys(this.MenuStore.data_gallery).length > 0) {
        if (this.MenuStore.data_gallery[this.slug]) {
          return true;
        }
      }
      return false;
    },
    countGallery() {
      if (Object.keys(this.MenuStore.data_gallery).length > 0) {
        if (this.MenuStore.data_gallery[this.slug]) {
          let total = Object.keys(
            this.MenuStore.data_gallery[this.slug]
          ).length;
          return total - 4;
        }
      }
      return 0;
    },
    getGallery() {
      if (Object.keys(this.MenuStore.gallery_images).length > 0) {
        if (this.MenuStore.gallery_images[this.slug]) {
          return this.MenuStore.gallery_images[this.slug];
        }
      }
      return false;
    }
  },
  created() {
    this.slug = this.$route.query.slug;
    if (Object.keys(this.MenuStore.data_info).length <= 0) {
      this.MenuStore.getMerchantInfo(this.slug);
    } else {
      if (!this.MenuStore.data_info[this.slug]) {
        this.MenuStore.getMerchantInfo(this.slug);
      }
    }
  }
};
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" loading ");
const _hoisted_2 = { class: "text-grey" };
const _hoisted_3 = { class: "font13 text-grey ellipsis-2-lines" };
const _hoisted_4 = { class: "text-grey" };
const _hoisted_5 = { class: "row items-center q-gutter-sm" };
const _hoisted_6 = { class: "col" };
const _hoisted_7 = { class: "font15 text-weight-bold no-margin line-normal" };
const _hoisted_8 = { class: "text-grey font12 line-normal" };
const _hoisted_9 = { class: "col-4 text-center" };
const _hoisted_10 = { class: "text-grey" };
const _hoisted_11 = { class: "text-grey" };
const _hoisted_12 = {
  key: 0,
  class: "q-gutter-sm row items-start"
};
const _hoisted_13 = {
  key: 0,
  style: { "height": "80px", "width": "80px" },
  class: "relative-position"
};
const _hoisted_14 = { class: "text-center text-white z-top text-weight-bold font16" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ImagePreview = resolveComponent("ImagePreview");
  return openBlock(), createElementBlock(Fragment, null, [
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
                createTextVNode(toDisplayString(_ctx.$t("Info")), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["class"]),
    createVNode(QPage, { class: "q-pl-md q-pr-md" }, {
      default: withCtx(() => [
        $setup.MenuStore.loadin_info ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          _hoisted_1
        ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          $setup.MenuStore.data_info[$data.slug] ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createVNode(QChip, {
              dense: "",
              color: "transparent",
              "text-color": "grey-4",
              class: "q-pa-none",
              icon: "las la-map-marker-alt"
            }, {
              default: withCtx(() => [
                createBaseVNode("span", _hoisted_2, toDisplayString(_ctx.$t("Few words about")) + " " + toDisplayString($setup.MenuStore.data_info[$data.slug].restaurant_name), 1)
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_3, toDisplayString($setup.MenuStore.data_info[$data.slug].short_description), 1),
            createVNode(QSeparator, { class: "q-mb-sm q-mt-sm" }),
            createVNode(QChip, {
              dense: "",
              color: "transparent",
              "text-color": "grey-4",
              class: "q-pa-none",
              icon: "las la-map-marker-alt"
            }, {
              default: withCtx(() => [
                createBaseVNode("span", _hoisted_4, toDisplayString(_ctx.$t("Address")), 1)
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_5, [
              createBaseVNode("div", _hoisted_6, [
                createBaseVNode("div", _hoisted_7, toDisplayString($setup.MenuStore.data_info[$data.slug].restaurant_name), 1),
                createBaseVNode("div", _hoisted_8, toDisplayString($setup.MenuStore.data_info[$data.slug].address), 1)
              ]),
              createBaseVNode("div", _hoisted_9, [
                this.$q.capacitor ? (openBlock(), createBlock(QBtn, {
                  key: 0,
                  flat: "",
                  color: _ctx.$q.dark.mode ? "secondary" : "blue",
                  "no-caps": "",
                  label: _ctx.$t("Get directions"),
                  dense: "",
                  size: "md",
                  href: $setup.MenuStore.data_info[$data.slug].map_direction,
                  target: "_blank"
                }, null, 8, ["color", "label", "href"])) : (openBlock(), createBlock(QBtn, {
                  key: 1,
                  flat: "",
                  color: _ctx.$q.dark.mode ? "secondary" : "blue",
                  "no-caps": "",
                  label: _ctx.$t("Get directions"),
                  dense: "",
                  size: "md",
                  href: $setup.MenuStore.data_info[$data.slug].map_direction,
                  target: "_blank"
                }, null, 8, ["color", "label", "href"]))
              ])
            ]),
            createVNode(QSeparator, { class: "q-mb-sm q-mt-sm" }),
            createVNode(QChip, {
              dense: "",
              color: "transparent",
              "text-color": "grey-4",
              class: "q-pa-none",
              icon: "las la-clock"
            }, {
              default: withCtx(() => [
                createBaseVNode("span", _hoisted_10, toDisplayString(_ctx.$t("Opening hours")), 1)
              ]),
              _: 1
            }),
            $setup.MenuStore.open_at[$data.slug] ? (openBlock(), createBlock(QList, { key: 0 }, {
              default: withCtx(() => [
                createVNode(QExpansionItem, {
                  "expand-separator": "",
                  label: _ctx.$t("Today"),
                  caption: $setup.MenuStore.open_at[$data.slug]
                }, {
                  default: withCtx(() => [
                    createVNode(QCard, {
                      class: normalizeClass({
                        "bg-mydark text-white": _ctx.$q.dark.mode,
                        "bg-white text-black": !_ctx.$q.dark.mode
                      })
                    }, {
                      default: withCtx(() => [
                        createVNode(QCardSection, null, {
                          default: withCtx(() => [
                            createVNode(QList, {
                              dense: "",
                              class: "font13"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createElementBlock(Fragment, null, renderList($setup.MenuStore.opening_hours[$data.slug], (items) => {
                                  return openBlock(), createBlock(QItem, {
                                    key: items,
                                    style: { "padding": "0px !important", "min-height": "0" }
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(QItemSection, { class: "text-capitalize" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(items.value), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(QItemSection, { caption: "" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(items.start_time) + " - " + toDisplayString(items.end_time), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
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
                    }, 8, ["class"])
                  ]),
                  _: 1
                }, 8, ["label", "caption"])
              ]),
              _: 1
            })) : createCommentVNode("", true),
            createVNode(QSeparator, { class: "q-mb-sm q-mt-sm" }),
            $options.hasGallery ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createVNode(QChip, {
                dense: "",
                color: "transparent",
                "text-color": "grey-4",
                class: "q-pa-none",
                icon: "las la-photo-video"
              }, {
                default: withCtx(() => [
                  createBaseVNode("span", _hoisted_11, toDisplayString(_ctx.$t("Gallery")), 1)
                ]),
                _: 1
              }),
              $setup.MenuStore.data_gallery[$data.slug] ? (openBlock(), createElementBlock("div", _hoisted_12, [
                (openBlock(true), createElementBlock(Fragment, null, renderList($setup.MenuStore.data_gallery[$data.slug], (items, index) => {
                  return openBlock(), createElementBlock(Fragment, { key: items }, [
                    index <= 4 ? (openBlock(), createBlock(QImg, {
                      key: 0,
                      src: items.thumbnail,
                      "spinner-color": "secondary",
                      "spinner-size": "sm",
                      style: { "height": "80px", "max-width": "80px" },
                      "placeholder-src": "placeholder.png",
                      class: "radius8 cursor-pointer",
                      onClick: _cache[1] || (_cache[1] = ($event) => this.$refs.imagePreview.modal = !this.$refs.imagePreview.modal)
                    }, null, 8, ["src"])) : createCommentVNode("", true)
                  ], 64);
                }), 128)),
                $options.countGallery > 0 ? (openBlock(), createElementBlock("div", _hoisted_13, [
                  createBaseVNode("div", {
                    class: "dimmed absolute-top fit z-top flex flex-center cursor-pointer",
                    onClick: _cache[2] || (_cache[2] = ($event) => this.$refs.imagePreview.modal = !this.$refs.imagePreview.modal)
                  }, [
                    createBaseVNode("div", _hoisted_14, " +" + toDisplayString($options.countGallery), 1)
                  ]),
                  $setup.MenuStore.data_gallery[$data.slug][5] ? (openBlock(), createBlock(QImg, {
                    key: 0,
                    src: $setup.MenuStore.data_gallery[$data.slug][5].thumbnail,
                    "spinner-color": "secondary",
                    "spinner-size": "sm",
                    style: { "height": "80px", "max-width": "80px" },
                    "placeholder-src": "placeholder.png",
                    class: "radius8"
                  }, null, 8, ["src"])) : createCommentVNode("", true)
                ])) : createCommentVNode("", true)
              ])) : createCommentVNode("", true)
            ], 64)) : createCommentVNode("", true)
          ], 64)) : createCommentVNode("", true)
        ], 64)),
        createVNode(_component_ImagePreview, {
          ref: "imagePreview",
          gallery: $options.getGallery,
          title: "Gallery"
        }, null, 8, ["gallery"])
      ]),
      _: 1
    })
  ], 64);
}
var StoreInfo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "StoreInfo.vue"]]);
export { StoreInfo as default };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQXlOQSxNQUFLLFlBQVU7QUFBQSxFQUNiLE1BQU07QUFBQSxFQUNOLFlBQVk7QUFBQSxJQUNWLGNBQWM7QUFBQSxNQUFxQixNQUNqQywyQkFBTywrQkFBNkI7QUFBQSxJQUNyQztBQUFBLEVBQ0Y7QUFBQSxFQUNELE9BQU87QUFDTCxXQUFPO0FBQUEsTUFDTCxNQUFNO0FBQUE7RUFFVDtBQUFBLEVBQ0QsUUFBUTtBQUNOLFVBQU0sWUFBWTtBQUNsQixXQUFPLEVBQUU7RUFDVjtBQUFBLEVBQ0QsVUFBVTtBQUFBLElBQ1IsYUFBYTtBQUNYLFVBQUksT0FBTyxLQUFLLEtBQUssVUFBVSxZQUFZLEVBQUUsU0FBUyxHQUFHO0FBQ3ZELFlBQUksS0FBSyxVQUFVLGFBQWEsS0FBSyxPQUFPO0FBQzFDLGlCQUFPO0FBQUEsUUFDVDtBQUFBLE1BQ0Y7QUFDQSxhQUFPO0FBQUEsSUFDUjtBQUFBLElBQ0QsZUFBZTtBQUNiLFVBQUksT0FBTyxLQUFLLEtBQUssVUFBVSxZQUFZLEVBQUUsU0FBUyxHQUFHO0FBQ3ZELFlBQUksS0FBSyxVQUFVLGFBQWEsS0FBSyxPQUFPO0FBQzFDLGNBQUksUUFBUSxPQUFPO0FBQUEsWUFDakIsS0FBSyxVQUFVLGFBQWEsS0FBSztBQUFBLFVBQ2xDLEVBQUM7QUFDRixpQkFBTyxRQUFRO0FBQUEsUUFDakI7QUFBQSxNQUNGO0FBQ0EsYUFBTztBQUFBLElBQ1I7QUFBQSxJQUNELGFBQWE7QUFDWCxVQUFJLE9BQU8sS0FBSyxLQUFLLFVBQVUsY0FBYyxFQUFFLFNBQVMsR0FBRztBQUN6RCxZQUFJLEtBQUssVUFBVSxlQUFlLEtBQUssT0FBTztBQUM1QyxpQkFBTyxLQUFLLFVBQVUsZUFBZSxLQUFLO0FBQUEsUUFDNUM7QUFBQSxNQUNGO0FBQ0EsYUFBTztBQUFBLElBQ1I7QUFBQSxFQUNGO0FBQUEsRUFDRCxVQUFVO0FBQ1IsU0FBSyxPQUFPLEtBQUssT0FBTyxNQUFNO0FBQzlCLFFBQUksT0FBTyxLQUFLLEtBQUssVUFBVSxTQUFTLEVBQUUsVUFBVSxHQUFHO0FBQ3JELFdBQUssVUFBVSxnQkFBZ0IsS0FBSyxJQUFJO0FBQUEsV0FDbkM7QUFDTCxVQUFJLENBQUMsS0FBSyxVQUFVLFVBQVUsS0FBSyxPQUFPO0FBQ3hDLGFBQUssVUFBVSxnQkFBZ0IsS0FBSyxJQUFJO0FBQUEsTUFDMUM7QUFBQSxJQUNGO0FBQUEsRUFDRDtBQUNIO21EQXZQMkMsV0FBUztBQVdwQyw0QkFBTSxZQUFXO0FBTXBCLDRCQUFNLG9DQUFtQztBQWF0Qyw0QkFBTSxZQUFXO0FBR3BCLDRCQUFNLCtCQUE4QjtBQUNsQyw0QkFBTSxNQUFLO0FBQ1QsNEJBQU0sZ0RBQStDO0FBR3JELDRCQUFNLCtCQUE4QjtBQUl0Qyw0QkFBTSxvQkFBbUI7QUFxQ3hCLDZCQUFNLFlBQVc7QUE2Q2YsNkJBQU0sWUFBVzs7O0VBS3ZCLE9BQU07Ozs7RUF1QkosU0FBaUM7QUFBQSxFQUNqQyxPQUFNOztBQVNGLDZCQUFNLHVEQUFzRDs7OztJQTFMNUVBLFlBc0JXO0FBQUEsTUFyQlQ7QUFBQSxNQUNBLGlCQUFjO0FBQUEsTUFDYixPQUFLQztBQUFBLGdDQUFrQyxLQUFFLEdBQUMsS0FBSztBQUFBLGdDQUFvQyxLQUFFLEdBQUMsS0FBSztBQUFBOzt1QkFLNUYsTUFhWTtBQUFBLFFBYlpELFlBYVk7QUFBQSwyQkFaVixNQVFFO0FBQUEsWUFSRkEsWUFRRTtBQUFBLGNBUEMsU0FBSyxzQ0FBRSxLQUFPLFFBQUMsS0FBSTtBQUFBLGNBQ3BCO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxjQUNBLE1BQUs7QUFBQSxjQUNMLE9BQU07QUFBQSxjQUNMLE9BQU8sUUFBRyxLQUFLLE9BQUk7QUFBQTtZQUV0QkEsWUFFb0IsMkNBRnFCO0FBQUEsK0JBQUMsTUFFeEM7QUFBQSxnREFEQSxLQUFFO0FBQUE7Ozs7Ozs7OztJQUlSQSxZQTBMUyxrQ0ExTHNCO0FBQUEsdUJBQzdCLE1BQTJEO0FBQUEsUUFBM0MsaUJBQVUsNEJBQTFCRSxtQkFBMkRDO0FBQUE7Z0NBRTNERCxtQkFtTFdDO0FBQUEsVUFsTE8sT0FBUyxVQUFDLFVBQVUsTUFBSSxzQkFBeENELG1CQWlMV0M7QUFBQSxZQWhMVEgsWUFXUztBQUFBLGNBVlA7QUFBQSxjQUNBLE9BQU07QUFBQSxjQUNOLGNBQVc7QUFBQSxjQUNYLE9BQU07QUFBQSxjQUNOLE1BQUs7QUFBQTsrQkFFTCxNQUdDO0FBQUEsZ0JBSERJLGdCQUdDLFFBSEQsWUFDTUMsd0JBQXdCLDRCQUN6QkEsaUNBQVUsVUFBVSxZQUFNLGVBQWU7QUFBQTs7O1lBSWhERCxnQkFFTSxPQUZOLFlBQ0tDLGlDQUFVLFVBQVUsTUFBSSxNQUFFLGlCQUFpQjtBQUFBLFlBR2hETCxZQUFtRCx1Q0FBZjtBQUFBLFlBRXBDQSxZQVFTO0FBQUEsY0FQUDtBQUFBLGNBQ0EsT0FBTTtBQUFBLGNBQ04sY0FBVztBQUFBLGNBQ1gsT0FBTTtBQUFBLGNBQ04sTUFBSztBQUFBOytCQUVMLE1BQWtEO0FBQUEsZ0JBQWxESSxnQkFBa0QsUUFBbEQsWUFBa0RDLGdCQUF2QixLQUFFO0FBQUE7OztZQUcvQkQsZ0JBbUNNLE9BbkNOLFlBbUNNO0FBQUEsY0FsQ0pBLGdCQU9NLE9BUE4sWUFPTTtBQUFBLGdCQU5KQSxnQkFFTSxPQUZOLFlBQ0tDLGlDQUFVLFVBQVUsTUFBSSxNQUFFLGVBQWU7QUFBQSxnQkFFOUNELGdCQUVNLE9BRk4sWUFDS0MsaUNBQVUsVUFBVSxNQUFJLE1BQUUsT0FBTztBQUFBO2NBR3hDRCxnQkF5Qk0sT0F6Qk4sWUF5Qk07QUFBQSxnQkF4QmlCLFFBQUcsMEJBQ3RCRSxZQVNFO0FBQUE7a0JBUkE7QUFBQSxrQkFDQyxPQUFPLFFBQUcsS0FBSyxPQUFJO0FBQUEsa0JBQ3BCO0FBQUEsa0JBQ0MsT0FBTyxLQUFFO0FBQUEsa0JBQ1Y7QUFBQSxrQkFDQSxNQUFLO0FBQUEsa0JBQ0osTUFBTSxPQUFTLFVBQUMsVUFBVSxZQUFNO0FBQUEsa0JBQ2pDLFFBQU87QUFBQSx5RUFJVEEsWUFTRTtBQUFBO2tCQVJBO0FBQUEsa0JBQ0MsT0FBTyxRQUFHLEtBQUssT0FBSTtBQUFBLGtCQUNwQjtBQUFBLGtCQUNDLE9BQU8sS0FBRTtBQUFBLGtCQUNWO0FBQUEsa0JBQ0EsTUFBSztBQUFBLGtCQUNKLE1BQU0sT0FBUyxVQUFDLFVBQVUsWUFBTTtBQUFBLGtCQUNqQyxRQUFPO0FBQUE7OztZQU1mTixZQUFtRCx1Q0FBZjtBQUFBLFlBRXBDQSxZQVFTO0FBQUEsY0FQUDtBQUFBLGNBQ0EsT0FBTTtBQUFBLGNBQ04sY0FBVztBQUFBLGNBQ1gsT0FBTTtBQUFBLGNBQ04sTUFBSztBQUFBOytCQUVMLE1BQXdEO0FBQUEsZ0JBQXhESSxnQkFBd0QsUUFBeEQsYUFBd0RDLGdCQUE3QixLQUFFO0FBQUE7OztZQUdqQixPQUFTLFVBQUMsUUFBUSxNQUFJLHNCQUFwQ0MsWUE4QlM7QUFBQSwrQkE3QlAsTUE0Qm1CO0FBQUEsZ0JBNUJuQk4sWUE0Qm1CO0FBQUEsa0JBM0JqQjtBQUFBLGtCQUNDLE9BQU8sS0FBRTtBQUFBLGtCQUNULFNBQVMsaUJBQVUsUUFBUSxNQUFJO0FBQUE7bUNBRWhDLE1Bc0JTO0FBQUEsb0JBdEJUQSxZQXNCUztBQUFBLHNCQXJCTixPQUFLQztBQUFBLGdEQUE0QyxLQUFFLEdBQUMsS0FBSztBQUFBLGdEQUE4QyxLQUFFLEdBQUMsS0FBSztBQUFBOzt1Q0FLaEgsTUFlaUI7QUFBQSx3QkFmakJELFlBZWlCO0FBQUEsMkNBZGYsTUFhUztBQUFBLDRCQWJUQSxZQWFTO0FBQUEsOEJBYkQ7QUFBQSw4QkFBTSxPQUFNO0FBQUE7K0NBRWhCLE1BQThDO0FBQUEsaUNBRGhETyxvQ0FXU0osMkJBVlMsT0FBUyxVQUFDLGNBQWMsY0FBakMsVUFBSztzREFEZEcsWUFXUztBQUFBLG9DQVROLEtBQUs7QUFBQSxvQ0FDTixTQUE4QztBQUFBO3FEQUU5QyxNQUVtQjtBQUFBLHNDQUZuQk4sWUFFbUIseUNBRm9CO0FBQUEseURBQUMsTUFFdEM7QUFBQSwwQ0FEQVEsc0NBQU0sS0FBSztBQUFBOzs7c0NBRWJSLFlBRWlCLCtCQUZNO0FBQUEseURBQ3BCLE1BQXNCO0FBQUEsMENBQW5CUSxzQ0FBTSxVQUFVLElBQUcsUUFBTUgsc0JBQU0sUUFBUTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBU3pETCxZQUFtRCx1Q0FBZjtBQUFBLFlBRXBCLFNBQVUsMkJBQTFCRSxtQkErRFdDO0FBQUEsY0E5RFRILFlBUVM7QUFBQSxnQkFQUDtBQUFBLGdCQUNBLE9BQU07QUFBQSxnQkFDTixjQUFXO0FBQUEsZ0JBQ1gsT0FBTTtBQUFBLGdCQUNOLE1BQUs7QUFBQTtpQ0FFTCxNQUFrRDtBQUFBLGtCQUFsREksZ0JBQWtELFFBQWxELGFBQWtEQyxnQkFBdkIsS0FBRTtBQUFBOzs7Y0FJdkIsT0FBUyxVQUFDLGFBQWEsTUFBSSxTQURuQ0UsZ0NBbURNLE9BbkROLGFBbURNO0FBQUEsa0NBL0NKTCxtQkFrQldDLDJCQWpCZ0IsaUJBQVUsYUFBYSxNQUFJLFFBQTVDLE9BQU8sVUFBSzswRUFDZCxTQUFLO0FBQUEsb0JBRUssU0FBSyxrQkFDbkJHLFlBV0U7QUFBQTtzQkFWQyxLQUFLLE1BQU07QUFBQSxzQkFDWixpQkFBYztBQUFBLHNCQUNkLGdCQUFhO0FBQUEsc0JBQ2IsU0FBcUM7QUFBQSxzQkFDckMsbUJBQWdCO0FBQUEsc0JBQ2hCLE9BQU07QUFBQSxzQkFDTCxTQUFLLDJDQUE0QixNQUFNLGFBQWEsY0FBb0MsTUFBTSxhQUFhO0FBQUE7OztnQkFRMUcsU0FBWSxvQkFEcEJDLGdDQTJCTSxPQTNCTixhQTJCTTtBQUFBLGtCQXRCSkgsZ0JBV007QUFBQSxvQkFWSixPQUFNO0FBQUEsb0JBQ0wsU0FBSywyQ0FBMEIsTUFBTSxhQUFhLGNBQWMsTUFBTSxhQUFhO0FBQUE7b0JBSXBGQSxnQkFJTSxPQUpOLGFBRUMsdUJBQ0ssU0FBWTtBQUFBO2tCQUdKLE9BQVMsVUFBQyxhQUFhLE1BQUkseUJBQ3pDRSxZQU9FO0FBQUE7b0JBTkMsS0FBSyxPQUFTLFVBQUMsYUFBYSxlQUFTO0FBQUEsb0JBQ3RDLGlCQUFjO0FBQUEsb0JBQ2QsZ0JBQWE7QUFBQSxvQkFDYixTQUFxQztBQUFBLG9CQUNyQyxtQkFBZ0I7QUFBQSxvQkFDaEIsT0FBTTtBQUFBOzs7Ozs7UUFTcEJOLFlBQ2U7QUFBQSxVQURELEtBQUk7QUFBQSxVQUFnQixTQUFTLFNBQVU7QUFBQSxVQUFFLE9BQU07QUFBQSIsIm5hbWVzIjpbIl9jcmVhdGVWTm9kZSIsIl9ub3JtYWxpemVDbGFzcyIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfRnJhZ21lbnQiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyIsIl9jcmVhdGVCbG9jayIsIl9vcGVuQmxvY2siLCJfY3JlYXRlVGV4dFZOb2RlIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhZ2VzL01lbnUvU3RvcmVJbmZvLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLWhlYWRlclxuICAgIHJldmVhbFxuICAgIHJldmVhbC1vZmZzZXQ9XCIxMFwiXG4gICAgOmNsYXNzPVwie1xuICAgICAgJ2JnLW15ZGFyayB0ZXh0LXdoaXRlJzogJHEuZGFyay5tb2RlLFxuICAgICAgJ2JnLXdoaXRlIHRleHQtYmxhY2snOiAhJHEuZGFyay5tb2RlLFxuICAgIH1cIlxuICA+XG4gICAgPHEtdG9vbGJhcj5cbiAgICAgIDxxLWJ0blxuICAgICAgICBAY2xpY2s9XCIkcm91dGVyLmJhY2soKVwiXG4gICAgICAgIGZsYXRcbiAgICAgICAgcm91bmRcbiAgICAgICAgZGVuc2VcbiAgICAgICAgaWNvbj1cImxhcyBsYS1hbmdsZS1sZWZ0XCJcbiAgICAgICAgY2xhc3M9XCJxLW1yLXNtXCJcbiAgICAgICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ3doaXRlJyA6ICdkYXJrJ1wiXG4gICAgICAvPlxuICAgICAgPHEtdG9vbGJhci10aXRsZSBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGRcIj57e1xuICAgICAgICAkdChcIkluZm9cIilcbiAgICAgIH19PC9xLXRvb2xiYXItdGl0bGU+XG4gICAgPC9xLXRvb2xiYXI+XG4gIDwvcS1oZWFkZXI+XG4gIDxxLXBhZ2UgY2xhc3M9XCJxLXBsLW1kIHEtcHItbWRcIj5cbiAgICA8dGVtcGxhdGUgdi1pZj1cIk1lbnVTdG9yZS5sb2FkaW5faW5mb1wiPiBsb2FkaW5nIDwvdGVtcGxhdGU+XG5cbiAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgPHRlbXBsYXRlIHYtaWY9XCJNZW51U3RvcmUuZGF0YV9pbmZvW3NsdWddXCI+XG4gICAgICAgIDxxLWNoaXBcbiAgICAgICAgICBkZW5zZVxuICAgICAgICAgIGNvbG9yPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICAgIHRleHQtY29sb3I9XCJncmV5LTRcIlxuICAgICAgICAgIGNsYXNzPVwicS1wYS1ub25lXCJcbiAgICAgICAgICBpY29uPVwibGFzIGxhLW1hcC1tYXJrZXItYWx0XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1ncmV5XCJcbiAgICAgICAgICAgID57eyAkdChcIkZldyB3b3JkcyBhYm91dFwiKSB9fVxuICAgICAgICAgICAge3sgTWVudVN0b3JlLmRhdGFfaW5mb1tzbHVnXS5yZXN0YXVyYW50X25hbWUgfX08L3NwYW5cbiAgICAgICAgICA+XG4gICAgICAgIDwvcS1jaGlwPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb250MTMgdGV4dC1ncmV5IGVsbGlwc2lzLTItbGluZXNcIj5cbiAgICAgICAgICB7eyBNZW51U3RvcmUuZGF0YV9pbmZvW3NsdWddLnNob3J0X2Rlc2NyaXB0aW9uIH19XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxxLXNlcGFyYXRvciBjbGFzcz1cInEtbWItc20gcS1tdC1zbVwiPjwvcS1zZXBhcmF0b3I+XG5cbiAgICAgICAgPHEtY2hpcFxuICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgY29sb3I9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgdGV4dC1jb2xvcj1cImdyZXktNFwiXG4gICAgICAgICAgY2xhc3M9XCJxLXBhLW5vbmVcIlxuICAgICAgICAgIGljb249XCJsYXMgbGEtbWFwLW1hcmtlci1hbHRcIlxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWdyZXlcIj57eyAkdChcIkFkZHJlc3NcIikgfX08L3NwYW4+XG4gICAgICAgIDwvcS1jaGlwPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgaXRlbXMtY2VudGVyIHEtZ3V0dGVyLXNtXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnQxNSB0ZXh0LXdlaWdodC1ib2xkIG5vLW1hcmdpbiBsaW5lLW5vcm1hbFwiPlxuICAgICAgICAgICAgICB7eyBNZW51U3RvcmUuZGF0YV9pbmZvW3NsdWddLnJlc3RhdXJhbnRfbmFtZSB9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1ncmV5IGZvbnQxMiBsaW5lLW5vcm1hbFwiPlxuICAgICAgICAgICAgICB7eyBNZW51U3RvcmUuZGF0YV9pbmZvW3NsdWddLmFkZHJlc3MgfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJ0aGlzLiRxLmNhcGFjaXRvclwiPlxuICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICAgICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ3NlY29uZGFyeScgOiAnYmx1ZSdcIlxuICAgICAgICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnR2V0IGRpcmVjdGlvbnMnKVwiXG4gICAgICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgICAgICAgIDpocmVmPVwiTWVudVN0b3JlLmRhdGFfaW5mb1tzbHVnXS5tYXBfZGlyZWN0aW9uXCJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgICA6Y29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnc2Vjb25kYXJ5JyA6ICdibHVlJ1wiXG4gICAgICAgICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdHZXQgZGlyZWN0aW9ucycpXCJcbiAgICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgICAgOmhyZWY9XCJNZW51U3RvcmUuZGF0YV9pbmZvW3NsdWddLm1hcF9kaXJlY3Rpb25cIlxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8cS1zZXBhcmF0b3IgY2xhc3M9XCJxLW1iLXNtIHEtbXQtc21cIj48L3Etc2VwYXJhdG9yPlxuXG4gICAgICAgIDxxLWNoaXBcbiAgICAgICAgICBkZW5zZVxuICAgICAgICAgIGNvbG9yPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICAgIHRleHQtY29sb3I9XCJncmV5LTRcIlxuICAgICAgICAgIGNsYXNzPVwicS1wYS1ub25lXCJcbiAgICAgICAgICBpY29uPVwibGFzIGxhLWNsb2NrXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1ncmV5XCI+e3sgJHQoXCJPcGVuaW5nIGhvdXJzXCIpIH19PC9zcGFuPlxuICAgICAgICA8L3EtY2hpcD5cblxuICAgICAgICA8cS1saXN0IHYtaWY9XCJNZW51U3RvcmUub3Blbl9hdFtzbHVnXVwiPlxuICAgICAgICAgIDxxLWV4cGFuc2lvbi1pdGVtXG4gICAgICAgICAgICBleHBhbmQtc2VwYXJhdG9yXG4gICAgICAgICAgICA6bGFiZWw9XCIkdCgnVG9kYXknKVwiXG4gICAgICAgICAgICA6Y2FwdGlvbj1cIk1lbnVTdG9yZS5vcGVuX2F0W3NsdWddXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cS1jYXJkXG4gICAgICAgICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICAgICAnYmctbXlkYXJrIHRleHQtd2hpdGUnOiAkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgICAgICAgJ2JnLXdoaXRlIHRleHQtYmxhY2snOiAhJHEuZGFyay5tb2RlLFxuICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxxLWxpc3QgZGVuc2UgY2xhc3M9XCJmb250MTNcIj5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCJpdGVtcyBpbiBNZW51U3RvcmUub3BlbmluZ19ob3Vyc1tzbHVnXVwiXG4gICAgICAgICAgICAgICAgICAgIDprZXk9XCJpdGVtc1wiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPVwicGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7IG1pbi1oZWlnaHQ6IDBcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gY2xhc3M9XCJ0ZXh0LWNhcGl0YWxpemVcIj57e1xuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH19PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGNhcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICA+e3sgaXRlbXMuc3RhcnRfdGltZSB9fSAtIHt7IGl0ZW1zLmVuZF90aW1lIH19XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICA8L3EtbGlzdD5cbiAgICAgICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgIDwvcS1jYXJkPlxuICAgICAgICAgIDwvcS1leHBhbnNpb24taXRlbT5cbiAgICAgICAgPC9xLWxpc3Q+XG5cbiAgICAgICAgPHEtc2VwYXJhdG9yIGNsYXNzPVwicS1tYi1zbSBxLW10LXNtXCI+PC9xLXNlcGFyYXRvcj5cblxuICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImhhc0dhbGxlcnlcIj5cbiAgICAgICAgICA8cS1jaGlwXG4gICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgY29sb3I9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICB0ZXh0LWNvbG9yPVwiZ3JleS00XCJcbiAgICAgICAgICAgIGNsYXNzPVwicS1wYS1ub25lXCJcbiAgICAgICAgICAgIGljb249XCJsYXMgbGEtcGhvdG8tdmlkZW9cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1ncmV5XCI+e3sgJHQoXCJHYWxsZXJ5XCIpIH19PC9zcGFuPlxuICAgICAgICAgIDwvcS1jaGlwPlxuXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgdi1pZj1cIk1lbnVTdG9yZS5kYXRhX2dhbGxlcnlbc2x1Z11cIlxuICAgICAgICAgICAgY2xhc3M9XCJxLWd1dHRlci1zbSByb3cgaXRlbXMtc3RhcnRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgICAgICB2LWZvcj1cIihpdGVtcywgaW5kZXgpIGluIE1lbnVTdG9yZS5kYXRhX2dhbGxlcnlbc2x1Z11cIlxuICAgICAgICAgICAgICA6a2V5PVwiaXRlbXNcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImluZGV4IDw9IDRcIj5cbiAgICAgICAgICAgICAgICA8cS1pbWdcbiAgICAgICAgICAgICAgICAgIDpzcmM9XCJpdGVtcy50aHVtYm5haWxcIlxuICAgICAgICAgICAgICAgICAgc3Bpbm5lci1jb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICBzcGlubmVyLXNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT1cImhlaWdodDogODBweDsgbWF4LXdpZHRoOiA4MHB4XCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyLXNyYz1cInBsYWNlaG9sZGVyLnBuZ1wiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cInJhZGl1czggY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuaW1hZ2VQcmV2aWV3Lm1vZGFsID1cbiAgICAgICAgICAgICAgICAgICAgICAhdGhpcy4kcmVmcy5pbWFnZVByZXZpZXcubW9kYWxcbiAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHYtaWY9XCJjb3VudEdhbGxlcnkgPiAwXCJcbiAgICAgICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDgwcHg7IHdpZHRoOiA4MHB4XCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJyZWxhdGl2ZS1wb3NpdGlvblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzcz1cImRpbW1lZCBhYnNvbHV0ZS10b3AgZml0IHotdG9wIGZsZXggZmxleC1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgIEBjbGljaz1cIlxuICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5pbWFnZVByZXZpZXcubW9kYWwgPSAhdGhpcy4kcmVmcy5pbWFnZVByZXZpZXcubW9kYWxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIHotdG9wIHRleHQtd2VpZ2h0LWJvbGQgZm9udDE2XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAre3sgY291bnRHYWxsZXJ5IH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIk1lbnVTdG9yZS5kYXRhX2dhbGxlcnlbc2x1Z11bNV1cIj5cbiAgICAgICAgICAgICAgICA8cS1pbWdcbiAgICAgICAgICAgICAgICAgIDpzcmM9XCJNZW51U3RvcmUuZGF0YV9nYWxsZXJ5W3NsdWddWzVdLnRodW1ibmFpbFwiXG4gICAgICAgICAgICAgICAgICBzcGlubmVyLWNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgIHNwaW5uZXItc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiA4MHB4OyBtYXgtd2lkdGg6IDgwcHhcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXItc3JjPVwicGxhY2Vob2xkZXIucG5nXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwicmFkaXVzOFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L3RlbXBsYXRlPlxuXG4gICAgPEltYWdlUHJldmlldyByZWY9XCJpbWFnZVByZXZpZXdcIiA6Z2FsbGVyeT1cImdldEdhbGxlcnlcIiB0aXRsZT1cIkdhbGxlcnlcIj5cbiAgICA8L0ltYWdlUHJldmlldz5cbiAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgZGVmaW5lQXN5bmNDb21wb25lbnQgfSBmcm9tIFwidnVlXCI7XG5pbXBvcnQgeyB1c2VNZW51U3RvcmUgfSBmcm9tIFwic3RvcmVzL01lbnVTdG9yZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiTWVudS9TdG9yZUluZm9cIixcbiAgY29tcG9uZW50czoge1xuICAgIEltYWdlUHJldmlldzogZGVmaW5lQXN5bmNDb21wb25lbnQoKCkgPT5cbiAgICAgIGltcG9ydChcImNvbXBvbmVudHMvSW1hZ2VQcmV2aWV3LnZ1ZVwiKVxuICAgICksXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNsdWc6IFwiXCIsXG4gICAgfTtcbiAgfSxcbiAgc2V0dXAoKSB7XG4gICAgY29uc3QgTWVudVN0b3JlID0gdXNlTWVudVN0b3JlKCk7XG4gICAgcmV0dXJuIHsgTWVudVN0b3JlIH07XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgaGFzR2FsbGVyeSgpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLk1lbnVTdG9yZS5kYXRhX2dhbGxlcnkpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKHRoaXMuTWVudVN0b3JlLmRhdGFfZ2FsbGVyeVt0aGlzLnNsdWddKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIGNvdW50R2FsbGVyeSgpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLk1lbnVTdG9yZS5kYXRhX2dhbGxlcnkpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKHRoaXMuTWVudVN0b3JlLmRhdGFfZ2FsbGVyeVt0aGlzLnNsdWddKSB7XG4gICAgICAgICAgbGV0IHRvdGFsID0gT2JqZWN0LmtleXMoXG4gICAgICAgICAgICB0aGlzLk1lbnVTdG9yZS5kYXRhX2dhbGxlcnlbdGhpcy5zbHVnXVxuICAgICAgICAgICkubGVuZ3RoO1xuICAgICAgICAgIHJldHVybiB0b3RhbCAtIDQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAwO1xuICAgIH0sXG4gICAgZ2V0R2FsbGVyeSgpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLk1lbnVTdG9yZS5nYWxsZXJ5X2ltYWdlcykubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAodGhpcy5NZW51U3RvcmUuZ2FsbGVyeV9pbWFnZXNbdGhpcy5zbHVnXSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLk1lbnVTdG9yZS5nYWxsZXJ5X2ltYWdlc1t0aGlzLnNsdWddO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLnNsdWcgPSB0aGlzLiRyb3V0ZS5xdWVyeS5zbHVnO1xuICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLk1lbnVTdG9yZS5kYXRhX2luZm8pLmxlbmd0aCA8PSAwKSB7XG4gICAgICB0aGlzLk1lbnVTdG9yZS5nZXRNZXJjaGFudEluZm8odGhpcy5zbHVnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCF0aGlzLk1lbnVTdG9yZS5kYXRhX2luZm9bdGhpcy5zbHVnXSkge1xuICAgICAgICB0aGlzLk1lbnVTdG9yZS5nZXRNZXJjaGFudEluZm8odGhpcy5zbHVnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iXSwiZmlsZSI6ImFzc2V0cy9TdG9yZUluZm8uNzIyNWE4OWYuanMifQ==
