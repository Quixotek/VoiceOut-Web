import React from "react";
import { useRouter } from "next/navigation";
import { Reply } from "lucide-react";
import { Button } from "@/components/ui/button";

const BackButton = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.back()}>
      <Reply className="mr-2 h-4 w-4" />Back
    </Button>
  );
};

export default BackButton;
