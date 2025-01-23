import { _ as _export_sfc, m as APIinterface, p as openBlock, V as createElementBlock, f as createVNode, t as withCtx, ac as QItem, bg as normalizeProps, bh as guardReactiveProps, ad as QItemSection, at as QIcon, a6 as createTextVNode, Z as toDisplayString, U as createBaseVNode, F as Fragment } from "./index.61ed5618.js";
import { Q as QItemLabel } from "./QItemLabel.a9365c5b.js";
import { Q as QSelect } from "./QSelect.311187d6.js";
import "./QChip.f183a4f1.js";
import "./QMenu.8e482cd8.js";
import "./selection.50b4cb0c.js";
import "./rtl.f3ed811c.js";
import "./format.7f7370d3.js";
const _sfc_main = {
  name: "SearchAddress",
  props: ["placeholder"],
  data() {
    return {
      address: "",
      address_data: [],
      options: [],
      data: [],
      loading: false
    };
  },
  methods: {
    Focus() {
      this.$refs.select_address.focus();
    },
    filterFn(val, update, abort) {
      if (val.length < 2) {
        abort();
        return;
      }
      APIinterface.getlocationAutocomplete(val).then((data) => {
        update(() => {
          this.options = data.details.data;
        });
      }).catch((error) => {
        console.debug(error);
      }).then((data) => {
      });
    },
    selectAddress(val) {
      this.address_data = val;
      this.address = val.description;
      APIinterface.getLocationDetails(val.id).then((data) => {
        const results = data.details.data;
        if (!APIinterface.empty(results.latitude)) {
          this.$emit("afterSelectaddress", results);
        }
      }).catch((error) => {
        APIinterface.notify("negative", error, "error_outline", this.$q);
      }).then((data) => {
      });
    }
  }
};
const _hoisted_1 = {
  class: "flex flex-center q-pa-md text-center",
  style: { "min-height": "300px" }
};
const _hoisted_2 = { class: "text-grey" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(QSelect, {
      modelValue: $data.address,
      "onUpdate:modelValue": [
        _cache[0] || (_cache[0] = ($event) => $data.address = $event),
        $options.selectAddress
      ],
      ref: "select_address",
      "use-input": "",
      "fill-input": "",
      "input-debounce": "0",
      options: $data.options,
      onFilter: $options.filterFn,
      "bg-color": _ctx.$q.dark.mode ? "grey600" : "mygrey",
      color: _ctx.$q.dark.mode ? "grey300" : "dark",
      borderless: "",
      placeholder: $props.placeholder,
      behavior: "menu",
      "hide-dropdown-icon": ""
    }, {
      option: withCtx((scope) => [
        createVNode(QItem, normalizeProps(guardReactiveProps(scope.itemProps)), {
          default: withCtx(() => [
            createVNode(QItemSection, {
              avatar: "",
              top: "",
              style: { "min-width": "auto" },
              class: "q-pr-xs"
            }, {
              default: withCtx(() => [
                createVNode(QIcon, { name: "las la-map-marker" })
              ]),
              _: 1
            }),
            createVNode(QItemSection, null, {
              default: withCtx(() => [
                createVNode(QItemLabel, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(scope.opt.description), 1)
                  ]),
                  _: 2
                }, 1024),
                createVNode(QItemLabel, { caption: "" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(scope.opt.addressLine2), 1)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1040)
      ]),
      prepend: withCtx(() => [
        createVNode(QIcon, {
          name: "las la-arrow-left",
          color: "grey",
          class: "q-pl-sm"
        })
      ]),
      _: 1
    }, 8, ["modelValue", "options", "onFilter", "onUpdate:modelValue", "bg-color", "color", "placeholder"]),
    createBaseVNode("div", _hoisted_1, [
      createBaseVNode("p", _hoisted_2, toDisplayString(_ctx.$t("Enter your address to explore restaurant around you")), 1)
    ])
  ], 64);
}
var SearchAddress = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "SearchAddress.vue"]]);
export { SearchAddress as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoQWRkcmVzcy4zOGJiMTNhZC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQWRkcmVzcy52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8cS1zZWxlY3RcbiAgICB2LW1vZGVsPVwiYWRkcmVzc1wiXG4gICAgcmVmPVwic2VsZWN0X2FkZHJlc3NcIlxuICAgIHVzZS1pbnB1dFxuICAgIGZpbGwtaW5wdXRcbiAgICBpbnB1dC1kZWJvdW5jZT1cIjBcIlxuICAgIDpvcHRpb25zPVwib3B0aW9uc1wiXG4gICAgQGZpbHRlcj1cImZpbHRlckZuXCJcbiAgICBAdXBkYXRlOm1vZGVsLXZhbHVlPVwic2VsZWN0QWRkcmVzc1wiXG4gICAgOmJnLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXk2MDAnIDogJ215Z3JleSdcIlxuICAgIDpjb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICdkYXJrJ1wiXG4gICAgYm9yZGVybGVzc1xuICAgIDpwbGFjZWhvbGRlcj1cInBsYWNlaG9sZGVyXCJcbiAgICBiZWhhdmlvcj1cIm1lbnVcIlxuICAgIGhpZGUtZHJvcGRvd24taWNvblxuICA+XG4gICAgPHRlbXBsYXRlIHYtc2xvdDpvcHRpb249XCJzY29wZVwiPlxuICAgICAgPHEtaXRlbSB2LWJpbmQ9XCJzY29wZS5pdGVtUHJvcHNcIj5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhciB0b3Agc3R5bGU9XCJtaW4td2lkdGg6IGF1dG9cIiBjbGFzcz1cInEtcHIteHNcIj5cbiAgICAgICAgICA8cS1pY29uIG5hbWU9XCJsYXMgbGEtbWFwLW1hcmtlclwiIC8+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1pdGVtLWxhYmVsPnt7IHNjb3BlLm9wdC5kZXNjcmlwdGlvbiB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbj57eyBzY29wZS5vcHQuYWRkcmVzc0xpbmUyIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICA8L3EtaXRlbT5cbiAgICA8L3RlbXBsYXRlPlxuXG4gICAgPHRlbXBsYXRlIHYtc2xvdDpwcmVwZW5kPlxuICAgICAgPHEtaWNvbiBuYW1lPVwibGFzIGxhLWFycm93LWxlZnRcIiBjb2xvcj1cImdyZXlcIiBjbGFzcz1cInEtcGwtc21cIiAvPlxuICAgIDwvdGVtcGxhdGU+XG4gIDwvcS1zZWxlY3Q+XG4gIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY2VudGVyIHEtcGEtbWQgdGV4dC1jZW50ZXJcIiBzdHlsZT1cIm1pbi1oZWlnaHQ6IDMwMHB4XCI+XG4gICAgPHAgY2xhc3M9XCJ0ZXh0LWdyZXlcIj5cbiAgICAgIHt7ICR0KFwiRW50ZXIgeW91ciBhZGRyZXNzIHRvIGV4cGxvcmUgcmVzdGF1cmFudCBhcm91bmQgeW91XCIpIH19XG4gICAgPC9wPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgQVBJaW50ZXJmYWNlIGZyb20gXCJzcmMvYXBpL0FQSWludGVyZmFjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiU2VhcmNoQWRkcmVzc1wiLFxuICBwcm9wczogW1wicGxhY2Vob2xkZXJcIl0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFkZHJlc3M6IFwiXCIsXG4gICAgICBhZGRyZXNzX2RhdGE6IFtdLFxuICAgICAgb3B0aW9uczogW10sXG4gICAgICBkYXRhOiBbXSxcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIH07XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBGb2N1cygpIHtcbiAgICAgIHRoaXMuJHJlZnMuc2VsZWN0X2FkZHJlc3MuZm9jdXMoKTtcbiAgICB9LFxuICAgIGZpbHRlckZuKHZhbCwgdXBkYXRlLCBhYm9ydCkge1xuICAgICAgaWYgKHZhbC5sZW5ndGggPCAyKSB7XG4gICAgICAgIGFib3J0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgQVBJaW50ZXJmYWNlLmdldGxvY2F0aW9uQXV0b2NvbXBsZXRlKHZhbClcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB1cGRhdGUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gZGF0YS5kZXRhaWxzLmRhdGE7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmRlYnVnKGVycm9yKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHt9KTtcbiAgICB9LFxuICAgIHNlbGVjdEFkZHJlc3ModmFsKSB7XG4gICAgICB0aGlzLmFkZHJlc3NfZGF0YSA9IHZhbDtcbiAgICAgIHRoaXMuYWRkcmVzcyA9IHZhbC5kZXNjcmlwdGlvbjtcbiAgICAgIEFQSWludGVyZmFjZS5nZXRMb2NhdGlvbkRldGFpbHModmFsLmlkKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSBkYXRhLmRldGFpbHMuZGF0YTtcbiAgICAgICAgICBpZiAoIUFQSWludGVyZmFjZS5lbXB0eShyZXN1bHRzLmxhdGl0dWRlKSkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdChcImFmdGVyU2VsZWN0YWRkcmVzc1wiLCByZXN1bHRzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBBUElpbnRlcmZhY2Uubm90aWZ5KFwibmVnYXRpdmVcIiwgZXJyb3IsIFwiZXJyb3Jfb3V0bGluZVwiLCB0aGlzLiRxKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHt9KTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbIl9jcmVhdGVWTm9kZSIsIl93aXRoQ3R4IiwiX25vcm1hbGl6ZVByb3BzIiwiX2d1YXJkUmVhY3RpdmVQcm9wcyIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQTJDQSxNQUFLLFlBQVU7QUFBQSxFQUNiLE1BQU07QUFBQSxFQUNOLE9BQU8sQ0FBQyxhQUFhO0FBQUEsRUFDckIsT0FBTztBQUNMLFdBQU87QUFBQSxNQUNMLFNBQVM7QUFBQSxNQUNULGNBQWMsQ0FBRTtBQUFBLE1BQ2hCLFNBQVMsQ0FBRTtBQUFBLE1BQ1gsTUFBTSxDQUFFO0FBQUEsTUFDUixTQUFTO0FBQUE7RUFFWjtBQUFBLEVBQ0QsU0FBUztBQUFBLElBQ1AsUUFBUTtBQUNOLFdBQUssTUFBTSxlQUFlO0lBQzNCO0FBQUEsSUFDRCxTQUFTLEtBQUssUUFBUSxPQUFPO0FBQzNCLFVBQUksSUFBSSxTQUFTLEdBQUc7QUFDbEI7QUFDQTtBQUFBLE1BQ0Y7QUFFQSxtQkFBYSx3QkFBd0IsR0FBRyxFQUNyQyxLQUFLLENBQUMsU0FBUztBQUNkLGVBQU8sTUFBTTtBQUNYLGVBQUssVUFBVSxLQUFLLFFBQVE7QUFBQSxRQUM5QixDQUFDO0FBQUEsT0FDRixFQUNBLE1BQU0sQ0FBQyxVQUFVO0FBQ2hCLGdCQUFRLE1BQU0sS0FBSztBQUFBLE9BQ3BCLEVBQ0EsS0FBSyxDQUFDLFNBQVM7QUFBQSxNQUFBLENBQUU7QUFBQSxJQUNyQjtBQUFBLElBQ0QsY0FBYyxLQUFLO0FBQ2pCLFdBQUssZUFBZTtBQUNwQixXQUFLLFVBQVUsSUFBSTtBQUNuQixtQkFBYSxtQkFBbUIsSUFBSSxFQUFFLEVBQ25DLEtBQUssQ0FBQyxTQUFTO0FBQ2QsY0FBTSxVQUFVLEtBQUssUUFBUTtBQUM3QixZQUFJLENBQUMsYUFBYSxNQUFNLFFBQVEsUUFBUSxHQUFHO0FBQ3pDLGVBQUssTUFBTSxzQkFBc0IsT0FBTztBQUFBLFFBQzFDO0FBQUEsT0FDRCxFQUNBLE1BQU0sQ0FBQyxVQUFVO0FBQ2hCLHFCQUFhLE9BQU8sWUFBWSxPQUFPLGlCQUFpQixLQUFLLEVBQUU7QUFBQSxPQUNoRSxFQUNBLEtBQUssQ0FBQyxTQUFTO0FBQUEsTUFBQSxDQUFFO0FBQUEsSUFDckI7QUFBQSxFQUNGO0FBQ0g7O0VBM0RPLE9BQU07QUFBQSxFQUF1QyxPQUFBLEVBQXlCLGNBQUEsUUFBQTs7QUFDdEUsTUFBQSxhQUFBLEVBQUEsT0FBTSxZQUFXOzs7SUFqQ3RCQSxZQStCVyxTQUFBO0FBQUEsa0JBOUJBLE1BQU87QUFBQTs4Q0FBUCxNQUFPLFVBQUE7QUFBQSxRQU9LLFNBQWE7QUFBQTtNQU5sQyxLQUFJO0FBQUEsTUFDSixhQUFBO0FBQUEsTUFDQSxjQUFBO0FBQUEsTUFDQSxrQkFBZTtBQUFBLE1BQ2QsU0FBUyxNQUFPO0FBQUEsTUFDaEIsVUFBUSxTQUFRO0FBQUEsTUFFaEIsWUFBVSxLQUFBLEdBQUcsS0FBSyxPQUFJLFlBQUE7QUFBQSxNQUN0QixPQUFPLEtBQUEsR0FBRyxLQUFLLE9BQUksWUFBQTtBQUFBLE1BQ3BCLFlBQUE7QUFBQSxNQUNDLGFBQWEsT0FBVztBQUFBLE1BQ3pCLFVBQVM7QUFBQSxNQUNULHNCQUFBO0FBQUE7TUFFaUIsUUFBTUMsUUFDckIsQ0FRUyxVQVRtQjtBQUFBLFFBQzVCRCxZQVFTLE9BQUFFLGVBQUFDLG1CQUFBLE1BQUEsU0FSWSxDQUFBLEdBQVU7QUFBQSwyQkFDN0IsTUFFaUI7QUFBQSxZQUZqQkgsWUFFaUIsY0FBQTtBQUFBLGNBRkQsUUFBQTtBQUFBLGNBQU8sS0FBQTtBQUFBLGNBQUksT0FBQSxFQUF1QixhQUFBLE9BQUE7QUFBQSxjQUFDLE9BQU07QUFBQTsrQkFDdkQsTUFBbUM7QUFBQSxnQkFBbkNBLFlBQW1DLE9BQUEsRUFBQSxNQUFBLG9CQUFILENBQUE7QUFBQTs7O1lBRWxDQSxZQUdpQixjQUFBLE1BQUE7QUFBQSwrQkFGZixNQUF3RDtBQUFBLGdCQUF4REEsWUFBd0QsWUFBQSxNQUFBO0FBQUEsbUNBQTFDLE1BQTJCO0FBQUEsb0RBQXhCLE1BQU0sSUFBSSxXQUFXLEdBQUEsQ0FBQTtBQUFBOzs7Z0JBQ3RDQSxZQUFpRSxZQUFBLEVBQUEsU0FBQSxHQUFBLEdBQTVDO0FBQUEsbUNBQUMsTUFBNEI7QUFBQSxvREFBekIsTUFBTSxJQUFJLFlBQVksR0FBQSxDQUFBO0FBQUE7Ozs7Ozs7Ozs7TUFLcEMsaUJBQ2YsTUFBZ0U7QUFBQSxRQUFoRUEsWUFBZ0UsT0FBQTtBQUFBLFVBQXhELE1BQUs7QUFBQSxVQUFvQixPQUFNO0FBQUEsVUFBTyxPQUFNO0FBQUE7Ozs7SUFHeERJLGdCQUlNLE9BSk4sWUFJTTtBQUFBLE1BSEpBLGdCQUVJLEtBRkosWUFFSUMsZ0JBREMsS0FBRSxHQUFBLHFEQUFBLENBQUEsR0FBQSxDQUFBO0FBQUE7Ozs7OyJ9
