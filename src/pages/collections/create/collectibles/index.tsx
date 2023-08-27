import CollectionsLayout from "@/app/collections/layout";
import GlobalLayout from "@/app/layout";
import CollectiblesContextProvider from "@/context/CollectibleContext/CollectibleContext";
import CollectionContextProvider from "@/context/CollectionContext/CollectionContext";
import InstantiateCollectibleView from "@/views/collections/create";

export default function CollectionItems () {

    return (
        <GlobalLayout>
            <CollectionContextProvider>
                <CollectiblesContextProvider>
                    <CollectionsLayout>
                        <InstantiateCollectibleView />
                    </CollectionsLayout>
                </CollectiblesContextProvider>
            </CollectionContextProvider>
        </GlobalLayout>
    )
}