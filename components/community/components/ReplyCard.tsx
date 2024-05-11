import * as React from "react"

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
import { EllipsisVertical, CircleX, SquarePen, Info, } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";
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
import DeleteAlertDialog from "./alertdialog/DeleteAlertDialog";
interface Props {
    name: string
    reply: string
}
const ReplyCard: React.FC<Props> = ({ name, reply }) => {
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = React.useState(false);
    const openDeleteDialog = () => {
        setIsDeleteDialogOpen(true);
    };
    const closeDeleteDialog = () => {
        setIsDeleteDialogOpen(false);
    };

    return (
        <div >
            <Card className="flex flex-col xl:flex-row lg:flex-row p-3 mt-4 min-w-[250px]">

                <div className="xl:w-4/5 lg:w-4/5">
                    <CardHeader className="p-2">
                        <div className="flex justify-between">
                            <span>
                                <Avatar>
                                    <AvatarImage src={`https://example.com/avatar/${name.toLowerCase()}.png`} alt={name} />
                                    <AvatarFallback>{name[0]}</AvatarFallback>
                                </Avatar>
                            </span>
                            <span className="flex flex-col px-2 sm:px-4 py-2 gap-3 items-start">
                                <div className="flex justify-between w-[100%]">
                                    <CardTitle className="title-card-responsive">{name}</CardTitle>
                                    <span className="xl:hidden lg:hidden ">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" className="h-8 w-8 p-0">
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

                                <CardDescription>{reply}</CardDescription>

                            </span>

                        </div>
                    </CardHeader>
                </div>
                <div className="xl:w-1/5 lg:w-1/5 flex flex-col justify-start">
                    <div className="flex justify-end hidden xl:flex lg:flex">
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
        </div>

    )
}
export default ReplyCard