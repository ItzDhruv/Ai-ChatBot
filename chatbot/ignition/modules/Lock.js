// // This setup uses Hardhat Ignition to manage smart contract deployments.
// // Learn more about it at https://hardhat.org/ignition

// import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

// const JAN_1ST_2030 = 1893456000;
// const ONE_GWEI = 1_000_000_000n;

// export default buildModule("LockModule", (m) => {
//   const unlockTime = m.getParameter("unlockTime", JAN_1ST_2030);
//   const lockedAmount = m.getParameter("lockedAmount", ONE_GWEI);

//   const lock = m.contract("Lock", [unlockTime], {
//     value: lockedAmount,
//   });

//   return { lock };
// });


// -----------------------------------------------------

import { useState, useEffect } from "react";
import { ethers } from "ethers";
import LockABI from "./artifacts/contracts/Lock.json";

const CONTRACT_ADDRESS = "YOUR_DEPLOYED_CONTRACT_ADDRESS";

function LockContract() {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [unlockTime, setUnlockTime] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      const newProvider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(newProvider);
    }
  }, []);

  const connectWallet = async () => {
    if (!provider) return;
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const newSigner = provider.getSigner();
    setSigner(newSigner);
    const newContract = new ethers.Contract(CONTRACT_ADDRESS, LockABI.abi, newSigner);
    setContract(newContract);
    fetchUnlockTime(newContract);
  };

  const fetchUnlockTime = async (contractInstance) => {
    try {
      const time = await contractInstance.unlockTime();
      setUnlockTime(new Date(time.toNumber() * 1000).toLocaleString());
    } catch (error) {
      console.error("Error fetching unlock time:", error);
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold">Lock Contract</h1>
      <button onClick={connectWallet} className="px-4 py-2 bg-blue-500 text-white rounded">
        Connect Wallet
      </button>
      {contract && unlockTime && (
        <p className="mt-3">Unlock Time: {unlockTime}</p>
      )}
    </div>
  );
}

export default LockContract;