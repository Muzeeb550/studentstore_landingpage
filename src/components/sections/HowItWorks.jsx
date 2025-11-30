import React from 'react'
import { motion } from 'framer-motion'

function HowItWorks() {
  const steps = [
    {
      id: 1,
      number: "01",
      icon: "🎓",
      title: "Sign Up Free",
      description: "Create your account in seconds using Google sign-in. No credit card required, completely free forever.",
      color: "#8B5CF6"
    },
    {
      id: 2,
      number: "02",
      icon: "🔍",
      title: "Browse & Discover",
      description: "Explore thousands of student-verified products, or use our Chat Assistant to get personalized recommendations based on your needs and budget.",
      color: "#6366F1"
    },
    {
      id: 3,
      number: "03",
      icon: "⭐",
      title: "Read Real Reviews",
      description: "Check authentic reviews from fellow students who actually used the products. See ratings, photos, and detailed experiences before you buy.",
      color: "#10B981"
    },
    {
      id: 4,
      number: "04",
      icon: "🛒",
      title: "Buy from Verified Stores",
      description: "Compare prices across multiple trusted sellers like Amazon, Flipkart, and more. Click to purchase from your preferred store.",
      color: "#F59E0B"
    },
    {
      id: 5,
      number: "05",
      icon: "✍️",
      title: "Share Your Experience",
      description: "After using the product, write a review to help other students. Share photos and tips. Build your reputation in the community!",
      color: "#EF4444"
    }
  ]

  return (
    <section 
      id="how-it-works"
      style={{
        padding: 'clamp(2.5rem, 5vw, 4rem) 0',
        background: 'linear-gradient(180deg, #F9FAFB 0%, #ffffff 50%, #F9FAFB 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background decoration */}
      <div className="bg-decoration" style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'clamp(400px, 80vw, 800px)',
        height: 'clamp(400px, 80vw, 800px)',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ 
        position: 'relative', 
        zIndex: 1,
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 clamp(1rem, 3vw, 2rem)'
      }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}
        >
          <h2 style={{ 
            marginBottom: '1rem',
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: '800',
            color: '#1F2937'
          }}>
            How StudentStore Works
          </h2>
          <p style={{ 
            color: '#6B7280', 
            fontSize: 'clamp(1rem, 2vw, 1.1rem)', 
            maxWidth: '600px', 
            margin: '0 auto',
            padding: '0 1rem',
            lineHeight: '1.6'
          }}>
            Get started in 5 simple steps. Join thousands of students already using StudentStore!
          </p>
        </motion.div>

        {/* Timeline Steps */}
        <div className="timeline-container" style={{
          maxWidth: '1000px',
          margin: '0 auto',
          position: 'relative'
        }}>
          {/* Vertical connecting line - Desktop only */}
          <div className="timeline-line" style={{
            position: 'absolute',
            left: '50%',
            top: '80px',
            bottom: '80px',
            width: '4px',
            background: 'linear-gradient(180deg, #8B5CF6, #6366F1, #10B981, #F59E0B, #EF4444)',
            transform: 'translateX(-50%)',
            borderRadius: '2px',
            zIndex: 0
          }}>
            {/* Animated pulse */}
            <motion.div
              animate={{
                y: ['0%', '100%'],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                width: '12px',
                height: '12px',
                background: 'white',
                borderRadius: '50%',
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                boxShadow: '0 0 20px rgba(139, 92, 246, 0.8)'
              }}
            />
          </div>

          {steps.map((step, index) => {
            const isLeft = index % 2 === 0

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="timeline-item"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: index === steps.length - 1 ? 0 : 'clamp(2rem, 5vw, 4rem)',
                  position: 'relative'
                }}
              >
                {/* Left side content */}
                {isLeft && (
                  <div className="timeline-content timeline-content-left" style={{
                    flex: 1,
                    paddingRight: 'clamp(1.5rem, 3vw, 3rem)',
                    textAlign: 'right'
                  }}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        background: 'white',
                        padding: 'clamp(1.25rem, 3vw, 2rem)',
                        borderRadius: '1rem',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                        border: `3px solid ${step.color}20`,
                        position: 'relative'
                      }}
                    >
                      {/* Step number badge */}
                      <div style={{
                        position: 'absolute',
                        top: '-15px',
                        right: '20px',
                        background: step.color,
                        color: 'white',
                        width: 'clamp(35px, 5vw, 40px)',
                        height: 'clamp(35px, 5vw, 40px)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
                      }}>
                        {step.number}
                      </div>

                      <h3 style={{
                        fontSize: 'clamp(1.15rem, 2.5vw, 1.5rem)',
                        marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)',
                        color: step.color,
                        fontWeight: '700'
                      }}>
                        {step.title}
                      </h3>
                      <p style={{
                        color: '#6B7280',
                        fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
                        lineHeight: '1.7',
                        margin: 0
                      }}>
                        {step.description}
                      </p>
                    </motion.div>
                  </div>
                )}

                {/* Center icon */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="timeline-icon"
                  style={{
                    width: 'clamp(80px, 12vw, 100px)',
                    height: 'clamp(80px, 12vw, 100px)',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${step.color}, ${step.color}dd)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 'clamp(2rem, 5vw, 3rem)',
                    flexShrink: 0,
                    position: 'relative',
                    zIndex: 2,
                    boxShadow: `0 10px 30px ${step.color}40`,
                    border: 'clamp(3px, 0.5vw, 5px) solid white',
                    cursor: 'pointer',
                    userSelect: 'none'
                  }}
                >
                  {step.icon}
                </motion.div>

                {/* Right side content */}
                {!isLeft && (
                  <div className="timeline-content timeline-content-right" style={{
                    flex: 1,
                    paddingLeft: 'clamp(1.5rem, 3vw, 3rem)',
                    textAlign: 'left'
                  }}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        background: 'white',
                        padding: 'clamp(1.25rem, 3vw, 2rem)',
                        borderRadius: '1rem',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                        border: `3px solid ${step.color}20`,
                        position: 'relative'
                      }}
                    >
                      {/* Step number badge */}
                      <div style={{
                        position: 'absolute',
                        top: '-15px',
                        left: '20px',
                        background: step.color,
                        color: 'white',
                        width: 'clamp(35px, 5vw, 40px)',
                        height: 'clamp(35px, 5vw, 40px)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
                      }}>
                        {step.number}
                      </div>

                      <h3 style={{
                        fontSize: 'clamp(1.15rem, 2.5vw, 1.5rem)',
                        marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)',
                        color: step.color,
                        fontWeight: '700'
                      }}>
                        {step.title}
                      </h3>
                      <p style={{
                        color: '#6B7280',
                        fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
                        lineHeight: '1.7',
                        margin: 0
                      }}>
                        {step.description}
                      </p>
                    </motion.div>
                  </div>
                )}

                {/* Empty space for opposite side */}
                {isLeft ? (
                  <div style={{ flex: 1 }} className="timeline-spacer" />
                ) : (
                  <div style={{ flex: 1 }} className="timeline-spacer" />
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            marginTop: 'clamp(2.5rem, 5vw, 4rem)',
            textAlign: 'center',
            padding: 'clamp(2rem, 4vw, 3rem) clamp(1.5rem, 3vw, 2rem)',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '1.5rem',
            color: 'white'
          }}
        >
          <h3 style={{
            fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
            marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
            color: 'white',
            fontWeight: '800'
          }}>
            Ready to Get Started?
          </h3>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.1rem)',
            marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
            opacity: 0.95,
            lineHeight: '1.6'
          }}>
            Join 1000+ students who are already using StudentStore to shop smarter!
          </p>
          <div style={{
            display: 'flex',
            gap: 'clamp(0.75rem, 2vw, 1rem)',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <motion.a
              href="#download"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2rem)',
                background: 'white',
                color: '#8B5CF6',
                borderRadius: '0.75rem',
                fontWeight: '700',
                fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                textDecoration: 'none',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                whiteSpace: 'nowrap'
              }}
            >
              📥 Download Now
            </motion.a>
            <motion.a
              href="https://studentstore-zeta.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2rem)',
                background: 'transparent',
                color: 'white',
                border: '2px solid white',
                borderRadius: '0.75rem',
                fontWeight: '700',
                fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                textDecoration: 'none',
                whiteSpace: 'nowrap'
              }}
            >
              🚀 Try Web App
            </motion.a>
          </div>
        </motion.div>
      </div>

      <style>{`
        .text-center {
          text-align: center;
        }

        /* Mobile: Vertical timeline */
        @media (max-width: 768px) {
          .timeline-line {
            left: 30px !important;
            top: 60px !important;
            bottom: 60px !important;
          }

          .timeline-item {
            flex-direction: column !important;
            align-items: flex-start !important;
            padding-left: 0 !important;
          }

          .timeline-content-left,
          .timeline-content-right {
            padding: 0 !important;
            text-align: left !important;
            width: 100%;
            padding-left: 90px !important;
          }

          .timeline-icon {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
          }

          .timeline-spacer {
            display: none !important;
          }
        }

        @media (max-width: 480px) {
          .timeline-line {
            display: none !important;
          }

          .timeline-content-left,
          .timeline-content-right {
            padding-left: 0 !important;
            margin-top: 1rem !important;
          }

          .timeline-icon {
            position: relative !important;
            margin-bottom: 1rem !important;
          }
        }
      `}</style>
    </section>
  )
}

export default HowItWorks
