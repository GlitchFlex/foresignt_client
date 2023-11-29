// const { ethers } = require("hardhat");
const { ethers } = require("hardhat");
async function main() {
  const BettingContract = await ethers.getContractFactory("BettingContract");
  const bet = await BettingContract.deploy();
  await bet.waitForDeployment();

  console.log("deployed", bet);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});