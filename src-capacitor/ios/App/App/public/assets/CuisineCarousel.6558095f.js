import { Q as QSkeleton } from "./QSkeleton.39737398.js";
import { _ as _export_sfc, R as useDataStore, m as APIinterface, n as resolveComponent, p as openBlock, V as createElementBlock, F as Fragment, X as renderList, U as createBaseVNode, f as createVNode, q as createBlock, t as withCtx, ae as QAvatar, Z as toDisplayString, Y as QBtn, aA as createCommentVNode } from "./index.61ed5618.js";
import { S as Swiper, a as SwiperSlide } from "./swiper-slide.8a0c58df.js";
/* empty css                     */const _sfc_main = {
  name: "CuisineCarousel",
  props: ["design"],
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const DataStore = useDataStore();
    return { DataStore };
  },
  data() {
    return {
      slide: 0,
      data: [],
      loading: true
    };
  },
  mounted() {
    if (!this.DataStore.hasDataCuisine()) {
      this.DataStore.CuisineList();
    }
  },
  methods: {
    CuisineList() {
      this.loading = true;
      APIinterface.CuisineList(4, "").then((data) => {
        this.data = data.details.data;
        this.$emit("afterGetdata", data.details.data_raw);
      }).catch((error) => {
        APIinterface.notify("red-5", error, "error_outline", this.$q);
      }).then((data) => {
        this.loading = false;
      });
    }
  }
};
const _hoisted_1 = {
  key: 0,
  class: "row q-gutter-sm items-center"
};
const _hoisted_2 = { class: "row items-center no-wrap full-width" };
const _hoisted_3 = ["src"];
const _hoisted_4 = {
  class: "text-center ellipsis font13 q-pl-sm",
  style: { "max-width": "70px" }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_swiper = resolveComponent("swiper");
  return $setup.DataStore.loading_cuisine ? (openBlock(), createElementBlock("div", _hoisted_1, [
    (openBlock(), createElementBlock(Fragment, null, renderList(3, (i) => {
      return createBaseVNode("div", {
        key: i,
        class: "col"
      }, [
        createVNode(QSkeleton, {
          type: "QBtn",
          class: "full-width",
          height: "50px"
        })
      ]);
    }), 64))
  ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
    $setup.DataStore.cuisine ? (openBlock(), createBlock(_component_swiper, {
      key: 0,
      slidesPerView: 2.3,
      spaceBetween: 10,
      onSwiper: _ctx.onSwiper,
      class: "q-mb-md"
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.DataStore.cuisine, (items, key) => {
          return openBlock(), createBlock(_component_swiper_slide, {
            key: items,
            class: "row"
          }, {
            default: withCtx(() => [
              createVNode(QBtn, {
                color: key <= 0 ? "primary" : _ctx.$q.dark.mode ? "grey600" : "mygrey",
                unelevated: "",
                "no-caps": "",
                "text-color": key <= 0 ? "white" : _ctx.$q.dark.mode ? "grey300" : "dark",
                class: "radius8 fit q-pa-sm",
                size: "sm",
                to: {
                  name: "feed",
                  query: {
                    query: "all",
                    cuisine_id: items.cuisine_id,
                    cuisine_name: items.cuisine_name
                  }
                }
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_2, [
                    createVNode(QAvatar, { size: "30px" }, {
                      default: withCtx(() => [
                        createBaseVNode("img", {
                          src: items.url_icon
                        }, null, 8, _hoisted_3)
                      ]),
                      _: 2
                    }, 1024),
                    createBaseVNode("div", _hoisted_4, toDisplayString(items.cuisine_name), 1)
                  ])
                ]),
                _: 2
              }, 1032, ["color", "text-color", "to"])
            ]),
            _: 2
          }, 1024);
        }), 128))
      ]),
      _: 1
    }, 8, ["slidesPerView", "onSwiper"])) : createCommentVNode("", true)
  ], 64));
}
var CuisineCarousel = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "CuisineCarousel.vue"]]);
export { CuisineCarousel as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3Vpc2luZUNhcm91c2VsLjY1NTgwOTVmLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9DdWlzaW5lQ2Fyb3VzZWwudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiB2LWlmPVwiRGF0YVN0b3JlLmxvYWRpbmdfY3Vpc2luZVwiIGNsYXNzPVwicm93IHEtZ3V0dGVyLXNtIGl0ZW1zLWNlbnRlclwiPlxuICAgIDxkaXYgdi1mb3I9XCJpIGluIDNcIiA6a2V5PVwiaVwiIGNsYXNzPVwiY29sXCI+XG4gICAgICA8cS1za2VsZXRvbiB0eXBlPVwiUUJ0blwiIGNsYXNzPVwiZnVsbC13aWR0aFwiIGhlaWdodD1cIjUwcHhcIiAvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICA8c3dpcGVyXG4gICAgICB2LWlmPVwiRGF0YVN0b3JlLmN1aXNpbmVcIlxuICAgICAgOnNsaWRlc1BlclZpZXc9XCIyLjNcIlxuICAgICAgOnNwYWNlQmV0d2Vlbj1cIjEwXCJcbiAgICAgIEBzd2lwZXI9XCJvblN3aXBlclwiXG4gICAgICBjbGFzcz1cInEtbWItbWRcIlxuICAgID5cbiAgICAgIDxzd2lwZXItc2xpZGVcbiAgICAgICAgdi1mb3I9XCIoaXRlbXMsIGtleSkgaW4gRGF0YVN0b3JlLmN1aXNpbmVcIlxuICAgICAgICA6a2V5PVwiaXRlbXNcIlxuICAgICAgICBjbGFzcz1cInJvd1wiXG4gICAgICA+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIDpjb2xvcj1cImtleSA8PSAwID8gJ3ByaW1hcnknIDogJHEuZGFyay5tb2RlID8gJ2dyZXk2MDAnIDogJ215Z3JleSdcIlxuICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgOnRleHQtY29sb3I9XCJrZXkgPD0gMCA/ICd3aGl0ZScgOiAkcS5kYXJrLm1vZGUgPyAnZ3JleTMwMCcgOiAnZGFyaydcIlxuICAgICAgICAgIGNsYXNzPVwicmFkaXVzOCBmaXQgcS1wYS1zbVwiXG4gICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICA6dG89XCJ7XG4gICAgICAgICAgICBuYW1lOiAnZmVlZCcsXG4gICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICBxdWVyeTogJ2FsbCcsXG4gICAgICAgICAgICAgIGN1aXNpbmVfaWQ6IGl0ZW1zLmN1aXNpbmVfaWQsXG4gICAgICAgICAgICAgIGN1aXNpbmVfbmFtZTogaXRlbXMuY3Vpc2luZV9uYW1lLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgaXRlbXMtY2VudGVyIG5vLXdyYXAgZnVsbC13aWR0aFwiPlxuICAgICAgICAgICAgPHEtYXZhdGFyIHNpemU9XCIzMHB4XCI+XG4gICAgICAgICAgICAgIDxpbWcgOnNyYz1cIml0ZW1zLnVybF9pY29uXCIgLz5cbiAgICAgICAgICAgIDwvcS1hdmF0YXI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1jZW50ZXIgZWxsaXBzaXMgZm9udDEzIHEtcGwtc21cIlxuICAgICAgICAgICAgICBzdHlsZT1cIm1heC13aWR0aDogNzBweFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt7IGl0ZW1zLmN1aXNpbmVfbmFtZSB9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvcS1idG4+XG4gICAgICA8L3N3aXBlci1zbGlkZT5cbiAgICA8L3N3aXBlcj5cbiAgPC90ZW1wbGF0ZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSBcInN3aXBlci92dWVcIjtcbmltcG9ydCBcInN3aXBlci9jc3NcIjtcbmltcG9ydCBBUElpbnRlcmZhY2UgZnJvbSBcInNyYy9hcGkvQVBJaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyB1c2VEYXRhU3RvcmUgfSBmcm9tIFwic3RvcmVzL0RhdGFTdG9yZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiQ3Vpc2luZUNhcm91c2VsXCIsXG4gIHByb3BzOiBbXCJkZXNpZ25cIl0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBTd2lwZXIsXG4gICAgU3dpcGVyU2xpZGUsXG4gIH0sXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IERhdGFTdG9yZSA9IHVzZURhdGFTdG9yZSgpO1xuICAgIHJldHVybiB7IERhdGFTdG9yZSB9O1xuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzbGlkZTogMCxcbiAgICAgIGRhdGE6IFtdLFxuICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICB9O1xuICB9LFxuICBtb3VudGVkKCkge1xuICAgIGlmICghdGhpcy5EYXRhU3RvcmUuaGFzRGF0YUN1aXNpbmUoKSkge1xuICAgICAgdGhpcy5EYXRhU3RvcmUuQ3Vpc2luZUxpc3QoKTtcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBDdWlzaW5lTGlzdCgpIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICBBUElpbnRlcmZhY2UuQ3Vpc2luZUxpc3QoNCwgXCJcIilcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmRhdGEgPSBkYXRhLmRldGFpbHMuZGF0YTtcbiAgICAgICAgICB0aGlzLiRlbWl0KFwiYWZ0ZXJHZXRkYXRhXCIsIGRhdGEuZGV0YWlscy5kYXRhX3Jhdyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBBUElpbnRlcmZhY2Uubm90aWZ5KFwicmVkLTVcIiwgZXJyb3IsIFwiZXJyb3Jfb3V0bGluZVwiLCB0aGlzLiRxKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfb3BlbkJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9GcmFnbWVudCIsIl9yZW5kZXJMaXN0IiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9jcmVhdGVWTm9kZSIsIl9jcmVhdGVCbG9jayIsIl90b0Rpc3BsYXlTdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7QUEwREEsTUFBSyxZQUFVO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixPQUFPLENBQUMsUUFBUTtBQUFBLEVBQ2hCLFlBQVk7QUFBQSxJQUNWO0FBQUEsSUFDQTtBQUFBLEVBQ0Q7QUFBQSxFQUNELFFBQVE7QUFDTixVQUFNLFlBQVk7QUFDbEIsV0FBTyxFQUFFO0VBQ1Y7QUFBQSxFQUNELE9BQU87QUFDTCxXQUFPO0FBQUEsTUFDTCxPQUFPO0FBQUEsTUFDUCxNQUFNLENBQUU7QUFBQSxNQUNSLFNBQVM7QUFBQTtFQUVaO0FBQUEsRUFDRCxVQUFVO0FBQ1IsUUFBSSxDQUFDLEtBQUssVUFBVSxrQkFBa0I7QUFDcEMsV0FBSyxVQUFVO0lBQ2pCO0FBQUEsRUFDRDtBQUFBLEVBQ0QsU0FBUztBQUFBLElBQ1AsY0FBYztBQUNaLFdBQUssVUFBVTtBQUNmLG1CQUFhLFlBQVksR0FBRyxFQUFFLEVBQzNCLEtBQUssQ0FBQyxTQUFTO0FBQ2QsYUFBSyxPQUFPLEtBQUssUUFBUTtBQUN6QixhQUFLLE1BQU0sZ0JBQWdCLEtBQUssUUFBUSxRQUFRO0FBQUEsT0FDakQsRUFDQSxNQUFNLENBQUMsVUFBVTtBQUNoQixxQkFBYSxPQUFPLFNBQVMsT0FBTyxpQkFBaUIsS0FBSyxFQUFFO0FBQUEsT0FDN0QsRUFDQSxLQUFLLENBQUMsU0FBUztBQUNkLGFBQUssVUFBVTtBQUFBLE1BQ2pCLENBQUM7QUFBQSxJQUNKO0FBQUEsRUFDRjtBQUNIOzs7RUFoR3dDLE9BQU07O0FBa0MvQixNQUFBLGFBQUEsRUFBQSxPQUFNLHNDQUFxQzs7O0VBSzVDLE9BQU07QUFBQSxFQUNOLE9BQUEsRUFBdUIsYUFBQSxPQUFBOzs7OztBQXhDeEIsU0FBQSxPQUFBLFVBQVUsbUJBQXJCQSxhQUFBQyxtQkFJTSxPQUpOLFlBSU07QUFBQSxrQkFISkEsbUJBRU1DLFVBQUEsTUFBQUMsV0FGVyxHQUFDLENBQU4sTUFBQzthQUFiQyxnQkFFTSxPQUFBO0FBQUEsUUFGZSxLQUFLO0FBQUEsUUFBRyxPQUFNO0FBQUE7UUFDakNDLFlBQTJELFdBQUE7QUFBQSxVQUEvQyxNQUFLO0FBQUEsVUFBTyxPQUFNO0FBQUEsVUFBYSxRQUFPO0FBQUE7OztzQkFHdERKLG1CQTJDV0MsVUFBQSxFQUFBLEtBQUEsRUFBQSxHQUFBO0FBQUEsSUF6Q0QsT0FBQSxVQUFVLHdCQURsQkksWUF5Q1MsbUJBQUE7QUFBQTtNQXZDTixlQUFlO0FBQUEsTUFDZixjQUFjO0FBQUEsTUFDZCxVQUFRLEtBQVE7QUFBQSxNQUNqQixPQUFNO0FBQUE7dUJBR0osTUFBeUM7QUFBQSxTQUQzQ04sVUFBQSxJQUFBLEdBQUFDLG1CQWlDZUMsMkJBaENVLE9BQVMsVUFBQyxTQUF6QixDQUFBLE9BQU8sUUFBRzs4QkFEcEJJLFlBaUNlLHlCQUFBO0FBQUEsWUEvQlosS0FBSztBQUFBLFlBQ04sT0FBTTtBQUFBOzZCQUVOLE1BMkJRO0FBQUEsY0EzQlJELFlBMkJRLE1BQUE7QUFBQSxnQkExQkwsT0FBTyxPQUFHLElBQUEsWUFBb0IsUUFBRyxLQUFLLE9BQUksWUFBQTtBQUFBLGdCQUMzQyxZQUFBO0FBQUEsZ0JBQ0EsV0FBQTtBQUFBLGdCQUNDLGNBQVksT0FBRyxJQUFBLFVBQWtCLFFBQUcsS0FBSyxPQUFJLFlBQUE7QUFBQSxnQkFDOUMsT0FBTTtBQUFBLGdCQUNOLE1BQUs7QUFBQSxnQkFDSixJQUFFO0FBQUE7OztvQkFBeUcsWUFBQSxNQUFNO0FBQUEsb0JBQXdDLGNBQUEsTUFBTTtBQUFBOzs7aUNBU2hLLE1BVU07QUFBQSxrQkFWTkQsZ0JBVU0sT0FWTixZQVVNO0FBQUEsb0JBVEpDLFlBRVcsU0FBQSxFQUFBLE1BQUEsT0FGRCxHQUFJO0FBQUEsdUNBQ1osTUFBNkI7QUFBQSx3QkFBN0JELGdCQUE2QixPQUFBO0FBQUEsMEJBQXZCLEtBQUssTUFBTTtBQUFBOzs7O29CQUVuQkEsZ0JBS00sT0FMTixZQUlLRyxnQkFBQSxNQUFNLFlBQVksR0FBQSxDQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7OzsifQ==
