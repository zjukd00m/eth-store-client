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
import CollectionOverview from "@/components/collections/overview";

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
    const [stage, setStage] = useState(1);
    const [collections, setCollections] = useState<any[]>([]);

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams()!;

    const { state, dispatch } = useContext(CollectionContext);

    return (
        <div className="h-full w-full">
            <div className="h-full flex flex-col justify-between bg-[#ECEFF4]">
                <div className="flex justify-center items-center overflow-y-auto">
                    {
                        stage === 1 ? (
                            <div className="h-full">
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
                            <div className="h-full">
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
                            <div className="box-border h-full">
                                <CreateCollection />
                            </div>
                        ) : stage === 4 ? (
                            <div className="h-full">
                                <CollectionOverview />
                            </div>
                        ) : (
                            <div className="h-full">
                                <CreateERC721Collectible />
                            </div>
                        )
                    }
                </div>
                <div className="flex justify-between items-center pb-6">
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
        </div>
    )
}