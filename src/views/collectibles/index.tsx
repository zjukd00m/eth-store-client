export default function CollectiblesView() {
    return (
        <div className="">
            <p className="text-2xl"> Collectibles </p>
            <div className="bg-red-100 grid grid-cols-12 grid-rows-auto mt-10 gap-4">
                <div className="flex flex-col gap-5">
                    <a className="text-sm"> All </a>
                    <a className="text-sm"> Owned </a>
                    <a className="text-sm"> Deployed </a>
                    <a href="/collectibles/create" className="text-sm"> Create </a>
                </div>
                <div className="col-span-10">
                    <p> Collectibles goes here... </p>
                </div>
            </div>
        </div>
    )
}