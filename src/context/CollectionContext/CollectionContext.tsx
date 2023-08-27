import React, { createContext, useReducer, useState } from "react";
import collectionsReducer from "@/reducers/collections/collections.reducer";
import { CollectibleERCState } from "@/types/collections.types";
import { initialCollectionContextState } from "./collection.contants";

interface ICollectionContext {
    state: CollectibleERCState;
    dispatch: React.Dispatch<any>;
    collectionItems: string[];
}

export const CollectionContext = createContext<ICollectionContext>({
    state: initialCollectionContextState,
    dispatch: () => null,
    collectionItems: [],
});

export default function CollectionContextProvider({ children }: { children: React.ReactNode }) {
   const [state, dispatch] = useReducer(collectionsReducer, initialCollectionContextState);
   const [collectionItems, setCollectionItems] = useState<string[]>([]);

   const setItemListCollection = (items: string[]) => setCollectionItems(items);
   const addItemToCollection = (item: string) => setCollectionItems((prevItems) => [...prevItems, item]);
   const removeItemFromCollection = (item: string) => setCollectionItems((prevItems) => prevItems?.filter((prevItem) => prevItem === item));
   const clearItemsFromCollection = () => setCollectionItems([]);

   return (
    <CollectionContext.Provider value={{
        state, 
        dispatch, 
        collectionItems,
        setItemListCollection,
        addItemToCollection,
        removeItemFromCollection,
        clearItemsFromCollection,
        
    } as ICollectionContext}>
        { children } 
    </CollectionContext.Provider>
   ) 
}
