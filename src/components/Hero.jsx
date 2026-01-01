import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
import styles from './Hero.module.css';
import Particles from './Particles';

const Hero = () => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setStep((prev) => (prev < 6 ? prev + 1 : prev));
        }, 800);
        return () => clearInterval(timer);
    }, []);

    const lineVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    };

    return (
        <section className={styles.heroSection}>
            <div className={styles.background}></div>
            <Particles />

            <div className={styles.terminalWindow}>
                <div className={styles.terminalHeader}>
                    <div className={`${styles.dot} ${styles.red}`}></div>
                    <div className={`${styles.dot} ${styles.yellow}`}></div>
                    <div className={`${styles.dot} ${styles.green}`}></div>
                    <span className={styles.terminalTitle}>bash — user@utkarsh: ~</span>
                </div>

                <div className={styles.terminalBody}>
                    <motion.div
                        className={styles.line}
                        initial="hidden" animate={step >= 1 ? "visible" : "hidden"} variants={lineVariants}
                    >
                        <span className={styles.prompt}>user@cloud-portfolio:~$</span>
                        <span className={styles.command}>init_sequence --verbose</span>
                    </motion.div>

                    <motion.div
                        className={styles.line}
                        initial="hidden" animate={step >= 2 ? "visible" : "hidden"} variants={lineVariants}
                    >
                        <span className={styles.output}>[OK] Loading profile data...</span>
                    </motion.div>

                    <motion.div
                        className={styles.line}
                        initial="hidden" animate={step >= 3 ? "visible" : "hidden"} variants={lineVariants}
                    >
                        <span className={styles.output}>[OK] Connecting to GitHub API...</span>
                    </motion.div>

                    <motion.div
                        className={styles.line}
                        initial="hidden" animate={step >= 4 ? "visible" : "hidden"} variants={lineVariants}
                    >
                        <span className={styles.prompt}>user@cloud-portfolio:~$</span>
                        <span className={styles.command}>cat /etc/profile_info</span>
                    </motion.div>

                    <motion.div
                        className={styles.line}
                        initial="hidden" animate={step >= 5 ? "visible" : "hidden"} variants={lineVariants}
                    >
                        <div className={styles.profileContainer}>
                            <div className={styles.profileCard}>
                                <div className={styles.profileImageContainer}>
                                    <img
                                        src="https://media.licdn.com/dms/image/v2/D5603AQG_DrR6eghwig/profile-displayphoto-crop_800_800/B56ZtGbvy4IkAM-/0/1766413270453?e=1769040000&v=beta&t=ici_c046M-2-wGj_z-8p5J2uqlCpIC_sNFl52T3a4U0"
                                        alt="Utkarsh Tiwari"
                                        className={styles.profileImage}
                                    />
                                    <div className={styles.glitchEffect}></div>
                                </div>

                                <div className={styles.profileInfo}>
                                    <h1 className={styles.name}>Utkarsh Tiwari</h1>
                                    <p className={styles.role}>&gt; Aspiring Cloud Engineer</p>
                                    <p className={styles.bio}>
                                        IT Student (B.Tech IT – LPU) | Specializing in Cloud Computing (AWS | Azure | GCP)
                                    </p>
                                    <a href="https://github.com/utkarsh7811" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                        <FiGithub /> github.com/utkarsh7811
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.line}
                        initial="hidden" animate={step >= 6 ? "visible" : "hidden"} variants={lineVariants}
                    >
                        <span className={styles.prompt}>user@cloud-portfolio:~$</span>
                        <span className={styles.cursor}></span>
                    </motion.div>
                </div>
            </div>

            <div className={`${styles.decorativeCorner} ${styles.topLeft}`}></div>
            <div className={`${styles.decorativeCorner} ${styles.bottomRight}`}></div>
        </section>
    );
};

export default Hero;
