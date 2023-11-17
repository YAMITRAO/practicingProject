import './App.css';
import Expense from './component/ExpenseItem/Expense';
import ExpenseForm from './component/Expenseform/ExpenseForm';
import { useState } from 'react';

function App() {

 let dataDummy = [
    {itemName:"Laptop", LocationOfExpenditure:"Delhi", itemDate:new Date("10-12-2023"), itemRate:120000},
    {itemName:"Mobile", LocationOfExpenditure:"Jaipur", itemDate:new Date("09-05-2023"), itemRate:10000},
    {itemName:"Screen", LocationOfExpenditure:"Raipur", itemDate:new Date("07-12-2022"), itemRate:1500}
  ]

  const [data, setData] = useState(dataDummy);
  const importedData = (dataImported) => {
    console.log(dataImported);
    let temp = {
      itemName: dataImported.itemInput,
      LocationOfExpenditure: dataImported.itemLocation,
      itemDate: new Date(dataImported.itemDate),
      itemRate: Number(dataImported.itemRate)
    }
    console.log(dataDummy);
    dataDummy.push(temp);
    setData(dataDummy);
    console.log(dataDummy);
  }

  return (
    <div className='mainContainer'>
      <ExpenseForm importedDataFromExpenseForm={importedData}/>
    { data.map( (data, index ) => {
      return (<Expense key={index} itemName={data.itemName} itemDesc ={data.LocationOfExpenditure} itemDate = {data.itemDate} itemRate = {data.itemRate} />)
    })}
    </div>
  );
  
}

export default App;
