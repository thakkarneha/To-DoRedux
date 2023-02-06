import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function ShowTODO() {
  return (
    <>
    <h1>Show:</h1>
    <Button variant="primary">ALL</Button>
    <Button>Active</Button>
    <Button >Completed</Button>



    </>
  )

}

export default ShowTODO