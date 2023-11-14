
import Card from "../UI/Card";
import "./ExpenseDate.css"


const ExpenseDate = (props) => {
    let day = props.date.getDate();
    let month = props.date.toLocaleString('default', { month: 'long' });
    let year = props.date.getFullYear()
   

    return(
        <div>
            <div className="dateDes">Date</div>
        <Card className="expenseDateContainer">
            <div>{day}</div>
            <div>{month}</div>
            <div>{year}</div>
        </Card>
        </div>
    );
}

export default ExpenseDate;