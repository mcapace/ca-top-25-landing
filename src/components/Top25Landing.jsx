import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, Check, TrendingUp, Users, Target, Award, Sparkles, Zap, Crown } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import GlassCard from './GlassCard';
import FloatingElements from './FloatingElements';

// Import assets
import caLogo from '../assets/logos/calogo.png';
import cigarImage1 from '../assets/images/AdobeStock_500975785_Editorial_Use_Only.jpeg';
import cigarImage2 from '../assets/images/AdobeStock_500975790_Editorial_Use_Only.jpeg';
import cigarImage3 from '../assets/images/AdobeStock_628028007.jpeg';
import cigarImage4 from '../assets/images/AdobeStock_629719974.jpeg';

export default function Top25Landing() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  const handleContact = () => {
    window.location.href = 'mailto:jcohen@mshanken.com?subject=CA%20Top%2025%20Sponsorship%20Inquiry';
  };

  return (
    <>
      <Helmet>
        <title>CA Top 25 Sponsorship - Cigar Aficionado</title>
        <meta name="description" content="Exclusive category partnership opportunity with Cigar Aficionado's Top 25. Limited to 3 sponsors with 850,000+ total reach." />
        <meta property="og:title" content="CA Top 25 Sponsorship - Cigar Aficionado" />
        <meta property="og:description" content="Exclusive category partnership opportunity with Cigar Aficionado's Top 25. Limited to 3 sponsors with 850,000+ total reach." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CA Top 25 Sponsorship - Cigar Aficionado" />
        <meta name="twitter:description" content="Exclusive category partnership opportunity with Cigar Aficionado's Top 25. Limited to 3 sponsors with 850,000+ total reach." />
      </Helmet>
      
      <div className="min-h-screen bg-zinc-900 text-white overflow-x-hidden">
        {/* Hero Section */}
        <header className="relative min-h-screen flex items-center bg-gradient-to-br from-amber-900 via-zinc-900 to-zinc-950 overflow-hidden">
          <FloatingElements />
          
          {/* Background cigar image */}
          <div className="absolute inset-0 opacity-20">
            <img 
              src={cigarImage1} 
              alt="Premium Cigar" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Animated background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-amber-500/10 animate-gradient-xy"></div>
          
          {/* Mouse follower effect */}
          <div 
            className="absolute w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none transition-all duration-300 ease-out"
            style={{
              left: mousePosition.x - 192,
              top: mousePosition.y - 192,
            }}
          />
          
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Logo */}
          <div className="absolute top-8 left-8 z-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src={caLogo} 
                alt="Cigar Aficionado Logo" 
                className="h-16 w-auto filter brightness-110"
              />
            </motion.div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 z-10">
            <AnimatedSection direction="up" delay={0.2}>
              <div className="max-w-4xl">
                <motion.div 
                  className="inline-block bg-gradient-to-r from-amber-600/20 to-amber-500/20 border border-amber-600/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-amber-400 text-sm font-semibold flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    LIMITED AVAILABILITY • 3 SPONSORS ONLY
                  </span>
                </motion.div>
                
                <motion.h1 
                  className="text-6xl lg:text-7xl font-bold mb-8 leading-tight"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Elevate Your Brand with<br />
                  <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent animate-gradient-x">
                    Cigar Aficionado's
                  </span><br />
                  <span className="flex items-center gap-4">
                    Top 25 Sponsorship
                    <Crown className="w-12 h-12 text-amber-500 animate-float" />
                  </span>
                </motion.h1>
                
                <motion.p 
                  className="text-xl lg:text-2xl text-zinc-300 mb-10 leading-relaxed max-w-3xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Exclusive category partnership opportunity. Be part of the most anticipated event in the cigar industry with{' '}
                  <span className="text-amber-400 font-semibold">850,000+ total reach</span>.
                </motion.p>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <motion.button 
                    onClick={handleContact}
                    className="group relative bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 text-center cursor-pointer overflow-hidden"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <span className="relative flex items-center justify-center gap-2">
                      <Zap className="w-5 h-5" />
                      Secure Your Sponsorship
                    </span>
                  </motion.button>
                  
                  <motion.a 
                    href="#package" 
                    className="group bg-zinc-800/50 hover:bg-zinc-700/50 backdrop-blur-sm border border-zinc-700/50 hover:border-amber-500/50 text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 inline-block text-center"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      View Package Details
                      <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </motion.a>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </header>

      {/* Investment Overview */}
      <section className="py-16 bg-zinc-950 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">$25,000</div>
              <div className="text-zinc-400">Net Investment</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">850K+</div>
              <div className="text-zinc-400">Total Reach</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">33%</div>
              <div className="text-zinc-400">Share of Voice</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">3</div>
              <div className="text-zinc-400">Sponsors Maximum</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Partner With CA Top 25?</h2>
            <p className="text-xl text-zinc-400">Position your brand at the pinnacle of cigar culture</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-800 p-8 rounded-lg border border-zinc-700">
              <Target className="w-12 h-12 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Category Exclusivity</h3>
              <p className="text-zinc-400">No direct competition. Your category is protected with guaranteed exclusivity.</p>
            </div>
            
            <div className="bg-zinc-800 p-8 rounded-lg border border-zinc-700">
              <TrendingUp className="w-12 h-12 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Peak Engagement</h3>
              <p className="text-zinc-400">Capture attention during the year's most anticipated cigar content release.</p>
            </div>
            
            <div className="bg-zinc-800 p-8 rounded-lg border border-zinc-700">
              <Users className="w-12 h-12 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Premium Audience</h3>
              <p className="text-zinc-400">Reach affluent, passionate cigar enthusiasts and collectors.</p>
            </div>
            
            <div className="bg-zinc-800 p-8 rounded-lg border border-zinc-700">
              <Award className="w-12 h-12 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Multi-Channel Exposure</h3>
              <p className="text-zinc-400">Comprehensive visibility across digital, email, and premium placements.</p>
            </div>
            
            <div className="bg-zinc-800 p-8 rounded-lg border border-zinc-700">
              <Check className="w-12 h-12 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Editorial Excellence</h3>
              <p className="text-zinc-400">Align with Cigar Aficionado's trusted brand and authority.</p>
            </div>
            
            <div className="bg-zinc-800 p-8 rounded-lg border border-zinc-700">
              <TrendingUp className="w-12 h-12 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Measurable Results</h3>
              <p className="text-zinc-400">500K display impressions plus targeted email reach.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Package Details */}
      <section id="package" className="py-20 bg-zinc-950">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Your Comprehensive Package</h2>
            <p className="text-xl text-zinc-400">Everything you need to make maximum impact</p>
          </div>

          <div className="space-y-6">
            <div className="bg-zinc-900 p-8 rounded-lg border border-amber-600/30">
              <div className="flex items-start gap-4">
                <div className="bg-amber-600/20 p-3 rounded-lg flex-shrink-0">
                  <Check className="w-6 h-6 text-amber-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3">Premium Digital Display</h3>
                  <p className="text-zinc-400 mb-4">33% Share of Voice rotating display banners across all CigarAficionado.com Top 25 pages with premium positioning guaranteed.</p>
                  <div className="bg-zinc-950 px-4 py-2 rounded inline-block">
                    <span className="text-amber-500 font-semibold">500,000 Impressions</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-700">
              <div className="flex items-start gap-4">
                <div className="bg-amber-600/20 p-3 rounded-lg flex-shrink-0">
                  <Check className="w-6 h-6 text-amber-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3">Top 25 Reveal Email Campaign</h3>
                  <p className="text-zinc-400 mb-4">1-2 banner inclusions in the Top 25 Reveal/Excitement Eblast during the most engaged moment of the year.</p>
                  <div className="bg-zinc-950 px-4 py-2 rounded inline-block">
                    <span className="text-amber-500 font-semibold">150,000+ Subscribers</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-700">
              <div className="flex items-start gap-4">
                <div className="bg-amber-600/20 p-3 rounded-lg flex-shrink-0">
                  <Check className="w-6 h-6 text-amber-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3">Cigar Watch Newsletter</h3>
                  <p className="text-zinc-400 mb-4">1 dedicated placement in Cigar Watch Newsletter reaching passionate enthusiasts regularly.</p>
                  <div className="bg-zinc-950 px-4 py-2 rounded inline-block">
                    <span className="text-amber-500 font-semibold">150,000 Subscribers</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-700">
              <div className="flex items-start gap-4">
                <div className="bg-amber-600/20 p-3 rounded-lg flex-shrink-0">
                  <Check className="w-6 h-6 text-amber-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3">Dedicated Email Blast</h3>
                  <p className="text-zinc-400 mb-4">1 Cigar Aficionado dedicated email. Your message, front and center to our most engaged subscribers.</p>
                  <div className="bg-zinc-950 px-4 py-2 rounded inline-block">
                    <span className="text-amber-500 font-semibold">50,000 Subscribers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Cigar Gallery */}
      <section className="py-20 bg-gradient-to-br from-zinc-900 to-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Premium Cigar Experience
              </h2>
              <p className="text-xl text-zinc-400">Showcasing the finest in cigar craftsmanship and luxury</p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <AnimatedSection direction="up" delay={0.1}>
              <GlassCard className="p-0 overflow-hidden group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img 
                    src={cigarImage1} 
                    alt="Premium Cigar Collection" 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold text-lg">Artisan Craftsmanship</h3>
                    <p className="text-sm text-zinc-300">Hand-rolled perfection</p>
                  </div>
                </div>
              </GlassCard>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <GlassCard className="p-0 overflow-hidden group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img 
                    src={cigarImage2} 
                    alt="Luxury Cigar Experience" 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold text-lg">Luxury Experience</h3>
                    <p className="text-sm text-zinc-300">Premium indulgence</p>
                  </div>
                </div>
              </GlassCard>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <GlassCard className="p-0 overflow-hidden group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img 
                    src={cigarImage3} 
                    alt="Cigar Lounge Atmosphere" 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold text-lg">Exclusive Atmosphere</h3>
                    <p className="text-sm text-zinc-300">Refined ambiance</p>
                  </div>
                </div>
              </GlassCard>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.4}>
              <GlassCard className="p-0 overflow-hidden group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img 
                    src={cigarImage4} 
                    alt="Cigar Tasting Session" 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold text-lg">Expert Tasting</h3>
                    <p className="text-sm text-zinc-300">Masterful evaluation</p>
                  </div>
                </div>
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Audience Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Reach Premium Cigar Enthusiasts</h2>
              <p className="text-xl text-zinc-400">Connect with the world's most affluent and passionate cigar aficionados</p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <AnimatedSection direction="up" delay={0.1}>
              <GlassCard className="p-8 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-5xl font-bold text-amber-500 mb-2">High HHI</div>
                <div className="text-zinc-400">Affluent demographic with significant purchasing power</div>
              </GlassCard>
            </AnimatedSection>
            
            <AnimatedSection direction="up" delay={0.2}>
              <GlassCard className="p-8 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-5xl font-bold text-amber-500 mb-2">Engaged</div>
                <div className="text-zinc-400">Passionate collectors and enthusiasts</div>
              </GlassCard>
            </AnimatedSection>
            
            <AnimatedSection direction="up" delay={0.3}>
              <GlassCard className="p-8 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-5xl font-bold text-amber-500 mb-2">Loyal</div>
                <div className="text-zinc-400">Trust in CA's editorial authority</div>
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-amber-900/20 via-zinc-950 to-zinc-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Secure Your Category Today</h2>
            <p className="text-xl text-zinc-400">Limited to 3 sponsors with category exclusivity</p>
          </div>

          <div className="bg-zinc-900 p-8 lg:p-12 rounded-lg border border-zinc-800">
            <div className="text-center">
              <p className="text-xl text-zinc-300 mb-8">
                Contact us to discuss your sponsorship opportunity and secure your exclusive category position.
              </p>
              
              <button
                onClick={handleContact}
                className="bg-amber-600 hover:bg-amber-700 text-white px-12 py-5 rounded-lg font-semibold text-xl transition-colors mb-8 cursor-pointer inline-block"
              >
                Contact Jake Cohen
              </button>

              <div className="pt-8 border-t border-zinc-800">
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-3">
                    <Mail className="w-6 h-6 text-amber-500" />
                    <a href="mailto:jcohen@mshanken.com" className="text-xl text-amber-500 hover:text-amber-400">
                      jcohen@mshanken.com
                    </a>
                  </div>
                  <div className="text-xl text-zinc-300 font-semibold">Jake Cohen</div>
                  <div className="text-zinc-400">M. Shanken Communications</div>
                  <div className="text-sm text-zinc-500 mt-4">
                    825 Eighth Avenue, 33rd Floor<br />
                    New York, NY 10019
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection direction="up">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <img 
                  src={caLogo} 
                  alt="Cigar Aficionado Logo" 
                  className="h-12 w-auto filter brightness-110"
                />
              </div>
              <div className="text-2xl font-bold text-amber-500 mb-2">Cigar Aficionado</div>
              <div className="text-zinc-400 mb-4">M. Shanken Communications, Inc.</div>
              <div className="text-sm text-zinc-500">
                © 2025 M. Shanken Communications. All rights reserved.
              </div>
            </div>
          </AnimatedSection>
        </div>
      </footer>
    </div>
  );
}
