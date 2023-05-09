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
import React, { useState, MouseEvent, ChangeEvent, useEffect } from "react";
import { gender } from "../../mocks/gender";
import { CheckboxAgreement } from "./checkboxAgreement";
import { CountrySelect } from "./countrySelect";
import { PasswordInput } from "../../components/passwordInput";
import SendIcon from "@mui/icons-material/Send";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { literal, object, string, TypeOf } from "zod";
import { RegisterInput, registerSchema } from "./registerSchema";

export const RegisterForm = () => {
  const {
    formState: { errors, isSubmitSuccessful },
    reset,
    handleSubmit,
    register,
    setValue,
    trigger,
    getValues,
    watch,
    control,
  } = useForm<RegisterInput>({ resolver: zodResolver(registerSchema) });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmitHandler: SubmitHandler<RegisterInput> = (values) => {
    console.log(values);
  };

  React.useEffect(() => {
    const subscription = watch((value, { name, type }) =>
      console.log(value, name, type)
    );
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": {
          m: 1,
          width: "100%",
          backgroundColor: "transparent",
        },
        "& .MuiFormHelperText-root": {
          background: "rgb(244, 244, 244)",
          m: 0,
        },
        "& .MuiInputBase-root": {
          background: "white",
        },
        "& > div": { display: "flex" },
        maxWidth: "500px",
        margin: "auto",
      }}
      autoComplete="off"
      onSubmit={handleSubmit(onSubmitHandler)}
      noValidate
    >
      <div>
        <TextField
          required
          id="name"
          label="name"
          error={!!errors["name"]}
          helperText={errors["name"] ? errors["name"].message : ""}
          {...register("name")}
        />
        <TextField
          required
          id="mail"
          label="mail"
          type="mail"
          error={!!errors["mail"]}
          helperText={errors["mail"] ? errors["mail"].message : ""}
          {...register("mail")}
        />
      </div>
      <Box sx={{ m: 1 }}>
        <PasswordInput
          error={!!errors["password"]}
          helperText={errors["password"] ? errors["password"].message : ""}
          register={(password) => register(password)}
        />
      </Box>
      <CountrySelect
        error={!!errors["country"]}
        helperText={errors["country"] ? errors["country"].message : ""}
        control={control}
      />
      <div>
        <TextField
          id="select-gender"
          select
          label="gender"
          defaultValue="female"
          error={!!errors["gender"]}
          helperText={errors["gender"] ? errors["gender"].message : ""}
          {...register("gender")}
        >
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
          error={!!errors["age"]}
          helperText={errors["age"] ? errors["age"].message : ""}
          {...register("age")}
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
          error={!!errors["weight"]}
          helperText={errors["weight"] ? errors["weight"].message : ""}
          {...register("weight")}
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
          error={!!errors["height"]}
          helperText={errors["height"] ? errors["height"].message : ""}
          {...register("height")}
        />
      </div>
      <div>
        <TextField
          id="description"
          label="About you"
          multiline
          rows={4}
          placeholder="Write something about you!"
          error={!!errors["description"]}
          helperText={
            errors["description"] ? errors["description"].message : ""
          }
          {...register("description")}
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
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                clipRule="evenodd"
              />
            </svg>
            <div className="flex align-middle">
              <label
                htmlFor="photo-file"
                className="w-full rounded-md  px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 cursor-pointer bg-white"
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
        <CheckboxAgreement
          error={!!errors["terms"]}
          helperText={errors["terms"] ? errors["terms"].message : ""}
          control={control}
        />
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
          type="submit"
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
