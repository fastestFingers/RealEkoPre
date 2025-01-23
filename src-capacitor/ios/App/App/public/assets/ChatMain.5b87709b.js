import { _ as _export_sfc, l as defineAsyncComponent, aw as auth, m as APIinterface, n as resolveComponent, p as openBlock, q as createBlock, t as withCtx, f as createVNode, Y as QBtn, a6 as createTextVNode, Z as toDisplayString, a7 as normalizeClass, U as createBaseVNode, V as createElementBlock, aA as createCommentVNode, X as renderList, F as Fragment, u as __vitePreload, ac as QItem, ad as QItemSection, ae as QAvatar } from "./index.61ed5618.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QSpace } from "./QSpace.f164c087.js";
import { Q as QItemLabel } from "./QItemLabel.a9365c5b.js";
import { Q as QList } from "./QList.b69a7e5b.js";
import { Q as QPageScroller } from "./QPageScroller.2c709c91.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import { Q as QPullToRefresh } from "./QPullToRefresh.3d10c02d.js";
import { c as collection, f as firebaseDb, b as firebaseCollectionEnum, q as query, w as where, o as orderBy, l as limit, h as onSnapshot, g as getDocs } from "./FirebaseChat.3fe55950.js";
import { d as date } from "./date.ec5d83ae.js";
import "./QResizeObserver.d08dce3c.js";
import "./use-page-sticky.447afe02.js";
import "./touch.96e0ae37.js";
import "./selection.50b4cb0c.js";
import "./format.7f7370d3.js";
const _sfc_main = {
  name: "ChatMain",
  components: {
    ChatSearch: defineAsyncComponent(() => __vitePreload(() => import("./ChatSearch.193f8e47.js"), true ? ["assets/ChatSearch.193f8e47.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QSpace.f164c087.js","assets/QToolbar.c8fc6962.js","assets/ClosePopup.9d17b53c.js","assets/FirebaseChat.3fe55950.js"] : void 0)),
    ChatUserLoader: defineAsyncComponent(
      () => __vitePreload(() => import("./ChatUserLoader.5bb1b2c5.js"), true ? ["assets/ChatUserLoader.5bb1b2c5.js","assets/QSkeleton.39737398.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QItemLabel.a9365c5b.js","assets/QList.b69a7e5b.js"] : void 0)
    )
  },
  data() {
    return {
      user_uuid: "",
      data: [],
      users: [],
      all_users: [],
      users_data: [],
      loading: false,
      loading_user: false,
      last_message_data: {},
      whoistyping_data: {},
      document_id: "",
      main_user_type: "",
      refresh_page: void 0
    };
  },
  mounted() {
    let user = auth.getUser();
    this.user_uuid = user.client_uuid;
    this.getParticipants();
  },
  computed: {
    getData() {
      return this.data;
    },
    getLastMessageData() {
      return this.last_message_data;
    },
    hasData() {
      if (Object.keys(this.data).length > 0) {
        return true;
      }
      return false;
    },
    hasUserData() {
      if (Object.keys(this.users_data).length > 0) {
        return true;
      }
      return false;
    },
    getShowistyping() {
      return this.whoistyping_data;
    }
  },
  methods: {
    refresh(done) {
      this.refresh_page = done;
      this.getParticipants();
    },
    getParticipants() {
      try {
        this.loading = true;
        const collectionRef = collection(
          firebaseDb,
          firebaseCollectionEnum.chats
        );
        const q = query(
          collectionRef,
          where("participants", "array-contains", this.user_uuid),
          orderBy("lastUpdated", "desc"),
          limit(firebaseCollectionEnum.limit)
        );
        const SnapParticipants = onSnapshot(
          q,
          (snapshot) => {
            this.data = [];
            this.users = [];
            this.all_users = [];
            this.loading = false;
            if (!APIinterface.empty(this.refresh_page)) {
              this.refresh_page();
            }
            snapshot.forEach((doc) => {
              let data = doc.data();
              let isTyping = data.isTyping || null;
              let participants = data.participants || null;
              if (participants) {
                if (Object.keys(participants).length > 0) {
                  Object.entries(participants).forEach(([key, items]) => {
                    this.all_users.push(items);
                  });
                }
                let resp_participants = participants.filter(
                  (i) => !i.includes(this.user_uuid)
                );
                let user_uuid = resp_participants[0] ? resp_participants[0] : null;
                this.users.push(user_uuid);
                this.data.push({
                  doc_id: doc.id,
                  user_uuid,
                  is_typing: isTyping[resp_participants[0]] ? isTyping[resp_participants[0]] : false,
                  orderID: data.orderID || null,
                  orderUuid: data.orderUuid || null
                });
              }
            });
            if (Object.keys(this.users).length > 0) {
              this.getUser();
              this.getLastMessage();
              this.getWhoIsTyping();
            }
          },
          (error) => {
            this.loading = false;
            if (!APIinterface.empty(this.refresh_page)) {
              this.refresh_page();
            }
            console.log("Error fetching chat documents:", error);
          }
        );
      } catch (error) {
        APIinterface.notify("dark", error, "error", this.$q);
      }
    },
    showSearch() {
      this.$refs.chat_search.dialog = true;
    },
    loadConversation(docId) {
      this.$router.push({
        path: "/account/chat/conversation",
        query: { doc_id: docId }
      });
    },
    getUser() {
      this.loading_user = true;
      APIinterface.fetchDataChats("getUsers", {
        main_user_type: this.main_user_type,
        users: this.users
      }).then((data) => {
        this.users_data = data.details;
      }).catch((error) => {
        this.users_data = [];
      }).then((data) => {
        this.loading_user = false;
      });
    },
    async getLastMessage() {
      try {
        const batch = this.all_users.splice(0, 10);
        const conversationsRef = collection(
          firebaseDb,
          firebaseCollectionEnum.chats
        );
        const querySnapshot = await getDocs(
          query(
            conversationsRef,
            where("participants", "array-contains-any", this.users)
          )
        );
        querySnapshot.forEach(async (doc) => {
          const conversationID = doc.id;
          const messagesRef = collection(
            firebaseDb,
            firebaseCollectionEnum.chats,
            conversationID,
            "messages"
          );
          const messagesSnapshot = await getDocs(
            query(
              messagesRef,
              where("senderID", "in", batch),
              orderBy("timestamp", "desc"),
              limit(1)
            )
          );
          messagesSnapshot.forEach((messageDoc) => {
            let results = messageDoc.data();
            let timestamp = results.timestamp.toDate().toISOString();
            this.last_message_data[conversationID] = {
              message: results.message,
              timestamp,
              time: date.formatDate(timestamp, "hh:mm a")
            };
          });
        });
      } catch (error) {
        console.error("Error fetching last message:", error);
      }
    },
    async getWhoIsTyping() {
      const q = query(
        collection(firebaseDb, firebaseCollectionEnum.chats),
        where("participants", "array-contains-any", this.users),
        orderBy("lastUpdated", "desc"),
        limit(firebaseCollectionEnum.limit)
      );
      onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let results = doc.data();
          let data = results.isTyping || [];
          if (Object.keys(data).length > 0) {
            Object.entries(data).forEach(([key, items]) => {
              this.whoistyping_data[key] = items;
            });
          }
        });
      });
    },
    isTyping(user_uuid) {
      if (Object.keys(this.whoistyping_data).length > 0) {
        let istyping = this.whoistyping_data[user_uuid] || false;
        return istyping;
      }
      return false;
    }
  }
};
const _hoisted_1 = { class: "q-pl-md q-pr-md" };
const _hoisted_2 = { class: "border-grey bg-grey-1 radius8" };
const _hoisted_3 = {
  key: 0,
  class: "text-body2 text-weight-medium flex flex-center text-grey",
  style: { "height": "calc(80vh)" }
};
const _hoisted_4 = ["src"];
const _hoisted_5 = {
  key: 0,
  class: "text-primary"
};
const _hoisted_6 = {
  key: 0,
  class: "time"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ChatUserLoader = resolveComponent("ChatUserLoader");
  const _component_ChatSearch = resolveComponent("ChatSearch");
  return openBlock(), createBlock(QPullToRefresh, { onRefresh: $options.refresh }, {
    default: withCtx(() => [
      createVNode(QHeader, {
        reveal: "",
        "reveal-offset": "20",
        class: normalizeClass({
          "bg-mydark text-white": _ctx.$q.dark.mode,
          "bg-white text-dark": !_ctx.$q.dark.mode
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
                icon: "las la-angle-left",
                class: "q-mr-sm",
                color: _ctx.$q.dark.mode ? "white" : "dark"
              }, null, 8, ["color"]),
              createVNode(QToolbarTitle, { class: "text-weight-bold" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("Live Chat")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["class"]),
      createVNode(QPage, null, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(QBtn, {
                label: _ctx.$t("Search restaurants"),
                "no-caps": "",
                color: _ctx.$q.dark.mode ? "grey600" : "grey-1",
                "text-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                icon: "search",
                unelevated: "",
                align: "left",
                class: "fit radius8",
                onClick: $options.showSearch
              }, null, 8, ["label", "color", "text-color", "onClick"])
            ])
          ]),
          createVNode(QSpace, { class: "q-pa-sm" }),
          !$options.hasData && !$data.loading ? (openBlock(), createElementBlock("div", _hoisted_3, toDisplayString(_ctx.$t("Search to chat with restaurants")), 1)) : createCommentVNode("", true),
          $data.loading ? (openBlock(), createBlock(_component_ChatUserLoader, {
            key: 1,
            rows: 10
          })) : createCommentVNode("", true),
          $options.hasData && !$data.loading && $options.hasUserData ? (openBlock(), createBlock(QList, { key: 2 }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList($options.getData, (items) => {
                return openBlock(), createElementBlock(Fragment, { key: items }, [
                  $data.users_data[items.user_uuid] ? (openBlock(), createBlock(QItem, {
                    key: 0,
                    clickable: "",
                    onClick: ($event) => $options.loadConversation(items.doc_id)
                  }, {
                    default: withCtx(() => [
                      createVNode(QItemSection, { avatar: "" }, {
                        default: withCtx(() => [
                          createVNode(QAvatar, null, {
                            default: withCtx(() => [
                              createBaseVNode("img", {
                                src: $data.users_data[items.user_uuid].photo_url
                              }, null, 8, _hoisted_4)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(QItemSection, null, {
                        default: withCtx(() => [
                          createVNode(QItemLabel, { class: "text-weight-bold" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString($data.users_data[items.user_uuid].first_name) + " " + toDisplayString($data.users_data[items.user_uuid].last_name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(QItemLabel, { caption: "" }, {
                            default: withCtx(() => [
                              items.orderID ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                                createTextVNode(toDisplayString(_ctx.$t("Order#")) + " " + toDisplayString(items.orderID), 1)
                              ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                                createTextVNode(toDisplayString($data.users_data[items.user_uuid].user_type), 1)
                              ], 64))
                            ]),
                            _: 2
                          }, 1024),
                          $options.getLastMessageData[items.doc_id] ? (openBlock(), createBlock(QItemLabel, {
                            key: 0,
                            caption: "",
                            lines: "2"
                          }, {
                            default: withCtx(() => [
                              $options.isTyping(items.user_uuid) ? (openBlock(), createElementBlock("span", _hoisted_5, toDisplayString($data.users_data[items.user_uuid].first_name) + " is typing ...", 1)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                                createTextVNode(toDisplayString($options.getLastMessageData[items.doc_id].message), 1)
                              ], 64))
                            ]),
                            _: 2
                          }, 1024)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(QItemSection, { side: "" }, {
                        default: withCtx(() => [
                          createVNode(QItemLabel, {
                            caption: "",
                            lines: "2",
                            class: "text-center"
                          }, {
                            default: withCtx(() => [
                              $options.getLastMessageData[items.doc_id] ? (openBlock(), createElementBlock("div", _hoisted_6, toDisplayString($options.getLastMessageData[items.doc_id].time), 1)) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1032, ["onClick"])) : createCommentVNode("", true)
                ], 64);
              }), 128))
            ]),
            _: 1
          })) : createCommentVNode("", true),
          $options.hasData && !$data.loading && $options.hasUserData ? (openBlock(), createBlock(QPageScroller, {
            key: 3,
            position: "bottom-right",
            "scroll-offset": 150,
            offset: [18, 18]
          }, {
            default: withCtx(() => [
              createVNode(QBtn, {
                fab: "",
                icon: "keyboard_arrow_up",
                color: "primary",
                padding: "sm"
              })
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        _: 1
      }),
      createVNode(_component_ChatSearch, { ref: "chat_search" }, null, 512)
    ]),
    _: 1
  }, 8, ["onRefresh"]);
}
var ChatMain = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "ChatMain.vue"]]);
export { ChatMain as default };
//# sourceMappingURL=data:application/json;base64,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QkFFakIsTUFBbUU7QUFBQSxjQUFuRUMsWUFBbUU7QUFBQSxnQkFBNUQ7QUFBQSxnQkFBSSxNQUFLO0FBQUEsZ0JBQW9CLE9BQU07QUFBQSxnQkFBVSxTQUFRO0FBQUE7Ozs7Ozs7TUFHaEVBLFlBQTJDLHlCQUEvQixLQUFJLGNBQWE7QUFBQSIsIm5hbWVzIjpbIl9jcmVhdGVCbG9jayIsIl9jcmVhdGVWTm9kZSIsIl9ub3JtYWxpemVDbGFzcyIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX3RvRGlzcGxheVN0cmluZyIsIl9GcmFnbWVudCIsIl9jcmVhdGVUZXh0Vk5vZGUiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvQWNjb3VudC9DaGF0TWFpbi52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8cS1wdWxsLXRvLXJlZnJlc2ggQHJlZnJlc2g9XCJyZWZyZXNoXCI+XG4gICAgPHEtaGVhZGVyXG4gICAgICByZXZlYWxcbiAgICAgIHJldmVhbC1vZmZzZXQ9XCIyMFwiXG4gICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICdiZy1teWRhcmsgdGV4dC13aGl0ZSc6ICRxLmRhcmsubW9kZSxcbiAgICAgICAgJ2JnLXdoaXRlIHRleHQtZGFyayc6ICEkcS5kYXJrLm1vZGUsXG4gICAgICB9XCJcbiAgICA+XG4gICAgICA8cS10b29sYmFyPlxuICAgICAgICA8cS1idG5cbiAgICAgICAgICBAY2xpY2s9XCIkcm91dGVyLmJhY2soKVwiXG4gICAgICAgICAgZmxhdFxuICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgZGVuc2VcbiAgICAgICAgICBpY29uPVwibGFzIGxhLWFuZ2xlLWxlZnRcIlxuICAgICAgICAgIGNsYXNzPVwicS1tci1zbVwiXG4gICAgICAgICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ3doaXRlJyA6ICdkYXJrJ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxxLXRvb2xiYXItdGl0bGUgY2xhc3M9XCJ0ZXh0LXdlaWdodC1ib2xkXCI+e3tcbiAgICAgICAgICAkdChcIkxpdmUgQ2hhdFwiKVxuICAgICAgICB9fTwvcS10b29sYmFyLXRpdGxlPlxuICAgICAgPC9xLXRvb2xiYXI+XG4gICAgPC9xLWhlYWRlcj5cbiAgICA8cS1wYWdlPlxuICAgICAgPGRpdiBjbGFzcz1cInEtcGwtbWQgcS1wci1tZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm9yZGVyLWdyZXkgYmctZ3JleS0xIHJhZGl1czhcIj5cbiAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdTZWFyY2ggcmVzdGF1cmFudHMnKVwiXG4gICAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgICA6Y29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTYwMCcgOiAnZ3JleS0xJ1wiXG4gICAgICAgICAgICA6dGV4dC1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICdncmV5J1wiXG4gICAgICAgICAgICBpY29uPVwic2VhcmNoXCJcbiAgICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICAgIGFsaWduPVwibGVmdFwiXG4gICAgICAgICAgICBjbGFzcz1cImZpdCByYWRpdXM4XCJcbiAgICAgICAgICAgIEBjbGljaz1cInNob3dTZWFyY2hcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8cS1zcGFjZSBjbGFzcz1cInEtcGEtc21cIj48L3Etc3BhY2U+XG5cbiAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiIWhhc0RhdGEgJiYgIWxvYWRpbmdcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwidGV4dC1ib2R5MiB0ZXh0LXdlaWdodC1tZWRpdW0gZmxleCBmbGV4LWNlbnRlciB0ZXh0LWdyZXlcIlxuICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiBjYWxjKDgwdmgpXCJcbiAgICAgICAgPlxuICAgICAgICAgIHt7ICR0KFwiU2VhcmNoIHRvIGNoYXQgd2l0aCByZXN0YXVyYW50c1wiKSB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwibG9hZGluZ1wiPlxuICAgICAgICA8Q2hhdFVzZXJMb2FkZXIgOnJvd3M9XCIxMFwiPjwvQ2hhdFVzZXJMb2FkZXI+XG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICA8dGVtcGxhdGUgdi1pZj1cImhhc0RhdGEgJiYgIWxvYWRpbmcgJiYgaGFzVXNlckRhdGFcIj5cbiAgICAgICAgPHEtbGlzdD5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJpdGVtcyBpbiBnZXREYXRhXCIgOmtleT1cIml0ZW1zXCI+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cInVzZXJzX2RhdGFbaXRlbXMudXNlcl91dWlkXVwiPlxuICAgICAgICAgICAgICA8cS1pdGVtIGNsaWNrYWJsZSBAY2xpY2s9XCJsb2FkQ29udmVyc2F0aW9uKGl0ZW1zLmRvY19pZClcIj5cbiAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgICAgICAgICAgPHEtYXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJ1c2Vyc19kYXRhW2l0ZW1zLnVzZXJfdXVpZF0ucGhvdG9fdXJsXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvcS1hdmF0YXI+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNsYXNzPVwidGV4dC13ZWlnaHQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICB7eyB1c2Vyc19kYXRhW2l0ZW1zLnVzZXJfdXVpZF0uZmlyc3RfbmFtZSB9fVxuICAgICAgICAgICAgICAgICAgICB7eyB1c2Vyc19kYXRhW2l0ZW1zLnVzZXJfdXVpZF0ubGFzdF9uYW1lIH19XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIml0ZW1zLm9yZGVySURcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7eyAkdChcIk9yZGVyI1wiKSB9fSB7eyBpdGVtcy5vcmRlcklEIH19XG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICAgICAgICAgICAgICAgICAge3sgdXNlcnNfZGF0YVtpdGVtcy51c2VyX3V1aWRdLnVzZXJfdHlwZSB9fVxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgY2FwdGlvblxuICAgICAgICAgICAgICAgICAgICBsaW5lcz1cIjJcIlxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwiZ2V0TGFzdE1lc3NhZ2VEYXRhW2l0ZW1zLmRvY19pZF1cIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImlzVHlwaW5nKGl0ZW1zLnVzZXJfdXVpZClcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+e3sgdXNlcnNfZGF0YVtpdGVtcy51c2VyX3V1aWRdLmZpcnN0X25hbWUgfX0gaXMgdHlwaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi48L3NwYW5cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICAgICAgICAgICAgICAgICAge3sgZ2V0TGFzdE1lc3NhZ2VEYXRhW2l0ZW1zLmRvY19pZF0ubWVzc2FnZSB9fVxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZT5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbiBsaW5lcz1cIjJcIiBjbGFzcz1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lXCIgdi1pZj1cImdldExhc3RNZXNzYWdlRGF0YVtpdGVtcy5kb2NfaWRdXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3sgZ2V0TGFzdE1lc3NhZ2VEYXRhW2l0ZW1zLmRvY19pZF0udGltZSB9fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3EtbGlzdD5cbiAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgIDxxLXBhZ2Utc2Nyb2xsZXJcbiAgICAgICAgdi1pZj1cImhhc0RhdGEgJiYgIWxvYWRpbmcgJiYgaGFzVXNlckRhdGFcIlxuICAgICAgICBwb3NpdGlvbj1cImJvdHRvbS1yaWdodFwiXG4gICAgICAgIDpzY3JvbGwtb2Zmc2V0PVwiMTUwXCJcbiAgICAgICAgOm9mZnNldD1cIlsxOCwgMThdXCJcbiAgICAgID5cbiAgICAgICAgPHEtYnRuIGZhYiBpY29uPVwia2V5Ym9hcmRfYXJyb3dfdXBcIiBjb2xvcj1cInByaW1hcnlcIiBwYWRkaW5nPVwic21cIiAvPlxuICAgICAgPC9xLXBhZ2Utc2Nyb2xsZXI+XG4gICAgPC9xLXBhZ2U+XG4gICAgPENoYXRTZWFyY2ggcmVmPVwiY2hhdF9zZWFyY2hcIj48L0NoYXRTZWFyY2g+XG4gIDwvcS1wdWxsLXRvLXJlZnJlc2g+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgZGVmaW5lQXN5bmNDb21wb25lbnQgfSBmcm9tIFwidnVlXCI7XG5pbXBvcnQgeyBmaXJlYmFzZURiLCBmaXJlYmFzZUNvbGxlY3Rpb25FbnVtIH0gZnJvbSBcInNyYy9ib290L0ZpcmViYXNlQ2hhdFwiO1xuaW1wb3J0IHtcbiAgY29sbGVjdGlvbixcbiAgcXVlcnksXG4gIHdoZXJlLFxuICBvcmRlckJ5LFxuICBsaW1pdCxcbiAgb25TbmFwc2hvdCxcbiAgZ2V0RG9jcyxcbn0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IGF1dGggZnJvbSBcInNyYy9hcGkvYXV0aFwiO1xuaW1wb3J0IEFQSWludGVyZmFjZSBmcm9tIFwic3JjL2FwaS9BUElpbnRlcmZhY2VcIjtcbmltcG9ydCB7IGRhdGUgfSBmcm9tIFwicXVhc2FyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJDaGF0TWFpblwiLFxuICBjb21wb25lbnRzOiB7XG4gICAgQ2hhdFNlYXJjaDogZGVmaW5lQXN5bmNDb21wb25lbnQoKCkgPT4gaW1wb3J0KFwiY29tcG9uZW50cy9DaGF0U2VhcmNoLnZ1ZVwiKSksXG4gICAgQ2hhdFVzZXJMb2FkZXI6IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+XG4gICAgICBpbXBvcnQoXCJjb21wb25lbnRzL0NoYXRVc2VyTG9hZGVyLnZ1ZVwiKVxuICAgICksXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZXJfdXVpZDogXCJcIixcbiAgICAgIGRhdGE6IFtdLFxuICAgICAgdXNlcnM6IFtdLFxuICAgICAgYWxsX3VzZXJzOiBbXSxcbiAgICAgIHVzZXJzX2RhdGE6IFtdLFxuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICBsb2FkaW5nX3VzZXI6IGZhbHNlLFxuICAgICAgbGFzdF9tZXNzYWdlX2RhdGE6IHt9LFxuICAgICAgd2hvaXN0eXBpbmdfZGF0YToge30sXG4gICAgICBkb2N1bWVudF9pZDogXCJcIixcbiAgICAgIG1haW5fdXNlcl90eXBlOiBcIlwiLFxuICAgICAgcmVmcmVzaF9wYWdlOiB1bmRlZmluZWQsXG4gICAgfTtcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICBsZXQgdXNlciA9IGF1dGguZ2V0VXNlcigpO1xuICAgIHRoaXMudXNlcl91dWlkID0gdXNlci5jbGllbnRfdXVpZDtcbiAgICB0aGlzLmdldFBhcnRpY2lwYW50cygpO1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGdldERhdGEoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgIH0sXG4gICAgZ2V0TGFzdE1lc3NhZ2VEYXRhKCkge1xuICAgICAgcmV0dXJuIHRoaXMubGFzdF9tZXNzYWdlX2RhdGE7XG4gICAgfSxcbiAgICBoYXNEYXRhKCkge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZGF0YSkubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIGhhc1VzZXJEYXRhKCkge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMudXNlcnNfZGF0YSkubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIGdldFNob3dpc3R5cGluZygpIHtcbiAgICAgIHJldHVybiB0aGlzLndob2lzdHlwaW5nX2RhdGE7XG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHJlZnJlc2goZG9uZSkge1xuICAgICAgdGhpcy5yZWZyZXNoX3BhZ2UgPSBkb25lO1xuICAgICAgdGhpcy5nZXRQYXJ0aWNpcGFudHMoKTtcbiAgICB9LFxuICAgIGdldFBhcnRpY2lwYW50cygpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb25SZWYgPSBjb2xsZWN0aW9uKFxuICAgICAgICAgIGZpcmViYXNlRGIsXG4gICAgICAgICAgZmlyZWJhc2VDb2xsZWN0aW9uRW51bS5jaGF0c1xuICAgICAgICApO1xuICAgICAgICBjb25zdCBxID0gcXVlcnkoXG4gICAgICAgICAgY29sbGVjdGlvblJlZixcbiAgICAgICAgICB3aGVyZShcInBhcnRpY2lwYW50c1wiLCBcImFycmF5LWNvbnRhaW5zXCIsIHRoaXMudXNlcl91dWlkKSxcbiAgICAgICAgICBvcmRlckJ5KFwibGFzdFVwZGF0ZWRcIiwgXCJkZXNjXCIpLFxuICAgICAgICAgIGxpbWl0KGZpcmViYXNlQ29sbGVjdGlvbkVudW0ubGltaXQpXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IFNuYXBQYXJ0aWNpcGFudHMgPSBvblNuYXBzaG90KFxuICAgICAgICAgIHEsXG4gICAgICAgICAgKHNuYXBzaG90KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICAgICAgICAgIHRoaXMudXNlcnMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuYWxsX3VzZXJzID0gW107XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICghQVBJaW50ZXJmYWNlLmVtcHR5KHRoaXMucmVmcmVzaF9wYWdlKSkge1xuICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hfcGFnZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgICAgICAgICAgIGxldCBkYXRhID0gZG9jLmRhdGEoKTtcbiAgICAgICAgICAgICAgbGV0IGlzVHlwaW5nID0gZGF0YS5pc1R5cGluZyB8fCBudWxsO1xuICAgICAgICAgICAgICBsZXQgcGFydGljaXBhbnRzID0gZGF0YS5wYXJ0aWNpcGFudHMgfHwgbnVsbDtcbiAgICAgICAgICAgICAgaWYgKHBhcnRpY2lwYW50cykge1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhwYXJ0aWNpcGFudHMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHBhcnRpY2lwYW50cykuZm9yRWFjaCgoW2tleSwgaXRlbXNdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsX3VzZXJzLnB1c2goaXRlbXMpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IHJlc3BfcGFydGljaXBhbnRzID0gcGFydGljaXBhbnRzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgIChpKSA9PiAhaS5pbmNsdWRlcyh0aGlzLnVzZXJfdXVpZClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGxldCB1c2VyX3V1aWQgPSByZXNwX3BhcnRpY2lwYW50c1swXVxuICAgICAgICAgICAgICAgICAgPyByZXNwX3BhcnRpY2lwYW50c1swXVxuICAgICAgICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMudXNlcnMucHVzaCh1c2VyX3V1aWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIGRvY19pZDogZG9jLmlkLFxuICAgICAgICAgICAgICAgICAgdXNlcl91dWlkOiB1c2VyX3V1aWQsXG4gICAgICAgICAgICAgICAgICBpc190eXBpbmc6IGlzVHlwaW5nW3Jlc3BfcGFydGljaXBhbnRzWzBdXVxuICAgICAgICAgICAgICAgICAgICA/IGlzVHlwaW5nW3Jlc3BfcGFydGljaXBhbnRzWzBdXVxuICAgICAgICAgICAgICAgICAgICA6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgb3JkZXJJRDogZGF0YS5vcmRlcklEIHx8IG51bGwsXG4gICAgICAgICAgICAgICAgICBvcmRlclV1aWQ6IGRhdGEub3JkZXJVdWlkIHx8IG51bGwsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy51c2VycykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICB0aGlzLmdldFVzZXIoKTtcbiAgICAgICAgICAgICAgdGhpcy5nZXRMYXN0TWVzc2FnZSgpO1xuICAgICAgICAgICAgICB0aGlzLmdldFdob0lzVHlwaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKCFBUElpbnRlcmZhY2UuZW1wdHkodGhpcy5yZWZyZXNoX3BhZ2UpKSB7XG4gICAgICAgICAgICAgIHRoaXMucmVmcmVzaF9wYWdlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGZldGNoaW5nIGNoYXQgZG9jdW1lbnRzOlwiLCBlcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgQVBJaW50ZXJmYWNlLm5vdGlmeShcImRhcmtcIiwgZXJyb3IsIFwiZXJyb3JcIiwgdGhpcy4kcSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBzaG93U2VhcmNoKCkge1xuICAgICAgdGhpcy4kcmVmcy5jaGF0X3NlYXJjaC5kaWFsb2cgPSB0cnVlO1xuICAgIH0sXG4gICAgbG9hZENvbnZlcnNhdGlvbihkb2NJZCkge1xuICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xuICAgICAgICBwYXRoOiBcIi9hY2NvdW50L2NoYXQvY29udmVyc2F0aW9uXCIsXG4gICAgICAgIHF1ZXJ5OiB7IGRvY19pZDogZG9jSWQgfSxcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0VXNlcigpIHtcbiAgICAgIHRoaXMubG9hZGluZ191c2VyID0gdHJ1ZTtcbiAgICAgIEFQSWludGVyZmFjZS5mZXRjaERhdGFDaGF0cyhcImdldFVzZXJzXCIsIHtcbiAgICAgICAgbWFpbl91c2VyX3R5cGU6IHRoaXMubWFpbl91c2VyX3R5cGUsXG4gICAgICAgIHVzZXJzOiB0aGlzLnVzZXJzLFxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLnVzZXJzX2RhdGEgPSBkYXRhLmRldGFpbHM7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLnVzZXJzX2RhdGEgPSBbXTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmdfdXNlciA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGFzeW5jIGdldExhc3RNZXNzYWdlKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYmF0Y2ggPSB0aGlzLmFsbF91c2Vycy5zcGxpY2UoMCwgMTApO1xuICAgICAgICBjb25zdCBjb252ZXJzYXRpb25zUmVmID0gY29sbGVjdGlvbihcbiAgICAgICAgICBmaXJlYmFzZURiLFxuICAgICAgICAgIGZpcmViYXNlQ29sbGVjdGlvbkVudW0uY2hhdHNcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MoXG4gICAgICAgICAgcXVlcnkoXG4gICAgICAgICAgICBjb252ZXJzYXRpb25zUmVmLFxuICAgICAgICAgICAgd2hlcmUoXCJwYXJ0aWNpcGFudHNcIiwgXCJhcnJheS1jb250YWlucy1hbnlcIiwgdGhpcy51c2VycylcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaChhc3luYyAoZG9jKSA9PiB7XG4gICAgICAgICAgY29uc3QgY29udmVyc2F0aW9uSUQgPSBkb2MuaWQ7XG4gICAgICAgICAgY29uc3QgbWVzc2FnZXNSZWYgPSBjb2xsZWN0aW9uKFxuICAgICAgICAgICAgZmlyZWJhc2VEYixcbiAgICAgICAgICAgIGZpcmViYXNlQ29sbGVjdGlvbkVudW0uY2hhdHMsXG4gICAgICAgICAgICBjb252ZXJzYXRpb25JRCxcbiAgICAgICAgICAgIFwibWVzc2FnZXNcIlxuICAgICAgICAgICk7XG4gICAgICAgICAgY29uc3QgbWVzc2FnZXNTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MoXG4gICAgICAgICAgICBxdWVyeShcbiAgICAgICAgICAgICAgbWVzc2FnZXNSZWYsXG4gICAgICAgICAgICAgIHdoZXJlKFwic2VuZGVySURcIiwgXCJpblwiLCBiYXRjaCksXG4gICAgICAgICAgICAgIG9yZGVyQnkoXCJ0aW1lc3RhbXBcIiwgXCJkZXNjXCIpLFxuICAgICAgICAgICAgICBsaW1pdCgxKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgICAgbWVzc2FnZXNTbmFwc2hvdC5mb3JFYWNoKChtZXNzYWdlRG9jKSA9PiB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0cyA9IG1lc3NhZ2VEb2MuZGF0YSgpO1xuICAgICAgICAgICAgbGV0IHRpbWVzdGFtcCA9IHJlc3VsdHMudGltZXN0YW1wLnRvRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLmxhc3RfbWVzc2FnZV9kYXRhW2NvbnZlcnNhdGlvbklEXSA9IHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogcmVzdWx0cy5tZXNzYWdlLFxuICAgICAgICAgICAgICB0aW1lc3RhbXA6IHRpbWVzdGFtcCxcbiAgICAgICAgICAgICAgdGltZTogZGF0ZS5mb3JtYXREYXRlKHRpbWVzdGFtcCwgXCJoaDptbSBhXCIpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgbGFzdCBtZXNzYWdlOlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfSxcbiAgICBhc3luYyBnZXRXaG9Jc1R5cGluZygpIHtcbiAgICAgIGNvbnN0IHEgPSBxdWVyeShcbiAgICAgICAgY29sbGVjdGlvbihmaXJlYmFzZURiLCBmaXJlYmFzZUNvbGxlY3Rpb25FbnVtLmNoYXRzKSxcbiAgICAgICAgd2hlcmUoXCJwYXJ0aWNpcGFudHNcIiwgXCJhcnJheS1jb250YWlucy1hbnlcIiwgdGhpcy51c2VycyksXG4gICAgICAgIG9yZGVyQnkoXCJsYXN0VXBkYXRlZFwiLCBcImRlc2NcIiksXG4gICAgICAgIGxpbWl0KGZpcmViYXNlQ29sbGVjdGlvbkVudW0ubGltaXQpXG4gICAgICApO1xuXG4gICAgICBjb25zdCB1bnN1YnNjcmliZSA9IG9uU25hcHNob3QocSwgKHF1ZXJ5U25hcHNob3QpID0+IHtcbiAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgICAgICBsZXQgcmVzdWx0cyA9IGRvYy5kYXRhKCk7XG4gICAgICAgICAgbGV0IGRhdGEgPSByZXN1bHRzLmlzVHlwaW5nIHx8IFtdO1xuICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhkYXRhKS5mb3JFYWNoKChba2V5LCBpdGVtc10pID0+IHtcbiAgICAgICAgICAgICAgdGhpcy53aG9pc3R5cGluZ19kYXRhW2tleV0gPSBpdGVtcztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGlzVHlwaW5nKHVzZXJfdXVpZCkge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMud2hvaXN0eXBpbmdfZGF0YSkubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgaXN0eXBpbmcgPSB0aGlzLndob2lzdHlwaW5nX2RhdGFbdXNlcl91dWlkXSB8fCBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGlzdHlwaW5nO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgLy9cbiAgfSxcbn07XG48L3NjcmlwdD5cbiJdLCJmaWxlIjoiYXNzZXRzL0NoYXRNYWluLjViODc3MDliLmpzIn0=
