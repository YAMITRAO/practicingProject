import './App.css';
import ExpenseFilter from './component/ExpenseFilter/ExpenseFilter';
import Expense from './component/ExpenseItem/Expense';
import ExpenseForm from './component/Expenseform/ExpenseForm';
import { useState } from 'react';
import NodataCard from './component/UI/NodataCard';

function App() {

 let dataDummy = [
    {itemName:"Laptop", LocationOfExpenditure:"Delhi", itemDate:new Date("10-12-2023"), itemRate:120000},
    {itemName:"Mobile", LocationOfExpenditure:"Jaipur", itemDate:new Date("09-05-2023"), itemRate:10000},
    {itemName:"Screen", LocationOfExpenditure:"Raipur", itemDate:new Date("07-12-2022"), itemRate:1500}
  ]

  const [data, setData] = useState(dataDummy);
  const [updatedData, setUpdatedData] = useState(data)



  const importedData = (dataImported) => {
    let temp = {
      itemName: dataImported.itemInput,
      LocationOfExpenditure: dataImported.itemLocation,
      itemDate: new Date(dataImported.itemDate),
      itemRate: Number(dataImported.itemRate)
    }
    if(temp.itemDate.getFullYear() && temp.itemName && temp.LocationOfExpenditure ){
      setData((preState) => {
        return [temp, ...preState]
      }
      );
      setUpdatedData( (pre) => {
        return [temp,...pre]
      });
    }
  }


  const impoterdFromExpenseFilter = (dataImported) =>{
    if(dataImported !== "All"){
    let x = data.filter((value) => {
      return (value.itemDate.getFullYear().toString() === dataImported)
    })
    setUpdatedData(x);
  }
  else{
    setUpdatedData(data);
  }
  }
  console.log(updatedData.length)
 
  return (
    <>
    {/* <NodataCard>This is here</NodataCard> */}
    <ExpenseForm importedDataFromExpenseForm={importedData}/>
      <ExpenseFilter dataLength={updatedData.length} importDataFromExpenseFilter ={impoterdFromExpenseFilter}/>
    <div className='mainContainer'>
      { updatedData.length === 0 && <NodataCard data="No Data Found"/>}
      {
        updatedData.length === 1 ?  updatedData.map( (value, index ) => {
          return (<><Expense key={Math.random()*0.234 + Math.random()} itemData = {value} />
          <NodataCard data="Add More Data"/>
          </>
          )
      }) :  updatedData.map( (value, index ) => {
          return (<><Expense key={Math.random()*0.234 + Math.random()} itemData = {value} />
          </>
          )
      })
      }
      
    </div>
    </>
  );

}

export default App;
