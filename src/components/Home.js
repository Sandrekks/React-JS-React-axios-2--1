import {Link} from "react-router-dom"


function Home() {
    return(
        <>
        <h2>Home Component  <Link to={"/componentcontact"}>გადამისამართება  Contact-ში</Link></h2>

</>
    )
}

export default Home();