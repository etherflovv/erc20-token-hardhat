# Deploy ERC-20 Token with HardHat

This repository contains a basic **ERC-20 token contract** created using [OpenZeppelin's Token Contract Wizard](https://docs.openzeppelin.com/contracts/4.x/wizard), and then *compiled, deployed and verified* with **HardHat**.

## Requirements
+ NodeJS/NPM: https://nodejs.org/
+ HardHat: https://hardhat.org/

## Instructions

1. Run `npm init` in a new directory.
2. Run `npm install --save-dev hardhat` to install HardHat in the directory.
3. Run `npx hardhat` to start HardHat, then select `Create an empty hardhat.config.js`.
4. Run `npm install --save-dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers` to install required dependencies.
5. Add `require("@nomiclabs/hardhat-waffle");` to `./hardhat.config.js`.
6. Go to [OpenZeppelin's Token Contract Wizard](https://docs.openzeppelin.com/contracts/4.x/wizard) to create token contract code, then copy-paste code into `./contracts/yourToken.sol`.
7. Run `npm install --save-dev @openzeppelin/contracts` to install token contract dependencies.
8. Run `npx hardhat compile` to compile solidity files.
9. Get API key from [Alchemy](https://www.alchemy.com/), and private key from web3 wallet e.g. [MetaMask](https://metamask.io/).
10. Add network module to `./hardhat.config.js`, with Alchemy API key and wallet private key.
11. Create `./scripts/deploy.js` with deploy config.
12. Run `npx hardhat run scripts/deploy.js --network goerli` to deploy the token.
13. Get API key from [Etherscan](https://etherscan.io/).
13. Run `npm install --save-dev @nomiclabs/hardhat-etherscan` to install pakage.
14. Add `require("@nomiclabs/hardhat-etherscan");` and Etherscan module to `./hardhat.config.js`, with Etherscan API key.
15. Run `npx hardhat verify --network goerli TOKEN_ADDRESS` to verify the token contract.

> Note: Although not done for this example, keys should be saved as [encrypted secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets) for better security.

## Deployment

+ [EtherFlow (ETF)](https://goerli.etherscan.io/token/0x2956540fb606180e37782657f683b15d7c633b79) deployed on Goerli Network
+ Token Address: `0x2956540Fb606180E37782657F683b15d7c633B79`

## Reference
+ Tutorial: https://youtu.be/2eUHIqswNwg