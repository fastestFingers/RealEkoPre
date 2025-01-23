import { _ as _export_sfc, l as defineAsyncComponent, R as useDataStore, S as useDataStorePersisted, aw as auth, m as APIinterface, aP as FCM, n as resolveComponent, p as openBlock, V as createElementBlock, f as createVNode, t as withCtx, a7 as normalizeClass, F as Fragment, Y as QBtn, a6 as createTextVNode, Z as toDisplayString, U as createBaseVNode, ae as QAvatar, a8 as QCard, a9 as QCardSection, aa as withDirectives, q as createBlock, ad as QItemSection, at as QIcon, ac as QItem, aA as createCommentVNode, bA as QToggle, X as renderList, u as __vitePreload, ab as Ripple } from "./index.61ed5618.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QImg } from "./QImg.6c27044c.js";
import { Q as QSpace } from "./QSpace.f164c087.js";
import { Q as QList } from "./QList.b69a7e5b.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import { u as useClientStore } from "./ClientStore.327b1c8d.js";
import { S as Share } from "./index.cae99e37.js";
import "./QResizeObserver.d08dce3c.js";
const _sfc_main = {
  name: "AccountMenu",
  components: {
    NotiButton: defineAsyncComponent(() => __vitePreload(() => import("./NotiButton.be9405d3.js"), true ? ["assets/NotiButton.be9405d3.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QBadge.6d32ed43.js"] : void 0))
  },
  data() {
    return {
      data: [],
      theme_mode: false,
      app_push_notifications: false,
      promotional_push_notifications: false,
      user_settings: {},
      rtl: false
    };
  },
  setup() {
    const DataStore = useDataStore();
    const DataStorePersisted = useDataStorePersisted();
    const ClientStore = useClientStore();
    return { DataStore, DataStorePersisted, ClientStore };
  },
  watch: {
    theme_mode(newval, oldval) {
      this.$q.dark.set(newval);
      this.DataStorePersisted.dark_mode = newval;
    },
    rtl(newval, oldval) {
      this.DataStorePersisted.rtl = newval;
      this.$q.lang.set({ rtl: newval });
    }
  },
  created() {
    this.data = auth.getUser();
    this.authenticate();
    this.theme_mode = this.DataStorePersisted.dark_mode;
    this.$q.dark.set(this.theme_mode);
    this.rtl = this.DataStorePersisted.rtl;
    this.app_push_notifications = this.ClientStore.user_settings.app_push_notifications == 1 ? true : false;
    this.promotional_push_notifications = this.ClientStore.user_settings.promotional_push_notifications == 1 ? true : false;
  },
  computed: {
    getCurrency() {
      if (Object.keys(this.DataStore.currency_list).length > 0) {
        let Currency = this.DataStorePersisted.use_currency_code ? this.DataStorePersisted.use_currency_code : this.DataStore.default_currency_code;
        return Currency;
      }
      return false;
    }
  },
  methods: {
    authenticate() {
      auth.authenticate().then((data) => {
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
        auth.logout();
        this.$router.push("/user/login");
      }).then((data) => {
      });
    },
    logout() {
      this.$q.dialog({
        title: this.$t("Logout"),
        message: this.$t("Are you sure you want to logout?"),
        persistent: true,
        position: "standard",
        transitionShow: "fade",
        transitionHide: "fade",
        ok: {
          unelevated: true,
          color: "primary",
          rounded: false,
          "text-color": "white",
          size: "md",
          label: this.$t("Yes"),
          "no-caps": true
        },
        cancel: {
          unelevated: true,
          rounded: false,
          color: "grey-3",
          "text-color": "black",
          size: "md",
          label: this.$t("Cancel"),
          "no-caps": true
        }
      }).onOk(() => {
        if (this.$q.capacitor) {
          let $user_data = auth.getUser();
          if ($user_data) {
            this.unsubscribeToTopic($user_data.client_uuid);
          }
        }
        auth.logout();
        this.ClientStore.user_settings = [];
        this.$router.push("/home");
      }).onOk(() => {
      }).onCancel(() => {
      }).onDismiss(() => {
      });
    },
    Updateaccountnotification(value) {
      if (this.$q.capacitor) {
        if (value) {
          this.subsribeDevice();
        } else {
          let $user_data = auth.getUser();
          if ($user_data) {
            this.unsubscribeToTopic($user_data.client_uuid);
          }
        }
      } else {
        APIinterface.fetchDataByTokenPost(
          "Updateaccountnotification",
          "app_push_notifications=" + this.ClientStore.push_notifications
        ).then((data) => {
          this.ClientStore.user_settings.app_push_notifications = data.details.app_push_notifications;
        }).catch((error) => {
        }).then((data) => {
        });
      }
    },
    Updateaccountpromonotification() {
      APIinterface.fetchDataByTokenPost(
        "Updateaccountpromonotification",
        "promotional_push_notifications=" + this.promotional_push_notifications
      ).then((data) => {
        this.ClientStore.user_settings.promotional_push_notifications = data.details.promotional_push_notifications;
      }).catch((error) => {
      }).then((data) => {
      });
    },
    inviteFriends() {
      if (this.$q.capacitor) {
        Share.share({
          title: this.DataStore.invite_friend_settings.title,
          text: this.DataStore.invite_friend_settings.text,
          url: this.DataStore.invite_friend_settings.url,
          dialogTitle: ""
        }).then((data) => {
        }).catch((error) => {
        });
      } else {
        if (navigator.share) {
          navigator.share({
            title: this.DataStore.invite_friend_settings.title,
            text: this.DataStore.invite_friend_settings.text,
            url: this.DataStore.invite_friend_settings.url
          }).then(() => console.log("Successful share")).catch((error) => console.log("Error sharing", error));
        } else {
          if (this.$q.capacitor) {
            APIinterface.showToast("Share not supported");
          } else {
            APIinterface.notify(
              "dark",
              "Share not supported",
              "error",
              this.$q
            );
          }
        }
      }
    },
    subsribeDevice() {
      let $user_data = auth.getUser();
      if ($user_data) {
        FCM.subscribeTo({ topic: $user_data.client_uuid }).then((r) => {
          this.ClientStore.push_notifications = true;
          this.ClientStore.push_off = false;
        }).catch((error) => {
          this.ClientStore.push_notifications = false;
        });
      }
    },
    unsubscribeToTopic(data) {
      FCM.unsubscribeFrom({ topic: data }).then(() => {
        this.ClientStore.push_notifications = false;
        this.ClientStore.push_off = true;
      }).catch((err) => {
      });
    }
  }
};
const _hoisted_1 = { class: "row items-center" };
const _hoisted_2 = { class: "col-3" };
const _hoisted_3 = { class: "col" };
const _hoisted_4 = { class: "text-weight-bold q-ma-none" };
const _hoisted_5 = { class: "text-weight-medium q-ma-none ellipsis" };
const _hoisted_6 = { class: "row items-center q-gutter-sm" };
const _hoisted_7 = { class: "col text-center" };
const _hoisted_8 = { class: "col text-center" };
const _hoisted_9 = { class: "col text-center" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NotiButton = resolveComponent("NotiButton");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(QHeader, {
      reveal: "",
      "reveal-offset": "50",
      class: normalizeClass({
        "bg-transparent text-white": _ctx.$q.dark.mode,
        "bg-grey-1 text-dark": !_ctx.$q.dark.mode
      })
    }, {
      default: withCtx(() => [
        createVNode(QToolbar, null, {
          default: withCtx(() => [
            createVNode(QBtn, {
              to: "/home",
              flat: "",
              round: "",
              dense: "",
              icon: "las la-angle-left",
              class: "q-mr-sm",
              "text-color": _ctx.$q.dark.mode ? "white" : "dark"
            }, null, 8, ["text-color"]),
            createVNode(QToolbarTitle, { class: "text-weight-bold" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("Profile")), 1)
              ]),
              _: 1
            }),
            createVNode(_component_NotiButton)
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["class"]),
    createVNode(QPage, {
      padding: "",
      class: normalizeClass(["q-pa-md", { "bg-transparent": _ctx.$q.dark.mode, "bg-grey-1": !_ctx.$q.dark.mode }])
    }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createVNode(QAvatar, null, {
              default: withCtx(() => [
                createVNode(QImg, {
                  src: $data.data.avatar,
                  lazy: "",
                  style: { "height": "50px", "max-width": "50px" },
                  "spinner-color": "secondary",
                  "spinner-size": "20px"
                }, null, 8, ["src"])
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("h5", _hoisted_4, toDisplayString($data.data.first_name) + " " + toDisplayString($data.data.last_name), 1),
            createBaseVNode("p", _hoisted_5, toDisplayString($data.data.email_address), 1)
          ])
        ]),
        createVNode(QSpace, { class: "q-pa-sm" }),
        createVNode(QCard, {
          flat: "",
          class: normalizeClass(["radius8", { "bg-grey500": _ctx.$q.dark.mode, "bg-white": !_ctx.$q.dark.mode }])
        }, {
          default: withCtx(() => [
            createVNode(QCardSection, null, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_6, [
                  createBaseVNode("div", _hoisted_7, [
                    createVNode(QBtn, {
                      to: "/account/allorder",
                      round: "",
                      color: "secondary",
                      icon: "las la-truck",
                      dense: "",
                      flat: ""
                    }),
                    createVNode(QBtn, {
                      to: "/account/allorder",
                      flat: "",
                      "no-caps": "",
                      label: _ctx.$t("My All orders"),
                      class: "line-height-one q-pa-none",
                      "text-color": _ctx.$q.dark.mode ? "bluegrey500" : "dark"
                    }, null, 8, ["label", "text-color"])
                  ]),
                  createBaseVNode("div", _hoisted_8, [
                    createVNode(QBtn, {
                      to: {
                        path: "feed",
                        query: {
                          query: "promo",
                          page_title: this.$t("Promo")
                        }
                      },
                      round: "",
                      color: "primary",
                      icon: "las la-percentage",
                      dense: "",
                      flat: ""
                    }, null, 8, ["to"]),
                    createVNode(QBtn, {
                      flat: "",
                      "no-caps": "",
                      label: _ctx.$t("Offers & Coupons"),
                      class: "line-height-one q-pa-none",
                      to: {
                        path: "feed",
                        query: {
                          query: "promo",
                          page_title: this.$t("Promo")
                        }
                      },
                      "text-color": _ctx.$q.dark.mode ? "bluegrey500" : "dark"
                    }, null, 8, ["label", "to", "text-color"])
                  ]),
                  createBaseVNode("div", _hoisted_9, [
                    createVNode(QBtn, {
                      round: "",
                      color: "yellow-5",
                      icon: "las la-map-marker",
                      dense: "",
                      flat: "",
                      to: "/account/my-address"
                    }),
                    createVNode(QBtn, {
                      to: "/account/my-address",
                      flat: "",
                      "no-caps": "",
                      label: _ctx.$t("Your Addresses"),
                      class: "line-height-one q-pa-none",
                      "text-color": _ctx.$q.dark.mode ? "bluegrey500" : "dark"
                    }, null, 8, ["label", "text-color"])
                  ])
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["class"]),
        createVNode(QSpace, { class: "q-pa-sm" }),
        createVNode(QCard, {
          flat: "",
          class: normalizeClass(["radius8", { "bg-transparent": _ctx.$q.dark.mode, "bg-grey-1": !_ctx.$q.dark.mode }])
        }, {
          default: withCtx(() => [
            createVNode(QList, { class: "modified-qlist" }, {
              default: withCtx(() => [
                withDirectives((openBlock(), createBlock(QItem, {
                  clickable: "",
                  to: "/account/edit-profile"
                }, {
                  default: withCtx(() => [
                    createVNode(QItemSection, { avatar: "" }, {
                      default: withCtx(() => [
                        createVNode(QIcon, {
                          color: "grey-5",
                          name: "las la-user-alt"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("Manage Profile")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, { side: "" }, {
                      default: withCtx(() => [
                        createVNode(QBtn, {
                          round: "",
                          unelevated: "",
                          "text-color": "dark",
                          icon: $setup.DataStorePersisted.rtl ? "las la-angle-left" : "las la-angle-right",
                          dense: "",
                          class: "text-grey-5 font13"
                        }, null, 8, ["icon"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })), [
                  [Ripple]
                ]),
                withDirectives((openBlock(), createBlock(QItem, {
                  clickable: "",
                  to: "/account/change-password"
                }, {
                  default: withCtx(() => [
                    createVNode(QItemSection, { avatar: "" }, {
                      default: withCtx(() => [
                        createVNode(QIcon, {
                          color: "grey-5",
                          name: "las la-lock"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("Change Password")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, { side: "" }, {
                      default: withCtx(() => [
                        createVNode(QBtn, {
                          round: "",
                          unelevated: "",
                          "text-color": "dark",
                          icon: $setup.DataStorePersisted.rtl ? "las la-angle-left" : "las la-angle-right",
                          dense: "",
                          class: "text-grey-5 font13"
                        }, null, 8, ["icon"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })), [
                  [Ripple]
                ]),
                withDirectives((openBlock(), createBlock(QItem, {
                  clickable: "",
                  to: "/account/payments"
                }, {
                  default: withCtx(() => [
                    createVNode(QItemSection, { avatar: "" }, {
                      default: withCtx(() => [
                        createVNode(QIcon, {
                          color: "grey-5",
                          name: "las la-credit-card"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("Payment")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, { side: "" }, {
                      default: withCtx(() => [
                        createVNode(QBtn, {
                          round: "",
                          unelevated: "",
                          "text-color": "dark",
                          icon: $setup.DataStorePersisted.rtl ? "las la-angle-left" : "las la-angle-right",
                          dense: "",
                          class: "text-grey-5 font13"
                        }, null, 8, ["icon"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })), [
                  [Ripple]
                ]),
                withDirectives((openBlock(), createBlock(QItem, {
                  clickable: "",
                  to: "/account/favourites"
                }, {
                  default: withCtx(() => [
                    createVNode(QItemSection, { avatar: "" }, {
                      default: withCtx(() => [
                        createVNode(QIcon, {
                          color: "grey-5",
                          name: "lab la-gratipay"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("Favourites")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, { side: "" }, {
                      default: withCtx(() => [
                        createVNode(QBtn, {
                          round: "",
                          unelevated: "",
                          "text-color": "dark",
                          icon: $setup.DataStorePersisted.rtl ? "las la-angle-left" : "las la-angle-right",
                          dense: "",
                          class: "text-grey-5 font13"
                        }, null, 8, ["icon"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })), [
                  [Ripple]
                ]),
                $setup.DataStore.points_enabled ? withDirectives((openBlock(), createBlock(QItem, {
                  key: 0,
                  clickable: "",
                  to: "/account/points"
                }, {
                  default: withCtx(() => [
                    createVNode(QItemSection, { avatar: "" }, {
                      default: withCtx(() => [
                        createVNode(QIcon, {
                          color: "grey-5",
                          name: "card_giftcard"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("Points")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, { side: "" }, {
                      default: withCtx(() => [
                        createVNode(QBtn, {
                          round: "",
                          unelevated: "",
                          "text-color": "dark",
                          icon: $setup.DataStorePersisted.rtl ? "las la-angle-left" : "las la-angle-right",
                          dense: "",
                          class: "text-grey-5 font13"
                        }, null, 8, ["icon"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })), [
                  [Ripple]
                ]) : createCommentVNode("", true),
                $setup.DataStore.digitalwallet_enabled ? withDirectives((openBlock(), createBlock(QItem, {
                  key: 1,
                  clickable: "",
                  to: "/account/wallet"
                }, {
                  default: withCtx(() => [
                    createVNode(QItemSection, { avatar: "" }, {
                      default: withCtx(() => [
                        createVNode(QIcon, {
                          color: "grey-5",
                          name: "o_account_balance_wallet"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("Digital Wallet")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, { side: "" }, {
                      default: withCtx(() => [
                        createVNode(QBtn, {
                          round: "",
                          unelevated: "",
                          "text-color": "dark",
                          icon: $setup.DataStorePersisted.rtl ? "las la-angle-left" : "las la-angle-right",
                          dense: "",
                          class: "text-grey-5 font13"
                        }, null, 8, ["icon"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })), [
                  [Ripple]
                ]) : createCommentVNode("", true),
                $setup.DataStore.chat_enabled ? withDirectives((openBlock(), createBlock(QItem, {
                  key: 2,
                  clickable: "",
                  to: "/account/chat"
                }, {
                  default: withCtx(() => [
                    createVNode(QItemSection, { avatar: "" }, {
                      default: withCtx(() => [
                        createVNode(QIcon, {
                          color: "grey-5",
                          name: "o_forum"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("Live Chat")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, { side: "" }, {
                      default: withCtx(() => [
                        createVNode(QBtn, {
                          round: "",
                          unelevated: "",
                          "text-color": "dark",
                          icon: $setup.DataStorePersisted.rtl ? "las la-angle-left" : "las la-angle-right",
                          dense: "",
                          class: "text-grey-5 font13"
                        }, null, 8, ["icon"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })), [
                  [Ripple]
                ]) : createCommentVNode("", true),
                withDirectives((openBlock(), createBlock(QItem, {
                  clickable: "",
                  to: "/booking"
                }, {
                  default: withCtx(() => [
                    createVNode(QItemSection, { avatar: "" }, {
                      default: withCtx(() => [
                        createVNode(QIcon, {
                          color: "grey-5",
                          name: "table_restaurant"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("Bookings")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, { side: "" }, {
                      default: withCtx(() => [
                        createVNode(QBtn, {
                          round: "",
                          unelevated: "",
                          "text-color": "dark",
                          icon: $setup.DataStorePersisted.rtl ? "las la-angle-left" : "las la-angle-right",
                          dense: "",
                          class: "text-grey-5 font13"
                        }, null, 8, ["icon"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })), [
                  [Ripple]
                ]),
                withDirectives((openBlock(), createBlock(QItem, { clickable: "" }, {
                  default: withCtx(() => [
                    createVNode(QItemSection, { avatar: "" }, {
                      default: withCtx(() => [
                        createVNode(QIcon, {
                          color: "grey-5",
                          name: "las la-bell"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("Push Notifications")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, { side: "" }, {
                      default: withCtx(() => [
                        createVNode(QToggle, {
                          modelValue: $setup.ClientStore.push_notifications,
                          "onUpdate:modelValue": [
                            _cache[0] || (_cache[0] = ($event) => $setup.ClientStore.push_notifications = $event),
                            $options.Updateaccountnotification
                          ],
                          color: "secondary"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })), [
                  [Ripple]
                ]),
                withDirectives((openBlock(), createBlock(QItem, { clickable: "" }, {
                  default: withCtx(() => [
                    createVNode(QItemSection, { avatar: "" }, {
                      default: withCtx(() => [
                        createVNode(QIcon, {
                          color: "grey-5",
                          name: "las la-bell"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("Promotional Notifications")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, { side: "" }, {
                      default: withCtx(() => [
                        createVNode(QToggle, {
                          modelValue: $data.promotional_push_notifications,
                          "onUpdate:modelValue": [
                            _cache[1] || (_cache[1] = ($event) => $data.promotional_push_notifications = $event),
                            $options.Updateaccountpromonotification
                          ],
                          color: "secondary"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })), [
                  [Ripple]
                ]),
                $setup.DataStore.multicurrency_enabled ? withDirectives((openBlock(), createBlock(QItem, {
                  key: 3,
                  clickable: "",
                  to: "/account/currency"
                }, {
                  default: withCtx(() => [
                    createVNode(QItemSection, { avatar: "" }, {
                      default: withCtx(() => [
                        createVNode(QIcon, {
                          color: "grey-5",
                          name: "toll"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("Currency")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, { side: "" }, {
                      default: withCtx(() => [
                        createVNode(QBtn, {
                          "no-caps": "",
                          label: $options.getCurrency,
                          unelevated: "",
                          "text-color": "dark",
                          "icon-right": $setup.DataStorePersisted.rtl ? "las la-angle-left" : "las la-angle-right",
                          dense: "",
                          class: "text-grey-5 font13"
                        }, null, 8, ["label", "icon-right"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })), [
                  [Ripple]
                ]) : createCommentVNode("", true),
                $setup.DataStore.enabled_language ? withDirectives((openBlock(), createBlock(QItem, {
                  key: 4,
                  clickable: "",
                  to: "/account/language"
                }, {
                  default: withCtx(() => [
                    createVNode(QItemSection, { avatar: "" }, {
                      default: withCtx(() => [
                        createVNode(QIcon, {
                          color: "grey-5",
                          name: "las la-credit-card"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("Language")), 1)
                      ]),
                      _: 1
                    }),
                    $setup.DataStore.language_data ? (openBlock(), createBlock(QItemSection, {
                      key: 0,
                      side: ""
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.DataStore.language_data.data, (lang) => {
                          return openBlock(), createElementBlock(Fragment, { key: lang }, [
                            lang.code == this.DataStorePersisted.app_language ? (openBlock(), createBlock(QBtn, {
                              key: 0,
                              "no-caps": "",
                              label: lang.title,
                              unelevated: "",
                              "text-color": "dark",
                              "icon-right": $setup.DataStorePersisted.rtl ? "las la-angle-left" : "las la-angle-right",
                              dense: "",
                              class: "text-grey-5 font13"
                            }, null, 8, ["label", "icon-right"])) : createCommentVNode("", true)
                          ], 64);
                        }), 128))
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ]),
                  _: 1
                })), [
                  [Ripple]
                ]) : createCommentVNode("", true),
                $setup.DataStore.enabled_language ? withDirectives((openBlock(), createBlock(QItem, {
                  key: 5,
                  clickable: "",
                  onClick: _cache[2] || (_cache[2] = ($event) => $data.rtl = !$data.rtl)
                }, {
                  default: withCtx(() => [
                    createVNode(QItemSection, { avatar: "" }, {
                      default: withCtx(() => [
                        createVNode(QIcon, {
                          color: "grey-5",
                          name: $setup.DataStorePersisted.rtl ? "format_textdirection_l_to_r" : "format_textdirection_r_to_l"
                        }, null, 8, ["name"])
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("Direction")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, { side: "" }, {
                      default: withCtx(() => [
                        createVNode(QBtn, {
                          "no-caps": "",
                          label: $setup.DataStorePersisted.rtl ? _ctx.$t("LRT") : _ctx.$t("RTL"),
                          unelevated: "",
                          "text-color": "dark",
                          "icon-right": $setup.DataStorePersisted.rtl ? "las la-angle-left" : "las la-angle-right",
                          dense: "",
                          class: "text-grey-5 font13"
                        }, null, 8, ["label", "icon-right"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })), [
                  [Ripple]
                ]) : createCommentVNode("", true),
                withDirectives((openBlock(), createBlock(QItem, { clickable: "" }, {
                  default: withCtx(() => [
                    createVNode(QItemSection, { avatar: "" }, {
                      default: withCtx(() => [
                        createVNode(QIcon, {
                          color: "grey-5",
                          name: "las la-adjust"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("Dark Mode")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, { side: "" }, {
                      default: withCtx(() => [
                        createVNode(QToggle, {
                          modelValue: $data.theme_mode,
                          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.theme_mode = $event),
                          color: "secondary"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })), [
                  [Ripple]
                ]),
                withDirectives((openBlock(), createBlock(QItem, {
                  clickable: "",
                  to: "/account/delete"
                }, {
                  default: withCtx(() => [
                    createVNode(QItemSection, { avatar: "" }, {
                      default: withCtx(() => [
                        createVNode(QIcon, {
                          color: "grey-5",
                          name: "las la-user-slash"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("Delete Account")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, { side: "" }, {
                      default: withCtx(() => [
                        createVNode(QBtn, {
                          round: "",
                          unelevated: "",
                          "text-color": "dark",
                          icon: $setup.DataStorePersisted.rtl ? "las la-angle-left" : "las la-angle-right",
                          dense: "",
                          class: "text-grey-5 font13"
                        }, null, 8, ["icon"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })), [
                  [Ripple]
                ]),
                withDirectives((openBlock(), createBlock(QItem, {
                  clickable: "",
                  onClick: $options.inviteFriends
                }, {
                  default: withCtx(() => [
                    createVNode(QItemSection, { avatar: "" }, {
                      default: withCtx(() => [
                        createVNode(QIcon, {
                          color: "grey-5",
                          name: "las la-user-friends"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("Invite Friends")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, { side: "" }, {
                      default: withCtx(() => [
                        createVNode(QBtn, {
                          round: "",
                          unelevated: "",
                          "text-color": "dark",
                          icon: $setup.DataStorePersisted.rtl ? "las la-angle-left" : "las la-angle-right",
                          dense: "",
                          class: "text-grey-5 font13"
                        }, null, 8, ["icon"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["onClick"])), [
                  [Ripple]
                ]),
                withDirectives((openBlock(), createBlock(QItem, {
                  to: "/legal",
                  clickable: ""
                }, {
                  default: withCtx(() => [
                    createVNode(QItemSection, { avatar: "" }, {
                      default: withCtx(() => [
                        createVNode(QIcon, {
                          color: "grey-5",
                          name: "las la-balance-scale"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("Legal")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, { side: "" }, {
                      default: withCtx(() => [
                        createVNode(QBtn, {
                          round: "",
                          unelevated: "",
                          "text-color": "dark",
                          icon: $setup.DataStorePersisted.rtl ? "las la-angle-left" : "las la-angle-right",
                          dense: "",
                          class: "text-grey-5 font13"
                        }, null, 8, ["icon"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })), [
                  [Ripple]
                ]),
                withDirectives((openBlock(), createBlock(QItem, {
                  clickable: "",
                  onClick: $options.logout
                }, {
                  default: withCtx(() => [
                    createVNode(QItemSection, { avatar: "" }, {
                      default: withCtx(() => [
                        createVNode(QIcon, {
                          color: "secondary",
                          name: "las la-sign-out-alt"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("Logout")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, { side: "" }, {
                      default: withCtx(() => [
                        createVNode(QBtn, {
                          round: "",
                          unelevated: "",
                          "text-color": "dark",
                          icon: $setup.DataStorePersisted.rtl ? "las la-angle-left" : "las la-angle-right",
                          dense: "",
                          class: "text-grey-5 font13"
                        }, null, 8, ["icon"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["onClick"])), [
                  [Ripple]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["class"])
      ]),
      _: 1
    }, 8, ["class"])
  ], 64);
}
var AccountMenu = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "AccountMenu.vue"]]);
export { AccountMenu as default };
//# sourceMappingURL=data:application/json;base64,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QSxPQUFNO0FBQUEiLCJuYW1lcyI6WyJfY3JlYXRlVk5vZGUiLCJfbm9ybWFsaXplQ2xhc3MiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyIsIl9jcmVhdGVCbG9jayIsIl9vcGVuQmxvY2siLCJfRnJhZ21lbnQiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvQWNjb3VudC9BY2NvdW50TWVudS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8cS1oZWFkZXJcbiAgICByZXZlYWxcbiAgICByZXZlYWwtb2Zmc2V0PVwiNTBcIlxuICAgIDpjbGFzcz1cIntcbiAgICAgICdiZy10cmFuc3BhcmVudCB0ZXh0LXdoaXRlJzogJHEuZGFyay5tb2RlLFxuICAgICAgJ2JnLWdyZXktMSB0ZXh0LWRhcmsnOiAhJHEuZGFyay5tb2RlLFxuICAgIH1cIlxuICA+XG4gICAgPHEtdG9vbGJhcj5cbiAgICAgIDxxLWJ0blxuICAgICAgICB0bz1cIi9ob21lXCJcbiAgICAgICAgZmxhdFxuICAgICAgICByb3VuZFxuICAgICAgICBkZW5zZVxuICAgICAgICBpY29uPVwibGFzIGxhLWFuZ2xlLWxlZnRcIlxuICAgICAgICBjbGFzcz1cInEtbXItc21cIlxuICAgICAgICA6dGV4dC1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICd3aGl0ZScgOiAnZGFyaydcIlxuICAgICAgLz5cbiAgICAgIDxxLXRvb2xiYXItdGl0bGUgY2xhc3M9XCJ0ZXh0LXdlaWdodC1ib2xkXCI+e3tcbiAgICAgICAgJHQoXCJQcm9maWxlXCIpXG4gICAgICB9fTwvcS10b29sYmFyLXRpdGxlPlxuICAgICAgPE5vdGlCdXR0b24+PC9Ob3RpQnV0dG9uPlxuICAgIDwvcS10b29sYmFyPlxuICA8L3EtaGVhZGVyPlxuICA8cS1wYWdlXG4gICAgcGFkZGluZ1xuICAgIGNsYXNzPVwicS1wYS1tZFwiXG4gICAgOmNsYXNzPVwieyAnYmctdHJhbnNwYXJlbnQnOiAkcS5kYXJrLm1vZGUsICdiZy1ncmV5LTEnOiAhJHEuZGFyay5tb2RlIH1cIlxuICA+XG4gICAgPGRpdiBjbGFzcz1cInJvdyBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtM1wiPlxuICAgICAgICA8cS1hdmF0YXI+XG4gICAgICAgICAgPHEtaW1nXG4gICAgICAgICAgICA6c3JjPVwiZGF0YS5hdmF0YXJcIlxuICAgICAgICAgICAgbGF6eVxuICAgICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDUwcHg7IG1heC13aWR0aDogNTBweFwiXG4gICAgICAgICAgICBzcGlubmVyLWNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIHNwaW5uZXItc2l6ZT1cIjIwcHhcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvcS1hdmF0YXI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgPGg1IGNsYXNzPVwidGV4dC13ZWlnaHQtYm9sZCBxLW1hLW5vbmVcIj5cbiAgICAgICAgICB7eyBkYXRhLmZpcnN0X25hbWUgfX0ge3sgZGF0YS5sYXN0X25hbWUgfX1cbiAgICAgICAgPC9oNT5cbiAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXdlaWdodC1tZWRpdW0gcS1tYS1ub25lIGVsbGlwc2lzXCI+XG4gICAgICAgICAge3sgZGF0YS5lbWFpbF9hZGRyZXNzIH19XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwhLS0gcm93cyAtLT5cblxuICAgIDxxLXNwYWNlIGNsYXNzPVwicS1wYS1zbVwiPjwvcS1zcGFjZT5cblxuICAgIDxxLWNhcmRcbiAgICAgIGZsYXRcbiAgICAgIGNsYXNzPVwicmFkaXVzOFwiXG4gICAgICA6Y2xhc3M9XCJ7ICdiZy1ncmV5NTAwJzogJHEuZGFyay5tb2RlLCAnYmctd2hpdGUnOiAhJHEuZGFyay5tb2RlIH1cIlxuICAgID5cbiAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBpdGVtcy1jZW50ZXIgcS1ndXR0ZXItc21cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgdG89XCIvYWNjb3VudC9hbGxvcmRlclwiXG4gICAgICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgaWNvbj1cImxhcyBsYS10cnVja1wiXG4gICAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgdG89XCIvYWNjb3VudC9hbGxvcmRlclwiXG4gICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnTXkgQWxsIG9yZGVycycpXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJsaW5lLWhlaWdodC1vbmUgcS1wYS1ub25lXCJcbiAgICAgICAgICAgICAgOnRleHQtY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnYmx1ZWdyZXk1MDAnIDogJ2RhcmsnXCJcbiAgICAgICAgICAgID48L3EtYnRuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICA6dG89XCJ7XG4gICAgICAgICAgICAgICAgcGF0aDogJ2ZlZWQnLFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICBxdWVyeTogJ3Byb21vJyxcbiAgICAgICAgICAgICAgICAgIHBhZ2VfdGl0bGU6IHRoaXMuJHQoJ1Byb21vJyksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgIGljb249XCJsYXMgbGEtcGVyY2VudGFnZVwiXG4gICAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdPZmZlcnMgJiBDb3Vwb25zJylcIlxuICAgICAgICAgICAgICBjbGFzcz1cImxpbmUtaGVpZ2h0LW9uZSBxLXBhLW5vbmVcIlxuICAgICAgICAgICAgICA6dG89XCJ7XG4gICAgICAgICAgICAgICAgcGF0aDogJ2ZlZWQnLFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICBxdWVyeTogJ3Byb21vJyxcbiAgICAgICAgICAgICAgICAgIHBhZ2VfdGl0bGU6IHRoaXMuJHQoJ1Byb21vJyksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgIDp0ZXh0LWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2JsdWVncmV5NTAwJyA6ICdkYXJrJ1wiXG4gICAgICAgICAgICA+PC9xLWJ0bj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgcm91bmRcbiAgICAgICAgICAgICAgY29sb3I9XCJ5ZWxsb3ctNVwiXG4gICAgICAgICAgICAgIGljb249XCJsYXMgbGEtbWFwLW1hcmtlclwiXG4gICAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgdG89XCIvYWNjb3VudC9teS1hZGRyZXNzXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgdG89XCIvYWNjb3VudC9teS1hZGRyZXNzXCJcbiAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdZb3VyIEFkZHJlc3NlcycpXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJsaW5lLWhlaWdodC1vbmUgcS1wYS1ub25lXCJcbiAgICAgICAgICAgICAgOnRleHQtY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnYmx1ZWdyZXk1MDAnIDogJ2RhcmsnXCJcbiAgICAgICAgICAgID48L3EtYnRuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPCEtLSByb3cgLS0+XG4gICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgIDwvcS1jYXJkPlxuXG4gICAgPHEtc3BhY2UgY2xhc3M9XCJxLXBhLXNtXCI+PC9xLXNwYWNlPlxuXG4gICAgPHEtY2FyZFxuICAgICAgZmxhdFxuICAgICAgY2xhc3M9XCJyYWRpdXM4XCJcbiAgICAgIDpjbGFzcz1cInsgJ2JnLXRyYW5zcGFyZW50JzogJHEuZGFyay5tb2RlLCAnYmctZ3JleS0xJzogISRxLmRhcmsubW9kZSB9XCJcbiAgICA+XG4gICAgICA8cS1saXN0IGNsYXNzPVwibW9kaWZpZWQtcWxpc3RcIj5cbiAgICAgICAgPHEtaXRlbSBjbGlja2FibGUgdi1yaXBwbGUgdG89XCIvYWNjb3VudC9lZGl0LXByb2ZpbGVcIj5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgICAgPHEtaWNvbiBjb2xvcj1cImdyZXktNVwiIG5hbWU9XCJsYXMgbGEtdXNlci1hbHRcIiAvPlxuICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPnt7ICR0KFwiTWFuYWdlIFByb2ZpbGVcIikgfX08L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlPlxuICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICAgICAgdGV4dC1jb2xvcj1cImRhcmtcIlxuICAgICAgICAgICAgICA6aWNvbj1cIlxuICAgICAgICAgICAgICAgIERhdGFTdG9yZVBlcnNpc3RlZC5ydGxcbiAgICAgICAgICAgICAgICAgID8gJ2xhcyBsYS1hbmdsZS1sZWZ0J1xuICAgICAgICAgICAgICAgICAgOiAnbGFzIGxhLWFuZ2xlLXJpZ2h0J1xuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICBjbGFzcz1cInRleHQtZ3JleS01IGZvbnQxM1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDwvcS1pdGVtPlxuXG4gICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlIHYtcmlwcGxlIHRvPVwiL2FjY291bnQvY2hhbmdlLXBhc3N3b3JkXCI+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICAgIDxxLWljb24gY29sb3I9XCJncmV5LTVcIiBuYW1lPVwibGFzIGxhLWxvY2tcIiAvPlxuICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPnt7ICR0KFwiQ2hhbmdlIFBhc3N3b3JkXCIpIH19PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZT5cbiAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICByb3VuZFxuICAgICAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgICAgIHRleHQtY29sb3I9XCJkYXJrXCJcbiAgICAgICAgICAgICAgOmljb249XCJcbiAgICAgICAgICAgICAgICBEYXRhU3RvcmVQZXJzaXN0ZWQucnRsXG4gICAgICAgICAgICAgICAgICA/ICdsYXMgbGEtYW5nbGUtbGVmdCdcbiAgICAgICAgICAgICAgICAgIDogJ2xhcyBsYS1hbmdsZS1yaWdodCdcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWdyZXktNSBmb250MTNcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8L3EtaXRlbT5cblxuICAgICAgICA8cS1pdGVtIGNsaWNrYWJsZSB2LXJpcHBsZSB0bz1cIi9hY2NvdW50L3BheW1lbnRzXCI+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICAgIDxxLWljb24gY29sb3I9XCJncmV5LTVcIiBuYW1lPVwibGFzIGxhLWNyZWRpdC1jYXJkXCIgLz5cbiAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj57eyAkdChcIlBheW1lbnRcIikgfX08L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlPlxuICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICAgICAgdGV4dC1jb2xvcj1cImRhcmtcIlxuICAgICAgICAgICAgICA6aWNvbj1cIlxuICAgICAgICAgICAgICAgIERhdGFTdG9yZVBlcnNpc3RlZC5ydGxcbiAgICAgICAgICAgICAgICAgID8gJ2xhcyBsYS1hbmdsZS1sZWZ0J1xuICAgICAgICAgICAgICAgICAgOiAnbGFzIGxhLWFuZ2xlLXJpZ2h0J1xuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICBjbGFzcz1cInRleHQtZ3JleS01IGZvbnQxM1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDwvcS1pdGVtPlxuXG4gICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlIHYtcmlwcGxlIHRvPVwiL2FjY291bnQvZmF2b3VyaXRlc1wiPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgICA8cS1pY29uIGNvbG9yPVwiZ3JleS01XCIgbmFtZT1cImxhYiBsYS1ncmF0aXBheVwiIC8+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+e3sgJHQoXCJGYXZvdXJpdGVzXCIpIH19PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZT5cbiAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICByb3VuZFxuICAgICAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgICAgIHRleHQtY29sb3I9XCJkYXJrXCJcbiAgICAgICAgICAgICAgOmljb249XCJcbiAgICAgICAgICAgICAgICBEYXRhU3RvcmVQZXJzaXN0ZWQucnRsXG4gICAgICAgICAgICAgICAgICA/ICdsYXMgbGEtYW5nbGUtbGVmdCdcbiAgICAgICAgICAgICAgICAgIDogJ2xhcyBsYS1hbmdsZS1yaWdodCdcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWdyZXktNSBmb250MTNcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8L3EtaXRlbT5cblxuICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgdi1pZj1cIkRhdGFTdG9yZS5wb2ludHNfZW5hYmxlZFwiXG4gICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgdi1yaXBwbGVcbiAgICAgICAgICB0bz1cIi9hY2NvdW50L3BvaW50c1wiXG4gICAgICAgID5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgICAgPHEtaWNvbiBjb2xvcj1cImdyZXktNVwiIG5hbWU9XCJjYXJkX2dpZnRjYXJkXCIgLz5cbiAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj57eyAkdChcIlBvaW50c1wiKSB9fTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgcm91bmRcbiAgICAgICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgICAgICB0ZXh0LWNvbG9yPVwiZGFya1wiXG4gICAgICAgICAgICAgIDppY29uPVwiXG4gICAgICAgICAgICAgICAgRGF0YVN0b3JlUGVyc2lzdGVkLnJ0bFxuICAgICAgICAgICAgICAgICAgPyAnbGFzIGxhLWFuZ2xlLWxlZnQnXG4gICAgICAgICAgICAgICAgICA6ICdsYXMgbGEtYW5nbGUtcmlnaHQnXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1ncmV5LTUgZm9udDEzXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPC9xLWl0ZW0+XG5cbiAgICAgICAgPHEtaXRlbVxuICAgICAgICAgIHYtaWY9XCJEYXRhU3RvcmUuZGlnaXRhbHdhbGxldF9lbmFibGVkXCJcbiAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICB2LXJpcHBsZVxuICAgICAgICAgIHRvPVwiL2FjY291bnQvd2FsbGV0XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgICA8cS1pY29uIGNvbG9yPVwiZ3JleS01XCIgbmFtZT1cIm9fYWNjb3VudF9iYWxhbmNlX3dhbGxldFwiIC8+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+e3sgJHQoXCJEaWdpdGFsIFdhbGxldFwiKSB9fTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgcm91bmRcbiAgICAgICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgICAgICB0ZXh0LWNvbG9yPVwiZGFya1wiXG4gICAgICAgICAgICAgIDppY29uPVwiXG4gICAgICAgICAgICAgICAgRGF0YVN0b3JlUGVyc2lzdGVkLnJ0bFxuICAgICAgICAgICAgICAgICAgPyAnbGFzIGxhLWFuZ2xlLWxlZnQnXG4gICAgICAgICAgICAgICAgICA6ICdsYXMgbGEtYW5nbGUtcmlnaHQnXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1ncmV5LTUgZm9udDEzXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPC9xLWl0ZW0+XG5cbiAgICAgICAgPHEtaXRlbVxuICAgICAgICAgIHYtaWY9XCJEYXRhU3RvcmUuY2hhdF9lbmFibGVkXCJcbiAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICB2LXJpcHBsZVxuICAgICAgICAgIHRvPVwiL2FjY291bnQvY2hhdFwiXG4gICAgICAgID5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgICAgPHEtaWNvbiBjb2xvcj1cImdyZXktNVwiIG5hbWU9XCJvX2ZvcnVtXCIgLz5cbiAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj57eyAkdChcIkxpdmUgQ2hhdFwiKSB9fTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgcm91bmRcbiAgICAgICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgICAgICB0ZXh0LWNvbG9yPVwiZGFya1wiXG4gICAgICAgICAgICAgIDppY29uPVwiXG4gICAgICAgICAgICAgICAgRGF0YVN0b3JlUGVyc2lzdGVkLnJ0bFxuICAgICAgICAgICAgICAgICAgPyAnbGFzIGxhLWFuZ2xlLWxlZnQnXG4gICAgICAgICAgICAgICAgICA6ICdsYXMgbGEtYW5nbGUtcmlnaHQnXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1ncmV5LTUgZm9udDEzXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPC9xLWl0ZW0+XG5cbiAgICAgICAgPHEtaXRlbSBjbGlja2FibGUgdi1yaXBwbGUgdG89XCIvYm9va2luZ1wiPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgICA8cS1pY29uIGNvbG9yPVwiZ3JleS01XCIgbmFtZT1cInRhYmxlX3Jlc3RhdXJhbnRcIiAvPlxuICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPnt7ICR0KFwiQm9va2luZ3NcIikgfX08L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlPlxuICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICAgICAgdGV4dC1jb2xvcj1cImRhcmtcIlxuICAgICAgICAgICAgICA6aWNvbj1cIlxuICAgICAgICAgICAgICAgIERhdGFTdG9yZVBlcnNpc3RlZC5ydGxcbiAgICAgICAgICAgICAgICAgID8gJ2xhcyBsYS1hbmdsZS1sZWZ0J1xuICAgICAgICAgICAgICAgICAgOiAnbGFzIGxhLWFuZ2xlLXJpZ2h0J1xuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICBjbGFzcz1cInRleHQtZ3JleS01IGZvbnQxM1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDwvcS1pdGVtPlxuXG4gICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlIHYtcmlwcGxlPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgICA8cS1pY29uIGNvbG9yPVwiZ3JleS01XCIgbmFtZT1cImxhcyBsYS1iZWxsXCIgLz5cbiAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj57eyAkdChcIlB1c2ggTm90aWZpY2F0aW9uc1wiKSB9fTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICAgICAgICA8cS10b2dnbGVcbiAgICAgICAgICAgICAgdi1tb2RlbD1cIkNsaWVudFN0b3JlLnB1c2hfbm90aWZpY2F0aW9uc1wiXG4gICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgQHVwZGF0ZTptb2RlbC12YWx1ZT1cIlVwZGF0ZWFjY291bnRub3RpZmljYXRpb25cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8L3EtaXRlbT5cblxuICAgICAgICA8cS1pdGVtIGNsaWNrYWJsZSB2LXJpcHBsZT5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgICAgPHEtaWNvbiBjb2xvcj1cImdyZXktNVwiIG5hbWU9XCJsYXMgbGEtYmVsbFwiIC8+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+e3sgJHQoXCJQcm9tb3Rpb25hbCBOb3RpZmljYXRpb25zXCIpIH19PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZT5cbiAgICAgICAgICAgIDxxLXRvZ2dsZVxuICAgICAgICAgICAgICB2LW1vZGVsPVwicHJvbW90aW9uYWxfcHVzaF9ub3RpZmljYXRpb25zXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICBAdXBkYXRlOm1vZGVsLXZhbHVlPVwiVXBkYXRlYWNjb3VudHByb21vbm90aWZpY2F0aW9uXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPC9xLWl0ZW0+XG5cbiAgICAgICAgPHEtaXRlbVxuICAgICAgICAgIHYtaWY9XCJEYXRhU3RvcmUubXVsdGljdXJyZW5jeV9lbmFibGVkXCJcbiAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICB2LXJpcHBsZVxuICAgICAgICAgIHRvPVwiL2FjY291bnQvY3VycmVuY3lcIlxuICAgICAgICA+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICAgIDxxLWljb24gY29sb3I9XCJncmV5LTVcIiBuYW1lPVwidG9sbFwiIC8+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+e3sgJHQoXCJDdXJyZW5jeVwiKSB9fTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgICAgICA6bGFiZWw9XCJnZXRDdXJyZW5jeVwiXG4gICAgICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICAgICAgdGV4dC1jb2xvcj1cImRhcmtcIlxuICAgICAgICAgICAgICA6aWNvbi1yaWdodD1cIlxuICAgICAgICAgICAgICAgIERhdGFTdG9yZVBlcnNpc3RlZC5ydGxcbiAgICAgICAgICAgICAgICAgID8gJ2xhcyBsYS1hbmdsZS1sZWZ0J1xuICAgICAgICAgICAgICAgICAgOiAnbGFzIGxhLWFuZ2xlLXJpZ2h0J1xuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICBjbGFzcz1cInRleHQtZ3JleS01IGZvbnQxM1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDwvcS1pdGVtPlxuXG4gICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICB2LWlmPVwiRGF0YVN0b3JlLmVuYWJsZWRfbGFuZ3VhZ2VcIlxuICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgIHYtcmlwcGxlXG4gICAgICAgICAgdG89XCIvYWNjb3VudC9sYW5ndWFnZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgICAgPHEtaWNvbiBjb2xvcj1cImdyZXktNVwiIG5hbWU9XCJsYXMgbGEtY3JlZGl0LWNhcmRcIiAvPlxuICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPnt7ICR0KFwiTGFuZ3VhZ2VcIikgfX08L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlIHYtaWY9XCJEYXRhU3RvcmUubGFuZ3VhZ2VfZGF0YVwiPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwibGFuZyBpbiBEYXRhU3RvcmUubGFuZ3VhZ2VfZGF0YS5kYXRhXCIgOmtleT1cImxhbmdcIj5cbiAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgdi1pZj1cImxhbmcuY29kZSA9PSB0aGlzLkRhdGFTdG9yZVBlcnNpc3RlZC5hcHBfbGFuZ3VhZ2VcIlxuICAgICAgICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICAgICAgICA6bGFiZWw9XCJsYW5nLnRpdGxlXCJcbiAgICAgICAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgICAgICAgdGV4dC1jb2xvcj1cImRhcmtcIlxuICAgICAgICAgICAgICAgIDppY29uLXJpZ2h0PVwiXG4gICAgICAgICAgICAgICAgICBEYXRhU3RvcmVQZXJzaXN0ZWQucnRsXG4gICAgICAgICAgICAgICAgICAgID8gJ2xhcyBsYS1hbmdsZS1sZWZ0J1xuICAgICAgICAgICAgICAgICAgICA6ICdsYXMgbGEtYW5nbGUtcmlnaHQnXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1ncmV5LTUgZm9udDEzXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPC9xLWl0ZW0+XG5cbiAgICAgICAgPHEtaXRlbVxuICAgICAgICAgIHYtaWY9XCJEYXRhU3RvcmUuZW5hYmxlZF9sYW5ndWFnZVwiXG4gICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgdi1yaXBwbGVcbiAgICAgICAgICBAY2xpY2s9XCJydGwgPSAhcnRsXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgICA8cS1pY29uXG4gICAgICAgICAgICAgIGNvbG9yPVwiZ3JleS01XCJcbiAgICAgICAgICAgICAgOm5hbWU9XCJcbiAgICAgICAgICAgICAgICBEYXRhU3RvcmVQZXJzaXN0ZWQucnRsXG4gICAgICAgICAgICAgICAgICA/ICdmb3JtYXRfdGV4dGRpcmVjdGlvbl9sX3RvX3InXG4gICAgICAgICAgICAgICAgICA6ICdmb3JtYXRfdGV4dGRpcmVjdGlvbl9yX3RvX2wnXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPnt7ICR0KFwiRGlyZWN0aW9uXCIpIH19PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZT5cbiAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgICAgIDpsYWJlbD1cIkRhdGFTdG9yZVBlcnNpc3RlZC5ydGwgPyAkdCgnTFJUJykgOiAkdCgnUlRMJylcIlxuICAgICAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgICAgIHRleHQtY29sb3I9XCJkYXJrXCJcbiAgICAgICAgICAgICAgOmljb24tcmlnaHQ9XCJcbiAgICAgICAgICAgICAgICBEYXRhU3RvcmVQZXJzaXN0ZWQucnRsXG4gICAgICAgICAgICAgICAgICA/ICdsYXMgbGEtYW5nbGUtbGVmdCdcbiAgICAgICAgICAgICAgICAgIDogJ2xhcyBsYS1hbmdsZS1yaWdodCdcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWdyZXktNSBmb250MTNcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8L3EtaXRlbT5cblxuICAgICAgICA8cS1pdGVtIGNsaWNrYWJsZSB2LXJpcHBsZT5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgICAgPHEtaWNvbiBjb2xvcj1cImdyZXktNVwiIG5hbWU9XCJsYXMgbGEtYWRqdXN0XCIgLz5cbiAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj57eyAkdChcIkRhcmsgTW9kZVwiKSB9fTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICAgICAgICA8cS10b2dnbGUgdi1tb2RlbD1cInRoZW1lX21vZGVcIiBjb2xvcj1cInNlY29uZGFyeVwiIC8+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPC9xLWl0ZW0+XG5cbiAgICAgICAgPHEtaXRlbSBjbGlja2FibGUgdi1yaXBwbGUgdG89XCIvYWNjb3VudC9kZWxldGVcIj5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgICAgPHEtaWNvbiBjb2xvcj1cImdyZXktNVwiIG5hbWU9XCJsYXMgbGEtdXNlci1zbGFzaFwiIC8+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+e3sgJHQoXCJEZWxldGUgQWNjb3VudFwiKSB9fTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgcm91bmRcbiAgICAgICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgICAgICB0ZXh0LWNvbG9yPVwiZGFya1wiXG4gICAgICAgICAgICAgIDppY29uPVwiXG4gICAgICAgICAgICAgICAgRGF0YVN0b3JlUGVyc2lzdGVkLnJ0bFxuICAgICAgICAgICAgICAgICAgPyAnbGFzIGxhLWFuZ2xlLWxlZnQnXG4gICAgICAgICAgICAgICAgICA6ICdsYXMgbGEtYW5nbGUtcmlnaHQnXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1ncmV5LTUgZm9udDEzXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPC9xLWl0ZW0+XG5cbiAgICAgICAgPHEtaXRlbSBjbGlja2FibGUgdi1yaXBwbGUgQGNsaWNrPVwiaW52aXRlRnJpZW5kc1wiPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgICA8cS1pY29uIGNvbG9yPVwiZ3JleS01XCIgbmFtZT1cImxhcyBsYS11c2VyLWZyaWVuZHNcIiAvPlxuICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPnt7ICR0KFwiSW52aXRlIEZyaWVuZHNcIikgfX08L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlPlxuICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICAgICAgdGV4dC1jb2xvcj1cImRhcmtcIlxuICAgICAgICAgICAgICA6aWNvbj1cIlxuICAgICAgICAgICAgICAgIERhdGFTdG9yZVBlcnNpc3RlZC5ydGxcbiAgICAgICAgICAgICAgICAgID8gJ2xhcyBsYS1hbmdsZS1sZWZ0J1xuICAgICAgICAgICAgICAgICAgOiAnbGFzIGxhLWFuZ2xlLXJpZ2h0J1xuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICBjbGFzcz1cInRleHQtZ3JleS01IGZvbnQxM1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDwvcS1pdGVtPlxuXG4gICAgICAgIDxxLWl0ZW0gdG89XCIvbGVnYWxcIiBjbGlja2FibGUgdi1yaXBwbGU+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICAgIDxxLWljb24gY29sb3I9XCJncmV5LTVcIiBuYW1lPVwibGFzIGxhLWJhbGFuY2Utc2NhbGVcIiAvPlxuICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPnt7ICR0KFwiTGVnYWxcIikgfX08L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlPlxuICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICAgICAgdGV4dC1jb2xvcj1cImRhcmtcIlxuICAgICAgICAgICAgICA6aWNvbj1cIlxuICAgICAgICAgICAgICAgIERhdGFTdG9yZVBlcnNpc3RlZC5ydGxcbiAgICAgICAgICAgICAgICAgID8gJ2xhcyBsYS1hbmdsZS1sZWZ0J1xuICAgICAgICAgICAgICAgICAgOiAnbGFzIGxhLWFuZ2xlLXJpZ2h0J1xuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICBjbGFzcz1cInRleHQtZ3JleS01IGZvbnQxM1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDwvcS1pdGVtPlxuXG4gICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlIHYtcmlwcGxlIEBjbGljaz1cImxvZ291dFwiPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgICA8cS1pY29uIGNvbG9yPVwic2Vjb25kYXJ5XCIgbmFtZT1cImxhcyBsYS1zaWduLW91dC1hbHRcIiAvPlxuICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPnt7ICR0KFwiTG9nb3V0XCIpIH19PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZT5cbiAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICByb3VuZFxuICAgICAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgICAgIHRleHQtY29sb3I9XCJkYXJrXCJcbiAgICAgICAgICAgICAgOmljb249XCJcbiAgICAgICAgICAgICAgICBEYXRhU3RvcmVQZXJzaXN0ZWQucnRsXG4gICAgICAgICAgICAgICAgICA/ICdsYXMgbGEtYW5nbGUtbGVmdCdcbiAgICAgICAgICAgICAgICAgIDogJ2xhcyBsYS1hbmdsZS1yaWdodCdcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWdyZXktNSBmb250MTNcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8L3EtaXRlbT5cbiAgICAgIDwvcS1saXN0PlxuICAgIDwvcS1jYXJkPlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIGRlZmluZUFzeW5jQ29tcG9uZW50IH0gZnJvbSBcInZ1ZVwiO1xuaW1wb3J0IHsgRkNNIH0gZnJvbSBcIkBjYXBhY2l0b3ItY29tbXVuaXR5L2ZjbVwiO1xuaW1wb3J0IGF1dGggZnJvbSBcInNyYy9hcGkvYXV0aFwiO1xuaW1wb3J0IEFQSWludGVyZmFjZSBmcm9tIFwic3JjL2FwaS9BUElpbnRlcmZhY2VcIjtcbmltcG9ydCB7IHVzZURhdGFTdG9yZSB9IGZyb20gXCJzdG9yZXMvRGF0YVN0b3JlXCI7XG5pbXBvcnQgeyB1c2VEYXRhU3RvcmVQZXJzaXN0ZWQgfSBmcm9tIFwic3RvcmVzL0RhdGFTdG9yZVBlcnNpc3RlZFwiO1xuaW1wb3J0IHsgdXNlQ2xpZW50U3RvcmUgfSBmcm9tIFwic3RvcmVzL0NsaWVudFN0b3JlXCI7XG5pbXBvcnQgeyBTaGFyZSB9IGZyb20gXCJAY2FwYWNpdG9yL3NoYXJlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJBY2NvdW50TWVudVwiLFxuICBjb21wb25lbnRzOiB7XG4gICAgTm90aUJ1dHRvbjogZGVmaW5lQXN5bmNDb21wb25lbnQoKCkgPT4gaW1wb3J0KFwiY29tcG9uZW50cy9Ob3RpQnV0dG9uLnZ1ZVwiKSksXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IFtdLFxuICAgICAgdGhlbWVfbW9kZTogZmFsc2UsXG4gICAgICBhcHBfcHVzaF9ub3RpZmljYXRpb25zOiBmYWxzZSxcbiAgICAgIHByb21vdGlvbmFsX3B1c2hfbm90aWZpY2F0aW9uczogZmFsc2UsXG4gICAgICB1c2VyX3NldHRpbmdzOiB7fSxcbiAgICAgIHJ0bDogZmFsc2UsXG4gICAgfTtcbiAgfSxcbiAgc2V0dXAoKSB7XG4gICAgY29uc3QgRGF0YVN0b3JlID0gdXNlRGF0YVN0b3JlKCk7XG4gICAgY29uc3QgRGF0YVN0b3JlUGVyc2lzdGVkID0gdXNlRGF0YVN0b3JlUGVyc2lzdGVkKCk7XG4gICAgY29uc3QgQ2xpZW50U3RvcmUgPSB1c2VDbGllbnRTdG9yZSgpO1xuICAgIHJldHVybiB7IERhdGFTdG9yZSwgRGF0YVN0b3JlUGVyc2lzdGVkLCBDbGllbnRTdG9yZSB9O1xuICB9LFxuICB3YXRjaDoge1xuICAgIHRoZW1lX21vZGUobmV3dmFsLCBvbGR2YWwpIHtcbiAgICAgIHRoaXMuJHEuZGFyay5zZXQobmV3dmFsKTtcbiAgICAgIHRoaXMuRGF0YVN0b3JlUGVyc2lzdGVkLmRhcmtfbW9kZSA9IG5ld3ZhbDtcbiAgICB9LFxuICAgIHJ0bChuZXd2YWwsIG9sZHZhbCkge1xuICAgICAgdGhpcy5EYXRhU3RvcmVQZXJzaXN0ZWQucnRsID0gbmV3dmFsO1xuICAgICAgdGhpcy4kcS5sYW5nLnNldCh7IHJ0bDogbmV3dmFsIH0pO1xuICAgIH0sXG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5kYXRhID0gYXV0aC5nZXRVc2VyKCk7XG4gICAgdGhpcy5hdXRoZW50aWNhdGUoKTtcblxuICAgIHRoaXMudGhlbWVfbW9kZSA9IHRoaXMuRGF0YVN0b3JlUGVyc2lzdGVkLmRhcmtfbW9kZTtcbiAgICB0aGlzLiRxLmRhcmsuc2V0KHRoaXMudGhlbWVfbW9kZSk7XG5cbiAgICB0aGlzLnJ0bCA9IHRoaXMuRGF0YVN0b3JlUGVyc2lzdGVkLnJ0bDtcblxuICAgIHRoaXMuYXBwX3B1c2hfbm90aWZpY2F0aW9ucyA9XG4gICAgICB0aGlzLkNsaWVudFN0b3JlLnVzZXJfc2V0dGluZ3MuYXBwX3B1c2hfbm90aWZpY2F0aW9ucyA9PSAxID8gdHJ1ZSA6IGZhbHNlO1xuICAgIHRoaXMucHJvbW90aW9uYWxfcHVzaF9ub3RpZmljYXRpb25zID1cbiAgICAgIHRoaXMuQ2xpZW50U3RvcmUudXNlcl9zZXR0aW5ncy5wcm9tb3Rpb25hbF9wdXNoX25vdGlmaWNhdGlvbnMgPT0gMVxuICAgICAgICA/IHRydWVcbiAgICAgICAgOiBmYWxzZTtcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBnZXRDdXJyZW5jeSgpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLkRhdGFTdG9yZS5jdXJyZW5jeV9saXN0KS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBDdXJyZW5jeSA9IHRoaXMuRGF0YVN0b3JlUGVyc2lzdGVkLnVzZV9jdXJyZW5jeV9jb2RlXG4gICAgICAgICAgPyB0aGlzLkRhdGFTdG9yZVBlcnNpc3RlZC51c2VfY3VycmVuY3lfY29kZVxuICAgICAgICAgIDogdGhpcy5EYXRhU3RvcmUuZGVmYXVsdF9jdXJyZW5jeV9jb2RlO1xuICAgICAgICByZXR1cm4gQ3VycmVuY3k7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGF1dGhlbnRpY2F0ZSgpIHtcbiAgICAgIGF1dGhcbiAgICAgICAgLmF1dGhlbnRpY2F0ZSgpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgLy9cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJkYXJrXCIsIGVycm9yLCBcImVycm9yXCIsIHRoaXMuJHEpO1xuICAgICAgICAgIGF1dGgubG9nb3V0KCk7XG4gICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goXCIvdXNlci9sb2dpblwiKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHt9KTtcbiAgICB9LFxuICAgIGxvZ291dCgpIHtcbiAgICAgIHRoaXMuJHFcbiAgICAgICAgLmRpYWxvZyh7XG4gICAgICAgICAgdGl0bGU6IHRoaXMuJHQoXCJMb2dvdXRcIiksXG4gICAgICAgICAgbWVzc2FnZTogdGhpcy4kdChcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBsb2dvdXQ/XCIpLFxuICAgICAgICAgIHBlcnNpc3RlbnQ6IHRydWUsXG4gICAgICAgICAgcG9zaXRpb246IFwic3RhbmRhcmRcIixcbiAgICAgICAgICB0cmFuc2l0aW9uU2hvdzogXCJmYWRlXCIsXG4gICAgICAgICAgdHJhbnNpdGlvbkhpZGU6IFwiZmFkZVwiLFxuICAgICAgICAgIG9rOiB7XG4gICAgICAgICAgICB1bmVsZXZhdGVkOiB0cnVlLFxuICAgICAgICAgICAgY29sb3I6IFwicHJpbWFyeVwiLFxuICAgICAgICAgICAgcm91bmRlZDogZmFsc2UsXG4gICAgICAgICAgICBcInRleHQtY29sb3JcIjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgc2l6ZTogXCJtZFwiLFxuICAgICAgICAgICAgbGFiZWw6IHRoaXMuJHQoXCJZZXNcIiksXG4gICAgICAgICAgICBcIm5vLWNhcHNcIjogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNhbmNlbDoge1xuICAgICAgICAgICAgdW5lbGV2YXRlZDogdHJ1ZSxcbiAgICAgICAgICAgIHJvdW5kZWQ6IGZhbHNlLFxuICAgICAgICAgICAgY29sb3I6IFwiZ3JleS0zXCIsXG4gICAgICAgICAgICBcInRleHQtY29sb3JcIjogXCJibGFja1wiLFxuICAgICAgICAgICAgc2l6ZTogXCJtZFwiLFxuICAgICAgICAgICAgbGFiZWw6IHRoaXMuJHQoXCJDYW5jZWxcIiksXG4gICAgICAgICAgICBcIm5vLWNhcHNcIjogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICAub25PaygoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuJHEuY2FwYWNpdG9yKSB7XG4gICAgICAgICAgICBsZXQgJHVzZXJfZGF0YSA9IGF1dGguZ2V0VXNlcigpO1xuICAgICAgICAgICAgaWYgKCR1c2VyX2RhdGEpIHtcbiAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZVRvVG9waWMoJHVzZXJfZGF0YS5jbGllbnRfdXVpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYXV0aC5sb2dvdXQoKTtcbiAgICAgICAgICB0aGlzLkNsaWVudFN0b3JlLnVzZXJfc2V0dGluZ3MgPSBbXTtcbiAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaChcIi9ob21lXCIpO1xuICAgICAgICB9KVxuICAgICAgICAub25PaygoKSA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJz4+Pj4gc2Vjb25kIE9LIGNhdGNoZXInKVxuICAgICAgICB9KVxuICAgICAgICAub25DYW5jZWwoKCkgPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCc+Pj4+IENhbmNlbCcpXG4gICAgICAgIH0pXG4gICAgICAgIC5vbkRpc21pc3MoKCkgPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdJIGFtIHRyaWdnZXJlZCBvbiBib3RoIE9LIGFuZCBDYW5jZWwnKVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIFVwZGF0ZWFjY291bnRub3RpZmljYXRpb24odmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLiRxLmNhcGFjaXRvcikge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICB0aGlzLnN1YnNyaWJlRGV2aWNlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0ICR1c2VyX2RhdGEgPSBhdXRoLmdldFVzZXIoKTtcbiAgICAgICAgICBpZiAoJHVzZXJfZGF0YSkge1xuICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZVRvVG9waWMoJHVzZXJfZGF0YS5jbGllbnRfdXVpZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBBUElpbnRlcmZhY2UuZmV0Y2hEYXRhQnlUb2tlblBvc3QoXG4gICAgICAgICAgXCJVcGRhdGVhY2NvdW50bm90aWZpY2F0aW9uXCIsXG4gICAgICAgICAgXCJhcHBfcHVzaF9ub3RpZmljYXRpb25zPVwiICsgdGhpcy5DbGllbnRTdG9yZS5wdXNoX25vdGlmaWNhdGlvbnNcbiAgICAgICAgKVxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICB0aGlzLkNsaWVudFN0b3JlLnVzZXJfc2V0dGluZ3MuYXBwX3B1c2hfbm90aWZpY2F0aW9ucyA9XG4gICAgICAgICAgICAgIGRhdGEuZGV0YWlscy5hcHBfcHVzaF9ub3RpZmljYXRpb25zO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge30pXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHt9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFVwZGF0ZWFjY291bnRwcm9tb25vdGlmaWNhdGlvbigpIHtcbiAgICAgIEFQSWludGVyZmFjZS5mZXRjaERhdGFCeVRva2VuUG9zdChcbiAgICAgICAgXCJVcGRhdGVhY2NvdW50cHJvbW9ub3RpZmljYXRpb25cIixcbiAgICAgICAgXCJwcm9tb3Rpb25hbF9wdXNoX25vdGlmaWNhdGlvbnM9XCIgKyB0aGlzLnByb21vdGlvbmFsX3B1c2hfbm90aWZpY2F0aW9uc1xuICAgICAgKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuQ2xpZW50U3RvcmUudXNlcl9zZXR0aW5ncy5wcm9tb3Rpb25hbF9wdXNoX25vdGlmaWNhdGlvbnMgPVxuICAgICAgICAgICAgZGF0YS5kZXRhaWxzLnByb21vdGlvbmFsX3B1c2hfbm90aWZpY2F0aW9ucztcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge30pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7fSk7XG4gICAgfSxcbiAgICBpbnZpdGVGcmllbmRzKCkge1xuICAgICAgaWYgKHRoaXMuJHEuY2FwYWNpdG9yKSB7XG4gICAgICAgIFNoYXJlLnNoYXJlKHtcbiAgICAgICAgICB0aXRsZTogdGhpcy5EYXRhU3RvcmUuaW52aXRlX2ZyaWVuZF9zZXR0aW5ncy50aXRsZSxcbiAgICAgICAgICB0ZXh0OiB0aGlzLkRhdGFTdG9yZS5pbnZpdGVfZnJpZW5kX3NldHRpbmdzLnRleHQsXG4gICAgICAgICAgdXJsOiB0aGlzLkRhdGFTdG9yZS5pbnZpdGVfZnJpZW5kX3NldHRpbmdzLnVybCxcbiAgICAgICAgICBkaWFsb2dUaXRsZTogXCJcIixcbiAgICAgICAgfSlcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIC8vQVBJaW50ZXJmYWNlLm5vdGlmeShcImRhcmtcIiwgZXJyb3IsIFwiZXJyb3JcIiwgdGhpcy4kcSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobmF2aWdhdG9yLnNoYXJlKSB7XG4gICAgICAgICAgbmF2aWdhdG9yXG4gICAgICAgICAgICAuc2hhcmUoe1xuICAgICAgICAgICAgICB0aXRsZTogdGhpcy5EYXRhU3RvcmUuaW52aXRlX2ZyaWVuZF9zZXR0aW5ncy50aXRsZSxcbiAgICAgICAgICAgICAgdGV4dDogdGhpcy5EYXRhU3RvcmUuaW52aXRlX2ZyaWVuZF9zZXR0aW5ncy50ZXh0LFxuICAgICAgICAgICAgICB1cmw6IHRoaXMuRGF0YVN0b3JlLmludml0ZV9mcmllbmRfc2V0dGluZ3MudXJsLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKFwiU3VjY2Vzc2Z1bCBzaGFyZVwiKSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKFwiRXJyb3Igc2hhcmluZ1wiLCBlcnJvcikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLiRxLmNhcGFjaXRvcikge1xuICAgICAgICAgICAgQVBJaW50ZXJmYWNlLnNob3dUb2FzdChcIlNoYXJlIG5vdCBzdXBwb3J0ZWRcIik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXG4gICAgICAgICAgICAgIFwiZGFya1wiLFxuICAgICAgICAgICAgICBcIlNoYXJlIG5vdCBzdXBwb3J0ZWRcIixcbiAgICAgICAgICAgICAgXCJlcnJvclwiLFxuICAgICAgICAgICAgICB0aGlzLiRxXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgc3Vic3JpYmVEZXZpY2UoKSB7XG4gICAgICBsZXQgJHVzZXJfZGF0YSA9IGF1dGguZ2V0VXNlcigpO1xuICAgICAgaWYgKCR1c2VyX2RhdGEpIHtcbiAgICAgICAgRkNNLnN1YnNjcmliZVRvKHsgdG9waWM6ICR1c2VyX2RhdGEuY2xpZW50X3V1aWQgfSlcbiAgICAgICAgICAudGhlbigocikgPT4ge1xuICAgICAgICAgICAgdGhpcy5DbGllbnRTdG9yZS5wdXNoX25vdGlmaWNhdGlvbnMgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5DbGllbnRTdG9yZS5wdXNoX29mZiA9IGZhbHNlO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5DbGllbnRTdG9yZS5wdXNoX25vdGlmaWNhdGlvbnMgPSBmYWxzZTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHVuc3Vic2NyaWJlVG9Ub3BpYyhkYXRhKSB7XG4gICAgICBGQ00udW5zdWJzY3JpYmVGcm9tKHsgdG9waWM6IGRhdGEgfSlcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuQ2xpZW50U3RvcmUucHVzaF9ub3RpZmljYXRpb25zID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5DbGllbnRTdG9yZS5wdXNoX29mZiA9IHRydWU7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7fSk7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiJdLCJmaWxlIjoiYXNzZXRzL0FjY291bnRNZW51LmFkNDJhYjhlLmpzIn0=
