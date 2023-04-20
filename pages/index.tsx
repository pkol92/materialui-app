import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { EnhancedTable } from "@/components/table";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="m-auto pt-20 pb-10 pr-4 ps-4 max-w-screen-md">
        <EnhancedTable />
      </div>
    </main>
  );
}
