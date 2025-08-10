import { Link } from "@inertiajs/react";

export default function Home({ posts }) {
  return (
      <div className="container w-[800px] mt-2">
          <div className="grid grid-cols-3 gap-3 line-clamp">
              {posts?.data.map((post, idx) => (
                  <div
                      key={idx}
                      className="p-4 h-[150px]"
                      style={{ boxShadow: "0 1px 2px 0 rgba(180, 83, 9, 0.5)" }}
                  >
                      <div className="text-xs text-slate-300">
                          <span>Post At: </span>
                          <span>
                              {new Date(post.created_at).toLocaleTimeString()}
                          </span>
                      </div>
                      <p className="text-lg">{post.body}</p>
                  </div>
              ))}
          </div>

          <div className="mt-8">
              {Array.isArray(posts?.links) &&
                  posts.links.map((link, idx) =>
                      link.url ? (
                          <Link
                              key={`${link.label}-${idx}`}
                              className={`rounded-md ${
                                  link.active
                                      ? "bg-amber-700 hover:bg-amber-600"
                                      : "bg-amber-400 hover:bg-amber-300"
                              } text-slate-100 mx-2 p-2`}
                              href={link.url}
                          >
                              <span
                                  dangerouslySetInnerHTML={{
                                      __html: link.label,
                                  }}
                              />
                          </Link>
                      ) : (
                          <span
                              key={`${link.label}-${idx}`}
                              className="rounded-md bg-gray-400 mx-2 p-2 text-slate-100"
                              dangerouslySetInnerHTML={{ __html: link.label }}
                          />
                      )
                  )}
          </div>
      </div>
  );
}
