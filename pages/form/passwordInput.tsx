import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import React, { useState, MouseEvent, ChangeEvent } from "react";

export const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () =>
    setShowPassword((showPassword) => !showPassword);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return (
    <FormControl variant="outlined" fullWidth sx={{ m: 1 }}>
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
      />
    </FormControl>
  );
};
