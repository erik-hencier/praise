import React, { useState } from 'react';
import { MailIcon, LockIcon, EyeIcon, EyeOffIcon, UserIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PraiseLogo } from './components/PraiseLogo';
export function App() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Login attempt:', {
        email,
        password
      });
      navigate('/dashboard');
    } else {
      console.log('Signup attempt:', {
        name,
        email,
        password
      });
      navigate('/signup-flow');
    }
  };
  return <div className="w-full min-h-screen flex flex-col items-center justify-center p-8" style={{
    backgroundColor: '#0D1B2A'
  }}>
      <PraiseLogo />
      <div className="w-full max-w-md mt-8 p-8 rounded-2xl shadow-2xl" style={{
      backgroundColor: '#001F3F'
    }}>
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserIcon size={20} style={{
                color: '#48D1CC'
              }} />
                </div>
                <input id="name" type="text" value={name} onChange={e => setName(e.target.value)} className="w-full pl-10 pr-4 py-3 rounded-lg border-2 focus:outline-none transition-colors" style={{
              backgroundColor: '#0D1B2A',
              borderColor: '#48D1CC40',
              color: '#FFFFFF'
            }} placeholder="John Doe" required={!isLogin} />
              </div>
            </div>}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MailIcon size={20} style={{
                color: '#48D1CC'
              }} />
              </div>
              <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full pl-10 pr-4 py-3 rounded-lg border-2 focus:outline-none transition-colors" style={{
              backgroundColor: '#0D1B2A',
              borderColor: '#48D1CC40',
              color: '#FFFFFF'
            }} placeholder="you@example.com" required />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <LockIcon size={20} style={{
                color: '#48D1CC'
              }} />
              </div>
              <input id="password" type={showPassword ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} className="w-full pl-10 pr-12 py-3 rounded-lg border-2 focus:outline-none transition-colors" style={{
              backgroundColor: '#0D1B2A',
              borderColor: '#48D1CC40',
              color: '#FFFFFF'
            }} placeholder="••••••••" required />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center">
                {showPassword ? <EyeOffIcon size={20} style={{
                color: '#48D1CC'
              }} /> : <EyeIcon size={20} style={{
                color: '#48D1CC'
              }} />}
              </button>
            </div>
          </div>
          <button type="submit" className="w-full py-3 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105" style={{
          background: 'linear-gradient(135deg, #FF416C 0%, #FF4B2B 100%)'
        }}>
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>
        <div className="mt-6 text-center">
          <button onClick={() => setIsLogin(!isLogin)} className="text-sm hover:underline" style={{
          color: '#48D1CC'
        }}>
            {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
          </button>
        </div>
      </div>
    </div>;
}