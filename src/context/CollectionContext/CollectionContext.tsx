import React, { createContext, useReducer } from "react";
import collectionsReducer from "@/reducers/collections/collections.reducer";
import { CollectibleERCState } from "@/types/collections.types";
import { initialCollectionContextState } from "./collection.contants";

interface ICollectionContext {
    state: CollectibleERCState;
    dispatch: React.Dispatch<any>;
}

export const CollectionContext = createContext<ICollectionContext>({
    state: initialCollectionContextState,
    dispatch: () => null,
});

export default function CollectionContextProvider({ children }: { children: React.ReactNode }) {
   const [state, dispatch] = useReducer(collectionsReducer, initialCollectionContextState);

   return (
    <CollectionContext.Provider value={{state, dispatch} as ICollectionContext}>
        { children } 
    </CollectionContext.Provider>
   ) 
}
