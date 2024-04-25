/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import CreateReportModal from "../report/CreateReportModal";

const HeroSection = () => {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <div>
      <section className="py-12  sm:py-16 lg:py-20 xl:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12">
            <div className="flex flex-col justify-between lg:order-2">
              <div className="flex-1">
                <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-blue-600 rounded-xl bg-blue-50">
                  #1 Anonymous Reporting Platform
                </span>

                <h1 className="mt-6 text-4xl font-semibold tracking-tight  sm:text-5xl xl:text-7xl sm:tracking-tight">
                  Speak Out Anonymously, Safely.
                </h1>
              </div>

              <div className="mt-6 lg:mt-auto">
                <p className="text-lg leading-7  lg:leading-8 lg:text-xl">
                  Share your thoughts without fear of judgment or exposure.
                </p>
                <Button className="mt-10" onClick={toggleModal}>
                  <p>Voice Out Anonymously</p>
                </Button>
              </div>
            </div>

            <div className="lg:order-1">
              <div className="relative w-full max-w-sm mx-auto">
                <img
                  className="relative w-full max-w-xs mx-auto sm:max-w-sm rounded-2xl"
                  src="https://images.unsplash.com/photo-1567925034354-b1d753b4ba24?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Illustration of a person"
                />

                <div className="absolute bottom-0 left-0 mb-12 -ml-2  shadow-2xl sm:mb-24 sm:-ml-24 lg:-ml-12 xl:-ml-24 w-72 rounded-2xl">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-start">
                      <svg
                        className="text-blue-600 w-9 h-9"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                        />
                      </svg>
                      <div className="ml-4">
                        <p className="text-3xl font-semibold ">34,585</p>
                        <p className="mt-1 text-lg font-normal ">
                          Your privacy is our top priority
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {openModal && (
          <CreateReportModal isOpen={openModal} onClose={toggleModal} />
        )}
      </section>
    </div>
  );
};

export default HeroSection;
