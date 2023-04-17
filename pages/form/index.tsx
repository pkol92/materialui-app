import Image from "next/image";
import { Inter } from "next/font/google";
import { RegisterForm } from "./registerForm";

const inter = Inter({ subsets: ["latin"] });

export default function Form() {
  return (
    <main className="pb-12">
      <h1 className="text-4xl font-semibold leading-7 text-gray-900 pt-12 pb-12 text-center">
        Register form
      </h1>
      <RegisterForm />
    </main>
  );
}
