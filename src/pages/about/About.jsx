import Layout from "../../components/layout/Layout";
import TopWave from "../../components/svgs/TopWave";
import Wave from "../../components/svgs/Wave";
import './About.css'
import { motion } from "framer-motion";

export default function About() {
    return (

        <Layout>
            <section className="about">
                <div className="hero-about">
                    <h1 >À propos</h1>
                    <Wave fill="#4aa5ff" />
                    <div className="-wf">
                        <motion.img initial={{ y: 80 }} animate={{ y: 0 ,transition:{ease:'linear'}}}  src="https://cdn.sanity.io/images/wwxezq1v/production/55b474386fd20d38192c3aa21e84c6b610fa5e05-1472x1622.png?bg=0fff&w=820&q=80&fit=fill&auto=format" alt="" />
                        <motion.img initial={{ y: 80 }} animate={{ y: 0 ,transition:{ease:'linear'}}}  className="sw-" src="https://cdn.sanity.io/images/wwxezq1v/production/f8b0d251a86a2fa55b9d2354a6779e42ef7b90bd-572x751.png?bg=0fff&w=1280&q=80&fit=fill&auto=format" alt="" />
                    </div>
                </div>
                <div className="rotate">
                    <TopWave fill="white" />
                </div>
                <div className="about-end">
                    <div className="about-text">
                        <div>
                            <h1>Le meilleur des vins</h1>
                            <h1>et des spi' à Paris !</h1>
                        </div>
                        <div className="about-flex">
                            <div className="coll-im"> 
                                    <img src='https://cdn.sanity.io/images/wwxezq1v/production/28076020c5314bdabc6e89d652c45e17290152f5-866x868.png?w=756&q=80&fit=crop&auto=format' />
                            </div> 
                            <div className="mini-di">
                                <p className="mini-tit Winky">+100 caffe & restaurants sélectionnés avec ♡</p>
                                <p className="Winky">Le OFF revient en force cette année, avec un millésime frais, pétillant, vibrant, gourmand.</p>
                                <p className="Winky">Une cuvée 2025 des amoureux de vins et spiritueux pleine de nouveautés : nouvelle identité visuelle, et nouvelle sélection à la clé de ce cru de qualité.</p>
                                <p className="Winky">100 adresses, 100 spots, à consommer avec modération, forcément, et beaucoup de plaisir, évidemment…</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}