import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import EventsCalendar from './pages/EventsCalendar';
import ProjectShowcase from './pages/ProjectShowcase';
import News from './pages/News';
import MintNFT from './pages/MintNFT';
import Reviews from './pages/Reviews';
import Digiboard from './pages/Digiboard';
import StressTest from './pages/Stresstest';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { optimismSepoliaTestnet } from './pages/Sepi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [mainnet, polygon, optimism, arbitrum, base],
  syncConnectedChain: true,
  ssr: true, // If your dApp uses server side rendering (SSR)
});
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <RainbowKitProvider>
        {/* Your App */}
     
    <Router>
      <div>
        
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/blog" Component={Blog} />
          <Route path="/events-calendar" Component={EventsCalendar} />
          <Route path="/project-showcase" Component={ProjectShowcase} />
          <Route path="/news" Component={News} />
          <Route path="/mint-nft" Component={MintNFT} />
          <Route path="/reviews" Component={Reviews} />
          <Route path="/digiboard" Component={Digiboard} />
          <Route path="/stress-test" Component={StressTest} />
        </Routes>
      </div>
    </Router>
    </RainbowKitProvider>
    </QueryClientProvider>
  </WagmiProvider>
  );
  
};

export default App;