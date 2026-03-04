import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, Activity, Shield, Cpu, ArrowRight, 
  Menu, X, Database, Lock, RefreshCw, Zap, 
  BrainCircuit, Layers, Users
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-lg border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300 tracking-tight">智守晚晴</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">首页</a>
            <a href="#background" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">研究背景</a>
            
            {/* Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors py-6 -my-6">
                核心创新 <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-56 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                <div className="bg-slate-900/95 border border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl p-2">
                  <a href="#innovation-theory" className="block px-4 py-3 text-sm text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-400 rounded-xl transition-colors">理论创新：动态演化</a>
                  <a href="#innovation-method" className="block px-4 py-3 text-sm text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-400 rounded-xl transition-colors">方法创新：多层次建模</a>
                  <a href="#innovation-mechanism" className="block px-4 py-3 text-sm text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-400 rounded-xl transition-colors">机制创新：自动执行</a>
                  <a href="#innovation-arch" className="block px-4 py-3 text-sm text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-400 rounded-xl transition-colors">架构创新：边缘计算</a>
                </div>
              </div>
            </div>
            
            <a href="#route" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">技术路线</a>
            <a href="#outcomes" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">预期成果</a>
            <a href="#team" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">团队介绍</a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-300 p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-6 flex flex-col">
              <a href="#home" onClick={() => setIsOpen(false)} className="text-base font-medium text-slate-300 hover:text-cyan-400">首页</a>
              <a href="#background" onClick={() => setIsOpen(false)} className="text-base font-medium text-slate-300 hover:text-cyan-400">研究背景</a>
              <div className="space-y-3">
                <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">核心创新</div>
                <div className="pl-4 border-l border-white/10 space-y-3">
                  <a href="#innovation-theory" onClick={() => setIsOpen(false)} className="block text-sm text-slate-300 hover:text-cyan-400">理论创新：动态演化</a>
                  <a href="#innovation-method" onClick={() => setIsOpen(false)} className="block text-sm text-slate-300 hover:text-cyan-400">方法创新：多层次建模</a>
                  <a href="#innovation-mechanism" onClick={() => setIsOpen(false)} className="block text-sm text-slate-300 hover:text-cyan-400">机制创新：自动执行</a>
                  <a href="#innovation-arch" onClick={() => setIsOpen(false)} className="block text-sm text-slate-300 hover:text-cyan-400">架构创新：边缘计算</a>
                </div>
              </div>
              <a href="#route" onClick={() => setIsOpen(false)} className="text-base font-medium text-slate-300 hover:text-cyan-400">技术路线</a>
              <a href="#outcomes" onClick={() => setIsOpen(false)} className="text-base font-medium text-slate-300 hover:text-cyan-400">预期成果</a>
              <a href="#team" onClick={() => setIsOpen(false)} className="text-base font-medium text-slate-300 hover:text-cyan-400">团队介绍</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-slate-950">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[150px]" 
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-medium mb-8 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            第十六届大学生科技创新基金创新项目
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 font-display">
            <span className="text-white">智守晚晴</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"> · 风险未然</span>
          </h1>
          
          <p className="mt-8 text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            基于风险状态演化建模的社区老年健康<br className="hidden md:block" />
            <span className="font-medium text-white">动态预防与自动执行框架</span>研究
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#innovations" className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-lg hover:from-blue-500 hover:to-cyan-400 transition-all shadow-[0_0_30px_-5px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_-5px_rgba(6,182,212,0.6)] overflow-hidden">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 flex items-center gap-2">探索核心创新 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
            </a>
            <a href="#route" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium text-lg hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm">
              查看技术路线
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-xs uppercase tracking-widest">向下滚动</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

const Background = () => {
  const challenges = [
    { icon: <Activity className="w-7 h-7" />, title: "发现滞后", desc: "传统模式依赖阶段性体检或单次指标判断，缺乏对长期变化趋势的刻画，导致预警滞后。" },
    { icon: <RefreshCw className="w-7 h-7" />, title: "监测不连续", desc: "健康数据分散在个人终端、社区平台与医疗机构之间，难以形成连续的健康轨迹。" },
    { icon: <Lock className="w-7 h-7" />, title: "隐私保护压力大", desc: "集中式数据存储面临极高的隐私泄露风险与合规挑战，限制了数据的深度应用。" },
    { icon: <Users className="w-7 h-7" />, title: "人工干预成本高", desc: "预测结果往往停留在风险提示层面，后续干预高度依赖人工判断与执行，难以规模化。" }
  ];

  return (
    <section id="background" className="py-32 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6 font-display"
          >
            现实挑战与研究背景
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            随着社区老龄化程度不断加深，老年健康风险管理面临多重现实挑战。现有模式亟需从“静态判断”向“持续预防”转变。
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-900/50 border border-white/5 p-8 rounded-3xl hover:bg-slate-800/80 hover:border-cyan-500/30 transition-all duration-300 group shadow-lg"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Innovations = () => {
  return (
    <section id="innovations" className="py-32 relative bg-slate-900 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="absolute -left-40 top-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
      <div className="absolute -right-40 bottom-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6 font-display"
          >
            核心创新体系
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            在理论认知、方法路径与执行机制三个层面形成一体化创新，构建面向社区场景的风险管理新范式。
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Theory */}
          <motion.div id="innovation-theory" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-10 rounded-[2.5rem] bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-white/10 relative overflow-hidden group backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors duration-500" />
            <BrainCircuit className="w-12 h-12 text-blue-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">理论创新：动态演化视角</h3>
            <p className="text-slate-300 leading-relaxed text-lg">突破传统“风险事件”视角，将老年健康风险重新界定为<span className="text-cyan-400 font-medium">“风险状态的动态演化过程”</span>。引入“风险状态分层”与“状态转移”概念，使风险成为可被刻画、追踪和干预的动态过程，为提前识别转折点提供理论支撑。</p>
          </motion.div>

          {/* Method */}
          <motion.div id="innovation-method" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-10 rounded-[2.5rem] bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-white/10 relative overflow-hidden group backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-colors duration-500" />
            <Layers className="w-12 h-12 text-cyan-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">方法创新：多层次建模体系</h3>
            <p className="text-slate-300 leading-relaxed text-lg">构建<span className="text-cyan-400 font-medium">“个体基线学习—偏离度计算—状态转移建模—趋势预测”</span>体系。通过对个体历史数据进行基线建模，计算实时数据的偏离度与变化速率，增强模型对早期微弱信号的敏感性与个体差异的适应能力。</p>
          </motion.div>

          {/* Mechanism */}
          <motion.div id="innovation-mechanism" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-10 rounded-[2.5rem] bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-white/10 relative overflow-hidden group backdrop-blur-sm">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-colors duration-500" />
            <RefreshCw className="w-12 h-12 text-indigo-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">机制创新：自动执行闭环</h3>
            <p className="text-slate-300 leading-relaxed text-lg">提出<span className="text-cyan-400 font-medium">“预测—响应—再评估”</span>的自动执行闭环框架。将风险等级与趋势信号作为触发条件，设计分层响应逻辑（如自动提升监测密度、生成干预建议），推动风险管理从“被动识别”向“主动干预”转型。</p>
          </motion.div>

          {/* Architecture */}
          <motion.div id="innovation-arch" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-10 rounded-[2.5rem] bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-white/10 relative overflow-hidden group backdrop-blur-sm">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-colors duration-500" />
            <Shield className="w-12 h-12 text-emerald-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">架构创新：隐私保护边缘执行</h3>
            <p className="text-slate-300 leading-relaxed text-lg">引入隐私保护约束下的边缘执行理念，构建<span className="text-cyan-400 font-medium">“本地推理—抽象结果上报—最小化数据共享”</span>模式。健康数据在本地完成特征提取与风险计算，仅上传风险等级与趋势摘要，保障数据安全与合规。</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TechnicalRoute = () => {
  const steps = [
    { title: "数据层", desc: "低侵入式多维数据采集（认知、行为、睡眠等）", icon: <Database className="w-6 h-6" /> },
    { title: "建模层", desc: "个体基线学习与偏离度计算", icon: <Cpu className="w-6 h-6" /> },
    { title: "预测层", desc: "风险状态分层与转移概率估计", icon: <Activity className="w-6 h-6" /> },
    { title: "执行层", desc: "自动化Agent分层响应与干预", icon: <Zap className="w-6 h-6" /> },
    { title: "反馈层", desc: "干预后状态再评估与模型迭代", icon: <RefreshCw className="w-6 h-6" /> }
  ];

  return (
    <section id="route" className="py-32 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6 font-display"
          >
            技术路线
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            自数据输入到动态执行反馈的完整闭环流程，隐私保护机制贯穿始终。
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-blue-600/20 via-cyan-500/50 to-emerald-500/20" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-3xl bg-slate-900 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 shadow-[0_0_20px_rgba(6,182,212,0.15)] group-hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] group-hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                
                {/* Mobile connecting arrow */}
                {idx < steps.length - 1 && (
                  <div className="md:hidden my-6 text-cyan-500/50">
                    <ArrowRight className="w-8 h-8 rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Outcomes = () => {
  const outcomes = [
    { title: "理论框架", desc: "构建老年健康风险状态演化建模理论框架，阐明风险累积与转化机制。", icon: <BrainCircuit className="w-8 h-8" /> },
    { title: "方法模型", desc: "形成可复现的个体基线学习与状态转移概率模型，提升早期信号识别能力。", icon: <Layers className="w-8 h-8" /> },
    { title: "系统原型", desc: "开发基于自动执行框架的风险预防原型系统，实现本地推理与隐私保护。", icon: <Cpu className="w-8 h-8" /> },
    { title: "应用验证", desc: "通过模拟社区场景数据评估系统效能，为真实环境试点提供技术储备。", icon: <Activity className="w-8 h-8" /> }
  ];

  return (
    <section id="outcomes" className="py-32 relative bg-slate-900">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6 font-display"
          >
            预期成果
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            多层次成果结构，推动社区老年健康管理从理论走向实践。
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {outcomes.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-800/40 border border-white/5 p-10 rounded-[2rem] hover:bg-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 text-center group"
            >
              <div className="w-20 h-20 mx-auto rounded-3xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-8 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300 shadow-lg">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  return (
    <section id="team" className="py-32 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6 font-display"
          >
            项目团队
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-cyan-400 max-w-3xl mx-auto font-medium"
          >
            天津中医药大学 · 公共卫生与健康科学学院
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/80 rounded-[2.5rem] p-10 border border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl" />
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Users className="text-cyan-400 w-7 h-7" /> 核心成员
            </h3>
            <div className="space-y-8">
              <div>
                <div className="text-xl font-bold text-white flex items-baseline gap-3">
                  陈奕睿 <span className="text-sm font-medium text-cyan-400 px-2 py-1 bg-cyan-500/10 rounded-md">项目负责人</span>
                </div>
                <div className="text-base text-slate-400 mt-2 leading-relaxed">应用统计学专业，具备统计建模与人工智能算法系统训练，拥有多项软著与高水平论文发表经验。</div>
              </div>
              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/5">
                <div>
                  <div className="text-lg font-bold text-white">桂宏馨</div>
                  <div className="text-sm text-slate-400 mt-1">公共卫生与健康科学学院</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-white">马凯</div>
                  <div className="text-sm text-slate-400 mt-1">文化与健康传播学院</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/80 rounded-[2.5rem] p-10 border border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Shield className="text-blue-400 w-7 h-7" /> 指导教师
            </h3>
            <div className="space-y-8">
              <div>
                <div className="text-xl font-bold text-white flex items-baseline gap-3">
                  王梦阳 <span className="text-sm font-medium text-slate-400 px-2 py-1 bg-white/5 rounded-md">讲师</span>
                </div>
                <div className="text-base text-slate-400 mt-2 leading-relaxed">天津中医药大学，提供系统性学术与方法支持，指导风险状态建模框架设计。</div>
              </div>
              <div className="pt-4 border-t border-white/5">
                <div className="text-xl font-bold text-white flex items-baseline gap-3">
                  赵铁牛 <span className="text-sm font-medium text-slate-400 px-2 py-1 bg-white/5 rounded-md">教授</span>
                </div>
                <div className="text-base text-slate-400 mt-2 leading-relaxed">天津中医药大学，长期从事中医药与现代健康管理交叉研究，在重大科研项目组织方面具备丰富经验。</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#010409] py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Shield className="w-8 h-8 text-cyan-400" />
          <span className="text-2xl font-bold text-white tracking-tight">智守晚晴</span>
        </div>
        <p className="text-slate-500 text-base mb-6 leading-relaxed">
          第十六届大学生科技创新基金创新项目<br/>
          天津中医药大学 · 公共卫生与健康科学学院
        </p>
        <div className="w-24 h-px bg-white/10 mx-auto mb-6" />
        <p className="text-slate-600 text-sm">
          &copy; 2026 智守晚晴项目组. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-cyan-500/30">
      <Navbar />
      <main>
        <Hero />
        <Background />
        <Innovations />
        <TechnicalRoute />
        <Outcomes />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
