import { Link } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import './NotFound.css'

export default function NotFound(){
    return(
       <Layout> 
        <div className="not-found center">
            <h1>Error 404</h1>
            <Link to='/' className="Winky">Return to site</Link>
        </div>
       </Layout>
    )
}