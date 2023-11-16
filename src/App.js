import './App.css';
import Expense from './component/ExpenseItem/Expense';
import ExpenseForm from './component/Expenseform/ExpenseForm';


function App() {
 let data = [
    {itemName:"Laptop", LocationOfExpenditure:"Delhi", itemDate:new Date("10-12-2023"), itemRate:120000},
    {itemName:"Mobile", LocationOfExpenditure:"Jaipur", itemDate:new Date("09-05-2023"), itemRate:10000},
    {itemName:"Screen", LocationOfExpenditure:"Raipur", itemDate:new Date("07-12-2022"), itemRate:1500}
  ]

  return (
    <div className='mainContainer'>
      <ExpenseForm/>
    { data.map( (data, index ) => {
      return (<Expense key={index} itemName={data.itemName} itemDesc ={data.LocationOfExpenditure} itemDate = {data.itemDate} itemRate = {data.itemRate} />)
    })}
    </div>
    
     
  );
  
}

export default App;
