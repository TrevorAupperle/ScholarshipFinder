import Head from "next/head";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Lottie from "lottie-react";
import graduatedStudent from "../../public/lotties/graduated-student.json";

export default function Home() {
  return (
    <>
      <Head>
        <title>ScholarshipFinder</title>
        <meta
          name="description"
          content="A dynamic web application to find scholarships with ease."
        />
        <link rel="icon" href="/graduation-cap.ico" />
      </Head>
      <main className="font-crimsonPro flex flex-col items-center gap-4 bg-white py-6">
        <nav className="flex w-full max-w-6xl items-center justify-between gap-2">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/icons/graduation-cap.svg"
              alt="ScholarshipFinder logo"
              width={48}
              height={48}
            />
            <h1 className="text-xl font-semibold tracking-wide">
              ScholarshipFinder
            </h1>
          </Link>
          <div className="flex items-center gap-3 text-lg font-medium">
            <Link href="/">Learn more</Link>
            <Link
              href="/"
              className="rounded-xl px-3 py-2 ring-2 ring-inset ring-se-teal"
            >
              Log in
            </Link>
            <Link
              href="/"
              className="rounded-xl bg-se-teal px-3 py-2 text-white"
            >
              Sign up
            </Link>
          </div>
        </nav>
        <div className="grid max-w-6xl grid-cols-12">
          <div className="col-span-6 flex flex-col justify-end gap-8 pb-2 pr-8">
            <div className="flex flex-col gap-8">
              <h2 className="text-5xl font-semibold tracking-wide">
                Unlocking Your Future <br />
                with Scholarships
                <br /> <span className="text-se-aqua">Made Simple</span>
              </h2>
              <p className="text-lg font-semibold">
                Our platform seamlessly connects you to a vast network of
                scholarships tailored to your passions, talents, and
                aspirations. Simplify your search, ensuring you find the support
                you need to step confidently into the next chapter of your
                educational journey.
              </p>
            </div>
            <div className="flex gap-[2px] font-semibold tracking-wide">
              <div className="flex flex-col items-center justify-center gap-1 rounded-l-lg bg-se-aqua bg-opacity-50 p-6">
                <h3 className="text-2xl">50,000+</h3>
                <p>Scholarships</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 bg-se-aqua bg-opacity-50 p-6">
                <h3 className="text-2xl">$200+ million</h3>
                <p>Awarded</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 rounded-r-lg bg-se-aqua bg-opacity-50 p-6">
                <h3 className="text-2xl">1.2+ million</h3>
                <p>Student Applicants</p>
              </div>
            </div>
          </div>
          <div className="col-span-6 pl-8">
            <Lottie animationData={graduatedStudent} />
          </div>
        </div>
      </main>
    </>
  );
}
