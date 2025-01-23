import { v as createComponent, ah as useDarkProps, ai as useDark, c as computed, h, z as hSlot, g as getCurrentInstance } from "./index.61ed5618.js";
const skeletonTypes = [
  "text",
  "rect",
  "circle",
  "QBtn",
  "QBadge",
  "QChip",
  "QToolbar",
  "QCheckbox",
  "QRadio",
  "QToggle",
  "QSlider",
  "QRange",
  "QInput",
  "QAvatar"
];
const skeletonAnimations = [
  "wave",
  "pulse",
  "pulse-x",
  "pulse-y",
  "fade",
  "blink",
  "none"
];
var QSkeleton = createComponent({
  name: "QSkeleton",
  props: {
    ...useDarkProps,
    tag: {
      type: String,
      default: "div"
    },
    type: {
      type: String,
      validator: (v) => skeletonTypes.includes(v),
      default: "rect"
    },
    animation: {
      type: String,
      validator: (v) => skeletonAnimations.includes(v),
      default: "wave"
    },
    animationSpeed: {
      type: [String, Number],
      default: 1500
    },
    square: Boolean,
    bordered: Boolean,
    size: String,
    width: String,
    height: String
  },
  setup(props, { slots }) {
    const vm = getCurrentInstance();
    const isDark = useDark(props, vm.proxy.$q);
    const style = computed(() => {
      const size = props.size !== void 0 ? [props.size, props.size] : [props.width, props.height];
      return {
        "--q-skeleton-speed": `${props.animationSpeed}ms`,
        width: size[0],
        height: size[1]
      };
    });
    const classes = computed(
      () => `q-skeleton q-skeleton--${isDark.value === true ? "dark" : "light"} q-skeleton--type-${props.type}` + (props.animation !== "none" ? ` q-skeleton--anim q-skeleton--anim-${props.animation}` : "") + (props.square === true ? " q-skeleton--square" : "") + (props.bordered === true ? " q-skeleton--bordered" : "")
    );
    return () => h(props.tag, {
      class: classes.value,
      style: style.value
    }, hSlot(slots.default));
  }
});
export { QSkeleton as Q };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUVNrZWxldG9uLjM5NzM3Mzk4LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3NrZWxldG9uL1FTa2VsZXRvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCBjb21wdXRlZCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlLnVzZS1kYXJrL3VzZS1kYXJrLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmNyZWF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUucmVuZGVyL3JlbmRlci5qcydcblxuZXhwb3J0IGNvbnN0IHNrZWxldG9uVHlwZXMgPSBbXG4gICd0ZXh0JywgJ3JlY3QnLCAnY2lyY2xlJyxcbiAgJ1FCdG4nLCAnUUJhZGdlJywgJ1FDaGlwJywgJ1FUb29sYmFyJyxcbiAgJ1FDaGVja2JveCcsICdRUmFkaW8nLCAnUVRvZ2dsZScsXG4gICdRU2xpZGVyJywgJ1FSYW5nZScsICdRSW5wdXQnLFxuICAnUUF2YXRhcidcbl1cblxuZXhwb3J0IGNvbnN0IHNrZWxldG9uQW5pbWF0aW9ucyA9IFtcbiAgJ3dhdmUnLCAncHVsc2UnLCAncHVsc2UteCcsICdwdWxzZS15JywgJ2ZhZGUnLCAnYmxpbmsnLCAnbm9uZSdcbl1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FTa2VsZXRvbicsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VEYXJrUHJvcHMsXG5cbiAgICB0YWc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdkaXYnXG4gICAgfSxcblxuICAgIHR5cGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiBza2VsZXRvblR5cGVzLmluY2x1ZGVzKHYpLFxuICAgICAgZGVmYXVsdDogJ3JlY3QnXG4gICAgfSxcblxuICAgIGFuaW1hdGlvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IHNrZWxldG9uQW5pbWF0aW9ucy5pbmNsdWRlcyh2KSxcbiAgICAgIGRlZmF1bHQ6ICd3YXZlJ1xuICAgIH0sXG4gICAgYW5pbWF0aW9uU3BlZWQ6IHtcbiAgICAgIHR5cGU6IFsgU3RyaW5nLCBOdW1iZXIgXSxcbiAgICAgIGRlZmF1bHQ6IDE1MDBcbiAgICB9LFxuXG4gICAgc3F1YXJlOiBCb29sZWFuLFxuICAgIGJvcmRlcmVkOiBCb29sZWFuLFxuXG4gICAgc2l6ZTogU3RyaW5nLFxuICAgIHdpZHRoOiBTdHJpbmcsXG4gICAgaGVpZ2h0OiBTdHJpbmdcbiAgfSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMgfSkge1xuICAgIGNvbnN0IHZtID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCBpc0RhcmsgPSB1c2VEYXJrKHByb3BzLCB2bS5wcm94eS4kcSlcblxuICAgIGNvbnN0IHN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3Qgc2l6ZSA9IHByb3BzLnNpemUgIT09IHZvaWQgMFxuICAgICAgICA/IFsgcHJvcHMuc2l6ZSwgcHJvcHMuc2l6ZSBdXG4gICAgICAgIDogWyBwcm9wcy53aWR0aCwgcHJvcHMuaGVpZ2h0IF1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJy0tcS1za2VsZXRvbi1zcGVlZCc6IGAkeyBwcm9wcy5hbmltYXRpb25TcGVlZCB9bXNgLFxuICAgICAgICB3aWR0aDogc2l6ZVsgMCBdLFxuICAgICAgICBoZWlnaHQ6IHNpemVbIDEgXVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIGBxLXNrZWxldG9uIHEtc2tlbGV0b24tLSR7IGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICdkYXJrJyA6ICdsaWdodCcgfSBxLXNrZWxldG9uLS10eXBlLSR7IHByb3BzLnR5cGUgfWBcbiAgICAgICsgKHByb3BzLmFuaW1hdGlvbiAhPT0gJ25vbmUnID8gYCBxLXNrZWxldG9uLS1hbmltIHEtc2tlbGV0b24tLWFuaW0tJHsgcHJvcHMuYW5pbWF0aW9uIH1gIDogJycpXG4gICAgICArIChwcm9wcy5zcXVhcmUgPT09IHRydWUgPyAnIHEtc2tlbGV0b24tLXNxdWFyZScgOiAnJylcbiAgICAgICsgKHByb3BzLmJvcmRlcmVkID09PSB0cnVlID8gJyBxLXNrZWxldG9uLS1ib3JkZXJlZCcgOiAnJylcbiAgICApXG5cbiAgICByZXR1cm4gKCkgPT4gaChwcm9wcy50YWcsIHtcbiAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgc3R5bGU6IHN0eWxlLnZhbHVlXG4gICAgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gIH1cbn0pXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQU9PLE1BQU0sZ0JBQWdCO0FBQUEsRUFDM0I7QUFBQSxFQUFRO0FBQUEsRUFBUTtBQUFBLEVBQ2hCO0FBQUEsRUFBUTtBQUFBLEVBQVU7QUFBQSxFQUFTO0FBQUEsRUFDM0I7QUFBQSxFQUFhO0FBQUEsRUFBVTtBQUFBLEVBQ3ZCO0FBQUEsRUFBVztBQUFBLEVBQVU7QUFBQSxFQUNyQjtBQUNGO0FBRU8sTUFBTSxxQkFBcUI7QUFBQSxFQUNoQztBQUFBLEVBQVE7QUFBQSxFQUFTO0FBQUEsRUFBVztBQUFBLEVBQVc7QUFBQSxFQUFRO0FBQUEsRUFBUztBQUMxRDtBQUVBLElBQUEsWUFBZSxnQkFBZ0I7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFFTixPQUFPO0FBQUEsSUFDTCxHQUFHO0FBQUEsSUFFSCxLQUFLO0FBQUEsTUFDSCxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsSUFDVjtBQUFBLElBRUQsTUFBTTtBQUFBLE1BQ0osTUFBTTtBQUFBLE1BQ04sV0FBVyxPQUFLLGNBQWMsU0FBUyxDQUFDO0FBQUEsTUFDeEMsU0FBUztBQUFBLElBQ1Y7QUFBQSxJQUVELFdBQVc7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLFdBQVcsT0FBSyxtQkFBbUIsU0FBUyxDQUFDO0FBQUEsTUFDN0MsU0FBUztBQUFBLElBQ1Y7QUFBQSxJQUNELGdCQUFnQjtBQUFBLE1BQ2QsTUFBTSxDQUFFLFFBQVEsTUFBUTtBQUFBLE1BQ3hCLFNBQVM7QUFBQSxJQUNWO0FBQUEsSUFFRCxRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFFVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxRQUFRO0FBQUEsRUFDVDtBQUFBLEVBRUQsTUFBTyxPQUFPLEVBQUUsU0FBUztBQUN2QixVQUFNLEtBQUssbUJBQW9CO0FBQy9CLFVBQU0sU0FBUyxRQUFRLE9BQU8sR0FBRyxNQUFNLEVBQUU7QUFFekMsVUFBTSxRQUFRLFNBQVMsTUFBTTtBQUMzQixZQUFNLE9BQU8sTUFBTSxTQUFTLFNBQ3hCLENBQUUsTUFBTSxNQUFNLE1BQU0sSUFBTSxJQUMxQixDQUFFLE1BQU0sT0FBTyxNQUFNLE1BQVE7QUFFakMsYUFBTztBQUFBLFFBQ0wsc0JBQXNCLEdBQUksTUFBTTtBQUFBLFFBQ2hDLE9BQU8sS0FBTTtBQUFBLFFBQ2IsUUFBUSxLQUFNO0FBQUEsTUFDZjtBQUFBLElBQ1AsQ0FBSztBQUVELFVBQU0sVUFBVTtBQUFBLE1BQVMsTUFDdkIsMEJBQTJCLE9BQU8sVUFBVSxPQUFPLFNBQVMsNEJBQThCLE1BQU0sVUFDN0YsTUFBTSxjQUFjLFNBQVMsc0NBQXVDLE1BQU0sY0FBZSxPQUN6RixNQUFNLFdBQVcsT0FBTyx3QkFBd0IsT0FDaEQsTUFBTSxhQUFhLE9BQU8sMEJBQTBCO0FBQUEsSUFDeEQ7QUFFRCxXQUFPLE1BQU0sRUFBRSxNQUFNLEtBQUs7QUFBQSxNQUN4QixPQUFPLFFBQVE7QUFBQSxNQUNmLE9BQU8sTUFBTTtBQUFBLElBQ25CLEdBQU8sTUFBTSxNQUFNLE9BQU8sQ0FBQztBQUFBLEVBQ3hCO0FBQ0gsQ0FBQzs7In0=
