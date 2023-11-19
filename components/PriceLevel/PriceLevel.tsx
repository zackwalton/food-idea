import Price from "@/components/PriceLevel/Price";

interface Props {
    levelEnum: any
    className?: string
}

export default function PriceLevel({ levelEnum, className }: Props) {
    let level = 0;
    if (levelEnum == 'PRICE_LEVEL_INEXPENSIVE') {
        level = 1;
    } else if (levelEnum == 'PRICE_LEVEL_MODERATE') {
        level = 2;
    } else if (levelEnum == 'PRICE_LEVEL_EXPENSIVE') {
        level = 3;
    } else if (levelEnum == 'PRICE_LEVEL_VERY_EXPENSIVE') {
        level = 4;
    }
    if (level == 0) {
        return <></>
    }
    return <div className={className}>
        <div className={"flex flex-row flex-nowrap gap-1 items-center"}>
            <Price filled={level >= 1} />
            <Price filled={level >= 2} />
            <Price filled={level >= 3} />
            <Price filled={level >= 4} />
        </div>
    </div>
}