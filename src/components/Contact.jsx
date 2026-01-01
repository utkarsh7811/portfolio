import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <section className={styles.contactSection}>
            <div className={styles.terminalCard}>
                <div className={styles.header}>user@portfolio:~/contact</div>

                <div className={styles.body}>
                    <div className={styles.commandRow}>
                        <span className={styles.prompt}>$</span>
                        <span className={styles.command}>./send_message.sh</span>
                    </div>

                    <form className={styles.form}>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>--name</label>
                            <input type="text" className={styles.input} placeholder="Enter your name" />
                        </div>

                        <div className={styles.inputGroup}>
                            <label className={styles.label}>--email</label>
                            <input type="email" className={styles.input} placeholder="Enter your email" />
                        </div>

                        <div className={styles.inputGroup}>
                            <label className={styles.label}>--message</label>
                            <textarea className={styles.textarea} placeholder="Write your message here..."></textarea>
                        </div>

                        <button type="button" className={styles.submitBtn}>
                            &gt; Execute
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
