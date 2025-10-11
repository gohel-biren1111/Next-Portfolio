"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import styles from "./Contact.module.scss";
import { useState } from "react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = {
    description:
      "Feel free to reach out for collaborations or just a friendly hello 👋",
    availability: "Available for freelance and full-time opportunities",
    email: "birengohel01111@gmail.com",
    phone: "+91 91046 14653",
    location: "Surat, India",
    social: {
      github: "https://github.com/biren-gohel-1111",
      linkedin: "https://www.linkedin.com/in/biren-gohel-14b3012b6/",
      instagram: "https://instagram.com/biren_1111",
    },
  };

  // ----- Formik Validation Schema -----
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const onSubmit = async (values: any, { resetForm }: any) => {
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // console.log("Form Data:", values);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      resetForm();
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ----- Framer Motion Variants -----
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floatingIcons = [
    { icon: FaEnvelope, delay: 0 },
    { icon: FaPhone, delay: 1 },
    { icon: FaMapMarkerAlt, delay: 2 },
  ];

  return (
    <section id="contact" className={styles.contact}>
      {/* Floating Background Icons */}
      <div className={styles.floatingIcons}>
        {floatingIcons.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={index}
              className={styles.floatingIcon}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.1, 0.1, 0],
                scale: [0, 1, 1, 0],
                y: [0, -30, 0, -30],
              }}
              transition={{
                duration: 8,
                delay: item.delay,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <IconComponent />
            </motion.div>
          );
        })}
      </div>

      <div className={styles.container}>
        <motion.div
          ref={ref}
          className={styles.content}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className={styles.header}>
            <h2 className={styles.title}>
              Contact <span>Me</span>
            </h2>
            <p className={styles.subtitle}>{contactInfo.description}</p>
            <div className={styles.availability}>
              {contactInfo.availability}
            </div>
          </motion.div>

          <div className={styles.contactWrapper}>
            <motion.div variants={itemVariants} className={styles.contactInfo}>
              <h3 className={styles.infoTitle}>Get In Touch</h3>
              <div className={styles.contactMethods}>
                {[
                  {
                    icon: FaEnvelope,
                    label: "Email",
                    value: contactInfo.email,
                  },
                  {
                    icon: FaPhone,
                    label: "Phone",
                    value: contactInfo.phone,
                  },
                  {
                    icon: FaMapMarkerAlt,
                    label: "Location",
                    value: contactInfo.location,
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      className={styles.contactMethod}
                      whileHover={{ scale: 1.05, x: 10 }}
                    >
                      <div className={styles.methodIcon}>
                        <Icon />
                      </div>
                      <div className={styles.methodInfo}>
                        <div className={styles.methodLabel}>{item.label}</div>
                        <div className={styles.methodValue}>{item.value}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className={styles.socialLinks}>
                <h4 className={styles.socialTitle}>Follow Me</h4>
                <div className={styles.socialIcons}>
                  {[
                    {
                      icon: FaGithub,
                      link: contactInfo.social.github,
                      rotate: 5,
                    },
                    {
                      icon: FaLinkedin,
                      link: contactInfo.social.linkedin,
                      rotate: -5,
                    },

                    {
                      icon: FaInstagram,
                      link: contactInfo.social.instagram,
                      rotate: -5,
                    },
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <motion.a
                        key={idx}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                        whileHover={{ scale: 1.2, rotate: item.rotate }}
                      >
                        <Icon />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className={styles.contactForm}>
              <h3 className={styles.formTitle}>Send Message</h3>

              <Formik
                initialValues={{ name: "", email: "", message: "" }}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {({ isValid }) => (
                  <Form className={styles.form}>
                    <div className={styles.formGroup}>
                      <Field
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        className={styles.input}
                      />
                      <ErrorMessage
                        name="name"
                        component="span"
                        className={styles.errorMessage}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <Field
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        className={styles.input}
                      />
                      <ErrorMessage
                        name="email"
                        component="span"
                        className={styles.errorMessage}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <Field
                        name="message"
                        as="textarea"
                        rows={6}
                        placeholder="Your Message"
                        className={styles.textarea}
                      />
                      <ErrorMessage
                        name="message"
                        component="span"
                        className={styles.errorMessage}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      className={styles.submitButton}
                      disabled={isSubmitting || !isValid}
                      whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                    >
                      {isSubmitting ? (
                        <motion.div
                          className={styles.loader}
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                      ) : (
                        "Send Message"
                      )}
                    </motion.button>

                    {submitStatus && (
                      <motion.div
                        className={`${styles.submitStatus} ${styles[submitStatus]}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        {submitStatus === "success"
                          ? "✅ Message sent successfully!"
                          : "❌ Failed to send message. Please try again."}
                      </motion.div>
                    )}
                  </Form>
                )}
              </Formik>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
