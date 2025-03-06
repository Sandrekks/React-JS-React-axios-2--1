import {Link} from "react-router-dom"


function Contact() {
    return(
        <>

    
        <h2>Contact Component  <Link to={"/componentAbout"}>გადამისამართება About-ში</Link></h2>
       
        </>
    )
}

export default Contact();