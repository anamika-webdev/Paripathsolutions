
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const handleScrollDown = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white via-transparent to-white"></div>
      </div>
      
      {/* Floating elements */}
      <div className="hidden lg:block absolute -top-10 right-36 w-64 h-64 bg-paripath opacity-5 rounded-full filter blur-3xl animate-float"></div>
      <div className="hidden lg:block absolute top-1/3 -left-24 w-80 h-80 bg-blue-200 opacity-10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto container-padding">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="inline-block px-4 py-1.5 bg-paripath/10 rounded-full text-paripath text-sm font-medium mb-6 animate-fade-in">
              Engineering Excellence & Innovation
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight animate-fade-in">
              Innovative Engineering <br className="hidden md:block" />
              <span className="text-paripath">Solutions</span> for Tomorrow
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 text-balance animate-fade-in">
              From embedded systems to drone technology, Paripath Solutions delivers cutting-edge engineering and software development services tailored to transform your ideas into reality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <a 
                href="#services" 
                className="btn-hover-effect px-8 py-3 bg-paripath text-white rounded-lg font-medium text-center transform transition hover:-translate-y-1"
              >
                Explore Our Services
              </a>
              <a 
                href="#contact" 
                className="btn-hover-effect px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium text-center transform transition hover:-translate-y-1"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce" onClick={handleScrollDown}>
        <ChevronDown className="text-paripath" size={30} />
      </div>
    </section>
  );
};

export default Hero;
