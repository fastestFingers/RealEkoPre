import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { _ as _export_sfc, m as APIinterface, p as openBlock, q as createBlock, t as withCtx, f as createVNode, a7 as normalizeClass, a6 as createTextVNode, Z as toDisplayString, aa as withDirectives, Y as QBtn, a9 as QCardSection, U as createBaseVNode, V as createElementBlock, X as renderList, ac as QItem, ad as QItemSection, aA as createCommentVNode, F as Fragment, a8 as QCard, aB as QDialog } from "./index.61ed5618.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QList } from "./QList.b69a7e5b.js";
import { Q as QInnerLoading } from "./QInnerLoading.abe2afe6.js";
import { C as ClosePopup } from "./ClosePopup.9d17b53c.js";
const _sfc_main = {
  name: "AllergensInformation",
  data() {
    return {
      dialog: false,
      data: [],
      loading: false,
      merchant_id: "",
      item_id: "",
      allergen_data: []
    };
  },
  computed: {
    getData() {
      return this.data;
    }
  },
  methods: {
    show(data, merchant_id, item_id) {
      this.dialog = data;
      this.merchant_id = merchant_id;
      this.item_id = item_id;
    },
    beforeShow() {
      this.loading = true;
      APIinterface.fetchDataPost(
        "getAllergenInfo",
        "merchant_id=" + this.merchant_id + "&item_id=" + this.item_id
      ).then((data) => {
        this.data = data.details.allergen;
        this.allergen_data = data.details.allergen_data;
      }).catch((error) => {
      }).then((data) => {
        this.loading = false;
      });
    },
    beforeClose() {
      this.data = [];
      this.allergen_data = [];
    }
  }
};
const _hoisted_1 = { class: "text-weight-bold" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QDialog, {
    modelValue: $data.dialog,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.dialog = $event),
    persistent: "",
    onBeforeShow: $options.beforeShow,
    onBeforeHide: $options.beforeClose,
    "transition-show": "fade",
    "transition-hide": "fade",
    "full-width": ""
  }, {
    default: withCtx(() => [
      createVNode(QCard, null, {
        default: withCtx(() => [
          createVNode(QToolbar, null, {
            default: withCtx(() => [
              createVNode(QToolbarTitle, {
                class: normalizeClass(["text-darkx text-center text-weight-bold", {
                  "text-white": _ctx.$q.dark.mode,
                  "text-dark ": !_ctx.$q.dark.mode
                }])
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("More product information")), 1)
                ]),
                _: 1
              }, 8, ["class"]),
              withDirectives(createVNode(QBtn, {
                icon: "eva-close-outline",
                flat: "",
                round: "",
                dense: "",
                color: _ctx.$q.dark.mode ? "primary" : "grey"
              }, null, 8, ["color"]), [
                [ClosePopup]
              ])
            ]),
            _: 1
          }),
          createVNode(QCardSection, { class: "q-pt-none" }, {
            default: withCtx(() => [
              createBaseVNode("h5", _hoisted_1, toDisplayString(_ctx.$t("Allergens")), 1),
              createVNode(QList, { dense: "" }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList($options.getData, (items) => {
                    return openBlock(), createBlock(QItem, { key: items }, {
                      default: withCtx(() => [
                        $data.allergen_data[items] ? (openBlock(), createBlock(QItemSection, { key: 0 }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString($data.allergen_data[items]), 1)
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              }),
              createVNode(QInnerLoading, {
                showing: $data.loading,
                color: "primary",
                size: "md"
              }, null, 8, ["showing"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["modelValue", "onBeforeShow", "onBeforeHide"]);
}
var AllergensInformation = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "AllergensInformation.vue"]]);
export { AllergensInformation as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxsZXJnZW5zSW5mb3JtYXRpb24uY2RiNjc1MWYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FsbGVyZ2Vuc0luZm9ybWF0aW9uLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLWRpYWxvZ1xuICAgIHYtbW9kZWw9XCJkaWFsb2dcIlxuICAgIHBlcnNpc3RlbnRcbiAgICBAYmVmb3JlLXNob3c9XCJiZWZvcmVTaG93XCJcbiAgICBAYmVmb3JlLWhpZGU9XCJiZWZvcmVDbG9zZVwiXG4gICAgdHJhbnNpdGlvbi1zaG93PVwiZmFkZVwiXG4gICAgdHJhbnNpdGlvbi1oaWRlPVwiZmFkZVwiXG4gICAgZnVsbC13aWR0aFxuICA+XG4gICAgPHEtY2FyZD5cbiAgICAgIDxxLXRvb2xiYXI+XG4gICAgICAgIDxxLXRvb2xiYXItdGl0bGVcbiAgICAgICAgICBjbGFzcz1cInRleHQtZGFya3ggdGV4dC1jZW50ZXIgdGV4dC13ZWlnaHQtYm9sZFwiXG4gICAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICAgJ3RleHQtd2hpdGUnOiAkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgICAndGV4dC1kYXJrICc6ICEkcS5kYXJrLm1vZGUsXG4gICAgICAgICAgfVwiXG4gICAgICAgID5cbiAgICAgICAgICB7eyAkdChcIk1vcmUgcHJvZHVjdCBpbmZvcm1hdGlvblwiKSB9fVxuICAgICAgICA8L3EtdG9vbGJhci10aXRsZT5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgaWNvbj1cImV2YS1jbG9zZS1vdXRsaW5lXCJcbiAgICAgICAgICBmbGF0XG4gICAgICAgICAgcm91bmRcbiAgICAgICAgICBkZW5zZVxuICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICA6Y29sb3I9XCIkcS5kYXJrLm1vZGUgPyAncHJpbWFyeScgOiAnZ3JleSdcIlxuICAgICAgICAvPlxuICAgICAgPC9xLXRvb2xiYXI+XG4gICAgICA8cS1jYXJkLXNlY3Rpb24gY2xhc3M9XCJxLXB0LW5vbmVcIj5cbiAgICAgICAgPGg1IGNsYXNzPVwidGV4dC13ZWlnaHQtYm9sZFwiPnt7ICR0KFwiQWxsZXJnZW5zXCIpIH19PC9oNT5cbiAgICAgICAgPHEtbGlzdCBkZW5zZT5cbiAgICAgICAgICA8cS1pdGVtIHYtZm9yPVwiaXRlbXMgaW4gZ2V0RGF0YVwiIDprZXk9XCJpdGVtc1wiPlxuICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHYtaWY9XCJhbGxlcmdlbl9kYXRhW2l0ZW1zXVwiPlxuICAgICAgICAgICAgICB7eyBhbGxlcmdlbl9kYXRhW2l0ZW1zXSB9fVxuICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgPC9xLWxpc3Q+XG5cbiAgICAgICAgPHEtaW5uZXItbG9hZGluZyA6c2hvd2luZz1cImxvYWRpbmdcIiBjb2xvcj1cInByaW1hcnlcIiBzaXplPVwibWRcIiAvPlxuICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICA8L3EtY2FyZD5cbiAgPC9xLWRpYWxvZz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgQVBJaW50ZXJmYWNlIGZyb20gXCJzcmMvYXBpL0FQSWludGVyZmFjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiQWxsZXJnZW5zSW5mb3JtYXRpb25cIixcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGlhbG9nOiBmYWxzZSxcbiAgICAgIGRhdGE6IFtdLFxuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICBtZXJjaGFudF9pZDogXCJcIixcbiAgICAgIGl0ZW1faWQ6IFwiXCIsXG4gICAgICBhbGxlcmdlbl9kYXRhOiBbXSxcbiAgICB9O1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGdldERhdGEoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgIH0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBzaG93KGRhdGEsIG1lcmNoYW50X2lkLCBpdGVtX2lkKSB7XG4gICAgICB0aGlzLmRpYWxvZyA9IGRhdGE7XG4gICAgICB0aGlzLm1lcmNoYW50X2lkID0gbWVyY2hhbnRfaWQ7XG4gICAgICB0aGlzLml0ZW1faWQgPSBpdGVtX2lkO1xuICAgIH0sXG4gICAgYmVmb3JlU2hvdygpIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICBBUElpbnRlcmZhY2UuZmV0Y2hEYXRhUG9zdChcbiAgICAgICAgXCJnZXRBbGxlcmdlbkluZm9cIixcbiAgICAgICAgXCJtZXJjaGFudF9pZD1cIiArIHRoaXMubWVyY2hhbnRfaWQgKyBcIiZpdGVtX2lkPVwiICsgdGhpcy5pdGVtX2lkXG4gICAgICApXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5kYXRhID0gZGF0YS5kZXRhaWxzLmFsbGVyZ2VuO1xuICAgICAgICAgIHRoaXMuYWxsZXJnZW5fZGF0YSA9IGRhdGEuZGV0YWlscy5hbGxlcmdlbl9kYXRhO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7fSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBiZWZvcmVDbG9zZSgpIHtcbiAgICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgICAgdGhpcy5hbGxlcmdlbl9kYXRhID0gW107XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfY3JlYXRlQmxvY2siLCJfY3JlYXRlVk5vZGUiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfRnJhZ21lbnQiLCJfcmVuZGVyTGlzdCIsIl9jcmVhdGVUZXh0Vk5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQWlEQSxNQUFLLFlBQVU7QUFBQSxFQUNiLE1B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
