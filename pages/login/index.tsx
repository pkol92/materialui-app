import { Inter } from "next/font/google";
import { LoginForm } from "./loginForm";
import { BackButton } from "@/components/backButton";

const inter = Inter({ subsets: ["latin"] });

export default function Login() {
  return (
    <main className="pb-12 pt-3">
      <BackButton />
      <LoginForm />
    </main>
  );
}
