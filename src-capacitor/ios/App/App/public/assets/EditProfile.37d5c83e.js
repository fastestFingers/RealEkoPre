import { _ as _export_sfc, l as defineAsyncComponent, bC as config, R as useDataStore, aw as auth, m as APIinterface, n as resolveComponent, p as openBlock, V as createElementBlock, f as createVNode, t as withCtx, a7 as normalizeClass, F as Fragment, Y as QBtn, a6 as createTextVNode, Z as toDisplayString, U as createBaseVNode, ae as QAvatar, q as createBlock, aA as createCommentVNode, a8 as QCard, a9 as QCardSection, aY as QInput, ac as QItem, bg as normalizeProps, bh as guardReactiveProps, ad as QItemSection, u as __vitePreload } from "./index.61ed5618.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QImg } from "./QImg.6c27044c.js";
import { Q as QUploader } from "./QUploader.bc1da65d.js";
import { Q as QItemLabel } from "./QItemLabel.a9365c5b.js";
import { Q as QSelect } from "./QSelect.311187d6.js";
import { Q as QSpace } from "./QSpace.f164c087.js";
import { Q as QForm } from "./QForm.7ded9d38.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import { A as AppCamera } from "./AppCamera.007aea33.js";
import "./QResizeObserver.d08dce3c.js";
import "./QCircularProgress.996c3e2f.js";
import "./format.7f7370d3.js";
import "./QChip.f183a4f1.js";
import "./QMenu.8e482cd8.js";
import "./selection.50b4cb0c.js";
import "./rtl.f3ed811c.js";
import "./vue-i18n.runtime.esm-bundler.fc6ce9e4.js";
const _sfc_main = {
  name: "EditProfile",
  components: {
    StepsVerification: defineAsyncComponent(
      () => __vitePreload(() => import("./StepsVerification.64f7b221.js"), true ? ["assets/StepsVerification.64f7b221.js","assets/QSpace.f164c087.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QToolbar.c8fc6962.js","assets/QForm.7ded9d38.js","assets/QInnerLoading.abe2afe6.js"] : void 0)
    )
  },
  data() {
    return {
      loading: false,
      first_name: "",
      last_name: "",
      email_address: "",
      mobile_number: "",
      mobile_prefix: "",
      avatar: "",
      original_email_address: "",
      original_mobile_number: "",
      sent_message: "",
      upload_api: config.api_base_url + "/interface/updateAvatar",
      upload_enabled: false,
      filename: "",
      upload_path: "",
      photo_data: ""
    };
  },
  setup() {
    const DataStore = useDataStore();
    return { DataStore };
  },
  created() {
    this.getCurrentProfile();
  },
  computed: {
    hasData() {
      if (Object.keys(this.photo_data).length > 0) {
        return true;
      }
      return false;
    }
  },
  methods: {
    getCurrentProfile() {
      const $oldprofile = auth.getUser();
      if ($oldprofile) {
        this.original_email_address = $oldprofile.email_address;
        this.original_mobile_number = $oldprofile.contact_number;
        this.first_name = $oldprofile.first_name;
        this.last_name = $oldprofile.last_name;
        this.mobile_number = $oldprofile.contact_number_noprefix;
        this.mobile_prefix = $oldprofile.phone_prefix;
        this.email_address = $oldprofile.email_address;
        this.avatar = $oldprofile.avatar;
      }
    },
    checkForm() {
      let _change = false;
      if (this.email_address !== this.original_email_address) {
        _change = true;
      }
      const phone = this.mobile_prefix + this.mobile_number;
      if (phone !== this.original_mobile_number) {
        _change = true;
      }
      console.log(_change);
      if (_change) {
        this.loading = true;
        APIinterface.RequestEmailCode().then((data) => {
          this.sent_message = data.msg;
          this.show_modal = false;
          this.$refs.steps_verification.show_modal = true;
        }).catch((error) => {
          APIinterface.notify("dark", error, "error", this.$q);
        }).then((data) => {
          this.loading = false;
        });
      } else {
        this.onSubmit("");
      }
    },
    onSubmit(code) {
      this.loading = true;
      APIinterface.showLoadingBox("", this.$q);
      const params = {
        code,
        first_name: this.first_name,
        last_name: this.last_name,
        email_address: this.email_address,
        mobile_number: this.mobile_number,
        mobile_prefix: this.mobile_prefix,
        filename: this.filename,
        upload_path: this.upload_path,
        file_data: this.hadData() ? this.photo_data.data : "",
        image_type: this.hadData() ? this.photo_data.format : ""
      };
      APIinterface.saveProfile(params).then((data) => {
        this.$refs.steps_verification.show_modal = false;
        auth.setUser(data.details);
        APIinterface.notify("green", data.msg, "check", this.$q);
        this.getCurrentProfile();
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data) => {
        this.loading = false;
        APIinterface.hideLoadingBox(this.$q);
      });
    },
    afterVerifycode(code) {
      this.onSubmit(code);
    },
    getToken() {
      return auth.getToken();
    },
    afterUploaded(files) {
      const response = JSON.parse(files.xhr.responseText);
      if (response.code === 1) {
        this.avatar = response.details.url_image;
        this.filename = response.details.filename;
        this.upload_path = response.details.upload_path;
      } else {
        this.avatar = "";
        this.filename = "";
        this.upload_path = "";
        APIinterface.notify("dark", response.msg, "error", this.$q);
      }
    },
    takePhoto() {
      AppCamera.isCameraEnabled().then((data) => {
        AppCamera.isFileAccessEnabled().then((data2) => {
          AppCamera.getPhoto(1).then((data3) => {
            this.photo_data = data3;
          }).catch((error) => {
            this.photo_data = [];
          });
        }).catch((error) => {
          if (this.$q.platform.is.ios) {
            this.upload_enabled = !this.upload_enabled;
          }
        });
      }).catch((error) => {
        if (this.$q.platform.is.ios) {
          this.upload_enabled = !this.upload_enabled;
        }
      });
    },
    hadData() {
      if (Object.keys(this.photo_data).length > 0) {
        return true;
      }
      return false;
    }
  }
};
const _hoisted_1 = { class: "flex flex-center q-mb-md" };
const _hoisted_2 = { class: "relative-position" };
const _hoisted_3 = {
  class: "absolute-right",
  style: { "top": "20px", "right": "-10px" }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_StepsVerification = resolveComponent("StepsVerification");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(QHeader, {
      reveal: "",
      "reveal-offset": "50",
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
                createTextVNode(toDisplayString(_ctx.$t("Edit Profile")), 1)
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
        "bg-grey-1 ": !_ctx.$q.dark.mode
      }])
    }, {
      default: withCtx(() => [
        createVNode(QForm, {
          onSubmit: $options.checkForm,
          class: "col-12"
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_1, [
              createBaseVNode("div", _hoisted_2, [
                createVNode(QAvatar, { size: "60px" }, {
                  default: withCtx(() => [
                    $options.hasData ? (openBlock(), createBlock(QImg, {
                      key: 0,
                      src: $data.photo_data.path,
                      "spinner-color": "primary",
                      "spinner-size": "sm",
                      fit: "cover"
                    }, null, 8, ["src"])) : (openBlock(), createBlock(QImg, {
                      key: 1,
                      src: $data.avatar,
                      class: "fit",
                      fit: "cover",
                      "spinner-size": "sm",
                      "spinner-color": "primary"
                    }, null, 8, ["src"]))
                  ]),
                  _: 1
                }),
                createBaseVNode("div", _hoisted_3, [
                  _ctx.$q.capacitor ? (openBlock(), createBlock(QBtn, {
                    key: 0,
                    round: "",
                    color: _ctx.$q.dark.mode ? "grey600" : "primary",
                    "text-color": _ctx.$q.dark.mode ? "grey300" : "white",
                    icon: "las la-pen",
                    size: "8px",
                    unelevated: "",
                    onClick: $options.takePhoto
                  }, null, 8, ["color", "text-color", "onClick"])) : (openBlock(), createBlock(QBtn, {
                    key: 1,
                    round: "",
                    color: _ctx.$q.dark.mode ? "grey600" : "primary",
                    "text-color": _ctx.$q.dark.mode ? "grey300" : "white",
                    icon: "las la-pen",
                    size: "8px",
                    unelevated: "",
                    onClick: _cache[1] || (_cache[1] = ($event) => $data.upload_enabled = !$data.upload_enabled)
                  }, null, 8, ["color", "text-color"]))
                ])
              ])
            ]),
            $data.upload_enabled ? (openBlock(), createBlock(QUploader, {
              key: 0,
              url: $data.upload_api,
              label: _ctx.$t("Upload files"),
              color: _ctx.$q.dark.mode ? "grey600" : "primary",
              "text-color": _ctx.$q.dark.mode ? "grey300" : "white",
              "no-thumbnails": "",
              class: "full-width q-mb-md",
              flat: "",
              accept: ".jpg, image/*",
              bordered: "",
              "max-files": 1,
              "auto-upload": "",
              "max-total-size": "1048576",
              onRejected: _ctx.onRejectedFiles,
              headers: [
                { name: "Authorization", value: `token ${this.getToken()}` }
              ],
              "field-name": "file",
              onUploaded: $options.afterUploaded
            }, null, 8, ["url", "label", "color", "text-color", "onRejected", "headers", "onUploaded"])) : createCommentVNode("", true),
            createVNode(QCard, {
              flat: "",
              class: normalizeClass({
                "bg-mydark text-white": _ctx.$q.dark.mode,
                "bg-white text-black": !_ctx.$q.dark.mode
              })
            }, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    createVNode(QInput, {
                      modelValue: $data.first_name,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.first_name = $event),
                      label: _ctx.$t("First name"),
                      outlined: "",
                      "lazy-rules": "",
                      "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
                      "label-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                      rules: [
                        (val) => val && val.length > 0 || this.$t("This field is required")
                      ]
                    }, null, 8, ["modelValue", "label", "bg-color", "label-color", "rules"]),
                    createVNode(QInput, {
                      modelValue: $data.last_name,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.last_name = $event),
                      label: _ctx.$t("Last name"),
                      outlined: "",
                      "lazy-rules": "",
                      "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
                      "label-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                      rules: [
                        (val) => val && val.length > 0 || this.$t("This field is required")
                      ]
                    }, null, 8, ["modelValue", "label", "bg-color", "label-color", "rules"]),
                    createVNode(QInput, {
                      modelValue: $data.email_address,
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.email_address = $event),
                      label: _ctx.$t("Email address"),
                      outlined: "",
                      "lazy-rules": "",
                      "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
                      "label-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                      rules: [
                        (val) => val && val.length > 0 || this.$t("This field is required")
                      ]
                    }, null, 8, ["modelValue", "label", "bg-color", "label-color", "rules"]),
                    createVNode(QInput, {
                      modelValue: $data.mobile_number,
                      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.mobile_number = $event),
                      mask: "##############",
                      outlined: "",
                      "lazy-rules": "",
                      "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
                      "label-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                      borderless: "",
                      class: "input-borderless",
                      rules: [
                        (val) => val && val.length > 0 || this.$t("This field is required")
                      ]
                    }, {
                      prepend: withCtx(() => [
                        createVNode(QSelect, {
                          dense: "",
                          modelValue: $data.mobile_prefix,
                          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.mobile_prefix = $event),
                          options: $setup.DataStore.phone_prefix_data,
                          onFilter: _ctx.filterFn,
                          behavior: "dialog",
                          "input-debounce": "700",
                          style: { "border": "none" },
                          "emit-value": "",
                          borderless: "",
                          class: "myq-field"
                        }, {
                          option: withCtx(({ itemProps, opt }) => [
                            createVNode(QItem, normalizeProps(guardReactiveProps(itemProps)), {
                              default: withCtx(() => [
                                createVNode(QItemSection, { avatar: "" }, {
                                  default: withCtx(() => [
                                    createVNode(QImg, {
                                      src: opt.flag,
                                      style: { "height": "15px", "max-width": "20px" }
                                    }, null, 8, ["src"])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(QItemSection, null, {
                                  default: withCtx(() => [
                                    createVNode(QItemLabel, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(opt.label), 1)
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
                          "no-option": withCtx(() => [
                            createVNode(QItem, null, {
                              default: withCtx(() => [
                                createVNode(QItemSection, { class: "text-grey" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.$t("No results")), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "options", "onFilter"])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "bg-color", "label-color", "rules"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["class"]),
            createVNode(QSpace, { class: "q-pa-sm" }),
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
        }, 8, ["onSubmit"]),
        createVNode(_component_StepsVerification, {
          ref: "steps_verification",
          sent_message: $data.sent_message,
          onAfterVerifycode: $options.afterVerifycode
        }, null, 8, ["sent_message", "onAfterVerifycode"])
      ]),
      _: 1
    }, 8, ["class"])
  ], 64);
}
var EditProfile = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "EditProfile.vue"]]);
export { EditProfile as default };
//# sourceMappingURL=data:application/json;base64,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VEwsWUFJUztBQUFBLCtDQUhQLE1BRWlCO0FBQUEsZ0NBRmpCQSxZQUVpQixtQ0FGSSxHQUFZO0FBQUEsbURBQy9CLE1BQXNCO0FBQUEsb0VBQW5CLEtBQUU7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVXJCQSxZQUFtQywyQkFBckI7QUFBQSxZQUNkQSxZQVNFO0FBQUEsY0FSQSxNQUFLO0FBQUEsY0FDSixPQUFPLEtBQUU7QUFBQSxjQUNWO0FBQUEsY0FDQTtBQUFBLGNBQ0EsT0FBTTtBQUFBLGNBQ04sT0FBTTtBQUFBLGNBQ04sTUFBSztBQUFBLGNBQ0osU0FBUyxNQUFPO0FBQUE7Ozs7UUFJckJBLFlBSUU7QUFBQSxVQUhBLEtBQUk7QUFBQSxVQUNILGNBQWMsTUFBWTtBQUFBLFVBQzFCLG1CQUFrQixTQUFlO0FBQUEiLCJuYW1lcyI6WyJkYXRhIiwiX2NyZWF0ZVZOb2RlIiwiX25vcm1hbGl6ZUNsYXNzIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9jcmVhdGVCbG9jayIsIl93aXRoQ3R4IiwiX2NyZWF0ZVRleHRWTm9kZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9BY2NvdW50L0VkaXRQcm9maWxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLWhlYWRlclxuICAgIHJldmVhbFxuICAgIHJldmVhbC1vZmZzZXQ9XCI1MFwiXG4gICAgOmNsYXNzPVwie1xuICAgICAgJ2JnLW15ZGFyayB0ZXh0LXdoaXRlJzogJHEuZGFyay5tb2RlLFxuICAgICAgJ2JnLWdyZXktMSB0ZXh0LWRhcmsnOiAhJHEuZGFyay5tb2RlLFxuICAgIH1cIlxuICA+XG4gICAgPHEtdG9vbGJhcj5cbiAgICAgIDxxLWJ0blxuICAgICAgICBAY2xpY2s9XCIkcm91dGVyLmJhY2soKVwiXG4gICAgICAgIGZsYXRcbiAgICAgICAgcm91bmRcbiAgICAgICAgZGVuc2VcbiAgICAgICAgaWNvbj1cImxhcyBsYS1hbmdsZS1sZWZ0XCJcbiAgICAgICAgY2xhc3M9XCJxLW1yLXNtXCJcbiAgICAgICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ3doaXRlJyA6ICdkYXJrJ1wiXG4gICAgICAvPlxuICAgICAgPHEtdG9vbGJhci10aXRsZSBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGRcIj57e1xuICAgICAgICAkdChcIkVkaXQgUHJvZmlsZVwiKVxuICAgICAgfX08L3EtdG9vbGJhci10aXRsZT5cbiAgICA8L3EtdG9vbGJhcj5cbiAgPC9xLWhlYWRlcj5cblxuICA8cS1wYWdlXG4gICAgcGFkZGluZ1xuICAgIGNsYXNzPVwicS1wbC1tZCBxLXByLW1kIHJvdyBpdGVtcy1zdHJldGNoXCJcbiAgICA6Y2xhc3M9XCJ7XG4gICAgICAnYmctbXlkYXJrICc6ICRxLmRhcmsubW9kZSxcbiAgICAgICdiZy1ncmV5LTEgJzogISRxLmRhcmsubW9kZSxcbiAgICB9XCJcbiAgPlxuICAgIDxxLWZvcm0gQHN1Ym1pdD1cImNoZWNrRm9ybVwiIGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNlbnRlciBxLW1iLW1kXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyZWxhdGl2ZS1wb3NpdGlvblwiPlxuICAgICAgICAgIDxxLWF2YXRhciBzaXplPVwiNjBweFwiPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJoYXNEYXRhXCI+XG4gICAgICAgICAgICAgIDxxLWltZ1xuICAgICAgICAgICAgICAgIDpzcmM9XCJwaG90b19kYXRhLnBhdGhcIlxuICAgICAgICAgICAgICAgIHNwaW5uZXItY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICBzcGlubmVyLXNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgZml0PVwiY292ZXJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICAgICAgICAgIDxxLWltZ1xuICAgICAgICAgICAgICAgIDpzcmM9XCJhdmF0YXJcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZml0XCJcbiAgICAgICAgICAgICAgICBmaXQ9XCJjb3ZlclwiXG4gICAgICAgICAgICAgICAgc3Bpbm5lci1zaXplPVwic21cIlxuICAgICAgICAgICAgICAgIHNwaW5uZXItY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9xLWF2YXRhcj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWJzb2x1dGUtcmlnaHRcIiBzdHlsZT1cInRvcDogMjBweDsgcmlnaHQ6IC0xMHB4XCI+XG4gICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgdi1pZj1cIiRxLmNhcGFjaXRvclwiXG4gICAgICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgICAgIDpjb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5NjAwJyA6ICdwcmltYXJ5J1wiXG4gICAgICAgICAgICAgIDp0ZXh0LWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXkzMDAnIDogJ3doaXRlJ1wiXG4gICAgICAgICAgICAgIGljb249XCJsYXMgbGEtcGVuXCJcbiAgICAgICAgICAgICAgc2l6ZT1cIjhweFwiXG4gICAgICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICAgICAgQGNsaWNrPVwidGFrZVBob3RvXCJcbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICB2LWVsc2VcbiAgICAgICAgICAgICAgcm91bmRcbiAgICAgICAgICAgICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXk2MDAnIDogJ3ByaW1hcnknXCJcbiAgICAgICAgICAgICAgOnRleHQtY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTMwMCcgOiAnd2hpdGUnXCJcbiAgICAgICAgICAgICAgaWNvbj1cImxhcyBsYS1wZW5cIlxuICAgICAgICAgICAgICBzaXplPVwiOHB4XCJcbiAgICAgICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgICAgICBAY2xpY2s9XCJ1cGxvYWRfZW5hYmxlZCA9ICF1cGxvYWRfZW5hYmxlZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPCEtLSBmbGV4IC0tPlxuXG4gICAgICA8cS11cGxvYWRlclxuICAgICAgICB2LWlmPVwidXBsb2FkX2VuYWJsZWRcIlxuICAgICAgICA6dXJsPVwidXBsb2FkX2FwaVwiXG4gICAgICAgIDpsYWJlbD1cIiR0KCdVcGxvYWQgZmlsZXMnKVwiXG4gICAgICAgIDpjb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5NjAwJyA6ICdwcmltYXJ5J1wiXG4gICAgICAgIDp0ZXh0LWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXkzMDAnIDogJ3doaXRlJ1wiXG4gICAgICAgIG5vLXRodW1ibmFpbHNcbiAgICAgICAgY2xhc3M9XCJmdWxsLXdpZHRoIHEtbWItbWRcIlxuICAgICAgICBmbGF0XG4gICAgICAgIGFjY2VwdD1cIi5qcGcsIGltYWdlLypcIlxuICAgICAgICBib3JkZXJlZFxuICAgICAgICA6bWF4LWZpbGVzPVwiMVwiXG4gICAgICAgIGF1dG8tdXBsb2FkXG4gICAgICAgIG1heC10b3RhbC1zaXplPVwiMTA0ODU3NlwiXG4gICAgICAgIEByZWplY3RlZD1cIm9uUmVqZWN0ZWRGaWxlc1wiXG4gICAgICAgIDpoZWFkZXJzPVwiW1xuICAgICAgICAgIHsgbmFtZTogJ0F1dGhvcml6YXRpb24nLCB2YWx1ZTogYHRva2VuICR7dGhpcy5nZXRUb2tlbigpfWAgfSxcbiAgICAgICAgXVwiXG4gICAgICAgIGZpZWxkLW5hbWU9XCJmaWxlXCJcbiAgICAgICAgQHVwbG9hZGVkPVwiYWZ0ZXJVcGxvYWRlZFwiXG4gICAgICAvPlxuXG4gICAgICA8cS1jYXJkXG4gICAgICAgIGZsYXRcbiAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICdiZy1teWRhcmsgdGV4dC13aGl0ZSc6ICRxLmRhcmsubW9kZSxcbiAgICAgICAgICAnYmctd2hpdGUgdGV4dC1ibGFjayc6ICEkcS5kYXJrLm1vZGUsXG4gICAgICAgIH1cIlxuICAgICAgPlxuICAgICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICAgIHYtbW9kZWw9XCJmaXJzdF9uYW1lXCJcbiAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdGaXJzdCBuYW1lJylcIlxuICAgICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICAgIGxhenktcnVsZXNcbiAgICAgICAgICAgIDpiZy1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5NjAwJyA6ICdpbnB1dCdcIlxuICAgICAgICAgICAgOmxhYmVsLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXkzMDAnIDogJ2dyZXknXCJcbiAgICAgICAgICAgIDpydWxlcz1cIltcbiAgICAgICAgICAgICAgKHZhbCkgPT5cbiAgICAgICAgICAgICAgICAodmFsICYmIHZhbC5sZW5ndGggPiAwKSB8fCB0aGlzLiR0KCdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJyksXG4gICAgICAgICAgICBdXCJcbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICAgIHYtbW9kZWw9XCJsYXN0X25hbWVcIlxuICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ0xhc3QgbmFtZScpXCJcbiAgICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgICBsYXp5LXJ1bGVzXG4gICAgICAgICAgICA6YmctY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTYwMCcgOiAnaW5wdXQnXCJcbiAgICAgICAgICAgIDpsYWJlbC1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICdncmV5J1wiXG4gICAgICAgICAgICA6cnVsZXM9XCJbXG4gICAgICAgICAgICAgICh2YWwpID0+XG4gICAgICAgICAgICAgICAgKHZhbCAmJiB2YWwubGVuZ3RoID4gMCkgfHwgdGhpcy4kdCgnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCcpLFxuICAgICAgICAgICAgXVwiXG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgICB2LW1vZGVsPVwiZW1haWxfYWRkcmVzc1wiXG4gICAgICAgICAgICA6bGFiZWw9XCIkdCgnRW1haWwgYWRkcmVzcycpXCJcbiAgICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgICBsYXp5LXJ1bGVzXG4gICAgICAgICAgICA6YmctY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTYwMCcgOiAnaW5wdXQnXCJcbiAgICAgICAgICAgIDpsYWJlbC1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICdncmV5J1wiXG4gICAgICAgICAgICA6cnVsZXM9XCJbXG4gICAgICAgICAgICAgICh2YWwpID0+XG4gICAgICAgICAgICAgICAgKHZhbCAmJiB2YWwubGVuZ3RoID4gMCkgfHwgdGhpcy4kdCgnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCcpLFxuICAgICAgICAgICAgXVwiXG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgICB2LW1vZGVsPVwibW9iaWxlX251bWJlclwiXG4gICAgICAgICAgICBtYXNrPVwiIyMjIyMjIyMjIyMjIyNcIlxuICAgICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICAgIGxhenktcnVsZXNcbiAgICAgICAgICAgIDpiZy1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5NjAwJyA6ICdpbnB1dCdcIlxuICAgICAgICAgICAgOmxhYmVsLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXkzMDAnIDogJ2dyZXknXCJcbiAgICAgICAgICAgIGJvcmRlcmxlc3NcbiAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtYm9yZGVybGVzc1wiXG4gICAgICAgICAgICA6cnVsZXM9XCJbXG4gICAgICAgICAgICAgICh2YWwpID0+XG4gICAgICAgICAgICAgICAgKHZhbCAmJiB2YWwubGVuZ3RoID4gMCkgfHwgdGhpcy4kdCgnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCcpLFxuICAgICAgICAgICAgXVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpwcmVwZW5kPlxuICAgICAgICAgICAgICA8cS1zZWxlY3RcbiAgICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJtb2JpbGVfcHJlZml4XCJcbiAgICAgICAgICAgICAgICA6b3B0aW9ucz1cIkRhdGFTdG9yZS5waG9uZV9wcmVmaXhfZGF0YVwiXG4gICAgICAgICAgICAgICAgQGZpbHRlcj1cImZpbHRlckZuXCJcbiAgICAgICAgICAgICAgICBiZWhhdmlvcj1cImRpYWxvZ1wiXG4gICAgICAgICAgICAgICAgaW5wdXQtZGVib3VuY2U9XCI3MDBcIlxuICAgICAgICAgICAgICAgIHN0eWxlPVwiYm9yZGVyOiBub25lXCJcbiAgICAgICAgICAgICAgICBlbWl0LXZhbHVlXG4gICAgICAgICAgICAgICAgYm9yZGVybGVzc1xuICAgICAgICAgICAgICAgIGNsYXNzPVwibXlxLWZpZWxkXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6b3B0aW9uPVwieyBpdGVtUHJvcHMsIG9wdCB9XCI+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtIHYtYmluZD1cIml0ZW1Qcm9wc1wiPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgOnNyYz1cIm9wdC5mbGFnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiAxNXB4OyBtYXgtd2lkdGg6IDIwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsPnt7IG9wdC5sYWJlbCB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90Om5vLW9wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBjbGFzcz1cInRleHQtZ3JleVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KFwiTm8gcmVzdWx0c1wiKSB9fVxuICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPC9xLXNlbGVjdD5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9xLWlucHV0PlxuICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgPC9xLWNhcmQ+XG5cbiAgICAgIDxxLXNwYWNlIGNsYXNzPVwicS1wYS1zbVwiPjwvcS1zcGFjZT5cbiAgICAgIDxxLWJ0blxuICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgOmxhYmVsPVwiJHQoJ1NhdmUnKVwiXG4gICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgbm8tY2Fwc1xuICAgICAgICBjb2xvcj1cInByaW1hcnkgdGV4dC13aGl0ZVwiXG4gICAgICAgIGNsYXNzPVwiZnVsbC13aWR0aCB0ZXh0LXdlaWdodC1ib2xkXCJcbiAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgOmxvYWRpbmc9XCJsb2FkaW5nXCJcbiAgICAgIC8+XG4gICAgPC9xLWZvcm0+XG5cbiAgICA8U3RlcHNWZXJpZmljYXRpb25cbiAgICAgIHJlZj1cInN0ZXBzX3ZlcmlmaWNhdGlvblwiXG4gICAgICA6c2VudF9tZXNzYWdlPVwic2VudF9tZXNzYWdlXCJcbiAgICAgIEBhZnRlci12ZXJpZnljb2RlPVwiYWZ0ZXJWZXJpZnljb2RlXCJcbiAgICAvPlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBkZWZpbmVBc3luY0NvbXBvbmVudCB9IGZyb20gXCJ2dWVcIjtcbmltcG9ydCBBUElpbnRlcmZhY2UgZnJvbSBcInNyYy9hcGkvQVBJaW50ZXJmYWNlXCI7XG5pbXBvcnQgYXV0aCBmcm9tIFwic3JjL2FwaS9hdXRoXCI7XG5pbXBvcnQgeyB1c2VEYXRhU3RvcmUgfSBmcm9tIFwic3RvcmVzL0RhdGFTdG9yZVwiO1xuaW1wb3J0IGNvbmZpZyBmcm9tIFwic3JjL2FwaS9jb25maWdcIjtcbmltcG9ydCBBcHBDYW1lcmEgZnJvbSBcInNyYy9hcGkvQXBwQ2FtZXJhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJFZGl0UHJvZmlsZVwiLFxuICBjb21wb25lbnRzOiB7XG4gICAgU3RlcHNWZXJpZmljYXRpb246IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+XG4gICAgICBpbXBvcnQoXCJjb21wb25lbnRzL1N0ZXBzVmVyaWZpY2F0aW9uLnZ1ZVwiKVxuICAgICksXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgZmlyc3RfbmFtZTogXCJcIixcbiAgICAgIGxhc3RfbmFtZTogXCJcIixcbiAgICAgIGVtYWlsX2FkZHJlc3M6IFwiXCIsXG4gICAgICBtb2JpbGVfbnVtYmVyOiBcIlwiLFxuICAgICAgbW9iaWxlX3ByZWZpeDogXCJcIixcbiAgICAgIGF2YXRhcjogXCJcIixcbiAgICAgIG9yaWdpbmFsX2VtYWlsX2FkZHJlc3M6IFwiXCIsXG4gICAgICBvcmlnaW5hbF9tb2JpbGVfbnVtYmVyOiBcIlwiLFxuICAgICAgc2VudF9tZXNzYWdlOiBcIlwiLFxuICAgICAgdXBsb2FkX2FwaTogY29uZmlnLmFwaV9iYXNlX3VybCArIFwiL2ludGVyZmFjZS91cGRhdGVBdmF0YXJcIixcbiAgICAgIHVwbG9hZF9lbmFibGVkOiBmYWxzZSxcbiAgICAgIGZpbGVuYW1lOiBcIlwiLFxuICAgICAgdXBsb2FkX3BhdGg6IFwiXCIsXG4gICAgICBwaG90b19kYXRhOiBcIlwiLFxuICAgIH07XG4gIH0sXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IERhdGFTdG9yZSA9IHVzZURhdGFTdG9yZSgpO1xuICAgIHJldHVybiB7IERhdGFTdG9yZSB9O1xuICB9LFxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuZ2V0Q3VycmVudFByb2ZpbGUoKTtcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBoYXNEYXRhKCkge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMucGhvdG9fZGF0YSkubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZ2V0Q3VycmVudFByb2ZpbGUoKSB7XG4gICAgICBjb25zdCAkb2xkcHJvZmlsZSA9IGF1dGguZ2V0VXNlcigpO1xuICAgICAgaWYgKCRvbGRwcm9maWxlKSB7XG4gICAgICAgIHRoaXMub3JpZ2luYWxfZW1haWxfYWRkcmVzcyA9ICRvbGRwcm9maWxlLmVtYWlsX2FkZHJlc3M7XG4gICAgICAgIHRoaXMub3JpZ2luYWxfbW9iaWxlX251bWJlciA9ICRvbGRwcm9maWxlLmNvbnRhY3RfbnVtYmVyO1xuICAgICAgICB0aGlzLmZpcnN0X25hbWUgPSAkb2xkcHJvZmlsZS5maXJzdF9uYW1lO1xuICAgICAgICB0aGlzLmxhc3RfbmFtZSA9ICRvbGRwcm9maWxlLmxhc3RfbmFtZTtcbiAgICAgICAgdGhpcy5tb2JpbGVfbnVtYmVyID0gJG9sZHByb2ZpbGUuY29udGFjdF9udW1iZXJfbm9wcmVmaXg7XG4gICAgICAgIHRoaXMubW9iaWxlX3ByZWZpeCA9ICRvbGRwcm9maWxlLnBob25lX3ByZWZpeDtcbiAgICAgICAgdGhpcy5lbWFpbF9hZGRyZXNzID0gJG9sZHByb2ZpbGUuZW1haWxfYWRkcmVzcztcbiAgICAgICAgdGhpcy5hdmF0YXIgPSAkb2xkcHJvZmlsZS5hdmF0YXI7XG4gICAgICB9XG4gICAgfSxcbiAgICBjaGVja0Zvcm0oKSB7XG4gICAgICBsZXQgX2NoYW5nZSA9IGZhbHNlO1xuICAgICAgaWYgKHRoaXMuZW1haWxfYWRkcmVzcyAhPT0gdGhpcy5vcmlnaW5hbF9lbWFpbF9hZGRyZXNzKSB7XG4gICAgICAgIF9jaGFuZ2UgPSB0cnVlO1xuICAgICAgfVxuICAgICAgY29uc3QgcGhvbmUgPSB0aGlzLm1vYmlsZV9wcmVmaXggKyB0aGlzLm1vYmlsZV9udW1iZXI7XG4gICAgICBpZiAocGhvbmUgIT09IHRoaXMub3JpZ2luYWxfbW9iaWxlX251bWJlcikge1xuICAgICAgICBfY2hhbmdlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgY29uc29sZS5sb2coX2NoYW5nZSk7XG5cbiAgICAgIGlmIChfY2hhbmdlKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIEFQSWludGVyZmFjZS5SZXF1ZXN0RW1haWxDb2RlKClcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZW50X21lc3NhZ2UgPSBkYXRhLm1zZztcbiAgICAgICAgICAgIHRoaXMuc2hvd19tb2RhbCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy4kcmVmcy5zdGVwc192ZXJpZmljYXRpb24uc2hvd19tb2RhbCA9IHRydWU7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBBUElpbnRlcmZhY2Uubm90aWZ5KFwiZGFya1wiLCBlcnJvciwgXCJlcnJvclwiLCB0aGlzLiRxKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub25TdWJtaXQoXCJcIik7XG4gICAgICB9XG4gICAgfSxcbiAgICBvblN1Ym1pdChjb2RlKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgQVBJaW50ZXJmYWNlLnNob3dMb2FkaW5nQm94KFwiXCIsIHRoaXMuJHEpO1xuICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICBjb2RlLFxuICAgICAgICBmaXJzdF9uYW1lOiB0aGlzLmZpcnN0X25hbWUsXG4gICAgICAgIGxhc3RfbmFtZTogdGhpcy5sYXN0X25hbWUsXG4gICAgICAgIGVtYWlsX2FkZHJlc3M6IHRoaXMuZW1haWxfYWRkcmVzcyxcbiAgICAgICAgbW9iaWxlX251bWJlcjogdGhpcy5tb2JpbGVfbnVtYmVyLFxuICAgICAgICBtb2JpbGVfcHJlZml4OiB0aGlzLm1vYmlsZV9wcmVmaXgsXG4gICAgICAgIGZpbGVuYW1lOiB0aGlzLmZpbGVuYW1lLFxuICAgICAgICB1cGxvYWRfcGF0aDogdGhpcy51cGxvYWRfcGF0aCxcbiAgICAgICAgZmlsZV9kYXRhOiB0aGlzLmhhZERhdGEoKSA/IHRoaXMucGhvdG9fZGF0YS5kYXRhIDogXCJcIixcbiAgICAgICAgaW1hZ2VfdHlwZTogdGhpcy5oYWREYXRhKCkgPyB0aGlzLnBob3RvX2RhdGEuZm9ybWF0IDogXCJcIixcbiAgICAgIH07XG4gICAgICBBUElpbnRlcmZhY2Uuc2F2ZVByb2ZpbGUocGFyYW1zKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuJHJlZnMuc3RlcHNfdmVyaWZpY2F0aW9uLnNob3dfbW9kYWwgPSBmYWxzZTtcbiAgICAgICAgICBhdXRoLnNldFVzZXIoZGF0YS5kZXRhaWxzKTtcbiAgICAgICAgICBBUElpbnRlcmZhY2Uubm90aWZ5KFwiZ3JlZW5cIiwgZGF0YS5tc2csIFwiY2hlY2tcIiwgdGhpcy4kcSk7XG4gICAgICAgICAgdGhpcy5nZXRDdXJyZW50UHJvZmlsZSgpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgQVBJaW50ZXJmYWNlLm5vdGlmeShcImRhcmtcIiwgZXJyb3IsIFwiZXJyb3JcIiwgdGhpcy4kcSk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgQVBJaW50ZXJmYWNlLmhpZGVMb2FkaW5nQm94KHRoaXMuJHEpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGFmdGVyVmVyaWZ5Y29kZShjb2RlKSB7XG4gICAgICB0aGlzLm9uU3VibWl0KGNvZGUpO1xuICAgIH0sXG4gICAgZ2V0VG9rZW4oKSB7XG4gICAgICByZXR1cm4gYXV0aC5nZXRUb2tlbigpO1xuICAgIH0sXG4gICAgYWZ0ZXJVcGxvYWRlZChmaWxlcykge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBKU09OLnBhcnNlKGZpbGVzLnhoci5yZXNwb25zZVRleHQpO1xuICAgICAgaWYgKHJlc3BvbnNlLmNvZGUgPT09IDEpIHtcbiAgICAgICAgdGhpcy5hdmF0YXIgPSByZXNwb25zZS5kZXRhaWxzLnVybF9pbWFnZTtcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IHJlc3BvbnNlLmRldGFpbHMuZmlsZW5hbWU7XG4gICAgICAgIHRoaXMudXBsb2FkX3BhdGggPSByZXNwb25zZS5kZXRhaWxzLnVwbG9hZF9wYXRoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hdmF0YXIgPSBcIlwiO1xuICAgICAgICB0aGlzLmZpbGVuYW1lID0gXCJcIjtcbiAgICAgICAgdGhpcy51cGxvYWRfcGF0aCA9IFwiXCI7XG4gICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJkYXJrXCIsIHJlc3BvbnNlLm1zZywgXCJlcnJvclwiLCB0aGlzLiRxKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHRha2VQaG90bygpIHtcbiAgICAgIEFwcENhbWVyYS5pc0NhbWVyYUVuYWJsZWQoKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIEFwcENhbWVyYS5pc0ZpbGVBY2Nlc3NFbmFibGVkKClcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgIEFwcENhbWVyYS5nZXRQaG90bygxKVxuICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnBob3RvX2RhdGEgPSBkYXRhO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5waG90b19kYXRhID0gW107XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICBpZiAodGhpcy4kcS5wbGF0Zm9ybS5pcy5pb3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZF9lbmFibGVkID0gIXRoaXMudXBsb2FkX2VuYWJsZWQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIC8vXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy4kcS5wbGF0Zm9ybS5pcy5pb3MpIHtcbiAgICAgICAgICAgIHRoaXMudXBsb2FkX2VuYWJsZWQgPSAhdGhpcy51cGxvYWRfZW5hYmxlZDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgaGFkRGF0YSgpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLnBob3RvX2RhdGEpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiJdLCJmaWxlIjoiYXNzZXRzL0VkaXRQcm9maWxlLjM3ZDVjODNlLmpzIn0=
