"use client"

// The cn function is a utility for conditionally joining classNames together
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ")
}

export const AuroraBackground = ({ className, children, showRadialGradient = true, ...props }) => {
  return (
    <div
      className={cn(
        "transition-bg relative flex min-h-screen flex-col items-center justify-center bg-zinc-50 text-slate-950 dark:bg-zinc-900",
        className,
      )}
      {...props}
    >
      {/* Ultra simplified aurora background for better performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={cn(
            "absolute -inset-[10px] opacity-15 blur-[25px]",
            showRadialGradient && `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]`,
          )}
          style={{
            background:
              "linear-gradient(120deg, rgba(240, 200, 136, 0.2), rgba(247, 175, 125, 0.2), rgba(126, 181, 151, 0.2))",
            backgroundSize: "200% 200%",
          }}
        />
      </div>
      {children}
    </div>
  )
}
