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
        title: 'k8s-microservices-mesh',
        desc: 'Microservices architecture deployed on GKE with Istio integration.',
        tech: ['Kubernetes', 'Istio', 'Go', 'GCP'],
        status: 'Running',
        replicas: '3/3',
        region: 'us-central1',
        github: '#',
        demo: '#'
    },
    {
        title: 'cicd-pipeline-dashboard',
        desc: 'Real-time dashboard for visualizing Jenkins and GitHub Actions pipelines.',
        tech: ['React', 'WebSocket', 'Jenkins', 'Docker'],
        status: 'Deployed',
        replicas: '2/2',
        region: 'eu-west-1',
        github: '#',
        demo: '#'
    },
    {
        title: 'terraform-modules-registry',
        desc: 'Custom Terraform modules for multi-cloud infrastructure provisioning.',
        tech: ['Terraform', 'HCL', 'AWS', 'Azure'],
        status: 'Archived',
        replicas: 'N/A',
        region: 'global',
        github: '#',
        demo: '#'
    }
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
