
import "./ExpenseForm.css";
import Card from '../UI/Card'
import Form from "./Form/Form";
import ExtraInfo from "./ExtraInfo/ExtraInfo";

const ExpenseForm = (props) => {
    const importedData = (data) => {
       props.importedDataFromExpenseForm(data);
    }

    return(
        <Card className="expenseFormContainer">
            <Form importDataFromForm={importedData} />
            <ExtraInfo />
        </Card>
    )
}

export default ExpenseForm;