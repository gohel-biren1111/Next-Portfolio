"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaDownload, FaFileAlt, FaCheck } from "react-icons/fa";
import styles from "./Resume.module.scss";
import { RESUME_DATA } from "@/constants";
import toast, { Toaster } from "react-hot-toast";

const Resume: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const resume: any = RESUME_DATA;

  // Open PDF in new tab
  const handlePreview = () => {
    if (resume.downloadUrl) {
      window.open(resume.downloadUrl, "_blank");
    } else {
      toast.error("Resume URL not found.");
    }
  };

  // Download PDF
  const handleDownload = () => {
    if (resume.downloadUrl) {
      const link = document.createElement("a");
      link.href = resume.downloadUrl;
      link.download = "Biren_Gohel_Resume.pdf";
      link.click();
    } else {
      toast.error("Resume URL not found.");
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      <Toaster position="top-right" />
      <div id="resume" className={styles.resume}>
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
                <span>Resume</span>/ CV 📄
              </h2>
              <p className={styles.subtitle}>
                Download my comprehensive professional profile
              </p>
            </motion.div>

            <div className={styles.resumeWrapper}>
              {/* Resume Preview */}
              <motion.div
                variants={itemVariants}
                className={styles.resumePreview}
              >
                <div className={styles.previewContainer}>
                  <motion.div
                    className={styles.previewCard}
                    whileHover={{ scale: 1.02, rotateY: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={styles.previewHeader}>
                      <FaFileAlt className={styles.fileIcon} />
                      <div className={styles.fileName}>
                        Biren_Gohel_Resume.pdf
                      </div>
                    </div>

                    <div className={styles.previewContent}>
                      <div className={styles.mockResume}>
                        {Array.from({ length: 6 }).map((_, idx) => (
                          <div key={idx} className={styles.resumeLine}></div>
                        ))}
                      </div>
                    </div>

                    <motion.button
                      className={styles.previewButton}
                      onClick={handlePreview}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Quick Preview
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>

              {/* Resume Info */}
              <motion.div variants={itemVariants} className={styles.resumeInfo}>
                <h3 className={styles.infoTitle}>{resume.title}</h3>
                <p className={styles.infoDescription}>{resume.description}</p>

                <div className={styles.resumeSections}>
                  <h4 className={styles.sectionsTitle}>What&apos;s Inside</h4>
                  <div className={styles.sectionsList}>
                    {resume.sections.map((section: string, idx: number) => (
                      <motion.div
                        key={idx}
                        className={styles.sectionItem}
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                        }
                        transition={{ delay: 0.5 + idx * 0.1 }}
                      >
                        <FaCheck className={styles.checkIcon} />
                        <span>{section}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className={styles.downloadActions}>
                  <motion.button
                    className={styles.downloadButton}
                    onClick={handleDownload}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaDownload /> Download Resume
                  </motion.button>

                  <motion.button
                    className={styles.contactButton}
                    onClick={() => {
                      const contactSection = document.getElementById("contact");
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get In Touch
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Resume;
