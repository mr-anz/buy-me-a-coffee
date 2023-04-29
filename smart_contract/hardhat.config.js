require('@nomiclabs/hardhat-waffle');
require('dotenv').config()

const API_URL = process.env.ALCHEMY_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/z4WpA8UKgqnwbTYmrZu15yCOiijBKaRv',
      accounts: ['2f99db8cdb04655028eee1dc98230925202f6b3e010e43fad2883b4bea90a1a3'],
    },
    sepolia: {
      url: API_URL,
      accounts: [PRIVATE_KEY]
    },
  },
};