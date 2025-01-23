import { _ as _export_sfc, aw as auth, m as APIinterface, p as openBlock, q as createBlock, aF as withModifiers, Y as QBtn } from "./index.61ed5618.js";
const _sfc_main = {
  name: "FavsResto",
  props: ["merchant_id", "active", "layout", "size", "data"],
  data() {
    return {
      loading: false
    };
  },
  methods: {
    addTofav() {
      if (!auth.authenticated()) {
        APIinterface.notify(
          "dark",
          "Login to save it to your favorites",
          "error",
          this.$q
        );
        return;
      }
      this.loading = true;
      APIinterface.SaveStore(this.merchant_id).then((data) => {
        this.$emit("afterSavefav", this.data, data.details.found);
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data) => {
        this.loading = false;
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.active ? (openBlock(), createBlock(QBtn, {
    key: 0,
    round: "",
    onClick: _cache[0] || (_cache[0] = withModifiers(($event) => $options.addTofav(), ["stop"])),
    color: "secondary",
    unelevated: "",
    "text-color": "white",
    icon: "favorite_border",
    dense: "",
    size: $props.size,
    loading: $data.loading
  }, null, 8, ["size", "loading"])) : (openBlock(), createBlock(QBtn, {
    key: 1,
    round: "",
    onClick: _cache[1] || (_cache[1] = withModifiers(($event) => $options.addTofav(), ["stop"])),
    color: "mygrey",
    unelevated: "",
    "text-color": "dark",
    icon: "favorite_border",
    dense: "",
    size: $props.size,
    loading: $data.loading
  }, null, 8, ["size", "loading"]));
}
var FavsResto = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "FavsResto.vue"]]);
export { FavsResto as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmF2c1Jlc3RvLmM4ZDUxNjdlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9GYXZzUmVzdG8udnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHRlbXBsYXRlIHYtaWY9XCJhY3RpdmVcIj5cbiAgICA8cS1idG5cbiAgICAgIHJvdW5kXG4gICAgICBAY2xpY2suc3RvcD1cImFkZFRvZmF2KClcIlxuICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgdW5lbGV2YXRlZFxuICAgICAgdGV4dC1jb2xvcj1cIndoaXRlXCJcbiAgICAgIGljb249XCJmYXZvcml0ZV9ib3JkZXJcIlxuICAgICAgZGVuc2VcbiAgICAgIDpzaXplPVwic2l6ZVwiXG4gICAgICA6bG9hZGluZz1cImxvYWRpbmdcIlxuICAgIC8+XG4gIDwvdGVtcGxhdGU+XG4gIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgPHEtYnRuXG4gICAgICByb3VuZFxuICAgICAgQGNsaWNrLnN0b3A9XCJhZGRUb2ZhdigpXCJcbiAgICAgIGNvbG9yPVwibXlncmV5XCJcbiAgICAgIHVuZWxldmF0ZWRcbiAgICAgIHRleHQtY29sb3I9XCJkYXJrXCJcbiAgICAgIGljb249XCJmYXZvcml0ZV9ib3JkZXJcIlxuICAgICAgZGVuc2VcbiAgICAgIDpzaXplPVwic2l6ZVwiXG4gICAgICA6bG9hZGluZz1cImxvYWRpbmdcIlxuICAgIC8+XG4gIDwvdGVtcGxhdGU+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEFQSWludGVyZmFjZSBmcm9tIFwic3JjL2FwaS9BUElpbnRlcmZhY2VcIjtcbmltcG9ydCBhdXRoIGZyb20gXCJzcmMvYXBpL2F1dGhcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIkZhdnNSZXN0b1wiLFxuICBwcm9wczogW1wibWVyY2hhbnRfaWRcIiwgXCJhY3RpdmVcIiwgXCJsYXlvdXRcIiwgXCJzaXplXCIsIFwiZGF0YVwiXSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgfTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGFkZFRvZmF2KCkge1xuICAgICAgaWYgKCFhdXRoLmF1dGhlbnRpY2F0ZWQoKSkge1xuICAgICAgICBBUElpbnRlcmZhY2Uubm90aWZ5KFxuICAgICAgICAgIFwiZGFya1wiLFxuICAgICAgICAgIFwiTG9naW4gdG8gc2F2ZSBpdCB0byB5b3VyIGZhdm9yaXRlc1wiLFxuICAgICAgICAgIFwiZXJyb3JcIixcbiAgICAgICAgICB0aGlzLiRxXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICBBUElpbnRlcmZhY2UuU2F2ZVN0b3JlKHRoaXMubWVyY2hhbnRfaWQpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy4kZW1pdChcImFmdGVyU2F2ZWZhdlwiLCB0aGlzLmRhdGEsIGRhdGEuZGV0YWlscy5mb3VuZCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBBUElpbnRlcmZhY2Uubm90aWZ5KFwiZGFya1wiLCBlcnJvciwgXCJlcnJvclwiLCB0aGlzLiRxKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfY3JlYXRlQmxvY2siXSwibWFwcGluZ3MiOiI7QUFpQ0EsTUFBSyxZQUFVO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixPQUFPLENBQUMsZUFBZSxVQUFVLFVBQVUsUUFBUSxNQUFNO0FBQUEsRUFDekQsT0FBTztBQUNMLFdBQU87QUFBQSxNQUNMLFNBQVM7QUFBQTtFQUVaO0FBQUEsRUFDRCxTQUFTO0FBQUEsSUFDUCxXQUFXO0FBQ1QsVUFBSSxDQUFDLEtBQUssaUJBQWlCO0FBQ3pCLHFCQUFhO0FBQUEsVUFDWDtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQSxLQUFLO0FBQUE7QUFFUDtBQUFBLE1BQ0Y7QUFDQSxXQUFLLFVBQVU7QUFDZixtQkFBYSxVQUFVLEtBQUssV0FBVyxFQUNwQyxLQUFLLENBQUMsU0FBUztBQUNkLGFBQUssTUFBTSxnQkFBZ0IsS0FBSyxNQUFNLEtBQUssUUFBUSxLQUFLO0FBQUEsT0FDekQsRUFDQSxNQUFNLENBQUMsVUFBVTtBQUNoQixxQkFBYSxPQUFPLFFBQVEsT0FBTyxTQUFTLEtBQUssRUFBRTtBQUFBLE9BQ3BELEVBQ0EsS0FBSyxDQUFDLFNBQVM7QUFDZCxhQUFLLFVBQVU7QUFBQSxNQUNqQixDQUFDO0FBQUEsSUFDSjtBQUFBLEVBQ0Y7QUFDSDs7U0FoRWtCLE9BQU0sdUJBQ3BCQSxZQVVFLE1BQUE7QUFBQTtJQVRBLE9BQUE7QUFBQSxJQUNDLDZEQUFZLFNBQVEsU0FBQSxHQUFBLENBQUEsTUFBQSxDQUFBO0FBQUEsSUFDckIsT0FBTTtBQUFBLElBQ04sWUFBQTtBQUFBLElBQ0EsY0FBVztBQUFBLElBQ1gsTUFBSztBQUFBLElBQ0wsT0FBQTtBQUFBLElBQ0MsTUFBTSxPQUFJO0FBQUEsSUFDVixTQUFTLE1BQU87QUFBQSxvREFJbkJBLFlBVUUsTUFBQTtBQUFBO0lBVEEsT0FBQTtBQUFBLElBQ0MsNkRBQVksU0FBUSxTQUFBLEdBQUEsQ0FBQSxNQUFBLENBQUE7QUFBQSxJQUNyQixPQUFNO0FBQUEsSUFDTixZQUFBO0FBQUEsSUFDQSxjQUFXO0FBQUEsSUFDWCxNQUFLO0FBQUEsSUFDTCxPQUFBO0FBQUEsSUFDQyxNQUFNLE9BQUk7QUFBQSxJQUNWLFNBQVMsTUFBTztBQUFBOzs7OyJ9
