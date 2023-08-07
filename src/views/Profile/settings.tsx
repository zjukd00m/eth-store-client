import { useState } from "react";

export default function ProfileSettingsView() {
  const [showEmailInput, setShowEmailInput] = useState<boolean>(false);

  function handleOnChangeCheckox(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.checked;

    if (value) {
      setShowEmailInput(true);
    } else {
      setShowEmailInput(false);
    }
  }

  return (
    <div>
      <p className=""> You can verify you account by confirming an email </p>
      <input
        type="email"
        className=""
        style={{
          backgroundColor: "white",
          padding: "0.3rem",
          border: "1px solid var(--bg-border)",
          borderRadius: "5px",
          marginTop: "0.5rem",
          width: "100%",
        }}
      />
      <button
        className=""
        style={{
          backgroundColor: "#44475a",
          fontSize: "14px",
          padding: "0.3rem 1rem",
          color: "white",
          borderRadius: "5px",
          marginTop: "1rem",
        }}
      >
        Confirm
      </button>
      <div className="">
        <input type="checkbox" onChange={(e) => handleOnChangeCheckox(e)} />
        <label> I want to receive email notifications </label>
      </div>
    </div>
  );
}
