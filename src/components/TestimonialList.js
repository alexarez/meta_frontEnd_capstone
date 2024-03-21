function TestimonialList(props) {
    const testimonialCards = props.testimonials
    .map(testimonial => {
        return (
            <div className="testimonialCard">
                <img src={testimonial.rating} alt='Star rating' />
                <figure className='testimonialAvatar'>
                    <img src={testimonial.avatar} alt='Avatar' width={50} />
                    <figcaption>{testimonial.name}</figcaption>
                </figure>
                <p>{testimonial.review}</p>
            </div>
        )
    })
    return (
        <div className='testimonialCards'>
            {testimonialCards}
        </div>
    )
}

export default TestimonialList