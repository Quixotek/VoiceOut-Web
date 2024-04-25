"use client";
import BackButton from "@/components/common/BackButton";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Terms() {
  return (
    <div>
      <BackButton />
      <Card className="overflow-hidden max-w-[1400px] mx-auto mt-16">
        <CardHeader className="flex flex-row justify-center items-center bg-muted/50">
          <CardTitle className=" flex justify-center items-center gap-2 text-5xl">
            Terms of Use
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 text-sm">Terms</CardContent>
        <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
          <div className="text-xs text-muted-foreground">
            Updated <time dateTime="2023-11-23">November 23, 2023</time>
          </div>
        </CardFooter>
      </Card>
      <Card className="overflow-hidden max-w-[1400px] mx-auto mt-16">
        <CardHeader className="flex flex-row justify-center items-center bg-muted/50">
          <CardTitle className=" flex justify-center items-center gap-2 text-5xl">
            Privacy Policy
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 text-sm">Privacy Policy</CardContent>
        <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
          <div className="text-xs text-muted-foreground">
            Updated <time dateTime="2023-11-23">November 23, 2023</time>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
