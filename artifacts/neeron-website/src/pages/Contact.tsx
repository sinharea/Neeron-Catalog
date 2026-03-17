import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useLocation } from "wouter";
import { useContactForm } from "@/hooks/use-neeron";

// Schema for frontend validation
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  productInterest: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [location, navigate] = useLocation();
  const searchParams = new URLSearchParams(window.location.search);
  const initialInterest = searchParams.get("interest") || "";

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      productInterest: initialInterest,
    }
  });

  const mutation = useContactForm();

  const onSubmit = (data: ContactFormValues) => {
    mutation.mutate({ data }, {
      onSuccess: () => {
        form.reset();
      }
    });
  };

  return (
    <div className="pt-28 pb-24 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            Have a question about our products or need bulk orders? We're here to help.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Info */}
          <motion.div 
            className="lg:col-span-1 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Our Address</h4>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      SH-16/57 D-9KA-9A<br />
                      Jai Durga Nagar Colony<br />
                      Kadipur, Shivpur<br />
                      Varanasi - 221003
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <p className="text-muted-foreground text-sm">+91 9264975493</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Business Hours</h4>
                    <p className="text-muted-foreground text-sm">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-primary/5 border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-8">Send Us a Message</h3>
              
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Your Name</label>
                    <input 
                      {...form.register("name")}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-border focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                      placeholder="John Doe"
                    />
                    {form.formState.errors.name && (
                      <p className="text-destructive text-xs mt-1">{form.formState.errors.name.message}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Email Address</label>
                    <input 
                      {...form.register("email")}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-border focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                      placeholder="john@example.com"
                    />
                    {form.formState.errors.email && (
                      <p className="text-destructive text-xs mt-1">{form.formState.errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Phone Number (Optional)</label>
                    <input 
                      {...form.register("phone")}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-border focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                      placeholder="+91 9876543210"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Product of Interest</label>
                    <input 
                      {...form.register("productInterest")}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-border focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                      placeholder="e.g. Floor Cleaner"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Your Message</label>
                  <textarea 
                    {...form.register("message")}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-border focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none resize-none"
                    placeholder="How can we help you?"
                  />
                  {form.formState.errors.message && (
                    <p className="text-destructive text-xs mt-1">{form.formState.errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={mutation.isPending}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg bg-gradient-neeron text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none transition-all duration-300"
                >
                  {mutation.isPending ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
