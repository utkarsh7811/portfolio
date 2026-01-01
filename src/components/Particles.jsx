import React from 'react';
import { motion } from 'framer-motion';
import { SiReact, SiDocker, SiKubernetes, SiAmazonwebservices, SiGooglecloud, SiPython, SiJavascript, SiLinux } from 'react-icons/si';

const icons = [SiReact, SiDocker, SiKubernetes, SiAmazonwebservices, SiGooglecloud, SiPython, SiJavascript, SiLinux];

const Particles = () => {
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            zIndex: 0,
            pointerEvents: 'none',
        }}>
            {[...Array(20)].map((_, i) => {
                const Icon = icons[i % icons.length];
                const initialX = Math.random() * 100;
                const initialY = Math.random() * 100;
                const duration = Math.random() * 20 + 10;

                return (
                    <motion.div
                        key={i}
                        initial={{ x: `${initialX}vw`, y: -100, opacity: 0 }}
                        animate={{
                            y: '100vh',
                            opacity: [0, 0.4, 0],
                            rotate: 360
                        }}
                        transition={{
                            duration: duration,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 10
                        }}
                        style={{
                            position: 'absolute',
                            left: `${initialX}%`,
                            color: 'var(--text-tertiary)',
                            fontSize: `${Math.random() * 20 + 20}px`,
                            filter: 'blur(1px)',
                        }}
                    >
                        <Icon />
                    </motion.div>
                );
            })}
        </div>
    );
};

export default Particles;
