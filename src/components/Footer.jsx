import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)


  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setTimeout(() => {
        setEmail('')
        setSubscribed(false)
      }, 3000)
    }
  }

  // Handler for legal page links - scrolls to top
  const handleLegalClick = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }, 0)
  }


  return (
    <footer style={{
      background: '#1F2937',
      color: 'white',
      paddingTop: 'clamp(2.5rem, 5vw, 4rem)',
      paddingBottom: '2rem'
    }}>
      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 clamp(1rem, 3vw, 2rem)'
      }}>
        {/* Main Footer Content */}
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'clamp(1.5rem, 3vw, 3rem)',
            marginBottom: 'clamp(2rem, 4vw, 3rem)'
          }}
        >
          {/* Brand Column */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1rem',
              fontSize: '1.5rem',
              fontWeight: 'bold'
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
              <span>StudentStore</span>
            </div>
            <p style={{ 
              color: '#9CA3AF', 
              marginBottom: '1.5rem', 
              lineHeight: '1.7',
              fontSize: '0.95rem'
            }}>
              By Students, For Students. Your one-stop platform for smart shopping, learning, and community.
            </p>
            
            {/* Social Media */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {[
                { icon: '📸', label: 'Instagram', href: '#' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(139, 92, 246, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    textDecoration: 'none',
                    border: '2px solid rgba(139, 92, 246, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>


          {/* Quick Links */}
          <div>
            <h4 style={{ 
              color: 'white', 
              marginBottom: '1rem', 
              fontSize: '1.1rem',
              fontWeight: '600'
            }}>
              Quick Links
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'Home', href: '/', scroll: true },
                { label: 'Features', href: '#features' },
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'Download', href: '#download' },
                { label: 'Launch App', href: 'https://studentstore-zeta.vercel.app' }
              ].map((link, index) => (
                <motion.div key={index} whileHover={{ x: 5 }}>
                  {link.href.startsWith('http') ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ 
                        color: '#9CA3AF', 
                        textDecoration: 'none', 
                        transition: 'color 0.2s',
                        fontSize: '0.95rem'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#8B5CF6'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}
                    >
                      {link.label}
                    </a>
                  ) : link.href.startsWith('#') ? (
                    <a
                      href={link.href}
                      style={{ 
                        color: '#9CA3AF', 
                        textDecoration: 'none', 
                        transition: 'color 0.2s',
                        fontSize: '0.95rem'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#8B5CF6'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}
                    >
                      {link.label}
                    </a>
                  ) : link.scroll ? (
                    <button
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      style={{ 
                        color: '#9CA3AF', 
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        cursor: 'pointer',
                        fontSize: '0.95rem',
                        textAlign: 'left',
                        transition: 'color 0.2s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#8B5CF6'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      style={{ 
                        color: '#9CA3AF', 
                        textDecoration: 'none', 
                        transition: 'color 0.2s',
                        fontSize: '0.95rem'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#8B5CF6'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </div>


          {/* Legal */}
          <div>
            <h4 style={{ 
              color: 'white', 
              marginBottom: '1rem', 
              fontSize: '1.1rem',
              fontWeight: '600'
            }}>
              Legal
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Terms of Service', href: '/terms-of-service' },
                { label: 'Contact Us', href: 'mailto:studentstoreforstudents@gmail.com' }
              ].map((link, index) => (
                <motion.div key={index} whileHover={{ x: 5 }}>
                  {link.href.startsWith('mailto:') ? (
                    <a
                      href={link.href}
                      style={{ 
                        color: '#9CA3AF', 
                        textDecoration: 'none', 
                        transition: 'color 0.2s',
                        fontSize: '0.95rem'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#8B5CF6'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={handleLegalClick}
                      style={{ 
                        color: '#9CA3AF', 
                        textDecoration: 'none', 
                        transition: 'color 0.2s',
                        fontSize: '0.95rem'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#8B5CF6'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </div>


          {/* Newsletter */}
          <div>
            <h4 style={{ 
              color: 'white', 
              marginBottom: '1rem', 
              fontSize: '1.1rem',
              fontWeight: '600'
            }}>
              Stay Updated
            </h4>
            <p style={{ 
              color: '#9CA3AF', 
              marginBottom: '1rem', 
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
              Get the latest updates, deals, and tips directly to your inbox.
            </p>
            
            <form onSubmit={handleSubscribe} style={{ marginBottom: '1.5rem' }}>
              <div style={{
                display: 'flex',
                gap: '0.5rem',
                marginBottom: '0.5rem'
              }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  style={{
                    flex: 1,
                    padding: '0.75rem',
                    borderRadius: '0.5rem',
                    border: '2px solid rgba(139, 92, 246, 0.3)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: 'white',
                    fontSize: '0.95rem'
                  }}
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    padding: '0.75rem 1.5rem',
                    background: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.5rem',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  {subscribed ? '✓' : '→'}
                </motion.button>
              </div>
              {subscribed && (
                <p style={{ color: '#10B981', fontSize: '0.85rem' }}>
                  ✓ Thanks for subscribing!
                </p>
              )}
            </form>


            {/* App Badges */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {/* APK Download */}
              <motion.a
                href="/downloads/StudentStore-v1.0.0.apk"
                download
                whileHover={{ scale: 1.03 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1rem',
                  background: 'rgba(139, 92, 246, 0.2)',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  color: 'white',
                  border: '2px solid rgba(139, 92, 246, 0.3)',
                  transition: 'all 0.2s'
                }}
              >
                <span style={{ fontSize: '1.5rem' }}>📱</span>
                <div>
                  <div style={{ fontSize: '0.75rem', opacity: 0.8 }}>Download APK</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: '600' }}>Android App</div>
                </div>
              </motion.a>


              {/* Indus Store */}
              <motion.a
                href="https://indusapp.store/vfmtlvuw"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1rem',
                  background: 'rgba(16, 185, 129, 0.2)',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  color: 'white',
                  border: '2px solid rgba(16, 185, 129, 0.3)',
                  transition: 'all 0.2s'
                }}
              >
                <span style={{ fontSize: '1.5rem' }}>🏪</span>
                <div>
                  <div style={{ fontSize: '0.75rem', opacity: 0.8 }}>Available on</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: '600' }}>Indus Appstore</div>
                </div>
              </motion.a>
            </div>
          </div>
        </div>


        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid #374151',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p style={{ color: '#9CA3AF', fontSize: '0.9rem', margin: 0 }}>
            © 2025 StudentStore. All rights reserved. Made with ❤️ for students.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem', flexWrap: 'wrap' }}>
            <span style={{ color: '#9CA3AF' }}>🇮🇳 India</span>
            <span style={{ color: '#9CA3AF' }}>🌐 English</span>
          </div>
        </div>
      </div>


      <style>{`
        .container {
          width: 100%;
        }


        /* Tablet and below */
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }


        /* Mobile: Single column */
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }


          form > div {
            flex-direction: column;
          }


          form input {
            width: 100%;
          }


          form button {
            width: 100%;
          }
        }
      `}</style>
    </footer>
  )
}


export default Footer
