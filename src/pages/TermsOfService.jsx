import React from 'react'
import { Link } from 'react-router-dom'

function TermsOfService() {
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
        background: 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)',
        padding: '0 1rem 3rem'
      }}
    >
      {/* Header */}
      <div
        style={{
          background: 'linear-gradient(90deg, #F97316 0%, #EF4444 100%)',
          padding: '3rem 1.5rem',
          textAlign: 'center',
          color: 'white',
          margin: '0 -1rem 0'
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
              fontWeight: '900',
              marginBottom: '0.75rem'
            }}
          >
            Terms of Service
          </h1>
          <p
            style={{
              fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)',
              opacity: 0.95,
              fontWeight: 600
            }}
          >
            Simple rules for using StudentStore.
          </p>
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '2.5rem 0 0'
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
            color: '#374151'
          }}
        >
          <strong style={{ color: '#111827' }}>Last Updated:</strong>{' '}
          November 30, 2025
        </div>

        {/* Intro / Acceptance */}
        <section style={{ marginBottom: '2rem' }}>
          <div style={cardStyle}>
            <h2
              style={{
                fontSize: '1.6rem',
                fontWeight: 900,
                marginBottom: '1rem',
                background: 'linear-gradient(90deg, #F97316, #4F46E5)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Welcome to StudentStore!
            </h2>
            <p
              style={{
                fontSize: '1.05rem',
                color: '#374151',
                lineHeight: 1.7,
                marginBottom: '0.75rem'
              }}
            >
              These Terms of Service explain the rules for using StudentStore. They are written
              in simple language so they are easy to understand.
            </p>
            <div
              style={{
                background: 'linear-gradient(90deg, #FFFBEB, #FEF2F2)',
                borderRadius: '0.9rem',
                border: '1px solid #FED7AA',
                padding: '0.75rem 0.9rem',
                fontSize: '0.95rem',
                color: '#374151'
              }}
            >
              <strong style={{ color: '#111827' }}>
                By using StudentStore, you agree to these Terms of Service.
              </strong>{' '}
              If you do not agree, please do not use the app.
            </div>
          </div>
        </section>

        {/* What You Can Do */}
        <section style={{ marginBottom: '2rem' }}>
          <div style={cardStyle}>
            <h2
              style={{
                fontSize: '1.6rem',
                fontWeight: 900,
                marginBottom: '1.25rem',
                background: 'linear-gradient(90deg, #22C55E, #4F46E5)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              What You Can Do
            </h2>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                color: '#374151',
                fontSize: '0.98rem'
              }}
            >
              {[
                {
                  title: 'Browse products and reviews',
                  text: 'Explore everything StudentStore has to offer.'
                },
                {
                  title: 'Add products to your wishlist',
                  text: 'Save your favourite products for later.'
                },
                {
                  title: 'Write honest reviews',
                  text: 'Share real experiences to help other students.'
                },
                {
                  title: 'Share StudentStore with friends',
                  text: 'Help other students discover smarter shopping.'
                },
                {
                  title: 'Use the Assistant (when available)',
                  text: 'Ask for suggestions and recommendations.'
                }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1.4rem', marginRight: '0.6rem' }}>✅</span>
                  <div>
                    <h3
                      style={{
                        fontSize: '1.02rem',
                        fontWeight: 700,
                        color: '#111827',
                        marginBottom: '0.15rem'
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        margin: 0,
                        fontSize: '0.95rem',
                        color: '#4B5563'
                      }}
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You CAN'T Do */}
        <section style={{ marginBottom: '2rem' }}>
          <div
            style={{
              ...cardStyle,
              background: 'linear-gradient(90deg, #FEF2F2, #FFFBEB)',
              borderColor: '#FCA5A5'
            }}
          >
            <h2
              style={{
                fontSize: '1.6rem',
                fontWeight: 900,
                marginBottom: '1.25rem',
                color: '#111827'
              }}
            >
              What You <span style={{ color: '#DC2626' }}>CAN&apos;T</span> Do
            </h2>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                color: '#374151',
                fontSize: '0.98rem'
              }}
            >
              {[
                {
                  title: 'Create fake accounts',
                  text: 'One real account per student.'
                },
                {
                  title: 'Write fake or misleading reviews',
                  text: 'Only review products you have actually used.'
                },
                {
                  title: 'Spam or abuse other students',
                  text: 'Be respectful. No harassment, hate, or bullying.'
                },
                {
                  title: 'Use StudentStore for illegal activities',
                  text: 'You must follow the law at all times.'
                },
                {
                  title: 'Copy or steal our content',
                  text: 'Design, logo, and curated content belong to StudentStore.'
                }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1.4rem', marginRight: '0.6rem' }}>❌</span>
                  <div>
                    <h3
                      style={{
                        fontSize: '1.02rem',
                        fontWeight: 700,
                        color: '#111827',
                        marginBottom: '0.15rem'
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        margin: 0,
                        fontSize: '0.95rem',
                        color: '#4B5563'
                      }}
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Age Requirement */}
        <section style={{ marginBottom: '2rem' }}>
          <div style={cardStyle}>
            <h2
              style={{
                fontSize: '1.6rem',
                fontWeight: 900,
                marginBottom: '1.25rem',
                color: '#111827'
              }}
            >
              🎓 Age Requirement
            </h2>
            <div
              style={{
                background: '#EFF6FF',
                borderRadius: '1rem',
                border: '1px solid #BFDBFE',
                padding: '0.9rem 1rem'
              }}
            >
              <p
                style={{
                  fontSize: '1.02rem',
                  color: '#374151',
                  marginBottom: '0.4rem'
                }}
              >
                You must be <span style={{ color: '#4F46E5', fontWeight: 700 }}>13 years or older</span>{' '}
                to use StudentStore.
              </p>
              <p style={{ fontSize: '0.95rem', color: '#4B5563', margin: 0 }}>
                If you are under 13, ask a parent or guardian before using the app.
              </p>
            </div>
          </div>
        </section>

        {/* Affiliate Links */}
        <section style={{ marginBottom: '2rem' }}>
          <div
            style={{
              ...cardStyle,
              background: 'linear-gradient(90deg, #FFFBEB, #FFEDD5)',
              borderColor: '#FACC15'
            }}
          >
            <h2
              style={{
                fontSize: '1.6rem',
                fontWeight: 900,
                marginBottom: '1.25rem',
                color: '#111827'
              }}
            >
              💰 Affiliate Links
            </h2>
            <div
              style={{
                background: 'white',
                borderRadius: '1rem',
                border: '1px solid #FED7AA',
                padding: '0.9rem 1rem',
                marginBottom: '0.75rem'
              }}
            >
              <p
                style={{
                  fontSize: '1.02rem',
                  color: '#374151',
                  marginBottom: '0.4rem'
                }}
              >
                <strong>Transparency:</strong> StudentStore may earn a small commission when you
                buy products through links (Amazon, Flipkart, Indus Appstore, etc.).
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  fontSize: '0.95rem',
                  color: '#374151'
                }}
              >
                <li style={{ marginBottom: '0.35rem', display: 'flex' }}>
                  <span style={{ marginRight: '0.5rem', color: '#F97316', fontWeight: 700 }}>•</span>
                  <span>Your price stays the same – you do not pay extra.</span>
                </li>
                <li style={{ marginBottom: '0.35rem', display: 'flex' }}>
                  <span style={{ marginRight: '0.5rem', color: '#F97316', fontWeight: 700 }}>•</span>
                  <span>This helps keep StudentStore free for students.</span>
                </li>
                <li style={{ display: 'flex' }}>
                  <span style={{ marginRight: '0.5rem', color: '#F97316', fontWeight: 700 }}>•</span>
                  <span>Recommendations are still based on usefulness for students.</span>
                </li>
              </ul>
            </div>
            <p
              style={{
                fontSize: '0.88rem',
                color: '#4B5563',
                fontStyle: 'italic',
                margin: 0
              }}
            >
              This disclosure is provided to follow general affiliate guidelines and consumer
              protection principles.
            </p>
          </div>
        </section>

        {/* Product Liability */}
        <section style={{ marginBottom: '2rem' }}>
          <div style={cardStyle}>
            <h2
              style={{
                fontSize: '1.6rem',
                fontWeight: 900,
                marginBottom: '1.25rem',
                background: 'linear-gradient(90deg, #4F46E5, #10B981)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              📦 Product Liability
            </h2>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                fontSize: '0.95rem',
                color: '#374151'
              }}
            >
              <div
                style={{
                  background: '#EFF6FF',
                  borderRadius: '0.9rem',
                  border: '1px solid #BFDBFE',
                  padding: '0.75rem 0.9rem'
                }}
              >
                <strong>StudentStore recommends, but does not sell products.</strong>{' '}
                Purchases are made on external sites (Amazon, Flipkart, etc.).
              </div>
              <div
                style={{
                  background: '#ECFDF3',
                  borderRadius: '0.9rem',
                  border: '1px solid #BBF7D0',
                  padding: '0.75rem 0.9rem'
                }}
              >
                <strong>Issues with delivery, returns, or quality</strong> must be resolved
                with the seller or marketplace, not StudentStore.
              </div>
              <div
                style={{
                  background: '#FFFBEB',
                  borderRadius: '0.9rem',
                  border: '1px solid #FDE68A',
                  padding: '0.75rem 0.9rem'
                }}
              >
                StudentStore cannot guarantee that every recommended product will work for
                your specific needs – always read full details on the seller&apos;s site.
              </div>
            </div>
          </div>
        </section>

        {/* Content Ownership */}
        <section style={{ marginBottom: '2rem' }}>
          <div style={cardStyle}>
            <h2
              style={{
                fontSize: '1.6rem',
                fontWeight: 900,
                marginBottom: '1.25rem',
                background: 'linear-gradient(90deg, #F97316, #4F46E5)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              📝 Content Ownership
            </h2>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                fontSize: '0.95rem',
                color: '#374151'
              }}
            >
              <div
                style={{
                  background: '#EFF6FF',
                  borderRadius: '0.9rem',
                  border: '1px solid #BFDBFE',
                  padding: '0.75rem 0.9rem'
                }}
              >
                <strong>Your reviews:</strong> You own the content you write. By posting a review,
                you give StudentStore permission to display it in the app and use it in marketing
                to help other students.
              </div>
              <div
                style={{
                  background: '#ECFDF3',
                  borderRadius: '0.9rem',
                  border: '1px solid #BBF7D0',
                  padding: '0.75rem 0.9rem'
                }}
              >
                <strong>Our content:</strong> App design, logo, curated lists, and text belong
                to StudentStore. Do not copy or reuse them without permission.
              </div>
              <div
                style={{
                  background: '#F5F3FF',
                  borderRadius: '0.9rem',
                  border: '1px solid #DDD6FE',
                  padding: '0.75rem 0.9rem'
                }}
              >
                <strong>Product images & trademarks:</strong> Brand names and product images belong
                to their respective owners (Amazon, Flipkart, brands, etc.). StudentStore displays
                them only to promote affiliate products and does not claim ownership.
              </div>
            </div>
          </div>
        </section>

        {/* Account Termination */}
        <section style={{ marginBottom: '2rem' }}>
          <div style={cardStyle}>
            <h2
              style={{
                fontSize: '1.6rem',
                fontWeight: 900,
                marginBottom: '1.25rem',
                color: '#111827'
              }}
            >
              🚫 Account Termination
            </h2>
            <p
              style={{
                fontSize: '1.02rem',
                color: '#374151',
                marginBottom: '0.75rem'
              }}
            >
              Your account may be suspended or removed if you:
            </p>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '0.95rem',
                color: '#374151'
              }}
            >
              {[
                'Break these Terms of Service',
                'Write fake reviews or spam the platform',
                'Harass or abuse other students or the team',
                'Use StudentStore for illegal activities'
              ].map((item, i) => (
                <li
                  key={i}
                  style={{ display: 'flex', marginBottom: '0.35rem' }}
                >
                  <span
                    style={{
                      marginRight: '0.5rem',
                      color: '#DC2626',
                      fontWeight: 700
                    }}
                  >
                    •
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div
              style={{
                marginTop: '0.75rem',
                background: '#FEF9C3',
                borderRadius: '0.9rem',
                border: '1px solid #FDE68A',
                padding: '0.75rem 0.9rem',
                fontSize: '0.95rem',
                color: '#374151'
              }}
            >
              <strong>Note:</strong> In most cases, a warning may be sent first, but
              serious violations can lead to immediate suspension.
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section style={{ marginBottom: '2rem' }}>
          <div
            style={{
              ...cardStyle,
              background: 'linear-gradient(90deg, #F3F4F6, #E5E7EB)',
              borderColor: '#D1D5DB'
            }}
          >
            <h2
              style={{
                fontSize: '1.6rem',
                fontWeight: 900,
                marginBottom: '1.25rem',
                color: '#111827'
              }}
            >
              ⚠️ Disclaimer
            </h2>
            <p
              style={{
                fontSize: '1.02rem',
                color: '#374151',
                marginBottom: '0.75rem'
              }}
            >
              StudentStore is provided <strong>&quot;as is&quot;</strong> without any guarantees.
            </p>
            <p
              style={{
                fontSize: '0.95rem',
                color: '#4B5563',
                margin: 0,
                lineHeight: 1.6
              }}
            >
              StudentStore is intended to help students discover useful products, but cannot
              promise that every recommendation will be perfect for your situation. Always read
              full product details and make your own decision before buying.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section style={{ marginBottom: '2rem' }}>
          <div
            style={{
              ...cardStyle,
              textAlign: 'center'
            }}
          >
            <h2
              style={{
                fontSize: '1.6rem',
                fontWeight: 900,
                marginBottom: '1rem',
                color: '#111827'
              }}
            >
              Questions?
            </h2>
            <p
              style={{
                fontSize: '1.02rem',
                color: '#374151',
                marginBottom: '1rem'
              }}
            >
              For any questions about these Terms of Service, email:
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
                  'linear-gradient(90deg, #F97316 0%, #EF4444 100%)',
                color: 'white',
                fontWeight: 700,
                textDecoration: 'none',
                fontSize: '1rem',
                boxShadow: '0 10px 25px rgba(248,113,113,0.35)'
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
              marginBottom: '1.5rem'
            }}
          >
            <p
              style={{
                fontSize: '1.02rem',
                color: '#374151',
                fontWeight: 600,
                margin: 0
              }}
            >
              By using StudentStore, you agree to these Terms of Service.
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.75rem',
              fontSize: '0.98rem'
            }}
          >
            <Link
              to="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                color: '#F97316',
                fontWeight: 600,
                textDecoration: 'none'
              }}
            >
              ← Back to Home
            </Link>
            <span style={{ color: '#9CA3AF' }}>•</span>
            <Link
              to="/privacy-policy"
              style={{
                color: '#F97316',
                fontWeight: 600,
                textDecoration: 'none'
              }}
            >
              Read Privacy Policy →
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default TermsOfService
