import { ChevronLeft, CornerUpRight, RefreshCw, Reply } from "lucide-react"
import { Button } from "../ui/button"
import CardDetails from "./components/CardDetail"
import { Input } from "../ui/input"
import CommentCard from "./components/CommentCard"
import { FC } from "react"

interface Props {
    id: string
}
const CommunityDetails : FC<Props> = ({id}) => {
    return (
        <div className="mx-[10%] my-6">
            <Button>
                <Reply className="mr-2 h-4 w-4" /> Back
            </Button>
            <h1 className="py-6 text-4xl font-semibold tracking-tight">
                Discussion Thread
            </h1>
            <CardDetails />
            <div className="flex gap-3">
                <Input type="comment" placeholder="Add a comment" />
                <Button>Add comment</Button>
            </div>
            <h1 className="py-6 text-3xl font-semibold tracking-tight">
                Comments
            </h1>

            <CommentCard />
            <div className="flex justify-center">
                <Button className="px-16">
                    <RefreshCw className="mr-2 h-4 w-4" /> Load more comments
                </Button>
            </div>

        </div>
    )
}
export default CommunityDetails