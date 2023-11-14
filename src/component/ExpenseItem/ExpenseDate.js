
import "./ExpenseDate.css"


function ExpenseDate(props){
    let day = props.date.getDate();
    let month = props.date.toLocaleString('default', { month: 'long' });
    let year = props.date.getFullYear()
   

    return(
        <div>
            <div className="dateDes">Date</div>
        <div className="expenseDateContainer">
            <div>{day}</div>
            <div>{month}</div>
            <div>{year}</div>
        </div>
        </div>
    );
}

export default ExpenseDate;