import GlobalLayout from "@/app/layout";
import CollectiblesContextProvider from "@/context/CollectibleContext/CollectibleContext";
import CollectionContextProvider from "@/context/CollectionContext/CollectionContext";
import CollectiblesPageView from "@/views/collections/Collectibles";

export default function Collectibles() {
    return (
        <GlobalLayout>
            <CollectionContextProvider>
                <CollectiblesContextProvider>
                    <CollectiblesPageView />
                </CollectiblesContextProvider>
            </CollectionContextProvider>
        </GlobalLayout>
    )
}