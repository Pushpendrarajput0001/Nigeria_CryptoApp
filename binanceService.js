const axios = require('axios');

class BinanceService {
   async getUSDtoNGNPrice(callback) {
    const url = 'https://api.binance.com/api/v3/ticker/price?symbol=USDTNGN';

    try {
      const response = await axios.get(url);
      const usdToNgnPrice = response.data.price;
      const rate = parseFloat(usdToNgnPrice).toFixed(2);
      callback(null, rate);
    } catch (error) {
      if (error.response) {
        callback('Server Error: ' + error.response.status, null);
      } else if (error.request) {
        callback('No response from server', null);
      } else {
        callback('Request error: ' + error.message, null);
      }
    }
  }
}

module.exports = BinanceService;
