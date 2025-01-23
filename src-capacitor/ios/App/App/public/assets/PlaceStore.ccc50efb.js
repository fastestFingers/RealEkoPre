import { I as defineStore, m as APIinterface } from "./index.61ed5618.js";
const usePlaceStore = defineStore("placeStore", {
  state: () => ({
    data: [],
    address: ""
  }),
  actions: {
    getPlace() {
      const $placeData = APIinterface.getStorage("place_data");
      if (typeof $placeData !== "undefined" && $placeData !== null) {
        this.address = $placeData.address.formatted_address;
        this.data = $placeData;
      } else {
        this.data = [];
        this.address = "";
      }
    }
  }
});
export { usePlaceStore as u };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxhY2VTdG9yZS5jY2M1MGVmYi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3N0b3Jlcy9QbGFjZVN0b3JlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlZmluZVN0b3JlIH0gZnJvbSBcInBpbmlhXCI7XG5pbXBvcnQgQVBJaW50ZXJmYWNlIGZyb20gXCJzcmMvYXBpL0FQSWludGVyZmFjZVwiO1xuXG5leHBvcnQgY29uc3QgdXNlUGxhY2VTdG9yZSA9IGRlZmluZVN0b3JlKFwicGxhY2VTdG9yZVwiLCB7XG4gIHN0YXRlOiAoKSA9PiAoe1xuICAgIGRhdGE6IFtdLFxuICAgIGFkZHJlc3M6IFwiXCIsXG4gIH0pLFxuXG4gIGFjdGlvbnM6IHtcbiAgICBnZXRQbGFjZSgpIHtcbiAgICAgIGNvbnN0ICRwbGFjZURhdGEgPSBBUElpbnRlcmZhY2UuZ2V0U3RvcmFnZShcInBsYWNlX2RhdGFcIik7XG4gICAgICBpZiAodHlwZW9mICRwbGFjZURhdGEgIT09IFwidW5kZWZpbmVkXCIgJiYgJHBsYWNlRGF0YSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmFkZHJlc3MgPSAkcGxhY2VEYXRhLmFkZHJlc3MuZm9ybWF0dGVkX2FkZHJlc3M7XG4gICAgICAgIHRoaXMuZGF0YSA9ICRwbGFjZURhdGE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICAgICAgdGhpcy5hZGRyZXNzID0gXCJcIjtcbiAgICAgIH1cbiAgICB9LFxuICB9LFxufSk7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUdZLE1BQUMsZ0JBQWdCLFlBQVksY0FBYztBQUFBLEVBQ3JELE9BQU8sT0FBTztBQUFBLElBQ1osTUFBTSxDQUFFO0FBQUEsSUFDUixTQUFTO0FBQUEsRUFDYjtBQUFBLEVBRUUsU0FBUztBQUFBLElBQ1AsV0FBVztBQUNULFlBQU0sYUFBYSxhQUFhLFdBQVcsWUFBWTtBQUN2RCxVQUFJLE9BQU8sZUFBZSxlQUFlLGVBQWUsTUFBTTtBQUM1RCxhQUFLLFVBQVUsV0FBVyxRQUFRO0FBQ2xDLGFBQUssT0FBTztBQUFBLE1BQ3BCLE9BQWE7QUFDTCxhQUFLLE9BQU87QUFDWixhQUFLLFVBQVU7QUFBQSxNQUNoQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0gsQ0FBQzs7In0=
