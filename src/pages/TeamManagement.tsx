import React, { useState } from 'react';
import { UsersIcon, EditIcon, CopyIcon, CheckIcon, SaveIcon, ArrowLeftIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export function TeamManagement() {
  const navigate = useNavigate();
  const [teamName, setTeamName] = useState('Engineering Team');
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(teamName);
  const [copied, setCopied] = useState(false);
  const inviteCode = 'PRAISE2024XYZ';
  const handleSave = () => {
    setTeamName(editedName);
    setIsEditing(false);
  };
  const handleCopyCode = () => {
    navigator.clipboard.writeText(inviteCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const teamMembers = [{
    name: 'sarah.base.eth',
    role: 'Admin',
    joined: '2024-01-01'
  }, {
    name: 'mike.base.eth',
    role: 'Member',
    joined: '2024-01-05'
  }, {
    name: 'jessica.base.eth',
    role: 'Member',
    joined: '2024-01-10'
  }];
  return <div className="w-full min-h-screen" style={{
    backgroundColor: '#0D1B2A'
  }}>
      <div className="w-full pt-16 pb-8 px-6" style={{
      background: 'linear-gradient(135deg, #FF416C 0%, #FF4B2B 100%)',
      borderBottomLeftRadius: '2rem',
      borderBottomRightRadius: '2rem'
    }}>
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 mb-4 text-white hover:opacity-80 transition-opacity">
          <ArrowLeftIcon size={20} />
          <span className="text-sm font-medium">Back</span>
        </button>
        <h1 className="text-3xl font-bold text-white mb-2">Team Management</h1>
        <p className="text-sm text-white/80">Manage your team settings</p>
      </div>
      <div className="px-6 py-6 space-y-6">
        {/* Team Name Section */}
        <div className="p-6 rounded-xl" style={{
        backgroundColor: '#001F3F',
        borderLeft: '4px solid #48D1CC'
      }}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <UsersIcon size={24} style={{
              color: '#48D1CC'
            }} />
              <h2 className="text-lg font-semibold text-white">Team Name</h2>
            </div>
            {!isEditing && <button onClick={() => setIsEditing(true)} className="p-2 rounded-lg transition-all hover:scale-110" style={{
            backgroundColor: '#48D1CC20'
          }}>
                <EditIcon size={20} style={{
              color: '#48D1CC'
            }} />
              </button>}
          </div>
          {isEditing ? <div className="space-y-3">
              <input type="text" value={editedName} onChange={e => setEditedName(e.target.value)} className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors" style={{
            backgroundColor: '#0D1B2A',
            borderColor: '#48D1CC',
            color: '#FFFFFF'
          }} />
              <div className="flex gap-2">
                <button onClick={handleSave} className="flex-1 py-2 rounded-lg font-semibold text-white transition-all hover:scale-105 flex items-center justify-center gap-2" style={{
              background: 'linear-gradient(135deg, #FF416C 0%, #FF4B2B 100%)'
            }}>
                  <SaveIcon size={18} />
                  Save
                </button>
                <button onClick={() => {
              setIsEditing(false);
              setEditedName(teamName);
            }} className="px-4 py-2 rounded-lg font-semibold border-2 transition-all" style={{
              borderColor: '#48D1CC',
              color: '#48D1CC'
            }}>
                  Cancel
                </button>
              </div>
            </div> : <p className="text-2xl font-bold text-white">{teamName}</p>}
        </div>
        {/* Invite Code Section */}
        <div className="p-6 rounded-xl" style={{
        backgroundColor: '#001F3F'
      }}>
          <h2 className="text-lg font-semibold text-white mb-4">Invite Code</h2>
          <p className="text-sm text-gray-400 mb-4">
            Share this code with new team members
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
            backgroundColor: copied ? '#48D1CC' : '#0D1B2A',
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
        {/* Team Members Section */}
        <div className="p-6 rounded-xl" style={{
        backgroundColor: '#001F3F'
      }}>
          <h2 className="text-lg font-semibold text-white mb-4">
            Team Members
          </h2>
          <div className="space-y-3">
            {teamMembers.map((member, index) => <div key={index} className="p-4 rounded-lg flex items-center justify-between" style={{
            backgroundColor: '#0D1B2A'
          }}>
                <div>
                  <p className="font-semibold text-white">{member.name}</p>
                  <p className="text-sm text-gray-400">
                    Joined {member.joined}
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{
              backgroundColor: member.role === 'Admin' ? '#FF416C20' : '#48D1CC20',
              color: member.role === 'Admin' ? '#FF416C' : '#48D1CC'
            }}>
                  {member.role}
                </span>
              </div>)}
          </div>
        </div>
      </div>
    </div>;
}