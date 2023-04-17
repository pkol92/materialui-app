import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React, { useState, MouseEvent, ChangeEvent } from "react";
import { gender } from "../mocks/gender";
import { CheckboxAgreement } from "./checkboxAgreement";
import CountrySelect from "./countrySelect";
import { PasswordInput } from "./passwordInput";

export const RegisterForm = () => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "100%" },
        "& > div": { display: "flex" },
        maxWidth: "500px",
        margin: "auto",
      }}
    >
      <div>
        <TextField required id="name" label="name" />
        <TextField required id="mail" label="mail" type="mail" />
      </div>
      <div>
        <PasswordInput />
      </div>
      <CountrySelect />
      <div>
        <TextField id="select-sex" select label="sex" defaultValue="female">
          {gender.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          required
          id="age"
          label="age"
          type="number"
          placeholder="18"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            inputProps: { min: 18, max: 99 },
          }}
        />
      </div>
      <div>
        <TextField
          label="weight"
          id="weight"
          placeholder="60"
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            inputProps: {
              min: 1,
            },
          }}
        />
        <TextField
          label="height"
          id="height"
          type="number"
          placeholder="170"
          InputProps={{
            endAdornment: <InputAdornment position="end">cm</InputAdornment>,
            inputProps: {
              min: 1,
            },
          }}
        />
      </div>
      <div>
        <TextField
          id="multiline"
          label="About you"
          multiline
          rows={4}
          placeholder="Write something about you!"
        />
      </div>
      <div>
        <CheckboxAgreement />
      </div>
    </Box>
  );
};
