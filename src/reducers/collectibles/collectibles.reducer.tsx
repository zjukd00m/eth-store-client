import { SET_COLLECTIBLE, UPDATE_COLLECTIBLE, RESET_COLLECTIBLE } from "@/actions/collectible.actions";
import { initialCollectiblesContextState } from "@/context/CollectibleContext/collectible.constants";
import { CollectibleState } from "@/types/collectibles.types";

export default function collectiblesReducer(state: CollectibleState, action: any) {
    switch (action.type) {
        case SET_COLLECTIBLE:
            return {
                ...state,
                data: {
                    ...state.data,
                    ...action.payload,
                }
            };
        case UPDATE_COLLECTIBLE:
            return {
                ...state,
                data: {
                    ...state.data,
                    ...action.payload,
                }
            };
        case RESET_COLLECTIBLE:
            return {
                data: initialCollectiblesContextState
            }
        default:
            return state;
    }
}