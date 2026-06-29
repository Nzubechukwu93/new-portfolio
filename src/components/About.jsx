import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact
} from "react-icons/fa";

const skills = [
  { name: "HTML", icon: <FaHtml5 size={40} /> },
  { name: "CSS", icon: <FaCss3Alt size={40} /> },
  { name: "JavaScript", icon: <FaJs size={40} /> },
  { name: "React", icon: <FaReact size={40} /> }
];

const About = () => {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-6">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
      >
        <h2 className="text-4xl font-bold mb-8">
          About Me
        </h2>

        <p className="text-gray-500 mb-12">
          I'm a Frontend Developer passionate about building
          modern, responsive, and accessible web applications
          using React and JavaScript. I enjoy creating
          user-friendly interfaces that deliver exceptional
          user experiences.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill) => (
                <div
                key={skill.name}
                className="
                p-8
                rounded-2xl
                backdrop-blur-md
                bg-white/10
                dark:bg-white/5
                border
                border-white/10
                hover:scale-105
                transition-all
                duration-300
                text-center
                "
                >
            {skill.icon}

                <h3 className="mt-4">
                    {skill.name}
                </h3>
        </div>
  ))}
</div>
      </motion.div>
    </section>
  );
};

export default About;