import { Axios } from ".";
import { getHeaders } from "./constants";

export const registerUserToDb = async ({
  wallet,
  message,
  signature,
}: {
  wallet: string;
  message: string;
  signature: string;
}) =>
  Axios.post("/auth/login", JSON.stringify({ message, signature, wallet }))
    .then((response) => {
      const data = response.data;
      const status = response.status;

      console.log({ status });

      return data;
    })
    .catch((error) => {
      console.log("AUTH ERROR");
      console.error(error);
      return null;
    });

export const clearUserSession = async (token: string) =>
  Axios.post("/auth/logout", null, {
    headers: {
      ...getHeaders(),
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      const data = response.data;
      const status = response.status;

      console.log({ status });

      return data;
    })
    .catch((error) => {
      console.log("AUTH ERROR");
      console.error(error);
      return null;
    });
