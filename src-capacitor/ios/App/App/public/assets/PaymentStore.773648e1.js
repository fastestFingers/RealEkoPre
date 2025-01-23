import { I as defineStore, m as APIinterface } from "./index.61ed5618.js";
const usePaymentStore = defineStore("paymentstore", {
  state: () => ({
    loading: false,
    loading2: false,
    data: {},
    credentials: {},
    payment_uuid: {},
    payment_list: [],
    payment_credentials: [],
    data2: []
  }),
  getters: {
    hasData() {
      if (APIinterface.empty(this.payment_list)) {
        return false;
      } else {
        if (Object.keys(this.payment_list).length > 0) {
          return true;
        }
      }
      return false;
    },
    getPaymentList(state) {
      return state.data2;
    }
  },
  actions: {
    SavedPaymentList(merchantID) {
      this.loading = true;
      APIinterface.SavedPaymentList(APIinterface.getStorage("cart_uuid")).then((data) => {
        this.data[merchantID] = data.details.data;
        this.data2 = data.details.data;
        this.credentials[merchantID] = data.details.credentials;
        this.payment_uuid[merchantID] = data.details.default_payment_uuid;
      }).catch((error) => {
        this.data = {};
        this.data2 = [];
        this.credentials = {};
        this.payment_uuid = {};
      }).then((data) => {
        this.loading = false;
      });
    },
    PaymentMethod(done, params) {
      if (APIinterface.empty(done)) {
        this.loading2 = true;
      }
      APIinterface.fetchDataByTokenPost("PaymentMethod", params).then((data) => {
        this.payment_list = data.details.data;
        this.payment_credentials = data.details.credentials;
      }).catch((error) => {
        this.payment_list = [];
        this.payment_credentials = [];
      }).then((data) => {
        this.loading2 = false;
        if (!APIinterface.empty(done)) {
          done();
        }
      });
    },
    hadData() {
      if (APIinterface.empty(this.payment_list)) {
        return false;
      } else {
        if (Object.keys(this.payment_list).length > 0) {
          return true;
        }
      }
      return false;
    }
  }
});
export { usePaymentStore as u };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF5bWVudFN0b3JlLjc3MzY0OGUxLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc3RvcmVzL1BheW1lbnRTdG9yZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWZpbmVTdG9yZSB9IGZyb20gXCJwaW5pYVwiO1xuaW1wb3J0IEFQSWludGVyZmFjZSBmcm9tIFwic3JjL2FwaS9BUElpbnRlcmZhY2VcIjtcblxuZXhwb3J0IGNvbnN0IHVzZVBheW1lbnRTdG9yZSA9IGRlZmluZVN0b3JlKFwicGF5bWVudHN0b3JlXCIsIHtcbiAgc3RhdGU6ICgpID0+ICh7XG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgbG9hZGluZzI6IGZhbHNlLFxuICAgIGRhdGE6IHt9LFxuICAgIGNyZWRlbnRpYWxzOiB7fSxcbiAgICBwYXltZW50X3V1aWQ6IHt9LFxuICAgIHBheW1lbnRfbGlzdDogW10sXG4gICAgcGF5bWVudF9jcmVkZW50aWFsczogW10sXG4gICAgZGF0YTI6IFtdLFxuICB9KSxcblxuICBnZXR0ZXJzOiB7XG4gICAgaGFzRGF0YSgpIHtcbiAgICAgIGlmIChBUElpbnRlcmZhY2UuZW1wdHkodGhpcy5wYXltZW50X2xpc3QpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLnBheW1lbnRfbGlzdCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICBnZXRQYXltZW50TGlzdChzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLmRhdGEyO1xuICAgIH0sXG4gIH0sXG5cbiAgYWN0aW9uczoge1xuICAgIFNhdmVkUGF5bWVudExpc3QobWVyY2hhbnRJRCkge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIEFQSWludGVyZmFjZS5TYXZlZFBheW1lbnRMaXN0KEFQSWludGVyZmFjZS5nZXRTdG9yYWdlKFwiY2FydF91dWlkXCIpKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuZGF0YVttZXJjaGFudElEXSA9IGRhdGEuZGV0YWlscy5kYXRhO1xuICAgICAgICAgIHRoaXMuZGF0YTIgPSBkYXRhLmRldGFpbHMuZGF0YTtcbiAgICAgICAgICB0aGlzLmNyZWRlbnRpYWxzW21lcmNoYW50SURdID0gZGF0YS5kZXRhaWxzLmNyZWRlbnRpYWxzO1xuICAgICAgICAgIHRoaXMucGF5bWVudF91dWlkW21lcmNoYW50SURdID0gZGF0YS5kZXRhaWxzLmRlZmF1bHRfcGF5bWVudF91dWlkO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5kYXRhID0ge307XG4gICAgICAgICAgdGhpcy5kYXRhMiA9IFtdO1xuICAgICAgICAgIHRoaXMuY3JlZGVudGlhbHMgPSB7fTtcbiAgICAgICAgICB0aGlzLnBheW1lbnRfdXVpZCA9IHt9O1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIFBheW1lbnRNZXRob2QoZG9uZSwgcGFyYW1zKSB7XG4gICAgICBpZiAoQVBJaW50ZXJmYWNlLmVtcHR5KGRvbmUpKSB7XG4gICAgICAgIHRoaXMubG9hZGluZzIgPSB0cnVlO1xuICAgICAgfVxuICAgICAgQVBJaW50ZXJmYWNlLmZldGNoRGF0YUJ5VG9rZW5Qb3N0KFwiUGF5bWVudE1ldGhvZFwiLCBwYXJhbXMpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5wYXltZW50X2xpc3QgPSBkYXRhLmRldGFpbHMuZGF0YTtcbiAgICAgICAgICB0aGlzLnBheW1lbnRfY3JlZGVudGlhbHMgPSBkYXRhLmRldGFpbHMuY3JlZGVudGlhbHM7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLnBheW1lbnRfbGlzdCA9IFtdO1xuICAgICAgICAgIHRoaXMucGF5bWVudF9jcmVkZW50aWFscyA9IFtdO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZzIgPSBmYWxzZTtcbiAgICAgICAgICBpZiAoIUFQSWludGVyZmFjZS5lbXB0eShkb25lKSkge1xuICAgICAgICAgICAgZG9uZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBoYWREYXRhKCkge1xuICAgICAgaWYgKEFQSWludGVyZmFjZS5lbXB0eSh0aGlzLnBheW1lbnRfbGlzdCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMucGF5bWVudF9saXN0KS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICB9LFxufSk7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUdZLE1BQUMsa0JBQWtCLFlBQVksZ0JBQWdCO0FBQUEsRUFDekQsT0FBTyxPQUFPO0FBQUEsSUFDWixTQUFTO0FBQUEsSUFDVCxVQUFVO0FBQUEsSUFDVixNQUFNLENBQUU7QUFBQSxJQUNSLGFBQWEsQ0FBRTtBQUFBLElBQ2YsY0FBYyxDQUFFO0FBQUEsSUFDaEIsY0FBYyxDQUFFO0FBQUEsSUFDaEIscUJBQXFCLENBQUU7QUFBQSxJQUN2QixPQUFPLENBQUU7QUFBQSxFQUNiO0FBQUEsRUFFRSxTQUFTO0FBQUEsSUFDUCxVQUFVO0FBQ1IsVUFBSSxhQUFhLE1BQU0sS0FBSyxZQUFZLEdBQUc7QUFDekMsZUFBTztBQUFBLE1BQ2YsT0FBYTtBQUNMLFlBQUksT0FBTyxLQUFLLEtBQUssWUFBWSxFQUFFLFNBQVMsR0FBRztBQUM3QyxpQkFBTztBQUFBLFFBQ1I7QUFBQSxNQUNGO0FBQ0QsYUFBTztBQUFBLElBQ1I7QUFBQSxJQUNELGVBQWUsT0FBTztBQUNwQixhQUFPLE1BQU07QUFBQSxJQUNkO0FBQUEsRUFDRjtBQUFBLEVBRUQsU0FBUztBQUFBLElBQ1AsaUJBQWlCLFlBQVk7QUFDM0IsV0FBSyxVQUFVO0FBQ2YsbUJBQWEsaUJBQWlCLGFBQWEsV0FBVyxXQUFXLENBQUMsRUFDL0QsS0FBSyxDQUFDLFNBQVM7QUFDZCxhQUFLLEtBQUssY0FBYyxLQUFLLFFBQVE7QUFDckMsYUFBSyxRQUFRLEtBQUssUUFBUTtBQUMxQixhQUFLLFlBQVksY0FBYyxLQUFLLFFBQVE7QUFDNUMsYUFBSyxhQUFhLGNBQWMsS0FBSyxRQUFRO0FBQUEsTUFDdkQsQ0FBUyxFQUNBLE1BQU0sQ0FBQyxVQUFVO0FBQ2hCLGFBQUssT0FBTztBQUNaLGFBQUssUUFBUTtBQUNiLGFBQUssY0FBYztBQUNuQixhQUFLLGVBQWU7TUFDOUIsQ0FBUyxFQUNBLEtBQUssQ0FBQyxTQUFTO0FBQ2QsYUFBSyxVQUFVO0FBQUEsTUFDekIsQ0FBUztBQUFBLElBQ0o7QUFBQSxJQUNELGNBQWMsTUFBTSxRQUFRO0FBQzFCLFVBQUksYUFBYSxNQUFNLElBQUksR0FBRztBQUM1QixhQUFLLFdBQVc7QUFBQSxNQUNqQjtBQUNELG1CQUFhLHFCQUFxQixpQkFBaUIsTUFBTSxFQUN0RCxLQUFLLENBQUMsU0FBUztBQUNkLGFBQUssZUFBZSxLQUFLLFFBQVE7QUFDakMsYUFBSyxzQkFBc0IsS0FBSyxRQUFRO0FBQUEsTUFDbEQsQ0FBUyxFQUNBLE1BQU0sQ0FBQyxVQUFVO0FBQ2hCLGFBQUssZUFBZTtBQUNwQixhQUFLLHNCQUFzQjtNQUNyQyxDQUFTLEVBQ0EsS0FBSyxDQUFDLFNBQVM7QUFDZCxhQUFLLFdBQVc7QUFDaEIsWUFBSSxDQUFDLGFBQWEsTUFBTSxJQUFJLEdBQUc7QUFDN0I7UUFDRDtBQUFBLE1BQ1gsQ0FBUztBQUFBLElBQ0o7QUFBQSxJQUNELFVBQVU7QUFDUixVQUFJLGFBQWEsTUFBTSxLQUFLLFlBQVksR0FBRztBQUN6QyxlQUFPO0FBQUEsTUFDZixPQUFhO0FBQ0wsWUFBSSxPQUFPLEtBQUssS0FBSyxZQUFZLEVBQUUsU0FBUyxHQUFHO0FBQzdDLGlCQUFPO0FBQUEsUUFDUjtBQUFBLE1BQ0Y7QUFDRCxhQUFPO0FBQUEsSUFDUjtBQUFBLEVBQ0Y7QUFDSCxDQUFDOzsifQ==
