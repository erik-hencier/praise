import React, { useState } from 'react';
import { UsersIcon, PlusIcon, KeyIcon, ArrowRightIcon, CheckIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export function SignupFlow() {
  const navigate = useNavigate();
  const [choice, setChoice] = useState<'create' | 'join' | null>(null);
  const [inviteCode, setInviteCode] = useState('');
  const [teamName, setTeamName] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const handleCreateTeam = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!teamName.trim()) return;
    setIsCreating(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Creating team:', teamName);
      setIsCreating(false);
      navigate('/dashboard');
    }, 1500);
  };
  const handleJoinTeam = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Joining team with code:', inviteCode);
    navigate('/dashboard');
  };
  return <div className="w-full min-h-screen flex items-center justify-center p-8" style={{
    backgroundColor: '#0D1B2A'
  }}>
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome to Praise
          </h1>
          <p className="text-gray-400">Choose how you'd like to get started</p>
        </div>
        {!choice ? <div className="space-y-4">
            <button onClick={() => setChoice('create')} className="w-full p-6 rounded-xl border-2 transition-all hover:scale-105" style={{
          backgroundColor: '#001F3F',
          borderColor: '#48D1CC'
        }}>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full" style={{
              background: 'linear-gradient(135deg, #FF416C 0%, #FF4B2B 100%)'
            }}>
                  <PlusIcon size={24} className="text-white" />
                </div>
                <div className="text-left flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">
                    Create a Team
                  </h3>
                  <p className="text-sm text-gray-400">
                    Start a new team and invite members
                  </p>
                </div>
                <ArrowRightIcon size={20} style={{
              color: '#48D1CC'
            }} />
              </div>
            </button>
            <button onClick={() => setChoice('join')} className="w-full p-6 rounded-xl border-2 transition-all hover:scale-105" style={{
          backgroundColor: '#001F3F',
          borderColor: '#48D1CC'
        }}>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full" style={{
              backgroundColor: '#48D1CC20'
            }}>
                  <KeyIcon size={24} style={{
                color: '#48D1CC'
              }} />
                </div>
                <div className="text-left flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">
                    Join a Team
                  </h3>
                  <p className="text-sm text-gray-400">
                    Enter an invite code to join
                  </p>
                </div>
                <ArrowRightIcon size={20} style={{
              color: '#48D1CC'
            }} />
              </div>
            </button>
          </div> : choice === 'create' ? <div className="p-6 rounded-xl" style={{
        backgroundColor: '#001F3F'
      }}>
            <button onClick={() => setChoice(null)} className="text-sm text-gray-400 hover:text-white mb-4">
              ← Back
            </button>
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{
            background: 'linear-gradient(135deg, #FF416C 0%, #FF4B2B 100%)',
            boxShadow: '0 10px 30px rgba(255, 65, 108, 0.3)'
          }}>
                <UsersIcon size={32} className="text-white" />
              </div>
              <h2 className="text-xl font-bold text-white mb-2">
                Create Your Team
              </h2>
              <p className="text-gray-400">You'll be the team admin</p>
            </div>
            <form onSubmit={handleCreateTeam} className="space-y-6">
              <div>
                <label htmlFor="teamName" className="block text-sm font-medium text-gray-300 mb-2">
                  Team Name
                </label>
                <input id="teamName" type="text" value={teamName} onChange={e => setTeamName(e.target.value)} placeholder="e.g., Marketing Team, Engineering, Sales..." className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none transition-all" style={{
              backgroundColor: '#0D1B2A',
              borderWidth: '2px',
              borderStyle: 'solid',
              borderColor: teamName ? '#48D1CC' : '#2A3F5F'
            }} required maxLength={50} autoFocus />
                <p className="mt-2 text-xs text-gray-500">
                  {teamName.length}/50 characters
                </p>
              </div>
              <button type="submit" disabled={!teamName.trim() || isCreating} className="w-full py-3 px-4 rounded-lg font-semibold text-white transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2" style={{
            background: teamName.trim() ? 'linear-gradient(135deg, #FF416C 0%, #FF4B2B 100%)' : '#2A3F5F',
            boxShadow: teamName.trim() ? '0 10px 30px rgba(255, 65, 108, 0.3)' : 'none'
          }}>
                {isCreating ? <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Creating Team...
                  </> : <>
                    <CheckIcon size={20} />
                    Create Team
                  </>}
              </button>
            </form>
            <div className="mt-6 p-4 rounded-lg" style={{
          backgroundColor: '#0D1B2A',
          borderLeft: '4px solid #48D1CC'
        }}>
              <p className="text-sm text-gray-300">
                <span className="font-semibold text-cyan-400">Pro tip:</span>{' '}
                You can always change your team name later in settings.
              </p>
            </div>
          </div> : <div className="p-6 rounded-xl" style={{
        backgroundColor: '#001F3F'
      }}>
            <button onClick={() => setChoice(null)} className="text-sm text-gray-400 hover:text-white mb-4">
              ← Back
            </button>
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{
            backgroundColor: '#48D1CC20'
          }}>
                <KeyIcon size={32} style={{
              color: '#48D1CC'
            }} />
              </div>
              <h2 className="text-xl font-bold text-white mb-2">Join a Team</h2>
              <p className="text-gray-400">
                Enter the invite code from your admin
              </p>
            </div>
            <form onSubmit={handleJoinTeam} className="space-y-4">
              <input type="text" value={inviteCode} onChange={e => setInviteCode(e.target.value)} placeholder="Enter invite code" className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors text-center text-lg font-mono tracking-wider" style={{
            backgroundColor: '#0D1B2A',
            borderColor: '#48D1CC40',
            color: '#FFFFFF'
          }} required />
              <button type="submit" className="w-full py-3 rounded-lg font-semibold text-white transition-all transform hover:scale-105" style={{
            background: 'linear-gradient(135deg, #FF416C 0%, #FF4B2B 100%)'
          }}>
                Join Team
              </button>
            </form>
          </div>}
      </div>
    </div>;
}