import { motion } from "framer-motion";
import { SiPandas, SiScikitlearn, SiNumpy, SiTensorflow, SiPython, SiReact, SiTailwindcss, SiNodedotjs, SiTypescript, SiAngular } from 'react-icons/si';
import { FaChartBar } from 'react-icons/fa'; // Using ChartBar for Matplotlib representation

const About = () => {
    const skills = [
        { name: "Python", icon: SiPython, color: "text-blue-400" },
        { name: "Pandas", icon: SiPandas, color: "text-purple-400" },
        { name: "Matplotlib", icon: FaChartBar, color: "text-orange-400" }, 
        { name: "Scikit-learn", icon: SiScikitlearn, color: "text-orange-500" },
        { name: "TensorFlow", icon: SiTensorflow, color: "text-orange-600" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" }, // Added TypeScript
        { name: "Angular", icon: SiAngular, color: "text-red-500" }, // Added Angular
        { name: "React", icon: SiReact, color: "text-blue-400" },
        { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
    ];

  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="glass p-8 md:p-12 rounded-2xl relative z-10"
      >
        <h2 className="text-4xl font-bold mb-8 text-center text-white">About <span className="text-blue-400">Me</span></h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Image / Illustration */}
          <div className="md:w-1/3 relative">
            <div className="absolute inset-0 bg-blue-500 rounded-xl blur-lg opacity-40"></div>
            <img
              src="https://via.placeholder.com/400x400" 
              alt="Adekunle AbdulMuheez"
              className="rounded-xl shadow-lg relative z-10"
            />
          </div>

          {/* Text Content */}
          <div className="md:w-2/3 space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              I am a passionate <span className="text-blue-400 font-semibold">AI/ML Engineer</span> and <span className="text-purple-400 font-semibold">Full Stack Developer</span>. 
              My journey involves building scalable web applications and integrating intelligent models to solve real-world problems.
            </p>
            <p>
              With expertise in <span className="text-white">React, Angular, TypeScript, Python, and Deep Learning</span>, I strive to bridge the gap between complex algorithms and intuitive user experiences.
            </p>
            
            <div className="mt-8">
                <h3 className="text-xl font-semibold text-white mb-4">Technologies & Tools</h3>
                <div className="flex flex-wrap gap-6">
                    {skills.map((skill) => (
                        <div key={skill.name} className="flex flex-col items-center gap-2 group cursor-pointer">
                            <div className={`p-4 bg-white/5 rounded-xl border border-white/10 group-hover:bg-white/10 transition-all duration-300 ${skill.color}`}>
                                <skill.icon className="text-3xl" />
                            </div>
                            <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
