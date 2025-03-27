import './Footer.css'
import TopWave from '../svgs/TopWave'
import Wave from '../svgs/Wave'
import { motion } from 'framer-motion';

function Footer() {
    return (
        <footer>
            <div className="rotate">
                <TopWave fill="#fc87f6" />
            </div>
            <div className="footer">
                <motion.img initial={{ y: 40 }} whileInView={{ y: 0 ,transition:{ease:'linear'}}} className="img-st" src="https://cdn.sanity.io/images/wwxezq1v/production/c1e689c81761872865bdceb83578442ba3dea702-294x499.png?bg=0fff&w=1280&q=80&fit=fill&auto=format" alt="" />
                <div className="p-a-f">
                    <Wave fill="#fbed4f" />
                </div>

                <div className="w-9">
                    <div className="fir">
                        <div className="tit">
                            <h1>Le OFF est une initiative portée </h1>
                            <h1> par Vinexposium, l'allié de la </h1>
                            <h1> filière mondiale des vins et  </h1>
                            <h1>spiritueux.</h1>
                        </div>
                        <ul >
                            <li className='Winky'>Vinexposium</li>
                            <li className='Winky'>Mentions légales</li>
                            <li className='Winky'>Contact
                            </li>
                        </ul>
                        <ul>
                            <li className='Winky'>CGU</li>
                            <li className='Winky'>Home</li>
                        </ul>

                    </div>
                    <div className="fir">
                        <img src="https://cdn.sanity.io/images/wwxezq1v/production/cdf64e7a8771f45d820f04b7bba4ab726145ef02-364x84.png?bg=0fff&w=1280&q=80&fit=fill&auto=format" alt="" />
                    </div>
                </div>
                <div className="sous">
                    <p className='Winky'>This site is just for fun and practice my skills <a href="https://leoff-paris.com/">ORIGINAL SITE</a></p>
                </div>
            </div>

        </footer>
    );
}

export default Footer;