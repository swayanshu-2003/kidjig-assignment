
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export function SheetDemo() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <button type="submit">Open</button>
            </SheetTrigger>
            <SheetContent>
                hello world
            </SheetContent>
        </Sheet>
    )
}
