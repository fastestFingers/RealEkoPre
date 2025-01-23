import { I as defineStore, m as APIinterface } from "./index.61ed5618.js";
const useFavoriteStore = defineStore("favorite", {
  state: () => ({
    loading: false,
    items_data: {},
    items_done: false
  }),
  getters: {
    hasData() {
      if (APIinterface.empty(this.items_data)) {
        return false;
      } else {
        if (Object.keys(this.items_data).length > 0) {
          return true;
        }
      }
      return false;
    }
  },
  actions: {
    getItemFavorites(merchantSlug) {
      this.loading = true;
      APIinterface.fetchDataByTokenPost(
        "getItemFavorites",
        "slug=" + merchantSlug
      ).then((data) => {
        this.items_data[merchantSlug] = data.details.item_ids;
      }).catch((error) => {
        this.items_data[merchantSlug] = {};
      }).then((data) => {
        this.loading = false;
        this.items_done = true;
      });
    },
    hadData() {
      if (APIinterface.empty(this.items_data)) {
        return false;
      } else {
        if (Object.keys(this.items_data).length > 0) {
          return true;
        }
      }
      return false;
    }
  }
});
export { useFavoriteStore as u };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmF2b3JpdGVTdG9yZS5mOTFlNmYyMS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3N0b3Jlcy9GYXZvcml0ZVN0b3JlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlZmluZVN0b3JlIH0gZnJvbSBcInBpbmlhXCI7XG5pbXBvcnQgQVBJaW50ZXJmYWNlIGZyb20gXCJzcmMvYXBpL0FQSWludGVyZmFjZVwiO1xuXG5leHBvcnQgY29uc3QgdXNlRmF2b3JpdGVTdG9yZSA9IGRlZmluZVN0b3JlKFwiZmF2b3JpdGVcIiwge1xuICBzdGF0ZTogKCkgPT4gKHtcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBpdGVtc19kYXRhOiB7fSxcbiAgICBpdGVtc19kb25lOiBmYWxzZSxcbiAgfSksXG5cbiAgZ2V0dGVyczoge1xuICAgIGhhc0RhdGEoKSB7XG4gICAgICBpZiAoQVBJaW50ZXJmYWNlLmVtcHR5KHRoaXMuaXRlbXNfZGF0YSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuaXRlbXNfZGF0YSkubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgfSxcblxuICBhY3Rpb25zOiB7XG4gICAgZ2V0SXRlbUZhdm9yaXRlcyhtZXJjaGFudFNsdWcpIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICBBUElpbnRlcmZhY2UuZmV0Y2hEYXRhQnlUb2tlblBvc3QoXG4gICAgICAgIFwiZ2V0SXRlbUZhdm9yaXRlc1wiLFxuICAgICAgICBcInNsdWc9XCIgKyBtZXJjaGFudFNsdWdcbiAgICAgIClcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLml0ZW1zX2RhdGFbbWVyY2hhbnRTbHVnXSA9IGRhdGEuZGV0YWlscy5pdGVtX2lkcztcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMuaXRlbXNfZGF0YVttZXJjaGFudFNsdWddID0ge307XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5pdGVtc19kb25lID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBoYWREYXRhKCkge1xuICAgICAgaWYgKEFQSWludGVyZmFjZS5lbXB0eSh0aGlzLml0ZW1zX2RhdGEpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLml0ZW1zX2RhdGEpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gIH0sXG59KTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR1ksTUFBQyxtQkFBbUIsWUFBWSxZQUFZO0FBQUEsRUFDdEQsT0FBTyxPQUFPO0FBQUEsSUFDWixTQUFTO0FBQUEsSUFDVCxZQUFZLENBQUU7QUFBQSxJQUNkLFlBQVk7QUFBQSxFQUNoQjtBQUFBLEVBRUUsU0FBUztBQUFBLElBQ1AsVUFBVTtBQUNSLFVBQUksYUFBYSxNQUFNLEtBQUssVUFBVSxHQUFHO0FBQ3ZDLGVBQU87QUFBQSxNQUNmLE9BQWE7QUFDTCxZQUFJLE9BQU8sS0FBSyxLQUFLLFVBQVUsRUFBRSxTQUFTLEdBQUc7QUFDM0MsaUJBQU87QUFBQSxRQUNSO0FBQUEsTUFDRjtBQUNELGFBQU87QUFBQSxJQUNSO0FBQUEsRUFDRjtBQUFBLEVBRUQsU0FBUztBQUFBLElBQ1AsaUJBQWlCLGNBQWM7QUFDN0IsV0FBSyxVQUFVO0FBQ2YsbUJBQWE7QUFBQSxRQUNYO0FBQUEsUUFDQSxVQUFVO0FBQUEsTUFDWCxFQUNFLEtBQUssQ0FBQyxTQUFTO0FBQ2QsYUFBSyxXQUFXLGdCQUFnQixLQUFLLFFBQVE7QUFBQSxNQUN2RCxDQUFTLEVBQ0EsTUFBTSxDQUFDLFVBQVU7QUFDaEIsYUFBSyxXQUFXLGdCQUFnQjtNQUMxQyxDQUFTLEVBQ0EsS0FBSyxDQUFDLFNBQVM7QUFDZCxhQUFLLFVBQVU7QUFDZixhQUFLLGFBQWE7QUFBQSxNQUM1QixDQUFTO0FBQUEsSUFDSjtBQUFBLElBQ0QsVUFBVTtBQUNSLFVBQUksYUFBYSxNQUFNLEtBQUssVUFBVSxHQUFHO0FBQ3ZDLGVBQU87QUFBQSxNQUNmLE9BQWE7QUFDTCxZQUFJLE9BQU8sS0FBSyxLQUFLLFVBQVUsRUFBRSxTQUFTLEdBQUc7QUFDM0MsaUJBQU87QUFBQSxRQUNSO0FBQUEsTUFDRjtBQUNELGFBQU87QUFBQSxJQUNSO0FBQUEsRUFDRjtBQUNILENBQUM7OyJ9
