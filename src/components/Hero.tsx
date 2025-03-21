'use client';

import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';
import TypedText from './TypedText';

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="section-padding bg-background pt-32 relative min-h-[calc(100vh-64px)] flex items-center">
      <ParticleBackground />
      <div className="container">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-12"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div className="md:w-1/2 text-center md:text-left" variants={item}>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 gradient-heading"
              variants={item}
            >
              Hello! I'm Kunal Suhanda
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground mb-4"
              variants={item}
            >
              Master's student in Information Systems with a concentration in Data Science & Analytics at Pace University, New York. 
            </motion.p>
            <motion.p 
              className="text-xl md:text-2xl mb-8"
              variants={item}
            >
              <span>Passionate about </span>
              <TypedText 
                strings={[
                  'data-driven decision-making',
                  'machine learning',
                  'data visualization',
                  'statistical analysis',
                  'cloud computing'
                ]}
              />
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              variants={item}
            >
              <motion.a
                href="#projects"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-all duration-300 button-hover-effect"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 10px 25px -5px rgba(var(--primary), 0.3)"
                }}
                whileTap={{ scale: 0.97 }}
              >
                View My Projects
              </motion.a>
              <motion.a
                href="/docs/kunal-resume.pdf"
                target="_blank"
                className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-all duration-300"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 10px 25px -5px rgba(var(--primary), 0.2)"
                }}
                whileTap={{ scale: 0.97 }}
              >
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div 
            className="md:w-2/5"
            variants={item}
          >
            <motion.div 
              className="rounded-full overflow-hidden border-4 border-primary mx-auto max-w-xs relative"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.5
              }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.4 }
              }}
            >
              <img 
                src="/images/kunal-profile.jpeg" 
                alt="Kunal Suhanda" 
                className="w-full h-auto"
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0"
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 