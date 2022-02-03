import faker from "faker";
import { useEffect, useState } from "react";
import Story from "./Story";
import { useSession } from "next-auth/react"

function Stories() {
    const [Suggestion, setSuggestion] = useState([])
    const { data: session } = useSession();


    useEffect(() => {
        const Suggestion = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: 1,
        }))
        setSuggestion(Suggestion)
    }, []);


    return (
        <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-white">
            {session && (
                <Story img={session.user.image}
                    username={session.user.username} />
            )}
            {Suggestion.map((profile) => (
                <Story
                    key={profile.id}
                    img={profile.avatar}
                    username={profile.username} />
            ))}
        </div>)
}
export default Stories