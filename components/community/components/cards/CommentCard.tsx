import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import { CornerUpRight, Heart, Reply } from 'lucide-react';
import ReplyCard from "./ReplyCard";
import { Input } from "@/components/ui/input";
import { comments } from "@/lib/dummydata";
import Dropdown from "../dropdown/Dropdown";
import DeleteAlertDialog from "../alertdialog/DeleteAlertDialog";

interface Props {
    id: string;
}
const formatNumber = (num: number) => {
    if (num >= 1e9) {
        return (num / 1e9) + 'B';
    }
    if (num >= 1e6) {
        return (num / 1e6) + 'M';
    }
    if (num >= 1e3) {
        return Math.floor(num / 100) / 10 + 'k';
    }
    return num.toString();
};
const CommentCard: React.FC<Props> = ({ id }) => {
    const [showReplies, setShowReplies] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [showReplySection, setShowReplySection] = useState(false);

    return (
        <>
            {comments.map((comment, index) => {
                if (comment.threadid !== id) return null;
                return (
                    <div key={index}>

                        <Card className="flex flex-col xl:flex-row lg:flex-row p-3 mt-3 min-w-[350px]">
                            <div className="xl:w-3/5 lg:w-3/5">

                                <CardHeader className="p-2">
                                    <div className="flex justify-between">

                                        <span className="flex">
                                            <Avatar>
                                                <AvatarImage src={`https://example.com/avatar/${comment.name.toLowerCase()}.png`} alt={comment.name} />
                                                <AvatarFallback>{comment.name[0]}</AvatarFallback>
                                            </Avatar>
                                            <span className="flex flex-col px-2 sm:px-4 py-2 gap-3 items-start">
                                                <CardTitle className="title-card-responsive">{comment.name}</CardTitle>
                                                <CardDescription>{comment.comment}</CardDescription>
                                            </span>
                                        </span>

                                        <span className="flex xl:hidden lg:hidden ">
                                            <Dropdown
                                                open={() => setIsDeleteDialogOpen(true)}
                                                label={"Action"}
                                                item1={"Edit Comment"}
                                                item2={"Delete Comment"}
                                                item3={"Report Comment"} />
                                        </span>
                                    </div>
                                </CardHeader>
                            </div>
                            <div className="xl:w-2/5 lg:w-2/5 flex flex-col justify-between">
                                <div className="hidden xl:flex lg:flex justify-end ">
                                    <Dropdown
                                        open={() => setIsDeleteDialogOpen(true)}
                                        label={"Action"}
                                        item1={"Edit Comment"}
                                        item2={"Delete Comment"}
                                        item3={"Report Comment"} />
                                </div>

                                <div className="flex justify-end items-center gap-3">
                                    <span className="flex justify-end items-center gap-2 cursor-pointer" onClick={() => setIsLiked(!isLiked)}>
                                        <Heart color={isLiked ? "#94A3B8" : "#BA0000"} />
                                        <p className="p-responsive">{formatNumber(comment.reacts)} react</p>
                                    </span>
                                    <Button variant='ghost' onClick={() => setShowReplySection(true)}>
                                        <Reply className="mr-2 h-4 w-4" /> <p className="p-responsive"><u >Reply</u></p>
                                    </Button>
                                </div>
                            </div>
                        </Card>

                        {comment.replies.length > 0 && !buttonClicked && (
                            <div className="flex">
                                <div className="w-[120px] ml-16">
                                    <div className="border-l-2 border-b-2 border-[#CBD5E1] h-[50%]"></div>
                                </div>
                                <Button className="mt-3" variant='ghost' onClick={() => {
                                    setShowReplies(!showReplies);
                                    setButtonClicked(true);
                                    setShowReplySection(true);
                                }}>
                                    <CornerUpRight className="mr-2 h-4 w-4" /> <u>see all replies</u>
                                </Button>
                            </div>
                        )}

                        {showReplies && comment.replies.map((reply, replyIndex) => (
                            <div key={replyIndex} className="flex w-full">
                                <div className="w-[120px] ml-16">
                                    <div className="border-l-2 border-b-2 border-[#CBD5E1] h-[50%]"></div>
                                    <div className={`border-[#CBD5E1] h-[50%] ${replyIndex === comment.replies.length - 1 ? 'border-l-0' : 'border-l-2'}`}></div>
                                </div>
                                <ReplyCard name={reply.name} reply={reply.reply} />
                            </div>
                        ))}

                        {showReplySection && (
                            <div className="flex gap-3 ml-16 my-3 min-w-[270px]">
                                <Input type="reply" placeholder="Add a reply" />
                                <Button>Add reply</Button>
                            </div>
                        )}
                    </div>
                );
            })}

            <DeleteAlertDialog
                open={isDeleteDialogOpen}
                close={() => setIsDeleteDialogOpen(false)}
                title={"Are you sure absolutely sure?"}
                description={"This action cannot be undone. This will permanently delete your posted discussion and its comments."}
            />
        </>
    );
};

export default CommentCard;
