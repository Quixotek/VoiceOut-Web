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

interface Props {
  title: string
  description: string
  type: string
  views: number
  replies: number
  id: string
  userName: string
}
const CardThread: React.FC<Props> = ({ title, description, type, views, replies, id, userName }) => {
  return (
    <Card className="flex my-6">
      <div className="w-3/5">
        <CardHeader>
          <span className="flex gap-3">
            <CardTitle>{title}</CardTitle>
            <Badge>{type}</Badge>
          </span>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </div>
      <div className="w-2/5 flex flex-col justify-between p-6">
        <div className="flex justify-end gap-2 py-4">
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
          <span className="flex gap-2">
            <Eye />
            <p>{views} views</p>
          </span>
          <span className="flex gap-2">
            <Newspaper />
            <p>{replies} replies</p>
          </span>
          <Link href={`/community/${id}`} passHref>
            <Button>View Thread</Button>
          </Link>
        </div>
      </div>
    </Card>
  )
}
export default CardThread