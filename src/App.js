import './App.css';
import ExpenseItem from './component/ExpenseItem/ExpenseItem';

function App() {
 let data = [
    {itemName:"Laptop", LocationOfExpenditure:"Delhi", itemDate:"10-12-2022", itemRate:120000},
    {itemName:"Mobile", LocationOfExpenditure:"Jaipur", itemDate:"20-09-2023", itemRate:10000},
    {itemName:"Screen", LocationOfExpenditure:"Raipur", itemDate:"20-05-2021", itemRate:1500}
  ]

  return (
    data.map( (data ) => {
      return (<ExpenseItem itemName={data.itemName} itemDesc ={data.LocationOfExpenditure} itemDate = {data.itemDate} itemRate = {data.itemRate} />)
    })
     
  );
  
}

export default App;
