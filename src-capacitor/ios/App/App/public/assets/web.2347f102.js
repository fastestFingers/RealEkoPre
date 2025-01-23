import { W as WebPlugin } from "./index.61ed5618.js";
class GeolocationWeb extends WebPlugin {
  async getCurrentPosition(options) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((pos) => {
        resolve(pos);
      }, (err) => {
        reject(err);
      }, Object.assign({ enableHighAccuracy: false, timeout: 1e4, maximumAge: 0 }, options));
    });
  }
  async watchPosition(options, callback) {
    const id = navigator.geolocation.watchPosition((pos) => {
      callback(pos);
    }, (err) => {
      callback(null, err);
    }, Object.assign({ enableHighAccuracy: false, timeout: 1e4, maximumAge: 0 }, options));
    return `${id}`;
  }
  async clearWatch(options) {
    window.navigator.geolocation.clearWatch(parseInt(options.id, 10));
  }
  async checkPermissions() {
    if (typeof navigator === "undefined" || !navigator.permissions) {
      throw this.unavailable("Permissions API not available in this browser");
    }
    const permission = await window.navigator.permissions.query({
      name: "geolocation"
    });
    return { location: permission.state, coarseLocation: permission.state };
  }
  async requestPermissions() {
    throw this.unimplemented("Not implemented on web.");
  }
}
const Geolocation = new GeolocationWeb();
export { Geolocation, GeolocationWeb };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLjIzNDdmMTAyLmpzIiwic291cmNlcyI6WyIuLi8uLi9ub2RlX21vZHVsZXMvQGNhcGFjaXRvci9nZW9sb2NhdGlvbi9kaXN0L2VzbS93ZWIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV2ViUGx1Z2luIH0gZnJvbSAnQGNhcGFjaXRvci9jb3JlJztcbmV4cG9ydCBjbGFzcyBHZW9sb2NhdGlvbldlYiBleHRlbmRzIFdlYlBsdWdpbiB7XG4gICAgYXN5bmMgZ2V0Q3VycmVudFBvc2l0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24ocG9zID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHBvcyk7XG4gICAgICAgICAgICB9LCBlcnIgPT4ge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSwgT2JqZWN0LmFzc2lnbih7IGVuYWJsZUhpZ2hBY2N1cmFjeTogZmFsc2UsIHRpbWVvdXQ6IDEwMDAwLCBtYXhpbXVtQWdlOiAwIH0sIG9wdGlvbnMpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFzeW5jIHdhdGNoUG9zaXRpb24ob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgaWQgPSBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24ud2F0Y2hQb3NpdGlvbihwb3MgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2socG9zKTtcbiAgICAgICAgfSwgZXJyID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIGVycik7XG4gICAgICAgIH0sIE9iamVjdC5hc3NpZ24oeyBlbmFibGVIaWdoQWNjdXJhY3k6IGZhbHNlLCB0aW1lb3V0OiAxMDAwMCwgbWF4aW11bUFnZTogMCB9LCBvcHRpb25zKSk7XG4gICAgICAgIHJldHVybiBgJHtpZH1gO1xuICAgIH1cbiAgICBhc3luYyBjbGVhcldhdGNoKG9wdGlvbnMpIHtcbiAgICAgICAgd2luZG93Lm5hdmlnYXRvci5nZW9sb2NhdGlvbi5jbGVhcldhdGNoKHBhcnNlSW50KG9wdGlvbnMuaWQsIDEwKSk7XG4gICAgfVxuICAgIGFzeW5jIGNoZWNrUGVybWlzc2lvbnMoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbmF2aWdhdG9yID09PSAndW5kZWZpbmVkJyB8fCAhbmF2aWdhdG9yLnBlcm1pc3Npb25zKSB7XG4gICAgICAgICAgICB0aHJvdyB0aGlzLnVuYXZhaWxhYmxlKCdQZXJtaXNzaW9ucyBBUEkgbm90IGF2YWlsYWJsZSBpbiB0aGlzIGJyb3dzZXInKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwZXJtaXNzaW9uID0gYXdhaXQgd2luZG93Lm5hdmlnYXRvci5wZXJtaXNzaW9ucy5xdWVyeSh7XG4gICAgICAgICAgICBuYW1lOiAnZ2VvbG9jYXRpb24nLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHsgbG9jYXRpb246IHBlcm1pc3Npb24uc3RhdGUsIGNvYXJzZUxvY2F0aW9uOiBwZXJtaXNzaW9uLnN0YXRlIH07XG4gICAgfVxuICAgIGFzeW5jIHJlcXVlc3RQZXJtaXNzaW9ucygpIHtcbiAgICAgICAgdGhyb3cgdGhpcy51bmltcGxlbWVudGVkKCdOb3QgaW1wbGVtZW50ZWQgb24gd2ViLicpO1xuICAgIH1cbn1cbmNvbnN0IEdlb2xvY2F0aW9uID0gbmV3IEdlb2xvY2F0aW9uV2ViKCk7XG5leHBvcnQgeyBHZW9sb2NhdGlvbiB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2ViLmpzLm1hcCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ08sTUFBTSx1QkFBdUIsVUFBVTtBQUFBLEVBQzFDLE1BQU0sbUJBQW1CLFNBQVM7QUFDOUIsV0FBTyxJQUFJLFFBQVEsQ0FBQyxTQUFTLFdBQVc7QUFDcEMsZ0JBQVUsWUFBWSxtQkFBbUIsU0FBTztBQUM1QyxnQkFBUSxHQUFHO0FBQUEsTUFDZCxHQUFFLFNBQU87QUFDTixlQUFPLEdBQUc7QUFBQSxNQUNiLEdBQUUsT0FBTyxPQUFPLEVBQUUsb0JBQW9CLE9BQU8sU0FBUyxLQUFPLFlBQVksS0FBSyxPQUFPLENBQUM7QUFBQSxJQUNuRyxDQUFTO0FBQUEsRUFDSjtBQUFBLEVBQ0QsTUFBTSxjQUFjLFNBQVMsVUFBVTtBQUNuQyxVQUFNLEtBQUssVUFBVSxZQUFZLGNBQWMsU0FBTztBQUNsRCxlQUFTLEdBQUc7QUFBQSxJQUNmLEdBQUUsU0FBTztBQUNOLGVBQVMsTUFBTSxHQUFHO0FBQUEsSUFDckIsR0FBRSxPQUFPLE9BQU8sRUFBRSxvQkFBb0IsT0FBTyxTQUFTLEtBQU8sWUFBWSxLQUFLLE9BQU8sQ0FBQztBQUN2RixXQUFPLEdBQUc7QUFBQSxFQUNiO0FBQUEsRUFDRCxNQUFNLFdBQVcsU0FBUztBQUN0QixXQUFPLFVBQVUsWUFBWSxXQUFXLFNBQVMsUUFBUSxJQUFJLEVBQUUsQ0FBQztBQUFBLEVBQ25FO0FBQUEsRUFDRCxNQUFNLG1CQUFtQjtBQUNyQixRQUFJLE9BQU8sY0FBYyxlQUFlLENBQUMsVUFBVSxhQUFhO0FBQzVELFlBQU0sS0FBSyxZQUFZLCtDQUErQztBQUFBLElBQ3pFO0FBQ0QsVUFBTSxhQUFhLE1BQU0sT0FBTyxVQUFVLFlBQVksTUFBTTtBQUFBLE1BQ3hELE1BQU07QUFBQSxJQUNsQixDQUFTO0FBQ0QsV0FBTyxFQUFFLFVBQVUsV0FBVyxPQUFPLGdCQUFnQixXQUFXO0VBQ25FO0FBQUEsRUFDRCxNQUFNLHFCQUFxQjtBQUN2QixVQUFNLEtBQUssY0FBYyx5QkFBeUI7QUFBQSxFQUNyRDtBQUNMO0FBQ0ssTUFBQyxjQUFjLElBQUksZUFBYzs7In0=
