
import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { Cpu, Code, Smartphone, Server, Settings, CircuitBoard, Database, RefreshCw } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, index, imageSrc }: { 
  icon: any, 
  title: string, 
  description: string, 
  index: number,
  imageSrc: string
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <AnimatedSection delay={index * 100} className={`stagger-reveal-delay-${index + 1}`}>
      <div
        className="relative h-full p-8 rounded-xl glass-card transition-all duration-300 group overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10 group-hover:opacity-15 transition-opacity duration-300">
          <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
        </div>
        
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
        
        <div className="relative z-10">
          <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
            <Icon size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-primary dark:group-hover:text-primary dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      </div>
    </AnimatedSection>
  );
};

const services = [
  {
    icon: CircuitBoard,
    title: "Embedded Systems",
    description: "Custom hardware and software solutions for specialized computing tasks with efficient resource utilization.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Database,
    title: "Machine Learning Models",
    description: "Develop and deploy intelligent algorithms that analyze data patterns and make predictions with remarkable accuracy.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Beautiful, responsive websites and web applications built with modern frameworks and best practices.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences across devices.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: RefreshCw,
    title: "Drone Development",
    description: "Custom drone solutions for various industrial and commercial applications with advanced control systems.",
    image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Server,
    title: "PCB Designing",
    description: "Expert PCB design services from concept to production, ensuring optimal performance and reliability.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Settings,
    title: "IoT Product Design",
    description: "End-to-end IoT solutions that connect devices, collect data, and enable smart decision-making.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Cpu,
    title: "Firmware Development",
    description: "Reliable and efficient firmware that powers your hardware devices with precision and stability.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto container-padding">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Our Services</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-balance">
            We offer a comprehensive range of engineering and software development services to help you bring your ideas to life.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
              imageSrc={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
