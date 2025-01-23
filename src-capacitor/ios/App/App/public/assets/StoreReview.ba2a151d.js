import { _ as _export_sfc, l as defineAsyncComponent, m as APIinterface, n as resolveComponent, p as openBlock, V as createElementBlock, f as createVNode, t as withCtx, a7 as normalizeClass, F as Fragment, Y as QBtn, a6 as createTextVNode, Z as toDisplayString, U as createBaseVNode, aA as createCommentVNode, q as createBlock, X as renderList, u as __vitePreload, ac as QItem, ad as QItemSection, ae as QAvatar } from "./index.61ed5618.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QImg } from "./QImg.6c27044c.js";
import { Q as QRating } from "./QRating.f65cc24e.js";
import { Q as QBadge } from "./QBadge.6d32ed43.js";
import { Q as QList } from "./QList.b69a7e5b.js";
import { Q as QInnerLoading } from "./QInnerLoading.abe2afe6.js";
import { Q as QSpinnerDots } from "./QSpinnerDots.a9d9851d.js";
import { Q as QInfiniteScroll } from "./QInfiniteScroll.3e160277.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import { Q as QPullToRefresh } from "./QPullToRefresh.3d10c02d.js";
import "./QResizeObserver.d08dce3c.js";
import "./format.7f7370d3.js";
import "./touch.96e0ae37.js";
import "./selection.50b4cb0c.js";
const _sfc_main = {
  name: "StoreReview",
  components: {
    ImagePreview: defineAsyncComponent(
      () => __vitePreload(() => import("./ImagePreview.c7742ddf.js"), true ? ["assets/ImagePreview.c7742ddf.js","assets/QToolbarTitle.03eaf2d6.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QSpace.f164c087.js","assets/QToolbar.c8fc6962.js","assets/use-panel.225d73f4.js","assets/touch.96e0ae37.js","assets/selection.50b4cb0c.js","assets/use-render-cache.b9e045af.js"] : void 0)
    )
  },
  data() {
    return {
      slug: "",
      loading: true,
      data: [],
      page: 0,
      galleryList: []
    };
  },
  created() {
    this.slug = this.$route.query.slug;
  },
  computed: {
    hasData() {
      if (this.data.length > 0) {
        return true;
      }
      return false;
    }
  },
  methods: {
    getReview(index, done) {
      this.loading = true;
      this.page = index;
      APIinterface.getReview(this.slug, index).then((data) => {
        this.data.push(data.details.data);
      }).catch((error) => {
        if (this.$refs.nscroll) {
          this.$refs.nscroll.stop();
        }
      }).then((data) => {
        done();
        this.loading = false;
      });
    },
    setGallery(data) {
      this.galleryList = data;
      this.$refs.imagePreview.modal = !this.$refs.imagePreview.modal;
    },
    refresh(done) {
      this.resetPagination();
      done();
    },
    resetPagination() {
      this.page = 0;
      this.data = [];
      this.$refs.nscroll.reset();
      this.$refs.nscroll.resume();
      this.$refs.nscroll.trigger();
    }
  }
};
const _hoisted_1 = {
  key: 0,
  class: "text-center"
};
const _hoisted_2 = { class: "font16 text-weight-bold" };
const _hoisted_3 = { class: "font11" };
const _hoisted_4 = { class: "row items-start q-gutter-sm q-mb-xs" };
const _hoisted_5 = { class: "col-2" };
const _hoisted_6 = { class: "col" };
const _hoisted_7 = { class: "font13 text-weight-bold line-normal ellipsis" };
const _hoisted_8 = { class: "font11 full-width text-grey text-weight-medium" };
const _hoisted_9 = { class: "col-3 text-right" };
const _hoisted_10 = { key: 0 };
const _hoisted_11 = { class: "ellipsis-2-lines q-mt-xs q-mb-xs" };
const _hoisted_12 = ["innerHTML"];
const _hoisted_13 = {
  key: 1,
  class: "q-gutter-sm row items-start"
};
const _hoisted_14 = {
  key: 1,
  class: "row justify-center absolute-bottom"
};
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
                createTextVNode(toDisplayString(_ctx.$t("Reviews")), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["class"]),
    createVNode(QPullToRefresh, { onRefresh: $options.refresh }, {
      default: withCtx(() => [
        createVNode(QPage, {
          class: normalizeClass(["q-pl-md q-pr-md", { "flex flex-center": !$options.hasData && !$data.loading }])
        }, {
          default: withCtx(() => [
            createVNode(QInfiniteScroll, {
              ref: "nscroll",
              onLoad: $options.getReview,
              offset: 250
            }, {
              default: withCtx(() => [
                !$options.hasData && !$data.loading ? (openBlock(), createElementBlock("div", _hoisted_1, [
                  createBaseVNode("div", _hoisted_2, toDisplayString(_ctx.$t("No reviews found")), 1),
                  createBaseVNode("p", _hoisted_3, toDisplayString(_ctx.$t("There is no review available for this restaurant")), 1)
                ])) : createCommentVNode("", true),
                $options.hasData ? (openBlock(), createBlock(QList, {
                  key: 1,
                  separator: "",
                  class: "qlist-no-padding"
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList($data.data, (data_item) => {
                      return openBlock(), createElementBlock(Fragment, { key: data_item }, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(data_item, (items) => {
                          return openBlock(), createBlock(QItem, { key: items }, {
                            default: withCtx(() => [
                              createVNode(QItemSection, null, {
                                default: withCtx(() => [
                                  createBaseVNode("div", _hoisted_4, [
                                    createBaseVNode("div", _hoisted_5, [
                                      createVNode(QAvatar, null, {
                                        default: withCtx(() => [
                                          createVNode(QImg, {
                                            src: items.url_image,
                                            "spinner-color": "secondary",
                                            "spinner-size": "sm",
                                            style: { "max-width": "80px" }
                                          }, null, 8, ["src"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    createBaseVNode("div", _hoisted_6, [
                                      createBaseVNode("div", _hoisted_7, [
                                        items.as_anonymous === 1 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                                          createTextVNode(toDisplayString(items.hidden_fullname), 1)
                                        ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                                          createTextVNode(toDisplayString(items.fullname), 1)
                                        ], 64))
                                      ]),
                                      createBaseVNode("div", _hoisted_8, toDisplayString(items.date_created), 1)
                                    ]),
                                    createBaseVNode("div", _hoisted_9, [
                                      createVNode(QRating, {
                                        modelValue: items.rating,
                                        "onUpdate:modelValue": ($event) => items.rating = $event,
                                        size: "13px",
                                        max: 5,
                                        color: "grey",
                                        "color-selected": "yellow-14",
                                        readonly: "",
                                        class: "q-mb-xs"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ])
                                  ]),
                                  items.meta.tags_like ? (openBlock(), createElementBlock("div", _hoisted_10, [
                                    (openBlock(true), createElementBlock(Fragment, null, renderList(items.meta.tags_like, (tags) => {
                                      return openBlock(), createElementBlock(Fragment, { key: tags }, [
                                        tags ? (openBlock(), createBlock(QBadge, {
                                          key: 0,
                                          rounded: "",
                                          color: _ctx.$q.dark.mode ? "grey600" : "mygrey",
                                          "text-color": "grey",
                                          label: tags,
                                          class: "q-pl-sm q-pr-sm q-mr-xs"
                                        }, null, 8, ["color", "label"])) : createCommentVNode("", true)
                                      ], 64);
                                    }), 128))
                                  ])) : createCommentVNode("", true),
                                  createBaseVNode("div", _hoisted_11, [
                                    createBaseVNode("span", {
                                      innerHTML: items.review
                                    }, null, 8, _hoisted_12)
                                  ]),
                                  items.meta.upload_images ? (openBlock(), createElementBlock("div", _hoisted_13, [
                                    (openBlock(true), createElementBlock(Fragment, null, renderList(items.meta.upload_images, (image, index) => {
                                      return openBlock(), createElementBlock(Fragment, { key: image }, [
                                        index <= 3 ? (openBlock(), createBlock(QImg, {
                                          key: 0,
                                          src: image,
                                          "spinner-color": "secondary",
                                          "spinner-size": "sm",
                                          style: { "height": "50px", "max-width": "50px" },
                                          "placeholder-src": "placeholder.png",
                                          class: "radius8 cursor-pointer",
                                          onClick: ($event) => $options.setGallery(items.meta.upload_images)
                                        }, null, 8, ["src", "onClick"])) : createCommentVNode("", true)
                                      ], 64);
                                    }), 128))
                                  ])) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ], 64);
                    }), 128))
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ]),
              loading: withCtx(() => [
                $data.page <= 1 ? (openBlock(), createBlock(QInnerLoading, {
                  key: 0,
                  showing: true,
                  color: "primary",
                  size: "md",
                  "label-class": "dark"
                })) : (openBlock(), createElementBlock("div", _hoisted_14, [
                  createVNode(QSpinnerDots, {
                    color: "secondary",
                    size: "30px"
                  })
                ]))
              ]),
              _: 1
            }, 8, ["onLoad"])
          ]),
          _: 1
        }, 8, ["class"])
      ]),
      _: 1
    }, 8, ["onRefresh"]),
    createVNode(_component_ImagePreview, {
      ref: "imagePreview",
      gallery: $data.galleryList,
      title: ""
    }, null, 8, ["gallery"])
  ], 64);
}
var StoreReview = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "StoreReview.vue"]]);
export { StoreReview as default };
//# sourceMappingURL=data:application/json;base64,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QUFBLE1BQWdCLFNBQVMsTUFBVztBQUFBLE1BQUUsT0FBTTtBQUFBIiwibmFtZXMiOlsiX2NyZWF0ZVZOb2RlIiwiX25vcm1hbGl6ZUNsYXNzIiwiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX2NyZWF0ZUJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9GcmFnbWVudCIsIl9jcmVhdGVUZXh0Vk5vZGUiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvTWVudS9TdG9yZVJldmlldy52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8cS1oZWFkZXJcbiAgICByZXZlYWxcbiAgICByZXZlYWwtb2Zmc2V0PVwiMTBcIlxuICAgIDpjbGFzcz1cIntcbiAgICAgICdiZy1teWRhcmsgdGV4dC13aGl0ZSc6ICRxLmRhcmsubW9kZSxcbiAgICAgICdiZy13aGl0ZSB0ZXh0LWJsYWNrJzogISRxLmRhcmsubW9kZSxcbiAgICB9XCJcbiAgPlxuICAgIDxxLXRvb2xiYXI+XG4gICAgICA8cS1idG5cbiAgICAgICAgQGNsaWNrPVwiJHJvdXRlci5iYWNrKClcIlxuICAgICAgICBmbGF0XG4gICAgICAgIHJvdW5kXG4gICAgICAgIGRlbnNlXG4gICAgICAgIGljb249XCJsYXMgbGEtYW5nbGUtbGVmdFwiXG4gICAgICAgIGNsYXNzPVwicS1tci1zbVwiXG4gICAgICAgIDpjb2xvcj1cIiRxLmRhcmsubW9kZSA/ICd3aGl0ZScgOiAnZGFyaydcIlxuICAgICAgLz5cbiAgICAgIDxxLXRvb2xiYXItdGl0bGUgY2xhc3M9XCJ0ZXh0LXdlaWdodC1ib2xkXCI+e3tcbiAgICAgICAgJHQoXCJSZXZpZXdzXCIpXG4gICAgICB9fTwvcS10b29sYmFyLXRpdGxlPlxuICAgIDwvcS10b29sYmFyPlxuICA8L3EtaGVhZGVyPlxuICA8cS1wdWxsLXRvLXJlZnJlc2ggQHJlZnJlc2g9XCJyZWZyZXNoXCI+XG4gICAgPHEtcGFnZVxuICAgICAgY2xhc3M9XCJxLXBsLW1kIHEtcHItbWRcIlxuICAgICAgOmNsYXNzPVwieyAnZmxleCBmbGV4LWNlbnRlcic6ICFoYXNEYXRhICYmICFsb2FkaW5nIH1cIlxuICAgID5cbiAgICAgIDxxLWluZmluaXRlLXNjcm9sbCByZWY9XCJuc2Nyb2xsXCIgQGxvYWQ9XCJnZXRSZXZpZXdcIiA6b2Zmc2V0PVwiMjUwXCI+XG4gICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6ZGVmYXVsdD5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIiFoYXNEYXRhICYmICFsb2FkaW5nXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnQxNiB0ZXh0LXdlaWdodC1ib2xkXCI+XG4gICAgICAgICAgICAgICAge3sgJHQoXCJObyByZXZpZXdzIGZvdW5kXCIpIH19XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImZvbnQxMVwiPlxuICAgICAgICAgICAgICAgIHt7ICR0KFwiVGhlcmUgaXMgbm8gcmV2aWV3IGF2YWlsYWJsZSBmb3IgdGhpcyByZXN0YXVyYW50XCIpIH19XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICA8cS1saXN0IHNlcGFyYXRvciB2LWlmPVwiaGFzRGF0YVwiIGNsYXNzPVwicWxpc3Qtbm8tcGFkZGluZ1wiPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiZGF0YV9pdGVtIGluIGRhdGFcIiA6a2V5PVwiZGF0YV9pdGVtXCI+XG4gICAgICAgICAgICAgIDxxLWl0ZW0gdi1mb3I9XCJpdGVtcyBpbiBkYXRhX2l0ZW1cIiA6a2V5PVwiaXRlbXNcIj5cbiAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGl0ZW1zLXN0YXJ0IHEtZ3V0dGVyLXNtIHEtbWIteHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtYXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHEtaW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDpzcmM9XCJpdGVtcy51cmxfaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcGlubmVyLWNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3Bpbm5lci1zaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIm1heC13aWR0aDogODBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvcS1hdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnQxMyB0ZXh0LXdlaWdodC1ib2xkIGxpbmUtbm9ybWFsIGVsbGlwc2lzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIml0ZW1zLmFzX2Fub255bW91cyA9PT0gMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBpdGVtcy5oaWRkZW5fZnVsbG5hbWUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBpdGVtcy5mdWxsbmFtZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvbnQxMSBmdWxsLXdpZHRoIHRleHQtZ3JleSB0ZXh0LXdlaWdodC1tZWRpdW1cIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IGl0ZW1zLmRhdGVfY3JlYXRlZCB9fVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1yYXRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJpdGVtcy5yYXRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjEzcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOm1heD1cIjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJncmV5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yLXNlbGVjdGVkPVwieWVsbG93LTE0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInEtbWIteHNcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cIml0ZW1zLm1ldGEudGFnc19saWtlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cInRhZ3MgaW4gaXRlbXMubWV0YS50YWdzX2xpa2VcIiA6a2V5PVwidGFnc1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwidGFnc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHEtYmFkZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm91bmRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICA6Y29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTYwMCcgOiAnbXlncmV5J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtY29sb3I9XCJncmV5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwidGFnc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicS1wbC1zbSBxLXByLXNtIHEtbXIteHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbGxpcHNpcy0yLWxpbmVzIHEtbXQteHMgcS1tYi14c1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWh0bWw9XCJpdGVtcy5yZXZpZXdcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwiaXRlbXMubWV0YS51cGxvYWRfaW1hZ2VzXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJxLWd1dHRlci1zbSByb3cgaXRlbXMtc3RhcnRcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIihpbWFnZSwgaW5kZXgpIGluIGl0ZW1zLm1ldGEudXBsb2FkX2ltYWdlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgOmtleT1cImltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiaW5kZXggPD0gM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHEtaW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDpzcmM9XCJpbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNwaW5uZXItY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcGlubmVyLXNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiA1MHB4OyBtYXgtd2lkdGg6IDUwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlci1zcmM9XCJwbGFjZWhvbGRlci5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJhZGl1czggY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJzZXRHYWxsZXJ5KGl0ZW1zLm1ldGEudXBsb2FkX2ltYWdlcylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvcS1saXN0PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmxvYWRpbmc+XG4gICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJwYWdlIDw9IDFcIj5cbiAgICAgICAgICAgIDxxLWlubmVyLWxvYWRpbmdcbiAgICAgICAgICAgICAgOnNob3dpbmc9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgICAgICAgbGFiZWwtY2xhc3M9XCJkYXJrXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBqdXN0aWZ5LWNlbnRlciBhYnNvbHV0ZS1ib3R0b21cIj5cbiAgICAgICAgICAgICAgPHEtc3Bpbm5lci1kb3RzIGNvbG9yPVwic2Vjb25kYXJ5XCIgc2l6ZT1cIjMwcHhcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvcS1pbmZpbml0ZS1zY3JvbGw+XG4gICAgPC9xLXBhZ2U+XG4gIDwvcS1wdWxsLXRvLXJlZnJlc2g+XG5cbiAgPEltYWdlUHJldmlldyByZWY9XCJpbWFnZVByZXZpZXdcIiA6Z2FsbGVyeT1cImdhbGxlcnlMaXN0XCIgdGl0bGU9XCJcIj5cbiAgPC9JbWFnZVByZXZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgZGVmaW5lQXN5bmNDb21wb25lbnQgfSBmcm9tIFwidnVlXCI7XG5pbXBvcnQgQVBJaW50ZXJmYWNlIGZyb20gXCJzcmMvYXBpL0FQSWludGVyZmFjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiU3RvcmVSZXZpZXdcIixcbiAgY29tcG9uZW50czoge1xuICAgIEltYWdlUHJldmlldzogZGVmaW5lQXN5bmNDb21wb25lbnQoKCkgPT5cbiAgICAgIGltcG9ydChcImNvbXBvbmVudHMvSW1hZ2VQcmV2aWV3LnZ1ZVwiKVxuICAgICksXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNsdWc6IFwiXCIsXG4gICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgZGF0YTogW10sXG4gICAgICBwYWdlOiAwLFxuICAgICAgZ2FsbGVyeUxpc3Q6IFtdLFxuICAgIH07XG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5zbHVnID0gdGhpcy4kcm91dGUucXVlcnkuc2x1ZztcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBoYXNEYXRhKCkge1xuICAgICAgaWYgKHRoaXMuZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBnZXRSZXZpZXcoaW5kZXgsIGRvbmUpIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLnBhZ2UgPSBpbmRleDtcbiAgICAgIEFQSWludGVyZmFjZS5nZXRSZXZpZXcodGhpcy5zbHVnLCBpbmRleClcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmRhdGEucHVzaChkYXRhLmRldGFpbHMuZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuJHJlZnMubnNjcm9sbCkge1xuICAgICAgICAgICAgdGhpcy4kcmVmcy5uc2Nyb2xsLnN0b3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgZG9uZSgpO1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHNldEdhbGxlcnkoZGF0YSkge1xuICAgICAgdGhpcy5nYWxsZXJ5TGlzdCA9IGRhdGE7XG4gICAgICB0aGlzLiRyZWZzLmltYWdlUHJldmlldy5tb2RhbCA9ICF0aGlzLiRyZWZzLmltYWdlUHJldmlldy5tb2RhbDtcbiAgICB9LFxuICAgIHJlZnJlc2goZG9uZSkge1xuICAgICAgdGhpcy5yZXNldFBhZ2luYXRpb24oKTtcbiAgICAgIGRvbmUoKTtcbiAgICB9LFxuICAgIHJlc2V0UGFnaW5hdGlvbigpIHtcbiAgICAgIHRoaXMucGFnZSA9IDA7XG4gICAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICAgIHRoaXMuJHJlZnMubnNjcm9sbC5yZXNldCgpO1xuICAgICAgdGhpcy4kcmVmcy5uc2Nyb2xsLnJlc3VtZSgpO1xuICAgICAgdGhpcy4kcmVmcy5uc2Nyb2xsLnRyaWdnZXIoKTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuIl0sImZpbGUiOiJhc3NldHMvU3RvcmVSZXZpZXcuYmEyYTE1MWQuanMifQ==
