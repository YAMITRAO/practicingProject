import Card from "../../UI/Card";
import "./Form.css"
import { useState } from "react";

const Form =(props) => {

   

    const [userInput, setUserInput ] = useState( {
        itemDate:"",
        itemInput: "",
        itemLocation: "",
        itemRate: "",
    })

    let formData = {}
    formData={...userInput};
    // console.log(userInput);

    const purchaseDateHandler = (e) => {

        // setUserInput({
        //     ...userInput,
        //     itemDate: e.target.value
        // });

        setUserInput( (prevState) => {
            return {
                // this approach is alternative of previous
                ...prevState,
                itemDate: e.target.value}
            
        });
    }
    const purchaseItemHandler = (e) => {
        setUserInput({
            ...userInput,
            itemInput: e.target.value
        });
       
    }
    const purchaseLocationHandler = (e) => {
        setUserInput({
            ...userInput,
            itemLocation: e.target.value
        });
        
    }
    const purchaseRateHandler = (e) => {
        setUserInput({
            ...userInput,
            itemRate: e.target.value
        });
    }

    const submitHandler =(e) => {
        e.preventDefault();
        formData = {...userInput};
        setUserInput({
            itemDate:"",
            itemInput:"",
            itemLocation:"",
            itemRate:"",
        });
        props.importDataFromForm(formData);
        // console.log(formData);
    }

    const cancleButtonHandler = ( ) => {
        props.visiblityData()
    }
    
    return(
        <Card className="formConatiner">
        <form onSubmit={ submitHandler}>
            {/* date */}
        <div className="commonInput itemDateDiv">
            <label >Purchase Date</label>
            <input onChange={ purchaseDateHandler} type="date" value={userInput.itemDate} id="itemDate" name="itemDate" placeholder="Select purchase date" />
           </div>

           {/* name */}
           <div className="commonInput itemNameDiv">
            <label >Item Name</label>
            <input onChange={ purchaseItemHandler} type="text" value={userInput.itemInput} id="itemName" name="itemName" placeholder="Enter the Item name" />
           </div>

           {/* location */}
           <div className="commonInput itemLocationDiv">
            <label >Item Location</label>
            <input onChange={ purchaseLocationHandler}  type="text" value={userInput.itemLocation} id="itemLocation" name="itemLocation" placeholder="purchase location" />
           </div>

           {/* price */}
           <div className="commonInput itemRateDiv">
            <label >purchase Amount</label>
            <input onChange={ purchaseRateHandler } type="number" value={userInput.itemRate} id="itemRate" name="itemRate" placeholder="Enter the purchase amount" />
           </div>

           <div className="commonInput buttonDiv">
           <input onClick={cancleButtonHandler} id="cancle" type="submit" value="cancel" />
            <input  id="submit" type="submit" value="submit" />
           </div>
           
        </form>
        </Card>
    );
}

export default Form;