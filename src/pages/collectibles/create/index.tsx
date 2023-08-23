import GlobalLayout from "@/app/layout";
import CollectiblesContextProvider from "@/context/CollectibleContext/CollectibleContext";
import CollectionContextProvider from "@/context/CollectionContext/CollectionContext";
import CreateCollectibleView from "@/views/collectibles/create";

export default function CreateCollectible() {
    return (
        <GlobalLayout>
            <CollectionContextProvider>
                <CollectiblesContextProvider>
                    <CreateCollectibleView />
                </CollectiblesContextProvider>
            </CollectionContextProvider>
        </GlobalLayout>
    )
}