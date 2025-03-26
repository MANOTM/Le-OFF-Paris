import Footer from '../footer/Footer'
import Loading from '../loading/Loading'


export default function Layout({ children }) {
    return (
        <>
            <div className="container">
                {children}
                <Footer/>
            </div>
            <Loading/>
        </>
    )
}
