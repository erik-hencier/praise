import React, { useState } from 'react';
import { UsersIcon, CheckIcon, ArrowLeftIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export function CreateTeam() {
  const navigate = useNavigate();
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
  return <div className="w-full min-h-screen flex items-center justify-center p-8" style={{
    backgroundColor: '#0D1B2A'
  }}>
      <div className="w-full max-w-md">
        {/* Back button */}
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 mb-8 text-gray-400 hover:text-white transition-colors">
          <ArrowLeftIcon size={20} />
          <span>Back</span>
        </button>
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{
          background: 'linear-gradient(135deg, #FF416C 0%, #FF4B2B 100%)',
          boxShadow: '0 10px 30px rgba(255, 65, 108, 0.3)'
        }}>
            <UsersIcon size={32} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Create Your Team
          </h1>
          <p className="text-gray-400">
            Give your team a name to get started with Praise
          </p>
        </div>
        {/* Form */}
        <form onSubmit={handleCreateTeam} className="space-y-6">
          <div>
            <label htmlFor="teamName" className="block text-sm font-medium text-gray-300 mb-2">
              Team Name
            </label>
            <input id="teamName" type="text" value={teamName} onChange={e => setTeamName(e.target.value)} placeholder="e.g., Marketing Team, Engineering, Sales..." className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all" style={{
            backgroundColor: '#1A2332',
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: teamName ? '#FF416C' : '#2A3F5F'
          }} required maxLength={50} autoFocus />
            <p className="mt-2 text-xs text-gray-500">
              {teamName.length}/50 characters
            </p>
          </div>
          {/* Create button */}
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
        {/* Info box */}
        <div className="mt-8 p-4 rounded-lg" style={{
        backgroundColor: '#1A2332',
        borderLeft: '4px solid #48D1CC'
      }}>
          <p className="text-sm text-gray-300">
            <span className="font-semibold text-cyan-400">Pro tip:</span> You
            can always change your team name later in settings.
          </p>
        </div>
      </div>
    </div>;
}