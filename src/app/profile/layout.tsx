import { ProfileLayoutProps } from "./interface";

const mockUpBGImage =
  "https://i.seadn.io/gae/YPGHP7VAvzy-MCVU67CV85gSW_Di6LWbp-22LGEb3H6Yz9v4wOdAaAhiswnwwL5trMn8tZiJhgbdGuBN9wvpH10d_oGVjVIGM-zW5A?auto=format&dpr=1&w=1920";
const mockUpProfileImage =
  "https://i.seadn.io/gae/Nnp8Pdo6EidK7eBduGnAn_JBvFsYGhNGMJ_fHJ_mzGMN_2Khu5snL5zmiUMcSsIqtANh19KqxXDs0iNq_aYbKC5smO3hiCSw9PlL?auto=format&dpr=1&w=256";

export default function ProfileLayout(props: ProfileLayoutProps) {
  const { children } = props;

  return (
    <div
      className=""
      style={{
        position: "relative",
        backgroundImage: `url(${mockUpBGImage})`,
        height: "300px",
        width: "full",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top -5rem",
        // backgroundPosition: "center top",
      }}
    >
      <img
        src={mockUpProfileImage}
        alt="Profile image"
        style={{
          height: "120px",
          width: "120px",
          border: "4px solid var(--bg-border)",
          position: "absolute",
          bottom: "-3.5rem",
          left: "1rem",
          borderRadius: "10px",
        }}
      />
      <div
        className="absolute w-[15%] px-[0.5rem] py-[1rem] rounded-md"
        style={{
          position: "absolute",
          backgroundColor: "#f1fa8c",
          right: "1rem",
          bottom: "-1rem",
          border: "2px solid var(--bg-border)",
          maxWidth: "500px",
        }}
      >
        <p className="font-bold text-black truncate">
          Wallet: <span className="text-xs text-black ml-1 line-clamp-0"> 0x89ACF29bEED95eF65206118c6a44009fAb6D2776 </span>
        </p>
      </div>
      <div
        className=""
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
      </div>
    </div>
  );
}
