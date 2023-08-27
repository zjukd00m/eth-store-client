import CollectionsLayout from "@/app/collections/layout";
import GlobalLayout from "@/app/layout";
import CollectiblesContextProvider from "@/context/CollectibleContext/CollectibleContext";
import CollectionContextProvider from "@/context/CollectionContext/CollectionContext";
import CollectiblesPlaygroundView from "@/views/collections/playground";

export default function CollectiblesPlayground() {
    return (
        <GlobalLayout>
            <CollectionContextProvider>
                <CollectiblesContextProvider>
                    <CollectionsLayout>
                        <CollectiblesPlaygroundView />
                    </CollectionsLayout>
                </CollectiblesContextProvider>
            </CollectionContextProvider>
        </GlobalLayout>
    )
}