import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full py-stack-lg bg-surface-container-low border-t border-outline-variant/30 mt-stack-lg">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-margin-mobile md:px-stack-lg max-w-container-max mx-auto gap-unit">
        
        <div className="font-headline-lg text-headline-lg-mobile text-on-surface uppercase order-1">
          Pratik Shinde
        </div>
        
        <div className="font-body-md text-body-md italic text-on-surface-variant text-center md:text-right order-3 md:order-2 my-6 md:my-0">
          © {new Date().getFullYear()} Pratik Shinde — Crafted with ink and code.
        </div>

        <div className="flex gap-gutter order-2 md:order-3">
          <Link to="/work" className="text-secondary font-bold hover:underline decoration-secondary decoration-2 underline-offset-4 transition-opacity hover:opacity-80">
            <span className="material-symbols-outlined" data-icon="read_more">read_more</span>
          </Link>
          <a href="mailto:shindepratik582004@gmail.com" className="text-on-surface-variant hover:text-secondary hover:underline decoration-secondary decoration-2 underline-offset-4 transition-opacity">
            <span className="material-symbols-outlined" data-icon="mail">mail</span>
          </a>
          <Link to="/about" className="text-on-surface-variant hover:text-secondary hover:underline decoration-secondary decoration-2 underline-offset-4 transition-opacity">
            <span className="material-symbols-outlined" data-icon="gesture">gesture</span>
          </Link>
          <Link to="/contact" className="text-on-surface-variant hover:text-secondary hover:underline decoration-secondary decoration-2 underline-offset-4 transition-opacity">
            <span className="material-symbols-outlined" data-icon="brush">brush</span>
          </Link>
        </div>

      </div>
    </footer>
  );
}
