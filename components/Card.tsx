import Link from "next/link";

interface Params {
    title: string
    url: string
    image?: string
    disabled?: boolean
}

export default function Card(params: Params) {
    return <Link href={params.url} className={"transition ease-in-out delay-50 border-2 border-gray-800 text-gray-400 rounded-lg aspect-square h-[200px] p-5 " +
        "hover:bg-gray-900 hover:border-blue-800 hover:text-blue-400"}>
        <p className={"text-lg font-bold"}>{params.title}</p>
    </Link>
}