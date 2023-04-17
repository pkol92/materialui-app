import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Button } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Login() {
  return (
    <main className="pb-12 pt-3">
      <Link href="/">
        <Button startIcon={<KeyboardBackspaceIcon />}>Back</Button>
      </Link>
      <Login />
    </main>
  );
}
