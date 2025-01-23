import { v as createComponent, ah as useDarkProps, ax as useTransitionProps, ai as useDark, ay as useTransition, c as computed, h, a0 as Transition, g as getCurrentInstance, a1 as QSpinner } from "./index.61ed5618.js";
var QInnerLoading = createComponent({
  name: "QInnerLoading",
  props: {
    ...useDarkProps,
    ...useTransitionProps,
    showing: Boolean,
    color: String,
    size: {
      type: [String, Number],
      default: "42px"
    },
    label: String,
    labelClass: String,
    labelStyle: [String, Array, Object]
  },
  setup(props, { slots }) {
    const vm = getCurrentInstance();
    const isDark = useDark(props, vm.proxy.$q);
    const { transitionProps, transitionStyle } = useTransition(props);
    const classes = computed(
      () => "q-inner-loading q--avoid-card-border absolute-full column flex-center" + (isDark.value === true ? " q-inner-loading--dark" : "")
    );
    const labelClass = computed(
      () => "q-inner-loading__label" + (props.labelClass !== void 0 ? ` ${props.labelClass}` : "")
    );
    function getInner() {
      const child = [
        h(QSpinner, {
          size: props.size,
          color: props.color
        })
      ];
      if (props.label !== void 0) {
        child.push(
          h("div", {
            class: labelClass.value,
            style: props.labelStyle
          }, [props.label])
        );
      }
      return child;
    }
    function getContent() {
      return props.showing === true ? h(
        "div",
        { class: classes.value, style: transitionStyle.value },
        slots.default !== void 0 ? slots.default() : getInner()
      ) : null;
    }
    return () => h(Transition, transitionProps.value, getContent);
  }
});
export { QInnerLoading as Q };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUUlubmVyTG9hZGluZy5hYmUyYWZlNi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9pbm5lci1sb2FkaW5nL1FJbm5lckxvYWRpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaCwgY29tcHV0ZWQsIFRyYW5zaXRpb24sIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFFTcGlubmVyIGZyb20gJy4uL3NwaW5uZXIvUVNwaW5uZXIuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuY3JlYXRlL2NyZWF0ZS5qcydcbmltcG9ydCB1c2VEYXJrLCB7IHVzZURhcmtQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUudXNlLWRhcmsvdXNlLWRhcmsuanMnXG5pbXBvcnQgdXNlVHJhbnNpdGlvbiwgeyB1c2VUcmFuc2l0aW9uUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlLnVzZS10cmFuc2l0aW9uL3VzZS10cmFuc2l0aW9uLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUlubmVyTG9hZGluZycsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VEYXJrUHJvcHMsXG4gICAgLi4udXNlVHJhbnNpdGlvblByb3BzLFxuXG4gICAgc2hvd2luZzogQm9vbGVhbixcbiAgICBjb2xvcjogU3RyaW5nLFxuXG4gICAgc2l6ZToge1xuICAgICAgdHlwZTogWyBTdHJpbmcsIE51bWJlciBdLFxuICAgICAgZGVmYXVsdDogJzQycHgnXG4gICAgfSxcblxuICAgIGxhYmVsOiBTdHJpbmcsXG4gICAgbGFiZWxDbGFzczogU3RyaW5nLFxuICAgIGxhYmVsU3R5bGU6IFsgU3RyaW5nLCBBcnJheSwgT2JqZWN0IF1cbiAgfSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMgfSkge1xuICAgIGNvbnN0IHZtID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCBpc0RhcmsgPSB1c2VEYXJrKHByb3BzLCB2bS5wcm94eS4kcSlcblxuICAgIGNvbnN0IHsgdHJhbnNpdGlvblByb3BzLCB0cmFuc2l0aW9uU3R5bGUgfSA9IHVzZVRyYW5zaXRpb24ocHJvcHMpXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLWlubmVyLWxvYWRpbmcgcS0tYXZvaWQtY2FyZC1ib3JkZXIgYWJzb2x1dGUtZnVsbCBjb2x1bW4gZmxleC1jZW50ZXInXG4gICAgICArIChpc0RhcmsudmFsdWUgPT09IHRydWUgPyAnIHEtaW5uZXItbG9hZGluZy0tZGFyaycgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCBsYWJlbENsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLWlubmVyLWxvYWRpbmdfX2xhYmVsJ1xuICAgICAgKyAocHJvcHMubGFiZWxDbGFzcyAhPT0gdm9pZCAwID8gYCAkeyBwcm9wcy5sYWJlbENsYXNzIH1gIDogJycpXG4gICAgKVxuXG4gICAgZnVuY3Rpb24gZ2V0SW5uZXIgKCkge1xuICAgICAgY29uc3QgY2hpbGQgPSBbXG4gICAgICAgIGgoUVNwaW5uZXIsIHtcbiAgICAgICAgICBzaXplOiBwcm9wcy5zaXplLFxuICAgICAgICAgIGNvbG9yOiBwcm9wcy5jb2xvclxuICAgICAgICB9KVxuICAgICAgXVxuXG4gICAgICBpZiAocHJvcHMubGFiZWwgIT09IHZvaWQgMCkge1xuICAgICAgICBjaGlsZC5wdXNoKFxuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzOiBsYWJlbENsYXNzLnZhbHVlLFxuICAgICAgICAgICAgc3R5bGU6IHByb3BzLmxhYmVsU3R5bGVcbiAgICAgICAgICB9LCBbIHByb3BzLmxhYmVsIF0pXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNoaWxkXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q29udGVudCAoKSB7XG4gICAgICByZXR1cm4gcHJvcHMuc2hvd2luZyA9PT0gdHJ1ZVxuICAgICAgICA/IGgoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgeyBjbGFzczogY2xhc3Nlcy52YWx1ZSwgc3R5bGU6IHRyYW5zaXRpb25TdHlsZS52YWx1ZSB9LFxuICAgICAgICAgIHNsb3RzLmRlZmF1bHQgIT09IHZvaWQgMFxuICAgICAgICAgICAgPyBzbG90cy5kZWZhdWx0KClcbiAgICAgICAgICAgIDogZ2V0SW5uZXIoKVxuICAgICAgICApXG4gICAgICAgIDogbnVsbFxuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiBoKFRyYW5zaXRpb24sIHRyYW5zaXRpb25Qcm9wcy52YWx1ZSwgZ2V0Q29udGVudClcbiAgfVxufSlcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBUUEsSUFBQSxnQkFBZSxnQkFBZ0I7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFFTixPQUFPO0FBQUEsSUFDTCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsSUFFSCxTQUFTO0FBQUEsSUFDVCxPQUFPO0FBQUEsSUFFUCxNQUFNO0FBQUEsTUFDSixNQUFNLENBQUUsUUFBUSxNQUFRO0FBQUEsTUFDeEIsU0FBUztBQUFBLElBQ1Y7QUFBQSxJQUVELE9BQU87QUFBQSxJQUNQLFlBQVk7QUFBQSxJQUNaLFlBQVksQ0FBRSxRQUFRLE9BQU8sTUFBUTtBQUFBLEVBQ3RDO0FBQUEsRUFFRCxNQUFPLE9BQU8sRUFBRSxTQUFTO0FBQ3ZCLFVBQU0sS0FBSyxtQkFBb0I7QUFDL0IsVUFBTSxTQUFTLFFBQVEsT0FBTyxHQUFHLE1BQU0sRUFBRTtBQUV6QyxVQUFNLEVBQUUsaUJBQWlCLG9CQUFvQixjQUFjLEtBQUs7QUFFaEUsVUFBTSxVQUFVO0FBQUEsTUFBUyxNQUN2QiwyRUFDRyxPQUFPLFVBQVUsT0FBTywyQkFBMkI7QUFBQSxJQUN2RDtBQUVELFVBQU0sYUFBYTtBQUFBLE1BQVMsTUFDMUIsNEJBQ0csTUFBTSxlQUFlLFNBQVMsSUFBSyxNQUFNLGVBQWdCO0FBQUEsSUFDN0Q7QUFFRCxhQUFTLFdBQVk7QUFDbkIsWUFBTSxRQUFRO0FBQUEsUUFDWixFQUFFLFVBQVU7QUFBQSxVQUNWLE1BQU0sTUFBTTtBQUFBLFVBQ1osT0FBTyxNQUFNO0FBQUEsUUFDdkIsQ0FBUztBQUFBLE1BQ0Y7QUFFRCxVQUFJLE1BQU0sVUFBVSxRQUFRO0FBQzFCLGNBQU07QUFBQSxVQUNKLEVBQUUsT0FBTztBQUFBLFlBQ1AsT0FBTyxXQUFXO0FBQUEsWUFDbEIsT0FBTyxNQUFNO0FBQUEsVUFDekIsR0FBYSxDQUFFLE1BQU0sTUFBTztBQUFBLFFBQ25CO0FBQUEsTUFDRjtBQUVELGFBQU87QUFBQSxJQUNSO0FBRUQsYUFBUyxhQUFjO0FBQ3JCLGFBQU8sTUFBTSxZQUFZLE9BQ3JCO0FBQUEsUUFDQTtBQUFBLFFBQ0EsRUFBRSxPQUFPLFFBQVEsT0FBTyxPQUFPLGdCQUFnQixNQUFPO0FBQUEsUUFDdEQsTUFBTSxZQUFZLFNBQ2QsTUFBTSxRQUFTLElBQ2YsU0FBVTtBQUFBLE1BQ2YsSUFDQztBQUFBLElBQ0w7QUFFRCxXQUFPLE1BQU0sRUFBRSxZQUFZLGdCQUFnQixPQUFPLFVBQVU7QUFBQSxFQUM3RDtBQUNILENBQUM7OyJ9
