import { _ as _export_sfc, l as defineAsyncComponent, u as __vitePreload, R as useDataStore, S as useDataStorePersisted, m as APIinterface, n as resolveComponent, p as openBlock, V as createElementBlock, U as createBaseVNode, f as createVNode, Z as toDisplayString, F as Fragment, X as renderList, Y as QBtn, aA as createCommentVNode } from "./index.61ed5618.js";
import { Q as QInnerLoading } from "./QInnerLoading.abe2afe6.js";
import { Q as QImg } from "./QImg.6c27044c.js";
import { u as useMenuStore } from "./MenuStore.f3a21da3.js";
const _sfc_main = {
  name: "FavouriteItems",
  props: ["is_done"],
  components: {
    FavsItem: defineAsyncComponent(() => __vitePreload(() => import("./FavsItem.341b44fd.js"), true ? ["assets/FavsItem.341b44fd.js","assets/index.61ed5618.js","assets/index.dbee30c0.css"] : void 0)),
    ItemDetails: defineAsyncComponent(
      () => __vitePreload(() => import("./ItemDetails.81a570cb.js"), true ? ["assets/ItemDetails.81a570cb.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QCircularProgress.996c3e2f.js","assets/format.7f7370d3.js","assets/QImg.6c27044c.js","assets/QChip.f183a4f1.js","assets/QBtnToggle.6ffa195b.js","assets/QBtnGroup.abc2d1c7.js","assets/QSelect.311187d6.js","assets/QItemLabel.a9365c5b.js","assets/QMenu.8e482cd8.js","assets/selection.50b4cb0c.js","assets/rtl.f3ed811c.js","assets/QSpace.f164c087.js","assets/CartStore.484ff101.js","assets/FavoriteStore.f91e6f21.js","assets/DeliverySched.4e9605bf.js"] : void 0)
    ),
    ItemDetailsCheckbox: defineAsyncComponent(
      () => __vitePreload(() => import("./ItemDetailsCheckbox.63e0acb1.js"), true ? ["assets/ItemDetailsCheckbox.63e0acb1.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QCircularProgress.996c3e2f.js","assets/format.7f7370d3.js","assets/QImg.6c27044c.js","assets/QItemLabel.a9365c5b.js","assets/QList.b69a7e5b.js","assets/QSelect.311187d6.js","assets/QChip.f183a4f1.js","assets/QMenu.8e482cd8.js","assets/selection.50b4cb0c.js","assets/rtl.f3ed811c.js","assets/QSpace.f164c087.js","assets/QBtnGroup.abc2d1c7.js","assets/ClosePopup.9d17b53c.js","assets/CartStore.484ff101.js","assets/FavoriteStore.f91e6f21.js","assets/DeliverySched.4e9605bf.js"] : void 0)
    )
  },
  data() {
    return {
      data: [],
      data_items: [],
      loading: true,
      slug: "",
      money_config: []
    };
  },
  setup(props) {
    const MenuStore = useMenuStore();
    const DataStore = useDataStore();
    const DataStorePersisted = useDataStorePersisted();
    return { MenuStore, DataStore, DataStorePersisted };
  },
  mounted() {
    this.getSaveItems();
  },
  computed: {
    hasData() {
      if (this.data.length > 0) {
        return true;
      }
      return false;
    }
  },
  watch: {
    is_done(newval, oldval) {
      this.getSaveItems();
    }
  },
  methods: {
    getSaveItems() {
      if (APIinterface.empty(this.is_done)) {
        this.loading = true;
      }
      APIinterface.fetchDataByTokenPost(
        "getSaveItems",
        "currency_code=" + this.DataStorePersisted.use_currency_code
      ).then((data) => {
        this.data = data.details.data;
        this.data_items = data.details.items;
        this.money_config = data.details.money_config;
      }).catch((error) => {
        this.data = [];
        this.data_items = [];
      }).then((data) => {
        this.loading = false;
        if (!APIinterface.empty(this.is_done)) {
          this.is_done();
        }
      });
    },
    afterSavefav(data, found) {
      data.save_item = found;
    },
    onClickitem(data) {
      this.slug = data.slug;
      if (this.DataStore.addons_use_checkbox) {
        this.$refs.refItem2.showItem2(data, data.slug);
      } else {
        this.$refs.refItem.showItem2(data, data.slug);
      }
    },
    afterAdditems() {
      this.$emit("afterAdditems");
    }
  }
};
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { class: "fit q-pa-xl" };
const _hoisted_3 = {
  key: 1,
  class: "flex flex-center q-pt-xl q-pb-xl"
};
const _hoisted_4 = { class: "text-h5 text-weight-bold line-normal" };
const _hoisted_5 = { class: "text-grey font12" };
const _hoisted_6 = {
  key: 2,
  class: "row items-start q-col-gutter-x-sm q-mb-sm"
};
const _hoisted_7 = {
  key: 0,
  class: "col-6"
};
const _hoisted_8 = { class: "relative-position" };
const _hoisted_9 = { class: "absolute-bottom-right q-pa-sm" };
const _hoisted_10 = { class: "q-pt-sm q-pb-md" };
const _hoisted_11 = { class: "row items-center" };
const _hoisted_12 = { class: "col text-subtitle2 line-normal ellipsis" };
const _hoisted_13 = { class: "col-3 text-right" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FavsItem = resolveComponent("FavsItem");
  const _component_ItemDetails = resolveComponent("ItemDetails");
  const _component_ItemDetailsCheckbox = resolveComponent("ItemDetailsCheckbox");
  return openBlock(), createElementBlock(Fragment, null, [
    $data.loading ? (openBlock(), createElementBlock("div", _hoisted_1, [
      createBaseVNode("div", _hoisted_2, [
        createVNode(QInnerLoading, {
          showing: true,
          color: "primary",
          size: "md",
          "label-class": "dark"
        })
      ])
    ])) : !$data.loading && !$options.hasData ? (openBlock(), createElementBlock("div", _hoisted_3, [
      createVNode(QImg, {
        src: "cuttery.png",
        fit: "fill",
        "spinner-color": "primary",
        style: { "height": "160px", "max-width": "150px" }
      }),
      createBaseVNode("div", _hoisted_4, toDisplayString(_ctx.$t("You don't have any save items here!")), 1),
      createBaseVNode("p", _hoisted_5, toDisplayString(_ctx.$t("Let's change that!")), 1)
    ])) : (openBlock(), createElementBlock("div", _hoisted_6, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($data.data, (items) => {
        return openBlock(), createElementBlock(Fragment, {
          key: items.item_id
        }, [
          $data.data_items[items.item_id] ? (openBlock(), createElementBlock("div", _hoisted_7, [
            createBaseVNode("div", _hoisted_8, [
              createVNode(QImg, {
                src: $data.data_items[items.item_id].url_image,
                style: { "max-width": "100%", "height": "100px" },
                "spinner-color": "primary",
                "spinner-size": "sm",
                "placeholder-src": "placeholder.png",
                class: "radius10"
              }, null, 8, ["src"]),
              createBaseVNode("div", _hoisted_9, [
                createVNode(QBtn, {
                  round: "",
                  color: "dark",
                  icon: "add",
                  unelevated: "",
                  size: "sm",
                  onClick: ($event) => $options.onClickitem({
                    slug: items.restaurant_slug,
                    cat_id: items.cat_id,
                    item_uuid: $data.data_items[items.item_id].item_uuid
                  })
                }, null, 8, ["onClick"])
              ])
            ]),
            createBaseVNode("div", _hoisted_10, [
              createBaseVNode("div", _hoisted_11, [
                createBaseVNode("div", _hoisted_12, toDisplayString($data.data_items[items.item_id].item_name), 1),
                createBaseVNode("div", _hoisted_13, [
                  createVNode(_component_FavsItem, {
                    ref_for: true,
                    ref: "favs",
                    data: items,
                    layout: 3,
                    item_token: $data.data_items[items.item_id].item_uuid,
                    cat_id: items.cat_id,
                    active: items.save_item,
                    onAfterSavefav: $options.afterSavefav
                  }, null, 8, ["data", "item_token", "cat_id", "active", "onAfterSavefav"])
                ])
              ])
            ])
          ])) : createCommentVNode("", true)
        ], 64);
      }), 128))
    ])),
    createVNode(_component_ItemDetails, {
      ref: "refItem",
      slug: $data.slug,
      money_config: $data.money_config,
      currency_code: $setup.DataStorePersisted.use_currency_code,
      onAfterAdditems: $options.afterAdditems
    }, null, 8, ["slug", "money_config", "currency_code", "onAfterAdditems"]),
    createVNode(_component_ItemDetailsCheckbox, {
      ref: "refItem2",
      slug: $data.slug,
      money_config: $data.money_config,
      currency_code: $setup.DataStorePersisted.use_currency_code,
      onAfterAdditems: $options.afterAdditems
    }, null, 8, ["slug", "money_config", "currency_code", "onAfterAdditems"])
  ], 64);
}
var FavouriteItems = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "FavouriteItems.vue"]]);
export { FavouriteItems as default };
//# sourceMappingURL=data:application/json;base64,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UEEsS0FBSTtBQUFBLG9CQUNILE1BQU07QUFBQSxvQkFDTixRQUFRO0FBQUEsb0JBQ1IsWUFBWSxNQUFVLFdBQUMsTUFBTSxTQUFTO0FBQUEsb0JBQ3RDLFFBQVEsTUFBTTtBQUFBLG9CQUNkLFFBQVEsTUFBTTtBQUFBLG9CQUNkLGdCQUFlLFNBQVk7QUFBQTs7Ozs7Ozs7SUFVNUNBLFlBTUU7QUFBQSxNQUxBLEtBQUk7QUFBQSxNQUNILE1BQU0sTUFBSTtBQUFBLE1BQ1YsY0FBYyxNQUFZO0FBQUEsTUFDMUIsZUFBZSxPQUFrQixtQkFBQztBQUFBLE1BQ2xDLGlCQUFnQixTQUFhO0FBQUE7SUFHaENBLFlBTUU7QUFBQSxNQUxBLEtBQUk7QUFBQSxNQUNILE1BQU0sTUFBSTtBQUFBLE1BQ1YsY0FBYyxNQUFZO0FBQUEsTUFDMUIsZUFBZSxPQUFrQixtQkFBQztBQUFBLE1BQ2xDLGlCQUFnQixTQUFhO0FBQUEiLCJuYW1lcyI6WyJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9jcmVhdGVWTm9kZSIsIl9vcGVuQmxvY2siLCJfdG9EaXNwbGF5U3RyaW5nIiwiX0ZyYWdtZW50Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvRmF2b3VyaXRlSXRlbXMudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiB2LWlmPVwibG9hZGluZ1wiPlxuICAgIDxkaXYgY2xhc3M9XCJmaXQgcS1wYS14bFwiPlxuICAgICAgPHEtaW5uZXItbG9hZGluZ1xuICAgICAgICA6c2hvd2luZz1cInRydWVcIlxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICBsYWJlbC1jbGFzcz1cImRhcmtcIlxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPHRlbXBsYXRlIHYtZWxzZS1pZj1cIiFsb2FkaW5nICYmICFoYXNEYXRhXCI+XG4gICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jZW50ZXIgcS1wdC14bCBxLXBiLXhsXCI+XG4gICAgICA8cS1pbWdcbiAgICAgICAgc3JjPVwiY3V0dGVyeS5wbmdcIlxuICAgICAgICBmaXQ9XCJmaWxsXCJcbiAgICAgICAgc3Bpbm5lci1jb2xvcj1cInByaW1hcnlcIlxuICAgICAgICBzdHlsZT1cImhlaWdodDogMTYwcHg7IG1heC13aWR0aDogMTUwcHhcIlxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg1IHRleHQtd2VpZ2h0LWJvbGQgbGluZS1ub3JtYWxcIj5cbiAgICAgICAge3sgJHQoXCJZb3UgZG9uJ3QgaGF2ZSBhbnkgc2F2ZSBpdGVtcyBoZXJlIVwiKSB9fVxuICAgICAgPC9kaXY+XG4gICAgICA8cCBjbGFzcz1cInRleHQtZ3JleSBmb250MTJcIj57eyAkdChcIkxldCdzIGNoYW5nZSB0aGF0IVwiKSB9fTwvcD5cbiAgICA8L2Rpdj5cbiAgPC90ZW1wbGF0ZT5cblxuICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgIDxkaXYgY2xhc3M9XCJyb3cgaXRlbXMtc3RhcnQgcS1jb2wtZ3V0dGVyLXgtc20gcS1tYi1zbVwiPlxuICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiaXRlbXMgaW4gZGF0YVwiIDprZXk9XCJpdGVtcy5pdGVtX2lkXCI+XG4gICAgICAgIDxkaXYgdi1pZj1cImRhdGFfaXRlbXNbaXRlbXMuaXRlbV9pZF1cIiBjbGFzcz1cImNvbC02XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlLXBvc2l0aW9uXCI+XG4gICAgICAgICAgICA8cS1pbWdcbiAgICAgICAgICAgICAgOnNyYz1cImRhdGFfaXRlbXNbaXRlbXMuaXRlbV9pZF0udXJsX2ltYWdlXCJcbiAgICAgICAgICAgICAgc3R5bGU9XCJtYXgtd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwcHhcIlxuICAgICAgICAgICAgICBzcGlubmVyLWNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgIHNwaW5uZXItc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXItc3JjPVwicGxhY2Vob2xkZXIucG5nXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJyYWRpdXMxMFwiXG4gICAgICAgICAgICA+PC9xLWltZz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhYnNvbHV0ZS1ib3R0b20tcmlnaHQgcS1wYS1zbVwiPlxuICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICByb3VuZFxuICAgICAgICAgICAgICAgIGNvbG9yPVwiZGFya1wiXG4gICAgICAgICAgICAgICAgaWNvbj1cImFkZFwiXG4gICAgICAgICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNraXRlbSh7XG4gICAgICAgICAgICAgICAgICAgIHNsdWc6IGl0ZW1zLnJlc3RhdXJhbnRfc2x1ZyxcbiAgICAgICAgICAgICAgICAgICAgY2F0X2lkOiBpdGVtcy5jYXRfaWQsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1fdXVpZDogZGF0YV9pdGVtc1tpdGVtcy5pdGVtX2lkXS5pdGVtX3V1aWQsXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJxLXB0LXNtIHEtcGItbWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdGV4dC1zdWJ0aXRsZTIgbGluZS1ub3JtYWwgZWxsaXBzaXNcIj5cbiAgICAgICAgICAgICAgICB7eyBkYXRhX2l0ZW1zW2l0ZW1zLml0ZW1faWRdLml0ZW1fbmFtZSB9fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8RmF2c0l0ZW1cbiAgICAgICAgICAgICAgICAgIHJlZj1cImZhdnNcIlxuICAgICAgICAgICAgICAgICAgOmRhdGE9XCJpdGVtc1wiXG4gICAgICAgICAgICAgICAgICA6bGF5b3V0PVwiM1wiXG4gICAgICAgICAgICAgICAgICA6aXRlbV90b2tlbj1cImRhdGFfaXRlbXNbaXRlbXMuaXRlbV9pZF0uaXRlbV91dWlkXCJcbiAgICAgICAgICAgICAgICAgIDpjYXRfaWQ9XCJpdGVtcy5jYXRfaWRcIlxuICAgICAgICAgICAgICAgICAgOmFjdGl2ZT1cIml0ZW1zLnNhdmVfaXRlbVwiXG4gICAgICAgICAgICAgICAgICBAYWZ0ZXItc2F2ZWZhdj1cImFmdGVyU2F2ZWZhdlwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvZGl2PlxuICA8L3RlbXBsYXRlPlxuXG4gIDxJdGVtRGV0YWlsc1xuICAgIHJlZj1cInJlZkl0ZW1cIlxuICAgIDpzbHVnPVwic2x1Z1wiXG4gICAgOm1vbmV5X2NvbmZpZz1cIm1vbmV5X2NvbmZpZ1wiXG4gICAgOmN1cnJlbmN5X2NvZGU9XCJEYXRhU3RvcmVQZXJzaXN0ZWQudXNlX2N1cnJlbmN5X2NvZGVcIlxuICAgIEBhZnRlci1hZGRpdGVtcz1cImFmdGVyQWRkaXRlbXNcIlxuICAvPlxuXG4gIDxJdGVtRGV0YWlsc0NoZWNrYm94XG4gICAgcmVmPVwicmVmSXRlbTJcIlxuICAgIDpzbHVnPVwic2x1Z1wiXG4gICAgOm1vbmV5X2NvbmZpZz1cIm1vbmV5X2NvbmZpZ1wiXG4gICAgOmN1cnJlbmN5X2NvZGU9XCJEYXRhU3RvcmVQZXJzaXN0ZWQudXNlX2N1cnJlbmN5X2NvZGVcIlxuICAgIEBhZnRlci1hZGRpdGVtcz1cImFmdGVyQWRkaXRlbXNcIlxuICAvPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IGRlZmluZUFzeW5jQ29tcG9uZW50IH0gZnJvbSBcInZ1ZVwiO1xuaW1wb3J0IEFQSWludGVyZmFjZSBmcm9tIFwic3JjL2FwaS9BUElpbnRlcmZhY2VcIjtcbmltcG9ydCB7IHVzZURhdGFTdG9yZSB9IGZyb20gXCJzdG9yZXMvRGF0YVN0b3JlXCI7XG5pbXBvcnQgeyB1c2VNZW51U3RvcmUgfSBmcm9tIFwic3JjL3N0b3Jlcy9NZW51U3RvcmVcIjtcbmltcG9ydCB7IHVzZURhdGFTdG9yZVBlcnNpc3RlZCB9IGZyb20gXCJzdG9yZXMvRGF0YVN0b3JlUGVyc2lzdGVkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJGYXZvdXJpdGVJdGVtc1wiLFxuICBwcm9wczogW1wiaXNfZG9uZVwiXSxcbiAgY29tcG9uZW50czoge1xuICAgIEZhdnNJdGVtOiBkZWZpbmVBc3luY0NvbXBvbmVudCgoKSA9PiBpbXBvcnQoXCJjb21wb25lbnRzL0ZhdnNJdGVtLnZ1ZVwiKSksXG4gICAgSXRlbURldGFpbHM6IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+XG4gICAgICBpbXBvcnQoXCJjb21wb25lbnRzL0l0ZW1EZXRhaWxzLnZ1ZVwiKVxuICAgICksXG4gICAgSXRlbURldGFpbHNDaGVja2JveDogZGVmaW5lQXN5bmNDb21wb25lbnQoKCkgPT5cbiAgICAgIGltcG9ydChcImNvbXBvbmVudHMvSXRlbURldGFpbHNDaGVja2JveC52dWVcIilcbiAgICApLFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiBbXSxcbiAgICAgIGRhdGFfaXRlbXM6IFtdLFxuICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgIHNsdWc6IFwiXCIsXG4gICAgICBtb25leV9jb25maWc6IFtdLFxuICAgIH07XG4gIH0sXG4gIHNldHVwKHByb3BzKSB7XG4gICAgY29uc3QgTWVudVN0b3JlID0gdXNlTWVudVN0b3JlKCk7XG4gICAgY29uc3QgRGF0YVN0b3JlID0gdXNlRGF0YVN0b3JlKCk7XG4gICAgY29uc3QgRGF0YVN0b3JlUGVyc2lzdGVkID0gdXNlRGF0YVN0b3JlUGVyc2lzdGVkKCk7XG4gICAgcmV0dXJuIHsgTWVudVN0b3JlLCBEYXRhU3RvcmUsIERhdGFTdG9yZVBlcnNpc3RlZCB9O1xuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuZ2V0U2F2ZUl0ZW1zKCk7XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgaGFzRGF0YSgpIHtcbiAgICAgIGlmICh0aGlzLmRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICB9LFxuICB3YXRjaDoge1xuICAgIGlzX2RvbmUobmV3dmFsLCBvbGR2YWwpIHtcbiAgICAgIHRoaXMuZ2V0U2F2ZUl0ZW1zKCk7XG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGdldFNhdmVJdGVtcygpIHtcbiAgICAgIGlmIChBUElpbnRlcmZhY2UuZW1wdHkodGhpcy5pc19kb25lKSkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgfVxuICAgICAgQVBJaW50ZXJmYWNlLmZldGNoRGF0YUJ5VG9rZW5Qb3N0KFxuICAgICAgICBcImdldFNhdmVJdGVtc1wiLFxuICAgICAgICBcImN1cnJlbmN5X2NvZGU9XCIgKyB0aGlzLkRhdGFTdG9yZVBlcnNpc3RlZC51c2VfY3VycmVuY3lfY29kZVxuICAgICAgKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuZGF0YSA9IGRhdGEuZGV0YWlscy5kYXRhO1xuICAgICAgICAgIHRoaXMuZGF0YV9pdGVtcyA9IGRhdGEuZGV0YWlscy5pdGVtcztcbiAgICAgICAgICB0aGlzLm1vbmV5X2NvbmZpZyA9IGRhdGEuZGV0YWlscy5tb25leV9jb25maWc7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICAgICAgICB0aGlzLmRhdGFfaXRlbXMgPSBbXTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBpZiAoIUFQSWludGVyZmFjZS5lbXB0eSh0aGlzLmlzX2RvbmUpKSB7XG4gICAgICAgICAgICB0aGlzLmlzX2RvbmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgYWZ0ZXJTYXZlZmF2KGRhdGEsIGZvdW5kKSB7XG4gICAgICBkYXRhLnNhdmVfaXRlbSA9IGZvdW5kO1xuICAgIH0sXG4gICAgb25DbGlja2l0ZW0oZGF0YSkge1xuICAgICAgdGhpcy5zbHVnID0gZGF0YS5zbHVnO1xuICAgICAgaWYgKHRoaXMuRGF0YVN0b3JlLmFkZG9uc191c2VfY2hlY2tib3gpIHtcbiAgICAgICAgdGhpcy4kcmVmcy5yZWZJdGVtMi5zaG93SXRlbTIoZGF0YSwgZGF0YS5zbHVnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuJHJlZnMucmVmSXRlbS5zaG93SXRlbTIoZGF0YSwgZGF0YS5zbHVnKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFmdGVyQWRkaXRlbXMoKSB7XG4gICAgICB0aGlzLiRlbWl0KFwiYWZ0ZXJBZGRpdGVtc1wiKTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuIl0sImZpbGUiOiJhc3NldHMvRmF2b3VyaXRlSXRlbXMuNzg1ZjM2ZDYuanMifQ==
