import { CollectionMetadata } from "@/services/api/collections.service";
import {
  SmartContractChain,
  SmartContractData,
  SmartContractType,
} from "./smart-contrat.types";

// Smart contract data that will be deployed (in the smart contract constructor)
export interface CollectibleERC extends SmartContractData {
  baseURI: string;
  maxSupply: number;
  preMintPrice?: string;
  preMintStartDate?: string;
  preMintEndDate?: string;
  maxPreMintCollectibles?: number;
  maxPreMintCollectiblesPerWallet?: number;
  publicMintPrice: string;
  publicMintStartDate: string;
  maxCollectiblesPerWallet?: number;
}

// data -> The data that will be used to deploy the smart contract
// contractType -> ERC721 or ERC1155 contract standard for the collection
// metadata -> optional object that is used at opensea to display the collection
// blockchain -> chain in which the contract will be deployed (ETHEREUM OR POLYGON)
export interface CollectibleERCState {
  data: CollectibleERC;
  contractType: SmartContractType;
  blockchain: SmartContractChain;
  metadata?: CollectionMetadata | null;
  errors?: Record<string, string>;
  isDeployed: boolean;
  isStored: boolean;
}
