import React from 'react'
import { motion } from 'framer-motion'

function FinalCTA() {
  return (
    <section style={{
      padding: 'clamp(3rem, 6vw, 5rem) 0',
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
        className="cta-circle-1"
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: 'clamp(250px, 40vw, 400px)',
          height: 'clamp(250px, 40vw, 400px)',
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
        className="cta-circle-2"
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: 'clamp(200px, 35vw, 350px)',
          height: 'clamp(200px, 35vw, 350px)',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ 
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
          className="text-center"
          style={{ color: 'white' }}
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
              gap: 'clamp(0.4rem, 1vw, 0.5rem)',
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              padding: 'clamp(0.4rem, 1vw, 0.5rem) clamp(1rem, 2.5vw, 1.5rem)',
              borderRadius: '2rem',
              marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            <span style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>✨</span>
            <span style={{ 
              fontWeight: '600',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)'
            }}>
              Trusted by 100's of Students
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: 'clamp(1.75rem, 5vw, 3rem)',
              fontWeight: '800',
              marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
              color: 'white',
              lineHeight: '1.2',
              padding: '0 1rem'
            }}
          >
            Start Your Smart Shopping Journey Today!
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              marginBottom: 'clamp(2rem, 4vw, 2.5rem)',
              opacity: 0.95,
              maxWidth: '700px',
              margin: '0 auto clamp(2rem, 4vw, 2.5rem)',
              lineHeight: '1.6',
              padding: '0 1rem'
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
              gap: 'clamp(0.75rem, 2vw, 1rem)',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: 'clamp(2rem, 4vw, 3rem)',
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
                gap: 'clamp(0.5rem, 1.5vw, 0.75rem)',
                padding: 'clamp(1rem, 2.5vw, 1.25rem) clamp(1.5rem, 4vw, 2.5rem)',
                background: 'white',
                color: '#8B5CF6',
                borderRadius: 'clamp(0.75rem, 2vw, 1rem)',
                fontWeight: '700',
                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                textDecoration: 'none',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                whiteSpace: 'nowrap',
                minWidth: 'clamp(160px, 30vw, 200px)'
              }}
            >
              <span style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)' }}>📥</span>
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
                gap: 'clamp(0.5rem, 1.5vw, 0.75rem)',
                padding: 'clamp(1rem, 2.5vw, 1.25rem) clamp(1.5rem, 4vw, 2.5rem)',
                background: 'transparent',
                color: 'white',
                border: 'clamp(2px, 0.4vw, 3px) solid white',
                borderRadius: 'clamp(0.75rem, 2vw, 1rem)',
                fontWeight: '700',
                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                minWidth: 'clamp(160px, 30vw, 200px)'
              }}
            >
              <span style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)' }}>🚀</span>
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
              display: 'flex',
              gap: 'clamp(0.5rem, 1.5vw, 1rem)',
              justifyContent: 'center',
              flexWrap: 'wrap',
              padding: '0 1rem'
            }}
          >
            {[
              '✓ 100% Free Forever',
              '✓ No Credit Card Required',
              '✓ Student Verified Reviews',
              '✓ AI-Powered Recommendations'
            ].map((feature, index) => (
              <div
                key={index}
                style={{
                  padding: 'clamp(0.4rem, 1vw, 0.5rem) clamp(0.75rem, 2vw, 1.25rem)',
                  background: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '2rem',
                  fontSize: 'clamp(0.8rem, 1.8vw, 0.95rem)',
                  fontWeight: '600',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  whiteSpace: 'nowrap',
                  textAlign: 'center'
                }}
              >
                {feature}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .text-center {
          text-align: center;
        }

        /* Mobile: Stack feature pills */
        @media (max-width: 640px) {
          .container > div > div:last-child {
            max-width: 100%;
          }

          .container > div > div:last-child > div {
            flex: 1 1 100%;
            max-width: 280px;
          }
        }

        @media (max-width: 480px) {
          .cta-circle-1,
          .cta-circle-2 {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}

export default FinalCTA
