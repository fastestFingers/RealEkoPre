import { W as WebPlugin } from "./index.61ed5618.js";
class ToastWeb extends WebPlugin {
  async show(options) {
    if (typeof document !== "undefined") {
      let duration = 2e3;
      if (options.duration) {
        duration = options.duration === "long" ? 3500 : 2e3;
      }
      const toast = document.createElement("pwa-toast");
      toast.duration = duration;
      toast.message = options.text;
      document.body.appendChild(toast);
    }
  }
}
export { ToastWeb };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLjlhMTc2MzFmLmpzIiwic291cmNlcyI6WyIuLi8uLi9ub2RlX21vZHVsZXMvQGNhcGFjaXRvci90b2FzdC9kaXN0L2VzbS93ZWIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV2ViUGx1Z2luIH0gZnJvbSAnQGNhcGFjaXRvci9jb3JlJztcbmV4cG9ydCBjbGFzcyBUb2FzdFdlYiBleHRlbmRzIFdlYlBsdWdpbiB7XG4gICAgYXN5bmMgc2hvdyhvcHRpb25zKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBsZXQgZHVyYXRpb24gPSAyMDAwO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuZHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbiA9IG9wdGlvbnMuZHVyYXRpb24gPT09ICdsb25nJyA/IDM1MDAgOiAyMDAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdG9hc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwd2EtdG9hc3QnKTtcbiAgICAgICAgICAgIHRvYXN0LmR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgICAgICAgICB0b2FzdC5tZXNzYWdlID0gb3B0aW9ucy50ZXh0O1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0b2FzdCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD13ZWIuanMubWFwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDTyxNQUFNLGlCQUFpQixVQUFVO0FBQUEsRUFDcEMsTUFBTSxLQUFLLFNBQVM7QUFDaEIsUUFBSSxPQUFPLGFBQWEsYUFBYTtBQUNqQyxVQUFJLFdBQVc7QUFDZixVQUFJLFFBQVEsVUFBVTtBQUNsQixtQkFBVyxRQUFRLGFBQWEsU0FBUyxPQUFPO0FBQUEsTUFDbkQ7QUFDRCxZQUFNLFFBQVEsU0FBUyxjQUFjLFdBQVc7QUFDaEQsWUFBTSxXQUFXO0FBQ2pCLFlBQU0sVUFBVSxRQUFRO0FBQ3hCLGVBQVMsS0FBSyxZQUFZLEtBQUs7QUFBQSxJQUNsQztBQUFBLEVBQ0o7QUFDTDs7In0=
