import { Q as QSkeleton } from "./QSkeleton.39737398.js";
import { _ as _export_sfc, n as resolveComponent, p as openBlock, q as createBlock, t as withCtx, V as createElementBlock, X as renderList, f as createVNode, F as Fragment, Y as QBtn, aA as createCommentVNode } from "./index.61ed5618.js";
import { S as Swiper, a as SwiperSlide } from "./swiper-slide.8a0c58df.js";
import { u as useMenuStore } from "./MenuStore.f3a21da3.js";
const _sfc_main = {
  name: "CategorySlide",
  props: ["slug"],
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const MenuStore = useMenuStore();
    return { MenuStore };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_swiper = resolveComponent("swiper");
  return $setup.MenuStore.loading_menu ? (openBlock(), createBlock(_component_swiper, {
    key: 0,
    "slides-per-view": 2.2,
    "space-between": 10
  }, {
    default: withCtx(() => [
      (openBlock(), createElementBlock(Fragment, null, renderList(5, (x) => {
        return createVNode(_component_swiper_slide, { key: x }, {
          default: withCtx(() => [
            createVNode(QSkeleton, { height: "40px" })
          ]),
          _: 1
        });
      }), 64))
    ]),
    _: 1
  }, 8, ["slides-per-view"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
    $setup.MenuStore.data_category[$props.slug] ? (openBlock(), createBlock(_component_swiper, {
      key: 0,
      "slides-per-view": 2.5,
      "space-between": 10
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.MenuStore.data_category[$props.slug], (items) => {
          return openBlock(), createBlock(_component_swiper_slide, { key: items }, {
            default: withCtx(() => [
              createVNode(QBtn, {
                flat: "",
                label: items.category_name,
                "no-caps": "",
                class: "line-1",
                color: "grey",
                onClick: ($event) => this.$emit("afterCategoryselect", items.category_uiid)
              }, null, 8, ["label", "onClick"])
            ]),
            _: 2
          }, 1024);
        }), 128))
      ]),
      _: 1
    }, 8, ["slides-per-view"])) : createCommentVNode("", true)
  ], 64));
}
var CategorySlide = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "CategorySlide.vue"]]);
export { CategorySlide as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2F0ZWdvcnlTbGlkZS41YWI2YTZkNC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQ2F0ZWdvcnlTbGlkZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8dGVtcGxhdGUgdi1pZj1cIk1lbnVTdG9yZS5sb2FkaW5nX21lbnVcIj5cbiAgICA8c3dpcGVyIDpzbGlkZXMtcGVyLXZpZXc9XCIyLjJcIiA6c3BhY2UtYmV0d2Vlbj1cIjEwXCI+XG4gICAgICA8dGVtcGxhdGUgdi1mb3I9XCJ4IGluIDVcIiA6a2V5PVwieFwiPlxuICAgICAgICA8c3dpcGVyLXNsaWRlPlxuICAgICAgICAgIDxxLXNrZWxldG9uIGhlaWdodD1cIjQwcHhcIiAvPlxuICAgICAgICA8L3N3aXBlci1zbGlkZT5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC9zd2lwZXI+XG4gIDwvdGVtcGxhdGU+XG5cbiAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICA8c3dpcGVyXG4gICAgICB2LWlmPVwiTWVudVN0b3JlLmRhdGFfY2F0ZWdvcnlbc2x1Z11cIlxuICAgICAgOnNsaWRlcy1wZXItdmlldz1cIjIuNVwiXG4gICAgICA6c3BhY2UtYmV0d2Vlbj1cIjEwXCJcbiAgICA+XG4gICAgICA8dGVtcGxhdGUgdi1mb3I9XCJpdGVtcyBpbiBNZW51U3RvcmUuZGF0YV9jYXRlZ29yeVtzbHVnXVwiIDprZXk9XCJpdGVtc1wiPlxuICAgICAgICA8c3dpcGVyLXNsaWRlPlxuICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgOmxhYmVsPVwiaXRlbXMuY2F0ZWdvcnlfbmFtZVwiXG4gICAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgICBjbGFzcz1cImxpbmUtMVwiXG4gICAgICAgICAgICBjb2xvcj1cImdyZXlcIlxuICAgICAgICAgICAgQGNsaWNrPVwidGhpcy4kZW1pdCgnYWZ0ZXJDYXRlZ29yeXNlbGVjdCcsIGl0ZW1zLmNhdGVnb3J5X3VpaWQpXCJcbiAgICAgICAgICA+PC9xLWJ0bj5cbiAgICAgICAgPC9zd2lwZXItc2xpZGU+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvc3dpcGVyPlxuICA8L3RlbXBsYXRlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tIFwic3dpcGVyL3Z1ZVwiO1xuaW1wb3J0IHsgdXNlTWVudVN0b3JlIH0gZnJvbSBcInN0b3Jlcy9NZW51U3RvcmVcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIkNhdGVnb3J5U2xpZGVcIixcbiAgcHJvcHM6IFtcInNsdWdcIl0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBTd2lwZXIsXG4gICAgU3dpcGVyU2xpZGUsXG4gIH0sXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IE1lbnVTdG9yZSA9IHVzZU1lbnVTdG9yZSgpO1xuICAgIHJldHVybiB7IE1lbnVTdG9yZSB9O1xuICB9LFxufTtcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbIl9jcmVhdGVCbG9jayIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfRnJhZ21lbnQiLCJfcmVuZGVyTGlzdCIsIl9jcmVhdGVWTm9kZSIsIl9vcGVuQmxvY2siXSwibWFwcGluZ3MiOiI7Ozs7QUFxQ0EsTUFBSyxZQUFVO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixPQUFPLENBQUMsTUFBTTtBQUFBLEVBQ2QsWUFBWTtBQUFBLElBQ1Y7QUFBQSxJQUNBO0FBQUEsRUFDRDtBQUFBLEVBQ0QsUUFBUTtBQUNOLFVBQU0sWUFBWTtBQUNsQixXQUFPLEVBQUU7RUFDVjtBQUNIOzs7O0FBL0NrQixTQUFBLE9BQUEsVUFBVSw2QkFDeEJBLFlBTVMsbUJBQUE7QUFBQTtJQU5BLG1CQUFpQjtBQUFBLElBQU0saUJBQWU7QUFBQTtxQkFDbkMsTUFBYztBQUFBLG9CQUF4QkMsbUJBSVdDLFVBQUEsTUFBQUMsV0FKVyxHQUFDLENBQU4sTUFBQztBQUNoQixlQUFBQyxZQUVlLGdDQUhjLEVBQUMsR0FBQTtBQUFBLDJCQUU1QixNQUE0QjtBQUFBLFlBQTVCQSxZQUE0QixXQUFBLEVBQUEsUUFBQSxPQUFWLENBQUE7QUFBQTs7Ozs7OzhDQU0xQkgsbUJBbUJXQyxVQUFBLEVBQUEsS0FBQSxFQUFBLEdBQUE7QUFBQSxJQWpCRCxPQUFTLFVBQUMsY0FBYyxPQUFJLHNCQURwQ0YsWUFpQlMsbUJBQUE7QUFBQTtNQWZOLG1CQUFpQjtBQUFBLE1BQ2pCLGlCQUFlO0FBQUE7dUJBRU4sTUFBOEM7QUFBQSxTQUF4REssVUFBQSxJQUFBLEdBQUFKLG1CQVdXQywyQkFYZSxPQUFTLFVBQUMsY0FBYyxPQUFBLFFBQWpDLFVBQUs7QUFDcEIsaUJBQUFHLFVBQUEsR0FBQUwsWUFTZSxnQ0FWOEMsU0FBSztBQUFBLDZCQUVoRSxNQU9TO0FBQUEsY0FQVEksWUFPUyxNQUFBO0FBQUEsZ0JBTlAsTUFBQTtBQUFBLGdCQUNDLE9BQU8sTUFBTTtBQUFBLGdCQUNkLFdBQUE7QUFBQSxnQkFDQSxPQUFNO0FBQUEsZ0JBQ04sT0FBTTtBQUFBLGdCQUNMLFNBQVksWUFBQSxLQUFBLE1BQTZCLHVCQUFBLE1BQU0sYUFBYTtBQUFBOzs7Ozs7Ozs7Ozs7In0=
