import "./ExpenseFilter.css";

const ExpenseFilter =( props) => {

    

    const changeHandler = (e) => {
        
        props.importDataFromExpenseFilter(e.target.value);

    }
    return(
        <div className="expenseFilter">
            <div>Filter</div>
            <div>Total Item: {props.dataLength}</div>
            <select onChange={ changeHandler }>
                <option>All</option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
            </select>
        </div>
    )
}

export default ExpenseFilter;