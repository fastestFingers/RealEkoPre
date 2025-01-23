import { W as WebPlugin } from "./index.61ed5618.js";
class ShareWeb extends WebPlugin {
  async canShare() {
    if (typeof navigator === "undefined" || !navigator.share) {
      return { value: false };
    } else {
      return { value: true };
    }
  }
  async share(options) {
    if (typeof navigator === "undefined" || !navigator.share) {
      throw this.unavailable("Share API not available in this browser");
    }
    await navigator.share({
      title: options.title,
      text: options.text,
      url: options.url
    });
    return {};
  }
}
export { ShareWeb };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLjY0MzA2NDQwLmpzIiwic291cmNlcyI6WyIuLi8uLi9ub2RlX21vZHVsZXMvQGNhcGFjaXRvci9zaGFyZS9kaXN0L2VzbS93ZWIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV2ViUGx1Z2luIH0gZnJvbSAnQGNhcGFjaXRvci9jb3JlJztcbmV4cG9ydCBjbGFzcyBTaGFyZVdlYiBleHRlbmRzIFdlYlBsdWdpbiB7XG4gICAgYXN5bmMgY2FuU2hhcmUoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbmF2aWdhdG9yID09PSAndW5kZWZpbmVkJyB8fCAhbmF2aWdhdG9yLnNoYXJlKSB7XG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogZmFsc2UgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiB0cnVlIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgc2hhcmUob3B0aW9ucykge1xuICAgICAgICBpZiAodHlwZW9mIG5hdmlnYXRvciA9PT0gJ3VuZGVmaW5lZCcgfHwgIW5hdmlnYXRvci5zaGFyZSkge1xuICAgICAgICAgICAgdGhyb3cgdGhpcy51bmF2YWlsYWJsZSgnU2hhcmUgQVBJIG5vdCBhdmFpbGFibGUgaW4gdGhpcyBicm93c2VyJyk7XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgbmF2aWdhdG9yLnNoYXJlKHtcbiAgICAgICAgICAgIHRpdGxlOiBvcHRpb25zLnRpdGxlLFxuICAgICAgICAgICAgdGV4dDogb3B0aW9ucy50ZXh0LFxuICAgICAgICAgICAgdXJsOiBvcHRpb25zLnVybCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD13ZWIuanMubWFwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDTyxNQUFNLGlCQUFpQixVQUFVO0FBQUEsRUFDcEMsTUFBTSxXQUFXO0FBQ2IsUUFBSSxPQUFPLGNBQWMsZUFBZSxDQUFDLFVBQVUsT0FBTztBQUN0RCxhQUFPLEVBQUUsT0FBTztJQUNuQixPQUNJO0FBQ0QsYUFBTyxFQUFFLE9BQU87SUFDbkI7QUFBQSxFQUNKO0FBQUEsRUFDRCxNQUFNLE1BQU0sU0FBUztBQUNqQixRQUFJLE9BQU8sY0FBYyxlQUFlLENBQUMsVUFBVSxPQUFPO0FBQ3RELFlBQU0sS0FBSyxZQUFZLHlDQUF5QztBQUFBLElBQ25FO0FBQ0QsVUFBTSxVQUFVLE1BQU07QUFBQSxNQUNsQixPQUFPLFFBQVE7QUFBQSxNQUNmLE1BQU0sUUFBUTtBQUFBLE1BQ2QsS0FBSyxRQUFRO0FBQUEsSUFDekIsQ0FBUztBQUNELFdBQU87RUFDVjtBQUNMOzsifQ==
