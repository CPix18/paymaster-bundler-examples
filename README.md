# [Coinbase Developer Platform Paymaster & Bundler Examples](https://github.com/coinbase/paymaster-bundler-examples)

This repo has code examples on how to request tokens from an ERC20 token [SWING] faucet (https://basescan.org/address/0xcC7817DCc0965DDE3B4a9340ec35A21b23393013) on Base using Coinbase Developer Platform's Paymaster & Bundler.

I currently have one example using the pimlico SDK, but contributions are always welcome! 

### Supported SDKs

- [Pimlico (permissionless.js)](https://github.com/coinbase/paymaster-bundler-examples/tree/master/examples/pimlico)

### Supported Account Types

- [SimpleAccount](https://github.com/eth-infinitism/account-abstraction/blob/develop/contracts/samples/SimpleAccount.sol) (default)
- [Safe](https://safe.global/)
- [Kernel](https://github.com/zerodevapp/kernel)

### Compatibility

| SDK               | Simple | Safe | Kernel |
| ----------------- | ------ | ---- | ------ |
| aa-core           | ✅     | ❌   | ❌     |
| permissionless.js | ✅     | ✅   | ✅     |
| @zerodev/sdk      | ❌     | ❌   | ✅     |

## Getting Started

Prerequisites: you'll need to have [node](https://nodejs.org/en) and [yarn](https://yarnpkg.com/) installed.

### 1. Clone this repo locally

```
git clone https://github.com/CPix18/paymaster-bundler-examples.git
```

### 2. Set up environment variables

- ### Copy the env example

```
cp .env.example .env
```

- ### Install dotenv

```
yarn
```

- This will setup dotenv to load the env file for private values

- ### Get your Node RPC URL

  - Navigate to https://www.coinbase.com/developer-platform/products/base-node
  - Sign up for a Coinbase Developer Platform account, if you don't have one already.
  - Under the **Build Onchain** section in the Portal, select **Node**
  - In the dropdown on the top right of **Configuration**, select **Base Testnet (Sepolia)**
  - Copy your RPC endpoint, and paste it into `.env` as the `RPC_URL` variable.
    - The RPC URL should look like `https://api.developer.coinbase.com/rpc/v1/base-sepolia/<api_key>`

- ### Add a signer

  You'll need to add a private key to initialize and sign for your [ERC-4337](https://www.erc4337.io/) smart contract account

  - Since the NFT mint is free and gas will be sponsored by our Paymaster, you can use a new account without any funds
  - You can create a new private key with [Foundry](https://book.getfoundry.sh/reference/cast/cast-wallet-new)
    - To install Foundry, run `curl -L https://foundry.paradigm.xyz | bash`
    - To generate a new key pair, run `cast wallet new`
  - Copy your private key, and paste it into `.env` as the `PRIVATE_KEY` variable

- ### Optional: configure the smart account for Pimlico

  -When using Pimlico, you can use a different smart account type by changing the `account_type` variable in `.env`
    - Valid values: `simple`, `safe`, `kernel`
    - [pimlico/src/account.js](https://github.com/coinbase/paymaster-bundler-examples/blob/master/examples/pimlico/src/account.js) is a code example on how to configure a different smart account for SDKs that support this feature

### 3. Navigate to the directory of the SDK you want to run the example with.

Example for swing

```
cd examples/pimlico
```

### 4. Install the dependencies with yarn

```
yarn
```

### 5. Run the example

```
yarn dev
```

### 6. See your sponsored transaction live!

You should receive an Etherscan link with your sponsored transaction in the terminal output. [Example](https://basescan.org/tx/0x94e27c21b8f8e3a288cbeff022a6c921aa49d7a945e340b05c3141a72da63183)

```
Minting to 0x923a5B9864726a67E1B2a0839c9b698b84dD4B80
Waiting for transaction...
 ⛽ Successfully sponsored gas for mintTo transaction with Coinbase Developer Platform!
 🔍 View on Etherscan: https://basescan.org/tx/0x94e27c21b8f8e3a288cbeff022a6c921aa49d7a945e340b05c3141a72da63183
✨  Done in 5.66s.
```
