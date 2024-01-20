export default function PostPage({ params }) {
    // console.log("\nPARAMS:\n\t", params)
    return (
        <main>
            <h1>Single Post Page</h1>
            <p><span>Post id is {params.postId}</span></p>
        </main>
    )
}