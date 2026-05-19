const Footer = () => (
  <footer className="py-16 border-t border-white/5 bg-zinc-950/50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
        <a href="#" className="text-2xl font-black tracking-tight text-gradient">
          NIKIL S
        </a>
        <div className="flex gap-10">
          <a href="#about" className="text-sm font-medium text-zinc-500 hover:text-white transition-colors">Origins</a>
          <a href="#skills" className="text-sm font-medium text-zinc-500 hover:text-white transition-colors">Stack</a>
          <a href="#projects" className="text-sm font-medium text-zinc-500 hover:text-white transition-colors">Works</a>
          <a href="#education" className="text-sm font-medium text-zinc-500 hover:text-white transition-colors">Foundation</a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-6">
        <p className="text-zinc-600 text-xs font-mono tracking-widest">
          © {new Date().getFullYear()} NIKIL S. ARCHITECTED WITH PRECISION.
        </p>
        <div className="flex gap-6">
          <p className="text-zinc-600 text-xs font-mono uppercase">Designed for Impact</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
