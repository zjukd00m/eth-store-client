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
  contractType: SmartContractType;
  collectionMetadata?: CollectionMetadata | null;
  contractData?: CollectibleERC;
  metadata?: CollectionMetadata | null;
}

export const storeCollection = async (
  data: CreateCollectionDTO,
  token: string
) => {
  try {
    const res = await Axios.post("/collections", JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("===");
    console.log(res.status);

    const resData = await res.data;

    return resData;
  } catch (error: any) {
    throw error;
  }
};

export const getCollections = async (token: string) => {
  try {
    const res = await Axios.get("/collections", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("===");
    console.log(res.status);

    const resData = await res.data;

    return resData;
  } catch (error: any) {
    throw error;
  }
};
