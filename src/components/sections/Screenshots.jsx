import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Home, ImageIcon, Store, Star, MessageSquare, Users, User, FileText, Smartphone } from 'lucide-react'

function Screenshots() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const screenshots = [
    {
      id: 1,
      title: 'Home - Product Discovery',
      description: 'Browse through thousands of curated student products with smart filters and categories',
      image: '/images/screenshots/screenshot1.jpg',
      icon: Home,
      color: '#8B5CF6'
    },
    {
      id: 2,
      title: 'Product Details - Images',
      description: 'View high-quality product images in an elegant gallery with zoom and swipe features',
      image: '/images/screenshots/screenshot2.jpg',
      icon: ImageIcon,
      color: '#6366F1'
    },
    {
      id: 3,
      title: 'Verified Stores to Buy',
      description: 'Shop from trusted sellers with multiple verified store options and best price comparison',
      image: '/images/screenshots/screenshot3.jpg',
      icon: Store,
      color: '#10B981'
    },
    {
      id: 4,
      title: 'Reviews from Students',
      description: 'Read authentic reviews from fellow students with ratings, photos, and helpful insights',
      image: '/images/screenshots/screenshot4.jpg',
      icon: Star,
      color: '#F59E0B'
    },
    {
      id: 5,
      title: 'Chat Assistant',
      description: 'Get instant product recommendations through chat tailored to best reviews and budget',
      image: '/images/screenshots/screenshot5.jpg',
      icon: MessageSquare,
      color: '#EC4899'
    },
    {
      id: 6,
      title: 'Community Posts',
      description: 'Discover what products other students are using and sharing in your campus community',
      image: '/images/screenshots/screenshot6.jpg',
      icon: Users,
      color: '#06B6D4'
    },
    {
      id: 7,
      title: 'User Profile',
      description: 'Manage your account, track your activity, and customize your StudentStore experience',
      image: '/images/screenshots/screenshot7.jpg',
      icon: User,
      color: '#8B5CF6'
    },
    {
      id: 8,
      title: 'User Posts',
      description: 'View all your shared posts, reviews, and contributions to the student community',
      image: '/images/screenshots/screenshot8.jpg',
      icon: FileText,
      color: '#6366F1'
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

  const currentScreenshot = screenshots[currentIndex]
  const CurrentIcon = currentScreenshot.icon

  return (
    <section style={{
      padding: 'clamp(3rem, 6vw, 5rem) 0',
      background: 'linear-gradient(180deg, #ffffff 0%, #f3f4f6 100%)',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-10%',
        width: '400px',
        height: '400px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '50%',
        filter: 'blur(120px)',
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
            App Preview
          </motion.div>

          <h2 style={{ 
            marginBottom: '1rem',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '800',
            color: '#1F2937',
            lineHeight: '1.2',
            letterSpacing: '-0.02em'
          }}>
            See StudentStore in Action
          </h2>
          
          <p style={{ 
            color: '#6B7280', 
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', 
            maxWidth: '700px', 
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Experience the full power of our platform across all features
          </p>
        </motion.div>

        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            minHeight: 'clamp(500px, 70vw, 650px)',
            gap: 'clamp(1.5rem, 4vw, 3rem)'
          }}>
            {/* Navigation - Previous */}
            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.1, x: -3 }}
              whileTap={{ scale: 0.9 }}
              className="nav-arrow"
              aria-label="Previous screenshot"
              style={{
                position: 'absolute',
                left: '0',
                zIndex: 10,
                background: 'white',
                border: '2px solid #8B5CF6',
                borderRadius: '50%',
                width: 'clamp(45px, 7vw, 55px)',
                height: 'clamp(45px, 7vw, 55px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 8px 20px rgba(139, 92, 246, 0.25)',
                color: '#8B5CF6',
                transition: 'all 0.3s ease'
              }}
            >
              <ChevronLeft size={24} strokeWidth={3} />
            </motion.button>

            {/* Main Content */}
            <div className="screenshots-wrapper" style={{
              display: 'flex',
              gap: 'clamp(2rem, 4vw, 3rem)',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              padding: '0 clamp(60px, 10vw, 90px)',
              flexWrap: 'wrap'
            }}>
              {/* Phone Mockup */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: 30 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    perspective: '1000px',
                    transformStyle: 'preserve-3d',
                    flex: '0 0 auto'
                  }}
                >
                  <div style={{
                    background: 'linear-gradient(135deg, #1F2937 0%, #111827 100%)',
                    borderRadius: 'clamp(2rem, 3.5vw, 2.75rem)',
                    padding: 'clamp(0.875rem, 1.75vw, 1.125rem)',
                    boxShadow: '0 30px 60px rgba(0, 0, 0, 0.35)',
                    position: 'relative',
                    width: 'clamp(280px, 45vw, 340px)',
                    height: 'clamp(560px, 90vw, 680px)'
                  }}>
                    {/* Notch */}
                    <div style={{
                      position: 'absolute',
                      top: 'clamp(0.875rem, 1.75vw, 1.125rem)',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 'clamp(110px, 18vw, 130px)',
                      height: 'clamp(22px, 3.5vw, 28px)',
                      background: '#111827',
                      borderRadius: '0 0 1.25rem 1.25rem',
                      zIndex: 2
                    }} />

                    {/* Screen */}
                    <div style={{
                      background: 'white',
                      borderRadius: 'clamp(1.5rem, 2.75vw, 2rem)',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      <img 
                        src={currentScreenshot.image}
                        alt={currentScreenshot.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                        onError={(e) => {
                          e.target.style.display = 'none'
                          const parent = e.target.parentElement
                          parent.style.background = `linear-gradient(135deg, ${currentScreenshot.color}ee, ${currentScreenshot.color})`
                          parent.innerHTML = `
                            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; color: white; padding: 2rem; text-align: center;">
                              <div style="width: 80px; height: 80px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; backdrop-filter: blur(10px);">
                                ${CurrentIcon ? `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>` : ''}
                              </div>
                              <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.75rem;">${currentScreenshot.title}</h3>
                              <p style="font-size: 0.95rem; opacity: 0.95; line-height: 1.5;">${currentScreenshot.description}</p>
                            </div>
                          `
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Description */}
              <motion.div
                key={'desc-' + currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="screenshot-description"
                style={{
                  maxWidth: '450px',
                  flex: '1 1 300px',
                  minWidth: '280px'
                }}
              >
                {/* Icon badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: 'spring' }}
                  style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '1.25rem',
                    background: `linear-gradient(135deg, ${currentScreenshot.color}, ${currentScreenshot.color}dd)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    boxShadow: `0 10px 25px ${currentScreenshot.color}40`
                  }}
                >
                  <CurrentIcon size={36} color="white" strokeWidth={2} />
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  style={{ 
                    fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', 
                    marginBottom: '1rem',
                    color: '#1F2937',
                    fontWeight: '700',
                    lineHeight: '1.2'
                  }}
                >
                  {currentScreenshot.title}
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  style={{ 
                    color: '#6B7280', 
                    fontSize: 'clamp(1rem, 2.25vw, 1.15rem)',
                    lineHeight: '1.7',
                    marginBottom: '1.5rem'
                  }}
                >
                  {currentScreenshot.description}
                </motion.p>

                {/* Progress indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.45 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}
                >
                  <span style={{ 
                    color: currentScreenshot.color, 
                    fontWeight: 'bold',
                    fontSize: 'clamp(1rem, 2.25vw, 1.15rem)',
                    whiteSpace: 'nowrap'
                  }}>
                    {currentIndex + 1} / {screenshots.length}
                  </span>
                  <div style={{
                    flex: 1,
                    height: '6px',
                    background: '#E5E7EB',
                    borderRadius: '3px',
                    overflow: 'hidden'
                  }}>
                    <motion.div
                      initial={{ width: '0%' }}
                      animate={{ width: ((currentIndex + 1) / screenshots.length * 100) + '%' }}
                      transition={{ duration: 0.5 }}
                      style={{
                        height: '100%',
                        background: `linear-gradient(90deg, ${currentScreenshot.color}, ${currentScreenshot.color}dd)`,
                        borderRadius: '3px'
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Navigation - Next */}
            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1, x: 3 }}
              whileTap={{ scale: 0.9 }}
              className="nav-arrow"
              aria-label="Next screenshot"
              style={{
                position: 'absolute',
                right: '0',
                zIndex: 10,
                background: 'white',
                border: '2px solid #8B5CF6',
                borderRadius: '50%',
                width: 'clamp(45px, 7vw, 55px)',
                height: 'clamp(45px, 7vw, 55px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 8px 20px rgba(139, 92, 246, 0.25)',
                color: '#8B5CF6',
                transition: 'all 0.3s ease'
              }}
            >
              <ChevronRight size={24} strokeWidth={3} />
            </motion.button>
          </div>

          {/* Thumbnails */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="thumbnails"
            style={{
              display: 'flex',
              gap: 'clamp(0.75rem, 2vw, 1rem)',
              justifyContent: 'center',
              marginTop: 'clamp(2.5rem, 5vw, 3.5rem)',
              flexWrap: 'wrap',
              padding: '0 1rem'
            }}
          >
            {screenshots.map((screenshot, index) => {
              const ThumbIcon = screenshot.icon
              return (
                <motion.button
                  key={screenshot.id}
                  onClick={() => goToSlide(index)}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`View ${screenshot.title}`}
                  style={{
                    width: 'clamp(70px, 11vw, 85px)',
                    height: 'clamp(70px, 11vw, 85px)',
                    borderRadius: '1rem',
                    border: currentIndex === index ? `3px solid ${screenshot.color}` : '2px solid #E5E7EB',
                    background: currentIndex === index 
                      ? `linear-gradient(135deg, ${screenshot.color}, ${screenshot.color}dd)` 
                      : 'white',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: currentIndex === index 
                      ? `0 10px 25px ${screenshot.color}40` 
                      : '0 4px 12px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <ThumbIcon 
                    size={28} 
                    color={currentIndex === index ? 'white' : screenshot.color}
                    strokeWidth={2.5}
                  />
                </motion.button>
              )
            })}
          </motion.div>

          {/* Navigation hint */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="navigation-hint"
            style={{
              textAlign: 'center',
              marginTop: '2rem',
              color: '#9CA3AF',
              fontSize: 'clamp(0.875rem, 1.75vw, 0.95rem)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}
          >
            <Smartphone size={16} />
            <span>Click thumbnails or use arrow buttons to navigate</span>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          .screenshots-wrapper {
            flex-direction: column !important;
            padding: 0 70px !important;
          }

          .screenshot-description {
            text-align: center !important;
            max-width: 100% !important;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }

        @media (max-width: 768px) {
          .nav-arrow {
            width: 40px !important;
            height: 40px !important;
          }
        }

        @media (max-width: 640px) {
          .screenshots-wrapper {
            padding: 0 55px !important;
          }

          .thumbnails {
            overflow-x: auto;
            justify-content: flex-start !important;
            padding-bottom: 0.75rem;
            -webkit-overflow-scrolling: touch;
          }

          .thumbnails::-webkit-scrollbar {
            height: 6px;
          }

          .thumbnails::-webkit-scrollbar-track {
            background: #f3f4f6;
            border-radius: 3px;
          }

          .thumbnails::-webkit-scrollbar-thumb {
            background: #8B5CF6;
            border-radius: 3px;
          }
        }

        @media (max-width: 480px) {
          section {
            padding: 2.5rem 0 !important;
          }

          .navigation-hint {
            display: none !important;
          }

          .nav-arrow {
            width: 36px !important;
            height: 36px !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Screenshots