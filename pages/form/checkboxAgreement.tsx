import { Box, FormControlLabel, Checkbox, FormControl } from "@mui/material";
import React, { ChangeEvent, useState } from "react";

export const CheckboxAgreement = () => {
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
          <Checkbox checked={checked[0]} onChange={(e) => handleChange(0, e)} />
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
    <FormControl component="fieldset" sx={{ m: 1 }}>
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
      {children}
    </FormControl>
  );
};
