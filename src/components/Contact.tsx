import AnimatedSection from './AnimatedSection';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

const ContactCard = ({ icon: Icon, title, value }: { icon: any, title: string, value: string | React.ReactNode }) => (
  <AnimatedSection className="flex items-start p-5 glass-card rounded-xl">
    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4 text-primary flex-shrink-0">
      <Icon size={18} />
    </div>
    <div>
      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{title}</h3>
      <div className="text-gray-800 dark:text-gray-200">{value}</div>
    </div>
  </AnimatedSection>
);

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data: any) => {
    try {
      // This is just a simulation - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success("Message sent successfully! We'll get back to you soon.");
      reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto container-padding">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-balance">
            Have a project in mind or need consultation? Reach out to us and our team will get back to you as soon as possible.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <AnimatedSection delay={100} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
              <h3 className="text-xl font-semibold mb-6 dark:text-white">Send us a message</h3>
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Name
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 dark:bg-gray-700 dark:text-white"
                      placeholder="John Doe"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message as string}</p>}
                  </div>
                  <div>
                    <Label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 dark:bg-gray-700 dark:text-white"
                      placeholder="john@example.com"
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message as string}</p>}
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </Label>
                  <Input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 dark:bg-gray-700 dark:text-white"
                    placeholder="Project Inquiry"
                    {...register("subject", { required: "Subject is required" })}
                  />
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message as string}</p>}
                </div>
                <div>
                  <Label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </Label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none dark:bg-gray-700 dark:text-white dark:border-gray-600"
                    placeholder="Tell us about your project or inquiry..."
                    {...register("message", { required: "Message is required" })}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message as string}</p>}
                </div>
                <div>
                  <Button
                    type="submit"
                    className="w-full px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </AnimatedSection>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <AnimatedSection delay={200} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
              <h3 className="text-xl font-semibold mb-6 dark:text-white">Contact Information</h3>
              <div className="space-y-4">
                <ContactCard 
                  icon={MapPin} 
                  title="Office Location" 
                  value="Lucknow, Uttar Pradesh, India" 
                />
                <ContactCard 
                  icon={Mail} 
                  title="Email Address" 
                  value={<a href="mailto:mayank@paripathsolutions.com" className="text-primary hover:underline">mayank@paripathsolutions.com</a>} 
                />
                <ContactCard 
                  icon={Phone} 
                  title="Phone Number" 
                  value={<a href="tel:+918177063899" className="text-primary hover:underline">+91 8177 063 899</a>} 
                />
                <ContactCard 
                  icon={Clock} 
                  title="Business Hours" 
                  value="Monday - Friday: 9:00 AM - 6:00 PM" 
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
