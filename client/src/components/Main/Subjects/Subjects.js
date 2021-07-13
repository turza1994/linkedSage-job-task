import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Subjects = () => {
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

    return (
        <div className="mt-5">
            <h2 className="fs-5 border-bottom border-end d-inline text-success border-rounded border-2 border-dark p-1">Subject Collection</h2>
            <table className="table table-striped table-bordered w-100 mt-3">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Students</th>
                        <th scope="col">Assign Student</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        subjectCollection.map(cv => 
                            <tr key={cv._id}>
                                <td >{cv.name}</td>
                                <td>{cv.students.map(sb => `${sb.name}, `)}</td>
                                <td>
                                    <select className="form-select-sm" aria-label="Default select example" 
                                    onChange={
                                        (e)=>setChoosenSubjectData(
                                            {   subjectId: cv._id, 
                                                studentId: e.target.childNodes[e.target.selectedIndex].getAttribute('studentid')
                                            })} 
                                    >
                                        <option defaultValue>Select Student</option>
                                        {
                                            studentCollection.map(sc => 
                                                <option 
                                                    key={sc._id} 
                                                    value={sc.name}
                                                    studentid={sc._id}
                                                >
                                                    {sc.name} 
                                                </option>)
                                        }
                                    </select>
                                    <button className="btn btn-success btn-sm ms-3" onClick={handleAddSubjectButton}>Assign Student</button>
                                </td>
                            </tr>
                            )
                    }
                </tbody>
                
            </table>
        </div>
    );
};

export default Subjects;