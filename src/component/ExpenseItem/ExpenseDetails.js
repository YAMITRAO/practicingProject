import "./ExpenseDetails.css";
// import ButtonCard from "../UI/ButtonCard"
// import { useState } from "react";
// import ExpenseDate from "./ExpenseDate";


const ExpenseDetails = (props) => {

    // const [name , setName] = useState(props.name);
    // const [location, setLocation] = useState(props.location);
    // const [rate, setRate] = useState(props.rate);
  
    
    // const nameUpdateFun = ( ) => {
    //     let updatedValue = prompt("Updated name ");
    //     if(updatedValue){
    //         setName(updatedValue);
    //     }
        
    // };
    // const locationUpdateFun = () => {
    //     let updatedValue = prompt("Updated location");
    //     if(updatedValue){
    //     setLocation(updatedValue);
    //     }
    // };
    // const rateUpdateFun = () => {
    //     let updatedValue = prompt("Updated rate value");
    //     if(updatedValue) {
    //     setRate(updatedValue);
    //     }
    // }

    return(
        <>
        
        <div>
            <div className="itemDes">Item</div>
         <div className="expense">{props.name}</div>
         {/* <ButtonCard button={nameUpdateFun}className="updateButton">Update</ButtonCard> */}
        </div>

        <div>
        <div className="itemDes">Location</div>
        <div className="expense">{props.location}</div>
        {/* <ButtonCard button={locationUpdateFun}className="updateButton">Update</ButtonCard> */}
        </div>

        <div>
        <div className="itemDes">price</div>
        <div className="expense">{props.rate}</div>
        {/* <ButtonCard button={rateUpdateFun}className="updateButton">Update</ButtonCard> */}
        </div>
        </>

    )
}

export default ExpenseDetails;
