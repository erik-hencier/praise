import React from 'react';
import { SparklesIcon, AwardIcon } from 'lucide-react';
export function PraiseLogo() {
  return <div className="flex items-center justify-center" style={{
    width: '600px',
    height: '600px',
    background: 'linear-gradient(135deg, #0D1B2A 0%, #001F3F 100%)',
    position: 'relative',
    overflow: 'hidden'
  }}>
      {/* Large decorative gradient circle */}
      <div style={{
      position: 'absolute',
      width: '500px',
      height: '500px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, #FF416C40 0%, #FF4B2B20 40%, transparent 70%)',
      top: '50px',
      left: '50px',
      filter: 'blur(40px)'
    }} />
      {/* Main content */}
      <div className="text-center relative z-10">
        {/* Large gradient badge */}
        <div className="mx-auto mb-6 p-8 rounded-full inline-block" style={{
        background: 'linear-gradient(135deg, #FF416C 0%, #FF4B2B 100%)',
        boxShadow: '0 20px 60px rgba(255, 65, 108, 0.5), 0 0 80px rgba(255, 75, 43, 0.3)'
      }}>
          <SparklesIcon size={64} style={{
          color: '#FFFFFF'
        }} />
        </div>
        {/* Title with gradient */}
        <h1 className="font-bold mb-3" style={{
        fontSize: '96px',
        background: 'linear-gradient(135deg, #FF416C 0%, #FF4B2B 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        letterSpacing: '-2px',
        filter: 'drop-shadow(0 0 40px rgba(255, 65, 108, 0.4))'
      }}>
          Praise
        </h1>
        {/* Subtitle */}
        <p className="text-lg font-semibold mb-8" style={{
        color: '#E0E0E0',
        letterSpacing: '3px'
      }}>
          RECOGNIZE • REWARD • INSPIRE
        </p>
        {/* Action button showcase */}
        <button className="px-8 py-4 rounded-full font-bold text-xl text-white shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 mb-6" style={{
        background: 'linear-gradient(135deg, #FF416C 0%, #FF4B2B 100%)',
        boxShadow: '0 10px 40px rgba(255, 65, 108, 0.4), 0 0 60px rgba(255, 75, 43, 0.2)'
      }}>
          Give Praise
        </button>
        {/* Gradient line decorations */}
        <div className="flex justify-center gap-3 mb-6">
          <div style={{
          width: '80px',
          height: '6px',
          background: 'linear-gradient(90deg, #FF416C 0%, #FF4B2B 100%)',
          borderRadius: '3px',
          boxShadow: '0 0 20px rgba(255, 65, 108, 0.5)'
        }} />
          <div style={{
          width: '80px',
          height: '6px',
          background: 'linear-gradient(90deg, #FF4B2B 0%, #FF416C 100%)',
          borderRadius: '3px',
          boxShadow: '0 0 20px rgba(255, 75, 43, 0.5)'
        }} />
        </div>
        {/* Bottom text */}
        <p className="text-xs font-bold" style={{
        color: '#48D1CC',
        letterSpacing: '2px'
      }}>
          POWERED BY BASE
        </p>
      </div>
      {/* Corner gradient accents */}
      <div style={{
      position: 'absolute',
      top: '0',
      left: '0',
      width: '120px',
      height: '120px',
      background: 'linear-gradient(135deg, #FF416C 0%, transparent 100%)',
      opacity: 0.3,
      borderTopLeftRadius: '20px'
    }} />
      <div style={{
      position: 'absolute',
      bottom: '0',
      right: '0',
      width: '120px',
      height: '120px',
      background: 'linear-gradient(315deg, #FF4B2B 0%, transparent 100%)',
      opacity: 0.3,
      borderBottomRightRadius: '20px'
    }} />
    </div>;
}