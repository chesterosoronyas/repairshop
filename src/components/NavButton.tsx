import { LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";


import Link from "next/link";


type Props={
    icon:LucideIcon,
    label:String,
    href?:string
}

export function NavButton({
    icon: Icon,
    label,
    href,
}: Props) {
    return (
        <Button
            variant="ghost"
            size="icon"
            aria-label={label}
            title={label.toString()}
            className="rounded-full"
            asChild
        >
            {href ? (
                <Link href={href}>
                    <Icon />
                </Link>
            ) : (
                <Icon />
            )}
        </Button>
    )
}