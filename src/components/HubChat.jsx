import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot } from "react-icons/fa";

const HubChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="glass p-4 rounded-xl border border-blue-500/30 text-white w-48 shadow-xl"
          >
            <h3 className="text-lg font-bold text-blue-300 mb-1">HubChat</h3>
            <p className="text-sm text-gray-300">AI Assistant</p>
            <div className="mt-2 text-xs font-mono bg-blue-500/20 p-2 rounded text-center text-blue-200">
              Coming Soon...
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white shadow-lg shadow-blue-500/40 relative group"
      >
        <FaRobot className="text-2xl" />
        
        {/* Pulse Effect */}
        <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
      </motion.button>
    </div>
  );
};

export default HubChat;
