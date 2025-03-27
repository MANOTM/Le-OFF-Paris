import Layout from '../../components/layout/Layout';
import './Cart.css'

function Cart() {
    return (
        <Layout>
            <section className='cart center'>
                <h1 className='Winky'>Where?</h1>
            </section>
            <div className="maps">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6153.017105408058!2d2.3186629643811054!3d48.869857226863125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fccd34f1f33%3A0xb7bc922bd9effa1e!2s9%20Pl.%20de%20la%20Madeleine%2C%2075008%20Paris%2C%20France!5e0!3m2!1sfr!2sma!4v1743036811241!5m2!1sfr!2sma" width="100%" height="600"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </Layout>

    );
}

export default Cart;