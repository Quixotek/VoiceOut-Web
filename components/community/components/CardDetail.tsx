import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
} from "@/components/ui/alert-dialog";
import { EllipsisVertical, Eye, Heart, Newspaper , CircleX, SquarePen, Info,} from 'lucide-react';
import Link from "next/link";
import DeleteAlertDialog from "./alertdialog/DeleteAlertDialog";

const CardDetails = () => {
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

    return (
        <Card className="flex flex-col xl:flex-row lg:flex-row mb-6">
            <div className="xl:w-3/5 lg:w-3/5">
                <CardHeader >
                    <div className="flex justify-between">
                        <span className="flex gap-3 items-start">
                            <CardTitle className="title-card-responsive">Gender Bias in the Workplace</CardTitle>
                            <Badge>Gender</Badge>
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
                    <CardDescription className="p-responsive">This forum discussion focuses on experiences of gender discrimination in professional settings. Participants share anecdotes, offer support, and discuss strategies for addressing bias in hiring, promotions, and everyday interactions.</CardDescription>
                </CardHeader>
            </div>
            <div className="xl:w-2/5 lg:w-2/5 flex lg:flex-col xl:flex-col justify-between p-6">
                <div className="flex justify-end items-center gap-3">
                    <span className="flex gap-2 items-center">
                        <Eye color=" #94A3B8" />
                        <p className="p-responsive">40.1 k views</p>
                    </span>
                    <span className="flex gap-2 items-center">
                        <Newspaper color=" #94A3B8" />
                        <p className="p-responsive">1.5 k replies</p>
                    </span>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <EllipsisVertical className="hidden xl:flex lg:flex h-4 w-4" />
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
                <div>
                    <span className="flex justify-end items-center gap-2" onClick={handleLikeClick}>
                        <Heart color={isLiked ? "#94A3B8" : "#BA0000"} />
                        <p className="p-responsive">{isLiked ? '204' : '203'} react</p>
                    </span>
                </div>
            </div>
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
        </Card>
    )
}

export default CardDetails;
