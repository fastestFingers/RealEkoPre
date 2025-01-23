import { _ as _export_sfc, l as defineAsyncComponent, u as __vitePreload, aw as auth, m as APIinterface, n as resolveComponent, p as openBlock, q as createBlock, t as withCtx, f as createVNode, aY as QInput, at as QIcon, aa as withDirectives, Y as QBtn, a9 as QCardSection, V as createElementBlock, a6 as createTextVNode, Z as toDisplayString, U as createBaseVNode, aA as createCommentVNode, a1 as QSpinner, F as Fragment, a8 as QCard, aB as QDialog } from "./index.61ed5618.js";
import { Q as QSpace } from "./QSpace.f164c087.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { C as ClosePopup } from "./ClosePopup.9d17b53c.js";
import { c as collection, f as firebaseDb, b as firebaseCollectionEnum, q as query, w as where, o as orderBy, l as limit, g as getDocs, e as addDoc, s as serverTimestamp, d as doc, a as setDoc } from "./FirebaseChat.3fe55950.js";
const _sfc_main = {
  name: "ChatSearch",
  components: {
    ChatUserList: defineAsyncComponent(
      () => __vitePreload(() => import("./ChatUserList.4ce28be6.js"), true ? ["assets/ChatUserList.4ce28be6.js","assets/QItemLabel.a9365c5b.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QList.b69a7e5b.js"] : void 0)
    )
  },
  data() {
    return {
      dialog: false,
      search: "",
      is_search: false,
      awaitingSearch: false,
      search_type: ["merchant", "admin"],
      data: [],
      loading: true,
      suggested_data: [],
      main_user_uuid: ""
    };
  },
  mounted() {
    let user = auth.getUser();
    this.main_user_uuid = user.client_uuid;
    this.getSuggestedUser();
  },
  computed: {
    hasSearch() {
      if (!APIinterface.empty(this.search)) {
        return true;
      }
      return false;
    },
    hasData() {
      if (Object.keys(this.data).length > 0) {
        return true;
      }
      return false;
    },
    getData() {
      return this.data;
    }
  },
  watch: {
    search(newsearch, oldsearch) {
      if (!this.awaitingSearch) {
        if (APIinterface.empty(newsearch)) {
          return false;
        }
        setTimeout(() => {
          APIinterface.fetchDataChats("searchChats", {
            search: this.search,
            search_type: this.search_type
          }).then((data) => {
            this.data = data.details;
          }).catch((error) => {
            this.data = [];
          }).then((data) => {
            this.awaitingSearch = false;
          });
        }, 1e3);
        this.awaitingSearch = true;
      }
    }
  },
  methods: {
    whenClear() {
      this.data = [];
    },
    getSuggestedUser() {
      this.loading = true;
      APIinterface.fetchDataChats("suggestedUser", {
        search_type: this.search_type
      }).then((data) => {
        this.suggested_data = data.details;
      }).catch((error) => {
        this.suggested_data = [];
      }).then((data) => {
        this.loading = false;
      });
    },
    async onChatuser(user_uuid) {
      try {
        const collectionRef = collection(
          firebaseDb,
          firebaseCollectionEnum.chats
        );
        const q = query(
          collectionRef,
          where("participants", "array-contains", user_uuid),
          orderBy("lastUpdated", "desc"),
          limit(1)
        );
        let current_doc_id = "";
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc2) => {
          let data = doc2.data();
          let participants = data.participants || null;
          if (participants.includes(this.main_user_uuid) === true) {
            current_doc_id = doc2.id;
          }
        });
        if (!APIinterface.empty(current_doc_id)) {
          this.loadConversation(current_doc_id);
        } else {
          this.createConversation(user_uuid);
        }
      } catch (error) {
        APIinterface.notify("dark", error, "error", this.$q);
      }
    },
    async createConversation(user_uuid) {
      try {
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
        let main_user_uuid = this.main_user_uuid;
        let data = {
          lastUpdated: serverTimestamp(),
          dateCreated: serverTimestamp(),
          participants: [user_uuid, main_user_uuid],
          isTyping: {
            [`${user_uuid}`]: false,
            [`${main_user_uuid}`]: false
          }
        };
        setDoc(chatDocRef, data).then(() => {
          this.loadConversation(chatId);
        }).catch((error) => {
          APIinterface.notify("dark", error, "error", this.$q);
        });
      } catch (error) {
        APIinterface.notify("dark", error, "error", this.$q);
      }
    },
    loadConversation(docId) {
      this.$router.push({
        path: "/account/chat/conversation",
        query: { doc_id: docId }
      });
    }
  }
};
const _hoisted_1 = {
  key: 0,
  class: "text-body2 text-weight-regular q-mb-md"
};
const _hoisted_2 = { class: "text-weight-bold" };
const _hoisted_3 = {
  key: 1,
  class: "text-center q-pa-xl"
};
const _hoisted_4 = {
  key: 0,
  class: "text-body2 text-center q-pa-xl"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ChatUserList = resolveComponent("ChatUserList");
  return openBlock(), createBlock(QDialog, {
    modelValue: $data.dialog,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.dialog = $event),
    persistent: "",
    maximized: true,
    "transition-show": "fade",
    "transition-hide": "fade",
    onBeforeShow: _cache[2] || (_cache[2] = ($event) => $data.search = ""),
    onBeforeHide: _cache[3] || (_cache[3] = ($event) => $data.data = [])
  }, {
    default: withCtx(() => [
      createVNode(QCard, null, {
        default: withCtx(() => [
          createVNode(QToolbar, { class: "q-pl-md q-pr-md q-pt-sm" }, {
            default: withCtx(() => [
              createVNode(QInput, {
                outlined: "",
                modelValue: $data.search,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.search = $event),
                label: _ctx.$t("Search restaurants"),
                dense: "",
                color: _ctx.$q.dark.mode ? "grey600" : "blue",
                "bg-color": _ctx.$q.dark.mode ? "grey300" : "grey-1",
                class: "radius10",
                clearable: "",
                "clear-icon": "close",
                onClear: $options.whenClear
              }, {
                prepend: withCtx(() => [
                  createVNode(QIcon, { name: "search" })
                ]),
                _: 1
              }, 8, ["modelValue", "label", "color", "bg-color", "onClear"]),
              createVNode(QSpace),
              withDirectives(createVNode(QBtn, {
                flat: "",
                dense: "",
                label: _ctx.$t("Cancel"),
                "no-caps": "",
                color: _ctx.$q.dark.mode ? "grey300" : "blue"
              }, null, 8, ["label", "color"]), [
                [ClosePopup]
              ])
            ]),
            _: 1
          }),
          createVNode(QCardSection, null, {
            default: withCtx(() => [
              $options.hasSearch ? (openBlock(), createElementBlock("div", _hoisted_1, [
                createVNode(QIcon, {
                  name: "search",
                  size: "2em"
                }),
                createTextVNode(toDisplayString(_ctx.$t("Search for")) + " ", 1),
                createBaseVNode("span", _hoisted_2, toDisplayString($data.search), 1)
              ])) : createCommentVNode("", true),
              $data.awaitingSearch ? (openBlock(), createElementBlock("div", _hoisted_3, [
                createVNode(QSpinner, {
                  color: "primary",
                  size: "2em"
                })
              ])) : createCommentVNode("", true)
            ]),
            _: 1
          }),
          $options.hasData && !$data.awaitingSearch ? (openBlock(), createBlock(_component_ChatUserList, {
            key: 0,
            data: $data.data,
            onOnChatuser: $options.onChatuser
          }, null, 8, ["data", "onOnChatuser"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            $options.hasSearch && !$data.awaitingSearch ? (openBlock(), createElementBlock("div", _hoisted_4, toDisplayString(_ctx.$t("No matching records found")), 1)) : createCommentVNode("", true)
          ], 64)),
          !$options.hasSearch ? (openBlock(), createBlock(_component_ChatUserList, {
            key: 2,
            data: $data.suggested_data,
            headerTitle: _ctx.$t("Suggested Restaurants"),
            onOnChatuser: $options.onChatuser
          }, null, 8, ["data", "headerTitle", "onOnChatuser"])) : createCommentVNode("", true)
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["modelValue"]);
}
var ChatSearch = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "ChatSearch.vue"]]);
export { ChatSearch as default };
//# sourceMappingURL=data:application/json;base64,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bEMsTUFBSztBQUFBLGtCQUFTLE1BQUs7QUFBQTtnQkFBa0JFLHlEQUFtQixLQUNoRTtBQUFBLGdDQUFrRCxRQUFsRCxZQUFrREMsZ0JBQWhCLE1BQU07QUFBQTtjQUcvQixNQUFjLGtCQUF6QkYsZ0NBRU0sT0FGTixZQUVNO0FBQUEsZ0JBREpELFlBQW1EO0FBQUEsa0JBQXhDLE9BQU07QUFBQSxrQkFBVSxNQUFLO0FBQUE7Ozs7O1VBSXBCLHFCQUFZLE1BQWMsK0JBQ3hDRCxZQUFvRTtBQUFBO1lBQXJELE1BQU0sTUFBSTtBQUFBLFlBQUcsY0FBYSxTQUFVO0FBQUEsaUVBRXJESyxtQkFNV0M7QUFBQSxZQUxPLHVCQUFjLE1BQWMsK0JBQzFDRCxtQkFFTSxPQUZOLFlBRU1ELGdCQURELEtBQUU7O1dBS00sU0FBUywwQkFDeEJKLFlBSWdCO0FBQUE7WUFIYixNQUFNLE1BQWM7QUFBQSxZQUNwQixhQUFhLEtBQUU7QUFBQSxZQUNmLGNBQWEsU0FBVTtBQUFBIiwibmFtZXMiOlsiZG9jIiwiX2NyZWF0ZUJsb2NrIiwiX2NyZWF0ZVZOb2RlIiwiX29wZW5CbG9jayIsIl9jcmVhdGVUZXh0Vk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9GcmFnbWVudCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NoYXRTZWFyY2gudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHEtZGlhbG9nXG4gICAgdi1tb2RlbD1cImRpYWxvZ1wiXG4gICAgcGVyc2lzdGVudFxuICAgIDptYXhpbWl6ZWQ9XCJ0cnVlXCJcbiAgICB0cmFuc2l0aW9uLXNob3c9XCJmYWRlXCJcbiAgICB0cmFuc2l0aW9uLWhpZGU9XCJmYWRlXCJcbiAgICBAYmVmb3JlLXNob3c9XCJzZWFyY2ggPSAnJ1wiXG4gICAgQGJlZm9yZS1oaWRlPVwiZGF0YSA9IFtdXCJcbiAgPlxuICAgIDxxLWNhcmQ+XG4gICAgICA8cS10b29sYmFyIGNsYXNzPVwicS1wbC1tZCBxLXByLW1kIHEtcHQtc21cIj5cbiAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgIHYtbW9kZWw9XCJzZWFyY2hcIlxuICAgICAgICAgIDpsYWJlbD1cIiR0KCdTZWFyY2ggcmVzdGF1cmFudHMnKVwiXG4gICAgICAgICAgZGVuc2VcbiAgICAgICAgICA6Y29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTYwMCcgOiAnYmx1ZSdcIlxuICAgICAgICAgIDpiZy1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICdncmV5LTEnXCJcbiAgICAgICAgICBjbGFzcz1cInJhZGl1czEwXCJcbiAgICAgICAgICBjbGVhcmFibGVcbiAgICAgICAgICBjbGVhci1pY29uPVwiY2xvc2VcIlxuICAgICAgICAgIEBjbGVhcj1cIndoZW5DbGVhclwiXG4gICAgICAgID5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OnByZXBlbmQ+XG4gICAgICAgICAgICA8cS1pY29uIG5hbWU9XCJzZWFyY2hcIiAvPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvcS1pbnB1dD5cbiAgICAgICAgPHEtc3BhY2U+PC9xLXNwYWNlPlxuICAgICAgICA8cS1idG5cbiAgICAgICAgICBmbGF0XG4gICAgICAgICAgZGVuc2VcbiAgICAgICAgICA6bGFiZWw9XCIkdCgnQ2FuY2VsJylcIlxuICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXkzMDAnIDogJ2JsdWUnXCJcbiAgICAgICAgLz5cbiAgICAgIDwvcS10b29sYmFyPlxuXG4gICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDxkaXYgdi1pZj1cImhhc1NlYXJjaFwiIGNsYXNzPVwidGV4dC1ib2R5MiB0ZXh0LXdlaWdodC1yZWd1bGFyIHEtbWItbWRcIj5cbiAgICAgICAgICA8cS1pY29uIG5hbWU9XCJzZWFyY2hcIiBzaXplPVwiMmVtXCI+PC9xLWljb24+e3sgJHQoXCJTZWFyY2ggZm9yXCIpIH19XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXdlaWdodC1ib2xkXCI+e3sgc2VhcmNoIH19PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IHYtaWY9XCJhd2FpdGluZ1NlYXJjaFwiIGNsYXNzPVwidGV4dC1jZW50ZXIgcS1wYS14bFwiPlxuICAgICAgICAgIDxxLXNwaW5uZXIgY29sb3I9XCJwcmltYXJ5XCIgc2l6ZT1cIjJlbVwiPiA8L3Etc3Bpbm5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuXG4gICAgICA8dGVtcGxhdGUgdi1pZj1cImhhc0RhdGEgJiYgIWF3YWl0aW5nU2VhcmNoXCI+XG4gICAgICAgIDxDaGF0VXNlckxpc3QgOmRhdGE9XCJkYXRhXCIgQG9uLWNoYXR1c2VyPVwib25DaGF0dXNlclwiPjwvQ2hhdFVzZXJMaXN0PlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiaGFzU2VhcmNoICYmICFhd2FpdGluZ1NlYXJjaFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWJvZHkyIHRleHQtY2VudGVyIHEtcGEteGxcIj5cbiAgICAgICAgICAgIHt7ICR0KFwiTm8gbWF0Y2hpbmcgcmVjb3JkcyBmb3VuZFwiKSB9fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgPHRlbXBsYXRlIHYtaWY9XCIhaGFzU2VhcmNoXCI+XG4gICAgICAgIDxDaGF0VXNlckxpc3RcbiAgICAgICAgICA6ZGF0YT1cInN1Z2dlc3RlZF9kYXRhXCJcbiAgICAgICAgICA6aGVhZGVyVGl0bGU9XCIkdCgnU3VnZ2VzdGVkIFJlc3RhdXJhbnRzJylcIlxuICAgICAgICAgIEBvbi1jaGF0dXNlcj1cIm9uQ2hhdHVzZXJcIlxuICAgICAgICA+PC9DaGF0VXNlckxpc3Q+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvcS1jYXJkPlxuICA8L3EtZGlhbG9nPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBBUElpbnRlcmZhY2UgZnJvbSBcInNyYy9hcGkvQVBJaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBkZWZpbmVBc3luY0NvbXBvbmVudCB9IGZyb20gXCJ2dWVcIjtcbmltcG9ydCB7IGZpcmViYXNlRGIsIGZpcmViYXNlQ29sbGVjdGlvbkVudW0gfSBmcm9tIFwic3JjL2Jvb3QvRmlyZWJhc2VDaGF0XCI7XG5pbXBvcnQgYXV0aCBmcm9tIFwic3JjL2FwaS9hdXRoXCI7XG5pbXBvcnQge1xuICBjb2xsZWN0aW9uLFxuICBxdWVyeSxcbiAgd2hlcmUsXG4gIG9yZGVyQnksXG4gIGxpbWl0LFxuICBnZXREb2NzLFxuICBzZXJ2ZXJUaW1lc3RhbXAsXG4gIGFkZERvYyxcbiAgZG9jLFxuICBzZXREb2MsXG59IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIkNoYXRTZWFyY2hcIixcbiAgY29tcG9uZW50czoge1xuICAgIENoYXRVc2VyTGlzdDogZGVmaW5lQXN5bmNDb21wb25lbnQoKCkgPT5cbiAgICAgIGltcG9ydChcImNvbXBvbmVudHMvQ2hhdFVzZXJMaXN0LnZ1ZVwiKVxuICAgICksXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRpYWxvZzogZmFsc2UsXG4gICAgICBzZWFyY2g6IFwiXCIsXG4gICAgICBpc19zZWFyY2g6IGZhbHNlLFxuICAgICAgYXdhaXRpbmdTZWFyY2g6IGZhbHNlLFxuICAgICAgc2VhcmNoX3R5cGU6IFtcIm1lcmNoYW50XCIsIFwiYWRtaW5cIl0sXG4gICAgICBkYXRhOiBbXSxcbiAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICBzdWdnZXN0ZWRfZGF0YTogW10sXG4gICAgICBtYWluX3VzZXJfdXVpZDogXCJcIixcbiAgICB9O1xuICB9LFxuICBtb3VudGVkKCkge1xuICAgIGxldCB1c2VyID0gYXV0aC5nZXRVc2VyKCk7XG4gICAgdGhpcy5tYWluX3VzZXJfdXVpZCA9IHVzZXIuY2xpZW50X3V1aWQ7XG4gICAgdGhpcy5nZXRTdWdnZXN0ZWRVc2VyKCk7XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgaGFzU2VhcmNoKCkge1xuICAgICAgaWYgKCFBUElpbnRlcmZhY2UuZW1wdHkodGhpcy5zZWFyY2gpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgaGFzRGF0YSgpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmRhdGEpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICBnZXREYXRhKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgICB9LFxuICB9LFxuICB3YXRjaDoge1xuICAgIHNlYXJjaChuZXdzZWFyY2gsIG9sZHNlYXJjaCkge1xuICAgICAgaWYgKCF0aGlzLmF3YWl0aW5nU2VhcmNoKSB7XG4gICAgICAgIGlmIChBUElpbnRlcmZhY2UuZW1wdHkobmV3c2VhcmNoKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBBUElpbnRlcmZhY2UuZmV0Y2hEYXRhQ2hhdHMoXCJzZWFyY2hDaGF0c1wiLCB7XG4gICAgICAgICAgICBzZWFyY2g6IHRoaXMuc2VhcmNoLFxuICAgICAgICAgICAgc2VhcmNoX3R5cGU6IHRoaXMuc2VhcmNoX3R5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZGF0YSA9IGRhdGEuZGV0YWlscztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuYXdhaXRpbmdTZWFyY2ggPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCAxMDAwKTsgLy8gMSBzZWMgZGVsYXlcbiAgICAgICAgdGhpcy5hd2FpdGluZ1NlYXJjaCA9IHRydWU7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHdoZW5DbGVhcigpIHtcbiAgICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgIH0sXG4gICAgZ2V0U3VnZ2VzdGVkVXNlcigpIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICBBUElpbnRlcmZhY2UuZmV0Y2hEYXRhQ2hhdHMoXCJzdWdnZXN0ZWRVc2VyXCIsIHtcbiAgICAgICAgc2VhcmNoX3R5cGU6IHRoaXMuc2VhcmNoX3R5cGUsXG4gICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuc3VnZ2VzdGVkX2RhdGEgPSBkYXRhLmRldGFpbHM7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLnN1Z2dlc3RlZF9kYXRhID0gW107XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgYXN5bmMgb25DaGF0dXNlcih1c2VyX3V1aWQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb25SZWYgPSBjb2xsZWN0aW9uKFxuICAgICAgICAgIGZpcmViYXNlRGIsXG4gICAgICAgICAgZmlyZWJhc2VDb2xsZWN0aW9uRW51bS5jaGF0c1xuICAgICAgICApO1xuICAgICAgICBjb25zdCBxID0gcXVlcnkoXG4gICAgICAgICAgY29sbGVjdGlvblJlZixcbiAgICAgICAgICB3aGVyZShcInBhcnRpY2lwYW50c1wiLCBcImFycmF5LWNvbnRhaW5zXCIsIHVzZXJfdXVpZCksXG4gICAgICAgICAgb3JkZXJCeShcImxhc3RVcGRhdGVkXCIsIFwiZGVzY1wiKSxcbiAgICAgICAgICBsaW1pdCgxKVxuICAgICAgICApO1xuXG4gICAgICAgIGxldCBjdXJyZW50X2RvY19pZCA9IFwiXCI7XG4gICAgICAgIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHEpO1xuICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xuICAgICAgICAgIGxldCBkYXRhID0gZG9jLmRhdGEoKTtcbiAgICAgICAgICBsZXQgcGFydGljaXBhbnRzID0gZGF0YS5wYXJ0aWNpcGFudHMgfHwgbnVsbDtcbiAgICAgICAgICBpZiAocGFydGljaXBhbnRzLmluY2x1ZGVzKHRoaXMubWFpbl91c2VyX3V1aWQpID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjdXJyZW50X2RvY19pZCA9IGRvYy5pZDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghQVBJaW50ZXJmYWNlLmVtcHR5KGN1cnJlbnRfZG9jX2lkKSkge1xuICAgICAgICAgIHRoaXMubG9hZENvbnZlcnNhdGlvbihjdXJyZW50X2RvY19pZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jcmVhdGVDb252ZXJzYXRpb24odXNlcl91dWlkKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgQVBJaW50ZXJmYWNlLm5vdGlmeShcImRhcmtcIiwgZXJyb3IsIFwiZXJyb3JcIiwgdGhpcy4kcSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBhc3luYyBjcmVhdGVDb252ZXJzYXRpb24odXNlcl91dWlkKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBuZXdDb252ZXJzYXRpb25SZWYgPSBhd2FpdCBhZGREb2MoXG4gICAgICAgICAgY29sbGVjdGlvbihmaXJlYmFzZURiLCBmaXJlYmFzZUNvbGxlY3Rpb25FbnVtLmNoYXRzKSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYXN0VXBkYXRlZDogc2VydmVyVGltZXN0YW1wKCksXG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBjaGF0SWQgPSBuZXdDb252ZXJzYXRpb25SZWYuaWQ7XG4gICAgICAgIGNvbnN0IGNoYXREb2NSZWYgPSBkb2MoXG4gICAgICAgICAgZmlyZWJhc2VEYixcbiAgICAgICAgICBmaXJlYmFzZUNvbGxlY3Rpb25FbnVtLmNoYXRzLFxuICAgICAgICAgIGNoYXRJZFxuICAgICAgICApO1xuXG4gICAgICAgIGxldCBtYWluX3VzZXJfdXVpZCA9IHRoaXMubWFpbl91c2VyX3V1aWQ7XG5cbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgbGFzdFVwZGF0ZWQ6IHNlcnZlclRpbWVzdGFtcCgpLFxuICAgICAgICAgIGRhdGVDcmVhdGVkOiBzZXJ2ZXJUaW1lc3RhbXAoKSxcbiAgICAgICAgICBwYXJ0aWNpcGFudHM6IFt1c2VyX3V1aWQsIG1haW5fdXNlcl91dWlkXSxcbiAgICAgICAgICBpc1R5cGluZzoge1xuICAgICAgICAgICAgW2Ake3VzZXJfdXVpZH1gXTogZmFsc2UsXG4gICAgICAgICAgICBbYCR7bWFpbl91c2VyX3V1aWR9YF06IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIHNldERvYyhjaGF0RG9jUmVmLCBkYXRhKVxuICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZENvbnZlcnNhdGlvbihjaGF0SWQpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgQVBJaW50ZXJmYWNlLm5vdGlmeShcImRhcmtcIiwgZXJyb3IsIFwiZXJyb3JcIiwgdGhpcy4kcSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBBUElpbnRlcmZhY2Uubm90aWZ5KFwiZGFya1wiLCBlcnJvciwgXCJlcnJvclwiLCB0aGlzLiRxKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGxvYWRDb252ZXJzYXRpb24oZG9jSWQpIHtcbiAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcbiAgICAgICAgcGF0aDogXCIvYWNjb3VudC9jaGF0L2NvbnZlcnNhdGlvblwiLFxuICAgICAgICBxdWVyeTogeyBkb2NfaWQ6IGRvY0lkIH0sXG4gICAgICB9KTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuIl0sImZpbGUiOiJhc3NldHMvQ2hhdFNlYXJjaC4xOTNmOGU0Ny5qcyJ9
