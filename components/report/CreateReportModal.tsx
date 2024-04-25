"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { date, z } from "zod";
import { useRouter } from "next/navigation";
import { CalendarIcon, Info, X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import Link from "next/link";

const schema = z.object({
  discriminationType: z.string(),
  report: z.string(),
  location: z.string().optional(),
  attachments: z.string().optional(),
});

interface IFormInput {
  discriminationType: string;
  report: string;
  location?: string;
  attachments?: string;
}

interface CreateReportModalProps {
  data?: any;
  isOpen: boolean;
  onClose: () => void;
}

const CreateReportModal: React.FC<CreateReportModalProps> = ({
  data,
  isOpen,
  onClose,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: zodResolver(schema),
    defaultValues: {
      discriminationType: "",
      report: "",
      location: "",
      attachments: "",
    },
    mode: "onBlur",
  });

  const files: File[] = [];

  const onSubmit = (data: IFormInput) => {
    console.log(data);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      Array.from(event.target.files).forEach((file) => files.push(file));
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex justify-center items-center">
      <Card className="w-full max-w-xl">
        <CardHeader className="flex justify-between items-center flex-row">
          <CardTitle className="text-2xl">Report Discrimination</CardTitle>
          <X
            onClick={onClose}
            className="hover:scale-125 transition duration-300"
          />
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
            <div>
              <Label htmlFor="discriminationType">Type of Discrimination</Label>
              <Controller
                control={control}
                name="discriminationType"
                render={({ field }) => (
                  <Select
                    {...field}
                    onValueChange={(value) => {
                      setValue("discriminationType", value);
                      field.onChange(value);
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Type</SelectLabel>
                        <SelectItem value="racial">
                          Racial Discrimination
                        </SelectItem>
                        <SelectItem value="gender">
                          Gender Discrimination
                        </SelectItem>
                        <SelectItem value="age">Age Discrimination</SelectItem>
                        {/* Add more discrimination types as needed */}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.discriminationType && (
                <p className="text-red-500 text-xs">
                  {errors.discriminationType.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="report">Report Details</Label>
              <Input
                id="report"
                placeholder="Enter report details here..."
                {...register("report")}
              />
              {errors.report && (
                <p className="text-red-500 text-xs">{errors.report.message}</p>
              )}
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-sm">
                  <p className="flex justify-center items-center gap-3">
                    Additional Information{" "}
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info size={20} className="cursor-pointer" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-[300px]">
                            These details are collected for analytics purposes.
                            Please refer to our{" "}
                            <Link
                              href="/terms"
                              className="underline cursor-pointer"
                            >
                              Terms of Use
                            </Link>{" "}
                            and{" "}
                            <Link href="#" className="underline cursor-pointer">
                              Privacy Policy
                            </Link>{" "}
                            for more information on how we handle analytics
                            data.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </p>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4">
                  <div>
                    <Label htmlFor="location">Location (Optional)</Label>
                    <Input
                      id="location"
                      placeholder="Enter location..."
                      {...register("location")}
                    />
                    {errors.location && (
                      <p className="text-red-500 text-xs">
                        {errors.location.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="attachments">Attachments (Optional)</Label>
                    <Input
                      id="attachments"
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleFileChange}
                    />
                    {errors.attachments && (
                      <p className="text-red-500 text-xs">
                        {errors.attachments.message}
                      </p>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Label className="text-center leading-6">
              Please note that the information provided will be used in
              accordance with our{" "}
              <Link href="/terms" className="underline cursor-pointer">
                Terms of Use
              </Link>{" "}
              and{" "}
              <Link href="#" className="underline cursor-pointer">
                Privacy Policy
              </Link>{" "}
              for the intended purpose.
            </Label>

            <Button type="submit" className="w-full">
              Submit Report
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateReportModal;
