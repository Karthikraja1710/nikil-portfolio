import { motion } from "framer-motion";
import { Code2, BrainCircuit, Database, Award } from "lucide-react";
import { portfolioData } from "../data";
import { SectionHeader } from "./About";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const getIcon = (category: string) => {
    switch (category) {
      case "Programming & Analysis": return <Code2 className="text-blue-400" />;
      case "Machine Learning": return <BrainCircuit className="text-purple-400" />;
      case "Databases & Tools": return <Database className="text-emerald-400" />;
      default: return <Award className="text-orange-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          title="Technical Ecosystem" 
          subtitle="A curated collection of tools and frameworks I leverage to interpret data and build intelligence." 
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.skills.map((skill, idx) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-[2.5rem] glass-card group hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {getIcon(skill.category)}
              </div>
              <h3 className="text-xl font-bold mb-6 tracking-tight">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map(item => (
                  <Badge key={item} variant="secondary" className="bg-white/5 text-zinc-400 border border-white/5 px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
                    {item}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
