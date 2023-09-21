import { Axios } from ".";
import { SmartContractType } from "@/types/smart-contrat.types";
import { CollectibleERC } from "@/types/collections.types";

export interface CollectionMetadata {
  name: string;
  description: string;
  image: string;
  external_linl: string;
}

export interface CreateCollectionDTO {
  address?: string | null;

  collectionMetadata?: CollectionMetadata | null;

  //
  wallet: string;
  contractType: SmartContractType;

  //
  contractData: CollectibleERC;

  metadata?: CollectionMetadata | null;

  //
  isDeployed?: boolean;
}

export const storeCollection = async (data: CreateCollectionDTO) => {
  try {
    const res = await Axios.post("/collections", data);

    console.log("===");
    console.log(res.status);

    const resData = await res.data;

    return resData;
  } catch (error: any) {
    throw error;
  }
};
