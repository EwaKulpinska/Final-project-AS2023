import { motion } from "framer-motion";

function Subscriptions() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}>
      <h3>Subscription plan page</h3>
    </motion.div>
  );
}

export default Subscriptions;
