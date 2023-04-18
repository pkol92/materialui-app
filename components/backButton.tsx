import React from "react";
import Link from "next/link";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Button } from "@mui/material";

export const BackButton = () => {
  return (
    <Link href="/" className="m-5">
      <Button startIcon={<KeyboardBackspaceIcon />}>Back</Button>
    </Link>
  );
};
