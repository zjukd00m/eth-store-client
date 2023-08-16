import React, { useState } from "react";
import Dropdown from "@/components/shared/Dropdown";
import { GlobalLayoutProps } from "./interfaces";
import useAuth from "@/hooks/AuthHook";
import { FileProtectOutlined, FolderOutlined, HomeOutlined, PoweroffOutlined, UserOutlined } from "@ant-design/icons";

const sidebarItems = [
  {
    name: "Dashboard",
    url: "/",
    icon: <HomeOutlined className="text-[14px]" />
  },
  {
    name: "Items",
    url: "/items",
    options: [
      { name: "all", url: "" },
      { name: "create", url: "/create" },
    ],
    icon: <FolderOutlined className="text-[22px]" />,
  },
  {
    name: "Collectibles",
    url: "/collectibles",
    options: [
      { name: "all", url: "" },
      { name: "deployed", url: "/deployed" },
      { name: "create", url: "/create" },
    ],
    icon: <FileProtectOutlined className="text-[22px]" />,
  },
  {
    name: "Profile",
    url: "/profile",
    options: [
      { name: "overview", url: "/" },
      { name: "settings", url: "/settings" },
    ],
    icon: <UserOutlined className="text-[22px]"/>
  },
];

export default function GlobalLayout(props: GlobalLayoutProps) {
  const { children } = props;
  const { isAuthenticated } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="w-screen h-screen text-black bg-[#ECEFF4] overflow-y-hidden box-border">
      <div className="h-full w-full grid grid-rows-1 grid-cols-12">
        {/* Sidebar */}
        <div className={
            `
            bg-[#292c2b] 
            px-8 py-5 
            h-full 
            text-[#f7f5f3] 
            relative
            ${isSidebarOpen ? "w-full col-span-2" : "w-3 col-span-1"} 
          `}>
          <ul className="flex flex-col gap-6 items-flex-start">
            {sidebarItems.map((item, index) => (
              <Dropdown
                key={index}
                title={item.name}
                options={item.options}
                url={item.url}
                open={true}
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen} 
                icon={item.icon}
              />
            ))}
          </ul>
            <div className="absolute bottom-10 left-8 right-8">
              {
                isAuthenticated ? (
                  <div className="relative flex items-center">
                    <PoweroffOutlined 
                      className={`
                        text-[18px] 
                        absolute
                        text-[#ff5555]
                        ${!isSidebarOpen ? "left-0 right-0 text-center" : "left-3"}`
                      } />
                    <button
                      className="w-full"
                      style={{
                        borderRadius: "10px",
                        backgroundColor: "var(--bg-dracula-green)",
                        padding: "0.5rem 0.8rem",
                        color: "black",
                        fontSize: "14px",
                      }}
                    >
                      {
                        isSidebarOpen ? (
                          <p>
                            Disconnect
                          </p>
                        ) : null
                      }
                    </button>
                  </div>
                ) : null
              }
            </div>
          </div>
        {/* Content */}
        <div className={`
          px-[60px] 
          pt-[20px] 
          w-full 
          overflow-y-auto
          ${isSidebarOpen ? "col-span-10" : "col-span-11"}
        `}>{children}</div>
      </div>
    </div>
  );
}
