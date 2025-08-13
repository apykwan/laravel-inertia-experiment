import { Link, Head, usePage } from '@inertiajs/react'
import { ToastContainer } from "react-toastify"

export default function Layout({ children }) {
  const { component, props } = usePage()

  function generateTitle() {
    if (component === 'Show') return `Post#${props.post.id}`
    if (component === "Edit") return `Edit Post#${props.post.id}`;
    return component
  }

  return (
      <div className="flex flex-col justify-center items-center w-full">
          <Head title={generateTitle()} />
          <ToastContainer position="top-right" autoClose={2000} />
          <header className="flex mb-5 p-8 bg-amber-700 w-full text-slate-100">
              <nav className="space-x-5 uppercase font-extrabold">
                  <Link className="nav-link" href="/">
                      Home
                  </Link>
                  <Link className="nav-link" href="/posts/create">
                      Create
                  </Link>
              </nav>
          </header>
          <main>{children}</main>
      </div>
  );
}