import { useForm } from '@inertiajs/react'

export default function Create() {
  const { data, setData, post, errors, processing } = useForm({
    body: ""
  })

  function submit(e) {
    e.preventDefault()
  }


  return (
      <>
          {data.body}
          <div className="w-[500px] mx-auto mt-5">
              <form className="flex flex-col gap-3">
                  <textarea
                      className="p-3 text-xl resize-none bg-slate-100 focus:bg-slate-50 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-600 "
                      rows="12"
                      value={data.body}
                      onChange={(e) => setData("body", e.target.value)}
                  ></textarea>
                  <button className="bg-amber-700 text-slate-100 p-3 rounded-md mt-4 cursor-pointer hover:bg-amber-600 text-xl uppercase font-bold">
                      Create Post
                  </button>
              </form>
          </div>
      </>
  );
}