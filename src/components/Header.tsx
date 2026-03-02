import React, { useEffect, useState } from 'react'
import mainLogo from '../assets/images/velvet-whisk-logo.png';
import { BsList, BsXLg } from "react-icons/bs";
import { Link } from "react-router";

type Props = {}

const header = (props: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 768px').matches);

  // add window resize event listener
  useEffect(() => {
    const handleResize = () => setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <header className="bg-seashell-100 shadow-sm fixed left-0 right-0 z-20">
      {/* mobile menu backdrop */}
      {isMobile && menuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen mt-20 bg-black opacity-40 z-1" onClick={() => setMenuOpen(false)}></div>
      )}
      <nav className="max-w-7xl mx-auto flex justify-between items-center gap-4 px-6 py-4 relative z-20" aria-label="main">
        <Link to="/" className="flex items-end gap-3">
          <img src={mainLogo} alt="velvet whisk logo" className="max-w-8 lg:max-w-10" />
          <span className="text-2xl lg:text-3xl font-titan text-burgundy-500 whitespace-nowrap">VELVET <span className="text-wood-700">WISK</span></span>
        </Link>
        <button 
          id="menu-open-btn" 
          className={`${menuOpen ? 'hidden ' : ''}md:hidden p-1.5 w-10 h-10 text-wood-700`} 
          type="button"
          onClick={() => setMenuOpen(true)}
        >
          <BsList className="w-full h-full" />
        </button>
        <button 
          id="menu-close-btn" 
          className={`${!menuOpen ? 'hidden ' : ''}md:hidden w-10 h-10 p-1.5 text-wood-700`} 
          type="button"
          onClick={() => setMenuOpen(false)}
        >
          <BsXLg className="w-full h-full" />
        </button>
        <ul id="navigation-menu" className={`${!menuOpen ? 'hidden ': ''}md:flex space-y-2 md:space-y-0 z-20 w-full md:w-auto top-full md:top-auto left-0 md:left-auto px-5 pt-4 pb-5 md:p-0 bg-seashell-100 drop-shadow-sm md:drop-shadow-none md:bg-none items-center gap-3 lg:gap-4 absolute md:relative`}>
          <li><Link to="/" className="block text-wood-700 font-semibold hover:text-burgundy-500 p-1 lg:p-2 transition-colors">Home</Link></li>
          <li><Link to="/about" className="block text-wood-700 font-semibold hover:text-burgundy-500 p-1 lg:p-2 transition-colors">About</Link></li>
          <li><Link to="/menu" className="block text-wood-700 font-semibold hover:text-burgundy-500 p-1 lg:p-2 transition-colors">Our Menu</Link></li>
          <li><Link to="/reviews" className="block text-wood-700 font-semibold hover:text-burgundy-500 p-1 lg:p-2 transition-colors">Reviews</Link></li>
          <li>
            <Link to="/order" className="inline-block bg-burgundy-500 hover:bg-burgundy-600 text-white font-semibold px-5 py-2 rounded-full transition-colors duration-300">Order Now</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default header