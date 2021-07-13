import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Students = () => {
    const [studentCollection, setStudentCollection] = useState([])
    const [subjectCollection, setSubjectCollection] = useState([])
    const [choosenSubjectData, setChoosenSubjectData] = useState({})
    
    useEffect(()=>{
        fetch('http://localhost:5000/students')
        .then(res => res.json())
        .then(json => setStudentCollection(json))
    },[])

    useEffect(()=>{
        fetch('http://localhost:5000/subjects')
        .then(res => res.json())
        .then(json => setSubjectCollection(json))
    },[])

    const handleAddSubjectButton = ()=>{
        const studentId = choosenSubjectData.studentId
        const subjectId = choosenSubjectData.subjectId
        subjectId !== null && axios.patch(`http://localhost:5000/students/${studentId}/${subjectId}`)
        window.location.href="/"
    }

    const handleDeleteButton = ()=>{
        console.log("Clicked");
    }

    return (
        <div className="mt-5">
            <h2 className="fs-5 border-bottom border-end d-inline text-success border-rounded border-2 border-dark p-1">Student Collection</h2>
            <table className="table table-striped table-bordered w-100 mt-3">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Date of Birth</th>
                        <th scope="col">Subjects</th>
                        <th scope="col">Add Subject</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        studentCollection.map(cv => 
                            <tr key={cv._id}>
                                <td >{cv.name}</td>
                                <td>{cv.email}</td>
                                <td>{cv.phone}</td>
                                <td>{cv.dob}</td>
                                <td>{cv.subjects.map(sb => `${sb.name}, `)}</td>
                                <td className="d-flex flex-column justify-content-around align-items-center">
                                    <select className="form-select-sm mb-2" aria-label="Default select example" 
                                    onChange={
                                        (e)=>setChoosenSubjectData(
                                            {   studentId: cv._id, 
                                                subjectId: e.target.childNodes[e.target.selectedIndex].getAttribute('subjectid')
                                            })} 
                                    >
                                        <option defaultValue>Select Subject</option>
                                        {
                                            subjectCollection.map(sc => 
                                                <option 
                                                    key={sc._id} 
                                                    value={sc.name}
                                                    subjectid={sc._id}
                                                >
                                                    {sc.name} 
                                                </option>)
                                        }
                                    </select>
                                    <div className="buttons d-flex">
                                        <button className="btn btn-outline-success btn-sm ms-3" onClick={handleAddSubjectButton}>Add Subject</button>

                                        <button className="btn btn-outline-danger btn-sm ms-3" onClick={handleDeleteButton}>Delete Subject</button>
                                    </div>
                                </td>
                            </tr>
                            )
                    }
                </tbody>
                
            </table>
        </div>
    );
};

export default Students;