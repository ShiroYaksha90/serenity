import Link from "next/link";

export const metadata = {
    title: 'About Serenity',
    description: '…',
    keywords: '…'
    }

const AboutPage = () => {
    return (
        <div>
          <h1 className="font-semibold">Serenity</h1>
          <p>Is a project that allow users to add desired books to the list and also delete books.</p>
        </div>
    )
}

export default AboutPage;