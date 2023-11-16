import Card from "../../UI/Card";
import "./Form.css"

const Form =() => {
    return(
        <Card className="formConatiner">
        <form>
            {/* date */}
        <div className="commonInput itemDateDiv">
            <label >Purchase Date</label>
            <input onChange={ (e) => console.log(e.target.value)} type="date" id="itemDate" name="itemDate" placeholder="Select purchase date" />
           </div>

           {/* name */}
           <div className="commonInput itemNameDiv">
            <label >Item Name</label>
            <input onChange={ (e) => console.log(e.target.value)} type="text" id="itemName" name="itemName" placeholder="Enter the Item name" />
           </div>

           {/* location */}
           <div className="commonInput itemLocationDiv">
            <label >Item Location</label>
            <input onChange={ (e) => console.log(e.target.value)}  type="text" id="itemLocation" name="itemLocation" placeholder="purchase location" />
           </div>

           {/* price */}
           <div className="commonInput itemRateDiv">
            <label >purchase Amount</label>
            <input onChange={ (e) => console.log(e.target.value)} type="number" id="itemRate" name="itemRate" placeholder="Enter the purchase amount" />
           </div>

           <div className="commonInput buttonDiv">
           <input id="cancle" type="submit" value="cancel" />
            <input id="submit" type="submit" value="submit" />
           </div>
           
        </form>
        </Card>
    );
}

export default Form;