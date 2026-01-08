import React from 'react'
import { motion } from 'framer-motion'
import { ShoppingCart, GraduationCap, Bot, FileText, Heart, DollarSign } from 'lucide-react'

function Features() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }

  const features = [
    { 
      icon: ShoppingCart, 
      title: 'StudentStore', 
      desc: 'Product discovery with real student reviews',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    { 
      icon: GraduationCap, 
      title: 'SkillStore', 
      desc: 'Free learning resources and roadmaps',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    { 
      icon: Bot, 
      title: 'Shopping Assistant', 
      desc: 'Smart product recommendations',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    { 
      icon: FileText, 
      title: 'Posts', 
      desc: 'Community showcase and experiences',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    { 
      icon: Heart, 
      title: 'Wishlist', 
      desc: 'Save your favorite products',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    { 
      icon: DollarSign, 
      title: 'Budget-Friendly', 
      desc: 'Products curated for student budgets',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    }
  ]

  return (
    <section id="features" style={{ 
      padding: 'clamp(3rem, 6vw, 5rem) 0', 
      background: '#F9FAFB',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative background */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '-5%',
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
        padding: '0 clamp(1rem, 3vw, 2rem)'
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
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'inline-block',
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
            Features
          </motion.span>
          
          <h2 style={{ 
            marginBottom: '1rem',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '800',
            color: '#1F2937',
            lineHeight: '1.2',
            letterSpacing: '-0.02em'
          }}>
            Everything You Need in One Place
          </h2>
          
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            color: '#6B7280',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            All the tools you need for smart shopping, learning, and community engagement
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2rem)'
          }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ 
                  y: -10,
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)'
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: 'white',
                  padding: 'clamp(1.75rem, 3vw, 2.25rem)',
                  borderRadius: '1.25rem',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  border: '1px solid rgba(0, 0, 0, 0.05)'
                }}
              >
                {/* Gradient accent */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: feature.gradient
                }} />

                {/* Icon container */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    width: 'clamp(60px, 10vw, 70px)',
                    height: 'clamp(60px, 10vw, 70px)',
                    borderRadius: '1rem',
                    background: feature.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <Icon size={32} color="white" strokeWidth={2} />
                </motion.div>
                
                <h3 style={{ 
                  marginBottom: '0.75rem',
                  fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
                  fontWeight: '700',
                  color: '#1F2937'
                }}>
                  {feature.title}
                </h3>
                
                <p style={{ 
                  color: '#6B7280',
                  fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  {feature.desc}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            marginTop: 'clamp(3rem, 6vw, 4rem)',
            textAlign: 'center'
          }}
        >
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            color: '#6B7280',
            marginBottom: '1.5rem'
          }}>
            Ready to experience all these features?
          </p>
          <motion.a
            href="#download"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: 'clamp(0.875rem, 2vw, 1rem) clamp(1.75rem, 3vw, 2rem)',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              borderRadius: '0.75rem',
              fontWeight: '700',
              fontSize: 'clamp(1rem, 2vw, 1.1rem)',
              textDecoration: 'none',
              boxShadow: '0 10px 25px rgba(102, 126, 234, 0.3)',
              border: 'none'
            }}
          >
            Get Started Now
          </motion.a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section > div > div:nth-of-type(2) {
            grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr)) !important;
          }
        }

        @media (max-width: 640px) {
          section {
            padding: 2.5rem 0 !important;
          }
          
          section > div > div:nth-of-type(2) {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
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

export default Features