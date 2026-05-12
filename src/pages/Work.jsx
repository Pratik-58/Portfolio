import { Link } from 'react-router-dom';
import gorsvp from '../assets/gorsvp.png';
import sheShield from '../assets/SheShield.png';
import NextGenHire from '../assets/NextGenHire.png';

export default function Work() {
  return (
    <main className="pt-32 pb-stack-lg max-w-container-max mx-auto px-margin-mobile md:px-stack-lg relative">
      <div className="fixed inset-0 grain-overlay-multiply z-[-1]"></div>
      
      {/* Hero Section Header */}
      <section className="mb-stack-lg">
        <h1 className="font-display-lg text-display-lg text-primary max-w-3xl leading-none">
          Selected <span className="text-secondary italic">Works</span> &amp; Experiments
        </h1>
        <div className="h-1 w-24 bg-secondary mt-unit"></div>
        <p className="font-body-lg text-on-surface-variant max-w-xl mt-stack-md leading-relaxed">
          A curation of digital products, case studies, and visual explorations where high-end editorial aesthetics meet functional engineering.
        </p>
      </section>

      {/* Asymmetrical Project Grid */}
      <div className="asymmetric-grid">
        
        {/* Project 1: GoRSVP (Large Feature) */}
        <div className="col-span-12 md:col-span-8 group relative">
          <div className="canvas-texture p-unit paper-curl transition-all duration-500 hover:-translate-y-2 border border-outline-variant/10 bg-surface-container/95 backdrop-blur-sm">
            <div className="relative overflow-hidden aspect-video mb-stack-md">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="GoRSVP project preview"
                src={gorsvp}
              />
              <div className="absolute inset-0 bg-secondary/5 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start gap-6 px-2">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-label-sm text-secondary uppercase tracking-widest bg-secondary-fixed px-3 py-1 -rotate-1 font-bold">Product Design</span>
                  <div className="flex gap-2">
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter border-b border-outline/30 px-1">React</span>
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter border-b border-outline/30 px-1">Figma</span>
                  </div>
                </div>
                <h2 className="font-headline-md text-headline-md text-primary mb-3">GoRSVP</h2>
                <p className="font-body-md max-w-lg mb-6 leading-relaxed text-on-surface">
                  Built and designed GoRSVP, an event management platform focused on seamless RSVP tracking, event creation, and attendee management. Developed responsive interfaces and interactive dashboards to improve user experience and event workflows.
                </p>
                <div className="flex items-center gap-8">
                  <a className="group/link flex items-center gap-2 font-bold text-secondary uppercase text-sm tracking-widest border-b-2 border-secondary/20 hover:border-secondary transition-all" href="go-rsvp.vercel.app">
                    Live Link <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">north_east</span>
                  </a>
                  <a className="group/link flex items-center gap-2 font-bold text-on-surface uppercase text-sm tracking-widest border-b-2 border-on-surface/20 hover:border-on-surface transition-all" href="#">
                    Case Study <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full border border-outline-variant/20 pointer-events-none bg-surface-container/95 backdrop-blur-sm"></div>
        </div>

        {/* Project 2:Sheshield */}
        <div className="col-span-12 md:col-span-4 md:mt-24 group">
          <div className="bg-surface-container-lowest canvas-texture p-unit paper-curl transition-all duration-500 hover:-translate-y-2 border-l-4 border-secondary">
            <div className="relative overflow-hidden aspect-3/4">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                alt="SheShield Project" 
                src={sheShield}
              />
            </div>
            <div className="mt-6">
              {/* <span className="font-label-sm text-secondary uppercase tracking-widest bg-primary-fixed px-3 py-1 mb-2 inline-block rotate-1">AI Engineering</span> */}
              <h2 className="font-headline-md text-headline-md text-primary">SheShield</h2>
              <p className="font-body-md text-on-surface-variant mt-2">
                Developed a women safety application with SOS alerts, live location sharing, and emergency support features. Designed simple and accessible interfaces to ensure quick interaction and ease of use during emergency situations.
              </p>
              <div className="flex items-center gap-8">
                  {/* <a className="group/link flex items-center gap-2 font-bold text-secondary uppercase text-sm tracking-widest border-b-2 border-secondary/20 hover:border-secondary transition-all" href="#">
                    Live Link <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">north_east</span>
                  </a> */}
                  <a className="group/link flex items-center gap-2 font-bold text-on-surface uppercase text-sm tracking-widest border-b-2 border-on-surface/20 hover:border-on-surface transition-all" href="#">
                    Case Study <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                  </a>
                </div>
            </div>
          </div>
        </div>

        {/* Project 3: NextGenHire */}
        <div className="col-span-12 md:col-span-5 group relative md:-mt-12">
          <div className="bg-surface-container-low canvas-texture p-unit paper-curl transition-all duration-500 hover:-translate-y-2">
            <div className="relative overflow-hidden aspect-square">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                alt="NextGenHire Project" 
                src={NextGenHire}
              />
            </div>
            <div className="mt-6">
              <h2 className="font-headline-md text-headline-md text-primary">NextGenHired</h2>
              <p className="font-body-md text-on-surface-variant mt-2 italic border-l-2 border-secondary pl-4">
                Built a gamified learning and skill-based hiring platform that connects candidates with recruiters through practical assessments and interactive workflows. Focused on creating intuitive dashboards and responsive user experiences for both learners and recruiters.
              </p>
              <div className="flex items-center gap-8">
                  <a className="group/link flex items-center gap-2 font-bold text-secondary uppercase text-sm tracking-widest border-b-2 border-secondary/20 hover:border-secondary transition-all" href="#">
                    Live Link <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">north_east</span>
                  </a>
                  <a className="group/link flex items-center gap-2 font-bold text-on-surface uppercase text-sm tracking-widest border-b-2 border-on-surface/20 hover:border-on-surface transition-all" href="#">
                    Case Study <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                  </a>
                </div>
            </div>
          </div>
          {/* Ink splatter decorative element */}
          <div className="absolute -top-8 -left-8 w-24 h-24 bg-primary opacity-5 rounded-full ink-splatter pointer-events-none"></div>
        </div>

        {/* Project 4: UI/UX Case Studies (Bento-style grid item)
        <div className="col-span-12 md:col-span-7 group">
          <div className="h-full bg-surface-container-highest canvas-texture p-unit paper-curl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between">
            <div className="grid grid-cols-2 gap-unit h-64">
              <div className="overflow-hidden bg-white/20 backdrop-blur-sm p-4 border border-white/40">
                <img 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                  alt="Aesthetic sketches" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhehW5w-9KXmN1JnzJNcXAYYdc_bXZg1r4D56Wk3PtoCUfYl0KO6QXIYMu_D7sMSE72viIo_TD9r8tblSdl10DXc1x_5_lvLh5esxFNZu0YP7MV6hqLiwpv8P2ye4Rlj0Ua-ddloiOMSJnANiy8J9k1gEmV3IA8qIW2UjENOL0t6o8ogPj-eAFaNL76spfsuG3HhxvmxL4st270WzVsemfJnzlavwaDuQL0x9Uden6djxE6N7obwYaN47GdphtfAIVSvyCwujcsIvQ"
                />
              </div>
              <div className="overflow-hidden bg-white/20 backdrop-blur-sm p-4 border border-white/40 translate-y-8">
                <img 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                  alt="UI Interface" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgwD0HwZDt8FSPy0LOAAwvMiJV43xEI7k4pbYo-Ed7LP-sGKYaBhOOlypV8czQh_Mc7067JWiW8eKAsPQYchz78T6hyHKaej1jTy8B16Rsbt1nvLJhfZMyaUw_KjjrtLrSayUYjvfSl_MBgV9NlPwwTWRjluhTRWWnEn8twb93iWVX8bGIbHHWxbAfiTAqedGTxQOo0NBiewhKlTvVHwh1PUXGWaTWkyzyZYXgR3QR4WndLYq-CrolRKwKixogkvqreLxu0XgWQsIW"
                />
              </div>
            </div>
            <div className="mt-12">
              <span className="font-label-sm text-on-surface-variant uppercase tracking-[0.2em] block mb-2">Visual Exploration</span>
              <h2 className="font-headline-lg text-headline-lg text-primary">Aesthetic Frameworks</h2>
              <p className="font-body-md text-on-surface-variant mt-4 max-w-lg">
                A collection of diverse interface experiments ranging from brutalist typography to soft-ui and luxury editorial systems.
              </p>
              <div className="mt-8 flex items-center gap-6">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-background bg-secondary flex items-center justify-center text-[10px] font-bold text-on-secondary">UX</div>
                  <div className="w-10 h-10 rounded-full border-2 border-background bg-primary flex items-center justify-center text-[10px] font-bold text-on-primary">UI</div>
                  <div className="w-10 h-10 rounded-full border-2 border-background bg-tertiary-fixed-dim flex items-center justify-center text-[10px] font-bold text-on-tertiary-fixed">IX</div>
                </div>
                <span className="text-on-surface-variant italic font-body-md">15+ Projects Reviewed</span>
              </div>
            </div>
          </div>
        </div> */}

      </div>

      <div className="mt-12 flex justify-center">
        <a className="group flex items-center gap-4 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-on-primary transition-all duration-300 px-8 py-4 font-bold uppercase tracking-widest torn-edge active:scale-95" href="#">
          <span>View More Projects</span>
          <span className="material-symbols-outlined transition-transform duration-300 group-hover:rotate-90">add</span>
        </a>
      </div>

      {/* Call to action */}
      <section className="mt-stack-lg flex flex-col items-center text-center py-stack-md">
        <div className="w-full h-px bg-outline-variant/30 mb-stack-md"></div>
        <p className="font-headline-md text-headline-md text-primary max-w-2xl mb-8">
          Every line of code is a brushstroke. Let's create something <span className="italic text-secondary">memorable</span> together.
        </p>
        <Link to="/contact" className="inline-block bg-primary text-on-primary font-bold px-10 py-4 transition-all duration-300 hover:bg-secondary active:scale-95 torn-edge">
          Start a Conversation
        </Link>
      </section>
    </main>
  );
}
