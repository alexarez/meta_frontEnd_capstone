import Button from './Button';
import restaurantFood from '../assets/restauranfood.jpg';
import heroStyles from './Hero.module.css';

function Hero() {
   return (
    <section className={heroStyles.hero}>
        <div className={heroStyles.wrapper}>
            <div>
                <h1 className={`${heroStyles['heading-primary']} ${heroStyles['markazi-medium']}`}>Little Lemon <span className={`${heroStyles['markazi-regular']}`}>Chicago</span></h1>
                <p className={`${heroStyles['karla-medium']} ${heroStyles['hero-description']}`}>We are a family owned Mediterranean restaurant focused on traditional recipes served with a modern twist.</p>
                <Button label='Reserve a Table' type='btn-primary' route='/reservations' />
            </div>
            <div className={`${heroStyles['image-container']}`}>
                <img src={restaurantFood} alt='Food preview' className={heroStyles.image} />
            </div>
        </div>
    </section>
   )
}

export default Hero