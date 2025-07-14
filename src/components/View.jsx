import React, { useState } from 'react'
import Nav from './Nav'

const View = () => {
    const[studentData, changestudentData] = useState (
        [
  {
    "name": "Anjali Sharma",
    "roll_number": "101",
    "admission_number": "A001",
    "college": "ABC College"
  },
  {
    "name": "Rohit Verma",
    "roll_number": "102",
    "admission_number": "A002",
    "college": "ABC College"
  },
  {
    "name": "Priya Singh",
    "roll_number": "103",
    "admission_number": "A003",
    "college": "XYZ College"
  },
  {
    "name": "Amit Kumar",
    "roll_number": "104",
    "admission_number": "A004",
    "college": "XYZ College"
  },
  {
    "name": "Sneha Gupta",
    "roll_number": "105",
    "admission_number": "A005",
    "college": "PQR College"
  },
  {
    "name": "Karan Mehta",
    "roll_number": "106",
    "admission_number": "A006",
    "college": "PQR College"
  },
  {
    "name": "Divya Nair",
    "roll_number": "107",
    "admission_number": "A007",
    "college": "LMN College"
  },
  {
    "name": "Manish Patel",
    "roll_number": "108",
    "admission_number": "A008",
    "college": "LMN College"
  },
  {
    "name": "Nisha Das",
    "roll_number": "109",
    "admission_number": "A009",
    "college": "ABC College"
  },
  {
    "name": "Arjun Reddy",
    "roll_number": "110",
    "admission_number": "A010",
    "college": "XYZ College"
  },
  {
    "name": "Vikas Yadav",
    "roll_number": "111",
    "admission_number": "A011",
    "college": "PQR College"
  },
  {
    "name": "Kavya Iyer",
    "roll_number": "112",
    "admission_number": "A012",
    "college": "LMN College"
  },
  {
    "name": "Abhishek Joshi",
    "roll_number": "113",
    "admission_number": "A013",
    "college": "ABC College"
  },
  {
    "name": "Pooja Menon",
    "roll_number": "114",
    "admission_number": "A014",
    "college": "XYZ College"
  },
  {
    "name": "Siddharth Rao",
    "roll_number": "115",
    "admission_number": "A015",
    "college": "PQR College"
  },
  {
    "name": "Meera Pillai",
    "roll_number": "116",
    "admission_number": "A016",
    "college": "LMN College"
  },
  {
    "name": "Rajiv Mishra",
    "roll_number": "117",
    "admission_number": "A017",
    "college": "ABC College"
  },
  {
    "name": "Neha Kulkarni",
    "roll_number": "118",
    "admission_number": "A018",
    "college": "XYZ College"
  },
  {
    "name": "Tarun Ghosh",
    "roll_number": "119",
    "admission_number": "A019",
    "college": "PQR College"
  },
  {
    "name": "Shreya Roy",
    "roll_number": "120",
    "admission_number": "A020",
    "college": "LMN College"
  },
  {
    "name": "Akash Sen",
    "roll_number": "121",
    "admission_number": "A021",
    "college": "ABC College"
  },
  {
    "name": "Ritu Jain",
    "roll_number": "122",
    "admission_number": "A022",
    "college": "XYZ College"
  },
  {
    "name": "Yash Bansal",
    "roll_number": "123",
    "admission_number": "A023",
    "college": "PQR College"
  },
  {
    "name": "Gayathri Mohan",
    "roll_number": "124",
    "admission_number": "A024",
    "college": "LMN College"
  },
  {
    "name": "Nikhil Choudhary",
    "roll_number": "125",
    "admission_number": "A025",
    "college": "ABC College"
  },
  {
    "name": "Isha Kapoor",
    "roll_number": "126",
    "admission_number": "A026",
    "college": "XYZ College"
  },
  {
    "name": "Saurabh Thakur",
    "roll_number": "127",
    "admission_number": "A027",
    "college": "PQR College"
  },
  {
    "name": "Anu Mathew",
    "roll_number": "128",
    "admission_number": "A028",
    "college": "LMN College"
  },
  {
    "name": "Sunny Kaur",
    "roll_number": "129",
    "admission_number": "A029",
    "college": "ABC College"
  },
  {
    "name": "Deepak Nair",
    "roll_number": "130",
    "admission_number": "A030",
    "college": "XYZ College"
  },
  {
    "name": "Farhan Khan",
    "roll_number": "131",
    "admission_number": "A031",
    "college": "PQR College"
  },
  {
    "name": "Lavanya Reddy",
    "roll_number": "132",
    "admission_number": "A032",
    "college": "LMN College"
  },
  {
    "name": "Om Prakash",
    "roll_number": "133",
    "admission_number": "A033",
    "college": "ABC College"
  },
  {
    "name": "Trisha Das",
    "roll_number": "134",
    "admission_number": "A034",
    "college": "XYZ College"
  },
  {
    "name": "Parth Sharma",
    "roll_number": "135",
    "admission_number": "A035",
    "college": "PQR College"
  },
  {
    "name": "Bhavya Mishra",
    "roll_number": "136",
    "admission_number": "A036",
    "college": "LMN College"
  },
  {
    "name": "Ajay Chauhan",
    "roll_number": "137",
    "admission_number": "A037",
    "college": "ABC College"
  },
  {
    "name": "Tanvi Rawat",
    "roll_number": "138",
    "admission_number": "A038",
    "college": "XYZ College"
  },
  {
    "name": "Krishna Sinha",
    "roll_number": "139",
    "admission_number": "A039",
    "college": "PQR College"
  },
  {
    "name": "Himani Tiwari",
    "roll_number": "140",
    "admission_number": "A040",
    "college": "LMN College"
  },
  {
    "name": "Sohail Sheikh",
    "roll_number": "141",
    "admission_number": "A041",
    "college": "ABC College"
  },
  {
    "name": "Monika Yadav",
    "roll_number": "142",
    "admission_number": "A042",
    "college": "XYZ College"
  },
  {
    "name": "Kushal Roy",
    "roll_number": "143",
    "admission_number": "A043",
    "college": "PQR College"
  },
  {
    "name": "Ayesha Noor",
    "roll_number": "144",
    "admission_number": "A044",
    "college": "LMN College"
  },
  {
    "name": "Vivek Dubey",
    "roll_number": "145",
    "admission_number": "A045",
    "college": "ABC College"
  }
]
    )
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
                            <tbody>
                                {studentData.map((value, index) => {
                                    return (
                                        <tr>
                                            <td>{value.name}</td>
                                            <td>{value.roll_number}</td>
                                            <td>{value.admission_number}</td>
                                            <td>{value.college}</td>
                                            
                                        </tr>
                                    )
                                })}
                            </tbody>







</table>


        </div>
    </div>
</div>


    </div>
  )
}

export default View