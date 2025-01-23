import { _ as _export_sfc, p as openBlock, q as createBlock, Y as QBtn } from "./index.61ed5618.js";
import { S as Share } from "./index.cae99e37.js";
const _sfc_main = {
  name: "ShareComponents",
  props: ["title", "text", "url", "dialogTitle", "layout"],
  methods: {
    share() {
      console.log("Share");
      Share.share({
        title: this.title,
        text: this.text,
        url: this.url,
        dialogTitle: this.dialogTitle
      }).then((data) => {
      }).catch((error) => {
      });
    },
    webShare() {
      console.log("webShare");
      if (navigator.share) {
        navigator.share({
          title: this.title,
          text: this.text,
          url: this.url
        }).then(() => console.log("Successful share")).catch((error) => console.log("Error sharing", error));
      } else {
        console.log("web share not available");
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.layout == 2 ? (openBlock(), createBlock(QBtn, {
    key: 0,
    onClick: _cache[0] || (_cache[0] = ($event) => this.$q.capacitor ? $options.share() : $options.webShare()),
    round: "",
    color: "transparent",
    "text-color": "primary",
    size: "md",
    icon: "share",
    unelevated: ""
  })) : (openBlock(), createBlock(QBtn, {
    key: 1,
    round: "",
    onClick: _cache[1] || (_cache[1] = ($event) => this.$q.capacitor ? $options.share() : $options.webShare()),
    unelevated: "",
    color: _ctx.$q.dark.mode ? "grey600" : "mygrey",
    "text-color": _ctx.$q.dark.mode ? "grey300" : "dark",
    icon: "las la-share-square",
    dense: "",
    size: "sm",
    class: "q-ml-sm"
  }, null, 8, ["color", "text-color"]));
}
var ShareComponents = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "ShareComponents.vue"]]);
export { ShareComponents as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hhcmVDb21wb25lbnRzLjgzMmQyMjIzLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9TaGFyZUNvbXBvbmVudHMudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHRlbXBsYXRlIHYtaWY9XCJsYXlvdXQgPT0gMlwiPlxuICAgIDxxLWJ0blxuICAgICAgQGNsaWNrPVwidGhpcy4kcS5jYXBhY2l0b3IgPyBzaGFyZSgpIDogd2ViU2hhcmUoKVwiXG4gICAgICByb3VuZFxuICAgICAgY29sb3I9XCJ0cmFuc3BhcmVudFwiXG4gICAgICB0ZXh0LWNvbG9yPVwicHJpbWFyeVwiXG4gICAgICBzaXplPVwibWRcIlxuICAgICAgaWNvbj1cInNoYXJlXCJcbiAgICAgIHVuZWxldmF0ZWRcbiAgICAvPlxuICA8L3RlbXBsYXRlPlxuICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgIDxxLWJ0blxuICAgICAgcm91bmRcbiAgICAgIEBjbGljaz1cInRoaXMuJHEuY2FwYWNpdG9yID8gc2hhcmUoKSA6IHdlYlNoYXJlKClcIlxuICAgICAgdW5lbGV2YXRlZFxuICAgICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXk2MDAnIDogJ215Z3JleSdcIlxuICAgICAgOnRleHQtY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTMwMCcgOiAnZGFyaydcIlxuICAgICAgaWNvbj1cImxhcyBsYS1zaGFyZS1zcXVhcmVcIlxuICAgICAgZGVuc2VcbiAgICAgIHNpemU9XCJzbVwiXG4gICAgICBjbGFzcz1cInEtbWwtc21cIlxuICAgIC8+XG4gIDwvdGVtcGxhdGU+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgU2hhcmUgfSBmcm9tIFwiQGNhcGFjaXRvci9zaGFyZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiU2hhcmVDb21wb25lbnRzXCIsXG4gIHByb3BzOiBbXCJ0aXRsZVwiLCBcInRleHRcIiwgXCJ1cmxcIiwgXCJkaWFsb2dUaXRsZVwiLCBcImxheW91dFwiXSxcbiAgbWV0aG9kczoge1xuICAgIHNoYXJlKCkge1xuICAgICAgY29uc29sZS5sb2coXCJTaGFyZVwiKTtcbiAgICAgIFNoYXJlLnNoYXJlKHtcbiAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgIHRleHQ6IHRoaXMudGV4dCxcbiAgICAgICAgdXJsOiB0aGlzLnVybCxcbiAgICAgICAgZGlhbG9nVGl0bGU6IHRoaXMuZGlhbG9nVGl0bGUsXG4gICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIC8vXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAvL0FQSWludGVyZmFjZS5ub3RpZnkoXCJkYXJrXCIsIGVycm9yLCBcImVycm9yXCIsIHRoaXMuJHEpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHdlYlNoYXJlKCkge1xuICAgICAgY29uc29sZS5sb2coXCJ3ZWJTaGFyZVwiKTtcbiAgICAgIGlmIChuYXZpZ2F0b3Iuc2hhcmUpIHtcbiAgICAgICAgbmF2aWdhdG9yXG4gICAgICAgICAgLnNoYXJlKHtcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgICAgICAgdGV4dDogdGhpcy50ZXh0LFxuICAgICAgICAgICAgdXJsOiB0aGlzLnVybCxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKFwiU3VjY2Vzc2Z1bCBzaGFyZVwiKSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhcIkVycm9yIHNoYXJpbmdcIiwgZXJyb3IpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwid2ViIHNoYXJlIG5vdCBhdmFpbGFibGVcIik7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfY3JlYXRlQmxvY2siXSwibWFwcGluZ3MiOiI7O0FBOEJBLE1BQUssWUFBVTtBQUFBLEVBQ2IsTUFBTTtBQUFBLEVBQ04sT0FBTyxDQUFDLFNBQVMsUUFBUSxPQUFPLGVBQWUsUUFBUTtBQUFBLEVBQ3ZELFNBQVM7QUFBQSxJQUNQLFFBQVE7QUFDTixjQUFRLElBQUksT0FBTztBQUNuQixZQUFNLE1BQU07QUFBQSxRQUNWLE9BQU8sS0FBSztBQUFBLFFBQ1osTUFBTSxLQUFLO0FBQUEsUUFDWCxLQUFLLEtBQUs7QUFBQSxRQUNWLGFBQWEsS0FBSztBQUFBLE9BQ25CLEVBQ0UsS0FBSyxDQUFDLFNBQVM7QUFBQSxPQUVmLEVBQ0EsTUFBTSxDQUFDLFVBQVU7QUFBQSxNQUVsQixDQUFDO0FBQUEsSUFDSjtBQUFBLElBQ0QsV0FBVztBQUNULGNBQVEsSUFBSSxVQUFVO0FBQ3RCLFVBQUksVUFBVSxPQUFPO0FBQ25CLGtCQUNHLE1BQU07QUFBQSxVQUNMLE9BQU8sS0FBSztBQUFBLFVBQ1osTUFBTSxLQUFLO0FBQUEsVUFDWCxLQUFLLEtBQUs7QUFBQSxTQUNYLEVBQ0EsS0FBSyxNQUFNLFFBQVEsSUFBSSxrQkFBa0IsQ0FBQyxFQUMxQyxNQUFNLENBQUMsVUFBVSxRQUFRLElBQUksaUJBQWlCLEtBQUssQ0FBQztBQUFBLGFBQ2xEO0FBQ0wsZ0JBQVEsSUFBSSx5QkFBeUI7QUFBQSxNQUN2QztBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQ0g7O1NBaEVrQixPQUFNLFVBQUEsa0JBQ3BCQSxZQVFFLE1BQUE7QUFBQTtJQVBDLG9EQUFZLEdBQUcsWUFBWSxTQUFBLFVBQVUsU0FBUSxTQUFBO0FBQUEsSUFDOUMsT0FBQTtBQUFBLElBQ0EsT0FBTTtBQUFBLElBQ04sY0FBVztBQUFBLElBQ1gsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsWUFBQTtBQUFBLHNCQUlGQSxZQVVFLE1BQUE7QUFBQTtJQVRBLE9BQUE7QUFBQSxJQUNDLG9EQUFZLEdBQUcsWUFBWSxTQUFBLFVBQVUsU0FBUSxTQUFBO0FBQUEsSUFDOUMsWUFBQTtBQUFBLElBQ0MsT0FBTyxLQUFBLEdBQUcsS0FBSyxPQUFJLFlBQUE7QUFBQSxJQUNuQixjQUFZLEtBQUEsR0FBRyxLQUFLLE9BQUksWUFBQTtBQUFBLElBQ3pCLE1BQUs7QUFBQSxJQUNMLE9BQUE7QUFBQSxJQUNBLE1BQUs7QUFBQSxJQUNMLE9BQU07QUFBQTs7OzsifQ==
