import { Link } from '@inertiajs/react'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col justify-center items-center w-full">
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
  )
}