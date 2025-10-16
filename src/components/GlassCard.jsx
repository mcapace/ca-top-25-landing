import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ 
  children, 
  className = '', 
  hover = true,
  glow = false,
  ...props 
}) => {
  return (
    <motion.div
      className={`
        relative backdrop-blur-md bg-white/5 border border-white/10 rounded-xl
        ${glow ? 'shadow-2xl shadow-amber-500/20' : 'shadow-xl'}
        ${hover ? 'hover:bg-white/10 hover:border-amber-500/30' : ''}
        transition-all duration-300 ease-out
        ${className}
      `}
      whileHover={hover ? { 
        scale: 1.02,
        y: -5,
        transition: { duration: 0.2 }
      } : {}}
      whileTap={hover ? { scale: 0.98 } : {}}
      {...props}
    >
      {glow && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-500/20 via-transparent to-amber-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;
