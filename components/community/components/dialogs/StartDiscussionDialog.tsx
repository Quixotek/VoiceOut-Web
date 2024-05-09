import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
export function StartDiscussionDialog() {
    return (
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Start a Discussion</DialogTitle>
                <Separator />
                <DialogDescription>
                    Panget N. Noah
                </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
                <div className=" items-center gap-4">
                    <Label htmlFor="type" className="text-right">
                        Type
                    </Label>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Type" />
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
                <div className="items-center gap-4">
                    <Label htmlFor="title" className="text-right">
                        Title
                    </Label>
                    <Input
                        id="title"
                        className="col-span-3"
                        placeholder="Title"
                    />
                </div>
                <div className="items-center gap-4">
                    <Label htmlFor="title" className="text-right">
                        Description
                    </Label>
                    <Textarea
                        placeholder="Description"
                        className="resize-none"
                        
                    />
                </div>
            </div>
            <DialogFooter>
                <Button type="submit">Create Post</Button>
            </DialogFooter>
        </DialogContent>

    )
}
export default StartDiscussionDialog
