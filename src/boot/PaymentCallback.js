import { boot } from "quasar/wrappers";
import { App } from "@capacitor/app";

export default boot(async ({ app, router }) => {
  App.addListener("appUrlOpen", (data) => {
    const url = data.url;
    if (url.startsWith("EkoHotels://payment-callback")) {
      const params = new URLSearchParams(url.split("?")[1]);
      const status = params.get("status");
      switch (status) {
        case "successful":
          const order_id = params.get("order_id");
          router.replace({
            path: "/order/successful",
            query: { order_uuid: order_id },
          });
          break;
        case "wallet_succesful":
          const transaction_id = params.get("transaction_id");
          const amount = params.get("amount");
          const payment_name = params.get("payment_name");
          const transaction_date = params.get("transaction_date");

          router.replace({
            path: "/account/wallet",
            query: {
              transaction_id: transaction_id,
              amount: amount,
              payment_name: payment_name,
              transaction_date: transaction_date,
            },
          });
          break;
        case "failed":
          const message = params.get("message");
          app.config.globalProperties.$q.notify({
            message: message,
            color: "dark",
            position: "top",
            timeout: 3000,
          });
          break;
        case "cancel":
          // do nothing
          break;
      }
    }
  });
});
