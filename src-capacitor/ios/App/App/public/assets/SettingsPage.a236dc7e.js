import { _ as _export_sfc, m as APIinterface, aP as FCM, bC as config, p as openBlock, V as createElementBlock, f as createVNode, t as withCtx, F as Fragment, Y as QBtn, a6 as createTextVNode, Z as toDisplayString, q as createBlock, ac as QItem, ad as QItemSection, bA as QToggle, a8 as QCard } from "./index.61ed5618.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QInnerLoading } from "./QInnerLoading.abe2afe6.js";
import { Q as QItemLabel } from "./QItemLabel.a9365c5b.js";
import { Q as QList } from "./QList.b69a7e5b.js";
import { Q as QFooter } from "./QFooter.571ac042.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import "./QResizeObserver.d08dce3c.js";
const _sfc_main = {
  name: "SettingsPage",
  data() {
    return {
      loading: false,
      loading2: false,
      data: [],
      app_push_notifications: false,
      app_sms_notifications: false,
      offers_email_notifications: false,
      promotional_push_notifications: false
    };
  },
  mounted() {
    this.getSettings();
  },
  methods: {
    getSettings() {
      this.loading = true;
      APIinterface.getSettings().then((data) => {
        this.app_push_notifications = data.details.app_push_notifications === "1";
        this.app_sms_notifications = data.details.app_sms_notifications === "1";
        this.offers_email_notifications = data.details.offers_email_notifications === "1";
        this.promotional_push_notifications = data.details.promotional_push_notifications === "1";
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data) => {
        this.loading = false;
      });
    },
    saveSettings() {
      this.loading2 = true;
      const $data = {
        app_push_notifications: this.app_push_notifications,
        app_sms_notifications: this.app_sms_notifications,
        offers_email_notifications: this.offers_email_notifications,
        promotional_push_notifications: this.promotional_push_notifications
      };
      APIinterface.saveSettings($data).then((data) => {
        APIinterface.notify("dark", data.msg, "check", this.$q);
        const $appPush = data.details.app_push_notifications;
        if (this.$q.platform.is.mobile) {
          if ($appPush) {
            console.debug("subscribe");
            FCM.subscribeTo({ topic: config.topic }).then((r) => console.debug("subscribed to topic")).catch((err) => console.log(err));
          } else {
            console.debug("un-subscribe");
            FCM.unsubscribeFrom({ topic: config.topic }).then(() => console.debug("unsubscribed from topic")).catch((err) => console.log(err));
          }
        }
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data) => {
        this.loading2 = false;
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(QHeader, {
      reveal: "",
      "reveal-offset": "50",
      class: "bg-grey-1 text-dark"
    }, {
      default: withCtx(() => [
        createVNode(QToolbar, null, {
          default: withCtx(() => [
            createVNode(QBtn, {
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$router.back()),
              flat: "",
              round: "",
              dense: "",
              icon: "las la-angle-left",
              class: "q-mr-sm",
              color: "dark"
            }),
            createVNode(QToolbarTitle, { class: "text-weight-bold" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("Settings")), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    createVNode(QPage, {
      padding: "",
      class: "bg-grey-1 q-pl-md q-pr-md row items-stretch"
    }, {
      default: withCtx(() => [
        $data.loading ? (openBlock(), createBlock(QInnerLoading, {
          key: 0,
          showing: true,
          color: "primary",
          size: "md",
          "label-class": "dark",
          class: "transparent"
        })) : (openBlock(), createBlock(QCard, {
          key: 1,
          flat: "",
          class: "radius8 col-12"
        }, {
          default: withCtx(() => [
            createVNode(QList, null, {
              default: withCtx(() => [
                createVNode(QItem, null, {
                  default: withCtx(() => [
                    createVNode(QItemSection, null, {
                      default: withCtx(() => [
                        createVNode(QItemLabel, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("Receive push notifications")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, { side: "" }, {
                      default: withCtx(() => [
                        createVNode(QToggle, {
                          modelValue: $data.app_push_notifications,
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.app_push_notifications = $event)
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(QItem, null, {
                  default: withCtx(() => [
                    createVNode(QItemSection, null, {
                      default: withCtx(() => [
                        createVNode(QItemLabel, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("Receive SMS notifications")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, { side: "" }, {
                      default: withCtx(() => [
                        createVNode(QToggle, {
                          modelValue: $data.app_sms_notifications,
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.app_sms_notifications = $event)
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(QItem, null, {
                  default: withCtx(() => [
                    createVNode(QItemSection, null, {
                      default: withCtx(() => [
                        createVNode(QItemLabel, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("Promotional Push notifications")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, { side: "" }, {
                      default: withCtx(() => [
                        createVNode(QToggle, {
                          modelValue: $data.promotional_push_notifications,
                          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.promotional_push_notifications = $event)
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(QItem, null, {
                  default: withCtx(() => [
                    createVNode(QItemSection, null, {
                      default: withCtx(() => [
                        createVNode(QItemLabel, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("Receive offers by email")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, { side: "" }, {
                      default: withCtx(() => [
                        createVNode(QToggle, {
                          modelValue: $data.offers_email_notifications,
                          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.offers_email_notifications = $event)
                        }, null, 8, ["modelValue"])
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
        })),
        createVNode(QFooter, {
          reveal: "",
          class: "bg-grey-1 q-pl-md q-pr-md q-pb-sm q-pt-sm text-dark"
        }, {
          default: withCtx(() => [
            createVNode(QBtn, {
              onClick: $options.saveSettings,
              loading: $data.loading2,
              label: _ctx.$t("Save"),
              unelevated: "",
              "no-caps": "",
              color: "primary text-white",
              class: "full-width text-weight-bold",
              size: "lg"
            }, null, 8, ["onClick", "loading", "label"])
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ], 64);
}
var SettingsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "SettingsPage.vue"]]);
export { SettingsPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2V0dGluZ3NQYWdlLmEyMzZkYzdlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvQWNjb3VudC9TZXR0aW5nc1BhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHEtaGVhZGVyIHJldmVhbCByZXZlYWwtb2Zmc2V0PVwiNTBcIiBjbGFzcz1cImJnLWdyZXktMSB0ZXh0LWRhcmtcIj5cbiAgICA8cS10b29sYmFyPlxuICAgICAgPHEtYnRuXG4gICAgICAgIEBjbGljaz1cIiRyb3V0ZXIuYmFjaygpXCJcbiAgICAgICAgZmxhdFxuICAgICAgICByb3VuZFxuICAgICAgICBkZW5zZVxuICAgICAgICBpY29uPVwibGFzIGxhLWFuZ2xlLWxlZnRcIlxuICAgICAgICBjbGFzcz1cInEtbXItc21cIlxuICAgICAgICBjb2xvcj1cImRhcmtcIlxuICAgICAgLz5cbiAgICAgIDxxLXRvb2xiYXItdGl0bGUgY2xhc3M9XCJ0ZXh0LXdlaWdodC1ib2xkXCI+e3tcbiAgICAgICAgJHQoXCJTZXR0aW5nc1wiKVxuICAgICAgfX08L3EtdG9vbGJhci10aXRsZT5cbiAgICA8L3EtdG9vbGJhcj5cbiAgPC9xLWhlYWRlcj5cblxuICA8cS1wYWdlIHBhZGRpbmcgY2xhc3M9XCJiZy1ncmV5LTEgcS1wbC1tZCBxLXByLW1kIHJvdyBpdGVtcy1zdHJldGNoXCI+XG4gICAgPHEtaW5uZXItbG9hZGluZ1xuICAgICAgdi1pZj1cImxvYWRpbmdcIlxuICAgICAgOnNob3dpbmc9XCJ0cnVlXCJcbiAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICBzaXplPVwibWRcIlxuICAgICAgbGFiZWwtY2xhc3M9XCJkYXJrXCJcbiAgICAgIGNsYXNzPVwidHJhbnNwYXJlbnRcIlxuICAgIC8+XG5cbiAgICA8cS1jYXJkIHYtZWxzZSBmbGF0IGNsYXNzPVwicmFkaXVzOCBjb2wtMTJcIj5cbiAgICAgIDxxLWxpc3Q+XG4gICAgICAgIDxxLWl0ZW0+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgPHEtaXRlbS1sYWJlbD57eyAkdChcIlJlY2VpdmUgcHVzaCBub3RpZmljYXRpb25zXCIpIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZT5cbiAgICAgICAgICAgIDxxLXRvZ2dsZSB2LW1vZGVsPVwiYXBwX3B1c2hfbm90aWZpY2F0aW9uc1wiIC8+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPC9xLWl0ZW0+XG5cbiAgICAgICAgPHEtaXRlbT5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8cS1pdGVtLWxhYmVsPnt7ICR0KFwiUmVjZWl2ZSBTTVMgbm90aWZpY2F0aW9uc1wiKSB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICAgICAgICA8cS10b2dnbGUgdi1tb2RlbD1cImFwcF9zbXNfbm90aWZpY2F0aW9uc1wiIC8+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPC9xLWl0ZW0+XG5cbiAgICAgICAgPHEtaXRlbT5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8cS1pdGVtLWxhYmVsPnt7XG4gICAgICAgICAgICAgICR0KFwiUHJvbW90aW9uYWwgUHVzaCBub3RpZmljYXRpb25zXCIpXG4gICAgICAgICAgICB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICAgICAgICA8cS10b2dnbGUgdi1tb2RlbD1cInByb21vdGlvbmFsX3B1c2hfbm90aWZpY2F0aW9uc1wiIC8+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPC9xLWl0ZW0+XG5cbiAgICAgICAgPHEtaXRlbT5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8cS1pdGVtLWxhYmVsPnt7ICR0KFwiUmVjZWl2ZSBvZmZlcnMgYnkgZW1haWxcIikgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlPlxuICAgICAgICAgICAgPHEtdG9nZ2xlIHYtbW9kZWw9XCJvZmZlcnNfZW1haWxfbm90aWZpY2F0aW9uc1wiIC8+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPC9xLWl0ZW0+XG4gICAgICA8L3EtbGlzdD5cbiAgICA8L3EtY2FyZD5cblxuICAgIDxxLWZvb3RlclxuICAgICAgcmV2ZWFsXG4gICAgICBjbGFzcz1cImJnLWdyZXktMSBxLXBsLW1kIHEtcHItbWQgcS1wYi1zbSBxLXB0LXNtIHRleHQtZGFya1wiXG4gICAgPlxuICAgICAgPHEtYnRuXG4gICAgICAgIEBjbGljaz1cInNhdmVTZXR0aW5nc1wiXG4gICAgICAgIDpsb2FkaW5nPVwibG9hZGluZzJcIlxuICAgICAgICA6bGFiZWw9XCIkdCgnU2F2ZScpXCJcbiAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICBuby1jYXBzXG4gICAgICAgIGNvbG9yPVwicHJpbWFyeSB0ZXh0LXdoaXRlXCJcbiAgICAgICAgY2xhc3M9XCJmdWxsLXdpZHRoIHRleHQtd2VpZ2h0LWJvbGRcIlxuICAgICAgICBzaXplPVwibGdcIlxuICAgICAgLz5cbiAgICA8L3EtZm9vdGVyPlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBGQ00gfSBmcm9tIFwiQGNhcGFjaXRvci1jb21tdW5pdHkvZmNtXCI7XG5pbXBvcnQgeyBQdXNoTm90aWZpY2F0aW9ucyB9IGZyb20gXCJAY2FwYWNpdG9yL3B1c2gtbm90aWZpY2F0aW9uc1wiO1xuaW1wb3J0IEFQSWludGVyZmFjZSBmcm9tIFwic3JjL2FwaS9BUElpbnRlcmZhY2VcIjtcbmltcG9ydCBjb25maWcgZnJvbSBcInNyYy9hcGkvY29uZmlnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJTZXR0aW5nc1BhZ2VcIixcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICBsb2FkaW5nMjogZmFsc2UsXG4gICAgICBkYXRhOiBbXSxcbiAgICAgIGFwcF9wdXNoX25vdGlmaWNhdGlvbnM6IGZhbHNlLFxuICAgICAgYXBwX3Ntc19ub3RpZmljYXRpb25zOiBmYWxzZSxcbiAgICAgIG9mZmVyc19lbWFpbF9ub3RpZmljYXRpb25zOiBmYWxzZSxcbiAgICAgIHByb21vdGlvbmFsX3B1c2hfbm90aWZpY2F0aW9uczogZmFsc2UsXG4gICAgfTtcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmdldFNldHRpbmdzKCk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBnZXRTZXR0aW5ncygpIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICBBUElpbnRlcmZhY2UuZ2V0U2V0dGluZ3MoKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuYXBwX3B1c2hfbm90aWZpY2F0aW9ucyA9XG4gICAgICAgICAgICBkYXRhLmRldGFpbHMuYXBwX3B1c2hfbm90aWZpY2F0aW9ucyA9PT0gXCIxXCI7XG4gICAgICAgICAgdGhpcy5hcHBfc21zX25vdGlmaWNhdGlvbnMgPVxuICAgICAgICAgICAgZGF0YS5kZXRhaWxzLmFwcF9zbXNfbm90aWZpY2F0aW9ucyA9PT0gXCIxXCI7XG4gICAgICAgICAgdGhpcy5vZmZlcnNfZW1haWxfbm90aWZpY2F0aW9ucyA9XG4gICAgICAgICAgICBkYXRhLmRldGFpbHMub2ZmZXJzX2VtYWlsX25vdGlmaWNhdGlvbnMgPT09IFwiMVwiO1xuICAgICAgICAgIHRoaXMucHJvbW90aW9uYWxfcHVzaF9ub3RpZmljYXRpb25zID1cbiAgICAgICAgICAgIGRhdGEuZGV0YWlscy5wcm9tb3Rpb25hbF9wdXNoX25vdGlmaWNhdGlvbnMgPT09IFwiMVwiO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgQVBJaW50ZXJmYWNlLm5vdGlmeShcImRhcmtcIiwgZXJyb3IsIFwiZXJyb3JcIiwgdGhpcy4kcSk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgc2F2ZVNldHRpbmdzKCkge1xuICAgICAgdGhpcy5sb2FkaW5nMiA9IHRydWU7XG4gICAgICBjb25zdCAkZGF0YSA9IHtcbiAgICAgICAgYXBwX3B1c2hfbm90aWZpY2F0aW9uczogdGhpcy5hcHBfcHVzaF9ub3RpZmljYXRpb25zLFxuICAgICAgICBhcHBfc21zX25vdGlmaWNhdGlvbnM6IHRoaXMuYXBwX3Ntc19ub3RpZmljYXRpb25zLFxuICAgICAgICBvZmZlcnNfZW1haWxfbm90aWZpY2F0aW9uczogdGhpcy5vZmZlcnNfZW1haWxfbm90aWZpY2F0aW9ucyxcbiAgICAgICAgcHJvbW90aW9uYWxfcHVzaF9ub3RpZmljYXRpb25zOiB0aGlzLnByb21vdGlvbmFsX3B1c2hfbm90aWZpY2F0aW9ucyxcbiAgICAgIH07XG4gICAgICBBUElpbnRlcmZhY2Uuc2F2ZVNldHRpbmdzKCRkYXRhKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJkYXJrXCIsIGRhdGEubXNnLCBcImNoZWNrXCIsIHRoaXMuJHEpO1xuICAgICAgICAgIGNvbnN0ICRhcHBQdXNoID0gZGF0YS5kZXRhaWxzLmFwcF9wdXNoX25vdGlmaWNhdGlvbnM7XG5cbiAgICAgICAgICBpZiAodGhpcy4kcS5wbGF0Zm9ybS5pcy5tb2JpbGUpIHtcbiAgICAgICAgICAgIGlmICgkYXBwUHVzaCkge1xuICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwic3Vic2NyaWJlXCIpO1xuICAgICAgICAgICAgICBGQ00uc3Vic2NyaWJlVG8oeyB0b3BpYzogY29uZmlnLnRvcGljIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oKHIpID0+IGNvbnNvbGUuZGVidWcoXCJzdWJzY3JpYmVkIHRvIHRvcGljXCIpKVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJ1bi1zdWJzY3JpYmVcIik7XG4gICAgICAgICAgICAgIEZDTS51bnN1YnNjcmliZUZyb20oeyB0b3BpYzogY29uZmlnLnRvcGljIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gY29uc29sZS5kZWJ1ZyhcInVuc3Vic2NyaWJlZCBmcm9tIHRvcGljXCIpKVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBBUElpbnRlcmZhY2Uubm90aWZ5KFwiZGFya1wiLCBlcnJvciwgXCJlcnJvclwiLCB0aGlzLiRxKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcyID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX2NyZWF0ZVZOb2RlIiwiX2NyZWF0ZUJsb2NrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBOEZBLE1BQUssWUFBVTtBQUFBLEVBQ2IsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUNMLFdBQU87QUFBQSxN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
