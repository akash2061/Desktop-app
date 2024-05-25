import { ComponentProps, forwardRef } from "react"
import { twMerge } from "tailwind-merge"

export const RootLayout = ({ className, children, ...props }: ComponentProps<'main'>) => {
    return <main className={twMerge('flex flow-row h-screen', className)} {...props}>
        {children}
    </main>
}

export const Sidebar = ({ className, children, ...props }: ComponentProps<'aside'>) => {
    return (
        <aside className={twMerge('w-[250px] mt-10 h-[100vh + 10px] overflow-auto', className)}{...props}>
            <div className={twMerge('flex justify-center italic', className)}>
                <span className="text-gray-400">Organizing ideas made easy. 🚀</span>
            </div>
            {children}
        </aside>
    )
}

export const Content = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
    ({ children, className, ...props }, ref) => (
        <div ref={ref} className={twMerge('flex-1 overflow-auto', className)} {...props}>
            {children}
        </div>
    )
)

Content.displayName = 'Content'