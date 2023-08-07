import { useState } from "react";

export interface IPropsDropdown {
  title: string;
  url: string;
  options?: {
    name: string;
    url: string;
  }[];
  open?: boolean;
}

export default function Dropdown(props: IPropsDropdown) {
  const { title, options, url, open } = props;
  const [isOpen, setIsOpen] = useState(open);

  return (
    <div className="">
      <p
        className="font-semibold"
        style={{ paddingBottom: "0.8rem", fontSize: "16px" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {" "}
        {title}{" "}
      </p>
      {options?.length && isOpen ? (
        <ul className="flex flex-col gap-1 w-full">
          {options.map((option, index) => (
            <div className="" key={index}>
              <a
                href={url + option.url}
                className=""
                style={{ fontSize: "13px", textTransform: "capitalize" }}
              >
                {" "}
                {option.name}{" "}
              </a>
            </div>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
