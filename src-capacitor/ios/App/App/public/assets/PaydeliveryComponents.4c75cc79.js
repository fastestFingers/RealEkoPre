import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { _ as _export_sfc, m as APIinterface, p as openBlock, q as createBlock, t as withCtx, f as createVNode, a6 as createTextVNode, Z as toDisplayString, Y as QBtn, a9 as QCardSection, V as createElementBlock, F as Fragment, X as renderList, af as QRadio, ae as QAvatar, U as createBaseVNode, b2 as QSeparator, bE as QCardActions, a8 as QCard, aB as QDialog } from "./index.61ed5618.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QInnerLoading } from "./QInnerLoading.abe2afe6.js";
import { Q as QImg } from "./QImg.6c27044c.js";
const _sfc_main = {
  name: "PaydeliveryComponents",
  props: ["title", "label", "payment_code", "payment_credentials"],
  data() {
    return {
      show_modal: false,
      data: [],
      loading: false,
      payment_id: "",
      merchant_id: "",
      loading2: false
    };
  },
  computed: {
    getData() {
      return this.data;
    },
    hasData() {
      if (Object.keys(this.data).length > 0) {
        return true;
      }
      return false;
    },
    hasSelected() {
      if (this.payment_id > 0) {
        return false;
      }
      return true;
    }
  },
  methods: {
    showPaymentForm() {
      this.show_modal = true;
    },
    close() {
      this.show_modal = false;
    },
    onSubmit() {
      this.loading = true;
      if (typeof this.payment_credentials[this.payment_code] !== "undefined" && this.payment_credentials[this.payment_code] !== null) {
        this.merchant_id = this.payment_credentials[this.payment_code].merchant_id;
      }
      APIinterface.fetchDataByTokenPost(
        "savedPaydelivery",
        "payment_id=" + this.payment_id + "&payment_code=" + this.payment_code + "&merchant_id=" + this.merchant_id
      ).then((data) => {
        this.close();
        this.$emit("afterAddpayment");
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data) => {
        this.loading = false;
      });
    },
    getPaydelivery() {
      this.loading2 = true;
      if (typeof this.payment_credentials[this.payment_code] !== "undefined" && this.payment_credentials[this.payment_code] !== null) {
        this.merchant_id = this.payment_credentials[this.payment_code].merchant_id;
      }
      APIinterface.fetchDataByTokenPost(
        "getPaydelivery",
        "merchant_id=" + this.merchant_id
      ).then((data) => {
        this.data = data.details.data;
      }).catch((error) => {
      }).then((data) => {
        this.loading2 = false;
      });
    }
  }
};
const _hoisted_1 = {
  key: 0,
  class: "row q-gutter-none addon-carousel q-col-gutter-sm"
};
const _hoisted_2 = {
  key: 1,
  class: "flex flex-center"
};
const _hoisted_3 = { class: "text-grey" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QDialog, {
    modelValue: $data.show_modal,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.show_modal = $event),
    persistent: "",
    "transition-show": "fade",
    "transition-hide": "fade",
    "full-width": "",
    onShow: _cache[4] || (_cache[4] = ($event) => $options.getPaydelivery())
  }, {
    default: withCtx(() => [
      createVNode(QCard, { style: { "width": "500px", "max-width": "80vw" } }, {
        default: withCtx(() => [
          createVNode(QToolbar, {
            class: "top-toolbar q-pl-md",
            dense: ""
          }, {
            default: withCtx(() => [
              createVNode(QToolbarTitle, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString($props.title), 1)
                ]),
                _: 1
              }),
              createVNode(QBtn, {
                onClick: _cache[0] || (_cache[0] = ($event) => $data.show_modal = false),
                color: "white",
                square: "",
                unelevated: "",
                "text-color": "grey",
                icon: "las la-times",
                dense: "",
                "no-caps": "",
                size: "sm",
                class: "border-grey radius8"
              })
            ]),
            _: 1
          }),
          createVNode(QCardSection, { class: "q-pa-md" }, {
            default: withCtx(() => [
              $data.loading2 ? (openBlock(), createBlock(QInnerLoading, {
                key: 0,
                showing: true,
                color: "primary"
              })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                $options.hasData ? (openBlock(), createElementBlock("div", _hoisted_1, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList($options.getData, (items) => {
                    return openBlock(), createElementBlock("div", {
                      key: items,
                      class: "col-lg-3 col-md-3 col-sm-6 col-xs-4 text-center"
                    }, [
                      createVNode(QRadio, {
                        modelValue: $data.payment_id,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.payment_id = $event),
                        val: items.id,
                        label: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(QAvatar, {
                            size: "50px",
                            square: "",
                            class: "col self-center"
                          }, {
                            default: withCtx(() => [
                              createVNode(QImg, {
                                fit: "contain",
                                src: items.url_image,
                                class: "no-margin",
                                height: "50px",
                                loading: "lazy",
                                "placeholder-src": "placeholder.png",
                                "spinner-color": "secondary",
                                "spinner-size": "sm"
                              }, null, 8, ["src"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1032, ["modelValue", "val"])
                    ]);
                  }), 128))
                ])) : (openBlock(), createElementBlock("div", _hoisted_2, [
                  createBaseVNode("p", _hoisted_3, toDisplayString(_ctx.$t("No available data")), 1)
                ]))
              ], 64))
            ]),
            _: 1
          }),
          createVNode(QSeparator, { spaced: "" }),
          createVNode(QCardActions, null, {
            default: withCtx(() => [
              createVNode(QBtn, {
                label: $props.label.submit,
                loading: $data.loading,
                onClick: _cache[2] || (_cache[2] = ($event) => $options.onSubmit()),
                unelevated: "",
                "no-caps": "",
                color: "primary text-white",
                class: "full-width text-weight-bold",
                size: "lg",
                disable: $options.hasSelected
              }, null, 8, ["label", "loading", "disable"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["modelValue"]);
}
var PaydeliveryComponents = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "PaydeliveryComponents.vue"]]);
export { PaydeliveryComponents as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF5ZGVsaXZlcnlDb21wb25lbnRzLjRjNzVjYzc5LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9QYXlkZWxpdmVyeUNvbXBvbmVudHMudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHEtZGlhbG9nXG4gICAgdi1tb2RlbD1cInNob3dfbW9kYWxcIlxuICAgIHBlcnNpc3RlbnRcbiAgICB0cmFuc2l0aW9uLXNob3c9XCJmYWRlXCJcbiAgICB0cmFuc2l0aW9uLWhpZGU9XCJmYWRlXCJcbiAgICBmdWxsLXdpZHRoXG4gICAgQHNob3c9XCJnZXRQYXlkZWxpdmVyeSgpXCJcbiAgPlxuICAgIDxxLWNhcmQgc3R5bGU9XCJ3aWR0aDogNTAwcHg7IG1heC13aWR0aDogODB2d1wiPlxuICAgICAgPHEtdG9vbGJhciBjbGFzcz1cInRvcC10b29sYmFyIHEtcGwtbWRcIiBkZW5zZT5cbiAgICAgICAgPHEtdG9vbGJhci10aXRsZT57eyB0aXRsZSB9fTwvcS10b29sYmFyLXRpdGxlPlxuICAgICAgICA8cS1idG5cbiAgICAgICAgICBAY2xpY2s9XCJzaG93X21vZGFsID0gIXRydWVcIlxuICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgIHNxdWFyZVxuICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICB0ZXh0LWNvbG9yPVwiZ3JleVwiXG4gICAgICAgICAgaWNvbj1cImxhcyBsYS10aW1lc1wiXG4gICAgICAgICAgZGVuc2VcbiAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICBjbGFzcz1cImJvcmRlci1ncmV5IHJhZGl1czhcIlxuICAgICAgICAvPlxuICAgICAgPC9xLXRvb2xiYXI+XG5cbiAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cInEtcGEtbWRcIj5cbiAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJsb2FkaW5nMlwiPlxuICAgICAgICAgIDxxLWlubmVyLWxvYWRpbmcgOnNob3dpbmc9XCJ0cnVlXCIgY29sb3I9XCJwcmltYXJ5XCIgLz5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImhhc0RhdGFcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcS1ndXR0ZXItbm9uZSBhZGRvbi1jYXJvdXNlbCBxLWNvbC1ndXR0ZXItc21cIj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHYtZm9yPVwiaXRlbXMgaW4gZ2V0RGF0YVwiXG4gICAgICAgICAgICAgICAgOmtleT1cIml0ZW1zXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImNvbC1sZy0zIGNvbC1tZC0zIGNvbC1zbS02IGNvbC14cy00IHRleHQtY2VudGVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxxLXJhZGlvIHYtbW9kZWw9XCJwYXltZW50X2lkXCIgOnZhbD1cIml0ZW1zLmlkXCIgbGFiZWw9XCJcIj5cbiAgICAgICAgICAgICAgICAgIDxxLWF2YXRhciBzaXplPVwiNTBweFwiIHNxdWFyZSBjbGFzcz1cImNvbCBzZWxmLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8cS1pbWdcbiAgICAgICAgICAgICAgICAgICAgICBmaXQ9XCJjb250YWluXCJcbiAgICAgICAgICAgICAgICAgICAgICA6c3JjPVwiaXRlbXMudXJsX2ltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm5vLW1hcmdpblwiXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNTBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyLXNyYz1cInBsYWNlaG9sZGVyLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgc3Bpbm5lci1jb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgc3Bpbm5lci1zaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9xLWF2YXRhcj5cbiAgICAgICAgICAgICAgICA8L3EtcmFkaW8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWdyZXlcIj57eyAkdChcIk5vIGF2YWlsYWJsZSBkYXRhXCIpIH19PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG5cbiAgICAgIDxxLXNlcGFyYXRvciBzcGFjZWQgLz5cbiAgICAgIDxxLWNhcmQtYWN0aW9ucz5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgOmxhYmVsPVwibGFiZWwuc3VibWl0XCJcbiAgICAgICAgICA6bG9hZGluZz1cImxvYWRpbmdcIlxuICAgICAgICAgIEBjbGljaz1cIm9uU3VibWl0KClcIlxuICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5IHRleHQtd2hpdGVcIlxuICAgICAgICAgIGNsYXNzPVwiZnVsbC13aWR0aCB0ZXh0LXdlaWdodC1ib2xkXCJcbiAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgIDpkaXNhYmxlPVwiaGFzU2VsZWN0ZWRcIlxuICAgICAgICAvPlxuICAgICAgPC9xLWNhcmQtYWN0aW9ucz5cbiAgICA8L3EtY2FyZD5cbiAgPC9xLWRpYWxvZz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgQVBJaW50ZXJmYWNlIGZyb20gXCJzcmMvYXBpL0FQSWludGVyZmFjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiUGF5ZGVsaXZlcnlDb21wb25lbnRzXCIsXG4gIHByb3BzOiBbXCJ0aXRsZVwiLCBcImxhYmVsXCIsIFwicGF5bWVudF9jb2RlXCIsIFwicGF5bWVudF9jcmVkZW50aWFsc1wiXSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2hvd19tb2RhbDogZmFsc2UsXG4gICAgICBkYXRhOiBbXSxcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgcGF5bWVudF9pZDogXCJcIixcbiAgICAgIG1lcmNoYW50X2lkOiBcIlwiLFxuICAgICAgbG9hZGluZzI6IGZhbHNlLFxuICAgIH07XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgZ2V0RGF0YSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgfSxcbiAgICBoYXNEYXRhKCkge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZGF0YSkubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIGhhc1NlbGVjdGVkKCkge1xuICAgICAgaWYgKHRoaXMucGF5bWVudF9pZCA+IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHNob3dQYXltZW50Rm9ybSgpIHtcbiAgICAgIHRoaXMuc2hvd19tb2RhbCA9IHRydWU7XG4gICAgfSxcbiAgICBjbG9zZSgpIHtcbiAgICAgIHRoaXMuc2hvd19tb2RhbCA9IGZhbHNlO1xuICAgIH0sXG4gICAgb25TdWJtaXQoKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiB0aGlzLnBheW1lbnRfY3JlZGVudGlhbHNbdGhpcy5wYXltZW50X2NvZGVdICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgIHRoaXMucGF5bWVudF9jcmVkZW50aWFsc1t0aGlzLnBheW1lbnRfY29kZV0gIT09IG51bGxcbiAgICAgICkge1xuICAgICAgICB0aGlzLm1lcmNoYW50X2lkID1cbiAgICAgICAgICB0aGlzLnBheW1lbnRfY3JlZGVudGlhbHNbdGhpcy5wYXltZW50X2NvZGVdLm1lcmNoYW50X2lkO1xuICAgICAgfVxuXG4gICAgICBBUElpbnRlcmZhY2UuZmV0Y2hEYXRhQnlUb2tlblBvc3QoXG4gICAgICAgIFwic2F2ZWRQYXlkZWxpdmVyeVwiLFxuICAgICAgICBcInBheW1lbnRfaWQ9XCIgK1xuICAgICAgICAgIHRoaXMucGF5bWVudF9pZCArXG4gICAgICAgICAgXCImcGF5bWVudF9jb2RlPVwiICtcbiAgICAgICAgICB0aGlzLnBheW1lbnRfY29kZSArXG4gICAgICAgICAgXCImbWVyY2hhbnRfaWQ9XCIgK1xuICAgICAgICAgIHRoaXMubWVyY2hhbnRfaWRcbiAgICAgIClcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgdGhpcy4kZW1pdChcImFmdGVyQWRkcGF5bWVudFwiKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJkYXJrXCIsIGVycm9yLCBcImVycm9yXCIsIHRoaXMuJHEpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGdldFBheWRlbGl2ZXJ5KCkge1xuICAgICAgdGhpcy5sb2FkaW5nMiA9IHRydWU7XG5cbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIHRoaXMucGF5bWVudF9jcmVkZW50aWFsc1t0aGlzLnBheW1lbnRfY29kZV0gIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgdGhpcy5wYXltZW50X2NyZWRlbnRpYWxzW3RoaXMucGF5bWVudF9jb2RlXSAhPT0gbnVsbFxuICAgICAgKSB7XG4gICAgICAgIHRoaXMubWVyY2hhbnRfaWQgPVxuICAgICAgICAgIHRoaXMucGF5bWVudF9jcmVkZW50aWFsc1t0aGlzLnBheW1lbnRfY29kZV0ubWVyY2hhbnRfaWQ7XG4gICAgICB9XG5cbiAgICAgIEFQSWludGVyZmFjZS5mZXRjaERhdGFCeVRva2VuUG9zdChcbiAgICAgICAgXCJnZXRQYXlkZWxpdmVyeVwiLFxuICAgICAgICBcIm1lcmNoYW50X2lkPVwiICsgdGhpcy5tZXJjaGFudF9pZFxuICAgICAgKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuZGF0YSA9IGRhdGEuZGV0YWlscy5kYXRhO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7fSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcyID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX2NyZWF0ZUJsb2NrIiwiX2NyZWF0ZVZOb2RlIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9GcmFnbWVudCIsIl9vcGVuQmxvY2siLCJfcmVuZGVyTGlzdCIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7OztBQW9GQSxNQUFLLFlBQVU7QUFBQSxFQUNiLE1BQU07QUFBQSxFQUNOLE9BQU8sQ0FBQyxTQUFTLFNBQVMsZ0JBQWdCLHFCQUFxQjtBQUFBLEVBQy9ELE9BQU87QUFDTCxXQUFPO0FBQUEsTUFDTCxZQUFZO0FBQUEsTUFDWixNQUFNLENBQUU7QUFBQSxNQUNSLFNBQVM7QUFBQSxNQUNULFlBQVk7QUFBQSxNQUNaLGFBQWE7QUFBQSxN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
