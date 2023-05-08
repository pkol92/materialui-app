import { Box, FormControlLabel, Checkbox, FormControl } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import { Controller, Control } from "react-hook-form";
import { FC } from "react";
import { FormHelperText } from "@mui/material";

interface TermsSelectProps {
  error: boolean;
  helperText: string | undefined;
  control: Control<
    {
      name: string;
      mail: string;
      password: string;
      country: string;
      gender: string;
      age: string;
      weight: string;
      height: string;
      terms: boolean;
      description?: string | undefined;
    },
    any
  >;
}

export const CheckboxAgreement: FC<TermsSelectProps> = ({
  error,
  helperText,
  control,
}) => {
  const [checked, setChecked] = useState([true, false, false]);

  const handleChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setChecked((prevChecked) => {
      const newChecked = [...prevChecked];
      newChecked[index] = event.target.checked;
      return newChecked;
    });
  };

  const handleChangeAll = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.checked;

    setChecked([newValue, newValue, newValue]);
  };

  const calculateChecked = (checked: boolean[]) => {
    return checked[0] && checked[1] && checked[2];
  };

  const calculateIndeterminate = (checked: boolean[]) => {
    return (
      checked[0] !== checked[1] ||
      checked[0] !== checked[2] ||
      checked[1] !== checked[2]
    );
  };

  const children = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      <FormControlLabel
        label="I have read and accept the regulations"
        control={
          <Checkbox
            required
            checked={checked[0]}
            onChange={(e) => {
              handleChange(0, e);
            }}
          />
        }
      />
      <FormControlLabel
        label="Consent to the processing of personal data"
        control={
          <Checkbox checked={checked[1]} onChange={(e) => handleChange(1, e)} />
        }
      />
      <FormControlLabel
        label="Consent to receive the newsletter"
        control={
          <Checkbox checked={checked[2]} onChange={(e) => handleChange(2, e)} />
        }
      />
    </Box>
  );

  return (
    <Controller
      name="terms"
      control={control}
      render={({ field }) => (
        <FormControl component="fieldset" sx={{ m: 1 }} id="terms">
          <FormControlLabel
            label="Consents"
            control={
              <Checkbox
                checked={calculateChecked(checked)}
                indeterminate={calculateIndeterminate(checked)}
                onChange={handleChangeAll}
              />
            }
          />
          <FormHelperText error={error}>{helperText}</FormHelperText>
          {children}
        </FormControl>
      )}
    />
  );
};
