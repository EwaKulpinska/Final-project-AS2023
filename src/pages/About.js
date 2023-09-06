import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}>
      <h3>About Us</h3>
    </motion.div>
  );
}
