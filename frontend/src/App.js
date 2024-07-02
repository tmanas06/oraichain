// frontend/src/App.js
import React from 'react';
import { WagmiConfig, createClient, configureChains } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { Chain } from 'wagmi/chains';
import { ethers } from 'ethers';
import config from './config';

const oraichain = {
  id: config.network.chainId,
  name: config.network.name,
  network: config.network.name.toLowerCase(),
  nativeCurrency: {
    name: 'ORAI',
    symbol: 'ORAI',
    decimals: 18,
  },
  rpcUrls: {
    default: config.network.rpcUrl,
  },
  blockExplorers: {
    default: { name: 'Oraichain Explorer', url: 'https://scan.orai.io' },
  },
};

const { chains, provider } = configureChains([oraichain], [publicProvider()]);

const client = createClient({
  autoConnect: true,
  provider,
});

const contractAbi = [
  // Your contract ABI
];

const ContractInteraction = () => {
  const provider = new ethers.providers.JsonRpcProvider(config.network.rpcUrl);
  const contract = new ethers.Contract(config.contractAddress, contractAbi, provider);

  const fetchData = async () => {
    try {
      const data = await contract.yourContractMethod(); // Replace with your contract method
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const sendData = async () => {
    try {
      const signer = provider.getSigner();
      const contractWithSigner = contract.connect(signer);
      const tx = await contractWithSigner.yourContractMethod(args); // Replace with your contract method and args
      await tx.wait();
      console.log('Transaction successful');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      <button onClick={sendData}>Send Data</button>
    </div>
  );
};

function App() {
  return (
    <WagmiConfig client={client}>
      <div>
        <h1>Oraichain + WAGMI Integration</h1>
        <ContractInteraction />
      </div>
    </WagmiConfig>
  );
}

export default App;
