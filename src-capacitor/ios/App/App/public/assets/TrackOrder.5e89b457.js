import { m as APIinterface, _ as _export_sfc, l as defineAsyncComponent, R as useDataStore, aw as auth, n as resolveComponent, p as openBlock, V as createElementBlock, q as createBlock, t as withCtx, a7 as normalizeClass, aA as createCommentVNode, f as createVNode, F as Fragment, Y as QBtn, a6 as createTextVNode, Z as toDisplayString, U as createBaseVNode, ac as QItem, ad as QItemSection, ae as QAvatar, u as __vitePreload } from "./index.61ed5618.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QInnerLoading } from "./QInnerLoading.abe2afe6.js";
import { Q as QLinearProgress } from "./QLinearProgress.95e9a35e.js";
import { Q as QStep, a as QStepper } from "./QStepper.90c3f5dd.js";
import { Q as QImg } from "./QImg.6c27044c.js";
import { Q as QItemLabel } from "./QItemLabel.a9365c5b.js";
import { Q as QList } from "./QList.b69a7e5b.js";
import { Q as QFooter } from "./QFooter.571ac042.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import { s as serverTimestamp, a as setDoc, d as doc, f as firebaseDb, b as firebaseCollectionEnum, c as collection, q as query, w as where, o as orderBy, l as limit, g as getDocs, e as addDoc } from "./FirebaseChat.3fe55950.js";
import "./QResizeObserver.d08dce3c.js";
import "./QSlideTransition.edc8ce9e.js";
import "./use-panel.225d73f4.js";
import "./touch.96e0ae37.js";
import "./selection.50b4cb0c.js";
import "./use-render-cache.b9e045af.js";
const FirebaseService = {
  async createChatOrder(orderID, orderUUID, MerchantUUID, UserUUID) {
    let myPromise = new Promise(async function(resolve, reject) {
      try {
        const data = {
          lastUpdated: serverTimestamp(),
          dateCreated: serverTimestamp(),
          orderID,
          orderUuid: orderUUID,
          participants: [MerchantUUID, UserUUID],
          isTyping: {
            [`${MerchantUUID}`]: false,
            [`${UserUUID}`]: false
          }
        };
        await setDoc(
          doc(firebaseDb, firebaseCollectionEnum.chats, orderUUID),
          data
        );
        resolve(orderUUID);
      } catch (error) {
        reject(error);
      }
    });
    return await myPromise;
  },
  async createChat(fromUserId, toUserId) {
    let myPromise = new Promise(async function(resolve, reject) {
      try {
        const collectionRef = collection(
          firebaseDb,
          firebaseCollectionEnum.chats
        );
        const q = query(
          collectionRef,
          where("participants", "array-contains", toUserId),
          orderBy("lastUpdated", "desc"),
          limit(1)
        );
        let documentId = "";
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc2) => {
          let data = doc2.data();
          let participants = data.participants || null;
          if (participants.includes(fromUserId) === true) {
            documentId = doc2.id;
          }
        });
        if (!APIinterface.empty(documentId)) {
          resolve(documentId);
        } else {
          const newConversationRef = await addDoc(
            collection(firebaseDb, firebaseCollectionEnum.chats),
            {
              lastUpdated: serverTimestamp()
            }
          );
          const chatId = newConversationRef.id;
          const chatDocRef = doc(
            firebaseDb,
            firebaseCollectionEnum.chats,
            chatId
          );
          let data = {
            lastUpdated: serverTimestamp(),
            dateCreated: serverTimestamp(),
            participants: [toUserId, fromUserId],
            isTyping: {
              [`${toUserId}`]: false,
              [`${fromUserId}`]: false
            }
          };
          setDoc(chatDocRef, data).then(() => {
            resolve(chatId);
          }).catch((error) => {
            reject(error);
          });
        }
      } catch (error) {
        reject(error);
      }
    });
    return await myPromise;
  }
};
const _sfc_main = {
  name: "TrackOrder",
  components: {
    MapsComponents: defineAsyncComponent(
      () => __vitePreload(() => import("./MapsComponents.da461108.js"), true ? ["assets/MapsComponents.da461108.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/index.d0b40bd3.js"] : void 0)
    ),
    ComponentsRealtime: defineAsyncComponent(
      () => __vitePreload(() => import("./ComponentsRealtime.d8c5a360.js"), true ? ["assets/ComponentsRealtime.d8c5a360.js","assets/index.d0b40bd3.js","assets/index.61ed5618.js","assets/index.dbee30c0.css"] : void 0)
    )
  },
  data() {
    return {
      order_progress: -1,
      order_details: true,
      loading: false,
      order_uuid: "",
      lat: "",
      lng: "",
      merchant_info: [],
      order_info: [],
      items: [],
      meta: [],
      items_count: 0,
      order_status: "",
      order_status_details: "",
      instructions: [],
      map_marker: {},
      map_center: {},
      loading_chat: false,
      user_uuid: ""
    };
  },
  setup() {
    const DataStore = useDataStore();
    return { DataStore };
  },
  mounted() {
    this.order_uuid = this.$route.query.order_uuid;
    let user = auth.getUser();
    this.user_uuid = user.client_uuid;
    this.getOrder();
  },
  computed: {
    hasMarkers() {
      if (Object.keys(this.map_marker).length > 0) {
        return true;
      }
      return false;
    }
  },
  methods: {
    getOrder() {
      this.loading = true;
      APIinterface.getOrder(this.order_uuid).then((data) => {
        this.merchant_info = data.details.merchant_info;
        this.order_info = data.details.order_info;
        this.items = data.details.items;
        this.meta = data.details.meta;
        this.items_count = data.details.items_count;
        this.order_progress = data.details.progress.order_progress;
        this.order_status = data.details.progress.order_status;
        this.order_status_details = data.details.progress.order_status_details;
        this.instructions = data.details.instructions;
        if (this.order_info.order_type === "delivery") {
          this.map_center = {
            lat: parseFloat(this.merchant_info.latitude),
            lng: parseFloat(this.merchant_info.longitude)
          };
          this.map_marker = [
            {
              lat: parseFloat(this.merchant_info.latitude),
              lng: parseFloat(this.merchant_info.longitude),
              label: APIinterface.getIcon("merchant"),
              icon: "marker_icon_merchant",
              draggable: false
            },
            {
              lat: parseFloat(this.meta.latitude),
              lng: parseFloat(this.meta.longitude),
              label: APIinterface.getIcon("customer"),
              icon: "marker_icon_destination",
              draggable: false
            }
          ];
        } else {
          this.map_marker = [
            {
              lat: parseFloat(this.merchant_info.latitude),
              lng: parseFloat(this.merchant_info.longitude),
              label: APIinterface.getIcon("merchant"),
              icon: "marker_icon_merchant",
              draggable: false
            }
          ];
          this.map_center = {
            lat: parseFloat(this.merchant_info.latitude),
            lng: parseFloat(this.merchant_info.longitude)
          };
        }
      }).catch((error) => {
        APIinterface.notify("red-5", error, "error_outline", this.$q);
      }).then((data) => {
        this.loading = false;
      });
    },
    afterReceive(data) {
      if (data.order_id !== this.order_info.order_id) {
        return false;
      }
      if (data.order_progress === 0) {
        this.order_progress = data.order_progress;
        this.order_status = data.order_status;
        this.order_status_details = data.order_status_details;
      } else if (data.order_progress === -1)
        ;
      else {
        this.order_progress = data.order_progress;
        this.order_status = data.order_status;
        this.order_status_details = data.order_status_details;
      }
    },
    async createChat() {
      this.loading_chat = true;
      FirebaseService.createChatOrder(
        this.order_info.order_id,
        this.order_uuid,
        this.merchant_info.merchant_uuid,
        this.user_uuid
      ).then((documentId) => {
        this.$router.push({
          path: "/account/chat/conversation",
          query: { doc_id: documentId }
        });
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data) => {
        this.loading_chat = false;
      });
    }
  }
};
const _hoisted_1 = { class: "col-12" };
const _hoisted_2 = {
  key: 0,
  class: "absolute-top-left full-width q-pa-sm",
  style: { "z-index": "999" }
};
const _hoisted_3 = { class: "flex" };
const _hoisted_4 = { class: "bg-white radius8 q-pl-sm q-pr-sm" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MapsComponents = resolveComponent("MapsComponents");
  const _component_ComponentsRealtime = resolveComponent("ComponentsRealtime");
  return openBlock(), createElementBlock(Fragment, null, [
    _ctx.$q.platform.is.ios ? (openBlock(), createBlock(QHeader, {
      key: 0,
      class: normalizeClass({
        "bg-mydark text-white": _ctx.$q.dark.mode,
        "bg-white text-black": !_ctx.$q.dark.mode
      })
    }, {
      default: withCtx(() => [
        createVNode(QToolbar, null, {
          default: withCtx(() => [
            createVNode(QBtn, {
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$router.back()),
              flat: "",
              round: "",
              dense: "",
              icon: "close",
              class: "q-mr-sm",
              color: _ctx.$q.dark.mode ? "white" : "dark"
            }, null, 8, ["color"]),
            createVNode(QToolbarTitle, { class: "text-weight-bold" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("Order #")) + toDisplayString($data.order_info.order_id), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["class"])) : createCommentVNode("", true),
    createVNode(QPage, {
      class: normalizeClass(["row items-stretch", {
        "bg-mydark ": _ctx.$q.dark.mode,
        "bg-grey-1 ": !_ctx.$q.dark.mode
      }])
    }, {
      default: withCtx(() => [
        $data.loading ? (openBlock(), createBlock(QInnerLoading, {
          key: 0,
          showing: true,
          size: "md",
          color: "primary"
        })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createBaseVNode("div", _hoisted_1, [
            !_ctx.$q.platform.is.ios ? (openBlock(), createElementBlock("div", _hoisted_2, [
              createBaseVNode("div", _hoisted_3, [
                createVNode(QBtn, {
                  onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$router.back()),
                  round: "",
                  dense: "",
                  icon: "close",
                  class: "q-mr-sm",
                  color: _ctx.$q.dark.mode ? "white" : "dark",
                  unelevated: "",
                  size: "sm"
                }, null, 8, ["color"]),
                createBaseVNode("div", _hoisted_4, toDisplayString(_ctx.$t("Order #")) + toDisplayString($data.order_info.order_id), 1)
              ])
            ])) : createCommentVNode("", true),
            !$data.loading && $options.hasMarkers ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              $setup.DataStore.hasMapConfig ? (openBlock(), createBlock(_component_MapsComponents, {
                key: 0,
                ref: "mapRef",
                class: "maps",
                size: "fit",
                keys: $setup.DataStore.maps_config.key,
                provider: $setup.DataStore.maps_config.provider,
                zoom: $setup.DataStore.maps_config.zoom,
                center: $data.map_center,
                markers: $data.map_marker,
                onAfterSelectmap: _ctx.afterSelectmap
              }, null, 8, ["keys", "provider", "zoom", "center", "markers", "onAfterSelectmap"])) : createCommentVNode("", true)
            ], 64)) : createCommentVNode("", true)
          ]),
          createVNode(QFooter, {
            reveal: "",
            class: "bg-white q-pl-md q-pr-md q-pt-md text-dark",
            style: { "border-top-right-radius": "15px", "border-top-left-radius": "15px", "bottom": "10px" }
          }, {
            default: withCtx(() => [
              $data.order_info.order_type == "delivery" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                $data.order_progress > 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  $data.order_progress <= 3 ? (openBlock(), createBlock(QLinearProgress, {
                    key: 0,
                    indeterminate: "",
                    color: "secondary"
                  })) : createCommentVNode("", true)
                ], 64)) : createCommentVNode("", true)
              ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                $data.order_progress > 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  $data.order_progress <= 2 ? (openBlock(), createBlock(QLinearProgress, {
                    key: 0,
                    indeterminate: "",
                    color: "warning"
                  })) : createCommentVNode("", true)
                ], 64)) : createCommentVNode("", true)
              ], 64)),
              createBaseVNode("h5", {
                class: normalizeClass(["text-weight-bold q-mt-sm q-mb-none", {
                  "text-white": _ctx.$q.dark.mode,
                  "text-dark": !_ctx.$q.dark.mode
                }])
              }, toDisplayString($data.order_status), 3),
              createBaseVNode("p", {
                class: normalizeClass(["no-margin font11", {
                  "text-white": _ctx.$q.dark.mode,
                  "text-dark": !_ctx.$q.dark.mode
                }])
              }, toDisplayString($data.order_status_details), 3),
              $data.order_info.order_type == "delivery" ? (openBlock(), createBlock(QStepper, {
                key: 2,
                modelValue: $data.order_progress,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.order_progress = $event),
                ref: "stepper",
                color: "primary",
                animated: "",
                flat: "",
                class: normalizeClass(["no-padding tracking-steps", {
                  "bg-mydark text-white": _ctx.$q.dark.mode,
                  "bg-white text-black": !_ctx.$q.dark.mode
                }])
              }, {
                default: withCtx(() => [
                  createVNode(QStep, {
                    name: 1,
                    title: "",
                    icon: "east",
                    "active-icon": "east",
                    "done-icon": "east",
                    "active-color": "primary",
                    "done-color": $data.order_progress > 1 ? "primary" : "negative",
                    done: $data.order_progress > 1 || $data.order_progress <= 0
                  }, null, 8, ["done-color", "done"]),
                  createVNode(QStep, {
                    name: 2,
                    title: "",
                    icon: "local_dining",
                    "active-icon": "local_dining",
                    "done-icon": "local_dining",
                    "active-color": "primary",
                    "done-color": $data.order_progress > 1 ? "primary" : "negative",
                    done: $data.order_progress > 2 || $data.order_progress <= 0
                  }, null, 8, ["done-color", "done"]),
                  createVNode(QStep, {
                    name: 3,
                    title: "",
                    icon: "drive_eta",
                    "active-icon": "drive_eta",
                    "done-icon": "drive_eta",
                    "active-color": "primary",
                    "done-color": $data.order_progress > 1 ? "primary" : "negative",
                    done: $data.order_progress > 3 || $data.order_progress <= 0
                  }, null, 8, ["done-color", "done"]),
                  createVNode(QStep, {
                    name: 4,
                    title: "",
                    icon: "home",
                    "active-icon": "home",
                    "done-icon": "check_circle",
                    "active-color": "primary",
                    "done-color": $data.order_progress > 1 ? "primary" : "negative",
                    done: $data.order_progress >= 4 || $data.order_progress <= 0
                  }, null, 8, ["done-color", "done"])
                ]),
                _: 1
              }, 8, ["modelValue", "class"])) : (openBlock(), createBlock(QStepper, {
                key: 3,
                modelValue: $data.order_progress,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.order_progress = $event),
                ref: "stepper",
                color: "primary",
                animated: "",
                flat: "",
                class: "no-padding tracking-steps"
              }, {
                default: withCtx(() => [
                  createVNode(QStep, {
                    name: 1,
                    title: "",
                    icon: "east",
                    "active-icon": "east",
                    "done-icon": "east",
                    "active-color": "primary",
                    "done-color": $data.order_progress > 1 ? "primary" : "negative",
                    done: $data.order_progress > 1 || $data.order_progress <= 0
                  }, null, 8, ["done-color", "done"]),
                  createVNode(QStep, {
                    name: 2,
                    title: "",
                    icon: "local_dining",
                    "active-icon": "local_dining",
                    "done-icon": "local_dining",
                    "active-color": "primary",
                    "done-color": $data.order_progress > 1 ? "primary" : "negative",
                    done: $data.order_progress > 2 || $data.order_progress <= 0
                  }, null, 8, ["done-color", "done"]),
                  createVNode(QStep, {
                    name: 3,
                    title: "",
                    icon: "shopping_basket",
                    "active-icon": "shopping_basket",
                    "done-icon": "check_circle",
                    "active-color": "primary",
                    "done-color": $data.order_progress > 1 ? "primary" : "negative",
                    done: $data.order_progress >= 3 || $data.order_progress <= 0
                  }, null, 8, ["done-color", "done"])
                ]),
                _: 1
              }, 8, ["modelValue"])),
              createVNode(QList, { class: "q-mb-sm q-mt-sm" }, {
                default: withCtx(() => [
                  createVNode(QItem, { clickable: "" }, {
                    default: withCtx(() => [
                      createVNode(QItemSection, { avatar: "" }, {
                        default: withCtx(() => [
                          createVNode(QAvatar, null, {
                            default: withCtx(() => [
                              createVNode(QImg, {
                                src: $data.merchant_info.url_logo,
                                fit: _ctx.contain,
                                style: { "height": "50px", "max-width": "50px" },
                                class: "no-margin",
                                loading: "lazy"
                              }, null, 8, ["src", "fit"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(QItemSection, null, {
                        default: withCtx(() => [
                          createVNode(QItemLabel, {
                            lines: "1",
                            class: "text-weight-bold"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString($data.merchant_info.restaurant_name), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(QItemLabel, {
                            caption: "",
                            lines: "2",
                            class: "font11"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString($data.merchant_info.merchant_address), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(QItemSection, { side: "" }, {
                        default: withCtx(() => [
                          createVNode(QBtn, {
                            square: "",
                            color: "secondary",
                            unelevated: "",
                            "text-color": "white",
                            icon: "las la-phone",
                            dense: "",
                            class: "radius8",
                            href: "tel:" + $data.merchant_info.contact_phone
                          }, null, 8, ["href"])
                        ]),
                        _: 1
                      }),
                      $setup.DataStore.chat_enabled ? (openBlock(), createBlock(QItemSection, {
                        key: 0,
                        side: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(QBtn, {
                            square: "",
                            color: "blue",
                            unelevated: "",
                            "text-color": "white",
                            icon: "o_chat",
                            dense: "",
                            class: "radius8",
                            onClick: $options.createChat,
                            loading: $data.loading_chat
                          }, null, 8, ["onClick", "loading"])
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["class"]),
    createVNode(_component_ComponentsRealtime, {
      ref: "realtime",
      getevent: "tracking",
      onAfterReceive: $options.afterReceive
    }, null, 8, ["onAfterReceive"])
  ], 64);
}
var TrackOrder = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "TrackOrder.vue"]]);
export { TrackOrder as default };
//# sourceMappingURL=data:application/json;base64,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NEJBQUksT0FBTTtBQUFBOzZDQUFtQixNQUUvQztBQUFBLDhCQURBTSxvREFBYyxlQUFlO0FBQUE7OzswQkFFL0JOLFlBRWlCO0FBQUEsNEJBRkg7QUFBQSw0QkFBUSxPQUFNO0FBQUEsNEJBQUksT0FBTTtBQUFBOzZDQUFTLE1BRTdDO0FBQUEsOEJBREFNLG9EQUFjLGdCQUFnQjtBQUFBOzs7Ozs7c0JBR2xDTixZQVdpQjtBQUFBLHlDQVZmLE1BU0U7QUFBQSwwQkFURkEsWUFTRTtBQUFBLDRCQVJBO0FBQUEsNEJBQ0EsT0FBTTtBQUFBLDRCQUNOO0FBQUEsNEJBQ0EsY0FBVztBQUFBLDRCQUNYLE1BQUs7QUFBQSw0QkFDTDtBQUFBLDRCQUNBLE9BQU07QUFBQSw0QkFDTCxNQUFJLFNBQVcsTUFBYSxjQUFDO0FBQUE7Ozs7c0JBR1AsaUJBQVUsNkJBQXJDRixZQVlpQjtBQUFBO3dCQVpEO0FBQUE7eUNBQ2QsTUFVRTtBQUFBLDBCQVZGRSxZQVVFO0FBQUEsNEJBVEE7QUFBQSw0QkFDQSxPQUFNO0FBQUEsNEJBQ047QUFBQSw0QkFDQSxjQUFXO0FBQUEsNEJBQ1gsTUFBSztBQUFBLDRCQUNMO0FBQUEsNEJBQ0EsT0FBTTtBQUFBLDRCQUNMLFNBQU8sU0FBVTtBQUFBLDRCQUNqQixTQUFTLE1BQVk7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFTcENBLFlBSUU7QUFBQSxNQUhBLEtBQUk7QUFBQSxNQUNKLFVBQVM7QUFBQSxNQUNSLGdCQUFlLFNBQVk7QUFBQSIsIm5hbWVzIjpbImRvYyIsIl9jcmVhdGVCbG9jayIsIl9ub3JtYWxpemVDbGFzcyIsIl9jcmVhdGVWTm9kZSIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfRnJhZ21lbnQiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX29wZW5CbG9jayIsIl90b0Rpc3BsYXlTdHJpbmciLCJfY3JlYXRlVGV4dFZOb2RlIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwaS9GaXJlYmFzZVNlcnZpY2UuanMiLCIuLi8uLi8uLi9zcmMvcGFnZXMvQWNjb3VudC9UcmFja09yZGVyLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmaXJlYmFzZURiLCBmaXJlYmFzZUNvbGxlY3Rpb25FbnVtIH0gZnJvbSBcInNyYy9ib290L0ZpcmViYXNlQ2hhdFwiO1xuaW1wb3J0IEFQSWludGVyZmFjZSBmcm9tIFwic3JjL2FwaS9BUElpbnRlcmZhY2VcIjtcbmltcG9ydCB7XG4gIGNvbGxlY3Rpb24sXG4gIHF1ZXJ5LFxuICB3aGVyZSxcbiAgb3JkZXJCeSxcbiAgbGltaXQsXG4gIGdldERvY3MsXG4gIHNlcnZlclRpbWVzdGFtcCxcbiAgYWRkRG9jLFxuICBkb2MsXG4gIHNldERvYyxcbn0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuXG5jb25zdCBGaXJlYmFzZVNlcnZpY2UgPSB7XG4gIGFzeW5jIGNyZWF0ZUNoYXRPcmRlcihvcmRlcklELCBvcmRlclVVSUQsIE1lcmNoYW50VVVJRCwgVXNlclVVSUQpIHtcbiAgICBsZXQgbXlQcm9taXNlID0gbmV3IFByb21pc2UoYXN5bmMgZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICBsYXN0VXBkYXRlZDogc2VydmVyVGltZXN0YW1wKCksXG4gICAgICAgICAgZGF0ZUNyZWF0ZWQ6IHNlcnZlclRpbWVzdGFtcCgpLFxuICAgICAgICAgIG9yZGVySUQ6IG9yZGVySUQsXG4gICAgICAgICAgb3JkZXJVdWlkOiBvcmRlclVVSUQsXG4gICAgICAgICAgcGFydGljaXBhbnRzOiBbTWVyY2hhbnRVVUlELCBVc2VyVVVJRF0sXG4gICAgICAgICAgaXNUeXBpbmc6IHtcbiAgICAgICAgICAgIFtgJHtNZXJjaGFudFVVSUR9YF06IGZhbHNlLFxuICAgICAgICAgICAgW2Ake1VzZXJVVUlEfWBdOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBhd2FpdCBzZXREb2MoXG4gICAgICAgICAgZG9jKGZpcmViYXNlRGIsIGZpcmViYXNlQ29sbGVjdGlvbkVudW0uY2hhdHMsIG9yZGVyVVVJRCksXG4gICAgICAgICAgZGF0YVxuICAgICAgICApO1xuICAgICAgICByZXNvbHZlKG9yZGVyVVVJRCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBhd2FpdCBteVByb21pc2U7XG4gIH0sXG4gIGFzeW5jIGNyZWF0ZUNoYXQoZnJvbVVzZXJJZCwgdG9Vc2VySWQpIHtcbiAgICBsZXQgbXlQcm9taXNlID0gbmV3IFByb21pc2UoYXN5bmMgZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY29sbGVjdGlvblJlZiA9IGNvbGxlY3Rpb24oXG4gICAgICAgICAgZmlyZWJhc2VEYixcbiAgICAgICAgICBmaXJlYmFzZUNvbGxlY3Rpb25FbnVtLmNoYXRzXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHEgPSBxdWVyeShcbiAgICAgICAgICBjb2xsZWN0aW9uUmVmLFxuICAgICAgICAgIHdoZXJlKFwicGFydGljaXBhbnRzXCIsIFwiYXJyYXktY29udGFpbnNcIiwgdG9Vc2VySWQpLFxuICAgICAgICAgIG9yZGVyQnkoXCJsYXN0VXBkYXRlZFwiLCBcImRlc2NcIiksXG4gICAgICAgICAgbGltaXQoMSlcbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgZG9jdW1lbnRJZCA9IFwiXCI7XG4gICAgICAgIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHEpO1xuICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xuICAgICAgICAgIGxldCBkYXRhID0gZG9jLmRhdGEoKTtcbiAgICAgICAgICBsZXQgcGFydGljaXBhbnRzID0gZGF0YS5wYXJ0aWNpcGFudHMgfHwgbnVsbDtcbiAgICAgICAgICBpZiAocGFydGljaXBhbnRzLmluY2x1ZGVzKGZyb21Vc2VySWQpID09PSB0cnVlKSB7XG4gICAgICAgICAgICBkb2N1bWVudElkID0gZG9jLmlkO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFBUElpbnRlcmZhY2UuZW1wdHkoZG9jdW1lbnRJZCkpIHtcbiAgICAgICAgICByZXNvbHZlKGRvY3VtZW50SWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIENSRUFURSBDT05WRVJTQVRJT05cbiAgICAgICAgICBjb25zdCBuZXdDb252ZXJzYXRpb25SZWYgPSBhd2FpdCBhZGREb2MoXG4gICAgICAgICAgICBjb2xsZWN0aW9uKGZpcmViYXNlRGIsIGZpcmViYXNlQ29sbGVjdGlvbkVudW0uY2hhdHMpLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsYXN0VXBkYXRlZDogc2VydmVyVGltZXN0YW1wKCksXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb25zdCBjaGF0SWQgPSBuZXdDb252ZXJzYXRpb25SZWYuaWQ7XG4gICAgICAgICAgY29uc3QgY2hhdERvY1JlZiA9IGRvYyhcbiAgICAgICAgICAgIGZpcmViYXNlRGIsXG4gICAgICAgICAgICBmaXJlYmFzZUNvbGxlY3Rpb25FbnVtLmNoYXRzLFxuICAgICAgICAgICAgY2hhdElkXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgbGFzdFVwZGF0ZWQ6IHNlcnZlclRpbWVzdGFtcCgpLFxuICAgICAgICAgICAgZGF0ZUNyZWF0ZWQ6IHNlcnZlclRpbWVzdGFtcCgpLFxuICAgICAgICAgICAgcGFydGljaXBhbnRzOiBbdG9Vc2VySWQsIGZyb21Vc2VySWRdLFxuICAgICAgICAgICAgaXNUeXBpbmc6IHtcbiAgICAgICAgICAgICAgW2Ake3RvVXNlcklkfWBdOiBmYWxzZSxcbiAgICAgICAgICAgICAgW2Ake2Zyb21Vc2VySWR9YF06IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgc2V0RG9jKGNoYXREb2NSZWYsIGRhdGEpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIHJlc29sdmUoY2hhdElkKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gYXdhaXQgbXlQcm9taXNlO1xuICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IEZpcmViYXNlU2VydmljZTtcbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtaGVhZGVyXG4gICAgdi1pZj1cIiRxLnBsYXRmb3JtLmlzLmlvc1wiXG4gICAgOmNsYXNzPVwie1xuICAgICAgJ2JnLW15ZGFyayB0ZXh0LXdoaXRlJzogJHEuZGFyay5tb2RlLFxuICAgICAgJ2JnLXdoaXRlIHRleHQtYmxhY2snOiAhJHEuZGFyay5tb2RlLFxuICAgIH1cIlxuICA+XG4gICAgPHEtdG9vbGJhcj5cbiAgICAgIDxxLWJ0blxuICAgICAgICBAY2xpY2s9XCIkcm91dGVyLmJhY2soKVwiXG4gICAgICAgIGZsYXRcbiAgICAgICAgcm91bmRcbiAgICAgICAgZGVuc2VcbiAgICAgICAgaWNvbj1cImNsb3NlXCJcbiAgICAgICAgY2xhc3M9XCJxLW1yLXNtXCJcbiAgICAgICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ3doaXRlJyA6ICdkYXJrJ1wiXG4gICAgICAvPlxuICAgICAgPHEtdG9vbGJhci10aXRsZSBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGRcIj5cbiAgICAgICAge3sgJHQoXCJPcmRlciAjXCIpIH19e3sgb3JkZXJfaW5mby5vcmRlcl9pZCB9fVxuICAgICAgPC9xLXRvb2xiYXItdGl0bGU+XG4gICAgPC9xLXRvb2xiYXI+XG4gIDwvcS1oZWFkZXI+XG5cbiAgPHEtcGFnZVxuICAgIGNsYXNzPVwicm93IGl0ZW1zLXN0cmV0Y2hcIlxuICAgIDpjbGFzcz1cIntcbiAgICAgICdiZy1teWRhcmsgJzogJHEuZGFyay5tb2RlLFxuICAgICAgJ2JnLWdyZXktMSAnOiAhJHEuZGFyay5tb2RlLFxuICAgIH1cIlxuICA+XG4gICAgPHRlbXBsYXRlIHYtaWY9XCJsb2FkaW5nXCI+XG4gICAgICA8cS1pbm5lci1sb2FkaW5nIDpzaG93aW5nPVwidHJ1ZVwiIHNpemU9XCJtZFwiIGNvbG9yPVwicHJpbWFyeVwiIC8+XG4gICAgPC90ZW1wbGF0ZT5cbiAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgdi1pZj1cIiEkcS5wbGF0Zm9ybS5pcy5pb3NcIlxuICAgICAgICAgIGNsYXNzPVwiYWJzb2x1dGUtdG9wLWxlZnQgZnVsbC13aWR0aCBxLXBhLXNtXCJcbiAgICAgICAgICBzdHlsZT1cInotaW5kZXg6IDk5OVwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxuICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgIEBjbGljaz1cIiRyb3V0ZXIuYmFjaygpXCJcbiAgICAgICAgICAgICAgcm91bmRcbiAgICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgICAgaWNvbj1cImNsb3NlXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJxLW1yLXNtXCJcbiAgICAgICAgICAgICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ3doaXRlJyA6ICdkYXJrJ1wiXG4gICAgICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmctd2hpdGUgcmFkaXVzOCBxLXBsLXNtIHEtcHItc21cIj5cbiAgICAgICAgICAgICAge3sgJHQoXCJPcmRlciAjXCIpIH19e3sgb3JkZXJfaW5mby5vcmRlcl9pZCB9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiIWxvYWRpbmcgJiYgaGFzTWFya2Vyc1wiPlxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiRGF0YVN0b3JlLmhhc01hcENvbmZpZ1wiPlxuICAgICAgICAgICAgPE1hcHNDb21wb25lbnRzXG4gICAgICAgICAgICAgIHJlZj1cIm1hcFJlZlwiXG4gICAgICAgICAgICAgIGNsYXNzPVwibWFwc1wiXG4gICAgICAgICAgICAgIHNpemU9XCJmaXRcIlxuICAgICAgICAgICAgICA6a2V5cz1cIkRhdGFTdG9yZS5tYXBzX2NvbmZpZy5rZXlcIlxuICAgICAgICAgICAgICA6cHJvdmlkZXI9XCJEYXRhU3RvcmUubWFwc19jb25maWcucHJvdmlkZXJcIlxuICAgICAgICAgICAgICA6em9vbT1cIkRhdGFTdG9yZS5tYXBzX2NvbmZpZy56b29tXCJcbiAgICAgICAgICAgICAgOmNlbnRlcj1cIm1hcF9jZW50ZXJcIlxuICAgICAgICAgICAgICA6bWFya2Vycz1cIm1hcF9tYXJrZXJcIlxuICAgICAgICAgICAgICBAYWZ0ZXItc2VsZWN0bWFwPVwiYWZ0ZXJTZWxlY3RtYXBcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxxLWZvb3RlclxuICAgICAgICByZXZlYWxcbiAgICAgICAgY2xhc3M9XCJiZy13aGl0ZSBxLXBsLW1kIHEtcHItbWQgcS1wdC1tZCB0ZXh0LWRhcmtcIlxuICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgICBcIlxuICAgICAgPlxuICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIm9yZGVyX2luZm8ub3JkZXJfdHlwZSA9PSAnZGVsaXZlcnknXCI+XG4gICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJvcmRlcl9wcm9ncmVzcyA+IDBcIj5cbiAgICAgICAgICAgIDxxLWxpbmVhci1wcm9ncmVzc1xuICAgICAgICAgICAgICB2LWlmPVwib3JkZXJfcHJvZ3Jlc3MgPD0gM1wiXG4gICAgICAgICAgICAgIGluZGV0ZXJtaW5hdGVcbiAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwib3JkZXJfcHJvZ3Jlc3MgPiAwXCI+XG4gICAgICAgICAgICA8cS1saW5lYXItcHJvZ3Jlc3NcbiAgICAgICAgICAgICAgdi1pZj1cIm9yZGVyX3Byb2dyZXNzIDw9IDJcIlxuICAgICAgICAgICAgICBpbmRldGVybWluYXRlXG4gICAgICAgICAgICAgIGNvbG9yPVwid2FybmluZ1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPGg1XG4gICAgICAgICAgY2xhc3M9XCJ0ZXh0LXdlaWdodC1ib2xkIHEtbXQtc20gcS1tYi1ub25lXCJcbiAgICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAndGV4dC13aGl0ZSc6ICRxLmRhcmsubW9kZSxcbiAgICAgICAgICAgICd0ZXh0LWRhcmsnOiAhJHEuZGFyay5tb2RlLFxuICAgICAgICAgIH1cIlxuICAgICAgICA+XG4gICAgICAgICAge3sgb3JkZXJfc3RhdHVzIH19XG4gICAgICAgIDwvaDU+XG4gICAgICAgIDxwXG4gICAgICAgICAgY2xhc3M9XCJuby1tYXJnaW4gZm9udDExXCJcbiAgICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAndGV4dC13aGl0ZSc6ICRxLmRhcmsubW9kZSxcbiAgICAgICAgICAgICd0ZXh0LWRhcmsnOiAhJHEuZGFyay5tb2RlLFxuICAgICAgICAgIH1cIlxuICAgICAgICA+XG4gICAgICAgICAge3sgb3JkZXJfc3RhdHVzX2RldGFpbHMgfX1cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDwhLS0gc3RlcHMgLS0+XG4gICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwib3JkZXJfaW5mby5vcmRlcl90eXBlID09ICdkZWxpdmVyeSdcIj5cbiAgICAgICAgICA8cS1zdGVwcGVyXG4gICAgICAgICAgICB2LW1vZGVsPVwib3JkZXJfcHJvZ3Jlc3NcIlxuICAgICAgICAgICAgcmVmPVwic3RlcHBlclwiXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgYW5pbWF0ZWRcbiAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgIGNsYXNzPVwibm8tcGFkZGluZyB0cmFja2luZy1zdGVwc1wiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICdiZy1teWRhcmsgdGV4dC13aGl0ZSc6ICRxLmRhcmsubW9kZSxcbiAgICAgICAgICAgICAgJ2JnLXdoaXRlIHRleHQtYmxhY2snOiAhJHEuZGFyay5tb2RlLFxuICAgICAgICAgICAgfVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHEtc3RlcFxuICAgICAgICAgICAgICA6bmFtZT1cIjFcIlxuICAgICAgICAgICAgICB0aXRsZT1cIlwiXG4gICAgICAgICAgICAgIGljb249XCJlYXN0XCJcbiAgICAgICAgICAgICAgYWN0aXZlLWljb249XCJlYXN0XCJcbiAgICAgICAgICAgICAgZG9uZS1pY29uPVwiZWFzdFwiXG4gICAgICAgICAgICAgIGFjdGl2ZS1jb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICA6ZG9uZS1jb2xvcj1cIm9yZGVyX3Byb2dyZXNzID4gMSA/ICdwcmltYXJ5JyA6ICduZWdhdGl2ZSdcIlxuICAgICAgICAgICAgICA6ZG9uZT1cIm9yZGVyX3Byb2dyZXNzID4gMSB8fCBvcmRlcl9wcm9ncmVzcyA8PSAwXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cS1zdGVwXG4gICAgICAgICAgICAgIDpuYW1lPVwiMlwiXG4gICAgICAgICAgICAgIHRpdGxlPVwiXCJcbiAgICAgICAgICAgICAgaWNvbj1cImxvY2FsX2RpbmluZ1wiXG4gICAgICAgICAgICAgIGFjdGl2ZS1pY29uPVwibG9jYWxfZGluaW5nXCJcbiAgICAgICAgICAgICAgZG9uZS1pY29uPVwibG9jYWxfZGluaW5nXCJcbiAgICAgICAgICAgICAgYWN0aXZlLWNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgIDpkb25lLWNvbG9yPVwib3JkZXJfcHJvZ3Jlc3MgPiAxID8gJ3ByaW1hcnknIDogJ25lZ2F0aXZlJ1wiXG4gICAgICAgICAgICAgIDpkb25lPVwib3JkZXJfcHJvZ3Jlc3MgPiAyIHx8IG9yZGVyX3Byb2dyZXNzIDw9IDBcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxxLXN0ZXBcbiAgICAgICAgICAgICAgOm5hbWU9XCIzXCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJcIlxuICAgICAgICAgICAgICBpY29uPVwiZHJpdmVfZXRhXCJcbiAgICAgICAgICAgICAgYWN0aXZlLWljb249XCJkcml2ZV9ldGFcIlxuICAgICAgICAgICAgICBkb25lLWljb249XCJkcml2ZV9ldGFcIlxuICAgICAgICAgICAgICBhY3RpdmUtY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgOmRvbmUtY29sb3I9XCJvcmRlcl9wcm9ncmVzcyA+IDEgPyAncHJpbWFyeScgOiAnbmVnYXRpdmUnXCJcbiAgICAgICAgICAgICAgOmRvbmU9XCJvcmRlcl9wcm9ncmVzcyA+IDMgfHwgb3JkZXJfcHJvZ3Jlc3MgPD0gMFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHEtc3RlcFxuICAgICAgICAgICAgICA6bmFtZT1cIjRcIlxuICAgICAgICAgICAgICB0aXRsZT1cIlwiXG4gICAgICAgICAgICAgIGljb249XCJob21lXCJcbiAgICAgICAgICAgICAgYWN0aXZlLWljb249XCJob21lXCJcbiAgICAgICAgICAgICAgZG9uZS1pY29uPVwiY2hlY2tfY2lyY2xlXCJcbiAgICAgICAgICAgICAgYWN0aXZlLWNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgIDpkb25lLWNvbG9yPVwib3JkZXJfcHJvZ3Jlc3MgPiAxID8gJ3ByaW1hcnknIDogJ25lZ2F0aXZlJ1wiXG4gICAgICAgICAgICAgIDpkb25lPVwib3JkZXJfcHJvZ3Jlc3MgPj0gNCB8fCBvcmRlcl9wcm9ncmVzcyA8PSAwXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9xLXN0ZXBwZXI+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgICA8cS1zdGVwcGVyXG4gICAgICAgICAgICB2LW1vZGVsPVwib3JkZXJfcHJvZ3Jlc3NcIlxuICAgICAgICAgICAgcmVmPVwic3RlcHBlclwiXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgYW5pbWF0ZWRcbiAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgIGNsYXNzPVwibm8tcGFkZGluZyB0cmFja2luZy1zdGVwc1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHEtc3RlcFxuICAgICAgICAgICAgICA6bmFtZT1cIjFcIlxuICAgICAgICAgICAgICB0aXRsZT1cIlwiXG4gICAgICAgICAgICAgIGljb249XCJlYXN0XCJcbiAgICAgICAgICAgICAgYWN0aXZlLWljb249XCJlYXN0XCJcbiAgICAgICAgICAgICAgZG9uZS1pY29uPVwiZWFzdFwiXG4gICAgICAgICAgICAgIGFjdGl2ZS1jb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICA6ZG9uZS1jb2xvcj1cIm9yZGVyX3Byb2dyZXNzID4gMSA/ICdwcmltYXJ5JyA6ICduZWdhdGl2ZSdcIlxuICAgICAgICAgICAgICA6ZG9uZT1cIm9yZGVyX3Byb2dyZXNzID4gMSB8fCBvcmRlcl9wcm9ncmVzcyA8PSAwXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cS1zdGVwXG4gICAgICAgICAgICAgIDpuYW1lPVwiMlwiXG4gICAgICAgICAgICAgIHRpdGxlPVwiXCJcbiAgICAgICAgICAgICAgaWNvbj1cImxvY2FsX2RpbmluZ1wiXG4gICAgICAgICAgICAgIGFjdGl2ZS1pY29uPVwibG9jYWxfZGluaW5nXCJcbiAgICAgICAgICAgICAgZG9uZS1pY29uPVwibG9jYWxfZGluaW5nXCJcbiAgICAgICAgICAgICAgYWN0aXZlLWNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgIDpkb25lLWNvbG9yPVwib3JkZXJfcHJvZ3Jlc3MgPiAxID8gJ3ByaW1hcnknIDogJ25lZ2F0aXZlJ1wiXG4gICAgICAgICAgICAgIDpkb25lPVwib3JkZXJfcHJvZ3Jlc3MgPiAyIHx8IG9yZGVyX3Byb2dyZXNzIDw9IDBcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxxLXN0ZXBcbiAgICAgICAgICAgICAgOm5hbWU9XCIzXCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJcIlxuICAgICAgICAgICAgICBpY29uPVwic2hvcHBpbmdfYmFza2V0XCJcbiAgICAgICAgICAgICAgYWN0aXZlLWljb249XCJzaG9wcGluZ19iYXNrZXRcIlxuICAgICAgICAgICAgICBkb25lLWljb249XCJjaGVja19jaXJjbGVcIlxuICAgICAgICAgICAgICBhY3RpdmUtY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgOmRvbmUtY29sb3I9XCJvcmRlcl9wcm9ncmVzcyA+IDEgPyAncHJpbWFyeScgOiAnbmVnYXRpdmUnXCJcbiAgICAgICAgICAgICAgOmRvbmU9XCJvcmRlcl9wcm9ncmVzcyA+PSAzIHx8IG9yZGVyX3Byb2dyZXNzIDw9IDBcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3Etc3RlcHBlcj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPCEtLSBzdGVwcyAtLT5cblxuICAgICAgICA8cS1saXN0IGNsYXNzPVwicS1tYi1zbSBxLW10LXNtXCI+XG4gICAgICAgICAgPHEtaXRlbSBjbGlja2FibGU+XG4gICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgICAgICA8cS1hdmF0YXI+XG4gICAgICAgICAgICAgICAgPHEtaW1nXG4gICAgICAgICAgICAgICAgICA6c3JjPVwibWVyY2hhbnRfaW5mby51cmxfbG9nb1wiXG4gICAgICAgICAgICAgICAgICA6Zml0PVwiY29udGFpblwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT1cImhlaWdodDogNTBweDsgbWF4LXdpZHRoOiA1MHB4XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwibm8tbWFyZ2luXCJcbiAgICAgICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L3EtYXZhdGFyPlxuICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBsaW5lcz1cIjFcIiBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGRcIj57e1xuICAgICAgICAgICAgICAgIG1lcmNoYW50X2luZm8ucmVzdGF1cmFudF9uYW1lXG4gICAgICAgICAgICAgIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbiBsaW5lcz1cIjJcIiBjbGFzcz1cImZvbnQxMVwiPnt7XG4gICAgICAgICAgICAgICAgbWVyY2hhbnRfaW5mby5tZXJjaGFudF9hZGRyZXNzXG4gICAgICAgICAgICAgIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICAgIHNxdWFyZVxuICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgICAgICAgdGV4dC1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICBpY29uPVwibGFzIGxhLXBob25lXCJcbiAgICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICAgIGNsYXNzPVwicmFkaXVzOFwiXG4gICAgICAgICAgICAgICAgOmhyZWY9XCIndGVsOicgKyBtZXJjaGFudF9pbmZvLmNvbnRhY3RfcGhvbmVcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlIHYtaWY9XCJEYXRhU3RvcmUuY2hhdF9lbmFibGVkXCI+XG4gICAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICAgIHNxdWFyZVxuICAgICAgICAgICAgICAgIGNvbG9yPVwiYmx1ZVwiXG4gICAgICAgICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgICAgICAgIHRleHQtY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgaWNvbj1cIm9fY2hhdFwiXG4gICAgICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgICAgICBjbGFzcz1cInJhZGl1czhcIlxuICAgICAgICAgICAgICAgIEBjbGljaz1cImNyZWF0ZUNoYXRcIlxuICAgICAgICAgICAgICAgIDpsb2FkaW5nPVwibG9hZGluZ19jaGF0XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgIDwvcS1saXN0PlxuICAgICAgPC9xLWZvb3Rlcj5cbiAgICA8L3RlbXBsYXRlPlxuICA8L3EtcGFnZT5cblxuICA8Q29tcG9uZW50c1JlYWx0aW1lXG4gICAgcmVmPVwicmVhbHRpbWVcIlxuICAgIGdldGV2ZW50PVwidHJhY2tpbmdcIlxuICAgIEBhZnRlci1yZWNlaXZlPVwiYWZ0ZXJSZWNlaXZlXCJcbiAgLz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBkZWZpbmVBc3luY0NvbXBvbmVudCB9IGZyb20gXCJ2dWVcIjtcbmltcG9ydCBBUElpbnRlcmZhY2UgZnJvbSBcInNyYy9hcGkvQVBJaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyB1c2VEYXRhU3RvcmUgfSBmcm9tIFwic3RvcmVzL0RhdGFTdG9yZVwiO1xuaW1wb3J0IEZpcmViYXNlU2VydmljZSBmcm9tIFwic3JjL2FwaS9GaXJlYmFzZVNlcnZpY2VcIjtcbmltcG9ydCBhdXRoIGZyb20gXCJzcmMvYXBpL2F1dGhcIjtcblxubGV0IGJvdW5kcyA9IFtdO1xuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIlRyYWNrT3JkZXJcIixcbiAgY29tcG9uZW50czoge1xuICAgIE1hcHNDb21wb25lbnRzOiBkZWZpbmVBc3luY0NvbXBvbmVudCgoKSA9PlxuICAgICAgaW1wb3J0KFwiY29tcG9uZW50cy9NYXBzQ29tcG9uZW50cy52dWVcIilcbiAgICApLFxuICAgIENvbXBvbmVudHNSZWFsdGltZTogZGVmaW5lQXN5bmNDb21wb25lbnQoKCkgPT5cbiAgICAgIGltcG9ydChcImNvbXBvbmVudHMvQ29tcG9uZW50c1JlYWx0aW1lLnZ1ZVwiKVxuICAgICksXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9yZGVyX3Byb2dyZXNzOiAtMSxcbiAgICAgIG9yZGVyX2RldGFpbHM6IHRydWUsXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIG9yZGVyX3V1aWQ6IFwiXCIsXG4gICAgICBsYXQ6IFwiXCIsXG4gICAgICBsbmc6IFwiXCIsXG4gICAgICBtZXJjaGFudF9pbmZvOiBbXSxcbiAgICAgIG9yZGVyX2luZm86IFtdLFxuICAgICAgaXRlbXM6IFtdLFxuICAgICAgbWV0YTogW10sXG4gICAgICBpdGVtc19jb3VudDogMCxcbiAgICAgIG9yZGVyX3N0YXR1czogXCJcIixcbiAgICAgIG9yZGVyX3N0YXR1c19kZXRhaWxzOiBcIlwiLFxuICAgICAgaW5zdHJ1Y3Rpb25zOiBbXSxcbiAgICAgIG1hcF9tYXJrZXI6IHt9LFxuICAgICAgbWFwX2NlbnRlcjoge30sXG4gICAgICBsb2FkaW5nX2NoYXQ6IGZhbHNlLFxuICAgICAgdXNlcl91dWlkOiBcIlwiLFxuICAgIH07XG4gIH0sXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IERhdGFTdG9yZSA9IHVzZURhdGFTdG9yZSgpO1xuICAgIHJldHVybiB7IERhdGFTdG9yZSB9O1xuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMub3JkZXJfdXVpZCA9IHRoaXMuJHJvdXRlLnF1ZXJ5Lm9yZGVyX3V1aWQ7XG4gICAgbGV0IHVzZXIgPSBhdXRoLmdldFVzZXIoKTtcbiAgICB0aGlzLnVzZXJfdXVpZCA9IHVzZXIuY2xpZW50X3V1aWQ7XG4gICAgdGhpcy5nZXRPcmRlcigpO1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGhhc01hcmtlcnMoKSB7XG4gICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5tYXBfbWFya2VyKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBnZXRPcmRlcigpIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICBBUElpbnRlcmZhY2UuZ2V0T3JkZXIodGhpcy5vcmRlcl91dWlkKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMubWVyY2hhbnRfaW5mbyA9IGRhdGEuZGV0YWlscy5tZXJjaGFudF9pbmZvO1xuICAgICAgICAgIHRoaXMub3JkZXJfaW5mbyA9IGRhdGEuZGV0YWlscy5vcmRlcl9pbmZvO1xuICAgICAgICAgIHRoaXMuaXRlbXMgPSBkYXRhLmRldGFpbHMuaXRlbXM7XG4gICAgICAgICAgdGhpcy5tZXRhID0gZGF0YS5kZXRhaWxzLm1ldGE7XG4gICAgICAgICAgdGhpcy5pdGVtc19jb3VudCA9IGRhdGEuZGV0YWlscy5pdGVtc19jb3VudDtcbiAgICAgICAgICB0aGlzLm9yZGVyX3Byb2dyZXNzID0gZGF0YS5kZXRhaWxzLnByb2dyZXNzLm9yZGVyX3Byb2dyZXNzO1xuICAgICAgICAgIHRoaXMub3JkZXJfc3RhdHVzID0gZGF0YS5kZXRhaWxzLnByb2dyZXNzLm9yZGVyX3N0YXR1cztcbiAgICAgICAgICB0aGlzLm9yZGVyX3N0YXR1c19kZXRhaWxzID1cbiAgICAgICAgICAgIGRhdGEuZGV0YWlscy5wcm9ncmVzcy5vcmRlcl9zdGF0dXNfZGV0YWlscztcbiAgICAgICAgICB0aGlzLmluc3RydWN0aW9ucyA9IGRhdGEuZGV0YWlscy5pbnN0cnVjdGlvbnM7XG5cbiAgICAgICAgICBpZiAodGhpcy5vcmRlcl9pbmZvLm9yZGVyX3R5cGUgPT09IFwiZGVsaXZlcnlcIikge1xuICAgICAgICAgICAgdGhpcy5tYXBfY2VudGVyID0ge1xuICAgICAgICAgICAgICBsYXQ6IHBhcnNlRmxvYXQodGhpcy5tZXJjaGFudF9pbmZvLmxhdGl0dWRlKSxcbiAgICAgICAgICAgICAgbG5nOiBwYXJzZUZsb2F0KHRoaXMubWVyY2hhbnRfaW5mby5sb25naXR1ZGUpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMubWFwX21hcmtlciA9IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhdDogcGFyc2VGbG9hdCh0aGlzLm1lcmNoYW50X2luZm8ubGF0aXR1ZGUpLFxuICAgICAgICAgICAgICAgIGxuZzogcGFyc2VGbG9hdCh0aGlzLm1lcmNoYW50X2luZm8ubG9uZ2l0dWRlKSxcbiAgICAgICAgICAgICAgICBsYWJlbDogQVBJaW50ZXJmYWNlLmdldEljb24oXCJtZXJjaGFudFwiKSxcbiAgICAgICAgICAgICAgICBpY29uOiBcIm1hcmtlcl9pY29uX21lcmNoYW50XCIsXG4gICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhdDogcGFyc2VGbG9hdCh0aGlzLm1ldGEubGF0aXR1ZGUpLFxuICAgICAgICAgICAgICAgIGxuZzogcGFyc2VGbG9hdCh0aGlzLm1ldGEubG9uZ2l0dWRlKSxcbiAgICAgICAgICAgICAgICBsYWJlbDogQVBJaW50ZXJmYWNlLmdldEljb24oXCJjdXN0b21lclwiKSxcbiAgICAgICAgICAgICAgICBpY29uOiBcIm1hcmtlcl9pY29uX2Rlc3RpbmF0aW9uXCIsXG4gICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubWFwX21hcmtlciA9IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhdDogcGFyc2VGbG9hdCh0aGlzLm1lcmNoYW50X2luZm8ubGF0aXR1ZGUpLFxuICAgICAgICAgICAgICAgIGxuZzogcGFyc2VGbG9hdCh0aGlzLm1lcmNoYW50X2luZm8ubG9uZ2l0dWRlKSxcbiAgICAgICAgICAgICAgICBsYWJlbDogQVBJaW50ZXJmYWNlLmdldEljb24oXCJtZXJjaGFudFwiKSxcbiAgICAgICAgICAgICAgICBpY29uOiBcIm1hcmtlcl9pY29uX21lcmNoYW50XCIsXG4gICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICB0aGlzLm1hcF9jZW50ZXIgPSB7XG4gICAgICAgICAgICAgIGxhdDogcGFyc2VGbG9hdCh0aGlzLm1lcmNoYW50X2luZm8ubGF0aXR1ZGUpLFxuICAgICAgICAgICAgICBsbmc6IHBhcnNlRmxvYXQodGhpcy5tZXJjaGFudF9pbmZvLmxvbmdpdHVkZSksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJyZWQtNVwiLCBlcnJvciwgXCJlcnJvcl9vdXRsaW5lXCIsIHRoaXMuJHEpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGFmdGVyUmVjZWl2ZShkYXRhKSB7XG4gICAgICBpZiAoZGF0YS5vcmRlcl9pZCAhPT0gdGhpcy5vcmRlcl9pbmZvLm9yZGVyX2lkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChkYXRhLm9yZGVyX3Byb2dyZXNzID09PSAwKSB7XG4gICAgICAgIHRoaXMub3JkZXJfcHJvZ3Jlc3MgPSBkYXRhLm9yZGVyX3Byb2dyZXNzO1xuICAgICAgICB0aGlzLm9yZGVyX3N0YXR1cyA9IGRhdGEub3JkZXJfc3RhdHVzO1xuICAgICAgICB0aGlzLm9yZGVyX3N0YXR1c19kZXRhaWxzID0gZGF0YS5vcmRlcl9zdGF0dXNfZGV0YWlscztcbiAgICAgIH0gZWxzZSBpZiAoZGF0YS5vcmRlcl9wcm9ncmVzcyA9PT0gLTEpIHtcbiAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vcmRlcl9wcm9ncmVzcyA9IGRhdGEub3JkZXJfcHJvZ3Jlc3M7XG4gICAgICAgIHRoaXMub3JkZXJfc3RhdHVzID0gZGF0YS5vcmRlcl9zdGF0dXM7XG4gICAgICAgIHRoaXMub3JkZXJfc3RhdHVzX2RldGFpbHMgPSBkYXRhLm9yZGVyX3N0YXR1c19kZXRhaWxzO1xuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgY3JlYXRlQ2hhdCgpIHtcbiAgICAgIHRoaXMubG9hZGluZ19jaGF0ID0gdHJ1ZTtcbiAgICAgIEZpcmViYXNlU2VydmljZS5jcmVhdGVDaGF0T3JkZXIoXG4gICAgICAgIHRoaXMub3JkZXJfaW5mby5vcmRlcl9pZCxcbiAgICAgICAgdGhpcy5vcmRlcl91dWlkLFxuICAgICAgICB0aGlzLm1lcmNoYW50X2luZm8ubWVyY2hhbnRfdXVpZCxcbiAgICAgICAgdGhpcy51c2VyX3V1aWRcbiAgICAgIClcbiAgICAgICAgLnRoZW4oKGRvY3VtZW50SWQpID0+IHtcbiAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICBwYXRoOiBcIi9hY2NvdW50L2NoYXQvY29udmVyc2F0aW9uXCIsXG4gICAgICAgICAgICBxdWVyeTogeyBkb2NfaWQ6IGRvY3VtZW50SWQgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJkYXJrXCIsIGVycm9yLCBcImVycm9yXCIsIHRoaXMuJHEpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZ19jaGF0ID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iXSwiZmlsZSI6ImFzc2V0cy9UcmFja09yZGVyLjVlODliNDU3LmpzIn0=
