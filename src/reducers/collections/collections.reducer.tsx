import { CollectibleERCState } from "@/types/collections.types";
import { SET_SMC_DATA, SET_SMC_TYPE, SET_SMC_METADATA, SET_SMC_CHAIN, RESET_SMC_STATE } from "../../actions/collections.actions";
import { initialCollectionContextState } from "@/context/CollectionContext/collection.contants";

export default function collectionsReducer(state: CollectibleERCState, action: any) {
    switch (action.type) {
        case SET_SMC_DATA:
            return {
                ...state,
                data: {
                    ...state.data,
                    ...action.payload.data,
                }
            };
        case SET_SMC_TYPE: {
            return {
                ...state,
                contractType: action.payload.contractType,
            }
        }
        case SET_SMC_METADATA: {
            return {
                ...state,
                metadata: {
                    ...state.metadata,
                    ...action.payload.metadata,
                }
            }
        }
        case SET_SMC_CHAIN: {
            return {
                ...state,
                blockchain: action.payload.blockchain,
            }
        }
        case RESET_SMC_STATE:
            return initialCollectionContextState;
        default:
            return state;
    }
}