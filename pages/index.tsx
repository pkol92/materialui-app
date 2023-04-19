import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/navbar";
import { EnhancedTable } from "@/components/table";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="m-auto pt-20 pb-10 max-w-screen-md">
        <EnhancedTable />
      </div>
    </main>
  );
}
