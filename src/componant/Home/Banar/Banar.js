import React, { useState } from 'react';
import { FaFacebookF, FaGoogle, FaInstagramSquare, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Banar.css'


const Banar = () => {

    const [toggle, setToggle] = useState(true)
    return (
        <div id='banar-container' className='d-flex align-items-center justify-content-center'>
            <div data-aos="fade-up" data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" className='text-center'>
                <p>Find Job, Employment, and Career Opportunities</p>
                <h1>The Eassiest Way to Get Your New Job</h1>
                <div>
                    <div className='py-5 d-flex align-items-center justify-content-center'>
                        <div className=' w-lg-25 w-md-100 w-sm-100'>

                            <ul className="nav nav-justified w-50" id="ex1" role="tablist">
                                <li className="nav-item">
                                    <button style={{ borderRadius: "5px 0 0 0" }} onClick={() => setToggle(true)} type="button" className="btn-style w-100">Find a candidate</button>
                                </li>
                                <li className="nav-item">
                                    <button style={{ borderRadius: "0 5px 0 0" }} onClick={() => setToggle(false)} type="button" className="btn-style w-100">Looking for a job</button>
                                </li>
                            </ul>

                            <div className="tab-content p-4 bg-style">



                                {
                                    toggle ? <div >
                                        <form class="row g-3">
                                            <div class="col-md-3">
                                                <input type="text" class="form-control" id="validationDefault01" placeholder='Web devoloper' required />
                                            </div>
                                            <div class="col-md-3">
                                                <input type="text" class="form-control" id="validationDefault02" placeholder='Location' required />
                                            </div>
                                            <div class="col-md-3">
                                                <select class="form-select" aria-label="Default select example">
                                                    <option selected>Catagory</option>
                                                    <option value="1">Full Time</option>
                                                    <option value="2">Partime</option>
                                                    <option value="3">Internship</option>
                                                    <option value="3">Temporary</option>
                                                </select>
                                            </div>
                                            <div className='col-md-3'>
                                                <button type="button" class="btn btn-outline-primary">Search</button>
                                            </div>
                                        </form>

                                    </div> : <div>
                                        <form class="row g-3">
                                            <div class="col-md-3">
                                                <input type="text" class="form-control" id="validationDefault01" placeholder='ms mark' required />
                                            </div>
                                            <div class="col-md-3">
                                                <input type="text" class="form-control" id="validationDefault02" placeholder='Location' required />
                                            </div>
                                            <div class="col-md-3">
                                                <select class="form-select" aria-label="Default select example">
                                                    <option selected>Catagory</option>
                                                    <option value="1">Full Time</option>
                                                    <option value="2">Partime</option>
                                                    <option value="3">Internship</option>
                                                    <option value="3">Temporary</option>
                                                </select>
                                            </div>
                                            <div className='col-md-3'>
                                                <button type="button" class="btn btn-outline-primary">Search</button>
                                            </div>
                                        </form>
                                    </div>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banar;