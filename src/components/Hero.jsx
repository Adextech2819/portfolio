import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaDiscord,
  FaSlack,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 px-6"
      >
        <h2 className="text-lg md:text-xl text-blue-300 font-medium tracking-widest mb-4 uppercase">
          Founder ADEXTECHHUB
        </h2>
        <h1 className="text-5xl md:text-8xl font-bold mb-6 text-white tracking-tight">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Adekunle AbdulMuheez
          </span>
        </h1>

        <div className="text-xl md:text-3xl text-gray-300 font-light mb-8 h-[60px] md:h-[80px]">
          <span>I am a </span>
          <TypeAnimation
            sequence={[
              "Python Developer",
              2000,
              "an AI/ML Enthusiast",
              2000,
              "Full Stack Developer",
              2000,
              "Problem Solver",
              2000,
            ]}
            speed={50}
            className="text-blue-400 font-semibold"
            repeat={Infinity}
          />
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-10">
          {[
            {
              Icon: FaLinkedin,
              href: "https://www.linkedin.com/in/adekunle-abdulmuheez-2819adex",
            },
            { Icon: FaGithub, href: "https://github.com/Adextech2819" },
            { Icon: FaTwitter, href: "https://x.com/a_abdulmuheez" },
            { Icon: FaInstagram, href: "#" },
            {
              Icon: FaDiscord,
              href: "https://discord.com/users/adex_tech_hub",
            },
            { Icon: FaSlack, href: "https://adectechub.slack.com" }, // Placeholder for Slack workspace
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              whileHover={{ scale: 1.2, color: "#60A5FA" }}
              className="text-gray-400 text-2xl transition-colors"
            >
              <item.Icon />
            </motion.a>
          ))}
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-full shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
          >
            Connect With Me
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 text-blue-400 cursor-pointer"
      >
        <p className="text-sm font-semibold mb-2">Scroll To Explore</p>
        <svg
          className="w-8 h-8 mx-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
