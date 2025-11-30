import React, { useState } from 'react'
import { motion } from 'framer-motion'

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(1) // Start with middle card

  const testimonials = [
    {
      id: 1,
      name: "Sam Samur",
      college: "",
      course: "B.Tech Computer Science",
      rating: 5,
      text: "StudentStore made my college shopping so much easier! I found my laptop, books, and accessories all in one place with real reviews from seniors. The Shopping assistant helped me stay within my budget. Highly recommend!",
      image: "👩‍🎓",
      color: "#FF6B6B"
    },
    {
      id: 3,
      name: "Sai Ram",
      college: "",
      course: "B.Tech CSM",
      rating: 5,
      text: "I love how authentic the reviews are! Unlike other platforms, these are from real students who actually used the products. Saved me from buying a bad study lamp. The wishlist feature is super convenient too!",
      image: "👩‍💼",
      color: "#FFE66D"
    },
    {
      id: 4,
      name: "Muzeeb",
      college: "",
      course: "B.Tech AIML",
      rating: 5,
      text: "Best student platform ever! The Chat Assistant understood exactly what I needed and recommended products within my ₹500 / ₹5000 budget. Got amazing deals and the verified stores feature gives me confidence.",
      image: "👨‍🔬",
      color: "#95E1D3"
    },
    {
      id: 5,
      name: "Saqlain Shaik",
      college: "",
      course: "Artificial Intelligence and Machine Learning",
      rating: 5,
      text: "StudentStore isn't just shopping - it's a complete student ecosystem! From finding the right products to learning new skills for free, everything is in one place. The community is super helpful too!",
      image: "👩‍🎨",
      color: "#F38181"
    }
  ]

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const renderStars = (rating) => {
    return Array(rating).fill('⭐').join('')
  }

  return (
    <section style={{
      padding: 'clamp(2.5rem, 5vw, 4rem) 0',
      background: 'linear-gradient(180deg, #ffffff 0%, #F9FAFB 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.03,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B5CF6' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        zIndex: 0,
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
          style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}
        >
          <h2 style={{ 
            marginBottom: '1rem',
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: '800',
            color: '#1F2937'
          }}>
            Loved by Students Across India
          </h2>
          <p style={{ 
            color: '#6B7280', 
            fontSize: 'clamp(1rem, 2vw, 1.1rem)', 
            maxWidth: '600px', 
            margin: '0 auto',
            padding: '0 1rem',
            lineHeight: '1.6'
          }}>
            See what students are saying about their StudentStore experience
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="testimonials-carousel" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          minHeight: 'clamp(350px, 50vw, 450px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {/* Navigation Buttons */}
          <motion.button
            onClick={handlePrevious}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="nav-btn nav-btn-prev"
            aria-label="Previous testimonial"
            style={{
              position: 'absolute',
              left: '0',
              zIndex: 10,
              background: 'white',
              border: '2px solid #8B5CF6',
              borderRadius: '50%',
              width: 'clamp(40px, 6vw, 50px)',
              height: 'clamp(40px, 6vw, 50px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)',
              fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
              color: '#8B5CF6'
            }}
          >
            ←
          </motion.button>

          {/* Cards Container */}
          <div className="cards-container" style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center',
            justifyContent: 'center',
            perspective: '1000px',
            padding: '0 clamp(50px, 8vw, 80px)',
            width: '100%'
          }}>
            {testimonials.map((testimonial, index) => {
              const position = (index - activeIndex + testimonials.length) % testimonials.length
              const isCurrent = position === 0
              const isPrev = position === testimonials.length - 1
              const isNext = position === 1

              if (position > 1 && position < testimonials.length - 1) {
                return null // Hide other cards
              }

              return (
                <motion.div
                  key={testimonial.id}
                  animate={{
                    scale: isCurrent ? 1 : 0.8,
                    opacity: isCurrent ? 1 : 0.5,
                    x: isPrev ? '-120%' : isNext ? '120%' : '0%',
                    zIndex: isCurrent ? 10 : 1
                  }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="testimonial-card"
                  style={{
                    position: isCurrent ? 'relative' : 'absolute',
                    width: '100%',
                    maxWidth: '500px',
                    pointerEvents: isCurrent ? 'auto' : 'none'
                  }}
                >
                  <div style={{
                    background: 'white',
                    borderRadius: '1.5rem',
                    padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                    boxShadow: isCurrent 
                      ? '0 20px 40px rgba(139, 92, 246, 0.2)' 
                      : '0 10px 20px rgba(0, 0, 0, 0.1)',
                    border: isCurrent ? '3px solid #8B5CF6' : '2px solid #E5E7EB',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    {/* Decorative corner */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      width: 'clamp(80px, 12vw, 100px)',
                      height: 'clamp(80px, 12vw, 100px)',
                      background: testimonial.color,
                      opacity: 0.1,
                      borderRadius: '0 1.5rem 0 100%'
                    }} />

                    {/* Rating Stars */}
                    <div style={{
                      fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                      marginBottom: 'clamp(0.75rem, 1.5vw, 1rem)',
                      position: 'relative',
                      zIndex: 1,
                      userSelect: 'none'
                    }}>
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Review Text */}
                    <p style={{
                      color: '#4B5563',
                      fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
                      lineHeight: '1.7',
                      marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
                      fontStyle: 'italic',
                      position: 'relative',
                      zIndex: 1
                    }}>
                      "{testimonial.text}"
                    </p>

                    {/* Student Info */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'clamp(0.75rem, 2vw, 1rem)',
                      paddingTop: 'clamp(1rem, 2vw, 1.5rem)',
                      borderTop: '2px solid #F3F4F6',
                      position: 'relative',
                      zIndex: 1
                    }}>
                      {/* Avatar */}
                      <div style={{
                        width: 'clamp(50px, 8vw, 60px)',
                        height: 'clamp(50px, 8vw, 60px)',
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, ${testimonial.color}, #8B5CF6)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                        flexShrink: 0,
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                        userSelect: 'none'
                      }}>
                        {testimonial.image}
                      </div>

                      {/* Student Details */}
                      <div style={{ minWidth: 0 }}>
                        <div style={{
                          fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                          fontWeight: '700',
                          color: '#1F2937',
                          marginBottom: '0.25rem'
                        }}>
                          {testimonial.name}
                        </div>
                        {testimonial.college && (
                          <div style={{
                            fontSize: 'clamp(0.85rem, 1.5vw, 0.9rem)',
                            color: '#6B7280',
                            marginBottom: '0.25rem'
                          }}>
                            {testimonial.college}
                          </div>
                        )}
                        <div style={{
                          fontSize: 'clamp(0.8rem, 1.5vw, 0.85rem)',
                          color: '#8B5CF6',
                          fontWeight: '600',
                          wordBreak: 'break-word'
                        }}>
                          {testimonial.course}
                        </div>
                      </div>
                    </div>

                    {/* Quote Icon */}
                    <div style={{
                      position: 'absolute',
                      bottom: 'clamp(0.75rem, 2vw, 1rem)',
                      right: 'clamp(1rem, 2vw, 1.5rem)',
                      fontSize: 'clamp(3rem, 5vw, 4rem)',
                      color: testimonial.color,
                      opacity: 0.2,
                      fontFamily: 'Georgia, serif',
                      lineHeight: 1,
                      userSelect: 'none'
                    }}>
                      "
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.button
            onClick={handleNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="nav-btn nav-btn-next"
            aria-label="Next testimonial"
            style={{
              position: 'absolute',
              right: '0',
              zIndex: 10,
              background: 'white',
              border: '2px solid #8B5CF6',
              borderRadius: '50%',
              width: 'clamp(40px, 6vw, 50px)',
              height: 'clamp(40px, 6vw, 50px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)',
              fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
              color: '#8B5CF6'
            }}
          >
            →
          </motion.button>
        </div>

        {/* Dots Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            display: 'flex',
            gap: 'clamp(0.5rem, 1vw, 0.75rem)',
            justifyContent: 'center',
            marginTop: 'clamp(2rem, 4vw, 3rem)'
          }}
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              style={{
                width: activeIndex === index ? 'clamp(25px, 4vw, 30px)' : 'clamp(10px, 2vw, 12px)',
                height: 'clamp(10px, 2vw, 12px)',
                borderRadius: '6px',
                background: activeIndex === index 
                  ? 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)' 
                  : '#D1D5DB',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: activeIndex === index ? '0 2px 8px rgba(139, 92, 246, 0.4)' : 'none'
              }}
            />
          ))}
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            marginTop: 'clamp(2rem, 4vw, 3rem)',
            padding: 'clamp(1.5rem, 3vw, 2rem)',
            background: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)',
            borderRadius: '1rem',
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            gap: 'clamp(1.5rem, 3vw, 2rem)'
          }}
        >
          {[
            { number: '100+', label: 'Happy Students' },
            { number: '4.9/5', label: 'Average Rating' }
          ].map((stat, index) => (
            <div key={index} style={{ textAlign: 'center', color: 'white', flex: '1 1 auto', minWidth: '120px' }}>
              <div style={{ 
                fontSize: 'clamp(1.5rem, 4vw, 2rem)', 
                fontWeight: 'bold', 
                marginBottom: '0.5rem' 
              }}>
                {stat.number}
              </div>
              <div style={{ 
                opacity: 0.9,
                fontSize: 'clamp(0.9rem, 1.8vw, 1rem)'
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .text-center {
          text-align: center;
        }

        /* Mobile: Single card view */
        @media (max-width: 768px) {
          .cards-container {
            padding: 0 60px !important;
          }

          .nav-btn-prev {
            left: 5px !important;
          }

          .nav-btn-next {
            right: 5px !important;
          }

          .testimonial-card > div {
            padding: 1.5rem !important;
          }
        }

        @media (max-width: 480px) {
          .testimonials-carousel {
            min-height: 420px !important;
          }

          .cards-container {
            padding: 0 50px !important;
          }

          .nav-btn {
            width: 36px !important;
            height: 36px !important;
            font-size: 1.1rem !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Testimonials
