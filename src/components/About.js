import {Link} from "react-router-dom"


function About() {
    return(
        <h2>about Component   <Link to={"/componentHome"}>გადამისამართება Home-ში</Link></h2>
    )
}

export default About();