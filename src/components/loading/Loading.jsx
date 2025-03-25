import Icon from "../icons/Icon";
import { motion } from "framer-motion"
import './Loading.css'

const Variants = {
    from: { top: '100vh' },
    to: { top: '-100vh', transition: { duration: 3, ease: [0.14, 1, 0.86, 0] } },
}

function Loading() {
    return (
        <motion.div className="loading-animation" variants={Variants} initial='from' exit='to' >
            <ParisAni />
            <div className="icons-middle ">
                {Array(5).fill(null).map((_, index) => (
                    <div key={index} className="svg-icon center border-r">
                        <Icon />
                    </div>
                ))}
            </div>
            <ParisAni />
        </motion.div>
    )
}

function ParisAni() {
    return (
        <div className="left-right">
            {Array(9).fill(null).map((_, index) => (
                <h1 className="border-r" key={index}>Paris</h1>
            ))}
        </div>
    )
}
export default Loading;