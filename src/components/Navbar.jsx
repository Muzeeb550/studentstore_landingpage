import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, useScroll, AnimatePresence } from 'framer-motion'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  const location = useLocation()

  // Detect if we're on a legal page
  const isLegalPage = location.pathname === '/privacy-policy' || location.pathname === '/terms-of-service'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleLogoClick = () => {
    if (isLegalPage) {
      window.location.href = '/'
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    closeMenu()
  }

  // Menu items for home page
  const homeMenuItems = [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Download', href: '#download' }
  ]

  // Simplified menu for legal pages (only Home + back)
  const legalMenuItems = [
    { label: 'Home', href: '/' }
  ]

  // Handle navigation clicks intelligently
  const handleNavClick = (href) => {
    closeMenu()
    if (isLegalPage && href.startsWith('#')) {
      // On legal pages, redirect to home + scroll to section
      window.location.href = `/#!${href.substring(1)}`
    } else if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  // Simple legal page navbar
  if (isLegalPage) {
    return (
      <motion.nav 
        style={{
          background: 'white',
          padding: '0.75rem 0',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease'
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0 1rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div 
            onClick={handleLogoClick}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              cursor: 'pointer',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: '#4F46E5'
            }}
          >
            ← Back to StudentStore
          </div>
        </div>
      </motion.nav>
    )
  }

  // Normal home page navbar
  return (
    <>
      <motion.nav 
        style={{
          background: 'white',
          padding: isScrolled ? '0.5rem 0' : '0.75rem 0',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          boxShadow: isScrolled ? '0 4px 12px rgba(0, 0, 0, 0.1)' : '0 2px 8px rgba(0, 0, 0, 0.05)',
          transition: 'all 0.3s ease',
          borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 1rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Logo - Desktop */}
          <div 
            onClick={handleLogoClick}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              cursor: 'pointer',
              zIndex: 1001
            }}
            className="desktop-logo"
          >
            <motion.img
              src="/favicon-96x96.png"
              alt="StudentStore Logo"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              style={{
                width: '48px',
                height: '48px',
                objectFit: 'contain'
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                StudentStore
              </span>
            </div>
          </div>

          {/* Logo - Mobile */}
          <div 
            onClick={handleLogoClick}
            style={{
              display: 'none',
              flexDirection: 'column',
              cursor: 'pointer',
              zIndex: 1001
            }}
            className="mobile-logo"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <img
                src="/favicon-96x96.png"
                alt="StudentStore Logo"
                style={{
                  width: '36px',
                  height: '36px',
                  objectFit: 'contain'
                }}
              />
              <span style={{
                fontSize: '1.1rem',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                StudentStore
              </span>
            </div>
            <div style={{
              fontSize: '0.65rem',
              color: '#6B7280',
              fontWeight: '500',
              marginTop: '0.125rem',
              marginLeft: '42px'
            }}>
              By Students, For Students
            </div>
          </div>

          {/* Desktop Menu */}
          <div style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center'
          }}
          className="desktop-menu"
          >
            {homeMenuItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                style={{ display: 'inline-block' }}
              >
                {item.href === '/' ? (
                  <button
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                      closeMenu()
                    }}
                    style={{ 
                      color: '#4B5563', 
                      fontWeight: '500', 
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#667eea'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#4B5563'}
                  >
                    {item.label}
                  </button>
                ) : (
                  <a 
                    href={item.href} 
                    onClick={(e) => handleNavClick(item.href)}
                    style={{ 
                      color: '#4B5563', 
                      fontWeight: '500', 
                      textDecoration: 'none',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#667eea'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#4B5563'}
                  >
                    {item.label}
                  </a>
                )}
              </motion.div>
            ))}
            <motion.a 
              href="https://studentstore-zeta.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '0.625rem 1.5rem',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                borderRadius: '0.75rem',
                fontWeight: '600',
                boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
                textDecoration: 'none',
                fontSize: '0.95rem',
                whiteSpace: 'nowrap'
              }}
            >
              Launch App
            </motion.a>
          </div>

          {/* Mobile Hamburger Button */}
          <motion.button
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
            style={{
              display: 'none',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              border: 'none',
              borderRadius: '0.5rem',
              padding: '0.5rem',
              cursor: 'pointer',
              zIndex: 1001,
              width: '40px',
              height: '40px',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              boxShadow: '0 2px 8px rgba(102, 126, 234, 0.3)'
            }}
          >
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              width: '20px'
            }}>
              <motion.span
                animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                style={{
                  height: '3px',
                  background: 'white',
                  borderRadius: '2px',
                  display: 'block',
                  transformOrigin: 'center'
                }}
              />
              <motion.span
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                style={{
                  height: '3px',
                  background: 'white',
                  borderRadius: '2px',
                  display: 'block'
                }}
              />
              <motion.span
                animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                style={{
                  height: '3px',
                  background: 'white',
                  borderRadius: '2px',
                  display: 'block',
                  transformOrigin: 'center'
                }}
              />
            </div>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.5)',
                zIndex: 999,
                backdropFilter: 'blur(4px)'
              }}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: '280px',
                maxWidth: '85vw',
                background: 'white',
                zIndex: 1000,
                padding: '5rem 1.5rem 2rem',
                boxShadow: '-4px 0 20px rgba(0, 0, 0, 0.15)',
                overflowY: 'auto'
              }}
            >
              <div style={{
                position: 'absolute',
                top: '1.5rem',
                left: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <img
                  src="/favicon-96x96.png"
                  alt="StudentStore"
                  style={{
                    width: '32px',
                    height: '32px',
                    objectFit: 'contain'
                  }}
                />
                <span style={{
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  StudentStore
                </span>
              </div>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                {homeMenuItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.href === '/' ? (
                      <button
                        onClick={() => {
                          window.scrollTo({ top: 0, behavior: 'smooth' })
                          closeMenu()
                        }}
                        style={{
                          color: '#4B5563',
                          fontSize: '1.05rem',
                          fontWeight: '600',
                          textDecoration: 'none',
                          display: 'block',
                          padding: '0.875rem',
                          borderRadius: '0.5rem',
                          transition: 'all 0.2s',
                          background: 'rgba(102, 126, 234, 0.05)',
                          border: 'none',
                          width: '100%',
                          textAlign: 'left',
                          cursor: 'pointer'
                        }}
                      >
                        {item.label}
                      </button>
                    ) : (
                      <a
                        href={item.href}
                        onClick={(e) => handleNavClick(item.href)}
                        style={{
                          color: '#4B5563',
                          fontSize: '1.05rem',
                          fontWeight: '600',
                          textDecoration: 'none',
                          display: 'block',
                          padding: '0.875rem',
                          borderRadius: '0.5rem',
                          transition: 'all 0.2s',
                          background: 'rgba(102, 126, 234, 0.05)'
                        }}
                      >
                        {item.label}
                      </a>
                    )}
                  </motion.div>
                ))}

                <motion.a
                  href="https://studentstore-zeta.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  style={{
                    marginTop: '0.5rem',
                    padding: '1rem',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    borderRadius: '0.75rem',
                    fontWeight: '700',
                    fontSize: '1.05rem',
                    textAlign: 'center',
                    textDecoration: 'none',
                    boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)'
                  }}
                >
                  🚀 Launch App
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .desktop-logo {
            display: none !important;
          }
          .mobile-logo {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }

        @media (min-width: 769px) {
          .mobile-logo {
            display: none !important;
          }
          .desktop-logo {
            display: flex !important;
          }
        }

        @media (max-width: 480px) {
          .mobile-logo span:first-of-type {
            font-size: 1rem !important;
          }
          .mobile-logo div:last-child {
            font-size: 0.6rem !important;
          }
        }
      `}</style>
    </>
  )
}

export default Navbar
