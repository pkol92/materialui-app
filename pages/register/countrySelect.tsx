import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Image from "next/image";
import { countries, CountryType } from "../../mocks/countries";
import { Controller, Control } from "react-hook-form";
import { FC } from "react";
import { FormHelperText } from "@mui/material";

interface CountrySelectProps {
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

export const CountrySelect: FC<CountrySelectProps> = ({
  error,
  helperText,
  control,
}) => {
  const src = (option: CountryType) => {
    return `https://flagcdn.com/w20/${option.code.toLowerCase()}.png`;
  };

  return (
    <Controller
      name="country"
      control={control}
      render={({ field }) => (
        <>
          <Autocomplete
            id="country-select-demo"
            options={countries}
            fullWidth
            autoHighlight
            onSelect={(e) => field.onChange(e.target.value)}
            getOptionLabel={(option) => option.label}
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                <Image
                  loader={() => src(option)}
                  width={0}
                  height={0}
                  src={src(option)}
                  alt="country"
                  unoptimized={true}
                  sizes="20px"
                  style={{ width: "20px", height: "auto" }}
                />
                {option.label} ({option.code}) +{option.phone}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Choose a country"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password",
                }}
              />
            )}
          />

          <FormHelperText error={error}>{helperText}</FormHelperText>
        </>
      )}
    />
  );
};
