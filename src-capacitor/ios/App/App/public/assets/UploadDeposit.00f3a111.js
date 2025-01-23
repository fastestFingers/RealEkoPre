import { _ as _export_sfc, bC as config, aw as auth, m as APIinterface, p as openBlock, V as createElementBlock, f as createVNode, t as withCtx, a7 as normalizeClass, F as Fragment, Y as QBtn, a6 as createTextVNode, Z as toDisplayString, q as createBlock, aA as createCommentVNode, a9 as QCardSection, U as createBaseVNode, ac as QItem, ad as QItemSection, aY as QInput, a8 as QCard } from "./index.61ed5618.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QInnerLoading } from "./QInnerLoading.abe2afe6.js";
import { Q as QList } from "./QList.b69a7e5b.js";
import { Q as QSpace } from "./QSpace.f164c087.js";
import { Q as QUploader } from "./QUploader.bc1da65d.js";
import { Q as QForm } from "./QForm.7ded9d38.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import { A as AppCamera } from "./AppCamera.007aea33.js";
import "./QResizeObserver.d08dce3c.js";
import "./QCircularProgress.996c3e2f.js";
import "./format.7f7370d3.js";
import "./vue-i18n.runtime.esm-bundler.fc6ce9e4.js";
const _sfc_main = {
  name: "UploadDeposit",
  data() {
    return {
      loading: false,
      loading_submit: false,
      order_uuid: "",
      account_name: "",
      amount: 0,
      reference_number: "",
      order_info: [],
      upload_api: config.api_base_url + "/interface/uploadProofPayment",
      photo_data: "",
      upload_enabled: false,
      filename: "",
      url_image: ""
    };
  },
  created() {
    this.order_uuid = this.$route.query.order_uuid;
    this.getBankDeposit();
  },
  computed: {
    hasData() {
      if (Object.keys(this.order_info).length > 0) {
        return true;
      }
      return false;
    }
  },
  methods: {
    getToken() {
      return auth.getToken();
    },
    getBankDeposit() {
      this.loading = true;
      APIinterface.fetchDataByTokenPost(
        "getBankDeposit",
        "order_uuid=" + this.order_uuid
      ).then((data) => {
        this.order_info = data.details.order_info;
        if (Object.keys(data.details).length > 0) {
          this.account_name = data.details.data.account_name;
          this.amount = data.details.data.amount;
          this.reference_number = data.details.data.reference_number;
        }
      }).catch((error) => {
      }).then((data) => {
        this.loading = false;
      });
    },
    takePhoto() {
      if (this.$q.capacitor) {
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
      } else {
        this.upload_enabled = !this.upload_enabled;
      }
    },
    afterUploaded(files) {
      const response = JSON.parse(files.xhr.responseText);
      if (response.code === 1) {
        this.url_image = response.details.url_image;
        this.filename = response.details.filename;
      } else {
        this.url_image = "";
        this.filename = "";
        APIinterface.notify("dark", response.msg, "error", this.$q);
      }
    },
    onSubmit() {
      this.loading_submit = true;
      APIinterface.fetchDataByTokenPost(
        "uploadBankDeposit",
        "order_uuid=" + this.order_uuid + "&account_name=" + this.account_name + "&amount=" + this.amount + "&reference_number=" + this.reference_number + "&filename=" + this.filename + "&file_data=" + this.getFileData() + "&image_type=" + this.getFileType()
      ).then((data) => {
        APIinterface.notify("green-5", data.msg, "check_circle", this.$q);
        this.$router.push("/account/allorder");
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data) => {
        this.loading_submit = false;
      });
    },
    getFileData() {
      return this.hadData() ? this.photo_data.data : "";
    },
    getFileType() {
      return this.hadData() ? this.photo_data.format : "";
    },
    hadData() {
      if (Object.keys(this.photo_data).length > 0) {
        return true;
      }
      return false;
    }
  }
};
const _hoisted_1 = {
  key: 1,
  class: "q-gutter-sm bg-grey-2 q-pa-sm"
};
const _hoisted_2 = { class: "text-right" };
const _hoisted_3 = { key: 2 };
const _hoisted_4 = { class: "text-grey" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(QHeader, {
      reveal: "",
      "reveal-offset": "50",
      class: normalizeClass(["", {
        "bg-mydark text-white": _ctx.$q.dark.mode,
        "bg-grey-1 text-dark": !_ctx.$q.dark.mode
      }])
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
                createTextVNode(toDisplayString(_ctx.$t("Upload Proof of Payment")), 1)
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
      class: normalizeClass(["q-pl-md q-pr-md q-pb-md", {
        "bg-mydark text-white": _ctx.$q.dark.mode,
        "bg-grey-1 text-dark": !_ctx.$q.dark.mode,
        "flex flex-center": !$data.loading && !$options.hasData
      }])
    }, {
      default: withCtx(() => [
        $data.loading ? (openBlock(), createBlock(QInnerLoading, {
          key: 0,
          showing: true,
          color: "primary",
          size: "md",
          "label-class": "dark",
          class: "transparent"
        })) : createCommentVNode("", true),
        !$data.loading && $options.hasData ? (openBlock(), createBlock(QCard, {
          key: 1,
          flat: "",
          class: "radius8"
        }, {
          default: withCtx(() => [
            createVNode(QCardSection, { class: "q-pb-none" }, {
              default: withCtx(() => [
                createBaseVNode("p", null, toDisplayString(_ctx.$t("Please enter the details of your bank deposit payment below")) + ". ", 1),
                createBaseVNode("p", null, toDisplayString(_ctx.$t(
                  "Failure to provide accurate information may cause delays in processing or invalidation of your payment"
                )), 1)
              ]),
              _: 1
            }),
            createVNode(QList, { dense: "" }, {
              default: withCtx(() => [
                createVNode(QItem, null, {
                  default: withCtx(() => [
                    createVNode(QItemSection, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("Order #")) + ": ", 1)
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, { class: "text-weight-bold" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString($data.order_info.order_id), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(QItem, null, {
                  default: withCtx(() => [
                    createVNode(QItemSection, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("Amount")) + ": ", 1)
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, { class: "text-weight-bold" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString($data.order_info.total), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(QForm, {
              onSubmit: $options.onSubmit,
              class: "q-pl-md q-pr-md q-pb-md"
            }, {
              default: withCtx(() => [
                createVNode(QInput, {
                  modelValue: $data.account_name,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.account_name = $event),
                  label: _ctx.$t("Account name"),
                  outlined: "",
                  "lazy-rules": "",
                  "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
                  "label-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                  borderless: "",
                  class: "input-borderless",
                  rules: [
                    (val) => val && val.length > 0 || this.$t("This field is required")
                  ]
                }, null, 8, ["modelValue", "label", "bg-color", "label-color", "rules"]),
                createVNode(QInput, {
                  modelValue: $data.amount,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.amount = $event),
                  label: _ctx.$t("Amount"),
                  outlined: "",
                  "lazy-rules": "",
                  "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
                  "label-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                  borderless: "",
                  class: "input-borderless",
                  rules: [
                    (val) => val && val.length > 0 || this.$t("This field is required")
                  ]
                }, null, 8, ["modelValue", "label", "bg-color", "label-color", "rules"]),
                createVNode(QInput, {
                  modelValue: $data.reference_number,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.reference_number = $event),
                  label: _ctx.$t("Reference Number"),
                  outlined: "",
                  "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
                  "label-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                  borderless: "",
                  class: "input-borderless"
                }, null, 8, ["modelValue", "label", "bg-color", "label-color"]),
                createVNode(QSpace, { class: "q-pa-sm" }),
                !$data.upload_enabled ? (openBlock(), createBlock(QBtn, {
                  key: 0,
                  icon: "upload_file",
                  flat: "",
                  color: "grey",
                  label: _ctx.$t("Upload Deposit"),
                  "no-caps": "",
                  size: "lg",
                  onClick: $options.takePhoto
                }, null, 8, ["label", "onClick"])) : createCommentVNode("", true),
                $data.upload_enabled ? (openBlock(), createElementBlock("div", _hoisted_1, [
                  createBaseVNode("div", _hoisted_2, [
                    createVNode(QBtn, {
                      round: "",
                      color: "grey",
                      icon: "close",
                      unelevated: "",
                      size: "sm",
                      onClick: _cache[4] || (_cache[4] = ($event) => this.upload_enabled = !this.upload_enabled)
                    })
                  ]),
                  createVNode(QUploader, {
                    url: $data.upload_api,
                    label: _ctx.$t("Upload files"),
                    color: _ctx.$q.dark.mode ? "grey600" : "green-5",
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
                  }, null, 8, ["url", "label", "color", "text-color", "onRejected", "headers", "onUploaded"])
                ])) : createCommentVNode("", true),
                createVNode(QSpace, { class: "q-pa-sm" }),
                createVNode(QBtn, {
                  loading: $data.loading_submit,
                  type: "submit",
                  label: _ctx.$t("Submit"),
                  unelevated: "",
                  "no-caps": "",
                  color: "primary text-white",
                  class: "full-width text-weight-bold",
                  size: "lg"
                }, null, 8, ["loading", "label"])
              ]),
              _: 1
            }, 8, ["onSubmit"])
          ]),
          _: 1
        })) : !$data.loading && !$options.hasData ? (openBlock(), createElementBlock("div", _hoisted_3, [
          createBaseVNode("p", _hoisted_4, toDisplayString(_ctx.$t("No data available")), 1)
        ])) : createCommentVNode("", true)
      ]),
      _: 1
    }, 8, ["class"])
  ], 64);
}
var UploadDeposit = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "UploadDeposit.vue"]]);
export { UploadDeposit as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXBsb2FkRGVwb3NpdC4wMGYzYTExMS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhZ2VzL0FjY291bnQvVXBsb2FkRGVwb3NpdC52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8cS1oZWFkZXJcbiAgICByZXZlYWxcbiAgICByZXZlYWwtb2Zmc2V0PVwiNTBcIlxuICAgIGNsYXNzPVwiXCJcbiAgICA6Y2xhc3M9XCJ7XG4gICAgICAnYmctbXlkYXJrIHRleHQtd2hpdGUnOiAkcS5kYXJrLm1vZGUsXG4gICAgICAnYmctZ3JleS0xIHRleHQtZGFyayc6ICEkcS5kYXJrLm1vZGUsXG4gICAgfVwiXG4gID5cbiAgICA8cS10b29sYmFyPlxuICAgICAgPHEtYnRuXG4gICAgICAgIEBjbGljaz1cIiRyb3V0ZXIuYmFjaygpXCJcbiAgICAgICAgZmxhdFxuICAgICAgICByb3VuZFxuICAgICAgICBkZW5zZVxuICAgICAgICBpY29uPVwibGFzIGxhLWFuZ2xlLWxlZnRcIlxuICAgICAgICBjbGFzcz1cInEtbXItc21cIlxuICAgICAgICA6Y29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnd2hpdGUnIDogJ2RhcmsnXCJcbiAgICAgIC8+XG4gICAgICA8cS10b29sYmFyLXRpdGxlIGNsYXNzPVwidGV4dC13ZWlnaHQtYm9sZFwiPnt7XG4gICAgICAgICR0KFwiVXBsb2FkIFByb29mIG9mIFBheW1lbnRcIilcbiAgICAgIH19PC9xLXRvb2xiYXItdGl0bGU+XG4gICAgPC9xLXRvb2xiYXI+XG4gIDwvcS1oZWFkZXI+XG4gIDxxLXBhZ2VcbiAgICBjbGFzcz1cInEtcGwtbWQgcS1wci1tZCBxLXBiLW1kXCJcbiAgICA6Y2xhc3M9XCJ7XG4gICAgICAnYmctbXlkYXJrIHRleHQtd2hpdGUnOiAkcS5kYXJrLm1vZGUsXG4gICAgICAnYmctZ3JleS0xIHRleHQtZGFyayc6ICEkcS5kYXJrLm1vZGUsXG4gICAgICAnZmxleCBmbGV4LWNlbnRlcic6ICFsb2FkaW5nICYmICFoYXNEYXRhLFxuICAgIH1cIlxuICA+XG4gICAgPHEtaW5uZXItbG9hZGluZ1xuICAgICAgdi1pZj1cImxvYWRpbmdcIlxuICAgICAgOnNob3dpbmc9XCJ0cnVlXCJcbiAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICBzaXplPVwibWRcIlxuICAgICAgbGFiZWwtY2xhc3M9XCJkYXJrXCJcbiAgICAgIGNsYXNzPVwidHJhbnNwYXJlbnRcIlxuICAgIC8+XG4gICAgPHEtY2FyZCB2LWlmPVwiIWxvYWRpbmcgJiYgaGFzRGF0YVwiIGZsYXQgY2xhc3M9XCJyYWRpdXM4XCI+XG4gICAgICA8cS1jYXJkLXNlY3Rpb24gY2xhc3M9XCJxLXBiLW5vbmVcIj5cbiAgICAgICAgPHA+XG4gICAgICAgICAge3tcbiAgICAgICAgICAgICR0KFwiUGxlYXNlIGVudGVyIHRoZSBkZXRhaWxzIG9mIHlvdXIgYmFuayBkZXBvc2l0IHBheW1lbnQgYmVsb3dcIilcbiAgICAgICAgICB9fS5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICB7e1xuICAgICAgICAgICAgJHQoXG4gICAgICAgICAgICAgIFwiRmFpbHVyZSB0byBwcm92aWRlIGFjY3VyYXRlIGluZm9ybWF0aW9uIG1heSBjYXVzZSBkZWxheXMgaW4gcHJvY2Vzc2luZyBvciBpbnZhbGlkYXRpb24gb2YgeW91ciBwYXltZW50XCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9fVxuICAgICAgICA8L3A+XG4gICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuXG4gICAgICA8cS1saXN0IGRlbnNlPlxuICAgICAgICA8cS1pdGVtPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj4ge3sgJHQoXCJPcmRlciAjXCIpIH19OiA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGRcIj5cbiAgICAgICAgICAgIHt7IG9yZGVyX2luZm8ub3JkZXJfaWQgfX1cbiAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgPHEtaXRlbT5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+IHt7ICR0KFwiQW1vdW50XCIpIH19OiA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGRcIj5cbiAgICAgICAgICAgIHt7IG9yZGVyX2luZm8udG90YWwgfX1cbiAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8L3EtaXRlbT5cbiAgICAgIDwvcS1saXN0PlxuXG4gICAgICA8cS1mb3JtIEBzdWJtaXQ9XCJvblN1Ym1pdFwiIGNsYXNzPVwicS1wbC1tZCBxLXByLW1kIHEtcGItbWRcIj5cbiAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICB2LW1vZGVsPVwiYWNjb3VudF9uYW1lXCJcbiAgICAgICAgICA6bGFiZWw9XCIkdCgnQWNjb3VudCBuYW1lJylcIlxuICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgbGF6eS1ydWxlc1xuICAgICAgICAgIDpiZy1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5NjAwJyA6ICdpbnB1dCdcIlxuICAgICAgICAgIDpsYWJlbC1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICdncmV5J1wiXG4gICAgICAgICAgYm9yZGVybGVzc1xuICAgICAgICAgIGNsYXNzPVwiaW5wdXQtYm9yZGVybGVzc1wiXG4gICAgICAgICAgOnJ1bGVzPVwiW1xuICAgICAgICAgICAgKHZhbCkgPT5cbiAgICAgICAgICAgICAgKHZhbCAmJiB2YWwubGVuZ3RoID4gMCkgfHwgdGhpcy4kdCgnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCcpLFxuICAgICAgICAgIF1cIlxuICAgICAgICAvPlxuICAgICAgICA8cS1pbnB1dFxuICAgICAgICAgIHYtbW9kZWw9XCJhbW91bnRcIlxuICAgICAgICAgIDpsYWJlbD1cIiR0KCdBbW91bnQnKVwiXG4gICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICBsYXp5LXJ1bGVzXG4gICAgICAgICAgOmJnLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXk2MDAnIDogJ2lucHV0J1wiXG4gICAgICAgICAgOmxhYmVsLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXkzMDAnIDogJ2dyZXknXCJcbiAgICAgICAgICBib3JkZXJsZXNzXG4gICAgICAgICAgY2xhc3M9XCJpbnB1dC1ib3JkZXJsZXNzXCJcbiAgICAgICAgICA6cnVsZXM9XCJbXG4gICAgICAgICAgICAodmFsKSA9PlxuICAgICAgICAgICAgICAodmFsICYmIHZhbC5sZW5ndGggPiAwKSB8fCB0aGlzLiR0KCdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJyksXG4gICAgICAgICAgXVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgdi1tb2RlbD1cInJlZmVyZW5jZV9udW1iZXJcIlxuICAgICAgICAgIDpsYWJlbD1cIiR0KCdSZWZlcmVuY2UgTnVtYmVyJylcIlxuICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgOmJnLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXk2MDAnIDogJ2lucHV0J1wiXG4gICAgICAgICAgOmxhYmVsLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXkzMDAnIDogJ2dyZXknXCJcbiAgICAgICAgICBib3JkZXJsZXNzXG4gICAgICAgICAgY2xhc3M9XCJpbnB1dC1ib3JkZXJsZXNzXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHEtc3BhY2UgY2xhc3M9XCJxLXBhLXNtXCI+PC9xLXNwYWNlPlxuXG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIHYtaWY9XCIhdXBsb2FkX2VuYWJsZWRcIlxuICAgICAgICAgIGljb249XCJ1cGxvYWRfZmlsZVwiXG4gICAgICAgICAgZmxhdFxuICAgICAgICAgIGNvbG9yPVwiZ3JleVwiXG4gICAgICAgICAgOmxhYmVsPVwiJHQoJ1VwbG9hZCBEZXBvc2l0JylcIlxuICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgIEBjbGljaz1cInRha2VQaG90b1wiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJ1cGxvYWRfZW5hYmxlZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJxLWd1dHRlci1zbSBiZy1ncmV5LTIgcS1wYS1zbVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgcm91bmRcbiAgICAgICAgICAgICAgICBjb2xvcj1cImdyZXlcIlxuICAgICAgICAgICAgICAgIGljb249XCJjbG9zZVwiXG4gICAgICAgICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwidGhpcy51cGxvYWRfZW5hYmxlZCA9ICF0aGlzLnVwbG9hZF9lbmFibGVkXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHEtdXBsb2FkZXJcbiAgICAgICAgICAgICAgOnVybD1cInVwbG9hZF9hcGlcIlxuICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnVXBsb2FkIGZpbGVzJylcIlxuICAgICAgICAgICAgICA6Y29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTYwMCcgOiAnZ3JlZW4tNSdcIlxuICAgICAgICAgICAgICA6dGV4dC1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICd3aGl0ZSdcIlxuICAgICAgICAgICAgICBuby10aHVtYm5haWxzXG4gICAgICAgICAgICAgIGNsYXNzPVwiZnVsbC13aWR0aCBxLW1iLW1kXCJcbiAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICBhY2NlcHQ9XCIuanBnLCBpbWFnZS8qXCJcbiAgICAgICAgICAgICAgYm9yZGVyZWRcbiAgICAgICAgICAgICAgOm1heC1maWxlcz1cIjFcIlxuICAgICAgICAgICAgICBhdXRvLXVwbG9hZFxuICAgICAgICAgICAgICBtYXgtdG90YWwtc2l6ZT1cIjEwNDg1NzZcIlxuICAgICAgICAgICAgICBAcmVqZWN0ZWQ9XCJvblJlamVjdGVkRmlsZXNcIlxuICAgICAgICAgICAgICA6aGVhZGVycz1cIltcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdBdXRob3JpemF0aW9uJywgdmFsdWU6IGB0b2tlbiAke3RoaXMuZ2V0VG9rZW4oKX1gIH0sXG4gICAgICAgICAgICAgIF1cIlxuICAgICAgICAgICAgICBmaWVsZC1uYW1lPVwiZmlsZVwiXG4gICAgICAgICAgICAgIEB1cGxvYWRlZD1cImFmdGVyVXBsb2FkZWRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPHEtc3BhY2UgY2xhc3M9XCJxLXBhLXNtXCI+PC9xLXNwYWNlPlxuICAgICAgICA8cS1idG5cbiAgICAgICAgICA6bG9hZGluZz1cImxvYWRpbmdfc3VibWl0XCJcbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICA6bGFiZWw9XCIkdCgnU3VibWl0JylcIlxuICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5IHRleHQtd2hpdGVcIlxuICAgICAgICAgIGNsYXNzPVwiZnVsbC13aWR0aCB0ZXh0LXdlaWdodC1ib2xkXCJcbiAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAvPlxuICAgICAgPC9xLWZvcm0+XG4gICAgPC9xLWNhcmQ+XG5cbiAgICA8ZGl2IHYtZWxzZS1pZj1cIiFsb2FkaW5nICYmICFoYXNEYXRhXCI+XG4gICAgICA8cCBjbGFzcz1cInRleHQtZ3JleVwiPnt7ICR0KFwiTm8gZGF0YSBhdmFpbGFibGVcIikgfX08L3A+XG4gICAgPC9kaXY+XG4gIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBBUElpbnRlcmZhY2UgZnJvbSBcInNyYy9hcGkvQVBJaW50ZXJmYWNlXCI7XG5pbXBvcnQgY29uZmlnIGZyb20gXCJzcmMvYXBpL2NvbmZpZ1wiO1xuaW1wb3J0IEFwcENhbWVyYSBmcm9tIFwic3JjL2FwaS9BcHBDYW1lcmFcIjtcbmltcG9ydCBhdXRoIGZyb20gXCJzcmMvYXBpL2F1dGhcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIlVwbG9hZERlcG9zaXRcIixcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICBsb2FkaW5nX3N1Ym1pdDogZmFsc2UsXG4gICAgICBvcmRlcl91dWlkOiBcIlwiLFxuICAgICAgYWNjb3VudF9uYW1lOiBcIlwiLFxuICAgICAgYW1vdW50OiAwLFxuICAgICAgcmVmZXJlbmNlX251bWJlcjogXCJcIixcbiAgICAgIG9yZGVyX2luZm86IFtdLFxuICAgICAgdXBsb2FkX2FwaTogY29uZmlnLmFwaV9iYXNlX3VybCArIFwiL2ludGVyZmFjZS91cGxvYWRQcm9vZlBheW1lbnRcIixcbiAgICAgIHBob3RvX2RhdGE6IFwiXCIsXG4gICAgICB1cGxvYWRfZW5hYmxlZDogZmFsc2UsXG4gICAgICBmaWxlbmFtZTogXCJcIixcbiAgICAgIHVybF9pbWFnZTogXCJcIixcbiAgICB9O1xuICB9LFxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMub3JkZXJfdXVpZCA9IHRoaXMuJHJvdXRlLnF1ZXJ5Lm9yZGVyX3V1aWQ7XG4gICAgdGhpcy5nZXRCYW5rRGVwb3NpdCgpO1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGhhc0RhdGEoKSB7XG4gICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5vcmRlcl9pbmZvKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBnZXRUb2tlbigpIHtcbiAgICAgIHJldHVybiBhdXRoLmdldFRva2VuKCk7XG4gICAgfSxcbiAgICBnZXRCYW5rRGVwb3NpdCgpIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICBBUElpbnRlcmZhY2UuZmV0Y2hEYXRhQnlUb2tlblBvc3QoXG4gICAgICAgIFwiZ2V0QmFua0RlcG9zaXRcIixcbiAgICAgICAgXCJvcmRlcl91dWlkPVwiICsgdGhpcy5vcmRlcl91dWlkXG4gICAgICApXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5vcmRlcl9pbmZvID0gZGF0YS5kZXRhaWxzLm9yZGVyX2luZm87XG4gICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGRhdGEuZGV0YWlscykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5hY2NvdW50X25hbWUgPSBkYXRhLmRldGFpbHMuZGF0YS5hY2NvdW50X25hbWU7XG4gICAgICAgICAgICB0aGlzLmFtb3VudCA9IGRhdGEuZGV0YWlscy5kYXRhLmFtb3VudDtcbiAgICAgICAgICAgIHRoaXMucmVmZXJlbmNlX251bWJlciA9IGRhdGEuZGV0YWlscy5kYXRhLnJlZmVyZW5jZV9udW1iZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7fSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICB0YWtlUGhvdG8oKSB7XG4gICAgICBpZiAodGhpcy4kcS5jYXBhY2l0b3IpIHtcbiAgICAgICAgQXBwQ2FtZXJhLmlzQ2FtZXJhRW5hYmxlZCgpXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIEFwcENhbWVyYS5pc0ZpbGVBY2Nlc3NFbmFibGVkKClcbiAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBBcHBDYW1lcmEuZ2V0UGhvdG8oMSlcbiAgICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGhvdG9fZGF0YSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBob3RvX2RhdGEgPSBbXTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4kcS5wbGF0Zm9ybS5pcy5pb3MpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMudXBsb2FkX2VuYWJsZWQgPSAhdGhpcy51cGxvYWRfZW5hYmxlZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLiRxLnBsYXRmb3JtLmlzLmlvcykge1xuICAgICAgICAgICAgICB0aGlzLnVwbG9hZF9lbmFibGVkID0gIXRoaXMudXBsb2FkX2VuYWJsZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnVwbG9hZF9lbmFibGVkID0gIXRoaXMudXBsb2FkX2VuYWJsZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICBhZnRlclVwbG9hZGVkKGZpbGVzKSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IEpTT04ucGFyc2UoZmlsZXMueGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICBpZiAocmVzcG9uc2UuY29kZSA9PT0gMSkge1xuICAgICAgICB0aGlzLnVybF9pbWFnZSA9IHJlc3BvbnNlLmRldGFpbHMudXJsX2ltYWdlO1xuICAgICAgICB0aGlzLmZpbGVuYW1lID0gcmVzcG9uc2UuZGV0YWlscy5maWxlbmFtZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudXJsX2ltYWdlID0gXCJcIjtcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IFwiXCI7XG4gICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJkYXJrXCIsIHJlc3BvbnNlLm1zZywgXCJlcnJvclwiLCB0aGlzLiRxKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uU3VibWl0KCkge1xuICAgICAgdGhpcy5sb2FkaW5nX3N1Ym1pdCA9IHRydWU7XG4gICAgICBBUElpbnRlcmZhY2UuZmV0Y2hEYXRhQnlUb2tlblBvc3QoXG4gICAgICAgIFwidXBsb2FkQmFua0RlcG9zaXRcIixcbiAgICAgICAgXCJvcmRlcl91dWlkPVwiICtcbiAgICAgICAgICB0aGlzLm9yZGVyX3V1aWQgK1xuICAgICAgICAgIFwiJmFjY291bnRfbmFtZT1cIiArXG4gICAgICAgICAgdGhpcy5hY2NvdW50X25hbWUgK1xuICAgICAgICAgIFwiJmFtb3VudD1cIiArXG4gICAgICAgICAgdGhpcy5hbW91bnQgK1xuICAgICAgICAgIFwiJnJlZmVyZW5jZV9udW1iZXI9XCIgK1xuICAgICAgICAgIHRoaXMucmVmZXJlbmNlX251bWJlciArXG4gICAgICAgICAgXCImZmlsZW5hbWU9XCIgK1xuICAgICAgICAgIHRoaXMuZmlsZW5hbWUgK1xuICAgICAgICAgIFwiJmZpbGVfZGF0YT1cIiArXG4gICAgICAgICAgdGhpcy5nZXRGaWxlRGF0YSgpICtcbiAgICAgICAgICBcIiZpbWFnZV90eXBlPVwiICtcbiAgICAgICAgICB0aGlzLmdldEZpbGVUeXBlKClcbiAgICAgIClcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBBUElpbnRlcmZhY2Uubm90aWZ5KFwiZ3JlZW4tNVwiLCBkYXRhLm1zZywgXCJjaGVja19jaXJjbGVcIiwgdGhpcy4kcSk7XG4gICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goXCIvYWNjb3VudC9hbGxvcmRlclwiKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJkYXJrXCIsIGVycm9yLCBcImVycm9yXCIsIHRoaXMuJHEpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZ19zdWJtaXQgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBnZXRGaWxlRGF0YSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhZERhdGEoKSA/IHRoaXMucGhvdG9fZGF0YS5kYXRhIDogXCJcIjtcbiAgICB9LFxuICAgIGdldEZpbGVUeXBlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaGFkRGF0YSgpID8gdGhpcy5waG90b19kYXRhLmZvcm1hdCA6IFwiXCI7XG4gICAgfSxcbiAgICBoYWREYXRhKCkge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMucGhvdG9fZGF0YSkubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbImRhdGEiLCJfY3JlYXRlVk5vZGUiLCJfY3JlYXRlQmxvY2siLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyIsIl9jcmVhdGVUZXh0Vk5vZGUiLCJfb3BlbkJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBdUxBLE1BQUssWUFBVTtBQUFBLEVBQ2IsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUNMLFdBQU87QUFBQSxNQUNMLFNBQVM7QUFBQSxNQUNULGdCQUFnQjtBQUFBLE1BQ2hCLFlB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
