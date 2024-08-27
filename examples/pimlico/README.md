## Getting Started

This example uses Pimlico's [permissionless.js](https://docs.pimlico.io/permissionless/reference) SDK to request tokens via a smart contract faucet on Base using a paymaster sponsored transaction.

We'll be requesting 1000 SWING on Base using Coinbase Developer Platform's Paymaster & Bundler.

### 1. Setup

Ensure you have the `rpc_url` and `private_key` variables set in the `config.json`.

### 2. Install dependencies

```
yarn
```

### 3. Run the example

```
yarn dev
```

### 4. See your sponsored transaction live!

You should receive an Etherscan link with your sponsored transaction in the terminal output. [Example](https://basescan.org/tx/0x94e27c21b8f8e3a288cbeff022a6c921aa49d7a945e340b05c3141a72da63183)

```
Minting to 0x923a5B9864726a67E1B2a0839c9b698b84dD4B80
Waiting for transaction...
 ⛽ Successfully sponsored gas for mintTo transaction with Coinbase Developer Platform!
 🔍 View on Etherscan: https://basescan.org/tx/0x94e27c21b8f8e3a288cbeff022a6c921aa49d7a945e340b05c3141a72da63183
✨  Done in 5.66s.
```
