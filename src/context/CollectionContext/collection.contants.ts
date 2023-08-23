import {
  CollectibleERC721,
  CollectibleERC721State,
} from "@/types/collections.types";

export const initialCollectionContextData: CollectibleERC721 = {
  baseURI: "",
  name: "",
  symbol: "",
  maxSupply: 0,
  preMintPrice: "",
  preMintStartDate: "",
  preMintEndDate: "",
  maxPreMintCollectibles: 0,
  maxPreMintCollectiblesPerWallet: 0,
  publicMintPrice: "",
  publicMintStartDate: "",
  maxCollectiblesPerWallet: 0,
};

export const initialCollectionContextState: CollectibleERC721State = {
  data: initialCollectionContextData,
  contractType: "ERC721",
  metadata: null,
  blockchain: "ETHEREUM",
};
