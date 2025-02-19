import { motion } from "framer-motion";

function Home() {
    return (
      <section className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center">
        <motion.h2 className="text-5xl font-bold" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          Welcome to Our Business
        </motion.h2>
        <motion.p className="mt-4 text-lg text-gray-600" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          We provide top-notch services to help your business grow.
        </motion.p>
        <motion.a href="/contact" className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-md hover:shadow-xl transition-transform will-change-transform" whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}>
          Get Started
        </motion.a>
      </section>
    );
  }
  
  export default Home;