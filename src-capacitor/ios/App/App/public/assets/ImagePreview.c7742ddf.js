import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QSpace } from "./QSpace.f164c087.js";
import { v as createComponent, c as computed, h, z as hSlot, r as ref, bX as vmHasRouter, w as watch, bY as History, bm as onBeforeMount, o as onMounted, K as onBeforeUnmount, g as getCurrentInstance, ah as useDarkProps, ai as useDark, bW as isNumber, au as hDir, Y as QBtn, H as hMergeSlot, _ as _export_sfc, p as openBlock, q as createBlock, t as withCtx, f as createVNode, a6 as createTextVNode, Z as toDisplayString, a9 as QCardSection, U as createBaseVNode, V as createElementBlock, X as renderList, F as Fragment, aA as createCommentVNode, a8 as QCard, aB as QDialog } from "./index.61ed5618.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { u as usePanelChildProps, a as usePanelProps, b as usePanelEmits, c as usePanel } from "./use-panel.225d73f4.js";
import "./touch.96e0ae37.js";
import "./selection.50b4cb0c.js";
import "./use-render-cache.b9e045af.js";
var QCarouselSlide = createComponent({
  name: "QCarouselSlide",
  props: {
    ...usePanelChildProps,
    imgSrc: String
  },
  setup(props, { slots }) {
    const style = computed(() => props.imgSrc ? { backgroundImage: `url("${props.imgSrc}")` } : {});
    return () => h("div", {
      class: "q-carousel__slide",
      style: style.value
    }, hSlot(slots.default));
  }
});
let counter = 0;
const useFullscreenProps = {
  fullscreen: Boolean,
  noRouteFullscreenExit: Boolean
};
const useFullscreenEmits = ["update:fullscreen", "fullscreen"];
function useFullscreen() {
  const vm = getCurrentInstance();
  const { props, emit, proxy } = vm;
  let historyEntry, fullscreenFillerNode, container;
  const inFullscreen = ref(false);
  vmHasRouter(vm) === true && watch(() => proxy.$route.fullPath, () => {
    props.noRouteFullscreenExit !== true && exitFullscreen();
  });
  watch(() => props.fullscreen, (v) => {
    if (inFullscreen.value !== v) {
      toggleFullscreen();
    }
  });
  watch(inFullscreen, (v) => {
    emit("update:fullscreen", v);
    emit("fullscreen", v);
  });
  function toggleFullscreen() {
    if (inFullscreen.value === true) {
      exitFullscreen();
    } else {
      setFullscreen();
    }
  }
  function setFullscreen() {
    if (inFullscreen.value === true) {
      return;
    }
    inFullscreen.value = true;
    container = proxy.$el.parentNode;
    container.replaceChild(fullscreenFillerNode, proxy.$el);
    document.body.appendChild(proxy.$el);
    counter++;
    if (counter === 1) {
      document.body.classList.add("q-body--fullscreen-mixin");
    }
    historyEntry = {
      handler: exitFullscreen
    };
    History.add(historyEntry);
  }
  function exitFullscreen() {
    if (inFullscreen.value !== true) {
      return;
    }
    if (historyEntry !== void 0) {
      History.remove(historyEntry);
      historyEntry = void 0;
    }
    container.replaceChild(proxy.$el, fullscreenFillerNode);
    inFullscreen.value = false;
    counter = Math.max(0, counter - 1);
    if (counter === 0) {
      document.body.classList.remove("q-body--fullscreen-mixin");
      if (proxy.$el.scrollIntoView !== void 0) {
        setTimeout(() => {
          proxy.$el.scrollIntoView();
        });
      }
    }
  }
  onBeforeMount(() => {
    fullscreenFillerNode = document.createElement("span");
  });
  onMounted(() => {
    props.fullscreen === true && setFullscreen();
  });
  onBeforeUnmount(exitFullscreen);
  Object.assign(proxy, {
    toggleFullscreen,
    setFullscreen,
    exitFullscreen
  });
  return {
    inFullscreen,
    toggleFullscreen
  };
}
const navigationPositionOptions = ["top", "right", "bottom", "left"];
const controlTypeOptions = ["regular", "flat", "outline", "push", "unelevated"];
var QCarousel = createComponent({
  name: "QCarousel",
  props: {
    ...useDarkProps,
    ...usePanelProps,
    ...useFullscreenProps,
    transitionPrev: {
      type: String,
      default: "fade"
    },
    transitionNext: {
      type: String,
      default: "fade"
    },
    height: String,
    padding: Boolean,
    controlColor: String,
    controlTextColor: String,
    controlType: {
      type: String,
      validator: (v) => controlTypeOptions.includes(v),
      default: "flat"
    },
    autoplay: [Number, Boolean],
    arrows: Boolean,
    prevIcon: String,
    nextIcon: String,
    navigation: Boolean,
    navigationPosition: {
      type: String,
      validator: (v) => navigationPositionOptions.includes(v)
    },
    navigationIcon: String,
    navigationActiveIcon: String,
    thumbnails: Boolean
  },
  emits: [
    ...useFullscreenEmits,
    ...usePanelEmits
  ],
  setup(props, { slots }) {
    const { proxy: { $q } } = getCurrentInstance();
    const isDark = useDark(props, $q);
    let timer = null, panelsLen;
    const {
      updatePanelsList,
      getPanelContent,
      panelDirectives,
      goToPanel,
      previousPanel,
      nextPanel,
      getEnabledPanels,
      panelIndex
    } = usePanel();
    const { inFullscreen } = useFullscreen();
    const style = computed(() => inFullscreen.value !== true && props.height !== void 0 ? { height: props.height } : {});
    const direction = computed(() => props.vertical === true ? "vertical" : "horizontal");
    const navigationPosition = computed(
      () => props.navigationPosition || (props.vertical === true ? "right" : "bottom")
    );
    const classes = computed(
      () => `q-carousel q-panel-parent q-carousel--with${props.padding === true ? "" : "out"}-padding` + (inFullscreen.value === true ? " fullscreen" : "") + (isDark.value === true ? " q-carousel--dark q-dark" : "") + (props.arrows === true ? ` q-carousel--arrows-${direction.value}` : "") + (props.navigation === true ? ` q-carousel--navigation-${navigationPosition.value}` : "")
    );
    const arrowIcons = computed(() => {
      const ico = [
        props.prevIcon || $q.iconSet.carousel[props.vertical === true ? "up" : "left"],
        props.nextIcon || $q.iconSet.carousel[props.vertical === true ? "down" : "right"]
      ];
      return props.vertical === false && $q.lang.rtl === true ? ico.reverse() : ico;
    });
    const navIcon = computed(() => props.navigationIcon || $q.iconSet.carousel.navigationIcon);
    const navActiveIcon = computed(() => props.navigationActiveIcon || navIcon.value);
    const controlProps = computed(() => ({
      color: props.controlColor,
      textColor: props.controlTextColor,
      round: true,
      [props.controlType]: true,
      dense: true
    }));
    watch(() => props.modelValue, () => {
      if (props.autoplay) {
        startTimer();
      }
    });
    watch(() => props.autoplay, (val) => {
      if (val) {
        startTimer();
      } else if (timer !== null) {
        clearTimeout(timer);
        timer = null;
      }
    });
    function startTimer() {
      const duration = isNumber(props.autoplay) === true ? Math.abs(props.autoplay) : 5e3;
      timer !== null && clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        if (duration >= 0) {
          nextPanel();
        } else {
          previousPanel();
        }
      }, duration);
    }
    onMounted(() => {
      props.autoplay && startTimer();
    });
    onBeforeUnmount(() => {
      timer !== null && clearTimeout(timer);
    });
    function getNavigationContainer(type, mapping) {
      return h("div", {
        class: `q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${type} q-carousel__navigation--${navigationPosition.value}` + (props.controlColor !== void 0 ? ` text-${props.controlColor}` : "")
      }, [
        h("div", {
          class: "q-carousel__navigation-inner flex flex-center no-wrap"
        }, getEnabledPanels().map(mapping))
      ]);
    }
    function getContent() {
      const node = [];
      if (props.navigation === true) {
        const fn = slots["navigation-icon"] !== void 0 ? slots["navigation-icon"] : (opts) => h(QBtn, {
          key: "nav" + opts.name,
          class: `q-carousel__navigation-icon q-carousel__navigation-icon--${opts.active === true ? "" : "in"}active`,
          ...opts.btnProps,
          onClick: opts.onClick
        });
        const maxIndex = panelsLen - 1;
        node.push(
          getNavigationContainer("buttons", (panel, index) => {
            const name = panel.props.name;
            const active = panelIndex.value === index;
            return fn({
              index,
              maxIndex,
              name,
              active,
              btnProps: {
                icon: active === true ? navActiveIcon.value : navIcon.value,
                size: "sm",
                ...controlProps.value
              },
              onClick: () => {
                goToPanel(name);
              }
            });
          })
        );
      } else if (props.thumbnails === true) {
        const color = props.controlColor !== void 0 ? ` text-${props.controlColor}` : "";
        node.push(getNavigationContainer("thumbnails", (panel) => {
          const slide = panel.props;
          return h("img", {
            key: "tmb#" + slide.name,
            class: `q-carousel__thumbnail q-carousel__thumbnail--${slide.name === props.modelValue ? "" : "in"}active` + color,
            src: slide.imgSrc || slide["img-src"],
            onClick: () => {
              goToPanel(slide.name);
            }
          });
        }));
      }
      if (props.arrows === true && panelIndex.value >= 0) {
        if (props.infinite === true || panelIndex.value > 0) {
          node.push(
            h("div", {
              key: "prev",
              class: `q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${direction.value} absolute flex flex-center`
            }, [
              h(QBtn, {
                icon: arrowIcons.value[0],
                ...controlProps.value,
                onClick: previousPanel
              })
            ])
          );
        }
        if (props.infinite === true || panelIndex.value < panelsLen - 1) {
          node.push(
            h("div", {
              key: "next",
              class: `q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${direction.value} absolute flex flex-center`
            }, [
              h(QBtn, {
                icon: arrowIcons.value[1],
                ...controlProps.value,
                onClick: nextPanel
              })
            ])
          );
        }
      }
      return hMergeSlot(slots.control, node);
    }
    return () => {
      panelsLen = updatePanelsList(slots);
      return h("div", {
        class: classes.value,
        style: style.value
      }, [
        hDir(
          "div",
          { class: "q-carousel__slides-container" },
          getPanelContent(),
          "sl-cont",
          props.swipeable,
          () => panelDirectives.value
        )
      ].concat(getContent()));
    };
  }
});
const _sfc_main = {
  name: "ImagePreview",
  props: ["gallery", "title"],
  data() {
    return {
      modal: false,
      slide: 0
    };
  },
  setup() {
    return {};
  },
  computed: {
    hasData() {
      if (Object.keys(this.gallery).length > 0) {
        return true;
      }
      return false;
    }
  }
};
const _hoisted_1 = { class: "fit" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QDialog, {
    modelValue: $data.modal,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.modal = $event),
    persistent: "",
    maximized: true,
    class: "z-max",
    "transition-show": "fade",
    "transition-hide": "fade"
  }, {
    default: withCtx(() => [
      createVNode(QCard, { class: "bg-dark" }, {
        default: withCtx(() => [
          createVNode(QToolbar, {
            class: "text-primary top-toolbar q-pl-md",
            dense: ""
          }, {
            default: withCtx(() => [
              createVNode(QToolbarTitle, { class: "text-white text-weight-bold" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString($props.title), 1)
                ]),
                _: 1
              }),
              createVNode(QSpace),
              createVNode(QBtn, {
                onClick: _cache[0] || (_cache[0] = ($event) => $data.modal = false),
                color: "dark",
                unelevated: "",
                "text-color": "white",
                icon: "las la-times",
                dense: "",
                "no-caps": "",
                size: "sm",
                rounded: ""
              })
            ]),
            _: 1
          }),
          $options.hasData ? (openBlock(), createBlock(QCardSection, {
            key: 0,
            class: "flex flex-center text-white",
            style: { "min-height": "90%" }
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                createVNode(QCarousel, {
                  animated: "",
                  modelValue: $data.slide,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.slide = $event),
                  arrows: "",
                  navigation: "",
                  infinite: "",
                  swipeable: ""
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList($props.gallery, (items, index) => {
                      return openBlock(), createBlock(QCarouselSlide, {
                        key: items,
                        name: index,
                        "img-src": items
                      }, null, 8, ["name", "img-src"]);
                    }), 128))
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ])
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["modelValue"]);
}
var ImagePreview = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "ImagePreview.vue"]]);
export { ImagePreview as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW1hZ2VQcmV2aWV3LmM3NzQyZGRmLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2Nhcm91c2VsL1FDYXJvdXNlbFNsaWRlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9zYWJsZXMvcHJpdmF0ZS51c2UtZnVsbHNjcmVlbi91c2UtZnVsbHNjcmVlbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvY2Fyb3VzZWwvUUNhcm91c2VsLmpzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvSW1hZ2VQcmV2aWV3LnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgdXNlUGFuZWxDaGlsZFByb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS51c2UtcGFuZWwvdXNlLXBhbmVsLmpzJ1xuXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUucmVuZGVyL3JlbmRlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FDYXJvdXNlbFNsaWRlJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZVBhbmVsQ2hpbGRQcm9wcyxcbiAgICBpbWdTcmM6IFN0cmluZ1xuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5pbWdTcmNcbiAgICAgICAgPyB7IGJhY2tncm91bmRJbWFnZTogYHVybChcIiR7IHByb3BzLmltZ1NyYyB9XCIpYCB9XG4gICAgICAgIDoge31cbiAgICApKVxuXG4gICAgcmV0dXJuICgpID0+IGgoJ2RpdicsIHtcbiAgICAgIGNsYXNzOiAncS1jYXJvdXNlbF9fc2xpZGUnLFxuICAgICAgc3R5bGU6IHN0eWxlLnZhbHVlXG4gICAgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyByZWYsIHdhdGNoLCBvbkJlZm9yZU1vdW50LCBvbk1vdW50ZWQsIG9uQmVmb3JlVW5tb3VudCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgSGlzdG9yeSBmcm9tICcuLi8uLi9wbHVnaW5zL3ByaXZhdGUuaGlzdG9yeS9IaXN0b3J5LmpzJ1xuaW1wb3J0IHsgdm1IYXNSb3V0ZXIgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnZtL3ZtLmpzJ1xuXG5sZXQgY291bnRlciA9IDBcblxuZXhwb3J0IGNvbnN0IHVzZUZ1bGxzY3JlZW5Qcm9wcyA9IHtcbiAgZnVsbHNjcmVlbjogQm9vbGVhbixcbiAgbm9Sb3V0ZUZ1bGxzY3JlZW5FeGl0OiBCb29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCB1c2VGdWxsc2NyZWVuRW1pdHMgPSBbICd1cGRhdGU6ZnVsbHNjcmVlbicsICdmdWxsc2NyZWVuJyBdXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICBjb25zdCB7IHByb3BzLCBlbWl0LCBwcm94eSB9ID0gdm1cblxuICBsZXQgaGlzdG9yeUVudHJ5LCBmdWxsc2NyZWVuRmlsbGVyTm9kZSwgY29udGFpbmVyXG4gIGNvbnN0IGluRnVsbHNjcmVlbiA9IHJlZihmYWxzZSlcblxuICB2bUhhc1JvdXRlcih2bSkgPT09IHRydWUgJiYgd2F0Y2goKCkgPT4gcHJveHkuJHJvdXRlLmZ1bGxQYXRoLCAoKSA9PiB7XG4gICAgcHJvcHMubm9Sb3V0ZUZ1bGxzY3JlZW5FeGl0ICE9PSB0cnVlICYmIGV4aXRGdWxsc2NyZWVuKClcbiAgfSlcblxuICB3YXRjaCgoKSA9PiBwcm9wcy5mdWxsc2NyZWVuLCB2ID0+IHtcbiAgICBpZiAoaW5GdWxsc2NyZWVuLnZhbHVlICE9PSB2KSB7XG4gICAgICB0b2dnbGVGdWxsc2NyZWVuKClcbiAgICB9XG4gIH0pXG5cbiAgd2F0Y2goaW5GdWxsc2NyZWVuLCB2ID0+IHtcbiAgICBlbWl0KCd1cGRhdGU6ZnVsbHNjcmVlbicsIHYpXG4gICAgZW1pdCgnZnVsbHNjcmVlbicsIHYpXG4gIH0pXG5cbiAgZnVuY3Rpb24gdG9nZ2xlRnVsbHNjcmVlbiAoKSB7XG4gICAgaWYgKGluRnVsbHNjcmVlbi52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgZXhpdEZ1bGxzY3JlZW4oKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNldEZ1bGxzY3JlZW4oKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEZ1bGxzY3JlZW4gKCkge1xuICAgIGlmIChpbkZ1bGxzY3JlZW4udmFsdWUgPT09IHRydWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGluRnVsbHNjcmVlbi52YWx1ZSA9IHRydWVcbiAgICBjb250YWluZXIgPSBwcm94eS4kZWwucGFyZW50Tm9kZVxuICAgIGNvbnRhaW5lci5yZXBsYWNlQ2hpbGQoZnVsbHNjcmVlbkZpbGxlck5vZGUsIHByb3h5LiRlbClcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHByb3h5LiRlbClcblxuICAgIGNvdW50ZXIrK1xuICAgIGlmIChjb3VudGVyID09PSAxKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3EtYm9keS0tZnVsbHNjcmVlbi1taXhpbicpXG4gICAgfVxuXG4gICAgaGlzdG9yeUVudHJ5ID0ge1xuICAgICAgaGFuZGxlcjogZXhpdEZ1bGxzY3JlZW5cbiAgICB9XG4gICAgSGlzdG9yeS5hZGQoaGlzdG9yeUVudHJ5KVxuICB9XG5cbiAgZnVuY3Rpb24gZXhpdEZ1bGxzY3JlZW4gKCkge1xuICAgIGlmIChpbkZ1bGxzY3JlZW4udmFsdWUgIT09IHRydWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChoaXN0b3J5RW50cnkgIT09IHZvaWQgMCkge1xuICAgICAgSGlzdG9yeS5yZW1vdmUoaGlzdG9yeUVudHJ5KVxuICAgICAgaGlzdG9yeUVudHJ5ID0gdm9pZCAwXG4gICAgfVxuXG4gICAgY29udGFpbmVyLnJlcGxhY2VDaGlsZChwcm94eS4kZWwsIGZ1bGxzY3JlZW5GaWxsZXJOb2RlKVxuICAgIGluRnVsbHNjcmVlbi52YWx1ZSA9IGZhbHNlXG5cbiAgICBjb3VudGVyID0gTWF0aC5tYXgoMCwgY291bnRlciAtIDEpXG5cbiAgICBpZiAoY291bnRlciA9PT0gMCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdxLWJvZHktLWZ1bGxzY3JlZW4tbWl4aW4nKVxuXG4gICAgICBpZiAocHJveHkuJGVsLnNjcm9sbEludG9WaWV3ICE9PSB2b2lkIDApIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHByb3h5LiRlbC5zY3JvbGxJbnRvVmlldygpIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25CZWZvcmVNb3VudCgoKSA9PiB7XG4gICAgZnVsbHNjcmVlbkZpbGxlck5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgfSlcblxuICBvbk1vdW50ZWQoKCkgPT4ge1xuICAgIHByb3BzLmZ1bGxzY3JlZW4gPT09IHRydWUgJiYgc2V0RnVsbHNjcmVlbigpXG4gIH0pXG5cbiAgb25CZWZvcmVVbm1vdW50KGV4aXRGdWxsc2NyZWVuKVxuXG4gIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kc1xuICBPYmplY3QuYXNzaWduKHByb3h5LCB7XG4gICAgdG9nZ2xlRnVsbHNjcmVlbixcbiAgICBzZXRGdWxsc2NyZWVuLFxuICAgIGV4aXRGdWxsc2NyZWVuXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBpbkZ1bGxzY3JlZW4sXG4gICAgdG9nZ2xlRnVsbHNjcmVlblxuICB9XG59XG4iLCJpbXBvcnQgeyBoLCBjb21wdXRlZCwgd2F0Y2gsIG9uTW91bnRlZCwgb25CZWZvcmVVbm1vdW50LCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBRQnRuIGZyb20gJy4uL2J0bi9RQnRuLmpzJ1xuXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlLnVzZS1kYXJrL3VzZS1kYXJrLmpzJ1xuaW1wb3J0IHVzZVBhbmVsLCB7IHVzZVBhbmVsUHJvcHMsIHVzZVBhbmVsRW1pdHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlLnVzZS1wYW5lbC91c2UtcGFuZWwuanMnXG5pbXBvcnQgdXNlRnVsbHNjcmVlbiwgeyB1c2VGdWxsc2NyZWVuUHJvcHMsIHVzZUZ1bGxzY3JlZW5FbWl0cyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUudXNlLWZ1bGxzY3JlZW4vdXNlLWZ1bGxzY3JlZW4uanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuY3JlYXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGlzTnVtYmVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvaXMvaXMuanMnXG5pbXBvcnQgeyBoTWVyZ2VTbG90LCBoRGlyIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5yZW5kZXIvcmVuZGVyLmpzJ1xuXG5jb25zdCBuYXZpZ2F0aW9uUG9zaXRpb25PcHRpb25zID0gWyAndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0JyBdXG5jb25zdCBjb250cm9sVHlwZU9wdGlvbnMgPSBbICdyZWd1bGFyJywgJ2ZsYXQnLCAnb3V0bGluZScsICdwdXNoJywgJ3VuZWxldmF0ZWQnIF1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FDYXJvdXNlbCcsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VEYXJrUHJvcHMsXG4gICAgLi4udXNlUGFuZWxQcm9wcyxcbiAgICAuLi51c2VGdWxsc2NyZWVuUHJvcHMsXG5cbiAgICB0cmFuc2l0aW9uUHJldjogeyAvLyB1c2VQYW5lbFBhcmVudFByb3BzIG92ZXJyaWRlXG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnZmFkZSdcbiAgICB9LFxuICAgIHRyYW5zaXRpb25OZXh0OiB7IC8vIHVzZVBhbmVsUGFyZW50UHJvcHMgb3ZlcnJpZGVcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdmYWRlJ1xuICAgIH0sXG5cbiAgICBoZWlnaHQ6IFN0cmluZyxcbiAgICBwYWRkaW5nOiBCb29sZWFuLFxuXG4gICAgY29udHJvbENvbG9yOiBTdHJpbmcsXG4gICAgY29udHJvbFRleHRDb2xvcjogU3RyaW5nLFxuICAgIGNvbnRyb2xUeXBlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWxpZGF0b3I6IHYgPT4gY29udHJvbFR5cGVPcHRpb25zLmluY2x1ZGVzKHYpLFxuICAgICAgZGVmYXVsdDogJ2ZsYXQnXG4gICAgfSxcblxuICAgIGF1dG9wbGF5OiBbIE51bWJlciwgQm9vbGVhbiBdLFxuXG4gICAgYXJyb3dzOiBCb29sZWFuLFxuICAgIHByZXZJY29uOiBTdHJpbmcsXG4gICAgbmV4dEljb246IFN0cmluZyxcblxuICAgIG5hdmlnYXRpb246IEJvb2xlYW4sXG4gICAgbmF2aWdhdGlvblBvc2l0aW9uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWxpZGF0b3I6IHYgPT4gbmF2aWdhdGlvblBvc2l0aW9uT3B0aW9ucy5pbmNsdWRlcyh2KVxuICAgIH0sXG4gICAgbmF2aWdhdGlvbkljb246IFN0cmluZyxcbiAgICBuYXZpZ2F0aW9uQWN0aXZlSWNvbjogU3RyaW5nLFxuXG4gICAgdGh1bWJuYWlsczogQm9vbGVhblxuICB9LFxuXG4gIGVtaXRzOiBbXG4gICAgLi4udXNlRnVsbHNjcmVlbkVtaXRzLFxuICAgIC4uLnVzZVBhbmVsRW1pdHNcbiAgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMgfSkge1xuICAgIGNvbnN0IHsgcHJveHk6IHsgJHEgfSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcblxuICAgIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsICRxKVxuXG4gICAgbGV0IHRpbWVyID0gbnVsbCwgcGFuZWxzTGVuXG5cbiAgICBjb25zdCB7XG4gICAgICB1cGRhdGVQYW5lbHNMaXN0LCBnZXRQYW5lbENvbnRlbnQsXG4gICAgICBwYW5lbERpcmVjdGl2ZXMsIGdvVG9QYW5lbCxcbiAgICAgIHByZXZpb3VzUGFuZWwsIG5leHRQYW5lbCwgZ2V0RW5hYmxlZFBhbmVscyxcbiAgICAgIHBhbmVsSW5kZXhcbiAgICB9ID0gdXNlUGFuZWwoKVxuXG4gICAgY29uc3QgeyBpbkZ1bGxzY3JlZW4gfSA9IHVzZUZ1bGxzY3JlZW4oKVxuXG4gICAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBpbkZ1bGxzY3JlZW4udmFsdWUgIT09IHRydWUgJiYgcHJvcHMuaGVpZ2h0ICE9PSB2b2lkIDBcbiAgICAgICAgPyB7IGhlaWdodDogcHJvcHMuaGVpZ2h0IH1cbiAgICAgICAgOiB7fVxuICAgICkpXG5cbiAgICBjb25zdCBkaXJlY3Rpb24gPSBjb21wdXRlZCgoKSA9PiAocHJvcHMudmVydGljYWwgPT09IHRydWUgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnKSlcblxuICAgIGNvbnN0IG5hdmlnYXRpb25Qb3NpdGlvbiA9IGNvbXB1dGVkKCgpID0+IHByb3BzLm5hdmlnYXRpb25Qb3NpdGlvblxuICAgICAgfHwgKHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ3JpZ2h0JyA6ICdib3R0b20nKVxuICAgIClcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgYHEtY2Fyb3VzZWwgcS1wYW5lbC1wYXJlbnQgcS1jYXJvdXNlbC0td2l0aCR7IHByb3BzLnBhZGRpbmcgPT09IHRydWUgPyAnJyA6ICdvdXQnIH0tcGFkZGluZ2BcbiAgICAgICsgKGluRnVsbHNjcmVlbi52YWx1ZSA9PT0gdHJ1ZSA/ICcgZnVsbHNjcmVlbicgOiAnJylcbiAgICAgICsgKGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1jYXJvdXNlbC0tZGFyayBxLWRhcmsnIDogJycpXG4gICAgICArIChwcm9wcy5hcnJvd3MgPT09IHRydWUgPyBgIHEtY2Fyb3VzZWwtLWFycm93cy0keyBkaXJlY3Rpb24udmFsdWUgfWAgOiAnJylcbiAgICAgICsgKHByb3BzLm5hdmlnYXRpb24gPT09IHRydWUgPyBgIHEtY2Fyb3VzZWwtLW5hdmlnYXRpb24tJHsgbmF2aWdhdGlvblBvc2l0aW9uLnZhbHVlIH1gIDogJycpXG4gICAgKVxuXG4gICAgY29uc3QgYXJyb3dJY29ucyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGljbyA9IFtcbiAgICAgICAgcHJvcHMucHJldkljb24gfHwgJHEuaWNvblNldC5jYXJvdXNlbFsgcHJvcHMudmVydGljYWwgPT09IHRydWUgPyAndXAnIDogJ2xlZnQnIF0sXG4gICAgICAgIHByb3BzLm5leHRJY29uIHx8ICRxLmljb25TZXQuY2Fyb3VzZWxbIHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ2Rvd24nIDogJ3JpZ2h0JyBdXG4gICAgICBdXG5cbiAgICAgIHJldHVybiBwcm9wcy52ZXJ0aWNhbCA9PT0gZmFsc2UgJiYgJHEubGFuZy5ydGwgPT09IHRydWVcbiAgICAgICAgPyBpY28ucmV2ZXJzZSgpXG4gICAgICAgIDogaWNvXG4gICAgfSlcblxuICAgIGNvbnN0IG5hdkljb24gPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5uYXZpZ2F0aW9uSWNvbiB8fCAkcS5pY29uU2V0LmNhcm91c2VsLm5hdmlnYXRpb25JY29uKVxuICAgIGNvbnN0IG5hdkFjdGl2ZUljb24gPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5uYXZpZ2F0aW9uQWN0aXZlSWNvbiB8fCBuYXZJY29uLnZhbHVlKVxuXG4gICAgY29uc3QgY29udHJvbFByb3BzID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIGNvbG9yOiBwcm9wcy5jb250cm9sQ29sb3IsXG4gICAgICB0ZXh0Q29sb3I6IHByb3BzLmNvbnRyb2xUZXh0Q29sb3IsXG4gICAgICByb3VuZDogdHJ1ZSxcbiAgICAgIFsgcHJvcHMuY29udHJvbFR5cGUgXTogdHJ1ZSxcbiAgICAgIGRlbnNlOiB0cnVlXG4gICAgfSkpXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5tb2RlbFZhbHVlLCAoKSA9PiB7XG4gICAgICBpZiAocHJvcHMuYXV0b3BsYXkpIHtcbiAgICAgICAgc3RhcnRUaW1lcigpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLmF1dG9wbGF5LCB2YWwgPT4ge1xuICAgICAgaWYgKHZhbCkge1xuICAgICAgICBzdGFydFRpbWVyKClcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRpbWVyICE9PSBudWxsKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcilcbiAgICAgICAgdGltZXIgPSBudWxsXG4gICAgICB9XG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIHN0YXJ0VGltZXIgKCkge1xuICAgICAgY29uc3QgZHVyYXRpb24gPSBpc051bWJlcihwcm9wcy5hdXRvcGxheSkgPT09IHRydWVcbiAgICAgICAgPyBNYXRoLmFicyhwcm9wcy5hdXRvcGxheSlcbiAgICAgICAgOiA1MDAwXG5cbiAgICAgIHRpbWVyICE9PSBudWxsICYmIGNsZWFyVGltZW91dCh0aW1lcilcbiAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRpbWVyID0gbnVsbFxuXG4gICAgICAgIGlmIChkdXJhdGlvbiA+PSAwKSB7XG4gICAgICAgICAgbmV4dFBhbmVsKClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBwcmV2aW91c1BhbmVsKClcbiAgICAgICAgfVxuICAgICAgfSwgZHVyYXRpb24pXG4gICAgfVxuXG4gICAgb25Nb3VudGVkKCgpID0+IHtcbiAgICAgIHByb3BzLmF1dG9wbGF5ICYmIHN0YXJ0VGltZXIoKVxuICAgIH0pXG5cbiAgICBvbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICAgICAgdGltZXIgIT09IG51bGwgJiYgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBnZXROYXZpZ2F0aW9uQ29udGFpbmVyICh0eXBlLCBtYXBwaW5nKSB7XG4gICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICBjbGFzczogJ3EtY2Fyb3VzZWxfX2NvbnRyb2wgcS1jYXJvdXNlbF9fbmF2aWdhdGlvbiBuby13cmFwIGFic29sdXRlIGZsZXgnXG4gICAgICAgICAgKyBgIHEtY2Fyb3VzZWxfX25hdmlnYXRpb24tLSR7IHR5cGUgfSBxLWNhcm91c2VsX19uYXZpZ2F0aW9uLS0keyBuYXZpZ2F0aW9uUG9zaXRpb24udmFsdWUgfWBcbiAgICAgICAgICArIChwcm9wcy5jb250cm9sQ29sb3IgIT09IHZvaWQgMCA/IGAgdGV4dC0keyBwcm9wcy5jb250cm9sQ29sb3IgfWAgOiAnJylcbiAgICAgIH0sIFtcbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiAncS1jYXJvdXNlbF9fbmF2aWdhdGlvbi1pbm5lciBmbGV4IGZsZXgtY2VudGVyIG5vLXdyYXAnXG4gICAgICAgIH0sIGdldEVuYWJsZWRQYW5lbHMoKS5tYXAobWFwcGluZykpXG4gICAgICBdKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldENvbnRlbnQgKCkge1xuICAgICAgY29uc3Qgbm9kZSA9IFtdXG5cbiAgICAgIGlmIChwcm9wcy5uYXZpZ2F0aW9uID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IGZuID0gc2xvdHNbICduYXZpZ2F0aW9uLWljb24nIF0gIT09IHZvaWQgMFxuICAgICAgICAgID8gc2xvdHNbICduYXZpZ2F0aW9uLWljb24nIF1cbiAgICAgICAgICA6IG9wdHMgPT4gaChRQnRuLCB7XG4gICAgICAgICAgICBrZXk6ICduYXYnICsgb3B0cy5uYW1lLFxuICAgICAgICAgICAgY2xhc3M6IGBxLWNhcm91c2VsX19uYXZpZ2F0aW9uLWljb24gcS1jYXJvdXNlbF9fbmF2aWdhdGlvbi1pY29uLS0keyBvcHRzLmFjdGl2ZSA9PT0gdHJ1ZSA/ICcnIDogJ2luJyB9YWN0aXZlYCxcbiAgICAgICAgICAgIC4uLm9wdHMuYnRuUHJvcHMsXG4gICAgICAgICAgICBvbkNsaWNrOiBvcHRzLm9uQ2xpY2tcbiAgICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IG1heEluZGV4ID0gcGFuZWxzTGVuIC0gMVxuICAgICAgICBub2RlLnB1c2goXG4gICAgICAgICAgZ2V0TmF2aWdhdGlvbkNvbnRhaW5lcignYnV0dG9ucycsIChwYW5lbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBwYW5lbC5wcm9wcy5uYW1lXG4gICAgICAgICAgICBjb25zdCBhY3RpdmUgPSBwYW5lbEluZGV4LnZhbHVlID09PSBpbmRleFxuXG4gICAgICAgICAgICByZXR1cm4gZm4oe1xuICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgbWF4SW5kZXgsXG4gICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgIGFjdGl2ZSxcbiAgICAgICAgICAgICAgYnRuUHJvcHM6IHtcbiAgICAgICAgICAgICAgICBpY29uOiBhY3RpdmUgPT09IHRydWUgPyBuYXZBY3RpdmVJY29uLnZhbHVlIDogbmF2SWNvbi52YWx1ZSxcbiAgICAgICAgICAgICAgICBzaXplOiAnc20nLFxuICAgICAgICAgICAgICAgIC4uLmNvbnRyb2xQcm9wcy52YWx1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7IGdvVG9QYW5lbChuYW1lKSB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHByb3BzLnRodW1ibmFpbHMgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3QgY29sb3IgPSBwcm9wcy5jb250cm9sQ29sb3IgIT09IHZvaWQgMFxuICAgICAgICAgID8gYCB0ZXh0LSR7IHByb3BzLmNvbnRyb2xDb2xvciB9YFxuICAgICAgICAgIDogJydcblxuICAgICAgICBub2RlLnB1c2goZ2V0TmF2aWdhdGlvbkNvbnRhaW5lcigndGh1bWJuYWlscycsIHBhbmVsID0+IHtcbiAgICAgICAgICBjb25zdCBzbGlkZSA9IHBhbmVsLnByb3BzXG5cbiAgICAgICAgICByZXR1cm4gaCgnaW1nJywge1xuICAgICAgICAgICAga2V5OiAndG1iIycgKyBzbGlkZS5uYW1lLFxuICAgICAgICAgICAgY2xhc3M6IGBxLWNhcm91c2VsX190aHVtYm5haWwgcS1jYXJvdXNlbF9fdGh1bWJuYWlsLS0keyBzbGlkZS5uYW1lID09PSBwcm9wcy5tb2RlbFZhbHVlID8gJycgOiAnaW4nIH1hY3RpdmVgICsgY29sb3IsXG4gICAgICAgICAgICBzcmM6IHNsaWRlLmltZ1NyYyB8fCBzbGlkZVsgJ2ltZy1zcmMnIF0sXG4gICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7IGdvVG9QYW5lbChzbGlkZS5uYW1lKSB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSkpXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5hcnJvd3MgPT09IHRydWUgJiYgcGFuZWxJbmRleC52YWx1ZSA+PSAwKSB7XG4gICAgICAgIGlmIChwcm9wcy5pbmZpbml0ZSA9PT0gdHJ1ZSB8fCBwYW5lbEluZGV4LnZhbHVlID4gMCkge1xuICAgICAgICAgIG5vZGUucHVzaChcbiAgICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgICAga2V5OiAncHJldicsXG4gICAgICAgICAgICAgIGNsYXNzOiBgcS1jYXJvdXNlbF9fY29udHJvbCBxLWNhcm91c2VsX19hcnJvdyBxLWNhcm91c2VsX19wcmV2LWFycm93IHEtY2Fyb3VzZWxfX3ByZXYtYXJyb3ctLSR7IGRpcmVjdGlvbi52YWx1ZSB9IGFic29sdXRlIGZsZXggZmxleC1jZW50ZXJgXG4gICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgIGgoUUJ0biwge1xuICAgICAgICAgICAgICAgIGljb246IGFycm93SWNvbnMudmFsdWVbIDAgXSxcbiAgICAgICAgICAgICAgICAuLi5jb250cm9sUHJvcHMudmFsdWUsXG4gICAgICAgICAgICAgICAgb25DbGljazogcHJldmlvdXNQYW5lbFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvcHMuaW5maW5pdGUgPT09IHRydWUgfHwgcGFuZWxJbmRleC52YWx1ZSA8IHBhbmVsc0xlbiAtIDEpIHtcbiAgICAgICAgICBub2RlLnB1c2goXG4gICAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICAgIGtleTogJ25leHQnLFxuICAgICAgICAgICAgICBjbGFzczogJ3EtY2Fyb3VzZWxfX2NvbnRyb2wgcS1jYXJvdXNlbF9fYXJyb3cgcS1jYXJvdXNlbF9fbmV4dC1hcnJvdydcbiAgICAgICAgICAgICAgICArIGAgcS1jYXJvdXNlbF9fbmV4dC1hcnJvdy0tJHsgZGlyZWN0aW9uLnZhbHVlIH0gYWJzb2x1dGUgZmxleCBmbGV4LWNlbnRlcmBcbiAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgaChRQnRuLCB7XG4gICAgICAgICAgICAgICAgaWNvbjogYXJyb3dJY29ucy52YWx1ZVsgMSBdLFxuICAgICAgICAgICAgICAgIC4uLmNvbnRyb2xQcm9wcy52YWx1ZSxcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiBuZXh0UGFuZWxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoTWVyZ2VTbG90KHNsb3RzLmNvbnRyb2wsIG5vZGUpXG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHBhbmVsc0xlbiA9IHVwZGF0ZVBhbmVsc0xpc3Qoc2xvdHMpXG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgICBzdHlsZTogc3R5bGUudmFsdWVcbiAgICAgIH0sIFtcbiAgICAgICAgaERpcihcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7IGNsYXNzOiAncS1jYXJvdXNlbF9fc2xpZGVzLWNvbnRhaW5lcicgfSxcbiAgICAgICAgICBnZXRQYW5lbENvbnRlbnQoKSxcbiAgICAgICAgICAnc2wtY29udCcsXG4gICAgICAgICAgcHJvcHMuc3dpcGVhYmxlLFxuICAgICAgICAgICgpID0+IHBhbmVsRGlyZWN0aXZlcy52YWx1ZVxuICAgICAgICApXG4gICAgICBdLmNvbmNhdChnZXRDb250ZW50KCkpKVxuICAgIH1cbiAgfVxufSlcbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtZGlhbG9nXG4gICAgdi1tb2RlbD1cIm1vZGFsXCJcbiAgICBwZXJzaXN0ZW50XG4gICAgOm1heGltaXplZD1cInRydWVcIlxuICAgIGNsYXNzPVwiei1tYXhcIlxuICAgIHRyYW5zaXRpb24tc2hvdz1cImZhZGVcIlxuICAgIHRyYW5zaXRpb24taGlkZT1cImZhZGVcIlxuICA+XG4gICAgPHEtY2FyZCBjbGFzcz1cImJnLWRhcmtcIj5cbiAgICAgIDxxLXRvb2xiYXIgY2xhc3M9XCJ0ZXh0LXByaW1hcnkgdG9wLXRvb2xiYXIgcS1wbC1tZFwiIGRlbnNlPlxuICAgICAgICA8cS10b29sYmFyLXRpdGxlIGNsYXNzPVwidGV4dC13aGl0ZSB0ZXh0LXdlaWdodC1ib2xkXCI+XG4gICAgICAgICAge3sgdGl0bGUgfX1cbiAgICAgICAgPC9xLXRvb2xiYXItdGl0bGU+XG4gICAgICAgIDxxLXNwYWNlPjwvcS1zcGFjZT5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgQGNsaWNrPVwibW9kYWwgPSAhdHJ1ZVwiXG4gICAgICAgICAgY29sb3I9XCJkYXJrXCJcbiAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgdGV4dC1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICBpY29uPVwibGFzIGxhLXRpbWVzXCJcbiAgICAgICAgICBkZW5zZVxuICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgIHJvdW5kZWRcbiAgICAgICAgLz5cbiAgICAgIDwvcS10b29sYmFyPlxuICAgICAgPHEtY2FyZC1zZWN0aW9uXG4gICAgICAgIGNsYXNzPVwiZmxleCBmbGV4LWNlbnRlciB0ZXh0LXdoaXRlXCJcbiAgICAgICAgc3R5bGU9XCJtaW4taGVpZ2h0OiA5MCVcIlxuICAgICAgICB2LWlmPVwiaGFzRGF0YVwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaXRcIj5cbiAgICAgICAgICA8cS1jYXJvdXNlbFxuICAgICAgICAgICAgYW5pbWF0ZWRcbiAgICAgICAgICAgIHYtbW9kZWw9XCJzbGlkZVwiXG4gICAgICAgICAgICBhcnJvd3NcbiAgICAgICAgICAgIG5hdmlnYXRpb25cbiAgICAgICAgICAgIGluZmluaXRlXG4gICAgICAgICAgICBzd2lwZWFibGVcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCIoaXRlbXMsIGluZGV4KSBpbiBnYWxsZXJ5XCIgOmtleT1cIml0ZW1zXCI+XG4gICAgICAgICAgICAgIDxxLWNhcm91c2VsLXNsaWRlIDpuYW1lPVwiaW5kZXhcIiA6aW1nLXNyYz1cIml0ZW1zXCIgLz5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9xLWNhcm91c2VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgPC9xLWNhcmQ+XG4gIDwvcS1kaWFsb2c+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIkltYWdlUHJldmlld1wiLFxuICBwcm9wczogW1wiZ2FsbGVyeVwiLCBcInRpdGxlXCJdLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBtb2RhbDogZmFsc2UsXG4gICAgICBzbGlkZTogMCxcbiAgICB9O1xuICB9LFxuICBzZXR1cCgpIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgaGFzRGF0YSgpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmdhbGxlcnkpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfY3JlYXRlQmxvY2siLCJfY3JlYXRlVk5vZGUiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfRnJhZ21lbnQiLCJfcmVuZGVyTGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFPQSxJQUFBLGlCQUFlLGdCQUFnQjtBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUVOLE9BQU87QUFBQSxJQUNMLEdBQUc7QUFBQSxJQUNILFFBQVE7QUFBQSxFQUNUO0FBQUEsRUFFRCxNQUFPLE9BQU8sRUFBRSxTQUFTO0FBQ3ZCLFVBQU0sUUFBUSxTQUFTLE1BQ3JCLE1BQU0sU0FDRixFQUFFLGlCQUFpQixRQUFTLE1BQU0sV0FBYSxJQUMvQyxDQUFFLENBQ1A7QUFFRCxXQUFPLE1BQU0sRUFBRSxPQUFPO0FBQUEsTUFDcEIsT0FBTztBQUFBLE1BQ1AsT0FBTyxNQUFNO0FBQUEsSUFDbkIsR0FBTyxNQUFNLE1BQU0sT0FBTyxDQUFDO0FBQUEsRUFDeEI7QUFDSCxDQUFDO0FDdEJELElBQUksVUFBVTtBQUVQLE1BQU0scUJBQXFCO0FBQUEsRUFDaEMsWUFBWTtBQUFBLEVBQ1osdUJBQXVCO0FBQ3pCO0FBRU8sTUFBTSxxQkFB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
