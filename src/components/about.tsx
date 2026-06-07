"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Users, Award, Globe } from "lucide-react";

export function About() {
  const t = useTranslations("about");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Code2, value: "5+", label: t("stats.years") },
    { icon: Users, value: "30+", label: t("stats.users") },
    { icon: Award, value: "6", label: t("stats.certifications") },
    { icon: Globe, value: "3", label: t("stats.languages") },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-day-accent dark:text-night-cyan font-mono">
              {t("sectionNumber")}.
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold">{t("title")}</h2>
            <div className="flex-1 h-px bg-day-bg-highlight dark:bg-night-bg-highlight" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-day-text/80 dark:text-night-text/80 leading-relaxed">
                {t("intro")}{" "}
                <span className="text-day-accent dark:text-night-cyan font-medium">
                  {t("highlight1")}
                </span>{" "}
                {t("intro2")}
              </p>
              <p className="text-day-text/80 dark:text-night-text/80 leading-relaxed">
                {t("current1")}{" "}
                <span className="font-medium">{t("company")}</span>
                {t("current2")}{" "}
                <span className="text-day-accent dark:text-night-cyan font-medium">
                  {t("highlight2")}
                </span>{" "}
                {t("current3")}
              </p>
              <p className="text-day-text/80 dark:text-night-text/80 leading-relaxed">
                {t("personal")}
              </p>

              {/* Tech Stack Highlight */}
              <div className="pt-4">
                <p className="text-sm font-mono text-day-comment dark:text-night-comment mb-3">
                  {t("techTitle")}
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Java 11",
                    "Spring Boot",
                    "Apache Camel",
                    "Microservices",
                    "AWS",
                    "Docker",
                    "Kubernetes",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm font-mono bg-day-bg-alt dark:bg-night-bg-alt border border-day-bg-highlight dark:border-night-bg-highlight rounded-full text-day-accent dark:text-night-cyan"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Image Placeholder & Stats */}
            <div className="space-y-8">
              {/* Profile Image Placeholder */}
              <motion.div
                className="relative w-full max-w-sm mx-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}  
                >
                <div className="absolute inset-0 bg-gradient-to-br from-day-accent/20 to-day-accent-alt/20 dark:from-night-cyan/20 dark:to-night-accent/20 rounded-2xl transform rotate-3" />

                <div className="relative rounded-2xl overflow-hidden border border-day-bg-highlight dark:border-night-bg-highlight">
                  <img
                    src="/images/profile_image.jpg"
                    alt={t("imagePlaceholder")}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="bento-card text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <stat.icon className="w-6 h-6 mx-auto mb-2 text-day-accent dark:text-night-cyan" />
                    <div className="text-2xl font-bold text-day-text dark:text-night-text">
                      {stat.value}
                    </div>
                    <div className="text-sm text-day-comment dark:text-night-comment">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
