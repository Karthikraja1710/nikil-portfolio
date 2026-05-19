import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { portfolioData } from "../data";
import { SectionHeader } from "./About";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader 
          title="Initiate Contact" 
          subtitle="Whether you have an inquiry or just want to connect, I'm always open to discussing new opportunities." 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1 space-y-12">
            <div className="space-y-8">
               <div className="flex items-center gap-6 group">
                 <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-blue-600/10 transition-colors">
                   <Mail className="text-blue-400" />
                 </div>
                 <div>
                   <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-[0.2em] mb-1">Email</p>
                   <a href={`mailto:${portfolioData.email}`} className="text-white hover:text-blue-400 transition-colors text-lg tracking-tight font-medium">{portfolioData.email}</a>
                 </div>
               </div>
               <div className="flex items-center gap-6 group">
                 <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-blue-600/10 transition-colors">
                   <Phone className="text-blue-400" />
                 </div>
                 <div>
                   <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-[0.2em] mb-1">Direct</p>
                   <a href={`tel:${portfolioData.phone}`} className="text-white hover:text-blue-400 transition-colors text-lg tracking-tight font-medium">{portfolioData.phone}</a>
                 </div>
               </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.4em] mb-6">Social Ecosystem</h4>
              <div className="flex gap-4">
                {[
                  { icon: <Linkedin size={20} />, href: portfolioData.linkedin },
                  { icon: <Github size={20} />, href: "#" },
                  { icon: <Mail size={20} />, href: `mailto:${portfolioData.email}` }
                ].map((social, i) => (
                  <a key={i} href={social.href} className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1 shadow-lg">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <Card className="glass-card border-none rounded-[3rem] p-10 md:p-14 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 blur-3xl pointer-events-none" />
              <form className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-2">Your Name</label>
                    <Input placeholder="John Doe" className="h-16 rounded-2xl bg-white/2 border-white/5 focus:bg-white/5 focus:border-blue-500/50 transition-all px-6" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-2">Email Address</label>
                    <Input placeholder="john@example.com" className="h-16 rounded-2xl bg-white/2 border-white/5 focus:bg-white/5 focus:border-blue-500/50 transition-all px-6" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-2">Your Proposition</label>
                  <Textarea placeholder="Describe your project or inquiry..." className="min-h-[180px] rounded-[2rem] bg-white/2 border-white/5 focus:bg-white/5 focus:border-blue-500/50 transition-all p-8 md:p-10 leading-relaxed" />
                </div>
                <Button className="w-full h-16 rounded-[2rem] bg-blue-600 hover:bg-blue-700 text-white text-lg font-black tracking-widest shadow-xl transform active:scale-[0.98] transition-transform">
                  DISPATCH MESSAGE
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
