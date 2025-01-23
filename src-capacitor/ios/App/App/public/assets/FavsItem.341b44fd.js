import { _ as _export_sfc, aw as auth, m as APIinterface, p as openBlock, V as createElementBlock, q as createBlock, Y as QBtn, aA as createCommentVNode, F as Fragment } from "./index.61ed5618.js";
const _sfc_main = {
  name: "FavsItem",
  props: ["layout", "item_token", "cat_id", "active", "size", "data"],
  data() {
    return {
      loading: false
    };
  },
  methods: {
    addTofav() {
      if (auth.authenticated()) {
        this.loading = true;
        APIinterface.addTofav(this.item_token, this.cat_id).then((data) => {
          this.$emit("afterSavefav", this.data, data.details.found);
        }).catch((error) => {
          APIinterface.notify("grey-5", error, "error_outline", this.$q);
        }).then((data) => {
          this.loading = false;
        });
      } else {
        APIinterface.notify(
          "dark",
          "Login to save this to your favorites",
          "eva-info-outline",
          this.$q
        );
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.active ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
    $props.layout === 1 ? (openBlock(), createBlock(QBtn, {
      key: 0,
      onClick: _cache[0] || (_cache[0] = ($event) => $options.addTofav()),
      round: "",
      color: "transparent",
      "text-color": "primary",
      size: "md",
      icon: "favorite_border",
      loading: $data.loading,
      unelevated: ""
    }, null, 8, ["loading"])) : $props.layout === 2 ? (openBlock(), createBlock(QBtn, {
      key: 1,
      onClick: _cache[1] || (_cache[1] = ($event) => $options.addTofav()),
      loading: $data.loading,
      unelevated: "",
      round: "",
      color: "primary",
      "text-color": "white",
      icon: "favorite_border",
      size: "sm",
      dense: ""
    }, null, 8, ["loading"])) : $props.layout === 3 ? (openBlock(), createBlock(QBtn, {
      key: 2,
      onClick: _cache[2] || (_cache[2] = ($event) => $options.addTofav()),
      loading: $data.loading,
      round: "",
      unelevated: "",
      color: "primary",
      "text-color": "mygrey",
      size: "sm",
      icon: "favorite_border"
    }, null, 8, ["loading"])) : createCommentVNode("", true)
  ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
    $props.layout === 1 ? (openBlock(), createBlock(QBtn, {
      key: 0,
      onClick: _cache[3] || (_cache[3] = ($event) => $options.addTofav()),
      round: "",
      color: "transparent",
      "text-color": "grey-5",
      size: "md",
      icon: "favorite_border",
      loading: $data.loading,
      unelevated: ""
    }, null, 8, ["loading"])) : $props.layout === 2 ? (openBlock(), createBlock(QBtn, {
      key: 1,
      onClick: _cache[4] || (_cache[4] = ($event) => $options.addTofav()),
      loading: $data.loading,
      round: "",
      unelevated: "",
      color: "lightprimary",
      "text-color": "primary",
      size: "sm",
      icon: "favorite_border"
    }, null, 8, ["loading"])) : $props.layout === 3 ? (openBlock(), createBlock(QBtn, {
      key: 2,
      onClick: _cache[5] || (_cache[5] = ($event) => $options.addTofav()),
      loading: $data.loading,
      round: "",
      unelevated: "",
      color: "mygrey",
      "text-color": "dark",
      size: "sm",
      icon: "favorite_border"
    }, null, 8, ["loading"])) : createCommentVNode("", true)
  ], 64));
}
var FavsItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "FavsItem.vue"]]);
export { FavsItem as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmF2c0l0ZW0uMzQxYjQ0ZmQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0ZhdnNJdGVtLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDx0ZW1wbGF0ZSB2LWlmPVwiYWN0aXZlXCI+XG4gICAgPHRlbXBsYXRlIHYtaWY9XCJsYXlvdXQgPT09IDFcIj5cbiAgICAgIDxxLWJ0blxuICAgICAgICBAY2xpY2s9XCJhZGRUb2ZhdigpXCJcbiAgICAgICAgcm91bmRcbiAgICAgICAgY29sb3I9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgIHRleHQtY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgaWNvbj1cImZhdm9yaXRlX2JvcmRlclwiXG4gICAgICAgIDpsb2FkaW5nPVwibG9hZGluZ1wiXG4gICAgICAgIHVuZWxldmF0ZWRcbiAgICAgIC8+XG4gICAgPC90ZW1wbGF0ZT5cbiAgICA8dGVtcGxhdGUgdi1lbHNlLWlmPVwibGF5b3V0ID09PSAyXCI+XG4gICAgICA8cS1idG5cbiAgICAgICAgQGNsaWNrPVwiYWRkVG9mYXYoKVwiXG4gICAgICAgIDpsb2FkaW5nPVwibG9hZGluZ1wiXG4gICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgcm91bmRcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgdGV4dC1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgaWNvbj1cImZhdm9yaXRlX2JvcmRlclwiXG4gICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgIGRlbnNlXG4gICAgICAvPlxuICAgIDwvdGVtcGxhdGU+XG4gICAgPHRlbXBsYXRlIHYtZWxzZS1pZj1cImxheW91dCA9PT0gM1wiPlxuICAgICAgPHEtYnRuXG4gICAgICAgIEBjbGljaz1cImFkZFRvZmF2KClcIlxuICAgICAgICA6bG9hZGluZz1cImxvYWRpbmdcIlxuICAgICAgICByb3VuZFxuICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgIHRleHQtY29sb3I9XCJteWdyZXlcIlxuICAgICAgICBzaXplPVwic21cIlxuICAgICAgICBpY29uPVwiZmF2b3JpdGVfYm9yZGVyXCJcbiAgICAgIC8+XG4gICAgPC90ZW1wbGF0ZT5cbiAgPC90ZW1wbGF0ZT5cbiAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICA8dGVtcGxhdGUgdi1pZj1cImxheW91dCA9PT0gMVwiPlxuICAgICAgPHEtYnRuXG4gICAgICAgIEBjbGljaz1cImFkZFRvZmF2KClcIlxuICAgICAgICByb3VuZFxuICAgICAgICBjb2xvcj1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgdGV4dC1jb2xvcj1cImdyZXktNVwiXG4gICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgIGljb249XCJmYXZvcml0ZV9ib3JkZXJcIlxuICAgICAgICA6bG9hZGluZz1cImxvYWRpbmdcIlxuICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAvPlxuICAgIDwvdGVtcGxhdGU+XG4gICAgPHRlbXBsYXRlIHYtZWxzZS1pZj1cImxheW91dCA9PT0gMlwiPlxuICAgICAgPHEtYnRuXG4gICAgICAgIEBjbGljaz1cImFkZFRvZmF2KClcIlxuICAgICAgICA6bG9hZGluZz1cImxvYWRpbmdcIlxuICAgICAgICByb3VuZFxuICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgIGNvbG9yPVwibGlnaHRwcmltYXJ5XCJcbiAgICAgICAgdGV4dC1jb2xvcj1cInByaW1hcnlcIlxuICAgICAgICBzaXplPVwic21cIlxuICAgICAgICBpY29uPVwiZmF2b3JpdGVfYm9yZGVyXCJcbiAgICAgIC8+XG4gICAgPC90ZW1wbGF0ZT5cbiAgICA8dGVtcGxhdGUgdi1lbHNlLWlmPVwibGF5b3V0ID09PSAzXCI+XG4gICAgICA8cS1idG5cbiAgICAgICAgQGNsaWNrPVwiYWRkVG9mYXYoKVwiXG4gICAgICAgIDpsb2FkaW5nPVwibG9hZGluZ1wiXG4gICAgICAgIHJvdW5kXG4gICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgY29sb3I9XCJteWdyZXlcIlxuICAgICAgICB0ZXh0LWNvbG9yPVwiZGFya1wiXG4gICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgIGljb249XCJmYXZvcml0ZV9ib3JkZXJcIlxuICAgICAgLz5cbiAgICA8L3RlbXBsYXRlPlxuICA8L3RlbXBsYXRlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBBUElpbnRlcmZhY2UgZnJvbSBcInNyYy9hcGkvQVBJaW50ZXJmYWNlXCI7XG5pbXBvcnQgYXV0aCBmcm9tIFwic3JjL2FwaS9hdXRoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJGYXZzSXRlbVwiLFxuICBwcm9wczogW1wibGF5b3V0XCIsIFwiaXRlbV90b2tlblwiLCBcImNhdF9pZFwiLCBcImFjdGl2ZVwiLCBcInNpemVcIiwgXCJkYXRhXCJdLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICB9O1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYWRkVG9mYXYoKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICAgICAgaWYgKGF1dGguYXV0aGVudGljYXRlZCgpKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIEFQSWludGVyZmFjZS5hZGRUb2Zhdih0aGlzLml0ZW1fdG9rZW4sIHRoaXMuY2F0X2lkKVxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KFwiYWZ0ZXJTYXZlZmF2XCIsIHRoaXMuZGF0YSwgZGF0YS5kZXRhaWxzLmZvdW5kKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJncmV5LTVcIiwgZXJyb3IsIFwiZXJyb3Jfb3V0bGluZVwiLCB0aGlzLiRxKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXG4gICAgICAgICAgXCJkYXJrXCIsXG4gICAgICAgICAgXCJMb2dpbiB0byBzYXZlIHRoaXMgdG8geW91ciBmYXZvcml0ZXNcIixcbiAgICAgICAgICBcImV2YS1pbmZvLW91dGxpbmVcIixcbiAgICAgICAgICB0aGlzLiRxXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX0ZyYWdtZW50IiwiX2NyZWF0ZUJsb2NrIl0sIm1hcHBpbmdzIjoiO0FBb0ZBLE1BQUssWUFBVTtBQUFBLEVBQ2IsTUFBTTtBQUFBLEVBQ04sT0FBTyxDQUFDLFVBQVUsY0FBYyxVQUFVLFVBQVUsUUFBUSxNQUFNO0FBQUEsRUFDbEUsT0FBTztBQUNMLFdBQU87QUFBQSxNQUNMLFNBQVM7QUFBQTtFQUVaO0FBQUEsRUFDRCxTQUFTO0FBQUEsSUFDUCxXQUFXO0FBRVQsVUFBSSxLQUFLLGlCQUFpQjtBQUN4QixhQUFLLFVBQVU7QUFDZixxQkFBYSxTQUFTLEtBQUssWUFBWSxLQUFLLE1BQU0sRUFDL0MsS0FBSyxDQUFDLFNBQVM7QUFDZCxlQUFLLE1BQU0sZ0JBQWdCLEtBQUssTUFBTSxLQUFLLFFBQVEsS0FBSztBQUFBLFNBQ3pELEVBQ0EsTUFBTSxDQUFDLFVBQVU7QUFDaEIsdUJBQWEsT0FBTyxVQUFVLE9BQU8saUJBQWlCLEtBQUssRUFBRTtBQUFBLFNBQzlELEVBQ0EsS0FBSyxDQUFDLFNBQVM7QUFDZCxlQUFLLFVBQVU7QUFBQSxRQUNqQixDQUFDO0FBQUEsYUFDRTtBQUNMLHFCQUFhO0FBQUEsVUFDWDtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQSxLQUFLO0FBQUE7TUFFVDtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQ0g7O1NBcEhrQixPQUFNLHVCQUF0QkEsbUJBc0NXQyxVQUFBLEVBQUEsS0FBQSxFQUFBLEdBQUE7QUFBQSxJQXJDTyxPQUFNLFdBQUEsa0JBQ3BCQyxZQVNFLE1BQUE7QUFBQTtNQVJDLCtDQUFPLFNBQVEsU0FBQTtBQUFBLE1BQ2hCLE9BQUE7QUFBQSxNQUNBLE9BQU07QUFBQSxNQUNOLGNBQVc7QUFBQSxNQUNYLE1BQUs7QUFBQSxNQUNMLE1BQUs7QUFBQSxNQUNKLFNBQVMsTUFBTztBQUFBLE1BQ2pCLFlBQUE7QUFBQSxnQ0FHaUIsT0FBTSxXQUFBLGtCQUN6QkEsWUFVRSxNQUFBO0FBQUE7TUFUQywrQ0FBTyxTQUFRLFNBQUE7QUFBQSxNQUNmLFNBQVMsTUFBTztBQUFBLE1BQ2pCLFlBQUE7QUFBQSxNQUNBLE9BQUE7QUFBQSxNQUNBLE9BQU07QUFBQSxNQUNOLGNBQVc7QUFBQSxNQUNYLE1BQUs7QUFBQSxNQUNMLE1BQUs7QUFBQSxNQUNMLE9BQUE7QUFBQSxnQ0FHaUIsT0FBTSxXQUFBLGtCQUN6QkEsWUFTRSxNQUFBO0FBQUE7TUFSQywrQ0FBTyxTQUFRLFNBQUE7QUFBQSxNQUNmLFNBQVMsTUFBTztBQUFBLE1BQ2pCLE9BQUE7QUFBQSxNQUNBLFlBQUE7QUFBQSxNQUNBLE9BQU07QUFBQSxNQUNOLGNBQVc7QUFBQSxNQUNYLE1BQUs7QUFBQSxNQUNMLE1BQUs7QUFBQTswQkFJWEYsbUJBcUNXQyxVQUFBLEVBQUEsS0FBQSxFQUFBLEdBQUE7QUFBQSxJQXBDTyxPQUFNLFdBQUEsa0JBQ3BCQyxZQVNFLE1BQUE7QUFBQTtNQVJDLCtDQUFPLFNBQVEsU0FBQTtBQUFBLE1BQ2hCLE9BQUE7QUFBQSxNQUNBLE9BQU07QUFBQSxNQUNOLGNBQVc7QUFBQSxNQUNYLE1BQUs7QUFBQSxNQUNMLE1BQUs7QUFBQSxNQUNKLFNBQVMsTUFBTztBQUFBLE1BQ2pCLFlBQUE7QUFBQSxnQ0FHaUIsT0FBTSxXQUFBLGtCQUN6QkEsWUFTRSxNQUFBO0FBQUE7TUFSQywrQ0FBTyxTQUFRLFNBQUE7QUFBQSxNQUNmLFNBQVMsTUFBTztBQUFBLE1BQ2pCLE9BQUE7QUFBQSxNQUNBLFlBQUE7QUFBQSxNQUNBLE9BQU07QUFBQSxNQUNOLGNBQVc7QUFBQSxNQUNYLE1BQUs7QUFBQSxNQUNMLE1BQUs7QUFBQSxnQ0FHWSxPQUFNLFdBQUEsa0JBQ3pCQSxZQVNFLE1BQUE7QUFBQTtNQVJDLCtDQUFPLFNBQVEsU0FBQTtBQUFBLE1BQ2YsU0FBUyxNQUFPO0FBQUEsTUFDakIsT0FBQTtBQUFBLE1BQ0EsWUFBQTtBQUFBLE1BQ0EsT0FBTTtBQUFBLE1BQ04sY0FBVztBQUFBLE1BQ1gsTUFBSztBQUFBLE1BQ0wsTUFBSztBQUFBOzs7OzsifQ==
