import React, { FC } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { EllipsisVertical, CircleX, Info, SquarePen } from 'lucide-react';

interface Props {
    label: string;
    item1: string;
    item2: string;
    item3: string;
    open: () => void;
}

const Dropdown: FC<Props> = ({ label, item1, item2, item3, open }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                    <EllipsisVertical className="hidden xl:flex lg:flex h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>{label}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <SquarePen className="mr-2 h-4 w-4" />
                    <span>{item1}</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={open}>
                    <CircleX className="mr-2 h-4 w-4" />
                    <span>{item2}</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Info className="mr-2 h-4 w-4" />
                    <span>{item3}</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default Dropdown;
