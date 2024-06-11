import React, { useState } from 'react';
import { useAuth } from '../storeToken/auth';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import './style.css';

export const Contact = () => {
    const { user } = useAuth();
    const [userData, setUserData] = useState(true)
    console.log(user)
    const url = "http://localhost:5000/api/form/contact"

    const [defaultData, setDefaultData] = useState({
        username: "",
        email: "",
        phone: "",
        query: "",
        location: ""
    });

    const [input, setInput] = useState(defaultData);
    console.log(typeof (user.phone))

    if (user && userData) {
        setInput({
            username: user.username,
            email: user.email,
            phone: user.phone,
            location: user.location,
            query: ""
        })
        setUserData(false)
    }
    const handleChange = (e) => {
        e.preventDefault();
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const IsValidate = () => {
        let isproceed = true;
        if (!input.email || !input.location || !input.phone || !input.username || !input.query) {
            isproceed = false;
            toast.warning("empty credentials are not entertained");
        }


        return isproceed;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (IsValidate()) {
            try {
                const response = await axios.post(url, input);

                console.log(response)
                if (response.ok) {
                    toast.success("Contact form submitted");
                    setInput(defaultData);
                }
            } catch (error) {
                console.log(error);
            }
        }
    };
    return (
        <>
            <div className='box'>
                <div className='welcome'>
                    <h1>Hurry Up! Create your website with me</h1>
                    Connect to me on LinkedIn and for any query fill the form
                </div>

                <form className='form'>
                    <h1>Contact Me For Query</h1>
                    <div className='input-field'>
                        <label htmlFor="username">Username</label>
                        <input className='input'
                            type="text"
                            placeholder='Enter username'
                            id='username'
                            name='username'
                            autoComplete='off'
                            onChange={handleChange}
                            value={input.username} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor="email">Email</label>
                        <input className='input'
                            type="email"
                            placeholder='Enter email'
                            id='email'
                            name='email'
                            autoComplete='off'
                            onChange={handleChange}
                            value={input.email} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor="username">Query</label>
                        <input className='input'
                            type="text"
                            placeholder='Ask your Query '
                            id='query'
                            name='query'
                            autoComplete='off'
                            onChange={handleChange}
                            value={input.query} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor="phone">Phone</label>
                        <input className='input'
                            type="text"
                            placeholder='Enter phone number'
                            id='phone'
                            name='phone'
                            autoComplete='off'
                            onChange={handleChange}
                            value={input.phone}
                        />
                    </div>
                    <div className='input-field'>
                        <label htmlFor="location">Location</label>
                        <input className='input'
                            type="text"
                            placeholder='Enter Your Location'
                            id='location'
                            name='location'
                            autoComplete='off'
                            onChange={handleChange}
                            value={input.location} />
                    </div>
                    <div className='btn-container'>
                        <button className='bttn' type='Submit' onClick={handleSubmit}>Submit</button>
                    </div>
                    <ToastContainer />
                </form>
            </div>

        </>
    );
}
