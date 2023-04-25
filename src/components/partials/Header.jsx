// if we want an anchor to a url on this page (sitewide) we import link from react-router
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>

                <li>
                    <Link to="/services">See Our Services</Link>
                </li>
            </ul>
        </nav>
    )
}