import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Eye, Newspaper } from 'lucide-react';
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  type: string;
  views: number;
  replies: number;
  id: string;
}

const CardThread: React.FC<Props> = ({ title, description, type, views, replies, id }) => {
  return (
    <Card className="flex my-6 xl:flex-row lg:flex-row flex-col min-w-[350px]">
      <div className="lg:w-3/5 xl:w-3/5">
        <CardHeader className="p-4 lg:p-5 xl:p-5">
          <div className="flex gap-3 justify-between">
            <span className="flex gap-3 items-start">
              <CardTitle className="title-card-responsive">{title}</CardTitle>
              <Badge>{type}</Badge>
            </span>
            <span className="flex xl:hidden lg:hidden gap-2 justify-end">
              <Avatar className="w-[20px] h-[20px]">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar className="w-[20px] h-[20px]">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </span>
          </div>
          <CardDescription className="text">{description}</CardDescription>
        </CardHeader>
      </div>
      <div className="lg:w-2/5 xl:w-2/5 flex flex-col justify-between p-3 lg:p-4 xl:p-5">
        <div className="hidden xl:flex lg:flex justify-end gap-2 pb-4">
          {[1, 2, 3].map((index) => (
            <Avatar key={index} className="w-[24px] h-[24px]">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          ))}
        </div>
        <div className="flex justify-evenly lg:justify-between items-center">
          <span className="flex gap-2 items-center ">
            <Eye color=" #94A3B8"/>
            <p className="p-responsive">{views} views</p>
          </span>
          <span className="flex gap-2 items-center ">
            <Newspaper color=" #94A3B8"/>
            <p className="p-responsive">{replies} replies</p>
          </span>
          <Link href={`/community/${id}`} passHref>
            <Button className="w-[auto]">View Thread</Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default CardThread;
