import "./Expense.css"
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

function ExpenseItem(props){
    return( 
       <div className="expense-item">
        <ExpenseDate date={props.itemDate} />
        <ExpenseDetails name={props.itemName}  location={props.itemDesc} rate={props.itemRate}/>
       </div>
       
    )
}

export default ExpenseItem;