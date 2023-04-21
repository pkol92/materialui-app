import { object, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const registerSchema = z
  .object({
    name: z
      .string()
      .nonempty("Name is required")
      .max(32, "Name must be less than 100 characters"),
    mail: z.string().nonempty("Email is required").email("Email is invalid"),
    password: z
      .string()
      .nonempty("Password is required")
      .min(8, "Password must be more than 8 characters")
      .max(32, "Password must be less than 32 characters"),
    passwordConfirm: z.string().nonempty("Please confirm your password"),
    terms: z.literal(true, {
      invalid_type_error: "Accept Terms is required",
    }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    path: ["passwordConfirm"],
    message: "Passwords do not match",
  });
