import { Q as QSlideTransition } from "./QSlideTransition.edc8ce9e.js";
import { u as usePanelChildProps, a as usePanelProps, b as usePanelEmits, c as usePanel } from "./use-panel.225d73f4.js";
import { u as useRenderCache } from "./use-render-cache.b9e045af.js";
import { v as createComponent, r as ref, c as computed, h, at as QIcon, aa as withDirectives, ab as Ripple, g as getCurrentInstance, i as inject, x as emptyRenderFn, bK as stepperKey, a_ as KeepAlive, z as hSlot, ah as useDarkProps, ai as useDark, y as provide, H as hMergeSlot, au as hDir } from "./index.61ed5618.js";
var StepHeader = createComponent({
  name: "StepHeader",
  props: {
    stepper: {},
    step: {},
    goToPanel: Function
  },
  setup(props, { attrs }) {
    const { proxy: { $q } } = getCurrentInstance();
    const blurRef = ref(null);
    const isActive = computed(() => props.stepper.modelValue === props.step.name);
    const isDisable = computed(() => {
      const opt = props.step.disable;
      return opt === true || opt === "";
    });
    const isError = computed(() => {
      const opt = props.step.error;
      return opt === true || opt === "";
    });
    const isDone = computed(() => {
      const opt = props.step.done;
      return isDisable.value === false && (opt === true || opt === "");
    });
    const headerNav = computed(() => {
      const opt = props.step.headerNav, nav = opt === true || opt === "" || opt === void 0;
      return isDisable.value === false && props.stepper.headerNav && nav;
    });
    const hasPrefix = computed(() => {
      return props.step.prefix && (isActive.value === false || props.stepper.activeIcon === "none") && (isError.value === false || props.stepper.errorIcon === "none") && (isDone.value === false || props.stepper.doneIcon === "none");
    });
    const icon = computed(() => {
      const defaultIcon = props.step.icon || props.stepper.inactiveIcon;
      if (isActive.value === true) {
        const icon2 = props.step.activeIcon || props.stepper.activeIcon;
        return icon2 === "none" ? defaultIcon : icon2 || $q.iconSet.stepper.active;
      }
      if (isError.value === true) {
        const icon2 = props.step.errorIcon || props.stepper.errorIcon;
        return icon2 === "none" ? defaultIcon : icon2 || $q.iconSet.stepper.error;
      }
      if (isDisable.value === false && isDone.value === true) {
        const icon2 = props.step.doneIcon || props.stepper.doneIcon;
        return icon2 === "none" ? defaultIcon : icon2 || $q.iconSet.stepper.done;
      }
      return defaultIcon;
    });
    const color = computed(() => {
      const errorColor = isError.value === true ? props.step.errorColor || props.stepper.errorColor : void 0;
      if (isActive.value === true) {
        const color2 = props.step.activeColor || props.stepper.activeColor || props.step.color;
        return color2 !== void 0 ? color2 : errorColor;
      }
      if (errorColor !== void 0) {
        return errorColor;
      }
      if (isDisable.value === false && isDone.value === true) {
        return props.step.doneColor || props.stepper.doneColor || props.step.color || props.stepper.inactiveColor;
      }
      return props.step.color || props.stepper.inactiveColor;
    });
    const classes = computed(() => {
      return "q-stepper__tab col-grow flex items-center no-wrap relative-position" + (color.value !== void 0 ? ` text-${color.value}` : "") + (isError.value === true ? " q-stepper__tab--error q-stepper__tab--error-with-" + (hasPrefix.value === true ? "prefix" : "icon") : "") + (isActive.value === true ? " q-stepper__tab--active" : "") + (isDone.value === true ? " q-stepper__tab--done" : "") + (headerNav.value === true ? " q-stepper__tab--navigation q-focusable q-hoverable" : "") + (isDisable.value === true ? " q-stepper__tab--disabled" : "");
    });
    const ripple = computed(() => props.stepper.headerNav !== true ? false : headerNav.value);
    function onActivate() {
      blurRef.value !== null && blurRef.value.focus();
      isActive.value === false && props.goToPanel(props.step.name);
    }
    function onKeyup(e) {
      if (e.keyCode === 13 && isActive.value === false) {
        props.goToPanel(props.step.name);
      }
    }
    return () => {
      const data = { class: classes.value };
      if (headerNav.value === true) {
        data.onClick = onActivate;
        data.onKeyup = onKeyup;
        Object.assign(
          data,
          isDisable.value === true ? { tabindex: -1, "aria-disabled": "true" } : { tabindex: attrs.tabindex || 0 }
        );
      }
      const child = [
        h("div", { class: "q-focus-helper", tabindex: -1, ref: blurRef }),
        h("div", { class: "q-stepper__dot row flex-center q-stepper__line relative-position" }, [
          h("span", { class: "row flex-center" }, [
            hasPrefix.value === true ? props.step.prefix : h(QIcon, { name: icon.value })
          ])
        ])
      ];
      if (props.step.title !== void 0 && props.step.title !== null) {
        const content = [
          h("div", { class: "q-stepper__title" }, props.step.title)
        ];
        if (props.step.caption !== void 0 && props.step.caption !== null) {
          content.push(
            h("div", { class: "q-stepper__caption" }, props.step.caption)
          );
        }
        child.push(
          h("div", {
            class: "q-stepper__label q-stepper__line relative-position"
          }, content)
        );
      }
      return withDirectives(
        h("div", data, child),
        [[Ripple, ripple.value]]
      );
    };
  }
});
function getStepWrapper(slots) {
  return h("div", {
    class: "q-stepper__step-content"
  }, [
    h("div", {
      class: "q-stepper__step-inner"
    }, hSlot(slots.default))
  ]);
}
const PanelWrapper = {
  setup(_, { slots }) {
    return () => getStepWrapper(slots);
  }
};
var QStep = createComponent({
  name: "QStep",
  props: {
    ...usePanelChildProps,
    icon: String,
    color: String,
    title: {
      type: String,
      required: true
    },
    caption: String,
    prefix: [String, Number],
    doneIcon: String,
    doneColor: String,
    activeIcon: String,
    activeColor: String,
    errorIcon: String,
    errorColor: String,
    headerNav: {
      type: Boolean,
      default: true
    },
    done: Boolean,
    error: Boolean,
    onScroll: [Function, Array]
  },
  setup(props, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const $stepper = inject(stepperKey, emptyRenderFn);
    if ($stepper === emptyRenderFn) {
      console.error("QStep needs to be a child of QStepper");
      return emptyRenderFn;
    }
    const { getCache } = useRenderCache();
    const rootRef = ref(null);
    const isActive = computed(() => $stepper.value.modelValue === props.name);
    const scrollEvent = computed(() => $q.platform.is.ios !== true && $q.platform.is.chrome === true || isActive.value !== true || $stepper.value.vertical !== true ? {} : {
      onScroll(e) {
        const { target } = e;
        if (target.scrollTop > 0) {
          target.scrollTop = 0;
        }
        props.onScroll !== void 0 && emit("scroll", e);
      }
    });
    const contentKey = computed(() => typeof props.name === "string" || typeof props.name === "number" ? props.name : String(props.name));
    function getStepContent() {
      const vertical = $stepper.value.vertical;
      if (vertical === true && $stepper.value.keepAlive === true) {
        return h(
          KeepAlive,
          $stepper.value.keepAliveProps.value,
          isActive.value === true ? [
            h(
              $stepper.value.needsUniqueKeepAliveWrapper.value === true ? getCache(contentKey.value, () => ({ ...PanelWrapper, name: contentKey.value })) : PanelWrapper,
              { key: contentKey.value },
              slots.default
            )
          ] : void 0
        );
      }
      return vertical !== true || isActive.value === true ? getStepWrapper(slots) : void 0;
    }
    return () => h(
      "div",
      { ref: rootRef, class: "q-stepper__step", role: "tabpanel", ...scrollEvent.value },
      $stepper.value.vertical === true ? [
        h(StepHeader, {
          stepper: $stepper.value,
          step: props,
          goToPanel: $stepper.value.goToPanel
        }),
        $stepper.value.animated === true ? h(QSlideTransition, getStepContent) : getStepContent()
      ] : [getStepContent()]
    );
  }
});
const camelRE = /(-\w)/g;
function camelizeProps(props) {
  const acc = {};
  for (const key in props) {
    const newKey = key.replace(camelRE, (m) => m[1].toUpperCase());
    acc[newKey] = props[key];
  }
  return acc;
}
var QStepper = createComponent({
  name: "QStepper",
  props: {
    ...useDarkProps,
    ...usePanelProps,
    flat: Boolean,
    bordered: Boolean,
    alternativeLabels: Boolean,
    headerNav: Boolean,
    contracted: Boolean,
    headerClass: String,
    inactiveColor: String,
    inactiveIcon: String,
    doneIcon: String,
    doneColor: String,
    activeIcon: String,
    activeColor: String,
    errorIcon: String,
    errorColor: String
  },
  emits: usePanelEmits,
  setup(props, { slots }) {
    const vm = getCurrentInstance();
    const isDark = useDark(props, vm.proxy.$q);
    const {
      updatePanelsList,
      isValidPanelName,
      updatePanelIndex,
      getPanelContent,
      getPanels,
      panelDirectives,
      goToPanel,
      keepAliveProps,
      needsUniqueKeepAliveWrapper
    } = usePanel();
    provide(stepperKey, computed(() => ({
      goToPanel,
      keepAliveProps,
      needsUniqueKeepAliveWrapper,
      ...props
    })));
    const classes = computed(
      () => `q-stepper q-stepper--${props.vertical === true ? "vertical" : "horizontal"}` + (props.flat === true ? " q-stepper--flat" : "") + (props.bordered === true ? " q-stepper--bordered" : "") + (isDark.value === true ? " q-stepper--dark q-dark" : "")
    );
    const headerClasses = computed(
      () => `q-stepper__header row items-stretch justify-between q-stepper__header--${props.alternativeLabels === true ? "alternative" : "standard"}-labels` + (props.flat === false || props.bordered === true ? " q-stepper__header--border" : "") + (props.contracted === true ? " q-stepper__header--contracted" : "") + (props.headerClass !== void 0 ? ` ${props.headerClass}` : "")
    );
    function getContent() {
      const top = hSlot(slots.message, []);
      if (props.vertical === true) {
        isValidPanelName(props.modelValue) && updatePanelIndex();
        const content = h("div", {
          class: "q-stepper__content"
        }, hSlot(slots.default));
        return top === void 0 ? [content] : top.concat(content);
      }
      return [
        h(
          "div",
          { class: headerClasses.value },
          getPanels().map((panel) => {
            const step = camelizeProps(panel.props);
            return h(StepHeader, {
              key: step.name,
              stepper: props,
              step,
              goToPanel
            });
          })
        ),
        top,
        hDir(
          "div",
          { class: "q-stepper__content q-panel-parent" },
          getPanelContent(),
          "cont",
          props.swipeable,
          () => panelDirectives.value
        )
      ];
    }
    return () => {
      updatePanelsList(slots);
      return h("div", {
        class: classes.value
      }, hMergeSlot(slots.navigation, getContent()));
    };
  }
});
export { QStep as Q, QStepper as a };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUVN0ZXBwZXIuOTBjM2Y1ZGQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvc3RlcHBlci9TdGVwSGVhZGVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9zdGVwcGVyL1FTdGVwLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9zdGVwcGVyL1FTdGVwcGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIHdpdGhEaXJlY3RpdmVzLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBRSWNvbiBmcm9tICcuLi9pY29uL1FJY29uLmpzJ1xuaW1wb3J0IFJpcHBsZSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3JpcHBsZS9SaXBwbGUuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuY3JlYXRlL2NyZWF0ZS5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1N0ZXBIZWFkZXInLFxuXG4gIHByb3BzOiB7XG4gICAgc3RlcHBlcjoge30sXG4gICAgc3RlcDoge30sXG4gICAgZ29Ub1BhbmVsOiBGdW5jdGlvblxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBhdHRycyB9KSB7XG4gICAgY29uc3QgeyBwcm94eTogeyAkcSB9IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IGJsdXJSZWYgPSByZWYobnVsbClcblxuICAgIGNvbnN0IGlzQWN0aXZlID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMuc3RlcHBlci5tb2RlbFZhbHVlID09PSBwcm9wcy5zdGVwLm5hbWUpXG5cbiAgICBjb25zdCBpc0Rpc2FibGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBvcHQgPSBwcm9wcy5zdGVwLmRpc2FibGVcbiAgICAgIHJldHVybiBvcHQgPT09IHRydWUgfHwgb3B0ID09PSAnJ1xuICAgIH0pXG5cbiAgICBjb25zdCBpc0Vycm9yID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3Qgb3B0ID0gcHJvcHMuc3RlcC5lcnJvclxuICAgICAgcmV0dXJuIG9wdCA9PT0gdHJ1ZSB8fCBvcHQgPT09ICcnXG4gICAgfSlcblxuICAgIGNvbnN0IGlzRG9uZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IG9wdCA9IHByb3BzLnN0ZXAuZG9uZVxuICAgICAgcmV0dXJuIGlzRGlzYWJsZS52YWx1ZSA9PT0gZmFsc2UgJiYgKG9wdCA9PT0gdHJ1ZSB8fCBvcHQgPT09ICcnKVxuICAgIH0pXG5cbiAgICBjb25zdCBoZWFkZXJOYXYgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdFxuICAgICAgICBvcHQgPSBwcm9wcy5zdGVwLmhlYWRlck5hdixcbiAgICAgICAgbmF2ID0gb3B0ID09PSB0cnVlIHx8IG9wdCA9PT0gJycgfHwgb3B0ID09PSB2b2lkIDBcblxuICAgICAgcmV0dXJuIGlzRGlzYWJsZS52YWx1ZSA9PT0gZmFsc2VcbiAgICAgICAgJiYgcHJvcHMuc3RlcHBlci5oZWFkZXJOYXZcbiAgICAgICAgJiYgbmF2XG4gICAgfSlcblxuICAgIGNvbnN0IGhhc1ByZWZpeCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIHJldHVybiBwcm9wcy5zdGVwLnByZWZpeFxuICAgICAgICAmJiAoaXNBY3RpdmUudmFsdWUgPT09IGZhbHNlIHx8IHByb3BzLnN0ZXBwZXIuYWN0aXZlSWNvbiA9PT0gJ25vbmUnKVxuICAgICAgICAmJiAoaXNFcnJvci52YWx1ZSA9PT0gZmFsc2UgfHwgcHJvcHMuc3RlcHBlci5lcnJvckljb24gPT09ICdub25lJylcbiAgICAgICAgJiYgKGlzRG9uZS52YWx1ZSA9PT0gZmFsc2UgfHwgcHJvcHMuc3RlcHBlci5kb25lSWNvbiA9PT0gJ25vbmUnKVxuICAgIH0pXG5cbiAgICBjb25zdCBpY29uID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgZGVmYXVsdEljb24gPSBwcm9wcy5zdGVwLmljb24gfHwgcHJvcHMuc3RlcHBlci5pbmFjdGl2ZUljb25cblxuICAgICAgaWYgKGlzQWN0aXZlLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IGljb24gPSBwcm9wcy5zdGVwLmFjdGl2ZUljb24gfHwgcHJvcHMuc3RlcHBlci5hY3RpdmVJY29uXG4gICAgICAgIHJldHVybiBpY29uID09PSAnbm9uZSdcbiAgICAgICAgICA/IGRlZmF1bHRJY29uXG4gICAgICAgICAgOiBpY29uIHx8ICRxLmljb25TZXQuc3RlcHBlci5hY3RpdmVcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRXJyb3IudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3QgaWNvbiA9IHByb3BzLnN0ZXAuZXJyb3JJY29uIHx8IHByb3BzLnN0ZXBwZXIuZXJyb3JJY29uXG4gICAgICAgIHJldHVybiBpY29uID09PSAnbm9uZSdcbiAgICAgICAgICA/IGRlZmF1bHRJY29uXG4gICAgICAgICAgOiBpY29uIHx8ICRxLmljb25TZXQuc3RlcHBlci5lcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNhYmxlLnZhbHVlID09PSBmYWxzZSAmJiBpc0RvbmUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3QgaWNvbiA9IHByb3BzLnN0ZXAuZG9uZUljb24gfHwgcHJvcHMuc3RlcHBlci5kb25lSWNvblxuICAgICAgICByZXR1cm4gaWNvbiA9PT0gJ25vbmUnXG4gICAgICAgICAgPyBkZWZhdWx0SWNvblxuICAgICAgICAgIDogaWNvbiB8fCAkcS5pY29uU2V0LnN0ZXBwZXIuZG9uZVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVmYXVsdEljb25cbiAgICB9KVxuXG4gICAgY29uc3QgY29sb3IgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBlcnJvckNvbG9yID0gaXNFcnJvci52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICA/IHByb3BzLnN0ZXAuZXJyb3JDb2xvciB8fCBwcm9wcy5zdGVwcGVyLmVycm9yQ29sb3JcbiAgICAgICAgOiB2b2lkIDBcblxuICAgICAgaWYgKGlzQWN0aXZlLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IGNvbG9yID0gcHJvcHMuc3RlcC5hY3RpdmVDb2xvciB8fCBwcm9wcy5zdGVwcGVyLmFjdGl2ZUNvbG9yIHx8IHByb3BzLnN0ZXAuY29sb3JcbiAgICAgICAgcmV0dXJuIGNvbG9yICE9PSB2b2lkIDBcbiAgICAgICAgICA/IGNvbG9yXG4gICAgICAgICAgOiBlcnJvckNvbG9yXG4gICAgICB9XG4gICAgICBpZiAoZXJyb3JDb2xvciAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiBlcnJvckNvbG9yXG4gICAgICB9XG4gICAgICBpZiAoaXNEaXNhYmxlLnZhbHVlID09PSBmYWxzZSAmJiBpc0RvbmUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHByb3BzLnN0ZXAuZG9uZUNvbG9yIHx8IHByb3BzLnN0ZXBwZXIuZG9uZUNvbG9yIHx8IHByb3BzLnN0ZXAuY29sb3IgfHwgcHJvcHMuc3RlcHBlci5pbmFjdGl2ZUNvbG9yXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcm9wcy5zdGVwLmNvbG9yIHx8IHByb3BzLnN0ZXBwZXIuaW5hY3RpdmVDb2xvclxuICAgIH0pXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgcmV0dXJuICdxLXN0ZXBwZXJfX3RhYiBjb2wtZ3JvdyBmbGV4IGl0ZW1zLWNlbnRlciBuby13cmFwIHJlbGF0aXZlLXBvc2l0aW9uJ1xuICAgICAgICArIChjb2xvci52YWx1ZSAhPT0gdm9pZCAwID8gYCB0ZXh0LSR7IGNvbG9yLnZhbHVlIH1gIDogJycpXG4gICAgICAgICsgKGlzRXJyb3IudmFsdWUgPT09IHRydWVcbiAgICAgICAgICA/ICcgcS1zdGVwcGVyX190YWItLWVycm9yIHEtc3RlcHBlcl9fdGFiLS1lcnJvci13aXRoLScgKyAoaGFzUHJlZml4LnZhbHVlID09PSB0cnVlID8gJ3ByZWZpeCcgOiAnaWNvbicpXG4gICAgICAgICAgOiAnJylcbiAgICAgICAgKyAoaXNBY3RpdmUudmFsdWUgPT09IHRydWUgPyAnIHEtc3RlcHBlcl9fdGFiLS1hY3RpdmUnIDogJycpXG4gICAgICAgICsgKGlzRG9uZS52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1zdGVwcGVyX190YWItLWRvbmUnIDogJycpXG4gICAgICAgICsgKGhlYWRlck5hdi52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1zdGVwcGVyX190YWItLW5hdmlnYXRpb24gcS1mb2N1c2FibGUgcS1ob3ZlcmFibGUnIDogJycpXG4gICAgICAgICsgKGlzRGlzYWJsZS52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1zdGVwcGVyX190YWItLWRpc2FibGVkJyA6ICcnKVxuICAgIH0pXG5cbiAgICBjb25zdCByaXBwbGUgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5zdGVwcGVyLmhlYWRlck5hdiAhPT0gdHJ1ZVxuICAgICAgICA/IGZhbHNlXG4gICAgICAgIDogaGVhZGVyTmF2LnZhbHVlXG4gICAgKSlcblxuICAgIGZ1bmN0aW9uIG9uQWN0aXZhdGUgKCkge1xuICAgICAgYmx1clJlZi52YWx1ZSAhPT0gbnVsbCAmJiBibHVyUmVmLnZhbHVlLmZvY3VzKClcbiAgICAgIGlzQWN0aXZlLnZhbHVlID09PSBmYWxzZSAmJiBwcm9wcy5nb1RvUGFuZWwocHJvcHMuc3RlcC5uYW1lKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uS2V5dXAgKGUpIHtcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzICYmIGlzQWN0aXZlLnZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICBwcm9wcy5nb1RvUGFuZWwocHJvcHMuc3RlcC5uYW1lKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBkYXRhID0geyBjbGFzczogY2xhc3Nlcy52YWx1ZSB9XG5cbiAgICAgIGlmIChoZWFkZXJOYXYudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgZGF0YS5vbkNsaWNrID0gb25BY3RpdmF0ZVxuICAgICAgICBkYXRhLm9uS2V5dXAgPSBvbktleXVwXG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihkYXRhLFxuICAgICAgICAgIGlzRGlzYWJsZS52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICAgICAgPyB7IHRhYmluZGV4OiAtMSwgJ2FyaWEtZGlzYWJsZWQnOiAndHJ1ZScgfVxuICAgICAgICAgICAgOiB7IHRhYmluZGV4OiBhdHRycy50YWJpbmRleCB8fCAwIH1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBjaGlsZCA9IFtcbiAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtZm9jdXMtaGVscGVyJywgdGFiaW5kZXg6IC0xLCByZWY6IGJsdXJSZWYgfSksXG5cbiAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3Etc3RlcHBlcl9fZG90IHJvdyBmbGV4LWNlbnRlciBxLXN0ZXBwZXJfX2xpbmUgcmVsYXRpdmUtcG9zaXRpb24nIH0sIFtcbiAgICAgICAgICBoKCdzcGFuJywgeyBjbGFzczogJ3JvdyBmbGV4LWNlbnRlcicgfSwgW1xuICAgICAgICAgICAgaGFzUHJlZml4LnZhbHVlID09PSB0cnVlXG4gICAgICAgICAgICAgID8gcHJvcHMuc3RlcC5wcmVmaXhcbiAgICAgICAgICAgICAgOiBoKFFJY29uLCB7IG5hbWU6IGljb24udmFsdWUgfSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXVxuXG4gICAgICBpZiAocHJvcHMuc3RlcC50aXRsZSAhPT0gdm9pZCAwICYmIHByb3BzLnN0ZXAudGl0bGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IFtcbiAgICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS1zdGVwcGVyX190aXRsZScgfSwgcHJvcHMuc3RlcC50aXRsZSlcbiAgICAgICAgXVxuXG4gICAgICAgIGlmIChwcm9wcy5zdGVwLmNhcHRpb24gIT09IHZvaWQgMCAmJiBwcm9wcy5zdGVwLmNhcHRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICBjb250ZW50LnB1c2goXG4gICAgICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS1zdGVwcGVyX19jYXB0aW9uJyB9LCBwcm9wcy5zdGVwLmNhcHRpb24pXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzczogJ3Etc3RlcHBlcl9fbGFiZWwgcS1zdGVwcGVyX19saW5lIHJlbGF0aXZlLXBvc2l0aW9uJ1xuICAgICAgICAgIH0sIGNvbnRlbnQpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHdpdGhEaXJlY3RpdmVzKFxuICAgICAgICBoKCdkaXYnLCBkYXRhLCBjaGlsZCksXG4gICAgICAgIFsgWyBSaXBwbGUsIHJpcHBsZS52YWx1ZSBdIF1cbiAgICAgIClcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCBpbmplY3QsIGdldEN1cnJlbnRJbnN0YW5jZSwgS2VlcEFsaXZlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUVNsaWRlVHJhbnNpdGlvbiBmcm9tICcuLi9zbGlkZS10cmFuc2l0aW9uL1FTbGlkZVRyYW5zaXRpb24uanMnXG5pbXBvcnQgU3RlcEhlYWRlciBmcm9tICcuL1N0ZXBIZWFkZXIuanMnXG5cbmltcG9ydCB7IHVzZVBhbmVsQ2hpbGRQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUudXNlLXBhbmVsL3VzZS1wYW5lbC5qcydcbmltcG9ydCB1c2VSZW5kZXJDYWNoZSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy91c2UtcmVuZGVyLWNhY2hlL3VzZS1yZW5kZXItY2FjaGUuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuY3JlYXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IHN0ZXBwZXJLZXksIGVtcHR5UmVuZGVyRm4gfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnN5bWJvbHMvc3ltYm9scy5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5yZW5kZXIvcmVuZGVyLmpzJ1xuXG5mdW5jdGlvbiBnZXRTdGVwV3JhcHBlciAoc2xvdHMpIHtcbiAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICBjbGFzczogJ3Etc3RlcHBlcl9fc3RlcC1jb250ZW50J1xuICB9LCBbXG4gICAgaCgnZGl2Jywge1xuICAgICAgY2xhc3M6ICdxLXN0ZXBwZXJfX3N0ZXAtaW5uZXInXG4gICAgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gIF0pXG59XG5cbmNvbnN0IFBhbmVsV3JhcHBlciA9IHtcbiAgc2V0dXAgKF8sIHsgc2xvdHMgfSkge1xuICAgIHJldHVybiAoKSA9PiBnZXRTdGVwV3JhcHBlcihzbG90cylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVN0ZXAnLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlUGFuZWxDaGlsZFByb3BzLFxuXG4gICAgaWNvbjogU3RyaW5nLFxuICAgIGNvbG9yOiBTdHJpbmcsXG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBjYXB0aW9uOiBTdHJpbmcsXG4gICAgcHJlZml4OiBbIFN0cmluZywgTnVtYmVyIF0sXG5cbiAgICBkb25lSWNvbjogU3RyaW5nLFxuICAgIGRvbmVDb2xvcjogU3RyaW5nLFxuICAgIGFjdGl2ZUljb246IFN0cmluZyxcbiAgICBhY3RpdmVDb2xvcjogU3RyaW5nLFxuICAgIGVycm9ySWNvbjogU3RyaW5nLFxuICAgIGVycm9yQ29sb3I6IFN0cmluZyxcblxuICAgIGhlYWRlck5hdjoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICB9LFxuICAgIGRvbmU6IEJvb2xlYW4sXG4gICAgZXJyb3I6IEJvb2xlYW4sXG5cbiAgICBvblNjcm9sbDogWyBGdW5jdGlvbiwgQXJyYXkgXVxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgY29uc3QgeyBwcm94eTogeyAkcSB9IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gICAgY29uc3QgJHN0ZXBwZXIgPSBpbmplY3Qoc3RlcHBlcktleSwgZW1wdHlSZW5kZXJGbilcbiAgICBpZiAoJHN0ZXBwZXIgPT09IGVtcHR5UmVuZGVyRm4pIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1FTdGVwIG5lZWRzIHRvIGJlIGEgY2hpbGQgb2YgUVN0ZXBwZXInKVxuICAgICAgcmV0dXJuIGVtcHR5UmVuZGVyRm5cbiAgICB9XG5cbiAgICBjb25zdCB7IGdldENhY2hlIH0gPSB1c2VSZW5kZXJDYWNoZSgpXG5cbiAgICBjb25zdCByb290UmVmID0gcmVmKG51bGwpXG5cbiAgICBjb25zdCBpc0FjdGl2ZSA9IGNvbXB1dGVkKCgpID0+ICRzdGVwcGVyLnZhbHVlLm1vZGVsVmFsdWUgPT09IHByb3BzLm5hbWUpXG5cbiAgICBjb25zdCBzY3JvbGxFdmVudCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgICgkcS5wbGF0Zm9ybS5pcy5pb3MgIT09IHRydWUgJiYgJHEucGxhdGZvcm0uaXMuY2hyb21lID09PSB0cnVlKVxuICAgICAgICB8fCBpc0FjdGl2ZS52YWx1ZSAhPT0gdHJ1ZVxuICAgICAgICB8fCAkc3RlcHBlci52YWx1ZS52ZXJ0aWNhbCAhPT0gdHJ1ZVxuICAgICAgICA/IHt9XG4gICAgICAgIDoge1xuICAgICAgICAgICAgb25TY3JvbGwgKGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgeyB0YXJnZXQgfSA9IGVcbiAgICAgICAgICAgICAgaWYgKHRhcmdldC5zY3JvbGxUb3AgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LnNjcm9sbFRvcCA9IDBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBwcm9wcy5vblNjcm9sbCAhPT0gdm9pZCAwICYmIGVtaXQoJ3Njcm9sbCcsIGUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICkpXG5cbiAgICBjb25zdCBjb250ZW50S2V5ID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgdHlwZW9mIHByb3BzLm5hbWUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBwcm9wcy5uYW1lID09PSAnbnVtYmVyJ1xuICAgICAgICA/IHByb3BzLm5hbWVcbiAgICAgICAgOiBTdHJpbmcocHJvcHMubmFtZSlcbiAgICApKVxuXG4gICAgZnVuY3Rpb24gZ2V0U3RlcENvbnRlbnQgKCkge1xuICAgICAgY29uc3QgdmVydGljYWwgPSAkc3RlcHBlci52YWx1ZS52ZXJ0aWNhbFxuXG4gICAgICBpZiAodmVydGljYWwgPT09IHRydWUgJiYgJHN0ZXBwZXIudmFsdWUua2VlcEFsaXZlID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBoKFxuICAgICAgICAgIEtlZXBBbGl2ZSxcbiAgICAgICAgICAkc3RlcHBlci52YWx1ZS5rZWVwQWxpdmVQcm9wcy52YWx1ZSxcbiAgICAgICAgICBpc0FjdGl2ZS52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgaChcbiAgICAgICAgICAgICAgICAgICRzdGVwcGVyLnZhbHVlLm5lZWRzVW5pcXVlS2VlcEFsaXZlV3JhcHBlci52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICA/IGdldENhY2hlKGNvbnRlbnRLZXkudmFsdWUsICgpID0+ICh7IC4uLlBhbmVsV3JhcHBlciwgbmFtZTogY29udGVudEtleS52YWx1ZSB9KSlcbiAgICAgICAgICAgICAgICAgICAgOiBQYW5lbFdyYXBwZXIsXG4gICAgICAgICAgICAgICAgICB7IGtleTogY29udGVudEtleS52YWx1ZSB9LFxuICAgICAgICAgICAgICAgICAgc2xvdHMuZGVmYXVsdFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgOiB2b2lkIDBcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmVydGljYWwgIT09IHRydWUgfHwgaXNBY3RpdmUudmFsdWUgPT09IHRydWVcbiAgICAgICAgPyBnZXRTdGVwV3JhcHBlcihzbG90cylcbiAgICAgICAgOiB2b2lkIDBcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4gaChcbiAgICAgICdkaXYnLFxuICAgICAgeyByZWY6IHJvb3RSZWYsIGNsYXNzOiAncS1zdGVwcGVyX19zdGVwJywgcm9sZTogJ3RhYnBhbmVsJywgLi4uc2Nyb2xsRXZlbnQudmFsdWUgfSxcbiAgICAgICRzdGVwcGVyLnZhbHVlLnZlcnRpY2FsID09PSB0cnVlXG4gICAgICAgID8gW1xuICAgICAgICAgICAgaChTdGVwSGVhZGVyLCB7XG4gICAgICAgICAgICAgIHN0ZXBwZXI6ICRzdGVwcGVyLnZhbHVlLFxuICAgICAgICAgICAgICBzdGVwOiBwcm9wcyxcbiAgICAgICAgICAgICAgZ29Ub1BhbmVsOiAkc3RlcHBlci52YWx1ZS5nb1RvUGFuZWxcbiAgICAgICAgICAgIH0pLFxuXG4gICAgICAgICAgICAkc3RlcHBlci52YWx1ZS5hbmltYXRlZCA9PT0gdHJ1ZVxuICAgICAgICAgICAgICA/IGgoUVNsaWRlVHJhbnNpdGlvbiwgZ2V0U3RlcENvbnRlbnQpXG4gICAgICAgICAgICAgIDogZ2V0U3RlcENvbnRlbnQoKVxuICAgICAgICAgIF1cbiAgICAgICAgOiBbIGdldFN0ZXBDb250ZW50KCkgXVxuICAgIClcbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIGNvbXB1dGVkLCBwcm92aWRlLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBTdGVwSGVhZGVyIGZyb20gJy4vU3RlcEhlYWRlci5qcydcblxuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS51c2UtZGFyay91c2UtZGFyay5qcydcbmltcG9ydCB1c2VQYW5lbCwgeyB1c2VQYW5lbFByb3BzLCB1c2VQYW5lbEVtaXRzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS51c2UtcGFuZWwvdXNlLXBhbmVsLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmNyZWF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBzdGVwcGVyS2V5IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5zeW1ib2xzL3N5bWJvbHMuanMnXG5pbXBvcnQgeyBoU2xvdCwgaE1lcmdlU2xvdCwgaERpciB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUucmVuZGVyL3JlbmRlci5qcydcblxuY29uc3QgY2FtZWxSRSA9IC8oLVxcdykvZ1xuXG5mdW5jdGlvbiBjYW1lbGl6ZVByb3BzIChwcm9wcykge1xuICBjb25zdCBhY2MgPSB7fVxuICBmb3IgKGNvbnN0IGtleSBpbiBwcm9wcykge1xuICAgIGNvbnN0IG5ld0tleSA9IGtleS5yZXBsYWNlKGNhbWVsUkUsIG0gPT4gbVsgMSBdLnRvVXBwZXJDYXNlKCkpXG4gICAgYWNjWyBuZXdLZXkgXSA9IHByb3BzWyBrZXkgXVxuICB9XG4gIHJldHVybiBhY2Ncbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FTdGVwcGVyJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZURhcmtQcm9wcyxcbiAgICAuLi51c2VQYW5lbFByb3BzLFxuXG4gICAgZmxhdDogQm9vbGVhbixcbiAgICBib3JkZXJlZDogQm9vbGVhbixcbiAgICBhbHRlcm5hdGl2ZUxhYmVsczogQm9vbGVhbixcbiAgICBoZWFkZXJOYXY6IEJvb2xlYW4sXG4gICAgY29udHJhY3RlZDogQm9vbGVhbixcbiAgICBoZWFkZXJDbGFzczogU3RyaW5nLFxuXG4gICAgaW5hY3RpdmVDb2xvcjogU3RyaW5nLFxuICAgIGluYWN0aXZlSWNvbjogU3RyaW5nLFxuICAgIGRvbmVJY29uOiBTdHJpbmcsXG4gICAgZG9uZUNvbG9yOiBTdHJpbmcsXG4gICAgYWN0aXZlSWNvbjogU3RyaW5nLFxuICAgIGFjdGl2ZUNvbG9yOiBTdHJpbmcsXG4gICAgZXJyb3JJY29uOiBTdHJpbmcsXG4gICAgZXJyb3JDb2xvcjogU3RyaW5nXG4gIH0sXG5cbiAgZW1pdHM6IHVzZVBhbmVsRW1pdHMsXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzIH0pIHtcbiAgICBjb25zdCB2bSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gICAgY29uc3QgaXNEYXJrID0gdXNlRGFyayhwcm9wcywgdm0ucHJveHkuJHEpXG5cbiAgICBjb25zdCB7XG4gICAgICB1cGRhdGVQYW5lbHNMaXN0LCBpc1ZhbGlkUGFuZWxOYW1lLFxuICAgICAgdXBkYXRlUGFuZWxJbmRleCwgZ2V0UGFuZWxDb250ZW50LFxuICAgICAgZ2V0UGFuZWxzLCBwYW5lbERpcmVjdGl2ZXMsIGdvVG9QYW5lbCxcbiAgICAgIGtlZXBBbGl2ZVByb3BzLCBuZWVkc1VuaXF1ZUtlZXBBbGl2ZVdyYXBwZXJcbiAgICB9ID0gdXNlUGFuZWwoKVxuXG4gICAgcHJvdmlkZShzdGVwcGVyS2V5LCBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgZ29Ub1BhbmVsLFxuICAgICAga2VlcEFsaXZlUHJvcHMsXG4gICAgICBuZWVkc1VuaXF1ZUtlZXBBbGl2ZVdyYXBwZXIsXG4gICAgICAuLi5wcm9wc1xuICAgIH0pKSlcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgYHEtc3RlcHBlciBxLXN0ZXBwZXItLSR7IHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJyB9YFxuICAgICAgKyAocHJvcHMuZmxhdCA9PT0gdHJ1ZSA/ICcgcS1zdGVwcGVyLS1mbGF0JyA6ICcnKVxuICAgICAgKyAocHJvcHMuYm9yZGVyZWQgPT09IHRydWUgPyAnIHEtc3RlcHBlci0tYm9yZGVyZWQnIDogJycpXG4gICAgICArIChpc0RhcmsudmFsdWUgPT09IHRydWUgPyAnIHEtc3RlcHBlci0tZGFyayBxLWRhcmsnIDogJycpXG4gICAgKVxuXG4gICAgY29uc3QgaGVhZGVyQ2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1zdGVwcGVyX19oZWFkZXIgcm93IGl0ZW1zLXN0cmV0Y2gganVzdGlmeS1iZXR3ZWVuJ1xuICAgICAgKyBgIHEtc3RlcHBlcl9faGVhZGVyLS0keyBwcm9wcy5hbHRlcm5hdGl2ZUxhYmVscyA9PT0gdHJ1ZSA/ICdhbHRlcm5hdGl2ZScgOiAnc3RhbmRhcmQnIH0tbGFiZWxzYFxuICAgICAgKyAocHJvcHMuZmxhdCA9PT0gZmFsc2UgfHwgcHJvcHMuYm9yZGVyZWQgPT09IHRydWUgPyAnIHEtc3RlcHBlcl9faGVhZGVyLS1ib3JkZXInIDogJycpXG4gICAgICArIChwcm9wcy5jb250cmFjdGVkID09PSB0cnVlID8gJyBxLXN0ZXBwZXJfX2hlYWRlci0tY29udHJhY3RlZCcgOiAnJylcbiAgICAgICsgKHByb3BzLmhlYWRlckNsYXNzICE9PSB2b2lkIDAgPyBgICR7IHByb3BzLmhlYWRlckNsYXNzIH1gIDogJycpXG4gICAgKVxuXG4gICAgZnVuY3Rpb24gZ2V0Q29udGVudCAoKSB7XG4gICAgICBjb25zdCB0b3AgPSBoU2xvdChzbG90cy5tZXNzYWdlLCBbXSlcblxuICAgICAgaWYgKHByb3BzLnZlcnRpY2FsID09PSB0cnVlKSB7XG4gICAgICAgIGlzVmFsaWRQYW5lbE5hbWUocHJvcHMubW9kZWxWYWx1ZSkgJiYgdXBkYXRlUGFuZWxJbmRleCgpXG5cbiAgICAgICAgY29uc3QgY29udGVudCA9IGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3Etc3RlcHBlcl9fY29udGVudCdcbiAgICAgICAgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG5cbiAgICAgICAgcmV0dXJuIHRvcCA9PT0gdm9pZCAwXG4gICAgICAgICAgPyBbIGNvbnRlbnQgXVxuICAgICAgICAgIDogdG9wLmNvbmNhdChjb250ZW50KVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gW1xuICAgICAgICBoKFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgY2xhc3M6IGhlYWRlckNsYXNzZXMudmFsdWUgfSxcbiAgICAgICAgICBnZXRQYW5lbHMoKS5tYXAocGFuZWwgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RlcCA9IGNhbWVsaXplUHJvcHMocGFuZWwucHJvcHMpXG5cbiAgICAgICAgICAgIHJldHVybiBoKFN0ZXBIZWFkZXIsIHtcbiAgICAgICAgICAgICAga2V5OiBzdGVwLm5hbWUsXG4gICAgICAgICAgICAgIHN0ZXBwZXI6IHByb3BzLFxuICAgICAgICAgICAgICBzdGVwLFxuICAgICAgICAgICAgICBnb1RvUGFuZWxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgKSxcblxuICAgICAgICB0b3AsXG5cbiAgICAgICAgaERpcihcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7IGNsYXNzOiAncS1zdGVwcGVyX19jb250ZW50IHEtcGFuZWwtcGFyZW50JyB9LFxuICAgICAgICAgIGdldFBhbmVsQ29udGVudCgpLFxuICAgICAgICAgICdjb250JyxcbiAgICAgICAgICBwcm9wcy5zd2lwZWFibGUsXG4gICAgICAgICAgKCkgPT4gcGFuZWxEaXJlY3RpdmVzLnZhbHVlXG4gICAgICAgIClcbiAgICAgIF1cbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgdXBkYXRlUGFuZWxzTGlzdChzbG90cylcblxuICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWVcbiAgICAgIH0sIGhNZXJnZVNsb3Qoc2xvdHMubmF2aWdhdGlvbiwgZ2V0Q29udGVudCgpKSlcbiAgICB9XG4gIH1cbn0pXG4iXSwibmFtZXMiOlsiaWNvbiIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7O0FBT0EsSUFBQSxhQUFlLGdCQUFnQjtBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUVOLE9BQU87QUFBQSxJQUNMLFNBQVMsQ0FBRTtBQUFBLElBQ1gsTUFBTSxDQUFFO0FBQUEsSUFDUixXQUFXO0FBQUEsRUFDWjtBQUFBLEVBRUQsTUFBTyxPQUFPLEVBQUUsU0FBUztBQUN2QixVQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUksRUFBQSxJQUFLLG1CQUFvQjtBQUM5QyxVQUFNLFVBQVUsSUFBSSxJQUFJO0FBRXhCLFVBQU0sV0FBVyxTQUFTLE1BQU0sTUFBTSxRQUFRLGVBQWUsTUFBTSxLQUFLLElBQUk7QUFFNUUsVUFBTSxZQUFZLFNBQVMsTUFBTTtBQUMvQixZQUFNLE1BQU0sTUFBTSxLQUFLO0FBQ3ZCLGFBQU8sUUFBUSxRQUFRLFFBQVE7QUFBQSxJQUNyQyxDQUFLO0FBRUQsVUFBTSxVQUFVLFNBQVMsTUFBTTtBQUM3QixZQUFNLE1BQU0sTUFBTSxLQUFLO0FBQ3ZCLGFBQU8sUUFBUSxRQUFRLFFBQVE7QUFBQSxJQUNyQyxDQUFLO0FBRUQsVUFBTSxTQUFTLFNBQVMsTUFBTTtBQUM1QixZQUFNLE1BQU0sTUFBTSxLQUFLO0FBQ3ZCLGFBQU8sVUFBVSxVQUFVLFVBQVUsUUFBUSxRQUFRLFFBQVE7QUFBQSxJQUNuRSxDQUFLO0FBRUQsVUFBTSxZQUFZLFNBQVMsTUFBTTtBQUMvQixZQUNFLE1BQU0sTUFBTSxLQUFLLFdBQ2pCLE1BQU0sUUFBUSxRQUFRLFFBQVEsTUFBTSxRQUFRO0FBRTlDLGFBQU8sVUFBVSxVQUFVLFNBQ3RCLE1BQU0sUUFBUSxhQUNkO0FBQUEsSUFDWCxDQUFLO0FBRUQsVUFBTSxZQUFZLFNBQVMsTUFBTTtBQUMvQixhQUFPLE1BQU0sS0FBSyxXQUNaLFNBQVMsVUFBVSxTQUFTLE1BQU0sUUFBUSxlQUFlLFlBQ3pELFFBQVEsVUFBVSxTQUFTLE1BQU0sUUFBUSxjQUFjLFlBQ3ZELE9BQU8sVUFBVSxTQUFTLE1BQU0sUUFBUSxhQUFhO0FBQUEsSUFDakUsQ0FBSztBQUVELFVBQU0sT0FBTyxTQUFTLE1BQU07QUFDMUIsWUFBTSxjQUFjLE1BQU0sS0FBSyxRQUFRLE1BQU0sUUFBUTtBQUVyRCxVQUFJLFNBQVMsVUFBVSxNQUFNO0FBQzNCLGNBQU1BLFFBQU8sTUFBTSxLQUFLLGNBQWMsTUFBTSxRQUFRO0FBQ3BELGVBQU9BLFVBQVMsU0FDWixjQUNBQSxTQUFRLEdBQUcsUUFBUSxRQUFRO0FBQUEsTUFDaEM7QUFFRCxVQUFJLFFBQVEsVUFBVSxNQUFNO0FBQzFCLGNBQU1BLFFBQU8sTUFBTSxLQUFLLGFBQWEsTUFBTSxRQUFRO0FBQ25ELGVBQU9BLFVBQVMsU0FDWixjQUNBQSxTQUFRLEdBQUcsUUFBUSxRQUFRO0FBQUEsTUFDaEM7QUFFRCxVQUFJLFVBQVUsVUFBVSxTQUFTLE9BQU8sVUFBVSxNQUFNO0FBQ3RELGNBQU1BLFFBQU8sTUFBTSxLQUFLLFlBQVksTUFBTSxRQUFRO0FBQ2xELGVBQU9BLFVBQVMsU0FDWixjQUNBQSxTQUFRLEdBQUcsUUFBUSxRQUFRO0FBQUEsTUFDaEM7QUFFRCxhQUFPO0FBQUEsSUFDYixDQUFLO0FBRUQsVUFBTSxRQUFRLFNBQVMsTUFBTTtBQUMzQixZQUFNLGFBQWEsUUFBUSxVQUFVLE9BQ2pDLE1BQU0sS0FBSyxjQUFjLE1BQU0sUUFBUSxhQUN2QztBQUVKLFVBQUksU0FBUyxVQUFVLE1BQU07QUFDM0IsY0FBTUMsU0FBUSxNQUFNLEtBQUssZUFBZSxNQUFNLFFBQVEsZUFBZSxNQUFNLEtBQUs7QUFDaEYsZUFBT0EsV0FBVSxTQUNiQSxTQUNBO0FBQUEsTUFDTDtBQUNELFVBQUksZUFBZSxRQUFRO0FBQ3pCLGVBQU87QUFBQSxNQUNSO0FBQ0QsVUFBSSxVQUFVLFVBQVUsU0FBUyxPQUFPLFVBQVUsTUFBTTtBQUN0RCxlQUFPLE1BQU0sS0FBSyxhQUFhLE1BQU0sUUFBUSxhQUFhLE1BQU0sS0FBSyxTQUFTLE1BQU0sUUFBUTtBQUFBLE1BQzdGO0FBRUQsYUFBTyxNQUFNLEtBQUssU0FBUyxNQUFNLFFBQVE7QUFBQSxJQUMvQyxDQUFLO0FBRUQsVUFBTSxVQUFVLFNBQVMsTUFBTTtBQUM3QixhQUFPLHlFQUNGLE1BQU0sVUFBVSxTQUFTLFNBQVUsTUFBTSxVQUFXLE9BQ3BELFFBQVEsVUFBVSxPQUNqQix3REFBd0QsVUFBVSxVQUFVLE9BQU8sV0FBVyxVQUM5RixPQUNELFNBQVMsVUFBVSxPQUFPLDRCQUE0QixPQUN0RCxPQUFPLFVBQVUsT0FBTywwQkFBMEIsT0FDbEQsVUFBVSxVQUFVLE9BQU8sd0RBQXdELE9BQ25GLFVBQVUsVUFBVSxPQUFPLDhCQUE4QjtBQUFBLElBQ3BFLENBQUs7QUFFRCxVQUFNLFNBQVMsU0FBUyxNQUN0QixNQUFNLFFBQVEsY0FBYyxPQUN4QixRQUNBLFVBQVUsS0FDZjtBQUVELGFBQVMsYUFBYztBQUNyQixjQUFRLFVBQVUsUUFBUSxRQUFRLE1BQU0sTUFBTztBQUMvQyxlQUFTLFVBQVUsU0FBUyxNQUFNLFVBQVUsTUFBTSxLQUFLLElBQUk7QUFBQSxJQUM1RDtBQUVELGFBQVMsUUFBUyxHQUFHO0FBQ25CLFVBQUksRUFBRSxZQUFZLE1BQU0sU0FBUyxVQUFVLE9BQU87QUFDaEQsY0FBTSxVQUFVLE1BQU0sS0FBSyxJQUFJO0FBQUEsTUFDaEM7QUFBQSxJQUNGO0FBRUQsV0FBTyxNQUFNO0FBQ1gsWUFBTSxPQUFPLEVBQUUsT0FBTyxRQUFRLE1BQU87QUFFckMsVUFBSSxVQUFVLFVBQVUsTUFBTTtBQUM1QixhQUFLLFVBQVU7QUFDZixhQUFLLFVBQVU7QUFFZixlQUFPO0FBQUEsVUFBTztBQUFBLFVBQ1osVUFBVSxVQUFVLE9BQ2hCLEVBQUUsVUFBVSxJQUFJLGlCQUFpQixPQUFRLElBQ3pDLEVBQUUsVUFBVSxNQUFNLFlBQVksRUFBRztBQUFBLFFBQ3RDO0FBQUEsTUFDRjtBQUVELFlBQU0sUUFBUTtBQUFBLFFBQ1osRUFBRSxPQUFPLEVBQUUsT0FBTyxrQkFBa0IsVUFBVSxJQUFJLEtBQUssU0FBUztBQUFBLFFBRWhFLEVBQUUsT0FBTyxFQUFFLE9BQU8sbUVBQWtFLEdBQUk7QUFBQSxVQUN0RixFQUFFLFFBQVEsRUFBRSxPQUFPLGtCQUFpQixHQUFJO0FBQUEsWUFDdEMsVUFBVSxVQUFVLE9BQ2hCLE1BQU0sS0FBSyxTQUNYLEVBQUUsT0FBTyxFQUFFLE1BQU0sS0FBSyxNQUFLLENBQUU7QUFBQSxVQUM3QyxDQUFXO0FBQUEsUUFDWCxDQUFTO0FBQUEsTUFDRjtBQUVELFVBQUksTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNO0FBQzVELGNBQU0sVUFBVTtBQUFBLFVBQ2QsRUFBRSxPQUFPLEVBQUUsT0FBTyxtQkFBa0IsR0FBSSxNQUFNLEtBQUssS0FBSztBQUFBLFFBQ3pEO0FBRUQsWUFBSSxNQUFNLEtBQUssWUFBWSxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU07QUFDaEUsa0JBQVE7QUFBQSxZQUNOLEVBQUUsT0FBTyxFQUFFLE9BQU8scUJBQW9CLEdBQUksTUFBTSxLQUFLLE9BQU87QUFBQSxVQUM3RDtBQUFBLFFBQ0Y7QUFFRCxjQUFNO0FBQUEsVUFDSixFQUFFLE9BQU87QUFBQSxZQUNQLE9BQU87QUFBQSxVQUNSLEdBQUUsT0FBTztBQUFBLFFBQ1g7QUFBQSxNQUNGO0FBRUQsYUFBTztBQUFBLFFBQ0wsRUFBRSxPQUFPLE1BQU0sS0FBSztBQUFBLFFBQ3BCLENBQUUsQ0FBRSxRQUFRLE9BQU8sTUFBUztBQUFBLE1BQzdCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDSCxDQUFDO0FDektELFNBQVMsZUFBZ0IsT0FBTztBQUM5QixTQUFPLEVBQUUsT0FBTztBQUFBLElBQ2QsT0FBTztBQUFBLEVBQ1gsR0FBSztBQUFBLElBQ0QsRUFBRSxPQUFPO0FBQUEsTUFDUCxPQUFPO0FBQUEsSUFDYixHQUFPLE1BQU0sTUFBTSxPQUFPLENBQUM7QUFBQSxFQUMzQixDQUFHO0FBQ0g7QUFFQSxNQUFNLGVBQWU7QUFBQSxFQUNuQixNQUFPLEdBQUcsRUFBRSxTQUFTO0FBQ25CLFdBQU8sTUFBTSxlQUFlLEtBQUs7QUFBQSxFQUNsQztBQUNIO0FBRUEsSUFBQSxRQUFlLGdCQUFnQjtBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUVOLE9BQU87QUFBQSxJQUNMLEdBQUc7QUFBQSxJQUVILE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxJQUNYO0FBQUEsSUFDRCxTQUFTO0FBQUEsSUFDVCxRQUFRLENBQUUsUUFBUSxNQUFRO0FBQUEsSUFFMUIsVUFBVTtBQUFBLElBQ1YsV0FBVztBQUFBLElBQ1gsWUFBWTtBQUFBLElBQ1osYUFBYTtBQUFBLElBQ2IsV0FBVztBQUFBLElBQ1gsWUFBWTtBQUFBLElBRVosV0FBVztBQUFBLE1BQ1QsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLElBQ1Y7QUFBQSxJQUNELE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUVQLFVBQVUsQ0FBRSxVQUFVLEtBQU87QUFBQSxFQUM5QjtBQUFBLEVBRUQsTUFBTyxPQUFPLEVBQUUsT0FBTyxLQUFJLEdBQUk7QUFDN0IsVUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFJLEVBQUEsSUFBSyxtQkFBb0I7QUFFOUMsVUFBTSxXQUFXLE9BQU8sWUFBWSxhQUFhO0FBQ2pELFFBQUksYUFBYSxlQUFlO0FBQzlCLGNBQVEsTUFBTSx1Q0FBdUM7QUFDckQsYUFBTztBQUFBLElBQ1I7QUFFRCxVQUFNLEVBQUUsU0FBVSxJQUFHLGVBQWdCO0FBRXJDLFVBQU0sVUFBVSxJQUFJLElBQUk7QUFFeEIsVUFBTSxXQUFXLFNBQVMsTUFBTSxTQUFTLE1BQU0sZUFBZSxNQUFNLElBQUk7QUFFeEUsVUFBTSxjQUFjLFNBQVMsTUFDMUIsR0FBRyxTQUFTLEdBQUcsUUFBUSxRQUFRLEdBQUcsU0FBUyxHQUFHLFdBQVcsUUFDckQsU0FBUyxVQUFVLFFBQ25CLFNBQVMsTUFBTSxhQUFhLE9BQzdCLENBQUUsSUFDRjtBQUFBLE1BQ0UsU0FBVSxHQUFHO0FBQ1gsY0FBTSxFQUFFLE9BQU0sSUFBSztBQUNuQixZQUFJLE9BQU8sWUFBWSxHQUFHO0FBQ3hCLGlCQUFPLFlBQVk7QUFBQSxRQUNwQjtBQUNELGNBQU0sYUFBYSxVQUFVLEtBQUssVUFBVSxDQUFDO0FBQUEsTUFDOUM7QUFBQSxJQUNGLENBQ047QUFFRCxVQUFNLGFBQWEsU0FBUyxNQUMxQixPQUFPLE1BQU0sU0FBUyxZQUFZLE9BQU8sTUFBTSxTQUFTLFdBQ3BELE1BQU0sT0FDTixPQUFPLE1BQU0sSUFBSSxDQUN0QjtBQUVELGFBQVMsaUJBQWtCO0FBQ3pCLFlBQU0sV0FBVyxTQUFTLE1BQU07QUFFaEMsVUFBSSxhQUFhLFFBQVEsU0FBUyxNQUFNLGNBQWMsTUFBTTtBQUMxRCxlQUFPO0FBQUEsVUFDTDtBQUFBLFVBQ0EsU0FBUyxNQUFNLGVBQWU7QUFBQSxVQUM5QixTQUFTLFVBQVUsT0FDZjtBQUFBLFlBQ0U7QUFBQSxjQUNFLFNBQVMsTUFBTSw0QkFBNEIsVUFBVSxPQUNqRCxTQUFTLFdBQVcsT0FBTyxPQUFPLEVBQUUsR0FBRyxjQUFjLE1BQU0sV0FBVyxNQUFLLEVBQUcsSUFDOUU7QUFBQSxjQUNKLEVBQUUsS0FBSyxXQUFXLE1BQU87QUFBQSxjQUN6QixNQUFNO0FBQUEsWUFDUDtBQUFBLFVBQ0YsSUFDRDtBQUFBLFFBQ0w7QUFBQSxNQUNGO0FBRUQsYUFBTyxhQUFhLFFBQVEsU0FBUyxVQUFVLE9BQzNDLGVBQWUsS0FBSyxJQUNwQjtBQUFBLElBQ0w7QUFFRCxXQUFPLE1BQU07QUFBQSxNQUNYO0FBQUEsTUFDQSxFQUFFLEtBQUssU0FBUyxPQUFPLG1CQUFtQixNQUFNLFlBQVksR0FBRyxZQUFZLE1BQU87QUFBQSxNQUNsRixTQUFTLE1BQU0sYUFBYSxPQUN4QjtBQUFBLFFBQ0UsRUFBRSxZQUFZO0FBQUEsVUFDWixTQUFTLFNBQVM7QUFBQSxVQUNsQixNQUFNO0FBQUEsVUFDTixXQUFXLFNBQVMsTUFBTTtBQUFBLFFBQ3hDLENBQWE7QUFBQSxRQUVELFNBQVMsTUFBTSxhQUFhLE9BQ3hCLEVBQUUsa0JBQWtCLGNBQWMsSUFDbEMsZUFBZ0I7QUFBQSxNQUNyQixJQUNELENBQUUsZUFBYyxDQUFJO0FBQUEsSUFDekI7QUFBQSxFQUNGO0FBQ0gsQ0FBQztBQ2xJRCxNQUFNLFVBQVU7QUFFaEIsU0FBUyxjQUFlLE9BQU87QUFDN0IsUUFBTSxNQUFNLENBQUU7QUFDZCxhQUFXLE9BQU8sT0FBTztBQUN2QixVQUFNLFNBQVMsSUFBSSxRQUFRLFNBQVMsT0FBSyxFQUFHLEdBQUksYUFBYTtBQUM3RCxRQUFLLFVBQVcsTUFBTztBQUFBLEVBQ3hCO0FBQ0QsU0FBTztBQUNUO0FBRUEsSUFBQSxXQUFlLGdCQUFnQjtBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUVOLE9BQU87QUFBQSxJQUNMLEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUVILE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxJQUNWLG1CQUFtQjtBQUFBLElBQ25CLFdBQVc7QUFBQSxJQUNYLFlBQVk7QUFBQSxJQUNaLGFBQWE7QUFBQSxJQUViLGVBQWU7QUFBQSxJQUNmLGNBQWM7QUFBQSxJQUNkLFVBQVU7QUFBQSxJQUNWLFdBQVc7QUFBQSxJQUNYLFlBQVk7QUFBQSxJQUNaLGFBQWE7QUFBQSxJQUNiLFdBQVc7QUFBQSxJQUNYLFlBQVk7QUFBQSxFQUNiO0FBQUEsRUFFRCxPQUFPO0FBQUEsRUFFUCxNQUFPLE9BQU8sRUFBRSxTQUFTO0FBQ3ZCLFVBQU0sS0FBSyxtQkFBb0I7QUFDL0IsVUFBTSxTQUFTLFFBQVEsT0FBTyxHQUFHLE1BQU0sRUFBRTtBQUV6QyxVQUFNO0FBQUEsTUFDSjtBQUFBLE1BQWtCO0FBQUEsTUFDbEI7QUFBQSxNQUFrQjtBQUFBLE1BQ2xCO0FBQUEsTUFBVztBQUFBLE1BQWlCO0FBQUEsTUFDNUI7QUFBQSxNQUFnQjtBQUFBLElBQ2pCLElBQUcsU0FBVTtBQUVkLFlBQVEsWUFBWSxTQUFTLE9BQU87QUFBQSxNQUNsQztBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQSxHQUFHO0FBQUEsSUFDSixFQUFDLENBQUM7QUFFSCxVQUFNLFVBQVU7QUFBQSxNQUFTLE1BQ3ZCLHdCQUF5QixNQUFNLGFBQWEsT0FBTyxhQUFhLGtCQUM3RCxNQUFNLFNBQVMsT0FBTyxxQkFBcUIsT0FDM0MsTUFBTSxhQUFhLE9BQU8seUJBQXlCLE9BQ25ELE9BQU8sVUFBVSxPQUFPLDRCQUE0QjtBQUFBLElBQ3hEO0FBRUQsVUFBTSxnQkFBZ0I7QUFBQSxNQUFTLE1BQzdCLDBFQUMwQixNQUFNLHNCQUFzQixPQUFPLGdCQUFnQix1QkFDMUUsTUFBTSxTQUFTLFNBQVMsTUFBTSxhQUFhLE9BQU8sK0JBQStCLE9BQ2pGLE1BQU0sZUFBZSxPQUFPLG1DQUFtQyxPQUMvRCxNQUFNLGdCQUFnQixTQUFTLElBQUssTUFBTSxnQkFBaUI7QUFBQSxJQUMvRDtBQUVELGFBQVMsYUFBYztBQUNyQixZQUFNLE1BQU0sTUFBTSxNQUFNLFNBQVMsQ0FBQSxDQUFFO0FBRW5DLFVBQUksTUFBTSxhQUFhLE1BQU07QUFDM0IseUJBQWlCLE1BQU0sVUFBVSxLQUFLLGlCQUFrQjtBQUV4RCxjQUFNLFVBQVUsRUFBRSxPQUFPO0FBQUEsVUFDdkIsT0FBTztBQUFBLFFBQ2pCLEdBQVcsTUFBTSxNQUFNLE9BQU8sQ0FBQztBQUV2QixlQUFPLFFBQVEsU0FDWCxDQUFFLE9BQVMsSUFDWCxJQUFJLE9BQU8sT0FBTztBQUFBLE1BQ3ZCO0FBRUQsYUFBTztBQUFBLFFBQ0w7QUFBQSxVQUNFO0FBQUEsVUFDQSxFQUFFLE9BQU8sY0FBYyxNQUFPO0FBQUEsVUFDOUIsVUFBVyxFQUFDLElBQUksV0FBUztBQUN2QixrQkFBTSxPQUFPLGNBQWMsTUFBTSxLQUFLO0FBRXRDLG1CQUFPLEVBQUUsWUFBWTtBQUFBLGNBQ25CLEtBQUssS0FBSztBQUFBLGNBQ1YsU0FBUztBQUFBLGNBQ1Q7QUFBQSxjQUNBO0FBQUEsWUFDZCxDQUFhO0FBQUEsVUFDYixDQUFXO0FBQUEsUUFDRjtBQUFBLFFBRUQ7QUFBQSxRQUVBO0FBQUEsVUFDRTtBQUFBLFVBQ0EsRUFBRSxPQUFPLG9DQUFxQztBQUFBLFVBQzlDLGdCQUFpQjtBQUFBLFVBQ2pCO0FBQUEsVUFDQSxNQUFNO0FBQUEsVUFDTixNQUFNLGdCQUFnQjtBQUFBLFFBQ3ZCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFFRCxXQUFPLE1BQU07QUFDWCx1QkFBaUIsS0FBSztBQUV0QixhQUFPLEVBQUUsT0FBTztBQUFBLFFBQ2QsT0FBTyxRQUFRO0FBQUEsTUFDaEIsR0FBRSxXQUFXLE1BQU0sWUFBWSxXQUFZLENBQUEsQ0FBQztBQUFBLElBQzlDO0FBQUEsRUFDRjtBQUNILENBQUM7OyJ9
