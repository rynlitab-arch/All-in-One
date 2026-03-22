import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="bg-black text-white min-h-screen font-serif">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-wide"
        >
          ALL IN ONE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-lg md:text-xl text-gray-300 max-w-xl"
        >
          A hidden sanctuary for writers, creators, and unseen stories.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-10 flex gap-4"
        >
          <button className="px-6 py-3 border border-white hover:bg-white hover:text-black transition rounded-2xl">
            Find Artists
          </button>
          <button className="px-6 py-3 border border-gray-500 hover:bg-gray-700 transition rounded-2xl">
            Explore Knowledge
          </button>
        </motion.div>
      </section>

      {/* Categories */}
      <section className="px-10 py-20 grid md:grid-cols-3 gap-8">
        {["Editors", "Artists", "Proofreaders"].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="border border-gray-700 p-8 rounded-2xl backdrop-blur-md bg-white/5"
          >
            <h2 className="text-2xl mb-4">{item}</h2>
            <p className="text-gray-400">
              Discover professionals who bring your story to life.
            </p>
          </motion.div>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-gray-500 text-sm">
        © 2026 All in One — A place where stories begin.
      </footer>
    </div>
  );
}
