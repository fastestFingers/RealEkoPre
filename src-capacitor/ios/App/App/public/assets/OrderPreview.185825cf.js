import { _ as _export_sfc, l as defineAsyncComponent, u as __vitePreload, R as useDataStore, n as resolveComponent, p as openBlock, q as createBlock, t as withCtx, f as createVNode, a6 as createTextVNode, Z as toDisplayString, U as createBaseVNode, Y as QBtn, a7 as normalizeClass, V as createElementBlock, X as renderList, ac as QItem, ad as QItemSection, F as Fragment, a8 as QCard, aB as QDialog } from "./index.61ed5618.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QSpace } from "./QSpace.f164c087.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QImg } from "./QImg.6c27044c.js";
import { Q as QItemLabel } from "./QItemLabel.a9365c5b.js";
import { Q as QList } from "./QList.b69a7e5b.js";
const _sfc_main = {
  name: "OrderPreview",
  props: ["data", "items_details"],
  components: {
    NumberFormat: defineAsyncComponent(
      () => __vitePreload(() => import("./NumberFormat.12e2c187.js"), true ? ["assets/NumberFormat.12e2c187.js","assets/index.61ed5618.js","assets/index.dbee30c0.css"] : void 0)
    )
  },
  setup() {
    const DataStore = useDataStore();
    return { DataStore };
  },
  data() {
    return {
      dialog: false
    };
  }
};
const _hoisted_1 = { class: "text-primary" };
const _hoisted_2 = { class: "q-pl-md q-pr-md q-mb-sm" };
const _hoisted_3 = { class: "text-right" };
const _hoisted_4 = ["innerHTML"];
const _hoisted_5 = { class: "text-grey font11 line-normal" };
const _hoisted_6 = { class: "text-strike" };
const _hoisted_7 = { class: "font14 text-weight-bold" };
const _hoisted_8 = { class: "row items-center justify-between q-pl-xl q-pt-sm border-grey-top text-weight-bold" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NumberFormat = resolveComponent("NumberFormat");
  return openBlock(), createBlock(QDialog, {
    modelValue: $data.dialog,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.dialog = $event),
    position: "bottom"
  }, {
    default: withCtx(() => [
      createVNode(QCard, { class: "rounded-borders-top" }, {
        default: withCtx(() => [
          createVNode(QToolbar, {
            class: "text-primary top-toolbar q-pl-md",
            dense: ""
          }, {
            default: withCtx(() => [
              createVNode(QToolbarTitle, { class: "text-dark text-weight-bold" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("Order")) + " ", 1),
                  createBaseVNode("span", _hoisted_1, "#" + toDisplayString($props.data.order_id_raw), 1)
                ]),
                _: 1
              }),
              createVNode(QSpace),
              createVNode(QBtn, {
                onClick: _cache[0] || (_cache[0] = ($event) => $data.dialog = false),
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
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("div", _hoisted_3, [
              createVNode(QBtn, {
                flat: "",
                color: _ctx.$q.dark.mode ? "secondary" : "blue",
                "no-caps": "",
                label: _ctx.$t("View full order details"),
                dense: "",
                size: "sm",
                to: {
                  path: "/account/order-details",
                  query: { order_uuid: $props.data.order_uuid }
                }
              }, null, 8, ["color", "label", "to"])
            ]),
            createVNode(QList, {
              class: normalizeClass(["radius8", {
                "bg-grey600 text-grey300": _ctx.$q.dark.mode,
                "bg-lightprimary text-black": !_ctx.$q.dark.mode
              }])
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList($props.data.items, (items) => {
                  return openBlock(), createBlock(QItem, { key: items }, {
                    default: withCtx(() => [
                      createVNode(QItemSection, { avatar: "" }, {
                        default: withCtx(() => [
                          createVNode(QImg, {
                            src: $props.items_details[items.item_id].photo,
                            lazy: "",
                            fit: "cover",
                            style: { "height": "70px", "width": "70px" },
                            class: "radius8",
                            "spinner-color": "secondary",
                            "spinner-size": "sm",
                            "placeholder-src": "placeholder.png"
                          }, null, 8, ["src"])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(QItemSection, null, {
                        default: withCtx(() => [
                          createVNode(QItemLabel, null, {
                            default: withCtx(() => [
                              createBaseVNode("div", {
                                class: "font13 text-weight-bold no-margin line-normal",
                                innerHTML: $props.items_details[items.item_id].item_name
                              }, null, 8, _hoisted_4),
                              createBaseVNode("div", _hoisted_5, [
                                createTextVNode(toDisplayString(items.qty) + " x ", 1),
                                items.discount > 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                                  createBaseVNode("span", _hoisted_6, toDisplayString(items.price), 1),
                                  createVNode(_component_NumberFormat, {
                                    amount: items.price - items.discount,
                                    money_config: $props.data.price_format
                                  }, null, 8, ["amount", "money_config"])
                                ], 64)) : (openBlock(), createBlock(_component_NumberFormat, {
                                  key: 1,
                                  amount: items.price,
                                  money_config: $props.data.price_format
                                }, null, 8, ["amount", "money_config"]))
                              ]),
                              createBaseVNode("div", _hoisted_7, [
                                createVNode(_component_NumberFormat, {
                                  amount: items.qty * items.price,
                                  money_config: $props.data.price_format
                                }, null, 8, ["amount", "money_config"])
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ]),
              _: 1
            }, 8, ["class"]),
            createVNode(QSpace, { class: "q-pa-sm" }),
            createBaseVNode("div", _hoisted_8, [
              createBaseVNode("div", null, toDisplayString(_ctx.$t("Total")), 1),
              createBaseVNode("div", null, toDisplayString($props.data.total), 1)
            ])
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["modelValue"]);
}
var OrderPreview = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "OrderPreview.vue"]]);
export { OrderPreview as default };
//# sourceMappingURL=data:application/json;base64,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TSxLQUFLO0FBQUEsa0NBQ3hDRixZQUdnQjtBQUFBLG9DQUZiLFFBQVEsTUFBTSxRQUFRLE1BQU07QUFBQSxvQ0FDNUIsY0FBYyxPQUFJLEtBQUM7QUFBQTt3REFJdEJELFlBR2dCO0FBQUE7a0NBRmIsUUFBUSxNQUFNO0FBQUEsa0NBQ2QsY0FBYyxPQUFJLEtBQUM7QUFBQTs7OEJBSTFCSSxnQkFLTSxPQUxOLFlBS007QUFBQSxnQ0FKSkgsWUFHZ0I7QUFBQSxrQ0FGYixRQUFRLE1BQU0sTUFBTSxNQUFNO0FBQUEsa0NBQzFCLGNBQWMsT0FBSSxLQUFDO0FBQUE7Ozs7Ozs7Ozs7Ozs7OztZQVFoQ0EsWUFBbUMsMkJBQXJCO0FBQUEsWUFDZEcsZ0JBS00sT0FMTixZQUtNO0FBQUEsY0FGSkEsZ0JBQTRCLDZCQUFwQixLQUFFO0FBQUEsY0FDVkEsZ0JBQTJCLDZCQUFuQixPQUFJLEtBQUMsS0FBSztBQUFBIiwibmFtZXMiOlsiX2NyZWF0ZUJsb2NrIiwiX2NyZWF0ZVZOb2RlIiwiX2NyZWF0ZVRleHRWTm9kZSIsIl90b0Rpc3BsYXlTdHJpbmciLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX29wZW5CbG9jayIsIl9GcmFnbWVudCIsIl9jcmVhdGVFbGVtZW50QmxvY2siXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9PcmRlclByZXZpZXcudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHEtZGlhbG9nIHYtbW9kZWw9XCJkaWFsb2dcIiBwb3NpdGlvbj1cImJvdHRvbVwiPlxuICAgIDxxLWNhcmQgY2xhc3M9XCJyb3VuZGVkLWJvcmRlcnMtdG9wXCI+XG4gICAgICA8cS10b29sYmFyIGNsYXNzPVwidGV4dC1wcmltYXJ5IHRvcC10b29sYmFyIHEtcGwtbWRcIiBkZW5zZT5cbiAgICAgICAgPHEtdG9vbGJhci10aXRsZSBjbGFzcz1cInRleHQtZGFyayB0ZXh0LXdlaWdodC1ib2xkXCI+XG4gICAgICAgICAge3sgJHQoXCJPcmRlclwiKSB9fVxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1wcmltYXJ5XCI+I3t7IGRhdGEub3JkZXJfaWRfcmF3IH19PC9zcGFuPlxuICAgICAgICA8L3EtdG9vbGJhci10aXRsZT5cbiAgICAgICAgPHEtc3BhY2U+PC9xLXNwYWNlPlxuICAgICAgICA8cS1idG5cbiAgICAgICAgICBAY2xpY2s9XCJkaWFsb2cgPSAhdHJ1ZVwiXG4gICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgc3F1YXJlXG4gICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgIHRleHQtY29sb3I9XCJncmV5XCJcbiAgICAgICAgICBpY29uPVwibGFzIGxhLXRpbWVzXCJcbiAgICAgICAgICBkZW5zZVxuICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgIGNsYXNzPVwiYm9yZGVyLWdyZXkgcmFkaXVzOFwiXG4gICAgICAgIC8+XG4gICAgICA8L3EtdG9vbGJhcj5cblxuICAgICAgPGRpdiBjbGFzcz1cInEtcGwtbWQgcS1wci1tZCBxLW1iLXNtXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICA6Y29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnc2Vjb25kYXJ5JyA6ICdibHVlJ1wiXG4gICAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgICA6bGFiZWw9XCIkdCgnVmlldyBmdWxsIG9yZGVyIGRldGFpbHMnKVwiXG4gICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgIDp0bz1cIntcbiAgICAgICAgICAgICAgcGF0aDogJy9hY2NvdW50L29yZGVyLWRldGFpbHMnLFxuICAgICAgICAgICAgICBxdWVyeTogeyBvcmRlcl91dWlkOiBkYXRhLm9yZGVyX3V1aWQgfSxcbiAgICAgICAgICAgIH1cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxxLWxpc3RcbiAgICAgICAgICBjbGFzcz1cInJhZGl1czhcIlxuICAgICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICdiZy1ncmV5NjAwIHRleHQtZ3JleTMwMCc6ICRxLmRhcmsubW9kZSxcbiAgICAgICAgICAgICdiZy1saWdodHByaW1hcnkgdGV4dC1ibGFjayc6ICEkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgfVwiXG4gICAgICAgID5cbiAgICAgICAgICA8cS1pdGVtIHYtZm9yPVwiaXRlbXMgaW4gZGF0YS5pdGVtc1wiIDprZXk9XCJpdGVtc1wiPlxuICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICAgICAgPHEtaW1nXG4gICAgICAgICAgICAgICAgOnNyYz1cIml0ZW1zX2RldGFpbHNbaXRlbXMuaXRlbV9pZF0ucGhvdG9cIlxuICAgICAgICAgICAgICAgIGxhenlcbiAgICAgICAgICAgICAgICBmaXQ9XCJjb3ZlclwiXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDcwcHg7IHdpZHRoOiA3MHB4XCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInJhZGl1czhcIlxuICAgICAgICAgICAgICAgIHNwaW5uZXItY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgIHNwaW5uZXItc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlci1zcmM9XCJwbGFjZWhvbGRlci5wbmdcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImZvbnQxMyB0ZXh0LXdlaWdodC1ib2xkIG5vLW1hcmdpbiBsaW5lLW5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICB2LWh0bWw9XCJpdGVtc19kZXRhaWxzW2l0ZW1zLml0ZW1faWRdLml0ZW1fbmFtZVwiXG4gICAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWdyZXkgZm9udDExIGxpbmUtbm9ybWFsXCI+XG4gICAgICAgICAgICAgICAgICB7eyBpdGVtcy5xdHkgfX0geFxuXG4gICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIml0ZW1zLmRpc2NvdW50ID4gMFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtc3RyaWtlXCI+e3sgaXRlbXMucHJpY2UgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxOdW1iZXJGb3JtYXRcbiAgICAgICAgICAgICAgICAgICAgICA6YW1vdW50PVwiaXRlbXMucHJpY2UgLSBpdGVtcy5kaXNjb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgOm1vbmV5X2NvbmZpZz1cImRhdGEucHJpY2VfZm9ybWF0XCJcbiAgICAgICAgICAgICAgICAgICAgPjwvTnVtYmVyRm9ybWF0PlxuICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICAgICAgICAgICAgICAgIDxOdW1iZXJGb3JtYXRcbiAgICAgICAgICAgICAgICAgICAgICA6YW1vdW50PVwiaXRlbXMucHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgIDptb25leV9jb25maWc9XCJkYXRhLnByaWNlX2Zvcm1hdFwiXG4gICAgICAgICAgICAgICAgICAgID48L051bWJlckZvcm1hdD5cbiAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnQxNCB0ZXh0LXdlaWdodC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICA8TnVtYmVyRm9ybWF0XG4gICAgICAgICAgICAgICAgICAgIDphbW91bnQ9XCJpdGVtcy5xdHkgKiBpdGVtcy5wcmljZVwiXG4gICAgICAgICAgICAgICAgICAgIDptb25leV9jb25maWc9XCJkYXRhLnByaWNlX2Zvcm1hdFwiXG4gICAgICAgICAgICAgICAgICA+PC9OdW1iZXJGb3JtYXQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgPC9xLWxpc3Q+XG5cbiAgICAgICAgPHEtc3BhY2UgY2xhc3M9XCJxLXBhLXNtXCI+PC9xLXNwYWNlPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJyb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBxLXBsLXhsIHEtcHQtc20gYm9yZGVyLWdyZXktdG9wIHRleHQtd2VpZ2h0LWJvbGRcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdj57eyAkdChcIlRvdGFsXCIpIH19PC9kaXY+XG4gICAgICAgICAgPGRpdj57eyBkYXRhLnRvdGFsIH19PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9xLWNhcmQ+XG4gIDwvcS1kaWFsb2c+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgdXNlRGF0YVN0b3JlIH0gZnJvbSBcInNyYy9zdG9yZXMvRGF0YVN0b3JlXCI7XG5pbXBvcnQgeyBkZWZpbmVBc3luY0NvbXBvbmVudCB9IGZyb20gXCJAdnVlL3J1bnRpbWUtY29yZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiT3JkZXJQcmV2aWV3XCIsXG4gIHByb3BzOiBbXCJkYXRhXCIsIFwiaXRlbXNfZGV0YWlsc1wiXSxcbiAgY29tcG9uZW50czoge1xuICAgIE51bWJlckZvcm1hdDogZGVmaW5lQXN5bmNDb21wb25lbnQoKCkgPT5cbiAgICAgIGltcG9ydChcImNvbXBvbmVudHMvTnVtYmVyRm9ybWF0LnZ1ZVwiKVxuICAgICksXG4gIH0sXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IERhdGFTdG9yZSA9IHVzZURhdGFTdG9yZSgpO1xuICAgIHJldHVybiB7IERhdGFTdG9yZSB9O1xuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkaWFsb2c6IGZhbHNlLFxuICAgIH07XG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iXSwiZmlsZSI6ImFzc2V0cy9PcmRlclByZXZpZXcuMTg1ODI1Y2YuanMifQ==
