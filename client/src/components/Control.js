import axios from 'axios';
import React, { useState } from 'react';


function Control() {
    const [isOn, setisOn] = useState(true);
    
    const handleClick = async (label) => {
        try {
            // Send a POST request to toggle the device value
            const response = await axios.post('http://localhost:5000/api/data/toggleValue', { label });
            console.log(response.data); 
            
        } catch (error) {
            console.error(error);
            // Handle error
        }
    }
  
  return (
      <>
          <div className='flex flex-col justify-center items-center h-screen'>
              <div className='mb-4'>
                  <button onClick={() => handleClick("Device1")} className='btn p-5 m-8 text-white bg-black rounded text-2xl'>Update to Value</button>
                    <button onClick={() => handleClick("Device2")} className='btn p-5 m-8 text-white bg-black rounded text-2xl'>Update to Value</button>
                  <button onClick={() => handleClick("Device3")} className='btn p-5 m-8 text-white bg-black rounded text-2xl'>Update to Value</button>
                <button onClick={() => handleClick("Device14")} className='btn p-5 m-8 text-white bg-black rounded text-2xl'>Update to Value</button>     
        </div>
        <div className='mb-4'>
                  <button onClick={() => handleClick("Device5")} className='btn p-5 m-8 text-white bg-black rounded text-2xl'>Update to Value</button>
                    <button onClick={() => handleClick("Device6")} className='btn p-5 m-8 text-white bg-black rounded text-2xl'>Update to Value</button>
                  <button onClick={() => handleClick("Device7")} className='btn p-5 m-8 text-white bg-black rounded text-2xl'>Update to Value</button>
                <button onClick={() => handleClick("Device8")} className='btn p-5 m-8 text-white bg-black rounded text-2xl'>Update to Value</button>     
             </div>
       
              
             
              
              
        </div>
 
      </>
  )
}

export default Control;