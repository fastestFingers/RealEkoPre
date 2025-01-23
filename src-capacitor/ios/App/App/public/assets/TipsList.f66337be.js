import { Q as QBtnToggle } from "./QBtnToggle.6ffa195b.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QSpace } from "./QSpace.f164c087.js";
import { _ as _export_sfc, S as useDataStorePersisted, m as APIinterface, p as openBlock, V as createElementBlock, f as createVNode, t as withCtx, a8 as QCard, a7 as normalizeClass, a6 as createTextVNode, Z as toDisplayString, Y as QBtn, a9 as QCardSection, aY as QInput, aB as QDialog, F as Fragment } from "./index.61ed5618.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QForm } from "./QForm.7ded9d38.js";
import "./QBtnGroup.abc2d1c7.js";
const _sfc_main = {
  props: ["tips_data", "tips_value"],
  name: "TipsList",
  data() {
    return {
      tips: 0,
      show_modal: false,
      loading: false,
      manual_tip: 0
    };
  },
  setup() {
    const DataStorePersisted = useDataStorePersisted();
    return { DataStorePersisted };
  },
  created() {
    console.log(this.tips_value);
    if (this.tips_value) {
      this.tips = this.tips_value.tips;
      if (this.tips == false) {
        this.tips = 0;
      }
    }
  },
  watch: {
    tips_value(newval, oldval) {
      this.tips = this.tips_value.tips;
      if (this.tips == false) {
        this.tips = 0;
      }
    }
  },
  methods: {
    onApplyTips() {
      this.tips = this.manual_tip;
      this.checkoutAddTips();
    },
    updateTips() {
      this.manual_tip = 0;
      if (this.tips === "fixed") {
        this.show_modal = true;
      } else {
        this.show_modal = false;
        this.checkoutAddTips();
      }
    },
    checkoutAddTips() {
      this.loading = true;
      APIinterface.checkoutAddTips({
        cart_uuid: APIinterface.getStorage("cart_uuid"),
        value: this.tips,
        currency_code: this.DataStorePersisted.getUseCurrency(),
        manual_tip: this.manual_tip
      }).then((data) => {
        this.show_modal = false;
        this.$emit("afterApplytips");
      }).catch((error) => {
        APIinterface.notify("grey-8", error, "error", this.$q);
      }).then((data) => {
        this.loading = false;
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(QBtnToggle, {
      modelValue: $data.tips,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.tips = $event),
      "toggle-color": "secondary",
      color: _ctx.$q.dark.mode ? "grey600" : "mygrey",
      "text-color": _ctx.$q.dark.mode ? "grey300" : "dark",
      "no-caps": "",
      "no-wrap": "",
      unelevated: "",
      options: $props.tips_data,
      class: "rounded-group2 small text-weight-bold line-1 q-pa-none",
      onClick: $options.updateTips,
      disable: $data.loading
    }, null, 8, ["modelValue", "color", "text-color", "options", "onClick", "disable"]),
    createVNode(QDialog, {
      modelValue: $data.show_modal,
      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.show_modal = $event),
      position: "bottom"
    }, {
      default: withCtx(() => [
        createVNode(QCard, null, {
          default: withCtx(() => [
            createVNode(QToolbar, {
              class: "text-primary top-toolbar q-pl-md",
              dense: ""
            }, {
              default: withCtx(() => [
                createVNode(QToolbarTitle, {
                  class: normalizeClass(["text-weight-bold", {
                    "text-white": _ctx.$q.dark.mode,
                    "text-dark": !_ctx.$q.dark.mode
                  }])
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("Add Tips")), 1)
                  ]),
                  _: 1
                }, 8, ["class"]),
                createVNode(QSpace),
                createVNode(QBtn, {
                  onClick: _cache[1] || (_cache[1] = ($event) => $data.show_modal = false),
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
            createVNode(QForm, { onSubmit: $options.onApplyTips }, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    createVNode(QInput, {
                      modelValue: $data.manual_tip,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.manual_tip = $event),
                      label: _ctx.$t("Enter amount"),
                      outlined: "",
                      "lazy-rules": "",
                      "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
                      "label-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                      borderless: "",
                      class: "input-borderless",
                      type: "number",
                      rules: [
                        (val) => val && val.length > 0 || this.$t("Please enter valid amount")
                      ]
                    }, null, 8, ["modelValue", "label", "bg-color", "label-color", "rules"]),
                    createVNode(QBtn, {
                      type: "submit",
                      label: _ctx.$t("Save"),
                      loading: $data.loading,
                      unelevated: "",
                      color: "primary",
                      "text-color": "white",
                      "no-caps": "",
                      class: "full-width",
                      size: "lg"
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
    }, 8, ["modelValue"])
  ], 64);
}
var TipsList = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "TipsList.vue"]]);
export { TipsList as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGlwc0xpc3QuZjY2MzM3YmUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RpcHNMaXN0LnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLWJ0bi10b2dnbGVcbiAgICB2LW1vZGVsPVwidGlwc1wiXG4gICAgdG9nZ2xlLWNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICA6Y29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTYwMCcgOiAnbXlncmV5J1wiXG4gICAgOnRleHQtY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTMwMCcgOiAnZGFyaydcIlxuICAgIG5vLWNhcHNcbiAgICBuby13cmFwXG4gICAgdW5lbGV2YXRlZFxuICAgIDpvcHRpb25zPVwidGlwc19kYXRhXCJcbiAgICBjbGFzcz1cInJvdW5kZWQtZ3JvdXAyIHNtYWxsIHRleHQtd2VpZ2h0LWJvbGQgbGluZS0xIHEtcGEtbm9uZVwiXG4gICAgQGNsaWNrPVwidXBkYXRlVGlwc1wiXG4gICAgOmRpc2FibGU9XCJsb2FkaW5nXCJcbiAgLz5cblxuICA8cS1kaWFsb2cgdi1tb2RlbD1cInNob3dfbW9kYWxcIiBwb3NpdGlvbj1cImJvdHRvbVwiPlxuICAgIDxxLWNhcmQ+XG4gICAgICA8cS10b29sYmFyIGNsYXNzPVwidGV4dC1wcmltYXJ5IHRvcC10b29sYmFyIHEtcGwtbWRcIiBkZW5zZT5cbiAgICAgICAgPHEtdG9vbGJhci10aXRsZVxuICAgICAgICAgIGNsYXNzPVwidGV4dC13ZWlnaHQtYm9sZFwiXG4gICAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICAgJ3RleHQtd2hpdGUnOiAkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgICAndGV4dC1kYXJrJzogISRxLmRhcmsubW9kZSxcbiAgICAgICAgICB9XCJcbiAgICAgICAgPlxuICAgICAgICAgIHt7ICR0KFwiQWRkIFRpcHNcIikgfX1cbiAgICAgICAgPC9xLXRvb2xiYXItdGl0bGU+XG4gICAgICAgIDxxLXNwYWNlPjwvcS1zcGFjZT5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgQGNsaWNrPVwic2hvd19tb2RhbCA9ICF0cnVlXCJcbiAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICBzcXVhcmVcbiAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgdGV4dC1jb2xvcj1cImdyZXlcIlxuICAgICAgICAgIGljb249XCJsYXMgbGEtdGltZXNcIlxuICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgY2xhc3M9XCJib3JkZXItZ3JleSByYWRpdXM4XCJcbiAgICAgICAgLz5cbiAgICAgIDwvcS10b29sYmFyPlxuICAgICAgPHEtZm9ybSBAc3VibWl0PVwib25BcHBseVRpcHNcIj5cbiAgICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgICB2LW1vZGVsPVwibWFudWFsX3RpcFwiXG4gICAgICAgICAgICA6bGFiZWw9XCIkdCgnRW50ZXIgYW1vdW50JylcIlxuICAgICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICAgIGxhenktcnVsZXNcbiAgICAgICAgICAgIDpiZy1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5NjAwJyA6ICdpbnB1dCdcIlxuICAgICAgICAgICAgOmxhYmVsLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXkzMDAnIDogJ2dyZXknXCJcbiAgICAgICAgICAgIGJvcmRlcmxlc3NcbiAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtYm9yZGVybGVzc1wiXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIDpydWxlcz1cIltcbiAgICAgICAgICAgICAgKHZhbCkgPT5cbiAgICAgICAgICAgICAgICAodmFsICYmIHZhbC5sZW5ndGggPiAwKSB8fCB0aGlzLiR0KCdQbGVhc2UgZW50ZXIgdmFsaWQgYW1vdW50JyksXG4gICAgICAgICAgICBdXCJcbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdTYXZlJylcIlxuICAgICAgICAgICAgOmxvYWRpbmc9XCJsb2FkaW5nXCJcbiAgICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICB0ZXh0LWNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgICAgY2xhc3M9XCJmdWxsLXdpZHRoXCJcbiAgICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgIDwvcS1mb3JtPlxuICAgIDwvcS1jYXJkPlxuICA8L3EtZGlhbG9nPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBBUElpbnRlcmZhY2UgZnJvbSBcInNyYy9hcGkvQVBJaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyB1c2VEYXRhU3RvcmVQZXJzaXN0ZWQgfSBmcm9tIFwic3RvcmVzL0RhdGFTdG9yZVBlcnNpc3RlZFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiBbXCJ0aXBzX2RhdGFcIiwgXCJ0aXBzX3ZhbHVlXCJdLFxuICBuYW1lOiBcIlRpcHNMaXN0XCIsXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpcHM6IDAsXG4gICAgICBzaG93X21vZGFsOiBmYWxzZSxcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgbWFudWFsX3RpcDogMCxcbiAgICB9O1xuICB9LFxuICBzZXR1cCgpIHtcbiAgICBjb25zdCBEYXRhU3RvcmVQZXJzaXN0ZWQgPSB1c2VEYXRhU3RvcmVQZXJzaXN0ZWQoKTtcbiAgICByZXR1cm4geyBEYXRhU3RvcmVQZXJzaXN0ZWQgfTtcbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnRpcHNfdmFsdWUpO1xuICAgIGlmICh0aGlzLnRpcHNfdmFsdWUpIHtcbiAgICAgIHRoaXMudGlwcyA9IHRoaXMudGlwc192YWx1ZS50aXBzO1xuICAgICAgaWYgKHRoaXMudGlwcyA9PSBmYWxzZSkge1xuICAgICAgICB0aGlzLnRpcHMgPSAwO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICB0aXBzX3ZhbHVlKG5ld3ZhbCwgb2xkdmFsKSB7XG4gICAgICB0aGlzLnRpcHMgPSB0aGlzLnRpcHNfdmFsdWUudGlwcztcbiAgICAgIGlmICh0aGlzLnRpcHMgPT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy50aXBzID0gMDtcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25BcHBseVRpcHMoKSB7XG4gICAgICB0aGlzLnRpcHMgPSB0aGlzLm1hbnVhbF90aXA7XG4gICAgICB0aGlzLmNoZWNrb3V0QWRkVGlwcygpO1xuICAgIH0sXG4gICAgdXBkYXRlVGlwcygpIHtcbiAgICAgIHRoaXMubWFudWFsX3RpcCA9IDA7XG4gICAgICBpZiAodGhpcy50aXBzID09PSBcImZpeGVkXCIpIHtcbiAgICAgICAgdGhpcy5zaG93X21vZGFsID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2hvd19tb2RhbCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNoZWNrb3V0QWRkVGlwcygpO1xuICAgICAgfVxuICAgIH0sXG4gICAgY2hlY2tvdXRBZGRUaXBzKCkge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIEFQSWludGVyZmFjZS5jaGVja291dEFkZFRpcHMoe1xuICAgICAgICBjYXJ0X3V1aWQ6IEFQSWludGVyZmFjZS5nZXRTdG9yYWdlKFwiY2FydF91dWlkXCIpLFxuICAgICAgICB2YWx1ZTogdGhpcy50aXBzLFxuICAgICAgICBjdXJyZW5jeV9jb2RlOiB0aGlzLkRhdGFTdG9yZVBlcnNpc3RlZC5nZXRVc2VDdXJyZW5jeSgpLFxuICAgICAgICBtYW51YWxfdGlwOiB0aGlzLm1hbnVhbF90aXAsXG4gICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuc2hvd19tb2RhbCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuJGVtaXQoXCJhZnRlckFwcGx5dGlwc1wiKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJncmV5LThcIiwgZXJyb3IsIFwiZXJyb3JcIiwgdGhpcy4kcSk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX2NyZWF0ZVZOb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBZ0ZBLE1BQUssWUFBVTtBQUFBLEVBQ2IsT0FBTyxDQUFDLGFBQWEsWUFBWTtBQUFBLEVBQ2pDLE1BQU07QUFBQSxFQUNOLE9BQU87QUFDTCxXQUFPO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixZQUFZO0FBQUEsTUFDWixTQUFTO0FBQUEsTUFDVCxZQUFZO0FBQUE7RUFFZjtBQUFBLEVBQ0QsUUFBUTtBQUNOLFVBQU0scUJBQXFCO0FBQzNCLFdBQU8sRUFBRSxtQkFBaUI7QUFBQSxFQUMzQjtBQUFBLEVBQ0QsVUFBVTtBQUNSLFlBQVEsSUFBSSxLQUFLLFVBQVU7QUFDM0IsUUFBSSxLQUFLLFlBQVk7QUFDbkIsV0FBSyxPQUFPLEtBQUssV0FBVztBQUM1QixVQUFJLEtBQUssUUFBUSxPQUFPO0FBQ3RCLGFBQUssT0FBTztBQUFBLE1BQ2Q7QUFBQSxJQUNGO0FBQUEsRUFDRDtBQUFBLEVBQ0QsT0FBTztBQUFBLElBQ0wsV0FBVyxRQUFRLFFBQVE7QUFDekIsV0FBSyxPQUFPLEtBQUssV0FBVztB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
