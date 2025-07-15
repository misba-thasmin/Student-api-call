import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const View = () => {
    const[studentData, changestudentData] = useState (
      {"status":"success","data":[]}
    )
    const[isLoading,changeisLoading]=useState(true)
const fetchData=() => {
    axios.get("http://18.144.111.41/view_all_students.php").then(
      (response)=>{
        changeisLoading(false)
        changestudentData(response.data)

      }
    ).catch()


}

  useEffect(()=>{fetchData()},[])

  return (
    <div>
        <Nav />

<div className="container">
    <div className="row">
        <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table table-striped">
                <thead>
                                <tr>
                                    <th scope="col">Student Name</th>
                                    <th scope="col">Roll No</th>
                                    <th scope="col">Admission No</th>
                                    <th scope="col">College</th>
                                </tr >
                            </thead>
                            {
                            isLoading ? ( 
                                <div class="spinner-border m-5" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
                                            ):( 
                                            <tbody>
                                {studentData.data.map(
                                    (value, index) => {
                                    return (
                                        <tr>
                                            <td>{value.name}</td>
                                            <td>{value.roll_number}</td>
                                            <td>{value.admission_number}</td>
                                            <td>{value.college}</td>
                                            
                                        </tr>
                                    )
                                
                                }
                                )
                                }
                            </tbody>
                            )                          
                        }
                            
</table>
    </div>
    </div>
</div>
</div>

)

}

export default View