import { motion } from "framer-motion";

const BackgroundShapes = () => {
    // Generate random paths for symbols to float "dynamically"
    const generateRandomPath = () => {
        return {
            x: [0, Math.random() * 400 - 200, Math.random() * 400 - 200, 0],
            y: [0, Math.random() * 400 - 200, Math.random() * 400 - 200, 0],
            rotate: [0, 180, 360],
        };
    };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-20">
      {/* Circle 1 */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"
      />

      {/* Circle 2 */}
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px]"
      />

      {/* Floating Code Symbols - Dynamic Movement */}
      {[
          { symbol: "{ }", color: "text-blue-500", top: "20%", left: "10%" },
          { symbol: "</div>", color: "text-purple-500", top: "40%", left: "80%" },
          { symbol: "< >", color: "text-cyan-500", top: "70%", left: "20%" },
          { symbol: ";", color: "text-pink-500", top: "15%", left: "70%" },
          { symbol: "&&", color: "text-green-500", top: "80%", left: "80%" },
          { symbol: "git", color: "text-orange-500", top: "50%", left: "50%" },
          { symbol: "#", color: "text-gray-500", top: "90%", left: "40%" },
      ].map((item, index) => (
          <motion.div
            key={index}
            animate={generateRandomPath()}
            transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            className={`absolute font-mono font-bold text-2xl md:text-5xl select-none opacity-20 ${item.color}`}
            style={{ top: item.top, left: item.left }}
          >
              {item.symbol}
          </motion.div>
      ))}
    </div>
  );
};

export default BackgroundShapes;
