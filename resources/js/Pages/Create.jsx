import { useForm } from '@inertiajs/react'
import { toast } from "react-toastify"

export default function Create() {
  const { data, setData, post, errors, processing } = useForm({
    body: ""
  })

  function submit(e) {
    e.preventDefault() 
    if (data.body.length === 0) {
      return toast("Cannot send an empty post!!");
    }
    post('/posts')
  }

  console.log(errors.body)
  return (
      <>
        <div className="w-[500px] mx-auto mt-5">
          <form className="flex flex-col gap-3" onSubmit={submit}>
            <textarea
                className="p-5 text-xl resize-none bg-slate-100 focus:bg-slate-50 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-600 shadow-md"
                rows="12"
                value={data.body}
                placeholder="Enter your post..."
                onChange={(e) => setData("body", e.target.value)}
            ></textarea>

            {errors.body && <p className="text-pink-700">{errors.body}</p>}
            <button 
              className="bg-amber-700 text-slate-100 p-3 rounded-md mt-4 cursor-pointer hover:bg-amber-600 text-xl uppercase font-bold shadow-md"
              disabled={processing} 
            >
                Create Post
            </button>
          </form>
        </div>
      </>
  );
}