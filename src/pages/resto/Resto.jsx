import Layout from "../../components/layout/Layout";
import TopWave from "../../components/svgs/TopWave";
import Wave from "../../components/svgs/Wave";
import { motion } from "framer-motion";
import data from '../../data/restos.json'
import './Resto.css'

function Resto() { 
    
    return (
        <Layout>

            <section className="about">
                <div className="hero-about">
                    <h1 >Restos</h1>
                    <Wave fill="#4aa5ff" />
                    <div className="-wf">
                        <motion.img initial={{ y: 80 }} animate={{ y: 0, transition: { ease: 'linear' } }} src="https://cdn.sanity.io/images/wwxezq1v/production/55b474386fd20d38192c3aa21e84c6b610fa5e05-1472x1622.png?bg=0fff&w=820&q=80&fit=fill&auto=format" alt="" />
                        <motion.img initial={{ y: 80 }} animate={{ y: 0, transition: { ease: 'linear' } }} className="sw-" src="https://cdn.sanity.io/images/wwxezq1v/production/c99554d96d16723a0748e6b0d9c1c797351f1cfe-814x578.png?bg=0fff&w=454&q=80&fit=fill&auto=format" alt="" />
                    </div>
                </div>
                <div className="rotate">
                    <TopWave fill="white" />
                </div>
                <div className="white">

                    <div className="grid">
                        {data.map((item, ind) =>
                            <Card content={item} key={ind} />
                        )}
                    </div>
                </div>
            </section>
        </Layout>
    );
}

const Card = ({ content }) => {
    return (
        <div className="card">
            <div className="item-img">
                <img src={content.preview} />
            </div>
            <h2>{content.title}</h2>
            <p>{content.desc}</p>
        </div>
    )
}

export default Resto;