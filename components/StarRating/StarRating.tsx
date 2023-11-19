import Star from "@/components/StarRating/Star";

interface Props {
    rating: number
    className?: string
}

export default function StarRating({ rating, className }: Props) {
    return <div className={className}>
        <div className={"flex flex-row flex-nowrap gap-1 items-center"}>
            <Star filled={rating >= 1} />
            <Star filled={rating >= 2} />
            <Star filled={rating >= 3} />
            <Star filled={rating >= 4} />
            <Star filled={rating >= 5} />
        </div>
    </div>
}