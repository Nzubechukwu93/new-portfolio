import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="
      min-h-screen
      flex
      items-center
      relative
      overflow-hidden
      bg-gradient-to-br
      from-blue-50
      via-white
      to-indigo-50
      dark:from-slate-950
      dark:via-slate-900
      dark:to-black
      "
    >
      {/* Grid */}
      <div
        className="
        absolute
        inset-0
        bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]
        bg-[size:24px_24px]
        "
      />

      {/* Glow */}
      <div className="absolute w-96 h-96 bg-blue-500/20 blur-3xl rounded-full top-20 left-10" />
      <div className="absolute w-96 h-96 bg-purple-500/20 blur-3xl rounded-full bottom-20 right-10" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center z-10">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <span className="text-blue-500 font-medium">
            Frontend Developer
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mt-4">
            Hi, I'm
            <span className="text-blue-500">
              {" "}Nzubechukwu
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            Building responsive and engaging web applications using
            React and modern frontend technologies.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl"
            >
              View Projects
            </a>

            <a
              href="/Nzube Dev frontend resume.pdf"
              download
              className="border px-6 py-3 rounded-xl"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex justify-center"
        >
          <img
            src="/profile-img.png"
            alt="Profile"
            className="
            w-72
            h-72
            md:w-96
            md:h-96
            rounded-full
            object-cover
            border-4
            border-blue-500
            "
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;