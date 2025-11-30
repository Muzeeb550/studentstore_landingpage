import React from 'react'
import { motion } from 'framer-motion'

function Download() {
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
    <section id="download" style={{ 
      padding: 'clamp(2.5rem, 5vw, 4rem) 0', 
      background: 'linear-gradient(to bottom, #F9FAFB, white)' 
    }}>
      <div className="container text-center" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 clamp(1rem, 3vw, 2rem)'
      }}>
        <motion.h2 
          style={{ 
            marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: '800',
            color: '#1F2937'
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Download StudentStore
        </motion.h2>
        <motion.p 
          style={{ 
            marginBottom: 'clamp(2rem, 4vw, 3rem)', 
            color: '#6B7280', 
            fontSize: 'clamp(1rem, 2vw, 1.1rem)',
            maxWidth: '600px',
            margin: '0 auto clamp(2rem, 4vw, 3rem)',
            lineHeight: '1.6',
            padding: '0 1rem'
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Choose your preferred installation method
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(1.25rem, 3vw, 2rem)',
            maxWidth: '1100px',
            margin: '0 auto'
          }}
        >
          {/* APK Download */}
          <motion.div
            variants={scaleIn}
            whileHover={{ 
              y: -15,
              boxShadow: '0 25px 50px rgba(139, 92, 246, 0.3)'
            }}
            whileTap={{ scale: 0.98 }}
            style={{
              background: 'white',
              padding: 'clamp(1.5rem, 3vw, 2rem)',
              borderRadius: 'clamp(0.75rem, 2vw, 1rem)',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
              border: '2px solid #8B5CF6',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              style={{
                position: 'absolute',
                top: '-50%',
                right: '-50%',
                width: 'clamp(150px, 25vw, 200px)',
                height: 'clamp(150px, 25vw, 200px)',
                background: 'linear-gradient(135deg, #8B5CF6, #6366F1)',
                borderRadius: '50%',
                filter: 'blur(60px)',
                zIndex: 0,
                pointerEvents: 'none'
              }}
            />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ 
                fontSize: 'clamp(3rem, 6vw, 4rem)', 
                marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
                userSelect: 'none'
              }}>
                📱
              </div>
              <h3 style={{ 
                marginBottom: 'clamp(0.4rem, 1vw, 0.5rem)',
                fontSize: 'clamp(1.15rem, 2.5vw, 1.35rem)',
                fontWeight: '700',
                color: '#1F2937'
              }}>
                Android APK
              </h3>
              <p style={{ 
                color: '#6B7280', 
                marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
                fontSize: 'clamp(0.9rem, 1.8vw, 1rem)'
              }}>
                Version 1.0.0 • Direct Install
              </p>
              <motion.a 
                href="/downloads/StudentStore-v1.0.0.apk" 
                download
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 'clamp(0.4rem, 1vw, 0.5rem)',
                  padding: 'clamp(0.75rem, 2vw, 0.875rem) clamp(1.25rem, 3vw, 1.75rem)',
                  background: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)',
                  color: 'white',
                  borderRadius: '0.5rem',
                  fontWeight: '700',
                  fontSize: 'clamp(0.95rem, 2vw, 1rem)',
                  textDecoration: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                📥 Download APK
              </motion.a>
              <p style={{ 
                fontSize: 'clamp(0.8rem, 1.6vw, 0.875rem)', 
                color: '#9CA3AF', 
                marginTop: 'clamp(0.75rem, 2vw, 1rem)',
                lineHeight: '1.6'
              }}>
                ⚠️ Enable "Unknown Sources" in settings<br/>
                👍 Completely Safe, No need to Worry
              </p>
            </div>
          </motion.div>

          {/* PWA Install */}
          <motion.div
            variants={scaleIn}
            whileHover={{ 
              y: -15,
              boxShadow: '0 25px 50px rgba(99, 102, 241, 0.3)'
            }}
            whileTap={{ scale: 0.98 }}
            style={{
              background: 'white',
              padding: 'clamp(1.5rem, 3vw, 2rem)',
              borderRadius: 'clamp(0.75rem, 2vw, 1rem)',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
            }}
          >
            <div style={{ 
              fontSize: 'clamp(3rem, 6vw, 4rem)', 
              marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
              userSelect: 'none'
            }}>
              🌐
            </div>
            <h3 style={{ 
              marginBottom: 'clamp(0.4rem, 1vw, 0.5rem)',
              fontSize: 'clamp(1.15rem, 2.5vw, 1.35rem)',
              fontWeight: '700',
              color: '#1F2937'
            }}>
              Progressive Web App
            </h3>
            <p style={{ 
              color: '#6B7280', 
              marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
              fontSize: 'clamp(0.9rem, 1.8vw, 1rem)'
            }}>
              Works on all devices
            </p>
            <motion.a 
              href="https://studentstore-zeta.vercel.app" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'clamp(0.4rem, 1vw, 0.5rem)',
                padding: 'clamp(0.75rem, 2vw, 0.875rem) clamp(1.25rem, 3vw, 1.75rem)',
                background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
                color: 'white',
                borderRadius: '0.5rem',
                fontWeight: '700',
                fontSize: 'clamp(0.95rem, 2vw, 1rem)',
                textDecoration: 'none',
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              📲 Install PWA
            </motion.a>
          </motion.div>

          {/* Indus Store */}
          <motion.div
            variants={scaleIn}
            whileHover={{ 
              y: -15,
              boxShadow: '0 25px 50px rgba(16, 185, 129, 0.3)'
            }}
            whileTap={{ scale: 0.98 }}
            style={{
              background: 'white',
              padding: 'clamp(1.5rem, 3vw, 2rem)',
              borderRadius: 'clamp(0.75rem, 2vw, 1rem)',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
            }}
          >
            <div style={{ 
              fontSize: 'clamp(3rem, 6vw, 4rem)', 
              marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
              userSelect: 'none'
            }}>
              🏪
            </div>
            <h3 style={{ 
              marginBottom: 'clamp(0.4rem, 1vw, 0.5rem)',
              fontSize: 'clamp(1.15rem, 2.5vw, 1.35rem)',
              fontWeight: '700',
              color: '#1F2937'
            }}>
              Indus Appstore
            </h3>
            <p style={{ 
              color: '#6B7280', 
              marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
              fontSize: 'clamp(0.9rem, 1.8vw, 1rem)'
            }}>
              Official Indian App Store
            </p>
            <motion.a 
              href="https://indusapp.store/vfmtlvuw" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'clamp(0.4rem, 1vw, 0.5rem)',
                padding: 'clamp(0.75rem, 2vw, 0.875rem) clamp(1.25rem, 3vw, 1.75rem)',
                background: '#10B981',
                color: 'white',
                borderRadius: '0.5rem',
                fontWeight: '700',
                fontSize: 'clamp(0.95rem, 2vw, 1rem)',
                textDecoration: 'none',
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              🏪 Get on Indus Store
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .text-center {
          text-align: center;
        }

        /* Mobile: Single column */
        @media (max-width: 768px) {
          .container > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 480px) {
          .container > div:last-child > div {
            text-align: center;
          }
        }
      `}</style>
    </section>
  )
}

export default Download
