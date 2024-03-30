import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-pattern min-h-screen">
      <nav className="absolute top-10 left-10">
        <Link
          className="text-3xl font-bold bg-white rounded-xl p-4 lg:text-5xl"
          href="/sign-up"
        >
          RANKER.GG
        </Link>
      </nav>
      <div
        className="bg-gradient-to-b h-screen from-transparent from-10% to-60% to-secondary-semi 
        lg:bg-gradient-to-r flex flex-col justify-end p-6 lg:flex-row lg:p-24"
      >
        <div className="w-full lg:min-w-[30vw] lg:max-w-[30rem] flex flex-col gap-10 justify-center lg:gap-16">
          <h1 className="text-6xl font-bold text-white">Hello, Welcome!</h1>
          <p className="text-3xl font-semibold text-white">
            Welcome to the ranking revolution! Sign up or log in to be a part of
            the movement!
          </p>
          <Link href="/">
            <Button
              className="bg-white text-black w-full text-2xl font-bold py-8 rounded-2xl
              hover:bg-white hover:scale-[102%] transition-all
              "
            >
              Get Started
            </Button>
          </Link>
          <p className="text-white text-center text-lg">
            Already a member?{" "}
            <Link className="hover:underline" href="/sign-in">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
