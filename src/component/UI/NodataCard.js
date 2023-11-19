
import "./NodataCard.css";
import Card from "../UI/Card"

const NodataCard = ( props) => {

    return (
        <Card className="noDataCard">
            {props.data}
        </Card>
    )
}

export default NodataCard;