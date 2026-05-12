import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const navLinks = [
    { name: 'Work', path: '/work' },
    { name: 'Experience', path: '/experience' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-sm border-none">
      <nav className="flex justify-between items-center w-full px-margin-mobile md:px-stack-lg max-w-container-max mx-auto py-unit h-20">
        <Link to="/" className="font-display-lg text-headline-md font-black text-primary uppercase tracking-tighter">
          Pratik Shinde
        </Link>
        
        <div className="hidden md:flex gap-gutter items-center">
          {navLinks.map((link) => {
            const isActive = location.pathname.startsWith(link.path);
            return (
              <Link
                key={link.name}
                to={link.path}
                className={isActive 
                  ? "text-secondary font-bold border-b-2 border-secondary pb-1 font-headline-md text-body-md uppercase tracking-tighter transition-colors duration-300" 
                  : "text-on-surface-variant font-medium hover:text-secondary transition-colors duration-300 font-headline-md text-body-md uppercase tracking-tighter"}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        
        <div className="hidden md:flex items-center">
            <Link to="/contact" className="bg-primary text-on-primary px-6 py-2 font-body-md font-bold text-body-md uppercase tracking-widest hover:bg-secondary transition-all active:scale-95 torn-edge ml-4">
            Hire Me
            </Link>
        </div>

        <button className="md:hidden text-primary">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </nav>
    </header>
  );
}
