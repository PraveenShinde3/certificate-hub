import { z } from "zod";

export const CertificateSubmitSchema = z.object({
  certificate_name: z
    .string()
    .min(5, { message: "Please enter a valid certificate name" }),
  company: z.string().min(5, { message: "Please enter a valid company name" }),
  level: z.string(),
  email: z.string().email({ message: "Please enter a valid email" }).min(5),
  site_url: z.string().url({ message: "Please enter a valid url" }).min(5),
});
