import { Q as QImg } from "./QImg.6c27044c.js";
import { S as Swiper, a as SwiperSlide } from "./swiper-slide.8a0c58df.js";
/* empty css                     */import { _ as _export_sfc, n as resolveComponent, p as openBlock, q as createBlock, t as withCtx, V as createElementBlock, X as renderList, U as createBaseVNode, f as createVNode, F as Fragment } from "./index.61ed5618.js";
const _sfc_main = {
  name: "ItemGallery",
  props: ["item_gallery"],
  components: {
    Swiper,
    SwiperSlide
  },
  computed: {
    getData() {
      return this.item_gallery;
    }
  },
  methods: {
    setImage(data) {
      this.$emit("afterSelectimage", data);
    }
  }
};
const _hoisted_1 = ["onClick"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_swiper = resolveComponent("swiper");
  return openBlock(), createBlock(_component_swiper, {
    slidesPerView: 4.2,
    spaceBetween: 5,
    onSwiper: _ctx.onSwiper,
    class: "q-mb-sm"
  }, {
    default: withCtx(() => [
      (openBlock(true), createElementBlock(Fragment, null, renderList($options.getData, (items) => {
        return openBlock(), createBlock(_component_swiper_slide, {
          key: items,
          class: "row"
        }, {
          default: withCtx(() => [
            createBaseVNode("div", {
              class: "radius8 border-grey300 cursor-pointer",
              style: { "height": "55px", "width": "55px", "overflow": "hidden" },
              onClick: ($event) => $options.setImage(items)
            }, [
              createVNode(QImg, {
                src: items,
                "spinner-color": "primary",
                "spinner-size": "sm",
                style: { "height": "55px", "width": "55px" },
                fit: "cover"
              }, null, 8, ["src"])
            ], 8, _hoisted_1)
          ]),
          _: 2
        }, 1024);
      }), 128))
    ]),
    _: 1
  }, 8, ["slidesPerView", "onSwiper"]);
}
var ItemGallery = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "ItemGallery.vue"]]);
export { ItemGallery as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSXRlbUdhbGxlcnkuNGMxNGRiNDYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0l0ZW1HYWxsZXJ5LnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxzd2lwZXJcbiAgICA6c2xpZGVzUGVyVmlldz1cIjQuMlwiXG4gICAgOnNwYWNlQmV0d2Vlbj1cIjVcIlxuICAgIEBzd2lwZXI9XCJvblN3aXBlclwiXG4gICAgY2xhc3M9XCJxLW1iLXNtXCJcbiAgPlxuICAgIDxzd2lwZXItc2xpZGUgdi1mb3I9XCJpdGVtcyBpbiBnZXREYXRhXCIgOmtleT1cIml0ZW1zXCIgY2xhc3M9XCJyb3dcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJyYWRpdXM4IGJvcmRlci1ncmV5MzAwIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDU1cHg7IHdpZHRoOiA1NXB4OyBvdmVyZmxvdzogaGlkZGVuXCJcbiAgICAgICAgQGNsaWNrPVwic2V0SW1hZ2UoaXRlbXMpXCJcbiAgICAgID5cbiAgICAgICAgPHEtaW1nXG4gICAgICAgICAgOnNyYz1cIml0ZW1zXCJcbiAgICAgICAgICBzcGlubmVyLWNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgc3Bpbm5lci1zaXplPVwic21cIlxuICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiA1NXB4OyB3aWR0aDogNTVweFwiXG4gICAgICAgICAgZml0PVwiY292ZXJcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9zd2lwZXItc2xpZGU+XG4gIDwvc3dpcGVyPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tIFwic3dpcGVyL3Z1ZVwiO1xuaW1wb3J0IFwic3dpcGVyL2Nzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiSXRlbUdhbGxlcnlcIixcbiAgcHJvcHM6IFtcIml0ZW1fZ2FsbGVyeVwiXSxcbiAgY29tcG9uZW50czoge1xuICAgIFN3aXBlcixcbiAgICBTd2lwZXJTbGlkZSxcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBnZXREYXRhKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXRlbV9nYWxsZXJ5O1xuICAgIH0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBzZXRJbWFnZShkYXRhKSB7XG4gICAgICB0aGlzLiRlbWl0KFwiYWZ0ZXJTZWxlY3RpbWFnZVwiLCBkYXRhKTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbIl9jcmVhdGVCbG9jayIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfRnJhZ21lbnQiLCJfcmVuZGVyTGlzdCIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfY3JlYXRlVk5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7QUE2QkEsTUFBSyxZQUFVO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixPQUFPLENBQUMsY0FBYztBQUFBLEVBQ3RCLFlBQVk7QUFBQSxJQUNWO0FBQUEsSUFDQTtBQUFBLEVBQ0Q7QUFBQSxFQUNELFVBQVU7QUFBQSxJQUNSLFVBQVU7QUFDUixhQUFPLEtBQUs7QUFBQSxJQUNiO0FBQUEsRUFDRjtBQUFBLEVBQ0QsU0FBUztBQUFBLElBQ1AsU0FBUyxNQUFNO0FBQ2IsV0FBSyxNQUFNLG9CQUFvQixJQUFJO0FBQUEsSUFDcEM7QUFBQSxFQUNGO0FBQ0g7Ozs7O3NCQTdDRUEsWUFxQlMsbUJBQUE7QUFBQSxJQXBCTixlQUFlO0FBQUEsSUFDZixjQUFjO0FBQUEsSUFDZCxVQUFRLEtBQVE7QUFBQSxJQUNqQixPQUFNO0FBQUE7cUJBRVEsTUFBd0I7QUFBQSx3QkFBdENDLG1CQWNlQyxVQUFBLE1BQUFDLFdBZGUsU0FBTyxTQUFBLENBQWhCLFVBQUs7NEJBQTFCSCxZQWNlLHlCQUFBO0FBQUEsVUFkeUIsS0FBSztBQUFBLFVBQU8sT0FBTTtBQUFBOzJCQUN4RCxNQVlNO0FBQUEsWUFaTkksZ0JBWU0sT0FBQTtBQUFBLGNBWEosT0FBTTtBQUFBLGNBQ04sT0FBQSxFQUFtRCxVQUFBLFFBQUEsU0FBQSxRQUFBLFlBQUEsU0FBQTtBQUFBLGNBQ2xELFNBQUssWUFBRSxTQUFRLFNBQUMsS0FBSztBQUFBO2NBRXRCQyxZQU1FLE1BQUE7QUFBQSxnQkFMQyxLQUFLO0FBQUEsZ0JBQ04saUJBQWM7QUFBQSxnQkFDZCxnQkFBYTtBQUFBLGdCQUNiLE9BQUEsRUFBaUMsVUFBQSxRQUFBLFNBQUEsT0FBQTtBQUFBLGdCQUNqQyxLQUFJO0FBQUE7Ozs7Ozs7Ozs7OzsifQ==
