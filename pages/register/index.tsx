import Image from "next/image";
import { Inter } from "next/font/google";
import { RegisterForm } from "./registerForm";
import Link from "next/link";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Button } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Form() {
  return (
    <main className="pb-12 pt-3">
      <Link href="/">
        <Button startIcon={<KeyboardBackspaceIcon />}>Back</Button>
      </Link>
      <h1 className="text-4xl font-semibold leading-2 text-gray-900 pt-5 pb-12 text-center">
        Register form
      </h1>
      <RegisterForm />
    </main>
  );
}
