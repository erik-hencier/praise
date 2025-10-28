import React from 'react';
import { AwardIcon, UserIcon, HeartIcon, MessageSquareIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export function SocialFeed() {
  const navigate = useNavigate();
  const feedItems = [{
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
  }];
  return <div className="w-full min-h-screen" style={{
    backgroundColor: '#0D1B2A'
  }}>
      <div className="w-full pt-16 pb-8 px-6" style={{
      background: 'linear-gradient(135deg, #FF416C 0%, #FF4B2B 100%)',
      borderBottomLeftRadius: '2rem',
      borderBottomRightRadius: '2rem'
    }}>
        <h1 className="text-3xl font-bold text-white mb-2">Team Feed</h1>
        <p className="text-sm text-white/80">See all team recognitions</p>
      </div>
      <div className="px-6 py-6 space-y-4">
        {feedItems.map(item => <div key={item.id} onClick={() => navigate(`/recognition/${item.id}`)} className="rounded-xl overflow-hidden border-2 cursor-pointer hover:shadow-lg transition-all" style={{
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
              <p className="text-sm text-gray-300 mb-3">{item.message}</p>
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
    </div>;
}