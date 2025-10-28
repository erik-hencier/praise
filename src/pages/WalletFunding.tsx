import React, { useState } from 'react';
import { WalletIcon, CopyIcon, CheckIcon, DollarSignIcon, UsersIcon, ArrowDownIcon, ArrowUpIcon } from 'lucide-react';
export function WalletFunding() {
  const [amount, setAmount] = useState('');
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'add' | 'withdraw'>('add');
  const [withdrawAddress, setWithdrawAddress] = useState('');
  const inviteCode = 'PRAISE2024XYZ';
  const currentBalance = 250.0;
  const handleCopyCode = () => {
    navigator.clipboard.writeText(inviteCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const handleFundWallet = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Funding wallet with:', amount);
  };
  const handleWithdraw = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Withdrawing:', amount, 'to:', withdrawAddress);
  };
  const quickAmounts = [50, 100, 250, 500];
  return <div className="w-full min-h-screen" style={{
    backgroundColor: '#0D1B2A'
  }}>
      {/* Header */}
      <div className="w-full pt-16 pb-8 px-6" style={{
      background: 'linear-gradient(135deg, #FF416C 0%, #FF4B2B 100%)',
      borderBottomLeftRadius: '2rem',
      borderBottomRightRadius: '2rem'
    }}>
        <h1 className="text-3xl font-bold mb-2 text-white">Reward Capital</h1>
        <p className="text-sm text-white/80">Manage your wallet funds</p>
      </div>
      <div className="px-6 py-6 space-y-6">
        {/* Current Balance Card */}
        <div className="p-6 rounded-2xl shadow-lg" style={{
        backgroundColor: '#001F3F',
        borderLeft: '4px solid #48D1CC'
      }}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm mb-1 text-gray-300">Current Balance</p>
              <p className="text-3xl font-bold text-white">
                ${currentBalance.toFixed(2)}
              </p>
              <p className="text-xs mt-1" style={{
              color: '#48D1CC'
            }}>
                USDC
              </p>
            </div>
            <div className="p-4 rounded-full" style={{
            backgroundColor: '#0D1B2A'
          }}>
              <WalletIcon size={32} style={{
              color: '#48D1CC'
            }} />
            </div>
          </div>
        </div>
        {/* Tab Selector */}
        <div className="flex gap-2 p-1 rounded-lg" style={{
        backgroundColor: '#001F3F'
      }}>
          <button onClick={() => setActiveTab('add')} className="flex-1 py-2 rounded-lg font-semibold transition-all flex items-center justify-center gap-2" style={{
          backgroundColor: activeTab === 'add' ? '#48D1CC20' : 'transparent',
          color: activeTab === 'add' ? '#48D1CC' : '#888888'
        }}>
            <ArrowDownIcon size={18} />
            Add Funds
          </button>
          <button onClick={() => setActiveTab('withdraw')} className="flex-1 py-2 rounded-lg font-semibold transition-all flex items-center justify-center gap-2" style={{
          backgroundColor: activeTab === 'withdraw' ? '#48D1CC20' : 'transparent',
          color: activeTab === 'withdraw' ? '#48D1CC' : '#888888'
        }}>
            <ArrowUpIcon size={18} />
            Withdraw
          </button>
        </div>
        {/* Add Funds Section */}
        {activeTab === 'add' ? <div>
            <h2 className="text-xl font-semibold mb-4 text-white">Add Funds</h2>
            <form onSubmit={handleFundWallet} className="space-y-4">
              <div>
                <label htmlFor="amount" className="block text-sm font-medium mb-2 text-gray-300">
                  Amount (USDC)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <DollarSignIcon size={20} style={{
                  color: '#48D1CC'
                }} />
                  </div>
                  <input id="amount" type="number" value={amount} onChange={e => setAmount(e.target.value)} className="w-full pl-12 pr-4 py-3 rounded-lg border-2 focus:outline-none transition-colors text-lg" style={{
                backgroundColor: '#001F3F',
                borderColor: '#48D1CC',
                color: '#FFFFFF'
              }} placeholder="0.00" step="0.01" min="0" required />
                </div>
              </div>
              <div>
                <p className="text-sm mb-2 text-gray-300">Quick Select</p>
                <div className="grid grid-cols-4 gap-2">
                  {quickAmounts.map(quickAmount => <button key={quickAmount} type="button" onClick={() => setAmount(quickAmount.toString())} className="py-2 rounded-lg border-2 font-medium hover:bg-opacity-20 transition-all" style={{
                borderColor: '#48D1CC',
                color: '#FFFFFF',
                backgroundColor: amount === quickAmount.toString() ? '#48D1CC20' : 'transparent'
              }}>
                      ${quickAmount}
                    </button>)}
                </div>
              </div>
              <button type="submit" className="w-full py-3 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105" style={{
            background: 'linear-gradient(135deg, #FF416C 0%, #FF4B2B 100%)'
          }}>
                Add Funds
              </button>
            </form>
          </div> :
      // Withdraw Section
      <div>
            <h2 className="text-xl font-semibold mb-4 text-white">
              Withdraw Funds
            </h2>
            <form onSubmit={handleWithdraw} className="space-y-4">
              <div>
                <label htmlFor="withdrawAddress" className="block text-sm font-medium mb-2 text-gray-300">
                  Wallet Address
                </label>
                <input id="withdrawAddress" type="text" value={withdrawAddress} onChange={e => setWithdrawAddress(e.target.value)} className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors" style={{
              backgroundColor: '#001F3F',
              borderColor: '#48D1CC',
              color: '#FFFFFF'
            }} placeholder="0x..." required />
              </div>
              <div>
                <label htmlFor="withdrawAmount" className="block text-sm font-medium mb-2 text-gray-300">
                  Amount (USDC)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <DollarSignIcon size={20} style={{
                  color: '#48D1CC'
                }} />
                  </div>
                  <input id="withdrawAmount" type="number" value={amount} onChange={e => setAmount(e.target.value)} className="w-full pl-12 pr-4 py-3 rounded-lg border-2 focus:outline-none transition-colors text-lg" style={{
                backgroundColor: '#001F3F',
                borderColor: '#48D1CC',
                color: '#FFFFFF'
              }} placeholder="0.00" step="0.01" min="0" max={currentBalance} required />
                </div>
                <p className="text-xs mt-1 text-gray-400">
                  Available: ${currentBalance.toFixed(2)}
                </p>
              </div>
              <button type="submit" className="w-full py-3 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105" style={{
            background: 'linear-gradient(135deg, #FF416C 0%, #FF4B2B 100%)'
          }}>
                Withdraw Funds
              </button>
            </form>
          </div>}
        {/* Divider */}
        <div className="relative py-2">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t" style={{
            borderColor: '#48D1CC',
            opacity: 0.3
          }}></div>
          </div>
        </div>
        {/* Invite Team Section */}
        <div>
          <div className="flex items-center mb-4">
            <UsersIcon size={24} style={{
            color: '#48D1CC'
          }} className="mr-2" />
            <h2 className="text-xl font-semibold text-white">
              Invite Your Team
            </h2>
          </div>
          <div className="p-4 rounded-xl" style={{
          backgroundColor: '#001F3F'
        }}>
            <p className="text-sm mb-3 text-gray-300">
              Share this code with your team members
            </p>
            <div className="flex items-center gap-2">
              <div className="flex-1 px-4 py-3 rounded-lg font-mono text-lg tracking-wider" style={{
              backgroundColor: '#0D1B2A',
              color: '#48D1CC',
              border: '2px solid #48D1CC'
            }}>
                {inviteCode}
              </div>
              <button onClick={handleCopyCode} className="p-3 rounded-lg transition-all transform hover:scale-110" style={{
              backgroundColor: copied ? '#48D1CC' : '#001F3F',
              border: '2px solid #48D1CC'
            }}>
                {copied ? <CheckIcon size={24} style={{
                color: '#0D1B2A'
              }} /> : <CopyIcon size={24} style={{
                color: '#48D1CC'
              }} />}
              </button>
            </div>
            {copied && <p className="text-sm mt-2 text-center" style={{
            color: '#48D1CC'
          }}>
                Copied to clipboard!
              </p>}
          </div>
        </div>
      </div>
    </div>;
}