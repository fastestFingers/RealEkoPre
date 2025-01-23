import { _ as _export_sfc, m as APIinterface, p as openBlock, V as createElementBlock, f as createVNode, t as withCtx, a7 as normalizeClass, F as Fragment, Y as QBtn, a6 as createTextVNode, Z as toDisplayString, a8 as QCard, a9 as QCardSection, aY as QInput } from "./index.61ed5618.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QFooter } from "./QFooter.571ac042.js";
import { Q as QForm } from "./QForm.7ded9d38.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import "./QResizeObserver.d08dce3c.js";
const _sfc_main = {
  name: "ChangePassword",
  data() {
    return {
      loading: false,
      old_password: "",
      new_password: "",
      confirm_password: ""
    };
  },
  methods: {
    onSubmit() {
      const params = {
        old_password: this.old_password,
        new_password: this.new_password,
        confirm_password: this.confirm_password
      };
      this.loading = true;
      APIinterface.showLoadingBox("", this.$q);
      APIinterface.updatePassword(params).then((data) => {
        APIinterface.notify("light-green", data.msg, "check_circle", this.$q);
        this.onReset();
      }).catch((error) => {
        APIinterface.notify("grey-8", error, "error_outline", this.$q);
      }).then((data) => {
        this.loading = false;
        APIinterface.hideLoadingBox(this.$q);
      });
    },
    onReset() {
      this.old_password.value = "";
      this.new_password.value = "";
      this.confirm_password.value = "";
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(QHeader, {
      class: normalizeClass({
        "bg-mydark text-white": _ctx.$q.dark.mode,
        "bg-grey-1 text-dark": !_ctx.$q.dark.mode
      })
    }, {
      default: withCtx(() => [
        createVNode(QToolbar, null, {
          default: withCtx(() => [
            createVNode(QBtn, {
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$router.back()),
              flat: "",
              round: "",
              dense: "",
              icon: "las la-angle-left",
              class: "q-mr-sm",
              color: _ctx.$q.dark.mode ? "white" : "dark"
            }, null, 8, ["color"]),
            createVNode(QToolbarTitle, { class: "text-weight-bold" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("Change Password")), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["class"]),
    createVNode(QPage, {
      padding: "",
      class: normalizeClass(["q-pl-md q-pr-md row items-stretch", {
        "bg-mydark ": _ctx.$q.dark.mode,
        "bg-grey-1": !_ctx.$q.dark.mode
      }])
    }, {
      default: withCtx(() => [
        createVNode(QCard, {
          flat: "",
          class: normalizeClass(["col-12", {
            "bg-mydark text-white": _ctx.$q.dark.mode,
            "bg-white text-black": !_ctx.$q.dark.mode
          }])
        }, {
          default: withCtx(() => [
            createVNode(QCardSection, null, {
              default: withCtx(() => [
                createVNode(QForm, { onSubmit: $options.onSubmit }, {
                  default: withCtx(() => [
                    createVNode(QInput, {
                      modelValue: $data.old_password,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.old_password = $event),
                      type: "password",
                      label: _ctx.$t("Current Password"),
                      outlined: "",
                      "lazy-rules": "",
                      "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
                      "label-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                      rules: [
                        (val) => val && val.length > 0 || "This field is required"
                      ]
                    }, null, 8, ["modelValue", "label", "bg-color", "label-color", "rules"]),
                    createVNode(QInput, {
                      modelValue: $data.new_password,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.new_password = $event),
                      type: "password",
                      label: _ctx.$t("New Password"),
                      outlined: "",
                      "lazy-rules": "",
                      "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
                      "label-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                      rules: [
                        (val) => val && val.length > 0 || "This field is required"
                      ]
                    }, null, 8, ["modelValue", "label", "bg-color", "label-color", "rules"]),
                    createVNode(QInput, {
                      modelValue: $data.confirm_password,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.confirm_password = $event),
                      type: "password",
                      label: _ctx.$t("Retype New Password"),
                      outlined: "",
                      "lazy-rules": "",
                      "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
                      "label-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                      rules: [
                        (val) => val && val.length > 0 || "This field is required"
                      ]
                    }, null, 8, ["modelValue", "label", "bg-color", "label-color", "rules"]),
                    createVNode(QFooter, {
                      reveal: "",
                      class: "bg-grey-1 q-pl-md q-pr-md q-pb-sm q-pt-sm text-dark"
                    }, {
                      default: withCtx(() => [
                        createVNode(QBtn, {
                          type: "submit",
                          label: _ctx.$t("Save"),
                          unelevated: "",
                          "no-caps": "",
                          color: "primary text-white",
                          class: "full-width text-weight-bold",
                          size: "lg",
                          loading: $data.loading
                        }, null, 8, ["label", "loading"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["onSubmit"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["class"])
      ]),
      _: 1
    }, 8, ["class"])
  ], 64);
}
var ChangePassword = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "ChangePassword.vue"]]);
export { ChangePassword as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhbmdlUGFzc3dvcmQuZDI2YTM3NDUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9BY2NvdW50L0NoYW5nZVBhc3N3b3JkLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLWhlYWRlclxuICAgIDpjbGFzcz1cIntcbiAgICAgICdiZy1teWRhcmsgdGV4dC13aGl0ZSc6ICRxLmRhcmsubW9kZSxcbiAgICAgICdiZy1ncmV5LTEgdGV4dC1kYXJrJzogISRxLmRhcmsubW9kZSxcbiAgICB9XCJcbiAgPlxuICAgIDxxLXRvb2xiYXI+XG4gICAgICA8cS1idG5cbiAgICAgICAgQGNsaWNrPVwiJHJvdXRlci5iYWNrKClcIlxuICAgICAgICBmbGF0XG4gICAgICAgIHJvdW5kXG4gICAgICAgIGRlbnNlXG4gICAgICAgIGljb249XCJsYXMgbGEtYW5nbGUtbGVmdFwiXG4gICAgICAgIGNsYXNzPVwicS1tci1zbVwiXG4gICAgICAgIDpjb2xvcj1cIiRxLmRhcmsubW9kZSA/ICd3aGl0ZScgOiAnZGFyaydcIlxuICAgICAgLz5cbiAgICAgIDxxLXRvb2xiYXItdGl0bGUgY2xhc3M9XCJ0ZXh0LXdlaWdodC1ib2xkXCI+e3tcbiAgICAgICAgJHQoXCJDaGFuZ2UgUGFzc3dvcmRcIilcbiAgICAgIH19PC9xLXRvb2xiYXItdGl0bGU+XG4gICAgPC9xLXRvb2xiYXI+XG4gIDwvcS1oZWFkZXI+XG4gIDxxLXBhZ2VcbiAgICBwYWRkaW5nXG4gICAgY2xhc3M9XCJxLXBsLW1kIHEtcHItbWQgcm93IGl0ZW1zLXN0cmV0Y2hcIlxuICAgIDpjbGFzcz1cIntcbiAgICAgICdiZy1teWRhcmsgJzogJHEuZGFyay5tb2RlLFxuICAgICAgJ2JnLWdyZXktMSc6ICEkcS5kYXJrLm1vZGUsXG4gICAgfVwiXG4gID5cbiAgICA8cS1jYXJkXG4gICAgICBmbGF0XG4gICAgICBjbGFzcz1cImNvbC0xMlwiXG4gICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICdiZy1teWRhcmsgdGV4dC13aGl0ZSc6ICRxLmRhcmsubW9kZSxcbiAgICAgICAgJ2JnLXdoaXRlIHRleHQtYmxhY2snOiAhJHEuZGFyay5tb2RlLFxuICAgICAgfVwiXG4gICAgPlxuICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICA8cS1mb3JtIEBzdWJtaXQ9XCJvblN1Ym1pdFwiPlxuICAgICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgICB2LW1vZGVsPVwib2xkX3Bhc3N3b3JkXCJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICA6bGFiZWw9XCIkdCgnQ3VycmVudCBQYXNzd29yZCcpXCJcbiAgICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgICBsYXp5LXJ1bGVzXG4gICAgICAgICAgICA6YmctY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTYwMCcgOiAnaW5wdXQnXCJcbiAgICAgICAgICAgIDpsYWJlbC1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICdncmV5J1wiXG4gICAgICAgICAgICA6cnVsZXM9XCJbXG4gICAgICAgICAgICAgICh2YWwpID0+ICh2YWwgJiYgdmFsLmxlbmd0aCA+IDApIHx8ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJyxcbiAgICAgICAgICAgIF1cIlxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8cS1pbnB1dFxuICAgICAgICAgICAgdi1tb2RlbD1cIm5ld19wYXNzd29yZFwiXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ05ldyBQYXNzd29yZCcpXCJcbiAgICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgICBsYXp5LXJ1bGVzXG4gICAgICAgICAgICA6YmctY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTYwMCcgOiAnaW5wdXQnXCJcbiAgICAgICAgICAgIDpsYWJlbC1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICdncmV5J1wiXG4gICAgICAgICAgICA6cnVsZXM9XCJbXG4gICAgICAgICAgICAgICh2YWwpID0+ICh2YWwgJiYgdmFsLmxlbmd0aCA+IDApIHx8ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJyxcbiAgICAgICAgICAgIF1cIlxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8cS1pbnB1dFxuICAgICAgICAgICAgdi1tb2RlbD1cImNvbmZpcm1fcGFzc3dvcmRcIlxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdSZXR5cGUgTmV3IFBhc3N3b3JkJylcIlxuICAgICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICAgIGxhenktcnVsZXNcbiAgICAgICAgICAgIDpiZy1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5NjAwJyA6ICdpbnB1dCdcIlxuICAgICAgICAgICAgOmxhYmVsLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXkzMDAnIDogJ2dyZXknXCJcbiAgICAgICAgICAgIDpydWxlcz1cIltcbiAgICAgICAgICAgICAgKHZhbCkgPT4gKHZhbCAmJiB2YWwubGVuZ3RoID4gMCkgfHwgJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnLFxuICAgICAgICAgICAgXVwiXG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxxLWZvb3RlclxuICAgICAgICAgICAgcmV2ZWFsXG4gICAgICAgICAgICBjbGFzcz1cImJnLWdyZXktMSBxLXBsLW1kIHEtcHItbWQgcS1wYi1zbSBxLXB0LXNtIHRleHQtZGFya1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnU2F2ZScpXCJcbiAgICAgICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeSB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJmdWxsLXdpZHRoIHRleHQtd2VpZ2h0LWJvbGRcIlxuICAgICAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgICAgICA6bG9hZGluZz1cImxvYWRpbmdcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3EtZm9vdGVyPlxuICAgICAgICA8L3EtZm9ybT5cbiAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgPC9xLWNhcmQ+XG4gIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBBUElpbnRlcmZhY2UgZnJvbSBcInNyYy9hcGkvQVBJaW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJDaGFuZ2VQYXNzd29yZFwiLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIG9sZF9wYXNzd29yZDogXCJcIixcbiAgICAgIG5ld19wYXNzd29yZDogXCJcIixcbiAgICAgIGNvbmZpcm1fcGFzc3dvcmQ6IFwiXCIsXG4gICAgfTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG9uU3VibWl0KCkge1xuICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICBvbGRfcGFzc3dvcmQ6IHRoaXMub2xkX3Bhc3N3b3JkLFxuICAgICAgICBuZXdfcGFzc3dvcmQ6IHRoaXMubmV3X3Bhc3N3b3JkLFxuICAgICAgICBjb25maXJtX3Bhc3N3b3JkOiB0aGlzLmNvbmZpcm1fcGFzc3dvcmQsXG4gICAgICB9O1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIEFQSWludGVyZmFjZS5zaG93TG9hZGluZ0JveChcIlwiLCB0aGlzLiRxKTtcbiAgICAgIEFQSWludGVyZmFjZS51cGRhdGVQYXNzd29yZChwYXJhbXMpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgQVBJaW50ZXJmYWNlLm5vdGlmeShcImxpZ2h0LWdyZWVuXCIsIGRhdGEubXNnLCBcImNoZWNrX2NpcmNsZVwiLCB0aGlzLiRxKTtcbiAgICAgICAgICB0aGlzLm9uUmVzZXQoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJncmV5LThcIiwgZXJyb3IsIFwiZXJyb3Jfb3V0bGluZVwiLCB0aGlzLiRxKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBBUElpbnRlcmZhY2UuaGlkZUxvYWRpbmdCb3godGhpcy4kcSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgb25SZXNldCgpIHtcbiAgICAgIHRoaXMub2xkX3Bhc3N3b3JkLnZhbHVlID0gXCJcIjtcbiAgICAgIHRoaXMubmV3X3Bhc3N3b3JkLnZhbHVlID0gXCJcIjtcbiAgICAgIHRoaXMuY29uZmlybV9wYXNzd29yZC52YWx1ZSA9IFwiXCI7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfY3JlYXRlVk5vZGUiLCJfbm9ybWFsaXplQ2xhc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBdUdBLE1BQUssWUFBVTtBQUFBLEVBQ2IsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUNMLFdBQU87QUFBQSxNQUNMLFNBQVM7QUFBQSxNQUNULGNBQWM7QUFBQSxNQUNkLGNBQWM7QUFBQSxNQUNkLGtCQUFrQjtBQUFBO0VBRXJCO0FBQUEsRUFDRCxTQUFTO0FBQUEsSUFDUCxXQUFXO0FBQ1QsWUFBTSxTQUFTO0FBQUEsUUFDYixjQUFjLEtBQUs7QUFBQSxRQUNuQixjQUFjLEtBQUs7QUFBQSxRQUNuQixrQkFBa0IsS0FBSztBQUFBO0FBRXpCLFdBQUssVUFBVTtBQUNmLG1CQUFhLGVBQWUsSUFBSSxLQUFLLEVBQUU7QUFDdkMsbUJBQWEsZUFBZSxNQUFNLEVBQy9CLEtBQUssQ0FBQyxTQUFT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
