import React, { useState } from "react";
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

import DeleteAlertDialog from "../alertdialog/DeleteAlertDialog";
import Dropdown from "../dropdown/Dropdown";

interface Props {
    name: string;
    reply: string;
}

const ReplyCard: React.FC<Props> = ({ name, reply }) => {
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    
    return (
        <Card className="flex flex-col xl:flex-row lg:flex-row p-3 mt-4 min-w-[250px] w-full">
            <div className="xl:w-4/5 lg:w-4/5">
                <CardHeader className="p-2">
                    <div className="flex justify-between">
                        <span className="flex">
                            <Avatar>
                                <AvatarImage src={`https://example.com/avatar/${name.toLowerCase()}.png`} alt={name} />
                                <AvatarFallback>{name[0]}</AvatarFallback>
                            </Avatar>
                            <span className="flex flex-col px-2 sm:px-4 py-2 gap-3 items-start">
                                <div className="flex justify-between w-[100%]">
                                    <CardTitle className="title-card-responsive">{name}</CardTitle>
                                    <span className="xl:hidden lg:hidden ">
                                        <Dropdown
                                            open={() => setIsDeleteDialogOpen(true)}
                                            label={"Action"}
                                            item1={"Edit Reply"}
                                            item2={"Delete Reply"}
                                            item3={"Report Reply"} />
                                    </span>
                                </div>
                                <CardDescription>{reply}</CardDescription>
                            </span>
                        </span>
                    </div>
                </CardHeader>
            </div>
            <div className="xl:w-1/5 lg:w-1/5 flex flex-col justify-start">
                <div className="flex justify-end hidden xl:flex lg:flex">
                    <Dropdown
                        open={() => setIsDeleteDialogOpen(true)}
                        label={"Action"}
                        item1={"Edit Reply"}
                        item2={"Delete Reply"}
                        item3={"Report Reply"} />
                </div>
            </div>
            <DeleteAlertDialog
                open={isDeleteDialogOpen}
                close={() => setIsDeleteDialogOpen(false)}
                title={"Are you sure absolutely sure?"}
                description={"This action cannot be undone. This will permanently delete your posted discussion and its comments."}
            />
        </Card>
    );
};

export default ReplyCard;
