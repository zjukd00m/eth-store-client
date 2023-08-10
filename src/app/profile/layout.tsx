import Image from "next/image";
import { ProfileLayoutProps } from "./interface";

// const mockUpBGImage =
  // "https://i.seadn.io/gae/YPGHP7VAvzy-MCVU67CV85gSW_Di6LWbp-22LGEb3H6Yz9v4wOdAaAhiswnwwL5trMn8tZiJhgbdGuBN9wvpH10d_oGVjVIGM-zW5A?auto=format&dpr=1&w=1920";
const mockUpBGImage = "https://i.seadn.io/gae/qf12G_uf9jEICDedfN_Z9jlqc1Sn5uURfh_c_aglLMbCYtUJb_pWDsIWyuZ-cuO3XDrgaiRz_kwnLqEoui6jX8rhOsL_meUgk0HSFQ?auto=format&dpr=1&w=1920";
const mockUpProfileImage =
  "https://i.seadn.io/gae/Nnp8Pdo6EidK7eBduGnAn_JBvFsYGhNGMJ_fHJ_mzGMN_2Khu5snL5zmiUMcSsIqtANh19KqxXDs0iNq_aYbKC5smO3hiCSw9PlL?auto=format&dpr=1&w=256";

export default function ProfileLayout(props: ProfileLayoutProps) {
  const { children } = props;

  return (
    <div
      className="grid grid-cols-1 grid-rows-2 w-full h-full"
    >
      {/* 
        Top Level Section: 
        1. Profile background image
        2. Profile:
          - image
          - wallet address (truncated)
      */}
      <div
        className="relative bg-center bg-no-repeat border-slate-600 border-2 rounded-md box-border"
        style={{
          backgroundImage: `url(${mockUpBGImage})`,
        }}
      >
        <div className="absolute flex flex-row items-center justify-between mx-3 bottom-[-3.7rem] inset-x-0">
          <Image
            className="rounded-md border-slate-600 border-2"
            src={mockUpProfileImage}
            alt="Profile image"
            width={120}
            height={120}
          />
          <div
            className="w-[20%] max-w-[500px] px-[0.5rem] py-[1rem] rounded-md bg-[#f1fa8c] border-2 border-slate-600"
          >
            <p className="font-bold text-black truncate">
              Wallet: <span className="text-xs text-black ml-1 line-clamp-0"> 0x89ACF29bEED95eF65206118c6a44009fAb6D2776 </span>
            </p>
          </div>
        </div>
      </div>
      <div
        className="flex mx-3 mt-16 flex-row items-start justify-left text-black"
      >
        {children}
      </div>
    </div>
  );
}
