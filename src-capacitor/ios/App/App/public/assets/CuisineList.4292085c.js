import { Q as QSkeleton } from "./QSkeleton.39737398.js";
import { _ as _export_sfc, m as APIinterface, n as resolveComponent, p as openBlock, V as createElementBlock, F as Fragment, X as renderList, U as createBaseVNode, f as createVNode, t as withCtx, a8 as QCard, Z as toDisplayString } from "./index.61ed5618.js";
import { Q as QImg } from "./QImg.6c27044c.js";
const _sfc_main = {
  name: "CuisineList",
  props: ["q"],
  data() {
    return {
      data: [],
      loading: false,
      awaitingSearch: false
    };
  },
  mounted() {
    this.CuisineList();
  },
  watch: {
    q(newdata, oldata) {
      if (!this.awaitingSearch) {
        if (typeof this.q === "undefined" || this.q === null || this.q === "" || this.q === "null" || this.q === "undefined") {
          this.CuisineList();
          return false;
        }
        setTimeout(() => {
          APIinterface.CuisineList(0, this.q).then((data) => {
            this.data = data.details.data;
          }).catch((error) => {
            this.data = [];
          }).then((data) => {
            this.awaitingSearch = false;
            this.$emit("onSearch", this.awaitingSearch);
          });
        }, 1e3);
      }
      this.awaitingSearch = true;
      this.$emit("onSearch", this.awaitingSearch);
    }
  },
  methods: {
    CuisineList() {
      this.loading = true;
      APIinterface.CuisineList(0, "").then((data) => {
        this.data = data.details.data;
      }).catch((error) => {
      }).then((data) => {
        this.loading = false;
      });
    }
  }
};
const _hoisted_1 = {
  key: 0,
  class: "row items-center q-col-gutter-sm q-mb-sm"
};
const _hoisted_2 = {
  key: 1,
  class: "row items-center q-col-gutter-sm q-mb-sm"
};
const _hoisted_3 = { class: "text-white absolute-bottom-left q-pl-md text-h6 text-weight-bold q-mb-md line-normal ellipsis" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  return $data.loading ? (openBlock(), createElementBlock("div", _hoisted_1, [
    (openBlock(), createElementBlock(Fragment, null, renderList(21, (i) => {
      return createBaseVNode("div", {
        key: i,
        class: "col-4"
      }, [
        createVNode(QCard, {
          flat: "",
          class: "q-pa-sm relative-position"
        }, {
          default: withCtx(() => [
            createVNode(QSkeleton, {
              height: "90px",
              square: ""
            })
          ]),
          _: 1
        })
      ]);
    }), 64))
  ])) : (openBlock(), createElementBlock("div", _hoisted_2, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($data.data, (items) => {
      return openBlock(), createElementBlock("div", {
        key: items,
        class: "col-4"
      }, [
        createVNode(_component_router_link, {
          to: { name: "quicksearch", query: { q: items.cuisine_name } }
        }, {
          default: withCtx(() => [
            createVNode(QCard, {
              flat: "",
              class: "q-pa-sm relative-position"
            }, {
              default: withCtx(() => [
                createVNode(QImg, {
                  src: items.featured_image,
                  style: { "height": "90px" },
                  lazy: "",
                  fit: "cover",
                  class: "no-border-radius",
                  "spinner-color": "amber",
                  "spinner-size": "sm"
                }, null, 8, ["src"]),
                createBaseVNode("div", _hoisted_3, toDisplayString(items.cuisine_name), 1)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1032, ["to"])
      ]);
    }), 128))
  ]));
}
var CuisineList = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "CuisineList.vue"]]);
export { CuisineList as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3Vpc2luZUxpc3QuNDI5MjA4NWMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0N1aXNpbmVMaXN0LnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cbiAgIDx0ZW1wbGF0ZSB2LWlmPVwibG9hZGluZ1wiPlxuICAgICAgPGRpdiBjbGFzcz1cInJvdyBpdGVtcy1jZW50ZXIgcS1jb2wtZ3V0dGVyLXNtIHEtbWItc21cIj5cbiAgICAgICAgICA8ZGl2IHYtZm9yPVwiaSBpbiAyMVwiIDprZXk9XCJpXCIgY2xhc3M9XCJjb2wtNFwiPlxuICAgICAgICAgICAgICA8cS1jYXJkIGZsYXQgY2xhc3M9XCJxLXBhLXNtIHJlbGF0aXZlLXBvc2l0aW9uXCIgPlxuICAgICAgICAgICAgICAgICA8cS1za2VsZXRvbiBoZWlnaHQ9XCI5MHB4XCIgc3F1YXJlIC8+XG4gICAgICAgICAgICAgIDwvcS1jYXJkPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICA8L3RlbXBsYXRlPlxuXG4gICA8ZGl2IHYtZWxzZSBjbGFzcz1cInJvdyBpdGVtcy1jZW50ZXIgcS1jb2wtZ3V0dGVyLXNtIHEtbWItc21cIj5cbiAgICAgICAgIDxkaXYgdi1mb3I9XCJpdGVtcyBpbiBkYXRhXCIgOmtleT1cIml0ZW1zXCIgY2xhc3M9XCJjb2wtNFwiPlxuICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwie25hbWU6ICdxdWlja3NlYXJjaCcsIHF1ZXJ5OiB7cSA6IGl0ZW1zLmN1aXNpbmVfbmFtZSB9IH1cIiA+XG4gICAgICAgICAgIDxxLWNhcmQgZmxhdCBjbGFzcz1cInEtcGEtc20gcmVsYXRpdmUtcG9zaXRpb25cIiA+XG4gICAgICAgICAgICAgICAgPHEtaW1nXG4gICAgICAgICAgICAgICAgOnNyYz1cIml0ZW1zLmZlYXR1cmVkX2ltYWdlXCJcbiAgICAgICAgICAgICAgICBzdHlsZT1cImhlaWdodDo5MHB4O1wiXG4gICAgICAgICAgICAgICAgbGF6eVxuICAgICAgICAgICAgICAgIGZpdD1cImNvdmVyXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm5vLWJvcmRlci1yYWRpdXNcIlxuICAgICAgICAgICAgICAgIHNwaW5uZXItY29sb3I9XCJhbWJlclwiXG4gICAgICAgICAgICAgICAgc3Bpbm5lci1zaXplPVwic21cIlxuICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXdoaXRlIGFic29sdXRlLWJvdHRvbS1sZWZ0IHEtcGwtbWQgdGV4dC1oNiB0ZXh0LXdlaWdodC1ib2xkIHEtbWItbWQgbGluZS1ub3JtYWwgZWxsaXBzaXNcIj5cbiAgICAgICAgICAgICAgICB7e2l0ZW1zLmN1aXNpbmVfbmFtZX19XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA8L3EtY2FyZD5cbiAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPCEtLSBjb2wgLS0+XG4gICAgIDwvZGl2PlxuICAgICA8IS0tIHJvdyAtLT5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBBUElpbnRlcmZhY2UgZnJvbSAnc3JjL2FwaS9BUElpbnRlcmZhY2UnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ0N1aXNpbmVMaXN0JyxcbiAgcHJvcHM6IFsncSddLFxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogW10sXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIGF3YWl0aW5nU2VhcmNoOiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZCAoKSB7XG4gICAgdGhpcy5DdWlzaW5lTGlzdCgpXG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgcSAobmV3ZGF0YSwgb2xkYXRhKSB7XG4gICAgICBpZiAoIXRoaXMuYXdhaXRpbmdTZWFyY2gpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnEgPT09ICd1bmRlZmluZWQnIHx8IHRoaXMucSA9PT0gbnVsbCB8fCB0aGlzLnEgPT09ICcnIHx8IHRoaXMucSA9PT0gJ251bGwnIHx8IHRoaXMucSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aGlzLkN1aXNpbmVMaXN0KClcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBBUElpbnRlcmZhY2UuQ3Vpc2luZUxpc3QoMCwgdGhpcy5xKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZGF0YSA9IGRhdGEuZGV0YWlscy5kYXRhXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmRhdGEgPSBbXVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmF3YWl0aW5nU2VhcmNoID0gZmFsc2VcbiAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnb25TZWFyY2gnLCB0aGlzLmF3YWl0aW5nU2VhcmNoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSwgMTAwMCkgLy8gMSBzZWMgZGVsYXlcbiAgICAgIH1cbiAgICAgIHRoaXMuYXdhaXRpbmdTZWFyY2ggPSB0cnVlXG4gICAgICB0aGlzLiRlbWl0KCdvblNlYXJjaCcsIHRoaXMuYXdhaXRpbmdTZWFyY2gpXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgQ3Vpc2luZUxpc3QgKCkge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxuICAgICAgQVBJaW50ZXJmYWNlLkN1aXNpbmVMaXN0KDAsICcnKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICB0aGlzLmRhdGEgPSBkYXRhLmRldGFpbHMuZGF0YVxuICAgICAgICB9KVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcblxuICAgICAgICB9KVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICB9KVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfRnJhZ21lbnQiLCJfcmVuZGVyTGlzdCIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfY3JlYXRlVk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7QUF5Q0EsTUFBSyxZQUFVO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixPQUFPLENBQUMsR0FBRztBQUFBLEVBQ1gsT0FBUTtBQUNOLFdBQU87QUFBQSxNQUNMLE1BQU0sQ0FBRTtBQUFBLE1BQ1IsU0FBUztBQUFBLE1BQ1QsZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxFQUNEO0FBQUEsRUFDRCxVQUFXO0FBQ1QsU0FBSyxZQUFZO0FBQUEsRUFDbEI7QUFBQSxFQUNELE9BQU87QUFBQSxJQUNMLEVBQUcsU0FBUyxRQUFRO0FBQ2xCLFVBQUksQ0FBQyxLQUFLLGdCQUFnQjtBQUN4QixZQUFJLE9BQU8sS0FBSyxNQUFNLGVBQWUsS0FBSyxNQUFNLFFBQVEsS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLFVBQVUsS0FBSyxNQUFNLGFBQWE7QUFDcEgsZUFBSyxZQUFZO0FBQ2pCLGlCQUFPO0FBQUEsUUFDVDtBQUNBLG1CQUFXLE1BQU07QUFDZix1QkFBYSxZQUFZLEdBQUcsS0FBSyxDQUFDLEVBQy9CLEtBQUssVUFBUTtBQUNaLGlCQUFLLE9BQU8sS0FBSyxRQUFRO0FBQUEsV0FDMUIsRUFFQSxNQUFNLFdBQVM7QUFDZCxpQkFBSyxPQUFPLENBQUM7QUFBQSxXQUNkLEVBQ0EsS0FBSyxVQUFRO0FBQ1osaUJBQUssaUJBQWlCO0FBQ3RCLGlCQUFLLE1BQU0sWUFBWSxLQUFLLGNBQWM7QUFBQSxXQUMzQztBQUFBLFFBQ0osR0FBRSxHQUFJO0FBQUEsTUFDVDtBQUNBLFdBQUssaUJBQWlCO0FBQ3RCLFdBQUssTUFBTSxZQUFZLEtBQUssY0FBYztBQUFBLElBQzVDO0FBQUEsRUFDRDtBQUFBLEVBQ0QsU0FBUztBQUFBLElBQ1AsY0FBZTtBQUNiLFdBQUssVUFBVTtBQUNmLG1CQUFhLFlBQVksR0FBRyxFQUFFLEVBQzNCLEtBQUssVUFBUTtBQUNaLGFBQUssT0FBTyxLQUFLLFFBQVE7QUFBQSxPQUMxQixFQUVBLE1BQU0sV0FBUztBQUFBLE9BRWYsRUFDQSxLQUFLLFVBQVE7QUFDWixhQUFLLFVBQVU7QUFBQSxPQUNoQjtBQUFBLElBQ0w7QUFBQSxFQUNGO0FBQ0Y7OztFQTdGVyxPQUFNOzs7O0VBU0YsT0FBTTs7QUFjRixNQUFBLGFBQUEsRUFBQSxPQUFNLGdHQUErRjs7O1NBeEJyRyxNQUFPLFdBQ3BCQSxhQUFBQyxtQkFNTSxPQU5OLFlBTU07QUFBQSxrQkFMRkEsbUJBSU1DLFVBQUEsTUFBQUMsV0FKVyxJQUFFLENBQVAsTUFBQzthQUFiQyxnQkFJTSxPQUFBO0FBQUEsUUFKZ0IsS0FBSztBQUFBLFFBQUcsT0FBTTtBQUFBO1FBQ2hDQyxZQUVTLE9BQUE7QUFBQSxVQUZELE1BQUE7QUFBQSxVQUFLLE9BQU07QUFBQTsyQkFDaEIsTUFBbUM7QUFBQSxZQUFuQ0EsWUFBbUMsV0FBQTtBQUFBLGNBQXZCLFFBQU87QUFBQSxjQUFPLFFBQUE7QUFBQTs7Ozs7O1NBTXhDTCxhQUFBQyxtQkFxQlEsT0FyQlIsWUFxQlE7QUFBQSxzQkFwQkZBLG1CQWtCTUMsVUFBQSxNQUFBQyxXQWxCZSxNQUFJLE1BQUEsQ0FBYixVQUFLOzBCQUFqQkYsbUJBa0JNLE9BQUE7QUFBQSxRQWxCc0IsS0FBSztBQUFBLFFBQU8sT0FBTTtBQUFBO1FBQzVDSSxZQWdCYyx3QkFBQTtBQUFBLFVBaEJBLElBQUUsRUFBQSxNQUFBLGVBQUEsT0FBQSxFQUFBLEdBQW9DLE1BQU0sZUFBWTtBQUFBOzJCQUN0RSxNQWNTO0FBQUEsWUFkVEEsWUFjUyxPQUFBO0FBQUEsY0FkRCxNQUFBO0FBQUEsY0FBSyxPQUFNO0FBQUE7K0JBQ2QsTUFRQTtBQUFBLGdCQVJBQSxZQVFBLE1BQUE7QUFBQSxrQkFQQyxLQUFLLE1BQU07QUFBQSxrQkFDWixPQUFBLEVBQW9CLFVBQUEsT0FBQTtBQUFBLGtCQUNwQixNQUFBO0FBQUEsa0JBQ0EsS0FBSTtBQUFBLGtCQUNKLE9BQU07QUFBQSxrQkFDTixpQkFBYztBQUFBLGtCQUNkLGdCQUFhO0FBQUE7Z0JBR2ZELGdCQUVNLE9BRk4sWUFDSUUsZ0JBQUEsTUFBTSxZQUFZLEdBQUEsQ0FBQTtBQUFBOzs7Ozs7Ozs7Ozs7In0=
