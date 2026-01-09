import React from 'react'
import { motion } from 'framer-motion'
import { Download, Rocket, CheckCircle, Sparkles, TrendingUp, Shield, Zap } from 'lucide-react'

function FinalCTA() {
  return (
    <section style={{
      padding: 'clamp(3.5rem, 7vw, 6rem) 0',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated background circles */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: 'clamp(300px, 45vw, 450px)',
          height: 'clamp(300px, 45vw, 450px)',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          pointerEvents: 'none'
        }}
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, -20, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: 'clamp(250px, 40vw, 400px)',
          height: 'clamp(250px, 40vw, 400px)',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          pointerEvents: 'none'
        }}
      />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -40, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.3
          }}
          style={{
            position: 'absolute',
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.4)',
            left: `${10 + i * 12}%`,
            top: `${15 + (i % 3) * 25}%`,
            pointerEvents: 'none'
          }}
        />
      ))}

      <div style={{ 
        position: 'relative', 
        zIndex: 1,
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 clamp(1rem, 3vw, 2rem)'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ 
            textAlign: 'center',
            color: 'white' 
          }}
        >
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: 'rgba(255, 255, 255, 0.25)',
              backdropFilter: 'blur(10px)',
              padding: '0.75rem 1.5rem',
              borderRadius: '2rem',
              marginBottom: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Sparkles size={20} color="white" strokeWidth={2.5} />
            </div>
            <span style={{ 
              fontWeight: '700',
              fontSize: 'clamp(1rem, 2.25vw, 1.15rem)',
              letterSpacing: '0.02em'
            }}>
              Trusted by 100+ Students Across India
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              fontWeight: '800',
              marginBottom: '1rem',
              color: 'white',
              lineHeight: '1.15',
              letterSpacing: '-0.02em',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.15)'
            }}
          >
            Start Your Smart Shopping
            <br />
            Journey Today!
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: 'clamp(1.1rem, 2.75vw, 1.35rem)',
              marginBottom: 'clamp(2.5rem, 5vw, 3rem)',
              opacity: 0.95,
              maxWidth: '750px',
              margin: '0 auto clamp(2.5rem, 5vw, 3rem)',
              lineHeight: '1.6',
              fontWeight: '500'
            }}
          >
            Join thousands of students who save time and money with StudentStore
          </motion.p>

          {/* Download Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: 'clamp(2.5rem, 5vw, 3.5rem)',
              padding: '0 1rem'
            }}
          >
            <motion.a
              href="#download"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                padding: 'clamp(1.125rem, 2.75vw, 1.375rem) clamp(2rem, 4.5vw, 2.75rem)',
                background: 'white',
                color: '#8B5CF6',
                borderRadius: '1rem',
                fontWeight: '700',
                fontSize: 'clamp(1.05rem, 2.5vw, 1.25rem)',
                textDecoration: 'none',
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.3)',
                border: 'none',
                minWidth: 'clamp(180px, 35vw, 220px)',
                transition: 'all 0.3s ease'
              }}
            >
              <Download size={24} strokeWidth={2.5} />
              Download App
            </motion.a>

            <motion.a
              href="https://studentstore-zeta.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                padding: 'clamp(1.125rem, 2.75vw, 1.375rem) clamp(2rem, 4.5vw, 2.75rem)',
                background: 'transparent',
                color: 'white',
                border: '3px solid white',
                borderRadius: '1rem',
                fontWeight: '700',
                fontSize: 'clamp(1.05rem, 2.5vw, 1.25rem)',
                textDecoration: 'none',
                minWidth: 'clamp(180px, 35vw, 220px)',
                backdropFilter: 'blur(5px)',
                transition: 'all 0.3s ease'
              }}
            >
              <Rocket size={24} strokeWidth={2.5} />
              Try Web App
            </motion.a>
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
              gap: 'clamp(1rem, 2.5vw, 1.25rem)',
              maxWidth: '1000px',
              margin: '0 auto',
              padding: '0 1rem'
            }}
          >
            {[
              { 
                icon: Zap, 
                text: '100% Free Forever',
                color: '#F59E0B'
              },
              { 
                icon: Shield, 
                text: 'No Credit Card Required',
                color: '#10B981'
              },
              { 
                icon: CheckCircle, 
                text: 'Student Verified Reviews',
                color: '#8B5CF6'
              },
              // { 
              //   icon: TrendingUp, 
              //   text: 'AI-Powered Recommendations',
              //   color: '#06B6D4'
              // }
            ].map((feature, index) => {
              const FeatureIcon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  style={{
                    padding: 'clamp(1rem, 2.5vw, 1.25rem)',
                    background: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '1rem',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    justifyContent: 'center',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
                    cursor: 'default',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <FeatureIcon size={20} color="white" strokeWidth={2.5} />
                  </div>
                  <span style={{
                    fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
                    fontWeight: '600',
                    textAlign: 'left',
                    lineHeight: '1.4'
                  }}>
                    {feature.text}
                  </span>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Bottom Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{
              marginTop: 'clamp(2.5rem, 5vw, 3.5rem)',
              padding: 'clamp(1.5rem, 3vw, 2rem)',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: '1.25rem',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              display: 'flex',
              justifyContent: 'space-around',
              flexWrap: 'wrap',
              gap: 'clamp(1.5rem, 3vw, 2rem)'
            }}
          >
            {[
              { value: '100+', label: 'Products Listed' },
              { value: '50+', label: 'Student Reviews' },
              { value: '100+', label: 'Happy Users' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                style={{ 
                  textAlign: 'center',
                  flex: '1 1 auto',
                  minWidth: '120px'
                }}
              >
                <div style={{ 
                  fontSize: 'clamp(2rem, 5vw, 2.75rem)', 
                  fontWeight: '800',
                  marginBottom: '0.5rem',
                  letterSpacing: '-0.02em',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
                }}>
                  {stat.value}
                </div>
                <div style={{ 
                  opacity: 0.95,
                  fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
                  fontWeight: '500'
                }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section {
            padding: 3rem 0 !important;
          }
        }

        @media (max-width: 640px) {
          section > div > div > div:nth-of-type(4) {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 480px) {
          section {
            padding: 2.5rem 0 !important;
          }

          section > div {
            padding: 0 1rem !important;
          }
        }
      `}</style>
    </section>
  )
}

export default FinalCTA