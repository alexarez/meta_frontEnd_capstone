import TestimonialCard from './TestimonialCard';
import testListStyles from './TestimonialList.module.css';

function TestimonialList(props) {
    const testimonialCards = props.testimonials
    .map(testimonial => {
        return (
            <TestimonialCard testimonial={testimonial} />
        )
    })
    return (
        <div className={testListStyles.wrapper}>
            {testimonialCards}
        </div>
    )
}

export default TestimonialList