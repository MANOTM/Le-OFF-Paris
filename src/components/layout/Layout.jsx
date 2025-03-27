import Footer from '../footer/Footer'
import Header from '../header/Header'
import Loading from '../loading/Loading'
import { motion } from 'framer-motion'


export default function Layout({ children }) {
    return (
        <>
            <motion.div exit={{ opacity: 0, transition: { duration: 1, delay: 2 } }} className="container">
                <Header />
                {children}
                <Footer />
            </motion.div>
            <Loading />
        </>
    )
}
