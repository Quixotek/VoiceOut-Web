import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Heart, Newspaper } from 'lucide-react';
import Dropdown from "../dropdown/Dropdown";
import DeleteAlertDialog from "../alertdialog/DeleteAlertDialog";

export interface Thread {
    userid: string;
    id: string;
    title: string;
    description: string;
    type: string;
    views: number;
    replies: number;
    reacts: number;
}

interface Props {
    threads: Thread;
}

const CardDetails: React.FC<Props> = ({ threads }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

    const openDeleteDialog = () => setIsDeleteDialogOpen(true);
    const closeDeleteDialog = () => setIsDeleteDialogOpen(false);

    const handleLikeClick = () => setIsLiked(!isLiked);

    return (
        <Card className="flex flex-col xl:flex-row lg:flex-row mb-6 min-w-[350px]">
            <div className="xl:w-3/5 lg:w-3/5">
                <CardHeader>
                    <div className="flex justify-between">
                        <span className="flex gap-3 items-start">
                            <CardTitle className="title-card-responsive">{threads.title}</CardTitle>
                            <Badge>{threads.type}</Badge>
                        </span>
                        <span className="flex xl:hidden lg:hidden ">
                            <Dropdown
                                open={openDeleteDialog}
                                label={"Action"}
                                item1={"Edit Discussion"}
                                item2={"Delete Discussion"}
                                item3={"Report Discussion"} />
                        </span>
                    </div>
                    <CardDescription className="p-responsive">{threads.description}</CardDescription>
                </CardHeader>
            </div>
            <div className="xl:w-2/5 lg:w-2/5 flex lg:flex-col xl:flex-col justify-between p-6">
                <div className="flex justify-end items-center gap-3">
                    <span className="flex gap-2 items-center">
                        <Eye color=" #94A3B8" />
                        <p className="p-responsive">{threads.views} views</p>
                    </span>
                    <span className="flex gap-2 items-center">
                        <Newspaper color=" #94A3B8" />
                        <p className="p-responsive">{threads.replies} replies</p>
                    </span>
                    <Dropdown
                        open={openDeleteDialog}
                        label={"Action"}
                        item1={"Edit Discussion"}
                        item2={"Delete Discussion"}
                        item3={"Report Discussion"} />
                </div>
                <div>
                    <span className="flex justify-end items-center gap-2 mt-2" onClick={handleLikeClick}>
                        <Heart color={isLiked ? "#94A3B8" : "#BA0000"} />
                        <p className="p-responsive">{threads.reacts} react</p>
                    </span>
                </div>
            </div>
            <DeleteAlertDialog
                open={isDeleteDialogOpen}
                close={closeDeleteDialog}
                title={"Are you sure absolutely sure?"}
                description={"This action cannot be undone. This will permanently delete your posted discussion and its comments."}
            />
        </Card>
    );
};

export default CardDetails;
