import { _ as _export_sfc, S as useDataStorePersisted, m as APIinterface, p as openBlock, V as createElementBlock, f as createVNode, t as withCtx, ac as QItem, ad as QItemSection, at as QIcon, a6 as createTextVNode, Z as toDisplayString, q as createBlock, U as createBaseVNode, aA as createCommentVNode, bD as QCheckbox } from "./index.61ed5618.js";
import { Q as QItemLabel } from "./QItemLabel.a9365c5b.js";
import { Q as QList } from "./QList.b69a7e5b.js";
import { Q as QInnerLoading } from "./QInnerLoading.abe2afe6.js";
import { u as useCartStore } from "./CartStore.484ff101.js";
const _sfc_main = {
  name: "WalletComponents",
  props: ["cart_updated"],
  data() {
    return {
      use_wallet: false,
      data: [],
      loading: false,
      message: ""
    };
  },
  setup() {
    const DataStorePersisted = useDataStorePersisted();
    const CartStore = useCartStore();
    return { DataStorePersisted, CartStore };
  },
  mounted() {
    this.getCartWallet();
  },
  computed: {
    canUseWallet() {
      if (Object.keys(this.data).length > 0) {
        if (this.data.balance_raw > 0) {
          return true;
        }
      }
      return false;
    },
    getData() {
      return this.data;
    }
  },
  watch: {
    cart_updated(newval, oldval) {
      if (newval == false && this.use_wallet) {
        this.applyDigitalWallet(true);
      }
    }
  },
  methods: {
    getCartWallet() {
      this.loading = true;
      APIinterface.fetchDataByTokenPost(
        "getCartWallet",
        "cart_uuid=" + APIinterface.getStorage("cart_uuid") + "&currency_code=" + this.DataStorePersisted.getUseCurrency()
      ).then((data) => {
        this.data = data.details;
        this.use_wallet = data.details.use_wallet;
        if (this.use_wallet) {
          this.applyDigitalWallet(this.use_wallet);
        }
      }).catch((error) => {
        this.data = [];
        this.use_wallet = false;
      }).then((data) => {
        this.loading = false;
      });
    },
    applyDigitalWallet(data) {
      this.loading = true;
      let use_wallet = data ? 1 : 0;
      APIinterface.fetchDataByTokenPost(
        "applyDigitalWallet",
        "cart_uuid=" + APIinterface.getStorage("cart_uuid") + "&currency_code=" + this.DataStorePersisted.getUseCurrency() + "&use_wallet=" + use_wallet + "&amount_to_pay=" + this.CartStore.cart_total.raw
      ).then((data2) => {
        if (use_wallet) {
          this.message = data2.msg;
        } else {
          this.message = "";
        }
        this.$emit("afterApplywallet", data2.details);
      }).catch((error) => {
        this.use_wallet = false;
        this.message = "";
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data2) => {
        this.loading = false;
      });
    }
  }
};
const _hoisted_1 = { class: "relative-position" };
const _hoisted_2 = { class: "q-pa-sm bg-grey-2 radius10 text-dark" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(QList, null, {
      default: withCtx(() => [
        createVNode(QItem, { tag: "label" }, {
          default: withCtx(() => [
            createVNode(QItemSection, {
              avatar: "",
              top: ""
            }, {
              default: withCtx(() => [
                createVNode(QIcon, {
                  color: "secondary",
                  name: "o_account_balance_wallet"
                })
              ]),
              _: 1
            }),
            createVNode(QItemSection, null, {
              default: withCtx(() => [
                createVNode(QItemLabel, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString($options.getData.balance), 1)
                  ]),
                  _: 1
                }),
                createVNode(QItemLabel, {
                  lines: "2",
                  caption: "",
                  class: "font11"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("Digital Wallet Balance")), 1)
                  ]),
                  _: 1
                }),
                $data.message ? (openBlock(), createBlock(QItemLabel, {
                  key: 0,
                  caption: ""
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_2, toDisplayString($data.message), 1)
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ]),
              _: 1
            }),
            createVNode(QItemSection, { side: "" }, {
              default: withCtx(() => [
                createVNode(QCheckbox, {
                  modelValue: $data.use_wallet,
                  "onUpdate:modelValue": [
                    _cache[0] || (_cache[0] = ($event) => $data.use_wallet = $event),
                    $options.applyDigitalWallet
                  ],
                  val: "1",
                  disable: !$options.canUseWallet
                }, null, 8, ["modelValue", "disable", "onUpdate:modelValue"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    createVNode(QInnerLoading, {
      showing: $data.loading,
      color: "primary",
      size: "md"
    }, null, 8, ["showing"])
  ]);
}
var WalletComponents = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "WalletComponents.vue"]]);
export { WalletComponents as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2FsbGV0Q29tcG9uZW50cy4yYTYyZGI1Mi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvV2FsbGV0Q29tcG9uZW50cy52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwicmVsYXRpdmUtcG9zaXRpb25cIj5cbiAgICA8cS1saXN0PlxuICAgICAgPHEtaXRlbSB0YWc9XCJsYWJlbFwiPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyIHRvcD5cbiAgICAgICAgICA8cS1pY29uIGNvbG9yPVwic2Vjb25kYXJ5XCIgbmFtZT1cIm9fYWNjb3VudF9iYWxhbmNlX3dhbGxldFwiIC8+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1pdGVtLWxhYmVsPiB7eyBnZXREYXRhLmJhbGFuY2UgfX0gPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgPHEtaXRlbS1sYWJlbCBsaW5lcz1cIjJcIiBjYXB0aW9uIGNsYXNzPVwiZm9udDExXCI+XG4gICAgICAgICAgICB7eyAkdChcIkRpZ2l0YWwgV2FsbGV0IEJhbGFuY2VcIikgfX1cbiAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24gdi1pZj1cIm1lc3NhZ2VcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJxLXBhLXNtIGJnLWdyZXktMiByYWRpdXMxMCB0ZXh0LWRhcmtcIj5cbiAgICAgICAgICAgICAge3sgbWVzc2FnZSB9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlPlxuICAgICAgICAgIDxxLWNoZWNrYm94XG4gICAgICAgICAgICB2LW1vZGVsPVwidXNlX3dhbGxldFwiXG4gICAgICAgICAgICB2YWw9XCIxXCJcbiAgICAgICAgICAgIDpkaXNhYmxlPVwiIWNhblVzZVdhbGxldFwiXG4gICAgICAgICAgICBAdXBkYXRlOm1vZGVsLXZhbHVlPVwiYXBwbHlEaWdpdGFsV2FsbGV0XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgPC9xLWl0ZW0+XG4gICAgPC9xLWxpc3Q+XG4gICAgPHEtaW5uZXItbG9hZGluZyA6c2hvd2luZz1cImxvYWRpbmdcIiBjb2xvcj1cInByaW1hcnlcIiBzaXplPVwibWRcIiAvPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgQVBJaW50ZXJmYWNlIGZyb20gXCJzcmMvYXBpL0FQSWludGVyZmFjZVwiO1xuaW1wb3J0IHsgdXNlRGF0YVN0b3JlUGVyc2lzdGVkIH0gZnJvbSBcInN0b3Jlcy9EYXRhU3RvcmVQZXJzaXN0ZWRcIjtcbmltcG9ydCB7IHVzZUNhcnRTdG9yZSB9IGZyb20gXCJzdG9yZXMvQ2FydFN0b3JlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJXYWxsZXRDb21wb25lbnRzXCIsXG4gIHByb3BzOiBbXCJjYXJ0X3VwZGF0ZWRcIl0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZV93YWxsZXQ6IGZhbHNlLFxuICAgICAgZGF0YTogW10sXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IFwiXCIsXG4gICAgfTtcbiAgfSxcbiAgc2V0dXAoKSB7XG4gICAgY29uc3QgRGF0YVN0b3JlUGVyc2lzdGVkID0gdXNlRGF0YVN0b3JlUGVyc2lzdGVkKCk7XG4gICAgY29uc3QgQ2FydFN0b3JlID0gdXNlQ2FydFN0b3JlKCk7XG4gICAgcmV0dXJuIHsgRGF0YVN0b3JlUGVyc2lzdGVkLCBDYXJ0U3RvcmUgfTtcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmdldENhcnRXYWxsZXQoKTtcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBjYW5Vc2VXYWxsZXQoKSB7XG4gICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5kYXRhKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmICh0aGlzLmRhdGEuYmFsYW5jZV9yYXcgPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIGdldERhdGEoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgIH0sXG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgY2FydF91cGRhdGVkKG5ld3ZhbCwgb2xkdmFsKSB7XG4gICAgICBpZiAobmV3dmFsID09IGZhbHNlICYmIHRoaXMudXNlX3dhbGxldCkge1xuICAgICAgICB0aGlzLmFwcGx5RGlnaXRhbFdhbGxldCh0cnVlKTtcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZ2V0Q2FydFdhbGxldCgpIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICBBUElpbnRlcmZhY2UuZmV0Y2hEYXRhQnlUb2tlblBvc3QoXG4gICAgICAgIFwiZ2V0Q2FydFdhbGxldFwiLFxuICAgICAgICBcImNhcnRfdXVpZD1cIiArXG4gICAgICAgICAgQVBJaW50ZXJmYWNlLmdldFN0b3JhZ2UoXCJjYXJ0X3V1aWRcIikgK1xuICAgICAgICAgIFwiJmN1cnJlbmN5X2NvZGU9XCIgK1xuICAgICAgICAgIHRoaXMuRGF0YVN0b3JlUGVyc2lzdGVkLmdldFVzZUN1cnJlbmN5KClcbiAgICAgIClcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmRhdGEgPSBkYXRhLmRldGFpbHM7XG4gICAgICAgICAgdGhpcy51c2Vfd2FsbGV0ID0gZGF0YS5kZXRhaWxzLnVzZV93YWxsZXQ7XG4gICAgICAgICAgaWYgKHRoaXMudXNlX3dhbGxldCkge1xuICAgICAgICAgICAgdGhpcy5hcHBseURpZ2l0YWxXYWxsZXQodGhpcy51c2Vfd2FsbGV0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICAgICAgICB0aGlzLnVzZV93YWxsZXQgPSBmYWxzZTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBhcHBseURpZ2l0YWxXYWxsZXQoZGF0YSkge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIGxldCB1c2Vfd2FsbGV0ID0gZGF0YSA/IDEgOiAwO1xuICAgICAgQVBJaW50ZXJmYWNlLmZldGNoRGF0YUJ5VG9rZW5Qb3N0KFxuICAgICAgICBcImFwcGx5RGlnaXRhbFdhbGxldFwiLFxuICAgICAgICBcImNhcnRfdXVpZD1cIiArXG4gICAgICAgICAgQVBJaW50ZXJmYWNlLmdldFN0b3JhZ2UoXCJjYXJ0X3V1aWRcIikgK1xuICAgICAgICAgIFwiJmN1cnJlbmN5X2NvZGU9XCIgK1xuICAgICAgICAgIHRoaXMuRGF0YVN0b3JlUGVyc2lzdGVkLmdldFVzZUN1cnJlbmN5KCkgK1xuICAgICAgICAgIFwiJnVzZV93YWxsZXQ9XCIgK1xuICAgICAgICAgIHVzZV93YWxsZXQgK1xuICAgICAgICAgIFwiJmFtb3VudF90b19wYXk9XCIgK1xuICAgICAgICAgIHRoaXMuQ2FydFN0b3JlLmNhcnRfdG90YWwucmF3XG4gICAgICApXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKHVzZV93YWxsZXQpIHtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IGRhdGEubXNnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBcIlwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLiRlbWl0KFwiYWZ0ZXJBcHBseXdhbGxldFwiLCBkYXRhLmRldGFpbHMpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy51c2Vfd2FsbGV0ID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5tZXNzYWdlID0gXCJcIjtcbiAgICAgICAgICBBUElpbnRlcmZhY2Uubm90aWZ5KFwiZGFya1wiLCBlcnJvciwgXCJlcnJvclwiLCB0aGlzLiRxKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJkYXRhIiwiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfY3JlYXRlVk5vZGUiLCJfY3JlYXRlVGV4dFZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyIsIl9jcmVhdGVCbG9jayIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7O0FBcUNBLE1BQUssWUFBVTtBQUFBLEVBQ2IsTUFBTTtBQUFBLEVBQ04sT0FBTyxDQUFDLGNBQWM7QUFBQSxFQUN0QixPQUFPO0FBQ0wsV0FBTztBQUFBLE1BQ0wsWUFBWTtBQUFBLE1BQ1osTUFBTSxDQUFFO0FBQUEsTUFDUixTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUE7RUFFWjtBQUFBLEVBQ0QsUUFBUTtBQUNOLFVBQU0scUJBQXFCO0FBQzNCLFVBQU0sWUFBWTtBQUNsQixXQUFPLEVBQUUsb0JBQW9CO0VBQzlCO0FBQUEsRUFDRCxVQUFVO0FBQ1IsU0FBSyxjQUFhO0FBQUEsRUFDbkI7QUFBQSxFQUNELFVBQVU7QUFBQSxJQUNSLGVBQWU7QUFDYixVQUFJLE9BQU8sS0FBSyxLQUFLLElBQUksRUFBRSxTQUFTLEdBQUc7QUFDckMsWUFBSSxLQUFLLEtBQUssY0FBYyxHQUFHO0FBQzdCLGlCQUFPO0FBQUEsUUFDVDtBQUFBLE1BQ0Y7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
