import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="max-w-[1024px] mx-auto px-4 mb-16">
      <h2 className="scroll-m-20 border-b pb-2 text-4xl font-semibold tracking-tight first:mt-16 mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            What is an anonymous posting website?
          </AccordionTrigger>
          <AccordionContent>
            An anonymous posting website allows users to share their thoughts,
            opinions, and experiences without revealing their identity.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it safe to post anonymously?</AccordionTrigger>
          <AccordionContent>
            Yes, our platform ensures the safety and anonymity of users by
            encrypting data and protecting user privacy.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Can I trust the anonymity of this platform?
          </AccordionTrigger>
          <AccordionContent>
            Absolutely. We take privacy and anonymity seriously and implement
            robust security measures to protect user identities.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            Are there any restrictions on the content I can post?
          </AccordionTrigger>
          <AccordionContent>
            While we encourage free expression, we have guidelines in place to
            ensure that all content posted is respectful and lawful.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            How can I report inappropriate content?
          </AccordionTrigger>
          <AccordionContent>
            You can easily report any inappropriate content using our reporting
            feature, and our team will take appropriate action.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>
            Can I interact with other users anonymously?
          </AccordionTrigger>
          <AccordionContent>
            Yes, you can engage with other users through comments and messages
            while maintaining your anonymity.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQ;
