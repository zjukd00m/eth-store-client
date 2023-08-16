import { useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { PlusSquareOutlined } from "@ant-design/icons";

type CollectibleType = "ERC721" | "ERC1155";
type BlockchainType = "Ethereum" | "Polygon";

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
            <div className="w-full mx-[60px]">
                <div className="">
                    <input 
                        type="file"
                        className="bg-red-100 h-[30rem] w-[30rem]"
                    />
                </div>
                <div className="border-[1px] border-[#4C566A] rounded-sm p-5">
                    <p className="text-[16px] mb-6 uppercase"> Mint Settings </p>
                    <div className="flex items-center justify-between">
                        <div className="">
                            <p className="text-md mb-2"> Name </p>
                            <input
                                className="text-sm p-1 rounded-md px-3 bg-input"
                            />
                        </div>
                        <div className="">
                            <p className="text-md mb-2"> Symbol </p>
                            <input
                                className="text-sm p-1 rounded-md px-3 bg-input"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="mt-6">
                            <p className="text-md mb-2"> Supply </p>
                            <input
                                type="number"
                                className="text-sm p-1 rounded-md px-3 bg-input"
                                min={1}
                            />
                        </div>
                        <div className="mt-6">
                            <p className="text-md mb-2"> Mint price (wei) </p>
                            <input
                                type="number"
                                className="text-sm p-1 rounded-md px-3 bg-input"
                                min={0}
                            />
                        </div>
                    </div>
                    <div className="mt-6">
                        <p className="text-md mb-2"> Mint date </p>
                        <input
                            type="date"
                            className="text-sm p-1 rounded-md px-3 bg-input"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="mt-6">
                            <p className="text-md mb-2"> Max collectibles per wallet </p>
                            <input
                                type="number"
                                className="text-sm p-1 rounded-md px-3 bg-input"
                                min={0}
                            />
                        </div>
                        <div className="mt-6">
                            <p className="text-md mb-2"> Hidden </p>
                            <input
                                type="checkbox"
                                className="text-sm p-1 rounded-md px-3 bg-input"
                            />
                            <input
                                type="file"
                                className="text-sm p1 rounded-md px-3"
                            />
                        </div>
                    </div>
                </div>
                {
                    premintEnabled ? (
                        <div className="">
                           <div className="">
                                <p className="text-md mb-2"> Pre-mint price </p>
                                <input
                                    type="number"
                                    className=""
                                    min={0}
                                />
                            </div>
                           <div className="">
                                <p className="text-md mb-2"> Pre-mint collectibles limit </p>
                                <input
                                    type="number"
                                    className=""
                                    min={0}
                                />
                            </div>
                           <div className="">
                                <p className="text-md mb-2"> Pre-mint max collectibles per wallet </p>
                                <input
                                    type="number"
                                    className="text-sm p-1 rounded-md px-3"
                                    min={0}
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="">
                                    <p className="text-md mb-2"> Pre-mint start date </p>
                                    <input
                                        type="date"
                                        className="text-sm p-1 rounded-md px-3"
                                    />
                                </div>
                                <div className="">
                                    <p className="text-md mb-2"> Pre-mint end date </p>
                                    <input
                                        type="date"
                                        className="text-sm p-1 rounded-md px-3"
                                    />
                                </div>
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
    const [premintEnabled, setPremintEnabled] = useState(true);
    const [blockchainType, setBlockchainType] = useState<BlockchainType>("Ethereum");
    const [stage, setStage] = useState(1);

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams()!;

    return (
        <div className="h-full grid grid-cols-1 grid-rows-8">
            <div className="row-span-1">
                <p className="text-2xl h-fit"> Collectibles </p>
                <div className="flex h-fit p-3 items-center justify-between text-sm my-6 font-[500] flex-wrap">
                    <p className="cursor-pointer" onClick={() => {
                        const params = new URLSearchParams();
                        params.set("contract-type", collectibleType);
                        router.push(pathname + "?" + params.toString());
                    }}> Contract Type </p>
                    <p className="cursor-pointer" onClick={() => {
                    const params = new URLSearchParams();
                    params.set("blockchain", "polygon");
                    router.push(pathname + "?" + searchParams.toString() + "&" + params.toString());
                    }}> Blockchain </p>
                    <p className="cursor-pointer" onClick={() => {
                        const params = new URLSearchParams();
                        params.set("collection", "true");
                    }}> Collection </p>
                    <p className="cursor-pointer" onClick={() => {
                        const params = new URLSearchParams();
                    }}> Collectible(s) </p>
                </div>
            </div>
            <div className="bg-slate-200 row-span-6 flex justify-center items-center overflow-y-auto">
                {
                    stage === 1 ? (
                        <div className="">
                            <p className="text-md text-center mb-4"> Contract Type </p>
                            <select 
                                onChange={(e) => setCollectibleType(e.target.value as CollectibleType)}
                                className="block apperance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:bg-whote focus:border-gray-500" 
                            >
                                <option className="text-gray-600 hover:bg-gray-100 hover:text-black p-1"> ERC721 </option>
                                <option className="text-gray-600 hover:bg-gray-100 hover:text-black p-1"> ERC1155 </option>
                            </select>
                        </div>
                    ) : stage === 2 ? (
                        <div className="">
                            <p className="text-md text-center mb-4"> Blockchain </p>
                            <select
                                onChange={(e) => setBlockchainType(e.target.value as BlockchainType)}
                                className="block apperance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:bg-whote focus:border-gray-500" 
                            >
                                <option className="text-gray-600 hover:bg-gray-100 hover:text-black p-1"> Ethereum </option>
                                <option className="text-gray-600 hover:bg-gray-100 hover:text-black p-1"> Polygon </option>
                            </select>
                        </div>
                    ) : stage === 3 ? (
                        <div className="">
                            <p className="text-md text-center mb-4"> Collection </p>
                            <div className="flex items-baseline jusfify-between gap-4">
                                <input
                                    type="text"
                                    className="block apperance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:bg-whote focus:border-gray-500" 
                                />
                                <PlusSquareOutlined className="text-2xl hover:opacity-70" />
                            </div>
                        </div>
                    ) : stage === 4 ? (
                        <div className="h-full">
                            <CreateERC721CollectibleView premintEnabled={premintEnabled} />
                        </div>
                    ) : null
                }
            </div>
            <div className="flex row-span-1 h-fit justify-between items-center">
                <button 
                    onClick={() => {
                        if (stage > 1) {
                            setStage((stage) => stage - 1);
                        }
                    }}
                    className="bg-gray-800 hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 text-white font-semibold py-2 px-6 rounded shadow-md transition duration-300 ease-in-out"
                >
                    Prev
                </button>
                <button 
                    onClick={() => {
                        if (stage < 5) {
                            setStage((stage) => stage + 1);
                        }
                    }}
                    className="bg-gray-800 hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 text-white font-semibold py-2 px-6 rounded shadow-md transition duration-300 ease-in-out"
                >
                    Next
                </button>
            </div>
        </div>
    )
}