import React, { useState } from "react";
import ProfileProps from "./types";
import Image from "next/image";

export default function ProfileView(props: ProfileProps) {
  const { isConfimed, collectibles } = props;

  return (
    <div className="w-full">
      <p className="font-bold text-2xl"> zjukd00m </p>
      {/* Joined At */}
      {/* Published collectibles */}
      {/* Search in the user's collection (many collectibles with many items) */}
      <div className="mt-5 flex flex-col gap-1">
        <p className="text-sm"> Verified Seller </p>
        <p className="text-sm"> Member since: <span className="text-xs ml-3"> 8/9/2023 </span> </p>
      </div>
      <div className="mt-5">
        <p className="text-lg"> Collectibles (Owned NFTs) </p>
        {/* Fetch and display user collectibles */}
        <div className="mt-3 grid grid-cols-4 auto-rows-max gap-4">
          {
            collectibles?.length ? (
              collectibles.map((collectible) => (
                <div 
                  key={collectible.id}
                  className="flex flex-col items-flex-start border-[1px] border-[black] border-rounded rounded-md p-2 drop-shadow-md"
                >
                  <Image 
                    src={collectible.image} 
                    alt={collectible.name} 
                    className="rounded-lg" 
                    objectFit="contain" 
                    height={300} 
                    width={300} 
                  />
                  <div className="flex justify-between items-baseline mt-3">
                    <p className="text-sm truncate"> { collectible.name } </p>
                    { collectible.sold ? <p className="text-xs text-white font-bold p-1 rounded-md bg-[#2E3440]"> Mintable </p> : null }
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm"> No collectibles </p>
            )
          }
        </div>
      </div>
    </div>
  );
  
}
