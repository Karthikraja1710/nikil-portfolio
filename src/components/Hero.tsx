import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Intelligence";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Background Entities */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-sky-600/10 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
// ... existing code ...
        >
          Predicting Trends • Transforming Data
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-8xl font-black tracking-tight mb-8"
        >
          Engineering <span className="text-gradient min-w-[300px] inline-block">{text}<motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-1 h-12 md:h-20 bg-blue-500 ml-2"
          /></span> through Data.
        </motion.h1>

        <motion.p
// ... existing code ...
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I'm <span className="text-white font-semibold">Nikil S</span>, a Data Analyst and AI Engineer architecturalizing the intersection of raw data and predictive intelligence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#projects" className="w-full sm:w-auto">
            <Button className="w-full h-12 px-8 rounded-full bg-blue-600 hover:bg-blue-700">
              Explore Projects
            </Button>
          </a>
          <a href="#contact" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full h-12 px-8 rounded-full border-white/10 hover:bg-white/5">
              Contact Me
            </Button>
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500/0 to-blue-500/50" />
          <span className="text-[10px] uppercase tracking-widest text-zinc-500">Scroll Down</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
