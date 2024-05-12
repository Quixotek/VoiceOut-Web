import React from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from 'lucide-react';
import CardThread from "./components/cards/Card";
import StartDiscussionDialog from "./components/dialogs/StartDiscussionDialog";
import { threads } from "@/lib/dummydata";
import ToolTip from "../common/ToolTip";

const CommunityPage = () => {
    return (
        <main className="mx-[3%] xl:mx-[10%] lg:mx-[10%] my-6">
            <div className="flex justify-between gap-5 lg:gap-10">
                <div className="flex gap-3 w-full min-w-[350px]">
                    <div className="relative w-3/5 xl:w-4/5 lg:w-4/5">
                        <Search className="lucide lucide-search absolute left-2 top-2.5 h-4 w-4" />
                        <Input className="pl-8" type="search" placeholder="Search by category" />
                    </div>
                    <div className="w-2/5 lg:w-1/5 xl:w-1/5">
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Filters" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>None</SelectLabel>
                                    <SelectItem value="noah">Noah</SelectItem>
                                    <SelectItem value="panget">Panget</SelectItem>
                                    <SelectItem value="bakla">Bakla</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="hidden xl:flex lg:flex items-center gap-2">
                    <StartDiscussionDialog />
                    <ToolTip content="You must have an account to start a discussion" />
                </div>
            </div>
            <div className="mt-6">
                <div className="min-w-[350px]">
                    <h1 className="my-6 text-4xl font-semibold tracking-tight">Recent Discussions</h1>
                    <div className="flex xl:hidden lg:hidden items-center justify-end gap-2">
                        <StartDiscussionDialog />
                        <ToolTip content="You must have an account to start a discussion" />
                    </div>
                </div>
                {threads.map((thread, index) => (
                    <CardThread
                        key={index}
                        title={thread.title}
                        description={thread.description}
                        type={thread.type}
                        views={thread.views}
                        replies={thread.replies}
                        id={thread.id}
                    />
                ))}
            </div>
        </main>
    );
};

export default CommunityPage;
