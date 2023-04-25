import { Link } from "react-router-dom"

export default function Services(props) {
    const serviceLinks = props.services.map(service => {
        return (
            <li key={`service-${service.id}`}>
                <Link to={`/services/${service.id}`}>{service.name}</Link>
            </li>
        )
    })
    return (
        <div>
            <h1>Services:</h1>

            <p>enjoy a dental health day</p>

            <ol>
                {serviceLinks}
            </ol>
        </div>
    )
}