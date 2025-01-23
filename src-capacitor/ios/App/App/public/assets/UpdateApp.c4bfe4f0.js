import { Q as QImg } from "./QImg.6c27044c.js";
import { Q as QSpace } from "./QSpace.f164c087.js";
import { _ as _export_sfc, R as useDataStore, bT as App, p as openBlock, q as createBlock, t as withCtx, U as createBaseVNode, f as createVNode, Z as toDisplayString, Y as QBtn } from "./index.61ed5618.js";
import { Q as QPage } from "./QPage.0e88d376.js";
const _sfc_main = {
  name: "UpdateApp",
  data() {
    return {
      app_name: "{{}}"
    };
  },
  setup() {
    const DataStore = useDataStore();
    return { DataStore };
  },
  created() {
    if (this.$q.capacitor) {
      this.getApp();
    }
  },
  computed: {
    getData() {
      return this.DataStore.appversion_data;
    }
  },
  methods: {
    async getApp() {
      let result = await App.getInfo();
      if (result) {
        this.app_name = result.name;
      }
    }
  }
};
const _hoisted_1 = { class: "full-width text-center" };
const _hoisted_2 = { class: "font16 text-weight-bold" };
const _hoisted_3 = { class: "text-grey font12" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QPage, { class: "q-pl-md q-pr-md flex flex-center" }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode(QImg, {
          src: "update.png",
          fit: "fill",
          "spinner-color": "primary",
          style: { "max-width": "150px" }
        }),
        createVNode(QSpace, { class: "q-pa-sm" }),
        createBaseVNode("div", _hoisted_2, toDisplayString($data.app_name) + " " + toDisplayString(_ctx.$t("needs an update")), 1),
        createBaseVNode("div", _hoisted_3, toDisplayString(_ctx.$t("To continue using Eko Hotels Delivery, download the latest version")), 1),
        createVNode(QSpace, { class: "q-pa-sm" }),
        createVNode(QBtn, {
          outline: "",
          style: { "color": "dark" },
          label: _ctx.$t("Update"),
          "no-caps": "",
          target: "_blank",
          href: _ctx.$q.platform.is.android ? this.getData.android_download_url : this.getData.ios_download_url
        }, null, 8, ["label", "href"])
      ])
    ]),
    _: 1
  });
}
var UpdateApp = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "UpdateApp.vue"]]);
export { UpdateApp as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXBkYXRlQXBwLmM0YmZlNGYwLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvVXBkYXRlQXBwLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLXBhZ2UgY2xhc3M9XCJxLXBsLW1kIHEtcHItbWQgZmxleCBmbGV4LWNlbnRlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJmdWxsLXdpZHRoIHRleHQtY2VudGVyXCI+XG4gICAgICA8cS1pbWdcbiAgICAgICAgc3JjPVwidXBkYXRlLnBuZ1wiXG4gICAgICAgIGZpdD1cImZpbGxcIlxuICAgICAgICBzcGlubmVyLWNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgIHN0eWxlPVwibWF4LXdpZHRoOiAxNTBweFwiXG4gICAgICAvPlxuICAgICAgPHEtc3BhY2UgY2xhc3M9XCJxLXBhLXNtXCI+PC9xLXNwYWNlPlxuICAgICAgPGRpdiBjbGFzcz1cImZvbnQxNiB0ZXh0LXdlaWdodC1ib2xkXCI+XG4gICAgICAgIHt7IGFwcF9uYW1lIH19IHt7ICR0KFwibmVlZHMgYW4gdXBkYXRlXCIpIH19XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWdyZXkgZm9udDEyXCI+XG4gICAgICAgIHt7ICR0KFwiVG8gY29udGludWUgdXNpbmcgRWtvIEhvdGVscyBEZWxpdmVyeSwgZG93bmxvYWQgdGhlIGxhdGVzdCB2ZXJzaW9uXCIpIH19XG4gICAgICA8L2Rpdj5cbiAgICAgIDxxLXNwYWNlIGNsYXNzPVwicS1wYS1zbVwiPjwvcS1zcGFjZT5cbiAgICAgIDxxLWJ0blxuICAgICAgICBvdXRsaW5lXG4gICAgICAgIHN0eWxlPVwiY29sb3I6IGRhcmtcIlxuICAgICAgICA6bGFiZWw9XCIkdCgnVXBkYXRlJylcIlxuICAgICAgICBuby1jYXBzXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgIDpocmVmPVwiXG4gICAgICAgICAgJHEucGxhdGZvcm0uaXMuYW5kcm9pZFxuICAgICAgICAgICAgPyB0aGlzLmdldERhdGEuYW5kcm9pZF9kb3dubG9hZF91cmxcbiAgICAgICAgICAgIDogdGhpcy5nZXREYXRhLmlvc19kb3dubG9hZF91cmxcbiAgICAgICAgXCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IEFwcCB9IGZyb20gXCJAY2FwYWNpdG9yL2FwcFwiO1xuaW1wb3J0IHsgdXNlRGF0YVN0b3JlIH0gZnJvbSBcInN0b3Jlcy9EYXRhU3RvcmVcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIlVwZGF0ZUFwcFwiLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhcHBfbmFtZTogXCJ7e319XCIsXG4gICAgfTtcbiAgfSxcbiAgc2V0dXAoKSB7XG4gICAgY29uc3QgRGF0YVN0b3JlID0gdXNlRGF0YVN0b3JlKCk7XG4gICAgcmV0dXJuIHsgRGF0YVN0b3JlIH07XG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgaWYgKHRoaXMuJHEuY2FwYWNpdG9yKSB7XG4gICAgICB0aGlzLmdldEFwcCgpO1xuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBnZXREYXRhKCkge1xuICAgICAgcmV0dXJuIHRoaXMuRGF0YVN0b3JlLmFwcHZlcnNpb25fZGF0YTtcbiAgICB9LFxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYXN5bmMgZ2V0QXBwKCkge1xuICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IEFwcC5nZXRJbmZvKCk7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHRoaXMuYXBwX25hbWUgPSByZXN1bHQubmFtZTtcbiAgICAgIH1cbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbIl9jcmVhdGVCbG9jayIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfY3JlYXRlVk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7O0FBcUNBLE1BQUssWUFBVTtBQUFBLEVBQ2IsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUNMLFdBQU87QUFBQSxNQUNMLFVBQVU7QUFBQTtFQUViO0FBQUEsRUFDRCxRQUFRO0FBQ04sVUFBTSxZQUFZO0FBQ2xCLFdBQU8sRUFBRTtFQUNWO0FBQUEsRUFDRCxVQUFVO0FBQ1IsUUFBSSxLQUFLLEdBQUcsV0FBVztBQUNyQixXQUFLLE9BQU07QUFBQSxJQUNiO0FBQUEsRUFDRDtBQUFBLEVBQ0QsVUFBVTtBQUFBLElBQ1IsVUFBVTtBQUNSLGFBQU8sS0FBSyxVQUFVO0FBQUEsSUFDdkI7QUFBQSxFQUNGO0FBQUEsRUFDRCxTQUFTO0FBQUEsSUFDUCxNQUFNLFNBQVM7QUFDYixVQUFJLFNBQVMsTUFBTSxJQUFJO0FBQ3ZCLFVBQUksUUFBUTtBQUNWLGFBQUssV0FBVyxPQUFPO0FBQUEsTUFDekI7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUNIO0FBaEVTLE1BQUEsYUFBQSxFQUFBLE9BQU0seUJBQXdCO0FBUTVCLE1BQUEsYUFBQSxFQUFBLE9BQU0sMEJBQXlCO0FBRy9CLE1BQUEsYUFBQSxFQUFBLE9BQU0sbUJBQWtCOztzQkFaakNBLFlBNkJTLE9BQUEsRUFBQSxPQUFBLHNDQTdCdUM7QUFBQSxxQkFDOUMsTUEyQk07QUFBQSxNQTNCTkMsZ0JBMkJNLE9BM0JOLFlBMkJNO0FBQUEsUUExQkpDLFlBS0UsTUFBQTtBQUFBLFVBSkEsS0FBSTtBQUFBLFVBQ0osS0FBSTtBQUFBLFVBQ0osaUJBQWM7QUFBQSxVQUNkLE9BQUEsRUFBd0IsYUFBQSxRQUFBO0FBQUE7UUFFMUJBLFlBQW1DLFFBQUEsRUFBQSxPQUFBLFVBQXJCLENBQUE7QUFBQSxRQUNkRCxnQkFFTSxPQUZOLFlBRU1FLGdCQURELGNBQVEsSUFBRyxzQkFBSSxLQUFFLEdBQUEsaUJBQUEsQ0FBQSxHQUFBLENBQUE7QUFBQSxRQUV0QkYsZ0JBRU0sT0FGTixZQUVNRSxnQkFERCxLQUFFLEdBQUEsb0VBQUEsQ0FBQSxHQUFBLENBQUE7QUFBQSxRQUVQRCxZQUFtQyxRQUFBLEVBQUEsT0FBQSxVQUFyQixDQUFBO0FBQUEsUUFDZEEsWUFXRSxNQUFBO0FBQUEsVUFWQSxTQUFBO0FBQUEsVUFDQSxPQUFBLEVBQW1CLFNBQUEsT0FBQTtBQUFBLFVBQ2xCLE9BQU8sS0FBRSxHQUFBLFFBQUE7QUFBQSxVQUNWLFdBQUE7QUFBQSxVQUNBLFFBQU87QUFBQSxVQUNOLE1BQWlCLEtBQUEsR0FBRyxTQUFTLEdBQUcsVUFBMkIsS0FBQSxRQUFRLHVCQUF3QyxLQUFBLFFBQVE7QUFBQTs7Ozs7Ozs7In0=
