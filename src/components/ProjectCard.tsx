'use client';

import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

export default function ProjectCard({ title, description, technologies, link }: ProjectCardProps) {
  return (
    <motion.div
      className="bg-background rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 card-hover-effect"
      whileHover={{ 
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      <div className="p-6 relative z-10">
        <motion.h3 
          className="text-xl font-semibold mb-2"
          whileHover={{ scale: 1.02 }}
        >
          {title}
        </motion.h3>
        <p className="text-muted-foreground mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, techIndex) => (
            <motion.span
              key={techIndex}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(var(--primary), 0.2)' }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * techIndex }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity button-hover-effect"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Project
        </motion.a>
      </div>
    </motion.div>
  );
} 