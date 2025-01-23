import { _ as _export_sfc, bC as config, m as APIinterface, aw as auth, p as openBlock, V as createElementBlock, f as createVNode, t as withCtx, a7 as normalizeClass, F as Fragment, q as createBlock, Y as QBtn, a6 as createTextVNode, Z as toDisplayString, aA as createCommentVNode, U as createBaseVNode, aY as QInput, bD as QCheckbox } from "./index.61ed5618.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QRating } from "./QRating.f65cc24e.js";
import { Q as QUploader } from "./QUploader.bc1da65d.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import { Q as QFooter } from "./QFooter.571ac042.js";
import { Q as QForm } from "./QForm.7ded9d38.js";
import "./QResizeObserver.d08dce3c.js";
import "./format.7f7370d3.js";
import "./QCircularProgress.996c3e2f.js";
const _sfc_main = {
  name: "WriteReview",
  data() {
    return {
      order_uuid: "",
      loading: false,
      upload_api: config.api_base_url + "/interface/uploadReview",
      rating_value: 0,
      as_anonymous: false,
      review_content: "",
      tags_like: "",
      tags_not_like: "",
      upload_images: "",
      back_url: false,
      initial_rate: 0,
      order_id: ""
    };
  },
  mounted() {
    this.order_uuid = this.$route.query.order_uuid;
    this.back_url = this.$route.query.back_url;
    this.initial_rate = this.$route.query.rate;
    if (this.initial_rate > 0) {
      this.rating_value = this.initial_rate;
    }
    this.order_id = this.$route.query.order_id;
  },
  methods: {
    onRejectedFiles(rejectedEntries) {
      APIinterface.notify(
        "negative",
        `${rejectedEntries.length} file(s) did not pass validation constraints`,
        "error_outline",
        this.$q
      );
    },
    getToken() {
      return auth.getToken();
    },
    onSubmit() {
      const params = {
        order_uuid: this.order_uuid,
        review_content: this.review_content,
        rating_value: this.rating_value,
        as_anonymous: this.as_anonymous,
        tags_like: [this.tags_like],
        tags_not_like: [this.tags_not_like],
        upload_images: this.upload_images
      };
      this.loading = true;
      APIinterface.addReview(params).then((data) => {
        APIinterface.notify("green", data.msg, "check", this.$q);
        if (this.back_url) {
          this.$router.push(this.back_url);
        } else {
          this.$router.push({
            path: "/account/trackorder",
            query: { order_uuid: this.order_uuid }
          });
        }
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data) => {
        this.loading = false;
      });
    },
    afterUploaded(files) {
      const response = JSON.parse(files.xhr.responseText);
      if (response.code === 1) {
        this.upload_images = response.details;
      } else {
        APIinterface.notify("dark", response.msg, "error", this.$q);
      }
    }
  }
};
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { class: "q-mb-md" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("h6", { class: "text-weight-bold no-margin q-pb-sm" }, "What did you like?", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("h6", { class: "text-weight-bold no-margin q-pb-sm" }, "What did you not like?", -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("h6", { class: "text-weight-bold no-margin q-pb-sm" }, "Add Photos", -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("h6", { class: "text-weight-bold no-margin q-pb-sm" }, "Write your review", -1);
const _hoisted_7 = { class: "q-pb-sm" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(QHeader, {
      reveal: "",
      "reveal-offset": "50",
      class: normalizeClass({
        "bg-mydark text-white": _ctx.$q.dark.mode,
        "bg-white text-black": !_ctx.$q.dark.mode
      })
    }, {
      default: withCtx(() => [
        createVNode(QToolbar, { class: "text-dark" }, {
          default: withCtx(() => [
            $data.back_url ? (openBlock(), createBlock(QBtn, {
              key: 0,
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$router.back()),
              flat: "",
              round: "",
              dense: "",
              icon: "las la-angle-left",
              class: "q-mr-sm",
              color: _ctx.$q.dark.mode ? "white" : "dark"
            }, null, 8, ["color"])) : (openBlock(), createBlock(QBtn, {
              key: 1,
              to: `/account/trackorder?order_uuid=${$data.order_uuid}`,
              rounded: "",
              unelevated: "",
              color: "white",
              "text-color": "dark",
              icon: "eva-arrow-back-outline",
              dense: "",
              "no-caps": ""
            }, null, 8, ["to"])),
            createVNode(QToolbarTitle, {
              class: normalizeClass(["text-darkx text-weight-bold", {
                "text-white": _ctx.$q.dark.mode,
                "text-dark": !_ctx.$q.dark.mode
              }])
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("Write Review")) + " ", 1),
                $data.order_id ? (openBlock(), createElementBlock("span", _hoisted_1, "#" + toDisplayString($data.order_id), 1)) : createCommentVNode("", true)
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["class"]),
    createVNode(QForm, { onSubmit: $options.onSubmit }, {
      default: withCtx(() => [
        createVNode(QPage, {
          class: "q-pl-md q-pr-md",
          padding: ""
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2, [
              createVNode(QRating, {
                modelValue: $data.rating_value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.rating_value = $event),
                size: "md",
                max: 5,
                color: _ctx.$q.dark.mode ? "white" : "grey-5",
                "color-selected": "primary",
                class: "q-mb-xs"
              }, null, 8, ["modelValue", "color"])
            ]),
            _hoisted_3,
            createVNode(QInput, {
              modelValue: $data.tags_like,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.tags_like = $event),
              label: "Describe in few words",
              outlined: "",
              "lazy-rules": "",
              "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
              "label-color": _ctx.$q.dark.mode ? "grey300" : "grey",
              borderless: "",
              class: "input-borderless",
              rules: [
                (val) => val.length <= 50 || "Please use maximum 50 characters"
              ]
            }, null, 8, ["modelValue", "bg-color", "label-color", "rules"]),
            _hoisted_4,
            createVNode(QInput, {
              modelValue: $data.tags_not_like,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.tags_not_like = $event),
              label: "Describe in few words",
              outlined: "",
              "lazy-rules": "",
              "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
              "label-color": _ctx.$q.dark.mode ? "grey300" : "grey",
              borderless: "",
              class: "input-borderless",
              rules: [
                (val) => val.length <= 50 || "Please use maximum 50 characters"
              ]
            }, null, 8, ["modelValue", "bg-color", "label-color", "rules"]),
            _hoisted_5,
            createVNode(QUploader, {
              url: $data.upload_api,
              label: "Drop files here to upload",
              color: _ctx.$q.dark.mode ? "grey600" : "secondary",
              "text-color": _ctx.$q.dark.mode ? "grey300" : "white",
              "no-thumbnails": "",
              class: "full-width q-mb-md",
              flat: "",
              accept: ".jpg, image/*",
              bordered: "",
              "auto-upload": "",
              "max-total-size": "1048576",
              onRejected: $options.onRejectedFiles,
              headers: [
                { name: "Authorization", value: `token ${this.getToken()}` }
              ],
              "field-name": "file",
              onUploaded: $options.afterUploaded
            }, null, 8, ["url", "color", "text-color", "onRejected", "headers", "onUploaded"]),
            _hoisted_6,
            createVNode(QInput, {
              modelValue: $data.review_content,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.review_content = $event),
              outlined: "",
              autogrow: "",
              "lazy-rules": "",
              "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
              "label-color": _ctx.$q.dark.mode ? "grey300" : "grey",
              borderless: "",
              class: "input-borderless",
              rules: [(val) => val && val.length > 0 || "This field is required"]
            }, null, 8, ["modelValue", "bg-color", "label-color", "rules"]),
            createBaseVNode("div", _hoisted_7, [
              createVNode(QCheckbox, {
                modelValue: $data.as_anonymous,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.as_anonymous = $event),
                size: "sm",
                color: "secondary",
                label: "post review as anonymous"
              }, null, 8, ["modelValue"])
            ])
          ]),
          _: 1
        }),
        createVNode(QFooter, { class: "bg-white q-pl-md q-pr-md q-pb-sm q-pt-sm text-dark" }, {
          default: withCtx(() => [
            createVNode(QBtn, {
              type: "submit",
              unelevated: "",
              color: "primary",
              "text-color": "white",
              "no-caps": "",
              class: "full-width",
              loading: $data.loading,
              style: { "letter-spacing": "2px" },
              label: "Add Review",
              size: "lg"
            }, null, 8, ["loading"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["onSubmit"])
  ], 64);
}
var WriteReview = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "WriteReview.vue"]]);
export { WriteReview as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV3JpdGVSZXZpZXcuYWM4MTliNDYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9PcmRlci9Xcml0ZVJldmlldy52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8cS1oZWFkZXJcbiAgICByZXZlYWxcbiAgICByZXZlYWwtb2Zmc2V0PVwiNTBcIlxuICAgIDpjbGFzcz1cIntcbiAgICAgICdiZy1teWRhcmsgdGV4dC13aGl0ZSc6ICRxLmRhcmsubW9kZSxcbiAgICAgICdiZy13aGl0ZSB0ZXh0LWJsYWNrJzogISRxLmRhcmsubW9kZSxcbiAgICB9XCJcbiAgPlxuICAgIDxxLXRvb2xiYXIgY2xhc3M9XCJ0ZXh0LWRhcmtcIj5cbiAgICAgIDxxLWJ0blxuICAgICAgICB2LWlmPVwiYmFja191cmxcIlxuICAgICAgICBAY2xpY2s9XCIkcm91dGVyLmJhY2soKVwiXG4gICAgICAgIGZsYXRcbiAgICAgICAgcm91bmRcbiAgICAgICAgZGVuc2VcbiAgICAgICAgaWNvbj1cImxhcyBsYS1hbmdsZS1sZWZ0XCJcbiAgICAgICAgY2xhc3M9XCJxLW1yLXNtXCJcbiAgICAgICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ3doaXRlJyA6ICdkYXJrJ1wiXG4gICAgICAvPlxuICAgICAgPHEtYnRuXG4gICAgICAgIHYtZWxzZVxuICAgICAgICA6dG89XCJgL2FjY291bnQvdHJhY2tvcmRlcj9vcmRlcl91dWlkPSR7b3JkZXJfdXVpZH1gXCJcbiAgICAgICAgcm91bmRlZFxuICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICB0ZXh0LWNvbG9yPVwiZGFya1wiXG4gICAgICAgIGljb249XCJldmEtYXJyb3ctYmFjay1vdXRsaW5lXCJcbiAgICAgICAgZGVuc2VcbiAgICAgICAgbm8tY2Fwc1xuICAgICAgLz5cbiAgICAgIDxxLXRvb2xiYXItdGl0bGVcbiAgICAgICAgY2xhc3M9XCJ0ZXh0LWRhcmt4IHRleHQtd2VpZ2h0LWJvbGRcIlxuICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgJ3RleHQtd2hpdGUnOiAkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgJ3RleHQtZGFyayc6ICEkcS5kYXJrLm1vZGUsXG4gICAgICAgIH1cIlxuICAgICAgPlxuICAgICAgICB7eyAkdChcIldyaXRlIFJldmlld1wiKSB9fVxuICAgICAgICA8c3BhbiB2LWlmPVwib3JkZXJfaWRcIj4je3sgb3JkZXJfaWQgfX08L3NwYW4+XG4gICAgICA8L3EtdG9vbGJhci10aXRsZT5cbiAgICA8L3EtdG9vbGJhcj5cbiAgPC9xLWhlYWRlcj5cblxuICA8cS1mb3JtIEBzdWJtaXQ9XCJvblN1Ym1pdFwiPlxuICAgIDxxLXBhZ2UgY2xhc3M9XCJxLXBsLW1kIHEtcHItbWRcIiBwYWRkaW5nPlxuICAgICAgPGRpdiBjbGFzcz1cInEtbWItbWRcIj5cbiAgICAgICAgPHEtcmF0aW5nXG4gICAgICAgICAgdi1tb2RlbD1cInJhdGluZ192YWx1ZVwiXG4gICAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgICA6bWF4PVwiNVwiXG4gICAgICAgICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ3doaXRlJyA6ICdncmV5LTUnXCJcbiAgICAgICAgICBjb2xvci1zZWxlY3RlZD1cInByaW1hcnlcIlxuICAgICAgICAgIGNsYXNzPVwicS1tYi14c1wiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGg2IGNsYXNzPVwidGV4dC13ZWlnaHQtYm9sZCBuby1tYXJnaW4gcS1wYi1zbVwiPldoYXQgZGlkIHlvdSBsaWtlPzwvaDY+XG4gICAgICA8cS1pbnB1dFxuICAgICAgICB2LW1vZGVsPVwidGFnc19saWtlXCJcbiAgICAgICAgbGFiZWw9XCJEZXNjcmliZSBpbiBmZXcgd29yZHNcIlxuICAgICAgICBvdXRsaW5lZFxuICAgICAgICBsYXp5LXJ1bGVzXG4gICAgICAgIDpiZy1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5NjAwJyA6ICdpbnB1dCdcIlxuICAgICAgICA6bGFiZWwtY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTMwMCcgOiAnZ3JleSdcIlxuICAgICAgICBib3JkZXJsZXNzXG4gICAgICAgIGNsYXNzPVwiaW5wdXQtYm9yZGVybGVzc1wiXG4gICAgICAgIDpydWxlcz1cIltcbiAgICAgICAgICAodmFsKSA9PiB2YWwubGVuZ3RoIDw9IDUwIHx8ICdQbGVhc2UgdXNlIG1heGltdW0gNTAgY2hhcmFjdGVycycsXG4gICAgICAgIF1cIlxuICAgICAgLz5cblxuICAgICAgPGg2IGNsYXNzPVwidGV4dC13ZWlnaHQtYm9sZCBuby1tYXJnaW4gcS1wYi1zbVwiPldoYXQgZGlkIHlvdSBub3QgbGlrZT88L2g2PlxuXG4gICAgICA8cS1pbnB1dFxuICAgICAgICB2LW1vZGVsPVwidGFnc19ub3RfbGlrZVwiXG4gICAgICAgIGxhYmVsPVwiRGVzY3JpYmUgaW4gZmV3IHdvcmRzXCJcbiAgICAgICAgb3V0bGluZWRcbiAgICAgICAgbGF6eS1ydWxlc1xuICAgICAgICA6YmctY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTYwMCcgOiAnaW5wdXQnXCJcbiAgICAgICAgOmxhYmVsLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXkzMDAnIDogJ2dyZXknXCJcbiAgICAgICAgYm9yZGVybGVzc1xuICAgICAgICBjbGFzcz1cImlucHV0LWJvcmRlcmxlc3NcIlxuICAgICAgICA6cnVsZXM9XCJbXG4gICAgICAgICAgKHZhbCkgPT4gdmFsLmxlbmd0aCA8PSA1MCB8fCAnUGxlYXNlIHVzZSBtYXhpbXVtIDUwIGNoYXJhY3RlcnMnLFxuICAgICAgICBdXCJcbiAgICAgIC8+XG5cbiAgICAgIDxoNiBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGQgbm8tbWFyZ2luIHEtcGItc21cIj5BZGQgUGhvdG9zPC9oNj5cbiAgICAgIDxxLXVwbG9hZGVyXG4gICAgICAgIDp1cmw9XCJ1cGxvYWRfYXBpXCJcbiAgICAgICAgbGFiZWw9XCJEcm9wIGZpbGVzIGhlcmUgdG8gdXBsb2FkXCJcbiAgICAgICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXk2MDAnIDogJ3NlY29uZGFyeSdcIlxuICAgICAgICA6dGV4dC1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICd3aGl0ZSdcIlxuICAgICAgICBuby10aHVtYm5haWxzXG4gICAgICAgIGNsYXNzPVwiZnVsbC13aWR0aCBxLW1iLW1kXCJcbiAgICAgICAgZmxhdFxuICAgICAgICBhY2NlcHQ9XCIuanBnLCBpbWFnZS8qXCJcbiAgICAgICAgYm9yZGVyZWRcbiAgICAgICAgYXV0by11cGxvYWRcbiAgICAgICAgbWF4LXRvdGFsLXNpemU9XCIxMDQ4NTc2XCJcbiAgICAgICAgQHJlamVjdGVkPVwib25SZWplY3RlZEZpbGVzXCJcbiAgICAgICAgOmhlYWRlcnM9XCJbXG4gICAgICAgICAgeyBuYW1lOiAnQXV0aG9yaXphdGlvbicsIHZhbHVlOiBgdG9rZW4gJHt0aGlzLmdldFRva2VuKCl9YCB9LFxuICAgICAgICBdXCJcbiAgICAgICAgZmllbGQtbmFtZT1cImZpbGVcIlxuICAgICAgICBAdXBsb2FkZWQ9XCJhZnRlclVwbG9hZGVkXCJcbiAgICAgIC8+XG5cbiAgICAgIDxoNiBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGQgbm8tbWFyZ2luIHEtcGItc21cIj5Xcml0ZSB5b3VyIHJldmlldzwvaDY+XG5cbiAgICAgIDxxLWlucHV0XG4gICAgICAgIHYtbW9kZWw9XCJyZXZpZXdfY29udGVudFwiXG4gICAgICAgIG91dGxpbmVkXG4gICAgICAgIGF1dG9ncm93XG4gICAgICAgIGxhenktcnVsZXNcbiAgICAgICAgOmJnLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXk2MDAnIDogJ2lucHV0J1wiXG4gICAgICAgIDpsYWJlbC1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICdncmV5J1wiXG4gICAgICAgIGJvcmRlcmxlc3NcbiAgICAgICAgY2xhc3M9XCJpbnB1dC1ib3JkZXJsZXNzXCJcbiAgICAgICAgOnJ1bGVzPVwiWyh2YWwpID0+ICh2YWwgJiYgdmFsLmxlbmd0aCA+IDApIHx8ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJ11cIlxuICAgICAgLz5cblxuICAgICAgPGRpdiBjbGFzcz1cInEtcGItc21cIj5cbiAgICAgICAgPHEtY2hlY2tib3hcbiAgICAgICAgICB2LW1vZGVsPVwiYXNfYW5vbnltb3VzXCJcbiAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICBsYWJlbD1cInBvc3QgcmV2aWV3IGFzIGFub255bW91c1wiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L3EtcGFnZT5cblxuICAgIDxxLWZvb3RlciBjbGFzcz1cImJnLXdoaXRlIHEtcGwtbWQgcS1wci1tZCBxLXBiLXNtIHEtcHQtc20gdGV4dC1kYXJrXCI+XG4gICAgICA8cS1idG5cbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgdGV4dC1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgbm8tY2Fwc1xuICAgICAgICBjbGFzcz1cImZ1bGwtd2lkdGhcIlxuICAgICAgICA6bG9hZGluZz1cImxvYWRpbmdcIlxuICAgICAgICBzdHlsZT1cImxldHRlci1zcGFjaW5nOiAycHhcIlxuICAgICAgICBsYWJlbD1cIkFkZCBSZXZpZXdcIlxuICAgICAgICBzaXplPVwibGdcIlxuICAgICAgLz5cbiAgICA8L3EtZm9vdGVyPlxuICA8L3EtZm9ybT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgQVBJaW50ZXJmYWNlIGZyb20gXCJzcmMvYXBpL0FQSWludGVyZmFjZVwiO1xuaW1wb3J0IGNvbmZpZyBmcm9tIFwic3JjL2FwaS9jb25maWdcIjtcbmltcG9ydCBhdXRoIGZyb20gXCJzcmMvYXBpL2F1dGhcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIldyaXRlUmV2aWV3XCIsXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9yZGVyX3V1aWQ6IFwiXCIsXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIHVwbG9hZF9hcGk6IGNvbmZpZy5hcGlfYmFzZV91cmwgKyBcIi9pbnRlcmZhY2UvdXBsb2FkUmV2aWV3XCIsXG4gICAgICByYXRpbmdfdmFsdWU6IDAsXG4gICAgICBhc19hbm9ueW1vdXM6IGZhbHNlLFxuICAgICAgcmV2aWV3X2NvbnRlbnQ6IFwiXCIsXG4gICAgICB0YWdzX2xpa2U6IFwiXCIsXG4gICAgICB0YWdzX25vdF9saWtlOiBcIlwiLFxuICAgICAgdXBsb2FkX2ltYWdlczogXCJcIixcbiAgICAgIGJhY2tfdXJsOiBmYWxzZSxcbiAgICAgIGluaXRpYWxfcmF0ZTogMCxcbiAgICAgIG9yZGVyX2lkOiBcIlwiLFxuICAgIH07XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5vcmRlcl91dWlkID0gdGhpcy4kcm91dGUucXVlcnkub3JkZXJfdXVpZDtcbiAgICB0aGlzLmJhY2tfdXJsID0gdGhpcy4kcm91dGUucXVlcnkuYmFja191cmw7XG4gICAgdGhpcy5pbml0aWFsX3JhdGUgPSB0aGlzLiRyb3V0ZS5xdWVyeS5yYXRlO1xuICAgIGlmICh0aGlzLmluaXRpYWxfcmF0ZSA+IDApIHtcbiAgICAgIHRoaXMucmF0aW5nX3ZhbHVlID0gdGhpcy5pbml0aWFsX3JhdGU7XG4gICAgfVxuICAgIHRoaXMub3JkZXJfaWQgPSB0aGlzLiRyb3V0ZS5xdWVyeS5vcmRlcl9pZDtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG9uUmVqZWN0ZWRGaWxlcyhyZWplY3RlZEVudHJpZXMpIHtcbiAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXG4gICAgICAgIFwibmVnYXRpdmVcIixcbiAgICAgICAgYCR7cmVqZWN0ZWRFbnRyaWVzLmxlbmd0aH0gZmlsZShzKSBkaWQgbm90IHBhc3MgdmFsaWRhdGlvbiBjb25zdHJhaW50c2AsXG4gICAgICAgIFwiZXJyb3Jfb3V0bGluZVwiLFxuICAgICAgICB0aGlzLiRxXG4gICAgICApO1xuICAgIH0sXG4gICAgZ2V0VG9rZW4oKSB7XG4gICAgICByZXR1cm4gYXV0aC5nZXRUb2tlbigpO1xuICAgIH0sXG4gICAgb25TdWJtaXQoKSB7XG4gICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgIG9yZGVyX3V1aWQ6IHRoaXMub3JkZXJfdXVpZCxcbiAgICAgICAgcmV2aWV3X2NvbnRlbnQ6IHRoaXMucmV2aWV3X2NvbnRlbnQsXG4gICAgICAgIHJhdGluZ192YWx1ZTogdGhpcy5yYXRpbmdfdmFsdWUsXG4gICAgICAgIGFzX2Fub255bW91czogdGhpcy5hc19hbm9ueW1vdXMsXG4gICAgICAgIHRhZ3NfbGlrZTogW3RoaXMudGFnc19saWtlXSxcbiAgICAgICAgdGFnc19ub3RfbGlrZTogW3RoaXMudGFnc19ub3RfbGlrZV0sXG4gICAgICAgIHVwbG9hZF9pbWFnZXM6IHRoaXMudXBsb2FkX2ltYWdlcyxcbiAgICAgIH07XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgQVBJaW50ZXJmYWNlLmFkZFJldmlldyhwYXJhbXMpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgQVBJaW50ZXJmYWNlLm5vdGlmeShcImdyZWVuXCIsIGRhdGEubXNnLCBcImNoZWNrXCIsIHRoaXMuJHEpO1xuICAgICAgICAgIGlmICh0aGlzLmJhY2tfdXJsKSB7XG4gICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh0aGlzLmJhY2tfdXJsKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xuICAgICAgICAgICAgICBwYXRoOiBcIi9hY2NvdW50L3RyYWNrb3JkZXJcIixcbiAgICAgICAgICAgICAgcXVlcnk6IHsgb3JkZXJfdXVpZDogdGhpcy5vcmRlcl91dWlkIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBBUElpbnRlcmZhY2Uubm90aWZ5KFwiZGFya1wiLCBlcnJvciwgXCJlcnJvclwiLCB0aGlzLiRxKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBhZnRlclVwbG9hZGVkKGZpbGVzKSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IEpTT04ucGFyc2UoZmlsZXMueGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICBpZiAocmVzcG9uc2UuY29kZSA9PT0gMSkge1xuICAgICAgICB0aGlzLnVwbG9hZF9pbWFnZXMgPSByZXNwb25zZS5kZXRhaWxzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgQVBJaW50ZXJmYWNlLm5vdGlmeShcImRhcmtcIiwgcmVzcG9uc2UubXNnLCBcImVycm9yXCIsIHRoaXMuJHEpO1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9jcmVhdGVWTm9kZSIsIl9ub3JtYWxpemVDbGFzcyIsIl9jcmVhdGVCbG9jayIsIl9jcmVhdGVUZXh0Vk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBMkpBLE1BQUssWUFBVTtBQUFBLEVBQ2IsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUNMLFdBQU87QUFBQSxNQUNMLFlBQVk7QUFBQSxNQUNaLFNBQVM7QUFBQSxNQUNULFlBQVksT0FBTyxlQUFlO0FBQUEsTUFDbEMsY0FBYztBQUFBLE1BQ2QsY0FBYztBQUFBLE1BQ2QsZ0JBQWdCO0FBQUEsTUFDaEIsV0FBVztBQUFBLE1BQ1gsZUFBZTtBQUFBLE1B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
