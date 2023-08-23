import { ChangeEvent, useContext, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { PlusSquareOutlined } from "@ant-design/icons";
import { CreateERC721Collectible } from "@/components/collectibles/create/ERC721Collectible";
import CreateCollection from "@/components/collections/create/Collections";
import { CollectionContext } from "@/context/CollectionContext/CollectionContext";
import { CollectiblesContext } from "@/context/CollectibleContext/CollectibleContext";
import { SET_SMC_CHAIN, SET_SMC_DATA, SET_SMC_TYPE } from "@/actions/collections.actions";
import { SmartContractChain } from "@/types/smart-contrat.types";

type CollectionType = "ERC721" | "ERC1155";

interface CreateCollectionData {
    name: string;
    symbol: string;
    price: BigInt;
    type: CollectionType;
}


interface ICreateCollection {
    name: string;
    symbol: string;
    maxSupply: number;
}

export default function CreateCollectibleView() {
    const [premintEnabled, setPremintEnabled] = useState(true);
    const [stage, setStage] = useState(1);
    const [collections, setCollections] = useState<any[]>([]);
    const [createCollection, setCreateCollection] = useState(false);
    const [newCollection, setNewCollection] = useState<ICreateCollection>({
        name: "",
        symbol: "",
        maxSupply: 1,
    });

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams()!;

    const { state, dispatch } = useContext(CollectionContext);
    const { state: collectiblesState, dispatch: collectiblesDispatch } = useContext(CollectiblesContext);

    console.log(state)

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
                        params.set("contract-type", state?.contractType);
                        router.push(pathname + "?" + params.toString());
                    }}> Contract Type </p>
                    <p className="cursor-pointer" onClick={() => {
                    const params = new URLSearchParams();
                    params.set("blockchain", state?.blockchain);
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
                                onChange={(e) => {
                                    const contractType = e.target.value as CollectionType;
                                    dispatch({
                                        type: SET_SMC_TYPE,
                                        payload: {
                                            contractType,
                                        }
                                    })
                                }}
                                className="block apperance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:bg-whote focus:border-gray-500" 
                                value={state?.contractType}
                            >
                                <option className="text-gray-600 hover:bg-gray-100 hover:text-black p-1"> ERC721 </option>
                                <option className="text-gray-600 hover:bg-gray-100 hover:text-black p-1"> ERC1155 </option>
                            </select>
                        </div>
                    ) : stage === 2 ? (
                        <div className="">
                            <p className="text-md text-center mb-4"> Blockchain </p>
                            <select
                                onChange={(e) => {
                                    const blockchain = e.target.value as SmartContractChain;
                                    dispatch({
                                        type: SET_SMC_CHAIN,
                                        payload: {
                                            blockchain,
                                        }
                                    })

                                }}
                                className="block apperance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:bg-whote focus:border-gray-500" 
                                value={state?.blockchain}
                            >
                                <option className="text-gray-600 hover:bg-gray-100 hover:text-black p-1"> ETHEREUM </option>
                                <option className="text-gray-600 hover:bg-gray-100 hover:text-black p-1"> POLYGON </option>
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