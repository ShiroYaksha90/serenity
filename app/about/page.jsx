import Link from "next/link";

export const metadata = {
    title: 'About Serenity',
    description: '…',
    keywords: '…'
    }

const AboutPage = () => {
    return (
        <div>
          <h1>About Page</h1>
          <Link href="/" className="link link-info">Home</Link>
        </div>
    )
}

export default AboutPage;