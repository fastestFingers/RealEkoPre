import { _ as _export_sfc, l as defineAsyncComponent, u as __vitePreload, aw as auth, m as APIinterface, n as resolveComponent, p as openBlock, V as createElementBlock, f as createVNode, t as withCtx, a8 as QCard, a9 as QCardSection, ac as QItem, ad as QItemSection, at as QIcon, U as createBaseVNode, Z as toDisplayString, Y as QBtn, F as Fragment, X as renderList, a6 as createTextVNode, aA as createCommentVNode, aB as QDialog } from "./index.61ed5618.js";
import { Q as QBtnToggle } from "./QBtnToggle.6ffa195b.js";
import { Q as QItemLabel } from "./QItemLabel.a9365c5b.js";
import { Q as QList } from "./QList.b69a7e5b.js";
import { u as usePlaceStore } from "./PlaceStore.ccc50efb.js";
import { u as useDeliveryschedStore } from "./DeliverySched.4e9605bf.js";
import "./QBtnGroup.abc2d1c7.js";
const _sfc_main = {
  name: "DeliveryDetails",
  props: ["back_url"],
  components: {
    ClientAddress: defineAsyncComponent(
      () => __vitePreload(() => import("./ClientAddress.37a37e4b.js"), true ? ["assets/ClientAddress.37a37e4b.js","assets/QToolbarTitle.03eaf2d6.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QSpace.f164c087.js","assets/QToolbar.c8fc6962.js","assets/QInnerLoading.abe2afe6.js","assets/QItemLabel.a9365c5b.js","assets/QList.b69a7e5b.js","assets/ClientStore.327b1c8d.js"] : void 0)
    )
  },
  data() {
    return {
      show_modal: false,
      loading: false
    };
  },
  setup() {
    const PlaceStore = usePlaceStore();
    const DeliveryschedStore = useDeliveryschedStore();
    return { PlaceStore, DeliveryschedStore };
  },
  mounted() {
    this.PlaceStore.getPlace();
  },
  methods: {
    showModal(data) {
      this.show_modal = data;
    },
    TransactionInfo() {
      this.transactionStore.TransactionInfo();
    },
    showSched() {
      this.showModal(false);
      this.$refs.delivery_sched.showSched(true);
    },
    changeTransactionType() {
      this.DeliveryschedStore.new_transaction_type = this.DeliveryschedStore.transaction_type;
      console.log("d2");
      this.saveTransactionType();
    },
    ChangeAddress() {
      if (auth.authenticated()) {
        this.show_modal = false;
        this.$refs.client_address.showModal(true);
      } else {
        this.$router.push({ name: "map", query: { url: this.back_url } });
      }
    },
    afterSetplaceid() {
      this.PlaceStore.getPlace();
      this.$emit("afterSetplaceid");
    },
    saveTransactionType() {
      const cartUUID = APIinterface.getStorage("cart_uuid");
      if (APIinterface.empty(cartUUID)) {
        return false;
      }
      APIinterface.saveTransactionType({
        cart_uuid: cartUUID,
        transaction_type: this.DeliveryschedStore.transaction_type
      }).then((data) => {
        console.log("fin");
        this.$emit("afterSavetranstype");
      }).catch((error) => {
      }).then((data) => {
      });
    }
  }
};
const _hoisted_1 = { class: "text-weight-medium" };
const _hoisted_2 = {
  key: 0,
  class: "text-weight-medium"
};
const _hoisted_3 = {
  key: 1,
  class: "text-weight-medium"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ClientAddress = resolveComponent("ClientAddress");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(QDialog, {
      modelValue: $data.show_modal,
      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.show_modal = $event),
      position: "bottom"
    }, {
      default: withCtx(() => [
        createVNode(QCard, null, {
          default: withCtx(() => [
            createVNode(QCardSection, null, {
              default: withCtx(() => [
                createVNode(QBtnToggle, {
                  modelValue: $setup.DeliveryschedStore.transaction_type,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.DeliveryschedStore.transaction_type = $event),
                  "toggle-color": "secondary",
                  "no-caps": "",
                  unelevated: "",
                  class: "rounded-group q-mb-sm",
                  options: $setup.DeliveryschedStore.transaction_list,
                  onClick: $options.changeTransactionType
                }, null, 8, ["modelValue", "options", "onClick"]),
                createVNode(QList, null, {
                  default: withCtx(() => [
                    createVNode(QItem, { class: "q-pa-none" }, {
                      default: withCtx(() => [
                        createVNode(QItemSection, {
                          class: "col-1",
                          avatar: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(QIcon, {
                              color: "grey",
                              name: "las la-map-marker-alt",
                              size: "20px"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(QItemSection, null, {
                          default: withCtx(() => [
                            createVNode(QItemLabel, { lines: "1" }, {
                              default: withCtx(() => [
                                createBaseVNode("span", _hoisted_1, toDisplayString($setup.PlaceStore.address), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(QItemSection, { side: "" }, {
                          default: withCtx(() => [
                            createVNode(QBtn, {
                              onClick: $options.ChangeAddress,
                              flat: "",
                              color: "secondary",
                              label: _ctx.$t("Change"),
                              "no-caps": "",
                              dense: ""
                            }, null, 8, ["onClick", "label"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(QItem, { class: "q-pa-none" }, {
                      default: withCtx(() => [
                        createVNode(QItemSection, {
                          class: "col-1",
                          avatar: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(QIcon, {
                              color: "grey",
                              name: "eva-clock-outline",
                              size: "20px"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(QItemSection, null, {
                          default: withCtx(() => [
                            createVNode(QItemLabel, { lines: "1" }, {
                              default: withCtx(() => [
                                $setup.DeliveryschedStore.whento_deliver === "schedule" ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString($setup.DeliveryschedStore.trans_data.delivery_date_pretty) + " " + toDisplayString($setup.DeliveryschedStore.trans_data.delivery_time.pretty_time), 1)) : (openBlock(), createElementBlock("span", _hoisted_3, [
                                  (openBlock(true), createElementBlock(Fragment, null, renderList($setup.DeliveryschedStore.delivery_options, (item_option) => {
                                    return openBlock(), createElementBlock(Fragment, { key: item_option }, [
                                      $setup.DeliveryschedStore.whento_deliver == item_option.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                                        createTextVNode(toDisplayString(item_option.label), 1)
                                      ], 64)) : createCommentVNode("", true)
                                    ], 64);
                                  }), 128))
                                ]))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(QItemSection, { side: "" }, {
                          default: withCtx(() => [
                            createVNode(QBtn, {
                              onClick: _cache[1] || (_cache[1] = ($event) => this.$emit("showSched")),
                              flat: "",
                              color: "secondary",
                              label: _ctx.$t("Change"),
                              "no-caps": "",
                              dense: ""
                            }, null, 8, ["label"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["modelValue"]),
    createVNode(_component_ClientAddress, {
      ref: "client_address",
      redirect: this.$route.path,
      onAfterSetplaceid: $options.afterSetplaceid,
      onFillAddress: _ctx.fillAddress
    }, null, 8, ["redirect", "onAfterSetplaceid", "onFillAddress"])
  ], 64);
}
var DeliveryDetails = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "DeliveryDetails.vue"]]);
export { DeliveryDetails as default };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQWtHQSxNQUFLLFlBQVU7QUFBQSxFQUNiLE1BQU07QUFBQSxFQUNOLE9BQU8sQ0FBQyxVQUFVO0FBQUEsRUFDbEIsWUFBWTtBQUFBLElBQ1YsZUFBZTtBQUFBLE1BQXFCLE1BQ2xDLDJCQUFPLGdDQUE4QjtBQUFBLElBQ3RDO0FBQUEsRUFDRjtBQUFBLEVBQ0QsT0FBTztBQUNMLFdBQU87QUFBQSxNQUNMLFlBQVk7QUFBQSxNQUNaLFNBQVM7QUFBQTtFQUVaO0FBQUEsRUFDRCxRQUFRO0FBQ04sVUFBTSxhQUFhO0FBQ25CLFVBQU0scUJBQXFCO0FBQzNCLFdBQU8sRUFBRSxZQUFZO0VBQ3RCO0FBQUEsRUFDRCxVQUFVO0FBQ1IsU0FBSyxXQUFXO0VBQ2pCO0FBQUEsRUFDRCxTQUFTO0FBQUEsSUFDUCxVQUFVLE1BQU07QUFDZCxXQUFLLGFBQWE7QUFBQSxJQUNuQjtBQUFBLElBQ0Qsa0JBQWtCO0FBQ2hCLFdBQUssaUJBQWlCO0lBQ3ZCO0FBQUEsSUFDRCxZQUFZO0FBQ1YsV0FBSyxVQUFVLEtBQUs7QUFDcEIsV0FBSyxNQUFNLGVBQWUsVUFBVSxJQUFJO0FBQUEsSUFDekM7QUFBQSxJQUNELHdCQUF3QjtBQUN0QixXQUFLLG1CQUFtQix1QkFDdEIsS0FBSyxtQkFBbUI7QUFDMUIsY0FBUSxJQUFJLElBQUk7QUFDaEIsV0FBSyxvQkFBbUI7QUFBQSxJQUN6QjtBQUFBLElBQ0QsZ0JBQWdCO0FBQ2QsVUFBSSxLQUFLLGlCQUFpQjtBQUN4QixhQUFLLGFBQWE7QUFDbEIsYUFBSyxNQUFNLGVBQWUsVUFBVSxJQUFJO0FBQUEsYUFDbkM7QUFDTCxhQUFLLFFBQVEsS0FBSyxFQUFFLE1BQU0sT0FBTyxPQUFPLEVBQUUsS0FBSyxLQUFLLFNBQU8sRUFBSztBQUFBLE1BQ2xFO0FBQUEsSUFDRDtBQUFBLElBQ0Qsa0JBQWtCO0FBQ2hCLFdBQUssV0FBVztBQUNoQixXQUFLLE1BQU0saUJBQWlCO0FBQUEsSUFDN0I7QUFBQSxJQUNELHNCQUFzQjtBQUNwQixZQUFNLFdBQVcsYUFBYSxXQUFXLFdBQVc7QUFDcEQsVUFBSSxhQUFhLE1BQU0sUUFBUSxHQUFHO0FBQ2hDLGVBQU87QUFBQSxNQUNUO0FBQ0EsbUJBQWEsb0JBQW9CO0FBQUEsUUFDL0IsV0FBVztBQUFBLFFBQ1gsa0JBQWtCLEtBQUssbUJBQW1CO0FBQUEsT0FDM0MsRUFDRSxLQUFLLENBQUMsU0FBUztBQUNkLGdCQUFRLElBQUksS0FBSztBQUNqQixhQUFLLE1BQU0sb0JBQW9CO0FBQUEsT0FDaEMsRUFDQSxNQUFNLENBQUMsVUFBVTtBQUFBLE9BQUUsRUFDbkIsS0FBSyxDQUFDLFNBQVM7QUFBQSxPQUFFO0FBQUEsSUFDckI7QUFBQSxFQUNGO0FBQ0g7QUFqSnNCLDRCQUFNLHFCQUFvQjs7O0VBd0I5QixPQUFNOzs7O0VBS0ssT0FBTTs7Ozs7SUFqRGpDQSxZQStFVztBQUFBLGtCQS9FUSxNQUFVO0FBQUEsbUVBQVYsTUFBVTtBQUFBLE1BQUUsVUFBUztBQUFBO3VCQUN0QyxNQTZFUztBQUFBLFFBN0VUQSxZQTZFUztBQUFBLDJCQTVFUCxNQTJFaUI7QUFBQSxZQTNFakJBLFlBMkVpQjtBQUFBLCtCQTFFZixNQVFFO0FBQUEsZ0JBUkZBLFlBUUU7QUFBQSxrQkFQUyxzQ0FBbUI7QUFBQSxrQkFBbkIsdUZBQW1CLG1CQUFnQjtBQUFBLGtCQUM1QyxnQkFBYTtBQUFBLGtCQUNiO0FBQUEsa0JBQ0E7QUFBQSxrQkFDQSxPQUFNO0FBQUEsa0JBQ0wsU0FBUyxPQUFrQixtQkFBQztBQUFBLGtCQUM1QixTQUFPLFNBQXFCO0FBQUE7Z0JBRy9CQSxZQStEUztBQUFBLG1DQTlEUCxNQXFCUztBQUFBLG9CQXJCVEEsWUFxQlMsNEJBckJJLEdBQVk7QUFBQSx1Q0FDdkIsTUFFaUI7QUFBQSx3QkFGakJBLFlBRWlCO0FBQUEsMEJBRkQsT0FBTTtBQUFBLDBCQUFRO0FBQUE7MkNBQzVCLE1BQWdFO0FBQUEsNEJBQWhFQSxZQUFnRTtBQUFBLDhCQUF4RCxPQUFNO0FBQUEsOEJBQU8sTUFBSztBQUFBLDhCQUF3QixNQUFLO0FBQUE7Ozs7d0JBRXpEQSxZQU1pQjtBQUFBLDJDQUxmLE1BSWU7QUFBQSw0QkFKZkEsWUFJZSw0QkFKSTtBQUFBLCtDQUNqQixNQUVPO0FBQUEsZ0NBRlBDLGdCQUVPLFFBRlAsWUFDS0Msa0NBQVcsT0FBTztBQUFBOzs7Ozs7d0JBSTNCRixZQVNpQjtBQUFBLDJDQVJmLE1BT0U7QUFBQSw0QkFQRkEsWUFPRTtBQUFBLDhCQU5DLFNBQU8sU0FBYTtBQUFBLDhCQUNyQjtBQUFBLDhCQUNBLE9BQU07QUFBQSw4QkFDTCxPQUFPLEtBQUU7QUFBQSw4QkFDVjtBQUFBLDhCQUNBO0FBQUE7Ozs7Ozs7b0JBSU5BLFlBdUNTLDRCQXZDSSxHQUFZO0FBQUEsdUNBQ3ZCLE1BRWlCO0FBQUEsd0JBRmpCQSxZQUVpQjtBQUFBLDBCQUZELE9BQU07QUFBQSwwQkFBUTtBQUFBOzJDQUM1QixNQUE0RDtBQUFBLDRCQUE1REEsWUFBNEQ7QUFBQSw4QkFBcEQsT0FBTTtBQUFBLDhCQUFPLE1BQUs7QUFBQSw4QkFBb0IsTUFBSztBQUFBOzs7O3dCQUVyREEsWUF3QmlCO0FBQUEsMkNBdkJmLE1Bc0JlO0FBQUEsNEJBdEJmQSxZQXNCZSw0QkF0Qkk7QUFBQSwrQ0FDakIsTUFNTztBQUFBLGdDQUxDLDBCQUFtQixtQkFBYyxjQUR6Q0csZ0NBTU8sUUFOUCxZQU1PRCxnQkFGRixPQUFrQixtQkFBQyxXQUFXLG9CQUFvQixJQUFHLHNCQUNyRCxPQUFrQixtQkFBQyxXQUFXLGNBQWMsV0FBVyxVQUU1REMsZ0NBYU8sUUFiUCxZQWFPO0FBQUEsbUNBWkxBLG9DQVdXQyxVQVZhLDJDQUFtQixtQkFBbEMsZ0JBQVc7NEZBQ1osZUFBVztBQUFBLHNDQUdnQiwwQkFBbUIsa0JBQWtCLFlBQVksc0JBRGxGQyxtQkFNV0Q7QUFBQSx3Q0FETkUsNENBQVksS0FBSztBQUFBOzs7Ozs7Ozs7O3dCQU05Qk4sWUFTaUI7QUFBQSwyQ0FSZixNQU9FO0FBQUEsNEJBUEZBLFlBT0U7QUFBQSw4QkFOQyxvREFBWSxNQUFLO0FBQUEsOEJBQ2xCO0FBQUEsOEJBQ0EsT0FBTTtBQUFBLDhCQUNMLE9BQU8sS0FBRTtBQUFBLDhCQUNWO0FBQUEsOEJBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVNkQSxZQUtFO0FBQUEsTUFKQSxLQUFJO0FBQUEsTUFDSCxVQUFRLEtBQU8sT0FBTztBQUFBLE1BQ3RCLG1CQUFrQixTQUFlO0FBQUEsTUFDakMsZUFBYyxLQUFXO0FBQUEiLCJuYW1lcyI6WyJfY3JlYXRlVk5vZGUiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyIsIl9vcGVuQmxvY2siLCJfRnJhZ21lbnQiLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX2NyZWF0ZVRleHRWTm9kZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0RlbGl2ZXJ5RGV0YWlscy52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8cS1kaWFsb2cgdi1tb2RlbD1cInNob3dfbW9kYWxcIiBwb3NpdGlvbj1cImJvdHRvbVwiPlxuICAgIDxxLWNhcmQ+XG4gICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDxxLWJ0bi10b2dnbGVcbiAgICAgICAgICB2LW1vZGVsPVwiRGVsaXZlcnlzY2hlZFN0b3JlLnRyYW5zYWN0aW9uX3R5cGVcIlxuICAgICAgICAgIHRvZ2dsZS1jb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICBjbGFzcz1cInJvdW5kZWQtZ3JvdXAgcS1tYi1zbVwiXG4gICAgICAgICAgOm9wdGlvbnM9XCJEZWxpdmVyeXNjaGVkU3RvcmUudHJhbnNhY3Rpb25fbGlzdFwiXG4gICAgICAgICAgQGNsaWNrPVwiY2hhbmdlVHJhbnNhY3Rpb25UeXBlXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8cS1saXN0PlxuICAgICAgICAgIDxxLWl0ZW0gY2xhc3M9XCJxLXBhLW5vbmVcIj5cbiAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBjbGFzcz1cImNvbC0xXCIgYXZhdGFyPlxuICAgICAgICAgICAgICA8cS1pY29uIGNvbG9yPVwiZ3JleVwiIG5hbWU9XCJsYXMgbGEtbWFwLW1hcmtlci1hbHRcIiBzaXplPVwiMjBweFwiIC8+XG4gICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGxpbmVzPVwiMVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC13ZWlnaHQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgICB7eyBQbGFjZVN0b3JlLmFkZHJlc3MgfX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlPlxuICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJDaGFuZ2VBZGRyZXNzXCJcbiAgICAgICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdDaGFuZ2UnKVwiXG4gICAgICAgICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgIDxxLWl0ZW0gY2xhc3M9XCJxLXBhLW5vbmVcIj5cbiAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBjbGFzcz1cImNvbC0xXCIgYXZhdGFyPlxuICAgICAgICAgICAgICA8cS1pY29uIGNvbG9yPVwiZ3JleVwiIG5hbWU9XCJldmEtY2xvY2stb3V0bGluZVwiIHNpemU9XCIyMHB4XCIgLz5cbiAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgbGluZXM9XCIxXCI+XG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgIHYtaWY9XCJEZWxpdmVyeXNjaGVkU3RvcmUud2hlbnRvX2RlbGl2ZXIgPT09ICdzY2hlZHVsZSdcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LXdlaWdodC1tZWRpdW1cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt7IERlbGl2ZXJ5c2NoZWRTdG9yZS50cmFuc19kYXRhLmRlbGl2ZXJ5X2RhdGVfcHJldHR5IH19XG4gICAgICAgICAgICAgICAgICB7eyBEZWxpdmVyeXNjaGVkU3RvcmUudHJhbnNfZGF0YS5kZWxpdmVyeV90aW1lLnByZXR0eV90aW1lIH19XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIHYtZWxzZSBjbGFzcz1cInRleHQtd2VpZ2h0LW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiaXRlbV9vcHRpb24gaW4gRGVsaXZlcnlzY2hlZFN0b3JlLmRlbGl2ZXJ5X29wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICA6a2V5PVwiaXRlbV9vcHRpb25cIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBEZWxpdmVyeXNjaGVkU3RvcmUud2hlbnRvX2RlbGl2ZXIgPT0gaXRlbV9vcHRpb24udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3sgaXRlbV9vcHRpb24ubGFiZWwgfX1cbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZT5cbiAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwidGhpcy4kZW1pdCgnc2hvd1NjaGVkJylcIlxuICAgICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ0NoYW5nZScpXCJcbiAgICAgICAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgIDwvcS1saXN0PlxuICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICA8L3EtY2FyZD5cbiAgPC9xLWRpYWxvZz5cblxuICA8Q2xpZW50QWRkcmVzc1xuICAgIHJlZj1cImNsaWVudF9hZGRyZXNzXCJcbiAgICA6cmVkaXJlY3Q9XCJ0aGlzLiRyb3V0ZS5wYXRoXCJcbiAgICBAYWZ0ZXItc2V0cGxhY2VpZD1cImFmdGVyU2V0cGxhY2VpZFwiXG4gICAgQGZpbGwtYWRkcmVzcz1cImZpbGxBZGRyZXNzXCJcbiAgLz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBkZWZpbmVBc3luY0NvbXBvbmVudCB9IGZyb20gXCJ2dWVcIjtcbi8vaW1wb3J0IEFQSWludGVyZmFjZSBmcm9tIFwic3JjL2FwaS9BUElpbnRlcmZhY2VcIjtcbmltcG9ydCB7IHVzZVBsYWNlU3RvcmUgfSBmcm9tIFwic3RvcmVzL1BsYWNlU3RvcmVcIjtcbmltcG9ydCB7IHVzZURlbGl2ZXJ5c2NoZWRTdG9yZSB9IGZyb20gXCJzdG9yZXMvRGVsaXZlcnlTY2hlZFwiO1xuaW1wb3J0IGF1dGggZnJvbSBcInNyYy9hcGkvYXV0aFwiO1xuaW1wb3J0IEFQSWludGVyZmFjZSBmcm9tIFwic3JjL2FwaS9BUElpbnRlcmZhY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIkRlbGl2ZXJ5RGV0YWlsc1wiLFxuICBwcm9wczogW1wiYmFja191cmxcIl0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBDbGllbnRBZGRyZXNzOiBkZWZpbmVBc3luY0NvbXBvbmVudCgoKSA9PlxuICAgICAgaW1wb3J0KFwiY29tcG9uZW50cy9DbGllbnRBZGRyZXNzLnZ1ZVwiKVxuICAgICksXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNob3dfbW9kYWw6IGZhbHNlLFxuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgfTtcbiAgfSxcbiAgc2V0dXAoKSB7XG4gICAgY29uc3QgUGxhY2VTdG9yZSA9IHVzZVBsYWNlU3RvcmUoKTtcbiAgICBjb25zdCBEZWxpdmVyeXNjaGVkU3RvcmUgPSB1c2VEZWxpdmVyeXNjaGVkU3RvcmUoKTtcbiAgICByZXR1cm4geyBQbGFjZVN0b3JlLCBEZWxpdmVyeXNjaGVkU3RvcmUgfTtcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLlBsYWNlU3RvcmUuZ2V0UGxhY2UoKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHNob3dNb2RhbChkYXRhKSB7XG4gICAgICB0aGlzLnNob3dfbW9kYWwgPSBkYXRhO1xuICAgIH0sXG4gICAgVHJhbnNhY3Rpb25JbmZvKCkge1xuICAgICAgdGhpcy50cmFuc2FjdGlvblN0b3JlLlRyYW5zYWN0aW9uSW5mbygpO1xuICAgIH0sXG4gICAgc2hvd1NjaGVkKCkge1xuICAgICAgdGhpcy5zaG93TW9kYWwoZmFsc2UpO1xuICAgICAgdGhpcy4kcmVmcy5kZWxpdmVyeV9zY2hlZC5zaG93U2NoZWQodHJ1ZSk7XG4gICAgfSxcbiAgICBjaGFuZ2VUcmFuc2FjdGlvblR5cGUoKSB7XG4gICAgICB0aGlzLkRlbGl2ZXJ5c2NoZWRTdG9yZS5uZXdfdHJhbnNhY3Rpb25fdHlwZSA9XG4gICAgICAgIHRoaXMuRGVsaXZlcnlzY2hlZFN0b3JlLnRyYW5zYWN0aW9uX3R5cGU7XG4gICAgICBjb25zb2xlLmxvZyhcImQyXCIpO1xuICAgICAgdGhpcy5zYXZlVHJhbnNhY3Rpb25UeXBlKCk7XG4gICAgfSxcbiAgICBDaGFuZ2VBZGRyZXNzKCkge1xuICAgICAgaWYgKGF1dGguYXV0aGVudGljYXRlZCgpKSB7XG4gICAgICAgIHRoaXMuc2hvd19tb2RhbCA9IGZhbHNlO1xuICAgICAgICB0aGlzLiRyZWZzLmNsaWVudF9hZGRyZXNzLnNob3dNb2RhbCh0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgbmFtZTogXCJtYXBcIiwgcXVlcnk6IHsgdXJsOiB0aGlzLmJhY2tfdXJsIH0gfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBhZnRlclNldHBsYWNlaWQoKSB7XG4gICAgICB0aGlzLlBsYWNlU3RvcmUuZ2V0UGxhY2UoKTtcbiAgICAgIHRoaXMuJGVtaXQoXCJhZnRlclNldHBsYWNlaWRcIik7XG4gICAgfSxcbiAgICBzYXZlVHJhbnNhY3Rpb25UeXBlKCkge1xuICAgICAgY29uc3QgY2FydFVVSUQgPSBBUElpbnRlcmZhY2UuZ2V0U3RvcmFnZShcImNhcnRfdXVpZFwiKTtcbiAgICAgIGlmIChBUElpbnRlcmZhY2UuZW1wdHkoY2FydFVVSUQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIEFQSWludGVyZmFjZS5zYXZlVHJhbnNhY3Rpb25UeXBlKHtcbiAgICAgICAgY2FydF91dWlkOiBjYXJ0VVVJRCxcbiAgICAgICAgdHJhbnNhY3Rpb25fdHlwZTogdGhpcy5EZWxpdmVyeXNjaGVkU3RvcmUudHJhbnNhY3Rpb25fdHlwZSxcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJmaW5cIik7XG4gICAgICAgICAgdGhpcy4kZW1pdChcImFmdGVyU2F2ZXRyYW5zdHlwZVwiKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge30pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7fSk7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiJdLCJmaWxlIjoiYXNzZXRzL0RlbGl2ZXJ5RGV0YWlscy4yNDgyMDg1Zi5qcyJ9
