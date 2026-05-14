import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [location.pathname]);

  const navLinks = [
    { name: 'Work', path: '/work' },
    { name: 'Experience', path: '/experience' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

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
                  ? 'text-secondary font-bold border-b-2 border-secondary pb-1 font-headline-md text-body-md uppercase tracking-tighter transition-colors duration-300'
                  : 'text-on-surface-variant font-medium hover:text-secondary transition-colors duration-300 font-headline-md text-body-md uppercase tracking-tighter'}
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

        <button
          type="button"
          onClick={toggleMenu}
          className="md:hidden text-primary inline-flex items-center justify-center rounded-full p-2 hover:bg-secondary/10 focus:outline-none focus:ring-2 focus:ring-secondary"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </nav>

      <div
        className={`md:hidden fixed inset-x-0 top-20 z-50 bg-background/95 backdrop-blur-xl border-b border-outline-variant/20 transition-transform duration-300 ease-out ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-6 items-center py-6 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={closeMenu}
              className="w-full text-center text-headline-md font-bold uppercase tracking-tighter text-primary py-3 rounded-lg hover:bg-surface-container-high transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={closeMenu}
            className="w-full text-center bg-primary text-on-primary px-6 py-3 font-bold uppercase tracking-widest rounded-lg hover:bg-secondary transition-all"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </header>
  );
}
