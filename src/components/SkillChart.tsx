'use client';

import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { motion } from 'framer-motion';

interface SkillData {
  skill: string;
  level: number;
  category: 'primary' | 'secondary';
}

const skillData: SkillData[] = [
  { skill: 'Python', level: 90, category: 'primary' },
  { skill: 'SQL', level: 85, category: 'secondary' },
  { skill: 'Data Visualization', level: 80, category: 'primary' },
  { skill: 'Machine Learning', level: 75, category: 'secondary' },
  { skill: 'Statistical Analysis', level: 85, category: 'primary' },
  { skill: 'Azure Cloud', level: 70, category: 'secondary' },
];

export default function SkillChart() {
  const chartRef = useRef<SVGSVGElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    
    // Initial checks
    checkMobile();
    checkDarkMode();
    
    // Set up listeners
    window.addEventListener('resize', checkMobile);
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!chartRef.current) return;
    
    const svg = d3.select(chartRef.current);
    const width = chartRef.current.clientWidth;
    const height = chartRef.current.clientHeight;
    const margin = isMobile 
      ? { top: 20, right: 80, bottom: 40, left: 80 }
      : { top: 20, right: 80, bottom: 40, left: 120 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    // Clear any existing chart
    svg.selectAll('*').remove();

    // Add background
    svg.append('rect')
      .attr('width', width)
      .attr('height', height)
      .attr('fill', isDarkMode ? 'rgba(28, 28, 30, 0.3)' : 'rgba(240, 240, 240, 0.3)')
      .attr('rx', 8);

    // Create chart group
    const g = svg.append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    // Create scales
    const xScale = d3.scaleLinear()
      .domain([0, 100])
      .range([0, chartWidth]);

    const yScale = d3.scaleBand()
      .domain(skillData.map(d => d.skill))
      .range([0, chartHeight])
      .padding(0.3);

    // Add grid lines
    g.append('g')
      .attr('class', 'grid')
      .attr('transform', `translate(0, ${chartHeight})`)
      .call(
        d3.axisBottom(xScale)
          .tickSize(-chartHeight)
          .tickFormat(() => '')
          .ticks(5)
      )
      .call(g => g.select('.domain').remove())
      .call(g => g.selectAll('.tick line')
        .attr('stroke', isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)')
        .attr('stroke-dasharray', '3,3')
      );

    // Add X axis
    g.append('g')
      .attr('transform', `translate(0, ${chartHeight})`)
      .call(d3.axisBottom(xScale).ticks(5))
      .selectAll('text')
      .attr('fill', 'currentColor')
      .attr('font-size', '12px');

    // Add Y axis
    g.append('g')
      .call(d3.axisLeft(yScale))
      .selectAll('text')
      .attr('fill', 'currentColor')
      .attr('font-size', isMobile ? '10px' : '12px')
      .attr('font-weight', 'bold');

    // Add bars with animation
    g.selectAll('.bar')
      .data(skillData)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('y', d => yScale(d.skill) || 0)
      .attr('height', yScale.bandwidth())
      .attr('x', 0)
      .attr('width', 0)
      .attr('fill', d => {
        return d.category === 'primary' 
          ? `rgb(var(--primary))`
          : `rgb(var(--secondary))`;
      })
      .attr('rx', 4)
      .attr('filter', `drop-shadow(0px 2px 3px ${isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)'})`)
      .transition()
      .duration(1500)
      .delay((_, i) => i * 200)
      .ease(d3.easeCubicOut)
      .attr('width', d => xScale(d.level));

    // Add labels showing percentage
    g.selectAll('.label')
      .data(skillData)
      .enter()
      .append('text')
      .attr('class', 'label')
      .attr('y', d => (yScale(d.skill) || 0) + yScale.bandwidth() / 2 + 5)
      .attr('x', d => xScale(d.level) + 10)
      .attr('opacity', 0)
      .text(d => `${d.level}%`)
      .attr('font-size', '12px')
      .attr('fill', 'currentColor')
      .attr('font-weight', 'bold')
      .transition()
      .duration(1500)
      .delay((_, i) => i * 200 + 1000)
      .attr('opacity', 1);
  }, [isMobile, isDarkMode]);

  return (
    <motion.div 
      className="w-full h-80 mt-8 rounded-lg overflow-hidden border border-border bg-background/50 backdrop-blur-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <svg 
        ref={chartRef}
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      />
    </motion.div>
  );
} 