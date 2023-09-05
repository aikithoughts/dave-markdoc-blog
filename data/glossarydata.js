const glossaryData = [
    { term: "sentence", definition: "A group of words that forms a complete thought." },
    { term: "another term", definition: "The definition of another term." },
    { term: "glossary", definition: "An alphabetical list of terms or words found in or relating to a specific subject, text, or dialect, with explanations; a brief dictionary."},
    { term: "standardized token", definition: "A minimal ERC-20, that implements the IInterchainToken and IStandardizedToken interfaces and can be deployed by the service."},
    { term: "custom token", definition: "A custom ERC-20 that can have any features of functionality you desire, deployed by you. It can optionally implement the IInterchainToken interface to transfer methods directly on your token."},
    { term: "Token Manager", definition: "A contract created by the Interchain Token Service that is capable of locking and releasing tokens, or minting and burning them, depending on its type. Token Managers must be lock/unlock or mint/burn."},
    { term: "Mint/Burn", definition: "Incoming token transfers will result in the local minting of new tokens on this blockchain by the Token Manager. Outgoing token transfers will result in the local burning of received tokens."},
    { term: "Lock/Release", definition: "Incoming token transfers will result in the local releasing of locked tokens. Outgoing token transfers will result in the local locking of tokens on this blockchain by the Token Manager."},
    { term: "canonical", definition: "A canonical token is an interchain token built from an existing token that is available on multiple chains. The token deployed to other chains will be a Standardized token. There can only be one canonical token for every ERC-20."},
    { term: "distributor", definition: "A role for tokens that has permission to mint and burn."},
    { term: "operator", definition: "A role for a tokenManager who can set the flowLimit of this manager to limit the influx/outflux of token."},
    { term: "tokenID", definition: "The ID of the linking between tokens. You can obtain this either (1) Once for each pre-existing ERC20, as a canonical tokenId (getCanonicalTokenId(address)), or (2) As an address deployer with a bytes32 salt as a custom tokenId (getCustomTokenId(address, bytes32))"},
    { term: "Interchain Token", definition: "An ERC-20 contract created by the Interchain Token Service or by yourself that is capable of being transferred between block chains. If the contract implements the IInterchainToken interface, it will have knowledge of its own TokenManager and will contain transfer methods directly. If it does not implement this interface, you will need to call functions on the TokenManager to transfer the token."},
    { term: "Interchain Token Service", definition: "A contract deployed by Axelar that manages the creation and management of Interchain Tokens and Token Managers. The Interchain Token Service has an address of 0xF786e21509A9D50a9aFD033B5940A2b7D872C208 on all testnet chains, deployed from the v0.3.0 release."}
  ];

export default glossaryData;