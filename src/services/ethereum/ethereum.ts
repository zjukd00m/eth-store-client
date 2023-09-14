import { ethers } from "ethers";
import contract721Abi from "@/contracts/Collectible721/Collectible721.json";
import contract1155Abi from "@/contracts/Collectible1155/Collectible1155.json";
import contract721ByteCode from "@/contracts/Collectible721/Collectible721_ByteCode.json";
import contract1155ByteCode from "@/contracts/Collectible1155/Collectible1155_ByteCode.json";
import { SmartContractType } from "@/types/smart-contrat.types";
import { CollectibleERC } from "@/types/collections.types";
import { toUnixSeconds } from "@/utils/time";

export type PolygonNetwork = "mainnet" | "mumbai";
export type EthereumNetwork = "mainnet" | "goerli";
export type Web3ClientNetwork = PolygonNetwork | EthereumNetwork;
export interface Web3ClientParams {
  network: Web3ClientNetwork;
  abi: ethers.InterfaceAbi;
  byteCode: ethers.BytesLike;
}

class Web3Client {
  private readonly ethClient: ethers.BrowserProvider;
  private readonly contractAbi: ethers.InterfaceAbi;
  private readonly contractByteCode: ethers.BytesLike;

  constructor({ network, abi, byteCode }: Web3ClientParams) {
    // When no network is specified, then query it by using the eth_chainId
    this.ethClient = new ethers.BrowserProvider(window.ethereum);

    this.contractAbi = abi;
    this.contractByteCode = byteCode;
  }

  /**
   * Deploy the contract to the EVM
   */
  async deployContract(contractConstructorData: CollectibleERC) {
    const ContractFactory = new ethers.ContractFactory(this.contractAbi, {
      object: this.contractByteCode.toString(),
    });

    const contractConstructorParsedData = {
      _name: contractConstructorData.name,
      _symbol: contractConstructorData.symbol,
      _baseUri: contractConstructorData.baseURI,
      _collectiblePrices: [
        contractConstructorData.preMintPrice,
        contractConstructorData.publicMintPrice,
      ],
      _preMintDates: [
        ...(contractConstructorData.preMintStartDate?.length &&
        contractConstructorData.preMintStartDate !== "0"
          ? [toUnixSeconds(contractConstructorData.preMintStartDate)]
          : ["0"]),
        ...(contractConstructorData.preMintEndDate?.length &&
        contractConstructorData.preMintEndDate === "0"
          ? [toUnixSeconds(contractConstructorData.preMintEndDate)]
          : ["0"]),
      ],
      _maxMintCollectiblesPerWallet: [
        contractConstructorData.maxPreMintCollectiblesPerWallet,
        contractConstructorData.maxCollectiblesPerWallet,
      ],
      _maxPreMintCollectibles: contractConstructorData.maxPreMintCollectibles,
      _maxSupply: contractConstructorData.maxSupply,
      _publicMintStartDate: toUnixSeconds(
        contractConstructorData.publicMintStartDate
      ),
    };

    const signer = await this.ethClient.getSigner();

    return await ContractFactory.connect(signer).deploy(
      contractConstructorParsedData._name,
      contractConstructorParsedData._symbol,
      contractConstructorParsedData._baseUri,
      contractConstructorParsedData._collectiblePrices,
      contractConstructorParsedData._preMintDates,
      contractConstructorParsedData._maxMintCollectiblesPerWallet,
      contractConstructorParsedData._maxPreMintCollectibles,
      contractConstructorParsedData._maxSupply,
      contractConstructorParsedData._publicMintStartDate
    );
  }
}

export class EthClient extends Web3Client {
  constructor(web3ClientParams: Web3ClientParams) {
    super(web3ClientParams);
  }
}

export class PolygonClient extends Web3Client {
  constructor(web3ClientParams: Web3ClientParams) {
    super(web3ClientParams);
  }
}

export function getWeb3Client(
  clientChain: "ETHEREUM" | "POLYGON",
  clientNet: Web3ClientNetwork,
  contractType: SmartContractType
) {
  const web3Params = {
    network: clientNet,
    ...(contractType === "ERC721"
      ? {
          abi: JSON.stringify(contract721Abi),
          byteCode: contract721ByteCode.bytecode,
        }
      : {
          abi: JSON.stringify(contract1155Abi),
          byteCode: contract1155ByteCode.bytecode,
        }),
  };

  return new PolygonClient(web3Params);
}
