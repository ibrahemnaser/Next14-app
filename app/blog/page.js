// ---------------- components ------------- //
import Link from "@/components/global/Link";

export default function BlogPage() {
    return (
        <main>
            <h1>Blog Page</h1>
            <Link label='post one' href='/blog/post-1' />
            <Link label='post two' href='/blog/post-2' />
            <Link label='post three' href='/blog/post-3' />
        </main>
    )
}