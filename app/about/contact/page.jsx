import Link from 'next/link';

const Contact = () => {
    return (
        <div>
            <h1>Contact</h1>
            <p>Phone 555-555-5555</p>
            <ul>
                <li><Link href="/" className="link link-info">Home</Link></li>
            </ul>
        </div>
    )
}

export default Contact;