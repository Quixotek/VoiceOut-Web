/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import CreateReportModal from "../report/CreateReportModal";
import { MessageSquareWarning } from "lucide-react";

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
            <div className="flex flex-col justify-center lg:order-2">
              <div className="">
                <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-blue-600 rounded-xl bg-background">
                  #1 Anonymous Reporting Platform
                </span>

                <h1 className="mt-6 text-4xl font-semibold tracking-tight  sm:text-5xl xl:text-7xl sm:tracking-tight">
                  Speak Out Anonymously, Safely.
                </h1>
              </div>

              <div className="mt-6 lg:mt-20">
                <p className="text-lg leading-7  lg:leading-8 lg:text-xl">
                  Share your thoughts without fear of judgment or exposure.
                </p>
                <Button className="mt-6" onClick={toggleModal}>
                  <p className="font-semibold">Voice Out Anonymously</p>
                </Button>
              </div>
            </div>

            <div className="lg:order-1">
              <div className="relative w-full max-w-sm mx-auto">
                <img
                  className="relative w-full max-w-xs mx-auto sm:max-w-sm rounded-2xl"
                  src="/heroImage.svg"
                  // src="https://images.unsplash.com/photo-1567925034354-b1d753b4ba24?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Illustration of a person"
                />

                <div className="absolute bottom-0 left-0 mb-12 -ml-2 bg-muted/90 shadow-md shadow-muted sm:mb-24 sm:-ml-24 lg:-ml-12 xl:-ml-24 w-72 rounded-2xl">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-start">
                      <MessageSquareWarning
                        className="text-blue-600 mt-1"
                        size={32}
                      />
                      <div className="ml-4">
                        <p className="text-3xl font-semibold ">1259</p>
                        <p className="mt-1 text-lg font-normal ">
                          Total reports received
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
