import React, { useEffect, useState } from 'react';

import './App.css';
import { List } from './List'
import { Chart } from './Chart';
import { CompanyModel } from './types/CompanyModel';
import { getCompainesFromStorage, saveToStorage } from './persist';
function App() {

  const [companies, setCompanies] = useState<CompanyModel[]>([
    {
      label: 'ibm',
      ability: 20,
      vision: 10,
    }
  ] as CompanyModel[])



  useEffect(() => {

    const c = getCompainesFromStorage()

    if (!c) {
      return;
    }
    setCompanies(c)
  }, [])



  const handleAdd = () => {

    const newArray =[...companies, {
      ability: 0,
      vision: 0,
      label: ''
    }]
    setCompanies(newArray)
    saveToStorage(newArray)

  }

  const handleDelete = (index: number) => {

    const newArray = companies.filter((_, i) => i !== index)
    setCompanies(newArray)
   
    saveToStorage(newArray)

  }

  const handleItemChange = (item: CompanyModel, index: number) => {

    companies[index] = item
    const newArray = [...companies]
    setCompanies(newArray)
    saveToStorage(newArray)

  }



  return (
    <div className="App">

      <div className='flex'>
        <div>
          <Chart companies={companies} onItemChange={handleItemChange} />
        </div>

        <div className='flex1'>
         <div className="flex">
         <button className='add-button' onClick={handleAdd}>
            Add
          </button>
         </div>
          <List companies={companies} onDelete={handleDelete} onItemChange={handleItemChange} />

        </div>

      </div>

    </div>
  );
}

export default App;
