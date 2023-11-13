import "./ExpenseItem.css"

function ExpenseItem(props){
    return( 

       <div className="expenseContainer">
        <div className="expenseItem expense">
        <div>{props.itemName}</div>
        <div className="descri">{props.itemDesc}</div>
        </div>
        <div className="expenseDate expense">{props.itemDate}</div>
        <div className="expenseRate expense">{props.itemRate}</div>
       </div>
       
    )

}

export default ExpenseItem;