import buttonStyles from './Button.module.css'
import { Link } from 'react-router-dom'

function Button(props) {
    return (
        <Link to={props.route} className={`${buttonStyles['karla-medium']} ${buttonStyles.btn}`}>{props.label}</Link>
    )
}

export default Button