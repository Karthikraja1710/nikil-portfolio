import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { portfolioData } from "../data";

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-bold mb-4"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-zinc-400 max-w-2xl"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <SectionHeader 
              title="Beyond the Code" 
              subtitle="Bridging the gap between raw information and human-centric solutions." 
            />
            <div className="space-y-4">
               <p className="text-zinc-400 text-lg leading-relaxed">
                {portfolioData.summary}
              </p>
              <p className="text-zinc-500 leading-relaxed">
                Currently pursuing a B.Tech in Artificial Intelligence and Data Science, I focus on building systems that are not just technically sound, but practically impactful. Whether it's optimizing room allocation or cleaning noisy datasets, my goal is precision.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="p-6 border border-white/5 rounded-[2rem] bg-white/2 hover:bg-white/5 transition-colors">
                <h4 className="text-3xl font-bold text-blue-500 mb-1">AI-Driven</h4>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Core Methodology</p>
              </div>
              <div className="p-6 border border-white/5 rounded-[2rem] bg-white/2 hover:bg-white/5 transition-colors">
                <h4 className="text-3xl font-bold text-blue-500 mb-1">Data-First</h4>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Problem Solving</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square max-w-md mx-auto"
          >
            <div className="absolute inset-0 bg-blue-600/20 rounded-[2rem] blur-3xl" />
            <div className="relative h-full w-full rounded-[2.5rem] border border-white/10 bg-zinc-900 overflow-hidden group">
               {/* Decorative circuit pattern */}
               <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                 <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:20px_20px]" />
               </div>
               <div className="flex flex-col items-center justify-center h-full px-8 text-center">
                 <div className="w-24 h-24 rounded-full bg-blue-500/10 flex items-center justify-center mb-6">
                   <Terminal size={48} className="text-blue-500" />
                 </div>
                 <h4 className="text-xl font-bold mb-2">Systems Architect</h4>
                 <p className="text-zinc-500 text-sm">Building the data foundations of tomorrow.</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
export { SectionHeader };
