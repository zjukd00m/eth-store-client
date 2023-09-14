import { CreateERC721Collectible } from "@/components/collectibles/create/ERC721Collectible";
import { CollectionContext } from "@/context/CollectionContext/CollectionContext";
import { useContext } from "react";

export default function CollectiblesPlaygroundView() {
    const { state: { data } } = useContext(CollectionContext);

    return (
        <div className="">
            <div className="flex flex-col gap-1">
                <p className="text-xs"> Collection Name: <span className="text-black"> { data?.name } </span> </p>
                <p className="text-xs"> Collection Symbol: <span className="text-black"> { data?.symbol } </span> </p>
                <p className="text-xs"> Collectibles: <span className="text-black"> { data?.maxSupply } </span> </p>
                <div className="">
                    <p className="text-xs">  </p>
                    <p className="text-xs">  </p>
                    <p className="text-xs">  </p>
                </div>
            </div>
            <CreateERC721Collectible />
        </div>
    )
}