import testCardStyles from './TestimonialCard.module.css';

function TestimonialCard({ testimonial }) {
    return (
        <div className={testCardStyles.card}>
            <img src={testimonial.rating} alt='Star rating' className={testCardStyles.rating} />
            <figure className={testCardStyles.user}>
                <img src={testimonial.avatar} alt='Avatar' width={50} />
                <figcaption className={testCardStyles['karla-bold']}>{testimonial.name}</figcaption>
            </figure>
            <p className={`${testCardStyles.review} ${testCardStyles['karla-regular']}`}>{testimonial.review}</p>
        </div>
    )
}

export default TestimonialCard