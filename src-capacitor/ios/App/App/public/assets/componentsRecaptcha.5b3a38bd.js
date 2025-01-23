import { _ as _export_sfc, p as openBlock, V as createElementBlock } from "./index.61ed5618.js";
const _sfc_main = {
  name: "componentsRecaptcha",
  props: ["sitekey", "size", "theme", "is_enabled", "language_code"],
  data() {
    return {
      recaptcha: null
    };
  },
  mounted() {
    if (this.is_enabled === "1") {
      this.initCapcha();
    }
  },
  methods: {
    initCapcha() {
      if (window.grecaptcha == null) {
        new Promise((resolve) => {
          window.recaptchaReady = function() {
            resolve();
          };
          const doc = window.document;
          const scriptId = "recaptcha-script";
          const scriptTag = doc.createElement("script");
          scriptTag.id = scriptId;
          scriptTag.setAttribute(
            "src",
            "https://www.google.com/recaptcha/api.js?onload=recaptchaReady&render=explicit&hl=" + this.language_code
          );
          doc.head.appendChild(scriptTag);
        }).then(() => {
          this.renderRecaptcha();
        });
      } else {
        this.renderRecaptcha();
      }
    },
    renderRecaptcha() {
      this.recaptcha = grecaptcha.render(this.$refs.recaptcha_target, {
        sitekey: this.sitekey,
        theme: this.theme,
        size: this.size,
        tabindex: this.tabindex,
        callback: (response) => this.$emit("verify", response),
        "expired-callback": () => this.$emit("expire"),
        "error-callback": () => this.$emit("fail")
      });
    },
    reset() {
      grecaptcha.reset(this.recaptcha);
    }
  }
};
const _hoisted_1 = { ref: "recaptcha_target" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, null, 512);
}
var componentsRecaptcha = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "componentsRecaptcha.vue"]]);
export { componentsRecaptcha as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50c1JlY2FwdGNoYS41YjNhMzhiZC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvY29tcG9uZW50c1JlY2FwdGNoYS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IHJlZj1cInJlY2FwdGNoYV90YXJnZXRcIj48L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiY29tcG9uZW50c1JlY2FwdGNoYVwiLFxuICBwcm9wczogW1wic2l0ZWtleVwiLCBcInNpemVcIiwgXCJ0aGVtZVwiLCBcImlzX2VuYWJsZWRcIiwgXCJsYW5ndWFnZV9jb2RlXCJdLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICByZWNhcHRjaGE6IG51bGwsXG4gICAgfTtcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICBpZiAodGhpcy5pc19lbmFibGVkID09PSBcIjFcIikge1xuICAgICAgdGhpcy5pbml0Q2FwY2hhKCk7XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgaW5pdENhcGNoYSgpIHtcbiAgICAgIGlmICh3aW5kb3cuZ3JlY2FwdGNoYSA9PSBudWxsKSB7XG4gICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgd2luZG93LnJlY2FwdGNoYVJlYWR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICBjb25zdCBkb2MgPSB3aW5kb3cuZG9jdW1lbnQ7XG4gICAgICAgICAgY29uc3Qgc2NyaXB0SWQgPSBcInJlY2FwdGNoYS1zY3JpcHRcIjtcbiAgICAgICAgICBjb25zdCBzY3JpcHRUYWcgPSBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICBzY3JpcHRUYWcuaWQgPSBzY3JpcHRJZDtcbiAgICAgICAgICBzY3JpcHRUYWcuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgXCJzcmNcIixcbiAgICAgICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9yZWNhcHRjaGEvYXBpLmpzP29ubG9hZD1yZWNhcHRjaGFSZWFkeSZyZW5kZXI9ZXhwbGljaXQmaGw9XCIgK1xuICAgICAgICAgICAgICB0aGlzLmxhbmd1YWdlX2NvZGVcbiAgICAgICAgICApO1xuICAgICAgICAgIGRvYy5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdFRhZyk7XG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMucmVuZGVyUmVjYXB0Y2hhKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJSZWNhcHRjaGEoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHJlbmRlclJlY2FwdGNoYSgpIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlICovXG4gICAgICB0aGlzLnJlY2FwdGNoYSA9IGdyZWNhcHRjaGEucmVuZGVyKHRoaXMuJHJlZnMucmVjYXB0Y2hhX3RhcmdldCwge1xuICAgICAgICBzaXRla2V5OiB0aGlzLnNpdGVrZXksXG4gICAgICAgIHRoZW1lOiB0aGlzLnRoZW1lLFxuICAgICAgICBzaXplOiB0aGlzLnNpemUsXG4gICAgICAgIHRhYmluZGV4OiB0aGlzLnRhYmluZGV4LFxuICAgICAgICBjYWxsYmFjazogKHJlc3BvbnNlKSA9PiB0aGlzLiRlbWl0KFwidmVyaWZ5XCIsIHJlc3BvbnNlKSxcbiAgICAgICAgXCJleHBpcmVkLWNhbGxiYWNrXCI6ICgpID0+IHRoaXMuJGVtaXQoXCJleHBpcmVcIiksXG4gICAgICAgIFwiZXJyb3ItY2FsbGJhY2tcIjogKCkgPT4gdGhpcy4kZW1pdChcImZhaWxcIiksXG4gICAgICB9KTtcbiAgICB9LFxuICAgIHJlc2V0KCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgICAgIGdyZWNhcHRjaGEucmVzZXQodGhpcy5yZWNhcHRjaGEpO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50QmxvY2siXSwibWFwcGluZ3MiOiI7QUFLQSxNQUFLLFlBQVU7QUFBQSxFQUNiLE1BQU07QUFBQSxFQUNOLE9BQU8sQ0FBQyxXQUFXLFFBQVEsU0FBUyxjQUFjLGVBQWU7QUFBQSxFQUNqRSxPQUFPO0FBQ0wsV0FBTztBQUFBLE1BQ0wsV0FBVztBQUFBO0VBRWQ7QUFBQSxFQUNELFVBQVU7QUFDUixRQUFJLEtBQUssZUFBZSxLQUFLO0FBQzNCLFdBQUssV0FBVTtBQUFBLElBQ2pCO0FBQUEsRUFDRDtBQUFBLEVBQ0QsU0FBUztBQUFBLElBQ1AsYUFBYTtBQUNYLFVBQUksT0FBTyxjQUFjLE1BQU07QUFDN0IsWUFBSSxRQUFRLENBQUMsWUFBWTtBQUN2QixpQkFBTyxpQkFBaUIsV0FBWTtBQUNsQzs7QUFHRixnQkFBTSxNQUFNLE9BQU87QUFDbkIsZ0JBQU0sV0FBVztBQUNqQixnQkFBTSxZQUFZLElBQUksY0FBYyxRQUFRO0FBQzVDLG9CQUFVLEtBQUs7QUFDZixvQkFBVTtBQUFBLFlBQ1I7QUFBQSxZQUNBLHNGQUNFLEtBQUs7QUFBQTtBQUVULGNBQUksS0FBSyxZQUFZLFNBQVM7QUFBQSxTQUMvQixFQUFFLEtBQUssTUFBTTtBQUNaLGVBQUssZ0JBQWU7QUFBQSxRQUN0QixDQUFDO0FBQUEsYUFDSTtBQUNMLGFBQUssZ0JBQWU7QUFBQSxNQUN0QjtBQUFBLElBQ0Q7QUFBQSxJQUNELGtCQUFrQjtBQUVoQixXQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssTUFBTSxrQkFBa0I7QUFBQSxRQUM5RCxTQUFTLEtBQUs7QUFBQSxRQUNkLE9BQU8sS0FBSztBQUFBLFFBQ1osTUFBTSxLQUFLO0FBQUEsUUFDWCxVQUFVLEtBQUs7QUFBQSxRQUNmLFVBQVUsQ0FBQyxhQUFhLEtBQUssTUFBTSxVQUFVLFFBQVE7QUFBQSxRQUNyRCxvQkFBb0IsTUFBTSxLQUFLLE1BQU0sUUFBUTtBQUFBLFFBQzdDLGtCQUFrQixNQUFNLEtBQUssTUFBTSxNQUFNO0FBQUEsTUFDM0MsQ0FBQztBQUFBLElBQ0Y7QUFBQSxJQUNELFFBQVE7QUFFTixpQkFBVyxNQUFNLEtBQUssU0FBUztBQUFBLElBQ2hDO0FBQUEsRUFDRjtBQUNIO0FBM0RPLE1BQUEsYUFBQSxFQUFBLEtBQUksbUJBQWtCOztBQUEzQixTQUFBQSxVQUFBLEdBQUFDLG1CQUFrQyxPQUFsQyxZQUFrQyxNQUFBLEdBQUE7Ozs7In0=
