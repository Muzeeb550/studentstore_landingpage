import React from 'react'
import { motion } from 'framer-motion'

function Hero() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }

  return (
    <section style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
      color: 'white',
      padding: '2rem 1rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated background circles */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
        className="hero-circle-1"
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          top: '-10%',
          right: '-10%',
          filter: 'blur(40px)',
          pointerEvents: 'none'
        }}
      />
      
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear'
        }}
        className="hero-circle-2"
        style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          bottom: '-10%',
          left: '-10%',
          filter: 'blur(40px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container text-center" style={{ 
        position: 'relative', 
        zIndex: 1,
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            style={{ 
              fontSize: 'clamp(1.75rem, 5vw, 3.5rem)',
              marginBottom: '1rem',
              color: 'white',
              fontWeight: '800',
              textShadow: '0 2px 10px rgba(0,0,0,0.2)',
              lineHeight: '1.2',
              padding: '0 1rem'
            }}
            animate={{
              textShadow: [
                '0 2px 10px rgba(0,0,0,0.2)',
                '0 5px 20px rgba(0,0,0,0.3)',
                '0 2px 10px rgba(0,0,0,0.2)'
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            StudentStore - By Students, For Students
          </motion.h1>
        </motion.div>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ 
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            marginBottom: '2rem',
            color: 'rgba(255, 255, 255, 0.95)',
            maxWidth: '700px',
            margin: '0 auto 2rem',
            lineHeight: '1.6',
            padding: '0 1rem'
          }}
        >
          Discover, Review & Buy Products Curated by Student Community
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '2rem',
            padding: '0 1rem'
          }}
        >
          <motion.a 
            href="#download" 
            className="btn btn-primary hero-btn" 
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2rem)',
              fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
              background: 'white',
              color: '#8B5CF6',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
              borderRadius: '0.75rem',
              fontWeight: '700',
              textDecoration: 'none',
              display: 'inline-block',
              whiteSpace: 'nowrap',
              minWidth: '160px',
              textAlign: 'center'
            }}
          >
            📥 Download App
          </motion.a>
          <motion.a 
            href="https://studentstore-zeta.vercel.app" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary hero-btn"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2rem)',
              fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
              background: 'transparent',
              border: '2px solid white',
              color: 'white',
              borderRadius: '0.75rem',
              fontWeight: '700',
              textDecoration: 'none',
              display: 'inline-block',
              whiteSpace: 'nowrap',
              minWidth: '160px',
              textAlign: 'center'
            }}
          >
            🚀 Launch Web App
          </motion.a>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          style={{
            marginTop: 'clamp(2rem, 5vw, 3rem)',
            display: 'flex',
            gap: 'clamp(1rem, 3vw, 2rem)',
            justifyContent: 'center',
            flexWrap: 'wrap',
            padding: '0 1rem'
          }}
        >
          {[
            // { number: '1000+', label: 'Products' },
            // { number: '500+', label: 'Reviews' },
            // { number: '100+', label: 'Skills' }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              variants={scaleIn}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="hero-stat-card"
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                padding: 'clamp(1rem, 3vw, 1.5rem) clamp(1.5rem, 4vw, 2rem)',
                borderRadius: '1rem',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                minWidth: 'clamp(100px, 20vw, 140px)',
                textAlign: 'center'
              }}
            >
              <div style={{ 
                fontSize: 'clamp(1.5rem, 4vw, 2rem)', 
                fontWeight: 'bold',
                marginBottom: '0.25rem'
              }}>
                {stat.number}
              </div>
              <div style={{ 
                opacity: 0.9,
                fontSize: 'clamp(0.85rem, 2vw, 1rem)'
              }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .text-center {
          text-align: center;
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .hero-circle-1,
          .hero-circle-2 {
            width: 300px !important;
            height: 300px !important;
          }

          .hero-btn {
            width: 100%;
            max-width: 280px;
          }

          .hero-stat-card {
            flex: 1 1 calc(50% - 1rem);
            min-width: 120px !important;
          }
        }

        @media (max-width: 480px) {
          .hero-circle-1,
          .hero-circle-2 {
            width: 200px !important;
            height: 200px !important;
          }

          .hero-stat-card {
            flex: 1 1 100%;
            max-width: 200px;
            margin: 0 auto;
          }
        }

        /* Prevent text overflow */
        .container {
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}

export default Hero
