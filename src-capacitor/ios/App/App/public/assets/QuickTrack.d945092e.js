import { _ as _export_sfc, l as defineAsyncComponent, u as __vitePreload, n as resolveComponent, p as openBlock, V as createElementBlock, f as createVNode, t as withCtx, a8 as QCard, U as createBaseVNode, Z as toDisplayString, Y as QBtn, q as createBlock, aA as createCommentVNode, aB as QDialog, F as Fragment } from "./index.61ed5618.js";
import { Q as QBadge } from "./QBadge.6d32ed43.js";
import { Q as QLinearProgress } from "./QLinearProgress.95e9a35e.js";
const _sfc_main = {
  name: "QuickTrack",
  components: {
    ComponentsRealtime: defineAsyncComponent(
      () => __vitePreload(() => import("./ComponentsRealtime.d8c5a360.js"), true ? ["assets/ComponentsRealtime.d8c5a360.js","assets/index.d0b40bd3.js","assets/index.61ed5618.js","assets/index.dbee30c0.css"] : void 0)
    )
  },
  data() {
    return {
      modal: false,
      merchant: [],
      order_progress: 0,
      order_status: "",
      order_status_details: "",
      order_id: "",
      order_uuid: "",
      test_data: {
        order_progress: 4,
        order_status: "Order Complete",
        order_status_details: "Your order is completed. Enjoy!",
        order_id: "10146",
        order_uuid: "5ea2b465-4e88-11ed-afba-9c5c8e164c2c",
        merchant: {
          merchant_id: "3",
          merchant_uuid: "7dedd05f-809a-11ec-859e-99479722e411",
          restaurant_name: "McDonald's",
          restaurant_slug: "mcdonalds",
          address: "2810 South Figueroa Street, Los Angeles, CA, USA",
          distance_unit: "mi",
          delivery_distance_covered: "100.00",
          latitude: "14.563190",
          longitude: "121.045418",
          merchant_type: "2",
          commision_type: "percentage",
          commission: "5.00",
          logo: "1782c36c-809c-11ec-859e-99479722e411.jpeg",
          path: "upload/3",
          contact_phone: "+12243333333",
          contact_email: "mcdo@yahoo.cm",
          cuisine_name: "American;#bad5f2;#444444,Barbeque;#b27c45;white,Chinese;#f6b26b;white,Deli;#d87f22;white,Diner;#3d85c6;#5b5b5b,Greek;#b45f06;white,Indian;#e69138;#999999,Italian;#a2c4c9;#5b5b5b,Korean;#f9cb9c;#5b5b5b,Mediterranean;#ffd966;#999999,Middle Eastern;#45818e;white",
          url_logo: "http://localhost/kmrs2/upload/3/1782c36c-809c-11ec-859e-99479722e411.jpeg",
          restaurant_url: "http://localhost/kmrs2/mcdonalds",
          restaurant_direction: "https://www.google.com/maps/dir/?api=1&destination=14.563190,121.045418",
          cuisine: [
            {
              cuisine_name: "American",
              bgcolor: "#bad5f2",
              fncolor: "#444444"
            },
            {
              cuisine_name: "Barbeque",
              bgcolor: "#b27c45",
              fncolor: "white"
            },
            {
              cuisine_name: "Chinese",
              bgcolor: "#f6b26b",
              fncolor: "white"
            },
            {
              cuisine_name: "Deli",
              bgcolor: "#d87f22",
              fncolor: "white"
            },
            {
              cuisine_name: "Diner",
              bgcolor: "#3d85c6",
              fncolor: "#5b5b5b"
            },
            {
              cuisine_name: "Greek",
              bgcolor: "#b45f06",
              fncolor: "white"
            },
            {
              cuisine_name: "Indian",
              bgcolor: "#e69138",
              fncolor: "#999999"
            },
            {
              cuisine_name: "Italian",
              bgcolor: "#a2c4c9",
              fncolor: "#5b5b5b"
            },
            {
              cuisine_name: "Korean",
              bgcolor: "#f9cb9c",
              fncolor: "#5b5b5b"
            },
            {
              cuisine_name: "Mediterranean",
              bgcolor: "#ffd966",
              fncolor: "#999999"
            },
            {
              cuisine_name: "Middle Eastern",
              bgcolor: "#45818e",
              fncolor: "white"
            }
          ],
          merchant_address: "2810 South Figueroa Street, Los Angeles, CA, USA"
        }
      }
    };
  },
  created() {
  },
  methods: {
    afterReceive(data) {
      this.modal = true;
      this.merchant = data.merchant;
      this.order_progress = data.order_progress;
      this.order_status = data.order_status;
      this.order_status_details = data.order_status_details;
      this.order_id = data.order_id;
      this.order_uuid = data.order_uuid;
    }
  }
};
const _hoisted_1 = { class: "row items-center" };
const _hoisted_2 = { class: "col" };
const _hoisted_3 = { class: "row inline items-center" };
const _hoisted_4 = { class: "borde q-pr-sm" };
const _hoisted_5 = { class: "text-weight-bold" };
const _hoisted_6 = { class: "col-2 text-right" };
const _hoisted_7 = { class: "row items-center q-mt-sm" };
const _hoisted_8 = { class: "col" };
const _hoisted_9 = { class: "text-weight-bold" };
const _hoisted_10 = { class: "font12 text-weight-medium" };
const _hoisted_11 = {
  key: 0,
  class: "col-4 text-right"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ComponentsRealtime = resolveComponent("ComponentsRealtime");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(QDialog, {
      modelValue: $data.modal,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.modal = $event),
      position: "bottom",
      seamless: true
    }, {
      default: withCtx(() => [
        createVNode(QCard, {
          class: "q-pa-md curve2",
          style: { "padding-bottom": "0px" }
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_1, [
              createBaseVNode("div", _hoisted_2, [
                createBaseVNode("div", _hoisted_3, [
                  createBaseVNode("div", _hoisted_4, [
                    createVNode(QBadge, {
                      rounded: "",
                      color: "secondary"
                    })
                  ]),
                  createBaseVNode("div", _hoisted_5, toDisplayString($data.merchant.restaurant_name), 1)
                ])
              ]),
              createBaseVNode("div", _hoisted_6, [
                createVNode(QBtn, {
                  onClick: _cache[0] || (_cache[0] = ($event) => $data.modal = false),
                  round: "",
                  color: "white",
                  "text-color": "secondary",
                  icon: "eva-arrow-ios-downward-outline",
                  dense: "",
                  size: "xs",
                  unelevated: ""
                })
              ])
            ]),
            createBaseVNode("div", _hoisted_7, [
              createBaseVNode("div", _hoisted_8, [
                $data.order_progress < 4 ? (openBlock(), createBlock(QLinearProgress, {
                  key: 0,
                  indeterminate: "",
                  color: "secondary",
                  class: "q-mb-sm"
                })) : createCommentVNode("", true),
                createBaseVNode("div", _hoisted_9, toDisplayString($data.order_status), 1),
                createBaseVNode("p", _hoisted_10, toDisplayString($data.order_status_details), 1)
              ]),
              $data.order_progress < 4 ? (openBlock(), createElementBlock("div", _hoisted_11, [
                createVNode(QBtn, {
                  to: `/account/trackorder?order_uuid=${$data.order_uuid}`,
                  unelevated: "",
                  "no-caps": "",
                  label: _ctx.$t("Track"),
                  color: "primary"
                }, null, 8, ["to", "label"])
              ])) : createCommentVNode("", true)
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["modelValue"]),
    createVNode(_component_ComponentsRealtime, {
      ref: "realtime",
      getevent: "tracking",
      onAfterReceive: $options.afterReceive
    }, null, 8, ["onAfterReceive"])
  ], 64);
}
var QuickTrack = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "QuickTrack.vue"]]);
export { QuickTrack as default };
//# sourceMappingURL=data:application/json;base64,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YyxzQkFBbERFLGdDQVFNLE9BUk4sYUFRTTtBQUFBLGdCQVBKSixZQU1TO0FBQUEsa0JBTE4sc0NBQXNDLE1BQVU7QUFBQSxrQkFDakQ7QUFBQSxrQkFDQTtBQUFBLGtCQUNDLE9BQU8sS0FBRTtBQUFBLGtCQUNWLE9BQU07QUFBQTs7Ozs7Ozs7O0lBUWhCQSxZQUlFO0FBQUEsTUFIQSxLQUFJO0FBQUEsTUFDSixVQUFTO0FBQUEsTUFDUixnQkFBZSxTQUFZO0FBQUEiLCJuYW1lcyI6WyJfY3JlYXRlVk5vZGUiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyIsIl9jcmVhdGVCbG9jayIsIl9vcGVuQmxvY2siXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9RdWlja1RyYWNrLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLWRpYWxvZyB2LW1vZGVsPVwibW9kYWxcIiBwb3NpdGlvbj1cImJvdHRvbVwiIDpzZWFtbGVzcz1cInRydWVcIj5cbiAgICA8cS1jYXJkIGNsYXNzPVwicS1wYS1tZCBjdXJ2ZTJcIiBzdHlsZT1cInBhZGRpbmctYm90dG9tOiAwcHhcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGlubGluZSBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3JkZSBxLXByLXNtXCI+XG4gICAgICAgICAgICAgIDxxLWJhZGdlIHJvdW5kZWQgY29sb3I9XCJzZWNvbmRhcnlcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC13ZWlnaHQtYm9sZFwiPnt7IG1lcmNoYW50LnJlc3RhdXJhbnRfbmFtZSB9fTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPCEtLSBjb2wgLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMiB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICBAY2xpY2s9XCJtb2RhbCA9IGZhbHNlXCJcbiAgICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgIHRleHQtY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgaWNvbj1cImV2YS1hcnJvdy1pb3MtZG93bndhcmQtb3V0bGluZVwiXG4gICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPCEtLSByb3cgLS0+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgaXRlbXMtY2VudGVyIHEtbXQtc21cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgIDxxLWxpbmVhci1wcm9ncmVzc1xuICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZVxuICAgICAgICAgICAgdi1pZj1cIm9yZGVyX3Byb2dyZXNzIDwgNFwiXG4gICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBjbGFzcz1cInEtbWItc21cIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGRcIj57eyBvcmRlcl9zdGF0dXMgfX08L2Rpdj5cbiAgICAgICAgICA8cCBjbGFzcz1cImZvbnQxMiB0ZXh0LXdlaWdodC1tZWRpdW1cIj57eyBvcmRlcl9zdGF0dXNfZGV0YWlscyB9fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNCB0ZXh0LXJpZ2h0XCIgdi1pZj1cIm9yZGVyX3Byb2dyZXNzIDwgNFwiPlxuICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgOnRvPVwiYC9hY2NvdW50L3RyYWNrb3JkZXI/b3JkZXJfdXVpZD0ke29yZGVyX3V1aWR9YFwiXG4gICAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgICA6bGFiZWw9XCIkdCgnVHJhY2snKVwiXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgID48L3EtYnRuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPCEtLSByb3cgLS0+XG4gICAgPC9xLWNhcmQ+XG4gIDwvcS1kaWFsb2c+XG5cbiAgPENvbXBvbmVudHNSZWFsdGltZVxuICAgIHJlZj1cInJlYWx0aW1lXCJcbiAgICBnZXRldmVudD1cInRyYWNraW5nXCJcbiAgICBAYWZ0ZXItcmVjZWl2ZT1cImFmdGVyUmVjZWl2ZVwiXG4gIC8+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2NhcGFjaXRvci1jb21tdW5pdHkvbmF0aXZlLWF1ZGlvXG5pbXBvcnQgeyBkZWZpbmVBc3luY0NvbXBvbmVudCB9IGZyb20gXCJ2dWVcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIlF1aWNrVHJhY2tcIixcbiAgY29tcG9uZW50czoge1xuICAgIENvbXBvbmVudHNSZWFsdGltZTogZGVmaW5lQXN5bmNDb21wb25lbnQoKCkgPT5cbiAgICAgIGltcG9ydChcImNvbXBvbmVudHMvQ29tcG9uZW50c1JlYWx0aW1lLnZ1ZVwiKVxuICAgICksXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1vZGFsOiBmYWxzZSxcbiAgICAgIG1lcmNoYW50OiBbXSxcbiAgICAgIG9yZGVyX3Byb2dyZXNzOiAwLFxuICAgICAgb3JkZXJfc3RhdHVzOiBcIlwiLFxuICAgICAgb3JkZXJfc3RhdHVzX2RldGFpbHM6IFwiXCIsXG4gICAgICBvcmRlcl9pZDogXCJcIixcbiAgICAgIG9yZGVyX3V1aWQ6IFwiXCIsXG4gICAgICB0ZXN0X2RhdGE6IHtcbiAgICAgICAgb3JkZXJfcHJvZ3Jlc3M6IDQsXG4gICAgICAgIG9yZGVyX3N0YXR1czogXCJPcmRlciBDb21wbGV0ZVwiLFxuICAgICAgICBvcmRlcl9zdGF0dXNfZGV0YWlsczogXCJZb3VyIG9yZGVyIGlzIGNvbXBsZXRlZC4gRW5qb3khXCIsXG4gICAgICAgIG9yZGVyX2lkOiBcIjEwMTQ2XCIsXG4gICAgICAgIG9yZGVyX3V1aWQ6IFwiNWVhMmI0NjUtNGU4OC0xMWVkLWFmYmEtOWM1YzhlMTY0YzJjXCIsXG4gICAgICAgIG1lcmNoYW50OiB7XG4gICAgICAgICAgbWVyY2hhbnRfaWQ6IFwiM1wiLFxuICAgICAgICAgIG1lcmNoYW50X3V1aWQ6IFwiN2RlZGQwNWYtODA5YS0xMWVjLTg1OWUtOTk0Nzk3MjJlNDExXCIsXG4gICAgICAgICAgcmVzdGF1cmFudF9uYW1lOiBcIk1jRG9uYWxkJ3NcIixcbiAgICAgICAgICByZXN0YXVyYW50X3NsdWc6IFwibWNkb25hbGRzXCIsXG4gICAgICAgICAgYWRkcmVzczogXCIyODEwIFNvdXRoIEZpZ3Vlcm9hIFN0cmVldCwgTG9zIEFuZ2VsZXMsIENBLCBVU0FcIixcbiAgICAgICAgICBkaXN0YW5jZV91bml0OiBcIm1pXCIsXG4gICAgICAgICAgZGVsaXZlcnlfZGlzdGFuY2VfY292ZXJlZDogXCIxMDAuMDBcIixcbiAgICAgICAgICBsYXRpdHVkZTogXCIxNC41NjMxOTBcIixcbiAgICAgICAgICBsb25naXR1ZGU6IFwiMTIxLjA0NTQxOFwiLFxuICAgICAgICAgIG1lcmNoYW50X3R5cGU6IFwiMlwiLFxuICAgICAgICAgIGNvbW1pc2lvbl90eXBlOiBcInBlcmNlbnRhZ2VcIixcbiAgICAgICAgICBjb21taXNzaW9uOiBcIjUuMDBcIixcbiAgICAgICAgICBsb2dvOiBcIjE3ODJjMzZjLTgwOWMtMTFlYy04NTllLTk5NDc5NzIyZTQxMS5qcGVnXCIsXG4gICAgICAgICAgcGF0aDogXCJ1cGxvYWQvM1wiLFxuICAgICAgICAgIGNvbnRhY3RfcGhvbmU6IFwiKzEyMjQzMzMzMzMzXCIsXG4gICAgICAgICAgY29udGFjdF9lbWFpbDogXCJtY2RvQHlhaG9vLmNtXCIsXG4gICAgICAgICAgY3Vpc2luZV9uYW1lOlxuICAgICAgICAgICAgXCJBbWVyaWNhbjsjYmFkNWYyOyM0NDQ0NDQsQmFyYmVxdWU7I2IyN2M0NTt3aGl0ZSxDaGluZXNlOyNmNmIyNmI7d2hpdGUsRGVsaTsjZDg3ZjIyO3doaXRlLERpbmVyOyMzZDg1YzY7IzViNWI1YixHcmVlazsjYjQ1ZjA2O3doaXRlLEluZGlhbjsjZTY5MTM4OyM5OTk5OTksSXRhbGlhbjsjYTJjNGM5OyM1YjViNWIsS29yZWFuOyNmOWNiOWM7IzViNWI1YixNZWRpdGVycmFuZWFuOyNmZmQ5NjY7Izk5OTk5OSxNaWRkbGUgRWFzdGVybjsjNDU4MThlO3doaXRlXCIsXG4gICAgICAgICAgdXJsX2xvZ286XG4gICAgICAgICAgICBcImh0dHA6Ly9sb2NhbGhvc3Qva21yczIvdXBsb2FkLzMvMTc4MmMzNmMtODA5Yy0xMWVjLTg1OWUtOTk0Nzk3MjJlNDExLmpwZWdcIixcbiAgICAgICAgICByZXN0YXVyYW50X3VybDogXCJodHRwOi8vbG9jYWxob3N0L2ttcnMyL21jZG9uYWxkc1wiLFxuICAgICAgICAgIHJlc3RhdXJhbnRfZGlyZWN0aW9uOlxuICAgICAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZGlyLz9hcGk9MSZkZXN0aW5hdGlvbj0xNC41NjMxOTAsMTIxLjA0NTQxOFwiLFxuICAgICAgICAgIGN1aXNpbmU6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY3Vpc2luZV9uYW1lOiBcIkFtZXJpY2FuXCIsXG4gICAgICAgICAgICAgIGJnY29sb3I6IFwiI2JhZDVmMlwiLFxuICAgICAgICAgICAgICBmbmNvbG9yOiBcIiM0NDQ0NDRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGN1aXNpbmVfbmFtZTogXCJCYXJiZXF1ZVwiLFxuICAgICAgICAgICAgICBiZ2NvbG9yOiBcIiNiMjdjNDVcIixcbiAgICAgICAgICAgICAgZm5jb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY3Vpc2luZV9uYW1lOiBcIkNoaW5lc2VcIixcbiAgICAgICAgICAgICAgYmdjb2xvcjogXCIjZjZiMjZiXCIsXG4gICAgICAgICAgICAgIGZuY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGN1aXNpbmVfbmFtZTogXCJEZWxpXCIsXG4gICAgICAgICAgICAgIGJnY29sb3I6IFwiI2Q4N2YyMlwiLFxuICAgICAgICAgICAgICBmbmNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjdWlzaW5lX25hbWU6IFwiRGluZXJcIixcbiAgICAgICAgICAgICAgYmdjb2xvcjogXCIjM2Q4NWM2XCIsXG4gICAgICAgICAgICAgIGZuY29sb3I6IFwiIzViNWI1YlwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY3Vpc2luZV9uYW1lOiBcIkdyZWVrXCIsXG4gICAgICAgICAgICAgIGJnY29sb3I6IFwiI2I0NWYwNlwiLFxuICAgICAgICAgICAgICBmbmNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjdWlzaW5lX25hbWU6IFwiSW5kaWFuXCIsXG4gICAgICAgICAgICAgIGJnY29sb3I6IFwiI2U2OTEzOFwiLFxuICAgICAgICAgICAgICBmbmNvbG9yOiBcIiM5OTk5OTlcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGN1aXNpbmVfbmFtZTogXCJJdGFsaWFuXCIsXG4gICAgICAgICAgICAgIGJnY29sb3I6IFwiI2EyYzRjOVwiLFxuICAgICAgICAgICAgICBmbmNvbG9yOiBcIiM1YjViNWJcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGN1aXNpbmVfbmFtZTogXCJLb3JlYW5cIixcbiAgICAgICAgICAgICAgYmdjb2xvcjogXCIjZjljYjljXCIsXG4gICAgICAgICAgICAgIGZuY29sb3I6IFwiIzViNWI1YlwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY3Vpc2luZV9uYW1lOiBcIk1lZGl0ZXJyYW5lYW5cIixcbiAgICAgICAgICAgICAgYmdjb2xvcjogXCIjZmZkOTY2XCIsXG4gICAgICAgICAgICAgIGZuY29sb3I6IFwiIzk5OTk5OVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY3Vpc2luZV9uYW1lOiBcIk1pZGRsZSBFYXN0ZXJuXCIsXG4gICAgICAgICAgICAgIGJnY29sb3I6IFwiIzQ1ODE4ZVwiLFxuICAgICAgICAgICAgICBmbmNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgbWVyY2hhbnRfYWRkcmVzczogXCIyODEwIFNvdXRoIEZpZ3Vlcm9hIFN0cmVldCwgTG9zIEFuZ2VsZXMsIENBLCBVU0FcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICAvL3RoaXMuYWZ0ZXJSZWNlaXZlKHRoaXMudGVzdF9kYXRhKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGFmdGVyUmVjZWl2ZShkYXRhKSB7XG4gICAgICB0aGlzLm1vZGFsID0gdHJ1ZTtcbiAgICAgIHRoaXMubWVyY2hhbnQgPSBkYXRhLm1lcmNoYW50O1xuICAgICAgdGhpcy5vcmRlcl9wcm9ncmVzcyA9IGRhdGEub3JkZXJfcHJvZ3Jlc3M7XG4gICAgICB0aGlzLm9yZGVyX3N0YXR1cyA9IGRhdGEub3JkZXJfc3RhdHVzO1xuICAgICAgdGhpcy5vcmRlcl9zdGF0dXNfZGV0YWlscyA9IGRhdGEub3JkZXJfc3RhdHVzX2RldGFpbHM7XG4gICAgICB0aGlzLm9yZGVyX2lkID0gZGF0YS5vcmRlcl9pZDtcbiAgICAgIHRoaXMub3JkZXJfdXVpZCA9IGRhdGEub3JkZXJfdXVpZDtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuIl0sImZpbGUiOiJhc3NldHMvUXVpY2tUcmFjay5kOTQ1MDkyZS5qcyJ9
