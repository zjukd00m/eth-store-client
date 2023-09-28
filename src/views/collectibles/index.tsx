import Link from "next/link";
import { useEffect, useId, useState } from "react";
import useStorageHook from "@/hooks/StorageHoook";
import { getCollections } from "@/services/api/collections.service";
import "./styles.css"
import { ethers } from "ethers";
import { PlusSquareOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

export default function CollectiblesView() {
    const [collections, setCollections] = useState([]);
    const storage = useStorageHook();
    const router = useRouter()

    useEffect(() => {
        if (typeof window === undefined) return;

        async function fetchData() {
            const token = storage.get("token")

            if (!token) return;

            const collectionList = await getCollections(token.token)

            setCollections(collectionList.collections);
        }
        
        fetchData();
    }, []);

    return (
        <div className="">
            <p className="text-2xl"> Collections </p>
            <div className="grid grid-cols-12 grid-rows-auto mt-10 gap-4">
                <div className="col-span-10">
                    <div className="grid grid-rows-auto grid-cols-3 gap-3 text-slate-100">
                        {
                            collections?.map((collection: any) => (
                                <div className="
                                        bg-gray-100 
                                        rounded-lg
                                        p-6
                                        shadow-lg
                                        bg-[url('https://i.seadn.io/s/raw/files/cf2c898fe03efc597351c143c4d9a51c.png?auto=format&dpr=1&w=1920')]
                                        bg-cover
                                        bg-no-repeat
                                        bg-center
                                        bg-origin-padding
                                        w-full
                                    " 
                                    key={collection.id}
                                >
                                    <div className="collection__card">
                                        <p className="text-md font-semibold text-gray-100">
                                            {collection.contractData.name} 
                                            <span className="text-xs text-gray-200"> { `(${collection.contractData.symbol})` } </span>
                                        </p>
                                        <p className="text-md">
                                            {collection.contractData.maxSupply} collectibles 
                                        </p>
                                        <p className="text-md">
                                            {ethers.formatEther(collection.contractData.publicMintPrice)} <span className="text-xs"> ETH </span>
                                        </p>
                                        <p className="text-xs text-slate-100"> {collection.contractType}</p>
                                        {
                                            collection.address?.length ? (
                                                <a className="text-sm text-gray-600"> {collection.address} </a>
                                            ) : (
                                                <p className="text-xs"> Not deployed </p>
                                            )
                                        }
                                        {/* <p className="text-lg text-gray-600">Deployer Wallet: {collection.deployer.wallet}</p> */}
                                        {/* Add more data fields as needed */}
                                    </div>
                                </div>
                            ))
                        }
                            <div className="
                                bg-gray-200 
                                border 
                                border-gray-300
                                p-6
                                rounded-lg
                                text-center
                                cursor-pointer
                                hover:bg-gray-300
                                transition
                                duration-300
                                ease-in-out
                                flex
                                justify-center
                                items-center
                                "
                                onClick={() => router.replace("/collections/create")}
                            >
                                <PlusSquareOutlined className="text-black text-2xl"/>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}