import "./ExpenseDetails.css";


function ExpenseDetails(props){

    return(
        <>
        <div>
            <div className="itemDes">Item</div>
         <div className="expense">{props.name}</div>
        </div>
        <div>
        <div className="itemDes">Location</div>
        <div className="expense">{props.location}</div>
        </div>

        <div>
        <div className="itemDes">price</div>
        <div className="expense">{props.rate}</div>
        </div>
        
        
        </>

    )
}

export default ExpenseDetails;
