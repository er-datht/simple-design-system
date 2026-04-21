import { z } from "zod";

// FormNewsletter schema
export const newsletterSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email({ message: "Please enter a valid email address" }),
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;

// FormForgotPassword schema
export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email({ message: "Please enter a valid email address" }),
});

export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

// FormLogIn schema
export const logInSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email({ message: "Please enter a valid email address" }),
  password: z.string().min(1, "Password is required"),
});

export type LogInFormData = z.infer<typeof logInSchema>;

// FormContact schema
export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  surname: z.string().min(1, "Surname is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .email({ message: "Please enter a valid email address" }),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters long")
    .max(500, "Message must not exceed 500 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

// FormRegister schema
export const registerSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

export type RegisterFormData = z.infer<typeof registerSchema>;

// FormShipping schema
export const shippingSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  location: z.string().min(1, "Please select a location"),
  deliveryNote: z.string().optional(),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

export type ShippingFormData = z.infer<typeof shippingSchema>;
