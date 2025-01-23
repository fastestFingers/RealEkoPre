import { _ as _export_sfc, l as defineAsyncComponent, u as __vitePreload, R as useDataStore, S as useDataStorePersisted, m as APIinterface, n as resolveComponent, p as openBlock, V as createElementBlock, q as createBlock, F as Fragment, t as withCtx, X as renderList, f as createVNode, aA as createCommentVNode } from "./index.61ed5618.js";
import { Q as QSkeleton } from "./QSkeleton.39737398.js";
import { Q as QImg } from "./QImg.6c27044c.js";
import { g as getDocument, n as nextTick, S as Swiper, a as SwiperSlide } from "./swiper-slide.8a0c58df.js";
/* empty css                     */import { u as useCartStore } from "./CartStore.484ff101.js";
function Autoplay({
  swiper,
  extendParams,
  on,
  emit
}) {
  let timeout;
  swiper.autoplay = {
    running: false,
    paused: false
  };
  extendParams({
    autoplay: {
      enabled: false,
      delay: 3e3,
      waitForTransition: true,
      disableOnInteraction: true,
      stopOnLastSlide: false,
      reverseDirection: false,
      pauseOnMouseEnter: false
    }
  });
  function run() {
    if (!swiper.size) {
      swiper.autoplay.running = false;
      swiper.autoplay.paused = false;
      return;
    }
    const $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
    let delay = swiper.params.autoplay.delay;
    if ($activeSlideEl.attr("data-swiper-autoplay")) {
      delay = $activeSlideEl.attr("data-swiper-autoplay") || swiper.params.autoplay.delay;
    }
    clearTimeout(timeout);
    timeout = nextTick(() => {
      let autoplayResult;
      if (swiper.params.autoplay.reverseDirection) {
        if (swiper.params.loop) {
          swiper.loopFix();
          autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
          emit("autoplay");
        } else if (!swiper.isBeginning) {
          autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
          emit("autoplay");
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
          emit("autoplay");
        } else {
          stop();
        }
      } else if (swiper.params.loop) {
        swiper.loopFix();
        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
        emit("autoplay");
      } else if (!swiper.isEnd) {
        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
        emit("autoplay");
      } else if (!swiper.params.autoplay.stopOnLastSlide) {
        autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
        emit("autoplay");
      } else {
        stop();
      }
      if (swiper.params.cssMode && swiper.autoplay.running)
        run();
      else if (autoplayResult === false) {
        run();
      }
    }, delay);
  }
  function start() {
    if (typeof timeout !== "undefined")
      return false;
    if (swiper.autoplay.running)
      return false;
    swiper.autoplay.running = true;
    emit("autoplayStart");
    run();
    return true;
  }
  function stop() {
    if (!swiper.autoplay.running)
      return false;
    if (typeof timeout === "undefined")
      return false;
    if (timeout) {
      clearTimeout(timeout);
      timeout = void 0;
    }
    swiper.autoplay.running = false;
    emit("autoplayStop");
    return true;
  }
  function pause(speed) {
    if (!swiper.autoplay.running)
      return;
    if (swiper.autoplay.paused)
      return;
    if (timeout)
      clearTimeout(timeout);
    swiper.autoplay.paused = true;
    if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
      swiper.autoplay.paused = false;
      run();
    } else {
      ["transitionend", "webkitTransitionEnd"].forEach((event) => {
        swiper.$wrapperEl[0].addEventListener(event, onTransitionEnd);
      });
    }
  }
  function onVisibilityChange() {
    const document = getDocument();
    if (document.visibilityState === "hidden" && swiper.autoplay.running) {
      pause();
    }
    if (document.visibilityState === "visible" && swiper.autoplay.paused) {
      run();
      swiper.autoplay.paused = false;
    }
  }
  function onTransitionEnd(e) {
    if (!swiper || swiper.destroyed || !swiper.$wrapperEl)
      return;
    if (e.target !== swiper.$wrapperEl[0])
      return;
    ["transitionend", "webkitTransitionEnd"].forEach((event) => {
      swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
    });
    swiper.autoplay.paused = false;
    if (!swiper.autoplay.running) {
      stop();
    } else {
      run();
    }
  }
  function onMouseEnter() {
    if (swiper.params.autoplay.disableOnInteraction) {
      stop();
    } else {
      emit("autoplayPause");
      pause();
    }
    ["transitionend", "webkitTransitionEnd"].forEach((event) => {
      swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
    });
  }
  function onMouseLeave() {
    if (swiper.params.autoplay.disableOnInteraction) {
      return;
    }
    swiper.autoplay.paused = false;
    emit("autoplayResume");
    run();
  }
  function attachMouseEvents() {
    if (swiper.params.autoplay.pauseOnMouseEnter) {
      swiper.$el.on("mouseenter", onMouseEnter);
      swiper.$el.on("mouseleave", onMouseLeave);
    }
  }
  function detachMouseEvents() {
    swiper.$el.off("mouseenter", onMouseEnter);
    swiper.$el.off("mouseleave", onMouseLeave);
  }
  on("init", () => {
    if (swiper.params.autoplay.enabled) {
      start();
      const document = getDocument();
      document.addEventListener("visibilitychange", onVisibilityChange);
      attachMouseEvents();
    }
  });
  on("beforeTransitionStart", (_s, speed, internal) => {
    if (swiper.autoplay.running) {
      if (internal || !swiper.params.autoplay.disableOnInteraction) {
        swiper.autoplay.pause(speed);
      } else {
        stop();
      }
    }
  });
  on("sliderFirstMove", () => {
    if (swiper.autoplay.running) {
      if (swiper.params.autoplay.disableOnInteraction) {
        stop();
      } else {
        pause();
      }
    }
  });
  on("touchEnd", () => {
    if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
      run();
    }
  });
  on("destroy", () => {
    detachMouseEvents();
    if (swiper.autoplay.running) {
      stop();
    }
    const document = getDocument();
    document.removeEventListener("visibilitychange", onVisibilityChange);
  });
  Object.assign(swiper.autoplay, {
    pause,
    run,
    start,
    stop
  });
}
const _sfc_main = {
  name: "HomeBanner",
  components: {
    Swiper,
    SwiperSlide,
    ItemDetails: defineAsyncComponent(
      () => __vitePreload(() => import("./ItemDetails.81a570cb.js"), true ? ["assets/ItemDetails.81a570cb.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QCircularProgress.996c3e2f.js","assets/format.7f7370d3.js","assets/QImg.6c27044c.js","assets/QChip.f183a4f1.js","assets/QBtnToggle.6ffa195b.js","assets/QBtnGroup.abc2d1c7.js","assets/QSelect.311187d6.js","assets/QItemLabel.a9365c5b.js","assets/QMenu.8e482cd8.js","assets/selection.50b4cb0c.js","assets/rtl.f3ed811c.js","assets/QSpace.f164c087.js","assets/CartStore.484ff101.js","assets/FavoriteStore.f91e6f21.js","assets/DeliverySched.4e9605bf.js"] : void 0)
    ),
    ItemDetailsCheckbox: defineAsyncComponent(
      () => __vitePreload(() => import("./ItemDetailsCheckbox.63e0acb1.js"), true ? ["assets/ItemDetailsCheckbox.63e0acb1.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/QCircularProgress.996c3e2f.js","assets/format.7f7370d3.js","assets/QImg.6c27044c.js","assets/QItemLabel.a9365c5b.js","assets/QList.b69a7e5b.js","assets/QSelect.311187d6.js","assets/QChip.f183a4f1.js","assets/QMenu.8e482cd8.js","assets/selection.50b4cb0c.js","assets/rtl.f3ed811c.js","assets/QSpace.f164c087.js","assets/QBtnGroup.abc2d1c7.js","assets/ClosePopup.9d17b53c.js","assets/CartStore.484ff101.js","assets/FavoriteStore.f91e6f21.js","assets/DeliverySched.4e9605bf.js"] : void 0)
    )
  },
  data() {
    return {
      loading: false,
      slide: 1,
      data: [],
      test: [],
      restaurant_slug: "",
      payload: [
        "items",
        "subtotal",
        "distance_local",
        "items_count",
        "merchant_info",
        "check_opening",
        "transaction_info"
      ]
    };
  },
  setup() {
    const DataStore = useDataStore();
    const DataStorePersisted = useDataStorePersisted();
    const CartStore = useCartStore();
    return {
      modules: [Autoplay],
      DataStore,
      DataStorePersisted,
      CartStore
    };
  },
  mounted() {
    if (Object.keys(this.DataStore.banner).length <= 0) {
      this.DataStore.getBanner();
    }
  },
  computed: {
    hasData() {
      if (this.DataStore.banner.length > 0) {
        return true;
      }
      return false;
    }
  },
  methods: {
    afterAdditems() {
      console.log("afterAdditems");
      APIinterface.setStorage("merchant_slug", this.restaurant_slug);
      this.CartStore.getCart(true, this.payload);
    },
    showBanner(data) {
      switch (data.banner_type) {
        case "restaurant":
          let slug = !APIinterface.empty(
            this.DataStore.merchant_list[data.merchant_id]
          ) ? this.DataStore.merchant_list[data.merchant_id].restaurant_slug : "";
          if (!APIinterface.empty(slug)) {
            this.$router.push({ name: "menu", params: { slug } });
          }
          break;
        case "food":
          console.log(data.item_id);
          let items = !APIinterface.empty(
            this.DataStore.food_list[data.item_id]
          ) ? this.DataStore.food_list[data.item_id] : "";
          if (Object.keys(items).length > 0) {
            this.restaurant_slug = items.restaurant_slug;
            const params = {
              cat_id: parseInt(items.cat_id),
              item_uuid: items.item_uuid
            };
            if (this.DataStore.addons_use_checkbox) {
              this.$refs.item_details2.showItem2(params, this.restaurant_slug);
            } else {
              this.$refs.item_details.showItem2(params, this.restaurant_slug);
            }
          }
          break;
        case "restaurant_featured":
          let featured = data.featured;
          if (!APIinterface.empty(featured)) {
            this.$router.push({
              name: "feed",
              query: { query: "featured", featured_id: featured }
            });
          }
          break;
        case "cuisine":
          let cuisine_name = !APIinterface.empty(
            this.DataStore.cuisine_list[data.cuisine_id]
          ) ? this.DataStore.cuisine_list[data.cuisine_id] : "";
          this.$router.push({
            name: "feed",
            query: {
              query: "all",
              cuisine_id: data.cuisine_id,
              cuisine_name
            }
          });
          break;
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_swiper = resolveComponent("swiper");
  const _component_ItemDetails = resolveComponent("ItemDetails");
  const _component_ItemDetailsCheckbox = resolveComponent("ItemDetailsCheckbox");
  return openBlock(), createElementBlock(Fragment, null, [
    $setup.DataStore.banner_loading ? (openBlock(), createBlock(QSkeleton, {
      key: 0,
      height: "200px"
    })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
      $options.hasData ? (openBlock(), createBlock(_component_swiper, {
        key: 0,
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        class: "q-mb-md",
        autoplay: {
          delay: 3e3,
          disableOnInteraction: false
        },
        modules: $setup.modules
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList($setup.DataStore.banner, (items, index) => {
            return openBlock(), createBlock(_component_swiper_slide, {
              key: items.banner_id,
              name: index,
              style: { "height": "300px" }
            }, {
              default: withCtx(() => [
                createVNode(QImg, {
                  src: items.image,
                  class: "fit radius10 cursor-pointer",
                  fit: "cover",
                  loading: "lazy",
                  "spinner-color": "primary",
                  "spinner-size": "md",
                  onClick: ($event) => $options.showBanner(items)
                }, null, 8, ["src", "onClick"])
              ]),
              _: 2
            }, 1032, ["name"]);
          }), 128))
        ]),
        _: 1
      }, 8, ["modules"])) : createCommentVNode("", true)
    ], 64)),
    createVNode(_component_ItemDetails, {
      ref: "item_details",
      slug: $data.restaurant_slug,
      money_config: $setup.DataStore.money_config,
      currency_code: $setup.DataStorePersisted.use_currency_code,
      onAfterAdditems: $options.afterAdditems
    }, null, 8, ["slug", "money_config", "currency_code", "onAfterAdditems"]),
    createVNode(_component_ItemDetailsCheckbox, {
      ref: "item_details2",
      slug: $data.restaurant_slug,
      money_config: $setup.DataStore.money_config,
      currency_code: $setup.DataStorePersisted.use_currency_code,
      onAfterAdditems: $options.afterAdditems
    }, null, 8, ["slug", "money_config", "currency_code", "onAfterAdditems"])
  ], 64);
}
var HomeBanner = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "HomeBanner.vue"]]);
export { HomeBanner as default };
//# sourceMappingURL=data:application/json;base64,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Q0FlZUQ7Z0NBZmZFO0FBZWUsY0FiWixLQUFLLE1BQU07QUFBQSxjQUNYLE1BQU07QUFBQSxjQUNQO0FBQXFCOytCQUVyQjtBQVFFLGdCQVJGQyxZQVFFO0FBQUEsa0JBUEMsS0FBSyxNQUFNO0FBQUEsa0JBQ1osT0FBTTtBQUFBLGtCQUNOLEtBQUk7QUFBQSxrQkFDSixTQUFRO0FBQUEsa0JBQ1IsaUJBQWM7QUFBQSxrQkFDZCxnQkFBYTtBQUFBLGtCQUNaLFNBQUssWUFBRTtBQUFnQjs7Ozs7Ozs7O0lBT2xDQSxZQU1FO0FBQUEsTUFMQSxLQUFJO0FBQUEsTUFDSCxNQUFNLE1BQWU7QUFBQSxNQUNyQixjQUFjLE9BQVMsVUFBQztBQUFBLE1BQ3hCLGVBQWUsT0FBa0I7QUFBQyxNQUNsQyxpQkFBZ0IsU0FBYTtBQUFBO0lBR2hDQSxZQU1FO0FBQUEsTUFMQSxLQUFJO0FBQUEsTUFDSCxNQUFNLE1BQWU7QUFBQSxNQUNyQixjQUFjLE9BQVMsVUFBQztBQUFBLE1BQ3hCLGVBQWUsT0FBa0I7QUFBQyxNQUNsQyxpQkFBZ0IsU0FBYTtBQUFBIiwibmFtZXMiOlsiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9GcmFnbWVudCIsIl9vcGVuQmxvY2siLCJfY3JlYXRlQmxvY2siLCJfY3JlYXRlVk5vZGUiXSwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL21vZHVsZXMvYXV0b3BsYXkvYXV0b3BsYXkuanMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Ib21lQmFubmVyLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgbm8tdW5kZXJzY29yZS1kYW5nbGU6IFwib2ZmXCIgKi9cblxuLyogZXNsaW50IG5vLXVzZS1iZWZvcmUtZGVmaW5lOiBcIm9mZlwiICovXG5pbXBvcnQgeyBnZXREb2N1bWVudCB9IGZyb20gJ3Nzci13aW5kb3cnO1xuaW1wb3J0IHsgbmV4dFRpY2sgfSBmcm9tICcuLi8uLi9zaGFyZWQvdXRpbHMuanMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXV0b3BsYXkoe1xuICBzd2lwZXIsXG4gIGV4dGVuZFBhcmFtcyxcbiAgb24sXG4gIGVtaXRcbn0pIHtcbiAgbGV0IHRpbWVvdXQ7XG4gIHN3aXBlci5hdXRvcGxheSA9IHtcbiAgICBydW5uaW5nOiBmYWxzZSxcbiAgICBwYXVzZWQ6IGZhbHNlXG4gIH07XG4gIGV4dGVuZFBhcmFtcyh7XG4gICAgYXV0b3BsYXk6IHtcbiAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgZGVsYXk6IDMwMDAsXG4gICAgICB3YWl0Rm9yVHJhbnNpdGlvbjogdHJ1ZSxcbiAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiB0cnVlLFxuICAgICAgc3RvcE9uTGFzdFNsaWRlOiBmYWxzZSxcbiAgICAgIHJldmVyc2VEaXJlY3Rpb246IGZhbHNlLFxuICAgICAgcGF1c2VPbk1vdXNlRW50ZXI6IGZhbHNlXG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiBydW4oKSB7XG4gICAgaWYgKCFzd2lwZXIuc2l6ZSkge1xuICAgICAgc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgIHN3aXBlci5hdXRvcGxheS5wYXVzZWQgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCAkYWN0aXZlU2xpZGVFbCA9IHN3aXBlci5zbGlkZXMuZXEoc3dpcGVyLmFjdGl2ZUluZGV4KTtcbiAgICBsZXQgZGVsYXkgPSBzd2lwZXIucGFyYW1zLmF1dG9wbGF5LmRlbGF5O1xuXG4gICAgaWYgKCRhY3RpdmVTbGlkZUVsLmF0dHIoJ2RhdGEtc3dpcGVyLWF1dG9wbGF5JykpIHtcbiAgICAgIGRlbGF5ID0gJGFjdGl2ZVNsaWRlRWwuYXR0cignZGF0YS1zd2lwZXItYXV0b3BsYXknKSB8fCBzd2lwZXIucGFyYW1zLmF1dG9wbGF5LmRlbGF5O1xuICAgIH1cblxuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB0aW1lb3V0ID0gbmV4dFRpY2soKCkgPT4ge1xuICAgICAgbGV0IGF1dG9wbGF5UmVzdWx0O1xuXG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5yZXZlcnNlRGlyZWN0aW9uKSB7XG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgICAgICBzd2lwZXIubG9vcEZpeCgpO1xuICAgICAgICAgIGF1dG9wbGF5UmVzdWx0ID0gc3dpcGVyLnNsaWRlUHJldihzd2lwZXIucGFyYW1zLnNwZWVkLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICBlbWl0KCdhdXRvcGxheScpO1xuICAgICAgICB9IGVsc2UgaWYgKCFzd2lwZXIuaXNCZWdpbm5pbmcpIHtcbiAgICAgICAgICBhdXRvcGxheVJlc3VsdCA9IHN3aXBlci5zbGlkZVByZXYoc3dpcGVyLnBhcmFtcy5zcGVlZCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgZW1pdCgnYXV0b3BsYXknKTtcbiAgICAgICAgfSBlbHNlIGlmICghc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5zdG9wT25MYXN0U2xpZGUpIHtcbiAgICAgICAgICBhdXRvcGxheVJlc3VsdCA9IHN3aXBlci5zbGlkZVRvKHN3aXBlci5zbGlkZXMubGVuZ3RoIC0gMSwgc3dpcGVyLnBhcmFtcy5zcGVlZCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgZW1pdCgnYXV0b3BsYXknKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgICAgIHN3aXBlci5sb29wRml4KCk7XG4gICAgICAgIGF1dG9wbGF5UmVzdWx0ID0gc3dpcGVyLnNsaWRlTmV4dChzd2lwZXIucGFyYW1zLnNwZWVkLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgZW1pdCgnYXV0b3BsYXknKTtcbiAgICAgIH0gZWxzZSBpZiAoIXN3aXBlci5pc0VuZCkge1xuICAgICAgICBhdXRvcGxheVJlc3VsdCA9IHN3aXBlci5zbGlkZU5leHQoc3dpcGVyLnBhcmFtcy5zcGVlZCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIGVtaXQoJ2F1dG9wbGF5Jyk7XG4gICAgICB9IGVsc2UgaWYgKCFzd2lwZXIucGFyYW1zLmF1dG9wbGF5LnN0b3BPbkxhc3RTbGlkZSkge1xuICAgICAgICBhdXRvcGxheVJlc3VsdCA9IHN3aXBlci5zbGlkZVRvKDAsIHN3aXBlci5wYXJhbXMuc3BlZWQsIHRydWUsIHRydWUpO1xuICAgICAgICBlbWl0KCdhdXRvcGxheScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RvcCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5jc3NNb2RlICYmIHN3aXBlci5hdXRvcGxheS5ydW5uaW5nKSBydW4oKTtlbHNlIGlmIChhdXRvcGxheVJlc3VsdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgcnVuKCk7XG4gICAgICB9XG4gICAgfSwgZGVsYXkpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgaWYgKHR5cGVvZiB0aW1lb3V0ICE9PSAndW5kZWZpbmVkJykgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChzd2lwZXIuYXV0b3BsYXkucnVubmluZykgcmV0dXJuIGZhbHNlO1xuICAgIHN3aXBlci5hdXRvcGxheS5ydW5uaW5nID0gdHJ1ZTtcbiAgICBlbWl0KCdhdXRvcGxheVN0YXJ0Jyk7XG4gICAgcnVuKCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBzdG9wKCkge1xuICAgIGlmICghc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcpIHJldHVybiBmYWxzZTtcbiAgICBpZiAodHlwZW9mIHRpbWVvdXQgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gZmFsc2U7XG5cbiAgICBpZiAodGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgdGltZW91dCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBzd2lwZXIuYXV0b3BsYXkucnVubmluZyA9IGZhbHNlO1xuICAgIGVtaXQoJ2F1dG9wbGF5U3RvcCcpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gcGF1c2Uoc3BlZWQpIHtcbiAgICBpZiAoIXN3aXBlci5hdXRvcGxheS5ydW5uaW5nKSByZXR1cm47XG4gICAgaWYgKHN3aXBlci5hdXRvcGxheS5wYXVzZWQpIHJldHVybjtcbiAgICBpZiAodGltZW91dCkgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIHN3aXBlci5hdXRvcGxheS5wYXVzZWQgPSB0cnVlO1xuXG4gICAgaWYgKHNwZWVkID09PSAwIHx8ICFzd2lwZXIucGFyYW1zLmF1dG9wbGF5LndhaXRGb3JUcmFuc2l0aW9uKSB7XG4gICAgICBzd2lwZXIuYXV0b3BsYXkucGF1c2VkID0gZmFsc2U7XG4gICAgICBydW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgWyd0cmFuc2l0aW9uZW5kJywgJ3dlYmtpdFRyYW5zaXRpb25FbmQnXS5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgICAgc3dpcGVyLiR3cmFwcGVyRWxbMF0uYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgb25UcmFuc2l0aW9uRW5kKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uVmlzaWJpbGl0eUNoYW5nZSgpIHtcbiAgICBjb25zdCBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG5cbiAgICBpZiAoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID09PSAnaGlkZGVuJyAmJiBzd2lwZXIuYXV0b3BsYXkucnVubmluZykge1xuICAgICAgcGF1c2UoKTtcbiAgICB9XG5cbiAgICBpZiAoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID09PSAndmlzaWJsZScgJiYgc3dpcGVyLmF1dG9wbGF5LnBhdXNlZCkge1xuICAgICAgcnVuKCk7XG4gICAgICBzd2lwZXIuYXV0b3BsYXkucGF1c2VkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25UcmFuc2l0aW9uRW5kKGUpIHtcbiAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkIHx8ICFzd2lwZXIuJHdyYXBwZXJFbCkgcmV0dXJuO1xuICAgIGlmIChlLnRhcmdldCAhPT0gc3dpcGVyLiR3cmFwcGVyRWxbMF0pIHJldHVybjtcbiAgICBbJ3RyYW5zaXRpb25lbmQnLCAnd2Via2l0VHJhbnNpdGlvbkVuZCddLmZvckVhY2goZXZlbnQgPT4ge1xuICAgICAgc3dpcGVyLiR3cmFwcGVyRWxbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgb25UcmFuc2l0aW9uRW5kKTtcbiAgICB9KTtcbiAgICBzd2lwZXIuYXV0b3BsYXkucGF1c2VkID0gZmFsc2U7XG5cbiAgICBpZiAoIXN3aXBlci5hdXRvcGxheS5ydW5uaW5nKSB7XG4gICAgICBzdG9wKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJ1bigpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uTW91c2VFbnRlcigpIHtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5kaXNhYmxlT25JbnRlcmFjdGlvbikge1xuICAgICAgc3RvcCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbWl0KCdhdXRvcGxheVBhdXNlJyk7XG4gICAgICBwYXVzZSgpO1xuICAgIH1cblxuICAgIFsndHJhbnNpdGlvbmVuZCcsICd3ZWJraXRUcmFuc2l0aW9uRW5kJ10uZm9yRWFjaChldmVudCA9PiB7XG4gICAgICBzd2lwZXIuJHdyYXBwZXJFbFswXS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBvblRyYW5zaXRpb25FbmQpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Nb3VzZUxlYXZlKCkge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmF1dG9wbGF5LmRpc2FibGVPbkludGVyYWN0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3dpcGVyLmF1dG9wbGF5LnBhdXNlZCA9IGZhbHNlO1xuICAgIGVtaXQoJ2F1dG9wbGF5UmVzdW1lJyk7XG4gICAgcnVuKCk7XG4gIH1cblxuICBmdW5jdGlvbiBhdHRhY2hNb3VzZUV2ZW50cygpIHtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5wYXVzZU9uTW91c2VFbnRlcikge1xuICAgICAgc3dpcGVyLiRlbC5vbignbW91c2VlbnRlcicsIG9uTW91c2VFbnRlcik7XG4gICAgICBzd2lwZXIuJGVsLm9uKCdtb3VzZWxlYXZlJywgb25Nb3VzZUxlYXZlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkZXRhY2hNb3VzZUV2ZW50cygpIHtcbiAgICBzd2lwZXIuJGVsLm9mZignbW91c2VlbnRlcicsIG9uTW91c2VFbnRlcik7XG4gICAgc3dpcGVyLiRlbC5vZmYoJ21vdXNlbGVhdmUnLCBvbk1vdXNlTGVhdmUpO1xuICB9XG5cbiAgb24oJ2luaXQnLCAoKSA9PiB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMuYXV0b3BsYXkuZW5hYmxlZCkge1xuICAgICAgc3RhcnQoKTtcbiAgICAgIGNvbnN0IGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBvblZpc2liaWxpdHlDaGFuZ2UpO1xuICAgICAgYXR0YWNoTW91c2VFdmVudHMoKTtcbiAgICB9XG4gIH0pO1xuICBvbignYmVmb3JlVHJhbnNpdGlvblN0YXJ0JywgKF9zLCBzcGVlZCwgaW50ZXJuYWwpID0+IHtcbiAgICBpZiAoc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcpIHtcbiAgICAgIGlmIChpbnRlcm5hbCB8fCAhc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5kaXNhYmxlT25JbnRlcmFjdGlvbikge1xuICAgICAgICBzd2lwZXIuYXV0b3BsYXkucGF1c2Uoc3BlZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RvcCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIG9uKCdzbGlkZXJGaXJzdE1vdmUnLCAoKSA9PiB7XG4gICAgaWYgKHN3aXBlci5hdXRvcGxheS5ydW5uaW5nKSB7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5kaXNhYmxlT25JbnRlcmFjdGlvbikge1xuICAgICAgICBzdG9wKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXVzZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIG9uKCd0b3VjaEVuZCcsICgpID0+IHtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5jc3NNb2RlICYmIHN3aXBlci5hdXRvcGxheS5wYXVzZWQgJiYgIXN3aXBlci5wYXJhbXMuYXV0b3BsYXkuZGlzYWJsZU9uSW50ZXJhY3Rpb24pIHtcbiAgICAgIHJ1bigpO1xuICAgIH1cbiAgfSk7XG4gIG9uKCdkZXN0cm95JywgKCkgPT4ge1xuICAgIGRldGFjaE1vdXNlRXZlbnRzKCk7XG5cbiAgICBpZiAoc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcpIHtcbiAgICAgIHN0b3AoKTtcbiAgICB9XG5cbiAgICBjb25zdCBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIG9uVmlzaWJpbGl0eUNoYW5nZSk7XG4gIH0pO1xuICBPYmplY3QuYXNzaWduKHN3aXBlci5hdXRvcGxheSwge1xuICAgIHBhdXNlLFxuICAgIHJ1bixcbiAgICBzdGFydCxcbiAgICBzdG9wXG4gIH0pO1xufSIsIjx0ZW1wbGF0ZT5cbiAgPHRlbXBsYXRlIHYtaWY9XCJEYXRhU3RvcmUuYmFubmVyX2xvYWRpbmdcIj5cbiAgICA8cS1za2VsZXRvbiBoZWlnaHQ9XCIyMDBweFwiIC8+XG4gIDwvdGVtcGxhdGU+XG4gIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgPHRlbXBsYXRlIHYtaWY9XCJoYXNEYXRhXCI+XG4gICAgICA8c3dpcGVyXG4gICAgICAgIDpzbGlkZXNQZXJWaWV3PVwiMVwiXG4gICAgICAgIDpzcGFjZUJldHdlZW49XCIwXCJcbiAgICAgICAgOmxvb3A9XCJ0cnVlXCJcbiAgICAgICAgY2xhc3M9XCJxLW1iLW1kXCJcbiAgICAgICAgOmF1dG9wbGF5PVwie1xuICAgICAgICAgIGRlbGF5OiAzMDAwLFxuICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcbiAgICAgICAgfVwiXG4gICAgICAgIDptb2R1bGVzPVwibW9kdWxlc1wiXG4gICAgICA+XG4gICAgICAgIDxzd2lwZXItc2xpZGVcbiAgICAgICAgICB2LWZvcj1cIihpdGVtcywgaW5kZXgpIGluIERhdGFTdG9yZS5iYW5uZXJcIlxuICAgICAgICAgIDprZXk9XCJpdGVtcy5iYW5uZXJfaWRcIlxuICAgICAgICAgIDpuYW1lPVwiaW5kZXhcIlxuICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiAzMDBweFwiXG4gICAgICAgID5cbiAgICAgICAgICA8cS1pbWdcbiAgICAgICAgICAgIDpzcmM9XCJpdGVtcy5pbWFnZVwiXG4gICAgICAgICAgICBjbGFzcz1cImZpdCByYWRpdXMxMCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICBmaXQ9XCJjb3ZlclwiXG4gICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgICBzcGlubmVyLWNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBzcGlubmVyLXNpemU9XCJtZFwiXG4gICAgICAgICAgICBAY2xpY2s9XCJzaG93QmFubmVyKGl0ZW1zKVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zd2lwZXItc2xpZGU+XG4gICAgICA8L3N3aXBlcj5cbiAgICA8L3RlbXBsYXRlPlxuICA8L3RlbXBsYXRlPlxuXG4gIDxJdGVtRGV0YWlsc1xuICAgIHJlZj1cIml0ZW1fZGV0YWlsc1wiXG4gICAgOnNsdWc9XCJyZXN0YXVyYW50X3NsdWdcIlxuICAgIDptb25leV9jb25maWc9XCJEYXRhU3RvcmUubW9uZXlfY29uZmlnXCJcbiAgICA6Y3VycmVuY3lfY29kZT1cIkRhdGFTdG9yZVBlcnNpc3RlZC51c2VfY3VycmVuY3lfY29kZVwiXG4gICAgQGFmdGVyLWFkZGl0ZW1zPVwiYWZ0ZXJBZGRpdGVtc1wiXG4gIC8+XG5cbiAgPEl0ZW1EZXRhaWxzQ2hlY2tib3hcbiAgICByZWY9XCJpdGVtX2RldGFpbHMyXCJcbiAgICA6c2x1Zz1cInJlc3RhdXJhbnRfc2x1Z1wiXG4gICAgOm1vbmV5X2NvbmZpZz1cIkRhdGFTdG9yZS5tb25leV9jb25maWdcIlxuICAgIDpjdXJyZW5jeV9jb2RlPVwiRGF0YVN0b3JlUGVyc2lzdGVkLnVzZV9jdXJyZW5jeV9jb2RlXCJcbiAgICBAYWZ0ZXItYWRkaXRlbXM9XCJhZnRlckFkZGl0ZW1zXCJcbiAgLz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBkZWZpbmVBc3luY0NvbXBvbmVudCB9IGZyb20gXCJ2dWVcIjtcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tIFwic3dpcGVyL3Z1ZVwiO1xuaW1wb3J0IFwic3dpcGVyL2Nzc1wiO1xuaW1wb3J0IHsgQXV0b3BsYXkgfSBmcm9tIFwic3dpcGVyXCI7XG5cbmltcG9ydCBBUElpbnRlcmZhY2UgZnJvbSBcInNyYy9hcGkvQVBJaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyB1c2VEYXRhU3RvcmUgfSBmcm9tIFwic3RvcmVzL0RhdGFTdG9yZVwiO1xuaW1wb3J0IHsgdXNlRGF0YVN0b3JlUGVyc2lzdGVkIH0gZnJvbSBcInN0b3Jlcy9EYXRhU3RvcmVQZXJzaXN0ZWRcIjtcbmltcG9ydCB7IHVzZUNhcnRTdG9yZSB9IGZyb20gXCJzdG9yZXMvQ2FydFN0b3JlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJIb21lQmFubmVyXCIsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBTd2lwZXIsXG4gICAgU3dpcGVyU2xpZGUsXG4gICAgSXRlbURldGFpbHM6IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+XG4gICAgICBpbXBvcnQoXCJjb21wb25lbnRzL0l0ZW1EZXRhaWxzLnZ1ZVwiKVxuICAgICksXG4gICAgSXRlbURldGFpbHNDaGVja2JveDogZGVmaW5lQXN5bmNDb21wb25lbnQoKCkgPT5cbiAgICAgIGltcG9ydChcImNvbXBvbmVudHMvSXRlbURldGFpbHNDaGVja2JveC52dWVcIilcbiAgICApLFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIHNsaWRlOiAxLFxuICAgICAgZGF0YTogW10sXG4gICAgICB0ZXN0OiBbXSxcbiAgICAgIHJlc3RhdXJhbnRfc2x1ZzogXCJcIixcbiAgICAgIHBheWxvYWQ6IFtcbiAgICAgICAgXCJpdGVtc1wiLFxuICAgICAgICBcInN1YnRvdGFsXCIsXG4gICAgICAgIFwiZGlzdGFuY2VfbG9jYWxcIixcbiAgICAgICAgXCJpdGVtc19jb3VudFwiLFxuICAgICAgICBcIm1lcmNoYW50X2luZm9cIixcbiAgICAgICAgXCJjaGVja19vcGVuaW5nXCIsXG4gICAgICAgIFwidHJhbnNhY3Rpb25faW5mb1wiLFxuICAgICAgXSxcbiAgICB9O1xuICB9LFxuICBzZXR1cCgpIHtcbiAgICBjb25zdCBEYXRhU3RvcmUgPSB1c2VEYXRhU3RvcmUoKTtcbiAgICBjb25zdCBEYXRhU3RvcmVQZXJzaXN0ZWQgPSB1c2VEYXRhU3RvcmVQZXJzaXN0ZWQoKTtcbiAgICBjb25zdCBDYXJ0U3RvcmUgPSB1c2VDYXJ0U3RvcmUoKTtcbiAgICByZXR1cm4ge1xuICAgICAgbW9kdWxlczogW0F1dG9wbGF5XSxcbiAgICAgIERhdGFTdG9yZSxcbiAgICAgIERhdGFTdG9yZVBlcnNpc3RlZCxcbiAgICAgIENhcnRTdG9yZSxcbiAgICB9O1xuICB9LFxuICBtb3VudGVkKCkge1xuICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLkRhdGFTdG9yZS5iYW5uZXIpLmxlbmd0aCA8PSAwKSB7XG4gICAgICB0aGlzLkRhdGFTdG9yZS5nZXRCYW5uZXIoKTtcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgaGFzRGF0YSgpIHtcbiAgICAgIGlmICh0aGlzLkRhdGFTdG9yZS5iYW5uZXIubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYWZ0ZXJBZGRpdGVtcygpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiYWZ0ZXJBZGRpdGVtc1wiKTtcbiAgICAgIEFQSWludGVyZmFjZS5zZXRTdG9yYWdlKFwibWVyY2hhbnRfc2x1Z1wiLCB0aGlzLnJlc3RhdXJhbnRfc2x1Zyk7XG4gICAgICB0aGlzLkNhcnRTdG9yZS5nZXRDYXJ0KHRydWUsIHRoaXMucGF5bG9hZCk7XG4gICAgfSxcbiAgICBzaG93QmFubmVyKGRhdGEpIHtcbiAgICAgIHN3aXRjaCAoZGF0YS5iYW5uZXJfdHlwZSkge1xuICAgICAgICBjYXNlIFwicmVzdGF1cmFudFwiOlxuICAgICAgICAgIGxldCBzbHVnID0gIUFQSWludGVyZmFjZS5lbXB0eShcbiAgICAgICAgICAgIHRoaXMuRGF0YVN0b3JlLm1lcmNoYW50X2xpc3RbZGF0YS5tZXJjaGFudF9pZF1cbiAgICAgICAgICApXG4gICAgICAgICAgICA/IHRoaXMuRGF0YVN0b3JlLm1lcmNoYW50X2xpc3RbZGF0YS5tZXJjaGFudF9pZF0ucmVzdGF1cmFudF9zbHVnXG4gICAgICAgICAgICA6IFwiXCI7XG5cbiAgICAgICAgICBpZiAoIUFQSWludGVyZmFjZS5lbXB0eShzbHVnKSkge1xuICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBuYW1lOiBcIm1lbnVcIiwgcGFyYW1zOiB7IHNsdWc6IHNsdWcgfSB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcImZvb2RcIjpcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLml0ZW1faWQpO1xuICAgICAgICAgIGxldCBpdGVtcyA9ICFBUElpbnRlcmZhY2UuZW1wdHkoXG4gICAgICAgICAgICB0aGlzLkRhdGFTdG9yZS5mb29kX2xpc3RbZGF0YS5pdGVtX2lkXVxuICAgICAgICAgIClcbiAgICAgICAgICAgID8gdGhpcy5EYXRhU3RvcmUuZm9vZF9saXN0W2RhdGEuaXRlbV9pZF1cbiAgICAgICAgICAgIDogXCJcIjtcblxuICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhpdGVtcykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5yZXN0YXVyYW50X3NsdWcgPSBpdGVtcy5yZXN0YXVyYW50X3NsdWc7XG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgIGNhdF9pZDogcGFyc2VJbnQoaXRlbXMuY2F0X2lkKSxcbiAgICAgICAgICAgICAgaXRlbV91dWlkOiBpdGVtcy5pdGVtX3V1aWQsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHRoaXMuRGF0YVN0b3JlLmFkZG9uc191c2VfY2hlY2tib3gpIHtcbiAgICAgICAgICAgICAgdGhpcy4kcmVmcy5pdGVtX2RldGFpbHMyLnNob3dJdGVtMihwYXJhbXMsIHRoaXMucmVzdGF1cmFudF9zbHVnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuJHJlZnMuaXRlbV9kZXRhaWxzLnNob3dJdGVtMihwYXJhbXMsIHRoaXMucmVzdGF1cmFudF9zbHVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcInJlc3RhdXJhbnRfZmVhdHVyZWRcIjpcbiAgICAgICAgICBsZXQgZmVhdHVyZWQgPSBkYXRhLmZlYXR1cmVkO1xuICAgICAgICAgIGlmICghQVBJaW50ZXJmYWNlLmVtcHR5KGZlYXR1cmVkKSkge1xuICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xuICAgICAgICAgICAgICBuYW1lOiBcImZlZWRcIixcbiAgICAgICAgICAgICAgcXVlcnk6IHsgcXVlcnk6IFwiZmVhdHVyZWRcIiwgZmVhdHVyZWRfaWQ6IGZlYXR1cmVkIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJjdWlzaW5lXCI6XG4gICAgICAgICAgbGV0IGN1aXNpbmVfbmFtZSA9ICFBUElpbnRlcmZhY2UuZW1wdHkoXG4gICAgICAgICAgICB0aGlzLkRhdGFTdG9yZS5jdWlzaW5lX2xpc3RbZGF0YS5jdWlzaW5lX2lkXVxuICAgICAgICAgIClcbiAgICAgICAgICAgID8gdGhpcy5EYXRhU3RvcmUuY3Vpc2luZV9saXN0W2RhdGEuY3Vpc2luZV9pZF1cbiAgICAgICAgICAgIDogXCJcIjtcblxuICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IFwiZmVlZFwiLFxuICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgcXVlcnk6IFwiYWxsXCIsXG4gICAgICAgICAgICAgIGN1aXNpbmVfaWQ6IGRhdGEuY3Vpc2luZV9pZCxcbiAgICAgICAgICAgICAgY3Vpc2luZV9uYW1lOiBjdWlzaW5lX25hbWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iXSwiZmlsZSI6ImFzc2V0cy9Ib21lQmFubmVyLjUzZGMzMjhjLmpzIn0=
