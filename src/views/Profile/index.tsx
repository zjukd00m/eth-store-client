import React, { useState } from "react";

export default function ProfileView() {
  const [accountConfirmed, setAccountConfirmed] = useState<boolean>(false);

  return <p className="text-red-500"> My profile </p>;
}
