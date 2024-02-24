import Link from "next/link";

const Header = () => {
    return (
        <div className="navbar bg-indigo-500">
  <div className="flex-1">
    <Link href="/" className="btn btn-ghost text-xl">Serenity</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link href="/about">About</Link></li>
      <li><Link href="/about/contact">Contact</Link></li>
      <li><Link href="/githubusers">GitHub Users</Link></li>
      
    </ul>
  </div>
</div>
    )
}

export default Header;