import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const { push } = useRouter();
  // useEffect(() => {
  //   push("/login");
  // }, [push]);
  return (
    <main>
      <Navbar />
    </main>
  );
}
