"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function CTA() {
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
    <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
      <motion.div
        className="max-w-4xl mx-auto text-center space-y-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
          Ready to Transform Your Business?
        </motion.h2>

        <motion.p variants={itemVariants} className="text-lg opacity-90 max-w-2xl mx-auto">
          Join hundreds of leading companies that trust TechCorp to drive their digital transformation journey.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary">
            Schedule a Demo
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
          >
            Contact Sales
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
