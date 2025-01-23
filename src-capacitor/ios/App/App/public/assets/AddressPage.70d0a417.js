import { v as createComponent, r as ref, c as computed, bG as injectProp, Q as nextTick, aU as isDeepEqual, h, g as getCurrentInstance, Y as QBtn, _ as _export_sfc, p as openBlock, V as createElementBlock, f as createVNode, t as withCtx, F as Fragment, a8 as QCard, a9 as QCardSection, ac as QItem, ad as QItemSection, U as createBaseVNode, a6 as createTextVNode, Z as toDisplayString, at as QIcon, aY as QInput, bL as withKeys, bE as QCardActions } from "./index.61ed5618.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QBadge } from "./QBadge.6d32ed43.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QSpace } from "./QSpace.f164c087.js";
import { Q as QItemLabel } from "./QItemLabel.a9365c5b.js";
import { Q as QMenu } from "./QMenu.8e482cd8.js";
import { Q as QList } from "./QList.b69a7e5b.js";
import { Q as QSelect } from "./QSelect.311187d6.js";
import { Q as QBtnToggle } from "./QBtnToggle.6ffa195b.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import "./QResizeObserver.d08dce3c.js";
import "./selection.50b4cb0c.js";
import "./QChip.f183a4f1.js";
import "./rtl.f3ed811c.js";
import "./format.7f7370d3.js";
import "./QBtnGroup.abc2d1c7.js";
function cloneDeep(data, hash = /* @__PURE__ */ new WeakMap()) {
  if (Object(data) !== data)
    return data;
  if (hash.has(data))
    return hash.get(data);
  const result = data instanceof Date ? new Date(data) : data instanceof RegExp ? new RegExp(data.source, data.flags) : data instanceof Set ? /* @__PURE__ */ new Set() : data instanceof Map ? /* @__PURE__ */ new Map() : typeof data.constructor !== "function" ? /* @__PURE__ */ Object.create(null) : data.prototype !== void 0 && typeof data.prototype.constructor === "function" ? data : new data.constructor();
  if (typeof data.constructor === "function" && typeof data.valueOf === "function") {
    const val = data.valueOf();
    if (Object(val) !== val) {
      const result2 = new data.constructor(val);
      hash.set(data, result2);
      return result2;
    }
  }
  hash.set(data, result);
  if (data instanceof Set) {
    data.forEach((val) => {
      result.add(cloneDeep(val, hash));
    });
  } else if (data instanceof Map) {
    data.forEach((val, key) => {
      result.set(key, cloneDeep(val, hash));
    });
  }
  return Object.assign(
    result,
    ...Object.keys(data).map((key) => ({ [key]: cloneDeep(data[key], hash) }))
  );
}
var QPopupEdit = createComponent({
  name: "QPopupEdit",
  props: {
    modelValue: {
      required: true
    },
    title: String,
    buttons: Boolean,
    labelSet: String,
    labelCancel: String,
    color: {
      type: String,
      default: "primary"
    },
    validate: {
      type: Function,
      default: () => true
    },
    autoSave: Boolean,
    cover: {
      type: Boolean,
      default: true
    },
    disable: Boolean
  },
  emits: [
    "update:modelValue",
    "save",
    "cancel",
    "beforeShow",
    "show",
    "beforeHide",
    "hide"
  ],
  setup(props, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;
    const menuRef = ref(null);
    const initialValue = ref("");
    const currentModel = ref("");
    let validated = false;
    const scope = computed(() => {
      return injectProp({
        initialValue: initialValue.value,
        validate: props.validate,
        set,
        cancel,
        updatePosition
      }, "value", () => currentModel.value, (val) => {
        currentModel.value = val;
      });
    });
    function set() {
      if (props.validate(currentModel.value) === false) {
        return;
      }
      if (hasModelChanged() === true) {
        emit("save", currentModel.value, initialValue.value);
        emit("update:modelValue", currentModel.value);
      }
      closeMenu();
    }
    function cancel() {
      if (hasModelChanged() === true) {
        emit("cancel", currentModel.value, initialValue.value);
      }
      closeMenu();
    }
    function updatePosition() {
      nextTick(() => {
        menuRef.value.updatePosition();
      });
    }
    function hasModelChanged() {
      return isDeepEqual(currentModel.value, initialValue.value) === false;
    }
    function closeMenu() {
      validated = true;
      menuRef.value.hide();
    }
    function onBeforeShow() {
      validated = false;
      initialValue.value = cloneDeep(props.modelValue);
      currentModel.value = cloneDeep(props.modelValue);
      emit("beforeShow");
    }
    function onShow() {
      emit("show");
    }
    function onBeforeHide() {
      if (validated === false && hasModelChanged() === true) {
        if (props.autoSave === true && props.validate(currentModel.value) === true) {
          emit("save", currentModel.value, initialValue.value);
          emit("update:modelValue", currentModel.value);
        } else {
          emit("cancel", currentModel.value, initialValue.value);
        }
      }
      emit("beforeHide");
    }
    function onHide() {
      emit("hide");
    }
    function getContent() {
      const child = slots.default !== void 0 ? [].concat(slots.default(scope.value)) : [];
      props.title && child.unshift(
        h("div", { class: "q-dialog__title q-mt-sm q-mb-sm" }, props.title)
      );
      props.buttons === true && child.push(
        h("div", { class: "q-popup-edit__buttons row justify-center no-wrap" }, [
          h(QBtn, {
            flat: true,
            color: props.color,
            label: props.labelCancel || $q.lang.label.cancel,
            onClick: cancel
          }),
          h(QBtn, {
            flat: true,
            color: props.color,
            label: props.labelSet || $q.lang.label.set,
            onClick: set
          })
        ])
      );
      return child;
    }
    Object.assign(proxy, {
      set,
      cancel,
      show(e) {
        menuRef.value !== null && menuRef.value.show(e);
      },
      hide(e) {
        menuRef.value !== null && menuRef.value.hide(e);
      },
      updatePosition
    });
    return () => {
      if (props.disable === true)
        return;
      return h(QMenu, {
        ref: menuRef,
        class: "q-popup-edit",
        cover: props.cover,
        onBeforeShow,
        onShow,
        onBeforeHide,
        onHide,
        onEscapeKey: cancel
      }, getContent);
    };
  }
});
const _sfc_main = {
  name: "PageName",
  data() {
    return {
      back_url: "",
      address_uuid: "",
      location_name: "",
      delivery_options: "",
      delivery_instructions: "",
      address_label: 1,
      edit_address: "Guadalupe nuevo makati city",
      options: ["leave at my door", "hand it to me", "meet outside"]
    };
  },
  mounted() {
    this.back_url = this.$route.query.url;
    this.address_uuid = this.$route.query.uuid;
  }
};
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" Address ");
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "map bg-grey-2 rounded-10 q-mb-md" }, null, -1);
const _hoisted_3 = /* @__PURE__ */ createTextVNode("Quezon City");
const _hoisted_4 = { class: "cursor-pointer" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6" }, "Address label", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
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
                _hoisted_1
              ]),
              _: 1
            }),
            createVNode(QBtn, {
              to: "/cart",
              color: "white",
              rounded: "",
              unelevated: "",
              "text-color": "dark",
              icon: "eva-shopping-bag-outline",
              dense: "",
              "no-caps": ""
            }, {
              default: withCtx(() => [
                createVNode(QBadge, {
                  floating: "",
                  color: "primary2",
                  rounded: ""
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
    createVNode(QPage, {
      padding: "",
      class: "bg-grey-2"
    }, {
      default: withCtx(() => [
        createVNode(QSpace, { class: "q-pa-xs" }),
        createVNode(QCard, {
          flat: "",
          class: "radius8"
        }, {
          default: withCtx(() => [
            createVNode(QCardSection, null, {
              default: withCtx(() => [
                _hoisted_2,
                createVNode(QList, { class: "qlist-no-padding q-mb-md" }, {
                  default: withCtx(() => [
                    createVNode(QItem, null, {
                      default: withCtx(() => [
                        createVNode(QItemSection, null, {
                          default: withCtx(() => [
                            createVNode(QItemLabel, {
                              lines: "2",
                              class: "font12 text-weight-bold"
                            }, {
                              default: withCtx(() => [
                                _hoisted_3
                              ]),
                              _: 1
                            }),
                            createVNode(QItemLabel, {
                              caption: "",
                              class: "font12 text-weight-medium"
                            }, {
                              default: withCtx(() => [
                                createBaseVNode("div", _hoisted_4, [
                                  createTextVNode(toDisplayString($data.edit_address) + " ", 1),
                                  createVNode(QIcon, { name: "eva-edit-outline" }),
                                  createVNode(QPopupEdit, {
                                    modelValue: $data.edit_address,
                                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.edit_address = $event),
                                    "auto-save": ""
                                  }, {
                                    default: withCtx((scope) => [
                                      createVNode(QInput, {
                                        modelValue: scope.value,
                                        "onUpdate:modelValue": ($event) => scope.value = $event,
                                        dense: "",
                                        autofocus: "",
                                        counter: "",
                                        onKeyup: withKeys(scope.set, ["enter"])
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"])
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue"])
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(QItemSection, { side: "" }, {
                          default: withCtx(() => [
                            createVNode(QBtn, {
                              unelevated: "",
                              color: "primary",
                              "text-color": "dark",
                              dense: "",
                              label: "Adjust Pin",
                              "no-caps": "",
                              class: "q-pl-sm q-pr-sm"
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
                createVNode(QInput, {
                  modelValue: $data.location_name,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.location_name = $event),
                  autogrow: "",
                  dense: "",
                  outlined: "",
                  color: "dark",
                  "bg-color": "white",
                  borderless: "",
                  label: "Aparment, suite or floor"
                }, null, 8, ["modelValue"]),
                createVNode(QSpace, { class: "q-pa-sm" }),
                createVNode(QSelect, {
                  outlined: "",
                  modelValue: $data.delivery_options,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.delivery_options = $event),
                  options: $data.options,
                  label: "Delivery Options",
                  dense: ""
                }, null, 8, ["modelValue", "options"]),
                createVNode(QSpace, { class: "q-pa-sm" }),
                createVNode(QInput, {
                  modelValue: $data.delivery_instructions,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.delivery_instructions = $event),
                  autogrow: "",
                  dense: "",
                  outlined: "",
                  color: "dark",
                  "bg-color": "white",
                  borderless: "",
                  label: "Add delivery instructions"
                }, null, 8, ["modelValue"]),
                _hoisted_5,
                createVNode(QBtnToggle, {
                  modelValue: $data.address_label,
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.address_label = $event),
                  "no-caps": "",
                  rounded: "",
                  unelevated: "",
                  "toggle-color": "dark",
                  "toggle-text-color": "white",
                  color: "grey-2",
                  "text-color": "dark",
                  size: "12px",
                  class: "font11 bg-grey-2 q-mb-md text-weight-600",
                  spread: "",
                  options: [
                    { label: "Home", value: 1 },
                    { label: "Work", value: 2 },
                    { label: "School", value: 3 },
                    { label: "other", value: "other" }
                  ]
                }, null, 8, ["modelValue"]),
                createBaseVNode("pre", null, toDisplayString($data.back_url), 1),
                createBaseVNode("pre", null, toDisplayString($data.address_uuid), 1)
              ]),
              _: 1
            }),
            createVNode(QCardActions, {
              vertical: "",
              align: "center"
            }, {
              default: withCtx(() => [
                createVNode(QBtn, {
                  label: "Save Address",
                  unelevated: "",
                  color: "primary",
                  "text-color": "dark",
                  "no-caps": "",
                  class: "full-width"
                }),
                createVNode(QBtn, {
                  label: "Cancel",
                  flat: "",
                  "text-color": "amber-14",
                  "no-caps": "",
                  class: "full-width"
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
  ], 64);
}
var AddressPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "AddressPage.vue"]]);
export { AddressPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkcmVzc1BhZ2UuNzBkMGE0MTcuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL3V0aWxzL2Nsb25lL2Nsb25lLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9wb3B1cC1lZGl0L1FQb3B1cEVkaXQuanMiLCIuLi8uLi8uLi9zcmMvcGFnZXMvQWNjb3VudC9BZGRyZXNzUGFnZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYWRhcHRlZCBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80MDI5NDA1OFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbG9uZURlZXAgKGRhdGEsIGhhc2ggPSBuZXcgV2Vha01hcCgpKSB7XG4gIGlmIChPYmplY3QoZGF0YSkgIT09IGRhdGEpIHJldHVybiBkYXRhXG4gIGlmIChoYXNoLmhhcyhkYXRhKSkgcmV0dXJuIGhhc2guZ2V0KGRhdGEpXG5cbiAgY29uc3QgcmVzdWx0ID0gZGF0YSBpbnN0YW5jZW9mIERhdGVcbiAgICA/IG5ldyBEYXRlKGRhdGEpXG4gICAgOiAoZGF0YSBpbnN0YW5jZW9mIFJlZ0V4cFxuICAgICAgICA/IG5ldyBSZWdFeHAoZGF0YS5zb3VyY2UsIGRhdGEuZmxhZ3MpXG4gICAgICAgIDogKGRhdGEgaW5zdGFuY2VvZiBTZXRcbiAgICAgICAgICAgID8gbmV3IFNldCgpXG4gICAgICAgICAgICA6IChkYXRhIGluc3RhbmNlb2YgTWFwXG4gICAgICAgICAgICAgICAgPyBuZXcgTWFwKClcbiAgICAgICAgICAgICAgICA6ICh0eXBlb2YgZGF0YS5jb25zdHJ1Y3RvciAhPT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IE9iamVjdC5jcmVhdGUobnVsbClcbiAgICAgICAgICAgICAgICAgICAgOiAoZGF0YS5wcm90b3R5cGUgIT09IHZvaWQgMCAmJiB0eXBlb2YgZGF0YS5wcm90b3R5cGUuY29uc3RydWN0b3IgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgICAgID8gZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBuZXcgZGF0YS5jb25zdHJ1Y3RvcigpXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgKVxuXG4gIGlmICh0eXBlb2YgZGF0YS5jb25zdHJ1Y3RvciA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGF0YS52YWx1ZU9mID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3QgdmFsID0gZGF0YS52YWx1ZU9mKClcblxuICAgIGlmIChPYmplY3QodmFsKSAhPT0gdmFsKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBuZXcgZGF0YS5jb25zdHJ1Y3Rvcih2YWwpXG5cbiAgICAgIGhhc2guc2V0KGRhdGEsIHJlc3VsdClcblxuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbiAgfVxuXG4gIGhhc2guc2V0KGRhdGEsIHJlc3VsdClcblxuICBpZiAoZGF0YSBpbnN0YW5jZW9mIFNldCkge1xuICAgIGRhdGEuZm9yRWFjaCh2YWwgPT4ge1xuICAgICAgcmVzdWx0LmFkZChjbG9uZURlZXAodmFsLCBoYXNoKSlcbiAgICB9KVxuICB9XG4gIGVsc2UgaWYgKGRhdGEgaW5zdGFuY2VvZiBNYXApIHtcbiAgICBkYXRhLmZvckVhY2goKHZhbCwga2V5KSA9PiB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgY2xvbmVEZWVwKHZhbCwgaGFzaCkpXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBPYmplY3QuYXNzaWduKFxuICAgIHJlc3VsdCxcbiAgICAuLi5PYmplY3Qua2V5cyhkYXRhKS5tYXAoa2V5ID0+ICh7IFsga2V5IF06IGNsb25lRGVlcChkYXRhWyBrZXkgXSwgaGFzaCkgfSkpXG4gIClcbn1cbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIG5leHRUaWNrLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBRTWVudSBmcm9tICcuLi9tZW51L1FNZW51LmpzJ1xuaW1wb3J0IFFCdG4gZnJvbSAnLi4vYnRuL1FCdG4uanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuY3JlYXRlL2NyZWF0ZS5qcydcbmltcG9ydCBjbG9uZSBmcm9tICcuLi8uLi91dGlscy9jbG9uZS9jbG9uZS5qcydcbmltcG9ydCB7IGlzRGVlcEVxdWFsIH0gZnJvbSAnLi4vLi4vdXRpbHMvaXMvaXMuanMnXG5pbXBvcnQgeyBpbmplY3RQcm9wIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5pbmplY3Qtb2JqLXByb3AvaW5qZWN0LW9iai1wcm9wLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVBvcHVwRWRpdCcsXG5cbiAgcHJvcHM6IHtcbiAgICBtb2RlbFZhbHVlOiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgdGl0bGU6IFN0cmluZyxcbiAgICBidXR0b25zOiBCb29sZWFuLFxuICAgIGxhYmVsU2V0OiBTdHJpbmcsXG4gICAgbGFiZWxDYW5jZWw6IFN0cmluZyxcblxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAncHJpbWFyeSdcbiAgICB9LFxuICAgIHZhbGlkYXRlOiB7XG4gICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgIGRlZmF1bHQ6ICgpID0+IHRydWVcbiAgICB9LFxuXG4gICAgYXV0b1NhdmU6IEJvb2xlYW4sXG5cbiAgICAvKiBtZW51IHByb3BzIG92ZXJyaWRlcyAqL1xuICAgIGNvdmVyOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgIH0sXG4gICAgLyogZW5kIG9mIG1lbnUgcHJvcHMgKi9cblxuICAgIGRpc2FibGU6IEJvb2xlYW5cbiAgfSxcblxuICBlbWl0czogW1xuICAgICd1cGRhdGU6bW9kZWxWYWx1ZScsICdzYXZlJywgJ2NhbmNlbCcsXG4gICAgJ2JlZm9yZVNob3cnLCAnc2hvdycsICdiZWZvcmVIaWRlJywgJ2hpZGUnXG4gIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCB7IHByb3h5IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IHsgJHEgfSA9IHByb3h5XG5cbiAgICBjb25zdCBtZW51UmVmID0gcmVmKG51bGwpXG5cbiAgICBjb25zdCBpbml0aWFsVmFsdWUgPSByZWYoJycpXG4gICAgY29uc3QgY3VycmVudE1vZGVsID0gcmVmKCcnKVxuXG4gICAgbGV0IHZhbGlkYXRlZCA9IGZhbHNlXG5cbiAgICBjb25zdCBzY29wZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIHJldHVybiBpbmplY3RQcm9wKHtcbiAgICAgICAgaW5pdGlhbFZhbHVlOiBpbml0aWFsVmFsdWUudmFsdWUsXG4gICAgICAgIHZhbGlkYXRlOiBwcm9wcy52YWxpZGF0ZSxcbiAgICAgICAgc2V0LFxuICAgICAgICBjYW5jZWwsXG4gICAgICAgIHVwZGF0ZVBvc2l0aW9uXG4gICAgICB9LCAndmFsdWUnLCAoKSA9PiBjdXJyZW50TW9kZWwudmFsdWUsIHZhbCA9PiB7IGN1cnJlbnRNb2RlbC52YWx1ZSA9IHZhbCB9KVxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBzZXQgKCkge1xuICAgICAgaWYgKHByb3BzLnZhbGlkYXRlKGN1cnJlbnRNb2RlbC52YWx1ZSkgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoaGFzTW9kZWxDaGFuZ2VkKCkgPT09IHRydWUpIHtcbiAgICAgICAgZW1pdCgnc2F2ZScsIGN1cnJlbnRNb2RlbC52YWx1ZSwgaW5pdGlhbFZhbHVlLnZhbHVlKVxuICAgICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIGN1cnJlbnRNb2RlbC52YWx1ZSlcbiAgICAgIH1cblxuICAgICAgY2xvc2VNZW51KClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5jZWwgKCkge1xuICAgICAgaWYgKGhhc01vZGVsQ2hhbmdlZCgpID09PSB0cnVlKSB7XG4gICAgICAgIGVtaXQoJ2NhbmNlbCcsIGN1cnJlbnRNb2RlbC52YWx1ZSwgaW5pdGlhbFZhbHVlLnZhbHVlKVxuICAgICAgfVxuXG4gICAgICBjbG9zZU1lbnUoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVBvc2l0aW9uICgpIHtcbiAgICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgbWVudVJlZi52YWx1ZS51cGRhdGVQb3NpdGlvbigpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhc01vZGVsQ2hhbmdlZCAoKSB7XG4gICAgICByZXR1cm4gaXNEZWVwRXF1YWwoY3VycmVudE1vZGVsLnZhbHVlLCBpbml0aWFsVmFsdWUudmFsdWUpID09PSBmYWxzZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsb3NlTWVudSAoKSB7XG4gICAgICB2YWxpZGF0ZWQgPSB0cnVlXG4gICAgICBtZW51UmVmLnZhbHVlLmhpZGUoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uQmVmb3JlU2hvdyAoKSB7XG4gICAgICB2YWxpZGF0ZWQgPSBmYWxzZVxuICAgICAgaW5pdGlhbFZhbHVlLnZhbHVlID0gY2xvbmUocHJvcHMubW9kZWxWYWx1ZSlcbiAgICAgIGN1cnJlbnRNb2RlbC52YWx1ZSA9IGNsb25lKHByb3BzLm1vZGVsVmFsdWUpXG4gICAgICBlbWl0KCdiZWZvcmVTaG93JylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblNob3cgKCkge1xuICAgICAgZW1pdCgnc2hvdycpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25CZWZvcmVIaWRlICgpIHtcbiAgICAgIGlmICh2YWxpZGF0ZWQgPT09IGZhbHNlICYmIGhhc01vZGVsQ2hhbmdlZCgpID09PSB0cnVlKSB7XG4gICAgICAgIGlmIChwcm9wcy5hdXRvU2F2ZSA9PT0gdHJ1ZSAmJiBwcm9wcy52YWxpZGF0ZShjdXJyZW50TW9kZWwudmFsdWUpID09PSB0cnVlKSB7XG4gICAgICAgICAgZW1pdCgnc2F2ZScsIGN1cnJlbnRNb2RlbC52YWx1ZSwgaW5pdGlhbFZhbHVlLnZhbHVlKVxuICAgICAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgY3VycmVudE1vZGVsLnZhbHVlKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGVtaXQoJ2NhbmNlbCcsIGN1cnJlbnRNb2RlbC52YWx1ZSwgaW5pdGlhbFZhbHVlLnZhbHVlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGVtaXQoJ2JlZm9yZUhpZGUnKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uSGlkZSAoKSB7XG4gICAgICBlbWl0KCdoaWRlJylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRDb250ZW50ICgpIHtcbiAgICAgIGNvbnN0IGNoaWxkID0gc2xvdHMuZGVmYXVsdCAhPT0gdm9pZCAwXG4gICAgICAgID8gW10uY29uY2F0KHNsb3RzLmRlZmF1bHQoc2NvcGUudmFsdWUpKVxuICAgICAgICA6IFtdXG5cbiAgICAgIHByb3BzLnRpdGxlICYmIGNoaWxkLnVuc2hpZnQoXG4gICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLWRpYWxvZ19fdGl0bGUgcS1tdC1zbSBxLW1iLXNtJyB9LCBwcm9wcy50aXRsZSlcbiAgICAgIClcblxuICAgICAgcHJvcHMuYnV0dG9ucyA9PT0gdHJ1ZSAmJiBjaGlsZC5wdXNoKFxuICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS1wb3B1cC1lZGl0X19idXR0b25zIHJvdyBqdXN0aWZ5LWNlbnRlciBuby13cmFwJyB9LCBbXG4gICAgICAgICAgaChRQnRuLCB7XG4gICAgICAgICAgICBmbGF0OiB0cnVlLFxuICAgICAgICAgICAgY29sb3I6IHByb3BzLmNvbG9yLFxuICAgICAgICAgICAgbGFiZWw6IHByb3BzLmxhYmVsQ2FuY2VsIHx8ICRxLmxhbmcubGFiZWwuY2FuY2VsLFxuICAgICAgICAgICAgb25DbGljazogY2FuY2VsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgaChRQnRuLCB7XG4gICAgICAgICAgICBmbGF0OiB0cnVlLFxuICAgICAgICAgICAgY29sb3I6IHByb3BzLmNvbG9yLFxuICAgICAgICAgICAgbGFiZWw6IHByb3BzLmxhYmVsU2V0IHx8ICRxLmxhbmcubGFiZWwuc2V0LFxuICAgICAgICAgICAgb25DbGljazogc2V0XG4gICAgICAgICAgfSlcbiAgICAgICAgXSlcbiAgICAgIClcblxuICAgICAgcmV0dXJuIGNoaWxkXG4gICAgfVxuXG4gICAgLy8gZXhwb3NlIHB1YmxpYyBtZXRob2RzXG4gICAgT2JqZWN0LmFzc2lnbihwcm94eSwge1xuICAgICAgc2V0LFxuICAgICAgY2FuY2VsLFxuICAgICAgc2hvdyAoZSkgeyBtZW51UmVmLnZhbHVlICE9PSBudWxsICYmIG1lbnVSZWYudmFsdWUuc2hvdyhlKSB9LFxuICAgICAgaGlkZSAoZSkgeyBtZW51UmVmLnZhbHVlICE9PSBudWxsICYmIG1lbnVSZWYudmFsdWUuaGlkZShlKSB9LFxuICAgICAgdXBkYXRlUG9zaXRpb25cbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChwcm9wcy5kaXNhYmxlID09PSB0cnVlKSByZXR1cm5cblxuICAgICAgcmV0dXJuIGgoUU1lbnUsIHtcbiAgICAgICAgcmVmOiBtZW51UmVmLFxuICAgICAgICBjbGFzczogJ3EtcG9wdXAtZWRpdCcsXG4gICAgICAgIGNvdmVyOiBwcm9wcy5jb3ZlcixcbiAgICAgICAgb25CZWZvcmVTaG93LFxuICAgICAgICBvblNob3csXG4gICAgICAgIG9uQmVmb3JlSGlkZSxcbiAgICAgICAgb25IaWRlLFxuICAgICAgICBvbkVzY2FwZUtleTogY2FuY2VsXG4gICAgICB9LCBnZXRDb250ZW50KVxuICAgIH1cbiAgfVxufSlcbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtaGVhZGVyIHJldmVhbCByZXZlYWwtb2Zmc2V0PVwiNTBcIiBjbGFzcz1cImJnLXdoaXRlXCI+XG4gICAgPHEtdG9vbGJhcj5cbiAgICAgIDxxLWJ0blxuICAgICAgICBAY2xpY2s9XCIkcm91dGVyLmJhY2soKVwiXG4gICAgICAgIGZsYXRcbiAgICAgICAgcm91bmRcbiAgICAgICAgZGVuc2VcbiAgICAgICAgaWNvbj1cImFycm93X2JhY2tcIlxuICAgICAgICBjb2xvcj1cImRhcmtcIlxuICAgICAgLz5cbiAgICAgIDxxLXRvb2xiYXItdGl0bGUgY2xhc3M9XCJ0ZXh0LWRhcmsgdGV4dC1jZW50ZXIgdGV4dC13ZWlnaHQtYm9sZFwiPlxuICAgICAgICBBZGRyZXNzXG4gICAgICA8L3EtdG9vbGJhci10aXRsZT5cbiAgICAgIDxxLWJ0blxuICAgICAgICB0bz1cIi9jYXJ0XCJcbiAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgIHJvdW5kZWRcbiAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICB0ZXh0LWNvbG9yPVwiZGFya1wiXG4gICAgICAgIGljb249XCJldmEtc2hvcHBpbmctYmFnLW91dGxpbmVcIlxuICAgICAgICBkZW5zZVxuICAgICAgICBuby1jYXBzXG4gICAgICA+XG4gICAgICAgIDxxLWJhZGdlIGZsb2F0aW5nIGNvbG9yPVwicHJpbWFyeTJcIiByb3VuZGVkIC8+XG4gICAgICA8L3EtYnRuPlxuICAgIDwvcS10b29sYmFyPlxuICA8L3EtaGVhZGVyPlxuICA8IS0tIGJhbm5lciAtLT5cblxuICA8cS1wYWdlIHBhZGRpbmcgY2xhc3M9XCJiZy1ncmV5LTJcIj5cbiAgICA8cS1zcGFjZSBjbGFzcz1cInEtcGEteHNcIj48L3Etc3BhY2U+XG4gICAgPHEtY2FyZCBmbGF0IGNsYXNzPVwicmFkaXVzOFwiPlxuICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFwIGJnLWdyZXktMiByb3VuZGVkLTEwIHEtbWItbWRcIiAvPlxuICAgICAgICA8cS1saXN0IGNsYXNzPVwicWxpc3Qtbm8tcGFkZGluZyBxLW1iLW1kXCI+XG4gICAgICAgICAgPHEtaXRlbT5cbiAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBsaW5lcz1cIjJcIiBjbGFzcz1cImZvbnQxMiB0ZXh0LXdlaWdodC1ib2xkXCJcbiAgICAgICAgICAgICAgICA+UXVlem9uIENpdHk8L3EtaXRlbS1sYWJlbFxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbiBjbGFzcz1cImZvbnQxMiB0ZXh0LXdlaWdodC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIHt7IGVkaXRfYWRkcmVzcyB9fSA8cS1pY29uIG5hbWU9XCJldmEtZWRpdC1vdXRsaW5lXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxxLXBvcHVwLWVkaXQgdi1tb2RlbD1cImVkaXRfYWRkcmVzc1wiIGF1dG8tc2F2ZSB2LXNsb3Q9XCJzY29wZVwiPlxuICAgICAgICAgICAgICAgICAgICA8cS1pbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJzY29wZS52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvZm9jdXNcbiAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyXG4gICAgICAgICAgICAgICAgICAgICAgQGtleXVwLmVudGVyPVwic2NvcGUuc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvcS1wb3B1cC1lZGl0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZT5cbiAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgdGV4dC1jb2xvcj1cImRhcmtcIlxuICAgICAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJBZGp1c3QgUGluXCJcbiAgICAgICAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJxLXBsLXNtIHEtcHItc21cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgPC9xLWxpc3Q+XG5cbiAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICB2LW1vZGVsPVwibG9jYXRpb25fbmFtZVwiXG4gICAgICAgICAgYXV0b2dyb3dcbiAgICAgICAgICBkZW5zZVxuICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgY29sb3I9XCJkYXJrXCJcbiAgICAgICAgICBiZy1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICBib3JkZXJsZXNzXG4gICAgICAgICAgbGFiZWw9XCJBcGFybWVudCwgc3VpdGUgb3IgZmxvb3JcIlxuICAgICAgICAvPlxuICAgICAgICA8cS1zcGFjZSBjbGFzcz1cInEtcGEtc21cIiAvPlxuICAgICAgICA8cS1zZWxlY3RcbiAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgIHYtbW9kZWw9XCJkZWxpdmVyeV9vcHRpb25zXCJcbiAgICAgICAgICA6b3B0aW9ucz1cIm9wdGlvbnNcIlxuICAgICAgICAgIGxhYmVsPVwiRGVsaXZlcnkgT3B0aW9uc1wiXG4gICAgICAgICAgZGVuc2VcbiAgICAgICAgLz5cbiAgICAgICAgPHEtc3BhY2UgY2xhc3M9XCJxLXBhLXNtXCIgLz5cbiAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICB2LW1vZGVsPVwiZGVsaXZlcnlfaW5zdHJ1Y3Rpb25zXCJcbiAgICAgICAgICBhdXRvZ3Jvd1xuICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICBjb2xvcj1cImRhcmtcIlxuICAgICAgICAgIGJnLWNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgIGJvcmRlcmxlc3NcbiAgICAgICAgICBsYWJlbD1cIkFkZCBkZWxpdmVyeSBpbnN0cnVjdGlvbnNcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg2XCI+QWRkcmVzcyBsYWJlbDwvZGl2PlxuXG4gICAgICAgIDxxLWJ0bi10b2dnbGVcbiAgICAgICAgICB2LW1vZGVsPVwiYWRkcmVzc19sYWJlbFwiXG4gICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgIHJvdW5kZWRcbiAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgdG9nZ2xlLWNvbG9yPVwiZGFya1wiXG4gICAgICAgICAgdG9nZ2xlLXRleHQtY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgY29sb3I9XCJncmV5LTJcIlxuICAgICAgICAgIHRleHQtY29sb3I9XCJkYXJrXCJcbiAgICAgICAgICBzaXplPVwiMTJweFwiXG4gICAgICAgICAgY2xhc3M9XCJmb250MTEgYmctZ3JleS0yIHEtbWItbWQgdGV4dC13ZWlnaHQtNjAwXCJcbiAgICAgICAgICBzcHJlYWRcbiAgICAgICAgICA6b3B0aW9ucz1cIltcbiAgICAgICAgICAgIHsgbGFiZWw6ICdIb21lJywgdmFsdWU6IDEgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6ICdXb3JrJywgdmFsdWU6IDIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6ICdTY2hvb2wnLCB2YWx1ZTogMyB9LFxuICAgICAgICAgICAgeyBsYWJlbDogJ290aGVyJywgdmFsdWU6ICdvdGhlcicgfSxcbiAgICAgICAgICBdXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8cHJlPnt7IGJhY2tfdXJsIH19PC9wcmU+XG4gICAgICAgIDxwcmU+e3sgYWRkcmVzc191dWlkIH19PC9wcmU+XG4gICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuXG4gICAgICA8cS1jYXJkLWFjdGlvbnMgdmVydGljYWwgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgbGFiZWw9XCJTYXZlIEFkZHJlc3NcIlxuICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIHRleHQtY29sb3I9XCJkYXJrXCJcbiAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgY2xhc3M9XCJmdWxsLXdpZHRoXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgbGFiZWw9XCJDYW5jZWxcIlxuICAgICAgICAgIGZsYXRcbiAgICAgICAgICB0ZXh0LWNvbG9yPVwiYW1iZXItMTRcIlxuICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICBjbGFzcz1cImZ1bGwtd2lkdGhcIlxuICAgICAgICAvPlxuICAgICAgPC9xLWNhcmQtYWN0aW9ucz5cbiAgICA8L3EtY2FyZD5cbiAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEFQSWludGVyZmFjZSBmcm9tIFwic3JjL2FwaS9BUElpbnRlcmZhY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIlBhZ2VOYW1lXCIsXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJhY2tfdXJsOiBcIlwiLFxuICAgICAgYWRkcmVzc191dWlkOiBcIlwiLFxuICAgICAgbG9jYXRpb25fbmFtZTogXCJcIixcbiAgICAgIGRlbGl2ZXJ5X29wdGlvbnM6IFwiXCIsXG4gICAgICBkZWxpdmVyeV9pbnN0cnVjdGlvbnM6IFwiXCIsXG4gICAgICBhZGRyZXNzX2xhYmVsOiAxLFxuICAgICAgZWRpdF9hZGRyZXNzOiBcIkd1YWRhbHVwZSBudWV2byBtYWthdGkgY2l0eVwiLFxuICAgICAgb3B0aW9uczogW1wibGVhdmUgYXQgbXkgZG9vclwiLCBcImhhbmQgaXQgdG8gbWVcIiwgXCJtZWV0IG91dHNpZGVcIl0sXG4gICAgfTtcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmJhY2tfdXJsID0gdGhpcy4kcm91dGUucXVlcnkudXJsO1xuICAgIHRoaXMuYWRkcmVzc191dWlkID0gdGhpcy4kcm91dGUucXVlcnkudXVpZDtcbiAgfSxcbn07XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJyZXN1bHQiLCJjbG9uZSIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfY3JlYXRlVk5vZGUiLCJfY3JlYXRlVGV4dFZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyIsIl93aXRoQ3R4IiwiX3dpdGhLZXlzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZSxTQUFTLFVBQVcsTUFBTSxPQUFPLG9CQUFJLFFBQU8sR0FBSTtBQUM3RCxNQUFJLE9BQU8sSUFBSSxNQUFNO0FBQU0sV0FBTztBQUNsQyxNQUFJLEtBQUssSUFBSSxJQUFJO0FBQUcsV0FBTyxLQUFLLElBQUksSUFBSTtBQUV4QyxRQUFNLFNBQVMsZ0JBQWdCLE9BQzNCLElBQUksS0FBSyxJQUFJLElBQ1osZ0JBQWdCLFNBQ2IsSUFBSSxPQUFPLEtBQUssUUFBUSxLQUFLLEtBQUssSUFDakMsZ0JBQWdCLE1BQ2Isb0JBQUksSUFBSyxJQUNSLGdCQUFnQixNQUNiLG9CQUFJLElBQUssSUFDUixPQUFPLEtBQUssZ0JBQWdCLGFBQ3pCLHVCQUFPLE9BQU8sSUFBSSxJQUNqQixLQUFLLGNBQWMsVUFBVSxPQUFPLEtBQUssVUFBVSxnQkFBZ0IsYUFDaEUsT0FDQSxJQUFJLEtBQUssWUFBYTtBQU85QyxNQUFJLE9BQU8sS0FBSyxnQkFBZ0IsY0FBYyxPQUFPLEtBQUssWUFBWSxZQUFZO0FBQ2hGLFVBQU0sTUFBTSxLQUFLLFFBQVM7QUFFMUIsUUFBSSxPQUFPLEdBQUcsTUFBTSxLQUFLO0FBQ3ZCLFlBQU1BLFVBQVMsSUFBSSxL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
