import Link from "next/link"

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <button className="btn btn-primary">BUTTON</button>
        <ul>
          <li><Link href="/" className="link link-info">Home</Link></li>
          <li><Link href="/about" className="link link-info">About</Link></li>
          <li><Link href="/about/contact" className="link link-info">Contact</Link></li>
        </ul>
    </div>
  )
}

export default HomePage;