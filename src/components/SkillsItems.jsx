import React from 'react'
import { motion } from 'framer-motion'

const SkillsItems = ({ icon, name }) => {
  return (
    <motion.div id='skillsItems'
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.7 }}
    >
      <div>
        <img src={icon} alt={name} />
        <p>{name}</p>
      </div>
    </motion.div>
  )
}

export default SkillsItems