'use client';

import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'End-to-End Olympic Data Pipeline using Azure',
    description: 'Developed a robust data pipeline using Azure Data Factory to extract, store, and process Olympic data. Created interactive Tableau dashboards visualizing athlete performance and medal trends.',
    technologies: ['Azure Data Factory', 'Azure Databricks', 'PySpark', 'SQL', 'Tableau'],
    link: 'https://github.com/KunalSuhanda/azure-olympic-data-pipeline'
  },
  {
    title: 'Obstacle Avoiding Robot',
    description: 'Enhanced robot navigation precision by 40% through advanced Arduino sensor data analytics. Increased obstacle detection efficiency by 50% using statistical methods.',
    technologies: ['Arduino', 'Sensors', 'Statistical Analysis', 'Data Analytics'],
    link: 'https://github.com/KunalSuhanda'
  },
  {
    title: 'PwC Power BI Job Simulation',
    description: 'Designed insightful Power BI dashboards to analyze HR data. Provided actionable insights addressing gender balance in executive management.',
    technologies: ['Power BI', 'Data Analysis', 'HR Analytics', 'Dashboard Design'],
    link: 'https://github.com/KunalSuhanda/PwC-Digital-Accelerator-PowerBI'
  }
]

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-heading"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        <motion.p 
          className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A selection of my data science and analytics projects showcasing my expertise in Azure cloud services, data visualization, and analytical problem-solving.
        </motion.p>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
} 