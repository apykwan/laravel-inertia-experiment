export default function Show({ post }) {
  return (
      <div>
          <div
              className="flex flex-col justify-center items-center h-[350px] w-[350px] space-y-2 shadow-lg rounded-lg bg-zinc-100"
          >
              <div className="text-xs text-slate-300">
                  <span>Post On: </span>
                  <span>{new Date(post.created_at).toLocaleTimeString()}</span>
              </div>
              <p className="text-lg">{post.body}</p>
          </div>
      </div>
  );
}