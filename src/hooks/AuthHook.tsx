import { useEffect, useState } from "react";

export default function useAuth() {
    const [wallet, setWallet] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Authenticate the user on active connection from the wallet to the app
    useEffect(() => {
        (async () => {
            const account = await window.ethereum.request({  method: "eth_accounts" });

            if (account?.length && !isAuthenticated) {
                setWallet(account[0]);
                setIsAuthenticated(true);
            }
        })();
    }, []);

    // Listen for changes in the account (on change), when there's no account
    // then reset the authentication state
    useEffect(() => {
        window.ethereum.on("accountsChanged", (accounts: string[]) => {
            if (!accounts?.length) {
                setWallet("");
                setIsAuthenticated(false);
            }
        });
    })

    async function login() {
        try {
            const account = await window.ethereum.request({ method: "eth_accounts" });

            // The user is already logged
            if (account.length && isAuthenticated) return;
            if (account.length && !isAuthenticated) {
                setWallet(account[0]);
                setIsAuthenticated(true);
            }

            // When the user is not, request the wallet sign in (metamask)
            const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });

            setWallet(accounts[0]);
            setIsAuthenticated(true);
        } catch (error: any) {
            if (error.code === 4001) {
                console.log("Connect to metamask");
            } else {
                console.error(error.message);
            }
        }
    }

    return { wallet, isAuthenticated, login };
}

// => Cornucopia
