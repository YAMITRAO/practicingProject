import './App.css';
import ExpenseItem from './component/ExpenseItem/ExpenseItem';

function App() {
 let data = [
    {itemName:"Item1", itemDisc:"This is discri", itemDate:"10-12-2022", itemRate:1200},
    {itemName:"Item2", itemDisc:"This is discri", itemDate:"20-09-2023", itemRate:1000},
    {itemName:"Item3", itemDisc:"This is discri", itemDate:"20-05-2021", itemRate:1500}
  ]
 
  return (
    data.map( (data ) => {
      return (<ExpenseItem itemName={data.itemName} itemDesc ={data.itemDisc} itemDate = {data.itemDate} itemRate = {data.itemRate} />)
    })
     
  );
  
}

export default App;
