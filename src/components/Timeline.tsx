import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { portfolioData } from "../data";
import { SectionHeader } from "./About";

const Timeline = () => {
  return (
    <section id="education" className="py-24 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <SectionHeader title="Academic Path" subtitle="My foundation in engineering and scientific principles." />
            <div className="space-y-12">
              {portfolioData.education.map((item, idx) => (
                <motion.div 
                  key={item.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative pl-12 before:absolute before:left-3 before:top-4 before:w-0.5 before:h-[calc(100%+3rem)] before:bg-blue-500/20 last:before:hidden"
                >
                  <div className="absolute left-0 top-3 w-6 h-6 rounded-full bg-zinc-900 border-2 border-blue-500 z-10 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-blue-500 mb-2 block uppercase tracking-widest">{item.period}</span>
                  <h3 className="text-2xl font-bold mb-1 tracking-tight">{item.degree}</h3>
                  <p className="text-zinc-300 font-medium mb-3 text-sm">{item.institution}</p>
                  <p className="text-zinc-500 text-sm leading-relaxed max-w-md">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeader title="Validated Skills" subtitle="Professional certifications validating my technical expertise." />
            <div className="grid grid-cols-1 gap-4">
              {portfolioData.certifications.map((cert, idx) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-6 p-6 rounded-[2rem] glass-card border border-white/5 hover:border-blue-500/30 transition-all group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-blue-500/10 transition-colors">
                    <Award className="text-blue-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h3 className="font-bold tracking-tight text-lg">{cert.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] text-zinc-500 uppercase tracking-widest">{cert.issuer}</span>
                      <div className="w-1 h-1 rounded-full bg-zinc-700" />
                      <span className="text-[10px] text-zinc-500 uppercase tracking-widest">{cert.date}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
