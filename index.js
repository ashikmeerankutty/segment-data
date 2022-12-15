require("dotenv").config();
const Analytics = require("analytics-node");

const WRITE_KEY = process.env.WRITE_KEY;

const analytics = new Analytics(WRITE_KEY);

const phone = "+919435756085";
const firstName = "Mary";
const lastName = "Joe";
const memberId = `OWB${phone.slice(-4)}`;
const email = `${firstName.toLowerCase()}-${phone.slice(-4)}@owl-bank.com`;

const data = {
  userId: memberId,
  phone,
  traits: {
    name: `${firstName} ${lastName}`,
    email,
    "First Name": firstName,
    "Last Name": lastName,
    userId: memberId,
    createdAt: new Date(),
    mobileno: phone,
    customerInfo: {
      addresses: [
        {
          addressType: "permanent",
          city: "Westminster",
          country: "United States",
          state: "Maryland",
          street: "4092 Marie Street",
        },
      ],
      email: "tchatterjee@twilio.com",
      firstName: "Tuhina",
      lastName: "Chatterjee",
      loyaltyInfo: { programName: "Golden Program" },
      mobileno: "8197653319",
      salutation: "Ms",
    },
    enquiredProducts: [
      {
        enquiredDate: "15-SEP-2022 10:25 AM",
        productImageUrl:
          "https://m.media-amazon.com/images/I/71eUw15rVbL._SX679_.jpg",
        productName:
          "Samsung 108 cm (43 inches) Crystal 4K Series Ultra HD Smart LED TV UA43AUE60AKLXL (Black)",
        productSku: "SMTV8901",
        timeSpend: "1:04",
      },
      {
        enquiredDate: "2022-10-06 06:00:09",
        productName: "Laptop",
        timeSpend: "00:54",
      },
      {
        enquiredDate: "Invalid date",
        productName: "Laptop",
        timeSpend: "NaN:NaN",
      },
      {
        enquiredDate: "2022-10-11 10:10:00",
        productName: "Laptop",
        timeSpend: "01:57",
      },
      {
        enquiredDate: "2022-10-11 12:07:07",
        productName: "Laptop",
        timeSpend: "01:17",
      },
    ],
  },
};

console.log("Inserting data : ", data);

analytics.identify(data);
