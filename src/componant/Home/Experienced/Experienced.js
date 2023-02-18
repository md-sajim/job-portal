import React from 'react';
import { FaBusinessTime, FaHeart, FaMapMarkedAlt } from 'react-icons/fa';
import './Experiences.css'
import logo from '../../asset/download.jpg'
import logo1 from '../../asset/download (1).jpg'
import logo2 from '../../asset/download (2).jpg'
import logo3 from '../../asset/download (3).jpg'
import logo4 from '../../asset/download (4).jpg'
import logo5 from '../../asset/download (5).jpg'
import { Badge, Card } from 'react-bootstrap';
import companylogo from '../../asset/top_3company_inbangladesh/1547096363931.jpg'
import companylogo1 from '../../asset/top_3company_inbangladesh/1563978266173.jpg'
import companylogo2 from '../../asset/top_3company_inbangladesh/images.jpg'
import companywdlogo from '../../asset/top_3_wd/hp.png'
import companywdlogo1 from '../../asset/top_3_wd/hp.png'
import companywdlogo2 from '../../asset/top_3_wd/images.jpg'
import companywdlogo3 from '../../asset/top_3_wd/microsoft-logo-image-23.png'

const Experienced = () => {
    const exArray1 = [
        { id: 1, jobName: "Frontend Development", time: "Full Time", img: logo },
        { id: 2, jobName: "Full Stack Developer", time: "Freelance", img: logo2 },
        { id: 3, jobName: "Open Source Interactive Developer", time: "Full Time", img: logo3 },
        { id: 4, jobName: "Frontend Development", time: "Temporary", img: logo4 },
        { id: 5, jobName: "Open Source Interactive Developer", time: "Partime", img: logo5 },
        { id: 6, jobName: "Frontend Development", time: "contract", img: logo1 },
        { id: 7, jobName: "Frontend Development", time: "Full Time", img: logo },
        { id: 8, jobName: "Full Stack Developer", time: "Freelance", img: logo2 },
        { id: 9, jobName: "Open Source Interactive Developer", time: "Full Time", img: logo3 },
        { id: 10, jobName: "Frontend Development", time: "Temporary", img: logo4 },
        { id: 11, jobName: "Open Source Interactive Developer", time: "Partime", img: logo5 },
        { id: 12, jobName: "Frontend Development", time: "contract", img: logo1 },
    ]
    function clickfunction(id) {
        document.getElementById(id).style.backgroundColor = "rgba(255, 0, 0, 0.545)";

    }
    const companyBd = [
        { id: 1, name: "TigerIT Bangladesh LTD.", img: companylogo, post: 500, link: 'https://www.tigerit.com/' },
        { id: 2, name: "Newscred", img: companylogo1, post: 400, link: 'https://www.optimizely.com/products/orchestrate/content-marketing/' },
        { id: 3, name: "Datasoft Systems BD ltd.", img: companylogo2, post: 333, link: 'http://datasoft-bd.com/' }
    ]
    const companywd = [
        { id: 1, name: "Microsoft", img: companywdlogo, post: 1500, link: 'https://www.tigerit.com/' },
        { id: 2, name: "Hewlett Packard Enterprise (HP)", img: companywdlogo2, post: 1200, link: 'https://www.optimizely.com/products/orchestrate/content-marketing/' },
        { id: 3, name: "Accenture", img: companywdlogo3, post: 1400, link: 'http://datasoft-bd.com/' }
    ]
    return (
        <div className='container my-5'>
            <div className='row'>
                <h2 className='font-style-ex col-8'>Experienced Recruitments job</h2>
                <h2 className='font-style-ex col-4 border-start border-secondary m-0 '>Top Recruitments</h2>
            </div>
            <hr className='m-0 p-0' />
            <div className='row'>
                <p className='ex-sumtitle col-8'> <br />All No Experience jobs in Bangladesh on Careerjet.com.bd, <br /> the search engine ... At least 10 years of solid HR generalist experience</p>
                <p className='ex-sumtitle col-4 border-start border-secondary m-0 '><br />The best recruiting agency in Bangladesh, offers the greatest workforce on the planet. We have dispatched workers to the Middle East, the Far East, ...<br /> <br /></p>
            </div>
            <div className='row'>
                <div className='col-8'>
                    {
                        exArray1.map(expart => <div class="card mb-3">
                            <div class="card-body row">
                                <p><span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
                                    {expart.time}
                                    <span class="visually-hidden">unread messages</span>
                                </span></p>
                                <div className='col-2'>
                                    <img width={100} src={expart.img} alt="" />
                                </div>
                                <div className='col-6'>
                                    <h2>{expart.jobName}</h2>
                                    <div className='d-flex'>
                                        <h4>Globe Solution Ltd.</h4>
                                    </div>
                                    <div style={{ fontFamily: "Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif" }} className='px-3 d-flex text-secondary align-self-center'>
                                        <FaMapMarkedAlt />
                                        <p className='ms-2 me-4'><small>New York, USA</small></p>
                                        <p className='ms-2 me-4'><small>130,000$</small></p>
                                    </div>
                                </div>
                                <div className='col-4 d-flex justify-content-center align-items-center'>
                                    <button id='btn-apply'>Apply</button>
                                    <span id={expart.id} onClick={() => clickfunction(expart.id)} className='p-3 h5 ms-3 border border-danger border-2 rounded-circle hover-effict'><FaHeart /></span>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                <div className='col-4 border-start border-secondary m-0 '>
                    <h5 className='font-style-ex mb-3 border-bottom border-top py-1'>Top 3 IT Companies in Bangladesh</h5>
                    <div className='py-2'>
                        {
                            companyBd.map(topcom => <Card style={{ width: '20rem', marginBottom: "5px" }}>
                                <a href={topcom.link}><Card.Img variant="top" src={topcom.img} /></a>
                                <Card.Body>
                                    <Card.Title>{topcom.name}</Card.Title>
                                    <Card.Text>
                                        Open position <Badge bg="warning">{topcom.post}</Badge>
                                    </Card.Text>

                                </Card.Body>
                            </Card>)
                        }

                    </div>
                    <h5 className='font-style-ex mb-3 border-bottom border-top py-1'>Top 3 IT Companies Worldwide</h5>
                    <div className='py-2'>
                        {
                            companywd.map(topcom => <Card style={{ width: '20rem', marginBottom: "5px" }}>
                                <a href={topcom.link}><Card.Img variant="top" src={topcom.img} /></a>
                                <Card.Body>
                                    <Card.Title>{topcom.name}</Card.Title>
                                    <Card.Text>
                                        Open position <Badge bg="warning">{topcom.post}</Badge>
                                    </Card.Text>

                                </Card.Body>
                            </Card>)
                        }

                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center mt-5'>
                <button class="custom-btn btn-12"><span>Click!</span><span>See All</span></button>
            </div>
        </div>
    );
};

export default Experienced;