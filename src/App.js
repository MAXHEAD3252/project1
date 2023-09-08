import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


function App() {

  const [mode, setmode] = useState("light");
  const [modename, setmodename] = useState('LightMode');
  const [texttype, settexttype] = useState('dark');

  const togglemode=()=>{
    if(mode ==='light'){
      setmodename('DarkMode') 
      setmode('dark')
      settexttype('light')
      document.body.style.backgroundColor = '#15202B'
    }else{
      setmode('light')
      setmodename('LightMode')
      settexttype('dark')
      document.body.style.backgroundColor = 'white'

    }
  }
  return (
    <>
    
{/*<Navbar title="TexxtUtils" about="About Us"/>*/}
{/*<Navbar about="About Us"/>*/}
 <Navbar mode={mode} togglemode={togglemode} modename={modename} text={texttype}/>
<Alert alert="Welcome New User"/>
 <div className="container my-3">
 <TextForm heading="Enter The Text To Analyse Below" mode={mode}/>
 </div>
 
 </>
  );  
}

export default App;
