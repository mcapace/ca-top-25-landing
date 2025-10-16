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
        relative backdrop-blur-md bg-charcoal-900/20 border border-platinum-600/20 rounded-2xl
        ${glow ? 'shadow-elegant-xl shadow-champagne-500/15' : 'shadow-elegant'}
        ${hover ? 'hover:bg-charcoal-900/30 hover:border-champagne-500/30' : ''}
        transition-all duration-300 ease-out
        ${className}
      `}
      whileHover={hover ? { 
        scale: 1.01,
        y: -2,
        transition: { duration: 0.3, ease: "easeOut" }
      } : {}}
      whileTap={hover ? { scale: 0.99 } : {}}
      {...props}
    >
      {glow && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-champagne-500/10 via-transparent to-champagne-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;
