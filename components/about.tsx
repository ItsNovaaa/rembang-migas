"use client"

import { motion } from "framer-motion"

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants}>
            <img
              src="/corporate-team-meeting-collaboration.jpg"
              alt="Team collaboration"
              className="w-full rounded-lg"
            />
          </motion.div>

          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-foreground">
              About TechCorp
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground">
              Founded in 2010, TechCorp has been at the forefront of digital innovation, helping enterprises transform
              their operations and achieve unprecedented growth.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground">
              With a team of 500+ experts across 15 countries, we deliver world-class solutions to Fortune 500 companies
              and ambitious startups alike.
            </motion.p>
            <motion.div
              className="grid grid-cols-3 gap-4 pt-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {[
                { number: "500+", label: "Team Members" },
                { number: "15", label: "Countries" },
                { number: "1000+", label: "Projects" },
              ].map((stat, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <p className="text-3xl font-bold text-primary">{stat.number}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
