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
import CardWithForm from "./components/Card";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Dialog, DialogTrigger } from "../ui/dialog";
import StartDiscussionDialog from "./components/dialogs/StartDiscussionDialog";
const CommunityPage = () => {
    return (
        <div className="mx-[10%] my-6">

            <div className="flex justify-between gap-10">
                <div className="flex gap-3">
                    <div className="relative">
                        <Search className="lucide lucide-search absolute left-2 top-2.5 h-4 w-4" />
                        <Input className="pl-8 w-[600px]" type="search" placeholder="search by category" />
                    </div>
                    <Select>
                        <SelectTrigger className="w-[180px]">
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
                <div className="flex items-center gap-2">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button >Start Discussion</Button>
                        </DialogTrigger>
                        <StartDiscussionDialog/>
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
                <h1 className="my-6 text-4xl font-semibold tracking-tight">
                    Recent Discussion
                </h1>

                <CardWithForm />
                <CardWithForm />
                <CardWithForm />
            </div>
        </div>
    )
}
export default CommunityPage