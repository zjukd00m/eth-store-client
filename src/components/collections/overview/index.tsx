import { RESET_SMC_STATE } from "@/actions/collections.actions";
import { CollectionContext } from "@/context/CollectionContext/CollectionContext";
import { getWeb3Client } from "@/services/ethereum/ethereum";
import { useRouter } from "next/router";
import { useContext } from "react";

// ? > When no more items can be added to the collection:
// ? >  The user can edit the maxSupply argument
// ? >  The user can deploy the smart contract
// ? >  The user can review the collection by watching the specs of it

export default function CollectionOverview() {
    const router = useRouter();

    const { state: collectionState, dispatch } = useContext(CollectionContext);
    const { errors } = collectionState;


    function handleCancelCreateCollection() {
        dispatch({ type: RESET_SMC_STATE });
        router.push("/collections"); 
    }

    // Deploy to blockchain
    async function handleDeployCollectionNow() {
        if (errors && Object.keys(errors)?.length) {
            // ? > Display a toast indicating there's something missing
            return;
        }

        const web3Client = getWeb3Client(
            collectionState.blockchain, 
            "mumbai", 
            collectionState.contractType,
        );

        const tx = await web3Client.deployContract(collectionState.data);

        console.log("This is the transaction");
        console.log(tx);
    }
    
    // Store the collection's data at a db with an api call
    async function handleDeployCollectionLater() {
        if (errors && Object.keys(errors)?.length) {
            // ? > Display a toaster indicating there's something missing
            return;
        }
    }

    return (
        <div className="w-full h-[100%] bg-green-100">
            <p className="text-2xl"> { collectionState?.data.name } </p>
            <p className="text-sm my-3"> Up to this point you can perform any of the following actions </p>
            <div className="mt-5">
                {/* ==> COLLECTION OPTIONS <== */}
                <div className="grid grid-cols-2 grid-rows-auto gap-5 bg-red-200">
                        <div className="bg-white shadow-xs rounded-md p-6 h-[100%] flex flex-col items-start justify-between">
                        <div className="mb-4">
                            <h2 className="my-1 text-md font-semibold"> Add collectibles to your collection </h2>
                            <p className="text-sm text-gray-600"> Be it manually or in a near automated way by minting them </p>
                            <div className="my-2">
                                <p className="text-sm"> Items: <span className="ml-5 text-sm"> 0/1000 </span> </p>
                            </div>
                        </div>
                        <div>
                            <button 
                                className="text-sm font-bold bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                                onClick={() => {
                                    router.push(`${router.pathname}/collectibles`);
                                }}
                            >
                                Add collectibles
                            </button>
                        </div>
                    </div>
                    {
                        (!collectionState?.isStored && !collectionState?.isDeployed) ||
                        (collectionState?.isStored && !collectionState?.isDeployed) ? (
                        <div className="bg-white shadow-xs rounded-md p-6 h-[15rem] flex flex-col items-start justify-between">
                            <div className="mb-4">
                                <h2 className="text-md font-semibold">Add collectibles later</h2>
                                <p className="text-sm text-gray-600">You can come any time you want, add collectibles and edit your contract data before deploying it to a blockchain.</p>
                            </div>
                            <div>
                                <button 
                                    className="text-sm font-bold bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                                    onClick={() => null}                                    
                                >
                                    { collectionState?.isStored && !collectionState?.isDeployed ? "Edit" : "Store" }
                                </button>
                            </div>
                        </div>
                        ) : null
                    }
                </div>
                <button
                    className={`
                        text-sm 
                        bg-red-500
                        rounded-md
                        px-3
                        py-[0.5rem]
                        text-white
                        font-bold
                    `}
                    onClick={handleCancelCreateCollection}
                >
                    Cancel
                </button>
            </div>
        </div>
    )
}