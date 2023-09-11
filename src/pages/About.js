import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}>
      <form className="form">
        <h4 className="header">Our newsletter</h4>
        {/* name */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            className="form-input"
            type="text"
            name="name"
            id="name"
            defaultValue="John"
          />
        </div>
        {/* lastName */}
        <div className="form-row">
          <label htmlFor="lastName">Last name</label>
          <input
            className="form-input"
            type="text"
            name="lastName"
            id="lastName"
            defaultValue="Doe"
          />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            E-mail
          </label>
          <input
            className="form-input"
            type="text"
            name="email"
            id="email"
            defaultValue="test@test.com"
          />
        </div>
        <button className="form-btn" type="submit">
          Submit
        </button>
      </form>
    </motion.div>
  );
}
