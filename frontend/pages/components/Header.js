import { Beans, Key } from "@web3uikit/icons";
import React from "react";
import { useEffect, useState } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  useEffect(() => {
    if (!isConnected) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isConnected]);

  return (
    <>
      <section>
        <section>
          <h1>Beans Staking</h1>
          <Beans fontSize="20px" />
        </section>
        <section>
          {!isLoggedIn ? (
            <button onClick={disconnect}>Disconnect Wallet</button>
          ) : (
            <>
              {connectors.map((connector) => (
                <button
                  disabled={!connector.ready}
                  key={connector.id}
                  onClick={() => connect({ connector })}
                >
                  Connect Wallet
                </button>
              ))}
            </>
          )}
        </section>
      </section>
    </>
  );
};

export default Header;
