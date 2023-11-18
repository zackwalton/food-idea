import { prisma } from "@/lib/prisma";

export default async function Page() {
    const users = await prisma.user.findMany()  // get all users from database

    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>
                    <h1>{user.name}</h1>
                </div>
            ))}
        </div>
    )
}