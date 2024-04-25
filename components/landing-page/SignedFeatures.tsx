import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const SignedFeatures = () => {
  return (
    <section className="py-12 bg-gray-900 sm:py-16 lg:py-20 xl:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            You can also signin an account to access more of our features
          </h2>
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
                Communities
              </h3>
              <p className="mt-4 text-base font-normal text-gray-400">
                Lorem Ipsum is simply dummy text of the printing and type
                setting industry.
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
                Legal Advices
              </h3>
              <p className="mt-4 text-base font-normal text-gray-400">
                Lorem Ipsum is simply dummy text of the printing and type
                setting industry.
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
              <h3 className="text-2xl font-semibold text-gray-300">Profile</h3>
              <p className="mt-4 text-base font-normal text-gray-400">
                Lorem Ipsum is simply dummy text of the printing and type
                setting industry.
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
              <Button className="text-lg font-semibold">
                <Link href="/signup"> Create an account? --&gt;</Link>
              </Button>
              <p className="mt-4 text-base font-normal text-gray-400">
                Lorem Ipsum is simply dummy text of the printing and type
                setting industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignedFeatures;
