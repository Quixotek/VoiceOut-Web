import { ChevronLeft, CornerUpRight, RefreshCw, Reply } from "lucide-react"
import { Button } from "../ui/button"
import CardDetails from "./components/CardDetail"
import { Input } from "../ui/input"
import CommentCard from "./components/CommentCard"
import { FC } from "react"
import { comments, threads } from "@/lib/dummydata"

interface Props {
    id: string
}
const CommunityDetails: FC<Props> = ({ id }) => {
    const thread = threads.find(thread => thread.id === id)
    const comment = comments.filter(comment => comment.threadid === id)

    console.log("comment" + comment)
    return (
        <main className="mx-[3%] xl:mx-[10%] lg:mx-[10%] my-6">
            <Button>
                <Reply className="mr-2 h-4 w-4" /> Back
            </Button>
            <h1 className="py-6 text-4xl font-semibold tracking-tight font-responsive min-w-[350px]">
                Discussion Thread
            </h1>
            <CardDetails threads={thread!!} />
            <div className="flex gap-3 min-w-[350px]">
                <Input type="comment" placeholder="Add a comment" />
                <Button>Add comment</Button>
            </div>
            <h1 className="py-6 text-3xl font-semibold tracking-tight title-card-responsive">
                Comments
            </h1>


            <CommentCard id={id} />

            <div className="flex justify-center min-w-[350px]">
                {comment.length === 0 ? (
                    <h1>No Comments</h1>
                ) : (
                    comment.length > 6 && (
                        <Button className="px-16">
                            <RefreshCw className="mr-2 h-4 w-4" /> Load more comments
                        </Button>
                    )
                )}
            </div>


        </main>
    )
}
export default CommunityDetails