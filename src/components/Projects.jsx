import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiServer, FiCpu, FiDatabase } from 'react-icons/fi';
import styles from './Projects.module.css';

const projects = [
    {
        title: 'aws-serverless-ecommerce',
        desc: 'Scalable e-commerce backend using Lambda, DynamoDB, and API Gateway.',
        tech: ['AWS Lambda', 'DynamoDB', 'Node.js', 'Terraform'],
        status: 'Live',
        replicas: 'Auto-Scaling',
        region: 'us-east-1',
        github: '#',
        demo: '#'
    },
    {
    title: 'static-web-hosting',
    desc: 'High-performance static website hosted using cloud storage and CDN with HTTPS enabled.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Cloud Storage', 'CDN'],
    status: 'Live',
    replicas: 'N/A',
    region: 'Global',
    github: '#',
    demo: '#'
},

   {
    title: 'aws-auto-scaling-infrastructure',
    desc: 'Scalable AWS infrastructure with Auto Scaling Groups, Load Balancer, and real-time monitoring using CloudWatch.',
    tech: ['AWS EC2', 'Auto Scaling', 'Application Load Balancer', 'CloudWatch', 'Terraform'],
    status: 'Running',
    replicas: 'Auto',
    region: 'ap-south-1',
    github: '#',
    demo: '#'
},

    {
    title: 'aws-sandbox-vpc',
    desc: 'Isolated AWS sandbox VPC with public and private subnets, Internet Gateway, NAT Gateway, and secure routing for learning and testing.',
    tech: ['AWS VPC', 'Subnets', 'Route Tables', 'Internet Gateway', 'NAT Gateway', 'Terraform'],
    status: 'Active',
    replicas: 'N/A',
    region: 'ap-south-1',
    github: '#',
    demo: '#'
},

];

const Projects = () => {
    return (
        <section className={`section ${styles.projectsSection}`}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>&gt; Active Deployments</h2>
                    <span className={styles.registry}>registry.k8s.io/portfolio:v1.0</span>
                </div>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className={styles.projectCard}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.cardHeader}>
                                <span className={styles.cardTitle}>
                                    <FiServer /> {project.title}
                                </span>
                                <span className={styles.statusIndicator}>{project.status}</span>
                            </div>

                            <div className={styles.cardBody}>
                                <p className={styles.description}>{project.desc}</p>

                                <div className={styles.metaGrid}>
                                    <div className={styles.metaItem}>Region: <span>{project.region}</span></div>
                                    <div className={styles.metaItem}>Replicas: <span>{project.replicas}</span></div>
                                </div>

                                <div className={styles.techStack}>
                                    {project.tech.map((t, i) => (
                                        <span key={i} className={styles.techTag}>{t}</span>
                                    ))}
                                </div>

                                <div className={styles.actions}>
                                    <a href={project.github} className={`${styles.actionBtn} ${styles.secondary}`} target="_blank" rel="noopener noreferrer">
                                        <FiGithub /> Logs
                                    </a>
                                    <a href={project.demo} className={styles.actionBtn} target="_blank" rel="noopener noreferrer">
                                        <FiExternalLink /> Endpoint
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
