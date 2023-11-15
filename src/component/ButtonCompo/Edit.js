import ButtonCard from "../UI/ButtonCard";
import { useState } from "react";
import "./Edit.css"

const Edit = () => {

    const [val, setVal] = useState("hello");
    

     
    const edited = () => {
        console.log("Edited")
    }

    return(
        <>
        <ButtonCard button={ edited}className="editButton">Edit</ButtonCard>
        </>
    );
}

export default Edit;