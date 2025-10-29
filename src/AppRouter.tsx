import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { WalletFunding } from './pages/WalletFunding';
import { SendRecognition } from './pages/SendRecognition';
import { Dashboard } from './pages/Dashboard';
import { CreateTeam } from './pages/CreateTeam';
import { RecognitionDetail } from './pages/RecognitionDetail';
import { SignupFlow } from './pages/SignupFlow';
import { TeamManagement } from './pages/TeamManagement';
import { SocialFeed } from './pages/SocialFeed';
export function AppRouter() {
  return <BrowserRouter>
      <Routes>
  <Route path="/" element={<SignupFlow />} />
  {/* keep the original App available at /app in case it's used elsewhere */}
  <Route path="/app" element={<App />} />
  <Route path="/signup-flow" element={<SignupFlow />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/wallet" element={<WalletFunding />} />
        <Route path="/send" element={<SendRecognition />} />
        <Route path="/create-team" element={<CreateTeam />} />
        <Route path="/team-management" element={<TeamManagement />} />
        <Route path="/social-feed" element={<SocialFeed />} />
        <Route path="/recognition/:id" element={<RecognitionDetail />} />
      </Routes>
    </BrowserRouter>;
}