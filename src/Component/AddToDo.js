import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToDo } from '../Actions/action';


function AddToDo() {
  const [data,setData]=useState({item:""});
  const dispatch=useDispatch();
  const handelChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const handelSubmit=(e)=>{
e.preventDefault();
dispatch(addToDo(data.item)) 
setData("")
}
  return (
    <>
<div className='container' >
<form onSubmit={handelSubmit}>
    <input type="text" placeholder="Add New item" className='formcontrol' onChange={handelChange} name="item" value={data.item}/>
    <Button variant="primary" type="submit" className='formcontrol'> Add Item</Button>
</form>
</div>
</>

 )
}

export default AddToDo