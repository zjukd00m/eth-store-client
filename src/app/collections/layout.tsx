import { ReactNode } from "react"

// <div className="flex flex-col justify-center items-left bg-red-500">
export default function CollectionsLayout({
    children
}: {
    children: ReactNode;
}) {
    return (
        <div className="flex flex-col justify-between h-full">
            <div className="">
                <p className="text-2xl text-left"> Collections &gt; Create &gt; Collectibles </p>
                <div className="flex p-3 items-center justify-between text-sm my-6 font-[500] flex-wrap">
                    <p className="cursor-pointer"> Contract Type </p>
                    <p className="cursor-pointer"> Blockchain </p>
                    <p className="cursor-pointer"> Overview </p>
                    <p className="cursor-pointer"> Collectibles </p>
                </div>
            </div>
            <div className="w-full flex flex-col justify-center h-full">
               { children } 
            </div>
        </div>
    )
}