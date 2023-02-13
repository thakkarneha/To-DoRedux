import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import { deleteTODo } from '../Actions/action';



function ShowTODO() {
  const dispatch= useDispatch();
  const List= useSelector((state)=>state.toDoREducers.List)
  return (
    <>
    <div className="table-responsive">
      {List.length>0 ? <table className="table table-striped classicTable mx-auto w-auto">
   <thead>
   <tr><th>List</th>
   <th>Action</th> 
   </tr></thead>
   <tbody>
 { List.map((item)=>{
      <span>Show Items:</span> 
           return (
            <tr key={item.id}>
         <td><span>{item.data}</span></td>
         <td><i
          className="bi-trash red" onClick={()=>dispatch(deleteTODo(item.id))}></i>
        </td> 
        </tr>
   ) })}
        </tbody>
       </table>
     :null }
     </div>
       </>


       
 



  
  )

}

export default ShowTODO