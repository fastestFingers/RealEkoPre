import { _ as _export_sfc, l as defineAsyncComponent, u as __vitePreload, R as useDataStore, m as APIinterface, n as resolveComponent, p as openBlock, q as createBlock, t as withCtx, f as createVNode, U as createBaseVNode, aa as withDirectives, Y as QBtn, a7 as normalizeClass, a6 as createTextVNode, Z as toDisplayString, aA as createCommentVNode, aY as QInput, V as createElementBlock, F as Fragment, a8 as QCard, aB as QDialog } from "./index.61ed5618.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QSpace } from "./QSpace.f164c087.js";
import { Q as QSelect } from "./QSelect.311187d6.js";
import { Q as QBtnToggle } from "./QBtnToggle.6ffa195b.js";
import { Q as QFooter } from "./QFooter.571ac042.js";
import { Q as QForm } from "./QForm.7ded9d38.js";
import { C as ClosePopup } from "./ClosePopup.9d17b53c.js";
import { u as useMapStore } from "./MapStore.fcd8f5ff.js";
import "./QChip.f183a4f1.js";
import "./QItemLabel.a9365c5b.js";
import "./QMenu.8e482cd8.js";
import "./selection.50b4cb0c.js";
import "./rtl.f3ed811c.js";
import "./format.7f7370d3.js";
import "./QBtnGroup.abc2d1c7.js";
import "./QResizeObserver.d08dce3c.js";
const _sfc_main = {
  name: "AddressDetails",
  props: ["maps_config"],
  components: {
    MapsComponents: defineAsyncComponent(
      () => __vitePreload(() => import("./MapsComponents.da461108.js"), true ? ["assets/MapsComponents.da461108.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/index.d0b40bd3.js"] : void 0)
    )
  },
  setup() {
    const MapStore = useMapStore();
    const DataStore = useDataStore();
    return {
      MapStore,
      DataStore
    };
  },
  data() {
    return {
      show_modal: false,
      loading: false,
      location_data: [],
      location_name: "",
      delivery_options: "",
      delivery_instructions: "",
      address_label: "Home",
      attributes: [],
      delivery_options_data: [],
      address_label_data: [],
      address1: "",
      formatted_address: "",
      adjust_pin: false,
      class_map: "map bg-grey-2 rounded-10 q-mb-md",
      marker: [],
      validat_coord: false,
      new_lat: "",
      new_lng: "",
      center: [],
      marker_position: [],
      icon: {
        text: "\uEA44",
        fontFamily: "Material Icons",
        color: "#ffffff",
        fontSize: "18px"
      },
      circles: {}
    };
  },
  mounted() {
    this.addressAtttibues();
  },
  watch: {
    adjust_pin(newval, oldval) {
      if (newval) {
        this.class_map = "window-height full-width";
        this.marker_position[0].draggable = true;
      } else {
        this.class_map = "map bg-grey-2 rounded-10 q-mb-md";
        this.marker_position[0].draggable = false;
      }
    }
  },
  methods: {
    beforeShow() {
      this.adjust_pin = false;
    },
    showModal() {
      this.show_modal = true;
      this.marker_position = [
        {
          id: 0,
          lat: parseFloat(this.location_data.latitude),
          lng: parseFloat(this.location_data.longitude),
          label: APIinterface.getIcon("customer"),
          icon: null,
          draggable: false
        }
      ];
      this.center = {
        lat: parseFloat(this.location_data.latitude),
        lng: parseFloat(this.location_data.longitude)
      };
      this.new_lat = parseFloat(this.location_data.latitude);
      this.new_lng = parseFloat(this.location_data.longitude);
      if (this.location_data.attributes) {
        this.address1 = this.location_data.address.address1;
        this.formatted_address = this.location_data.address.formatted_address;
        this.location_name = this.location_data.attributes.location_name;
        this.delivery_options = this.location_data.attributes.delivery_options;
        this.delivery_instructions = this.location_data.attributes.delivery_instructions;
        this.address_label = this.location_data.attributes.address_label;
      }
    },
    closeModal() {
      this.show_modal = false;
      this.adjust_pin = false;
    },
    addressAtttibues() {
      APIinterface.addressAtttibues().then((data) => {
        this.attributes = data.details;
        if (Object.keys(data.details.delivery_option).length > 0) {
          Object.entries(data.details.delivery_option).forEach(
            ([key, items]) => {
              this.delivery_options_data.push({ label: items, value: key });
            }
          );
        }
        if (Object.keys(data.details.address_label).length > 0) {
          Object.entries(data.details.address_label).forEach(
            ([key, items]) => {
              this.address_label_data.push({ label: items, value: key });
            }
          );
        }
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data) => {
      });
    },
    afterSelectmap(lat, lng) {
      this.new_lat = lat;
      this.new_lng = lng;
    },
    validateCoordinates() {
      const $params = {
        lat: parseFloat(this.location_data.latitude),
        lng: parseFloat(this.location_data.longitude),
        new_lat: this.new_lat,
        new_lng: this.new_lng
      };
      this.loading = true;
      APIinterface.validateCoordinates($params).then((data) => {
        this.adjust_pin = false;
        this.location_data.latitude = this.new_lat;
        this.location_data.longitude = this.new_lng;
        this.marker_position[0].lat = this.new_lat;
        this.marker_position[0].lng = this.new_lng;
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data) => {
        this.loading = false;
      });
    },
    onSubmit() {
      console.debug("onSubmit");
      this.loading = true;
      const $params = {
        address1: this.address1,
        formatted_address: this.formatted_address,
        delivery_options: this.delivery_options,
        location_name: this.location_name,
        address_label: this.address_label,
        delivery_instructions: this.delivery_instructions,
        data: this.location_data
      };
      APIinterface.saveClientAddress($params).then((data) => {
        this.closeModal();
        APIinterface.setStorage("place_id", data.details.place_id);
        this.$emit("afterSaveaddress");
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", this.$q);
      }).then((data) => {
        this.loading = false;
      });
    }
  }
};
const _hoisted_1 = { class: "col-12" };
const _hoisted_2 = { class: "row items-center items-stretch" };
const _hoisted_3 = { class: "col-9" };
const _hoisted_4 = { class: "text-weight-bold" };
const _hoisted_5 = { class: "cursor-pointer font12 text-grey" };
const _hoisted_6 = { class: "col-3" };
const _hoisted_7 = { class: "q-gutter-sm" };
const _hoisted_8 = { class: "text-h6" };
const _hoisted_9 = { class: "fit relative-position" };
const _hoisted_10 = {
  class: "absolute-top-left full-width text-rightx q-pa-sm",
  style: { "z-index": "999" }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MapsComponents = resolveComponent("MapsComponents");
  return openBlock(), createBlock(QDialog, {
    modelValue: $data.show_modal,
    "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $data.show_modal = $event),
    persistent: "",
    onBeforeShow: $options.beforeShow,
    maximized: true,
    "transition-show": "fade",
    "transition-hide": "fade"
  }, {
    default: withCtx(() => [
      createVNode(QCard, { class: "row items-stretch" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            !$data.adjust_pin ? (openBlock(), createBlock(QToolbar, { key: 0 }, {
              default: withCtx(() => [
                withDirectives(createVNode(QBtn, {
                  icon: "close",
                  flat: "",
                  round: "",
                  dense: "",
                  color: _ctx.$q.dark.mode ? "white" : "dark"
                }, null, 8, ["color"]), [
                  [ClosePopup]
                ]),
                createVNode(QToolbarTitle, {
                  class: normalizeClass(["text-weight-bold", {
                    "text-white": _ctx.$q.dark.mode,
                    "text-dark": !_ctx.$q.dark.mode
                  }])
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("Delivery Address")), 1)
                  ]),
                  _: 1
                }, 8, ["class"])
              ]),
              _: 1
            })) : createCommentVNode("", true),
            createBaseVNode("div", {
              class: normalizeClass({ "q-pl-md q-pr-md": !$data.adjust_pin, "fit ": $data.adjust_pin })
            }, [
              !$data.adjust_pin ? (openBlock(), createBlock(QForm, {
                key: 0,
                onSubmit: $options.onSubmit
              }, {
                default: withCtx(() => [
                  $setup.DataStore.hasMapConfig ? (openBlock(), createBlock(_component_MapsComponents, {
                    key: 0,
                    ref: "mapRef",
                    class: "maps",
                    size: "small q-mb-sm radius8",
                    keys: $setup.DataStore.maps_config.key,
                    provider: $setup.DataStore.maps_config.provider,
                    zoom: $setup.DataStore.maps_config.zoom,
                    center: $data.center,
                    markers: $data.marker_position,
                    onAfterSelectmap: $options.afterSelectmap
                  }, null, 8, ["keys", "provider", "zoom", "center", "markers", "onAfterSelectmap"])) : createCommentVNode("", true),
                  createBaseVNode("div", _hoisted_2, [
                    createBaseVNode("div", _hoisted_3, [
                      createBaseVNode("div", _hoisted_4, toDisplayString($data.address1), 1),
                      createBaseVNode("div", _hoisted_5, toDisplayString($data.formatted_address), 1)
                    ]),
                    createBaseVNode("div", _hoisted_6, [
                      createVNode(QBtn, {
                        onClick: _cache[0] || (_cache[0] = ($event) => $data.adjust_pin = !$data.adjust_pin),
                        unelevated: "",
                        color: _ctx.$q.dark.mode ? "grey600" : "mygrey",
                        "text-color": _ctx.$q.dark.mode ? "grey300" : "dark",
                        icon: "las la-map-marker",
                        "no-caps": "",
                        class: "line-normal fit"
                      }, null, 8, ["color", "text-color"])
                    ])
                  ]),
                  createVNode(QSpace, { class: "q-pa-sm" }),
                  createBaseVNode("div", _hoisted_7, [
                    createVNode(QInput, {
                      modelValue: $data.address1,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.address1 = $event),
                      label: _ctx.$t("Street name"),
                      outlined: "",
                      "lazy-rules": "",
                      "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
                      "label-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                      borderless: "",
                      class: "input-borderless"
                    }, null, 8, ["modelValue", "label", "bg-color", "label-color"]),
                    createVNode(QInput, {
                      modelValue: $data.formatted_address,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.formatted_address = $event),
                      label: _ctx.$t("Street number"),
                      outlined: "",
                      "lazy-rules": "",
                      "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
                      "label-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                      borderless: "",
                      class: "input-borderless"
                    }, null, 8, ["modelValue", "label", "bg-color", "label-color"]),
                    createVNode(QInput, {
                      modelValue: $data.location_name,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.location_name = $event),
                      label: _ctx.$t("Aparment, suite or floor"),
                      outlined: "",
                      "lazy-rules": "",
                      "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
                      "label-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                      borderless: "",
                      class: "input-borderless"
                    }, null, 8, ["modelValue", "label", "bg-color", "label-color"]),
                    createVNode(QSelect, {
                      modelValue: $data.delivery_options,
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.delivery_options = $event),
                      options: $data.delivery_options_data,
                      "transition-show": "fade",
                      "transition-hide": "fade",
                      "emit-value": "",
                      outlined: "",
                      "lazy-rules": "",
                      "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
                      "label-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                      borderless: "",
                      class: "input-borderless"
                    }, null, 8, ["modelValue", "options", "bg-color", "label-color"]),
                    createVNode(QInput, {
                      modelValue: $data.delivery_instructions,
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.delivery_instructions = $event),
                      autogrow: "",
                      label: _ctx.$t("Add delivery instructions"),
                      outlined: "",
                      "lazy-rules": "",
                      "bg-color": _ctx.$q.dark.mode ? "grey600" : "input",
                      "label-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                      borderless: "",
                      class: "input-borderless"
                    }, null, 8, ["modelValue", "label", "bg-color", "label-color"]),
                    createBaseVNode("div", _hoisted_8, toDisplayString(_ctx.$t("Address label")), 1),
                    createVNode(QBtnToggle, {
                      modelValue: $data.address_label,
                      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.address_label = $event),
                      "toggle-color": "secondary",
                      color: _ctx.$q.dark.mode ? "grey600" : "mygrey",
                      "text-color": _ctx.$q.dark.mode ? "grey300" : "dark",
                      "no-caps": "",
                      "no-wrap": "",
                      unelevated: "",
                      options: $data.address_label_data,
                      class: "rounded-group2 text-weight-bold line-1"
                    }, null, 8, ["modelValue", "color", "text-color", "options"]),
                    createVNode(QSpace, { class: "q-pa-xl" }),
                    createVNode(QFooter, { class: "q-pl-md q-pr-md q-pt-sm q-pb-sm bg-white" }, {
                      default: withCtx(() => [
                        createVNode(QBtn, {
                          type: "submit",
                          loading: $data.loading,
                          label: _ctx.$t("Save Address"),
                          unelevated: "",
                          "no-caps": "",
                          color: "primary text-white",
                          class: "full-width text-weight-bold",
                          size: "lg"
                        }, null, 8, ["loading", "label"])
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }, 8, ["onSubmit"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createBaseVNode("div", _hoisted_9, [
                  createBaseVNode("div", {
                    class: normalizeClass(["absolute-top-left full-width z-top", {
                      "bg-dark": _ctx.$q.dark.mode,
                      "bg-white": !_ctx.$q.dark.mode
                    }])
                  }, [
                    createBaseVNode("div", _hoisted_10, [
                      createVNode(QBtn, {
                        round: "",
                        dense: "",
                        icon: "close",
                        class: "q-mr-sm",
                        color: _ctx.$q.dark.mode ? "white" : "dark",
                        unelevated: "",
                        size: "sm",
                        onClick: _cache[7] || (_cache[7] = ($event) => $data.adjust_pin = !$data.adjust_pin)
                      }, null, 8, ["color"])
                    ])
                  ], 2),
                  $setup.DataStore.hasMapConfig ? (openBlock(), createBlock(_component_MapsComponents, {
                    key: 0,
                    ref: "mapRef",
                    class: "maps",
                    size: "fit",
                    keys: $setup.DataStore.maps_config.key,
                    provider: $setup.DataStore.maps_config.provider,
                    zoom: $setup.DataStore.maps_config.zoom,
                    center: $data.center,
                    markers: $data.marker_position,
                    onAfterSelectmap: $options.afterSelectmap
                  }, null, 8, ["keys", "provider", "zoom", "center", "markers", "onAfterSelectmap"])) : createCommentVNode("", true)
                ]),
                createVNode(QFooter, { class: "q-pl-md q-pr-md q-pt-sm q-pb-sm bg-white" }, {
                  default: withCtx(() => [
                    createVNode(QBtn, {
                      label: _ctx.$t("Save"),
                      loading: $data.loading,
                      onClick: $options.validateCoordinates,
                      unelevated: "",
                      "no-caps": "",
                      color: "primary text-white",
                      class: "full-width text-weight-bold",
                      size: "lg"
                    }, null, 8, ["label", "loading", "onClick"])
                  ]),
                  _: 1
                })
              ], 64))
            ], 2)
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["modelValue", "onBeforeShow"]);
}
var AddressDetails = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "AddressDetails.vue"]]);
export { AddressDetails as default };
//# sourceMappingURL=data:application/json;base64,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Ozs7O21EQVFmSSxtQkFzRFdDO0FBQUEsZ0JBckRUSixnQkF1Q00sT0F2Q04sWUF1Q007QUFBQSxrQkF0Q0pBLGdCQXNCTTtBQUFBLG9CQXJCSix1QkFBTSxzQ0FBb0M7QUFBQSxpQ0FDSCxLQUFFLEdBQUMsS0FBSztBQUFBLG1DQUFxQyxLQUFFLEdBQUMsS0FBSztBQUFBOztvQkFLNUZBLGdCQWNNLE9BZE4sYUFjTTtBQUFBLHNCQVZKRCxZQVNFO0FBQUEsd0JBUkE7QUFBQSx3QkFDQTtBQUFBLHdCQUNBLE1BQUs7QUFBQSx3QkFDTCxPQUFNO0FBQUEsd0JBQ0wsT0FBTyxRQUFHLEtBQUssT0FBSTtBQUFBLHdCQUNwQjtBQUFBLHdCQUNBLE1BQUs7QUFBQSx3QkFDSixTQUFLLHNDQUFFLE1BQVUsY0FBSSxNQUFVO0FBQUE7OztrQkFLdEIsaUJBQVUsNkJBQ3hCRCxZQVdpQjtBQUFBO29CQVZmLEtBQUk7QUFBQSxvQkFDSixPQUFNO0FBQUEsb0JBQ04sTUFBSztBQUFBLG9CQUNKLE1BQU0saUJBQVUsWUFBWTtBQUFBLG9CQUM1QixVQUFVLGlCQUFVLFlBQVk7QUFBQSxvQkFDaEMsTUFBTSxpQkFBVSxZQUFZO0FBQUEsb0JBQzVCLFFBQVEsTUFBTTtBQUFBLG9CQUNkLFNBQVMsTUFBZTtBQUFBLG9CQUN4QixrQkFBaUIsU0FBYztBQUFBOztnQkFNdENDLFlBV1csNkRBWCtDO0FBQUEsbUNBQ3hELE1BU0U7QUFBQSxvQkFURkEsWUFTRTtBQUFBLHNCQVJDLE9BQU8sS0FBRTtBQUFBLHNCQUNULFNBQVMsTUFBTztBQUFBLHNCQUNoQixTQUFPLFNBQW1CO0FBQUEsc0JBQzNCO0FBQUEsc0JBQ0E7QUFBQSxzQkFDQSxPQUFNO0FBQUEsc0JBQ04sT0FBTTtBQUFBLHNCQUNOLE1BQUs7QUFBQSIsIm5hbWVzIjpbIl9jcmVhdGVCbG9jayIsIl9jcmVhdGVWTm9kZSIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfbm9ybWFsaXplQ2xhc3MiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9GcmFnbWVudCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FkZHJlc3NEZXRhaWxzLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLWRpYWxvZ1xuICAgIHYtbW9kZWw9XCJzaG93X21vZGFsXCJcbiAgICBwZXJzaXN0ZW50XG4gICAgQGJlZm9yZS1zaG93PVwiYmVmb3JlU2hvd1wiXG4gICAgOm1heGltaXplZD1cInRydWVcIlxuICAgIHRyYW5zaXRpb24tc2hvdz1cImZhZGVcIlxuICAgIHRyYW5zaXRpb24taGlkZT1cImZhZGVcIlxuICA+XG4gICAgPHEtY2FyZCBjbGFzcz1cInJvdyBpdGVtcy1zdHJldGNoXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgIDxxLXRvb2xiYXIgdi1pZj1cIiFhZGp1c3RfcGluXCI+XG4gICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICBpY29uPVwiY2xvc2VcIlxuICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgcm91bmRcbiAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICA6Y29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnd2hpdGUnIDogJ2RhcmsnXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxxLXRvb2xiYXItdGl0bGVcbiAgICAgICAgICAgIGNsYXNzPVwidGV4dC13ZWlnaHQtYm9sZFwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICd0ZXh0LXdoaXRlJzogJHEuZGFyay5tb2RlLFxuICAgICAgICAgICAgICAndGV4dC1kYXJrJzogISRxLmRhcmsubW9kZSxcbiAgICAgICAgICAgIH1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt7ICR0KFwiRGVsaXZlcnkgQWRkcmVzc1wiKSB9fVxuICAgICAgICAgIDwvcS10b29sYmFyLXRpdGxlPlxuICAgICAgICA8L3EtdG9vbGJhcj5cblxuICAgICAgICA8ZGl2IDpjbGFzcz1cInsgJ3EtcGwtbWQgcS1wci1tZCc6ICFhZGp1c3RfcGluLCAnZml0ICc6IGFkanVzdF9waW4gfVwiPlxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiIWFkanVzdF9waW5cIj5cbiAgICAgICAgICAgIDxxLWZvcm0gQHN1Ym1pdD1cIm9uU3VibWl0XCI+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiRGF0YVN0b3JlLmhhc01hcENvbmZpZ1wiPlxuICAgICAgICAgICAgICAgIDxNYXBzQ29tcG9uZW50c1xuICAgICAgICAgICAgICAgICAgcmVmPVwibWFwUmVmXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWFwc1wiXG4gICAgICAgICAgICAgICAgICBzaXplPVwic21hbGwgcS1tYi1zbSByYWRpdXM4XCJcbiAgICAgICAgICAgICAgICAgIDprZXlzPVwiRGF0YVN0b3JlLm1hcHNfY29uZmlnLmtleVwiXG4gICAgICAgICAgICAgICAgICA6cHJvdmlkZXI9XCJEYXRhU3RvcmUubWFwc19jb25maWcucHJvdmlkZXJcIlxuICAgICAgICAgICAgICAgICAgOnpvb209XCJEYXRhU3RvcmUubWFwc19jb25maWcuem9vbVwiXG4gICAgICAgICAgICAgICAgICA6Y2VudGVyPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgIDptYXJrZXJzPVwibWFya2VyX3Bvc2l0aW9uXCJcbiAgICAgICAgICAgICAgICAgIEBhZnRlci1zZWxlY3RtYXA9XCJhZnRlclNlbGVjdG1hcFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDwvTWFwc0NvbXBvbmVudHM+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBpdGVtcy1jZW50ZXIgaXRlbXMtc3RyZXRjaFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtOVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtd2VpZ2h0LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgYWRkcmVzczEgfX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImN1cnNvci1wb2ludGVyIGZvbnQxMiB0ZXh0LWdyZXlcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgZm9ybWF0dGVkX2FkZHJlc3MgfX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtM1wiPlxuICAgICAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImFkanVzdF9waW4gPSAhYWRqdXN0X3BpblwiXG4gICAgICAgICAgICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXk2MDAnIDogJ215Z3JleSdcIlxuICAgICAgICAgICAgICAgICAgICA6dGV4dC1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICdkYXJrJ1wiXG4gICAgICAgICAgICAgICAgICAgIGljb249XCJsYXMgbGEtbWFwLW1hcmtlclwiXG4gICAgICAgICAgICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsaW5lLW5vcm1hbCBmaXRcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPHEtc3BhY2UgY2xhc3M9XCJxLXBhLXNtXCI+PC9xLXNwYWNlPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJxLWd1dHRlci1zbVwiPlxuICAgICAgICAgICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiYWRkcmVzczFcIlxuICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ1N0cmVldCBuYW1lJylcIlxuICAgICAgICAgICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICAgICAgICAgIGxhenktcnVsZXNcbiAgICAgICAgICAgICAgICAgIDpiZy1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5NjAwJyA6ICdpbnB1dCdcIlxuICAgICAgICAgICAgICAgICAgOmxhYmVsLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXkzMDAnIDogJ2dyZXknXCJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcmxlc3NcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtYm9yZGVybGVzc1wiXG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybWF0dGVkX2FkZHJlc3NcIlxuICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ1N0cmVldCBudW1iZXInKVwiXG4gICAgICAgICAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgbGF6eS1ydWxlc1xuICAgICAgICAgICAgICAgICAgOmJnLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXk2MDAnIDogJ2lucHV0J1wiXG4gICAgICAgICAgICAgICAgICA6bGFiZWwtY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTMwMCcgOiAnZ3JleSdcIlxuICAgICAgICAgICAgICAgICAgYm9yZGVybGVzc1xuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1ib3JkZXJsZXNzXCJcbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJsb2NhdGlvbl9uYW1lXCJcbiAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdBcGFybWVudCwgc3VpdGUgb3IgZmxvb3InKVwiXG4gICAgICAgICAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgbGF6eS1ydWxlc1xuICAgICAgICAgICAgICAgICAgOmJnLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXk2MDAnIDogJ2lucHV0J1wiXG4gICAgICAgICAgICAgICAgICA6bGFiZWwtY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTMwMCcgOiAnZ3JleSdcIlxuICAgICAgICAgICAgICAgICAgYm9yZGVybGVzc1xuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1ib3JkZXJsZXNzXCJcbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPHEtc2VsZWN0XG4gICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZGVsaXZlcnlfb3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cImRlbGl2ZXJ5X29wdGlvbnNfZGF0YVwiXG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLXNob3c9XCJmYWRlXCJcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24taGlkZT1cImZhZGVcIlxuICAgICAgICAgICAgICAgICAgZW1pdC12YWx1ZVxuICAgICAgICAgICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICAgICAgICAgIGxhenktcnVsZXNcbiAgICAgICAgICAgICAgICAgIDpiZy1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5NjAwJyA6ICdpbnB1dCdcIlxuICAgICAgICAgICAgICAgICAgOmxhYmVsLWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXkzMDAnIDogJ2dyZXknXCJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcmxlc3NcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtYm9yZGVybGVzc1wiXG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZGVsaXZlcnlfaW5zdHJ1Y3Rpb25zXCJcbiAgICAgICAgICAgICAgICAgIGF1dG9ncm93XG4gICAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnQWRkIGRlbGl2ZXJ5IGluc3RydWN0aW9ucycpXCJcbiAgICAgICAgICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICBsYXp5LXJ1bGVzXG4gICAgICAgICAgICAgICAgICA6YmctY29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTYwMCcgOiAnaW5wdXQnXCJcbiAgICAgICAgICAgICAgICAgIDpsYWJlbC1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICdncmV5J1wiXG4gICAgICAgICAgICAgICAgICBib3JkZXJsZXNzXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LWJvcmRlcmxlc3NcIlxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNlwiPnt7ICR0KFwiQWRkcmVzcyBsYWJlbFwiKSB9fTwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPHEtYnRuLXRvZ2dsZVxuICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImFkZHJlc3NfbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgdG9nZ2xlLWNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgIDpjb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5NjAwJyA6ICdteWdyZXknXCJcbiAgICAgICAgICAgICAgICAgIDp0ZXh0LWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXkzMDAnIDogJ2RhcmsnXCJcbiAgICAgICAgICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICAgICAgICAgIG5vLXdyYXBcbiAgICAgICAgICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVwiYWRkcmVzc19sYWJlbF9kYXRhXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwicm91bmRlZC1ncm91cDIgdGV4dC13ZWlnaHQtYm9sZCBsaW5lLTFcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHEtc3BhY2UgY2xhc3M9XCJxLXBhLXhsXCI+PC9xLXNwYWNlPlxuICAgICAgICAgICAgICAgIDxxLWZvb3RlciBjbGFzcz1cInEtcGwtbWQgcS1wci1tZCBxLXB0LXNtIHEtcGItc20gYmctd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgOmxvYWRpbmc9XCJsb2FkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ1NhdmUgQWRkcmVzcycpXCJcbiAgICAgICAgICAgICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgICAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeSB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmdWxsLXdpZHRoIHRleHQtd2VpZ2h0LWJvbGRcIlxuICAgICAgICAgICAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3EtZm9vdGVyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvcS1mb3JtPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPCEtLSBlbmQgZm9ybSAtLT5cblxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZml0IHJlbGF0aXZlLXBvc2l0aW9uXCI+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzcz1cImFic29sdXRlLXRvcC1sZWZ0IGZ1bGwtd2lkdGggei10b3BcIlxuICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICAgICAgICdiZy1kYXJrJzogJHEuZGFyay5tb2RlLFxuICAgICAgICAgICAgICAgICAgJ2JnLXdoaXRlJzogISRxLmRhcmsubW9kZSxcbiAgICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYWJzb2x1dGUtdG9wLWxlZnQgZnVsbC13aWR0aCB0ZXh0LXJpZ2h0eCBxLXBhLXNtXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPVwiei1pbmRleDogOTk5XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICAgICAgcm91bmRcbiAgICAgICAgICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cImNsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJxLW1yLXNtXCJcbiAgICAgICAgICAgICAgICAgICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ3doaXRlJyA6ICdkYXJrJ1wiXG4gICAgICAgICAgICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiYWRqdXN0X3BpbiA9ICFhZGp1c3RfcGluXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiRGF0YVN0b3JlLmhhc01hcENvbmZpZ1wiPlxuICAgICAgICAgICAgICAgIDxNYXBzQ29tcG9uZW50c1xuICAgICAgICAgICAgICAgICAgcmVmPVwibWFwUmVmXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWFwc1wiXG4gICAgICAgICAgICAgICAgICBzaXplPVwiZml0XCJcbiAgICAgICAgICAgICAgICAgIDprZXlzPVwiRGF0YVN0b3JlLm1hcHNfY29uZmlnLmtleVwiXG4gICAgICAgICAgICAgICAgICA6cHJvdmlkZXI9XCJEYXRhU3RvcmUubWFwc19jb25maWcucHJvdmlkZXJcIlxuICAgICAgICAgICAgICAgICAgOnpvb209XCJEYXRhU3RvcmUubWFwc19jb25maWcuem9vbVwiXG4gICAgICAgICAgICAgICAgICA6Y2VudGVyPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgIDptYXJrZXJzPVwibWFya2VyX3Bvc2l0aW9uXCJcbiAgICAgICAgICAgICAgICAgIEBhZnRlci1zZWxlY3RtYXA9XCJhZnRlclNlbGVjdG1hcFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDwvTWFwc0NvbXBvbmVudHM+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHEtZm9vdGVyIGNsYXNzPVwicS1wbC1tZCBxLXByLW1kIHEtcHQtc20gcS1wYi1zbSBiZy13aGl0ZVwiPlxuICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnU2F2ZScpXCJcbiAgICAgICAgICAgICAgICA6bG9hZGluZz1cImxvYWRpbmdcIlxuICAgICAgICAgICAgICAgIEBjbGljaz1cInZhbGlkYXRlQ29vcmRpbmF0ZXNcIlxuICAgICAgICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5IHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZnVsbC13aWR0aCB0ZXh0LXdlaWdodC1ib2xkXCJcbiAgICAgICAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9xLWZvb3Rlcj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPCEtLSBjb2wtMTIgLS0+XG4gICAgPC9xLWNhcmQ+XG4gIDwvcS1kaWFsb2c+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgZGVmaW5lQXN5bmNDb21wb25lbnQgfSBmcm9tIFwidnVlXCI7XG5pbXBvcnQgQVBJaW50ZXJmYWNlIGZyb20gXCJzcmMvYXBpL0FQSWludGVyZmFjZVwiO1xuaW1wb3J0IHsgdXNlTWFwU3RvcmUgfSBmcm9tIFwic3RvcmVzL01hcFN0b3JlXCI7XG5pbXBvcnQgeyB1c2VEYXRhU3RvcmUgfSBmcm9tIFwic3RvcmVzL0RhdGFTdG9yZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiQWRkcmVzc0RldGFpbHNcIixcbiAgcHJvcHM6IFtcIm1hcHNfY29uZmlnXCJdLFxuICBjb21wb25lbnRzOiB7XG4gICAgTWFwc0NvbXBvbmVudHM6IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+XG4gICAgICBpbXBvcnQoXCJjb21wb25lbnRzL01hcHNDb21wb25lbnRzLnZ1ZVwiKVxuICAgICksXG4gIH0sXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IE1hcFN0b3JlID0gdXNlTWFwU3RvcmUoKTtcbiAgICBjb25zdCBEYXRhU3RvcmUgPSB1c2VEYXRhU3RvcmUoKTtcbiAgICByZXR1cm4ge1xuICAgICAgTWFwU3RvcmUsXG4gICAgICBEYXRhU3RvcmUsXG4gICAgfTtcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2hvd19tb2RhbDogZmFsc2UsXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIGxvY2F0aW9uX2RhdGE6IFtdLFxuICAgICAgbG9jYXRpb25fbmFtZTogXCJcIixcbiAgICAgIGRlbGl2ZXJ5X29wdGlvbnM6IFwiXCIsXG4gICAgICBkZWxpdmVyeV9pbnN0cnVjdGlvbnM6IFwiXCIsXG4gICAgICBhZGRyZXNzX2xhYmVsOiBcIkhvbWVcIixcbiAgICAgIGF0dHJpYnV0ZXM6IFtdLFxuICAgICAgZGVsaXZlcnlfb3B0aW9uc19kYXRhOiBbXSxcbiAgICAgIGFkZHJlc3NfbGFiZWxfZGF0YTogW10sXG4gICAgICBhZGRyZXNzMTogXCJcIixcbiAgICAgIGZvcm1hdHRlZF9hZGRyZXNzOiBcIlwiLFxuICAgICAgYWRqdXN0X3BpbjogZmFsc2UsXG4gICAgICBjbGFzc19tYXA6IFwibWFwIGJnLWdyZXktMiByb3VuZGVkLTEwIHEtbWItbWRcIixcbiAgICAgIG1hcmtlcjogW10sXG4gICAgICB2YWxpZGF0X2Nvb3JkOiBmYWxzZSxcbiAgICAgIG5ld19sYXQ6IFwiXCIsXG4gICAgICBuZXdfbG5nOiBcIlwiLFxuICAgICAgY2VudGVyOiBbXSxcbiAgICAgIG1hcmtlcl9wb3NpdGlvbjogW10sXG4gICAgICBpY29uOiB7XG4gICAgICAgIHRleHQ6IFwiXFx1ZWE0NFwiLFxuICAgICAgICBmb250RmFtaWx5OiBcIk1hdGVyaWFsIEljb25zXCIsXG4gICAgICAgIGNvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAgICAgZm9udFNpemU6IFwiMThweFwiLFxuICAgICAgfSxcbiAgICAgIGNpcmNsZXM6IHt9LFxuICAgIH07XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5hZGRyZXNzQXR0dGlidWVzKCk7XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgYWRqdXN0X3BpbihuZXd2YWwsIG9sZHZhbCkge1xuICAgICAgaWYgKG5ld3ZhbCkge1xuICAgICAgICB0aGlzLmNsYXNzX21hcCA9IFwid2luZG93LWhlaWdodCBmdWxsLXdpZHRoXCI7XG4gICAgICAgIHRoaXMubWFya2VyX3Bvc2l0aW9uWzBdLmRyYWdnYWJsZSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsYXNzX21hcCA9IFwibWFwIGJnLWdyZXktMiByb3VuZGVkLTEwIHEtbWItbWRcIjtcbiAgICAgICAgdGhpcy5tYXJrZXJfcG9zaXRpb25bMF0uZHJhZ2dhYmxlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGJlZm9yZVNob3coKSB7XG4gICAgICB0aGlzLmFkanVzdF9waW4gPSBmYWxzZTtcbiAgICB9LFxuICAgIHNob3dNb2RhbCgpIHtcbiAgICAgIHRoaXMuc2hvd19tb2RhbCA9IHRydWU7XG5cbiAgICAgIHRoaXMubWFya2VyX3Bvc2l0aW9uID0gW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgbGF0OiBwYXJzZUZsb2F0KHRoaXMubG9jYXRpb25fZGF0YS5sYXRpdHVkZSksXG4gICAgICAgICAgbG5nOiBwYXJzZUZsb2F0KHRoaXMubG9jYXRpb25fZGF0YS5sb25naXR1ZGUpLFxuICAgICAgICAgIGxhYmVsOiBBUElpbnRlcmZhY2UuZ2V0SWNvbihcImN1c3RvbWVyXCIpLFxuICAgICAgICAgIGljb246IG51bGwsXG4gICAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgIF07XG4gICAgICB0aGlzLmNlbnRlciA9IHtcbiAgICAgICAgbGF0OiBwYXJzZUZsb2F0KHRoaXMubG9jYXRpb25fZGF0YS5sYXRpdHVkZSksXG4gICAgICAgIGxuZzogcGFyc2VGbG9hdCh0aGlzLmxvY2F0aW9uX2RhdGEubG9uZ2l0dWRlKSxcbiAgICAgIH07XG4gICAgICB0aGlzLm5ld19sYXQgPSBwYXJzZUZsb2F0KHRoaXMubG9jYXRpb25fZGF0YS5sYXRpdHVkZSk7XG4gICAgICB0aGlzLm5ld19sbmcgPSBwYXJzZUZsb2F0KHRoaXMubG9jYXRpb25fZGF0YS5sb25naXR1ZGUpO1xuXG4gICAgICBpZiAodGhpcy5sb2NhdGlvbl9kYXRhLmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgdGhpcy5hZGRyZXNzMSA9IHRoaXMubG9jYXRpb25fZGF0YS5hZGRyZXNzLmFkZHJlc3MxO1xuICAgICAgICB0aGlzLmZvcm1hdHRlZF9hZGRyZXNzID0gdGhpcy5sb2NhdGlvbl9kYXRhLmFkZHJlc3MuZm9ybWF0dGVkX2FkZHJlc3M7XG5cbiAgICAgICAgdGhpcy5sb2NhdGlvbl9uYW1lID0gdGhpcy5sb2NhdGlvbl9kYXRhLmF0dHJpYnV0ZXMubG9jYXRpb25fbmFtZTtcbiAgICAgICAgdGhpcy5kZWxpdmVyeV9vcHRpb25zID0gdGhpcy5sb2NhdGlvbl9kYXRhLmF0dHJpYnV0ZXMuZGVsaXZlcnlfb3B0aW9ucztcbiAgICAgICAgdGhpcy5kZWxpdmVyeV9pbnN0cnVjdGlvbnMgPVxuICAgICAgICAgIHRoaXMubG9jYXRpb25fZGF0YS5hdHRyaWJ1dGVzLmRlbGl2ZXJ5X2luc3RydWN0aW9ucztcbiAgICAgICAgdGhpcy5hZGRyZXNzX2xhYmVsID0gdGhpcy5sb2NhdGlvbl9kYXRhLmF0dHJpYnV0ZXMuYWRkcmVzc19sYWJlbDtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNsb3NlTW9kYWwoKSB7XG4gICAgICB0aGlzLnNob3dfbW9kYWwgPSBmYWxzZTtcbiAgICAgIHRoaXMuYWRqdXN0X3BpbiA9IGZhbHNlO1xuICAgIH0sXG4gICAgYWRkcmVzc0F0dHRpYnVlcygpIHtcbiAgICAgIEFQSWludGVyZmFjZS5hZGRyZXNzQXR0dGlidWVzKClcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXMgPSBkYXRhLmRldGFpbHM7XG5cbiAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoZGF0YS5kZXRhaWxzLmRlbGl2ZXJ5X29wdGlvbikubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoZGF0YS5kZXRhaWxzLmRlbGl2ZXJ5X29wdGlvbikuZm9yRWFjaChcbiAgICAgICAgICAgICAgKFtrZXksIGl0ZW1zXSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsaXZlcnlfb3B0aW9uc19kYXRhLnB1c2goeyBsYWJlbDogaXRlbXMsIHZhbHVlOiBrZXkgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGRhdGEuZGV0YWlscy5hZGRyZXNzX2xhYmVsKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhkYXRhLmRldGFpbHMuYWRkcmVzc19sYWJlbCkuZm9yRWFjaChcbiAgICAgICAgICAgICAgKFtrZXksIGl0ZW1zXSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkcmVzc19sYWJlbF9kYXRhLnB1c2goeyBsYWJlbDogaXRlbXMsIHZhbHVlOiBrZXkgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgQVBJaW50ZXJmYWNlLm5vdGlmeShcImRhcmtcIiwgZXJyb3IsIFwiZXJyb3JcIiwgdGhpcy4kcSk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7fSk7XG4gICAgfSxcbiAgICBhZnRlclNlbGVjdG1hcChsYXQsIGxuZykge1xuICAgICAgdGhpcy5uZXdfbGF0ID0gbGF0O1xuICAgICAgdGhpcy5uZXdfbG5nID0gbG5nO1xuICAgIH0sXG4gICAgdmFsaWRhdGVDb29yZGluYXRlcygpIHtcbiAgICAgIGNvbnN0ICRwYXJhbXMgPSB7XG4gICAgICAgIGxhdDogcGFyc2VGbG9hdCh0aGlzLmxvY2F0aW9uX2RhdGEubGF0aXR1ZGUpLFxuICAgICAgICBsbmc6IHBhcnNlRmxvYXQodGhpcy5sb2NhdGlvbl9kYXRhLmxvbmdpdHVkZSksXG4gICAgICAgIG5ld19sYXQ6IHRoaXMubmV3X2xhdCxcbiAgICAgICAgbmV3X2xuZzogdGhpcy5uZXdfbG5nLFxuICAgICAgfTtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICBBUElpbnRlcmZhY2UudmFsaWRhdGVDb29yZGluYXRlcygkcGFyYW1zKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuYWRqdXN0X3BpbiA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMubG9jYXRpb25fZGF0YS5sYXRpdHVkZSA9IHRoaXMubmV3X2xhdDtcbiAgICAgICAgICB0aGlzLmxvY2F0aW9uX2RhdGEubG9uZ2l0dWRlID0gdGhpcy5uZXdfbG5nO1xuXG4gICAgICAgICAgdGhpcy5tYXJrZXJfcG9zaXRpb25bMF0ubGF0ID0gdGhpcy5uZXdfbGF0O1xuICAgICAgICAgIHRoaXMubWFya2VyX3Bvc2l0aW9uWzBdLmxuZyA9IHRoaXMubmV3X2xuZztcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJkYXJrXCIsIGVycm9yLCBcImVycm9yXCIsIHRoaXMuJHEpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIG9uU3VibWl0KCkge1xuICAgICAgY29uc29sZS5kZWJ1ZyhcIm9uU3VibWl0XCIpO1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIGNvbnN0ICRwYXJhbXMgPSB7XG4gICAgICAgIGFkZHJlc3MxOiB0aGlzLmFkZHJlc3MxLFxuICAgICAgICBmb3JtYXR0ZWRfYWRkcmVzczogdGhpcy5mb3JtYXR0ZWRfYWRkcmVzcyxcbiAgICAgICAgZGVsaXZlcnlfb3B0aW9uczogdGhpcy5kZWxpdmVyeV9vcHRpb25zLFxuICAgICAgICBsb2NhdGlvbl9uYW1lOiB0aGlzLmxvY2F0aW9uX25hbWUsXG4gICAgICAgIGFkZHJlc3NfbGFiZWw6IHRoaXMuYWRkcmVzc19sYWJlbCxcbiAgICAgICAgZGVsaXZlcnlfaW5zdHJ1Y3Rpb25zOiB0aGlzLmRlbGl2ZXJ5X2luc3RydWN0aW9ucyxcbiAgICAgICAgZGF0YTogdGhpcy5sb2NhdGlvbl9kYXRhLFxuICAgICAgfTtcbiAgICAgIEFQSWludGVyZmFjZS5zYXZlQ2xpZW50QWRkcmVzcygkcGFyYW1zKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgICAgICAgIEFQSWludGVyZmFjZS5zZXRTdG9yYWdlKFwicGxhY2VfaWRcIiwgZGF0YS5kZXRhaWxzLnBsYWNlX2lkKTtcbiAgICAgICAgICB0aGlzLiRlbWl0KFwiYWZ0ZXJTYXZlYWRkcmVzc1wiKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJkYXJrXCIsIGVycm9yLCBcImVycm9yXCIsIHRoaXMuJHEpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuIl0sImZpbGUiOiJhc3NldHMvQWRkcmVzc0RldGFpbHMuOGI5ZjY1MzguanMifQ==
