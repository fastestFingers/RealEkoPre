import { v as createComponent, aQ as useRouterLinkProps, aR as useRouterLink, c as computed, w as watch } from "./index.61ed5618.js";
import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.2f5e29cb.js";
var QRouteTab = createComponent({
  name: "QRouteTab",
  props: {
    ...useRouterLinkProps,
    ...useTabProps
  },
  emits: useTabEmits,
  setup(props, { slots, emit }) {
    const routeData = useRouterLink({
      useDisableForRouterLinkProps: false
    });
    const { renderTab, $tabs } = useTab(
      props,
      slots,
      emit,
      {
        exact: computed(() => props.exact),
        ...routeData
      }
    );
    watch(() => `${props.name} | ${props.exact} | ${(routeData.resolvedLink.value || {}).href}`, () => {
      $tabs.verifyRouteModel();
    });
    return () => renderTab(routeData.linkTag.value, routeData.linkAttrs.value);
  }
});
export { QRouteTab as Q };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUVJvdXRlVGFiLjNjZDRlNjU3LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYnMvUVJvdXRlVGFiLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbXB1dGVkLCB3YXRjaCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHVzZVJvdXRlckxpbmssIHsgdXNlUm91dGVyTGlua1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS51c2Utcm91dGVyLWxpbmsvdXNlLXJvdXRlci1saW5rLmpzJ1xuaW1wb3J0IHVzZVRhYiwgeyB1c2VUYWJQcm9wcywgdXNlVGFiRW1pdHMgfSBmcm9tICcuL3VzZS10YWIuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuY3JlYXRlL2NyZWF0ZS5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FSb3V0ZVRhYicsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VSb3V0ZXJMaW5rUHJvcHMsXG4gICAgLi4udXNlVGFiUHJvcHNcbiAgfSxcblxuICBlbWl0czogdXNlVGFiRW1pdHMsXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCByb3V0ZURhdGEgPSB1c2VSb3V0ZXJMaW5rKHtcbiAgICAgIHVzZURpc2FibGVGb3JSb3V0ZXJMaW5rUHJvcHM6IGZhbHNlXG4gICAgfSlcblxuICAgIGNvbnN0IHsgcmVuZGVyVGFiLCAkdGFicyB9ID0gdXNlVGFiKFxuICAgICAgcHJvcHMsXG4gICAgICBzbG90cyxcbiAgICAgIGVtaXQsXG4gICAgICB7XG4gICAgICAgIGV4YWN0OiBjb21wdXRlZCgoKSA9PiBwcm9wcy5leGFjdCksXG4gICAgICAgIC4uLnJvdXRlRGF0YVxuICAgICAgfVxuICAgIClcblxuICAgIHdhdGNoKCgpID0+IGAkeyBwcm9wcy5uYW1lIH0gfCAkeyBwcm9wcy5leGFjdCB9IHwgJHsgKHJvdXRlRGF0YS5yZXNvbHZlZExpbmsudmFsdWUgfHwge30pLmhyZWYgfWAsICgpID0+IHtcbiAgICAgICR0YWJzLnZlcmlmeVJvdXRlTW9kZWwoKVxuICAgIH0pXG5cbiAgICByZXR1cm4gKCkgPT4gcmVuZGVyVGFiKHJvdXRlRGF0YS5saW5rVGFnLnZhbHVlLCByb3V0ZURhdGEubGlua0F0dHJzLnZhbHVlKVxuICB9XG59KVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBT0EsSUFBQSxZQUFlLGdCQUFnQjtBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUVOLE9BQU87QUFBQSxJQUNMLEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFFRCxPQUFPO0FBQUEsRUFFUCxNQUFPLE9BQU8sRUFBRSxPQUFPLEtBQUksR0FBSTtBQUM3QixVQUFNLFlBQVksY0FBYztBQUFBLE1BQzlCLDhCQUE4QjtBQUFBLElBQ3BDLENBQUs7QUFFRCxVQUFNLEVBQUUsV0FBVyxNQUFLLElBQUs7QUFBQSxNQUMzQjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLFFBQ0UsT0FBTyxTQUFTLE1BQU0sTUFBTSxLQUFLO0FBQUEsUUFDakMsR0FBRztBQUFBLE1BQ0o7QUFBQSxJQUNGO0FBRUQsVUFBTSxNQUFNLEdBQUksTUFBTSxVQUFZLE1BQU0sWUFBYyxVQUFVLGFBQWEsU0FBUyxDQUFBLEdBQUksUUFBUyxNQUFNO0FBQ3ZHLFlBQU0saUJBQWtCO0FBQUEsSUFDOUIsQ0FBSztBQUVELFdBQU8sTUFBTSxVQUFVLFVBQVUsUUFBUSxPQUFPLFVBQVUsVUFBVSxLQUFLO0FBQUEsRUFDMUU7QUFDSCxDQUFDOzsifQ==
