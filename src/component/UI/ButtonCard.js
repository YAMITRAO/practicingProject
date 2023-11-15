
import "./ButtonCard.css"

const ButtonCard = (props) => {
    const classData = `buttonCard + ${props.className}`
    return(
        <button onClick={ props.button} className={classData}>
            {props.children}
        </button>
    )
}

export default ButtonCard;