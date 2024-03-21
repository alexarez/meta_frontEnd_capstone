import Button from './Button';
import restaurantFood from '../assets/restauranfood.jpg'

function Hero() {
   return (
    <>
        <section className='hero-text'>
            <h1>Little Lemon <span>Chicago</span></h1>
            <p>We are a family owned Mediterranean restaurant focused on traditional recipes served with a modern twist.</p>
            <Button label='Reserve a Table' type='btn-primary' />
        </section>
        <div>
            <img src={restaurantFood} alt='Food preview' width={200} />
        </div>
    </>
   ) 
}

export default Hero