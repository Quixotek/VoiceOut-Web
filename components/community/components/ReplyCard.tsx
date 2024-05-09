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
import { CornerUpRight, EllipsisVertical, Eye, Heart, Newspaper, Reply } from 'lucide-react';
import Link from "next/link"
import Image from "next/image";

interface Props {
    name: string
    reply: string
}
const ReplyCard: React.FC<Props> = ({ name, reply }) => {
    return (
        <div >
            {/* <Image
                  src="/Line.png"
                  alt="logo"
                  className="w-100 h-100"
                  width={16}
                  height={16}
                /> */}
            <Card className="flex mb-6 p-3 ml-16">
                <div className="p-3">
                    <Avatar>
                        <AvatarImage src={`https://example.com/avatar/${name.toLowerCase()}.png`} alt={name} />
                        <AvatarFallback>{name[0]}</AvatarFallback>
                    </Avatar>
                </div>
                <div className="w-4/5">
                    <CardHeader className="p-3">
                        <CardTitle>{name}</CardTitle>
                        <CardDescription>{reply}</CardDescription>
                    </CardHeader>
                </div>
                <div className="w-1/5 flex flex-col justify-start">
                    <div className="flex justify-end">
                        <EllipsisVertical />
                    </div>
                </div>
            </Card>
        </div>

    )
}
export default ReplyCard