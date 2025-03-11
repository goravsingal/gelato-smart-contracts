# Smart Contract

## Steps

- Compile contract
- Deploy to Arbitrum sepolia
- Deploy to Optimism Sepolia
- Verify contracts at both networks
- Note the contract address

## Commands

```sh
npx hardhat compile
npx hardhat run scripts/deploy.js --network arbitrumSepolia
npx hardhat run scripts/deploy.js --network optimismSepolia

# note the contract, and update .env file

npx hardhat run scripts/setBridgeOperator_arb_sepolia.js --network arbitrumSepolia
npx hardhat run scripts/setBridgeOperator_opt_sepolia.js --network optimismSepolia

npx hardhat run scripts/check_bridge_operator_arb_sepolia.js --network arbitrumSepolia
npx hardhat run scripts/check_bridge_operator_opt_sepolia.js --network optimismSepolia


npx hardhat verify --network arbitrumSepolia <contract address>
npx hardhat verify --network optimismSepolia <contract address>

## Sample env file

```sh
# from metamask
PRIVATE_KEY=

OPERATOR_WALLET=

ARBISCAN_API_KEY=
OPTIMISM_ETHERSCAN_API_KEY=

ARBITRUM_CONTRACT=
OPTIMISM_CONTRACT=

ARBITRUM_RPC_URL=https://sepolia-rollup.arbitrum.io/rpc
```
