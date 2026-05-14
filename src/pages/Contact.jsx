import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <main className="pt-stack-lg relative">
      <div className="fixed inset-0 pointer-events-none canvas-grain z-[-1]"></div>
      
      {/* Background Decorative Elements */}
      <div className="hidden md:block absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/4"></div>
      <div className="hidden md:block absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-tertiary-fixed/10 rounded-full blur-3xl -z-10 -translate-x-1/2"></div>

      {/* Skills Section: Orbital / Layered Arrangement */}


      {/* Contact Section: Warm & Welcoming */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-stack-lg py-stack-lg border-t border-outline-variant/30 relative">
        {/* Background Paint Splatter */}
        <div className="absolute -right-20 top-20 opacity-20 pointer-events-none">
          <img 
            alt="Ink splatter" 
            className="w-96 h-96 object-cover ink-splatter-alt" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDqcbPCL51mlynDkVU90n51KjP_zh9ZkrF860AEt5VI6zfO0eLN7_0zbNaohjhj3Yg_tRNENtIbJgsFPwxZXeK6KCn6Qlpup_l-QC50zu1zpUZds75vBPf2PAa4XDqmIV_YCWwfaqDMnOj_24uua1nXaO1bqoKBINgi1RhtgQSItTRLDu8w6_iWAPzEdjDfS2y7lLvPhngpi4X3VwuzlI5ZlxThjmo8I6Xiglhc5QxU4o_s1x2anSW1mfxNr8HXEO0u_fyNVyenuBU"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center">
          <div>
            <span className="font-label-sm uppercase tracking-[0.2em] text-secondary mb-4 block">Let's talk code &amp; ink</span>
            <h2 className="font-display-lg text-headline-lg mb-stack-md leading-none">Start a New Chapter</h2>
            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary text-3xl">mail</span>
                <div>
                  <p className="font-label-sm uppercase text-on-surface-variant mb-1">Send an inquiry</p>
                  <a className="font-headline-md text-headline-md hover:text-secondary transition-colors" href="mailto:shindepratik582004@gmail.com">shindepratik582004@gmail.com</a>
                </div>
              </div>
              <div className="flex gap-gutter">
                <a className="group flex items-center gap-2" href="http://www.linkedin.com/in/pratikshinde3103">
                  <span className="w-10 h-10 rounded-full border border-outline flex items-center justify-center group-hover:bg-secondary group-hover:text-on-secondary transition-all">
                    <span className="material-symbols-outlined text-xl">share</span>
                  </span>
                  <span className="font-label-sm uppercase">LinkedIn</span>
                </a>
                <a className="group flex items-center gap-2" href="https://github.com/Pratik-58">
                  <span className="w-10 h-10 rounded-full border border-outline flex items-center justify-center group-hover:bg-secondary group-hover:text-on-secondary transition-all">
                    <span className="material-symbols-outlined text-xl">code</span>
                  </span>
                  <span className="font-label-sm uppercase">GitHub</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-surface-container-lowest p-stack-md paper-curl-alt border border-outline-variant/30 relative">
            {/* Subtle corner curl decoration */}
            <div className="absolute top-0 right-0 w-8 h-8 bg-surface-container-high" style={{clipPath: "polygon(100% 0, 0 0, 100% 100%)"}}></div>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input className="peer w-full bg-transparent border-0 border-b border-outline-variant py-4 px-0 focus:ring-0 focus:border-secondary placeholder-transparent" id="name" placeholder="Your Name" type="text"/>
                <label className="absolute left-0 -top-4 font-headline-md text-body-md text-on-surface-variant transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-body-lg peer-focus:-top-4 peer-focus:text-secondary peer-focus:text-body-md" htmlFor="name">Your Name</label>
              </div>
              <div className="relative">
                <input className="peer w-full bg-transparent border-0 border-b border-outline-variant py-4 px-0 focus:ring-0 focus:border-secondary placeholder-transparent" id="email" placeholder="Your Email" type="email"/>
                <label className="absolute left-0 -top-4 font-headline-md text-body-md text-on-surface-variant transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-body-lg peer-focus:-top-4 peer-focus:text-secondary peer-focus:text-body-md" htmlFor="email">Your Email</label>
              </div>
              <div className="relative">
                <textarea className="peer w-full bg-transparent border-0 border-b border-outline-variant py-4 px-0 focus:ring-0 focus:border-secondary placeholder-transparent resize-none" id="message" placeholder="The Vision" rows="4"></textarea>
                <label className="absolute left-0 -top-4 font-headline-md text-body-md text-on-surface-variant transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-body-lg peer-focus:-top-4 peer-focus:text-secondary peer-focus:text-body-md" htmlFor="message">Tell me about your vision...</label>
              </div>
              <button className="w-full bg-primary text-on-primary py-4 font-bold uppercase tracking-[0.2em] hover:bg-secondary transition-colors flex justify-center items-center gap-2 group" type="submit">
                Send Message
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Final Statement */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-stack-lg py-stack-lg text-center">
        <div className="relative inline-block px-12 py-8">
          <div className="absolute inset-0 bg-tertiary-fixed/20 -skew-x-6 -z-10"></div>
          <p className="font-headline-lg text-headline-md text-primary italic mb-2">"Code is temporary, good design is eternal."</p>
          <div className="w-24 h-1 bg-secondary mx-auto mt-4"></div>
        </div>
      </section>
    </main>
  );
}
