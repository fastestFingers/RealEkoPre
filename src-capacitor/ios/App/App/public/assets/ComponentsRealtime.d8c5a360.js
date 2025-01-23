import { l as loadScript } from "./index.d0b40bd3.js";
import { _ as _export_sfc, R as useDataStore, aw as auth, m as APIinterface, p as openBlock, V as createElementBlock } from "./index.61ed5618.js";
const _sfc_main = {
  name: "ComponentsRealtime",
  props: ["getevent", "subscribe_to"],
  setup() {
    const DataStore = useDataStore();
    return { DataStore };
  },
  data() {
    return {
      data: [],
      pusher: void 0,
      channel: void 0
    };
  },
  watch: {
    DataStore: {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        if (Object.keys(newValue.realtime_data).length > 0) {
          if (auth.authenticated()) {
            this.data = newValue.realtime_data;
            if (this.data.realtime_app_enabled == 1) {
              this.initProvider();
            }
          }
        }
      }
    }
  },
  methods: {
    initProvider() {
      switch (this.data.realtime_provider) {
        case "pusher":
          loadScript("https://js.pusher.com/7.0/pusher.min.js").then(() => {
            this.initPusher();
          }).catch(() => {
            console.debug("failed loading realtime script");
          });
          break;
      }
    },
    initPusher() {
      if (APIinterface.empty(this.pusher)) {
        Pusher.logToConsole = false;
        this.pusher = new Pusher(this.data.pusher_key, {
          cluster: this.data.pusher_cluster
        });
        const userData = auth.getUser();
        let subscribeTo = userData.client_uuid;
        if (typeof this.subscribe_to !== "undefined" && this.subscribe_to !== null) {
          subscribeTo = this.subscribe_to;
        }
        this.channel = this.pusher.subscribe(subscribeTo);
        this.channel.bind(this.data.event[this.getevent], (data) => {
          this.$emit("afterReceive", data);
        });
      }
    }
  }
};
const _hoisted_1 = { style: { "display": "none" } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1);
}
var ComponentsRealtime = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "ComponentsRealtime.vue"]]);
export { ComponentsRealtime as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcG9uZW50c1JlYWx0aW1lLmQ4YzVhMzYwLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Db21wb25lbnRzUmVhbHRpbWUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IG5vbmVcIj48L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBsb2FkU2NyaXB0IH0gZnJvbSBcInZ1ZS1wbHVnaW4tbG9hZC1zY3JpcHRcIjtcbmltcG9ydCBhdXRoIGZyb20gXCJzcmMvYXBpL2F1dGhcIjtcbmltcG9ydCB7IHVzZURhdGFTdG9yZSB9IGZyb20gXCJzdG9yZXMvRGF0YVN0b3JlXCI7XG5pbXBvcnQgQVBJaW50ZXJmYWNlIGZyb20gXCJzcmMvYXBpL0FQSWludGVyZmFjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiQ29tcG9uZW50c1JlYWx0aW1lXCIsXG4gIHByb3BzOiBbXCJnZXRldmVudFwiLCBcInN1YnNjcmliZV90b1wiXSxcbiAgc2V0dXAoKSB7XG4gICAgY29uc3QgRGF0YVN0b3JlID0gdXNlRGF0YVN0b3JlKCk7XG4gICAgcmV0dXJuIHsgRGF0YVN0b3JlIH07XG4gIH0sXG5cbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogW10sXG4gICAgICBwdXNoZXI6IHVuZGVmaW5lZCxcbiAgICAgIGNoYW5uZWw6IHVuZGVmaW5lZCxcbiAgICB9O1xuICB9LFxuICB3YXRjaDoge1xuICAgIERhdGFTdG9yZToge1xuICAgICAgaW1tZWRpYXRlOiB0cnVlLFxuICAgICAgZGVlcDogdHJ1ZSxcbiAgICAgIGhhbmRsZXIobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhuZXdWYWx1ZS5yZWFsdGltZV9kYXRhKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKGF1dGguYXV0aGVudGljYXRlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBuZXdWYWx1ZS5yZWFsdGltZV9kYXRhO1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5yZWFsdGltZV9hcHBfZW5hYmxlZCA9PSAxKSB7XG4gICAgICAgICAgICAgIHRoaXMuaW5pdFByb3ZpZGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBpbml0UHJvdmlkZXIoKSB7XG4gICAgICBzd2l0Y2ggKHRoaXMuZGF0YS5yZWFsdGltZV9wcm92aWRlcikge1xuICAgICAgICBjYXNlIFwicHVzaGVyXCI6XG4gICAgICAgICAgbG9hZFNjcmlwdChcImh0dHBzOi8vanMucHVzaGVyLmNvbS83LjAvcHVzaGVyLm1pbi5qc1wiKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmluaXRQdXNoZXIoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiZmFpbGVkIGxvYWRpbmcgcmVhbHRpbWUgc2NyaXB0XCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSxcbiAgICBpbml0UHVzaGVyKCkge1xuICAgICAgaWYgKEFQSWludGVyZmFjZS5lbXB0eSh0aGlzLnB1c2hlcikpIHtcbiAgICAgICAgUHVzaGVyLmxvZ1RvQ29uc29sZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnB1c2hlciA9IG5ldyBQdXNoZXIodGhpcy5kYXRhLnB1c2hlcl9rZXksIHtcbiAgICAgICAgICBjbHVzdGVyOiB0aGlzLmRhdGEucHVzaGVyX2NsdXN0ZXIsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB1c2VyRGF0YSA9IGF1dGguZ2V0VXNlcigpO1xuXG4gICAgICAgIGxldCBzdWJzY3JpYmVUbyA9IHVzZXJEYXRhLmNsaWVudF91dWlkO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdHlwZW9mIHRoaXMuc3Vic2NyaWJlX3RvICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgICAgdGhpcy5zdWJzY3JpYmVfdG8gIT09IG51bGxcbiAgICAgICAgKSB7XG4gICAgICAgICAgc3Vic2NyaWJlVG8gPSB0aGlzLnN1YnNjcmliZV90bztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hhbm5lbCA9IHRoaXMucHVzaGVyLnN1YnNjcmliZShzdWJzY3JpYmVUbyk7XG5cbiAgICAgICAgdGhpcy5jaGFubmVsLmJpbmQodGhpcy5kYXRhLmV2ZW50W3RoaXMuZ2V0ZXZlbnRdLCAoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuJGVtaXQoXCJhZnRlclJlY2VpdmVcIiwgZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50QmxvY2siXSwibWFwcGluZ3MiOiI7O0FBVUEsTUFBSyxZQUFVO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixPQUFPLENBQUMsWUFBWSxjQUFjO0FBQUEsRUFDbEMsUUFBUTtBQUNOLFVBQU0sWUFBWTtBQUNsQixXQUFPLEVBQUU7RUFDVjtBQUFBLEVBRUQsT0FBTztBQUNMLFdBQU87QUFBQSxNQUNMLE1BQU0sQ0FBRTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsU0FBUztBQUFBO0VBRVo7QUFBQSxFQUNELE9BQU87QUFBQSxJQUNMLFdBQVc7QUFBQSxNQUNULFdBQVc7QUFBQSxNQUNYLE1BQU07QUFBQSxNQUNOLFFBQVEsVUFBVSxVQUFVO0FBQzFCLFlBQUksT0FBTyxLQUFLLFNBQVMsYUFBYSxFQUFFLFNBQVMsR0FBRztBQUNsRCxjQUFJLEtBQUssaUJBQWlCO0FBQ3hCLGlCQUFLLE9BQU8sU0FBUztBQUNyQixnQkFBSSxLQUFLLEtBQUssd0JBQXdCLEdBQUc7QUFDdkMsbUJBQUssYUFBWTtBQUFBLFlBQ25CO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNEO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNELFNBQVM7QUFBQSxJQUNQLGVBQWU7QUFDYixjQUFRLEtBQUssS0FBSztBQUFBLGFBQ1g7QUFDSCxxQkFBVyx5Q0FBeUMsRUFDakQsS0FBSyxNQUFNO0FBQ1YsaUJBQUssV0FBVTtBQUFBLFdBQ2hCLEVBQ0EsTUFBTSxNQUFNO0FBQ1gsb0JBQVEsTUFBTSxnQ0FBZ0M7QUFBQSxVQUNoRCxDQUFDO0FBQ0g7QUFBQTtBQUFBLElBRUw7QUFBQSxJQUNELGFBQWE7QUFDWCxVQUFJLGFBQWEsTUFBTSxLQUFLLE1BQU0sR0FBRztBQUNuQyxlQUFPLGVBQWU7QUFDdEIsYUFBSyxTQUFTLElBQUksT0FBTyxLQUFLLEtBQUssWUFBWTtBQUFBLFVBQzdDLFNBQVMsS0FBSyxLQUFLO0FBQUEsUUFDckIsQ0FBQztBQUNELGNBQU0sV0FBVyxLQUFLO0FBRXRCLFlBQUksY0FBYyxTQUFTO0FBQzNCLFlBQ0UsT0FBTyxLQUFLLGlCQUFpQixlQUM3QixLQUFLLGlCQUFpQixNQUN0QjtBQUNBLHdCQUFjLEtBQUs7QUFBQSxRQUNyQjtBQUVBLGFBQUssVUFBVSxLQUFLLE9BQU8sVUFBVSxXQUFXO0FBRWhELGFBQUssUUFBUSxLQUFLLEtBQUssS0FBSyxNQUFNLEtBQUssV0FBVyxDQUFDLFNBQVM7QUFDMUQsZUFBSyxNQUFNLGdCQUFnQixJQUFJO0FBQUEsUUFDakMsQ0FBQztBQUFBLE1BQ0g7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUNIO0FBOUVPLE1BQUEsYUFBQSxFQUFBLE9BQUEsRUFBcUIsV0FBQSxPQUFBLEVBQUE7O0FBQTFCLFNBQUFBLFVBQUEsR0FBQUMsbUJBQWlDLE9BQWpDLFVBQWlDOzs7OyJ9
