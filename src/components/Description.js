import restaurant from '../assets/restaurant.jpg';
import chef from '../assets/restaurant chef B.jpg';

function Description() {
    return (
        <section>
            <div className='description-text'>
                <h2>Little Lemon <span>Chicago</span></h2>
                <p>Nestled in the heart of the city, we're a vibrant Mediterranean eatery  offering a menu featuring iconic dishes like fresh Greek salads, savory  Italian pasta, and succulent Spanish paella. Experience our warm  hospitality and indulge in a culinary journey celebrating the diverse  flavors of the Mediterranean.</p>
            </div>
            <div className='description-images'>
                <img src={restaurant} alt='restaurant-preview' width={200}></img>
                <img src={chef} alt='restaurant-preview' width={200}></img>
            </div>
        </section>
    )
}

export default Description