import React, { useState } from 'react'; 
import Select from 'react-select';

function NewTemplate() {

  const [name, setName] = useState(''); 
  const [category, setCategory] = useState(''); 
  const [options, setOptions] = useState([]); 

  return (
    <div className='flex-col justify-center pl-5 mt-3 pr-5'>
        <h1 className='text-3xl font-bold'>Create a Template</h1>
        <p>desc of template</p>
        <form className=''>
          <p className='font-bold'>Name of Template</p>
          <input 
            type="text" 
            placeholder="Describe the image set, ex. 'Top 5"
            className='h-9 w-72 lg:w-96 pl-2 text-black border rounded border-slate-300' 
          /> 
          <p className='font-bold'>Select a Category</p>
          <Select 
            placeholder="Select a Category"
            options={options}
            className='h-10 w-72 lg:w-96'
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary: 'black',
                border: 'neutral120',
              },
            })}
          /> 
          <p className='font-bold'>Description of Template:</p>
          <textarea 
            className='h-9 w-72 lg:w-96 border rounded'
            placeholder=''
          /> 

          <p className='font-bold'>Select Template Cover Photo:</p>
          <div className='border p-2 w-72 lg:w-96 rounded'>
            <input 
              type="file"
              accept="image/*"
               className=''
            />
          </div>

          <p className='font-bold'>Upload a Set of Images for the Tier List Template:</p>
          <p className='text-sm'>Consistent image size and orientation (square) works best!</p>
          <div className='border p-2 w-72 lg:w-96 rounded'>
            <input 
              type="file"
              accept="image/*"
              className=''
            />
          </div>
        </form>
    </div>
  )
}

export default NewTemplate; 