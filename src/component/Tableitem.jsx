import React from "react";
import Style from "./table.module.css";

const Tableitem = ({ filt, data }) => {
  return (
    <div>
      {data.map((e) => {
       // console.log(e.department);
        if (e.department == filt) {
          return (
            <ul className={Style.list} key={e.id}>
              <li> {e.Photo} </li>
              <li> {e.Name} </li>
              <li> {e.Age} </li>
              <li> {e.Address} </li>
              <li> {e.department} </li>
              <li> {e.Marital == true ? "Married" : "Unmarried"} </li>
              <li> {e.Salary} </li>
            </ul>
          );
        } else if (filt == "all") {
          return (
            <ul className={Style.list} key={e.id}>
              <li> {e.Photo} </li>
              <li> {e.Name} </li>
              <li> {e.Age} </li>
              <li> {e.Address} </li>
              <li> {e.department} </li>
              <li> {e.Marital == true ? "Married" : "Unmarried"} </li>
              <li> {e.Salary} </li>
            </ul>
          );
        }

        // return
        // filt=="data.department"?  <ul className={Style.list} key={e.id} >
        //              <li > {e.Photo} </li>
        //              <li > {e.Name} </li>
        //              <li > {e.Age} </li>
        //              <li > {e.Address} </li>
        //              <li > {e.department} </li>
        //              <li > {e.Marital==true? "Married":"Unmarried" } </li>
        //              <li > {e.Salary} </li>
        //              </ul>:   <ul className={Style.list} key={e.id} >
        //          <li > {e.Photo} </li>                                       y wala ternary operator
        //          <li > {e.Name} </li>                                        yha work nhi krega
        //          <li > {e.Age} </li>
        //          <li > {e.Address} </li>
        //          <li > {e.department} </li>
        //          <li > {e.Marital==true? "Married":"Unmarried" } </li>
        //          <li > {e.Salary} </li>
        //          </ul>
      })}
    </div>
  );
};

export default Tableitem;

// {data.map(e=>
//     <ul className={Style.list} key={e.id} >
//     <li > {e.Photo} </li>
//     <li > {e.Name} </li>
//     <li > {e.Age} </li>
//     <li > {e.Address} </li>
//     <li > {e.department} </li>
//     <li > {e.Marital==true? "Married":"Unmarried" } </li>
//     <li > {e.Salary} </li>
//     </ul>}
