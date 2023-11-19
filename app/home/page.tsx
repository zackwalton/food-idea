import Link from "next/link";

export default function Page() {
    return <div className="flex flex-col gap-12 font-sans items-center bg-white rounded-lg p-7">
        <p className="text-5xl m-4 rounded-lg"> Welcome to <span className={"text-blue-400 font-bold"}>TasteMate AI</span> </p>
        <div className="flex flex-col gap-6">
            <div className={"flex flex-row items-center gap-5 transition ease-in delay-50 bg-blue-50 hover:bg-blue-100 p-2 px-3 rounded-full"}>
                <div className="w-14 h-14 rounded-full flex border-2 border-blue-200 justify-center items-center">
                    <p className={"font-bold text-xl"}>1</p>
                </div>
                <p className={"text-lg justify"}>Swipe on restaurants near you</p>
            </div>
            <div className={"flex flex-row items-center gap-5 transition ease-in delay-50 bg-blue-50 hover:bg-blue-100 p-2 px-3 rounded-full"}>
                <div className="w-14 h-14 rounded-full flex border-2 border-blue-200 justify-center items-center">
                    <p className={"font-bold text-xl"}>2</p>
                </div>
                <p className={"text-lg justify"}>Get a personalized local restaurant recommendation</p>
            </div>
            <div className={"flex flex-row items-center gap-5 transition ease-in delay-50 bg-blue-50 hover:bg-blue-100 p-2 px-3 rounded-full"}>
                <div className="w-14 h-14 rounded-full flex border-2 border-blue-200 justify-center items-center">
                    <p className={"font-bold text-xl"}>3</p>
                </div>
                <p className={"text-lg justify"}>Get a personalized link for directions to your restaurant!</p>
            </div>
        </div>

        <Link href="/"
              className="flex flex-row items-center gap-2 font-bold text-lg text-black bg-white p-3 mt-5 border-2 border-black rounded-lg transition ease-in delay-50 hover:bg-blue-300">
            Click here to start!
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>


        </Link>

    </div>

}