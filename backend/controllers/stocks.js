var request = require("request");

const getCompanyChart = (reqexp, resexp) => {
  const { symbol } = reqexp.body;
  var url =
    "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" +
    symbol +
    "&interval=5min&apikey=1UDHFF9M2INS9UP3";

  request.get(
    {
      url: url,
      json: true,
      headers: { "User-Agent": "request" },
    },
    (err, res, data) => {
      if (err) {
        console.log("Error:", err);
      } else if (res.statusCode !== 200) {
        console.log("Status:", res.statusCode);
      } else {
        // data is successfully parsed as a JSON object:
        console.log(data);
        resexp.status(200).json(data);
      }
    }
  );
};

const getCompanyOverview = (reqexp, resexp) => {
  const { symbol } = reqexp.body;
  var url =
    "https://www.alphavantage.co/query?function=OVERVIEW&symbol=" +
    symbol +
    "&apikey=demo";

  request.get(
    {
      url: url,
      json: true,
      headers: { "User-Agent": "request" },
    },
    (err, res, data) => {
      if (err) {
        console.log("Error:", err);
      } else if (res.statusCode !== 200) {
        console.log("Status:", res.statusCode);
      } else {
        // data is successfully parsed as a JSON object:
        console.log(data);
        resexp.status(200).json(data);
      }
    }
  );
};

exports.getCompanyChart = getCompanyChart;
exports.getCompanyOverview = getCompanyOverview;
