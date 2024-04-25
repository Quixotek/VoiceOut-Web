import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { MoveLeft } from "lucide-react";

const BackButton = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.back()}
      className="absolute top-10 left-8 flex justify-center items-center gap-3"
      variant="outline"
    >
      <MoveLeft /> Back
    </Button>
  );
};

export default BackButton;
