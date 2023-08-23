import Link from "next/link";

export default function CollectiblesView() {
    return (
        <div className="">
            <p className="text-2xl"> Collectibles </p>
            <div className="bg-red-100 grid grid-cols-12 grid-rows-auto mt-10 gap-4">
                <div className="flex flex-col gap-5">
                    <Link href="#" className="text-sm"> All </Link>
                    <Link href="#" className="text-sm"> Owned </Link>
                    <Link href="#" className="text-sm"> Deployed </Link>
                    <Link href="/collectibles/create" className="text-sm"> Create </Link>
                </div>
                <div className="col-span-10">
                    <p> Collectibles goes here... </p>
                </div>
            </div>
        </div>
    )
}