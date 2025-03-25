
import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, LogIn, UserPlus } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white dark:bg-gray-900 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-md shadow-sm' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto container-padding">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center">
            <span className="text-2xl font-bold text-paripath-dark dark:text-white">
              Paripath<span className="text-paripath dark:text-paripath-light">Solutions</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 dark:text-gray-300 hover:text-paripath dark:hover:text-white transition-colors duration-300 text-sm font-medium tracking-wide px-2"
              >
                {link.name}
              </a>
            ))}
            
            {/* Theme Toggle */}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme}
              className="ml-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
            
            {/* Auth Buttons */}
            <Link to="/sign-in">
              <Button variant="ghost" className="flex items-center gap-1.5 text-gray-700 dark:text-gray-300">
                <LogIn size={16} /> Sign In
              </Button>
            </Link>
            
            <Link to="/sign-up">
              <Button className="bg-paripath text-white flex items-center gap-1.5 hover:bg-paripath-dark dark:bg-paripath-light dark:text-gray-900 dark:hover:bg-paripath-light/90">
                <UserPlus size={16} /> Sign Up
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Theme Toggle for Mobile */}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme}
              className="text-gray-700 dark:text-gray-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
            
            <button
              className="text-gray-700 dark:text-gray-300 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden fixed inset-0 bg-white dark:bg-gray-900 z-40 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } pt-24`}
        >
          <nav className="flex flex-col items-center space-y-6 p-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 dark:text-gray-300 hover:text-paripath dark:hover:text-white transition-colors duration-300 text-lg font-medium"
                onClick={toggleMenu}
              >
                {link.name}
              </a>
            ))}
            
            <div className="w-full pt-4 border-t border-gray-200 dark:border-gray-700">
              <Link to="/sign-in" onClick={toggleMenu}>
                <Button variant="outline" className="w-full justify-center mb-3 flex items-center gap-2">
                  <LogIn size={18} /> Sign In
                </Button>
              </Link>
              
              <Link to="/sign-up" onClick={toggleMenu}>
                <Button className="w-full justify-center bg-paripath text-white flex items-center gap-2 dark:bg-paripath-light dark:text-gray-900">
                  <UserPlus size={18} /> Sign Up
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
