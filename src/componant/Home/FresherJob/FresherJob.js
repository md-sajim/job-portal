import React from 'react';
import { FaBusinessTime, FaMapMarkedAlt } from 'react-icons/fa';
import './FresherJob.css'
import logo from '../../asset/location.png'

const FresherJob = () => {

    const array = [
        { id: 1, jobcata: "Administrative Assistant.", jobPostName: "Program Assistant" },
        { id: 2, jobcata: "Marketing Manager.", jobPostName: "Social Media Specialist or Coordinator." },
        { id: 3, jobcata: "Marketing Manager.", jobPostName: "Social Media Specialist or Coordinator." },
        { id: 4, jobcata: "Marketing Manager.", jobPostName: "Social Media Specialist or Coordinator." },
        { id: 5, jobcata: "Marketing Manager.", jobPostName: "Social Media Specialist or Coordinator." },
        { id: 6, jobcata: "Marketing Manager.", jobPostName: "Social Media Specialist or Coordinator." },
    ]
    return (
        <div className='container my-5'>
            <h2 className='font-style'>Fresher Recruitments job</h2>
            <hr />
            <p className='font-style'>Today's top 6 Fresher jobs in Bangladesh. Leverage your professional network, <br /> and get hired. New Fresher jobs added daily.</p>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-3">
                {
                    array.map((job) => <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="3000" class="col">
                        <div class="card p-3">
                            <span style={{ backgroundColor: "rgb(198, 168, 200)" }} class="badge w-50 p-2 m-2">{job.jobcata}</span>
                            <div class="card-body">
                                <h5 class="card-title">{job.jobPostName}</h5>
                            </div>
                            <div style={{ fontFamily: "Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif" }} className='px-3 d-flex text-secondary align-self-center'>
                                <FaMapMarkedAlt />
                                <p className='ms-2 me-4'><small>New York, USA</small></p>
                                <FaBusinessTime />
                                <p className='ms-2'><small>Full Time</small></p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex'>
                                    <img height={25} src={logo} alt="" />
                                    <h4>Globe Solution Ltd.</h4>
                                </div>

                                <button id='btn-apply'>Apply</button>
                            </div>
                        </div>
                    </div>)
                }

            </div>
            <div className='d-flex justify-content-center mt-5'>
                <button class="custom-btn btn-12"><span>Click!</span><span>See All</span></button>
            </div>
        </div>
    );
};

export default FresherJob;