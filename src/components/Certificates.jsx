import React from 'react';
import { motion } from 'framer-motion';
import styles from './Certificates.module.css';

import ui from '../assets/certificate/ui/ux.png';
import cc from '../assets/certificate/ui/cc.jpeg';
import ca from '../assets/certificate/ui/ca.jpeg';
import aws from '../assets/certificate/ui/aws.png';
import hack from '../assets/certificate/ui/hackverse.png';

const certificates = [
  {
    title: 'UI/UX Design',
    issuer: 'Lovely Professional University',
    image: ui,
    link: '#',
  },
  {
    title: 'AWS Cloud Computing 101',
    issuer: 'Udemy',
    image: cc,
    link: '#',
  },
  {
    title: 'AWS Cloud Technical Essentials',
    issuer: 'Amazon Web Services',
    image: aws,
    link: '#',
  },
  {
    title: 'Cloud Architecting',
    issuer: 'Coursera',
    image: ca,
    link: '#',
  },
  {
    title: 'HackVerse Hackathon',
    issuer: 'HackVerse',
    image: hack,
    link: '#',
  },
];

const Certificates = () => {
  return (
    <section className={`section ${styles.certificatesSection}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>
            Relevant <span className={styles.highlight}>Certifications</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className={styles.certificateCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.imageContainer}>
                <img
                  src={cert.image}
                  alt={cert.title}
                  className={styles.certImage}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className={styles.placeholderImage} style={{ display: 'none' }}>
                  {cert.issuer}
                  <br />
                  {cert.title}
                </div>
              </div>

              <h3 className={styles.cardTitle}>{cert.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
