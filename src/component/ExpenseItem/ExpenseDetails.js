import "./ExpenseDetails.css";
import ButtonCard from "../UI/ButtonCard"
import { useState } from "react";


const ExpenseDetails = (props) => {

    const [name , setName] = useState(props.name);
    const [location, setLocation] = useState(props.location);
    const [rate, setRate] = useState(props.rate);
  
    
    const nameUpdateFun = ( ) => {
        let updatedValue = prompt("Updated name ");
        if(updatedValue.length > 0){
            setName(updatedValue);
        }
        
    };
    const locationUpdateFun = () => {
        let updatedValue = prompt("Updated location");
        if(updatedValue.length > 0){
        setLocation(updatedValue);
        }
    };
    const rateUpdateFun = () => {
        let updatedValue = prompt("Updated rate value");
        if(updatedValue.length > 0) {
        setRate(updatedValue);
        }
    }

    return(
        <>
        <div>
            <div className="itemDes">Item</div>
         <div className="expense">{name}</div>
         <ButtonCard button={nameUpdateFun}className="updateButton">Update</ButtonCard>
        </div>

        <div>
        <div className="itemDes">Location</div>
        <div className="expense">{location}</div>
        <ButtonCard button={locationUpdateFun}className="updateButton">Update</ButtonCard>
        </div>

        <div>
        <div className="itemDes">price</div>
        <div className="expense">{rate}</div>
        <ButtonCard button={rateUpdateFun}className="updateButton">Update</ButtonCard>
        </div>
        
        
        </>

    )
}

export default ExpenseDetails;
