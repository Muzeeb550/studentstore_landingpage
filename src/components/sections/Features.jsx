import React from 'react'
import { motion } from 'framer-motion'

function Features() {
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

  const features = [
    { icon: '🛍️', title: 'StudentStore', desc: 'Product discovery with real student reviews' },
    { icon: '🎓', title: 'SkillStore', desc: 'Free learning resources and roadmaps' },
    { icon: '🤖', title: 'Shopping Assistant', desc: 'Smart product recommendations' },
    { icon: '📝', title: 'Posts', desc: 'Community showcase and experiences' },
    { icon: '❤️', title: 'Wishlist', desc: 'Save your favorite products' },
    { icon: '💰', title: 'Budget-Friendly', desc: 'Products curated for student budgets' }
  ]

  return (
    <section id="features" style={{ 
      padding: 'clamp(2.5rem, 5vw, 4rem) 0', 
      background: '#F9FAFB' 
    }}>
      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 clamp(1rem, 3vw, 2rem)'
      }}>
        <motion.h2 
          className="text-center" 
          style={{ 
            marginBottom: 'clamp(2rem, 4vw, 3rem)',
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: '800',
            color: '#1F2937',
            padding: '0 1rem'
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Everything You Need in One Place
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: 'clamp(1.25rem, 3vw, 2rem)'
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)'
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
              style={{
                background: 'white',
                padding: 'clamp(1.5rem, 3vw, 2rem)',
                borderRadius: '1rem',
                textAlign: 'center',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Gradient hover effect */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                opacity: 0,
                transition: 'opacity 0.3s'
              }} className="feature-top-border" />

              <motion.div 
                style={{ 
                  fontSize: 'clamp(2.5rem, 5vw, 3rem)', 
                  marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
                  userSelect: 'none'
                }}
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                {feature.icon}
              </motion.div>
              
              <h3 style={{ 
                marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)',
                fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)',
                fontWeight: '700',
                color: '#1F2937'
              }}>
                {feature.title}
              </h3>
              
              <p style={{ 
                color: '#6B7280',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                lineHeight: '1.6',
                margin: 0
              }}>
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .text-center {
          text-align: center;
        }

        .container {
          width: 100%;
        }

        /* Show gradient on hover */
        .feature-top-border {
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .feature-card:hover .feature-top-border {
          opacity: 1;
        }

        /* Grid optimization for different screens */
        @media (max-width: 1024px) {
          .container > div {
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)) !important;
          }
        }

        @media (max-width: 768px) {
          .container > div {
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)) !important;
            gap: 1.25rem !important;
          }
        }

        @media (max-width: 640px) {
          .container > div {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 1rem !important;
          }
        }

        /* Prevent icon selection on mobile */
        @media (max-width: 768px) {
          .container > div > div {
            -webkit-tap-highlight-color: transparent;
          }
        }
      `}</style>
    </section>
  )
}

export default Features
