"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./team.module.scss";
import { TEAM_DATA } from "@/constants";

const Team = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="team" className={styles.skills}>
      <div className={styles.container}>
        <motion.div
          ref={ref}
          className={styles.content}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className={styles.header}>
            <h2 className={styles.title}>
              Our <span>Freelancer Developer</span> Team
            </h2>
            <p className={styles.subtitle}>
              Meet the professionals behind the projects
            </p>
            <motion.button
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              whileHover={{
                scale: 1.1,
                backgroundPosition: "100% 0",
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={styles.gradientButton}
            >
              Join Our Team
            </motion.button>
          </motion.div>

          {/* Team Grid */}
          <motion.div className={styles.skillsGrid}>
            <motion.div
              className={styles.skillsContainer}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {TEAM_DATA.map((member) => (
                <motion.div
                  key={member.name}
                  className={styles.skillCard}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 15px 40px rgba(217, 251, 6, 0.2)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={styles.skillIcon}>
                    <img
                      src={member.img}
                      alt={member.name}
                      className={styles.teamImg}
                    />
                  </div>
                  <div className={styles.skillInfo}>
                    <h3 className={styles.skillName}>{member.name}</h3>
                    <div className={styles.skillCategory}>{member.role}</div>
                  </div>
                  <p className={styles.desc}>{member.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
