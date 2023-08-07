import React from "react";
import Dropdown from "@/components/shared/Dropdown";
import { GlobalLayoutProps } from "./interfaces";
import useAuth from "@/hooks/AuthHook";

const sidebarItems = [
  {
    name: "Dashboard",
    url: "/",
  },
  {
    name: "Contracts",
    url: "/contracts",
    options: [
      { name: "all", url: "" },
      { name: "deployed", url: "/deployed" },
      { name: "purchased", url: "/purchased" },
      { name: "stored", url: "/stored" },
    ],
  },
  {
    name: "Collectibles",
    url: "/collectibles",
    options: [
      { name: "all", url: "" },
      { name: "deployed", url: "/deployed" },
      { name: "stored", url: "/stored" },
    ],
  },
  {
    name: "Profile",
    url: "/profile",
    options: [
      { name: "overview", url: "/" },
      { name: "settings", url: "/settings" },
    ],
  },
];

export default function GlobalLayout(props: GlobalLayoutProps) {
  const { children } = props;
  const { isAuthenticated } = useAuth();

  console.log({ isAuthenticated })

  return (
    <div className="grid grid-rows-1 w-screen text-black">
      <div
        className="grid h-full gap-3"
        style={{
          gridTemplateColumns: "auto 1fr",
        }}
      >
        {/* Sidebar */}
        <div className="w-full">
          <div className="bg-[#292c2b] px-8 py-5 h-full text-[#f7f5f3]">
            <ul className="flex flex-col gap-6">
              {sidebarItems.map((item, index) => (
                <Dropdown
                  key={index}
                  title={item.name}
                  options={item.options}
                  url={item.url}
                  open={true}
                />
              ))}
            </ul>
              <div className="absolute bottom-5">
                {
                  isAuthenticated ? (
                    <button
                      style={{
                        borderRadius: "10px",
                        backgroundColor: "var(--bg-dracula-green)",
                        padding: "0.5rem 0.8rem",
                        color: "black",
                        fontSize: "14px",
                      }}
                    >
                      Disconnect
                    </button>
                  ) : null
                }
              </div>
            </div>
        </div>
        {/* Content */}
        <div className="h-screen px-[60px] py-[30px]">{children}</div>
      </div>
    </div>
  );
}