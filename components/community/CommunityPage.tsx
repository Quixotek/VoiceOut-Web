import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Search, Info } from 'lucide-react';
import { Button } from "../ui/button"
import CardThread from "./components/Card";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Dialog, DialogTrigger } from "../ui/dialog";
import StartDiscussionDialog from "./components/dialogs/StartDiscussionDialog";
import { users, threads } from "@/lib/dummydata";

const CommunityPage = () => {
    return (
        <main className=" mx-[3%] xl:mx-[10%] lg:mx-[10%] my-6">
            <div className="flex justify-between gap-5 lg:gap-10">
                <div className="flex gap-3 w-[100%]">
                    <div className="relative w-3/5 xl:w-4/5 lg:w-4/5">
                        <Search className="lucide lucide-search absolute left-2 top-2.5 h-4 w-4" />
                        <Input className="pl-8" type="search" placeholder="search by category" />
                    </div>
                    <div className=" w-2/5 lg:w-1/5 xl:w-1/5">
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
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button >Start Discussion</Button>
                        </DialogTrigger>
                        <StartDiscussionDialog />
                    </Dialog>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Info />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>You must have an account to start a discussion</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>
            <div className="">
                <h1 className="my-6 text-4xl font-semibold tracking-tight font-responsive">
                    Recent Discussion
                </h1>
                <div className="flex xl:hidden lg:hidden items-center justify-end gap-2">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button >Start Discussion</Button>
                        </DialogTrigger>
                        <StartDiscussionDialog />
                    </Dialog>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Info />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>You must have an account to start a discussion</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
                {users.map(user => (
                    threads.map((thread, index) => (
                        <CardThread
                            key={index}
                            title={thread.title}
                            description={thread.description}
                            type={thread.type}
                            views={thread.views}
                            replies={thread.replies}
                            id={thread.id}
                            userName={user.name}
                        />
                    ))
                ))}
            </div>


        </main>
    )
}
export default CommunityPage