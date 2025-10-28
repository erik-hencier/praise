import React from 'react';
import { AwardIcon, UserIcon, CalendarIcon, UsersIcon, ArrowLeftIcon, ShareIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export function RecognitionDetail() {
  const navigate = useNavigate();
  // Sample recognition data - in a real app, this would come from props or URL params
  const recognition = {
    id: 1,
    from: 'sarah.base.eth',
    cultureValue: 'Innovation',
    message: 'Amazing work on the new feature! Your creative approach really made a difference. The way you solved that complex problem was truly innovative and inspiring to the whole team.',
    amount: 50,
    date: '2024-01-15',
    teamName: 'Engineering Team',
    nftImage: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&h=800&fit=crop'
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
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 mb-4 text-white hover:opacity-80 transition-opacity">
          <ArrowLeftIcon size={20} />
          <span className="text-sm font-medium">Back</span>
        </button>
        <h1 className="text-3xl font-bold text-white mb-2">
          Recognition Details
        </h1>
        <p className="text-sm text-white/80">View your achievement</p>
      </div>
      <div className="px-6 py-6 space-y-6">
        {/* NFT Image Card with Embedded Text */}
        <div className="rounded-2xl overflow-hidden border-2 shadow-xl" style={{
        backgroundColor: '#001F3F',
        borderColor: '#48D1CC'
      }}>
          <div className="aspect-square w-full overflow-hidden relative">
            {/* Background Image */}
            <img src={recognition.nftImage} alt="Recognition NFT" className="w-full h-full object-cover" />
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0" style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)'
          }} />
            {/* Embedded Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              {/* Top Section - From & Team */}
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg backdrop-blur-sm" style={{
                backgroundColor: 'rgba(72, 209, 204, 0.2)',
                border: '1px solid rgba(72, 209, 204, 0.4)'
              }}>
                  <UserIcon size={16} style={{
                  color: '#48D1CC'
                }} />
                  <span className="text-sm font-semibold text-white">
                    From: {recognition.from}
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg backdrop-blur-sm" style={{
                backgroundColor: 'rgba(72, 209, 204, 0.2)',
                border: '1px solid rgba(72, 209, 204, 0.4)'
              }}>
                  <UsersIcon size={16} style={{
                  color: '#48D1CC'
                }} />
                  <span className="text-sm font-semibold text-white">
                    {recognition.teamName}
                  </span>
                </div>
              </div>
              {/* Bottom Section - Message */}
              <div className="p-4 rounded-xl backdrop-blur-md" style={{
              backgroundColor: 'rgba(0, 31, 63, 0.8)',
              border: '1px solid rgba(72, 209, 204, 0.3)'
            }}>
                <p className="text-sm text-white leading-relaxed">
                  "{recognition.message}"
                </p>
              </div>
            </div>
          </div>
          {/* Amount Badge */}
          <div className="p-4 flex items-center justify-between">
            <div className="px-4 py-2 rounded-full" style={{
            background: 'linear-gradient(135deg, #FF416C 0%, #FF4B2B 100%)'
          }}>
              <span className="text-2xl font-bold text-white">
                ${recognition.amount}
              </span>
            </div>
            <button className="p-3 rounded-full transition-all hover:scale-110" style={{
            backgroundColor: '#48D1CC20'
          }}>
              <ShareIcon size={20} style={{
              color: '#48D1CC'
            }} />
            </button>
          </div>
        </div>
        {/* Culture Value */}
        <div className="p-6 rounded-xl" style={{
        backgroundColor: '#001F3F',
        borderLeft: '4px solid #48D1CC'
      }}>
          <div className="flex items-center gap-3 mb-2">
            <AwardIcon size={24} style={{
            color: '#48D1CC'
          }} />
            <span className="text-sm font-semibold text-gray-400">
              CULTURE VALUE
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white">
            {recognition.cultureValue}
          </h2>
        </div>
        {/* Date */}
        <div className="p-4 rounded-xl flex items-center gap-4" style={{
        backgroundColor: '#001F3F'
      }}>
          <div className="p-3 rounded-full" style={{
          backgroundColor: '#48D1CC20'
        }}>
            <CalendarIcon size={20} style={{
            color: '#48D1CC'
          }} />
          </div>
          <div>
            <p className="text-xs text-gray-400 mb-1">DATE</p>
            <p className="text-white font-semibold">
              {new Date(recognition.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
            </p>
          </div>
        </div>
        {/* NFT Info */}
        <div className="p-4 rounded-lg" style={{
        backgroundColor: '#001F3F',
        borderLeft: '3px solid #00C2FF'
      }}>
          <p className="text-sm text-gray-300">
            🎨 This recognition is stored as an NFT on the Base blockchain and
            represents your achievement in the team.
          </p>
        </div>
      </div>
    </div>;
}