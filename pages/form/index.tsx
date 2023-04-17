import Image from "next/image";
import { Inter } from "next/font/google";
import { RegisterForm } from "./registerForm";

const inter = Inter({ subsets: ["latin"] });

export default function Form() {
  return (
    <main className="border-b border-gray-900/10 pb-12">
      <h1 className="text-base font-semibold leading-7 text-gray-900>Register form">
        Register form
      </h1>
      <RegisterForm />
    </main>
  );
}
