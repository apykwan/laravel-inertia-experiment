import { useForm } from '@inertiajs/react'
import { DeleteOutlined } from "@ant-design/icons";
import { useRoute } from "@vendor";


export default function Show({ post }) {
    const { delete: destroy } = useForm()
    const route = useRoute()

    function submit(e) {
      e.preventDefault()
      destroy(route('posts.destroy', post))
    }

    return (
      <div className="w-[800px] items-center flex justify-center gap-x-8">
          <div className="flex flex-col justify-center items-center h-[400px] w-[400px] space-y-2 shadow-lg rounded-lg bg-zinc-100">
              <div className="text-xs text-slate-300">
                  <span>Post On: </span>
                  <span>
                      {new Date(post.created_at).toLocaleTimeString()}
                  </span>
              </div>
              <p className="text-lg">{post.body}</p>
          </div>
          <form onSubmit={submit}>
              <button className="bg-pink-800 hover:bg-pink-700 hover:transform hover:-translate-y-1 cursor-pointer rounded-full shadow-lg h-[60px] w-[60px] flex justify-center items-center text-white">
                  <DeleteOutlined style={{ fontSize: "24px" }} />
              </button>
          </form>
      </div>
    );
}
