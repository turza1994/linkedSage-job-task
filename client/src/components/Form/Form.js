import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [postData, setPostData] = useState({name: '', email: '', phone: '', dob: ''})

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(postData);
        axios.post('http://localhost:5000/students', postData);
        setPostData({name: '', email: '', phone: '', dob: ''})
        window.location.href="/"
    }

    return (
        <div className="border-start border-bottom rounded px-2">
            <h6 className="text-success fs-5 mt-4 mb-4">Create a student</h6>
            <form onSubmit={handleSubmit} >
                <div className="mb-3 row ">
                    <label htmlFor="name" className="col-sm-2 col-form-label">Name: </label>
                    <div className="col-sm-10">
                        <input type="name" className="form-control-sm" 
                        id="name" placeholder="name" value={postData.name} 
                        onChange={e => setPostData({...postData, name: e.target.value})} />
                    </div>
                </div>
                <div className="mb-3 row ">
                    <label htmlFor="email" className="col-sm-2 form-label">Email: </label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control-sm" 
                        id="email" placeholder="email" value={postData.email}
                        onChange={e => setPostData({...postData, email: e.target.value})} />
                    </div>
                </div>
                <div className="mb-3 row ">
                    <label htmlFor="phone" className="col-sm-2 form-label">Phone: </label>
                    <div className="col-sm-10">
                        <input type="tel" className="form-control-sm" 
                        id="phone" placeholder="phone" value={postData.phone}
                        onChange={e => setPostData({...postData, phone: e.target.value})} />
                    </div>
                </div>
                <div className="mb-3 row ">
                    <label htmlFor="dob" className="col-sm-2 form-label">Birthday: </label>
                    <div className="col-sm-10">
                        <input type="date" className="form-control-sm" 
                        id="dob" value={postData.dob}
                        onChange={e => setPostData({...postData, dob: e.target.value})} />
                    </div>
                </div>
                <div className="mb-3 row ">
                    <button type="submit" className="btn btn-outline-success btn-sm rounded-pill w-50 mx-auto fs-6">Create</button>
                </div>
            </form>
        </div>
    );
};

export default Form;