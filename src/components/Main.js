import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import Description from './Description';

function Main(props) {
    return (
        <main>
            <Hero />
            <Specials dishes={props.dishes} />
            <Testimonials testimonials={props.testimonials} />
            <Description />
        </main>
    )
}

export default Main;