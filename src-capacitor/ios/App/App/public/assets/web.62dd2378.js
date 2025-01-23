import { W as WebPlugin } from "./index.61ed5618.js";
function translatedConnection() {
  const connection = window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection;
  let result = "unknown";
  const type = connection ? connection.type || connection.effectiveType : null;
  if (type && typeof type === "string") {
    switch (type) {
      case "bluetooth":
      case "cellular":
        result = "cellular";
        break;
      case "none":
        result = "none";
        break;
      case "ethernet":
      case "wifi":
      case "wimax":
        result = "wifi";
        break;
      case "other":
      case "unknown":
        result = "unknown";
        break;
      case "slow-2g":
      case "2g":
      case "3g":
        result = "cellular";
        break;
      case "4g":
        result = "wifi";
        break;
    }
  }
  return result;
}
class NetworkWeb extends WebPlugin {
  constructor() {
    super();
    this.handleOnline = () => {
      const connectionType = translatedConnection();
      const status = {
        connected: true,
        connectionType
      };
      this.notifyListeners("networkStatusChange", status);
    };
    this.handleOffline = () => {
      const status = {
        connected: false,
        connectionType: "none"
      };
      this.notifyListeners("networkStatusChange", status);
    };
    if (typeof window !== "undefined") {
      window.addEventListener("online", this.handleOnline);
      window.addEventListener("offline", this.handleOffline);
    }
  }
  async getStatus() {
    if (!window.navigator) {
      throw this.unavailable("Browser does not support the Network Information API");
    }
    const connected = window.navigator.onLine;
    const connectionType = translatedConnection();
    const status = {
      connected,
      connectionType: connected ? connectionType : "none"
    };
    return status;
  }
}
const Network = new NetworkWeb();
export { Network, NetworkWeb };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLjYyZGQyMzc4LmpzIiwic291cmNlcyI6WyIuLi8uLi9ub2RlX21vZHVsZXMvQGNhcGFjaXRvci9uZXR3b3JrL2Rpc3QvZXNtL3dlYi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBXZWJQbHVnaW4gfSBmcm9tICdAY2FwYWNpdG9yL2NvcmUnO1xuZnVuY3Rpb24gdHJhbnNsYXRlZENvbm5lY3Rpb24oKSB7XG4gICAgY29uc3QgY29ubmVjdGlvbiA9IHdpbmRvdy5uYXZpZ2F0b3IuY29ubmVjdGlvbiB8fFxuICAgICAgICB3aW5kb3cubmF2aWdhdG9yLm1vekNvbm5lY3Rpb24gfHxcbiAgICAgICAgd2luZG93Lm5hdmlnYXRvci53ZWJraXRDb25uZWN0aW9uO1xuICAgIGxldCByZXN1bHQgPSAndW5rbm93bic7XG4gICAgY29uc3QgdHlwZSA9IGNvbm5lY3Rpb24gPyBjb25uZWN0aW9uLnR5cGUgfHwgY29ubmVjdGlvbi5lZmZlY3RpdmVUeXBlIDogbnVsbDtcbiAgICBpZiAodHlwZSAmJiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAvLyBwb3NzaWJsZSB0eXBlIHZhbHVlc1xuICAgICAgICAgICAgY2FzZSAnYmx1ZXRvb3RoJzpcbiAgICAgICAgICAgIGNhc2UgJ2NlbGx1bGFyJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAnY2VsbHVsYXInO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbm9uZSc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZXRoZXJuZXQnOlxuICAgICAgICAgICAgY2FzZSAnd2lmaSc6XG4gICAgICAgICAgICBjYXNlICd3aW1heCc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gJ3dpZmknO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnb3RoZXInOlxuICAgICAgICAgICAgY2FzZSAndW5rbm93bic6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gJ3Vua25vd24nO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gcG9zc2libGUgZWZmZWN0aXZlVHlwZSB2YWx1ZXNcbiAgICAgICAgICAgIGNhc2UgJ3Nsb3ctMmcnOlxuICAgICAgICAgICAgY2FzZSAnMmcnOlxuICAgICAgICAgICAgY2FzZSAnM2cnOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICdjZWxsdWxhcic7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICc0Zyc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gJ3dpZmknO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0IGNsYXNzIE5ldHdvcmtXZWIgZXh0ZW5kcyBXZWJQbHVnaW4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmhhbmRsZU9ubGluZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbm5lY3Rpb25UeXBlID0gdHJhbnNsYXRlZENvbm5lY3Rpb24oKTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IHtcbiAgICAgICAgICAgICAgICBjb25uZWN0ZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgY29ubmVjdGlvblR5cGU6IGNvbm5lY3Rpb25UeXBlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5TGlzdGVuZXJzKCduZXR3b3JrU3RhdHVzQ2hhbmdlJywgc3RhdHVzKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVPZmZsaW5lID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0ge1xuICAgICAgICAgICAgICAgIGNvbm5lY3RlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29ubmVjdGlvblR5cGU6ICdub25lJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLm5vdGlmeUxpc3RlbmVycygnbmV0d29ya1N0YXR1c0NoYW5nZScsIHN0YXR1cyk7XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29ubGluZScsIHRoaXMuaGFuZGxlT25saW5lKTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvZmZsaW5lJywgdGhpcy5oYW5kbGVPZmZsaW5lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBnZXRTdGF0dXMoKSB7XG4gICAgICAgIGlmICghd2luZG93Lm5hdmlnYXRvcikge1xuICAgICAgICAgICAgdGhyb3cgdGhpcy51bmF2YWlsYWJsZSgnQnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSBOZXR3b3JrIEluZm9ybWF0aW9uIEFQSScpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbm5lY3RlZCA9IHdpbmRvdy5uYXZpZ2F0b3Iub25MaW5lO1xuICAgICAgICBjb25zdCBjb25uZWN0aW9uVHlwZSA9IHRyYW5zbGF0ZWRDb25uZWN0aW9uKCk7XG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IHtcbiAgICAgICAgICAgIGNvbm5lY3RlZCxcbiAgICAgICAgICAgIGNvbm5lY3Rpb25UeXBlOiBjb25uZWN0ZWQgPyBjb25uZWN0aW9uVHlwZSA6ICdub25lJyxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHN0YXR1cztcbiAgICB9XG59XG5jb25zdCBOZXR3b3JrID0gbmV3IE5ldHdvcmtXZWIoKTtcbmV4cG9ydCB7IE5ldHdvcmsgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdlYi5qcy5tYXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFNBQVMsdUJBQXVCO0FBQzVCLFFBQU0sYUFBYSxPQUFPLFVBQVUsY0FDaEMsT0FBTyxVQUFVLGlCQUNqQixPQUFPLFVBQVU7QUFDckIsTUFBSSxTQUFTO0FBQ2IsUUFBTSxPQUFPLGFBQWEsV0FBVyxRQUFRLFdBQVcsZ0JBQWdCO0FBQ3hFLE1BQUksUUFBUSxPQUFPLFNBQVMsVUFBVTtBQUNsQyxZQUFRO0FBQUEsV0FFQztBQUFBLFdBQ0E7QUFDRCxpQkFBUztBQUNUO0FBQUEsV0FDQztBQUNELGlCQUFTO0FBQ1Q7QUFBQSxXQUNDO0FBQUEsV0FDQTtBQUFBLFdBQ0E7QUFDRCxpQkFBUztBQUNUO0FBQUEsV0FDQztBQUFBLFdBQ0E7QUFDRCxpQkFBUztBQUNUO0FBQUEsV0FFQztBQUFBLFdBQ0E7QUFBQSxXQUNBO0FBQ0QsaUJBQVM7QUFDVDtBQUFBLFdBQ0M7QUFDRCxpQkFBUztBQUNUO0FBQUE7QUFBQSxFQUlYO0FBQ0QsU0FBTztBQUNYO0FBQ08sTUFBTSxtQkFBbUIsVUFBVTtBQUFBLEVBQ3RDLGNBQWM7QUFDVjtBQUNBLFNBQUssZUFBZSxNQUFNO0FBQ3RCLFlBQU0saUJBQWlCO0FBQ3ZCLFlBQU0sU0FBUztBQUFBLFFBQ1gsV0FBVztBQUFBLFFBQ1g7QUFBQSxNQUNoQjtBQUNZLFdBQUssZ0JBQWdCLHVCQUF1QixNQUFNO0FBQUEsSUFDOUQ7QUFDUSxTQUFLLGdCQUFnQixNQUFNO0FBQ3ZCLFlBQU0sU0FBUztBQUFBLFFBQ1gsV0FBVztBQUFBLFFBQ1gsZ0JBQWdCO0FBQUEsTUFDaEM7QUFDWSxXQUFLLGdCQUFnQix1QkFBdUIsTUFBTTtBQUFBLElBQzlEO0FBQ1EsUUFBSSxPQUFPLFdBQVcsYUFBYTtBQUMvQixhQUFPLGlCQUFpQixVQUFVLEtBQUssWUFBWTtBQUNuRCxhQUFPLGlCQUFpQixXQUFXLEtBQUssYUFBYTtBQUFBLElBQ3hEO0FBQUEsRUFDSjtBQUFBLEVBQ0QsTUFBTSxZQUFZO0FBQ2QsUUFBSSxDQUFDLE9BQU8sV0FBVztBQUNuQixZQUFNLEtBQUssWUFBWSxzREFBc0Q7QUFBQSxJQUNoRjtBQUNELFVBQU0sWUFBWSxPQUFPLFVBQVU7QUFDbkMsVUFBTSxpQkFBaUI7QUFDdkIsVUFBTSxTQUFTO0FBQUEsTUFDWDtBQUFBLE1BQ0EsZ0JBQWdCLFlBQVksaUJBQWlCO0FBQUEsSUFDekQ7QUFDUSxXQUFPO0FBQUEsRUFDVjtBQUNMO0FBQ0ssTUFBQyxVQUFVLElBQUksV0FBVTs7In0=
