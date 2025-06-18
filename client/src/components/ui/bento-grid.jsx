import { cn } from "../../utils/cn"

export const BentoGrid = ({ className, children }) => {
  return (
    <div className={cn("mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3", className)}>
      {children}
    </div>
  )
}

export const BentoGridItem = ({ className, title, description, header, icon }) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none hover:border-brand-beige dark:hover:border-brand-beige/30",
        className,
      )}
    >
      <div className="overflow-hidden rounded-lg">{header}</div>
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        <div className="flex items-center">
          <div className="p-1.5 rounded-md bg-neutral-100 dark:bg-neutral-800">{icon}</div>
          <div className="ml-2 h-px w-5 bg-neutral-200 dark:bg-neutral-700 group-hover/bento:w-10 group-hover/bento:bg-brand-peach transition-all duration-300"></div>
        </div>
        <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200 text-lg">{title}</div>
        <div className="font-sans text-sm font-normal text-neutral-500 dark:text-neutral-400">{description}</div>
      </div>
    </div>
  )
}
