import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (index) => ({
      scale: 1,
      opacity: 1,
      transition: { delay: index * 0.2, duration: 0.5, ease: 'easeOut' },
    }),
  };

  return (
    <main className="relative pt-[96px] md:pt-[120px]">
      <div className="fixed inset-0 pointer-events-none texture-canvas"></div>
      <div className="fixed inset-0 pointer-events-none grain-overlay opacity-30"></div>

      {/* Hero Section Title */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-stack-lg mb-stack-lg relative">
        <div className="absolute -top-12 -left-4 opacity-10 pointer-events-none">
          <motion.div 
            className="w-64 h-64 paint-stroke-bg rounded-full filter blur-3xl"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          ></motion.div>
        </div>
        <motion.h1 
          className="font-display-lg text-display-lg max-w-3xl leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          A Visual Narrative of <span className="italic text-secondary ink-underline-alt">Digital Craft</span> &amp; Strategy.
        </motion.h1>
        <motion.p 
          className="mt-6 font-body-lg text-body-lg text-on-surface-variant max-w-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          Bridging the gap between creative messy sketches and pixel-perfect technical execution.
        </motion.p>
      </section>

      {/* Experience Timeline Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-stack-lg pb-stack-lg">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Timeline Strip / Sidebar */}
          <div className="hidden md:flex md:col-span-1 flex-col items-center gap-12 py-10">
            <div className="w-px h-full bg-outline-variant relative">
              <div className="sticky top-40 flex flex-col gap-20">
                <motion.div 
                  className="w-3 h-3 bg-secondary rounded-full -ml-1"
                  variants={dotVariants}
                  initial="hidden"
                  animate="visible"
                  custom={0}
                ></motion.div>
                <motion.div 
                  className="w-3 h-3 bg-outline rounded-full -ml-1"
                  variants={dotVariants}
                  initial="hidden"
                  animate="visible"
                  custom={1}
                ></motion.div>
                <motion.div 
                  className="w-3 h-3 bg-outline rounded-full -ml-1"
                  variants={dotVariants}
                  initial="hidden"
                  animate="visible"
                  custom={2}
                ></motion.div>
              </div>
            </div>
          </div>

          {/* Experience Cards Column */}
          <motion.div 
            className="md:col-span-11 space-y-stack-lg"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            
            {/* Entry 1: StackLab */}
            <motion.div className="relative group" variants={cardVariants}>
              <div className="flex flex-col md:flex-row gap-gutter">
                <div className="md:w-1/3">
                  <span className="font-label-sm text-secondary uppercase tracking-[0.2em]">2024 — 2025</span>
                  <h2 className="font-headline-lg text-headline-lg mt-2 leading-none">StackLab</h2>
                  <p className="font-body-md text-on-surface-variant italic mt-1">UI/UX &amp; Web Developer Intern</p>
                </div>
                <div className="md:w-2/3">
                  <motion.div 
                    className="sticky-note bg-surface-container-lowest p-stack-md border border-outline-variant/30 relative overflow-hidden"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 paint-stroke-bg opacity-10 -mr-8 -mt-8 rotate-12"></div>
                    <p className="font-body-lg text-body-lg leading-relaxed mb-6">
                      Designed and developed responsive user interfaces for real-world web applications, focusing on creating clean, user-friendly, and visually engaging digital experiences. Worked on improving user flows, building reusable frontend components, and translating UI/UX concepts into interactive React.js applications for platforms like GoRSVP.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-secondary/10 text-secondary px-3 py-1 font-label-sm italic rounded-sm border border-secondary/20">- design systems</span>
                      <span className="bg-secondary/10 text-secondary px-3 py-1 font-label-sm italic rounded-sm border border-secondary/20">- tailwind css</span>
                      <span className="bg-secondary/10 text-secondary px-3 py-1 font-label-sm italic rounded-sm border border-secondary/20">- figma</span>
                    </div>
                    {/* Visual Accent */}
                    <div className="mt-8 overflow-hidden rounded-sm">
                      <motion.img 
                        className="w-full h-64 md:h-48 object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-sm shadow-sm" 
                        alt="Workspace"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvdIIX83hWSkt63oYAocTgpZNaRqywWpy2ziivM1-8LPpx0RDGB8MPjEV8zg8y6R-05704lH1AwNXyPoqq7bjua4b-h8Zyi3-4c8KRaJ6e9HSyV63E1UfN-u-PQbqExLLkdEwgvPyCtZ20jDdNZMgfNC4yczDDM5h3obimin1fgMq5rplCFKmPV-ytJwVEU3FbXnzvorU1M2BCJc2X_-XUfiEw4WirqFcgi8VJhza8Asfq9v5fe_ESvArVhzdmRqMbdCbGrdHY4vUx"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Entry 2: GDG */}
            <motion.div className="relative group" variants={cardVariants}>
              <div className="flex flex-col md:flex-row-reverse gap-gutter">
                <div className="md:w-1/3 md:text-right">
                  <span className="font-label-sm text-secondary uppercase tracking-[0.2em]">2022 — 2023</span>
                  <h2 className="font-headline-lg text-headline-lg mt-2 leading-none">GDG Event</h2>
                  <p className="font-body-md text-on-surface-variant italic mt-1">Management Co-Lead</p>
                </div>
                <div className="md:w-2/3">
                  <motion.div 
                    className="sticky-note bg-surface-container-lowest p-stack-md border border-outline-variant/30 relative"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute bottom-4 right-4">
                      <motion.span 
                        className="material-symbols-outlined text-on-secondary-fixed opacity-10 text-6xl fill-current"
                        animate={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        gesture
                      </motion.span>
                    </div>
                    <p className="font-body-lg text-body-lg leading-relaxed mb-6">
                      Spearheaded event logistics for tech conferences with 500+ attendees. Orchestrated cross-functional teams to deliver seamless registrations, speaker coordination, and on-site technical support.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-secondary/10 text-secondary px-3 py-1 font-label-sm italic rounded-sm border border-secondary/20">- leadership</span>
                      <span className="bg-secondary/10 text-secondary px-3 py-1 font-label-sm italic rounded-sm border border-secondary/20">- logistics</span>
                      <span className="bg-secondary/10 text-secondary px-3 py-1 font-label-sm italic rounded-sm border border-secondary/20">- community</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Entry 3: Marketing Head */}
            {/* <motion.div className="relative group" variants={cardVariants}>
              <div className="flex flex-col md:flex-row gap-gutter">
                <div className="md:w-1/3">
                  <span className="font-label-sm text-secondary uppercase tracking-[0.2em]">2021 — 2022</span>
                  <h2 className="font-headline-lg text-headline-lg mt-2 leading-none">Tech Cell</h2>
                  <p className="font-body-md text-on-surface-variant italic mt-1">Marketing Head</p>
                </div>
                <div className="md:w-2/3">
                  <motion.div 
                    className="sticky-note bg-surface-container-lowest p-stack-md border border-outline-variant/30 overflow-hidden"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="h-2 w-full paint-stroke-bg absolute top-0 left-0"></div>
                    <p className="font-body-lg text-body-lg leading-relaxed mb-6 mt-4">
                      Defined the visual identity and social strategy for collegiate tech festivals. Increased engagement by 40% through targeted digital campaigns and cohesive branding across physical and digital touchpoints.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                      <motion.img 
                        className="w-full h-32 object-cover rounded-sm border border-outline-variant/30" 
                        alt="Marketing collateral"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAe8k2PmaFcegFvqYdY9_eor_SdqDZcOWksFCXjfeDLtkrzt0rU5dppNP5nEp2s7vu8HafSC7a8Tw24YnTUMUlxYa3J9iIz51h9s_aPDaSvLmeo2YE85evXt7zuY-ZwMl933ncb1O2TrXMktxxzkpH5t6FAeq57mKiO_74te7VmdzTvJpovw6N65h4ftJpp9INqgMzpJhKRwe1ZAQcjDAX-LMWu0E2RutB_nrC65u_rv8fmrDmA4iAXTfMKQhPIR3Q_FzUjTonvlRDs"
                      />
                      <div className="flex flex-col justify-center">
                        <span className="font-display-lg text-headline-lg text-secondary leading-none">40%</span>
                        <span className="font-label-sm uppercase text-on-surface-variant mt-2">Growth In Reach</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div> */}

          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <motion.section 
        className="bg-secondary-fixed py-stack-lg border-t border-b border-outline-variant/20 relative"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-stack-lg text-center">
          <h2 className="font-display-lg text-display-lg text-on-secondary-fixed mb-6">Let's create something <br/><span className="italic text-secondary">extraordinary</span> together.</h2>
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact" className="bg-secondary text-on-secondary px-6 sm:px-10 py-4 w-full sm:w-auto font-headline-md text-headline-md uppercase tracking-tighter hover:bg-on-secondary-container transition-all active:scale-95 inline-block text-center">
                Send a Brief
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/work" className="border-2 border-secondary text-secondary px-6 sm:px-10 py-4 w-full sm:w-auto font-headline-md text-headline-md uppercase tracking-tighter hover:bg-secondary/5 transition-all active:scale-95 inline-block text-center">
                View Folio
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
