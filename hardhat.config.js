require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

const ALCHEMY_API_KEY = "YOUR_KEY_HERE";
const WALLET_PRIVATE_KEY = "YOUR_KEY_HERE";
const ETHERSCAN_API_KEY = "YOUR_KEY_HERE";

module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${WALLET_PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: [`${ETHERSCAN_API_KEY}`]
  },
};