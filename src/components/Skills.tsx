'use client';

import { motion } from 'framer-motion';
import { DataAnalysisIcon, MachineLearningIcon, CloudComputingIcon } from './AnimatedSvgIcons';
import SkillChart from './SkillChart';

const skillCategories = [
  {
    title: 'Data Analysis',
    icon: DataAnalysisIcon,
    description: 'Expert in data processing, statistical analysis, and visualization using Python and SQL.',
    color: 'text-primary'
  },
  {
    title: 'Machine Learning',
    icon: MachineLearningIcon,
    description: 'Experienced in developing and deploying machine learning models for real-world applications.',
    color: 'text-secondary'
  },
  {
    title: 'Cloud Computing',
    icon: CloudComputingIcon,
    description: 'Proficient in cloud services, particularly Azure, for scalable data solutions.',
    color: 'text-primary'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-background">
      <div className="container">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-heading"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>
        
        <motion.p 
          className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Specialized in data science and analytics, with expertise in various tools and technologies.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="flex flex-col items-center p-6 rounded-xl border border-border bg-background/50 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className={`mb-4 ${category.color}`}>
                <category.icon />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">
                {category.title}
              </h3>
              <p className="text-muted-foreground text-center">
                {category.description}
              </p>
            </motion.div>
          ))}
        </div>

        <SkillChart />
      </div>
    </section>
  );
} 