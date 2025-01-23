import { az as registerPlugin, u as __vitePreload, _ as _export_sfc, m as APIinterface, p as openBlock, q as createBlock, t as withCtx, U as createBaseVNode, Z as toDisplayString, f as createVNode, at as QIcon, Y as QBtn } from "./index.61ed5618.js";
const FacebookLogin$1 = registerPlugin("FacebookLogin", {
  web: () => __vitePreload(() => import("./web.0024f1a3.js"), true ? ["assets/web.0024f1a3.js","assets/index.61ed5618.js","assets/index.dbee30c0.css"] : void 0).then((m) => new m.FacebookLoginWeb())
});
const FACEBOOK_PERMISSIONS = [
  "email",
  "user_birthday",
  "user_photos",
  "user_gender"
];
const _sfc_main = {
  name: "FacebookLogin",
  props: ["app_id"],
  data() {
    return {
      loading: false
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      FacebookLogin$1.initialize({ appId: this.app_id });
    },
    Signin() {
      FacebookLogin$1.login({ permissions: FACEBOOK_PERMISSIONS }).then((data) => {
        this.getFbProfile(data.accessToken.token);
      }).catch((error) => {
      }).then((data) => {
      });
    },
    getFbProfile(accessToken) {
      this.loading = true;
      FacebookLogin$1.getProfile({ fields: ["email", "first_name", "last_name"] }).then((data) => {
        console.debug(data);
        const $params = {
          id: data.id,
          email_address: data.email,
          first_name: data.first_name,
          last_name: data.last_name,
          social_strategy: "facebook",
          social_token: accessToken
        };
        this.$emit("afterLogin", $params);
      }).catch((error) => {
        APIinterface.notify("red-5", error, "error_outline", this.$q);
      }).then((data) => {
        this.loading = false;
      });
    }
  }
};
const _hoisted_1 = { class: "row justify-between full-width" };
const _hoisted_2 = { class: "col text-left text-white" };
const _hoisted_3 = { class: "col-1 text-right text-white" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QBtn, {
    onClick: $options.Signin,
    loading: $data.loading,
    unelevated: "",
    "no-caps": "",
    color: "myblue",
    class: "full-width text-weight-bold",
    size: "lg"
  }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, toDisplayString(_ctx.$t("Continue with Facebook")), 1),
        createBaseVNode("div", _hoisted_3, [
          createVNode(QIcon, { name: "lab la-facebook" })
        ])
      ])
    ]),
    _: 1
  }, 8, ["onClick", "loading"]);
}
var FacebookLogin = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "FacebookLogin.vue"]]);
export { FacebookLogin as default };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQUNBLE1BQU1BLGtCQUFnQixlQUFlLGlCQUFpQjtBQUFBLEVBQ2xELEtBQUssTUFBTSwyQkFBTyxzQkFBTyxtR0FBRSxLQUFLLE9BQUssSUFBSSxFQUFFLGlCQUFnQixDQUFFO0FBQ2pFLENBQUM7QUNzQkQsTUFBTSx1QkFBdUI7QUFBQSxFQUMzQjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUNGO0FBRUEsTUFBSyxZQUFVO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixPQUFPLENBQUMsUUFBUTtBQUFBLEVBQ2hCLE9BQU87QUFDTCxXQUFPO0FBQUEsTUFDTCxTQUFTO0FBQUE7RUFFWjtBQUFBLEVBQ0QsVUFBVTtBQUNSLFNBQUssS0FBSTtBQUFBLEVBQ1Y7QUFBQSxFQUNELFNBQVM7QUFBQSxJQUNQLE9BQU87QUFDTEEsc0JBQWMsV0FBVyxFQUFFLE9BQU8sS0FBSyxPQUFRO0FBQUEsSUFDaEQ7QUFBQSxJQUNELFNBQVM7QUFDUEEsc0JBQWMsTUFBTSxFQUFFLGFBQWEscUJBQW1CLENBQUcsRUFDdEQsS0FBSyxDQUFDLFNBQVM7QUFDZCxhQUFLLGFBQWEsS0FBSyxZQUFZLEtBQUs7QUFBQSxPQUN6QyxFQUVBLE1BQU0sQ0FBQyxVQUFVO0FBQUEsT0FFakIsRUFDQSxLQUFLLENBQUMsU0FBUztBQUFBLE1BRWhCLENBQUM7QUFBQSxJQUNKO0FBQUEsSUFDRCxhQUFhLGFBQWE7QUFDeEIsV0FBSyxVQUFVO0FBQ2ZBLHNCQUFjLFdBQVcsRUFBRSxRQUFRLENBQUMsU0FBUyxjQUFjLFdBQVcsR0FBRyxFQUN0RSxLQUFLLENBQUMsU0FBUztBQUNkLGdCQUFRLE1BQU0sSUFBSTtBQUNsQixjQUFNLFVBQVU7QUFBQSxVQUNkLElBQUksS0FBSztBQUFBLFVBQ1QsZUFBZSxLQUFLO0FBQUEsVUFDcEIsWUFBWSxLQUFLO0FBQUEsVUFDakIsV0FBVyxLQUFLO0FBQUEsVUFDaEIsaUJBQWlCO0FBQUEsVUFDakIsY0FBYztBQUFBO0FBRWhCLGFBQUssTUFBTSxjQUFjLE9BQU87QUFBQSxPQUNqQyxFQUNBLE1BQU0sQ0FBQyxVQUFVO0FBQ2hCLHFCQUFhLE9BQU8sU0FBUyxPQUFPLGlCQUFpQixLQUFLLEVBQUU7QUFBQSxPQUM3RCxFQUNBLEtBQUssQ0FBQyxTQUFTO0FBQ2QsYUFBSyxVQUFVO0FBQUEsTUFDakIsQ0FBQztBQUFBLElBQ0o7QUFBQSxFQUNGO0FBQ0g7QUF6RVMsNEJBQU0saUNBQWdDO0FBQ3BDLDRCQUFNLDJCQUEwQjtBQUdoQyw0QkFBTSw4QkFBNkI7O3NCQWI1Q0MsWUFpQlE7QUFBQSxJQWhCTCxTQUFPLFNBQU07QUFBQSxJQUNiLFNBQVMsTUFBTztBQUFBLElBQ2pCO0FBQUEsSUFDQTtBQUFBLElBQ0EsT0FBTTtBQUFBLElBQ04sT0FBTTtBQUFBLElBQ04sTUFBSztBQUFBO3FCQUVMLE1BT007QUFBQSxNQVBOQyxnQkFPTSxPQVBOLFlBT007QUFBQSxRQU5KQSxnQkFFTSxPQUZOLFlBRU1DLGdCQURELEtBQUU7QUFBQSxRQUVQRCxnQkFFTSxPQUZOLFlBRU07QUFBQSxVQURKRSxZQUFpQyxpQ0FBSDtBQUFBIiwibmFtZXMiOlsiRmFjZWJvb2tMb2dpbiIsIl9jcmVhdGVCbG9jayIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX2NyZWF0ZVZOb2RlIl0sInNvdXJjZXMiOlsiLi4vLi4vbm9kZV9tb2R1bGVzL0BjYXBhY2l0b3ItY29tbXVuaXR5L2ZhY2Vib29rLWxvZ2luL2Rpc3QvZXNtL2luZGV4LmpzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvRmFjZWJvb2tMb2dpbi52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVnaXN0ZXJQbHVnaW4gfSBmcm9tICdAY2FwYWNpdG9yL2NvcmUnO1xuY29uc3QgRmFjZWJvb2tMb2dpbiA9IHJlZ2lzdGVyUGx1Z2luKCdGYWNlYm9va0xvZ2luJywge1xuICAgIHdlYjogKCkgPT4gaW1wb3J0KCcuL3dlYicpLnRoZW4obSA9PiBuZXcgbS5GYWNlYm9va0xvZ2luV2ViKCkpLFxufSk7XG5leHBvcnQgKiBmcm9tICcuL2RlZmluaXRpb25zJztcbmV4cG9ydCB7IEZhY2Vib29rTG9naW4gfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIjx0ZW1wbGF0ZT5cbiAgPHEtYnRuXG4gICAgQGNsaWNrPVwiU2lnbmluXCJcbiAgICA6bG9hZGluZz1cImxvYWRpbmdcIlxuICAgIHVuZWxldmF0ZWRcbiAgICBuby1jYXBzXG4gICAgY29sb3I9XCJteWJsdWVcIlxuICAgIGNsYXNzPVwiZnVsbC13aWR0aCB0ZXh0LXdlaWdodC1ib2xkXCJcbiAgICBzaXplPVwibGdcIlxuICA+XG4gICAgPGRpdiBjbGFzcz1cInJvdyBqdXN0aWZ5LWJldHdlZW4gZnVsbC13aWR0aFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbCB0ZXh0LWxlZnQgdGV4dC13aGl0ZVwiPlxuICAgICAgICB7eyAkdChcIkNvbnRpbnVlIHdpdGggRmFjZWJvb2tcIikgfX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC0xIHRleHQtcmlnaHQgdGV4dC13aGl0ZVwiPlxuICAgICAgICA8cS1pY29uIG5hbWU9XCJsYWIgbGEtZmFjZWJvb2tcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvcS1idG4+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgRmFjZWJvb2tMb2dpbiB9IGZyb20gXCJAY2FwYWNpdG9yLWNvbW11bml0eS9mYWNlYm9vay1sb2dpblwiO1xuaW1wb3J0IEFQSWludGVyZmFjZSBmcm9tIFwic3JjL2FwaS9BUElpbnRlcmZhY2VcIjtcblxuY29uc3QgRkFDRUJPT0tfUEVSTUlTU0lPTlMgPSBbXG4gIFwiZW1haWxcIixcbiAgXCJ1c2VyX2JpcnRoZGF5XCIsXG4gIFwidXNlcl9waG90b3NcIixcbiAgXCJ1c2VyX2dlbmRlclwiLFxuXTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIkZhY2Vib29rTG9naW5cIixcbiAgcHJvcHM6IFtcImFwcF9pZFwiXSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgfTtcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGluaXQoKSB7XG4gICAgICBGYWNlYm9va0xvZ2luLmluaXRpYWxpemUoeyBhcHBJZDogdGhpcy5hcHBfaWQgfSk7XG4gICAgfSxcbiAgICBTaWduaW4oKSB7XG4gICAgICBGYWNlYm9va0xvZ2luLmxvZ2luKHsgcGVybWlzc2lvbnM6IEZBQ0VCT09LX1BFUk1JU1NJT05TIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5nZXRGYlByb2ZpbGUoZGF0YS5hY2Nlc3NUb2tlbi50b2tlbik7XG4gICAgICAgIH0pXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgLy8gYWxlcnQoSlNPTi5zdHJpbmdpZnkoZXJyb3IpKVxuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIC8vXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0RmJQcm9maWxlKGFjY2Vzc1Rva2VuKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgRmFjZWJvb2tMb2dpbi5nZXRQcm9maWxlKHsgZmllbGRzOiBbXCJlbWFpbFwiLCBcImZpcnN0X25hbWVcIiwgXCJsYXN0X25hbWVcIl0gfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmRlYnVnKGRhdGEpO1xuICAgICAgICAgIGNvbnN0ICRwYXJhbXMgPSB7XG4gICAgICAgICAgICBpZDogZGF0YS5pZCxcbiAgICAgICAgICAgIGVtYWlsX2FkZHJlc3M6IGRhdGEuZW1haWwsXG4gICAgICAgICAgICBmaXJzdF9uYW1lOiBkYXRhLmZpcnN0X25hbWUsXG4gICAgICAgICAgICBsYXN0X25hbWU6IGRhdGEubGFzdF9uYW1lLFxuICAgICAgICAgICAgc29jaWFsX3N0cmF0ZWd5OiBcImZhY2Vib29rXCIsXG4gICAgICAgICAgICBzb2NpYWxfdG9rZW46IGFjY2Vzc1Rva2VuLFxuICAgICAgICAgIH07XG4gICAgICAgICAgdGhpcy4kZW1pdChcImFmdGVyTG9naW5cIiwgJHBhcmFtcyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBBUElpbnRlcmZhY2Uubm90aWZ5KFwicmVkLTVcIiwgZXJyb3IsIFwiZXJyb3Jfb3V0bGluZVwiLCB0aGlzLiRxKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiJdLCJmaWxlIjoiYXNzZXRzL0ZhY2Vib29rTG9naW4uY2EzNWViMmYuanMifQ==
