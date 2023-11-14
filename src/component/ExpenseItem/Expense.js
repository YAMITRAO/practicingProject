import Card from "../UI/Card";
import "./Expense.css"
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

const ExpenseItem = (props) => {
    return( 
       <Card className="expense-item">
        <ExpenseDate date={props.itemDate} />
        <ExpenseDetails name={props.itemName}  location={props.itemDesc} rate={props.itemRate}/>
       </Card>
       
    )
}

export default ExpenseItem;