const contract = await ethers.getContractAt("MockERC20", "YOUR_CONTRACT_ADDRESS");
await contract.setBridgeOperator("YOUR_WALLET_ADDRESS");
await contract.mint("YOUR_WALLET_ADDRESS", ethers.parseEther("100"));
console.log("Tokens Minted!");
