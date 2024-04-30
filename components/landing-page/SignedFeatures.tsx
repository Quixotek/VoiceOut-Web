/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const SignedFeatures = () => {
  return (
    <section className="py-12 bg-primary sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-background sm:text-4xl lg:text-5xl">
            Unlock exclusive features by signing up
          </h2>
          <p className="mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8">
            Join our community and enjoy these benefits:
          </p>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-5 mx-auto  lg:grid-cols-3 sm:mt-16 sm:gap-6 lg:gap-8 lg:max-w-none">
          <div className="bg-gray-100 rounded-2xl">
            <div className="px-4 py-5 sm:p-6   flex flex-col gap-4">
              <h3 className="px-4 pt-6 text-xl font-semibold text-gray-900">
                Connect with like-minded individuals and share insights in{" "}
                <span className="bg-blue-300">specialized communities.</span>
              </h3>
              <Link
                href="/signup"
                className="hover:underline text-center  font-semibold mt-3"
              >
                Try it now --&gt;
              </Link>
              <img
                className="object-cover  rounded-xl"
                src="https://images.unsplash.com/photo-1417733403748-83bbc7c05140?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>

          <div className="bg-gray-100 rounded-2xl">
            <div className="px-4 py-5 sm:p-6  flex flex-col gap-4">
              <h3 className="px-4 pt-6 text-xl font-semibold text-gray-900">
                Get access to{" "}
                <span className="bg-blue-300">professional legal advice</span>{" "}
                to protect yourself and your business.
              </h3>
              <Link
                href="/signup"
                className="hover:underline text-center  font-semibold mt-3"
              >
                Try it now --&gt;
              </Link>
              <img
                className="object-cover  rounded-xl"
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>

          <div className="bg-gray-100 rounded-2xl">
            <div className="px-4 py-5 sm:p-6  flex flex-col gap-4">
              <h3 className="px-4 pt-6 text-xl font-semibold text-gray-900">
                Customize your profile to{" "}
                <span className="bg-blue-300">distinguish yourself</span> or{" "}
                <span className="bg-blue-300">maintain anonymity</span>.
              </h3>
              <Link
                href="/signup"
                className="hover:underline text-center  font-semibold mt-3"
              >
                Try it now --&gt;
              </Link>
              <img
                className="object-cover  rounded-xl"
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignedFeatures;
