import React from 'react';
import userImage from '../images/userImage.png'

export default function About() {
    return (
        <div className="container cont " style={{ maxWidth: '700px', marginTop: '100px', marginBottom: '100px' }}>
            <div className="row py-3">
                <div className=" col-md-4">
                    <img src={userImage} className="img-fluid img-thumbnail" alt="user-img" style={{ maxWidth: '200px', height: 'auto' }} />
                </div>
                <div className=" col-md-6">
                    <form>
                        <h4>Anilraj</h4>
                        <h5 style={{ color: 'blue', }}>Web developer</h5>
                        <h6 className="my-4">Rating : <span style={{ fontSize: '11px', fontWeight: 500 }}>4/5</span></h6>
                        <nav class="nav mt-5 " role="tablist">
                            <a class="nav-link active" id="about-tab" data-toggle="tab" role="tab" aria-current="page" href="#about" style={{ padding: '10px 2px' }} >About</a>
                            <a class="nav-link" id="timeline-tab" data-toggle="tab" role="tab" href="#timeline" style={{ padding: '10px 20px' }} >TimeLine</a>
                        </nav>
                        <div  style={{borderBottom: '2px solid black', maxWidth: '50px'}}></div>
                    </form>
                </div>
                
                    <div className="col-md-2">
                        <form className=" d-flex justify-content-end">
                            <input type="submit" name="btn " className="btn btn-secondary" value="Edit" />
                        </form>
                    </div>
               
            </div>
            <div className="row">
                <div className="col-md-4">
                    <h5 style={{ borderBottom: '2px solid black' }}>Work</h5>
                    <a rel="noreferrer" target="_blank" href="https://www.youtube.com/" style={{ textDecoration: 'none' }}>Youtube</a> <br /><br />
                    <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/anilrajmeena.meena/" style={{ textDecoration: 'none' }}>Facebook</a> <br /><br />
                    <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/anilraj-meena/" style={{ textDecoration: 'none' }}>LinkedIn</a> <br /><br />
                    <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/ANILRAJMEENA2" style={{ textDecoration: 'none' }}>Twitter</a> <br /><br />
                    <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/anilraj_bundi/" style={{ textDecoration: 'none' }}>Instagram</a> <br /><br />
                </div>
                <div className="col-md-8">
                    <div className="tab-content profile-tab" id="myTabContent">
                        <div className="tab-pane fade show active" id="about" role="tabpanel" area-aria-label="about-tab">
                            <div className="row ">
                                <div className="col-md-6">
                                    <label>ID</label>
                                </div>
                                <div className="col-md-6">
                                    <p>_1315432154313514651854</p>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-md-6">
                                    <label>Name</label>
                                </div>
                                <div className="col-md-6">
                                    <p>ANIL RAJ </p>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-md-6">
                                    <label>Surname</label>
                                </div>
                                <div className="col-md-6">
                                    <p>MEENA</p>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-md-6">
                                    <label>Work</label>
                                </div>
                                <div className="col-md-6">
                                    <p>WEB DEVELOPER</p>
                                </div>
                            </div>
                            <div className="row" >
                                <div className="col-md-6">
                                    <label>Technology</label>
                                </div>
                                <div className="col-md-6">
                                    <p>HTML, CSS, REACT.JS, MongoDB, Node.JS</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Languages</label>
                                </div>
                                <div className="col-md-6">
                                    <p>JavaScript, Python</p>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade " id="timeline" role="tabpanel" area-aria-label="timeline-tab">
                            <div className="row ">
                                <div className="col-md-6">
                                    <label>1-10th </label>
                                </div>
                                <div className="col-md-6">
                                    <p>Village</p>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-md-6">
                                    <label>10+2 +JEE</label>
                                </div>
                                <div className="col-md-6">
                                    <p>Kota</p>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-md-6">
                                    <label>College</label>
                                </div>
                                <div className="col-md-6">
                                    <p>Gandhinagar, Guj.</p>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-md-6">
                                    <label>I-Work</label>
                                </div>
                                <div className="col-md-6">
                                    <p>GeoCart</p>
                                </div>
                            </div>
                            <div className="row" >
                                <div className="col-md-6">
                                    <label>II-Work</label>
                                </div>
                                <div className="col-md-6">
                                    <p>BioCule</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>III-Work</label>
                                </div>
                                <div className="col-md-6">
                                    <p>Other</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
