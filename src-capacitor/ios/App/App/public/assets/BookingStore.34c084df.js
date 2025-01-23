import { I as defineStore, m as APIinterface } from "./index.61ed5618.js";
const useBookingStore = defineStore("BookingStore", {
  state: () => ({
    has_data: false,
    loading: true,
    guest_list: [],
    date_list: [],
    time_slot: [],
    all_time_slot: [],
    reservation_date: "",
    tc: "",
    allowed_choose_table: false,
    room_list: [],
    not_available_time: [],
    guest: 1,
    reservation_time: "",
    reservation_uuid: "",
    steps: 1,
    reservation_info: [],
    table_list: [],
    room_uuid: "",
    table_uuid: "",
    first_name: "",
    last_name: "",
    email_address: "",
    mobile_number: "",
    mobile_prefix: "",
    special_request: "",
    booking_data: [],
    cancel_reason: [],
    merchant_uuid: "",
    errors: "",
    summary: [],
    summary_loading: false
  }),
  getters: {
    getSummary(state) {
      return state.summary;
    },
    hasError(state) {
      if (APIinterface.empty(state.errors)) {
        return true;
      }
      return false;
    },
    getErrors(state) {
      return state.errors;
    },
    hasData(state) {
      return state.has_data;
    },
    isLoading(state) {
      return state.loading;
    },
    hasTimeSlot(state) {
      if (Object.keys(state.time_slot).length > 0) {
        return true;
      }
      return false;
    },
    getTimeList(state) {
      return state.time_slot;
    },
    bookingValid() {
      let $pass = true;
      if (this.guest <= 0) {
        $pass = false;
      }
      if (APIinterface.empty(this.reservation_date)) {
        $pass = false;
      }
      if (APIinterface.empty(this.reservation_time)) {
        $pass = false;
      }
      return $pass;
    },
    getSteps(state) {
      return state.steps;
    },
    getBooking(state) {
      return state.booking_data;
    },
    hasBookingData(state) {
      if (Object.keys(state.booking_data).length > 0) {
        return true;
      }
      return false;
    },
    getCancelReasonData(state) {
      return state.cancel_reason;
    },
    CanCancelReservation(state) {
      if (state.booking_data.cancel_reservation_stats.includes(
        state.booking_data.data.status
      ) === true) {
        return false;
      }
      return true;
    },
    bookingStatusColor(state) {
      if (state.booking_data.cancel_reservation_stats2.includes(
        state.booking_data.data.status
      ) === true) {
        return "text-red";
      } else if (state.booking_data.pending_reservation_stats.includes(
        state.booking_data.data.status
      ) === true) {
        return "text-blue";
      } else if (state.booking_data.completed_reservation_stats.includes(
        state.booking_data.data.status
      ) === true) {
        return "text-orange";
      } else {
        return "text-green";
      }
    },
    getBookingStatusSteps(state) {
      if (state.booking_data.cancel_reservation_stats2.includes(
        state.booking_data.data.status
      ) === true) {
        return 0;
      }
      if (state.booking_data.confirm_reservation_stats.includes(
        state.booking_data.data.status
      ) === true) {
        return 2;
      } else if (state.booking_data.completed_reservation_stats.includes(
        state.booking_data.data.status
      ) === true) {
        return 3;
      } else if (state.booking_data.cancel_reservation_stats.includes(
        state.booking_data.data.status
      ) === true) {
        return 4;
      } else {
        return 1;
      }
    }
  },
  actions: {
    Getbookingattributes(merchant_uuid, id) {
      this.loading = true;
      APIinterface.fetchDataPostTable(
        "Getbookingattributes",
        "merchant_uuid=" + merchant_uuid + "&id=" + id
      ).then((response) => {
        this.has_data = true;
        this.guest_list = response.details.guest_list;
        this.date_list = response.details.date_list;
        this.time_slot = response.details.time_slot;
        this.all_time_slot = response.details.all_time_slot;
        this.reservation_date = response.details.default_date;
        this.tc = response.details.tc;
        this.allowed_choose_table = response.details.allowed_choose_table;
        this.room_list = response.details.room_list;
        this.not_available_time = response.details.not_available_time;
        this.guest = response.details.default_guest;
        if (!APIinterface.empty(id)) {
          this.guest = response.details.data_booking.guest_number_raw;
          this.reservation_time = response.details.data_booking.reservation_time_raw;
          this.first_name = response.details.data_booking.first_name;
          this.last_name = response.details.data_booking.last_name;
          this.email_address = response.details.data_booking.email_address;
          this.special_request = response.details.data_booking.special_request;
          this.mobile_prefix = response.details.data_booking.phone_prefix;
          this.mobile_number = response.details.data_booking.contact_phone_without_prefix;
        }
      }).catch((error) => {
        this.guest_list = [];
        this.date_list = [];
        this.time_slot = [];
        this.all_time_slot = [];
        this.reservation_date = "";
        this.tc = "";
        this.allowed_choose_table = false;
        this.room_list = [];
        this.not_available_time = [];
      }).then((data) => {
        this.loading = false;
      });
    },
    Getbookingdetails(id) {
      this.loading = true;
      this.errors = "";
      APIinterface.fetchDataPostTable2("Getbookingdetails", "&id=" + id).then((response) => {
        this.has_data = true;
        this.guest_list = response.details.guest_list;
        this.date_list = response.details.date_list;
        this.time_slot = response.details.time_slot;
        this.all_time_slot = response.details.all_time_slot;
        this.reservation_date = response.details.default_date;
        this.tc = response.details.tc;
        this.allowed_choose_table = response.details.allowed_choose_table;
        this.room_list = response.details.room_list;
        this.not_available_time = response.details.not_available_time;
        this.guest = response.details.default_guest;
        this.merchant_uuid = response.details.merchant_uuid;
        if (!APIinterface.empty(id)) {
          this.guest = response.details.data_booking.guest_number_raw;
          this.reservation_time = response.details.data_booking.reservation_time_raw;
          this.first_name = response.details.data_booking.first_name;
          this.last_name = response.details.data_booking.last_name;
          this.email_address = response.details.data_booking.email_address;
          this.special_request = response.details.data_booking.special_request;
          this.mobile_prefix = response.details.data_booking.phone_prefix;
          this.mobile_number = response.details.data_booking.contact_phone_without_prefix;
        }
      }).catch((error) => {
        this.guest_list = [];
        this.date_list = [];
        this.time_slot = [];
        this.all_time_slot = [];
        this.reservation_date = "";
        this.tc = "";
        this.allowed_choose_table = false;
        this.room_list = [];
        this.not_available_time = [];
        this.errors = error;
      }).then((data) => {
        this.loading = false;
      });
    },
    getTimeslot(merchant_uuid, id) {
      this.loading = true;
      this.reservation_time = "";
      let $params = "merchant_uuid=" + merchant_uuid;
      $params += "&reservation_date=" + this.reservation_date;
      $params += "&guest=" + this.guest;
      $params += "&id=" + id;
      APIinterface.fetchDataPostTable("Gettimeslot", $params).then((response) => {
        this.time_slot = response.details.time_slot;
        this.all_time_slot = response.details.all_time_slot;
        this.not_available_time = response.details.not_available_time;
      }).catch((error) => {
        this.time_slot = [];
        this.all_time_slot = [];
        this.not_available_time = [];
      }).then((data) => {
        this.loading = false;
      });
    },
    isSelected(data) {
      if (this.reservation_time == data) {
        return true;
      } else {
        return false;
      }
    },
    isNotavailable(bookingTime) {
      if (Object.keys(this.not_available_time).length > 0) {
        if (this.not_available_time.includes(bookingTime) === true) {
          return true;
        }
      }
      return false;
    },
    SetBooking(merchant_uuid, id, $q) {
      this.loading = true;
      let $params = "merchant_uuid=" + merchant_uuid;
      $params += "&reservation_date=" + this.reservation_date;
      $params += "&reservation_time=" + this.reservation_time;
      $params += "&guest=" + this.guest;
      $params += "&id=" + id;
      APIinterface.fetchDataPostTable2("SetBooking", $params).then((response) => {
        this.steps = 2;
        this.reservation_info = response.details;
        this.table_list = response.details.table_list;
        if (!APIinterface.empty(id)) {
          this.room_uuid = response.details.room_uuid;
          this.table_uuid = response.details.table_uuid;
        } else {
          this.room_uuid = "";
          this.table_uuid = "";
        }
        if (!APIinterface.empty(response.details.user_data)) {
          if (Object.keys(response.details.user_data).length > 0) {
            this.first_name = response.details.user_data.first_name;
            this.last_name = response.details.user_data.last_name;
            this.email_address = response.details.user_data.email_address;
            this.mobile_prefix = response.details.user_data.phone_prefix;
            this.mobile_number = response.details.user_data.contact_number_without_prefix;
          }
        }
      }).catch((error) => {
        APIinterface.notify("dark", error, "error", $q);
      }).then((data) => {
        this.loading = false;
      });
    },
    resetReservation(merchant_uuid) {
      this.steps = 1;
      this.Getbookingattributes(merchant_uuid);
      this.guest = 1;
      this.reservation_date = "";
      this.reservation_time = "";
    },
    getBookingDetails(id, done) {
      this.loading = true;
      this.errors = "";
      APIinterface.fetchDataPostTable2("BookingDetails", "id=" + id).then((data) => {
        this.booking_data = data.details;
      }).catch((error) => {
        this.booking_data = [];
        this.errors = error;
      }).then((data) => {
        this.loading = false;
        if (!APIinterface.empty(done)) {
          done();
        }
      });
    },
    getCancelreason(id, done) {
      this.loading = true;
      APIinterface.fetchDataPostTable("getCancelreason", "id=" + id).then((data) => {
        this.cancel_reason = data.details.data;
      }).catch((error) => {
        this.cancel_reason = [];
      }).then((data) => {
        this.loading = false;
        if (!APIinterface.empty(done)) {
          done();
        }
      });
    },
    getBookingSummary() {
      this.summary_loading = true;
      APIinterface.fetchDataPostTable2("BookingSummary").then((data) => {
        this.summary = data.details.summary;
      }).catch((error) => {
        this.summary = [];
      }).then((data) => {
        this.summary_loading = false;
      });
    }
  }
});
export { useBookingStore as u };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9va2luZ1N0b3JlLjM0YzA4NGRmLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc3RvcmVzL0Jvb2tpbmdTdG9yZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWZpbmVTdG9yZSB9IGZyb20gXCJwaW5pYVwiO1xuaW1wb3J0IEFQSWludGVyZmFjZSBmcm9tIFwic3JjL2FwaS9BUElpbnRlcmZhY2VcIjtcblxuZXhwb3J0IGNvbnN0IHVzZUJvb2tpbmdTdG9yZSA9IGRlZmluZVN0b3JlKFwiQm9va2luZ1N0b3JlXCIsIHtcbiAgc3RhdGU6ICgpID0+ICh7XG4gICAgaGFzX2RhdGE6IGZhbHNlLFxuICAgIGxvYWRpbmc6IHRydWUsXG4gICAgZ3Vlc3RfbGlzdDogW10sXG4gICAgZGF0ZV9saXN0OiBbXSxcbiAgICB0aW1lX3Nsb3Q6IFtdLFxuICAgIGFsbF90aW1lX3Nsb3Q6IFtdLFxuICAgIHJlc2VydmF0aW9uX2RhdGU6IFwiXCIsXG4gICAgdGM6IFwiXCIsXG4gICAgYWxsb3dlZF9jaG9vc2VfdGFibGU6IGZhbHNlLFxuICAgIHJvb21fbGlzdDogW10sXG4gICAgbm90X2F2YWlsYWJsZV90aW1lOiBbXSxcbiAgICBndWVzdDogMSxcbiAgICByZXNlcnZhdGlvbl90aW1lOiBcIlwiLFxuICAgIHJlc2VydmF0aW9uX3V1aWQ6IFwiXCIsXG4gICAgc3RlcHM6IDEsXG4gICAgcmVzZXJ2YXRpb25faW5mbzogW10sXG4gICAgdGFibGVfbGlzdDogW10sXG4gICAgcm9vbV91dWlkOiBcIlwiLFxuICAgIHRhYmxlX3V1aWQ6IFwiXCIsXG4gICAgZmlyc3RfbmFtZTogXCJcIixcbiAgICBsYXN0X25hbWU6IFwiXCIsXG4gICAgZW1haWxfYWRkcmVzczogXCJcIixcbiAgICBtb2JpbGVfbnVtYmVyOiBcIlwiLFxuICAgIG1vYmlsZV9wcmVmaXg6IFwiXCIsXG4gICAgc3BlY2lhbF9yZXF1ZXN0OiBcIlwiLFxuICAgIGJvb2tpbmdfZGF0YTogW10sXG4gICAgY2FuY2VsX3JlYXNvbjogW10sXG4gICAgbWVyY2hhbnRfdXVpZDogXCJcIixcbiAgICBlcnJvcnM6IFwiXCIsXG4gICAgc3VtbWFyeTogW10sXG4gICAgc3VtbWFyeV9sb2FkaW5nOiBmYWxzZSxcbiAgfSksXG5cbiAgZ2V0dGVyczoge1xuICAgIGdldFN1bW1hcnkoc3RhdGUpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5zdW1tYXJ5O1xuICAgIH0sXG4gICAgaGFzRXJyb3Ioc3RhdGUpIHtcbiAgICAgIGlmIChBUElpbnRlcmZhY2UuZW1wdHkoc3RhdGUuZXJyb3JzKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIGdldEVycm9ycyhzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLmVycm9ycztcbiAgICB9LFxuICAgIGhhc0RhdGEoc3RhdGUpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5oYXNfZGF0YTtcbiAgICB9LFxuICAgIGlzTG9hZGluZyhzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLmxvYWRpbmc7XG4gICAgfSxcbiAgICBoYXNUaW1lU2xvdChzdGF0ZSkge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKHN0YXRlLnRpbWVfc2xvdCkubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIGdldFRpbWVMaXN0KHN0YXRlKSB7XG4gICAgICByZXR1cm4gc3RhdGUudGltZV9zbG90O1xuICAgIH0sXG4gICAgYm9va2luZ1ZhbGlkKCkge1xuICAgICAgbGV0ICRwYXNzID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLmd1ZXN0IDw9IDApIHtcbiAgICAgICAgJHBhc3MgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChBUElpbnRlcmZhY2UuZW1wdHkodGhpcy5yZXNlcnZhdGlvbl9kYXRlKSkge1xuICAgICAgICAkcGFzcyA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKEFQSWludGVyZmFjZS5lbXB0eSh0aGlzLnJlc2VydmF0aW9uX3RpbWUpKSB7XG4gICAgICAgICRwYXNzID0gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gJHBhc3M7XG4gICAgfSxcbiAgICBnZXRTdGVwcyhzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLnN0ZXBzO1xuICAgIH0sXG4gICAgZ2V0Qm9va2luZyhzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLmJvb2tpbmdfZGF0YTtcbiAgICB9LFxuICAgIGhhc0Jvb2tpbmdEYXRhKHN0YXRlKSB7XG4gICAgICBpZiAoT2JqZWN0LmtleXMoc3RhdGUuYm9va2luZ19kYXRhKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgZ2V0Q2FuY2VsUmVhc29uRGF0YShzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLmNhbmNlbF9yZWFzb247XG4gICAgfSxcbiAgICBDYW5DYW5jZWxSZXNlcnZhdGlvbihzdGF0ZSkge1xuICAgICAgaWYgKFxuICAgICAgICBzdGF0ZS5ib29raW5nX2RhdGEuY2FuY2VsX3Jlc2VydmF0aW9uX3N0YXRzLmluY2x1ZGVzKFxuICAgICAgICAgIHN0YXRlLmJvb2tpbmdfZGF0YS5kYXRhLnN0YXR1c1xuICAgICAgICApID09PSB0cnVlXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBib29raW5nU3RhdHVzQ29sb3Ioc3RhdGUpIHtcbiAgICAgIGlmIChcbiAgICAgICAgc3RhdGUuYm9va2luZ19kYXRhLmNhbmNlbF9yZXNlcnZhdGlvbl9zdGF0czIuaW5jbHVkZXMoXG4gICAgICAgICAgc3RhdGUuYm9va2luZ19kYXRhLmRhdGEuc3RhdHVzXG4gICAgICAgICkgPT09IHRydWVcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gXCJ0ZXh0LXJlZFwiO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgc3RhdGUuYm9va2luZ19kYXRhLnBlbmRpbmdfcmVzZXJ2YXRpb25fc3RhdHMuaW5jbHVkZXMoXG4gICAgICAgICAgc3RhdGUuYm9va2luZ19kYXRhLmRhdGEuc3RhdHVzXG4gICAgICAgICkgPT09IHRydWVcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gXCJ0ZXh0LWJsdWVcIjtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHN0YXRlLmJvb2tpbmdfZGF0YS5jb21wbGV0ZWRfcmVzZXJ2YXRpb25fc3RhdHMuaW5jbHVkZXMoXG4gICAgICAgICAgc3RhdGUuYm9va2luZ19kYXRhLmRhdGEuc3RhdHVzXG4gICAgICAgICkgPT09IHRydWVcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gXCJ0ZXh0LW9yYW5nZVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwidGV4dC1ncmVlblwiO1xuICAgICAgfVxuICAgIH0sXG4gICAgZ2V0Qm9va2luZ1N0YXR1c1N0ZXBzKHN0YXRlKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHN0YXRlLmJvb2tpbmdfZGF0YS5jYW5jZWxfcmVzZXJ2YXRpb25fc3RhdHMyLmluY2x1ZGVzKFxuICAgICAgICAgIHN0YXRlLmJvb2tpbmdfZGF0YS5kYXRhLnN0YXR1c1xuICAgICAgICApID09PSB0cnVlXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgc3RhdGUuYm9va2luZ19kYXRhLmNvbmZpcm1fcmVzZXJ2YXRpb25fc3RhdHMuaW5jbHVkZXMoXG4gICAgICAgICAgc3RhdGUuYm9va2luZ19kYXRhLmRhdGEuc3RhdHVzXG4gICAgICAgICkgPT09IHRydWVcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gMjtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHN0YXRlLmJvb2tpbmdfZGF0YS5jb21wbGV0ZWRfcmVzZXJ2YXRpb25fc3RhdHMuaW5jbHVkZXMoXG4gICAgICAgICAgc3RhdGUuYm9va2luZ19kYXRhLmRhdGEuc3RhdHVzXG4gICAgICAgICkgPT09IHRydWVcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gMztcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHN0YXRlLmJvb2tpbmdfZGF0YS5jYW5jZWxfcmVzZXJ2YXRpb25fc3RhdHMuaW5jbHVkZXMoXG4gICAgICAgICAgc3RhdGUuYm9va2luZ19kYXRhLmRhdGEuc3RhdHVzXG4gICAgICAgICkgPT09IHRydWVcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gNDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG5cbiAgYWN0aW9uczoge1xuICAgIEdldGJvb2tpbmdhdHRyaWJ1dGVzKG1lcmNoYW50X3V1aWQsIGlkKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgQVBJaW50ZXJmYWNlLmZldGNoRGF0YVBvc3RUYWJsZShcbiAgICAgICAgXCJHZXRib29raW5nYXR0cmlidXRlc1wiLFxuICAgICAgICBcIm1lcmNoYW50X3V1aWQ9XCIgKyBtZXJjaGFudF91dWlkICsgXCImaWQ9XCIgKyBpZFxuICAgICAgKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICB0aGlzLmhhc19kYXRhID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmd1ZXN0X2xpc3QgPSByZXNwb25zZS5kZXRhaWxzLmd1ZXN0X2xpc3Q7XG4gICAgICAgICAgdGhpcy5kYXRlX2xpc3QgPSByZXNwb25zZS5kZXRhaWxzLmRhdGVfbGlzdDtcbiAgICAgICAgICB0aGlzLnRpbWVfc2xvdCA9IHJlc3BvbnNlLmRldGFpbHMudGltZV9zbG90O1xuICAgICAgICAgIHRoaXMuYWxsX3RpbWVfc2xvdCA9IHJlc3BvbnNlLmRldGFpbHMuYWxsX3RpbWVfc2xvdDtcbiAgICAgICAgICB0aGlzLnJlc2VydmF0aW9uX2RhdGUgPSByZXNwb25zZS5kZXRhaWxzLmRlZmF1bHRfZGF0ZTtcbiAgICAgICAgICB0aGlzLnRjID0gcmVzcG9uc2UuZGV0YWlscy50YztcbiAgICAgICAgICB0aGlzLmFsbG93ZWRfY2hvb3NlX3RhYmxlID0gcmVzcG9uc2UuZGV0YWlscy5hbGxvd2VkX2Nob29zZV90YWJsZTtcbiAgICAgICAgICB0aGlzLnJvb21fbGlzdCA9IHJlc3BvbnNlLmRldGFpbHMucm9vbV9saXN0O1xuICAgICAgICAgIHRoaXMubm90X2F2YWlsYWJsZV90aW1lID0gcmVzcG9uc2UuZGV0YWlscy5ub3RfYXZhaWxhYmxlX3RpbWU7XG4gICAgICAgICAgdGhpcy5ndWVzdCA9IHJlc3BvbnNlLmRldGFpbHMuZGVmYXVsdF9ndWVzdDtcblxuICAgICAgICAgIGlmICghQVBJaW50ZXJmYWNlLmVtcHR5KGlkKSkge1xuICAgICAgICAgICAgdGhpcy5ndWVzdCA9IHJlc3BvbnNlLmRldGFpbHMuZGF0YV9ib29raW5nLmd1ZXN0X251bWJlcl9yYXc7XG4gICAgICAgICAgICB0aGlzLnJlc2VydmF0aW9uX3RpbWUgPVxuICAgICAgICAgICAgICByZXNwb25zZS5kZXRhaWxzLmRhdGFfYm9va2luZy5yZXNlcnZhdGlvbl90aW1lX3JhdztcbiAgICAgICAgICAgIHRoaXMuZmlyc3RfbmFtZSA9IHJlc3BvbnNlLmRldGFpbHMuZGF0YV9ib29raW5nLmZpcnN0X25hbWU7XG4gICAgICAgICAgICB0aGlzLmxhc3RfbmFtZSA9IHJlc3BvbnNlLmRldGFpbHMuZGF0YV9ib29raW5nLmxhc3RfbmFtZTtcbiAgICAgICAgICAgIHRoaXMuZW1haWxfYWRkcmVzcyA9IHJlc3BvbnNlLmRldGFpbHMuZGF0YV9ib29raW5nLmVtYWlsX2FkZHJlc3M7XG4gICAgICAgICAgICB0aGlzLnNwZWNpYWxfcmVxdWVzdCA9XG4gICAgICAgICAgICAgIHJlc3BvbnNlLmRldGFpbHMuZGF0YV9ib29raW5nLnNwZWNpYWxfcmVxdWVzdDtcblxuICAgICAgICAgICAgdGhpcy5tb2JpbGVfcHJlZml4ID0gcmVzcG9uc2UuZGV0YWlscy5kYXRhX2Jvb2tpbmcucGhvbmVfcHJlZml4O1xuICAgICAgICAgICAgdGhpcy5tb2JpbGVfbnVtYmVyID1cbiAgICAgICAgICAgICAgcmVzcG9uc2UuZGV0YWlscy5kYXRhX2Jvb2tpbmcuY29udGFjdF9waG9uZV93aXRob3V0X3ByZWZpeDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLmd1ZXN0X2xpc3QgPSBbXTtcbiAgICAgICAgICB0aGlzLmRhdGVfbGlzdCA9IFtdO1xuICAgICAgICAgIHRoaXMudGltZV9zbG90ID0gW107XG4gICAgICAgICAgdGhpcy5hbGxfdGltZV9zbG90ID0gW107XG4gICAgICAgICAgdGhpcy5yZXNlcnZhdGlvbl9kYXRlID0gXCJcIjtcbiAgICAgICAgICB0aGlzLnRjID0gXCJcIjtcbiAgICAgICAgICB0aGlzLmFsbG93ZWRfY2hvb3NlX3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5yb29tX2xpc3QgPSBbXTtcbiAgICAgICAgICB0aGlzLm5vdF9hdmFpbGFibGVfdGltZSA9IFtdO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIEdldGJvb2tpbmdkZXRhaWxzKGlkKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5lcnJvcnMgPSBcIlwiO1xuICAgICAgQVBJaW50ZXJmYWNlLmZldGNoRGF0YVBvc3RUYWJsZTIoXCJHZXRib29raW5nZGV0YWlsc1wiLCBcIiZpZD1cIiArIGlkKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICB0aGlzLmhhc19kYXRhID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmd1ZXN0X2xpc3QgPSByZXNwb25zZS5kZXRhaWxzLmd1ZXN0X2xpc3Q7XG4gICAgICAgICAgdGhpcy5kYXRlX2xpc3QgPSByZXNwb25zZS5kZXRhaWxzLmRhdGVfbGlzdDtcbiAgICAgICAgICB0aGlzLnRpbWVfc2xvdCA9IHJlc3BvbnNlLmRldGFpbHMudGltZV9zbG90O1xuICAgICAgICAgIHRoaXMuYWxsX3RpbWVfc2xvdCA9IHJlc3BvbnNlLmRldGFpbHMuYWxsX3RpbWVfc2xvdDtcbiAgICAgICAgICB0aGlzLnJlc2VydmF0aW9uX2RhdGUgPSByZXNwb25zZS5kZXRhaWxzLmRlZmF1bHRfZGF0ZTtcbiAgICAgICAgICB0aGlzLnRjID0gcmVzcG9uc2UuZGV0YWlscy50YztcbiAgICAgICAgICB0aGlzLmFsbG93ZWRfY2hvb3NlX3RhYmxlID0gcmVzcG9uc2UuZGV0YWlscy5hbGxvd2VkX2Nob29zZV90YWJsZTtcbiAgICAgICAgICB0aGlzLnJvb21fbGlzdCA9IHJlc3BvbnNlLmRldGFpbHMucm9vbV9saXN0O1xuICAgICAgICAgIHRoaXMubm90X2F2YWlsYWJsZV90aW1lID0gcmVzcG9uc2UuZGV0YWlscy5ub3RfYXZhaWxhYmxlX3RpbWU7XG4gICAgICAgICAgdGhpcy5ndWVzdCA9IHJlc3BvbnNlLmRldGFpbHMuZGVmYXVsdF9ndWVzdDtcbiAgICAgICAgICB0aGlzLm1lcmNoYW50X3V1aWQgPSByZXNwb25zZS5kZXRhaWxzLm1lcmNoYW50X3V1aWQ7XG5cbiAgICAgICAgICBpZiAoIUFQSWludGVyZmFjZS5lbXB0eShpZCkpIHtcbiAgICAgICAgICAgIHRoaXMuZ3Vlc3QgPSByZXNwb25zZS5kZXRhaWxzLmRhdGFfYm9va2luZy5ndWVzdF9udW1iZXJfcmF3O1xuICAgICAgICAgICAgdGhpcy5yZXNlcnZhdGlvbl90aW1lID1cbiAgICAgICAgICAgICAgcmVzcG9uc2UuZGV0YWlscy5kYXRhX2Jvb2tpbmcucmVzZXJ2YXRpb25fdGltZV9yYXc7XG4gICAgICAgICAgICB0aGlzLmZpcnN0X25hbWUgPSByZXNwb25zZS5kZXRhaWxzLmRhdGFfYm9va2luZy5maXJzdF9uYW1lO1xuICAgICAgICAgICAgdGhpcy5sYXN0X25hbWUgPSByZXNwb25zZS5kZXRhaWxzLmRhdGFfYm9va2luZy5sYXN0X25hbWU7XG4gICAgICAgICAgICB0aGlzLmVtYWlsX2FkZHJlc3MgPSByZXNwb25zZS5kZXRhaWxzLmRhdGFfYm9va2luZy5lbWFpbF9hZGRyZXNzO1xuICAgICAgICAgICAgdGhpcy5zcGVjaWFsX3JlcXVlc3QgPVxuICAgICAgICAgICAgICByZXNwb25zZS5kZXRhaWxzLmRhdGFfYm9va2luZy5zcGVjaWFsX3JlcXVlc3Q7XG5cbiAgICAgICAgICAgIHRoaXMubW9iaWxlX3ByZWZpeCA9IHJlc3BvbnNlLmRldGFpbHMuZGF0YV9ib29raW5nLnBob25lX3ByZWZpeDtcbiAgICAgICAgICAgIHRoaXMubW9iaWxlX251bWJlciA9XG4gICAgICAgICAgICAgIHJlc3BvbnNlLmRldGFpbHMuZGF0YV9ib29raW5nLmNvbnRhY3RfcGhvbmVfd2l0aG91dF9wcmVmaXg7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5ndWVzdF9saXN0ID0gW107XG4gICAgICAgICAgdGhpcy5kYXRlX2xpc3QgPSBbXTtcbiAgICAgICAgICB0aGlzLnRpbWVfc2xvdCA9IFtdO1xuICAgICAgICAgIHRoaXMuYWxsX3RpbWVfc2xvdCA9IFtdO1xuICAgICAgICAgIHRoaXMucmVzZXJ2YXRpb25fZGF0ZSA9IFwiXCI7XG4gICAgICAgICAgdGhpcy50YyA9IFwiXCI7XG4gICAgICAgICAgdGhpcy5hbGxvd2VkX2Nob29zZV90YWJsZSA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMucm9vbV9saXN0ID0gW107XG4gICAgICAgICAgdGhpcy5ub3RfYXZhaWxhYmxlX3RpbWUgPSBbXTtcbiAgICAgICAgICB0aGlzLmVycm9ycyA9IGVycm9yO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGdldFRpbWVzbG90KG1lcmNoYW50X3V1aWQsIGlkKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5yZXNlcnZhdGlvbl90aW1lID0gXCJcIjtcbiAgICAgIGxldCAkcGFyYW1zID0gXCJtZXJjaGFudF91dWlkPVwiICsgbWVyY2hhbnRfdXVpZDtcbiAgICAgICRwYXJhbXMgKz0gXCImcmVzZXJ2YXRpb25fZGF0ZT1cIiArIHRoaXMucmVzZXJ2YXRpb25fZGF0ZTtcbiAgICAgICRwYXJhbXMgKz0gXCImZ3Vlc3Q9XCIgKyB0aGlzLmd1ZXN0O1xuICAgICAgJHBhcmFtcyArPSBcIiZpZD1cIiArIGlkO1xuXG4gICAgICBBUElpbnRlcmZhY2UuZmV0Y2hEYXRhUG9zdFRhYmxlKFwiR2V0dGltZXNsb3RcIiwgJHBhcmFtcylcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgdGhpcy50aW1lX3Nsb3QgPSByZXNwb25zZS5kZXRhaWxzLnRpbWVfc2xvdDtcbiAgICAgICAgICB0aGlzLmFsbF90aW1lX3Nsb3QgPSByZXNwb25zZS5kZXRhaWxzLmFsbF90aW1lX3Nsb3Q7XG4gICAgICAgICAgdGhpcy5ub3RfYXZhaWxhYmxlX3RpbWUgPSByZXNwb25zZS5kZXRhaWxzLm5vdF9hdmFpbGFibGVfdGltZTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMudGltZV9zbG90ID0gW107XG4gICAgICAgICAgdGhpcy5hbGxfdGltZV9zbG90ID0gW107XG4gICAgICAgICAgdGhpcy5ub3RfYXZhaWxhYmxlX3RpbWUgPSBbXTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBpc1NlbGVjdGVkKGRhdGEpIHtcbiAgICAgIGlmICh0aGlzLnJlc2VydmF0aW9uX3RpbWUgPT0gZGF0YSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGlzTm90YXZhaWxhYmxlKGJvb2tpbmdUaW1lKSB7XG4gICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5ub3RfYXZhaWxhYmxlX3RpbWUpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKHRoaXMubm90X2F2YWlsYWJsZV90aW1lLmluY2x1ZGVzKGJvb2tpbmdUaW1lKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICBTZXRCb29raW5nKG1lcmNoYW50X3V1aWQsIGlkLCAkcSkge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIGxldCAkcGFyYW1zID0gXCJtZXJjaGFudF91dWlkPVwiICsgbWVyY2hhbnRfdXVpZDtcbiAgICAgICRwYXJhbXMgKz0gXCImcmVzZXJ2YXRpb25fZGF0ZT1cIiArIHRoaXMucmVzZXJ2YXRpb25fZGF0ZTtcbiAgICAgICRwYXJhbXMgKz0gXCImcmVzZXJ2YXRpb25fdGltZT1cIiArIHRoaXMucmVzZXJ2YXRpb25fdGltZTtcbiAgICAgICRwYXJhbXMgKz0gXCImZ3Vlc3Q9XCIgKyB0aGlzLmd1ZXN0O1xuICAgICAgJHBhcmFtcyArPSBcIiZpZD1cIiArIGlkO1xuICAgICAgQVBJaW50ZXJmYWNlLmZldGNoRGF0YVBvc3RUYWJsZTIoXCJTZXRCb29raW5nXCIsICRwYXJhbXMpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHRoaXMuc3RlcHMgPSAyO1xuICAgICAgICAgIHRoaXMucmVzZXJ2YXRpb25faW5mbyA9IHJlc3BvbnNlLmRldGFpbHM7XG4gICAgICAgICAgdGhpcy50YWJsZV9saXN0ID0gcmVzcG9uc2UuZGV0YWlscy50YWJsZV9saXN0O1xuICAgICAgICAgIGlmICghQVBJaW50ZXJmYWNlLmVtcHR5KGlkKSkge1xuICAgICAgICAgICAgdGhpcy5yb29tX3V1aWQgPSByZXNwb25zZS5kZXRhaWxzLnJvb21fdXVpZDtcbiAgICAgICAgICAgIHRoaXMudGFibGVfdXVpZCA9IHJlc3BvbnNlLmRldGFpbHMudGFibGVfdXVpZDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yb29tX3V1aWQgPSBcIlwiO1xuICAgICAgICAgICAgdGhpcy50YWJsZV91dWlkID0gXCJcIjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIUFQSWludGVyZmFjZS5lbXB0eShyZXNwb25zZS5kZXRhaWxzLnVzZXJfZGF0YSkpIHtcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhyZXNwb25zZS5kZXRhaWxzLnVzZXJfZGF0YSkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICB0aGlzLmZpcnN0X25hbWUgPSByZXNwb25zZS5kZXRhaWxzLnVzZXJfZGF0YS5maXJzdF9uYW1lO1xuICAgICAgICAgICAgICB0aGlzLmxhc3RfbmFtZSA9IHJlc3BvbnNlLmRldGFpbHMudXNlcl9kYXRhLmxhc3RfbmFtZTtcbiAgICAgICAgICAgICAgdGhpcy5lbWFpbF9hZGRyZXNzID0gcmVzcG9uc2UuZGV0YWlscy51c2VyX2RhdGEuZW1haWxfYWRkcmVzcztcbiAgICAgICAgICAgICAgdGhpcy5tb2JpbGVfcHJlZml4ID0gcmVzcG9uc2UuZGV0YWlscy51c2VyX2RhdGEucGhvbmVfcHJlZml4O1xuICAgICAgICAgICAgICB0aGlzLm1vYmlsZV9udW1iZXIgPVxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRldGFpbHMudXNlcl9kYXRhLmNvbnRhY3RfbnVtYmVyX3dpdGhvdXRfcHJlZml4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJkYXJrXCIsIGVycm9yLCBcImVycm9yXCIsICRxKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICByZXNldFJlc2VydmF0aW9uKG1lcmNoYW50X3V1aWQpIHtcbiAgICAgIHRoaXMuc3RlcHMgPSAxO1xuICAgICAgdGhpcy5HZXRib29raW5nYXR0cmlidXRlcyhtZXJjaGFudF91dWlkKTtcbiAgICAgIHRoaXMuZ3Vlc3QgPSAxO1xuICAgICAgdGhpcy5yZXNlcnZhdGlvbl9kYXRlID0gXCJcIjtcbiAgICAgIHRoaXMucmVzZXJ2YXRpb25fdGltZSA9IFwiXCI7XG4gICAgfSxcbiAgICBnZXRCb29raW5nRGV0YWlscyhpZCwgZG9uZSkge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuZXJyb3JzID0gXCJcIjtcbiAgICAgIEFQSWludGVyZmFjZS5mZXRjaERhdGFQb3N0VGFibGUyKFwiQm9va2luZ0RldGFpbHNcIiwgXCJpZD1cIiArIGlkKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuYm9va2luZ19kYXRhID0gZGF0YS5kZXRhaWxzO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5ib29raW5nX2RhdGEgPSBbXTtcbiAgICAgICAgICB0aGlzLmVycm9ycyA9IGVycm9yO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIGlmICghQVBJaW50ZXJmYWNlLmVtcHR5KGRvbmUpKSB7XG4gICAgICAgICAgICBkb25lKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGdldENhbmNlbHJlYXNvbihpZCwgZG9uZSkge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIEFQSWludGVyZmFjZS5mZXRjaERhdGFQb3N0VGFibGUoXCJnZXRDYW5jZWxyZWFzb25cIiwgXCJpZD1cIiArIGlkKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuY2FuY2VsX3JlYXNvbiA9IGRhdGEuZGV0YWlscy5kYXRhO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5jYW5jZWxfcmVhc29uID0gW107XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgaWYgKCFBUElpbnRlcmZhY2UuZW1wdHkoZG9uZSkpIHtcbiAgICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0Qm9va2luZ1N1bW1hcnkoKSB7XG4gICAgICB0aGlzLnN1bW1hcnlfbG9hZGluZyA9IHRydWU7XG4gICAgICBBUElpbnRlcmZhY2UuZmV0Y2hEYXRhUG9zdFRhYmxlMihcIkJvb2tpbmdTdW1tYXJ5XCIpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5zdW1tYXJ5ID0gZGF0YS5kZXRhaWxzLnN1bW1hcnk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLnN1bW1hcnkgPSBbXTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLnN1bW1hcnlfbG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxu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
