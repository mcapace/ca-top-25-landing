import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, Check, TrendingUp, Users, Target, Award, Sparkles, Zap, Crown, Gem, Star, Shield, Globe, Diamond, Infinity } from 'lucide-react';
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
        <title>Top 25 Cigars of the Year Sponsorship - Cigar Aficionado</title>
        <meta name="description" content="Partner with Cigar Aficionado's most anticipated annual feature - Top 25 Cigars of the Year. Exclusive sponsorship opportunities reaching 850,000+ premium cigar enthusiasts worldwide." />
        <meta property="og:title" content="Top 25 Cigars of the Year Sponsorship - Cigar Aficionado" />
        <meta property="og:description" content="Partner with Cigar Aficionado's most anticipated annual feature - Top 25 Cigars of the Year. Exclusive sponsorship opportunities reaching 850,000+ premium cigar enthusiasts worldwide." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top 25 Cigars of the Year Sponsorship - Cigar Aficionado" />
        <meta name="twitter:description" content="Partner with Cigar Aficionado's most anticipated annual feature - Top 25 Cigars of the Year. Exclusive sponsorship opportunities reaching 850,000+ premium cigar enthusiasts worldwide." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-charcoal-900 via-platinum-800 to-charcoal-900 text-ivory-50 overflow-x-hidden font-inter">
        {/* Hero Section */}
        <header className="relative min-h-screen flex items-center bg-gradient-to-br from-charcoal-900 via-platinum-800 to-charcoal-900 overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-r from-champagne-500/10 via-platinum-400/5 via-transparent to-champagne-500/10 animate-gradient-xy"></div>
          
          {/* Mouse follower effect */}
          <div 
            className="absolute w-96 h-96 bg-champagne-500/6 rounded-full blur-3xl pointer-events-none transition-all duration-500 ease-out"
            style={{
              left: mousePosition.x - 192,
              top: mousePosition.y - 192,
            }}
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          
          {/* Logo */}
          <div className="absolute top-6 left-6 z-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="backdrop-blur-sm bg-white/10 rounded-lg p-3 border border-white/20"
            >
              <img 
                src={caLogo} 
                alt="Cigar Aficionado Logo" 
                className="h-8 w-auto filter brightness-0 invert"
              />
            </motion.div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 z-10">
            <AnimatedSection direction="up" delay={0.2}>
              <div className="max-w-4xl">
                <motion.div 
                  className="inline-block bg-gradient-to-r from-champagne-600/15 to-platinum-400/10 border border-champagne-600/20 rounded-full px-8 py-4 mb-8 backdrop-blur-md shadow-elegant"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-champagne-400 text-sm font-medium flex items-center gap-3 tracking-wide">
                    <Diamond className="w-4 h-4" />
                    THE MOST ANTICIPATED CIGAR EVENT OF THE YEAR • 3 EXCLUSIVE SPONSORS
                  </span>
                </motion.div>
                
                <motion.h1 
                  className="text-5xl lg:text-6xl font-bold mb-8 leading-tight font-playfair"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Partner with the<br />
                  <span className="bg-gradient-to-r from-champagne-400 via-platinum-300 to-champagne-500 bg-clip-text text-transparent animate-gradient-x">
                    Top 25 Cigars of the Year
                  </span><br />
                  <span className="flex items-center gap-4 text-3xl lg:text-4xl mt-6 font-playfair">
                    <Gem className="w-10 h-10 text-champagne-400 animate-float" />
                    The Industry's Most Coveted List
                  </span>
                </motion.h1>
                
                <motion.p 
                  className="text-lg lg:text-xl text-platinum-200 mb-10 leading-relaxed max-w-3xl font-crimson"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Join the most prestigious cigar publication in the world for the industry's most anticipated annual feature. 
                  Reach{' '}
                  <span className="text-champagne-400 font-semibold">850,000+ premium cigar connoisseurs</span> who eagerly await 
                  Cigar Aficionado's definitive ranking of the finest cigars crafted each year.
                </motion.p>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <motion.button 
                    onClick={handleContact}
                    className="group relative bg-gradient-to-r from-champagne-600 to-champagne-700 hover:from-champagne-500 hover:to-champagne-600 text-charcoal-900 px-12 py-6 rounded-xl font-semibold text-lg transition-all duration-300 text-center cursor-pointer overflow-hidden shadow-elegant-lg"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-platinum-400 to-champagne-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <span className="relative flex items-center justify-center gap-2">
                      <Star className="w-5 h-5" />
                      Secure Your Top 25 Partnership
                    </span>
                  </motion.button>
                  
                  <motion.a 
                    href="#package" 
                    className="group bg-platinum-800/30 hover:bg-platinum-700/40 backdrop-blur-md border border-platinum-600/30 hover:border-champagne-500/50 text-ivory-50 px-12 py-6 rounded-xl font-semibold text-lg transition-all duration-300 inline-block text-center shadow-elegant"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      Explore Partnership Package
                      <Infinity className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </motion.a>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </header>

      {/* Investment Overview */}
      <section className="py-20 bg-charcoal-900 border-y border-platinum-700/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <AnimatedSection direction="up" delay={0.1}>
              <GlassCard className="p-8 text-center h-28 flex flex-col justify-center">
                <div className="text-3xl font-bold text-champagne-500 mb-1 font-playfair">$25,000</div>
                <div className="text-sm text-platinum-300 font-medium">Net Investment</div>
              </GlassCard>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.2}>
              <GlassCard className="p-8 text-center h-28 flex flex-col justify-center">
                <div className="text-3xl font-bold text-champagne-500 mb-1 font-playfair">850K+</div>
                <div className="text-sm text-platinum-300 font-medium">Total Reach</div>
              </GlassCard>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.3}>
              <GlassCard className="p-8 text-center h-28 flex flex-col justify-center">
                <div className="text-3xl font-bold text-champagne-500 mb-1 font-playfair">33%</div>
                <div className="text-sm text-platinum-300 font-medium">Share of Voice</div>
              </GlassCard>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.4}>
              <GlassCard className="p-8 text-center h-28 flex flex-col justify-center">
                <div className="text-3xl font-bold text-champagne-500 mb-1 font-playfair">3</div>
                <div className="text-sm text-platinum-300 font-medium">Sponsors Maximum</div>
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-24 bg-charcoal-800">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-playfair text-ivory-50">Why Partner With the Top 25 Cigars of the Year?</h2>
              <p className="text-lg lg:text-xl text-platinum-200 max-w-3xl mx-auto font-crimson leading-relaxed">
                Align your brand with the industry's most prestigious and anticipated annual ranking. 
                When Cigar Aficionado names the Top 25 Cigars of the Year, the entire cigar world pays attention.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection direction="up" delay={0.1}>
              <GlassCard className="p-8 text-center hover:scale-105 transition-all duration-300 h-72 flex flex-col">
                <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-champagne-500/20 to-platinum-400/20 rounded-full flex items-center justify-center border border-champagne-500/30">
                  <Shield className="w-7 h-7 text-champagne-400" />
                </div>
                <h3 className="text-lg font-semibold mb-3 font-playfair text-ivory-50">Category Exclusivity</h3>
                <p className="text-sm text-platinum-200 font-crimson leading-relaxed flex-grow">Be the only brand in your category associated with the industry's most prestigious ranking. No competition, maximum impact.</p>
              </GlassCard>
            </AnimatedSection>
            
            <AnimatedSection direction="up" delay={0.2}>
              <GlassCard className="p-8 text-center hover:scale-105 transition-all duration-300 h-72 flex flex-col">
                <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-champagne-500/20 to-platinum-400/20 rounded-full flex items-center justify-center border border-champagne-500/30">
                  <Gem className="w-7 h-7 text-champagne-400" />
                </div>
                <h3 className="text-lg font-semibold mb-3 font-playfair text-ivory-50">Peak Cigar Season</h3>
                <p className="text-sm text-platinum-200 font-crimson leading-relaxed flex-grow">The Top 25 announcement is the most anticipated moment in cigar culture. Your brand shares center stage.</p>
              </GlassCard>
            </AnimatedSection>
            
            <AnimatedSection direction="up" delay={0.3}>
              <GlassCard className="p-8 text-center hover:scale-105 transition-all duration-300 h-72 flex flex-col">
                <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-champagne-500/20 to-platinum-400/20 rounded-full flex items-center justify-center border border-champagne-500/30">
                  <Crown className="w-7 h-7 text-champagne-400" />
                </div>
                <h3 className="text-lg font-semibold mb-3 font-playfair text-ivory-50">Elite Cigar Connoisseurs</h3>
                <p className="text-sm text-platinum-200 font-crimson leading-relaxed flex-grow">Reach affluent collectors, connoisseurs, and industry leaders who drive premium cigar sales.</p>
              </GlassCard>
            </AnimatedSection>
            
            <AnimatedSection direction="up" delay={0.4}>
              <GlassCard className="p-8 text-center hover:scale-105 transition-all duration-300 h-72 flex flex-col">
                <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-champagne-500/20 to-platinum-400/20 rounded-full flex items-center justify-center border border-champagne-500/30">
                  <Globe className="w-7 h-7 text-champagne-400" />
                </div>
                <h3 className="text-lg font-semibold mb-3 font-playfair text-ivory-50">Multi-Channel Dominance</h3>
                <p className="text-sm text-platinum-200 font-crimson leading-relaxed flex-grow">Comprehensive visibility across digital, email, and premium placements during peak engagement.</p>
              </GlassCard>
            </AnimatedSection>
            
            <AnimatedSection direction="up" delay={0.5}>
              <GlassCard className="p-8 text-center hover:scale-105 transition-all duration-300 h-72 flex flex-col">
                <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-champagne-500/20 to-platinum-400/20 rounded-full flex items-center justify-center border border-champagne-500/30">
                  <Award className="w-7 h-7 text-champagne-400" />
                </div>
                <h3 className="text-lg font-semibold mb-3 font-playfair text-ivory-50">Editorial Authority</h3>
                <p className="text-sm text-platinum-200 font-crimson leading-relaxed flex-grow">Leverage Cigar Aficionado's unmatched credibility and influence in the premium cigar market.</p>
              </GlassCard>
            </AnimatedSection>
            
            <AnimatedSection direction="up" delay={0.6}>
              <GlassCard className="p-8 text-center hover:scale-105 transition-all duration-300 h-72 flex flex-col">
                <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-champagne-500/20 to-platinum-400/20 rounded-full flex items-center justify-center border border-champagne-500/30">
                  <Star className="w-7 h-7 text-champagne-400" />
                </div>
                <h3 className="text-lg font-semibold mb-3 font-playfair text-ivory-50">Proven Performance</h3>
                <p className="text-sm text-platinum-200 font-crimson leading-relaxed flex-grow">500K+ display impressions, 150K+ email reach, and premium placement guarantees.</p>
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Package Details */}
      <section id="package" className="py-20 bg-charcoal-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-playfair">Your Top 25 Partnership Package</h2>
            <p className="text-xl lg:text-2xl text-zinc-400 max-w-3xl mx-auto font-crimson">
              A comprehensive sponsorship package designed to maximize your brand's visibility during 
              the most anticipated moment in cigar culture.
            </p>
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
      <section className="py-20 bg-charcoal-800">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-playfair text-ivory-50">Reach Premium Cigar Connoisseurs</h2>
              <p className="text-lg text-platinum-300 font-crimson">Connect with the world's most affluent and passionate cigar connoisseurs</p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <AnimatedSection direction="up" delay={0.1}>
              <GlassCard className="p-8 text-center hover:scale-105 transition-transform duration-300 h-36 flex flex-col justify-center">
                <div className="text-3xl font-bold text-champagne-500 mb-2 font-playfair">High HHI</div>
                <div className="text-sm text-platinum-300 font-medium">Affluent demographic with significant purchasing power</div>
              </GlassCard>
            </AnimatedSection>
            
            <AnimatedSection direction="up" delay={0.2}>
              <GlassCard className="p-8 text-center hover:scale-105 transition-transform duration-300 h-36 flex flex-col justify-center">
                <div className="text-3xl font-bold text-champagne-500 mb-2 font-playfair">Engaged</div>
                <div className="text-sm text-platinum-300 font-medium">Passionate collectors and connoisseurs</div>
              </GlassCard>
            </AnimatedSection>
            
            <AnimatedSection direction="up" delay={0.3}>
              <GlassCard className="p-8 text-center hover:scale-105 transition-transform duration-300 h-36 flex flex-col justify-center">
                <div className="text-3xl font-bold text-champagne-500 mb-2 font-playfair">Loyal</div>
                <div className="text-sm text-platinum-300 font-medium">Trust in CA's editorial authority</div>
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-champagne-900/20 via-charcoal-800 to-charcoal-900">
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
      <footer className="bg-charcoal-900 border-t border-platinum-700/20 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection direction="up">
            <div className="text-center">
              <div className="flex justify-center mb-8">
                <div className="backdrop-blur-sm bg-white/10 rounded-xl p-3 border border-white/20">
                  <img 
                    src={caLogo} 
                    alt="Cigar Aficionado Logo" 
                    className="h-8 w-auto filter brightness-0 invert"
                  />
                </div>
              </div>
              <div className="text-2xl font-bold text-champagne-500 mb-3 font-playfair">Cigar Aficionado</div>
              <div className="text-platinum-400 mb-6 font-medium">M. Shanken Communications, Inc.</div>
              <div className="text-sm text-platinum-500">
                © 2025 M. Shanken Communications. All rights reserved.
              </div>
            </div>
          </AnimatedSection>
        </div>
      </footer>
      </div>
    </>
  );
}
