import axios from "axios";
import { getHeaders } from "./constants";
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

const Axios = axios.create({
  baseURL: "http://localhost:8098/api",
  timeout: 5000,
  headers: {
    ...getHeaders(),
  },
});

Axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error: any) => {
    Promise.reject(error);
  }
);

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
