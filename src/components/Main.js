import Hero from './Hero';
import CardList from "./CardList";
import Button from './Button';
import TestimonialList from './TestimonialList';
import Description from './Description';

function Main(props) {
    return (
        <main>
            <Hero />
            <div className='specials'>
                <section className='specials-header'>
                    <h2>Week Specials</h2>
                    <Button label='Online Menu' />
                </section>
                <CardList dishes={props.dishes} />
            </div>
            <section className='testimonials'>
                <h2>Testimonials</h2>
                <TestimonialList testimonials={props.testimonials} />
            </section>
            <Description />
        </main>
    )
}

export default Main;