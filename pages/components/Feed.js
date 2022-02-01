import Stories from "./Stories"
import Posts from "./Posts";
import MiniProfile from "./MiniProfile";
import Suggestions from "./Suggestions";

function Feed() {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
            <section className="col-span-2">

                {/* Stories */}
                <Stories />
                {/* Posts */}
                <Posts />

            </section>


            <section className="hidden xl:inline md:col-span-1">

                {/* mini-profile */}
                <MiniProfile />
                {/* Suggestion */}
                <Suggestions />

            </section>
        </main>
    )
}
export default Feed;