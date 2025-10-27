"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Twitter } from "lucide-react"
import { motion } from "framer-motion"

export default function Team() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "/professional-woman-executive.png",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "/professional-tech-leader.png",
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Operations",
      image: "/professional-woman-operations.png",
    },
    {
      name: "David Kim",
      role: "Head of Innovation",
      image: "/professional-man-innovation.jpg",
    },
  ]

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
    <section id="team" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Leadership Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the visionaries driving innovation at TechCorp
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {team.map((member, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="border-border overflow-hidden hover:shadow-lg transition-shadow">
                <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-64 object-cover" />
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
                  <div className="flex gap-3">
                    <Github size={18} className="text-muted-foreground hover:text-primary cursor-pointer" />
                    <Linkedin size={18} className="text-muted-foreground hover:text-primary cursor-pointer" />
                    <Twitter size={18} className="text-muted-foreground hover:text-primary cursor-pointer" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
