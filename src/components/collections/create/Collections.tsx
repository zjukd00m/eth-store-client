import { useState } from "react"
import { useForm } from "react-hook-form";

export default function CreateCollection() {
    const [enablePremint, setEnablePremint] = useState(false);
    const methods = useForm();

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
            {/* <div className="flex items-baseline jusfify-between gap-4">
                <input
                    type="text"
                    className="block apperance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:bg-whote focus:border-gray-500" 
                />
                <PlusSquareOutlined 
                    className="text-2xl hover:opacity-70" 
                    onClick={handleAddCollection}
                />
            </div> */}
            <form className="grid grid-cols-2 gap-12">
                <div className="col-span-1">
                    <div className="mt-3">
                        <p className="text-sm mb-1"> Name </p>
                        <input
                            defaultValue={"DoGGie"}
                            className="text-sm block apperance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 pr-8 rounded leading-tight focus:outline-none focus:bg-whote focus:border-gray-500" 
                        />
                    </div>
                    <div className="mt-3">
                        <p className="text-sm mb-1"> Symbol </p>
                        <input
                            className="text-sm block apperance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 pr-8 rounded leading-tight focus:outline-none focus:bg-whote focus:border-gray-500" 
                        />
                    </div>
                    <div className="mt-3">
                        <p className="text-sm mb-1"> Max Supply </p>
                        <input
                            type="number"
                            min={1}
                            defaultValue={1}
                            className="text-sm block apperance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 pr-8 rounded leading-tight focus:outline-none focus:bg-whote focus:border-gray-500" 
                        />
                    </div>
                    <div className="mt-3">
                        <p className="text-sm mb-1"> Mint Price <span className="text-[11px]"> (WEI) </span> </p>
                        <input
                            type="number"
                            min={1}
                            defaultValue={1}
                            className="text-sm block apperance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 pr-8 rounded leading-tight focus:outline-none focus:bg-whote focus:border-gray-500" 
                        />
                    </div>
                    <div className="mt-3">
                        <p className="text-sm mb-2"> Mint date </p>
                        <input
                            type="date"
                            className="text-sm w-full block apperance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 pr-8 rounded leading-tight focus:outline-none focus:bg-whote focus:border-gray-500" 
                        />
                    </div>
                    <div className="mt-3">
                        <p className="text-sm mb-2"> Max collectibles per wallet </p>
                        <input
                            type="number"
                            min={0}
                            defaultValue={0}
                            className="text-sm w-full block apperance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 pr-8 rounded leading-tight focus:outline-none focus:bg-whote focus:border-gray-500" 
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
                                            type="date"
                                            className="text-sm w-full block apperance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 pr-8 rounded leading-tight focus:outline-none focus:bg-whote focus:border-gray-500" 
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <p className="text-sm mb-2"> End date </p>
                                        <input
                                            type="date"
                                            className="text-sm w-full block apperance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 pr-8 rounded leading-tight focus:outline-none focus:bg-whote focus:border-gray-500" 
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <p className="text-sm mb-2"> Pre-Mint price <span className="text-[11px]"> (WEI) </span> </p>
                                        <input
                                            type="number"
                                            min={1}
                                            className="text-sm w-full block apperance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 pr-8 rounded leading-tight focus:outline-none focus:bg-whote focus:border-gray-500" 
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <p className="text-sm mb-2"> Pre-mint collectibles </p>
                                        <input
                                            type="number"
                                            min={1}
                                            defaultValue={1}
                                            className="text-sm w-full block apperance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 pr-8 rounded leading-tight focus:outline-none focus:bg-whote focus:border-gray-500" 
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <p className="text-sm mb-2"> Max pre-mint collectibles per wallet </p>
                                        <input
                                            type="number"
                                            min={0}
                                            defaultValue={1}
                                            className="text-sm w-full block apperance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 pr-8 rounded leading-tight focus:outline-none focus:bg-whote focus:border-gray-500" 
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