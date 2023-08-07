import useAuth from "@/hooks/AuthHook";


export default function Dashboard() {
  const { isAuthenticated, login } = useAuth();

  async function handleConnectWallet() {
    if (isAuthenticated) return;

    await login();
  }

  return (
    <div
      className=""
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <p
        style={{
          fontSize: "24px",
          fontFamily: "var(--text-title)",
          width: "600px",
          textTransform: "uppercase",
          fontWeight: "700",
        }}
      >
        {" "}
        Buy content directly from the creators with no intermediaries and low
        fees{" "}
      </p>
      <p
        style={{
          fontSize: "16px",
          fontFamily: "var(--text-title)",
          textTransform: "uppercase",
          fontWeight: "500",
          marginTop: "20px",
        }}
      >
        We use the polygon blockchain to make the background process easier !
      </p>
        {
          !isAuthenticated ? (
            <button
              style={{
                marginTop: "200px",
                borderRadius: "10px",
                backgroundColor: "var(--bg-dracula-green)",
                padding: "0.5rem 1rem",
                border: "1px solid var(--bg-border)",
              }}
              onClick={handleConnectWallet}
            >
              Connect Wallet
            </button>
          ) : (
            <p> Disconnect your wallet </p>
          )
        }
    </div>
  );
}
