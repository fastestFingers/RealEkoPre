import { I as defineStore, m as APIinterface } from "./index.61ed5618.js";
let $openingHours = [];
let $openingDates = [];
const useDeliveryschedStore = defineStore("deliverysched", {
  state: () => ({
    loading: false,
    loading_sched: false,
    transaction_type: "",
    transaction_list: [],
    delivery_options: [],
    trans_data: [],
    delivery_date_list: [],
    delivery_time_list: [],
    delivery_date: "",
    delivery_time: "",
    whento_deliver: "now",
    new_transaction_type: "",
    new_whento_deliver: "",
    filters: {},
    main_layout_header: true,
    data: []
  }),
  persist: true,
  actions: {
    getDeliverySched(cartUuid, Slug, queryType) {
      this.loading_sched = true;
      this.transaction_list = [];
      this.delivery_options = [];
      APIinterface.fetchDataPost(
        "getDeliveryDetails",
        "cart_uuid=" + cartUuid + "&slug=" + Slug + "&transaction_type=" + this.transaction_type + "&query_type=" + queryType
      ).then((data) => {
        this.transaction_type = data.details.transaction_type;
        this.data = data.details.data;
        if (Object.keys(data.details.data).length > 0) {
          Object.entries(data.details.data).forEach(([key, items]) => {
            this.transaction_list.push({
              label: items.service_name,
              value: items.service_code
            });
          });
        }
        if (Object.keys(data.details.delivery_option).length > 0) {
          Object.entries(data.details.delivery_option).forEach(
            ([key, items]) => {
              this.delivery_options.push({
                label: items.name,
                value: items.value
              });
            }
          );
        }
        this.whento_deliver = data.details.whento_deliver;
        this.trans_data = {
          delivery_date: data.details.delivery_date,
          delivery_date_pretty: data.details.delivery_date_pretty,
          delivery_time: data.details.delivery_time,
          whento_deliver: data.details.whento_deliver
        };
      }).catch((error) => {
        this.transaction_list = [];
      }).then((data) => {
        this.loading_sched = false;
      });
    },
    hadTransactionList() {
      if (APIinterface.empty(this.transaction_list)) {
        return false;
      } else {
        if (Object.keys(this.transaction_list).length > 0) {
          return true;
        }
      }
      return false;
    },
    clearData() {
      this.delivery_date_list = [];
      this.delivery_time_list = [];
    },
    getDeliveryTimes(slug) {
      this.clearData();
      this.loading = true;
      APIinterface.fetchDataPost(
        "getDeliveryTimes",
        "cart_uuid=" + APIinterface.getStorage("cart_uuid") + "&slug=" + slug
      ).then((data) => {
        if (Object.keys(data.details.opening_hours).length > 0) {
          Object.entries(data.details.opening_hours.dates).forEach(
            ([key, items]) => {
              this.delivery_date_list.push({
                label: items.name,
                value: items.value
              });
            }
          );
        }
        $openingDates = data.details.opening_hours.dates;
        $openingHours = data.details.opening_hours.time_ranges;
        const keys = Object.keys($openingDates);
        this.delivery_date = keys[0];
        this.getTimeList(this.delivery_date);
        if (!APIinterface.empty($openingHours[this.delivery_date])) {
          const keystime = $openingHours[this.delivery_date][0];
          this.delivery_time = {
            label: keystime.pretty_time,
            value: keystime.end_time,
            start_time: keystime.start_time,
            end_time: keystime.end_time,
            pretty_time: keystime.pretty_time
          };
        }
        if (!APIinterface.empty(this.trans_data.delivery_date)) {
          this.delivery_date = this.trans_data.delivery_date;
          this.delivery_time = this.trans_data.delivery_time;
        }
      }).catch((error) => {
        console.debug(error);
      }).then((data) => {
        this.loading = false;
      });
    },
    getTimeList(dateSelected) {
      if (!APIinterface.empty($openingHours[dateSelected])) {
        Object.entries($openingHours[dateSelected]).forEach(([key, items]) => {
          this.delivery_time_list.push({
            label: items.pretty_time,
            value: items.end_time,
            start_time: items.start_time,
            end_time: items.end_time,
            pretty_time: items.pretty_time
          });
        });
      }
    }
  }
});
export { useDeliveryschedStore as u };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVsaXZlcnlTY2hlZC40ZTk2MDViZi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3N0b3Jlcy9EZWxpdmVyeVNjaGVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlZmluZVN0b3JlIH0gZnJvbSBcInBpbmlhXCI7XG5pbXBvcnQgQVBJaW50ZXJmYWNlIGZyb20gXCJzcmMvYXBpL0FQSWludGVyZmFjZVwiO1xuXG5sZXQgJG9wZW5pbmdIb3VycyA9IFtdO1xubGV0ICRvcGVuaW5nRGF0ZXMgPSBbXTtcblxuZXhwb3J0IGNvbnN0IHVzZURlbGl2ZXJ5c2NoZWRTdG9yZSA9IGRlZmluZVN0b3JlKFwiZGVsaXZlcnlzY2hlZFwiLCB7XG4gIHN0YXRlOiAoKSA9PiAoe1xuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIGxvYWRpbmdfc2NoZWQ6IGZhbHNlLFxuICAgIHRyYW5zYWN0aW9uX3R5cGU6IFwiXCIsXG4gICAgdHJhbnNhY3Rpb25fbGlzdDogW10sXG4gICAgZGVsaXZlcnlfb3B0aW9uczogW10sXG4gICAgdHJhbnNfZGF0YTogW10sXG4gICAgZGVsaXZlcnlfZGF0ZV9saXN0OiBbXSxcbiAgICBkZWxpdmVyeV90aW1lX2xpc3Q6IFtdLFxuICAgIGRlbGl2ZXJ5X2RhdGU6IFwiXCIsXG4gICAgZGVsaXZlcnlfdGltZTogXCJcIixcbiAgICB3aGVudG9fZGVsaXZlcjogXCJub3dcIixcbiAgICBuZXdfdHJhbnNhY3Rpb25fdHlwZTogXCJcIixcbiAgICBuZXdfd2hlbnRvX2RlbGl2ZXI6IFwiXCIsXG4gICAgZmlsdGVyczoge30sXG4gICAgbWFpbl9sYXlvdXRfaGVhZGVyOiB0cnVlLFxuICAgIGRhdGE6IFtdLFxuICB9KSxcbiAgcGVyc2lzdDogdHJ1ZSxcbiAgYWN0aW9uczoge1xuICAgIGdldERlbGl2ZXJ5U2NoZWQoY2FydFV1aWQsIFNsdWcsIHF1ZXJ5VHlwZSkge1xuICAgICAgdGhpcy5sb2FkaW5nX3NjaGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMudHJhbnNhY3Rpb25fbGlzdCA9IFtdO1xuICAgICAgdGhpcy5kZWxpdmVyeV9vcHRpb25zID0gW107XG5cbiAgICAgIEFQSWludGVyZmFjZS5mZXRjaERhdGFQb3N0KFxuICAgICAgICBcImdldERlbGl2ZXJ5RGV0YWlsc1wiLFxuICAgICAgICBcImNhcnRfdXVpZD1cIiArXG4gICAgICAgICAgY2FydFV1aWQgK1xuICAgICAgICAgIFwiJnNsdWc9XCIgK1xuICAgICAgICAgIFNsdWcgK1xuICAgICAgICAgIFwiJnRyYW5zYWN0aW9uX3R5cGU9XCIgK1xuICAgICAgICAgIHRoaXMudHJhbnNhY3Rpb25fdHlwZSArXG4gICAgICAgICAgXCImcXVlcnlfdHlwZT1cIiArXG4gICAgICAgICAgcXVlcnlUeXBlXG4gICAgICApXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy50cmFuc2FjdGlvbl90eXBlID0gZGF0YS5kZXRhaWxzLnRyYW5zYWN0aW9uX3R5cGU7XG4gICAgICAgICAgdGhpcy5kYXRhID0gZGF0YS5kZXRhaWxzLmRhdGE7XG4gICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGRhdGEuZGV0YWlscy5kYXRhKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhkYXRhLmRldGFpbHMuZGF0YSkuZm9yRWFjaCgoW2tleSwgaXRlbXNdKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMudHJhbnNhY3Rpb25fbGlzdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBsYWJlbDogaXRlbXMuc2VydmljZV9uYW1lLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBpdGVtcy5zZXJ2aWNlX2NvZGUsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGRhdGEuZGV0YWlscy5kZWxpdmVyeV9vcHRpb24pLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGRhdGEuZGV0YWlscy5kZWxpdmVyeV9vcHRpb24pLmZvckVhY2goXG4gICAgICAgICAgICAgIChba2V5LCBpdGVtc10pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGl2ZXJ5X29wdGlvbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICBsYWJlbDogaXRlbXMubmFtZSxcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBpdGVtcy52YWx1ZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLndoZW50b19kZWxpdmVyID0gZGF0YS5kZXRhaWxzLndoZW50b19kZWxpdmVyO1xuICAgICAgICAgIHRoaXMudHJhbnNfZGF0YSA9IHtcbiAgICAgICAgICAgIGRlbGl2ZXJ5X2RhdGU6IGRhdGEuZGV0YWlscy5kZWxpdmVyeV9kYXRlLFxuICAgICAgICAgICAgZGVsaXZlcnlfZGF0ZV9wcmV0dHk6IGRhdGEuZGV0YWlscy5kZWxpdmVyeV9kYXRlX3ByZXR0eSxcbiAgICAgICAgICAgIGRlbGl2ZXJ5X3RpbWU6IGRhdGEuZGV0YWlscy5kZWxpdmVyeV90aW1lLFxuICAgICAgICAgICAgd2hlbnRvX2RlbGl2ZXI6IGRhdGEuZGV0YWlscy53aGVudG9fZGVsaXZlcixcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLy9cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMudHJhbnNhY3Rpb25fbGlzdCA9IFtdO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZ19zY2hlZCA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGhhZFRyYW5zYWN0aW9uTGlzdCgpIHtcbiAgICAgIGlmIChBUElpbnRlcmZhY2UuZW1wdHkodGhpcy50cmFuc2FjdGlvbl9saXN0KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy50cmFuc2FjdGlvbl9saXN0KS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIGNsZWFyRGF0YSgpIHtcbiAgICAgIHRoaXMuZGVsaXZlcnlfZGF0ZV9saXN0ID0gW107XG4gICAgICB0aGlzLmRlbGl2ZXJ5X3RpbWVfbGlzdCA9IFtdO1xuICAgIH0sXG4gICAgZ2V0RGVsaXZlcnlUaW1lcyhzbHVnKSB7XG4gICAgICB0aGlzLmNsZWFyRGF0YSgpO1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIEFQSWludGVyZmFjZS5mZXRjaERhdGFQb3N0KFxuICAgICAgICBcImdldERlbGl2ZXJ5VGltZXNcIixcbiAgICAgICAgXCJjYXJ0X3V1aWQ9XCIgKyBBUElpbnRlcmZhY2UuZ2V0U3RvcmFnZShcImNhcnRfdXVpZFwiKSArIFwiJnNsdWc9XCIgKyBzbHVnXG4gICAgICApXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGRhdGEuZGV0YWlscy5vcGVuaW5nX2hvdXJzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhkYXRhLmRldGFpbHMub3BlbmluZ19ob3Vycy5kYXRlcykuZm9yRWFjaChcbiAgICAgICAgICAgICAgKFtrZXksIGl0ZW1zXSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsaXZlcnlfZGF0ZV9saXN0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgbGFiZWw6IGl0ZW1zLm5hbWUsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbXMudmFsdWUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJG9wZW5pbmdEYXRlcyA9IGRhdGEuZGV0YWlscy5vcGVuaW5nX2hvdXJzLmRhdGVzO1xuICAgICAgICAgICRvcGVuaW5nSG91cnMgPSBkYXRhLmRldGFpbHMub3BlbmluZ19ob3Vycy50aW1lX3JhbmdlcztcblxuICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cygkb3BlbmluZ0RhdGVzKTtcbiAgICAgICAgICB0aGlzLmRlbGl2ZXJ5X2RhdGUgPSBrZXlzWzBdO1xuXG4gICAgICAgICAgdGhpcy5nZXRUaW1lTGlzdCh0aGlzLmRlbGl2ZXJ5X2RhdGUpO1xuICAgICAgICAgIGlmICghQVBJaW50ZXJmYWNlLmVtcHR5KCRvcGVuaW5nSG91cnNbdGhpcy5kZWxpdmVyeV9kYXRlXSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleXN0aW1lID0gJG9wZW5pbmdIb3Vyc1t0aGlzLmRlbGl2ZXJ5X2RhdGVdWzBdO1xuICAgICAgICAgICAgdGhpcy5kZWxpdmVyeV90aW1lID0ge1xuICAgICAgICAgICAgICBsYWJlbDoga2V5c3RpbWUucHJldHR5X3RpbWUsXG4gICAgICAgICAgICAgIHZhbHVlOiBrZXlzdGltZS5lbmRfdGltZSxcbiAgICAgICAgICAgICAgc3RhcnRfdGltZToga2V5c3RpbWUuc3RhcnRfdGltZSxcbiAgICAgICAgICAgICAgZW5kX3RpbWU6IGtleXN0aW1lLmVuZF90aW1lLFxuICAgICAgICAgICAgICBwcmV0dHlfdGltZToga2V5c3RpbWUucHJldHR5X3RpbWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghQVBJaW50ZXJmYWNlLmVtcHR5KHRoaXMudHJhbnNfZGF0YS5kZWxpdmVyeV9kYXRlKSkge1xuICAgICAgICAgICAgdGhpcy5kZWxpdmVyeV9kYXRlID0gdGhpcy50cmFuc19kYXRhLmRlbGl2ZXJ5X2RhdGU7XG4gICAgICAgICAgICB0aGlzLmRlbGl2ZXJ5X3RpbWUgPSB0aGlzLnRyYW5zX2RhdGEuZGVsaXZlcnlfdGltZTtcbiAgICAgICAgICAgIC8vIGNvbnN0IHRlbXB0aW1lID0gSlNPTi5wYXJzZSh0aGlzLnRyYW5zX2RhdGEuZGVsaXZlcnlfdGltZSk7XG4gICAgICAgICAgICAvLyBpZiAoT2JqZWN0LmtleXModGVtcHRpbWUpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vICAgdGhpcy5kZWxpdmVyeV90aW1lID0gdGVtcHRpbWU7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy9cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZGVidWcoZXJyb3IpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGdldFRpbWVMaXN0KGRhdGVTZWxlY3RlZCkge1xuICAgICAgaWYgKCFBUElpbnRlcmZhY2UuZW1wdHkoJG9wZW5pbmdIb3Vyc1tkYXRlU2VsZWN0ZWRdKSkge1xuICAgICAgICBPYmplY3QuZW50cmllcygkb3BlbmluZ0hvdXJzW2RhdGVTZWxlY3RlZF0pLmZvckVhY2goKFtrZXksIGl0ZW1zXSkgPT4ge1xuICAgICAgICAgIHRoaXMuZGVsaXZlcnlfdGltZV9saXN0LnB1c2goe1xuICAgICAgICAgICAgbGFiZWw6IGl0ZW1zLnByZXR0eV90aW1lLFxuICAgICAgICAgICAgdmFsdWU6IGl0ZW1zLmVuZF90aW1lLFxuICAgICAgICAgICAgc3RhcnRfdGltZTogaXRlbXMuc3RhcnRfdGltZSxcbiAgICAgICAgICAgIGVuZF90aW1lOiBpdGVtcy5lbmRfdGltZSxcbiAgICAgICAgICAgIHByZXR0eV90aW1lOiBpdGVtcy5wcmV0dHlfdGltZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn0pO1xuIl0s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
