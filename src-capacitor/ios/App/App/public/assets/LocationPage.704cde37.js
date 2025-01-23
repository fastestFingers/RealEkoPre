import { _ as _export_sfc, l as defineAsyncComponent, R as useDataStore, m as APIinterface, aw as auth, n as resolveComponent, p as openBlock, V as createElementBlock, f as createVNode, t as withCtx, F as Fragment, U as createBaseVNode, Z as toDisplayString, Y as QBtn, at as QIcon, u as __vitePreload } from "./index.61ed5618.js";
import { Q as QImg } from "./QImg.6c27044c.js";
import { Q as QSpace } from "./QSpace.f164c087.js";
import { Q as QInnerLoading } from "./QInnerLoading.abe2afe6.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import { A as AppLocation } from "./AppLocation.af3422a5.js";
const _sfc_main = {
  name: "LocationPage",
  data() {
    return {
      position: [],
      loading: false,
      loading_label: "",
      data: [],
      address: ""
    };
  },
  components: {
    DeliverySched: defineAsyncComponent(
      () => __vitePreload(() => import("./DeliverySched.9dd37b6e.js"), true ? ["assets/DeliverySched.9dd37b6e.js","assets/QBtnToggle.6ffa195b.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QBtnGroup.abc2d1c7.js","assets/QSelect.311187d6.js","assets/QChip.f183a4f1.js","assets/QItemLabel.a9365c5b.js","assets/QMenu.8e482cd8.js","assets/selection.50b4cb0c.js","assets/rtl.f3ed811c.js","assets/format.7f7370d3.js","assets/DeliverySched.4e9605bf.js"] : void 0)
    )
  },
  setup() {
    const DataStore = useDataStore();
    return { DataStore };
  },
  methods: {
    locationPermission() {
      if (this.$q.capacitor) {
        APIinterface.showLoadingBox("", this.$q);
        AppLocation.checkAccuracy().then((data) => {
          this.locateLocation();
        }).catch((error) => {
          if (error.code === 4) {
            this.reverseGeocoding(
              this.DataStore.maps_config.default_lat,
              this.DataStore.maps_config.default_lng
            );
          } else {
            APIinterface.hideLoadingBox(this.$q);
            APIinterface.notify("dark", error.message, "error", this.$q);
          }
        }).then((data) => {
        });
      } else {
        if (navigator.geolocation) {
          APIinterface.showLoadingBox("", this.$q);
          navigator.geolocation.getCurrentPosition(
            (data) => {
              this.reverseGeocoding(
                data.coords.latitude,
                data.coords.longitude
              );
            },
            (error) => {
              this.reverseGeocoding(
                this.DataStore.maps_config.default_lat,
                this.DataStore.maps_config.default_lng
              );
            }
          );
        }
      }
    },
    locateLocation() {
      AppLocation.getPosition().then((data) => {
        this.reverseGeocoding(data.lat, data.lng);
      }).catch((error) => {
        this.reverseGeocoding(
          this.DataStore.maps_config.default_lat,
          this.DataStore.maps_config.default_lng
        );
      }).then((data) => {
      });
    },
    reverseGeocoding(lat, lng) {
      this.geocoder_loading = true;
      APIinterface.reverseGeocoding(lat, lng).then((data) => {
        this.data = data.details.data;
        if (typeof data.details.data.address !== "undefined" && data.details.data.address !== null) {
          this.address = data.details.data.address.formatted_address;
          this.setLocation();
        } else {
          APIinterface.notify(
            "dark",
            "This location is not available",
            "error",
            this.$q
          );
          this.address = "";
          this.data = [];
        }
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data) => {
        this.loading = false;
        APIinterface.hideLoadingBox(this.$q);
      });
    },
    setLocation() {
      if (APIinterface.empty(this.data.place_id)) {
        APIinterface.notify(
          "dark",
          "Enter your location or select on the map",
          "error",
          this.$q
        );
      }
      APIinterface.setStorage("place_data", this.data);
      APIinterface.setStorage("place_id", this.data.place_id);
      const deliverySched = APIinterface.getStorage("delivery_sched");
      console.debug("deliverySched=>" + deliverySched);
      if (auth.authenticated()) {
        this.loading = true;
        APIinterface.SavePlaceByID(this.data.place_id).then((data) => {
          if (APIinterface.empty(deliverySched)) {
            this.$refs.delivery_sched.showSched(true);
          } else {
            this.backPage();
          }
        }).catch((error) => {
          APIinterface.notify("dark", error, "error", this.$q);
        }).then((data) => {
          this.loading = false;
        });
      } else {
        if (APIinterface.empty(deliverySched)) {
          this.$refs.delivery_sched.showSched(true);
        } else {
          this.backPage();
        }
      }
    },
    afterSavetrans(data) {
      this.backPage();
    },
    backPage() {
      if (!APIinterface.empty(this.back_url)) {
        this.$router.push(this.back_url);
      } else {
        this.$router.replace("/home");
      }
    }
  }
};
const _hoisted_1 = { class: "full-width text-center" };
const _hoisted_2 = { class: "text-weight-bold" };
const _hoisted_3 = { class: "text-weight-medium q-ma-none" };
const _hoisted_4 = { class: "row items-center justify-start fit q-pl-md" };
const _hoisted_5 = { class: "q-mr-md" };
const _hoisted_6 = { class: "row items-center justify-start fit q-pl-md" };
const _hoisted_7 = { class: "q-mr-md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DeliverySched = resolveComponent("DeliverySched");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(QPage, { class: "flex flex-center q-pl-md q-pr-md" }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_1, [
          createVNode(QImg, {
            src: "cuttery.png",
            fit: "fill",
            "spinner-color": "primary",
            style: { "height": "130px", "max-width": "120px" }
          }),
          createBaseVNode("h5", _hoisted_2, toDisplayString(_ctx.$t("Let's find best restaurant")), 1),
          createBaseVNode("p", _hoisted_3, toDisplayString(_ctx.$t(
            "Set your location to started searching for restaurant in your area"
          )), 1),
          createVNode(QSpace, { class: "q-pa-sm" }),
          createVNode(QBtn, {
            unelevated: "",
            "no-caps": "",
            color: "primary text-white",
            class: "full-width text-weight-bold radius28 q-mb-md",
            size: "lg",
            onClick: $options.locationPermission
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_4, [
                createBaseVNode("div", _hoisted_5, [
                  createVNode(QIcon, { name: "las la-search-location" })
                ]),
                createBaseVNode("div", null, toDisplayString(_ctx.$t("Share location")), 1)
              ])
            ]),
            _: 1
          }, 8, ["onClick"]),
          createVNode(QBtn, {
            unelevated: "",
            "no-caps": "",
            color: "primary text-white",
            class: "full-width text-weight-bold radius28",
            size: "lg",
            to: "/location/map"
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_6, [
                createBaseVNode("div", _hoisted_7, [
                  createVNode(QIcon, { name: "las la-map-marker" })
                ]),
                createBaseVNode("div", null, toDisplayString(_ctx.$t("Choose from map")), 1)
              ])
            ]),
            _: 1
          })
        ]),
        createVNode(QInnerLoading, {
          showing: $data.loading,
          color: "primary",
          size: "md",
          label: $data.loading_label
        }, null, 8, ["showing", "label"])
      ]),
      _: 1
    }),
    createVNode(_component_DeliverySched, {
      ref: "delivery_sched",
      onAfterSavetrans: $options.afterSavetrans
    }, null, 8, ["onAfterSavetrans"])
  ], 64);
}
var LocationPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "LocationPage.vue"]]);
export { LocationPage as default };
//# sourceMappingURL=data:application/json;base64,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TyxNQUFhO0FBQUE7Ozs7SUFHekJBLFlBQXdFO0FBQUEsTUFBekQsS0FBSTtBQUFBLE1BQWtCLGtCQUFpQixTQUFjO0FBQUEiLCJuYW1lcyI6WyJfY3JlYXRlVk5vZGUiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9Mb2NhdGlvbi9Mb2NhdGlvblBhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHEtcGFnZSBjbGFzcz1cImZsZXggZmxleC1jZW50ZXIgcS1wbC1tZCBxLXByLW1kXCI+XG4gICAgPGRpdiBjbGFzcz1cImZ1bGwtd2lkdGggdGV4dC1jZW50ZXJcIj5cbiAgICAgIDxxLWltZ1xuICAgICAgICBzcmM9XCJjdXR0ZXJ5LnBuZ1wiXG4gICAgICAgIGZpdD1cImZpbGxcIlxuICAgICAgICBzcGlubmVyLWNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgIHN0eWxlPVwiaGVpZ2h0OiAxMzBweDsgbWF4LXdpZHRoOiAxMjBweFwiXG4gICAgICAvPlxuXG4gICAgICA8aDUgY2xhc3M9XCJ0ZXh0LXdlaWdodC1ib2xkXCI+e3sgJHQoXCJMZXQncyBmaW5kIGJlc3QgcmVzdGF1cmFudFwiKSB9fTwvaDU+XG4gICAgICA8cCBjbGFzcz1cInRleHQtd2VpZ2h0LW1lZGl1bSBxLW1hLW5vbmVcIj5cbiAgICAgICAge3tcbiAgICAgICAgICAkdChcbiAgICAgICAgICAgIFwiU2V0IHlvdXIgbG9jYXRpb24gdG8gc3RhcnRlZCBzZWFyY2hpbmcgZm9yIHJlc3RhdXJhbnQgaW4geW91ciBhcmVhXCJcbiAgICAgICAgICApXG4gICAgICAgIH19XG4gICAgICA8L3A+XG4gICAgICA8cS1zcGFjZSBjbGFzcz1cInEtcGEtc21cIj48L3Etc3BhY2U+XG4gICAgICA8cS1idG5cbiAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICBuby1jYXBzXG4gICAgICAgIGNvbG9yPVwicHJpbWFyeSB0ZXh0LXdoaXRlXCJcbiAgICAgICAgY2xhc3M9XCJmdWxsLXdpZHRoIHRleHQtd2VpZ2h0LWJvbGQgcmFkaXVzMjggcS1tYi1tZFwiXG4gICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgIEBjbGljaz1cImxvY2F0aW9uUGVybWlzc2lvblwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnQgZml0IHEtcGwtbWRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicS1tci1tZFwiPlxuICAgICAgICAgICAgPHEtaWNvbiBuYW1lPVwibGFzIGxhLXNlYXJjaC1sb2NhdGlvblwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj57eyAkdChcIlNoYXJlIGxvY2F0aW9uXCIpIH19PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9xLWJ0bj5cbiAgICAgIDxxLWJ0blxuICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgIG5vLWNhcHNcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5IHRleHQtd2hpdGVcIlxuICAgICAgICBjbGFzcz1cImZ1bGwtd2lkdGggdGV4dC13ZWlnaHQtYm9sZCByYWRpdXMyOFwiXG4gICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgIHRvPVwiL2xvY2F0aW9uL21hcFwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnQgZml0IHEtcGwtbWRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicS1tci1tZFwiPlxuICAgICAgICAgICAgPHEtaWNvbiBuYW1lPVwibGFzIGxhLW1hcC1tYXJrZXJcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+e3sgJHQoXCJDaG9vc2UgZnJvbSBtYXBcIikgfX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3EtYnRuPlxuICAgIDwvZGl2PlxuXG4gICAgPHEtaW5uZXItbG9hZGluZ1xuICAgICAgOnNob3dpbmc9XCJsb2FkaW5nXCJcbiAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICBzaXplPVwibWRcIlxuICAgICAgOmxhYmVsPVwibG9hZGluZ19sYWJlbFwiXG4gICAgLz5cbiAgPC9xLXBhZ2U+XG4gIDxEZWxpdmVyeVNjaGVkIHJlZj1cImRlbGl2ZXJ5X3NjaGVkXCIgQGFmdGVyLXNhdmV0cmFucz1cImFmdGVyU2F2ZXRyYW5zXCIgLz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBkZWZpbmVBc3luY0NvbXBvbmVudCB9IGZyb20gXCJ2dWVcIjtcbmltcG9ydCBBcHBMb2NhdGlvbiBmcm9tIFwic3JjL2FwaS9BcHBMb2NhdGlvblwiO1xuaW1wb3J0IEFQSWludGVyZmFjZSBmcm9tIFwic3JjL2FwaS9BUElpbnRlcmZhY2VcIjtcbmltcG9ydCB7IHVzZURhdGFTdG9yZSB9IGZyb20gXCJzdG9yZXMvRGF0YVN0b3JlXCI7XG5pbXBvcnQgYXV0aCBmcm9tIFwic3JjL2FwaS9hdXRoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJMb2NhdGlvblBhZ2VcIixcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcG9zaXRpb246IFtdLFxuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICBsb2FkaW5nX2xhYmVsOiBcIlwiLFxuICAgICAgZGF0YTogW10sXG4gICAgICBhZGRyZXNzOiBcIlwiLFxuICAgIH07XG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBEZWxpdmVyeVNjaGVkOiBkZWZpbmVBc3luY0NvbXBvbmVudCgoKSA9PlxuICAgICAgaW1wb3J0KFwiY29tcG9uZW50cy9EZWxpdmVyeVNjaGVkLnZ1ZVwiKVxuICAgICksXG4gIH0sXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IERhdGFTdG9yZSA9IHVzZURhdGFTdG9yZSgpO1xuICAgIHJldHVybiB7IERhdGFTdG9yZSB9O1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgbG9jYXRpb25QZXJtaXNzaW9uKCkge1xuICAgICAgaWYgKHRoaXMuJHEuY2FwYWNpdG9yKSB7XG4gICAgICAgIC8vYW5kcm9pZFxuICAgICAgICBBUElpbnRlcmZhY2Uuc2hvd0xvYWRpbmdCb3goXCJcIiwgdGhpcy4kcSk7XG4gICAgICAgIEFwcExvY2F0aW9uLmNoZWNrQWNjdXJhY3koKVxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvY2F0ZUxvY2F0aW9uKCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IuY29kZSA9PT0gNCkge1xuICAgICAgICAgICAgICB0aGlzLnJldmVyc2VHZW9jb2RpbmcoXG4gICAgICAgICAgICAgICAgdGhpcy5EYXRhU3RvcmUubWFwc19jb25maWcuZGVmYXVsdF9sYXQsXG4gICAgICAgICAgICAgICAgdGhpcy5EYXRhU3RvcmUubWFwc19jb25maWcuZGVmYXVsdF9sbmdcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIEFQSWludGVyZmFjZS5oaWRlTG9hZGluZ0JveCh0aGlzLiRxKTtcbiAgICAgICAgICAgICAgQVBJaW50ZXJmYWNlLm5vdGlmeShcImRhcmtcIiwgZXJyb3IubWVzc2FnZSwgXCJlcnJvclwiLCB0aGlzLiRxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy93ZWJcbiAgICAgICAgaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5zaG93TG9hZGluZ0JveChcIlwiLCB0aGlzLiRxKTtcbiAgICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKFxuICAgICAgICAgICAgKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5yZXZlcnNlR2VvY29kaW5nKFxuICAgICAgICAgICAgICAgIGRhdGEuY29vcmRzLmxhdGl0dWRlLFxuICAgICAgICAgICAgICAgIGRhdGEuY29vcmRzLmxvbmdpdHVkZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnJldmVyc2VHZW9jb2RpbmcoXG4gICAgICAgICAgICAgICAgdGhpcy5EYXRhU3RvcmUubWFwc19jb25maWcuZGVmYXVsdF9sYXQsXG4gICAgICAgICAgICAgICAgdGhpcy5EYXRhU3RvcmUubWFwc19jb25maWcuZGVmYXVsdF9sbmdcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBsb2NhdGVMb2NhdGlvbigpIHtcbiAgICAgIEFwcExvY2F0aW9uLmdldFBvc2l0aW9uKClcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLnJldmVyc2VHZW9jb2RpbmcoZGF0YS5sYXQsIGRhdGEubG5nKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMucmV2ZXJzZUdlb2NvZGluZyhcbiAgICAgICAgICAgIHRoaXMuRGF0YVN0b3JlLm1hcHNfY29uZmlnLmRlZmF1bHRfbGF0LFxuICAgICAgICAgICAgdGhpcy5EYXRhU3RvcmUubWFwc19jb25maWcuZGVmYXVsdF9sbmdcbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge30pO1xuICAgIH0sXG4gICAgcmV2ZXJzZUdlb2NvZGluZyhsYXQsIGxuZykge1xuICAgICAgdGhpcy5nZW9jb2Rlcl9sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIEFQSWludGVyZmFjZS5yZXZlcnNlR2VvY29kaW5nKGxhdCwgbG5nKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuZGF0YSA9IGRhdGEuZGV0YWlscy5kYXRhO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHR5cGVvZiBkYXRhLmRldGFpbHMuZGF0YS5hZGRyZXNzICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgICAgICBkYXRhLmRldGFpbHMuZGF0YS5hZGRyZXNzICE9PSBudWxsXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLmFkZHJlc3MgPSBkYXRhLmRldGFpbHMuZGF0YS5hZGRyZXNzLmZvcm1hdHRlZF9hZGRyZXNzO1xuICAgICAgICAgICAgdGhpcy5zZXRMb2NhdGlvbigpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBBUElpbnRlcmZhY2Uubm90aWZ5KFxuICAgICAgICAgICAgICBcImRhcmtcIixcbiAgICAgICAgICAgICAgXCJUaGlzIGxvY2F0aW9uIGlzIG5vdCBhdmFpbGFibGVcIixcbiAgICAgICAgICAgICAgXCJlcnJvclwiLFxuICAgICAgICAgICAgICB0aGlzLiRxXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5hZGRyZXNzID0gXCJcIjtcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJkYXJrXCIsIGVycm9yLCBcImVycm9yXCIsIHRoaXMuJHEpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIEFQSWludGVyZmFjZS5oaWRlTG9hZGluZ0JveCh0aGlzLiRxKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBzZXRMb2NhdGlvbigpIHtcbiAgICAgIGlmIChBUElpbnRlcmZhY2UuZW1wdHkodGhpcy5kYXRhLnBsYWNlX2lkKSkge1xuICAgICAgICBBUElpbnRlcmZhY2Uubm90aWZ5KFxuICAgICAgICAgIFwiZGFya1wiLFxuICAgICAgICAgIFwiRW50ZXIgeW91ciBsb2NhdGlvbiBvciBzZWxlY3Qgb24gdGhlIG1hcFwiLFxuICAgICAgICAgIFwiZXJyb3JcIixcbiAgICAgICAgICB0aGlzLiRxXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIEFQSWludGVyZmFjZS5zZXRTdG9yYWdlKFwicGxhY2VfZGF0YVwiLCB0aGlzLmRhdGEpO1xuICAgICAgQVBJaW50ZXJmYWNlLnNldFN0b3JhZ2UoXCJwbGFjZV9pZFwiLCB0aGlzLmRhdGEucGxhY2VfaWQpO1xuICAgICAgY29uc3QgZGVsaXZlcnlTY2hlZCA9IEFQSWludGVyZmFjZS5nZXRTdG9yYWdlKFwiZGVsaXZlcnlfc2NoZWRcIik7XG4gICAgICBjb25zb2xlLmRlYnVnKFwiZGVsaXZlcnlTY2hlZD0+XCIgKyBkZWxpdmVyeVNjaGVkKTtcblxuICAgICAgaWYgKGF1dGguYXV0aGVudGljYXRlZCgpKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIEFQSWludGVyZmFjZS5TYXZlUGxhY2VCeUlEKHRoaXMuZGF0YS5wbGFjZV9pZClcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKEFQSWludGVyZmFjZS5lbXB0eShkZWxpdmVyeVNjaGVkKSkge1xuICAgICAgICAgICAgICB0aGlzLiRyZWZzLmRlbGl2ZXJ5X3NjaGVkLnNob3dTY2hlZCh0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuYmFja1BhZ2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJkYXJrXCIsIGVycm9yLCBcImVycm9yXCIsIHRoaXMuJHEpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKEFQSWludGVyZmFjZS5lbXB0eShkZWxpdmVyeVNjaGVkKSkge1xuICAgICAgICAgIHRoaXMuJHJlZnMuZGVsaXZlcnlfc2NoZWQuc2hvd1NjaGVkKHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYmFja1BhZ2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgYWZ0ZXJTYXZldHJhbnMoZGF0YSkge1xuICAgICAgdGhpcy5iYWNrUGFnZSgpO1xuICAgIH0sXG4gICAgYmFja1BhZ2UoKSB7XG4gICAgICBpZiAoIUFQSWludGVyZmFjZS5lbXB0eSh0aGlzLmJhY2tfdXJsKSkge1xuICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh0aGlzLmJhY2tfdXJsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuJHJvdXRlci5yZXBsYWNlKFwiL2hvbWVcIik7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiJdLCJmaWxlIjoiYXNzZXRzL0xvY2F0aW9uUGFnZS43MDRjZGUzNy5qcyJ9
