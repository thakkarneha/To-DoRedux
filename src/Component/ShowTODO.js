import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import { deleteTODo } from '../Actions/action';



function ShowTODO() {
  const disaptch= useDispatch();
  const List= useSelector((state)=>state.toDoREducers.List)
  console.log(List)
  return (
    <>
    <div className="container">
    <span>Show Items:</span> 
    {List && List.map((item)=>{
           return (
            <div key={item.id}>
          <span>{item.data}</span>
        <Button variant="success" onClick={()=>disaptch(deleteTODo())}>Delete</Button>
        </div>

)
       
    })}
</div>


    </>
  )

}

export default ShowTODO