require("dotenv").config();
const { ethers } = require("hardhat");

async function main() {
  const contractAddress = process.env.ARBITRUM_CONTRACT;
  const [deployer] = await ethers.getSigners();

  const contractAbi = [
    "function balanceOf(address owner) external view returns (uint256)",
    "function burn(uint256 amount) external",
    "function mint(address to, uint256 amount) external",
    "event TokensBurned(address indexed user, uint256 amount)"
  ];
  

  const contract = new ethers.Contract(contractAddress, contractAbi, deployer);
  const userBalance = await contract.balanceOf(deployer.address);
  console.log("🔥 Current Balance of User:", deployer.address, ethers.formatEther(userBalance));
  if (userBalance < ethers.parseEther("1")) {
    console.error("❌ Not enough tokens to burn!");
    return;
  }

  console.log("🚀 Listening for burn events...");

  contract.on("TokensBurned", (user, amount) => {
    console.log(`🔥 Burn event detected! User: ${user}, Amount: ${ethers.formatEther(amount)}`);
  });

  // ✅ Manually trigger a burn transaction
  const burnAmount = ethers.parseEther("1");
  console.log('Burning 1 token...');
  const tx = await contract.burn(burnAmount);
  await tx.wait();

  console.log("✅ Burn executed successfully!");

  // Keep script running to listen for events
  setTimeout(() => {
    console.log("🛑 Stopping event listener...");
    process.exit(0);
  }, 30000);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
