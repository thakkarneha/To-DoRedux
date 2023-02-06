import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';


function AddToDo() {
  return (
    <>
<div className='container' >
<form>
    <input type="text" Placeholder="Add New item"/>
    <Button variant="primary"> Add Item</Button>
</form>
</div>
</>
 )
}

export default AddToDo