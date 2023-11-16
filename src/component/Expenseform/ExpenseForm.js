
import "./ExpenseForm.css";
import Card from '../UI/Card'
import Form from "./Form/Form";
import ExtraInfo from "./ExtraInfo/ExtraInfo";

const ExpenseForm = () => {


    return(
        <Card className="expenseFormContainer">
            <Form />
            <ExtraInfo />
        </Card>
    )
}

export default ExpenseForm;