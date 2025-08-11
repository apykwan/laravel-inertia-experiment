import { Link } from "@inertiajs/react"
import { useRoute } from '@vendor'

export default function Home({ posts }) {
  const route = useRoute()

  return (
      <div className="container w-[800px] mt-2">
          <div className="h-[400px] ">
              <div className="grid grid-cols-3 gap-4 line-clamp">
                  {posts?.data.map((post, idx) => (
                      <div
                          key={idx}
                          className="p-4 h-[150px] space-y-2 rounded-md shadow-md bg-zinc-50"
                      >
                          <div className="text-xs text-slate-300">
                              <span>Post on: </span>
                              <span>
                                  {new Date(
                                      post.created_at
                                  ).toLocaleTimeString()}
                              </span>
                          </div>
                          <p className="text-lg">{post.body}</p>

                          <Link
                              href={route("posts.show", post)}
                              className="text-amber-700 font-extrabold"
                          >
                              Read more...
                          </Link>
                      </div>
                  ))}
              </div>
          </div>
          <div className="mt-8 flex">
              {Array.isArray(posts?.links) &&
                  posts.links.map((link, idx) => {
                      // Determine the label to display
                      let displayLabel = link.label;
                      if (
                          typeof link.label === "string" &&
                          link.label.includes("Next")
                      ) {
                          displayLabel = "&gt;";
                      } else if (
                          typeof link.label === "string" &&
                          link.label.includes("Previous")
                      ) {
                          displayLabel = "&lt;";
                      }

                      if (link.url) {
                          return (
                              <Link
                                  key={`${link.label}-${idx}`}
                                  className={`flex items-center justify-center h-[40px] w-[40px] rounded-full font-bold shadow-md ${
                                      link.active
                                          ? "bg-amber-700 hover:bg-amber-600"
                                          : "bg-amber-400 hover:bg-amber-300"
                                  } text-slate-100 mx-2 p-2`}
                                  href={link.url}
                              >
                                  <span
                                      dangerouslySetInnerHTML={{
                                          __html: displayLabel,
                                      }}
                                  />
                              </Link>
                          );
                      } else {
                          return (
                              <span
                                  key={`${link.label}-${idx}`}
                                  className="mx-2 flex items-center justify-center h-[40px] w-[40px] rounded-full font-bold bg-zinc-200 text-slate-100"
                                  dangerouslySetInnerHTML={{
                                      __html: displayLabel,
                                  }}
                              />
                          );
                      }
                  })}
          </div>
      </div>
  );
}
