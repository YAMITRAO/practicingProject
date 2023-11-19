
import "./ExpenseForm.css";
import Card from '../UI/Card'
import Form from "./Form/Form";
import ExtraInfo from "./ExtraInfo/ExtraInfo";
import { useState } from "react";

const ExpenseForm = (props) => {
    const importedData = (data) => {
       props.importedDataFromExpenseForm(data);
    }
 const [isVisible, setIsVisible] = useState(false);

 const visibilityHandler = () => setIsVisible(true);
 const visibilityChange = () => setIsVisible(false);
    return(
        <Card className="expenseFormContainer">
            {
                !isVisible ? <Card className="formVisibility">
                    <button onClick={ visibilityHandler }>Add Entry</button>
                </Card> :<Form importDataFromForm={importedData} visiblityData = { visibilityChange} />
            }
            
            <ExtraInfo />
        </Card>
    )
}

export default ExpenseForm;