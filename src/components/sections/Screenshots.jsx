import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Screenshots() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const screenshots = [
    {
      id: 1,
      title: 'Home - Product Discovery',
      description: 'Browse through thousands of curated student products with smart filters and categories',
      image: '/images/screenshots/screenshot1.jpg',
      placeholder: '🏠'
    },
    {
      id: 2,
      title: 'Product Details - Images',
      description: 'View high-quality product images in an elegant gallery with zoom and swipe features',
      image: '/images/screenshots/screenshot2.jpg',
      placeholder: '🖼️'
    },
    {
      id: 3,
      title: 'Verified Stores to Buy',
      description: 'Shop from trusted sellers with multiple verified store options and best price comparison',
      image: '/images/screenshots/screenshot3.jpg',
      placeholder: '🏪'
    },
    {
      id: 4,
      title: 'Reviews from Students',
      description: 'Read authentic reviews from fellow students with ratings, photos, and helpful insights',
      image: '/images/screenshots/screenshot4.jpg',
      placeholder: '⭐'
    },
    {
      id: 5,
      title: 'Chat Assistant',
      description: 'Get instant product recommendations through chat tailored to best reviews and budget',
      image: '/images/screenshots/screenshot5.jpg',
      placeholder: '💬'
    },
    {
      id: 6,
      title: 'Community Posts',
      description: 'Discover what products other students are using and sharing in your campus community',
      image: '/images/screenshots/screenshot6.jpg',
      placeholder: '📱'
    },
    {
      id: 7,
      title: 'User Profile',
      description: 'Manage your account, track your activity, and customize your StudentStore experience',
      image: '/images/screenshots/screenshot7.jpg',
      placeholder: '👤'
    },
    {
      id: 8,
      title: 'User Posts',
      description: 'View all your shared posts, reviews, and contributions to the student community',
      image: '/images/screenshots/screenshot8.jpg',
      placeholder: '📝'
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <section style={{
      padding: 'clamp(2.5rem, 5vw, 4rem) 0',
      background: 'linear-gradient(180deg, #ffffff 0%, #f3f4f6 100%)',
      overflow: 'hidden'
    }}>
      <div className="container" style={{
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
          style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}
        >
          <h2 style={{ 
            marginBottom: '1rem',
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: '800',
            color: '#1F2937'
          }}>
            See StudentStore in Action
          </h2>
          <p style={{ 
            color: '#6B7280', 
            fontSize: 'clamp(1rem, 2vw, 1.1rem)', 
            maxWidth: '600px', 
            margin: '0 auto',
            padding: '0 1rem',
            lineHeight: '1.6'
          }}>
            Experience the full power of our platform across all features
          </p>
        </motion.div>

        <div className="screenshots-wrapper" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative'
        }}>
          <div className="screenshots-container" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            minHeight: 'clamp(500px, 70vw, 600px)'
          }}>
            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="nav-arrow nav-arrow-left"
              aria-label="Previous screenshot"
              style={{
                position: 'absolute',
                left: '0',
                zIndex: 10,
                background: 'white',
                border: 'none',
                borderRadius: '50%',
                width: 'clamp(40px, 6vw, 50px)',
                height: 'clamp(40px, 6vw, 50px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                fontSize: 'clamp(1.2rem, 2vw, 1.5rem)'
              }}
            >
              ←
            </motion.button>

            <div className="screenshots-content" style={{
              display: 'flex',
              gap: 'clamp(1rem, 3vw, 2rem)',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              padding: '0 clamp(50px, 8vw, 80px)',
              flexDirection: 'row'
            }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: 30 }}
                  transition={{ duration: 0.5 }}
                  className="phone-mockup"
                  style={{
                    perspective: '1000px',
                    transformStyle: 'preserve-3d',
                    flexShrink: 0
                  }}
                >
                  <div style={{
                    background: 'linear-gradient(135deg, #1F2937 0%, #111827 100%)',
                    borderRadius: 'clamp(2rem, 3vw, 2.5rem)',
                    padding: 'clamp(0.75rem, 1.5vw, 1rem)',
                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
                    position: 'relative',
                    width: 'clamp(260px, 40vw, 320px)',
                    height: 'clamp(520px, 80vw, 640px)'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: 'clamp(0.75rem, 1.5vw, 1rem)',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 'clamp(100px, 15vw, 120px)',
                      height: 'clamp(20px, 3vw, 25px)',
                      background: '#111827',
                      borderRadius: '0 0 1rem 1rem',
                      zIndex: 2
                    }} />

                    <div style={{
                      background: 'white',
                      borderRadius: 'clamp(1.5rem, 2.5vw, 2rem)',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      <img 
                        src={screenshots[currentIndex].image}
                        alt={screenshots[currentIndex].title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                        onError={(e) => {
                          e.target.style.display = 'none'
                          e.target.parentElement.innerHTML = `
                            <div style="width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 2rem;">
                              <div style="font-size: clamp(3rem, 8vw, 5rem); margin-bottom: 1rem;">${screenshots[currentIndex].placeholder}</div>
                              <div style="font-size: clamp(1rem, 2vw, 1.2rem); font-weight: bold; text-align: center; padding: 0 1rem;">${screenshots[currentIndex].title}</div>
                            </div>
                          `
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <motion.div
                key={'desc-' + currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="screenshot-description"
                style={{
                  maxWidth: '400px',
                  textAlign: 'left',
                  flex: '1 1 auto'
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 style={{ 
                    fontSize: 'clamp(1.25rem, 3vw, 1.8rem)', 
                    marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
                    color: '#1F2937',
                    fontWeight: '700'
                  }}>
                    {screenshots[currentIndex].title}
                  </h3>
                  <p style={{ 
                    color: '#6B7280', 
                    fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                    lineHeight: '1.7',
                    marginBottom: 'clamp(1rem, 2vw, 1.5rem)'
                  }}>
                    {screenshots[currentIndex].description}
                  </p>

                  <div style={{
                    marginTop: 'clamp(1.5rem, 3vw, 2rem)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'clamp(0.75rem, 2vw, 1rem)'
                  }}>
                    <span style={{ 
                      color: '#8B5CF6', 
                      fontWeight: 'bold',
                      fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                      whiteSpace: 'nowrap'
                    }}>
                      {currentIndex + 1} / {screenshots.length}
                    </span>
                    <div style={{
                      flex: 1,
                      height: 'clamp(3px, 0.5vw, 4px)',
                      background: '#E5E7EB',
                      borderRadius: '2px',
                      overflow: 'hidden'
                    }}>
                      <motion.div
                        initial={{ width: '0%' }}
                        animate={{ width: ((currentIndex + 1) / screenshots.length * 100) + '%' }}
                        transition={{ duration: 0.5 }}
                        style={{
                          height: '100%',
                          background: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)'
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="nav-arrow nav-arrow-right"
              aria-label="Next screenshot"
              style={{
                position: 'absolute',
                right: '0',
                zIndex: 10,
                background: 'white',
                border: 'none',
                borderRadius: '50%',
                width: 'clamp(40px, 6vw, 50px)',
                height: 'clamp(40px, 6vw, 50px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                fontSize: 'clamp(1.2rem, 2vw, 1.5rem)'
              }}
            >
              →
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="thumbnails"
            style={{
              display: 'flex',
              gap: 'clamp(0.5rem, 1.5vw, 1rem)',
              justifyContent: 'center',
              marginTop: 'clamp(2rem, 4vw, 3rem)',
              flexWrap: 'wrap',
              padding: '0 1rem'
            }}
          >
            {screenshots.map((screenshot, index) => (
              <motion.button
                key={screenshot.id}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`View ${screenshot.title}`}
                style={{
                  width: 'clamp(60px, 10vw, 80px)',
                  height: 'clamp(60px, 10vw, 80px)',
                  borderRadius: 'clamp(0.75rem, 1.5vw, 1rem)',
                  border: currentIndex === index ? '3px solid #8B5CF6' : '2px solid #E5E7EB',
                  background: currentIndex === index 
                    ? 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)' 
                    : 'white',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  boxShadow: currentIndex === index 
                    ? '0 8px 20px rgba(139, 92, 246, 0.4)' 
                    : '0 2px 8px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  userSelect: 'none'
                }}
              >
                {currentIndex === index && (
                  <motion.div
                    layoutId="activeIndicator"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)',
                      zIndex: -1
                    }}
                  />
                )}
                <span style={{ 
                  filter: currentIndex === index ? 'brightness(0) invert(1)' : 'none'
                }}>
                  {screenshot.placeholder}
                </span>
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="navigation-hint"
            style={{
              textAlign: 'center',
              marginTop: 'clamp(1.5rem, 3vw, 2rem)',
              color: '#9CA3AF',
              fontSize: 'clamp(0.85rem, 1.5vw, 0.9rem)',
              padding: '0 1rem'
            }}
          >
            💡 Click thumbnails or use arrow buttons to navigate
          </motion.div>
        </div>
      </div>

      <style>{`
        .text-center {
          text-align: center;
        }

        /* Mobile: Stack phone and description */
        @media (max-width: 768px) {
          .screenshots-content {
            flex-direction: column !important;
            padding: 0 60px !important;
          }

          .screenshot-description {
            text-align: center !important;
            max-width: 100% !important;
          }

          .nav-arrow-left {
            left: 5px !important;
          }

          .nav-arrow-right {
            right: 5px !important;
          }

          .phone-mockup {
            margin-bottom: 1rem;
          }

          .thumbnails {
            max-width: 100%;
            overflow-x: auto;
            justify-content: flex-start !important;
            padding-bottom: 0.5rem;
          }
        }

        @media (max-width: 480px) {
          .screenshots-container {
            min-height: 550px !important;
          }

          .screenshots-content {
            padding: 0 50px !important;
          }

          .nav-arrow {
            width: 36px !important;
            height: 36px !important;
            font-size: 1.1rem !important;
          }

          .navigation-hint {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}

export default Screenshots
