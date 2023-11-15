import Delete from "../ButtonCompo/Delete";
import Edit from "../ButtonCompo/Edit";
import Card from "../UI/Card";
import "./Expense.css"
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

const ExpenseItem = (props) => {
    return( 
       <Card className="expense-item">
        <ExpenseDate date={props.itemDate} />
        <ExpenseDetails name={props.itemName}  location={props.itemDesc} rate={props.itemRate}/>
       <div className="buttonContainer">
        <Delete />
        <Edit />
       </div>
       </Card>
       
    )
}

export default ExpenseItem;