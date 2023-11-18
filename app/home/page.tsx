import Link from "next/link";

export default function Page() {
    return <div className= "flex flex-col gap-8 font-sans items-start">
        <p className="text-4xl m-4"> Welcome to TasteMate </p> 
        <div className={"flex flex-row items-center gap-5"}>
            <div className="w-14 h-14 rounded-full flex border-2 border-white justify-center items-center">
                <p className={"font-bold text-xl"}>1</p>
            </div>
            <p className={"text-lg justify"}>Swipe right on the foods you like</p>
        </div>
        <div className={"flex flex-row items-center gap-5"}>
            <div className="w-14 h-14 rounded-full flex border-2 border-white justify-center items-center">
                <p className={"font-bold text-xl"}>2</p>
            </div>
            <p className={"text-lg justify"}>Get a restaurant recommendation based on your preferences</p>
        </div>
        <Link href="/" className="flex flex-row items-center gap-2 font-bold text-lg text-black bg-white p-3 mt-5 border-2 border-black rounded-md">
        Get started girl!
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
            </svg>
            
        </Link>
        
    </div>

} 