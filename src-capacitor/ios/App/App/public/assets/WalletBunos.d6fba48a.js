import { Q as QSkeleton } from "./QSkeleton.39737398.js";
import { S as Swiper, a as SwiperSlide } from "./swiper-slide.8a0c58df.js";
/* empty css                     */import { _ as _export_sfc, m as APIinterface, n as resolveComponent, p as openBlock, q as createBlock, t as withCtx, V as createElementBlock, X as renderList, U as createBaseVNode, Z as toDisplayString, a7 as normalizeClass, F as Fragment } from "./index.61ed5618.js";
const _sfc_main = {
  name: "WalletBunos",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      loading: false,
      data: []
    };
  },
  mounted() {
    this.getDiscount();
  },
  methods: {
    getDiscount() {
      this.loading = true;
      APIinterface.fetchDataByTokenPost(
        "getDiscount",
        "transaction_type=digital_wallet"
      ).then((data) => {
        this.data = data.details;
      }).catch((error) => {
      }).then((data) => {
        this.loading = false;
      });
    }
  }
};
const _hoisted_1 = { class: "q-pa-sm" };
const _hoisted_2 = { class: "text-subtitle1 text-weight-bold" };
const _hoisted_3 = { class: "text-body2" };
const _hoisted_4 = { class: "text-caption text-weight-medium" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_swiper = resolveComponent("swiper");
  return $data.loading ? (openBlock(), createBlock(QSkeleton, {
    key: 0,
    height: "120px",
    square: ""
  })) : (openBlock(), createBlock(_component_swiper, {
    key: 1,
    "slides-per-view": 1.1,
    "space-between": 10
  }, {
    default: withCtx(() => [
      (openBlock(true), createElementBlock(Fragment, null, renderList($data.data, (items) => {
        return openBlock(), createBlock(_component_swiper_slide, { key: items }, {
          default: withCtx(() => [
            createBaseVNode("div", {
              class: normalizeClass(["fit border-grey rounded-borders bg-bluex text-white", {
                "bg-grey600 text-grey300": _ctx.$q.dark.mode,
                "bg-blue text-white": !_ctx.$q.dark.mode
              }])
            }, [
              createBaseVNode("div", _hoisted_1, [
                createBaseVNode("div", _hoisted_2, toDisplayString(items.title), 1),
                createBaseVNode("div", _hoisted_3, toDisplayString(items.discount_details), 1),
                createBaseVNode("div", _hoisted_4, toDisplayString(items.valid_discount), 1)
              ])
            ], 2)
          ]),
          _: 2
        }, 1024);
      }), 128))
    ]),
    _: 1
  }, 8, ["slides-per-view"]));
}
var WalletBunos = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "WalletBunos.vue"]]);
export { WalletBunos as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2FsbGV0QnVub3MuZDZmYmE0OGEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1dhbGxldEJ1bm9zLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDx0ZW1wbGF0ZSB2LWlmPVwibG9hZGluZ1wiPlxuICAgIDxxLXNrZWxldG9uIGhlaWdodD1cIjEyMHB4XCIgc3F1YXJlIC8+XG4gIDwvdGVtcGxhdGU+XG4gIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgPHN3aXBlciA6c2xpZGVzLXBlci12aWV3PVwiMS4xXCIgOnNwYWNlLWJldHdlZW49XCIxMFwiPlxuICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiaXRlbXMgaW4gZGF0YVwiIDprZXk9XCJpdGVtc1wiPlxuICAgICAgICA8c3dpcGVyLXNsaWRlPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwiZml0IGJvcmRlci1ncmV5IHJvdW5kZWQtYm9yZGVycyBiZy1ibHVleCB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICAgJ2JnLWdyZXk2MDAgdGV4dC1ncmV5MzAwJzogJHEuZGFyay5tb2RlLFxuICAgICAgICAgICAgICAnYmctYmx1ZSB0ZXh0LXdoaXRlJzogISRxLmRhcmsubW9kZSxcbiAgICAgICAgICAgIH1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJxLXBhLXNtXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMSB0ZXh0LXdlaWdodC1ib2xkXCI+XG4gICAgICAgICAgICAgICAge3sgaXRlbXMudGl0bGUgfX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWJvZHkyXCI+XG4gICAgICAgICAgICAgICAge3sgaXRlbXMuZGlzY291bnRfZGV0YWlscyB9fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2FwdGlvbiB0ZXh0LXdlaWdodC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICB7eyBpdGVtcy52YWxpZF9kaXNjb3VudCB9fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3N3aXBlci1zbGlkZT5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC9zd2lwZXI+XG4gIDwvdGVtcGxhdGU+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gXCJzd2lwZXIvdnVlXCI7XG5pbXBvcnQgXCJzd2lwZXIvY3NzXCI7XG5pbXBvcnQgQVBJaW50ZXJmYWNlIGZyb20gXCJzcmMvYXBpL0FQSWludGVyZmFjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiV2FsbGV0QnVub3NcIixcbiAgY29tcG9uZW50czoge1xuICAgIFN3aXBlcixcbiAgICBTd2lwZXJTbGlkZSxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICBkYXRhOiBbXSxcbiAgICB9O1xuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuZ2V0RGlzY291bnQoKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGdldERpc2NvdW50KCkge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIEFQSWludGVyZmFjZS5mZXRjaERhdGFCeVRva2VuUG9zdChcbiAgICAgICAgXCJnZXREaXNjb3VudFwiLFxuICAgICAgICBcInRyYW5zYWN0aW9uX3R5cGU9ZGlnaXRhbF93YWxsZXRcIlxuICAgICAgKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuZGF0YSA9IGRhdGEuZGV0YWlscztcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge30pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX2NyZWF0ZUJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9GcmFnbWVudCIsIl9yZW5kZXJMaXN0IiwiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7O0FBc0NBLE1BQUssWUFBVTtBQUFBLEVBQ2IsTUFBTTtBQUFBLEVBQ04sWUFBWTtBQUFBLElBQ1Y7QUFBQSxJQUNBO0FBQUEsRUFDRDtBQUFBLEVBQ0QsT0FBTztBQUNMLFdBQU87QUFBQSxNQUNMLFNBQVM7QUFBQSxNQUNULE1BQU0sQ0FBRTtBQUFBO0VBRVg7QUFBQSxFQUNELFVBQVU7QUFDUixTQUFLLFlBQVc7QUFBQSxFQUNqQjtBQUFBLEVBQ0QsU0FBUztBQUFBLElBQ1AsY0FBYztBQUNaLFdBQUssVUFBVTtBQUNmLG1CQUFhO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxNQUNGLEVBQ0csS0FBSyxDQUFDLFNBQVM7QUFDZCxhQUFLLE9BQU8sS0FBSztBQUFBLE9BQ2xCLEVBQ0EsTUFBTSxDQUFDLFVBQVU7QUFBQSxPQUFFLEVBQ25CLEtBQUssQ0FBQyxTQUFTO0FBQ2QsYUFBSyxVQUFVO0FBQUEsTUFDakIsQ0FBQztBQUFBLElBQ0o7QUFBQSxFQUNGO0FBQ0g7QUF0RGlCLE1BQUEsYUFBQSxFQUFBLE9BQU0sVUFBUztBQUNiLE1BQUEsYUFBQSxFQUFBLE9BQU0sa0NBQWlDO0FBR3ZDLE1BQUEsYUFBQSxFQUFBLE9BQU0sYUFBWTtBQUdsQixNQUFBLGFBQUEsRUFBQSxPQUFNLGtDQUFpQzs7OztTQXJCeEMsTUFBTyx3QkFDckJBLFlBQW9DLFdBQUE7QUFBQTtJQUF4QixRQUFPO0FBQUEsSUFBUSxRQUFBO0FBQUEsc0JBRzNCQSxZQXdCUyxtQkFBQTtBQUFBO0lBeEJBLG1CQUFpQjtBQUFBLElBQU0saUJBQWU7QUFBQTtxQkFDbkMsTUFBcUI7QUFBQSx3QkFBL0JDLG1CQXNCV0MsVUFBQSxNQUFBQyxXQXRCZSxNQUFJLE1BQUEsQ0FBYixVQUFLO0FBQ3BCLGVBQUFDLFVBQUEsR0FBQUosWUFvQmUsZ0NBckJxQixTQUFLO0FBQUEsMkJBRXZDLE1Ba0JNO0FBQUEsWUFsQk5LLGdCQWtCTSxPQUFBO0FBQUEsY0FqQkosdUJBQU0sdURBQXFEO0FBQUEsMkNBQ1IsS0FBRSxHQUFDLEtBQUs7QUFBQSx1Q0FBMkMsS0FBRSxHQUFDLEtBQUs7QUFBQTs7Y0FLOUdBLGdCQVVNLE9BVk4sWUFVTTtBQUFBLGdCQVRKQSxnQkFFTSxPQUZOLFlBQ0tDLGdCQUFBLE1BQU0sS0FBSyxHQUFBLENBQUE7QUFBQSxnQkFFaEJELGdCQUVNLE9BRk4sWUFDS0MsZ0JBQUEsTUFBTSxnQkFBZ0IsR0FBQSxDQUFBO0FBQUEsZ0JBRTNCRCxnQkFFTSxPQUZOLFlBQ0tDLGdCQUFBLE1BQU0sY0FBYyxHQUFBLENBQUE7QUFBQTs7Ozs7Ozs7Ozs7OyJ9
