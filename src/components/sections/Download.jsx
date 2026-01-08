import React from 'react'
import { motion } from 'framer-motion'
import { Download, Globe, Store, CheckCircle, Smartphone } from 'lucide-react'

function DownloadSection() {
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
      padding: 'clamp(3rem, 6vw, 5rem) 0', 
      background: 'linear-gradient(to bottom, #F9FAFB, white)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '-5%',
        width: '300px',
        height: '300px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '50%',
        filter: 'blur(100px)',
        opacity: 0.1,
        pointerEvents: 'none'
      }} />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 clamp(1rem, 3vw, 2rem)',
        position: 'relative',
        zIndex: 1
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ 
            textAlign: 'center',
            marginBottom: 'clamp(2.5rem, 5vw, 4rem)'
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1.25rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              borderRadius: '2rem',
              fontSize: '0.875rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
          >
            <Smartphone size={16} />
            Download
          </motion.div>

          <h2 style={{ 
            marginBottom: '1rem',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '800',
            color: '#1F2937',
            lineHeight: '1.2',
            letterSpacing: '-0.02em'
          }}>
            Download StudentStore
          </h2>
          
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            color: '#6B7280',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Choose your preferred installation method
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2rem)',
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
              padding: 'clamp(2rem, 3vw, 2.5rem)',
              borderRadius: '1.5rem',
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
                width: '200px',
                height: '200px',
                background: 'linear-gradient(135deg, #8B5CF6, #6366F1)',
                borderRadius: '50%',
                filter: 'blur(60px)',
                zIndex: 0,
                pointerEvents: 'none'
              }}
            />
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '1rem',
                background: 'linear-gradient(135deg, #8B5CF6, #6366F1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                boxShadow: '0 8px 16px rgba(139, 92, 246, 0.3)'
              }}>
                <Smartphone size={36} color="white" strokeWidth={2} />
              </div>
              
              <h3 style={{ 
                marginBottom: '0.5rem',
                fontSize: 'clamp(1.35rem, 2.5vw, 1.6rem)',
                fontWeight: '700',
                color: '#1F2937'
              }}>
                Android APK
              </h3>
              
              <p style={{ 
                color: '#8B5CF6', 
                marginBottom: '1rem',
                fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
                fontWeight: '600'
              }}>
                Version 1.0.0 • Direct Install
              </p>
              
              <motion.a 
                href="/downloads/StudentStore-v1.0.0.apk" 
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  padding: '1rem 2rem',
                  background: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)',
                  color: 'white',
                  borderRadius: '0.75rem',
                  fontWeight: '700',
                  fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                  textDecoration: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  width: '100%',
                  boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)'
                }}
              >
                <Download size={20} />
                Download APK
              </motion.a>
              
              <div style={{
                marginTop: '1.25rem',
                padding: '1rem',
                background: 'rgba(139, 92, 246, 0.05)',
                borderRadius: '0.75rem',
                border: '1px solid rgba(139, 92, 246, 0.1)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                  marginBottom: '0.5rem'
                }}>
                  <CheckCircle size={16} color="#EF4444" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <p style={{ 
                    fontSize: 'clamp(0.85rem, 1.8vw, 0.9rem)', 
                    color: '#EF4444', 
                    margin: 0,
                    lineHeight: '1.5'
                  }}>
                    Enable "Unknown Sources" in settings
                  </p>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem'
                }}>
                  <CheckCircle size={16} color="#10B981" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <p style={{ 
                    fontSize: 'clamp(0.85rem, 1.8vw, 0.9rem)', 
                    color: '#10B981', 
                    margin: 0,
                    lineHeight: '1.5'
                  }}>
                    Completely Safe & Secure
                  </p>
                </div>
              </div>
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
              padding: 'clamp(2rem, 3vw, 2.5rem)',
              borderRadius: '1.5rem',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
              border: '2px solid #6366F1',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '1rem',
                background: 'linear-gradient(135deg, #6366F1, #4F46E5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                boxShadow: '0 8px 16px rgba(99, 102, 241, 0.3)'
              }}>
                <Globe size={36} color="white" strokeWidth={2} />
              </div>
              
              <h3 style={{ 
                marginBottom: '0.5rem',
                fontSize: 'clamp(1.35rem, 2.5vw, 1.6rem)',
                fontWeight: '700',
                color: '#1F2937'
              }}>
                Progressive Web App
              </h3>
              
              <p style={{ 
                color: '#6366F1', 
                marginBottom: '1rem',
                fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
                fontWeight: '600'
              }}>
                Works on all devices
              </p>
              
              <motion.a 
                href="https://studentstore-zeta.vercel.app" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  padding: '1rem 2rem',
                  background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
                  color: 'white',
                  borderRadius: '0.75rem',
                  fontWeight: '700',
                  fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                  textDecoration: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  width: '100%',
                  boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)'
                }}
              >
                <Globe size={20} />
                Install PWA
              </motion.a>

              <p style={{
                marginTop: '1.25rem',
                fontSize: 'clamp(0.875rem, 1.8vw, 0.95rem)',
                color: '#6B7280',
                lineHeight: '1.6'
              }}>
                Install as an app on any device. Works offline and updates automatically.
              </p>
            </div>
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
              padding: 'clamp(2rem, 3vw, 2.5rem)',
              borderRadius: '1.5rem',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
              border: '2px solid #10B981',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '1rem',
                background: 'linear-gradient(135deg, #10B981, #059669)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                boxShadow: '0 8px 16px rgba(16, 185, 129, 0.3)'
              }}>
                <Store size={36} color="white" strokeWidth={2} />
              </div>
              
              <h3 style={{ 
                marginBottom: '0.5rem',
                fontSize: 'clamp(1.35rem, 2.5vw, 1.6rem)',
                fontWeight: '700',
                color: '#1F2937'
              }}>
                Indus Appstore
              </h3>
              
              <p style={{ 
                color: '#10B981', 
                marginBottom: '1rem',
                fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
                fontWeight: '600'
              }}>
                Official Indian App Store
              </p>
              
              <motion.a 
                href="https://indusapp.store/vfmtlvuw" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  padding: '1rem 2rem',
                  background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                  color: 'white',
                  borderRadius: '0.75rem',
                  fontWeight: '700',
                  fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                  textDecoration: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  width: '100%',
                  boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)'
                }}
              >
                <Store size={20} />
                Get on Indus
              </motion.a>

              <p style={{
                marginTop: '1.25rem',
                fontSize: 'clamp(0.875rem, 1.8vw, 0.95rem)',
                color: '#6B7280',
                lineHeight: '1.6'
              }}>
                Download from India's official app marketplace. Trusted and verified.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section > div > div:nth-of-type(2) {
            grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr)) !important;
          }
        }

        @media (max-width: 640px) {
          section {
            padding: 2.5rem 0 !important;
          }
          
          section > div > div:nth-of-type(2) {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }

        @media (max-width: 480px) {
          section > div {
            padding: 0 1rem !important;
          }
        }
      `}</style>
    </section>
  )
}

export default DownloadSection