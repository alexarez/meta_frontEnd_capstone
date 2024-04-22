import CardList from "./CardList"
import Button from "./Button"
import specialsStyles from './Specials.module.css'

function Specials(props) {
    return (
        <section className={specialsStyles.specials}>
            <div className={specialsStyles.wrapper}>
                <div className={specialsStyles.header}>
                    <h2 className={`${specialsStyles.heading} ${specialsStyles['markazi-regular']}`}>Week Specials</h2>
                    <Button label='Online Menu' route='/menu' />
                </div>
                <CardList dishes={props.dishes} />
            </div>
        </section>
    )
}

export default Specials