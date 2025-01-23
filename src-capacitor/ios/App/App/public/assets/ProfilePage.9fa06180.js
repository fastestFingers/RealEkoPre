import { _ as _export_sfc, l as defineAsyncComponent, aw as auth, n as resolveComponent, p as openBlock, V as createElementBlock, f as createVNode, t as withCtx, F as Fragment, Y as QBtn, a8 as QCard, a9 as QCardSection, U as createBaseVNode, ae as QAvatar, Z as toDisplayString, b2 as QSeparator, ac as QItem, ad as QItemSection, u as __vitePreload, a6 as createTextVNode } from "./index.61ed5618.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QSpace } from "./QSpace.f164c087.js";
import { Q as QImg } from "./QImg.6c27044c.js";
import { Q as QItemLabel } from "./QItemLabel.a9365c5b.js";
import { Q as QList } from "./QList.b69a7e5b.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import "./QResizeObserver.d08dce3c.js";
const _sfc_main = {
  name: "ProfilePage",
  data() {
    return {
      data: []
    };
  },
  components: {
    NotiButton: defineAsyncComponent(() => __vitePreload(() => import("./NotiButton.be9405d3.js"), true ? ["assets/NotiButton.be9405d3.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QBadge.6d32ed43.js"] : void 0))
  },
  mounted() {
    this.data = auth.getUser();
  },
  methods: {
    logout() {
      this.$q.dialog({
        title: "Logout",
        message: "Are you sure you want to logout?",
        persistent: true,
        position: "bottom",
        ok: {
          unelevated: true,
          color: "warning",
          rounded: false,
          "text-color": "black",
          size: "md",
          label: "Yes",
          "no-caps": true
        },
        cancel: {
          unelevated: true,
          rounded: false,
          color: "grey-3",
          "text-color": "black",
          size: "md",
          label: "Cancel",
          "no-caps": true
        }
      }).onOk(() => {
        auth.logout();
        this.$router.push("/home");
      }).onOk(() => {
      }).onCancel(() => {
      }).onDismiss(() => {
      });
    }
  }
};
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" Profile ");
const _hoisted_2 = { class: "text-center q-mb-lg" };
const _hoisted_3 = { class: "text-h6 text-weight-bold line-normal" };
const _hoisted_4 = { class: "font12 text-grey" };
const _hoisted_5 = /* @__PURE__ */ createTextVNode("Settings");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("Change Password");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("Manage Account");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NotiButton = resolveComponent("NotiButton");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(QHeader, { class: "bg-white" }, {
      default: withCtx(() => [
        createVNode(QToolbar, null, {
          default: withCtx(() => [
            createVNode(QBtn, {
              to: "/account-menu",
              flat: "",
              round: "",
              dense: "",
              icon: "arrow_back",
              color: "dark"
            }),
            createVNode(QToolbarTitle, { class: "text-dark text-center text-weight-bold" }, {
              default: withCtx(() => [
                _hoisted_1
              ]),
              _: 1
            }),
            createVNode(_component_NotiButton)
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    createVNode(QPage, {
      padding: "",
      class: "bg-grey-2"
    }, {
      default: withCtx(() => [
        createVNode(QSpace, { class: "q-pa-xs" }),
        createVNode(QCard, {
          flat: "",
          class: "radius8"
        }, {
          default: withCtx(() => [
            createVNode(QCardSection, null, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_2, [
                  createVNode(QAvatar, null, {
                    default: withCtx(() => [
                      createVNode(QImg, {
                        src: $data.data.avatar,
                        lazy: "",
                        style: { "height": "50px", "max-width": "50px" },
                        "spinner-color": "amber",
                        "spinner-size": "20px"
                      }, null, 8, ["src"])
                    ]),
                    _: 1
                  }),
                  createBaseVNode("div", _hoisted_3, toDisplayString($data.data.first_name) + " " + toDisplayString($data.data.last_name), 1),
                  createBaseVNode("div", _hoisted_4, toDisplayString($data.data.email_address), 1),
                  createVNode(QSpace, { class: "q-pa-xs" }),
                  createVNode(QBtn, {
                    to: "/account/edit-profile",
                    label: "Edit Profile",
                    flat: "",
                    dense: "",
                    "text-color": "amber-14",
                    "no-caps": ""
                  })
                ]),
                createVNode(QSeparator),
                createVNode(QList, null, {
                  default: withCtx(() => [
                    createVNode(QItem, {
                      clickable: "",
                      to: "/account/settings"
                    }, {
                      default: withCtx(() => [
                        createVNode(QItemSection, {
                          avatar: "",
                          style: { "min-width": "auto" }
                        }, {
                          default: withCtx(() => [
                            createVNode(QAvatar, {
                              rounded: "",
                              color: "amber-2",
                              "text-color": "orange-5",
                              icon: "eva-settings-outline",
                              size: "md"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(QItemSection, null, {
                          default: withCtx(() => [
                            createVNode(QItemLabel, { class: "text-weight-medium line-normal ellipsis full-width" }, {
                              default: withCtx(() => [
                                _hoisted_5
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(QItemSection, { side: "" }, {
                          default: withCtx(() => [
                            createVNode(QBtn, {
                              round: "",
                              unelevated: "",
                              "text-color": "dark",
                              icon: "chevron_right",
                              dense: ""
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(QItem, {
                      clickable: "",
                      to: "/account/change-password"
                    }, {
                      default: withCtx(() => [
                        createVNode(QItemSection, {
                          avatar: "",
                          style: { "min-width": "auto" }
                        }, {
                          default: withCtx(() => [
                            createVNode(QAvatar, {
                              rounded: "",
                              color: "amber-2",
                              "text-color": "orange-5",
                              icon: "las la-lock-open",
                              size: "md"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(QItemSection, null, {
                          default: withCtx(() => [
                            createVNode(QItemLabel, { class: "text-weight-medium line-normal ellipsis full-width" }, {
                              default: withCtx(() => [
                                _hoisted_6
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(QItemSection, { side: "" }, {
                          default: withCtx(() => [
                            createVNode(QBtn, {
                              round: "",
                              unelevated: "",
                              "text-color": "dark",
                              icon: "chevron_right",
                              dense: ""
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(QItem, {
                      clickable: "",
                      to: "/account/manage-account"
                    }, {
                      default: withCtx(() => [
                        createVNode(QItemSection, {
                          avatar: "",
                          style: { "min-width": "auto" }
                        }, {
                          default: withCtx(() => [
                            createVNode(QAvatar, {
                              rounded: "",
                              color: "amber-2",
                              "text-color": "orange-5",
                              icon: "person_outline",
                              size: "md"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(QItemSection, null, {
                          default: withCtx(() => [
                            createVNode(QItemLabel, { class: "text-weight-medium line-normal ellipsis full-width" }, {
                              default: withCtx(() => [
                                _hoisted_7
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(QItemSection, { side: "" }, {
                          default: withCtx(() => [
                            createVNode(QBtn, {
                              round: "",
                              unelevated: "",
                              "text-color": "dark",
                              icon: "chevron_right",
                              dense: ""
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
        })
      ]),
      _: 1
    })
  ], 64);
}
var ProfilePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "ProfilePage.vue"]]);
export { ProfilePage as default };
//# sourceMappingURL=data:application/json;base64,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QTt1Q0FDbkIsTUFTaUI7QUFBQSx3QkFUakJBLFlBU2lCO0FBQUEsMEJBVEQ7QUFBQSwwQkFBTyxTQUF1QjtBQUFBOzJDQUU1QyxNQU1FO0FBQUEsNEJBTkZBLFlBTUU7QUFBQSw4QkFMQTtBQUFBLDhCQUNBLE9BQU07QUFBQSw4QkFDTixjQUFXO0FBQUEsOEJBQ1gsTUFBSztBQUFBLDhCQUNMLE1BQUs7QUFBQTs7Ozt3QkFHVEEsWUFLaUI7QUFBQSwyQ0FKZixNQUdDO0FBQUEsNEJBSERBLFlBR0MsMEVBRjJEO0FBQUEsK0NBQ3pELE1BQWM7QUFBQTs7Ozs7Ozt3QkFHbkJBLFlBUWlCO0FBQUEsMkNBUGYsTUFNRTtBQUFBLDRCQU5GQSxZQU1FO0FBQUEsOEJBTEE7QUFBQSw4QkFDQTtBQUFBLDhCQUNBLGNBQVc7QUFBQSw4QkFDWCxNQUFLO0FBQUEsOEJBQ0w7QUFBQSIsIm5hbWVzIjpbIl9jcmVhdGVWTm9kZSIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhZ2VzL0FjY291bnQvUHJvZmlsZVBhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHEtaGVhZGVyIGNsYXNzPVwiYmctd2hpdGVcIj5cbiAgICA8cS10b29sYmFyPlxuICAgICAgPHEtYnRuXG4gICAgICAgIHRvPVwiL2FjY291bnQtbWVudVwiXG4gICAgICAgIGZsYXRcbiAgICAgICAgcm91bmRcbiAgICAgICAgZGVuc2VcbiAgICAgICAgaWNvbj1cImFycm93X2JhY2tcIlxuICAgICAgICBjb2xvcj1cImRhcmtcIlxuICAgICAgLz5cbiAgICAgIDxxLXRvb2xiYXItdGl0bGUgY2xhc3M9XCJ0ZXh0LWRhcmsgdGV4dC1jZW50ZXIgdGV4dC13ZWlnaHQtYm9sZFwiPlxuICAgICAgICBQcm9maWxlXG4gICAgICA8L3EtdG9vbGJhci10aXRsZT5cbiAgICAgIDxOb3RpQnV0dG9uPjwvTm90aUJ1dHRvbj5cbiAgICA8L3EtdG9vbGJhcj5cbiAgPC9xLWhlYWRlcj5cblxuICA8cS1wYWdlIHBhZGRpbmcgY2xhc3M9XCJiZy1ncmV5LTJcIj5cbiAgICA8cS1zcGFjZSBjbGFzcz1cInEtcGEteHNcIj48L3Etc3BhY2U+XG4gICAgPHEtY2FyZCBmbGF0IGNsYXNzPVwicmFkaXVzOFwiPlxuICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgcS1tYi1sZ1wiPlxuICAgICAgICAgIDxxLWF2YXRhcj5cbiAgICAgICAgICAgIDxxLWltZ1xuICAgICAgICAgICAgICA6c3JjPVwiZGF0YS5hdmF0YXJcIlxuICAgICAgICAgICAgICBsYXp5XG4gICAgICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiA1MHB4OyBtYXgtd2lkdGg6IDUwcHhcIlxuICAgICAgICAgICAgICBzcGlubmVyLWNvbG9yPVwiYW1iZXJcIlxuICAgICAgICAgICAgICBzcGlubmVyLXNpemU9XCIyMHB4XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9xLWF2YXRhcj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNiB0ZXh0LXdlaWdodC1ib2xkIGxpbmUtbm9ybWFsXCI+XG4gICAgICAgICAgICB7eyBkYXRhLmZpcnN0X25hbWUgfX0ge3sgZGF0YS5sYXN0X25hbWUgfX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udDEyIHRleHQtZ3JleVwiPnt7IGRhdGEuZW1haWxfYWRkcmVzcyB9fTwvZGl2PlxuICAgICAgICAgIDxxLXNwYWNlIGNsYXNzPVwicS1wYS14c1wiPjwvcS1zcGFjZT5cblxuICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgdG89XCIvYWNjb3VudC9lZGl0LXByb2ZpbGVcIlxuICAgICAgICAgICAgbGFiZWw9XCJFZGl0IFByb2ZpbGVcIlxuICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgIHRleHQtY29sb3I9XCJhbWJlci0xNFwiXG4gICAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwhLS0gY2VudGVyIC0tPlxuXG4gICAgICAgIDxxLXNlcGFyYXRvcj48L3Etc2VwYXJhdG9yPlxuXG4gICAgICAgIDxxLWxpc3Q+XG4gICAgICAgICAgPHEtaXRlbSBjbGlja2FibGUgdG89XCIvYWNjb3VudC9zZXR0aW5nc1wiPlxuICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhciBzdHlsZT1cIm1pbi13aWR0aDogYXV0b1wiPlxuICAgICAgICAgICAgICA8IS0tIDxxLWljb24gY29sb3I9XCJncmV5XCIgbmFtZT1cImV2YS1zZXR0aW5ncy1vdXRsaW5lXCIgc2l6ZT1cInhzXCIgLz4gLS0+XG4gICAgICAgICAgICAgIDxxLWF2YXRhclxuICAgICAgICAgICAgICAgIHJvdW5kZWRcbiAgICAgICAgICAgICAgICBjb2xvcj1cImFtYmVyLTJcIlxuICAgICAgICAgICAgICAgIHRleHQtY29sb3I9XCJvcmFuZ2UtNVwiXG4gICAgICAgICAgICAgICAgaWNvbj1cImV2YS1zZXR0aW5ncy1vdXRsaW5lXCJcbiAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbFxuICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC13ZWlnaHQtbWVkaXVtIGxpbmUtbm9ybWFsIGVsbGlwc2lzIGZ1bGwtd2lkdGhcIlxuICAgICAgICAgICAgICAgID5TZXR0aW5nczwvcS1pdGVtLWxhYmVsXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZT5cbiAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgcm91bmRcbiAgICAgICAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgICAgICAgdGV4dC1jb2xvcj1cImRhcmtcIlxuICAgICAgICAgICAgICAgIGljb249XCJjaGV2cm9uX3JpZ2h0XCJcbiAgICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8L3EtaXRlbT5cblxuICAgICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlIHRvPVwiL2FjY291bnQvY2hhbmdlLXBhc3N3b3JkXCI+XG4gICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyIHN0eWxlPVwibWluLXdpZHRoOiBhdXRvXCI+XG4gICAgICAgICAgICAgIDwhLS0gPHEtaWNvbiBjb2xvcj1cImdyZXlcIiBuYW1lPVwibGFzIGxhLWxvY2stb3BlblwiIHNpemU9XCJ4c1wiIC8+IC0tPlxuICAgICAgICAgICAgICA8cS1hdmF0YXJcbiAgICAgICAgICAgICAgICByb3VuZGVkXG4gICAgICAgICAgICAgICAgY29sb3I9XCJhbWJlci0yXCJcbiAgICAgICAgICAgICAgICB0ZXh0LWNvbG9yPVwib3JhbmdlLTVcIlxuICAgICAgICAgICAgICAgIGljb249XCJsYXMgbGEtbG9jay1vcGVuXCJcbiAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbFxuICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC13ZWlnaHQtbWVkaXVtIGxpbmUtbm9ybWFsIGVsbGlwc2lzIGZ1bGwtd2lkdGhcIlxuICAgICAgICAgICAgICAgID5DaGFuZ2UgUGFzc3dvcmQ8L3EtaXRlbS1sYWJlbFxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgICAgICAgIHRleHQtY29sb3I9XCJkYXJrXCJcbiAgICAgICAgICAgICAgICBpY29uPVwiY2hldnJvbl9yaWdodFwiXG4gICAgICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPC9xLWl0ZW0+XG5cbiAgICAgICAgICA8cS1pdGVtIGNsaWNrYWJsZSB0bz1cIi9hY2NvdW50L21hbmFnZS1hY2NvdW50XCI+XG4gICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyIHN0eWxlPVwibWluLXdpZHRoOiBhdXRvXCI+XG4gICAgICAgICAgICAgIDwhLS0gPHEtaWNvbiBjb2xvcj1cImdyZXlcIiBuYW1lPVwicGVyc29uX291dGxpbmVcIiBzaXplPVwieHNcIiAvPiAtLT5cbiAgICAgICAgICAgICAgPHEtYXZhdGFyXG4gICAgICAgICAgICAgICAgcm91bmRlZFxuICAgICAgICAgICAgICAgIGNvbG9yPVwiYW1iZXItMlwiXG4gICAgICAgICAgICAgICAgdGV4dC1jb2xvcj1cIm9yYW5nZS01XCJcbiAgICAgICAgICAgICAgICBpY29uPVwicGVyc29uX291dGxpbmVcIlxuICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LXdlaWdodC1tZWRpdW0gbGluZS1ub3JtYWwgZWxsaXBzaXMgZnVsbC13aWR0aFwiXG4gICAgICAgICAgICAgICAgPk1hbmFnZSBBY2NvdW50PC9xLWl0ZW0tbGFiZWxcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlPlxuICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICByb3VuZFxuICAgICAgICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICAgICAgICB0ZXh0LWNvbG9yPVwiZGFya1wiXG4gICAgICAgICAgICAgICAgaWNvbj1cImNoZXZyb25fcmlnaHRcIlxuICAgICAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDwvcS1pdGVtPlxuXG4gICAgICAgICAgPCEtLSA8cS1zZXBhcmF0b3Igc3BhY2VkPjwvcS1zZXBhcmF0b3I+IC0tPlxuXG4gICAgICAgICAgPCEtLSA8cS1pdGVtIGNsaWNrYWJsZSBAY2xpY2s9XCJsb2dvdXRcIiA+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyIHN0eWxlPVwibWluLXdpZHRoOmF1dG87XCIgID5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1hdmF0YXIgcm91bmRlZCBjb2xvcj1cImFtYmVyLTE0XCIgdGV4dC1jb2xvcj1cIndoaXRlXCIgaWNvbj1cImV2YS1sb2ctb3V0LW91dGxpbmVcIiBzaXplPVwibWRcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNsYXNzPVwidGV4dC13ZWlnaHQtbWVkaXVtIGxpbmUtbm9ybWFsIGVsbGlwc2lzIGZ1bGwtd2lkdGhcIj5Mb2cgb3V0PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICAgICAgICAgICAgICAgIDxxLWJ0biByb3VuZCAgdW5lbGV2YXRlZCB0ZXh0LWNvbG9yPVwiZGFya1wiIGljb249XCJjaGV2cm9uX3JpZ2h0XCIgZGVuc2UgLz5cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0+IC0tPlxuICAgICAgICA8L3EtbGlzdD5cbiAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgPC9xLWNhcmQ+XG4gIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBhdXRoIGZyb20gXCJzcmMvYXBpL2F1dGhcIjtcbmltcG9ydCB7IGRlZmluZUFzeW5jQ29tcG9uZW50IH0gZnJvbSBcInZ1ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiUHJvZmlsZVBhZ2VcIixcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogW10sXG4gICAgfTtcbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIE5vdGlCdXR0b246IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+IGltcG9ydChcImNvbXBvbmVudHMvTm90aUJ1dHRvbi52dWVcIikpLFxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuZGF0YSA9IGF1dGguZ2V0VXNlcigpO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgbG9nb3V0KCkge1xuICAgICAgdGhpcy4kcVxuICAgICAgICAuZGlhbG9nKHtcbiAgICAgICAgICB0aXRsZTogXCJMb2dvdXRcIixcbiAgICAgICAgICBtZXNzYWdlOiBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBsb2dvdXQ/XCIsXG4gICAgICAgICAgcGVyc2lzdGVudDogdHJ1ZSxcbiAgICAgICAgICBwb3NpdGlvbjogXCJib3R0b21cIixcbiAgICAgICAgICBvazoge1xuICAgICAgICAgICAgdW5lbGV2YXRlZDogdHJ1ZSxcbiAgICAgICAgICAgIGNvbG9yOiBcIndhcm5pbmdcIixcbiAgICAgICAgICAgIHJvdW5kZWQ6IGZhbHNlLFxuICAgICAgICAgICAgXCJ0ZXh0LWNvbG9yXCI6IFwiYmxhY2tcIixcbiAgICAgICAgICAgIHNpemU6IFwibWRcIixcbiAgICAgICAgICAgIGxhYmVsOiBcIlllc1wiLFxuICAgICAgICAgICAgXCJuby1jYXBzXCI6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjYW5jZWw6IHtcbiAgICAgICAgICAgIHVuZWxldmF0ZWQ6IHRydWUsXG4gICAgICAgICAgICByb3VuZGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbG9yOiBcImdyZXktM1wiLFxuICAgICAgICAgICAgXCJ0ZXh0LWNvbG9yXCI6IFwiYmxhY2tcIixcbiAgICAgICAgICAgIHNpemU6IFwibWRcIixcbiAgICAgICAgICAgIGxhYmVsOiBcIkNhbmNlbFwiLFxuICAgICAgICAgICAgXCJuby1jYXBzXCI6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgLm9uT2soKCkgPT4ge1xuICAgICAgICAgIGF1dGgubG9nb3V0KCk7XG4gICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goXCIvaG9tZVwiKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uT2soKCkgPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCc+Pj4+IHNlY29uZCBPSyBjYXRjaGVyJylcbiAgICAgICAgfSlcbiAgICAgICAgLm9uQ2FuY2VsKCgpID0+IHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnPj4+PiBDYW5jZWwnKVxuICAgICAgICB9KVxuICAgICAgICAub25EaXNtaXNzKCgpID0+IHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnSSBhbSB0cmlnZ2VyZWQgb24gYm90aCBPSyBhbmQgQ2FuY2VsJylcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiJdLCJmaWxlIjoiYXNzZXRzL1Byb2ZpbGVQYWdlLjlmYTA2MTgwLmpzIn0=
