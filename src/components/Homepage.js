import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import Description from './Description';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

function Homepage(props) {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Specials dishes={props.dishes} />
                <Testimonials testimonials={props.testimonials} />
                <Description />
            </main>
            <Footer />
        </>
    )
}

export default Homepage;
