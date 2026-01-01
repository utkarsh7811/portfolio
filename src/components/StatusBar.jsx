import React, { useState, useEffect } from 'react';
import { FiCpu, FiHardDrive, FiActivity, FiGlobe } from 'react-icons/fi';
import styles from './StatusBar.module.css';

const StatusBar = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className={styles.statusBar}>
            <div className={styles.left}>
                <div className={styles.stat}>
                    <span className={styles.indicator}></span>
                    <span>ONLINE</span>
                </div>
                <div className={styles.stat}>
                    <FiGlobe />
                    <span>REGION: <span className={styles.value}>ap-south-1</span></span>
                </div>
            </div>

            <div className={styles.right}>
                <div className={styles.stat}>
                    <FiCpu />
                    <span>CPU: <span className={styles.value}>12%</span></span>
                </div>
                <div className={styles.stat}>
                    <FiHardDrive />
                    <span>MEM: <span className={styles.value}>4.2GB</span></span>
                </div>
                <div className={styles.stat}>
                    <FiActivity />
                    <span>LATENCY: <span className={styles.value}>24ms</span></span>
                </div>
                <div className={styles.stat}>
                    <span>{time}</span>
                </div>
            </div>
        </div>
    );
};

export default StatusBar;
