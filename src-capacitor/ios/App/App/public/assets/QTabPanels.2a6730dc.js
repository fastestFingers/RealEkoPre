import { u as usePanelChildProps, a as usePanelProps, b as usePanelEmits, c as usePanel } from "./use-panel.225d73f4.js";
import { v as createComponent, h, z as hSlot, ah as useDarkProps, ai as useDark, c as computed, au as hDir, g as getCurrentInstance } from "./index.61ed5618.js";
var QTabPanel = createComponent({
  name: "QTabPanel",
  props: usePanelChildProps,
  setup(_, { slots }) {
    return () => h("div", { class: "q-tab-panel", role: "tabpanel" }, hSlot(slots.default));
  }
});
var QTabPanels = createComponent({
  name: "QTabPanels",
  props: {
    ...usePanelProps,
    ...useDarkProps
  },
  emits: usePanelEmits,
  setup(props, { slots }) {
    const vm = getCurrentInstance();
    const isDark = useDark(props, vm.proxy.$q);
    const { updatePanelsList, getPanelContent, panelDirectives } = usePanel();
    const classes = computed(
      () => "q-tab-panels q-panel-parent" + (isDark.value === true ? " q-tab-panels--dark q-dark" : "")
    );
    return () => {
      updatePanelsList(slots);
      return hDir(
        "div",
        { class: classes.value },
        getPanelContent(),
        "pan",
        props.swipeable,
        () => panelDirectives.value
      );
    };
  }
});
export { QTabPanels as Q, QTabPanel as a };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUVRhYlBhbmVscy4yYTY3MzBkYy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWItcGFuZWxzL1FUYWJQYW5lbC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdGFiLXBhbmVscy9RVGFiUGFuZWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGggfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IHVzZVBhbmVsQ2hpbGRQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUudXNlLXBhbmVsL3VzZS1wYW5lbC5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnJlbmRlci9yZW5kZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRVGFiUGFuZWwnLFxuXG4gIHByb3BzOiB1c2VQYW5lbENoaWxkUHJvcHMsXG5cbiAgc2V0dXAgKF8sIHsgc2xvdHMgfSkge1xuICAgIHJldHVybiAoKSA9PiBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWItcGFuZWwnLCByb2xlOiAndGFicGFuZWwnIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICB9XG59KVxuIiwiaW1wb3J0IHsgY29tcHV0ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS51c2UtZGFyay91c2UtZGFyay5qcydcbmltcG9ydCB1c2VQYW5lbCwgeyB1c2VQYW5lbFByb3BzLCB1c2VQYW5lbEVtaXRzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS51c2UtcGFuZWwvdXNlLXBhbmVsLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmNyZWF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoRGlyIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5yZW5kZXIvcmVuZGVyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVRhYlBhbmVscycsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VQYW5lbFByb3BzLFxuICAgIC4uLnVzZURhcmtQcm9wc1xuICB9LFxuXG4gIGVtaXRzOiB1c2VQYW5lbEVtaXRzLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsIHZtLnByb3h5LiRxKVxuXG4gICAgY29uc3QgeyB1cGRhdGVQYW5lbHNMaXN0LCBnZXRQYW5lbENvbnRlbnQsIHBhbmVsRGlyZWN0aXZlcyB9ID0gdXNlUGFuZWwoKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS10YWItcGFuZWxzIHEtcGFuZWwtcGFyZW50J1xuICAgICAgKyAoaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJyBxLXRhYi1wYW5lbHMtLWRhcmsgcS1kYXJrJyA6ICcnKVxuICAgIClcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB1cGRhdGVQYW5lbHNMaXN0KHNsb3RzKVxuXG4gICAgICByZXR1cm4gaERpcihcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3M6IGNsYXNzZXMudmFsdWUgfSxcbiAgICAgICAgZ2V0UGFuZWxDb250ZW50KCksXG4gICAgICAgICdwYW4nLFxuICAgICAgICBwcm9wcy5zd2lwZWFibGUsXG4gICAgICAgICgpID0+IHBhbmVsRGlyZWN0aXZlcy52YWx1ZVxuICAgICAgKVxuICAgIH1cbiAgfVxufSlcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU9BLElBQUEsWUFBZSxnQkFBZ0I7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFFTixPQUFPO0FBQUEsRUFFUCxNQUFPLEdBQUcsRUFBRSxTQUFTO0FBQ25CLFdBQU8sTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLGVBQWUsTUFBTSxjQUFjLE1BQU0sTUFBTSxPQUFPLENBQUM7QUFBQSxFQUN2RjtBQUNILENBQUM7QUNQRCxJQUFBLGFBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBRU4sT0FBTztBQUFBLElBQ0wsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUVELE9BQU87QUFBQSxFQUVQLE1BQU8sT0FBTyxFQUFFLFNBQVM7QUFDdkIsVUFBTSxLQUFLLG1CQUFvQjtBQUMvQixVQUFNLFNBQVMsUUFBUSxPQUFPLEdBQUcsTUFBTSxFQUFFO0FBRXpDLFVBQU0sRUFBRSxrQkFBa0IsaUJBQWlCLGdCQUFlLElBQUssU0FBVTtBQUV6RSxVQUFNLFVBQVU7QUFBQSxNQUFTLE1BQ3ZCLGlDQUNHLE9BQU8sVUFBVSxPQUFPLCtCQUErQjtBQUFBLElBQzNEO0FBRUQsV0FBTyxNQUFNO0FBQ1gsdUJBQWlCLEtBQUs7QUFFdEIsYUFBTztBQUFBLFFBQ0w7QUFBQSxRQUNBLEVBQUUsT0FBTyxRQUFRLE1BQU87QUFBQSxRQUN4QixnQkFBaUI7QUFBQSxRQUNqQjtBQUFBLFFBQ0EsTUFBTTtBQUFBLFFBQ04sTUFBTSxnQkFBZ0I7QUFBQSxNQUN2QjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0gsQ0FBQzs7In0=
