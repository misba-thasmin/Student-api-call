import React, { useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const Search = () => {
    const[inputData,changeinputData]= useState(
        {name: "",}
    )
    const inputHadler =(event)=>{
        changeinputData({...inputData,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(inputData)
    }
    axios.post("http://18.144.111.41/student_api.php").then(
        (Response)=>{
            alert("successfully added")
        }
    ).catch(
        ()=>{alert("something wrong")}
    )
  return (
    <div>
        <Nav />
        <div class="p-3 mb-2 bg-danger-subtle text-danger-emphasis">
        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3 p-5">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Search Student</label>
                                <input type="text" className="form-control"  name='name' value={inputData.name} onChange={inputHadler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="d-grid gap-2">
                                    <button class="btn btn-success" type="button" onClick={readValue}>Submit</button>
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

export default Search