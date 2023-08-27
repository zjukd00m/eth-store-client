import GlobalLayout from "@/app/layout";
import AuthContextProvider from "@/context/AuthContext/AuthContext";
import Dashboard from "@/views/dashboard";

export default function Home() {
  return (
    <GlobalLayout>
      <AuthContextProvider>
        <Dashboard />
      </AuthContextProvider>
    </GlobalLayout>
  );
}
