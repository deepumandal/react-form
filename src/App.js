import logo from './logo.svg';
import './App.css';
import Form from './component/Form';
import { useState } from 'react';
import Table from './component/Table';

function App() {
const [channel, setchannel] = useState(true)

  return (
    
    <div className="App" >
<h3 onClick={()=>setchannel(!channel)}> click here
</h3>
{channel==true? <Form  /> : <Table/>}

     
    </div>
  );
}

export default App;
