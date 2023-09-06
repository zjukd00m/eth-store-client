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
            <p className="text-md text-center my-3 font-medium"> Smart Contract Details </p>
            <div className="flex justify-items-center justify-left space-x-4">
                <p className="text-sm font-medium text-[var(--text-cool-color)]"> Enable Pre-mint</p>
                <input
                    type="checkbox"
                    className=""
                    onChange={() => setEnablePremint(!enablePremint)}
                />
            </div>
            <form className="grid grid-cols-2 gap-12">
                <div className="col-span-1">
                    {/* --- */}
                    <div className="mt-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            id="name"
                            type="text"
                            className="
                                mt-1 
                                block 
                                w-full 
                                sm:text-sm 
                                border-gray-300 
                                border-[1px] 
                                rounded-md
                                px-2
                                py-2
                                outline-none
                            "
                            onChange={handleCollectionInputDataChange}
                            value={state?.data?.name}
                            placeholder="Enter Name"
                        />
                    </div>
                    {/* --- */}
                    <div className="mt-3">
                        <label htmlFor="symbol" className="block text-sm font-medium text-gray-700">Symbol</label>
                        <input
                            id="symbol"
                            className="
                                mt-1 
                                block 
                                w-full 
                                sm:text-sm 
                                border-gray-300 
                                border-[1px] 
                                rounded-md
                                px-2
                                py-2
                                outline-none
                            "
                            onChange={handleCollectionInputDataChange}
                            value={state?.data?.symbol}
                            placeholder="Enter Symbol"
                        />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="baseURI" className="block text-sm font-medium text-gray-700">Base Uri</label>
                        <input
                            id="baseURI"
                            className="
                                mt-1 
                                block 
                                w-full 
                                sm:text-sm 
                                border-gray-300 
                                border-[1px] 
                                rounded-md
                                px-2
                                py-2
                                outline-none
                            "
                            onChange={handleCollectionInputDataChange}
                            value={state?.data?.baseURI}
                            placeholder="Enter Base URI"
                        />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="maxSupply" className="block text-sm font-medium text-gray-700">Max Supply</label>
                        <input
                            id="maxSupply"
                            type="number"
                            min={1}
                            className="
                                mt-1 
                                block 
                                w-full 
                                sm:text-sm 
                                border-gray-300 
                                border-[1px] 
                                rounded-md
                                px-2
                                py-2
                                outline-none
                            "
                            onChange={handleCollectionInputDataChange}
                            value={state?.data?.maxSupply}
                        />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="publicMintPrice" className="block text-sm font-medium text-gray-700"> Mint Price <span className="text-[11px]"> (WEI) </span> </label>
                        <input
                            id="publicMintPrice"
                            type="number"
                            min={1}
                            className="
                                mt-1 
                                block 
                                w-full 
                                sm:text-sm 
                                border-gray-300 
                                border-[1px] 
                                rounded-md
                                px-2
                                py-2
                                outline-none
                            "
                            onChange={handleCollectionInputDataChange}
                            value={state?.data?.publicMintPrice}
                        />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="publicMintStartDate" className="block text-sm font-medium text-gray-700"> Mint Start Date </label>
                        <input
                            id="publicMintStartDate"
                            type="date"
                            className="
                                mt-1 
                                block 
                                w-full 
                                sm:text-sm 
                                border-gray-300 
                                border-[1px] 
                                rounded-md
                                px-2
                                py-2
                                outline-none
                            "
                            onChange={handleCollectionInputDataChange}
                            value={state?.data?.publicMintStartDate}
                        />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="maxCollectiblesPerWallet" className="block text-sm font-medium text-gray-700"> Max collectibles per wallet </label>
                        <input
                            id="maxCollectiblesPerWallet"
                            type="number"
                            min={0}
                            className="
                                mt-1 
                                block 
                                w-full 
                                sm:text-sm 
                                border-gray-300 
                                border-[1px] 
                                rounded-md
                                px-2
                                py-2
                                outline-none
                            "
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
                                        <label htmlFor="preMintStartDate" className="block text-sm font-medium text-gray-700"> Pre-mint Start Date </label>
                                        <input 
                                            id="preMintStartDate"
                                            type="date"
                                            className="
                                                mt-1 
                                                block 
                                                w-full 
                                                sm:text-sm 
                                                border-gray-300 
                                                border-[1px] 
                                                rounded-md
                                                px-2
                                                py-2
                                                outline-none
                                            "
                                            onChange={handleCollectionInputDataChange}
                                            value={state?.data?.preMintStartDate}
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="preMintEndDate" className="block text-sm font-medium text-gray-700"> Pre-mint End Date </label>
                                        <input
                                            id="preMintEndDate"
                                            type="date"
                                            className="
                                                mt-1 
                                                block 
                                                w-full 
                                                sm:text-sm 
                                                border-gray-300 
                                                border-[1px] 
                                                rounded-md
                                                px-2
                                                py-2
                                                outline-none
                                            "
                                            onChange={handleCollectionInputDataChange}
                                            value={state?.data?.preMintEndDate}
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="preMintPrice" className="block text-sm font-medium text-gray-700"> Pre-Mint Price <span className="text-[11px]"> (WEI) </span> </label>
                                        <input
                                            id="preMintPrice"
                                            type="number"
                                            min={1}
                                            className="
                                                mt-1 
                                                block 
                                                w-full 
                                                sm:text-sm 
                                                border-gray-300 
                                                border-[1px] 
                                                rounded-md
                                                px-2
                                                py-2
                                                outline-none
                                            "
                                            onChange={handleCollectionInputDataChange}
                                            value={state?.data?.preMintPrice}
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="maxPreMintCollectibles" className="block text-sm font-medium text-gray-700"> Pre-Mint Collectibles </label>
                                        <input
                                            id="maxPreMintCollectibles"
                                            type="number"
                                            min={1}
                                            onChange={handleCollectionInputDataChange}
                                            className="
                                                mt-1 
                                                block 
                                                w-full 
                                                sm:text-sm 
                                                border-gray-300 
                                                border-[1px] 
                                                rounded-md
                                                px-2
                                                py-2
                                                outline-none
                                            "
                                            value={state?.data?.maxPreMintCollectibles}
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="maxPreMintCollectiblesPerWallet" className="block text-sm font-medium text-gray-700"> Max pre-mint collectibles per wallet </label>
                                        <input
                                            id="maxPreMintCollectiblesPerWallet"
                                            type="number"
                                            min={0}
                                            className="
                                                mt-1 
                                                block 
                                                w-full 
                                                sm:text-sm 
                                                border-gray-300 
                                                border-[1px] 
                                                rounded-md
                                                px-2
                                                py-2
                                                outline-none
                                            "
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