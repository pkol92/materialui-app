import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Image from "next/image";
import { countries, CountryType } from "../mocks/countries";

export default function CountrySelect() {
  const src = (option: CountryType) => {
    return `https://flagcdn.com/w20/${option.code.toLowerCase()}.png`;
  };
  return (
    <Autocomplete
      id="country-select-demo"
      options={countries}
      fullWidth
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <Image
            loader={() => src(option)}
            width={20}
            height={10}
            src={src(option)}
            alt="country"
            unoptimized={true}
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
  );
}
