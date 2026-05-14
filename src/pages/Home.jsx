import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const floatingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: [0.2, 0.2],
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-margin-mobile pt-stack-lg overflow-hidden relative">
        {/* Floating Decorative Elements */}
        <motion.div 
          className="absolute top-[20%] -left-10 w-48 h-48 opacity-20 pointer-events-none rotate-12 bg-secondary/30 blur-3xl"
          variants={floatingVariants}
          initial="hidden"
          animate="visible"
        ></motion.div>
        <motion.div 
          className="absolute bottom-[10%] -right-10 w-64 h-64 opacity-10 pointer-events-none -rotate-12 bg-tertiary/20 blur-2xl"
          variants={floatingVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5, duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        ></motion.div>
        
        {/* Abstract Ink Splash Decor */}
        <motion.div 
          className="absolute top-[15%] right-[10%] opacity-40 select-none hidden sm:block"
          initial={{ opacity: 0, rotate: -20 }}
          animate={{ opacity: 0.4, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img 
            alt="Abstract ink splash" 
            className="w-28 h-28 sm:w-32 sm:h-32 object-cover torn-edge grayscale contrast-125" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJVhvarmcLnFIiClogTSno1g3CLwY7mXYgqk-8sMbTKt-wbT9f0VAaNrIJTbzavi-ynHR0OwnapYAyR5vzF6nZK8mGzsuAr9MHpmp5vTreuQ0QNyUhPivTSK61XEBgAV1JR1nN5oWCXKeHfMMDxVOEe4Wu3Stv9kA9e96Nr9osY82lxLk-4JTYBLdlDV3GJ7zMe9bypwoNjgGH1jb6NFZktU6vP_8iAFdN-5YjciavUwKOy1qzcNeXkvL4ecliOVDsua-Q3T9OMq2v"
          />
        </motion.div>
        <motion.div 
          className="absolute bottom-[20%] left-[5%] opacity-30 select-none hidden md:block"
          initial={{ opacity: 0, rotate: 20 }}
          animate={{ opacity: 0.3, rotate: -6 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <img 
            alt="Torn paper" 
            className="w-40 h-56 object-cover -rotate-6 shadow-xl grayscale" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAj6au2w9aK5_Qh9phNjWgA8hqnWWcheoz4nFskmNxO-QrxtYBZvt6vH7jEjLCU9WQO44t4eLp_xgmSj0nfju2kXnbNnGAw6v1snWaufFcdhLMgY1f7wiDyDgB0W1akJ9LhDlMzt9wRRMnhWMxoiFDlhPQLIaoVtgJNoItuloD-7lAw2FZoje2_m3nMDGsW-lBHljaDAk6wU_Qo89CZ5LcJyd-zK2UZ2sXSasKmIM8jxIbUNoGkGevREt6_dTY7ZcFaactcpVDAoSKA"
          />
        </motion.div>

        {/* Content Container */}
        <motion.div 
          className="relative z-10 max-w-container-max mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Name with Paint Stroke */}
          <motion.div className="relative inline-block mb-unit" variants={itemVariants}>
            <div className="absolute -inset-x-8 inset-y-4 bg-secondary-container/60 paint-stroke -z-10 transform -rotate-1"></div>
            <h1 className="font-display-lg text-[12vw] md:text-display-lg text-primary uppercase leading-[0.85] tracking-tighter">
              Pratik Shinde
            </h1>
          </motion.div>
          
          {/* Headline */}
          <motion.h2 
            className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface max-w-3xl mx-auto mt-stack-md leading-tight"
            variants={itemVariants}
          >
            Crafting Digital Experiences with an <span className="italic font-normal">Analog Soul</span>
          </motion.h2>
          
          {/* Tagline */}
          <motion.p 
            className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto mt-6 italic opacity-80"
            variants={itemVariants}
          >
            A dialogue between technical precision and artistic intuition, rendered in code and pixels.
          </motion.p>
          
          {/* CTAs */}
          <motion.div 
            className="mt-stack-md flex flex-col sm:flex-row gap-6 justify-center items-center w-full"
            variants={itemVariants}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/work" className="bg-secondary text-on-secondary px-6 sm:px-10 py-4 w-full sm:w-auto text-center font-body-md font-bold text-body-md uppercase tracking-widest torn-edge hover:opacity-90 transition-opacity active:scale-95 shadow-lg shadow-secondary/20 inline-block">
                View Work
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact" className="group relative px-6 sm:px-10 py-4 w-full sm:w-auto text-center font-body-md font-bold text-body-md uppercase tracking-widest text-primary active:scale-95 transition-transform inline-block">
                <span className="relative z-10">Contact Me</span>
                <div className="absolute bottom-1 left-0 w-full h-[2px] bg-primary group-hover:h-full group-hover:bg-primary-fixed-dim transition-all -z-0"></div>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="font-label-sm text-label-sm uppercase tracking-widest">Scroll</span>
          <span className="material-symbols-outlined text-[20px] animate-bounce">expand_more</span>
        </motion.div>
      </section>

      {/* Signature Detail */}
      <motion.div 
        className="py-stack-lg border-y border-outline-variant/20 flex flex-col items-center justify-center bg-surface-container-low/30"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.span 
          className="material-symbols-outlined text-secondary text-[48px] fill-current"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          brush
        </motion.span>
        <p className="font-body-md italic text-on-surface-variant mt-4 text-center max-w-md px-margin-mobile">
          "Every line of code is a brushstroke. Every interface is a gallery. My work is the intersection of logic and beauty."
        </p>
      </motion.div>
    </main>
  );
}
