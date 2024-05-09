import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Eye, Newspaper } from 'lucide-react';
import Link from "next/link"
const CardWithForm = () => {
  return (
    <Card className="flex my-6">
      <div className="w-3/5">
        <CardHeader>
          <span className="flex gap-3">
            <CardTitle>Gender Bias in the Workplace</CardTitle>
            <Badge>Gender</Badge>
          </span>
          <CardDescription>This forum discussion focuses on experiences of gender discrimination in professional settings. Participants share anecdotes, offer support, and discuss strategies for addressing bias in hiring, promotions, and everyday interactions.</CardDescription>
        </CardHeader>
      </div>
      <div className="w-2/5 flex flex-col justify-between p-6">
        <div className="flex justify-end gap-2">
          <Avatar className="w-[24px] h-[24px]">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="w-[24px] h-[24px]">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="w-[24px] h-[24px]">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

        </div>
        <div className="flex justify-between items-center">
          <span className="flex">
            <Eye />
            <p>40.1 k views</p>
          </span>
          <span className="flex">
            <Newspaper />
            <p>1.5 k replies</p>
          </span>
          <Link href={`/community/${'my-post'}`} passHref>
            <Button>View Thread</Button>
          </Link>
        </div>
      </div>
    </Card>
  )
}
export default CardWithForm