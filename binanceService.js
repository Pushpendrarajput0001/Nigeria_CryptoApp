// binanceService.js

const axios = require('axios');

class BinanceService {
  async getUSDtoNGNPrice() {
    try {
      const response = await axios.get('https://api.binance.com/api/v3/ticker/price', {
        params: {
          symbol: 'USDTNGN'
        }
      });
      const usdToNgnPrice = response.data.price;
      const rate = parseFloat(usdToNgnPrice).toFixed(2);
      return rate;
    } catch (error) {
      throw new Error('Unable to fetch USD to NGN price from Binance');
    }
  }
}

module.exports = BinanceService;
