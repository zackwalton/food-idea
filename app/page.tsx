import Link from "next/link";

export default function Page() {
    return <div className="flex flex-col gap-12 font-sans items-center bg-white rounded-lg p-7">
        <p className="text-5xl m-4 rounded-lg"> Welcome to <span
            className={"text-blue-400 font-bold"}>TasteMate AI</span></p>
        <div className="flex flex-col gap-6">
            <div
                className={"flex flex-row items-center gap-5 transition ease-in delay-50 bg-blue-50 hover:bg-blue-100 p-2 px-3 rounded-full"}>
                <div className="w-14 h-14 rounded-full flex border-2 border-blue-200 justify-center items-center">
                    <p className={"font-bold text-xl"}>1</p>
                </div>
                <p className={"text-lg justify"}>Swipe on restaurants near you</p>
            </div>
            <div
                className={"flex flex-row items-center gap-5 transition ease-in delay-50 bg-blue-50 hover:bg-blue-100 p-2 px-3 rounded-full"}>
                <div className="w-14 h-14 rounded-full flex border-2 border-blue-200 justify-center items-center">
                    <p className={"font-bold text-xl"}>2</p>
                </div>
                <p className={"text-lg justify"}>Get a personalized local restaurant recommendation</p>
            </div>
            <div
                className={"flex flex-row items-center gap-5 transition ease-in delay-50 bg-blue-50 hover:bg-blue-100 p-2 px-3 rounded-full"}>
                <div className="w-14 h-14 rounded-full flex border-2 border-blue-200 justify-center items-center">
                    <p className={"font-bold text-xl"}>3</p>
                </div>
                <p className={"text-lg justify"}>Get a personalized link for directions to your restaurant!</p>
            </div>
        </div>

        <Link href={"/hungry"}
              className="flex flex-row items-center gap-2 font-bold text-lg text-black bg-white p-3 mt-5 border-2 border-black rounded-lg transition ease-in delay-50 hover:bg-blue-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
            </svg>

            Click here to start!
        </Link>

    </div>

}