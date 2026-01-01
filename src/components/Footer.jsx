import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>
                &copy; {new Date().getFullYear()} Utkarsh. Built with React <span className={styles.heart}>&hearts;</span> & Vite.
            </p>
            <p>
                Deployment SHA: <span className={styles.hash}>a1b2c3d</span> | Status: <span style={{ color: 'var(--accent-green)' }}>Healthy</span>
            </p>
        </footer>
    );
};

export default Footer;
