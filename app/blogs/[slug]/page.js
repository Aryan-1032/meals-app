export default function BlogPostPage({params}){
    return (
        <main>
            <h1>
                Blog Post by {params.slug}
            </h1>
        </main>
    )
}