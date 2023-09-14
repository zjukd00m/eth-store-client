import { CollectibleERC, CollectibleERCState } from "@/types/collections.types";

export const initialCollectionContextData: CollectibleERC = {
  baseURI: "",
  name: "",
  symbol: "",
  maxSupply: 0,
  preMintPrice: "0",
  preMintStartDate: "0",
  preMintEndDate: "0",
  maxPreMintCollectibles: 0,
  maxPreMintCollectiblesPerWallet: 0,
  publicMintPrice: "0",
  publicMintStartDate: "0",
  maxCollectiblesPerWallet: 0,
};

export const initialCollectionContextState: CollectibleERCState = {
  data: initialCollectionContextData,
  contractType: "ERC721",
  metadata: null,
  blockchain: "ETHEREUM",
  errors: {},
  isDeployed: false,
  isStored: false,
};
