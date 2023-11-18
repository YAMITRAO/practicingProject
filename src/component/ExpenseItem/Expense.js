import Delete from "../ButtonCompo/Delete";
import Edit from "../ButtonCompo/Edit";
import Card from "../UI/Card";
import "./Expense.css"
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

const ExpenseItem = (props) => {
    // console.log(props.itemData)
    return( 
       <Card className="expense-item">
        <ExpenseDate date={props.itemData.itemDate} />
        <ExpenseDetails name={props.itemData.itemName}  location={props.itemData.LocationOfExpenditure} rate={props.itemData.itemRate} date={props.itemData.itemDate}/>
       <div className="buttonContainer">
        <Delete />
        <Edit />
       </div>
       </Card>

    // <Card className="expense-item">
         
    //     <div>{props.itemData.itemName}</div>
    //     <div> {props.itemData.LocationOfExpenditure}</div>
    //     <div> {props.itemData.itemRate} </div>
    //      <ExpenseDate date={props.itemData.itemDate} /> 
    // </Card>
       
    )
}

export default ExpenseItem;