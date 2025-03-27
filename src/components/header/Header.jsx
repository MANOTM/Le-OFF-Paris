import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import './Header.css'
import Icon from '../icons/Icon'
import Wave from "../svgs/Wave";
import Insta from "../svgs/Insta";
import { useState } from "react";



export default function Header() {
    const [HeaderToggle, setHeaderToggle] = useState(false)
    const HandleHeader = () => {
        setHeaderToggle(!HeaderToggle)
    }

    return (
        <div className="header">
            <div className="Main-Header">
                <div>
                    <NavLink to='/'> <Icon fill="#ff2e1e" /> </NavLink>
                    <button onClick={HandleHeader} className="menu border-r Winky f-900">Menu</button>
                </div>
            </div>
            <AnimatePresence mode="wait">
                {HeaderToggle && <HeaderWrepper HandleHeader={HandleHeader} />}
            </AnimatePresence>
        </div>
    )
}

//animaton variables
const MainAnimation = {
    animation: { top: 0, transition: { duration: .5, ease: [0.61, 1, 0.87, 1] } },
    out: { top: '-100vh', transition: { delay: .3 } }
}
const LinkAnimation = {
    from: { y: 90 },
    to: { y: 0, transition: { ease: 'linear', duration: .2, delay: .1 } },
    out: { y: 130, opacity: 0 }
}
const ImgAnimation = {
    from: { opacity: 0, y: 150 },
    to: { opacity: 1, y: 0, transition: { delay: .4, ease: [.455, .03, .515, .955] } },
    out: { y: 100, opacity: 0, transition: { duration: .5 } }
}
//Menu component
function HeaderWrepper({ HandleHeader }) {

    const removeHeaderToggle = () => {
        setTimeout(() => {
            HandleHeader()
        }, 1300)
    }

    return (
        <motion.div className="header-wrapper" variants={MainAnimation} animate='animation' exit='out'>
            <div className="rolative">
                
                <motion.div className="sous-header" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: .3 } }} exit={{ y: 20, opacity: 0 }}>
                    <NavLink to='/' onClick={removeHeaderToggle}> <Icon fill="#fff" /> </NavLink>
                    <button className="fermer" onClick={HandleHeader}>  <span className="f-900 Winky">Fermer </span> <span className="f-900 Winky">x</span></button>
                </motion.div>
                <motion.div className="navLink">
                    <NavLink to='/a-propos'>
                        <motion.span onClick={removeHeaderToggle} variants={LinkAnimation} initial='from' animate='to' exit='out'>À propos</motion.span>
                    </NavLink>
                    <NavLink to='/restos'>
                        <motion.span onClick={removeHeaderToggle} variants={LinkAnimation} initial='from' animate='to' exit='out'>Restos & Coffe</motion.span>
                    </NavLink>
                    <NavLink to='/cart'>
                        <motion.span onClick={removeHeaderToggle} variants={LinkAnimation} initial='from' animate='to' exit='out'>Carte</motion.span>
                    </NavLink> 
                </motion.div>

                <motion.div initial={{ top: '-30rem', left: '-15rem', opacity: 0 }} animate={{ top: '-27rem', left: '-10rem', opacity: 1, transition: { delay: .3 } }} className="top"><Wave fill="#fc87f6" /></motion.div>
                <div className="buttom"><Wave fill="#fc87f6" /></div>
                <div className="right"><Wave fill="#fc87f6" /></div>
                <motion.img variants={ImgAnimation} initial='from' animate='to' exit='out' src="https://cdn.sanity.io/images/wwxezq1v/production/01e65dc649ebeb82abc8ddcbbae34f8b9e7a11fb-1500x1356.png?bg=0fff&w=842&q=80&fit=fill&auto=format" />
                <motion.div className="insta" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { delay: .5, duration: .5, ease: [0.932, 0.017, 0.12, 1.016] } }} exit={{ opacity: 0, y: 20 }}>
                    <a href="https://www.instagram.com/leoff_paris/"><Insta fill="#fff" /></a>
                    <p className="Winky f-900">Le OFF est une initiative portée par Wine Paris & Vinexpo Paris, le premier événement professionnel des vins et spiritueux.</p>
                </motion.div>

            </div>
        </motion.div>
    )
}