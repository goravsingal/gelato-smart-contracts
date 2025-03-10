require("dotenv").config();
const { ethers } = require("hardhat");

async function main() {
  console.log(`🚀 Deploying MockERC20`);


  const MockERC20 = await ethers.getContractFactory("MockERC20");
  const token = await MockERC20.deploy();

  await token.waitForDeployment();
  console.log("MockERC20 deployed to:", await token.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
