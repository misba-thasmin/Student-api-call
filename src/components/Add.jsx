import React, { useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const Add = () => {
    const[inputData,changeinputData]= useState(
        {
name: "",
roll_number: "",
admission_number: "",
college: ""
}
    )
    const inputHandler=(event)=>{
        changeinputData({...inputData,[event.target.name]:event.target.value})
    }
    const readValues=()=>{
        console.log(inputData)
    }
    axios.post("http://18.144.111.41/student_api.php",inputData).then(
        (response)=>{
            alert("successfully added")
            
        }
    ).catch( 
        ()=>{alert("something wrong")})
  return (
    <div>
        <Nav />
<div class="p-3 mb-2 bg-danger-subtle text-danger-emphasis">
<div className="container">
    <div className="row">
        <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            
<div className="row g-3 ">
    
    <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
<label  className="form-label">Name</label>
<input type="text" className="form-control" name='name' value={inputData.name} onChange={inputHandler} />
</div>
    </div>
    <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label className="form-label">Roll No</label>
<input type="text" className="form-control" name='roll_number' value={inputData.roll_number}  onChange={inputHandler}/>

    </div>
      <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label className="form-label">Adms. No</label>
<input type="text" className="form-control" name='admission_number' value={inputData.admission_number}  onChange={inputHandler} />

    </div>
    <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label  className="form-label">College</label>
<input type=""  className="form-control" name='college' value={inputData.college}  onChange={inputHandler}></input>


    </div>
    
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div class="d-grid gap-2">
            <button class="btn btn-success" type="button" onClick={readValues}>Submit</button>

</div>
    </div>
</div>

        </div>
    </div>
</div>
</div>

    
  )
}

export default Add