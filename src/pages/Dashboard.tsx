import React, { useState } from 'react';
import { WalletIcon, GiftIcon, SendIcon, AwardIcon, UserIcon, HeartIcon, MessageSquareIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export function Dashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'my' | 'team'>('my');
  const walletBalance = 250.0;
  const recognitions = [{
    id: 1,
    from: 'sarah.base.eth',
    cultureValue: 'Innovation',
    message: 'Amazing work on the new feature! Your creative approach really made a difference.',
    amount: 50,
    date: '2024-01-15',
    nftImage: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=400&h=400&fit=crop'
  }, {
    id: 2,
    from: 'mike.base.eth',
    cultureValue: 'Collaboration',
    message: 'Thank you for helping the team during the sprint. Your support was invaluable!',
    amount: 25,
    date: '2024-01-14',
    nftImage: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400&h=400&fit=crop'
  }, {
    id: 3,
    from: 'jessica.base.eth',
    cultureValue: 'Excellence',
    message: 'Outstanding presentation! You really nailed it.',
    amount: 25,
    date: '2024-01-12',
    nftImage: 'https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=400&h=400&fit=crop'
  }, {
    id: 4,
    from: 'alex.base.eth',
    cultureValue: 'Growth Mindset',
    message: 'Love how you took feedback and improved the process!',
    amount: 10,
    date: '2024-01-10',
    nftImage: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=400&h=400&fit=crop'
  }];
  const teamFeed = [{
    id: 1,
    from: 'sarah.base.eth',
    to: 'mike.base.eth',
    cultureValue: 'Innovation',
    message: 'Amazing work on the new feature! Your creative approach really made a difference.',
    amount: 50,
    date: '2024-01-15',
    nftImage: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=400&h=400&fit=crop',
    likes: 12,
    comments: 3
  }, {
    id: 2,
    from: 'mike.base.eth',
    to: 'jessica.base.eth',
    cultureValue: 'Collaboration',
    message: 'Thank you for helping the team during the sprint. Your support was invaluable!',
    amount: 25,
    date: '2024-01-14',
    nftImage: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400&h=400&fit=crop',
    likes: 8,
    comments: 2
  }, {
    id: 3,
    from: 'jessica.base.eth',
    to: 'alex.base.eth',
    cultureValue: 'Excellence',
    message: 'Outstanding presentation! You really nailed it.',
    amount: 25,
    date: '2024-01-12',
    nftImage: 'https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=400&h=400&fit=crop',
    likes: 15,
    comments: 5
  }, {
    id: 4,
    from: 'alex.base.eth',
    to: 'sarah.base.eth',
    cultureValue: 'Leadership',
    message: 'Your guidance on the project was exceptional. Thank you for leading by example!',
    amount: 30,
    date: '2024-01-11',
    nftImage: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=400&h=400&fit=crop',
    likes: 10,
    comments: 4
  }];
  return <div className="w-full min-h-screen" style={{
    backgroundColor: '#0D1B2A'
  }}>
      {/* Header */}
      <div className="w-full pt-16 pb-8 px-6" style={{
      background: 'linear-gradient(135deg, #FF416C 0%, #FF4B2B 100%)',
      borderBottomLeftRadius: '2rem',
      borderBottomRightRadius: '2rem'
    }}>
        <h1 className="text-3xl font-bold mb-2" style={{
        color: '#FFFFFF'
      }}>
          Recognition
        </h1>
        <p className="text-sm" style={{
        color: '#E0E0E0'
      }}>
          View your achievements and team activity
        </p>
      </div>
      <div className="px-6 py-6 space-y-6">
        {/* Wallet Balance Card */}
        <div className="p-6 rounded-2xl shadow-lg" style={{
        background: 'linear-gradient(135deg, #001F3F 0%, #003366 100%)',
        borderLeft: '4px solid #48D1CC'
      }}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <WalletIcon size={24} style={{
              color: '#48D1CC'
            }} />
              <h2 className="text-lg font-semibold" style={{
              color: '#FFFFFF'
            }}>
                Wallet Balance
              </h2>
            </div>
            <button onClick={() => navigate('/wallet')} className="text-sm font-medium hover:underline" style={{
            color: '#00C2FF'
          }}>
              Manage
            </button>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold" style={{
            color: '#48D1CC'
          }}>
              ${walletBalance.toFixed(2)}
            </span>
            <span className="text-sm" style={{
            color: '#E0E0E0'
          }}>
              USDC
            </span>
          </div>
        </div>
        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button onClick={() => navigate('/send')} className="py-4 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2" style={{
          background: 'linear-gradient(135deg, #FF416C 0%, #FF4B2B 100%)'
        }}>
            <SendIcon size={20} />
            Send Recognition
          </button>
          <button onClick={() => navigate('/wallet')} className="py-4 rounded-xl font-semibold border-2 transition-all transform hover:scale-105 flex items-center justify-center gap-2" style={{
          borderColor: '#48D1CC',
          color: '#48D1CC',
          backgroundColor: '#001F3F'
        }}>
            <GiftIcon size={20} />
            Add Funds
          </button>
        </div>
        {/* Tabs */}
        <div className="flex gap-2 p-1 rounded-xl" style={{
        backgroundColor: '#001F3F'
      }}>
          <button onClick={() => setActiveTab('my')} className="flex-1 py-3 px-4 rounded-lg font-semibold transition-all" style={{
          backgroundColor: activeTab === 'my' ? '#48D1CC' : 'transparent',
          color: activeTab === 'my' ? '#0D1B2A' : '#FFFFFF'
        }}>
            My Recognition
          </button>
          <button onClick={() => setActiveTab('team')} className="flex-1 py-3 px-4 rounded-lg font-semibold transition-all" style={{
          backgroundColor: activeTab === 'team' ? '#48D1CC' : 'transparent',
          color: activeTab === 'team' ? '#0D1B2A' : '#FFFFFF'
        }}>
            Team Feed
          </button>
        </div>
        {/* Tab Content */}
        {activeTab === 'my' ? <>
            {/* Recognition NFTs Section */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold" style={{
              color: '#FFFFFF'
            }}>
                  Recognition NFTs
                </h2>
                <span className="px-3 py-1 rounded-full text-sm font-semibold" style={{
              backgroundColor: '#48D1CC20',
              color: '#48D1CC'
            }}>
                  {recognitions.length} Total
                </span>
              </div>
              {/* NFT Grid */}
              <div className="space-y-4">
                {recognitions.map(recognition => <div key={recognition.id} onClick={() => navigate(`/recognition/${recognition.id}`)} className="rounded-xl overflow-hidden border-2 hover:shadow-lg transition-all cursor-pointer" style={{
              backgroundColor: '#001F3F',
              borderColor: '#48D1CC40'
            }}>
                    <div className="flex gap-4 p-4">
                      {/* NFT Image */}
                      <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden" style={{
                  border: '2px solid #48D1CC'
                }}>
                        <img src={recognition.nftImage} alt="Recognition NFT" className="w-full h-full object-cover" />
                      </div>
                      {/* NFT Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <AwardIcon size={16} style={{
                        color: '#48D1CC'
                      }} />
                            <span className="text-sm font-bold" style={{
                        color: '#48D1CC'
                      }}>
                              {recognition.cultureValue}
                            </span>
                          </div>
                          <span className="text-lg font-bold" style={{
                      color: '#48D1CC'
                    }}>
                            ${recognition.amount}
                          </span>
                        </div>
                        <p className="text-sm mb-2 line-clamp-2" style={{
                    color: '#E0E0E0'
                  }}>
                          {recognition.message}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <UserIcon size={14} style={{
                        color: '#48D1CC'
                      }} />
                            <span className="text-xs" style={{
                        color: '#E0E0E0'
                      }}>
                              From: {recognition.from}
                            </span>
                          </div>
                          <span className="text-xs" style={{
                      color: '#888888'
                    }}>
                            {new Date(recognition.date).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>
            {/* Stats Card */}
            <div className="p-4 rounded-lg" style={{
          backgroundColor: '#001F3F',
          borderLeft: '3px solid #00C2FF'
        }}>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold" style={{
                color: '#48D1CC'
              }}>
                    {recognitions.length}
                  </p>
                  <p className="text-xs" style={{
                color: '#E0E0E0'
              }}>
                    Received
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold" style={{
                color: '#48D1CC'
              }}>
                    ${recognitions.reduce((sum, r) => sum + r.amount, 0)}
                  </p>
                  <p className="text-xs" style={{
                color: '#E0E0E0'
              }}>
                    Total Earned
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold" style={{
                color: '#48D1CC'
              }}>
                    {new Set(recognitions.map(r => r.cultureValue)).size}
                  </p>
                  <p className="text-xs" style={{
                color: '#E0E0E0'
              }}>
                    Values
                  </p>
                </div>
              </div>
            </div>
          </> : <>
            {/* Team Feed Section */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold" style={{
              color: '#FFFFFF'
            }}>
                  Team Activity
                </h2>
                <span className="px-3 py-1 rounded-full text-sm font-semibold" style={{
              backgroundColor: '#48D1CC20',
              color: '#48D1CC'
            }}>
                  {teamFeed.length} Posts
                </span>
              </div>
              {/* Feed Items */}
              <div className="space-y-4">
                {teamFeed.map(item => <div key={item.id} onClick={() => navigate(`/recognition/${item.id}`)} className="rounded-xl overflow-hidden border-2 cursor-pointer hover:shadow-lg transition-all" style={{
              backgroundColor: '#001F3F',
              borderColor: '#48D1CC40'
            }}>
                    {/* Header */}
                    <div className="p-4 border-b" style={{
                borderColor: '#48D1CC20'
              }}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <UserIcon size={16} style={{
                      color: '#48D1CC'
                    }} />
                          <span className="text-sm font-semibold text-white">
                            {item.from}
                          </span>
                          <span className="text-sm text-gray-400">→</span>
                          <span className="text-sm font-semibold text-white">
                            {item.to}
                          </span>
                        </div>
                        <span className="text-xs text-gray-400">
                          {new Date(item.date).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <AwardIcon size={14} style={{
                    color: '#48D1CC'
                  }} />
                        <span className="text-xs font-semibold" style={{
                    color: '#48D1CC'
                  }}>
                          {item.cultureValue}
                        </span>
                      </div>
                    </div>
                    {/* NFT Image */}
                    <div className="aspect-square w-full overflow-hidden">
                      <img src={item.nftImage} alt="Recognition NFT" className="w-full h-full object-cover" />
                    </div>
                    {/* Content */}
                    <div className="p-4">
                      <p className="text-sm text-gray-300 mb-3">
                        {item.message}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="px-3 py-1 rounded-full" style={{
                    background: 'linear-gradient(135deg, #FF416C 0%, #FF4B2B 100%)'
                  }}>
                          <span className="text-lg font-bold text-white">
                            ${item.amount}
                          </span>
                        </div>
                        <div className="flex items-center gap-4">
                          <button className="flex items-center gap-1 text-gray-400 hover:text-red-400 transition-colors">
                            <HeartIcon size={18} />
                            <span className="text-sm">{item.likes}</span>
                          </button>
                          <button className="flex items-center gap-1 text-gray-400 hover:text-blue-400 transition-colors">
                            <MessageSquareIcon size={18} />
                            <span className="text-sm">{item.comments}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>
          </>}
      </div>
    </div>;
}