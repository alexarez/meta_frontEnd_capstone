import delivery from '../assets/delivery.svg';
import dishStyles from './DishCard.module.css';
import { Link } from 'react-router-dom';

function DishCard({ dish }) {
    return (
        <div className={dishStyles.card}>
                    <img src={dish.image} alt="Dish preview" className={dishStyles.image} />
                <div className={`${dishStyles.header}`}>
                    <h3 className={`${dishStyles.title} ${dishStyles['karla-bold']}`}>{dish.title}</h3>
                    <span className={`${dishStyles.cost} ${dishStyles['karla-bold']}`}>{`$${dish.cost}`}</span>
                </div>
                <p className={`${dishStyles.description} ${dishStyles['karla-regular']}`}>{dish.description}</p>
                <div className={dishStyles.footer}>
                    <Link to='/order-online' className={`${dishStyles['call-to-action']}`}>
                        <p className={`${dishStyles['karla-bold']}`}>Order a delivery</p>
                        <img src={delivery} alt="Delivery icon" />
                    </Link>
                </div>
            </div>
    )
}

export default DishCard