"use client"
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
import ReplyCard from "./ReplyCard"
import { Input } from "@/components/ui/input"


const commentsData = [
    {
        name: "John",
        comment: "This forum discussion focuses on experiences of gender discrimination in professional settings. Participants share anecdotes, offer support, and discuss strategies for addressing bias in hiring, promotions, and everyday interactions.",
        replies: [
            {
                name: "Alice",
                reply: "This forum discussion focuses on experiences of gender discrimination in professional settings. Participants share anecdotes, offer support, and discuss strategies for addressing bias in hiring, promotions, and everyday interactions.",
            },
            {
                name: "Bob",
                reply: "This forum discussion focuses on experiences of gender discrimination in professional settings. Participants share anecdotes, offer support, and discuss strategies for addressing bias in hiring, promotions, and everyday interactions.",
            },
        ],
    },
    {
        name: "Emily",
        comment: "This forum discussion focuses on experiences of gender discrimination in professional settings. Participants share anecdotes, offer support, and discuss strategies for addressing bias in hiring, promotions, and everyday interactions.",
        replies: [],
    },
    {
        name: "Mike",
        comment: "This forum discussion focuses on experiences of gender discrimination in professional settings. Participants share anecdotes, offer support, and discuss strategies for addressing bias in hiring, promotions, and everyday interactions.",
        replies: [
            {
                name: "Sarah",
                reply: "This forum discussion focuses on experiences of gender discrimination in professional settings. Participants share anecdotes, offer support, and discuss strategies for addressing bias in hiring, promotions, and everyday interactions.",
            },
        ],
    },
    {
        name: "David",
        comment: "This forum discussion focuses on experiences of gender discrimination in professional settings. Participants share anecdotes, offer support, and discuss strategies for addressing bias in hiring, promotions, and everyday interactions.",
        replies: [],
    },
];

const CommentCard = () => {
    const [showReplies, setShowReplies] = React.useState(false);
    const [buttonClicked, setButtonClicked] = React.useState(false);
    const handleToggleReplies = () => {
        setShowReplies(!showReplies);
        setButtonClicked(true);
    };
    return (
        <>
            {commentsData.map((comment, index) => (
                <div key={index}>
                    <Card className="flex mb-6 p-3">
                        <div className="p-3">
                            <Avatar>
                                <AvatarImage src={`https://example.com/avatar/${comment.name.toLowerCase()}.png`} alt={comment.name} />
                                <AvatarFallback>{comment.name[0]}</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="w-3/5">
                            <CardHeader className="p-3">
                                <CardTitle>{comment.name}</CardTitle>
                                <CardDescription>{comment.comment}</CardDescription>
                            </CardHeader>
                        </div>
                        <div className="w-2/5 flex flex-col justify-between">
                            <div className="flex justify-end">
                                <EllipsisVertical />
                            </div>
                            <div className="flex justify-end items-center gap-3">
                                <span className="flex justify-end gap-2">
                                    <Heart color="#BA0000" />
                                    <p>203 react</p>
                                </span>
                                <Button variant='ghost'>
                                    <Reply className="mr-2 h-4 w-4" /> <u>Reply</u>
                                </Button>
                            </div>
                        </div>
                    </Card>
                    {comment.replies.length > 0 && !buttonClicked && (
                        <Button variant='ghost' onClick={handleToggleReplies}>
                            <CornerUpRight className="mr-2 h-4 w-4" /> <u>see all replies</u>
                        </Button>
                    )}
                    {showReplies && comment.replies.map((reply, replyIndex) => (
                        <ReplyCard key={replyIndex} name={reply.name} reply={reply.reply} />

                    ))}
                    <div className="flex gap-3 ml-16 mb-3">
                        <Input type="reply" placeholder="Add a reply" />
                        <Button>Add reply</Button>
                    </div>
                </div>
            ))}

        </>
    );
}

export default CommentCard;
