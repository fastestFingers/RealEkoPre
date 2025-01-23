import { S as useDataStorePersisted, I as defineStore, m as APIinterface } from "./index.61ed5618.js";
const DataStorePersisted = useDataStorePersisted();
const usePromoStore = defineStore("promostore", {
  state: () => ({
    data: {},
    loading: true,
    promo_selected: {},
    total_promo: {}
  }),
  persist: true,
  getters: {
    hasData() {
      if (APIinterface.empty(this.data)) {
        return false;
      } else {
        if (Object.keys(this.data).length > 0) {
          return true;
        }
      }
      return false;
    }
  },
  actions: {
    loadPromo(merchantID) {
      let currency_code = DataStorePersisted.getUseCurrency();
      this.loading = true;
      APIinterface.fetchDataPost(
        "loadPromo",
        "merchant_id=" + merchantID + "&cart_uuid=" + APIinterface.getStorage("cart_uuid") + "&currency_code=" + currency_code
      ).then((data) => {
        this.data[merchantID] = data.details.data;
        this.promo_selected[merchantID] = data.details.promo_selected;
        this.total_promo[merchantID] = data.details.count;
      }).catch((error) => {
        this.data = [];
        this.promo_selected = [];
        this.total_promo = [];
      }).then((data) => {
        this.loading = false;
      });
    },
    hadData() {
      if (APIinterface.empty(this.data)) {
        return false;
      } else {
        if (Object.keys(this.data).length > 0) {
          return true;
        }
      }
      return false;
    }
  }
});
export { usePromoStore as u };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvbW9TdG9yZS5hOWJmN2JiZi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3N0b3Jlcy9Qcm9tb1N0b3JlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlZmluZVN0b3JlIH0gZnJvbSBcInBpbmlhXCI7XG5pbXBvcnQgQVBJaW50ZXJmYWNlIGZyb20gXCJzcmMvYXBpL0FQSWludGVyZmFjZVwiO1xuaW1wb3J0IHsgdXNlRGF0YVN0b3JlUGVyc2lzdGVkIH0gZnJvbSBcInN0b3Jlcy9EYXRhU3RvcmVQZXJzaXN0ZWRcIjtcblxuY29uc3QgRGF0YVN0b3JlUGVyc2lzdGVkID0gdXNlRGF0YVN0b3JlUGVyc2lzdGVkKCk7XG5cbmV4cG9ydCBjb25zdCB1c2VQcm9tb1N0b3JlID0gZGVmaW5lU3RvcmUoXCJwcm9tb3N0b3JlXCIsIHtcbiAgc3RhdGU6ICgpID0+ICh7XG4gICAgZGF0YToge30sXG4gICAgbG9hZGluZzogdHJ1ZSxcbiAgICBwcm9tb19zZWxlY3RlZDoge30sXG4gICAgdG90YWxfcHJvbW86IHt9LFxuICB9KSxcbiAgcGVyc2lzdDogdHJ1ZSxcbiAgZ2V0dGVyczoge1xuICAgIGhhc0RhdGEoKSB7XG4gICAgICBpZiAoQVBJaW50ZXJmYWNlLmVtcHR5KHRoaXMuZGF0YSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZGF0YSkubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgfSxcbiAgYWN0aW9uczoge1xuICAgIGxvYWRQcm9tbyhtZXJjaGFudElEKSB7XG4gICAgICBsZXQgY3VycmVuY3lfY29kZSA9IERhdGFTdG9yZVBlcnNpc3RlZC5nZXRVc2VDdXJyZW5jeSgpO1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIEFQSWludGVyZmFjZS5mZXRjaERhdGFQb3N0KFxuICAgICAgICBcImxvYWRQcm9tb1wiLFxuICAgICAgICBcIm1lcmNoYW50X2lkPVwiICtcbiAgICAgICAgICBtZXJjaGFudElEICtcbiAgICAgICAgICBcIiZjYXJ0X3V1aWQ9XCIgK1xuICAgICAgICAgIEFQSWludGVyZmFjZS5nZXRTdG9yYWdlKFwiY2FydF91dWlkXCIpICtcbiAgICAgICAgICBcIiZjdXJyZW5jeV9jb2RlPVwiICtcbiAgICAgICAgICBjdXJyZW5jeV9jb2RlXG4gICAgICApXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5kYXRhW21lcmNoYW50SURdID0gZGF0YS5kZXRhaWxzLmRhdGE7XG4gICAgICAgICAgdGhpcy5wcm9tb19zZWxlY3RlZFttZXJjaGFudElEXSA9IGRhdGEuZGV0YWlscy5wcm9tb19zZWxlY3RlZDtcbiAgICAgICAgICB0aGlzLnRvdGFsX3Byb21vW21lcmNoYW50SURdID0gZGF0YS5kZXRhaWxzLmNvdW50O1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5kYXRhID0gW107XG4gICAgICAgICAgdGhpcy5wcm9tb19zZWxlY3RlZCA9IFtdO1xuICAgICAgICAgIHRoaXMudG90YWxfcHJvbW8gPSBbXTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBoYWREYXRhKCkge1xuICAgICAgaWYgKEFQSWludGVyZmFjZS5lbXB0eSh0aGlzLmRhdGEpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmRhdGEpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gIH0sXG59KTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBSUEsTUFBTSxxQkFBcUIsc0JBQXFCO0FBRXBDLE1BQUMsZ0JBQWdCLFlBQVksY0FBYztBQUFBLEVBQ3JELE9BQU8sT0FBTztBQUFBLElBQ1osTUFBTSxDQUFFO0FBQUEsSUFDUixTQUFTO0FBQUEsSUFDVCxnQkFBZ0IsQ0FBRTtBQUFBLElBQ2xCLGFBQWEsQ0FBRTtBQUFBLEVBQ25CO0FBQUEsRUFDRSxTQUFTO0FBQUEsRUFDVCxTQUFTO0FBQUEsSUFDUCxVQUFVO0FBQ1IsVUFBSSxhQUFhLE1BQU0sS0FBSyxJQUFJLEdBQUc7QUFDakMsZUFBTztBQUFBLE1BQ2YsT0FBYTtBQUNMLFlBQUksT0FBTyxLQUFLLEtBQUssSUFBSSxFQUFFLFNBQVMsR0FBRztBQUNyQyxpQkFBTztBQUFBLFFBQ1I7QUFBQSxNQUNGO0FBQ0QsYUFBTztBQUFBLElBQ1I7QUFBQSxFQUNGO0FBQUEsRUFDRCxTQUFTO0FBQUEsSUFDUCxVQUFVLFlBQVk7QUFDcEIsVUFBSSxnQkFBZ0IsbUJBQW1CO0FBQ3ZDLFdBQUssVUFBVTtBQUNmLG1CQUFhO0FBQUEsUUFDWDtBQUFBLFFBQ0EsaUJBQ0UsYUFDQSxnQkFDQSxhQUFhLFdBQVcsV0FBVyxJQUNuQyxvQkFDQTtBQUFBLE1BQ0gsRUFDRSxLQUFLLENBQUMsU0FBUztBQUNkLGFBQUssS0FBSyxjQUFjLEtBQUssUUFBUTtBQUNyQyxhQUFLLGVBQWUsY0FBYyxLQUFLLFFBQVE7QUFDL0MsYUFBSyxZQUFZLGNBQWMsS0FBSyxRQUFRO0FBQUEsTUFDdEQsQ0FBUyxFQUNBLE1BQU0sQ0FBQyxVQUFVO0FBQ2hCLGFBQUssT0FBTztBQUNaLGFBQUssaUJBQWlCO0FBQ3RCLGFBQUssY0FBYztNQUM3QixDQUFTLEVBQ0EsS0FBSyxDQUFDLFNBQVM7QUFDZCxhQUFLLFVBQVU7QUFBQSxNQUN6QixDQUFTO0FBQUEsSUFDSjtBQUFBLElBQ0QsVUFBVTtBQUNSLFVBQUksYUFBYSxNQUFNLEtBQUssSUFBSSxHQUFHO0FBQ2pDLGVBQU87QUFBQSxNQUNmLE9BQWE7QUFDTCxZQUFJLE9BQU8sS0FBSyxLQUFLLElBQUksRUFBRSxTQUFTLEdBQUc7QUFDckMsaUJBQU87QUFBQSxRQUNSO0FBQUEsTUFDRjtBQUNELGFBQU87QUFBQSxJQUNSO0FBQUEsRUFDRjtBQUNILENBQUM7OyJ9
