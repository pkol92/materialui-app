import { object, z, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const loginSchema = z.object({
  mail: z.string().nonempty("Email is required").email("Email is invalid"),
  password: z
    .string()
    .nonempty("Password is required")
    .min(8, "Password must be more than 8 characters"),
});

export type LoginInput = TypeOf<typeof loginSchema>;
