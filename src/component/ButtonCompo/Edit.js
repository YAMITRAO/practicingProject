import ButtonCard from "../UI/ButtonCard";
import "./Edit.css"

const Edit = () => {

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