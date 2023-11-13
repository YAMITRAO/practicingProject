import "./ExpenseItem.css"

function ExpenseItem(props){
    return( 
       <div className="expenseContainer">
        <div className="expenseName expense">{props.itemName}</div>
        <div className="descri expense">{props.itemDesc}</div>
        <div className="expenseDate expense">{props.itemDate}</div>
        <div className="expenseRate expense">{props.itemRate}</div>
       </div>
       
    )
}

export default ExpenseItem;