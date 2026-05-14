import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import pratik_Shinde from '../assets/pratik_shinde.png';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.9, ease: 'easeOut' },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const skillTagVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <main className="pt-stack-lg relative">
      <div className="fixed inset-0 texture-grain z-[-1]"></div>
      
      {/* Hero Storytelling Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-stack-lg py-stack-lg relative">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Narrative */}
          <motion.div className="md:col-span-7 relative z-10" variants={itemVariants}>
            <motion.span 
              className="font-label-sm uppercase tracking-[0.3em] text-secondary mb-4 block"
              variants={itemVariants}
            >
              The Narrative
            </motion.span>
            <motion.h1 
              className="font-display-lg text-display-lg mb-8 leading-none"
              variants={itemVariants}
            >
              Blending the <br/><span className="italic font-normal">Ink of Code</span> with <br/>Visual Poetics.
            </motion.h1>
            <motion.div className="space-y-6 max-w-xl" variants={itemVariants}>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                I am a digital artisan specializing in the intersection of technical precision and artistic expression. My work is not just about building interfaces; it's about crafting <span className="ink-underline">digital monographs</span> that breathe and respond.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant italic">
                "Every line of code is a brushstroke. Every pixel, a point of intent."
              </p>
            </motion.div>
          </motion.div>
          
          {/* Right Visual Collage */}
          <motion.div className="md:col-span-5 relative mt-12 md:mt-0" variants={imageVariants}>
            <div className="relative w-full aspect-[4/5] bg-surface-container-high mask-irregular overflow-hidden shadow-xl">
              <motion.img 
                className="w-full h-full object-cover grayscale brightness-90 contrast-110"
                alt="Portrait"
                src={pratik_Shinde}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
            </div>
            {/* Pinned Note Overlay */}
            <motion.div 
              className="absolute md:-bottom-10 md:-left-10 inset-x-0 md:inset-x-auto mx-auto md:mx-0 bg-white p-6 paper-curl -rotate-3 border border-outline-variant/30 max-w-full md:max-w-[240px] w-full md:w-auto mt-6 md:mt-0"
              initial={{ opacity: 0, rotate: -30 }}
              animate={{ opacity: 1, rotate: -3 }}
              transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
              whileHover={{ rotate: 0 }}
            >
              <span className="material-symbols-outlined text-secondary absolute -top-4 -right-2 rotate-12 fill-current">push_pin</span>
              <h4 className="font-headline-md text-body-md mb-2">The Mindset</h4>
              <p className="font-label-sm text-on-surface-variant leading-tight">Prioritizing the human touch in a digital landscape. Seeking the "perfectly imperfect."</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

            {/* Skills Section: Orbital / Layered Arrangement */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-stack-lg py-stack-lg relative">
        <div className="flex flex-col md:flex-row gap-gutter items-start">
          <div className="w-full md:w-1/3 mb-stack-md md:sticky top-stack-lg">
            <h2 className="font-headline-lg text-headline-lg mb-unit">Crafting Digital Artifacts</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant italic border-l-4 border-secondary pl-4">
              A synthesis of technical precision and artistic expression. My toolkit is an evolving gallery of modern standards.
            </p>
            <div className="mt-stack-md relative hidden md:block">
              <div className="w-24 h-24 bg-secondary/10 absolute -top-8 -left-8 rounded-full mix-blend-multiply blur-xl"></div>
              <span className="font-display-lg text-primary/5 absolute -top-12 -left-4 select-none">SKILLS</span>
            </div>
          </div>
          
          <div className="w-full md:w-2/3 grid grid-cols-1 gap-12 relative">
            {/* Layered Skill Groups */}
            
            {/* Frontend Group */}
            <div className="relative group">
              <h3 className="font-headline-md text-headline-md mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary fill-current">brush</span>
                Frontend Expression
              </h3>
              <div className="flex flex-wrap gap-4 relative py-8">
                <div className="skill-tag px-6 py-3 bg-surface-container border border-outline-variant paper-curl-alt hover:scale-105 transition-all duration-300 cursor-default" style={{"--rotation": "-1.5deg"}}>
                  <span className="font-label-sm uppercase tracking-widest text-on-surface">React</span>
                </div>
                <div className="skill-tag px-8 py-4 bg-secondary text-on-secondary paper-curl-alt hover:scale-105 transition-all duration-300 cursor-default font-bold" style={{"--rotation": "2deg"}}>
                  <span className="font-label-sm uppercase tracking-widest">Tailwind CSS</span>
                </div>
                <div className="skill-tag px-6 py-3 bg-primary text-on-primary paper-curl-alt hover:scale-105 transition-all duration-300 cursor-default" style={{"--rotation": "-1deg"}}>
                  <span className="font-label-sm uppercase tracking-widest">JavaScript</span>
                </div>
                <div className="skill-tag px-6 py-3 bg-surface-container border border-outline-variant paper-curl-alt hover:scale-105 transition-all duration-300 cursor-default" style={{"--rotation": "3deg"}}>
                  <span className="font-label-sm uppercase tracking-widest text-on-surface">TypeScript</span>
                </div>
                <div className="skill-tag px-6 py-3 bg-surface-container border border-outline-variant paper-curl-alt hover:scale-105 transition-all duration-300 cursor-default" style={{"--rotation": "-2deg"}}>
                  <span className="font-label-sm uppercase tracking-widest text-on-surface">Next.js</span>
                </div>
              </div>
            </div>

            {/* Design Group */}
            <div className="relative group">
              <h3 className="font-headline-md text-headline-md mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary fill-current">gesture</span>
                Visual Design
              </h3>
              <div className="flex flex-wrap gap-4 relative py-8">
                <div className="skill-tag px-8 py-4 bg-tertiary-fixed-dim text-on-tertiary-fixed-variant paper-curl-alt hover:scale-105 transition-all duration-300 cursor-default" style={{"--rotation": "1.2deg"}}>
                  <span className="font-label-sm uppercase tracking-widest font-bold">Figma</span>
                </div>
                <div className="skill-tag px-6 py-3 bg-surface-container border border-outline-variant paper-curl-alt hover:scale-105 transition-all duration-300 cursor-default" style={{"--rotation": "-3deg"}}>
                  <span className="font-label-sm uppercase tracking-widest text-on-surface">UI/UX Strategy</span>
                </div>
                <div className="skill-tag px-6 py-3 bg-surface-container border border-outline-variant paper-curl-alt hover:scale-105 transition-all duration-300 cursor-default" style={{"--rotation": "2.5deg"}}>
                  <span className="font-label-sm uppercase tracking-widest text-on-surface">Prototyping</span>
                </div>
                <div className="skill-tag px-6 py-3 bg-primary text-on-primary paper-curl-alt hover:scale-105 transition-all duration-300 cursor-default" style={{"--rotation": "-1.5deg"}}>
                  <span className="font-label-sm uppercase tracking-widest">Editorial Layouts</span>
                </div>
              </div>
            </div>

            {/* Tools Group */}
            <div className="relative group">
              <h3 className="font-headline-md text-headline-md mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary fill-current">architecture</span>
                Architecture &amp; Tools
              </h3>
              <div className="flex flex-wrap gap-4 relative py-8">
                <div className="skill-tag px-6 py-3 bg-surface-container border border-outline-variant paper-curl-alt hover:scale-105 transition-all duration-300 cursor-default" style={{"--rotation": "0.8deg"}}>
                  <span className="font-label-sm uppercase tracking-widest text-on-surface">GitHub</span>
                </div>
                <div className="skill-tag px-8 py-4 bg-surface-container-highest border border-outline paper-curl-alt hover:scale-105 transition-all duration-300 cursor-default" style={{"--rotation": "-2.2deg"}}>
                  <span className="font-label-sm uppercase tracking-widest text-on-surface font-bold">FIGMA</span>
                </div>
                <div className="skill-tag px-6 py-3 bg-surface-container border border-outline-variant paper-curl-alt hover:scale-105 transition-all duration-300 cursor-default" style={{"--rotation": "1.5deg"}}>
                  <span className="font-label-sm uppercase tracking-widest text-on-surface">VS Code</span>
                </div>
                <div className="skill-tag px-6 py-3 bg-surface-container border border-outline-variant paper-curl-alt hover:scale-105 transition-all duration-300 cursor-default" style={{"--rotation": "-0.5deg"}}>
                  <span className="font-label-sm uppercase tracking-widest text-on-surface">Vercel</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Philosophy & Craft (Bento-inspired Layered Layout) */}
      <section className="bg-surface-container-low py-stack-lg">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-stack-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Code as Craft Card */}
            <div className="relative group">
              <div className="bg-surface-container-lowest p-8 sm:p-10 paper-curl border-t-4 border-secondary transition-transform hover:-translate-y-2 duration-300 h-full">
                <span className="material-symbols-outlined text-secondary text-4xl mb-6">terminal</span>
                <h3 className="font-headline-md text-headline-md mb-4">Code as Craft</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Beyond syntax, I view programming as a medium for storytelling. I build immersive experiences using modern stacks that don't just work—they resonate.
                </p>
              </div>
            </div>
            
            {/* Visual Poetry Card */}
            <motion.div className="relative group md:mt-12" variants={itemVariants}>
              <motion.div 
                className="bg-surface-container-lowest p-8 sm:p-10 paper-curl border-t-4 border-primary transition-transform hover:-translate-y-2 duration-300 h-full"
                whileHover={{ y: -8 }}
              >
                <span className="material-symbols-outlined text-primary text-4xl mb-6">brush</span>
                <h3 className="font-headline-md text-headline-md mb-4">Visual Poetry</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Inspired by Swiss design and classic typography, my visual approach emphasizes whitespace, hierarchy, and intentional asymmetry to guide the user's eye.
                </p>
              </motion.div>
            </motion.div>
            
            {/* Immersive Strategy Card */}
            <motion.div className="relative group" variants={itemVariants}>
              <motion.div 
                className="bg-surface-container-lowest p-8 sm:p-10 paper-curl border-t-4 border-secondary transition-transform hover:-translate-y-2 duration-300 h-full"
                whileHover={{ y: -8 }}
              >
                <span className="material-symbols-outlined text-secondary text-4xl mb-6">auto_awesome</span>
                <h3 className="font-headline-md text-headline-md mb-4">Immersive Flow</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  I create digital environments that feel physical. Soft ambient shadows and tonal layering bridge the gap between the screen and the studio.
                </p>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Content Canvas Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-stack-lg py-stack-lg overflow-hidden">
        <motion.div 
          className="relative flex flex-col md:flex-row gap-16 items-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display-lg text-headline-lg mb-8">The Studio <span className="italic font-normal">Archive</span></h2>
            <div className="space-y-12">
              <div className="border-l-2 border-outline-variant/50 pl-8">
                <h4 className="font-headline-md text-body-lg font-bold mb-2 text-secondary">01. Discovery</h4>
                <p className="text-on-surface-variant">Tracing the narrative of a project through deep research and analog sketching. Finding the heart of the story before a single pixel is placed.</p>
              </div>
              <div className="border-l-2 border-outline-variant/50 pl-8">
                <h4 className="font-headline-md text-body-lg font-bold mb-2">02. Composition</h4>
                <p className="text-on-surface-variant">Assembling the layered editorial grid. Weaving together typography, texture, and interactive elements into a cohesive digital tapestry.</p>
              </div>
              <div className="border-l-2 border-outline-variant/50 pl-8">
                <h4 className="font-headline-md text-body-lg font-bold mb-2">03. Refinement</h4>
                <p className="text-on-surface-variant">The "Ink &amp; Code" phase. Polishing animations to feel organic and ensuring the technical architecture is as robust as the visual front.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 relative mt-12 md:mt-0"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full aspect-square rotate-2 bg-surface shadow-2xl p-4">
              <div className="w-full h-full overflow-hidden mask-irregular">
                <motion.img 
                  className="w-full h-full object-cover grayscale"
                  alt="Studio desk"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO8y_hN5gEhSw9_oQZVm_EKk7qwGrbiSXllreNS3lYadHd9yAbnGdwkfLgLlu8LPEeHDmJQhQCLRXNp5qUrtjQzEd2yU7FJrdQqBzMggxHFJgyOJ8MNvAY3iFEgieGYjNo5NCGnn8YhpPmiPWq3UTmeCcnIRnPUUxYsw9YRXNmbXwvq3eJYx7H39utNXdxDAzVUGDom4jSM7ZbO7tHmkCFBewhuOGuhwSk1o-p6nTEFNFPMsuC9SWuslEg2gu_1hvTEO2LOLh9gTqJ"
                  whileHover={{ scale: 1.05, filter: 'grayscale(0.5)' }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              {/* Masking Tape Detail */}
              <motion.div 
                className="absolute -top-4 left-1/4 w-32 h-8 bg-primary-fixed/40 rotate-1 mix-blend-multiply flex items-center justify-center font-label-sm uppercase tracking-widest text-on-surface/60"
                animate={{ rotate: [1, -1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Process Log
              </motion.div>
            </div>
            {/* Floating Paper Scrap */}
            <motion.div 
              className="hidden md:block absolute -bottom-10 -right-8 bg-tertiary-fixed p-6 rotate-6 shadow-lg max-w-[200px]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <p className="font-headline-md text-body-md text-on-tertiary-fixed italic">"Beauty lies in the details often overlooked."</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Final Call to Narrative */}
      <motion.section 
        className="py-stack-lg border-t border-outline-variant/20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-stack-lg text-center">
          <motion.div 
            className="max-w-3xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="font-display-lg text-display-lg mb-8"
              variants={itemVariants}
            >
              Ready to draft your <br/><span className="text-secondary">next chapter?</span>
            </motion.h2>
            <motion.p 
              className="font-body-lg text-body-lg mb-10 text-on-surface-variant"
              variants={itemVariants}
            >
              I am currently accepting select commissions for immersive digital storytelling projects.
            </motion.p>
            <motion.div 
              className="flex flex-col md:flex-row justify-center gap-6"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className="bg-secondary text-on-secondary px-10 py-4 font-headline-md text-body-lg hover:brightness-110 transition-all shadow-lg hover:shadow-secondary/20 inline-block">
                  Start a Conversation
                </Link>
              </motion.div>
              <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/work" className="border-b-2 border-primary py-4 font-headline-md text-body-lg hover:text-secondary hover:border-secondary transition-all inline-block">
                  View Archive
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
