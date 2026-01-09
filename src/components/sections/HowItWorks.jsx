import React from 'react'
import { motion } from 'framer-motion'
import { UserPlus, Search, Star, ShoppingCart, PenTool, Download, Rocket } from 'lucide-react'

function HowItWorks() {
  const steps = [
    {
      id: 1,
      number: "01",
      icon: UserPlus,
      title: "Sign Up Free",
      description: "Create your account in seconds using Google sign-in. No credit card required, completely free forever.",
      color: "#8B5CF6",
      gradient: "linear-gradient(135deg, #8B5CF6, #7C3AED)"
    },
    {
      id: 2,
      number: "02",
      icon: Search,
      title: "Browse & Discover",
      description: "Explore thousands of student-verified products, or use our Chat Assistant to get personalized recommendations based on your needs and budget.",
      color: "#6366F1",
      gradient: "linear-gradient(135deg, #6366F1, #4F46E5)"
    },
    {
      id: 3,
      number: "03",
      icon: Star,
      title: "Read Real Reviews",
      description: "Check authentic reviews from fellow students who actually used the products. See ratings, photos, and detailed experiences before you buy.",
      color: "#10B981",
      gradient: "linear-gradient(135deg, #10B981, #059669)"
    },
    {
      id: 4,
      number: "04",
      icon: ShoppingCart,
      title: "Buy from Verified Stores",
      description: "Compare prices across multiple trusted sellers like Amazon, Flipkart, and more. Click to purchase from your preferred store.",
      color: "#F59E0B",
      gradient: "linear-gradient(135deg, #F59E0B, #D97706)"
    },
    {
      id: 5,
      number: "05",
      icon: PenTool,
      title: "Share Your Experience",
      description: "After using the product, write a review to help other students. Share photos and tips. Build your reputation in the community!",
      color: "#EF4444",
      gradient: "linear-gradient(135deg, #EF4444, #DC2626)"
    }
  ]

  return (
    <section 
      id="how-it-works"
      style={{
        padding: 'clamp(3rem, 6vw, 5rem) 0',
        background: 'linear-gradient(180deg, #F9FAFB 0%, #ffffff 50%, #F9FAFB 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'clamp(400px, 80vw, 800px)',
        height: 'clamp(400px, 80vw, 800px)',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div style={{ 
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
            How It Works
          </motion.span>

          <h2 style={{ 
            marginBottom: '1rem',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '800',
            color: '#1F2937',
            lineHeight: '1.2',
            letterSpacing: '-0.02em'
          }}>
            Get Started in 5 Simple Steps
          </h2>
          
          <p style={{ 
            color: '#6B7280', 
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', 
            maxWidth: '700px', 
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Join thousands of students already using StudentStore for smart shopping!
          </p>
        </motion.div>

        {/* Timeline Steps - Desktop */}
        <div className="timeline-desktop" style={{
          maxWidth: '1000px',
          margin: '0 auto',
          position: 'relative'
        }}>
          {/* Vertical connecting line */}
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
            const StepIcon = step.icon

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
                      whileHover={{ scale: 1.02, y: -5 }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        background: 'white',
                        padding: 'clamp(1.5rem, 3vw, 2rem)',
                        borderRadius: '1.25rem',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                        border: `2px solid ${step.color}20`,
                        position: 'relative'
                      }}
                    >
                      {/* Step number badge */}
                      <div style={{
                        position: 'absolute',
                        top: '-15px',
                        right: '20px',
                        background: step.gradient,
                        color: 'white',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        fontSize: '0.9rem',
                        boxShadow: `0 4px 12px ${step.color}40`
                      }}>
                        {step.number}
                      </div>

                      <h3 style={{
                        fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
                        marginBottom: '0.75rem',
                        color: step.color,
                        fontWeight: '700'
                      }}>
                        {step.title}
                      </h3>
                      <p style={{
                        color: '#6B7280',
                        fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
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
                  whileHover={{ scale: 1.15, rotate: 360 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="timeline-icon"
                  style={{
                    width: 'clamp(90px, 12vw, 110px)',
                    height: 'clamp(90px, 12vw, 110px)',
                    borderRadius: '50%',
                    background: step.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    position: 'relative',
                    zIndex: 2,
                    boxShadow: `0 10px 30px ${step.color}40`,
                    border: '4px solid white',
                    cursor: 'pointer'
                  }}
                >
                  <StepIcon size={40} color="white" strokeWidth={2.5} />
                </motion.div>

                {/* Right side content */}
                {!isLeft && (
                  <div className="timeline-content timeline-content-right" style={{
                    flex: 1,
                    paddingLeft: 'clamp(1.5rem, 3vw, 3rem)',
                    textAlign: 'left'
                  }}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        background: 'white',
                        padding: 'clamp(1.5rem, 3vw, 2rem)',
                        borderRadius: '1.25rem',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                        border: `2px solid ${step.color}20`,
                        position: 'relative'
                      }}
                    >
                      {/* Step number badge */}
                      <div style={{
                        position: 'absolute',
                        top: '-15px',
                        left: '20px',
                        background: step.gradient,
                        color: 'white',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        fontSize: '0.9rem',
                        boxShadow: `0 4px 12px ${step.color}40`
                      }}>
                        {step.number}
                      </div>

                      <h3 style={{
                        fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
                        marginBottom: '0.75rem',
                        color: step.color,
                        fontWeight: '700'
                      }}>
                        {step.title}
                      </h3>
                      <p style={{
                        color: '#6B7280',
                        fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
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

        {/* Timeline Steps - Mobile */}
        <div className="timeline-mobile" style={{ display: 'none' }}>
          {steps.map((step, index) => {
            const StepIcon = step.icon
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  marginBottom: index === steps.length - 1 ? 0 : '2rem'
                }}
              >
                <div style={{
                  background: 'white',
                  padding: '1.75rem',
                  borderRadius: '1.25rem',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                  border: `2px solid ${step.color}20`,
                  position: 'relative'
                }}>
                  {/* Icon and number */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '1rem'
                  }}>
                    <div style={{
                      width: '70px',
                      height: '70px',
                      borderRadius: '50%',
                      background: step.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: `0 8px 20px ${step.color}40`
                    }}>
                      <StepIcon size={32} color="white" strokeWidth={2.5} />
                    </div>
                    <div style={{
                      background: step.gradient,
                      color: 'white',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold',
                      fontSize: '0.9rem',
                      flexShrink: 0,
                      boxShadow: `0 4px 12px ${step.color}40`
                    }}>
                      {step.number}
                    </div>
                  </div>

                  <h3 style={{
                    fontSize: '1.35rem',
                    marginBottom: '0.75rem',
                    color: step.color,
                    fontWeight: '700'
                  }}>
                    {step.title}
                  </h3>
                  <p style={{
                    color: '#6B7280',
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    margin: 0
                  }}>
                    {step.description}
                  </p>
                </div>

                {/* Connecting line between cards */}
                {index < steps.length - 1 && (
                  <div style={{
                    width: '4px',
                    height: '30px',
                    background: `linear-gradient(180deg, ${steps[index].color}, ${steps[index + 1].color})`,
                    margin: '0 auto',
                    borderRadius: '2px'
                  }} />
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
            marginTop: 'clamp(3rem, 6vw, 4rem)',
            padding: 'clamp(2rem, 4vw, 3rem) clamp(1.5rem, 3vw, 2rem)',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '1.5rem',
            color: 'white',
            textAlign: 'center',
            boxShadow: '0 20px 40px rgba(102, 126, 234, 0.3)'
          }}
        >
          <h3 style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
            marginBottom: '1rem',
            color: 'white',
            fontWeight: '800',
            letterSpacing: '-0.02em'
          }}>
            Ready to Get Started?
          </h3>
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            marginBottom: '2rem',
            opacity: 0.95,
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Join 1000+ students who are already using StudentStore to shop smarter!
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
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
                gap: '0.75rem',
                padding: 'clamp(0.875rem, 2vw, 1rem) clamp(1.75rem, 3vw, 2rem)',
                background: 'white',
                color: '#8B5CF6',
                borderRadius: '0.75rem',
                fontWeight: '700',
                fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                textDecoration: 'none',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                border: 'none'
              }}
            >
              <Download size={20} />
              Download Now
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
                gap: '0.75rem',
                padding: 'clamp(0.875rem, 2vw, 1rem) clamp(1.75rem, 3vw, 2rem)',
                background: 'transparent',
                color: 'white',
                border: '2px solid white',
                borderRadius: '0.75rem',
                fontWeight: '700',
                fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                textDecoration: 'none'
              }}
            >
              <Rocket size={20} />
              Try Web App
            </motion.a>
          </div>
        </motion.div>
      </div>

      <style>{`
        /* Desktop timeline (zigzag) */
        @media (min-width: 769px) {
          .timeline-mobile {
            display: none !important;
          }
          .timeline-desktop {
            display: block !important;
          }
        }

        /* Mobile timeline (vertical) */
        @media (max-width: 768px) {
          .timeline-desktop {
            display: none !important;
          }
          .timeline-mobile {
            display: block !important;
          }
        }

        @media (max-width: 640px) {
          section {
            padding: 2.5rem 0 !important;
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

export default HowItWorks