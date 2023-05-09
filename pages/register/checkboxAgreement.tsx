import { Box, FormControlLabel, Checkbox, FormControl } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import { Controller, Control } from "react-hook-form";
import { FC } from "react";
import { FormHelperText } from "@mui/material";
import { RegisterControlProps } from "./registerFormTypes";

export const CheckboxAgreement: FC<RegisterControlProps> = ({
  error,
  helperText,
  control,
}) => {
  return (
    <Controller
      name="terms"
      control={control}
      render={({ field: { onChange, value } }) => (
        <>
          <FormControlLabel
            id="terms"
            control={<Checkbox checked={value ?? false} onChange={onChange} />}
            label="I have read and accept the regulations"
          />
          <FormHelperText error={error}>{helperText}</FormHelperText>
        </>
      )}
    />
  );
};
