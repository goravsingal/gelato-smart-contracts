require("dotenv").config();
const { ethers } = require("hardhat");

async function main() {
  const contractAddress = process.env.OPTIMISM_CONTRACT;

  const contract = await ethers.getContractAt("MockERC20", contractAddress);
  const operator = await contract.bridgeOperator();
  console.log("Current bridge operator:", operator);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
