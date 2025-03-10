
## Steps

- Deploy to Arbitrum sepolia
- Deploy to Optimism Sepolia
- Note the contract address

### Without Backend

- Open hardhat console

```sh
npx hardhat console --network arbitrumSepolia
```

- Mint tokens (Only bridge operator)
- Burn Tokens (User Can Do)

- Get free ETH
- Using bridge, transfer ETH
- Deploy Arbitrum contract
- Verify
- Deploy Optimism contract
- Verify
- ensures only the bridge operator can mint & burn tokens.
  npx hardhat console --network optimismSepolia
const contract = await ethers.getContractAt("MockERC20", "0xF32948DaA47AA24C6cdD608979a8c623fF6BF6b5");
await contract.setBridgeOperator("0xdCFB8c356ca231b333627bC8a2eB0a8E7D3ece6f");

- npx hardhat console --network arbitrumSepolia
const contract = await ethers.getContractAt("MockERC20", "0x63A8EDe8E5A47A84059c650Dedfbc6dcA746BAdb");
await contract.setBridgeOperator("0xdCFB8c356ca231b333627bC8a2eB0a8E7D3ece6f");



optimism Sepolia contract: 0xF32948DaA47AA24C6cdD608979a8c623fF6BF6b5
Arbitrum Sepolia contract: 0x63A8EDe8E5A47A84059c650Dedfbc6dcA746BAdb

-----

- create two more user wallets
  - testuser1 - 0xF70d8d59580c0e259E2707AF7C5B0B7F580E9B62
    - private key: 72a25c97f4f622edfab6c4759f5c70b96d2ad3149c98ec47aee6641b653cb28d
  - testuser2 - 0x3d6F4af79CC23C96633FE8Ab5E47dD9c855A27D5
- from metamask, transfer ETH to these users from main wallet
- As contract admin, Mint Some MockERC20 Tokens for Users
  - Mint Tokens on Arbitrum Sepolia
  - npx hardhat console --network arbitrumSepolia
  - const contract = await ethers.getContractAt("MockERC20", "0x63A8EDe8E5A47A84059c650Dedfbc6dcA746BAdb");
    await contract.mint("0xF70d8d59580c0e259E2707AF7C5B0B7F580E9B62", ethers.parseEther("100")); // Mint 100 tokens
    await contract.mint("0x3d6F4af79CC23C96633FE8Ab5E47dD9c855A27D5", ethers.parseEther("100")); // Mint 100 tokens

- Burn Tokens from Test User 1's Wallet
  - npx hardhat console --network arbitrumSepolia
  - const contract = await ethers.getContractAt("MockERC20", "0x63A8EDe8E5A47A84059c650Dedfbc6dcA746BAdb", "72a25c97f4f622edfab6c4759f5c70b96d2ad3149c98ec47aee6641b653cb28d");
    await contract.burn(ethers.parseEther("50")); // Burn 50 tokens



npx hardhat compile
npx hardhat run scripts/deploy.js --network arbitrumSepolia
npx hardhat run scripts/deploy.js --network optimismSepolia

npx hardhat run scripts/setBridgeOperator_arb_sepolia.js --network arbitrumSepolia
npx hardhat run scripts/setBridgeOperator_opt_sepolia.js --network optimismSepolia

npx hardhat run scripts/check_bridge_operator_arb_sepolia.js --network arbitrumSepolia
npx hardhat run scripts/check_bridge_operator_opt_sepolia.js --network optimismSepolia


npx hardhat verify --network arbitrumSepolia 0x73f4Baf90bf72F981f12c335aF24289Ee545AcCa 
npx hardhat verify --network optimismSepolia 0x1Bb4904e49aBd249545D3cB7D7AfC0CFA829452f
