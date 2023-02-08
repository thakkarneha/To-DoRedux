import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function ShowTODO() {
  return (
    <>
    <div className="container">
    <span>Show:</span> <Button variant="primary">ALL</Button>
    <Button variant="">Active</Button>
    <Button variant="">Completed</Button>
</div>


    </>
  )

}

export default ShowTODO