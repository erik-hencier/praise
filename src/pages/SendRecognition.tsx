import React, { useState } from 'react';
import { UserIcon, MessageSquareIcon, AwardIcon, SendIcon, SparklesIcon } from 'lucide-react';
export function SendRecognition() {
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');
  const [cultureValue, setCultureValue] = useState('');
  const [rewardSize, setRewardSize] = useState<'small' | 'medium' | 'large'>('medium');
  const cultureValues = ['Innovation', 'Collaboration', 'Excellence', 'Integrity', 'Customer Focus', 'Growth Mindset', 'Accountability', 'Respect'];
  const rewardSizes = [{
    size: 'small' as const,
    label: 'Small',
    amount: '$10',
    description: 'Quick appreciation'
  }, {
    size: 'medium' as const,
    label: 'Medium',
    amount: '$25',
    description: 'Great contribution'
  }, {
    size: 'large' as const,
    label: 'Large',
    amount: '$50',
    description: 'Outstanding work'
  }];
  const handleSendRecognition = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sending recognition:', {
      recipient,
      message,
      cultureValue,
      rewardSize
    });
  };
  return <div className="w-full min-h-screen" style={{
    backgroundColor: '#0D1B2A'
  }}>
      {/* Header */}
      <div className="w-full pt-16 pb-8 px-6" style={{
      background: 'linear-gradient(135deg, #FF416C 0%, #FF4B2B 100%)',
      borderBottomLeftRadius: '2rem',
      borderBottomRightRadius: '2rem'
    }}>
        <div className="flex items-center mb-2">
          <SparklesIcon size={32} style={{
          color: '#FFFFFF'
        }} className="mr-2" />
          <h1 className="text-3xl font-bold" style={{
          color: '#FFFFFF'
        }}>
            Send Recognition
          </h1>
        </div>
        <p className="text-sm" style={{
        color: '#E0E0E0'
      }}>
          Recognize and reward your team members
        </p>
      </div>
      <div className="px-6 py-6">
        <form onSubmit={handleSendRecognition} className="space-y-6">
          {/* Recipient Input */}
          <div>
            <label htmlFor="recipient" className="block text-sm font-medium mb-2" style={{
            color: '#E0E0E0'
          }}>
              Recipient
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <UserIcon size={20} style={{
                color: '#48D1CC'
              }} />
              </div>
              <input id="recipient" type="text" value={recipient} onChange={e => setRecipient(e.target.value)} className="w-full pl-10 pr-4 py-3 rounded-lg border-2 focus:outline-none focus:border-opacity-100 transition-colors" style={{
              backgroundColor: '#001F3F',
              borderColor: '#48D1CC',
              borderOpacity: 0.3,
              color: '#FFFFFF'
            }} placeholder="eriktheyogi.base.eth" required />
            </div>
          </div>
          {/* Message Input */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2" style={{
            color: '#E0E0E0'
          }}>
              Message
            </label>
            <div className="relative">
              <div className="absolute top-3 left-3 pointer-events-none">
                <MessageSquareIcon size={20} style={{
                color: '#48D1CC'
              }} />
              </div>
              <textarea id="message" value={message} onChange={e => setMessage(e.target.value)} rows={4} className="w-full pl-10 pr-4 py-3 rounded-lg border-2 focus:outline-none focus:border-opacity-100 transition-colors resize-none" style={{
              backgroundColor: '#001F3F',
              borderColor: '#48D1CC',
              borderOpacity: 0.3,
              color: '#FFFFFF'
            }} placeholder="Share why you're recognizing this person..." required />
            </div>
          </div>
          {/* Culture Value Selector */}
          <div>
            <label htmlFor="cultureValue" className="block text-sm font-medium mb-2" style={{
            color: '#E0E0E0'
          }}>
              Culture Value
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <AwardIcon size={20} style={{
                color: '#48D1CC'
              }} />
              </div>
              <select id="cultureValue" value={cultureValue} onChange={e => setCultureValue(e.target.value)} className="w-full pl-10 pr-4 py-3 rounded-lg border-2 focus:outline-none focus:border-opacity-100 transition-colors appearance-none cursor-pointer" style={{
              backgroundColor: '#001F3F',
              borderColor: '#48D1CC',
              borderOpacity: 0.3,
              color: cultureValue ? '#FFFFFF' : '#888888'
            }} required>
                <option value="" disabled>
                  Select a culture value
                </option>
                {cultureValues.map(value => <option key={value} value={value} style={{
                color: '#FFFFFF'
              }}>
                    {value}
                  </option>)}
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg className="w-5 h-5" style={{
                color: '#48D1CC'
              }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
          {/* Reward Size Selector */}
          <div>
            <label className="block text-sm font-medium mb-3" style={{
            color: '#E0E0E0'
          }}>
              Reward Size
            </label>
            <div className="grid grid-cols-3 gap-3">
              {rewardSizes.map(reward => <button key={reward.size} type="button" onClick={() => setRewardSize(reward.size)} className="p-4 rounded-xl border-2 transition-all transform hover:scale-105" style={{
              borderColor: rewardSize === reward.size ? '#48D1CC' : '#48D1CC40',
              backgroundColor: rewardSize === reward.size ? '#48D1CC20' : '#001F3F'
            }}>
                  <div className="text-center">
                    <p className="text-lg font-bold mb-1" style={{
                  color: rewardSize === reward.size ? '#48D1CC' : '#FFFFFF'
                }}>
                      {reward.label}
                    </p>
                    <p className="text-xl font-bold mb-1" style={{
                  color: rewardSize === reward.size ? '#48D1CC' : '#FFFFFF'
                }}>
                      {reward.amount}
                    </p>
                    <p className="text-xs" style={{
                  color: '#E0E0E0'
                }}>
                      {reward.description}
                    </p>
                  </div>
                </button>)}
            </div>
          </div>
          {/* Preview Card */}
          {recipient && message && cultureValue && <div className="p-4 rounded-xl border-2" style={{
          backgroundColor: '#001F3F',
          borderColor: '#48D1CC'
        }}>
              <p className="text-xs font-semibold mb-2" style={{
            color: '#48D1CC'
          }}>
                PREVIEW
              </p>
              <div className="space-y-2">
                <p className="text-sm" style={{
              color: '#E0E0E0'
            }}>
                  <span style={{
                color: '#FFFFFF'
              }}>
                    To:
                  </span>{' '}
                  {recipient}
                </p>
                <p className="text-sm" style={{
              color: '#E0E0E0'
            }}>
                  <span style={{
                color: '#FFFFFF'
              }}>
                    Value:
                  </span>{' '}
                  {cultureValue}
                </p>
                <p className="text-sm" style={{
              color: '#E0E0E0'
            }}>
                  <span style={{
                color: '#FFFFFF'
              }}>
                    Amount:
                  </span>{' '}
                  {rewardSizes.find(r => r.size === rewardSize)?.amount}
                </p>
              </div>
            </div>}
          {/* Send Button */}
          <button type="submit" className="w-full py-4 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2" style={{
          background: 'linear-gradient(135deg, #FF416C 0%, #FF4B2B 100%)'
        }}>
            <SendIcon size={20} />
            Send Recognition NFT
          </button>
        </form>
        {/* Info Box */}
        <div className="mt-6 p-4 rounded-lg" style={{
        backgroundColor: '#001F3F',
        borderLeft: '3px solid #00C2FF'
      }}>
          <p className="text-sm" style={{
          color: '#E0E0E0'
        }}>
            💡 The recipient will receive an NFT certificate of recognition
            along with the USDC reward
          </p>
        </div>
      </div>
    </div>;
}