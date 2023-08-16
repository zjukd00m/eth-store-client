import { useState } from "react";
import "../../../styles/index.css";
import { DoubleLeftOutlined } from "@ant-design/icons";

export interface IPropsDropdown {
  title: string;
  url: string;
  options?: {
    name: string;
    url: string;
  }[];
  open?: boolean;
  isSidebarOpen?: boolean;
  setIsSidebarOpen?: any;
  icon: any;
}

export default function Dropdown(props: IPropsDropdown) {
  const { title, options, url, open, isSidebarOpen, setIsSidebarOpen, icon } = props;
  const [isOpen, setIsOpen] = useState(open);

  return (
    <div className="w-full">
      <div className={`
        flex 
        items-center
        w-full
        ${title !== "Dashboard" ? null : "mb-12"}
      `}>
        <div className={`flex items-center justify-start gap-5 ${isSidebarOpen ? "w-full" : null }`}>
          { 
            title !== "Dashboard" ? (
              <div className={`p-1`}> { icon } </div> 
            ) : null 
          }
          {
            isSidebarOpen ? (
              <p
                className={`
                  font-semibold
                  ${title !== "Dashboard" ? `text-[14px]` : `text-[22px] font-bold`}
                  `
                }
                onClick={() => setIsOpen(!isOpen)}
              >
                {title}
              </p>
            ) : null 
          }
        </div>
        {
          title === "Dashboard" && isSidebarOpen ? (
            <DoubleLeftOutlined className="text-[16px] cursor-pointer" onClick={() => {
              setIsSidebarOpen(!isSidebarOpen);
            }} />
          ) : title === "Dashboard" && !isSidebarOpen ? (
            <DoubleLeftOutlined className="text-[16px] cursor-pointer rotate-180" onClick={() => {
              setIsSidebarOpen(!isSidebarOpen);
            }} />
          ) : null
        }
      </div>
      {options?.length && isOpen && isSidebarOpen ? (
        <ul className="flex flex-col gap-1 w-full mt-3">
          {options.map((option, index) => (
            <div className="" key={index}>
              <a
                href={url + option.url}
                className=""
                style={{ fontSize: "13px", textTransform: "capitalize" }}
              >
                {option.name}
              </a>
            </div>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
