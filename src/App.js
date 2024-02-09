import React from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import { filterData,apiUrl } from './data';
import { useState,useEffect } from "react";
import {toast} from 'react-toastify';
import Spinner from "./Components/Spinner";
import Cards from "./Components/Cards";
const App = () => {
const [courses, setCourses] = useState(null);
const [loading,setLoading] = useState(true);
const [category,setCategory] =  useState(filterData[0].title);

async function fetchData(){
  setLoading(true);
  try{
    let response = await fetch(apiUrl);
    let Output = await response.json();
    console.log(Output);
    setCourses(Output.data);
  }
  catch(error){
    toast.error("Network Problem")
  }
  setLoading(false);
}

useEffect(()=>{
  fetchData();
},[]);

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar/>
      </div>
      <div className="bg-bgDark2">
        <div>
          <Filter
          filterData={filterData} 
          category={category} 
          setCategory={setCategory}/>
        </div>
        <div  className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
       {
        loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
       }
        </div>
      </div>

    </div>
  )
};

export default App;
