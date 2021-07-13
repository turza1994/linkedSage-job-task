import React, { useState } from 'react';
import axios from 'axios';

const AddSubject = () => {
    const [postData, setPostData] = useState({name: ''})

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(postData);
        axios.post('http://localhost:5000/subjects', postData);
        setPostData({name: ''})
        window.location.href="/"
    }

    return (
        <div className="border-start border-top rounded px-2 mt-5">
            <h6 className="text-success fs-5 mt-2 mb-4 border-bottom border-dark text-center pb-2">Create a subject</h6>
            <form onSubmit={handleSubmit} >
                <div className="mb-3 row ">
                    <label htmlFor="subject-name" className="col-sm-2 col-form-label">Name: </label>
                    <div className="col-sm-10">
                        <input type="name" className="form-control-sm" 
                        id="subject-name" placeholder="name" value={postData.name} 
                        onChange={e => setPostData({...postData, name: e.target.value})} />
                    </div>
                </div>
                <div className="mb-3 row ">
                    <button type="submit" className="btn btn-outline-success btn-sm rounded-pill w-50 mx-auto fs-6">Create</button>
                </div>
            </form>
        </div>
    );
};

export default AddSubject;