import { PasswordInput } from "@/components/passwordInput";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "next/link";
import React from "react";
import LockIcon from "@mui/icons-material/Lock";

export const LoginForm = () => {
  return (
    <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { width: "100%" },
            "& > div": {
              display: "flex",
              paddingBottom: 1,
              width: "100%",
            },
            maxWidth: "500px",
            margin: "auto",
          }}
        >
          <TextField required id="mail" label="mail" type="mail" />

          <PasswordInput />

          <div className="flex items-center justify-between w-full">
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Remember me" />
            </FormGroup>

            <Link
              href="/register"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Register now
            </Link>
          </div>

          <div>
            <Button
              startIcon={<LockIcon />}
              className=" justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-full"
            >
              Sign in
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
};
