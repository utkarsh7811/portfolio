import React from 'react';
import { motion } from 'framer-motion';
import { SiAmazonwebservices, SiGooglecloud, SiDocker, SiKubernetes, SiTerraform, SiJenkins, SiGithubactions, SiLinux, SiPython, SiGo } from 'react-icons/si';
import styles from './Skills.module.css';

const skills = [
    { name: 'AWS', icon: SiAmazonwebservices, desc: 'EC2, S3, Lambda, VPC', status: 'Operational' },
    { name: 'Google Cloud', icon: SiGooglecloud, desc: 'GKE, Cloud Run, BigQuery', status: 'Operational' },
    { name: 'Kubernetes', icon: SiKubernetes, desc: 'Orchestration & Helm', status: 'High Load' },
    { name: 'Docker', icon: SiDocker, desc: 'Containerization', status: 'Operational' },
    { name: 'Terraform', icon: SiTerraform, desc: 'IaC & State Management', status: 'Synced' },
    { name: 'CI/CD', icon: SiGithubactions, desc: 'GitHub Actions / Jenkins', status: 'Active' },
    { name: 'Linux', icon: SiLinux, desc: 'Shell Scripting, Kernel', status: 'Stable' },
    { name: 'Go', icon: SiGo, desc: 'Backend Services', status: 'Operational' },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const Skills = () => {
    return (
        <section className={`container section ${styles.skillsSection}`}>
            <div className={styles.header}>
                <h2 className={styles.title}>&gt; System Status / Tech Stack</h2>
                <span className={styles.uptime}>All Systems Operational</span>
            </div>

            <motion.div
                className={styles.grid}
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                {skills.map((skill, index) => (
                    <motion.div key={index} className={styles.card} variants={item}>
                        <div className={styles.cardHeader}>
                            <div className={styles.iconWrapper}>
                                <skill.icon />
                            </div>
                            <div className={styles.status}>
                                <div className={styles.statusDot}></div>
                                {skill.status}
                            </div>
                        </div>
                        <div className={styles.cardBody}>
                            <h3 className={styles.cardTitle}>{skill.name}</h3>
                            <p className={styles.cardDesc}>{skill.desc}</p>
                            <div className={styles.loadGraph}>
                                <div
                                    className={styles.loadBar}
                                    style={{
                                        animationDelay: `${index * 0.2}s`,
                                        width: `${Math.random() * 40 + 30}%`
                                    }}
                                ></div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;
