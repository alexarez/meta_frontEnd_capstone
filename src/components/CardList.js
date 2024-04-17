import DishCard from './DishCard';
import listStyles from './CardList.module.css'

function CardList(props) {
    const dishCards = props.dishes
    .map(dish => {
        return (
            <DishCard dish={dish} />
        )
    })

    return(
        <ul className={listStyles.list}>
            {dishCards}
        </ul>
    )
}

export default CardList