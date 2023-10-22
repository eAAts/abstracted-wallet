# Abstracted Wallet Contract (AA Contract)

The Abstracted Wallet Contract (AA Contract) is designed to handle token payments and interactions with a bridge contract for cross-chain transfers.

## Overview

The AA Contract receives a token payment from a designated payer, approves the bridge contract to handle the tokens, and then initiates a cross-chain transfer using the bridge contract. The payer is specified during the contract's initialization and is the only account allowed to call the `pay` function.

## Setup

1. Deploy the Abstracted Wallet Contract.
2. Call the `initialize` function to set the owner, payer, bridge, and eAAts addresses.

## Method

### pay

```solidity
function pay(
    address tokenAddress,
    uint256 amount,
    uint256 targetChainId
) external onlyPayer
```

Accepts a token payment, approves the bridge contract to handle the tokens, and initiates a cross-chain transfer to the specified eAAts address on the target chain. The payer specified during initialization is the only account allowed to call this function.

## Prerequisites

- Node.js v14+ LTS and npm (comes with Node)
- Hardhat

## Installation

Clone the repository:

```bash
git clone https://github.com/eAAts/abstracted-wallet.git
```

Navigate to the project folder:

```bash
cd abstracted-wallet
```

Install dependencies:

```bash
npm install
```

## Set up configuration:

1. Review the `.example.env` file.
2. Create a `.env` file based on the example and adjust the values as needed.

For Linux or macOS:

```bash
cp .example.env .env
```

For Windows:

```bash
copy .example.env .env
```

## Compilation

Compile the smart contracts using Hardhat:

```bash
npx hardhat compile
```

## Quick Start Guide

### 1. Deployment:

Run the following command to compile the contracts using the Solidity compiler and deploy the BridgeMookup to your chosen network.

```bash
npx hardhat run scripts/deploy.js --network [network name]
```

## Conclusion

If you would like to contribute to the project, please fork the repository, make your changes, and then submit a pull request. We appreciate all contributions and feedback!
