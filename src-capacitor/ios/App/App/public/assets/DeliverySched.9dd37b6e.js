import { Q as QBtnToggle } from "./QBtnToggle.6ffa195b.js";
import { _ as _export_sfc, m as APIinterface, p as openBlock, q as createBlock, t as withCtx, f as createVNode, a9 as QCardSection, bV as QOptionGroup, V as createElementBlock, aA as createCommentVNode, bE as QCardActions, Y as QBtn, a8 as QCard, aB as QDialog } from "./index.61ed5618.js";
import { Q as QSelect } from "./QSelect.311187d6.js";
import { u as useDeliveryschedStore } from "./DeliverySched.4e9605bf.js";
import "./QBtnGroup.abc2d1c7.js";
import "./QChip.f183a4f1.js";
import "./QItemLabel.a9365c5b.js";
import "./QMenu.8e482cd8.js";
import "./selection.50b4cb0c.js";
import "./rtl.f3ed811c.js";
import "./format.7f7370d3.js";
const _sfc_main = {
  name: "DeliverySched",
  props: ["slug"],
  setup() {
    const schedStore = useDeliveryschedStore();
    return { schedStore };
  },
  data() {
    return {
      show_modal: false,
      loading: false,
      transaction_type: "",
      transaction_list: [],
      delivery_date: "",
      delivery_time: "",
      delivery_options: [],
      delivery_date_list: [],
      delivery_time_list: [],
      opening_hours: [],
      trans_data: [],
      is_saved: false
    };
  },
  methods: {
    showSched(data) {
      this.show_modal = data;
    },
    beforeShow() {
      this.is_saved = false;
      if (this.schedStore.whento_deliver == "schedule") {
        this.schedStore.getDeliveryTimes(this.slug);
      }
    },
    beforeHide() {
      if (!this.is_saved) {
        this.schedStore.getDeliverySched(
          APIinterface.getStorage("cart_uuid"),
          this.slug
        );
      }
    },
    chooseWhen(data) {
      if (data === "schedule") {
        this.schedStore.getDeliveryTimes(this.slug);
      }
    },
    chooseDate(data) {
      this.schedStore.delivery_time_list = [];
      this.schedStore.delivery_time = "";
      this.schedStore.getTimeList(data);
    },
    saveTransactionInfo() {
      this.schedStore.loading = true;
      const cartUUID = APIinterface.getStorage("cart_uuid");
      const $params = {
        cart_uuid: cartUUID,
        delivery_date: this.schedStore.delivery_date,
        whento_deliver: this.schedStore.whento_deliver,
        delivery_time: this.schedStore.delivery_time,
        transaction_type: this.schedStore.transaction_type
      };
      APIinterface.saveTransactionInfo($params).then((data) => {
        if (APIinterface.empty(cartUUID)) {
          APIinterface.setStorage("cart_uuid", data.details.cart_uuid);
        }
        const $data = {
          whento_deliver: this.schedStore.whento_deliver,
          delivery_date: this.schedStore.delivery_date,
          delivery_time: this.schedStore.delivery_time
        };
        APIinterface.setStorage("delivery_sched", 1);
        APIinterface.setStorage(
          "transaction_type",
          this.schedStore.transaction_type
        );
        APIinterface.setStorage("choosen_delivery", $data);
        this.schedStore.new_transaction_type = this.schedStore.transaction_type;
        this.schedStore.new_whento_deliver = this.schedStore.whento_deliver;
        this.is_saved = true;
        this.show_modal = false;
        this.$emit("afterSavetrans", $data);
      }).catch((error) => {
        APIinterface.notify("negative", error, "warning", this.$q);
      }).then((data) => {
        this.schedStore.loading = false;
      });
    }
  }
};
const _hoisted_1 = {
  key: 0,
  class: "q-mt-md"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QDialog, {
    modelValue: $data.show_modal,
    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.show_modal = $event),
    position: "bottom",
    onBeforeShow: $options.beforeShow,
    onBeforeHide: $options.beforeHide
  }, {
    default: withCtx(() => [
      createVNode(QCard, null, {
        default: withCtx(() => [
          createVNode(QCardSection, null, {
            default: withCtx(() => [
              createVNode(QBtnToggle, {
                modelValue: $setup.schedStore.transaction_type,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.schedStore.transaction_type = $event),
                "toggle-color": "secondary",
                "no-caps": "",
                unelevated: "",
                class: "rounded-group q-mb-sm",
                options: $setup.schedStore.transaction_list
              }, null, 8, ["modelValue", "options"]),
              createVNode(QOptionGroup, {
                modelValue: $setup.schedStore.whento_deliver,
                "onUpdate:modelValue": [
                  _cache[1] || (_cache[1] = ($event) => $setup.schedStore.whento_deliver = $event),
                  $options.chooseWhen
                ],
                options: $setup.schedStore.delivery_options,
                color: "secondary"
              }, null, 8, ["modelValue", "options", "onUpdate:modelValue"]),
              $setup.schedStore.whento_deliver === "schedule" ? (openBlock(), createElementBlock("div", _hoisted_1, [
                createVNode(QSelect, {
                  outlined: "",
                  dense: "",
                  modelValue: $setup.schedStore.delivery_date,
                  "onUpdate:modelValue": [
                    _cache[2] || (_cache[2] = ($event) => $setup.schedStore.delivery_date = $event),
                    $options.chooseDate
                  ],
                  color: "secondary",
                  class: "q-mb-md",
                  "transition-show": "scale",
                  "transition-hide": "scale",
                  options: $setup.schedStore.delivery_date_list,
                  "emit-value": "",
                  "map-options": ""
                }, null, 8, ["modelValue", "options", "onUpdate:modelValue"]),
                createVNode(QSelect, {
                  outlined: "",
                  dense: "",
                  modelValue: $setup.schedStore.delivery_time,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.schedStore.delivery_time = $event),
                  color: "secondary",
                  class: "q-mb-md",
                  "transition-show": "scale",
                  "transition-hide": "scale",
                  options: $setup.schedStore.delivery_time_list
                }, null, 8, ["modelValue", "options"])
              ])) : createCommentVNode("", true)
            ]),
            _: 1
          }),
          createVNode(QCardActions, { class: "" }, {
            default: withCtx(() => [
              createVNode(QBtn, {
                unelevated: "",
                color: "primary",
                "text-color": "white",
                "no-caps": "",
                class: "full-width",
                label: _ctx.$t("Confirm"),
                size: "lg",
                onClick: $options.saveTransactionInfo,
                loading: $setup.schedStore.loading
              }, null, 8, ["label", "onClick", "loading"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["modelValue", "onBeforeShow", "onBeforeHide"]);
}
var DeliverySched = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "DeliverySched.vue"]]);
export { DeliverySched as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVsaXZlcnlTY2hlZC45ZGQzN2I2ZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvRGVsaXZlcnlTY2hlZC52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8cS1kaWFsb2dcbiAgICB2LW1vZGVsPVwic2hvd19tb2RhbFwiXG4gICAgcG9zaXRpb249XCJib3R0b21cIlxuICAgIEBiZWZvcmUtc2hvdz1cImJlZm9yZVNob3dcIlxuICAgIEBiZWZvcmUtaGlkZT1cImJlZm9yZUhpZGVcIlxuICA+XG4gICAgPHEtY2FyZD5cbiAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgPHEtYnRuLXRvZ2dsZVxuICAgICAgICAgIHYtbW9kZWw9XCJzY2hlZFN0b3JlLnRyYW5zYWN0aW9uX3R5cGVcIlxuICAgICAgICAgIHRvZ2dsZS1jb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICBjbGFzcz1cInJvdW5kZWQtZ3JvdXAgcS1tYi1zbVwiXG4gICAgICAgICAgOm9wdGlvbnM9XCJzY2hlZFN0b3JlLnRyYW5zYWN0aW9uX2xpc3RcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxxLW9wdGlvbi1ncm91cFxuICAgICAgICAgIHYtbW9kZWw9XCJzY2hlZFN0b3JlLndoZW50b19kZWxpdmVyXCJcbiAgICAgICAgICA6b3B0aW9ucz1cInNjaGVkU3RvcmUuZGVsaXZlcnlfb3B0aW9uc1wiXG4gICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgIEB1cGRhdGU6bW9kZWwtdmFsdWU9XCJjaG9vc2VXaGVuXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicS1tdC1tZFwiIHYtaWY9XCJzY2hlZFN0b3JlLndoZW50b19kZWxpdmVyID09PSAnc2NoZWR1bGUnXCI+XG4gICAgICAgICAgPHEtc2VsZWN0XG4gICAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgIHYtbW9kZWw9XCJzY2hlZFN0b3JlLmRlbGl2ZXJ5X2RhdGVcIlxuICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgY2xhc3M9XCJxLW1iLW1kXCJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tc2hvdz1cInNjYWxlXCJcbiAgICAgICAgICAgIHRyYW5zaXRpb24taGlkZT1cInNjYWxlXCJcbiAgICAgICAgICAgIDpvcHRpb25zPVwic2NoZWRTdG9yZS5kZWxpdmVyeV9kYXRlX2xpc3RcIlxuICAgICAgICAgICAgZW1pdC12YWx1ZVxuICAgICAgICAgICAgbWFwLW9wdGlvbnNcbiAgICAgICAgICAgIEB1cGRhdGU6bW9kZWwtdmFsdWU9XCJjaG9vc2VEYXRlXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxxLXNlbGVjdFxuICAgICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICB2LW1vZGVsPVwic2NoZWRTdG9yZS5kZWxpdmVyeV90aW1lXCJcbiAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIGNsYXNzPVwicS1tYi1tZFwiXG4gICAgICAgICAgICB0cmFuc2l0aW9uLXNob3c9XCJzY2FsZVwiXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWhpZGU9XCJzY2FsZVwiXG4gICAgICAgICAgICA6b3B0aW9ucz1cInNjaGVkU3RvcmUuZGVsaXZlcnlfdGltZV9saXN0XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG5cbiAgICAgIDxxLWNhcmQtYWN0aW9ucyBjbGFzcz1cIlwiPlxuICAgICAgICA8cS1idG5cbiAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICB0ZXh0LWNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICBjbGFzcz1cImZ1bGwtd2lkdGhcIlxuICAgICAgICAgIDpsYWJlbD1cIiR0KCdDb25maXJtJylcIlxuICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgQGNsaWNrPVwic2F2ZVRyYW5zYWN0aW9uSW5mb1wiXG4gICAgICAgICAgOmxvYWRpbmc9XCJzY2hlZFN0b3JlLmxvYWRpbmdcIlxuICAgICAgICA+XG4gICAgICAgIDwvcS1idG4+XG4gICAgICA8L3EtY2FyZC1hY3Rpb25zPlxuICAgIDwvcS1jYXJkPlxuICA8L3EtZGlhbG9nPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBBUElpbnRlcmZhY2UgZnJvbSBcInNyYy9hcGkvQVBJaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyB1c2VEZWxpdmVyeXNjaGVkU3RvcmUgfSBmcm9tIFwic3RvcmVzL0RlbGl2ZXJ5U2NoZWRcIjtcbi8vaW1wb3J0IHsgdXNlVHJhbnNhY3Rpb25TdG9yZSB9IGZyb20gXCJzdG9yZXMvVHJhbnNhY3Rpb25cIjtcblxuY29uc3QgJG9wZW5pbmdIb3VycyA9IFtdO1xuY29uc3QgJG9wZW5pbmdEYXRlcyA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiRGVsaXZlcnlTY2hlZFwiLFxuICBwcm9wczogW1wic2x1Z1wiXSxcbiAgc2V0dXAoKSB7XG4gICAgY29uc3Qgc2NoZWRTdG9yZSA9IHVzZURlbGl2ZXJ5c2NoZWRTdG9yZSgpO1xuICAgIC8vY29uc3QgdHJhbnNhY3Rpb25TdG9yZSA9IHVzZVRyYW5zYWN0aW9uU3RvcmUoKTtcbiAgICByZXR1cm4geyBzY2hlZFN0b3JlIH07XG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNob3dfbW9kYWw6IGZhbHNlLFxuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICB0cmFuc2FjdGlvbl90eXBlOiBcIlwiLFxuICAgICAgdHJhbnNhY3Rpb25fbGlzdDogW10sXG4gICAgICBkZWxpdmVyeV9kYXRlOiBcIlwiLFxuICAgICAgZGVsaXZlcnlfdGltZTogXCJcIixcbiAgICAgIGRlbGl2ZXJ5X29wdGlvbnM6IFtdLFxuICAgICAgZGVsaXZlcnlfZGF0ZV9saXN0OiBbXSxcbiAgICAgIGRlbGl2ZXJ5X3RpbWVfbGlzdDogW10sXG4gICAgICBvcGVuaW5nX2hvdXJzOiBbXSxcbiAgICAgIHRyYW5zX2RhdGE6IFtdLFxuICAgICAgaXNfc2F2ZWQ6IGZhbHNlLFxuICAgIH07XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBzaG93U2NoZWQoZGF0YSkge1xuICAgICAgdGhpcy5zaG93X21vZGFsID0gZGF0YTtcbiAgICB9LFxuICAgIGJlZm9yZVNob3coKSB7XG4gICAgICB0aGlzLmlzX3NhdmVkID0gZmFsc2U7XG4gICAgICBpZiAodGhpcy5zY2hlZFN0b3JlLndoZW50b19kZWxpdmVyID09IFwic2NoZWR1bGVcIikge1xuICAgICAgICB0aGlzLnNjaGVkU3RvcmUuZ2V0RGVsaXZlcnlUaW1lcyh0aGlzLnNsdWcpO1xuICAgICAgfVxuICAgIH0sXG4gICAgYmVmb3JlSGlkZSgpIHtcbiAgICAgIGlmICghdGhpcy5pc19zYXZlZCkge1xuICAgICAgICB0aGlzLnNjaGVkU3RvcmUuZ2V0RGVsaXZlcnlTY2hlZChcbiAgICAgICAgICBBUElpbnRlcmZhY2UuZ2V0U3RvcmFnZShcImNhcnRfdXVpZFwiKSxcbiAgICAgICAgICB0aGlzLnNsdWdcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNob29zZVdoZW4oZGF0YSkge1xuICAgICAgaWYgKGRhdGEgPT09IFwic2NoZWR1bGVcIikge1xuICAgICAgICB0aGlzLnNjaGVkU3RvcmUuZ2V0RGVsaXZlcnlUaW1lcyh0aGlzLnNsdWcpO1xuICAgICAgfVxuICAgIH0sXG4gICAgY2hvb3NlRGF0ZShkYXRhKSB7XG4gICAgICB0aGlzLnNjaGVkU3RvcmUuZGVsaXZlcnlfdGltZV9saXN0ID0gW107XG4gICAgICB0aGlzLnNjaGVkU3RvcmUuZGVsaXZlcnlfdGltZSA9IFwiXCI7XG4gICAgICB0aGlzLnNjaGVkU3RvcmUuZ2V0VGltZUxpc3QoZGF0YSk7XG4gICAgfSxcbiAgICBzYXZlVHJhbnNhY3Rpb25JbmZvKCkge1xuICAgICAgdGhpcy5zY2hlZFN0b3JlLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgY29uc3QgY2FydFVVSUQgPSBBUElpbnRlcmZhY2UuZ2V0U3RvcmFnZShcImNhcnRfdXVpZFwiKTtcbiAgICAgIGNvbnN0ICRwYXJhbXMgPSB7XG4gICAgICAgIGNhcnRfdXVpZDogY2FydFVVSUQsXG4gICAgICAgIGRlbGl2ZXJ5X2RhdGU6IHRoaXMuc2NoZWRTdG9yZS5kZWxpdmVyeV9kYXRlLFxuICAgICAgICB3aGVudG9fZGVsaXZlcjogdGhpcy5zY2hlZFN0b3JlLndoZW50b19kZWxpdmVyLFxuICAgICAgICBkZWxpdmVyeV90aW1lOiB0aGlzLnNjaGVkU3RvcmUuZGVsaXZlcnlfdGltZSxcbiAgICAgICAgdHJhbnNhY3Rpb25fdHlwZTogdGhpcy5zY2hlZFN0b3JlLnRyYW5zYWN0aW9uX3R5cGUsXG4gICAgICB9O1xuICAgICAgQVBJaW50ZXJmYWNlLnNhdmVUcmFuc2FjdGlvbkluZm8oJHBhcmFtcylcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoQVBJaW50ZXJmYWNlLmVtcHR5KGNhcnRVVUlEKSkge1xuICAgICAgICAgICAgQVBJaW50ZXJmYWNlLnNldFN0b3JhZ2UoXCJjYXJ0X3V1aWRcIiwgZGF0YS5kZXRhaWxzLmNhcnRfdXVpZCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgJGRhdGEgPSB7XG4gICAgICAgICAgICB3aGVudG9fZGVsaXZlcjogdGhpcy5zY2hlZFN0b3JlLndoZW50b19kZWxpdmVyLFxuICAgICAgICAgICAgZGVsaXZlcnlfZGF0ZTogdGhpcy5zY2hlZFN0b3JlLmRlbGl2ZXJ5X2RhdGUsXG4gICAgICAgICAgICBkZWxpdmVyeV90aW1lOiB0aGlzLnNjaGVkU3RvcmUuZGVsaXZlcnlfdGltZSxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgQVBJaW50ZXJmYWNlLnNldFN0b3JhZ2UoXCJkZWxpdmVyeV9zY2hlZFwiLCAxKTtcbiAgICAgICAgICBBUElpbnRlcmZhY2Uuc2V0U3RvcmFnZShcbiAgICAgICAgICAgIFwidHJhbnNhY3Rpb25fdHlwZVwiLFxuICAgICAgICAgICAgdGhpcy5zY2hlZFN0b3JlLnRyYW5zYWN0aW9uX3R5cGVcbiAgICAgICAgICApO1xuICAgICAgICAgIEFQSWludGVyZmFjZS5zZXRTdG9yYWdlKFwiY2hvb3Nlbl9kZWxpdmVyeVwiLCAkZGF0YSk7XG5cbiAgICAgICAgICB0aGlzLnNjaGVkU3RvcmUubmV3X3RyYW5zYWN0aW9uX3R5cGUgPVxuICAgICAgICAgICAgdGhpcy5zY2hlZFN0b3JlLnRyYW5zYWN0aW9uX3R5cGU7XG5cbiAgICAgICAgICB0aGlzLnNjaGVkU3RvcmUubmV3X3doZW50b19kZWxpdmVyID0gdGhpcy5zY2hlZFN0b3JlLndoZW50b19kZWxpdmVyO1xuXG4gICAgICAgICAgdGhpcy5pc19zYXZlZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5zaG93X21vZGFsID0gZmFsc2U7XG5cbiAgICAgICAgICB0aGlzLiRlbWl0KFwiYWZ0ZXJTYXZldHJhbnNcIiwgJGRhdGEpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgQVBJaW50ZXJmYWNlLm5vdGlmeShcIm5lZ2F0aXZlXCIsIGVycm9yLCBcIndhcm5pbmdcIiwgdGhpcy4kcSk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5zY2hlZFN0b3JlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfY3JlYXRlQmxvY2siLCJfY3JlYXRlVk5vZGUiLCJfb3BlbkJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUE4RUEsTUFBSyxZQUFVO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixPQUFPLENBQUMsTUFBTTtBQUFBLEVBQ2QsUUFBUTtBQUNOLFVBQU0sYUFBYTtBQUVuQixXQUFPLEVBQUU7RUFDVjtBQUFBLEVBQ0QsT0FBTztBQUNMLFdBQU87QUFBQSxNQUNMLFlBQVk7QUFBQSxNQUNaLFNBQVM7QUFBQSxNQUNULGtCQUFrQjtBQUFBLE1BQ2xCLGtCQUFrQixDQUFFO0FBQUEsTUFDcEIsZUFBZTtBQUFBLE1BQ2YsZUFBZTtBQUFBLE1BQ2Ysa0JBQWtCLENBQUU7QUFBQSxNQUNwQixvQkFBb0IsQ0FBRTtBQUFBLE1BQ3RCLG9CQUFvQixDQUFFO0FBQUEsTUFDdEIsZUFBZSxDQUFFO0FBQUEsTUFDakIsWUFBWSxDQUFFO0FBQUEsTUFDZCxVQUFVO0FBQUE7RUFFYjtBQUFBLEVBQ0QsU0FBUztBQUFBLElBQ1AsVUFBVSxNQUFNO0FBQ2QsV0FBSyxhQUFhO0FBQUEsSUFDbkI7QUFBQSxJQUNELGFBQWE7QUFDWCxXQUFLLFdBQVc7QUFDaEIsVUFBSSxLQUFLLFdBQVcsa0JBQWtCLFlBQVk7QUFDaEQsYUFBSyxXQUFXLGlCQUFpQixLQUFLLElBQUk7QUFBQSxNQUM1QztBQUFBLElBQ0Q7QUFBQSxJQUNELGFBQWE7QUFDWCxVQUFJLENBQUMsS0FBSyxVQUFVO0FBQ2xCLGFBQUssV0FBVztBQUFBLFVBQ2QsYUFBYSxXQUFXLFdBQVc7QUFBQSxVQUNuQyxLQUFLO0FBQUE7TUFFVDtBQUFBLElBQ0Q7QUFBQSxJQUNELFdBQVcsTUFBTTtBQUNmLFVBQUksU0FBUyxZQUFZO0FBQ3ZCLGFBQUssV0FBVyxpQkFBaUIsS0FBSyxJQUFJO0FBQUEsTUFDNUM7QUFBQSxJQUNEO0FBQUEsSUFDRCxXQUFXLE1BQU07QUFDZixXQUFLLFdBQVcscUJBQXFCO0FBQ3JDLFdBQUssV0FBVyxnQkFBZ0I7QUFDaEMsV0FBSyxXQUFXLFlBQVksSUFBSTtBQUFBLElBQ2pDO0FBQUEsSUFDRCxzQkFBc0I7QUFDcEIsV0FBSyxXQUFXLFVBQVU7QUFDMUIsWUFBTSxXQUFXLGFBQWEsV0FBVyxXQUFXO0FBQ3BELFlBQU0sVUFBVTtBQUFBLFFBQ2QsV0FBVztBQUFBLFFBQ1gsZUFBZSxLQUFLLFdBQVc7QUFBQSxRQUMvQixnQkFBZ0IsS0FBSyxXQUFXO0FBQUEsUUFDaEMsZUFBZSxLQUFLLFdBQVc7QUFBQSxRQUMvQixrQkFBa0IsS0FBSyxXQUFXO0FBQUE7QUFFcEMsbUJBQWEsb0JBQW9CLE9BQU8sRUFDckMsS0FBSyxDQUFDLFNBQVM7QUFDZCxZQUFJLGFBQWEsTUFBTSxRQUFRLEdBQUc7QUFDaEMsdUJBQWEsV0FBVyxhQUFhLEtBQUssUUFBUSxTQUFTO0FBQUEsUUFDN0Q7QUFFQSxjQUFNLFFBQVE7QUFBQSxVQUNaLGdCQUFnQixLQUFLLFdBQVc7QUFBQSxVQUNoQyxlQUFlLEtBQUssV0FBVztBQUFBLFVBQy9CLGVBQWUsS0FBSyxXQUFXO0FBQUE7QUFHakMscUJBQWEsV0FBVyxrQkFBa0IsQ0FBQztBQUMzQyxxQkFBYTtBQUFBLFVBQ1g7QUFBQSxVQUNBLEtBQUssV0FBVztBQUFBO0FBRWxCLHFCQUFhLFdBQVcsb0JBQW9CLEtBQUs7QUFFakQsYUFBSyxXQUFXLHVCQUNkLEtBQUssV0FBVztBQUVsQixhQUFLLFdBQVcscUJBQXFCLEtBQUssV0FBVztBQUVyRCxhQUFLLFdBQVc7QUFDaEIsYUFBSyxhQUFhO0FBRWxCLGFBQUssTUFBTSxrQkFBa0IsS0FBSztBQUFBLE9BQ25DLEVBQ0EsTUFBTSxDQUFDLFVBQVU7QUFDaEIscUJBQWEsT0FBTyxZQUFZLE9BQU8sV0FBVyxLQUFLLEVBQUU7QUFBQSxPQUMxRCxFQUNBLEtBQUssQ0FBQyxTQUFTO0FBQ2QsYUFBSyxXQUFXLFVBQVU7QUFBQSxNQUM1QixDQUFDO0FBQUEsSUFDSjtBQUFBLEVBQ0Y7QUFDSDs7O0VBeEphLE9BQU07OztzQkF4QmpCQSxZQWtFVyxTQUFBO0FBQUEsZ0JBakVBLE1BQVU7QUFBQSxpRUFBVixNQUFVLGFBQUE7QUFBQSxJQUNuQixVQUFTO0FBQUEsSUFDUixjQUFhLFNBQVU7QUFBQSxJQUN2QixjQUFhLFNBQVU7QUFBQTtxQkFFeEIsTUEyRFM7QUFBQSxNQTNEVEMsWUEyRFMsT0FBQSxNQUFBO0FBQUEseUJBMURQLE1BMENpQjtBQUFBLFVBMUNqQkEsWUEwQ2lCLGNBQUEsTUFBQTtBQUFBLDZCQXpDZixNQU9FO0FBQUEsY0FQRkEsWUFPRSxZQUFBO0FBQUEsZ0JBTlMsWUFBQSxPQUFBLFdBQVc7QUFBQSxnQkFBWCx1QkFBQSxPQUFBLE9BQUEsT0FBQSxLQUFBLFlBQUEsT0FBQSxXQUFXLG1CQUFnQjtBQUFBLGdCQUNwQyxnQkFBYTtBQUFBLGdCQUNiLFdBQUE7QUFBQSxnQkFDQSxZQUFBO0FBQUEsZ0JBQ0EsT0FBTTtBQUFBLGdCQUNMLFNBQVMsT0FBVSxXQUFDO0FBQUE7Y0FHdkJBLFlBS0UsY0FBQTtBQUFBLGdCQUpTLFlBQUEsT0FBQSxXQUFXO0FBQUE7a0JBQVgsT0FBQSxPQUFBLE9BQUEsS0FBQSxZQUFBLE9BQUEsV0FBVyxpQkFBYztBQUFBLGtCQUdiLFNBQVU7QUFBQTtnQkFGOUIsU0FBUyxPQUFVLFdBQUM7QUFBQSxnQkFDckIsT0FBTTtBQUFBO2NBSW1CLE9BQUEsV0FBVyxtQkFBYyxjQUFwREMsYUFBQUMsbUJBd0JNLE9BeEJOLFlBd0JNO0FBQUEsZ0JBdkJKRixZQVlFLFNBQUE7QUFBQSxrQkFYQSxVQUFBO0FBQUEsa0JBQ0EsT0FBQTtBQUFBLGtCQUNTLFlBQUEsT0FBQSxXQUFXO0FBQUE7b0JBQVgsT0FBQSxPQUFBLE9BQUEsS0FBQSxZQUFBLE9BQUEsV0FBVyxnQkFBYTtBQUFBLG9CQVFaLFNBQVU7QUFBQTtrQkFQL0IsT0FBTTtBQUFBLGtCQUNOLE9BQU07QUFBQSxrQkFDTixtQkFBZ0I7QUFBQSxrQkFDaEIsbUJBQWdCO0FBQUEsa0JBQ2YsU0FBUyxPQUFVLFdBQUM7QUFBQSxrQkFDckIsY0FBQTtBQUFBLGtCQUNBLGVBQUE7QUFBQTtnQkFHRkEsWUFTRSxTQUFBO0FBQUEsa0JBUkEsVUFBQTtBQUFBLGtCQUNBLE9BQUE7QUFBQSxrQkFDUyxZQUFBLE9BQUEsV0FBVztBQUFBLGtCQUFYLHVCQUFBLE9BQUEsT0FBQSxPQUFBLEtBQUEsWUFBQSxPQUFBLFdBQVcsZ0JBQWE7QUFBQSxrQkFDakMsT0FBTTtBQUFBLGtCQUNOLE9BQU07QUFBQSxrQkFDTixtQkFBZ0I7QUFBQSxrQkFDaEIsbUJBQWdCO0FBQUEsa0JBQ2YsU0FBUyxPQUFVLFdBQUM7QUFBQTs7Ozs7VUFLM0JBLFlBYWlCLGNBQUEsRUFBQSxPQUFBLEdBQUEsR0FiRDtBQUFBLDZCQUNkLE1BV1E7QUFBQSxjQVhSQSxZQVdRLE1BQUE7QUFBQSxnQkFWTixZQUFBO0FBQUEsZ0JBQ0EsT0FBTTtBQUFBLGdCQUNOLGNBQVc7QUFBQSxnQkFDWCxXQUFBO0FBQUEsZ0JBQ0EsT0FBTTtBQUFBLGdCQUNMLE9BQU8sS0FBRSxHQUFBLFNBQUE7QUFBQSxnQkFDVixNQUFLO0FBQUEsZ0JBQ0osU0FBTyxTQUFtQjtBQUFBLGdCQUMxQixTQUFTLE9BQVUsV0FBQztBQUFBOzs7Ozs7Ozs7Ozs7OyJ9
