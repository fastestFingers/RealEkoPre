import { i as inject, x as emptyRenderFn, r as ref, c as computed, K as onBeforeUnmount, o as onMounted, aS as tabsKey, aa as withDirectives, ab as Ripple, h, as as stopAndPrevent, aE as isKeyCode, aT as shouldIgnoreKey, at as QIcon, H as hMergeSlot, g as getCurrentInstance, aU as isDeepEqual, aV as uid, v as createComponent, aW as useTick, $ as useTimeout, w as watch, y as provide, aJ as onDeactivated, aI as onActivated, z as hSlot } from "./index.61ed5618.js";
import { Q as QResizeObserver } from "./QResizeObserver.d08dce3c.js";
import { r as rtlHasScrollBug } from "./rtl.f3ed811c.js";
let id = 0;
const useTabEmits = ["click", "keydown"];
const useTabProps = {
  icon: String,
  label: [Number, String],
  alert: [Boolean, String],
  alertIcon: String,
  name: {
    type: [Number, String],
    default: () => `t_${id++}`
  },
  noCaps: Boolean,
  tabindex: [String, Number],
  disable: Boolean,
  contentClass: String,
  ripple: {
    type: [Boolean, Object],
    default: true
  }
};
function useTab(props, slots, emit, routeData) {
  const $tabs = inject(tabsKey, emptyRenderFn);
  if ($tabs === emptyRenderFn) {
    console.error("QTab/QRouteTab component needs to be child of QTabs");
    return emptyRenderFn;
  }
  const { proxy } = getCurrentInstance();
  const blurTargetRef = ref(null);
  const rootRef = ref(null);
  const tabIndicatorRef = ref(null);
  const ripple = computed(() => props.disable === true || props.ripple === false ? false : Object.assign(
    { keyCodes: [13, 32], early: true },
    props.ripple === true ? {} : props.ripple
  ));
  const isActive = computed(() => $tabs.currentModel.value === props.name);
  const classes = computed(
    () => "q-tab relative-position self-stretch flex flex-center text-center" + (isActive.value === true ? " q-tab--active" + ($tabs.tabProps.value.activeClass ? " " + $tabs.tabProps.value.activeClass : "") + ($tabs.tabProps.value.activeColor ? ` text-${$tabs.tabProps.value.activeColor}` : "") + ($tabs.tabProps.value.activeBgColor ? ` bg-${$tabs.tabProps.value.activeBgColor}` : "") : " q-tab--inactive") + (props.icon && props.label && $tabs.tabProps.value.inlineLabel === false ? " q-tab--full" : "") + (props.noCaps === true || $tabs.tabProps.value.noCaps === true ? " q-tab--no-caps" : "") + (props.disable === true ? " disabled" : " q-focusable q-hoverable cursor-pointer") + (routeData !== void 0 ? routeData.linkClass.value : "")
  );
  const innerClass = computed(
    () => "q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable " + ($tabs.tabProps.value.inlineLabel === true ? "row no-wrap q-tab__content--inline" : "column") + (props.contentClass !== void 0 ? ` ${props.contentClass}` : "")
  );
  const tabIndex = computed(() => props.disable === true || $tabs.hasFocus.value === true || isActive.value === false && $tabs.hasActiveTab.value === true ? -1 : props.tabindex || 0);
  function onClick(e, keyboard) {
    if (keyboard !== true && blurTargetRef.value !== null) {
      blurTargetRef.value.focus();
    }
    if (props.disable === true) {
      if (routeData !== void 0 && routeData.hasRouterLink.value === true) {
        stopAndPrevent(e);
      }
      return;
    }
    if (routeData === void 0) {
      $tabs.updateModel({ name: props.name });
      emit("click", e);
      return;
    }
    if (routeData.hasRouterLink.value === true) {
      const go = (opts = {}) => {
        let hardError;
        const reqId = opts.to === void 0 || isDeepEqual(opts.to, props.to) === true ? $tabs.avoidRouteWatcher = uid() : null;
        return routeData.navigateToRouterLink(e, { ...opts, returnRouterError: true }).catch((err) => {
          hardError = err;
        }).then((softError) => {
          if (reqId === $tabs.avoidRouteWatcher) {
            $tabs.avoidRouteWatcher = false;
            if (hardError === void 0 && (softError === void 0 || softError.message !== void 0 && softError.message.startsWith("Avoided redundant navigation") === true)) {
              $tabs.updateModel({ name: props.name });
            }
          }
          if (opts.returnRouterError === true) {
            return hardError !== void 0 ? Promise.reject(hardError) : softError;
          }
        });
      };
      emit("click", e, go);
      e.defaultPrevented !== true && go();
      return;
    }
    emit("click", e);
  }
  function onKeydown(e) {
    if (isKeyCode(e, [13, 32])) {
      onClick(e, true);
    } else if (shouldIgnoreKey(e) !== true && e.keyCode >= 35 && e.keyCode <= 40 && e.altKey !== true && e.metaKey !== true) {
      $tabs.onKbdNavigate(e.keyCode, proxy.$el) === true && stopAndPrevent(e);
    }
    emit("keydown", e);
  }
  function getContent() {
    const narrow = $tabs.tabProps.value.narrowIndicator, content = [], indicator = h("div", {
      ref: tabIndicatorRef,
      class: [
        "q-tab__indicator",
        $tabs.tabProps.value.indicatorClass
      ]
    });
    props.icon !== void 0 && content.push(
      h(QIcon, {
        class: "q-tab__icon",
        name: props.icon
      })
    );
    props.label !== void 0 && content.push(
      h("div", { class: "q-tab__label" }, props.label)
    );
    props.alert !== false && content.push(
      props.alertIcon !== void 0 ? h(QIcon, {
        class: "q-tab__alert-icon",
        color: props.alert !== true ? props.alert : void 0,
        name: props.alertIcon
      }) : h("div", {
        class: "q-tab__alert" + (props.alert !== true ? ` text-${props.alert}` : "")
      })
    );
    narrow === true && content.push(indicator);
    const node = [
      h("div", { class: "q-focus-helper", tabindex: -1, ref: blurTargetRef }),
      h("div", { class: innerClass.value }, hMergeSlot(slots.default, content))
    ];
    narrow === false && node.push(indicator);
    return node;
  }
  const tabData = {
    name: computed(() => props.name),
    rootRef,
    tabIndicatorRef,
    routeData
  };
  onBeforeUnmount(() => {
    $tabs.unregisterTab(tabData);
  });
  onMounted(() => {
    $tabs.registerTab(tabData);
  });
  function renderTab(tag, customData) {
    const data = {
      ref: rootRef,
      class: classes.value,
      tabindex: tabIndex.value,
      role: "tab",
      "aria-selected": isActive.value === true ? "true" : "false",
      "aria-disabled": props.disable === true ? "true" : void 0,
      onClick,
      onKeydown,
      ...customData
    };
    return withDirectives(
      h(tag, data, getContent()),
      [[Ripple, ripple.value]]
    );
  }
  return { renderTab, $tabs };
}
function getIndicatorClass(color, top, vertical) {
  const pos = vertical === true ? ["left", "right"] : ["top", "bottom"];
  return `absolute-${top === true ? pos[0] : pos[1]}${color ? ` text-${color}` : ""}`;
}
const alignValues = ["left", "center", "right", "justify"];
var QTabs = createComponent({
  name: "QTabs",
  props: {
    modelValue: [Number, String],
    align: {
      type: String,
      default: "center",
      validator: (v) => alignValues.includes(v)
    },
    breakpoint: {
      type: [String, Number],
      default: 600
    },
    vertical: Boolean,
    shrink: Boolean,
    stretch: Boolean,
    activeClass: String,
    activeColor: String,
    activeBgColor: String,
    indicatorColor: String,
    leftIcon: String,
    rightIcon: String,
    outsideArrows: Boolean,
    mobileArrows: Boolean,
    switchIndicator: Boolean,
    narrowIndicator: Boolean,
    inlineLabel: Boolean,
    noCaps: Boolean,
    dense: Boolean,
    contentClass: String,
    "onUpdate:modelValue": [Function, Array]
  },
  setup(props, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;
    const { registerTick: registerScrollTick } = useTick();
    const { registerTick: registerUpdateArrowsTick } = useTick();
    const { registerTick: registerAnimateTick } = useTick();
    const { registerTimeout: registerFocusTimeout, removeTimeout: removeFocusTimeout } = useTimeout();
    const { registerTimeout: registerScrollToTabTimeout, removeTimeout: removeScrollToTabTimeout } = useTimeout();
    const rootRef = ref(null);
    const contentRef = ref(null);
    const currentModel = ref(props.modelValue);
    const scrollable = ref(false);
    const leftArrow = ref(true);
    const rightArrow = ref(false);
    const justify = ref(false);
    const tabDataList = [];
    const tabDataListLen = ref(0);
    const hasFocus = ref(false);
    let animateTimer = null, scrollTimer = null, unwatchRoute;
    const tabProps = computed(() => ({
      activeClass: props.activeClass,
      activeColor: props.activeColor,
      activeBgColor: props.activeBgColor,
      indicatorClass: getIndicatorClass(
        props.indicatorColor,
        props.switchIndicator,
        props.vertical
      ),
      narrowIndicator: props.narrowIndicator,
      inlineLabel: props.inlineLabel,
      noCaps: props.noCaps
    }));
    const hasActiveTab = computed(() => {
      const len = tabDataListLen.value;
      const val = currentModel.value;
      for (let i = 0; i < len; i++) {
        if (tabDataList[i].name.value === val) {
          return true;
        }
      }
      return false;
    });
    const alignClass = computed(() => {
      const align = scrollable.value === true ? "left" : justify.value === true ? "justify" : props.align;
      return `q-tabs__content--align-${align}`;
    });
    const classes = computed(
      () => `q-tabs row no-wrap items-center q-tabs--${scrollable.value === true ? "" : "not-"}scrollable q-tabs--${props.vertical === true ? "vertical" : "horizontal"} q-tabs__arrows--${props.outsideArrows === true ? "outside" : "inside"} q-tabs--mobile-with${props.mobileArrows === true ? "" : "out"}-arrows` + (props.dense === true ? " q-tabs--dense" : "") + (props.shrink === true ? " col-shrink" : "") + (props.stretch === true ? " self-stretch" : "")
    );
    const innerClass = computed(
      () => "q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position " + alignClass.value + (props.contentClass !== void 0 ? ` ${props.contentClass}` : "")
    );
    const domProps = computed(() => props.vertical === true ? { container: "height", content: "offsetHeight", scroll: "scrollHeight" } : { container: "width", content: "offsetWidth", scroll: "scrollWidth" });
    const isRTL = computed(() => props.vertical !== true && $q.lang.rtl === true);
    const rtlPosCorrection = computed(() => rtlHasScrollBug === false && isRTL.value === true);
    watch(isRTL, updateArrows);
    watch(() => props.modelValue, (name) => {
      updateModel({ name, setCurrent: true, skipEmit: true });
    });
    watch(() => props.outsideArrows, recalculateScroll);
    function updateModel({ name, setCurrent, skipEmit }) {
      if (currentModel.value !== name) {
        if (skipEmit !== true && props["onUpdate:modelValue"] !== void 0) {
          emit("update:modelValue", name);
        }
        if (setCurrent === true || props["onUpdate:modelValue"] === void 0) {
          animate(currentModel.value, name);
          currentModel.value = name;
        }
      }
    }
    function recalculateScroll() {
      registerScrollTick(() => {
        updateContainer({
          width: rootRef.value.offsetWidth,
          height: rootRef.value.offsetHeight
        });
      });
    }
    function updateContainer(domSize) {
      if (domProps.value === void 0 || contentRef.value === null)
        return;
      const size = domSize[domProps.value.container], scrollSize = Math.min(
        contentRef.value[domProps.value.scroll],
        Array.prototype.reduce.call(
          contentRef.value.children,
          (acc, el) => acc + (el[domProps.value.content] || 0),
          0
        )
      ), scroll = size > 0 && scrollSize > size;
      scrollable.value = scroll;
      scroll === true && registerUpdateArrowsTick(updateArrows);
      justify.value = size < parseInt(props.breakpoint, 10);
    }
    function animate(oldName, newName) {
      const oldTab = oldName !== void 0 && oldName !== null && oldName !== "" ? tabDataList.find((tab) => tab.name.value === oldName) : null, newTab = newName !== void 0 && newName !== null && newName !== "" ? tabDataList.find((tab) => tab.name.value === newName) : null;
      if (oldTab && newTab) {
        const oldEl = oldTab.tabIndicatorRef.value, newEl = newTab.tabIndicatorRef.value;
        if (animateTimer !== null) {
          clearTimeout(animateTimer);
          animateTimer = null;
        }
        oldEl.style.transition = "none";
        oldEl.style.transform = "none";
        newEl.style.transition = "none";
        newEl.style.transform = "none";
        const oldPos = oldEl.getBoundingClientRect(), newPos = newEl.getBoundingClientRect();
        newEl.style.transform = props.vertical === true ? `translate3d(0,${oldPos.top - newPos.top}px,0) scale3d(1,${newPos.height ? oldPos.height / newPos.height : 1},1)` : `translate3d(${oldPos.left - newPos.left}px,0,0) scale3d(${newPos.width ? oldPos.width / newPos.width : 1},1,1)`;
        registerAnimateTick(() => {
          animateTimer = setTimeout(() => {
            animateTimer = null;
            newEl.style.transition = "transform .25s cubic-bezier(.4, 0, .2, 1)";
            newEl.style.transform = "none";
          }, 70);
        });
      }
      if (newTab && scrollable.value === true) {
        scrollToTabEl(newTab.rootRef.value);
      }
    }
    function scrollToTabEl(el) {
      const { left, width, top, height } = contentRef.value.getBoundingClientRect(), newPos = el.getBoundingClientRect();
      let offset = props.vertical === true ? newPos.top - top : newPos.left - left;
      if (offset < 0) {
        contentRef.value[props.vertical === true ? "scrollTop" : "scrollLeft"] += Math.floor(offset);
        updateArrows();
        return;
      }
      offset += props.vertical === true ? newPos.height - height : newPos.width - width;
      if (offset > 0) {
        contentRef.value[props.vertical === true ? "scrollTop" : "scrollLeft"] += Math.ceil(offset);
        updateArrows();
      }
    }
    function updateArrows() {
      const content = contentRef.value;
      if (content === null)
        return;
      const rect = content.getBoundingClientRect(), pos = props.vertical === true ? content.scrollTop : Math.abs(content.scrollLeft);
      if (isRTL.value === true) {
        leftArrow.value = Math.ceil(pos + rect.width) < content.scrollWidth - 1;
        rightArrow.value = pos > 0;
      } else {
        leftArrow.value = pos > 0;
        rightArrow.value = props.vertical === true ? Math.ceil(pos + rect.height) < content.scrollHeight : Math.ceil(pos + rect.width) < content.scrollWidth;
      }
    }
    function animScrollTo(value) {
      scrollTimer !== null && clearInterval(scrollTimer);
      scrollTimer = setInterval(() => {
        if (scrollTowards(value) === true) {
          stopAnimScroll();
        }
      }, 5);
    }
    function scrollToStart() {
      animScrollTo(rtlPosCorrection.value === true ? Number.MAX_SAFE_INTEGER : 0);
    }
    function scrollToEnd() {
      animScrollTo(rtlPosCorrection.value === true ? 0 : Number.MAX_SAFE_INTEGER);
    }
    function stopAnimScroll() {
      if (scrollTimer !== null) {
        clearInterval(scrollTimer);
        scrollTimer = null;
      }
    }
    function onKbdNavigate(keyCode, fromEl) {
      const tabs = Array.prototype.filter.call(
        contentRef.value.children,
        (el) => el === fromEl || el.matches && el.matches(".q-tab.q-focusable") === true
      );
      const len = tabs.length;
      if (len === 0)
        return;
      if (keyCode === 36) {
        scrollToTabEl(tabs[0]);
        tabs[0].focus();
        return true;
      }
      if (keyCode === 35) {
        scrollToTabEl(tabs[len - 1]);
        tabs[len - 1].focus();
        return true;
      }
      const dirPrev = keyCode === (props.vertical === true ? 38 : 37);
      const dirNext = keyCode === (props.vertical === true ? 40 : 39);
      const dir = dirPrev === true ? -1 : dirNext === true ? 1 : void 0;
      if (dir !== void 0) {
        const rtlDir = isRTL.value === true ? -1 : 1;
        const index = tabs.indexOf(fromEl) + dir * rtlDir;
        if (index >= 0 && index < len) {
          scrollToTabEl(tabs[index]);
          tabs[index].focus({ preventScroll: true });
        }
        return true;
      }
    }
    const posFn = computed(() => rtlPosCorrection.value === true ? { get: (content) => Math.abs(content.scrollLeft), set: (content, pos) => {
      content.scrollLeft = -pos;
    } } : props.vertical === true ? { get: (content) => content.scrollTop, set: (content, pos) => {
      content.scrollTop = pos;
    } } : { get: (content) => content.scrollLeft, set: (content, pos) => {
      content.scrollLeft = pos;
    } });
    function scrollTowards(value) {
      const content = contentRef.value, { get, set } = posFn.value;
      let done = false, pos = get(content);
      const direction = value < pos ? -1 : 1;
      pos += direction * 5;
      if (pos < 0) {
        done = true;
        pos = 0;
      } else if (direction === -1 && pos <= value || direction === 1 && pos >= value) {
        done = true;
        pos = value;
      }
      set(content, pos);
      updateArrows();
      return done;
    }
    function hasQueryIncluded(targetQuery, matchingQuery) {
      for (const key in targetQuery) {
        if (targetQuery[key] !== matchingQuery[key]) {
          return false;
        }
      }
      return true;
    }
    function updateActiveRoute() {
      let name = null, bestScore = { matchedLen: 0, queryDiff: 9999, hrefLen: 0 };
      const list = tabDataList.filter((tab) => tab.routeData !== void 0 && tab.routeData.hasRouterLink.value === true);
      const { hash: currentHash, query: currentQuery } = proxy.$route;
      const currentQueryLen = Object.keys(currentQuery).length;
      for (const tab of list) {
        const exact = tab.routeData.exact.value === true;
        if (tab.routeData[exact === true ? "linkIsExactActive" : "linkIsActive"].value !== true) {
          continue;
        }
        const { hash, query, matched, href } = tab.routeData.resolvedLink.value;
        const queryLen = Object.keys(query).length;
        if (exact === true) {
          if (hash !== currentHash) {
            continue;
          }
          if (queryLen !== currentQueryLen || hasQueryIncluded(currentQuery, query) === false) {
            continue;
          }
          name = tab.name.value;
          break;
        }
        if (hash !== "" && hash !== currentHash) {
          continue;
        }
        if (queryLen !== 0 && hasQueryIncluded(query, currentQuery) === false) {
          continue;
        }
        const newScore = {
          matchedLen: matched.length,
          queryDiff: currentQueryLen - queryLen,
          hrefLen: href.length - hash.length
        };
        if (newScore.matchedLen > bestScore.matchedLen) {
          name = tab.name.value;
          bestScore = newScore;
          continue;
        } else if (newScore.matchedLen !== bestScore.matchedLen) {
          continue;
        }
        if (newScore.queryDiff < bestScore.queryDiff) {
          name = tab.name.value;
          bestScore = newScore;
        } else if (newScore.queryDiff !== bestScore.queryDiff) {
          continue;
        }
        if (newScore.hrefLen > bestScore.hrefLen) {
          name = tab.name.value;
          bestScore = newScore;
        }
      }
      if (name === null && tabDataList.some((tab) => tab.routeData === void 0 && tab.name.value === currentModel.value) === true) {
        return;
      }
      updateModel({ name, setCurrent: true });
    }
    function onFocusin(e) {
      removeFocusTimeout();
      if (hasFocus.value !== true && rootRef.value !== null && e.target && typeof e.target.closest === "function") {
        const tab = e.target.closest(".q-tab");
        if (tab && rootRef.value.contains(tab) === true) {
          hasFocus.value = true;
          scrollable.value === true && scrollToTabEl(tab);
        }
      }
    }
    function onFocusout() {
      registerFocusTimeout(() => {
        hasFocus.value = false;
      }, 30);
    }
    function verifyRouteModel() {
      if ($tabs.avoidRouteWatcher === false) {
        registerScrollToTabTimeout(updateActiveRoute);
      } else {
        removeScrollToTabTimeout();
      }
    }
    function watchRoute() {
      if (unwatchRoute === void 0) {
        const unwatch = watch(() => proxy.$route.fullPath, verifyRouteModel);
        unwatchRoute = () => {
          unwatch();
          unwatchRoute = void 0;
        };
      }
    }
    function registerTab(tabData) {
      tabDataList.push(tabData);
      tabDataListLen.value++;
      recalculateScroll();
      if (tabData.routeData === void 0 || proxy.$route === void 0) {
        registerScrollToTabTimeout(() => {
          if (scrollable.value === true) {
            const value = currentModel.value;
            const newTab = value !== void 0 && value !== null && value !== "" ? tabDataList.find((tab) => tab.name.value === value) : null;
            newTab && scrollToTabEl(newTab.rootRef.value);
          }
        });
      } else {
        watchRoute();
        if (tabData.routeData.hasRouterLink.value === true) {
          verifyRouteModel();
        }
      }
    }
    function unregisterTab(tabData) {
      tabDataList.splice(tabDataList.indexOf(tabData), 1);
      tabDataListLen.value--;
      recalculateScroll();
      if (unwatchRoute !== void 0 && tabData.routeData !== void 0) {
        if (tabDataList.every((tab) => tab.routeData === void 0) === true) {
          unwatchRoute();
        }
        verifyRouteModel();
      }
    }
    const $tabs = {
      currentModel,
      tabProps,
      hasFocus,
      hasActiveTab,
      registerTab,
      unregisterTab,
      verifyRouteModel,
      updateModel,
      onKbdNavigate,
      avoidRouteWatcher: false
    };
    provide(tabsKey, $tabs);
    function cleanup() {
      animateTimer !== null && clearTimeout(animateTimer);
      stopAnimScroll();
      unwatchRoute !== void 0 && unwatchRoute();
    }
    let hadRouteWatcher;
    onBeforeUnmount(cleanup);
    onDeactivated(() => {
      hadRouteWatcher = unwatchRoute !== void 0;
      cleanup();
    });
    onActivated(() => {
      hadRouteWatcher === true && watchRoute();
      recalculateScroll();
    });
    return () => {
      return h("div", {
        ref: rootRef,
        class: classes.value,
        role: "tablist",
        onFocusin,
        onFocusout
      }, [
        h(QResizeObserver, { onResize: updateContainer }),
        h("div", {
          ref: contentRef,
          class: innerClass.value,
          onScroll: updateArrows
        }, hSlot(slots.default)),
        h(QIcon, {
          class: "q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon" + (leftArrow.value === true ? "" : " q-tabs__arrow--faded"),
          name: props.leftIcon || $q.iconSet.tabs[props.vertical === true ? "up" : "left"],
          onMousedownPassive: scrollToStart,
          onTouchstartPassive: scrollToStart,
          onMouseupPassive: stopAnimScroll,
          onMouseleavePassive: stopAnimScroll,
          onTouchendPassive: stopAnimScroll
        }),
        h(QIcon, {
          class: "q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon" + (rightArrow.value === true ? "" : " q-tabs__arrow--faded"),
          name: props.rightIcon || $q.iconSet.tabs[props.vertical === true ? "down" : "right"],
          onMousedownPassive: scrollToEnd,
          onTouchstartPassive: scrollToEnd,
          onMouseupPassive: stopAnimScroll,
          onMouseleavePassive: stopAnimScroll,
          onTouchendPassive: stopAnimScroll
        })
      ]);
    };
  }
});
export { QTabs as Q, useTabEmits as a, useTab as b, useTabProps as u };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUVRhYnMuMmY1ZTI5Y2IuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdGFicy91c2UtdGFiLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJzL1FUYWJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIGluamVjdCwgb25CZWZvcmVVbm1vdW50LCBvbk1vdW50ZWQsIHdpdGhEaXJlY3RpdmVzLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBRSWNvbiBmcm9tICcuLi9pY29uL1FJY29uLmpzJ1xuXG5pbXBvcnQgUmlwcGxlIGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvcmlwcGxlL1JpcHBsZS5qcydcblxuaW1wb3J0IHsgaE1lcmdlU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUucmVuZGVyL3JlbmRlci5qcydcbmltcG9ydCB7IGlzS2V5Q29kZSwgc2hvdWxkSWdub3JlS2V5IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5rZXlib2FyZC9rZXktY29tcG9zaXRpb24uanMnXG5pbXBvcnQgeyB0YWJzS2V5LCBlbXB0eVJlbmRlckZuIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5zeW1ib2xzL3N5bWJvbHMuanMnXG5pbXBvcnQgeyBzdG9wQW5kUHJldmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50L2V2ZW50LmpzJ1xuaW1wb3J0IHVpZCBmcm9tICcuLi8uLi91dGlscy91aWQvdWlkLmpzJ1xuaW1wb3J0IHsgaXNEZWVwRXF1YWwgfSBmcm9tICcuLi8uLi91dGlscy9pcy9pcy5qcydcblxubGV0IGlkID0gMFxuXG5leHBvcnQgY29uc3QgdXNlVGFiRW1pdHMgPSBbICdjbGljaycsICdrZXlkb3duJyBdXG5cbmV4cG9ydCBjb25zdCB1c2VUYWJQcm9wcyA9IHtcbiAgaWNvbjogU3RyaW5nLFxuICBsYWJlbDogWyBOdW1iZXIsIFN0cmluZyBdLFxuXG4gIGFsZXJ0OiBbIEJvb2xlYW4sIFN0cmluZyBdLFxuICBhbGVydEljb246IFN0cmluZyxcblxuICBuYW1lOiB7XG4gICAgdHlwZTogWyBOdW1iZXIsIFN0cmluZyBdLFxuICAgIGRlZmF1bHQ6ICgpID0+IGB0XyR7IGlkKysgfWBcbiAgfSxcblxuICBub0NhcHM6IEJvb2xlYW4sXG5cbiAgdGFiaW5kZXg6IFsgU3RyaW5nLCBOdW1iZXIgXSxcbiAgZGlzYWJsZTogQm9vbGVhbixcblxuICBjb250ZW50Q2xhc3M6IFN0cmluZyxcblxuICByaXBwbGU6IHtcbiAgICB0eXBlOiBbIEJvb2xlYW4sIE9iamVjdCBdLFxuICAgIGRlZmF1bHQ6IHRydWVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcHMsIHNsb3RzLCBlbWl0LCByb3V0ZURhdGEpIHtcbiAgY29uc3QgJHRhYnMgPSBpbmplY3QodGFic0tleSwgZW1wdHlSZW5kZXJGbilcbiAgaWYgKCR0YWJzID09PSBlbXB0eVJlbmRlckZuKSB7XG4gICAgY29uc29sZS5lcnJvcignUVRhYi9RUm91dGVUYWIgY29tcG9uZW50IG5lZWRzIHRvIGJlIGNoaWxkIG9mIFFUYWJzJylcbiAgICByZXR1cm4gZW1wdHlSZW5kZXJGblxuICB9XG5cbiAgY29uc3QgeyBwcm94eSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcblxuICBjb25zdCBibHVyVGFyZ2V0UmVmID0gcmVmKG51bGwpXG4gIGNvbnN0IHJvb3RSZWYgPSByZWYobnVsbClcbiAgY29uc3QgdGFiSW5kaWNhdG9yUmVmID0gcmVmKG51bGwpXG5cbiAgY29uc3QgcmlwcGxlID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIHByb3BzLmRpc2FibGUgPT09IHRydWUgfHwgcHJvcHMucmlwcGxlID09PSBmYWxzZVxuICAgICAgPyBmYWxzZVxuICAgICAgOiBPYmplY3QuYXNzaWduKFxuICAgICAgICB7IGtleUNvZGVzOiBbIDEzLCAzMiBdLCBlYXJseTogdHJ1ZSB9LFxuICAgICAgICBwcm9wcy5yaXBwbGUgPT09IHRydWUgPyB7fSA6IHByb3BzLnJpcHBsZVxuICAgICAgKVxuICApKVxuXG4gIGNvbnN0IGlzQWN0aXZlID0gY29tcHV0ZWQoKCkgPT4gJHRhYnMuY3VycmVudE1vZGVsLnZhbHVlID09PSBwcm9wcy5uYW1lKVxuXG4gIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICdxLXRhYiByZWxhdGl2ZS1wb3NpdGlvbiBzZWxmLXN0cmV0Y2ggZmxleCBmbGV4LWNlbnRlciB0ZXh0LWNlbnRlcidcbiAgICArIChcbiAgICAgIGlzQWN0aXZlLnZhbHVlID09PSB0cnVlXG4gICAgICAgID8gKFxuICAgICAgICAgICAgJyBxLXRhYi0tYWN0aXZlJ1xuICAgICAgICAgICAgKyAoJHRhYnMudGFiUHJvcHMudmFsdWUuYWN0aXZlQ2xhc3MgPyAnICcgKyAkdGFicy50YWJQcm9wcy52YWx1ZS5hY3RpdmVDbGFzcyA6ICcnKVxuICAgICAgICAgICAgKyAoJHRhYnMudGFiUHJvcHMudmFsdWUuYWN0aXZlQ29sb3IgPyBgIHRleHQtJHsgJHRhYnMudGFiUHJvcHMudmFsdWUuYWN0aXZlQ29sb3IgfWAgOiAnJylcbiAgICAgICAgICAgICsgKCR0YWJzLnRhYlByb3BzLnZhbHVlLmFjdGl2ZUJnQ29sb3IgPyBgIGJnLSR7ICR0YWJzLnRhYlByb3BzLnZhbHVlLmFjdGl2ZUJnQ29sb3IgfWAgOiAnJylcbiAgICAgICAgICApXG4gICAgICAgIDogJyBxLXRhYi0taW5hY3RpdmUnXG4gICAgKVxuICAgICsgKHByb3BzLmljb24gJiYgcHJvcHMubGFiZWwgJiYgJHRhYnMudGFiUHJvcHMudmFsdWUuaW5saW5lTGFiZWwgPT09IGZhbHNlID8gJyBxLXRhYi0tZnVsbCcgOiAnJylcbiAgICArIChwcm9wcy5ub0NhcHMgPT09IHRydWUgfHwgJHRhYnMudGFiUHJvcHMudmFsdWUubm9DYXBzID09PSB0cnVlID8gJyBxLXRhYi0tbm8tY2FwcycgOiAnJylcbiAgICArIChwcm9wcy5kaXNhYmxlID09PSB0cnVlID8gJyBkaXNhYmxlZCcgOiAnIHEtZm9jdXNhYmxlIHEtaG92ZXJhYmxlIGN1cnNvci1wb2ludGVyJylcbiAgICArIChyb3V0ZURhdGEgIT09IHZvaWQgMCA/IHJvdXRlRGF0YS5saW5rQ2xhc3MudmFsdWUgOiAnJylcbiAgKVxuXG4gIGNvbnN0IGlubmVyQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICdxLXRhYl9fY29udGVudCBzZWxmLXN0cmV0Y2ggZmxleC1jZW50ZXIgcmVsYXRpdmUtcG9zaXRpb24gcS1hbmNob3ItLXNraXAgbm9uLXNlbGVjdGFibGUgJ1xuICAgICsgKCR0YWJzLnRhYlByb3BzLnZhbHVlLmlubGluZUxhYmVsID09PSB0cnVlID8gJ3JvdyBuby13cmFwIHEtdGFiX19jb250ZW50LS1pbmxpbmUnIDogJ2NvbHVtbicpXG4gICAgKyAocHJvcHMuY29udGVudENsYXNzICE9PSB2b2lkIDAgPyBgICR7IHByb3BzLmNvbnRlbnRDbGFzcyB9YCA6ICcnKVxuICApXG5cbiAgY29uc3QgdGFiSW5kZXggPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgKFxuICAgICAgcHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZVxuICAgICAgfHwgJHRhYnMuaGFzRm9jdXMudmFsdWUgPT09IHRydWVcbiAgICAgIHx8IChpc0FjdGl2ZS52YWx1ZSA9PT0gZmFsc2UgJiYgJHRhYnMuaGFzQWN0aXZlVGFiLnZhbHVlID09PSB0cnVlKVxuICAgIClcbiAgICAgID8gLTFcbiAgICAgIDogcHJvcHMudGFiaW5kZXggfHwgMFxuICApKVxuXG4gIGZ1bmN0aW9uIG9uQ2xpY2sgKGUsIGtleWJvYXJkKSB7XG4gICAgaWYgKGtleWJvYXJkICE9PSB0cnVlICYmIGJsdXJUYXJnZXRSZWYudmFsdWUgIT09IG51bGwpIHtcbiAgICAgIGJsdXJUYXJnZXRSZWYudmFsdWUuZm9jdXMoKVxuICAgIH1cblxuICAgIGlmIChwcm9wcy5kaXNhYmxlID09PSB0cnVlKSB7XG4gICAgICAvLyB3ZSBzaG91bGQgaGluZGVyIG5hdGl2ZSBuYXZpZ2F0aW9uIHRob3VnaFxuICAgICAgaWYgKHJvdXRlRGF0YSAhPT0gdm9pZCAwICYmIHJvdXRlRGF0YS5oYXNSb3V0ZXJMaW5rLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIHN0b3BBbmRQcmV2ZW50KGUpXG4gICAgICB9XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBkbyB3ZSBoYXZlIGEgUVRhYj9cbiAgICBpZiAocm91dGVEYXRhID09PSB2b2lkIDApIHtcbiAgICAgICR0YWJzLnVwZGF0ZU1vZGVsKHsgbmFtZTogcHJvcHMubmFtZSB9KVxuICAgICAgZW1pdCgnY2xpY2snLCBlKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHJvdXRlRGF0YS5oYXNSb3V0ZXJMaW5rLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICBjb25zdCBnbyA9IChvcHRzID0ge30pID0+IHtcbiAgICAgICAgLy8gaWYgcmVxdWlyaW5nIHRvIGdvIHRvIGFub3RoZXIgcm91dGUsIHRoZW4gd2VcbiAgICAgICAgLy8gbGV0IHRoZSBRVGFicyByb3V0ZSB3YXRjaGVyIGRvIGl0cyBqb2IsXG4gICAgICAgIC8vIG90aGVyd2lzZSBkaXJlY3RseSBzZWxlY3QgdGhpc1xuICAgICAgICBsZXQgaGFyZEVycm9yXG4gICAgICAgIGNvbnN0IHJlcUlkID0gb3B0cy50byA9PT0gdm9pZCAwIHx8IGlzRGVlcEVxdWFsKG9wdHMudG8sIHByb3BzLnRvKSA9PT0gdHJ1ZVxuICAgICAgICAgID8gKCR0YWJzLmF2b2lkUm91dGVXYXRjaGVyID0gdWlkKCkpXG4gICAgICAgICAgOiBudWxsXG5cbiAgICAgICAgcmV0dXJuIHJvdXRlRGF0YS5uYXZpZ2F0ZVRvUm91dGVyTGluayhlLCB7IC4uLm9wdHMsIHJldHVyblJvdXRlckVycm9yOiB0cnVlIH0pXG4gICAgICAgICAgLmNhdGNoKGVyciA9PiB7IGhhcmRFcnJvciA9IGVyciB9KVxuICAgICAgICAgIC50aGVuKHNvZnRFcnJvciA9PiB7XG4gICAgICAgICAgICBpZiAocmVxSWQgPT09ICR0YWJzLmF2b2lkUm91dGVXYXRjaGVyKSB7XG4gICAgICAgICAgICAgICR0YWJzLmF2b2lkUm91dGVXYXRjaGVyID0gZmFsc2VcblxuICAgICAgICAgICAgICAvLyBpZiB3ZSBkb24ndCBoYXZlIGFueSBoYXJkIGVycm9ycyBvciBhbnkgc29mdCBlcnJvcnMsIGV4Y2VwdCBmb3JcbiAgICAgICAgICAgICAgLy8gd2hlbiBuYXZpZ2F0aW5nIHRvIHRoZSBzYW1lIHJvdXRlIChvbiBhbGwgb3RoZXIgc29mdCBlcnJvcnMsXG4gICAgICAgICAgICAgIC8vIGxpa2Ugd2hlbiBuYXZpZ2F0aW9uIHdhcyBhYm9ydGVkIGluIGEgbmF2IGd1YXJkLCB3ZSBkb24ndCBhY3RpdmF0ZSB0aGlzIHRhYilcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGhhcmRFcnJvciA9PT0gdm9pZCAwICYmIChcbiAgICAgICAgICAgICAgICAgIHNvZnRFcnJvciA9PT0gdm9pZCAwXG4gICAgICAgICAgICAgICAgICB8fCAoc29mdEVycm9yLm1lc3NhZ2UgIT09IHZvaWQgMCAmJiBzb2Z0RXJyb3IubWVzc2FnZS5zdGFydHNXaXRoKCdBdm9pZGVkIHJlZHVuZGFudCBuYXZpZ2F0aW9uJykgPT09IHRydWUpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAkdGFicy51cGRhdGVNb2RlbCh7IG5hbWU6IHByb3BzLm5hbWUgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob3B0cy5yZXR1cm5Sb3V0ZXJFcnJvciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gaGFyZEVycm9yICE9PSB2b2lkIDAgPyBQcm9taXNlLnJlamVjdChoYXJkRXJyb3IpIDogc29mdEVycm9yXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgZW1pdCgnY2xpY2snLCBlLCBnbylcbiAgICAgIGUuZGVmYXVsdFByZXZlbnRlZCAhPT0gdHJ1ZSAmJiBnbygpXG5cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGVtaXQoJ2NsaWNrJywgZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uS2V5ZG93biAoZSkge1xuICAgIGlmIChpc0tleUNvZGUoZSwgWyAxMywgMzIgXSkpIHtcbiAgICAgIG9uQ2xpY2soZSwgdHJ1ZSlcbiAgICB9XG4gICAgZWxzZSBpZiAoXG4gICAgICBzaG91bGRJZ25vcmVLZXkoZSkgIT09IHRydWVcbiAgICAgICYmIGUua2V5Q29kZSA+PSAzNVxuICAgICAgJiYgZS5rZXlDb2RlIDw9IDQwXG4gICAgICAmJiBlLmFsdEtleSAhPT0gdHJ1ZVxuICAgICAgJiYgZS5tZXRhS2V5ICE9PSB0cnVlXG4gICAgKSB7XG4gICAgICAkdGFicy5vbktiZE5hdmlnYXRlKGUua2V5Q29kZSwgcHJveHkuJGVsKSA9PT0gdHJ1ZSAmJiBzdG9wQW5kUHJldmVudChlKVxuICAgIH1cblxuICAgIGVtaXQoJ2tleWRvd24nLCBlKVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q29udGVudCAoKSB7XG4gICAgY29uc3RcbiAgICAgIG5hcnJvdyA9ICR0YWJzLnRhYlByb3BzLnZhbHVlLm5hcnJvd0luZGljYXRvcixcbiAgICAgIGNvbnRlbnQgPSBbXSxcbiAgICAgIGluZGljYXRvciA9IGgoJ2RpdicsIHtcbiAgICAgICAgcmVmOiB0YWJJbmRpY2F0b3JSZWYsXG4gICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgJ3EtdGFiX19pbmRpY2F0b3InLFxuICAgICAgICAgICR0YWJzLnRhYlByb3BzLnZhbHVlLmluZGljYXRvckNsYXNzXG4gICAgICAgIF1cbiAgICAgIH0pXG5cbiAgICBwcm9wcy5pY29uICE9PSB2b2lkIDAgJiYgY29udGVudC5wdXNoKFxuICAgICAgaChRSWNvbiwge1xuICAgICAgICBjbGFzczogJ3EtdGFiX19pY29uJyxcbiAgICAgICAgbmFtZTogcHJvcHMuaWNvblxuICAgICAgfSlcbiAgICApXG5cbiAgICBwcm9wcy5sYWJlbCAhPT0gdm9pZCAwICYmIGNvbnRlbnQucHVzaChcbiAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYl9fbGFiZWwnIH0sIHByb3BzLmxhYmVsKVxuICAgIClcblxuICAgIHByb3BzLmFsZXJ0ICE9PSBmYWxzZSAmJiBjb250ZW50LnB1c2goXG4gICAgICBwcm9wcy5hbGVydEljb24gIT09IHZvaWQgMFxuICAgICAgICA/IGgoUUljb24sIHtcbiAgICAgICAgICBjbGFzczogJ3EtdGFiX19hbGVydC1pY29uJyxcbiAgICAgICAgICBjb2xvcjogcHJvcHMuYWxlcnQgIT09IHRydWVcbiAgICAgICAgICAgID8gcHJvcHMuYWxlcnRcbiAgICAgICAgICAgIDogdm9pZCAwLFxuICAgICAgICAgIG5hbWU6IHByb3BzLmFsZXJ0SWNvblxuICAgICAgICB9KVxuICAgICAgICA6IGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3EtdGFiX19hbGVydCdcbiAgICAgICAgICAgICsgKHByb3BzLmFsZXJ0ICE9PSB0cnVlID8gYCB0ZXh0LSR7IHByb3BzLmFsZXJ0IH1gIDogJycpXG4gICAgICAgIH0pXG4gICAgKVxuXG4gICAgbmFycm93ID09PSB0cnVlICYmIGNvbnRlbnQucHVzaChpbmRpY2F0b3IpXG5cbiAgICBjb25zdCBub2RlID0gW1xuICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtZm9jdXMtaGVscGVyJywgdGFiaW5kZXg6IC0xLCByZWY6IGJsdXJUYXJnZXRSZWYgfSksXG4gICAgICBoKCdkaXYnLCB7IGNsYXNzOiBpbm5lckNsYXNzLnZhbHVlIH0sIGhNZXJnZVNsb3Qoc2xvdHMuZGVmYXVsdCwgY29udGVudCkpXG4gICAgXVxuXG4gICAgbmFycm93ID09PSBmYWxzZSAmJiBub2RlLnB1c2goaW5kaWNhdG9yKVxuXG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG4gIGNvbnN0IHRhYkRhdGEgPSB7XG4gICAgbmFtZTogY29tcHV0ZWQoKCkgPT4gcHJvcHMubmFtZSksXG4gICAgcm9vdFJlZixcbiAgICB0YWJJbmRpY2F0b3JSZWYsXG4gICAgcm91dGVEYXRhXG4gIH1cblxuICBvbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICAgICR0YWJzLnVucmVnaXN0ZXJUYWIodGFiRGF0YSlcbiAgfSlcblxuICBvbk1vdW50ZWQoKCkgPT4ge1xuICAgICR0YWJzLnJlZ2lzdGVyVGFiKHRhYkRhdGEpXG4gIH0pXG5cbiAgZnVuY3Rpb24gcmVuZGVyVGFiICh0YWcsIGN1c3RvbURhdGEpIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgcmVmOiByb290UmVmLFxuICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICB0YWJpbmRleDogdGFiSW5kZXgudmFsdWUsXG4gICAgICByb2xlOiAndGFiJyxcbiAgICAgICdhcmlhLXNlbGVjdGVkJzogaXNBY3RpdmUudmFsdWUgPT09IHRydWUgPyAndHJ1ZScgOiAnZmFsc2UnLFxuICAgICAgJ2FyaWEtZGlzYWJsZWQnOiBwcm9wcy5kaXNhYmxlID09PSB0cnVlID8gJ3RydWUnIDogdm9pZCAwLFxuICAgICAgb25DbGljayxcbiAgICAgIG9uS2V5ZG93bixcbiAgICAgIC4uLmN1c3RvbURhdGFcbiAgICB9XG5cbiAgICByZXR1cm4gd2l0aERpcmVjdGl2ZXMoXG4gICAgICBoKHRhZywgZGF0YSwgZ2V0Q29udGVudCgpKSxcbiAgICAgIFsgWyBSaXBwbGUsIHJpcHBsZS52YWx1ZSBdIF1cbiAgICApXG4gIH1cblxuICByZXR1cm4geyByZW5kZXJUYWIsICR0YWJzIH1cbn1cbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBvbkJlZm9yZVVubW91bnQsIG9uQWN0aXZhdGVkLCBvbkRlYWN0aXZhdGVkLCBnZXRDdXJyZW50SW5zdGFuY2UsIHByb3ZpZGUgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBRSWNvbiBmcm9tICcuLi9pY29uL1FJY29uLmpzJ1xuaW1wb3J0IFFSZXNpemVPYnNlcnZlciBmcm9tICcuLi9yZXNpemUtb2JzZXJ2ZXIvUVJlc2l6ZU9ic2VydmVyLmpzJ1xuXG5pbXBvcnQgdXNlVGljayBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy91c2UtdGljay91c2UtdGljay5qcydcbmltcG9ydCB1c2VUaW1lb3V0IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3VzZS10aW1lb3V0L3VzZS10aW1lb3V0LmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmNyZWF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUucmVuZGVyL3JlbmRlci5qcydcbmltcG9ydCB7IHRhYnNLZXkgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnN5bWJvbHMvc3ltYm9scy5qcydcbmltcG9ydCB7IHJ0bEhhc1Njcm9sbEJ1ZyB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUucnRsL3J0bC5qcydcblxuZnVuY3Rpb24gZ2V0SW5kaWNhdG9yQ2xhc3MgKGNvbG9yLCB0b3AsIHZlcnRpY2FsKSB7XG4gIGNvbnN0IHBvcyA9IHZlcnRpY2FsID09PSB0cnVlXG4gICAgPyBbICdsZWZ0JywgJ3JpZ2h0JyBdXG4gICAgOiBbICd0b3AnLCAnYm90dG9tJyBdXG5cbiAgcmV0dXJuIGBhYnNvbHV0ZS0keyB0b3AgPT09IHRydWUgPyBwb3NbIDAgXSA6IHBvc1sgMSBdIH0keyBjb2xvciA/IGAgdGV4dC0keyBjb2xvciB9YCA6ICcnIH1gXG59XG5cbmNvbnN0IGFsaWduVmFsdWVzID0gWyAnbGVmdCcsICdjZW50ZXInLCAncmlnaHQnLCAnanVzdGlmeScgXVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVRhYnMnLFxuXG4gIHByb3BzOiB7XG4gICAgbW9kZWxWYWx1ZTogWyBOdW1iZXIsIFN0cmluZyBdLFxuXG4gICAgYWxpZ246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdjZW50ZXInLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IGFsaWduVmFsdWVzLmluY2x1ZGVzKHYpXG4gICAgfSxcbiAgICBicmVha3BvaW50OiB7XG4gICAgICB0eXBlOiBbIFN0cmluZywgTnVtYmVyIF0sXG4gICAgICBkZWZhdWx0OiA2MDBcbiAgICB9LFxuXG4gICAgdmVydGljYWw6IEJvb2xlYW4sXG4gICAgc2hyaW5rOiBCb29sZWFuLFxuICAgIHN0cmV0Y2g6IEJvb2xlYW4sXG5cbiAgICBhY3RpdmVDbGFzczogU3RyaW5nLFxuICAgIGFjdGl2ZUNvbG9yOiBTdHJpbmcsXG4gICAgYWN0aXZlQmdDb2xvcjogU3RyaW5nLFxuICAgIGluZGljYXRvckNvbG9yOiBTdHJpbmcsXG4gICAgbGVmdEljb246IFN0cmluZyxcbiAgICByaWdodEljb246IFN0cmluZyxcblxuICAgIG91dHNpZGVBcnJvd3M6IEJvb2xlYW4sXG4gICAgbW9iaWxlQXJyb3dzOiBCb29sZWFuLFxuXG4gICAgc3dpdGNoSW5kaWNhdG9yOiBCb29sZWFuLFxuXG4gICAgbmFycm93SW5kaWNhdG9yOiBCb29sZWFuLFxuICAgIGlubGluZUxhYmVsOiBCb29sZWFuLFxuICAgIG5vQ2FwczogQm9vbGVhbixcblxuICAgIGRlbnNlOiBCb29sZWFuLFxuXG4gICAgY29udGVudENsYXNzOiBTdHJpbmcsXG5cbiAgICAnb25VcGRhdGU6bW9kZWxWYWx1ZSc6IFsgRnVuY3Rpb24sIEFycmF5IF1cbiAgfSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGNvbnN0IHsgcHJveHkgfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gICAgY29uc3QgeyAkcSB9ID0gcHJveHlcblxuICAgIGNvbnN0IHsgcmVnaXN0ZXJUaWNrOiByZWdpc3RlclNjcm9sbFRpY2sgfSA9IHVzZVRpY2soKVxuICAgIGNvbnN0IHsgcmVnaXN0ZXJUaWNrOiByZWdpc3RlclVwZGF0ZUFycm93c1RpY2sgfSA9IHVzZVRpY2soKVxuICAgIGNvbnN0IHsgcmVnaXN0ZXJUaWNrOiByZWdpc3RlckFuaW1hdGVUaWNrIH0gPSB1c2VUaWNrKClcblxuICAgIGNvbnN0IHsgcmVnaXN0ZXJUaW1lb3V0OiByZWdpc3RlckZvY3VzVGltZW91dCwgcmVtb3ZlVGltZW91dDogcmVtb3ZlRm9jdXNUaW1lb3V0IH0gPSB1c2VUaW1lb3V0KClcbiAgICBjb25zdCB7IHJlZ2lzdGVyVGltZW91dDogcmVnaXN0ZXJTY3JvbGxUb1RhYlRpbWVvdXQsIHJlbW92ZVRpbWVvdXQ6IHJlbW92ZVNjcm9sbFRvVGFiVGltZW91dCB9ID0gdXNlVGltZW91dCgpXG5cbiAgICBjb25zdCByb290UmVmID0gcmVmKG51bGwpXG4gICAgY29uc3QgY29udGVudFJlZiA9IHJlZihudWxsKVxuXG4gICAgY29uc3QgY3VycmVudE1vZGVsID0gcmVmKHByb3BzLm1vZGVsVmFsdWUpXG4gICAgY29uc3Qgc2Nyb2xsYWJsZSA9IHJlZihmYWxzZSlcbiAgICBjb25zdCBsZWZ0QXJyb3cgPSByZWYodHJ1ZSlcbiAgICBjb25zdCByaWdodEFycm93ID0gcmVmKGZhbHNlKVxuICAgIGNvbnN0IGp1c3RpZnkgPSByZWYoZmFsc2UpXG5cbiAgICBjb25zdCB0YWJEYXRhTGlzdCA9IFtdXG4gICAgY29uc3QgdGFiRGF0YUxpc3RMZW4gPSByZWYoMClcbiAgICBjb25zdCBoYXNGb2N1cyA9IHJlZihmYWxzZSlcblxuICAgIGxldCBhbmltYXRlVGltZXIgPSBudWxsLCBzY3JvbGxUaW1lciA9IG51bGwsIHVud2F0Y2hSb3V0ZVxuXG4gICAgY29uc3QgdGFiUHJvcHMgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgYWN0aXZlQ2xhc3M6IHByb3BzLmFjdGl2ZUNsYXNzLFxuICAgICAgYWN0aXZlQ29sb3I6IHByb3BzLmFjdGl2ZUNvbG9yLFxuICAgICAgYWN0aXZlQmdDb2xvcjogcHJvcHMuYWN0aXZlQmdDb2xvcixcbiAgICAgIGluZGljYXRvckNsYXNzOiBnZXRJbmRpY2F0b3JDbGFzcyhcbiAgICAgICAgcHJvcHMuaW5kaWNhdG9yQ29sb3IsXG4gICAgICAgIHByb3BzLnN3aXRjaEluZGljYXRvcixcbiAgICAgICAgcHJvcHMudmVydGljYWxcbiAgICAgICksXG4gICAgICBuYXJyb3dJbmRpY2F0b3I6IHByb3BzLm5hcnJvd0luZGljYXRvcixcbiAgICAgIGlubGluZUxhYmVsOiBwcm9wcy5pbmxpbmVMYWJlbCxcbiAgICAgIG5vQ2FwczogcHJvcHMubm9DYXBzXG4gICAgfSkpXG5cbiAgICBjb25zdCBoYXNBY3RpdmVUYWIgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBsZW4gPSB0YWJEYXRhTGlzdExlbi52YWx1ZVxuICAgICAgY29uc3QgdmFsID0gY3VycmVudE1vZGVsLnZhbHVlXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKHRhYkRhdGFMaXN0WyBpIF0ubmFtZS52YWx1ZSA9PT0gdmFsKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KVxuXG4gICAgY29uc3QgYWxpZ25DbGFzcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGFsaWduID0gc2Nyb2xsYWJsZS52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICA/ICdsZWZ0J1xuICAgICAgICA6IChqdXN0aWZ5LnZhbHVlID09PSB0cnVlID8gJ2p1c3RpZnknIDogcHJvcHMuYWxpZ24pXG5cbiAgICAgIHJldHVybiBgcS10YWJzX19jb250ZW50LS1hbGlnbi0keyBhbGlnbiB9YFxuICAgIH0pXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLXRhYnMgcm93IG5vLXdyYXAgaXRlbXMtY2VudGVyJ1xuICAgICAgKyBgIHEtdGFicy0tJHsgc2Nyb2xsYWJsZS52YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogJ25vdC0nIH1zY3JvbGxhYmxlYFxuICAgICAgKyBgIHEtdGFicy0tJHsgcHJvcHMudmVydGljYWwgPT09IHRydWUgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnIH1gXG4gICAgICArIGAgcS10YWJzX19hcnJvd3MtLSR7IHByb3BzLm91dHNpZGVBcnJvd3MgPT09IHRydWUgPyAnb3V0c2lkZScgOiAnaW5zaWRlJyB9YFxuICAgICAgKyBgIHEtdGFicy0tbW9iaWxlLXdpdGgkeyBwcm9wcy5tb2JpbGVBcnJvd3MgPT09IHRydWUgPyAnJyA6ICdvdXQnIH0tYXJyb3dzYFxuICAgICAgKyAocHJvcHMuZGVuc2UgPT09IHRydWUgPyAnIHEtdGFicy0tZGVuc2UnIDogJycpXG4gICAgICArIChwcm9wcy5zaHJpbmsgPT09IHRydWUgPyAnIGNvbC1zaHJpbmsnIDogJycpXG4gICAgICArIChwcm9wcy5zdHJldGNoID09PSB0cnVlID8gJyBzZWxmLXN0cmV0Y2gnIDogJycpXG4gICAgKVxuXG4gICAgY29uc3QgaW5uZXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS10YWJzX19jb250ZW50IHNjcm9sbC0tbW9iaWxlIHJvdyBuby13cmFwIGl0ZW1zLWNlbnRlciBzZWxmLXN0cmV0Y2ggaGlkZS1zY3JvbGxiYXIgcmVsYXRpdmUtcG9zaXRpb24gJ1xuICAgICAgKyBhbGlnbkNsYXNzLnZhbHVlXG4gICAgICArIChwcm9wcy5jb250ZW50Q2xhc3MgIT09IHZvaWQgMCA/IGAgJHsgcHJvcHMuY29udGVudENsYXNzIH1gIDogJycpXG4gICAgKVxuXG4gICAgY29uc3QgZG9tUHJvcHMgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZVxuICAgICAgICA/IHsgY29udGFpbmVyOiAnaGVpZ2h0JywgY29udGVudDogJ29mZnNldEhlaWdodCcsIHNjcm9sbDogJ3Njcm9sbEhlaWdodCcgfVxuICAgICAgICA6IHsgY29udGFpbmVyOiAnd2lkdGgnLCBjb250ZW50OiAnb2Zmc2V0V2lkdGgnLCBzY3JvbGw6ICdzY3JvbGxXaWR0aCcgfVxuICAgICkpXG5cbiAgICBjb25zdCBpc1JUTCA9IGNvbXB1dGVkKCgpID0+IHByb3BzLnZlcnRpY2FsICE9PSB0cnVlICYmICRxLmxhbmcucnRsID09PSB0cnVlKVxuICAgIGNvbnN0IHJ0bFBvc0NvcnJlY3Rpb24gPSBjb21wdXRlZCgoKSA9PiBydGxIYXNTY3JvbGxCdWcgPT09IGZhbHNlICYmIGlzUlRMLnZhbHVlID09PSB0cnVlKVxuXG4gICAgd2F0Y2goaXNSVEwsIHVwZGF0ZUFycm93cylcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLm1vZGVsVmFsdWUsIG5hbWUgPT4ge1xuICAgICAgdXBkYXRlTW9kZWwoeyBuYW1lLCBzZXRDdXJyZW50OiB0cnVlLCBza2lwRW1pdDogdHJ1ZSB9KVxuICAgIH0pXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5vdXRzaWRlQXJyb3dzLCByZWNhbGN1bGF0ZVNjcm9sbClcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZU1vZGVsICh7IG5hbWUsIHNldEN1cnJlbnQsIHNraXBFbWl0IH0pIHtcbiAgICAgIGlmIChjdXJyZW50TW9kZWwudmFsdWUgIT09IG5hbWUpIHtcbiAgICAgICAgaWYgKHNraXBFbWl0ICE9PSB0cnVlICYmIHByb3BzWyAnb25VcGRhdGU6bW9kZWxWYWx1ZScgXSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCBuYW1lKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHNldEN1cnJlbnQgPT09IHRydWVcbiAgICAgICAgICB8fCBwcm9wc1sgJ29uVXBkYXRlOm1vZGVsVmFsdWUnIF0gPT09IHZvaWQgMFxuICAgICAgICApIHtcbiAgICAgICAgICBhbmltYXRlKGN1cnJlbnRNb2RlbC52YWx1ZSwgbmFtZSlcbiAgICAgICAgICBjdXJyZW50TW9kZWwudmFsdWUgPSBuYW1lXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWNhbGN1bGF0ZVNjcm9sbCAoKSB7XG4gICAgICByZWdpc3RlclNjcm9sbFRpY2soKCkgPT4ge1xuICAgICAgICB1cGRhdGVDb250YWluZXIoe1xuICAgICAgICAgIHdpZHRoOiByb290UmVmLnZhbHVlLm9mZnNldFdpZHRoLFxuICAgICAgICAgIGhlaWdodDogcm9vdFJlZi52YWx1ZS5vZmZzZXRIZWlnaHRcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlQ29udGFpbmVyIChkb21TaXplKSB7XG4gICAgICAvLyBpdCBjYW4gYmUgY2FsbGVkIGZhc3RlciB0aGFuIGNvbXBvbmVudCBiZWluZyBpbml0aWFsaXplZFxuICAgICAgLy8gc28gd2UgbmVlZCB0byBwcm90ZWN0IGFnYWluc3QgdGhhdCBjYXNlXG4gICAgICAvLyAob25lIGV4YW1wbGUgb2Ygc3VjaCBjYXNlIGlzIHRoZSBkb2NzIHJlbGVhc2Ugbm90ZXMgcGFnZSlcbiAgICAgIGlmIChkb21Qcm9wcy52YWx1ZSA9PT0gdm9pZCAwIHx8IGNvbnRlbnRSZWYudmFsdWUgPT09IG51bGwpIHJldHVyblxuXG4gICAgICBjb25zdFxuICAgICAgICBzaXplID0gZG9tU2l6ZVsgZG9tUHJvcHMudmFsdWUuY29udGFpbmVyIF0sXG4gICAgICAgIHNjcm9sbFNpemUgPSBNYXRoLm1pbihcbiAgICAgICAgICBjb250ZW50UmVmLnZhbHVlWyBkb21Qcm9wcy52YWx1ZS5zY3JvbGwgXSxcbiAgICAgICAgICBBcnJheS5wcm90b3R5cGUucmVkdWNlLmNhbGwoXG4gICAgICAgICAgICBjb250ZW50UmVmLnZhbHVlLmNoaWxkcmVuLFxuICAgICAgICAgICAgKGFjYywgZWwpID0+IGFjYyArIChlbFsgZG9tUHJvcHMudmFsdWUuY29udGVudCBdIHx8IDApLFxuICAgICAgICAgICAgMFxuICAgICAgICAgIClcbiAgICAgICAgKSxcbiAgICAgICAgc2Nyb2xsID0gc2l6ZSA+IDAgJiYgc2Nyb2xsU2l6ZSA+IHNpemUgLy8gd2hlbiB0aGVyZSBpcyBubyB0YWIsIGluIENocm9tZSwgc2l6ZSA9PT0gMCBhbmQgc2Nyb2xsU2l6ZSA9PT0gMVxuXG4gICAgICBzY3JvbGxhYmxlLnZhbHVlID0gc2Nyb2xsXG5cbiAgICAgIC8vIEFycm93cyBuZWVkIHRvIGJlIHVwZGF0ZWQgZXZlbiBpZiB0aGUgc2Nyb2xsIHN0YXR1cyB3YXMgYWxyZWFkeSB0cnVlXG4gICAgICBzY3JvbGwgPT09IHRydWUgJiYgcmVnaXN0ZXJVcGRhdGVBcnJvd3NUaWNrKHVwZGF0ZUFycm93cylcblxuICAgICAganVzdGlmeS52YWx1ZSA9IHNpemUgPCBwYXJzZUludChwcm9wcy5icmVha3BvaW50LCAxMClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhbmltYXRlIChvbGROYW1lLCBuZXdOYW1lKSB7XG4gICAgICBjb25zdFxuICAgICAgICBvbGRUYWIgPSBvbGROYW1lICE9PSB2b2lkIDAgJiYgb2xkTmFtZSAhPT0gbnVsbCAmJiBvbGROYW1lICE9PSAnJ1xuICAgICAgICAgID8gdGFiRGF0YUxpc3QuZmluZCh0YWIgPT4gdGFiLm5hbWUudmFsdWUgPT09IG9sZE5hbWUpXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICBuZXdUYWIgPSBuZXdOYW1lICE9PSB2b2lkIDAgJiYgbmV3TmFtZSAhPT0gbnVsbCAmJiBuZXdOYW1lICE9PSAnJ1xuICAgICAgICAgID8gdGFiRGF0YUxpc3QuZmluZCh0YWIgPT4gdGFiLm5hbWUudmFsdWUgPT09IG5ld05hbWUpXG4gICAgICAgICAgOiBudWxsXG5cbiAgICAgIGlmIChvbGRUYWIgJiYgbmV3VGFiKSB7XG4gICAgICAgIGNvbnN0XG4gICAgICAgICAgb2xkRWwgPSBvbGRUYWIudGFiSW5kaWNhdG9yUmVmLnZhbHVlLFxuICAgICAgICAgIG5ld0VsID0gbmV3VGFiLnRhYkluZGljYXRvclJlZi52YWx1ZVxuXG4gICAgICAgIGlmIChhbmltYXRlVGltZXIgIT09IG51bGwpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQoYW5pbWF0ZVRpbWVyKVxuICAgICAgICAgIGFuaW1hdGVUaW1lciA9IG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgIG9sZEVsLnN0eWxlLnRyYW5zaXRpb24gPSAnbm9uZSdcbiAgICAgICAgb2xkRWwuc3R5bGUudHJhbnNmb3JtID0gJ25vbmUnXG4gICAgICAgIG5ld0VsLnN0eWxlLnRyYW5zaXRpb24gPSAnbm9uZSdcbiAgICAgICAgbmV3RWwuc3R5bGUudHJhbnNmb3JtID0gJ25vbmUnXG5cbiAgICAgICAgY29uc3RcbiAgICAgICAgICBvbGRQb3MgPSBvbGRFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICBuZXdQb3MgPSBuZXdFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgICAgIG5ld0VsLnN0eWxlLnRyYW5zZm9ybSA9IHByb3BzLnZlcnRpY2FsID09PSB0cnVlXG4gICAgICAgICAgPyBgdHJhbnNsYXRlM2QoMCwkeyBvbGRQb3MudG9wIC0gbmV3UG9zLnRvcCB9cHgsMCkgc2NhbGUzZCgxLCR7IG5ld1Bvcy5oZWlnaHQgPyBvbGRQb3MuaGVpZ2h0IC8gbmV3UG9zLmhlaWdodCA6IDEgfSwxKWBcbiAgICAgICAgICA6IGB0cmFuc2xhdGUzZCgkeyBvbGRQb3MubGVmdCAtIG5ld1Bvcy5sZWZ0IH1weCwwLDApIHNjYWxlM2QoJHsgbmV3UG9zLndpZHRoID8gb2xkUG9zLndpZHRoIC8gbmV3UG9zLndpZHRoIDogMSB9LDEsMSlgXG5cbiAgICAgICAgLy8gYWxsb3cgc2NvcGUgdXBkYXRlcyB0byBraWNrIGluIChRUm91dGVUYWIgbmVlZHMgbW9yZSB0aW1lKVxuICAgICAgICByZWdpc3RlckFuaW1hdGVUaWNrKCgpID0+IHtcbiAgICAgICAgICBhbmltYXRlVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGFuaW1hdGVUaW1lciA9IG51bGxcbiAgICAgICAgICAgIG5ld0VsLnN0eWxlLnRyYW5zaXRpb24gPSAndHJhbnNmb3JtIC4yNXMgY3ViaWMtYmV6aWVyKC40LCAwLCAuMiwgMSknXG4gICAgICAgICAgICBuZXdFbC5zdHlsZS50cmFuc2Zvcm0gPSAnbm9uZSdcbiAgICAgICAgICB9LCA3MClcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKG5ld1RhYiAmJiBzY3JvbGxhYmxlLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIHNjcm9sbFRvVGFiRWwobmV3VGFiLnJvb3RSZWYudmFsdWUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2Nyb2xsVG9UYWJFbCAoZWwpIHtcbiAgICAgIGNvbnN0XG4gICAgICAgIHsgbGVmdCwgd2lkdGgsIHRvcCwgaGVpZ2h0IH0gPSBjb250ZW50UmVmLnZhbHVlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICBuZXdQb3MgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgICBsZXQgb2Zmc2V0ID0gcHJvcHMudmVydGljYWwgPT09IHRydWUgPyBuZXdQb3MudG9wIC0gdG9wIDogbmV3UG9zLmxlZnQgLSBsZWZ0XG5cbiAgICAgIGlmIChvZmZzZXQgPCAwKSB7XG4gICAgICAgIGNvbnRlbnRSZWYudmFsdWVbIHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ3Njcm9sbFRvcCcgOiAnc2Nyb2xsTGVmdCcgXSArPSBNYXRoLmZsb29yKG9mZnNldClcbiAgICAgICAgdXBkYXRlQXJyb3dzKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIG9mZnNldCArPSBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/IG5ld1Bvcy5oZWlnaHQgLSBoZWlnaHQgOiBuZXdQb3Mud2lkdGggLSB3aWR0aFxuICAgICAgaWYgKG9mZnNldCA+IDApIHtcbiAgICAgICAgY29udGVudFJlZi52YWx1ZVsgcHJvcHMudmVydGljYWwgPT09IHRydWUgPyAnc2Nyb2xsVG9wJyA6ICdzY3JvbGxMZWZ0JyBdICs9IE1hdGguY2VpbChvZmZzZXQpXG4gICAgICAgIHVwZGF0ZUFycm93cygpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlQXJyb3dzICgpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBjb250ZW50UmVmLnZhbHVlXG4gICAgICBpZiAoY29udGVudCA9PT0gbnVsbCkgcmV0dXJuXG5cbiAgICAgIGNvbnN0XG4gICAgICAgIHJlY3QgPSBjb250ZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICBwb3MgPSBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/IGNvbnRlbnQuc2Nyb2xsVG9wIDogTWF0aC5hYnMoY29udGVudC5zY3JvbGxMZWZ0KVxuXG4gICAgICBpZiAoaXNSVEwudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgbGVmdEFycm93LnZhbHVlID0gTWF0aC5jZWlsKHBvcyArIHJlY3Qud2lkdGgpIDwgY29udGVudC5zY3JvbGxXaWR0aCAtIDFcbiAgICAgICAgcmlnaHRBcnJvdy52YWx1ZSA9IHBvcyA+IDBcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBsZWZ0QXJyb3cudmFsdWUgPSBwb3MgPiAwXG4gICAgICAgIHJpZ2h0QXJyb3cudmFsdWUgPSBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZVxuICAgICAgICAgID8gTWF0aC5jZWlsKHBvcyArIHJlY3QuaGVpZ2h0KSA8IGNvbnRlbnQuc2Nyb2xsSGVpZ2h0XG4gICAgICAgICAgOiBNYXRoLmNlaWwocG9zICsgcmVjdC53aWR0aCkgPCBjb250ZW50LnNjcm9sbFdpZHRoXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYW5pbVNjcm9sbFRvICh2YWx1ZSkge1xuICAgICAgc2Nyb2xsVGltZXIgIT09IG51bGwgJiYgY2xlYXJJbnRlcnZhbChzY3JvbGxUaW1lcilcbiAgICAgIHNjcm9sbFRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBpZiAoc2Nyb2xsVG93YXJkcyh2YWx1ZSkgPT09IHRydWUpIHtcbiAgICAgICAgICBzdG9wQW5pbVNjcm9sbCgpXG4gICAgICAgIH1cbiAgICAgIH0sIDUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2Nyb2xsVG9TdGFydCAoKSB7XG4gICAgICBhbmltU2Nyb2xsVG8ocnRsUG9zQ29ycmVjdGlvbi52YWx1ZSA9PT0gdHJ1ZSA/IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIDogMClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzY3JvbGxUb0VuZCAoKSB7XG4gICAgICBhbmltU2Nyb2xsVG8ocnRsUG9zQ29ycmVjdGlvbi52YWx1ZSA9PT0gdHJ1ZSA/IDAgOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUilcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdG9wQW5pbVNjcm9sbCAoKSB7XG4gICAgICBpZiAoc2Nyb2xsVGltZXIgIT09IG51bGwpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChzY3JvbGxUaW1lcilcbiAgICAgICAgc2Nyb2xsVGltZXIgPSBudWxsXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25LYmROYXZpZ2F0ZSAoa2V5Q29kZSwgZnJvbUVsKSB7XG4gICAgICBjb25zdCB0YWJzID0gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKFxuICAgICAgICBjb250ZW50UmVmLnZhbHVlLmNoaWxkcmVuLFxuICAgICAgICBlbCA9PiBlbCA9PT0gZnJvbUVsIHx8IChlbC5tYXRjaGVzICYmIGVsLm1hdGNoZXMoJy5xLXRhYi5xLWZvY3VzYWJsZScpID09PSB0cnVlKVxuICAgICAgKVxuXG4gICAgICBjb25zdCBsZW4gPSB0YWJzLmxlbmd0aFxuICAgICAgaWYgKGxlbiA9PT0gMCkgcmV0dXJuXG5cbiAgICAgIGlmIChrZXlDb2RlID09PSAzNikgeyAvLyBIb21lXG4gICAgICAgIHNjcm9sbFRvVGFiRWwodGFic1sgMCBdKVxuICAgICAgICB0YWJzWyAwIF0uZm9jdXMoKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgICAgaWYgKGtleUNvZGUgPT09IDM1KSB7IC8vIEVuZFxuICAgICAgICBzY3JvbGxUb1RhYkVsKHRhYnNbIGxlbiAtIDEgXSlcbiAgICAgICAgdGFic1sgbGVuIC0gMSBdLmZvY3VzKClcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGlyUHJldiA9IGtleUNvZGUgPT09IChwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/IDM4IC8qIEFycm93VXAgKi8gOiAzNyAvKiBBcnJvd0xlZnQgKi8pXG4gICAgICBjb25zdCBkaXJOZXh0ID0ga2V5Q29kZSA9PT0gKHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gNDAgLyogQXJyb3dEb3duICovIDogMzkgLyogQXJyb3dSaWdodCAqLylcblxuICAgICAgY29uc3QgZGlyID0gZGlyUHJldiA9PT0gdHJ1ZSA/IC0xIDogKGRpck5leHQgPT09IHRydWUgPyAxIDogdm9pZCAwKVxuXG4gICAgICBpZiAoZGlyICE9PSB2b2lkIDApIHtcbiAgICAgICAgY29uc3QgcnRsRGlyID0gaXNSVEwudmFsdWUgPT09IHRydWUgPyAtMSA6IDFcbiAgICAgICAgY29uc3QgaW5kZXggPSB0YWJzLmluZGV4T2YoZnJvbUVsKSArIGRpciAqIHJ0bERpclxuXG4gICAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgc2Nyb2xsVG9UYWJFbCh0YWJzWyBpbmRleCBdKVxuICAgICAgICAgIHRhYnNbIGluZGV4IF0uZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGxldCdzIHNwZWVkIHVwIGV4ZWN1dGlvbiBvZiB0aW1lLXNlbnNpdGl2ZSBzY3JvbGxUb3dhcmRzKClcbiAgICAvLyB3aXRoIGEgY29tcHV0ZWQgdmFyaWFibGUgYnkgZGlyZWN0bHkgYXBwbHlpbmcgdGhlIG1pbmltYWxcbiAgICAvLyBudW1iZXIgb2YgaW5zdHJ1Y3Rpb25zIG9uIGdldC9zZXQgZnVuY3Rpb25zXG4gICAgY29uc3QgcG9zRm4gPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBydGxQb3NDb3JyZWN0aW9uLnZhbHVlID09PSB0cnVlXG4gICAgICAgID8geyBnZXQ6IGNvbnRlbnQgPT4gTWF0aC5hYnMoY29udGVudC5zY3JvbGxMZWZ0KSwgc2V0OiAoY29udGVudCwgcG9zKSA9PiB7IGNvbnRlbnQuc2Nyb2xsTGVmdCA9IC1wb3MgfSB9XG4gICAgICAgIDogKFxuICAgICAgICAgICAgcHJvcHMudmVydGljYWwgPT09IHRydWVcbiAgICAgICAgICAgICAgPyB7IGdldDogY29udGVudCA9PiBjb250ZW50LnNjcm9sbFRvcCwgc2V0OiAoY29udGVudCwgcG9zKSA9PiB7IGNvbnRlbnQuc2Nyb2xsVG9wID0gcG9zIH0gfVxuICAgICAgICAgICAgICA6IHsgZ2V0OiBjb250ZW50ID0+IGNvbnRlbnQuc2Nyb2xsTGVmdCwgc2V0OiAoY29udGVudCwgcG9zKSA9PiB7IGNvbnRlbnQuc2Nyb2xsTGVmdCA9IHBvcyB9IH1cbiAgICAgICAgICApXG4gICAgKSlcblxuICAgIGZ1bmN0aW9uIHNjcm9sbFRvd2FyZHMgKHZhbHVlKSB7XG4gICAgICBjb25zdFxuICAgICAgICBjb250ZW50ID0gY29udGVudFJlZi52YWx1ZSxcbiAgICAgICAgeyBnZXQsIHNldCB9ID0gcG9zRm4udmFsdWVcblxuICAgICAgbGV0XG4gICAgICAgIGRvbmUgPSBmYWxzZSxcbiAgICAgICAgcG9zID0gZ2V0KGNvbnRlbnQpXG5cbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHZhbHVlIDwgcG9zID8gLTEgOiAxXG5cbiAgICAgIHBvcyArPSBkaXJlY3Rpb24gKiA1XG5cbiAgICAgIGlmIChwb3MgPCAwKSB7XG4gICAgICAgIGRvbmUgPSB0cnVlXG4gICAgICAgIHBvcyA9IDBcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKFxuICAgICAgICAoZGlyZWN0aW9uID09PSAtMSAmJiBwb3MgPD0gdmFsdWUpXG4gICAgICAgIHx8IChkaXJlY3Rpb24gPT09IDEgJiYgcG9zID49IHZhbHVlKVxuICAgICAgKSB7XG4gICAgICAgIGRvbmUgPSB0cnVlXG4gICAgICAgIHBvcyA9IHZhbHVlXG4gICAgICB9XG5cbiAgICAgIHNldChjb250ZW50LCBwb3MpXG4gICAgICB1cGRhdGVBcnJvd3MoKVxuXG4gICAgICByZXR1cm4gZG9uZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhc1F1ZXJ5SW5jbHVkZWQgKHRhcmdldFF1ZXJ5LCBtYXRjaGluZ1F1ZXJ5KSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiB0YXJnZXRRdWVyeSkge1xuICAgICAgICBpZiAodGFyZ2V0UXVlcnlbIGtleSBdICE9PSBtYXRjaGluZ1F1ZXJ5WyBrZXkgXSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gZG8gbm90IHVzZSBkaXJlY3RseTsgdXNlIHZlcmlmeVJvdXRlTW9kZWwoKSBpbnN0ZWFkXG4gICAgZnVuY3Rpb24gdXBkYXRlQWN0aXZlUm91dGUgKCkge1xuICAgICAgbGV0IG5hbWUgPSBudWxsLCBiZXN0U2NvcmUgPSB7IG1hdGNoZWRMZW46IDAsIHF1ZXJ5RGlmZjogOTk5OSwgaHJlZkxlbjogMCB9XG5cbiAgICAgIGNvbnN0IGxpc3QgPSB0YWJEYXRhTGlzdC5maWx0ZXIodGFiID0+IHRhYi5yb3V0ZURhdGEgIT09IHZvaWQgMCAmJiB0YWIucm91dGVEYXRhLmhhc1JvdXRlckxpbmsudmFsdWUgPT09IHRydWUpXG4gICAgICBjb25zdCB7IGhhc2g6IGN1cnJlbnRIYXNoLCBxdWVyeTogY3VycmVudFF1ZXJ5IH0gPSBwcm94eS4kcm91dGVcbiAgICAgIGNvbnN0IGN1cnJlbnRRdWVyeUxlbiA9IE9iamVjdC5rZXlzKGN1cnJlbnRRdWVyeSkubGVuZ3RoXG5cbiAgICAgIC8vIFZ1ZSBSb3V0ZXIgZG9lcyBub3Qga2VlcCBhY2NvdW50IG9mIGhhc2ggJiBxdWVyeSB3aGVuIG1hdGNoaW5nXG4gICAgICAvLyBzbyB3ZSdyZSBkb2luZyB0aGlzIGFzIHdlbGxcblxuICAgICAgZm9yIChjb25zdCB0YWIgb2YgbGlzdCkge1xuICAgICAgICBjb25zdCBleGFjdCA9IHRhYi5yb3V0ZURhdGEuZXhhY3QudmFsdWUgPT09IHRydWVcblxuICAgICAgICBpZiAodGFiLnJvdXRlRGF0YVsgZXhhY3QgPT09IHRydWUgPyAnbGlua0lzRXhhY3RBY3RpdmUnIDogJ2xpbmtJc0FjdGl2ZScgXS52YWx1ZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgIC8vIGl0IGNhbm5vdCBtYXRjaCBhbnl0aGluZyBhcyBpdCdzIG5vdCBhY3RpdmUgbm9yIGV4YWN0LWFjdGl2ZVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7IGhhc2gsIHF1ZXJ5LCBtYXRjaGVkLCBocmVmIH0gPSB0YWIucm91dGVEYXRhLnJlc29sdmVkTGluay52YWx1ZVxuICAgICAgICBjb25zdCBxdWVyeUxlbiA9IE9iamVjdC5rZXlzKHF1ZXJ5KS5sZW5ndGhcblxuICAgICAgICBpZiAoZXhhY3QgPT09IHRydWUpIHtcbiAgICAgICAgICBpZiAoaGFzaCAhPT0gY3VycmVudEhhc2gpIHtcbiAgICAgICAgICAgIC8vIGl0J3Mgc2V0IHRvIGV4YWN0IGJ1dCBpdCBkb2Vzbid0IG1hdGNoZXMgdGhlIGhhc2hcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgcXVlcnlMZW4gIT09IGN1cnJlbnRRdWVyeUxlblxuICAgICAgICAgICAgfHwgaGFzUXVlcnlJbmNsdWRlZChjdXJyZW50UXVlcnksIHF1ZXJ5KSA9PT0gZmFsc2VcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIC8vIGl0J3Mgc2V0IHRvIGV4YWN0IGJ1dCBpdCBkb2Vzbid0IG1hdGNoZXMgdGhlIHF1ZXJ5XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIHlleSwgd2UgZm91bmQgdGhlIHBlcmZlY3QgbWF0Y2ggKHJvdXRlICsgaGFzaCArIHF1ZXJ5KVxuICAgICAgICAgIG5hbWUgPSB0YWIubmFtZS52YWx1ZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGFzaCAhPT0gJycgJiYgaGFzaCAhPT0gY3VycmVudEhhc2gpIHtcbiAgICAgICAgICAvLyBpdCBoYXMgaGFzaCBhbmQgaXQgZG9lc24ndCBtYXRjaGVzXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBxdWVyeUxlbiAhPT0gMFxuICAgICAgICAgICYmIGhhc1F1ZXJ5SW5jbHVkZWQocXVlcnksIGN1cnJlbnRRdWVyeSkgPT09IGZhbHNlXG4gICAgICAgICkge1xuICAgICAgICAgIC8vIGl0IGhhcyBxdWVyeSBhbmQgaXQgZG9lc24ndCBpbmNsdWRlcyB0aGUgY3VycmVudCBvbmVcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3U2NvcmUgPSB7XG4gICAgICAgICAgbWF0Y2hlZExlbjogbWF0Y2hlZC5sZW5ndGgsXG4gICAgICAgICAgcXVlcnlEaWZmOiBjdXJyZW50UXVlcnlMZW4gLSBxdWVyeUxlbixcbiAgICAgICAgICBocmVmTGVuOiBocmVmLmxlbmd0aCAtIGhhc2gubGVuZ3RoXG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV3U2NvcmUubWF0Y2hlZExlbiA+IGJlc3RTY29yZS5tYXRjaGVkTGVuKSB7XG4gICAgICAgICAgLy8gaXQgbWF0Y2hlcyBtb3JlIHJvdXRlcyBzbyBpdCdzIG1vcmUgc3BlY2lmaWMgc28gd2Ugc2V0IGl0IGFzIGN1cnJlbnQgY2hhbXBpb25cbiAgICAgICAgICBuYW1lID0gdGFiLm5hbWUudmFsdWVcbiAgICAgICAgICBiZXN0U2NvcmUgPSBuZXdTY29yZVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmV3U2NvcmUubWF0Y2hlZExlbiAhPT0gYmVzdFNjb3JlLm1hdGNoZWRMZW4pIHtcbiAgICAgICAgICAvLyBpdCBtYXRjaGVzIGxlc3Mgcm91dGVzIHRoYW4gdGhlIGN1cnJlbnQgY2hhbXBpb24gc28gd2UgZGlzY2FyZCBpdFxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV3U2NvcmUucXVlcnlEaWZmIDwgYmVzdFNjb3JlLnF1ZXJ5RGlmZikge1xuICAgICAgICAgIC8vIHF1ZXJ5IGlzIGNsb3NlciB0byB0aGUgY3VycmVudCBvbmUgc28gd2Ugc2V0IGl0IGFzIGN1cnJlbnQgY2hhbXBpb25cbiAgICAgICAgICBuYW1lID0gdGFiLm5hbWUudmFsdWVcbiAgICAgICAgICBiZXN0U2NvcmUgPSBuZXdTY29yZVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5ld1Njb3JlLnF1ZXJ5RGlmZiAhPT0gYmVzdFNjb3JlLnF1ZXJ5RGlmZikge1xuICAgICAgICAgIC8vIGl0IG1hdGNoZXMgbGVzcyByb3V0ZXMgdGhhbiB0aGUgY3VycmVudCBjaGFtcGlvbiBzbyB3ZSBkaXNjYXJkIGl0XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXdTY29yZS5ocmVmTGVuID4gYmVzdFNjb3JlLmhyZWZMZW4pIHtcbiAgICAgICAgICAvLyBocmVmIGlzIGxlbmd0aGllciBzbyBpdCdzIG1vcmUgc3BlY2lmaWMgc28gd2Ugc2V0IGl0IGFzIGN1cnJlbnQgY2hhbXBpb25cbiAgICAgICAgICBuYW1lID0gdGFiLm5hbWUudmFsdWVcbiAgICAgICAgICBiZXN0U2NvcmUgPSBuZXdTY29yZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgbmFtZSA9PT0gbnVsbFxuICAgICAgICAmJiB0YWJEYXRhTGlzdC5zb21lKHRhYiA9PiB0YWIucm91dGVEYXRhID09PSB2b2lkIDAgJiYgdGFiLm5hbWUudmFsdWUgPT09IGN1cnJlbnRNb2RlbC52YWx1ZSkgPT09IHRydWVcbiAgICAgICkge1xuICAgICAgICAvLyB3ZSBzaG91bGRuJ3QgaW50ZXJmZXJlIGlmIG5vbi1yb3V0ZSB0YWIgaXMgYWN0aXZlXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB1cGRhdGVNb2RlbCh7IG5hbWUsIHNldEN1cnJlbnQ6IHRydWUgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkZvY3VzaW4gKGUpIHtcbiAgICAgIHJlbW92ZUZvY3VzVGltZW91dCgpXG5cbiAgICAgIGlmIChcbiAgICAgICAgaGFzRm9jdXMudmFsdWUgIT09IHRydWVcbiAgICAgICAgJiYgcm9vdFJlZi52YWx1ZSAhPT0gbnVsbFxuICAgICAgICAmJiBlLnRhcmdldFxuICAgICAgICAmJiB0eXBlb2YgZS50YXJnZXQuY2xvc2VzdCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IHRhYiA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5xLXRhYicpXG5cbiAgICAgICAgLy8gaWYgdGhlIHRhcmdldCBpcyBjb250YWluZWQgYnkgYSBRVGFiL1FSb3V0ZVRhYlxuICAgICAgICAvLyAoaXQgbWlnaHQgYmUgb3RoZXIgZWxlbWVudHMgZm9jdXNlZCwgbGlrZSBhZGRpdGlvbmFsIFFCdG4pXG4gICAgICAgIGlmICh0YWIgJiYgcm9vdFJlZi52YWx1ZS5jb250YWlucyh0YWIpID09PSB0cnVlKSB7XG4gICAgICAgICAgaGFzRm9jdXMudmFsdWUgPSB0cnVlXG4gICAgICAgICAgc2Nyb2xsYWJsZS52YWx1ZSA9PT0gdHJ1ZSAmJiBzY3JvbGxUb1RhYkVsKHRhYilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRm9jdXNvdXQgKCkge1xuICAgICAgcmVnaXN0ZXJGb2N1c1RpbWVvdXQoKCkgPT4geyBoYXNGb2N1cy52YWx1ZSA9IGZhbHNlIH0sIDMwKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZlcmlmeVJvdXRlTW9kZWwgKCkge1xuICAgICAgaWYgKCR0YWJzLmF2b2lkUm91dGVXYXRjaGVyID09PSBmYWxzZSkge1xuICAgICAgICByZWdpc3RlclNjcm9sbFRvVGFiVGltZW91dCh1cGRhdGVBY3RpdmVSb3V0ZSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZW1vdmVTY3JvbGxUb1RhYlRpbWVvdXQoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHdhdGNoUm91dGUgKCkge1xuICAgICAgaWYgKHVud2F0Y2hSb3V0ZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGNvbnN0IHVud2F0Y2ggPSB3YXRjaCgoKSA9PiBwcm94eS4kcm91dGUuZnVsbFBhdGgsIHZlcmlmeVJvdXRlTW9kZWwpXG4gICAgICAgIHVud2F0Y2hSb3V0ZSA9ICgpID0+IHtcbiAgICAgICAgICB1bndhdGNoKClcbiAgICAgICAgICB1bndhdGNoUm91dGUgPSB2b2lkIDBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZ2lzdGVyVGFiICh0YWJEYXRhKSB7XG4gICAgICB0YWJEYXRhTGlzdC5wdXNoKHRhYkRhdGEpXG4gICAgICB0YWJEYXRhTGlzdExlbi52YWx1ZSsrXG5cbiAgICAgIHJlY2FsY3VsYXRlU2Nyb2xsKClcblxuICAgICAgLy8gaWYgaXQncyBhIFFUYWIgb3Igd2UgZG9uJ3QgaGF2ZSBWdWUgUm91dGVyXG4gICAgICBpZiAodGFiRGF0YS5yb3V0ZURhdGEgPT09IHZvaWQgMCB8fCBwcm94eS4kcm91dGUgPT09IHZvaWQgMCkge1xuICAgICAgICAvLyB3ZSBzaG91bGQgcG9zaXRpb24gdG8gdGhlIGN1cnJlbnRseSBhY3RpdmUgdGFiIChpZiBhbnkpXG4gICAgICAgIHJlZ2lzdGVyU2Nyb2xsVG9UYWJUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpZiAoc2Nyb2xsYWJsZS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBjdXJyZW50TW9kZWwudmFsdWVcbiAgICAgICAgICAgIGNvbnN0IG5ld1RhYiA9IHZhbHVlICE9PSB2b2lkIDAgJiYgdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09ICcnXG4gICAgICAgICAgICAgID8gdGFiRGF0YUxpc3QuZmluZCh0YWIgPT4gdGFiLm5hbWUudmFsdWUgPT09IHZhbHVlKVxuICAgICAgICAgICAgICA6IG51bGxcblxuICAgICAgICAgICAgbmV3VGFiICYmIHNjcm9sbFRvVGFiRWwobmV3VGFiLnJvb3RSZWYudmFsdWUpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgLy8gZWxzZSBpZiBpdCdzIGEgUVJvdXRlVGFiIHdpdGggYSB2YWxpZCBsaW5rXG4gICAgICBlbHNlIHtcbiAgICAgICAgLy8gc3RhcnQgd2F0Y2hpbmcgcm91dGVcbiAgICAgICAgd2F0Y2hSb3V0ZSgpXG5cbiAgICAgICAgaWYgKHRhYkRhdGEucm91dGVEYXRhLmhhc1JvdXRlckxpbmsudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICB2ZXJpZnlSb3V0ZU1vZGVsKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVucmVnaXN0ZXJUYWIgKHRhYkRhdGEpIHtcbiAgICAgIHRhYkRhdGFMaXN0LnNwbGljZSh0YWJEYXRhTGlzdC5pbmRleE9mKHRhYkRhdGEpLCAxKVxuICAgICAgdGFiRGF0YUxpc3RMZW4udmFsdWUtLVxuXG4gICAgICByZWNhbGN1bGF0ZVNjcm9sbCgpXG5cbiAgICAgIGlmICh1bndhdGNoUm91dGUgIT09IHZvaWQgMCAmJiB0YWJEYXRhLnJvdXRlRGF0YSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIC8vIHVud2F0Y2ggcm91dGUgaWYgd2UgZG9uJ3QgaGF2ZSBhbnkgUVJvdXRlVGFicyBsZWZ0XG4gICAgICAgIGlmICh0YWJEYXRhTGlzdC5ldmVyeSh0YWIgPT4gdGFiLnJvdXRlRGF0YSA9PT0gdm9pZCAwKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHVud2F0Y2hSb3V0ZSgpXG4gICAgICAgIH1cblxuICAgICAgICAvLyB0aGVuIHVwZGF0ZSBtb2RlbFxuICAgICAgICB2ZXJpZnlSb3V0ZU1vZGVsKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCAkdGFicyA9IHtcbiAgICAgIGN1cnJlbnRNb2RlbCxcbiAgICAgIHRhYlByb3BzLFxuICAgICAgaGFzRm9jdXMsXG4gICAgICBoYXNBY3RpdmVUYWIsXG5cbiAgICAgIHJlZ2lzdGVyVGFiLFxuICAgICAgdW5yZWdpc3RlclRhYixcblxuICAgICAgdmVyaWZ5Um91dGVNb2RlbCxcbiAgICAgIHVwZGF0ZU1vZGVsLFxuICAgICAgb25LYmROYXZpZ2F0ZSxcblxuICAgICAgYXZvaWRSb3V0ZVdhdGNoZXI6IGZhbHNlIC8vIGZhbHNlIHwgc3RyaW5nICh1aWQpXG4gICAgfVxuXG4gICAgcHJvdmlkZSh0YWJzS2V5LCAkdGFicylcblxuICAgIGZ1bmN0aW9uIGNsZWFudXAgKCkge1xuICAgICAgYW5pbWF0ZVRpbWVyICE9PSBudWxsICYmIGNsZWFyVGltZW91dChhbmltYXRlVGltZXIpXG4gICAgICBzdG9wQW5pbVNjcm9sbCgpXG4gICAgICB1bndhdGNoUm91dGUgIT09IHZvaWQgMCAmJiB1bndhdGNoUm91dGUoKVxuICAgIH1cblxuICAgIGxldCBoYWRSb3V0ZVdhdGNoZXJcblxuICAgIG9uQmVmb3JlVW5tb3VudChjbGVhbnVwKVxuXG4gICAgb25EZWFjdGl2YXRlZCgoKSA9PiB7XG4gICAgICBoYWRSb3V0ZVdhdGNoZXIgPSB1bndhdGNoUm91dGUgIT09IHZvaWQgMFxuICAgICAgY2xlYW51cCgpXG4gICAgfSlcblxuICAgIG9uQWN0aXZhdGVkKCgpID0+IHtcbiAgICAgIGhhZFJvdXRlV2F0Y2hlciA9PT0gdHJ1ZSAmJiB3YXRjaFJvdXRlKClcbiAgICAgIHJlY2FsY3VsYXRlU2Nyb2xsKClcbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIHJlZjogcm9vdFJlZixcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICAgIHJvbGU6ICd0YWJsaXN0JyxcbiAgICAgICAgb25Gb2N1c2luLFxuICAgICAgICBvbkZvY3Vzb3V0XG4gICAgICB9LCBbXG4gICAgICAgIGgoUVJlc2l6ZU9ic2VydmVyLCB7IG9uUmVzaXplOiB1cGRhdGVDb250YWluZXIgfSksXG5cbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIHJlZjogY29udGVudFJlZixcbiAgICAgICAgICBjbGFzczogaW5uZXJDbGFzcy52YWx1ZSxcbiAgICAgICAgICBvblNjcm9sbDogdXBkYXRlQXJyb3dzXG4gICAgICAgIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKSxcblxuICAgICAgICBoKFFJY29uLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLXRhYnNfX2Fycm93IHEtdGFic19fYXJyb3ctLWxlZnQgYWJzb2x1dGUgcS10YWJfX2ljb24nXG4gICAgICAgICAgICArIChsZWZ0QXJyb3cudmFsdWUgPT09IHRydWUgPyAnJyA6ICcgcS10YWJzX19hcnJvdy0tZmFkZWQnKSxcbiAgICAgICAgICBuYW1lOiBwcm9wcy5sZWZ0SWNvbiB8fCAkcS5pY29uU2V0LnRhYnNbIHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ3VwJyA6ICdsZWZ0JyBdLFxuICAgICAgICAgIG9uTW91c2Vkb3duUGFzc2l2ZTogc2Nyb2xsVG9TdGFydCxcbiAgICAgICAgICBvblRvdWNoc3RhcnRQYXNzaXZlOiBzY3JvbGxUb1N0YXJ0LFxuICAgICAgICAgIG9uTW91c2V1cFBhc3NpdmU6IHN0b3BBbmltU2Nyb2xsLFxuICAgICAgICAgIG9uTW91c2VsZWF2ZVBhc3NpdmU6IHN0b3BBbmltU2Nyb2xsLFxuICAgICAgICAgIG9uVG91Y2hlbmRQYXNzaXZlOiBzdG9wQW5pbVNjcm9sbFxuICAgICAgICB9KSxcblxuICAgICAgICBoKFFJY29uLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLXRhYnNfX2Fycm93IHEtdGFic19fYXJyb3ctLXJpZ2h0IGFic29sdXRlIHEtdGFiX19pY29uJ1xuICAgICAgICAgICAgKyAocmlnaHRBcnJvdy52YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogJyBxLXRhYnNfX2Fycm93LS1mYWRlZCcpLFxuICAgICAgICAgIG5hbWU6IHByb3BzLnJpZ2h0SWNvbiB8fCAkcS5pY29uU2V0LnRhYnNbIHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ2Rvd24nIDogJ3JpZ2h0JyBdLFxuICAgICAgICAgIG9uTW91c2Vkb3duUGFzc2l2ZTogc2Nyb2xsVG9FbmQsXG4gICAgICAgICAgb25Ub3VjaHN0YXJ0UGFzc2l2ZTogc2Nyb2xsVG9FbmQsXG4gICAgICAgICAgb25Nb3VzZXVwUGFzc2l2ZTogc3RvcEFuaW1TY3JvbGwsXG4gICAgICAgICAgb25Nb3VzZWxlYXZlUGFzc2l2ZTogc3RvcEFuaW1TY3JvbGwsXG4gICAgICAgICAgb25Ub3VjaGVuZFBhc3NpdmU6IHN0b3BBbmltU2Nyb2xsXG4gICAgICAgIH0pXG4gICAgICBdKVxuICAgIH1cbiAgfVxufSlcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFhQSxJQUFJLEtBQUs7QUFFRyxNQUFDLGNBQWMsQ0FBRSxTQUFTLFNBQVc7QUFFckMsTUFBQyxjQUFjO0FBQUEsRUFDekIsTUFBTTtBQUFBLEVBQ04sT0FBTyxDQUFFLFFBQVEsTUFBUTtBQUFBLEVBRXpCLE9BQU8sQ0FBRSxTQUFTLE1BQVE7QUFBQSxFQUMxQixXQUFXO0FBQUEsRUFFWCxNQUFNO0FBQUEsSUFDSixNQUFNLENBQUUsUUFBUSxNQUFRO0FBQUEsSUFDeEIsU0FBUyxNQUFNLEtBQU07QUFBQSxFQUN0QjtBQUFBLEVBRUQsUUFBUTtBQUFBLEVBRVIsVUFBVSxDQUFFLFFBQVEsTUFBUTtBQUFBLEVBQzVCLFNBQVM7QUFBQSxFQUVULGNBQWM7QUFBQSxFQUVkLFFBQVE7QUFBQSxJQUNOLE1BQU0sQ0FBRSxTQUFTLE1BQVE7QUFBQSxJQUN6QixTQUFTO0FBQUEsRUFDVjtBQUNIO0FBRWUsU0FBUSxPQUFFLE9BQU8sT0FBTyxNQUFNLFdBQVc7QUFDdEQsUUFBTSxRQUFRLE9BQU8sU0FBUyxhQUFhO0FBQzNDLE1BQUksVUFBVSxlQUFlO0FBQzNCLFlBQVEsTUFBTSxxREFBcUQ7QUFDbkUsV0FBTztBQUFBLEVBQ1I7QUFFRCxRQUFNLEVBQUUsTUFBTyxJQUFHLG1CQUFvQjtBQUV0QyxRQUFNLGdCQUFnQixJQUFJLElBQUk7QUFDOUIsUUFBTSxVQUFVLElBQUksSUFBSTtBQUN4QixRQUFNLGtCQUFrQixJQUFJLElBQUk7QUFFaEMsUUFBTSxTQUFTLFNBQVMsTUFDdEIsTUFBTSxZQUFZLFFBQVEsTUFBTSxXQUFXLFFBQ3ZDLFFBQ0EsT0FBTztBQUFBLElBQ1AsRUFBRSxVQUFVLENBQUUsSUFBSSxFQUFFLEdBQUksT0FBTyxLQUFNO0FBQUEsSUFDckMsTUFBTSxXQUFXLE9BQU8sQ0FBRSxJQUFHLE1BQU07QUFBQSxFQUNwQyxDQUNKO0FBRUQsUUFBTSxXQUFXLFNBQVMsTUFBTSxNQUFNLGFBQWEsVUFBVSxNQUFNLElBQUk7QUFFdkUsUUFBTSxVQUFVO0FBQUEsSUFBUyxNQUN2Qix1RUFFRSxTQUFTLFVBQVUsT0FFYixvQkFDRyxNQUFNLFNBQVMsTUFBTSxjQUFjLE1BQU0sTUFBTSxTQUFTLE1BQU0sY0FBYyxPQUM1RSxNQUFNLFNBQVMsTUFBTSxjQUFjLFNBQVUsTUFBTSxTQUFTLE1BQU0sZ0JBQWlCLE9BQ25GLE1BQU0sU0FBUyxNQUFNLGdCQUFnQixPQUFRLE1BQU0sU0FBUyxNQUFNLGtCQUFtQixNQUUxRix1QkFFSCxNQUFNLFFBQVEsTUFBTSxTQUFTLE1BQU0sU0FBUyxNQUFNLGdCQUFnQixRQUFRLGlCQUFpQixPQUMzRixNQUFNLFdBQVcsUUFBUSxNQUFNLFNBQVMsTUFBTSxXQUFXLE9BQU8sb0JBQW9CLE9BQ3BGLE1BQU0sWUFBWSxPQUFPLGNBQWMsOENBQ3ZDLGNBQWMsU0FBUyxVQUFVLFVBQVUsUUFBUTtBQUFBLEVBQ3ZEO0FBRUQsUUFBTSxhQUFhO0FBQUEsSUFBUyxNQUMxQiw4RkFDRyxNQUFNLFNBQVMsTUFBTSxnQkFBZ0IsT0FBTyx1Q0FBdUMsYUFDbkYsTUFBTSxpQkFBaUIsU0FBUyxJQUFLLE1BQU0saUJBQWtCO0FBQUEsRUFDakU7QUFFRCxRQUFNLFdBQVcsU0FBUyxNQUV0QixNQUFNLFlBQVksUUFDZixNQUFNLFNBQVMsVUFBVSxRQUN4QixTQUFTLFVBQVUsU0FBUyxNQUFNLGFBQWEsVUFBVSxPQUUzRCxLQUNBLE1BQU0sWUFBWSxDQUN2QjtBQUVELFdBQVMsUUFBUyxHQUFHLFVBQVU7QUFDN0IsUUFBSSxhQUFhLFFBQVEsY0FBYyxVQUFVLE1BQU07QUFDckQsb0JBQWMsTUFBTSxNQUFPO0FBQUEsSUFDNUI7QUFFRCxRQUFJLE1BQU0sWUFBWSxNQUFNO0FBRTFCLFVBQUksY0FBYyxVQUFVLFVBQVUsY0FBYyxVQUFVLE1BQU07QUFDbEUsdUJBQWUsQ0FBQztBQUFBLE1BQ2pCO0FBQ0Q7QUFBQSxJQUNEO0FBR0QsUUFBSSxjQUFjLFFBQVE7QUFDeEIsWUFBTSxZQUFZLEVBQUUsTUFBTSxNQUFNLEtBQUksQ0FBRTtBQUN0QyxXQUFLLFNBQVMsQ0FBQztBQUNmO0FBQUEsSUFDRDtBQUVELFFBQUksVUFBVSxjQUFjLFVBQVUsTUFBTTtBQUMxQyxZQUFNLEtBQUssQ0FBQyxPQUFPLE9BQU87QUFJeEIsWUFBSTtBQUNKLGNBQU0sUUFBUSxLQUFLLE9BQU8sVUFBVSxZQUFZLEtBQUssSUFBSSxNQUFNLEVBQUUsTUFBTSxPQUNsRSxNQUFNLG9CQUFvQixJQUFLLElBQ2hDO0FBRUosZUFBTyxVQUFVLHFCQUFxQixHQUFHLEVBQUUsR0FBRyxNQUFNLG1CQUFtQixNQUFNLEVBQzFFLE1BQU0sU0FBTztBQUFFLHNCQUFZO0FBQUEsUUFBRyxDQUFFLEVBQ2hDLEtBQUssZUFBYTtBQUNqQixjQUFJLFVBQVUsTUFBTSxtQkFBbUI7QUFDckMsa0JBQU0sb0JBQW9CO0FBSzFCLGdCQUNFLGNBQWMsV0FDWixjQUFjLFVBQ1YsVUFBVSxZQUFZLFVBQVUsVUFBVSxRQUFRLFdBQVcsOEJBQThCLE1BQU0sT0FFdkc7QUFDQSxvQkFBTSxZQUFZLEVBQUUsTUFBTSxNQUFNLEtBQUksQ0FBRTtBQUFBLFlBQ3ZDO0FBQUEsVUFDRjtBQUVELGNBQUksS0FBSyxzQkFBc0IsTUFBTTtBQUNuQyxtQkFBTyxjQUFjLFNBQVMsUUFBUSxPQUFPLFNBQVMsSUFBSTtBQUFBLFVBQzNEO0FBQUEsUUFDYixDQUFXO0FBQUEsTUFDSjtBQUVELFdBQUssU0FBUyxHQUFHLEVBQUU7QUFDbkIsUUFBRSxxQkFBcUIsUUFBUSxHQUFJO0FBRW5DO0FBQUEsSUFDRDtBQUVELFNBQUssU0FBUyxDQUFDO0FBQUEsRUFDaEI7QUFFRCxXQUFTLFVBQVcsR0FBRztBQUNyQixRQUFJLFVBQVUsR0FBRyxDQUFFLElBQUksRUFBSSxDQUFBLEdBQUc7QUFDNUIsY0FBUSxHQUFHLElBQUk7QUFBQSxJQUNoQixXQUVDLGdCQUFnQixDQUFDLE1BQU0sUUFDcEIsRUFBRSxXQUFXLE1BQ2IsRUFBRSxXQUFXLE1BQ2IsRUFBRSxXQUFXLFFBQ2IsRUFBRSxZQUFZLE1BQ2pCO0FBQ0EsWUFBTSxjQUFjLEVBQUUsU0FBUyxNQUFNLEdBQUcsTUFBTSxRQUFRLGVBQWUsQ0FBQztBQUFBLElBQ3ZFO0FBRUQsU0FBSyxXQUFXLENBQUM7QUFBQSxFQUNsQjtBQUVELFdBQVMsYUFBYztBQUNyQixVQUNFLFNBQVMsTUFBTSxTQUFTLE1BQU0saUJBQzlCLFVBQVUsQ0FBRSxHQUNaLFlBQVksRUFBRSxPQUFPO0FBQUEsTUFDbkIsS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLFFBQ0w7QUFBQSxRQUNBLE1BQU0sU0FBUyxNQUFNO0FBQUEsTUFDdEI7QUFBQSxJQUNULENBQU87QUFFSCxVQUFNLFNBQVMsVUFBVSxRQUFRO0FBQUEsTUFDL0IsRUFBRSxPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxNQUFNLE1BQU07QUFBQSxNQUNwQixDQUFPO0FBQUEsSUFDRjtBQUVELFVBQU0sVUFBVSxVQUFVLFFBQVE7QUFBQSxNQUNoQyxFQUFFLE9BQU8sRUFBRSxPQUFPLGVBQWdCLEdBQUUsTUFBTSxLQUFLO0FBQUEsSUFDaEQ7QUFFRCxVQUFNLFVBQVUsU0FBUyxRQUFRO0FBQUEsTUFDL0IsTUFBTSxjQUFjLFNBQ2hCLEVBQUUsT0FBTztBQUFBLFFBQ1QsT0FBTztBQUFBLFFBQ1AsT0FBTyxNQUFNLFVBQVUsT0FDbkIsTUFBTSxRQUNOO0FBQUEsUUFDSixNQUFNLE1BQU07QUFBQSxNQUN0QixDQUFTLElBQ0MsRUFBRSxPQUFPO0FBQUEsUUFDVCxPQUFPLGtCQUNGLE1BQU0sVUFBVSxPQUFPLFNBQVUsTUFBTSxVQUFXO0FBQUEsTUFDakUsQ0FBUztBQUFBLElBQ0o7QUFFRCxlQUFXLFFBQVEsUUFBUSxLQUFLLFNBQVM7QUFFekMsVUFBTSxPQUFPO0FBQUEsTUFDWCxFQUFFLE9BQU8sRUFBRSxPQUFPLGtCQUFrQixVQUFVLElBQUksS0FBSyxlQUFlO0FBQUEsTUFDdEUsRUFBRSxPQUFPLEVBQUUsT0FBTyxXQUFXLFNBQVMsV0FBVyxNQUFNLFNBQVMsT0FBTyxDQUFDO0FBQUEsSUFDekU7QUFFRCxlQUFXLFNBQVMsS0FBSyxLQUFLLFNBQVM7QUFFdkMsV0FBTztBQUFBLEVBQ1I7QUFFRCxRQUFNLFVBQVU7QUFBQSxJQUNkLE1BQU0sU0FBUyxNQUFNLE1BQU0sSUFBSTtBQUFBLElBQy9CO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNEO0FBRUQsa0JBQWdCLE1BQU07QUFDcEIsVUFBTSxjQUFjLE9BQU87QUFBQSxFQUMvQixDQUFHO0FBRUQsWUFBVSxNQUFNO0FBQ2QsVUFBTSxZQUFZLE9BQU87QUFBQSxFQUM3QixDQUFHO0FBRUQsV0FBUyxVQUFXLEtBQUssWUFBWTtBQUNuQyxVQUFNLE9BQU87QUFBQSxNQUNYLEtBQUs7QUFBQSxNQUNMLE9BQU8sUUFBUTtBQUFBLE1BQ2YsVUFBVSxTQUFTO0FBQUEsTUFDbkIsTUFBTTtBQUFBLE1BQ04saUJBQWlCLFNBQVMsVUFBVSxPQUFPLFNBQVM7QUFBQSxNQUNwRCxpQkFBaUIsTUFBTSxZQUFZLE9BQU8sU0FBUztBQUFBLE1BQ25EO0FBQUEsTUFDQTtBQUFBLE1BQ0EsR0FBRztBQUFBLElBQ0o7QUFFRCxXQUFPO0FBQUEsTUFDTCxFQUFFLEtBQUssTUFBTSxZQUFZO0FBQUEsTUFDekIsQ0FBRSxDQUFFLFFBQVEsT0FBTyxNQUFTO0FBQUEsSUFDN0I7QUFBQSxFQUNGO0FBRUQsU0FBTyxFQUFFLFdBQVcsTUFBTztBQUM3QjtBQzdQQSxTQUFTLGtCQUFtQixPQUFPLEtBQUssVUFBVTtBQUNoRCxRQUFNLE1BQU0sYUFBYSxPQUNyQixDQUFFLFFBQVEsT0FBUyxJQUNuQixDQUFFLE9BQU8sUUFBVTtBQUV2QixTQUFPLFlBQWEsUUFBUSxPQUFPLElBQUssS0FBTSxJQUFLLEtBQVEsUUFBUSxTQUFVLFVBQVc7QUFDMUY7QUFFQSxNQUFNLGNBQWMsQ0FBRSxRQUFRLFVBQVUsU0FBUyxTQUFXO0FBRTVELElBQUEsUUFBZSxnQkFBZ0I7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFFTixPQUFPO0FBQUEsSUFDTCxZQUFZLENBQUUsUUFBUSxNQUFRO0FBQUEsSUFFOUIsT0FBTztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsV0FBVyxPQUFLLFlBQVksU0FBUyxDQUFDO0FBQUEsSUFDdkM7QUFBQSxJQUNELFlBQVk7QUFBQSxNQUNWLE1BQU0sQ0FBRSxRQUFRLE1BQVE7QUFBQSxNQUN4QixTQUFTO0FBQUEsSUFDVjtBQUFBLElBRUQsVUFBVTtBQUFBLElBQ1YsUUFBUTtBQUFBLElBQ1IsU0FBUztBQUFBLElBRVQsYUFBYTtBQUFBLElBQ2IsYUFBYTtBQUFBLElBQ2IsZUFBZTtBQUFBLElBQ2YsZ0JBQWdCO0FBQUEsSUFDaEIsVUFBVTtBQUFBLElBQ1YsV0FBVztBQUFBLElBRVgsZUFBZTtBQUFBLElBQ2YsY0FBYztBQUFBLElBRWQsaUJBQWlCO0FBQUEsSUFFakIsaUJBQWlCO0FBQUEsSUFDakIsYUFBYTtBQUFBLElBQ2IsUUFBUTtBQUFBLElBRVIsT0FBTztBQUFBLElBRVAsY0FBYztBQUFBLElBRWQsdUJBQXVCLENBQUUsVUFBVSxLQUFPO0FBQUEsRUFDM0M7QUFBQSxFQUVELE1BQU8sT0FBTyxFQUFFLE9BQU8sS0FBSSxHQUFJO0FBQzdCLFVBQU0sRUFBRSxNQUFPLElBQUcsbUJBQW9CO0FBQ3RDLFVBQU0sRUFBRSxHQUFFLElBQUs7QUFFZixVQUFNLEVBQUUsY0FBYyxtQkFBb0IsSUFBRyxRQUFTO0FBQ3RELFVBQU0sRUFBRSxjQUFjLHlCQUEwQixJQUFHLFFBQVM7QUFDNUQsVUFBTSxFQUFFLGNBQWMsb0JBQXFCLElBQUcsUUFBUztBQUV2RCxVQUFNLEVBQUUsaUJBQWlCLHNCQUFzQixlQUFlLG1CQUFrQixJQUFLLFdBQVk7QUFDakcsVUFBTSxFQUFFLGlCQUFpQiw0QkFBNEIsZUFBZSx5QkFBd0IsSUFBSyxXQUFZO0FBRTdHLFVBQU0sVUFBVSxJQUFJLElBQUk7QUFDeEIsVUFBTSxhQUFhLElBQUksSUFBSTtBQUUzQixVQUFNLGVBQWUsSUFBSSxNQUFNLFVBQVU7QUFDekMsVUFBTSxhQUFhLElBQUksS0FBSztBQUM1QixVQUFNLFlBQVksSUFBSSxJQUFJO0FBQzFCLFVBQU0sYUFBYSxJQUFJLEtBQUs7QUFDNUIsVUFBTSxVQUFVLElBQUksS0FBSztBQUV6QixVQUFNLGNBQWMsQ0FBRTtBQUN0QixVQUFNLGlCQUFpQixJQUFJLENBQUM7QUFDNUIsVUFBTSxXQUFXLElBQUksS0FBSztBQUUxQixRQUFJLGVBQWUsTUFBTSxjQUFjLE1BQU07QUFFN0MsVUFBTSxXQUFXLFNBQVMsT0FBTztBQUFBLE1BQy9CLGFBQWEsTUFBTTtBQUFBLE1BQ25CLGFBQWEsTUFBTTtBQUFBLE1BQ25CLGVBQWUsTUFBTTtBQUFBLE1BQ3JCLGdCQUFnQjtBQUFBLFFBQ2QsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1A7QUFBQSxNQUNELGlCQUFpQixNQUFNO0FBQUEsTUFDdkIsYUFBYSxNQUFNO0FBQUEsTUFDbkIsUUFBUSxNQUFNO0FBQUEsSUFDcEIsRUFBTTtBQUVGLFVBQU0sZUFBZSxTQUFTLE1BQU07QUFDbEMsWUFBTSxNQUFNLGVBQWU7QUFDM0IsWUFBTSxNQUFNLGFBQWE7QUFFekIsZUFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLEtBQUs7QUFDNUIsWUFBSSxZQUFhLEdBQUksS0FBSyxVQUFVLEtBQUs7QUFDdkMsaUJBQU87QUFBQSxRQUNSO0FBQUEsTUFDRjtBQUVELGFBQU87QUFBQSxJQUNiLENBQUs7QUFFRCxVQUFNLGFBQWEsU0FBUyxNQUFNO0FBQ2hDLFlBQU0sUUFBUSxXQUFXLFVBQVUsT0FDL0IsU0FDQyxRQUFRLFVBQVUsT0FBTyxZQUFZLE1BQU07QUFFaEQsYUFBTywwQkFBMkI7QUFBQSxJQUN4QyxDQUFLO0FBRUQsVUFBTSxVQUFVO0FBQUEsTUFBUyxNQUN2QiwyQ0FDZSxXQUFXLFVBQVUsT0FBTyxLQUFLLDRCQUNqQyxNQUFNLGFBQWEsT0FBTyxhQUFhLGdDQUMvQixNQUFNLGtCQUFrQixPQUFPLFlBQVksK0JBQ3hDLE1BQU0saUJBQWlCLE9BQU8sS0FBSyxrQkFDMUQsTUFBTSxVQUFVLE9BQU8sbUJBQW1CLE9BQzFDLE1BQU0sV0FBVyxPQUFPLGdCQUFnQixPQUN4QyxNQUFNLFlBQVksT0FBTyxrQkFBa0I7QUFBQSxJQUMvQztBQUVELFVBQU0sYUFBYTtBQUFBLE1BQVMsTUFDMUIsMkdBQ0UsV0FBVyxTQUNWLE1BQU0saUJBQWlCLFNBQVMsSUFBSyxNQUFNLGlCQUFrQjtBQUFBLElBQ2pFO0FBRUQsVUFBTSxXQUFXLFNBQVMsTUFDeEIsTUFBTSxhQUFhLE9BQ2YsRUFBRSxXQUFXLFVBQVUsU0FBUyxnQkFBZ0IsUUFBUSxlQUFnQixJQUN4RSxFQUFFLFdBQVcsU0FBUyxTQUFTLGVBQWUsUUFBUSxjQUFlLENBQzFFO0FBRUQsVUFBTSxRQUFRLFNBQVMsTUFBTSxNQUFNLGFBQWEsUUFBUSxHQUFHLEtBQUssUUFBUSxJQUFJO0FBQzVFLFVBQU0sbUJBQW1CLFNBQVMsTUFBTSxvQkFBb0IsU0FBUyxNQUFNLFVBQVUsSUFBSTtBQUV6RixVQUFNLE9BQU8sWUFBWTtBQUV6QixVQUFNLE1BQU0sTUFBTSxZQUFZLFVBQVE7QUFDcEMsa0JBQVksRUFBRSxNQUFNLFlBQVksTUFBTSxVQUFVLE1BQU07QUFBQSxJQUM1RCxDQUFLO0FBRUQsVUFBTSxNQUFNLE1BQU0sZUFBZSxpQkFBaUI7QUFFbEQsYUFBUyxZQUFhLEVBQUUsTUFBTSxZQUFZLFNBQVEsR0FBSTtBQUNwRCxVQUFJLGFBQWEsVUFBVSxNQUFNO0FBQy9CLFlBQUksYUFBYSxRQUFRLE1BQU8sMkJBQTRCLFFBQVE7QUFDbEUsZUFBSyxxQkFBcUIsSUFBSTtBQUFBLFFBQy9CO0FBRUQsWUFDRSxlQUFlLFFBQ1osTUFBTywyQkFBNEIsUUFDdEM7QUFDQSxrQkFBUSxhQUFhLE9BQU8sSUFBSTtBQUNoQyx1QkFBYSxRQUFRO0FBQUEsUUFDdEI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUVELGFBQVMsb0JBQXFCO0FBQzVCLHlCQUFtQixNQUFNO0FBQ3ZCLHdCQUFnQjtBQUFBLFVBQ2QsT0FBTyxRQUFRLE1BQU07QUFBQSxVQUNyQixRQUFRLFFBQVEsTUFBTTtBQUFBLFFBQ2hDLENBQVM7QUFBQSxNQUNULENBQU87QUFBQSxJQUNGO0FBRUQsYUFBUyxnQkFBaUIsU0FBUztBQUlqQyxVQUFJLFNBQVMsVUFBVSxVQUFVLFdBQVcsVUFBVTtBQUFNO0FBRTVELFlBQ0UsT0FBTyxRQUFTLFNBQVMsTUFBTSxZQUMvQixhQUFhLEtBQUs7QUFBQSxRQUNoQixXQUFXLE1BQU8sU0FBUyxNQUFNO0FBQUEsUUFDakMsTUFBTSxVQUFVLE9BQU87QUFBQSxVQUNyQixXQUFXLE1BQU07QUFBQSxVQUNqQixDQUFDLEtBQUssT0FBTyxPQUFPLEdBQUksU0FBUyxNQUFNLFlBQWE7QUFBQSxVQUNwRDtBQUFBLFFBQ0Q7QUFBQSxNQUNGLEdBQ0QsU0FBUyxPQUFPLEtBQUssYUFBYTtBQUVwQyxpQkFBVyxRQUFRO0FBR25CLGlCQUFXLFFBQVEseUJBQXlCLFlBQVk7QUFFeEQsY0FBUSxRQUFRLE9BQU8sU0FBUyxNQUFNLFlBQVksRUFBRTtBQUFBLElBQ3JEO0FBRUQsYUFBUyxRQUFTLFNBQVMsU0FBUztBQUNsQyxZQUNFLFNBQVMsWUFBWSxVQUFVLFlBQVksUUFBUSxZQUFZLEtBQzNELFlBQVksS0FBSyxTQUFPLElBQUksS0FBSyxVQUFVLE9BQU8sSUFDbEQsTUFDSixTQUFTLFlBQVksVUFBVSxZQUFZLFFBQVEsWUFBWSxLQUMzRCxZQUFZLEtBQUssU0FBTyxJQUFJLEtBQUssVUFBVSxPQUFPLElBQ2xEO0FBRU4sVUFBSSxVQUFVLFFBQVE7QUFDcEIsY0FDRSxRQUFRLE9BQU8sZ0JBQWdCLE9BQy9CLFFBQVEsT0FBTyxnQkFBZ0I7QUFFakMsWUFBSSxpQkFBaUIsTUFBTTtBQUN6Qix1QkFBYSxZQUFZO0FBQ3pCLHlCQUFlO0FBQUEsUUFDaEI7QUFFRCxjQUFNLE1BQU0sYUFBYTtBQUN6QixjQUFNLE1BQU0sWUFBWTtBQUN4QixjQUFNLE1BQU0sYUFBYTtBQUN6QixjQUFNLE1BQU0sWUFBWTtBQUV4QixjQUNFLFNBQVMsTUFBTSxzQkFBdUIsR0FDdEMsU0FBUyxNQUFNLHNCQUF1QjtBQUV4QyxjQUFNLE1BQU0sWUFBWSxNQUFNLGFBQWEsT0FDdkMsaUJBQWtCLE9BQU8sTUFBTSxPQUFPLHNCQUF3QixPQUFPLFNBQVMsT0FBTyxTQUFTLE9BQU8sU0FBUyxTQUM5RyxlQUFnQixPQUFPLE9BQU8sT0FBTyx1QkFBeUIsT0FBTyxRQUFRLE9BQU8sUUFBUSxPQUFPLFFBQVE7QUFHL0csNEJBQW9CLE1BQU07QUFDeEIseUJBQWUsV0FBVyxNQUFNO0FBQzlCLDJCQUFlO0FBQ2Ysa0JBQU0sTUFBTSxhQUFhO0FBQ3pCLGtCQUFNLE1BQU0sWUFBWTtBQUFBLFVBQ3pCLEdBQUUsRUFBRTtBQUFBLFFBQ2YsQ0FBUztBQUFBLE1BQ0Y7QUFFRCxVQUFJLFVBQVUsV0FBVyxVQUFVLE1BQU07QUFDdkMsc0JBQWMsT0FBTyxRQUFRLEtBQUs7QUFBQSxNQUNuQztBQUFBLElBQ0Y7QUFFRCxhQUFTLGNBQWUsSUFBSTtBQUMxQixZQUNFLEVBQUUsTUFBTSxPQUFPLEtBQUssT0FBTSxJQUFLLFdBQVcsTUFBTSxzQkFBdUIsR0FDdkUsU0FBUyxHQUFHLHNCQUF1QjtBQUVyQyxVQUFJLFNBQVMsTUFBTSxhQUFhLE9BQU8sT0FBTyxNQUFNLE1BQU0sT0FBTyxPQUFPO0FBRXhFLFVBQUksU0FBUyxHQUFHO0FBQ2QsbUJBQVcsTUFBTyxNQUFNLGFBQWEsT0FBTyxjQUFjLGlCQUFrQixLQUFLLE1BQU0sTUFBTTtBQUM3RixxQkFBYztBQUNkO0FBQUEsTUFDRDtBQUVELGdCQUFVLE1BQU0sYUFBYSxPQUFPLE9BQU8sU0FBUyxTQUFTLE9BQU8sUUFBUTtBQUM1RSxVQUFJLFNBQVMsR0FBRztBQUNkLG1CQUFXLE1BQU8sTUFBTSxhQUFhLE9BQU8sY0FBYyxpQkFBa0IsS0FBSyxLQUFLLE1BQU07QUFDNUYscUJBQWM7QUFBQSxNQUNmO0FBQUEsSUFDRjtBQUVELGFBQVMsZUFBZ0I7QUFDdkIsWUFBTSxVQUFVLFdBQVc7QUFDM0IsVUFBSSxZQUFZO0FBQU07QUFFdEIsWUFDRSxPQUFPLFFBQVEsc0JBQXVCLEdBQ3RDLE1BQU0sTUFBTSxhQUFhLE9BQU8sUUFBUSxZQUFZLEtBQUssSUFBSSxRQUFRLFVBQVU7QUFFakYsVUFBSSxNQUFNLFVBQVUsTUFBTTtBQUN4QixrQkFBVSxRQUFRLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxJQUFJLFFBQVEsY0FBYztBQUN0RSxtQkFBVyxRQUFRLE1BQU07QUFBQSxNQUMxQixPQUNJO0FBQ0gsa0JBQVUsUUFBUSxNQUFNO0FBQ3hCLG1CQUFXLFFBQVEsTUFBTSxhQUFhLE9BQ2xDLEtBQUssS0FBSyxNQUFNLEtBQUssTUFBTSxJQUFJLFFBQVEsZUFDdkMsS0FBSyxLQUFLLE1BQU0sS0FBSyxLQUFLLElBQUksUUFBUTtBQUFBLE1BQzNDO0FBQUEsSUFDRjtBQUVELGFBQVMsYUFBYyxPQUFPO0FBQzVCLHNCQUFnQixRQUFRLGNBQWMsV0FBVztBQUNqRCxvQkFBYyxZQUFZLE1BQU07QUFDOUIsWUFBSSxjQUFjLEtBQUssTUFBTSxNQUFNO0FBQ2pDLHlCQUFnQjtBQUFBLFFBQ2pCO0FBQUEsTUFDRixHQUFFLENBQUM7QUFBQSxJQUNMO0FBRUQsYUFBUyxnQkFBaUI7QUFDeEIsbUJBQWEsaUJBQWlCLFVBQVUsT0FBTyxPQUFPLG1CQUFtQixDQUFDO0FBQUEsSUFDM0U7QUFFRCxhQUFTLGNBQWU7QUFDdEIsbUJBQWEsaUJBQWlCLFVBQVUsT0FBTyxJQUFJLE9BQU8sZ0JBQWdCO0FBQUEsSUFDM0U7QUFFRCxhQUFTLGlCQUFrQjtBQUN6QixVQUFJLGdCQUFnQixNQUFNO0FBQ3hCLHNCQUFjLFdBQVc7QUFDekIsc0JBQWM7QUFBQSxNQUNmO0FBQUEsSUFDRjtBQUVELGFBQVMsY0FBZSxTQUFTLFFBQVE7QUFDdkMsWUFBTSxPQUFPLE1BQU0sVUFBVSxPQUFPO0FBQUEsUUFDbEMsV0FBVyxNQUFNO0FBQUEsUUFDakIsUUFBTSxPQUFPLFVBQVcsR0FBRyxXQUFXLEdBQUcsUUFBUSxvQkFBb0IsTUFBTTtBQUFBLE1BQzVFO0FBRUQsWUFBTSxNQUFNLEtBQUs7QUFDakIsVUFBSSxRQUFRO0FBQUc7QUFFZixVQUFJLFlBQVksSUFBSTtBQUNsQixzQkFBYyxLQUFNLEVBQUc7QUFDdkIsYUFBTSxHQUFJLE1BQU87QUFDakIsZUFBTztBQUFBLE1BQ1I7QUFDRCxVQUFJLFlBQVksSUFBSTtBQUNsQixzQkFBYyxLQUFNLE1BQU0sRUFBRztBQUM3QixhQUFNLE1BQU0sR0FBSSxNQUFPO0FBQ3ZCLGVBQU87QUFBQSxNQUNSO0FBRUQsWUFBTSxVQUFVLGFBQWEsTUFBTSxhQUFhLE9BQU8sS0FBbUI7QUFDMUUsWUFBTSxVQUFVLGFBQWEsTUFBTSxhQUFhLE9BQU8sS0FBcUI7QUFFNUUsWUFBTSxNQUFNLFlBQVksT0FBTyxLQUFNLFlBQVksT0FBTyxJQUFJO0FBRTVELFVBQUksUUFBUSxRQUFRO0FBQ2xCLGNBQU0sU0FBUyxNQUFNLFVBQVUsT0FBTyxLQUFLO0FBQzNDLGNBQU0sUUFBUSxLQUFLLFFBQVEsTUFBTSxJQUFJLE1BQU07QUFFM0MsWUFBSSxTQUFTLEtBQUssUUFBUSxLQUFLO0FBQzdCLHdCQUFjLEtBQU0sTUFBTztBQUMzQixlQUFNLE9BQVEsTUFBTSxFQUFFLGVBQWUsS0FBSSxDQUFFO0FBQUEsUUFDNUM7QUFFRCxlQUFPO0FBQUEsTUFDUjtBQUFBLElBQ0Y7QUFLRCxVQUFNLFFBQVEsU0FBUyxNQUNyQixpQkFBaUIsVUFBVSxPQUN2QixFQUFFLEtBQUssYUFBVyxLQUFLLElBQUksUUFBUSxVQUFVLEdBQUcsS0FBSyxDQUFDLFNBQVMsUUFBUTtBQUFFLGNBQVEsYUFBYSxDQUFDO0FBQUEsTUFBTyxJQUVwRyxNQUFNLGFBQWEsT0FDZixFQUFFLEtBQUssYUFBVyxRQUFRLFdBQVcsS0FBSyxDQUFDLFNBQVMsUUFBUTtBQUFFLGNBQVEsWUFBWTtBQUFBLElBQUcsRUFBSSxJQUN6RixFQUFFLEtBQUssYUFBVyxRQUFRLFlBQVksS0FBSyxDQUFDLFNBQVMsUUFBUTtBQUFFLGNBQVEsYUFBYTtBQUFBLElBQUcsRUFBSSxDQUV0RztBQUVELGFBQVMsY0FBZSxPQUFPO0FBQzdCLFlBQ0UsVUFBVSxXQUFXLE9BQ3JCLEVBQUUsS0FBSyxRQUFRLE1BQU07QUFFdkIsVUFDRSxPQUFPLE9BQ1AsTUFBTSxJQUFJLE9BQU87QUFFbkIsWUFBTSxZQUFZLFFBQVEsTUFBTSxLQUFLO0FBRXJDLGFBQU8sWUFBWTtBQUVuQixVQUFJLE1BQU0sR0FBRztBQUNYLGVBQU87QUFDUCxjQUFNO0FBQUEsTUFDUCxXQUVFLGNBQWMsTUFBTSxPQUFPLFNBQ3hCLGNBQWMsS0FBSyxPQUFPLE9BQzlCO0FBQ0EsZUFBTztBQUNQLGNBQU07QUFBQSxNQUNQO0FBRUQsVUFBSSxTQUFTLEdBQUc7QUFDaEIsbUJBQWM7QUFFZCxhQUFPO0FBQUEsSUFDUjtBQUVELGFBQVMsaUJBQWtCLGFBQWEsZUFBZTtBQUNyRCxpQkFBVyxPQUFPLGFBQWE7QUFDN0IsWUFBSSxZQUFhLFNBQVUsY0FBZSxNQUFPO0FBQy9DLGlCQUFPO0FBQUEsUUFDUjtBQUFBLE1BQ0Y7QUFFRCxhQUFPO0FBQUEsSUFDUjtBQUdELGFBQVMsb0JBQXFCO0FBQzVCLFVBQUksT0FBTyxNQUFNLFlBQVksRUFBRSxZQUFZLEdBQUcsV0FBVyxNQUFNLFNBQVMsRUFBRztBQUUzRSxZQUFNLE9BQU8sWUFBWSxPQUFPLFNBQU8sSUFBSSxjQUFjLFVBQVUsSUFBSSxVQUFVLGNBQWMsVUFBVSxJQUFJO0FBQzdHLFlBQU0sRUFBRSxNQUFNLGFBQWEsT0FBTyxhQUFZLElBQUssTUFBTTtBQUN6RCxZQUFNLGtCQUFrQixPQUFPLEtBQUssWUFBWSxFQUFFO0FBS2xELGlCQUFXLE9BQU8sTUFBTTtBQUN0QixjQUFNLFFBQVEsSUFBSSxVQUFVLE1BQU0sVUFBVTtBQUU1QyxZQUFJLElBQUksVUFBVyxVQUFVLE9BQU8sc0JBQXNCLGdCQUFpQixVQUFVLE1BQU07QUFFekY7QUFBQSxRQUNEO0FBRUQsY0FBTSxFQUFFLE1BQU0sT0FBTyxTQUFTLEtBQUksSUFBSyxJQUFJLFVBQVUsYUFBYTtBQUNsRSxjQUFNLFdBQVcsT0FBTyxLQUFLLEtBQUssRUFBRTtBQUVwQyxZQUFJLFVBQVUsTUFBTTtBQUNsQixjQUFJLFNBQVMsYUFBYTtBQUV4QjtBQUFBLFVBQ0Q7QUFFRCxjQUNFLGFBQWEsbUJBQ1YsaUJBQWlCLGNBQWMsS0FBSyxNQUFNLE9BQzdDO0FBRUE7QUFBQSxVQUNEO0FBR0QsaUJBQU8sSUFBSSxLQUFLO0FBQ2hCO0FBQUEsUUFDRDtBQUVELFlBQUksU0FBUyxNQUFNLFNBQVMsYUFBYTtBQUV2QztBQUFBLFFBQ0Q7QUFFRCxZQUNFLGFBQWEsS0FDVixpQkFBaUIsT0FBTyxZQUFZLE1BQU0sT0FDN0M7QUFFQTtBQUFBLFFBQ0Q7QUFFRCxjQUFNLFdBQVc7QUFBQSxVQUNmLFlBQVksUUFBUTtBQUFBLFVBQ3BCLFdBQVcsa0JBQWtCO0FBQUEsVUFDN0IsU0FBUyxLQUFLLFNBQVMsS0FBSztBQUFBLFFBQzdCO0FBRUQsWUFBSSxTQUFTLGFBQWEsVUFBVSxZQUFZO0FBRTlDLGlCQUFPLElBQUksS0FBSztBQUNoQixzQkFBWTtBQUNaO0FBQUEsUUFDRCxXQUNRLFNBQVMsZUFBZSxVQUFVLFlBQVk7QUFFckQ7QUFBQSxRQUNEO0FBRUQsWUFBSSxTQUFTLFlBQVksVUFBVSxXQUFXO0FBRTVDLGlCQUFPLElBQUksS0FBSztBQUNoQixzQkFBWTtBQUFBLFFBQ2IsV0FDUSxTQUFTLGNBQWMsVUFBVSxXQUFXO0FBRW5EO0FBQUEsUUFDRDtBQUVELFlBQUksU0FBUyxVQUFVLFVBQVUsU0FBUztBQUV4QyxpQkFBTyxJQUFJLEtBQUs7QUFDaEIsc0JBQVk7QUFBQSxRQUNiO0FBQUEsTUFDRjtBQUVELFVBQ0UsU0FBUyxRQUNOLFlBQVksS0FBSyxTQUFPLElBQUksY0FBYyxVQUFVLElBQUksS0FBSyxVQUFVLGFBQWEsS0FBSyxNQUFNLE1BQ2xHO0FBRUE7QUFBQSxNQUNEO0FBRUQsa0JBQVksRUFBRSxNQUFNLFlBQVksS0FBSSxDQUFFO0FBQUEsSUFDdkM7QUFFRCxhQUFTLFVBQVcsR0FBRztBQUNyQix5QkFBb0I7QUFFcEIsVUFDRSxTQUFTLFVBQVUsUUFDaEIsUUFBUSxVQUFVLFFBQ2xCLEVBQUUsVUFDRixPQUFPLEVBQUUsT0FBTyxZQUFZLFlBQy9CO0FBQ0EsY0FBTSxNQUFNLEVBQUUsT0FBTyxRQUFRLFFBQVE7QUFJckMsWUFBSSxPQUFPLFFBQVEsTUFBTSxTQUFTLEdBQUcsTUFBTSxNQUFNO0FBQy9DLG1CQUFTLFFBQVE7QUFDakIscUJBQVcsVUFBVSxRQUFRLGNBQWMsR0FBRztBQUFBLFFBQy9DO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFFRCxhQUFTLGFBQWM7QUFDckIsMkJBQXFCLE1BQU07QUFBRSxpQkFBUyxRQUFRO0FBQUEsTUFBSyxHQUFJLEVBQUU7QUFBQSxJQUMxRDtBQUVELGFBQVMsbUJBQW9CO0FBQzNCLFVBQUksTUFBTSxzQkFBc0IsT0FBTztBQUNyQyxtQ0FBMkIsaUJBQWlCO0FBQUEsTUFDN0MsT0FDSTtBQUNILGlDQUEwQjtBQUFBLE1BQzNCO0FBQUEsSUFDRjtBQUVELGFBQVMsYUFBYztBQUNyQixVQUFJLGlCQUFpQixRQUFRO0FBQzNCLGNBQU0sVUFBVSxNQUFNLE1BQU0sTUFBTSxPQUFPLFVBQVUsZ0JBQWdCO0FBQ25FLHVCQUFlLE1BQU07QUFDbkIsa0JBQVM7QUFDVCx5QkFBZTtBQUFBLFFBQ2hCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFFRCxhQUFTLFlBQWEsU0FBUztBQUM3QixrQkFBWSxLQUFLLE9BQU87QUFDeEIscUJBQWU7QUFFZix3QkFBbUI7QUFHbkIsVUFBSSxRQUFRLGNBQWMsVUFBVSxNQUFNLFdBQVcsUUFBUTtBQUUzRCxtQ0FBMkIsTUFBTTtBQUMvQixjQUFJLFdBQVcsVUFBVSxNQUFNO0FBQzdCLGtCQUFNLFFBQVEsYUFBYTtBQUMzQixrQkFBTSxTQUFTLFVBQVUsVUFBVSxVQUFVLFFBQVEsVUFBVSxLQUMzRCxZQUFZLEtBQUssU0FBTyxJQUFJLEtBQUssVUFBVSxLQUFLLElBQ2hEO0FBRUosc0JBQVUsY0FBYyxPQUFPLFFBQVEsS0FBSztBQUFBLFVBQzdDO0FBQUEsUUFDWCxDQUFTO0FBQUEsTUFDRixPQUVJO0FBRUgsbUJBQVk7QUFFWixZQUFJLFFBQVEsVUFBVSxjQUFjLFVBQVUsTUFBTTtBQUNsRCwyQkFBa0I7QUFBQSxRQUNuQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBRUQsYUFBUyxjQUFlLFNBQVM7QUFDL0Isa0JBQVksT0FBTyxZQUFZLFFBQVEsT0FBTyxHQUFHLENBQUM7QUFDbEQscUJBQWU7QUFFZix3QkFBbUI7QUFFbkIsVUFBSSxpQkFBaUIsVUFBVSxRQUFRLGNBQWMsUUFBUTtBQUUzRCxZQUFJLFlBQVksTUFBTSxTQUFPLElBQUksY0FBYyxNQUFNLE1BQU0sTUFBTTtBQUMvRCx1QkFBYztBQUFBLFFBQ2Y7QUFHRCx5QkFBa0I7QUFBQSxNQUNuQjtBQUFBLElBQ0Y7QUFFRCxVQUFNLFFBQVE7QUFBQSxNQUNaO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFFQTtBQUFBLE1BQ0E7QUFBQSxNQUVBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUVBLG1CQUFtQjtBQUFBLElBQ3BCO0FBRUQsWUFBUSxTQUFTLEtBQUs7QUFFdEIsYUFBUyxVQUFXO0FBQ2xCLHVCQUFpQixRQUFRLGFBQWEsWUFBWTtBQUNsRCxxQkFBZ0I7QUFDaEIsdUJBQWlCLFVBQVUsYUFBYztBQUFBLElBQzFDO0FBRUQsUUFBSTtBQUVKLG9CQUFnQixPQUFPO0FBRXZCLGtCQUFjLE1BQU07QUFDbEIsd0JBQWtCLGlCQUFpQjtBQUNuQyxjQUFTO0FBQUEsSUFDZixDQUFLO0FBRUQsZ0JBQVksTUFBTTtBQUNoQiwwQkFBb0IsUUFBUSxXQUFZO0FBQ3hDLHdCQUFtQjtBQUFBLElBQ3pCLENBQUs7QUFFRCxXQUFPLE1BQU07QUFDWCxhQUFPLEVBQUUsT0FBTztBQUFBLFFBQ2QsS0FBSztBQUFBLFFBQ0wsT0FBTyxRQUFRO0FBQUEsUUFDZixNQUFNO0FBQUEsUUFDTjtBQUFBLFFBQ0E7QUFBQSxNQUNSLEdBQVM7QUFBQSxRQUNELEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxnQkFBZSxDQUFFO0FBQUEsUUFFaEQsRUFBRSxPQUFPO0FBQUEsVUFDUCxLQUFLO0FBQUEsVUFDTCxPQUFPLFdBQVc7QUFBQSxVQUNsQixVQUFVO0FBQUEsUUFDcEIsR0FBVyxNQUFNLE1BQU0sT0FBTyxDQUFDO0FBQUEsUUFFdkIsRUFBRSxPQUFPO0FBQUEsVUFDUCxPQUFPLDREQUNGLFVBQVUsVUFBVSxPQUFPLEtBQUs7QUFBQSxVQUNyQyxNQUFNLE1BQU0sWUFBWSxHQUFHLFFBQVEsS0FBTSxNQUFNLGFBQWEsT0FBTyxPQUFPO0FBQUEsVUFDMUUsb0JBQW9CO0FBQUEsVUFDcEIscUJBQXFCO0FBQUEsVUFDckIsa0JBQWtCO0FBQUEsVUFDbEIscUJBQXFCO0FBQUEsVUFDckIsbUJBQW1CO0FBQUEsUUFDN0IsQ0FBUztBQUFBLFFBRUQsRUFBRSxPQUFPO0FBQUEsVUFDUCxPQUFPLDZEQUNGLFdBQVcsVUFBVSxPQUFPLEtBQUs7QUFBQSxVQUN0QyxNQUFNLE1BQU0sYUFBYSxHQUFHLFFBQVEsS0FBTSxNQUFNLGFBQWEsT0FBTyxTQUFTO0FBQUEsVUFDN0Usb0JBQW9CO0FBQUEsVUFDcEIscUJBQXFCO0FBQUEsVUFDckIsa0JBQWtCO0FBQUEsVUFDbEIscUJBQXFCO0FBQUEsVUFDckIsbUJBQW1CO0FBQUEsUUFDN0IsQ0FBUztBQUFBLE1BQ1QsQ0FBTztBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0gsQ0FBQzs7In0=
