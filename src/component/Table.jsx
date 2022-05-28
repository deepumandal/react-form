import React, { useEffect, useState } from "react";
import Style from "./table.module.css";
import Tableitem from "./Tableitem";
const Table = () => {
  



  

  const [data, setdata] = useState([]);
  const [filter, setfilter] = useState("all");

  useEffect(() => {
    fetch("http://localhost:7000/porfile")
      .then((r) => r.json())
      .then((d) => setdata(d));
      

  }, []);


  function filterd(e) {
   // console.log(e.target.value);
    setfilter(e.target.value)
 
  }

  return (
    <div>
      <h1>Table</h1>

      <ul className={Style.lists}>
        <li>image</li>
        <li>Name</li>
        <li> Age</li>
        <li>Address</li>
        <li>department</li>
        <li>Marital</li>
        <li>Salary</li>
      </ul>

      {/* output */}
      <select name="" id="" onClick={filterd}>
        <option value="all">Select all</option>
        <option value="department one"> department one </option>
        <option value="department two"> department two </option>
        <option value="department three"> department three </option>
        <option value="department four"> department four </option>
      </select>

{/* {item show here } */}


      <Tableitem filt={filter} data={data} />
     
    </div>
  );
};

export default Table;

{
  /* <ul className={Style.list} key={e.id} >
<li > {e.Photo} </li>
<li > {e.Name} </li>
<li > {e.Age} </li>
<li > {e.Address} </li>
<li > {e.department} </li>
<li > {e.Marital==true? "Married":"Unmarried" } </li>
<li > {e.Salary} </li>
</ul>  */
}
