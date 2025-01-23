import { S as useDataStorePersisted, I as defineStore, m as APIinterface, aw as auth, aO as Plugin } from "./index.61ed5618.js";
const DataStorePersisted = useDataStorePersisted();
const useCartStore = defineStore("cartstore", {
  state: () => ({
    loading: false,
    items_count: 0,
    cart_loading: true,
    cart_reloading: false,
    cart_uuid: "",
    cart_items: [],
    cart_summary: [],
    transaction_data: [],
    data: 0,
    cart_subtotal: 0,
    cart_total: 0,
    error: [],
    out_of_range: false,
    cart_merchant: [],
    address_component: [],
    phone_details: [],
    resp_opening: [],
    transaction_info: [],
    data_transaction: [],
    $q: void 0,
    tips_data: [],
    enabled_tip: false,
    enabled_voucher: false,
    cart_payload: [
      "items",
      "subtotal",
      "distance_local",
      "items_count",
      "merchant_info",
      "check_opening",
      "transaction_info"
    ],
    points_data: []
  }),
  getters: {
    canProceed() {
      let $return = true;
      if (this.items_count <= 0) {
        $return = false;
      }
      if (this.out_of_range === true) {
        $return = false;
      }
      if (this.error.length > 0) {
        $return = false;
      }
      return $return;
    },
    hasData() {
      if (APIinterface.empty(this.cart_items))
        ;
      else {
        if (Object.keys(this.cart_items).length > 0) {
          return true;
        }
      }
      return false;
    },
    hasItem() {
      if (this.items_count > 0) {
        return true;
      }
      return false;
    },
    getErrorMsg() {
      let errorMsg = "";
      if (this.error.length > 0) {
        Object.entries(this.error).forEach(([key, items]) => {
          errorMsg += items + "\n";
        });
      }
      return errorMsg;
    }
  },
  actions: {
    getCount() {
      const $params = {
        cart_uuid: APIinterface.getStorage("cart_uuid"),
        place_id: APIinterface.getStorage("place_id"),
        payload: ["items_count"]
      };
      this.loading = true;
      APIinterface.getCart($params, true).then((data) => {
        this.items_count = data.details.items_count;
      }).catch((error) => {
        this.items_count = 0;
      }).then((data) => {
        this.loading = false;
      });
    },
    getCart(cardLoading, payload) {
      const $data = {
        cart_uuid: APIinterface.getStorage("cart_uuid"),
        place_id: APIinterface.getStorage("place_id"),
        currency_code: DataStorePersisted.getUseCurrency(),
        payload,
        choosen_delivery: APIinterface.getStorage("choosen_delivery")
      };
      if (cardLoading) {
        this.cart_loading = true;
      } else {
        this.cart_reloading = true;
      }
      let $isCheckout = true;
      if (auth.authenticated()) {
        $isCheckout = false;
      }
      APIinterface.getCart($data, $isCheckout).then((data) => {
        this.items_count = data.details.items_count;
        this.cart_uuid = data.details.cart_uuid;
        this.cart_items = data.details.data.items;
        this.cart_summary = data.details.data.summary;
        this.cart_total = data.details.data.total;
        this.error = data.details.error;
        this.cart_subtotal = data.details.data.subtotal;
        this.out_of_range = data.details.out_of_range;
        this.transaction_info = data.details.transaction_info;
        this.data_transaction = data.details.data_transaction;
        this.tips_data = data.details.tips_data;
        this.enabled_tip = data.details.enabled_tip;
        this.enabled_voucher = data.details.enabled_voucher;
        if (!APIinterface.empty(data.details.data.merchant)) {
          this.cart_merchant = data.details.data.merchant;
          Plugin.set("cart_merchant_slug", this.cart_merchant.slug);
        }
        this.address_component = data.details.address_component;
        this.phone_details = data.details.phone_details;
        this.resp_opening = data.details.resp_opening;
        this.points_data = data.details.points_data;
      }).catch((error) => {
        this.resetData();
      }).then((data) => {
        this.cart_loading = false;
        this.cart_reloading = false;
      });
    },
    resetData() {
      this.items_count = 0;
      this.cart_items = [];
      this.cart_summary = [];
      this.cart_total = [];
      this.error = [];
      this.cart_subtotal = [];
      this.cart_merchant = [];
      this.address_component = [];
      this.phone_details = [];
      this.transaction_info = [];
      this.data_transaction = [];
      this.tips_data = [];
      this.enabled_tip = false;
      this.enabled_voucher = false;
    },
    hadItem() {
      if (this.items_count > 0) {
        return true;
      }
      return false;
    },
    hadData() {
      if (APIinterface.empty(this.cart_items)) {
        return false;
      } else {
        if (Object.keys(this.cart_items).length > 0) {
          return true;
        }
      }
      return false;
    },
    canCheckout() {
      let $return = true;
      if (this.items_count <= 0) {
        $return = false;
      }
      if (this.out_of_range === true) {
        $return = false;
      }
      if (this.error.length > 0) {
        $return = false;
      }
      return $return;
    },
    getError() {
      let errorMsg = "";
      if (this.error.length > 0) {
        Object.entries(this.error).forEach(([key, items]) => {
          errorMsg += items + "\n";
        });
      }
      return errorMsg;
    }
  }
});
export { useCartStore as u };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FydFN0b3JlLjQ4NGZmMTAxLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc3RvcmVzL0NhcnRTdG9yZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWZpbmVTdG9yZSB9IGZyb20gXCJwaW5pYVwiO1xuaW1wb3J0IEFQSWludGVyZmFjZSBmcm9tIFwic3JjL2FwaS9BUElpbnRlcmZhY2VcIjtcbmltcG9ydCBhdXRoIGZyb20gXCJzcmMvYXBpL2F1dGhcIjtcbmltcG9ydCB7IFNlc3Npb25TdG9yYWdlIH0gZnJvbSBcInF1YXNhclwiO1xuaW1wb3J0IHsgdXNlRGF0YVN0b3JlUGVyc2lzdGVkIH0gZnJvbSBcInN0b3Jlcy9EYXRhU3RvcmVQZXJzaXN0ZWRcIjtcblxuY29uc3QgRGF0YVN0b3JlUGVyc2lzdGVkID0gdXNlRGF0YVN0b3JlUGVyc2lzdGVkKCk7XG5cbmV4cG9ydCBjb25zdCB1c2VDYXJ0U3RvcmUgPSBkZWZpbmVTdG9yZShcImNhcnRzdG9yZVwiLCB7XG4gIHN0YXRlOiAoKSA9PiAoe1xuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIGl0ZW1zX2NvdW50OiAwLFxuICAgIGNhcnRfbG9hZGluZzogdHJ1ZSxcbiAgICBjYXJ0X3JlbG9hZGluZzogZmFsc2UsXG4gICAgY2FydF91dWlkOiBcIlwiLFxuICAgIGNhcnRfaXRlbXM6IFtdLFxuICAgIGNhcnRfc3VtbWFyeTogW10sXG4gICAgdHJhbnNhY3Rpb25fZGF0YTogW10sXG4gICAgZGF0YTogMCxcbiAgICBjYXJ0X3N1YnRvdGFsOiAwLFxuICAgIGNhcnRfdG90YWw6IDAsXG4gICAgZXJyb3I6IFtdLFxuICAgIG91dF9vZl9yYW5nZTogZmFsc2UsXG4gICAgY2FydF9tZXJjaGFudDogW10sXG4gICAgYWRkcmVzc19jb21wb25lbnQ6IFtdLFxuICAgIHBob25lX2RldGFpbHM6IFtdLFxuICAgIHJlc3Bfb3BlbmluZzogW10sXG4gICAgdHJhbnNhY3Rpb25faW5mbzogW10sXG4gICAgZGF0YV90cmFuc2FjdGlvbjogW10sXG4gICAgJHE6IHVuZGVmaW5lZCxcbiAgICB0aXBzX2RhdGE6IFtdLFxuICAgIGVuYWJsZWRfdGlwOiBmYWxzZSxcbiAgICBlbmFibGVkX3ZvdWNoZXI6IGZhbHNlLFxuICAgIGNhcnRfcGF5bG9hZDogW1xuICAgICAgXCJpdGVtc1wiLFxuICAgICAgXCJzdWJ0b3RhbFwiLFxuICAgICAgXCJkaXN0YW5jZV9sb2NhbFwiLFxuICAgICAgXCJpdGVtc19jb3VudFwiLFxuICAgICAgXCJtZXJjaGFudF9pbmZvXCIsXG4gICAgICBcImNoZWNrX29wZW5pbmdcIixcbiAgICAgIFwidHJhbnNhY3Rpb25faW5mb1wiLFxuICAgIF0sXG4gICAgcG9pbnRzX2RhdGE6IFtdLFxuICB9KSxcbiAgZ2V0dGVyczoge1xuICAgIGNhblByb2NlZWQoKSB7XG4gICAgICBsZXQgJHJldHVybiA9IHRydWU7XG4gICAgICBpZiAodGhpcy5pdGVtc19jb3VudCA8PSAwKSB7XG4gICAgICAgICRyZXR1cm4gPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm91dF9vZl9yYW5nZSA9PT0gdHJ1ZSkge1xuICAgICAgICAkcmV0dXJuID0gZmFsc2U7XG4gICAgICB9XG4gICAgICAvLyBPYmplY3Qua2V5cyhkYXRhLmRldGFpbHMuZGF0YSkubGVuZ3RoXG4gICAgICBpZiAodGhpcy5lcnJvci5sZW5ndGggPiAwKSB7XG4gICAgICAgICRyZXR1cm4gPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAkcmV0dXJuO1xuICAgIH0sXG4gICAgaGFzRGF0YSgpIHtcbiAgICAgIGlmIChBUElpbnRlcmZhY2UuZW1wdHkodGhpcy5jYXJ0X2l0ZW1zKSkge1xuICAgICAgICAvL1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuY2FydF9pdGVtcykubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICBoYXNJdGVtKCkge1xuICAgICAgaWYgKHRoaXMuaXRlbXNfY291bnQgPiAwKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgZ2V0RXJyb3JNc2coKSB7XG4gICAgICBsZXQgZXJyb3JNc2cgPSBcIlwiO1xuICAgICAgaWYgKHRoaXMuZXJyb3IubGVuZ3RoID4gMCkge1xuICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLmVycm9yKS5mb3JFYWNoKChba2V5LCBpdGVtc10pID0+IHtcbiAgICAgICAgICBlcnJvck1zZyArPSBpdGVtcyArIFwiXFxuXCI7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGVycm9yTXNnO1xuICAgIH0sXG4gIH0sXG4gIGFjdGlvbnM6IHtcbiAgICAvLyBnZXRDYXJ0Q291bnQoKSB7XG4gICAgLy8gICBjb25zdCAkcGFyYW1zID0ge1xuICAgIC8vICAgICBjYXJ0X3V1aWQ6IEFQSWludGVyZmFjZS5nZXRTdG9yYWdlKFwiY2FydF91dWlkXCIpLFxuICAgIC8vICAgICBwbGFjZV9pZDogQVBJaW50ZXJmYWNlLmdldFN0b3JhZ2UoXCJwbGFjZV9pZFwiKSxcbiAgICAvLyAgICAgcGF5bG9hZDogW1wic3VidG90YWxcIiwgXCJkaXN0YW5jZV9sb2NhbFwiLCBcIml0ZW1zX2NvdW50XCIsIFwibWVyY2hhbnRfaW5mb1wiXSxcbiAgICAvLyAgIH07XG4gICAgLy8gICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIC8vICAgQVBJaW50ZXJmYWNlLmdldENhcnQoJHBhcmFtcywgdHJ1ZSlcbiAgICAvLyAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAvLyAgICAgICB0aGlzLmRhdGEgPSBkYXRhLmRldGFpbHM7XG4gICAgLy8gICAgIH0pXG4gICAgLy8gICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAvLyAgICAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAvLyAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfSxcbiAgICBnZXRDb3VudCgpIHtcbiAgICAgIGNvbnN0ICRwYXJhbXMgPSB7XG4gICAgICAgIGNhcnRfdXVpZDogQVBJaW50ZXJmYWNlLmdldFN0b3JhZ2UoXCJjYXJ0X3V1aWRcIiksXG4gICAgICAgIHBsYWNlX2lkOiBBUElpbnRlcmZhY2UuZ2V0U3RvcmFnZShcInBsYWNlX2lkXCIpLFxuICAgICAgICBwYXlsb2FkOiBbXCJpdGVtc19jb3VudFwiXSxcbiAgICAgIH07XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgQVBJaW50ZXJmYWNlLmdldENhcnQoJHBhcmFtcywgdHJ1ZSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLml0ZW1zX2NvdW50ID0gZGF0YS5kZXRhaWxzLml0ZW1zX2NvdW50O1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5pdGVtc19jb3VudCA9IDA7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0Q2FydChjYXJkTG9hZGluZywgcGF5bG9hZCkge1xuICAgICAgY29uc3QgJGRhdGEgPSB7XG4gICAgICAgIGNhcnRfdXVpZDogQVBJaW50ZXJmYWNlLmdldFN0b3JhZ2UoXCJjYXJ0X3V1aWRcIiksXG4gICAgICAgIHBsYWNlX2lkOiBBUElpbnRlcmZhY2UuZ2V0U3RvcmFnZShcInBsYWNlX2lkXCIpLFxuICAgICAgICBjdXJyZW5jeV9jb2RlOiBEYXRhU3RvcmVQZXJzaXN0ZWQuZ2V0VXNlQ3VycmVuY3koKSxcbiAgICAgICAgcGF5bG9hZCxcbiAgICAgICAgY2hvb3Nlbl9kZWxpdmVyeTogQVBJaW50ZXJmYWNlLmdldFN0b3JhZ2UoXCJjaG9vc2VuX2RlbGl2ZXJ5XCIpLFxuICAgICAgfTtcblxuICAgICAgaWYgKGNhcmRMb2FkaW5nKSB7XG4gICAgICAgIHRoaXMuY2FydF9sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2FydF9yZWxvYWRpbmcgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBsZXQgJGlzQ2hlY2tvdXQgPSB0cnVlO1xuICAgICAgaWYgKGF1dGguYXV0aGVudGljYXRlZCgpKSB7XG4gICAgICAgICRpc0NoZWNrb3V0ID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIEFQSWludGVyZmFjZS5nZXRDYXJ0KCRkYXRhLCAkaXNDaGVja291dClcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLml0ZW1zX2NvdW50ID0gZGF0YS5kZXRhaWxzLml0ZW1zX2NvdW50O1xuICAgICAgICAgIHRoaXMuY2FydF91dWlkID0gZGF0YS5kZXRhaWxzLmNhcnRfdXVpZDtcbiAgICAgICAgICB0aGlzLmNhcnRfaXRlbXMgPSBkYXRhLmRldGFpbHMuZGF0YS5pdGVtcztcbiAgICAgICAgICB0aGlzLmNhcnRfc3VtbWFyeSA9IGRhdGEuZGV0YWlscy5kYXRhLnN1bW1hcnk7XG4gICAgICAgICAgdGhpcy5jYXJ0X3RvdGFsID0gZGF0YS5kZXRhaWxzLmRhdGEudG90YWw7XG4gICAgICAgICAgdGhpcy5lcnJvciA9IGRhdGEuZGV0YWlscy5lcnJvcjtcbiAgICAgICAgICB0aGlzLmNhcnRfc3VidG90YWwgPSBkYXRhLmRldGFpbHMuZGF0YS5zdWJ0b3RhbDtcbiAgICAgICAgICB0aGlzLm91dF9vZl9yYW5nZSA9IGRhdGEuZGV0YWlscy5vdXRfb2ZfcmFuZ2U7XG4gICAgICAgICAgdGhpcy50cmFuc2FjdGlvbl9pbmZvID0gZGF0YS5kZXRhaWxzLnRyYW5zYWN0aW9uX2luZm87XG4gICAgICAgICAgdGhpcy5kYXRhX3RyYW5zYWN0aW9uID0gZGF0YS5kZXRhaWxzLmRhdGFfdHJhbnNhY3Rpb247XG4gICAgICAgICAgdGhpcy50aXBzX2RhdGEgPSBkYXRhLmRldGFpbHMudGlwc19kYXRhO1xuICAgICAgICAgIHRoaXMuZW5hYmxlZF90aXAgPSBkYXRhLmRldGFpbHMuZW5hYmxlZF90aXA7XG4gICAgICAgICAgdGhpcy5lbmFibGVkX3ZvdWNoZXIgPSBkYXRhLmRldGFpbHMuZW5hYmxlZF92b3VjaGVyO1xuXG4gICAgICAgICAgaWYgKCFBUElpbnRlcmZhY2UuZW1wdHkoZGF0YS5kZXRhaWxzLmRhdGEubWVyY2hhbnQpKSB7XG4gICAgICAgICAgICB0aGlzLmNhcnRfbWVyY2hhbnQgPSBkYXRhLmRldGFpbHMuZGF0YS5tZXJjaGFudDtcbiAgICAgICAgICAgIFNlc3Npb25TdG9yYWdlLnNldChcImNhcnRfbWVyY2hhbnRfc2x1Z1wiLCB0aGlzLmNhcnRfbWVyY2hhbnQuc2x1Zyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5hZGRyZXNzX2NvbXBvbmVudCA9IGRhdGEuZGV0YWlscy5hZGRyZXNzX2NvbXBvbmVudDtcbiAgICAgICAgICB0aGlzLnBob25lX2RldGFpbHMgPSBkYXRhLmRldGFpbHMucGhvbmVfZGV0YWlscztcbiAgICAgICAgICB0aGlzLnJlc3Bfb3BlbmluZyA9IGRhdGEuZGV0YWlscy5yZXNwX29wZW5pbmc7XG5cbiAgICAgICAgICB0aGlzLnBvaW50c19kYXRhID0gZGF0YS5kZXRhaWxzLnBvaW50c19kYXRhO1xuICAgICAgICB9KVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMucmVzZXREYXRhKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5jYXJ0X2xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmNhcnRfcmVsb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgcmVzZXREYXRhKCkge1xuICAgICAgdGhpcy5pdGVtc19jb3VudCA9IDA7XG4gICAgICB0aGlzLmNhcnRfaXRlbXMgPSBbXTtcbiAgICAgIHRoaXMuY2FydF9zdW1tYXJ5ID0gW107XG4gICAgICB0aGlzLmNhcnRfdG90YWwgPSBbXTtcbiAgICAgIHRoaXMuZXJyb3IgPSBbXTtcbiAgICAgIHRoaXMuY2FydF9zdWJ0b3RhbCA9IFtdO1xuICAgICAgdGhpcy5jYXJ0X21lcmNoYW50ID0gW107XG4gICAgICB0aGlzLmFkZHJlc3NfY29tcG9uZW50ID0gW107XG4gICAgICB0aGlzLnBob25lX2RldGFpbHMgPSBbXTtcbiAgICAgIHRoaXMudHJhbnNhY3Rpb25faW5mbyA9IFtdO1xuICAgICAgdGhpcy5kYXRhX3RyYW5zYWN0aW9uID0gW107XG4gICAgICB0aGlzLnRpcHNfZGF0YSA9IFtdO1xuICAgICAgdGhpcy5lbmFibGVkX3RpcCA9IGZhbHNlO1xuICAgICAgdGhpcy5lbmFibGVkX3ZvdWNoZXIgPSBmYWxzZTtcbiAgICB9LFxuICAgIGhhZEl0ZW0oKSB7XG4gICAgICBpZiAodGhpcy5pdGVtc19jb3VudCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICBoYWREYXRhKCkge1xuICAgICAgaWYgKEFQSWludGVyZmFjZS5lbXB0eSh0aGlzLmNhcnRfaXRlbXMpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmNhcnRfaXRlbXMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgY2FuQ2hlY2tvdXQoKSB7XG4gICAgICBsZXQgJHJldHVybiA9IHRydWU7XG4gICAgICBpZiAodGhpcy5pdGVtc19jb3VudCA8PSAwKSB7XG4gICAgICAgICRyZXR1cm4gPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm91dF9vZl9yYW5nZSA9PT0gdHJ1ZSkge1xuICAgICAgICAkcmV0dXJuID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5lcnJvci5sZW5ndGggPiAwKSB7XG4gICAgICAgICRyZXR1cm4gPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAkcmV0dXJuO1xuICAgIH0sXG4gICAgZ2V0RXJyb3IoKSB7XG4gICAgICBsZXQgZXJyb3JNc2cgPSBcIlwiO1xuICAgICAgaWYgKHRoaXMuZXJyb3IubGVuZ3RoID4gMCkge1xuICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLmVycm9yKS5mb3JFYWNoKChba2V5LCBpdGVtc10pID0+IHtcbiAgICAgICAgICBlcnJvck1zZyArPSBpdGVtcyArIFwiXFxuXCI7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGVycm9yTXNnO1xuICAgIH0sXG4gIH0sXG59KTtcbiJdLCJuYW1lcyI6WyJTZXNzaW9uU3RvcmFnZSJdLCJtYXBwaW5ncyI6IjtBQU1BLE1BQU0scUJBQXFCLHNCQUFxQjtBQUVwQyxNQUFDLGVBQWUsWUFBWSxhQUFhO0FBQUEsRUFDbkQsT0FBTyxPQUFPO0FBQUEsSUFDWixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsSUFDYixjQUFjO0FBQUEsSUFDZCxnQkFBZ0I7QUFBQSxJQUNoQixXQUFXO0FBQUEsSUFDWCxZQUFZLENBQUU7QUFBQSxJQUNkLGNBQWMsQ0FBRTtBQUFBLElBQ2hCLGtCQUFrQixDQUFFO0FBQUEsSUFDcEIsTUFBTTtBQUFBLElBQ04sZUFBZTtBQUFBLElBQ2YsWUFBWTtBQUFBLElBQ1osT0FBTyxDQUFFO0FBQUEsSUFDVCxjQUFjO0FBQUEsSUFDZCxlQUFlLENBQUU7QUFBQSxJQUNqQixtQkFBbUIsQ0FBRTtB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
