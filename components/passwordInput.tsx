import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
} from "@mui/material";
import React, { useState, MouseEvent, ChangeEvent, FC } from "react";
import {
  UseFormRegister,
  UseFormRegisterReturn,
  RegisterOptions,
} from "react-hook-form";

interface PasswordInput {
  error: boolean;
  helperText: string | undefined;
  register: UseFormRegister<{ password: string }>;
}

export const PasswordInput: FC<PasswordInput> = ({
  error,
  helperText,
  register,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () =>
    setShowPassword((showPassword) => !showPassword);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel htmlFor="password">Password</InputLabel>
      <OutlinedInput
        id="password"
        type={showPassword ? "text" : "password"}
        endAdornment={
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            edge="end"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        }
        label="Password"
        {...register("password")}
      />
      <FormHelperText error={error}>{error ? helperText : ""}</FormHelperText>
    </FormControl>
  );
};
