import { Control } from "react-hook-form";
import { RegisterInput } from "./registerSchema";

export interface RegisterControlProps {
  error: boolean;
  helperText: string | undefined;
  control: Control<RegisterInput, any>;
}
