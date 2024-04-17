import descStyles from './Description.module.css';

function Description() {
    return (
        <section className={descStyles.wrapper}>
            <div className={descStyles.text}>
                <h2 className={descStyles['markazi-medium']}>Little Lemon <br/><span className={descStyles['markazi-regular']}>Chicago</span></h2>
                <p className={descStyles['karla-regular']}>Nestled in the heart of the city, we're a vibrant Mediterranean eatery  offering a menu featuring iconic dishes like fresh Greek salads, savory  Italian pasta, and succulent Spanish paella. Experience our warm  hospitality and indulge in a culinary journey celebrating the diverse  flavors of the Mediterranean.</p>
            </div>
            <div className={descStyles.images}>
                <div className={descStyles.preview1}></div>
                <div className={descStyles.preview2}></div>
            </div>
        </section>
    )
}

export default Description