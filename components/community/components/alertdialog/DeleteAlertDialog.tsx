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
import { Button } from "@/components/ui/button"
import { FC } from "react"

interface Props {
    title: string
    description: string

}
const DeleteAlertDialog: FC<Props> = ({ title, description }) => {
    return (

        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>{title}</AlertDialogTitle>
                <AlertDialogDescription>
                    {description}
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
        //  <AlertDialog open={isDeleteDialogOpen}>
        //  <AlertDialogContent>
        //      <AlertDialogHeader>
        //          <AlertDialogTitle>Are you sure absolutely sure?</AlertDialogTitle>
        //          <AlertDialogDescription>
        //              This action cannot be undone. This will permanently delete your posted discussion and its comments.
        //          </AlertDialogDescription>
        //      </AlertDialogHeader>
        //      <AlertDialogFooter>
        //          <AlertDialogCancel onClick={closeDeleteDialog}>Cancel</AlertDialogCancel>
        //          <AlertDialogAction>Continue</AlertDialogAction>
        //      </AlertDialogFooter>
        //  </AlertDialogContent>
        // </AlertDialog>
    )
}
export default DeleteAlertDialog