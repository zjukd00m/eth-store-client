import { ReactNode } from "react"

export default function CollectionsLayout({
    children
}: {
    children: ReactNode;
}) {
    return (
        <div className="h-full flex flex-col justify-between">
            <div className="">
                <p className="text-2xl h-fit"> Collections &gt; Create &gt; Collectibles </p>
                <div className="flex h-fit p-3 items-center justify-between text-sm my-6 font-[500] flex-wrap">
                    <p className="cursor-pointer"> Contract Type </p>
                    <p className="cursor-pointer"> Blockchain </p>
                    <p className="cursor-pointer"> Overview </p>
                    <p className="cursor-pointer"> Collectibles </p>
                </div>
            </div>
            <div className="h-full w-full">
               { children } 
            </div>
        </div>
    )
}