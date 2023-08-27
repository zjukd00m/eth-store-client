import React, { useReducer, createContext } from "react";
import { initialCollectiblesContextState } from "./collectible.constants";
import collectiblesReducer from "@/reducers/collectibles/collectibles.reducer";
import { CollectibleState } from "@/types/collectibles.types";

interface ICollectibleContext {
    state: CollectibleState;
    dispatch: React.Dispatch<any>;
}

export const CollectiblesContext = createContext<ICollectibleContext>({
    state: initialCollectiblesContextState,
    dispatch: () => null, 
});

export default function CollectiblesContextProvider({
    children
}: {
    children: React.ReactNode;
}) {
    const [state, dispatch] = useReducer(collectiblesReducer, initialCollectiblesContextState);
        

    return (
        <CollectiblesContext.Provider value={{ state, dispatch }}>
            { children } 
        </CollectiblesContext.Provider>
    )
}