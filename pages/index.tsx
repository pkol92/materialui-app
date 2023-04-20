import { Inter } from "next/font/google";
import { EnhancedTable } from "@/components/table";
import { ResponsiveNavbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <ResponsiveNavbar />
      <div className="m-auto pt-20 pb-10 pr-2 ps-2 max-w-screen-md">
        <EnhancedTable />
      </div>
    </main>
  );
}
