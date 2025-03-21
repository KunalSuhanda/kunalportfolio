'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Experience {
  title: string;
  company: string;
  date: string;
  location: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    title: "Research Assistant - Data Analytics",
    company: "Pace University, Seidenberg School of CSIS",
    date: "January 2023 - Present",
    location: "New York, NY",
    description: [
      "Conducted research on data analytics techniques with faculty mentor.",
      "Analyzed large datasets using Python and statistical methods.",
      "Presented findings at departmental research symposium."
    ]
  },
  {
    title: "Azure Data Engineer Intern",
    company: "Microsoft",
    date: "May 2022 - August 2022",
    location: "Remote",
    description: [
      "Implemented ETL processes using Azure Data Factory.",
      "Developed data pipelines for analytics and reporting.",
      "Collaborated with cross-functional teams to optimize data workflows."
    ]
  },
  {
    title: "Data Analyst",
    company: "XYZ Analytics",
    date: "June 2020 - April 2022",
    location: "Mumbai, India",
    description: [
      "Created dashboards using Power BI for executive decision-making.",
      "Managed SQL databases and generated monthly reports.",
      "Implemented data quality control measures, reducing errors by 35%."
    ]
  }
];

export default function ExperienceTimeline() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Set up listener
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-heading"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Professional Experience
        </motion.h2>
        <motion.p 
          className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          My professional journey across various roles in data science and analytics.
        </motion.p>
        
        <div className="relative">
          {/* Vertical line */}
          <div className={`absolute ${isMobile ? 'left-4' : 'left-1/2 transform -translate-x-1/2'} h-full w-1 bg-primary/20 rounded-full`}></div>
          
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Timeline dot with animated pulse effect */}
                <motion.div 
                  className={`absolute ${isMobile ? 'left-4' : 'left-1/2'} transform ${isMobile ? '-translate-x-1/2' : '-translate-x-1/2'} -translate-y-1/2 w-5 h-5 rounded-full bg-primary shadow-glow z-10`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.2 }}
                >
                  <motion.div 
                    className="absolute inset-0 rounded-full bg-primary/30"
                    animate={{ 
                      scale: [1, 1.8, 1],
                      opacity: [1, 0, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "loop",
                      times: [0, 0.5, 1]
                    }}
                  />
                </motion.div>
                
                {/* Content box */}
                <div 
                  className={`relative ${
                    isMobile 
                      ? 'ml-12 w-[calc(100%-3rem)]' 
                      : index % 2 === 0 
                        ? 'ml-auto pr-10 text-right w-5/12' 
                        : 'mr-auto pl-10 w-5/12'
                  } p-6 bg-background rounded-xl shadow-lg border border-border hover:shadow-xl transition-shadow duration-300`}
                >
                  {/* Timeline connector line */}
                  <div 
                    className={`absolute ${
                      isMobile 
                        ? 'left-0 top-1/2 w-8 h-px -translate-x-full' 
                        : index % 2 === 0 
                          ? 'right-full top-1/2 w-10 h-px' 
                          : 'left-full top-1/2 w-10 h-px'
                    } bg-primary/40`}
                  />
                  
                  <motion.h3 
                    className="text-xl font-bold"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  >
                    {exp.title}
                  </motion.h3>
                  <motion.h4 
                    className="text-lg text-muted-foreground mt-1"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.4 }}
                  >
                    {exp.company} • {exp.location}
                  </motion.h4>
                  
                  {/* Date badge */}
                  <motion.div 
                    className={`absolute ${
                      isMobile 
                        ? 'right-4 -top-3' 
                        : index % 2 === 0 
                          ? 'right-full mr-12 top-6' 
                          : 'left-full ml-12 top-6'
                    } px-4 py-1 bg-primary/10 text-primary rounded-full`}
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {exp.date}
                  </motion.div>
                  
                  <motion.ul 
                    className="mt-4 text-sm text-muted-foreground space-y-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.5 }}
                  >
                    {exp.description.map((item, i) => (
                      <motion.li 
                        key={i} 
                        className={`flex items-start ${isMobile || index % 2 !== 0 ? '' : 'flex-row-reverse text-right'}`}
                        initial={{ opacity: 0, x: isMobile || index % 2 !== 0 ? -10 : 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.2 + 0.5 + (i * 0.1) }}
                      >
                        <span className={`inline-block w-1.5 h-1.5 rounded-full bg-primary mt-1.5 ${isMobile || index % 2 !== 0 ? 'mr-2' : 'ml-2'}`}></span>
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 