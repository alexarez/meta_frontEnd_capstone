import buttonStyles from './Button.module.css'

function Button(props) {
    return (
        <a href='' className={`${buttonStyles['karla-medium']} ${buttonStyles.btn}`}>{props.label}</a>
    )
}

export default Button