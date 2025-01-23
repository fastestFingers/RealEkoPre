import { Q as QCircularProgress } from "./QCircularProgress.996c3e2f.js";
import { _ as _export_sfc, m as APIinterface, p as openBlock, V as createElementBlock, f as createVNode, U as createBaseVNode, a6 as createTextVNode, Z as toDisplayString, t as withCtx, Y as QBtn, ad as QItemSection, aA as createCommentVNode, F as Fragment } from "./index.61ed5618.js";
import { Q as QBtnGroup } from "./QBtnGroup.abc2d1c7.js";
import { Q as QSelect } from "./QSelect.311187d6.js";
import { u as useMenuStore } from "./MenuStore.f3a21da3.js";
import "./format.7f7370d3.js";
import "./QChip.f183a4f1.js";
import "./QItemLabel.a9365c5b.js";
import "./QMenu.8e482cd8.js";
import "./selection.50b4cb0c.js";
import "./rtl.f3ed811c.js";
const _sfc_main = {
  name: "CheckoutBooking",
  props: ["transaction_type"],
  data() {
    return {
      guest_number: 1,
      room_uuid: "",
      table_uuid: "",
      booking_enabled: false,
      room_list: [],
      table_list: [],
      loading: false
    };
  },
  setup() {
    const MenuStore = useMenuStore();
    return {
      MenuStore
    };
  },
  mounted() {
    this.getTableAttributes();
  },
  methods: {
    getTableAttributes() {
      this.loading = true;
      APIinterface.fetchDataPost(
        "getTableAttributes",
        "merchant_uuid=" + this.MenuStore.merchant_uuid
      ).then((data) => {
        this.booking_enabled = data.details.booking_enabled;
        this.room_list = data.details.room_list;
        this.table_list = data.details.table_list;
      }).catch((error) => {
      }).then((data) => {
        this.loading = false;
      });
    }
  }
};
const _hoisted_1 = {
  key: 0,
  class: "flex flex-center q-pa-md"
};
const _hoisted_2 = {
  key: 0,
  class: "q-pa-md",
  style: { "border-top": "1px solid #b1b1b1" }
};
const _hoisted_3 = { class: "font13 text-weight-bold q-mb-sm" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", { class: "text-red" }, "*", -1);
const _hoisted_5 = { class: "q-gutter-y-xs" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return $data.loading ? (openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(QCircularProgress, {
      indeterminate: "",
      rounded: "",
      size: "sm",
      color: "primary"
    })
  ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
    $data.booking_enabled && $props.transaction_type == "dinein" ? (openBlock(), createElementBlock("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createTextVNode(toDisplayString(_ctx.$t("Choose Table")) + " ", 1),
        _hoisted_4
      ]),
      createBaseVNode("div", _hoisted_5, [
        createBaseVNode("div", null, toDisplayString(_ctx.$t("Guest")), 1),
        createVNode(QBtnGroup, {
          unelevated: "",
          class: "radius8 border-grey",
          spread: ""
        }, {
          default: withCtx(() => [
            createVNode(QBtn, {
              onClick: _cache[0] || (_cache[0] = ($event) => $data.guest_number > 1 ? $data.guest_number-- : 1),
              color: _ctx.$q.dark.mode ? "grey600" : "mygrey",
              "text-color": _ctx.$q.dark.mode ? "grey300" : "grey",
              icon: "o_remove",
              size: "md",
              dense: "",
              class: "q-pa-sm"
            }, null, 8, ["color", "text-color"]),
            createVNode(QBtn, {
              dense: "",
              label: $data.guest_number,
              class: "no-pointer-events text-weight-medium"
            }, null, 8, ["label"]),
            createVNode(QBtn, {
              onClick: _cache[1] || (_cache[1] = ($event) => $data.guest_number++),
              color: _ctx.$q.dark.mode ? "grey600" : "mygrey",
              "text-color": _ctx.$q.dark.mode ? "grey300" : "grey",
              icon: "o_add",
              size: "md",
              dense: "",
              class: "q-pa-sm"
            }, null, 8, ["color", "text-color"])
          ]),
          _: 1
        }),
        createVNode(QItemSection, null, {
          default: withCtx(() => [
            createVNode(QSelect, {
              modelValue: $data.room_uuid,
              "onUpdate:modelValue": [
                _cache[2] || (_cache[2] = ($event) => $data.room_uuid = $event),
                _cache[3] || (_cache[3] = ($event) => $data.table_uuid = "")
              ],
              options: $data.room_list,
              label: _ctx.$t("Room name"),
              "transition-show": "scale",
              "transition-hide": "scale",
              "emit-value": "",
              "map-options": ""
            }, null, 8, ["modelValue", "options", "label"])
          ]),
          _: 1
        }),
        createVNode(QSelect, {
          modelValue: $data.table_uuid,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.table_uuid = $event),
          options: this.table_list[$data.room_uuid],
          label: _ctx.$t("Table name"),
          "transition-show": "scale",
          "transition-hide": "scale",
          "emit-value": "",
          "map-options": ""
        }, null, 8, ["modelValue", "options", "label"])
      ])
    ])) : createCommentVNode("", true)
  ], 64));
}
var CheckoutBooking = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "CheckoutBooking.vue"]]);
export { CheckoutBooking as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hlY2tvdXRCb29raW5nLjBhNzk0MTIzLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9DaGVja291dEJvb2tpbmcudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHRlbXBsYXRlIHYtaWY9XCJsb2FkaW5nXCI+XG4gICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jZW50ZXIgcS1wYS1tZFwiPlxuICAgICAgPHEtY2lyY3VsYXItcHJvZ3Jlc3MgaW5kZXRlcm1pbmF0ZSByb3VuZGVkIHNpemU9XCJzbVwiIGNvbG9yPVwicHJpbWFyeVwiIC8+XG4gICAgPC9kaXY+XG4gIDwvdGVtcGxhdGU+XG4gIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJxLXBhLW1kXCJcbiAgICAgIHN0eWxlPVwiYm9yZGVyLXRvcDogMXB4IHNvbGlkICNiMWIxYjFcIlxuICAgICAgdi1pZj1cImJvb2tpbmdfZW5hYmxlZCAmJiB0cmFuc2FjdGlvbl90eXBlID09ICdkaW5laW4nXCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9udDEzIHRleHQtd2VpZ2h0LWJvbGQgcS1tYi1zbVwiPlxuICAgICAgICB7eyAkdChcIkNob29zZSBUYWJsZVwiKSB9fSA8c3BhbiBjbGFzcz1cInRleHQtcmVkXCI+Kjwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwicS1ndXR0ZXIteS14c1wiPlxuICAgICAgICA8ZGl2Pnt7ICR0KFwiR3Vlc3RcIikgfX08L2Rpdj5cbiAgICAgICAgPHEtYnRuLWdyb3VwIHVuZWxldmF0ZWQgY2xhc3M9XCJyYWRpdXM4IGJvcmRlci1ncmV5XCIgc3ByZWFkPlxuICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgQGNsaWNrPVwiZ3Vlc3RfbnVtYmVyID4gMSA/IGd1ZXN0X251bWJlci0tIDogMVwiXG4gICAgICAgICAgICA6Y29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTYwMCcgOiAnbXlncmV5J1wiXG4gICAgICAgICAgICA6dGV4dC1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICdncmV5J1wiXG4gICAgICAgICAgICBpY29uPVwib19yZW1vdmVcIlxuICAgICAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICBjbGFzcz1cInEtcGEtc21cIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgOmxhYmVsPVwiZ3Vlc3RfbnVtYmVyXCJcbiAgICAgICAgICAgIGNsYXNzPVwibm8tcG9pbnRlci1ldmVudHMgdGV4dC13ZWlnaHQtbWVkaXVtXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgQGNsaWNrPVwiZ3Vlc3RfbnVtYmVyKytcIlxuICAgICAgICAgICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXk2MDAnIDogJ215Z3JleSdcIlxuICAgICAgICAgICAgOnRleHQtY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTMwMCcgOiAnZ3JleSdcIlxuICAgICAgICAgICAgaWNvbj1cIm9fYWRkXCJcbiAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgY2xhc3M9XCJxLXBhLXNtXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3EtYnRuLWdyb3VwPlxuXG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1zZWxlY3RcbiAgICAgICAgICAgIHYtbW9kZWw9XCJyb29tX3V1aWRcIlxuICAgICAgICAgICAgOm9wdGlvbnM9XCJyb29tX2xpc3RcIlxuICAgICAgICAgICAgQHVwZGF0ZTptb2RlbC12YWx1ZT1cInRhYmxlX3V1aWQgPSAnJ1wiXG4gICAgICAgICAgICA6bGFiZWw9XCIkdCgnUm9vbSBuYW1lJylcIlxuICAgICAgICAgICAgdHJhbnNpdGlvbi1zaG93PVwic2NhbGVcIlxuICAgICAgICAgICAgdHJhbnNpdGlvbi1oaWRlPVwic2NhbGVcIlxuICAgICAgICAgICAgZW1pdC12YWx1ZVxuICAgICAgICAgICAgbWFwLW9wdGlvbnNcbiAgICAgICAgICAvPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuXG4gICAgICAgIDxxLXNlbGVjdFxuICAgICAgICAgIHYtbW9kZWw9XCJ0YWJsZV91dWlkXCJcbiAgICAgICAgICA6b3B0aW9ucz1cInRoaXMudGFibGVfbGlzdFtyb29tX3V1aWRdXCJcbiAgICAgICAgICA6bGFiZWw9XCIkdCgnVGFibGUgbmFtZScpXCJcbiAgICAgICAgICB0cmFuc2l0aW9uLXNob3c9XCJzY2FsZVwiXG4gICAgICAgICAgdHJhbnNpdGlvbi1oaWRlPVwic2NhbGVcIlxuICAgICAgICAgIGVtaXQtdmFsdWVcbiAgICAgICAgICBtYXAtb3B0aW9uc1xuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvdGVtcGxhdGU+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgdXNlTWVudVN0b3JlIH0gZnJvbSBcInN0b3Jlcy9NZW51U3RvcmVcIjtcbmltcG9ydCBBUElpbnRlcmZhY2UgZnJvbSBcInNyYy9hcGkvQVBJaW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJDaGVja291dEJvb2tpbmdcIixcbiAgcHJvcHM6IFtcInRyYW5zYWN0aW9uX3R5cGVcIl0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGd1ZXN0X251bWJlcjogMSxcbiAgICAgIHJvb21fdXVpZDogXCJcIixcbiAgICAgIHRhYmxlX3V1aWQ6IFwiXCIsXG4gICAgICBib29raW5nX2VuYWJsZWQ6IGZhbHNlLFxuICAgICAgcm9vbV9saXN0OiBbXSxcbiAgICAgIHRhYmxlX2xpc3Q6IFtdLFxuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgfTtcbiAgfSxcbiAgc2V0dXAoKSB7XG4gICAgY29uc3QgTWVudVN0b3JlID0gdXNlTWVudVN0b3JlKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIE1lbnVTdG9yZSxcbiAgICB9O1xuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuZ2V0VGFibGVBdHRyaWJ1dGVzKCk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBnZXRUYWJsZUF0dHJpYnV0ZXMoKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgQVBJaW50ZXJmYWNlLmZldGNoRGF0YVBvc3QoXG4gICAgICAgIFwiZ2V0VGFibGVBdHRyaWJ1dGVzXCIsXG4gICAgICAgIFwibWVyY2hhbnRfdXVpZD1cIiArIHRoaXMuTWVudVN0b3JlLm1lcmNoYW50X3V1aWRcbiAgICAgIClcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmJvb2tpbmdfZW5hYmxlZCA9IGRhdGEuZGV0YWlscy5ib29raW5nX2VuYWJsZWQ7XG4gICAgICAgICAgdGhpcy5yb29tX2xpc3QgPSBkYXRhLmRldGFpbHMucm9vbV9saXN0O1xuICAgICAgICAgIHRoaXMudGFibGVfbGlzdCA9IGRhdGEuZGV0YWlscy50YWJsZV9saXN0O1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7fSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfY3JlYXRlVk5vZGUiLCJfRnJhZ21lbnQiLCJfY3JlYXRlVGV4dFZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUEyRUEsTUFBSyxZQUFVO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFD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
