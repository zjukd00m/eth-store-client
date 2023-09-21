import GlobalLayout from "@/app/layout";
import AuthContextProvider from "@/context/AuthContext/AuthContext";
import Dashboard from "@/views/dashboard";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <GlobalLayout>
      <AuthContextProvider>
        <Toaster />
        <Dashboard />
      </AuthContextProvider>
    </GlobalLayout>
  );
}
