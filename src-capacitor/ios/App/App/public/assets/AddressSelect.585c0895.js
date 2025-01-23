import { _ as _export_sfc, l as defineAsyncComponent, m as APIinterface, aw as auth, n as resolveComponent, p as openBlock, V as createElementBlock, f as createVNode, t as withCtx, F as Fragment, Y as QBtn, a6 as createTextVNode, Z as toDisplayString, a8 as QCard, ac as QItem, ad as QItemSection, ae as QAvatar, X as renderList, u as __vitePreload, aF as withModifiers, af as QRadio } from "./index.61ed5618.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QSpace } from "./QSpace.f164c087.js";
import { Q as QItemLabel } from "./QItemLabel.a9365c5b.js";
import { Q as QList } from "./QList.b69a7e5b.js";
import { Q as QSkeleton } from "./QSkeleton.39737398.js";
import { Q as QInnerLoading } from "./QInnerLoading.abe2afe6.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import "./QResizeObserver.d08dce3c.js";
const _sfc_main = {
  name: "AddressSelect",
  components: {
    AddressDetails: defineAsyncComponent(
      () => __vitePreload(() => import("./AddressDetails.8b9f6538.js"), true ? ["assets/AddressDetails.8b9f6538.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QToolbarTitle.03eaf2d6.js","assets/QToolbar.c8fc6962.js","assets/QSpace.f164c087.js","assets/QSelect.311187d6.js","assets/QChip.f183a4f1.js","assets/QItemLabel.a9365c5b.js","assets/QMenu.8e482cd8.js","assets/selection.50b4cb0c.js","assets/rtl.f3ed811c.js","assets/format.7f7370d3.js","assets/QBtnToggle.6ffa195b.js","assets/QBtnGroup.abc2d1c7.js","assets/QFooter.571ac042.js","assets/QResizeObserver.d08dce3c.js","assets/QForm.7ded9d38.js","assets/ClosePopup.9d17b53c.js","assets/MapStore.fcd8f5ff.js"] : void 0)
    )
  },
  data() {
    return {
      modal: false,
      back_url: "",
      data: [],
      address_uuid: "",
      loading: false,
      locate_loading: false,
      location_data: []
    };
  },
  mounted() {
    this.back_url = this.$route.query.url;
    if (APIinterface.empty(this.back_url)) {
      this.back_url = "/home";
    }
    if (auth.authenticated()) {
      this.getAddresses();
    }
    const placeID = APIinterface.getStorage("place_id");
    if (typeof placeID !== "undefined" && placeID !== null) {
      this.address_uuid = placeID;
    }
  },
  computed: {},
  methods: {
    getAddresses() {
      this.loading = true;
      APIinterface.getAddresses().then((data) => {
        this.data = data.details.data;
      }).catch((error) => {
      }).then((data) => {
        this.loading = false;
      });
    },
    afterSelectaddress(data) {
      console.debug(data);
    },
    removeFromList(addressUuid) {
      Object.entries(this.data).forEach(([key, items]) => {
        if (items.address_uuid === addressUuid) {
          console.debug(key);
          this.data.splice(key, 1);
        }
      });
    },
    deleteConfirm(addressUuid) {
      this.$q.dialog({
        title: "Confirm",
        message: "Are you sure you want to Delete?",
        persistent: true,
        ok: {
          unelevated: true,
          color: "warning",
          rounded: true,
          "text-color": "black",
          size: "md",
          label: "Yes",
          "no-caps": true
        },
        cancel: {
          unelevated: true,
          rounded: true,
          color: "grey-3",
          "text-color": "black",
          size: "md",
          label: "Cancel",
          "no-caps": true
        }
      }).onOk(() => {
        APIinterface.deleteAddress(addressUuid).then((data) => {
          this.removeFromList(addressUuid);
        }).catch((error) => {
          APIinterface.notify("negative", error, "error_outline", this.$q);
        }).then((data) => {
        });
      }).onOk(() => {
      }).onCancel(() => {
      }).onDismiss(() => {
      });
    },
    locateLocation() {
      if (navigator.geolocation) {
        this.locate_loading = true;
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.locate_loading = false;
            this.reverseGeocoding(
              position.coords.latitude,
              position.coords.longitude
            );
          },
          (error) => {
            this.locate_loading = false;
          }
        );
      } else {
        this.locate_loading = false;
        APIinterface.notify(
          "negative",
          "Browser doesn't support Geolocation",
          "error_outline",
          this.$q
        );
      }
    },
    reverseGeocoding(lat, lng) {
      this.locate_loading = true;
      APIinterface.reverseGeocoding(lat, lng).then((data) => {
        if (typeof data.details.data.address !== "undefined" && data.details.data.address !== null) {
          this.setAddress(data.details.data);
          this.saveAddress(data.details.data.place_id);
        } else {
          APIinterface.notify(
            "negative",
            "This location is not available",
            "error_outline",
            this.$q
          );
        }
      }).catch((error) => {
        APIinterface.notify("negative", error, "error_outline", this.$q);
      }).then((data) => {
        this.locate_loading = false;
      });
    },
    setAddress(data) {
      APIinterface.setStorage("place_data", data);
      APIinterface.setStorage("place_id", data.place_id);
      this.backPage();
    },
    backPage() {
      if (!APIinterface.empty(this.back_url)) {
        this.$router.push(this.back_url);
      } else {
        this.$router.push("/home");
      }
    },
    saveAddress(placeID) {
      if (auth.authenticated()) {
        APIinterface.SavePlaceByID(placeID).then((data) => {
        }).catch((error) => {
        }).then((data) => {
        });
      }
    },
    isSelected(placeID) {
      if (this.address_uuid === placeID) {
        return true;
      }
      return false;
    },
    editAddress(data) {
      this.$refs.address_details.location_data = data;
      this.$refs.address_details.showModal();
    },
    afterSaveaddress() {
      if (auth.authenticated()) {
        this.getAddresses();
      }
    }
  }
};
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { key: 1 };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("Home");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AddressDetails = resolveComponent("AddressDetails");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(QHeader, {
      reveal: "",
      "reveal-offset": "50",
      class: "bg-white"
    }, {
      default: withCtx(() => [
        createVNode(QToolbar, null, {
          default: withCtx(() => [
            createVNode(QBtn, {
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$router.back()),
              flat: "",
              round: "",
              dense: "",
              icon: "arrow_back",
              color: "dark"
            }),
            createVNode(QToolbarTitle, { class: "text-dark text-center text-weight-bold" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("Delivery Address")), 1)
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
      class: "bg-grey-2"
    }, {
      default: withCtx(() => [
        createVNode(QSpace, { class: "q-pa-xs" }),
        createVNode(QCard, {
          flat: "",
          class: "no-border-radius"
        }, {
          default: withCtx(() => [
            createVNode(QList, null, {
              default: withCtx(() => [
                createVNode(QItem, {
                  tag: "label",
                  onClick: $options.locateLocation
                }, {
                  default: withCtx(() => [
                    createVNode(QItemSection, { avatar: "" }, {
                      default: withCtx(() => [
                        createVNode(QAvatar, {
                          rounded: "",
                          color: "amber-2",
                          "text-color": "orange-5",
                          icon: "eva-navigation-2-outline"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, null, {
                      default: withCtx(() => [
                        createVNode(QItemLabel, {
                          lines: "2",
                          class: "font12 text-weight-bold"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("Share your location")), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(QItemLabel, {
                          caption: "",
                          class: "font12 text-weight-medium"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("Enabled location services")), 1)
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
                }, 8, ["onClick"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(QSpace, { class: "q-pa-xs" }),
        createVNode(QCard, {
          flat: "",
          class: "no-border-radius"
        }, {
          default: withCtx(() => [
            createVNode(QList, null, {
              default: withCtx(() => [
                createVNode(QItem, {
                  tag: "label",
                  to: {
                    path: "/location/map",
                    query: {
                      url: "/address/select?url=" + this.back_url
                    }
                  }
                }, {
                  default: withCtx(() => [
                    createVNode(QItemSection, { avatar: "" }, {
                      default: withCtx(() => [
                        createVNode(QAvatar, {
                          rounded: "",
                          color: "blue-2",
                          "text-color": "dark",
                          icon: "las la-map-marked"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, null, {
                      default: withCtx(() => [
                        createVNode(QItemLabel, {
                          lines: "2",
                          class: "font12 text-weight-bold"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("Choose from Map")), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(QItemLabel, {
                          caption: "",
                          class: "font12 text-weight-medium"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("select your address from map")), 1)
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
                }, 8, ["to"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(QSpace, { class: "q-pa-xs" }),
        $data.loading ? (openBlock(), createElementBlock("div", _hoisted_1, [
          (openBlock(), createElementBlock(Fragment, null, renderList(6, (i) => {
            return openBlock(), createElementBlock(Fragment, { key: i }, [
              createVNode(QCard, {
                flat: "",
                class: "no-border-radius"
              }, {
                default: withCtx(() => [
                  createVNode(QList, null, {
                    default: withCtx(() => [
                      createVNode(QItem, { tag: "label" }, {
                        default: withCtx(() => [
                          createVNode(QItemSection, { avatar: "" }, {
                            default: withCtx(() => [
                              createVNode(QSkeleton, {
                                type: "QCheckbox",
                                size: "20px"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(QItemSection, null, {
                            default: withCtx(() => [
                              createVNode(QSkeleton, { type: "text" }),
                              createVNode(QSkeleton, { type: "text" })
                            ]),
                            _: 1
                          }),
                          createVNode(QItemSection, { side: "" }, {
                            default: withCtx(() => [
                              createVNode(QSkeleton, {
                                type: "circle",
                                size: "20px",
                                class: "q-mb-sm"
                              }),
                              createVNode(QSkeleton, {
                                type: "circle",
                                size: "20px"
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
              }),
              createVNode(QSpace, { class: "q-pa-xs" })
            ], 64);
          }), 64))
        ])) : (openBlock(), createElementBlock("div", _hoisted_2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($data.data, (items) => {
            return openBlock(), createElementBlock(Fragment, {
              key: items.address_uuid
            }, [
              createVNode(QCard, {
                flat: "",
                class: "no-border-radius"
              }, {
                default: withCtx(() => [
                  createVNode(QList, null, {
                    default: withCtx(() => [
                      createVNode(QItem, {
                        tag: "label",
                        onClick: withModifiers(($event) => $options.setAddress(items), ["stop"]),
                        active: $options.isSelected(items.place_id)
                      }, {
                        default: withCtx(() => [
                          createVNode(QItemSection, { avatar: "" }, {
                            default: withCtx(() => [
                              createVNode(QRadio, {
                                modelValue: $data.address_uuid,
                                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.address_uuid = $event),
                                val: items.place_id
                              }, null, 8, ["modelValue", "val"])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(QItemSection, null, {
                            default: withCtx(() => [
                              createVNode(QItemLabel, {
                                lines: "2",
                                class: "font12 text-weight-bold"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(items.address.formatted_address), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(QItemLabel, {
                                caption: "",
                                class: "font12 text-weight-medium"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(items.address.address2), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(QItemLabel, {
                                caption: "",
                                class: "font11 text-weight-medium"
                              }, {
                                default: withCtx(() => [
                                  _hoisted_3
                                ]),
                                _: 1
                              })
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(QItemSection, { side: "" }, {
                            default: withCtx(() => [
                              createVNode(QBtn, {
                                icon: "eva-edit-2-outline",
                                dense: "",
                                unelevated: "",
                                rounded: "",
                                size: "sm",
                                class: "q-mb-sm",
                                onClick: withModifiers(($event) => $options.editAddress(items), ["stop"])
                              }, null, 8, ["onClick"]),
                              createVNode(QBtn, {
                                icon: "eva-trash-2-outline",
                                dense: "",
                                unelevated: "",
                                rounded: "",
                                size: "sm",
                                onClick: withModifiers(($event) => $options.deleteConfirm(items.address_uuid), ["stop"]),
                                disabled: $options.isSelected(items.place_id)
                              }, null, 8, ["onClick", "disabled"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1032, ["onClick", "active"])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              createVNode(QSpace, { class: "q-pa-xs" })
            ], 64);
          }), 128))
        ])),
        createVNode(QInnerLoading, {
          showing: $data.locate_loading,
          size: "md",
          color: "primary"
        }, null, 8, ["showing"]),
        createVNode(_component_AddressDetails, {
          ref: "address_details",
          onAfterSaveaddress: $options.afterSaveaddress
        }, null, 8, ["onAfterSaveaddress"])
      ]),
      _: 1
    })
  ], 64);
}
var AddressSelect = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "AddressSelect.vue"]]);
export { AddressSelect as default };
//# sourceMappingURL=data:application/json;base64,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Q0FDQSxNQUFLO0FBQUEsZ0NBQ0wsT0FBTTtBQUFBLGdDQUNMLFNBQUtHLDBCQUFPLFNBQVcsWUFBQyxLQUFLO0FBQUE7OEJBRWhDSCxZQVFFO0FBQUEsZ0NBUEEsTUFBSztBQUFBLGdDQUNMO0FBQUEsZ0NBQ0E7QUFBQSxnQ0FDQTtBQUFBLGdDQUNBLE1BQUs7QUFBQSxnQ0FDSixTQUFZRyxpREFBYyxNQUFNLFlBQVk7QUFBQSxnQ0FDNUMsVUFBVSxvQkFBVyxNQUFNLFFBQVE7QUFBQTs7Ozs7Ozs7Ozs7OztjQU05Q0gsWUFBbUMsMkJBQXJCO0FBQUE7OztRQUlsQkEsWUFBdUU7QUFBQSxVQUFyRCxTQUFTLE1BQWM7QUFBQSxVQUFFLE1BQUs7QUFBQSxVQUFLLE9BQU07QUFBQTtRQUUzREEsWUFHRTtBQUFBLFVBRkEsS0FBSTtBQUFBLFVBQ0gsb0JBQW1CLFNBQWdCO0FBQUEiLCJuYW1lcyI6WyJfY3JlYXRlVk5vZGUiLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX0ZyYWdtZW50IiwiX3dpdGhNb2RpZmllcnMiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvQWRkcmVzcy9BZGRyZXNzU2VsZWN0LnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLWhlYWRlciByZXZlYWwgcmV2ZWFsLW9mZnNldD1cIjUwXCIgY2xhc3M9XCJiZy13aGl0ZVwiPlxuICAgIDxxLXRvb2xiYXI+XG4gICAgICA8cS1idG5cbiAgICAgICAgQGNsaWNrPVwiJHJvdXRlci5iYWNrKClcIlxuICAgICAgICBmbGF0XG4gICAgICAgIHJvdW5kXG4gICAgICAgIGRlbnNlXG4gICAgICAgIGljb249XCJhcnJvd19iYWNrXCJcbiAgICAgICAgY29sb3I9XCJkYXJrXCJcbiAgICAgIC8+XG4gICAgICA8cS10b29sYmFyLXRpdGxlIGNsYXNzPVwidGV4dC1kYXJrIHRleHQtY2VudGVyIHRleHQtd2VpZ2h0LWJvbGRcIj5cbiAgICAgICAge3sgJHQoXCJEZWxpdmVyeSBBZGRyZXNzXCIpIH19XG4gICAgICA8L3EtdG9vbGJhci10aXRsZT5cbiAgICA8L3EtdG9vbGJhcj5cbiAgPC9xLWhlYWRlcj5cbiAgPCEtLSBiYW5uZXIgLS0+XG5cbiAgPHEtcGFnZSBwYWRkaW5nIGNsYXNzPVwiYmctZ3JleS0yXCI+XG4gICAgPHEtc3BhY2UgY2xhc3M9XCJxLXBhLXhzXCI+PC9xLXNwYWNlPlxuXG4gICAgPHEtY2FyZCBmbGF0IGNsYXNzPVwibm8tYm9yZGVyLXJhZGl1c1wiPlxuICAgICAgPHEtbGlzdD5cbiAgICAgICAgPHEtaXRlbSB0YWc9XCJsYWJlbFwiIEBjbGljaz1cImxvY2F0ZUxvY2F0aW9uXCI+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICAgIDxxLWF2YXRhclxuICAgICAgICAgICAgICByb3VuZGVkXG4gICAgICAgICAgICAgIGNvbG9yPVwiYW1iZXItMlwiXG4gICAgICAgICAgICAgIHRleHQtY29sb3I9XCJvcmFuZ2UtNVwiXG4gICAgICAgICAgICAgIGljb249XCJldmEtbmF2aWdhdGlvbi0yLW91dGxpbmVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgbGluZXM9XCIyXCIgY2xhc3M9XCJmb250MTIgdGV4dC13ZWlnaHQtYm9sZFwiPnt7XG4gICAgICAgICAgICAgICR0KFwiU2hhcmUgeW91ciBsb2NhdGlvblwiKVxuICAgICAgICAgICAgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbiBjbGFzcz1cImZvbnQxMiB0ZXh0LXdlaWdodC1tZWRpdW1cIj57e1xuICAgICAgICAgICAgICAkdChcIkVuYWJsZWQgbG9jYXRpb24gc2VydmljZXNcIilcbiAgICAgICAgICAgIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZT5cbiAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICByb3VuZFxuICAgICAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgICAgIHRleHQtY29sb3I9XCJkYXJrXCJcbiAgICAgICAgICAgICAgaWNvbj1cImNoZXZyb25fcmlnaHRcIlxuICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8L3EtaXRlbT5cbiAgICAgIDwvcS1saXN0PlxuICAgIDwvcS1jYXJkPlxuICAgIDxxLXNwYWNlIGNsYXNzPVwicS1wYS14c1wiPjwvcS1zcGFjZT5cblxuICAgIDxxLWNhcmQgZmxhdCBjbGFzcz1cIm5vLWJvcmRlci1yYWRpdXNcIj5cbiAgICAgIDxxLWxpc3Q+XG4gICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICB0YWc9XCJsYWJlbFwiXG4gICAgICAgICAgOnRvPVwie1xuICAgICAgICAgICAgcGF0aDogJy9sb2NhdGlvbi9tYXAnLFxuICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgdXJsOiAnL2FkZHJlc3Mvc2VsZWN0P3VybD0nICsgdGhpcy5iYWNrX3VybCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfVwiXG4gICAgICAgID5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgICAgPHEtYXZhdGFyXG4gICAgICAgICAgICAgIHJvdW5kZWRcbiAgICAgICAgICAgICAgY29sb3I9XCJibHVlLTJcIlxuICAgICAgICAgICAgICB0ZXh0LWNvbG9yPVwiZGFya1wiXG4gICAgICAgICAgICAgIGljb249XCJsYXMgbGEtbWFwLW1hcmtlZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBsaW5lcz1cIjJcIiBjbGFzcz1cImZvbnQxMiB0ZXh0LXdlaWdodC1ib2xkXCI+e3tcbiAgICAgICAgICAgICAgJHQoXCJDaG9vc2UgZnJvbSBNYXBcIilcbiAgICAgICAgICAgIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24gY2xhc3M9XCJmb250MTIgdGV4dC13ZWlnaHQtbWVkaXVtXCI+e3tcbiAgICAgICAgICAgICAgJHQoXCJzZWxlY3QgeW91ciBhZGRyZXNzIGZyb20gbWFwXCIpXG4gICAgICAgICAgICB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgcm91bmRcbiAgICAgICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgICAgICB0ZXh0LWNvbG9yPVwiZGFya1wiXG4gICAgICAgICAgICAgIGljb249XCJjaGV2cm9uX3JpZ2h0XCJcbiAgICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPC9xLWl0ZW0+XG4gICAgICA8L3EtbGlzdD5cbiAgICA8L3EtY2FyZD5cbiAgICA8cS1zcGFjZSBjbGFzcz1cInEtcGEteHNcIj48L3Etc3BhY2U+XG5cbiAgICA8ZGl2IHYtaWY9XCJsb2FkaW5nXCI+XG4gICAgICA8dGVtcGxhdGUgdi1mb3I9XCJpIGluIDZcIiA6a2V5PVwiaVwiPlxuICAgICAgICA8cS1jYXJkIGZsYXQgY2xhc3M9XCJuby1ib3JkZXItcmFkaXVzXCI+XG4gICAgICAgICAgPHEtbGlzdD5cbiAgICAgICAgICAgIDxxLWl0ZW0gdGFnPVwibGFiZWxcIj5cbiAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICAgICAgICA8cS1za2VsZXRvbiB0eXBlPVwiUUNoZWNrYm94XCIgc2l6ZT1cIjIwcHhcIiAvPlxuICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHEtc2tlbGV0b24gdHlwZT1cInRleHRcIiAvPlxuICAgICAgICAgICAgICAgIDxxLXNrZWxldG9uIHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICAgICAgICAgICAgPHEtc2tlbGV0b24gdHlwZT1cImNpcmNsZVwiIHNpemU9XCIyMHB4XCIgY2xhc3M9XCJxLW1iLXNtXCIgLz5cbiAgICAgICAgICAgICAgICA8cS1za2VsZXRvbiB0eXBlPVwiY2lyY2xlXCIgc2l6ZT1cIjIwcHhcIiAvPlxuICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgPC9xLWxpc3Q+XG4gICAgICAgIDwvcS1jYXJkPlxuICAgICAgICA8cS1zcGFjZSBjbGFzcz1cInEtcGEteHNcIj48L3Etc3BhY2U+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiB2LWVsc2U+XG4gICAgICA8dGVtcGxhdGUgdi1mb3I9XCJpdGVtcyBpbiBkYXRhXCIgOmtleT1cIml0ZW1zLmFkZHJlc3NfdXVpZFwiPlxuICAgICAgICA8cS1jYXJkIGZsYXQgY2xhc3M9XCJuby1ib3JkZXItcmFkaXVzXCI+XG4gICAgICAgICAgPHEtbGlzdD5cbiAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgdGFnPVwibGFiZWxcIlxuICAgICAgICAgICAgICBAY2xpY2suc3RvcD1cInNldEFkZHJlc3MoaXRlbXMpXCJcbiAgICAgICAgICAgICAgOmFjdGl2ZT1cImlzU2VsZWN0ZWQoaXRlbXMucGxhY2VfaWQpXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICAgICAgICA8cS1yYWRpbyB2LW1vZGVsPVwiYWRkcmVzc191dWlkXCIgOnZhbD1cIml0ZW1zLnBsYWNlX2lkXCIgLz5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgbGluZXM9XCIyXCIgY2xhc3M9XCJmb250MTIgdGV4dC13ZWlnaHQtYm9sZFwiPnt7XG4gICAgICAgICAgICAgICAgICBpdGVtcy5hZGRyZXNzLmZvcm1hdHRlZF9hZGRyZXNzXG4gICAgICAgICAgICAgICAgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24gY2xhc3M9XCJmb250MTIgdGV4dC13ZWlnaHQtbWVkaXVtXCI+e3tcbiAgICAgICAgICAgICAgICAgIGl0ZW1zLmFkZHJlc3MuYWRkcmVzczJcbiAgICAgICAgICAgICAgICB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbiBjbGFzcz1cImZvbnQxMSB0ZXh0LXdlaWdodC1tZWRpdW1cIlxuICAgICAgICAgICAgICAgICAgPkhvbWU8L3EtaXRlbS1sYWJlbFxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgICBpY29uPVwiZXZhLWVkaXQtMi1vdXRsaW5lXCJcbiAgICAgICAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgICAgICAgICByb3VuZGVkXG4gICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJxLW1iLXNtXCJcbiAgICAgICAgICAgICAgICAgIEBjbGljay5zdG9wPVwiZWRpdEFkZHJlc3MoaXRlbXMpXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICAgICAgaWNvbj1cImV2YS10cmFzaC0yLW91dGxpbmVcIlxuICAgICAgICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICAgICAgICAgIHJvdW5kZWRcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICBAY2xpY2suc3RvcD1cImRlbGV0ZUNvbmZpcm0oaXRlbXMuYWRkcmVzc191dWlkKVwiXG4gICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJpc1NlbGVjdGVkKGl0ZW1zLnBsYWNlX2lkKVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgIDwvcS1saXN0PlxuICAgICAgICA8L3EtY2FyZD5cbiAgICAgICAgPHEtc3BhY2UgY2xhc3M9XCJxLXBhLXhzXCI+PC9xLXNwYWNlPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L2Rpdj5cblxuICAgIDxxLWlubmVyLWxvYWRpbmcgOnNob3dpbmc9XCJsb2NhdGVfbG9hZGluZ1wiIHNpemU9XCJtZFwiIGNvbG9yPVwicHJpbWFyeVwiIC8+XG5cbiAgICA8QWRkcmVzc0RldGFpbHNcbiAgICAgIHJlZj1cImFkZHJlc3NfZGV0YWlsc1wiXG4gICAgICBAYWZ0ZXItc2F2ZWFkZHJlc3M9XCJhZnRlclNhdmVhZGRyZXNzXCJcbiAgICAvPlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgQVBJaW50ZXJmYWNlIGZyb20gXCJzcmMvYXBpL0FQSWludGVyZmFjZVwiO1xuaW1wb3J0IGF1dGggZnJvbSBcInNyYy9hcGkvYXV0aFwiO1xuaW1wb3J0IHsgZGVmaW5lQXN5bmNDb21wb25lbnQgfSBmcm9tIFwidnVlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJBZGRyZXNzU2VsZWN0XCIsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBBZGRyZXNzRGV0YWlsczogZGVmaW5lQXN5bmNDb21wb25lbnQoKCkgPT5cbiAgICAgIGltcG9ydChcImNvbXBvbmVudHMvQWRkcmVzc0RldGFpbHMudnVlXCIpXG4gICAgKSxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbW9kYWw6IGZhbHNlLFxuICAgICAgYmFja191cmw6IFwiXCIsXG4gICAgICBkYXRhOiBbXSxcbiAgICAgIGFkZHJlc3NfdXVpZDogXCJcIixcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgbG9jYXRlX2xvYWRpbmc6IGZhbHNlLFxuICAgICAgbG9jYXRpb25fZGF0YTogW10sXG4gICAgfTtcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmJhY2tfdXJsID0gdGhpcy4kcm91dGUucXVlcnkudXJsO1xuICAgIGlmIChBUElpbnRlcmZhY2UuZW1wdHkodGhpcy5iYWNrX3VybCkpIHtcbiAgICAgIHRoaXMuYmFja191cmwgPSBcIi9ob21lXCI7XG4gICAgfVxuICAgIGlmIChhdXRoLmF1dGhlbnRpY2F0ZWQoKSkge1xuICAgICAgdGhpcy5nZXRBZGRyZXNzZXMoKTtcbiAgICB9XG5cbiAgICBjb25zdCBwbGFjZUlEID0gQVBJaW50ZXJmYWNlLmdldFN0b3JhZ2UoXCJwbGFjZV9pZFwiKTtcbiAgICBpZiAodHlwZW9mIHBsYWNlSUQgIT09IFwidW5kZWZpbmVkXCIgJiYgcGxhY2VJRCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5hZGRyZXNzX3V1aWQgPSBwbGFjZUlEO1xuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHt9LFxuICBtZXRob2RzOiB7XG4gICAgZ2V0QWRkcmVzc2VzKCkge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIEFQSWludGVyZmFjZS5nZXRBZGRyZXNzZXMoKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuZGF0YSA9IGRhdGEuZGV0YWlscy5kYXRhO1xuICAgICAgICB9KVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIC8vXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgYWZ0ZXJTZWxlY3RhZGRyZXNzKGRhdGEpIHtcbiAgICAgIGNvbnNvbGUuZGVidWcoZGF0YSk7XG4gICAgfSxcbiAgICByZW1vdmVGcm9tTGlzdChhZGRyZXNzVXVpZCkge1xuICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5kYXRhKS5mb3JFYWNoKChba2V5LCBpdGVtc10pID0+IHtcbiAgICAgICAgaWYgKGl0ZW1zLmFkZHJlc3NfdXVpZCA9PT0gYWRkcmVzc1V1aWQpIHtcbiAgICAgICAgICBjb25zb2xlLmRlYnVnKGtleSk7XG4gICAgICAgICAgdGhpcy5kYXRhLnNwbGljZShrZXksIDEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGRlbGV0ZUNvbmZpcm0oYWRkcmVzc1V1aWQpIHtcbiAgICAgIHRoaXMuJHFcbiAgICAgICAgLmRpYWxvZyh7XG4gICAgICAgICAgdGl0bGU6IFwiQ29uZmlybVwiLFxuICAgICAgICAgIG1lc3NhZ2U6IFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIERlbGV0ZT9cIixcbiAgICAgICAgICBwZXJzaXN0ZW50OiB0cnVlLFxuICAgICAgICAgIG9rOiB7XG4gICAgICAgICAgICB1bmVsZXZhdGVkOiB0cnVlLFxuICAgICAgICAgICAgY29sb3I6IFwid2FybmluZ1wiLFxuICAgICAgICAgICAgcm91bmRlZDogdHJ1ZSxcbiAgICAgICAgICAgIFwidGV4dC1jb2xvclwiOiBcImJsYWNrXCIsXG4gICAgICAgICAgICBzaXplOiBcIm1kXCIsXG4gICAgICAgICAgICBsYWJlbDogXCJZZXNcIixcbiAgICAgICAgICAgIFwibm8tY2Fwc1wiOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY2FuY2VsOiB7XG4gICAgICAgICAgICB1bmVsZXZhdGVkOiB0cnVlLFxuICAgICAgICAgICAgcm91bmRlZDogdHJ1ZSxcbiAgICAgICAgICAgIGNvbG9yOiBcImdyZXktM1wiLFxuICAgICAgICAgICAgXCJ0ZXh0LWNvbG9yXCI6IFwiYmxhY2tcIixcbiAgICAgICAgICAgIHNpemU6IFwibWRcIixcbiAgICAgICAgICAgIGxhYmVsOiBcIkNhbmNlbFwiLFxuICAgICAgICAgICAgXCJuby1jYXBzXCI6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgLm9uT2soKCkgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5kZWxldGVBZGRyZXNzKGFkZHJlc3NVdWlkKVxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5yZW1vdmVGcm9tTGlzdChhZGRyZXNzVXVpZCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICBBUElpbnRlcmZhY2Uubm90aWZ5KFwibmVnYXRpdmVcIiwgZXJyb3IsIFwiZXJyb3Jfb3V0bGluZVwiLCB0aGlzLiRxKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge30pO1xuICAgICAgICB9KVxuICAgICAgICAub25PaygoKSA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJz4+Pj4gc2Vjb25kIE9LIGNhdGNoZXInKVxuICAgICAgICB9KVxuICAgICAgICAub25DYW5jZWwoKCkgPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCc+Pj4+IENhbmNlbCcpXG4gICAgICAgIH0pXG4gICAgICAgIC5vbkRpc21pc3MoKCkgPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdJIGFtIHRyaWdnZXJlZCBvbiBib3RoIE9LIGFuZCBDYW5jZWwnKVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGxvY2F0ZUxvY2F0aW9uKCkge1xuICAgICAgaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgICAgICB0aGlzLmxvY2F0ZV9sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihcbiAgICAgICAgICAocG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9jYXRlX2xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucmV2ZXJzZUdlb2NvZGluZyhcbiAgICAgICAgICAgICAgcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlLFxuICAgICAgICAgICAgICBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgfSxcbiAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9jYXRlX2xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxvY2F0ZV9sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXG4gICAgICAgICAgXCJuZWdhdGl2ZVwiLFxuICAgICAgICAgIFwiQnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgR2VvbG9jYXRpb25cIixcbiAgICAgICAgICBcImVycm9yX291dGxpbmVcIixcbiAgICAgICAgICB0aGlzLiRxXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSxcbiAgICByZXZlcnNlR2VvY29kaW5nKGxhdCwgbG5nKSB7XG4gICAgICB0aGlzLmxvY2F0ZV9sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIEFQSWludGVyZmFjZS5yZXZlcnNlR2VvY29kaW5nKGxhdCwgbG5nKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHR5cGVvZiBkYXRhLmRldGFpbHMuZGF0YS5hZGRyZXNzICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgICAgICBkYXRhLmRldGFpbHMuZGF0YS5hZGRyZXNzICE9PSBudWxsXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICAvLyBBUElpbnRlcmZhY2Uuc2V0U3RvcmFnZSgncGxhY2VfZGF0YScsIGRhdGEuZGV0YWlscy5kYXRhKVxuICAgICAgICAgICAgLy8gQVBJaW50ZXJmYWNlLnNldFN0b3JhZ2UoJ3BsYWNlX2lkJywgZGF0YS5kZXRhaWxzLmRhdGEucGxhY2VfaWQpXG4gICAgICAgICAgICB0aGlzLnNldEFkZHJlc3MoZGF0YS5kZXRhaWxzLmRhdGEpO1xuICAgICAgICAgICAgdGhpcy5zYXZlQWRkcmVzcyhkYXRhLmRldGFpbHMuZGF0YS5wbGFjZV9pZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXG4gICAgICAgICAgICAgIFwibmVnYXRpdmVcIixcbiAgICAgICAgICAgICAgXCJUaGlzIGxvY2F0aW9uIGlzIG5vdCBhdmFpbGFibGVcIixcbiAgICAgICAgICAgICAgXCJlcnJvcl9vdXRsaW5lXCIsXG4gICAgICAgICAgICAgIHRoaXMuJHFcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgQVBJaW50ZXJmYWNlLm5vdGlmeShcIm5lZ2F0aXZlXCIsIGVycm9yLCBcImVycm9yX291dGxpbmVcIiwgdGhpcy4kcSk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2NhdGVfbG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHNldEFkZHJlc3MoZGF0YSkge1xuICAgICAgQVBJaW50ZXJmYWNlLnNldFN0b3JhZ2UoXCJwbGFjZV9kYXRhXCIsIGRhdGEpO1xuICAgICAgQVBJaW50ZXJmYWNlLnNldFN0b3JhZ2UoXCJwbGFjZV9pZFwiLCBkYXRhLnBsYWNlX2lkKTtcbiAgICAgIHRoaXMuYmFja1BhZ2UoKTtcbiAgICB9LFxuICAgIGJhY2tQYWdlKCkge1xuICAgICAgaWYgKCFBUElpbnRlcmZhY2UuZW1wdHkodGhpcy5iYWNrX3VybCkpIHtcbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2godGhpcy5iYWNrX3VybCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaChcIi9ob21lXCIpO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2F2ZUFkZHJlc3MocGxhY2VJRCkge1xuICAgICAgaWYgKGF1dGguYXV0aGVudGljYXRlZCgpKSB7XG4gICAgICAgIEFQSWludGVyZmFjZS5TYXZlUGxhY2VCeUlEKHBsYWNlSUQpXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgfSlcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7fSlcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge30pO1xuICAgICAgfVxuICAgIH0sXG4gICAgaXNTZWxlY3RlZChwbGFjZUlEKSB7XG4gICAgICBpZiAodGhpcy5hZGRyZXNzX3V1aWQgPT09IHBsYWNlSUQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICBlZGl0QWRkcmVzcyhkYXRhKSB7XG4gICAgICB0aGlzLiRyZWZzLmFkZHJlc3NfZGV0YWlscy5sb2NhdGlvbl9kYXRhID0gZGF0YTtcbiAgICAgIHRoaXMuJHJlZnMuYWRkcmVzc19kZXRhaWxzLnNob3dNb2RhbCgpO1xuICAgICAgLy8gdGhpcy4kcm91dGVyLnB1c2goe1xuICAgICAgLy8gICBwYXRoOiAnL2FjY291bnQvYWRkcmVzcycsXG4gICAgICAvLyAgIHF1ZXJ5OiB7XG4gICAgICAvLyAgICAgdXVpZDogYWRkcmVzc1V1aWQsXG4gICAgICAvLyAgICAgdXJsOiAnL2FkZHJlc3Mvc2VsZWN0P3VybD0nICsgdGhpcy5iYWNrX3VybFxuICAgICAgLy8gICB9XG4gICAgICAvLyB9KVxuICAgIH0sXG4gICAgYWZ0ZXJTYXZlYWRkcmVzcygpIHtcbiAgICAgIGlmIChhdXRoLmF1dGhlbnRpY2F0ZWQoKSkge1xuICAgICAgICB0aGlzLmdldEFkZHJlc3NlcygpO1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iXSwiZmlsZSI6ImFzc2V0cy9BZGRyZXNzU2VsZWN0LjU4NWMwODk1LmpzIn0=
