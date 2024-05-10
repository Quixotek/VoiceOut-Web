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
import { CircleX, CornerUpRight, EllipsisVertical, Eye, Heart, Newspaper, Reply, SquarePen, Info, } from 'lucide-react';
import Link from "next/link"
import ReplyCard from "./ReplyCard"
import { Input } from "@/components/ui/input"
import { comments } from "@/lib/dummydata"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
const CommentCard = () => {
    const [showReplies, setShowReplies] = React.useState(false);
    const [buttonClicked, setButtonClicked] = React.useState(false);
    const [isLiked, setIsLiked] = React.useState(false);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = React.useState(false);
    const openDeleteDialog = () => {
        setIsDeleteDialogOpen(true);
    };
    const closeDeleteDialog = () => {
        setIsDeleteDialogOpen(false);
    };

    const handleLikeClick = () => {
        setIsLiked(!isLiked);
    };
    const handleToggleReplies = () => {
        setShowReplies(!showReplies);
        setButtonClicked(true);
    };
    return (
        <>
            {comments.map((comment, index) => (
                <div key={index}>
                    <Card className="flex flex-col xl:flex-row lg:flex-row mb-6 p-3">

                        <div className="xl:w-3/5 lg:w-3/5">
                            <CardHeader className="p-2">
                                <div className="flex justify-between">
                                    <span>
                                        <Avatar>
                                            <AvatarImage src={`https://example.com/avatar/${comment.name.toLowerCase()}.png`} alt={comment.name} />
                                            <AvatarFallback>{comment.name[0]}</AvatarFallback>
                                        </Avatar>
                                    </span>
                                    <span className="flex flex-col px-2 sm:px-4 py-2 gap-3 items-start">
                                        <CardTitle className="title-card-responsive">{comment.name}</CardTitle>
                                        <CardDescription>{comment.comment}</CardDescription>
                                    </span>
                                    <span className="flex xl:hidden lg:hidden ">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" className="h-8 w-8 p-0">
                                                    <span className="sr-only">Open menu</span>
                                                    <EllipsisVertical className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem>
                                                    <SquarePen className="mr-2 h-4 w-4" />
                                                    <span>Edit Comment</span>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem onClick={openDeleteDialog}>
                                                    <CircleX className="mr-2 h-4 w-4" />
                                                    <span>Delete Comment</span>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <Info className="mr-2 h-4 w-4" />
                                                    <span>Delete Comment</span>
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </span>
                                </div>
                            </CardHeader>

                        </div>
                        <div className="xl:w-2/5 lg:w-2/5 flex flex-col justify-between">
                            <div className="hidden xl:flex lg:flex justify-end ">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" className="h-8 w-8 p-0">
                                            <span className="sr-only">Open menu</span>
                                            <EllipsisVertical className="h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>
                                            <SquarePen className="mr-2 h-4 w-4" />
                                            <span>Edit Comment</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={openDeleteDialog}>
                                            <CircleX className="mr-2 h-4 w-4" />
                                            <span>Delete Comment</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Info className="mr-2 h-4 w-4" />
                                            <span>Delete Comment</span>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                            <div className="flex justify-end items-center gap-3">
                                <span className="flex justify-end items-center gap-2" onClick={handleLikeClick}>
                                    <Heart color={isLiked ? "#94A3B8" : "#BA0000"} />
                                    <p className="p-responsive">{isLiked ? '204' : '203'} react</p>
                                </span>
                                <Button variant='ghost'>
                                    <Reply className="mr-2 h-4 w-4" /> <p className="p-responsive"><u >Reply</u></p>
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
            <AlertDialog open={isDeleteDialogOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your posted discussion and its comments.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={closeDeleteDialog}>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}

export default CommentCard;
