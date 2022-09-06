require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const { uuid } = require("uuid");

//components
const apiRouter = require("./app/routes/api-router");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", apiRouter);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT, function () {
      console.log(`Connected to DB, boi`);
    });
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
// let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
// let paytmParams = {};
// (paytmParams["MID"] = process.env.PAYTM_MID),
//   (paytmParams["WEBSITE"] = process.env.PAYTM_WEBSITE),
//   (paytmParams["CHANNEL_ID"] = process.env.PAYTM_CHANNEL_ID),
//   (paytmParams["INDUSTRY_TYPE_ID"] = process.env.PAYTM_INDUSTRY_TYPE_ID),
//   (paytmParams["ORDER_ID"] = uuid),
//   (paytmParams["CUST_ID"] = process.env.PAYTM_CUST_ID),
//   (paytmParams["TXN_AMOUNT"] = "100"),
//   (paytmParams["CALLBACK_URL"] = "http://localhost:7000/callback");
// paytmParams["EMAIL"] = "codeforinterview01@gmail.com";
// paytmParams["MOBILE_NO"] = "1234567852";
// module.exports = paytmMerchantkey;
// module.exports = paytmParams;
