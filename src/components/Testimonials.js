import TestimonialList from "./TestimonialList";
import testStyles from './Testimonials.module.css'

function Testimonials(props) {
    return (
        <section className={testStyles.testimonials}>
            <h2 className={`${testStyles.heading} ${testStyles['markazi-medium']}`}>Testimonials</h2>
            <TestimonialList testimonials={props.testimonials} />
        </section>
    )
}

export default Testimonials