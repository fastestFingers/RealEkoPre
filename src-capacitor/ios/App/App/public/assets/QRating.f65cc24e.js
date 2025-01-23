import { v as createComponent, b5 as useSizeProps, a$ as useFormProps, b6 as useSize, bf as useFormAttrs, r as ref, c as computed, a4 as onBeforeUpdate, h, H as hMergeSlot, at as QIcon, g as getCurrentInstance, b1 as useFormInject, as as stopAndPrevent } from "./index.61ed5618.js";
import { b as between } from "./format.7f7370d3.js";
var QRating = createComponent({
  name: "QRating",
  props: {
    ...useSizeProps,
    ...useFormProps,
    modelValue: {
      type: Number,
      required: true
    },
    max: {
      type: [String, Number],
      default: 5
    },
    icon: [String, Array],
    iconHalf: [String, Array],
    iconSelected: [String, Array],
    iconAriaLabel: [String, Array],
    color: [String, Array],
    colorHalf: [String, Array],
    colorSelected: [String, Array],
    noReset: Boolean,
    noDimming: Boolean,
    readonly: Boolean,
    disable: Boolean
  },
  emits: ["update:modelValue"],
  setup(props, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const sizeStyle = useSize(props);
    const formAttrs = useFormAttrs(props);
    const injectFormInput = useFormInject(formAttrs);
    const mouseModel = ref(0);
    let iconRefs = {};
    const editable = computed(
      () => props.readonly !== true && props.disable !== true
    );
    const classes = computed(
      () => `q-rating row inline items-center q-rating--${editable.value === true ? "" : "non-"}editable` + (props.noDimming === true ? " q-rating--no-dimming" : "") + (props.disable === true ? " disabled" : "") + (props.color !== void 0 && Array.isArray(props.color) === false ? ` text-${props.color}` : "")
    );
    const iconData = computed(() => {
      const iconLen = Array.isArray(props.icon) === true ? props.icon.length : 0, selIconLen = Array.isArray(props.iconSelected) === true ? props.iconSelected.length : 0, halfIconLen = Array.isArray(props.iconHalf) === true ? props.iconHalf.length : 0, colorLen = Array.isArray(props.color) === true ? props.color.length : 0, selColorLen = Array.isArray(props.colorSelected) === true ? props.colorSelected.length : 0, halfColorLen = Array.isArray(props.colorHalf) === true ? props.colorHalf.length : 0;
      return {
        iconLen,
        icon: iconLen > 0 ? props.icon[iconLen - 1] : props.icon,
        selIconLen,
        selIcon: selIconLen > 0 ? props.iconSelected[selIconLen - 1] : props.iconSelected,
        halfIconLen,
        halfIcon: halfIconLen > 0 ? props.iconHalf[selIconLen - 1] : props.iconHalf,
        colorLen,
        color: colorLen > 0 ? props.color[colorLen - 1] : props.color,
        selColorLen,
        selColor: selColorLen > 0 ? props.colorSelected[selColorLen - 1] : props.colorSelected,
        halfColorLen,
        halfColor: halfColorLen > 0 ? props.colorHalf[halfColorLen - 1] : props.colorHalf
      };
    });
    const iconLabel = computed(() => {
      if (typeof props.iconAriaLabel === "string") {
        const label = props.iconAriaLabel.length !== 0 ? `${props.iconAriaLabel} ` : "";
        return (i) => `${label}${i}`;
      }
      if (Array.isArray(props.iconAriaLabel) === true) {
        const iMax = props.iconAriaLabel.length;
        if (iMax > 0) {
          return (i) => props.iconAriaLabel[Math.min(i, iMax) - 1];
        }
      }
      return (i, label) => `${label} ${i}`;
    });
    const stars = computed(() => {
      const acc = [], icons = iconData.value, ceil = Math.ceil(props.modelValue), tabindex = editable.value === true ? 0 : null;
      const halfIndex = props.iconHalf === void 0 || ceil === props.modelValue ? -1 : ceil;
      for (let i = 1; i <= props.max; i++) {
        const active = mouseModel.value === 0 && props.modelValue >= i || mouseModel.value > 0 && mouseModel.value >= i, half = halfIndex === i && mouseModel.value < i, exSelected = mouseModel.value > 0 && (half === true ? ceil : props.modelValue) >= i && mouseModel.value < i, color = half === true ? i <= icons.halfColorLen ? props.colorHalf[i - 1] : icons.halfColor : icons.selColor !== void 0 && active === true ? i <= icons.selColorLen ? props.colorSelected[i - 1] : icons.selColor : i <= icons.colorLen ? props.color[i - 1] : icons.color, name = (half === true ? i <= icons.halfIconLen ? props.iconHalf[i - 1] : icons.halfIcon : icons.selIcon !== void 0 && (active === true || exSelected === true) ? i <= icons.selIconLen ? props.iconSelected[i - 1] : icons.selIcon : i <= icons.iconLen ? props.icon[i - 1] : icons.icon) || $q.iconSet.rating.icon;
        acc.push({
          name: (half === true ? i <= icons.halfIconLen ? props.iconHalf[i - 1] : icons.halfIcon : icons.selIcon !== void 0 && (active === true || exSelected === true) ? i <= icons.selIconLen ? props.iconSelected[i - 1] : icons.selIcon : i <= icons.iconLen ? props.icon[i - 1] : icons.icon) || $q.iconSet.rating.icon,
          attrs: {
            tabindex,
            role: "radio",
            "aria-checked": props.modelValue === i ? "true" : "false",
            "aria-label": iconLabel.value(i, name)
          },
          iconClass: "q-rating__icon" + (active === true || half === true ? " q-rating__icon--active" : "") + (exSelected === true ? " q-rating__icon--exselected" : "") + (mouseModel.value === i ? " q-rating__icon--hovered" : "") + (color !== void 0 ? ` text-${color}` : "")
        });
      }
      return acc;
    });
    const attributes = computed(() => {
      const attrs = { role: "radiogroup" };
      if (props.disable === true) {
        attrs["aria-disabled"] = "true";
      }
      if (props.readonly === true) {
        attrs["aria-readonly"] = "true";
      }
      return attrs;
    });
    function set(value) {
      if (editable.value === true) {
        const model = between(parseInt(value, 10), 1, parseInt(props.max, 10)), newVal = props.noReset !== true && props.modelValue === model ? 0 : model;
        newVal !== props.modelValue && emit("update:modelValue", newVal);
        mouseModel.value = 0;
      }
    }
    function setHoverValue(value) {
      if (editable.value === true) {
        mouseModel.value = value;
      }
    }
    function onKeyup(e, i) {
      switch (e.keyCode) {
        case 13:
        case 32:
          set(i);
          return stopAndPrevent(e);
        case 37:
        case 40:
          if (iconRefs[`rt${i - 1}`]) {
            iconRefs[`rt${i - 1}`].focus();
          }
          return stopAndPrevent(e);
        case 39:
        case 38:
          if (iconRefs[`rt${i + 1}`]) {
            iconRefs[`rt${i + 1}`].focus();
          }
          return stopAndPrevent(e);
      }
    }
    function resetMouseModel() {
      mouseModel.value = 0;
    }
    onBeforeUpdate(() => {
      iconRefs = {};
    });
    return () => {
      const child = [];
      stars.value.forEach(({ iconClass, name, attrs }, index) => {
        const i = index + 1;
        child.push(
          h("div", {
            key: i,
            ref: (el) => {
              iconRefs[`rt${i}`] = el;
            },
            class: "q-rating__icon-container flex flex-center",
            ...attrs,
            onClick() {
              set(i);
            },
            onMouseover() {
              setHoverValue(i);
            },
            onMouseout: resetMouseModel,
            onFocus() {
              setHoverValue(i);
            },
            onBlur: resetMouseModel,
            onKeyup(e) {
              onKeyup(e, i);
            }
          }, hMergeSlot(
            slots[`tip-${i}`],
            [h(QIcon, { class: iconClass, name })]
          ))
        );
      });
      if (props.name !== void 0 && props.disable !== true) {
        injectFormInput(child, "push");
      }
      return h("div", {
        class: classes.value,
        style: sizeStyle.value,
        ...attributes.value
      }, child);
    };
  }
});
export { QRating as Q };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUVJhdGluZy5mNjVjYzI0ZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9yYXRpbmcvUVJhdGluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCBvbkJlZm9yZVVwZGF0ZSwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUUljb24gZnJvbSAnLi4vaWNvbi9RSWNvbi5qcydcblxuaW1wb3J0IHVzZVNpemUsIHsgdXNlU2l6ZVByb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS51c2Utc2l6ZS91c2Utc2l6ZS5qcydcbmltcG9ydCB7IHVzZUZvcm1Qcm9wcywgdXNlRm9ybUF0dHJzLCB1c2VGb3JtSW5qZWN0IH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvdXNlLWZvcm0vcHJpdmF0ZS51c2UtZm9ybS5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgc3RvcEFuZFByZXZlbnQgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC9ldmVudC5qcydcbmltcG9ydCB7IGJldHdlZW4gfSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXQvZm9ybWF0LmpzJ1xuaW1wb3J0IHsgaE1lcmdlU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUucmVuZGVyL3JlbmRlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FSYXRpbmcnLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlU2l6ZVByb3BzLFxuICAgIC4uLnVzZUZvcm1Qcm9wcyxcblxuICAgIG1vZGVsVmFsdWU6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcblxuICAgIG1heDoge1xuICAgICAgdHlwZTogWyBTdHJpbmcsIE51bWJlciBdLFxuICAgICAgZGVmYXVsdDogNVxuICAgIH0sXG5cbiAgICBpY29uOiBbIFN0cmluZywgQXJyYXkgXSxcbiAgICBpY29uSGFsZjogWyBTdHJpbmcsIEFycmF5IF0sXG4gICAgaWNvblNlbGVjdGVkOiBbIFN0cmluZywgQXJyYXkgXSxcblxuICAgIGljb25BcmlhTGFiZWw6IFsgU3RyaW5nLCBBcnJheSBdLFxuXG4gICAgY29sb3I6IFsgU3RyaW5nLCBBcnJheSBdLFxuICAgIGNvbG9ySGFsZjogWyBTdHJpbmcsIEFycmF5IF0sXG4gICAgY29sb3JTZWxlY3RlZDogWyBTdHJpbmcsIEFycmF5IF0sXG5cbiAgICBub1Jlc2V0OiBCb29sZWFuLFxuICAgIG5vRGltbWluZzogQm9vbGVhbixcblxuICAgIHJlYWRvbmx5OiBCb29sZWFuLFxuICAgIGRpc2FibGU6IEJvb2xlYW5cbiAgfSxcblxuICBlbWl0czogWyAndXBkYXRlOm1vZGVsVmFsdWUnIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgICBjb25zdCBzaXplU3R5bGUgPSB1c2VTaXplKHByb3BzKVxuICAgIGNvbnN0IGZvcm1BdHRycyA9IHVzZUZvcm1BdHRycyhwcm9wcylcbiAgICBjb25zdCBpbmplY3RGb3JtSW5wdXQgPSB1c2VGb3JtSW5qZWN0KGZvcm1BdHRycylcblxuICAgIGNvbnN0IG1vdXNlTW9kZWwgPSByZWYoMClcblxuICAgIGxldCBpY29uUmVmcyA9IHt9XG5cbiAgICBjb25zdCBlZGl0YWJsZSA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5yZWFkb25seSAhPT0gdHJ1ZSAmJiBwcm9wcy5kaXNhYmxlICE9PSB0cnVlXG4gICAgKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1yYXRpbmcgcm93IGlubGluZSBpdGVtcy1jZW50ZXInXG4gICAgICArIGAgcS1yYXRpbmctLSR7IGVkaXRhYmxlLnZhbHVlID09PSB0cnVlID8gJycgOiAnbm9uLScgfWVkaXRhYmxlYFxuICAgICAgKyAocHJvcHMubm9EaW1taW5nID09PSB0cnVlID8gJyBxLXJhdGluZy0tbm8tZGltbWluZycgOiAnJylcbiAgICAgICsgKHByb3BzLmRpc2FibGUgPT09IHRydWUgPyAnIGRpc2FibGVkJyA6ICcnKVxuICAgICAgKyAoXG4gICAgICAgIHByb3BzLmNvbG9yICE9PSB2b2lkIDAgJiYgQXJyYXkuaXNBcnJheShwcm9wcy5jb2xvcikgPT09IGZhbHNlXG4gICAgICAgICAgPyBgIHRleHQtJHsgcHJvcHMuY29sb3IgfWBcbiAgICAgICAgICA6ICcnXG4gICAgICApXG4gICAgKVxuXG4gICAgY29uc3QgaWNvbkRhdGEgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdFxuICAgICAgICBpY29uTGVuID0gQXJyYXkuaXNBcnJheShwcm9wcy5pY29uKSA9PT0gdHJ1ZSA/IHByb3BzLmljb24ubGVuZ3RoIDogMCxcbiAgICAgICAgc2VsSWNvbkxlbiA9IEFycmF5LmlzQXJyYXkocHJvcHMuaWNvblNlbGVjdGVkKSA9PT0gdHJ1ZSA/IHByb3BzLmljb25TZWxlY3RlZC5sZW5ndGggOiAwLFxuICAgICAgICBoYWxmSWNvbkxlbiA9IEFycmF5LmlzQXJyYXkocHJvcHMuaWNvbkhhbGYpID09PSB0cnVlID8gcHJvcHMuaWNvbkhhbGYubGVuZ3RoIDogMCxcbiAgICAgICAgY29sb3JMZW4gPSBBcnJheS5pc0FycmF5KHByb3BzLmNvbG9yKSA9PT0gdHJ1ZSA/IHByb3BzLmNvbG9yLmxlbmd0aCA6IDAsXG4gICAgICAgIHNlbENvbG9yTGVuID0gQXJyYXkuaXNBcnJheShwcm9wcy5jb2xvclNlbGVjdGVkKSA9PT0gdHJ1ZSA/IHByb3BzLmNvbG9yU2VsZWN0ZWQubGVuZ3RoIDogMCxcbiAgICAgICAgaGFsZkNvbG9yTGVuID0gQXJyYXkuaXNBcnJheShwcm9wcy5jb2xvckhhbGYpID09PSB0cnVlID8gcHJvcHMuY29sb3JIYWxmLmxlbmd0aCA6IDBcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWNvbkxlbixcbiAgICAgICAgaWNvbjogaWNvbkxlbiA+IDAgPyBwcm9wcy5pY29uWyBpY29uTGVuIC0gMSBdIDogcHJvcHMuaWNvbixcbiAgICAgICAgc2VsSWNvbkxlbixcbiAgICAgICAgc2VsSWNvbjogc2VsSWNvbkxlbiA+IDAgPyBwcm9wcy5pY29uU2VsZWN0ZWRbIHNlbEljb25MZW4gLSAxIF0gOiBwcm9wcy5pY29uU2VsZWN0ZWQsXG4gICAgICAgIGhhbGZJY29uTGVuLFxuICAgICAgICBoYWxmSWNvbjogaGFsZkljb25MZW4gPiAwID8gcHJvcHMuaWNvbkhhbGZbIHNlbEljb25MZW4gLSAxIF0gOiBwcm9wcy5pY29uSGFsZixcbiAgICAgICAgY29sb3JMZW4sXG4gICAgICAgIGNvbG9yOiBjb2xvckxlbiA+IDAgPyBwcm9wcy5jb2xvclsgY29sb3JMZW4gLSAxIF0gOiBwcm9wcy5jb2xvcixcbiAgICAgICAgc2VsQ29sb3JMZW4sXG4gICAgICAgIHNlbENvbG9yOiBzZWxDb2xvckxlbiA+IDAgPyBwcm9wcy5jb2xvclNlbGVjdGVkWyBzZWxDb2xvckxlbiAtIDEgXSA6IHByb3BzLmNvbG9yU2VsZWN0ZWQsXG4gICAgICAgIGhhbGZDb2xvckxlbixcbiAgICAgICAgaGFsZkNvbG9yOiBoYWxmQ29sb3JMZW4gPiAwID8gcHJvcHMuY29sb3JIYWxmWyBoYWxmQ29sb3JMZW4gLSAxIF0gOiBwcm9wcy5jb2xvckhhbGZcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgaWNvbkxhYmVsID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBwcm9wcy5pY29uQXJpYUxhYmVsID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zdCBsYWJlbCA9IHByb3BzLmljb25BcmlhTGFiZWwubGVuZ3RoICE9PSAwID8gYCR7IHByb3BzLmljb25BcmlhTGFiZWwgfSBgIDogJydcbiAgICAgICAgcmV0dXJuIGkgPT4gYCR7IGxhYmVsIH0keyBpIH1gXG4gICAgICB9XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BzLmljb25BcmlhTGFiZWwpID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IGlNYXggPSBwcm9wcy5pY29uQXJpYUxhYmVsLmxlbmd0aFxuXG4gICAgICAgIGlmIChpTWF4ID4gMCkge1xuICAgICAgICAgIHJldHVybiBpID0+IHByb3BzLmljb25BcmlhTGFiZWxbIE1hdGgubWluKGksIGlNYXgpIC0gMSBdXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChpLCBsYWJlbCkgPT4gYCR7IGxhYmVsIH0gJHsgaSB9YFxuICAgIH0pXG5cbiAgICBjb25zdCBzdGFycyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0XG4gICAgICAgIGFjYyA9IFtdLFxuICAgICAgICBpY29ucyA9IGljb25EYXRhLnZhbHVlLFxuICAgICAgICBjZWlsID0gTWF0aC5jZWlsKHByb3BzLm1vZGVsVmFsdWUpLFxuICAgICAgICB0YWJpbmRleCA9IGVkaXRhYmxlLnZhbHVlID09PSB0cnVlID8gMCA6IG51bGxcblxuICAgICAgY29uc3QgaGFsZkluZGV4ID0gcHJvcHMuaWNvbkhhbGYgPT09IHZvaWQgMCB8fCBjZWlsID09PSBwcm9wcy5tb2RlbFZhbHVlXG4gICAgICAgID8gLTFcbiAgICAgICAgOiBjZWlsXG5cbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHByb3BzLm1heDsgaSsrKSB7XG4gICAgICAgIGNvbnN0XG4gICAgICAgICAgYWN0aXZlID0gKG1vdXNlTW9kZWwudmFsdWUgPT09IDAgJiYgcHJvcHMubW9kZWxWYWx1ZSA+PSBpKSB8fCAobW91c2VNb2RlbC52YWx1ZSA+IDAgJiYgbW91c2VNb2RlbC52YWx1ZSA+PSBpKSxcbiAgICAgICAgICBoYWxmID0gaGFsZkluZGV4ID09PSBpICYmIG1vdXNlTW9kZWwudmFsdWUgPCBpLFxuICAgICAgICAgIGV4U2VsZWN0ZWQgPSBtb3VzZU1vZGVsLnZhbHVlID4gMCAmJiAoaGFsZiA9PT0gdHJ1ZSA/IGNlaWwgOiBwcm9wcy5tb2RlbFZhbHVlKSA+PSBpICYmIG1vdXNlTW9kZWwudmFsdWUgPCBpLFxuICAgICAgICAgIGNvbG9yID0gaGFsZiA9PT0gdHJ1ZVxuICAgICAgICAgICAgPyAoaSA8PSBpY29ucy5oYWxmQ29sb3JMZW4gPyBwcm9wcy5jb2xvckhhbGZbIGkgLSAxIF0gOiBpY29ucy5oYWxmQ29sb3IpXG4gICAgICAgICAgICA6IChcbiAgICAgICAgICAgICAgICBpY29ucy5zZWxDb2xvciAhPT0gdm9pZCAwICYmIGFjdGl2ZSA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgPyAoaSA8PSBpY29ucy5zZWxDb2xvckxlbiA/IHByb3BzLmNvbG9yU2VsZWN0ZWRbIGkgLSAxIF0gOiBpY29ucy5zZWxDb2xvcilcbiAgICAgICAgICAgICAgICAgIDogKGkgPD0gaWNvbnMuY29sb3JMZW4gPyBwcm9wcy5jb2xvclsgaSAtIDEgXSA6IGljb25zLmNvbG9yKVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgIG5hbWUgPSAoXG4gICAgICAgICAgICBoYWxmID09PSB0cnVlXG4gICAgICAgICAgICAgID8gKGkgPD0gaWNvbnMuaGFsZkljb25MZW4gPyBwcm9wcy5pY29uSGFsZlsgaSAtIDEgXSA6IGljb25zLmhhbGZJY29uKVxuICAgICAgICAgICAgICA6IChcbiAgICAgICAgICAgICAgICAgIGljb25zLnNlbEljb24gIT09IHZvaWQgMCAmJiAoYWN0aXZlID09PSB0cnVlIHx8IGV4U2VsZWN0ZWQgPT09IHRydWUpXG4gICAgICAgICAgICAgICAgICAgID8gKGkgPD0gaWNvbnMuc2VsSWNvbkxlbiA/IHByb3BzLmljb25TZWxlY3RlZFsgaSAtIDEgXSA6IGljb25zLnNlbEljb24pXG4gICAgICAgICAgICAgICAgICAgIDogKGkgPD0gaWNvbnMuaWNvbkxlbiA/IHByb3BzLmljb25bIGkgLSAxIF0gOiBpY29ucy5pY29uKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICApIHx8ICRxLmljb25TZXQucmF0aW5nLmljb25cblxuICAgICAgICBhY2MucHVzaCh7XG4gICAgICAgICAgbmFtZTogKFxuICAgICAgICAgICAgaGFsZiA9PT0gdHJ1ZVxuICAgICAgICAgICAgICA/IChpIDw9IGljb25zLmhhbGZJY29uTGVuID8gcHJvcHMuaWNvbkhhbGZbIGkgLSAxIF0gOiBpY29ucy5oYWxmSWNvbilcbiAgICAgICAgICAgICAgOiAoXG4gICAgICAgICAgICAgICAgICBpY29ucy5zZWxJY29uICE9PSB2b2lkIDAgJiYgKGFjdGl2ZSA9PT0gdHJ1ZSB8fCBleFNlbGVjdGVkID09PSB0cnVlKVxuICAgICAgICAgICAgICAgICAgICA/IChpIDw9IGljb25zLnNlbEljb25MZW4gPyBwcm9wcy5pY29uU2VsZWN0ZWRbIGkgLSAxIF0gOiBpY29ucy5zZWxJY29uKVxuICAgICAgICAgICAgICAgICAgICA6IChpIDw9IGljb25zLmljb25MZW4gPyBwcm9wcy5pY29uWyBpIC0gMSBdIDogaWNvbnMuaWNvbilcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgKSB8fCAkcS5pY29uU2V0LnJhdGluZy5pY29uLFxuXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHRhYmluZGV4LFxuICAgICAgICAgICAgcm9sZTogJ3JhZGlvJyxcbiAgICAgICAgICAgICdhcmlhLWNoZWNrZWQnOiBwcm9wcy5tb2RlbFZhbHVlID09PSBpID8gJ3RydWUnIDogJ2ZhbHNlJyxcbiAgICAgICAgICAgICdhcmlhLWxhYmVsJzogaWNvbkxhYmVsLnZhbHVlKGksIG5hbWUpXG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGljb25DbGFzczogJ3EtcmF0aW5nX19pY29uJ1xuICAgICAgICAgICAgKyAoYWN0aXZlID09PSB0cnVlIHx8IGhhbGYgPT09IHRydWUgPyAnIHEtcmF0aW5nX19pY29uLS1hY3RpdmUnIDogJycpXG4gICAgICAgICAgICArIChleFNlbGVjdGVkID09PSB0cnVlID8gJyBxLXJhdGluZ19faWNvbi0tZXhzZWxlY3RlZCcgOiAnJylcbiAgICAgICAgICAgICsgKG1vdXNlTW9kZWwudmFsdWUgPT09IGkgPyAnIHEtcmF0aW5nX19pY29uLS1ob3ZlcmVkJyA6ICcnKVxuICAgICAgICAgICAgKyAoY29sb3IgIT09IHZvaWQgMCA/IGAgdGV4dC0keyBjb2xvciB9YCA6ICcnKVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjXG4gICAgfSlcblxuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBhdHRycyA9IHsgcm9sZTogJ3JhZGlvZ3JvdXAnIH1cblxuICAgICAgaWYgKHByb3BzLmRpc2FibGUgPT09IHRydWUpIHtcbiAgICAgICAgYXR0cnNbICdhcmlhLWRpc2FibGVkJyBdID0gJ3RydWUnXG4gICAgICB9XG4gICAgICBpZiAocHJvcHMucmVhZG9ubHkgPT09IHRydWUpIHtcbiAgICAgICAgYXR0cnNbICdhcmlhLXJlYWRvbmx5JyBdID0gJ3RydWUnXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhdHRyc1xuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBzZXQgKHZhbHVlKSB7XG4gICAgICBpZiAoZWRpdGFibGUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3RcbiAgICAgICAgICBtb2RlbCA9IGJldHdlZW4ocGFyc2VJbnQodmFsdWUsIDEwKSwgMSwgcGFyc2VJbnQocHJvcHMubWF4LCAxMCkpLFxuICAgICAgICAgIG5ld1ZhbCA9IHByb3BzLm5vUmVzZXQgIT09IHRydWUgJiYgcHJvcHMubW9kZWxWYWx1ZSA9PT0gbW9kZWwgPyAwIDogbW9kZWxcblxuICAgICAgICBuZXdWYWwgIT09IHByb3BzLm1vZGVsVmFsdWUgJiYgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCBuZXdWYWwpXG4gICAgICAgIG1vdXNlTW9kZWwudmFsdWUgPSAwXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0SG92ZXJWYWx1ZSAodmFsdWUpIHtcbiAgICAgIGlmIChlZGl0YWJsZS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBtb3VzZU1vZGVsLnZhbHVlID0gdmFsdWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbktleXVwIChlLCBpKSB7XG4gICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICBjYXNlIDEzOlxuICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgIHNldChpKVxuICAgICAgICAgIHJldHVybiBzdG9wQW5kUHJldmVudChlKVxuICAgICAgICBjYXNlIDM3OiAvLyBMRUZUIEFSUk9XXG4gICAgICAgIGNhc2UgNDA6IC8vIERPV04gQVJST1dcbiAgICAgICAgICBpZiAoaWNvblJlZnNbIGBydCR7IGkgLSAxIH1gIF0pIHtcbiAgICAgICAgICAgIGljb25SZWZzWyBgcnQkeyBpIC0gMSB9YCBdLmZvY3VzKClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHN0b3BBbmRQcmV2ZW50KGUpXG4gICAgICAgIGNhc2UgMzk6IC8vIFJJR0hUIEFSUk9XXG4gICAgICAgIGNhc2UgMzg6IC8vIFVQIEFSUk9XXG4gICAgICAgICAgaWYgKGljb25SZWZzWyBgcnQkeyBpICsgMSB9YCBdKSB7XG4gICAgICAgICAgICBpY29uUmVmc1sgYHJ0JHsgaSArIDEgfWAgXS5mb2N1cygpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBzdG9wQW5kUHJldmVudChlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0TW91c2VNb2RlbCAoKSB7XG4gICAgICBtb3VzZU1vZGVsLnZhbHVlID0gMFxuICAgIH1cblxuICAgIG9uQmVmb3JlVXBkYXRlKCgpID0+IHtcbiAgICAgIGljb25SZWZzID0ge31cbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gW11cblxuICAgICAgc3RhcnMudmFsdWUuZm9yRWFjaCgoeyBpY29uQ2xhc3MsIG5hbWUsIGF0dHJzIH0sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGkgPSBpbmRleCArIDFcblxuICAgICAgICBjaGlsZC5wdXNoKFxuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGtleTogaSxcbiAgICAgICAgICAgIHJlZjogZWwgPT4geyBpY29uUmVmc1sgYHJ0JHsgaSB9YCBdID0gZWwgfSxcbiAgICAgICAgICAgIGNsYXNzOiAncS1yYXRpbmdfX2ljb24tY29udGFpbmVyIGZsZXggZmxleC1jZW50ZXInLFxuICAgICAgICAgICAgLi4uYXR0cnMsXG4gICAgICAgICAgICBvbkNsaWNrICgpIHsgc2V0KGkpIH0sXG4gICAgICAgICAgICBvbk1vdXNlb3ZlciAoKSB7IHNldEhvdmVyVmFsdWUoaSkgfSxcbiAgICAgICAgICAgIG9uTW91c2VvdXQ6IHJlc2V0TW91c2VNb2RlbCxcbiAgICAgICAgICAgIG9uRm9jdXMgKCkgeyBzZXRIb3ZlclZhbHVlKGkpIH0sXG4gICAgICAgICAgICBvbkJsdXI6IHJlc2V0TW91c2VNb2RlbCxcbiAgICAgICAgICAgIG9uS2V5dXAgKGUpIHsgb25LZXl1cChlLCBpKSB9XG4gICAgICAgICAgfSwgaE1lcmdlU2xvdChcbiAgICAgICAgICAgIHNsb3RzWyBgdGlwLSR7IGkgfWAgXSxcbiAgICAgICAgICAgIFsgaChRSWNvbiwgeyBjbGFzczogaWNvbkNsYXNzLCBuYW1lIH0pIF1cbiAgICAgICAgICApKVxuICAgICAgICApXG4gICAgICB9KVxuXG4gICAgICBpZiAocHJvcHMubmFtZSAhPT0gdm9pZCAwICYmIHByb3BzLmRpc2FibGUgIT09IHRydWUpIHtcbiAgICAgICAgaW5qZWN0Rm9ybUlucHV0KGNoaWxkLCAncHVzaCcpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgICBzdHlsZTogc2l6ZVN0eWxlLnZhbHVlLFxuICAgICAgICAuLi5hdHRyaWJ1dGVzLnZhbHVlXG4gICAgICB9LCBjaGlsZClcbiAgICB9XG4gIH1cbn0pXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFZQSxJQUFBLFVBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBRU4sT0FBTztBQUFBLElBQ0wsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLElBRUgsWUFBWTtBQUFBLE1BQ1YsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLElBQ1g7QUFBQSxJQUVELEtBQUs7QUFBQSxNQUNILE1BQU0sQ0FBRSxRQUFRLE1BQVE7QUFBQSxNQUN4QixTQUFTO0FBQUEsSUFDVjtBQUFBLElBRUQsTUFBTSxDQUFFLFFBQVEsS0FBTztBQUFBLElBQ3ZCLFVBQVUsQ0FBRSxRQUFRLEtBQU87QUFBQSxJQUMzQixjQUFjLENBQUUsUUFBUSxLQUFPO0FBQUEsSUFFL0IsZUFBZSxDQUFFLFFBQVEsS0FBTztBQUFBLElBRWhDLE9BQU8sQ0FBRSxRQUFRLEtBQU87QUFBQSxJQUN4QixXQUFXLENBQUUsUUFBUSxLQUFPO0FBQUEsSUFDNUIsZUFBZSxDQUFFLFFBQVEsS0FBTztBQUFBLElBRWhDLFNBQVM7QUFBQSxJQUNULFdBQVc7QUFBQSxJQUVYLFVBQVU7QUFBQSxJQUNWLFNBQVM7QUFBQSxFQUNWO0FBQUEsRUFFRCxPQUFPLENBQUUsbUJBQXFCO0FBQUEsRUFFOUIsTUFBTyxPQUFPLEVBQUUsT0FBTyxLQUFJLEdBQUk7QUFDN0IsVUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFJLEVBQUEsSUFBSyxtQkFBb0I7QUFFOUMsVUFBTSxZQUFZLFFBQVEsS0FBSztBQUMvQixVQUFNLFlBQVksYUFBYSxLQUFLO0FBQ3BDLFVBQU0sa0JBQWtCLGNBQWMsU0FBUztBQUUvQyxVQUFNLGFBQWEsSUFBSSxDQUFDO0FBRXhCLFFBQUksV0FBVyxDQUFFO0FBRWpCLFVBQU0sV0FB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
