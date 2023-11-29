require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
/** @type import('hardhat/config').HardhatUserConfig */

// eslint-disable-next-line no-undef
task("accounts", "Prints the list of accounts", async (taskArgs,hre) => {
  const accounts = await hre.ethers.getSigners();
  
  for (const account of accounts) {
    console.log(account.address);
  }
});
module.exports = {
  solidity: "0.8.19",
  defaultNetwork: "polygon",
  paths: {
    artifacts: "./src/artifacts",
  },
  networks:{
  hardhat:{
      chainId: 31337,
      blockConfirmations: 1,
    },
    polygon:{
      url: process.env.REACT_APP_RPC_URL,
      accounts: [process.env.REACT_APP_PRIVATE_KEY]
    },
  }
};