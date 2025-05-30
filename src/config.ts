// src/config.ts
interface EmailConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

const validateConfig = (config: EmailConfig): EmailConfig => {
  if (!config.serviceId || !config.templateId || !config.publicKey) {
    throw new Error('Missing required EmailJS configuration. Please check your environment variables.');
  }
  return config;
};

export const emailConfig = validateConfig({
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
});

export const RATE_LIMIT_MS = 60000; // 1 minute between submissions
  