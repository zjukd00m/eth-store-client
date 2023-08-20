import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { ChangeEvent, useRef, useState } from "react";

export interface ICollectibleAttributeProps {
    removeCollectibleAttribute: () => any;
}

function CollectibleAttribute(props: ICollectibleAttributeProps) {
    const { removeCollectibleAttribute } = props;

    return (
        <div className="flex items-center gap-3">
            <div className="flex flex-col gap-2">
                <p className="text-sm"> Type </p>
                <input
                    className="text-sm w-full block apperance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 pr-8 rounded leading-tight focus:outline-none focus:bg-whote focus:border-gray-500" 
                />
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-sm"> Value </p>
                <input
                    className="text-sm w-full block apperance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 pr-8 rounded leading-tight focus:outline-none focus:bg-whote focus:border-gray-500" 
                />
            </div>
            <div className="self-center">
                <DeleteOutlined onClick={removeCollectibleAttribute} />
            </div>
        </div>
    )
}

export function CreateERC721Collectible() {

    const itemPictureRef = useRef<HTMLDivElement>(null);
    const uploadPictureRef = useRef<HTMLInputElement>(null);
    const [collectibleImage, setCollectibleImage] = useState("");
    const [numProperties, setNumProperties] = useState(0);
    const [numLevels, setNumLevels] = useState(0);
    const [numStats, setNumStats] = useState(0);
    const [attributes, setAttributes] = useState<any[]>([]);
    // const []

    function handleSetCollectiblePicture(e: ChangeEvent<HTMLInputElement>) {
        const file = e?.target?.files?.[0];

        if (!file) return;


        const reader = new FileReader()

        reader.onload = (e) => {
            const data = e?.target?.result;

            if (!data) return;

            console.log(data.toString())

            setCollectibleImage(data.toString());

            itemPictureRef.current?.setAttribute("background-picture", `url(${data}`);

            if (itemPictureRef.current) {
                itemPictureRef.current.style.backgroundSize = "cover";
                itemPictureRef.current.style.backgroundPosition = "cover";
                itemPictureRef.current.style.backgroundImage = `url(${data})`;
            }
        }

        reader.readAsDataURL(file);
    }

    const removeCollectibleAttribute = (id: number) => {
        console.log(id)
    }

    return (
        <div className="flex gap-5">
            <div className="w-full mx-[60px]">
                <div className="flex flex-col items-center justify-center my-6">
                    <input
                        type="file"
                        className=""
                        onChange={handleSetCollectiblePicture}
                        ref={uploadPictureRef}
                    />
                    <div className="relative h-[22rem] w-[22rem] bg-red-100 rounded-lg" ref={itemPictureRef}>
                    </div>
                </div>
                <div className="">
                    <div className="flex flex-col items-start justify-between">
                        <div className="mt-6 w-full">
                            <p className="text-sm mb-2 font-bold"> Name </p>
                            <input
                                type="text"
                                className="text-sm w-full block apperance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 pr-8 rounded leading-tight focus:outline-none focus:bg-whote focus:border-gray-500" 
                                maxLength={60}
                            />
                        </div>
                        <div className="mt-6 w-full">
                            <p className="text-sm mb-2 font-bold"> Description </p>
                            <textarea
                                className="text-sm w-full block apperance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 pr-8 rounded leading-tight focus:outline-none focus:bg-whote focus:border-gray-500 resize-none" 
                                maxLength={400}
                                rows={5}
                            ></textarea>
                        </div>
                        <div className="mt-6 w-full">
                            <p className="text-sm mb-2 font-bold"> External url </p>
                            <input
                                type="url"
                                className="text-sm w-full block apperance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 pr-8 rounded leading-tight focus:outline-none focus:bg-whote focus:border-gray-500 resize-none" 
                            />
                        </div>
                        <div className="mt-6 w-full">
                            <p className="text-sm mb-2 font-bold"> Animation url </p>
                            <input
                                type="url"
                                className="text-sm w-full block apperance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 pr-8 rounded leading-tight focus:outline-none focus:bg-whote focus:border-gray-500 resize-none" 
                            />
                        </div>
                        <div className="mt-6 w-full">
                            <p className="text-sm mb-2 font-bold"> Youtube url </p>
                            <input
                                type="url"
                                className="text-sm w-full block apperance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 pr-8 rounded leading-tight focus:outline-none focus:bg-whote focus:border-gray-500 resize-none" 
                            />
                        </div>
                        <div className="mt-6 w-full">
                            <p className="text-sm mb-2 font-bold"> Background color </p>
                            <input
                                type="color"
                                className="text-sm w-full block apperance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 pr-8 rounded leading-tight focus:outline-none focus:bg-whote focus:border-gray-500 resize-none" 
                            />
                        </div>
                        {/* Attributes */}
                        <div className="mt-6 w-full">
                            <div className="flex items-center justify-between gap-4">
                                <p className="text-md mb-2 font-bold"> Properties </p>
                            </div>
                            <div className="my-3 flex flex-col gap-2">
                                {
                                    [...Array(numProperties).fill(null)]?.map((_, key) => <CollectibleAttribute key={key} removeCollectibleAttribute={() => {
                                        
                                    }} />)
                                }
                            </div>
                            <div className="border-2 border-[#4C566A] w-fit h-fit p-1 rounded-md">
                                <PlusOutlined 
                                    className="text-sm p-1" 
                                    onClick={() => setNumProperties((numProperties) => numProperties + 1)}
                                />
                            </div>
                        </div>
                        <div className="mt-6 w-full">
                            <div className="flex items-center justify-between gap-4">
                                <p className="text-md mb-2 font-bold"> Levels </p>
                            </div>
                            <div className="my-3 flex flex-col gap-2">
                                {
                                    [...Array(numLevels).fill(null)]?.map((_, key) => <CollectibleAttribute key={key} removeCollectibleAttribute={() => {

                                    }} />)
                                }
                            </div>
                            <div className="border-2 border-[#4C566A] w-fit h-fit p-1 rounded-md">
                                <PlusOutlined className="text-sm p-1" onClick={() => setNumLevels((numLevels) => numLevels + 1)} />
                            </div>
                        </div>
                        <div className="mt-6 w-full">
                            <div className="flex items-center justify-between gap-4">
                                <p className="text-md mb-2 font-bold"> Stats </p>
                            </div>
                            <div className="my-3 flex flex-col gap-2">
                                {
                                    [...Array(numStats).fill(null)]?.map((_, key) => <CollectibleAttribute key={key} removeCollectibleAttribute={() => {

                                    }} />)
                                }
                            </div>
                            <div className="border-2 border-[#4C566A] w-fit h-fit p-1 rounded-md">
                                <PlusOutlined className="text-sm p-1" onClick={() => setNumStats((numStats) => numStats + 1)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
