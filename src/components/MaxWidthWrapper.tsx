import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children
}: {
  className?: string
  children: ReactNode
}) => {
  return (
    <div className={cn("mx-auto w-full max-w-screen-2xl md:px-[3rem]", className)}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper;