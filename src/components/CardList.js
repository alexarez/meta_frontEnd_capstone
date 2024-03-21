import delivery from '../assets/delivery.svg'

function CardList(props) {
    const dishCards = props.dishes
    .map(dish => {
        return (
            <div className="dishCard">
                <img src={dish.image} alt="Dish preview" width={200} />
                <div className="card-heading">
                    <h3>{dish.title}</h3>
                    <span>{`$${dish.cost}`}</span>
                </div>
                <p className="card-description">{dish.description}</p>
                <div className="card-call">
                    <a href="">Order a delivery</a>
                    <img src={delivery} alt="Delivery icon" />
                </div>
            </div>
        )
    })

    return(
        <ul className="specials-list">
            {dishCards}
        </ul>
    )
}

export default CardList;