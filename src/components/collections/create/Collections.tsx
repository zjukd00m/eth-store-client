import React, { useContext, useState } from "react"
import { SET_SMC_DATA } from "@/actions/collections.actions";
import { CollectionContext } from "@/context/CollectionContext/CollectionContext";

export default function CreateCollection() {
    const [enablePremint, setEnablePremint] = useState(false);
    
    const { state, dispatch } = useContext(CollectionContext);

    const handleCollectionInputDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const id = e.target.id;

        const data = {
            ...(id === "baseURI" && { baseURI: value }),
            ...(id === "maxSupply" && { maxSupply: parseFloat(value) }),
            ...(id === "symbol" && { symbol: value }),
            ...(id === "name" && { name: value }),
            ...(id === "publicMintPrice" && { publicMintPrice: value }), 
            ...(id === "publicMintStartDate" && { publicMintStartDate: value }), 
            ...(id === "maxCollectiblesPerWallet" && { maxCollectiblesPerWallet: parseFloat(value) }), 
            ...(id === "preMintPrice" && { preMintPrice: value }), 
            ...(id === "preMintStartDate" && { preMintStartDate: value }), 
            ...(id === "preMintEndDate" && { preMintEndDate: value }), 
            ...(id === "maxPreMintCollectibles" && { maxPreMintCollectibles: parseFloat(value) }), 
            ...(id === "maxPreMintCollectiblesPerWallet" && { maxPreMintCollectiblesPerWallet: parseFloat(value) }), 
        }

        dispatch({
            type: SET_SMC_DATA,
            payload: {
                data,
            }
        });
    }
        
    return (
        <div className="">
            <p className="text-md text-center my-3"> Smart Contract Details </p>
            <div className="flex items-center justify-start gap-6">
                <p className="text-sm"> Enable Pre-mint</p>
                <input
                    type="checkbox"
                    className=""
                    onChange={() => setEnablePremint(!enablePremint)}
                />
            </div>
            <form className="grid grid-cols-2 gap-12">
                <div className="col-span-1">
                    <div className="mt-3">
                        <p className="text-sm mb-1"> Name </p>
                        <input
                            id="name"
                            className="text-sm block apperance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 pr-8 rounded leading-tight focus:outline-none focus:bg-whote focus:border-gray-500" 
                            onChange={handleCollectionInputDataChange}
                            value={state?.data?.name}
                        />
                    </div>
                    <div className="mt-3">
                        <p className="text-sm mb-1"> Symbol </p>
                        <input
                            id="symbol"
                            className="text-sm block apperance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 pr-8 rounded leading-tight focus:outline-none focus:bg-whote focus:border-gray-500" 
                            onChange={handleCollectionInputDataChange}
                            value={state?.data?.symbol}
                        />
                    </div>
                    <div className="mt-3">
                        <p className="text-sm mb-1"> Base Uri </p>
                        <input
                            id="baseURI"
                            className="text-sm block apperance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 pr-8 rounded leading-tight focus:outline-none focus:bg-whote focus:border-gray-500" 
                            onChange={handleCollectionInputDataChange}
                            value={state?.data?.baseURI}
                        />
                    </div>
                    <div className="mt-3">
                        <p className="text-sm mb-1"> Max Supply </p>
                        <input
                            id="maxSupply"
                            type="number"
                            min={1}
                            className="text-sm block apperance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 pr-8 rounded leading-tight focus:outline-none focus:bg-whote focus:border-gray-500" 
                            onChange={handleCollectionInputDataChange}
                            value={state?.data?.maxSupply}
                        />
                    </div>
                    <div className="mt-3">
                        <p className="text-sm mb-1"> Mint Price <span className="text-[11px]"> (WEI) </span> </p>
                        <input
                            id="publicMintPrice"
                            type="number"
                            min={1}
                            className="text-sm block apperance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 pr-8 rounded leading-tight focus:outline-none focus:bg-whote focus:border-gray-500" 
                            onChange={handleCollectionInputDataChange}
                            value={state?.data?.publicMintPrice}
                        />
                    </div>
                    <div className="mt-3">
                        <p className="text-sm mb-2"> Mint date </p>
                        <input
                            id="publicMintStartDate"
                            type="date"
                            className="text-sm w-full block apperance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 pr-8 rounded leading-tight focus:outline-none focus:bg-whote focus:border-gray-500" 
                            onChange={handleCollectionInputDataChange}
                            value={state?.data?.publicMintStartDate}
                        />
                    </div>
                    <div className="mt-3">
                        <p className="text-sm mb-2"> Max collectibles per wallet </p>
                        <input
                            id="maxCollectiblesPerWallet"
                            type="number"
                            min={0}
                            className="text-sm w-full block apperance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 pr-8 rounded leading-tight focus:outline-none focus:bg-whote focus:border-gray-500" 
                            onChange={handleCollectionInputDataChange}
                            value={state?.data?.maxCollectiblesPerWallet}
                        />
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="mt-3">
                        {
                            enablePremint ? (
                                <div className="">
                                    <div className="mt-3">
                                        <p className="text-sm mb-2"> Start date </p>
                                        <input 
                                            id="preMintStartDate"
                                            type="date"
                                            className="text-sm w-full block apperance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 pr-8 rounded leading-tight focus:outline-none focus:bg-whote focus:border-gray-500" 
                                            onChange={handleCollectionInputDataChange}
                                            value={state?.data?.preMintStartDate}
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <p className="text-sm mb-2"> End date </p>
                                        <input
                                            id="preMintEndDate"
                                            type="date"
                                            className="text-sm w-full block apperance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 pr-8 rounded leading-tight focus:outline-none focus:bg-whote focus:border-gray-500" 
                                            onChange={handleCollectionInputDataChange}
                                            value={state?.data?.preMintEndDate}
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <p className="text-sm mb-2"> Pre-Mint price <span className="text-[11px]"> (WEI) </span> </p>
                                        <input
                                            id="preMintPrice"
                                            type="number"
                                            min={1}
                                            className="text-sm w-full block apperance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 pr-8 rounded leading-tight focus:outline-none focus:bg-whote focus:border-gray-500" 
                                            onChange={handleCollectionInputDataChange}
                                            value={state?.data?.preMintPrice}
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <p className="text-sm mb-2"> Pre-mint collectibles </p>
                                        <input
                                            id="maxPreMintCollectibles"
                                            type="number"
                                            min={1}
                                            className="text-sm w-full block apperance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 pr-8 rounded leading-tight focus:outline-none focus:bg-whote focus:border-gray-500" 
                                            onChange={handleCollectionInputDataChange}
                                            value={state?.data?.maxPreMintCollectibles}
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <p className="text-sm mb-2"> Max pre-mint collectibles per wallet </p>
                                        <input
                                            id="maxPreMintCollectiblesPerWallet"
                                            type="number"
                                            min={0}
                                            className="text-sm w-full block apperance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 pr-8 rounded leading-tight focus:outline-none focus:bg-whote focus:border-gray-500" 
                                            onChange={handleCollectionInputDataChange}
                                            value={state?.data?.maxPreMintCollectiblesPerWallet}
                                        />
                                    </div>
                                </div>
                            ) : null
                        }
                    </div>
                </div>
            </form>
        </div>
    )
}