require("dotenv").config();
const { ethers } = require("hardhat");

async function main() {
  const contractAddress = process.env.ARBITRUM_CONTRACT;
  const bridgeOperatorAddress = process.env.OPERATOR_WALLET;

  const contract = await ethers.getContractAt("MockERC20", contractAddress);

  // ✅ Set Bridge Operator
  const tx = await contract.setBridgeOperator(bridgeOperatorAddress);
  await tx.wait();
  console.log(`✅ Bridge Operator set to ${bridgeOperatorAddress}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
