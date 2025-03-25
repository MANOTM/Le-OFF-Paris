import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
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
                    <button onClick={HandleHeader} className="menu border-r">Menu</button>
                </div>
            </div>
            {HeaderToggle && <HeaderWrepper HandleHeader={HandleHeader} />}
        </div>
    )
}
function HeaderWrepper({ HandleHeader }) {
    return (
        <motion.div className="header-wrapper" animate={{ top: 0, transition: { duration: .5, ease: [0.61, 1, 0.87, 1] } }}>
            <div className="rolative">
                <motion.div className="sous-header" initial={{opacity:0}} animate={{opacity:1 ,transition:{delay:.3}}}>
                    <NavLink to='/'> <Icon fill="#fff" /> </NavLink>
                    <button className="fermer" onClick={HandleHeader}>  <span>Fermer </span> <span>x</span></button>
                </motion.div>
                <motion.div className="navLink">
                    <NavLink to='/a-propos'><motion.span initial={{y:90}} animate={{y:0 ,transition:{ease:[0.932, 0.017, 0.12, 1.016], duration:.2,delay:0}}}>À propos</motion.span></NavLink>
                    <NavLink to='/restos-bars'><motion.span initial={{y:90}} animate={{y:0 ,transition:{ease:[0.932, 0.017, 0.12, 1.016], duration:.2,delay:.1}}}>Restos & Bars</motion.span></NavLink>
                    <NavLink to='/cart'><motion.span initial={{y:90}} animate={{y:0 ,transition:{ease:[0.932, 0.017, 0.12, 1.016], duration:.2,delay:.20}}}>Carte</motion.span></NavLink>
                    <NavLink to='/contact'><motion.span initial={{y:90}} animate={{y:0 ,transition:{ease:[0.932, 0.017, 0.12, 1.016], duration:.2,delay:.3}}}>Contact</motion.span></NavLink>
                </motion.div>
                <motion.div initial={{top:'-30rem' , left:'-15rem',opacity:0}} animate={{top:'-27rem',left:'-10rem',opacity:1 ,transition:{delay:.3}}} className="top"><Wave fill="#fc87f6" /></motion.div>
                <div className="buttom"><Wave fill="#fc87f6" /></div>
                <div className="right"><Wave fill="#fc87f6" /></div>
                <motion.img  initial={{opacity:0 , y:150}} animate={{opacity:1,y:0 ,transition:{delay:.4,ease:[.455,.03,.515,.955]}}} src="https://cdn.sanity.io/images/wwxezq1v/production/01e65dc649ebeb82abc8ddcbbae34f8b9e7a11fb-1500x1356.png?bg=0fff&w=842&q=80&fit=fill&auto=format" alt="" />
                <motion.div className="insta"  initial={{opacity:0 , y:20}} animate={{opacity:1,y:0 ,transition:{delay:.5,duration:.5,ease:[0.932, 0.017, 0.12, 1.016]}}}>
                    <a href="https://www.instagram.com/leoff_paris/"><Insta fill="#fff" /></a>
                    <p>Le OFF est une initiative portée par Wine Paris & Vinexpo Paris, le premier événement professionnel des vins et spiritueux.</p>
                </motion.div>

            </div>
        </motion.div>
    )
}