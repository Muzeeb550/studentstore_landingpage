import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      id: 1,
      question: "Is StudentStore really free to use?",
      answer: "Yes! StudentStore is 100% free for students. We earn through affiliate commissions when you purchase products through our links, but you never pay extra. In fact, you often get better deals through our platform."
    },
    {
      id: 2,
      question: "How do I download the StudentStore app?",
      answer: "You have three options: Download the APK directly from this page, install as a Progressive Web App (PWA) from our website, or get it from the Indus Store. All options are free and give you the full StudentStore experience."
    },
    {
      id: 3,
      question: "Can I use StudentStore on iPhone/iOS?",
      answer: "Yes! While the native APK is for Android, you can use StudentStore on any device (including iPhone) by installing it as a Progressive Web App (PWA). Just visit our website and tap 'Add to Home Screen' in your browser menu."
    },
    {
      id: 4,
      question: "How is StudentStore different from Amazon or Flipkart?",
      answer: "Same-Same but Different😁 - StudentStore is specifically designed for students with curated products, authentic peer reviews and budget-friendly options. Plus, we are developing AI-powered recommendation system, SkillStore with free learning resources and a community Posts section - features you won't find on regular e-commerce sites."
    },
    {
      id: 5,
      question: "Are the product reviews real?",
      answer: "Absolutely! All reviews on StudentStore are written by verified students who have used the products. We have strict moderation to ensure authenticity. You can also see the reviewer's profile and their other reviews for transparency."
    },
    {
      id: 6,
      question: "What is the Chat Assistant feature?",
      answer: "[Developing] - Our AI-powered Chat Assistant helps you find the perfect products based on your needs and budget. Just tell it what you're looking for, and it will recommend products with reviews, ratings, and purchase options - like having a knowledgeable friend help you shop!"
    },
    {
      id: 7,
      question: "What is SkillStore?",
      answer: "[Developing] - SkillStore is learning platform with curated resources (YouTube videos, PDFs, articles) for various skills. You'll find learning roadmaps, career opportunities, and a bookmark feature to save your favorite resources."
    },
    {
      id: 8,
      question: "How do I write a review?",
      answer: "After signing in with your Google account, navigate to any product page and click 'Write Review'. You can add ratings, text reviews, and even upload photos. Your reviews help fellow students make better purchasing decisions!"
    },
    {
      id: 9,
      question: "Can I save products for later?",
      answer: "Yes! Use the Wishlist feature (heart icon) to save products you're interested in. Your wishlist syncs across all devices, so you can browse on your laptop and purchase later on your phone."
    },
    {
      id: 10,
      question: "Do I need to create an account?",
      answer: "You can browse products without an account, but to access features like Wishlist, Reviews, Chat Assistant, Posts, and SkillStore bookmarks, you'll need to sign in with your Google account. It's quick, secure, and takes just one click!"
    },
    {
      id: 11,
      question: "How does StudentStore make money if it's free?",
      answer: "We earn affiliate commissions when you purchase products through our links to partner stores like Amazon, Flipkart, etc. This doesn't cost you anything extra - you pay the same price (or sometimes less with our deals), and we get a small commission from the seller."
    },
    {
      id: 12,
      question: "Is my personal data safe?",
      answer: "Yes! We use Google OAuth for secure authentication and only collect essential information. We never sell your data to third parties. Check our Privacy Policy for complete details on how we protect and use your information."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section style={{
      padding: 'clamp(2.5rem, 5vw, 4rem) 0',
      background: 'linear-gradient(to bottom, #F9FAFB, white)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="faq-bg-decoration"
        style={{
          position: 'absolute',
          top: '10%',
          right: '-5%',
          width: 'clamp(200px, 30vw, 300px)',
          height: 'clamp(200px, 30vw, 300px)',
          background: 'linear-gradient(135deg, #8B5CF6, #6366F1)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

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
            Frequently Asked Questions
          </h2>
          <p style={{ 
            color: '#6B7280', 
            fontSize: 'clamp(1rem, 2vw, 1.1rem)', 
            maxWidth: '600px', 
            margin: '0 auto',
            padding: '0 1rem',
            lineHeight: '1.6'
          }}>
            Everything you need to know about StudentStore
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            maxWidth: '900px',
            margin: '0 auto'
          }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              style={{
                marginBottom: 'clamp(0.75rem, 2vw, 1rem)'
              }}
            >
              <motion.div
                whileHover={{ scale: 1.005 }}
                style={{
                  background: 'white',
                  borderRadius: 'clamp(0.75rem, 2vw, 1rem)',
                  boxShadow: openIndex === index 
                    ? '0 8px 20px rgba(139, 92, 246, 0.2)' 
                    : '0 2px 8px rgba(0, 0, 0, 0.1)',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  border: openIndex === index ? '2px solid #8B5CF6' : '2px solid transparent'
                }}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  aria-label={`FAQ: ${faq.question}`}
                  style={{
                    width: '100%',
                    padding: 'clamp(1rem, 2.5vw, 1.5rem)',
                    background: 'transparent',
                    border: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    textAlign: 'left',
                    gap: 'clamp(0.75rem, 2vw, 1rem)'
                  }}
                >
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    gap: 'clamp(0.75rem, 2vw, 1rem)', 
                    flex: 1,
                    minWidth: 0
                  }}>
                    <span className="faq-icon" style={{
                      fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                      color: openIndex === index ? '#8B5CF6' : '#6B7280',
                      flexShrink: 0,
                      userSelect: 'none'
                    }}>
                      {openIndex === index ? '❓' : '❔'}
                    </span>
                    <span style={{
                      fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                      fontWeight: '600',
                      color: openIndex === index ? '#8B5CF6' : '#1F2937',
                      lineHeight: '1.5',
                      wordBreak: 'break-word'
                    }}>
                      {faq.question}
                    </span>
                  </div>
                  
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="faq-arrow"
                    style={{
                      fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                      color: openIndex === index ? '#8B5CF6' : '#6B7280',
                      flexShrink: 0,
                      userSelect: 'none'
                    }}
                  >
                    ▼
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="faq-answer" style={{
                        padding: '0 clamp(1rem, 2.5vw, 1.5rem) clamp(1rem, 2.5vw, 1.5rem) clamp(3rem, 8vw, 4.5rem)',
                        color: '#6B7280',
                        fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
                        lineHeight: '1.7',
                        wordBreak: 'break-word'
                      }}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            marginTop: 'clamp(2.5rem, 5vw, 3rem)',
            textAlign: 'center',
            padding: 'clamp(1.5rem, 3vw, 2rem)',
            background: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)',
            borderRadius: 'clamp(0.75rem, 2vw, 1rem)',
            color: 'white'
          }}
        >
          <h3 style={{ 
            marginBottom: 'clamp(0.75rem, 2vw, 1rem)', 
            color: 'white',
            fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
            fontWeight: '700'
          }}>
            Still have questions?
          </h3>
          <p style={{ 
            marginBottom: 'clamp(1rem, 2.5vw, 1.5rem)', 
            color: 'rgba(255, 255, 255, 0.95)',
            fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
            maxWidth: '500px',
            margin: '0 auto clamp(1rem, 2.5vw, 1.5rem)',
            lineHeight: '1.6'
          }}>
            We're here to help! Reach out to our support team.
          </p>
          <motion.a
            href="mailto:studentstoreforstudents@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'clamp(0.4rem, 1vw, 0.5rem)',
              padding: 'clamp(0.75rem, 2vw, 0.875rem) clamp(1.25rem, 3vw, 1.75rem)',
              background: 'white',
              color: '#8B5CF6',
              borderRadius: '0.5rem',
              fontWeight: '600',
              fontSize: 'clamp(0.95rem, 2vw, 1rem)',
              textDecoration: 'none',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              whiteSpace: 'nowrap'
            }}
          >
            📧 Contact Support
          </motion.a>
        </motion.div>
      </div>

      <style>{`
        .text-center {
          text-align: center;
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .faq-answer {
            padding-left: clamp(1rem, 5vw, 3rem) !important;
          }

          .faq-icon {
            margin-top: 0.1rem;
          }
        }

        @media (max-width: 480px) {
          .faq-bg-decoration {
            display: none;
          }

          .faq-arrow {
            font-size: 0.9rem !important;
          }
        }
      `}</style>
    </section>
  )
}

export default FAQ
