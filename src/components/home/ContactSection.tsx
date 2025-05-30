import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Send, Rocket, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { emailConfig, RATE_LIMIT_MS } from '../../config';

interface FormState {
  name: string;
  email: string;
  inquiryType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const validateEmail = (email: string): boolean => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
};

const validateForm = (formState: FormState): FormErrors => {
  const errors: FormErrors = {};
  
  if (formState.name.length < 2) {
    errors.name = 'Name must be at least 2 characters long';
  }
  
  if (!validateEmail(formState.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  if (formState.message.length < 10) {
    errors.message = 'Message must be at least 10 characters long';
  }
  
  return errors;
};

const ContactSection: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    inquiryType: 'demo',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [lastSubmissionTime, setLastSubmissionTime] = useState<number>(0);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    // Clear errors when user starts typing
    setFormErrors(prev => ({ ...prev, [name]: undefined }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    // Validate form
    const errors = validateForm(formState);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Check rate limiting
    const now = Date.now();
    if (now - lastSubmissionTime < RATE_LIMIT_MS) {
      setError(`Please wait ${Math.ceil((RATE_LIMIT_MS - (now - lastSubmissionTime)) / 1000)} seconds before submitting again`);
      return;
    }

    setIsSubmitting(true);
    
    try {
      if (!form.current) throw new Error('Form not found');
      
      await emailjs.sendForm(
        emailConfig.serviceId,
        emailConfig.templateId,
        form.current,
        emailConfig.publicKey
      );

      setIsSubmitted(true);
      setLastSubmissionTime(Date.now());
      setFormState({
        name: '',
        email: '',
        inquiryType: 'demo',
        message: ''
      });
    } catch (error) {
      console.error('Form submission failed:', error);
      setError('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  }, [formState, lastSubmissionTime]);

  const handleRequestFeasibilityStudy = useCallback(() => {
    setFormState(prev => ({...prev, inquiryType: 'integration'}));
    document.getElementById('inquiryType')?.scrollIntoView({behavior: 'smooth'});
  }, []);

  const handleScheduleConsultation = useCallback(() => {
    setFormState(prev => ({...prev, inquiryType: 'technical'}));
    document.getElementById('inquiryType')?.scrollIntoView({behavior: 'smooth'});
  }, []);

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-dark-900 to-dark-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-gradient-to-br from-primary-500/20 via-dark-800 to-secondary-500/20 rounded-2xl p-8 md:p-12 border border-white/10 shadow-xl relative overflow-hidden">
          {/* Background blobs */}
          <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-secondary-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
                Let's Build the Future of EVs Together
              </h2>
              <p className="text-white/70 text-lg">
                Whether you're interested in a demonstration, exploring partnership opportunities, or just want to learn more, we'd love to hear from you.
              </p>
              <div className="mt-6 flex justify-center">
                <a href="https://www.linkedin.com/company/loop-charging-module-lcm/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="LCM LinkedIn">
                  <Linkedin size={28} />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div className="bg-dark-800/80 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="bg-primary-500/20 rounded-full p-4 inline-flex mb-6">
                      <Rocket className="h-8 w-8 text-primary-400" />
                    </div>
                    <h3 className="font-display font-semibold text-2xl text-white mb-4">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-white/70 mb-6">
                      Thank you for reaching out. Our team will get back to you as soon as possible.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full font-medium transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form ref={form} onSubmit={handleSubmit} noValidate>
                    <h3 className="font-display font-semibold text-xl text-white mb-6">
                      Contact Us
                    </h3>
                    
                    {error && (
                      <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6 text-red-400">
                        {error}
                      </div>
                    )}
                    
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-white/80 mb-2 text-sm">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          className={`w-full bg-dark-700 border ${
                            formErrors.name ? 'border-red-500' : 'border-white/10'
                          } rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50`}
                          placeholder="Your name"
                        />
                        {formErrors.name && (
                          <p className="mt-1 text-sm text-red-400">{formErrors.name}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-white/80 mb-2 text-sm">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          className={`w-full bg-dark-700 border ${
                            formErrors.email ? 'border-red-500' : 'border-white/10'
                          } rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50`}
                          placeholder="your.email@example.com"
                        />
                        {formErrors.email && (
                          <p className="mt-1 text-sm text-red-400">{formErrors.email}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="inquiryType" className="block text-white/80 mb-2 text-sm">
                          Type of Inquiry
                        </label>
                        <select
                          id="inquiryType"
                          name="inquiryType"
                          value={formState.inquiryType}
                          onChange={handleChange}
                          className="w-full bg-dark-700 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                        >
                          <option value="demo">Book a Demo</option>
                          <option value="partnership">Partnership Opportunity</option>
                          <option value="integration">Integration Feasibility Study</option>
                          <option value="technical">Technical Question</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-white/80 mb-2 text-sm">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          rows={4}
                          className={`w-full bg-dark-700 border ${
                            formErrors.message ? 'border-red-500' : 'border-white/10'
                          } rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50`}
                          placeholder="Tell us how we can help you..."
                        />
                        {formErrors.message && (
                          <p className="mt-1 text-sm text-red-400">{formErrors.message}</p>
                        )}
                      </div>
                      
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`w-full bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center ${
                            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                          }`}
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-4 w-4" /> Send Message
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
              
              {/* CTA Options */}
              <div className="space-y-6">
                <div className="bg-dark-800/80 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="font-display font-semibold text-xl text-white mb-4">
                    Request an Integration Feasibility Study
                  </h3>
                  <p className="text-white/70 mb-6">
                    Our engineering team will evaluate how LCM can be integrated into your specific vehicle models, providing a comprehensive analysis and implementation roadmap.
                  </p>
                  <a 
                    href="#contact"
                    className="inline-block w-full bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3 rounded-lg font-medium transition-colors text-center"
                    onClick={handleRequestFeasibilityStudy}
                  >
                    Request Feasibility Study
                  </a>
                </div>
                
                <div className="bg-dark-800/80 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="font-display font-semibold text-xl text-white mb-4">
                    Talk to Our Engineers
                  </h3>
                  <p className="text-white/70 mb-6">
                    Have technical questions about LCM? Schedule a consultation with our engineering team to discuss specifications, integration requirements, and performance data.
                  </p>
                  <a 
                    href="#contact"
                    className="inline-block w-full bg-dark-700 hover:bg-dark-600 text-white border border-white/20 px-6 py-3 rounded-lg font-medium transition-colors text-center"
                    onClick={handleScheduleConsultation}
                  >
                    Schedule Technical Consultation
                  </a>
                </div>
                
                <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center mb-4">
                    <div className="bg-white/10 p-2 rounded-lg mr-3">
                      <Rocket className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-display font-medium text-white">
                      Fast-Track Demo
                    </h3>
                  </div>
                  <p className="text-white/70 text-sm">
                    For qualified OEMs, we offer expedited demonstrations of our working prototypes at your facility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
