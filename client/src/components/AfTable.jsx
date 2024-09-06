import React, { useEffect, useState } from 'react'
import axios from 'axios'

// SAMPLE TABLE COMPONENT TO CHECK THE APIs 
// SAMPLE TABLE COMPONENT TO CHECK THE APIs 
// SAMPLE TABLE COMPONENT TO CHECK THE APIs 
export const AfTable = () => {

    const[data, setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8081/')
        .then(res => setData(res.data))
        .then(err => console.log(err)); 
    },[])

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">ID</th>
                  <th scope="col" className="px-6 py-4">Name</th>
                  <th scope="col" className="px-6 py-4">Email</th>
                </tr>
              </thead>
              <tbody>
                {data.map((users, index) => {
                    return <tr key={index}
                    className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">{users.ID}</td>
                    <td className="whitespace-nowrap px-6 py-4">{users.Name}</td>
                    <td className="whitespace-nowrap px-6 py-4">{users.Email}</td>
                  </tr>
                })}
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}


