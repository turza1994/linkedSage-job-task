import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

const Students = () => {
    const [studentCollection, setStudentCollection] = useState([])
    
    //fetching stu8dents
    useEffect(()=>{
        fetch('http://localhost:5000/students')
        .then(res => res.json())
        .then(json => setStudentCollection(json))
    },[])
    console.log(studentCollection)

    const handleDeleteButton = ()=>{
        
    }

    return (
        <div>
            Student Collection
            <table className="w-100 mt-5">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Date of Birth</th>
                    <th>Subjects</th>
                    <th>Add Subject</th>
                </tr>
                {
                    studentCollection.map(cv => 
                        <tr key={cv._id}>
                            <td>{cv.name}</td>
                            <td>{cv.email}</td>
                            <td>{cv.phone}</td>
                            <td>{cv.dob}</td>
                            <td>{cv.subjects.map(sb => `${sb.name}, `)}</td>
                            <td>
                                <button className="btn btn-success"><FontAwesomeIcon className="icon me-1 text-light" icon={faEdit} /></button>
                                
                                <button onClick={ () => handleDeleteButton(cv._id) } className="btn btn-danger"><FontAwesomeIcon className="icon me-1 text-light" icon={faTrash} /></button>
                            </td>
                        </tr>
                        )
                }
            </table>
        </div>
    );
};

export default Students;