import { S as useDataStorePersisted, I as defineStore, m as APIinterface } from "./index.61ed5618.js";
const DataStorePersisted = useDataStorePersisted();
const useMenuStore = defineStore("menu", {
  state: () => ({
    data_info: {},
    data_share: [],
    open_at: {},
    opening_hours: {},
    money_config: [],
    maps_config: [],
    loadin_info: true,
    data_charge_type: {},
    data_estimation: {},
    data_distance: {},
    loading_menu: true,
    data_category: {},
    data_items: {},
    data_gallery: {},
    gallery_images: {},
    data_similar_items: {},
    loading_similar_items: false,
    items_not_available: [],
    category_not_available: [],
    merchant_uuid: "",
    restaurant_slug: "",
    booking_settings: [],
    dish: []
  }),
  persist: true,
  getters: {
    isBookingEnabled(state) {
      return state.booking_settings.booking_enabled;
    },
    getBookingTc(state) {
      return state.booking_settings.booking_reservation_terms;
    },
    getBookingCustomMessage(state) {
      return state.booking_settings.booking_reservation_custom_message;
    },
    allowChooseTable(state) {
      return state.booking_settings.allowed_choose_table;
    },
    isBookingCaptcha(state) {
      return state.booking_settings.captcha_enabled;
    }
  },
  actions: {
    getMerchantInfo(merchantSlug, currency_code) {
      this.loadin_info = true;
      this.data_info = [];
      this.data_charge_type = [];
      this.data_estimation = [];
      this.data_distance = [];
      this.opening_hours = [];
      this.open_at = [];
      this.data_gallery = [];
      this.merchant_uuid = "";
      this.booking_enabled = false;
      APIinterface.getMerchantInfo(
        merchantSlug,
        APIinterface.getStorage("place_id"),
        currency_code
      ).then((data) => {
        this.data_info[merchantSlug] = data.details.data;
        this.data_charge_type[merchantSlug] = data.details.charge_type;
        this.data_estimation[merchantSlug] = data.details.estimation;
        this.data_distance[merchantSlug] = data.details.distance;
        this.opening_hours[merchantSlug] = data.details.opening_hours;
        this.open_at[merchantSlug] = data.details.open_at;
        this.data_gallery[merchantSlug] = data.details.gallery;
        this.money_config = data.details.config;
        this.merchant_uuid = data.details.data.merchant_uuid;
        this.booking_settings = data.details.booking_settings;
        let Gallery = [];
        if (Object.keys(data.details.gallery).length > 0) {
          Object.entries(data.details.gallery).forEach(([key, items]) => {
            Gallery.push(items.image_url);
          });
          this.gallery_images[merchantSlug] = Gallery;
        }
      }).catch((error) => {
        this.data_info = [];
      }).then((data) => {
        this.loadin_info = false;
      });
    },
    geStoreMenu(merchantSlug, useCurrencyCode) {
      this.loading_menu = true;
      this.data_items = [];
      this.data_category = [];
      this.items_not_available = [];
      APIinterface.geStoreMenu(merchantSlug, useCurrencyCode).then((data) => {
        this.data_category[merchantSlug] = data.details.data.category;
        this.data_items[merchantSlug] = data.details.data.items;
        this.items_not_available = data.details.data.items_not_available;
        this.category_not_available = data.details.data.category_not_available;
        this.dish = data.details.data.dish;
      }).catch((error) => {
        this.data_items = [];
        this.data_category = [];
      }).then((data) => {
        this.loading_menu = false;
      });
    },
    getSimilarItems(merchantId) {
      this.loading_similar_items = true;
      APIinterface.fetchDataPost(
        "SimilarItems",
        "merchant_id=" + merchantId + "&currency_code=" + DataStorePersisted.use_currency_code
      ).then((data) => {
        console.log(data);
        this.data_similar_items[merchantId] = data.details.data;
      }).catch((error) => {
        this.data_similar_items = {};
      }).then((data) => {
        this.loading_similar_items = false;
      });
    }
  }
});
export { useMenuStore as u };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVudVN0b3JlLmYzYTIxZGEzLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc3RvcmVzL01lbnVTdG9yZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWZpbmVTdG9yZSB9IGZyb20gXCJwaW5pYVwiO1xuaW1wb3J0IEFQSWludGVyZmFjZSBmcm9tIFwic3JjL2FwaS9BUElpbnRlcmZhY2VcIjtcblxuaW1wb3J0IHsgdXNlRGF0YVN0b3JlUGVyc2lzdGVkIH0gZnJvbSBcInN0b3Jlcy9EYXRhU3RvcmVQZXJzaXN0ZWRcIjtcbmNvbnN0IERhdGFTdG9yZVBlcnNpc3RlZCA9IHVzZURhdGFTdG9yZVBlcnNpc3RlZCgpO1xuXG5leHBvcnQgY29uc3QgdXNlTWVudVN0b3JlID0gZGVmaW5lU3RvcmUoXCJtZW51XCIsIHtcbiAgc3RhdGU6ICgpID0+ICh7XG4gICAgZGF0YV9pbmZvOiB7fSxcbiAgICBkYXRhX3NoYXJlOiBbXSxcbiAgICBvcGVuX2F0OiB7fSxcbiAgICBvcGVuaW5nX2hvdXJzOiB7fSxcbiAgICBtb25leV9jb25maWc6IFtdLFxuICAgIG1hcHNfY29uZmlnOiBbXSxcbiAgICBsb2FkaW5faW5mbzogdHJ1ZSxcbiAgICBkYXRhX2NoYXJnZV90eXBlOiB7fSxcbiAgICBkYXRhX2VzdGltYXRpb246IHt9LFxuICAgIGRhdGFfZGlzdGFuY2U6IHt9LFxuICAgIGxvYWRpbmdfbWVudTogdHJ1ZSxcbiAgICBkYXRhX2NhdGVnb3J5OiB7fSxcbiAgICBkYXRhX2l0ZW1zOiB7fSxcbiAgICBkYXRhX2dhbGxlcnk6IHt9LFxuICAgIGdhbGxlcnlfaW1hZ2VzOiB7fSxcbiAgICBkYXRhX3NpbWlsYXJfaXRlbXM6IHt9LFxuICAgIGxvYWRpbmdfc2ltaWxhcl9pdGVtczogZmFsc2UsXG4gICAgaXRlbXNfbm90X2F2YWlsYWJsZTogW10sXG4gICAgY2F0ZWdvcnlfbm90X2F2YWlsYWJsZTogW10sXG4gICAgbWVyY2hhbnRfdXVpZDogXCJcIixcbiAgICByZXN0YXVyYW50X3NsdWc6IFwiXCIsXG4gICAgYm9va2luZ19zZXR0aW5nczogW10sXG4gICAgZGlzaDogW10sXG4gIH0pLFxuXG4gIHBlcnNpc3Q6IHRydWUsXG5cbiAgZ2V0dGVyczoge1xuICAgIGlzQm9va2luZ0VuYWJsZWQoc3RhdGUpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5ib29raW5nX3NldHRpbmdzLmJvb2tpbmdfZW5hYmxlZDtcbiAgICB9LFxuICAgIGdldEJvb2tpbmdUYyhzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLmJvb2tpbmdfc2V0dGluZ3MuYm9va2luZ19yZXNlcnZhdGlvbl90ZXJtcztcbiAgICB9LFxuICAgIGdldEJvb2tpbmdDdXN0b21NZXNzYWdlKHN0YXRlKSB7XG4gICAgICByZXR1cm4gc3RhdGUuYm9va2luZ19zZXR0aW5ncy5ib29raW5nX3Jlc2VydmF0aW9uX2N1c3RvbV9tZXNzYWdlO1xuICAgIH0sXG4gICAgYWxsb3dDaG9vc2VUYWJsZShzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLmJvb2tpbmdfc2V0dGluZ3MuYWxsb3dlZF9jaG9vc2VfdGFibGU7XG4gICAgfSxcbiAgICBpc0Jvb2tpbmdDYXB0Y2hhKHN0YXRlKSB7XG4gICAgICByZXR1cm4gc3RhdGUuYm9va2luZ19zZXR0aW5ncy5jYXB0Y2hhX2VuYWJsZWQ7XG4gICAgfSxcbiAgfSxcblxuICBhY3Rpb25zOiB7XG4gICAgZ2V0TWVyY2hhbnRJbmZvKG1lcmNoYW50U2x1ZywgY3VycmVuY3lfY29kZSkge1xuICAgICAgdGhpcy5sb2FkaW5faW5mbyA9IHRydWU7XG5cbiAgICAgIHRoaXMuZGF0YV9pbmZvID0gW107XG4gICAgICB0aGlzLmRhdGFfY2hhcmdlX3R5cGUgPSBbXTtcbiAgICAgIHRoaXMuZGF0YV9lc3RpbWF0aW9uID0gW107XG4gICAgICB0aGlzLmRhdGFfZGlzdGFuY2UgPSBbXTtcbiAgICAgIHRoaXMub3BlbmluZ19ob3VycyA9IFtdO1xuICAgICAgdGhpcy5vcGVuX2F0ID0gW107XG4gICAgICB0aGlzLmRhdGFfZ2FsbGVyeSA9IFtdO1xuICAgICAgdGhpcy5tZXJjaGFudF91dWlkID0gXCJcIjtcbiAgICAgIHRoaXMuYm9va2luZ19lbmFibGVkID0gZmFsc2U7XG5cbiAgICAgIEFQSWludGVyZmFjZS5nZXRNZXJjaGFudEluZm8oXG4gICAgICAgIG1lcmNoYW50U2x1ZyxcbiAgICAgICAgQVBJaW50ZXJmYWNlLmdldFN0b3JhZ2UoXCJwbGFjZV9pZFwiKSxcbiAgICAgICAgY3VycmVuY3lfY29kZVxuICAgICAgKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuZGF0YV9pbmZvW21lcmNoYW50U2x1Z10gPSBkYXRhLmRldGFpbHMuZGF0YTtcbiAgICAgICAgICB0aGlzLmRhdGFfY2hhcmdlX3R5cGVbbWVyY2hhbnRTbHVnXSA9IGRhdGEuZGV0YWlscy5jaGFyZ2VfdHlwZTtcbiAgICAgICAgICB0aGlzLmRhdGFfZXN0aW1hdGlvblttZXJjaGFudFNsdWddID0gZGF0YS5kZXRhaWxzLmVzdGltYXRpb247XG4gICAgICAgICAgdGhpcy5kYXRhX2Rpc3RhbmNlW21lcmNoYW50U2x1Z10gPSBkYXRhLmRldGFpbHMuZGlzdGFuY2U7XG4gICAgICAgICAgdGhpcy5vcGVuaW5nX2hvdXJzW21lcmNoYW50U2x1Z10gPSBkYXRhLmRldGFpbHMub3BlbmluZ19ob3VycztcbiAgICAgICAgICB0aGlzLm9wZW5fYXRbbWVyY2hhbnRTbHVnXSA9IGRhdGEuZGV0YWlscy5vcGVuX2F0O1xuICAgICAgICAgIHRoaXMuZGF0YV9nYWxsZXJ5W21lcmNoYW50U2x1Z10gPSBkYXRhLmRldGFpbHMuZ2FsbGVyeTtcblxuICAgICAgICAgIHRoaXMubW9uZXlfY29uZmlnID0gZGF0YS5kZXRhaWxzLmNvbmZpZztcbiAgICAgICAgICB0aGlzLm1lcmNoYW50X3V1aWQgPSBkYXRhLmRldGFpbHMuZGF0YS5tZXJjaGFudF91dWlkO1xuICAgICAgICAgIHRoaXMuYm9va2luZ19zZXR0aW5ncyA9IGRhdGEuZGV0YWlscy5ib29raW5nX3NldHRpbmdzO1xuXG4gICAgICAgICAgbGV0IEdhbGxlcnkgPSBbXTtcbiAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoZGF0YS5kZXRhaWxzLmdhbGxlcnkpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGRhdGEuZGV0YWlscy5nYWxsZXJ5KS5mb3JFYWNoKChba2V5LCBpdGVtc10pID0+IHtcbiAgICAgICAgICAgICAgR2FsbGVyeS5wdXNoKGl0ZW1zLmltYWdlX3VybCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuZ2FsbGVyeV9pbWFnZXNbbWVyY2hhbnRTbHVnXSA9IEdhbGxlcnk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5kYXRhX2luZm8gPSBbXTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbl9pbmZvID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2VTdG9yZU1lbnUobWVyY2hhbnRTbHVnLCB1c2VDdXJyZW5jeUNvZGUpIHtcbiAgICAgIHRoaXMubG9hZGluZ19tZW51ID0gdHJ1ZTtcbiAgICAgIHRoaXMuZGF0YV9pdGVtcyA9IFtdO1xuICAgICAgdGhpcy5kYXRhX2NhdGVnb3J5ID0gW107XG4gICAgICB0aGlzLml0ZW1zX25vdF9hdmFpbGFibGUgPSBbXTtcbiAgICAgIEFQSWludGVyZmFjZS5nZVN0b3JlTWVudShtZXJjaGFudFNsdWcsIHVzZUN1cnJlbmN5Q29kZSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmRhdGFfY2F0ZWdvcnlbbWVyY2hhbnRTbHVnXSA9IGRhdGEuZGV0YWlscy5kYXRhLmNhdGVnb3J5O1xuICAgICAgICAgIHRoaXMuZGF0YV9pdGVtc1ttZXJjaGFudFNsdWddID0gZGF0YS5kZXRhaWxzLmRhdGEuaXRlbXM7XG4gICAgICAgICAgdGhpcy5pdGVtc19ub3RfYXZhaWxhYmxlID0gZGF0YS5kZXRhaWxzLmRhdGEuaXRlbXNfbm90X2F2YWlsYWJsZTtcbiAgICAgICAgICB0aGlzLmNhdGVnb3J5X25vdF9hdmFpbGFibGUgPVxuICAgICAgICAgICAgZGF0YS5kZXRhaWxzLmRhdGEuY2F0ZWdvcnlfbm90X2F2YWlsYWJsZTtcblxuICAgICAgICAgIHRoaXMuZGlzaCA9IGRhdGEuZGV0YWlscy5kYXRhLmRpc2g7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLmRhdGFfaXRlbXMgPSBbXTtcbiAgICAgICAgICB0aGlzLmRhdGFfY2F0ZWdvcnkgPSBbXTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmdfbWVudSA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGdldFNpbWlsYXJJdGVtcyhtZXJjaGFudElkKSB7XG4gICAgICB0aGlzLmxvYWRpbmdfc2ltaWxhcl9pdGVtcyA9IHRydWU7XG4gICAgICBBUElpbnRlcmZhY2UuZmV0Y2hEYXRhUG9zdChcbiAgICAgICAgXCJTaW1pbGFySXRlbXNcIixcbiAgICAgICAgXCJtZXJjaGFudF9pZD1cIiArXG4gICAgICAgICAgbWVyY2hhbnRJZCArXG4gICAgICAgICAgXCImY3VycmVuY3lfY29kZT1cIiArXG4gICAgICAgICAgRGF0YVN0b3JlUGVyc2lzdGVkLnVzZV9jdXJyZW5jeV9jb2RlXG4gICAgICApXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgdGhpcy5kYXRhX3NpbWlsYXJfaXRlbXNbbWVyY2hhbnRJZF0gPSBkYXRhLmRldGFpbHMuZGF0YTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMuZGF0YV9zaW1pbGFyX2l0ZW1zID0ge307XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nX3NpbWlsYXJfaXRlbXMgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFJQSxNQUFNLHFCQUFxQixzQkFBcUI7QUFFcEMsTUFBQyxlQUFlLFlBQVksUUFBUTtBQUFBLEVBQzlDLE9BQU8sT0FBTztBQUFBLElBQ1osV0FBVyxDQUFFO0FBQUEsSUFDYixZQUFZLENBQUU7QUFBQSxJQUNkLFNBQVMsQ0FBRTtBQUFBLElBQ1gsZUFBZSxDQUFFO0FBQUEsSUFDakIsY0FBYyxDQUFFO0FBQUEsSUFDaEIsYUFBYSxDQUFFO0FBQUEsSUFDZixhQUFhO0FBQUEsSUFDYixrQkFBa0IsQ0FBRTtBQUFBLElBQ3BCLGlCQUFpQixDQUFFO0FBQUEsSUFDbkIsZUFBZSxDQUFFO0FBQUEsSUFDakIsY0FBYztBQUFBLElBQ2QsZUFBZSxDQUFFO0FBQUEsSUFDakIsWUFBWSxDQUFFO0FBQUEsSUFDZCxjQUFjLENBQUU7QUFBQSxJQUNoQixnQkFBZ0IsQ0FBRTtBQUFBLElBQ2xCLG9CQUFvQixDQUFFO0FBQUEsSUFDdEIsdUJBQXVCO0FBQUEsSUFDdkIscUJBQXFCLENBQUU7QUFBQSxJQUN2Qix3QkFBd0IsQ0FBRTtBQUFBLElBQzFCLGVBQWU7QUFBQSxJQUNmLGlCQUFpQjtBQUFBLElBQ2pCLGtCQUFrQixDQUFFO0FBQUEsSUFDcEIsTUFBTSxDQUFFO0FBQUEsRUFDWjtBQUFBLEVBRUUsU0FBUztBQUFBLEVBRVQsU0FBUztBQUFBLElBQ1AsaUJBQWlCLE9BQU87QUFDdEIsYUFBTyxNQUFNLGlCQUFpQjtBQUFBLElBQy9CO0FBQUEsSUFDRCxhQUFhLE9BQU87QUFDbEIsYUFBTyxNQUFNLGlCQUFpQjtBQUFBLElBQy9CO0FBQUEsSUFDRCx3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
