const ProjectCard = ({ project }) => {
  return (
    <div
      className="
      backdrop-blur-md
      bg-white/10
      dark:bg-white/5
      border
      border-white/10
      rounded-2xl
      overflow-hidden
      hover:-translate-y-2
      hover:shadow-[0_20px_50px_rgba(59,130,246,0.3)]
      transition-all
      duration-300
      "
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full"
      />

      <div className="p-6">
        <h3 className="text-xl font-bold">
          {project.title}
        </h3>

        <p className="mt-3 text-gray-500">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((item) => (
            <span
              key={item}
              className="
              bg-blue-600
              text-white
              text-sm
              px-3
              py-1
              rounded-full
              "
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-6">
          <a
            href={project.github}
            className="border px-4 py-2 rounded-lg"
          >
            GitHub
          </a>

          <a
            href={project.demo}
            className="
            bg-blue-600
            text-white
            px-4
            py-2
            rounded-lg
            "
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;