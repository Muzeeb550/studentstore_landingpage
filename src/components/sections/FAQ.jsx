import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HelpCircle, ChevronDown, Mail, MessageCircle, Plus, Minus } from 'lucide-react'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      id: 1,
      question: "Is StudentStore really free to use?",
      answer: "Yes! StudentStore is 100% free for students. We earn through affiliate commissions when you purchase products through our links, but you never pay extra. In fact, you often get to discover better products , able to compare prices  through our platform.",
      color: "#8B5CF6"
    },
    {
      id: 2,
      question: "How do I download the StudentStore app?",
      answer: "You have three options: Download the APK directly from this page, install as a Progressive Web App (PWA) from our website, or get it from the Indus Store. All options are free and give you the full StudentStore experience.",
      color: "#6366F1"
    },
    {
      id: 3,
      question: "Can I use StudentStore on iPhone/iOS?",
      answer: "Yes! While the native APK is for Android, you can use StudentStore on any device (including iPhone) by installing it as a Progressive Web App (PWA). Just visit our website and tap 'Add to Home Screen' in your browser menu.",
      color: "#10B981"
    },
    {
      id: 4,
      question: "How is StudentStore different from Amazon or Flipkart?",
      answer: "Same-Same but Different😁 - StudentStore is specifically designed for students with curated products, authentic peer reviews and budget-friendly options. Plus, we are developing AI-powered recommendation system, SkillStore with free learning resources and a community Posts section - features you won't find on regular e-commerce sites.",
      color: "#F59E0B"
    },
    {
      id: 5,
      question: "Are the product reviews real?",
      answer: "Absolutely! All reviews on StudentStore are written by verified students who have used the products. We have strict moderation to ensure authenticity. You can also see the reviewer's profile and their other reviews for transparency.",
      color: "#EC4899"
    },
    {
      id: 6,
      question: "What is the Chat Assistant feature?",
      answer: "[Developing] - Our AI-powered Chat Assistant helps you find the perfect products based on your needs and budget. Just tell it what you're looking for, and it will recommend products with reviews, ratings, and purchase options - like having a knowledgeable friend help you shop!",
      color: "#06B6D4"
    },
    {
      id: 7,
      question: "What is SkillStore?",
      answer: "[Developing] - SkillStore is learning platform with curated resources (YouTube videos, PDFs, articles) for various skills. You'll find learning roadmaps, career opportunities, and a bookmark feature to save your favorite resources.",
      color: "#8B5CF6"
    },
    {
      id: 8,
      question: "How do I write a review?",
      answer: "After signing in with your Google account, navigate to any product page and click 'Write Review'. You can add ratings, text reviews, and even upload photos. Your reviews help fellow students make better purchasing decisions!",
      color: "#6366F1"
    },
    {
      id: 9,
      question: "Can I save products for later?",
      answer: "Yes! Use the Wishlist feature (heart icon) to save products you're interested in. Your wishlist syncs across all devices, so you can browse on your laptop and purchase later on your phone.",
      color: "#10B981"
    },
    {
      id: 10,
      question: "Do I need to create an account?",
      answer: "You can browse products without an account, but to access features like Wishlist, Reviews, Chat Assistant, Posts, and SkillStore bookmarks, you'll need to sign in with your Google account. It's quick, secure, and takes just one click!",
      color: "#F59E0B"
    },
    {
      id: 11,
      question: "How does StudentStore make money if it's free?",
      answer: "We earn affiliate commissions when you purchase products through our links to partner stores like Amazon, Flipkart, etc. This doesn't cost you anything extra - you pay the same price (or sometimes less with our deals), and we get a small commission from the seller.",
      color: "#EC4899"
    },
    {
      id: 12,
      question: "Is my personal data safe?",
      answer: "Yes! We use Google OAuth for secure authentication and only collect essential information. We never sell your data to third parties. Check our Privacy Policy for complete details on how we protect and use your information.",
      color: "#06B6D4"
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section style={{
      padding: 'clamp(3rem, 6vw, 5rem) 0',
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
        style={{
          position: 'absolute',
          top: '10%',
          right: '-5%',
          width: 'clamp(250px, 35vw, 350px)',
          height: 'clamp(250px, 35vw, 350px)',
          background: 'linear-gradient(135deg, #8B5CF6, #6366F1)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

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
            <HelpCircle size={16} />
            FAQ
          </motion.div>

          <h2 style={{ 
            marginBottom: '1rem',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '800',
            color: '#1F2937',
            lineHeight: '1.2',
            letterSpacing: '-0.02em'
          }}>
            Frequently Asked Questions
          </h2>
          
          <p style={{ 
            color: '#6B7280', 
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', 
            maxWidth: '700px', 
            margin: '0 auto',
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
                marginBottom: 'clamp(0.875rem, 2vw, 1.125rem)'
              }}
            >
              <motion.div
                whileHover={{ scale: 1.005 }}
                style={{
                  background: 'white',
                  borderRadius: '1rem',
                  boxShadow: openIndex === index 
                    ? `0 10px 30px ${faq.color}20` 
                    : '0 4px 12px rgba(0, 0, 0, 0.08)',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  border: openIndex === index ? `2px solid ${faq.color}` : '2px solid transparent'
                }}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  aria-label={`FAQ: ${faq.question}`}
                  style={{
                    width: '100%',
                    padding: 'clamp(1.25rem, 3vw, 1.5rem)',
                    background: 'transparent',
                    border: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    textAlign: 'left',
                    gap: '1rem'
                  }}
                >
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    gap: '1rem', 
                    flex: 1,
                    minWidth: 0
                  }}>
                    {/* Icon */}
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: openIndex === index 
                        ? `linear-gradient(135deg, ${faq.color}, ${faq.color}dd)` 
                        : `${faq.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.3s ease'
                    }}>
                      {openIndex === index ? (
                        <Minus size={20} color={openIndex === index ? 'white' : faq.color} strokeWidth={2.5} />
                      ) : (
                        <Plus size={20} color={faq.color} strokeWidth={2.5} />
                      )}
                    </div>

                    {/* Question text */}
                    <span style={{
                      fontSize: 'clamp(1rem, 2.25vw, 1.15rem)',
                      fontWeight: '600',
                      color: openIndex === index ? faq.color : '#1F2937',
                      lineHeight: '1.5',
                      wordBreak: 'break-word',
                      transition: 'color 0.3s ease'
                    }}>
                      {faq.question}
                    </span>
                  </div>
                  
                  {/* Arrow */}
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: openIndex === index ? `${faq.color}15` : 'transparent',
                      transition: 'background 0.3s ease'
                    }}
                  >
                    <ChevronDown 
                      size={20} 
                      color={openIndex === index ? faq.color : '#6B7280'} 
                      strokeWidth={2.5}
                    />
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
                      <div style={{
                        padding: '0 clamp(1.25rem, 3vw, 1.5rem) clamp(1.25rem, 3vw, 1.5rem)',
                        paddingLeft: 'clamp(4.5rem, 10vw, 5.5rem)',
                        color: '#6B7280',
                        fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
                        lineHeight: '1.75',
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
            marginTop: 'clamp(3rem, 6vw, 4rem)',
            padding: 'clamp(2rem, 4vw, 3rem) clamp(1.5rem, 3vw, 2rem)',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '1.5rem',
            color: 'white',
            textAlign: 'center',
            boxShadow: '0 20px 40px rgba(102, 126, 234, 0.3)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Background decoration */}
          <div style={{
            position: 'absolute',
            top: '-50%',
            right: '-20%',
            width: '200px',
            height: '200px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            filter: 'blur(40px)',
            pointerEvents: 'none'
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            {/* Icon */}
            <div style={{
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(255, 255, 255, 0.3)'
            }}>
              <MessageCircle size={36} color="white" strokeWidth={2} />
            </div>

            <h3 style={{ 
              marginBottom: '1rem', 
              color: 'white',
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              fontWeight: '800',
              letterSpacing: '-0.02em'
            }}>
              Still have questions?
            </h3>
            
            <p style={{ 
              marginBottom: '1.75rem', 
              color: 'rgba(255, 255, 255, 0.95)',
              fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
              maxWidth: '550px',
              margin: '0 auto 1.75rem',
              lineHeight: '1.6'
            }}>
              We're here to help! Reach out to our support team and we'll get back to you as soon as possible.
            </p>
            
            <motion.a
              href="mailto:studentstoreforstudents@gmail.com"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                padding: 'clamp(0.875rem, 2.25vw, 1rem) clamp(1.5rem, 3.5vw, 2rem)',
                background: 'white',
                color: '#8B5CF6',
                borderRadius: '0.75rem',
                fontWeight: '700',
                fontSize: 'clamp(1rem, 2.25vw, 1.1rem)',
                textDecoration: 'none',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
                border: 'none',
                transition: 'all 0.3s ease'
              }}
            >
              <Mail size={20} strokeWidth={2.5} />
              Contact Support
            </motion.a>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section button > div:first-child {
            gap: 0.75rem !important;
          }

          section button > div:first-child > div {
            width: 36px !important;
            height: 36px !important;
          }
        }

        @media (max-width: 640px) {
          section {
            padding: 2.5rem 0 !important;
          }

          section button {
            padding: 1rem !important;
          }

          section button > div:first-child > span {
            font-size: 0.95rem !important;
          }
        }

        @media (max-width: 480px) {
          section > div {
            padding: 0 1rem !important;
          }

          section button > div:first-child {
            gap: 0.5rem !important;
          }

          section button > div:first-child > div {
            width: 32px !important;
            height: 32px !important;
          }

          section .testimonial-card > div {
            padding-left: 3.5rem !important;
          }
        }
      `}</style>
    </section>
  )
}

export default FAQ