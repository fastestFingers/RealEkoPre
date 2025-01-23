import { W as WebPlugin } from "./index.61ed5618.js";
class GoogleAuthWeb extends WebPlugin {
  constructor() {
    super();
  }
  loadScript() {
    if (typeof document === "undefined") {
      return;
    }
    const scriptId = "gapi";
    const scriptEl = document === null || document === void 0 ? void 0 : document.getElementById(scriptId);
    if (scriptEl) {
      return;
    }
    const head = document.getElementsByTagName("head")[0];
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.defer = true;
    script.async = true;
    script.id = scriptId;
    script.onload = this.platformJsLoaded.bind(this);
    script.src = "https://apis.google.com/js/platform.js";
    head.appendChild(script);
  }
  initialize(_options = {
    clientId: "",
    scopes: [],
    grantOfflineAccess: false
  }) {
    var _a, _b;
    if (typeof window === "undefined") {
      return;
    }
    const metaClientId = (_a = document.getElementsByName("google-signin-client_id")[0]) === null || _a === void 0 ? void 0 : _a.content;
    const clientId = _options.clientId || metaClientId || "";
    if (!clientId) {
      console.warn("GoogleAuthPlugin - clientId is empty");
    }
    this.options = {
      clientId,
      grantOfflineAccess: (_b = _options.grantOfflineAccess) !== null && _b !== void 0 ? _b : false,
      scopes: _options.scopes || []
    };
    this.gapiLoaded = new Promise((resolve) => {
      window.gapiResolve = resolve;
      this.loadScript();
    });
    this.addUserChangeListener();
    return this.gapiLoaded;
  }
  platformJsLoaded() {
    gapi.load("auth2", () => {
      const clientConfig = {
        client_id: this.options.clientId,
        plugin_name: "CodetrixStudioCapacitorGoogleAuth"
      };
      if (this.options.scopes.length) {
        clientConfig.scope = this.options.scopes.join(" ");
      }
      gapi.auth2.init(clientConfig);
      window.gapiResolve();
    });
  }
  async signIn() {
    return new Promise(async (resolve, reject) => {
      var _a;
      try {
        let serverAuthCode;
        const needsOfflineAccess = (_a = this.options.grantOfflineAccess) !== null && _a !== void 0 ? _a : false;
        if (needsOfflineAccess) {
          const offlineAccessResponse = await gapi.auth2.getAuthInstance().grantOfflineAccess();
          serverAuthCode = offlineAccessResponse.code;
        } else {
          await gapi.auth2.getAuthInstance().signIn();
        }
        const googleUser = gapi.auth2.getAuthInstance().currentUser.get();
        if (needsOfflineAccess) {
          await googleUser.reloadAuthResponse();
        }
        const user = this.getUserFrom(googleUser);
        user.serverAuthCode = serverAuthCode;
        resolve(user);
      } catch (error) {
        reject(error);
      }
    });
  }
  async refresh() {
    const authResponse = await gapi.auth2.getAuthInstance().currentUser.get().reloadAuthResponse();
    return {
      accessToken: authResponse.access_token,
      idToken: authResponse.id_token,
      refreshToken: ""
    };
  }
  async signOut() {
    return gapi.auth2.getAuthInstance().signOut();
  }
  async addUserChangeListener() {
    await this.gapiLoaded;
    gapi.auth2.getAuthInstance().currentUser.listen((googleUser) => {
      this.notifyListeners("userChange", googleUser.isSignedIn() ? this.getUserFrom(googleUser) : null);
    });
  }
  getUserFrom(googleUser) {
    const user = {};
    const profile = googleUser.getBasicProfile();
    user.email = profile.getEmail();
    user.familyName = profile.getFamilyName();
    user.givenName = profile.getGivenName();
    user.id = profile.getId();
    user.imageUrl = profile.getImageUrl();
    user.name = profile.getName();
    const authResponse = googleUser.getAuthResponse(true);
    user.authentication = {
      accessToken: authResponse.access_token,
      idToken: authResponse.id_token,
      refreshToken: ""
    };
    return user;
  }
}
export { GoogleAuthWeb };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLjFmMjk1NDMzLmpzIiwic291cmNlcyI6WyIuLi8uLi9ub2RlX21vZHVsZXMvQGNvZGV0cml4LXN0dWRpby9jYXBhY2l0b3ItZ29vZ2xlLWF1dGgvZGlzdC9lc20vd2ViLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdlYlBsdWdpbiB9IGZyb20gJ0BjYXBhY2l0b3IvY29yZSc7XG5leHBvcnQgY2xhc3MgR29vZ2xlQXV0aFdlYiBleHRlbmRzIFdlYlBsdWdpbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIGxvYWRTY3JpcHQoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2NyaXB0SWQgPSAnZ2FwaSc7XG4gICAgICAgIGNvbnN0IHNjcmlwdEVsID0gZG9jdW1lbnQgPT09IG51bGwgfHwgZG9jdW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNjcmlwdElkKTtcbiAgICAgICAgaWYgKHNjcmlwdEVsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgICBzY3JpcHQuZGVmZXIgPSB0cnVlO1xuICAgICAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xuICAgICAgICBzY3JpcHQuaWQgPSBzY3JpcHRJZDtcbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IHRoaXMucGxhdGZvcm1Kc0xvYWRlZC5iaW5kKHRoaXMpO1xuICAgICAgICBzY3JpcHQuc3JjID0gJ2h0dHBzOi8vYXBpcy5nb29nbGUuY29tL2pzL3BsYXRmb3JtLmpzJztcbiAgICAgICAgaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH1cbiAgICBpbml0aWFsaXplKF9vcHRpb25zID0ge1xuICAgICAgICBjbGllbnRJZDogJycsXG4gICAgICAgIHNjb3BlczogW10sXG4gICAgICAgIGdyYW50T2ZmbGluZUFjY2VzczogZmFsc2UsXG4gICAgfSkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtZXRhQ2xpZW50SWQgPSAoX2EgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgnZ29vZ2xlLXNpZ25pbi1jbGllbnRfaWQnKVswXSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNvbnRlbnQ7XG4gICAgICAgIGNvbnN0IGNsaWVudElkID0gX29wdGlvbnMuY2xpZW50SWQgfHwgbWV0YUNsaWVudElkIHx8ICcnO1xuICAgICAgICBpZiAoIWNsaWVudElkKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0dvb2dsZUF1dGhQbHVnaW4gLSBjbGllbnRJZCBpcyBlbXB0eScpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNsaWVudElkLFxuICAgICAgICAgICAgZ3JhbnRPZmZsaW5lQWNjZXNzOiAoX2IgPSBfb3B0aW9ucy5ncmFudE9mZmxpbmVBY2Nlc3MpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IGZhbHNlLFxuICAgICAgICAgICAgc2NvcGVzOiBfb3B0aW9ucy5zY29wZXMgfHwgW10sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZ2FwaUxvYWRlZCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAvLyBIQUNLOiBSZWx5aW5nIG9uIHdpbmRvdyBvYmplY3QsIGNhbid0IGdldCBwcm9wZXJ0eSBpbiBnYXBpLmxvYWQgY2FsbGJhY2tcbiAgICAgICAgICAgIHdpbmRvdy5nYXBpUmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgICAgICB0aGlzLmxvYWRTY3JpcHQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkVXNlckNoYW5nZUxpc3RlbmVyKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmdhcGlMb2FkZWQ7XG4gICAgfVxuICAgIHBsYXRmb3JtSnNMb2FkZWQoKSB7XG4gICAgICAgIGdhcGkubG9hZCgnYXV0aDInLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vQ29kZXRyaXhTdHVkaW8vQ2FwYWNpdG9yR29vZ2xlQXV0aC9pc3N1ZXMvMjAyI2lzc3VlY29tbWVudC0xMTQ3MzkzNzg1XG4gICAgICAgICAgICBjb25zdCBjbGllbnRDb25maWcgPSB7XG4gICAgICAgICAgICAgICAgY2xpZW50X2lkOiB0aGlzLm9wdGlvbnMuY2xpZW50SWQsXG4gICAgICAgICAgICAgICAgcGx1Z2luX25hbWU6ICdDb2RldHJpeFN0dWRpb0NhcGFjaXRvckdvb2dsZUF1dGgnLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2NvcGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNsaWVudENvbmZpZy5zY29wZSA9IHRoaXMub3B0aW9ucy5zY29wZXMuam9pbignICcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ2FwaS5hdXRoMi5pbml0KGNsaWVudENvbmZpZyk7XG4gICAgICAgICAgICB3aW5kb3cuZ2FwaVJlc29sdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFzeW5jIHNpZ25JbigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IHNlcnZlckF1dGhDb2RlO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5lZWRzT2ZmbGluZUFjY2VzcyA9IChfYSA9IHRoaXMub3B0aW9ucy5ncmFudE9mZmxpbmVBY2Nlc3MpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmIChuZWVkc09mZmxpbmVBY2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2ZmbGluZUFjY2Vzc1Jlc3BvbnNlID0gYXdhaXQgZ2FwaS5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKS5ncmFudE9mZmxpbmVBY2Nlc3MoKTtcbiAgICAgICAgICAgICAgICAgICAgc2VydmVyQXV0aENvZGUgPSBvZmZsaW5lQWNjZXNzUmVzcG9uc2UuY29kZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGdhcGkuYXV0aDIuZ2V0QXV0aEluc3RhbmNlKCkuc2lnbkluKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGdvb2dsZVVzZXIgPSBnYXBpLmF1dGgyLmdldEF1dGhJbnN0YW5jZSgpLmN1cnJlbnRVc2VyLmdldCgpO1xuICAgICAgICAgICAgICAgIGlmIChuZWVkc09mZmxpbmVBY2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSEFDSzogQXV0aFJlc3BvbnNlIGlzIG51bGwgaWYgd2UgZG9uJ3QgZG8gdGhpcyB3aGVuIHVzaW5nIGdyYW50T2ZmbGluZUFjY2Vzc1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBnb29nbGVVc2VyLnJlbG9hZEF1dGhSZXNwb25zZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyID0gdGhpcy5nZXRVc2VyRnJvbShnb29nbGVVc2VyKTtcbiAgICAgICAgICAgICAgICB1c2VyLnNlcnZlckF1dGhDb2RlID0gc2VydmVyQXV0aENvZGU7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh1c2VyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhc3luYyByZWZyZXNoKCkge1xuICAgICAgICBjb25zdCBhdXRoUmVzcG9uc2UgPSBhd2FpdCBnYXBpLmF1dGgyLmdldEF1dGhJbnN0YW5jZSgpLmN1cnJlbnRVc2VyLmdldCgpLnJlbG9hZEF1dGhSZXNwb25zZSgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWNjZXNzVG9rZW46IGF1dGhSZXNwb25zZS5hY2Nlc3NfdG9rZW4sXG4gICAgICAgICAgICBpZFRva2VuOiBhdXRoUmVzcG9uc2UuaWRfdG9rZW4sXG4gICAgICAgICAgICByZWZyZXNoVG9rZW46ICcnLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBhc3luYyBzaWduT3V0KCkge1xuICAgICAgICByZXR1cm4gZ2FwaS5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKS5zaWduT3V0KCk7XG4gICAgfVxuICAgIGFzeW5jIGFkZFVzZXJDaGFuZ2VMaXN0ZW5lcigpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5nYXBpTG9hZGVkO1xuICAgICAgICBnYXBpLmF1dGgyLmdldEF1dGhJbnN0YW5jZSgpLmN1cnJlbnRVc2VyLmxpc3RlbigoZ29vZ2xlVXNlcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlMaXN0ZW5lcnMoJ3VzZXJDaGFuZ2UnLCBnb29nbGVVc2VyLmlzU2lnbmVkSW4oKSA/IHRoaXMuZ2V0VXNlckZyb20oZ29vZ2xlVXNlcikgOiBudWxsKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldFVzZXJGcm9tKGdvb2dsZVVzZXIpIHtcbiAgICAgICAgY29uc3QgdXNlciA9IHt9O1xuICAgICAgICBjb25zdCBwcm9maWxlID0gZ29vZ2xlVXNlci5nZXRCYXNpY1Byb2ZpbGUoKTtcbiAgICAgICAgdXNlci5lbWFpbCA9IHByb2ZpbGUuZ2V0RW1haWwoKTtcbiAgICAgICAgdXNlci5mYW1pbHlOYW1lID0gcHJvZmlsZS5nZXRGYW1pbHlOYW1lKCk7XG4gICAgICAgIHVzZXIuZ2l2ZW5OYW1lID0gcHJvZmlsZS5nZXRHaXZlbk5hbWUoKTtcbiAgICAgICAgdXNlci5pZCA9IHByb2ZpbGUuZ2V0SWQoKTtcbiAgICAgICAgdXNlci5pbWFnZVVybCA9IHByb2ZpbGUuZ2V0SW1hZ2VVcmwoKTtcbiAgICAgICAgdXNlci5uYW1lID0gcHJvZmlsZS5nZXROYW1lKCk7XG4gICAgICAgIGNvbnN0IGF1dGhSZXNwb25zZSA9IGdvb2dsZVVzZXIuZ2V0QXV0aFJlc3BvbnNlKHRydWUpO1xuICAgICAgICB1c2VyLmF1dGhlbnRpY2F0aW9uID0ge1xuICAgICAgICAgICAgYWNjZXNzVG9rZW46IGF1dGhSZXNwb25zZS5hY2Nlc3NfdG9rZW4sXG4gICAgICAgICAgICBpZFRva2VuOiBhdXRoUmVzcG9uc2UuaWRfdG9rZW4sXG4gICAgICAgICAgICByZWZyZXNoVG9rZW46ICcnLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdXNlcjtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD13ZWIuanMubWFwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDTyxNQUFNLHNCQUFzQixVQUFVO0FBQUEsRUFDekMsY0FBYztBQUNWO0VBQ0g7QUFBQSxFQUNELGFBQWE7QUFDVCxRQUFJLE9BQU8sYUFBYSxhQUFhO0FBQ2pDO0FBQUEsSUFDSDtBQUNELFVBQU0sV0FBVztBQUNqQixVQUFNLFdBQVcsYUFBYSxRQUFRLGFBQWEsU0FBUyxTQUFTLFNBQVMsZUFBZSxRQUFRO0FBQ3JHLFFBQUksVUFBVTtBQUNWO0FBQUEsSUFDSDtBQUNELFVBQU0s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
