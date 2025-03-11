require("dotenv").config();
const { ethers } = require("ethers");

async function main() {
  const provider = new ethers.JsonRpcProvider(process.env.ARBITRUM_RPC_URL);
  const contractAddress = process.env.ARBITRUM_CONTRACT;

  const contractAbi = [
    "function bridgeOperator() external view returns (address)",
  ];
  
  const contract = new ethers.Contract(contractAddress, contractAbi, provider);
  const operator = await contract.bridgeOperator();
  console.log("✅ Current Bridge Operator: ", contractAddress, operator);
}

main().catch(console.error);
