import { ethers } from "ethers";

export class EthClient {
  private readonly ethClient: ethers.Provider;

  constructor() {
    this.ethClient = new ethers.AlchemyProvider(
      "goerli",
      process.env.ALCHEMY_API_KEY
    );
  }

  /**
   * Deploy the contract to the EVM
   * @param contractAbi: The smart contract ABI json object
   * @param contractByteCode
   * @returns
   */
  async deployContract(
    contractAbi: ethers.InterfaceAbi,
    contractByteCode: ethers.BytesLike
  ) {
    const ContractFactory = new ethers.ContractFactory(
      contractAbi,
      contractByteCode
    );

    const tx = await ContractFactory.deploy();

    return tx;
  }
}
