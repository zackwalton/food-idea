interface Props {
    className?: string
    children: React.ReactNode
}

export default function CardDisplay({ children, className}: Props) {
    return (
        <div className={"grid grid-cols-4 gap-4 items-start justify-center h-full max-w-[1000px] " + className}>
            {children}
        </div>
    )
}