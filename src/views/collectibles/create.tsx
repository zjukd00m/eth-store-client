import { useState } from "react";
import { useForm } from "react-hook-form"
import * as yup from "yup";

type CollectibleType = "ERC721" | "ERC1155";

interface CreateCollectibleData {
    name: string;
    symbol: string;
    price: BigInt;
    type: CollectibleType;
}

export function CreateERC721CollectibleView({
    premintEnabled
}: {
    premintEnabled: boolean;
}) {

    return (
        <div className="flex gap-5">
            <div className="">
                <input 
                    type="file"
                    className="bg-red-100 h-[30rem] w-[30rem]"
                />
            </div>
            <div className="w-full mx-[60px]">
                <div className="flex justify-between">
                    <div className="mb-6">
                        <input
                            className=""
                            type="checkbox"
                        />
                        <label className="text-md"> Single collectible </label>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="">
                        <p className="text-md mb-2"> Name </p>
                        <input
                            className="text-sm p-1 rounded-md px-3"
                        />
                    </div>
                    <div className="">
                        <p className="text-md mb-2"> Symbol </p>
                        <input
                            className="text-sm p-1 rounded-md px-3"
                        />
                    </div>
                </div>
                <div className="mt-6">
                    <p className="text-md mb-2"> Public mint price (Wei) </p>
                    <input
                        type="number"
                        className="text-sm p-1 rounded-md px-3"
                        min={0}
                    />
                </div>
                <div className="mt-6">
                    <p className="text-md mb-2"> Public mint date </p>
                    <input
                        type="date"
                        className="text-sm p-1 rounded-md px-3"
                    />
                </div>
                {
                    premintEnabled ? (
                        <div className="">
                           <div className="">

                            </div>
                        </div>
                    ) : null
                }
            </div>
        </div>
    )
}

export default function CreateCollectibleView() {
    const [isCollection, setIsCollection] = useState(false);
    const [collectibleType, setCollectibleType] = useState<CollectibleType>("ERC721")
    const [collectibleName, setCollectibleName] = useState("");
    const [collectibleSymbol, setCollectibleSymbol] = useState("");
    const [premintEnabled, setPremintEnabled] = useState(false);

    return (
        <div className="">
            <p className=""> Create a collectible </p>
            <div className="">
                <select className="" onChange={(e) => setCollectibleType(e.target.value as CollectibleType)}>
                    <option className=""> ERC721 </option>
                    <option className=""> ERC1155 </option>
                </select>
            </div>

            <div className="mb-6">
                <input
                    className=""
                    type="checkbox"
                    onChange={(e) => setPremintEnabled(e.target.checked)}
                />
                <label className="text-md"> Enable pre-mint </label>
            </div>

            <div className="">
                <p className=""> de </p>
            </div>

            {
                collectibleType === "ERC721" ? <CreateERC721CollectibleView premintEnabled={premintEnabled} /> : null
            }

            <button className="bg-slate-500 text-white text-sm font-bold px-4 py-2 rounded-md">
                Deploy
            </button>
        </div>
    )
}