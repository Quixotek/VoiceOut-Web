import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const SignedFeatures = () => {
  return (
    <section className="py-12 bg-gray-900 sm:py-16 lg:py-20 xl:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-xl text-center mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Unlock exclusive features by{" "}
            <Link href="/signup" className="hover:underline cursor-pointer">
              signing up
            </Link>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Join our community and enjoy these benefits:
          </p>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-12 mt-12 lg:max-w-none lg:grid-cols-4 sm:mt-16 lg:mt-20">
          <div className="relative flex flex-start lg:flex-col">
            <span
              className="absolute top-7 left-1.5 h-full w-px lg:w-full lg:h-px -ml-px bg-gray-700 lg:top-1.5 lg:left-7"
              aria-hidden="true"
            ></span>

            <div className="w-3 h-3 bg-gray-700 rounded-full shrink-0"></div>
            <div className="ml-6 lg:ml-0 lg:mt-10">
              <h3 className="text-2xl font-semibold text-gray-300">
                Posting in Communities
              </h3>
              <p className="mt-4 text-base font-normal text-gray-400">
                Connect with like-minded individuals and share insights in
                specialized communities.
              </p>
            </div>
          </div>

          <div className="relative flex flex-start lg:flex-col">
            <span
              className="absolute top-7 left-1.5 h-full w-px lg:w-full lg:h-px -ml-px bg-gray-700 lg:top-1.5 lg:left-7"
              aria-hidden="true"
            ></span>

            <div className="w-3 h-3 bg-blue-600 rounded-full shrink-0"></div>
            <div className="ml-6 lg:ml-0 lg:mt-10">
              <h3 className="text-2xl font-semibold text-gray-300">
                Expert Legal Advice
              </h3>
              <p className="mt-4 text-base font-normal text-gray-400">
                Get access to professional legal advice to protect yourself and
                your business.
              </p>
            </div>
          </div>

          <div className="relative flex flex-start lg:flex-col">
            <span
              className="absolute top-7 left-1.5 h-full w-px lg:w-full lg:h-px -ml-px bg-gray-700 lg:top-1.5 lg:left-7"
              aria-hidden="true"
            ></span>

            <div className="w-3 h-3 bg-gray-700 rounded-full shrink-0"></div>
            <div className="ml-6 lg:ml-0 lg:mt-10">
              <h3 className="text-2xl font-semibold text-gray-300">
                Custom Profile
              </h3>
              <p className="mt-4 text-base font-normal text-gray-400">
                Personalize your profile and stand out from the crowd.
              </p>
            </div>
          </div>

          <div className="relative flex flex-start lg:flex-col">
            <span
              className="absolute top-7 left-1.5 h-full w-px lg:w-full lg:h-px -ml-px bg-gray-700 lg:top-1.5 lg:left-7"
              aria-hidden="true"
            ></span>

            <div className="w-3 h-3 bg-gray-700 rounded-full shrink-0"></div>
            <div className="ml-6 lg:ml-0 lg:mt-8">
              <Button className="text-lg font-semibold bg-white text-gray-900 hover:underline transition hover:bg-slate-100">
                <Link href="/signup">Create an account? --&gt;</Link>
              </Button>
              <p className="mt-4 text-base font-normal text-gray-400">
                Join us today and unlock these exciting features!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignedFeatures;
