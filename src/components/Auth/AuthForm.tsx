
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';

interface AuthFormProps {
  mode: 'signin' | 'signup';
}

interface FormValues {
  email: string;
  password: string;
  confirmPassword?: string;
  name?: string;
}

const AuthForm = ({ mode }: AuthFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormValues>();
  
  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    
    try {
      // This is a mock authentication process
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demo purposes only - In production, connect this to your auth provider
      if (mode === 'signin') {
        toast.success("Signed in successfully!");
      } else {
        toast.success("Account created successfully!");
      }
      
      navigate('/'); // Redirect to home page
    } catch (error) {
      toast.error("Authentication failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="glass-card p-8 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
        {mode === 'signin' ? 'Sign In' : 'Create an Account'}
      </h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {mode === 'signup' && (
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">Full Name</Label>
            <Input
              id="name"
              type="text"
              {...register('name', { required: mode === 'signup' })}
              placeholder="John Doe"
              className="w-full bg-white dark:bg-gray-800 dark:text-white"
            />
            {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
          </div>
        )}
        
        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email</Label>
          <Input
            id="email"
            type="email"
            {...register('email', { 
              required: true,
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
            })}
            placeholder="email@example.com"
            className="w-full bg-white dark:bg-gray-800 dark:text-white"
          />
          {errors.email && <p className="text-red-500 text-sm">Valid email is required</p>}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="password" className="text-gray-700 dark:text-gray-300">Password</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              {...register('password', { 
                required: true,
                minLength: mode === 'signup' ? 8 : undefined
              })}
              placeholder="••••••••"
              className="w-full pr-10 bg-white dark:bg-gray-800 dark:text-white"
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          {errors.password && <p className="text-red-500 text-sm">
            {mode === 'signup' ? 'Password must be at least 8 characters' : 'Password is required'}
          </p>}
        </div>
        
        {mode === 'signup' && (
          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-gray-700 dark:text-gray-300">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type={showPassword ? "text" : "password"}
              {...register('confirmPassword', { 
                required: mode === 'signup',
                validate: value => value === watch('password') || "Passwords do not match"
              })}
              placeholder="••••••••"
              className="w-full bg-white dark:bg-gray-800 dark:text-white"
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
          </div>
        )}
        
        <Button 
          type="submit" 
          className="w-full bg-paripath hover:bg-paripath-dark dark:bg-paripath-dark dark:hover:bg-paripath flex items-center justify-center gap-2"
          disabled={isLoading}
        >
          {isLoading ? 'Processing...' : (mode === 'signin' ? 'Sign In' : 'Create Account')}
          {!isLoading && <ArrowRight size={16} />}
        </Button>
        
        <div className="text-center mt-4">
          <p className="text-gray-600 dark:text-gray-400">
            {mode === 'signin' ? "Don't have an account?" : "Already have an account?"}
            <a 
              href={mode === 'signin' ? '/sign-up' : '/sign-in'} 
              className="text-paripath hover:underline ml-1"
            >
              {mode === 'signin' ? 'Sign Up' : 'Sign In'}
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
