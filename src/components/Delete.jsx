import React, { useState } from 'react'
import Nav from './Nav'

const Delete = () => {
    const[inputData,changeinputData]=useState(
        {name: "",}
    )
    const inputHandler=(event)=>{
        changeinputData({...inputData,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(inputData)
    }
  return (
    <div>
        <Nav />
        <div class="p-3 mb-2 bg-danger-subtle text-danger-emphasis">
        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3 p-5">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">User Name</label>
                                <input type="text" className="form-control"  name='name' value={inputData.name} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="d-grid gap-2">
                                    <button class="btn btn-danger" type="button" onClick={readValue}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Delete