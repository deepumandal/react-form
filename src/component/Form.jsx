import React, { useEffect, useState } from "react";
import style from "./form.module.css";

const Form = () => {
  const [server, setserver] = useState();

  const [querry, setquerry] = useState({
    Name: "",
    Age: "",
    Salary: "",
    department: "",
    Address: "",
    Marital: "",
    id: "",
  });

  useEffect(() => {
    fetch(` http://localhost:7000/porfile`)
      .then((r) => r.json())
      .then((d) => setserver(d));

    // console.log(JSON.stringify(querry));
  }, []);

  // console.log(server);
  function storedata(e) {
    const { name, value, checked, type } = e.target;

    if (type == "checkbox") {
      setquerry({ ...querry, [name]: checked });
    } else {
      setquerry({ ...querry, [name]: value });
    }

    //line no 20 ager output ese chiye toh yellow wali curly bracket ka use kro
    // {
    //     Address: "s"
    // Age: "s"
    // Department: "s"
    // Marital: "s"
    // Name: "a"
    // Salary: "s"
    // }

    // ager yellow curly ka place pr [] use kroge toh output esa ayega

    // {Name: 'a'}
    // {Age: 's'}
    // {Address: 's'}
    // {Department: 'd'}
    // {Salary: 's'}
    // {Marital: 's'}
  }

  return (
    <div>
      <form action="" className={style.form}>
        <h1>Form</h1>
        <div>Name</div>
        <input name="Name" type="text" onChange={storedata} />

        <div>Age</div>
        <input name="Age" type="text" onChange={storedata} />

        <div>Address</div>
        <input name="Address" type="text" onChange={storedata} />

        <div>Department</div>

        <select name="department" onChange={storedata} id="">
          <option value="department one"> department one </option>
          <option value="department two"> department two </option>
          <option value="department three"> department three </option>
          <option value="department four"> department four </option>
        </select>

        <div>Salary</div>
        <input name="Salary" type="text" onChange={storedata} />

        <div>Marital state</div>
        <input name="Marital" type="checkbox" onChange={storedata} />

        <div>Photo</div>
        <input name="Photo" onChange={storedata} type="file" />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            fetch(`http://localhost:7000/porfile`, {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({ ...querry }),
            })
              .then((r) => r.json())
              .then((d) => setserver([...server, d]));
          }}
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default Form;
