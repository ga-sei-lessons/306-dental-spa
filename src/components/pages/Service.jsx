import { useParams } from "react-router-dom"
import NotFound from "../pages/NotFound"

export default function Service(props) {
    // use params gives us a big object back, we destructure what we want out of it
    const { id } = useParams()

    // match the id from the params to the idea in the props
    const foundService = props.services.find(service => service.id.toString() === id)
    console.log(foundService)

    // 404 if the url param is bad
    if (!foundService) {
        // return early so we never make it to the return down below
        return <NotFound />
    }

    return (
        <div>
            <h1>Details about {foundService.name}</h1>
    
            <p>${foundService.price}</p>

            <p>{foundService.description}</p>
        </div>
    )
}