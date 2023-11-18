import Link from "next/link";

interface Params {
    title: string
    url: string
    image?: string
    disabled?: boolean
}

export default function Button(params: Params) {
    return <button>Click me</button>
}