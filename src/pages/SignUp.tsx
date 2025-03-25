
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthForm from '@/components/Auth/AuthForm';
import AnimatedSection from '@/components/AnimatedSection';

const SignUp = () => {
  useEffect(() => {
    document.title = "Sign Up - Paripath Solutions";
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 md:py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <AnimatedSection className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800 dark:text-white">Create Your Account</h1>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Join Paripath Solutions and get access to our services, project updates, and exclusive content.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <AuthForm mode="signup" />
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SignUp;
