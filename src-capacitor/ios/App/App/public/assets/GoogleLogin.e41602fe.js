import { az as registerPlugin, u as __vitePreload, _ as _export_sfc, m as APIinterface, p as openBlock, q as createBlock, t as withCtx, U as createBaseVNode, Z as toDisplayString, f as createVNode, at as QIcon, Y as QBtn } from "./index.61ed5618.js";
const GoogleAuth = registerPlugin("GoogleAuth", {
  web: () => __vitePreload(() => import("./web.1f295433.js"), true ? ["assets/web.1f295433.js","assets/index.61ed5618.js","assets/index.dbee30c0.css"] : void 0).then((m) => new m.GoogleAuthWeb())
});
const _sfc_main = {
  name: "GoogleLogin",
  props: ["client_id"],
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
      if (!this.$q.capacitor) {
        GoogleAuth.initialize({
          clientId: this.client_id,
          scopes: ["profile", "email"],
          grantOfflineAccess: true
        });
      } else {
        GoogleAuth.initialize();
      }
    },
    Signin() {
      this.loading = true;
      GoogleAuth.signIn().then((data) => {
        const $params = {
          id: data.id,
          email_address: data.email,
          first_name: data.givenName,
          last_name: data.familyName,
          social_strategy: "google",
          social_token: data.authentication.idToken
        };
        this.$emit("afterLogin", $params);
      }).catch((error) => {
        if (error.code == 10) {
          APIinterface.notify(
            "dark",
            "Error app is not signin",
            "error",
            this.$q
          );
        } else if (error.code == -5)
          ;
        else {
          APIinterface.notify(
            "dark",
            JSON.stringify(error),
            "error",
            this.$q
          );
        }
      }).then((data) => {
        this.loading = false;
      });
    }
  }
};
const _hoisted_1 = { class: "row justify-between full-width" };
const _hoisted_2 = { class: "col text-left text-dark" };
const _hoisted_3 = { class: "col-1 text-right text-dark" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QBtn, {
    onClick: $options.Signin,
    loading: $data.loading,
    unelevated: "",
    "no-caps": "",
    color: "mygrey",
    class: "full-width text-weight-bold",
    size: "lg"
  }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, toDisplayString(_ctx.$t("Continue with Google")), 1),
        createBaseVNode("div", _hoisted_3, [
          createVNode(QIcon, { name: "lab la-google-plus-g" })
        ])
      ])
    ]),
    _: 1
  }, 8, ["onClick", "loading"]);
}
var GoogleLogin = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "GoogleLogin.vue"]]);
export { GoogleLogin as default };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQUNBLE1BQU0sYUFBYSxlQUFlLGNBQWM7QUFBQSxFQUM1QyxLQUFLLE1BQU0sMkJBQU8sc0JBQU8sbUdBQUUsS0FBSyxDQUFDLE1BQU0sSUFBSSxFQUFFLGNBQWEsQ0FBRTtBQUNoRSxDQUFDO0FDc0JELE1BQUssWUFBVTtBQUFBLEVBQ2IsTUFBTTtBQUFBLEVBQ04sT0FBTyxDQUFDLFdBQVc7QUFBQSxFQUNuQixPQUFPO0FBQ0wsV0FBTztBQUFBLE1BQ0wsU0FBUztBQUFBO0VBRVo7QUFBQSxFQUNELFVBQVU7QUFDUixTQUFLLEtBQUk7QUFBQSxFQUNWO0FBQUEsRUFDRCxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBRUwsVUFBSSxDQUFDLEtBQUssR0FBRyxXQUFXO0FBQ3RCLG1CQUFXLFdBQVc7QUFBQSxVQUNwQixVQUFVLEtBQUs7QUFBQSxVQUNmLFFBQVEsQ0FBQyxXQUFXLE9BQU87QUFBQSxVQUMzQixvQkFBb0I7QUFBQSxRQUN0QixDQUFDO0FBQUEsYUFDSTtBQUNMLG1CQUFXLFdBQVU7QUFBQSxNQUN2QjtBQUFBLElBQ0Q7QUFBQSxJQUNELFNBQVM7QUFDUCxXQUFLLFVBQVU7QUFDZixpQkFBVyxPQUFPLEVBQ2YsS0FBSyxDQUFDLFNBQVM7QUFDZCxjQUFNLFVBQVU7QUFBQSxVQUNkLElBQUksS0FBSztBQUFBLFVBQ1QsZUFBZSxLQUFLO0FBQUEsVUFDcEIsWUFBWSxLQUFLO0FBQUEsVUFDakIsV0FBVyxLQUFLO0FBQUEsVUFDaEIsaUJBQWlCO0FBQUEsVUFDakIsY0FBYyxLQUFLLGVBQWU7QUFBQTtBQUVwQyxhQUFLLE1BQU0sY0FBYyxPQUFPO0FBQUEsT0FDakMsRUFDQSxNQUFNLENBQUMsVUFBVTtBQUNoQixZQUFJLE1BQU0sUUFBUSxJQUFJO0FBQ3BCLHVCQUFhO0FBQUEsWUFDWDtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQSxLQUFLO0FBQUE7UUFFUCxXQUFTLE1BQU0sUUFBUTtBQUFJO0FBQUEsYUFFdEI7QUFDTCx1QkFBYTtBQUFBLFlBQ1g7QUFBQSxZQUNBLEtBQUssVUFBVSxLQUFLO0FBQUEsWUFDcEI7QUFBQSxZQUNBLEtBQUs7QUFBQTtRQUVUO0FBQUEsT0FDRCxFQUNBLEtBQUssQ0FBQyxTQUFTO0FBQ2QsYUFBSyxVQUFVO0FBQUEsTUFDakIsQ0FBQztBQUFBLElBQ0o7QUFBQSxFQUNGO0FBQ0g7QUE3RVMsNEJBQU0saUNBQWdDO0FBQ3BDLDRCQUFNLDBCQUF5QjtBQUcvQiw0QkFBTSw2QkFBNEI7O3NCQWIzQ0EsWUFpQlE7QUFBQSxJQWhCTCxTQUFPLFNBQU07QUFBQSxJQUNiLFNBQVMsTUFBTztBQUFBLElBQ2pCO0FBQUEsSUFDQTtBQUFBLElBQ0EsT0FBTTtBQUFBLElBQ04sT0FBTTtBQUFBLElBQ04sTUFBSztBQUFBO3FCQUVMLE1BT007QUFBQSxNQVBOQyxnQkFPTSxPQVBOLFlBT007QUFBQSxRQU5KQSxnQkFFTSxPQUZOLFlBRU1DLGdCQURELEtBQUU7QUFBQSxRQUVQRCxnQkFFTSxPQUZOLFlBRU07QUFBQSxVQURKRSxZQUFzQyxzQ0FBSDtBQUFBIiwibmFtZXMiOlsiX2NyZWF0ZUJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl90b0Rpc3BsYXlTdHJpbmciLCJfY3JlYXRlVk5vZGUiXSwic291cmNlcyI6WyIuLi8uLi9ub2RlX21vZHVsZXMvQGNvZGV0cml4LXN0dWRpby9jYXBhY2l0b3ItZ29vZ2xlLWF1dGgvZGlzdC9lc20vaW5kZXguanMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Hb29nbGVMb2dpbi52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVnaXN0ZXJQbHVnaW4gfSBmcm9tICdAY2FwYWNpdG9yL2NvcmUnO1xuY29uc3QgR29vZ2xlQXV0aCA9IHJlZ2lzdGVyUGx1Z2luKCdHb29nbGVBdXRoJywge1xuICAgIHdlYjogKCkgPT4gaW1wb3J0KCcuL3dlYicpLnRoZW4oKG0pID0+IG5ldyBtLkdvb2dsZUF1dGhXZWIoKSksXG59KTtcbmV4cG9ydCAqIGZyb20gJy4vZGVmaW5pdGlvbnMnO1xuZXhwb3J0IHsgR29vZ2xlQXV0aCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiPHRlbXBsYXRlPlxuICA8cS1idG5cbiAgICBAY2xpY2s9XCJTaWduaW5cIlxuICAgIDpsb2FkaW5nPVwibG9hZGluZ1wiXG4gICAgdW5lbGV2YXRlZFxuICAgIG5vLWNhcHNcbiAgICBjb2xvcj1cIm15Z3JleVwiXG4gICAgY2xhc3M9XCJmdWxsLXdpZHRoIHRleHQtd2VpZ2h0LWJvbGRcIlxuICAgIHNpemU9XCJsZ1wiXG4gID5cbiAgICA8ZGl2IGNsYXNzPVwicm93IGp1c3RpZnktYmV0d2VlbiBmdWxsLXdpZHRoXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sIHRleHQtbGVmdCB0ZXh0LWRhcmtcIj5cbiAgICAgICAge3sgJHQoXCJDb250aW51ZSB3aXRoIEdvb2dsZVwiKSB9fVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLTEgdGV4dC1yaWdodCB0ZXh0LWRhcmtcIj5cbiAgICAgICAgPHEtaWNvbiBuYW1lPVwibGFiIGxhLWdvb2dsZS1wbHVzLWdcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvcS1idG4+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgR29vZ2xlQXV0aCB9IGZyb20gXCJAY29kZXRyaXgtc3R1ZGlvL2NhcGFjaXRvci1nb29nbGUtYXV0aFwiO1xuaW1wb3J0IEFQSWludGVyZmFjZSBmcm9tIFwic3JjL2FwaS9BUElpbnRlcmZhY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIkdvb2dsZUxvZ2luXCIsXG4gIHByb3BzOiBbXCJjbGllbnRfaWRcIl0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIH07XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5pbml0KCk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBpbml0KCkge1xuICAgICAgLy9pZiAodGhpcy4kcS5wbGF0Zm9ybS5pcy5kZXNrdG9wKSB7XG4gICAgICBpZiAoIXRoaXMuJHEuY2FwYWNpdG9yKSB7XG4gICAgICAgIEdvb2dsZUF1dGguaW5pdGlhbGl6ZSh7XG4gICAgICAgICAgY2xpZW50SWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICAgIHNjb3BlczogW1wicHJvZmlsZVwiLCBcImVtYWlsXCJdLFxuICAgICAgICAgIGdyYW50T2ZmbGluZUFjY2VzczogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBHb29nbGVBdXRoLmluaXRpYWxpemUoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFNpZ25pbigpIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICBHb29nbGVBdXRoLnNpZ25JbigpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgY29uc3QgJHBhcmFtcyA9IHtcbiAgICAgICAgICAgIGlkOiBkYXRhLmlkLFxuICAgICAgICAgICAgZW1haWxfYWRkcmVzczogZGF0YS5lbWFpbCxcbiAgICAgICAgICAgIGZpcnN0X25hbWU6IGRhdGEuZ2l2ZW5OYW1lLFxuICAgICAgICAgICAgbGFzdF9uYW1lOiBkYXRhLmZhbWlseU5hbWUsXG4gICAgICAgICAgICBzb2NpYWxfc3RyYXRlZ3k6IFwiZ29vZ2xlXCIsXG4gICAgICAgICAgICBzb2NpYWxfdG9rZW46IGRhdGEuYXV0aGVudGljYXRpb24uaWRUb2tlbixcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMuJGVtaXQoXCJhZnRlckxvZ2luXCIsICRwYXJhbXMpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgaWYgKGVycm9yLmNvZGUgPT0gMTApIHtcbiAgICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXG4gICAgICAgICAgICAgIFwiZGFya1wiLFxuICAgICAgICAgICAgICBcIkVycm9yIGFwcCBpcyBub3Qgc2lnbmluXCIsXG4gICAgICAgICAgICAgIFwiZXJyb3JcIixcbiAgICAgICAgICAgICAgdGhpcy4kcVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGVycm9yLmNvZGUgPT0gLTUpIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXG4gICAgICAgICAgICAgIFwiZGFya1wiLFxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShlcnJvciksXG4gICAgICAgICAgICAgIFwiZXJyb3JcIixcbiAgICAgICAgICAgICAgdGhpcy4kcVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iXSwiZmlsZSI6ImFzc2V0cy9Hb29nbGVMb2dpbi5lNDE2MDJmZS5qcyJ9
