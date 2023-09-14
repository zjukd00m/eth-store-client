import CollectionsLayout from "@/app/collections/layout";
import { useRouter } from "next/router";
import { useState } from "react";

interface InstantiateCollectibleViewProps {
    fromCollection?: boolean;
}

export default function InstantiateCollectibleView(props: InstantiateCollectibleViewProps) {
    const { fromCollection } = props;

    const router = useRouter()

    const [option, setOption] = useState<number | null>(null);

    async function handleDownloadTemplateFile() {
        const res = await fetch("/files/CollectiblesTemplate.ods");
        const data = await res.blob();

        const blob = new Blob([data], { type: "application/vnd.ms-excel" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        
        link.href = url;
        link.download = "CollectiblesTemplate.ods";

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }

    return (
        <div className="">
            <p className="text-sm"> You can add collectibles to your collection in the following ways: </p>
            <div className="flex flex-row gap-5 my-5 justify-between items-center">
                <div className="">
                    <p className="text-lg mb-3 font-bold"> Manual upload </p>
                    <div className="text-sm">
                        <p className="text-sm"> Fill a form where you specify your item&apos;s metadata </p>
                        <p className="text-sm"> One by one or batch upload </p>
                        <p className="text-sm"> Useful for small collections </p>
                    </div>
                    <div className="my-6">
                        <button
                            className="bg-gray-800 hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 text-white font-semibold py-2 px-6 rounded shadow-md transition duration-300 ease-in-out"
                            onClick={() => router.push(`${router.pathname}/playground`)}
                        >
                            Start
                        </button>
                    </div>
                </div>
                <div className="">
                    <p className="text-lg mb-3 font-bold"> Using a formatted file </p>
                    <div className="">
                        <p className="text-sm"> Download our easy to use template xlsx file </p>
                        <p className="text-sm"> Upload your collection in one shot </p>
                        <p className="text-sm"> Usefull for big collections </p>
                    </div>
                    <div className="my-6">
                        <button
                            className="bg-gray-800 hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 text-white font-semibold py-2 px-6 rounded shadow-md transition duration-300 ease-in-out"
                            onClick={handleDownloadTemplateFile}
                        >
                            Download
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}