import { ChangeEvent, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { PlusSquareOutlined } from "@ant-design/icons";
import { CreateERC721Collectible } from "@/components/collectibles/create/ERC721Collectible";
import CreateCollection from "@/components/collections/create/Collections";

type CollectibleType = "ERC721" | "ERC1155";
type BlockchainType = "Ethereum" | "Polygon";

interface CreateCollectibleData {
    name: string;
    symbol: string;
    price: BigInt;
    type: CollectibleType;
}


interface ICreateCollection {
    name: string;
    symbol: string;
    maxSupply: number;
}

export default function CreateCollectibleView() {
    const [isCollection, setIsCollection] = useState(false);
    const [collectibleType, setCollectibleType] = useState<CollectibleType>("ERC721")
    const [collectibleName, setCollectibleName] = useState("");
    const [collectibleSymbol, setCollectibleSymbol] = useState("");
    const [premintEnabled, setPremintEnabled] = useState(true);
    const [blockchainType, setBlockchainType] = useState<BlockchainType>("Ethereum");
    const [stage, setStage] = useState(1);
    const [collections, setCollections] = useState<any[]>([]);
    const [createCollection, setCreateCollection] = useState(false);
    const [newCollection, setNewCollection] = useState<ICreateCollection>({
        name: "",
        symbol: "",
        maxSupply: 1,
    });
    const [enablePremint, setEnablePremint] = useState(false);

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams()!;

    function handleAddCollection() {
        setCollections((collections) => [
            ...collections,
            {
                name: "",
                symbol: "",
            }
        ]);
        setCreateCollection(true);
    }

    return (
        <div className="h-full grid grid-cols-1 grid-rows-8">
            <div className="row-span-1">
                <p className="text-2xl h-fit"> Collections </p>
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
            <div className="bg-[#ECEFF4] row-span-6 flex justify-center items-center overflow-y-auto">
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
                        <div className="box-border">
                            <CreateCollection />
                        </div>
                    ) : stage === 4 ? (
                        <div className="h-full">
                            <CreateERC721Collectible />
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