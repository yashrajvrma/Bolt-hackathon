import { cn } from "@/lib/utils";
import { Avatar, AvatarImage } from "../../components/ui/avatar";

export interface TestimonialAuthor {
  name: string;
  handle: string;
  avatar: string;
}

export interface TestimonialCardProps {
  author: TestimonialAuthor;
  text: string;
  href?: string;
  className?: string;
}

export function TestimonialCard({
  author,
  text,
  href,
  className,
}: TestimonialCardProps) {
  const Card = href ? "a" : "div";

  return (
    // <Card
    //   {...(href ? { href } : {})}
    //   className={cn(
    //     "flex flex-col rounded-lg border-t",
    //     "bg-gradient-to-b from-muted/50 to-muted/10",
    //     "p-4 text-start sm:p-6",
    //     "hover:from-muted/60 hover:to-muted/20",
    //     "max-w-[320px] sm:max-w-[320px]",
    //     "transition-colors duration-300",
    //     className
    //   )}
    // >
    //   {" "}
    //   <div className="flex items-center gap-3">
    //     {" "}
    //     <Avatar className="h-12 w-12">
    //       {" "}
    //       <AvatarImage src={author.avatar} alt={author.name} />{" "}
    //     </Avatar>{" "}
    //     <div className="flex flex-col items-start">
    //       {" "}
    //       <h3 className="text-md font-semibold leading-none text-zinc-100">
    //         {" "}
    //         {author.name}{" "}
    //       </h3>{" "}
    //       <p className="text-sm text-muted-foreground">{author.handle}</p>{" "}
    //     </div>{" "}
    //   </div>{" "}
    //   <p className="sm:text-md mt-4 text-sm text-slate-300">{text}</p>{" "}
    // </Card>
    <Card
      {...(href ? { href } : {})}
      className={cn(
        "relative flex flex-col border border-transparent sm:min-w-[330px]",
        "bg-[#141414] pt-5 pb-3 px-5 text-start sm:p-6",
        "hover:bg-[#1a1a1a]",
        "sm:max-w-[330px] max-w-[250px] min-w-[250px]",
        "transition-colors duration-300",
        className
      )}
      target="blank"
    >
      {/* Glowing Top-Left Border with Border Radius */}
      <div className="absolute top-0 left-0 w-full h-full rounded-full border border-transparent">
        <div className="absolute top-0 left-0 w-1/2 h-[1px] bg-gradient-to-r from-zinc-500 to-transparent rounded-full" />
        <div className="absolute top-0 left-0 h-1/2 w-[1px] bg-gradient-to-b from-zinc-500 to-transparent rounded-full" />
      </div>

      <div className="flex items-center gap-y-3 gap-x-3">
        <Avatar className="h-12 w-12">
          <AvatarImage src={author.avatar} alt={author.name} />
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="sm:text-md text-sm font-semibold leading-none text-zinc-100">
            {author.name}
          </h3>
          <p className="sm:text-sm  text-xs text-muted-foreground">
            {author.handle}
          </p>
        </div>
      </div>

      <p className="sm:text-md mt-4 text-xs text-slate-300">{text}</p>
    </Card>
  );
}
