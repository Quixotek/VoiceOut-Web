"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

const FAQ = () => {
  const [selectedItem, setSelectedItem] = useState("");
  return (
    <div className="max-w-[1024px] mx-auto px-4 mb-16">
      <h2 className="scroll-m-20  pb-2 text-4xl font-semibold tracking-tight first:mt-16 mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <Accordion
        type="single"
        collapsible
        onValueChange={(value) => setSelectedItem(value)}
        className=" flex flex-col gap-3"
      >
        <AccordionItem
          value="item-1"
          className={`${
            selectedItem === "item-1" ? " p-4" : ""
          } border-gray-300 border-[0.25px] px-2  rounded-lg `}
        >
          <AccordionTrigger
            className={` hover:no-underline px-4 ${
              selectedItem === "item-1" && "border-b-[0.25px]  border-gray-300"
            }`}
          >
            What is an anonymous posting website?
          </AccordionTrigger>
          <AccordionContent
            className={`${selectedItem === "item-1" ? "p-4" : ""} `}
          >
            An anonymous posting website allows users to share their thoughts,
            opinions, and experiences without revealing their identity.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className={`${
            selectedItem === "item-2" ? " p-4" : ""
          } border-gray-300 border-[0.25px] px-2  rounded-lg `}
        >
          <AccordionTrigger
            className={` hover:no-underline px-4 ${
              selectedItem === "item-2" && "border-b-[0.25px]  border-gray-300"
            }`}
          >
            Is it safe to post anonymously?
          </AccordionTrigger>
          <AccordionContent
            className={`${selectedItem === "item-2" ? "p-4" : ""} `}
          >
            Yes, our platform ensures the safety and anonymity of users by
            encrypting data and protecting user privacy.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className={`${
            selectedItem === "item-1" ? " p-4" : ""
          } border-gray-300 border-[0.25px] px-2  rounded-lg `}
        >
          <AccordionTrigger
            className={` hover:no-underline px-4 ${
              selectedItem === "item-3" && "border-b-[0.25px]  border-gray-300"
            }`}
          >
            Can I trust the anonymity of this platform?
          </AccordionTrigger>
          <AccordionContent
            className={`${selectedItem === "item-3" ? "p-4" : ""} `}
          >
            Absolutely. We take privacy and anonymity seriously and implement
            robust security measures to protect user identities.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-4"
          className={`${
            selectedItem === "item-4" ? " p-4" : ""
          } border-gray-300 border-[0.25px] px-2  rounded-lg `}
        >
          <AccordionTrigger
            className={` hover:no-underline px-4 ${
              selectedItem === "item-4" && "border-b-[0.25px]  border-gray-300"
            }`}
          >
            Are there any restrictions on the content I can post?
          </AccordionTrigger>
          <AccordionContent
            className={`${selectedItem === "item-4" ? "p-4" : ""} `}
          >
            While we encourage free expression, we have guidelines in place to
            ensure that all content posted is respectful and lawful.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-5"
          className={`${
            selectedItem === "item-5" ? " p-4" : ""
          } border-gray-300 border-[0.25px] px-2  rounded-lg `}
        >
          <AccordionTrigger
            className={` hover:no-underline px-4 ${
              selectedItem === "item-5" && "border-b-[0.25px]  border-gray-300"
            }`}
          >
            How can I report inappropriate content?
          </AccordionTrigger>
          <AccordionContent
            className={`${selectedItem === "item-5" ? "p-4" : ""} `}
          >
            You can easily report any inappropriate content using our reporting
            feature, and our team will take appropriate action.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-6"
          className={`${
            selectedItem === "item-6" ? " p-4" : ""
          } border-gray-300 border-[0.25px] px-2  rounded-lg `}
        >
          <AccordionTrigger
            className={` hover:no-underline px-4 ${
              selectedItem === "item-6" && "border-b-[0.25px]  border-gray-300"
            }`}
          >
            Can I interact with other users anonymously?
          </AccordionTrigger>
          <AccordionContent
            className={`${selectedItem === "item-6" ? "p-4" : ""} `}
          >
            Yes, you can engage with other users through comments and messages
            while maintaining your anonymity.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQ;
