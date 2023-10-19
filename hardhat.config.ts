import dotenv from 'dotenv'
dotenv.config()

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    goerli: {
      url: process.env.ALCHEMY_GOERLI_URL,
      accounts: [
        process.env.PRIVATE_KEY ?? ''
      ]
    },
    arbitrumGoerli: {
      url: process.env.ALCHEMY_ARBITRUM_GORELI_URL,
      accounts: [
        process.env.PRIVATE_KEY ?? ''
      ]
    }
  },
  etherscan: {
    apiKey: {
      goerli: process.env.EHTERSCAN_KEY ?? '',
      arbitrumGoerli: process.env.ARBISCAN_KEY ?? '',
    }
  },
};

export default config;
