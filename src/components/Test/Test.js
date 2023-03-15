import React, { useEffect, useState } from "react";

const Test = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
    const getData = async () =>{
        let api = await fetch("http://localhost:4200/getallusers");
        console.log(api);
        let apiData = await api.json();
        console.log(apiData);
        setData(apiData);
        
    }
    getData();
  
  });
  console.log("data here",data);
  return (
  <div>
  { data.map((item,index)=>{
     return (
      <div key={index}>
      <h1>{item.name}</h1>
      <h1>{item.gender}</h1>
      
      </div>
      
     )
  })
   }
  </div>
  );
};

export default Test;
