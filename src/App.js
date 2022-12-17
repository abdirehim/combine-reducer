
import { useDispatch, useSelector } from 'react-redux';
import { firstname,lastname,gender,age,profesion } from './store/action';
import './App.css';
import { useState } from 'react';

function App() {
  const Fname=useSelector(state=>state.FIRSTNAME)
  const Lname=useSelector(state=>state.LASTNAME)
  const AGe=useSelector(state=>state.AGE)
  const GEnder=useSelector(state=>state.GENDER)
  const PRofesion=useSelector(state=>state.PROFESION)

  const dispatch = useDispatch()

  const [fname,setfirstname] = useState()
  const [lname,setlastname] = useState()
  const [Age,setage] = useState()
  const [Gender,setgender] = useState()
  const [Profesion,setprofesion] = useState()
  







  return (
    <div className="App"><div className='container'>
        <h1> my information </h1>
        <div className='input-button'>
      <input className='input' placeholder='firstname' value={fname} onChange={(e)=>setfirstname(e.target.value)}/>
        <button className='button' onClick={()=>dispatch(firstname(fname))}>Add</button><br/><br/>
        <input className='input' placeholder='lastname' value={lname} onChange={(e)=>setlastname(e.target.value)}/>
        <button className='button' onClick={()=>dispatch(lastname(lname))}>Add</button><br/><br/>
        <input className='input' placeholder='age' value={Age} onChange={(e)=>setage(e.target.value)}/>
        <button className='button' onClick={()=>dispatch(age(Age))}>Add</button><br/><br/>
        <input className='input' placeholder='gender' value={Gender}  onChange={(e)=>setgender(e.target.value)}/>
        <button className='button' onClick={()=>dispatch(gender(Gender))}>Add</button><br/><br/>
        <input className='input' placeholder='profesion' value={Profesion} onChange={(e)=>setprofesion(e.target.value)}/>
        <button className='button' onClick={()=>dispatch(profesion(Profesion))}>Add</button><br/>
        </div>
      
      <div className='text' >
      <h1>my firstname is :{Fname}</h1>
      <h1>my lastname is :{Lname}</h1>
      <h1 >my Age is :{AGe}</h1>
      <h1 >my Gender is :{GEnder}</h1>
      <h1>my Profession is :{PRofesion}</h1>
      </div>
      </div>
    </div>
  );
}

export default App;
