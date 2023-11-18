import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function RootLayout({ children, } : { children: React.ReactNode }) {
    const session = await getServerSession();

    if (!session) {
        redirect("/api/auth/signin");  // redirect to sign-in page
    }

    return (
        <div className="flex flex-col items-center justify-center h-full">
            {children}
        </div>
    )
}