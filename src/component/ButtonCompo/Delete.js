import ButtonCard from "../UI/ButtonCard";
import "./Delete.css"

const Delete = () => {

    return(
        <>
        <ButtonCard button={ () => console.log("clicked")} className="deleteButton">Delete</ButtonCard>
        </>
    );
}

export default Delete;