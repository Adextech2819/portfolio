import { motion } from "framer-motion";
import { FaRobot, FaLaptopCode, FaShoppingCart } from 'react-icons/fa';

const projects = [
  {
    name: "AI Chatbot",
    icon: FaRobot,
    description: "Customer support chatbot built with GPT and React integration.",
    tech: "React, TailwindCSS, OpenAI API",
    github: "#",
    demo: "#",
  },
  {
    name: "Portfolio Website",
    icon: FaLaptopCode,
    description: "Responsive portfolio showcasing my projects and skills.",
    tech: "React, Vite, TailwindCSS",
    github: "#",
    demo: "#",
  },
  {
    name: "E-Commerce App",
    icon: FaShoppingCart,
    description: "Full-stack shopping platform with payment gateway integration.",
    tech: "Next.js, Node.js, Stripe",
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-12 text-center text-white"
        >
            My <span className="text-purple-400">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass p-6 rounded-2xl group hover:bg-white/10 transition-colors duration-300 border border-white/5"
            >
              <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-blue-500/20 rounded-lg text-blue-300 group-hover:text-white group-hover:bg-blue-500 transition-colors">
                    <project.icon className="text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">{project.name}</h3>
              </div>
              
              <p className="text-gray-400 mb-4 h-20 overflow-hidden">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.split(", ").map(t => (
                      <span key={t} className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded-md">
                          {t}
                      </span>
                  ))}
              </div>
              
              <div className="flex justify-between items-center mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  className="text-gray-300 hover:text-white flex items-center gap-2 text-sm font-medium transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-lg transition"
                >
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
