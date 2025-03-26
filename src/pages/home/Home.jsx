import { Link } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import TopWave from "../../components/svgs/TopWave";
import Wave from '../../components/svgs/Wave'
import "./Home.css";
import data from '../../data/restos.json'
export default function Home() {
    return (
        <Layout>
            <div className="Hero">
                <div className="Top-wave"><Wave fill="#fbed4f" /> </div>
                <div className="ber"><img src="https://cdn.sanity.io/images/wwxezq1v/production/6c8b434b6d7cc5c9793cb8566eccf84bec1cd20d-313x401.png?bg=0fff&w=1280&q=80&fit=fill&auto=format" /></div>
                <div className="text">
                    <div className="parag">
                        <p>Vive</p>
                        <p>le Paris</p>
                        <p>gourmand</p>
                    </div>
                    <div className="img-text">
                        <img src="https://cdn.sanity.io/images/wwxezq1v/production/08b5a5053d7e89c4bec4461b6b67d434ed1195b0-1434x1706.png?bg=0fff&w=886&q=80&fit=fill&auto=format" alt="" />
                        <div>
                            <p>Découvrez </p>
                            <p>+100 bars & restos </p>
                            <p>sélectionnés avec</p>
                        </div>

                    </div>
                </div>
                <div className="hedding">
                    <h1>Le meilleur des</h1>
                    <h1>vins & des spi’</h1>
                    <h1>à Paris</h1>
                </div>
            </div>
            <div className="home-about">
                <div className="wave-move">
                    <TopWave fill='#ff2e1e' />
                </div>
                <div className="flex">
                    <img className="sm" src="https://cdn.sanity.io/images/wwxezq1v/production/bed57d67b5ca78e8e90b4e53c19035517ef69cd6-316x436.png?bg=0fff&w=320&q=80&fit=fill&auto=format" alt="" />
                    <img className="sm" src="https://cdn.sanity.io/images/wwxezq1v/production/2866e1cbdc53e7ebdc751d5db2824cfe2faa45b5-470x434.png?bg=0fff&w=1280&q=80&fit=fill&auto=format" alt="" />
                </div>
                <div className="someblabla">
                    <div className="h4">
                        <div>
                            <h1>Toutes les</h1>
                            <h1>meilleures adresses</h1>
                            <h1>sont dans le Off</h1>
                        </div>
                        <p>Dans chaque coin de la capitale, les passionnés de belles bouteilles trouveront des lieux uniques, pour tous les goûts et tous les budgets, où l’on ressort le sourire aux lèvres, avec la certitude d’avoir vécu ce qui se fait de mieux à Paris.</p>
                        <Link to='/a-propos' className="btn-an"><span> Qui sommes nous?</span></Link>
                    </div>
                </div>
                <div className="flex-b">
                    <img className="high" src="https://cdn.sanity.io/images/wwxezq1v/production/01e65dc649ebeb82abc8ddcbbae34f8b9e7a11fb-1500x1356.png?bg=0fff&w=798&q=80&fit=fill&auto=format" alt="" />
                    <img className="sm" src="https://cdn.sanity.io/images/wwxezq1v/production/ff8aee04178900a1329f81a7d6d69fec441e9215-354x398.png?bg=0fff&w=1280&q=80&fit=fill&auto=format" alt="" />
                </div>

                <div className="rotate">
                    <TopWave fill="white" />
                </div>
            </div>
            <div className="restos-section">
                <div className="title">
                    <h1>Les coups de coeur du</h1>
                    <h1>comité de sélection</h1>
                    <h1>2025</h1>
                </div>
                <div className="slide">
                    {data.map((item, ind) =>
                        <Item content={item} key={ind} />
                    )}
                </div>
                <div className="center">

                <Link to='/restos-bars' className="btn-an p"><span>Découvrir toute la sélection</span></Link>
                </div>
            </div>

        </Layout>
    )
}

const Item = ({ content }) => {
    return (
        <div className="item" data-count={content?.number}>
            <div className="item-img">
                <img src={content?.preview} />
            </div>
            <p>{content?.title}</p>
        </div>
    )
}