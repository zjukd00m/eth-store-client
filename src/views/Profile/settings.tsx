import { CheckOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function ProfileSettingsView() {
  const [accountIsVerified, setAccountIsVerified] = useState(false);
  const [userEmail, setUserEmail] = useState();
  const [changeEmail, setChangeEmail] = useState(false);

  return (
    <div className="my-3 overflow-y-auto">
      <p className="text-md mb-3"> Account Verification </p>
      {
        accountIsVerified ? (
          <div className="flex flex-col text-sm items-start gap-4">
            <div className="flex gap-4 items-center">
              <p className="text-sm"> Your account is verified </p>
              <CheckOutlined className="text-[#A3BE8C]" />
            </div>
          </div>
        ) : (
        <div className="">
          <div className="">
            <p className="text-sm my-1"> You can verify your account by confirming an email </p>
            <input
              type="email"
              className="mt-2 text-sm block apperance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 pr-8 rounded leading-tight focus:outline-none focus:bg-whote focus:border-gray-500" 
            />
          </div>
          <button
            className="my-3"
            style={{
              backgroundColor: "#44475a",
              fontSize: "14px",
              padding: "0.3rem 1rem",
              color: "white",
              borderRadius: "5px",
              marginTop: "1rem",
            }}
          >
            Send email
          </button>
        </div>
        )
      }
      {
        accountIsVerified ? (
        <div className="mt-3">
          <p className="text-sm"> Your email </p>
          <input
            type="email"
            className="mt-2 text-sm block apperance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 pr-8 rounded leading-tight focus:outline-none focus:bg-whote focus:border-gray-500" 
            defaultValue={"tyler_d@proton.me"}
            disabled={true}
          />
        </div>
        ) : null }
      <div className="mt-3">
        <p className="text-sm"> Your username </p>
        <input
          className="mt-2 text-sm block apperance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 pr-8 rounded leading-tight focus:outline-none focus:bg-whote focus:border-gray-500" 
          defaultValue={"tyler_d"}
          disabled={true}
        />
      </div>
      <div className="mt-2">
        <p className="text-sm"> Your anti-spam code </p>
        <input
          className="mt-2 text-sm block apperance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 pr-8 rounded leading-tight focus:outline-none focus:bg-whote focus:border-gray-500" 
          defaultValue={"Hydra-Village"}
          disabled={true}
        />
      </div>
      <button
        className="mt-5 text-[14px] bg-[#44475a] text-white rounded-[5px] py-[0.3rem] px-[1rem]"
      >
        Save
      </button>
    </div>
  );
}
