import { object, z, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const registerSchema = z.object({
  name: z
    .string()
    .nonempty("Name is required")
    .max(50, "Name must be less than 50 characters"),
  mail: z.string().nonempty("Email is required").email("Email is invalid"),
  password: z
    .string()
    .nonempty("Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
  country: z.string().nonempty("Country is required"),
  gender: z.string().nonempty("Gender is required"),
  age: z
    .string()
    .nonempty("Age is required")
    .refine((val) => +val >= 18, { message: "Must be more than 18" }),
  weight: z.string().nonempty("Weight is required"),
  height: z.string().nonempty("Height is required"),
  description: z.string().optional(),
  terms: z.boolean({
    required_error: "Accept of terms is required",
  }),
});

export type RegisterInput = TypeOf<typeof registerSchema>;
