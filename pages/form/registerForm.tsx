import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  IconButton,
  Input,
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
import SendIcon from "@mui/icons-material/Send";

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
      autoComplete="off"
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
        <Box sx={{ m: 1, width: "100%" }}>
          <label
            htmlFor="photo"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Photo
          </label>
          <div className="mt-2 flex items-center gap-x-3">
            <svg
              className="h-12 w-12 text-gray-300"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                clip-rule="evenodd"
              />
            </svg>
            <div className="flex align-middle">
              <label
                htmlFor="photo-file"
                className="w-full rounded-md  px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 cursor-pointer"
              >
                Pick up your best photo!
              </label>
              <input
                id="photo-file"
                type="file"
                accept=".jpg, .jpeg, .png"
                style={{ visibility: "hidden" }}
              ></input>
            </div>
          </div>
        </Box>
      </div>
      <div>
        <CheckboxAgreement />
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6 border-t border-gray-900/10 pt-6">
        <Button
          variant="text"
          color="warning"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </Button>
        <Button
          size="medium"
          color="error"
          variant="contained"
          endIcon={<SendIcon />}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </Button>
      </div>
    </Box>
  );
};
