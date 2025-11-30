import React from 'react'
import { Link } from 'react-router-dom'

function PrivacyPolicy() {
  const cardStyle = {
    background: 'white',
    borderRadius: '1.5rem',
    boxShadow: '0 10px 30px rgba(15, 23, 42, 0.08)',
    padding: '1.75rem 1.5rem',
    marginBottom: '2rem',
    border: '1px solid #E5E7EB'
  }

  return (
    <div 
      style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #F9FAFB 0%, #E5EDFF 100%)',
        padding: '0 1rem 3rem'
      }}
    >
      {/* Header */}
      <div
        style={{
          background: 'linear-gradient(90deg, #4F46E5 0%, #10B981 100%)',
          padding: '3rem 1.5rem',
          textAlign: 'center',
          color: 'white',
          margin: '0 -1rem 0',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
              fontWeight: '900',
              marginBottom: '0.75rem',
            }}
          >
            Privacy Policy
          </h1>
          <p
            style={{
              fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)',
              opacity: 0.95,
              fontWeight: 600,
            }}
          >
            Your privacy matters. Here’s how StudentStore protects it.
          </p>
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '2.5rem 0 0',
        }}
      >
        {/* Last Updated */}
        <div
          style={{
            background: '#FEF9C3',
            borderLeft: '4px solid #FACC15',
            borderRadius: '0 0.75rem 0.75rem 0',
            padding: '0.75rem 1rem',
            marginBottom: '2rem',
            fontSize: '0.9rem',
            color: '#374151',
          }}
        >
          <strong style={{ color: '#111827' }}>Last Updated:</strong>{' '}
          November 30, 2025
        </div>

        {/* Introduction */}
        <section style={{ marginBottom: '2rem' }}>
          <div style={cardStyle}>
            <p
              style={{
                fontSize: '1.1rem',
                color: '#374151',
                lineHeight: 1.7,
                marginBottom: '0.75rem',
              }}
            >
              Welcome to <span style={{ color: '#4F46E5', fontWeight: 700 }}>StudentStore</span>! 
              StudentStore is built by students, for students, and privacy is taken seriously. 
              This Privacy Policy explains what data is collected, how it is used, and what choices you have.
            </p>
            <p
              style={{
                fontSize: '1rem',
                color: '#4B5563',
                lineHeight: 1.6,
              }}
            >
              This page is written in simple language so it’s easy to understand. If something 
              is unclear, email{' '}
              <a
                href="mailto:studentstoreforstudents@gmail.com"
                style={{
                  color: '#4F46E5',
                  fontWeight: 600,
                  textDecoration: 'underline',
                }}
              >
                studentstoreforstudents@gmail.com
              </a>
              .
            </p>
          </div>
        </section>

        {/* What We Collect (example, rest same pattern) */}
        <section style={{ marginBottom: '2rem' }}>
          <div style={cardStyle}>
            <h2
              style={{
                fontSize: '1.6rem',
                fontWeight: 900,
                marginBottom: '1.25rem',
                background: 'linear-gradient(90deg, #4F46E5, #10B981)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              What We Collect
            </h2>

            {/* Account Information */}
            <div
              style={{
                background: '#EFF6FF',
                borderRadius: '1.25rem',
                border: '1px solid #BFDBFE',
                padding: '1rem 1.25rem',
                marginBottom: '1rem',
              }}
            >
              <h3
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: '#2563EB',
                  marginBottom: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                <span>👤</span> Account information
              </h3>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: '1.1rem',
                  color: '#374151',
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                }}
              >
                <li>Name, email and profile picture from Google login</li>
                <li>Login date and time</li>
              </ul>
            </div>

            {/* Activity */}
            <div
              style={{
                background: '#ECFDF3',
                borderRadius: '1.25rem',
                border: '1px solid #BBF7D0',
                padding: '1rem 1.25rem',
                marginBottom: '1rem',
              }}
            >
              <h3
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: '#16A34A',
                  marginBottom: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                <span>💚</span> Your activity
              </h3>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: '1.1rem',
                  color: '#374151',
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                }}
              >
                <li>Products you add to your wishlist</li>
                <li>Reviews you write</li>
              </ul>
            </div>

            {/* Technical */}
            <div
              style={{
                background: '#FFF7ED',
                borderRadius: '1.25rem',
                border: '1px solid #FED7AA',
                padding: '1rem 1.25rem',
              }}
            >
              <h3
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: '#EA580C',
                  marginBottom: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                <span>📱</span> Technical data
              </h3>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: '1.1rem',
                  color: '#374151',
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                }}
              >
                <li>Device type (phone, tablet, laptop)</li>
                <li>Browser type (Chrome, Safari, etc.)</li>
                <li>IP address (for security and abuse prevention)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why We Use It */}
        <section style={{ marginBottom: '2rem' }}>
          <div style={cardStyle}>
            <h2
              style={{
                fontSize: '1.6rem',
                fontWeight: 900,
                marginBottom: '1.25rem',
                background: 'linear-gradient(90deg, #10B981, #4F46E5)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Why We Use Your Data
            </h2>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                color: '#374151',
                fontSize: '0.98rem',
              }}
            >
              <li style={{ marginBottom: '0.75rem', display: 'flex' }}>
                <span style={{ marginRight: '0.6rem' }}>✅</span>
                <div>
                  <strong>To keep you logged in</strong>
                  <div>So you do not need to sign in every time.</div>
                </div>
              </li>
              <li style={{ marginBottom: '0.75rem', display: 'flex' }}>
                <span style={{ marginRight: '0.6rem' }}>✅</span>
                <div>
                  <strong>To personalize recommendations</strong>
                  <div>Suggest products that match what you like and save.</div>
                </div>
              </li>
              <li style={{ marginBottom: '0.75rem', display: 'flex' }}>
                <span style={{ marginRight: '0.6rem' }}>✅</span>
                <div>
                  <strong>To save your wishlist and reviews</strong>
                  <div>So they are available on all of your devices.</div>
                </div>
              </li>
              <li style={{ display: 'flex' }}>
                <span style={{ marginRight: '0.6rem' }}>✅</span>
                <div>
                  <strong>To keep StudentStore safe and improve it</strong>
                  <div>Prevent abuse and understand what students find useful.</div>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Storage & Security */}
        <section style={{ marginBottom: '2rem' }}>
          <div style={cardStyle}>
            <h2
              style={{
                fontSize: '1.6rem',
                fontWeight: 900,
                marginBottom: '1.25rem',
                background: 'linear-gradient(90deg, #F97316, #4F46E5)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              How Your Data Is Stored & Protected
            </h2>

            <p
              style={{
                background:
                  'linear-gradient(90deg, #EFF6FF 0%, #ECFDF3 100%)',
                borderRadius: '1rem',
                padding: '0.9rem 1rem',
                border: '1px solid #BFDBFE',
                color: '#374151',
                fontSize: '0.98rem',
                marginBottom: '1rem',
              }}
            >
              StudentStore uses industry‑standard security to protect your data.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '0.75rem',
                fontSize: '0.9rem',
              }}
            >
              <div
                style={{
                  background: '#EFF6FF',
                  borderRadius: '0.9rem',
                  padding: '0.75rem 0.9rem',
                  border: '1px solid #BFDBFE',
                }}
              >
                <p style={{ fontWeight: 700, color: '#2563EB', marginBottom: '0.25rem' }}>
                  🔒 HTTPS encryption
                </p>
                <p style={{ color: '#4B5563' }}>Data is encrypted in transit.</p>
              </div>
              <div
                style={{
                  background: '#ECFDF3',
                  borderRadius: '0.9rem',
                  padding: '0.75rem 0.9rem',
                  border: '1px solid #BBF7D0',
                }}
              >
                <p style={{ fontWeight: 700, color: '#16A34A', marginBottom: '0.25rem' }}>
                  🗄 Secure database
                </p>
                <p style={{ color: '#4B5563' }}>Data stored in a secure managed database.</p>
              </div>
              <div
                style={{
                  background: '#F5F3FF',
                  borderRadius: '0.9rem',
                  padding: '0.75rem 0.9rem',
                  border: '1px solid #DDD6FE',
                }}
              >
                <p style={{ fontWeight: 700, color: '#7C3AED', marginBottom: '0.25rem' }}>
                  🔐 Google OAuth
                </p>
                <p style={{ color: '#4B5563' }}>Secure sign‑in handled by Google.</p>
              </div>
            </div>
          </div>
        </section>

        {/* What We DON'T Do */}
        <section style={{ marginBottom: '2rem' }}>
          <div
            style={{
              ...cardStyle,
              background:
                'linear-gradient(90deg, #FEF2F2 0%, #FFFBEB 100%)',
              borderColor: '#FCA5A5',
            }}
          >
            <h2
              style={{
                fontSize: '1.6rem',
                fontWeight: 900,
                marginBottom: '1.25rem',
                color: '#111827',
              }}
            >
              What StudentStore <span style={{ color: '#DC2626' }}>DOES NOT</span> Do
            </h2>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                color: '#374151',
                fontSize: '0.98rem',
              }}
            >
              <li style={{ marginBottom: '0.5rem', display: 'flex' }}>
                <span style={{ marginRight: '0.6rem' }}>❌</span>
                <span>Sell your personal data to anyone.</span>
              </li>
              <li style={{ marginBottom: '0.5rem', display: 'flex' }}>
                <span style={{ marginRight: '0.6rem' }}>❌</span>
                <span>Send marketing spam to your email.</span>
              </li>
              <li style={{ marginBottom: '0.5rem', display: 'flex' }}>
                <span style={{ marginRight: '0.6rem' }}>❌</span>
                <span>Track you on websites outside StudentStore.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Cookies */}
        <section style={{ marginBottom: '2rem' }}>
          <div style={cardStyle}>
            <h2
              style={{
                fontSize: '1.6rem',
                fontWeight: 900,
                marginBottom: '1.25rem',
                color: '#111827',
              }}
            >
              🍪 Cookies
            </h2>
            <p
              style={{
                fontSize: '1.02rem',
                color: '#374151',
                marginBottom: '0.75rem',
              }}
            >
              StudentStore uses cookies only to keep you logged in and to remember your preferences.
            </p>
            <p
              style={{
                background: '#EFF6FF',
                borderRadius: '0.9rem',
                padding: '0.75rem 0.9rem',
                border: '1px solid #BFDBFE',
                fontSize: '0.95rem',
                color: '#374151',
              }}
            >
              A cookie is a small text file stored in your browser. Without cookies, you would
              have to log in every time you open StudentStore.
            </p>
          </div>
        </section>

        {/* Affiliate Links */}
        <section style={{ marginBottom: '2rem' }}>
          <div style={cardStyle}>
            <h2
              style={{
                fontSize: '1.6rem',
                fontWeight: 900,
                marginBottom: '1.25rem',
                background: 'linear-gradient(90deg, #F97316, #4F46E5)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              🔗 Affiliate Links & External Stores
            </h2>
            <p
              style={{
                fontSize: '1.02rem',
                color: '#374151',
                marginBottom: '0.75rem',
              }}
            >
              When you click a product link in StudentStore, you may be redirected to websites 
              like Amazon, Flipkart, or Indus Appstore to complete your purchase.
            </p>
            <div
              style={{
                background: '#FFFBEB',
                borderRadius: '0.9rem',
                border: '1px solid #FED7AA',
                padding: '0.75rem 0.9rem',
                marginBottom: '0.75rem',
                fontSize: '0.95rem',
                color: '#374151',
              }}
            >
              <strong>Important:</strong> Those sites have their own privacy policies. Once you 
              leave StudentStore, their rules apply, not this Privacy Policy.
            </div>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '0.95rem',
                color: '#374151',
              }}
            >
              <li style={{ marginBottom: '0.5rem', display: 'flex' }}>
                <span style={{ marginRight: '0.6rem', color: '#F97316', fontWeight: 700 }}>•</span>
                <span>StudentStore does not control how those sites use your data.</span>
              </li>
              <li style={{ marginBottom: '0.5rem', display: 'flex' }}>
                <span style={{ marginRight: '0.6rem', color: '#F97316', fontWeight: 700 }}>•</span>
                <span>StudentStore sees that you clicked a link, but not what you do on the seller’s site.</span>
              </li>
              <li style={{ display: 'flex' }}>
                <span style={{ marginRight: '0.6rem', color: '#F97316', fontWeight: 700 }}>•</span>
                <span>Always review the seller’s own Privacy Policy before buying.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Your Rights */}
        <section style={{ marginBottom: '2rem' }}>
          <div style={cardStyle}>
            <h2
              style={{
                fontSize: '1.6rem',
                fontWeight: 900,
                marginBottom: '1.25rem',
                background: 'linear-gradient(90deg, #4F46E5, #10B981)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Your Rights
            </h2>
            <p
              style={{
                fontSize: '1.02rem',
                color: '#374151',
                marginBottom: '0.75rem',
              }}
            >
              You are in control of your data. You can:
            </p>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '0.95rem',
                color: '#374151',
              }}
            >
              <li
                style={{
                  background: '#EFF6FF',
                  borderRadius: '0.9rem',
                  border: '1px solid #BFDBFE',
                  padding: '0.75rem 0.9rem',
                  marginBottom: '0.6rem',
                }}
              >
                <strong>Delete your account:</strong> You can request account deletion and related
                data will be removed.
              </li>
              <li
                style={{
                  background: '#ECFDF3',
                  borderRadius: '0.9rem',
                  border: '1px solid #BBF7D0',
                  padding: '0.75rem 0.9rem',
                  marginBottom: '0.6rem',
                }}
              >
                <strong>Request a copy of your data:</strong> Email{' '}
                <a
                  href="mailto:studentstoreforstudents@gmail.com"
                  style={{ textDecoration: 'underline', color: '#16A34A' }}
                >
                  studentstoreforstudents@gmail.com
                </a>{' '}
                and your data can be shared with you.
              </li>
              <li
                style={{
                  background: '#FFFBEB',
                  borderRadius: '0.9rem',
                  border: '1px solid #FDE68A',
                  padding: '0.75rem 0.9rem',
                }}
              >
                <strong>Stop using StudentStore:</strong> You can stop using the app at any time.
              </li>
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section style={{ marginBottom: '2rem' }}>
          <div
            style={{
              ...cardStyle,
              textAlign: 'center',
            }}
          >
            <h2
              style={{
                fontSize: '1.6rem',
                fontWeight: 900,
                marginBottom: '1rem',
                color: '#111827',
              }}
            >
              Questions?
            </h2>
            <p
              style={{
                fontSize: '1.02rem',
                color: '#374151',
                marginBottom: '1rem',
              }}
            >
              For any questions about this Privacy Policy, send an email to:
            </p>
            <a
              href="mailto:studentstoreforstudents@gmail.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '0.9rem 1.8rem',
                borderRadius: '0.9rem',
                background:
                  'linear-gradient(90deg, #4F46E5 0%, #10B981 100%)',
                color: 'white',
                fontWeight: 700,
                textDecoration: 'none',
                fontSize: '1rem',
                boxShadow: '0 10px 25px rgba(37, 99, 235, 0.35)',
              }}
            >
              📧 studentstoreforstudents@gmail.com
            </a>
          </div>
        </section>

        {/* Agreement + Back links */}
        <section>
          <div
            style={{
              background:
                'linear-gradient(90deg, rgba(249,115,22,0.12), rgba(79,70,229,0.12))',
              borderRadius: '1.25rem',
              padding: '1.25rem 1.5rem',
              border: '1px solid rgba(249,115,22,0.35)',
              textAlign: 'center',
              marginBottom: '1.5rem',
            }}
          >
            <p
              style={{
                fontSize: '1.02rem',
                color: '#374151',
                fontWeight: 600,
                margin: 0,
              }}
            >
              By using StudentStore, you agree to this Privacy Policy.
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.75rem',
              fontSize: '0.98rem',
            }}
          >
            <Link
              to="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                color: '#4F46E5',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              ← Back to Home
            </Link>
            <span style={{ color: '#9CA3AF' }}>•</span>
            <Link
              to="/terms-of-service"
              style={{
                color: '#4F46E5',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              Read Terms of Service →
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default PrivacyPolicy
