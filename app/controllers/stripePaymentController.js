const stripe = require("stripe")(
  "sk_test_51Llp75SEC2o5dnLQhduH37n8xYsejGwlSMpm7md7CeKHUlUsGX0Y7os9EwDNXLLe9VI2paLJWvZVOHvwsnllWkHw00rwPDfNM1"
);
let paymentController = function (req, res) {
  stripe.customers
    .create({
      email: req.body.stripeEmail,
      source: req.body.stripeToken,
      name: "Gourav Hammad",
      address: {
        line1: "TC 9/4 Old MES colony",
        postal_code: "452331",
        city: "Indore",
        state: "Madhya Pradesh",
        country: "India",
      },
    })
    .then((customer) => {
      return stripe.charges.create({
        amount: 2500, // Charging Rs 25
        description: "Web Development Product",
        currency: "INR",
        customer: customer.id,
      });
    })
    .then((charge) => {
      res.send("Success"); // If no error occurs
    })
    .catch((err) => {
      res.send(err); // If some error occurs
    });
};
module.exports = paymentController;
