import { SET_COLLECTIBLE_METADATA, RESET_COLLECTIBLE, SET_COLLECTIBLE_DATA } from "@/actions/collectible.actions";
import { initialCollectiblesContextState } from "@/context/CollectibleContext/collectible.constants";
import { CollectibleState } from "@/types/collectibles.types";

export default function collectiblesReducer(state: CollectibleState, action: any): CollectibleState {
    switch (action.type) {
        case SET_COLLECTIBLE_DATA: {
            const { payload } = action;
            // if (payload.traitType === "") {}
            // else if (...) {...}
            //
            return state;
        }
        case SET_COLLECTIBLE_METADATA:
            return {
                ...state,
                data: {
                    ...state.data,
                    ...action.payload,
                }
            };
        case RESET_COLLECTIBLE:
            return initialCollectiblesContextState
        default:
            return state;
    }
}