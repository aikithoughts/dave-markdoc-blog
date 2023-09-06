---
title: Interchain Tokens
description: Learn how to make ERC-20 tokens available on multiple chains.
cover: /images/Axelar-Logo-Update.png
---

{%infobox title="Introducing the Interchain Portal" type="info" open=true %}
Check out the [Interchain Portal](https://testnet.interchain.axelar.dev/) to explore how to create Interchain Tokens.
{%/infobox%}

With Axelar, you can take new and existing ERC-20 tokens and transform them into Interchain Tokens. You can make these tokens available across any number of chains. Interchain Tokens enable a number of solutions, including:

* Sending tokens cross-chain
* Building custom asset bridges
* Building asset transfers into your interchain dApp

In this topic, you'll discover:

* How to create new Interchain Tokens
* How to transform existing tokens into Interchain Tokens

## Before you begin

Before you create your Interchain Tokens, you should know the following:

* **New or existing**. You should know if you want to create new tokens, or if you want to transform existing tokens. For existing tokens, the Interchain Token Service supports tokens that exist on a single chain as well as tokens that are available across multple chains.
* **Standard or custom**. Whether you create new Interchain Tokens, or you transform existing tokens into Interchain Tokens, you have two options: standardized or custom. Standardized tokens refer to tokens that comply with the [ERC-20 Token Standard](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/). Custom tokens refers to any tokens that you've built with custom features, such as custom minting policy.

## Creating new Interchain Tokens

Create new Interchain Tokens if you don't have any existing tokens that you want to make available across multiple chains. When you create new Interchain Tokens, you can two options:

* Create new {% glossaryterm term="standardized token" %}standardized tokens{% /glossaryterm %}.
* Create {% glossaryterm term="custom token" %}custom tokens{% /glossaryterm %}. Choose this option if you want to add custom logic into your token.

### Creating standardized interchain tokens

To create an Interchain Token from new standardized ERC-20 tokens:

1. Visit the [Interchain Portal](https://testnet.interchain.axelar.dev/).
1. Connect your wallet.
1. Select a source network where you have funds.
1. Choose to deploy a new ERC-20 token.

After completing these steps, you have an ERC-20 token available on multiple chains. As this token is based on the ERC-20 standard, you can interact with it using any method that you're already used to.

In addition to basic actions such as sending and transferring, each token

In addition to standard actions such as sending and transferring, each token supports the [Standardized Interchain Token](https://github.com/axelarnetwork/interchain-token-service/blob/main/contracts/interfaces/IStandardizedToken.sol) and includes an interchainTransfer method allowing you to transfer it between blockchains.

```
function interchainTransfer(
	string calldata destinationChain,
	bytes calldata recipient,
	uint256 amount,
	bytes calldata metadata
) external payable;
```

### Creating interchain tokens

If you want your tokens to include more features than the {% glossaryterm term="standardized token" /%} provides, create a {% glossaryterm term="custom token" /%}. Examples of when to use a custom token include:

* Customize minting policies
* Ensure ownership or control of the token by a DAO
* Create rate limits
* Build any other custom logic into your token

To create an Interchain Token using custom ERC-20 tokens:

1. Build the token. If you have not built a token before, you can learn how from this www.alchemy.com topic: [How to Create an ERC-20 Token (4 steps)](https://docs.alchemy.com/docs/how-to-create-an-erc-20-token-4-steps). You can also use our [sample custom token](https://remix.ethereum.org/#url=https://github.com/axelarnetwork/axelar-docs/blob/main/public/samples/interchain-token-iinterchaintoken.sol&lang=en&optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.18+commit.87f61d96.js) as a starting point.

   {% infobox title="Implement the IInterchainToken interfcace" type="info" open=true%}
   Make sure your new token implements the IInterchainToken interface so you can offer interchainTransfer and interchainTransferFrom methods directly on your token.
   {% /infobox %}

2. Deploy the token to multiple chains using a tool such as the [Constant Address Deployer](https://docs.axelar.dev/dev/general-message-passing/solidity-utilities#constant-address-deployer) to give it the same address everywhere.

3. Deploy a [Mint/Burn Token Manager](https://docs.axelar.dev/dev/send-tokens/interchain-tokens#token-manager) for each chain by calling [deployCustomTokenManager](https://github.com/axelarnetwork/interchain-token-service/blob/main/contracts/interchain-token-service/InterchainTokenService.sol#L336) on the Interchain Token Service (or [deployRemoteCustomTokenManager](https://github.com/axelarnetwork/interchain-token-service/blob/main/contracts/interchain-token-service/InterchainTokenService.sol#L358) for remote chains) and set the {% glossaryterm term="distributor" /%} on your token to be the new Token Manager.

   This step gives the Token Manager permissions to mint and burn tokens on your behalf as tokens move between chains.

## Converting existing tokens into interchain tokens

If you already have ERC-20 tokens on one or more blockchains, you can turn them into an Interchain Token by deploying {% glossaryterm term="Token Manager"%}Token Managers{% /glossaryterm %}. Token Managers can be either {% glossaryterm term="Lock/Release" /%} or {% glossaryterm term="Mint/Burn" /%}. For Mint/Burn Token Managers, you”ll need to give the Token Manager permissions to mint and burn tokens on your behalf as tokens move between chains.

You can turn existing tokens into Interchain Tokens using one of the following methods:

* **Canonical token method**. Use this method for basic implementations that do not require custom functionality.
* **Custom token method**. Use this method if you want to include custom functionality in your Interchain Tokens, or you already have a version of your token on multiple chains.

### Converting standardized tokens

If you have existing ERC-20 tokens on a single chain, use the canonical token method to create a wrapped and bridgeable version to be available on other chains. Perform this task by registering your ERC-20 as a {%glossaryterm term="canonical" /%} token with the Interchain Token Service. You can register a token only once as a canonical chain.

{% infobox title="Try it!" open=true%}
Want to try this out? [Use Remix to create your own ERC-20](https://remix.ethereum.org/axelarnetwork/axelar-docs/blob/main/public/samples/interchain-token-simple.sol) and register your token on the [Interchain Token Portal](https://testnet.interchain.axelar.dev/).
{% /infobox %}

You can also register the token directly using the Interchain Token Service Smart Contract:

1. Call [registerCanonicalToken](https://github.com/axelarnetwork/interchain-token-service/blob/main/contracts/interchain-token-service/InterchainTokenService.sol#L309) on the Interchain Token Service.

    ```
	/**
	* @notice Used to register canonical tokens. Caller does not matter.
	* @param tokenAddress the token to be bridged.
	* @return tokenId the tokenId that was used for this canonical token.
	*/
	function registerCanonicalToken(
		address tokenAddress
	) external payable notPaused returns (bytes32 tokenId);
	```
   
   This action deploys a Lock/Release Token Manager on the source chain.

2. Call [deployRemoteCanonical](https://github.com/axelarnetwork/interchain-token-service/blob/main/contracts/interchain-token-service/InterchainTokenService.sol#L325) on the Interchain Token Service for each destination chain.

   ```
	/**
		* @notice Used to deploy remote TokenManagers and standardized tokens for a canonical token. This needs to be
		* called from the chain that registered the canonical token, and anyone can call it.
		* @param tokenId the tokenId of the canonical token.
		* @param destinationChain the name of the chain to deploy the TokenManager and standardized token to.
		* @param gasValue the amount of native tokens to be used to pay for gas for the remote deployment.
		* At least the amount specified needs to be passed to the call
		* @dev `gasValue` exists because this function can be part of a multicall involving multiple functions that could make remote contract calls.
		*/
	function deployRemoteCanonicalToken(
		bytes32 tokenId, 
		string calldata destinationChain, 
		uint256 gasValue
	) public payable notPaused
   ```

   This action creates an ERC-20 on each destination chain as well as Mint/Burn Token Manager.

When tokens move from the origin chain to another chain, the Token Manager locks the token on the origin chain and minted on the destination chain. If you moved tokens directly from one non-origin chain to another, the token is burned on the source chain and minted on the destination chain.

### Converting custom tokens

If you have custom tokens already deployed to multiple blockchains, you can convert those tokens into linked Interchain Tokens. This process requires that you first deploy your {% glossary term="custom token" /%} on multiple chains, or already have a version of your token on multiple chains.

To convert existing custom tokens into interchain tokens:

1. Decide if you want to make all your token managers Mint/Burn, or you if you want one your origin chain to be Lock/Release. 

1. Register a Token Manager for each custom token.

   ```
   /**
     * @notice Used to deploy custom TokenManagers with the specified salt. Different callers would result in different tokenIds.
     * @param salt the salt to be used.
     * @param tokenManagerType the type of TokenManager to be deployed.
     * @param params the params that will be used to initialize the TokenManager.
     */
    function deployCustomTokenManager(
        bytes32 salt,
        TokenManagerType tokenManagerType,
        bytes memory params
    ) public payable notPaused returns (bytes32 tokenId) {
        address deployer_ = msg.sender;
        tokenId = getCustomTokenId(deployer_, salt);
        _deployTokenManager(tokenId, tokenManagerType, params);
        emit CustomTokenIdClaimed(tokenId, deployer_, salt);
    }
   ```

2. **Optional**. Configure your custom tokens to extend [IInterchainToken](https://github.com/axelarnetwork/interchain-token-service/blob/main/contracts/interfaces/IInterchainToken.sol) to offer [interchainTransfer](https://github.com/axelarnetwork/interchain-token-service/blob/main/contracts/interfaces/IInterchainToken.sol#L20) and [interchainTransferFrom](https://github.com/axelarnetwork/interchain-token-service/blob/main/contracts/interfaces/IInterchainToken.sol#L37) methods.

## More use cases

The Interchain Token Service is a powerful tool for moving tokens between blockchains, providing you all of the functionality and power you need to make your token interactive wherever it needs to be. Here are some other possibilities for Interchain Tokens:

* Use the {% glossaryterm term="operator" /%}. The Operator is able to manage the flow rates of tokens between chains by calling setFlowLimit on the Interchain Token Service.

* Make your Interchain Tokens executable. You can send executable Interchain Tokens alongside a standard GMP message. For an example of this, see this example: [InterchainTokenExecutable.sol](https://github.com/axelarnetwork/interchain-token-service/blob/example/example-flows-for-stephen/contracts/examples/InterchainTokenExecutable.sol).