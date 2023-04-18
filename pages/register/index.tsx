import Image from "next/image";
import { Inter } from "next/font/google";
import { RegisterForm } from "./registerForm";
import { BackButton } from "@/components/backButton";

const inter = Inter({ subsets: ["latin"] });

export default function Form() {
  return (
    <main className="pb-12 pt-3">
      <BackButton />
      <h1 className="text-4xl font-semibold leading-2 text-gray-900 pt-5 pb-12 text-center">
        Register form
      </h1>
      <RegisterForm />
    </main>
  );
}
