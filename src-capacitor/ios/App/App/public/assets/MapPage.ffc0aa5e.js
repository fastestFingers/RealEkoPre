import { v as createComponent, ah as useDarkProps, ai as useDark, c as computed, h, z as hSlot, g as getCurrentInstance, _ as _export_sfc, l as defineAsyncComponent, R as useDataStore, m as APIinterface, aw as auth, n as resolveComponent, p as openBlock, V as createElementBlock, q as createBlock, t as withCtx, a7 as normalizeClass, aA as createCommentVNode, f as createVNode, aB as QDialog, F as Fragment, Y as QBtn, a6 as createTextVNode, Z as toDisplayString, U as createBaseVNode, at as QIcon, a8 as QCard, aa as withDirectives, a9 as QCardSection, u as __vitePreload } from "./index.61ed5618.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QInnerLoading } from "./QInnerLoading.abe2afe6.js";
import { Q as QFooter } from "./QFooter.571ac042.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import { Q as QSpace } from "./QSpace.f164c087.js";
import { C as ClosePopup } from "./ClosePopup.9d17b53c.js";
import { u as useClientStore } from "./ClientStore.327b1c8d.js";
import { u as useMapStore } from "./MapStore.fcd8f5ff.js";
import { A as AppLocation } from "./AppLocation.af3422a5.js";
import "./QResizeObserver.d08dce3c.js";
var QBar = createComponent({
  name: "QBar",
  props: {
    ...useDarkProps,
    dense: Boolean
  },
  setup(props, { slots }) {
    const { proxy: { $q } } = getCurrentInstance();
    const isDark = useDark(props, $q);
    const classes = computed(
      () => `q-bar row no-wrap items-center q-bar--${props.dense === true ? "dense" : "standard"}  q-bar--${isDark.value === true ? "dark" : "light"}`
    );
    return () => h("div", {
      class: classes.value,
      role: "toolbar"
    }, hSlot(slots.default));
  }
});
const _sfc_main = {
  name: "MapPage",
  components: {
    SearchAddress: defineAsyncComponent(
      () => __vitePreload(() => import("./SearchAddress.38bb13ad.js"), true ? ["assets/SearchAddress.38bb13ad.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QItemLabel.a9365c5b.js","assets/QSelect.311187d6.js","assets/QChip.f183a4f1.js","assets/QMenu.8e482cd8.js","assets/selection.50b4cb0c.js","assets/rtl.f3ed811c.js","assets/format.7f7370d3.js"] : void 0)
    ),
    DeliverySched: defineAsyncComponent(
      () => __vitePreload(() => import("./DeliverySched.9dd37b6e.js"), true ? ["assets/DeliverySched.9dd37b6e.js","assets/QBtnToggle.6ffa195b.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QBtnGroup.abc2d1c7.js","assets/QSelect.311187d6.js","assets/QChip.f183a4f1.js","assets/QItemLabel.a9365c5b.js","assets/QMenu.8e482cd8.js","assets/selection.50b4cb0c.js","assets/rtl.f3ed811c.js","assets/format.7f7370d3.js","assets/DeliverySched.4e9605bf.js"] : void 0)
    ),
    MapsComponents: defineAsyncComponent(
      () => __vitePreload(() => import("./MapsComponents.da461108.js"), true ? ["assets/MapsComponents.da461108.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/index.d0b40bd3.js"] : void 0)
    ),
    AddressInformation: defineAsyncComponent(
      () => __vitePreload(() => import("./AddressInformation.2bab2918.js"), true ? ["assets/AddressInformation.2bab2918.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QToolbarTitle.03eaf2d6.js","assets/QToolbar.c8fc6962.js","assets/QSpace.f164c087.js","assets/QSelect.311187d6.js","assets/QChip.f183a4f1.js","assets/QItemLabel.a9365c5b.js","assets/QMenu.8e482cd8.js","assets/selection.50b4cb0c.js","assets/rtl.f3ed811c.js","assets/format.7f7370d3.js","assets/QBtnToggle.6ffa195b.js","assets/QBtnGroup.abc2d1c7.js","assets/QFooter.571ac042.js","assets/QResizeObserver.d08dce3c.js","assets/QForm.7ded9d38.js","assets/ClosePopup.9d17b53c.js"] : void 0)
    )
  },
  setup() {
    const DataStore = useDataStore();
    const ClientStore = useClientStore();
    const MapStore = useMapStore();
    return { DataStore, ClientStore, MapStore };
  },
  data() {
    return {
      address: "",
      address_search: "",
      modal: false,
      geocoder_loading: true,
      center: { lat: 34.04703, lng: -118.24686 },
      data: [],
      marker_position: {},
      default_icon: {
        text: "\uEA44",
        fontFamily: "Material Icons",
        color: "#ffffff",
        fontSize: "18px"
      },
      icon: {},
      back_url: "",
      loading: true,
      maps_config: []
    };
  },
  created() {
    this.back_url = this.$route.query.url;
    this.icon = this.default_icon;
  },
  computed: {
    hasAddress() {
      if (APIinterface.empty(this.address)) {
        return true;
      }
      return false;
    }
  },
  watch: {
    DataStore: {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        console.log(newValue.loading);
        if (Object.keys(newValue.maps_config).length > 0) {
          this.maps_config = newValue.maps_config;
          this.setMarkerPosition(
            this.maps_config.default_lat,
            this.maps_config.default_lng
          );
          this.checkSavedLocation();
        } else if (newValue.loading == false) {
          this.geocoder_loading = false;
        }
      }
    }
  },
  methods: {
    setMarkerPosition(lat, lng) {
      this.marker_position = [
        {
          id: 0,
          lat: parseFloat(lat),
          lng: parseFloat(lng),
          label: APIinterface.getIcon("customer"),
          icon: null,
          draggable: true
        }
      ];
    },
    locateCurrentLocation() {
      this.geocoder_loading = true;
      this.locationPermission();
    },
    checkSavedLocation() {
      let $data = APIinterface.getStorage("place_data");
      if (!APIinterface.empty($data)) {
        this.geocoder_loading = false;
        this.loading = false;
        this.data = $data;
        this.address_search = $data.address.formatted_address;
        this.address = $data.address.formatted_address;
        this.center = {
          lat: parseFloat(this.data.latitude),
          lng: parseFloat(this.data.longitude)
        };
        this.setMarkerPosition(this.data.latitude, this.data.longitude);
      } else {
        this.geocoder_loading = false;
        this.locationPermission();
      }
    },
    addressFocus() {
      this.$refs.search_address.Focus();
    },
    afterSelectaddress(data) {
      this.data = data;
      this.address = data.address.formatted_address;
      this.address_search = data.address.formatted_address;
      this.modal = false;
      this.setMarkerPosition(data.latitude, data.longitude);
      this.center = {
        lat: parseFloat(data.latitude),
        lng: parseFloat(data.longitude)
      };
    },
    reverseGeocoding(lat, lng) {
      this.geocoder_loading = true;
      APIinterface.reverseGeocoding(lat, lng).then((data) => {
        this.data = data.details.data;
        if (typeof data.details.data.address !== "undefined" && data.details.data.address !== null) {
          this.address = data.details.data.address.formatted_address;
        } else {
          this.address = "";
          this.data = [];
        }
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data) => {
        this.geocoder_loading = false;
        this.loading = false;
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
        this.$refs.address_information.show(this.data);
      } else {
        this.geocoder_loading = true;
        if (APIinterface.empty(deliverySched)) {
          this.geocoder_loading = false;
          this.$refs.delivery_sched.showSched(true);
        } else {
          this.DataStore.list_data = [];
          this.backPage();
        }
      }
    },
    backPage() {
      if (!APIinterface.empty(this.back_url)) {
        this.$router.push(this.back_url);
      } else {
        this.$router.push("/home");
      }
    },
    afterSavetrans(data) {
      this.backPage();
    },
    locationPermission() {
      if (this.$q.capacitor) {
        AppLocation.checkAccuracy().then((data) => {
          this.locateLocation();
        }).catch((error) => {
          if (error.code === 4) {
            this.geocoder_loading = false;
            this.setMarkerPosition(
              this.maps_config.default_lat,
              this.maps_config.default_lng
            );
            this.reverseGeocoding(
              parseFloat(this.maps_config.default_lat),
              parseFloat(this.maps_config.default_lng)
            );
          } else {
            APIinterface.notify("dark", error.message, "error", this.$q);
          }
        }).then((data) => {
        });
      } else {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (data) => {
              this.setMarkerPosition(
                data.coords.latitude,
                data.coords.longitude
              );
              this.reverseGeocoding(
                data.coords.latitude,
                data.coords.longitude
              );
            },
            (error) => {
              this.setMarkerPosition(
                this.maps_config.default_lat,
                this.maps_config.default_lng
              );
              this.reverseGeocoding(
                parseFloat(this.maps_config.default_lat),
                parseFloat(this.maps_config.default_lng)
              );
            }
          );
        }
      }
    },
    locateLocation() {
      AppLocation.getPosition().then((data) => {
        this.setMarkerPosition(data.lat, data.lng);
        this.reverseGeocoding(data.lat, data.lng);
      }).catch((error) => {
        this.setMarkerPosition(
          this.maps_config.default_lat,
          this.maps_config.default_lng
        );
        this.reverseGeocoding(
          parseFloat(this.maps_config.default_lat),
          parseFloat(this.maps_config.default_lng)
        );
      }).then((data) => {
      });
    },
    afterSelectmap(lat, lng) {
      console.log("afterSelectmap =>" + lat + lng);
      this.reverseGeocoding(lat, lng);
    }
  }
};
const _hoisted_1 = { class: "col-12 relative-position" };
const _hoisted_2 = {
  key: 0,
  class: "absolute-top-left full-width text-rightx q-pa-sm",
  style: { "z-index": "999" }
};
const _hoisted_3 = {
  class: "absolute-bottom-left full-width text-right q-pa-sm",
  style: { "z-index": "99" }
};
const _hoisted_4 = { class: "q-pr-sm" };
const _hoisted_5 = { class: "font13 col-9" };
const _hoisted_6 = {
  key: 1,
  class: "q-pa-lg"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MapsComponents = resolveComponent("MapsComponents");
  const _component_SearchAddress = resolveComponent("SearchAddress");
  const _component_DeliverySched = resolveComponent("DeliverySched");
  const _component_AddressInformation = resolveComponent("AddressInformation");
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
              icon: "las la-angle-left",
              class: "q-mr-sm",
              color: _ctx.$q.dark.mode ? "white" : "dark"
            }, null, 8, ["color"]),
            createVNode(QToolbarTitle, { class: "text-weight-bold" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("Select location")), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["class"])) : createCommentVNode("", true),
    createVNode(QPage, { class: "bg-grey-1 row items-stretch" }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_1, [
          !_ctx.$q.platform.is.ios ? (openBlock(), createElementBlock("div", _hoisted_2, [
            createVNode(QBtn, {
              onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$router.back()),
              round: "",
              dense: "",
              icon: "close",
              class: "q-mr-sm",
              color: _ctx.$q.dark.mode ? "grey600" : "dark",
              unelevated: "",
              size: "sm"
            }, null, 8, ["color"])
          ])) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_3, [
            createVNode(QBtn, {
              onClick: $options.locateCurrentLocation,
              round: "",
              color: "secondary",
              icon: "o_near_me",
              unelevated: "",
              loading: _ctx.loading2,
              class: "rotate-270"
            }, null, 8, ["onClick", "loading"])
          ]),
          $setup.DataStore.hasMapConfig ? (openBlock(), createBlock(_component_MapsComponents, {
            key: 1,
            ref: "mapRef",
            class: "maps",
            size: "fit",
            keys: $data.maps_config.key,
            provider: $data.maps_config.provider,
            zoom: $data.maps_config.zoom,
            center: $data.center,
            markers: $data.marker_position,
            onAfterSelectmap: $options.afterSelectmap
          }, null, 8, ["keys", "provider", "zoom", "center", "markers", "onAfterSelectmap"])) : createCommentVNode("", true)
        ]),
        createVNode(QInnerLoading, {
          showing: $data.geocoder_loading,
          size: "md",
          color: "primary"
        }, null, 8, ["showing"]),
        createVNode(QFooter, {
          reveal: "",
          class: normalizeClass(["bg-whitex q-pl-md q-pr-md q-pb-lg q-pt-md text-dark", {
            "bg-white": !$data.loading,
            "bg-grey-1": $data.loading
          }]),
          style: { "border-top-right-radius": "15px", "border-top-left-radius": "15px" }
        }, {
          default: withCtx(() => [
            createVNode(QInnerLoading, {
              showing: $data.loading,
              color: "primary",
              size: "md"
            }, null, 8, ["showing"]),
            !$data.loading ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createBaseVNode("div", {
                class: normalizeClass(["row items-center q-mb-md no-wrap", {
                  "text-white": _ctx.$q.dark.mode,
                  "text-dark": !_ctx.$q.dark.mode
                }])
              }, [
                createBaseVNode("div", _hoisted_4, [
                  createVNode(QIcon, {
                    name: "las la-map-marker",
                    size: "md"
                  })
                ]),
                createBaseVNode("div", _hoisted_5, [
                  !$options.hasAddress ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    createTextVNode(toDisplayString($data.address), 1)
                  ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    createTextVNode(toDisplayString(_ctx.$t("Location is not available")), 1)
                  ], 64))
                ]),
                createBaseVNode("div", null, [
                  createVNode(QBtn, {
                    round: "",
                    color: "primary",
                    icon: "edit",
                    unelevated: "",
                    size: "md",
                    flat: "",
                    onClick: _cache[2] || (_cache[2] = ($event) => $data.modal = !$data.modal)
                  })
                ])
              ], 2),
              createVNode(QBtn, {
                label: _ctx.$t("Confirm Location"),
                onClick: $options.setLocation,
                disable: $options.hasAddress || $data.geocoder_loading,
                loading: $data.loading,
                unelevated: "",
                "no-caps": "",
                color: $data.geocoder_loading == true ? "grey" : "primary",
                "text-color": "white",
                class: "full-width text-weight-medium radius28",
                size: "lg"
              }, null, 8, ["label", "onClick", "disable", "loading", "color"])
            ], 64)) : (openBlock(), createElementBlock("div", _hoisted_6, "\xA0"))
          ]),
          _: 1
        }, 8, ["class"])
      ]),
      _: 1
    }),
    createVNode(QDialog, {
      modelValue: $data.modal,
      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.modal = $event),
      "transition-show": "fade",
      "transition-hide": "fade",
      onShow: _cache[4] || (_cache[4] = ($event) => $options.addressFocus()),
      maximized: true
    }, {
      default: withCtx(() => [
        createVNode(QCard, {
          class: normalizeClass(["no-shadow q-pt-sm q-pb-sm", { "bg-mydark": _ctx.$q.dark.mode, "bg-white": !_ctx.$q.dark.mode }])
        }, {
          default: withCtx(() => [
            createVNode(QBar, {
              class: normalizeClass(["bg-whitex", {
                "bg-mydark text-white": _ctx.$q.dark.mode,
                "bg-white text-black": !_ctx.$q.dark.mode
              }])
            }, {
              default: withCtx(() => [
                createVNode(QSpace),
                withDirectives(createVNode(QBtn, {
                  dense: "",
                  flat: "",
                  icon: "close"
                }, null, 512), [
                  [ClosePopup]
                ])
              ]),
              _: 1
            }, 8, ["class"]),
            createVNode(QCardSection, null, {
              default: withCtx(() => [
                createVNode(_component_SearchAddress, {
                  ref: "search_address",
                  onAfterSelectaddress: $options.afterSelectaddress,
                  placeholder: _ctx.$t("Enter your location")
                }, null, 8, ["onAfterSelectaddress", "placeholder"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["class"])
      ]),
      _: 1
    }, 8, ["modelValue"]),
    createVNode(_component_DeliverySched, {
      ref: "delivery_sched",
      onAfterSavetrans: $options.afterSavetrans
    }, null, 8, ["onAfterSavetrans"]),
    createVNode(_component_AddressInformation, {
      ref: "address_information",
      back_url: $data.back_url
    }, null, 8, ["back_url"])
  ], 64);
}
var MapPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "MapPage.vue"]]);
export { MapPage as default };
//# sourceMappingURL=data:application/json;base64,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QUFBLG1FQUFMLE1BQUs7QUFBQSxNQUNkLG1CQUFnQjtBQUFBLE1BQ2hCLG1CQUFnQjtBQUFBLE1BQ2YsOENBQU0sU0FBWTtBQUFBLE1BQ2xCLFdBQVc7QUFBQTt1QkFFWixNQXFCUztBQUFBLFFBckJUQSxZQXFCUztBQUFBLFVBcEJQLE9BQU1ELDZDQUNpQix1QkFBRyxLQUFLLE1BQW1CLHFCQUFHLEtBQUssS0FBSTtBQUFBOzJCQUU5RCxNQVNRO0FBQUEsWUFUUkMsWUFTUTtBQUFBLGNBUk4sdUJBQU0sYUFBVztBQUFBLHdDQUMyQixLQUFFLEdBQUMsS0FBSztBQUFBLHdDQUF3QyxLQUFFLEdBQUMsS0FBSztBQUFBOzsrQkFLcEcsTUFBVztBQUFBLGdCQUFYQSxZQUFXO0FBQUEsK0JBQ1hBLFlBQXNEO0FBQUEsa0JBQS9DO0FBQUEsa0JBQU07QUFBQSxrQkFBSyxNQUFLO0FBQUE7Ozs7OztZQUV6QkEsWUFNaUI7QUFBQSwrQkFMZixNQUlFO0FBQUEsZ0JBSkZBLFlBSUU7QUFBQSxrQkFIQSxLQUFJO0FBQUEsa0JBQ0gsc0JBQXFCLFNBQWtCO0FBQUEsa0JBQ3ZDLGFBQWEsS0FBRTtBQUFBOzs7Ozs7Ozs7O0lBTXhCQSxZQUF3RTtBQUFBLE1BQXpELEtBQUk7QUFBQSxNQUFrQixrQkFBaUIsU0FBYztBQUFBO0lBRXBFQSxZQUdzQjtBQUFBLE1BRnBCLEtBQUk7QUFBQSxNQUNILFVBQVUsTUFBUTtBQUFBIiwibmFtZXMiOlsiX2NyZWF0ZUJsb2NrIiwiX25vcm1hbGl6ZUNsYXNzIiwiX2NyZWF0ZVZOb2RlIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9vcGVuQmxvY2siLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX0ZyYWdtZW50Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9iYXIvUUJhci5qcyIsIi4uLy4uLy4uL3NyYy9wYWdlcy9Mb2NhdGlvbi9NYXBQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCBjb21wdXRlZCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlLnVzZS1kYXJrL3VzZS1kYXJrLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmNyZWF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUucmVuZGVyL3JlbmRlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FCYXInLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlRGFya1Byb3BzLFxuICAgIGRlbnNlOiBCb29sZWFuXG4gIH0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzIH0pIHtcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gICAgY29uc3QgaXNEYXJrID0gdXNlRGFyayhwcm9wcywgJHEpXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLWJhciByb3cgbm8td3JhcCBpdGVtcy1jZW50ZXInXG4gICAgICArIGAgcS1iYXItLSR7IHByb3BzLmRlbnNlID09PSB0cnVlID8gJ2RlbnNlJyA6ICdzdGFuZGFyZCcgfSBgXG4gICAgICArIGAgcS1iYXItLSR7IGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICdkYXJrJyA6ICdsaWdodCcgfWBcbiAgICApXG5cbiAgICByZXR1cm4gKCkgPT4gaCgnZGl2Jywge1xuICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICByb2xlOiAndG9vbGJhcidcbiAgICB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgfVxufSlcbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtaGVhZGVyXG4gICAgdi1pZj1cIiRxLnBsYXRmb3JtLmlzLmlvc1wiXG4gICAgOmNsYXNzPVwie1xuICAgICAgJ2JnLW15ZGFyayB0ZXh0LXdoaXRlJzogJHEuZGFyay5tb2RlLFxuICAgICAgJ2JnLXdoaXRlIHRleHQtYmxhY2snOiAhJHEuZGFyay5tb2RlLFxuICAgIH1cIlxuICA+XG4gICAgPHEtdG9vbGJhcj5cbiAgICAgIDxxLWJ0blxuICAgICAgICBAY2xpY2s9XCIkcm91dGVyLmJhY2soKVwiXG4gICAgICAgIGZsYXRcbiAgICAgICAgcm91bmRcbiAgICAgICAgZGVuc2VcbiAgICAgICAgaWNvbj1cImxhcyBsYS1hbmdsZS1sZWZ0XCJcbiAgICAgICAgY2xhc3M9XCJxLW1yLXNtXCJcbiAgICAgICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ3doaXRlJyA6ICdkYXJrJ1wiXG4gICAgICAvPlxuICAgICAgPHEtdG9vbGJhci10aXRsZSBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGRcIj5cbiAgICAgICAge3sgJHQoXCJTZWxlY3QgbG9jYXRpb25cIikgfX1cbiAgICAgIDwvcS10b29sYmFyLXRpdGxlPlxuICAgIDwvcS10b29sYmFyPlxuICA8L3EtaGVhZGVyPlxuICA8cS1wYWdlIGNsYXNzPVwiYmctZ3JleS0xIHJvdyBpdGVtcy1zdHJldGNoXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC0xMiByZWxhdGl2ZS1wb3NpdGlvblwiPlxuICAgICAgPGRpdlxuICAgICAgICB2LWlmPVwiISRxLnBsYXRmb3JtLmlzLmlvc1wiXG4gICAgICAgIGNsYXNzPVwiYWJzb2x1dGUtdG9wLWxlZnQgZnVsbC13aWR0aCB0ZXh0LXJpZ2h0eCBxLXBhLXNtXCJcbiAgICAgICAgc3R5bGU9XCJ6LWluZGV4OiA5OTlcIlxuICAgICAgPlxuICAgICAgICA8cS1idG5cbiAgICAgICAgICBAY2xpY2s9XCIkcm91dGVyLmJhY2soKVwiXG4gICAgICAgICAgcm91bmRcbiAgICAgICAgICBkZW5zZVxuICAgICAgICAgIGljb249XCJjbG9zZVwiXG4gICAgICAgICAgY2xhc3M9XCJxLW1yLXNtXCJcbiAgICAgICAgICA6Y29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTYwMCcgOiAnZGFyaydcIlxuICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiYWJzb2x1dGUtYm90dG9tLWxlZnQgZnVsbC13aWR0aCB0ZXh0LXJpZ2h0IHEtcGEtc21cIlxuICAgICAgICBzdHlsZT1cInotaW5kZXg6IDk5XCJcbiAgICAgID5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgQGNsaWNrPVwibG9jYXRlQ3VycmVudExvY2F0aW9uXCJcbiAgICAgICAgICByb3VuZFxuICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICBpY29uPVwib19uZWFyX21lXCJcbiAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgOmxvYWRpbmc9XCJsb2FkaW5nMlwiXG4gICAgICAgICAgY2xhc3M9XCJyb3RhdGUtMjcwXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8dGVtcGxhdGUgdi1pZj1cIkRhdGFTdG9yZS5oYXNNYXBDb25maWdcIj5cbiAgICAgICAgPE1hcHNDb21wb25lbnRzXG4gICAgICAgICAgcmVmPVwibWFwUmVmXCJcbiAgICAgICAgICBjbGFzcz1cIm1hcHNcIlxuICAgICAgICAgIHNpemU9XCJmaXRcIlxuICAgICAgICAgIDprZXlzPVwibWFwc19jb25maWcua2V5XCJcbiAgICAgICAgICA6cHJvdmlkZXI9XCJtYXBzX2NvbmZpZy5wcm92aWRlclwiXG4gICAgICAgICAgOnpvb209XCJtYXBzX2NvbmZpZy56b29tXCJcbiAgICAgICAgICA6Y2VudGVyPVwiY2VudGVyXCJcbiAgICAgICAgICA6bWFya2Vycz1cIm1hcmtlcl9wb3NpdGlvblwiXG4gICAgICAgICAgQGFmdGVyLXNlbGVjdG1hcD1cImFmdGVyU2VsZWN0bWFwXCJcbiAgICAgICAgPlxuICAgICAgICA8L01hcHNDb21wb25lbnRzPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L2Rpdj5cblxuICAgIDxxLWlubmVyLWxvYWRpbmcgOnNob3dpbmc9XCJnZW9jb2Rlcl9sb2FkaW5nXCIgc2l6ZT1cIm1kXCIgY29sb3I9XCJwcmltYXJ5XCIgLz5cblxuICAgIDxxLWZvb3RlclxuICAgICAgcmV2ZWFsXG4gICAgICBjbGFzcz1cImJnLXdoaXRleCBxLXBsLW1kIHEtcHItbWQgcS1wYi1sZyBxLXB0LW1kIHRleHQtZGFya1wiXG4gICAgICBzdHlsZT1cImJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4OyBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4XCJcbiAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgJ2JnLXdoaXRlJzogIWxvYWRpbmcsXG4gICAgICAgICdiZy1ncmV5LTEnOiBsb2FkaW5nLFxuICAgICAgfVwiXG4gICAgPlxuICAgICAgPHEtaW5uZXItbG9hZGluZyA6c2hvd2luZz1cImxvYWRpbmdcIiBjb2xvcj1cInByaW1hcnlcIiBzaXplPVwibWRcIiAvPlxuXG4gICAgICA8dGVtcGxhdGUgdi1pZj1cIiFsb2FkaW5nXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cInJvdyBpdGVtcy1jZW50ZXIgcS1tYi1tZCBuby13cmFwXCJcbiAgICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAndGV4dC13aGl0ZSc6ICRxLmRhcmsubW9kZSxcbiAgICAgICAgICAgICd0ZXh0LWRhcmsnOiAhJHEuZGFyay5tb2RlLFxuICAgICAgICAgIH1cIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInEtcHItc21cIj5cbiAgICAgICAgICAgIDxxLWljb24gbmFtZT1cImxhcyBsYS1tYXAtbWFya2VyXCIgc2l6ZT1cIm1kXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udDEzIGNvbC05XCI+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIiFoYXNBZGRyZXNzXCI+XG4gICAgICAgICAgICAgIHt7IGFkZHJlc3MgfX1cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPiB7eyAkdChcIkxvY2F0aW9uIGlzIG5vdCBhdmFpbGFibGVcIikgfX0gPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgIGljb249XCJlZGl0XCJcbiAgICAgICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICAgIEBjbGljaz1cIm1vZGFsID0gIW1vZGFsXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIDpsYWJlbD1cIiR0KCdDb25maXJtIExvY2F0aW9uJylcIlxuICAgICAgICAgIEBjbGljaz1cInNldExvY2F0aW9uXCJcbiAgICAgICAgICA6ZGlzYWJsZT1cImhhc0FkZHJlc3MgfHwgZ2VvY29kZXJfbG9hZGluZ1wiXG4gICAgICAgICAgOmxvYWRpbmc9XCJsb2FkaW5nXCJcbiAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgIDpjb2xvcj1cImdlb2NvZGVyX2xvYWRpbmcgPT0gdHJ1ZSA/ICdncmV5JyA6ICdwcmltYXJ5J1wiXG4gICAgICAgICAgdGV4dC1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICBjbGFzcz1cImZ1bGwtd2lkdGggdGV4dC13ZWlnaHQtbWVkaXVtIHJhZGl1czI4XCJcbiAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAvPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJxLXBhLWxnXCI+Jm5ic3A7PC9kaXY+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvcS1mb290ZXI+XG4gIDwvcS1wYWdlPlxuXG4gIDxxLWRpYWxvZ1xuICAgIHYtbW9kZWw9XCJtb2RhbFwiXG4gICAgdHJhbnNpdGlvbi1zaG93PVwiZmFkZVwiXG4gICAgdHJhbnNpdGlvbi1oaWRlPVwiZmFkZVwiXG4gICAgQHNob3c9XCJhZGRyZXNzRm9jdXMoKVwiXG4gICAgOm1heGltaXplZD1cInRydWVcIlxuICA+XG4gICAgPHEtY2FyZFxuICAgICAgY2xhc3M9XCJuby1zaGFkb3cgcS1wdC1zbSBxLXBiLXNtXCJcbiAgICAgIDpjbGFzcz1cInsgJ2JnLW15ZGFyayc6ICRxLmRhcmsubW9kZSwgJ2JnLXdoaXRlJzogISRxLmRhcmsubW9kZSB9XCJcbiAgICA+XG4gICAgICA8cS1iYXJcbiAgICAgICAgY2xhc3M9XCJiZy13aGl0ZXhcIlxuICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgJ2JnLW15ZGFyayB0ZXh0LXdoaXRlJzogJHEuZGFyay5tb2RlLFxuICAgICAgICAgICdiZy13aGl0ZSB0ZXh0LWJsYWNrJzogISRxLmRhcmsubW9kZSxcbiAgICAgICAgfVwiXG4gICAgICA+XG4gICAgICAgIDxxLXNwYWNlIC8+XG4gICAgICAgIDxxLWJ0biBkZW5zZSBmbGF0IGljb249XCJjbG9zZVwiIHYtY2xvc2UtcG9wdXA+IDwvcS1idG4+XG4gICAgICA8L3EtYmFyPlxuICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICA8U2VhcmNoQWRkcmVzc1xuICAgICAgICAgIHJlZj1cInNlYXJjaF9hZGRyZXNzXCJcbiAgICAgICAgICBAYWZ0ZXItc2VsZWN0YWRkcmVzcz1cImFmdGVyU2VsZWN0YWRkcmVzc1wiXG4gICAgICAgICAgOnBsYWNlaG9sZGVyPVwiJHQoJ0VudGVyIHlvdXIgbG9jYXRpb24nKVwiXG4gICAgICAgIC8+XG4gICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgIDwvcS1jYXJkPlxuICA8L3EtZGlhbG9nPlxuXG4gIDxEZWxpdmVyeVNjaGVkIHJlZj1cImRlbGl2ZXJ5X3NjaGVkXCIgQGFmdGVyLXNhdmV0cmFucz1cImFmdGVyU2F2ZXRyYW5zXCIgLz5cblxuICA8QWRkcmVzc0luZm9ybWF0aW9uXG4gICAgcmVmPVwiYWRkcmVzc19pbmZvcm1hdGlvblwiXG4gICAgOmJhY2tfdXJsPVwiYmFja191cmxcIlxuICA+PC9BZGRyZXNzSW5mb3JtYXRpb24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgZGVmaW5lQXN5bmNDb21wb25lbnQgfSBmcm9tIFwidnVlXCI7XG5pbXBvcnQgQVBJaW50ZXJmYWNlIGZyb20gXCJzcmMvYXBpL0FQSWludGVyZmFjZVwiO1xuaW1wb3J0IGF1dGggZnJvbSBcInNyYy9hcGkvYXV0aFwiO1xuaW1wb3J0IHsgdXNlRGF0YVN0b3JlIH0gZnJvbSBcInN0b3Jlcy9EYXRhU3RvcmVcIjtcbmltcG9ydCB7IHVzZUNsaWVudFN0b3JlIH0gZnJvbSBcInN0b3Jlcy9DbGllbnRTdG9yZVwiO1xuaW1wb3J0IHsgdXNlTWFwU3RvcmUgfSBmcm9tIFwic3RvcmVzL01hcFN0b3JlXCI7XG5pbXBvcnQgQXBwTG9jYXRpb24gZnJvbSBcInNyYy9hcGkvQXBwTG9jYXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIk1hcFBhZ2VcIixcbiAgY29tcG9uZW50czoge1xuICAgIFNlYXJjaEFkZHJlc3M6IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+XG4gICAgICBpbXBvcnQoXCJjb21wb25lbnRzL1NlYXJjaEFkZHJlc3MudnVlXCIpXG4gICAgKSxcbiAgICBEZWxpdmVyeVNjaGVkOiBkZWZpbmVBc3luY0NvbXBvbmVudCgoKSA9PlxuICAgICAgaW1wb3J0KFwiY29tcG9uZW50cy9EZWxpdmVyeVNjaGVkLnZ1ZVwiKVxuICAgICksXG4gICAgTWFwc0NvbXBvbmVudHM6IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+XG4gICAgICBpbXBvcnQoXCJjb21wb25lbnRzL01hcHNDb21wb25lbnRzLnZ1ZVwiKVxuICAgICksXG4gICAgQWRkcmVzc0luZm9ybWF0aW9uOiBkZWZpbmVBc3luY0NvbXBvbmVudCgoKSA9PlxuICAgICAgaW1wb3J0KFwiY29tcG9uZW50cy9BZGRyZXNzSW5mb3JtYXRpb24udnVlXCIpXG4gICAgKSxcbiAgfSxcbiAgc2V0dXAoKSB7XG4gICAgY29uc3QgRGF0YVN0b3JlID0gdXNlRGF0YVN0b3JlKCk7XG4gICAgY29uc3QgQ2xpZW50U3RvcmUgPSB1c2VDbGllbnRTdG9yZSgpO1xuICAgIGNvbnN0IE1hcFN0b3JlID0gdXNlTWFwU3RvcmUoKTtcbiAgICByZXR1cm4geyBEYXRhU3RvcmUsIENsaWVudFN0b3JlLCBNYXBTdG9yZSB9O1xuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhZGRyZXNzOiBcIlwiLFxuICAgICAgYWRkcmVzc19zZWFyY2g6IFwiXCIsXG4gICAgICBtb2RhbDogZmFsc2UsXG4gICAgICBnZW9jb2Rlcl9sb2FkaW5nOiB0cnVlLFxuICAgICAgY2VudGVyOiB7IGxhdDogMzQuMDQ3MDMsIGxuZzogLTExOC4yNDY4NiB9LFxuICAgICAgZGF0YTogW10sXG4gICAgICBtYXJrZXJfcG9zaXRpb246IHt9LFxuICAgICAgZGVmYXVsdF9pY29uOiB7XG4gICAgICAgIHRleHQ6IFwiXFx1ZWE0NFwiLFxuICAgICAgICBmb250RmFtaWx5OiBcIk1hdGVyaWFsIEljb25zXCIsXG4gICAgICAgIGNvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAgICAgZm9udFNpemU6IFwiMThweFwiLFxuICAgICAgfSxcbiAgICAgIGljb246IHt9LFxuICAgICAgYmFja191cmw6IFwiXCIsXG4gICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgbWFwc19jb25maWc6IFtdLFxuICAgIH07XG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5iYWNrX3VybCA9IHRoaXMuJHJvdXRlLnF1ZXJ5LnVybDtcbiAgICB0aGlzLmljb24gPSB0aGlzLmRlZmF1bHRfaWNvbjtcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBoYXNBZGRyZXNzKCkge1xuICAgICAgaWYgKEFQSWludGVyZmFjZS5lbXB0eSh0aGlzLmFkZHJlc3MpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgRGF0YVN0b3JlOiB7XG4gICAgICBpbW1lZGlhdGU6IHRydWUsXG4gICAgICBkZWVwOiB0cnVlLFxuICAgICAgaGFuZGxlcihuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgY29uc29sZS5sb2cobmV3VmFsdWUubG9hZGluZyk7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhuZXdWYWx1ZS5tYXBzX2NvbmZpZykubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRoaXMubWFwc19jb25maWcgPSBuZXdWYWx1ZS5tYXBzX2NvbmZpZztcblxuICAgICAgICAgIHRoaXMuc2V0TWFya2VyUG9zaXRpb24oXG4gICAgICAgICAgICB0aGlzLm1hcHNfY29uZmlnLmRlZmF1bHRfbGF0LFxuICAgICAgICAgICAgdGhpcy5tYXBzX2NvbmZpZy5kZWZhdWx0X2xuZ1xuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5jaGVja1NhdmVkTG9jYXRpb24oKTtcbiAgICAgICAgfSBlbHNlIGlmIChuZXdWYWx1ZS5sb2FkaW5nID09IGZhbHNlKSB7XG4gICAgICAgICAgdGhpcy5nZW9jb2Rlcl9sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHNldE1hcmtlclBvc2l0aW9uKGxhdCwgbG5nKSB7XG4gICAgICB0aGlzLm1hcmtlcl9wb3NpdGlvbiA9IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAwLFxuICAgICAgICAgIGxhdDogcGFyc2VGbG9hdChsYXQpLFxuICAgICAgICAgIGxuZzogcGFyc2VGbG9hdChsbmcpLFxuICAgICAgICAgIGxhYmVsOiBBUElpbnRlcmZhY2UuZ2V0SWNvbihcImN1c3RvbWVyXCIpLFxuICAgICAgICAgIGljb246IG51bGwsXG4gICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgXTtcbiAgICB9LFxuICAgIGxvY2F0ZUN1cnJlbnRMb2NhdGlvbigpIHtcbiAgICAgIHRoaXMuZ2VvY29kZXJfbG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLmxvY2F0aW9uUGVybWlzc2lvbigpO1xuICAgIH0sXG4gICAgY2hlY2tTYXZlZExvY2F0aW9uKCkge1xuICAgICAgbGV0ICRkYXRhID0gQVBJaW50ZXJmYWNlLmdldFN0b3JhZ2UoXCJwbGFjZV9kYXRhXCIpO1xuICAgICAgaWYgKCFBUElpbnRlcmZhY2UuZW1wdHkoJGRhdGEpKSB7XG4gICAgICAgIHRoaXMuZ2VvY29kZXJfbG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kYXRhID0gJGRhdGE7XG4gICAgICAgIHRoaXMuYWRkcmVzc19zZWFyY2ggPSAkZGF0YS5hZGRyZXNzLmZvcm1hdHRlZF9hZGRyZXNzO1xuICAgICAgICB0aGlzLmFkZHJlc3MgPSAkZGF0YS5hZGRyZXNzLmZvcm1hdHRlZF9hZGRyZXNzO1xuXG4gICAgICAgIHRoaXMuY2VudGVyID0ge1xuICAgICAgICAgIGxhdDogcGFyc2VGbG9hdCh0aGlzLmRhdGEubGF0aXR1ZGUpLFxuICAgICAgICAgIGxuZzogcGFyc2VGbG9hdCh0aGlzLmRhdGEubG9uZ2l0dWRlKSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNldE1hcmtlclBvc2l0aW9uKHRoaXMuZGF0YS5sYXRpdHVkZSwgdGhpcy5kYXRhLmxvbmdpdHVkZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmdlb2NvZGVyX2xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sb2NhdGlvblBlcm1pc3Npb24oKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFkZHJlc3NGb2N1cygpIHtcbiAgICAgIHRoaXMuJHJlZnMuc2VhcmNoX2FkZHJlc3MuRm9jdXMoKTtcbiAgICB9LFxuICAgIGFmdGVyU2VsZWN0YWRkcmVzcyhkYXRhKSB7XG4gICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgdGhpcy5hZGRyZXNzID0gZGF0YS5hZGRyZXNzLmZvcm1hdHRlZF9hZGRyZXNzO1xuICAgICAgdGhpcy5hZGRyZXNzX3NlYXJjaCA9IGRhdGEuYWRkcmVzcy5mb3JtYXR0ZWRfYWRkcmVzcztcbiAgICAgIHRoaXMubW9kYWwgPSBmYWxzZTtcblxuICAgICAgdGhpcy5zZXRNYXJrZXJQb3NpdGlvbihkYXRhLmxhdGl0dWRlLCBkYXRhLmxvbmdpdHVkZSk7XG4gICAgICB0aGlzLmNlbnRlciA9IHtcbiAgICAgICAgbGF0OiBwYXJzZUZsb2F0KGRhdGEubGF0aXR1ZGUpLFxuICAgICAgICBsbmc6IHBhcnNlRmxvYXQoZGF0YS5sb25naXR1ZGUpLFxuICAgICAgfTtcbiAgICB9LFxuICAgIHJldmVyc2VHZW9jb2RpbmcobGF0LCBsbmcpIHtcbiAgICAgIHRoaXMuZ2VvY29kZXJfbG9hZGluZyA9IHRydWU7XG4gICAgICBBUElpbnRlcmZhY2UucmV2ZXJzZUdlb2NvZGluZyhsYXQsIGxuZylcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmRhdGEgPSBkYXRhLmRldGFpbHMuZGF0YTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0eXBlb2YgZGF0YS5kZXRhaWxzLmRhdGEuYWRkcmVzcyAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICAgICAgZGF0YS5kZXRhaWxzLmRhdGEuYWRkcmVzcyAhPT0gbnVsbFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5hZGRyZXNzID0gZGF0YS5kZXRhaWxzLmRhdGEuYWRkcmVzcy5mb3JtYXR0ZWRfYWRkcmVzcztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGRyZXNzID0gXCJcIjtcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJkYXJrXCIsIGVycm9yLCBcImVycm9yXCIsIHRoaXMuJHEpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuZ2VvY29kZXJfbG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHNldExvY2F0aW9uKCkge1xuICAgICAgaWYgKEFQSWludGVyZmFjZS5lbXB0eSh0aGlzLmRhdGEucGxhY2VfaWQpKSB7XG4gICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXG4gICAgICAgICAgXCJkYXJrXCIsXG4gICAgICAgICAgXCJFbnRlciB5b3VyIGxvY2F0aW9uIG9yIHNlbGVjdCBvbiB0aGUgbWFwXCIsXG4gICAgICAgICAgXCJlcnJvclwiLFxuICAgICAgICAgIHRoaXMuJHFcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgQVBJaW50ZXJmYWNlLnNldFN0b3JhZ2UoXCJwbGFjZV9kYXRhXCIsIHRoaXMuZGF0YSk7XG4gICAgICBBUElpbnRlcmZhY2Uuc2V0U3RvcmFnZShcInBsYWNlX2lkXCIsIHRoaXMuZGF0YS5wbGFjZV9pZCk7XG4gICAgICBjb25zdCBkZWxpdmVyeVNjaGVkID0gQVBJaW50ZXJmYWNlLmdldFN0b3JhZ2UoXCJkZWxpdmVyeV9zY2hlZFwiKTtcbiAgICAgIGNvbnNvbGUuZGVidWcoXCJkZWxpdmVyeVNjaGVkPT5cIiArIGRlbGl2ZXJ5U2NoZWQpO1xuXG4gICAgICBpZiAoYXV0aC5hdXRoZW50aWNhdGVkKCkpIHtcbiAgICAgICAgdGhpcy4kcmVmcy5hZGRyZXNzX2luZm9ybWF0aW9uLnNob3codGhpcy5kYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZ2VvY29kZXJfbG9hZGluZyA9IHRydWU7XG4gICAgICAgIGlmIChBUElpbnRlcmZhY2UuZW1wdHkoZGVsaXZlcnlTY2hlZCkpIHtcbiAgICAgICAgICB0aGlzLmdlb2NvZGVyX2xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLiRyZWZzLmRlbGl2ZXJ5X3NjaGVkLnNob3dTY2hlZCh0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLkRhdGFTdG9yZS5saXN0X2RhdGEgPSBbXTtcbiAgICAgICAgICB0aGlzLmJhY2tQYWdlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGJhY2tQYWdlKCkge1xuICAgICAgaWYgKCFBUElpbnRlcmZhY2UuZW1wdHkodGhpcy5iYWNrX3VybCkpIHtcbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2godGhpcy5iYWNrX3VybCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaChcIi9ob21lXCIpO1xuICAgICAgfVxuICAgIH0sXG4gICAgYWZ0ZXJTYXZldHJhbnMoZGF0YSkge1xuICAgICAgdGhpcy5iYWNrUGFnZSgpO1xuICAgIH0sXG4gICAgbG9jYXRpb25QZXJtaXNzaW9uKCkge1xuICAgICAgaWYgKHRoaXMuJHEuY2FwYWNpdG9yKSB7XG4gICAgICAgIC8vYW5kcm9pZFxuICAgICAgICBBcHBMb2NhdGlvbi5jaGVja0FjY3VyYWN5KClcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2NhdGVMb2NhdGlvbigpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yLmNvZGUgPT09IDQpIHtcbiAgICAgICAgICAgICAgdGhpcy5nZW9jb2Rlcl9sb2FkaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgdGhpcy5zZXRNYXJrZXJQb3NpdGlvbihcbiAgICAgICAgICAgICAgICB0aGlzLm1hcHNfY29uZmlnLmRlZmF1bHRfbGF0LFxuICAgICAgICAgICAgICAgIHRoaXMubWFwc19jb25maWcuZGVmYXVsdF9sbmdcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgdGhpcy5yZXZlcnNlR2VvY29kaW5nKFxuICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQodGhpcy5tYXBzX2NvbmZpZy5kZWZhdWx0X2xhdCksXG4gICAgICAgICAgICAgICAgcGFyc2VGbG9hdCh0aGlzLm1hcHNfY29uZmlnLmRlZmF1bHRfbG5nKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgQVBJaW50ZXJmYWNlLm5vdGlmeShcImRhcmtcIiwgZXJyb3IubWVzc2FnZSwgXCJlcnJvclwiLCB0aGlzLiRxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy93ZWJcbiAgICAgICAgaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oXG4gICAgICAgICAgICAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnNldE1hcmtlclBvc2l0aW9uKFxuICAgICAgICAgICAgICAgIGRhdGEuY29vcmRzLmxhdGl0dWRlLFxuICAgICAgICAgICAgICAgIGRhdGEuY29vcmRzLmxvbmdpdHVkZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB0aGlzLnJldmVyc2VHZW9jb2RpbmcoXG4gICAgICAgICAgICAgICAgZGF0YS5jb29yZHMubGF0aXR1ZGUsXG4gICAgICAgICAgICAgICAgZGF0YS5jb29yZHMubG9uZ2l0dWRlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0TWFya2VyUG9zaXRpb24oXG4gICAgICAgICAgICAgICAgdGhpcy5tYXBzX2NvbmZpZy5kZWZhdWx0X2xhdCxcbiAgICAgICAgICAgICAgICB0aGlzLm1hcHNfY29uZmlnLmRlZmF1bHRfbG5nXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIHRoaXMucmV2ZXJzZUdlb2NvZGluZyhcbiAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KHRoaXMubWFwc19jb25maWcuZGVmYXVsdF9sYXQpLFxuICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQodGhpcy5tYXBzX2NvbmZpZy5kZWZhdWx0X2xuZylcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBsb2NhdGVMb2NhdGlvbigpIHtcbiAgICAgIEFwcExvY2F0aW9uLmdldFBvc2l0aW9uKClcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLnNldE1hcmtlclBvc2l0aW9uKGRhdGEubGF0LCBkYXRhLmxuZyk7XG4gICAgICAgICAgdGhpcy5yZXZlcnNlR2VvY29kaW5nKGRhdGEubGF0LCBkYXRhLmxuZyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLnNldE1hcmtlclBvc2l0aW9uKFxuICAgICAgICAgICAgdGhpcy5tYXBzX2NvbmZpZy5kZWZhdWx0X2xhdCxcbiAgICAgICAgICAgIHRoaXMubWFwc19jb25maWcuZGVmYXVsdF9sbmdcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMucmV2ZXJzZUdlb2NvZGluZyhcbiAgICAgICAgICAgIHBhcnNlRmxvYXQodGhpcy5tYXBzX2NvbmZpZy5kZWZhdWx0X2xhdCksXG4gICAgICAgICAgICBwYXJzZUZsb2F0KHRoaXMubWFwc19jb25maWcuZGVmYXVsdF9sbmcpXG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHt9KTtcbiAgICB9LFxuICAgIGFmdGVyU2VsZWN0bWFwKGxhdCwgbG5nKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImFmdGVyU2VsZWN0bWFwID0+XCIgKyBsYXQgKyBsbmcpO1xuICAgICAgdGhpcy5yZXZlcnNlR2VvY29kaW5nKGxhdCwgbG5nKTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuIl0sImZpbGUiOiJhc3NldHMvTWFwUGFnZS5mZmMwYWE1ZS5qcyJ9
