
import "./Card.css";

const Card = (props) => {
let classess =  `${props.className} + cardContainer`;
    return (
        <div className = {classess}>
            {props.children}
        </div>
    )
}

export default Card;