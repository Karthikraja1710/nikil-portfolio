import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { portfolioData } from "../data";
import { SectionHeader } from "./About";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          title="Engineered Solutions" 
          subtitle="Where theory meets application. Each project represents a unique challenge in data and AI." 
        />
        <div className="grid grid-cols-1 gap-24">
          {portfolioData.projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <div className={`order-2 ${idx % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-10 h-1 bg-blue-500" />
                   <span className="text-blue-500 text-xs font-bold uppercase tracking-widest font-mono">Case Study 0{idx + 1}</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">{project.title}</h3>
                <p className="text-zinc-400 text-lg mb-8 leading-relaxed font-light">{project.description}</p>
                
                <div className="mb-10 space-y-4">
                  <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.3em]">Core Advancements</h4>
                  <ul className="grid grid-cols-1 gap-3">
                    {project.features.map(feature => (
                      <li key={feature} className="flex items-start gap-3 text-zinc-300 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tags.map(tag => (
                    <Badge key={tag} className="bg-zinc-800 text-zinc-400 border border-white/5 px-4 py-1.5 text-[10px] uppercase tracking-widest rounded-full">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white h-12 px-8">
                    <ExternalLink size={18} className="mr-2" /> Live Snapshot
                  </Button>
                  <Button variant="outline" className="rounded-full border-white/10 h-12 px-8 hover:bg-white/5">
                    <Github size={18} className="mr-2" /> View Source
                  </Button>
                </div>
              </div>

              <div className={`order-1 ${idx % 2 === 0 ? "lg:order-2" : "lg:order-1"} relative aspect-square rounded-[3rem] overflow-hidden border border-white/5 bg-zinc-900 group shadow-2xl`}>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20 opacity-60 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 flex items-center justify-center p-12">
                   <div className="w-full h-full bg-black/40 backdrop-blur-xl rounded-[2rem] border border-white/10 p-10 flex flex-col justify-end overflow-hidden">
                      {/* Abstract Data Viz Placeholder */}
                      <div className="absolute top-10 left-10 right-10 flex gap-2">
                        {[40, 70, 50, 90, 60].map((h, i) => (
                           <div key={i} className="flex-1 bg-blue-500/20 rounded-t-lg relative overflow-hidden">
                             <motion.div 
                               initial={{ height: 0 }}
                               whileInView={{ height: `${h}%` }}
                               transition={{ duration: 1, delay: i * 0.1 }}
                               className="absolute bottom-0 w-full bg-blue-500/40"
                             />
                           </div>
                        ))}
                      </div>
                      <div className="relative z-10 pt-20">
                        <div className="w-16 h-1 bg-blue-500 mb-6" />
                        <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-mono mb-2">Automated Optimization</p>
                        <h4 className="text-xl font-bold tracking-tight">System Performance</h4>
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
