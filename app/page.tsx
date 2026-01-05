// ============================================
// LANDING PAGE
// Update the links and bio below with your info
// ============================================

// Substack RSS feed URL
const SUBSTACK_RSS_URL = "https://howtheworldworks.substack.com/feed";

// Fetch and parse posts from Substack RSS feed
async function getPosts() {
  try {
    const response = await fetch(SUBSTACK_RSS_URL, {
      // Revalidate every 5 minutes (300 seconds)
      // Posts will auto-update within 5 minutes of publishing
      next: { revalidate: 300 },
    });

    const xml = await response.text();

    // Simple RSS parsing - extract items from the feed
    const items: { title: string; date: string; url: string }[] = [];
    const itemMatches = xml.match(/<item>([\s\S]*?)<\/item>/g) || [];

    for (const item of itemMatches.slice(0, 10)) {
      // Get latest 10 posts
      const title = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1]
                 || item.match(/<title>(.*?)<\/title>/)?.[1]
                 || "";
      const url = item.match(/<link>(.*?)<\/link>/)?.[1] || "";
      const pubDate = item.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] || "";

      // Format date nicely
      const date = pubDate
        ? new Date(pubDate).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })
        : "";

      if (title && url) {
        items.push({ title, date, url });
      }
    }

    return items;
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return [];
  }
}

export default async function Home() {
  // Fetch posts from Substack RSS - happens on server, auto-cached
  const posts = await getPosts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-12">
      {/* Container with max width for readability */}
      <div className="w-full max-w-md">

        {/* Name */}
        <h1 className="text-3xl font-semibold tracking-tight text-center">
          Ashray Malhotra
        </h1>

        {/* One-liner bio */}
        <p className="mt-3 text-lg text-neutral-600 text-center">
          GenAI@Adobe. ex-CEO, Co-founder at Rephrase.ai (acquired by Adobe). All views are personal.
        </p>

        {/* Social links */}
        <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-neutral-500">
          <a
            href="https://x.com/ashray_malhotra"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.linkedin.com/in/ashraymalhotra"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

        {/* Subscribe form - Substack embed */}
        <div className="mt-10">
          <iframe
            src="https://howtheworldworks.substack.com/embed"
            width="100%"
            height="150"
            style={{ border: "none", background: "transparent" }}
            frameBorder="0"
            scrolling="no"
          />
        </div>

        {/* Writing section - auto-populated from Substack RSS */}
        <div className="mt-10">
          <h2 className="text-sm font-medium text-neutral-400 uppercase tracking-wide">
            Writing
          </h2>

          <ul className="mt-4 space-y-4">
            {posts.map((post) => (
              <li key={post.url}>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <span className="text-neutral-900 group-hover:text-neutral-600">
                    {post.title}
                  </span>
                  <span className="ml-2 text-sm text-neutral-400">
                    {post.date}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* Link to full archive */}
          <a
            href="https://howtheworldworks.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block text-sm text-neutral-500 hover:text-neutral-700"
          >
            View all posts →
          </a>
        </div>

      </div>
    </main>
  );
}
