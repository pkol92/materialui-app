import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { push } = useRouter();
  useEffect(() => {
    push("/login");
  }, [push]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"></div>
    </main>
  );
}
