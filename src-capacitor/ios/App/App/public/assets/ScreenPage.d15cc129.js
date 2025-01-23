import { Q as QImg } from "./QImg.6c27044c.js";
import { _ as _export_sfc, R as useDataStore, S as useDataStorePersisted, r as ref, m as APIinterface, n as resolveComponent, p as openBlock, q as createBlock, t as withCtx, U as createBaseVNode, f as createVNode, V as createElementBlock, X as renderList, F as Fragment, Y as QBtn, Z as toDisplayString } from "./index.61ed5618.js";
import { Q as QFooter } from "./QFooter.571ac042.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import { g as getDocument, $, S as Swiper, a as SwiperSlide } from "./swiper-slide.8a0c58df.js";
/* empty css                     */import "./QResizeObserver.d08dce3c.js";
function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
  const document = getDocument();
  if (swiper.params.createElements) {
    Object.keys(checkProps).forEach((key) => {
      if (!params[key] && params.auto === true) {
        let element = swiper.$el.children(`.${checkProps[key]}`)[0];
        if (!element) {
          element = document.createElement("div");
          element.className = checkProps[key];
          swiper.$el.append(element);
        }
        params[key] = element;
        originalParams[key] = element;
      }
    });
  }
  return params;
}
function classesToSelector(classes = "") {
  return `.${classes.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`;
}
function Pagination({
  swiper,
  extendParams,
  on,
  emit
}) {
  const pfx = "swiper-pagination";
  extendParams({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: "bullets",
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: (number) => number,
      formatFractionTotal: (number) => number,
      bulletClass: `${pfx}-bullet`,
      bulletActiveClass: `${pfx}-bullet-active`,
      modifierClass: `${pfx}-`,
      currentClass: `${pfx}-current`,
      totalClass: `${pfx}-total`,
      hiddenClass: `${pfx}-hidden`,
      progressbarFillClass: `${pfx}-progressbar-fill`,
      progressbarOppositeClass: `${pfx}-progressbar-opposite`,
      clickableClass: `${pfx}-clickable`,
      lockClass: `${pfx}-lock`,
      horizontalClass: `${pfx}-horizontal`,
      verticalClass: `${pfx}-vertical`,
      paginationDisabledClass: `${pfx}-disabled`
    }
  });
  swiper.pagination = {
    el: null,
    $el: null,
    bullets: []
  };
  let bulletSize;
  let dynamicBulletIndex = 0;
  function isPaginationDisabled() {
    return !swiper.params.pagination.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0;
  }
  function setSideBullets($bulletEl, position) {
    const {
      bulletActiveClass
    } = swiper.params.pagination;
    $bulletEl[position]().addClass(`${bulletActiveClass}-${position}`)[position]().addClass(`${bulletActiveClass}-${position}-${position}`);
  }
  function update() {
    const rtl = swiper.rtl;
    const params = swiper.params.pagination;
    if (isPaginationDisabled())
      return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    const $el = swiper.pagination.$el;
    let current;
    const total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
    if (swiper.params.loop) {
      current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
      if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
        current -= slidesLength - swiper.loopedSlides * 2;
      }
      if (current > total - 1)
        current -= total;
      if (current < 0 && swiper.params.paginationType !== "bullets")
        current = total + current;
    } else if (typeof swiper.snapIndex !== "undefined") {
      current = swiper.snapIndex;
    } else {
      current = swiper.activeIndex || 0;
    }
    if (params.type === "bullets" && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      const bullets = swiper.pagination.bullets;
      let firstIndex;
      let lastIndex;
      let midIndex;
      if (params.dynamicBullets) {
        bulletSize = bullets.eq(0)[swiper.isHorizontal() ? "outerWidth" : "outerHeight"](true);
        $el.css(swiper.isHorizontal() ? "width" : "height", `${bulletSize * (params.dynamicMainBullets + 4)}px`);
        if (params.dynamicMainBullets > 1 && swiper.previousIndex !== void 0) {
          dynamicBulletIndex += current - (swiper.previousIndex - swiper.loopedSlides || 0);
          if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
            dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (dynamicBulletIndex < 0) {
            dynamicBulletIndex = 0;
          }
        }
        firstIndex = Math.max(current - dynamicBulletIndex, 0);
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }
      bullets.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((suffix) => `${params.bulletActiveClass}${suffix}`).join(" "));
      if ($el.length > 1) {
        bullets.each((bullet) => {
          const $bullet = $(bullet);
          const bulletIndex = $bullet.index();
          if (bulletIndex === current) {
            $bullet.addClass(params.bulletActiveClass);
          }
          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              $bullet.addClass(`${params.bulletActiveClass}-main`);
            }
            if (bulletIndex === firstIndex) {
              setSideBullets($bullet, "prev");
            }
            if (bulletIndex === lastIndex) {
              setSideBullets($bullet, "next");
            }
          }
        });
      } else {
        const $bullet = bullets.eq(current);
        const bulletIndex = $bullet.index();
        $bullet.addClass(params.bulletActiveClass);
        if (params.dynamicBullets) {
          const $firstDisplayedBullet = bullets.eq(firstIndex);
          const $lastDisplayedBullet = bullets.eq(lastIndex);
          for (let i = firstIndex; i <= lastIndex; i += 1) {
            bullets.eq(i).addClass(`${params.bulletActiveClass}-main`);
          }
          if (swiper.params.loop) {
            if (bulletIndex >= bullets.length) {
              for (let i = params.dynamicMainBullets; i >= 0; i -= 1) {
                bullets.eq(bullets.length - i).addClass(`${params.bulletActiveClass}-main`);
              }
              bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(`${params.bulletActiveClass}-prev`);
            } else {
              setSideBullets($firstDisplayedBullet, "prev");
              setSideBullets($lastDisplayedBullet, "next");
            }
          } else {
            setSideBullets($firstDisplayedBullet, "prev");
            setSideBullets($lastDisplayedBullet, "next");
          }
        }
      }
      if (params.dynamicBullets) {
        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
        const offsetProp = rtl ? "right" : "left";
        bullets.css(swiper.isHorizontal() ? offsetProp : "top", `${bulletsOffset}px`);
      }
    }
    if (params.type === "fraction") {
      $el.find(classesToSelector(params.currentClass)).text(params.formatFractionCurrent(current + 1));
      $el.find(classesToSelector(params.totalClass)).text(params.formatFractionTotal(total));
    }
    if (params.type === "progressbar") {
      let progressbarDirection;
      if (params.progressbarOpposite) {
        progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal";
      } else {
        progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
      }
      const scale = (current + 1) / total;
      let scaleX = 1;
      let scaleY = 1;
      if (progressbarDirection === "horizontal") {
        scaleX = scale;
      } else {
        scaleY = scale;
      }
      $el.find(classesToSelector(params.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`).transition(swiper.params.speed);
    }
    if (params.type === "custom" && params.renderCustom) {
      $el.html(params.renderCustom(swiper, current + 1, total));
      emit("paginationRender", $el[0]);
    } else {
      emit("paginationUpdate", $el[0]);
    }
    if (swiper.params.watchOverflow && swiper.enabled) {
      $el[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
    }
  }
  function render() {
    const params = swiper.params.pagination;
    if (isPaginationDisabled())
      return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    const $el = swiper.pagination.$el;
    let paginationHTML = "";
    if (params.type === "bullets") {
      let numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.loop && numberOfBullets > slidesLength) {
        numberOfBullets = slidesLength;
      }
      for (let i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
        } else {
          paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
        }
      }
      $el.html(paginationHTML);
      swiper.pagination.bullets = $el.find(classesToSelector(params.bulletClass));
    }
    if (params.type === "fraction") {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = `<span class="${params.currentClass}"></span> / <span class="${params.totalClass}"></span>`;
      }
      $el.html(paginationHTML);
    }
    if (params.type === "progressbar") {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
      }
      $el.html(paginationHTML);
    }
    if (params.type !== "custom") {
      emit("paginationRender", swiper.pagination.$el[0]);
    }
  }
  function init() {
    swiper.params.pagination = createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
      el: "swiper-pagination"
    });
    const params = swiper.params.pagination;
    if (!params.el)
      return;
    let $el = $(params.el);
    if ($el.length === 0)
      return;
    if (swiper.params.uniqueNavElements && typeof params.el === "string" && $el.length > 1) {
      $el = swiper.$el.find(params.el);
      if ($el.length > 1) {
        $el = $el.filter((el) => {
          if ($(el).parents(".swiper")[0] !== swiper.el)
            return false;
          return true;
        });
      }
    }
    if (params.type === "bullets" && params.clickable) {
      $el.addClass(params.clickableClass);
    }
    $el.addClass(params.modifierClass + params.type);
    $el.addClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    if (params.type === "bullets" && params.dynamicBullets) {
      $el.addClass(`${params.modifierClass}${params.type}-dynamic`);
      dynamicBulletIndex = 0;
      if (params.dynamicMainBullets < 1) {
        params.dynamicMainBullets = 1;
      }
    }
    if (params.type === "progressbar" && params.progressbarOpposite) {
      $el.addClass(params.progressbarOppositeClass);
    }
    if (params.clickable) {
      $el.on("click", classesToSelector(params.bulletClass), function onClick(e) {
        e.preventDefault();
        let index = $(this).index() * swiper.params.slidesPerGroup;
        if (swiper.params.loop)
          index += swiper.loopedSlides;
        swiper.slideTo(index);
      });
    }
    Object.assign(swiper.pagination, {
      $el,
      el: $el[0]
    });
    if (!swiper.enabled) {
      $el.addClass(params.lockClass);
    }
  }
  function destroy() {
    const params = swiper.params.pagination;
    if (isPaginationDisabled())
      return;
    const $el = swiper.pagination.$el;
    $el.removeClass(params.hiddenClass);
    $el.removeClass(params.modifierClass + params.type);
    $el.removeClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    if (swiper.pagination.bullets && swiper.pagination.bullets.removeClass)
      swiper.pagination.bullets.removeClass(params.bulletActiveClass);
    if (params.clickable) {
      $el.off("click", classesToSelector(params.bulletClass));
    }
  }
  on("init", () => {
    if (swiper.params.pagination.enabled === false) {
      disable();
    } else {
      init();
      render();
      update();
    }
  });
  on("activeIndexChange", () => {
    if (swiper.params.loop) {
      update();
    } else if (typeof swiper.snapIndex === "undefined") {
      update();
    }
  });
  on("snapIndexChange", () => {
    if (!swiper.params.loop) {
      update();
    }
  });
  on("slidesLengthChange", () => {
    if (swiper.params.loop) {
      render();
      update();
    }
  });
  on("snapGridLengthChange", () => {
    if (!swiper.params.loop) {
      render();
      update();
    }
  });
  on("destroy", () => {
    destroy();
  });
  on("enable disable", () => {
    const {
      $el
    } = swiper.pagination;
    if ($el) {
      $el[swiper.enabled ? "removeClass" : "addClass"](swiper.params.pagination.lockClass);
    }
  });
  on("lock unlock", () => {
    update();
  });
  on("click", (_s, e) => {
    const targetEl = e.target;
    const {
      $el
    } = swiper.pagination;
    if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && $el && $el.length > 0 && !$(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
      if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl))
        return;
      const isHidden = $el.hasClass(swiper.params.pagination.hiddenClass);
      if (isHidden === true) {
        emit("paginationShow");
      } else {
        emit("paginationHide");
      }
      $el.toggleClass(swiper.params.pagination.hiddenClass);
    }
  });
  const enable = () => {
    swiper.$el.removeClass(swiper.params.pagination.paginationDisabledClass);
    if (swiper.pagination.$el) {
      swiper.pagination.$el.removeClass(swiper.params.pagination.paginationDisabledClass);
    }
    init();
    render();
    update();
  };
  const disable = () => {
    swiper.$el.addClass(swiper.params.pagination.paginationDisabledClass);
    if (swiper.pagination.$el) {
      swiper.pagination.$el.addClass(swiper.params.pagination.paginationDisabledClass);
    }
    destroy();
  };
  Object.assign(swiper.pagination, {
    enable,
    disable,
    render,
    update,
    init,
    destroy
  });
}
var pagination_min = "";
var ScreenPage_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  name: "ScreenPage",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      data: [
        {
          image: "onboarding-1.png",
          title: this.$t("Discover Places near you"),
          sub_title: this.$t("onboarding_sub_title1")
        },
        {
          image: "onboarding-2.png",
          title: this.$t("Order your customized items"),
          sub_title: this.$t("onboarding_sub_title2")
        },
        {
          image: "onboarding-3.png",
          title: this.$t("Faster delivery"),
          sub_title: this.$t("onboarding_sub_title3")
        }
      ]
    };
  },
  created() {
    this.$i18n.locale = this.$i18n.locale;
  },
  setup() {
    const DataStore = useDataStore();
    const DataStorePersisted = useDataStorePersisted();
    const swiperRef = ref();
    const slide = ref(0);
    const nextSlide = () => {
      swiperRef.value.$el.swiper.slideNext();
    };
    const onSlideChange = (data) => {
      slide.value = data.activeIndex;
    };
    return {
      slide,
      swiperRef,
      nextSlide,
      onSlideChange,
      modules: [Pagination],
      DataStore,
      DataStorePersisted
    };
  },
  methods: {
    home() {
      APIinterface.setStorage("intro", 1);
      if (this.DataStorePersisted.choose_language == false && this.DataStore.enabled_language == true) {
        this.$router.replace("/select-language");
      } else {
        this.$router.replace("/home");
      }
    },
    login() {
      APIinterface.setStorage("intro", 1);
      if (this.DataStorePersisted.choose_language == false && this.DataStore.enabled_language == true) {
        this.$router.replace("/select-language");
      } else {
        this.$router.replace("/user/login");
      }
    }
  }
};
const _hoisted_1 = { class: "full-width" };
const _hoisted_2 = { class: "text-center fit q-pt-lg" };
const _hoisted_3 = { class: "font16 text-weight-bold q-mb-md line-normal" };
const _hoisted_4 = { class: "text-weight-medium font14 text-grey line-normal" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_swiper = resolveComponent("swiper");
  return openBlock(), createBlock(QPage, {
    padding: "",
    class: "flex flex-center"
  }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode(_component_swiper, {
          ref: "swiperRef",
          "slides-per-view": 1,
          "space-between": 10,
          onSwiper: _ctx.onSwiper,
          onSlideChange: $setup.onSlideChange,
          class: "q-mb-md",
          pagination: {
            dynamicBullets: true
          },
          modules: $setup.modules
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList($data.data, (items) => {
              return openBlock(), createBlock(_component_swiper_slide, {
                key: items,
                class: "row",
                style: { "height": "350px" }
              }, {
                default: withCtx(() => [
                  createVNode(QImg, {
                    src: items.image,
                    style: { "max-width": "100%", "height": "150px" },
                    fit: "contain"
                  }, null, 8, ["src"]),
                  createBaseVNode("div", _hoisted_2, [
                    createBaseVNode("div", _hoisted_3, toDisplayString(items.title), 1),
                    createBaseVNode("div", _hoisted_4, toDisplayString(items.sub_title), 1)
                  ])
                ]),
                _: 2
              }, 1024);
            }), 128))
          ]),
          _: 1
        }, 8, ["onSwiper", "onSlideChange", "modules"])
      ]),
      createVNode(QFooter, {
        reveal: "",
        class: "transparent q-pl-md q-pr-md q-pb-md q-pt-md text-dark row items-center justify-between"
      }, {
        default: withCtx(() => [
          createVNode(QBtn, {
            flat: "",
            "text-color": "grey",
            "no-caps": "",
            size: "lg",
            label: _ctx.$t("Skip"),
            onClick: $options.home
          }, null, 8, ["label", "onClick"]),
          $setup.slide == 2 ? (openBlock(), createBlock(QBtn, {
            key: 0,
            "no-caps": "",
            size: "lg",
            label: _ctx.$t("Get Started"),
            unelevated: "",
            color: "primary",
            "text-color": "white",
            onClick: $options.login
          }, null, 8, ["label", "onClick"])) : (openBlock(), createBlock(QBtn, {
            key: 1,
            "no-caps": "",
            size: "lg",
            label: _ctx.$t("Next"),
            unelevated: "",
            color: "primary",
            "text-color": "white",
            style: { "min-width": "120px" },
            onClick: $setup.nextSlide
          }, null, 8, ["label", "onClick"]))
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
var ScreenPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "ScreenPage.vue"]]);
export { ScreenPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NyZWVuUGFnZS5kMTVjYzEyOS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9zaGFyZWQvY3JlYXRlLWVsZW1lbnQtaWYtbm90LWRlZmluZWQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL3NoYXJlZC9jbGFzc2VzLXRvLXNlbGVjdG9yLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9tb2R1bGVzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5qcyIsIi4uLy4uLy4uL3NyYy9wYWdlcy9JbnRyby9TY3JlZW5QYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXREb2N1bWVudCB9IGZyb20gJ3Nzci13aW5kb3cnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudElmTm90RGVmaW5lZChzd2lwZXIsIG9yaWdpbmFsUGFyYW1zLCBwYXJhbXMsIGNoZWNrUHJvcHMpIHtcbiAgY29uc3QgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuXG4gIGlmIChzd2lwZXIucGFyYW1zLmNyZWF0ZUVsZW1lbnRzKSB7XG4gICAgT2JqZWN0LmtleXMoY2hlY2tQcm9wcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgaWYgKCFwYXJhbXNba2V5XSAmJiBwYXJhbXMuYXV0byA9PT0gdHJ1ZSkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IHN3aXBlci4kZWwuY2hpbGRyZW4oYC4ke2NoZWNrUHJvcHNba2V5XX1gKVswXTtcblxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBjaGVja1Byb3BzW2tleV07XG4gICAgICAgICAgc3dpcGVyLiRlbC5hcHBlbmQoZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJhbXNba2V5XSA9IGVsZW1lbnQ7XG4gICAgICAgIG9yaWdpbmFsUGFyYW1zW2tleV0gPSBlbGVtZW50O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHBhcmFtcztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbGFzc2VzVG9TZWxlY3RvcihjbGFzc2VzID0gJycpIHtcbiAgcmV0dXJuIGAuJHtjbGFzc2VzLnRyaW0oKS5yZXBsYWNlKC8oW1xcLjohXFwvXSkvZywgJ1xcXFwkMScpIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgLnJlcGxhY2UoLyAvZywgJy4nKX1gO1xufSIsImltcG9ydCAkIGZyb20gJy4uLy4uL3NoYXJlZC9kb20uanMnO1xuaW1wb3J0IGNsYXNzZXNUb1NlbGVjdG9yIGZyb20gJy4uLy4uL3NoYXJlZC9jbGFzc2VzLXRvLXNlbGVjdG9yLmpzJztcbmltcG9ydCBjcmVhdGVFbGVtZW50SWZOb3REZWZpbmVkIGZyb20gJy4uLy4uL3NoYXJlZC9jcmVhdGUtZWxlbWVudC1pZi1ub3QtZGVmaW5lZC5qcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdpbmF0aW9uKHtcbiAgc3dpcGVyLFxuICBleHRlbmRQYXJhbXMsXG4gIG9uLFxuICBlbWl0XG59KSB7XG4gIGNvbnN0IHBmeCA9ICdzd2lwZXItcGFnaW5hdGlvbic7XG4gIGV4dGVuZFBhcmFtcyh7XG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgZWw6IG51bGwsXG4gICAgICBidWxsZXRFbGVtZW50OiAnc3BhbicsXG4gICAgICBjbGlja2FibGU6IGZhbHNlLFxuICAgICAgaGlkZU9uQ2xpY2s6IGZhbHNlLFxuICAgICAgcmVuZGVyQnVsbGV0OiBudWxsLFxuICAgICAgcmVuZGVyUHJvZ3Jlc3NiYXI6IG51bGwsXG4gICAgICByZW5kZXJGcmFjdGlvbjogbnVsbCxcbiAgICAgIHJlbmRlckN1c3RvbTogbnVsbCxcbiAgICAgIHByb2dyZXNzYmFyT3Bwb3NpdGU6IGZhbHNlLFxuICAgICAgdHlwZTogJ2J1bGxldHMnLFxuICAgICAgLy8gJ2J1bGxldHMnIG9yICdwcm9ncmVzc2Jhcicgb3IgJ2ZyYWN0aW9uJyBvciAnY3VzdG9tJ1xuICAgICAgZHluYW1pY0J1bGxldHM6IGZhbHNlLFxuICAgICAgZHluYW1pY01haW5CdWxsZXRzOiAxLFxuICAgICAgZm9ybWF0RnJhY3Rpb25DdXJyZW50OiBudW1iZXIgPT4gbnVtYmVyLFxuICAgICAgZm9ybWF0RnJhY3Rpb25Ub3RhbDogbnVtYmVyID0+IG51bWJlcixcbiAgICAgIGJ1bGxldENsYXNzOiBgJHtwZnh9LWJ1bGxldGAsXG4gICAgICBidWxsZXRBY3RpdmVDbGFzczogYCR7cGZ4fS1idWxsZXQtYWN0aXZlYCxcbiAgICAgIG1vZGlmaWVyQ2xhc3M6IGAke3BmeH0tYCxcbiAgICAgIGN1cnJlbnRDbGFzczogYCR7cGZ4fS1jdXJyZW50YCxcbiAgICAgIHRvdGFsQ2xhc3M6IGAke3BmeH0tdG90YWxgLFxuICAgICAgaGlkZGVuQ2xhc3M6IGAke3BmeH0taGlkZGVuYCxcbiAgICAgIHByb2dyZXNzYmFyRmlsbENsYXNzOiBgJHtwZnh9LXByb2dyZXNzYmFyLWZpbGxgLFxuICAgICAgcHJvZ3Jlc3NiYXJPcHBvc2l0ZUNsYXNzOiBgJHtwZnh9LXByb2dyZXNzYmFyLW9wcG9zaXRlYCxcbiAgICAgIGNsaWNrYWJsZUNsYXNzOiBgJHtwZnh9LWNsaWNrYWJsZWAsXG4gICAgICBsb2NrQ2xhc3M6IGAke3BmeH0tbG9ja2AsXG4gICAgICBob3Jpem9udGFsQ2xhc3M6IGAke3BmeH0taG9yaXpvbnRhbGAsXG4gICAgICB2ZXJ0aWNhbENsYXNzOiBgJHtwZnh9LXZlcnRpY2FsYCxcbiAgICAgIHBhZ2luYXRpb25EaXNhYmxlZENsYXNzOiBgJHtwZnh9LWRpc2FibGVkYFxuICAgIH1cbiAgfSk7XG4gIHN3aXBlci5wYWdpbmF0aW9uID0ge1xuICAgIGVsOiBudWxsLFxuICAgICRlbDogbnVsbCxcbiAgICBidWxsZXRzOiBbXVxuICB9O1xuICBsZXQgYnVsbGV0U2l6ZTtcbiAgbGV0IGR5bmFtaWNCdWxsZXRJbmRleCA9IDA7XG5cbiAgZnVuY3Rpb24gaXNQYWdpbmF0aW9uRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuICFzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24uZWwgfHwgIXN3aXBlci5wYWdpbmF0aW9uLmVsIHx8ICFzd2lwZXIucGFnaW5hdGlvbi4kZWwgfHwgc3dpcGVyLnBhZ2luYXRpb24uJGVsLmxlbmd0aCA9PT0gMDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFNpZGVCdWxsZXRzKCRidWxsZXRFbCwgcG9zaXRpb24pIHtcbiAgICBjb25zdCB7XG4gICAgICBidWxsZXRBY3RpdmVDbGFzc1xuICAgIH0gPSBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb247XG4gICAgJGJ1bGxldEVsW3Bvc2l0aW9uXSgpLmFkZENsYXNzKGAke2J1bGxldEFjdGl2ZUNsYXNzfS0ke3Bvc2l0aW9ufWApW3Bvc2l0aW9uXSgpLmFkZENsYXNzKGAke2J1bGxldEFjdGl2ZUNsYXNzfS0ke3Bvc2l0aW9ufS0ke3Bvc2l0aW9ufWApO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIC8vIFJlbmRlciB8fCBVcGRhdGUgUGFnaW5hdGlvbiBidWxsZXRzL2l0ZW1zXG4gICAgY29uc3QgcnRsID0gc3dpcGVyLnJ0bDtcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb247XG4gICAgaWYgKGlzUGFnaW5hdGlvbkRpc2FibGVkKCkpIHJldHVybjtcbiAgICBjb25zdCBzbGlkZXNMZW5ndGggPSBzd2lwZXIudmlydHVhbCAmJiBzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZCA/IHN3aXBlci52aXJ0dWFsLnNsaWRlcy5sZW5ndGggOiBzd2lwZXIuc2xpZGVzLmxlbmd0aDtcbiAgICBjb25zdCAkZWwgPSBzd2lwZXIucGFnaW5hdGlvbi4kZWw7IC8vIEN1cnJlbnQvVG90YWxcblxuICAgIGxldCBjdXJyZW50O1xuICAgIGNvbnN0IHRvdGFsID0gc3dpcGVyLnBhcmFtcy5sb29wID8gTWF0aC5jZWlsKChzbGlkZXNMZW5ndGggLSBzd2lwZXIubG9vcGVkU2xpZGVzICogMikgLyBzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwKSA6IHN3aXBlci5zbmFwR3JpZC5sZW5ndGg7XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgICBjdXJyZW50ID0gTWF0aC5jZWlsKChzd2lwZXIuYWN0aXZlSW5kZXggLSBzd2lwZXIubG9vcGVkU2xpZGVzKSAvIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXApO1xuXG4gICAgICBpZiAoY3VycmVudCA+IHNsaWRlc0xlbmd0aCAtIDEgLSBzd2lwZXIubG9vcGVkU2xpZGVzICogMikge1xuICAgICAgICBjdXJyZW50IC09IHNsaWRlc0xlbmd0aCAtIHN3aXBlci5sb29wZWRTbGlkZXMgKiAyO1xuICAgICAgfVxuXG4gICAgICBpZiAoY3VycmVudCA+IHRvdGFsIC0gMSkgY3VycmVudCAtPSB0b3RhbDtcbiAgICAgIGlmIChjdXJyZW50IDwgMCAmJiBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb25UeXBlICE9PSAnYnVsbGV0cycpIGN1cnJlbnQgPSB0b3RhbCArIGN1cnJlbnQ7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygc3dpcGVyLnNuYXBJbmRleCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGN1cnJlbnQgPSBzd2lwZXIuc25hcEluZGV4O1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50ID0gc3dpcGVyLmFjdGl2ZUluZGV4IHx8IDA7XG4gICAgfSAvLyBUeXBlc1xuXG5cbiAgICBpZiAocGFyYW1zLnR5cGUgPT09ICdidWxsZXRzJyAmJiBzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRzICYmIHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldHMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgYnVsbGV0cyA9IHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldHM7XG4gICAgICBsZXQgZmlyc3RJbmRleDtcbiAgICAgIGxldCBsYXN0SW5kZXg7XG4gICAgICBsZXQgbWlkSW5kZXg7XG5cbiAgICAgIGlmIChwYXJhbXMuZHluYW1pY0J1bGxldHMpIHtcbiAgICAgICAgYnVsbGV0U2l6ZSA9IGJ1bGxldHMuZXEoMClbc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ291dGVyV2lkdGgnIDogJ291dGVySGVpZ2h0J10odHJ1ZSk7XG4gICAgICAgICRlbC5jc3Moc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ3dpZHRoJyA6ICdoZWlnaHQnLCBgJHtidWxsZXRTaXplICogKHBhcmFtcy5keW5hbWljTWFpbkJ1bGxldHMgKyA0KX1weGApO1xuXG4gICAgICAgIGlmIChwYXJhbXMuZHluYW1pY01haW5CdWxsZXRzID4gMSAmJiBzd2lwZXIucHJldmlvdXNJbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZHluYW1pY0J1bGxldEluZGV4ICs9IGN1cnJlbnQgLSAoc3dpcGVyLnByZXZpb3VzSW5kZXggLSBzd2lwZXIubG9vcGVkU2xpZGVzIHx8IDApO1xuXG4gICAgICAgICAgaWYgKGR5bmFtaWNCdWxsZXRJbmRleCA+IHBhcmFtcy5keW5hbWljTWFpbkJ1bGxldHMgLSAxKSB7XG4gICAgICAgICAgICBkeW5hbWljQnVsbGV0SW5kZXggPSBwYXJhbXMuZHluYW1pY01haW5CdWxsZXRzIC0gMTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGR5bmFtaWNCdWxsZXRJbmRleCA8IDApIHtcbiAgICAgICAgICAgIGR5bmFtaWNCdWxsZXRJbmRleCA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZmlyc3RJbmRleCA9IE1hdGgubWF4KGN1cnJlbnQgLSBkeW5hbWljQnVsbGV0SW5kZXgsIDApO1xuICAgICAgICBsYXN0SW5kZXggPSBmaXJzdEluZGV4ICsgKE1hdGgubWluKGJ1bGxldHMubGVuZ3RoLCBwYXJhbXMuZHluYW1pY01haW5CdWxsZXRzKSAtIDEpO1xuICAgICAgICBtaWRJbmRleCA9IChsYXN0SW5kZXggKyBmaXJzdEluZGV4KSAvIDI7XG4gICAgICB9XG5cbiAgICAgIGJ1bGxldHMucmVtb3ZlQ2xhc3MoWycnLCAnLW5leHQnLCAnLW5leHQtbmV4dCcsICctcHJldicsICctcHJldi1wcmV2JywgJy1tYWluJ10ubWFwKHN1ZmZpeCA9PiBgJHtwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3N9JHtzdWZmaXh9YCkuam9pbignICcpKTtcblxuICAgICAgaWYgKCRlbC5sZW5ndGggPiAxKSB7XG4gICAgICAgIGJ1bGxldHMuZWFjaChidWxsZXQgPT4ge1xuICAgICAgICAgIGNvbnN0ICRidWxsZXQgPSAkKGJ1bGxldCk7XG4gICAgICAgICAgY29uc3QgYnVsbGV0SW5kZXggPSAkYnVsbGV0LmluZGV4KCk7XG5cbiAgICAgICAgICBpZiAoYnVsbGV0SW5kZXggPT09IGN1cnJlbnQpIHtcbiAgICAgICAgICAgICRidWxsZXQuYWRkQ2xhc3MocGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocGFyYW1zLmR5bmFtaWNCdWxsZXRzKSB7XG4gICAgICAgICAgICBpZiAoYnVsbGV0SW5kZXggPj0gZmlyc3RJbmRleCAmJiBidWxsZXRJbmRleCA8PSBsYXN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgJGJ1bGxldC5hZGRDbGFzcyhgJHtwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3N9LW1haW5gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGJ1bGxldEluZGV4ID09PSBmaXJzdEluZGV4KSB7XG4gICAgICAgICAgICAgIHNldFNpZGVCdWxsZXRzKCRidWxsZXQsICdwcmV2Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChidWxsZXRJbmRleCA9PT0gbGFzdEluZGV4KSB7XG4gICAgICAgICAgICAgIHNldFNpZGVCdWxsZXRzKCRidWxsZXQsICduZXh0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0ICRidWxsZXQgPSBidWxsZXRzLmVxKGN1cnJlbnQpO1xuICAgICAgICBjb25zdCBidWxsZXRJbmRleCA9ICRidWxsZXQuaW5kZXgoKTtcbiAgICAgICAgJGJ1bGxldC5hZGRDbGFzcyhwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MpO1xuXG4gICAgICAgIGlmIChwYXJhbXMuZHluYW1pY0J1bGxldHMpIHtcbiAgICAgICAgICBjb25zdCAkZmlyc3REaXNwbGF5ZWRCdWxsZXQgPSBidWxsZXRzLmVxKGZpcnN0SW5kZXgpO1xuICAgICAgICAgIGNvbnN0ICRsYXN0RGlzcGxheWVkQnVsbGV0ID0gYnVsbGV0cy5lcShsYXN0SW5kZXgpO1xuXG4gICAgICAgICAgZm9yIChsZXQgaSA9IGZpcnN0SW5kZXg7IGkgPD0gbGFzdEluZGV4OyBpICs9IDEpIHtcbiAgICAgICAgICAgIGJ1bGxldHMuZXEoaSkuYWRkQ2xhc3MoYCR7cGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzfS1tYWluYCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgICAgICAgaWYgKGJ1bGxldEluZGV4ID49IGJ1bGxldHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGZvciAobGV0IGkgPSBwYXJhbXMuZHluYW1pY01haW5CdWxsZXRzOyBpID49IDA7IGkgLT0gMSkge1xuICAgICAgICAgICAgICAgIGJ1bGxldHMuZXEoYnVsbGV0cy5sZW5ndGggLSBpKS5hZGRDbGFzcyhgJHtwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3N9LW1haW5gKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGJ1bGxldHMuZXEoYnVsbGV0cy5sZW5ndGggLSBwYXJhbXMuZHluYW1pY01haW5CdWxsZXRzIC0gMSkuYWRkQ2xhc3MoYCR7cGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzfS1wcmV2YCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZXRTaWRlQnVsbGV0cygkZmlyc3REaXNwbGF5ZWRCdWxsZXQsICdwcmV2Jyk7XG4gICAgICAgICAgICAgIHNldFNpZGVCdWxsZXRzKCRsYXN0RGlzcGxheWVkQnVsbGV0LCAnbmV4dCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRTaWRlQnVsbGV0cygkZmlyc3REaXNwbGF5ZWRCdWxsZXQsICdwcmV2Jyk7XG4gICAgICAgICAgICBzZXRTaWRlQnVsbGV0cygkbGFzdERpc3BsYXllZEJ1bGxldCwgJ25leHQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHBhcmFtcy5keW5hbWljQnVsbGV0cykge1xuICAgICAgICBjb25zdCBkeW5hbWljQnVsbGV0c0xlbmd0aCA9IE1hdGgubWluKGJ1bGxldHMubGVuZ3RoLCBwYXJhbXMuZHluYW1pY01haW5CdWxsZXRzICsgNCk7XG4gICAgICAgIGNvbnN0IGJ1bGxldHNPZmZzZXQgPSAoYnVsbGV0U2l6ZSAqIGR5bmFtaWNCdWxsZXRzTGVuZ3RoIC0gYnVsbGV0U2l6ZSkgLyAyIC0gbWlkSW5kZXggKiBidWxsZXRTaXplO1xuICAgICAgICBjb25zdCBvZmZzZXRQcm9wID0gcnRsID8gJ3JpZ2h0JyA6ICdsZWZ0JztcbiAgICAgICAgYnVsbGV0cy5jc3Moc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gb2Zmc2V0UHJvcCA6ICd0b3AnLCBgJHtidWxsZXRzT2Zmc2V0fXB4YCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy50eXBlID09PSAnZnJhY3Rpb24nKSB7XG4gICAgICAkZWwuZmluZChjbGFzc2VzVG9TZWxlY3RvcihwYXJhbXMuY3VycmVudENsYXNzKSkudGV4dChwYXJhbXMuZm9ybWF0RnJhY3Rpb25DdXJyZW50KGN1cnJlbnQgKyAxKSk7XG4gICAgICAkZWwuZmluZChjbGFzc2VzVG9TZWxlY3RvcihwYXJhbXMudG90YWxDbGFzcykpLnRleHQocGFyYW1zLmZvcm1hdEZyYWN0aW9uVG90YWwodG90YWwpKTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLnR5cGUgPT09ICdwcm9ncmVzc2JhcicpIHtcbiAgICAgIGxldCBwcm9ncmVzc2JhckRpcmVjdGlvbjtcblxuICAgICAgaWYgKHBhcmFtcy5wcm9ncmVzc2Jhck9wcG9zaXRlKSB7XG4gICAgICAgIHByb2dyZXNzYmFyRGlyZWN0aW9uID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2dyZXNzYmFyRGlyZWN0aW9uID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJztcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2NhbGUgPSAoY3VycmVudCArIDEpIC8gdG90YWw7XG4gICAgICBsZXQgc2NhbGVYID0gMTtcbiAgICAgIGxldCBzY2FsZVkgPSAxO1xuXG4gICAgICBpZiAocHJvZ3Jlc3NiYXJEaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICBzY2FsZVggPSBzY2FsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjYWxlWSA9IHNjYWxlO1xuICAgICAgfVxuXG4gICAgICAkZWwuZmluZChjbGFzc2VzVG9TZWxlY3RvcihwYXJhbXMucHJvZ3Jlc3NiYXJGaWxsQ2xhc3MpKS50cmFuc2Zvcm0oYHRyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZVgoJHtzY2FsZVh9KSBzY2FsZVkoJHtzY2FsZVl9KWApLnRyYW5zaXRpb24oc3dpcGVyLnBhcmFtcy5zcGVlZCk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy50eXBlID09PSAnY3VzdG9tJyAmJiBwYXJhbXMucmVuZGVyQ3VzdG9tKSB7XG4gICAgICAkZWwuaHRtbChwYXJhbXMucmVuZGVyQ3VzdG9tKHN3aXBlciwgY3VycmVudCArIDEsIHRvdGFsKSk7XG4gICAgICBlbWl0KCdwYWdpbmF0aW9uUmVuZGVyJywgJGVsWzBdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW1pdCgncGFnaW5hdGlvblVwZGF0ZScsICRlbFswXSk7XG4gICAgfVxuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdyAmJiBzd2lwZXIuZW5hYmxlZCkge1xuICAgICAgJGVsW3N3aXBlci5pc0xvY2tlZCA/ICdhZGRDbGFzcycgOiAncmVtb3ZlQ2xhc3MnXShwYXJhbXMubG9ja0NsYXNzKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgLy8gUmVuZGVyIENvbnRhaW5lclxuICAgIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbjtcbiAgICBpZiAoaXNQYWdpbmF0aW9uRGlzYWJsZWQoKSkgcmV0dXJuO1xuICAgIGNvbnN0IHNsaWRlc0xlbmd0aCA9IHN3aXBlci52aXJ0dWFsICYmIHN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkID8gc3dpcGVyLnZpcnR1YWwuc2xpZGVzLmxlbmd0aCA6IHN3aXBlci5zbGlkZXMubGVuZ3RoO1xuICAgIGNvbnN0ICRlbCA9IHN3aXBlci5wYWdpbmF0aW9uLiRlbDtcbiAgICBsZXQgcGFnaW5hdGlvbkhUTUwgPSAnJztcblxuICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ2J1bGxldHMnKSB7XG4gICAgICBsZXQgbnVtYmVyT2ZCdWxsZXRzID0gc3dpcGVyLnBhcmFtcy5sb29wID8gTWF0aC5jZWlsKChzbGlkZXNMZW5ndGggLSBzd2lwZXIubG9vcGVkU2xpZGVzICogMikgLyBzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwKSA6IHN3aXBlci5zbmFwR3JpZC5sZW5ndGg7XG5cbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmZyZWVNb2RlICYmIHN3aXBlci5wYXJhbXMuZnJlZU1vZGUuZW5hYmxlZCAmJiAhc3dpcGVyLnBhcmFtcy5sb29wICYmIG51bWJlck9mQnVsbGV0cyA+IHNsaWRlc0xlbmd0aCkge1xuICAgICAgICBudW1iZXJPZkJ1bGxldHMgPSBzbGlkZXNMZW5ndGg7XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZCdWxsZXRzOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHBhcmFtcy5yZW5kZXJCdWxsZXQpIHtcbiAgICAgICAgICBwYWdpbmF0aW9uSFRNTCArPSBwYXJhbXMucmVuZGVyQnVsbGV0LmNhbGwoc3dpcGVyLCBpLCBwYXJhbXMuYnVsbGV0Q2xhc3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhZ2luYXRpb25IVE1MICs9IGA8JHtwYXJhbXMuYnVsbGV0RWxlbWVudH0gY2xhc3M9XCIke3BhcmFtcy5idWxsZXRDbGFzc31cIj48LyR7cGFyYW1zLmJ1bGxldEVsZW1lbnR9PmA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJGVsLmh0bWwocGFnaW5hdGlvbkhUTUwpO1xuICAgICAgc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0cyA9ICRlbC5maW5kKGNsYXNzZXNUb1NlbGVjdG9yKHBhcmFtcy5idWxsZXRDbGFzcykpO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ2ZyYWN0aW9uJykge1xuICAgICAgaWYgKHBhcmFtcy5yZW5kZXJGcmFjdGlvbikge1xuICAgICAgICBwYWdpbmF0aW9uSFRNTCA9IHBhcmFtcy5yZW5kZXJGcmFjdGlvbi5jYWxsKHN3aXBlciwgcGFyYW1zLmN1cnJlbnRDbGFzcywgcGFyYW1zLnRvdGFsQ2xhc3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFnaW5hdGlvbkhUTUwgPSBgPHNwYW4gY2xhc3M9XCIke3BhcmFtcy5jdXJyZW50Q2xhc3N9XCI+PC9zcGFuPmAgKyAnIC8gJyArIGA8c3BhbiBjbGFzcz1cIiR7cGFyYW1zLnRvdGFsQ2xhc3N9XCI+PC9zcGFuPmA7XG4gICAgICB9XG5cbiAgICAgICRlbC5odG1sKHBhZ2luYXRpb25IVE1MKTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLnR5cGUgPT09ICdwcm9ncmVzc2JhcicpIHtcbiAgICAgIGlmIChwYXJhbXMucmVuZGVyUHJvZ3Jlc3NiYXIpIHtcbiAgICAgICAgcGFnaW5hdGlvbkhUTUwgPSBwYXJhbXMucmVuZGVyUHJvZ3Jlc3NiYXIuY2FsbChzd2lwZXIsIHBhcmFtcy5wcm9ncmVzc2JhckZpbGxDbGFzcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYWdpbmF0aW9uSFRNTCA9IGA8c3BhbiBjbGFzcz1cIiR7cGFyYW1zLnByb2dyZXNzYmFyRmlsbENsYXNzfVwiPjwvc3Bhbj5gO1xuICAgICAgfVxuXG4gICAgICAkZWwuaHRtbChwYWdpbmF0aW9uSFRNTCk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy50eXBlICE9PSAnY3VzdG9tJykge1xuICAgICAgZW1pdCgncGFnaW5hdGlvblJlbmRlcicsIHN3aXBlci5wYWdpbmF0aW9uLiRlbFswXSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24gPSBjcmVhdGVFbGVtZW50SWZOb3REZWZpbmVkKHN3aXBlciwgc3dpcGVyLm9yaWdpbmFsUGFyYW1zLnBhZ2luYXRpb24sIHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbiwge1xuICAgICAgZWw6ICdzd2lwZXItcGFnaW5hdGlvbidcbiAgICB9KTtcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb247XG4gICAgaWYgKCFwYXJhbXMuZWwpIHJldHVybjtcbiAgICBsZXQgJGVsID0gJChwYXJhbXMuZWwpO1xuICAgIGlmICgkZWwubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy51bmlxdWVOYXZFbGVtZW50cyAmJiB0eXBlb2YgcGFyYW1zLmVsID09PSAnc3RyaW5nJyAmJiAkZWwubGVuZ3RoID4gMSkge1xuICAgICAgJGVsID0gc3dpcGVyLiRlbC5maW5kKHBhcmFtcy5lbCk7IC8vIGNoZWNrIGlmIGl0IGJlbG9uZ3MgdG8gYW5vdGhlciBuZXN0ZWQgU3dpcGVyXG5cbiAgICAgIGlmICgkZWwubGVuZ3RoID4gMSkge1xuICAgICAgICAkZWwgPSAkZWwuZmlsdGVyKGVsID0+IHtcbiAgICAgICAgICBpZiAoJChlbCkucGFyZW50cygnLnN3aXBlcicpWzBdICE9PSBzd2lwZXIuZWwpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy50eXBlID09PSAnYnVsbGV0cycgJiYgcGFyYW1zLmNsaWNrYWJsZSkge1xuICAgICAgJGVsLmFkZENsYXNzKHBhcmFtcy5jbGlja2FibGVDbGFzcyk7XG4gICAgfVxuXG4gICAgJGVsLmFkZENsYXNzKHBhcmFtcy5tb2RpZmllckNsYXNzICsgcGFyYW1zLnR5cGUpO1xuICAgICRlbC5hZGRDbGFzcyhzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyBwYXJhbXMuaG9yaXpvbnRhbENsYXNzIDogcGFyYW1zLnZlcnRpY2FsQ2xhc3MpO1xuXG4gICAgaWYgKHBhcmFtcy50eXBlID09PSAnYnVsbGV0cycgJiYgcGFyYW1zLmR5bmFtaWNCdWxsZXRzKSB7XG4gICAgICAkZWwuYWRkQ2xhc3MoYCR7cGFyYW1zLm1vZGlmaWVyQ2xhc3N9JHtwYXJhbXMudHlwZX0tZHluYW1pY2ApO1xuICAgICAgZHluYW1pY0J1bGxldEluZGV4ID0gMDtcblxuICAgICAgaWYgKHBhcmFtcy5keW5hbWljTWFpbkJ1bGxldHMgPCAxKSB7XG4gICAgICAgIHBhcmFtcy5keW5hbWljTWFpbkJ1bGxldHMgPSAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ3Byb2dyZXNzYmFyJyAmJiBwYXJhbXMucHJvZ3Jlc3NiYXJPcHBvc2l0ZSkge1xuICAgICAgJGVsLmFkZENsYXNzKHBhcmFtcy5wcm9ncmVzc2Jhck9wcG9zaXRlQ2xhc3MpO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMuY2xpY2thYmxlKSB7XG4gICAgICAkZWwub24oJ2NsaWNrJywgY2xhc3Nlc1RvU2VsZWN0b3IocGFyYW1zLmJ1bGxldENsYXNzKSwgZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IGluZGV4ID0gJCh0aGlzKS5pbmRleCgpICogc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cDtcbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkgaW5kZXggKz0gc3dpcGVyLmxvb3BlZFNsaWRlcztcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oaW5kZXgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmFzc2lnbihzd2lwZXIucGFnaW5hdGlvbiwge1xuICAgICAgJGVsLFxuICAgICAgZWw6ICRlbFswXVxuICAgIH0pO1xuXG4gICAgaWYgKCFzd2lwZXIuZW5hYmxlZCkge1xuICAgICAgJGVsLmFkZENsYXNzKHBhcmFtcy5sb2NrQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uO1xuICAgIGlmIChpc1BhZ2luYXRpb25EaXNhYmxlZCgpKSByZXR1cm47XG4gICAgY29uc3QgJGVsID0gc3dpcGVyLnBhZ2luYXRpb24uJGVsO1xuICAgICRlbC5yZW1vdmVDbGFzcyhwYXJhbXMuaGlkZGVuQ2xhc3MpO1xuICAgICRlbC5yZW1vdmVDbGFzcyhwYXJhbXMubW9kaWZpZXJDbGFzcyArIHBhcmFtcy50eXBlKTtcbiAgICAkZWwucmVtb3ZlQ2xhc3Moc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gcGFyYW1zLmhvcml6b250YWxDbGFzcyA6IHBhcmFtcy52ZXJ0aWNhbENsYXNzKTtcbiAgICBpZiAoc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0cyAmJiBzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRzLnJlbW92ZUNsYXNzKSBzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRzLnJlbW92ZUNsYXNzKHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcyk7XG5cbiAgICBpZiAocGFyYW1zLmNsaWNrYWJsZSkge1xuICAgICAgJGVsLm9mZignY2xpY2snLCBjbGFzc2VzVG9TZWxlY3RvcihwYXJhbXMuYnVsbGV0Q2xhc3MpKTtcbiAgICB9XG4gIH1cblxuICBvbignaW5pdCcsICgpID0+IHtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLmVuYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIGRpc2FibGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5pdCgpO1xuICAgICAgcmVuZGVyKCk7XG4gICAgICB1cGRhdGUoKTtcbiAgICB9XG4gIH0pO1xuICBvbignYWN0aXZlSW5kZXhDaGFuZ2UnLCAoKSA9PiB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgdXBkYXRlKCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygc3dpcGVyLnNuYXBJbmRleCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH1cbiAgfSk7XG4gIG9uKCdzbmFwSW5kZXhDaGFuZ2UnLCAoKSA9PiB7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH1cbiAgfSk7XG4gIG9uKCdzbGlkZXNMZW5ndGhDaGFuZ2UnLCAoKSA9PiB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgcmVuZGVyKCk7XG4gICAgICB1cGRhdGUoKTtcbiAgICB9XG4gIH0pO1xuICBvbignc25hcEdyaWRMZW5ndGhDaGFuZ2UnLCAoKSA9PiB7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgIHJlbmRlcigpO1xuICAgICAgdXBkYXRlKCk7XG4gICAgfVxuICB9KTtcbiAgb24oJ2Rlc3Ryb3knLCAoKSA9PiB7XG4gICAgZGVzdHJveSgpO1xuICB9KTtcbiAgb24oJ2VuYWJsZSBkaXNhYmxlJywgKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICRlbFxuICAgIH0gPSBzd2lwZXIucGFnaW5hdGlvbjtcblxuICAgIGlmICgkZWwpIHtcbiAgICAgICRlbFtzd2lwZXIuZW5hYmxlZCA/ICdyZW1vdmVDbGFzcycgOiAnYWRkQ2xhc3MnXShzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24ubG9ja0NsYXNzKTtcbiAgICB9XG4gIH0pO1xuICBvbignbG9jayB1bmxvY2snLCAoKSA9PiB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xuICBvbignY2xpY2snLCAoX3MsIGUpID0+IHtcbiAgICBjb25zdCB0YXJnZXRFbCA9IGUudGFyZ2V0O1xuICAgIGNvbnN0IHtcbiAgICAgICRlbFxuICAgIH0gPSBzd2lwZXIucGFnaW5hdGlvbjtcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24uZWwgJiYgc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLmhpZGVPbkNsaWNrICYmICRlbCAmJiAkZWwubGVuZ3RoID4gMCAmJiAhJCh0YXJnZXRFbCkuaGFzQ2xhc3Moc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLmJ1bGxldENsYXNzKSkge1xuICAgICAgaWYgKHN3aXBlci5uYXZpZ2F0aW9uICYmIChzd2lwZXIubmF2aWdhdGlvbi5uZXh0RWwgJiYgdGFyZ2V0RWwgPT09IHN3aXBlci5uYXZpZ2F0aW9uLm5leHRFbCB8fCBzd2lwZXIubmF2aWdhdGlvbi5wcmV2RWwgJiYgdGFyZ2V0RWwgPT09IHN3aXBlci5uYXZpZ2F0aW9uLnByZXZFbCkpIHJldHVybjtcbiAgICAgIGNvbnN0IGlzSGlkZGVuID0gJGVsLmhhc0NsYXNzKHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5oaWRkZW5DbGFzcyk7XG5cbiAgICAgIGlmIChpc0hpZGRlbiA9PT0gdHJ1ZSkge1xuICAgICAgICBlbWl0KCdwYWdpbmF0aW9uU2hvdycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZW1pdCgncGFnaW5hdGlvbkhpZGUnKTtcbiAgICAgIH1cblxuICAgICAgJGVsLnRvZ2dsZUNsYXNzKHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5oaWRkZW5DbGFzcyk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBlbmFibGUgPSAoKSA9PiB7XG4gICAgc3dpcGVyLiRlbC5yZW1vdmVDbGFzcyhzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24ucGFnaW5hdGlvbkRpc2FibGVkQ2xhc3MpO1xuXG4gICAgaWYgKHN3aXBlci5wYWdpbmF0aW9uLiRlbCkge1xuICAgICAgc3dpcGVyLnBhZ2luYXRpb24uJGVsLnJlbW92ZUNsYXNzKHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5wYWdpbmF0aW9uRGlzYWJsZWRDbGFzcyk7XG4gICAgfVxuXG4gICAgaW5pdCgpO1xuICAgIHJlbmRlcigpO1xuICAgIHVwZGF0ZSgpO1xuICB9O1xuXG4gIGNvbnN0IGRpc2FibGUgPSAoKSA9PiB7XG4gICAgc3dpcGVyLiRlbC5hZGRDbGFzcyhzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24ucGFnaW5hdGlvbkRpc2FibGVkQ2xhc3MpO1xuXG4gICAgaWYgKHN3aXBlci5wYWdpbmF0aW9uLiRlbCkge1xuICAgICAgc3dpcGVyLnBhZ2luYXRpb24uJGVsLmFkZENsYXNzKHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5wYWdpbmF0aW9uRGlzYWJsZWRDbGFzcyk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpO1xuICB9O1xuXG4gIE9iamVjdC5hc3NpZ24oc3dpcGVyLnBhZ2luYXRpb24sIHtcbiAgICBlbmFibGUsXG4gICAgZGlzYWJsZSxcbiAgICByZW5kZXIsXG4gICAgdXBkYXRlLFxuICAgIGluaXQsXG4gICAgZGVzdHJveVxuICB9KTtcbn0iLCI8dGVtcGxhdGU+XG4gIDxxLXBhZ2UgcGFkZGluZyBjbGFzcz1cImZsZXggZmxleC1jZW50ZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZnVsbC13aWR0aFwiPlxuICAgICAgPHN3aXBlclxuICAgICAgICByZWY9XCJzd2lwZXJSZWZcIlxuICAgICAgICA6c2xpZGVzLXBlci12aWV3PVwiMVwiXG4gICAgICAgIDpzcGFjZS1iZXR3ZWVuPVwiMTBcIlxuICAgICAgICBAc3dpcGVyPVwib25Td2lwZXJcIlxuICAgICAgICBAc2xpZGVDaGFuZ2U9XCJvblNsaWRlQ2hhbmdlXCJcbiAgICAgICAgY2xhc3M9XCJxLW1iLW1kXCJcbiAgICAgICAgOnBhZ2luYXRpb249XCJ7XG4gICAgICAgICAgZHluYW1pY0J1bGxldHM6IHRydWUsXG4gICAgICAgIH1cIlxuICAgICAgICA6bW9kdWxlcz1cIm1vZHVsZXNcIlxuICAgICAgPlxuICAgICAgICA8c3dpcGVyLXNsaWRlXG4gICAgICAgICAgdi1mb3I9XCJpdGVtcyBpbiBkYXRhXCJcbiAgICAgICAgICA6a2V5PVwiaXRlbXNcIlxuICAgICAgICAgIGNsYXNzPVwicm93XCJcbiAgICAgICAgICBzdHlsZT1cImhlaWdodDogMzUwcHhcIlxuICAgICAgICA+XG4gICAgICAgICAgPHEtaW1nXG4gICAgICAgICAgICA6c3JjPVwiaXRlbXMuaW1hZ2VcIlxuICAgICAgICAgICAgc3R5bGU9XCJtYXgtd2lkdGg6IDEwMCU7IGhlaWdodDogMTUwcHhcIlxuICAgICAgICAgICAgZml0PVwiY29udGFpblwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgZml0IHEtcHQtbGdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250MTYgdGV4dC13ZWlnaHQtYm9sZCBxLW1iLW1kIGxpbmUtbm9ybWFsXCI+XG4gICAgICAgICAgICAgIHt7IGl0ZW1zLnRpdGxlIH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXdlaWdodC1tZWRpdW0gZm9udDE0IHRleHQtZ3JleSBsaW5lLW5vcm1hbFwiPlxuICAgICAgICAgICAgICB7eyBpdGVtcy5zdWJfdGl0bGUgfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3N3aXBlci1zbGlkZT5cbiAgICAgIDwvc3dpcGVyPlxuICAgIDwvZGl2PlxuXG4gICAgPHEtZm9vdGVyXG4gICAgICByZXZlYWxcbiAgICAgIGNsYXNzPVwidHJhbnNwYXJlbnQgcS1wbC1tZCBxLXByLW1kIHEtcGItbWQgcS1wdC1tZCB0ZXh0LWRhcmsgcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIlxuICAgID5cbiAgICAgIDxxLWJ0blxuICAgICAgICBmbGF0XG4gICAgICAgIHRleHQtY29sb3I9XCJncmV5XCJcbiAgICAgICAgbm8tY2Fwc1xuICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICA6bGFiZWw9XCIkdCgnU2tpcCcpXCJcbiAgICAgICAgQGNsaWNrPVwiaG9tZVwiXG4gICAgICA+PC9xLWJ0bj5cblxuICAgICAgPHEtYnRuXG4gICAgICAgIHYtaWY9XCJzbGlkZSA9PSAyXCJcbiAgICAgICAgbm8tY2Fwc1xuICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICA6bGFiZWw9XCIkdCgnR2V0IFN0YXJ0ZWQnKVwiXG4gICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgdGV4dC1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgQGNsaWNrPVwibG9naW5cIlxuICAgICAgPjwvcS1idG4+XG4gICAgICA8cS1idG5cbiAgICAgICAgdi1lbHNlXG4gICAgICAgIG5vLWNhcHNcbiAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgOmxhYmVsPVwiJHQoJ05leHQnKVwiXG4gICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgdGV4dC1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgc3R5bGU9XCJtaW4td2lkdGg6IDEyMHB4XCJcbiAgICAgICAgQGNsaWNrPVwibmV4dFNsaWRlXCJcbiAgICAgID48L3EtYnRuPlxuICAgIDwvcS1mb290ZXI+XG4gIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUsIHVzZVN3aXBlciB9IGZyb20gXCJzd2lwZXIvdnVlXCI7XG5pbXBvcnQgeyByZWYsIG9uTW91bnRlZCB9IGZyb20gXCJ2dWVcIjtcbmltcG9ydCBcInN3aXBlci9jc3NcIjtcbmltcG9ydCBcInN3aXBlci9jc3MvcGFnaW5hdGlvblwiO1xuaW1wb3J0IHsgUGFnaW5hdGlvbiB9IGZyb20gXCJzd2lwZXJcIjtcbmltcG9ydCBBUElpbnRlcmZhY2UgZnJvbSBcInNyYy9hcGkvQVBJaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyB1c2VEYXRhU3RvcmUgfSBmcm9tIFwic3RvcmVzL0RhdGFTdG9yZVwiO1xuaW1wb3J0IHsgdXNlRGF0YVN0b3JlUGVyc2lzdGVkIH0gZnJvbSBcInN0b3Jlcy9EYXRhU3RvcmVQZXJzaXN0ZWRcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIlNjcmVlblBhZ2VcIixcbiAgY29tcG9uZW50czoge1xuICAgIFN3aXBlcixcbiAgICBTd2lwZXJTbGlkZSxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogW1xuICAgICAgICB7XG4gICAgICAgICAgaW1hZ2U6IFwib25ib2FyZGluZy0xLnBuZ1wiLFxuICAgICAgICAgIHRpdGxlOiB0aGlzLiR0KFwiRGlzY292ZXIgUGxhY2VzIG5lYXIgeW91XCIpLFxuICAgICAgICAgIHN1Yl90aXRsZTogdGhpcy4kdChcIm9uYm9hcmRpbmdfc3ViX3RpdGxlMVwiKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGltYWdlOiBcIm9uYm9hcmRpbmctMi5wbmdcIixcbiAgICAgICAgICB0aXRsZTogdGhpcy4kdChcIk9yZGVyIHlvdXIgY3VzdG9taXplZCBpdGVtc1wiKSxcbiAgICAgICAgICBzdWJfdGl0bGU6IHRoaXMuJHQoXCJvbmJvYXJkaW5nX3N1Yl90aXRsZTJcIiksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpbWFnZTogXCJvbmJvYXJkaW5nLTMucG5nXCIsXG4gICAgICAgICAgdGl0bGU6IHRoaXMuJHQoXCJGYXN0ZXIgZGVsaXZlcnlcIiksXG4gICAgICAgICAgc3ViX3RpdGxlOiB0aGlzLiR0KFwib25ib2FyZGluZ19zdWJfdGl0bGUzXCIpLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9LFxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuJGkxOG4ubG9jYWxlID0gdGhpcy4kaTE4bi5sb2NhbGU7XG4gIH0sXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IERhdGFTdG9yZSA9IHVzZURhdGFTdG9yZSgpO1xuICAgIGNvbnN0IERhdGFTdG9yZVBlcnNpc3RlZCA9IHVzZURhdGFTdG9yZVBlcnNpc3RlZCgpO1xuICAgIGNvbnN0IHN3aXBlclJlZiA9IHJlZigpO1xuICAgIGNvbnN0IHNsaWRlID0gcmVmKDApO1xuXG4gICAgY29uc3QgbmV4dFNsaWRlID0gKCkgPT4ge1xuICAgICAgc3dpcGVyUmVmLnZhbHVlLiRlbC5zd2lwZXIuc2xpZGVOZXh0KCk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9uU2xpZGVDaGFuZ2UgPSAoZGF0YSkgPT4ge1xuICAgICAgc2xpZGUudmFsdWUgPSBkYXRhLmFjdGl2ZUluZGV4O1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgc2xpZGUsXG4gICAgICBzd2lwZXJSZWYsXG4gICAgICBuZXh0U2xpZGUsXG4gICAgICBvblNsaWRlQ2hhbmdlLFxuICAgICAgbW9kdWxlczogW1BhZ2luYXRpb25dLFxuICAgICAgRGF0YVN0b3JlLFxuICAgICAgRGF0YVN0b3JlUGVyc2lzdGVkLFxuICAgIH07XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBob21lKCkge1xuICAgICAgQVBJaW50ZXJmYWNlLnNldFN0b3JhZ2UoXCJpbnRyb1wiLCAxKTtcblxuICAgICAgaWYgKFxuICAgICAgICB0aGlzLkRhdGFTdG9yZVBlcnNpc3RlZC5jaG9vc2VfbGFuZ3VhZ2UgPT0gZmFsc2UgJiZcbiAgICAgICAgdGhpcy5EYXRhU3RvcmUuZW5hYmxlZF9sYW5ndWFnZSA9PSB0cnVlXG4gICAgICApIHtcbiAgICAgICAgdGhpcy4kcm91dGVyLnJlcGxhY2UoXCIvc2VsZWN0LWxhbmd1YWdlXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4kcm91dGVyLnJlcGxhY2UoXCIvaG9tZVwiKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGxvZ2luKCkge1xuICAgICAgQVBJaW50ZXJmYWNlLnNldFN0b3JhZ2UoXCJpbnRyb1wiLCAxKTtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5EYXRhU3RvcmVQZXJzaXN0ZWQuY2hvb3NlX2xhbmd1YWdlID09IGZhbHNlICYmXG4gICAgICAgIHRoaXMuRGF0YVN0b3JlLmVuYWJsZWRfbGFuZ3VhZ2UgPT0gdHJ1ZVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuJHJvdXRlci5yZXBsYWNlKFwiL3NlbGVjdC1sYW5ndWFnZVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuJHJvdXRlci5yZXBsYWNlKFwiL3VzZXIvbG9naW5cIik7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbjxzdHlsZT5cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2ZmNzI0YyAhaW1wb3J0YW50O1xufVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6WyJfY3JlYXRlQmxvY2siLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX2NyZWF0ZVZOb2RlIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9GcmFnbWVudCIsIl9yZW5kZXJMaXN0IiwiX3RvRGlzcGxheVN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNlLFNBQVMsMEJBQTBCLFFBQVEsZ0JBQWdCLFFBQVEsWUFBWTtBQUM1RixRQUFN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
